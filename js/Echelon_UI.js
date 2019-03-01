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

function changeAffection () {
  if (affection === 'love') {
    affection = 'marry'
    document.getElementById('img_affection').src = '../img/echelon/icon-marry.png'
  } else if (affection === 'marry') {
    affection = 'love'
    document.getElementById('img_affection').src = '../img/echelon/icon-love.png'
  }
}
function changeSelectItems () {
}
function changeSelection () {
  var ID = parseInt(document.getElementById('select-tdoll').value)
  var path_img = '../img/echelon/' + ID + '.png'
}
