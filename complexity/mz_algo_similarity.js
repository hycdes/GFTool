var lib_sim = new Map // 存储选择人物每个tag的等级
var lib_sim_value = new Map // 存储选择人物每个tag已经计算好的数值
var lib_sim_similar = new Map // 存储相似度？
var min_sim = 0.3 // 最低相似度

// 计算相似度
// 总值 = 此人 所有技能tag强度值 总和（特化默认5）
// 相似度：
// 同tag，按 value(min) 计算
// 不同tag但同次级分类，每一个剩下的未匹配的tag 算 0.5
function calculate_similarity(ID) {
    // lib_sim < maintype*1000+subtype_name , level >
    lib_sim.clear()
    lib_sim_similar.clear()
    if (ID === -1) true
    else {
        pick_id = ID
        var sim = 0 // 相似度
        var sim_function = 0 // 相似值的相同tag
        var sim_function2 = 0 // 相似值的类似tag
        var total_function = 2 // 功能总值
        var simlist = []
        var this_tdoll = get_tdoll_from_id(ID)
        var this_type = this_tdoll.type
        var this_skilllist = this_tdoll.skilllist
        var is_skip = false // 是否跳过，同ID或跨阵营不计算相似度
        // get total_function, define map
        for (var skill of this_skilllist) {
            for (var tag of skill) {
                if (tag[3] === -1) total_function += 5
                else total_function += tag[3]
                lib_sim.set((1000 * tag[0] + tag[1]) + '_' + tag[2], tag[3])
            }
        }
        // find similarity
        for (var tdoll of lib_tdoll) {
            // init
            lib_sim_value.clear()
            is_skip = false
            sim_function = 0
            // same ID
            if (ID === tdoll.id) {
                is_skip = true
            }
            // diff camp
            if (this_type != tdoll.type) {
                is_skip = true
            }
            // calculate similarity
            if (!is_skip) {
                // same tag
                sim_function += calculate_sim_same(lib_sim, tdoll.skilllist)
                // similar tag
                sim_function2 += calculate_sim_similar(lib_sim, tdoll.skilllist, tdoll.id)
                // 只筛选满足相似度阈值的结果
                if (sim_function + sim_function2 > 0) {
                    sim = (sim_function + sim_function2) / total_function
                    if (sim >= (num_sort_sim / 100)) {
                        simlist.push([tdoll.id, sim])
                    }
                }
            }
        }
        simlist.sort(comp_sim)
        var max_num = num_sort // can be modify
        if (simlist.length < max_num) max_num = simlist.length
        var str_display = ''

        for (var n = 0; n < max_num; n++) {
            var current_tdoll = get_tdoll_from_id(simlist[n][0])
            var current_str = ''
            // 角色按钮
            current_str += '<tr><td style="vertical-align:middle"><button type="button" style="padding:5px" class="btn btn-default" onclick="classify_by_tdoll(' + current_tdoll.id + ')">'
            current_str += '<img src="avatar/' + current_tdoll.id + '.png" style="width:37px;height:37px"> '
            eval('current_str+=lib_name.t' + current_tdoll.id)
            current_str += '</button>'
            current_str += '</td>'

            // 用途相似度
            current_str += '<td style="vertical-align:middle;text-align:center"><b><span style="color:dodgerblue">' + (100 * simlist[n][1]).toFixed(2) + '%' + '</span></b></td>'
            current_str += '<td style="line-height:40px;vertical-align:middle">'

            // 相同tag的技能列表展示
            // for each skill
            for (var i = 0; i < current_tdoll.skillnum; i++) {
                var temp_str_btn = ''
                // for each tag same in skill
                for (var current_tag of current_tdoll.skilllist[i]) {
                    if (is_tag_same(current_tag[2], this_skilllist)) {
                        temp_str_btn += get_btn_html(current_tag, 'disabled')
                    }
                }
                if (temp_str_btn != '') {
                    current_str += '<h5>'
                    current_str += get_skillname_html(current_tdoll, i)
                    current_str += temp_str_btn
                    current_str += '</h5>'
                }
            }
            current_str += '</td>'
            // 相似tag的技能列表展示
            current_str += '<td style="line-height:40px;vertical-align:middle">'
            // for each skill
            for (var i = 0; i < current_tdoll.skillnum; i++) {
                var temp_str_btn = ''
                // for each tag same in skill
                for (var current_tag of current_tdoll.skilllist[i]) {
                    if (lib_sim_similar.get(current_tdoll.id) != undefined) {
                        if (is_element_in_array(current_tag[2], lib_sim_similar.get(current_tdoll.id))) {
                            temp_str_btn += get_btn_html(current_tag, 'disabled')
                        }
                    }
                }
                if (temp_str_btn != '') {
                    current_str += '<h5>'
                    current_str += get_skillname_html(current_tdoll, i)
                    current_str += temp_str_btn
                    current_str += '</h5>'
                }
            }
            current_str += '</td>'

            current_str += '</tr>'
            str_display += current_str
        }

        document.getElementById('result_2_sim').innerHTML = str_display
    }
}

// 计算相同tag
function calculate_sim_same(lib, list) { // lib当前库，list其它人技能列表
    var sim_same = 0
    var sim_same_temp = 0
    var temp_level_this = 1, temp_level = 1
    var tagid
    for (var skill of list) {
        for (var tag of skill) {
            tagid = (tag[0] * 1000 + tag[1]) + '_' + tag[2]
            // 是否存在该能力
            if (lib.get(tagid) != undefined) {
                temp_level_this = lib.get(tagid)
                temp_level = tag[3]
                // 如果是特殊能力，算作5
                if (temp_level === -1) temp_level = 5
                if (temp_level_this === -1) temp_level_this = 5
                sim_same_temp = Math.min(temp_level, temp_level_this)
                if (lib_sim_value.get(tagid) === undefined) {
                    lib_sim_value.set(tagid, sim_same_temp)
                } else {
                    lib_sim_value.set(tagid, Math.max(lib_sim_value.get(tagid), sim_same_temp))
                }

            }
        }
    }
    for (var v of lib_sim_value.values()) {
        sim_same += v
    }
    return sim_same
}
// 计算相似tag
function calculate_sim_similar(lib, list, id) {
    var sim_similar = 0
    var tagid, tagattr
    for (var skill of list) {
        for (var tag of skill) {
            tagid = (tag[0] * 1000 + tag[1]) + '_' + tag[2]
            tagattr = (tag[0] * 1000 + tag[1]) + ''
            // 是否存在同前缀能力，且一定不是相同tag
            for (var key of lib.keys()) {
                if (lib.get(tagid) === undefined) {
                    if (key.split('_')[0] === tagattr) {
                        sim_similar += 0.5
                        var temp_array = []
                        if (lib_sim_similar.get(id) === undefined) {
                            temp_array.push(tag[2])
                            lib_sim_similar.set(id, temp_array)
                        } else {
                            temp_array = lib_sim_similar.get(id)
                            temp_array.push(tag[2])
                            lib_sim_similar.set(id, temp_array)
                        }
                        break
                    }
                }
            }
        }
    }
    return sim_similar
}  