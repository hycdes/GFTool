function pickBlock (num) { // 选定格子，只有选定状态才能激活UI，管理全局变量switch_operate和num_pickblock
  if (num_pickblock === num) num_pickblock = -1 // 点已选定的格子，取消选定
  else num_pickblock = num // 选定没选定的格子
  if (num_pickblock > 0) switch_operate = true
  else switch_operate = false
  manageUI('pick-block')
}
function pickEquip (num) { // 选定装备格子，管理全局变量num_pickequip
  if (num_pickequip === num) num_pickequip = -1
  else num_pickequip = num
  if (num_pickequip > 0) switch_equip = true
  else switch_equip = false
  manageUI('pick-equip')
  changeEquip()
}

function changeAffection () { // 改变好感度，别把Affection(好感度)和Affect(影响格效果)搞混了哦！管理全局变量affection
  if (affection === 'love') affection = 'marry'
  else if (affection === 'marry') affection = 'love'
  manageUI('change-affection')
}

function changeStar (num) { // 改变星级，管理全局变量num_star
  if (num === 1 && num_star < 5)  num_star++
  else if (num === 2 && num_star > 2)  num_star--
  manageUI('change-star')
}

function pickGunType (num) { // 选定枪种后改变全局变量set_guntype
  set_guntype = num
  manageUI('pick-gun')
  changeSelectItems()
}

function manageUI () { // 管理图标变化，不涉及后台数值
  var command = arguments['0']
  if (command === 'pick-block') {
    for (var i = 1; i <= 9; i++) document.getElementById('img_' + i).src = '../img/echelon/select-no.png'
    if (num_pickblock > 0) {
      document.getElementById('img_' + num_pickblock).src = '../img/echelon/select.png'
    }
    var can_editTdoll = false, can_add = false, can_delete = false
    if (switch_operate && isEmptyBlock() && num_tdoll < 5) { // 选中，没人，还能添加
      can_editTdoll = true
      can_add = true
      can_delete = false
    } else if (!switch_operate) { // 没选中
      can_editTdoll = false
    } else if (switch_operate && isEmptyBlock() && num_tdoll === 5) { // 选中，没人，但不可加
      can_editTdoll = false
      can_add = false
      can_delete = true
    } else if (switch_operate && !isEmptyBlock()) { // 选中，有人
      can_editTdoll = false
      can_add = false
      can_delete = true
    }
    if (can_editTdoll) {
      pickGunType(1)
    } else {
      pickEquip(-1)
      pickGunType(0)
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
  }
  else if (command === 'change-star') {
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
  var e1, e2, e3
  if (set_guntype === 1) {
    e1 = 11; e2 = 21; e3 = 31
    set_equip1 = 11; set_equip2 = 21; set_equip3 = 31
  }
  else if (set_guntype === 2) {
    e1 = 12; e2 = 22; e3 = 31
    set_equip1 = 12; set_equip2 = 22; set_equip3 = 31
  }
  else if (set_guntype === 3) {
    e1 = 32; e2 = 21; e3 = 11
    set_equip1 = 32; set_equip2 = 21; set_equip3 = 11
  }
  else if (set_guntype === 4) {
    e1 = 12; e2 = 23; e3 = 34
    set_equip1 = 12; set_equip2 = 23; set_equip3 = 34
  }
  else if (set_guntype === 5) {
    e1 = 12; e2 = 23; e3 = 35
    set_equip1 = 12; set_equip2 = 23; set_equip3 = 35
  }
  else if (set_guntype === 6) {
    e1 = 33; e2 = 24; e3 = 13
    set_equip1 = 33; set_equip2 = 24; set_equip3 = 13
  }
  document.getElementById('img_e1').style = 'background:url(../img/echelon/equip/' + e1 + '.png)'
  document.getElementById('img_e2').style = 'background:url(../img/echelon/equip/' + e2 + '.png)'
  document.getElementById('img_e3').style = 'background:url(../img/echelon/equip/' + e3 + '.png)'
  document.getElementById('icon-equip1').style = 'cursor:pointer'
  document.getElementById('icon-equip2').style = 'cursor:pointer'
  document.getElementById('icon-equip3').style = 'cursor:pointer'
  document.getElementById('icon-equip1').onclick = Function('pickEquip(1)')
  document.getElementById('icon-equip2').onclick = Function('pickEquip(2)')
  document.getElementById('icon-equip3').onclick = Function('pickEquip(3)')
}
function isEmptyBlock () {
  var len_td = list_tdoll.length
  var isTdollStand = false
  for (var i = 0; i < len_td; i++) {
    if (list_tdoll[i][0] + 1 === num_pickblock) {
      isTdollStand = true
      break
    }
  }
  return !isTdollStand
}

function changePreview () { // 改变预览显示，也会改变装备对应全局变量set_equip1/2/3
  var command = arguments['0']
  if (command === 1) {
    pickEquip(-1)
    resetEquipment()
  }
  var selectID = document.getElementById('select_tdoll')
  var selectID_equip = document.getElementById('select_equip')
  var ID = parseInt(selectID.value)
  var ID_equip = parseInt(selectID_equip.value)
  document.getElementById('img_display').style = 'background: url(../img/echelon/' + ID + '.png)'
  if (switch_equip) { // 装备能改变，必然是装备被选中之时
    if (ID_equip === 0) document.getElementById('img_e' + num_pickequip).style = 'background: url(../img/echelon/equip/select-equip-no.png)'
    else document.getElementById('img_e' + num_pickequip).style = 'background: url(../img/echelon/equip/' + ID_equip + '.png)'
    if (num_pickequip === 1) set_equip1 = ID_equip
    else if (num_pickequip === 2) set_equip2 = ID_equip
    else if (num_pickequip === 3) set_equip3 === ID_equip
  }
  if (ID === 0 | ID === 1) {
    document.getElementById('info_name').innerHTML = '请选择一个人形'
    document.getElementById('info_num').innerHTML = '# -'
    document.getElementById('info_type').innerHTML = '-'
    document.getElementById('info_hp').innerHTML = '生命 -'
    document.getElementById('info_cs').innerHTML = '弹量 -'
    document.getElementById('info_dmg').innerHTML = '伤害 -'
    document.getElementById('info_rof').innerHTML = '射速 -'
    document.getElementById('info_acu').innerHTML = '命中 -'
    document.getElementById('info_eva').innerHTML = '闪避 -'
    document.getElementById('info_crit').innerHTML = '暴击 -'
    document.getElementById('info_critdmg').innerHTML = '暴伤 -'
    document.getElementById('info_arm').innerHTML = '护甲 -'
    document.getElementById('info_ap').innerHTML = '穿甲 -'
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
    document.getElementById('info_hp').innerHTML = '生命 ' + property_display.hp
    if (property_display.cs < 0) document.getElementById('info_cs').innerHTML = '弹量 ∞'
    else {
      if (set_guntype === 5 && set_equip3 != 0) document.getElementById('info_cs').innerHTML = '弹量 ' + property_display.cs + '+' + lib_property_equip.get(set_equip3).cs
      else if (set_guntype === 6) document.getElementById('info_cs').innerHTML = '弹量 ' + property_display.cs
    }
    var e_dmg = lib_property_equip.get(set_equip1).dmg + lib_property_equip.get(set_equip2).dmg + lib_property_equip.get(set_equip3).dmg
    var e_rof = lib_property_equip.get(set_equip1).rof + lib_property_equip.get(set_equip2).rof + lib_property_equip.get(set_equip3).rof
    var e_acu = lib_property_equip.get(set_equip1).acu + lib_property_equip.get(set_equip2).acu + lib_property_equip.get(set_equip3).acu
    var e_eva = lib_property_equip.get(set_equip1).eva + lib_property_equip.get(set_equip2).eva + lib_property_equip.get(set_equip3).eva
    var e_crit = lib_property_equip.get(set_equip1).crit + lib_property_equip.get(set_equip2).crit + lib_property_equip.get(set_equip3).crit
    var e_critdmg = lib_property_equip.get(set_equip1).critdmg + lib_property_equip.get(set_equip2).critdmg + lib_property_equip.get(set_equip3).critdmg
    var e_arm = lib_property_equip.get(set_equip1).arm + lib_property_equip.get(set_equip2).arm + lib_property_equip.get(set_equip3).arm
    var e_ap = lib_property_equip.get(set_equip1).ap + lib_property_equip.get(set_equip2).ap + lib_property_equip.get(set_equip3).ap
    if (e_dmg > 0) document.getElementById('info_dmg').innerHTML = '伤害 ' + property_display.dmg + '+' + e_dmg
    else document.getElementById('info_dmg').innerHTML = '伤害 ' + property_display.dmg
    if (e_rof > 0)document.getElementById('info_rof').innerHTML = '射速 ' + property_display.rof + '+' + e_rof
    else document.getElementById('info_rof').innerHTML = '射速 ' + property_display.rof
    if (e_acu > 0)document.getElementById('info_acu').innerHTML = '命中 ' + property_display.acu + '+' + e_acu
    else document.getElementById('info_acu').innerHTML = '命中 ' + property_display.acu
    if (e_eva > 0)document.getElementById('info_eva').innerHTML = '闪避 ' + property_display.eva + '+' + e_eva
    else document.getElementById('info_eva').innerHTML = '闪避 ' + property_display.eva
    if (e_crit > 0) document.getElementById('info_crit').innerHTML = '暴击 ' + parseInt(property_display.crit * 100) + '+' + parseInt(e_crit * 100) + '%'
    else document.getElementById('info_crit').innerHTML = '暴击 ' + parseInt(property_display.crit * 100) + '%'
    if (e_critdmg > 0)document.getElementById('info_critdmg').innerHTML = '暴伤 150' + '+' + parseInt(e_critdmg * 100) + '%'
    else document.getElementById('info_critdmg').innerHTML = '暴伤 150' + '%'
    if (e_arm > 0) document.getElementById('info_arm').innerHTML = '护甲 ' + property_display.arm + '+' + e_arm
    else document.getElementById('info_arm').innerHTML = '护甲 ' + property_display.arm
    if (e_ap > 0) document.getElementById('info_ap').innerHTML = '穿甲 ' + '15' + '+' + e_ap
    else document.getElementById('info_ap').innerHTML = '穿甲 ' + '15'
  }
}
function addTdoll () { // 添加战术人形
}
function deleteTdoll () { // 删除战术人形
}
