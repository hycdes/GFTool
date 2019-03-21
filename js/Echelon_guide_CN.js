var lang_type = 'cn'
// global variations for input ui
var switch_swap = false, switch_operate = false, switch_equip = false
var num_pickblock = -1, num_pickequip = -1
var set_guntype = 1
var set_equip = [0, 0, 0]
var num_star = 5, affection = 'love'
var select_tdoll
var select_equip

// global variations for prepare
var buffer_table = new Map // 已放置人形的全局变量信息buffer
var buffer_last
var lib_affect = new Map // 人形影响格库，存放 < 编号, Affecy >
var lib_property = new Map // 人形属性库，存放 < 编号, Property >
var lib_property_equip = new Map // 装备属性库，存放 < 装备编号, Property_equip >
var lib_describe = new Map // 描述库，存放 < 技能名, 描述 >
var lib_skill = new Map // 技能库，存放 < 人形编号, list_Skill>
var lib_fairy = new Map // 妖精库
var list_tdoll = [[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]] // 战术人形列表，存放二元组[position, TdollInfo]
var time = 100, init_time = 0, daytime = 1, fairy_no = 0, talent_no = 0
var block1 = new Map, block2 = new Map, block3 = new Map, block4 = new Map, block5 = new Map, block6 = new Map, block7 = new Map, block8 = new Map, block9 = new Map
var blockSet = [block1, block2, block3, block4, block5, block6, block7, block8, block9]
var not_init = false

// global variations for main-calculation
var Set_Status = new Map // 状态表，存放状态列表，< num_stand, [ <Status, left_frame> ]>，Status=[type,value(>1)]
var Set_Skill = new Map // 技能表，存放二元组列表，< num_stand, [ <Skill, frame> ] >，攻击也是个技能
var Set_Base = new Map // 当前属性，当Status改变时更新
var Set_Command = new Map // 命令，存放命令，< num_stand, command >，command = standby, freefire, skill_mf, skill_all...
var Set_Special = new Map // 特殊变量表
var Set_Data = new Map // 输出数据
var Set_Data_Buffer = new Map // 缓存已有数据
var x_max_buffer = 0, y_max_buffer = 0, str_label_buffer = [], totaldamage_buffer = 0
var enemy_arm = 0, enemy_eva = 0, enemy_form = 1, enemy_num = 1, enemy_type = 'normal', enemy_fragile = false
var Set_EnemyStatus = new Map
var Set_EnemyProperty = [] // 敌人属性变化
var global_frame = 0, global_fragile = 1

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
  loadScript('../js/Echelon_main.js')
  loadScript('../js/Echelon_property-CN.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_select.js') // diff
  loadScript('../js/language_Echelon-CN.js') // diff
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
}
