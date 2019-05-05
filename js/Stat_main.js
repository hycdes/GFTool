function get_card (id, data_entry) {
  var info = ''
  info += '回合 ' + data_entry[0]
  info += ' / ' + data_entry[1] + '战'
  if (data_entry[2]) info += ' <span style="color:darkorange">S胜</span>'
  else info += ' <span style="color:dodgerblue">撤退</span>'
  info += ' / ' + '判定' + data_entry[3]
  document.getElementById(id).innerHTML = info
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
      info += '<span style="color:chartreuse">★★★★ ' + entry[1] + '</span></td>'
      cores += 3 * entry[2]
    } else {
      info += '<span style="color:dodgerblue">★★★ ' + entry[1] + '</span></td>'
      cores += entry[2]
    }
    info += '<td>' + entry[2] + '</tr></td>'
  }
  stat_info += cores + ' / ' + num_total + ' (<span style="color:dodgerblue">'
  stat_info += (100 * cores / num_total).toFixed(2) + '%</span>)'
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
        str_info += stat_data[n_map][i][0] + ' / ' + stat_data[n_map][i][1] + ' (<span style="color:dodgerblue">'
        str_info += (100 * stat_data[n_map][i][0] / stat_data[n_map][i][1]).toFixed(2) + '%</span>)'
      } else str_info = '-'
      var str_ID = dragID + '_' + (n_map + 1) + '_' + (i + 1)
      document.getElementById(str_ID).innerHTML = str_info
    }
  }
}

var data_map = {
  m116: [2, 8, true, 9],
  m115: [1, 5, false, 3],
  m104e5: [2, 5, false, 5],
  m104e6: [2, 6, false, 6],
  m104e7: [2, 7, false, 6],
  m02: [2, 5, true, 5]
}
var data_116true = [[4, 'Colt Revolver', 1], [4, 'AS Val', 1], [4, 'SpringField', 1], [4, 'M1918', 1], [4, 'Mk46', 2],
  [3, 'M9', 3], [3, 'P08', 8], [3, 'Type 92', 5], [3, 'Tokarev', 2],
  [3, 'OTs-12', 7], [3, 'StG44', 8],
  [3, 'MAC-10', 1], [3, 'PPS-43', 2], [3, 'Sten MkII', 5],
  [3, 'M1 Garand', 7], [3, 'SV-98', 8],
  [3, 'Bren', 9], [3, 'M1919A4', 6]]
var data_116false = [[4, 'Mk46', 2],
  [3, 'M9', 2],
  [3, 'OTs-12', 3], [3, 'StG44', 1],
  [3, 'Sten MkII', 1],
  [3, 'SV-98', 1], [3, 'M1 Garand', 1]
]
var data_104e5true = [[5, 'SR-3MP', 1], // 搜救五战
  [4, 'Mk23', 1], [4, 'AS Val', 2], [4, 'PP-90', 1], [4, 'XM3', 7], [4, 'M60', 1],
  [3, 'Astra Revolver', 8], [3, 'C96', 17], [3, 'M9', 2], [3, 'Makarov', 9],
  [3, 'AK-47', 5], [3, 'FNC', 11],
  [3, 'MAC-10', 9], [3, 'Micro UZI', 9], [3, 'Skorpion', 11],
  [3, 'M14', 8],
  [3, 'M2HB', 9], [3, 'MG42', 3]]
var data_104e6false = [[5, 'SR-3MP', 1],
  [4, 'AS Val', 1],
  [3, 'Astra Revolver', 2], [3, 'C96', 6], [3, 'M9', 2], [3, 'Makarov', 3],
  [3, 'AK-47', 1], [3, 'FNC', 2],
  [3, 'MAC-10', 1], [3, 'Micro UZI', 1], [3, 'Skorpion', 2],
  [3, 'M14', 4],
  [3, 'M2HB', 4], [3, 'MG42', 2]]
var data_104e7true = [[4, 'AS Val', 2], [4, 'XM3', 2],
  [3, 'Astra Revolver', 5], [3, 'C96', 2], [3, 'M9', 4], [3, 'Makarov', 6],
  [3, 'AK-47', 7], [3, 'FNC', 5],
  [3, 'MAC-10', 5], [3, 'Micro UZI', 4], [3, 'Skorpion', 7],
  [3, 'M14', 6],
  [3, 'M2HB', 8], [3, 'MG42', 3]]
var data_104e7false = [[5, 'SR-3MP', 1],
  [3, 'C96', 2], [3, 'Makarov', 2],
  [3, 'AK-47', 2], [3, 'FNC', 2],
  [3, 'MAC-10', 4], [3, 'Micro UZI', 2],
  [3, 'M2HB', 4], [3, 'MG42', 1]]
var data_115true = [
  [3, 'Astra Revolver', 1], [3, 'Makarov', 1],
  [3, 'MAC-10', 1], [3, 'Skorpion', 1],
  [3, 'M2HB', 1]]
var data_115false = [[4, 'P7', 1],
  [3, 'C96', 4], [3, 'M9', 5], [3, 'Makarov', 2],
  [3, 'AK-47', 1],
  [3, 'MAC-10', 1], [3, 'Micro UZI', 5], [3, 'Skorpion', 2],
  [3, 'M14', 4], [3, 'M1 Garand', 1],
  [3, 'M2HB', 3], [3, 'MG42', 6]]

var data_drag1 = [
  [[1, 60], [0, 0], [0, 0], [7, 737]],
  [[0, 0], [0, 0], [1, 46], [4, 292]],
  [[0, 0], [0, 0], [0, 0], [15, 2129]],
  [[0, 0], [1, 34], [0, 0], [9, 646]],
  [[1, 87], [5, 600], [0, 0], [0, 0]],
  [[1, 21], [4, 508], [0, 0], [7, 240]]
]

get_card('card_116', data_map.m116)
get_card('card_116_2', data_map.m116)
get_card('card_115', data_map.m115)
get_card('card_115_2', data_map.m115)
get_card('card_104e5', data_map.m104e5)
get_card('card_104e6_2', data_map.m104e6)
get_card('card_104e7', data_map.m104e7)
get_card('card_104e7_2', data_map.m104e7)
get_card('card_02', data_map.m02)

fill_table('stat_116true', true, 'table_116true', data_116true, 344)
fill_table('stat_116false', false, 'table_116false', data_116false, 50)

fill_table('stat_115true', true, 'table_115true', data_115true, 50)
fill_table('stat_115false', false, 'table_115false', data_115false, 415)

fill_table('stat_104e5true', true, 'table_104e5true', data_104e5true, 645) // 五战搜救
fill_table('stat_104e6false', false, 'table_104e6false', data_104e6false, 252)
fill_table('stat_104e7true', true, 'table_104e7true', data_104e7true, 381)
fill_table('stat_104e7false', false, 'table_104e7false', data_104e7false, 182)

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
window.onload = function () {
  mergeCell('table_drag1', 11, 12, 0)
  mergeCell('table_drag1', 9, 10, 0)
  mergeCell('table_drag1', 7, 8, 0)
  mergeCell('table_drag1', 5, 6, 0)
  mergeCell('table_drag1', 3, 4, 0)
  mergeCell('table_drag1', 1, 2, 0)
  fill_drag('drag1', data_drag1, 6)
}
