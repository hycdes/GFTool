// 玩点配合Map，存在即这个tag包含了玩点配合值
var lib_cpt_tag = new Map
// 天狼星玩法配合
set_cpt('gp_s_hack_boost', 'gp_s_hack_relay', 0.5, '达到保存点')

set_cpt('gp_s_support_boost', 'gp_s_block_control', 0.6, '助力救援')
set_cpt('gp_s_support_saverecover', 'gp_s_block_control', 0.6, '助力救援')

set_cpt('gp_s_hack_relay', 'gp_s_intel_weakarea', 0.2, '保护接力')
set_cpt('gp_s_hack_relay', 'gp_s_intel_strongarea', 0.4, '保护接力')
set_cpt('gp_s_hack_relay', 'gp_s_intel_acclocate', 0.4, '保护接力')
set_cpt('gp_s_hack_relay', 'gp_s_intel_maplocate', 0.4, '保护接力')
set_cpt('gp_s_hack_relay', 'gp_s_block_slowfar', 0.6, '保护接力')

set_cpt('gp_s_itf_phantom', 'gp_s_itf_phantomplus', 1, '增幅幻影')
set_cpt('gp_s_itf_phantom', 'gp_s_block_watchsmoke', 0.6, '强化幻影迷惑')
set_cpt('gp_s_itf_phantom', 'gp_s_block_watchflash', 0.2, '强化幻影迷惑')
set_cpt('gp_s_itf_phantom', 'gp_s_hide_disguise', 0.6, '强化幻影迷惑')

set_cpt('gp_s_block_control', 'gp_s_block_weakresist', 1, '增强控制')

set_cpt('gp_s_block_watchsmoke', 'gp_s_hide_disguise', 0.3, '变装不易察觉')
set_cpt('gp_s_block_watchsmoke', 'gp_s_block_watchflash', 0.3, '强化视觉遮蔽')

// 莫比乌斯玩法配合
set_cpt('gp_m_damage_breakout', 'gp_m_block_slow', 1, '高额伤害')
set_cpt('gp_m_damage_breakout', 'gp_m_block_control', 0.5, '高额伤害')

set_cpt('gp_m_block_slow', 'gp_m_block_slow', 1, '控制配合')
set_cpt('gp_m_block_slow', 'gp_m_block_control', 0.6, '控制配合')
set_cpt('gp_m_block_control', 'gp_m_block_control', 0.2, '控制配合')

set_cpt('gp_m_agile_teleport', 'gp_m_agile_teleportally', 1, '双人包夹')
set_cpt('gp_m_agile_teleport', 'gp_m_agile_fastmove', 0.6, '双人包夹')
set_cpt('gp_m_agile_teleportally', 'gp_m_intel_maxhackexpose', 0.6, '指定抓人')

set_cpt('gp_m_intel_cloth', 'gp_m_block_lockexposearea', 0.6, '位置锁定')

// 实战修正
var lib_cpt_bios = new Map
set_cpt_bios(11011, 'gp_u_other_selfonly', 50, 'prop')
set_cpt_bios(11012, 'gp_u_other_selfonly', 50, 'prop')
set_cpt_bios(11032, 'gp_s_block_control', 50, 'prop')
set_cpt_bios(11061, 'gp_u_other_selfonly', 100, 'prop')

// 玩点配合值Map，记录tag*tag分数最高值
// 结构：< tag_name , [ tag_this_name , value ] >
var lib_cpt_tag_value = new Map
// 
// 结构：< tdoll_id , [ [tag , level , tag_this , level_this , cpt_value ]... ] >
var lib_cpt_record = new Map

// 计算配合度
// 定位补全值（天狼星）：?

// 天狼星
// 破译 援护 情报 干扰 生存，除以10
// 定位搭配值 = (1+破译)*(1+干扰)*(1+情报)(1+援护+生存)

// 莫比乌斯
// 伤害 阻制 敏捷 情报 隐秘，除以10
// 定位搭配值 = [(1+伤害)*(1+阻制) + (1+敏捷)] * (1+情报+隐秘/2)

var weight_orientation_sirius_heroprop = 40
var weight_orientation_sirius_herohero = 100
var weight_orientation_sirius_propprop = 20
var weight_orientation_mobius = 100
var weight_gameplaycompatibility = 7
var weight_bios = 1

// 玩点搭配值：
function calculate_compatibility(ID) {
    if (ID === -1) true
    else {
        var display_type = ''
        var cpt = 0 // 契合度
        var cpt_ort = 0 // 定位搭配值
        var cpt_gp = 0 // 玩点搭配值
        var cpt_bios = 0 // 实战修正值
        var cpt_list_1 = [], cpt_list_2 = [] // 搭配列表（天狼星用）
        var cpt_list = [] // 搭配列表（莫比乌斯用）
        var tdoll_this = get_tdoll_from_id(ID)
        var orientationlist_this = tdoll_this.orientationlist
        var skilllist_this = tdoll_this.skilllist
        var is_skip = false // 是否跳过，同ID或跨阵营不计算相似度
        lib_cpt_record.clear()

        // Sirius
        if ((ID > 1000 && ID < 2000) || ID > 10000) {
            if (ID > 1000 && ID < 2000) display_type = 'sirius_prop'
            else display_type = 'sirius_hero'
            var array_score_ort_this = [0, 0, 0, 0, 0]
            var array_score_ort_total = [0, 0, 0, 0, 0]
            var array_score_ort = [0, 0, 0, 0, 0]
            // 计算自己的定位分
            for (var ort of orientationlist_this) {
                if (ort[2] === 'sirius_orientation_hack') array_score_ort_this[0] += ort[3]
                else if (ort[2] === 'sirius_orientation_support') array_score_ort_this[1] += ort[3]
                else if (ort[2] === 'sirius_orientation_intel') array_score_ort_this[2] += ort[3]
                else if (ort[2] === 'sirius_orientation_interference') array_score_ort_this[3] += ort[3]
                else if (ort[2] === 'sirius_orientation_survive') array_score_ort_this[4] += ort[3]
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
                if (tdoll.type === 3) is_skip = true
                // function
                if (!is_skip) {
                    var temp_combo_type = '' // default
                    if (display_type === 'sirius_hero' && tdoll.id > 10000) {
                        temp_combo_type = 'herohero'
                    }
                    else if (display_type === 'sirius_hero' && (tdoll.id > 1000 && tdoll.id < 2000)) {
                        temp_combo_type = 'heroprop'
                    }
                    else if (display_type === 'sirius_prop' && tdoll.id > 10000) {
                        temp_combo_type = 'heroprop'
                    }
                    else if (display_type === 'sirius_prop' && (tdoll.id > 1000 && tdoll.id < 2000)) {
                        temp_combo_type = 'propprop'
                    }

                    // 定位搭配值
                    array_score_ort = [0, 0, 0, 0, 0]
                    for (var ort_tdoll of tdoll.orientationlist) {
                        array_score_ort[get_ort_index('sirius_prop', ort_tdoll[2])] += ort_tdoll[3]
                    }
                    for (var i = 0; i < 6; i++) array_score_ort_total[i] = array_score_ort[i] + array_score_ort_this[i]

                    cpt_ort = (1 + Math.min(5, array_score_ort_total[0]) / 10)
                        * (1 + Math.min(5, array_score_ort_total[2]) / 10)
                        * (1 + Math.min(5, array_score_ort_total[3]) / 10)
                        * (1 + Math.min(7, array_score_ort_total[1] + array_score_ort_total[4]) / 14)

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

                                            // ↓ 处理局内成长打折
                                            var tag_dev_1 = get_dev_percent(tag)
                                            var tag_dev_2 = get_dev_percent(tag_this)
                                            // ↑ 处理局内成长打折

                                            var cpt_para = list_cpt_tag[it_find][1]
                                            var tag_level_1 = tag[3]
                                            var tag_level_2 = tag_this[3]
                                            if (tag_level_1 === -1) tag_level_1 = 5
                                            if (tag_level_2 === -1) tag_level_2 = 5
                                            var value_new = tag_level_1 * tag_level_2 * tag_dev_1 * tag_dev_2 * cpt_para
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
                    var temp_bios_list = lib_cpt_bios.get(ID)
                    if (temp_bios_list != undefined) {
                        for (var skill of tdoll.skilllist) {
                            for (var tag of skill) {
                                for (var tag of skill) {
                                    var temp_idx = is_element_in_array(tag[2], temp_bios_list, 0)
                                    if (temp_idx != -1) { // 有符合修正的tag
                                        if (temp_bios_list[temp_idx][2] === 'prop') {
                                            if (temp_combo_type === 'heroprop') {
                                                cpt_bios = temp_bios_list[temp_idx][1]
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    }


                    // 汇总
                    if (temp_combo_type === 'herohero') cpt_ort *= weight_orientation_sirius_herohero
                    else if (temp_combo_type === 'heroprop') cpt_ort *= weight_orientation_sirius_heroprop
                    else if (temp_combo_type === 'propprop') cpt_ort *= weight_orientation_sirius_propprop
                    cpt_ort = Math.ceil(cpt_ort)
                    cpt_gp = Math.ceil(cpt_gp * weight_gameplaycompatibility)
                    cpt_bios = Math.ceil(cpt_bios * weight_bios)
                    cpt = cpt_ort + cpt_gp + cpt_bios
                    if (cpt > 0) {
                        if (tdoll.id > 10000) {
                            cpt_list_1.push([tdoll.id, cpt, cpt_ort, cpt_gp, cpt_bios]) // 英雄
                        }
                        else if (tdoll.id > 1000 && tdoll.id < 2000) {
                            cpt_list_2.push([tdoll.id, cpt, cpt_ort, cpt_gp, cpt_bios]) // 道具
                        }
                    }
                }
            }
            cpt_list_1.sort(comp_sim)
            cpt_list_2.sort(comp_sim)

            // ========== 展示部分 ==========

            var max_num_1 = num_sort2, max_num_2 = num_sort2 // can be modify
            if (cpt_list_1.length < max_num_1) max_num_1 = cpt_list_1.length
            if (cpt_list_2.length < max_num_2) max_num_2 = cpt_list_2.length
            var str_display = ''

            str_display += '<table class="table table-bordered">'
            str_display += '<tr>'

            // ========== 角色表 ==========
            str_display += '<td style="width:50%">'
            str_display += '<table class="table table-bordered table-hovered">'
            str_display += '<thead><th style="text-align:center">角色</th><th style="text-align:center">搭配度</th>'
            str_display += '</thead>'
            str_display += '<tbody>'

            for (var n = 0; n < max_num_1; n++) {
                var current_tdoll = get_tdoll_from_id(cpt_list_1[n][0])
                var current_str = ''
                // 角色按钮
                current_str += '<tr><td style="vertical-align:middle"><button type="button" style="padding:5px" class="btn btn-default" onclick="classify_by_tdoll(' + current_tdoll.id + ')">'
                current_str += '<img src="avatar/' + current_tdoll.id + '.png" style="width:37px;height:37px"> '
                eval('current_str+=lib_name.t' + current_tdoll.id)
                current_str += '</button>'
                current_str += '</td>'

                // 配合度
                current_str += '<td style="line-height:40px;vertical-align:middle"><b><span style="color:dodgerblue">' + cpt_list_1[n][1] + '</span></b>'
                current_str += '= <span style="color:darkgreen">定位搭配 ' + cpt_list_1[n][2] + '</span>'
                current_str += ' + <span style="color:darkred"> 玩点契合 ' + cpt_list_1[n][3] + '</span>'
                if (cpt_list_1[n][4] > 0) {
                    current_str += ' + <span style="color:purple"> 实战修正 '
                    current_str += + cpt_list_1[n][4] + '</span>'
                }

                if (lib_cpt_record.get(cpt_list_1[n][0]) != undefined) {
                    for (var record of lib_cpt_record.get(cpt_list_1[n][0])) {
                        current_str += '<br>'
                        current_str += get_btn_html([1, 1, record[0], record[1]], 'disabled', 'nolevel')
                        current_str += ' 适合 '
                        current_str += get_btn_html([1, 1, record[2], record[3]], 'disabled', 'nocolor/nolevel')
                        current_str += '，契合值=' + Math.ceil(record[4] * weight_gameplaycompatibility)
                    }
                }
                current_str += '</td>'

                current_str += '</tr>'
                str_display += current_str
            }
            str_display += '</tbody>'
            str_display += '</table>'
            str_display += '</td>'

            // ========== 道具表 ==========
            str_display += '<td style="width:50%">'
            str_display += '<table class="table table-bordered table-hovered">'
            str_display += '<thead><th style="text-align:center">道具</th><th style="text-align:center">搭配度</th>'
            str_display += '</thead>'
            str_display += '<tbody>'

            for (var n = 0; n < max_num_2; n++) {
                var current_tdoll = get_tdoll_from_id(cpt_list_2[n][0])
                var current_str = ''
                // 角色按钮
                current_str += '<tr><td style="vertical-align:middle"><button type="button" style="padding:5px" class="btn btn-default" onclick="classify_by_tdoll(' + current_tdoll.id + ')">'
                current_str += '<img src="avatar/' + current_tdoll.id + '.png" style="width:37px;height:37px"> '
                eval('current_str+=lib_name.t' + current_tdoll.id)
                current_str += '</button>'
                current_str += '</td>'

                // 配合度
                current_str += '<td style="line-height:40px;vertical-align:middle"><b><span style="color:dodgerblue">' + cpt_list_2[n][1] + '</span></b>'
                current_str += '= <span style="color:darkgreen">定位搭配 ' + cpt_list_2[n][2] + '</span>'
                current_str += ' + <span style="color:darkred"> 玩点契合 ' + cpt_list_2[n][3] + '</span>'
                if (cpt_list_2[n][4] > 0) {
                    current_str += ' + <span style="color:purple"> 实战修正 '
                    current_str += + cpt_list_2[n][4] + '</span>'
                }
                if (lib_cpt_record.get(cpt_list_2[n][0]) != undefined) {
                    for (var record of lib_cpt_record.get(cpt_list_2[n][0])) {
                        current_str += '<br>'
                        current_str += get_btn_html([1, 1, record[0], record[1]], 'disabled', 'nolevel')
                        current_str += ' 适合 '
                        current_str += get_btn_html([1, 1, record[2], record[3]], 'disabled', 'nocolor/nolevel')
                        current_str += '，契合值=' + Math.ceil(record[4] * weight_gameplaycompatibility)
                    }
                }
                current_str += '</td>'

                current_str += '</tr>'
                str_display += current_str
            }
            str_display += '</tbody>'
            str_display += '</table>'
            str_display += '</td>'


            str_display += '</tr>'
            str_display += '</table>'



            document.getElementById('commit_partner').innerHTML = str_display


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

                                            // ↓ 处理局内成长打折
                                            var tag_dev_1 = get_dev_percent(tag)
                                            var tag_dev_2 = get_dev_percent(tag_this)
                                            // ↑ 处理局内成长打折

                                            var cpt_para = list_cpt_tag[it_find][1]
                                            var tag_level_1 = tag[3]
                                            var tag_level_2 = tag_this[3]
                                            if (tag_level_1 === -1) tag_level_1 = 5
                                            if (tag_level_2 === -1) tag_level_2 = 5
                                            var value_new = tag_level_1 * tag_level_2 * tag_dev_1 * tag_dev_2 * cpt_para
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
                    cpt_ort = Math.ceil(cpt_ort * weight_orientation_mobius)
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
            var str_display = ''
            var max_num = num_sort2 // can be modify
            if (cpt_list.length < max_num) max_num = cpt_list.length

            str_display += '<table class="table table-bordered table-hovered">'
            str_display += '<thead>'
            str_display += '<th id="th_show_cpt_1" style="text-align:center">角色</th>'
            str_display += '<th id="th_show_cpt_2" style="text-align:center">搭配度</th>'
            str_display += '<th id="th_show_cpt_3" style="text-align:center">定位总分</th>'
            str_display += '<th id="th_show_cpt_4" style="text-align:center">玩点配合</th>'
            str_display += '</thead>'
            str_display += '<tbody>'

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

            str_display += '</tbody>'
            str_display += '</table>'

            document.getElementById('commit_partner').innerHTML = str_display

        }

    }
}


function set_cpt(tag1, tag2, percent, description) {
    var temp_list, is_exist
    // tag1->tag2
    temp_list = lib_cpt_tag.get(tag1)
    is_exist = false
    if (temp_list != undefined) {
        for (var info of temp_list) {
            if (info[0] === tag2) {
                is_exist = true
                break
            }
        }
    } else temp_list = []
    if (is_exist) {
        if (tag1 != tag2) console.log('bug exist in cpt_pair:(' + tag1 + ',' + tag2 + ')')
    }
    else {
        var temp_info = [tag2, percent, description]
        temp_list.push(temp_info)
        lib_cpt_tag.set(tag1, temp_list)
    }
    // tag2->tag1
    temp_list = lib_cpt_tag.get(tag2)
    is_exist = false
    if (temp_list != undefined) {
        for (var info of temp_list) {
            if (info[0] === tag1) {
                is_exist = true
                break
            }
        }
    } else temp_list = []
    if (is_exist) {
        if (tag1 != tag2) console.log('bug exist in cpt_pair:(' + tag2 + ',' + tag1 + ')')
    }
    else {
        var temp_info = [tag1, percent, description]
        temp_list.push(temp_info)
        lib_cpt_tag.set(tag2, temp_list)
    }
}
function set_cpt_bios(ID, tag, value, requirement) {
    var temp_list = lib_cpt_bios.get(ID)
    var is_exist = false
    if (temp_list === undefined) temp_list = []
    for (var element of temp_list) {
        if (element[0] === tag) {
            if (element[1] === value && element[2] === requirement) { // 同时满足相同tag、value、requirement
                is_exist = true
                break
            }
        }
    }
    if (!is_exist) {
        temp_list.push([tag, value, requirement])
        lib_cpt_bios.set(ID, temp_list)
    }
}