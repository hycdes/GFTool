// 技能类，属性：前置冷却、冷却、持续时间、描述
// react函数根据技能的参数和描述，进行解释
// 非持续类[duration=0]，无限持续（被动）[duration=-1]，非属性被动技能会改写特殊变量表并删除自己
// 另外，攻击所有值全为0，单独在react作为最高优先判断
function createSkill (init_cld, cld, duration, Describe) {
  var Skill = {}
  Skill.init_cld = init_cld
  Skill.cld = cld
  Skill.duration = duration
  Skill.Describe = Describe
  return Skill
}

// 描述类，属性：描述名、通用化特定属性
// 特定技能没有通用属性，根据描述名在react单独处理
function describe_attack () { // 普通攻击
  var Describe = {}
  Describe.name = 'attack'
  return Describe
}

function describe_property (list_target, list_pro, list_value) { // 属性增益
  var Describe = {}
  Describe.name = 'property'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
function describe_propertyN (list_target, list_pro, list_value) { // 属性增益N
  var Describe = {}
  Describe.name = 'propertyN'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
function describe_propertyND (list_target, list_pro, list_value) { // 属性增益N-昼战衰减
  var Describe = {}
  Describe.name = 'propertyND'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}

function describe_colt () { // 决斗幸存者
  var Describe = {}
  Describe.name = 'colt'
  return Describe
}

function describe_m1911 () { // 绝境神枪手
  var Describe = {}
  Describe.name = 'm1911'
  return Describe
}

function describe_bomb (direct_ratio, dot_ratio, dot_per_second, dot_time) { // 投掷物，实际执行榴弹+AOE单独计算
  var Describe = {}
  Describe.name = 'bomb'
  Describe.direct_ratio = direct_ratio
  Describe.dot_ratio = dot_ratio
  Describe.dot_per_second = dot_per_second
  Describe.dot_time = dot_time
  return Describe
}

function describe_grenade (ratio) { // 榴弹
  var Describe = {}
  Describe.name = 'grenade'
  Describe.ratio = ratio
  return Describe
}

function describe_snipe (ratio, time_init, time_interval, snipe_num, labels) { // 狙击：倍率、初始时间、瞄准间隔、狙击次数，特殊说明
  var Describe = {}
  Describe.name = 'snipe'
  Describe.ratio = ratio
  Describe.time_init = time_init
  Describe.time_interval = time_interval
  Describe.snipe_num = snipe_num
  Describe.labels = labels
  return Describe
}
function describe_dsr50 (ratio_armless, ratio_arm, time_init, labels) { // 崩甲射击：倍率、初始时间、特殊说明
  var Describe = {}
  Describe.name = 'dsr50'
  Describe.ratio_armless = ratio_armless
  Describe.ratio_arm = ratio_arm
  Describe.time_init = time_init
  Describe.labels = labels
  return Describe
}
function describe_m82a1 (ratio, time_init, time_interval, snipe_num, labels) { // 伪神的启示（跟狙击一样）
  var Describe = {}
  Describe.name = 'm82a1'
  Describe.ratio = ratio
  Describe.time_init = time_init
  Describe.time_interval = time_interval
  Describe.snipe_num = snipe_num
  Describe.labels = labels
  return Describe
}

function describe_karm1891 () {
  var Describe = {}
  Describe.name = 'karm1891'
  return Describe
}
function describe_karm9138 () {
  var Describe = {}
  Describe.name = 'karm9138'
  return Describe
}

function describe_hs2000 () {
  var Describe = {}
  Describe.name = 'hs2000'
  return Describe
}

function describe_k11 () { // 恐惧榴弹
  var Describe = {}
  Describe.name = 'k11'
  return Describe
}
function describe_zas () { // 夜枭轰鸣
  var Describe = {}
  Describe.name = 'zas'
  return Describe
}
function describe_sop2 () { // 狂乱马戏
  var Describe = {}
  Describe.name = 'sop2'
  return Describe
}

function describe_contender () {
  var Describe = {}
  Describe.name = 'contender'
  return Describe
}

function describe_python () { // 蟒蛇_主动
  var Describe = {}
  Describe.name = 'python'
  return Describe
}

function describe_aug () { // AUG
  var Describe = {}
  Describe.name = 'aug'
  return Describe
}
function describe_fal () { // FAL
  var Describe = {}
  Describe.name = 'fal'
  return Describe
}
function describe_g11 () { // G11
  var Describe = {}
  Describe.name = 'g11'
  return Describe
}
function describe_k2 () { // k2
  var Describe = {}
  Describe.name = 'k2'
  return Describe
}
function describe_multihit (multiple) { // an94、芭莉斯塔
  var Describe = {}
  Describe.name = 'multihit'
  Describe.value = multiple
  return Describe
}
function describe_mdr () { // mdr
  var Describe = {}
  Describe.name = 'mdr'
  return Describe
}
function describe_64howa () { // 64自
  var Describe = {}
  Describe.name = '64howa'
  return Describe
}
function describe_m4 () { // 伸冤者印记
  var Describe = {}
  Describe.name = 'm4'
  return Describe
}
function describe_js9 () { // 临阵磨枪
  var Describe = {}
  Describe.name = 'js9'
  return Describe
}
function describe_x95 () { // 花之锁
  var Describe = {}
  Describe.name = 'x95'
  return Describe
}
function describe_p90 () { // 灰鼠
  var Describe = {}
  Describe.name = 'p90'
  return Describe
}

// lib_decribe
lib_describe.set('attack', describe_attack()) // 普通攻击，特殊，没有归属编号

lib_describe.set('com_dmg_25', describe_property(['all'], ['dmg'], ['0.25'])) // 火力号令 25%
lib_describe.set('com_dmg_22', describe_property(['all'], ['dmg'], ['0.22'])) // 火力号令 22%
lib_describe.set('com_dmg_18', describe_property(['all'], ['dmg'], ['0.18'])) // 火力号令 18%
lib_describe.set('com_dmgN_35', describe_propertyN(['all'], ['dmg'], ['0.35'])) // 火力号令N 35%
lib_describe.set('com_dmgND_20', describe_propertyND(['all'], ['dmg'], ['0.2'])) // 火力号令ND 20%
lib_describe.set('com_rof_25', describe_property(['all'], ['rof'], ['0.25'])) // 突击号令 25%
lib_describe.set('com_rof_22', describe_property(['all'], ['rof'], ['0.22'])) // 突击号令 22%
lib_describe.set('com_rof_20', describe_property(['all'], ['rof'], ['0.20'])) // 突击号令 20%
lib_describe.set('com_acu_100', describe_property(['all'], ['acu'], ['1'])) // 精确号令 100%
lib_describe.set('com_acuN_90', describe_propertyN(['all'], ['acu'], ['0.9'])) // 照明弹 90%
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit'], ['0.2/0.2'])) // 穿刺号令 20%/20%
lib_describe.set('com_dmgcrit_2', describe_property(['all'], ['dmg/crit'], ['0.1/0.35'])) // 歼灭号令 10%/35%
lib_describe.set('colt', describe_colt()) // 决斗幸存者
lib_describe.set('python_dmg', describe_property(['bloall'], ['dmg'], ['0.06'])) // 蟒蛇：各种复读
lib_describe.set('python_rof', describe_property(['bloall'], ['rof'], ['0.06']))
lib_describe.set('python_acu', describe_property(['bloall'], ['acu'], ['0.3']))
lib_describe.set('python_eva', describe_property(['bloall'], ['eva'], ['0.3']))
lib_describe.set('python_crit', describe_property(['bloall'], ['crit'], ['0.12']))
lib_describe.set('mp446', describe_property(['bloall'], ['rof'], ['0.2'])) // 潮音突袭
lib_describe.set('px4', describe_property(['bloall'], ['crit/critdmg'], ['-0.2/0.5'])) // 狩猎筹码
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

lib_describe.set('dmg_260', describe_property(['self'], ['dmg'], ['2.6'])) // 火力专注 260%
lib_describe.set('dmgeva_16040', describe_property(['self'], ['dmg/eva'], ['1.6/0.4'])) // 机动专注 160%/40%
lib_describe.set('type100', describe_property(['self'], ['dmg'], ['0.85'])) // 火力专注 85%
lib_describe.set('dmg_75', describe_property(['self'], ['dmg'], ['0.75'])) // 火力专注 75%
lib_describe.set('dmg_70', describe_property(['self'], ['dmg'], ['0.7'])) // 火力专注 70%
lib_describe.set('dmg_65', describe_property(['self'], ['dmg'], ['0.65'])) // 火力专注 65%
lib_describe.set('dmg_60', describe_property(['self'], ['dmg'], ['0.6'])) // 火力专注 60%
lib_describe.set('dmg_55', describe_property(['self'], ['dmg'], ['0.55'])) // 火力专注 55%
lib_describe.set('dmg_50', describe_property(['self'], ['dmg'], ['0.5'])) // 火力专注 50%
lib_describe.set('dmgN_200', describe_propertyN(['self'], ['dmg'], ['2'])) // 火力专注N 200%
lib_describe.set('dmgN_180', describe_propertyN(['self'], ['dmg'], ['1.8'])) // 火力专注N 180%
lib_describe.set('dmgND_70', describe_propertyND(['self'], ['dmg'], ['0.7'])) // 火力专注ND 70%
lib_describe.set('dmgND_60', describe_propertyND(['self'], ['dmg'], ['0.6'])) // 火力专注ND 60%
lib_describe.set('cz2000_N', describe_propertyN(['self'], ['acu/rof'], ['0.4/0.5'])) // 黎明气焰-N
lib_describe.set('cz2000_ND', describe_propertyND(['self'], ['dmg/crit'], ['0.65/0.25'])) // 黎明气焰-ND
lib_describe.set('a91_N', describe_propertyN(['self'], ['dmg/acu'], ['0.5/0.5'])) // A91杀伤榴弹N-属性加成
lib_describe.set('iws2000', describe_property(['self'], ['dmg/rof'], ['1.8/-0.35'])) // 巨鹰攻势
lib_describe.set('k31', describe_property(['self'], ['rof/acu'], ['0.8/-0.35'])) // 紧急流速
lib_describe.set('rof_75', describe_property(['self'], ['rof'], ['0.75'])) // 突击专注 75%
lib_describe.set('rof_50', describe_property(['self'], ['rof'], ['0.5'])) // 突击专注 50%
lib_describe.set('rof_45', describe_property(['self'], ['rof'], ['0.45'])) // 突击专注 45%
lib_describe.set('rof_15', describe_property(['self'], ['rof'], ['0.15'])) // 凛冽斗志 15%
lib_describe.set('critdmg_10', describe_property(['self'], ['critdmg'], ['0.1'])) // 明澈斗志 10%
lib_describe.set('art556', describe_property(['self'], ['dmg/rof'], ['0.85/0.25'])) // 冲锋专注 85%/25%
lib_describe.set('tar21', describe_property(['self'], ['dmg/rof'], ['0.75/0.25'])) // 冲锋专注 75%/25%
lib_describe.set('t91N', describe_propertyN(['self'], ['dmg/crit'], ['1.2/0.5'])) // 歼灭专注N 120%/50%
lib_describe.set('t91ND', describe_propertyND(['self'], ['dmg/crit'], ['0.5/0.25'])) // 歼灭专注ND 50%/25%
lib_describe.set('rfb', describe_property(['self'], ['dmg/acu'], ['0.8/0.4'])) // 至高枪弹
lib_describe.set('ak12', describe_property(['self'], ['dmg/rof/acu/crit'], ['0.35/0.35/0.35/0.35'])) // 雪狼之眼
lib_describe.set('eva_55_enemy', describe_property(['enemy'], ['eva'], ['-0.55'])) // 掩护压制 55%
lib_describe.set('eva_40_enemy', describe_property(['enemy'], ['eva'], ['-0.4'])) // 掩护压制 40%
lib_describe.set('evaN_75_enemy', describe_propertyN(['enemy'], ['eva'], ['-0.75'])) // 掩护压制 75%
lib_describe.set('evaND_40_enemy', describe_propertyND(['enemy'], ['eva'], ['-0.4'])) // 掩护压制 40%
lib_describe.set('acu_45_enemy', describe_property(['enemy'], ['acu'], ['-0.45'])) // 精确压制 45%
lib_describe.set('rof_30_enemy', describe_property(['enemy'], ['rof'], ['-0.3'])) // 突击压制 30%
lib_describe.set('srs', describe_property(['self'], ['dmg/acu'], ['0.6/0.4'])) // 狩猎示范

lib_describe.set('kar98k', describe_snipe(3.5, 1, 1, 2, 'armless/critless/evaless')) // 锁链射击
lib_describe.set('snipe_8', describe_snipe(8, 2, 0, 1, 'armless/critless/evaless')) // 8倍炮狙
lib_describe.set('snipe_6.5', describe_snipe(6.5, 1.5, 0, 1, 'armless/critless/evaless')) // 6.5倍炮狙
lib_describe.set('dsr50', describe_dsr50(6, 10, 2, 'armless/critless/evaless')) // 崩甲射击
lib_describe.set('js05', describe_snipe(2, 2, 0, 1, 'armless/critless/evaless')) // 贯通射击，目标数特殊变量设定
lib_describe.set('tac50', describe_snipe(4.5, 1, 0, 1, 'armless/crit/evaless')) // 枫华萤火
lib_describe.set('karm1891', describe_karm1891()) // 玛尔斯号角
lib_describe.set('karm9138', describe_karm9138()) // 墨尔斯假面
lib_describe.set('m82a1', describe_m82a1(4.2, 1, 0, 1, 'armless/critless/evaless')) // 伪神的启示
lib_describe.set('blst', describe_multihit(2)) // 猎鹰刑场
lib_describe.set('m200', describe_snipe(2, 0, 1.5, -1, 'arm/crit/evaless')) // 静默猎杀，狙击数=-1表示动态

lib_describe.set('vector', describe_bomb(7, 1, 3, 5)) // 燃烧弹-5星
lib_describe.set('klin', describe_bomb(6.5, 1, 3, 5)) // 燃烧弹-4星
lib_describe.set('pp19', describe_bomb(6.5, 0, 0, 0)) // 手榴弹-4星
lib_describe.set('vz61', describe_bomb(6, 1, 3, 5)) // 燃烧弹-3星

lib_describe.set('js9', describe_js9()) // 临阵磨枪
lib_describe.set('x95', describe_x95()) // 花之锁
lib_describe.set('p90', describe_p90()) // 灰鼠

lib_describe.set('m1911', describe_m1911()) // 绝境神枪手
lib_describe.set('python', describe_python()) // 无畏者之拥
lib_describe.set('cz75', describe_snipe(10, 2, 0, 1, 'armless/critless/evaless')) // 观测者直击
lib_describe.set('contender', describe_contender()) // 断罪者魔弹
lib_describe.set('hs2000', describe_property(['all'], ['dmg/acu'], ['0.35/0.35'])) // 反击者壁垒

lib_describe.set('grenade_15', describe_grenade(15)) // 15倍榴弹
lib_describe.set('grenade_12', describe_grenade(12)) // 12倍榴弹
lib_describe.set('grenade_10', describe_grenade(10)) // 10倍榴弹
lib_describe.set('grenade_5', describe_grenade(5)) // 5倍榴弹
lib_describe.set('zas', describe_zas()) // 夜枭轰鸣
lib_describe.set('k11', describe_k11()) // 恐惧榴弹
lib_describe.set('sop2', describe_sop2()) // 狂乱马戏

lib_describe.set('aug', describe_aug()) // 葬仪之雨
lib_describe.set('fal', describe_fal()) // 榴弹践踏
lib_describe.set('g11', describe_g11()) // 突击者之眼
lib_describe.set('k2', describe_k2()) // 热力过载
lib_describe.set('an94', describe_multihit(2)) // 人偶扳机
lib_describe.set('mdr', describe_mdr()) // 危机嗅探器
lib_describe.set('64howa', describe_64howa()) // 未来预警
lib_describe.set('m4', describe_m4()) // 伸冤者印记

lib_describe.set('mg4', describe_property(['self'], ['dmg'], ['0.35'])) // MG4蓄势待发，弹量实现于发动伤害增益
lib_describe.set('hk21', describe_property(['self'], ['dmg/acu'], ['0.4/0.3'])) // 无差别崩坏，弹量实现于发动伤害增益

// lib_skill
lib_skill.set(4, [createSkill(6, 12, 5, lib_describe.get('python'))]) // 被动通过特殊变量实现
lib_skill.set(96, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])
lib_skill.set(97, [createSkill(6, 12, 8, lib_describe.get('com_rof_25'))])
lib_skill.set(114, [createSkill(6, 12, 6, lib_describe.get('acu_45_enemy'))])
lib_skill.set(126, [createSkill(6, 12, 8, lib_describe.get('rof_30_enemy'))])
lib_skill.set(142, [createSkill(6, 12, 8, lib_describe.get('com_rofcrit_5'))])
lib_skill.set(166, [createSkill(6, 12, 0, lib_describe.get('cz75'))])
lib_skill.set(183, [createSkill(6, 12, 0, lib_describe.get('contender'))])
lib_skill.set(233, [createSkill(6, 12, 8, lib_describe.get('px4'))])
lib_skill.set(242, [createSkill(6, 12, 8, lib_describe.get('p22'))])
lib_skill.set(250, [createSkill(9, 9, 5, lib_describe.get('hs2000'))]) // 暂时不做护盾
lib_skill.set(1001, [
  createSkill(6, 12, 8, lib_describe.get('com_dmg_25')),
  createSkill(4, 4, -1, lib_describe.get('colt'))
])
lib_skill.set(1002, [createSkill(1, 12, 0, lib_describe.get('m1911'))])
lib_skill.set(1005, []) // 纳甘左轮被动实现于特殊变量表

lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))])
lib_skill.set(7, [createSkill(6, 12, 8, lib_describe.get('com_rof_22'))])
lib_skill.set(98, [createSkill(6, 12, 8, lib_describe.get('eva_55_enemy'))]) // 掩护压制 55%
lib_skill.set(99, [
  createSkill(6, 12, 8, lib_describe.get('com_dmgN_35')),
  createSkill(6, 12, 5, lib_describe.get('com_dmgND_20'))
]) // 火N
lib_skill.set(100, []) // 掩护号令
lib_skill.set(168, []) //
lib_skill.set(202, []) // 雷电
lib_skill.set(212, [createSkill(6, 12, 8, lib_describe.get('k5'))])
lib_skill.set(1091, [createSkill(6, 12, 4, lib_describe.get('mp446'))])

lib_skill.set(3, [])
lib_skill.set(14, [createSkill(6, 12, 8, lib_describe.get('com_rof_20'))])
lib_skill.set(132, [
  createSkill(6, 12, 8, lib_describe.get('evaN_75_enemy')),
  createSkill(6, 12, 5, lib_describe.get('evaND_40_enemy'))
])

lib_skill.set(2, []) //
lib_skill.set(5, []) //
lib_skill.set(9, [createSkill(3, 16, 15, lib_describe.get('com_acuN_90'))])
lib_skill.set(10, [createSkill(6, 12, 8, lib_describe.get('com_dmgcrit_2'))])
lib_skill.set(90, [createSkill(6, 12, 8, lib_describe.get('eva_40_enemy'))])
lib_skill.set(91, []) //
lib_skill.set(139, [createSkill(6, 12, 8, lib_describe.get('com_dmg_18'))])
lib_skill.set(141, [createSkill(6, 12, 8, lib_describe.get('com_acu_100'))])

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
lib_skill.set(215, [createSkill(4, 16, 10, lib_describe.get('mdr'))])
lib_skill.set(236, [createSkill(6, 16, 0, lib_describe.get('k11'))])
lib_skill.set(243, [createSkill(6, 16, 0, lib_describe.get('64howa'))])
lib_skill.set(1055, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(4, 16, 10, lib_describe.get('m4'))
])
lib_skill.set(1056, [createSkill(8, 16, 0, lib_describe.get('sop2'))])
lib_skill.set(1057, [createSkill(4, 16, 15, lib_describe.get('rof_50'))]) // 罪与罚可以单独在普攻实现，无需制作
lib_skill.set(1064, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(4, 16, 5, lib_describe.get('g36_eva'))
]) // 弧光契约，射速在react实现

lib_skill.set(54, []) // 闪光弹
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

lib_skill.set(171, [createSkill(6, 16, 5, lib_describe.get('lbll'))])

lib_skill.set(16, []) //
lib_skill.set(20, [createSkill(3, 16, 0, lib_describe.get('vector'))])
lib_skill.set(28, []) //
lib_skill.set(59, []) //
lib_skill.set(104, []) //
lib_skill.set(115, []) //
lib_skill.set(127, []) //
lib_skill.set(135, [createSkill(4, 8, 5, lib_describe.get('dmg_260'))])
lib_skill.set(143, []) //
lib_skill.set(213, []) // 心情链环由特殊设置决定
lib_skill.set(224, []) //
lib_skill.set(228, [createSkill(13, 16, 5, lib_describe.get('type100'))]) // 暂时不做护盾
lib_skill.set(234, [createSkill(6, 8, 5, lib_describe.get('js9'))])
lib_skill.set(245, [createSkill(6, 12, 5, lib_describe.get('p90'))])
lib_skill.set(251, [createSkill(4, 8, 5, lib_describe.get('x95'))])
lib_skill.set(1103, []) //

lib_skill.set(136, [createSkill(3, 16, 0, lib_describe.get('pp19'))])
lib_skill.set(177, [createSkill(3, 16, 0, lib_describe.get('klin'))])
lib_skill.set(203, [createSkill(6, 8, 5, lib_describe.get('dmgeva_16040'))])

lib_skill.set(27, [createSkill(3, 16, 0, lib_describe.get('vz61'))])

lib_skill.set(46, [createSkill(8, 16, 0, lib_describe.get('kar98k'))])
lib_skill.set(48, [createSkill(5, 8, 5, lib_describe.get('rof_75'))])
lib_skill.set(50, [createSkill(5, 8, 5, lib_describe.get('dmg_75'))])
lib_skill.set(53, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(128, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(148, [createSkill(6, 16, 10, lib_describe.get('iws2000'))])
lib_skill.set(179, [createSkill(15, 16, 0, lib_describe.get('dsr50'))])
lib_skill.set(192, [createSkill(6, 16, 0, lib_describe.get('js05'))])
lib_skill.set(197, [createSkill(6, 8, 7.5, lib_describe.get('karm1891'))])
lib_skill.set(198, [createSkill(6, 8, 0, lib_describe.get('karm9138'))])
lib_skill.set(204, [createSkill(8, 16, 6, lib_describe.get('blst'))])
lib_skill.set(211, [createSkill(6, 8, 5, lib_describe.get('srs'))])
lib_skill.set(222, [createSkill(10, 16, 0, lib_describe.get('tac50'))])
lib_skill.set(231, [createSkill(6, 8, 0, lib_describe.get('m82a1'))])
lib_skill.set(257, [createSkill(6, 16, 9, lib_describe.get('m200'))])
lib_skill.set(1039, [createSkill(10, 16, 0, lib_describe.get('snipe_6.5'))])

lib_skill.set(36, [createSkill(10, 16, 0, lib_describe.get('snipe_6.5'))])
lib_skill.set(247, [createSkill(5, 8, 5, lib_describe.get('k31'))])
lib_skill.set(1037, [
  createSkill(5, 8, 5, lib_describe.get('dmg_65')),
  createSkill(5, 8, 6, lib_describe.get('critdmg_10'))
])
lib_skill.set(1051, [
  createSkill(5, 8, 5, lib_describe.get('dmg_65')),
  createSkill(5, 8, 5, lib_describe.get('rof_15'))
])

lib_skill.set(37, [createSkill(5, 8, 5, lib_describe.get('dmg_60'))])

lib_skill.set(51, [createSkill(5, 8, 5, lib_describe.get('dmg_55'))])

lib_skill.set(109, []) // 连珠终结实现于攻击
lib_skill.set(112, []) // 狂躁血脉实现于换弹
lib_skill.set(125, [createSkill(8, 18, 8, lib_describe.get('mg4'))])
lib_skill.set(173, []) // 暴动宣告实现于攻击
lib_skill.set(208, [createSkill(8, 18, 8, lib_describe.get('hk21'))])
lib_skill.set(238, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))])
lib_skill.set(253, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))])
lib_skill.set(1075, [createSkill(8, 18, 6, lib_describe.get('dmg_75'))])

lib_skill.set(151, [])
lib_skill.set(157, [])
lib_skill.set(160, [])
lib_skill.set(163, [])
lib_skill.set(164, [])
lib_skill.set(188, [])
lib_skill.set(229, [])
