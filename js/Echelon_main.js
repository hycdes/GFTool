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
var enemy_arm = 0, enemy_eva = 0, enemy_form = 1, enemy_num = 1, enemy_type = 'normal', enemy_fragile = false
var Set_EnemyStatus = new Map
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
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_select.js')
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
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
            if (this_data[i_this][0] === new_data[i_new][0]) { // 同一个x坐标
              final_data.push([this_data[i_this][0], this_data[i_this][1] + new_data[i_new][1]])
              i_this++
              i_new++
            } else if (this_data[i_this][0] > new_data[i_new][0]) { // 新数据靠前
              final_data.push([new_data[i_new][0], new_data[i_new][1] + this_data[i_this - 1][1]])
              i_new++
            } else if (this_data[i_this][0] < new_data[i_new][0]) {
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
      str_label[i] += (i + 1) + '号位:' + list_tdoll[i][1].Name + '  输出=' + current_data[len_data - 1][1]
    }
  }
  makeGraph(x_max, y_max, str_label)
}

function isProperty (str) {
  var isPro = false
  if (str === 'dmg' || str === 'acu' || str === 'eva' || str === 'rof' || str === 'arm' || str === 'crit' || str === 'critdmg' || str === 'cs' || str === 'ap' || str === 'ff' || str === 'shield') {
    isPro = true
  }
  return isPro
}

// MAIN, 攻击优先于所有
function getDPS () {
  // 清空之前数据
  global_fragile = 1
  not_init = false
  Set_Status.clear()
  Set_Skill.clear()
  Set_Base.clear()
  Set_Command.clear()
  Set_Special.clear()
  Set_EnemyStatus.clear()
  Set_Data.clear()
  reset_special()
  for (var i = -1; i < 9; i++) {
    Set_Status.set(i, [])
  }
  var end_of_standby = false
  time = Math.floor(30 * parseFloat(document.getElementById('time_battle').value)) // 总帧数，fps=30
  init_time = Math.floor(30 * parseFloat(document.getElementById('time_init').value)) // 接敌帧数
  // 初始化数据
  for (var i = 0; i < 9; i++) {
    Set_Data.set(i, [[0, 0]]) // 输出数据初始化
    if (list_tdoll[i][1] != null) {
      Set_Base.set(i, getBaseProperty(i)) // 计算出战属性
      Set_Special.set('attack_permission_' + i, 'fire_all') // 初始化开火许可，有状态：fire_all, fire_four, stop
    }
  }
  if (!Set_Special.get('can_add_python')) { // 有蟒蛇存在
    Set_Special.set('python_dmg', 0)
    Set_Special.set('python_rof', 0)
    Set_Special.set('python_acu', 0)
    Set_Special.set('python_eva', 0)
    Set_Special.set('python_crit', 0)
    Set_Special.set('python_active', 6)
  }
  // 载入敌人属性
  enemy_arm = parseInt(document.getElementById('enemy_arm').value)
  enemy_eva = parseInt(document.getElementById('enemy_eva').value)
  enemy_form = parseInt(document.getElementById('enemy_form').value)
  enemy_num = parseInt(document.getElementById('enemy_num').value)
  enemy_fragile = false
  if (document.getElementById('switch_normal').checked) enemy_type = 'normal'
  else if (document.getElementById('switch_elite').checked) enemy_type = 'elite'
  else if (document.getElementById('switch_boss').checked) enemy_type = 'boss'
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
  // 载入初始状态（妖精属性、天赋、全局设定、换弹）
  var common_position = 0
  for (var cn = 0; cn < 9; cn++) {
    if (list_tdoll[cn][1] != null) {
      common_position = cn
      break
    }
  }
  if (fairy_no > 0) {
    var fairy_info = lib_fairy.get(fairy_no)
    var list_property = (fairy_info.property).split('/')
    var list_value = (fairy_info.value).split('/')
    var fairy_list_len = list_property.length
    for (var i = 0; i < fairy_list_len; i++) {
      changeStatus(-1, 'all', list_property[i], list_value[i], -1)
    }
    if (talent_no === 1) {
      Set_Special.set('talent_num', 1)
      Set_Special.set('talent_active_at', 239)
      changeStatus(-1, 'all', 'dmg', '0.1', -1)
    }
    else if (talent_no === 2) changeStatus(common_position, 'all', 'dmg', '0.12', -1)
    else if (talent_no === 3) changeStatus(common_position, 'all', 'dmg', '0.15', -1)
    else if (talent_no === 4) changeStatus(common_position, 'all', 'acu', '0.2', -1)
    else if (talent_no === 5) changeStatus(common_position, 'all', 'acu', '0.25', -1)
    else if (talent_no === 6) changeStatus(common_position, 'all', 'eva', '0.15', -1)
    else if (talent_no === 7) changeStatus(common_position, 'all', 'eva', '0.2', -1)
    else if (talent_no === 8) changeStatus(common_position, 'all', 'arm', '0.08', -1)
    else if (talent_no === 9) changeStatus(common_position, 'all', 'arm', '0.10', -1)
    else if (talent_no === 10) changeStatus(common_position, 'all', 'crit', '0.4', -1)
    else if (talent_no === 11) changeStatus(common_position, 'all', 'crit', '0.5', -1)
    else if (talent_no === 12) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 3) {
          changeStatus(i, 'self', 'dmg', '0.08', -1)
          changeStatus(i, 'self', 'eva', '0.12', -1)
        }
      }
    }
    else if (talent_no === 13) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 2) {
          changeStatus(i, 'self', 'dmg', '0.1', -1)
          changeStatus(i, 'self', 'rof', '0.08', -1)
        }
      }
    }
    else if (talent_no === 14) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 4) {
          changeStatus(i, 'self', 'dmg', '0.08', -1)
          changeStatus(i, 'self', 'rof', '0.10', -1)
        }
      }
    }
    else if (talent_no === 15) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 6) {
          changeStatus(i, 'self', 'arm', '0.08', -1)
          changeStatus(i, 'self', 'crit', '0.2', -1)
        }
      }
    }
    else if (talent_no === 16) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 5) {
          changeStatus(i, 'self', 'dmg', '0.1', -1)
          changeStatus(i, 'self', 'acu', '0.15', -1)
        }
      }
    }
    else if (talent_no === 17) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 1) {
          changeStatus(i, 'self', 'eva', '0.1', -1)
          changeStatus(i, 'self', 'crit', '0.3', -1)
        }
      }
    }
  }
  if (document.getElementById('check_init_critmax').checked) {
    for (var i = 0; i < 9; i++) Set_Special.set('must_crit_' + i, true)
  }
  if (Set_Special.get('sunrise') === 'night') { // 夜战BUFF
    for (var i = 0; i < 9; i++) {
      if (Set_Base.get(i) != undefined) {
        var night_decline = (100 - (Set_Base.get(i).Info).get('night')) * (-0.9)
        if (night_decline < 0) changeStatus(i, 'self', 'acu', ('' + (night_decline / 100)), -1)
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (Set_Base.get(i).Info.get('type') === 5 || Set_Base.get(i).Info.get('type') === 6) {
        Set_Special.set('clipsize_' + i, Set_Base.get(i).Info.get('cs')) // MG和SG上弹
        if (list_tdoll[i][1].ID === 253) { // 刘易斯开场第一层buff
          Set_Special.set('angel_strength' + i, 1)
          Set_Special.set('clipsize_' + i, Set_Base.get(i).Info.get('cs') + 1)
        }
      } else {
        if (list_tdoll[i][1].ID === 213) { // CMS
          if (document.getElementById('special_cms_' + (i + 1) + '_1').checked) changeStatus(i, 'self', 'eva', 0.65, -1) // 亚音速弹
          else if (document.getElementById('special_cms_' + (i + 1) + '_2').checked) changeStatus(i, 'self', 'dmg', 0.85, -1) // 勺尖弹
          else if (document.getElementById('special_cms_' + (i + 1) + '_3').checked) changeStatus(i, 'self', 'acu', 2, -1) // 标准弹
        } else if (list_tdoll[i][1].ID === 231) { // M82A1
          if (document.getElementById('special_m82a1_' + (i + 1) + '_0').checked) Set_Special.set('m82a1_win_' + i, 0) // 0胜场
          else if (document.getElementById('special_m82a1_' + (i + 1) + '_1').checked) Set_Special.set('m82a1_win_' + i, 1) // 1胜场
          else if (document.getElementById('special_m82a1_' + (i + 1) + '_2').checked) Set_Special.set('m82a1_win_' + i, 2) // 2胜场
          else if (document.getElementById('special_m82a1_' + (i + 1) + '_3').checked) Set_Special.set('m82a1_win_' + i, 3) // 3胜场
        }
      }
    }
  }

  // 主函数
  not_init = true
  var check_talent = true
  if (Set_Special.get('talent_active_at') === undefined) check_talent = false
  for (var t = 0; t < time; t++) {
    global_frame = t
    // 激昂型发动
    if (check_talent) {
      if (global_frame === Set_Special.get('talent_active_at') && Set_Special.get('talent_num') < 3) {
        Set_Special.set('talent_active_at', Set_Special.get('talent_active_at') + 240)
        changeStatus(common_position, 'all', 'dmg', '0.1', -1)
        Set_Special.set('talent_num', Set_Special.get('talent_num') + 1)
      }
      if (Set_Special.get('talent_num') >= 3) check_talent = false
    }
    // 接敌时间
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
          if (Set_Special.get('reloading_' + k) != undefined) true // 换弹不准开技能
          else react(s_t, k, current_time) // 解释技能
        }
      }
    }
  }
  for (var [k, v] of Set_Status) { // 状态消逝，k = stand_num, v = [ [ [type, value(>1)] ,left_frame ] ... ] 的数组
    if (Set_Special.get('fragile_40') != undefined && Set_Special.get('fragile_40') < global_frame) {
      global_fragile /= 1.4
      Set_Special.delete('fragile_40')
    }
    if (Set_Special.get('fragile_15') != undefined && Set_Special.get('fragile_15') < global_frame) {
      global_fragile /= 1.15
      Set_Special.delete('fragile_15')
    }
    if (Set_Special.get('64howa_' + k) != undefined && Set_Special.get('64howa_' + k) < global_frame) {
      if (document.getElementById('special_64howa_' + (k + 1) + '_0').checked) {
        changeStatus(k, 'self', 'dmg', '0.55', 5)
        react([createSkill(0, 0, 5, describe_property(['bloall'], ['dmg'], ['0.55'])), 0], k, global_frame)
      } else {
        // 护盾暂时不做
      }
      Set_Special.delete('64howa_' + k)
    }
    if (Set_Special.get('multi_' + k) != undefined && Set_Special.get('multi_' + k)[1] < global_frame) {
      Set_Special.delete('multi_' + k)
    }
    var len_status = v.length
    for (var s = 0; s < len_status; s++) {
      var s_t = v[s]
      if (s_t[1] > 0) s_t[1]-- // 状态持续减少
      else if (s_t[1] === 0) {
        if (isProperty(s_t[0][0])) {
          endStatus(k, s_t, 'lost') // 更新属性
        }
        else if (s_t[0][0] === 'python') Set_Special.delete('python_opening')
        else if (s_t[0][0].substr(0, 12) === 'python_buff_') {
          var str_type = s_t[0][0].substr(12)
          var new_num = Set_Special.get('python_' + str_type)
          if (new_num > 0) Set_Special.set('python_' + str_type, new_num - 1)
        }
        else if (s_t[0][0] === 'avenger_mark') Set_Special.delete(k) // 特殊变量：M4炮击结束
        else if (s_t[0][0] === 'grenade') endStatus(k, s_t, 'grenade') // 榴弹掷出
        else if (s_t[0][0] === 'dot') endStatus(k, s_t, 'dot') // 持续伤害灼烧
        else if (s_t[0][0] === 'fal') endStatus(k, s_t, 'fal') // 榴弹践踏
        else if (s_t[0][0] === 'snipe') endStatus(k, s_t, 'snipe') // 狙击出膛
        else if (s_t[0][0] === 'reload') {
          Set_Special.set('attack_permission_' + k, 'fire_all') // 换弹结束
          Set_Special.delete('reloading_' + k)
        }
        v.splice(s, 1) // 状态结束
        len_status = v.length; s-- // 检查下一个
      }
    // -1则一直存在
    }
  }
}

// 执行技能，包括重置冷却、产生效果，以及添加数据
function react (s_t, stand_num, current_time) { // < Skill , countdown_time >, createSkill (init_cld, cld, duration, Describe)
  var skillname = (s_t[0].Describe).name // Describe -> name, special_paremeters
  var current_Info = (Set_Base.get(stand_num)).Info
  if (skillname === 'attack') { // 普通攻击
    var fire_status = Set_Special.get('attack_permission_' + stand_num)
    if (fire_status.substr(0, 4) === 'fire') { // 射击准许
      // M4A1 MOD 炮击
      if (list_tdoll[stand_num][1].ID === 1055 && Set_Special.get(stand_num) === 'shelling') {
        var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
        Set_Data.get(stand_num).push([current_time, lastData])
        var dmg_direct = 0, dmg_aoe = 0, final_dmg = 0
        // 必中，不可暴击，护甲减免的直击
        dmg_direct = 5 * Math.max(1, Math.ceil(6 * current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
        // 能闪避，可暴击，护甲减免的溅射
        for (var i = 0; i < enemy_num - 1; i++) {
          if (Math.random() <= current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) { // 命中
            var final_crit = 1
            if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
            dmg_aoe += 5 * final_crit * (enemy_num - 1) * Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
          }
        }
        final_dmg = dmg_direct + dmg_aoe
        if (enemy_fragile) final_dmg = Math.ceil(final_dmg * global_fragile)
        Set_Data.get(stand_num).push([current_time, lastData + final_dmg])
      }
      // 正常的攻击
      else {
        var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
        Set_Data.get(stand_num).push([current_time, lastData])
        if (list_tdoll[stand_num][1].ID === 197) { // 玛尔斯号角，被动
          if (Set_Special.get('karm1891') === undefined) Set_Special.set('karm1891', 0)
          if (Math.random() <= 0.4 && Set_Special.get('karm1891') < 3) {
            var num_col = Math.ceil(stand_num / 3) + 1
            react([createSkill(0, 0, 2, describe_property(['col' + num_col], ['rof/crit'], ['0.04/0.04'])), 0], stand_num, current_time)
            Set_Special.set('karm1891', Set_Special.get('karm1891') + 1)
          }
        }
        if (list_tdoll[stand_num][1].ID === 198) { // 墨尔斯假面，被动
          if (Set_Special.get('karm9138_' + stand_num) === undefined) Set_Special.set('karm9138_' + stand_num, 0)
          if (Math.random() <= 0.7) {
            Set_Special.set('karm9138_' + stand_num, Set_Special.get('karm9138_' + stand_num) + 2)
          }
        }
        if (list_tdoll[stand_num][1].ID === 4 && Set_Special.get('python_opening') != undefined && Set_Special.get('python_active') > 0) { // 蟒蛇无畏者之拥期间
          if (Set_Special.get('python_active') === 1) final_dmg *= 2
          var num_left = Set_Special.get('python_active') - 1
          Set_Special.set('python_active', num_left)
          changeStatus(stand_num, 'self', 'dmg', '0.3', 5)
        }
        if (list_tdoll[stand_num][1].ID === 245 && Set_Special.get('p90_' + stand_num) > 0) { // P90灰鼠发动，必定暴击和命中
          var final_dmg = Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 穿甲伤害
          Set_Special.set('p90_' + stand_num, Set_Special.get('p90_' + stand_num) - 1)
          final_dmg *= current_Info.get('critdmg')
          final_dmg = Math.ceil(final_dmg * 5 * global_fragile)
          Set_Data.get(stand_num).push([current_time, lastData + final_dmg])
        }
        else if (Math.random() <= current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) { // 否则先判断命中
          var final_dmg = Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 穿甲伤害
          if (list_tdoll[stand_num][1].ID === 1075 && current_Info.get('cs') - Set_Special.get('clipsize_' + stand_num) < 3) { // 战地魔术额外增伤
            final_dmg *= 1.4
          }
          if (list_tdoll[stand_num][1].ID === 77 || list_tdoll[stand_num][1].ID === 85 || list_tdoll[stand_num][1].ID === 109) { // 不可暴击：连珠终结
            var cs_base = (current_Info.get('cs') - Set_Special.get('clipsize_' + stand_num) + 1)
            if (parseInt(cs_base / 4) > 0 && cs_base - 4 * parseInt(cs_base / 4) === 0) {
              if (list_tdoll[stand_num][1].ID === 77) final_dmg *= 2.4
              else if (list_tdoll[stand_num][1].ID === 85) final_dmg *= 2.6
              else if (list_tdoll[stand_num][1].ID === 109) final_dmg *= 3
            } else {
              var final_crit = 1
              if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
              final_dmg = Math.ceil(final_dmg * final_crit)
            }
          } else { // 按概率暴击的攻击
            var final_crit = 1
            if (Set_Special.get('must_crit_' + stand_num) != undefined || Math.random() + current_Info.get('crit') >= 1) {
              final_crit *= current_Info.get('critdmg')
            }
            if (Set_Special.get('pkp_nextcrit_' + stand_num) === true && list_tdoll[stand_num][1].ID === 173) { // 暴动宣告的1.5倍且必暴子弹
              Set_Special.set('pkp_nextcrit_' + stand_num, false)
              final_crit = current_Info.get('critdmg') * 1.5
            }
            final_dmg = Math.ceil(final_dmg * final_crit)
          }
          if (list_tdoll[stand_num][1].ID === 1057) { // 如果AR-15 MOD
            ar15_list_status = Set_Status.get(stand_num)
            var len_list = ar15_list_status.length
            for (var i = 0; i < len_list; i++) {
              if (ar15_list_status[i][0][0] === 'rof' && ar15_list_status[i][0][1] === 1.5) { // 突击专注期间
                var extra_dmg = 0
                if (Set_EnemyStatus.get('avenger_mark') === true) {
                  extra_dmg = Math.max(1, Math.ceil(0.2 * current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 20%火力
                } else {
                  extra_dmg = Math.max(1, Math.ceil(0.1 * current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 10%火力
                }
                if (Math.random() + current_Info.get('crit') >= 1) extra_dmg = Math.ceil(extra_dmg * current_Info.get('critdmg'))
                final_dmg += extra_dmg
                break
              }
            }
          }
          if (fire_status.substr(5) === 'all') final_dmg *= 5 // 全员攻击
          else if (fire_status.substr(5) === 'four') final_dmg *= 4 // 一人释放技能
          if (enemy_fragile) final_dmg = Math.ceil(final_dmg * global_fragile)
          if (Set_Special.get('multi_' + stand_num) != undefined && Set_Special.get('multi_' + stand_num)[1] >= current_time) {
            final_dmg *= Set_Special.get('multi_' + stand_num)[0]
          }
          Set_Data.get(stand_num).push([current_time, lastData + final_dmg])
        } else {
          Set_Data.get(stand_num).push([current_time, lastData])
        }
      }
      // 攻击间隔或者换弹判断
      if (current_Info.get('type') != 5 && current_Info.get('type') != 6) { // HG/AR/SMG/RF
        if (list_tdoll[stand_num][1].ID === 73 && current_time <= Set_Special.get('aug_' + stand_num)) s_t[1] = 9 // 葬仪之雨固定150射速
        else if (list_tdoll[stand_num][1].ID === 122) { // 突击者之眼三连发：2帧间隔射击
          if (Set_Special.get('g11_' + stand_num) >= current_time) { // 技能期间
            if (Set_Special.get('g11_nextload_' + stand_num) === undefined || Set_Special.get('g11_nextload_' + stand_num) < current_time) {
              Set_Special.set('g11_nextload_' + stand_num, current_time + rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1)
            }
            if (Set_Special.get('g11_nextload_' + stand_num) === current_time) {
              Set_Special.set('g11_shootleft_' + stand_num, 2)
              Set_Special.set('g11_nextload_' + stand_num, current_time + rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1)
            }
            if (Set_Special.get('g11_shootleft_' + stand_num) > 0) {
              s_t[1] = 1
              Set_Special.set('g11_shootleft_' + stand_num, (Set_Special.get('g11_shootleft_' + stand_num) - 1))
            } else if (Set_Special.get('g11_shootleft_' + stand_num) === 0) {
              s_t[1] = Set_Special.get('g11_nextload_' + stand_num) - current_time - 1
            }
          } else {
            s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
          }
        }
        else if (list_tdoll[stand_num][1].ID === 198 && Set_Special.get('karm9138_' + stand_num) === 18) {
          var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
          Set_Data.get(stand_num).push([current_time, lastData])
          var mors_ratio
          if (enemy_type === 'normal') mors_ratio = 45
          else mors_ratio = 3
          var mors_dmg = 5 * mors_ratio * current_Info.get('dmg')
          if (enemy_fragile) mors_dmg = Math.ceil(mors_dmg * global_fragile)
          Set_Data.get(stand_num).push([current_time, lastData + mors_dmg])
          Set_Special.set('karm9138_' + stand_num, 0)
          s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
        }
        else s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
      } else { // MG和SG扣除子弹
        var cs = Set_Special.get('clipsize_' + stand_num)
        var extra_shoot_pkp = false
        cs--
        if (list_tdoll[stand_num][1].ID === 173) { // PKP暴动宣告
          if (Math.random() <= 0.2) {
            cs++
            extra_shoot_pkp = true
          }
        }
        if (cs === 0) { // 需要换弹
          var reload_frame = 0
          var rof = current_Info.get('rof')
          if (current_Info.get('type') === 5) {
            if (list_tdoll[stand_num][1].ID === 1075) { // M1918-MOD 战地魔术
              reload_frame = 150
            }else {
              if (rof > 1000) rof = 1000
              else if (rof < 1) rof = 1
              reload_frame = Math.floor((4 + 200 / rof) * 30)
              if (list_tdoll[stand_num][1].ID === 253) { // 刘易斯 力天使
                reload_frame = Math.max(Math.ceil(reload_frame * Math.pow(0.85, Set_Special.get('angel_strength' + stand_num))), reload_frame * 0.55)
              }
            }
          } else if (current_Info.get('type') === 6) {
            if (false) {
              // 狂热突袭单独判断
            } else {
              reload_frame = Math.floor(65 + 15 * ((list_tdoll[stand_num][1].Property).cs))
            }
          }
          Set_Special.set('attack_permission_' + stand_num, 'stop') // 开火许可更改为stop
          Set_Special.set('reloading_' + stand_num, true)
          changeStatus(stand_num, 'reload', null, reload_frame, null) // 因为单独计算帧数，将帧数传至value
          Set_Special.set('clipsize_' + stand_num, current_Info.get('cs')) // 弹量还原
          if (list_tdoll[stand_num][1].ID === 253) { // 刘易斯增加弹量
            var angel_num = Set_Special.get('angel_strength' + stand_num)
            if (angel_num < 3) angel_num++
            Set_Special.set('angel_strength' + stand_num, angel_num)
            Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + angel_num)
          } else if (list_tdoll[stand_num][1].ID === 238) { // 88式
            if (!document.getElementById('special_88type_' + stand_num).checked) {
              Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + 2)
              changeStatus(stand_num, 'self', 'acu', '0.3', -1)
            } else changeStatus(stand_num, 'self', 'acu', '-0.2', -1)
          }
          if (list_tdoll[stand_num][1].ID === 112) { // 狂躁血脉
            changeStatus(stand_num, 'self', 'dmg', '0.5', 29)
          }
        } else {
          if (extra_shoot_pkp) {
            Set_Special.set('pkp_nextcrit_' + stand_num, true)
            s_t[1] = 0
          }
          else s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
          Set_Special.set('clipsize_' + stand_num, cs)
        }
      }
    } else if (fire_status === 'stop') {
      // 技能禁止攻击，或换弹，无任何操作
    }
  }
  else if (skillname === 'property' || (skillname === 'propertyN' && Set_Special.get('sunrise') === 'night') || (skillname === 'propertyND' && Set_Special.get('sunrise') === 'day')) { // 属性增益类
    var list_target = (s_t[0].Describe).list_target
    var len_list_target = list_target.length
    var list_value = []
    for (var i = 0; i < len_list_target; i++) {
      if (list_target[i].substr(0, 3) === 'blo') { // 影响格上
        if (list_tdoll[stand_num][1].ID === 1064 && list_target[i] === 'bloall') { // 如果是G36MOD发动的弧光契约
          var num_at_blo = get_g36_standblo(stand_num)
          for (var nb = 0; nb < num_at_blo; nb++) changeStatus(stand_num, 'self', 'rof', '0.1', 5)
        }
        var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
        var list_value = ((s_t[0].Describe).list_value)[i].split('/')
        var len = list_pro.length
        for (var b = 0; b < 9; b++) {
          if (Set_Base.get(stand_num).Area[b] && list_tdoll[b][1] != null) { // 影响格上有人
            for (var p = 0; p < len; p++) {
              changeStatus(b, list_target[i], list_pro[p], list_value[p], s_t[0].duration)
            }
          }
        }
      } else if (list_target[i].substr(0, 3) === 'col') { // 列数上
        var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
        var list_value = ((s_t[0].Describe).list_value)[i].split('/')
        var len = list_pro.length
        var b = []
        if (list_target[i].substr(3) === '1') b = [0, 3, 6]
        else if (list_target[i].substr(3) === '2') b = [1, 4, 7]
        else if (list_target[i].substr(3) === '3') b = [2, 5, 8]
        for (var c_n = 0; c_n < 3; c_n++) {
          if (list_tdoll[b[c_n]][1] != null) { // 该列该点有人
            for (var p = 0; p < len; p++) {
              changeStatus(b[c_n], 'self', list_pro[p], list_value[p], s_t[0].duration)
            }
          }
        }
      } else {
        if (list_target[i] === 'all' || list_target[i] === 'self') { // 号令类all、专注类self
          var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
          var list_value = ((s_t[0].Describe).list_value)[i].split('/')
          var len = list_pro.length
          for (var p = 0; p < len; p++) {
            if (list_pro[p] === 'dmg') { // MG类增加属性+弹量发动
              var current_cs = Set_Special.get('clipsize_' + stand_num)
              if (list_tdoll[stand_num][1].ID === 208) { // HK21无差别崩坏+2
                Set_Special.set('clipsize_' + stand_num, current_cs + 2)
              } else if (list_tdoll[stand_num][1].ID === 125) { // MG4蓄势待发+4
                Set_Special.set('clipsize_' + stand_num, current_cs + 4)
              }
            }
            changeStatus(stand_num, list_target[i], list_pro[p], list_value[p], s_t[0].duration)
          }
        }
      }
    }
    if (s_t[0].duration > 0) {
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    } else if (s_t[0].duration === 0) { // 非持续类
      s_t[1] = -1
    }else if (s_t[0].duration === -1) { // 无限持续
      s_t[1] = -1
    }
  }
  else if (skillname === 'python') {
    Set_Special.set('python_active', 6) // 重置无畏者之拥次数
    Set_Special.set('python_opening', true) // 开启主动
    changeStatus(stand_num, 'python', null, null, 5) // 施加无畏者之拥状态
    Set_Skill.get(stand_num)[0][1] = 0 // 重置普攻
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'm4') {
    Set_EnemyStatus.set('avenger_mark', true) // 敌人施加伸冤者印记
    if (document.getElementById('special_m4_' + stand_num).checked) { // 使用武器库炮击
      Set_Special.set(stand_num, 'shelling') // 特殊变量：M4炮击
      changeStatus(stand_num, 'self', 'rof', '-0.7', 10)
      changeStatus(stand_num, 'avenger_mark', null, null, 10) // 炮击状态，结束后特殊变量也将删除
      s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
    }
  }
  else if (skillname === 'grenade') { // 榴弹
    var ratio = (s_t[0].Describe).ratio
    Set_Special.set('attack_permission_' + stand_num, 'fire_four') // 一人准备释放榴弹
    changeStatus(stand_num, 'grenade', current_time, ratio, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'bomb') { // 投掷物
    var direct_ratio = (s_t[0].Describe).direct_ratio
    var dot_ratio = (s_t[0].Describe).dot_ratio
    var dot_per_second = (s_t[0].Describe).dot_per_second
    var dot_time = (s_t[0].Describe).dot_time
    var dot_num = dot_time * dot_per_second
    Set_Special.set('dotnum_' + stand_num, dot_num)
    changeStatus(stand_num, 'grenade', current_time, direct_ratio, 1)
    changeStatus(stand_num, 'dot', current_time, dot_ratio, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'sop2') {
    var ratio = 15
    var extra_base = 1.9, extra_num = 1
    if (enemy_num <= 3) extra_num = enemy_num
    else extra_num = 3
    if (Set_EnemyStatus.get('avenger_mark') === true) { // 伸冤者印记期间
      extra_base *= 1.25
    }
    ratio += extra_base * extra_num
    Set_Special.set('attack_permission_' + stand_num, 'fire_four') // 一人准备释放榴弹
    changeStatus(stand_num, 'grenade', current_time, ratio, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'fal') { // 榴弹践踏
    Set_Special.set('fal_' + stand_num, 3)
    Set_Special.set('attack_permission_' + stand_num, 'fire_four') // 一人准备释放榴弹
    changeStatus(stand_num, 'fal', current_time, 5, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却  
  }
  else if (skillname === 'zas') { // 夜枭轰鸣
    var ratio = 3
    Set_Special.set('attack_permission_' + stand_num, 'fire_four') // 一人准备释放榴弹
    if (enemy_num > 3) {
      Set_Special.set('fragile_15', global_frame + 90)
      global_fragile *= 1.15
    }
    else changeStatus(stand_num, 'self', 'dmg', '0.6', 8)
    changeStatus(stand_num, 'grenade', current_time, ratio, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'k11') { // 恐惧榴弹
    var ratio = parseInt(document.getElementById('special_k11_' + (stand_num + 1)).value)
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 一人准备释放榴弹
    changeStatus(stand_num, 'grenade_k11', current_time, ratio, 1)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'g11') {
    Set_Special.set('g11_' + stand_num, current_time + 135)
    Set_Special.set('g11_shootleft_' + stand_num, 2)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却  
  }
  else if (skillname === 'multihit') {
    Set_Special.set('multi_' + stand_num, [(s_t[0].Describe).value, current_time + (30 * s_t[0].duration)])
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'snipe') { // 狙击
    var ratio = (s_t[0].Describe).ratio
    var snipe_num = (s_t[0].Describe).snipe_num
    var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
    var time_interval = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_interval
    var labels = (s_t[0].Describe).labels
    if (snipe_num < 0) snipe_num = Math.floor(s_t[0].duration / time_interval)
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
    Set_Special.set('snipe_num_' + stand_num, snipe_num)
    Set_Special.set('snipe_interval_' + stand_num, time_interval)
    Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
    changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'm82a1') { // 伪神的启示
    if (Set_Special.get('m82a1' + stand_num) === undefined) Set_Special.set('m82a1' + stand_num, 3)
    if (Set_Special.get('m82a1' + stand_num) > 0) {
      var ratio = (s_t[0].Describe).ratio
      var snipe_num = (s_t[0].Describe).snipe_num
      var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
      var time_interval = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_interval
      var labels = (s_t[0].Describe).labels
      ratio *= Math.pow(1.1, Set_Special.get('m82a1_win_' + stand_num))
      if (Set_Special.get('m82a1' + stand_num) === 1) ratio *= 2 // 最后一发
      Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
      Set_Special.set('snipe_num_' + stand_num, snipe_num)
      Set_Special.set('snipe_interval_' + stand_num, time_interval)
      Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
      changeStatus(stand_num, 'snipe', labels, ratio, time_init)
      Set_Special.set('m82a1' + stand_num, (Set_Special.get('m82a1' + stand_num) - 1))
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'dsr50') { // 崩甲射击
    var ratio
    var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
    var labels = (s_t[0].Describe).labels
    if (enemy_arm > 0) ratio = (s_t[0].Describe).ratio_arm
    else ratio = (s_t[0].Describe).ratio_armless
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
    Set_Special.set('snipe_num_' + stand_num, 1)
    Set_Special.set('snipe_interval_' + stand_num, 0)
    Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
    changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'karm9138') { // 墨尔斯假面
    var ratio
    if (enemy_type === 'normal') ratio = 45
    else ratio = 3
    Set_Special.set('karm9138_' + stand_num, 0)
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
    Set_Special.set('snipe_num_' + stand_num, 1)
    Set_Special.set('snipe_interval_' + stand_num, 0)
    Set_Special.set('snipe_arriveframe_' + stand_num, current_time + 1)
    changeStatus(stand_num, 'snipe', 'armless/critless/evaless', ratio, 0)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'contender') { // 断罪者魔弹
    Set_Special.set('fragile_40', global_frame + 150)
    global_fragile *= 1.4
    enemy_fragile = true
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
    Set_Special.set('snipe_num_' + stand_num, 1)
    Set_Special.set('snipe_interval_' + stand_num, 0)
    Set_Special.set('snipe_arriveframe_' + stand_num, current_time + 30 * 1)
    changeStatus(stand_num, 'snipe', 'armless/critless/evaless', 3, 1)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'colt') { // 决斗幸存者
    if (Set_Special.get('colt') === undefined) {
      Set_Special.set('colt', 1)
      changeStatus(stand_num, 'all', 'rof', '0.05', -1)
      changeStatus(stand_num, 'all', 'acu', '0.05', -1)
    } else {
      var num_level = Set_Special.get('colt')
      if (num_level < 3) {
        Set_Special.set('colt', num_level + 1)
        changeStatus(stand_num, 'all', 'rof', '0.05', -1)
        changeStatus(stand_num, 'all', 'acu', '0.05', -1)
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'aug') { // 葬仪之雨 或 大流星暴
    Set_Special.set('aug_' + stand_num, global_frame + s_t[0].duration * 30)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'karm1891') { // 玛尔斯号角：主动
    var num_rf = 0
    for (var n = 0; n < 9; n++) {
      if (list_tdoll[n][1] != null && list_tdoll[n][1].Type === 4) num_rf++
    }
    var str_value = (0.08 * num_rf) + ''
    changeStatus(stand_num, 'self', 'crit', str_value, 7.5)
    changeStatus(stand_num, 'self', 'rof', str_value, 7.5)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === '64howa') { // 未来预警
    Set_Special.set('64howa_' + stand_num, current_time + 149)
    if (enemy_num > 5) {
      changeStatus(stand_num, 'self', 'rof', '0.8', 3)
      changeStatus(stand_num, 'self', 'acu', '0.8', 3)
    } else changeStatus(stand_num, 'self', 'dmg', '0.9', 3)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'js9') {
    var num_dmg = 4 - enemy_num, num_eva = enemy_num - 1
    if (num_dmg < 0) num_dmg = 0
    if (num_eva > 6) num_eva = 6
    for (var n = 0; n < num_dmg; n++) changeStatus(stand_num, 'self', 'dmg', '0.5', 5)
    for (var n = 0; n < num_eva; n++) changeStatus(stand_num, 'self', 'eva', '0.35', 5)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'mdr') {
    if (stand_num === 2 || stand_num === 5 || stand_num === 8) {
      // 贴膜
    } else if (list_tdoll[stand_num + 1][1] != null) {
      // 贴膜
    } else {
      changeStatus(stand_num, 'self', 'dmg', '0.45', 10)
      changeStatus(stand_num, 'self', 'rof', '0.22', 10)
    }
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'x95') { // 花之锁
    var dmg_up = parseFloat(document.getElementById('special_x95_' + (stand_num + 1)).value) / 100
    changeStatus(stand_num, 'self', 'dmg', '' + dmg_up, 5)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'p90') { // 灰鼠
    Set_Special.set('p90_' + stand_num, 4)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
}

function changeStatus (stand_num, target, type, value, duration) { // 改变状态列表
  var frame = Math.floor(30 * duration)
  if (target === 'all') { // 号令类
    if (!Set_Special.get('can_add_python') && not_init) { // 有蟒蛇，需要触发被动
      if (Set_Special.get('python_' + type) != undefined && Set_Special.get('python_' + type) < 3) {
        var new_level = Set_Special.get('python_' + type) + 1
        Set_Special.set('python_' + type, new_level)
        react([createSkill(0, 0, 3, lib_describe.get('python_' + type)), 0], stand_num, 0)
        changeStatus(stand_num, 'python_buff_' + type, type, null, 3)
      }
    }
    var new_status = [[type, 1 + parseFloat(value)], frame]
    var list_status = Set_Status.get(-1)
    list_status.push(new_status)
    Set_Status.set(-1, list_status)
    endStatus(-1, new_status, 'get')
  } else if (target === 'self') { // 专注类
    if (!Set_Special.get('can_add_python') && list_tdoll[stand_num][1].ID === 4 && not_init) { // 此人是蟒蛇
      if (Set_Special.get('python_' + type) != undefined && Set_Special.get('python_' + type) < 3) {
        var new_level = Set_Special.get('python_' + type) + 1
        Set_Special.set('python_' + type, new_level)
        react([createSkill(0, 0, 3, lib_describe.get('python_' + type)), 0], stand_num, 0) // PROBLEM
        changeStatus(stand_num, 'python_buff_' + type, type, null, 3)
      }
    }
    var new_status = [[type, 1 + parseFloat(value)], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
    endStatus(stand_num, new_status, 'get')
  } else if (target.substr(0, 3) === 'blo') { // 影响格类
    if (target.substr(3) === 'all') { // 影响格上全部单位
      changeStatus(stand_num, 'self', type, value, duration)
    } else { // 影响格上特定枪种
      var n_type = 0
      n_type = name_to_num(target.substr(3))
      if (n_type === list_tdoll[stand_num][1].Type) {
        changeStatus(stand_num, 'self', type, value, duration)
      }
    }
  }
  else if (target === 'python') {
    var new_status = [['python', null], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  }
  else if (target.substr(0, 12) === 'python_buff_') {
    var new_status = [['python_buff_' + type, null], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  }
  else if (target === 'avenger_mark') {
    var new_status = [['avenger_mark', null], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'dot') { // 持续伤害
    var new_status = [['dot', value + '/' + (type + frame)], frame] // 类似榴弹
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  }else if (target === 'grenade') { // 榴弹
    var new_status = [['grenade', value + '/' + (type + frame)], frame] // value记录"倍率/生效时刻"，其他同理
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'fal') {
    var new_status = [['fal', value + '/' + (type + frame)], frame] // fal类似grenade
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'grenade_k11') { // K11榴弹
    var new_status = [['grenade', value + '/' + (type + frame)], frame] // k11其他照搬榴弹
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'reload') {
    var new_status = [['reload', null], value]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'snipe') {
    var new_status = [['snipe', value + '/' + type], frame] // value+type记录：倍率/特性
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  }
}

function endStatus (stand_num, status, situation) { // 刷新属性，状态是 [< pro_type, value >, frame]  二元组，stand_num=-1即全体
  // status = [ [ type, value(>1) ], frame ]
  if (situation === 'get' || situation === 'lost') {
    if (stand_num === -1) { // 全体属性变化
      for (var i = 0; i < 9; i++) {
        if (Set_Base.get(i) != undefined) {
          var this_info = (Set_Base.get(i)).Info
          var new_property = (this_info).get(status[0][0])
          if (situation === 'get') {
            if (status[0][0] != 'crit' && status[0][0] != 'critdmg') new_property = Math.ceil(new_property * status[0][1])
            else new_property = new_property * status[0][1]
          }
          else if (situation === 'lost') {
            if (status[0][0] != 'crit' && status[0][0] != 'critdmg') new_property = Math.floor(new_property / status[0][1])
            else new_property = new_property / status[0][1]
          }
          this_info.set(status[0][0], new_property)
        }
      }
    } else { // 某一人属性变化
      var this_info = (Set_Base.get(stand_num)).Info
      var new_property = (this_info).get(status[0][0])
      if (situation === 'get') {
        if (status[0][0] != 'crit' && status[0][0] != 'critdmg') new_property = Math.ceil(new_property * status[0][1])
        else new_property = new_property * status[0][1]
      }
      else if (situation === 'lost') {
        if (status[0][0] != 'crit' && status[0][0] != 'critdmg') new_property = Math.floor(new_property / status[0][1])
        else new_property = new_property / status[0][1]
      }
      this_info.set(status[0][0], new_property)
    }
  }
  else if (situation === 'dot') {
    var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
    var dot_para = status[0][1].split('/')
    var num_multi = enemy_num
    if (enemy_fragile) num_multi *= global_fragile
    var damage_explode = Math.ceil(((Set_Base.get(stand_num)).Info).get('dmg') * parseInt(dot_para[0]) * enemy_form * num_multi)
    var current_time = parseInt(dot_para[1])
    Set_Data.get(stand_num).push([current_time, lastData])
    Set_Data.get(stand_num).push([current_time, lastData + damage_explode])
    Set_Special.set('dotnum_' + stand_num, Set_Special.get('dotnum_' + stand_num) - 1)
    if (Set_Special.get('dotnum_' + stand_num) > 0) {
      var new_status = [['dot', dot_para[0] + '/' + (global_frame + 10)], 10] // 类似榴弹
      var list_status = Set_Status.get(stand_num)
      list_status.push(new_status)
      Set_Status.set(stand_num, list_status)
    }
  }
  else if (situation === 'grenade') {
    var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
    Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    var grenade_para = status[0][1].split('/')
    var num_multi = enemy_num
    if (enemy_fragile) num_multi *= global_fragile
    var damage_explode = Math.ceil(((Set_Base.get(stand_num)).Info).get('dmg') * parseInt(grenade_para[0]) * enemy_form * num_multi)
    var current_time = parseInt(grenade_para[1])
    Set_Data.get(stand_num).push([current_time, lastData])
    Set_Data.get(stand_num).push([current_time, lastData + damage_explode])
  }
  else if (situation === 'fal') {
    var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
    if (Set_Special.get('fal_' + stand_num) > 1) {
      Set_Special.set('fal_' + stand_num, Set_Special.get('fal_' + stand_num) - 1)
      var new_status = [['fal', 5 + '/' + (global_frame + 30)], 30] // fal类似grenade
      var list_status = Set_Status.get(stand_num)
      list_status.push(new_status)
      Set_Status.set(stand_num, list_status)
    }
    else Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    var grenade_para = status[0][1].split('/')
    var num_multi = enemy_num
    if (enemy_fragile) num_multi *= global_fragile
    var damage_explode = Math.ceil(((Set_Base.get(stand_num)).Info).get('dmg') * parseInt(grenade_para[0]) * enemy_form * num_multi)
    var current_time = parseInt(grenade_para[1])
    Set_Data.get(stand_num).push([current_time, lastData])
    Set_Data.get(stand_num).push([current_time, lastData + damage_explode])
  }
  else if (situation === 'snipe') {
    var current_Info = (Set_Base.get(stand_num)).Info
    var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
    var labels = status[0][1]
    var list_labels = labels.split('/') // ratio,arm,crit,eva
    var ratio = parseFloat(list_labels[0])
    var num_leftsnipe = Set_Special.get('snipe_num_' + stand_num)
    num_leftsnipe--
    Set_Special.set('snipe_num_' + stand_num, num_leftsnipe)
    var damage_snipe_single = 0
    if (list_tdoll[stand_num][1].ID === 192) {
      if (document.getElementById('special_js05_' + stand_num).checked) damage_snipe_single = ratio * current_Info.get('dmg') * (enemy_num + 1)
      else damage_snipe_single = ratio * current_Info.get('dmg') * 2
    } else {
      damage_snipe_single = ratio * current_Info.get('dmg')
    }
    if (list_labels[1] != 'armless') {
      damage_snipe_single = Math.max(1, Math.ceil(damage_snipe_single * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
    }
    if (list_labels[2] != 'critless') {
      if (Math.random() <= current_Info.get('crit') || Set_Special.get('must_crit_' + stand_num) === true) damage_snipe_single *= current_Info.get('critdmg')
    }
    if (list_labels[3] != 'evaless') {
      if (Math.random() > current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) damage_snipe_single = 0
    }
    damage_snipe_single = Math.ceil(damage_snipe_single * 5)
    var current_time = Set_Special.get('snipe_arriveframe_' + stand_num)
    Set_Data.get(stand_num).push([current_time, lastData])
    if (enemy_fragile) damage_snipe_single = Math.ceil(damage_snipe_single * global_fragile)
    Set_Data.get(stand_num).push([current_time, lastData + damage_snipe_single])
    if (num_leftsnipe === 0) { // 狙击次数完毕
      Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    } else {
      var time_init = Set_Special.get('snipe_interval_' + stand_num)
      Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
      changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    }
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
  // INFO: type类型, hp生命, dmg伤害, acu命中, eva闪避, rof射速, arm护甲, crit暴击, critdmg爆伤, cs弹量, ap穿甲, ff力场, shield护盾, cld冷却缩减, night夜视能力
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
    0,
    0
  ]
  Info.set('type', full_property[0]); Info.set('hp', full_property[1])
  var str_tn, num_tn = Info.get('type')
  str_tn = num_to_name(num_tn)
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
  for (var i = 0; i < 3; i++) { // 以后写专属夜视
    if (set_equip[i] === '41') {
      full_property[14] = 100
      break
    }
  }
  Info.set('night', full_property[14])
  return createBase(Area, Info)
}
function num_to_name (num_type) {
  if (num_type === 1) return 'hg'
  else if (num_type === 2) return 'ar'
  else if (num_type === 3) return 'smg'
  else if (num_type === 4) return 'rf'
  else if (num_type === 5) return 'mg'
  else if (num_type === 6) return 'sg'
}
function name_to_num (str_type) {
  if (str_type === 'hg') return 1
  else if (str_type === 'ar') return 2
  else if (str_type === 'smg') return 3
  else if (str_type === 'rf') return 4
  else if (str_type === 'mg') return 5
  else if (str_type === 'sg') return 6
}
function rof_to_frame (num_tn, base_rof, ID) {
  var str_tn = num_to_name(num_tn)
  var shootframe = 100
  if (str_tn == 'hg' || str_tn == 'ar' || str_tn == 'smg' || str_tn == 'rf') {
    if (base_rof >= 120) shootframe = 12
    else if (base_rof <= 15) shootframe = 100
    else shootframe = Math.floor(1500 / base_rof)
  } else if (str_tn === 'mg') {
    if (ID === 77 || ID === 85 || ID === 109 || ID === 173) { // 连珠终结、暴动宣告
      shootframe = 11
    }else shootframe = 10
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
    colors: ['#FF0000', '#CC00FF', '#FFCC00', '#FFFF00', '#66FF99', '#33FF00', '#6699FF', '#3366FF', '#000000'],
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

function get_g36_standblo (stand_num) {
  var num_all = 0
  if (stand_num === 2 || stand_num === 5 || stand_num === 8) true
  else if (stand_num === 0 || stand_num === 1 || stand_num === 3 || stand_num === 4) {
    if (list_tdoll[stand_num + 1][1] != null) num_all++
    if (list_tdoll[stand_num + 4][1] != null) num_all++
  } else {
    if (list_tdoll[stand_num + 1][1] != null) num_all++
  }
  return num_all
}

function test (num) {
  if (num === 1) console.log(blockSet)
  else if (num === 2) console.log(list_tdoll)
  else if (num === 3) console.log(Set_Data)
  else if (num === 4) console.log(Set_EnemyStatus.get('avenger_mark'))
// SAMPLE
}
