function _mul(name_property, list_buff) {
    for (var element of list_buff) {
        if (element[0] === name_property) return element[1]
    }
    return 1
}
function _pro(name_property) {
    if (name_property === 'random') return (Math.random() * 0.3 + 0.85)
    else if (name_property === 'e_arm') return arguments['1']
    else {
        var info = arguments['1']
        return info.get(name_property)
    }
}

function settle_buff(stand_num, info_self, skillname) {
    var _mul_dmg = 1,
        _mul_acu = 1,
        _mul_critdmg = 1,
        must_acu = false,
        must_crit = false,
        no_crit = false,
        ignore_arm = false
    // 刘氏步枪傀儡的结算
    if (skillname != 'attack') {
        true // block-affect
        _mul_dmg *= 0.4
        _mul_acu *= 0.35
    }
    // 全局buff计算，主要用于处理可叠但先知层数的全体buff
    if (is_exist_someone(2026)) {
        _mul_dmg *= Math.pow(1.05, Math.min(3, multilayer_process('claes_globalbuff', 'get')))
    }
    // 不同人形单独的buff计算
    if (is_this(stand_num, 4)) { // python active
        if (Set_Special.get('python_opening') != undefined && Set_Special.get('python_active') > 0) {
            var num_left = Set_Special.get('python_active') - 1
            Set_Special.set('python_active', num_left)
            changeStatus(stand_num, 'self', 'dmg', '0.3', 5)
            if (num_left === 0) { // 无畏者之拥结束攻击两发
                Set_Skill.get(stand_num)[0][1] = 0 // re-attack
            }
        }
    }
    else if (is_this(stand_num, 77) || is_this(stand_num, 85) || is_this(stand_num, 109)) { // 连珠 no crit
        if (_spG('MG_terminate_' + stand_num) === undefined) _spS('MG_terminate_' + stand_num, 0)
        _spS('MG_terminate_' + stand_num, _spG('MG_terminate_' + stand_num) + 1)
        var cs_hit = _spG('MG_terminate_' + stand_num)
        if (cs_hit > 0 && cs_hit - 4 * parseInt(cs_hit / 4) === 0) {
            if (is_this(stand_num, 77)) _mul_dmg *= 2.4
            else if (is_this(stand_num, 85)) _mul_dmg *= 2.6
            else if (is_this(stand_num, 109)) _mul_dmg *= 3
            no_crit = true
        }
    }
    else if (is_this(stand_num, 173)) { // pkp
        if (Set_Special.get('pkp_nextcrit_' + stand_num) === undefined) Set_Special.set('pkp_nextcrit_' + stand_num, 'ready') // Ultimatum init
        else if (Set_Special.get('pkp_nextcrit_' + stand_num) === 'extra') {
            Set_Special.set('pkp_nextcrit_' + stand_num, 'over')
            _mul_dmg *= 1.5
        }
    }
    else if (is_this(stand_num, 194)) { // K2
        if (Set_Special.get('k2_temp_' + stand_num) > 15) _mul_acu *= Math.pow(0.98, Set_Special.get('k2_temp_' + stand_num) - 15) // overheat
        if (Set_Special.get('k2_' + stand_num) === 'fever') {
            if (Set_Special.get('k2_temp_' + stand_num) < 35) Set_Special.set('k2_temp_' + stand_num, Set_Special.get('k2_temp_' + stand_num) + 1) // fever temp up
            _spS('k2_dmgup_' + stand_num, 0) // note dmg buff clear
        } else {
            if (Set_Special.get('k2_temp_' + stand_num) > 0) Set_Special.set('k2_temp_' + stand_num, Set_Special.get('k2_temp_' + stand_num) - 1) // note temp down
            if (Set_Special.get('k2_dmgup_' + stand_num) < 10) Set_Special.set('k2_dmgup_' + stand_num, Set_Special.get('k2_dmgup_' + stand_num) + 1) // note dmg up
        }
    }
    else if (is_this(stand_num, 197)) { // carcano m1891
        if (Set_Special.get('carcano1891') === undefined) Set_Special.set('carcano1891', 0)
        if (Math.random() <= 0.4 && Set_Special.get('carcano1891') < 3) {
            var num_col = Math.ceil(stand_num / 3) + 1
            react([createSkill(0, 0, 2, describe_property(['col' + num_col], ['rof/crit'], ['0.04/0.04'])), 0], stand_num, global_frame)
            changeStatus(stand_num, 'self', 'rof', '0', 2)
            Set_Special.set('carcano1891', Set_Special.get('carcano1891') + 1)
        }
    }
    else if (is_this(stand_num, 198)) { // carcano m91/38 passive
        if (Set_Special.get('carcano9138_' + stand_num) === undefined) Set_Special.set('carcano9138_' + stand_num, 0)
        if (Math.random() <= 0.7) {
            Set_Special.set('carcano9138_' + stand_num, Set_Special.get('carcano9138_' + stand_num) + 2)
        }
    }
    else if (is_this(stand_num, 214)) { // ADS
        if (Set_Special.get('ADS_active') != undefined && Set_Special.get('ADS_active') >= global_frame) { // active buff duration
            if (Set_Special.get('ADS_buff') === undefined) Set_Special.set('ADS_buff', 1)
            else Set_Special.set('ADS_buff', Set_Special.get('ADS_buff') + 1)
        } else { // passive
            if (Math.random() <= 0.4) {
                if (Set_Special.get('ADS_buff') === undefined) Set_Special.set('ADS_buff', 1)
                else Set_Special.set('ADS_buff', Set_Special.get('ADS_buff') + 1)
            }
        }
        if (Set_Special.get('ADS_buff') != undefined && Set_Special.get('ADS_buff') >= 5) {
            Set_Special.set('ADS_buff', 0)
            var aoe_ratio = parseFloat(document.getElementById('special_ads').value) / 100
            var ads_dmg_aoe = Math.ceil(aoe_ratio * 6 * Math.ceil(info_self.get('dmg') * (Math.random() * 0.3 + 0.85)) * explain_fgl_ff('aoe'))
            recordData(stand_num, global_frame, ads_dmg_aoe)
        }
    }
    else if (is_this(stand_num, 221)) { // manga-gun must crit active
        if (Set_Special.get('multi_' + stand_num) != undefined && Set_Special.get('multi_' + stand_num)[1] >= global_frame) must_crit = true
    }
    else if (is_this(stand_num, 245)) { // P90
        if (Set_Special.get('p90_' + stand_num) > 0) {
            must_acu = true
            must_crit = true
            Set_Special.set('p90_' + stand_num, Set_Special.get('p90_' + stand_num) - 1)
        }
    }
    else if (is_this(stand_num, 256)) { // falcon special bullet acu up
        if (Set_Special.get('falcon_' + stand_num) > 0) _mul_acu *= Math.pow(1.18, Set_Special.get('falcon_' + stand_num))
    }
    else if (is_this(stand_num, 261)) { // QBU-88 passive
        if (Set_Special.get('qbu88_' + stand_num) === 2) {
            Set_Special.set('qbu88_' + stand_num, 0)
            var explode_percent = parseFloat(document.getElementById('special_qbu88_' + (stand_num + 1)).value) / 100
            var explode_dmg = 1.5 * info_self.get('dmg') * explain_fgl_ff('aoe') * explode_percent
            recordData(stand_num, global_frame, explode_dmg)
        } else {
            Set_Special.set('qbu88_' + stand_num, Set_Special.get('qbu88_' + stand_num) + 1)
        }
    }
    else if (is_this(stand_num, 270)) { // type4
        Set_Special.set('type4_' + stand_num, Set_Special.get('type4_' + stand_num) + 1)
    }
    else if (is_this(stand_num, 274)) { // ACR计算debuff个数
        var list_debuff = ['enemy_dmg', 'enemy_rof', 'enemy_acu', 'enemy_eva', 'enemy_arm',
            'enemy_speed', 'enemy_dot', 'enemy_dizz']
        var num_debuff = 0
        for (var debuff of list_debuff) {
            if (_spG(debuff) >= global_frame) {
                num_debuff++
            }
        }
        var p_justice = 0.2 + 0.1 * num_debuff
    }
    else if (is_this(stand_num, 275)) {
        var buffnum = multilayer_process('m1895cb_buff_acu_' + stand_num, 'get')
        if (buffnum > 10) buffnum = 10
        _mul_acu *= Math.pow(0.85, buffnum)
        if (_spG('m1895cb_skillon_' + stand_num) && _spG('m1895cb_' + stand_num) > 0) {
            _mul_dmg *= 1.2
        }
    }
    else if (is_this(stand_num, 287)) { // SIG-556
        if (_spG('sig556_skill_' + stand_num) === true) {
            _mul_dmg *= 1.5
        }
    }
    else if (is_this(stand_num, 290)) { // 89 type
        // 检查模式转换和状态
        if (_spE('89_mode_' + stand_num, 'learn')) { // 学习模式
            if (_spG('89_buff_' + stand_num) === 18) {
                _spS('89_mode_' + stand_num, 'full-score') // 18层转化满分模式
            }
        } else { // 满分模式
            _mul_dmg *= 1 + 0.1 * (_spG('89_forcus_' + stand_num))
            if (_spG('89_buff_' + stand_num) === 0) {
                _spS('89_mode_' + stand_num, 'learn') // 0层转化学习模式
                _spS('89_forcus_' + stand_num, 0) // 清空伤害加深
            }
        }
        // 处理层数消耗和积累
        if (_spE('89_mode_' + stand_num, 'learn')) _spPlus('89_buff_' + stand_num) // 学习模式积累层数
        else { // 满分模式
            if (_spG('89_forcus_' + stand_num) < 3) _spPlus('89_forcus_' + stand_num) // 未满则积累伤害加深
            _spDecl('89_buff_' + stand_num) // 降低层数
        }
        // 结算满分模式的增益
        if (_spG('89_fsbuff_' + stand_num) != undefined && _spG('89_fsbuff_' + stand_num) >= global_frame) {
            _mul_dmg *= 1.3
            _mul_acu *= 1.6
        }
    }
    else if (is_this(stand_num, 292)) { // rpk-16 AR模式 buff
        if (_spE('rpk16_' + stand_num, 'ar')) { // rof-buff counting in attack-duration calculation
            _mul_acu *= 2
        }
    }
    else if (is_this(stand_num, 293)) { // ak-15怒火buff刷新判定
        if (Math.random() <= 0.15) {
            _spS('ak15_angry_frame_' + stand_num, global_frame + 90)
        }
    }
    else if (is_this(stand_num, 302)) { // 防卫者伤害倍率
        _mul_dmg *= parseInt(document.getElementById('special_302_energy_' + stand_num).innerHTML)
    }
    else if (is_this(stand_num, 306)) {
        if (document.getElementById('special_306_' + stand_num).checked || _spG('akalfa_skillon_' + stand_num) >= global_frame) {
            _mul_dmg *= 1.2
        }
    }
    else if (is_this(stand_num, 307)) { // ZB-26 技能弹
        if (_spG('zb26_currentbullet_' + stand_num) === 0) { // skill-on
            _mul_dmg *= 1.5
            _mul_acu *= 1.5
        }
    }
    else if (is_this(stand_num, 313)) { // S-ACR计算debuff个数
        var bufflist = Set_Status.get(stand_num),
            list_pro = []
        for (var pro_pair of bufflist) { // buff属性结构为 [ [ type , value ] , leftframe ]
            if (pro_pair[0][1] < 1 && !is_exist_element(pro_pair[0][0], list_pro)) { // 是debuff
                list_pro.push(pro_pair[0][0])
            }
        }
        _mul_dmg *= 1 + (0.05 * list_pro.length)
    }
    else if (is_this(stand_num, 319)) { // PM1910特殊子弹
        if (_spG('pm1910_skillon_' + stand_num)) {
            if (_spG('pm1910_left_' + stand_num) <= 12) _mul_acu *= 1.8
        }
    }
    else if (is_this(stand_num, 329)) { // SVCh被动
        _mul_dmg *= Math.pow(
            1.1,
            parseInt(document.getElementById('special_329_energy_' + stand_num).innerHTML)
        )
    }
    else if (is_this(stand_num, 1005)) { // nagant revolver mod
        if (Set_Special.get('m1895_' + stand_num) === 0) { // reload 7x
            changeStatus(stand_num, 'all', 'dmg', '0.1', 4)
            changeStatus(stand_num, 'all', 'acu', '0.1', 4)
        }
        Set_Special.set('m1895_' + stand_num, Set_Special.get('m1895_' + stand_num) + 1)
        if (Set_Special.get('m1895_' + stand_num) === 7) Set_Special.set('m1895_' + stand_num, 0)
    }
    else if (is_this(stand_num, 1060)) { // asval mod
        if (_spG('asval_' + stand_num) > global_frame) must_acu = true
    }
    else if (is_this(stand_num, 1071)) { // galil mod
        _mul_acu *= 1 - 0.2 * _spG('galil_supportnum') // 加利尔命中降低
    }
    else if (is_this(stand_num, 1124)) { // supersass mod
        if (_spG('supersass_' + stand_num) != undefined && _spG('supersass_' + stand_num) > 0) {
            must_acu = true
            _spDecl('supersass_' + stand_num)
        }
        if (document.getElementById('special_1124_' + stand_num).checked) _mul_dmg *= 1.1
    }
    else if (is_this(stand_num, 1122)) { // g11 mod
        _spPlus('g11_layer_' + stand_num)
    }
    else if (is_this(stand_num, 1125)) { // MG4 MOD
        if (_spG('mg4_exbullet_' + stand_num) > 0) { // 额外子弹叠buff
            multilayer_process('mg4_dmgbuff_' + stand_num, 'add', ['dmg', 0.05, 18 * 30])
        }
        var buffnum = multilayer_process('mg4_dmgbuff_' + stand_num, 'get')
        if (buffnum > 8) buffnum = 8
        _mul_dmg *= Math.pow(1.05, buffnum)
    }
    else if (is_this(stand_num, 1200)) {
        if (_spG('xm3_count_' + stand_num) === 0 && _spG('xm3_skillon_' + stand_num) >= global_frame) { // 当前是首发对敌，且技能期间
            must_acu = true // 必定命中
            if (_spG('sunrise') === 'night') _mul_critdmg *= 1.2 // 夜战多20%暴伤
        }
        _spPlus('xm3_count_' + stand_num) // 增加次数
        if (_spG('xm3_count_' + stand_num) >= parseInt(document.getElementById('special_1200_' + stand_num).value)) { // 超过预定次数
            _spS('xm3_count_' + stand_num, 0) // 归零
        }
    }
    else if (is_this(stand_num, 2012)) { // sei: help stella add buff
        if (is_exist_someone(2014)) {
            if (Set_Special.get('stella_num') === undefined) Set_Special.set('stella_num', 1)
            else Set_Special.set('stella_num', Set_Special.get('stella_num') + 1)
        }
    }
    else if (is_this(stand_num, 2014)) { // stella critdmg buff
        if (Set_Special.get('stella_buff') === true) {
            _mul_critdmg *= 1.5
            Set_Special.set('stella_buff', false)
        }
    }
    else if (is_this(stand_num, 2023)) { // henrietta dmg buff
        var buffnum = multilayer_process('henri_dmg_' + stand_num, 'get')
        if (buffnum > 3) buffnum = 3
        _mul_dmg *= Math.pow(1.3, buffnum)
    }
    else if (is_this(stand_num, 2024)) { // rico dmg buff
        var buffnum = multilayer_process('rico_dmg_' + stand_num, 'get')
        if (buffnum > 3) buffnum = 3
        _mul_dmg *= 1 + (0.15 * buffnum)
    }
    else if (is_this(stand_num, 2025)) { // triela
        if (document.getElementById('special_2025_' + stand_num).checked) {  // 拔刀
            if (_spG('sg_ammo_type_' + stand_num) === 'single') true // do nothing
            else _mul_dmg *= 2
        }
    }
    else if (is_this(stand_num, 2026)) { // claes dmg buff
        _mul_dmg *= (1 + 0.25 * _spG('claes_buff_' + stand_num))
    }
    else if (is_this(stand_num, 2027)) { // angelica dmg buff
        if (_spG('angelica_' + stand_num) >= global_frame) {
            if (_spG('angelica_' + stand_num) - global_frame > 120) _mul_dmg *= 1.12
            else if (_spG('angelica_' + stand_num) - global_frame > 60) _mul_dmg *= 1.08
            else _mul_dmg *= 1.04
        }
    }

    return [
        ['dmg', _mul_dmg], ['acu', _mul_acu], ['critdmg', _mul_critdmg],
        ['must_acu', must_acu],
        ['must_crit', must_crit], ['no_crit', no_crit],
        ['ignore_arm', ignore_arm]]
}

function settle_normal_attack(stand_num, info_self, info_enemy, list_buff) {
    var _para_arm = Math.min(2, _pro('ap', info_self) - _pro('e_arm', info_enemy)),
        ignore_arm = _mul('ignore_arm', list_buff),
        _para_dmg = _pro('dmg', info_self) * _mul('dmg', list_buff)
    // 无视护甲条目生效
    if (ignore_arm) _para_arm = 0
    // 特殊人形技能的伤害增益
    if (info_self.get('type') === 6) { // SG普攻计算独头弹
        if (is_this(stand_num, 2016)) true // 达娜不考虑独头弹
        else {
            if (_spG('sg_ammo_type_' + stand_num) != undefined) { // SG携带独头弹
                if (is_this(stand_num, 163)) { // AA-12
                    if (_spG('aa12_' + stand_num) != undefined && _spG('aa12_' + stand_num) > global_frame) {
                        if (_spG('aa12_skillmode_' + stand_num) === true) { // 技能交替为3目标
                            _spS('aa12_skillmode_' + stand_num, false)
                        } else { // 否则为独头弹模式
                            _spS('aa12_skillmode_' + stand_num, true)
                            _para_dmg *= 3 // x3 dmg
                        }
                    }
                }
                else if (is_this(stand_num, 302)) { // 防卫者不受独头弹加成
                    true
                }
                else {
                    if (_spG('aim_time_' + stand_num) === undefined || _spG('aim_time_' + stand_num) < global_frame) {
                        _para_dmg *= 3 // no forcus-multiple-targer, x3 dmg
                    }
                }
            }
        }
        if (is_this(stand_num, 2025)) { // 崔耶拉拔刀无限子弹
            if (document.getElementById('special_2025_' + stand_num).checked) {  // 携带独头弹，或拔刀
                if (_spG('sg_ammo_type_' + stand_num) === 'single') true // do nothing
                else _spPlus('clipsize_' + stand_num) // 拔刀不消耗子弹
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
    else if (is_this(stand_num, 315)) { // AUG Para
        if (_spG('aug_type_' + stand_num) === 'dps') _para_dmg += 2 * _spG('aug_layer_' + stand_num)
        else _para_dmg -= _spG('aug_layer_' + stand_num)
    }
    else if (is_this(stand_num, 318)) { // VHS
        var vhs_dmg = 0
        if (_spG('vhs_buff_' + stand_num) >= global_frame) { // 技能期
            if (isNaN(_spG('vhs_dmg_' + stand_num))) {
                if (parseFloat(_spG('vhs_dmg_' + stand_num).slice(1)) > 0.45) vhs_dmg = _para_dmg * 0.45
                else vhs_dmg = _para_dmg * parseFloat(_spG('vhs_dmg_' + stand_num).slice(1))
            } else {
                if (_spG('vhs_dmg_' + stand_num) > _para_dmg * 0.45) vhs_dmg = _para_dmg * 0.45
                else vhs_dmg = _spG('vhs_dmg_' + stand_num)
            }
            _para_dmg += vhs_dmg
        }
    }
    else if (is_this(stand_num, 1002)) { // M1911 MOD
        if (Set_Special.get('m1911_' + stand_num) > 0) _para_dmg *= 2
    }
    else if (is_this(stand_num, 1039)) { // Mosin Nagant MOD
        if (document.getElementById('special_1039_3_' + stand_num).checked) {
            if (_spG('mosin_bufftime_' + stand_num) >= global_frame) _para_dmg *= 1.2
            _spS('mosin_bufftime_' + stand_num, global_frame + 90)
        }
    }
    else if (is_this(stand_num, 1075)) { // M1918 MOD
        if (_pro('cs', info_self) - Set_Special.get('clipsize_' + stand_num) < 3) _para_dmg *= 1.4
    }
    else if (is_this(stand_num, 1125)) { // MG4 MOD
        if (_spG('mg4_exbullet_' + stand_num) > 0) {
            _para_dmg += 0.25 * (_pro('ap', info_self) - _pro('e_arm', info_enemy)) // 穿甲溢出25%
            _spDecl('mg4_exbullet_' + stand_num)
        }
    }
    else if (is_this(stand_num, 1143)) { // RO635 MOD 技能期间攻击命中，为敌人附加伸冤者印记
        if (_spG('ro635_skillon_' + stand_num)) {
            Set_EnemyStatus.set('avenger_mark', true)
        }
    }
    else if (is_this(stand_num, 2008)) { // seele
        if (Set_Special.get('clipsize_' + stand_num) === 1) _para_dmg *= 3
    }
    else if (is_this(stand_num, 2016)) _para_dmg *= 1.8 // Dana

    // 火力护甲结算——————————————————————————————————————————————————
    // 独享型伤害加深
    if (is_this(stand_num, 318)) { // VHS被动层数
        return Math.max(1, Math.ceil(_para_dmg * _pro('random') + _para_arm)) // 护甲结算
            * (1 + 0.025 * _spG('vhs_layernum_' + stand_num)) // 伤害加深倍率
    }
    // 无独享型伤害加深
    else return Math.max(1, Math.ceil(_para_dmg * _pro('random') + _para_arm))
}

// 多重攻击
function settle_numbers(stand_num, info_self, enemy_arm, enemy_num_left, enemy_form, list_buff) {
    var num = 1
    if (is_this(stand_num, 194)) { // K2判断模式射击次数
        if (_spG('k2_' + stand_num) === 'fever') num *= 3
    }
    else if (is_this(stand_num, 276)) { // Kord
        if (_spG('kord_' + stand_num) === 'type_p') num *= enemy_num_left
    }
    else if (is_this(stand_num, 312)) { // VSK-94
        if (_spG('vsk94_multi_' + stand_num) != undefined) {
            if (_spG('vsk94_multi_' + stand_num) > 0) {
                num *= 2
                _spDecl('vsk94_multi_' + stand_num)
            } else true
        } else true
    }
    else if (is_this(stand_num, 1095)) { // 汉阳造88 MOD
        if (_spG('hanyang88_buff_' + stand_num) >= global_frame) {
            num *= enemy_num_left
        }
    }
    else if (is_this(stand_num, 2030)) { // Jashin, aoe伤害
        num *= enemy_form
        num *= enemy_num_left
    }
    if (info_self.get('type') === 6) { // SG攻击，目标数特殊处理
        if (is_this(stand_num, 302)) { // 防卫者恒定1目标、8段伤害
            num = 8
        }
        else if (is_this(stand_num, 2016)) { // 达娜攻击不受任何子弹影响，恒定1目标
            num = 1
        }
        else if (is_this(stand_num, 2025)) { // 崔耶拉判断
            if (_spG('sg_ammo_type_' + stand_num) === 'single' || document.getElementById('special_2025_' + stand_num).checked) {  // 携带独头弹，或拔刀
                num = 1
            } else num = Math.min(4, enemy_num_left)
        }
        else {
            if (_spG('aim_time_' + stand_num) >= global_frame) { // 强制攻击几个目标，顶替独头弹效果
                num = Math.min(_spG('aim_forceon_' + stand_num), enemy_num_left)
            } else { // 没有强制目标数
                if (_spG('sg_ammo_type_' + stand_num) === undefined) { // SG未携带独头弹，默认3目标
                    num = Math.min(3, enemy_num_left)
                } else { // 如果携带，可能因为技能攻击多个目标
                    if (is_this(stand_num, 163)) { // AA-12酮血症BUG
                        if (Set_Special.get('aa12_' + stand_num) != undefined && Set_Special.get('aa12_' + stand_num) > global_frame && Set_Special.get('aa12_skillmode_' + stand_num) === false) {
                            num = Math.min(3, enemy_num_left)
                        }
                    }
                }
            }
        }
    }
    if (Set_Special.get('multi_' + stand_num) != undefined && Set_Special.get('multi_' + stand_num)[1] >= global_frame) { // 多重攻击
        num *= Set_Special.get('multi_' + stand_num)[0]
        if (is_this(stand_num, 2014)) { // stella
            var max_hit = 16
            if (Set_Special.get('stella_num') === undefined) { // 积累层数
                Set_Special.set('stella_num', 2)
            } else {
                Set_Special.set('stella_num', Set_Special.get('stella_num') + 2)
            }
            if (Set_Special.get('jill_winestart') === true) {
                if (Set_Static.get('jill_winetype') === 5) max_hit = 10
            }
            if (Set_Special.get('stella_num') >= max_hit) {
                Set_Special.set('stella_num', 0)
                Set_Special.set('stella_buff', true)
            }
        }
    }
    return num
}

function settle_specialskill(stand_num, info_self, info_enemy, final_dmg) { // 特殊判定结算，包括额外段数伤害、对自身伤害加深等
    var _para_arm = Math.min(2, _pro('ap', info_self) - _pro('e_arm', info_enemy))
    if (is_this(stand_num, 4)) { // 蟒蛇
        if (_spG('python_active') === 0 && _spG('python_opening') === true) {
            final_dmg *= 2 // 无畏者之拥结束双发
            _spS('python_active', -1)
            _spS('python_opening', false)
        }
    }
    else if (is_this(stand_num, 272)) { // 沙漠之鹰额外伤害
        if (Set_Special.get('DE_active_' + stand_num) != undefined && Set_Special.get('DE_active_' + stand_num) >= global_frame) { // active skill-on
            if (Set_Special.get('DE_bullet_' + stand_num) != undefined && Set_Special.get('DE_bullet_' + stand_num) > 0) { // bullet dmg_up
                Set_Special.set('DE_bullet_' + stand_num, Set_Special.get('DE_bullet_' + stand_num) - 1) // lost bullet buff
                Set_Special.set('DE_multiple_' + stand_num, Math.pow(1.6, 3 - Set_Special.get('DE_bullet_' + stand_num)))
            }
        } else {
            Set_Special.set('DE_multiple_' + stand_num, 1)
        }
        final_dmg *= Set_Special.get('DE_multiple_' + stand_num)
    }
    else if (is_this(stand_num, 293)) { // AK-15 怒火
        var extra_dmg = 0
        if (_spG('ak15_angry_frame_' + stand_num) >= global_frame) { // 怒火期间
            extra_dmg = Math.max(1, Math.ceil(0.4 * info_self.get('dmg') * _pro('random') + _para_arm)) // 20%火力
            final_dmg += extra_dmg
        }
    }
    else if (is_this(stand_num, 312)) { // VSK-94 二重警备伤害转化
        if (_spG('vsk94_buff_' + stand_num) >= global_frame) {
            final_dmg += _spG('vsk94_exdmg_' + stand_num)
        }
    }
    else if (is_this(stand_num, 331)) { // Kolibri
        final_dmg += Math.ceil(1 * info_self.get('dmg') * _pro('random') + _para_arm) * _spG('kolibri_number_' + stand_num) // 暂定1倍单发子弹
    }
    else if (is_this(stand_num, 1053)) { // NTW-20 MOD 普攻伤害加深
        if (document.getElementById('special_1053_1_' + stand_num).checked) { // 半血以上额外10%伤害
            final_dmg *= 1.1
        }
    }
    else if (is_this(stand_num, 1057)) { // AR-15 MOD 罪与罚
        var extra_dmg = 0
        var ar15_list_status = Set_Status.get(stand_num)
        var len_list = ar15_list_status.length
        for (var i = 0; i < len_list; i++) {
            if (ar15_list_status[i][0][0] === 'rof' && ar15_list_status[i][0][1] === 1.5) { // 突击专注期间
                if (Set_EnemyStatus.get('avenger_mark') === true) {
                    extra_dmg = Math.max(1, Math.ceil(0.2 * info_self.get('dmg') * _pro('random') + _para_arm)) // 20%火力
                } else {
                    extra_dmg = Math.max(1, Math.ceil(0.1 * info_self.get('dmg') * _pro('random') + _para_arm)) // 10%火力
                }
                final_dmg += extra_dmg
                break
            }
        }
    }
    else if (is_this(stand_num, 1125)) { // MG4跳弹
        var extra_dmg = 0
        if (_pro('ap', info_self) > 600 && enemy_num_left > 1) { // 带了专属，且能够弹射
            extra_dmg = Math.max(1, Math.ceil(0.1 * info_self.get('dmg') * _pro('random') + _para_arm)) // 10%火力
            extra_dmg *= 3
            final_dmg += extra_dmg
        }
    }
    else if (is_this(stand_num, 2015)) { // Alma无人机
        if (Set_Special.get('alma_' + stand_num) >= global_frame) {
            var pod_dmg = info_self.get('dmg') * 0.4
            var pod_final_dmg = Math.max(1, Math.ceil(pod_dmg * _pro('random') + _para_arm))
            final_dmg += 2 * pod_final_dmg
        }
    }
    return final_dmg
}

function settle_accuracy(stand_num, info_self, info_enemy, list_buff) {
    var acu = info_self.get('acu') * _mul('acu', list_buff),
        e_eva = info_enemy,
        is_hit = false,
        must_acu = _mul('must_acu', list_buff)
    // 特殊的最终加算命中
    if (is_this(stand_num, 315)) { // AUG Para 最终加算命中
        if (_spG('aug_type_' + stand_num) === 'dps') acu += _spG('aug_layer_' + stand_num)
        else acu -= _spG('aug_layer_' + stand_num)
    }
    else if (is_this(stand_num, 318)) { // VHS 最终加算命中
        var vhs_acu = 0
        if (_spG('vhs_buff_' + stand_num) >= global_frame) { // 技能期
            if (isNaN(_spG('vhs_acu_' + stand_num))) {
                if (parseFloat(_spG('vhs_acu_' + stand_num).slice(1)) > 0.8) vhs_acu = acu * 0.8
                else vhs_acu = acu * parseFloat(_spG('vhs_acu_' + stand_num).slice(1))
            } else {
                if (_spG('vhs_acu_' + stand_num) > acu * 0.8) vhs_acu = acu * 0.8
                else vhs_acu = _spG('vhs_acu_' + stand_num)
            }
            acu += vhs_acu
        }
    }
    else if (is_this(stand_num, 333)) { // VP1915必中
        if ((_spG('vp1915_isforcus_' + stand_num)) || (_spG('vp1915_isfirst_' + stand_num))) { // 专注，或是首发，处理易伤
            var deepdmg = _spG('vp1915_layer_' + stand_num) * 0.03
            if (global_frame >= 180) deepdmg *= 2
            deepdmg += 1
            fragile_main /= deepdmg
            fragile_all /= deepdmg
            if (_spG('vp1915_layer_' + stand_num) < 5) {
                _spPlus('vp1915_layer_' + stand_num) // 能叠易伤
            }
            deepdmg = _spG('vp1915_layer_' + stand_num) * 0.03
            if (global_frame >= 180) deepdmg *= 2
            deepdmg += 1
            fragile_main *= deepdmg
            fragile_all *= deepdmg
        }
        if (_spG('vp1915_isforcus_' + stand_num) && _spG('vp1915_isfirst_' + stand_num)) must_acu = true // 专注型首发，必中弹
        _spS('vp1915_isfirst_' + stand_num, !_spG('vp1915_isfirst_' + stand_num)) // 是否第一发，取反
    }

    // 其它命中

    if (_spG('is_galil_exist') != undefined) { // 加利尔影响格队友+10%自身命中
        if (is_in_affect_of(_spG('is_galil_exist'), stand_num)) { // 在加利尔MOD影响格内
            if (is_this_type(stand_num, 2) || is_this_type(stand_num, 3)) { // 是AR或SMG
                acu += 0.1 * _spG('galil_tempacu')
            }
        }
    }

    if (must_acu || (Math.random() <= acu / (acu + e_eva))) is_hit = true
    return is_hit
}

function settle_crit(stand_num, info_self, list_buff) {
    var crit_rate = info_self.get('crit')
    // 特殊暴击率加成
    if (is_this(stand_num, 1071)) { // 加利尔自身暴击率加成
        if (_spG('galil_tempacu') > enemy_eva) {
            crit_rate = Math.min(1, crit_rate + 0.002 * (_spG('galil_tempacu') - enemy_eva))
        }
    }
    //
    var is_crit = false,
        must_crit = false,
        no_crit = false,
        critdmg_para = 1
    must_crit = _mul('must_crit', list_buff) ||
        (_spG('must_crit_' + stand_num) != undefined) ||
        (_spG('skill_mustcrit_' + stand_num) != undefined && _spG('skill_mustcrit_' + stand_num) >= global_frame)
    no_crit = _mul('no_crit', list_buff)
    if (no_crit) is_crit = false // 不可暴击
    else if (must_crit || Math.random() + crit_rate >= 1) is_crit = true // 正常暴击
    if (is_crit) critdmg_para *= info_self.get('critdmg') * _mul('critdmg', list_buff)
    return critdmg_para
}
function settle_extra(stand_num, info_self, enemy_arm, enemy_eva, list_buff) {
    var extra_value = 0,
        _para_arm = Math.min(2, _pro('ap', info_self) - _pro('e_arm', enemy_arm)),
        _para_dmg = _pro('dmg', info_self) * _mul('dmg', list_buff)
    if (is_this(stand_num, 160) && Set_Special.get('saiga_' + stand_num) > 0) { // saiga-12巨羚号角，必中/无视护甲/不能暴击/无视独头弹/强制三目标
        if (Set_Special.get('saiga_' + stand_num) === 3) _para_dmg *= 1.5
        else if (Set_Special.get('saiga_' + stand_num) === 2) _para_dmg *= 2.5
        else if (Set_Special.get('saiga_' + stand_num) === 1) _para_dmg *= 3.5
        _para_dmg = Math.ceil(this_formation(stand_num) * _para_dmg)
        Set_Special.set('saiga_' + stand_num, Set_Special.get('saiga_' + stand_num) - 1)
        if (enemy_num_left >= 3) extra_value = _para_dmg * explain_fgl_ff('single') + 2 * _para_dmg * explain_fgl_ff('around_single')
        else extra_value = _para_dmg * explain_fgl_ff('single') + (enemy_num_left - 1) * _para_dmg * explain_fgl_ff('around_single')
    } else if (is_this(stand_num, 275)) { // M1895CB备用子弹层数计算
        if (_spG('m1895cb_skillon_' + stand_num) && _spG('m1895cb_' + stand_num) > 0) { // 技能开启且备用子弹足够
            multilayer_process('m1895cb_buff_acu_' + stand_num, 'add', ['acu', 0.2, 150])
        }
    } else if (is_this(stand_num, 1095)) { // 汉阳造全能战术技能
        if (Set_Special.get('hanyang88_bomb_' + stand_num) === true) {
            if (enemy_arm > 0) { // 导弹
                extra_value += Math.ceil(Math.max(1, Math.ceil(_para_dmg * _pro('random') * 1.5 + _para_arm)) * explain_fgl_ff('single')) // 计算护甲1.5倍主目标
                extra_value += Math.ceil(Math.max(1, Math.ceil(_para_dmg * _pro('random') * 0.5 + _para_arm)) * explain_fgl_ff('around_aoe')) // 计算护甲0.5倍周围
            } else { // 手雷
                if (settle_accuracy(stand_num, info_self, enemy_eva, list_buff)) {
                    extra_value += Math.ceil(Math.max(1, Math.ceil(_para_dmg * _pro('random') * 0.5 + _para_arm)) * explain_fgl_ff('aoe')) // 计算护甲0.5倍aoe
                    extra_value += 6 * Math.ceil(Math.max(1, Math.ceil(_para_dmg * _pro('random') * 0.25 + _para_arm)) * explain_fgl_ff('aoe')) // 计算护甲的6次0.25倍aoe
                }
            }
            Set_Special.set('hanyang88_bomb_' + stand_num, false)
        }
    }
    return extra_value
}

function settle_formation(stand_num, fire_status, skillname) {
    if (skillname === 'attack') {
        if (fire_status.substr(5) === 'all') return this_formation(stand_num) // 全员攻击
        else if (fire_status.substr(5) === 'four') return this_formation(stand_num) - 1 // 一人释放技能
    } else {
        return 3
    }
}

function settle_addition(stand_num, info_self, info_enemy, enemy_num_left, list_buff) {
    var addition_dmg = 0

    if (is_this(stand_num, 1252)) { // KSVK MOD
        var list_debuff = ['enemy_dmg', 'enemy_rof', 'enemy_acu', 'enemy_eva', 'enemy_arm',
            'enemy_speed', 'enemy_dot', 'enemy_dizz']
        var is_in_debuff = false
        for (var debuff of list_debuff) {
            if (Set_Special.get(debuff) >= global_frame) {
                is_in_debuff = true
                break
            }
        }
        if (is_in_debuff) {
            addition_dmg = Math.ceil(0.3 * info_self.get('dmg') * _pro('random')) * this_formation(stand_num) // 0.3火力技能伤害普攻，无视护甲/必中/不可暴击
            if (document.getElementById('special_1252_' + stand_num).checked) {
                addition_dmg *= enemy_num_left
            }
        }
    }
    return addition_dmg
}

function settle_ignoreaccuracy(stand_num, info_self, info_enemy, final_dmg) {
    var _para_arm = Math.min(2, _pro('ap', info_self) - _pro('e_arm', info_enemy))
    if (is_this(stand_num, 1122)) {// G11 MOD
        var extra_dmg = 0
        if (_spG('g11_layer_' + stand_num) >= 3) {
            _spS('g11_layer_' + stand_num, 0)
            extra_dmg = Math.max(1,
                Math.min(0.02 * parseInt(document.getElementById('special_1122_' + stand_num).value), 3 * info_self.get('dmg')) // 至多3倍战时火力或敌人生命上限2%
                + _para_arm) // 20%火力
            final_dmg += extra_dmg
        }
    }
    else if (is_this(stand_num, 329)) { // SVCh
        if (_spG('svch_frame_' + stand_num) >= global_frame) {
            final_dmg += 150 * enemy_form
        }
    }
    return final_dmg
}

// sample

// _damage = toInt(Math.random() <= (_acu / (_acu + _eva))) *                      // accuracy
//     Math.ceil(
//         Math.floor(
//             (Math.max(1, Math.ceil(_dmg * (0.85 + 0.3 * Math.random()) - _arm)) // armor penetrate
//                 * (1 + (_critdmg - 1) * toInt(Math.random() <= _crit))          // crit
//                 + _const_dmg)                                                   // constant damage
//             * (_ff / _ffmax)                                                    // forcefield reduction
//         )
//         * _para_deepen * _para_reduce                                           // daamge deepen and reduction
//     )