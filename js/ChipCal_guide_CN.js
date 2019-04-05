var lang_type = 'cn'
var deleteSelectHTML = ['<option value=0 selected>选择编号</option>']
var lib_lang
function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
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
window.onload = function () {
  mergeCell('ImgChart_preview', 0, 0, 0)
  loadScript('../js/ChipCal_UI.js')
  loadScript('../js/ChipCal_main.js')
  loadScript('../js/topology.js')
  loadScript('../js/language_ChipCal-CN.js')
}
