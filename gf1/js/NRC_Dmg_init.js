var lang_type = 'cn'

// inital
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
function loadScript(url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

window.onload = function () {
  loadScript('../js/NRC_Dmg_main.js')
  // loadScript('../js/Echelon_main.js')
  // loadScript('../js/Echelon_property.js')
  // loadScript('../js/Echelon_skill.js')
  // loadScript('../js/Echelon_UI.js')
  // loadScript('../js/Echelon_graph.js')
  // loadScript('../js/Echelon_select.js')
  // loadScript('../js/Echelon_special.js')
  // mergeCell('table_property', 0, 2, 0)
  // mergeCell('table_affect', 0, 2, 3)
  // mergeCell('table_envi', 0, 1, 0)
  // mergeCell('table_envi', 0, 1, 2)
}
