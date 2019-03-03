// 技能类，属性：前置冷却、冷却、持续时间、描述
function createSkill (init_cld, cld, duration, Describe) {
  var Skill = {}
  Skill.init_cld = init_cld
  Skill.cld = cld
  Skill.duration = duration
  Skill.Describe = Describe
  return Skill
}
// 描述类，属性：描述名、特定属性……
// 属性增益
function describe_property (list_target, list_pro, list_value) {
  var Describe = {}
  Describe.name = 'property'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
// 属性增益N
function describe_property_n (list_target, list_pro, list_value) {
  var Describe = {}
  Describe.name = 'property_n'
  Describe.list_target = list_target
  Describe.list_pro = list_pro // e.g. dmg/acu/
  Describe.list_value = list_value
  return Describe
}
// 蟒蛇_反馈
function describe_python_feedback () { }

// lib_dicribe
lib_describe.set('com_dmg_5', describe_property(['all'], ['dmg/'], ['0.25'])) // 火力号令_5
lib_describe.set('com_dmg_4', describe_property(['all'], ['dmg/'], ['0.22'])) // 火力号令_4
lib_describe.set('com_dmg_4n', describe_property_n(['all'], ['dmg/'], ['0.35'])) // 火力号令_4N
lib_describe.set('com_dmg_4nd', describe_property(['all'], ['dmg/'], ['0.2'])) // 火力号令_4N_昼战
lib_describe.set('com_rof_5', describe_property(['all'], ['rof/'], ['0.25'])) // 突击号令_5
lib_describe.set('com_rof_4', describe_property(['all'], ['rof/'], ['0.22'])) // 突击号令_4
lib_describe.set('com_rofcrit_5', describe_property(['all'], ['rof/crit/'], ['0.2', '0.2'])) // 穿刺号令_5
lib_describe.set('dmg_T_5', describe_property(['self'], ['dmg/'], ['0.75'])) // 火力专注T_5

lib_describe.set('k5', describe_property(
  ['blohg', 'blosmg', 'bloar', 'blorf', 'blomg', 'blosg'],
  ['eva/', 'eva/', 'dmg/', 'dmg/', 'acu/', 'acu/'],
  ['0.4/', '0.4/', '0.22/', '0.22/', '0.8/', '0.8/'])) // K5_战地哲学馆

lib_describe.set('p22', describe_property(
  ['col1', 'col2'],
  ['dmg/', 'acu/eva/'],
  ['0.25/', '0.6/0.6/'])) // P22_决战序列_1/2列

lib_describe.set('python_feedback', describe_property(['bloall']))

// lib_skill
lib_skill.set(1, [createSkill(6, 12, 8, lib_describe.get('com_dmg_4'))])

lib_skill.set(62, [createSkill(4, 16, 10, lib_describe.get('dmg_T_5'))])
lib_skill.set(1055, [createSkill(4, 16, 10, lib_describe.get('dmg_T_5'))])

lib_skill.set(96, [createSkill(6, 12, 8, lib_describe.get('com_dmg_5'))])
lib_skill.set(97, [createSkill(6, 12, 8, lib_describe.get('com_rof_5'))])

lib_skill.set(1001, [createSkill(6, 12, 8, lib_describe.get('com_dmg_5'))])
