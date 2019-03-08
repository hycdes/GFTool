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

function describe_colt () {
  var Describe = {}
  Describe.name = 'colt'
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
function describe_an94 () { // an94
  var Describe = {}
  Describe.name = 'an94'
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

// lib_decribe
lib_describe.set('attack', describe_attack()) // 普通攻击，特殊，没有归属编号

lib_describe.set('com_dmg_25', describe_property(['all'], ['dmg'], ['0.25'])) // 火力号令 25%
lib_describe.set('com_dmg_22', describe_property(['all'], ['dmg'], ['0.22'])) // 火力号令 22%
lib_describe.set('com_dmgN_35', describe_propertyN(['all'], ['dmg'], ['0.35'])) // 火力号令N 35%
lib_describe.set('com_dmgND_20', describe_propertyND(['all'], ['dmg'], ['0.2'])) // 火力号令ND 20%
lib_describe.set('com_rof_25', describe_property(['all'], ['rof'], ['0.25'])) // 突击号令 25%
lib_describe.set('com_rof_22', describe_property(['all'], ['rof'], ['0.22'])) // 突击号令 22%
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit'], ['0.2/0.2'])) // 穿刺号令 20%/20%
lib_describe.set('colt', describe_colt()) // 决斗幸存者
lib_describe.set('python_dmg', describe_property(['bloall'], ['dmg'], ['0.06']))
lib_describe.set('python_rof', describe_property(['bloall'], ['rof'], ['0.06']))
lib_describe.set('python_acu', describe_property(['bloall'], ['acu'], ['0.3']))
lib_describe.set('python_eva', describe_property(['bloall'], ['eva'], ['0.3']))
lib_describe.set('python_crit', describe_property(['bloall'], ['crit'], ['0.12']))
lib_describe.set('px4', describe_property(['bloall'], ['crit/critdmg'], ['-0.2/0.5'])) // 狩猎筹码
lib_describe.set('k5', describe_property(
  ['blohg', 'blosmg', 'bloar', 'blorf', 'blomg', 'blosg'],
  ['eva', 'eva', 'dmg', 'dmg', 'acu', 'acu'],
  ['0.4', '0.4', '0.22', '0.22', '0.8', '0.8'])) // k5_战地哲学馆
lib_describe.set('p22', describe_property(
  ['col1', 'col2'],
  ['dmg', 'acu/eva'],
  ['0.25', '0.6/0.6'])) // p22_决战序列_1/2列

lib_describe.set('dmg_75', describe_property(['self'], ['dmg'], ['0.75'])) // 火力专注 75%
lib_describe.set('dmg_50', describe_property(['self'], ['dmg'], ['0.5'])) // 火力专注 50%
lib_describe.set('dmgN_200', describe_propertyN(['self'], ['dmg'], ['2'])) // 火力专注N 200%
lib_describe.set('dmgN_180', describe_propertyN(['self'], ['dmg'], ['1.8'])) // 火力专注N 180%
lib_describe.set('dmgND_70', describe_propertyND(['self'], ['dmg'], ['0.7'])) // 火力专注ND 70%
lib_describe.set('dmgND_60', describe_propertyND(['self'], ['dmg'], ['0.6'])) // 火力专注ND 60%
lib_describe.set('iws2000', describe_property(['self'], ['dmg/rof'], ['1.8/-0.35'])) // 巨鹰攻势
lib_describe.set('rof_75', describe_property(['self'], ['rof'], ['0.75'])) // 突击专注 75%
lib_describe.set('rof_50', describe_property(['self'], ['rof'], ['0.5'])) // 突击专注 50%
lib_describe.set('art556', describe_property(['self'], ['dmg/rof'], ['0.85/0.25'])) // 冲锋专注 85%/25%
lib_describe.set('t91N', describe_propertyN(['self'], ['dmg/crit'], ['1.2/0.5'])) // 歼灭专注N 120%/50%
lib_describe.set('t91ND', describe_propertyND(['self'], ['dmg/crit'], ['0.5/0.25'])) // 歼灭专注ND 50%/25%
lib_describe.set('rfb', describe_property(['self'], ['dmg/acu'], ['0.8/0.4'])) // 至高枪弹
lib_describe.set('ak12', describe_property(['self'], ['dmg/rof/acu/crit'], ['0.35/0.35/0.35/0.35'])) // 雪狼之眼
lib_describe.set('acu_45_enemy', describe_property(['enemy'], ['acu'], ['-0.45'])) // 精确压制 45%
lib_describe.set('rof_30_enemy', describe_property(['enemy'], ['rof'], ['-0.3'])) // 突击压制 30%
lib_describe.set('srs', describe_property(['self'], ['dmg/acu'], ['0.6/0.4'])) // 狩猎示范

lib_describe.set('kar98k', describe_snipe(3.5, 1, 1, 2, 'armless/critless/evaless')) // 锁链射击
lib_describe.set('snipe_8', describe_snipe(8, 2, 0, 1, 'armless/critless/evaless')) // 8倍炮狙
lib_describe.set('snipe_6.5', describe_snipe(6.5, 1.5, 0, 1, 'armless/critless/evaless')) // 6.5倍炮狙
lib_describe.set('dsr50', describe_dsr50(6, 10, 2, 'armless/critless/evaless')) // 崩甲射击
lib_describe.set('js05', describe_snipe(2, 2, 0, 1, 'armless/critless/evaless')) // 贯通射击，目标数特殊变量设定
lib_describe.set('tac50', describe_snipe(4.5, 1, 0, 1, 'armless/crit/evaless')) // 枫华萤火

lib_describe.set('python', describe_python()) // 无畏者之拥
lib_describe.set('cz75', describe_snipe(10, 2, 0, 1, 'armless/critless/evaless')) // 观测者直击
lib_describe.set('contender', describe_contender()) // 断罪者魔弹
lib_describe.set('hs2000', describe_property(['all'], ['dmg/acu'], ['0.35/0.35'])) // 反击者壁垒

lib_describe.set('grenade_15', describe_grenade(15)) // 15倍榴弹
lib_describe.set('grenade_12', describe_grenade(12)) // 12倍榴弹
lib_describe.set('zas', describe_zas()) // 夜枭轰鸣
lib_describe.set('k11', describe_k11()) // 恐惧榴弹
lib_describe.set('sop2', describe_sop2()) // 狂乱马戏

lib_describe.set('aug', describe_aug()) // 葬仪之雨
lib_describe.set('fal', describe_fal()) // 榴弹践踏
lib_describe.set('g11', describe_g11()) // 突击者之眼
lib_describe.set('k2', describe_k2()) // 热力过载
lib_describe.set('an94', describe_an94()) // 人偶扳机
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

lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))])
lib_skill.set(7, [createSkill(6, 12, 8, lib_describe.get('com_rof_22'))])
lib_skill.set(98, []) // 掩护压制
lib_skill.set(99, []) // 火N
lib_skill.set(100, []) // 掩护号令
lib_skill.set(168, [])
lib_skill.set(202, [])
lib_skill.set(212, [createSkill(6, 12, 8, lib_describe.get('k5'))])

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
lib_skill.set(1064, [createSkill(4, 16, 10, lib_describe.get('dmg_75'))]) // 没写弧光契约

lib_skill.set(16, [])
lib_skill.set(20, [])
lib_skill.set(28, [])
lib_skill.set(59, [])
lib_skill.set(104, [])
lib_skill.set(115, [])
lib_skill.set(127, [])
lib_skill.set(135, [])
lib_skill.set(143, [])
lib_skill.set(213, [])
lib_skill.set(224, [])
lib_skill.set(228, [])
lib_skill.set(234, [])
lib_skill.set(245, [])
lib_skill.set(251, [])

lib_skill.set(46, [createSkill(8, 16, 0, lib_describe.get('kar98k'))])
lib_skill.set(48, [createSkill(5, 8, 5, lib_describe.get('rof_75'))])
lib_skill.set(50, [createSkill(5, 8, 5, lib_describe.get('dmg_75'))])
lib_skill.set(53, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(128, [createSkill(15, 16, 0, lib_describe.get('snipe_8'))])
lib_skill.set(148, [createSkill(6, 16, 10, lib_describe.get('iws2000'))])
lib_skill.set(179, [createSkill(15, 16, 0, lib_describe.get('dsr50'))])
lib_skill.set(192, [createSkill(6, 16, 0, lib_describe.get('js05'))])
lib_skill.set(197, [])
lib_skill.set(198, [])
lib_skill.set(204, [])
lib_skill.set(211, [createSkill(6, 8, 5, lib_describe.get('srs'))])
lib_skill.set(222, [createSkill(10, 16, 0, lib_describe.get('tac50'))])
lib_skill.set(231, [])
lib_skill.set(1039, [createSkill(10, 16, 0, lib_describe.get('snipe_6.5'))])

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
