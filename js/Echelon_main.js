// UI
var debug_mode = false // show debug info
var debug_line = 0
var buffer_table = new Map // 已放置人形的信息缓存，点击人形查看
var buffer_last // 上一次添加人形的缓存
var switch_operate = false, switch_equip = false // 人形和装备更改开关
var num_pickblock = -1, num_pickequip = -1, num_pickhf = 0 // 选中的人形、装备、重装部队
var set_guntype = 1 // 枪种：1=hg, 2=ar, 3=smg, 4=rf, 5=mg, 6=sg
var set_equip = [0, 0, 0] // 装备代号，开头：1=配件, 2=子弹, 3=人形装备, 4=夜战装备
var num_star = 5, affection = 'love' // 星级，好感度
// Echelon and global
var Set_Special = new Map // 特殊变量表
var queue_tdoll = []
var time = 20, init_time = 0, daytime = 1, fairy_no = 0, talent_no = 0 // 全局变量默认值：时间20s，接敌0s，昼战，无妖精，无天赋
var global_frame = 0 // 当前帧，时间测算和特殊buff发动
var global_total_dmg = 0 // 全局总伤害，决定结束战斗的时间
var list_tdoll = [[5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null], [5, null]] // 战术人形列表，存放 [form, TdollInfo]
var block1 = new Map, block2 = new Map, block3 = new Map, block4 = new Map, block5 = new Map, block6 = new Map, block7 = new Map, block8 = new Map, block9 = new Map // 每个格点的影响属性
var blockSet = [block1, block2, block3, block4, block5, block6, block7, block8, block9] // 影响格集合
var Set_Status = new Map // 状态表，存放状态列表，< num_stand, [ <Status, left_frame> ]>, Status=[type,value(>1)]
var Set_Skill = new Map // 技能表，存放二元组列表，< num_stand, [ <Skill, frame> ] >, 攻击是首位技能
var Set_Base = new Map // 实时属性，当Status改变时更新
var list_HF = [ // 重装部队属性: 支援与否，基础，芯片，同色谐振
  [false, createHF(200, 497, 418, 99), createHF(190, 329, 191, 46), createHF(158, 66, 38, 9)],
  [false, createHF(102, 180, 239, 465), createHF(106, 130, 120, 233), createHF(84, 26, 22, 46)],
  [false, createHF(202, 73, 164, 194), createHF(227, 58, 90, 107), createHF(192, 15, 22, 22)],
  [false, createHF(154, 63, 147, 225), createHF(206, 60, 97, 148), createHF(159, 15, 22, 28)],
  [false, createHF(147, 325, 343, 161), createHF(169, 261, 190, 90), createHF(120, 45, 33, 15)]
]
// Enemy
var enemy_arm = 0, enemy_eva = 0, enemy_form = 1, enemy_num = 1, enemy_type = 'normal', enemy_forcefield = 0, enemy_forcefield_max = 0 // 输出测试属性：敌人护甲，回避，编制，组数，类型，力场
var enemy_dmg = 10, enemy_rof = 40, enemy_acu = 10, enemy_ap = 0, enemy_dbk = 0, enemy_hp = 1000, enemy_eva_2 = 10, enemy_arm_2 = 0, enemy_forcefield_2 = 0, enemy_forcefield_2_max = 0, aoe_num = 1
var enemy_num_left = 1, enemy_still_alive = true // 敌人剩余组数，敌人存活状况
var Set_EnemyStatus = new Map // 敌人状态表
var fragile_main = 1, fragile_all = 1 // 主目标脆弱，范围脆弱
var last_DPS = 0
var inj_order = '639528417'
// Graph
var Glabel_name = new Map
var Glabel_dmg = new Map
var Glabel_inj = new Map
var x_max_buffer = 0, y_max_buffer = 0, y2_max_buffer = 0, y2_min_buffer = 0, totaldamage_buffer = 0 // 更改宽度和显示模式的缓存值
var display_type = 'damage' // 模拟类型
var Set_Data = new Map // 输出数据
var Set_Data_Buffer = new Map // 输出数据缓存
var Set_Data_S = new Map // 承伤数据，血量值
var Set_Data_S_Percentage = new Map // 承伤数据，血量百分比
var Set_Data_S_Buffer = new Map // 承伤数据缓存
var Set_Data_HF = new Map // 重装部队输出数据
var Set_Data_HF_Buffer = new Map // 重装部队输出数据缓存
var gs_tdoll = [false, false, false, false, false, false, false, false, false] // 是否上场开关
var gs_fairy = false
var gs_HF = [false, false, false, false, false]
// special variations
var not_init = false // 控制蟒蛇能够开始复读的开关

// init when loading
Set_Special.set('can_add_python', true)
Set_Special.set('can_add_karm1891', true)
Set_Special.set('sunrise', 'day')

// 计算影响格
function getBlockAffect () {
  for (var i = 0; i < 9; i++) blockSet[i].clear()
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var str_position = (list_tdoll[i][1].Affect).area, len_str = str_position.length
      var list_target = (list_tdoll[i][1].Affect.target).split('/') // 有效枪种
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
              for (var target of list_target) {
                if (blockSet[num_tempblo].get(target + list_affectType[pn]) === undefined) { // 添加新属性
                  blockSet[num_tempblo].set(target + list_affectType[pn], list_affectValue[pn])
                } else { // 累加已有属性
                  var value_new = blockSet[num_tempblo].get(target + list_affectType[pn]) + list_affectValue[pn]
                  blockSet[num_tempblo].set(target + list_affectType[pn], value_new)
                }
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

function getResult (multiple, action) {
  Set_Data_Buffer.clear()
  Set_Data_HF_Buffer.clear()
  Set_Data_S_Buffer.clear()
  display_type = action
  for (var n = 0; n < multiple; n++) { // 多次模拟
    getDPS() // 执行一次模拟
    for (var i = 0; i < 9; i++) { // 梯队伤害统计
      var this_data = Set_Data_Buffer.get(i)
      var new_data = Set_Data.get(i)
      Set_Data_Buffer.set(i, do_datasum(this_data, new_data))
    }
    for (var i = 0; i < 5; i++) { // 重装部队伤害统计
      var this_data = Set_Data_HF_Buffer.get(i)
      var new_data = Set_Data_HF.get(i)
      Set_Data_HF_Buffer.set(i, do_datasum(this_data, new_data))
    }
    if (display_type === 'suffer') { // 承伤统计
      for (var i = 0; i < 9; i++) {
        var this_data = Set_Data_S_Buffer.get(i)
        var new_data = Set_Data_S.get(i)
        Set_Data_S_Buffer.set(i, do_datasum(this_data, new_data))
      }
    }
  }
  // 场次平均
  for (var i = 0; i < 9; i++) {
    var this_data = Set_Data_Buffer.get(i)
    var len = this_data.length
    for (var x = 0; x < len; x++) {
      this_data[x][1] = Math.ceil(this_data[x][1] / multiple)
    }
    Set_Data.set(i, this_data)
  }
  for (var i = 0; i < 5; i++) {
    var this_data = Set_Data_HF_Buffer.get(i)
    var len = this_data.length
    for (var x = 0; x < len; x++) {
      this_data[x][1] = Math.ceil(this_data[x][1] / multiple)
    }
    Set_Data_HF.set(i, this_data)
  }
  if (display_type === 'suffer') {
    for (var i = 0; i < 9; i++) { // 生命值统计
      var this_data = Set_Data_S_Buffer.get(i)
      var len = this_data.length
      for (var x = 0; x < len; x++) {
        this_data[x][1] = Math.ceil(this_data[x][1] / multiple)
      }
      Set_Data_S.set(i, this_data)
    }
    for (var i = 0; i < 9; i++) { // 生命百分比统计
      if (gs_tdoll[i]) {
        var this_data = Set_Data_S_Buffer.get(i)
        var len = this_data.length
        var hp_max = list_tdoll[i][1].Property.hp
        var percent_data = []
        for (var n = 0; n < len; n++) {
          percent_data.push([this_data[n][0] / 30, this_data[n][1] / hp_max])
        }
        Set_Data_S_Percentage.set(i, percent_data)
      }
    }
  }
  // 绘图
  var x_max = Math.ceil(time / 30), y_max = 0
  totaldamage_buffer = 0
  // 总伤害
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var current_data = Set_Data.get(i)
      totaldamage_buffer += current_data[current_data.length - 1][1]
    }
  }
  for (var i = 0; i < 5; i++) {
    if (list_HF[i][0]) {
      var current_data = Set_Data_HF.get(i)
      totaldamage_buffer += current_data[current_data.length - 1][1]
    }
  }
  // 布雷妖精伤害计算
  if (fairy_no === 12 && document.getElementById('fairyskill_active').checked) {
    if (enemy_type != 'boss') recordData(9, 0, totaldamage_buffer)
    else recordData(9, 0, 0)
    recordData(9, time, 0)
  }
  totaldamage_buffer += Set_Data.get(9)[Set_Data.get(9).length - 1][1]
  // Tdoll-dmg percentage
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var current_data = Set_Data.get(i)
      var len_data = (current_data).length
      for (var d = 0; d < len_data; d++) Set_Data.get(i)[d][0] = (Set_Data.get(i)[d][0] / 30).toFixed(1)
      if (Set_Data.get(i)[len_data - 1][1] > y_max) y_max = Set_Data.get(i)[len_data - 1][1]
      var reverse_position = trans_if_need_idx(i)
      var temp_name = (reverse_position + 1) + lib_language.main_draw_1 + list_tdoll[i][1].Name
      var temp_dmg = current_data[len_data - 1][1]
      if (totaldamage_buffer > 0) temp_dmg += ' (' + ((current_data[len_data - 1][1] / totaldamage_buffer) * 100).toFixed(2) + '%)'
      temp_dmg += ' '
      Glabel_name.set(i, temp_name); Glabel_dmg.set(i, temp_dmg)
    }
  }
  // HF-dmg percentage
  for (var i = 0; i < 5; i++) {
    if (list_HF[i][0]) {
      var current_data = Set_Data_HF.get(i)
      var len_data = (current_data).length
      for (var d = 0; d < len_data; d++) Set_Data_HF.get(i)[d][0] = (Set_Data_HF.get(i)[d][0] / 30).toFixed(1)
      if (Set_Data_HF.get(i)[len_data - 1][1] > y_max) y_max = Set_Data_HF.get(i)[len_data - 1][1]
      var temp_name = ''
      if (i === 0) temp_name = 'BGM-71'
      else if (i === 1) temp_name = 'AGS-30'
      else if (i === 2) temp_name = '2B-14'
      else if (i === 3) temp_name = 'M2'
      else if (i === 4) temp_name = 'AT4'
      temp_name += ' '
      var temp_dmg = current_data[len_data - 1][1]
      if (totaldamage_buffer > 0) temp_dmg += ' (' + ((current_data[len_data - 1][1] / totaldamage_buffer) * 100).toFixed(2) + '%)'
      Glabel_name.set('HF' + i, temp_name); Glabel_dmg.set('HF' + i, temp_dmg)
    }
  }
  // Tdoll-inj stat
  if (display_type === 'suffer') {
    var y_max_suffer = 0
    var y_min_suffer = 9999
    var y_min_per_suffer = 1
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        var current_data = Set_Data_S.get(i)
        var len_data = (current_data).length
        for (var d = 0; d < len_data; d++) Set_Data_S.get(i)[d][0] = (Set_Data_S.get(i)[d][0] / 30).toFixed(1)
        if (Set_Data_S.get(i)[0][1] > y_max_suffer) y_max_suffer = Set_Data_S.get(i)[0][1]
        if (Set_Data_S.get(i)[len_data - 1][1] < y_min_suffer) y_min_suffer = Set_Data_S.get(i)[len_data - 1][1]
        if (Set_Data_S_Percentage.get(i)[len_data - 1][1] < y_min_per_suffer) y_min_per_suffer = Set_Data_S_Percentage.get(i)[len_data - 1][1]
        if (lang_type === 'ko') {
          if (reverse_position >= 6) reverse_position -= 6
          else if (reverse_position <= 2) reverse_position += 6
        }
        var last_hp = current_data[len_data - 1][1]
        var temp_inj = ''
        if (last_hp <= 0) temp_inj += lib_language.main_makeGraph_dead
        else {
          var hp_ratio = last_hp / list_tdoll[i][1].Property.hp
          temp_inj += lib_language.main_makeGraph_3 + '=' + last_hp
          temp_inj += '(' + lib_language.form + Math.ceil(5 * hp_ratio) + ', ' + (100 * hp_ratio).toFixed(2) + '%)'
        }
        Glabel_inj.set(i, temp_inj)
      }
    }
  }
  if (fairy_no > 0 && Set_Data.get(9)[Set_Data.get(9).length - 1][1] > 0) {
    var current_data = Set_Data.get(9)
    var len_data = current_data.length
    for (var d = 0; d < len_data; d++) Set_Data.get(9)[d][0] = (Set_Data.get(9)[d][0] / 30).toFixed(1)
    if (y_max < Set_Data.get(9)[Set_Data.get(9).length - 1][1]) y_max = Set_Data.get(9)[Set_Data.get(9).length - 1][1]
    var temp_dmg = ''
    eval('Glabel_name.set("fairy",lib_language.fairyNAME_' + fairy_no + '+" ")')
    temp_dmg = current_data[len_data - 1][1] + ' (' + ((current_data[len_data - 1][1] / totaldamage_buffer) * 100).toFixed(2) + '%)'
    Glabel_dmg.set('fairy', temp_dmg)
  } else {
    list_show_fairy[0] = false
  }
  x_max_buffer = x_max
  y_max_buffer = y_max
  y2_max_buffer = y_max_suffer, y2_min_buffer = y_min_suffer
  y2_max_per_buffer = 1, y2_min_per_buffer = y_min_per_suffer
  document.getElementById('table_showhide').innerHTML = ''
  initShowhide()
  makeGraph()
  showEnvi()
  showStat()
}

// MAIN, 攻击优先于所有
function getDPS () {
  var end_of_standby = false // 接敌时间控制器
  init_resetAllConfig() // 清空数据
  init_loadPrepareStatus() // 载入出战数据，包括(1)数据清空(2)出战属性 环境 和特殊设定(3)载入技能(4)开场第一层buff
  init_loadEnemyInfo() // 载入敌人属性
  // 初始化Command
  if (init_time > 0) end_of_standby = false
  else end_of_standby = true
  // 载入初始状态（妖精属性、天赋、全局设定、换弹）
  var common_position = get_common_position() // 随便选定一个人作为默认全体BUFF发动位（主要解决蟒蛇复读回溯问题）
  not_init = true // 可以复读
  init_loadFairy(common_position)

  // 主函数
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
    // 妖精主动技能
    if (Set_Special.get('fairy_skillon') === true) {
      if (Set_Special.get('fairy_skilltime') <= t) {
        if (fairy_no === 7) { // 狙击指令
          recordData(9, t, 0)
          recordData(9, t, 20000 * explain_fgl_ff('single'))
        } else if (fairy_no === 8) { // 炮击指令
          recordData(9, t, 0)
          recordData(9, t, 1200 * explain_fgl_ff('aoe'))
        } else if (fairy_no === 9) { // 致命空袭
          recordData(9, t, 0)
          recordData(9, t, 500 * explain_fgl_ff('aoe'))
        }
        Set_Special.set('fairy_skillon', false)
      }
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
      }
      // 重装部队支援是否到达
      for (var hfn = 0; hfn < 5; hfn++) {
        if (list_HF[hfn][0]) {
          if (Set_Special.get('HF_incoming' + hfn) <= t && !Set_Special.get('HF_causedamage' + hfn)) {
            Set_Special.set('HF_causedamage' + hfn, true)
            recordData_HF(hfn, t) // cause damage
          }
          // AGS-30 穿甲震荡
          if (Set_Special.get('AGS_next_dbkbuff') <= t && Set_Special.get('AGS_dbkbuff_num') > 0) {
            Set_Special.set('AGS_next_dbkbuff', Set_Special.get('AGS_next_dbkbuff') + 30)
            Set_Special.set('AGS_dbkbuff_num', Set_Special.get('AGS_dbkbuff_num') - 1)
            if (display_type === 'damage') { // 穿甲震荡生效
              enemy_forcefield -= 0.2 * this_dbk(hfn)
              if (enemy_forcefield < 0) enemy_forcefield = 0
            }
            else if (display_type === 'suffer') {
              enemy_forcefield_2 -= 0.2 * this_dbk(hfn)
              if (enemy_forcefield_2 < 0) enemy_forcefield_2 = 0
            }
          }
          // AT4 烈性灼烧
          if (Set_Special.get('AT4_burn_next') === global_frame) {
            var aoe_multi = 1
            if (aoe_num <= enemy_num_left) aoe_multi = (aoe_num - 1) * fragile_all * enemy_form
            else aoe_multi = (enemy_num_left - 1) * fragile_all * enemy_form
            var burn_aoe = 0.2 * this_dmg(hfn) * (fragile_main * enemy_form + aoe_multi)
            if (Set_Special.get('AT4_burn_leftnum') > 0) {
              Set_Special.set('AT4_burn_leftnum', Set_Special.get('AT4_burn_leftnum') - 1)
              Set_Special.set('AT4_burn_next', global_frame + 15)
              recordData_HF(4, global_frame, 'AT4_burn', burn_aoe)
            }
          }
          if (Set_Special.get('HF_reloading' + hfn) <= t) { // 装填完毕
            var base_filling = this_fil(hfn)
            if (hfn === 0) {
              base_filling *= Math.pow(1.08, Set_Special.get('BGM_buff_filling'))
              if (Set_Special.get('BGM_buff_filling') < 5) Set_Special.set('BGM_buff_filling', Set_Special.get('BGM_buff_filling') + 1)
              if (Set_Special.get('BGM_supermissile_reload') <= 0 && !Set_Special.get('BGM_supermissile')) { // 尚未准备超级导弹，且此次能够准备
                Set_Special.set('BGM_supermissile', true)
              } else {
                Set_Special.set('BGM_supermissile_reload', Set_Special.get('BGM_supermissile_reload') - 1)
              }
            } else if (hfn === 1) {
              if (Set_Special.get('AGS_supergrenade_reload') <= t && !Set_Special.get('AGS_supergrenade')) { // 尚未准备超级榴弹，且此次能够准备
                Set_Special.set('AGS_supergrenade', true)
              }
            } else if (hfn === 2) {
              if (Set_Special.get('2B14_airstrike_reload') <= t && !Set_Special.get('2B14_airstrike')) { // 尚未准备阵地轰炸，且此次能够准备
                Set_Special.set('2B14_airstrike', true)
              }
            } else if (hfn === 3) {
              if (Set_Special.get('M2_curveattack_reload') <= 0 && !Set_Special.get('M2_curveattack')) { // 尚未准备曲线雷击，且此次能够准备
                Set_Special.set('M2_curveattack', true)
              } else {
                Set_Special.set('M2_curveattack_reload', Set_Special.get('M2_curveattack_reload') - 1)
              }
            }
            Set_Special.set('HF_reloading' + hfn, t + fil_to_frame(base_filling)) // next reload
            Set_Special.set('HF_incoming' + hfn, t + 30)
            Set_Special.set('HF_causedamage' + hfn, false)
          }
        }
      }
      // 处理攻击和技能
      reactAllSkill('freefire', t)
      if (display_type === 'suffer' && enemy_still_alive) reactInjury()
      if (!enemy_still_alive) break
    }
  }
  for (var i = 0; i < 9; i++) if (list_tdoll[i][1] != null) recordData(i, time, 0) // 末尾填补数据防断档
  for (var i = 0; i < 9; i++) if (list_tdoll[i][1] != null) recordData_suffer(i, time, 0) // 末尾填补数据防断档
  for (var i = 0; i < 5; i++) if (list_HF[i][0]) recordData_HF(i, time, 'lastrecord')
  if (fairy_no != 12 && fairy_no != 13) recordData(9, time, 0) // 除了布雷和火箭外补档
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
          else {
            if (this_formation(k) > 0) react(s_t, k, current_time) // 如果活着，则解释技能
            else Set_Status.set(k, []) // 清空状态
          }
        }
      }
    }
  }
  // 人形特殊状态
  for (var k = 0; k < 9; k++) {
    if (gs_tdoll[k]) {
      if (is_this(k, 257)) {
        if (Set_Special.get('m200_end' + k) != undefined) {
          if (Set_Special.get('m200_end' + k) < global_frame) {
            Set_Special.delete('m200_end' + k)
            Set_Special.set('attack_permission_' + k, 'fire_all')
          }
        }
      } else if (is_this(k, 243)) {
        if (Set_Special.get('64howa_' + k) != undefined && Set_Special.get('64howa_' + k) < global_frame) { // 未来预警发动
          if (document.getElementById('special_64howa_' + (k + 1) + '_0').checked) {
            changeStatus(k, 'self', 'dmg', '0.55', 5)
            react([createSkill(0, 0, 5, describe_property(['bloall'], ['dmg'], ['0.55'])), 0], k, global_frame)
          } else {
            if (k === 0 || k === 1 || k === 3 || k === 4) {
              if (gs_tdoll[k + 1]) changeStatus(k + 1, 'self', 'shield', 25, 5)
              if (gs_tdoll[k + 3]) changeStatus(k + 3, 'self', 'shield', 25, 5)
            } else if (k === 6 || k === 7) {
              if (gs_tdoll[k + 1]) changeStatus(k + 1, 'self', 'shield', 25, 5)
            }
          }
          Set_Special.delete('64howa_' + k)
        }
      } else if (is_this(k, 264)) {
        if (Set_Special.get('chauchat_nextget_' + k) < global_frame) {
          if (Set_Special.get('chauchat_' + k) < 4) {
            Set_Special.set('chauchat_' + k, Set_Special.get('chauchat_' + k) + 1)
          }
          Set_Special.set('chauchat_nextget_' + k, global_frame + 120)
        }
      }
    }
  }
  // 状态时间结算
  for (var [k, v] of Set_Status) { // 状态消逝，k = stand_num, v = [ [ [type, value(>1)] ,left_frame ] ... ] 的数组
    // 脆弱类状态
    if (Set_Special.get('fragile_40') != undefined && Set_Special.get('fragile_40') < global_frame) { // 断罪者魔弹
      fragile_main /= 1.4
      Set_Special.delete('fragile_40')
    }
    if (Set_Special.get('fragile_15') != undefined && Set_Special.get('fragile_15') < global_frame) { // 夜枭轰鸣
      fragile_main /= 1.15
      fragile_all /= 1.15
      Set_Special.delete('fragile_15')
    }
    if (Set_Special.get('fragile_100') != undefined && Set_Special.get('fragile_100') < global_frame) { // 圣光制裁
      fragile_main /= 2
      fragile_all /= 2
      Set_Special.delete('fragile_100')
    }

    // 减伤类状态
    // Set_Special.set('temp_defence', 600)
    if (Set_Special.get('temp_defence') < global_frame) {
      for (var i = 0; i < 9; i++) {
        if (gs_tdoll[i]) Set_Special.set('reduce_dmg' + i, Set_Special.get('reduce_dmg' + i) / 0.7)
      }
    }

    if (Set_Special.get('multi_' + k) != undefined && Set_Special.get('multi_' + k)[1] < global_frame) {
      Set_Special.delete('multi_' + k)
    }
    if (k > 0 && gs_tdoll[k]) { // 需要时延相应被蟒蛇复读的all类技能
      if (is_this(k, 250) && global_frame >= Set_Special.get('hs2000_shield') && Set_Special.get('hs2000_can_active')) {
        Set_Special.set('hs2000_can_active', false)
        for (var stn = 0; stn < 9; stn++) {
          if (gs_tdoll[stn] && Set_Base.get(stn).Info.get('shield') > 0) {
            changeStatus(stn, 'self', 'dmg', 0.35, 5)
            changeStatus(stn, 'self', 'acu', 0.35, 5)
          }
        }
      }
    }
    if (Set_Special.get('ffmax' + k) != undefined) {
      if (Set_Special.get('ffshield_ending' + k) <= current_time) {
        Set_Base.get(k).Info.set('ff', 0)
        Set_Special.delete('ffmax' + k)
      }
      if (Set_Special.get('ff_decline' + k) > 0) {
        if (Set_Special.get('ff_decline_at' + k) <= current_time) {
          var last_ff = Set_Base.get(k).Info.get('ff')
          last_ff -= Set_Special.get('ff_decline' + k)
          Set_Base.get(k).Info.set('ff', last_ff)
          Set_Special.set('ff_decline_at' + k, Set_Special.get('ff_decline_at' + k))
        }
      }
    }
    var len_status = v.length
    for (var s = 0; s < len_status; s++) {
      var s_t = v[s]
      if (s_t[1] > 0) s_t[1]-- // 状态持续减少
      else if (s_t[1] === 0) {
        if (s_t[0][0].substr(0, 6) === 'enemy_') {
          endStatus(k, s_t, 'enemy_lost')
        }
        else if (is_property(s_t[0][0])) {
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
        else if (s_t[0][0] === 'snipe') {
          endStatus(k, s_t, 'snipe') // 狙击出膛
        }
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
      if (is_this(stand_num, 1055) && Set_Special.get(stand_num) === 'shelling') {
        recordData(stand_num, current_time, 0)
        var dmg_direct = 0, dmg_aoe = 0, final_dmg = 0
        // 必中，不可暴击，护甲减免的直击
        dmg_direct = this_formation(stand_num) * Math.max(1, Math.ceil(6 * current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
        // 能闪避，可暴击，护甲减免的溅射
        for (var i = 0; i < enemy_num - 1; i++) {
          if (Math.random() <= current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) { // 命中
            var final_crit = 1
            if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
            dmg_aoe += this_formation(stand_num) * final_crit * (enemy_num - 1) * Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
          }
        }
        dmg_direct = Math.ceil(dmg_direct * explain_fgl_ff('single'))
        dmg_aoe = Math.ceil(dmg_aoe * explain_fgl_ff('around_single'))
        final_dmg = dmg_direct + dmg_aoe
        recordData(stand_num, current_time, final_dmg)
      }
      // 正常的攻击
      else {
        recordData(stand_num, current_time, 0)
        var base_acu = current_Info.get('acu') // 基础命中

        // 计算BUFF——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

        if (is_this(stand_num, 194)) { // K2热力过载
          if (Set_Special.get('k2_temp_' + stand_num) > 15) base_acu *= Math.pow(0.98, Set_Special.get('k2_temp_' + stand_num) - 15) // 过热减命中
          if (Set_Special.get('k2_' + stand_num) === 'fever') {
            if (Set_Special.get('k2_temp_' + stand_num) < 35) Set_Special.set('k2_temp_' + stand_num, Set_Special.get('k2_temp_' + stand_num) + 1) // fever模式升温
          } else {
            if (Set_Special.get('k2_temp_' + stand_num) > 0) Set_Special.set('k2_temp_' + stand_num, Set_Special.get('k2_temp_' + stand_num) - 1) // note模式升温
            if (Set_Special.get('k2_dmgup_' + stand_num) < 10) Set_Special.set('k2_dmgup_' + stand_num, Set_Special.get('k2_dmgup_' + stand_num) + 1) // note模式增伤
          }
        }
        if (is_this(stand_num, 1005)) {
          if (Set_Special.get('m1895_' + stand_num) === 0) {
            changeStatus(stand_num, 'all', 'dmg', '0.1', 4)
            changeStatus(stand_num, 'all', 'acu', '0.1', 4)
          }
          Set_Special.set('m1895_' + stand_num, Set_Special.get('m1895_' + stand_num) + 1)
          if (Set_Special.get('m1895_' + stand_num) === 7) Set_Special.set('m1895_' + stand_num, 0)
        }
        if (is_this(stand_num, 197)) { // 玛尔斯号角，被动
          if (Set_Special.get('karm1891') === undefined) Set_Special.set('karm1891', 0)
          if (Math.random() <= 0.4 && Set_Special.get('karm1891') < 3) {
            var num_col = Math.ceil(stand_num / 3) + 1
            react([createSkill(0, 0, 2, describe_property(['col' + num_col], ['rof/crit'], ['0.04/0.04'])), 0], stand_num, current_time)
            changeStatus(stand_num, 'self', 'rof', '0', 2)
            Set_Special.set('karm1891', Set_Special.get('karm1891') + 1)
          }
        }
        if (is_this(stand_num, 198)) { // 墨尔斯假面，被动
          if (Set_Special.get('karm9138_' + stand_num) === undefined) Set_Special.set('karm9138_' + stand_num, 0)
          if (Math.random() <= 0.7) {
            Set_Special.set('karm9138_' + stand_num, Set_Special.get('karm9138_' + stand_num) + 2)
          }
        }
        if (is_this(stand_num, 4) && Set_Special.get('python_opening') != undefined && Set_Special.get('python_active') > 0) { // 蟒蛇无畏者之拥期间
          if (Set_Special.get('python_active') === 1) final_dmg *= 2
          var num_left = Set_Special.get('python_active') - 1
          Set_Special.set('python_active', num_left)
          changeStatus(stand_num, 'self', 'dmg', '0.3', 5)
          if (num_left === 0) {
            Set_Skill.get(stand_num)[0][1] = 0 // 重置普攻
          }
        }
        if (is_this(stand_num, 256)) { // 隼：特殊子弹命中增加
          if (Set_Special.get('falcon_' + stand_num) > 0) base_acu *= Math.pow(1.18, Set_Special.get('falcon_' + stand_num))
        }
        if (is_this(stand_num, 261)) { // QBU-88：三连发爆炸
          if (Set_Special.get('qbu88_' + stand_num) === 2) {
            Set_Special.set('qbu88_' + stand_num, 0)
            var explode_percent = parseFloat(document.getElementById('special_qbu88_' + (stand_num + 1)).value) / 100
            var explode_dmg = 1.5 * current_Info.get('dmg') * explain_fgl_ff('aoe') * explode_percent
            recordData(stand_num, current_time, explode_dmg)
          } else {
            Set_Special.set('qbu88_' + stand_num, Set_Special.get('qbu88_' + stand_num) + 1)
          }
        }

        // 结算命中——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

        if (is_this(stand_num, 245) && Set_Special.get('p90_' + stand_num) > 0) { // P90灰鼠发动，必定暴击和命中
          var final_dmg = Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 穿甲伤害
          Set_Special.set('p90_' + stand_num, Set_Special.get('p90_' + stand_num) - 1)
          final_dmg *= current_Info.get('critdmg')
          final_dmg = Math.ceil(final_dmg * this_formation(stand_num) * explain_fgl_ff('single'))
          recordData(stand_num, current_time, final_dmg)
        }
        else if (is_this(stand_num, 160) && Set_Special.get('saiga_' + stand_num) > 0) { // saiga-12巨羚号角，必中/无视护甲/不能暴击/无视独头弹/强制三目标
          var final_dmg = current_Info.get('dmg')
          if (Set_Special.get('saiga_' + stand_num) === 3) final_dmg *= 1.5
          else if (Set_Special.get('saiga_' + stand_num) === 2) final_dmg *= 2.5
          else if (Set_Special.get('saiga_' + stand_num) === 1) final_dmg *= 3.5
          final_dmg = Math.ceil(this_formation(stand_num) * final_dmg)
          Set_Special.set('saiga_' + stand_num, Set_Special.get('saiga_' + stand_num) - 1)
          if (enemy_num_left >= 3) final_dmg = final_dmg * explain_fgl_ff('single') + 2 * final_dmg * explain_fgl_ff('around_single')
          else final_dmg = final_dmg * explain_fgl_ff('single') + (enemy_num_left - 1) * final_dmg * explain_fgl_ff('around_single')
          recordData(stand_num, current_time, final_dmg)
        } else { // 否则先判断命中
          var next_must_acu = false
          if (is_this(stand_num, 1060) && Set_Special.get('asval_' + stand_num) > current_time) { // 小熊信念发动
            next_must_acu = true
          }
          if (next_must_acu || (Math.random() <= base_acu / (base_acu + enemy_eva))) {
            var base_dmg = current_Info.get('dmg')
            if (is_this(stand_num, 59)) { // AK-74U 排斥反应
              if (Set_Special.get('aks' + stand_num) >= current_time) {
                Set_EnemyStatus.set('aks_debuff' + stand_num, current_time + 150)
              }
            }
            if (is_this(stand_num, 1039)) { // 苍白收割者buff是否存在，是否能够触发buff
              if (Set_Special.get('mosin_bufftime_' + stand_num) >= global_frame) {
                base_dmg *= 1.2
              }
              if (Set_Special.get('mosin_' + stand_num) <= 1) { // 能够刷新状态
                Set_Special.set('mosin_bufftime_' + stand_num, global_frame + 89)
                Set_Special.set('mosin_' + stand_num, Set_Special.get('mosin_numneed_' + stand_num))
              } else {
                Set_Special.set('mosin_' + stand_num, Set_Special.get('mosin_' + stand_num) - 1)
              }
            }
            if (is_this(stand_num, 1002) && Set_Special.get('m1911_' + stand_num) > 0) base_dmg *= 2 // 绝境神枪手2倍伤害
            if (is_this(stand_num, 1075) && current_Info.get('cs') - Set_Special.get('clipsize_' + stand_num) < 3) base_dmg *= 1.4 // 战地魔术额外增伤
            if (is_this(stand_num, 194)) { // K2判断模式基础伤害
              if (Set_Special.get('k2_' + stand_num) === 'fever') base_dmg *= 0.52 // fever三连发单次伤害
              else base_dmg *= Math.pow(1.05, Set_Special.get('k2_dmgup_' + stand_num)) // note经过加成后的伤害
              if (Set_Special.get('k2_temp_' + stand_num) > 15) base_dmg *= Math.pow(0.98, Set_Special.get('k2_temp_' + stand_num) - 15) // 过热减伤
            }
            if (is_this(stand_num, 2008)) { // 希儿：量子回溯最后一发
              var cs = Set_Special.get('clipsize_' + stand_num)
              if (cs === 1) base_dmg *= 3
            }
            if (current_Info.get('type') === 6) {
              if (Set_Special.get('sg_ammo_type_' + stand_num) != undefined) { // 装备了独头弹
                if (Set_Special.get('aa12_' + stand_num) != undefined && Set_Special.get('aa12_' + stand_num) > current_time) { // 酮血症特殊情况
                  if (Set_Special.get('aa12_skillmode_' + stand_num) === true) { // 该次攻击为技能主导：强制3目标
                    Set_Special.set('aa12_skillmode_' + stand_num, false)
                  // 不能受独头弹加成
                  } else {
                    Set_Special.set('aa12_skillmode_' + stand_num, true)
                    base_dmg *= 3 // 独头弹x3伤害
                  }
                } else {
                  if (Set_Special.get('aim_time_' + stand_num) === undefined || Set_Special.get('aim_time_' + stand_num) < current_time) base_dmg *= 3 // 如果没有强制多目标，则独头弹x3伤害
                }
              }
            }
            if (is_this(stand_num, 256)) { // 隼：特殊子弹增加伤害18%，普通射击1.5倍
              if (Set_Special.get('falcon_' + stand_num) > 0) {
                base_dmg *= Math.pow(1.18, Set_Special.get('falcon_' + stand_num))
              }
              base_dmg *= 1.5
            }
            var final_dmg = Math.max(1, Math.ceil(base_dmg * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm))) // 穿甲伤害————————————————————————————————————————————————
            if (current_Info.get('type') === 6) {
              if (Set_Special.get('aim_time_' + stand_num) >= current_time) { // 强制攻击几个目标，顶替独头弹效果
                var aim_num = Set_Special.get('aim_forceon_' + stand_num)
                if (enemy_num >= aim_num) final_dmg *= aim_num
                else final_dmg *= enemy_num
              } else {
                if (current_Info.get('type') === 6 && Set_Special.get('sg_ammo_type_' + stand_num) === undefined) { // SG未携带独头弹
                  if (enemy_num >= 3) final_dmg *= 3
                  else final_dmg *= enemy_num
                } else { // 如果携带，可能因为技能攻击多个目标
                  if (Set_Special.get('aa12_' + stand_num) != undefined && Set_Special.get('aa12_' + stand_num) > current_time) { // 酮血症技能主导强制攻击3目标
                    if (Set_Special.get('aa12_skillmode_' + stand_num) === false) { // false即刚从技能主导切换回来
                      if (enemy_num >= 3) final_dmg *= 3
                      else final_dmg *= enemy_num
                    }
                  }
                }
              }
            }
            if (is_this(stand_num, 4) && Set_Special.get('python_active') === 0 && Set_Special.get('python_opening') === true) {
              final_dmg *= 2 // 无畏者之拥结束伤害
              Set_Special.set('python_active', -1)
              Set_Special.set('python_opening', false)
            }
            if (is_this(stand_num, 194)) { // K2判断模式射击次数
              if (Set_Special.get('k2_' + stand_num) === 'fever') final_dmg *= 3
            }

            // 结算暴击——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

            if (is_this(stand_num, 77) || is_this(stand_num, 85) || is_this(stand_num, 109)) { // 连珠终结不可暴击
              var cs_base = (current_Info.get('cs') - Set_Special.get('clipsize_' + stand_num) + 1)
              if (parseInt(cs_base / 4) > 0 && cs_base - 4 * parseInt(cs_base / 4) === 0) {
                if (is_this(stand_num, 77)) final_dmg *= 2.4
                else if (is_this(stand_num, 85)) final_dmg *= 2.6
                else if (is_this(stand_num, 109)) final_dmg *= 3
              } else {
                var final_crit = 1
                if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
                final_dmg = Math.ceil(final_dmg * final_crit)
              }
            } else if (Set_Special.get('multi_' + stand_num) != undefined && Set_Special.get('multi_' + stand_num)[1] >= current_time && is_this(stand_num, 221)) { // 锁链冲击：必定暴击
              final_dmg *= current_Info.get('critdmg')
            } else { // 按概率暴击的攻击
              var final_crit = 1
              // 必定暴击的全局设定，或技能导致必暴，或概率暴击
              if (Set_Special.get('must_crit_' + stand_num) != undefined || (Set_Special.get('skill_mustcrit_' + stand_num) != undefined && Set_Special.get('skill_mustcrit_' + stand_num) >= current_time) || Math.random() + current_Info.get('crit') >= 1) {
                final_crit *= current_Info.get('critdmg')
              }
              if (Set_Special.get('pkp_nextcrit_' + stand_num) === true && is_this(stand_num, 173)) { // 暴动宣告的1.5倍且必暴子弹
                Set_Special.set('pkp_nextcrit_' + stand_num, false)
                final_crit *= 1.5
              }
              final_dmg = Math.ceil(final_dmg * final_crit)
            }
            if (is_this(stand_num, 1057)) { // 如果AR-15 MOD
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
            final_dmg = Math.ceil(final_dmg * explain_fgl_ff('single'))
            if (fire_status.substr(5) === 'all') final_dmg *= this_formation(stand_num) // 全员攻击
            else if (fire_status.substr(5) === 'four') final_dmg *= this_formation(stand_num) - 1 // 一人释放技能
            if (Set_Special.get('multi_' + stand_num) != undefined && Set_Special.get('multi_' + stand_num)[1] >= current_time) { // 多重攻击
              final_dmg *= Set_Special.get('multi_' + stand_num)[0]
            }
            recordData(stand_num, current_time, final_dmg)
          }else {
            recordData(stand_num, current_time, 0)
          }
        }
      }
      // 攻击间隔或者换弹判断
      if (current_Info.get('type') != 5 && current_Info.get('type') != 6 && !is_this(stand_num, 256)) { // HG/AR/SMG/RF 并排除 隼
        if ((is_this(stand_num, 73) || is_this(stand_num, 237)) && current_time <= Set_Special.get('aug_' + stand_num)) s_t[1] = 9 // 葬仪之雨固定150射速
        else if (is_this(stand_num, 1002) && Set_Special.get('m1911_' + stand_num) > 0) { // 绝境神枪手120射速
          s_t[1] = 11
          Set_Special.set('m1911_' + stand_num, Set_Special.get('m1911_' + stand_num) - 1)
        }
        else if (is_this(stand_num, 122)) { // 突击者之眼三连发：2帧间隔射击
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
        else if (is_this(stand_num, 198) && Set_Special.get('karm9138_' + stand_num) === 18) {
          recordData(stand_num, current_time, 0)
          var mors_ratio
          if (enemy_type === 'normal') mors_ratio = 45
          else mors_ratio = 3
          var mors_dmg = this_formation(stand_num) * Math.ceil(mors_ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
          recordData(stand_num, current_time, mors_dmg)
          Set_Special.set('karm9138_' + stand_num, 0)
          s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
        }
        else s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
      } else { // MG和SG扣除子弹
        var cs = Set_Special.get('clipsize_' + stand_num)
        var extra_shoot_pkp = false
        cs--
        if (is_this(stand_num, 173)) { // PKP暴动宣告
          if (Math.random() <= 0.2) {
            cs++
            extra_shoot_pkp = true
          }
        }
        if (cs === 0) { // 需要换弹
          var reload_frame = 0
          var rof = current_Info.get('rof')
          if (current_Info.get('type') === 5) { // MG的换弹
            if (is_this(stand_num, 1075)) { // M1918-MOD 战地魔术
              reload_frame = 150
            } else {
              if (rof > 1000) rof = 1000
              else if (rof < 1) rof = 1
              reload_frame = Math.floor((4 + 200 / rof) * 30)
              if (is_this(stand_num, 253)) { // 刘易斯 力天使
                reload_frame = Math.max(Math.ceil(reload_frame * (1 - 0.15 * Set_Special.get('angel_strength' + stand_num))), reload_frame * 0.55)
              } else if (is_this(stand_num, 254)) { // 白夜独奏曲：夜战减换弹
                if (Set_Special.get('sunrise') === 'night') reload_frame = Math.ceil(0.7 * reload_frame)
              } else if (is_this(stand_num, 263)) {
                if (Set_Special.get('mg36_reload_' + stand_num) != undefined) {
                  reload_frame = Math.ceil((1 - 0.25 * Set_Special.get('mg36_reload_' + stand_num)) * reload_frame)
                  Set_Special.set('mg36_reload_' + stand_num, 0)
                }
              } else if (is_this(stand_num, 264)) { // 百合纹章：加速换弹
                reload_frame = Math.floor(reload_frame * (1 - 0.2 * Set_Special.get('chauchat_nextreload_' + stand_num)))
                Set_Special.set('chauchat_nextreload_' + stand_num, 0)
              }
            }
          } else if (current_Info.get('type') === 6) { // SG的换弹
            if (Set_Special.get('usas12_' + stand_num) === true) { // 狂热突袭增加1s换弹
              reload_frame = Math.floor(65 + 15 * ((list_tdoll[stand_num][1].Property).cs)) + 30
            } else if (is_this(stand_num, 2008)) { // 量子回溯瞬间完成换弹
              reload_frame = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
            } else {
              reload_frame = Math.floor(65 + 15 * ((list_tdoll[stand_num][1].Property).cs))
            }
          } else if (current_Info.get('type') === 4 && is_this(stand_num, 256)) { // 隼的换弹
            reload_frame = 30 + Math.floor(3600 / (current_Info.get('rof') + 10))
          }
          if (Set_Special.get('jericho_exist') === true) {
            var jericho_standset = Set_Special.get('jericho_standset')
            for (var jrc of jericho_standset) {
              if (is_in_affect_of(jrc, stand_num)) {
                if (Set_Special.get('jericho_buff_' + stand_num) === undefined) {
                  Set_Special.set('jericho_buff_' + stand_num, 1)
                  changeStatus(stand_num, 'self', 'dmg', '0.05', 15)
                  changeStatus(stand_num, 'self', 'acu', '0.05', 15)
                  changeStatus(stand_num, 'self', 'critdmg', '0', 15) // 记录buff层数专用
                } else if (Set_Special.get('jericho_buff_' + stand_num) < 3) {
                  Set_Special.set('jericho_buff_' + stand_num, Set_Special.get('jericho_buff_' + stand_num) + 1)
                  changeStatus(stand_num, 'self', 'dmg', '0.05', 15)
                  changeStatus(stand_num, 'self', 'acu', '0.05', 15)
                  changeStatus(stand_num, 'self', 'critdmg', '0', 15)
                }
              }
            }
          }
          Set_Special.set('attack_permission_' + stand_num, 'stop') // 开火许可更改为stop
          Set_Special.set('reloading_' + stand_num, true)
          changeStatus(stand_num, 'reload', null, reload_frame, null) // 因为单独计算帧数，将帧数传至value
          Set_Special.set('clipsize_' + stand_num, current_Info.get('cs')) // 弹量还原
          if (is_this(stand_num, 253)) { // 刘易斯增加弹量
            var angel_num = Set_Special.get('angel_strength' + stand_num)
            if (angel_num < 3) angel_num++
            Set_Special.set('angel_strength' + stand_num, angel_num)
            Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + angel_num - 1)
          } else if (is_this(stand_num, 238)) { // 88式
            if (!document.getElementById('special_88type_' + stand_num).checked) {
              Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + 2)
              if (Set_Special.get('88type_buffon' + stand_num) === undefined) {
                changeStatus(stand_num, 'self', 'acu', '0.3', -1)
                Set_Special.set('88type_buffon' + stand_num, true)
              }
            } else changeStatus(stand_num, 'self', 'acu', '-0.2', -1)
          } else if (is_this(stand_num, 1089)) { // 布伦MOD
            if (Set_Special.get('bren_buff_' + stand_num) < 3) {
              Set_Special.set('bren_buff_' + stand_num, Set_Special.get('bren_buff_' + stand_num) + 1)
              changeStatus(stand_num, 'self', 'acu', 0.15, -1)
            }
            Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + Set_Special.get('bren_buff_' + stand_num))
          }
          if (is_this(stand_num, 112)) { // 狂躁血脉
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

      // 攻击后判断————————————————————————————————————————————————————————————————————————————————————————————

      if (is_this(stand_num, 266)) { // r93强运扳机射速逻辑
        // buff counting
        if (Set_Special.get('r93_valid_' + stand_num) === undefined) { // no buff
          Set_Special.set('r93_' + stand_num, 1)
          Set_Special.set('r93_valid_' + stand_num, 1)
          Set_Special.set('r93_timestack_' + stand_num, [90 + current_time])
          changeStatus(stand_num, 'self', 'rof', 0.1, -1)
        }
        else if (Set_Special.get('r93_valid_' + stand_num) < 3) { // more buff
          Set_Special.set('r93_' + stand_num, Set_Special.get('r93_' + stand_num) + 1)
          var new_timestack = Set_Special.get('r93_timestack_' + stand_num)
          new_timestack.push(90 + current_time)
          Set_Special.set('r93_timestack_' + stand_num, new_timestack)
          Set_Special.set('r93_valid_' + stand_num, Set_Special.get('r93_valid_' + stand_num) + 1)
          changeStatus(stand_num, 'self', 'rof', 0.1, -1)
        } else {
          Set_Special.set('r93_' + stand_num, Set_Special.get('r93_' + stand_num) + 1)
          var new_timestack = Set_Special.get('r93_timestack_' + stand_num)
          new_timestack.push(90 + current_time)
          Set_Special.set('r93_timestack_' + stand_num, new_timestack)
        }
        // buff time lost and check time out
        if (Set_Special.get('r93_timestack_' + stand_num) != undefined) {
          var r93_timestack = Set_Special.get('r93_timestack_' + stand_num)
          var len_r93buff = r93_timestack.length
          for (var r93n = 0; r93n < len_r93buff; r93n++) {
            if (r93_timestack[r93n] <= current_time) {
              r93_timestack.shift()
              r93n--
              if (r93_timestack.length < Set_Special.get('r93_valid_' + stand_num)) {
                Set_Special.set('r93_valid_' + stand_num, r93_timestack.length)
                changeStatus(stand_num, 'self', 'rof', -0.1, -1)
              }
            }
          }
          Set_Special.set('r93_timestack_' + stand_num, r93_timestack)
        }
        // forcus setting (special setting)
        if (document.getElementById('special_r93_' + stand_num + '_2').checked) { // 设定转换数
          if (Set_Special.get('r93_maxforcus_' + stand_num) === undefined) { // 读取同目标射击上限
            Set_Special.set('r93_maxforcus_' + stand_num, parseInt(document.getElementById('special_r93_switch_' + stand_num).value))
            for (var lsn = 0; lsn < Set_Special.get('r93_valid_' + stand_num); lsn++) changeStatus(stand_num, 'self', 'rof', -0.0909, -1)
            Set_Special.delete('r93_' + stand_num)
            Set_Special.delete('r93_valid_' + stand_num)
            Set_Special.delete('r93_timestack_' + stand_num)
          }
          if (Set_Special.get('r93_' + stand_num) > Set_Special.get('r93_maxforcus_' + stand_num)) { // 需要转换目标
            if (Set_Special.get('r93_skillon_' + stand_num) != undefined && Set_Special.get('r93_skillon_' + stand_num) > current_time) {
              true // do nothing
            } else {
              for (var lsn = 0; lsn < Set_Special.get('r93_valid_' + stand_num); lsn++) changeStatus(stand_num, 'self', 'rof', -0.0909, -1)
              Set_Special.delete('r93_' + stand_num)
              Set_Special.delete('r93_valid_' + stand_num)
              Set_Special.delete('r93_timestack_' + stand_num)
            }
          }
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
        if (is_this(stand_num, 1064) && list_target[i] === 'bloall') { // 如果是G36MOD发动的弧光契约
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
      } else if (list_target[i] === 'enemy') {
        var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
        var list_value = ((s_t[0].Describe).list_value)[i].split('/')
        var len = list_pro.length
        for (var p = 0; p < len; p++) {
          var new_status = [['enemy_' + list_pro[p], 1 + parseFloat(list_value[p])], Math.ceil(30 * s_t[0].duration)]
          Set_Status.get(-2).push(new_status)
          endStatus(-1, new_status, 'enemy_get')
        }
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
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    } else if (s_t[0].duration === 0) { // 非持续类
      s_t[1] = -1
    } else if (s_t[0].duration === -1) { // 无限持续
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
  else if (skillname === 'stechkin') {
    if (Set_Special.get('stechkinexclusive_' + stand_num) === true) {
      changeStatus(stand_num, 'all', 'dmg', 0.04, 8)
    }
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
      fragile_main *= 1.15
      fragile_all *= 1.15
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
    if (is_this(stand_num, 1039) && document.getElementById('special_mosin_' + (stand_num + 1)).checked) {
      // snipe disabled, do nothing
    } else {
      var ratio = (s_t[0].Describe).ratio
      var snipe_num = (s_t[0].Describe).snipe_num
      var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
      var time_interval = ((1 - current_Info.get('cld')) * (s_t[0].Describe).time_interval).toFixed(2)
      if (is_this(stand_num, 257)) {
        time_init = 1.5
        var frame_interval = Math.ceil(time_interval * 30)
        var time_block
        if (frame_interval === 45) { snipe_num = 6; time_block = 9 }
        else if (frame_interval === 41) { snipe_num = 7; time_block = 9.7 }
        else if (frame_interval === 36) { snipe_num = 7; time_block = 9 }
        Set_Special.set('m200_end' + stand_num, current_time + time_block * 30)
      } else if (is_this(stand_num, 262)) time_interval = rof_to_frame(2, current_Info.get('rof'), 262) / 30
      var labels = (s_t[0].Describe).labels
      Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
      Set_Special.set('snipe_num_' + stand_num, snipe_num)
      Set_Special.set('snipe_interval_' + stand_num, time_interval)
      Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
      changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    }
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
  else if (skillname === 'iws2000reset') { // 巨鹰攻势重置普攻
    Set_Skill.get(stand_num)[0][1] = 0 // 重置普攻
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'contender') { // 断罪者魔弹
    Set_Special.set('fragile_40', global_frame + 150)
    fragile_main *= 1.4
    Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
    Set_Special.set('snipe_num_' + stand_num, 1)
    Set_Special.set('snipe_interval_' + stand_num, 0)
    Set_Special.set('snipe_arriveframe_' + stand_num, current_time + 30 * 1)
    changeStatus(stand_num, 'snipe', 'armless/critless/evaless', 3, 1)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'theresa') {
    if (document.getElementById('special_theresa_' + stand_num).checked) {
      Set_Special.set('fragile_100', global_frame + 150)
      fragile_main *= 2
      fragile_all *= 2
    }
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
      } else {
        changeStatus(stand_num, 'all', 'rof', '0', 1) // 单纯为了给蟒蛇复读
        changeStatus(stand_num, 'all', 'acu', '0', 1)
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'm1911') { // 绝境神枪手
    Set_Special.set('m1911_' + stand_num, 7)
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
      changeStatus(stand_num, 'self', 'dmg', '0.45', 10)
      changeStatus(stand_num, 'self', 'rof', '0.22', 10)
    } else if (gs_tdoll[stand_num + 1]) {
      changeStatus(stand_num + 1, 'self', 'shield', 40, 10)
      changeStatus(stand_num + 1, 'self', 'eva', 0.8, 10)
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
  else if (skillname === 'ump40') { // 烙印过载
    if (Set_Special.get('ump40buffnum_' + stand_num) === undefined) {
      Set_Special.set('ump40buffnum_' + stand_num, 0)
    }
    if (Set_Special.get('ump40buffnum_' + stand_num) < 5) {
      if (document.getElementById('special_ump40_' + (stand_num + 1) + '_0').checked) {
        changeStatus(stand_num, 'self', 'dmg', '-0.05', -1)
        changeStatus(stand_num, 'self', 'eva', '0.1', -1)
      } else {
        changeStatus(stand_num, 'self', 'dmg', '0.3', -1)
        changeStatus(stand_num, 'self', 'eva', '-0.25', -1)
      }
      Set_Special.set('ump40buffnum_' + stand_num, Set_Special.get('ump40buffnum_' + stand_num) + 1) // 叠加BUFF
    }
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'k2') { // 热力过载
    if (document.getElementById('special_k2_' + (stand_num + 1) + '_1').checked) { // 自动
      if (Set_Special.get('k2_' + stand_num) === 'fever') Set_Special.set('k2_' + stand_num, 'note')
      else {
        Set_Special.set('k2_' + stand_num, 'fever')
        Set_Special.set('k2_dmgup_' + stand_num, 0) // 清空note积累层数
      }
    } else if (document.getElementById('special_k2_' + (stand_num + 1) + '_2').checked) { // Fever
      // do nothing
    } else if (document.getElementById('special_k2_' + (stand_num + 1) + '_3').checked) { // Note
      if (Set_Special.get('k2_' + stand_num) === 'fever') Set_Special.set('k2_' + stand_num, 'note')
    }
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'idw') {
    changeStatus(stand_num, 'self', 'dmg', '0.2', 2)
    changeStatus(stand_num, 'self', 'dmg', '0.2', 4)
    changeStatus(stand_num, 'self', 'dmg', '0.2', 6)
    changeStatus(stand_num, 'self', 'rof', '0.1', 2)
    changeStatus(stand_num, 'self', 'rof', '0.1', 4)
    changeStatus(stand_num, 'self', 'rof', '0.1', 6)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'addclip') { // 增加弹量
    var clip_num = (s_t[0].Describe).clipsize
    if (clip_num < 0) {
      if (is_this(stand_num, 254)) {
        if (Set_Special.get('sunrise') === 'night') clip_num = 4
        else clip_num = 2
      }
    }
    Set_Special.set('clipsize_' + stand_num, Set_Special.get('clipsize_' + stand_num) + clip_num)
    if (is_this(stand_num, 163)) {
      Set_Special.set('aa12_' + stand_num, global_frame + 240) // 技能持续时间
      Set_Special.set('aa12_skillmode_' + stand_num, true) // 下一枪是酮血症作用下的强制3目标射击
    }
    else if (is_this(stand_num, 189)) Set_Special.set('usas12_' + stand_num, true) // 狂热突袭增加换弹时间
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'mustcrit') { // 必定暴击
    Set_Special.set('skill_mustcrit_' + stand_num, global_frame + 30 * s_t[0].duration)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'aimupto') { // 攻击目标数更换至某个值
    var aim = (s_t[0].Describe).aim
    Set_Special.set('aim_time_' + stand_num, global_frame + 240)
    Set_Special.set('aim_forceon_' + stand_num, aim)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'saiga') { // 巨羚号角
    Set_Special.set('saiga_' + stand_num, 3)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'falcon') { // 夕阳隼：狙击
    Set_Special.set('saiga_' + stand_num, 3)
    if (Set_Special.get('falcon_' + stand_num) > 0 && !document.getElementById('special_falcon_' + stand_num).checked) {
      var ratio = (s_t[0].Describe).ratio
      var snipe_num = (s_t[0].Describe).snipe_num
      var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
      var time_interval = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_interval
      var labels = (s_t[0].Describe).labels
      Set_Special.set('attack_permission_' + stand_num, 'stop') // 全体瞄准
      Set_Special.set('snipe_num_' + stand_num, snipe_num)
      Set_Special.set('snipe_interval_' + stand_num, time_interval)
      Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
      changeStatus(stand_num, 'snipe', labels, ratio, time_init)
      Set_Special.set('falcon_' + stand_num, (Set_Special.get('falcon_' + stand_num) - 1))
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    } else {
      s_t[1] = 0 // 等待装填
    }
  }
  else if (skillname === 'falcon_getbullet') {
    if (Set_Special.get('falcon_' + stand_num) < 2) {
      Set_Special.set('falcon_' + stand_num, Set_Special.get('falcon_' + stand_num) + 1)
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'hs2000') { // 反击者壁垒
    if (Set_Special.get('hs2000_shield') === undefined || Set_Special.get('hs2000_shield') < current_time - 150) {
      Set_Special.set('hs2000_can_active', true)
      Set_Special.set('hs2000_shield', current_time + 90)
      changeStatus(stand_num, 'all', 'shield', 42, 6)
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'ffshield') { // 力场盾
    var ff = (s_t[0].Describe).ff
    var ffmax = (s_t[0].Describe).ffmax
    var decline = (s_t[0].Describe).decline
    var decline_interval = 0
    Set_Special.set('ff_decline' + stand_num, decline)
    if (decline != 0) {
      decline_interval = (s_t[0].Describe).decline_interval
      Set_Special.set('ff_decline_at' + stand_num, current_time + 30 * decline_interval)
    }
    Set_Special.set('ffmax' + stand_num, ffmax)
    Set_Special.set('ffshield_ending' + stand_num, current_time + 30 * s_t[0].duration)
    Set_Base.get(stand_num).Info.set('ff', ff)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'aks') { // 排斥反应
    Set_Special.set('aks' + stand_num, current_time + 150)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'flash') { // 闪光弹
    var stun_time = (s_t[0].Describe).duration
    if (Set_EnemyStatus.get('stopfire') === undefined || Set_EnemyStatus.get('stopfire') < global_frame + 30 * stun_time) {
      Set_EnemyStatus.set('stopfire', global_frame + 30 * stun_time)
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'shield') { // 护盾
    var value = (s_t[0].Describe).value
    var duration = (s_t[0].Describe).duration
    var label = (s_t[0].Describe).label
    if (label === 'col1') { // 坚壁理论
      if (gs_tdoll[2]) changeStatus(2, 'self', 'shield', value, duration)
      if (gs_tdoll[5]) changeStatus(5, 'self', 'shield', value, duration)
      if (gs_tdoll[8]) changeStatus(8, 'self', 'shield', value, duration)
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'chauchat') { // 百合纹章
    if (Set_Special.get('chauchat_nextreload_' + stand_num) < 2) {
      Set_Special.set('chauchat_nextreload_' + stand_num, Set_Special.get('chauchat_nextreload_' + stand_num) + 1)
    }
    if (Set_Special.get('chauchat_' + stand_num) > 0) {
      Set_Special.set('chauchat_' + stand_num, Set_Special.get('chauchat_' + stand_num) - 1)
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'mg36') {
    var num_ar = 0, num_smg = 0, num_sg = 0
    var _x = stand_num - 3 * Math.floor(stand_num / 3), _y = Math.floor(stand_num / 3)
    if (_x < 2) {
      if (gs_tdoll[stand_num + 1]) { // 右1格
        if (is_this_type(stand_num + 1, 2)) num_ar++
        else if (is_this_type(stand_num + 1, 3)) num_smg++
        else if (is_this_type(stand_num + 1, 6)) num_sg++
      }
      if (_x < 1) {
        if (gs_tdoll[stand_num + 2]) { // 右2格
          if (is_this_type(stand_num + 2, 2)) num_ar++
          else if (is_this_type(stand_num + 2, 3)) num_smg++
          else if (is_this_type(stand_num + 2, 6)) num_sg++
        }
        if (_y > 0) {
          if (gs_tdoll[stand_num - 1]) { // 右2上1
            if (is_this_type(stand_num - 1, 2)) num_ar++
            else if (is_this_type(stand_num - 1, 3)) num_smg++
            else if (is_this_type(stand_num - 1, 6)) num_sg++
          }
        }
      }
    }
    if (num_ar > 0) changeStatus(stand_num, 'self', 'acu', 0.25 * num_ar, 6)
    if (num_smg > 0) Set_Special.set('mg36_reload_' + stand_num, num_smg)
    if (num_sg > 0) Set_Special.set('clipsize_' + stand_num, Set_Special.get('clipsize_' + stand_num) + num_sg)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'r93') {
    Set_Special.set('r93_skillon_' + stand_num, current_time + 150)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  if (debug_mode) debug_addinfo(stand_num, skillname, global_frame, s_t[1] + 1)
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
    var new_status
    if (type === 'shield') {
      new_status = [[type, parseFloat(value)], frame]
    } else {
      new_status = [[type, 1 + parseFloat(value)], frame]
    }
    var list_status = Set_Status.get(-1)
    list_status.push(new_status)
    Set_Status.set(-1, list_status)
    endStatus(-1, new_status, 'get')
  } else if (target === 'self') { // 专注类
    if (!Set_Special.get('can_add_python') && is_this(stand_num, 4) && not_init) { // 此人是蟒蛇
      if (Set_Special.get('python_' + type) != undefined && Set_Special.get('python_' + type) < 3) {
        var new_level = Set_Special.get('python_' + type) + 1
        Set_Special.set('python_' + type, new_level)
        react([createSkill(0, 0, 3, lib_describe.get('python_' + type)), 0], stand_num, 0)
        changeStatus(stand_num, 'python_buff_' + type, type, null, 3)
      }
    }
    var new_status
    if (type === 'shield') {
      new_status = [[type, parseFloat(value)], frame]
    } else {
      new_status = [[type, 1 + parseFloat(value)], frame]
    }
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
        if (gs_tdoll[i]) {
          var this_info = (Set_Base.get(i)).Info
          var new_property = (this_info).get(status[0][0])
          if (situation === 'get') {
            if (status[0][0] === 'shield') {
              new_property += status[0][1]
            } else {
              new_property = new_property * status[0][1]
              if (not_init && is_this(i, 1060) && status[0][0] === 'dmg') { // asval 信念
                Set_Special.set('asval_' + i, global_frame + 90)
              }
            }
          }
          else if (situation === 'lost') {
            if (status[0][0] === 'shield') {
              if (new_property >= status[0][1]) new_property -= status[0][1]
              else new_property = 0
            } else {
              new_property = new_property / status[0][1]
            }
          }
          this_info.set(status[0][0], new_property)
        }
      }
    } else { // 某一人属性变化
      var this_info = (Set_Base.get(stand_num)).Info
      var new_property = (this_info).get(status[0][0])
      if (situation === 'get') {
        if (status[0][0] === 'shield') {
          new_property += status[0][1]
        } else {
          new_property = new_property * status[0][1]
          if (not_init && is_this(stand_num, 1060) && status[0][0] === 'dmg') { // asval 信念
            Set_Special.set('asval_' + stand_num, global_frame + 90)
          }
        }
      }
      else if (situation === 'lost') {
        if (status[0][0] === 'shield') {
          if (new_property >= status[0][1]) new_property -= status[0][1]
          else new_property = 0
        } else {
          new_property = new_property / status[0][1]
        }
        if (status[0][0] === 'critdmg' && status[0][1] === 1) { // 杰里科被动消失一层
          if (Set_Special.get('jericho_buff_' + stand_num) > 0) {
            Set_Special.set('jericho_buff_' + stand_num, Set_Special.get('jericho_buff_' + stand_num) - 1)
          }
        }
        if (status[0][0] === 'rof' && status[0][1] === 1) { // 玛尔斯号角被动消失一层
          if (Set_Special.get('karm1891') > 0) {
            Set_Special.set('karm1891', Set_Special.get('karm1891') - 1)
          }
        }
        if (status[0][0] === 'acu' && status[0][1] === 1) { // M2致命干扰消失一层
          if (Set_Special.get('M2_buff' + stand_num) > 0) {
            Set_Special.set('M2_buff' + stand_num, Set_Special.get('M2_buff' + stand_num) - 1)
          }
        }
      }
      this_info.set(status[0][0], new_property)
    }
  }
  else if (situation === 'enemy_get' || situation === 'enemy_lost') { // 敌人状态：[type, value>1]，先做掩护压制
    if (situation === 'enemy_get') {
      if (status[0][0].substr(6) === 'eva') enemy_eva = Math.ceil(enemy_eva * status[0][1])
      if (display_type === 'suffer') {
        if (status[0][0].substr(6) === 'dmg') enemy_dmg = Math.ceil(enemy_dmg * status[0][1])
        if (status[0][0].substr(6) === 'rof') enemy_rof = Math.ceil(enemy_rof * status[0][1])
        if (status[0][0].substr(6) === 'acu') enemy_acu = Math.ceil(enemy_acu * status[0][1])
      }
    } else if (situation === 'enemy_lost') {
      if (status[0][0].substr(6) === 'eva') {
        enemy_eva = Math.floor(enemy_eva / status[0][1])
        if (status[0][1] === 1) Set_Special.set('2B14buff', true)
      }
      if (display_type === 'suffer') {
        if (status[0][0].substr(6) === 'dmg') enemy_dmg = Math.floor(enemy_dmg / status[0][1])
        if (status[0][0].substr(6) === 'rof') enemy_rof = Math.floor(enemy_rof / status[0][1])
        if (status[0][0].substr(6) === 'acu') {
          if (status[0][1] === 1) Set_Special.set('AT4_buff', true)
          enemy_acu = Math.floor(enemy_acu / status[0][1])
        }
      }
    }
  }
  else if (situation === 'dot') {
    var dot_para = status[0][1].split('/')
    var damage_explode = ((Set_Base.get(stand_num)).Info).get('dmg') * parseInt(dot_para[0])
    if (is_this(stand_num, 1032)) {
      if (Set_Special.get('uzi_' + stand_num) === undefined) Set_Special.set('uzi_' + stand_num, 0)
      if (Set_Special.get('uzi_' + stand_num) - 3 * Math.floor(Set_Special.get('uzi_' + stand_num) / 3) === 0) damage_explode *= 1.8
      Set_Special.set('uzi_' + stand_num, Set_Special.get('uzi_' + stand_num) + 1)
    }
    damage_explode = Math.ceil(damage_explode * explain_fgl_ff('aoe'))
    var current_time = parseInt(dot_para[1])
    recordData(stand_num, current_time, 0)
    recordData(stand_num, current_time, damage_explode)
    Set_Special.set('dotnum_' + stand_num, Set_Special.get('dotnum_' + stand_num) - 1)
    if (Set_Special.get('dotnum_' + stand_num) > 0) {
      var new_status = [['dot', dot_para[0] + '/' + (global_frame + 10)], 10] // 类似榴弹
      var list_status = Set_Status.get(stand_num)
      list_status.push(new_status)
      Set_Status.set(stand_num, list_status)
    }
  }
  else if (situation === 'grenade') {
    Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    var grenade_para = status[0][1].split('/')
    if (grenade_para[0] === '-1') {
      if (is_this(stand_num, 2003)) { // kiana skill
        grenade_para[0] = ((Set_Base.get(stand_num)).Info).get('critdmg')
      }
    }
    var damage_explode = 0
    if (is_this(stand_num, 2002) && parseFloat(grenade_para[0]) === 8) { // 压轴甜点第一次8倍攻击
      damage_explode = ((Set_Base.get(stand_num)).Info).get('dmg') * parseFloat(grenade_para[0])
      damage_explode = Math.ceil(damage_explode * explain_fgl_ff('single'))
    } else {
      damage_explode = ((Set_Base.get(stand_num)).Info).get('dmg') * parseFloat(grenade_para[0])
      damage_explode = Math.ceil(damage_explode * explain_fgl_ff('aoe'))
    }
    var current_time = parseInt(grenade_para[1])
    recordData(stand_num, current_time, 0)
    recordData(stand_num, current_time, damage_explode)
  }
  else if (situation === 'fal') {
    if (Set_Special.get('fal_' + stand_num) > 1) {
      Set_Special.set('fal_' + stand_num, Set_Special.get('fal_' + stand_num) - 1)
      var new_status = [['fal', 5 + '/' + (global_frame + 30)], 30] // fal类似grenade
      var list_status = Set_Status.get(stand_num)
      list_status.push(new_status)
      Set_Status.set(stand_num, list_status)
    }
    else Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    var grenade_para = status[0][1].split('/')
    var damage_explode = ((Set_Base.get(stand_num)).Info).get('dmg') * parseInt(grenade_para[0])
    damage_explode = Math.ceil(damage_explode * explain_fgl_ff('aoe'))
    var current_time = parseInt(grenade_para[1])
    recordData(stand_num, current_time, 0)
    recordData(stand_num, current_time, damage_explode)
  }
  else if (situation === 'snipe') {
    var current_Info = (Set_Base.get(stand_num)).Info
    var labels = status[0][1]
    var list_labels = labels.split('/') // ratio,arm,crit,eva
    var ratio = parseFloat(list_labels[0])
    if (is_this(stand_num, 202)) { // 临界点射击
      if (Set_Special.get('thunder_' + stand_num) != true) {
        Set_Special.set('thunder_' + stand_num, true)
        ratio = 12
      } else {
        Set_Special.set('thunder_' + stand_num, false)
        ratio = 0
      }
    }
    var num_leftsnipe = Set_Special.get('snipe_num_' + stand_num)
    num_leftsnipe--
    Set_Special.set('snipe_num_' + stand_num, num_leftsnipe)
    var damage_snipe_single = 0
    var this_ID = list_tdoll[stand_num][1].ID
    if (this_ID === 180 || this_ID === 192) { // 贯通射击
      damage_snipe_single = Math.ceil(2 * ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_js05_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
      }
    } else if (this_ID === 252) { // 震荡冲击弹
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_KSVK_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(0.5 * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
      }
    } else if (this_ID === 260) { // 劲爆乐园
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single')) + Math.ceil(2 * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
    } else if (this_ID === 261) { // 乱石崩云
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      damage_snipe_single += Math.ceil(1.5 * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
    } else if (this_ID === 151) { // 终结打击
      damage_snipe_single = Math.ceil(1000 * explain_fgl_ff('single'))
    } else if (this_ID === 152 || this_ID === 159 || this_ID === 190) { // 2倍震荡打击
      damage_snipe_single = Math.ceil(2 * current_Info.get('dmg') * explain_fgl_ff('single'))
      var damage_snipe_aoe = 0
      if (enemy_num_left >= 3) {
        damage_snipe_aoe = Math.ceil(2 * 2 * current_Info.get('dmg') * explain_fgl_ff('around_single'))
        damage_snipe_single += damage_snipe_aoe
      } else {
        damage_snipe_aoe = Math.ceil((enemy_num_left - 1) * 2 * current_Info.get('dmg') * explain_fgl_ff('around_single'))
        damage_snipe_single += damage_snipe_aoe
      }
    } else if (this_ID === 153) { // 2.5倍震荡打击
      damage_snipe_single = Math.ceil(2.5 * current_Info.get('dmg') * explain_fgl_ff('single'))
      var damage_snipe_aoe = 0
      if (enemy_num_left >= 3) {
        damage_snipe_aoe = Math.ceil(2 * 2.5 * current_Info.get('dmg') * explain_fgl_ff('around_single'))
        damage_snipe_single += damage_snipe_aoe
      } else {
        damage_snipe_aoe = Math.ceil((enemy_num_left - 1) * 2.5 * current_Info.get('dmg') * explain_fgl_ff('around_single'))
        damage_snipe_single += damage_snipe_aoe
      }
    } else { // 普通狙击
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
    }
    // 狙击标识符识别
    if (list_labels[1] != 'armless') { // 有视护甲
      damage_snipe_single = Math.max(1, Math.ceil(damage_snipe_single * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
    }
    if (list_labels[2] != 'critless') { // 能够暴击
      if (Math.random() <= current_Info.get('crit') || Set_Special.get('must_crit_' + stand_num) === true) damage_snipe_single *= current_Info.get('critdmg')
    }
    if (list_labels[3] != 'evaless') { // 可以回避
      if (Math.random() > current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) damage_snipe_single = 0
    }
    damage_snipe_single = Math.ceil(damage_snipe_single * this_formation(stand_num))
    var current_time = Set_Special.get('snipe_arriveframe_' + stand_num)
    recordData(stand_num, current_time, 0)
    recordData(stand_num, current_time, damage_snipe_single)
    if (is_this(stand_num, 1039) && document.getElementById('special_mosin_skillkill_' + (stand_num + 1)).checked) { // 苍白收割者：沉稳射击击杀目标
      changeStatus(stand_num, 'self', 'rof', '0.3', 5)
    }
    if (is_this(stand_num, 2009)) { // 克莉尔：再接再厉
      var dps_list = []
      for (var n = 0; n < 9; n++) {
        if (n != stand_num && list_tdoll[n][1] != null) {
          var last_dmg = Set_Data.get(n)[Set_Data.get(n).length - 1][1]
          dps_list.push([n, last_dmg])
        }
      }
      var add_len = dps_list.length
      if (add_len > 0) {
        dps_list.sort(compare_dps)
        var scan_n = 0
        for (; scan_n < add_len; scan_n++) {
          if (Set_Special.get('clearbuff_' + dps_list[scan_n][0]) === undefined || Set_Special.get('clearbuff_' + dps_list[scan_n][0]) < global_frame) { // no buff
            Set_Special.set('clearbuff_' + dps_list[scan_n][0], global_frame + 90)
            if (Set_Special.get('clearexclusive_' + stand_num) === true) {
              changeStatus(dps_list[scan_n][0], 'self', 'dmg', '0.4', 3)
              changeStatus(dps_list[scan_n][0], 'self', 'acu', '0.4', 3)
              break
            } else {
              changeStatus(dps_list[scan_n][0], 'self', 'dmg', '0.3', 3)
              changeStatus(dps_list[scan_n][0], 'self', 'acu', '0.3', 3)
              break
            }
          }
        }
      }
    }
    if (num_leftsnipe === 0) { // 狙击次数完毕
      if (!is_this(stand_num, 257)) Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    } else {
      var new_n = labels.length
      for (var nn = 0; nn < new_n; nn++) {
        if (labels[nn] === '/') {
          labels = labels.substr(nn + 1)
          break
        }
      }
      var time_init = Set_Special.get('snipe_interval_' + stand_num)
      Set_Special.set('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
      changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    }
  }
}

function reactInjury () {
  if (document.getElementById('enemy_hp_check').checked) enemy_num_left = Math.ceil((enemy_hp * enemy_form * enemy_num - global_total_dmg) / (enemy_hp * enemy_form))
  if (enemy_num_left <= 0) enemy_still_alive = false
  if (enemy_still_alive) {
    if (Set_EnemyStatus.get('attackframe') === undefined) Set_EnemyStatus.set('attackframe', rof_to_frame_enemy(enemy_rof)) // init attack
    if (Set_EnemyStatus.get('attackframe') <= global_frame) { // 敌人发起进攻
      var shoot_target = get_attack_target() // 找个人打
      if (shoot_target === 9) {
        for (stn of queue_tdoll) {
          if (Set_EnemyStatus.get('stopfire') === undefined || Set_EnemyStatus.get('stopfire') < global_frame) injury(stn)
        }
      } else {
        if (Set_EnemyStatus.get('stopfire') === undefined || Set_EnemyStatus.get('stopfire') < global_frame) shoot_target = injury(shoot_target)
      }
      Set_EnemyStatus.set('attackframe', rof_to_frame_enemy(enemy_rof) + global_frame)
    }
  }
}

function injury (shoot_target) {
  var current_Info = Set_Base.get(shoot_target).Info
  var accuracy = enemy_acu
  var damage = enemy_dmg
  // is_this(shoot_target, 59) && 
  if (Set_EnemyStatus.get('aks_debuff' + shoot_target) >= global_frame) { // 如果攻击AK-74U且排斥反应生效
    if (enemy_type === 'normal') {
      accuracy *= 0.5
      damage *= 0.5
    } else {
      accuracy *= 0.75
      damage *= 0.75
    }
  }
  var accuracy_rate = accuracy / (accuracy + current_Info.get('eva'))
  var single_hp = current_Info.get('hp') / 5
  var suffer_hp = get_left_hp(shoot_target, single_hp)
  recordData_suffer(shoot_target, global_frame, 0)
  for (var i = 0; i < enemy_num_left * enemy_form; i++) {
    if (!is_protected(shoot_target) && (Math.random() <= accuracy_rate || Set_Special.get('enemy_maxacu') === true)) { // 该次攻击命中
      var record_dmg = Math.max(1, Math.ceil(damage * (Math.random() * 0.3 + 0.85) + Math.min(2, enemy_ap - current_Info.get('arm'))))
      if (Set_Special.get('ffmax' + shoot_target) != undefined) { // 存在力场
        var overdbk = 0
        var ff_target = current_Info.get('ff') - enemy_dbk // 力场损毁
        if (ff_target < 0) { // 破防和溢出破防
          overdbk = Math.abs(ff_target)
          ff_target = 0
        }
        current_Info.set('ff', ff_target)
        var ff_ratio = 1 - current_Info.get('ff') / Set_Special.get('ffmax' + shoot_target)
        record_dmg = Math.ceil(record_dmg * ff_ratio + overdbk / 10)
      } else {
        record_dmg += Math.ceil(enemy_dbk / 10)
      }
      if (Set_Special.get('reduce_dmg' + shoot_target) != undefined) {
        record_dmg = Math.ceil(record_dmg * Set_Special.get('reduce_dmg' + shoot_target))
      }
      var record_limit = suffer_hp
      var shield_value = current_Info.get('shield')
      // 结算护盾
      if (shield_value > 0) {
        shield_value -= record_dmg
        if (shield_value < 0) {
          record_dmg = Math.abs(shield_value)
          suffer_hp += shield_value
          shield_value = 0
        } else {
          record_dmg = 0
        }
        current_Info.set('shield', shield_value)
      } else {
        suffer_hp -= record_dmg
      }
      if (is_activate_protect(suffer_hp, single_hp, shoot_target)) { // 当次攻击会触发大破保护
        var new_protect_status = Set_Special.get('damage_protect') // 触发保护
        Set_Special.set('damage_protect_time' + shoot_target, global_frame + 45) // 无敌1.5秒
        new_protect_status[shoot_target] = false
        Set_Special.set('damage_protect', new_protect_status)
        suffer_hp = Math.ceil(single_hp * 0.5)
        record_dmg = get_left_hp(shoot_target, single_hp) - suffer_hp
      } else {
        if (suffer_hp <= 0) { // 掉人
          list_tdoll[shoot_target][0] -= 1
          record_dmg = record_limit
          suffer_hp = single_hp
        }
      }
      recordData_suffer(shoot_target, global_frame, record_dmg) // 记录伤害
      if (list_tdoll[shoot_target][0] === 0) { // 当前目标被打死
        shoot_target = get_attack_target() // 换个人打
        if (shoot_target === -1) { // 没人可打
          enemy_still_alive = false // 终止模拟
          break // 没人可打
        } else if (shoot_target === 9) {
          var all_dead = true
          for (var stn of queue_tdoll) {
            if (list_tdoll[stn][0] > 0) {
              all_dead = false
              break
            }
          }
          if (all_dead) enemy_still_alive = false // 终止模拟
          break
        } else {
          break
        }
      }
    }
  }
  return shoot_target
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
  var dmg_e = [0, 0, 0, (list_tdoll[num][1].Equip)[3].dmg] // 如果装备独头弹，multi将变为3
  for (var en = 0; en < 4; en++) {
    if ((list_tdoll[num][1].Equip)[en].dmg === 2.01) { // 独头弹
      dmg_e[en] = 0
      Set_Special.set('sg_ammo_type_' + num, 'single')
    } else {
      dmg_e[en] = (list_tdoll[num][1].Equip)[en].dmg
    }
  }
  var full_property = [
    list_tdoll[num][1].Type,
    (list_tdoll[num][1].Property).hp,
    (list_tdoll[num][1].Property).dmg + dmg_e[0] + dmg_e[1] + dmg_e[2] + dmg_e[3],
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
  Info.set('dmg', full_property[2])
  if (blockSet[num].get(str_tn + 'acu') != undefined) mul[1] += blockSet[num].get(str_tn + 'acu')
  if (blockSet[num].get('allacu') != undefined) mul[1] += blockSet[num].get('allacu')
  full_property[3] *= mul[1]
  Info.set('acu', Math.floor(full_property[3]))
  if (blockSet[num].get(str_tn + 'eva') != undefined) mul[2] += (blockSet[num].get(str_tn + 'eva'))
  if (blockSet[num].get('alleva') != undefined) mul[2] += blockSet[num].get('alleva')
  full_property[4] *= mul[2]
  Info.set('eva', Math.floor(full_property[4]))
  if (blockSet[num].get(str_tn + 'rof') != undefined) mul[3] += blockSet[num].get(str_tn + 'rof')
  if (blockSet[num].get('allrof') != undefined) mul[3] += blockSet[num].get('allrof')
  full_property[5] *= mul[3]
  Info.set('rof', Math.floor(full_property[5]))
  if (blockSet[num].get(str_tn + 'arm') != undefined) mul[4] += blockSet[num].get(str_tn + 'arm')
  if (blockSet[num].get('allarm') != undefined) mul[4] += blockSet[num].get('allarm')
  full_property[6] *= mul[4]
  Info.set('arm', Math.floor(full_property[6]))
  if (blockSet[num].get(str_tn + 'crit') != undefined) mul[5] += blockSet[num].get(str_tn + 'crit')
  if (blockSet[num].get('allcrit') != undefined) mul[5] += blockSet[num].get('allcrit')
  full_property[7] *= mul[5]
  Info.set('crit', full_property[7])
  Info.set('cs', full_property[8]); Info.set('critdmg', full_property[9]); Info.set('ap', full_property[10]); Info.set('ff', full_property[11]); Info.set('shield', full_property[12])
  if (blockSet[num].get(str_tn + 'cld') != undefined) {
    full_property[13] += blockSet[num].get(str_tn + 'cld')
  }
  if (full_property[13] > 0.3) full_property[13] = 0.3
  Info.set('cld', full_property[13])
  for (var i = 0; i < 3; i++) {
    if ((list_tdoll[num][1].Equip)[i].na === -100) { // 夜视能力为负即特殊功能标志
      if (list_tdoll[num][1].ID === 2009) {
        Set_Special.set('clearexclusive_' + num, true)
        full_property[14] += 100
      } else if (list_tdoll[num][1].ID === 2009) {
        Set_Special.set('failexclusive_' + num, true)
        full_property[14] += 100
      } else if (list_tdoll[num][1].ID === 7) {
        Set_Special.set('stechkinexclusive_' + num, true)
      }
    } else full_property[14] += (list_tdoll[num][1].Equip)[i].na
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
function rof_to_frame (num_tn, rof, ID) {
  var base_rof = Math.floor(rof)
  var str_tn = num_to_name(num_tn)
  var shootframe = 100
  if (str_tn == 'hg' || str_tn == 'ar' || str_tn == 'smg' || str_tn == 'rf') {
    if (ID === 256) {
      shootframe = 30
    } else {
      if (base_rof >= 120) shootframe = 12
      else if (base_rof <= 15) shootframe = 100
      else shootframe = Math.floor(1500 / base_rof)
    }
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
function rof_to_frame_enemy (base_rof) {
  var shootframe = 100
  if (base_rof >= 120) shootframe = 12
  else if (base_rof <= 15) shootframe = 100
  else shootframe = Math.floor(1500 / base_rof)
  return shootframe
}
function fil_to_frame (filling) {
  if (filling >= 1200) filling = 1200
  return Math.ceil(45000 / (300 + filling))
}

function createBase (Area, Info) {
  var Base = {}
  Base.Area = Area // 影响格位置
  Base.Info = Info // 具体属性
  return Base
}

function recordData (stand_num, current_time, increment) {
  var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
  Set_Data.get(stand_num).push([current_time, lastData + increment])
  global_total_dmg += increment
}
function recordData_HF () {
  var hfn = arguments['0']
  var current_time = arguments['1']
  var command = arguments['2']
  var lastData = (Set_Data_HF.get(hfn))[(Set_Data_HF.get(hfn)).length - 1][1]
  var increment = 0
  if (command === undefined) { // 正常输出
    increment = explain_heavyfire(hfn)
    Set_Data_HF.get(hfn).push([current_time, lastData])
    Set_Data_HF.get(hfn).push([current_time, lastData + increment])
  } else if (command === 'lastrecord') {
    Set_Data_HF.get(hfn).push([current_time, lastData])
  } else if (command === 'AT4_burn') {
    Set_Data_HF.get(hfn).push([current_time, lastData])
    Set_Data_HF.get(hfn).push([current_time, lastData + arguments['3']])
  }
  global_total_dmg += increment
}
function recordData_suffer (stand_num, current_time, decrement) {
  var lastData = (Set_Data_S.get(stand_num))[(Set_Data_S.get(stand_num)).length - 1][1]
  Set_Data_S.get(stand_num).push([current_time, lastData - decrement])
}

function formater_DPS (e) { return lib_language.main_formatDPS_1 + e.x + lib_language.main_formatDPS_2 + e.y }
function formater_ALL (e) { return 'x=' + e.x + ', y=' + e.y }

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

// 初始化函数
function init_resetAllConfig () { // 重置所有数据
  queue_tdoll = [] // 清空站位队列
  global_total_dmg = 0 // 总伤害重置
  // 重置存在开关
  for (var i = 0; i < 9; i++) gs_tdoll[i] = false
  for (var i = 0; i < 5; i++) gs_HF[i] = false
  gs_fairy = false
  last_DPS = 0
  not_init = false // 此阶段所有buff皆不可复读
  Set_Status.clear(); Set_Skill.clear(); Set_Base.clear(); Set_Special.clear(); Set_EnemyStatus.clear(); Set_Data.clear(); Set_Data_HF.clear(); Set_Data_S.clear(); Set_Data_S_Percentage.clear()
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) queue_tdoll.push(i) // 统计战术人形站位
    list_tdoll[i][0] = 5 // 恢复编制
  }
  for (var i = 0; i < 18; i++) list_show[i] = true // 初始化人形显示
  for (var i = 0; i < 2; i++) list_show_fairy[i] = true // 初始化妖精显示
  for (var i = 0; i < 5; i++) list_show_HF[i] = true // 初始化重装部队显示
  fragile_main = 1; fragile_all = 1
  Set_Special.set('can_add_python', true)
  Set_Special.set('can_add_karm1891', true)
  Set_Special.set('damage_protect', [true, true, true, true, true, true, true, true, true]) // 大破保护初始化
  if (is_exist_someone(4)) Set_Special.set('can_add_python', false) // 能否添加蟒蛇
  if (is_exist_someone(197)) Set_Special.set('can_add_karm1891', false) // 能否添加CarcanoM1891
  if (daytime === 1) Set_Special.set('sunrise', 'day')
  else if (daytime === 2) Set_Special.set('sunrise', 'night')
  for (var i = -2; i < 9; i++) Set_Status.set(i, []) // 初始化空状态表，-2敌人，-1全体，0~8站位，9妖精
  time = Math.floor(30 * parseFloat(document.getElementById('time_battle').value)) // 总帧数，fps=30
  init_time = Math.floor(30 * parseFloat(document.getElementById('time_init').value)) // 接敌帧数
}
function init_loadPrepareStatus () { // 初始化战前属性
  // 存在性和图形显示管理
  if (display_type === 'damage') {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) gs_tdoll[i] = true
      list_show[i + 9] = false
    }
  } else if (display_type === 'suffer') {
    for (var i = 0; i < 9; i++) list_show[i] = false
    list_show_fairy[0] = false
    for (i = 0; i < 5; i++) list_show_HF[i] = false
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) gs_tdoll[i] = true
    }
  }
  if (fairy_no > 0) gs_fairy = true
  for (var i = 0; i < 5; i++) if (list_HF[i][0]) gs_HF[i] = true
  // 承伤顺序
  if (display_type === 'suffer') {
    if (document.getElementById('inj_type1').checked) inj_order = '' + document.getElementById('inj_order').value
    else inj_order = 'all'
  }
  // 出战属性和初始状态
  for (var i = 0; i < 10; i++) Set_Data.set(i, [[0, 0]]) // 包括妖精在内的输出数据初始化
  for (var i = 0; i < 9; i++) {
    Set_Data_S.set(i, [[0, 0]]) // 生命值初始化
    Set_Data_S_Percentage.set(i, [[0, 0]])
  }
  for (var i = 0; i < 5; i++) { // 重装部队数据初始化
    Set_Data_HF.set(i, [[0, 0]])
    if (list_HF[i][0]) { // 支援中的重装设定初始到达时间1s
      Set_Special.set('HF_causedamage' + i, false)
      Set_Special.set('HF_incoming' + i, 30)
      Set_Special.set('HF_reloading' + i, fil_to_frame(list_HF[i][1].v4 + list_HF[i][2].v4 + list_HF[i][3].v4))
      if (i === 0) { // BGM-71 技能
        Set_Special.set('BGM_supermissile', true) // 充能导弹
        Set_Special.set('BGM_supermissile_reload', 0)
        Set_Special.set('BGM_buff_filling', 1) // 装填流程
        Set_Special.set('BGM_buff_deependmg', 1) // 猎杀趣味
      } else if (i === 1) { // AGS-30技能
        Set_Special.set('AGS_supergrenade', true) // 超级榴弹
        Set_Special.set('AGS_supergrenade_reload', 0)
      } else if (i === 2) { // 2B-14技能
        Set_Special.set('2B14_airstrike', true) // 阵地轰炸
        Set_Special.set('2B14_airstrike_reload', 0)
        Set_Special.set('2B14buff', true) // 可以施加干扰帷幕buff
      } else if (i === 3) {
        Set_Special.set('M2_curveattack', true) // 曲线雷击
        Set_Special.set('M2_curveattack_reload', 0)
        Set_Special.set('M2_buff_accuracy', 0) // 装填惯性
      } else if (i === 4) {
        Set_Special.set('AT4_buff', true) // 可以施加致盲闪光buff
        Set_Special.set('AT4_burn_next', -1) // 烈性灼烧buff生效时间
        Set_Special.set('AT4_burn_leftnum', 0) // 烈性灼烧buff剩余次数
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      Set_Base.set(i, getBaseProperty(i)) // 计算出战属性
      if (display_type === 'suffer') { // 初始化生命值
        Set_Data_S.set(i, [[0, Set_Base.get(i).Info.get('hp')]])
        Set_Data_S_Percentage.set(i, [[0, 1]])
      }
      Set_Special.set('attack_permission_' + i, 'fire_all') // 初始化开火许可，有状态：fire_all, fire_four, stop
      if (is_this(i, 194)) { // K2热力过载
        Set_Special.set('k2_' + i, 'fever')
        Set_Special.set('k2_temp_' + i, 0)
        Set_Special.set('k2_dmgup_' + i, 0)
      } else if (is_this(i, 213)) { // CMS
        if (document.getElementById('special_cms_' + (i + 1) + '_1').checked) changeStatus(i, 'self', 'eva', 0.65, -1) // 亚音速弹
        else if (document.getElementById('special_cms_' + (i + 1) + '_2').checked) changeStatus(i, 'self', 'dmg', 0.85, -1) // 勺尖弹
        else if (document.getElementById('special_cms_' + (i + 1) + '_3').checked) changeStatus(i, 'self', 'acu', 2, -1) // 标准弹
      } else if (is_this(i, 231)) { // M82A1
        if (document.getElementById('special_m82a1_' + (i + 1) + '_0').checked) Set_Special.set('m82a1_win_' + i, 0) // 0胜场
        else if (document.getElementById('special_m82a1_' + (i + 1) + '_1').checked) Set_Special.set('m82a1_win_' + i, 1) // 1胜场
        else if (document.getElementById('special_m82a1_' + (i + 1) + '_2').checked) Set_Special.set('m82a1_win_' + i, 2) // 2胜场
        else if (document.getElementById('special_m82a1_' + (i + 1) + '_3').checked) Set_Special.set('m82a1_win_' + i, 3) // 3胜场
      } else if (is_this(i, 248)) { // 杰里科：深红月蚀被动
        Set_Special.set('jericho_exist', true)
        if (Set_Special.get('jericho_standset') === undefined) {
          Set_Special.set('jericho_standset', [i])
        } else {
          Set_Special.set('jericho_standset', (Set_Special.get('jericho_standset')).concat(i))
        }
      } else if (is_this(i, 256)) { // 隼初始1发特殊子弹
        Set_Special.set('falcon_' + i, 0)
      } else if (is_this(i, 261)) { // QBU-88射击层数
        Set_Special.set('qbu88_' + i, 0)
      } else if (is_this(i, 264)) { // 绍沙百合纹章
        Set_Special.set('chauchat_' + i, 1)
        Set_Special.set('chauchat_nextget_' + i, 120)
        Set_Special.set('chauchat_nextreload_' + i, 0)
      } else if (is_this(i, 1005)) { // 七音之凯歌buff预备发动
        Set_Special.set('m1895_' + i, 0)
      } else if (is_this(i, 1039)) { // 莫辛纳甘：攻击被动
        Set_Special.set('mosin_numneed_' + i, parseInt(document.getElementById('special_mosin_attackkill_' + (i + 1)).value))
        Set_Special.set('mosin_' + i, Set_Special.get('mosin_numneed_' + i))
        Set_Special.set('mosin_bufftime_' + i, 0)
      } else if (is_this(i, 1093)) { // IDW电光大狂欢初始3层
        changeStatus(i, 'self', 'dmg', '0.2', 2)
        changeStatus(i, 'self', 'dmg', '0.2', 4)
        changeStatus(i, 'self', 'dmg', '0.2', 6)
        changeStatus(i, 'self', 'rof', '0.1', 2)
        changeStatus(i, 'self', 'rof', '0.1', 4)
        changeStatus(i, 'self', 'rof', '0.1', 6)
      }
    }
  }
  if (!Set_Special.get('can_add_python')) { // 蟒蛇的复读及主动层数初始化
    Set_Special.set('python_dmg', 0)
    Set_Special.set('python_rof', 0)
    Set_Special.set('python_acu', 0)
    Set_Special.set('python_eva', 0)
    Set_Special.set('python_crit', 0)
    Set_Special.set('python_active', 6)
  }
  for (var i = 0; i < 9; i++) { // 载入技能
    if (list_tdoll[i][1] != null) {
      var list_Skill = []
      list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // 载入普攻
      for (var v_skill of list_tdoll[i][1].Skill) {
        list_Skill.push([v_skill, Math.ceil(30 * (v_skill.init_cld) * (1 - Set_Base.get(i).Info.get('cld')))]) // 载入技能表
      }
      Set_Skill.set(i, list_Skill)
    }
  }
  if (Set_Special.get('sunrise') === 'night') { // 夜战BUFF
    for (var i = 0; i < 9; i++) {
      if (Set_Base.get(i) != undefined) {
        var night_decline = (100 - (Set_Base.get(i).Info).get('night')) * (-0.9)
        if (night_decline < 0) {
          changeStatus(i, 'self', 'acu', (night_decline / 100), -1)
        }
      }
    }
  }
  // 特殊设定
  if (document.getElementById('check_init_critmax').checked) { // 全体必暴
    for (var i = 0; i < 9; i++) Set_Special.set('must_crit_' + i, true)
  }
  // MG SG 隼 的初始装弹，已经初始层buff
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (Set_Base.get(i).Info.get('type') === 5 || Set_Base.get(i).Info.get('type') === 6 || is_this(i, 256)) {
        Set_Special.set('clipsize_' + i, Set_Base.get(i).Info.get('cs'))
        if (is_this(i, 253)) { // 刘易斯开场第一层buff
          Set_Special.set('angel_strength' + i, 1)
        }
        if (is_this(i, 1089)) Set_Special.set('bren_buff_' + i, 0) // 布伦mod
      }
    }
  }
  // 妖精属性和不可复读buff
  if (fairy_no > 0) {
    var fairy_info = lib_fairy.get(fairy_no)
    var list_property = (fairy_info.property).split('/')
    var list_value = (fairy_info.value).split('/')
    var fairy_list_len = list_property.length
    for (var i = 0; i < fairy_list_len; i++) {
      changeStatus(-1, 'all', list_property[i], list_value[i], -1)
    }
    if (document.getElementById('fairyskill_active').checked) {
      if (fairy_no === 11) { // 机场解放减益
        changeStatus(-1, 'all', 'dmg', '-0.4', -1)
        changeStatus(-1, 'all', 'acu', '-0.4', -1)
        changeStatus(-1, 'all', 'eva', '-0.4', -1)
        changeStatus(-1, 'all', 'arm', '-0.4', -1)
        changeStatus(-1, 'all', 'crit', '-0.4', -1)
      }
    }
  }
}
function init_loadEnemyInfo () {
  enemy_still_alive = true
  if (document.getElementById('switch_normal').checked) enemy_type = 'normal'
  else if (document.getElementById('switch_elite').checked) enemy_type = 'elite'
  else if (document.getElementById('switch_boss').checked) enemy_type = 'boss'
  enemy_form = parseInt(document.getElementById('enemy_form').value)
  enemy_num = parseInt(document.getElementById('enemy_num').value)
  aoe_num = enemy_num
  if (display_type === 'damage') {
    enemy_eva = parseInt(document.getElementById('enemy_eva').value)
    enemy_arm = parseInt(document.getElementById('enemy_arm').value)
    enemy_forcefield = parseInt(document.getElementById('enemy_forcefield').value)
    enemy_forcefield_max = parseInt(document.getElementById('enemy_forcefield_max').value)
    enemy_num_left = enemy_num
  } else if (display_type === 'suffer') {
    enemy_dmg = parseInt(document.getElementById('enemy_dmg').value)
    enemy_rof = parseInt(document.getElementById('enemy_rof').value)
    if (document.getElementById('enemy_acumax').checked) Set_Special.set('enemy_maxacu', true)
    else enemy_acu = parseInt(document.getElementById('enemy_acu').value)
    enemy_ap = parseInt(document.getElementById('enemy_ap').value)
    enemy_dbk = parseInt(document.getElementById('enemy_dbk').value)
    enemy_num_left = enemy_num
    if (document.getElementById('enemy_hp_check').checked === true) {
      enemy_hp = parseInt(document.getElementById('enemy_hp').value)
      enemy_eva_2 = parseInt(document.getElementById('enemy_eva_2').value)
      enemy_arm_2 = parseInt(document.getElementById('enemy_arm_2').value)
      enemy_forcefield_2 = parseInt(document.getElementById('enemy_forcefield_2').value)
      enemy_forcefield_2_max = parseInt(document.getElementById('enemy_forcefield_2_max').value)
    }
  }
}
function init_loadFairy (common_position) {
  if (document.getElementById('fairyskill_active').checked) { // 可被蟒蛇复读的妖精技能
    if (fairy_no === 1) { // 战斗效率
      changeStatus(common_position, 'all', 'dmg', '0.2', 20)
      changeStatus(common_position, 'all', 'rof', '0.1', 20)
    } else if (fairy_no === 2) { // 怒无限强
      changeStatus(common_position, 'all', 'acu', '0.5', 20)
      changeStatus(common_position, 'all', 'crit', '0.25', 20)
    } else if (fairy_no === 3) { // 防暴强化
      for (var i = 0; i < 9; i++) {
        if (gs_tdoll[i] && is_this_type(i, 6)) {
          changeStatus(i, 'self', 'arm', '1.5', 20)
        }
      }
    } else if (fairy_no === 4) { // 能量护盾
      for (var i = 0; i < 9; i++) {
        if (gs_tdoll[i] && is_this_type(i, 3)) {
          Set_Base.get(i).Info.set('shield', 150)
        }
      }
    } else if (fairy_no === 5) { // 临时装甲
      Set_Special.set('temp_defence', 600)
      for (var i = 0; i < 9; i++) {
        if (gs_tdoll[i]) Set_Special.set('reduce_dmg' + i, 0.7)
      }
    } else if (fairy_no === 6) { // 嘲讽靶机
      Set_Special.set('provoke', 1600)
    } else if (fairy_no === 7) { // 狙击指令
      Set_Special.set('fairy_skillon', true)
      Set_Special.set('fairy_skilltime', 300)
    } else if (fairy_no === 8) { // 炮击指令
      Set_Special.set('fairy_skillon', true)
      Set_Special.set('fairy_skilltime', 150)
    } else if (fairy_no === 9) { // 致命空袭
      Set_Special.set('fairy_skillon', true)
      Set_Special.set('fairy_skilltime', 30)
    } else if (fairy_no === 10) { // 增援人形
      changeStatus(common_position, 'all', 'eva', '0.1', 20)
    } else if (fairy_no === 13) { // 阵地死神（暂时没做）
      //
    } else if (fairy_no === 14) { // 紧急堡垒
      changeStatus(common_position, 'all', 'dmg', '0.3', -1)
      changeStatus(common_position, 'all', 'acu', '0.3', -1)
      changeStatus(common_position, 'all', 'eva', '0.3', -1)
      changeStatus(common_position, 'all', 'arm', '0.3', -1)
      changeStatus(common_position, 'all', 'crit', '0.3', -1)
    } else if (fairy_no === 17) { // 夜间照明
      if (Set_Special.get('sunrise') === 'night') changeStatus(common_position, 'all', 'acu', '0.3', 20)
    } else if (fairy_no === 19) { // 紧急开饭
      if (document.getElementById('special_fairyskill_0').checked) { // 随机
        var meal_type = Math.random()
        if (meal_type <= 0.2) {
          changeStatus(common_position, 'all', 'dmg', '0.2', 30)
        } else if (meal_type > 0.2 && meal_type <= 0.4) {
          changeStatus(common_position, 'all', 'rof', '0.2', 30)
        } else if (meal_type > 0.4 && meal_type <= 0.6) {
          changeStatus(common_position, 'all', 'acu', '0.3', 30)
        } else if (meal_type > 0.6 && meal_type <= 0.8) {
          changeStatus(common_position, 'all', 'eva', '0.25', 30)
        } else {
          // do nothing
        }
      } else if (document.getElementById('special_fairyskill_1').checked) {
        changeStatus(common_position, 'all', 'dmg', '0.2', 30)
      } else if (document.getElementById('special_fairyskill_2').checked) {
        changeStatus(common_position, 'all', 'rof', '0.2', 30)
      } else if (document.getElementById('special_fairyskill_3').checked) {
        changeStatus(common_position, 'all', 'acu', '0.3', 30)
      } else if (document.getElementById('special_fairyskill_4').checked) {
        changeStatus(common_position, 'all', 'eva', '0.25', 30)
      } else {
        // do nothing
      }
    } else if (fairy_no === 20) { // 夏末花火
      changeStatus(common_position, 'all', 'acu', '0.8', 10)
    } else if (fairy_no === 21) { // 爆竹迎春（暂时没做）
      //
    }
  }
  // 妖精天赋
  if (fairy_no > 0) {
    if (talent_no === 1) {
      Set_Special.set('talent_num', 1)
      Set_Special.set('talent_active_at', 239)
      changeStatus(common_position, 'all', 'dmg', '0.1', -1)
    }
    else if (talent_no === 2) changeStatus(common_position, 'all', 'dmg', '0.12', -1) // 杀1
    else if (talent_no === 3) changeStatus(common_position, 'all', 'dmg', '0.15', -1) // 杀2
    else if (talent_no === 4) changeStatus(common_position, 'all', 'acu', '0.2', -1) // 精1
    else if (talent_no === 5) changeStatus(common_position, 'all', 'acu', '0.25', -1) // 精2
    else if (talent_no === 6) changeStatus(common_position, 'all', 'eva', '0.15', -1) // 回1
    else if (talent_no === 7) changeStatus(common_position, 'all', 'eva', '0.2', -1) // 回2
    else if (talent_no === 8) changeStatus(common_position, 'all', 'arm', '0.08', -1) // 甲1
    else if (talent_no === 9) changeStatus(common_position, 'all', 'arm', '0.10', -1) // 甲2
    else if (talent_no === 10) changeStatus(common_position, 'all', 'crit', '0.4', -1) // 必1
    else if (talent_no === 11) changeStatus(common_position, 'all', 'crit', '0.5', -1) // 必2
    else if (talent_no === 12) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 3) { // 冲锋型
          changeStatus(i, 'self', 'dmg', '0.08', -1)
          changeStatus(i, 'self', 'eva', '0.12', -1)
        }
      }
    }
    else if (talent_no === 13) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 2) { // 突击型
          changeStatus(i, 'self', 'dmg', '0.1', -1)
          changeStatus(i, 'self', 'rof', '0.08', -1)
        }
      }
    }
    else if (talent_no === 14) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 4) { // 瞄准型
          changeStatus(i, 'self', 'dmg', '0.08', -1)
          changeStatus(i, 'self', 'rof', '0.10', -1)
        }
      }
    }
    else if (talent_no === 15) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 6) { // 坚韧型
          changeStatus(i, 'self', 'arm', '0.08', -1)
          changeStatus(i, 'self', 'crit', '0.2', -1)
        }
      }
    }
    else if (talent_no === 16) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 5) { // 镇压型
          changeStatus(i, 'self', 'dmg', '0.1', -1)
          changeStatus(i, 'self', 'acu', '0.15', -1)
        }
      }
    }
    else if (talent_no === 17) {
      for (var i = 0; i < 9; i++) {
        if (list_tdoll[i][1] != null && list_tdoll[i][1].Type === 1) { // 敏锐型
          changeStatus(i, 'self', 'eva', '0.1', -1)
          changeStatus(i, 'self', 'crit', '0.3', -1)
        }
      }
    }
  }
}

// 基本语义性函数
function compare_dps (pair_a, pair_b) { return pair_b[1] - pair_a[1]; }
function is_property (str) { return (str === 'dmg' || str === 'acu' || str === 'eva' || str === 'rof' || str === 'arm' || str === 'crit' || str === 'critdmg' || str === 'cs' || str === 'ap' || str === 'ff' || str === 'shield');}
function is_in_affect_of (stand_a, stand_b) { return Set_Base.get(stand_a).Area[stand_b]; }
function is_this (stand_num, ID) { return list_tdoll[stand_num][1].ID === ID }
function is_this_type (stand_num, type) {
  if (list_tdoll[stand_num][1].Type === type) return true
  return false
}
function is_exist_someone (ID) {
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (list_tdoll[i][1].ID === ID) return true
    }
  }
  return false
}
function is_protected (stand_num) {
  if (Set_Special.get('damage_protect')[stand_num]) return false // 尚未触发保护
  else {
    if (Set_Special.get('damage_protect_time' + stand_num) >= global_frame) return true // 正在保护期
    else return false
  }
}
function is_activate_protect (suffer_hp, single_hp, stand_num) {
  if (this_formation(stand_num) === 2) {
    if (Set_Special.get('damage_protect')[stand_num] && suffer_hp <= Math.ceil(single_hp / 2)) return true
  }
  return false
}
function explain_fgl_ff (damage_type) { // 解释伤害加成，力场减免+AOE计算+伤害加深，single单体, around_single周遭单体, aoe范围, around_aoe溅射
  // forcefield damage reduction 
  var ff_ratio = 1
  if (display_type === 'damage' && enemy_forcefield > 0) ff_ratio = 1 - enemy_forcefield / enemy_forcefield_max
  else if (display_type === 'suffer' && enemy_forcefield_2 > 0) ff_ratio = 1 - enemy_forcefield_2 / enemy_forcefield_2_max
  if (damage_type === 'single') return fragile_main * ff_ratio
  else if (damage_type === 'around_single') return fragile_all * ff_ratio
  else if (damage_type === 'aoe') {
    if (aoe_num <= enemy_num_left) return (fragile_main + (aoe_num - 1) * fragile_all) * enemy_form * ff_ratio
    else return (fragile_main + (enemy_num_left - 1) * fragile_all) * enemy_form * ff_ratio
  }
  else if (damage_type === 'around_aoe') {
    if (aoe_num <= enemy_num_left) return ((aoe_num - 1) * fragile_all) * enemy_form * ff_ratio
    else return ((enemy_num_left - 1) * fragile_all) * enemy_form * ff_ratio
  }
}
function explain_heavyfire (hfn) { // 解释重装伤害，包括：力场削减、是否命中、额外破防伤害、基础无视力场伤害
  var damage = this_dmg(hfn)
  var defencebreaking = this_dbk(hfn)
  var accuracy = this_acu(hfn)
  var accuracy_rate = 0.4
  var overdbk = 0
  var main_multi = fragile_main * enemy_form
  var aoe_multi = 1
  var target_arm = 0, target_eva = 0, target_forcefield = 0
  if (display_type === 'damage') {
    target_arm = enemy_arm
    target_eva = enemy_eva
    target_forcefield = enemy_forcefield
  } else if (display_type === 'suffer') {
    target_arm = enemy_arm_2
    target_eva = enemy_eva_2
    target_forcefield = enemy_forcefield_2
  }
  if (aoe_num <= enemy_num_left) aoe_multi = (aoe_num - 1) * fragile_all * enemy_form
  else aoe_multi = (enemy_num_left - 1) * fragile_all * enemy_form
  var damage_main = damage
  var damage_aoe = damage
  // 技能效果和AOE杀伤计算
  if (hfn === 0) { // BGM-71
    var is_sm = false
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    if (Set_Special.get('BGM_supermissile')) { // 超级导弹
      Set_Special.set('BGM_supermissile', false)
      Set_Special.set('BGM_supermissile_reload', 2)
      defencebreaking *= 1.6
      is_sm = true
    }
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    damage_main += overdbk
    damage_aoe += overdbk
    if (is_sm) damage_main *= 1.8 // 超级导弹1.8倍主目标杀伤
    if (Math.random() <= accuracy_rate) { // 命中
      damage_main *= 1.5 * Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_aoe *= 0.5 * Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 400 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 400 - target_arm)))
      if (Set_Special.get('BGM_buff_deependmg') < 5) Set_Special.set('BGM_buff_deependmg', Set_Special.get('BGM_buff_deependmg') + 1) // 猎杀趣味层数叠加
    } else {
      damage_main = 0
      damage_aoe = 0
    }
  } else if (hfn === 1) { // AGS-30
    accuracy *= 1.3 // AGS-30 聚焦经验
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    if (Set_Special.get('AGS_supergrenade')) {
      Set_Special.set('AGS_supergrenade', false)
      Set_Special.set('AGS_supergrenade_reload', global_frame + 90)
      damage_main *= 2.2
      damage_aoe *= 2.2
    }
    damage_main += overdbk
    damage_aoe += overdbk
    if (Math.random() <= accuracy_rate) { // 命中
      damage_main *= 0.33
      damage_aoe *= 0.33
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 80 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 80 - target_arm)))
      damage_main *= 3
      damage_aoe *= 3
      if (Math.random() <= 0.4) { // 穿甲震荡
        Set_Special.set('AGS_dbkbuff_num', 6)
        if (Set_Special.get('AGS_next_dbkbuff') === undefined) Set_Special.set('AGS_next_dbkbuff', global_frame + 30)
      }
    } else {
      damage_main = 0
      damage_aoe = 0
    }
  } else if (hfn === 2) { // 2B-14
    var extra_main = 0, extra_aoe = 0 // 无场额外杀伤
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    if (Set_Special.get('2B14_airstrike')) {
      Set_Special.set('2B14_airstrike', false)
      Set_Special.set('2B14_airstrike_reload', global_frame + 300)
      damage_main *= 1.8
      damage_aoe *= 1.8
    }
    if (target_forcefield <= 0) { // 皮肉教训
      extra_main = damage_main * 0.25
      extra_aoe = damage_aoe * 0.25
    }
    damage_main += overdbk
    damage_aoe += overdbk
    if (Math.random() <= accuracy_rate) { // 命中
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      extra_main = Math.max(1, Math.ceil(extra_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      extra_aoe = Math.max(1, Math.ceil(extra_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      if (Math.random() <= 0.4) { // 干扰帷幕
        if (Set_Special.get('2B14buff')) {
          Set_Special.set('2B14buff', false)
          var status_2B14_switch = [['enemy_eva', 1], 150] // 管控防止叠加
          var status_dmg = [['enemy_dmg', 0.88], 150]
          var status_acu = [['enemy_acu', 0.88], 150]
          Set_Status.get(-2).push(status_2B14_switch)
          Set_Status.get(-2).push(status_dmg)
          Set_Status.get(-2).push(status_acu)
          endStatus(-1, status_2B14_switch, 'enemy_get')
          endStatus(-1, status_dmg, 'enemy_get')
          endStatus(-1, status_acu, 'enemy_get')
        }
      }
      damage_main += extra_main
      damage_aoe += extra_aoe
    } else {
      damage_main = 0
      damage_aoe = 0
    }
  } else if (hfn === 3) {
    var is_curve = false
    accuracy *= Math.pow(1.1, Set_Special.get('M2_buff_accuracy')) // M2 装填惯性
    if (Set_Special.get('M2_buff_accuracy') < 3) {
      Set_Special.set('M2_buff_accuracy', Set_Special.get('M2_buff_accuracy') + 1)
    }
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    if (Set_Special.get('M2_curveattack')) { // 曲线雷击
      Set_Special.set('M2_curveattack', false)
      Set_Special.set('M2_curveattack_reload', 2)
      defencebreaking *= 1.6
      is_curve = true
    }
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    damage_main += overdbk
    damage_aoe += overdbk
    if (is_curve) {
      damage_main *= 1.2
      damage_aoe *= 1.2
    }
    // 致命干扰 回避buff计算
    var list_random = []
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i]) list_random.push(i)
    }
    var len_random = list_random.length
    if (len_random > 0) {
      for (var i = 0; i < enemy_num_left; i++) { // 每存在一组敌方单位增加一个buff
        var luck_girl = list_random[Math.floor(Math.random() * len_random)]
        if (Set_Special.get('M2_buff' + luck_girl) === undefined) {
          Set_Special.set('M2_buff' + luck_girl, 1)
          changeStatus(luck_girl, 'self', 'eva', 0.1, 5)
          changeStatus(luck_girl, 'self', 'acu', 0.1, 5)
          changeStatus(luck_girl, 'self', 'acu', 0, 5) // 标识状态结束
        } else if (Set_Special.get('M2_buff' + luck_girl) < 3) {
          Set_Special.set('M2_buff' + luck_girl, Set_Special.get('M2_buff' + luck_girl) + 1)
          changeStatus(luck_girl, 'self', 'eva', 0.1, 5)
          changeStatus(luck_girl, 'self', 'acu', 0.1, 5)
          changeStatus(luck_girl, 'self', 'acu', 0, 5) // 标识状态结束
        }
      }
    }
    if (Math.random() <= accuracy_rate) { // 命中
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
    } else {
      damage_main = 0
      damage_aoe = 0
    }
  } else if (hfn === 4) {
    var is_ff_enemy = false
    var extra_aoe = 0 // 溅射额外杀伤
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    if (display_type === 'damage') {
      if (enemy_forcefield > 0) is_ff_enemy = true
    } else if (display_type === 'suffer') {
      if (enemy_forcefield_2 > 0) is_ff_enemy = true
    }
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    if (is_ff_enemy) extra_aoe = 2 * damage_aoe
    if (Math.random() <= accuracy_rate) { // 命中
      if (Set_Special.get('AT4_buff') === true) { // 致盲闪光
        Set_Special.set('AT4_buff', false)
        var status_AT4_switch = [['enemy_acu', 1], 180] // 管控防止叠加
        var status_acu = [['enemy_acu', 0.8], 180]
        Set_Status.get(-2).push(status_AT4_switch)
        Set_Status.get(-2).push(status_acu)
        endStatus(-1, status_AT4_switch, 'enemy_get')
        endStatus(-1, status_acu, 'enemy_get')
      }
      if (Set_Special.get('AT4_burn_leftnum') <= 0) { // 烈性灼烧重燃
        Set_Special.set('AT4_burn_next', global_frame + 15)
      }
      Set_Special.set('AT4_burn_leftnum', 10) // 烈性灼烧次数重置
      damage_main *= 1.5
      damage_aoe *= 0.5
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      extra_aoe = Math.max(1, Math.ceil(extra_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 40 - target_arm)))
      damage_aoe += extra_aoe
    } else {
      damage_main = 0
      damage_aoe = 0
    }
  }
  damage_main *= main_multi
  damage_aoe *= aoe_multi
  return damage_main + damage_aoe
}
function do_defencebreaking (defencebreaking) {
  var overdbk = 0
  if (display_type === 'damage') {
    enemy_forcefield -= defencebreaking
    overdbk = Math.ceil(Math.max(0, (enemy_forcefield * -0.1))) // 溢出破防转化为杀伤
    if (enemy_forcefield < 0) enemy_forcefield = 0
  }
  else if (display_type === 'suffer') {
    enemy_forcefield_2 -= defencebreaking
    overdbk = Math.ceil(Math.max(0, (enemy_forcefield_2 * -0.1))) // 溢出破防转化为杀伤
    if (enemy_forcefield_2 < 0) enemy_forcefield_2 = 0
  }
  return overdbk
}
function do_datasum (this_data, new_data) {
  var final_data = []
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
  return final_data
}
function this_formation (stand_num) { return list_tdoll[stand_num][0]; }
function this_dmg (hfn) { return list_HF[hfn][1].v1 + list_HF[hfn][2].v1 + list_HF[hfn][3].v1; }
function this_dbk (hfn) { return list_HF[hfn][1].v2 + list_HF[hfn][2].v2 + list_HF[hfn][3].v2; }
function this_acu (hfn) { return list_HF[hfn][1].v3 + list_HF[hfn][2].v3 + list_HF[hfn][3].v3; }
function this_fil (hfn) { return list_HF[hfn][1].v4 + list_HF[hfn][2].v4 + list_HF[hfn][3].v4; }
function get_common_position () {
  var common_position
  for (var cn = 0; cn < 9; cn++) {
    if (list_tdoll[cn][1] != null) {
      common_position = cn
      break
    }
  }
  return common_position
}
function get_attack_target () {
  var order = [5, 2, 8, 4, 1, 7, 3, 0, 6] // default
  if (inj_order != 'all') {
    if (lang_type === 'ko') {
      for (var i = 0; i < 9; i++) {
        var temp_v = parseInt(inj_order[i])
        if (temp_v >= 7) temp_v -= 6
        else if (temp_v <= 3) temp_v += 6
        order[i] = temp_v - 1
      }
    } else {
      for (var i = 0; i < 9; i++) order[i] = parseInt(inj_order[i]) - 1
    }
    for (var num of order) {
      if (list_tdoll[num][1] != null && list_tdoll[num][0] > 0) return num
    }
    return -1
  } else {
    return 9
  }
}
function get_left_hp (stand_num, single_hp) {
  var all_left_hp = Set_Data_S.get(stand_num)[Set_Data_S.get(stand_num).length - 1][1]
  while (all_left_hp - single_hp > 0) all_left_hp -= single_hp
  return all_left_hp
}
function createHF (dmg, dbk, acu, fil) {
  var HF = {}
  HF.v1 = dmg
  HF.v2 = dbk
  HF.v3 = acu
  HF.v4 = fil
  return HF
}
function debug_addinfo (stand_num, skillname, time, interval) {
  var skill_color = '#ff6600',skill_cld = '<span style="color:#00cc00">cooldown</span>'
  if (skillname === 'attack') {
    skill_color = '#6600ff'
    skill_cld = 'interval'
  }
  var str = '<span style="color:grey">' + debug_line + ' &#62 '
  str += '[<span style="color:#000000">' + trans_if_need(stand_num) + '-' + list_tdoll[stand_num][1].Name + ']</span>'
  str += ' do '
  str += '[<span style="color:' + skill_color + '">' + skillname + '</span>]'
  str += ' in '
  str += '<span style="color:#000000">' + time + '</span>f (<span style="color:#000000">' + (time / 30).toFixed(2) + '</span>s)'
  str += ' , ' + skill_cld + ' ' + '<span style="color:#000000">' + interval + '</span>f (<span style="color:#000000">' + (interval / 30).toFixed(2) + '</span>s)'
  str += '</span><br>'
  debug_line++
  document.getElementById('debug_content').innerHTML += str
}
function debug_clear () { document.getElementById('debug_content').innerHTML = ''; debug_line = 0; }
