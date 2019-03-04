// 技能类，属性：前置冷却、冷却、持续时间、描述
// react函数根据技能的参数和描述，进行解释
// 非持续类[duration=0]，无限持续[duration=-1]
// 另外，攻击所有值全为0，单独在react作为最高优先判断
function createSkill (init_cld, cld, duration, Describe) {
  var Skill = {}
  Skill.init_cld = init_cld
  Skill.cld = cld
  Skill.duration = duration
  Skill.Describe = Describe
  return Skill
}

// 描述类，属性：描述名、特定属性……
// 普通攻击
function describe_attack () {
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

function describe_property_N (list_target, list_pro, list_value) { // 属性增益N
  var Describe = {}
  Describe.name = 'property_N'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}

function describe_grenade () { } // 单人榴弹
function describe_grenade_k11 () { } // 全体榴弹（K11）
function describe_grenade_sop2 () { } // 榴弹+狂乱马戏

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

function describe_m4_passive () { } // M4被动
function describe_ar15_passive () { } // AR-15被动

// lib_decribe
lib_describe.set('attack', describe_attack()) // 普通攻击，特殊，没有归属编号
lib_describe.set('com_dmg_25', describe_property(['all'], ['dmg/'], ['0.25/'])) // 火力号令 25%
lib_describe.set('com_dmg_22', describe_property(['all'], ['dmg/'], ['0.22/'])) // 火力号令 22%
lib_describe.set('com_dmgN_35', describe_property_N(['all'], ['dmg/'], ['0.35/'])) // 火力号令N 35%
lib_describe.set('com_dmgND_2', describe_property(['all'], ['dmg/'], ['0.2/'])) // 火力号令N-昼战 20%
lib_describe.set('com_rof_25', describe_property(['all'], ['rof/'], ['0.25/'])) // 突击号令 25%
lib_describe.set('com_rof_22', describe_property(['all'], ['rof/'], ['0.22/'])) // 突击号令 22%
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit/'], ['0.2/0.2/'])) // 穿刺号令_5
lib_describe.set('dmg_50', describe_property(['self'], ['dmg/'], ['0.5/'])) // 火力专注 50%
lib_describe.set('dmg_75', describe_property(['self'], ['dmg/'], ['0.75/'])) // 火力专注 75%
lib_describe.set('rof_50', describe_property(['self'], ['rof/'], ['0.5/'])) // 突击专注 50%
lib_describe.set('rof_75', describe_property(['self'], ['rof/'], ['0.75/'])) // 突击专注 75%

lib_describe.set('grenade', describe_grenade()) // 榴弹
lib_describe.set('grenade_k11', describe_grenade_k11()) // k11榴弹
lib_describe.set('grenade_sop2', describe_grenade_sop2()) // sop2榴弹

lib_describe.set('contender', describe_contender())
lib_describe.set('k5', describe_property(
  ['blohg', 'blosmg', 'bloar', 'blorf', 'blomg', 'blosg'],
  ['eva/', 'eva/', 'dmg/', 'dmg/', 'acu/', 'acu/'],
  ['0.4/', '0.4/', '0.22/', '0.22/', '0.8/', '0.8/'])) // K5_战地哲学馆
lib_describe.set('p22', describe_property(
  ['col1', 'col2'],
  ['dmg/', 'acu/eva/'],
  ['0.25/', '0.6/0.6/'])) // P22_决战序列_1/2列

lib_describe.set('python_active', describe_python_active())
lib_describe.set('python_passive', describe_python_passive())

lib_describe.set('m4_passive', describe_m4_passive())
lib_describe.set('ar15_passive', describe_ar15_passive())

// lib_skill
lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_22'))])

lib_skill.set(4, [
  createSkill(6, 12, 5, lib_describe.get('python_active')),
  createSkill(0, 0, 3, lib_describe.get('python_passive'))
])

lib_skill.set(62, [createSkill(4, 16, 10, lib_describe.get('dmg_75'))])

lib_skill.set(96, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])
lib_skill.set(97, [createSkill(6, 12, 8, lib_describe.get('com_rof_25'))])
lib_skill.set(183, [createSkill(6, 12, 0, lib_describe.get('contender'))])
lib_skill.set(1001, [createSkill(6, 12, 8, lib_describe.get('com_dmg_25'))])

lib_skill.set(1055, [
  createSkill(4, 16, 10, lib_describe.get('dmg_75')),
  createSkill(0, 0, 0, lib_describe.get('m4_passive'))
])
lib_skill.set(1056, [createSkill(8, 16, 0, lib_describe.get('grenade_sop2'))])
lib_skill.set(1057, [
  createSkill(4, 16, 15, lib_describe.get('rof_50')),
  createSkill(0, 0, 0, lib_describe.get('ar15_passive'))
])
