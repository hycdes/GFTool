function resetBlock () {
  block_dmg = 0, block_dbk = 0, block_acu = 0, block_fil = 0
  changeBlock(1, 0); changeBlock(2, 0); changeBlock(3, 0);changeBlock(4, 0)
  refreshPreview()
  manageButton()
}
function resetPage () {
  mul_property = 1
  color = 1, block_class = 56, block_shape = 9
  changeBigImg('addblo')
  changeProperty('class')
  document.getElementById('ChipLevel').value = 0
  refreshPreview()
  resetBlock()
}
function ignore_UI () {
  var str = ['', '', '', '']
  var valueorder = [ // value[0~3],block[4~7]
    190, 329, 191, 46,
    18, 11, 11, 4
  ]
  if (HeavyfireType === 1) {
    valueorder[0] = 190; valueorder[1] = 329; valueorder[2] = 191; valueorder[3] = 46
    valueorder[4] = 18; valueorder[5] = 11; valueorder[6] = 11; valueorder[7] = 4
  } else if (HeavyfireType === 2) {
    valueorder[0] = 106; valueorder[1] = 130; valueorder[2] = 120; valueorder[3] = 233
    valueorder[4] = 10; valueorder[5] = 4; valueorder[6] = 7; valueorder[7] = 17
  } else if (HeavyfireType === 3) {
    valueorder[0] = 227; valueorder[1] = 58; valueorder[2] = 90; valueorder[3] = 107
    valueorder[4] = 21; valueorder[5] = 2; valueorder[6] = 6; valueorder[7] = 8
  } else if (HeavyfireType === 4) {
    valueorder[0] = 206; valueorder[1] = 60; valueorder[2] = 97; valueorder[3] = 148
    valueorder[4] = 19; valueorder[5] = 2; valueorder[6] = 6; valueorder[7] = 10
  } else if (HeavyfireType === 5) {
    valueorder[0] = 169; valueorder[1] = 261; valueorder[2] = 190; valueorder[3] = 90
    valueorder[4] = 16; valueorder[5] = 8; valueorder[6] = 10; valueorder[7] = 6
  }
  var str_pro = ['杀伤', '破防', '精度', '装填']
  for (var pro = 0; pro < 4; pro++) {
    if (ignore_setting.get(readorder[pro]) || ignore_setting.get(readorder[pro + 4])) {
      str[pro] += str_pro[pro]
      if (ignore_setting.get(readorder[pro])) {
        str[pro] += '值:<span style="color:dodgerblue">'
        if (ignore_setting.get(readorder[pro] + 'min')) {
          var tempv = valueorder[pro] - ignore_setting.get(readorder[pro] + 'minv')
          if (tempv > 0) str[pro] += tempv
          else str[pro] += '0'
        } else str[pro] += '0'
        str[pro] += '</span>~<span style="color:dodgerblue">'
        if (ignore_setting.get(readorder[pro] + 'max')) {
          str[pro] += valueorder[pro] + ignore_setting.get(readorder[pro] + 'maxv')
        } else str[pro] += '∞'
        str[pro] += '</span>'
        if (ignore_setting.get(readorder[pro + 4])) str[pro] += ' '
      }
      if (ignore_setting.get(readorder[pro + 4])) {
        str[pro] += '格数:<span style="color:orange">'
        if (ignore_setting.get(readorder[pro + 4] + 'min')) {
          var tempv = valueorder[pro + 4] - ignore_setting.get(readorder[pro + 4] + 'minv')
          if (tempv > 0) str[pro] += tempv
          else str[pro] += '0'
        } else str[pro] += '0'
        str[pro] += '</span>~<span style="color:orange">'
        if (ignore_setting.get(readorder[pro + 4] + 'max')) {
          str[pro] += valueorder[pro + 4] + ignore_setting.get(readorder[pro + 4] + 'maxv')
        } else str[pro] += '∞'
        str[pro] += '</span>'
      }
    } else str[pro] = '无限制'
    document.getElementById('ignore_display' + pro).innerHTML = str[pro]
  }
}
function ignore_modify () {
  ignore_readinfo()
  ignore_UI()
}
function setIgnore (typeInfo) {
  switch (typeInfo) {
    case 1:
      document.getElementById('ignore_dmgmax').disabled = !(document.getElementById('ignore_dmgmax').disabled)
      document.getElementById('ignore_dmgmin').disabled = document.getElementById('ignore_dmgmax').disabled
      break
    case 2:
      document.getElementById('ignore_dbkmax').disabled = !(document.getElementById('ignore_dbkmax').disabled)
      document.getElementById('ignore_dbkmin').disabled = document.getElementById('ignore_dbkmax').disabled
      break
    case 3:
      document.getElementById('ignore_acumax').disabled = !(document.getElementById('ignore_acumax').disabled)
      document.getElementById('ignore_acumin').disabled = document.getElementById('ignore_acumax').disabled
      break
    case 4:
      document.getElementById('ignore_filmax').disabled = !(document.getElementById('ignore_filmax').disabled)
      document.getElementById('ignore_filmin').disabled = document.getElementById('ignore_filmax').disabled
      break
    case 5:
      document.getElementById('ignore_dmgblomax').disabled = !(document.getElementById('ignore_dmgblomax').disabled)
      document.getElementById('ignore_dmgblomin').disabled = document.getElementById('ignore_dmgblomax').disabled
      break
    case 6:
      document.getElementById('ignore_dbkblomax').disabled = !(document.getElementById('ignore_dbkblomax').disabled)
      document.getElementById('ignore_dbkblomin').disabled = document.getElementById('ignore_dbkblomax').disabled
      break
    case 7:
      document.getElementById('ignore_acublomax').disabled = !(document.getElementById('ignore_acublomax').disabled)
      document.getElementById('ignore_acublomin').disabled = document.getElementById('ignore_acublomax').disabled
      break
    case 8:
      document.getElementById('ignore_filblomax').disabled = !(document.getElementById('ignore_filblomax').disabled)
      document.getElementById('ignore_filblomin').disabled = document.getElementById('ignore_filblomax').disabled
      break
  }
  ignore_readinfo()
  ignore_UI()
}
function allIgnore (typeInfo) {
  switch (typeInfo) {
    case 1:
      document.getElementById('ignore_dmg').checked = true
      document.getElementById('ignore_dbk').checked = true
      document.getElementById('ignore_acu').checked = true
      document.getElementById('ignore_fil').checked = true
      document.getElementById('ignore_dmgblo').checked = true
      document.getElementById('ignore_dbkblo').checked = true
      document.getElementById('ignore_acublo').checked = true
      document.getElementById('ignore_filblo').checked = true
      document.getElementById('ignore_dmgmax').disabled = false
      document.getElementById('ignore_dbkmax').disabled = false
      document.getElementById('ignore_acumax').disabled = false
      document.getElementById('ignore_filmax').disabled = false
      document.getElementById('ignore_dmgblomax').disabled = false
      document.getElementById('ignore_dbkblomax').disabled = false
      document.getElementById('ignore_acublomax').disabled = false
      document.getElementById('ignore_filblomax').disabled = false
      break
    case 2:
      document.getElementById('ignore_dmg').checked = false
      document.getElementById('ignore_dbk').checked = false
      document.getElementById('ignore_acu').checked = false
      document.getElementById('ignore_fil').checked = false
      document.getElementById('ignore_dmgblo').checked = false
      document.getElementById('ignore_dbkblo').checked = false
      document.getElementById('ignore_acublo').checked = false
      document.getElementById('ignore_filblo').checked = false
      document.getElementById('ignore_dmgmax').disabled = true
      document.getElementById('ignore_dbkmax').disabled = true
      document.getElementById('ignore_acumax').disabled = true
      document.getElementById('ignore_filmax').disabled = true
      document.getElementById('ignore_dmgblomax').disabled = true
      document.getElementById('ignore_dbkblomax').disabled = true
      document.getElementById('ignore_acublomax').disabled = true
      document.getElementById('ignore_filblomax').disabled = true
      break
    case 3:
      document.getElementById('ignore_dmg').checked = false
      document.getElementById('ignore_dbk').checked = false
      document.getElementById('ignore_acu').checked = false
      document.getElementById('ignore_fil').checked = false
      document.getElementById('ignore_dmgblo').checked = false
      document.getElementById('ignore_dbkblo').checked = false
      document.getElementById('ignore_acublo').checked = false
      document.getElementById('ignore_filblo').checked = false
      document.getElementById('ignore_dmgmax').disabled = true; document.getElementById('ignore_dmgmax').value = 0
      document.getElementById('ignore_dbkmax').disabled = true; document.getElementById('ignore_dbkmax').value = 0
      document.getElementById('ignore_acumax').disabled = true; document.getElementById('ignore_acumax').value = 0
      document.getElementById('ignore_filmax').disabled = true; document.getElementById('ignore_filmax').value = 0
      document.getElementById('ignore_dmgblomax').disabled = true; document.getElementById('ignore_dmgblomax').value = 0
      document.getElementById('ignore_dbkblomax').disabled = true; document.getElementById('ignore_dbkblomax').value = 0
      document.getElementById('ignore_acublomax').disabled = true; document.getElementById('ignore_acublomax').value = 0
      document.getElementById('ignore_filblomax').disabled = true; document.getElementById('ignore_filblomax').value = 0
      break
    case 4:
      document.getElementById('ignore_dmg').checked = false
      document.getElementById('ignore_dbk').checked = false
      document.getElementById('ignore_acu').checked = false
      document.getElementById('ignore_fil').checked = false
      document.getElementById('ignore_dmgblo').checked = false
      document.getElementById('ignore_dbkblo').checked = false
      document.getElementById('ignore_acublo').checked = false
      document.getElementById('ignore_filblo').checked = true
      document.getElementById('ignore_dmgmax').disabled = true
      document.getElementById('ignore_dbkmax').disabled = true
      document.getElementById('ignore_acumax').disabled = true
      document.getElementById('ignore_filmax').disabled = true
      document.getElementById('ignore_dmgblomax').disabled = true; document.getElementById('ignore_dmgblomax').value = 0
      document.getElementById('ignore_dbkblomax').disabled = true; document.getElementById('ignore_dbkblomax').value = 0
      document.getElementById('ignore_acublomax').disabled = true; document.getElementById('ignore_acublomax').value = 0
      document.getElementById('ignore_filblomax').disabled = false; document.getElementById('ignore_filblomax').value = -2
      break
    case 5:
      document.getElementById('ignore_dmg').checked = false
      document.getElementById('ignore_dbk').checked = false
      document.getElementById('ignore_acu').checked = false
      document.getElementById('ignore_fil').checked = false
      document.getElementById('ignore_dmgblo').checked = false
      document.getElementById('ignore_dbkblo').checked = false
      document.getElementById('ignore_acublo').checked = false
      document.getElementById('ignore_filblo').checked = false
      document.getElementById('ignore_dmgmax').disabled = true; document.getElementById('ignore_dmgmax').value = 0
      document.getElementById('ignore_dbkmax').disabled = true; document.getElementById('ignore_dbkmax').value = 0
      document.getElementById('ignore_acumax').disabled = true; document.getElementById('ignore_acumax').value = 0
      document.getElementById('ignore_filmax').disabled = true; document.getElementById('ignore_filmax').value = 0
      document.getElementById('ignore_dmgblomax').disabled = true; document.getElementById('ignore_dmgblomax').value = 0
      document.getElementById('ignore_dbkblomax').disabled = true; document.getElementById('ignore_dbkblomax').value = 0
      document.getElementById('ignore_acublomax').disabled = true; document.getElementById('ignore_acublomax').value = 0
      document.getElementById('ignore_filblomax').disabled = true; document.getElementById('ignore_filblomax').value = 0
      document.getElementById('ignore_dmgmin').disabled = true; document.getElementById('ignore_dmgmin').value = 0
      document.getElementById('ignore_dbkmin').disabled = true; document.getElementById('ignore_dbkmin').value = 0
      document.getElementById('ignore_acumin').disabled = true; document.getElementById('ignore_acumin').value = 0
      document.getElementById('ignore_filmin').disabled = true; document.getElementById('ignore_filmin').value = 0
      document.getElementById('ignore_dmgblomin').disabled = true; document.getElementById('ignore_dmgblomin').value = 0
      document.getElementById('ignore_dbkblomin').disabled = true; document.getElementById('ignore_dbkblomin').value = 0
      document.getElementById('ignore_acublomin').disabled = true; document.getElementById('ignore_acublomin').value = 0
      document.getElementById('ignore_filblomin').disabled = true; document.getElementById('ignore_filblomin').value = 0
      break
  }
  ignore_readinfo()
  ignore_UI()
}
function manageButton () {
  var AdLv = document.getElementById('AdLv')
  var SbLv = document.getElementById('SbLv')
  AdLv.disabled = true
  SbLv.disabled = true
  if (parseInt(document.getElementById('ChipLevel').value) === 0) {
    AdLv.disabled = false
    SbLv.disabled = true
  } else if (parseInt(document.getElementById('ChipLevel').value) === 20) {
    AdLv.disabled = true
    SbLv.disabled = false
  } else {
    AdLv.disabled = false
    SbLv.disabled = false
  }
  var addChipButtonId = document.getElementById('addChipButton')
  addChipButtonId.disabled = true
  var bn = 6
  if (block_class === 551) bn = 5
  if (block_dmg + block_dbk + block_acu + block_fil === bn) addChipButtonId.disabled = false
}
function refreshPreview () {
  if (block_class === 551 && (block_shape === 81 || block_shape === 82 || block_shape === 9 || block_shape === 10 || block_shape === 111 || block_shape === 112 || block_shape === 120 || block_shape === 131 || block_shape === 132)) {
    // 五格2类低属性显示
    for (var i = 0; i <= 5; i++) {
      document.getElementById('dmg' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 4.4))
      document.getElementById('dbk' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 12.7))
      document.getElementById('acu' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 7.1))
      document.getElementById('fil' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 0.92 * 5.7))
    }
  } else {
    for (var i = 0; i <= 5; i++) {
      document.getElementById('dmg' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 4.4))
      document.getElementById('dbk' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 12.7))
      document.getElementById('acu' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 7.1))
      document.getElementById('fil' + i).innerHTML = Math.ceil(mul_property * Math.ceil(i * 5.7))
    }
  }
  manageButton()
}
function changeBlock (type, blocknum) {
  var totalblo = 6
  document.getElementById('dmg' + block_dmg).className = 'btn btn-primary'
  document.getElementById('dbk' + block_dbk).className = 'btn btn-primary'
  document.getElementById('acu' + block_acu).className = 'btn btn-primary'
  document.getElementById('fil' + block_fil).className = 'btn btn-primary'
  for (var i = block_dmg + 1; i <= 5; i++) {
    document.getElementById('dmg' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('dmg' + i).disabled = false
  }
  for (var i = block_dbk + 1; i <= 5; i++) {
    document.getElementById('dbk' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('dbk' + i).disabled = false
  }
  for (var i = block_acu + 1; i <= 5; i++) {
    document.getElementById('acu' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('acu' + i).disabled = false
  }
  for (var i = block_fil + 1; i <= 5; i++) {
    document.getElementById('fil' + i).className = 'btn btn-outline btn-primary'
    document.getElementById('fil' + i).disabled = false
  }
  if (block_class === 551) {
    totalblo = 5
    document.getElementById('dmg' + 5).className = 'btn btn-default'
    document.getElementById('dbk' + 5).className = 'btn btn-default'
    document.getElementById('acu' + 5).className = 'btn btn-default'
    document.getElementById('fil' + 5).className = 'btn btn-default'
    document.getElementById('dmg' + 5).disabled = true
    document.getElementById('dbk' + 5).disabled = true
    document.getElementById('acu' + 5).disabled = true
    document.getElementById('fil' + 5).disabled = true
  }
  if (type === 1) {
    document.getElementById('dmg' + block_dmg).className = 'btn btn-outline btn-primary'
    block_dmg = blocknum
    document.getElementById('dmg' + block_dmg).className = 'btn btn-primary'
  } else if (type === 2) {
    document.getElementById('dbk' + block_dbk).className = 'btn btn-outline btn-primary'
    block_dbk = blocknum
    document.getElementById('dbk' + block_dbk).className = 'btn btn-primary'
  } else if (type === 3) {
    document.getElementById('acu' + block_acu).className = 'btn btn-outline btn-primary'
    block_acu = blocknum
    document.getElementById('acu' + block_acu).className = 'btn btn-primary'
  } else if (type === 4) {
    document.getElementById('fil' + block_fil).className = 'btn btn-outline btn-primary'
    block_fil = blocknum
    document.getElementById('fil' + block_fil).className = 'btn btn-primary'
  }
  for (var i = block_dmg + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('dmg' + i).className = 'btn btn-default'
    document.getElementById('dmg' + i).disabled = true
  }
  for (var i = block_dbk + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('dbk' + i).className = 'btn btn-default'
    document.getElementById('dbk' + i).disabled = true
  }
  for (var i = block_acu + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('acu' + i).className = 'btn btn-default'
    document.getElementById('acu' + i).disabled = true
  }
  for (var i = block_fil + (totalblo - allblo()) + 1; i <= 5; i++) {
    document.getElementById('fil' + i).className = 'btn btn-default'
    document.getElementById('fil' + i).disabled = true
  }
  manageButton()
}
function allblo () { return block_dmg + block_dbk + block_acu + block_fil;}
function getHelp (helpnum) { window.open('../img/chip/tutorial/cc-' + helpnum + '-' + lang_type + '.png') }
function newPage (url) { window.open(url)}
