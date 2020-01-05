var info_update = '2019/12/23'
var num_ref = 2000, num_relia = 10000, num_valid = 300
var lib_cache = new Map
var lib_valid = new Map
var is_alert = false

// function
function num_split(num) {
  var str = num + '', str_new = ''
  var len = str.length, num_sp = Math.ceil(len / 3), num_bios = len - 3 * num_sp
  for (var i = 0; i < len; i++) {
    if (i != 0 && (i - num_bios) - 3 * Math.ceil((i - num_bios) / 3) === 0) str_new += ','
    str_new += str[i]
  }
  return str_new
}
function showAlert() {
  document.getElementById('b_refer').innerHTML = num_split(num_ref)
  document.getElementById('b_relia').innerHTML = num_split(num_relia)
}

function fill_table(command) {
  if (command === 'corestat') { // str_map, num_battle
    var str_map = arguments['1'], num_battle = arguments[2]
    var data_true, data_false, num_true = 0, num_false = 0 // 开搜救和不开搜救
    var cores_true = 0, cores_false = 0, stat_true = 0, stat_false = 0,
      info_table = '', info_th = '', stat_info = '', str_img = ''
    eval('data_true=data_' + str_map + 'true')
    eval('data_false=data_' + str_map + 'false')
    eval('num_true=num_' + str_map + 'true*num_battle')
    eval('num_false=num_' + str_map + 'false*num_battle')
    var len_entry = data_true.length, entry_true, entry_false
    // 填表
    for (var i = 0; i < len_entry; i++) {
      entry_true = data_true[i], entry_false = data_false[i]
      str_img = find_image(entry_true[1], list_tdollid)
      // 人形头像、星级、名字
      info_table += '<tr><td style="font-size:large">' + str_img
      if (entry_true[0] === 5) {
        info_table += '<span style="color:darkorange">★★★★★ ' + entry_true[1] + '</span></td>'
        cores_true += 5 * entry_true[2]
        cores_false += 5 * entry_false[2]
      }
      else if (entry_true[0] === 4) {
        info_table += '<span style="color:rgb(50, 250, 0)">★★★★ ' + entry_true[1] + '</span></td>'
        cores_true += 3 * entry_true[2]
        cores_false += 3 * entry_false[2]
      } else {
        info_table += '<span style="color:dodgerblue">★★★ ' + entry_true[1] + '</span></td>'
        cores_true += entry_true[2]
        cores_false += entry_false[2]
      }
      // 数量及占比
      info_table += '<td style="font-size:large;vertical-align:middle">' + entry_true[2]
      if (num_true > 0) {
        info_table += '&nbsp&nbsp&nbsp<span style="color:gray">(' + (100 * entry_true[2] / num_true).toFixed(2) + '%)</span>'
      }
      info_table += '</td>'
      info_table += '<td style="font-size:large;vertical-align:middle">' + entry_false[2]
      if (num_false > 0) {
        info_table += '&nbsp&nbsp&nbsp<span style="color:gray">(' + (100 * entry_false[2] / num_false).toFixed(2) + '%)</span>'
      }
      info_table += '</td></tr>'
    }
    // 填表头
    info_th += '<th style="width:40%">核心人形</th>'
    if (num_true > 0) {
      info_th += '<th style="width:30%">满级搜救 ' + cores_true + '核心 / ' + num_true + '战 '
      stat_true = (100 * cores_true / num_true).toFixed(2)
      info_th += '(<span style="color:dodgerblue">' + stat_true + '%</span>)'
      info_th += '</th>'
    }
    else info_th += '<th style="width:30%">满级搜救 (无数据)</th>'
    if (num_false > 0) {
      info_th += '<th style="width:30%">无搜救 ' + cores_false + '核心 / ' + num_false + '战 '
      stat_false = (100 * cores_false / num_false).toFixed(2)
      info_th += '(<span style="color:dodgerblue">' + stat_false + '%</span>)'
      info_th += '</th>'
    }
    else info_th += '<th style="width:30%">无搜救 (无数据)</th>'
    // 缓存统计数据
    var str_stat_true = '', str_stat_false = ''
    eval('str_stat_true="stat_"+str_map+"true"')
    eval('str_stat_false="stat_"+str_map+"false"')
    lib_cache.set(str_stat_true, stat_true)
    lib_cache.set(str_stat_false, stat_false)
    if (num_true > num_valid) lib_valid.set(str_stat_true, true)
    else lib_valid.set(str_stat_true, false)
    if (num_false > num_valid) lib_valid.set(str_stat_false, true)
    else lib_valid.set(str_stat_false, false)
    // 载入
    document.getElementById('th_' + str_map).innerHTML = info_th
    document.getElementById('table_' + str_map).innerHTML = info_table
  }
}

function fill_drag(dragID, stat_data, num_card) {
  for (var n_map = 0; n_map < num_card; n_map++) {
    for (var i = 0; i < 4; i++) {
      var str_info = ''
      if (stat_data[n_map][i][0] > 0) {
        if (stat_data[n_map][i][1] >= num_relia) str_info += '<i class="fa fa-star fa-fw"></i>'
        else if (stat_data[n_map][i][1] < num_relia && stat_data[n_map][i][1] >= num_ref) str_info += '<i class="fa fa-check fa-fw"></i>'
        str_info += stat_data[n_map][i][0] + ' / ' + stat_data[n_map][i][1] + ' (<span style="color:dodgerblue">'
        str_info += (100 * stat_data[n_map][i][0] / stat_data[n_map][i][1]).toFixed(2) + '%</span>)'
      } else str_info = '-'
      var str_ID = dragID + '_' + (n_map + 1) + '_' + (i + 1)
      document.getElementById(str_ID).innerHTML = str_info
    }
  }
}
function fill_drag_normal(dragID, stat_data) {
  var str = '', str_star1 = '', str_star2 = ''
  for (var entry of stat_data) {
    str += '<tr>'
    str += '<td>' + entry[0] + '</td>'
    if (entry[1] === 5) str += '<td style="vertical-align:middle;"><span style="color:darkorange">★★★★★ ' + entry[2] + '</span></td>'
    else if (entry[1] === 4) str += '<td style="vertical-align:middle;"><span style="color:rgb(50, 250, 0)">★★★★ ' + entry[2] + '</span></td>'
    else if (entry[1] === 3) str += '<td style="vertical-align:middle;"><span style="color:dodgerblue">★★★ ' + entry[2] + '</span></td>'
    if (entry[4] >= num_relia) str_star1 += '<i class="fa fa-star fa-fw"></i>'
    else if (entry[4] < num_relia && entry[4] >= num_ref) str_star1 += '<i class="fa fa-check fa-fw"></i>'
    if (entry[6] >= num_relia) str_star2 += '<i class="fa fa-star fa-fw"></i>'
    else if (entry[6] < num_relia && entry[6] >= num_ref) str_star2 += '<i class="fa fa-check fa-fw"></i>'
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
function fill_supporter(list_supporter, body_id) {
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
function find_image(name, list_tdollid) {
  for (var data of list_tdollid) {
    if (name === data[0]) return '<img src="../img/class/' + data[1] + '.png" style="width=50px;height:50px"> '
  }
  return ''
}
function find_in_data(name, list_data) {
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
function mergeCell(table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function deduplicateTable(tableID, data_drag, is_from_thead) {
  var len_data = data_drag.length
  var set_pair = [], temp_pair = []
  var i = 0, j = 1
  var bios = 0
  if (is_from_thead) bios = 1
  while (j < len_data) {
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
function sort_bardata(bar_data, bar_name, three_char_command) {
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
function load_stat_bar(bar_data, y_max) {
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
function loadScript(url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

// data
var data_124etrue = [[5, 'MDR', 7], // 12-4e，搜救
[4, 'TAR-21', 4], [4, 'MAT-49', 23], [4, 'M1918', 5], [4, 'M60', 3], [4, 'PK', 4],
[3, 'Astra Revolver', 28], [3, 'C96', 38], [3, 'M9', 38], [3, 'Makarov', 31],
[3, 'AK-47', 34], [3, 'FNC', 23],
[3, 'MAC-10', 30], [3, 'Micro UZI', 33], [3, 'Skorpion', 35],
[3, 'M14', 26],
[3, 'M2HB', 33], [3, 'MG42', 28]],
  num_124etrue = 431

var data_124efalse = [[5, 'MDR', 6], // 12-4e，无搜救
[4, 'TAR-21', 4], [4, 'MAT-49', 12], [4, 'M1918', 4], [4, 'M60', 4], [4, 'PK', 4],
[3, 'Astra Revolver', 20], [3, 'C96', 20], [3, 'M9', 35], [3, 'Makarov', 22],
[3, 'AK-47', 21], [3, 'FNC', 21],
[3, 'MAC-10', 23], [3, 'Micro UZI', 15], [3, 'Skorpion', 20],
[3, 'M14', 14],
[3, 'M2HB', 25], [3, 'MG42', 24]],
  num_124efalse = 406

var data_116true = [[4, 'Colt Revolver', 1], [4, 'AS Val', 1], [4, 'SpringField', 1], [4, 'M1918', 1], [4, 'Mk46', 2], // 11-6，搜救
[3, 'M9', 5], [3, 'P08', 11], [3, 'Type 92', 7], [3, 'Tokarev', 5],
[3, 'OTs-12', 9], [3, 'StG44', 10],
[3, 'MAC-10', 1], [3, 'PPS-43', 3], [3, 'Sten MkII', 6],
[3, 'M1 Garand', 8], [3, 'SV-98', 10],
[3, 'Bren', 10], [3, 'M1919A4', 7]],
  num_116true = 56

var data_116false = [[4, 'Colt Revolver', 0], [4, 'AS Val', 0], [4, 'SpringField', 0], [4, 'M1918', 0], [4, 'Mk46', 2], // 11-6，无搜救
[3, 'M9', 9], [3, 'P08', 3], [3, 'Type 92', 3], [3, 'Tokarev', 7],
[3, 'OTs-12', 8], [3, 'StG44', 2],
[3, 'MAC-10', 0], [3, 'PPS-43', 2], [3, 'Sten MkII', 4],
[3, 'SV-98', 2], [3, 'M1 Garand', 5],
[3, 'Bren', 4], [3, 'M1919A4', 1]],
  num_116false = 37

var data_115true = [[4, 'P7', 0], [4, '9A-91', 0], [4, 'PP-90', 0], [4, 'PK', 0], // 11-5，搜救
[3, 'Astra Revolver', 1], [3, 'C96', 0], [3, 'M9', 0], [3, 'Makarov', 1],
[3, 'AK-47', 0], [3, 'FNC', 0],
[3, 'MAC-10', 1], [3, 'Micro UZI', 0], [3, 'Skorpion', 1],
[3, 'M14', 0],
[3, 'M2HB', 1], [3, 'MG42', 0]],
  num_115true = 10

var data_115false = [[4, 'P7', 10], [4, '9A-91', 2], [4, 'PP-90', 1], [4, 'PK', 2], // 11-5，无搜救
[3, 'Astra Revolver', 64], [3, 'C96', 74], [3, 'M9', 73], [3, 'Makarov', 83],
[3, 'AK-47', 73], [3, 'FNC', 72],
[3, 'MAC-10', 62], [3, 'Micro UZI', 63], [3, 'Skorpion', 62],
[3, 'M14', 73],
[3, 'M2HB', 68], [3, 'MG42', 69]],
  num_115false = 2290

var data_104e7true = [[5, 'SR-3MP', 6], // 10-4e，搜救七战
[4, 'Mk23', 8], [4, 'AS Val', 7], [4, 'PP-90', 9], [4, 'XM3', 31], [4, 'M60', 9],
[3, 'Astra Revolver', 58], [3, 'C96', 88], [3, 'M9', 110], [3, 'Makarov', 64],
[3, 'AK-47', 72], [3, 'FNC', 76],
[3, 'MAC-10', 65], [3, 'Micro UZI', 79], [3, 'Skorpion', 84],
[3, 'M14', 73],
[3, 'M2HB', 81], [3, 'MG42', 74]],
  num_104e7true = 938

var data_104e7false = [[5, 'SR-3MP', 1], // 10-4e，无搜救七战
[4, 'Mk23', 0], [4, 'AS Val', 0], [4, 'PP-90', 0], [4, 'XM3', 0], [4, 'M60', 0],
[3, 'Astra Revolver', 0], [3, 'C96', 2], [3, 'M9', 0], [3, 'Makarov', 2],
[3, 'AK-47', 2], [3, 'FNC', 2],
[3, 'MAC-10', 4], [3, 'Micro UZI', 2], [3, 'Skorpion', 0],
[3, 'M14', 0],
[3, 'M2HB', 4], [3, 'MG42', 1]],
  num_104e7false = 26

var data_104e6true = [[5, 'SR-3MP', 0], // 10-4e，搜救六战
[4, 'Mk23', 0], [4, 'AS Val', 0], [4, 'PP-90', 0], [4, 'XM3', 0], [4, 'M60', 0],
[3, 'Astra Revolver', 0], [3, 'C96', 0], [3, 'M9', 0], [3, 'Makarov', 0],
[3, 'AK-47', 0], [3, 'FNC', 0],
[3, 'MAC-10', 0], [3, 'Micro UZI', 0], [3, 'Skorpion', 0],
[3, 'M14', 0],
[3, 'M2HB', 0], [3, 'MG42', 0]],
  num_104e6true = 0

var data_104e6false = [[5, 'SR-3MP', 34], // 10-4e，无搜救六战
[4, 'Mk23', 39], [4, 'AS Val', 32], [4, 'PP-90', 33], [4, 'XM3', 107], [4, 'M60', 31],
[3, 'Astra Revolver', 306], [3, 'C96', 345], [3, 'M9', 370], [3, 'Makarov', 305],
[3, 'AK-47', 283], [3, 'FNC', 291],
[3, 'MAC-10', 266], [3, 'Micro UZI', 298], [3, 'Skorpion', 297],
[3, 'M14', 299],
[3, 'M2HB', 305], [3, 'MG42', 292]],
  num_104e6false = 4921

var data_104e5true = [[5, 'SR-3MP', 3], // 10-4e，搜救五战
[4, 'Mk23', 5], [4, 'AS Val', 5], [4, 'PP-90', 4], [4, 'XM3', 17], [4, 'M60', 2],
[3, 'Astra Revolver', 25], [3, 'C96', 44], [3, 'M9', 27], [3, 'Makarov', 30],
[3, 'AK-47', 26], [3, 'FNC', 28],
[3, 'MAC-10', 38], [3, 'Micro UZI', 35], [3, 'Skorpion', 28],
[3, 'M14', 31],
[3, 'M2HB', 31], [3, 'MG42', 26]],
  num_104e5true = 422

var data_104e5false = [[5, 'SR-3MP', 1], // 10-4e，无搜救五战
[4, 'Mk23', 2], [4, 'AS Val', 0], [4, 'PP-90', 1], [4, 'XM3', 4], [4, 'M60', 0],
[3, 'Astra Revolver', 8], [3, 'C96', 15], [3, 'M9', 10], [3, 'Makarov', 14],
[3, 'AK-47', 15], [3, 'FNC', 9],
[3, 'MAC-10', 9], [3, 'Micro UZI', 9], [3, 'Skorpion', 10],
[3, 'M14', 7],
[3, 'M2HB', 8], [3, 'MG42', 15]],
  num_104e5false = 210

var data_104e4true = [[5, 'SR-3MP', 0], // 10-4e，搜救四战
[4, 'Mk23', 0], [4, 'AS Val', 0], [4, 'PP-90', 1], [4, 'XM3', 0], [4, 'M60', 0],
[3, 'Astra Revolver', 0], [3, 'C96', 0], [3, 'M9', 3], [3, 'Makarov', 1],
[3, 'AK-47', 2], [3, 'FNC', 1],
[3, 'MAC-10', 0], [3, 'Micro UZI', 0], [3, 'Skorpion', 0],
[3, 'M14', 3],
[3, 'M2HB', 1], [3, 'MG42', 1]],
  num_104e4true = 15

var data_104e4false = [[5, 'SR-3MP', 0], // 10-4e，无搜救四战
[4, 'Mk23', 2], [4, 'AS Val', 2], [4, 'PP-90', 0], [4, 'XM3', 3], [4, 'M60', 1],
[3, 'Astra Revolver', 4], [3, 'C96', 9], [3, 'M9', 3], [3, 'Makarov', 6],
[3, 'AK-47', 5], [3, 'FNC', 6],
[3, 'MAC-10', 4], [3, 'Micro UZI', 3], [3, 'Skorpion', 2],
[3, 'M14', 2],
[3, 'M2HB', 4], [3, 'MG42', 4]],
  num_104e4false = 119

var data_drag1 = [ // 5月4日打捞
  [[1, 60], [5, 450], [1, 140], [21, 1939]],
  [[0, 0], [3, 109], [3, 252], [17, 1626]],
  [[1, 14], [11, 1354], [3, 392], [28, 2769]],
  [[0, 0], [3, 291], [5, 475], [21, 2514]],
  [[4, 220], [24, 3884], [0, 0], [3, 567]],
  [[2, 241], [14, 1946], [3, 386], [19, 3292]]
]
var data_dragva11 = [ // 酒保联动打捞
  [[2, 249], [7, 893], [0, 0], [1, 189]],
  [[0, 0], [7, 1135], [0, 0], [0, 0]],
  [[13, 2208], [22, 4477], [10, 1358], [2, 344]],
  [[3, 379], [18, 2876], [0, 0], [0, 0]],
  [[15, 2766], [51, 13418], [2, 453], [2, 78]],
  [[10, 1395], [22, 4366], [4, 570], [2, 123]]
]
var data_dragsc = [ // shattered connexion
  [[1, 182], [0, 0], [1, 258], [0, 0]], // Cx4 Storm 1-5
  [[0, 0], [0, 0], [0, 0], [0, 0]], // Cx4 Storm 3-2
  [[1, 182], [0, 0], [1, 258], [0, 0]], // A-91 1-5
  [[0, 0], [0, 0], [0, 0], [0, 0]], // A-91 3-2
  [[0, 0], [4, 516], [2, 360], [4, 559]], // SSG3000 2-1
  [[0, 0], [0, 0], [2, 250], [0, 0]], // SSG3000 3-1
  [[0, 0], [5, 615], [1, 71], [3, 266]], // M870 2-1
  [[0, 0], [0, 0], [1, 33], [0, 0]], // M870 3-6
  [[0, 0], [2, 335], [1, 23], [0, 0]], // AK-74U 2-2
  [[0, 0], [0, 0], [0, 0], [0, 0]], // AK-74U 3-6
  [[0, 0], [1, 264], [1, 149], [2, 186]], // M82A1 2-1
  [[0, 0], [0, 0], [0, 0], [0, 0]], // M82A1 4-2
  [[0, 0], [1, 186], [0, 0], [1, 180]], // R93 2-3
  [[0, 0], [0, 0], [0, 0], [0, 0]], // R93 4-3
  [[0, 0], [1, 150], [1, 48], [2, 340]], // JS 9 2-3
  [[0, 0], [0, 0], [0, 0], [0, 0]], // JS 9 4-4
  [[0, 0], [3, 471], [6, 777], [3, 650]], // Kord 2-4
  [[0, 0], [0, 0], [0, 0], [0, 0]] // Kord 4-5
]

var list_tdollid = [
  // ★★★★★
  ['MDR', 215],
  ['SR-3MP', 135],
  // ★★★★
  ['Colt Revolver', 1], ['Mk23', 99], ['P7', 100],
  ['9A-91', 118], ['AS Val', 60], ['TAR-21', 72],
  ['MAT-49', 280], ['PP-90', 23],
  ['SpringField', 36], ['XM3', 200],
  ['M1918', 75], ['M60', 78], ['Mk46', 240], ['PK', 85],
  // ★★★
  ['Astra Revolver', 14], ['C96', 12], ['M9', 3], ['Makarov', 8], ['P08', 11], ['Tokarev', 6], ['Type 92', 13],
  ['AK-47', 58], ['FNC', 70], ['OTs-12', 105], ['StG44', 61],
  ['MAC-10', 18], ['Micro UZI', 32], ['Skorpion', 27], ['Sten MkII', 29], ['PPS-43', 22],
  ['M14', 37], ['M1 Garand', 34], ['SV-98', 44],
  ['Bren', 89], ['M1919A4', 80], ['M2HB', 77], ['MG42', 86]
]

var list_supporter_1 = [
  '命运の乐章', '夏季末至', 'AsLegend', 'Mapleaf', 'falcon',
  '老徐', '榭榆', 'MIЯЯOЯ', '欣欢症', '君漓莒',
  'cookiesiclink', 'Airnors', 'Scottdoha', 'AT4', '白金世界',
  '一瞬の感质', '十五酱', '没有肝的晷璃', '流年'
],
  list_supporter_2 = [
    '哒酱', '门对千竿竹', '莉莉丝爱你哦', 'Flonne', 'mrduck',
    '小林', '永遠のマカク焼酎', '阿斯托尔福', '碧蓝如海的天际', '菠萝小蜜橙',
    '田村吼姆拉', '无言寂心', 'Miyasizu', '钢板天下第一', '岭南弄潮儿',
    'Scottdoha', 'Mapleaf', '初雪', 'ViveLaFrance', '净化者先锋突击队',
    'ZeroR', '无限拥抱', 'E同学提不起劲', 'Remの微笑', '绮夜',
    '煭洛凝瀧', '铭1989', 'Ayaya', '这年代黑暗', 'FangZero',
    '龙游浅滩', '山小珊', '1', '不愿意匿名的45老公', 'KsZ_本居小铃',
    'Amuletloli', '无问西东', '吉野晴彦', '凤凰', 'marciy',
    '世间可有两全法', '挽筝', '北梦', '孜然', '全家福',
    '雨上がり', '一罐皮卡丘', 'KON花火', '一名路过的群众', '茂茂',
    '命运の乐章', '没法玩了', '飘帆', '界儿', 'Airnors', 'Gaberae',
    'GoTheK', 'WHJ', '我永远喜欢芙兰', 'Glimmer', '你可真是个小机灵鬼',
    'M4A1', '嗷，是黎妄哒', '极暗君', '开心枪场', '风柒',
    'ミライアカリ', '一只老咸鱼', 'timewalker', '十一婵娟', '猹',
    'Spike', '94礼服味煤气', '丧心病狂WB', '我很可爱请打钱', '咖啡幻想',
    '玄煞', '蓝光剑士', '时时时茶', '停云', '忘记过去',
    'WASHERxxxx', '笑了岂乐', '烈阳余晖', '霜流', 'Mo',
    '3SVS3', '喵', 'YingYingYing', '丶桜洛', '没发玩了',
    '一的零次方', '北原和纱', 'shyacz', 'Eric F', 'UMP40',
    '卡尔', '858512656', 'Misaka19009', '趴窝少女wa酱', 'Angevil',
    '白首如新', '铃奈庵看板娘'
  ]

var data_drag_normal = [
  ['1-4E', 3, 'Glock 17 <span style="color:black">[Ch.1 only]</span>', 0, 0, 3, 151],
  ['2-4E', 3, 'FMG-9 <span style="color:black">[Ch.2 only]</span>', 0, 0, 2, 117],
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
  ['11-6', 4, 'MAT-49 <span style="color:black">[Ch.12 only]</span>', 0, 0, 0, 0],
  ['12-4E', 4, 'MAT-49 <span style="color:black">[Ch.12 only]</span>',
    find_in_data('MAT-49', [data_124etrue]),
    3 * num_124etrue,
    find_in_data('MAT-49', [data_124efalse]),
    3 * num_124efalse
  ],
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
  ['塌缩点-冲程止点2', 4, 'Thunder', 0, 0, 1, 225],
  ['塌缩点-弱子死局4', 5, 'EOT XPS3(HK416)', 0, 0, 1, 340]
]
var str_current_statname = [
  'stat_124etrue', 'stat_124efalse',
  'stat_116true', 'stat_116false', 'stat_115true', 'stat_115false',
  'stat_104e7true', 'stat_104e5true', 'stat_104e4true',
  'stat_104e7false', 'stat_104e6false', 'stat_104e5false', 'stat_104e4false']
var bar_info = [], bar_data = [], bar_name = [], bar_num = 0, y_max = 0


window.onload = function () {
  showAlert()
  // drag
  mergeCell('table_drag1', 10, 11, 0)
  mergeCell('table_drag1', 8, 9, 0)
  mergeCell('table_drag1', 6, 7, 0)
  mergeCell('table_drag1', 4, 5, 0)
  mergeCell('table_drag1', 2, 3, 0)
  mergeCell('table_drag1', 0, 1, 0)
  fill_drag('drag1', data_drag1, 6)
  // mergeCell()
  // shattered connexion
  mergeCell('table_dragsc', 32, 35, 0)
  mergeCell('table_dragsc', 28, 31, 0)
  mergeCell('table_dragsc', 24, 27, 0)
  mergeCell('table_dragsc', 20, 23, 0)
  mergeCell('table_dragsc', 16, 19, 0)
  mergeCell('table_dragsc', 12, 15, 0)
  mergeCell('table_dragsc', 8, 11, 0)
  mergeCell('table_dragsc', 4, 7, 0)
  mergeCell('table_dragsc', 0, 3, 0)
  fill_drag('dragsc', data_dragsc, 18)
  // vall-halla
  mergeCell('table_dragva11', 10, 11, 0)
  mergeCell('table_dragva11', 8, 9, 0)
  mergeCell('table_dragva11', 6, 7, 0)
  mergeCell('table_dragva11', 4, 5, 0)
  mergeCell('table_dragva11', 2, 3, 0)
  mergeCell('table_dragva11', 0, 1, 0)
  fill_drag('dragva11', data_dragva11, 6)
  fill_drag_normal('table_drag_normal', data_drag_normal)
  fill_drag_normal('table_drag_resident', data_drag_resident)
  // main-story deduplicate
  deduplicateTable('table_drag_normal', data_drag_normal, false)
  // cores
  fill_table('corestat', '124e', 4)
  fill_table('corestat', '116', 8)
  fill_table('corestat', '115', 5)
  fill_table('corestat', '104e7', 7)
  fill_table('corestat', '104e6', 6)
  fill_table('corestat', '104e5', 5)
  fill_table('corestat', '104e4', 4)
  // supporters
  fill_supporter(list_supporter_1, 'spt_1')
  fill_supporter(list_supporter_2, 'spt_2')
  document.getElementById('text_validnum').innerHTML = num_valid
  // make graph
  var result_pair = load_stat_bar(bar_data, y_max)
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
