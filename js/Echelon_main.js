// global variations for input ui
var shapeSet = []
var switch_swap = false
var num_pickblock = -1, num_pickequip = -1
var set_guntype = 1, num_star = 5, affection = 'love'

// global variations for calculation
var time = 10, num_tdoll = 0
var list_tdoll = [] // 战术人形列表，存放二元组[position, TdollInfo]
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
  loadScript('../js/Echelon_blockshape.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
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
function createAffect (str_affectArea, target, list_affectType, list_affectValue) {
  var Affect = {}
  Affect.area = str_affectArea // area = l/r/u/d/
  Affect.target = target // target = all, hg, ar, smg, rf, mg, sg
  Affect.affect_type = list_affectType // type = [dmg, rof, acu, eva, crit, cld, arm]
  Affect.affect_value = list_affectValue // list of value
  return Affect
}

function createProperty (hp, eva, arm, dmg, rof, acu, crit, critdmg, ap, cs, ff) {
  var Property = {}
  Property.hp = hp // health_point
  Property.eva = eva // evasion
  Property.arm = arm // armor
  Property.dmg = dmg // damage
  Property.rof = rof // rate_of_fire
  Property.acu = acu // accuracy
  Property.crit = crit // crit_rate
  Property.critdmg = critdmg // crit_damage
  Property.ap = ap // armor_penetrate
  Property.cs = cs // clip_size
  Property.ff = ff // force_field
  return Property
}
function createEquip (list_proprety, list_value) {
  var Equip = {}
  Equip.property = list_proprety
  Equip.value = list_value
  return Equip
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
function add_Tdoll () {
  var a = 1
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
  for (var i = 0; i < num_tdoll; i++) {
    var num_stand = list_tdoll[i][0]
    var str_position = (list_tdoll[i][1].Affect).area, len_str = str_position.length
    var target = list_tdoll[i][1].Affect.target // 有效枪种
    var list_affectType = list_tdoll[i][1].Affect.affect_type // 影响属性类型
    var list_affectValue = list_tdoll[i][1].Affect.affect_value // 影响值
    var str_temp = '', num_tempblo = num_stand
    var max_up = Math.floor(num_stand / 3)
    var max_left = num_stand - 3 * max_up
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
          num_tempblo = num_stand
          continue
        }
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
        num_tempblo = num_stand
      }
    }
  }
}

function test () {
  // SAMPLE
  var sample_python_affect = createAffect(shapeSet[8], 'all', ['dmg', 'crit'], [0.3, 0.2])
  var sample_mk23_affect = createAffect(shapeSet[3], 'all', ['dmg'], [0.36])
  var sample_tdoll = [3, createTdoll(4, sample_python_affect, [], [], [])]
  var sample_tdoll2 = [4, createTdoll(99, sample_mk23_affect, [], [], [])]
  list_tdoll.push(sample_tdoll)
  list_tdoll.push(sample_tdoll2)
  num_tdoll = 2
  getBlockAffect()
  console.log(blockSet)
// SAMPLE
}
