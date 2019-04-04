function showAffect () {
  for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) document.getElementById('a' + i + '' + j).style = 'background-color:#000000'
  }
  if (set_guntype >= 1) {
    var ID = parseInt(document.getElementById('select_tdoll').value)
    var affect = lib_affect.get(ID)
    var list_area = (affect.area).split('/')
    var target = affect.target
    var affect_type = affect.affect_type
    var affect_value = affect.affect_value
    var str_final = lib_language.UI_affect
    var len = list_area.length - 1, base = [2, 2]
    var list_posi = [base]
    for (var i = 0; i < len; i++) {
      var len_wd = list_area[i].length
      var next_position = base.concat([])
      for (var n = 0; n < len_wd; n++) {
        if (list_area[i][n] === 'u') next_position[1]--
        else if (list_area[i][n] === 'd') next_position[1]++
        else if (list_area[i][n] === 'l') next_position[0]--
        else if (list_area[i][n] === 'r') next_position[0]++
      }
      if (next_position[0] - 1 < 0) {
        for (var e of list_posi) e[0] -= (next_position[0] - 1)
        next_position[0] -= (next_position[0] - 1)
      } else if (3 - next_position[0] < 0) {
        for (var e of list_posi) e[0] += (3 - next_position[0])
        next_position[0] += (3 - next_position[0])
      }
      if (next_position[1] - 1 < 0) {
        for (var e of list_posi) e[1] -= (next_position[1] - 1)
        next_position[1] -= (next_position[1] - 1)
      } else if (3 - next_position[1] < 0) {
        for (var e of list_posi) e[1] += (3 - next_position[1])
        next_position[1] += (3 - next_position[1])
      }
      list_posi.push(next_position)
    }
    for (var e of list_posi) document.getElementById('a' + e[1] + '' + e[0]).style = 'background-color:#00FFDE'
    document.getElementById('a' + list_posi[0][1] + '' + list_posi[0][0]).style = 'background-color:#FFFFFF'
    str_final += target.toUpperCase() + ', '
    var len_t = affect_type.length
    for (var i = 0; i < len_t; i++) {
      var str_temp = ''
      if (affect_type[i] === 'dmg') str_temp = lib_language.dmg + '+'
      else if (affect_type[i] === 'rof') str_temp = lib_language.rof + '+'
      else if (affect_type[i] === 'acu') str_temp = lib_language.acu + '+'
      else if (affect_type[i] === 'eva') str_temp = lib_language.eva + '+'
      else if (affect_type[i] === 'crit') str_temp = lib_language.crit + '+'
      else if (affect_type[i] === 'arm') str_temp = lib_language.arm + '+'
      else if (affect_type[i] === 'cld') str_temp = lib_language.cld + '-'
      str_temp += parseInt(100 * parseFloat(affect_value[i])) + '% '
      str_final += str_temp
    }
    document.getElementById('a_exp').innerHTML = str_final
  } else {
    document.getElementById('a_exp').innerHTML = ''
  }
  var str_a_have = ''

  if (num_pickblock === -1 || list_tdoll[num_pickblock - 1][1] === null) {
    document.getElementById('a_have').innerHTML = lib_language.UI_putsee
  } else {
    var this_blo = blockSet[num_pickblock - 1]
    var this_type = num_to_name(list_tdoll[num_pickblock - 1][1].Type), len_type = this_type.length
    var dmg = 0, rof = 0, acu = 0, crit = 0, eva = 0, arm = 0, cld = 0
    for (var [k, v] of this_blo) {
      if (k.substr(0, 3) === 'all') {
        if (k.substr(3) === 'dmg') dmg += 100 * v
        else if (k.substr(3) === 'rof') rof += 100 * v
        else if (k.substr(3) === 'acu') acu += 100 * v
        else if (k.substr(3) === 'crit') crit += 100 * v
        else if (k.substr(3) === 'eva') eva += 100 * v
        else if (k.substr(3) === 'arm') arm += 100 * v
        else if (k.substr(3) === 'cld') cld += 100 * v
      } else if (k.substr(0, len_type) === this_type) {
        if (k.substr(len_type) === 'dmg') dmg += 100 * v
        else if (k.substr(len_type) === 'rof') rof += 100 * v
        else if (k.substr(len_type) === 'acu') acu += 100 * v
        else if (k.substr(len_type) === 'crit') crit += 100 * v
        else if (k.substr(len_type) === 'eva') eva += 100 * v
        else if (k.substr(len_type) === 'arm') arm += 100 * v
        else if (k.substr(len_type) === 'cld') cld += 100 * v
      }
    }
    dmg = Math.round(dmg)
    rof = Math.round(rof)
    acu = Math.round(acu)
    crit = Math.round(crit)
    eva = Math.round(eva)
    arm = Math.round(arm)
    cld = Math.round(cld)
    var num_buff = 0
    if (dmg > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.dmg + '+' + dmg + '%  '
      num_buff++
    }
    if (rof > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.rof + '+' + rof + '%  '
      num_buff++
    }
    if (acu > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.acu + '+' + acu + '%  '
      num_buff++
    }
    if (crit > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.crit + '+' + crit + '%  '
      num_buff++
    }
    if (eva > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.eva + '+' + eva + '%  '
      num_buff++
    }
    if (arm > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.arm + '+' + arm + '%  '
      num_buff++
    }
    if (cld > 0) {
      if (num_buff === 3) {
        num_buff = 0
        str_a_have += '<br>'
      }
      str_a_have += lib_language.cld + '-' + cld + '%  '
    }
    document.getElementById('a_have').innerHTML = str_a_have
  }
}

function pickBlock (num) { // 选定格子，只有选定状态才能激活UI，管理全局变量switch_operate和num_pickblock
  if (num_pickblock === num) num_pickblock = -1 // 点已选定的格子，取消选定
  else num_pickblock = num // 选定没选定的格子
  if (num_pickblock > 0) switch_operate = true
  else switch_operate = false
  manageUI('pick-block')
}

function changeAffection () { // 改变好感度，别把Affection(好感度)和Affect(影响格效果)搞混了哦！管理全局变量affection
  var command = arguments['0']
  if (command === undefined) {
    if (affection === 'love') affection = 'marry'
    else if (affection === 'marry') affection = 'love'
  }
  manageUI('change-affection')
}

function changeStar (num) { // 改变星级，管理全局变量num_star
  if (num === 1 && num_star < 5) num_star++
  else if (num === 0 && num_star > 2) {
    if (set_guntype != 6 && num_star > 2) num_star--
    else if (set_guntype === 6 && num_star > 3) num_star--
  }
  else if (num === -1) num_star = 5
  else if (num <= 5 && num >= 2) num_star = num
  manageUI('change-star')
  changeSelectItems()
}

function pickGunType (num) { // 选定枪种后改变全局变量set_guntype
  set_guntype = num
  manageUI('pick-gun')
  changeStar(-1)
  changeSelectItems()
}
function pickEquip (num) { // 选定装备格子，管理全局变量num_pickequip
  num_pickequip = num
  if (num_pickequip > 0) switch_equip = true
  else switch_equip = false
  manageUI('pick-equip')
  changeEquip()
}

function manageUI () { // 管理图标变化，不涉及后台数值
  document.getElementById('alert_display').innerHTML = ''
  var command = arguments['0']
  if (command === 'pick-block') {
    for (var i = 1; i <= 9; i++) document.getElementById('img_' + i).src = '../img/echelon/select-no.png'
    if (num_pickblock > 0) {
      document.getElementById('img_' + num_pickblock).src = '../img/echelon/select.png'
    }
    var can_editTdoll = false, can_add = false, can_delete = false, need_refresh = false
    if (switch_operate && isEmptyBlock()) { // 选中，没人：可以编辑、添加，不能删除
      can_editTdoll = true
      can_add = true
      can_delete = false
      need_refresh = true
    } else if (switch_operate && !isEmptyBlock()) { // 选中，有人：可以编辑、添加（覆盖）、删除，但不会刷新到默认状态
      can_editTdoll = true
      can_add = true
      can_delete = true
      need_refresh = false
    } else if (!switch_operate) { // 没选中：不能编辑、添加、删除
      can_editTdoll = false
      can_add = false
      can_delete = false
      need_refresh = false
    }
    if (can_editTdoll) {
      changeStar(100)
      if (need_refresh) pickGunType(1)
      else {
        readStatus()
        changePreview()
      }
    } else {
      pickGunType(0)
      changeStar(-1)
    }
    if (can_add) {
      document.getElementById('button_addTdoll').disabled = false
    } else {
      document.getElementById('button_addTdoll').disabled = true
    }
    if (can_delete) {
      document.getElementById('button_deleteTdoll').disabled = false
    } else {
      document.getElementById('button_deleteTdoll').disabled = true
    }
  }
  else if (command === 'pick-equip') {
    for (var i = 1; i <= 3; i++) {
      document.getElementById('icon-equip' + i).src = '../img/echelon/equip/select-equip-no.png'
    }
    if (num_pickequip > 0) {
      document.getElementById('icon-equip' + num_pickequip).src = '../img/echelon/equip/select-equip.png'
    }
  }
  else if (command === 'change-affection') {
    document.getElementById('img_affection').src = '../img/echelon/icon-' + affection + '.png'
    changePreview()
  }
  else if (command === 'change-star') {
    document.getElementById('icon-star').src = '../img/echelon/icon-' + num_star + 'star.png'
    document.getElementById('icon-addstar').src = '../img/echelon/icon-add.png'
    document.getElementById('icon-substar').src = '../img/echelon/icon-sub.png'
    document.getElementById('icon-addstar').style = 'cursor: pointer'
    document.getElementById('icon-substar').style = 'cursor: pointer'
    document.getElementById('icon-addstar').onclick = Function('changeStar(1)')
    document.getElementById('icon-substar').onclick = Function('changeStar(0)')
    if (num_star === 5) {
      document.getElementById('icon-addstar').src = '../img/echelon/icon-add-disable.png'
      document.getElementById('icon-addstar').style = 'cursor: default'
      document.getElementById('icon-addstar').onclick = ''
    }
    if (num_star === 3 && set_guntype === 6) {
      document.getElementById('icon-substar').src = '../img/echelon/icon-sub-disable.png'
      document.getElementById('icon-substar').style = 'cursor: default'
      document.getElementById('icon-substar').onclick = ''
    }
    if (num_star === 2) {
      document.getElementById('icon-substar').src = '../img/echelon/icon-sub-disable.png'
      document.getElementById('icon-substar').style = 'cursor: default'
      document.getElementById('icon-substar').onclick = ''
    }
    if (set_guntype === 0) {
      document.getElementById('icon-star').src = '../img/echelon/icon-5star.png'
      document.getElementById('icon-addstar').src = '../img/echelon/icon-add-disable.png'
      document.getElementById('icon-substar').src = '../img/echelon/icon-sub-disable.png'
      document.getElementById('icon-addstar').style = 'cursor: default'
      document.getElementById('icon-substar').style = 'cursor: default'
      document.getElementById('icon-addstar').onclick = ''
      document.getElementById('icon-substar').onclick = ''
    }
  }
  else if (command === 'pick-gun') {
    if (set_guntype === 0) {
      // guntype selection lock
      document.getElementById('icon-hg').src = '../img/echelon/icon-hg-disable.png'
      document.getElementById('icon-ar').src = '../img/echelon/icon-ar-disable.png'
      document.getElementById('icon-smg').src = '../img/echelon/icon-smg-disable.png'
      document.getElementById('icon-rf').src = '../img/echelon/icon-rf-disable.png'
      document.getElementById('icon-mg').src = '../img/echelon/icon-mg-disable.png'
      document.getElementById('icon-sg').src = '../img/echelon/icon-sg-disable.png'
      document.getElementById('icon-hg').style = 'cursor:default'
      document.getElementById('icon-ar').style = 'cursor:default'
      document.getElementById('icon-smg').style = 'cursor:default'
      document.getElementById('icon-rf').style = 'cursor:default'
      document.getElementById('icon-mg').style = 'cursor:default'
      document.getElementById('icon-sg').style = 'cursor:default'
      document.getElementById('icon-hg').onclick = ''
      document.getElementById('icon-ar').onclick = ''
      document.getElementById('icon-smg').onclick = ''
      document.getElementById('icon-rf').onclick = ''
      document.getElementById('icon-mg').onclick = ''
      document.getElementById('icon-sg').onclick = ''
      // equip selection lock
      resetEquipment()
    } else {
      document.getElementById('icon-hg').src = '../img/echelon/icon-hg.png'
      document.getElementById('icon-ar').src = '../img/echelon/icon-ar.png'
      document.getElementById('icon-smg').src = '../img/echelon/icon-smg.png'
      document.getElementById('icon-rf').src = '../img/echelon/icon-rf.png'
      document.getElementById('icon-mg').src = '../img/echelon/icon-mg.png'
      document.getElementById('icon-sg').src = '../img/echelon/icon-sg.png'
      document.getElementById('icon-hg').style = 'cursor:pointer'
      document.getElementById('icon-ar').style = 'cursor:pointer'
      document.getElementById('icon-smg').style = 'cursor:pointer'
      document.getElementById('icon-rf').style = 'cursor:pointer'
      document.getElementById('icon-mg').style = 'cursor:pointer'
      document.getElementById('icon-sg').style = 'cursor:pointer'
      document.getElementById('icon-hg').onclick = Function('pickGunType(1)')
      document.getElementById('icon-ar').onclick = Function('pickGunType(2)')
      document.getElementById('icon-smg').onclick = Function('pickGunType(3)')
      document.getElementById('icon-rf').onclick = Function('pickGunType(4)')
      document.getElementById('icon-mg').onclick = Function('pickGunType(5)')
      document.getElementById('icon-sg').onclick = Function('pickGunType(6)')
      if (set_guntype === 1) document.getElementById('icon-hg').src = '../img/echelon/icon-hg-pick.png'
      else if (set_guntype === 2) document.getElementById('icon-ar').src = '../img/echelon/icon-ar-pick.png'
      else if (set_guntype === 3) document.getElementById('icon-smg').src = '../img/echelon/icon-smg-pick.png'
      else if (set_guntype === 4) document.getElementById('icon-rf').src = '../img/echelon/icon-rf-pick.png'
      else if (set_guntype === 5) document.getElementById('icon-mg').src = '../img/echelon/icon-mg-pick.png'
      else if (set_guntype === 6) document.getElementById('icon-sg').src = '../img/echelon/icon-sg-pick.png'
      // equip selection unlock
      resetEquipment()
    }
  }
}
function resetEquipment () {
  if (set_guntype <= 0) {
    set_equip = [0, 0, 0]
    document.getElementById('img_e1').style = ''
    document.getElementById('img_e2').style = ''
    document.getElementById('img_e3').style = ''
    document.getElementById('icon-equip1').style = 'cursor:default'
    document.getElementById('icon-equip2').style = 'cursor:default'
    document.getElementById('icon-equip3').style = 'cursor:default'
    document.getElementById('icon-equip1').onclick = ''
    document.getElementById('icon-equip2').onclick = ''
    document.getElementById('icon-equip3').onclick = ''
  } else {
    var ID = parseInt(document.getElementById('select_tdoll').value)
    if (set_guntype === 1) {
      if (ID === 4) set_equip = [11, 21, 31] // python
      else if (ID === 7) set_equip = [17, 21, 32] // stechkin
      else if (ID === 1001) set_equip = [11001, 21, 32] // colt mod
      else if (ID === 1002) set_equip = [11, 21002, 31] // m1911 mod
      else if (ID === 1005) set_equip = [11005, 21, 32] // m1895 mod
      else if (ID === 1091) set_equip = [11091, 21, 32] // mp446 mod
      else if (ID === 2009) set_equip = [42009, 21, 32] // clear
      else if (ID === 2010) set_equip = [42010, 21, 32] // fail
      else set_equip = [11, 21, 32]
    }
    else if (set_guntype === 2) {
      if (ID === 54) set_equip = [32, 22, 354] // m16
      else if (ID === 56) set_equip = [12, 22, 14] // sop2
      else if (ID === 57) set_equip = [12, 21057, 14] // ar15
      else if (ID === 62) set_equip = [12, 22, 362] // g41
      else if (ID === 65) set_equip = [165, 22, 31] // hk416
      else if (ID === 58 || ID === 66) set_equip = [166, 22, 31] // ak47 56-1
      else if (ID === 69) set_equip = [169, 22, 31] // famas
      else if (ID === 1056) set_equip = [12, 22, 11056] // sop2 mod
      else if (ID === 1057) set_equip = [12, 21057, 11057] // ar15 mod
      else if (ID === 1055) set_equip = [12, 22, 31055] // m4 mod
      else if (ID === 1064) set_equip = [11064, 22, 31] // g36 mod
      else if (ID === 1063) set_equip = [11063, 22, 31] // g3 mod
      else set_equip = [12, 22, 31]
    }
    else if (set_guntype === 3) {
      if (ID === 26) set_equip = [326, 21, 11] // mp5
      else if (ID === 101 || ID === 102 || ID === 103) set_equip = [3103, 21, 11] // UMP
      else if (ID === 20 || ID === 21 || ID === 22 || ID === 27 || ID === 135 || ID === 251 || ID === 136 || ID === 177) set_equip = [31, 21, 11] // 输出型
      else if (ID === 1103) set_equip = [3103, 21, 11103] // ump45 mod
      else if (ID === 1029) set_equip = [32, 21, 11029] // sten mod
      else if (ID === 1093) set_equip = [31093, 21, 11] // IDW mod
      else if (ID === 1094) set_equip = [32, 21, 11094] // 64type mod
      else set_equip = [32, 21, 11]
    }
    else if (set_guntype === 4) {
      if (ID === 36) set_equip = [12, 236, 34] // springfield
      else if (ID === 39) set_equip = [12, 23, 31039] // mosin
      else if (ID === 42) set_equip = [12, 23, 342] // ptrd
      else if (ID === 46) set_equip = [146, 23, 34] // kar98k
      else if (ID === 1039) set_equip = [11039, 23, 31039] // mosin mod
      else if (ID === 1037) set_equip = [11037, 23, 34] // m14 mod
      else if (ID === 1044) set_equip = [12, 23, 31044] // sv98 mod
      else if (ID === 1051) set_equip = [11051, 23, 34] // fn49 mod
      else set_equip = [12, 23, 34]
    }
    else if (set_guntype === 5) {
      if (ID === 75 || ID === 1075) set_equip = [12, 23, 31075] // m1918
      else if (ID === 88) set_equip = [12, 23, 388] // MG3
      else if (ID === 185) set_equip = [12, 23, 3185] // ameli
      else if (ID === 1081) set_equip = [11081, 23, 35] // lwmmg mod
      else set_equip = [12, 23, 35]
    }
    else if (set_guntype === 6) set_equip = [33, 24, 13]
    document.getElementById('img_e1').style = 'background:url(../img/echelon/equip/' + set_equip[0] + '.png)'
    document.getElementById('img_e2').style = 'background:url(../img/echelon/equip/' + set_equip[1] + '.png)'
    document.getElementById('img_e3').style = 'background:url(../img/echelon/equip/' + set_equip[2] + '.png)'
    document.getElementById('icon-equip1').style = 'cursor:pointer'
    document.getElementById('icon-equip2').style = 'cursor:pointer'
    document.getElementById('icon-equip3').style = 'cursor:pointer'
    document.getElementById('icon-equip1').onclick = Function('pickEquip(1)')
    document.getElementById('icon-equip2').onclick = Function('pickEquip(2)')
    document.getElementById('icon-equip3').onclick = Function('pickEquip(3)')
  }
}
function isEmptyBlock () {
  if (list_tdoll[num_pickblock - 1][1] === null) return true
  else return false
}

function changePreview () { // 改变预览显示，也会改变装备对应全局变量set_equip
  var command = arguments['0']
  if (command === 1) {
    pickEquip(-1)
    resetEquipment()
  }
  var selectID = document.getElementById('select_tdoll')
  var selectID_equip = document.getElementById('select_equip')
  var ID = parseInt(selectID.value)
  var ID_equip = parseInt(selectID_equip.value)
  if (switch_equip) { // 装备能改变，必然是装备被选中之时
    if (ID_equip === 0) document.getElementById('img_e' + num_pickequip).style = 'background: url(../img/echelon/equip/select-equip-no.png)'
    else document.getElementById('img_e' + num_pickequip).style = 'background: url(../img/echelon/equip/' + ID_equip + '.png)'
    set_equip[num_pickequip - 1] = ID_equip
  }
  // 刷新人物和装备显示
  document.getElementById('img_display').style = 'background: url(../img/echelon/' + ID + '.png)'
  document.getElementById('img_e1').style = 'background:url(../img/echelon/equip/' + set_equip[0] + '.png)'
  document.getElementById('img_e2').style = 'background:url(../img/echelon/equip/' + set_equip[1] + '.png)'
  document.getElementById('img_e3').style = 'background:url(../img/echelon/equip/' + set_equip[2] + '.png)'
  if (ID <= 0) { // 没选中
    document.getElementById('info_name').innerHTML = lib_language.UI_pickblock
    document.getElementById('info_num').innerHTML = '# -'
    document.getElementById('info_type').innerHTML = '-'
    document.getElementById('info_hp').innerHTML = lib_language.hp + ' -'
    document.getElementById('info_cs').innerHTML = lib_language.cs + ' -'
    document.getElementById('info_dmg').innerHTML = lib_language.dmg + ' -'
    document.getElementById('info_rof').innerHTML = lib_language.rof + ' -'
    document.getElementById('info_acu').innerHTML = lib_language.acu + ' -'
    document.getElementById('info_eva').innerHTML = lib_language.eva + ' -'
    document.getElementById('info_crit').innerHTML = lib_language.crit + ' -'
    document.getElementById('info_critdmg').innerHTML = lib_language.critdmg + ' -'
    document.getElementById('info_arm').innerHTML = lib_language.arm + ' -'
    document.getElementById('info_ap').innerHTML = lib_language.ap + ' -'
  } else {
    var selectIdx = selectID.selectedIndex
    var selectTxt = selectID[selectIdx].text
    var property_display = lib_property.get(ID)
    var str_name = '', str_type = ''
    for (var i = 0; i < selectTxt.length; i++) {
      if (selectTxt[i] === ' ') {
        str_name = selectTxt.substr(i + 1)
        break
      }
    }
    // create info
    for (var i = 0; i < num_star; i++) str_type += '★'
    if (set_guntype === 1) str_type += ' HG'
    else if (set_guntype === 2) str_type += ' AR'
    else if (set_guntype === 3) str_type += ' SMG'
    else if (set_guntype === 4) str_type += ' RF'
    else if (set_guntype === 5) str_type += ' MG'
    else if (set_guntype === 6) str_type += ' SG'
    document.getElementById('info_name').innerHTML = str_name
    document.getElementById('info_num').innerHTML = '# ' + ID
    document.getElementById('info_type').innerHTML = str_type
    document.getElementById('info_hp').innerHTML = lib_language.hp + ' <span style="color:green">' + property_display.hp + '</span>'
    if (property_display.cs < 0) document.getElementById('info_cs').innerHTML = lib_language.cs + ' ∞'
    else {
      if (set_guntype === 5 && set_equip[2] != 0) document.getElementById('info_cs').innerHTML = lib_language.cs + ' <span style="color:green">' + property_display.cs + '+' + lib_property_equip.get(set_equip[2]).cs + '</span>'
      else if (set_guntype === 6) document.getElementById('info_cs').innerHTML = lib_language.cs + ' <span style="color:green">' + property_display.cs + '</span>'
      else document.getElementById('info_cs').innerHTML = lib_language.cs + ' <span style="color:green">' + property_display.cs + '</span>'
    }
    var e_dmg = lib_property_equip.get(set_equip[0]).dmg + lib_property_equip.get(set_equip[1]).dmg + lib_property_equip.get(set_equip[2]).dmg
    var e_rof = lib_property_equip.get(set_equip[0]).rof + lib_property_equip.get(set_equip[1]).rof + lib_property_equip.get(set_equip[2]).rof
    var e_acu = lib_property_equip.get(set_equip[0]).acu + lib_property_equip.get(set_equip[1]).acu + lib_property_equip.get(set_equip[2]).acu
    var e_eva = lib_property_equip.get(set_equip[0]).eva + lib_property_equip.get(set_equip[1]).eva + lib_property_equip.get(set_equip[2]).eva
    var e_crit = lib_property_equip.get(set_equip[0]).crit + lib_property_equip.get(set_equip[1]).crit + lib_property_equip.get(set_equip[2]).crit
    var e_critdmg = lib_property_equip.get(set_equip[0]).critdmg + lib_property_equip.get(set_equip[1]).critdmg + lib_property_equip.get(set_equip[2]).critdmg
    var e_arm = lib_property_equip.get(set_equip[0]).arm + lib_property_equip.get(set_equip[1]).arm + lib_property_equip.get(set_equip[2]).arm
    var e_ap = lib_property_equip.get(set_equip[0]).ap + lib_property_equip.get(set_equip[1]).ap + lib_property_equip.get(set_equip[2]).ap
    var e_affection // 好感度是装备
    if (ID > 1000 && ID < 2000) {
      if (affection === 'love') e_affection = createProperty_equip(Math.ceil(0.05 * property_display.dmg), Math.ceil(0.05 * property_display.acu), Math.ceil(0.05 * property_display.eva), 0, 0, 0, 0, 0, 0)
      else if (affection === 'marry') e_affection = createProperty_equip(Math.ceil(0.15 * property_display.dmg), Math.ceil(0.15 * property_display.acu), Math.ceil(0.15 * property_display.eva), 0, 0, 0, 0, 0, 0)
    } else {
      if (affection === 'love') e_affection = createProperty_equip(Math.ceil(0.05 * property_display.dmg), Math.ceil(0.05 * property_display.acu), Math.ceil(0.05 * property_display.eva), 0, 0, 0, 0, 0, 0)
      else if (affection === 'marry') e_affection = createProperty_equip(Math.ceil(0.1 * property_display.dmg), Math.ceil(0.1 * property_display.acu), Math.ceil(0.1 * property_display.eva), 0, 0, 0, 0, 0, 0)
    }
    var str_dmg = lib_language.dmg + ' ', str_acu = lib_language.acu + ' ', str_eva = lib_language.eva + ' '
    // dmg
    if (e_dmg > 0 && e_dmg - Math.floor(e_dmg) === 0) str_dmg += '<span style="color:green">' + property_display.dmg + '+' + e_dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    else if (e_dmg < 0) str_dmg += '<span style="color:orangered">' + property_display.dmg + e_dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    else if (e_dmg - Math.floor(e_dmg) != 0) {
      var e_dmg_13 = lib_property_equip.get(set_equip[0]).dmg + lib_property_equip.get(set_equip[2]).dmg
      var str_e_dmg_13 = ''
      if (e_dmg_13 > 0) str_e_dmg_13 = '+' + e_dmg_13
      str_dmg += '<span style="color:blue">(</span>'
      str_dmg += '<span style="color:green">' + property_display.dmg + str_e_dmg_13 + '</span>' + '<span style="color:hotpink">+' + e_affection.dmg + '</span>'
      str_dmg += '<span style="color:blue">)x3</span>'
    }
    else str_dmg += '<span style="color:green">' + property_display.dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    document.getElementById('info_dmg').innerHTML = str_dmg
    // rof
    if (e_rof > 0) document.getElementById('info_rof').innerHTML = lib_language.rof + ' <span style="color:green">' + property_display.rof + '+' + e_rof + '</span>'
    else if (e_rof < 0) document.getElementById('info_rof').innerHTML = lib_language.rof + ' <span style="color:orangered">' + property_display.rof + e_rof + '</span>'
    else document.getElementById('info_rof').innerHTML = lib_language.rof + ' <span style="color:green">' + property_display.rof + '</span>'
    // acu
    if (e_acu > 0) str_acu += '<span style="color:green">' + property_display.acu + '+' + e_acu + '</span><span style="color:hotpink">+' + e_affection.acu + '</span>'
    else if (e_acu < 0) str_acu += '<span style="color:orangered">' + property_display.acu + e_acu + '</span><span style="color:hotpink">+' + e_affection.acu + '</span>'
    else str_acu += '<span style="color:green">' + property_display.acu + '</span><span style="color:hotpink">+' + e_affection.acu + '</span>'
    document.getElementById('info_acu').innerHTML = str_acu
    // eva
    if (e_eva > 0) str_eva += '<span style="color:green">' + property_display.eva + '+' + e_eva + '</span><span style="color:hotpink">+' + e_affection.eva + '</span>'
    else if (e_eva < 0) str_eva += '<span style="color:orangered">' + property_display.eva + e_eva + '</span><span style="color:hotpink">+' + e_affection.eva + '</span>'
    else str_eva += '<span style="color:green">' + property_display.eva + '</span><span style="color:hotpink">+' + e_affection.eva + '</span>'
    document.getElementById('info_eva').innerHTML = str_eva
    // crit
    if (e_crit > 0) document.getElementById('info_crit').innerHTML = lib_language.crit + ' <span style="color:green">' + parseInt(property_display.crit * 100) + '+' + parseInt(e_crit * 100) + '</span>' + '%'
    else document.getElementById('info_crit').innerHTML = lib_language.crit + ' <span style="color:green">' + parseInt(property_display.crit * 100) + '</span>' + '%'
    // critdmg
    if (e_critdmg > 0)document.getElementById('info_critdmg').innerHTML = lib_language.critdmg + ' <span style="color:green">150' + '+' + parseInt(e_critdmg * 100) + '</span>' + '%'
    else document.getElementById('info_critdmg').innerHTML = lib_language.critdmg + ' <span style="color:green">150' + '</span>' + '%'
    if (e_arm > 0) document.getElementById('info_arm').innerHTML = lib_language.arm + ' <span style="color:green">' + property_display.arm + '+' + e_arm + '</span>'
    else document.getElementById('info_arm').innerHTML = lib_language.arm + ' <span style="color:green">' + property_display.arm + '</span>'
    if (e_ap > 0) document.getElementById('info_ap').innerHTML = lib_language.ap + ' <span style="color:green">' + '15' + '+' + e_ap + '</span>'
    else if (e_ap < 0) document.getElementById('info_ap').innerHTML = lib_language.ap + ' <span style="color:orangered">' + '15' + e_ap + '</span>'
    else document.getElementById('info_ap').innerHTML = lib_language.ap + ' <span style="color:green">' + '15' + '</span>'
    // readStatus需要保存当前状态，添加人形会把buffer_last填入buffer_table
    buffer_last = [set_guntype, num_star, ID, set_equip, affection, e_affection]
  }
  showAffect()
}
function readStatus () { // 读取已有人形之前的全局环境
  var this_buffer = buffer_table.get(num_pickblock)
  set_guntype = this_buffer[0]
  pickGunType(set_guntype)
  num_star = this_buffer[1]
  changeStar(num_star)
  document.getElementById('select_tdoll').value = this_buffer[2]
  changePreview()
  set_equip[0] = this_buffer[3][0]; set_equip[1] = this_buffer[3][1]; set_equip[2] = this_buffer[3][2]
  affection = this_buffer[4]
  changePreview()
  changeAffection('read')
}
function addTdoll () { // 添加战术人形
  document.getElementById('suffer_1').disabled = false
  document.getElementById('suffer_100').disabled = false
  var reverse_position = num_pickblock
  if (lang_type === 'ko') {
    if (reverse_position >= 7) reverse_position -= 6
    else if (reverse_position <= 3) reverse_position += 6
  }
  // Name
  var selectID = document.getElementById('select_tdoll')
  var selectIdx = selectID.selectedIndex
  var selectTxt = selectID[selectIdx].text
  var str_name = ''
  for (var i = 0; i < selectTxt.length; i++) {
    if (selectTxt[i] === ' ') {
      str_name = selectTxt.substr(i + 1)
      break
    }
  }
  // ID, Affect, Skill, Property, Equip
  buffer_table.set(num_pickblock, buffer_last)
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var new_affect = lib_affect.get(ID)
  var new_skill = lib_skill.get(ID)
  var new_property = lib_property.get(ID)
  var new_equip = [lib_property_equip.get(set_equip[0]), lib_property_equip.get(set_equip[1]), lib_property_equip.get(set_equip[2]), buffer_last[5]]
  var new_stand = num_pickblock - 1
  // 数据添加
  var this_is_python = false
  var this_is_karm1891 = false
  if (list_tdoll[num_pickblock - 1][1] != null) {
    if (list_tdoll[num_pickblock - 1][1].ID === 4) this_is_python = true
    if (list_tdoll[num_pickblock - 1][1].ID === 197) this_is_karm1891 = true
  }
  document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '' // 删除之前所在位置的特殊设定
  if ((!Set_Special.get('can_add_python') && ID === 4 && !this_is_python) || (!Set_Special.get('can_add_karm1891') && ID === 197 && !this_is_karm1891)) {
    if (!Set_Special.get('can_add_python') && ID === 4 && !this_is_python) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_python
    if (!Set_Special.get('can_add_karm1891') && ID === 197 && !this_is_karm1891) document.getElementById('alert_display').innerHTML = lib_language.UI_not_2_carcano
  } else {
    if (this_is_python && ID != 4) { // 蟒蛇被覆盖掉
      Set_Special.set('can_add_python', true)
    }
    if (this_is_karm1891 && ID != 197) { // 卡姐被覆盖掉
      Set_Special.set('can_add_karm1891', true)
    }
    list_tdoll[new_stand][1] = createTdoll(ID, str_name, set_guntype, new_affect, new_skill, new_property, new_equip)
    if (ID === 4) Set_Special.set('can_add_python', false)
    if (ID === 197) Set_Special.set('can_add_karm1891', false)
    else if (ID === 1055) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' M4A1</h4><input type="checkbox" id="special_m4_' + (num_pickblock - 1) + '"> [' + lib_language.skillNAME_55 + '] ' + lib_language.DESCRIBE_55
    }
    else if (ID === 1039) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' ' + lib_language.NAME_39 + '</h4>'
      str_html += '<table class="table_other table-bordered table-hover" style="width:200px"><tbody><tr><td style="width: 10%">' + lib_language.DESCRIBE_39_1 + '</td><td style="width: 30%">'
      str_html += '<input class="form-control input-sm" placeholder="' + lib_language.INPUT_PI + '" id="special_mosin_attackkill_' + num_pickblock + '" onblur=inputCheck_mosin('
      str_html += "'" + 'special_mosin_attackkill_' + num_pickblock + "'"
      str_html += ') value="2"></td><td>' + lib_language.DESCRIBE_39_2 + '</td></tr></tbody></table>'
      str_html += '<input type="checkbox" id="special_mosin_' + num_pickblock + '"> [' + lib_language.skillNAME_39 + '] ' + lib_language.DESCRIBE_39_3 + ' '
      str_html += '<input type="checkbox" id="special_mosin_skillkill_' + num_pickblock + '" checked> [' + lib_language.skillNAME_39_2 + '] ' + lib_language.DESCRIBE_39_4
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 2006) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' ' + lib_language.NAME_2006 + '</h4><input type="checkbox" id="special_theresa_' + (num_pickblock - 1) + '" checked> [' + lib_language.skillNAME_2006 + '] ' + lib_language.DESCRIBE_2006
    }
    else if (ID === 102) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' UMP40</h4><p>'
      str_html += '[' + lib_language.skillNAME_102 + '] <label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_ump40_' + num_pickblock + '_0" checked> ' + lib_language.DESCRIBE_102_1 + '</label>'
      str_html += '<label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_ump40_' + num_pickblock + '_1"> ' + lib_language.DESCRIBE_102_2 + '</label>'
      str_html += '</p>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 180) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' PzB39</h4><input type="checkbox" id="special_js05_' + (num_pickblock - 1) + '" checked> [' + lib_language.skillNAME_180 + '] ' + lib_language.DESCRIBE_180
    }
    else if (ID === 192) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' JS05</h4><input type="checkbox" id="special_js05_' + (num_pickblock - 1) + '" checked> [' + lib_language.skillNAME_180 + '] ' + lib_language.DESCRIBE_180
    }
    else if (ID === 252) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' KSVK</h4><input type="checkbox" id="special_KSVK_' + (num_pickblock - 1) + '" checked> [' + lib_language.skillNAME_252 + '] ' + lib_language.DESCRIBE_252
    }
    else if (ID === 194) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' K2</h4>'
      str_html += '<h5>[' + lib_language.skillNAME_194 + '] ' + lib_language.DESCRIBE_194_0 + '</h5>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_k2_' + num_pickblock + '_1" checked> ' + lib_language.DESCRIBE_194_1 + '</label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_k2_' + num_pickblock + '_2"><span style="color:red"> ' + lib_language.DESCRIBE_194_2 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_k2_' + num_pickblock + '_3"><span style="color:orange"> ' + lib_language.DESCRIBE_194_3 + '</span></label></p>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 213) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' C-MS</h4>'
      str_html += '<h5>[' + lib_language.skillNAME_213 + '] ' + lib_language.DESCRIBE_213_0 + '</h5>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_cms_' + num_pickblock + '_1" checked><span style="color:dodgerblue"> ' + lib_language.DESCRIBE_213_1 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_cms_' + num_pickblock + '_2"><span style="color:red"> ' + lib_language.DESCRIBE_213_2 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_cms_' + num_pickblock + '_3"><span style="color:orange"> ' + lib_language.DESCRIBE_213_3 + '</span></label></p>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 231) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' M82A1</h4><p>'
      str_html += '[' + lib_language.skillNAME_231 + '] ' + lib_language.DESCRIBE_231 + ' <label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_m82a1_' + num_pickblock + '_0" checked> 0</label>'
      str_html += '<label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_m82a1_' + num_pickblock + '_1"> 1</label>'
      str_html += '<label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_m82a1_' + num_pickblock + '_2"> 2</label>'
      str_html += '<label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_m82a1_' + num_pickblock + '_3"> 3</label>'
      str_html += '</p>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 236) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' K11</h4><p>'
      str_html += '<table class="table_other table-bordered table-hover" style="width:200px"><tbody><tr><td style="width: 30%">' + lib_language.DESCRIBE_236 + '</td><td style="width: 50%">'
      str_html += '<input class="form-control input-sm" placeholder="' + lib_language.INPUT_PI + '" id="special_k11_' + num_pickblock + '" onblur=inputCheck_k11('
      str_html += "'" + 'special_k11_' + num_pickblock + "'"
      str_html += ') value="28"></td><td>' + lib_language.DESCRIBE_236 + '</td></tr></tbody></table>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 238) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' ' + lib_language.NAME_238 + '</h4><input type="checkbox" id="special_88type_' + (num_pickblock - 1) + '"> [' + lib_language.skillNAME_238 + '] ' + lib_language.DESCRIBE_238
    }
    else if (ID === 256) {
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = '<h4>' + reverse_position + lib_language.UI_num + ' ' + lib_language.NAME_256 + '</h4><input type="checkbox" id="special_falcon_' + (num_pickblock - 1) + '"> [' + lib_language.skillNAME_256 + '] ' + lib_language.DESCRIBE_256
    }
    else if (ID === 243) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' ' + lib_language.NAME_243 + '</h4><p>'
      str_html += '[' + lib_language.skillNAME_243 + '] ' + lib_language.DESCRIBE_243_0 + ' <label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_64howa_' + num_pickblock + '_0" checked> ' + lib_language.DESCRIBE_243_1 + '</label>'
      str_html += '<label class="radio-inline"><input type="radio" name="switch_' + num_pickblock + '" id="special_64howa_' + num_pickblock + '_1"> ' + lib_language.DESCRIBE_243_2 + '</label>'
      str_html += '</p>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    else if (ID === 251) {
      var str_html = ''
      str_html += '<h4>' + reverse_position + lib_language.UI_num + ' X95</h4><p>'
      str_html += '<table class="table_other table-bordered table-hover" style="width:200px"><tbody><tr><td style="width: 40%">' + lib_language.DESCRIBE_251 + '</td><td style="width: 50%">'
      str_html += '<input class="form-control input-sm" placeholder="0~300" id="special_x95_' + num_pickblock + '" onblur=inputCheck_x95('
      str_html += "'" + 'special_x95_' + num_pickblock + "'"
      str_html += ') value="150"></td><td>%</td></tr></tbody></table>'
      document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = str_html
    }
    // 前台更新
    document.getElementById('blockimg_' + num_pickblock).style = 'width:120px;height:120px;background:url(../img/echelon/' + ID + '.png)'
    manageUI('pick-block')
    // 计算影响格
    getBlockAffect()
  }
}

function deleteTdoll () { // 删除战术人形
  // 数据删除
  if (list_tdoll[num_pickblock - 1][1].ID === 4) Set_Special.set('can_add_python', true)
  if (list_tdoll[num_pickblock - 1][1].ID === 197) Set_Special.set('can_add_karm1891', true)
  buffer_table.delete(num_pickblock)
  list_tdoll[num_pickblock - 1][1] = null
  // 前台更新
  document.getElementById('special_num' + (num_pickblock - 1)).innerHTML = ''
  document.getElementById('blockimg_' + num_pickblock).style = 'width:120px;height:120px;background:url(../img/echelon/0.png)'
  // 取消选定
  pickBlock(-1)
  // 计算影响格
  getBlockAffect()
  // 人数不足无法承伤计算
  var have_tdoll = false
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      have_tdoll = true
      break
    }
  }
  if (!have_tdoll) {
    document.getElementById('suffer_1').disabled = true
    document.getElementById('suffer_100').disabled = true
  }
}
function setWidth (command) {
  document.getElementById('placeholder').style = 'width: ' + parseInt(command) + 'px;height:400px'
  var btn_num = 1
  if (parseInt(command) === 300) btn_num = 1
  else if (parseInt(command) === 700) btn_num = 2
  else if (parseInt(command) === 900) btn_num = 3
  for (var i = 1; i <= 3; i++) document.getElementById('wid' + i).className = 'btn btn-default'
  document.getElementById('wid' + btn_num).className = 'btn btn-primary'
  refreshImage('placeholder')
}
function changeSunrise (type) {
  if (type === 1) {
    daytime = 1
    document.getElementById('icon-day').src = '../img/echelon/icon-battle-daytime.png'
    document.getElementById('icon-night').src = '../img/echelon/icon-battle-night-no.png'
  } else if (type === 2) {
    daytime = 2
    document.getElementById('icon-day').src = '../img/echelon/icon-battle-daytime-no.png'
    document.getElementById('icon-night').src = '../img/echelon/icon-battle-night.png'
  }
}
function changeFairy () {
  fairy_no = parseInt(document.getElementById('select_fairy').value)
  if (fairy_no > 0) {
    document.getElementById('select_talent').disabled = false
    document.getElementById('fairyskill_active').disabled = false
    if (fairy_no === 19) {
      var str_html = ''
      str_html += '<h4>' + lib_language.fairyDESCRIBE_19 + '</h4>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_0" checked> ' + lib_language.fairyDESCRIBE_19_0 + '</label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_1"><span style="color:red"> ' + lib_language.fairyDESCRIBE_19_1 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_2"><span style="color:orange"> ' + lib_language.fairyDESCRIBE_19_2 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_3"><span style="color:green"> ' + lib_language.fairyDESCRIBE_19_3 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_4"><span style="color:blue"> ' + lib_language.fairyDESCRIBE_19_4 + '</span></label></p>'
      str_html += '<p><label class="radio-inline"><input type="radio" name="switch_fairy" id="special_fairyskill_5"><span style="color:purple"> ' + lib_language.fairyDESCRIBE_19_5 + '</span></label></p>'
      document.getElementById('special_fairy').innerHTML = str_html
    } else {
      document.getElementById('special_fairy').innerHTML = ''
    }
  } else {
    document.getElementById('special_fairy').innerHTML = ''
    document.getElementById('select_talent').disabled = true
    document.getElementById('fairyskill_active').disabled = true
    document.getElementById('fairyskill_active').checked = false
    document.getElementById('fairy_skill').innerHTML = lib_language.fairyskillstr + '-'
    changeTalent(0)
  }
  document.getElementById('fairy_img').src = '../img/echelon/fairy/f' + fairy_no + '.png'
  document.getElementById('fairy_dmg').innerHTML = lib_language.dmg + ' -'
  document.getElementById('fairy_critdmg').innerHTML = lib_language.critdmg + ' -'
  document.getElementById('fairy_acu').innerHTML = lib_language.acu + ' -'
  document.getElementById('fairy_eva').innerHTML = lib_language.eva + ' -'
  document.getElementById('fairy_arm').innerHTML = lib_language.arm + ' -'
  if (fairy_no > 0) {
    var list_pro = lib_fairy.get(fairy_no).property.split('/')
    var list_value = lib_fairy.get(fairy_no).value.split('/')
    var fplen = list_pro.length
    for (var i = 0; i < fplen;i++) {
      if (list_pro[i] === 'dmg') document.getElementById('fairy_dmg').innerHTML = lib_language.dmg + '<span style="color:green">+' + parseInt(parseFloat(list_value[i]) * 100) + '%</span>'
      else if (list_pro[i] === 'critdmg') document.getElementById('fairy_critdmg').innerHTML = lib_language.critdmg + '<span style="color:green">+' + parseInt(parseFloat(list_value[i]) * 100) + '%</span>'
      else if (list_pro[i] === 'acu') document.getElementById('fairy_acu').innerHTML = lib_language.acu + '<span style="color:green">+' + parseInt(parseFloat(list_value[i]) * 100) + '%</span>'
      else if (list_pro[i] === 'eva') document.getElementById('fairy_eva').innerHTML = lib_language.eva + '<span style="color:green">+' + parseInt(parseFloat(list_value[i]) * 100) + '%</span>'
      else if (list_pro[i] === 'arm') document.getElementById('fairy_arm').innerHTML = lib_language.arm + '<span style="color:green">+' + parseInt(parseFloat(list_value[i]) * 100) + '%</span>'
    }
    var skillname_str = lib_language.fairyskillstr
    eval('var fsn=lib_language.fairy_skillNAME_' + fairy_no)
    document.getElementById('fairy_skill').innerHTML = skillname_str + fsn
  }
}
function changeTalent (num) {
  if (num === 1) talent_no = parseInt(document.getElementById('select_talent').value)
  else {
    document.getElementById('select_talent').value = 0
    talent_no = 0
  }
}
function inputCheck_k11 (str_id) {
  var str_input = document.getElementById(str_id).value
  if (str_input === '' || str_input === null || isNaN(str_input) || parseInt(str_input) <= 0) {
    str_input = 28
    document.getElementById(str_id).value = 28
  }
}
function inputCheck_x95 (str_id) {
  var str_input = document.getElementById(str_id).value
  if (str_input === '' || str_input === null || isNaN(str_input) || (parseInt(str_input) < 0 || parseInt(str_input) > 300)) {
    str_input = 150
    document.getElementById(str_id).value = 150
  }
}
function inputCheck_mosin (str_id) {
  var str_input = document.getElementById(str_id).value
  if (str_input === '' || str_input === null || isNaN(str_input) || parseInt(str_input) <= 0) {
    str_input = 2
    document.getElementById(str_id).value = 2
  }
}
function checkEnviInput () { // 纠正非法输入
  var edit_timeinit = document.getElementById('time_init').value
  if (edit_timeinit === '' || isNaN(edit_timeinit) || parseInt(edit_timeinit) < 0) { // 接敌时间，非负数
    document.getElementById('time_init').value = 0
  }
  var edit_timeall = document.getElementById('time_battle').value
  if (edit_timeall === '' || isNaN(edit_timeall) || parseInt(edit_timeall) <= 0 || edit_timeall > 500) { // 战斗时间，正数，不超过500s
    document.getElementById('time_battle').value = 20
  }
  var edit_eva = document.getElementById('enemy_eva').value
  if (edit_eva === '' || isNaN(edit_eva) || parseInt(edit_eva) < 0 || (parseFloat(edit_eva) != parseInt(edit_eva)) || edit_eva > 9999) { // 敌人回避，非负整数
    document.getElementById('enemy_eva').value = 0
  }
  var edit_arm = document.getElementById('enemy_arm').value
  if (edit_arm === '' || isNaN(edit_arm) || parseInt(edit_arm) < 0 || (parseFloat(edit_arm) != parseInt(edit_arm)) || edit_arm > 9999) { // 敌人护甲，非负整数
    document.getElementById('enemy_arm').value = 0
  }
  var edit_form = document.getElementById('enemy_form').value
  if (edit_form != 1 && edit_form != 2 && edit_form != 3 && edit_form != 4 && edit_form != 5) { // 敌人编制，1~5
    document.getElementById('enemy_form').value = 1
  }
  var edit_num = document.getElementById('enemy_num').value
  if (edit_num === '' || isNaN(edit_num) || parseInt(edit_num) <= 0 || (parseFloat(edit_num) != parseInt(edit_num)) || edit_num > 99) { // 敌人组数，正整数
    document.getElementById('enemy_num').value = 1
  }
  var edit_ff = document.getElementById('enemy_forcefield').value
  var edit_ff_max = document.getElementById('enemy_forcefield_max').value
  if (edit_ff === '' || isNaN(edit_ff) || parseInt(edit_ff) < 0 || (parseFloat(edit_ff) != parseInt(edit_ff)) || edit_ff > 9999) { // 敌人力场，非负整数
    edit_ff = 0
    document.getElementById('enemy_forcefield').value = 0
  }
  if (edit_ff_max === '' || isNaN(edit_ff_max) || parseInt(edit_ff_max) < 0 || (parseFloat(edit_ff_max) != parseInt(edit_ff_max)) || parseFloat(edit_ff_max) < parseFloat(edit_ff) || edit_ff_max > 9999) { // 敌人力场max，非负整数，且不能低于设定力场
    edit_ff_max = edit_ff
    document.getElementById('enemy_forcefield_max').value = edit_ff
  }
  if (document.getElementById('enemy_acumax').checked) {
    document.getElementById('enemy_acu').disabled = true
    document.getElementById('enemy_acu').value = '∞'
  } else {
    document.getElementById('enemy_acu').disabled = false
    if (document.getElementById('enemy_acu').value === '∞') {
      document.getElementById('enemy_acu').value = 10
    }
  }
  if (document.getElementById('enemy_hp_check').checked) {
    document.getElementById('enemy_hp').disabled = false
  } else {
    document.getElementById('enemy_hp').disabled = true
  }
  if (document.getElementById('inj_type1').checked) document.getElementById('inj_order').disabled = false
  else document.getElementById('inj_order').disabled = true
  check_inj_order()
}
function showEnvi () {
  // 妖精图像、天赋
  if (fairy_no > 0) {
    document.getElementById('envi_fairy').src = '../img/echelon/fairy/icon-f' + fairy_no + '.png'
  } else {
    document.getElementById('envi_fairy').innerHTML = lib_language.fairy_0
  }
  if (talent_no > 0) {
    var talentidx = document.getElementById('select_talent').selectedIndex
    var talentname = document.getElementById('select_talent')[talentidx].text
    document.getElementById('envi_talent').innerHTML = talentname
  } else {
    document.getElementById('envi_talent').innerHTML = lib_language.talent_0
  }
  if (document.getElementById('fairyskill_active').checked) eval('var fairy_skillname_str = lib_language.fairy_skillNAME_' + fairy_no)
  else eval('var fairy_skillname_str = lib_language.fairy_skillNAME_' + 0)
  document.getElementById('envi_fairyskill').innerHTML = fairy_skillname_str
  // 全局设定值
  if (daytime === 1) document.getElementById('envi_day').src = '../img/icon-daytime.png'
  else if (daytime === 2) document.getElementById('envi_day').src = '../img/icon-night.png'
  document.getElementById('envi_alltime').innerHTML = document.getElementById('time_battle').value
  document.getElementById('envi_contertime').innerHTML = document.getElementById('time_init').value
  document.getElementById('envi_alldmg').innerHTML = totaldamage_buffer
  document.getElementById('envi_ene_form').innerHTML = document.getElementById('enemy_form').value
  document.getElementById('envi_ene_num').innerHTML = document.getElementById('enemy_num').value
  if (document.getElementById('switch_normal').checked) {
    document.getElementById('envi_ene_type').innerHTML = lib_language.enemy_normal
    document.getElementById('envi_ene_type').style = 'color:black'
  } else if (document.getElementById('switch_elite').checked) {
    document.getElementById('envi_ene_type').innerHTML = lib_language.enemy_elite
    document.getElementById('envi_ene_type').style = 'color:dodgerblue'
  } else if (document.getElementById('switch_boss').checked) {
    document.getElementById('envi_ene_type').innerHTML = 'BOSS'
    document.getElementById('envi_ene_type').style = 'color:red'
  }
  // 特设值
  if (display_type === 'damage') {
    document.getElementById('envi_ene_eva').innerHTML = document.getElementById('enemy_eva').value
    document.getElementById('envi_ene_arm').innerHTML = document.getElementById('enemy_arm').value
    var ff_str = '' + document.getElementById('enemy_forcefield').value
    if (parseInt(document.getElementById('enemy_forcefield_max').value) != 0) ff_str += ' (' + (100 * (document.getElementById('enemy_forcefield').value) / (document.getElementById('enemy_forcefield_max').value)).toFixed(2) + '%)'
    document.getElementById('envi_ene_ff').innerHTML = ff_str
    // clear
    document.getElementById('envi_ene_dmg').innerHTML = '-'
    document.getElementById('envi_ene_rof').innerHTML = '-'
    document.getElementById('envi_ene_acu').innerHTML = '-'
    document.getElementById('envi_ene_ap').innerHTML = '-'
    document.getElementById('envi_ene_dbk').innerHTML = '-'
    document.getElementById('envi_ene_hp').innerHTML = '-'
  } else if (display_type === 'suffer') {
    document.getElementById('envi_ene_eva').innerHTML = document.getElementById('enemy_eva_2').value
    document.getElementById('envi_ene_arm').innerHTML = document.getElementById('enemy_arm_2').value
    document.getElementById('envi_ene_dmg').innerHTML = document.getElementById('enemy_dmg').value
    document.getElementById('envi_ene_rof').innerHTML = document.getElementById('enemy_rof').value
    document.getElementById('envi_ene_acu').innerHTML = document.getElementById('enemy_acu').value
    document.getElementById('envi_ene_ap').innerHTML = document.getElementById('enemy_ap').value
    document.getElementById('envi_ene_dbk').innerHTML = document.getElementById('enemy_dbk').value
    var ff_str = '' + document.getElementById('enemy_forcefield_2').value
    if (parseInt(document.getElementById('enemy_forcefield_2_max').value) != 0) ff_str += ' (' + (100 * (document.getElementById('enemy_forcefield_2').value) / (document.getElementById('enemy_forcefield_2_max').value)).toFixed(2) + '%)'
    document.getElementById('envi_ene_ff').innerHTML = ff_str
    if (document.getElementById('enemy_hp_check').checked) {
      document.getElementById('envi_ene_hp').innerHTML = document.getElementById('enemy_hp').value
    } else {
      document.getElementById('envi_ene_hp').innerHTML = '-'
    }
  }
}
function templatePro (type) {
  if (type === 1) {
    document.getElementById('enemy_arm').value = 25
    document.getElementById('enemy_eva').value = 10
    document.getElementById('enemy_forcefield').value = 0
    document.getElementById('enemy_forcefield_max').value = 0
    document.getElementById('switch_boss').checked = true
  } else if (type === 2) {
    document.getElementById('enemy_arm').value = 199
    document.getElementById('enemy_eva').value = 0
    document.getElementById('enemy_forcefield').value = 0
    document.getElementById('enemy_forcefield_max').value = 0
    document.getElementById('switch_normal').checked = true
  } else if (type === 3) {
    document.getElementById('enemy_arm').value = 229
    document.getElementById('enemy_eva').value = 14
    document.getElementById('enemy_forcefield').value = 5010
    document.getElementById('enemy_forcefield_max').value = 5010
    document.getElementById('switch_elite').checked = true
  } else if (type === 4) {
    document.getElementById('enemy_arm').value = 0
    document.getElementById('enemy_eva').value = 60
    document.getElementById('enemy_forcefield').value = 0
    document.getElementById('enemy_forcefield_max').value = 0
    document.getElementById('switch_boss').checked = true
  } else if (type === 5) {
    document.getElementById('enemy_arm').value = 0
    document.getElementById('enemy_eva').value = 32
    document.getElementById('enemy_forcefield').value = 0
    document.getElementById('enemy_forcefield_max').value = 0
    document.getElementById('switch_normal').checked = true
  } else if (type === 6) {
    document.getElementById('enemy_arm').value = 119
    document.getElementById('enemy_eva').value = 0
    document.getElementById('enemy_forcefield').value = 2104
    document.getElementById('enemy_forcefield_max').value = 3006
    document.getElementById('switch_normal').checked = true
  } else if (type === 11) {
    document.getElementById('enemy_form').value = 5
    document.getElementById('enemy_num').value = 5
    document.getElementById('enemy_dmg').value = 8
    document.getElementById('enemy_rof').value = 40
    document.getElementById('enemy_acumax').checked = false
    document.getElementById('enemy_acu').value = 17
    document.getElementById('enemy_ap').value = 0
    document.getElementById('enemy_dbk').value = 0
    document.getElementById('enemy_eva_2').value = 8
    document.getElementById('enemy_arm_2').value = 0
    document.getElementById('enemy_forcefield_2').value = 0
    document.getElementById('enemy_forcefield_2_max').value = 0
    document.getElementById('enemy_hp').value = 769
    document.getElementById('switch_normal').checked = true
  } else if (type === 12) {
    document.getElementById('enemy_form').value = 1
    document.getElementById('enemy_num').value = 1
    document.getElementById('enemy_dmg').value = 45
    document.getElementById('enemy_rof').value = 40
    document.getElementById('enemy_acumax').checked = false
    document.getElementById('enemy_acu').value = 80
    document.getElementById('enemy_ap').value = 0
    document.getElementById('enemy_dbk').value = 0
    document.getElementById('enemy_eva_2').value = 30
    document.getElementById('enemy_arm_2').value = 0
    document.getElementById('enemy_forcefield_2').value = 0
    document.getElementById('enemy_forcefield_2_max').value = 0
    document.getElementById('enemy_hp').value = 220000
    document.getElementById('switch_boss').checked = true
  } else if (type === 13) {
    document.getElementById('enemy_form').value = 1
    document.getElementById('enemy_num').value = 1
    document.getElementById('enemy_dmg').value = 95
    document.getElementById('enemy_rof').value = 40
    document.getElementById('enemy_acumax').checked = false
    document.getElementById('enemy_acu').value = 60
    document.getElementById('enemy_ap').value = 20
    document.getElementById('enemy_dbk').value = 0
    document.getElementById('enemy_eva_2').value = 30
    document.getElementById('enemy_arm_2').value = 10
    document.getElementById('enemy_forcefield_2').value = 0
    document.getElementById('enemy_forcefield_2_max').value = 0
    document.getElementById('enemy_hp').value = 320000
    document.getElementById('switch_boss').checked = true
  } else if (type === 14) {
    document.getElementById('enemy_form').value = 5
    document.getElementById('enemy_num').value = 3
    document.getElementById('enemy_dmg').value = 29
    document.getElementById('enemy_rof').value = 80
    document.getElementById('enemy_acumax').checked = false
    document.getElementById('enemy_acu').value = 37
    document.getElementById('enemy_ap').value = 44
    document.getElementById('enemy_dbk').value = 0
    document.getElementById('enemy_eva_2').value = 24
    document.getElementById('enemy_arm_2').value = 0
    document.getElementById('enemy_forcefield_2').value = 0
    document.getElementById('enemy_forcefield_2_max').value = 0
    document.getElementById('enemy_hp').value = 1855
    document.getElementById('switch_normal').checked = true
  }
}

function selectHF (num) {
  if (list_HF[num - 1][0] === false) {
    list_HF[num - 1][0] = true
    document.getElementById('hfselect_' + num).src = '../img/echelon/heavyfire/hf-select.png'
    for (var i = 0; i < 4; i++) document.getElementById('hf' + num + '_pro' + (i + 1)).disabled = false
  } else {
    list_HF[num - 1][0] = false
    document.getElementById('hfselect_' + num).src = '../img/echelon/heavyfire/hf-select-no.png'
    for (var i = 0; i < 4; i++) document.getElementById('hf' + num + '_pro' + (i + 1)).disabled = true
  }
}

function changeHFPro (num, type) {
  var input_value = parseInt(document.getElementById('hf' + num + '_pro' + type).value)
  console.log(input_value)
  // check value
  if (num === 1) {
    if (type === 1 && (isNaN(input_value) || input_value < 0 || input_value > 190)) input_value = 190
    else if (type === 2 && (isNaN(input_value) || input_value < 0 || input_value > 329)) input_value = 329
    else if (type === 3 && (isNaN(input_value) || input_value < 0 || input_value > 191)) input_value = 191
    else if (type === 4 && (isNaN(input_value) || input_value < 0 || input_value > 46)) input_value = 46
  } else if (num === 2) {
    if (type === 1 && (isNaN(input_value) || input_value < 0 || input_value > 106)) input_value = 106
    else if (type === 2 && (isNaN(input_value) || input_value < 0 || input_value > 130)) input_value = 130
    else if (type === 3 && (isNaN(input_value) || input_value < 0 || input_value > 120)) input_value = 120
    else if (type === 4 && (isNaN(input_value) || input_value < 0 || input_value > 233)) input_value = 233
  } else if (num === 3) {
    if (type === 1 && (isNaN(input_value) || input_value < 0 || input_value > 227)) input_value = 227
    else if (type === 2 && (isNaN(input_value) || input_value < 0 || input_value > 58)) input_value = 58
    else if (type === 3 && (isNaN(input_value) || input_value < 0 || input_value > 90)) input_value = 90
    else if (type === 4 && (isNaN(input_value) || input_value < 0 || input_value > 107)) input_value = 107
  } else if (num === 4) {
    if (type === 1 && (isNaN(input_value) || input_value < 0 || input_value > 206)) input_value = 206
    else if (type === 2 && (isNaN(input_value) || input_value < 0 || input_value > 60)) input_value = 60
    else if (type === 3 && (isNaN(input_value) || input_value < 0 || input_value > 97)) input_value = 97
    else if (type === 4 && (isNaN(input_value) || input_value < 0 || input_value > 148)) input_value = 148
  } else if (num === 5) {
    if (type === 1 && (isNaN(input_value) || input_value < 0 || input_value > 169)) input_value = 169
    else if (type === 2 && (isNaN(input_value) || input_value < 0 || input_value > 261)) input_value = 261
    else if (type === 3 && (isNaN(input_value) || input_value < 0 || input_value > 190)) input_value = 190
    else if (type === 4 && (isNaN(input_value) || input_value < 0 || input_value > 90)) input_value = 90
  }
  // assignment
  document.getElementById('hf' + num + '_pro' + type).value = input_value
  eval('list_HF[num - 1][2].v' + type + '=input_value')
  document.getElementById('hf' + num + '_rof').innerHTML = '&nbsp' + (Math.ceil(45000 / (300 + list_HF[num - 1][1].v4 + list_HF[num - 1][2].v4 + list_HF[num - 1][3].v4)) / 30).toFixed(2) + 's'
}
function check_inj_order () {
  var orderinput = parseInt(document.getElementById('inj_order').value) + ''
  var is_invalid = false
  var num_table = [false, false, false, false, false, false, false, false, false]
  if (orderinput.length != 9 && orderinput != 'undefined') is_invalid = true
  for (var i = 0; i < 9; i++) {
    if (parseInt(orderinput[i]) >= 1 && parseInt(orderinput[i]) <= 9) num_table[orderinput[i] - 1] = true
  }
  for (var i = 0; i < 9; i++) {
    if (!num_table[i]) {
      is_invalid = true
      break
    }
  }
  if (is_invalid) { // 非法
    if (lang_type === 'ko') document.getElementById('inj_order').value = '693582471'
    else document.getElementById('inj_order').value = '639528417'
  }
  inj_order = document.getElementById('inj_order').value
}
function trans_if_need (num) {
  if (lang_type === 'ko') {
    if (num >= 7) num -= 6
    else if (num <= 3) num += 6
  }
  return num
}

function initShowhide () {
  document.getElementById('title_showhide').innerHTML = '显示设置'
  document.getElementById('allcontrol_showhide').innerHTML = ''
  var tableID = document.getElementById('table_showhide')
  var tableHTML = ''
  var h = 35
  if (display_type === 'damage') h = 70
  tableHTML += '<tbody>'
  for (var row = 0; row < 3; row++) {
    tableHTML += '<tr style="height:' + h + 'px">'
    for (var col = 0; col < 3; col++) {
      tableHTML += '<td style="width:90px">'
      if (list_tdoll[3 * row + col][1] != null) {
        tableHTML += '<button type="button" class="btn btn-primary" id="show'
        tableHTML += (3 * row + col) + '" style="width:70px;padding:2px" onclick="show_hide('
        tableHTML += (3 * row + col) + ',0)">' + trans_if_need(1 + (3 * row + col)) + lib_language.UI_num + '</button>'
      } else {
        tableHTML += ''
      }
      tableHTML += '</td>'
    }
    tableHTML += '</tr>'
    if (display_type === 'suffer') {
      tableHTML += '<tr style="height:35px">'
      for (var col = 0; col < 3; col++) {
        tableHTML += '<td style="width:90px">'
        if (list_tdoll[3 * row + col][1] != null) {
          tableHTML += '<button type="button" class="btn btn-primary" id="show'
          tableHTML += (3 * row + col) + '_1" style="width:38px;padding:2px" onclick="show_hide(' + (3 * row + col) + ',1)">' + lib_language.UI_dmg + '</button>&nbsp'
          tableHTML += '<button type="button" class="btn btn-primary" id="show'
          tableHTML += (3 * row + col) + '_2" style="width:38px;padding:2px" onclick="show_hide(' + (3 * row + col) + ',2)">' + lib_language.UI_inj + '</button>'
        } else {
          tableHTML += ''
        }
        tableHTML += '</td>'
      }
      tableHTML += '</tr>'
    }
  }
  tableHTML += '</tbody>'
  tableID.innerHTML = tableHTML
  if (display_type === 'suffer') {
    var acHTML = ''
    acHTML += '<button type="button" class="btn btn-success" id="show_dmg" onclick="show_hide(1,3)">' + lib_language.main_show_dmg + '</button>&nbsp'
    acHTML += '<button type="button" class="btn btn-success" id="show_inj" onclick="show_hide(2,3)">' + lib_language.main_show_inj + '</button>'
    document.getElementById('allcontrol_showhide').innerHTML = acHTML
    for (var row = 0; row < 3; row++) {
      for (var col = 2; col >= 0; col--) {
        if (list_tdoll[3 * row + col][1] === null) mergeCell('table_showhide', 2 * row, 2 * row + 1, col)
      }
    }
  }
}
function show_hide (stand_num, command) {
  var yes = 'btn btn-primary', no = 'btn btn-default', yes_all = 'btn btn-success'
  var least_dmg = false, least_inj = false
  if (command === 0) {
    if (display_type === 'damage') {
      list_show[stand_num] = !list_show[stand_num]
    } else if (display_type === 'suffer') {
      if (list_show[stand_num] || list_show[stand_num + 10]) {
        list_show[stand_num] = false
        list_show[stand_num + 10] = false
      } else {
        list_show[stand_num] = true
        list_show[stand_num + 10] = true
      }
    }
  }
  else if (command === 1) list_show[stand_num] = !list_show[stand_num]
  else if (command === 2) list_show[stand_num + 10] = !list_show[stand_num + 10]
  else if (command === 3) {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        if (list_show[i]) least_dmg = true
        if (list_show[i + 10]) least_inj = true
      }
    }
    if (stand_num === 1) {
      if (least_dmg) for (var i = 0; i < 9; i++) list_show[i] = false
      else for (var i = 0; i < 9; i++) list_show[i] = true
    } else if (stand_num === 2) {
      if (least_inj) for (var i = 0; i < 9; i++) list_show[i + 10] = false
      else for (var i = 0; i < 9; i++) list_show[i + 10] = true
    }
  }
  // refresh UI
  if (display_type === 'damage') {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        if (list_show[i]) document.getElementById('show' + i).className = yes
        else document.getElementById('show' + i).className = no
      }
    }
  } else if (display_type === 'suffer') {
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        if (list_show[i]) document.getElementById('show' + i + '_1').className = yes
        else document.getElementById('show' + i + '_1').className = no
        if (list_show[i + 10]) document.getElementById('show' + i + '_2').className = yes
        else document.getElementById('show' + i + '_2').className = no
        if (list_show[i] || list_show[i + 10]) document.getElementById('show' + i).className = yes
        else document.getElementById('show' + i).className = no
      }
    }
    least_dmg = false, least_inj = false
    for (var i = 0; i < 9; i++) {
      if (list_tdoll[i][1] != null) {
        if (list_show[i]) least_dmg = true
        if (list_show[i + 10]) least_inj = true
      }
    }
    if (least_dmg) document.getElementById('show_dmg').className = yes_all
    else document.getElementById('show_dmg').className = no
    if (least_inj) document.getElementById('show_inj').className = yes_all
    else document.getElementById('show_inj').className = no
  }
  makeGraph()
}
