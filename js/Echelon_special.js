function _pro(name_property) {
    if (name_property === 'random') return (Math.random() * 0.3 + 0.85)
    else if (name_property === 'e_arm') return arguments['1']
    else {
        var info = arguments['1']
        return info.get(name_property)
    }
}
function settle_normal_attack(stand_num, info_self, info_enemy) {
    var _para_arm = Math.min(2, _pro('ap', info_self) - _pro('e_arm', info_enemy)),
        _para_dmg = _pro('dmg', info_self)
    // damage benifit for special t-doll skill
    if (info_self.get('type') === 6) { // SG normal attack
        if (is_this(stand_num, 2016)) true // Dana do nothing
        else {
            if (Set_Special.get('sg_ammo_type_' + stand_num) != undefined) { // SG with single-bullet
                if (is_this(stand_num, 163)) { // AA-12
                    if (Set_Special.get('aa12_' + stand_num) != undefined && Set_Special.get('aa12_' + stand_num) > global_frame) {
                        if (Set_Special.get('aa12_skillmode_' + stand_num) === true) { // skill mode: 3 targets
                            Set_Special.set('aa12_skillmode_' + stand_num, false)
                        } else { // single-bullet mode
                            Set_Special.set('aa12_skillmode_' + stand_num, true)
                            _para_dmg *= 3 // x3 dmg
                        }
                    }
                } else {
                    if (Set_Special.get('aim_time_' + stand_num) === undefined || Set_Special.get('aim_time_' + stand_num) < global_frame) {
                        _para_dmg *= 3 // no forcus-multiple-targer, x3 dmg
                    }
                }
            }
        }
    }
    if (is_this(stand_num, 194)) { // K2
        if (Set_Special.get('k2_' + stand_num) === 'fever') _para_dmg *= 0.52 // fever
        else _para_dmg *= Math.pow(1.05, Set_Special.get('k2_dmgup_' + stand_num)) // note
        if (Set_Special.get('k2_temp_' + stand_num) > 15) _para_dmg *= Math.pow(0.98, Set_Special.get('k2_temp_' + stand_num) - 15) // overheat buff
    }
    else if (is_this(stand_num, 256)) { // falcon
        if (Set_Special.get('falcon_' + stand_num) > 0) {
            _para_dmg *= Math.pow(1.18, Set_Special.get('falcon_' + stand_num))
        }
        _para_dmg *= 1.5
    }
    else if (is_this(stand_num, 272)) { // desert eagle
        if (Set_Special.get('DE_active_' + stand_num) != undefined && Set_Special.get('DE_active_' + stand_num) > 0) {
            Set_Special.set('DE_active_' + stand_num, Set_Special.get('DE_active_' + stand_num) - 1)
            // base_dmg *= Math.pow(2.6, 3 - Set_Special.get('DE_active_' + stand_num))
            _para_dmg *= 2.6
        }
    }
    else if (is_this(stand_num, 1002)) { // M1911 MOD
        if (Set_Special.get('m1911_' + stand_num) > 0) _para_dmg *= 2
    }
    else if (is_this(stand_num, 1039)) { // Mosin Nagant MOD
        if (Set_Special.get('mosin_bufftime_' + stand_num) >= global_frame) _para_dmg *= 1.2
        if (Set_Special.get('mosin_' + stand_num) <= 1) { // can refresh buff
            Set_Special.set('mosin_bufftime_' + stand_num, global_frame + 89)
            Set_Special.set('mosin_' + stand_num, Set_Special.get('mosin_numneed_' + stand_num))
        } else Set_Special.set('mosin_' + stand_num, Set_Special.get('mosin_' + stand_num) - 1)
    }
    else if (is_this(stand_num, 1075)) { // M1918 MOD
        if (_pro('cs', info_self) - Set_Special.get('clipsize_' + stand_num) < 3) _para_dmg *= 1.4
    }
    else if (is_this(stand_num, 2008)) { // seele
        if (Set_Special.get('clipsize_' + stand_num) === 1) _para_dmg *= 3
    }
    else if (is_this(stand_num, 2016)) _para_dmg *= 1.8 // Dana
    // Universal formulation of damage settlement
    return Math.max(1, Math.ceil(_para_dmg * _pro('random') + _para_arm))
}