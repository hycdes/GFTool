var global_ui_showcpt_length = 0
var global_ui_showcpt_rank_it_list = []
var global_ui_showcpt_column_it_list = []
var global_ui_command = ['no-item', 'all']

// 展示相关性
function show_compatibility(command) {
    global_ui_showcpt_rank_it_list = []
    global_ui_showcpt_column_it_list = []
    var str_tbody = ''
    var list_element = []
    var no_empty_column = false, no_empty_rank = false
    if (command === 'all') { true }
    else if (command === 'no-empty-column') { no_empty_column = true }
    else if (command === 'no-empty-rank') { no_empty_rank = true }
    else if (command === 'no-empty') { no_empty_column = true; no_empty_rank = true }
    for (var i = 1; i < lib_tag.length; i++) {
        for (var list_e of lib_tag[i]) {
            for (var e of list_e) {
                var temp_pair = [e]
                eval('temp_pair.push(lib_tag_' + i + '.' + e + ')')
                list_element.push(temp_pair)
            }
        }
    }
    global_ui_showcpt_length = list_element.length
    // 按筛选规则计算供展示的数据
    // 初始化矩阵
    for (var i = 0; i < list_element.length; i++) global_ui_showcpt_rank_it_list.push(false)
    for (var i = 0; i < list_element.length; i++) global_ui_showcpt_column_it_list.push(false)

    for (var r = 0; r < list_element.length; r++) {
        for (var c = 0; c < list_element.length; c++) {
            if (lib_cpt_tag.get(list_element[r][0]) != undefined) { // 当前行有可配合tag
                var temp_cptlist = lib_cpt_tag.get(list_element[r][0])
                var temp_it = is_element_in_array(list_element[c][0], temp_cptlist, 0)
                // 将对应行/列设置为显示
                if (temp_it != -1) {
                    if (no_empty_rank) global_ui_showcpt_rank_it_list[r] = true
                    if (no_empty_column) global_ui_showcpt_column_it_list[c] = true
                }
            }
        }
    }


    // 填充表头（跳过定位）
    // 定宽行及表头
    str_tbody += '<tr>'
    str_tbody += '<td class="table_info_compatibility">'
    str_tbody += '<img src="ui/width50.png"><br><b><span style="color:red">玩点配合</span></b>'
    str_tbody += '</td>'
    for (var i = 0; i < list_element.length; i++) {
        var is_display = true
        if (no_empty_column) is_display = global_ui_showcpt_column_it_list[i] // 如果删除空列，显示规则统一于列
        if (is_display) {
            str_tbody += '<td class="table_info_compatibility"'
            str_tbody += ' id="cpt_th_' + i + '"' // 表头编号：cpt_th_xxx
            str_tbody += '>'
            str_tbody += '<img src="ui/width50.png"><br>'
            str_tbody += list_element[i][1]
            str_tbody += '</td>'
        }
    }
    str_tbody += '</tr>'
    // 行数据（应用筛选规则）
    for (var r = 0; r < list_element.length; r++) {
        var is_display = true
        var str_temp_rank = ''
        var bool_temp_is_empty = true
        if (no_empty_rank) is_display = global_ui_showcpt_rank_it_list[r] // 是否显示该行

        if (is_display) {
            str_temp_rank += '<tr>'
            str_temp_rank += '<td class="table_info_compatibility"'
            str_temp_rank += ' id="cpt_tl_' + r + '"' // 表侧编号：cpt_tl_xxx
            str_temp_rank += '>'
            str_temp_rank += list_element[r][1]
            str_temp_rank += '</td>'
            for (var c = 0; c < list_element.length; c++) {
                var is_push = true
                if (no_empty_column) is_push = global_ui_showcpt_column_it_list[c] // 是否显示该列

                if (is_push) {
                    str_temp_rank += '<td class="table_info_compatibility_ratio"'
                    str_temp_rank += ' id="cpt_td_' + r + '_' + c + '"' // 表格编号：cpt_td_r_c
                    str_temp_rank += '>'
                    if (lib_cpt_tag.get(list_element[r][0]) != undefined) { // 当前行有可配合tag
                        var temp_cptlist = lib_cpt_tag.get(list_element[r][0])
                        var temp_it = is_element_in_array(list_element[c][0], temp_cptlist, 0)
                        // 显示相似性百分比
                        if (temp_it != -1) {
                            bool_temp_is_empty = false
                            str_temp_rank += '<span data-placement="top" data-toggle="tooltip" title="'
                            str_temp_rank += list_element[r][1] + '×' + list_element[c][1] + ' → ' + temp_cptlist[temp_it][2]
                            str_temp_rank += '">'
                            str_temp_rank += (temp_cptlist[temp_it][1] * 100) + '%'
                            str_temp_rank += '</span>'
                        }
                    }
                    str_temp_rank += '</td>'
                }

            }

            str_temp_rank += '</tr>'
            str_tbody += str_temp_rank
        }

    }

    // 显示
    document.getElementById('detail_cpt_tbody').innerHTML = str_tbody
}

function change_display_cpt(command) {
    if (command === 'all' || command === 'no-empty' || command === 'no-empty-rank') {
        // 设置command1值
        global_ui_command[1] = command
        // 按钮着色初始化
        document.getElementById('btn_show_cpt_all').className = 'btn btn-outline btn-primary'
        document.getElementById('btn_show_cpt_no_empty').className = 'btn btn-outline btn-primary'
        document.getElementById('btn_show_cpt_no_empty_rank').className = 'btn btn-outline btn-primary'
        // do
        if (command === 'all') document.getElementById('btn_show_cpt_all').className = 'btn btn-primary'
        else if (command === 'no-empty') document.getElementById('btn_show_cpt_no_empty').className = 'btn btn-primary'
        else if (command === 'no-empty-rank') document.getElementById('btn_show_cpt_no_empty_rank').className = 'btn btn-primary'
    }

    else if (command === 'no-item' || command === 'select-item') {
        // 设置command0值
        global_ui_command[0] = command
        // 按钮着色初始化
        document.getElementById('btn_show_cpt_no_item').className = 'btn btn-outline btn-success'
        document.getElementById('btn_show_cpt_select_item').className = 'btn btn-outline btn-success'
        // do
        if (command === 'no-item') document.getElementById('btn_show_cpt_no_item').className = 'btn btn-success'
        else if (command === 'select-item') document.getElementById('btn_show_cpt_select_item').className = 'btn btn-success'
    }

    show_compatibility(command)
    colored_cpt(command)
}

function colored_cpt(command) {
    // 染色
    for (var r = 0; r < global_ui_showcpt_length; r++) {
        for (var c = 0; c < global_ui_showcpt_length; c++) {
            var is_colored = true
            if (command === 'no-empty' || command === 'no-empty-rank') {
                is_colored = (is_colored && global_ui_showcpt_rank_it_list[r])
            }
            if (command === 'no-empty') is_colored = is_colored && global_ui_showcpt_column_it_list[c]

            if (is_colored) {
                if (document.getElementById('cpt_td_' + r + '_' + c).innerHTML != '') {
                    var temp_str = document.getElementById('cpt_td_' + r + '_' + c).innerHTML
                    temp_str = (temp_str.split('%')[0]).split('>')[1]
                    var color_percent = (parseInt(temp_str) / 100) * 0.2
                    document.getElementById('cpt_td_' + r + '_' + c).style.backgroundColor = 'rgb(255,0,0,' + color_percent + ')'
                }
            }

        }
    }
}