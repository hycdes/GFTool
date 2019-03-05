// 技能类，属性：前置冷却、冷却、持续时间、描述
// react函数根据技能的参数和描述，进行解释
// 非持续类[duration=0]，无限持续（被动）[duration=-1]
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

function describe_hs2000 () {
  var Describe = {}
  Describe.name = 'hs2000'
  return Describe
}

function describe_grenade (ratio) { // 单人榴弹
  var Describe = {}
  Describe.name = 'grenade'
  Describe.ratio = ratio
  return Describe
}
function describe_grenade_k11 () { // 全体榴弹（K11）
  var Describe = {}
  Describe.name = 'k11'
  return Describe
}
function describe_grenade_sop2 () { // 榴弹+狂乱马戏
  var Describe = {}
  Describe.name = 'sop2'
  return Describe
}

function describe_cz75 () {
  var Describe = {}
  Describe.name = 'cz75'
  return Describe
}
function describe_contender () {
  var Describe = {}
  Describe.name = 'contender'
  return Describe
}

function describe_python_active () { // 蟒蛇_主动
  var Describe = {}
  Describe.name = 'python_active'
  return Describe
}
function describe_python_passive () { // 蟒蛇_被动
  var Describe = {}
  Describe.name = 'python_passive'
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
function describe_m4_passive () { // M4被动
  var Describe = {}
  Describe.name = 'ar15_passive'
  return Describe
}
function describe_ar15_passive () { // AR-15被动
  var Describe = {}
  Describe.name = 'ar15_passive'
  return Describe
}

// lib_decribe
lib_describe.set('attack', describe_attack()) // 普通攻击，特殊，没有归属编号

lib_describe.set('com_dmg_25', describe_property(['all'], ['dmg'], ['0.25'])) // 火力号令 25%
lib_describe.set('com_dmg_22', describe_property(['all'], ['dmg'], ['0.22'])) // 火力号令 22%
lib_describe.set('com_dmgN_35', describe_property(['all'], ['dmg'], ['0.35'])) // 火力号令N 35%
lib_describe.set('com_dmgND_20', describe_property(['all'], ['dmg'], ['0.2'])) // 火力号令ND 20%
lib_describe.set('com_rof_25', describe_property(['all'], ['rof'], ['0.25'])) // 突击号令 25%
lib_describe.set('com_rof_22', describe_property(['all'], ['rof'], ['0.22'])) // 突击号令 22%
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit'], ['0.2/0.2'])) // 穿刺号令 20%/20%
lib_describe.set('px4', describe_property(['bloall'], ['crit/critdmg'], ['-0.2/0.5'])) // 狩猎筹码
lib_describe.set('dmg_75', describe_property(['self'], ['dmg'], ['0.75'])) // 火力专注 75%
lib_describe.set('dmg_50', describe_property(['self'], ['dmg'], ['0.5'])) // 火力专注 50%
lib_describe.set('dmgN_200', describe_property(['self'], ['dmg'], ['2'])) // 火力专注N 200%
lib_describe.set('dmgN_180', describe_property(['self'], ['dmg'], ['1.8'])) // 火力专注N 180%
lib_describe.set('dmgND_70', describe_property(['self'], ['dmg'], ['0.7'])) // 火力专注ND 70%
lib_describe.set('dmgND_60', describe_property(['self'], ['dmg'], ['0.6'])) // 火力专注ND 60%
lib_describe.set('rof_75', describe_property(['self'], ['rof'], ['0.75'])) // 突击专注 75%
lib_describe.set('rof_50', describe_property(['self'], ['rof'], ['0.5'])) // 突击专注 50%
lib_describe.set('art556', describe_property(['self'], ['dmg/rof'], ['0.85/0.25'])) // 冲锋专注 85%/25%
lib_describe.set('t91N', describe_property(['self'], ['dmg/crit'], ['1.2/0.5'])) // 歼灭专注N 120%/50%
lib_describe.set('t91ND', describe_property(['self'], ['dmg/crit'], ['0.5/0.25'])) // 歼灭专注ND 50%/25%
lib_describe.set('rfb', describe_property(['self'], ['dmg/acu'], ['0.8/0.4'])) // 至高枪弹
lib_describe.set('k5', describe_property(
  ['blohg', 'blosmg', 'bloar', 'blorf', 'blomg', 'blosg'],
  ['eva', 'eva', 'dmg', 'dmg', 'acu', 'acu'],
  ['0.4', '0.4', '0.22', '0.22', '0.8', '0.8'])) // k5_战地哲学馆
lib_describe.set('p22', describe_property(
  ['col1', 'col2'],
  ['dmg', 'acu/eva'],
  ['0.25', '0.6/0.6'])) // p22_决战序列_1/2列
lib_describe.set('acu_45_enemy', describe_property(['enemy'], ['acu'], ['-0.45'])) // 精确压制 45%
lib_describe.set('rof_30_enemy', describe_property(['enemy'], ['rof'], ['-0.3'])) // 突击压制 30%

lib_describe.set('python_active', describe_python_active()) // 无畏者之拥：主动
lib_describe.set('python_passive', describe_python_passive()) // 无畏者之拥：被动
lib_describe.set('cz75', describe_cz75()) // 观测者直击
lib_describe.set('contender', describe_contender()) // 断罪者魔弹
lib_describe.set('hs2000', describe_hs2000()) // 反击者壁垒

lib_describe.set('grenade_15', describe_grenade(15)) // 15倍榴弹
lib_describe.set('grenade_12', describe_grenade(12)) // 12倍榴弹
lib_describe.set('grenade_k11', describe_grenade_k11()) // k11榴弹
lib_describe.set('grenade_sop2', describe_grenade_sop2()) // sop2榴弹

lib_describe.set('aug', describe_aug()) // 葬仪之雨
lib_describe.set('fal', describe_fal()) // 榴弹践踏
lib_describe.set('g11', describe_g11()) // 突击者之眼
lib_describe.set('m4_passive', describe_m4_passive()) // 伸冤者印记
lib_describe.set('ar15_passive', describe_ar15_passive()) // 罪与罚

// lib_skill
lib_skill.set(4, [
  createSkill(6, 12, 5, lib_describe.get('python_active')),
  createSkill(0, 0, 3, lib_describe.get('python_passive'))
])
lib_skill.set(96, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])
lib_skill.set(97, [createSkill(6, 12, 8, lib_describe.get('com_rof_25'))])
lib_skill.set(114, [createSkill(6, 12, 6, lib_describe.get('acu_45_enemy'))])
lib_skill.set(126, [createSkill(6, 12, 8, lib_describe.get('rof_30_enemy'))])
lib_skill.set(142, [createSkill(6, 12, 8, lib_describe.get('com_rofcrit_5'))])
lib_skill.set(166, [createSkill(6, 12, 0, lib_describe.get('cz75'))])
lib_skill.set(183, [createSkill(6, 12, 0, lib_describe.get('contender'))])
lib_skill.set(233, [createSkill(6, 12, 8, lib_describe.get('px4'))])
lib_skill.set(242, [createSkill(6, 12, 8, lib_describe.get('p22'))])
lib_skill.set(250, [createSkill(6, 12, 0, lib_describe.get('hs2000'))])
lib_skill.set(1001, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])

lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))])

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
  createSkill(6, 16, 5, lib_describe.get('t91N')),
  createSkill(6, 16, 5, lib_describe.get('t91ND'))
])

lib_skill.set(1055, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(0, 0, 0, lib_describe.get('m4_passive'))
])
lib_skill.set(1056, [createSkill(8, 16, 0, lib_describe.get('grenade_sop2'))])
lib_skill.set(1057, [
  createSkill(4, 16, 15, lib_describe.get('rof_50')),
  createSkill(0, 0, -1, lib_describe.get('ar15_passive'))
])
