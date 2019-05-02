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
var data_map = {
  m116: [2, 8, true, 9],
  m115: [1, 5, false, 3],
  m104e5: [2, 5, false, 5],
  m104e6: [2, 6, false, 6],
  m104e7: [2, 7, false, 6],
  m02: [2, 5, true, 5]
}
var data_116true = [[4, 'Colt Revolver', 1], [4, 'AS Val', 1], [4, 'SpringField', 1], [4, 'M1918', 1], [4, 'Mk46', 2],
  [3, 'M9', 3], [3, 'P08', 8], [3, 'Type 92', 5], [3, 'Tokarev', 1],
  [3, 'OTs-12', 5], [3, 'StG44', 6],
  [3, 'MAC-10', 1], [3, 'PPS-43', 2], [3, 'Sten MkII', 5],
  [3, 'M1 Garand', 7], [3, 'SV-98', 8],
  [3, 'Bren', 7], [3, 'M1919A4', 5]]
var data_116false = [[4, 'Mk46', 2],
  [3, 'M9', 2],
  [3, 'OTs-12', 3], [3, 'StG44', 1],
  [3, 'Sten MkII', 1],
  [3, 'SV-98', 1], [3, 'M1 Garand', 1]
]
var data_104e5true = [[5, 'SR-3MP', 1],
  [4, 'Mk23', 1], [4, 'AS Val', 1], [4, 'PP-90', 1], [4, 'XM3', 6], [4, 'M60', 1],
  [3, 'Astra Revolver', 3], [3, 'C96', 10], [3, 'M9', 1], [3, 'Makarov', 5],
  [3, 'AK-47', 4], [3, 'FNC', 4],
  [3, 'MAC-10', 6], [3, 'Micro UZI', 7], [3, 'Skorpion', 6],
  [3, 'M14', 4],
  [3, 'M2HB', 5], [3, 'MG42', 3]]
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

get_card('card_116', data_map.m116)
get_card('card_116_2', data_map.m116)
get_card('card_115', data_map.m115)
get_card('card_115_2', data_map.m115)
get_card('card_104e5', data_map.m104e5)
get_card('card_104e6_2', data_map.m104e6)
get_card('card_104e7', data_map.m104e7)
get_card('card_104e7_2', data_map.m104e7)
get_card('card_02', data_map.m02)
fill_table('stat_116true', true, 'table_116true', data_116true, 320)
fill_table('stat_116false', false, 'table_116false', data_116false, 50)
fill_table('stat_115true', true, 'table_115true', data_115true, 50)
fill_table('stat_115false', false, 'table_115false', data_115false, 415)
fill_table('stat_104e5true', true, 'table_104e5true', data_104e5true, 335)
fill_table('stat_104e6false', false, 'table_104e6false', data_104e6false, 252)
fill_table('stat_104e7true', true, 'table_104e7true', data_104e7true, 381)
fill_table('stat_104e7false', false, 'table_104e7false', data_104e7false, 182)
