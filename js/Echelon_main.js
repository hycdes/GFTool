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

function createTdoll (ID, Type, Affect, Skill, Property, Equip) {
  var TdollInfo = {}
  TdollInfo.ID = ID
  TdollInfo.Type = Type
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

// 计算影响格
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
      var max_up = Math.floor(i / 3), max_left = i - 3 * max_up, max_down = 2 - max_up, max_right = 2 - max_left
      for (var n = 0; n < len_str; n++) {
        if (str_position[n] != '/') str_temp += str_position[n]
        else {
          var bol_legal = true
          var dis_up = max_up, dis_down = max_down, dis_left = max_left, dis_right = max_right
          for (var c = 0; c < str_temp.length; c++) {
            if (str_temp[c] === 'u') {
              if (dis_up > 0) { num_tempblo -= 3; dis_up--; } else { bol_legal = false; break; }
            } else if (str_temp[c] === 'd') {
              if (dis_down > 0) { num_tempblo += 3; dis_down--; } else { bol_legal = false; break; }
            } else if (str_temp[c] === 'l') {
              if (dis_left > 0) { num_tempblo -= 1; dis_left--; } else { bol_legal = false; break; }
            } else if (str_temp[c] === 'r') {
              if (dis_right > 0) { num_tempblo += 1; dis_right--; } else { bol_legal = false; break; }
            }
          }
          if (bol_legal) {
            for (var pn = 0; pn < list_affectType.length; pn++) { // 更新格子上的影响值
              if (blockSet[num_tempblo].get(target + list_affectType[pn]) === undefined) { // 添加新属性
                blockSet[num_tempblo].set(target + list_affectType[pn], list_affectValue[pn])
              } else { // 累加已有属性
                var value_new = blockSet[num_tempblo].get(target + list_affectType[pn]) + list_affectValue[pn]
                blockSet[num_tempblo].set(target + list_affectType[pn], value_new)
              }
            }
          }
          str_temp = ''
          num_tempblo = i
        }
      }
    } else continue // no one here, skip this block
  }
}

// MAIN, get result
// var sample_python_skill = createSkill_special_4()
function getDPS () {
  time = parseFloat(document.getElementById('time_battle').value)
  var Set_Status = new Map
  var Set_Skill = new Map
  var Set_Base = new Map
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      Set_Base.set(i, getBaseProperty(i))
    }
  }
  console.log(Set_Base)
  // battle computing
  for (var t = 0; t < 30 * time; t++) {
    // main
  }
}
function getBaseProperty (num) {
  var Area = [false, false, false, false, false, false, false, false, false] // 影响格范围
  var Info = new Map // 全部信息，包括最终出战全属性和枪种
  // Area
  var str_affect = (list_tdoll[num][1].Affect).area, len_str = str_affect.length, str_temp = '', num_tempblo = num
  var max_up = Math.floor(num / 3), max_left = num - 3 * max_up, max_down = 2 - max_up, max_right = 2 - max_left
  for (var n = 0; n < len_str; n++) {
    if (str_affect[n] != '/') str_temp += str_affect[n]
    else {
      var bol_legal = true
      var dis_up = max_up, dis_down = max_down, dis_left = max_left, dis_right = max_right
      for (var c = 0; c < str_temp.length; c++) {
        if (str_temp[c] === 'u') {
          if (dis_up > 0) { num_tempblo -= 3; dis_up--; } else { bol_legal = false; break; }
        } else if (str_temp[c] === 'd') {
          if (dis_down > 0) { num_tempblo += 3; dis_down--; } else { bol_legal = false; break; }
        } else if (str_temp[c] === 'l') {
          if (dis_left > 0) { num_tempblo -= 1; dis_left--; } else { bol_legal = false; break; }
        } else if (str_temp[c] === 'r') {
          if (dis_right > 0) { num_tempblo += 1; dis_right--; } else { bol_legal = false; break; }
        }
      }
      if (bol_legal) Area[num_tempblo] = true // 记录影响格位置
      str_temp = ''
      num_tempblo = num
    }
  }
  // INFO: type, hp, dmg, acu, eva, rof, arm, crit, critdmg, cs, ap, ff
  var full_property = [
    list_tdoll[num][1].Type,
    (list_tdoll[num][1].Property).hp,
    (list_tdoll[num][1].Property).dmg + (list_tdoll[num][1].Equip)[0].dmg + (list_tdoll[num][1].Equip)[1].dmg + (list_tdoll[num][1].Equip)[2].dmg + (list_tdoll[num][1].Equip)[3].dmg,
    (list_tdoll[num][1].Property).acu + (list_tdoll[num][1].Equip)[0].acu + (list_tdoll[num][1].Equip)[1].acu + (list_tdoll[num][1].Equip)[2].acu + (list_tdoll[num][1].Equip)[3].acu,
    (list_tdoll[num][1].Property).eva + (list_tdoll[num][1].Equip)[0].eva + (list_tdoll[num][1].Equip)[1].eva + (list_tdoll[num][1].Equip)[2].eva + (list_tdoll[num][1].Equip)[3].eva,
    (list_tdoll[num][1].Property).rof + (list_tdoll[num][1].Equip)[0].rof + (list_tdoll[num][1].Equip)[1].rof + (list_tdoll[num][1].Equip)[2].rof + (list_tdoll[num][1].Equip)[3].rof,
    (list_tdoll[num][1].Property).arm + (list_tdoll[num][1].Equip)[0].arm + (list_tdoll[num][1].Equip)[1].arm + (list_tdoll[num][1].Equip)[2].arm + (list_tdoll[num][1].Equip)[3].arm,
    (list_tdoll[num][1].Property).crit + (list_tdoll[num][1].Equip)[0].crit + (list_tdoll[num][1].Equip)[1].crit + (list_tdoll[num][1].Equip)[2].crit + (list_tdoll[num][1].Equip)[3].crit,
    (list_tdoll[num][1].Property).cs + (list_tdoll[num][1].Equip)[0].cs + (list_tdoll[num][1].Equip)[1].cs + (list_tdoll[num][1].Equip)[2].cs + (list_tdoll[num][1].Equip)[3].cs,
    1.5 + (list_tdoll[num][1].Equip)[0].critdmg + (list_tdoll[num][1].Equip)[1].critdmg + (list_tdoll[num][1].Equip)[2].critdmg + (list_tdoll[num][1].Equip)[3].critdmg,
    15 + (list_tdoll[num][1].Equip)[0].ap + (list_tdoll[num][1].Equip)[1].ap + (list_tdoll[num][1].Equip)[2].ap + (list_tdoll[num][1].Equip)[3].ap,
    0
  ]
  Info.set('type', full_property[0]); Info.set('hp', full_property[1])
  var str_tn, num_tn = Info.get('type')
  if (num_tn === 1) str_tn = 'hg'
  else if (num_tn === 2) str_tn = 'ar'
  else if (num_tn === 3) str_tn = 'smg'
  else if (num_tn === 4) str_tn = 'rf'
  else if (num_tn === 5) str_tn = 'mg'
  else if (num_tn === 6) str_tn = 'sg'
  var mul = [1, 1, 1, 1, 1, 1]
  if (blockSet[num].get(str_tn + 'dmg') != undefined) mul[0] += blockSet[num].get(str_tn + 'dmg')
  if (blockSet[num].get('alldmg') != undefined) mul[0] += blockSet[num].get('alldmg')
  full_property[2] *= mul[0]
  Info.set('dmg', Math.ceil(full_property[2]))
  if (blockSet[num].get(str_tn + 'acu') != undefined) mul[1] += blockSet[num].get(str_tn + 'acu')
  if (blockSet[num].get('allacu') != undefined) mul[1] += blockSet[num].get('allacu')
  full_property[3] *= mul[1]
  Info.set('acu', Math.ceil(full_property[3]))
  if (blockSet[num].get(str_tn + 'eva') != undefined)  mul[2] += (blockSet[num].get(str_tn + 'eva'))
  if (blockSet[num].get('alleva') != undefined)  mul[2] += blockSet[num].get('alleva')
  full_property[4] *= mul[2]
  Info.set('eva', Math.ceil(full_property[4]))
  if (blockSet[num].get(str_tn + 'rof') != undefined)  mul[3] += blockSet[num].get(str_tn + 'rof')
  if (blockSet[num].get('allrof') != undefined)  mul[3] += blockSet[num].get('allrof')
  full_property[5] *= mul[3]
  Info.set('rof', Math.ceil(full_property[5]))
  if (blockSet[num].get(str_tn + 'arm') != undefined)  mul[4] += blockSet[num].get(str_tn + 'arm')
  if (blockSet[num].get('allarm') != undefined)  mul[4] += blockSet[num].get('allarm')
  full_property[6] *= mul[4]
  Info.set('arm', Math.ceil(full_property[6]))
  if (blockSet[num].get(str_tn + 'crit') != undefined)  mul[5] += blockSet[num].get(str_tn + 'crit')
  if (blockSet[num].get('allcrit') != undefined)  mul[5] += blockSet[num].get('allcrit')
  full_property[7] *= mul[5]
  Info.set('crit', full_property[7])
  Info.set('cs', full_property[8]); Info.set('critdmg', full_property[9]); Info.set('ap', full_property[10]); Info.set('ff', full_property[11])
  return createBase(Area, Info)
}

function createBase (Area, Info) {
  var Base = {}
  Base.Area = Area // 影响格位置
  Base.Info = Info // 具体属性
  return Base
}

function test (num) {
  if (num === 1) console.log(blockSet)
  else if (num === 2) console.log(list_tdoll)
  else if (num === 3) getDPS()
// SAMPLE
}
