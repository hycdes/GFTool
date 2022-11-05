// 玩点配合Map，存在即这个tag包含了玩点配合值
var lib_cpt_tag = new Map
// 天狼星玩法配合
lib_cpt_tag.set('gp_s_itf_phantom', [
    ['gp_s_block_watchsmoke', 1, '逃生组合'],
    ['gp_s_block_watchflash', 0.5, '逃生组合'],
])

// 莫比乌斯玩法配合
lib_cpt_tag.set('gp_m_agile_teleport', [
    ['gp_m_agile_teleportally', 1, '双人包夹'],
    ['gp_m_agile_fastmove', 0.5, '双人包夹']
])
lib_cpt_tag.set('gp_m_agile_teleportally', [
    ['gp_m_agile_teleport', 1, '双人包夹'],
    ['gp_m_intel_maxhackexpose', 0.5, '指定抓人'],
])
lib_cpt_tag.set('gp_m_agile_fastmove', [
    ['gp_m_agile_teleport', 0.5, '双人包夹'],
    ['gp_m_agile_fastmove', 0.5, '双人包夹'],
])
lib_cpt_tag.set('gp_m_block_slow', [
    ['gp_m_damage_breakout', 1, '高额伤害'],
    ['gp_m_block_slow', 1, '控制配合'],
    ['gp_m_block_control', 0.5, '控制配合'],
])
lib_cpt_tag.set('gp_m_block_control', [
    ['gp_m_damage_breakout', 0.5, '高额伤害'],
    ['gp_m_block_slow', 0.5, '控制配合'],
    ['gp_m_block_control', 0.2, '控制配合'],
])
lib_cpt_tag.set('gp_m_damage_breakout', [
    ['gp_m_block_slow', 1, '高额伤害'],
    ['gp_m_block_control', 0.5, '高额伤害']
])
lib_cpt_tag.set('gp_m_block_lockexposearea', [
    ['gp_m_intel_cloth', 0.5, '位置锁定'],
])
lib_cpt_tag.set('gp_m_intel_cloth', [
    ['gp_m_block_lockexposearea', 0.5, '位置锁定'],
])
lib_cpt_tag.set('gp_m_intel_maxhackexpose', [
    ['gp_m_agile_teleportally', 0.5, '指定抓人'],
])


// 玩点配合值Map，记录tag*tag分数最高值
// 结构：< tag_name , [ tag_this_name , value ] >
var lib_cpt_tag_value = new Map
// 
// 结构：< tdoll_id , [ [tag , level , tag_this , level_this , cpt_value ]... ] >
var lib_cpt_record = new Map

// 计算配合度
// 定位补全值（天狼星）：?

// 莫比乌斯
// 伤害 阻制 敏捷 情报 隐秘，除以10
// 定位搭配值 = [(1+伤害)*(1+阻制) + (1+敏捷)] * (1+情报+隐秘/2)
// 玩点搭配：+数值
// 

var weight_orientation = 100
var weight_gameplaycompatibility = 7
var weight_bios = 100

// 玩点搭配值：
function calculate_compatibility(ID) {
    if (ID === -1) true
    else {
        var display_type = ''
        var cpt = 0 // 契合度
        var cpt_ort = 0 // 定位搭配值
        var cpt_gp = 0 // 玩点搭配值
        var cpt_bios = 0 // 实战修正值
        var cpt_list = []
        var tdoll_this = get_tdoll_from_id(ID)
        var orientationlist_this = tdoll_this.orientationlist
        var skilllist_this = tdoll_this.skilllist
        var is_skip = false // 是否跳过，同ID或跨阵营不计算相似度
        lib_cpt_record.clear()

        // Sirius Props
        if (ID > 1000 && ID < 2000) {
            display_type = 'sirius_props'
        }

        // Mobius Hero
        else if (ID > 2000 && ID < 10000) {
            display_type = 'mobius_hero'
            var array_score_ort_this = [0, 0, 0, 0, 0]
            var array_score_ort_total = [0, 0, 0, 0, 0]
            var array_score_ort = [0, 0, 0, 0, 0]
            // 计算自己的定位分
            for (var ort of orientationlist_this) {
                if (ort[2] === 'mobius_orientation_damage') array_score_ort_this[0] += ort[3]
                else if (ort[2] === 'mobius_orientation_block') array_score_ort_this[1] += ort[3]
                else if (ort[2] === 'mobius_orientation_agile') array_score_ort_this[2] += ort[3]
                else if (ort[2] === 'mobius_orientation_intel') array_score_ort_this[3] += ort[3]
                else if (ort[2] === 'mobius_orientation_hide') array_score_ort_this[4] += ort[3]
            }
            // 对于每个人
            for (var tdoll of lib_tdoll) {
                // init
                cpt = 0
                cpt_ort = 0
                cpt_gp = 0
                cpt_bios = 0
                is_skip = false
                lib_cpt_tag_value.clear()
                // self, or diff-type, then skip
                if (ID === tdoll.id) is_skip = true
                if (tdoll_this.type != tdoll.type) is_skip = true
                // function
                if (!is_skip) {
                    array_score_ort = [0, 0, 0, 0, 0]
                    for (var ort_tdoll of tdoll.orientationlist) {
                        array_score_ort[get_ort_index('mobius_hero', ort_tdoll[2])] += ort_tdoll[3]
                        // if (ort_tdoll[2] === 'mobius_orientation_damage') array_score_ort[0] += ort_tdoll[3]
                        // else if (ort_tdoll[2] === 'mobius_orientation_block') array_score_ort[1] += ort_tdoll[3]
                        // else if (ort_tdoll[2] === 'mobius_orientation_agile') array_score_ort[2] += ort_tdoll[3]
                        // else if (ort_tdoll[2] === 'mobius_orientation_intel') array_score_ort[3] += ort_tdoll[3]
                        // else if (ort_tdoll[2] === 'mobius_orientation_hide') array_score_ort[4] += ort_tdoll[3]
                    }

                    // 定位搭配值
                    for (var i = 0; i < 6; i++) array_score_ort_total[i] = array_score_ort[i] + array_score_ort_this[i]
                    cpt_ort = (
                        (1 + Math.min(5, array_score_ort_total[0]) / 10) * (1 + Math.min(5, array_score_ort_total[1]) / 10)
                        + (1 + array_score_ort_total[2] / 10)
                    )
                        * (1 + Math.min(5, array_score_ort_total[3]) / 10 + array_score_ort_total[4] / 20)

                    // 玩点搭配值
                    for (var skill_this of skilllist_this) {
                        for (var tag_this of skill_this) {
                            for (var skill of tdoll.skilllist) {
                                for (var tag of skill) {
                                    // 存在玩点配合，对比人选的tag，存在其他可能的tag与之形成玩点配合
                                    if (lib_cpt_tag.get(tag[2]) != undefined) {
                                        // 如果选定的人，其tag与对比tag存在配合（找到的下标不为-1）
                                        var list_cpt_tag = lib_cpt_tag.get(tag[2])
                                        var it_find = is_element_in_array(tag_this[2], list_cpt_tag, 0)
                                        if (it_find != -1) {
                                            var cpt_para = list_cpt_tag[it_find][1]
                                            var tag_level_1 = tag[3]
                                            var tag_level_2 = tag_this[3]
                                            if (tag_level_1 === -1) tag_level_1 = 5
                                            if (tag_level_2 === -1) tag_level_2 = 5
                                            var value_new = tag_level_1 * tag_level_2 * cpt_para
                                            // 记录其它人，这个tag的配合值，取最大值
                                            // < tag_name , [ tag_this_name , value ] >
                                            // 如果未定义，或者定义且新值更高
                                            if (lib_cpt_tag_value.get(tag[2]) === undefined || value_new > (lib_cpt_tag_value.get(tag[2]))[1]) {
                                                // 记录数值
                                                lib_cpt_tag_value.set(tag[2], [tag_this[2], value_new])
                                                // 记录配合情况
                                                var record_list = []
                                                if (lib_cpt_record.get(tdoll.id) != undefined) record_list = lib_cpt_record.get(tdoll.id)
                                                var record_new = [tag[2], tag[3], tag_this[2], tag_this[3], value_new]
                                                var exist_it = is_element_in_array(tag[2], record_list, 0)
                                                if (exist_it != -1) record_list[exist_it] = record_new
                                                else record_list.push(record_new)
                                                lib_cpt_record.set(tdoll.id, record_list)
                                            }

                                        }
                                    }
                                }
                            }
                        }
                    }
                    for (var value_pair of lib_cpt_tag_value.values()) {
                        cpt_gp += value_pair[1]
                    }

                    // 实战修正

                    // 汇总
                    cpt_ort = Math.ceil(cpt_ort * weight_orientation)
                    cpt_gp = Math.ceil(cpt_gp * weight_gameplaycompatibility)
                    cpt_bios = Math.ceil(cpt_bios * weight_bios)
                    cpt = cpt_ort + cpt_gp + cpt_bios
                    if (cpt > 0) cpt_list.push([tdoll.id, cpt, cpt_ort, cpt_gp, cpt_bios])

                    // debug
                    // console.log(lib_cpt_record)
                }

            }
            cpt_list.sort(comp_sim)

            // ========== 展示部分 ==========

            var max_num = num_sort2 // can be modify
            if (cpt_list.length < max_num) max_num = cpt_list.length
            var str_display = ''

            for (var n = 0; n < max_num; n++) {
                var current_tdoll = get_tdoll_from_id(cpt_list[n][0])
                var current_str = ''
                // 角色按钮
                current_str += '<tr><td style="vertical-align:middle"><button type="button" style="padding:5px" class="btn btn-default" onclick="classify_by_tdoll(' + current_tdoll.id + ')">'
                current_str += '<img src="avatar/' + current_tdoll.id + '.png" style="width:37px;height:37px"> '
                eval('current_str+=lib_name.t' + current_tdoll.id)
                current_str += '</button>'
                current_str += '</td>'

                // 配合度
                current_str += '<td style="vertical-align:middle;text-align:center"><b><span style="color:dodgerblue;font-size:16px">' + cpt_list[n][1] + '</span></b><br>'
                current_str += '= <span style="color:darkgreen">定位搭配 ' + cpt_list[n][2] + '</span>'
                current_str += ' + <span style="color:darkred"> 玩点契合 ' + cpt_list[n][3] + '</span>'
                current_str += ' + <span style="color:purple"> 实战修正 ' + cpt_list[n][4] + '</span>'
                current_str += '</td>'

                // 定位展示
                current_str += '<td style="line-height:40px;vertical-align:middle">'
                // 统计定位分
                var ort_list = [0, 0, 0, 0, 0]
                for (var temp_ort of tdoll_this.orientationlist) {
                    ort_list[get_ort_index('mobius_hero', temp_ort[2])] += temp_ort[3]
                }
                for (var temp_ort of current_tdoll.orientationlist) {
                    ort_list[get_ort_index('mobius_hero', temp_ort[2])] += temp_ort[3]
                }
                for (var ortidx = 0; ortidx < ort_list.length; ortidx++) {
                    if (ort_list[ortidx] > 5) ort_list[ortidx] = 5
                }
                current_str += '伤害 <span style="color:' + get_level_color(ort_list[0]) + '"><b>' + ort_list[0] + '</span></b> '
                current_str += '阻制 <span style="color:' + get_level_color(ort_list[1]) + '"><b>' + ort_list[1] + '</span></b> '
                current_str += '敏捷 <span style="color:' + get_level_color(ort_list[2]) + '"><b>' + ort_list[2] + '</span></b> '
                current_str += '情报 <span style="color:' + get_level_color(ort_list[3]) + '"><b>' + ort_list[3] + '</span></b> '
                current_str += '隐秘 <span style="color:' + get_level_color(ort_list[4]) + '"><b>' + ort_list[4] + '</span></b>'
                for (var i = 0; i < current_tdoll.orientationlist.length; i++) {
                    var temp_str_btn = ''

                    for (var current_ort of current_tdoll.orientationlist) {
                        temp_str_btn += get_btn_html(current_ort, 'disabled')
                    }
                }
                current_str += '</td>'

                // 配合玩点展示
                current_str += '<td style="line-height:40px;vertical-align:middle">'
                if (lib_cpt_record.get(cpt_list[n][0]) != undefined) {
                    for (var record of lib_cpt_record.get(cpt_list[n][0])) {
                        current_str += get_btn_html([2, 1, record[0], record[1]], 'disabled', 'nolevel')
                        current_str += ' 适合 '
                        current_str += get_btn_html([2, 1, record[2], record[3]], 'disabled', 'nocolor/nolevel')
                        current_str += '，契合值=' + Math.ceil(record[4] * weight_gameplaycompatibility)
                        current_str += '<br>'
                    }
                }

                current_str += '</td>'

                current_str += '</tr>'
                str_display += current_str
            }

            document.getElementById('result_2_par').innerHTML = str_display

        }

        // Sirius Hero
        else if (ID > 10000) {
            display_type = 'sirius_hero'
        }
    }
}


function init_fill_cpt() {
    var str_thead = ''
    var str_tbody = ''
    document.getElementById('detail_cpt_thead')
}