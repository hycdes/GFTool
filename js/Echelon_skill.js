var lib_skill = new Map // 技能库，存放 < 人形编号, list_Skill>
var lib_describe = new Map // 描述库，存放 < 技能名, 描述 >

// 技能类，属性：前置冷却、冷却、持续时间、描述
// react函数根据技能的参数和描述，进行解释
// 非持续类[duration=0]，无限持续（被动）[duration=-1]，非属性被动技能会改写特殊变量表并删除自己
// 另外，攻击所有值全为0，单独在react作为最高优先判断
function createSkill(init_cld, cld, duration, Describe) {
  var Skill = {}
  Skill.init_cld = init_cld
  Skill.cld = cld
  Skill.duration = duration
  Skill.Describe = Describe
  return Skill
}
// 描述类，属性：描述名、通用化特定属性
// 特定技能没有通用属性，根据描述名在react单独处理
function describe_attack() { // 普通攻击
  var Describe = {}
  Describe.name = 'attack'
  return Describe
}

function describe_property(list_target, list_pro, list_value) { // 属性增益
  var Describe = {}
  Describe.name = 'property'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
function describe_propertyN(list_target, list_pro, list_value) { // 属性增益N
  var Describe = {}
  Describe.name = 'propertyN'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
function describe_propertyND(list_target, list_pro, list_value) { // 属性增益N-昼战衰减
  var Describe = {}
  Describe.name = 'propertyND'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
function describe_colt() { // 决斗幸存者
  var Describe = {}
  Describe.name = 'colt'
  return Describe
}
function describe_m1911() { // 绝境神枪手
  var Describe = {}
  Describe.name = 'm1911'
  return Describe
}
function describe_bomb(direct_ratio, dot_ratio, dot_per_second, dot_time) { // 投掷物，实际执行榴弹+AOE单独计算
  var Describe = {}
  Describe.name = 'bomb'
  Describe.direct_ratio = direct_ratio
  Describe.dot_ratio = dot_ratio
  Describe.dot_per_second = dot_per_second
  Describe.dot_time = dot_time
  return Describe
}
// 烟雾弹当突击压制处理
function describe_grenade(ratio) { // 榴弹
  var Describe = {}
  Describe.name = 'grenade'
  Describe.ratio = ratio
  return Describe
}
function describe_snipe(ratio, time_init, time_interval, snipe_num, labels) { // 狙击：倍率、初始时间、瞄准间隔、狙击次数，特殊说明
  var Describe = {}
  Describe.name = 'snipe'
  Describe.ratio = ratio
  Describe.time_init = time_init
  Describe.time_interval = time_interval
  Describe.snipe_num = snipe_num
  Describe.labels = labels
  return Describe
}
function describe_dsr50(ratio_armless, ratio_arm, time_init, labels) { // 崩甲射击：倍率、初始时间、特殊说明
  var Describe = {}
  Describe.name = 'dsr50'
  Describe.ratio_armless = ratio_armless
  Describe.ratio_arm = ratio_arm
  Describe.time_init = time_init
  Describe.labels = labels
  return Describe
}
function describe_m82a1(ratio, time_init, time_interval, snipe_num, labels) { // 伪神的启示（跟狙击一样）
  var Describe = {}
  Describe.name = 'm82a1'
  Describe.ratio = ratio
  Describe.time_init = time_init
  Describe.time_interval = time_interval
  Describe.snipe_num = snipe_num
  Describe.labels = labels
  return Describe
}
function describe_falcon(ratio, time_init, time_interval, snipe_num, labels) { // 夕阳隼
  var Describe = {}
  Describe.name = 'falcon'
  Describe.ratio = ratio
  Describe.time_init = time_init
  Describe.time_interval = time_interval
  Describe.snipe_num = snipe_num
  Describe.labels = labels
  return Describe
}
function describe_carcano1891() {
  var Describe = {}
  Describe.name = 'carcano1891'
  return Describe
}
function describe_carcano9138() {
  var Describe = {}
  Describe.name = 'carcano9138'
  return Describe
}
function describe_hs2000() { // 反击者壁垒
  var Describe = {}
  Describe.name = 'hs2000'
  return Describe
}
function describe_k11() { // 恐惧榴弹
  var Describe = {}
  Describe.name = 'k11'
  return Describe
}
function describe_zas() { // 夜枭轰鸣
  var Describe = {}
  Describe.name = 'zas'
  return Describe
}
function describe_sop2() { // 狂乱马戏
  var Describe = {}
  Describe.name = 'sop2'
  return Describe
}
function describe_contender() { // 断罪者魔弹
  var Describe = {}
  Describe.name = 'contender'
  return Describe
}
function describe_python() { // 蟒蛇_主动
  var Describe = {}
  Describe.name = 'python'
  return Describe
}
function describe_aug() { // AUG
  var Describe = {}
  Describe.name = 'aug'
  return Describe
}
function describe_fal() { // FAL
  var Describe = {}
  Describe.name = 'fal'
  return Describe
}
function describe_g11() { // G11
  var Describe = {}
  Describe.name = 'g11'
  return Describe
}
function describe_k2() { // k2
  var Describe = {}
  Describe.name = 'k2'
  return Describe
}
function describe_multihit(multiple) { // an94、芭莉斯塔、GSh、VSK-94
  var Describe = {}
  Describe.name = 'multihit'
  Describe.value = multiple
  return Describe
}
function describe_mdr() { // mdr
  var Describe = {}
  Describe.name = 'mdr'
  return Describe
}
function describe_64howa() { // 64自
  var Describe = {}
  Describe.name = '64howa'
  return Describe
}
function describe_m4() { // 伸冤者印记
  var Describe = {}
  Describe.name = 'm4'
  return Describe
}
function describe_js9() { // 临阵磨枪
  var Describe = {}
  Describe.name = 'js9'
  return Describe
}
function describe_mat49() { // 临阵磨枪
  var Describe = {}
  Describe.name = 'mat49'
  return Describe
}
function describe_x95() { // 花之锁
  var Describe = {}
  Describe.name = 'x95'
  return Describe
}
function describe_p90() { // 灰鼠
  var Describe = {}
  Describe.name = 'p90'
  return Describe
}
function describe_theresa() { // 圣光制裁
  var Describe = {}
  Describe.name = 'theresa'
  return Describe
}
function describe_ump40() { // 烙印过载
  var Describe = {}
  Describe.name = 'ump40'
  return Describe
}
function describe_idw() { // 电光大狂欢
  var Describe = {}
  Describe.name = 'idw'
  return Describe
}
function describe_iws2000reset() {
  var Describe = {}
  Describe.name = 'iws2000reset'
  return Describe
}
function describe_addclip(clipsize) {
  var Describe = {}
  Describe.name = 'addclip'
  Describe.clipsize = clipsize
  return Describe
}
function describe_aimupto(aim_num) {
  var Describe = {}
  Describe.name = 'aimupto'
  Describe.aim = aim_num
  return Describe
}
function describe_mustcrit() {
  var Describe = {}
  Describe.name = 'mustcrit'
  return Describe
}
function describe_saiga() {
  var Describe = {}
  Describe.name = 'saiga'
  return Describe
}
function describe_falcon_getbullet() {
  var Describe = {}
  Describe.name = 'falcon_getbullet'
  return Describe
}
function describe_stechkin() {
  var Describe = {}
  Describe.name = 'stechkin'
  return Describe
}
function describe_ffshield(ff, ffmax, decline, decline_interval) {
  var Describe = {}
  Describe.name = 'ffshield'
  Describe.ff = ff
  Describe.ffmax = ffmax
  Describe.decline = decline
  Describe.decline = decline_interval
  return Describe
}
function describe_aks() {
  var Describe = {}
  Describe.name = 'aks'
  return Describe
}
function describe_flash(duration) {
  var Describe = {}
  Describe.name = 'flash'
  Describe.duration = duration
  return Describe
}
function describe_singleflash(duration) {
  var Describe = {}
  Describe.name = 'singleflash'
  Describe.duration = duration
  return Describe
}
function describe_shield(value, duration, label) {
  var Describe = {}
  Describe.name = 'shield'
  Describe.value = value
  Describe.duration = duration
  Describe.label = label
  return Describe
}
function describe_mg36() {
  var Describe = {}
  Describe.name = 'mg36'
  return Describe
}
function describe_chauchat() { // 百合纹章
  var Describe = {}
  Describe.name = 'chauchat'
  return Describe
}
function describe_r93() { // 强运扳机
  var Describe = {}
  Describe.name = 'r93'
  return Describe
}
function describe_jill() { // Jill
  var Describe = {}
  Describe.name = 'jill'
  return Describe
}
function describe_sei() { // Sei
  var Describe = {}
  Describe.name = 'sei'
  return Describe
}
function describe_dorothy() { // dorothy
  var Describe = {}
  Describe.name = 'dorothy'
  return Describe
}
function describe_alma() { // alma
  var Describe = {}
  Describe.name = 'alma'
  return Describe
}
function describe_ads() { // ads
  var Describe = {}
  Describe.name = 'ads'
  return Describe
}
function describe_de() { // desert eagle
  var Describe = {}
  Describe.name = 'de'
  return Describe
}
function describe_hk416fragile() { // hk416 mod passive
  var Describe = {}
  Describe.name = 'hk416_fragile'
  return Describe
}
function describe_mp5mod() { // mp5 mod
  var Describe = {}
  Describe.name = 'mp5mod'
  return Describe
}
function describe_ump9mod() { // ump9 mod
  var Describe = {}
  Describe.name = 'ump9mod'
  return Describe
}
function describe_hanyang88() { // hanyang88 mod
  var Describe = {}
  Describe.name = 'hanyang88'
  return Describe
}
function describe_m1895cb() { // m1895cb
  var Describe = {}
  Describe.name = 'm1895cb'
  return Describe
}
function describe_c96cs() { // m1895cb
  var Describe = {}
  Describe.name = 'c96cs'
  return Describe
}
function describe_sig556() { // SIG-556
  var Describe = {}
  Describe.name = 'sig556'
  return Describe
}
function describe_c93() { // c-93
  var Describe = {}
  Describe.name = 'c93'
  return Describe
}
function describe_89type() { // 89式
  var Describe = {}
  Describe.name = '89type'
  return Describe
}
function describe_stechkin_eva() { // 斯捷奇金 mod
  var Describe = {}
  Describe.name = 'stechkin_eva'
  return Describe
}
function describe_rpk16() { // RPK-16
  var Describe = {}
  Describe.name = 'rpk16'
  return Describe
}
function describe_sl8() { // SL8
  var Describe = {}
  Describe.name = 'sl8'
  return Describe
}
function describe_ak15() { // ak15
  var Describe = {}
  Describe.name = 'ak15'
  return Describe
}
function describe_webley() { // webley
  var Describe = {}
  Describe.name = 'webley'
  return Describe
}
function describe_ntwmod() { // ntw20-mod
  var Describe = {}
  Describe.name = 'ntwmod'
  return Describe
}
function describe_m950amod() { // m950a-mod
  var Describe = {}
  Describe.name = 'm950amod'
  return Describe
}
function describe_zb26() { // zb-26
  var Describe = {}
  Describe.name = 'zb26'
  return Describe
}
function describe_hp35() { // hp-35 active
  var Describe = {}
  Describe.name = 'hp35'
  return Describe
}
function describe_hp35_passive() { // hp-35 passive
  var Describe = {}
  Describe.name = 'hp35_passive'
  return Describe
}
function describe_akalfa() { // ak-alfa skill-on straight
  var Describe = {}
  Describe.name = 'akalfa'
  return Describe
}
function describe_cf05() { // cf05
  var Describe = {}
  Describe.name = 'cf05'
  return Describe
}
function describe_angelica() { // angelica
  var Describe = {}
  Describe.name = 'angelica'
  return Describe
}
function describe_henrietta_init() { // henrietta_init
  var Describe = {}
  Describe.name = 'henrietta_init'
  return Describe
}
function describe_henrietta_active() { // henrietta_active
  var Describe = {}
  Describe.name = 'henrietta_active'
  return Describe
}
function describe_claes() { // claes
  var Describe = {}
  Describe.name = 'claes'
  return Describe
}
function describe_vsk94buff() { // vsk-94
  var Describe = {}
  Describe.name = 'vsk94buff'
  return Describe
}

// lib_decribe
// universal
lib_describe.set('attack', describe_attack()) // 普通攻击，特殊，没有归属编号
lib_describe.set('mustcrit', describe_mustcrit()) // 必定暴击
// command
lib_describe.set('com_dmg_25', describe_property(['all'], ['dmg'], ['0.25'])) // 火力号令 25%
lib_describe.set('com_dmg_22', describe_property(['all'], ['dmg'], ['0.22'])) // 火力号令 22%
lib_describe.set('com_dmg_20', describe_property(['all'], ['dmg'], ['0.2'])) // 火力号令 20%
lib_describe.set('com_dmg_18', describe_property(['all'], ['dmg'], ['0.18'])) // 火力号令 18%
lib_describe.set('com_dmgN_35', describe_propertyN(['all'], ['dmg'], ['0.35'])) // 火力号令N 35%
lib_describe.set('com_dmgND_20', describe_propertyND(['all'], ['dmg'], ['0.2'])) // 火力号令ND 20%
lib_describe.set('com_rof_28', describe_property(['all'], ['rof'], ['0.28'])) // 突击号令 28%
lib_describe.set('com_rof_25', describe_property(['all'], ['rof'], ['0.25'])) // 突击号令 25%
lib_describe.set('com_rof_22', describe_property(['all'], ['rof'], ['0.22'])) // 突击号令 22%
lib_describe.set('com_rof_20', describe_property(['all'], ['rof'], ['0.20'])) // 突击号令 20%
lib_describe.set('com_acu_100', describe_property(['all'], ['acu'], ['1'])) // 精确号令 100%
lib_describe.set('com_eva_60', describe_property(['all'], ['eva'], ['0.6'])) // 掩护号令 60%
lib_describe.set('com_eva_55', describe_property(['all'], ['eva'], ['0.55'])) // 掩护号令 55%
lib_describe.set('com_evaN_85', describe_propertyN(['all'], ['eva'], ['0.85'])) // 掩护号令N 85%
lib_describe.set('com_evaND_35', describe_propertyND(['all'], ['eva'], ['0.35'])) // 掩护号令ND 35%
lib_describe.set('com_acuN_90', describe_propertyN(['all'], ['acu'], ['0.9'])) // 照明弹 90%
lib_describe.set('com_acuN_100', describe_propertyN(['all'], ['acu'], ['1'])) // 照明弹 100%
lib_describe.set('com_acuN_120', describe_propertyN(['all'], ['acu'], ['1.2'])) // 照明弹 120%
lib_describe.set('com_critdmgN_20', describe_propertyN(['all'], ['critdmg'], ['0.2'])) // 夜空追击者：暴伤20%
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit'], ['0.2/0.2'])) // 穿刺号令 20%/20%
lib_describe.set('com_dmgrof_3', describe_property(['all'], ['dmg/rof'], ['0.1/0.1'])) // 冲锋号令-3星 10%/10%
lib_describe.set('com_dmgacu_3', describe_property(['all'], ['dmg/acu'], ['0.15/0.1'])) // 强袭号令-3星 15%/10%
lib_describe.set('com_acueva_3', describe_property(['all'], ['acu/eva'], ['0.55/0.28'])) // 隐秘号令-3星 55%/28%
lib_describe.set('com_dmgcrit_2', describe_property(['all'], ['dmg/crit'], ['0.1/0.35'])) // 歼灭号令-2星 10%/35%
lib_describe.set('colt', describe_colt()) // 决斗幸存者
lib_describe.set('python_dmg', describe_property(['bloall'], ['dmg'], ['0.06'])) // 蟒蛇：各种复读
lib_describe.set('python_rof', describe_property(['bloall'], ['rof'], ['0.06']))
lib_describe.set('python_acu', describe_property(['bloall'], ['acu'], ['0.3']))
lib_describe.set('python_eva', describe_property(['bloall'], ['eva'], ['0.3']))
lib_describe.set('python_crit', describe_property(['bloall'], ['crit'], ['0.12']))
lib_describe.set('mp446', describe_property(['bloall'], ['rof'], ['0.2'])) // 潮音突袭
lib_describe.set('px4', describe_property(['bloall'], ['crit/critdmg'], ['-0.2/0.5'])) // 狩猎筹码
lib_describe.set('jericho', describe_property(['bloall'], ['dmg'], ['0.15'])) // 深红月蚀：主动
lib_describe.set('k5', describe_property(
  ['blohg', 'blosmg', 'bloar', 'blorf', 'blomg', 'blosg'],
  ['eva', 'eva', 'dmg', 'dmg', 'acu', 'acu'],
  ['0.4', '0.4', '0.22', '0.22', '0.8', '0.8'])) // k5_战地哲学馆
lib_describe.set('p22', describe_property(
  ['col1', 'col2'],
  ['dmg', 'acu/eva'],
  ['0.25', '0.6/0.6'])) // p22_决战序列_1/2列
lib_describe.set('lbll', describe_property(['bloall'], ['dmg/rof/acu'], ['0.25/0.25/0.25'])) // 猩红回响
lib_describe.set('g36_eva', describe_property(['bloall'], ['eva'], ['0.25'])) // 弧光契约闪避
// debuff command
lib_describe.set('dmg_25_enemy', describe_property(['enemy'], ['dmg'], ['-0.25'])) // 火力压制 25%
lib_describe.set('dmg_20_enemy', describe_property(['enemy'], ['dmg'], ['-0.2'])) // 暗夜绞杀曲debuff 20%
lib_describe.set('dmgN_40_enemy', describe_propertyN(['enemy'], ['dmg'], ['-0.4'])) // 火力压制N 40%
lib_describe.set('dmgN_35_enemy', describe_propertyN(['enemy'], ['dmg'], ['-0.35'])) // 火力压制N 35%
lib_describe.set('dmgND_25_enemy', describe_propertyND(['enemy'], ['dmg'], ['-0.25'])) // 火力压制ND 25%
lib_describe.set('dmgND_22_enemy', describe_propertyND(['enemy'], ['dmg'], ['-0.22'])) // 火力压制ND 22%
lib_describe.set('dmgND_20_enemy', describe_propertyND(['enemy'], ['dmg'], ['-0.2'])) // 火力压制ND 20%
lib_describe.set('rof_40_enemy', describe_property(['enemy'], ['rof'], ['-0.4'])) // 烟雾弹 40%
lib_describe.set('rof_36_enemy', describe_property(['enemy'], ['rof'], ['-0.36'])) // 烟雾弹 36%
lib_describe.set('rof_30_enemy', describe_property(['enemy'], ['rof'], ['-0.3'])) // 突击压制 30%
lib_describe.set('rof_28_enemy', describe_property(['enemy'], ['rof'], ['-0.28'])) // 突击压制 28%
lib_describe.set('rof_25_enemy', describe_property(['enemy'], ['rof'], ['-0.25'])) // 突击压制 25%
lib_describe.set('rof_22_enemy', describe_property(['enemy'], ['rof'], ['-0.22'])) // 突击压制 22%
lib_describe.set('eva_55_enemy', describe_property(['enemy'], ['eva'], ['-0.55'])) // 掩护压制 55%
lib_describe.set('eva_50_enemy', describe_property(['enemy'], ['eva'], ['-0.5'])) // 掩护压制 50%
lib_describe.set('eva_46_enemy', describe_property(['enemy'], ['eva'], ['-0.46'])) // 掩护压制 46%
lib_describe.set('eva_40_enemy', describe_property(['enemy'], ['eva'], ['-0.4'])) // 掩护压制 40%
lib_describe.set('evaN_75_enemy', describe_propertyN(['enemy'], ['eva'], ['-0.75'])) // 掩护压制N 75%
lib_describe.set('evaND_40_enemy', describe_propertyND(['enemy'], ['eva'], ['-0.4'])) // 掩护压制ND 40%
lib_describe.set('acu_45_enemy', describe_property(['enemy'], ['acu'], ['-0.45'])) // 精确压制 45%
lib_describe.set('acu_36_enemy', describe_property(['enemy'], ['acu'], ['-0.36'])) // 精确压制 36%
lib_describe.set('speed_down', describe_property(['enemy'], ['speed'], ['-0'])) // 降低移动速度
// forcus
lib_describe.set('dmg_260', describe_property(['self'], ['dmg'], ['2.6'])) // 火力专注 260%
lib_describe.set('dmgeva_16040', describe_property(['self'], ['dmg/eva'], ['1.6/0.4'])) // 机动专注 160%/40%
lib_describe.set('dmgeva_15040', describe_property(['self'], ['dmg/eva'], ['1.5/0.4'])) // 机动专注 150%/40%
lib_describe.set('dmg_120', describe_property(['self'], ['dmg'], ['1.2'])) // 火力专注 120%
lib_describe.set('type100', describe_property(['self'], ['dmg'], ['0.85'])) // 火力专注 85%
lib_describe.set('dmg_80', describe_property(['self'], ['dmg'], ['0.8'])) // 木偶把戏 80%
lib_describe.set('dmg_75', describe_property(['self'], ['dmg'], ['0.75'])) // 火力专注 75%
lib_describe.set('dmg_705', describe_property(['self'], ['dmg'], ['0.705'])) // 对称性调节 70.5%
lib_describe.set('dmg_70', describe_property(['self'], ['dmg'], ['0.7'])) // 火力专注 70%
lib_describe.set('dmg_65', describe_property(['self'], ['dmg'], ['0.65'])) // 火力专注 65%
lib_describe.set('dmg_60', describe_property(['self'], ['dmg'], ['0.6'])) // 火力专注 60%
lib_describe.set('dmg_55', describe_property(['self'], ['dmg'], ['0.55'])) // 火力专注 55%
lib_describe.set('dmg_50', describe_property(['self'], ['dmg'], ['0.5'])) // 火力专注 50%
lib_describe.set('dmg_-50', describe_property(['self'], ['dmg'], ['-0.5'])) // 火力降低 -50%
lib_describe.set('dmg_40', describe_property(['self'], ['dmg'], ['0.4'])) // 火力专注 40%
lib_describe.set('dmg_35', describe_property(['self'], ['dmg'], ['0.35'])) // 火力专注 35%
lib_describe.set('dmg_30', describe_property(['self'], ['dmg'], ['0.3'])) // 火力专注 30%
lib_describe.set('dmg_28', describe_property(['self'], ['dmg'], ['0.28'])) // 火力专注 28%
lib_describe.set('dmg_25', describe_property(['self'], ['dmg'], ['0.25'])) // 短板敲击乐 25%
lib_describe.set('dmg_10', describe_property(['self'], ['dmg'], ['0.1'])) // 威慑印记
lib_describe.set('dmgN_200', describe_propertyN(['self'], ['dmg'], ['2'])) // 火力专注N 200%
lib_describe.set('dmgN_180', describe_propertyN(['self'], ['dmg'], ['1.8'])) // 火力专注N 180%
lib_describe.set('dmgN_105', describe_propertyN(['self'], ['dmg'], ['1.05'])) // 火力专注N 105%
lib_describe.set('dmgN_100', describe_propertyN(['self'], ['dmg'], ['1'])) // 火力专注N 100%
lib_describe.set('dmgN_90', describe_propertyN(['self'], ['dmg'], ['0.9'])) // 火力专注N 90%
lib_describe.set('dmgN_85', describe_propertyN(['self'], ['dmg'], ['0.85'])) // 火力专注N 85%
lib_describe.set('dmgN_50', describe_propertyN(['self'], ['dmg'], ['0.5'])) // 火力专注N 50%
lib_describe.set('dmgN_45', describe_propertyN(['self'], ['dmg'], ['0.45'])) // 火力专注N 45%
lib_describe.set('dmgN_40', describe_propertyN(['self'], ['dmg'], ['0.4'])) // 火力专注N 40%
lib_describe.set('dmgND_70', describe_propertyND(['self'], ['dmg'], ['0.7'])) // 火力专注ND 70%
lib_describe.set('dmgND_60', describe_propertyND(['self'], ['dmg'], ['0.6'])) // 火力专注ND 60%
lib_describe.set('dmgND_35', describe_propertyND(['self'], ['dmg'], ['0.35'])) // 火力专注ND 35%
lib_describe.set('dmgND_30', describe_propertyND(['self'], ['dmg'], ['0.3'])) // 火力专注ND 30%
lib_describe.set('dmgND_11', describe_propertyND(['self'], ['dmg'], ['0.11'])) // 火力专注ND 11%
lib_describe.set('dmgND_10', describe_propertyND(['self'], ['dmg'], ['0.1'])) // 火力专注ND 10%
lib_describe.set('rof_80', describe_property(['self'], ['rof'], ['0.8'])) // 酮血症 80%
lib_describe.set('rof_75', describe_property(['self'], ['rof'], ['0.75'])) // 突击专注 75%
lib_describe.set('rof_65', describe_property(['self'], ['rof'], ['0.65'])) // 突击专注 65%
lib_describe.set('rof_60', describe_property(['self'], ['rof'], ['0.6'])) // 突击专注 60%
lib_describe.set('rof_55', describe_property(['self'], ['rof'], ['0.55'])) // 突击专注 55%
lib_describe.set('rof_50', describe_property(['self'], ['rof'], ['0.5'])) // 突击专注 50%
lib_describe.set('rof_45', describe_property(['self'], ['rof'], ['0.45'])) // 突击专注 45%
lib_describe.set('rof_40', describe_property(['self'], ['rof'], ['0.4'])) // 突击专注 40%
lib_describe.set('rof_25', describe_property(['self'], ['rof'], ['0.25'])) // 自我气焰 25%
lib_describe.set('mp7_rof', describe_property(['self'], ['rof'], ['-0.2'])) // 弦月舞者 -20%
lib_describe.set('rofN_100', describe_propertyN(['self'], ['rof'], ['1'])) // 突击专注N 100%
lib_describe.set('rofND_32', describe_propertyND(['self'], ['rof'], ['0.32'])) // 突击专注ND 32%
lib_describe.set('rofN_90', describe_propertyN(['self'], ['rof'], ['0.9'])) // 突击专注N 90%
lib_describe.set('rofND_30', describe_propertyND(['self'], ['rof'], ['0.3'])) // 突击专注ND 30%
lib_describe.set('rofN_85', describe_propertyN(['self'], ['rof'], ['0.85'])) // 突击专注N 85%
lib_describe.set('rofND_28', describe_propertyND(['self'], ['rof'], ['0.28'])) // 突击专注ND 28%
lib_describe.set('rof_15', describe_property(['self'], ['rof'], ['0.15'])) // 凛冽斗志 15%
lib_describe.set('acu_500', describe_property(['self'], ['acu'], ['5'])) // 精确专注 500%
lib_describe.set('acu_70', describe_property(['self'], ['acu'], ['0.7'])) // 猎杀冲动 70%
lib_describe.set('acu_65', describe_property(['self'], ['acu'], ['0.65'])) // 猎杀冲动 65%
lib_describe.set('acu_60', describe_property(['self'], ['acu'], ['0.6'])) // 猎杀冲动 60%
lib_describe.set('acuN_80', describe_propertyN(['self'], ['acu'], ['0.8'])) // 白夜独奏曲N 80%
lib_describe.set('acuND_40', describe_propertyND(['self'], ['acu'], ['0.4'])) // 白夜独奏曲ND 40%
lib_describe.set('acuN_70', describe_propertyN(['self'], ['acu'], ['0.7'])) // 猎杀冲动N 70%
lib_describe.set('acuND_20', describe_propertyND(['self'], ['acu'], ['0.2'])) // 猎杀冲动ND 20%
lib_describe.set('eva_180', describe_property(['self'], ['eva'], ['1.8'])) // 弦月舞者 180%
lib_describe.set('eva_150', describe_property(['self'], ['eva'], ['1.5'])) // 掩护专注 150%
lib_describe.set('eva_130', describe_property(['self'], ['eva'], ['1.3'])) // 掩护专注 130%
lib_describe.set('eva_120', describe_property(['self'], ['eva'], ['1.2'])) // 掩护专注 120%
lib_describe.set('eva_110', describe_property(['self'], ['eva'], ['1.1'])) // 掩护专注 110%
lib_describe.set('eva_70', describe_property(['self'], ['eva'], ['0.7'])) // 心智威慑 70%
lib_describe.set('eva_60', describe_property(['self'], ['eva'], ['0.6'])) // D-守护 60%
lib_describe.set('eva_45', describe_property(['self'], ['eva'], ['0.45'])) // 掩护专注 45%
lib_describe.set('eva_40', describe_property(['self'], ['eva'], ['0.4'])) // 掩护专注 40%
lib_describe.set('critdmg_20', describe_property(['self'], ['critdmg'], ['0.2'])) // 暴击伤害 20%
lib_describe.set('crit_100', describe_property(['self'], ['crit'], ['1'])) // 短板敲击乐 暴击100%
lib_describe.set('cz2000_N', describe_propertyN(['self'], ['acu/rof'], ['0.4/0.5'])) // 黎明气焰-N
lib_describe.set('cz2000_ND', describe_propertyND(['self'], ['dmg/crit'], ['0.65/0.25'])) // 黎明气焰-ND
lib_describe.set('a91_N', describe_propertyN(['self'], ['dmg/acu'], ['0.5/0.5'])) // A91杀伤榴弹N-属性加成
lib_describe.set('iws2000', describe_property(['self'], ['dmg/rof'], ['1.8/-0.35'])) // 巨鹰攻势
lib_describe.set('t5000', describe_property(['self'], ['rof/acu'], ['0.5/0.5'])) // 锁定专注 50%
lib_describe.set('obr', describe_property(['self'], ['rof/acu'], ['0.45/0.45'])) // 锁定专注 45%
lib_describe.set('modelL', describe_property(['self'], ['rof/acu'], ['0.4/0.9'])) // 锁定专注 40/90%
lib_describe.set('k31', describe_property(['self'], ['rof/acu'], ['0.8/-0.35'])) // 紧急流速
lib_describe.set('sv98', describe_property(['self'], ['rof/acu'], ['0.08/0.08'])) // 阴影解救者
lib_describe.set('mk12', describe_property(['self'], ['rof/critdmg'], ['0.3/0.3'])) // 愤怒灵感
lib_describe.set('critdmg_10', describe_property(['self'], ['critdmg'], ['0.1'])) // 明澈斗志 10%
lib_describe.set('art556', describe_property(['self'], ['dmg/rof'], ['0.85/0.25'])) // 冲锋专注 85%/25%
lib_describe.set('tar21', describe_property(['self'], ['dmg/rof'], ['0.75/0.25'])) // 冲锋专注 75%/25%
lib_describe.set('magal', describe_property(['self'], ['dmg/rof'], ['0.5/0.2'])) // 冲锋专注 50%/20%
lib_describe.set('l85a1', describe_property(['self'], ['dmg/rof'], ['0.35/0.15'])) // 冲锋专注 35%/15%
lib_describe.set('t91N', describe_propertyN(['self'], ['dmg/crit'], ['1.2/0.5'])) // 歼灭专注N 120%/50%
lib_describe.set('t91ND', describe_propertyND(['self'], ['dmg/crit'], ['0.5/0.25'])) // 歼灭专注ND 50%/25%
lib_describe.set('t65N', describe_propertyN(['self'], ['dmg/crit'], ['1/0.4'])) // 歼灭专注N 100%/40%
lib_describe.set('t65ND', describe_propertyND(['self'], ['dmg/crit'], ['0.45/0.22'])) // 歼灭专注ND 45%/22%
lib_describe.set('dmgcrit_3', describe_property(['self'], ['dmg/crit'], ['0.5/0.5'])) // 歼灭专注 50%/50%
lib_describe.set('dmgacu_3', describe_property(['self'], ['dmg/acu'], ['0.35/1'])) // 强袭专注 35%/100%
lib_describe.set('mk46', describe_property(['self'], ['dmg/acu'], ['0.5/0.7'])) // 强袭专注MG 50%/70%
lib_describe.set('62type', describe_property(['self'], ['dmg/acu'], ['0.45/0.65'])) // 强袭专注MG 45%/65%
lib_describe.set('hk21', describe_property(['self'], ['dmg/acu'], ['0.4/0.3'])) // 无差别崩坏
lib_describe.set('rfb', describe_property(['self'], ['dmg/acu'], ['0.8/0.4'])) // 至高枪弹
lib_describe.set('ak12', describe_property(['self'], ['dmg/rof/acu/crit'], ['0.35/0.35/0.35/0.35'])) // 雪狼之眼
lib_describe.set('srs', describe_property(['self'], ['dmg/acu'], ['0.6/0.4'])) // 狩猎示范
lib_describe.set('evaacu_4', describe_property(['self'], ['eva/acu'], ['0.8/0.5'])) // 隐秘专注-4星
lib_describe.set('pm06N', describe_propertyN(['self'], ['eva/acu'], ['1.5/0.8'])) // 隐秘专注N
lib_describe.set('pm06ND', describe_propertyND(['self'], ['eva/acu'], ['0.5/0.4'])) // 隐秘专注ND
lib_describe.set('arm_70', describe_property(['self'], ['arm'], ['0.7'])) // 防护专注-4星
lib_describe.set('arm_60', describe_property(['self'], ['arm'], ['0.6'])) // 防护专注-3星
lib_describe.set('armeva_5', describe_property(['self'], ['arm/eva'], ['0.6/0.6'])) // 生存本能-5星
lib_describe.set('armeva_4', describe_property(['self'], ['arm/eva'], ['0.5/0.55'])) // 生存本能-4星
lib_describe.set('m1014', describe_property(['self'], ['dmg/arm'], ['0.5/0.3'])) // 应激性暗示
lib_describe.set('pm9_buff', describe_property(['self'], ['eva/dmg/acu'], ['1/-0.3/-0.3'])) // 幻重暗劲-闪避+100%，火力命中-30%
lib_describe.set('sacr', describe_property(['self'], ['rof/speed/eva/dmg/acu/critdmg'], ['-0.2/-0.3/-0.3/0.35/0.6/0.5'])) // 曙光狂欢颂
// forcefield
lib_describe.set('ffs', describe_ffshield(9999, 9999, 0, 0)) // 力场盾
lib_describe.set('m870', describe_ffshield(1000, 1000, 100, 1)) // 地狱公路
lib_describe.set('ffs_d_protect', describe_ffshield(9999, 9999, 0, 0)) // D-守护 力场效果
// shield
lib_describe.set('sat8', describe_shield(35, 5, 'col1')) // 坚壁理论
lib_describe.set('sei', describe_sei()) // 白骑士之盾
// flash
lib_describe.set('flash_5', describe_flash(4.5)) // 闪光弹-5星
lib_describe.set('flash_4', describe_flash(4)) // 闪光弹-4星
lib_describe.set('flash_3', describe_flash(3.2)) // 闪光弹-3星
lib_describe.set('pa15_single', describe_singleflash(3)) // 劲爆乐园-单体3秒眩晕
lib_describe.set('pa15_aoe', describe_flash(2)) // 劲爆乐园-群体2秒眩晕
// clip and aim
lib_describe.set('addclip_10', describe_addclip(10)) // 弹量+10
lib_describe.set('addclip_4', describe_addclip(4)) // 弹量+4
lib_describe.set('addclip_3', describe_addclip(3)) // 弹量+3
lib_describe.set('addclip_2', describe_addclip(2)) // 弹量+2
lib_describe.set('addclip_dynamic', describe_addclip(-1)) // 动态判断弹量
lib_describe.set('aimupto_3', describe_aimupto(3)) // 攻击目标增至3
lib_describe.set('aimupto_5', describe_aimupto(5)) // 攻击目标增至5
// bomb
lib_describe.set('incendiary_7', describe_bomb(7, 1, 3, 5)) // 燃烧弹-5星
lib_describe.set('incendiary_6.5', describe_bomb(6.5, 1, 3, 5)) // 燃烧弹-4星
lib_describe.set('incendiary_6', describe_bomb(6, 1, 3, 5)) // 燃烧弹-3星
lib_describe.set('incendiary_5.5', describe_bomb(5.5, 1, 3, 5)) // 燃烧弹-2星
lib_describe.set('beretta_inc', describe_bomb(2.8, 0.6, 3, 4)) // 绯焰追击
lib_describe.set('hk416_dot', describe_bomb(16, 0.6, 3, 3)) // 寄生榴弹-持续伤害
lib_describe.set('bronya', describe_bomb(0.2, 0.2, 1, 5)) // 黑洞触媒
lib_describe.set('hand_grenade_6.5', describe_bomb(6.5, 0, 0, 0)) // 手榴弹-4星
lib_describe.set('hand_grenade_6', describe_bomb(6, 0, 0, 0)) // 手榴弹-3星
lib_describe.set('hand_grenade_5.5', describe_bomb(5.5, 0, 0, 0)) // 手榴弹-2星
lib_describe.set('hand_grenade_3', describe_bomb(3, 0, 0, 0)) // 震荡烈轰
lib_describe.set('fp6_dmg', describe_bomb(0.8, 0, 0, 0)) // 失乐园
lib_describe.set('uzi_burn', describe_bomb(6.5, 1, 3, 5)) // 灼烧链接
// grenade
lib_describe.set('grenade_90', describe_grenade(90)) // 厌世者打击
lib_describe.set('grenade_19.5', describe_grenade(19.5)) // 16+3.5倍榴弹
lib_describe.set('grenade_15', describe_grenade(15)) // 15倍榴弹
lib_describe.set('grenade_12', describe_grenade(12)) // 12倍榴弹
lib_describe.set('grenade_11', describe_grenade(11)) // 11倍榴弹
lib_describe.set('grenade_10', describe_grenade(10)) // 10倍榴弹
lib_describe.set('grenade_9.6', describe_grenade(9.6)) // 9.6倍榴弹
lib_describe.set('grenade_8', describe_grenade(8)) // 8倍榴弹
lib_describe.set('grenade_5', describe_grenade(5)) // 5倍榴弹
lib_describe.set('grenade_4.5', describe_grenade(4.5)) // 4.5倍榴弹
lib_describe.set('kiana', describe_grenade(-1)) // 阿斯加德之怒，-1表示倍率特殊单独判断
lib_describe.set('dana', describe_grenade(-1)) // 红色间歇泉，-1表示倍率特殊单独判断
lib_describe.set('zas', describe_zas()) // 夜枭轰鸣
lib_describe.set('k11', describe_k11()) // 恐惧榴弹
lib_describe.set('sop2', describe_sop2()) // 狂乱马戏
// snipe
lib_describe.set('kar98k', describe_snipe(3.5, 1, 1, 2, 'armless/critless/evaless')) // 锁链射击
lib_describe.set('snipe_10', describe_snipe(10, 2, 0, 1, 'armless/critless/evaless')) // 10倍炮狙
lib_describe.set('snipe_10_1.5', describe_snipe(10, 2, 0, 1, 'armless/critless/evaless')) // 10倍炮狙，1.5瞄准
lib_describe.set('snipe_8', describe_snipe(8, 2, 0, 1, 'armless/critless/evaless')) // 8倍炮狙
lib_describe.set('snipe_7', describe_snipe(7, 2, 0, 1, 'armless/critless/evaless')) // 7倍炮狙
lib_describe.set('snipe_6.5', describe_snipe(6.5, 1, 0, 1, 'armless/critless/evaless')) // 6.5倍炮狙
lib_describe.set('snipe_6.5_2', describe_snipe(6.5, 2, 0, 1, 'armless/critless/evaless')) // 6.5倍炮狙，2秒瞄准
lib_describe.set('snipe_7.08', describe_snipe(7.08, 1.5, 0, 1, 'armless/critless/evaless')) // 7.08倍炮狙，sv-98 mod狙击近似化处理
lib_describe.set('snipe_6', describe_snipe(6, 1.5, 0, 1, 'armless/critless/evaless')) // 6倍炮狙
lib_describe.set('snipe_5.5', describe_snipe(5.5, 1.5, 0, 1, 'armless/critless/evaless')) // 5.5倍炮狙
lib_describe.set('snipe_5', describe_snipe(5, 1.5, 0, 1, 'armless/critless/evaless')) // 5倍炮狙
lib_describe.set('snipe_4', describe_snipe(4, 1.5, 0, 1, 'armless/critless/evaless')) // 4倍炮狙：震荡冲击弹
lib_describe.set('snipe_3', describe_snipe(3, 1, 0, 1, 'armless/critless/evaless')) // 3倍炮狙
lib_describe.set('rico_snipe', describe_snipe(3, 0, 0, 1, 'armless/crit/evaless')) // 提希丰之塔
lib_describe.set('dsr50', describe_dsr50(6, 10, 2, 'armless/critless/evaless')) // 崩甲射击
lib_describe.set('js05', describe_snipe(2, 2, 0, 1, 'armless/critless/evaless')) // 贯通射击2倍，目标数特殊变量设定
lib_describe.set('pzb39', describe_snipe(1.8, 2, 0, 1, 'armless/critless/evaless')) // 贯通射击1.8倍
lib_describe.set('tac50', describe_snipe(4.5, 1, 0, 1, 'armless/crit/evaless')) // 枫华萤火
lib_describe.set('carcano1891', describe_carcano1891()) // 玛尔斯号角
lib_describe.set('carcano9138', describe_carcano9138()) // 墨尔斯假面
lib_describe.set('iws2000_reset', describe_iws2000reset()) // 巨鹰攻势重置普攻
lib_describe.set('m82a1', describe_m82a1(4.2, 1, 0, 1, 'armless/critless/evaless')) // 伪神的启示
lib_describe.set('falcon', describe_falcon(2.5, 1.33, 0, 1, 'armless/crit/evaless')) // 夕阳隼
lib_describe.set('falcon_getbullet', describe_falcon_getbullet()) // 夕阳隼，特殊弹装填
lib_describe.set('m200', describe_snipe(2, 1.5, 1.5, -1, 'arm/crit/evaless')) // 无言杀意，狙击数=-1表示动态
lib_describe.set('ssg3000', describe_snipe(1.8, 1.5, 1.5, -1, 'arm/crit/evaless')) // 沉默猎手，狙击数=-1表示动态
lib_describe.set('cz75', describe_snipe(10, 2, 0, 1, 'armless/critless/evaless')) // 观测者直击
lib_describe.set('thunder', describe_snipe(-1, 1, 2, 2, 'armless/critless/eva')) // 临界点射击，倍率-1表示要分别判断
lib_describe.set('noel', describe_snipe(1.2, 0, 0.1, 8, 'armless/critless/evaless')) // 诺艾尔技能
lib_describe.set('clear', describe_snipe(0, 0, 1, 5, 'armless/critless/evaless')) // 克莉尔技能
lib_describe.set('m1887', describe_snipe(-1, 1, 0, 1, 'armless/critless/evaless')) // 终结打击，倍率=-1表示动态
lib_describe.set('sg_shock', describe_snipe(-1, 0, 0, 1, 'armless/critless/evaless')) // 震荡打击
lib_describe.set('pa15', describe_snipe(4, 0, 0, 1, 'arm/crit/evaless')) // 劲爆乐园
lib_describe.set('qbu88', describe_snipe(5, 1.5, 0, 1, 'armless/critless/evaless')) // 乱石崩云，AOE单独判断
lib_describe.set('em2', describe_snipe(3.5, 0, -1, 3, 'arm/crit/evaless')) // 碎碎曲奇弹
// special
lib_describe.set('js9', describe_js9()) // 临阵磨枪
lib_describe.set('mat49', describe_mat49()) // 临阵磨枪
lib_describe.set('x95', describe_x95()) // 花之锁
lib_describe.set('p90', describe_p90()) // 灰鼠
lib_describe.set('ump40', describe_ump40()) // 烙印过载
lib_describe.set('idw', describe_idw()) // 电光大狂欢
lib_describe.set('m1911', describe_m1911()) // 绝境神枪手
lib_describe.set('python', describe_python()) // 无畏者之拥
lib_describe.set('contender', describe_contender()) // 断罪者魔弹
lib_describe.set('hs2000', describe_hs2000()) // 反击者壁垒
lib_describe.set('theresa', describe_theresa()) // 圣光制裁
lib_describe.set('stechkin', describe_stechkin()) // 斯捷奇金专属增强
lib_describe.set('stechkin_reduce_eva', describe_stechkin_eva()) // 短板敲击乐
lib_describe.set('an94', describe_multihit(2)) // 人偶扳机
lib_describe.set('blst', describe_multihit(2)) // 猎鹰刑场
lib_describe.set('gsh18', describe_multihit(2)) // 锁链冲击
lib_describe.set('vsk94', describe_multihit(2)) // 二重警备
lib_describe.set('pm9', describe_multihit(2)) // 幻重暗劲
lib_describe.set('aug', describe_aug()) // 葬仪之雨
lib_describe.set('fal', describe_fal()) // 榴弹践踏
lib_describe.set('g11', describe_g11()) // 突击者之眼
lib_describe.set('k2', describe_k2()) // 热力过载
lib_describe.set('mdr', describe_mdr()) // 危机嗅探器
lib_describe.set('64howa', describe_64howa()) // 未来预警
lib_describe.set('m4', describe_m4()) // 伸冤者印记
lib_describe.set('saiga', describe_saiga()) // 巨羚号角
lib_describe.set('mg36', describe_mg36()) // 光影帷幕
lib_describe.set('chauchat', describe_chauchat()) // 百合纹章
lib_describe.set('r93', describe_r93()) // 强运扳机
lib_describe.set('aks', describe_aks()) // 排斥反应
lib_describe.set('jill', describe_jill()) // 调酒时间
lib_describe.set('dorothy', describe_dorothy()) // 私密改造
lib_describe.set('stella_attack', describe_multihit(2)) // stella特殊攻击
lib_describe.set('alma', describe_alma()) // alma技能
lib_describe.set('ads', describe_ads()) // 风暴潮
lib_describe.set('de', describe_de()) // 威慑印记
lib_describe.set('hk416_fragile', describe_hk416fragile()) // 寄生榴弹脆弱
lib_describe.set('mp5mod', describe_mp5mod()) // 立场防御
lib_describe.set('ump9mod', describe_ump9mod()) // 白鸮轰鸣
lib_describe.set('hanyang88', describe_hanyang88()) // 全能战术
lib_describe.set('m1895cb', describe_m1895cb()) // 有备无患
lib_describe.set('c96cs', describe_c96cs()) // 夜空追击者：弹量
lib_describe.set('SIG-556', describe_sig556()) // 战场弄潮儿
lib_describe.set('c93', describe_c93()) // 兰蝶遗音
lib_describe.set('89type', describe_89type()) // 89式技能
lib_describe.set('rpk16', describe_rpk16()) // 银狐的狡黠
lib_describe.set('sl8', describe_sl8()) // 遥光海波
lib_describe.set('ak15', describe_ak15()) // 白獒之瞳
lib_describe.set('cf05', describe_cf05()) // 牛油晶冻
lib_describe.set('webley', describe_webley()) // webley
lib_describe.set('ntwmod', describe_ntwmod()) // 狂猎燃魂+连锁反应
lib_describe.set('m950amod', describe_m950amod()) // 灵魂LIVE
lib_describe.set('zb26', describe_zb26()) // 完美连锁
lib_describe.set('hp35', describe_hp35()) // 暴走伴奏
lib_describe.set('hp35_passive', describe_hp35_passive()) // 暴走伴奏-被动
lib_describe.set('akalfa', describe_akalfa()) // 耀变体
lib_describe.set('henrietta_init', describe_henrietta_init()) // 月轮守护人-初始护盾
lib_describe.set('henrietta_active', describe_henrietta_active()) // 月轮守护人-主动
lib_describe.set('claes', describe_claes()) // 沉思者之钥
lib_describe.set('angelica', describe_angelica()) // 极限射击
lib_describe.set('vsk94buff', describe_vsk94buff()) // 二重警备-属性转换


// lib_skill

// ———————————————————————————————————————— HG ————————————————————————————————————————
// ———————————————————————————————————————— HG - 5 ————————————————————————————————————————
lib_skill.set(1097, [
  createSkill(6, 12, 8, lib_describe.get('com_rof_28')),
  createSkill(0, -1, 0, lib_describe.get('m950amod'))
])
// ———————————————————————————————————————— HG - 5 ————————————————————————————————————————
lib_skill.set(4, [createSkill(6, 12, 5, lib_describe.get('python'))]) // 被动通过特殊变量实现
lib_skill.set(96, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])
lib_skill.set(97, [createSkill(6, 12, 8, lib_describe.get('com_rof_25'))])
lib_skill.set(114, [createSkill(6, 12, 6, lib_describe.get('acu_45_enemy'))])
lib_skill.set(126, [createSkill(6, 12, 8, lib_describe.get('rof_30_enemy'))]) // 突击压制
lib_skill.set(142, [createSkill(6, 12, 8, lib_describe.get('com_rofcrit_5'))])
lib_skill.set(166, [createSkill(6, 12, 0, lib_describe.get('cz75'))])
lib_skill.set(183, [createSkill(6, 12, 0, lib_describe.get('contender'))])
lib_skill.set(233, [createSkill(6, 12, 8, lib_describe.get('px4'))])
lib_skill.set(242, [createSkill(6, 12, 8, lib_describe.get('p22'))])
lib_skill.set(250, [createSkill(6, 12, 6, lib_describe.get('hs2000'))]) // 延时机制特殊判断
lib_skill.set(260, [
  createSkill(6, 12, 0, lib_describe.get('pa15')),
  createSkill(6, 12, 0, lib_describe.get('pa15_single')),
  createSkill(6, 12, 0, lib_describe.get('pa15_aoe'))
]) // AOE特殊判断
lib_skill.set(272, [
  createSkill(6, 12, 8, lib_describe.get('rof_40')),
  createSkill(6, 12, 8, lib_describe.get('dmg_10')), // ***need to be done as fragile***
  createSkill(6, 12, 8, lib_describe.get('de'))
])
lib_skill.set(285, [
  createSkill(5, 12, 8, lib_describe.get('com_dmg_18')),
  createSkill(5, 12, 0, lib_describe.get('c93'))
]) // C-93技能暂定特殊设定控制射速层
lib_skill.set(294, [createSkill(6, 12, 0, lib_describe.get('webley'))]) // webley
lib_skill.set(303, [
  createSkill(6, 12, 6, lib_describe.get('hp35')), // HP-35 主动
  createSkill(0, 0, 0, lib_describe.get('hp35_passive')), // HP-35 被动
]) // hp-35
lib_skill.set(1001, [
  createSkill(6, 12, 8, lib_describe.get('com_dmg_25')),
  createSkill(4, 4, -1, lib_describe.get('colt'))
])
lib_skill.set(1007, [
  createSkill(6, 12, 8, lib_describe.get('com_rof_25')),
  createSkill(6, 12, 0, lib_describe.get('stechkin')),
  createSkill(6, 12, 8, lib_describe.get('dmg_25')), // 短板敲击乐 火力
  createSkill(6, 12, 8, lib_describe.get('crit_100')), // 短板敲击乐 暴击率
  createSkill(6, 12, 0, lib_describe.get('stechkin_reduce_eva')) // 短板敲击乐 降低回避
])
// ———————————————————————————————————————— HG - 4 ————————————————————————————————————————
lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))])
lib_skill.set(7, [
  createSkill(6, 12, 8, lib_describe.get('com_rof_22')),
  createSkill(6, 12, 0, lib_describe.get('stechkin'))
])
lib_skill.set(98, [createSkill(6, 12, 8, lib_describe.get('eva_55_enemy'))]) // 掩护压制 55%
lib_skill.set(99, [
  createSkill(6, 12, 8, lib_describe.get('com_dmgN_35')),
  createSkill(6, 12, 5, lib_describe.get('com_dmgND_20'))
]) // 火N
lib_skill.set(100, [createSkill(6, 12, 8, lib_describe.get('com_eva_60'))]) // 掩护号令
lib_skill.set(168, [createSkill(6, 12, 8, lib_describe.get('rof_28_enemy'))]) // 突击压制
lib_skill.set(202, [createSkill(4, 12, 0, lib_describe.get('thunder'))]) // 临界点射击
lib_skill.set(212, [createSkill(6, 12, 8, lib_describe.get('k5'))])
lib_skill.set(248, [createSkill(6, 12, 8, lib_describe.get('jericho'))]) // 被动单独判断
lib_skill.set(269, []) // 报复进行时单独判断
lib_skill.set(310, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))]) // 护盾暂时没写
lib_skill.set(1002, [
  createSkill(1, 12, 0, lib_describe.get('m1911')), // 绝境神枪手
  createSkill(1, 12, 4, lib_describe.get('rof_40_enemy')), // 烟雾弹 40%
  createSkill(1, 12, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(1005, [ // 纳甘左轮被动实现于特殊变量表
  createSkill(6, 12, 8, lib_describe.get('dmgN_40_enemy')),
  createSkill(6, 12, 5, lib_describe.get('dmgND_25_enemy'))
])
lib_skill.set(1012, [
  createSkill(3, 16, 15, lib_describe.get('com_acuN_120')),
  createSkill(3, 16, 8, lib_describe.get('com_critdmgN_20')), // 夜空追击者：暴伤
  createSkill(3, 16, 0, lib_describe.get('c96cs')) // 夜空追击者：弹量
])
lib_skill.set(1091, [
  createSkill(6, 12, 8, lib_describe.get('rof_28_enemy')),
  createSkill(6, 12, 4, lib_describe.get('mp446')) // 潮音侵袭
])
lib_skill.set(1221, [
  createSkill(6, 12, 6, lib_describe.get('gsh18')),
  createSkill(6, 12, 6, lib_describe.get('critdmg_20'))
])
// ———————————————————————————————————————— HG - 3 ————————————————————————————————————————
lib_skill.set(3, [createSkill(7, 12, 0, lib_describe.get('flash_3'))]) // 闪光弹
lib_skill.set(6, [createSkill(6, 12, 8, lib_describe.get('com_eva_55'))]) // 掩护号令 55%
lib_skill.set(8, [createSkill(6, 12, 6, lib_describe.get('acu_36_enemy'))]) // 精确压制
lib_skill.set(11, [
  createSkill(6, 12, 8, lib_describe.get('com_evaN_85')),
  createSkill(6, 12, 5, lib_describe.get('com_evaND_35'))
]) // 掩护号令N ND
lib_skill.set(12, [createSkill(3, 16, 15, lib_describe.get('com_acuN_100'))])
lib_skill.set(13, [createSkill(6, 12, 8, lib_describe.get('com_dmgrof_3'))]) // 冲锋号令-3星
lib_skill.set(14, [createSkill(6, 12, 8, lib_describe.get('com_rof_20'))])
lib_skill.set(15, [createSkill(6, 12, 8, lib_describe.get('dmg_25_enemy'))]) // 火力压制 25%
lib_skill.set(113, [createSkill(6, 12, 8, lib_describe.get('com_dmg_20'))]) // 火力号令 20%
lib_skill.set(123, [createSkill(6, 12, 8, lib_describe.get('com_eva_55'))]) // 掩护号令 55%
lib_skill.set(132, [
  createSkill(6, 12, 8, lib_describe.get('evaN_75_enemy')),
  createSkill(6, 12, 5, lib_describe.get('evaND_40_enemy'))
])
lib_skill.set(140, [createSkill(6, 12, 8, lib_describe.get('com_acueva_3'))]) // 隐秘号令-3星
lib_skill.set(167, [createSkill(6, 12, 8, lib_describe.get('com_dmgacu_3'))]) // 强袭号令-3星
lib_skill.set(186, [createSkill(6, 12, 8, lib_describe.get('rof_25_enemy'))]) // 突击压制 25%
lib_skill.set(210, [createSkill(6, 12, 8, lib_describe.get('com_dmg_20'))]) // 火力号令 20%
lib_skill.set(220, [createSkill(6, 12, 8, lib_describe.get('dmg_25_enemy'))]) // 火力压制 25%
lib_skill.set(221, [createSkill(6, 12, 6, lib_describe.get('gsh18'))])
lib_skill.set(232, [createSkill(6, 12, 8, lib_describe.get('eva_46_enemy'))]) // 掩护压制 46%
lib_skill.set(244, [
  createSkill(6, 12, 8, lib_describe.get('dmgN_40_enemy')),
  createSkill(6, 12, 5, lib_describe.get('dmgND_22_enemy'))
])
lib_skill.set(277, [createSkill(6, 12, 8, lib_describe.get('dmg_25_enemy'))]) // 火力压制 25%
// ———————————————————————————————————————— HG - 2 ————————————————————————————————————————
lib_skill.set(2, [
  createSkill(1, 12, 4, lib_describe.get('rof_36_enemy')), // 烟雾弹 36%
  createSkill(1, 12, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(5, [
  createSkill(6, 12, 8, lib_describe.get('dmgN_35_enemy')),
  createSkill(6, 12, 5, lib_describe.get('dmgND_20_enemy'))
])
lib_skill.set(9, [createSkill(3, 16, 15, lib_describe.get('com_acuN_90'))])
lib_skill.set(10, [createSkill(6, 12, 8, lib_describe.get('com_dmgcrit_2'))]) // 歼灭号令-2星
lib_skill.set(90, [createSkill(6, 12, 8, lib_describe.get('eva_40_enemy'))])
lib_skill.set(91, [createSkill(6, 12, 8, lib_describe.get('rof_22_enemy'))]) // 突击压制 22%
lib_skill.set(139, [createSkill(6, 12, 8, lib_describe.get('com_dmg_18'))])
lib_skill.set(141, [createSkill(6, 12, 8, lib_describe.get('com_acu_100'))])

// ———————————————————————————————————————— AR ————————————————————————————————————————
// ———————————————————————————————————————— AR - 6 ————————————————————————————————————————
lib_skill.set(1065, []) // HK416 MOD 技能根据设定决定
// ———————————————————————————————————————— AR - 5 ————————————————————————————————————————
lib_skill.set(62, [createSkill(4, 16, 10, lib_describe.get('dmg_75'))])
lib_skill.set(65, [createSkill(8, 16, 0, lib_describe.get('grenade_15'))])
lib_skill.set(73, [createSkill(4, 16, 7, lib_describe.get('aug'))])
lib_skill.set(106, [createSkill(6, 16, 0, lib_describe.get('fal'))])
lib_skill.set(119, [
  createSkill(5, 16, 6, lib_describe.get('dmgN_200')),
  createSkill(5, 16, 6, lib_describe.get('dmgND_70'))
])
lib_skill.set(122, [createSkill(6, 16, 4.5, lib_describe.get('g11'))])
lib_skill.set(129, [createSkill(2, 16, 15, lib_describe.get('dmg_50'))])
lib_skill.set(130, [createSkill(2, 16, 15, lib_describe.get('rof_50'))])
lib_skill.set(172, [createSkill(6, 16, 8, lib_describe.get('rfb'))])
lib_skill.set(175, [createSkill(6, 16, 5, lib_describe.get('art556'))])
lib_skill.set(181, [
  createSkill(6, 16, 8, lib_describe.get('t91N')),
  createSkill(6, 16, 8, lib_describe.get('t91ND'))
])
lib_skill.set(194, [createSkill(8, 3, 0, lib_describe.get('k2'))])
lib_skill.set(196, [createSkill(4, 16, 0, lib_describe.get('zas'))])
lib_skill.set(205, [createSkill(6, 8, 5, lib_describe.get('an94'))])
lib_skill.set(206, [createSkill(6, 8, 5, lib_describe.get('ak12'))])
lib_skill.set(214, [createSkill(5, 16, 5, lib_describe.get('ads'))])
lib_skill.set(215, [createSkill(4, 16, 10, lib_describe.get('mdr'))])
lib_skill.set(236, [createSkill(6, 16, 0, lib_describe.get('k11'))])
lib_skill.set(243, [createSkill(6, 16, 0, lib_describe.get('64howa'))])
lib_skill.set(274, [
  createSkill(6, 8, 5, lib_describe.get('rof_50')), // buff
  createSkill(6, 8, 5, lib_describe.get('dmg_20_enemy')) // debuff
]) // acr
lib_skill.set(287, [createSkill(5, 4, 0, lib_describe.get('SIG-556'))]) // SIG-556
lib_skill.set(289, [createSkill(4, 16, 10, lib_describe.get('dmg_75'))]) // R5
lib_skill.set(290, [createSkill(3, 4, 0, lib_describe.get('89type'))]) // 89type
lib_skill.set(293, [createSkill(6, 8, 0, lib_describe.get('ak15'))]) // ak15
lib_skill.set(306, [
  createSkill(5, 8, 5, lib_describe.get('dmg_65')),
  createSkill(5, 8, 5, lib_describe.get('akalfa'))
]) // AK-ALPHA
lib_skill.set(313, [createSkill(6, 8, 5, lib_describe.get('sacr'))]) // S-ACR
lib_skill.set(1055, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(4, 16, 10, lib_describe.get('m4'))
])
lib_skill.set(1056, [createSkill(8, 16, 0, lib_describe.get('sop2'))])
lib_skill.set(1057, [createSkill(4, 16, 15, lib_describe.get('rof_50'))]) // 罪与罚单独在普攻实现
lib_skill.set(1060, [
  createSkill(5, 16, 6, lib_describe.get('dmgN_200')),
  createSkill(5, 16, 6, lib_describe.get('dmgND_70'))]) // 信念在属性判断实现
lib_skill.set(1064, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(4, 16, 5, lib_describe.get('g36_eva'))
]) // 弧光契约，射速在react实现
lib_skill.set(3054, [createSkill(8, 16, 0, lib_describe.get('grenade_90'))]) // BOSS M16A1
// ———————————————————————————————————————— AR - 4 ————————————————————————————————————————
lib_skill.set(54, [createSkill(7, 16, 0, lib_describe.get('flash_4'))]) // 闪光弹
lib_skill.set(55, [createSkill(4, 16, 10, lib_describe.get('dmg_70'))])
lib_skill.set(56, [createSkill(8, 16, 0, lib_describe.get('grenade_12'))])
lib_skill.set(57, [createSkill(4, 16, 15, lib_describe.get('rof_45'))])
lib_skill.set(60, [
  createSkill(5, 16, 6, lib_describe.get('dmgN_180')),
  createSkill(5, 16, 6, lib_describe.get('dmgND_60'))
])
lib_skill.set(64, [createSkill(4, 16, 10, lib_describe.get('dmg_70'))])
lib_skill.set(66, [createSkill(8, 16, 0, lib_describe.get('grenade_5'))])
lib_skill.set(69, [createSkill(8, 16, 0, lib_describe.get('grenade_5'))])
lib_skill.set(72, [createSkill(6, 16, 5, lib_describe.get('tar21'))])
lib_skill.set(118, [
  createSkill(5, 16, 6, lib_describe.get('dmgN_180')),
  createSkill(5, 16, 6, lib_describe.get('dmgND_60'))
])
lib_skill.set(171, [createSkill(6, 16, 5, lib_describe.get('lbll'))])
lib_skill.set(187, [createSkill(5, 8, 5, lib_describe.get('dmg_65'))])
lib_skill.set(207, [
  createSkill(4, 16, 10, lib_describe.get('cz2000_N')),
  createSkill(4, 16, 10, lib_describe.get('cz2000_ND'))
])
lib_skill.set(216, [createSkill(8, 16, 0, lib_describe.get('grenade_12'))])
lib_skill.set(227, [
  createSkill(8, 16, 0, lib_describe.get('grenade_10')),
  createSkill(8, 16, 10, lib_describe.get('a91_N'))
])
lib_skill.set(237, [createSkill(4, 16, 6, lib_describe.get('aug'))])
lib_skill.set(262, [createSkill(6, 16, 0, lib_describe.get('em2'))])
lib_skill.set(288, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])
lib_skill.set(297, [createSkill(6, 16, 5, lib_describe.get('tar21'))])
lib_skill.set(1061, [createSkill(8, 16, 0, lib_describe.get('grenade_9.6'))]) // 后续详细做
lib_skill.set(1063, [createSkill(8, 16, 0, lib_describe.get('grenade_12'))])
// ———————————————————————————————————————— AR - 3 ————————————————————————————————————————
lib_skill.set(58, [createSkill(5, 8, 5, lib_describe.get('dmgacu_3'))])
lib_skill.set(61, [createSkill(8, 16, 0, lib_describe.get('grenade_4.5'))])
lib_skill.set(70, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])
lib_skill.set(105, [createSkill(4, 16, 10, lib_describe.get('rof_60'))])
lib_skill.set(108, [createSkill(8, 16, 0, lib_describe.get('grenade_4.5'))])
lib_skill.set(120, [createSkill(8, 16, 0, lib_describe.get('grenade_11'))])
lib_skill.set(134, [createSkill(8, 16, 0, lib_describe.get('grenade_11'))])
lib_skill.set(138, [createSkill(5, 8, 5, lib_describe.get('dmgacu_3'))])
lib_skill.set(170, [createSkill(6, 8, 5, lib_describe.get('dmgcrit_3'))])
lib_skill.set(193, [
  createSkill(5, 16, 8, lib_describe.get('t65N')),
  createSkill(5, 16, 8, lib_describe.get('t65ND'))
])
lib_skill.set(223, [createSkill(5, 8, 5, lib_describe.get('modelL'))])
lib_skill.set(239, [createSkill(6, 8, 5, lib_describe.get('dmgcrit_3'))])
lib_skill.set(258, [createSkill(6, 16, 10, lib_describe.get('magal'))])
lib_skill.set(265, [createSkill(4, 16, 10, lib_describe.get('rof_60'))])
lib_skill.set(279, [createSkill(5, 8, 5, lib_describe.get('dmgacu_3'))])
// ———————————————————————————————————————— AR - 2 ————————————————————————————————————————
lib_skill.set(63, [createSkill(8, 16, 0, lib_describe.get('grenade_10'))])
lib_skill.set(68, [createSkill(6, 8, 5, lib_describe.get('l85a1'))])
lib_skill.set(71, [createSkill(5, 16, 15, lib_describe.get('acu_500'))])
lib_skill.set(74, [createSkill(5, 8, 5, lib_describe.get('dmg_55'))])
lib_skill.set(107, [createSkill(5, 8, 5, lib_describe.get('dmg_55'))])
lib_skill.set(133, [createSkill(5, 16, 15, lib_describe.get('acu_500'))])

// ———————————————————————————————————————— SMG ————————————————————————————————————————
// ———————————————————————————————————————— SMG - 5 ————————————————————————————————————————
lib_skill.set(16, [createSkill(8, 16, 4, lib_describe.get('ffs'))]) // 力场盾
lib_skill.set(20, [createSkill(3, 16, 0, lib_describe.get('incendiary_7'))]) // 燃烧弹
lib_skill.set(28, [
  createSkill(6, 8, 5, lib_describe.get('mp7_rof')), // 弦月舞者
  createSkill(6, 8, 5, lib_describe.get('eva_180'))
]) //
lib_skill.set(59, [createSkill(6, 16, 5, lib_describe.get('aks'))]) // 排斥反应
lib_skill.set(104, [createSkill(8, 16, 4, lib_describe.get('ffs'))]) // 力场盾
lib_skill.set(115, [createSkill(6, 8, 5, lib_describe.get('eva_150'))]) // 掩护专注
lib_skill.set(127, [createSkill(7, 16, 0, lib_describe.get('flash_5'))]) // 闪光弹
lib_skill.set(135, [createSkill(4, 8, 5, lib_describe.get('dmg_260'))])
lib_skill.set(143, [
  createSkill(3, 12, 5, lib_describe.get('eva_70')), // 心智威慑
  createSkill(3, 12, 5, lib_describe.get('dmg_25_enemy'))
]) //
lib_skill.set(213, []) // 心情链环由特殊设置决定
lib_skill.set(224, [ // 隐秘专注N
  createSkill(4, 16, 10, lib_describe.get('pm06N')),
  createSkill(4, 16, 10, lib_describe.get('pm06ND'))
])
lib_skill.set(228, [createSkill(13, 16, 5, lib_describe.get('type100'))]) // 暂时不做护盾
lib_skill.set(234, [createSkill(6, 8, 5, lib_describe.get('js9'))])
lib_skill.set(245, [createSkill(6, 12, 5, lib_describe.get('p90'))])
lib_skill.set(251, [createSkill(4, 8, 5, lib_describe.get('x95'))])
lib_skill.set(259, [
  createSkill(6, 8, 5, lib_describe.get('pm9')),
  createSkill(6, 8, 5, lib_describe.get('pm9_buff'))
])
lib_skill.set(1026, [
  createSkill(8, 16, 4, lib_describe.get('ffs')), // 力场盾
  createSkill(8, 16, 4, lib_describe.get('mp5mod')) // 回避提升
])
lib_skill.set(1101, [
  createSkill(7, 16, 0, lib_describe.get('flash_5')), // 闪光弹
  createSkill(7, 16, 0, lib_describe.get('ump9mod')) // 白鸮轰鸣
])
lib_skill.set(1103, [
  createSkill(1, 16, 4, lib_describe.get('rof_40_enemy')),
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
]) // 迷雾盒，伤害没做
// ———————————————————————————————————————— SMG - 4 ————————————————————————————————————————
lib_skill.set(23, [createSkill(4, 16, 15, lib_describe.get('eva_45'))]) //
lib_skill.set(26, [createSkill(8, 16, 3, lib_describe.get('ffs'))]) // 力场盾
lib_skill.set(101, [createSkill(7, 16, 0, lib_describe.get('flash_4'))]) // 闪光弹
lib_skill.set(102, [createSkill(1, 2, 0, lib_describe.get('ump40'))]) // 烙印过载
lib_skill.set(103, [
  createSkill(1, 12, 4, lib_describe.get('rof_40_enemy')), // 烟雾弹40%
  createSkill(1, 12, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(136, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_6.5'))]) // pp-19
lib_skill.set(137, [
  createSkill(1, 16, 4, lib_describe.get('rof_40_enemy')), // 烟雾弹40%
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(150, [createSkill(6, 8, 5, lib_describe.get('eva_130'))]) // 掩护专注
lib_skill.set(177, [createSkill(3, 16, 0, lib_describe.get('incendiary_6.5'))]) // klin
lib_skill.set(203, [createSkill(6, 8, 5, lib_describe.get('dmgeva_16040'))]) // storm cx4
lib_skill.set(225, [createSkill(6, 16, 10, lib_describe.get('evaacu_4'))]) //
lib_skill.set(280, [createSkill(6, 8, 5, lib_describe.get('mat49'))])
lib_skill.set(286, [
  createSkill(6, 8, 1, lib_describe.get('ffs')),
  createSkill(7, 8, 5, lib_describe.get('eva_60'))
]) // KAC-PDW
lib_skill.set(295, [createSkill(5, 16, 6, lib_describe.get('cf05'))]) // cf05
lib_skill.set(304, [createSkill(4, 8, 0, lib_describe.get('hand_grenade_3'))]) // SAF
lib_skill.set(1029, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_6.5'))]) // sten mod
lib_skill.set(1031, [  // beretta mod
  createSkill(7, 16, 0, lib_describe.get('flash_4')),
  createSkill(7, 16, 0, lib_describe.get('beretta_inc'))
])
lib_skill.set(1032, [createSkill(3, 16, 0, lib_describe.get('uzi_burn'))]) // uzi mod
lib_skill.set(1093, [
  createSkill(6, 8, 5, lib_describe.get('eva_130')),
  createSkill(6, 8, 0, lib_describe.get('idw'))
])
lib_skill.set(1094, [
  createSkill(7, 16, 0, lib_describe.get('flash_4'))
]) // 闪光弹4星，被动没做
// ———————————————————————————————————————— SMG - 3 ————————————————————————————————————————
lib_skill.set(18, [
  createSkill(1, 16, 4, lib_describe.get('rof_36_enemy')), // 烟雾弹36%
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(19, [createSkill(6, 8, 5, lib_describe.get('eva_120'))]) //
lib_skill.set(22, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_6'))])
lib_skill.set(27, [createSkill(3, 16, 0, lib_describe.get('incendiary_6'))])
lib_skill.set(29, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_6'))])
lib_skill.set(32, [createSkill(3, 16, 0, lib_describe.get('incendiary_6'))])
lib_skill.set(116, [createSkill(3, 16, 0, lib_describe.get('incendiary_6'))])
lib_skill.set(131, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_6'))])
lib_skill.set(144, [createSkill(7, 16, 0, lib_describe.get('flash_3'))]) //
lib_skill.set(169, [createSkill(6, 8, 5, lib_describe.get('dmgeva_15040'))])
lib_skill.set(176, [createSkill(6, 8, 5, lib_describe.get('eva_120'))]) //
lib_skill.set(178, [
  createSkill(1, 16, 4, lib_describe.get('rof_36_enemy')), // 烟雾弹36%
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(191, [createSkill(3, 16, 0, lib_describe.get('incendiary_6'))])
lib_skill.set(209, [createSkill(7, 16, 0, lib_describe.get('flash_3'))]) //
lib_skill.set(218, [createSkill(4, 16, 15, lib_describe.get('eva_40'))]) //
lib_skill.set(267, [
  createSkill(1, 16, 4, lib_describe.get('rof_36_enemy')), // 烟雾弹36%
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
])
// ———————————————————————————————————————— SMG - 2 ————————————————————————————————————————
lib_skill.set(17, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_5.5'))])
lib_skill.set(21, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_5.5'))])
lib_skill.set(24, [createSkill(3, 16, 0, lib_describe.get('hand_grenade_5.5'))])
lib_skill.set(25, [createSkill(3, 16, 0, lib_describe.get('incendiary_5.5'))])
lib_skill.set(31, [createSkill(7, 16, 0, lib_describe.get('flash_3'))]) //
lib_skill.set(33, [
  createSkill(1, 12, 4, lib_describe.get('rof_36_enemy')), // 烟雾弹36%
  createSkill(1, 16, 4, lib_describe.get('speed_down')) // 减速
])
lib_skill.set(92, [createSkill(6, 8, 5, lib_describe.get('eva_110'))]) //
lib_skill.set(93, [createSkill(6, 8, 5, lib_describe.get('eva_110'))]) //
lib_skill.set(94, [createSkill(7, 16, 0, lib_describe.get('flash_3'))]) //

// ———————————————————————————————————————— RF ————————————————————————————————————————
lib_skill.set(1053, []) // NTW MOD根据特殊设定单独判断
// ———————————————————————————————————————— RF - 5 ————————————————————————————————————————
lib_skill.set(46, [createSkill(8, 16, 0, lib_describe.get('kar98k'))])
lib_skill.set(48, [createSkill(5, 8, 5, lib_describe.get('rof_75'))])
lib_skill.set(50, [createSkill(5, 8, 5, lib_describe.get('dmg_75'))])
lib_skill.set(53, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(128, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(148, [
  createSkill(6, 16, 10, lib_describe.get('iws2000')),
  createSkill(6, 16, 0, lib_describe.get('iws2000_reset'))
])
lib_skill.set(179, [createSkill(15, 16, 0, lib_describe.get('dsr50'))])
lib_skill.set(192, [createSkill(6, 16, 0, lib_describe.get('js05'))])
lib_skill.set(197, [createSkill(6, 8, 7.5, lib_describe.get('carcano1891'))])
lib_skill.set(198, [createSkill(6, 8, 0, lib_describe.get('carcano9138'))])
lib_skill.set(204, [createSkill(8, 16, 6, lib_describe.get('blst'))])
lib_skill.set(211, [createSkill(6, 8, 5, lib_describe.get('srs'))])
lib_skill.set(222, [createSkill(10, 16, 0, lib_describe.get('tac50'))])
lib_skill.set(231, [createSkill(6, 8, 0, lib_describe.get('m82a1'))])
lib_skill.set(257, [createSkill(6, 16, 0, lib_describe.get('m200'))])
lib_skill.set(256, [
  createSkill(6, 8, 0, lib_describe.get('falcon_getbullet')),
  createSkill(6, 1, 0, lib_describe.get('falcon'))
])
lib_skill.set(266, [
  createSkill(6, 8, 5, lib_describe.get('r93')),
  createSkill(6, 8, 5, lib_describe.get('dmg_40'))
]) // 叠加射速特殊判断
lib_skill.set(296, [createSkill(5, 8, 0, lib_describe.get('sl8'))]) // SL8
lib_skill.set(312, [
  createSkill(5, 8, 0, lib_describe.get('vsk94')),
  createSkill(5, 8, 0, lib_describe.get('vsk94buff'))
]) // VSK-94
lib_skill.set(1039, []) // mosin-nagant mod 单独根据设定判断
lib_skill.set(1252, [createSkill(9, 16, 0, lib_describe.get('snipe_5'))])
// ———————————————————————————————————————— RF - 4 ————————————————————————————————————————
lib_skill.set(36, [createSkill(10, 16, 0, lib_describe.get('snipe_6'))])
lib_skill.set(39, [createSkill(10, 16, 0, lib_describe.get('snipe_6'))])
lib_skill.set(42, [createSkill(15, 16, 0, lib_describe.get('snipe_7'))]) // ptrd
lib_skill.set(43, [createSkill(5, 8, 5, lib_describe.get('rof_65'))]) // svd
lib_skill.set(117, [createSkill(10, 16, 0, lib_describe.get('snipe_6'))])
lib_skill.set(146, [createSkill(5, 8, 5, lib_describe.get('dmg_65'))]) // g28
lib_skill.set(180, [createSkill(6, 16, 0, lib_describe.get('pzb39'))]) // pzb39
lib_skill.set(184, [createSkill(6, 8, 6, lib_describe.get('t5000'))])
lib_skill.set(200, [
  createSkill(8, 8, 5, lib_describe.get('rofN_100')),
  createSkill(8, 8, 5, lib_describe.get('rofND_32'))
])
lib_skill.set(226, [createSkill(6, 8, 5, lib_describe.get('mk12'))])
lib_skill.set(235, [
  createSkill(8, 16, 0, lib_describe.get('snipe_5.5')),
  createSkill(8, 16, 5, lib_describe.get('rof_25'))
])
lib_skill.set(247, [createSkill(6, 8, 5, lib_describe.get('k31'))])
lib_skill.set(252, [createSkill(10, 16, 0, lib_describe.get('snipe_4'))])
lib_skill.set(261, [createSkill(8, 16, 0, lib_describe.get('qbu88'))])
lib_skill.set(270, [createSkill(6, 8, 5, lib_describe.get('rof_55'))]) // 四式
lib_skill.set(273, [createSkill(6, 16, 0, lib_describe.get('ssg3000'))]) // SSG3000
lib_skill.set(305, [createSkill(5, 8, 5, lib_describe.get('dmg_705'))]) // tabuk
lib_skill.set(1037, [
  createSkill(5, 8, 5, lib_describe.get('dmg_65')),
  createSkill(5, 8, 6, lib_describe.get('critdmg_10'))
])
lib_skill.set(1044, [
  createSkill(10, 16, 0, lib_describe.get('snipe_7.08')),
  createSkill(3, -1, 7, lib_describe.get('sv98')),
  createSkill(13, 16, 13, lib_describe.get('sv98'))
])
lib_skill.set(1051, [
  createSkill(5, 8, 5, lib_describe.get('dmg_65')),
  createSkill(5, 8, 5, lib_describe.get('rof_15'))
])
lib_skill.set(1095, [
  createSkill(6, 8, 6, lib_describe.get('dmgN_100')),
  createSkill(6, 8, 6, lib_describe.get('dmgND_35')),
  createSkill(6, 8, 6, lib_describe.get('hanyang88')) // 全能战术判断在攻击判定中解决
])
// ———————————————————————————————————————— RF - 3 ————————————————————————————————————————
lib_skill.set(34, [createSkill(10, 16, 0, lib_describe.get('snipe_5.5'))])
lib_skill.set(35, [createSkill(5, 16, 15, lib_describe.get('rof_40'))])
lib_skill.set(37, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))]) // m14
lib_skill.set(38, [createSkill(10, 16, 0, lib_describe.get('snipe_5.5'))])
lib_skill.set(44, [createSkill(10, 16, 0, lib_describe.get('snipe_5.5'))]) // sv98
lib_skill.set(49, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))]) // 56半
lib_skill.set(95, [
  createSkill(8, 8, 6, lib_describe.get('dmgN_90')),
  createSkill(8, 8, 6, lib_describe.get('dmgND_30'))
])
lib_skill.set(124, [createSkill(10, 16, 0, lib_describe.get('snipe_5.5'))]) // supersass
lib_skill.set(145, [createSkill(15, 16, 0, lib_describe.get('snipe_6.5_2'))]) // OTs-44
lib_skill.set(147, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])
lib_skill.set(174, [
  createSkill(8, 8, 5, lib_describe.get('rofN_90')),
  createSkill(8, 8, 5, lib_describe.get('rofND_30'))
])
lib_skill.set(182, [createSkill(6, 8, 5, lib_describe.get('rof_60'))]) // wz.29
lib_skill.set(201, [createSkill(15, 16, 0, lib_describe.get('snipe_6.5_2'))])
lib_skill.set(217, [createSkill(5, 16, 15, lib_describe.get('rof_40'))])
lib_skill.set(230, [createSkill(6, 8, 6, lib_describe.get('obr'))]) // obr
lib_skill.set(241, [createSkill(15, 16, 0, lib_describe.get('snipe_6.5_2'))])
lib_skill.set(255, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])
lib_skill.set(268, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])
lib_skill.set(284, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))]) // zas m76
lib_skill.set(308, [createSkill(5, 8, 5, lib_describe.get('rof_60'))]) // c14
// ———————————————————————————————————————— RF - 2 ————————————————————————————————————————
lib_skill.set(40, [createSkill(10, 16, 0, lib_describe.get('snipe_5'))])
lib_skill.set(41, [createSkill(5, 8, 5, lib_describe.get('rof_55'))])
lib_skill.set(47, [
  createSkill(8, 8, 5, lib_describe.get('rofN_85')),
  createSkill(8, 8, 5, lib_describe.get('rofND_28'))
])
lib_skill.set(51, [createSkill(5, 8, 5, lib_describe.get('dmg_55'))])
lib_skill.set(52, [createSkill(5, 8, 5, lib_describe.get('rof_55'))])

// ———————————————————————————————————————— MG ————————————————————————————————————————
// ———————————————————————————————————————— MG - 5 ————————————————————————————————————————
lib_skill.set(109, []) // 连珠终结实现于攻击
lib_skill.set(112, []) // 狂躁血脉实现于换弹
lib_skill.set(125, [ // MG4蓄势待发
  createSkill(8, 18, 8, lib_describe.get('dmg_35')),
  createSkill(8, 18, 0, lib_describe.get('addclip_4'))
])
lib_skill.set(173, []) // 暴动宣告实现于攻击
lib_skill.set(208, [
  createSkill(8, 18, 8, lib_describe.get('hk21')),
  createSkill(8, 18, 0, lib_describe.get('addclip_2'))
])
lib_skill.set(238, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))])
lib_skill.set(253, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))])
lib_skill.set(263, [
  createSkill(8, 18, 6, lib_describe.get('dmg_55')),
  createSkill(8, 18, 0, lib_describe.get('mg36'))
])
lib_skill.set(276, []) // Kord
lib_skill.set(292, [createSkill(8, 18, 0, lib_describe.get('rpk16'))]) // RPK-16
lib_skill.set(307, [createSkill(8, 18, 0, lib_describe.get('zb26'))]) // ZB-26
lib_skill.set(1075, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))]) // m1918 mod
// ———————————————————————————————————————— MG - 4 ————————————————————————————————————————
lib_skill.set(75, [createSkill(8, 18, 6, lib_describe.get('dmg_70'))]) // m1918
lib_skill.set(78, [
  createSkill(8, 18, 6, lib_describe.get('dmgN_105')),
  createSkill(8, 18, 6, lib_describe.get('dmgND_35'))
])
lib_skill.set(85, []) // 连珠终结实现于攻击
lib_skill.set(88, [
  createSkill(8, 18, 8, lib_describe.get('dmg_30')),
  createSkill(8, 18, 0, lib_describe.get('addclip_4'))
])
lib_skill.set(121, [
  createSkill(3, 18, 6, lib_describe.get('acu_70')),
  createSkill(3, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(149, [
  createSkill(8, 18, 6, lib_describe.get('dmgN_40')),
  createSkill(8, 18, 6, lib_describe.get('acuN_70')),
  createSkill(8, 18, 6, lib_describe.get('acuND_20')),
  createSkill(8, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(185, [
  createSkill(8, 18, 8, lib_describe.get('dmgN_50')),
  createSkill(8, 18, 8, lib_describe.get('dmgND_11')),
  createSkill(8, 18, 0, lib_describe.get('addclip_4'))
])
lib_skill.set(199, [createSkill(8, 18, 6, lib_describe.get('dmg_70'))]) // 80-type
lib_skill.set(240, [createSkill(8, 18, 6, lib_describe.get('mk46'))])
lib_skill.set(254, [
  createSkill(8, 18, 8, lib_describe.get('acuN_80')),
  createSkill(8, 18, 8, lib_describe.get('acuND_40')),
  createSkill(8, 18, 0, lib_describe.get('addclip_dynamic'))
]) // 白夜独奏曲换弹单独判断
lib_skill.set(264, [createSkill(6, 2, 0, lib_describe.get('chauchat'))]) // 百合纹章
lib_skill.set(275, [createSkill(3, 5, 0, lib_describe.get('m1895cb'))]) // 有备无患
lib_skill.set(1081, [ // 猎杀冲动
  createSkill(3, 18, 6, lib_describe.get('acu_70')),
  createSkill(3, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(1089, [ // 被动在换弹实现，类似刘易斯
  createSkill(8, 18, 8, lib_describe.get('dmg_30')),
  createSkill(8, 18, 0, lib_describe.get('addclip_4'))
])
// ———————————————————————————————————————— MG - 3 ————————————————————————————————————————
lib_skill.set(77, []) // 连珠终结实现于攻击
lib_skill.set(79, [
  createSkill(8, 18, 8, lib_describe.get('dmgN_45')),
  createSkill(8, 18, 8, lib_describe.get('dmgND_10')),
  createSkill(8, 18, 0, lib_describe.get('addclip_4'))
])
lib_skill.set(80, [
  createSkill(3, 18, 6, lib_describe.get('acu_65')),
  createSkill(3, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(84, [createSkill(8, 18, 6, lib_describe.get('dmg_65'))])
lib_skill.set(86, [createSkill(8, 18, 6, lib_describe.get('dmg_65'))])
lib_skill.set(89, [
  createSkill(8, 18, 8, lib_describe.get('dmg_30')),
  createSkill(8, 18, 0, lib_describe.get('addclip_3'))
])
lib_skill.set(195, [
  createSkill(8, 18, 8, lib_describe.get('dmg_30')),
  createSkill(8, 18, 0, lib_describe.get('addclip_3'))
])
lib_skill.set(249, [createSkill(8, 18, 6, lib_describe.get('62type'))])
lib_skill.set(271, [
  createSkill(8, 18, 8, lib_describe.get('dmg_30')),
  createSkill(8, 18, 0, lib_describe.get('addclip_3'))
])
// ———————————————————————————————————————— MG - 2 ————————————————————————————————————————
lib_skill.set(81, [ // 猎杀冲动
  createSkill(3, 18, 6, lib_describe.get('acu_60')),
  createSkill(3, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(82, [
  createSkill(8, 18, 8, lib_describe.get('dmg_28')),
  createSkill(8, 18, 0, lib_describe.get('addclip_3'))
])
lib_skill.set(87, [createSkill(8, 18, 6, lib_describe.get('dmg_60'))])
lib_skill.set(110, [
  createSkill(3, 18, 6, lib_describe.get('acu_60')),
  createSkill(3, 18, 6, lib_describe.get('mustcrit'))
])
lib_skill.set(111, [
  createSkill(8, 18, 6, lib_describe.get('dmgN_85')),
  createSkill(8, 18, 6, lib_describe.get('dmgND_30'))
])

// ———————————————————————————————————————— SG ————————————————————————————————————————
// ———————————————————————————————————————— SG - 5 ————————————————————————————————————————
lib_skill.set(151, [createSkill(15, 16, 0, lib_describe.get('m1887'))]) // 终结打击
lib_skill.set(157, [createSkill(10, 16, 6, lib_describe.get('armeva_5'))]) // 生存本能-5星
lib_skill.set(160, [createSkill(8, 16, 0, lib_describe.get('saiga'))]) // 巨羚号角
lib_skill.set(163, [ // 酮血症
  createSkill(8, 16, 8, lib_describe.get('rof_80')),
  createSkill(8, 16, 0, lib_describe.get('addclip_10'))
])
lib_skill.set(164, [
  // 
  createSkill(10, 16, 0, lib_describe.get('fp6_dmg'))
]) //
lib_skill.set(188, [createSkill(2, 8, 5, lib_describe.get('sat8'))]) // 坚壁理论
lib_skill.set(229, [createSkill(8, 16, 4, lib_describe.get('m870'))]) // 地狱公路
lib_skill.set(281, []) // 
lib_skill.set(282, []) // 
// ———————————————————————————————————————— SG - 4 ————————————————————————————————————————
lib_skill.set(153, [createSkill(8, 16, 0, lib_describe.get('sg_shock'))])
lib_skill.set(155, [createSkill(10, 16, 6, lib_describe.get('arm_70'))]) // 防护专注-4星
lib_skill.set(156, [createSkill(10, 16, 6, lib_describe.get('armeva_4'))]) // 生存本能-4星
lib_skill.set(161, [
  createSkill(8, 16, 8, lib_describe.get('dmg_120')),
  createSkill(8, 16, 8, lib_describe.get('aimupto_5'))
])
lib_skill.set(162, [
  createSkill(8, 16, 8, lib_describe.get('dmg_120')),
  createSkill(8, 16, 8, lib_describe.get('aimupto_5'))
])
lib_skill.set(165, [createSkill(10, 16, 8, lib_describe.get('m1014'))]) // m1014应激性暗示
lib_skill.set(189, [
  createSkill(1, 16, 8, lib_describe.get('rof_60')),
  createSkill(1, 16, 0, lib_describe.get('addclip_4'))
])
lib_skill.set(283, []) // 
// ———————————————————————————————————————— SG - 3 ————————————————————————————————————————
lib_skill.set(152, [createSkill(8, 16, 0, lib_describe.get('sg_shock'))])
lib_skill.set(154, [createSkill(10, 16, 6, lib_describe.get('arm_60'))]) // 防护专注-3星
lib_skill.set(158, [ // 火力专注SG
  createSkill(8, 16, 8, lib_describe.get('dmg_120')),
  createSkill(8, 16, 8, lib_describe.get('aimupto_5'))
])
lib_skill.set(159, [createSkill(8, 16, 0, lib_describe.get('sg_shock'))])
lib_skill.set(190, [createSkill(8, 16, 0, lib_describe.get('sg_shock'))])
lib_skill.set(278, [createSkill(8, 16, 0, lib_describe.get('sg_shock'))])

// ———————————————————————————————————————— 联动人形 ————————————————————————————————————————
lib_skill.set(2001, [createSkill(6, 12, 0, lib_describe.get('noel'))]) // 零枪-魔狼牙/思兼
lib_skill.set(2002, [
  createSkill(10, 16, 0, lib_describe.get('grenade_8')),
  createSkill(11, 16, 0, lib_describe.get('grenade_12'))
]) // 压轴甜点
lib_skill.set(2003, [createSkill(6, 12, 0, lib_describe.get('kiana'))]) // 阿斯加德之怒
lib_skill.set(2004, [createSkill(6, 16, 0, lib_describe.get('snipe_5'))]) // 超电磁狙击
lib_skill.set(2005, [createSkill(0, -1, 0, lib_describe.get('bronya'))]) // 黑洞触媒
lib_skill.set(2006, [createSkill(1, 12, 0, lib_describe.get('theresa'))]) // 圣光制裁
lib_skill.set(2007, [createSkill(1, 16, 5, lib_describe.get('dmg_60'))]) // 夜之畏惧
lib_skill.set(2008, []) // 量子回溯：换弹中实现
lib_skill.set(2009, [createSkill(6.533, 8, 0, lib_describe.get('clear'))]) // 再接再厉
lib_skill.set(2010, []) // 

lib_skill.set(2011, [createSkill(6, 16, 0, lib_describe.get('jill'))]) // Jill
lib_skill.set(2012, [createSkill(6, 10, 0, lib_describe.get('sei'))]) // Sei
lib_skill.set(2013, [createSkill(1, -1, 0, lib_describe.get('dorothy'))]) // Dorothy，模式在攻击中判断
lib_skill.set(2014, [ // Stella
  createSkill(6, 8, 5, lib_describe.get('dmg_50')),
  createSkill(0, -1, 99999, lib_describe.get('stella_attack'))
])
lib_skill.set(2015, [createSkill(8, 18, 4, lib_describe.get('alma'))]) // 爱&梦想
lib_skill.set(2016, [createSkill(8, 18, 0, lib_describe.get('dana'))]) // 红色间歇泉
lib_skill.set(2023, [
  createSkill(0, -1, 0, lib_describe.get('henrietta_init')), // 月轮守护人-初始护盾
  createSkill(4, 16, 5, lib_describe.get('henrietta_active'))]) // 月轮守护人-主动
lib_skill.set(2024, [createSkill(4, 10, 0, lib_describe.get('rico_snipe'))]) // 提希丰之塔
lib_skill.set(2025, [createSkill(8, 16, 8, lib_describe.get('dmg_80'))]) // 木偶把戏
lib_skill.set(2026, [createSkill(0, 3, 0, lib_describe.get('claes'))]) // 沉思者之钥
lib_skill.set(2027, [
  createSkill(0, 10, 0, lib_describe.get('angelica')),
  createSkill(4, 12, 5, lib_describe.get('aug'))
]) // 安洁莉卡