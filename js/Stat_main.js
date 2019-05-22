// function
function showAlert () {
  if (is_alert) {
    document.getElementById('info_alert').innerHTML = ''
    document.getElementById('btn_alert').className = 'btn btn-warning'
    document.getElementById('btn_alert').innerHTML = '本页须知'
  } else {
    var str_info = ''
    str_info += '<h4>最后更新时间：' + info_update + '</h4>'
    str_info += '<h4>注释</h4>'
    str_info += '<h5><i class="fa fa-check fa-fw"></i><b>值得参考</b> 样本量 <span style="color:dodgerblue"><b>1,000+</b></span></h5>'
    str_info += '<h5><i class="fa fa-star fa-fw"></i><b>值得信赖</b> 样本量 <span style="color:dodgerblue"><b>10,000+</b></span></h5>'
    str_info += '<h4>联系</h4>'
    str_info += '<h5><i class="fa fa-qq fa-fw"></i> 693606343 (务必进群<b>私聊</b>) <i class="fa fa-envelope fa-fw"></i> hycdes@qq.com</h5>'
    str_info += '<h4>数据要求</h4>'
    str_info += '<h5><b><span style="color:dodgerblue">核心统计</span></b> (1) 路线 (2) 核心枪类型及数量 (3) Lv10搜救或无搜救 (4) 至少10场</h5>'
    str_info += '<h5><b><span style="color:darkorange">打捞统计</span></b> (1) 地图 (2) Lv10搜救或无搜救 (3) 至少10场 (4) 最好提供所有该活动打捞记录</h5>'
    str_info += '<h5>&nbsp</h5>'
    document.getElementById('info_alert').innerHTML = str_info
    document.getElementById('btn_alert').className = 'btn btn-primary'
    document.getElementById('btn_alert').innerHTML = '隐藏须知'
  }
  is_alert = !is_alert
}
function get_card (id, data_entry) {
  var info = ''
  info += '回合 ' + data_entry[0]
  info += ' / ' + data_entry[1] + '战'
  if (data_entry[2]) info += ' <span style="color:darkorange">S胜</span>'
  else info += ' <span style="color:dodgerblue">撤退</span>'
  info += ' / ' + '判定' + data_entry[3]
  document.getElementById(id).innerHTML = info
}
function get_cards (list_id, list_data) {
  var len = list_id.length
  for (var i = 0; i < len; i++) get_card(list_id[i], list_data[i])
}
function fill_table (stat, fairy_status, table, data, num_total) {
  var cores = 0
  var info = '', stat_info = ''
  for (var entry of data) {
    info += '<tr><td>'
    if (entry[0] === 5) {
      info += '<span style="color:darkorange">★★★★★ ' + entry[1] + '</span></td>'
      cores += 5 * entry[2]
    }
    else if (entry[0] === 4) {
      info += '<span style="color:rgb(50, 250, 0)">★★★★ ' + entry[1] + '</span></td>'
      cores += 3 * entry[2]
    } else {
      info += '<span style="color:dodgerblue">★★★ ' + entry[1] + '</span></td>'
      cores += entry[2]
    }
    info += '<td>' + entry[2] + '</tr></td>'
  }
  if (num_total >= 10000) stat_info += '<i class="fa fa-star fa-fw"></i>'
  else if (num_total < 10000 && num_total >= 1000) stat_info += '<i class="fa fa-check fa-fw"></i>'
  stat_info += cores + ' / ' + num_total + ' (<span style="color:dodgerblue">'
  lib_cache.set(stat, (100 * cores / num_total).toFixed(2))
  if (num_total > num_valid) lib_valid.set(stat, true)
  else lib_valid.set(stat, false)
  stat_info += lib_cache.get(stat) + '%</span>)'
  if (fairy_status) stat_info += ' 搜救:<span style="color:red">Lv.10</span>'
  else stat_info += ' 搜救:未开启'
  document.getElementById(stat).innerHTML = stat_info
  document.getElementById(table).innerHTML = info
}
function fill_drag (dragID, stat_data, num_card) {
  for (var n_map = 0; n_map < num_card; n_map++) {
    for (var i = 0; i < 4; i++) {
      var str_info = ''
      if (stat_data[n_map][i][0] > 0) {
        if (stat_data[n_map][i][1] >= 10000) str_info += '<i class="fa fa-star fa-fw"></i>'
        else if (stat_data[n_map][i][1] < 10000 && stat_data[n_map][i][1] >= 1000) str_info += '<i class="fa fa-check fa-fw"></i>'
        str_info += stat_data[n_map][i][0] + ' / ' + stat_data[n_map][i][1] + ' (<span style="color:dodgerblue">'
        str_info += (100 * stat_data[n_map][i][0] / stat_data[n_map][i][1]).toFixed(2) + '%</span>)'
      } else str_info = '-'
      var str_ID = dragID + '_' + (n_map + 1) + '_' + (i + 1)
      document.getElementById(str_ID).innerHTML = str_info
    }
  }
}
function fill_drag_normal (dragID, stat_data) {
  var str = '',str_star1 = '',str_star2 = ''
  for (var entry of stat_data) {
    str += '<tr>'
    str += '<td>' + entry[0] + '</td>'
    if (entry[1] === 5) str += '<td style="vertical-align:middle;"><span style="color:darkorange">★★★★★ ' + entry[2] + '</span></td>'
    else if (entry[1] === 4) str += '<td style="vertical-align:middle;"><span style="color:rgb(50, 250, 0)">★★★★ ' + entry[2] + '</span></td>'
    else if (entry[1] === 3) str += '<td style="vertical-align:middle;"><span style="color:dodgerblue">★★★ ' + entry[2] + '</span></td>'
    if (entry[4] >= 10000) str_star1 += '<i class="fa fa-star fa-fw"></i>'
    else if (entry[4] < 10000 && entry[4] >= 1000) str_star1 += '<i class="fa fa-check fa-fw"></i>'
    if (entry[6] >= 10000) str_star2 += '<i class="fa fa-star fa-fw"></i>'
    else if (entry[6] < 10000 && entry[6] >= 1000) str_star2 += '<i class="fa fa-check fa-fw"></i>'
    if (entry[3] > 0) str += '<td>' + str_star1 + entry[3] + ' / ' + entry[4] + ' (<span style="color:dodgerblue">' + (100 * entry[3] / entry[4]).toFixed(2) + '%</span>)' + '</td>'
    else str += '<td>-</td>'
    if (entry[5] > 0) str += '<td>' + str_star2 + entry[5] + ' / ' + entry[6] + ' (<span style="color:dodgerblue">' + (100 * entry[5] / entry[6]).toFixed(2) + '%</span>)' + '</td>'
    else str += '<td>-</td>'
    str += '</tr>'
    str_star1 = ''
    str_star2 = ''
  }
  document.getElementById(dragID).innerHTML = str
}
function fill_supporter (list_supporter, body_id) {
  var num = list_supporter.length, group = Math.ceil(num / 5), count = 0
  var str = ''
  for (var i = 0; i < group; i++) {
    str += '<tr>'
    for (var j = 0; j < 5; j++) {
      str += '<td class="td_supporter">'
      if (count < num) str += list_supporter[5 * i + j]
      str += '</td>'
      count++
    }
    str += '</tr>'
  }
  document.getElementById(body_id).innerHTML = str
}
function find_in_data (name, list_data) {
  var sum = 0
  for (var data of list_data) {
    for (var entry of data) {
      if (name === entry[1]) {
        sum += entry[2]
        break
      }
    }
  }
  return sum
}
function mergeCell (table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function deduplicateTable (tableID, data_drag, is_from_thead) {
  var len_data = data_drag.length
  var set_pair = [], temp_pair = []
  var i = 0, j = 1
  var bios = 0
  if (is_from_thead) bios = 1
  while(j < len_data){
    if (data_drag[i][2] === data_drag[j][2]) {
      temp_pair = [i + bios, j + bios]
      j++
    } else {
      j++
      i = j - 1
      if (temp_pair.length != 0) {
        set_pair.push(temp_pair)
        temp_pair = []
      }
    }
  }
  var len_dedup = set_pair.length
  for (var d = len_dedup - 1; d >= 0; d--) mergeCell(tableID, set_pair[d][0], set_pair[d][1], 1)
}
function sort_bardata (bar_data, bar_name, three_char_command) {
  var sort_style = 1, len = bar_data.length
  var temp_pair, bar_name_new = []
  if (three_char_command === 'asc') sort_style = -1
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (sort_style * (bar_data[i][1] - bar_data[j][1]) < 0) {
        temp_pair = bar_data[i]
        bar_data[i] = bar_data[j]
        bar_data[j] = temp_pair
      }
    }
  }
  for (var i = 0; i < len; i++) bar_name_new.push([i, bar_name[bar_data[i][0]][1]])
  for (var i = 0; i < len; i++) {
    bar_data[i][0] = i
    bar_name[i][0] = i
    bar_name[i][1] = bar_name_new[i][1]
  }
}
function load_stat_bar (bar_data, y_max) {
  var count = 0
  var str_name = ''
  for (var entry of str_current_statname) {
    if (lib_valid.get(entry)) {
      bar_data.push([count, parseFloat(lib_cache.get(entry))])
      if (y_max < parseFloat(lib_cache.get(entry))) y_max = parseFloat(lib_cache.get(entry))
      var temp_str = (entry.split('_'))[1]
      for (var char of temp_str) {
        if (char === 't' || char === 'f') {
          if (char === 't') str_name += ' 搜救'
          break
        }
        str_name += char
      }
      bar_name.push([count, str_name])
      count++
      str_name = ''
    }
  }
  // handle data
  bar_data.push([bar_data.length, 8])
  bar_name.push([bar_name.length, '0-2'])
  count += 1
  // sort
  sort_bardata(bar_data, bar_name, 'dsc')
  return [count, y_max]
}
function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

// data
var info_update = '2019/05/22'
var lib_cache = new Map
var lib_valid = new Map
var num_valid = 300
var is_alert = false
var data_map = {
  m116: [2, 8, true, 9],
  m115: [1, 5, false, 3],
  m104e4: [2, 4, false, 4],
  m104e5: [2, 5, false, 5],
  m104e6: [2, 6, false, 6],
  m104e7: [2, 7, false, 6],
  m02: [2, 5, true, 5]
}
var data_116true = [[4, 'Colt Revolver', 1], [4, 'AS Val', 1], [4, 'SpringField', 1], [4, 'M1918', 1], [4, 'Mk46', 2],
    [3, 'M9', 5], [3, 'P08', 11], [3, 'Type 92', 7], [3, 'Tokarev', 5],
    [3, 'OTs-12', 8], [3, 'StG44', 10],
    [3, 'MAC-10', 1], [3, 'PPS-43', 3], [3, 'Sten MkII', 6],
    [3, 'M1 Garand', 8], [3, 'SV-98', 10],
    [3, 'Bren', 10], [3, 'M1919A4', 7]],
  num_116true = 54

var data_116false = [[4, 'Mk46', 2],
    [3, 'M9', 6], [3, 'Type 92', 1], [3, 'Tokarev', 2],
    [3, 'OTs-12', 4], [3, 'StG44', 2],
    [3, 'Sten MkII', 1],
    [3, 'SV-98', 1], [3, 'M1 Garand', 2],
    [3, 'Bren', 1], [3, 'M1919A4', 1]],
  num_116false = 17

var data_104e4true = [
    [4, 'PP-90', 1],
    [3, 'M9', 3], [3, 'Makarov', 1],
    [3, 'AK-47', 2], [3, 'FNC', 1],
    [3, 'M14', 3],
    [3, 'M2HB', 1], [3, 'MG42', 1]
  ],
  num_104e4true = 15

var data_104e4false = [
    [4, 'Mk23', 2], [4, 'AS Val', 2], [4, 'XM3', 3], [4, 'M60', 1],
    [3, 'Astra Revolver', 4], [3, 'C96', 8], [3, 'M9', 3], [3, 'Makarov', 6],
    [3, 'AK-47', 4], [3, 'FNC', 6],
    [3, 'MAC-10', 4], [3, 'Micro UZI', 3], [3, 'Skorpion', 1],
    [3, 'M14', 2],
    [3, 'M2HB', 3], [3, 'MG42', 3]],
  num_104e4false = 109

var data_104e5true = [[5, 'SR-3MP', 1], // 搜救五战
    [4, 'Mk23', 2], [4, 'AS Val', 3], [4, 'PP-90', 3], [4, 'XM3', 11], [4, 'M60', 2],
    [3, 'Astra Revolver', 15], [3, 'C96', 21], [3, 'M9', 15], [3, 'Makarov', 17],
    [3, 'AK-47', 15], [3, 'FNC', 18],
    [3, 'MAC-10', 20], [3, 'Micro UZI', 28], [3, 'Skorpion', 20],
    [3, 'M14', 18],
    [3, 'M2HB', 19], [3, 'MG42', 19]],
  num_104e5true = 266

var data_104e5false = [[5, 'SR-3MP', 1],
    [4, 'Mk23', 1], [4, 'PP-90', 1], [4, 'XM3', 4],
    [3, 'Astra Revolver', 6], [3, 'C96', 15], [3, 'M9', 9], [3, 'Makarov', 13],
    [3, 'AK-47', 14], [3, 'FNC', 8],
    [3, 'MAC-10', 9], [3, 'Micro UZI', 8], [3, 'Skorpion', 10],
    [3, 'M14', 7],
    [3, 'M2HB', 8], [3, 'MG42', 13]],
  num_104e5false = 200

var data_104e6false = [[5, 'SR-3MP', 34],
    [4, 'Mk23', 39], [4, 'AS Val', 32], [4, 'PP-90', 33], [4, 'XM3', 107], [4, 'M60', 31],
    [3, 'Astra Revolver', 306], [3, 'C96', 345], [3, 'M9', 370], [3, 'Makarov', 305],
    [3, 'AK-47', 283], [3, 'FNC', 291],
    [3, 'MAC-10', 266], [3, 'Micro UZI', 298], [3, 'Skorpion', 297],
    [3, 'M14', 299],
    [3, 'M2HB', 305], [3, 'MG42', 292]],
  num_104e6false = 4921

var data_104e7true = [[5, 'SR-3MP', 5],
    [4, 'Mk23', 4], [4, 'AS Val', 6], [4, 'PP-90', 7], [4, 'XM3', 4], [4, 'XM3', 21], [4, 'M60', 6],
    [3, 'Astra Revolver', 46], [3, 'C96', 79], [3, 'M9', 94], [3, 'Makarov', 50],
    [3, 'AK-47', 61], [3, 'FNC', 65],
    [3, 'MAC-10', 54], [3, 'Micro UZI', 64], [3, 'Skorpion', 75],
    [3, 'M14', 65],
    [3, 'M2HB', 69], [3, 'MG42', 62]],
  num_104e7true = 801

var data_104e7false = [[5, 'SR-3MP', 1],
    [3, 'C96', 2], [3, 'Makarov', 2],
    [3, 'AK-47', 2], [3, 'FNC', 2],
    [3, 'MAC-10', 4], [3, 'Micro UZI', 2],
    [3, 'M2HB', 4], [3, 'MG42', 1]],
  num_104e7false = 26

var data_115true = [
  [3, 'Astra Revolver', 1], [3, 'Makarov', 1],
  [3, 'MAC-10', 1], [3, 'Skorpion', 1],
  [3, 'M2HB', 1]]

var data_115false = [[4, 'P7', 8], [4, '9A-91', 2], [4, 'PK', 2],
    [3, 'Astra Revolver', 56], [3, 'C96', 57], [3, 'M9', 59], [3, 'Makarov', 65],
    [3, 'AK-47', 59], [3, 'FNC', 61],
    [3, 'MAC-10', 48], [3, 'Micro UZI', 51], [3, 'Skorpion', 47],
    [3, 'M14', 62],
    [3, 'M2HB', 60], [3, 'MG42', 61]],
  num_115false = 1869

var data_drag1 = [
  [[1, 60], [5, 450], [1, 140], [21, 1939]],
  [[0, 0], [3, 109], [3, 252], [17, 1626]],
  [[1, 14], [11, 1354], [3, 392], [28, 2769]],
  [[0, 0], [3, 291], [5, 475], [21, 2514]],
  [[4, 220], [24, 3884], [0, 0], [3, 567]],
  [[2, 241], [14, 1946], [3, 386], [19, 3292]]
]

var data_drag_normal = [
  ['1-4E', 3, 'Glock 17 <span style="color:black">[Ch.1 only]</span>', 0, 0, 3, 151],
  ['2-4E', 3, 'FMG-9 <span style="color:black">[Ch.2 only]</span>', 0, 0, 1, 49],
  ['3-4E', 3, 'CZ-805 <span style="color:black">[Ch.3 only]</span>', 0, 0, 2, 247],
  ['4-4E', 3, 'M21 <span style="color:black">[Ch.4 only]</span>', 0, 0, 5, 277],
  ['5-6', 3, 'M249 SAW <span style="color:black">[Ch.5 only]</span>', 0, 0, 4, 322],
  ['6-4E', 3, 'M1A1 <span style="color:black">[Ch.6 only]</span>', 1, 60, 2, 165],
  ['7-6', 3, 'PSM <span style="color:black">[Ch.7 only]</span>', 1, 87, 0, 0],
  ['9-6', 4, 'Ak 5 <span style="color:black">[Ch.9 only]</span>', 0, 0, 1, 176],
  ['10-4E', 4, 'XM3 <span style="color:black">[Ch.10 only]</span>',
    find_in_data('XM3', [data_104e7true, data_104e5true, data_104e4true]),
    2 * (num_104e7true + num_104e5true + num_104e4true),
    find_in_data('XM3', [data_104e7false, data_104e6false, data_104e5false, data_104e4false]),
    2 * (num_104e7false + num_104e6false + num_104e5false + num_104e4false)],
  ['11-6', 4, 'Mk46 <span style="color:black">[Ch.11 only]</span>',
    find_in_data('Mk46', [data_116true]),
    3 * num_116true,
    find_in_data('Mk46', [data_116false]),
    3 * num_116false],
  ['11-4E', 4, 'Mk46 <span style="color:black">[Ch.11 only]</span>', 0, 0, 2, 288],
  ['0-2', 4, 'PK', 0, 0, 5, 3228],
  ['6-4E', 5, 'Vector', 0, 0, 1, 165],
  ['10-4E', 5, 'SR-3MP',
    find_in_data('SR-3MP', [data_104e7true, data_104e5true, data_104e4true]),
    2 * (num_104e7true + num_104e5true + num_104e4true),
    find_in_data('SR-3MP', [data_104e7false, data_104e6false, data_104e5false, data_104e4false]),
    2 * (num_104e7false + num_104e6false + num_104e5false + num_104e4false)],
  ['11-4E', 5, 'M99', 0, 0, 1, 288]
]
var data_drag_resident = [
  ['塌缩点-再点火4', 5, 'MP7', 2, 284, 0, 0],
  ['塌缩点-冲程止点2', 4, '雷电', 0, 0, 1, 225]
]
var list_supporter_1 = [
    '命运の乐章', '夏季末至', 'AsLegend', 'Mapleaf', 'falcon',
    '老徐', '榭榆', 'MIЯЯOЯ', '欣欢症', '君漓莒',
    'cookiesiclink'
  ],
  list_supporter_2 = [
    '哒酱', '门对千竿竹' , '莉莉丝爱你哦' , 'Flonne' , 'mrduck' ,
    '小林', '永遠のマカク焼酎' , '阿斯托尔福' , '碧蓝如海的天际' , '菠萝小蜜橙',
    '田村吼姆拉', '无言寂心', 'Miyasizu' , '钢板天下第一' , '岭南弄潮儿' ,
    'Scottdoha', 'Mapleaf' , '初雪' , 'ViveLaFrance' , '净化者先锋突击队',
    'ZeroR', '无限拥抱', 'E同学提不起劲', 'Remの微笑', '绮夜',
    '煭洛凝瀧', '铭1989', 'Ayaya', '这年代黑暗', 'FangZero' ,
    '龙游浅滩', '山小珊' , '1', '不愿意匿名的45老公', 'KsZ_本居小铃',
    'Amuletloli', '无问西东', '吉野晴彦', '凤凰', 'marciy',
    '世间可有两全法', '挽筝', '北梦', '孜然', '全家福',
    '雨上がり', '一罐皮卡丘', 'KON花火', '一名路过的群众', '茂茂' ,
    '命运の乐章', '没法玩了', '飘帆', '界儿', 'Airnors', 'Gaberae'
]
var str_current_statname = [
  'stat_116true', 'stat_116false',
  'stat_115true', 'stat_115false',
  'stat_104e7true', 'stat_104e5true', 'stat_104e4true',
  'stat_104e7false', 'stat_104e6false', 'stat_104e5false', 'stat_104e4false']
var bar_info = [], bar_data = [], bar_name = [], bar_num = 0, y_max = 0

var list_card = ['card_116', 'card_116_2', 'card_115', 'card_115_2',
  'card_104e7', 'card_104e7_2', 'card_104e6_2', 'card_104e5', 'card_104e5_2', 'card_104e4', 'card_104e4_2',
  'card_02']
var list_data_card = [data_map.m116, data_map.m116, data_map.m115, data_map.m115,
  data_map.m104e7, data_map.m104e7, data_map.m104e6, data_map.m104e5, data_map.m104e5, data_map.m104e4, data_map.m104e4,
  data_map.m02]

window.onload = function () {
  // drag
  mergeCell('table_drag1', 10, 11, 0)
  mergeCell('table_drag1', 8, 9, 0)
  mergeCell('table_drag1', 6, 7, 0)
  mergeCell('table_drag1', 4, 5, 0)
  mergeCell('table_drag1', 2, 3, 0)
  mergeCell('table_drag1', 0, 1, 0)
  fill_drag('drag1', data_drag1, 6)
  fill_drag_normal('table_drag_normal', data_drag_normal)
  fill_drag_normal('table_drag_resident', data_drag_resident)
  deduplicateTable('table_drag_normal', data_drag_normal, false)
  // cores
  get_cards(list_card, list_data_card)
  fill_table('stat_116true', true, 'table_116true', data_116true, 8 * num_116true)
  fill_table('stat_116false', false, 'table_116false', data_116false, 8 * num_116false)
  fill_table('stat_115true', true, 'table_115true', data_115true, 50)
  fill_table('stat_115false', false, 'table_115false', data_115false, 5 * num_115false)
  fill_table('stat_104e7true', true, 'table_104e7true', data_104e7true, 7 * num_104e7true)
  fill_table('stat_104e7false', false, 'table_104e7false', data_104e7false, 7 * num_104e7false)
  fill_table('stat_104e6false', false, 'table_104e6false', data_104e6false, 6 * num_104e6false)
  fill_table('stat_104e5true', true, 'table_104e5true', data_104e5true, 5 * num_104e5true) // 五战搜救
  fill_table('stat_104e5false', false, 'table_104e5false', data_104e5false, 5 * num_104e5false)
  fill_table('stat_104e4true', true, 'table_104e4true', data_104e4true, 4 * num_104e4true)
  fill_table('stat_104e4false', false, 'table_104e4false', data_104e4false, 4 * num_104e4false)
  // supporters
  fill_supporter(list_supporter_1, 'spt_1')
  fill_supporter(list_supporter_2, 'spt_2')
  document.getElementById('text_validnum').innerHTML = num_valid
  // make graph
  var result_pair = load_stat_bar(bar_data, y_max)
  console.log(bar_name)
  bar_num = result_pair[0], y_max = result_pair[1]
  bar_info.push({
    data: bar_data,
    bars: {
      barWidth: 0.5,
      align: 'center',
      horizontal: false
    }
  })
  $.plot($('#placeholder'), bar_info,
    {
      series: {
        bars: {
          show: true
        }
      },
      xaxis: {
        min: -1,
        max: bar_num,
        tickDecimals: 0,
        font: {
          lineHeight: 13,
          color: '#000000'
        },
        shadowSize: 0,
        ticks: bar_name
      },
      yaxis: {
        min: 0,
        max: y_max * 1.1,
        tickDecimals: 0,
        font: {
          lineHeight: 13,
          color: '#000000'
        },
        shadowSize: 0
      },
      grid: {
        hoverable: true
      },
      tooltip: true,
      tooltipOpts: {
        content: '核心产率: %y%'
      }
    })
}
