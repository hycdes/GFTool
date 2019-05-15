var num_hire = 0, num_cost = 0
var num_six = 0, num_five = 0, backup_level = 0, non_six = 0
var lib_agent = new Map
var buffer_six = '', buffer_five = '', buffer_all = ''
var show_type = 0
var switch_up = false, switch_up_2 = false
lib_agent.set('up6', ['能天使', '安洁莉娜'])
lib_agent.set('up5', ['天火', '凛冬', '可颂'])
lib_agent.set('up4', [])
lib_agent.set('up6_next', ['银灰'])
lib_agent.set('up5_next', ['初雪', '崖心'])
lib_agent.set('up4_next', ['角峰'])
lib_agent.set(6,
  ['能天使', '推进之王', '伊芙利特', '艾雅法拉', '安洁莉娜', '闪灵', '夜莺', '星熊', '塞雷娅', '银灰'])
lib_agent.set(5,
  ['白面鸮', '凛冬', '德克萨斯', '芙兰卡', '拉普兰德', '幽灵鲨', '蓝毒',
    '白金', '陨星', '天火', '梅尔', '赫默', '华法琳', '临光',
    '红', '雷蛇', '可颂', '普罗旺斯', '守林人', '崖心', '初雪',
    '真理', '空', '狮蝎', '食铁兽'])
lib_agent.set(4,
  ['夜烟', '远山', '杰西卡', '流星', '白雪', '清道夫', '红豆',
    '杜宾', '缠丸', '霜叶', '慕斯', '砾', '暗锁', '末药',
    '调香师', '角峰', '蛇屠箱', '古米', '深海色', '地灵', '阿消'])
lib_agent.set(3,
  ['芬', '香草', '翎羽', '玫兰莎', '卡缇', '米格鲁', '克洛丝',
    '炎熔', '芙蓉', '安塞尔', '史都华德', '梓兰'])
function changeUp () {
  if (document.getElementById('ups_0').checked) {
    switch_up = false
    switch_up_2 = false
  } else if (document.getElementById('ups_1').checked) {
    switch_up = true
    switch_up_2 = false
  } else {
    switch_up = false
    switch_up_2 = true
  }
}
function makeStar () { // Star basic possibility = 2,8,50,40
  var starNum = Math.floor(Math.random() * 100)
  var base = 2 + 2 * backup_level
  if (starNum < base) {
    non_six = 0
    backup_level = 0
    return 6
  } else {
    non_six++
    if (non_six > 50) backup_level++
    if (starNum >= base && starNum < 8 + base) return 5
    else if (starNum >= 8 + base && starNum < 58 + base) return 4
    else return 3
  }
}
function hireAgent (num_star) {
  var info_agent = '<b>'
  var list_agent = lib_agent.get(num_star)
  var is_up = switch_up || switch_up_2
  var str_pick = ''
  if (switch_up_2) str_pick = '_next'
  if (num_star === 6) {
    num_six++
    if (is_up && Math.random() < 0.5) {
      if (lib_agent.get('up6' + str_pick).length > 0) list_agent = lib_agent.get('up6' + str_pick)
    }
  }
  else if (num_star === 5) {
    num_five++
    if (is_up && Math.random() < 0.5) {
      if (lib_agent.get('up5' + str_pick).length > 0) list_agent = lib_agent.get('up5' + str_pick)
    }
  } else if (num_star === 4) {
    if (is_up && Math.random() < 0.2) {
      if (lib_agent.get('up4' + str_pick).length > 0) list_agent = lib_agent.get('up4' + str_pick)
    }
  }
  var num_random = Math.floor(Math.random() * list_agent.length)
  if (num_star === 6) info_agent += '<span style="color:#FF6600">'
  else if (num_star === 5) info_agent += '<span style="color:#FFCC00">'
  else if (num_star === 4) info_agent += '<span style="color:#CC00FF">'
  else if (num_star === 3) info_agent += '<span style="color:#6666FF">'
  info_agent += list_agent[num_random]
  info_agent += '</span></b>'
  return info_agent
}
function showResult (type) {
  show_type = type
  document.getElementById('btn0').className = 'btn btn-default'
  document.getElementById('btn1').className = 'btn btn-default'
  document.getElementById('btn2').className = 'btn btn-default'
  if (type === 0) {
    document.getElementById('btn0').className = 'btn btn-primary'
    document.getElementById('table_hire').innerHTML = buffer_all
  } else if (type === 1) {
    document.getElementById('btn1').className = 'btn btn-primary'
    document.getElementById('table_hire').innerHTML = buffer_six
  } else if (type === 2) {
    document.getElementById('btn2').className = 'btn btn-primary'
    document.getElementById('table_hire').innerHTML = buffer_six + buffer_five
  }
}

function hire (number) {
  var str_oneline = '', str_cost = '', str_rank = ''
  var rate_6 = 0,rate_5 = 0
  var star = 3
  for (var i = 0; i < number; i++) {
    var str_oneline = ''
    num_hire++, num_cost += 600
    star = makeStar()
    str_oneline += '<tr><td>' + num_hire + '</td><td>'
    if (star === 6) str_oneline += '<span style="color:#FF6600">'
    else if (star === 5) str_oneline += '<span style="color:#FFCC00">'
    else if (star === 4) str_oneline += '<span style="color:#CC00FF">'
    else if (star === 3) str_oneline += '<span style="color:#6666FF">'
    for (var sn = 0; sn < star; sn++) str_oneline += '★'
    str_oneline += '</span></td>'
    str_oneline += '<td>' + hireAgent(star) + '</td>'
    str_oneline += '<tr>'
    if (star === 6) buffer_six += str_oneline
    else if (star === 5) buffer_five += str_oneline
    buffer_all += str_oneline
  }
  if (show_type === 0) document.getElementById('table_hire').innerHTML = buffer_all
  else if (show_type === 1) document.getElementById('table_hire').innerHTML = buffer_six
  else if (show_type === 2) document.getElementById('table_hire').innerHTML = buffer_six + buffer_five
  rate_6 = (100 * num_six / num_hire).toFixed(2)
  rate_5 = (100 * num_five / num_hire).toFixed(2)
  if (rate_6 > 4 || rate_5 > 24) str_rank = '<span style="color:#FF6600">欧皇</span>'
  else if (rate_6 > 1.2 && rate_6 <= 4) str_rank = '<span style="color:#FFCC00">亚洲人</span>'
  else if (rate_6 > 0.8 && rate_6 <= 1.2) str_rank = '<span style="color:#CC00FF">非酋</span>'
  else str_rank = '<span style="color:#6666FF">酋长</span>'
  str_cost = '<td>' + num_hire + '</td><td>' + num_cost + '</td><td>' + rate_6 + '%</td><td>' + rate_5 + '%</td><td>' + str_rank + '</td>'
  document.getElementById('line_cost').innerHTML = str_cost
}
