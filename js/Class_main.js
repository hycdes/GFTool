function create_entry (info_name, info_taglist0, info_taglist1, info_taglist2, info_taglist3) {
  var entry = {}
  entry.type = info_name[0]
  entry.star = info_name[1]
  entry.id = info_name[2]
  entry.tag = [info_taglist0, info_taglist1, info_taglist2, info_taglist3]
  return entry
}

var pick_id = 0
var pick_tag = [
  [],
  [],
  [],
  []
]
// ====================人形添加：修改lib_name和lib_tdoll====================
var lib_name = {
  t2001: '诺艾尔',t2003: '琪亚娜',t2006: '德丽莎',t2009: '克莉尔',t2010: '菲尔',t2017: '吉尔·斯汀雷',t2018: '塞伊·朝雾',
  t1001: '柯尔特左轮 MOD',
  t4: '蟒蛇', t96: '灰熊MkV', t97: 'M950A', t114: '维尔德MkⅡ', t126: 'NZ75', t142: 'Five-seveN', t166: 'CZ75', t183: '竞争者', t233: 'Px4风暴', t242: 'P22', t250: 'HS2000', t260: 'PA-15',
  t1002: 'M1911 MOD', t1005: '纳甘左轮 MOD', t1091: 'MP-446 MOD',
  t1: '柯尔特左轮', t7: '斯捷奇金',
  t3: 'M9',
  t5: '纳甘左轮',

  t2007: '无量塔姬子',
  t1055: 'M4A1 MOD', t1056: 'M4 SOPMOD Ⅱ MOD', t1057: 'ST AR-15 MOD',t1060: 'AS Val MOD', t1064: 'G36 MOD',
  t62: 'G41', t65: 'HK416', t73: 'AUG', t106: 'FAL', t119: 'OTs-14', t122: 'G11', t129: '95式', t130: '97式', t172: 'RFB', t175: 'ART556', t181: 'T91', t194: 'K2', t196: 'Zas M21', t205: 'AN-94', t206: 'AK-12', t215: 'MDR', t236: 'K11', t243: '64式自',
  t1061: 'StG44 MOD',t1063: 'G3 MOD',
  t54: 'M16A1', t55: 'M4A1', t56: 'M4 SOPMOD Ⅱ', t57: 'ST AR-15', t60: 'AS Val', t64: 'G36',t66: '56-1式',t69: 'FAMAS',t72: 'TAR-21',t118: '9A-91',t171: '利贝罗勒',t187: 'Ak 5',t207: 'CZ2000',t216: 'XM8',t227: 'A-91',t237: 'SAR-21',t262: 'EM-2',

  t2004: '雷电芽衣',t2005: '布洛妮娅',t2020: '史黛拉·星井',
  t1103: 'UMP45 MOD',
  t16: '汤姆森', t20: 'Vector', t28: 'MP7', t59: 'AK-74U', t104: 'G36C', t115: '索米', t127: '79式', t135: 'SR-3MP', t143: 'RO635', t213: 'C-MS', t224: 'PM-06', t228: '樱花', t234: 'JS 9', t245: 'P90', t251: 'X95', t259: 'PM-9',

  t27: '蝎式',t29: '司登MkⅡ',

  t1039: '莫辛-纳甘 MOD',
  t46: 'Kar98K',t48: 'WA2000', t50: '李·恩菲尔德', t53: 'NTW-20', t128: 'M99',t148: 'IWS2000', t179: 'DSR-50',t192: 'JS05', t197: '卡尔卡诺M1891', t198: '卡尔卡诺M91/38',t204: '芭莉斯塔', t211: 'SRS',t222: 'TAC-50',t231: 'M82A1',t257: 'M200',t261: 'QBU-88', t266: 'R93',
  t200: 'XM3',
  t37: 'M14',

  t109: 'MG5', t112: '内格夫', t173: 'PKP', t253: '刘易斯',

  t151: 'M1887',t157: 'KSG',t188: 'S.A.T.8',t229: 'M870'
}
var lib_tdoll = [
  create_entry([1, 1, 2001], ['dps', 'supportdps'], ['random'], ['snipe'], []),
  create_entry([1, 1, 2003], ['supportdfs'], ['random'], ['snipe'], ['stun']),
  create_entry([1, 1, 2006], ['supportdfs'], ['random'], ['deepdmg', 'dizz'], []),
  create_entry([1, 1, 2009], ['supportdps'], ['random'], ['command_dmg', 'command_acu'], []),
  create_entry([1, 1, 2010], ['supportdfs'], ['random'], ['weak_rof', 'weak_acu'], []),
  create_entry([1, 1, 2017], ['supportdps', 'supportdfs'], [], ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_arm', 'command_crit', 'command_critdmg'], []),
  create_entry([1, 1, 2018], ['supportdfs'], ['random'], ['shield'], []),
  create_entry([1, 5, 1001], ['supportdps'], ['random'], ['command_dmg', 'command_rof', 'command_acu'], []),
  create_entry([1, 5, 4], ['dps', 'supportdps'], ['random'], ['forcus_dmg', 'command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_crit'], ['feedback']),
  create_entry([1, 5, 96], ['supportdps'], ['random'], ['command_dmg'], []),
  create_entry([1, 5, 97], ['supportdps'], ['random'], ['command_rof'], []),
  create_entry([1, 5, 114], ['supportdfs'], ['random'], ['weak_acu'], []),
  create_entry([1, 5, 126], ['supportdfs'], ['random'], ['weak_rof'], []),
  create_entry([1, 5, 142], ['supportdps'], ['random'], ['command_rof', 'command_crit'], []),
  create_entry([1, 5, 166], ['dps', 'supportdps'], ['random'], ['snipe'], []),
  create_entry([1, 5, 183], ['supportdps'], ['random', 'ap'], ['deepdmg', 'snipe'], ['shootguide']),
  create_entry([1, 5, 233], ['supportdps'], ['random'], ['command_critdmg'], []),
  create_entry([1, 5, 242], ['supportdps', 'supportdfs'], ['random'], ['command_dmg', 'command_eva', 'shield'], []),
  create_entry([1, 5, 250], ['supportdps', 'supportdfs'], ['random'], ['command_dmg', 'shield'], []),
  create_entry([1, 5, 260], ['dps', 'supportdps', 'supportdfs'], ['random'], ['snipe', 'dizz'], []),
  create_entry([1, 4, 1002], ['dps', 'supportdfs'], ['back', 'random'], ['fastcd', 'sweep', 'rofstatic', 'smoke'], []),
  create_entry([1, 4, 1005], ['supportdps', 'supportdfs', 'startdps'], ['random'], ['command_dmg', 'command_acu', 'weak_dmg'], ['night']),
  create_entry([1, 4, 1091], ['supportdps', 'supportdfs'], ['random'], ['command_rof', 'weak_rof'], []),
  create_entry([1, 4, 1], ['supportdps'], ['random'], ['command_dmg'], []),
  create_entry([1, 3, 3], ['supportdfs'], ['random'], ['dizz'], []),
  create_entry([1, 2, 5], ['supportdfs'], ['random'], ['weak_dmg'], ['night']),
  create_entry([1, 4, 7], ['supportdps'], ['random'], ['command_dmg', 'command_rof'], []),

  create_entry([2, 1, 2007], ['dps'], ['front'], ['weak_dmg'], []),
  create_entry([2, 5, 1055], ['dps', 'supportdps'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 5, 1056], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 1057], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd', 'multihit'], []),
  create_entry([2, 5, 1060], ['dps'], ['front'], ['forcus_dmg', 'max_acu'], ['night']),
  create_entry([2, 5, 1064], ['dps', 'supportdfs'], ['front'], ['forcus_dmg', 'forcus_rof', 'command_eva'], []),
  create_entry([2, 5, 62], ['dps'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 5, 65], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 73], ['dps', 'supportdps'], ['front'], ['fastcd', 'sweep', 'rofstatic'], []),
  create_entry([2, 5, 106], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 119], ['dps'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 5, 122], ['dps', 'skilldps'], ['front'], ['multihit'], []),
  create_entry([2, 5, 129], ['dps', 'longfill'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 5, 130], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd'], []),
  create_entry([2, 5, 172], ['dps'], ['front', 'back'], ['forcus_dmg', 'forcus_acu'], []),
  create_entry([2, 5, 175], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof'], []),
  create_entry([2, 5, 181], ['dps'], ['front'], ['forcus_dmg', 'forcus_crit'], ['night']),
  create_entry([2, 5, 194], ['dps', 'startdps'], ['front'], ['status'], []),
  create_entry([2, 5, 196], ['dps'], ['front'], ['grenade', 'forcus_dmg'], []),
  create_entry([2, 5, 205], ['dps'], ['front'], ['passive', 'multihit'], []),
  create_entry([2, 5, 206], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], []),
  create_entry([2, 5, 215], ['dps', 'supportdfs'], ['front'], ['forcus_dmg', 'shield'], []),
  create_entry([2, 5, 236], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 243], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu'], []),
  create_entry([2, 4, 1061], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 1063], ['dps'], ['front'], ['grenade', 'dizz'], []),
  create_entry([2, 4, 54], ['tank_eva', 'tank_arm'], ['front'], ['dizz'], []),
  create_entry([2, 4, 55], ['dps'], ['front'], ['forcus_dmg', 'fastcd'], ['mengxin']),
  create_entry([2, 4, 56], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 57], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd'], []),
  create_entry([2, 4, 60], ['dps'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 4, 64], ['dps'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 4, 66], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 69], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 72], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof'], []),
  create_entry([2, 4, 118], ['dps'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 4, 171], ['supportdps'], ['front'], ['command_dmg', 'command_rof', 'command_acu'], []),
  create_entry([2, 4, 187], ['dps'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 4, 207], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], []),
  create_entry([2, 4, 216], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 227], ['dps'], ['front'], ['grenade', 'forcus_dmg', 'forcus_acu'], ['night']),
  create_entry([2, 4, 237], ['dps'], ['front'], ['fastcd', 'sweep', 'rofstatic'], []),
  create_entry([2, 4, 262], ['dps'], ['front'], ['snipe'], ['skillcrit', 'skillarm']),

  create_entry([3, 5, 1103], ['tank_eva'], ['random'], ['fastcd', 'smoke'], []),
  create_entry([3, 5, 16], ['tank_eva'], ['random'], ['ffshield'], []),
  create_entry([3, 5, 20], ['dps', 'tank_eva'], ['random'], ['incendinary'], []),
  create_entry([3, 5, 28], ['tank_eva', 'longfill'], ['random'], ['forcus_eva'], []),
  create_entry([3, 5, 59], ['tank_eva'], ['random'], ['weak_dmg', 'weak_acu'], []),
  create_entry([3, 5, 104], ['tank_eva'], ['random'], ['ffshield'], []),
  create_entry([3, 5, 115], ['tank_eva', 'longfill'], ['random'], ['forcus_eva'], []),
  create_entry([3, 5, 127], ['tank_eva'], ['random'], ['dizz'], []),
  create_entry([3, 5, 135], ['dps', 'tank_eva', 'longfill'], ['random'], ['forcus_dmg'], []),
  create_entry([3, 5, 143], ['tank_eva'], ['random'], ['weak_dmg', 'forcus_eva', 'fastcd'], []),
  create_entry([3, 5, 213], ['tank_eva'], ['random', 'ap'], ['forcus_dmg', 'forcus_acu', 'forcus_eva', 'status', 'fastcd'], []),
  create_entry([3, 5, 224], ['tank_eva', 'longfill'], ['random'], ['forcus_eva', 'forcus_acu'], ['night']),
  create_entry([3, 5, 228], ['tank_eva'], ['random'], ['forcus_dmg', 'forcus_eva', 'shield'], []),
  create_entry([3, 5, 234], ['tank_eva'], ['random'], ['forcus_dmg', 'forcus_eva'], []),
  create_entry([3, 5, 245], ['tank_eva'], ['random'], ['forcus_eva', 'max_acu', 'max_crit'], ['illusion']),
  create_entry([3, 5, 251], ['tank_eva'], ['random', 'lowhp'], ['forcus_dmg'], []),
  create_entry([3, 5, 259], ['tank_eva'], ['random'], ['forcus_eva', 'multihit'], []),
  create_entry([3, 3, 27], ['dps', 'tank_eva'], ['random'], ['incendinary'], ['mengxin']),
  create_entry([3, 3, 29], ['tank_eva'], ['random'], ['handgrenade'], ['mengxin']),

  create_entry([4, 1, 2004], ['dps'], ['back', 'ap'], ['dizz'], []),
  create_entry([4, 1, 2005], ['dps'], ['back', 'ap'], ['forcus_dmg', 'forcus_rof', 'snipe'], ['cluster']),
  create_entry([4, 1, 2020], ['dps'], ['back', 'ap'], ['forcus_dmg', 'forcus_critdmg', 'passive', 'multihit', 'multitarget'], []),
  create_entry([4, 5, 1039], ['dps'], ['back', 'ap'], ['forcus_dmg', 'forcus_rof', 'snipe'], []),
  create_entry([4, 5, 46], ['dps'], ['back', 'ap'], ['snipe'], []),
  create_entry([4, 5, 48], ['dps'], ['back', 'ap'], ['forcus_rof'], []),
  create_entry([4, 5, 50], ['dps'], ['back', 'ap'], ['forcus_dmg'], []),
  create_entry([4, 5, 53], ['dps'], ['back', 'ap'], ['snipe'], []),
  create_entry([4, 5, 128], ['dps'], ['back', 'ap'], ['snipe'], []),
  create_entry([4, 5, 148], ['dps'], ['back', 'ap'], ['forcus_dmg'], []),
  create_entry([4, 5, 179], ['dps'], ['back', 'ap'], ['snipe'], []),
  create_entry([4, 5, 192], ['dps'], ['back', 'ap'], ['snipe'], []),
  create_entry([4, 5, 197], ['dps', 'supportdps'], ['back', 'ap'], ['forcus_rof', 'forcus_crit', 'command_rof', 'command_crit'], []),
  create_entry([4, 5, 198], ['dps'], ['back', 'ap'], ['snipe', 'fastcd'], ['normalkiller']),
  create_entry([4, 5, 204], ['dps'], ['back', 'ap'], ['passive', 'multihit', 'multitarget'], []),
  create_entry([4, 5, 211], ['dps'], ['back', 'ap'], ['forcus_rof', 'forcus_acu'], []),
  create_entry([4, 5, 222], ['dps'], ['back', 'ap'], ['snipe'], ['skillcrit']),
  create_entry([4, 5, 231], ['dps'], ['back', 'ap'], ['snipe', 'fastcd'], ['stronger']),
  create_entry([4, 5, 257], ['dps'], ['back', 'ap'], ['passive', 'snipe'], ['skillcrit', 'skillarm']),
  create_entry([4, 5, 261], ['dps'], ['back', 'ap'], ['passive', 'snipe'], []),
  create_entry([4, 5, 266], ['dps'], ['back', 'ap'], ['passive', 'forcus_dmg', 'forcus_rof'], []),
  create_entry([4, 4, 200], ['dps'], ['back', 'ap'], ['forcus_dmg', 'forcus_rof'], ['night']),
  create_entry([4, 3, 37], ['dps'], ['back', 'ap'], ['forcus_dmg'], ['mengxin']),

  create_entry([5, 5, 109], ['dps'], ['random', 'ap'], ['passive'], []),
  create_entry([5, 5, 112], ['dps', 'longdps'], ['random', 'ap'], ['forcus_dmg', 'passive'], []),
  create_entry([5, 5, 173], ['dps'], ['random', 'ap'], ['passive'], []),
  create_entry([5, 5, 253], ['dps', 'longdps'], ['random', 'ap'], ['forcus_dmg', 'forcus_fastcs', 'passive'], []),

  create_entry([6, 5, 151], ['tank_arm'], ['random', 'beakback'], ['snipe'], []),
  create_entry([6, 5, 157], ['tank_arm'], ['random', 'beakback'], ['forcus_arm', 'forcus_eva'], []),
  create_entry([6, 5, 188], ['tank_arm'], ['random', 'beakback'], ['fastcd', 'shield'], []),
  create_entry([6, 5, 229], ['tank_arm'], ['random', 'beakback'], ['ffshield'], [])
]
// ====================标签添加：修改lib_tag和lib_tag_NUMBER，并添加一个新的MAP类tagNUMBER_TAGNAME====================
var lib_tag = [
  [['dps', 'supportdps', 'supportdfs', 'tank_eva', 'tank_arm']
    , ['startdps', 'skilldps', 'longfill', 'longdps']],

  [['front', 'back', 'random', 'lowhp'],
    ['ap', 'beakback']],

  [['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_eva', 'forcus_arm', 'forcus_crit', 'forcus_critdmg', 'forcus_fastcs', 'max_acu', 'max_crit'],
    ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_arm', 'command_crit', 'command_critdmg'],
    ['weak_dmg', 'weak_rof', 'weak_acu', 'weak_eva', 'deepdmg'],
    ['fastcd', 'passive', 'multihit', 'multitarget', 'sweep', 'beakback', 'rofstatic'],
    ['smoke', 'handgrenade', 'incendinary', 'grenade', 'snipe', 'dizz', 'ffshield', 'shield', 'status']],

  [['night', 'mengxin', 'skillcrit', 'skillarm', 'skilleva', 'normalkiller', 'feedback', 'shootguide', 'illusion', 'stronger', 'stun', 'cluster']]
]
// tag0————————————————————————————————————————
var lib_tag_0 = {
  dps: '输出',
  supportdps: '输出辅助',
  supportdfs: '防御辅助',
  tank_eva: '闪避前排',
  tank_arm: '护甲前排',

  startdps: '开场爆发',
  skilldps: '技能期爆发',
  longfill: '增益高覆盖',
  longdps: '长时间战斗发力'
}
var tag0_supportdps = new Map,
  tag0_supportdfs = new Map,
  tag0_dps = new Map,
  tag0_tank_eva = new Map,
  tag0_tank_arm = new Map,
  tag0_startdps = new Map,
  tag0_skilldps = new Map,
  tag0_longfill = new Map,
  tag0_longdps = new Map
// tag1————————————————————————————————————————
var lib_tag_1 = {
  front: '<img src="../img/class-icon/icon-front.png" style="width:19px;height:19px">优先前排',
  back: '<img src="../img/class-icon/icon-back.png" style="width:19px;height:19px">优先后排',
  random: '<img src="../img/class-icon/icon-random.png" style="width:19px;height:19px">随机锁敌',
  lowhp: '<img src="../img/class-icon/icon-lowhp.png" style="width:19px;height:19px">优先残血',

  ap: '<img src="../img/icon-ap.png" style="width:19px;height:19px">穿甲',
  beakback: '普攻击退'
}
var tag1_front = new Map,
  tag1_back = new Map,
  tag1_random = new Map,
  tag1_lowhp = new Map,

  tag1_ap = new Map,
  tag1_beakback = new Map
// tag2————————————————————————————————————————
var lib_tag_2 = {
  forcus_dmg: '<img src="../img/icon-atkdmg.png" style="width:19px;height:19px">火力UP',
  forcus_rof: '<img src="../img/icon-rof.png" style="width:19px;height:19px">射速UP',
  forcus_acu: '<img src="../img/icon-atkacu.png" style="width:19px;height:19px">命中UP',
  forcus_eva: '<img src="../img/icon-eva.png" style="width:19px;height:19px">回避UP',
  forcus_arm: '<img src="../img/icon-arm.png" style="width:19px;height:19px">护甲UP',
  forcus_crit: '<img src="../img/icon-crit.png" style="width:19px;height:19px">暴击率UP',
  forcus_critdmg: '<img src="../img/icon-critdmg.png" style="width:19px;height:19px">暴击伤害UP',
  forcus_fastcs: '<img src="../img/icon-clipsize.png" style="width:19px;height:19px">快速换弹',
  max_acu: '<img src="../img/class-icon/icon-max_acu.png" style="width:19px;height:19px">精确瞄准',
  max_crit: '<img src="../img/class-icon/icon-max_crit.png" style="width:19px;height:19px">必定暴击',

  command_dmg: '<img src="../img/icon-atkdmg.png" style="width:19px;height:19px">团队火力UP',
  command_rof: '<img src="../img/icon-rof.png" style="width:19px;height:19px">团队射速UP',
  command_acu: '<img src="../img/icon-atkacu.png" style="width:19px;height:19px">团队命中UP',
  command_eva: '<img src="../img/icon-eva.png" style="width:19px;height:19px">团队回避UP',
  command_arm: '<img src="../img/icon-arm.png" style="width:19px;height:19px">团队护甲UP',
  command_crit: '<img src="../img/icon-crit.png" style="width:19px;height:19px">团队暴击率UP',
  command_critdmg: '<img src="../img/icon-critdmg.png" style="width:19px;height:19px">团队暴击伤害UP',

  weak_dmg: '<img src="../img/class-icon/icon-atkdmg-decline.png" style="width:19px;height:19px">火力削弱',
  weak_rof: '<img src="../img/class-icon/icon-rof-decline.png" style="width:19px;height:19px">射速削弱',
  weak_acu: '<img src="../img/class-icon/icon-atkacu-decline.png" style="width:19px;height:19px">命中削弱',
  weak_eva: '<img src="../img/class-icon/icon-eva-decline.png" style="width:19px;height:19px">回避削弱',
  deepdmg: '伤害加深',

  fastcd: '主动技短前置',
  passive: '被动',
  multihit: '<img src="../img/class-icon/icon-multihit.png" style="width:19px;height:19px">多段伤害',
  multitarget: '<img src="../img/class-icon/icon-multitarget.png" style="width:19px;height:19px">多目标',
  sweep: '<img src="../img/class-icon/icon-sweep.png" style="width:19px;height:19px">扫射',
  beakback: '技能击退',
  rofstatic: '<img src="../img/class-icon/icon-staticrof.png" style="width:19px;height:19px">固定射速',

  smoke: '<img src="../img/class-icon/icon-smoke.png" style="width:19px;height:19px">烟雾弹',
  handgrenade: '<img src="../img/class-icon/icon-handgrenade.png" style="width:19px;height:19px">手榴弹',
  incendinary: '<img src="../img/class-icon/icon-incendinary.png" style="width:19px;height:19px">燃烧弹',
  grenade: '<img src="../img/class-icon/icon-grenade.png" style="width:19px;height:19px">榴弹',
  snipe: '<img src="../img/class-icon/icon-snipe.png" style="width:19px;height:19px">狙击',
  dizz: '<img src="../img/class-icon/icon-dizz.png" style="width:19px;height:19px">眩晕',
  ffshield: '<img src="../img/icon-ff.png" style="width:19px;height:19px">力场',
  shield: '<img src="../img/class-icon/icon-shield.png" style="width:19px;height:19px">护盾',
  status: '<img src="../img/icon-fil.png" style="width:19px;height:19px">状态切换'
}
var tag2_forcus_dmg = new Map,
  tag2_forcus_rof = new Map,
  tag2_forcus_acu = new Map,
  tag2_forcus_eva = new Map,
  tag2_forcus_arm = new Map,
  tag2_forcus_crit = new Map,
  tag2_forcus_critdmg = new Map,
  tag2_forcus_fastcs = new Map,
  tag2_max_acu = new Map,
  tag2_max_crit = new Map,

  tag2_command_dmg = new Map,
  tag2_command_rof = new Map,
  tag2_command_acu = new Map,
  tag2_command_eva = new Map,
  tag2_command_arm = new Map,
  tag2_command_crit = new Map,
  tag2_command_critdmg = new Map,

  tag2_weak_dmg = new Map,
  tag2_weak_rof = new Map,
  tag2_weak_acu = new Map,
  tag2_weak_eva = new Map,
  tag2_deepdmg = new Map,

  tag2_fastcd = new Map,
  tag2_passive = new Map,
  tag2_multihit = new Map,
  tag2_multitarget = new Map,

  tag2_smoke = new Map,
  tag2_handgrenade = new Map,
  tag2_incendinary = new Map,
  tag2_grenade = new Map,
  tag2_snipe = new Map,
  tag2_dizz = new Map,
  tag2_ffshield = new Map,
  tag2_shield = new Map,
  tag2_sweep = new Map,
  tag2_beakback = new Map,
  tag2_status = new Map,
  tag2_rofstatic = new Map
// tag3————————————————————————————————————————
var lib_tag_3 = {
  night: '<img src="../img/class-icon/icon-night-abilityup.png" style="width:19px;height:19px">夜战特化',
  mengxin: '<img src="../img/class-icon/icon-mengxin.png" style="width:19px;height:19px">新手',
  skillcrit: '<img src="../img/class-icon/icon-skillcrit.png" style="width:19px;height:19px">可暴击技能',
  skillarm: '<img src="../img/class-icon/icon-skillarm.png" style="width:19px;height:19px">有视护甲技能',
  skilleva: '<img src="../img/class-icon/icon-skilleva.png" style="width:19px;height:19px">可丢失技能',
  normalkiller: '<img src="../img/class-icon/icon-x45.png" style="width:19px;height:19px">非精英超伤害',
  feedback: '<img src="../img/class-icon/icon-python.png" style="width:19px;height:19px">反馈增益',
  shootguide: '<img src="../img/class-icon/icon-snipe.png" style="width:19px;height:19px">集火目标',
  illusion: '<img src="../img/class-icon/icon-illusion.png" style="width: 19px; height: 19px">幻象',
  stronger: '<img src="../img/class-icon/icon-m82a1.png" style="width:19px;height:19px">越战越勇',
  stun: '<img src="../img/class-icon/icon-stun.png" style="width:19px;height:19px">麻痹',
  cluster: '<img src="../img/class-icon/icon-cluster.png" style="width:19px;height:19px">聚怪'
}
var tag3_night = new Map,
  tag3_mengxin = new Map,
  tag3_skillcrit = new Map,
  tag3_skillarm = new Map,
  tag3_skilleva = new Map,
  tag3_normalkiller = new Map,
  tag3_feedback = new Map,
  tag3_shootguide = new Map,
  tag3_illusion = new Map,
  tag3_stronger = new Map,
  tag3_stun = new Map,
  tag3_cluster = new Map

// 特殊说明库
var lib_alert = new Map
lib_alert.set('0_startdps', '技能可以开场较快增幅输出')
lib_alert.set('0_skilldps', '主要输出集中在技能期')
lib_alert.set('0_longfill', '相比同定位人形，技能持续与冷却差距小')
lib_alert.set('0_longdps', '时间越长输出能力越强')

lib_alert.set('2_fastcd', '相比同定位人形，有较短前置冷却')
lib_alert.set('2_snipe', '狙击或类狙击技能，除非特殊说明，无视护甲/无法暴击/必定命中')

lib_alert.set('3_mengxin', '适合新人培养，节省核心度过艰难期')
lib_alert.set('3_feedback', '受某类增益将以一定数值反馈给影响格队友')
lib_alert.set('3_shootguide', '引导全队射击目标，无法引导自带锁敌逻辑的技能')

// 函数

function find_tdoll (id) {
  var len = lib_tdoll.length
  for (var i = 0; i < len; i++) {
    if (lib_tdoll[i].id === id) {
      return lib_tdoll[i]
    }
  }
}
function generate_map () {
  for (var tdoll of lib_tdoll) {
    for (var i = 0; i < 4; i++) {
      for (var tag of tdoll.tag[i]) {
        eval('tag' + i + '_' + tag + '.set(' + "'t'+tdoll.id,true)") // record t-doll id
      }
    }
  }
}
function make_starstr (num) {
  var str = ''
  if (num === 5) str += '<span style="color:darkorange">'
  else if (num === 4) str += '<span style="color:chartreuse">'
  else if (num === 3) str += '<span style="color:dodgerblue">'
  else if (num === 2) str += '<span style="color:darkseagreen">'
  else if (num === 1) str += '<span style="color:#FF00FF">'
  for (var i = 0; i < num; i++) str += '★'
  str += '</span>'
  return str
}
function make_color (num) {
  if (num === 0) return 'primary'
  if (num === 1) return 'success'
  if (num === 2) return 'warning'
  if (num === 3) return 'danger'
}
function is_exist (taglist, tag) {
  for (var element of taglist) {
    if (tag === element) return true
  }
  return false
}
function fill_tag () { // 按标签，按钮名btn_tag_0_support
  var str_btn = ''
  for (var i = 0; i < 4; i++) {
    var len = lib_tag[i].length
    for (var t = 0; t < len; t++) {
      for (var name of lib_tag[i][t]) {
        str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tag_' + i + '_' + name + '"'
        str_btn += ' onclick="change_tag(' + i + ',' + "'" + name + "'" + ')">'
        eval('str_btn+=lib_tag_' + i + '.' + name)
        str_btn += '</button> '
        document.getElementById('tag_' + i + '_' + t).innerHTML += str_btn
      }
    }
  }
}
function fill_tag_tdoll () { // 按人形搜索，按钮名btn_tdoll_233
  var str_pid = '', str_btn = '', str_tdoll = ''
  for (var entry of lib_tdoll) {
    str_tdoll = '<img src="../img/class/' + entry.id + '.png" style="width:37px;height:37px">'
    str_pid = 'tag_tdoll_' + entry.type + '_' + entry.star
    str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tdoll_' + entry.id + '" onclick="classify_by_tdoll(' + entry.id + ')">' + str_tdoll
    str_btn += make_starstr(entry.star) + ' '
    eval('str_btn+=lib_name.t' + entry.id)
    str_btn += '</button> '
    document.getElementById(str_pid).innerHTML += str_btn
  }
}
function empty_taglist (tag_type) {
  for (var currenttag of pick_tag[tag_type]) {
    document.getElementById('btn_tag_' + tag_type + '_' + currenttag).className = 'btn btn-default'
  }
  pick_tag[tag_type] = []
  change_tag(tag_type)
}
function jump_tag (tag_type, tag) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade'
  document.getElementById('sort_tag').className = 'tab-pane fade in active'
  document.getElementById('sort_tdoll_li').className = ''
  document.getElementById('sort_tag_li').className = 'active'
  for (var i = 0; i < 4; i++) {
    for (var currenttag of pick_tag[i]) {
      document.getElementById('btn_tag_' + i + '_' + currenttag).className = 'btn btn-default'
    }
  }
  pick_tag = [[], [], [], []]
  change_tag(tag_type, tag)
}
function change_tag (tag_type) { // 改变标签，按钮名btn_tag_0_TAGNAME
  if (arguments['1'] != undefined) {
    var tag = arguments['1']
    var is_tag = true
    var len = pick_tag[tag_type].length
    for (var i = 0; i < len; i++) {
      if (tag === pick_tag[tag_type][i]) {
        pick_tag[tag_type].splice(i, 1)
        is_tag = false
        break
      }
    }
    if (is_tag) { // new tag generate
      pick_tag[tag_type].push(tag)
      document.getElementById('btn_tag_' + tag_type + '_' + tag).className = 'btn btn-' + make_color(tag_type)
    } else {
      document.getElementById('btn_tag_' + tag_type + '_' + tag).className = 'btn btn-default'
    }
  }
  classify_by_tag()
}
function classify_by_tag () {
  var str_btn_display = ''
  var num_type = -1
  var str_alert = ''
  var over = false, status = 'no-tdoll'
  var list_num = []
  for (var tdoll of lib_tdoll) {
    list_num.push(tdoll.id)
  }
  // show tags selected
  for (var tn = 0; tn < 4; tn++) {
    var str_color = make_color(tn)
    for (var tag of pick_tag[tn]) {
      str_btn_display += '<button type="button" style="padding:5px" class="btn btn-' + str_color + '" disabled>'
      eval('str_btn_display+=lib_tag_' + tn + '.' + tag)
      str_btn_display += '</button> '
    }
  }
  document.getElementById('result_1_tags').innerHTML = str_btn_display
  // find t-dolls
  for (var tn = 0; tn < 4; tn++) {
    for (var tag of pick_tag[tn]) {
      // load alert
      if (lib_alert.get(tn + '_' + tag) != undefined) {
        str_alert += '['
        eval('str_alert+=lib_tag_' + tn + '.' + tag)
        str_alert += '] ' + lib_alert.get(tn + '_' + tag) + '<br>'
      }
      // find valid tdoll
      var list_num_new = []
      for (var tid of list_num) {
        eval('if(tag' + tn + '_' + tag + '.get("t"+' + tid + ')===true){list_num_new.push(' + tid + ');}')
      }
      list_num = list_num_new
      if (list_num.length === 0) {
        over = true
        break
      }
    }
    if (over) break
  }
  if (pick_tag[0].length === 0 && pick_tag[1].length === 0 && pick_tag[2].length === 0 && pick_tag[3].length === 0) {
    status = 'no-tag'
    over = true
  }
  if (over) {
    if (status === 'no-tdoll') document.getElementById('result_1').innerHTML = '没有符合条件的人形'
    else if (status === 'no-tag') document.getElementById('result_1').innerHTML = '请选择至少一个标签'
  } else {
    var str_btn = '', str_tdoll = ''
    for (var entry_num of list_num) {
      var entry = find_tdoll(entry_num)
      // new type getline
      if (num_type === -1) num_type = entry.type
      else {
        if (num_type != entry.type) {
          str_btn += '<br>'
          num_type = entry.type
        }
      }
      // info
      str_tdoll = '<img src="../img/class/' + entry.id + '.png" style="width:37px;height:37px">'
      str_btn += '<button type="button" style="padding:5px" class="btn btn-default" id="btn_jump_tdoll_' + entry.id + '" onclick="jump_tdoll(' + entry.id + ')">' + str_tdoll
      str_btn += make_starstr(entry.star) + ' '
      eval('str_btn+=lib_name.t' + entry.id)
      str_btn += '</button> '
    }
    document.getElementById('result_1').innerHTML = str_btn
  }
  document.getElementById('result_1_alert').innerHTML = str_alert
}
function jump_tdoll (id) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade in active'
  document.getElementById('sort_tag').className = 'tab-pane fade'
  document.getElementById('sort_tdoll_li').className = 'active'
  document.getElementById('sort_tag_li').className = ''
  classify_by_tdoll(id)
}
function classify_by_tdoll (id) {
  var str_btn = '', str_pickname = ''
  var tdoll = find_tdoll(id)
  str_pickname = '<img src="../img/class/' + id + '.png" style="width:37px;height:37px">'
  str_pickname += make_starstr(tdoll.star)
  eval('str_pickname+=lib_name.t' + id)
  for (var i = 0; i < 4; i++) {
    for (var name of tdoll.tag[i]) {
      str_btn += '<button type="button" style="padding:5px" class="btn btn-' + make_color(i) + '" id="btn_jump_tag_' + i + '_' + name + '"'
      str_btn += ' onclick="jump_tag(' + i + ',' + "'" + name + "'" + ')">'
      eval('str_btn+=lib_tag_' + i + '.' + name)
      str_btn += '</button> '
    }
  }
  document.getElementById('result_2_name').innerHTML = str_pickname
  document.getElementById('result_2').innerHTML = str_btn
}
window.onload = function () {
  fill_tag()
  fill_tag_tdoll()
  generate_map()
}
