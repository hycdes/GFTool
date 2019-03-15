Set_Special.set('can_add_python', true)
Set_Special.set('can_add_karm1891', true)
Set_Special.set('sunrise', 'day')
function reset_special () {
  Set_Special.set('can_add_python', true)
  Set_Special.set('can_add_karm1891', true)
  // 能否添加蟒蛇
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (list_tdoll[i][1].ID === 4) {
        Set_Special.set('can_add_python', false)
        break
      }
    }
  }
  for (var i = 0; i < 9; i++) {
    if (list_tdoll[i][1] != null) {
      if (list_tdoll[i][1].ID === 197) {
        Set_Special.set('can_add_karm1891', false)
        break
      }
    }
  }
  // 昼夜
  if (daytime === 1) Set_Special.set('sunrise', 'day')
  else if (daytime === 2) Set_Special.set('sunrise', 'night')
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
function createProperty_equip (dmg, acu, eva, rof, arm, crit, critdmg, cs, ap, na) {
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
  Property.na = na
  return Property
}

lib_affect.set(1, createAffect('u/d/l/r/', 'all', ['dmg', 'acu'], [0.24, 0.5])) // 柯尔特左轮
lib_affect.set(2, createAffect('u/d/l/r/', 'all', ['rof', 'acu'], [0.2, 0.5])) // M1911
lib_affect.set(3, createAffect('lu/l/r/ld/', 'all', ['dmg', 'eva'], [0.2, 0.2])) // M9
lib_affect.set(4, createAffect('u/ru/l/r/ld/d/', 'all', ['dmg', 'crit'], [0.3, 0.2])) // 蟒蛇
lib_affect.set(5, createAffect('u/l/d/', 'all', ['dmg', 'crit'], [0.32, 0.16])) // 纳甘左轮
lib_affect.set(6, createAffect('lu/l/r/ld/', 'all', ['rof', 'acu'], [0.2, 0.5])) // 托卡列夫
lib_affect.set(7, createAffect('u/ru/d/rd/', 'all', ['dmg', 'rof'], [0.12, 0.24])) // 斯捷奇金
lib_affect.set(8, createAffect('lu/l/r/ld/', 'all', ['dmg', 'rof'], [0.2, 0.12])) // 马卡洛夫
lib_affect.set(9, createAffect('u/ru/d/rd/', 'all', ['rof', 'acu'], [0.14, 0.56])) // P38
lib_affect.set(10, createAffect('lu/l/r/ld/', 'all', ['rof', 'crit'], [0.32, 0.16])) // PPK
lib_affect.set(11, createAffect('u/r/d/', 'all', ['dmg', 'acu'], [0.14, 0.7])) // P08
lib_affect.set(12, createAffect('lu/r/ld/', 'all', ['acu', 'eva'], [0.64, 0.3])) // C96
lib_affect.set(13, createAffect('lu/u/ru/l/r/ld/d/rd/', 'all', ['acu', 'eva'], [0.5, 0.4])) // 92式
lib_affect.set(14, createAffect('lu/ru/ld/rd/', 'all', ['rof', 'eva'], [0.2, 0.2])) // 阿斯特拉左轮
lib_affect.set(15, createAffect('lu/ru/r/ld/rd/', 'all', ['acu', 'eva'], [0.64, 0.3])) // 格洛克17
lib_affect.set(16, createAffect('lu/ld/', 'ar', ['dmg', 'eva'], [0.12, 0.15])) // 汤姆森
lib_affect.set(17, createAffect('l/', 'ar', ['acu', 'eva'], [0.4, 0.3])) // M3
lib_affect.set(18, createAffect('lu/l/ld/', 'ar', ['dmg'], [0.12])) // MAC-10
lib_affect.set(19, createAffect('lu/ld/', 'ar', ['dmg', 'eva'], [0.1, 0.12])) // FMG-9
lib_affect.set(20, createAffect('l/', 'ar', ['rof'], [0.25])) // Vector
lib_affect.set(21, createAffect('u/d/', 'ar', ['dmg', 'rof'], [0.1, 0.05])) // PPSh-41
lib_affect.set(22, createAffect('lu/l/ld/', 'ar', ['dmg'], [0.12])) // PPS-43
lib_affect.set(23, createAffect('lu/ld/', 'ar', ['dmg', 'eva'], [0.08, 0.2])) // PP-90
lib_affect.set(24, createAffect('lu/ld/', 'ar', ['dmg', 'acu'], [0.1, 0.25])) // PP-2000
lib_affect.set(25, createAffect('lu/ld/', 'ar', ['acu', 'eva'], [0.25, 0.2])) // MP40
lib_affect.set(26, createAffect('lu/ld/', 'ar', ['acu', 'crit'], [0.4, 0.2])) // MP5
lib_affect.set(27, createAffect('l/', 'ar', ['rof', 'acu'], [0.15, 0.5])) // 蝎式
lib_affect.set(28, createAffect('lu/l/ld/', 'ar', ['rof', 'acu'], [0.15, 0.25])) // MP7
lib_affect.set(29, createAffect('lu/l/ld/', 'ar', ['acu', 'eva'], [0.1, 0.3])) // 司登MkⅡ
lib_affect.set(31, createAffect('lu/ld/', 'ar', ['dmg', 'rof'], [0.05, 0.1])) // 伯莱塔38型
lib_affect.set(32, createAffect('u/d/', 'ar', ['dmg'], [0.18])) // 微型乌兹
lib_affect.set(33, createAffect('lu/ld/', 'ar', ['rof', 'eva'], [0.1, 0.1])) // m45
lib_affect.set(34, createAffect('r/', 'hg', ['cld'], [0.12])) // M1加兰德
lib_affect.set(35, createAffect('u/d/', 'hg', ['cld'], [0.12])) // M1A1
lib_affect.set(36, createAffect('ru/', 'hg', ['cld'], [0.15])) // 春田
lib_affect.set(37, createAffect('ru/rd/', 'hg', ['cld'], [0.12])) // M14
lib_affect.set(38, createAffect('u/d/', 'hg', ['cld'], [0.12])) // M21
lib_affect.set(39, createAffect('d/', 'hg', ['cld'], [0.15])) // 莫辛-纳甘
lib_affect.set(40, createAffect('r/', 'hg', ['cld'], [0.1])) // SVT-38
lib_affect.set(41, createAffect('u/d/', 'hg', ['cld'], [0.1])) // 西蒙诺夫
lib_affect.set(42, createAffect('u/', 'hg', ['cld'], [0.15])) // PTRD
lib_affect.set(43, createAffect('ru/rd/', 'hg', ['cld'], [0.15])) // SVD
lib_affect.set(44, createAffect('rd/', 'hg', ['cld'], [0.12])) // SV-98
lib_affect.set(46, createAffect('ru/rd/', 'hg', ['cld'], [0.18])) // Kar98k
lib_affect.set(47, createAffect('ru/rd/', 'hg', ['cld'], [0.1])) // G43
lib_affect.set(48, createAffect('r/', 'hg', ['cld'], [0.18])) // WA2000
lib_affect.set(49, createAffect('u/d/', 'hg', ['cld'], [0.12])) // 56式半
lib_affect.set(50, createAffect('u/d/', 'hg', ['cld'], [0.18])) // 李-恩菲尔德
lib_affect.set(51, createAffect('ru/rd/', 'hg', ['cld'], [0.1])) // FN-49
lib_affect.set(52, createAffect('r/', 'hg', ['cld'], [0.1])) // BM59
lib_affect.set(53, createAffect('r/', 'hg', ['cld'], [0.18])) // NTW-20
lib_affect.set(54, createAffect('u/ru/d/rd/', 'smg', ['dmg', 'eva'], [0.1, 0.12])) // M16A1
lib_affect.set(55, createAffect('ru/u/r/rd/d/', 'ar', ['dmg', 'crit'], [0.18, 0.3])) // M4A1
lib_affect.set(56, createAffect('ru/r/rd/', 'smg', ['acu', 'eva'], [0.5, 0.12])) // M4 SOPMODII
lib_affect.set(57, createAffect('ru/r/rd/', 'smg', ['rof', 'eva'], [0.1, 0.12])) // ST AR-15
lib_affect.set(58, createAffect('d/', 'smg', ['eva'], [0.18])) // AK-47
lib_affect.set(59, createAffect('lu/l/ld/', 'ar', ['dmg', 'acu'], [0.15, 0.25])) // AK-74U
lib_affect.set(60, createAffect('u/', 'smg', ['dmg', 'rof'], [0.25, 0.1])) // AS Val
lib_affect.set(61, createAffect('r/', 'smg', ['eva', 'acu'], [0.2, 0.6])) // StG44
lib_affect.set(62, createAffect('ru/rd/', 'smg', ['acu', 'eva'], [0.5, 0.15])) // G41
lib_affect.set(63, createAffect('u/', 'smg', ['rof', 'acu'], [0.2, 0.5])) // G3
lib_affect.set(64, createAffect('r/rd/', 'smg', ['dmg', 'rof'], [0.3, 0.1])) // G36
lib_affect.set(65, createAffect('r/', 'smg', ['dmg'], [0.4])) // HK416
lib_affect.set(66, createAffect('r/', 'smg', ['eva', 'crit'], [0.15, 0.1])) // 56-1式
lib_affect.set(68, createAffect('u/', 'smg', ['dmg', 'acu'], [0.2, 0.5])) // L85A1
lib_affect.set(69, createAffect('rd/', 'smg', ['dmg', 'acu'], [0.25, 0.6])) // FAMAS
lib_affect.set(70, createAffect('ru/', 'smg', ['acu', 'eva'], [0.5, 0.12])) // FNC
lib_affect.set(71, createAffect('r/', 'smg', ['acu', 'eva'], [0.5, 0.1])) // 加利尔
lib_affect.set(72, createAffect('ru/rd/', 'smg', ['eva'], [0.18])) // TAR-21
lib_affect.set(73, createAffect('ru/u/r/rd/d/', 'all', ['dmg', 'acu'], [0.12, 0.2])) // AUG
lib_affect.set(74, createAffect('ru/rd/', 'smg', ['dmg', 'rof'], [0.2, 0.1])) // SIG-510
lib_affect.set(75, createAffect('rr/', 'sg', ['dmg', 'cld'], [0.15, 0.1])) // M1918
lib_affect.set(77, createAffect('rr/', 'sg', ['dmg'], [0.22])) // M2HB 
lib_affect.set(78, createAffect('rr/rrdd/', 'sg', ['dmg', 'rof'], [0.1, 0.08])) // M60
lib_affect.set(79, createAffect('rr/rrd/', 'sg', ['rof', 'acu'], [0.12, 0.1])) // M249 SAW
lib_affect.set(80, createAffect('rruu/', 'sg', ['acu', 'cld'], [0.25, 0.1])) // M1919A4
lib_affect.set(81, createAffect('rr/', 'sg', ['dmg', 'rof'], [0.1, 0.1])) // LWMMG
lib_affect.set(82, createAffect('rruu/rr/', 'sg', ['rof'], [0.15])) // DP28
lib_affect.set(84, createAffect('rru/rrd/', 'sg', ['rof'], [0.16])) // RPD
lib_affect.set(85, createAffect('rru/rr/', 'sg', ['dmg'], [0.18])) // PK
lib_affect.set(86, createAffect('rrdd/', 'sg', ['dmg'], [0.22])) // MG42
lib_affect.set(87, createAffect('rruu/', 'sg', ['dmg'], [0.2])) // MG34
lib_affect.set(88, createAffect('rru/rrd/', 'sg', ['dmg', 'acu'], [0.1, 0.15])) // MG3
lib_affect.set(89, createAffect('rr/rrdd/', 'sg', ['rof', 'acu'], [0.1, 0.12])) // 布伦
lib_affect.set(90, createAffect('ru/u/r/rd/d/', 'all', ['rof', 'acu'], [0.2, 0.4])) // FNP-9
lib_affect.set(91, createAffect('u/lu/l/d/ld/', 'all', ['dmg'], [0.28])) // MP-446
lib_affect.set(92, createAffect('l/', 'ar', ['dmg'], [0.2])) // Spectre M4
lib_affect.set(93, createAffect('lu/l/ld/', 'ar', ['eva'], [0.2])) // IDW
lib_affect.set(94, createAffect('l/', 'ar', ['rof'], [0.2])) // 64式
lib_affect.set(95, createAffect('r/', 'hg', ['cld'], [0.12])) // 汉阳造88式
lib_affect.set(96, createAffect('lu/u/r/ld/d/', 'all', ['dmg', 'eva'], [0.3, 0.2])) // 灰熊MkⅤ
lib_affect.set(97, createAffect('lu/ru/ld/rd/', 'all', ['rof', 'acu'], [0.3, 0.5])) // M950A
lib_affect.set(98, createAffect('lu/u/ld/d/', 'all', ['dmg', 'acu'], [0.12, 0.9])) // SPP-1
lib_affect.set(99, createAffect('lu/l/r/ld/', 'all', ['dmg'], [0.36])) // Mk23
lib_affect.set(100, createAffect('lu/u/ru/ld/d/rd/', 'all', ['rof', 'eva'], [0.2, 0.24])) // P7
lib_affect.set(101, createAffect('lu/l/ld/', 'ar', ['rof', 'acu'], [0.12, 0.3])) // UMP9
lib_affect.set(102, createAffect('u/ru/d/rd/', 'smg', ['crit'], [5.0])) // UMP40
lib_affect.set(103, createAffect('lu/l/ld/', 'ar', ['dmg', 'crit'], [0.18, 0.3])) // UMP45
lib_affect.set(104, createAffect('lu/l/ld/', 'ar', ['dmg', 'rof'], [0.1, 0.08])) // G36C
lib_affect.set(105, createAffect('ru/r/', 'smg', ['dmg', 'rof'], [0.15, 0.2])) // OTs-12
lib_affect.set(106, createAffect('ru/r/rd/', 'smg', ['eva'], [0.2])) // FAL
lib_affect.set(107, createAffect('r/', 'smg', ['dmg', 'eva'], [0.2, 0.1])) // F2000
lib_affect.set(108, createAffect('ru/rd/', 'smg', ['rof', 'acu'], [0.25, 0.5])) // CZ-805
lib_affect.set(109, createAffect('rru/rrd/', 'sg', ['dmg', 'arm'], [0.1, 0.1])) // MG5
lib_affect.set(110, createAffect('rru/rrd/', 'sg', ['acu'], [0.3])) // FG42
lib_affect.set(111, createAffect('rrdd/', 'sg', ['rof'], [0.2])) // AAT-52
lib_affect.set(112, createAffect('rru/rr/rrd/', 'sg', ['arm'], [0.2])) // 内格夫
lib_affect.set(113, createAffect('u/l/d/', 'all', ['dmg', 'acu'], [0.24, 0.4])) // 谢尔久科夫
lib_affect.set(114, createAffect('u/lu/l/d/ld/', 'all', ['dmg', 'rof'], [0.2, 0.16])) // 维尔德MkⅡ
lib_affect.set(115, createAffect('lu/ld/', 'ar', ['rof', 'acu'], [0.15, 0.3])) // 索米
lib_affect.set(116, createAffect('l/ld/', 'ar', ['dmg', 'eva'], [0.12, 0.1])) // Z-62
lib_affect.set(117, createAffect('u/d/', 'hg', ['cld'], [0.15])) // PSG-1
lib_affect.set(118, createAffect('ru/rd/', 'smg', ['rof', 'eva'], [0.1, 0.15])) // 9A-91
lib_affect.set(119, createAffect('ru/r/rd/', 'smg', ['rof', 'acu'], [0.25, 0.65])) // OTs-14
lib_affect.set(120, createAffect('rd/', 'smg', ['dmg', 'acu'], [0.25, 0.5])) // ARX-160
lib_affect.set(121, createAffect('rruu/rr/', 'sg', ['rof'], [0.18])) // Mk48
lib_affect.set(122, createAffect('r/', 'smg', ['dmg', 'eva'], [0.3, 0.1])) // G11
lib_affect.set(123, createAffect('u/r/d/', 'all', ['rof', 'eva'], [0.12, 0.36])) // P99
lib_affect.set(124, createAffect('ru/', 'hg', ['cld'], [0.12])) // Super SASS
lib_affect.set(125, createAffect('rru/rrd/', 'sg', ['acu', 'arm'], [0.12, 0.15])) // MG4
lib_affect.set(126, createAffect('u/ru/l/r/d/rd/', 'all', ['dmg', 'eva'], [0.2, 0.3])) // NZ75
lib_affect.set(127, createAffect('lu/ld/', 'ar', ['dmg'], [0.2])) // 79式
lib_affect.set(128, createAffect('r/', 'hg', ['cld'], [0.18])) // M99
lib_affect.set(129, createAffect('rd/', 'smg', ['dmg', 'eva'], [0.1, 0.18])) // 95式
lib_affect.set(130, createAffect('ru/', 'smg', ['rof', 'eva'], [0.1, 0.18])) // 97式
lib_affect.set(131, createAffect('l/', 'ar', ['acu'], [0.55])) // EVO 3
lib_affect.set(132, createAffect('ru/u/r/rd/d/', 'all', ['dmg', 'acu'], [0.2, 0.5])) // 59式
lib_affect.set(133, createAffect('r/', 'smg', ['dmg', 'rof'], [0.1, 0.2])) // 63式
lib_affect.set(134, createAffect('ru/', 'smg', ['rof', 'acu'], [0.16, 0.75])) // AR70
lib_affect.set(135, createAffect('lu/l/ld/', 'ar', ['rof', 'crit'], [0.18, 0.3])) // SR-3MP
lib_affect.set(136, createAffect('l/', 'ar', ['dmg'], [0.24])) // PP-19
lib_affect.set(137, createAffect('lu/ld/', 'ar', ['rof', 'acu'], [0.12, 0.3])) // PP-19-01
lib_affect.set(138, createAffect('r/', 'smg', ['dmg'], [0.35])) // 6P62
lib_affect.set(139, createAffect('u/d/l/r/', 'all', ['dmg', 'rof'], [0.16, 0.1])) // Bren Ten
lib_affect.set(140, createAffect('ru/l/r/rd/', 'all', ['acu', 'eva'], [0.56, 0.36])) // PSM
lib_affect.set(141, createAffect('lu/r/ld/', 'all', ['rof'], [0.28])) // USP Compact
lib_affect.set(142, createAffect('u/ur/d/dr/', 'all', ['rof', 'crit'], [0.3, 0.2])) // Five-seveN
lib_affect.set(143, createAffect('u/lu/l/d/ld/', 'ar', ['rof', 'acu'], [0.1, 0.35])) // RO635
lib_affect.set(144, createAffect('lu/ld/', 'ar', ['dmg', 'eva'], [0.1, 0.12])) // MT-9
lib_affect.set(145, createAffect('ru/rd/', 'hg', ['cld'], [0.12])) // OTs-44
lib_affect.set(146, createAffect('u/d/', 'hg', ['cld'], [0.15])) // G28
lib_affect.set(147, createAffect('r/', 'hg', ['cld'], [0.12])) // SSG 69
lib_affect.set(148, createAffect('u/d/', 'hg', ['cld'], [0.18])) // IWS 2000
lib_affect.set(149, createAffect('rru/rrd/', 'sg', ['rof', 'cld'], [0.15, 0.1])) // AEK-999
lib_affect.set(150, createAffect('lu/ld/', 'ar', ['rof', 'eva'], [0.15, 0.1])) // 希普卡
lib_affect.set(151, createAffect('ll/', 'mg', ['dmg', 'acu'], [0.2, 0.2])) // M1887
lib_affect.set(152, createAffect('ll/lld/', 'mg', ['acu'], [0.5])) // M1897
lib_affect.set(153, createAffect('llu/lld/', 'mg', ['dmg'], [0.18])) // M37
lib_affect.set(154, createAffect('ll/lldd/', 'mg', ['dmg'], [0.18])) // M500
lib_affect.set(155, createAffect('lluu/ll/', 'mg', ['acu'], [0.55])) // M590
lib_affect.set(156, createAffect('ll/', 'mg', ['dmg', 'acu'], [0.15, 0.2])) // Super-Shorty
lib_affect.set(157, createAffect('llu/lld/', 'mg', ['dmg'], [0.2])) // KSG
lib_affect.set(158, createAffect('lldd/', 'mg', ['dmg', 'acu'], [0.12, 0.3])) // KS-23
lib_affect.set(159, createAffect('lluu/', 'mg', ['dmg', 'acu'], [0.12, 0.3])) // RMB-93
lib_affect.set(160, createAffect('llu/ll/lld/', 'mg', ['dmg'], [0.15])) // Saiga-12
lib_affect.set(161, createAffect('llu/ll/lld/', 'mg', ['dmg'], [0.12])) // 97式霰
lib_affect.set(162, createAffect('llu/ll/', 'mg', ['dmg'], [0.2])) // SPAS-12
lib_affect.set(163, createAffect('llu/ll/', 'mg', ['dmg'], [0.22])) // AA-12
lib_affect.set(164, createAffect('ll/lld/lldd/', 'mg', ['dmg', 'acu'], [0.12, 0.1])) // FP-6
lib_affect.set(165, createAffect('lluu/ll/', 'mg', ['dmg'], [0.2])) // M1014
lib_affect.set(166, createAffect('lu/u/ld/d/', 'all', ['dmg', 'rof'], [0.16, 0.2])) // CZ75
lib_affect.set(167, createAffect('lu/ru/ld/rd/', 'all', ['dmg'], [0.32])) // HK45
lib_affect.set(168, createAffect('u/rru/d/rrd/', 'all', ['dmg', 'acu'], [0.3, 0.4])) // Spitfire
lib_affect.set(169, createAffect('l/', 'ar', ['dmg', 'rof'], [0.06, 0.1])) // SCW
lib_affect.set(170, createAffect('ru/rd/', 'smg', ['dmg'], [0.3])) // ASh-12.7
lib_affect.set(171, createAffect('u/d/', 'ar', ['dmg'], [0.2])) // 利贝罗勒
lib_affect.set(172, createAffect('ru/r/rd/', 'smg', ['acu', 'eva'], [0.3, 0.18])) // RFB
lib_affect.set(173, createAffect('rr/rrd/rrdd/', 'sg', ['rof', 'acu'], [0.15, 0.12])) // PKP
lib_affect.set(174, createAffect('ru/', 'hg', ['cld'], [0.12])) // 八一式马
lib_affect.set(175, createAffect('ru/rd/', 'smg', ['acu', 'eva'], [0.5, 0.15])) // ART556
lib_affect.set(176, createAffect('l/ldd/', 'ar', ['dmg', 'acu'], [0.15, 0.2])) // TMP
lib_affect.set(177, createAffect('l/', 'ar', ['rof'], [0.25])) // KLIN
lib_affect.set(178, createAffect('lu/ld/', 'ar', ['acu', 'eva'], [0.4, 0.15])) // F1
lib_affect.set(179, createAffect('r/rr/', 'hg', ['cld'], [0.18])) // DSR-50
lib_affect.set(180, createAffect('u/d/', 'hg', ['cld'], [0.15])) // PzB39
lib_affect.set(181, createAffect('r/rdd/', 'smg', ['dmg', 'eva'], [0.2, 0.12])) // T91
lib_affect.set(182, createAffect('rd/', 'hg', ['cld'], [0.12])) // wz.29
lib_affect.set(183, createAffect('lu/u/ru/l/r/ld/d/rd/', 'all', ['dmg', 'crit'], [0.3, 0.2])) // 竞争者
lib_affect.set(184, createAffect('d/rd/', 'hg', ['cld'], [0.15])) // T-5000
lib_affect.set(185, createAffect('rru/rr/rrd/', 'sg', ['dmg', 'cld'], [0.1, 0.15])) // 阿梅利
lib_affect.set(186, createAffect('u/r/d/', 'all', ['dmg', 'acu'], [0.2, 0.5])) // P226
lib_affect.set(187, createAffect('ru/rd/', 'smg', ['dmg', 'acu'], [0.15, 0.3])) // Ak 5
lib_affect.set(188, createAffect('llu/ll/lld/', 'mg', ['dmg', 'acu'], [0.1, 0.15])) // S.A.T.8
lib_affect.set(189, createAffect('llu/', 'mg', ['dmg', 'acu'], [0.15, 0.2])) // USAS-12
lib_affect.set(190, createAffect('ll/lldd/', 'mg', ['dmg'], [0.15])) // NS2000
lib_affect.set(191, createAffect('lu/l/ld/', 'ar', ['dmg', 'eva'], [0.08, 0.08])) // M12
lib_affect.set(192, createAffect('ru/rd/', 'hg', ['cld'], [0.18])) // JS05
lib_affect.set(193, createAffect('ru/r/', 'smg', ['dmg', 'acu'], [0.15, 0.25])) // T65
lib_affect.set(194, createAffect('ru/rd/', 'smg', ['dmg', 'acu'], [0.25, 0.5])) // K2
lib_affect.set(195, createAffect('rru/rr/', 'sg', ['dmg', 'cld'], [0.08, 0.12])) // HK23
lib_affect.set(196, createAffect('ru/rd/', 'smg', ['rof', 'eva'], [0.12, 0.15])) // Zas M21
lib_affect.set(197, createAffect('d/dd/', 'rf', ['cld'], [0.1])) // 卡尔卡诺M1891
lib_affect.set(198, createAffect('uu/u/', 'rf', ['cld'], [0.1])) // 卡尔卡诺M91/38
lib_affect.set(199, createAffect('rruu/rru/', 'sg', ['dmg', 'acu'], [0.1, 0.15])) // 80式
lib_affect.set(200, createAffect('ru/r/', 'hg', ['cld'], [0.15])) // XM3
lib_affect.set(201, createAffect('r/rd/', 'hg', ['cld'], [0.12])) // 猎豹M1
lib_affect.set(202, createAffect('lu/r/ld/', 'all', ['dmg'], [0.36])) // 雷电
lib_affect.set(203, createAffect('l/ldd/', 'ar', ['dmg', 'crit'], [0.2, 0.2])) // 蜜獾
lib_affect.set(204, createAffect('ru/rd/', 'hg', ['cld'], [0.18])) // 芭莉斯塔
lib_affect.set(205, createAffect('r/rd/rdd/', 'smg', ['acu', 'eva'], [0.55, 0.16])) // AN-94
lib_affect.set(206, createAffect('ruu/ru/r/', 'smg', ['dmg', 'rof'], [0.25, 0.15])) // AK-12
lib_affect.set(207, createAffect('r/', 'smg', ['rof', 'eva'], [0.1, 0.15])) // CZ2000
lib_affect.set(208, createAffect('rr/rrd/', 'sg', ['dmg', 'arm'], [0.15, 0.15])) // HK21
lib_affect.set(209, createAffect('lu/l/', 'ar', ['dmg'], [0.16])) // OTs-39
lib_affect.set(210, createAffect('lu/l/r/ld/', 'all', ['dmg', 'eva'], [0.2, 0.2])) // CZ52
lib_affect.set(211, createAffect('r/rd/', 'hg', ['cld'], [0.18])) // SRS
lib_affect.set(212, createAffect('lu/u/l/r/ld/d/', 'all', ['dmg', 'acu'], [0.3, 0.4])) // K5
lib_affect.set(213, createAffect('lu/l/ld/', 'ar', ['dmg', 'rof'], [0.15, 0.05])) // C-MS
lib_affect.set(215, createAffect('r/rd/', 'smg', ['dmg', 'acu'], [0.25, 0.65])) // MDR
lib_affect.set(216, createAffect('ru/', 'smg', ['dmg', 'eva'], [0.2, 0.15])) // XM8
lib_affect.set(217, createAffect('u/d/', 'hg', ['cld'], [0.12])) // SM-1
lib_affect.set(218, createAffect('lu/l/ld/', 'ar', ['rof'], [0.12])) // T77
lib_affect.set(220, createAffect('ru/u/r/rd/d/', 'all', ['dmg', 'eva'], [0.2, 0.2])) // MP-443
lib_affect.set(221, createAffect('u/ru/r/d/rd/', 'all', ['dmg', 'acu'], [0.24, 0.4])) // GSh-18
lib_affect.set(222, createAffect('r/rd/', 'hg', ['cld'], [0.18])) // TAC-50
lib_affect.set(223, createAffect('r/rd/', 'smg', ['dmg', 'acu'], [0.15, 0.25])) // Model L
lib_affect.set(224, createAffect('lu/ld/', 'ar', ['dmg', 'acu'], [0.12, 0.35])) // PM-06
lib_affect.set(225, createAffect('lu/ld/', 'ar', ['rof', 'eva'], [0.15, 0.1])) // Cx4 风暴
lib_affect.set(226, createAffect('r/rd/', 'hg', ['cld'], [0.15])) // Mk 12
lib_affect.set(227, createAffect('r/rd/rdd/', 'smg', ['dmg', 'eva'], [0.1, 0.15])) // A-91
lib_affect.set(228, createAffect('lu/ld/', 'ar', ['dmg', 'acu'], [0.12, 0.35])) // 樱花
lib_affect.set(229, createAffect('llu/ll/', 'mg', ['dmg', 'acu'], [0.18, 0.12])) // M870
lib_affect.set(230, createAffect('ru/rd/', 'hg', ['cld'], [0.12])) // OBR
lib_affect.set(231, createAffect('r/rd/', 'hg', ['cld'], [0.18])) // M82A1
lib_affect.set(232, createAffect('u/lu/l/d/ld/', 'all', ['dmg', 'rof'], [0.12, 0.2])) // MP-448
lib_affect.set(233, createAffect('l/ld/d/ldd/', 'all', ['dmg', 'acu'], [0.24, 0.6])) // Px4 风暴
lib_affect.set(234, createAffect('l/ld/ldd/', 'ar', ['rof', 'crit'], [0.18, 0.3])) // JS 9
lib_affect.set(235, createAffect('ru/rd/', 'hg', ['cld'], [0.15])) // SPR A3G
lib_affect.set(236, createAffect('ru/rd/', 'smg', ['dmg', 'eva'], [0.2, 0.15])) // K11
lib_affect.set(237, createAffect('ru/r/rd/', 'smg', ['dmg', 'acu'], [0.2, 0.55])) // SAR-21
lib_affect.set(238, createAffect('rruu/rru/rr/', 'sg', ['acu', 'arm'], [0.1, 0.15])) // 88式
lib_affect.set(239, createAffect('r/', 'smg', ['dmg', 'eva'], [0.12, 0.12])) // 03式
lib_affect.set(240, createAffect('rr/rrdd/', 'sg', ['dmg', 'acu'], [0.1, 0.1])) // Mk46
lib_affect.set(241, createAffect('ru/r/', 'hg', ['cld'], [0.12])) // RT-20
lib_affect.set(242, createAffect('luu/lu/u/ru/l/', 'all', ['dmg', 'acu'], [0.3, 0.5])) // P22
lib_affect.set(243, createAffect('r/rd/', 'smg', ['dmg', 'eva'], [0.18, 0.18])) // 64式自
lib_affect.set(244, createAffect('lu/u/l/r/d/', 'all', ['rof'], [0.32])) // TEC-9
lib_affect.set(245, createAffect('lu/l/ld/', 'ar', ['dmg', 'acu'], [0.12, 0.3])) // P90
lib_affect.set(247, createAffect('ru/r/', 'hg', ['cld'], [0.15])) // K31
lib_affect.set(248, createAffect('lu/ru/l/r/', 'all', ['dmg', 'acu'], [0.24, 0.5])) // 杰里科
lib_affect.set(249, createAffect('rruu/rru/', 'sg', ['acu', 'cld'], [0.18, 0.08])) // 62式
lib_affect.set(250, createAffect('luu/uu/ruu/lu/u/ru/', 'all', ['rof', 'eva'], [0.3, 0.2])) // HS2000
lib_affect.set(251, createAffect('l/ld/ldd/', 'ar', ['rof', 'acu'], [0.15, 0.25])) // X95
lib_affect.set(252, createAffect('ru/r/', 'hg', ['cld'], [0.15])) // KSVK
lib_affect.set(253, createAffect('rru/rr/rrd/', 'sg', ['acu', 'arm'], [0.1, 0.15])) // 刘易斯
lib_affect.set(254, createAffect('rr/rrdd/', 'sg', ['dmg', 'acu'], [0.1, 0.15])) // UKM-2000
lib_affect.set(255, createAffect('ru/r/', 'hg', ['cld'], [0.12])) // Scout
lib_affect.set(257, createAffect('rd/r/', 'hg', ['cld'], [0.18])) // M200
// Digimind update
lib_affect.set(1001, createAffect('u/d/l/r/', 'all', ['dmg', 'acu'], [0.24, 0.6])) // 柯尔特左轮改
lib_affect.set(1002, createAffect('u/d/l/r/', 'all', ['rof', 'acu'], [0.24, 0.5])) // M1911改
lib_affect.set(1005, createAffect('u/l/d/', 'all', ['dmg', 'crit'], [0.36, 0.2])) // 纳甘左轮改
lib_affect.set(1029, createAffect('lu/l/ld/', 'ar', ['acu', 'eva'], [0.3, 0.4])) // 司登MkⅡ改
lib_affect.set(1037, createAffect('ru/rd/', 'hg', ['cld'], [0.15])) // M14改
lib_affect.set(1039, createAffect('d/', 'hg', ['cld'], [0.18])) // 莫辛-纳甘改
lib_affect.set(1044, createAffect('rd/', 'hg', ['cld'], [0.15])) // SV-98改
lib_affect.set(1051, createAffect('ru/rd/', 'hg', ['cld'], [0.15])) // FN-49改
lib_affect.set(1055, createAffect('ru/u/r/rd/d/', 'ar', ['dmg', 'crit'], [0.2, 0.32])) // M4A1改
lib_affect.set(1056, createAffect('ru/r/rd/', 'smg', ['acu', 'eva'], [0.5, 0.15])) // M4 SOPMODII改
lib_affect.set(1057, createAffect('ru/r/rd/', 'smg', ['rof', 'eva'], [0.1, 0.15])) // ST AR-15改
lib_affect.set(1063, createAffect('u/r/', 'smg', ['rof', 'acu'], [0.25, 0.55])) // G3改
lib_affect.set(1064, createAffect('r/rd/', 'smg', ['dmg', 'rof'], [0.3, 0.15])) // G36改
lib_affect.set(1075, createAffect('rr/', 'sg', ['dmg', 'arm'], [0.18, 0.1])) // M1918改
lib_affect.set(1081, createAffect('rr/', 'sg', ['dmg', 'rof'], [0.15, 0.15])) // LWMMG改
lib_affect.set(1089, createAffect('rr/rrdd/', 'sg', ['rof', 'acu'], [0.1, 0.15])) // 布伦改
lib_affect.set(1091, createAffect('u/lu/l/d/ld/', 'all', ['dmg'], [0.36])) // MP-446改
lib_affect.set(1093, createAffect('lu/l/ld/', 'ar', ['eva', 'crit'], [0.2, 0.1])) // IDW改
lib_affect.set(1094, createAffect('l/', 'ar', ['rof'], [0.24])) // 64式改
lib_affect.set(1103, createAffect('lu/l/ld/', 'ar', ['dmg', 'crit'], [0.2, 0.3])) // UMP45改
// EXTRA
lib_affect.set(2001, createAffect('lu/u/ru/ld/d/rd/', 'all', ['rof', 'eva'], [0.3, 0.2])) // 诺爱尔
lib_affect.set(2002, createAffect('llu/lld/', 'mg', ['dmg', 'acu'], [0.15, 0.15])) // 艾尔菲尔特
lib_affect.set(2003, createAffect('u/ru/d/rd/', 'all', ['dmg', 'eva'], [0.2, 0.3])) // 琪亚娜
lib_affect.set(2004, createAffect('u/ru/', 'hg', ['cld'], [0.18])) // 雷电芽衣
lib_affect.set(2005, createAffect('d/rd/', 'hg', ['cld'], [0.18])) // 布洛妮娅
lib_affect.set(2006, createAffect('lu/u/ld/d/', 'all', ['rof', 'acu'], [0.3, 0.5])) // 德丽莎
lib_affect.set(2007, createAffect('r/', 'smg', ['dmg', 'rof'], [0.2, 0.2])) // 无量塔姬子
lib_affect.set(2008, createAffect('llu/lld/', 'mg', ['dmg', 'acu'], [0.2, 0.1])) // 希儿
lib_affect.set(2009, createAffect('lu/u/l/ld/d/', 'all', ['rof', 'acu'], [0.3, 0.5])) // 克莉尔
lib_affect.set(2010, createAffect('u/ru/r/d/rd/', 'all', ['dmg', 'acu'], [0.3, 0.5])) // 菲尔

// T-doll property
// dmg, acu, eva, rof, arm, hp, crit, cs
lib_property.set(1, createProperty(36, 49, 76, 47, 0, 400, 0.2, -1))
lib_property.set(2, createProperty(27, 50, 74, 57, 0, 365, 0.2, -1))
lib_property.set(3, createProperty(29, 56, 66, 61, 0, 380, 0.2, -1))
lib_property.set(4, createProperty(40, 81, 82, 49, 0, 350, 0.4, -1))
lib_property.set(5, createProperty(32, 46, 92, 44, 0, 350, 0.2, -1))
lib_property.set(6, createProperty(31, 47, 66, 52, 0, 430, 0.2, -1))
lib_property.set(7, createProperty(28, 44, 66, 65, 0, 415, 0.2, -1))
lib_property.set(8, createProperty(26, 61, 96, 61, 0, 315, 0.2, -1))
lib_property.set(9, createProperty(28, 49, 81, 57, 0, 330, 0.2, -1))
lib_property.set(10, createProperty(25, 59, 100, 63, 0, 285, 0.2, -1))
lib_property.set(11, createProperty(31, 46, 80, 55, 0, 350, 0.2, -1))
lib_property.set(12, createProperty(29, 41, 61, 62, 0, 415, 0.2, -1))
lib_property.set(13, createProperty(31, 46, 80, 61, 0, 315, 0.2, -1))
lib_property.set(14, createProperty(33, 45, 68, 52, 0, 400, 0.2, -1))
lib_property.set(15, createProperty(29, 58, 87, 61, 0, 315, 0.2, -1))
lib_property.set(16, createProperty(31, 12, 56, 82, 0, 1190, 0.05, -1))
lib_property.set(17, createProperty(30, 13, 67, 68, 0, 925, 0.05, -1))
lib_property.set(18, createProperty(28, 11, 68, 91, 0, 880, 0.05, -1))
lib_property.set(19, createProperty(26, 13, 90, 92, 0, 705, 0.05, -1))
lib_property.set(20, createProperty(30, 11, 71, 101, 0, 925, 0.05, -1))
lib_property.set(21, createProperty(26, 11, 56, 93, 0, 970, 0.05, -1))
lib_property.set(22, createProperty(33, 13, 65, 74, 0, 880, 0.05, -1))
lib_property.set(23, createProperty(25, 13, 86, 96, 0, 795, 0.05, -1))
lib_property.set(24, createProperty(30, 11, 74, 80, 0, 795, 0.05, -1))
lib_property.set(25, createProperty(29, 13, 58, 76, 0, 925, 0.05, -1))
lib_property.set(26, createProperty(30, 13, 68, 89, 0, 840, 0.05, -1))
lib_property.set(27, createProperty(24, 13, 83, 95, 0, 795, 0.05, -1))
lib_property.set(28, createProperty(30, 13, 69, 91, 0, 990, 0.05, -1))
lib_property.set(29, createProperty(26, 15, 75, 78, 0, 925, 0.05, -1))
lib_property.set(31, createProperty(32, 12, 52, 75, 0, 1015, 0.05, -1))
lib_property.set(32, createProperty(24, 11, 79, 104, 0, 795, 0.05, -1))
lib_property.set(33, createProperty(30, 12, 62, 74, 0, 925, 0.05, -1))
lib_property.set(34, createProperty(120, 62, 28, 37, 0, 440, 0.4, -1))
lib_property.set(35, createProperty(95, 77, 42, 38, 0, 420, 0.4, -1))
lib_property.set(36, createProperty(128, 72, 40, 32, 0, 420, 0.4, -1))
lib_property.set(37, createProperty(108, 71, 27, 43, 0, 420, 0.4, -1))
lib_property.set(38, createProperty(118, 74, 27, 35, 0, 465, 0.4, -1))
lib_property.set(39, createProperty(131, 85, 38, 30, 0, 440, 0.4, -1))
lib_property.set(40, createProperty(110, 59, 34, 34, 0, 420, 0.4, -1))
lib_property.set(41, createProperty(100, 59, 34, 34, 0, 465, 0.4, -1))
lib_property.set(42, createProperty(159, 75, 29, 28, 0, 465, 0.4, -1))
lib_property.set(43, createProperty(130, 80, 33, 37, 0, 400, 0.4, -1))
lib_property.set(44, createProperty(122, 74, 28, 37, 0, 420, 0.4, -1))
lib_property.set(46, createProperty(135, 78, 41, 34, 0, 420, 0.4, -1))
lib_property.set(47, createProperty(111, 58, 28, 40, 0, 400, 0.4, -1))
lib_property.set(48, createProperty(130, 82, 30, 39, 0, 440, 0.4, -1))
lib_property.set(49, createProperty(103, 65, 36, 36, 0, 465, 0.4, -1))
lib_property.set(50, createProperty(135, 78, 40, 36, 0, 400, 0.4, -1))
lib_property.set(51, createProperty(111, 61, 32, 32, 0, 465, 0.4, -1))
lib_property.set(52, createProperty(104, 52, 25, 38, 0, 485, 0.4, -1))
lib_property.set(53, createProperty(165, 75, 29, 30, 0, 465, 0.4, -1))
lib_property.set(54, createProperty(47, 46, 44, 75, 0, 605, 0.2, -1))
lib_property.set(55, createProperty(46, 48, 48, 79, 0, 550, 0.2, -1))
lib_property.set(56, createProperty(50, 49, 44, 78, 0, 550, 0.2, -1))
lib_property.set(57, createProperty(48, 50, 50, 77, 0, 525, 0.2, -1))
lib_property.set(58, createProperty(53, 35, 34, 65, 0, 660, 0.2, -1))
lib_property.set(59, createProperty(35, 13, 67, 83, 0, 970, 0.05, -1))
lib_property.set(60, createProperty(39, 46, 49, 75, 0, 660, 0.2, -1))
lib_property.set(61, createProperty(53, 46, 36, 61, 0, 635, 0.2, -1))
lib_property.set(62, createProperty(50, 48, 40, 77, 0, 635, 0.2, -1))
lib_property.set(63, createProperty(55, 46, 38, 61, 0, 550, 0.2, -1))
lib_property.set(64, createProperty(47, 44, 41, 72, 0, 635, 0.2, -1))
lib_property.set(65, createProperty(51, 46, 44, 76, 0, 605, 0.2, -1))
lib_property.set(66, createProperty(53, 35, 35, 69, 0, 690, 0.2, -1))
lib_property.set(68, createProperty(46, 43, 43, 78, 0, 470, 0.2, -1))
lib_property.set(69, createProperty(44, 48, 40, 81, 0, 605, 0.2, -1))
lib_property.set(70, createProperty(51, 46, 37, 73, 0, 550, 0.2, -1))
lib_property.set(71, createProperty(50, 44, 43, 66, 0, 525, 0.2, -1))
lib_property.set(72, createProperty(49, 48, 44, 79, 0, 525, 0.2, -1))
lib_property.set(73, createProperty(55, 57, 46, 75, 0, 605, 0.3, -1))
lib_property.set(74, createProperty(56, 41, 37, 59, 0, 580, 0.2, -1))
lib_property.set(75, createProperty(96, 31, 33, 114, 0, 785, 0.05, 8))
lib_property.set(77, createProperty(102, 18, 16, 100, 0, 1075, 0.05, 10))
lib_property.set(78, createProperty(92, 26, 26, 111, 0, 910, 0.05, 9))
lib_property.set(79, createProperty(79, 35, 36, 139, 0, 785, 0.05, 8))
lib_property.set(80, createProperty(96, 26, 22, 99, 0, 910, 0.05, 9))
lib_property.set(81, createProperty(95, 24, 22, 90, 0, 870, 0.05, 9))
lib_property.set(82, createProperty(88, 28, 31, 114, 0, 705, 0.05, 9))
lib_property.set(84, createProperty(82, 34, 34, 121, 0, 825, 0.05, 8))
lib_property.set(85, createProperty(96, 21, 23, 84, 0, 950, 0.05, 11))
lib_property.set(86, createProperty(92, 23, 26, 132, 0, 825, 0.05, 10))
lib_property.set(87, createProperty(85, 22, 25, 120, 0, 825, 0.05, 10))
lib_property.set(88, createProperty(85, 26, 21, 130, 0, 990, 0.05, 10))
lib_property.set(89, createProperty(89, 31, 28, 102, 0, 870, 0.05, 8))
lib_property.set(90, createProperty(28, 53, 83, 61, 0, 300, 0.2, -1))
lib_property.set(91, createProperty(30, 53, 74, 59, 0, 330, 0.2, -1))
lib_property.set(92, createProperty(25, 12, 66, 88, 0, 880, 0.05, -1))
lib_property.set(93, createProperty(26, 15, 85, 75, 0, 750, 0.05, -1))
lib_property.set(94, createProperty(27, 11, 65, 93, 0, 880, 0.05, -1))
lib_property.set(95, createProperty(108, 60, 37, 31, 0, 510, 0.4, -1))
lib_property.set(96, createProperty(38, 51, 66, 54, 0, 430, 0.2, -1))
lib_property.set(97, createProperty(30, 55, 68, 72, 0, 380, 0.2, -1))
lib_property.set(98, createProperty(35, 61, 75, 48, 0, 380, 0.2, -1))
lib_property.set(99, createProperty(29, 53, 66, 63, 0, 400, 0.2, -1))
lib_property.set(100, createProperty(32, 62, 83, 61, 0, 315, 0.2, -1))
lib_property.set(101, createProperty(26, 14, 76, 87, 0, 880, 0.05, -1))
lib_property.set(102, createProperty(27, 14, 75, 85, 0, 900, 0.05, -1))
lib_property.set(103, createProperty(28, 13, 74, 82, 0, 925, 0.05, -1))
lib_property.set(104, createProperty(32, 13, 65, 83, 0, 1015, 0.05, -1))
lib_property.set(105, createProperty(42, 54, 54, 72, 0, 525, 0.2, -1))
lib_property.set(106, createProperty(57, 43, 38, 72, 0, 660, 0.2, -1))
lib_property.set(107, createProperty(42, 44, 40, 81, 0, 525, 0.2, -1))
lib_property.set(108, createProperty(43, 49, 41, 75, 0, 580, 0.2, -1))
lib_property.set(109, createProperty(85, 27, 27, 120, 0, 990, 0.05, 11))
lib_property.set(110, createProperty(87, 28, 33, 121, 0, 745, 0.05, 8))
lib_property.set(111, createProperty(79, 24, 22, 118, 0, 910, 0.05, 10))
lib_property.set(112, createProperty(84, 35, 36, 139, 0, 870, 0.05, 9))
lib_property.set(113, createProperty(33, 58, 68, 59, 0, 350, 0.2, -1))
lib_property.set(114, createProperty(28, 71, 90, 52, 0, 400, 0.4, -1))
lib_property.set(115, createProperty(28, 15, 56, 93, 0, 1100, 0.05, -1))
lib_property.set(116, createProperty(28, 15, 77, 77, 0, 840, 0.05, -1))
lib_property.set(117, createProperty(120, 73, 26, 39, 0, 465, 0.4, -1))
lib_property.set(118, createProperty(42, 49, 50, 78, 0, 580, 0.2, -1))
lib_property.set(119, createProperty(49, 54, 54, 75, 0, 550, 0.2, -1))
lib_property.set(120, createProperty(49, 48, 48, 73, 0, 495, 0.2, -1))
lib_property.set(121, createProperty(90, 25, 26, 112, 0, 870, 0.05, 10))
lib_property.set(122, createProperty(43, 44, 41, 95, 0, 605, 0.2, -1))
lib_property.set(123, createProperty(31, 56, 87, 61, 0, 300, 0.2, -1))
lib_property.set(124, createProperty(115, 65, 27, 39, 0, 440, 0.4, -1))
lib_property.set(125, createProperty(84, 34, 34, 139, 0, 910, 0.05, 9))
lib_property.set(126, createProperty(33, 62, 74, 63, 0, 365, 0.2, -1))
lib_property.set(127, createProperty(32, 12, 70, 88, 0, 970, 0.05, -1))
lib_property.set(128, createProperty(157, 81, 32, 32, 0, 440, 0.4, -1))
lib_property.set(129, createProperty(55, 52, 46, 71, 0, 580, 0.2, -1))
lib_property.set(130, createProperty(54, 51, 46, 72, 0, 580, 0.2, -1))
lib_property.set(131, createProperty(23, 13, 68, 93, 0, 970, 0.05, -1))
lib_property.set(132, createProperty(28, 61, 96, 61, 0, 300, 0.2, -1))
lib_property.set(133, createProperty(51, 40, 40, 73, 0, 495, 0.2, -1))
lib_property.set(134, createProperty(50, 44, 41, 71, 0, 550, 0.2, -1))
lib_property.set(135, createProperty(31, 12, 67, 90, 0, 970, 0.05, -1))
lib_property.set(136, createProperty(26, 14, 74, 91, 0, 880, 0.05, -1))
lib_property.set(137, createProperty(27, 13, 68, 85, 0, 970, 0.05, -1))
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
lib_property.set(163, createProperty(30, 12, 11, 39, 22, 1345, 0.4, 5))
lib_property.set(164, createProperty(31, 13, 12, 28, 24, 1300, 0.4, 4))
lib_property.set(165, createProperty(31, 12, 11, 32, 21, 1375, 0.4, 4))
lib_property.set(166, createProperty(34, 62, 74, 66, 0, 330, 0.2, -1))
lib_property.set(167, createProperty(34, 58, 80, 55, 0, 330, 0.2, -1))
lib_property.set(168, createProperty(33, 60, 71, 59, 0, 350, 0.2, -1))
lib_property.set(169, createProperty(30, 12, 68, 91, 0, 840, 0.05, -1))
lib_property.set(170, createProperty(65, 41, 36, 59, 0, 550, 0.2, -1))
lib_property.set(171, createProperty(64, 44, 40, 63, 0, 550, 0.2, -1))
lib_property.set(172, createProperty(69, 68, 49, 54, 0, 525, 0.3, -1))
lib_property.set(173, createProperty(95, 31, 29, 127, 0, 825, 0.05, 10))
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
lib_property.set(197, createProperty(138, 85, 42, 34, 0, 400, 0.4, -1))
lib_property.set(198, createProperty(146, 90, 44, 34, 0, 365, 0.4, -1))
lib_property.set(199, createProperty(93, 26, 24, 118, 0, 870, 0.05, 10))
lib_property.set(200, createProperty(130, 90, 32, 35, 0, 410, 0.4, -1))
lib_property.set(201, createProperty(143, 77, 28, 30, 0, 440, 0.4, -1))
lib_property.set(202, createProperty(46, 57, 60, 37, 0, 430, 0.4, -1))
lib_property.set(203, createProperty(33, 13, 60, 82, 0, 990, 0.05, -1))
lib_property.set(204, createProperty(139, 92, 35, 36, 0, 410, 0.4, -1))
lib_property.set(205, createProperty(55, 67, 48, 76, 0, 580, 0.2, -1))
lib_property.set(206, createProperty(56, 62, 52, 78, 0, 550, 0.2, -1))
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
lib_property.set(220, createProperty(33, 53, 71, 59, 0, 350, 0.2, -1))
lib_property.set(221, createProperty(33, 48, 86, 52, 0, 350, 0.2, -1))
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
lib_property.set(233, createProperty(35, 69, 93, 57, 0, 340, 0.2, -1))
lib_property.set(234, createProperty(27, 15, 86, 89, 0, 900, 0.05, -1))
lib_property.set(235, createProperty(130, 83, 31, 35, 0, 435, 0.4, -1))
lib_property.set(236, createProperty(53, 54, 37, 76, 0, 675, 0.2, -1))
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
lib_property.set(250, createProperty(33, 61, 87, 62, 0, 360, 0.2, -1))
lib_property.set(251, createProperty(34, 13, 67, 90, 0, 970, 0.05, -1))
lib_property.set(252, createProperty(158, 78, 30, 31, 0, 440, 0.4, -1))
lib_property.set(253, createProperty(102, 31, 31, 116, 0, 950, 0.05, 10))
lib_property.set(254, createProperty(90, 26, 26, 115, 0, 845, 0.05, 11))
lib_property.set(255, createProperty(158, 78, 28, 27, 0, 450, 0.4, -1))
lib_property.set(257, createProperty(145, 96, 31, 34, 0, 440, 0.4, -1))
// Digimind update
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

// Equipment property
// dmg, acu, eva, rof, arm, crit, critdmg, cs, ap, nightablility
// normal equipment
lib_property_equip.set(0, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(11, createProperty_equip(0, 0, 10, 0, 0, 0.2, 0, 0, 0, 0))
lib_property_equip.set(12, createProperty_equip(0, 0, 0, 0, 0, 0.48, 0, 0, 0, 0))
lib_property_equip.set(13, createProperty_equip(0, 30, 0, -1, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(14, createProperty_equip(8, 14, 0, -4, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(21, createProperty_equip(15, 0, 0, 0, 0, 0, 0, 0, -7, 0))
lib_property_equip.set(22, createProperty_equip(20, 0, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(23, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 180, 0))
lib_property_equip.set(24, createProperty_equip(15, 0, 0, 0, 0, 0, 0.22, 0, 0, 0))
lib_property_equip.set(25, createProperty_equip(2.01, 20, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(31, createProperty_equip(0, 0, 20, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(32, createProperty_equip(-6, 0, 35, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(33, createProperty_equip(0, 0, -2, 0, 11, 0, 0, 0, 0, 0))
lib_property_equip.set(34, createProperty_equip(0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0))
lib_property_equip.set(35, createProperty_equip(0, 0, -2, 0, 0, 0, 0, 5, 0, 0))
lib_property_equip.set(41, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0, 100))
// exclusive equipment
lib_property_equip.set(166, createProperty_equip(0, 0, 0, 0, 0, 0.48, 0.44, 0, 0, 0))
lib_property_equip.set(146, createProperty_equip(0, 0, 0, 0, 0, 0.48, 0.2, 0, 0, 0))
lib_property_equip.set(169, createProperty_equip(4, 4, 0, 0, 0, 0.48, 0, 0, 0, 0))
lib_property_equip.set(165, createProperty_equip(8, 14, 0, 0, 0, 0.25, 0, 0, 0, 0))
lib_property_equip.set(236, createProperty_equip(0, 0, 0, 10, 0, 0, 0, 0, 195, 0))
lib_property_equip.set(326, createProperty_equip(-6, 0, 58, 0, 0, 0, 0, 0, 0, 0)) // mp5
lib_property_equip.set(354, createProperty_equip(0, -20, 10, -10, 20, 0, 0, 0, 0, 0)) // m16
lib_property_equip.set(362, createProperty_equip(5, 5, 20, 0, 0, 0, 0, 0, 0, 0)) // g41
lib_property_equip.set(1125, createProperty_equip(0, 36, 0, -1, 0, 0.25, 0, 0, 0, 0)) // mg4
lib_property_equip.set(3103, createProperty_equip(0, 0, 35, 0, 0, 0, 0.25, 0, 0, 0)) // UMP series
lib_property_equip.set(4118, createProperty_equip(8, 0, 0, 0, 0, 0, 0, 0, 0, 100))
lib_property_equip.set(11001, createProperty_equip(3, 0, 10, 0, 0, 0.2, 0, 0, 0, 0))
lib_property_equip.set(11005, createProperty_equip(0, 4, 14, 0, 0, 0.2, 0, 0, 0, 0))
lib_property_equip.set(11091, createProperty_equip(0, 8, 10, 0, 0, 0.2, 0, 0, 0, 0))
lib_property_equip.set(11029, createProperty_equip(0, 0, 15, 0, 0, 0.2, 0, 0, 0, 0)) // sten mod
lib_property_equip.set(11037, createProperty_equip(0, 10, 0, 0, 0, 0.48, 0, 0, 0, 0))
lib_property_equip.set(11039, createProperty_equip(0, 6, 0, 0, 0, 0.5, 0, 0, 0, 0))
lib_property_equip.set(11051, createProperty_equip(0, 0, 0, 5, 0, 0.48, 0, 0, 0, 0))
lib_property_equip.set(11056, createProperty_equip(12, 14, 0, -2, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(11057, createProperty_equip(0, 10, 0, 0, 0, 0, 0.2, 0, 0, 0))
lib_property_equip.set(11063, createProperty_equip(4, 0, 0, 0, 0, 0.48, 0, 0, 0, 0)) // g3 mod
lib_property_equip.set(11064, createProperty_equip(0, 8, 0, 0, 0, 0.48, 0, 0, 0, 0)) // g36 mod
lib_property_equip.set(11075, createProperty_equip(0, 30, 0, -1, 0, 0.1, 0, 0, 0, 0))
lib_property_equip.set(11094, createProperty_equip(0, 0, 15, 0, 0, 0.2, 0, 0, 0, 0)) // 64type mod
lib_property_equip.set(11103, createProperty_equip(0, 0, 15, 0, 0, 0.25, 0, 0, 0, 0))
lib_property_equip.set(21002, createProperty_equip(17, 0, 0, 0, 0, 0, 0, 0, -7, 0))
lib_property_equip.set(21057, createProperty_equip(25, -1, 0, 0, 0, 0, 0, 0, 0, 0))
lib_property_equip.set(31039, createProperty_equip(30, 0, 5, 0, 0, 0, 0.3, 0, 0, 0))
lib_property_equip.set(31055, createProperty_equip(5, 0, 0, 0, 15, 0, 0, 0, 0, 0))
lib_property_equip.set(31075, createProperty_equip(-2, 0, 0, -1, 0, 0, 0, 6, 0, 0))
lib_property_equip.set(31093, createProperty_equip(-6, 0, 37, 3, 0, 0, 0, 0, 0, 0)) // IDW mod
lib_property_equip.set(42009, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0, -100))
lib_property_equip.set(42010, createProperty_equip(0, 0, 0, 0, 0, 0, 0, 0, 0, -100))

function createFairy (name, list_property, list_value) {
  var Fairy = {}
  Fairy.name = name
  Fairy.property = list_property
  Fairy.value = list_value
  return Fairy
}
lib_fairy.set(1, createFairy('勇士妖精', 'dmg/acu/eva/arm', '0.25/0.8/0.4/0.1'))
lib_fairy.set(2, createFairy('暴怒妖精', 'dmg/critdmg/eva/arm', '0.15/0.4/0.4/0.1'))
lib_fairy.set(3, createFairy('盾甲妖精', 'dmg/critdmg/arm', '0.22/0.22/0.25'))
lib_fairy.set(4, createFairy('护盾妖精', 'dmg/acu/eva', '0.2/0.6/0.8'))
lib_fairy.set(5, createFairy('防御妖精', 'dmg/eva/arm', '0.22/0.8/0.2'))
lib_fairy.set(6, createFairy('嘲讽妖精', 'dmg/critdmg/acu/eva/arm', '0.18/0.25/0.58/0.28/0.08'))
lib_fairy.set(7, createFairy('狙击妖精', 'critdmg/acu/eva/arm', '0.36/0.88/0.28/0.15'))
lib_fairy.set(8, createFairy('炮击妖精', 'dmg/eva/arm', '0.55/0.56/0.06'))
lib_fairy.set(9, createFairy('空袭妖精', 'dmg/acu/eva/arm', '0.3/0.5/0.4/0.1'))
lib_fairy.set(10, createFairy('增援妖精', 'dmg/critdmg/eva/arm', '0.12/0.15/0.88/0.12'))
lib_fairy.set(11, createFairy('空降妖精', 'dmg/critdmg/eva/arm', '0.36/0.4/0.32/0.08'))
lib_fairy.set(12, createFairy('布雷妖精', 'dmg/acu/eva', '0.25/0.44/0.85'))
lib_fairy.set(13, createFairy('火箭妖精', 'critdmg/acu/arm', '0.35/0.44/0.22'))
lib_fairy.set(14, createFairy('工事妖精', 'dmg/critdmg/acu/eva/arm', '0.15/0.2/0.5/0.4/0.1'))
lib_fairy.set(15, createFairy('指挥妖精', 'dmg/critdmg/eva/arm', '0.36/0.36/0.32/0.08'))
lib_fairy.set(16, createFairy('搜救妖精', 'dmg/acu/eva', '0.32/0.8/0.64'))
lib_fairy.set(17, createFairy('照明妖精', 'critdmg/acu/eva/arm', '0.36/0.9/0.32/0.08'))
lib_fairy.set(18, createFairy('黄金妖精', 'dmg/critdmg/acu/eva/arm', '0.2/0.25/0.62/0.5/0.12'))
lib_fairy.set(19, createFairy('炊事妖精', 'dmg/critdmg/acu/eva/arm', '0.1/0.1/0.2/0.8/0.2'))
lib_fairy.set(20, createFairy('花火妖精', 'dmg/acu/eva/arm', '0.32/0.75/0.32/0.08'))
lib_fairy.set(21, createFairy('年兽妖精', 'dmg/critdmg/eva/arm', '0.25/0.25/0.2/0.2'))
