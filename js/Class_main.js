function create_entry(info_name, info_taglist0, info_taglist1, info_taglist2, info_taglist3) {
  var entry = {}
  entry.type = info_name[0]
  entry.star = info_name[1]
  entry.id = info_name[2]
  entry.tag = [info_taglist0, info_taglist1, info_taglist2, info_taglist3]
  return entry
}

var num_sort = 7
var pick_id = -1
var pick_tag = [
  [],
  [],
  [],
  []
]
// ====================人形添加：修改lib_name和lib_tdoll====================
var lib_name = {
  // —————————————— HG ——————————————
  t2001: '诺艾尔', t2003: '琪亚娜', t2006: '德丽莎', t2009: '克莉尔', t2010: '菲尔', t2017: '吉尔·斯汀雷', t2018: '塞伊·朝雾',
  t1097: 'M950A MOD',
  t1001: '柯尔特左轮 MOD', t1007: '斯捷奇金 MOD',
  t4: '蟒蛇', t96: '灰熊MkV', t97: 'M950A', t114: '维尔德MkⅡ', t126: 'NZ75', t142: 'Five-seveN', t166: 'CZ75', t183: '竞争者', t233: 'Px4风暴', t242: 'P22', t250: 'HS2000', t260: 'PA-15', t272: '沙漠之鹰', t285: 'C-93', t303: 'HP-35',
  t1002: 'M1911 MOD', t1005: '纳甘左轮 MOD', t1012: 'C96 MOD', t1091: 'MP-446 MOD', t1221: 'GSh-18 MOD',
  t1: '柯尔特左轮', t7: '斯捷奇金', t98: 'SPP-1', t99: 'Mk23', t100: 'P7', t168: 'SpitFire', t202: '雷电', t212: 'K5', t248: '杰里科', t269: 'P30',
  t3: 'M9', t14: '阿斯特拉左轮', t132: '59式',
  t5: '纳甘左轮', t10: 'PPK',
  // —————————————— AR ——————————————
  t2007: '无量塔姬子', t2027: '安洁莉卡',
  t1065: 'HK416 MOD',
  t1055: 'M4A1 MOD', t1056: 'M4 SOPMOD Ⅱ MOD', t1057: 'ST AR-15 MOD', t1060: 'AS Val MOD', t1064: 'G36 MOD',
  t62: 'G41', t65: 'HK416', t73: 'AUG', t106: 'FAL', t119: 'OTs-14', t122: 'G11', t129: '95式', t130: '97式', t172: 'RFB', t175: 'ART556', t181: 'T91', t194: 'K2', t196: 'Zas M21', t205: 'AN-94', t206: 'AK-12', t214: 'ADS', t215: 'MDR', t236: 'K11', t243: '64式自', t274: 'ACR', t287: "SIG-556", t289: 'R5', t306: 'AK-Alfa',
  t1061: 'StG44 MOD', t1063: 'G3 MOD',
  t54: 'M16A1', t55: 'M4A1', t56: 'M4 SOPMOD Ⅱ', t57: 'ST AR-15', t60: 'AS Val', t64: 'G36', t66: '56-1式', t69: 'FAMAS', t72: 'TAR-21', t118: '9A-91', t171: '利贝罗勒', t187: 'Ak 5', t207: 'CZ2000', t216: 'XM8', t227: 'A-91', t237: 'SAR-21', t262: 'EM-2', t288: 'CR-21',
  t70: 'FNC',
  // —————————————— SMG ——————————————
  t2019: '多萝西·海兹',
  t1026: 'MP5 MOD', t1101: 'UMP9 MOD', t1103: 'UMP45 MOD',
  t16: '汤姆森', t20: 'Vector', t28: 'MP7', t59: 'AK-74U', t104: 'G36C', t115: '索米', t127: '79式', t135: 'SR-3MP', t143: 'RO635', t213: 'C-MS', t224: 'PM-06', t228: '樱花', t234: 'JS 9', t245: 'P90', t251: 'X95', t259: 'PM-9',
  t1029: '司登MkⅡ MOD', t1031: '伯莱塔38型 MOD', t1093: 'IDW MOD', t1094: '64式 MOD',
  t23: 'PP-90', t26: 'MP5', t101: 'UMP9', t102: 'UMP40', t103: 'UMP45', t136: 'PP-19', t137: 'PP-19-01', t150: '希普卡', t177: 'KLIN', t203: '蜜獾', t225: 'Cx4 风暴', t280: 'MAT-49', t286: 'KAC-PDW',
  t27: '蝎式', t29: '司登MkⅡ',
  // —————————————— RF ——————————————
  t2004: '雷电芽衣', t2005: '布洛妮娅', t2020: '史黛拉·星井',
  t1053: 'NTW-20 MOD',
  t1039: '莫辛-纳甘 MOD', t1252: 'KSVK MOD',
  t46: 'Kar98K', t48: 'WA2000', t50: '李·恩菲尔德', t53: 'NTW-20', t128: 'M99', t148: 'IWS2000', t179: 'DSR-50', t192: 'JS05', t197: '卡尔卡诺M1891', t198: '卡尔卡诺M91/38', t204: '芭莉斯塔', t211: 'SRS', t222: 'TAC-50', t231: 'M82A1', t257: 'M200', t261: 'QBU-88', t266: 'R93',
  t1037: 'M14 MOD', t1044: 'SV-98 MOD', t1051: 'FN-49 MOD', t1095: '汉阳造88式 MOD',
  t36: '春田', t39: '莫辛-纳甘', t42: 'PTRD', t43: 'SVD', t117: 'PSG-1', t146: 'G28', t180: 'PzB39', t184: 'T-5000', t200: 'XM3', t226: 'Mk12', t235: 'SPR A3G', t247: 'K31', t252: 'KSVK', t270: '四式', t273: 'SSG3000', t305: '塔布克',
  t37: 'M14', t256: '隼',
  // —————————————— MG ——————————————
  t2021: '阿尔玛·阿玛斯',
  t1075: 'M1918 MOD', t1089: '布伦 MOD',
  t109: 'MG5', t112: '内格夫', t125: 'MG4', t173: 'PKP', t208: 'HK21', t238: '88式', t253: '刘易斯', t263: 'MG36', t276: 'Kord', t307: 'ZB-26',
  t1081: 'LWMMG MOD',
  t75: 'M1918', t78: 'M60', t85: 'PK', t88: 'MG3', t121: 'Mk48', t149: 'AEK-999', t185: '阿梅利', t199: '80式', t240: 'Mk46', t254: 'UKM2000', t264: '绍沙', t275: 'M1895CB',
  t77: 'M2HB',
  // —————————————— SG ——————————————
  t2002: '艾尔菲尔特', t2008: '希儿', t2022: '达娜·赞恩',
  t151: 'M1887', t157: 'KSG', t160: 'Saiga-12', t163: 'AA-12', t164: 'FP-6', t188: 'S.A.T.8', t229: 'M870', t281: 'CAWS', t282: 'DP-12',
  t153: 'M37', t155: 'M590', t156: 'Super-Shorty', t161: '97式霰', t162: 'SPAS-12', t165: 'M1014', t189: 'USAS-12', t283: '解放者',
  t159: 'RMB-93'
}
var lib_tdoll = [
  // —————————————— HG ——————————————
  create_entry([1, 1, 2001], ['dps', 'supportdps', 'af_rof'], ['random'], ['snipe'], []),
  create_entry([1, 1, 2003], ['supportdfs', 'af_dmg', 'af_eva'], ['random'], ['snipe', 'stun'], []),
  create_entry([1, 1, 2006], ['supportdfs', 'af_rof', 'af_acu'], ['random'], ['deepdmg', 'dizz'], []),
  create_entry([1, 1, 2009], ['supportdps', 'af_rof', 'af_acu'], ['random'], ['command_dmg', 'command_acu'], []),
  create_entry([1, 1, 2010], ['supportdfs', 'af_dmg', 'af_acu'], ['random'], ['weak_rof', 'weak_acu'], []),
  create_entry([1, 1, 2017], ['supportdps', 'supportdfs', 'af_dmg', 'af_acu'], [], ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_arm', 'command_crit', 'command_critdmg'], []),
  create_entry([1, 1, 2018], ['supportdfs', 'af_dmg', 'af_eva'], ['random'], ['shield'], []),
  create_entry([1, 6, 1097], ['supportdps', 'startdps', 'af_rof', 'af_acu'], ['random'], ['command_rof', 'command_movespeed', 'weak_eva', 'weak_movespeed'], []),
  create_entry([1, 5, 1001], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['command_dmg', 'command_rof', 'command_acu'], []),
  create_entry([1, 5, 1007], ['supportdps', 'af_rof'], ['random'], ['command_rof', 'forcus_dmg', 'forcus_crit', 'weak_eva'], []),
  create_entry([1, 5, 4], ['dps', 'supportdps', 'af_dmg', 'af_crit'], ['random'], ['forcus_dmg', 'command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_crit'], ['feedback']),
  create_entry([1, 5, 96], ['supportdps', 'af_dmg', 'af_eva'], ['random'], ['command_dmg'], []),
  create_entry([1, 5, 97], ['supportdps', 'af_rof', 'af_acu'], ['random'], ['command_rof'], []),
  create_entry([1, 5, 114], ['supportdfs', 'af_dmg', 'af_rof'], ['random'], ['weak_acu'], []),
  create_entry([1, 5, 126], ['supportdfs', 'af_dmg', 'af_eva'], ['random'], ['weak_rof'], []),
  create_entry([1, 5, 142], ['supportdps', 'af_rof', 'af_crit'], ['random'], ['command_rof', 'command_crit'], []),
  create_entry([1, 5, 166], ['dps', 'supportdps', 'af_dmg', 'af_rof'], ['random'], ['snipe'], []),
  create_entry([1, 5, 183], ['supportdps', 'af_dmg', 'af_crit'], ['random'], ['deepdmg', 'ap', 'snipe'], ['shootguide', 'burstsupport']),
  create_entry([1, 5, 233], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['command_critdmg'], []),
  create_entry([1, 5, 242], ['supportdps', 'supportdfs', 'af_dmg', 'af_acu'], ['random', 'suggest_8'], ['command_dmg', 'command_eva', 'shield'], []),
  create_entry([1, 5, 250], ['supportdps', 'supportdfs', 'af_rof', 'af_eva'], ['random'], ['command_dmg', 'shield'], []),
  create_entry([1, 5, 260], ['dps', 'supportdps', 'supportdfs', 'af_rof', 'af_acu'], ['random'], ['snipe', 'dizz'], []),
  create_entry([1, 5, 272], ['dps', 'supportdps', 'af_dmg', 'af_crit'], ['random'], ['forcus_rof', 'deepdmg', 'shield_break'], []),
  create_entry([1, 5, 285], ['supportdps', 'af_dmg', 'af_acu'], ['random', 'suggest_7'], ['command_dmg', 'command_rof'], []),
  create_entry([1, 5, 303], ['supportdps', 'af_dmg', 'af_eva'], ['random', 'suggest_7'], ['passive', 'deepdmg', 'reducehurt'], []),
  create_entry([1, 4, 1002], ['dps', 'supportdfs', 'af_rof', 'af_acu'], ['back', 'random'], ['fastcd', 'sweep', 'rofstatic', 'smoke'], []),
  create_entry([1, 4, 1005], ['supportdps', 'supportdfs', 'startdps', 'af_dmg', 'af_crit'], ['random'], ['command_dmg', 'command_acu', 'weak_dmg'], ['night']),
  create_entry([1, 4, 1012], ['supportdps', 'af_acu', 'af_eva'], ['random'], ['command_acu', 'command_critdmg', 'command_addcs'], ['night']),
  create_entry([1, 4, 1091], ['supportdps', 'supportdfs', 'af_dmg'], ['random'], ['command_rof', 'weak_rof'], []),
  create_entry([1, 4, 1221], ['dps', 'supportdps', 'af_dmg', 'af_acu'], ['random'], ['forcus_critdmg', 'max_crit', 'multihit', 'shield'], []),
  create_entry([1, 4, 1], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['command_dmg'], []),
  create_entry([1, 4, 7], ['supportdps', 'af_rof'], ['random'], ['command_rof'], []),
  create_entry([1, 4, 98], ['supportdps', 'af_acu'], ['random'], ['weak_eva'], []),
  create_entry([1, 4, 99], ['supportdps', 'af_dmg'], ['random'], ['command_dmg'], ['night']),
  create_entry([1, 4, 100], ['supportdfs', 'af_rof', 'af_eva'], ['random'], ['command_eva'], []),
  create_entry([1, 4, 168], ['supportdfs', 'af_dmg', 'af_acu'], ['random'], ['weak_rof'], []),
  create_entry([1, 4, 202], ['dps', 'supportdps', 'af_dmg'], ['random'], ['snipe'], ['skilleva']),
  create_entry([1, 4, 212], ['supportdps', 'supportdfs', 'af_dmg', 'af_acu'], ['random'], ['command_dmg', 'command_acu', 'command_eva'], []),
  create_entry([1, 4, 248], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['command_dmg', 'command_acu'], []),
  create_entry([1, 4, 269], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['command_rof', 'command_movespeed'], []),
  create_entry([1, 3, 3], ['supportdfs', 'af_dmg', 'af_eva'], ['random'], ['dizz'], []),
  create_entry([1, 3, 14], ['supportdps', 'af_rof', 'af_eva'], ['random'], ['command_rof'], []),
  create_entry([1, 3, 132], ['supportdps', 'af_dmg', 'af_acu'], ['random'], ['weak_eva'], ['night']),
  create_entry([1, 2, 5], ['supportdfs', 'af_dmg'], ['random'], ['weak_dmg'], ['night']),
  create_entry([1, 2, 10], ['supportdps', 'af_rof'], ['random'], ['command_dmg', 'command_crit'], []),
  // —————————————— AR ——————————————
  create_entry([2, 1, 2007], ['dps', 'af_dmg'], ['front'], ['weak_dmg'], []),
  create_entry([2, 1, 2027], ['dps'], ['front'], ['forcus_dmg', 'fastcd', 'rofstatic'], []),
  create_entry([2, 6, 1065], ['dps', 'af_dmg'], ['front'], ['grenade', 'deepdmg'], []),
  create_entry([2, 5, 1055], ['dps', 'supportdps', 'af_dmg', 'af_crit'], ['front'], ['forcus_dmg', 'fastcd'], ['laomo']),
  create_entry([2, 5, 1056], ['dps'], ['front'], ['grenade', 'multitarget'], []),
  create_entry([2, 5, 1057], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd', 'multihit'], []),
  create_entry([2, 5, 1060], ['dps', 'skilldps', 'af_dmg'], ['front'], ['forcus_dmg', 'max_acu'], ['night']),
  create_entry([2, 5, 1064], ['dps', 'supportdfs', 'af_dmg'], ['front'], ['forcus_dmg', 'forcus_rof', 'command_eva', 'fastcd'], []),
  create_entry([2, 5, 62], ['dps'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 5, 65], ['dps', 'af_dmg'], ['front'], ['grenade'], []),
  create_entry([2, 5, 73], ['dps', 'supportdps'], ['front'], ['fastcd', 'sweep', 'rofstatic'], []),
  create_entry([2, 5, 106], ['dps', 'supportdfs', 'af_eva'], ['front'], ['grenade'], []),
  create_entry([2, 5, 119], ['dps', 'skilldps', 'af_acu'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 5, 122], ['dps', 'skilldps', 'af_dmg'], ['front'], ['multihit'], []),
  create_entry([2, 5, 129], ['dps', 'longfill'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 5, 130], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd'], []),
  create_entry([2, 5, 172], ['dps'], ['front', 'back'], ['forcus_dmg', 'forcus_acu'], []),
  create_entry([2, 5, 175], ['dps', 'skilldps'], ['front'], ['forcus_dmg', 'forcus_rof'], []),
  create_entry([2, 5, 181], ['dps'], ['front'], ['forcus_dmg', 'forcus_crit'], ['night']),
  create_entry([2, 5, 194], ['dps', 'startdps', 'af_dmg'], ['front'], ['status'], []),
  create_entry([2, 5, 196], ['dps'], ['front'], ['grenade', 'forcus_dmg'], ['laomo']),
  create_entry([2, 5, 205], ['dps'], ['front'], ['passive', 'multihit'], []),
  create_entry([2, 5, 206], ['dps', 'af_dmg'], ['front', 'suggest_7'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], []),
  create_entry([2, 5, 214], ['dps'], ['front'], ['weak_rof', 'weak_movespeed', 'grenade'], []),
  create_entry([2, 5, 215], ['dps', 'supportdfs', 'af_dmg'], ['front'], ['forcus_dmg', 'shield'], []),
  create_entry([2, 5, 236], ['dps'], ['front'], ['grenade', 'multitarget'], []),
  create_entry([2, 5, 243], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'shield'], []),
  create_entry([2, 5, 274], ['dps'], ['front', 'suggest_7'], ['forcus_rof', 'weak_dmg'], []),
  create_entry([2, 5, 287], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof'], ['mengxin']),
  create_entry([2, 5, 289], ['dps'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 5, 306], ['dps', 'af_dmg'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 4, 1061], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 1063], ['dps'], ['front'], ['grenade', 'dizz'], []),
  create_entry([2, 4, 54], ['tank_eva', 'tank_arm'], ['front'], ['dizz'], ['laomo']),
  create_entry([2, 4, 55], ['dps', 'af_dmg', 'af_crit'], ['front'], ['forcus_dmg', 'fastcd'], ['mengxin']),
  create_entry([2, 4, 56], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 57], ['dps', 'longfill'], ['front'], ['forcus_rof', 'fastcd'], []),
  create_entry([2, 4, 60], ['dps', 'skilldps', 'af_dmg'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 4, 64], ['dps', 'af_dmg'], ['front'], ['forcus_dmg', 'fastcd'], []),
  create_entry([2, 4, 66], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 69], ['dps', 'af_dmg'], ['front'], ['grenade'], []),
  create_entry([2, 4, 72], ['dps', 'skilldps'], ['front'], ['forcus_dmg', 'forcus_rof'], []),
  create_entry([2, 4, 118], ['dps', 'skilldps'], ['front'], ['forcus_dmg'], ['night']),
  create_entry([2, 4, 171], ['supportdps', 'af_dmg'], ['front'], ['command_dmg', 'command_rof', 'command_acu'], ['burstsupport']),
  create_entry([2, 4, 187], ['dps'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 4, 207], ['dps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], []),
  create_entry([2, 4, 216], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 227], ['dps'], ['front'], ['grenade', 'forcus_dmg', 'forcus_acu'], ['night']),
  create_entry([2, 4, 237], ['dps'], ['front'], ['fastcd', 'sweep', 'rofstatic'], []),
  create_entry([2, 4, 262], ['dps'], ['front'], ['snipe'], ['skillcrit', 'skillarm']),
  create_entry([2, 4, 288], ['dps'], ['front'], ['forcus_dmg'], []),
  create_entry([2, 3, 70], ['dps'], ['front'], ['forcus_dmg'], ['mengxin']),
  // —————————————— SMG ——————————————
  create_entry([3, 1, 2019], ['supportdfs', 'tank_eva'], ['random'], ['forcus_dmg', 'forcus_eva', 'command_acu', 'command_eva', 'status', 'fastcd'], []),
  create_entry([3, 5, 1026], ['tank_eva'], ['random'], ['forcus_eva', 'ffshield'], []),
  create_entry([3, 5, 1101], ['tank_eva'], ['random'], ['command_dmg', 'command_eva', 'dizz', 'shield'], []),
  create_entry([3, 5, 1103], ['tank_eva', 'af_dmg'], ['random'], ['fastcd', 'smoke'], []),
  create_entry([3, 5, 16], ['tank_eva'], ['random'], ['ffshield'], []),
  create_entry([3, 5, 20], ['dps', 'tank_eva'], ['random'], ['incendinary'], []),
  create_entry([3, 5, 28], ['tank_eva', 'longfill'], ['random'], ['forcus_eva', 'forcus_movespeed'], []),
  create_entry([3, 5, 59], ['supportdfs', 'tank_eva'], ['random'], ['weak_dmg', 'weak_acu'], []),
  create_entry([3, 5, 104], ['tank_eva'], ['random'], ['ffshield'], []),
  create_entry([3, 5, 115], ['tank_eva', 'longfill'], ['random'], ['forcus_eva'], []),
  create_entry([3, 5, 127], ['tank_eva'], ['random'], ['dizz'], []),
  create_entry([3, 5, 135], ['dps', 'tank_eva', 'longfill'], ['random'], ['forcus_dmg'], []),
  create_entry([3, 5, 143], ['supportdfs', 'tank_eva'], ['random'], ['weak_dmg', 'forcus_eva', 'fastcd'], []),
  create_entry([3, 5, 213], ['tank_eva'], ['random'], ['forcus_dmg', 'forcus_acu', 'forcus_eva', 'ap', 'fastcd', 'status'], []),
  create_entry([3, 5, 224], ['tank_eva', 'longfill'], ['random'], ['forcus_acu', 'forcus_eva'], ['night']),
  create_entry([3, 5, 228], ['tank_eva'], ['random'], ['forcus_dmg', 'forcus_eva', 'shield'], []),
  create_entry([3, 5, 234], ['tank_eva'], ['random', 'suggest_2'], ['forcus_dmg', 'forcus_eva'], []),
  create_entry([3, 5, 245], ['tank_eva'], ['random'], ['forcus_eva', 'max_acu', 'max_crit'], ['illusion']),
  create_entry([3, 5, 251], ['tank_eva'], ['random', 'lowhp', 'suggest_2'], ['forcus_dmg'], []),
  create_entry([3, 5, 259], ['tank_eva'], ['random', 'suggest_2'], ['forcus_eva', 'multihit'], []),
  create_entry([3, 4, 1029], ['tank_eva'], ['random'], ['handgrenade', 'reducehurt'], []),
  create_entry([3, 4, 1031], ['tank_eva'], ['random'], ['incendinary', 'dizz'], []),
  create_entry([3, 4, 1093], ['tank_eva'], ['random'], ['forcus_dmg', 'forcus_rof', 'forcus_eva'], []),
  create_entry([3, 4, 1094], ['tank_eva'], ['random'], ['weak_acu', 'dizz'], []),
  create_entry([3, 4, 23], ['tank_eva'], ['random'], ['forcus_eva'], []),
  create_entry([3, 4, 26], ['tank_eva'], ['random'], ['ffshield'], []),
  create_entry([3, 4, 101], ['tank_eva'], ['random'], ['dizz'], []),
  create_entry([3, 4, 102], ['dps', 'tank_eva', 'longdps', 'af_crit'], ['random'], ['forcus_dmg', 'forcus_eva', 'status'], []),
  create_entry([3, 4, 103], ['tank_eva', 'af_dmg'], ['random'], ['fastcd', 'smoke'], []),
  create_entry([3, 4, 136], ['dps', 'tank_eva', 'af_dmg'], ['random'], ['handgrenade'], []),
  create_entry([3, 4, 137], ['tank_eva'], ['random'], ['fastcd', 'smoke'], []),
  create_entry([3, 4, 150], ['tank_eva'], ['random'], ['forcus_eva'], []),
  create_entry([3, 4, 177], ['dps', 'tank_eva'], ['random'], ['incendinary'], []),
  create_entry([3, 4, 203], ['tank_eva', 'af_dmg'], ['random', 'suggest_2'], ['forcus_dmg', 'forcus_eva'], []),
  create_entry([3, 4, 225], ['tank_eva'], ['random'], ['forcus_acu', 'forcus_eva'], []),
  create_entry([3, 4, 280], ['tank_eva', 'af_dmg'], ['random', 'suggest_8'], ['forcus_dmg', 'forcus_eva'], []),
  create_entry([3, 4, 286], ['tank_eva'], ['random'], ['ffshield'], ['purify']),
  create_entry([3, 3, 27], ['dps', 'tank_eva'], ['random'], ['incendinary'], ['mengxin']),
  create_entry([3, 3, 29], ['tank_eva'], ['random'], ['handgrenade'], ['mengxin']),
  // —————————————— RF ——————————————
  create_entry([4, 1, 2004], ['dps'], ['back'], ['ap', 'dizz'], []),
  create_entry([4, 1, 2005], ['dps'], ['back'], ['ap'], ['cluster']),
  create_entry([4, 1, 2020], ['dps'], ['back'], ['forcus_dmg', 'forcus_critdmg', 'ap', 'passive', 'multihit', 'multitarget'], []),
  create_entry([4, 6, 1053], ['dps'], ['back'], ['ap', 'snipe', 'shield_break'], []),
  create_entry([4, 5, 1039], ['dps'], ['back'], ['forcus_dmg', 'forcus_rof', 'ap', 'snipe'], []),
  create_entry([4, 5, 1252], ['dps'], ['back'], ['ap', 'passive', 'grenade'], []),
  create_entry([4, 5, 46], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 5, 48], ['dps'], ['back'], ['forcus_rof', 'ap'], []),
  create_entry([4, 5, 50], ['dps'], ['back'], ['forcus_dmg', 'ap'], []),
  create_entry([4, 5, 53], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 5, 128], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 5, 148], ['dps'], ['back'], ['forcus_dmg', 'ap'], []),
  create_entry([4, 5, 179], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 5, 192], ['dps'], ['back'], ['ap', 'penetrate', 'snipe'], []),
  create_entry([4, 5, 197], ['dps', 'supportdps'], ['back'], ['forcus_rof', 'forcus_crit', 'command_rof', 'command_crit', 'ap'], []),
  create_entry([4, 5, 198], ['dps'], ['back'], ['ap', 'fastcd', 'snipe'], ['normalkiller']),
  create_entry([4, 5, 204], ['dps'], ['back'], ['ap', 'passive', 'multihit', 'multitarget'], []),
  create_entry([4, 5, 211], ['dps'], ['back'], ['forcus_dmg', 'forcus_acu', 'ap'], []),
  create_entry([4, 5, 222], ['dps'], ['back'], ['ap', 'snipe'], ['skillcrit']),
  create_entry([4, 5, 231], ['dps'], ['back'], ['ap', 'fastcd', 'snipe'], ['stronger']),
  create_entry([4, 5, 257], ['dps'], ['back'], ['forcus_dmg', 'max_acu', 'weak_dmg', 'ap', 'passive', 'rofstatic'], []),
  create_entry([4, 5, 261], ['dps'], ['back'], ['ap', 'passive', 'grenade'], []),
  create_entry([4, 5, 266], ['dps'], ['back'], ['forcus_dmg', 'forcus_rof', 'ap', 'passive'], []),
  create_entry([4, 4, 1037], ['dps'], ['back'], ['forcus_dmg', 'forcus_critdmg', 'ap'], []),
  create_entry([4, 4, 1044], ['dps'], ['back'], ['forcus_rof', 'forcus_acu', 'ap', 'snipe'], []),
  create_entry([4, 4, 1051], ['dps'], ['back'], ['forcus_dmg', 'forcus_rof', 'ap'], []),
  create_entry([4, 4, 1095], ['dps'], ['back'], ['forcus_dmg', 'forcus_movespeed', 'ap', 'penetrate', 'handgrenade'], ['night']),
  create_entry([4, 4, 36], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 4, 39], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 4, 42], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 4, 43], ['dps'], ['back'], ['forcus_rof', 'ap'], []),
  create_entry([4, 4, 117], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 4, 146], ['dps'], ['back'], ['forcus_dmg', 'ap'], []),
  create_entry([4, 4, 180], ['dps'], ['back'], ['ap', 'snipe'], []),
  create_entry([4, 4, 184], ['dps'], ['back'], ['forcus_rof', 'forcus_acu', 'ap'], []),
  create_entry([4, 4, 200], ['dps'], ['back'], ['forcus_rof', 'ap'], ['night']),
  create_entry([4, 4, 226], ['dps'], ['back'], ['forcus_dmg', 'forcus_critdmg', 'ap'], []),
  create_entry([4, 4, 235], ['dps'], ['back'], ['forcus_rof', 'ap', 'snipe'], []),
  create_entry([4, 4, 247], ['dps'], ['back'], ['forcus_rof', 'ap'], []),
  create_entry([4, 4, 252], ['dps'], ['back'], ['ap', 'grenade'], []),
  create_entry([4, 4, 270], ['dps'], ['back'], ['forcus_rof', 'max_acu', 'ap', 'penetrate', 'snipe'], []),
  create_entry([4, 4, 273], ['dps'], ['back'], ['forcus_dmg', 'max_acu', 'weak_dmg', 'ap', 'rofstatic'], []),
  create_entry([4, 4, 305], ['dps'], ['middle', 'back'], ['forcus_dmg', 'ap'], []),
  create_entry([4, 3, 37], ['dps'], ['back'], ['forcus_dmg', 'ap'], ['mengxin']),
  create_entry([4, 3, 256], ['dps'], ['back'], ['forcus_dmg', 'forcus_acu', 'ap', 'fastcd', 'passive', 'snipe'], ['skillcrit']),
  // —————————————— MG ——————————————
  create_entry([5, 1, 2021], ['dps', 'supportdfs', 'af_arm'], ['random'], ['forcus_dmg', 'ap', 'multihit', 'multitarget'], []),
  create_entry([5, 5, 1075], ['dps'], ['random'], ['forcus_dmg', 'forcus_fastcs', 'ap', 'passive'], []),
  create_entry([5, 5, 109], ['dps'], ['random'], ['ap', 'passive'], []),
  create_entry([5, 5, 112], ['dps', 'supportdfs', 'longdps', 'af_arm'], ['random'], ['forcus_dmg', 'ap', 'passive'], []),
  create_entry([5, 5, 125], ['dps', 'supportdfs', 'af_arm'], ['random'], ['forcus_dmg', 'forcus_addcs', 'ap'], []),
  create_entry([5, 5, 173], ['dps'], ['random'], ['ap', 'passive'], []),
  create_entry([5, 5, 208], ['dps', 'supportdfs', 'af_arm'], ['random'], ['forcus_dmg', 'forcus_acu', 'forcus_addcs', 'ap', 'sweep'], []),
  create_entry([5, 5, 238], ['dps', 'supportdfs', 'af_arm'], ['random', 'suggest_7'], ['forcus_dmg', 'forcus_acu', 'forcus_addcs', 'ap', 'status'], []),
  create_entry([5, 5, 253], ['dps', 'supportdfs', 'longdps', 'af_arm'], ['random'], ['forcus_dmg', 'forcus_fastcs', 'ap', 'passive'], []),
  create_entry([5, 5, 263], ['dps', 'supportdps'], ['random'], ['forcus_dmg', 'forcus_acu', 'forcus_addcs', 'forcus_fastcs', 'ap', 'reducehurt'], []),
  create_entry([5, 5, 276], ['dps'], ['random'], ['forcus_dmg', 'forcus_acu', 'ap', 'penetrate', 'status'], []),
  create_entry([5, 5, 307], ['dps', 'af_arm'], ['random'], ['forcus_dmg', 'forcus_acu', 'forcus_fastcs', 'command_addcs', 'ap', 'passive'], []),
  create_entry([5, 4, 1081], ['dps'], ['random'], ['forcus_acu', 'max_crit', 'ap', 'shield'], []),
  create_entry([5, 4, 1089], ['dps'], ['random'], ['forcus_acu', 'forcus_addcs', 'ap'], []),
  create_entry([5, 4, 75], ['dps'], ['random'], ['forcus_dmg', 'ap'], []),
  create_entry([5, 4, 78], ['dps'], ['random'], ['forcus_dmg', 'ap'], ['night']),
  create_entry([5, 4, 85], ['dps'], ['random'], ['ap', 'passive'], []),
  create_entry([5, 4, 88], ['dps'], ['random'], ['forcus_dmg', 'forcus_addcs', 'ap'], []),
  create_entry([5, 4, 121], ['dps'], ['random'], ['forcus_acu', 'max_crit', 'ap'], []),
  create_entry([5, 4, 149], ['dps'], ['random'], ['forcus_acu', 'max_crit', 'ap'], ['night']),
  create_entry([5, 4, 185], ['dps', 'supportdfs', 'af_arm'], ['random'], ['forcus_dmg', 'forcus_addcs', 'ap'], ['night']),
  create_entry([5, 4, 199], ['dps'], ['random'], ['forcus_dmg', 'ap'], []),
  create_entry([5, 4, 240], ['dps'], ['random'], ['forcus_dmg', 'forcus_acu', 'ap'], []),
  create_entry([5, 4, 254], ['dps'], ['random'], ['forcus_acu', 'forcus_addcs', 'ap'], ['night']),
  create_entry([5, 4, 264], ['dps'], ['random'], ['forcus_fastcs', 'ap', 'passive'], []),
  create_entry([5, 4, 275], ['dps', 'startdps'], ['random'], ['forcus_dmg', 'forcus_addcs', 'ap', 'passive'], []),
  create_entry([5, 3, 77], ['dps'], ['random'], ['ap', 'passive'], []),
  // —————————————— SG ——————————————
  create_entry([6, 1, 2002], ['dps', 'tank_arm'], ['random'], ['grenade'], ['skillcrit']),
  create_entry([6, 1, 2008], ['dps', 'tank_arm'], ['random'], ['forcus_fastcs', 'passive'], []),
  create_entry([6, 1, 2022], ['tank_arm'], ['random'], ['grenade', 'passive'], []),
  create_entry([6, 5, 151], ['tank_arm'], ['random'], ['snipe'], []),
  create_entry([6, 5, 157], ['tank_arm'], ['random'], ['forcus_arm', 'forcus_eva'], []),
  create_entry([6, 5, 160], ['dps', 'tank_arm'], ['random'], ['multitarget', 'snipe'], []),
  create_entry([6, 5, 163], ['dps', 'tank_arm'], ['random'], ['forcus_rof', 'forcus_addcs', 'beakback'], []),
  create_entry([6, 5, 164], ['supportdfs', 'tank_arm'], ['random', 'suggest_3'], ['beakback', 'reducehurt'], []),
  create_entry([6, 5, 188], ['tank_arm'], ['random'], ['fastcd', 'shield'], []),
  create_entry([6, 5, 229], ['tank_arm'], ['random'], ['ffshield'], []),
  create_entry([6, 5, 281], ['tank_arm'], ['random'], ['grenade', 'shield'], []),
  create_entry([6, 5, 282], ['tank_arm'], ['random'], ['forcus_addcs', 'multihit', 'shield', 'reducehurt'], []),
  create_entry([6, 4, 283], ['tank_arm'], ['random'], ['multihit'], []),
]

// ———————————————————————————— 特殊处理：过高过低数值权衡 ————————————————————————————
var list_decline = [ // 调整规则
  [102, ['forcus_eva'], [50 / 150]], // UMP40
  [184, ['forcus_rof'], [50 / 75]], // t5000
  [197, ['forcus_rof'], [17 / 75]], // carcano
  [206, ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], [0.467, 0.467, 0.467, 0.467]], // AK-12
  [207, ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], [65 / 150, 50 / 150, 0.5, 0.5]], // CZ2000
  [211, ['forcus_dmg'], [0.9]], // srs
  [213, ['forcus_dmg', 'forcus_acu'], [0.7, 0.7]], // cms
  [226, ['forcus_dmg'], [0.6]], // mk12
  [235, ['forcus_rof'], [0.2]], // SPR
  [256, ['forcus_dmg', 'forcus_acu', 'snipe'], [0.5, 0.5, 0.4]], // falcon
  [266, ['forcus_dmg', 'forcus_rof'], [0.8, 0.5]], // R93
  [269, ['command_rof'], [0.4]], // P30 (10/25)
  [272, ['deepdmg'], [0.25]], // DE (10/40)
  [285, ['command_dmg', 'command_rof'], [18 / 25, 16 / 25]], // C-93
  [287, ['forcus_dmg', 'forcus_rof'], [50 / 75, 50 / 75]], // SIG-556
  [1001, ['command_rof'], [0.48]], // colt (12/25)
  [1026, ['forcus_eva'], [0.5]], // mp5
  [1039, ['forcus_dmg', 'forcus_rof'], [0.7, 20 / 75]], // mosin
  [1044, ['forcus_rof', 'forcus_acu'], [0.2, 0.2]], // sv98
  [1051, ['forcus_rof'], [0.3]], // fn49
  [1064, ['forcus_rof'], [0.1]], // g36 mod
  [1093, ['forcus_dmg', 'forcus_rof'], [0.2, 0.2]], // idw
  [1101, ['command_dmg', 'command_eva'], [2, 25 / 60]], // ump9
  [2020, ['forcus_dmg'], [0.8]], // stella
  [2027, ['forcus_dmg'], [0.2]], // angelica
]
// ———————————————————————————— 特殊处理：类似tag关联度 ——————————————————————————————
var list_relation = [
  [['rofstatic', 'forcus_rof'], 1], // 固定射速 & 突击专注
  [['command_acu', 'weak_eva'], 1], // 命中提升 & 回避降低
  [['command_eva', 'weak_acu'], 1], // 回避提升 & 命中降低
  [['dizz', 'stun'], 0.7], // 闪光弹 & 麻痹
  [['incendinary', 'handgrenade'], 0.7], // 燃烧弹 & 手榴弹
  [['grenade', 'penetrate'], 0.5], // 榴弹 & 穿透攻击
  [['smoke', 'weak_movespeed'], 0.5], // 烟雾弹 & 移速降低
  [['smoke', 'weak_rof'], 0.4], // 烟雾弹 & 射速降低
  [['ap', 'forcus_dmg'], 0.4], // 穿甲 & 火力专注
]
// ———————————————————————————— 特殊处理：特殊权重 ——————————————————————————————
var special_weight = new Map
special_weight.set('front', 0.1)
special_weight.set('random', 0.1)
special_weight.set('laomo', 0.1)
special_weight.set('af_eva', 0.6)
special_weight.set('af_acu', 0.8)
special_weight.set('command_movespeed', 1.5)
special_weight.set('passive', 0.2)
special_weight.set('multihit', 1.1)
special_weight.set('af_rof', 1.5)
special_weight.set('suggest_2', 1.5)
special_weight.set('shield', 1.5)
special_weight.set('grenade', 1.5)
special_weight.set('tank_eva', 3)
special_weight.set('tank_arm', 4)
special_weight.set('burstsupport', 2)
special_weight.set('startdps', 2)


// ====================标签添加：（1）修改lib_tag（2）修改lib_tag_NUMBER（2）添加一个新的MAP类tagNUMBER_TAGNAME====================
var lib_tag = [
  // 1
  [['dps', 'supportdps', 'supportdfs', 'tank_eva', 'tank_arm'],
  ['startdps', 'skilldps', 'longfill', 'longdps'],
  ['af_dmg', 'af_rof', 'af_acu', 'af_eva', 'af_arm', 'af_crit']
  ],
  // 2
  [['front', 'middle', 'back', 'random', 'lowhp'],
  ['suggest_2', 'suggest_3', 'suggest_7', 'suggest_8']
  ],
  // 3
  [['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_eva', 'forcus_arm', 'forcus_crit', 'forcus_critdmg', 'forcus_movespeed', 'forcus_addcs', 'forcus_fastcs', 'max_acu', 'max_crit'],
  ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_arm', 'command_crit', 'command_critdmg', 'command_movespeed', 'command_addcs'],
  ['weak_dmg', 'weak_rof', 'weak_acu', 'weak_eva', 'weak_movespeed', 'deepdmg'],
  ['ap', 'fastcd', 'passive', 'multihit', 'multitarget', 'sweep', 'penetrate', 'beakback', 'rofstatic'],
  ['smoke', 'handgrenade', 'incendinary', 'grenade', 'snipe', 'dizz', 'stun', 'ffshield', 'shield', 'shield_break', 'reducehurt', 'status']
  ],
  // 4
  [['night', 'mengxin', 'laomo', 'burstsupport',],
  ['skillcrit', 'skillarm', 'skilleva', 'normalkiller', 'feedback', 'shootguide', 'illusion', 'stronger', 'cluster', 'purify']
  ]
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
  longdps: '持久战',

  af_dmg: '火力影响',
  af_rof: '射速影响',
  af_acu: '命中影响',
  af_eva: '回避影响',
  af_arm: '护甲影响',
  af_crit: '暴击率影响'
}
var tag0_supportdps = new Map,
  tag0_supportdfs = new Map,
  tag0_dps = new Map,
  tag0_tank_eva = new Map,
  tag0_tank_arm = new Map,
  tag0_startdps = new Map,
  tag0_skilldps = new Map,
  tag0_longfill = new Map,
  tag0_longdps = new Map,

  tag0_af_dmg = new Map,
  tag0_af_rof = new Map,
  tag0_af_acu = new Map,
  tag0_af_eva = new Map,
  tag0_af_arm = new Map,
  tag0_af_crit = new Map

// tag1————————————————————————————————————————
var lib_tag_1 = {
  front: '<img src="../img/class-icon/icon-front.png" style="width:19px;height:19px">优先前排',
  middle: '<img src="../img/class-icon/icon-middle.png" style="width:19px;height:19px">优先中排',
  back: '<img src="../img/class-icon/icon-back.png" style="width:19px;height:19px">优先后排',
  random: '<img src="../img/class-icon/icon-random.png" style="width:19px;height:19px">随机锁敌',
  lowhp: '<img src="../img/class-icon/icon-lowhp.png" style="width:19px;height:19px">优先残血',

  suggest_2: '<img src="../img/class-icon/icon-suggest2.png" style="width:19px;height:19px">推荐2号位',
  suggest_3: '<img src="../img/class-icon/icon-suggest3.png" style="width:19px;height:19px">推荐3号位',
  suggest_7: '<img src="../img/class-icon/icon-suggest7.png" style="width:19px;height:19px">推荐7号位',
  suggest_8: '<img src="../img/class-icon/icon-suggest8.png" style="width:19px;height:19px">推荐8号位'
}
var tag1_front = new Map,
  tag1_middle = new Map,
  tag1_back = new Map,
  tag1_random = new Map,
  tag1_lowhp = new Map,

  tag1_suggest_2 = new Map,
  tag1_suggest_3 = new Map,
  tag1_suggest_7 = new Map,
  tag1_suggest_8 = new Map

// tag2————————————————————————————————————————
var lib_tag_2 = {
  forcus_dmg: '<img src="../img/icon-atkdmg.png" style="width:19px;height:19px">火力UP',
  forcus_rof: '<img src="../img/icon-rof.png" style="width:19px;height:19px">射速UP',
  forcus_acu: '<img src="../img/icon-atkacu.png" style="width:19px;height:19px">命中UP',
  forcus_eva: '<img src="../img/icon-eva.png" style="width:19px;height:19px">回避UP',
  forcus_arm: '<img src="../img/icon-arm.png" style="width:19px;height:19px">护甲UP',
  forcus_crit: '<img src="../img/icon-crit.png" style="width:19px;height:19px">暴击率UP',
  forcus_critdmg: '<img src="../img/icon-critdmg.png" style="width:19px;height:19px">暴击伤害UP',
  forcus_movespeed: '<img src="../img/class-icon/icon-movespeed.png" style="width:19px;height:19px">移速UP',
  forcus_addcs: '<img src="../img/class-icon/icon-addcs.png" style="width:19px;height:19px">增加弹量',
  forcus_fastcs: '<img src="../img/icon-clipsize.png" style="width:19px;height:19px">快速换弹',
  max_acu: '<img src="../img/class-icon/icon-max_acu.png" style="width:19px;height:19px">攻击必中',
  max_crit: '<img src="../img/class-icon/icon-max_crit.png" style="width:19px;height:19px">攻击必暴击',

  command_dmg: '<img src="../img/icon-atkdmg.png" style="width:19px;height:19px">团队火力UP',
  command_rof: '<img src="../img/icon-rof.png" style="width:19px;height:19px">团队射速UP',
  command_acu: '<img src="../img/icon-atkacu.png" style="width:19px;height:19px">团队命中UP',
  command_eva: '<img src="../img/icon-eva.png" style="width:19px;height:19px">团队回避UP',
  command_arm: '<img src="../img/icon-arm.png" style="width:19px;height:19px">团队护甲UP',
  command_crit: '<img src="../img/icon-crit.png" style="width:19px;height:19px">团队暴击率UP',
  command_critdmg: '<img src="../img/icon-critdmg.png" style="width:19px;height:19px">团队暴击伤害UP',
  command_movespeed: '<img src="../img/class-icon/icon-movespeed.png" style="width:19px;height:19px">团队移速UP',
  command_addcs: '<img src="../img/class-icon/icon-addcs.png" style="width:19px;height:19px">团队增加弹量',

  weak_dmg: '<img src="../img/class-icon/icon-atkdmg-decline.png" style="width:19px;height:19px">火力削弱',
  weak_rof: '<img src="../img/class-icon/icon-rof-decline.png" style="width:19px;height:19px">射速削弱',
  weak_acu: '<img src="../img/class-icon/icon-atkacu-decline.png" style="width:19px;height:19px">命中削弱',
  weak_eva: '<img src="../img/class-icon/icon-eva-decline.png" style="width:19px;height:19px">回避削弱',
  weak_movespeed: '<img src="../img/class-icon/icon-weak-movespeed.png" style="width:19px;height:19px">移速削弱',
  deepdmg: '<img src="../img/class-icon/icon-deepdmg.png" style="width:19px;height:19px">伤害加深',

  ap: '<img src="../img/icon-ap.png" style="width:19px;height:19px">穿甲',
  fastcd: '<img src="../img/class-icon/icon-fastcd.png" style="width:19px;height:19px">主动技短前置',
  passive: '<img src="../img/class-icon/icon-passive.png" style="width:19px;height:19px">被动',
  multihit: '<img src="../img/class-icon/icon-multihit.png" style="width:19px;height:19px">多段伤害',
  multitarget: '<img src="../img/class-icon/icon-multitarget.png" style="width:19px;height:19px">多目标',
  sweep: '<img src="../img/class-icon/icon-sweep.png" style="width:19px;height:19px">扫射',
  penetrate: '<img src="../img/class-icon/icon-penetrate.png" style="width:19px;height:19px">穿透攻击',
  beakback: '技能击退',
  rofstatic: '<img src="../img/class-icon/icon-staticrof.png" style="width:19px;height:19px">固定射速',

  smoke: '<img src="../img/class-icon/icon-smoke.png" style="width:19px;height:19px">烟雾弹',
  handgrenade: '<img src="../img/class-icon/icon-handgrenade.png" style="width:19px;height:19px">手榴弹',
  incendinary: '<img src="../img/class-icon/icon-incendinary.png" style="width:19px;height:19px">燃烧弹',
  grenade: '<img src="../img/class-icon/icon-grenade.png" style="width:19px;height:19px">榴弹',
  snipe: '<img src="../img/class-icon/icon-snipe.png" style="width:19px;height:19px">狙击',
  dizz: '<img src="../img/class-icon/icon-dizz.png" style="width:19px;height:19px">眩晕',
  stun: '<img src="../img/class-icon/icon-stun.png" style="width:19px;height:19px">麻痹',
  ffshield: '<img src="../img/icon-ff.png" style="width:19px;height:19px">力场',
  shield: '<img src="../img/class-icon/icon-shield.png" style="width:19px;height:19px">护盾',
  shield_break: '<img src="../img/class-icon/icon-shield_break.png" style="width:19px;height:19px">护盾穿透',
  reducehurt: '<img src="../img/class-icon/icon-reducehurt.png" style="width:19px;height:19px">伤害减免',
  status: '<img src="../img/icon-fil.png" style="width:19px;height:19px">状态切换'
}
var tag2_forcus_dmg = new Map,
  tag2_forcus_rof = new Map,
  tag2_forcus_acu = new Map,
  tag2_forcus_eva = new Map,
  tag2_forcus_arm = new Map,
  tag2_forcus_crit = new Map,
  tag2_forcus_critdmg = new Map,
  tag2_forcus_movespeed = new Map,
  tag2_forcus_addcs = new Map,
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
  tag2_command_movespeed = new Map,
  tag2_command_addcs = new Map,

  tag2_weak_dmg = new Map,
  tag2_weak_rof = new Map,
  tag2_weak_acu = new Map,
  tag2_weak_eva = new Map,
  tag2_weak_movespeed = new Map,
  tag2_deepdmg = new Map,

  tag2_ap = new Map,
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
  tag2_stun = new Map,
  tag2_ffshield = new Map,
  tag2_shield = new Map,
  tag2_shield_break = new Map,
  tag2_reducehurt = new Map,
  tag2_sweep = new Map,
  tag2_penetrate = new Map,
  tag2_beakback = new Map,
  tag2_status = new Map,
  tag2_rofstatic = new Map

// tag3————————————————————————————————————————
var lib_tag_3 = {
  night: '<img src="../img/class-icon/icon-night-abilityup.png" style="width:19px;height:19px">夜战特化',
  mengxin: '<img src="../img/class-icon/icon-mengxin.png" style="width:19px;height:19px">新手',
  laomo: '<img src="../img/class-icon/icon-laomo.png" style="width:19px;height:19px">劳模',
  skillcrit: '<img src="../img/class-icon/icon-skillcrit.png" style="width:19px;height:19px">技能可暴击',
  skillarm: '<img src="../img/class-icon/icon-skillarm.png" style="width:19px;height:19px">技能计算护甲',
  skilleva: '<img src="../img/class-icon/icon-skilleva.png" style="width:19px;height:19px">技能可被闪避',
  normalkiller: '<img src="../img/class-icon/icon-x45.png" style="width:19px;height:19px">非精英超伤害',
  feedback: '<img src="../img/class-icon/icon-python.png" style="width:19px;height:19px">反馈增益',
  shootguide: '<img src="../img/class-icon/icon-snipe.png" style="width:19px;height:19px">集火目标',
  burstsupport: '<img src="../img/class-icon/icon-burstsupport.png" style="width:19px;height:19px">爆发辅助',
  illusion: '<img src="../img/class-icon/icon-illusion.png" style="width: 19px; height: 19px">幻象',
  stronger: '<img src="../img/class-icon/icon-m82a1.png" style="width:19px;height:19px">越战越勇',
  cluster: '<img src="../img/class-icon/icon-cluster.png" style="width:19px;height:19px">聚怪',
  purify: '<img src="../img/class-icon/icon-purify.png" style="width:19px;height:19px">净化',
}
var tag3_night = new Map,
  tag3_mengxin = new Map,
  tag3_laomo = new Map,
  tag3_skillcrit = new Map,
  tag3_skillarm = new Map,
  tag3_skilleva = new Map,
  tag3_normalkiller = new Map,
  tag3_feedback = new Map,
  tag3_shootguide = new Map,
  tag3_burstsupport = new Map,
  tag3_illusion = new Map,
  tag3_stronger = new Map,
  tag3_cluster = new Map,
  tag3_purify = new Map

// 特殊说明库
var lib_alert = new Map
lib_alert.set('0_dps', '提供可靠伤害')
lib_alert.set('0_supportdps', '技能或光环能显著提升团队输出')
lib_alert.set('0_supportdfs', '技能或光环能显著提升团队防御，或提供控制')
lib_alert.set('0_startdps', '技能可以开场较快增幅输出')
lib_alert.set('0_skilldps', '主要输出集中在技能期')
lib_alert.set('0_longfill', '相比同定位人形，技能持续与冷却差距小')
lib_alert.set('0_longdps', '时间越长输出能力越强')
lib_alert.set('0_af_dmg', '影响格 火力 (hg/ar对ar) ≥16 (ar对smg) ≥25 (smg) ≥20')
lib_alert.set('0_af_rof', '影响格 射速 (hg) ≥16')
lib_alert.set('0_af_acu', '影响格 命中 (hg) ≥50 (ar) ≥60')
lib_alert.set('0_af_eva', '影响格 回避 (hg) ≥20 (ar对smg) ≥20')
lib_alert.set('0_af_arm', '影响格 护甲  ≥15')
lib_alert.set('0_af_crit', '影响格 暴击率 (hg) ≥20 (ar对ar) ≥30')

lib_alert.set('2_fastcd', '相比同定位人形，有较短前置冷却')
lib_alert.set('2_snipe', '狙击或类狙击技能，除非特殊说明，无视护甲/无法暴击/必定命中')

lib_alert.set('3_mengxin', '适合新人培养，节省核心度过艰难期')
lib_alert.set('3_laomo', '高密度参与日常游戏内容的人形')
lib_alert.set('3_feedback', '受某类增益将以一定数值反馈给影响格队友')
lib_alert.set('3_shootguide', '引导全队射击目标，无法引导自带锁敌逻辑的技能')

// 函数

function find_tdoll(id) {
  var len = lib_tdoll.length
  for (var i = 0; i < len; i++) {
    if (lib_tdoll[i].id === id) return lib_tdoll[i]
  }
}
function generate_map() {
  for (var tdoll of lib_tdoll) {
    for (var i = 0; i < 4; i++) {
      for (var tag of tdoll.tag[i]) {
        eval('tag' + i + '_' + tag + '.set(' + "'t'+tdoll.id,true)") // record t-doll id
      }
    }
  }
}
function make_starstr(num) {
  var str = ''
  if (num === 6) str += '<span style="color:red">'
  else if (num === 5) str += '<span style="color:#FF6600">'
  else if (num === 4) str += '<span style="color:#33CC00">'
  else if (num === 3) str += '<span style="color:dodgerblue">'
  else if (num === 2) str += '<span style="color:darkseagreen">'
  else if (num === 1) str += '<span style="color:#FF00FF">'
  for (var i = 0; i < num; i++) str += '★'
  str += '</span>'
  return str
}
function make_color(num) {
  if (num === 0) return 'primary'
  if (num === 1) return 'success'
  if (num === 2) return 'warning'
  if (num === 3) return 'danger'
}
function is_exist(taglist, tag) {
  for (var element of taglist) {
    if (tag === element) return true
  }
  return false
}
function fill_tag() { // 按标签，按钮名btn_tag_0_support
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
function fill_tag_tdoll() { // 按人形搜索，按钮名btn_tdoll_233
  var str_pid = '', str_btn = '', str_tdoll = ''
  for (var entry of lib_tdoll) {
    str_tdoll = '<img src="../img/class/' + entry.id + '.png" style="width:37px;height:37px"> '
    str_pid = 'tag_tdoll_' + entry.type + '_' + entry.star
    str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tdoll_' + entry.id + '" onclick="classify_by_tdoll(' + entry.id + ')">' + str_tdoll
    str_btn += make_starstr(entry.star) + ' '
    eval('str_btn+=lib_name.t' + entry.id)
    str_btn += '</button> '
    document.getElementById(str_pid).innerHTML += str_btn
  }
}
function empty_taglist(tag_type) {
  for (var currenttag of pick_tag[tag_type]) {
    document.getElementById('btn_tag_' + tag_type + '_' + currenttag).className = 'btn btn-default'
  }
  pick_tag[tag_type] = []
  change_tag(tag_type)
}
function jump_tag(tag_type, tag) {
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
function change_tag(tag_type) { // 改变标签，按钮名btn_tag_0_TAGNAME
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
function classify_by_tag() {
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
      str_tdoll = '<img src="../img/class/' + entry.id + '.png" style="width:37px;height:37px"> '
      str_btn += '<button type="button" style="padding:5px" class="btn btn-default" id="btn_jump_tdoll_' + entry.id + '" onclick="jump_tdoll(' + entry.id + ')"> ' + str_tdoll
      str_btn += make_starstr(entry.star) + ' '
      eval('str_btn+=lib_name.t' + entry.id)
      str_btn += '</button> '
    }
    document.getElementById('result_1').innerHTML = str_btn
  }
  document.getElementById('result_1_alert').innerHTML = str_alert
}
function jump_tdoll(id) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade in active'
  document.getElementById('sort_tag').className = 'tab-pane fade'
  document.getElementById('sort_tdoll_li').className = 'active'
  document.getElementById('sort_tag_li').className = ''
  classify_by_tdoll(id)
}
function classify_by_tdoll(id) {
  var str_btn = '', str_pickname = ''
  var tdoll = find_tdoll(id)
  str_pickname = '<img src="../img/class/' + id + '.png" style="width:37px;height:37px"> '
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
  find_similar(id)
}
function find_weight(level) {
  if (level === 0) return 100
  else if (level === 1) return 100
  else if (level === 2) return 110 // skill
  else if (level === 3) return 200 // special characteristic
}
function find_decline(tag1, tag2, id1, id2) { // 特殊处理：过高过低数值权衡
  var decline = 1
  for (var decline_pair of list_decline) {
    if (is_someone_equaltag(tag1, tag2, id1, id2, decline_pair[0])) {
      var num_tag = decline_pair[1].length
      for (var t = 0; t < num_tag; t++) {
        if (tag1 === decline_pair[1][t]) decline *= decline_pair[2][t]
      }
    }
  }
  return decline
}
function find_relatedpara(list1, list2) { // 特殊处理：类似tag关联度，相关性标签
  var relativity = 0
  for (var related_pair of list_relation) {
    if (is_related_pair(list1, list2, related_pair[0][0], related_pair[0][1])) {
      relativity += related_pair[1]
    }
  }
  return relativity
}
function find_samepara(tag1, tag2) { // weight determination
  if (tag1 === tag2) { // equal
    if (special_weight.get(tag1) != undefined) return special_weight.get(tag1)
    else return 1
  } else return 0
}
function find_sametag(list1, list2, id1, id2, weight) { // decline here
  var sim = 0, decline = 1
  for (var tag1 of list1) {
    for (var tag2 of list2) {
      decline = find_decline(tag1, tag2, id1, id2)
      sim += weight * find_samepara(tag1, tag2) * decline // tag1:my, tag2:other
    }
  }
  sim += weight * find_relatedpara(list1, list2) // related tag
  return Math.ceil(sim)
}
function find_similar(ID) {
  if (ID === -1) true
  else {
    pick_id = ID
    var sim = 0
    var simlist = []
    var this_tdoll = find_tdoll(ID)
    var this_type = this_tdoll.type
    var this_taglist = this_tdoll.tag
    // find similarity
    for (var tdoll of lib_tdoll) {
      if (is_self(tdoll.id, ID)) {
        true // do nothing
      } else {
        sim = 0
        if (tdoll.type === this_type) sim += 250
        for (var i = 0; i < 4; i++) {
          sim += find_sametag(this_taglist[i], tdoll.tag[i], ID, tdoll.id, find_weight(i))
        }
        if (sim > 0) {
          simlist.push([tdoll.id, sim])
        }
      }
    }
    simlist.sort(comp_sim)
    var max_num = num_sort // can be modify
    if (simlist.length < max_num) max_num = simlist.length
    var str_display = ''
    for (var n = 0; n < max_num; n++) {
      var current_tdoll = find_tdoll(simlist[n][0])
      var current_str = ''
      current_str += '<tr><td style="vertical-align:middle"><button type="button" style="padding:5px" class="btn btn-default" onclick="classify_by_tdoll(' + current_tdoll.id + ')">'
      current_str += '<img src="../img/class/' + current_tdoll.id + '.png" style="width:37px;height:37px"> ' + make_starstr(current_tdoll.star)
      eval('current_str+=lib_name.t' + current_tdoll.id)
      current_str += '</button></td><td style="vertical-align:middle;text-align:center"><b><span style="color:dodgerblue">' + simlist[n][1] + '</span></b></td>'
      current_str += '<td style="line-height:40px;vertical-align:middle">'
      for (var i = 0; i < 4; i++) {
        for (var name of current_tdoll.tag[i]) {
          if (is_tag_in(name, this_taglist[i])) {
            current_str += '<button type="button" style="padding:5px" class="btn btn-' + make_color(i) + '" disabled>'
            eval('current_str+=lib_tag_' + i + '.' + name)
            current_str += '</button> '
          }
        }
      }
      current_str += '</td></tr>'
      str_display += current_str
    }
    document.getElementById('result_2_sim').innerHTML = str_display
  }
}

window.onload = function () {
  fill_tag()
  fill_tag_tdoll()
  generate_map()
}
function find_favor(type, taglist) {
  var favor = [[], [], [], [], []] // five-dimision means type
  // type-duality
  if (type === 1 || type === 4) favor[4].push(1)
  else if (type === 2) favor[4].push(1, 3)
  else if (type === 3) favor[4].push(1, 2)
  else if (type === 5) favor[4].push(1, 6)
  else if (type === 6) favor[4].push(5)
  // actor-duality
  for (var tag of taglist[0]) {
    if (tag === 'dps') {
      favor[0].push('supportdps')
    }
  }
  return favor
}
function find_partner(ID) {
  var par = 0
  var parlist = []
  var this_tdoll = find_tdoll(ID)
  var this_type = this_tdoll.type
  var this_taglist = this_tdoll.tag
  // which position is she?
  var favor = find_favor(this_taglist)
  // what kind of skill she have?

  // calculate co-supporting parameter
}

// 基础语义函数

function comp_sim(pair_a, pair_b) { return pair_b[1] - pair_a[1]; } // 相似对比较
function is_related_pair(list1, list2, tag1, tag2) { // 是否是相关tag
  var loop_tag = [tag1, tag2]
  var loop_list = [list1, list2]
  var is_in = [false, false, false, false]
  for (var t = 0; t < 2; t++) {
    for (var l = 0; l < 2; l++) {
      for (var tl of loop_list[l]) {
        if (tl === loop_tag[t]) {
          is_in[2 * t + l] = true
          break
        }
      }
    }
  }
  if ((is_in[0] && !is_in[1] && !is_in[2] && is_in[3]) || (!is_in[0] && is_in[1] && is_in[2] && !is_in[3])) return true
  else return false
}
function is_self(id1, id2) { // 是否是自己，包括改造
  if (id1 === id2) return true
  else if (id1 + 1000 === id2 && id1 < 1000) return true
  else if (id1 - 1000 === id2 && id1 > 1000) return true
  else return false
}
function is_someone_equaltag(tag1, tag2, id1, id2, special_id) { // 两人是否有同样的某个标签
  return (id1 === special_id || id2 === special_id) && (tag1 === tag2)
}
function is_tag_in(tag, taglist) { // tag是否在taglist中
  for (var in_tag of taglist) {
    if (tag === in_tag) return true
  }
  return false
}

var is_detail_shown = false
function show_details() {
  var t_details = '', t_showdetails = '点击展开详情'
  if (!is_detail_shown) {
    t_details += '相似用途条目相似度关联使得推荐更客观<br>'
    t_details += '&nbsp-&nbsp固定射速 ↔ 突击专注：1<br>'
    t_details += '&nbsp-&nbsp精确号令 ↔ 掩护压制：1<br>'
    t_details += '&nbsp-&nbsp掩护号令 ↔ 精确压制：1<br>'
    t_details += '&nbsp-&nbsp闪光弹 ↔ 麻痹：0.7<br>'
    t_details += '&nbsp-&nbsp燃烧弹 ↔ 手榴弹：0.7<br>'
    t_details += '&nbsp-&nbsp榴弹 ↔ 穿透攻击：0.5<br>'
    t_details += '&nbsp-&nbsp烟雾弹 ↔ 减速：0.5<br>'
    t_details += '&nbsp-&nbsp烟雾弹 ↔ 突击压制：0.4<br>'
    t_details += '&nbsp-&nbsp穿甲 ↔ 火力专注：0.4<br>'
    t_showdetails = '点击收起详情'
  }
  is_detail_shown = !is_detail_shown
  document.getElementById('text_details').innerHTML = t_details
  document.getElementById('text_showdetails').innerHTML = t_showdetails
}
function sortnum(n) {
  document.getElementById('btn_show7').className = 'btn btn-outline btn-success'
  document.getElementById('btn_show10').className = 'btn btn-outline btn-success'
  document.getElementById('btn_show20').className = 'btn btn-outline btn-success'
  // do
  document.getElementById('btn_show' + n).className = 'btn btn-success'
  num_sort = n
  find_similar(pick_id)
}