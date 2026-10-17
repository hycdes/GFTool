var pick_num = 0, pick_cost = 0
var num_3 = 0, num_2 = 0, num_1 = 0, num_up = 0, num_jing = 0
var non_3 = 0, non_2 = 0, non_hebble = 0, non_aki = 0
var accure_2 = 10, accure_3 = 60, accure_up = 180
var fre_3 = 0.0313, fre_2 = 0.153, fre_1 = 1 - fre_3 - fre_2
var list_hebble = [
  [100, '赫波'],
  [38, '坂口希'], [38, '薇'], [38, '芙洛伦'], [38, '七花'], [38, '桑朵莱希'], [38, '缠枝'], [38, '伊芙琳']
]
var list_aki = [
  [100, '秋'],
  [38, '琴'], [38, '薇'], [38, '芙洛伦'], [38, '七花'], [38, '桑朵莱希'], [38, '缠枝'], [38, '伊芙琳']
]
var list_normal_3 = [
  [100, '赫波'], [100, '坂口希'], [100, '琴'], [100, '薇'], [100, '芙洛伦'], [100, '七花'], [100, '桑朵莱希'], [100, '缠枝'], [100, '伊芙琳']
]
var list_3_stat = [
  [0, '赫波', []], [0, '秋', []],
  [0, '琴', []], [0, '坂口希', []], [0, '薇', []], [0, '芙洛伦', []], [0, '七花', []], [0, '桑朵莱希', []], [0, '缠枝', []], [0, '伊芙琳', []]
]
var list_normal_2 = [
  [100, '贝蒂'], [100, '芬恩'],
  [100, '菲涅尔'], [100, '埃尔赫'], [100, '奥托金'],
  [100, '帕那刻亚'], [100, '伊姆赫特'],
  [100, '薮春'],
  [100, '安冬妮娜'], [100, '安吉拉'], [100, '科谢尼娅'], [100, '莉丝'], [100, '咲耶'], [100, '杜莎妮'],
]
var list_normal_1 = [
  [100, '席摩'], [100, '炽'], [100, '迈迈'], [100, '麦克斯'], [100, '巧可'], [100, '杨尼'],
  [100, '音流'], [100, '波妮'], [100, '希安'], [100, '阿比盖尔'], [100, '杰西'], [100, '拉姆'],
]

function ran_name(star, list_name) { // 确定抽到谁了
  var list_3, list_2 = list_normal_2, list_1 = list_normal_1
  var name = ''
  if (star === 3 && list_name === 'hebble') {
    list_3 = list_hebble
  } else if (star === 3 && list_name === 'aki') {
    list_3 = list_aki
  } else if (star === 3 && list_name === 'normal') {
    list_3 = list_normal_3
  }
  if (star === 3) {
    var p_full = 0
    for (var posi of list_3) p_full += posi[0]
    var p_pick = Math.ceil(Math.random() * p_full)
    for (var posi of list_3) {
      p_pick -= posi[0] // 检查抽到谁了
      if (p_pick < 0) {
        name = posi[1]
        if (list_name === 'hebble') {
          if (name != '赫波') non_hebble++
        }
        else if (list_name === 'aki') {
          if (name != '秋') non_aki++
        }
        break
      }
    }
  } else if (star === 2) {
    var p_full = 0
    for (var posi of list_2) p_full += posi[0]
    var p_pick = Math.ceil(Math.random() * p_full)
    for (var posi of list_2) {
      p_pick -= posi[0] // 检查抽到谁了
      if (p_pick < 0) {
        name = posi[1]
        break
      }
    }
    if (list_name === 'hebble') {
      non_hebble++
    }
    else if (list_name === 'aki') {
      non_aki++
    }
  }
  else {
    var p_full = 0
    for (var posi of list_1) p_full += posi[0]
    var p_pick = Math.ceil(Math.random() * p_full)
    for (var posi of list_1) {
      p_pick -= posi[0] // 检查抽到谁了
      if (p_pick < 0) {
        name = posi[1]
        break
      }
    }
    if (list_name === 'hebble') {
      non_hebble++
    }
    else if (list_name === 'aki') {
      non_aki++
    }
  }
  return name
}
function gacha(list_name) { // 抽卡
  var item = []
  var ran = Math.random()
  // baodi
  if (non_3 >= 59) {
    ran = 0 // 3 star
    non_3 = 0 // reset
    non_2 = 0 // reset
  } else if (non_2 >= 9) {
    ran = 0.05 // 2 star
    non_2 = 0
  }
  if (ran <= fre_3) {
    item.push(3)
    non_3 = 0 // reset
    non_2 = 0 // reset
    var item_name = ran_name(3, list_name)
    item.push(item_name)
  }
  else if (ran > 0.03 && ran <= fre_2 + fre_3) {
    item.push(2)
    non_2 = 0 // reset
    non_3++
    var item_name = ran_name(2, list_name)
    item.push(item_name)
  }
  else {
    item.push(1)
    non_3++
    non_2++
    var item_name = ran_name(1, list_name)
    item.push(item_name)
  }
  return item
}
function output_item(output_name, temp_gacha) {
  var str = ''
  str += '<tr>'
  str += '<td>' + pick_num + '</td>'
  str += '<td>'
  if (temp_gacha[0] === 3) {
    num_3++
    str += '<span style="color:orangered">★★★ ' + temp_gacha[1] + '</span>'
  }
  else if (temp_gacha[0] === 2) {
    num_2++
    str += '<span style="color:purple">★★ ' + temp_gacha[1] + '</span>'
  }
  else if (temp_gacha[0] === 1) {
    num_1++
    str += '<span style="color:dodgerblue">★ ' + temp_gacha[1] + '</span>'
  }
  str += '</td>'
  str += '</tr>'
  document.getElementById(output_name).innerHTML += str
}
function output_baodi(output_name, temp_gacha) {
  var str = ''
  str += '<tr>'
  str += '<td>井</td>'
  str += '<td>'
  str += '<span style="color:orangered">★★★ ' + temp_gacha[1] + ' (大保底)</span>'
  str += '</td>'
  str += '</tr>'
  document.getElementById(output_name).innerHTML += str
}

function gacha_multiple(num) {
  // init
  var list_gacha = []
  var temp_gacha
  var list_name = ''
  if (document.getElementById('switch_hebble').checked) list_name = 'hebble'
  else if (document.getElementById('switch_aki').checked) list_name = 'aki'
  else list_name = 'normal'
  // gacha
  for (var i = 0; i < num; i++) {
    pick_num++
    temp_gacha = gacha(list_name)
    list_gacha.push(temp_gacha)
    output_item('output_result', temp_gacha)
    if (list_name === 'hebble' && non_hebble === 180) {
      num_jing++
      temp_gacha = [3.5, '赫波']
      list_gacha.push(temp_gacha)
      non_hebble = 0
      output_baodi('output_result', temp_gacha)
    }
    if (list_name === 'aki' && non_aki === 180) {
      num_jing++
      temp_gacha = [3.5, '秋']
      list_gacha.push(temp_gacha)
      non_aki = 0
      output_baodi('output_result', temp_gacha)
    }
  }
  // update stat
  document.getElementById('output_pick_num').innerHTML = pick_num
  document.getElementById('output_jing_num').innerHTML = num_jing
  document.getElementById('output_3_num').innerHTML = num_3
  document.getElementById('output_3_rate').innerHTML = ((num_3 / pick_num) * 100).toFixed(2) + '%'
  document.getElementById('output_2_num').innerHTML = num_2
  document.getElementById('output_2_rate').innerHTML = ((num_2 / pick_num) * 100).toFixed(2) + '%'
  document.getElementById('output_1_num').innerHTML = num_1
  document.getElementById('output_universal_calculate').innerHTML = '5*' + num_1 + ' + 60*' + num_2 + ' + 300* (' + num_3 + '+' + num_jing + ') = '
  document.getElementById('output_universal_num').innerHTML = 5 * num_1 + 60 * num_2 + 300 * (num_3 + num_jing)
  document.getElementById('output_universal_average').innerHTML = ((5 * num_1 + 60 * num_2 + 300 * (num_3 + num_jing)) / pick_num).toFixed(2)

  var list_3_output = ''
  for (var i = 0; i < list_gacha.length; i++) { // stat
    var all_item = list_gacha[i]
    if (all_item[0] === 3) {
      list_3_stat[find_itrator(all_item[1], list_3_stat)][0]++
      list_3_stat[find_itrator(all_item[1], list_3_stat)][2].push(i + 1)
    }
  }
  for (var info3 of list_3_stat) {
    if (info3[0] > 0) {
      list_3_output += info3[1]
      for (var itr of info3[2]) {
        list_3_output += '[' + itr + '] '
      }
    }
  }
  document.getElementById('output_3_list').innerHTML = list_3_output

  var rank = ''
  if (num_jing === 0) {
    if ((num_3 / pick_num) > 0.036) rank = '<span style="color:orangered">欧皇降临</span>'
    else if ((num_3 / pick_num) <= 0.036 && (num_3 / pick_num) > 0.27) rank = '<span style="color:purple">一般路过教授</span>'
    else rank = '<span style="color:dodgerblue">非酋教授</span>'
  } else {
    if ((num_3 / pick_num) > 0.036) rank = '<span style="color:orange">海豹</span>'
    else rank = '<span style="color:dodgerblue">非酋教授</span>'
  }
  document.getElementById('output_rank').innerHTML = rank
}

function find_itrator(item1, list) {
  for (var i = 0; i < list.length; i++) {
    if (list[i][1] === item1) return i
  }
  return -1
}