var lang_type = 'cn'

// global variations for prepare
var Set_Special = new Map // 特殊变量表
var lib_language // 语言库
var lib_affect = new Map // 人形影响格库，存放 < 编号, Affecy >
var lib_property = new Map // 人形属性库，存放 < 编号, Property >
var lib_property_equip = new Map // 装备属性库，存放 < 装备编号, Property_equip >
var lib_fairy = new Map // 妖精库
var lib_skill = new Map // 技能库，存放 < 人形编号, list_Skill>
var lib_describe = new Map // 描述库，存放 < 技能名, 描述 >

// inital
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

function loadScript (url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}

window.onload = function () {
  loadScript('../js/language_Echelon-CN.js') // diff
  setTimeout(function () {
    loadScript('../js/Echelon_main.js')
    loadScript('../js/Echelon_property.js')
    loadScript('../js/Echelon_skill.js')
    loadScript('../js/Echelon_UI.js')
    loadScript('../js/Echelon_graph.js')
    loadScript('../js/Echelon_select.js')
    mergeCell('table_property', 0, 2, 0)
    mergeCell('table_affect', 0, 2, 3)
    mergeCell('table_envi', 0, 1, 0)
    mergeCell('table_envi', 0, 1, 2)
    Set_Special.set('can_add_python', true)
    Set_Special.set('can_add_karm1891', true)
    Set_Special.set('sunrise', 'day')
  }, 50)
}
