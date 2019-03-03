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
  if (num === 1 && num_star < 5)  num_star++
  else if (num === 2 && num_star > 2)  num_star--
  manageUI('change-star')
}

function pickGunType (num) { // 选定枪种后改变全局变量set_guntype
  set_guntype = num
  manageUI('pick-gun')
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
      if (need_refresh) pickGunType(1)
      else {
        readStatus()
        changePreview()
      }
    } else {
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
    changePreview()
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
    if (set_guntype === 1) set_equip = [11, 21, 31]
    else if (set_guntype === 2) set_equip = [12, 22, 31]
    else if (set_guntype === 3) set_equip = [32, 21, 11]
    else if (set_guntype === 4) set_equip = [12, 23, 34]
    else if (set_guntype === 5) set_equip = [12, 23, 35]
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
    document.getElementById('info_name').innerHTML = '请点选一个<b><span style="color: red">九宫格</span></b>'
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
    document.getElementById('info_hp').innerHTML = '生命 <span style="color:green">' + property_display.hp + '</span>'
    if (property_display.cs < 0) document.getElementById('info_cs').innerHTML = '弹量 ∞'
    else {
      if (set_guntype === 5 && set_equip[2] != 0) document.getElementById('info_cs').innerHTML = '弹量 <span style="color:green">' + property_display.cs + '+' + lib_property_equip.get(set_equip[2]).cs + '</span>'
      else if (set_guntype === 6) document.getElementById('info_cs').innerHTML = '弹量 <span style="color:green">' + property_display.cs + '</span>'
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
    var str_dmg = '伤害 ', str_acu = '命中 ', str_eva = '闪避 '
    // dmg
    if (e_dmg > 0 && e_dmg != 2.01) str_dmg += '<span style="color:green">' + property_display.dmg + '+' + e_dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    else if (e_dmg < 0) str_dmg += '<span style="color:orangered">' + property_display.dmg + e_dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    else if (e_dmg === 2.01) str_dmg += '<span style="color:blue">(' + property_display.dmg + '<span style="color:hotpink">+' + e_affection.dmg + '</span>' + ')x3' + '</span>'
    else str_dmg += '<span style="color:green">' + property_display.dmg + '</span><span style="color:hotpink">+' + e_affection.dmg + '</span>'
    document.getElementById('info_dmg').innerHTML = str_dmg
    // rof
    if (e_rof > 0) document.getElementById('info_rof').innerHTML = '射速 <span style="color:green">' + property_display.rof + '+' + e_rof + '</span>'
    else if (e_rof < 0) document.getElementById('info_rof').innerHTML = '射速 <span style="color:orangered">' + property_display.rof + e_rof + '</span>'
    else document.getElementById('info_rof').innerHTML = '射速 <span style="color:green">' + property_display.rof + '</span>'
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
    if (e_crit > 0) document.getElementById('info_crit').innerHTML = '暴击 <span style="color:green">' + parseInt(property_display.crit * 100) + '+' + parseInt(e_crit * 100) + '</span>' + '%'
    else document.getElementById('info_crit').innerHTML = '暴击 <span style="color:green">' + parseInt(property_display.crit * 100) + '</span>' + '%'
    // critdmg
    if (e_critdmg > 0)document.getElementById('info_critdmg').innerHTML = '暴伤 <span style="color:green">150' + '+' + parseInt(e_critdmg * 100) + '</span>' + '%'
    else document.getElementById('info_critdmg').innerHTML = '暴伤 <span style="color:green">150' + '</span>' + '%'
    if (e_arm > 0) document.getElementById('info_arm').innerHTML = '护甲 <span style="color:green">' + property_display.arm + '+' + e_arm + '</span>'
    else document.getElementById('info_arm').innerHTML = '护甲 <span style="color:green">' + property_display.arm + '</span>'
    if (e_ap > 0) document.getElementById('info_ap').innerHTML = '穿甲 <span style="color:green">' + '15' + '+' + e_ap + '</span>'
    else if (e_ap < 0) document.getElementById('info_ap').innerHTML = '穿甲 <span style="color:orangered">' + '15' + e_ap + '</span>'
    else document.getElementById('info_ap').innerHTML = '穿甲 <span style="color:green">' + '15' + '</span>'
    // readStatus需要保存当前状态，添加人形会把buffer_last填入buffer_table
    buffer_last = [set_guntype, num_star, ID, set_equip, affection, e_affection]
  }
}
function readStatus () { // 读取已有人形之前的全局环境
  var this_buffer = buffer_table.get(num_pickblock)
  set_guntype = this_buffer[0]
  pickGunType(set_guntype)
  num_star = this_buffer[1]
  // changeStar(star)
  document.getElementById('select_tdoll').value = this_buffer[2]
  changePreview()
  set_equip[0] = this_buffer[3][0]; set_equip[1] = this_buffer[3][1]; set_equip[2] = this_buffer[3][2]
  affection = this_buffer[4]
  changePreview()
  changeAffection('read')
}
function addTdoll () { // 添加战术人形
  // ID, Affect, Skill, Property, Equip
  buffer_table.set(num_pickblock, buffer_last)
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var new_affect = lib_affect.get(ID)
  var new_skill = lib_skill.get(ID)
  var new_property = lib_property.get(ID)
  var new_equip = [lib_property_equip.get(set_equip[0]), lib_property_equip.get(set_equip[1]), lib_property_equip.get(set_equip[2]), buffer_last[5]]
  var new_stand = num_pickblock - 1
  // 数据添加
  list_tdoll[new_stand][1] = createTdoll(ID, set_guntype, new_affect, new_skill, new_property, new_equip)
  // 前台更新
  document.getElementById('blockimg_' + num_pickblock).style = 'width:120px;height:120px;background:url(../img/echelon/' + ID + '.png)'
  manageUI('pick-block')
  // 计算影响格
  getBlockAffect()
}
function deleteTdoll () { // 删除战术人形
  // 数据删除
  buffer_table.delete(num_pickblock)
  list_tdoll[num_pickblock - 1][1] = null
  // 前台更新
  document.getElementById('blockimg_' + num_pickblock).style = 'width:120px;height:120px;background:url(../img/echelon/0.png)'
  // 取消选定
  pickBlock(-1)
  // 计算影响格
  getBlockAffect()
}
