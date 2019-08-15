function cal_damage() {
    var command = arguments['0']
    if (command === 'normal') {
        var dmg = arguments['1'], ap = arguments['2'], arm = arguments['3']
        return Math.max(1, Math.ceil(dmg * (Math.random() * 0.3 + 0.85) + Math.min(2, ap - arm)))
    }
}

// function _skill_173 () {
//   var command = arguments['0']
//   if (command === 'try_extra') {
//     var stand_num = arguments['1']
//     if (Set_Special.get('pkp_nextcrit_' + stand_num) === 'ready' && Math.random() <= 0.2) {
//       Set_Special.set('pkp_nextcrit_' + stand_num, 'extra')
//       return true
//     }
//     else return false
//   } else if (command === 'finish_extra') {
//     if (Set_Special.get('pkp_nextcrit_' + stand_num) === 'over') {
//       Set_Special.set('pkp_nextcrit_' + stand_num, 'ready')
//     }
//   }
// }
