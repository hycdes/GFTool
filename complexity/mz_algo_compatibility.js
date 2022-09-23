var lib_cpt_tag = new Map // 玩点配合Map
lib_cpt_tag.set('gp_m_agile_teleport', 'gp_m_agile_teleport') // 传送+传送
// 计算配合度
// 定位补全值（天狼星）：?

// 莫比乌斯
// 伤害 阻制 敏捷 情报 隐秘，除以10
// 定位值 = [(1+伤害)*(1+阻制) + (1+敏捷)] * (1+情报+隐秘/2)
// 玩点搭配：+数值
// 

// 玩点搭配值：
function calculate_compatibility(ID) {
    if (ID === -1) true
    else {
        var cpt = 0 // 配合度
        var cpt_list = []
        var tdoll_this = get_tdoll_from_id(ID)
        var orientationlist_this = tdoll_this.orientationlist
        var is_skip = false // 是否跳过，同ID或跨阵营不计算相似度

        // Sirius Props
        if (ID > 1000 && ID < 2000) {
            ;
        }

        // Mobius Hero
        else if (ID > 2000 && ID < 10000) {
            cpt = 0
            var array_score_ort_this = [0, 0, 0, 0, 0]
            var array_score_ort_total = [0, 0, 0, 0, 0]
            var array_score_ort = [0, 0, 0, 0, 0]
            for (var ort of orientationlist_this) {
                if (ort[2] === 'mobius_orientation_damage') array_score_ort_this[0] += ort[3]
                else if (ort[2] === 'mobius_orientation_block') array_score_ort_this[1] += ort[3]
                else if (ort[2] === 'mobius_orientation_agile') array_score_ort_this[2] += ort[3]
                else if (ort[2] === 'mobius_orientation_intel') array_score_ort_this[3] += ort[3]
                else if (ort[2] === 'mobius_orientation_hide') array_score_ort_this[4] += ort[3]
            }
            for (var tdoll of lib_tdoll) {

                is_skip = false
                if (ID === tdoll.id) is_skip = true
                if (tdoll_this.type != tdoll.type) is_skip = true
                if (!is_skip) {
                    array_score_ort = [0, 0, 0, 0, 0]
                    for (var ort_tdoll of tdoll.orientationlist) {
                        if (ort_tdoll[2] === 'mobius_orientation_damage') array_score_ort[0] += ort_tdoll[3]
                        else if (ort_tdoll[2] === 'mobius_orientation_block') array_score_ort[1] += ort_tdoll[3]
                        else if (ort_tdoll[2] === 'mobius_orientation_agile') array_score_ort[2] += ort_tdoll[3]
                        else if (ort_tdoll[2] === 'mobius_orientation_intel') array_score_ort[3] += ort_tdoll[3]
                        else if (ort_tdoll[2] === 'mobius_orientation_hide') array_score_ort[4] += ort_tdoll[3]
                    }
                    // sum
                    for (var i = 0; i < 6; i++) array_score_ort_total[i] = array_score_ort[i] + array_score_ort_this[i]
                    cpt = (
                        (1 + Math.min(5, array_score_ort_total[0]) / 10) * (1 + Math.min(5, array_score_ort_total[1]) / 10)
                        + (1 + array_score_ort_total[2] / 10)
                    )
                        * (1 + Math.min(5, array_score_ort_total[3]) / 10 + array_score_ort_total[4] / 20)
                    // cpt = (Math.min(10 + 9, 10 + array_score_ort_total[0] + array_score_ort_total[1] + array_score_ort_total[2]))
                    //     * (Math.min(5 + 6, 5 + array_score_ort_total[3] + array_score_ort_total[4]))
                    if (cpt > 0) cpt_list.push([tdoll.id, cpt])
                }

            }
            cpt_list.sort(comp_sim)

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
                current_str += '<td style="vertical-align:middle;text-align:center"><b><span style="color:dodgerblue">' + 100 * cpt_list[n][1] + '</span></b></td>'

                // 定位展示
                current_str += '<td style="line-height:40px;vertical-align:middle">'
                // for each orientation
                for (var i = 0; i < current_tdoll.orientationlist.length; i++) {
                    var temp_str_btn = ''

                    for (var current_ort of current_tdoll.orientationlist) {
                        temp_str_btn += get_btn_html(current_ort, 'disabled')
                    }
                }
                current_str += '</td>'

                // 配合玩点展示
                current_str += '<td style="line-height:40px;vertical-align:middle">'
                current_str += '</td>'

                current_str += '</tr>'
                str_display += current_str
            }

            document.getElementById('result_2_par').innerHTML = str_display

        }

        // Sirius Hero
        else if (ID > 10000) {
            ;
        }
    }
}