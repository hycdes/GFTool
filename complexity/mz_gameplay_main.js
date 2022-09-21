// 函数
function find_tdoll(id) {
  var len = lib_tdoll.length
  for (var i = 0; i < len; i++) {
    if (lib_tdoll[i].id === id) return lib_tdoll[i]
  }
}
// 遍历所有人选的所有tag，为每个tag字典，将该角色id注册为true
function generate_map() {
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

function make_color_btn(num) {
  if (num === 0) return 'success'
  if (num === 1) return 'primary'
  if (num === 2) return 'danger'
  if (num === 3) return 'warning'
}
function is_exist(taglist, tag) {
  for (var element of taglist) {
    if (tag === element) return true
  }
  return false
}
// 填充标签按钮，按钮名 btn_tag_0_support
function fill_tag() {
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
function fill_tag_tdoll() {
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
  for (var currenttag of pick_tag[tag_type]) {
    document.getElementById('btn_tag_' + tag_type + '_' + currenttag).className = 'btn btn-default'
  }
  pick_tag[tag_type] = []
  change_tag(tag_type)
}
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
      document.getElementById('btn_tag_' + tag_type + '_' + tag).className = 'btn btn-' + make_color_btn(tag_type)
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
  var str_alert = ''
  var over = false, status = 'no-tdoll'
  var list_num = []
  for (var tdoll of lib_tdoll) {
    list_num.push(tdoll.id)
  }
  // show tags selected
  for (var tn = 0; tn < 4; tn++) {
    var str_color = make_color_btn(tn)
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
      // // load alert
      // if (lib_alert.get(tn + '_' + tag) != undefined) {
      //   str_alert += '['
      //   eval('str_alert+=lib_tag_' + tn + '.' + tag)
      //   str_alert += '] ' + lib_alert.get(tn + '_' + tag) + '<br>'
      // }
      // find valid tdoll
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
      var entry = find_tdoll(entry_num)
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
  document.getElementById('result_1_alert').innerHTML = str_alert
}
// 根据tag筛选结果，点击人物按钮，转到按角色筛选
function jump_tdoll(id) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade in active'
  document.getElementById('sort_tag').className = 'tab-pane fade'
  document.getElementById('sort_tdoll_li').className = 'active'
  document.getElementById('sort_tag_li').className = ''
  classify_by_tdoll(id)
}
function classify_by_tdoll(id) {
  var str_skill = '', str_pickname = ''
  var tdoll = find_tdoll(id)
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
}


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
    var this_tdoll = find_tdoll(ID)
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
        //
        if (sim_function + sim_function2 > 0) {
          sim = (sim_function + sim_function2) / total_function
          simlist.push([tdoll.id, sim])
        }
      }
    }
    simlist.sort(comp_sim)
    var max_num = num_sort // can be modify
    if (simlist.length < max_num) max_num = simlist.length
    var str_display = ''

    for (var n = 0; n < max_num; n++) {
      var current_tdoll = find_tdoll(simlist[n][0])
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


function find_favor(type, taglist) {
  var favor = [[], [], [], [], []] // five-dimision means type
  // type-duality
  if (type === 1 || type === 4) favor[4].push(1)
  else if (type === 2) favor[4].push(1, 3)
  else if (type === 3) favor[4].push(1, 2)
  else if (type === 5) favor[4].push(1, 6)
  else if (type === 6) favor[4].push(5)
  // actor-duality
  for (var tag of taglist[0]) {
    if (tag === 'dps') {
      favor[0].push('supportdps')
    }
  }
  return favor
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
  for (var a of array) {
    if (element === a) return true
  }
  return false
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
  if (skilltag.length > 4) skilltag_devinfo = skilltag[4]
  str_skill += '<button type="button" style="padding:3px" '
  str_skill += 'class="btn btn-'
  str_skill += make_color_btn(skilltag_maintype)
  str_skill += '"'
  str_skill += ' id="btn_jump_tag_' + skilltag_maintype + '_' + skilltag_tagname + '"'
  str_skill += ' onclick="jump_tag(' + skilltag_maintype + ',' + "'" + skilltag_tagname + "'" + ')"'
  if (status === 'normal') str_skill += '>'
  else if (status === 'disabled' || status === 'outline-disabled') str_skill += ' disabled>'
  eval('str_skill+=lib_tag_' + skilltag_maintype + '.' + skilltag_tagname)
  str_skill += skilltag_devinfo
  if (skilltag_level > 0) str_skill += ' <img src="ui/level' + skilltag_level + '.png">'
  str_skill += '</button> '
  return str_skill
}

// 基础语义函数

function comp_sim(pair_a, pair_b) { return pair_b[1] - pair_a[1]; } // 相似对比较
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
function is_someone_equaltag(tag1, tag2, id1, id2, special_id) { // 两人是否有同样的某个标签
  return (id1 === special_id || id2 === special_id) && (tag1 === tag2)
}

var is_detail_shown = false
function show_details() {
  var t_details = '', t_showdetails = '点击展开详情'
  if (!is_detail_shown) {
    t_details += '相似用途条目相似度关联使得推荐更客观<br>'
    t_details += '&nbsp-&nbsp固定射速 ↔ 突击专注：1<br>'
    t_details += '&nbsp-&nbsp精确号令 ↔ 掩护压制：1<br>'
    t_details += '&nbsp-&nbsp掩护号令 ↔ 精确压制：1<br>'
    t_details += '&nbsp-&nbsp闪光弹 ↔ 麻痹：0.7<br>'
    t_details += '&nbsp-&nbsp燃烧弹 ↔ 手榴弹：0.7<br>'
    t_details += '&nbsp-&nbsp榴弹 ↔ 穿透攻击：0.5<br>'
    t_details += '&nbsp-&nbsp烟雾弹 ↔ 减速：0.5<br>'
    t_details += '&nbsp-&nbsp烟雾弹 ↔ 突击压制：0.4<br>'
    t_details += '&nbsp-&nbsp穿甲 ↔ 火力专注：0.4<br>'
    t_details += '&nbsp-&nbsp伤害免疫 ↔ 力场盾：1<br>'
    t_showdetails = '点击收起详情'
  }
  is_detail_shown = !is_detail_shown
  document.getElementById('text_details').innerHTML = t_details
  document.getElementById('text_showdetails').innerHTML = t_showdetails
}
function sortnum(n) {
  document.getElementById('btn_show7').className = 'btn btn-outline btn-success'
  document.getElementById('btn_show10').className = 'btn btn-outline btn-success'
  document.getElementById('btn_show20').className = 'btn btn-outline btn-success'
  // do
  document.getElementById('btn_show' + n).className = 'btn btn-success'
  num_sort = n
  calculate_similarity(pick_id)
}

// initialization
window.onload = function () {
  fill_tag()
  fill_tag_tdoll()
  generate_map()
}