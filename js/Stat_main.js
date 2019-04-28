function get_card (id, data_entry) {
  var info = ''
  info += '回合 ' + data_entry[0]
  info += ' / ' + data_entry[1] + '战'
  if (data_entry[2]) info += 'S胜'
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
  stat_info += cores + '/' + num_total + ' (<span style="color:dodgerblue">'
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
  m104e6: [2, 6, false, 6]
}
var data_116true = [[4, 'AS Val', 1], [4, 'M1918', 1],
  [3, 'Bren', 3], [3, 'M1 Garand', 4], [3, 'M1919A4', 3], [3, 'M9', 1], [3, 'MAC-10', 1], [3, 'OTs-12', 3], [3, 'P08', 1],
  [3, 'PPS-43', 1], [3, 'Sten MkII', 2], [3, 'StG44', 2], [3, 'SV-98', 5], [3, 'Type 92', 1]]
var data_104e5true = [[4, 'XM3', 3],
  [3, 'AK-47', 1], [3, 'Astra Revolver', 2], [3, 'C96', 3], [3, 'FNC', 1], [3, 'M14', 1], [3, 'M2HB', 2], [3, 'MG42', 2],
  [3, 'Makarov', 2], [3, 'Skorpion', 1], [3, 'Micro UZI', 4]]
var data_115true = [[3, 'Astra Revolver', 1], [3, 'M2HB', 1], [3, 'Makarov', 1], [3, 'MAC-10', 1], [3, 'Skorpion', 1]]
var data_115false = [[3, 'C96', 3], [3, 'M14', 2], [3, 'M2HB', 1], [3, 'M9', 1], [3, 'MAC-10', 1], [3, 'MG42', 4], [3, 'Micro UZI', 2]]

get_card('card_116', data_map.m116)
get_card('card_116_2', data_map.m116)
get_card('card_115', data_map.m115)
get_card('card_115_2', data_map.m115)
get_card('card_104e5', data_map.m104e5)
fill_table('stat_116true', true, 'table_116true', data_116true, 144)
fill_table('stat_115true', true, 'table_115true', data_115true, 50)
fill_table('stat_115false', false, 'table_115false', data_115false, 205)
fill_table('stat_104e5true', true, 'table_104e5true', data_104e5true, 100)
