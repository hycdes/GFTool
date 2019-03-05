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
var list_tdoll = [[0, null], [1, null], [2, null], [3, null], [4, null], [5, null], [6, null], [7, null], [8, null]] // 战术人形列表，存放二元组[position, TdollInfo]
var time = 100, init_time = 0
var fairy = createFairy(['null'], [0])
var global_damage = []
var block1 = new Map, block2 = new Map, block3 = new Map, block4 = new Map, block5 = new Map, block6 = new Map, block7 = new Map, block8 = new Map, block9 = new Map
var blockSet = [block1, block2, block3, block4, block5, block6, block7, block8, block9]

// global variations for main-calculation
var Set_Status = new Map // 状态表，存放状态列表，< num_stand, [ <Status, left_frame> ]>，Status=[type,value(>1)]
var Set_Skill = new Map // 技能表，存放二元组列表，< num_stand, [ <Skill, frame> ] >，攻击也是个技能
var Set_Base = new Map // 当前属性，当Status改变时更新
var Set_Command = new Map // 命令，存放命令，< num_stand, command >，command = standby, freefire, skill_mf, skill_all...
var Set_Special = new Map // 特殊变量表
var Set_Data = new Map // 输出数据
var enemy_arm = 0, enemy_eva = 0, enemy_form = 1

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
}

function createTdoll (ID, Name, Type, Affect, Skill, Property, Equip) {
  var TdollInfo = {}
  TdollInfo.ID = ID
  TdollInfo.Type = Type
  TdollInfo.Name = Name
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

function getResult (multiple) {
  var Set_Data_Buffer = new Map
  for (var n = 0; n < multiple; n++) {
    getDPS()
    for (var i = 0; i < 9; i++) {
      var final_data = []
      var this_data = Set_Data_Buffer.get(i)
      var new_data = Set_Data.get(i)
      if (this_data === undefined) {
        final_data = new_data
      } else {
        var len_this = this_data.length, len_new = new_data.length
        var i_this = 0, i_new = 0
        while (true) {
          if (i_this < len_this && i_new < len_new) {
            if (this_data[i_this][0] === new_data[i_this][0]) { // 同一个x坐标
              final_data.push([this_data[i_this][0], this_data[i_this][1] + new_data[i_new][1]])
              i_this++
              i_new++
            } else if (this_data[i_this][0] > new_data[i_new][0]) { // 新数据靠前
              final_data.push([new_data[i_new][0], new_data[i_new][1] + this_data[i_this - 1][1]])
              i_new++
            } else if (this_data[x_this][0] < new_data[x_new][0]) {
              final_data.push([this_data[i_this][0], this_data[i_this][1] + new_data[i_new - 1][1]])
              i_this++
            }
          } else if (i_this === len_this && i_new < len_new) {
            final_data.push([new_data[i_new][0], new_data[i_new][1] + this_data[i_this - 1][1]])
            i_new++
          } else if (i_this < len_this && i_new === len_new) {
            final_data.push([this_data[i_this][0], this_data[i_this][1] + new_data[i_new - 1][1]])
            i_this++
          } else {
            break
          }
        }
      }
      Set_Data_Buffer.set(i, final_data)
    }
  }
  for (var i = 0; i < 9; i++) {
    var this_data = Set_Data_Buffer.get(i)
    var len = this_data.length
    for (var x = 0; x < len; x++) {
      this_data[x][1] = Math.ceil(this_data[x][1] / multiple)
    }
    Set_Data.set(i, this_data)
  }
  // 绘图
  var x_max = Math.ceil(time / 30)
  var y_max = 0
  var str_label = ['', '', '', '', '', '', '', '', '', '']
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var current_data = Set_Data.get(i)
      var len_data = (current_data).length
      for (var d = 0; d < len_data; d++) Set_Data.get(i)[d][0] = (Set_Data.get(i)[d][0] / 30).toFixed(1)
      if (Set_Data.get(i)[len_data - 1][1] > y_max) y_max = Set_Data.get(i)[len_data - 1][1]
      str_label[i] += (i + 1) + '号位:' + list_tdoll[i][1].Name + '\t\t输出=' + current_data[len_data - 1][1]
    }
  }
  makeGraph(x_max, y_max, str_label)
}

// MAIN, 攻击优先于所有
function getDPS () {
  // 清空之前数据
  Set_Status.clear()
  Set_Skill.clear()
  Set_Base.clear()
  Set_Command.clear()
  Set_Special.clear()
  Set_Data.clear()
  reset_special()
  for (var i = -1; i < 9; i++) {
    Set_Status.set(i, [])
  }
  var end_of_standby = false
  time = Math.floor(30 * parseFloat(document.getElementById('time_battle').value)) // 总帧数，fps=30
  init_time = Math.floor(30 * parseFloat(document.getElementById('time_init').value)) // 接敌帧数
  // 计算出战属性，初始化数据
  for (var i = 0; i < 9; i++) {
    Set_Data.set(i, [[0, 0]])
    if (list_tdoll[i][1] != null) {
      Set_Base.set(i, getBaseProperty(i))
    }
  }
  // 载入敌人属性
  enemy_arm = parseInt(document.getElementById('enemy_arm').value)
  enemy_eva = parseInt(document.getElementById('enemy_eva').value)
  // 初始化Command
  if (init_time > 0) {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) Set_Command.set(i, 'standby')
    }
  } else {
    end_of_standby = true
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) Set_Command.set(i, 'freefire')
    }
  }
  // 载入技能
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var list_Skill = []
      list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // 载入普攻
      for (var v_skill of list_tdoll[i][1].Skill) {
        list_Skill.push([v_skill, 30 * (v_skill.init_cld)]) // 载入技能表
      }
      Set_Skill.set(i, list_Skill)
    }
  }
  // 载入特殊变量

  // 载入初始状态（妖精天赋和全局设定）
  // 并更新属性

  // 主函数
  for (var t = 0; t < time; t++) {
    // 接敌
    if (init_time > 0) {
      init_time--
      reactAllSkill('standby', t)
    }
    // 开战
    else if (init_time === 0) {
      if (!end_of_standby) { // 解锁所有人command
        end_of_standby = true
        for (var i = 0; i < 9; i++) {
          if (list_tdoll[i][1] != null) Set_Command.set(i, 'freefire')
        }
      }
      reactAllSkill('freefire', t)
    }
  }
}

// 处理所有技能，并更新所有状态
function reactAllSkill (command, current_time) {
  if (command === 'standby') { // 等待接敌
    for (var [k, v] of Set_Skill) {
      for (var s_t of v) {
        if (s_t[1] > 0) s_t[1]-- // 走冷却时间
      }
    }
  } else if (command === 'freefire') {
    for (var [k, v] of Set_Skill) {
      for (var s_t of v) {
        if (s_t[1] > 0) s_t[1]-- // 冷却中
        else if (s_t[1] === 0) { // 激活
          react(s_t, k, current_time)
        }
      }
    }
  }
  for (var [k, v] of Set_Status) { // 状态消逝，k = stand_num, v = [ [ [type, value(>1)] ,left_frame ] ... ] 的数组
    var len_status = v.length
    for (var s = 0; s < len_status; s++) {
      var s_t = v[s]
      if (s_t[1] > 0) s_t[1]-- // 状态持续减少
      else if (s_t[1] === 0) {
        refreshBaseProperty(k, s_t, 'lost') // 更新属性
        v.splice(s, 1) // 状态结束
        len_status = v.length; s = 0 // 重置长度和迭代器再次检查
      }
    // -1则一直存在
    }
  }
}

// 执行技能，包括重置冷却、产生效果，以及添加数据
function react (s_t, stand_num, current_time) { // < Skill , countdown_time >, createSkill (init_cld, cld, duration, Describe)
  var skillname = (s_t[0].Describe).name // Describe -> name, special_paremeters
  if (skillname === 'attack') { // 普通攻击
    var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
    Set_Data.get(stand_num).push([current_time, lastData])
    var current_Info = (Set_Base.get(stand_num)).Info
    if (Math.random() <= current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) { // 命中
      var final_dmg = Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 穿甲伤害
      var final_crit = 1
      if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
      final_dmg = Math.ceil(final_dmg * final_crit)
      final_dmg *= 5 // 扩编
      Set_Data.get(stand_num).push([current_time, lastData + final_dmg])
    } else {
      Set_Data.get(stand_num).push([current_time, lastData])
    }
    s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof')) - 1
  }
  else if (skillname === 'property') { // 属性增益类
    var list_target = (s_t[0].Describe).list_target
    var len_list_target = list_target.length
    var list_value = []
    for (var i = 0; i < len_list_target; i++) {
      if (list_target[i].substr(0, 3) === 'blo') { // 影响格上
        //
      } else if (list_target[i].substr(0, 3) === 'col') { // 列数上
        //
      } else {
        if (list_target[i] === 'all' || list_target[i] === 'self') { // 号令类all、专注类self
          var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
          var list_value = ((s_t[0].Describe).list_value)[i].split('/')
          var len = list_pro.length
          for (var p = 0; p < len; p++) {
            changeStatus(stand_num, list_target[i], list_pro[p], list_value[p], s_t[0].duration)
          }
        }
      }
    }
    if (s_t[0].duration > 0) {
      var current_info = (Set_Base.get(stand_num)).Info
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_info.get('cld')) * 30) - 1 // 进入冷却
    } else if (s_t[0].duration === 0) { // 非持续类
      s_t[1] = -1
    }else if (s_t[0].duration === -1) { // 无限持续
      s_t[1] = -1
    }
  }
}

function changeStatus (stand_num, target, type, value, duration) { // 注意检查python
  var frame = 30 * duration
  if (target === 'all') { // 号令类
    if (!Set_Special.get('can_add_python')) { // 有蟒蛇，需要触发被动
      //
    }
    var new_status = [[type, 1 + parseFloat(value)], frame]
    var list_status = Set_Status.get(-1)
    list_status.push(new_status)
    Set_Status.set(-1, list_status)
    refreshBaseProperty(-1, new_status, 'get')
  } else if (target === 'self') { // 专注类
    var new_status = [[type, 1 + parseFloat(value)], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
    refreshBaseProperty(stand_num, new_status, 'get')
  }
}

function refreshBaseProperty (stand_num, status, situation) { // 刷新属性，状态是 [< pro_type, value >, frame]  二元组，stand_num=-1即全体
  // status = [ [ type, value(>1) ], frame ]
  if (stand_num === -1) { // 全体属性变化
    for (var i = 0; i < 9; i++) {
      if (Set_Base.get(i) != undefined) {
        var this_info = (Set_Base.get(i)).Info
        var new_property = (this_info).get(status[0][0])
        if (situation === 'get') new_property = Math.ceil(new_property * status[0][1])
        else if (situation === 'lost') new_property = Math.floor(new_property / status[0][1])
        this_info.set(status[0][0], new_property)
      }
    }
  } else { // 某一人属性变化
    var this_info = (Set_Base.get(stand_num)).Info
    var new_property = (this_info).get(status[0][0])
    if (situation === 'get') new_property = Math.ceil(new_property * status[0][1])
    else if (situation === 'lost') new_property = Math.floor(new_property / status[0][1])
    this_info.set(status[0][0], new_property)
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
  // INFO: type类型, hp生命, dmg伤害, acu命中, eva闪避, rof射速, arm护甲, crit暴击, critdmg爆伤, cs弹量, ap穿甲, ff力场, shield护盾, cld冷却缩减
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
    0,
    0,
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
  Info.set('cs', full_property[8]); Info.set('critdmg', full_property[9]); Info.set('ap', full_property[10]); Info.set('ff', full_property[11]); Info.set('shield', full_property[12])
  if (blockSet[num].get(str_tn + 'cld') != undefined) {
    full_property[13] += blockSet[num].get(str_tn + 'cld')
  }
  if (full_property[13] > 0.3) full_property[13] = 0.3
  Info.set('cld', full_property[13])
  return createBase(Area, Info)
}

function rof_to_frame (num_tn, base_rof) {
  var str_tn = ''
  if (num_tn === 1) str_tn = 'hg'
  else if (num_tn === 2) str_tn = 'ar'
  else if (num_tn === 3) str_tn = 'smg'
  else if (num_tn === 4) str_tn = 'rf'
  else if (num_tn === 5) str_tn = 'mg'
  else if (num_tn === 6) str_tn = 'sg'
  var shootframe = 100
  if (str_tn == 'hg' || str_tn == 'ar' || str_tn == 'smg' || str_tn == 'rf') {
    if (base_rof >= 120) shootframe = 12
    else if (base_rof <= 15) shootframe = 100
    else shootframe = Math.floor(1500 / base_rof)
  } else if (str_tn === 'mg') {
    shootframe = 10 // 以后写11帧判断
  } else if (str_tn === 'sg') {
    if (base_rof >= 60) shootframe = 25
    else if (base_rof <= 15) shootframe = 100
    else shootframe = Math.floor(1500 / base_rof)
  }
  return shootframe
}

function createBase (Area, Info) {
  var Base = {}
  Base.Area = Area // 影响格位置
  Base.Info = Info // 具体属性
  return Base
}

function formater_DPS (e) { return '时间=' + e.x + 's, 输出=' + e.y }
function makeGraph (x_max, y_max, str_label) {
  var container = document.getElementById('container')
  graph = Flotr.draw(container, [
    { data: Set_Data.get(0), label: str_label[0]},
    { data: Set_Data.get(1), label: str_label[1]},
    { data: Set_Data.get(2), label: str_label[2]},
    { data: Set_Data.get(3), label: str_label[3]},
    { data: Set_Data.get(4), label: str_label[4]},
    { data: Set_Data.get(5), label: str_label[5]},
    { data: Set_Data.get(6), label: str_label[6]},
    { data: Set_Data.get(7), label: str_label[7]},
    { data: Set_Data.get(8), label: str_label[8]},
    { data: Set_Data.get(9), label: str_label[9]}
  ], {
    colors: ['#FF0000', '#FF6666', '#FFCC00', '#FFFF00', '#66FF99', '#33FF00', '#6699FF', '#3366FF', '#000000'],
    xaxis: { title: '时间',max: x_max, min: 0 },
    yaxis: { title: '伤害', max: y_max, min: 0 },
    mouse: { track: true, relative: true, trackFormatter: formater_DPS },
    points: { show: false },
    HtmlText: false,
    grid: { verticalLines: false },
    legend: {
      position: 'nw',
      backgroundColor: '#FFFFFF'
    }
  })
}

function test (num) {
  if (num === 1) console.log(blockSet)
  else if (num === 2) console.log(list_tdoll)
  else if (num === 3) console.log(Set_Data)
  else if (num === -1) {
    getDPS()
  }
// SAMPLE
}
