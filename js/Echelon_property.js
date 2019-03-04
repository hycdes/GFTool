Set_Special.set('can_add_python', true)
Set_Special.set('sun', 'daytime')

function reset_special () {
  Set_Special.set('can_add_python', true)
  Set_Special.set('sun', 'daytime')
}

function createAffect (str_affectArea, target, list_affectType, list_affectValue) {
  var Affect = {}
  Affect.area = str_affectArea // area = l/r/u/d/
  Affect.target = target // target = all, hg, ar, smg, rf, mg, sg
  Affect.affect_type = list_affectType // type = [dmg, rof, acu, eva, crit, cld, arm]
  Affect.affect_value = list_affectValue // list of value
  return Affect
}
function createProperty (dmg, acu, eva, rof, arm, hp, crit, cs) { // need to add at function: ap, critdmg, ff
  var Property = {}
  Property.hp = hp // health_point
  Property.eva = eva // evasion
  Property.arm = arm // armor
  Property.dmg = dmg // damage
  Property.rof = rof // rate_of_fire
  Property.acu = acu // accuracy
  Property.crit = crit // crit_rate
  Property.cs = cs // clip_size
  return Property
}
function createProperty_equip (dmg, acu, eva, rof, arm, crit, critdmg, cs, ap) {
  var Property = {}
  Property.dmg = dmg
  Property.acu = acu
  Property.eva = eva
  Property.rof = rof
  Property.arm = arm
  Property.crit = crit
  Property.critdmg = critdmg
  Property.cs = cs
  Property.ap = ap
  return Property
}

// blockshape
shapeSet.push('u/d/l/r/') // #0 可乐类，=╬=
shapeSet.push('lu/ru/ld/rd/') // #1 绿毛类，X
shapeSet.push('lu/l/r/ld/') // #2 丝巾类，C, ump40
shapeSet.push('lu/l/r/ld/') // #3 MK23类，╠==
shapeSet.push('u/l/d/') // #4 纳甘类，=╣
shapeSet.push('u/r/d/') // #5 P08类，╠=
shapeSet.push('lu/u/ru/l/r/ld/d/rd/') // #6 竞争者类，▇
shapeSet.push('lu/r/ld/') // #7 C96类，>==
shapeSet.push('u/ru/l/r/ld/d/') // #8 蟒蛇
shapeSet.push('lu/u/r/ld/d/') // #9 灰熊类
shapeSet.push('lu/u/ld/d/') // #10 斧王cz75类，コ
shapeSet.push('u/ru/l/r/d/rd/') // #11 nz75
shapeSet.push('u/ru/r/d/rd/') // #12 维尔德、ro635
shapeSet.push('lu/u/l/ld/d/') // #13 59式、M4A1
shapeSet.push('ru/l/r/rd/') // #14 PSM
shapeSet.push('lu/u/ru/ld/d/rd/') // #15 P7
shapeSet.push('l/ld/d/ldd/') // #16 风暴Px4
shapeSet.push('lu/ru/r/ld/rd/') // #17 格洛克
shapeSet.push('luu/lu/u/ru/l/') // #18 P22
shapeSet.push('luu/uu/ruu/lu/u/ru/') // #19 HS2000
shapeSet.push('lu/u/l/r/d/') // #20 TEC9
shapeSet.push('lu/u/l/r/ld/d/') // #21 K5
shapeSet.push('u/rru/d/rrd/') // #22 spitfire
shapeSet.push('lu/ru/l/r/') // #23 杰里科

shapeSet.push('lu/ld/') // #24 汤哥 
shapeSet.push('l/') // #25 vector 
shapeSet.push('lu/l/ld/') // #26 旋风
shapeSet.push('u/d/') // #27 老李、uzi、利贝罗勒、g28
shapeSet.push('l/ld/') // #28 z62
shapeSet.push('lu/l/') // #29 ots39
shapeSet.push('l/ldd/') // #30 TMP
shapeSet.push('l/ld/ldd/') // #31 JS9、X95

shapeSet.push('ru/rd/') // #32 G41
shapeSet.push('r/') // #33 G11、NTW、WA2000
shapeSet.push('ru/r/rd/') // #34 FAL、闪电、AR15、狗子
shapeSet.push('u/') // #35 As Val
shapeSet.push('d/') // #36 AK-47
shapeSet.push('r/rd/') // #37 G36
shapeSet.push('rd/') // #38 FAMAS
shapeSet.push('ru/') // #39 FNC、97式
shapeSet.push('ru/r/') // #40 ots12
shapeSet.push('r/rdd/') // #41 T-91
shapeSet.push('r/rd/rdd/') // #42 AN-94
shapeSet.push('ruu/ru/r/') // #43 AK-12

shapeSet.push('r/rr/') // #44 DSR-50
shapeSet.push('d/rd/') // #45 T5000
shapeSet.push('uu/u/') // #46 卡姐
shapeSet.push('d/dd/') // #47 卡妹

shapeSet.push('rr/') // #48 BAR、老王：最右1格
shapeSet.push('rr/rrdd/') // #49 m60
shapeSet.push('rr/rrd/') // #50 pineapple
shapeSet.push('rruu/') // #51 m1919a4
shapeSet.push('rruu/rr/') // #52 dp28
shapeSet.push('rru/rrd/') // #53 mg5
shapeSet.push('rru/rr/') // #54 pk
shapeSet.push('rrdd/') // #55 mg42
shapeSet.push('rru/rr/rrd/') // #56 Negev
shapeSet.push('rr/rrd/rrdd/') // #57 pkp
shapeSet.push('rruu/rru/') // #58 type80
shapeSet.push('rruu/rru/rr/') // #59 type88

shapeSet.push('ll/') // #60 m1887：最左1格
shapeSet.push('llu/ll/lld/') // #61 S.A.T.8
shapeSet.push('llu/lld/') // #62 ksg!
shapeSet.push('lluu/ll/') // #63 m590
shapeSet.push('ll/lldd/') // #64 m500
shapeSet.push('llu/ll/') // #65 AA-12、M870：最左及其上
shapeSet.push('ll/lld/') // #66 m1897：最左及其下
shapeSet.push('lldd/') // #67 ks23
shapeSet.push('lluu/') // #68 rmb93
shapeSet.push('ll/lld/lldd/') // #69 FP-6

// lib_affect
lib_affect.set(1, createAffect(shapeSet[0], 'all', ['dmg', 'acu'], [0.24, 0.5]))
lib_affect.set(2, createAffect(shapeSet[0], 'all', ['rof', 'acu'], [0.2, 0.5]))
lib_affect.set(3, createAffect(shapeSet[2], 'all', ['dmg', 'eva'], [0.2, 0.2]))

lib_affect.set(5, createAffect(shapeSet[4], 'all', ['dmg', 'crit'], [0.32, 0.16]))

lib_affect.set(62, createAffect(shapeSet[32], 'smg', ['acu', 'eva'], [0.50, 0.15])) // G41

lib_affect.set(99, createAffect(shapeSet[3], 'all', ['dmg'], [0.36])) // Mk23

lib_affect.set(4, createAffect(shapeSet[8], 'all', ['dmg', 'crit'], [0.3, 0.2])) // python
lib_affect.set(96, createAffect(shapeSet[9], 'all', ['dmg', 'eva'], [0.30, 0.20])) // 灰熊
lib_affect.set(97, createAffect(shapeSet[1], 'all', ['rof', 'acu'], [0.30, 0.50])) // M950A
lib_affect.set(114, createAffect(shapeSet[12], 'all', ['dmg/rof/'], [0.2, 0.16])) // Welrod
lib_affect.set(126, createAffect(shapeSet[11], 'all', ['dmg/eva/'], [0.2, 0.3])) // NZ75
lib_affect.set(142, createAffect(shapeSet[2], 'all', ['rof/crit/'], [0.3, 0.2])) // 57
lib_affect.set(166, createAffect(shapeSet[10], 'all', ['dmg/rof/'], [0.16, 0.2])) // cz75
lib_affect.set(183, createAffect(shapeSet[6], 'all', ['dmg/crit/'], [0.3, 0.2])) // Contender
lib_affect.set(233, createAffect(shapeSet[16], 'all', ['dmg/acu/'], [0.24, 0.6])) // Px4
lib_affect.set(242, createAffect(shapeSet[18], 'all', ['dmg/acu/'], [0.3, 0.5])) // P22
lib_affect.set(250, createAffect(shapeSet[19], 'all', ['rof/eva/'], [0.3, 0.2])) // cz75
lib_affect.set(1001, createAffect(shapeSet[0], 'all', ['dmg', 'acu'], [0.24, 0.6])) // Colt-mod

lib_affect.set(1002, createAffect(shapeSet[0], 'all', ['rof', 'acu'], [0.24, 0.5]))
lib_affect.set(1005, createAffect(shapeSet[4], 'all', ['dmg', 'crit'], [0.36, 0.2]))

lib_affect.set(1055, createAffect(shapeSet[13], 'ar', ['dmg', 'crit'], [0.2, 0.32]))
lib_affect.set(1056, createAffect(shapeSet[34], 'smg', ['acu', 'eva'], [0.5, 0.15]))
lib_affect.set(1057, createAffect(shapeSet[34], 'smg', ['rof', 'eva'], [0.1, 0.15]))
lib_affect.set(1064, createAffect(shapeSet[37], 'smg', ['dmg', 'rof'], [0.3, 0.15]))

// T-doll property
// dmg, acu, eva, rof, arm, hp, crit, cs
// HG-5
lib_property.set(4, createProperty(40, 81, 82, 49, 0, 350, 0.4, -1))
lib_property.set(96, createProperty(38, 51, 66, 54, 0, 430, 0.2, -1))
lib_property.set(97, createProperty(30, 55, 68, 72, 0, 380, 0.2, -1))
lib_property.set(114, createProperty(28, 71, 90, 52, 0, 400, 0.4, -1))
lib_property.set(126, createProperty(33, 62, 74, 63, 0, 365, 0.2, -1))
lib_property.set(142, createProperty(31, 57, 97, 66, 0, 315, 0.2, -1))
lib_property.set(166, createProperty(34, 62, 74, 66, 0, 330, 0.2, -1))
lib_property.set(183, createProperty(46, 85, 82, 44, 0, 330, 0.4, -1))
lib_property.set(233, createProperty(36, 69, 93, 57, 0, 340, 0.2, -1))
lib_property.set(242, createProperty(28, 66, 110, 62, 0, 350, 0.2, -1))
lib_property.set(250, createProperty(33, 61, 87, 62, 0, 360, 0.2, -1))
lib_property.set(1001, createProperty(37, 51, 80, 50, 0, 415, 0.2, -1))

// HG-4
lib_property.set(1, createProperty(36, 49, 76, 47, 0, 400, 0.2, -1))
lib_property.set(7, createProperty(28, 44, 66, 65, 0, 415, 0.2, -1))
lib_property.set(98, createProperty(35, 61, 75, 48, 0, 380, 0.2, -1))
lib_property.set(99, createProperty(29, 53, 66, 63, 0, 400, 0.2, -1))
lib_property.set(100, createProperty(32, 62, 83, 61, 0, 315, 0.2, -1))

// HG-3
lib_property.set(3, createProperty(29, 56, 66, 61, 0, 380, 0.2, -1))
lib_property.set(6, createProperty(31, 47, 66, 52, 0, 430, 0.2, -1))
lib_property.set(8, createProperty(26, 61, 96, 61, 0, 315, 0.2, -1))
lib_property.set(11, createProperty(31, 46, 80, 55, 0, 350, 0.2, -1))
lib_property.set(12, createProperty(29, 41, 61, 62, 0, 415, 0.2, -1))
lib_property.set(13, createProperty(31, 46, 80, 61, 0, 315, 0.2, -1))
lib_property.set(14, createProperty(33, 45, 68, 52, 0, 400, 0.2, -1))
lib_property.set(15, createProperty(29, 58, 87, 61, 0, 315, 0.2, -1))
lib_property.set(113, createProperty(33, 58, 68, 59, 0, 350, 0.2, -1))
lib_property.set(123, createProperty(31, 56, 87, 61, 0, 300, 0.2, -1))
lib_property.set(220, createProperty(33, 53, 71, 59, 0, 350, 0.2, -1))
lib_property.set(221, createProperty(33, 48, 86, 52, 0, 350, 0.2, -1))

// HG-2
lib_property.set(2, createProperty(27, 50, 74, 57, 0, 365, 0.2, -1))
lib_property.set(5, createProperty(32, 46, 92, 44, 0, 350, 0.2, -1))
lib_property.set(9, createProperty(28, 49, 81, 57, 0, 330, 0.2, -1))
lib_property.set(10, createProperty(25, 59, 100, 63, 0, 285, 0.2, -1))
lib_property.set(90, createProperty(28, 53, 83, 61, 0, 300, 0.2, -1))
lib_property.set(91, createProperty(30, 53, 74, 59, 0, 330, 0.2, -1))

// AR-5
lib_property.set(62, createProperty(50, 48, 40, 77, 0, 635, 0.2, -1))
lib_property.set(65, createProperty(51, 46, 44, 76, 0, 605, 0.2, -1))
lib_property.set(73, createProperty(55, 57, 46, 75, 0, 605, 0.3, -1))
lib_property.set(106, createProperty(57, 43, 38, 72, 0, 660, 0.2, -1))
lib_property.set(119, createProperty(49, 54, 54, 75, 0, 550, 0.2, -1))
lib_property.set(122, createProperty(43, 44, 41, 95, 0, 605, 0.2, -1))
lib_property.set(129, createProperty(55, 52, 46, 71, 0, 580, 0.2, -1))
lib_property.set(130, createProperty(54, 51, 46, 72, 0, 580, 0.2, -1))
lib_property.set(205, createProperty(55, 67, 48, 76, 0, 580, 0.2, -1))
lib_property.set(206, createProperty(56, 62, 52, 78, 0, 550, 0.2, -1))
lib_property.set(236, createProperty(53, 54, 37, 76, 0, 675, 0.2, -1))

// AR-4
lib_property.set(54, createProperty(47, 46, 44, 75, 0, 605, 0.2, -1))
lib_property.set(55, createProperty(46, 48, 48, 79, 0, 550, 0.2, -1))
lib_property.set(56, createProperty(50, 49, 44, 78, 0, 550, 0.2, -1))
lib_property.set(57, createProperty(48, 50, 50, 77, 0, 525, 0.2, -1))
lib_property.set(60, createProperty(39, 46, 49, 75, 0, 660, 0.2, -1))
lib_property.set(64, createProperty(47, 44, 41, 72, 0, 635, 0.2, -1))
lib_property.set(66, createProperty(53, 35, 35, 69, 0, 690, 0.2, -1))
lib_property.set(69, createProperty(44, 48, 40, 81, 0, 605, 0.2, -1))
lib_property.set(72, createProperty(49, 48, 44, 79, 0, 525, 0.2, -1))
lib_property.set(118, createProperty(42, 49, 50, 78, 0, 580, 0.2, -1))

// AR-3
lib_property.set(58, createProperty(53, 35, 34, 65, 0, 660, 0.2, -1))
lib_property.set(61, createProperty(53, 46, 36, 61, 0, 635, 0.2, -1))
lib_property.set(70, createProperty(51, 46, 37, 73, 0, 550, 0.2, -1))
lib_property.set(105, createProperty(42, 54, 54, 72, 0, 525, 0.2, -1))
lib_property.set(108, createProperty(43, 49, 41, 75, 0, 580, 0.2, -1))
lib_property.set(120, createProperty(49, 48, 48, 73, 0, 495, 0.2, -1))

// AR-2
lib_property.set(63, createProperty(55, 46, 38, 61, 0, 550, 0.2, -1))
lib_property.set(68, createProperty(46, 43, 43, 78, 0, 470, 0.2, -1))
lib_property.set(71, createProperty(50, 44, 43, 66, 0, 525, 0.2, -1))
lib_property.set(74, createProperty(56, 41, 37, 59, 0, 580, 0.2, -1))
lib_property.set(107, createProperty(42, 44, 40, 81, 0, 525, 0.2, -1))

// SMG-5
lib_property.set(16, createProperty(31, 12, 56, 82, 0, 1190, 0.05, -1))
lib_property.set(20, createProperty(30, 11, 71, 101, 0, 925, 0.05, -1))
lib_property.set(28, createProperty(30, 13, 69, 91, 0, 990, 0.05, -1))
lib_property.set(59, createProperty(35, 13, 67, 83, 0, 970, 0.05, -1))
lib_property.set(104, createProperty(32, 13, 65, 83, 0, 1015, 0.05, -1))
lib_property.set(115, createProperty(28, 15, 56, 93, 0, 1100, 0.05, -1))

lib_property.set(251, createProperty(34, 13, 67, 90, 0, 970, 0.05, -1))

// SMG-4
lib_property.set(23, createProperty(25, 13, 86, 96, 0, 795, 0.05, -1))
lib_property.set(26, createProperty(30, 13, 68, 89, 0, 840, 0.05, -1))
lib_property.set(101, createProperty(26, 14, 76, 87, 0, 880, 0.05, -1))
lib_property.set(102, createProperty(27, 14, 75, 85, 0, 900, 0.05, -1))
lib_property.set(103, createProperty(28, 13, 74, 82, 0, 925, 0.05, -1))
lib_property.set(136, createProperty(26, 14, 74, 91, 0, 880, 0.05, -1))
lib_property.set(137, createProperty(27, 13, 68, 85, 0, 970, 0.05, -1))

// SMG-3
lib_property.set(18, createProperty(28, 11, 68, 91, 0, 880, 0.05, -1))
lib_property.set(19, createProperty(26, 13, 90, 92, 0, 705, 0.05, -1))
lib_property.set(22, createProperty(33, 13, 65, 74, 0, 880, 0.05, -1))
lib_property.set(27, createProperty(24, 13, 83, 95, 0, 795, 0.05, -1))
lib_property.set(29, createProperty(26, 15, 75, 78, 0, 925, 0.05, -1))
lib_property.set(32, createProperty(24, 11, 79, 104, 0, 795, 0.05, -1))
lib_property.set(116, createProperty(28, 15, 77, 77, 0, 840, 0.05, -1))

// SMG-2
lib_property.set(17, createProperty(30, 13, 67, 68, 0, 925, 0.05, -1))
lib_property.set(21, createProperty(26, 11, 56, 93, 0, 970, 0.05, -1))
lib_property.set(24, createProperty(30, 11, 74, 80, 0, 795, 0.05, -1))
lib_property.set(25, createProperty(29, 13, 58, 76, 0, 925, 0.05, -1))
lib_property.set(31, createProperty(32, 12, 52, 75, 0, 1015, 0.05, -1))
lib_property.set(33, createProperty(30, 12, 62, 74, 0, 925, 0.05, -1))
lib_property.set(92, createProperty(25, 12, 66, 88, 0, 880, 0.05, -1))
lib_property.set(93, createProperty(26, 15, 85, 75, 0, 750, 0.05, -1))
lib_property.set(94, createProperty(27, 11, 65, 93, 0, 880, 0.05, -1))

// RF-5
lib_property.set(46, createProperty(135, 78, 41, 34, 0, 420, 0.4, -1))
lib_property.set(48, createProperty(130, 82, 30, 39, 0, 440, 0.4, -1))
lib_property.set(50, createProperty(135, 78, 40, 36, 0, 400, 0.4, -1))
lib_property.set(53, createProperty(165, 75, 29, 30, 0, 465, 0.4, -1))
lib_property.set(197, createProperty(138, 85, 42, 34, 0, 400, 0.4, -1))
lib_property.set(198, createProperty(146, 90, 44, 34, 0, 365, 0.4, -1))
lib_property.set(257, createProperty(145, 96, 31, 34, 0, 440, 0.4, -1))

// RF-4
lib_property.set(36, createProperty(128, 72, 40, 32, 0, 420, 0.4, -1))
lib_property.set(39, createProperty(131, 85, 38, 30, 0, 440, 0.4, -1))
lib_property.set(42, createProperty(159, 75, 29, 28, 0, 465, 0.4, -1))
lib_property.set(43, createProperty(130, 80, 33, 37, 0, 400, 0.4, -1))
lib_property.set(117, createProperty(120, 73, 26, 39, 0, 465, 0.4, -1))

lib_property.set(252, createProperty(158, 78, 30, 31, 0, 440, 0.4, -1))

// RF-3
lib_property.set(34, createProperty(120, 62, 28, 37, 0, 440, 0.4, -1))
lib_property.set(35, createProperty(95, 77, 42, 38, 0, 420, 0.4, -1))
lib_property.set(37, createProperty(108, 71, 27, 43, 0, 420, 0.4, -1))
lib_property.set(38, createProperty(118, 74, 27, 35, 0, 465, 0.4, -1))
lib_property.set(44, createProperty(122, 74, 28, 37, 0, 420, 0.4, -1))
lib_property.set(49, createProperty(103, 65, 36, 36, 0, 465, 0.4, -1))
lib_property.set(95, createProperty(108, 60, 37, 31, 0, 510, 0.4, -1))
lib_property.set(255, createProperty(158, 78, 28, 27, 0, 450, 0.4, -1))

// RF-2
lib_property.set(40, createProperty(110, 59, 34, 34, 0, 420, 0.4, -1))
lib_property.set(41, createProperty(100, 59, 34, 34, 0, 465, 0.4, -1))
lib_property.set(47, createProperty(111, 58, 28, 40, 0, 400, 0.4, -1))
lib_property.set(51, createProperty(111, 61, 32, 32, 0, 465, 0.4, -1))
lib_property.set(52, createProperty(104, 52, 25, 38, 0, 485, 0.4, -1))

// MG-5
lib_property.set(109, createProperty(85, 27, 27, 120, 0, 990, 0.05, 11))
lib_property.set(112, createProperty(84, 35, 36, 139, 0, 870, 0.05, 9))
lib_property.set(173, createProperty(95, 31, 29, 127, 0, 825, 0.05, 10))

lib_property.set(253, createProperty(102, 31, 31, 116, 0, 950, 0.05, 10))

// MG-4
lib_property.set(75, createProperty(96, 31, 33, 114, 0, 785, 0.05, 8))
lib_property.set(78, createProperty(92, 26, 26, 111, 0, 910, 0.05, 9))
lib_property.set(85, createProperty(96, 21, 23, 84, 0, 950, 0.05, 11))
lib_property.set(88, createProperty(85, 26, 21, 130, 0, 990, 0.05, 10))
lib_property.set(121, createProperty(90, 25, 26, 112, 0, 870, 0.05, 10))

lib_property.set(254, createProperty(90, 26, 26, 115, 0, 845, 0.05, 11))

// MG-3
lib_property.set(77, createProperty(102, 18, 16, 100, 0, 1075, 0.05, 10))
lib_property.set(79, createProperty(79, 35, 36, 139, 0, 785, 0.05, 8))
lib_property.set(80, createProperty(96, 26, 22, 99, 0, 910, 0.05, 9))
lib_property.set(84, createProperty(82, 34, 34, 121, 0, 825, 0.05, 8))
lib_property.set(86, createProperty(92, 23, 26, 132, 0, 825, 0.05, 10))
lib_property.set(89, createProperty(89, 31, 28, 102, 0, 870, 0.05, 8))

// MG-2
lib_property.set(81, createProperty(95, 24, 22, 90, 0, 870, 0.05, 9))
lib_property.set(82, createProperty(88, 28, 31, 114, 0, 705, 0.05, 9))
lib_property.set(87, createProperty(85, 22, 25, 120, 0, 825, 0.05, 10))
lib_property.set(110, createProperty(87, 28, 33, 121, 0, 745, 0.05, 8))
lib_property.set(111, createProperty(79, 24, 22, 118, 0, 910, 0.05, 10))

// SG-5
lib_property.set(163, createProperty(30, 12, 11, 39, 22, 1345, 0.4, 5))
lib_property.set(164, createProperty(31, 13, 12, 28, 24, 1300, 0.4, 4))

// SG-4
lib_property.set(165, createProperty(31, 12, 11, 32, 21, 1375, 0.4, 4))

// SG-3

// to be selected

lib_property.set(124, createProperty(115, 65, 27, 39, 0, 440, 0.4, -1))
lib_property.set(125, createProperty(84, 34, 34, 139, 0, 910, 0.05, 9))

lib_property.set(127, createProperty(32, 12, 70, 88, 0, 970, 0.05, -1))
lib_property.set(128, createProperty(157, 81, 32, 32, 0, 440, 0.4, -1))

lib_property.set(131, createProperty(23, 13, 68, 93, 0, 970, 0.05, -1))
lib_property.set(132, createProperty(28, 61, 96, 61, 0, 300, 0.2, -1))
lib_property.set(133, createProperty(51, 40, 40, 73, 0, 495, 0.2, -1))
lib_property.set(134, createProperty(50, 44, 41, 71, 0, 550, 0.2, -1))
lib_property.set(135, createProperty(31, 12, 67, 90, 0, 970, 0.05, -1))

lib_property.set(138, createProperty(69, 37, 33, 54, 0, 605, 0.2, -1))
lib_property.set(139, createProperty(31, 51, 63, 58, 0, 350, 0.2, -1))
lib_property.set(140, createProperty(24, 67, 112, 65, 0, 285, 0.2, -1))
lib_property.set(141, createProperty(24, 60, 86, 64, 0, 330, 0.2, -1))
lib_property.set(142, createProperty(31, 57, 97, 66, 0, 315, 0.2, -1))
lib_property.set(143, createProperty(27, 14, 71, 97, 0, 970, 0.05, -1))
lib_property.set(144, createProperty(25, 13, 60, 88, 0, 1015, 0.05, -1))
lib_property.set(145, createProperty(157, 67, 32, 32, 0, 400, 0.4, -1))
lib_property.set(146, createProperty(119, 80, 29, 39, 0, 440, 0.4, -1))
lib_property.set(147, createProperty(130, 82, 39, 30, 0, 400, 0.4, -1))
lib_property.set(148, createProperty(162, 78, 29, 32, 0, 440, 0.4, -1))
lib_property.set(149, createProperty(89, 29, 28, 120, 0, 825, 0.05, 10))
lib_property.set(150, createProperty(24, 14, 79, 95, 0, 840, 0.05, -1))
lib_property.set(151, createProperty(39, 12, 12, 22, 22, 1375, 0.4, 4))
lib_property.set(152, createProperty(35, 11, 11, 26, 21, 1265, 0.4, 4))
lib_property.set(153, createProperty(33, 12, 12, 26, 22, 1265, 0.4, 4))
lib_property.set(154, createProperty(31, 11, 10, 29, 21, 1320, 0.4, 4))
lib_property.set(155, createProperty(32, 11, 10, 31, 22, 1320, 0.4, 4))
lib_property.set(156, createProperty(28, 14, 19, 30, 20, 1210, 0.4, 3))
lib_property.set(157, createProperty(29, 13, 12, 30, 24, 1265, 0.4, 5))
lib_property.set(158, createProperty(40, 9, 10, 25, 21, 1375, 0.4, 3))
lib_property.set(159, createProperty(30, 11, 13, 28, 22, 1210, 0.4, 4))
lib_property.set(160, createProperty(29, 12, 11, 35, 23, 1320, 0.4, 5))
lib_property.set(161, createProperty(33, 12, 13, 27, 20, 1320, 0.4, 3))
lib_property.set(162, createProperty(33, 11, 9, 32, 21, 1375, 0.4, 4))

lib_property.set(167, createProperty(34, 58, 80, 55, 0, 330, 0.2, -1))
lib_property.set(168, createProperty(33, 60, 71, 59, 0, 350, 0.2, -1))
lib_property.set(169, createProperty(30, 12, 68, 91, 0, 840, 0.05, -1))
lib_property.set(170, createProperty(65, 41, 36, 59, 0, 550, 0.2, -1))
lib_property.set(171, createProperty(64, 44, 40, 63, 0, 550, 0.2, -1))
lib_property.set(172, createProperty(69, 68, 49, 54, 0, 525, 0.3, -1))

lib_property.set(174, createProperty(123, 79, 41, 32, 0, 375, 0.4, -1))
lib_property.set(175, createProperty(53, 53, 49, 69, 0, 580, 0.2, -1))
lib_property.set(176, createProperty(28, 14, 77, 93, 0, 750, 0.05, -1))
lib_property.set(177, createProperty(25, 11, 74, 95, 0, 950, 0.05, -1))
lib_property.set(178, createProperty(26, 14, 60, 79, 0, 1060, 0.05, -1))
lib_property.set(179, createProperty(163, 87, 33, 31, 0, 410, 0.4, -1))
lib_property.set(180, createProperty(148, 71, 31, 32, 0, 420, 0.4, -1))
lib_property.set(181, createProperty(51, 44, 46, 76, 0, 620, 0.2, -1))
lib_property.set(182, createProperty(113, 65, 33, 32, 0, 485, 0.4, -1))
lib_property.set(183, createProperty(46, 85, 82, 44, 0, 330, 0.4, -1))
lib_property.set(184, createProperty(126, 85, 28, 36, 0, 450, 0.4, -1))
lib_property.set(185, createProperty(83, 38, 42, 149, 0, 705, 0.05, 8))
lib_property.set(186, createProperty(29, 58, 63, 61, 0, 365, 0.2, -1))
lib_property.set(187, createProperty(51, 48, 38, 75, 0, 580, 0.2, -1))
lib_property.set(188, createProperty(29, 13, 12, 33, 22, 1410, 0.4, 4))
lib_property.set(189, createProperty(29, 11, 10, 37, 22, 1300, 0.4, 5))
lib_property.set(190, createProperty(33, 12, 11, 27, 20, 1265, 0.4, 5))
lib_property.set(191, createProperty(26, 15, 64, 76, 0, 1015, 0.05, -1))
lib_property.set(192, createProperty(158, 88, 32, 31, 0, 450, 0.4, -1))
lib_property.set(193, createProperty(54, 44, 40, 76, 0, 620, 0.2, -1))
lib_property.set(194, createProperty(50, 51, 42, 78, 0, 635, 0.2, -1))
lib_property.set(195, createProperty(80, 34, 34, 135, 0, 745, 0.05, 9))
lib_property.set(196, createProperty(55, 48, 41, 74, 0, 605, 0.2, -1))

lib_property.set(199, createProperty(93, 26, 24, 118, 0, 870, 0.05, 10))
lib_property.set(200, createProperty(130, 90, 32, 35, 0, 410, 0.4, -1))
lib_property.set(201, createProperty(143, 77, 28, 30, 0, 440, 0.4, -1))
lib_property.set(202, createProperty(46, 57, 60, 37, 0, 430, 0.4, -1))
lib_property.set(203, createProperty(33, 13, 60, 82, 0, 990, 0.05, -1))
lib_property.set(204, createProperty(139, 92, 35, 36, 0, 410, 0.4, -1))

lib_property.set(207, createProperty(48, 44, 46, 78, 0, 550, 0.2, -1))
lib_property.set(208, createProperty(92, 29, 33, 135, 0, 845, 0.05, 10))
lib_property.set(209, createProperty(27, 14, 72, 74, 0, 950, 0.05, -1))
lib_property.set(210, createProperty(33, 50, 68, 53, 0, 380, 0.2, -1))
lib_property.set(211, createProperty(135, 82, 35, 35, 0, 435, 0.4, -1))
lib_property.set(212, createProperty(29, 52, 81, 62, 0, 330, 0.4, -1))
lib_property.set(213, createProperty(32, 15, 75, 87, 0, 925, 0.05, -1))
lib_property.set(215, createProperty(56, 50, 41, 76, 0, 595, 0.2, -1))
lib_property.set(216, createProperty(48, 46, 42, 79, 0, 540, 0.2, -1))
lib_property.set(217, createProperty(95, 79, 40, 40, 0, 405, 0.4, -1))
lib_property.set(218, createProperty(24, 11, 69, 92, 0, 925, 0.05, -1))

lib_property.set(222, createProperty(155, 83, 31, 32, 0, 435, 0.4, -1))
lib_property.set(223, createProperty(50, 45, 41, 73, 0, 550, 0.2, -1))
lib_property.set(224, createProperty(29, 15, 75, 83, 0, 950, 0.05, -1))
lib_property.set(225, createProperty(34, 16, 74, 64, 0, 900, 0.05, -1))
lib_property.set(226, createProperty(101, 82, 32, 46, 0, 405, 0.4, -1))
lib_property.set(227, createProperty(52, 50, 37, 75, 0, 565, 0.2, -1))
lib_property.set(228, createProperty(29, 14, 67, 76, 0, 1060, 0.05, -1))
lib_property.set(229, createProperty(33, 13, 12, 29, 23, 1320, 0.4, 4))
lib_property.set(230, createProperty(117, 80, 32, 37, 0, 405, 0.4, -1))
lib_property.set(231, createProperty(158, 77, 30, 34, 0, 440, 0.4, -1))
lib_property.set(232, createProperty(26, 62, 99, 60, 0, 320, 0.2, -1))
lib_property.set(234, createProperty(27, 15, 86, 89, 0, 900, 0.05, -1))
lib_property.set(235, createProperty(130, 83, 31, 35, 0, 435, 0.4, -1))

lib_property.set(237, createProperty(44, 46, 38, 80, 0, 580, 0.2, -1))
lib_property.set(238, createProperty(86, 33, 35, 126, 0, 825, 0.05, 10))
lib_property.set(239, createProperty(51, 47, 39, 71, 0, 580, 0.2, -1))
lib_property.set(240, createProperty(78, 34, 36, 142, 0, 810, 0.05, 9))
lib_property.set(241, createProperty(158, 78, 28, 27, 0, 450, 0.4, -1))
lib_property.set(242, createProperty(28, 66, 110, 62, 0, 350, 0.2, -1))
lib_property.set(243, createProperty(67, 62, 43, 63, 0, 625, 0.2, -1))
lib_property.set(244, createProperty(28, 46, 63, 63, 0, 415, 0.2, -1))
lib_property.set(245, createProperty(30, 15, 83, 93, 0, 950, 0.05, -1))
lib_property.set(247, createProperty(126, 78, 37, 39, 0, 390, 0.4, -1))
lib_property.set(248, createProperty(31, 50, 64, 60, 0, 380, 0.2, -1))
lib_property.set(249, createProperty(87, 31, 28, 122, 0, 845, 0.05, 9))

// EXTRA
lib_property.set(2001, createProperty(39, 60, 82, 65, 0, 300, 0.2, -1))
lib_property.set(2002, createProperty(36, 13, 9, 28, 23, 1375, 0.4, 5))
lib_property.set(2003, createProperty(31, 53, 76, 64, 0, 350, 0.2, -1))
lib_property.set(2004, createProperty(146, 70, 32, 34, 0, 420, 0.4, -1))
lib_property.set(2005, createProperty(132, 77, 33, 37, 0, 405, 0.4, -1))
lib_property.set(2006, createProperty(30, 47, 79, 54, 0, 415, 0.2, -1))
lib_property.set(2007, createProperty(58, 45, 42, 64, 0, 605, 0.2, -1))
lib_property.set(2008, createProperty(35, 11, 13, 27, 22, 1235, 0.4, 5))
lib_property.set(2009, createProperty(31, 62, 88, 61, 0, 330, 0.2, -1))
lib_property.set(2010, createProperty(31, 62, 88, 61, 0, 330, 0.2, -1))

lib_property.set(1001, createProperty(37, 51, 80, 50, 0, 415, 0.2, -1))
lib_property.set(1002, createProperty(29, 52, 78, 58, 0, 375, 0.2, -1))
lib_property.set(1005, createProperty(35, 48, 100, 45, 0, 360, 0.2, -1))
lib_property.set(1029, createProperty(29, 17, 79, 86, 0, 975, 0.05, -1))
lib_property.set(1037, createProperty(111, 74, 28, 44, 0, 430, 0.4, -1))
lib_property.set(1039, createProperty(136, 89, 40, 31, 0, 455, 0.4, -1))
lib_property.set(1044, createProperty(128, 81, 29, 37, 0, 430, 0.4, -1))
lib_property.set(1051, createProperty(120, 64, 33, 34, 0, 475, 0.4, -1))
lib_property.set(1055, createProperty(50, 50, 50, 80, 0, 565, 0.2, -1))
lib_property.set(1056, createProperty(52, 51, 46, 79, 0, 565, 0.3, -1))
lib_property.set(1057, createProperty(50, 55, 52, 78, 0, 540, 0.2, -1))
lib_property.set(1063, createProperty(58, 55, 40, 64, 0, 565, 0.2, -1))
lib_property.set(1064, createProperty(51, 48, 45, 76, 0, 650, 0.2, -1))
lib_property.set(1075, createProperty(101, 34, 34, 115, 0, 805, 0.05, 8))
lib_property.set(1081, createProperty(103, 27, 24, 92, 0, 890, 0.05, 10))
lib_property.set(1089, createProperty(97, 34, 29, 103, 0, 890, 0.05, 8))
lib_property.set(1091, createProperty(31, 57, 80, 60, 0, 340, 0.2, -1))
lib_property.set(1093, createProperty(27, 16, 92, 75, 0, 770, 0.05, -1))
lib_property.set(1094, createProperty(28, 12, 70, 93, 0, 905, 0.05, -1))
lib_property.set(1103, createProperty(29, 14, 77, 83, 0, 975, 0.05, -1))

// Equipment property
// dmg, acu, eva, rof, arm, crit, critdmg, cs, ap
// normal equipment
lib_property_equip.set(0, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(11, createProperty_equip(0, 0, 10, 0, 0, 0.2, 0, 0, 0))
lib_property_equip.set(12, createProperty_equip(0, 0, 0, 0, 0, 0.48, 0, 0, 0))
lib_property_equip.set(13, createProperty_equip(0, 30, 0, -1, 0, 0, 0, 0, 0))
lib_property_equip.set(14, createProperty_equip(8, 14, 0, -4, 0, 0.2, 0, 0, 0))
lib_property_equip.set(21, createProperty_equip(15, 0, 0, 0, 0, 0, 0, 0, -7))
lib_property_equip.set(22, createProperty_equip(20, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(23, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 180))
lib_property_equip.set(24, createProperty_equip(15, 0, 0, 0, 0, 0, 0.22, 0, 0))
lib_property_equip.set(25, createProperty_equip(2.01, 20, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(31, createProperty_equip(0, 0, 20, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(32, createProperty_equip(-6, 0, 35, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(33, createProperty_equip(0, 0, -2, 0, 11, 0, 0, 0, 0))
lib_property_equip.set(34, createProperty_equip(0, 0, 0, 0, 0, 0, 0.25, 0, 0))
lib_property_equip.set(35, createProperty_equip(0, 0, -2, 0, 0, 0, 0, 5, 0))
lib_property_equip.set(41, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0))
// exclusive equipment
