// UI
var debug_line = 0
var debug_mode = false // show debug info
var debug_function = [true, true, false] // debug_display_type
var debug_function_name = ['attack', 'skill', 'status']
var buffer_table = new Map // 已放置人形的信息缓存，点击人形查看
var buffer_last // 上一次添加人形的缓存
var switch_operate = false, switch_equip = false // 人形和装备更改开关
var num_pickblock = -1, num_pickequip = -1, num_pickhf = 0 // 选中的人形、装备、重装部队
var set_guntype = 1 // 枪种：1=hg, 2=ar, 3=smg, 4=rf, 5=mg, 6=sg
var set_equip = [0, 0, 0] // 装备代号，开头：1=配件, 2=子弹, 3=人形装备, 4=夜战装备
var num_star = 5, affection = 'love' // 星级，好感度
// Echelon and global
var Set_Static = new Map // 全局常驻变量表
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

function reset_unique() {
  Set_Special.set('can_add_python', true)
  Set_Special.set('can_add_carcanom1891', true)
  Set_Special.set('can_add_ads', true)
  Set_Special.set('can_add_jill', true)
  Set_Special.set('can_add_sei', true)
  Set_Special.set('can_add_stella', true)
}
// init when loading
reset_unique()
Set_Special.set('sunrise', 'day')

// 计算影响格
function getBlockAffect() {
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

function getResult(multiple, action) {
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
    // // 嘲讽靶机数据记录
    // if (fairy_no === 6 && document.getElementById('fairyskill_active').checked) {
    //   if (y_max_suffer < 1600) y_max_suffer = 1600
    //   eval('Glabel_name.set("fairy",lib_language.fairyNAME_' + fairy_no + '+" ")')
    // }
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
function getDPS() {
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
function reactAllSkill(command, current_time) {
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
  // ———————————————————————————————————————— 随时检查型人形特殊状态 ————————————————————————————————————————
  for (var k = 0; k < 9; k++) {
    if (gs_tdoll[k]) {
      if (is_this(k, 257) || is_this(k, 273)) { // m200 ssg3000
        if (Set_Special.get('m200_end' + k) != undefined) {
          if (Set_Special.get('m200_end' + k) < global_frame) {
            Set_Special.delete('m200_end' + k)
            Set_Special.set('attack_permission_' + k, 'fire_all')
          }
        }
      } else if (is_this(k, 243)) { // 64howa
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
      } else if (is_this(k, 264)) { // chauchat
        if (Set_Special.get('chauchat_nextget_' + k) < global_frame) {
          if (Set_Special.get('chauchat_' + k) < 4) {
            Set_Special.set('chauchat_' + k, Set_Special.get('chauchat_' + k) + 1)
          }
          Set_Special.set('chauchat_nextget_' + k, global_frame + 120)
        }
      } else if (is_this(k, 269)) { // p30
        if (Set_Special.get('p30_' + k) === undefined) {
          if (global_frame >= 90) {
            changeStatus(k, 'all', 'rof', 0.1, -1, 'unrepeat')
            Set_Special.set('p30_' + k, 'done')
          }
        }
      } else if (is_this(k, 275)) { // m1895cb子弹回复
        if (!_spE('attack_permission_' + k, 'stop')) { // 只要不处于停火状态
          if (_spG('m1895cb_add_' + k) <= global_frame) {
            _spS('m1895cb_' + k, _spG('m1895cb_' + k) + 1) // 备用弹量+1
            _spS('m1895cb_add_' + k, global_frame + 90) // 下一次子弹回复
          }
        }
      } else if (is_this(k, 287)) { // SIG-556
        if (global_frame >= _spG('sig556_dizz_' + k)) {
          _spS('attack_permission_' + k, 'fire_all') // 恢复攻击
        }
      } else if (is_this(k, 293)) { // AK-15
        if (_spG('ak15_skill_frame_' + k) >= global_frame) { // 主动技能启动期间
          if (_spE('ak15_nexttime_' + k, global_frame)) {
            _spS('ak15_debuff_num_' + k, _spG('ak15_debuff_num_' + k) + _spG('ak15_debufflevel_' + k)) // 叠debuff层
            if (_spG('ak15_debuff_num_' + k) >= 24) { // 过载
              _spS('ak15_debuff_num_' + k, 0) // 清空debuff层数
              changeStatus(k, 'self', 'rof', -0.2, 5)
              changeStatus(k, 'self', 'acu', -0.2, 5)
              _spS('ak15_debuff_frame_' + k, global_frame + 150)
            }
            if (_spG('ak15_skill_frame_' + k) - global_frame >= 60) _spS('ak15_nexttime_' + k, global_frame + 60) // 如果还有则设置下一次计时点
          }
        }
      } else if (is_this(k, 307)) { // ZB-26
        if (_spG('zb26_reload_addcsall_' + k) <= global_frame) {
          for (var stn = 0; stn < 9; stn++) { // 换弹为其它MG增加弹量
            if (gs_tdoll[stn] && stn != k) {
              if (is_this_type(stn, 5)) {
                _spPlus('clipsize_' + stn) // +1 cs
              }
            }
          }
          _spDelete('zb26_reload_addcsall_' + k)
        }
      } else if (is_this(k, 2011)) { // jill醉酒状态施加
        if (Set_Special.get('jill_drunk') != undefined && Set_Special.get('jill_drunk') <= global_frame) {
          changeStatus(k, 'all', 'dmg', -0.15, 3, 'unrepeat')
          changeStatus(k, 'all', 'acu', -0.15, 3, 'unrepeat')
          Set_Special.delete('jill_drunk')
        }
      } else if (is_this(k, 2023)) {
        if (_spG('henri_counter_' + k) === global_frame) {
          _spS('henri_counter_' + k, _spG('henri_counter_' + k) + 60)
          if (Set_Base.get(k).Info.get('shield') > 0) {
            multilayer_process('henri_dmg_' + k, 'add', ['dmg', 0.3, 150])
          } else {
            multilayer_process('henri_eva_' + k, 'add', ['eva', 0.2, 150])
          }
        }
      }
    }
  }
  // 状态时间结算，对所有人的所有状态检查
  for (var [k, v] of Set_Status) { // 状态消逝，k = stand_num, v = [ [ [type, value(>1)] ,left_frame ] ... ] 的数组
    // 脆弱类状态
    if (Set_Special.get('fragile_40') != undefined && Set_Special.get('fragile_40') < global_frame) { // 断罪者魔弹
      fragile_main /= 1.4
      Set_Special.delete('fragile_40')
    }
    if (Set_Special.get('fragile_hp35_a') != undefined && Set_Special.get('fragile_hp35_a') < global_frame) { // 暴走伴奏
      fragile_main /= 1.18
      Set_Special.delete('fragile_hp35_a')
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
    if (Set_Special.get('fragile_hk416') != undefined && Set_Special.get('fragile_hk416') < global_frame) { // 寄生榴弹重伤
      fragile_main /= 1.2
      Set_Special.delete('fragile_hk416')
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
      else if (s_t[1] === 0) { // 状态终结
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
        else if (s_t[0][0] === 'snipe') endStatus(k, s_t, 'snipe') // 狙击出膛
        else if (s_t[0][0] === 'reload') { // 换弹结束
          Set_Special.set('attack_permission_' + k, 'fire_all')
          Set_Special.delete('reloading_' + k)
        }
        else if (s_t[0][0] === 'jill_shaking') {
          do_jill_buff(k) // 吉尔调酒
          Set_Special.set('jill_winestart', true)
        }
        v.splice(s, 1) // 状态结束
        len_status = v.length; s-- // 检查下一个
      }
      // -1则一直存在
    }
  }
}

// 执行技能，包括重置冷却、产生效果，以及添加数据
function react(s_t, stand_num, current_time) { // < Skill , countdown_time >, createSkill (init_cld, cld, duration, Describe)
  var skill = s_t[0],
    skillname = (skill.Describe).name, // Describe -> name, special_paremeters
    skillduration = skill.duration
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
        for (var i = 0; i < enemy_num_left; i++) {
          if (Math.random() <= current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) { // 命中
            var final_crit = 1
            if (Math.random() + current_Info.get('crit') >= 1) final_crit *= current_Info.get('critdmg')
            dmg_aoe += this_formation(stand_num) * final_crit * Math.max(1, Math.ceil(current_Info.get('dmg') * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
          }
        }
        dmg_direct = Math.ceil(dmg_direct * explain_fgl_ff('single'))
        dmg_aoe = Math.ceil(dmg_aoe * explain_fgl_ff('attack_all'))
        final_dmg = dmg_direct + dmg_aoe
        recordData(stand_num, current_time, final_dmg)
      }
      // 四式：死线一击
      else if (is_this(stand_num, 270) && Set_Special.get('type4_' + stand_num) >= 2) {
        recordData(stand_num, current_time, 0)
        var dmg = this_formation(stand_num) * current_Info.get('dmg') * (Math.random() * 0.3 + 0.85)
        var dmg_single = dmg * explain_fgl_ff('single')
        var dmg_through = dmg * (parseFloat(document.getElementById('special_type4_' + stand_num).value) / 100) * explain_fgl_ff('around_multiple')
        recordData(stand_num, current_time, dmg_single + dmg_through)
        Set_Special.set('type4_' + stand_num, 0)
      }
      // 正常的攻击
      else {
        recordData(stand_num, current_time, 0)
        // 计算BUFF———————————————————————————————————————————————————————————————————————————————————————————————————
        var list_buff = settle_buff(stand_num, current_Info)
        // 非常规普攻伤害——————————————————————————————————————————————————————————————————————————————————————————————
        var extra_damage = 0
        extra_damage = settle_extra(stand_num, current_Info, enemy_arm, enemy_eva, list_buff)
        // 普通射击———————————————————————————————————————————————————————————————————————————————————————————————————
        var shoot_damage = 0
        if (settle_accuracy(stand_num, current_Info, enemy_eva, list_buff)) { // 命中敌人
          if (is_this(stand_num, 59)) { // AK-74U 排斥反应
            if (Set_Special.get('aks' + stand_num) >= current_time) {
              Set_EnemyStatus.set('aks_debuff' + stand_num, current_time + 150)
            }
          }
          // 普攻结算————————————————————————————————————————————————————————————————————————————————————————————————
          var shoot_damage = settle_normal_attack(stand_num, current_Info, enemy_arm, list_buff)
          // 段数结算————————————————————————————————————————————————————————————————————————————————————————————————
          shoot_damage *= settle_numbers(stand_num, current_Info, enemy_arm, enemy_num_left, list_buff)
          // 特殊结算————————————————————————————————————————————————————————————————————————————————————————————————
          shoot_damage = settle_specialskill(stand_num, current_Info, enemy_arm, shoot_damage)
          // 暴击结算————————————————————————————————————————————————————————————————————————————————————————————————
          shoot_damage *= settle_crit(stand_num, current_Info, list_buff)
          // 伤害加深和力场结算———————————————————————————————————————————————————————————————————————————————————————
          shoot_damage = Math.ceil(shoot_damage * explain_fgl_ff('single'))
          // 编制结算————————————————————————————————————————————————————————————————————————————————————————————————
          shoot_damage *= settle_formation(stand_num, fire_status)
          // 附加伤害结算————————————————————————————————————————————————————————————————————————————————————————————————
          shoot_damage += settle_addition(stand_num, current_Info, enemy_arm, enemy_num_left, list_buff)
        }
        // 记录伤害数据———————————————————————————————————————————————————————————————————————————————————————————————
        recordData(stand_num, current_time, shoot_damage + extra_damage)
      }

      // 攻击间隔或者换弹判断————————————————————————————————————————————————————

      if (is_this(stand_num, 266)) { // r93强运扳机层数退去
        // buff time lost and check time out
        if (Set_Special.get('r93_timestack_' + stand_num) != undefined) {
          var r93_timestack = Set_Special.get('r93_timestack_' + stand_num)
          var len_r93buff = r93_timestack.length
          for (var r93n = 0; r93n < len_r93buff; r93n++) {
            if (r93_timestack[r93n] < current_time) {
              r93_timestack.shift()
              r93n--
              if (r93_timestack.length < Set_Special.get('r93_valid_' + stand_num)) {
                Set_Special.set('r93_valid_' + stand_num, r93_timestack.length)
                changeStatus(stand_num, 'self', 'rof', -0.0909, -1)
              }
            }
          }
          Set_Special.set('r93_timestack_' + stand_num, r93_timestack)
        }
        if (Set_Special.get('r93_firstlost_' + stand_num) === undefined) {
          Set_Special.set('r93_firstlost_' + stand_num, true)
        } else if (Set_Special.get('r93_firstlost_' + stand_num) === true) {
          Set_Special.set('r93_firstlost_' + stand_num, false)
          for (var lsn = 0; lsn < Set_Special.get('r93_valid_' + stand_num); lsn++) changeStatus(stand_num, 'self', 'rof', -0.0909, -1)
          Set_Special.delete('r93_' + stand_num)
          Set_Special.delete('r93_valid_' + stand_num)
          Set_Special.delete('r93_timestack_' + stand_num)
        }
      } else if (is_this(stand_num, 2024)) { // 莉可-被动3次攻击叠层数
        if (_spG('rico_' + stand_num) === undefined) _spS('rico_' + stand_num, 1)
        else _spPlus('rico_' + stand_num)
        if (_spG('rico_' + stand_num) - Math.floor(_spG('rico_' + stand_num) / 3) * 3 === 0) {
          multilayer_process('rico_dmg_' + stand_num, 'add', ['dmg', 0.15, 150])
        }
      }
      // 常规人形攻击间隔判断：HG/AR/SMG/RF 并排除 隼
      if (current_Info.get('type') != 5 && current_Info.get('type') != 6 && !is_this(stand_num, 256)) {
        // 葬仪之雨固定150射速
        if ((is_this(stand_num, 73) || is_this(stand_num, 237) || is_this(stand_num, 2027)) && current_time <= Set_Special.get('aug_' + stand_num)) s_t[1] = 9
        // SIG-556极限射速
        else if (is_this(stand_num, 287)) {
          if (_spG('sig556_skill_' + stand_num) === undefined || _spG('sig556_debuff_' + stand_num) === undefined) { // 初始化
            _spS('sig556_skill_' + stand_num, false)
            _spS('sig556_debuff_' + stand_num, 0)
          }
          if (_spG('sig556_skill_' + stand_num) === true) { // 技能期间
            _spPlus('sig556_debuff_' + stand_num) // 过载一层
            if (_spE('sig556_debuff_' + stand_num, 12)) { // 过载12层眩晕
              _spS('attack_permission_' + stand_num, 'stop') // 停火
              _spS('sig556_dizz_' + stand_num, global_frame + 60) // 眩晕2s
              _spS('sig556_debuff_' + stand_num, 0) // 重置层数
              _spS('sig556_skill_' + stand_num, false) // 强制关闭技能
            }
            else s_t[1] = 11 // 正常射击，极限射速
          } else { // 非技能期间
            if (_spG('sig556_debuff_' + stand_num) > 0) _spDecl('sig556_debuff_' + stand_num) // 冷却一层
            s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1 // 正常射速间隔
          }
        }
        else if (is_this(stand_num, 1002) && Set_Special.get('m1911_' + stand_num) > 0) { // 绝境神枪手15帧
          s_t[1] = 14
          Set_Special.set('m1911_' + stand_num, Set_Special.get('m1911_' + stand_num) - 1)
        }
        else if (is_this(stand_num, 122)) { // 突击者之眼三连发：2帧间隔射击
          if (Set_Special.get('g11_' + stand_num) >= current_time) { // 技能期间
            if (Set_Special.get('g11_firstshoot_' + stand_num) === undefined || Set_Special.get('g11_firstshoot_' + stand_num) === 'done') { // 第一次装填
              Set_Special.set('g11_firstshoot_' + stand_num, 'ready')
              s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 3 // 第一次开技能会进行f-2的射击
              Set_Special.set('g11_totalframe_' + stand_num, rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1)
              Set_Special.set('g11_eyeofassault_' + stand_num, 2)
            } else {
              if (Set_Special.get('g11_eyeofassault_' + stand_num) > 0) {
                s_t[1] = 1
                Set_Special.set('g11_eyeofassault_' + stand_num, Set_Special.get('g11_eyeofassault_' + stand_num) - 1)
              } else if (Set_Special.get('g11_eyeofassault_' + stand_num) === 0 || Set_Special.get('g11_eyeofassault_' + stand_num) === undefined) {
                s_t[1] = Set_Special.get('g11_totalframe_' + stand_num) - 4
                Set_Special.set('g11_eyeofassault_' + stand_num, 2)
                Set_Special.set('g11_totalframe_' + stand_num, rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1)
              }
            }
          } else {
            Set_Special.set('g11_firstshoot_' + stand_num, 'done')
            Set_Special.set('g11_eyeofassault_' + stand_num, 0)
            s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
          }
        }
        else if (is_this(stand_num, 198) && Set_Special.get('carcano9138_' + stand_num) === 18) {
          recordData(stand_num, current_time, 0)
          var mors_ratio
          if (enemy_type === 'normal') mors_ratio = 45
          else mors_ratio = 3
          var mors_dmg = this_formation(stand_num) * Math.ceil(mors_ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
          recordData(stand_num, current_time, mors_dmg)
          Set_Special.set('carcano9138_' + stand_num, 0)
          s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
        }
        // —————————————————————————————————————— 常规人形按射速折算射击间隔 ——————————————————————————————————————
        else {
          var final_rof = current_Info.get('rof')
          // 这里将处理一些特殊的射速计算，例如可刷新的射速类状态，将不会在状态类属性中结算 ——————————————————————————————————————
          // 89式
          if (is_this(stand_num, 290)) {
            if (_spG('89_fsbuff_' + stand_num) != undefined && _spG('89_fsbuff_' + stand_num) >= global_frame) { // 满分模式buff射速
              final_rof *= 1.6
            }
          }
          s_t[1] = rof_to_frame(current_Info.get('type'), final_rof, list_tdoll[stand_num][1].ID) - 1
        }
        // —————————————————————————————————————— MG和SG扣除子弹 ——————————————————————————————————————
      } else {
        if (is_this(stand_num, 292)) { // RPK-16
          var cs = Set_Special.get('clipsize_' + stand_num)
          if (_spE('rpk16_' + stand_num, 'ar')) { // AR模式
            if (_spE('rpk16_skill_' + stand_num, 'close')) { // AR模式未开启技能，不能换弹
              var final_rof = current_Info.get('rof')
              s_t[1] = rof_to_frame(2, final_rof * 0.6, list_tdoll[stand_num][1].ID) - 1 // 攻击间隔按AR结算
            } else { // 否则换弹
              _spS('rpk16_' + stand_num, 'mg') // 切换为MG模式
              _spS('rpk16_skill_' + stand_num, 'close') // 关闭技能
              Set_Special.set('attack_permission_' + stand_num, 'stop') // 开火许可更改为stop
              Set_Special.set('reloading_' + stand_num, true)
              changeStatus(stand_num, 'reload', null, 30, null) // 1s换弹
              Set_Special.set('clipsize_' + stand_num, current_Info.get('cs')) // 弹量还原
              s_t[1] = 29 // 攻击间隔按1s算
            }
          }
          else { // MG模式
            cs--
            if (cs === 0) {
              if (_spE('rpk16_skill_' + stand_num, 'close')) { // 未开启技能，不能换弹
                _spS('rpk16_' + stand_num, 'ar') // 切换为AR模式
                s_t[1] = 9  // * 这里不是很确定是立刻射击还是10帧间隔，先以10帧暂定
              } else { // 否则换弹
                _spS('rpk16_skill_' + stand_num, 'close') // 关闭技能
                Set_Special.set('attack_permission_' + stand_num, 'stop') // 开火许可更改为stop
                Set_Special.set('reloading_' + stand_num, true)
                changeStatus(stand_num, 'reload', null, 30, null) // 1s换弹
                Set_Special.set('clipsize_' + stand_num, current_Info.get('cs')) // 弹量还原
                _spS('rpk16_' + stand_num, 'mg') // 切换为MG模式
              }
            } else {
              Set_Special.set('clipsize_' + stand_num, cs) // 计算扣弹
              s_t[1] = rof_to_frame(5, current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1  // 按MG结算
            }
          }
        } else {
          var cs = Set_Special.get('clipsize_' + stand_num)
          var extra_shoot_pkp = false
          if (is_this(stand_num, 275)) {
            if (_spE('m1895cb_skillon_' + stand_num, true) && _spG('m1895cb_' + stand_num) > 0) {
              _spS('m1895cb_' + stand_num, _spG('m1895cb_' + stand_num) - 1)
              cs++
            }
          }
          // 常规MG扣除子弹
          cs--
          // 
          if (is_this(stand_num, 307)) { // ZB-26特殊记录
            if (_spG('zb26_currentbullet_' + stand_num) > 0) {
              _spDecl('zb26_currentbullet_' + stand_num)
            }
          }
          if (is_this(stand_num, 173)) { // PKP暴动宣告相关处理
            if (Set_Special.get('pkp_nextcrit_' + stand_num) === 'ready' && Math.random() <= 0.2) {
              cs++
              extra_shoot_pkp = true
              Set_Special.set('pkp_nextcrit_' + stand_num, 'extra')
            }
            if (Set_Special.get('pkp_nextcrit_' + stand_num) === 'over') {
              Set_Special.set('pkp_nextcrit_' + stand_num, 'ready')
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
                // —————————————————————————————————————— MG换弹计算公式 ——————————————————————————————————————
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
                } else if (is_this(stand_num, 307)) { // ZB-26：完美连锁
                  reload_frame = Math.max(Math.ceil(reload_frame * (1 - 0.2 * Set_Special.get('zb26_reload_' + stand_num))), reload_frame * 0.4)
                  _spS('zb26_currentbullet_' + stand_num, -1) // 负数即清空技能弹计数 
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
            _spS('attack_permission_' + stand_num, 'stop') // 开火许可更改为stop
            _spS('reloading_' + stand_num, true)
            changeStatus(stand_num, 'reload', null, reload_frame, null) // 因为单独计算帧数，将帧数传至value
            if (_spG('MG_terminate_' + stand_num) != undefined) _spS('MG_terminate_' + stand_num, 0) // 连珠类重置计数器
            // ———————————————————— 弹量还原 ————————————————————
            _spS('clipsize_' + stand_num, _spG('clipsize_' + stand_num) + current_Info.get('cs'))

            if (is_this(stand_num, 253)) { // 刘易斯增加弹量
              var angel_num = Set_Special.get('angel_strength' + stand_num)
              if (angel_num < 3) angel_num++
              Set_Special.set('angel_strength' + stand_num, angel_num)
              Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + angel_num - 1)
            } else if (is_this(stand_num, 307)) { // ZB-26层数积累
              if (_spG('zb26_reload_' + stand_num) < 3) {
                _spPlus('zb26_reload_' + stand_num)
                _spS('zb26_reload_addcsall_' + stand_num, global_frame + reload_frame) // 换弹完毕生效
              }
            } else if (is_this(stand_num, 238)) { // 88式
              if (!document.getElementById('special_238_' + stand_num).checked) { // 重机枪模式
                Set_Special.set('clipsize_' + stand_num, Set_Base.get(stand_num).Info.get('cs') + 2)
                if (Set_Special.get('88type_buffon' + stand_num) === undefined) {
                  changeStatus(stand_num, 'self', 'acu', 0.625, -1) // +62.5%与-20%平衡为+30%
                  Set_Special.set('88type_buffon' + stand_num, true)
                }
              } else true // do nothing
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
              s_t[1] = 0
            } else if (is_this(stand_num, 276)) { // kord射速单独判断
              if (Set_Special.get('kord_' + stand_num) === 'type_p') s_t[1] = 9
              else s_t[1] = 10
            } else {
              s_t[1] = rof_to_frame(current_Info.get('type'), current_Info.get('rof'), list_tdoll[stand_num][1].ID) - 1
            }
            Set_Special.set('clipsize_' + stand_num, cs)
          }
        } // other outof rpk-16
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
          new_timestack.push(92 + current_time)
          Set_Special.set('r93_timestack_' + stand_num, new_timestack)
          Set_Special.set('r93_valid_' + stand_num, Set_Special.get('r93_valid_' + stand_num) + 1)
          changeStatus(stand_num, 'self', 'rof', 0.1, -1)
        } else {
          Set_Special.set('r93_' + stand_num, Set_Special.get('r93_' + stand_num) + 1)
          var new_timestack = Set_Special.get('r93_timestack_' + stand_num)
          new_timestack.push(92 + current_time)
          Set_Special.set('r93_timestack_' + stand_num, new_timestack)
        }
        // forcus setting (special setting)
        if (document.getElementById('special_r93_' + stand_num + '_2').checked) { // 设定转换数
          if (Set_Special.get('r93_maxforcus_' + stand_num) === undefined) { // 读取同目标射击上限
            Set_Special.set('r93_maxforcus_' + stand_num, parseInt(document.getElementById('special_r93_switch_' + stand_num).value))
          }
          if (Set_Special.get('r93_' + stand_num) >= Set_Special.get('r93_maxforcus_' + stand_num)) { // 需要转换目标
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
        if (is_this(stand_num, 1064) && list_target[i] === 'bloall') { // G36MOD发动的弧光契约
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
      } else if (list_target[i] === 'enemy') { // 对敌人debuff
        var list_pro = ((s_t[0].Describe).list_pro)[i].split('/')
        var list_value = ((s_t[0].Describe).list_value)[i].split('/')
        var len = list_pro.length
        for (var p = 0; p < len; p++) {
          var _pro = list_pro[p],
            _proName = 'enemy_' + _pro,
            _value = 1 + parseFloat(list_value[p]),
            _duration = Math.ceil(30 * s_t[0].duration),
            new_status = [[_proName, _value], _duration]
          Set_Status.get(-2).push(new_status)
          do_debuff(_proName, _duration)
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
  else if (skillname === 'stechkin_eva') {
    if (document.getElementById('special_1007_' + stand_num).checked) {
      Set_Status.get(-2).push([['enemy_eva', -0.5], 240])
      do_debuff('enemy_eva', 240)
      endStatus(-1, [['enemy_eva', -0.5], 240], 'enemy_get')
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'm4') {
    Set_EnemyStatus.set('avenger_mark', true) // 敌人施加伸冤者印记
    if (document.getElementById('special_m4_' + stand_num).checked) { // 使用武器库炮击
      Set_Special.set(stand_num, 'shelling') // 特殊变量：M4炮击
      changeStatus(stand_num, 'self', 'rof', '-0.7', 10)
      changeStatus(stand_num, 'avenger_mark', null, null, 10) // 炮击状态，结束后特殊变量也删除
    }
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
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
    Set_Special.set('dot_time_' + stand_num, dot_time)
    Set_Special.set('dot_isrecord_' + stand_num, false)
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
    if (is_this(stand_num, 1039) && !document.getElementById('special_1039_0_' + stand_num).checked) {
      // snipe disabled, do nothing
    } else {
      var ratio = (s_t[0].Describe).ratio
      var snipe_num = (s_t[0].Describe).snipe_num
      var time_init = (1 - current_Info.get('cld')) * (s_t[0].Describe).time_init
      var time_interval = ((1 - current_Info.get('cld')) * (s_t[0].Describe).time_interval).toFixed(2)
      if (is_this(stand_num, 257) || is_this(stand_num, 273)) {
        time_init = 1.5
        var frame_interval = Math.ceil(time_interval * 30)
        var time_block
        if (frame_interval === 45) { snipe_num = 6; time_block = 9 }
        else if (frame_interval === 41) { snipe_num = 7; time_block = 9.7 }
        else if (frame_interval === 36) { snipe_num = 7; time_block = 9 }
        Set_Special.set('m200_end' + stand_num, current_time + time_block * 30)
      }
      else if (is_this(stand_num, 262)) time_interval = 0.34 //纠正：EM-2是10帧固定间隔
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
  else if (skillname === 'carcano9138') { // 墨尔斯假面
    var ratio
    if (enemy_type === 'normal') ratio = 45
    else ratio = 3
    Set_Special.set('carcano9138_' + stand_num, 0)
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
    if (document.getElementById('special_2006_' + stand_num).checked) {
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
  else if (skillname === 'carcano1891') { // 玛尔斯号角：主动
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
    if (enemy_num_left > 5) {
      changeStatus(stand_num, 'self', 'rof', '0.8', 3)
      changeStatus(stand_num, 'self', 'acu', '0.8', 3)
    } else changeStatus(stand_num, 'self', 'dmg', '0.9', 3)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'js9') {
    var num_dmg = 4 - enemy_num_left, num_eva = enemy_num_left - 1
    if (num_dmg < 0) num_dmg = 0
    if (num_eva > 6) num_eva = 6
    for (var n = 0; n < num_dmg; n++) changeStatus(stand_num, 'self', 'dmg', '0.5', 5)
    for (var n = 0; n < num_eva; n++) changeStatus(stand_num, 'self', 'eva', '0.35', 5)
    s_t[1] = s_t[0].cld * 30 - 1 // 进入冷却
  }
  else if (skillname === 'mat49') {
    var num_dmg = 4 - enemy_num_left, num_eva = enemy_num_left - 1
    if (num_dmg < 0) num_dmg = 0
    if (num_eva > 6) num_eva = 6
    for (var n = 0; n < num_dmg; n++) changeStatus(stand_num, 'self', 'dmg', '0.45', 5)
    for (var n = 0; n < num_eva; n++) changeStatus(stand_num, 'self', 'eva', '0.3', 5)
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
    if (Set_Special.get('falcon_' + stand_num) > 0 && !document.getElementById('special_256_' + stand_num).checked) {
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
    do_debuff('enemy_dizz', 30 * stun_time)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'shield') { // 护盾
    var value = (s_t[0].Describe).value
    var duration = (s_t[0].Describe).duration
    var label = (s_t[0].Describe).label
    // if (value === -1) {
    //   if (is_this(stand_num, 2016)) {
    //     if (Set_Special.get('jill_winestart') === true) {
    //       if (Set_Static.get('jill_winetype') === 1) value = 0.5 * current_Info.get('arm')
    //       else value = 0
    //     }
    //   }
    // }
    if (label === 'col1') { // 坚壁理论
      if (gs_tdoll[2]) changeStatus(2, 'self', 'shield', value, duration)
      if (gs_tdoll[5]) changeStatus(5, 'self', 'shield', value, duration)
      if (gs_tdoll[8]) changeStatus(8, 'self', 'shield', value, duration)
    } else if (label === 'self') {
      changeStatus(stand_num, 'self', 'shield', value, duration)
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
  else if (skillname === 'dorothy') {
    var list_num = [stand_num - 6, stand_num - 3, stand_num + 3, stand_num + 6]
    if (document.getElementById('special_dorothy_' + stand_num + '_1').checked) { // MIRD113模式
      changeStatus(stand_num, 'self', 'dmg', 1, -1)
      for (var stn of list_num) {
        if (stn >= 0 && stn <= 8) {
          if (gs_tdoll[stn]) {
            changeStatus(stand_num, 'self', 'acu', -0.4, -1, 'unrepeat')
            changeStatus(stand_num, 'self', 'eva', 0.8, -1, 'unrepeat')
          }
        }
      }
    } else if (document.getElementById('special_dorothy_' + stand_num + '_2').checked) { // 纳米迷彩模式
      changeStatus(stand_num, 'self', 'eva', 1, -1)
      for (var stn of list_num) {
        if (stn >= 0 && stn <= 8) {
          if (gs_tdoll[stn]) {
            changeStatus(stand_num, 'self', 'eva', -0.4, -1, 'unrepeat')
            changeStatus(stand_num, 'self', 'acu', 0.8, -1, 'unrepeat')
          }
        }
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'jill') {
    var jill_cd = s_t[0].cld * (1 - current_Info.get('cld')) * 0.7 // 冷却，自带30%冷却
    changeStatus(stand_num, 'jill_shaking', null, null, 3) // 摇酒3秒
    if (jill_cd < 8) Set_Special.set('jill_space', jill_cd) // 刷新BUFF
    else Set_Special.set('jill_space', 8)
    s_t[1] = Math.ceil(jill_cd * 30) - 1
  }
  else if (skillname === 'alma') {
    var duration = 3
    if (Set_Special.get('jill_winestart') === true) { // 吉尔Brandtini
      if (Set_Static.get('jill_winetype') === 2) duration += 1
    }
    Set_Special.set('alma_' + stand_num, current_time + duration * 30)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'sei') {
    var extra_cld = 0
    if (is_exist_someone(2014)) extra_cld = 0.1
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i]) {
        if (is_this_type(i, 1) || is_this_type(i, 3) || is_this_type(i, 6)) {
          var shield_value = 32, hp_percent = 1, multiple = 1
          if (display_type === 'suffer') { // 初始化生命值
            hp_percent = (Set_Data_S.get(i)[Set_Data_S.get(i).length - 1][1]) / (Set_Data_S.get(i)[0][1])
          }
          if (Set_Special.get('jill_winestart') === true) {
            if (Set_Static.get('jill_winetype') === 4) multiple = 2
          }
          shield_value *= (1 + ((1 - hp_percent) + 0.8) * multiple)
          changeStatus(i, 'self', 'shield', shield_value, 5)
        }
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * (1 - extra_cld) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'ads') {
    Set_Special.set('ADS_active', current_time + 150)
    Set_Special.set('ADS_buff', Set_Special.get('ADS_buff') + 5)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'de') {
    Set_Special.set('DE_bullet_' + stand_num, 3)
    Set_Special.set('DE_active_' + stand_num, global_frame + 12 * 30) // 标记持续12秒
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'hk416_fragile') {
    Set_Special.set('fragile_hk416', global_frame + 90)
    fragile_main *= 1.2
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'mp5mod') {
    if (enemy_num_left <= 3) changeStatus(stand_num, 'self', 'eva', Math.pow(1.2, enemy_num_left) - 1, 8)
    else changeStatus(stand_num, 'self', 'eva', Math.pow(1.2, 3) - 1, 12)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'ump9mod') {
    var list_member = get_ump9_samecolumn_list(stand_num)
    var is_dmg_up = false
    if (document.getElementById('special_ump9_stun_' + stand_num).checked) is_dmg_up = true
    for (var member of list_member) {
      if (is_dmg_up) changeStatus(member, 'self', 'dmg', 0.5, 5)
      else {
        changeStatus(member, 'self', 'shield', 25, 5)
        changeStatus(member, 'self', 'eva', 0.25, 5)
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'hanyang88') {
    Set_Special.set('hanyang88_buff_' + stand_num, global_frame + 180)
    Set_Special.set('hanyang88_bomb_' + stand_num, true)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'm1895cb') {
    if (document.getElementById('special_275_' + stand_num).checked) {
      Set_Special.set('m1895cb_skillon_' + stand_num, true)
    } else {
      if (Set_Special.get('m1895cb_skillon_' + stand_num) === undefined) Set_Special.set('m1895cb_skillon_' + stand_num, true) // skill init
      else Set_Special.set('m1895cb_skillon_' + stand_num, !Set_Special.get('m1895cb_skillon_' + stand_num)) // close or open skill
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'c96cs') {
    if (_spG('sunrise') === 'night') {
      for (var i = 0; i < 9; i++) {
        if (gs_tdoll[i]) {
          var _ctype = ((Set_Base.get(i)).Info).get('type')
          if (_ctype === 5 || _ctype === 6) {
            _spS('clipsize_' + i, _spG('clipsize_' + i) + 2) // 弹量+2
          }
        }
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'sig556') {
    if (_spG('sig556_skill_' + stand_num) === undefined || _spG('sig556_debuff_' + stand_num) === undefined) { // 初始化
      _spS('sig556_skill_' + stand_num, false)
      _spS('sig556_debuff_' + stand_num, 0)
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    }
    else if (_spG('sig556_skill_' + stand_num) === true) { // 技能激活时，冷却就绪
      if (document.getElementById('special_287_' + stand_num).checked) {
        true // 实际上因眩晕强制停止技能不会进入冷却
        //if (_spG('sig556_debuff_' + stand_num) < 11) s_t[1] = 0 // 仅使过热终止技能时，如果下一枪不致晕，则不主动终止技能
        //else s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 否则下一枪必晕，进入冷却
      } else {
        _spS('sig556_skill_' + stand_num, false) // 自动技能将其关闭
        s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
      }
    } else if (_spG('sig556_skill_' + stand_num) === false) { // 技能关闭时，冷却就绪
      _spS('sig556_skill_' + stand_num, true) // 手动开启
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    }
  }
  else if (skillname === 'c93') {
    if (document.getElementById('special_285_0_' + stand_num).checked) {
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
    } else if (document.getElementById('special_285_1_' + stand_num).checked) {
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
    } else if (document.getElementById('special_285_2_' + stand_num).checked) {
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
      changeStatus(stand_num, 'all', 'rof', 0.08, 4, 'unrepeat')
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === '89type') {
    if (document.getElementById('special_290_' + stand_num).checked) { // 手操优化
      if (!_spG('89_manual_' + stand_num)) {
        changeStatus(stand_num, 'self', 'dmg', 0.3, 4) // 首次复习
        changeStatus(stand_num, 'self', 'rof', 0.3, 4)
        _spS('89_manual_' + stand_num, true)
        s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
      } else {
        if (_spE('89_mode_' + stand_num, 'full-score') && _spG('89_fsbuff_' + stand_num) < global_frame) { // 进入满分且满分buff结束
          _spS('89_fsbuff_' + stand_num, global_frame + 180)
          _spPlus('89_auto_' + stand_num)
          if (_spG('89_auto_' + stand_num) >= 2) {
            _spS('89_manual_' + stand_num, false)
            _spS('89_auto_' + stand_num, 0)
          }
          s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
        } else {
          s_t[1] = 0 // standby
        }
      }
    } else { // 否则正常启动
      if (_spE('89_mode_' + stand_num, 'full-score')) {
        if (_spE('89_fsbuff_' + stand_num, undefined)) _spS('89_fsbuff_' + stand_num, global_frame + 180) // 首次施加状态
        else _spS('89_fsbuff_' + stand_num, global_frame + 180) // 刷新
      } else {
        changeStatus(stand_num, 'self', 'dmg', 0.3, 4)
        changeStatus(stand_num, 'self', 'rof', 0.3, 4)
        if (_spG('89_buff_' + stand_num) > 6) _spS('89_buff_' + stand_num, _spG('89_buff_' + stand_num) - 6)
        else _spS('89_buff_' + stand_num, 0)
      }
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
    }
  }
  else if (skillname === 'rpk16') {
    _spS('rpk16_skill_' + stand_num, 'on')
    changeStatus(stand_num, 'self', 'dmg', 0.4, 5)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'sl8') {
    // 影响格枪种统计
    var l_type = [0, 0, 0, 0, 0, 0], // typenum on block
      num_type = 0,
      stand_y = Math.floor(stand_num / 3),
      stand_x = stand_num - 3 * stand_y,
      l_block = [[0, -1], [0, -2], [1, -1], [2, -1]], l_find = []
    for (var coor of l_block) { // find valid block
      if (stand_x + coor[0] >= 0 && stand_x + coor[0] <= 2 && stand_y + coor[1] >= 0 && stand_y + coor[1] <= 2) {
        l_find.push((stand_x + coor[0]) + 3 * (stand_y + coor[1]))
      }
    }
    for (var stb of l_find) {
      if (gs_tdoll[stb]) l_type[((Set_Base.get(stb)).Info).get('type') - 1]++
    }
    for (var element of l_type) if (element > 0) num_type++
    num_type = Math.min(3, num_type)
    changeStatus(stand_num, 'self', 'rof', 0.6, 5)
    for (var buffn = 0; buffn < num_type; buffn++) changeStatus(stand_num, 'self', 'dmg', 0.05, 5)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'ak15') {
    if (_spG('ak15_debuff_frame_' + stand_num) >= global_frame) s_t[1] = 0 // debuff未结束，不能开启技能
    else {
      changeStatus(stand_num, 'self', 'dmg', 0.4, 6)
      changeStatus(stand_num, 'self', 'acu', 0.4, 6)
      changeStatus(stand_num, 'self', 'crit', 0.4, 6)
      changeStatus(stand_num, 'self', 'eva', 0.4, 6)
      //_spS('ak15_debuff_num_' + stand_num, 0) // 清空debuff层数
      // 实际发现技能启动并不能清空debuff
      _spS('ak15_skill_frame_' + stand_num, global_frame + 180) // 技能启动6s
      _spS('ak15_nexttime_' + stand_num, global_frame + 60) // 设置下一次debuff检测点              
      _spS('ak15_debufflevel_' + stand_num, 5 + enemy_num_left) // 每次debuff增量
      s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld
    }
  }
  else if (skillname === 'webley') {
    var num_leader = get_leader()
    if (num_leader === stand_num) { // 韦伯利是队长
      changeStatus(stand_num, 'all', 'dmg', 0.25, 8)
    } else { // 其他人是队长
      changeStatus(num_leader, 'self', 'dmg', 0.22, 8)
      changeStatus(num_leader, 'self', 'rof', 0.22, 8)
      var list_skill = Set_Skill.get(num_leader)
      for (var pair_skill_time of list_skill) {
        var s_name = pair_skill_time[0].Describe.name
        if (s_name != 'attack') { // 除普攻外所有技能
          pair_skill_time[1] = Math.floor(pair_skill_time[1] * 0.75)
        }
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  }
  else if (skillname === 'ntwmod') {
    var ratio = 5
    if (document.getElementById('special_1053_0_' + stand_num).checked) ratio = 10
    if (document.getElementById('special_1053_2_' + stand_num).checked) { // 高血量额外10%伤害
      ratio *= 1.1
      _spS('ntw_exratio_' + stand_num, 4.4)
    } else {
      _spS('ntw_exratio_' + stand_num, 4)
    }
    var snipe_num = 1, time_init = (1 - current_Info.get('cld')) * 1.5, time_interval = 0, labels = 'armless/critless/evaless'
    _spS('attack_permission_' + stand_num, 'stop') // 全体瞄准
    _spS('snipe_num_' + stand_num, snipe_num)
    _spS('snipe_interval_' + stand_num, time_interval)
    _spS('snipe_arriveframe_' + stand_num, current_time + Math.ceil(30 * time_init))
    _spS('ntw_numleft_' + stand_num, 3) // 最大追加次数
    _spS('ntw_exenable_' + stand_num, true) // 第一次必可以追加
    changeStatus(stand_num, 'snipe', labels, ratio, time_init)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  } else if (skillname === 'm950amod') {
    if (document.getElementById('special_1097_' + stand_num).checked) {
      changeStatus(stand_num, 'all', 'rof', 0.05, 5)
    } else {
      do_debuff('enemy_eva', 9999 * 30)
      endStatus(-1, [['enemy_eva', -0.3], 9999 * 30], 'enemy_get')
      do_debuff('enemy_speed', 9999 * 30)
      endStatus(-1, [['enemy_speed', -0.3], 9999 * 30], 'enemy_get')
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  } else if (skillname === 'zb26') {
    _spS('zb26_currentbullet_' + stand_num, _spG('clipsize_' + stand_num)) // 当前剩余子弹数
    _spS('clipsize_' + stand_num, _spG('clipsize_' + stand_num) + 8) // 增加技能弹量8发
    for (var stn = 0; stn < 9; stn++) {
      if (gs_tdoll[stn] && stn != stand_num) {
        if (is_this_type(stn, 5)) {
          _spPlus('clipsize_' + stn) // +1 cs
        }
      }
    }
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld
  } else if (skillname === 'hp35_passive') { // 暴走伴奏
    var is_debuff = false
    var list_debuff = ['enemy_dmg', 'enemy_rof', 'enemy_acu', 'enemy_eva', 'enemy_arm',
      'enemy_speed', 'enemy_dot', 'enemy_dizz']
    if (_spG('sunrise') === 'night') {
      is_debuff = true
    } else {
      for (var debuff of list_debuff) {
        if (Set_Special.get(debuff) >= global_frame) {
          is_debuff = true
          break
        }
      }
    }
    if (is_debuff) { // 有debuff
      var list_dmgdeepen = _spG('global_dmgdeepen'),
        is_record = false
      for (var entry of list_dmgdeepen) { // ['id','is_active','value']
        if (entry[0] === 'hp35_passive') {
          is_record = true
          entry[1] = true
          break
        }
      }
      if (!is_record) {
        list_dmgdeepen.push(['hp35_passive', true, 1.08])
        _spS('global_dmgdeepen', list_dmgdeepen)
      }
    } else { // 没有debuff
      var list_dmgdeepen = _spG('global_dmgdeepen')
      for (var entry of list_dmgdeepen) { // ['id','is_active','value']
        if (entry[0] === 'hp35_passive') {
          entry[1] = false
          break
        }
      }
    }
  } else if (skillname === 'hp35') {
    _spS('fragile_hp35_a', global_frame + 180)
    fragile_main *= 1.18
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  } else if (skillname === 'akalfa') { // AK-Alfa耀变体
    _spS('akalfa_skillon_' + stand_num, global_frame + 150)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  } else if (skillname === 'cf05') {
    _spS('cf05_' + stand_num, global_frame + 180)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  } else if (skillname === 'angelica') {
    _spS('angelica_' + stand_num, global_frame + 180)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // cld 
  }
  else if (skillname === 'henrietta_init') { // 月轮守护人-初始护盾
    changeStatus(stand_num, 'self', 'shield', 10, 8)
    _spS('henri_counter_' + stand_num, global_frame + 60)
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }
  else if (skillname === 'henrietta_active') { // 月轮守护人-主动
    var buffnum_dmg = multilayer_process('henri_dmg_' + stand_num, 'get'),
      buffnum_eva = multilayer_process('henri_eva_' + stand_num, 'get')
    if (buffnum_dmg > 3) buffnum_dmg = 3
    if (buffnum_eva > 3) buffnum_eva = 3
    changeStatus(stand_num, 'self', 'rof', Math.pow(1.2, buffnum_dmg)) // 加射速
    changeStatus(stand_num, 'self', 'shield', 10 + 15 * buffnum_eva) // 加护盾
    s_t[1] = Math.ceil(s_t[0].cld * (1 - current_Info.get('cld')) * 30) - 1 // 进入冷却
  }

  // debug mode ————————————————————————————————————————————————————————————————————————————————————————————————————————
  if (debug_mode && (debug_function[0] || debug_function[1])) {
    if (fire_status === 'stop' && skillname === 'attack') {
      true // log nothing
    } else debug_addinfo('attack_skill', stand_num, skillname, global_frame, s_t[1] + 1)
  }
}

function changeStatus(stand_num, target, type, value, duration) { // 改变状态列表
  if (debug_mode && debug_function[2]) {
    if (target.substr(0, 3) === 'blo') {
      true // do nothing, just recursive
    } else {
      debug_addinfo('status', stand_num, target, type, value, duration, global_frame) // debug mode
    }
  }
  var special_command = arguments['5']
  var frame = Math.floor(30 * duration)
  if (target === 'all') { // 号令类
    if (!Set_Special.get('can_add_python') && not_init) { // 有蟒蛇，需要触发被动
      if (!is_python_unrepeat(special_command)) {
        if (Set_Special.get('python_' + type) != undefined && Set_Special.get('python_' + type) < 3) {
          var new_level = Set_Special.get('python_' + type) + 1
          Set_Special.set('python_' + type, new_level)
          react([createSkill(0, 0, 3, lib_describe.get('python_' + type)), 0], stand_num, 0)
          changeStatus(stand_num, 'python_buff_' + type, type, null, 3)
        }
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
  else if (target === 'avenger_mark') { // 伸冤者印记
    var new_status = [['avenger_mark', null], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'jill_shaking') { // 摇酒
    var new_status = [['jill_shaking', null], frame]
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'dot') { // 持续伤害
    var new_status = [['dot', value + '/' + (type + frame)], frame] // 类似榴弹
    var list_status = Set_Status.get(stand_num)
    list_status.push(new_status)
    Set_Status.set(stand_num, list_status)
  } else if (target === 'grenade') { // 榴弹
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

function endStatus(stand_num, status, situation) { // 刷新属性，状态是 [< pro_type, value >, frame]  二元组，stand_num=-1即全体，stand_num=-2为敌人
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
      var _type = status[0][0],
        _value = status[0][1]
      var new_property = (this_info).get(_type)
      if (situation === 'get') {
        if (_type === 'shield') {
          new_property += _value
        } else {
          new_property = new_property * _value
          if (not_init && is_this(stand_num, 1060) && status[0][0] === 'dmg') { // asval 信念
            Set_Special.set('asval_' + stand_num, global_frame + 90)
          }
        }
      }
      else if (situation === 'lost') {
        if (_type === 'shield') {
          if (new_property >= _value) new_property -= _value
          else new_property = 0
        } else {
          new_property = new_property / _value
        }
        if (_type === 'critdmg' && _value === 1) { // 杰里科被动消失一层
          if (Set_Special.get('jericho_buff_' + stand_num) > 0) {
            Set_Special.set('jericho_buff_' + stand_num, Set_Special.get('jericho_buff_' + stand_num) - 1)
          }
        }
        if (_type === 'rof' && _value === 1) { // 玛尔斯号角被动消失一层
          if (Set_Special.get('carcano1891') > 0) {
            Set_Special.set('carcano1891', Set_Special.get('carcano1891') - 1)
          }
        }
        if (_type === 'acu' && _value === 1) { // M2致命干扰消失一层
          if (Set_Special.get('M2_buff' + stand_num) > 0) {
            Set_Special.set('M2_buff' + stand_num, Set_Special.get('M2_buff' + stand_num) - 1)
          }
        }
      }
      this_info.set(_type, new_property)
    }
  }
  else if (situation === 'enemy_get' || situation === 'enemy_lost') { // 敌人状态：[type, value>1]
    var _type = status[0][0],
      _value = status[0][1]
    if (situation === 'enemy_get') {
      if (_type.substr(6) === 'eva') enemy_eva = Math.ceil(enemy_eva * _value)
      if (_type.substr(6) === 'dmg') enemy_dmg = Math.ceil(enemy_dmg * _value)
      if (_type.substr(6) === 'rof') enemy_rof = Math.ceil(enemy_rof * _value)
      if (_type.substr(6) === 'acu') enemy_acu = Math.ceil(enemy_acu * _value)
    } else if (situation === 'enemy_lost') {
      if (_type.substr(6) === 'eva') {
        enemy_eva = Math.floor(enemy_eva / _value)
        if (_value === 1) Set_Special.set('2B14buff', true)
      }
      if (_type.substr(6) === 'dmg') enemy_dmg = Math.floor(enemy_dmg / _value)
      if (_type.substr(6) === 'rof') enemy_rof = Math.floor(enemy_rof / _value)
      if (_type.substr(6) === 'acu') {
        if (_value === 1) Set_Special.set('AT4_buff', true)
        enemy_acu = Math.floor(enemy_acu / _value)
      }
    }
  }
  else if (situation === 'dot') { // 持续伤害类技能处理逻辑————————————————————————————————
    var _type = status[0][0],
      _value = status[0][1]
    var dot_para = _value.split('/')
    var damage_explode = ((Set_Base.get(stand_num)).Info).get('dmg') * parseFloat(dot_para[0])
    if (Set_Special.get('dot_time_' + stand_num) > 0 && !Set_Special.get('dot_isrecord_' + stand_num)) {
      do_debuff('enemy_dot', 30 * (Set_Special.get('dot_time_' + stand_num)))
      Set_Special.set('dot_isrecord_' + stand_num, true)
    }
    if (is_this(stand_num, 1032)) {
      if (Set_Special.get('uzi_' + stand_num) === undefined) Set_Special.set('uzi_' + stand_num, 1)
      if (Set_Special.get('uzi_' + stand_num) - 5 * Math.floor(Set_Special.get('uzi_' + stand_num) / 5) === 0) damage_explode *= 1.8
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
    } else { // 熄灭
      Set_Special.set('dot_isrecord_' + stand_num, false)
    }
  }
  else if (situation === 'grenade') { // 榴弹类技能处理逻辑————————————————————————————————
    Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
    var grenade_para = status[0][1].split('/')
    if (grenade_para[0] === '-1') {
      if (is_this(stand_num, 2003)) { // kiana skill
        grenade_para[0] = ((Set_Base.get(stand_num)).Info).get('critdmg')
      } else if (is_this(stand_num, 2016)) { // dana skill
        grenade_para[0] = 0.6 * (1 + 0.01 * ((Set_Base.get(stand_num)).Info).get('arm'))
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
  else if (situation === 'snipe') { // 狙击类技能处理逻辑————————————————————————————————
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
    if (this_ID === 180) { // 贯通射击
      damage_snipe_single = Math.ceil(2 * ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_180_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('around_multiple'))
      }
    } else if (this_ID === 192) { // 贯通射击
      damage_snipe_single = Math.ceil(2 * ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_192_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('around_multiple'))
      }
    } else if (this_ID === 252) { // 震荡冲击弹
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_252_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(0.5 * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
      }
    } else if (this_ID === 1252) { // 震荡冲击弹 MOD
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      if (document.getElementById('special_1252_' + stand_num).checked) {
        damage_snipe_single += Math.ceil(0.5 * current_Info.get('dmg') * explain_fgl_ff('around_aoe'))
      }
    } else if (this_ID === 2024) { // 提希丰之塔
      damage_snipe_single = Math.ceil(ratio * current_Info.get('dmg') * explain_fgl_ff('single'))
      var buffnum = multilayer_process('rico_dmg_' + stand_num, 'get')
      if (buffnum > 3) buffnum = 3
      damage_snipe_single += Math.ceil(0.5 * buffnum * current_Info.get('dmg') * explain_fgl_ff('aoe'))
      _empty_layer('rico_dmg_' + stand_num)
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
      if (explain_fgl_ff('is_maxff')) damage_snipe_single = 0
      else damage_snipe_single = Math.max(1, Math.ceil(damage_snipe_single * (Math.random() * 0.3 + 0.85) + Math.min(2, current_Info.get('ap') - enemy_arm)))
    }
    if (list_labels[2] != 'critless') { // 能够暴击
      if (Math.random() <= current_Info.get('crit') || Set_Special.get('must_crit_' + stand_num) === true) damage_snipe_single *= current_Info.get('critdmg')
    }
    if (list_labels[3] != 'evaless') { // 可以回避
      if (Math.random() > current_Info.get('acu') / (current_Info.get('acu') + enemy_eva)) {
        damage_snipe_single = 0
        if (is_this(stand_num, 1053)) { // 如果是NTW追加狙击，则下一次无法狙击
          _spS('ntw_exenable_' + stand_num, false)
        }
      }
    }
    damage_snipe_single = Math.ceil(damage_snipe_single * this_formation(stand_num))
    var current_time = Set_Special.get('snipe_arriveframe_' + stand_num)
    recordData(stand_num, current_time, 0)
    recordData(stand_num, current_time, damage_snipe_single)
    if (is_this(stand_num, 1039) && document.getElementById('special_1039_2_' + stand_num).checked) { // 苍白收割者：沉稳射击击杀目标
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
    if (num_leftsnipe <= 0) { // 狙击次数完毕
      if (is_this(stand_num, 1053)) { // NTW追加次数
        if (document.getElementById('special_1053_1_' + stand_num).checked
          && _spG('ntw_numleft_' + stand_num) > 0
          && _spG('ntw_exenable_' + stand_num)) { // 需要追加，能够追加且有剩余次数
          _spDecl('ntw_numleft_' + stand_num)
          _spS('snipe_arriveframe_' + stand_num, current_time + 18)
          changeStatus(stand_num, 'snipe', 'armless/critless/eva', _spG('ntw_exratio_' + stand_num), 0.6)
        } else { // 否则不需要追加
          Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
        }
      }
      else if (is_this(stand_num, 252) || is_this(stand_num, 1252)) { // KSVK附加debuff
        do_debuff('enemy_acu', 5 * 30)
        endStatus(-1, [['enemy_acu', -0.2], 5 * 30], 'enemy_get')
        do_debuff('enemy_rof', 5 * 30)
        endStatus(-1, [['enemy_rof', -0.2], 5 * 30], 'enemy_get')
        Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
      }
      else if (!(is_this(stand_num, 257) || is_this(stand_num, 273))) { // 不属于 M200/SSG-3000 的常规炮击
        Set_Special.set('attack_permission_' + stand_num, 'fire_all') // 恢复射击
      }
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

function reactInjury() {
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
        // if (Set_Special.get('provoke') != undefined) {
        //   if (Set_Special.get('provoke') > 0) {
        //     injury(stn)
        //   }
        // }
        // } else if (shoot_target === 'provoke') {
        //   shoot_target = injury_provoke()
      } else {
        if (Set_EnemyStatus.get('stopfire') === undefined || Set_EnemyStatus.get('stopfire') < global_frame) shoot_target = injury(shoot_target)
      }
      Set_EnemyStatus.set('attackframe', rof_to_frame_enemy(enemy_rof) + global_frame)
    }
  }
}
// function do_shield (sid, value) {
//   0
// }
// function injury_provoke () {
//   var damage = enemy_dmg * enemy_num_left * enemy_form
//   var left_provoke = Set_Special.get('provoke')
//   var decline_provoke = 0
//   if (Set_Special.get('provoke_shield') != undefined && Set_Special.get('provoke_shield') > 0) { // have shield
//     var left_shield = Set_Special.get('provoke_shield')
//     left_shield -= damage
//     if (left_shield < 0) {
//       decline_provoke = Math.abs(left_shield)
//       left_provoke += left_shield
//       left_shield = 0
//     }
//     if (left_provoke < 0) {
//       decline_provoke += left_provoke
//       left_provoke = 0
//     }
//     Set_Special.set('provoke_shield', left_shield)
//     Set_Special.set('provoke', left_provoke)
//     recordData_suffer(9, global_frame, decline_provoke)
//   } else { // no-shield
//     decline_provoke = damage
//     left_provoke -= damage
//     if (left_provoke < 0) {
//       decline_provoke += left_provoke
//       left_provoke = 0
//     }
//     Set_Special.set('provoke', left_provoke)
//     recordData_suffer(9, global_frame, decline_provoke)
//   }
// }
function injury(shoot_target) {
  var current_Info = Set_Base.get(shoot_target).Info
  var accuracy = enemy_acu
  var evasion = current_Info.get('eva')
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
  // 特殊减伤
  if (is_this(shoot_target, 295)) { // 牛油晶冻降低固定伤害
    if (_spG('cf05_' + shoot_target) >= global_frame) {
      damage -= 15
    }
  }
  // 回避的可叠加层数结算
  if (is_this(shoot_target, 2023)) {
    var buffnum = multilayer_process('henri_eva_' + shoot_target, 'get')
    if (buffnum > 3) buffnum = 3
    evasion *= Math.pow(1.2, buffnum)
  }

  // 命中和血量扣除
  var accuracy_rate = accuracy / (accuracy + evasion)
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

function getBaseProperty(num) {
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

function recordData(stand_num, current_time, increment) {
  var lastData = (Set_Data.get(stand_num))[(Set_Data.get(stand_num)).length - 1][1]
  Set_Data.get(stand_num).push([current_time, lastData + increment])
  global_total_dmg += increment
}
function recordData_HF() {
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
function recordData_suffer(stand_num, current_time, decrement) {
  var lastData = (Set_Data_S.get(stand_num))[(Set_Data_S.get(stand_num)).length - 1][1]
  Set_Data_S.get(stand_num).push([current_time, lastData - decrement])
}

function formater_DPS(e) { return lib_language.main_formatDPS_1 + e.x + lib_language.main_formatDPS_2 + e.y }
function formater_ALL(e) { return 'x=' + e.x + ', y=' + e.y }

function get_leader() {
  var num_leader = parseInt(document.getElementById('select_leader').value)
  if (num_leader === -1) {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        num_leader = i
        break
      }
    }
  }
  return num_leader
}
function get_g36_standblo(stand_num) {
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
function get_ump9_samecolumn_list(stand_num) {
  var list_column = [], list_find = [], column = 0
  if (document.getElementById('special_ump9_' + stand_num + '_2').checked) { // 特定列
    column = parseInt(document.getElementById('special_ump9_column_' + stand_num).value) - 1
  } else {
    column = stand_num - 3 * Math.floor(stand_num / 3)
  }
  list_find = [column, column + 3, column + 6]
  for (var member of list_find) {
    if (gs_tdoll[member] && member != stand_num) list_column.push(member)
  }
  list_column.push(stand_num) // 一定对自己生效
  return list_column
}

// 基本语义性函数
function explain_fgl_ff() {
  // 解释伤害加成，力场减免+AOE计算+伤害加深
  // 解释受到伤害加深，目前只有HP-35，与伤害加深判定不同
  // single单体, around_single周遭单体
  // around_multiple周遭群体（乘数量，贯通射击）,
  // aoe范围（乘数量和编制，榴弹等）, around_aoe周遭溅射（乘数量和编制，炮击溅射等）
  // forcefield damage reduction

  var damage_type = arguments['0']
  var special_command = arguments['1']
  var _para_fgl_ff = 1  // 伤害参数返回值

  // 判断是否满力场
  if (damage_type === 'is_maxff') {
    if (display_type === 'damage') {
      if (enemy_forcefield > 0) { // 有力场
        if (1 - enemy_forcefield / enemy_forcefield_max === 0) return true
        else return false
      } else return false // 没力场
    }
    else if (display_type === 'suffer') {
      if (enemy_forcefield_2 > 0) {
        if (1 - enemy_forcefield_2 / enemy_forcefield_2_max === 0) return true
        else return false
      } else return false
    }
  }

  var ff_ratio = 1 // 力场减免倍率
  if (special_command === 'HOC') {
    ff_ratio = 1
  } else if (special_command === undefined) {
    if (display_type === 'damage' && enemy_forcefield > 0) ff_ratio = 1 - enemy_forcefield / enemy_forcefield_max
    else if (display_type === 'suffer' && enemy_forcefield_2 > 0) ff_ratio = 1 - enemy_forcefield_2 / enemy_forcefield_2_max
  }

  // 返回伤害参数
  if (damage_type === 'single') _para_fgl_ff *= (fragile_main * ff_ratio)
  else if (damage_type === 'attack_all') {
    if (aoe_num <= enemy_num_left) _para_fgl_ff *= (fragile_all * ff_ratio * aoe_num)
    else _para_fgl_ff *= (fragile_all * ff_ratio * enemy_num_left)
  }
  else if (damage_type === 'around_single') _para_fgl_ff *= (fragile_all * ff_ratio)
  else if (damage_type === 'around_multiple') _para_fgl_ff *= (fragile_all * ff_ratio * (aoe_num - 1))
  else if (damage_type === 'aoe') {
    if (aoe_num <= enemy_num_left) _para_fgl_ff *= ((fragile_main + (aoe_num - 1) * fragile_all) * enemy_form * ff_ratio)
    else _para_fgl_ff *= ((fragile_main + (enemy_num_left - 1) * fragile_all) * enemy_form * ff_ratio)
  }
  else if (damage_type === 'around_aoe') {
    if (aoe_num <= enemy_num_left) _para_fgl_ff *= (((aoe_num - 1) * fragile_all) * enemy_form * ff_ratio)
    else _para_fgl_ff *= (((enemy_num_left - 1) * fragile_all) * enemy_form * ff_ratio)
  } else if (damage_type == 'HOC') {
    _para_fgl_ff *= ((fragile_main / enemy_num_left) + (fragile_all * (enemy_num_left - 1) / enemy_num_left))
  }

  // 受伤害加深统一结算
  for (var entry of _spG('global_dmgdeepen')) { // [id,is_active,value]
    if (entry[1]) {
      _para_fgl_ff *= entry[2]
    }
  }
  return _para_fgl_ff
}
function explain_heavyfire(hfn) { // 解释重装伤害，包括：力场削减、是否命中、额外破防伤害、基础无视力场伤害
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
  var damage_main_overdbk = 0, damage_aoe_overdbk = 0
  // 技能效果和AOE杀伤计算
  if (hfn === 0) { // BGM-71
    var is_sm = false
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    if (Set_Special.get('BGM_supermissile')) { // 超级导弹
      Set_Special.set('BGM_supermissile', false)
      Set_Special.set('BGM_supermissile_reload', 2)
      Set_Special.set('BGM_superdbk', global_frame + 240)

      is_sm = true
    }
    if (Set_Special.get('BGM_superdbk') > global_frame) { // 超级导弹1.6倍破防
      defencebreaking *= 1.6
    }
    overdbk += do_defencebreaking(defencebreaking)
    overdbk += do_defencebreaking(defencebreaking) // BGM会造成两次破防，并计算溢出破防
    damage_main_overdbk = overdbk; damage_aoe_overdbk = overdbk
    if (is_sm) damage_main *= 1.8 // 超级导弹1.8倍主目标杀伤
    if (Math.random() <= accuracy_rate) { // 命中
      damage_main *= 1.5 * Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_aoe *= 0.5 * Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_main_overdbk *= Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_aoe_overdbk *= Math.pow(1.1, Set_Special.get('BGM_buff_deependmg'))
      damage_main = Math.max(1, Math.ceil(damage_main * (Math.random() * 0.3 + 0.85) + Math.min(2, 400 - target_arm)))
      damage_aoe = Math.max(1, Math.ceil(damage_aoe * (Math.random() * 0.3 + 0.85) + Math.min(2, 400 - target_arm)))
      if (Set_Special.get('BGM_buff_deependmg') < 5) Set_Special.set('BGM_buff_deependmg', Set_Special.get('BGM_buff_deependmg') + 1) // ��杀趣味层数叠加
    } else {
      damage_main = 0; damage_aoe = 0
      damage_main_overdbk = 0; damage_aoe_overdbk = 0
    }
  } else if (hfn === 1) { // AGS-30
    accuracy *= 1.3 // AGS-30 聚焦经验
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    damage_main_overdbk = overdbk; damage_aoe_overdbk = overdbk
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
      damage_main = 0; damage_aoe = 0
      damage_main_overdbk = 0; damage_aoe_overdbk = 0
    }
  } else if (hfn === 2) { // 2B-14
    var extra_main = 0, extra_aoe = 0 // 无场额外杀伤
    accuracy_rate = Math.max(0.4, accuracy / (accuracy + target_eva * 8)) // 命中率
    overdbk = do_defencebreaking(defencebreaking) // 破防，并计算溢出破防
    damage_main_overdbk = overdbk; damage_aoe_overdbk = overdbk
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
      damage_main = 0; damage_aoe = 0
      damage_main_overdbk = 0; damage_aoe_overdbk = 0
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
    damage_main_overdbk = overdbk; damage_aoe_overdbk = overdbk
    if (is_curve) {
      damage_main *= 1.2; damage_aoe *= 1.2
      damage_main_overdbk *= 1.2; damage_aoe_overdbk *= 1.2
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
      damage_main = 0; damage_aoe = 0
      damage_main_overdbk = 0; damage_aoe_overdbk = 0
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
    overdbk += do_defencebreaking(defencebreaking)
    overdbk += do_defencebreaking(defencebreaking) // AT4会造成两次破防，并计算溢出破防
    damage_main_overdbk = overdbk; damage_aoe_overdbk = overdbk
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
      damage_main = 0; damage_aoe = 0
      damage_main_overdbk = 0; damage_aoe_overdbk = 0
    }
  }
  damage_main *= main_multi
  damage_aoe *= aoe_multi
  damage_main_overdbk *= main_multi
  damage_aoe_overdbk *= aoe_multi
  return explain_fgl_ff('HOC', 'HOC') * (damage_main + damage_aoe + damage_main_overdbk + damage_aoe_overdbk)
}

// lable_create
function createBase(Area, Info) {
  var Base = {}
  Base.Area = Area // 影响格位置
  Base.Info = Info // 具体属性
  return Base
}
function createHF(dmg, dbk, acu, fil) {
  var HF = {}
  HF.v1 = dmg
  HF.v2 = dbk
  HF.v3 = acu
  HF.v4 = fil
  return HF
}
