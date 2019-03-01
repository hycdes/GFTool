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
window.onload = function () {
  mergeCell('table_property', 0, 2, 0)
  makeGraph()
}

// global variations for calculation
var time = 10, num_tdoll = 0, list_tdoll = []
var fairy = createFairy(['null'], [0])
var global_damage = []

function createTdoll (ID, Affect, Skill, Property, Equip) {
  var TdollInfo = {}
  TdollInfo.ID = ID
  TdollInfo.Affect = Affect
  TdollInfo.Skill = Skill
  TdollInfo.Property = Property
  TdollInfo.Equip = Equip
}
function createAffect (list_affectArea, affect_target, list_affectType, list_affectValue) {
  var Affect = {}
  // blocknum = l,r,u,d...
  Affect.affect_blocknum = list_affectArea
  // target = all, hg, ar, smg, rf, mg, sg
  Affect.affect_target = affect_target
  // type = dmg, rof, acu, eva, crit, cld, arm
  Affect.affect_type = list_affectType
  Affect.affect_value = list_affectValue
}
function createSkill_property (list_property, list_rate, list_target, duration, init_cld, cld) {
  var Skill = {}
  Skill.property = list_property
  Skill.rate = list_rate
  // target = self, all, list_block
  Skill.target = list_target
  Skill.duration = duration
  Skill.init_cld = init_cld
  Skill.cld = cld
}
function createProperty (hp, eva, arm, dmg, rof, acu, crit, critdmg, ap, cs, ff) {
  var Property = {}
  // health point, evasion, armor, damage, rate_of_fire, accuracy, crit_rate, crit_damage, armor_penetrate, clip_size, force_field
  Property.hp = hp
  Property.eva = eva
  Property.arm = arm //
  Property.dmg = dmg //
  Property.rof = rof //
  Property.acu = acu
  Property.crit = crit //
  Property.critdmg = critdmg //
  Property.ap = ap //
  Property.cs = cs
  Property.ff = ff //
}
function createEquip (list_proprety, list_value) {
  var Equip = {}
  Equip.property = list_proprety
  Equip.value = list_value
}
function createFairy (ID, list_property, list_value) {
  var Fairy = {}
  Fairy.ID = ID
  Fairy.property = list_property
  Fairy.value = list_value
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
function getDPS () {
  time = parseFloat(document.getElementById('time_battle').value)
  var list_pro_base = []

  // battle computing
  for (var t = 0; t < 30 * time; t++) {
    // main
  }
}

// global variations for input ui
var switch_swap = false, num_pickblock = -1, set_guntype = 1, num_star = 5
// functions for input UI
function pickBlock (num) {
  for (var i = 1; i <= 9; i++) {
    var img_name = 'img_' + i
    if (i === num) {
      if (num_pickblock === num) {
        num_pickblock = -1
        document.getElementById(img_name).src = '../img/echelon/select-no.png'
      } else {
        num_pickblock = num
        document.getElementById(img_name).src = '../img/echelon/select.png'
      }
    } else {
      document.getElementById(img_name).src = '../img/echelon/select-no.png'
    }
  }
}
function pickGunType (num) {
  var iconName = 'icon-', lasticonName = 'icon-'
  if (num === 1) iconName += 'hg'
  else if (num === 2) iconName += 'ar'
  else if (num === 3) iconName += 'smg'
  else if (num === 4) iconName += 'rf'
  else if (num === 5) iconName += 'mg'
  else if (num === 6) iconName += 'sg'
  if (set_guntype === 1) lasticonName += 'hg'
  else if (set_guntype === 2) lasticonName += 'ar'
  else if (set_guntype === 3) lasticonName += 'smg'
  else if (set_guntype === 4) lasticonName += 'rf'
  else if (set_guntype === 5) lasticonName += 'mg'
  else if (set_guntype === 6) lasticonName += 'sg'
  document.getElementById(lasticonName).src = '../img/echelon/' + lasticonName + '.png'
  document.getElementById(iconName).src = '../img/echelon/' + iconName + '-pick.png'
  set_guntype = num
}
function changeStar (num) {
  if (num === 1 && num_star < 5) {
    num_star++
  } else if (num === 2 && num_star > 2) {
    num_star--
  }
  document.getElementById('icon-star').src = '../img/echelon/icon-' + num_star + 'star.png'
  document.getElementById('icon-addstar').src = '../img/echelon/icon-add.png'
  document.getElementById('icon-substar').src = '../img/echelon/icon-sub.png'
  document.getElementById('icon-addstar').style = 'cursor: pointer'
  document.getElementById('icon-addstar').style = 'cursor: pointer'
  if (num_star === 5) {
    document.getElementById('icon-addstar').src = '../img/echelon/icon-add-disable.png'
    document.getElementById('icon-addstar').style = 'cursor: default'
  }
  if (num_star === 2) {
    document.getElementById('icon-substar').src = '../img/echelon/icon-sub-disable.png'
    document.getElementById('icon-substar').style = 'cursor: default'
  }
}
function changeSelectItems () {
}
function changeSelection () {
  var ID = parseInt(document.getElementById('select-tdoll').value)
  var path_img = '../img/echelon/' + ID + '.png'
}
