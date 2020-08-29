// lable_judge
function compare_dps(pair_a, pair_b) { return pair_b[1] - pair_a[1]; } // dps比较函数
function is_property(str) { return (str === 'dmg' || str === 'acu' || str === 'eva' || str === 'rof' || str === 'arm' || str === 'crit' || str === 'critdmg' || str === 'cs' || str === 'ap' || str === 'ff' || str === 'shield'); } // 是否是一种属性增益
function is_in_affect_of(stand_a, stand_b) { return Set_Base.get(stand_a).Area[stand_b]; } // stand_b是否在stand_a的人形的影响格上
function is_this(stand_num, ID) { return list_tdoll[stand_num][1].ID === ID } // stand_num处是否是编号为ID的人形
function is_stand(stand_num) { return list_tdoll[stand_num][1] != null } // 某位置上是否有人形
function is_int(num) { return (parseFloat(num) - parseInt(num)) === 0 } // 是否是整数
function is_this_type(stand_num, type) { // 是否为某类型人形，HG~SG序号1~6
  if (list_tdoll[stand_num][1].Type === type) return true
  return false
}
function is_exist_someone(ID) { // 队内是否有编号为ID的人形
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (list_tdoll[i][1].ID === ID) return true
    }
  }
  return false
}
function is_protected(stand_num) { // 是否为大破保护
  if (Set_Special.get('damage_protect')[stand_num]) return false // 尚未触发保护
  else {
    if (Set_Special.get('damage_protect_time' + stand_num) >= global_frame) return true // 正在保护期
    else return false
  }
}
function is_activate_protect(suffer_hp, single_hp, stand_num) {
  if (this_formation(stand_num) === 2) {
    if (Set_Special.get('damage_protect')[stand_num] && suffer_hp <= Math.ceil(single_hp / 2)) return true
  }
  return false
}
function is_python_unrepeat(command) {
  if (command != undefined && command === 'unrepeat') return true
  else return false
}
function is_exist_element(name, list) {// 列表里是否存name
  var is_exist = false
  for (var ele of list) {
    if (ele === name) {
      is_exist = true
      break
    }
  }
  return is_exist
}
function is_exist_pair(pair_name, list) { // 二元组列表里是否存 pair_name 的 [pair_name,value]
  var is_exist = false
  for (var pair of list) {
    if (pair[0] === pair_name) {
      is_exist = true
      break
    }
  }
  return is_exist
}
// function is_in_affect_of(stand_num_this, stand_num_who) { // stand_num_this 是否在 stand_num_who 的影响格上
//   var is_in = false
//   var str_affect = (lib_affect.get(
//     list_tdoll[stand_num][1].ID)).area // 影响格描述串
//   var list_affectstr = str_affect.split('/')
//   list_affectstr.pop()
//   var list_affect = []
//   var center = [Math.floor(stand_num_who / 3), stand_num_who - 3 * Math.floor(stand_num_who / 3)], // 影响格中心坐标
//     current_posi = [Math.floor(stand_num_this / 3), stand_num_this - 3 * Math.floor(stand_num_this / 3)] // 检测者坐标
//   for (var ele_af of list_affectstr) {
//     var temp_posi = center
//     for (var char of ele_af) {
//       if (char === 'u') temp_posi[1]++
//       else if (char === 'd') temp_posi[1]--
//       else if (char === 'r') temp_posi[0]++
//       else if (char === 'l') temp_posi[0]--
//     }
//     list_affect.push(temp_posi)
//   }
//   for (var element of list_affect) {
//     if (element === current_posi) {
//       is_in = true
//       break
//     }
//   }
//   console.log(list_affect)
//   return is_in
// }

// lable_transfer
function _spE(code, is_value) { return Set_Special.get(code) === is_value }
function _spS(code, new_value) { Set_Special.set(code, new_value) }
function _spG(code) { return Set_Special.get(code) }
function _spPlus(code) {
  if (arguments['1'] === undefined) _spS(code, _spG(code) + 1)
  else _spS(code, _spG(code) + arguments['1'])
}
function _spDecl(code) {
  if (arguments['1'] === undefined) _spS(code, _spG(code) - 1)
  else _spS(code, _spG(code) - arguments['1'])
}
function _spDelete(code) { Set_Special.delete(code) }
function num_to_name(num_type) {
  if (num_type === 1) return 'hg'
  else if (num_type === 2) return 'ar'
  else if (num_type === 3) return 'smg'
  else if (num_type === 4) return 'rf'
  else if (num_type === 5) return 'mg'
  else if (num_type === 6) return 'sg'
}
function name_to_num(str_type) {
  if (str_type === 'hg') return 1
  else if (str_type === 'ar') return 2
  else if (str_type === 'smg') return 3
  else if (str_type === 'rf') return 4
  else if (str_type === 'mg') return 5
  else if (str_type === 'sg') return 6
}
function rof_to_frame(num_tn, rof, ID) {
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
    if (ID === 77 || ID === 85 || ID === 109 || ID === 173) { // 连珠终结、暴动宣告射击间隔11帧
      shootframe = 11
    } else if (ID === 275) { // M1895CB间隔9帧
      shootframe = 9
    }
    else shootframe = 10
  } else if (str_tn === 'sg') {
    if (base_rof >= 60) shootframe = 25
    else if (base_rof <= 15) shootframe = 100
    else shootframe = Math.floor(1500 / base_rof)
  }
  return shootframe
}
function rof_to_frame_enemy(base_rof) {
  var shootframe = 100
  if (base_rof >= 120) shootframe = 12
  else if (base_rof <= 15) shootframe = 100
  else shootframe = Math.floor(1500 / base_rof)
  return shootframe
}
function fil_to_frame(filling) {
  if (filling >= 1200) filling = 1200
  return Math.floor(1500 / Math.ceil((300 + filling) / 30))
  // return Math.ceil(45000 / (300 + filling))
}

// this
function this_formation(stand_num) { return list_tdoll[stand_num][0]; }
function this_dmg(hfn) { return list_HF[hfn][1].v1 + list_HF[hfn][2].v1 + list_HF[hfn][3].v1; }
function this_dbk(hfn) { return list_HF[hfn][1].v2 + list_HF[hfn][2].v2 + list_HF[hfn][3].v2; }
function this_acu(hfn) { return list_HF[hfn][1].v3 + list_HF[hfn][2].v3 + list_HF[hfn][3].v3; }
function this_fil(hfn) { return list_HF[hfn][1].v4 + list_HF[hfn][2].v4 + list_HF[hfn][3].v4; }

// get
function get_property(stand_num, pro_name) { // 返回实时属性
  return ((Set_Base.get(stand_num)).Info).get(pro_name)
}
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
function get_common_position() {
  var common_position
  for (var cn = 0; cn < 9; cn++) {
    if (list_tdoll[cn][1] != null) {
      common_position = cn
      break
    }
  }
  return common_position
}
function get_attack_target() {
  var order = [5, 2, 8, 4, 1, 7, 3, 0, 6] // default
  if (inj_order != 'all') {
    // if (Set_Special.get('provoke') === undefined || (Set_Special.get('provoke') <= 0)) {
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
    // } else return 'provoke'
  } else {
    return 9
  }
}
function get_left_hp(stand_num, single_hp) {
  var all_left_hp = Set_Data_S.get(stand_num)[Set_Data_S.get(stand_num).length - 1][1]
  while (all_left_hp - single_hp > 0) all_left_hp -= single_hp
  return all_left_hp
}
function get_skill_icon(ID) { return '&nbsp<img src="../img/echelon/skill/' + ID + '.png" style="width:25px;height:25px">' }

// lable_do
function do_debuff(name, duration) { // 仅记录敌人debuff类型数，不用于实际属性变化
  if (Set_Special.get(name) === undefined || Set_Special.get(name) < global_frame + duration) Set_Special.set(name, global_frame + duration) // mark debuff
}
function do_unique(ID, command) {
  // 新的条目：property中lib_unique添加条目，sub中init_resetAllConfig添加条目，main中reset_unique添加条目
  if (command === 'is_unique') {
    if (lib_unique.get(ID) != undefined) return true
    else return false
  }
  else if (command === 'can_add') { // can add or not
    if (lib_unique.get(ID) != undefined) { // is unique-tdoll
      var now_pick_this = false
      var str_special = lib_unique.get(ID)
      if (list_tdoll[num_pickblock - 1][1] != null) {
        if (list_tdoll[num_pickblock - 1][1].ID === ID) now_pick_this = true // the selected one is itself
      }
      if (Set_Special.get(str_special) || now_pick_this) return true // can add
      else return false
    } else return true // if not unique-tdoll, can add
  }
  else if (command === 'alert') {
    if (ID === 4) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_python
    if (ID === 197) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_carcano
    if (ID === 214) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_ads
    if (ID === 2011) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_jill
    if (ID === 2012) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_sei
    if (ID === 2014) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_stella
  }
  else if (command === 'lock') {
    var str_special = lib_unique.get(ID)
    Set_Special.set(str_special, false)
  }
  else if (command === 'release') {
    var str_special = lib_unique.get(ID)
    Set_Special.set(str_special, true)
  }
}
function do_defencebreaking(defencebreaking) {
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
function do_datasum(this_data, new_data) {
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
function do_jill_buff(stand_num) {
  var wine_type = Set_Static.get('jill_winetype') // 1~6
  var duration = Set_Special.get('jill_space')
  if (wine_type === 1) { // big beer
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i] && is_this_type(i, 6)) { // for SG
        changeStatus(i, 'self', 'arm', 0.2, duration)
        changeStatus(i, 'self', 'dmg', 0.3, duration)
        changeStatus(i, 'self', 'acu', 0.3, duration)
        if (is_this(i, 2016)) {
          var current_arm = ((Set_Base.get(i)).Info).get('arm')
          changeStatus(i, 'self', 'shield', Math.ceil(0.5 * current_arm), -1)
        }
      }
    }
  } else if (wine_type === 2) { // Brandtini
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i] && is_this_type(i, 5)) { // for MG
        changeStatus(i, 'self', 'dmg', 0.2, duration)
        changeStatus(i, 'self', 'acu', 0.2, duration)
      }
    }
  } else if (wine_type === 3) { // Piano woman
    var line_front = -1
    if (gs_tdoll[2] || gs_tdoll[5] || gs_tdoll[8]) line_front = 2
    else if (gs_tdoll[1] || gs_tdoll[4] || gs_tdoll[7]) line_front = 1
    else if (gs_tdoll[0] || gs_tdoll[3] || gs_tdoll[6]) line_front = 0
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i]) {
        if (Math.floor(i / 3) === line_front) changeStatus(i, 'self', 'eva', 0.6, duration)
        else changeStatus(i, 'self', 'dmg', 0.2, duration)
        if (is_this(i, 2013)) do_dorothy_drink(i, duration) // dorothy with piano woman
      }
    }
  } else if (wine_type === 4) { // Moonblast
    changeStatus(stand_num, 'all', 'rof', 0.22, duration)
  } else if (wine_type === 5) { // Bleeding jane
    for (var i = 0; i < 9; i++) {
      if (gs_tdoll[i]) {
        if (is_this_type(i, 2) || is_this_type(i, 4)) {
          changeStatus(i, 'self', 'crit', 0.25, duration)
          var this_crit = ((Set_Base.get(i)).Info).get('crit')
          if (this_crit > 1) {
            changeStatus(i, 'self', 'critdmg', (this_crit - 1) * 0.6, duration) // critdmg-buff
          }
        }
      }
    }
  } else if (wine_type === 6) {
    changeStatus(stand_num, 'all', 'dmg', 0.35, 5)
    Set_Special.set('jill_drunk', global_frame + 150)
    // for debug:
    // recordData(stand_num, global_frame, 0)
    // recordData(stand_num, global_frame, 300000)
    // recordData(stand_num, global_frame + 150, 0)
    // recordData(stand_num, global_frame + 150, -300000)
    // recordData(stand_num, global_frame + 150, 0)
    // recordData(stand_num, global_frame + 150, 300000)
    // recordData(stand_num, global_frame + 240, 0)
    // recordData(stand_num, global_frame + 240, -300000)
    // recordData(stand_num, global_frame + 240, 0)
  } else { // basic drink
    changeStatus(stand_num, 'all', 'dmg', 0.18, duration)
  }
  Set_Special.set('jill_wine_status', [wine_type, global_frame + duration * 30])
}
function do_dorothy_drink(stand_num, duration) { // 抵消一半debuff
  var list_num = [stand_num - 6, stand_num - 3, stand_num + 3, stand_num + 6]
  if (document.getElementById('special_dorothy_' + stand_num + '_1').checked) { // MIRD113模式
    for (var stn of list_num) {
      if (stn >= 0 && stn <= 8) {
        if (gs_tdoll[stn]) {
          changeStatus(stand_num, 'self', 'acu', (1 - 0.2) / (1 - 0.4) - 1, duration, 'unrepeat')
        }
      }
    }
  } else if (document.getElementById('special_dorothy_' + stand_num + '_2').checked) { // 纳米迷彩模式
    for (var stn of list_num) {
      if (stn >= 0 && stn <= 8) {
        if (gs_tdoll[stn]) {
          changeStatus(stand_num, 'self', 'eva', (1 - 0.2) / (1 - 0.4) - 1, duration, 'unrepeat')
        }
      }
    }
  }
}

// lable_init
function init_resetAllConfig() { // 重置所有数据
  global_frame = 0
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
  reset_unique()
  Set_Special.set('damage_protect', [true, true, true, true, true, true, true, true, true]) // 大破保护初始化
  if (is_exist_someone(4)) Set_Special.set('can_add_python', false) // 能否添加蟒蛇
  if (is_exist_someone(197)) Set_Special.set('can_add_carcanom1891', false) // 能否添加CarcanoM1891
  if (is_exist_someone(214)) Set_Special.set('can_add_ads', false) // 能否添加ADS
  if (is_exist_someone(2011)) Set_Special.set('can_add_jill', false) // 能否添加Jill
  if (is_exist_someone(2012)) Set_Special.set('can_add_sei', false) // 能否添加Sei
  if (is_exist_someone(2014)) Set_Special.set('can_add_stella', false) // 能否添加Stella
  if (daytime === 1) Set_Special.set('sunrise', 'day')
  else if (daytime === 2) Set_Special.set('sunrise', 'night')
  for (var i = -2; i < 9; i++) Set_Status.set(i, []) // 初始化空状态表，-2敌人，-1全体，0~8站位，9妖精
  time = Math.floor(30 * parseFloat(document.getElementById('time_battle').value)) // 总帧数，fps=30
  init_frame = Math.floor(30 * parseFloat(document.getElementById('time_init').value)) // 接敌帧数
}
function init_loadPrepareStatus() { // 初始化战前属性
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
  for (var i = 0; i < 10; i++) {
    Set_Data_S.set(i, [[0, 0]]) // 包括妖精在内的生命值初始化
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
        Set_Special.set('AGS_supergrenade', false) // 超级榴弹
        Set_Special.set('AGS_supergrenade_reload', 90)
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
  if (fairy_no === 6) { // 嘲讽靶机
    Set_Data_S.set(9, [[0, 1600]])
    Set_Data_S_Percentage.set(9, [[0, 1]])
  }
  // 全局易伤，独立于伤害加深，目前包括：HP-35
  _spS('global_dmgdeepen', []) // ['id','is_active','value']

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
        if (document.getElementById('special_213_0_' + i).checked) changeStatus(i, 'self', 'eva', 0.65, -1) // 亚音速弹
        else if (document.getElementById('special_213_1_' + i).checked) changeStatus(i, 'self', 'dmg', 0.85, -1) // 勺尖弹
        else if (document.getElementById('special_213_2_' + i).checked) changeStatus(i, 'self', 'acu', 2, -1) // 标准弹
      } else if (is_this(i, 231)) { // M82A1
        _spS('m82a1_win_' + i, parseInt(document.getElementById('special_231_energy_' + i).innerHTML))
      } else if (is_this(i, 238)) { // 88式：初始默认轻机枪
        changeStatus(i, 'self', 'acu', -0.2, -1)
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
      } else if (is_this(i, 270)) { // 四式死线一击层数
        Set_Special.set('type4_' + i, 0)
      } else if (is_this(i, 275)) { // M1895CB备用弹链状态层数
        _spS('m1895cb_buff_acu_' + i, [])
      } else if (is_this(i, 276)) {
        if (document.getElementById('special_kord_' + i + '_0').checked) {
          Set_Special.set('kord_' + i, 'type_p')
          changeStatus(i, 'self', 'dmg', -0.3, -1)
          changeStatus(i, 'self', 'ap', -0.5, -1)
        } else {
          Set_Special.set('kord_' + i, 'type_a')
          changeStatus(i, 'self', 'dmg', 0.2, -1)
          changeStatus(i, 'self', 'acu', 0.2, -1)
        }
      } else if (is_this(i, 290)) { // 89 type
        _spS('89_mode_' + i, 'learn')
        _spS('89_buff_' + i, 0)
        _spS('89_forcus_' + i, 0)
        _spS('89_fsbuff_' + i, 0)
        _spS('89_manual_' + i, false) // 首轮技能复习一次后无效
        _spS('89_auto_' + i, 0)
      } else if (is_this(i, 307)) { // ZB-26
        _spS('zb26_reload_' + i, 0)
      } else if (is_this(i, 1005)) { // 七音之凯歌buff预备发动
        Set_Special.set('m1895_' + i, 0)
      } else if (is_this(i, 1039)) { // 莫辛纳甘：攻击被动
        Set_Special.set('mosin_bufftime_' + i, 0)
      } else if (is_this(i, 1093)) { // IDW电光大狂欢初始3层
        changeStatus(i, 'self', 'dmg', '0.2', 2)
        changeStatus(i, 'self', 'dmg', '0.2', 4)
        changeStatus(i, 'self', 'dmg', '0.2', 6)
        changeStatus(i, 'self', 'rof', '0.1', 2)
        changeStatus(i, 'self', 'rof', '0.1', 4)
        changeStatus(i, 'self', 'rof', '0.1', 6)
      } else if (is_this(i, 2023)) { // 海莉艾塔各类被动层数
        _spS('henri_dmg_' + i, [])
        _spS('henri_eva_' + i, [])
      } else if (is_this(i, 2024)) { // 莉可火力被动层数
        _spS('rico_dmg_' + i, [])
      } else if (is_this(i, 2025)) { // 崔耶拉拔刀
        if (document.getElementById('special_2025_' + i).checked && _spG('sg_ammo_type_' + i) === undefined) {  // 能够拔刀
          changeStatus(i, 'self', 'rof', 0.5, -1)
        }
      } else if (is_this(i, 2026)) { // 库拉耶丝-是否开枪状态
        _spS('claes_firestatus_' + i, false) // 默认蓄力
        _spS('claes_buff_' + i, 0) // 初始0层buff
        _spS('claes_nextbuff_' + i, init_frame + 60) // 下一次buff积累时间
        _spS('claes_globalbuff', [])
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
  // 载入特殊设定——————————————————————
  for (var i = 0; i < 9; i++) {
    if (is_stand(i)) {
      if (is_this(i, 275)) { // m1895cb
        _spS('m1895cb_' + i, 30) // initial 30x bullets
        _spS('m1895cb_add_' + i, 90) // first time add reload
      }
      else if (is_this(i, 292)) { // rpk-16
        _spS('rpk16_' + i, 'mg')
        _spS('rpk16_skill_' + i, 'close')
      }
      else if (is_this(i, 293)) { // ak-15
        _spS('ak15_angry_frame_' + i, 0) // 怒火时间
        _spS('ak15_debuff_num_' + i, 0) // 过载层数
        _spS('ak15_debuff_frame_' + i, 0) // 过载debuff持续
        _spS('ak15_skill_frame_' + i, 0) // 技能持续
        _spS('ak15_nexttime_' + i, 0) // 下次debuff数结算时间
        _spS('ak15_debufflevel_' + i, 0) // 每次debuff层数增量
      }
      else if (is_this(i, 315)) {
        if (document.getElementById('special_315_0_' + i).checked) _spS('aug_type_' + i, 'dps')
        else _spS('aug_type_' + i, 'dfs')
        _spS('aug_layer_' + i, 0)
        _spS('aug_nextarrive_' + i, Math.max(30, init_frame))
      }
      else if (is_this(i, 317)) { // mondragon
        if (get_leader() === i) {
          changeStatus(i, 'self', 'rof', -0.35, -1)
          changeStatus(i, 'allrf', 'crit', 0.2, -1, 'no_self')
          changeStatus(i, 'allrf', 'critdmg', 0.1, -1, 'no_self')
        }
      }
      else if (is_this(i, 319)) { // pm1910
        _spS('pm1910_skillon_' + i, false) // 是否有技能子弹
        _spS('pm1910_left_' + i, 0) // 剩余子弹，技能开启计算
      }
      else if (is_this(i, 1122)) { // g11 mod
        _spS('g11_layer_' + i, 0) // G11攻击次数
      }
      else if (is_this(i, 2014)) { // stella
        changeStatus(i, 'self', 'dmg', -0.5, -1)
      }
    }
  }
  // 载入技能——————————————————————
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      var list_Skill = []
      var extra_cd = 0
      if (document.getElementById('check_cd_' + i).checked) extra_cd = parseFloat(document.getElementById('addcd_' + i).value)
      if (is_this(i, 316)) { // 刘氏步枪本体和傀儡拥有独立的普攻
        list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // 载入本体普攻
        list_Skill.push([createSkill(3, 0, 0, lib_describe.get('attack1')), 0]) // 载入傀儡普攻
        list_Skill.push([createSkill(3, 0, 0, lib_describe.get('attack2')), 0]) // 载入傀儡普攻
        list_Skill.push([createSkill(3, 0, 0, lib_describe.get('attack3')), 0]) // 载入傀儡普攻
      }
      else if (is_this(i, 2011)) true // Jill不能普攻
      else if (is_this(i, 2016)) true // Dana单发子弹必须先执行技能
      else if (is_this(i, 2014)) true // Stella单发子弹必须先执行技能
      else list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // 载入普攻
      for (var v_skill of list_tdoll[i][1].Skill) {
        list_Skill.push([v_skill, Math.ceil(30 * ((v_skill.init_cld) * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))]) // 载入技能表
      }

      // 动态载入技能：根据特设选项决定载入技能的类型
      if (is_this(i, 1065)) { // HK416 MOD
        var s1 = createSkill(6, 16, 0, lib_describe.get('grenade_19.5')),
          s2 = createSkill(6, 16, 0, lib_describe.get('hk416_dot')),
          s3 = createSkill(6, 16, 0, lib_describe.get('hk416_fragile'))
        if (document.getElementById('special_1065_' + i).checked) list_Skill.push([s1, Math.ceil(30 * (6 * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        else {
          list_Skill.push([s2, Math.ceil(30 * (6 * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
          list_Skill.push([s3, Math.ceil(30 * (6 * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        }
      }
      if (is_this(i, 1039)) { // Mosin-nagant MOD skill
        var s1 = createSkill(10, 16, 0, lib_describe.get('snipe_6.5')), // full-energy
          s2 = createSkill(5, 11, 0, lib_describe.get('snipe_3'))
        if (document.getElementById('special_1039_1_' + i).checked) {
          list_Skill.push([s1, Math.ceil(30 * (10 * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        } else {
          list_Skill.push([s2, Math.ceil(30 * (5 * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        }
      }
      if (is_this(i, 1053)) { // NTW-20 MOD skill
        var energy_layer = parseInt(document.getElementById('special_1053_energy_' + i).innerHTML)
        var dynamic_skill = createSkill(6 + energy_layer, 8 + energy_layer, 0, lib_describe.get('snipe_' + (5 + (energy_layer - 1) * (5 / 6)).toFixed(1) + '_1.5'))
        list_Skill.push([dynamic_skill, Math.ceil(30 * ((6 + energy_layer) * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        if (document.getElementById('special_1053_1_' + i).checked) _spS('ntw_exratio_' + i, 4.4) // 高血量额外10%伤害
        else _spS('ntw_exratio_' + i, 4)
        _spS('ntw_numleft_' + i, 3) // 最大追加次数
        _spS('ntw_exenable_' + i, true) // 第一次必可以追加
      }
      if (is_this(i, 1124)) { // SuperSASS MOD skill
        var energy_layer = parseInt(document.getElementById('special_1124_energy_' + i).innerHTML)
        var dynamic_skill_1 = createSkill(4 + energy_layer, 10 + energy_layer, 0, lib_describe.get('snipe_' + (2 + energy_layer * 0.8) + '_1')),
          dynamic_skill_2 = createSkill(4 + energy_layer, 10 + energy_layer, 0, lib_describe.get('supersass'))
        list_Skill.push([dynamic_skill_1, Math.ceil(30 * ((4 + energy_layer) * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
        list_Skill.push([dynamic_skill_2, Math.ceil(30 * ((4 + energy_layer) * (1 - Set_Base.get(i).Info.get('cld')) + extra_cd))])
      }
      if (is_this(i, 2014)) list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // Stella普攻在技能后
      if (is_this(i, 2016)) list_Skill.push([createSkill(0, 0, 0, lib_describe.get('attack')), 0]) // Dana普攻在技能后
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
function init_loadEnemyInfo() {
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
function init_loadFairy(common_position) {
  if (document.getElementById('check_init_construction').checked) {
    changeStatus(common_position, 'all', 'dmg', '0.3', -1)
    changeStatus(common_position, 'all', 'acu', '0.3', -1)
    changeStatus(common_position, 'all', 'eva', '0.3', -1)
    changeStatus(common_position, 'all', 'arm', '0.3', -1)
    changeStatus(common_position, 'all', 'crit', '0.3', -1)
  }
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
      if (display_type === 'suffer') recordData(9, 0, 1600)
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
      if (!document.getElementById('check_init_construction').checked) { // 不重复叠加紧急壁垒
        changeStatus(common_position, 'all', 'dmg', '0.3', -1)
        changeStatus(common_position, 'all', 'acu', '0.3', -1)
        changeStatus(common_position, 'all', 'eva', '0.3', -1)
        changeStatus(common_position, 'all', 'arm', '0.3', -1)
        changeStatus(common_position, 'all', 'crit', '0.3', -1)
      }
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
    } else if (fairy_no === 22) { // 懈怠浪潮
      do_debuff('enemy_rof', 5 * 30)
      endStatus(-1, [['enemy_rof', -0.25], 5 * 30], 'enemy_get')
      do_debuff('enemy_speed', 5 * 30)
      endStatus(-1, [['enemy_speed', -0.25], 5 * 30], 'enemy_get')
    } else if (fairy_no === 23) {
      if (document.getElementById('special_fairyskill_0').checked) { // 连携号令
        changeStatus(common_position, 'all', 'dmg', 0.520875, 20)
        changeStatus(common_position, 'all', 'acu', 1.197, 20)
      } else if (document.getElementById('special_fairyskill_1').checked) {
        changeStatus(common_position, 'all', 'dmg', 0.3225, 20)
        changeStatus(common_position, 'all', 'acu', 0.69, 20)
      } else if (document.getElementById('special_fairyskill_2').checked) {
        changeStatus(common_position, 'all', 'dmg', 0.15, 20)
        changeStatus(common_position, 'all', 'acu', 0.3, 20)
      }
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

// lable_debug
function debug_addinfo() {
  var command = arguments['0']
  if (command === 'attack_skill') { // stand_num, skillname, global_frame, interval
    var stand_num = arguments['1']
    var skillname = arguments['2']
    var time = arguments['3']
    var interval = arguments['4']
    var skill_color = '#ff6600', skill_cld = '<span style="color:#00cc00">cooldown</span>'
    if (skillname === 'attack' && debug_function[0]) { // show_attack
      skill_color = '#6600ff'
      skill_cld = 'interval'
      var str = '<span style="color:grey">' + debug_line + ' &#62 '
      str += '[<span style="color:#000000">' + trans_if_need(stand_num + 1) + '-' + list_tdoll[stand_num][1].Name + '</span>]'
      str += ' do '
      str += '[<span style="color:' + skill_color + '">' + skillname + '</span>]'
      str += ' in '
      str += '<span style="color:#000000">' + time + '</span>f (<span style="color:#000000">' + (time / 30).toFixed(2) + '</span>s)'
      str += ' , ' + skill_cld + ' ' + '<span style="color:#000000">' + interval + '</span>f (<span style="color:#000000">' + (interval / 30).toFixed(2) + '</span>s)'
      str += '</span><br>'
      debug_line++
      document.getElementById('debug_content').innerHTML += str
    }
    if (skillname != 'attack' && debug_function[1]) {
      var str = '<span style="color:grey">' + debug_line + ' &#62 '
      str += '[<span style="color:#000000">' + trans_if_need(stand_num + 1) + '-' + list_tdoll[stand_num][1].Name + '</span>]'
      str += ' do '
      str += '[<span style="color:' + skill_color + '">' + skillname + '</span>]'
      str += ' in '
      str += '<span style="color:#000000">' + time + '</span>f (<span style="color:#000000">' + (time / 30).toFixed(2) + '</span>s)'
      str += ' , ' + skill_cld + ' ' + '<span style="color:#000000">' + interval + '</span>f (<span style="color:#000000">' + (interval / 30).toFixed(2) + '</span>s)'
      str += '</span><br>'
      debug_line++
      document.getElementById('debug_content').innerHTML += str
    }
  } else if (command === 'status') { // stand_num, target, type, value, duration, global_frame
    var stand_num = arguments['1']
    if (gs_tdoll[stand_num]) {
      var target = arguments['2']
      var type = arguments['3']
      var value = arguments['4']
      var duration = arguments['5']
      var time = arguments['6']
      var status_color = '#660099'
      var str = '<span style="color:grey">' + debug_line + ' &#62 '
      str += '[<span style="color:#000000">' + trans_if_need(stand_num + 1) + '-' + list_tdoll[stand_num][1].Name + '</span>]'
      str += ' change '
      str += '[<span style="color:' + status_color + '">' + type
      if (value >= 0) {
        str += ' +' + (value * 100).toFixed(2) + '%'
      } else {
        str += ' ' + (value * 100).toFixed(2) + '%'
      }
      str += '</span>] in '
      str += '<span style="color:#000000">' + time + '</span>f (<span style="color:#000000">' + (time / 30).toFixed(2) + '</span>s)'
      str += ' to ' + '[<span style="color:' + status_color + '">' + target + '</span>] last ' + '<span style="color:#000000">' + Math.floor(30 * duration) + '</span>f (<span style="color:#000000">' + duration + '</span>s)'
      str += '</span><br>'
      debug_line++
      document.getElementById('debug_content').innerHTML += str
    }
  }
}

function multilayer_process(special_id, command) { // 多层buff生效数层处理
  // new_layer: [property_type,value,duration]
  // layer: [property_type,value,lifetime]
  if (command === 'add') {
    var layers = _spG(special_id),
      new_layer = arguments['2']
    new_layer[2] += global_frame // transfer duration to lifetime
    layers.push(new_layer)
    _spS(special_id, layers)
    _clean_layer(special_id)
  }
  else if (command === 'get') {
    _clean_layer(special_id)
    return _spG(special_id).length
  }
}
function _clean_layer(special_id) { // 清空过时的buff层数
  var layers = _spG(special_id),
    is_dirty = true
  while (is_dirty) {
    if (layers.length === 0) is_dirty = false // no buff layer
    else {
      if (layers[0][2] < global_frame) {
        is_dirty = true
        layers.splice(0, 1)
      } else is_dirty = false
    }
  }
}
function _empty_layer(special_id) { _spS(special_id, []) } // 清空所有叠加buff

function debug_clear() { document.getElementById('debug_content').innerHTML = ''; debug_line = 0; }