// 遍历所有人选的所有tag，为每个tag字典，将该角色id注册为true
function init_generate_map() {
  for (var tdoll of lib_tdoll) {
    // 职业定位
    for (var ort of tdoll.orientationlist) {
      eval('tag0_' + ort[2] + '.set(' + "'t'+tdoll.id," + ort[3] + ")") // record
    }
    // 技能玩点
    for (var skill of tdoll.skilllist) {
      if (skill.length > 0) {
        for (var tag of skill) {
          // tag0_xxxx
          // tag[0]:maintype , tag[2]:tagname , tag[3]:level
          eval('tag' + tag[0] + '_' + tag[2] + '.set(' + "'t'+tdoll.id," + tag[3] + ")") // record
        }
      }
    }
  }
}

function is_exist(taglist, tag) {
  for (var element of taglist) {
    if (tag === element) return true
  }
  return false
}
// 填充标签按钮，按钮名 btn_tag_0_support
function init_fill_tag() {
  var str_btn = ''
  for (var i = 0; i < num_taglist; i++) {
    var len = lib_tag[i].length
    for (var t = 0; t < len; t++) {
      for (var name of lib_tag[i][t]) {
        str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tag_' + i + '_' + name + '"'
        str_btn += ' onclick="change_tag(' + i + ',' + "'" + name + "'" + ')">'
        eval('str_btn+=lib_tag_' + i + '.' + name)
        str_btn += '</button> '
        document.getElementById('tag_' + i + '_' + t).innerHTML += str_btn
      }
    }
  }
}
// 填充人物按钮，按钮名 btn_tdoll_233
function init_fill_tag_tdoll() {
  var str_pid = '', str_btn = '', str_tdoll = ''
  for (var entry of lib_tdoll) {
    str_tdoll = '<img src="avatar/' + entry.id + '.png" style="width:37px;height:37px"> '
    str_pid = 'tag_tdoll_' + entry.type
    str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tdoll_' + entry.id + '" onclick="classify_by_tdoll(' + entry.id + ')">' + str_tdoll
    eval('str_btn+=lib_name.t' + entry.id)
    str_btn += '</button> '
    document.getElementById(str_pid).innerHTML += str_btn
  }
}
function empty_taglist(tag_type) { // 清空对应tag列表选取
  if (tag_type === 'all') {
    empty_taglist(0)
    empty_taglist(1)
    empty_taglist(2)
    empty_taglist(3)
  } else {
    for (var currenttag of pick_tag[tag_type]) {
      document.getElementById('btn_tag_' + tag_type + '_' + currenttag).className = 'btn btn-default'
    }
    pick_tag[tag_type] = []
    change_tag(tag_type)
  }

}
// 根据tdoll筛选结果，点击tag按钮，转到按tag筛选
function jump_tag(tag_type, tag) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade'
  document.getElementById('sort_tag').className = 'tab-pane fade in active'
  document.getElementById('sort_tdoll_li').className = ''
  document.getElementById('sort_tag_li').className = 'active'
  for (var i = 0; i < 4; i++) {
    for (var currenttag of pick_tag[i]) {
      document.getElementById('btn_tag_' + i + '_' + currenttag).className = 'btn btn-default'
    }
  }
  pick_tag = [[], [], [], []]
  change_tag(tag_type, tag)
}
// 根据tag筛选结果，点击人物按钮，转到按角色筛选
function jump_tdoll(id) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade in active'
  document.getElementById('sort_tag').className = 'tab-pane fade'
  document.getElementById('sort_tdoll_li').className = 'active'
  document.getElementById('sort_tag_li').className = ''
  classify_by_tdoll(id)
}

// 选定标签以改变标签，按钮名btn_tag_0_TAGNAME
function change_tag(tag_type) {
  if (arguments['1'] != undefined) {
    var tag = arguments['1']
    var is_tag = true
    var len = pick_tag[tag_type].length
    for (var i = 0; i < len; i++) {
      if (tag === pick_tag[tag_type][i]) {
        pick_tag[tag_type].splice(i, 1)
        is_tag = false
        break
      }
    }
    if (is_tag) { // new tag generate
      pick_tag[tag_type].push(tag)
      document.getElementById('btn_tag_' + tag_type + '_' + tag).className = 'btn btn-' + get_btn_color(tag_type)
    } else {
      document.getElementById('btn_tag_' + tag_type + '_' + tag).className = 'btn btn-default'
    }
  }
  classify_by_tag()
}


// 按标签筛选
function classify_by_tag() {
  var str_btn_display = ''
  var num_type = -1
  // var str_alert = ''
  var over = false, status = 'no-tdoll'
  var list_num = []
  for (var tdoll of lib_tdoll) {
    list_num.push(tdoll.id)
  }
  // show tags selected
  for (var tn = 0; tn < 4; tn++) {
    var str_color = get_btn_color(tn)
    for (var tag of pick_tag[tn]) {
      str_btn_display += '<button type="button" style="padding:5px" class="btn btn-' + str_color + '" disabled>'
      eval('str_btn_display+=lib_tag_' + tn + '.' + tag)
      str_btn_display += '</button> '
    }
  }
  document.getElementById('result_1_tags').innerHTML = str_btn_display
  // find t-dolls
  for (var tn = 0; tn < 4; tn++) {
    for (var tag of pick_tag[tn]) {
      var list_num_new = []
      for (var tid of list_num) {
        eval('if(tag' + tn + '_' + tag + '.get("t"+' + tid + ')!=undefined){list_num_new.push(' + tid + ');}')
      }
      list_num = list_num_new
      if (list_num.length === 0) {
        over = true
        break
      }
    }
    if (over) break
  }
  if (pick_tag[0].length === 0 && pick_tag[1].length === 0 && pick_tag[2].length === 0 && pick_tag[3].length === 0) {
    status = 'no-tag'
    over = true
  }
  if (over) {
    if (status === 'no-tdoll') document.getElementById('result_1').innerHTML = '没有符合条件的人形'
    else if (status === 'no-tag') document.getElementById('result_1').innerHTML = '请选择至少一个标签'
  } else {
    var str_btn = '', str_tdoll = ''
    for (var entry_num of list_num) {
      var entry = get_tdoll_from_id(entry_num)
      // new type getline
      if (num_type === -1) num_type = entry.type
      else {
        if (num_type != entry.type) {
          str_btn += '<br>'
          num_type = entry.type
        }
      }
      // info
      str_tdoll = '<img src="avatar/' + entry.id + '.png" style="width:37px;height:37px"> '
      str_btn += '<button type="button" style="padding:5px" class="btn btn-default" id="btn_jump_tdoll_' + entry.id + '" onclick="jump_tdoll(' + entry.id + ')"> ' + str_tdoll

      eval('str_btn+=lib_name.t' + entry.id)
      str_btn += '</button> '
    }
    document.getElementById('result_1').innerHTML = str_btn
  }

}

// 根据人选进行筛选
function classify_by_tdoll(id) {
  var str_skill = '', str_pickname = ''
  var tdoll = get_tdoll_from_id(id)
  // 名称展示
  str_pickname = '<img src="avatar/' + id + '.png" style="width:37px;height:37px"> <b>'
  eval('str_pickname+=lib_name.t' + id)
  str_pickname += '</b>'
  // 定位展示
  str_pickname += '<h5>'
  for (var ort of tdoll.orientationlist) {
    str_skill += get_btn_html(ort, 'normal')
  }
  str_pickname += '</h5>'
  // 技能列表展示
  // for each skill
  for (var i = 0; i < tdoll.skillnum; i++) {
    str_skill += '<h5>'
    str_skill += get_skillname_html(tdoll, i)
    var skilltaglist = tdoll.skilllist[i]
    // for each tag of single skill
    for (var skilltag of skilltaglist) {
      str_skill += get_btn_html(skilltag, 'normal')
    }

    str_skill += '</h5>'
  }
  document.getElementById('result_2_name').innerHTML = str_pickname
  document.getElementById('result_2').innerHTML = str_skill
  calculate_similarity(id)
  calculate_compatibility(id)
}

// 基础语义函数
// base
function comp_sim(pair_a, pair_b) { return pair_b[1] - pair_a[1]; } // 相似比较

// ============================= 计算式 get_ =============================
function get_tdoll_from_id(id) {
  var len = lib_tdoll.length
  for (var i = 0; i < len; i++) {
    if (lib_tdoll[i].id === id) return lib_tdoll[i]
  }
}
function get_btn_color(num) {
  if (num === 0) return 'success'
  if (num === 1) return 'primary'
  if (num === 2) return 'danger'
  if (num === 3) return 'warning'
}
function get_level_color(num) {
  if (num === 0) return '#000000'
  if (num === 1) return '#336600'
  if (num === 2) return '#6666ff'
  if (num === 3) return '#33CC66'
  if (num === 4) return '#FF9900'
  if (num === 5) return '#FF0000'
}
function get_ort_index(type, ort_name) {
  if (type === 'mobius_hero') {
    if (ort_name === 'mobius_orientation_damage') return 0
    else if (ort_name === 'mobius_orientation_block') return 1
    else if (ort_name === 'mobius_orientation_agile') return 2
    else if (ort_name === 'mobius_orientation_intel') return 3
    else if (ort_name === 'mobius_orientation_hide') return 4
  }
  return -1
}
function get_ort_name(type, index) {
  if (type === 'mobius_hero') {
    if (index === 0) return 'mobius_orientation_damage'
    else if (index === 1) return 'mobius_orientation_block'
    else if (index === 2) return 'mobius_orientation_agile'
    else if (index === 3) return 'mobius_orientation_intel'
    else if (index === 4) return 'mobius_orientation_hide'
  }
  return ''
}
function get_skillname_html(tdoll, skillindex) {
  var temp_str = ''
  if (lib_skillname.get(tdoll.id)[skillindex][0] === 0) temp_str += '<span style="color:#000066">[被动] '
  else temp_str += '<span style="color:#0000FF">'
  temp_str += lib_skillname.get(tdoll.id)[skillindex][1] // skillname
  temp_str += '：'
  temp_str += '</span>'
  return temp_str
}
function get_btn_html(skilltag, status) {
  var str_skill = ''
  var skilltag_maintype = skilltag[0]
  var skilltag_tagname = skilltag[2]
  var skilltag_level = skilltag[3]
  var skilltag_devinfo = ''
  var special_nocolor = false, special_nolevel = false
  if (arguments['2'] != undefined) {
    var command_list = arguments['2'].split('/')
    for (var command of command_list) {
      if (command === 'nocolor') special_nocolor = true
      else if (command === 'nolevel') special_nolevel = true
    }
  }
  if (skilltag.length > 4) skilltag_devinfo = skilltag[4]
  str_skill += '<button type="button" style="padding:3px" '
  str_skill += 'class="btn btn-'

  if (special_nocolor) str_skill += 'default'
  else str_skill += get_btn_color(skilltag_maintype)

  str_skill += '"'
  str_skill += ' id="btn_jump_tag_' + skilltag_maintype + '_' + skilltag_tagname + '"'
  str_skill += ' onclick="jump_tag(' + skilltag_maintype + ',' + "'" + skilltag_tagname + "'" + ')"'
  if (status === 'normal') str_skill += '>'
  else if (status === 'disabled' || status === 'outline-disabled') str_skill += ' disabled>'
  eval('str_skill+=lib_tag_' + skilltag_maintype + '.' + skilltag_tagname)
  str_skill += skilltag_devinfo

  if (special_nolevel) true
  else if (skilltag_level > 0) str_skill += ' <img src="ui/level' + skilltag_level + '.png">'

  str_skill += '</button> '
  return str_skill
}

// ============================= 执行式 do_ =============================

// function do_html_tb_colored(tb_html, color_exp) {
//   document.getElementById(tb_html).style.backgroundImage = "ui/" + color_exp + ".png"
// }


// ============================= 判断式 is_ =============================

function is_related_pair(list1, list2, tag1, tag2) { // 是否是相关tag
  var loop_tag = [tag1, tag2]
  var loop_list = [list1, list2]
  var is_in = [false, false, false, false]
  for (var t = 0; t < 2; t++) {
    for (var l = 0; l < 2; l++) {
      for (var tl of loop_list[l]) {
        if (tl === loop_tag[t]) {
          is_in[2 * t + l] = true
          break
        }
      }
    }
  }
  if ((is_in[0] && !is_in[1] && !is_in[2] && is_in[3]) || (!is_in[0] && is_in[1] && is_in[2] && !is_in[3])) return true
  else return false
}
function is_tag_same(tagname, skilllist) {
  for (var skill of skilllist) {
    for (var tag of skill) {
      if (tag[2] === tagname) return true
    }
  }
  return false
}
function is_element_in_array(element, array) {
  if (arguments['2'] === undefined) { // return yes or no
    for (var a of array) {
      if (element === a) return true
    }
    return false
  }
  else { // return index
    var it = arguments['2']
    for (var i = 0; i < array.length; i++) {
      if (element === array[i][it]) return i
    }
    return -1
  }
}


function sort_num(n) {
  document.getElementById('btn_sort_num_7').className = 'btn btn-outline btn-success'
  document.getElementById('btn_sort_num_10').className = 'btn btn-outline btn-success'
  document.getElementById('btn_sort_num_20').className = 'btn btn-outline btn-success'
  // do
  document.getElementById('btn_sort_num_' + n).className = 'btn btn-success'
  num_sort = n
  calculate_similarity(pick_id)
}
function sort_sim(n) {
  document.getElementById('btn_sort_sim_30').className = 'btn btn-outline btn-warning'
  document.getElementById('btn_sort_sim_50').className = 'btn btn-outline btn-warning'
  document.getElementById('btn_sort_sim_0').className = 'btn btn-outline btn-warning'
  // do
  document.getElementById('btn_sort_sim_' + n).className = 'btn btn-warning'
  num_sort_sim = n
  calculate_similarity(pick_id)
}

// initialization
window.onload = function () {
  init_fill_tag()
  init_fill_tag_tdoll()
  init_generate_map()
  show_compatibility('all')
  colored_cpt()
}