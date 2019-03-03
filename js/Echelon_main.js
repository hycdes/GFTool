// global variations for input ui
var switch_swap = false, switch_operate = false, switch_equip = false
var num_pickblock = -1, num_pickequip = -1
var set_guntype = 1
var set_equip = [0, 0, 0]
var num_star = 5, affection = 'love'
var select_tdoll
var select_equip

// global variations for calculation
var shapeSet = [] // 影响格形状库
var buffer_table = new Map // 已放置人形的全局变量信息buffer
var buffer_last
var lib_affect = new Map // 人形影响格库，存放 < 编号, Affecy >
var lib_property = new Map // 人形属性库，存放 < 编号, Property >
var lib_property_equip = new Map // 装备属性库，存放 < 装备编号, Property_equip >
var lib_describe = new Map // 描述库，存放 < 技能名, 描述 >
var lib_skill = new Map // 技能库，存放 < 人形编号, list_Skill>
var list_tdoll = [[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]] // 战术人形列表，存放二元组[position, TdollInfo]
var time = 10
var num_tdoll = 0
var fairy = createFairy(['null'], [0])
var global_damage = []
var block1 = new Map, block2 = new Map, block3 = new Map, block4 = new Map, block5 = new Map, block6 = new Map, block7 = new Map, block8 = new Map, block9 = new Map
var blockSet = [block1, block2, block3, block4, block5, block6, block7, block8, block9]

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
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_select.js')
  mergeCell('table_property', 0, 2, 0)
  makeGraph()
}

function createTdoll (ID, Affect, Skill, Property, Equip) {
  var TdollInfo = {}
  TdollInfo.ID = ID
  TdollInfo.Affect = Affect
  TdollInfo.Skill = Skill
  TdollInfo.Property = Property
  TdollInfo.Equip = Equip
  return TdollInfo
}

function createFairy (ID, list_property, list_value) {
  var Fairy = {}
  Fairy.ID = ID
  Fairy.property = list_property
  Fairy.value = list_value
  return Fairy
}

function formater_DPS (e) { return '时间=' + e.x + 's, 输出=' + e.y }
function makeGraph () {
  var container = document.getElementById('container')
  var data1 = [], data2 = []
  for (var i = 0; i <= 100; i += 1) {
    data1.push([i, 0.1 * i])
    data2.push([i, 0.07 * i])
  }
  graph = Flotr.draw(container, [
    { data: data1, label: 'M4A1 MOD' },
    { data: data2, label: 'ST AR-15 MOD' }
  ], {
    colors: ['#6699FF', '#FF6666'],
    xaxis: { title: '时间' },
    yaxis: { title: '伤害', max: 10, min: 0 },
    mouse: { track: true, trackAll: true, relative: true, trackFormatter: formater_DPS },
    points: { show: false },
    HtmlText: false,
    grid: { verticalLines: false },
    lines: { show: true },
    legend: {
      position: 'nw',
      backgroundColor: '#FFFFFF'
    }
  })
}
// MAIN, get result
// var sample_python_skill = createSkill_special_4()
function getDPS () {
  time = parseFloat(document.getElementById('time_battle').value)
  var list_pro_base = []

  // battle computing
  for (var t = 0; t < 30 * time; t++) {
    // main
  }
}

function getBlockAffect () {
  for (var i = 0; i < 9; i++) blockSet[i].clear()
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var str_position = (list_tdoll[i][1].Affect).area, len_str = str_position.length
      var target = list_tdoll[i][1].Affect.target // 有效枪种
      var list_affectType = list_tdoll[i][1].Affect.affect_type // 影响属性类型
      var list_affectValue = list_tdoll[i][1].Affect.affect_value // 影响值
      var str_temp = '', num_tempblo = i
      // 边界
      var max_up = Math.floor(i / 3)
      var max_left = i - 3 * max_up
      var max_down = 2 - max_up
      var max_right = 2 - max_left
      for (var n = 0; n < len_str; n++) {
        if (str_position[n] != '/') {
          str_temp += str_position[n]
        } else {
          var bol_legal = true
          for (var c = 0; c < str_temp.length; c++) {
            if (str_temp[c] === 'u') {
              if (max_up > 0) num_tempblo -= 3
              else {
                bol_legal = false
                break
              }
            } else if (str_temp[c] === 'd') {
              if (max_down > 0) num_tempblo += 3
              else {
                bol_legal = false
                break
              }
            } else if (str_temp[c] === 'l') {
              if (max_left > 0) num_tempblo -= 1
              else {
                bol_legal = false
                break
              }
            } else if (str_temp[c] === 'r') {
              if (max_right > 0) num_tempblo += 1
              else {
                bol_legal = false
                break
              }
            }
          }
          if (!bol_legal) {
            str_temp = ''
          } else {
            str_temp = ''
            if (num_tempblo >= 0 && num_tempblo <= 8) { // 如果格子在0~8范围内，更新格子上的影响值
              for (var pn = 0; pn < list_affectType.length; pn++) { // 将所有影响属性加上去
                if (blockSet[num_tempblo].get(target + list_affectType[pn]) === undefined) {
                  blockSet[num_tempblo].set(target + list_affectType[pn], list_affectValue[pn])
                } else {
                  var value_new = blockSet[num_tempblo].get(target + list_affectType[pn]) + list_affectValue[pn]
                  blockSet[num_tempblo].set(target + list_affectType[pn], value_new)
                }
              }
            }
          }
          num_tempblo = i
        }
      }
    } else {
      continue // no one here, skip this block
    }
  }
}

function test (num) {
  if (num === 1) console.log(blockSet)
  else if (num === 2)console.log(list_tdoll)
// SAMPLE
}
