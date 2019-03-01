function createSkill_property (list_property, list_rate, list_target, duration, init_cld, cld) {
  var Skill = {}
  Skill.property = list_property
  Skill.rate = list_rate
  // target = self, all, list_block
  Skill.target = list_target
  Skill.duration = duration
  Skill.init_cld = init_cld
  Skill.cld = cld
}
