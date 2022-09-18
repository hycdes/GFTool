function create_entry(info_name, info_taglist0, info_taglist1, info_taglist2, info_taglist3) {
  var entry = {}
  entry.type = info_name[0]
  entry.star = info_name[1]
  entry.id = info_name[2]
  entry.tag = [info_taglist0, info_taglist1, info_taglist2, info_taglist3]
  return entry
}

var num_taglist = 4; // 首页标签列表数量
var num_sort = 7 // 默认排序展示数
var pick_id = -1 //
var pick_tag = [
  [],
  [],
  [],
  []
]
// ====================人形添加：修改lib_name和lib_tdoll====================
var lib_name = {
  // —————————————— Sirius Hero ——————————————
  t11001: '骇客 K.',
  // —————————————— Sirius Props ——————————————
  t1001: '替身徽章',
  // —————————————— Mobius Hero ——————————————
  t2010: '绫', t2020: '加布里埃尔',
}

var lib_tdoll = [

  // —————————————— Sirius Hero ——————————————
  create_entry([1, 1, 11001], [['sirius_orientation_hack'], 3], [], [], []),

  // —————————————— Sirius Props ——————————————

  // —————————————— Mobius Hero ——————————————
  create_entry([3, 1, 2010], [['mobius_orientation_block'], 3], [], [], []),
  create_entry([3, 1, 2020], [['mobius_orientation_block'], 4], [], [], []),
]

// ———————————————————————————— 特殊处理：过高过低数值权衡 ————————————————————————————
var list_decline = [ // 调整规则
  [102, ['forcus_eva'], [50 / 150]], // UMP40
  [184, ['forcus_rof'], [50 / 75]], // t5000
  [194, ['forcus_dmg'], [0.25 / 0.75]], // K2
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
  [316, ['forcus_dmg', 'forcus_rof'], [0.2 / 0.75, 0.2 / 0.75]], // general liu
  [330, ['forcus_rof'], [0.1 / 0.75]], // FX-05
  [1001, ['command_rof'], [0.48]], // colt (12/25)
  [1026, ['forcus_eva'], [0.5]], // mp5
  [1039, ['forcus_dmg', 'forcus_rof'], [0.7, 20 / 75]], // mosin
  [1044, ['forcus_rof', 'forcus_acu'], [0.2, 0.2]], // sv98
  [1051, ['forcus_rof'], [0.3]], // fn49
  [1064, ['forcus_rof'], [0.1]], // g36 mod
  [1093, ['forcus_dmg', 'forcus_rof'], [0.2, 0.2]], // idw
  [1101, ['command_dmg', 'command_eva'], [2, 25 / 60]], // ump9
  [2020, ['forcus_dmg'], [0.8]], // stella
  [2024, ['forcus_dmg'], [60 / 75]], // angelica
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
  [['immunity', 'ffshield'], 1], // 穿甲 & 火力专注
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


// ====================标签添加：（1）修改lib_tag（2）修改lib_tag_NUMBER（3）添加一个新的MAP类tagNUMBER_TAGNAME====================
var lib_tag = [
  // 0
  [
    ['sirius_orientation_hack', 'sirius_orientation_support', 'sirius_orientation_intel', 'sirius_orientation_interference', 'sirius_orientation_survive'],
    ['mobius_orientation_damage', 'mobius_orientation_block', 'mobius_orientation_agile', 'mobius_orientation_intel', 'mobius_orientation_hide'],
  ],
  // 1
  [['front', 'middle', 'back', 'random', 'lowhp'],
  ['suggest_1', 'suggest_2', 'suggest_3', 'suggest_7', 'suggest_8']
  ],
  // 2
  [['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_eva', 'forcus_arm', 'forcus_crit', 'forcus_critdmg', 'forcus_movespeed', 'forcus_addcs', 'forcus_fastcs', 'max_acu', 'max_crit', 'max_ap'],
  ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_arm', 'command_crit', 'command_critdmg', 'command_movespeed', 'command_reducehurt', 'command_addcs'],
  ['weak_dmg', 'weak_rof', 'weak_acu', 'weak_eva', 'weak_movespeed', 'deepdmg'],
  ['ap', 'fastcd', 'passive', 'multihit', 'multitarget', 'sweep', 'penetrate', 'beakback', 'dmgstatic', 'rofstatic'],
  ['smoke', 'handgrenade', 'incendinary', 'grenade', 'snipe', 'dizz', 'stun', 'ffshield', 'shield', 'shield_break', 'reducehurt', 'status']
  ],
  // 3
  [['night', 'mengxin', 'laomo', 'burstsupport',],
  ['skillcrit', 'skillarm', 'skilleva', 'normalkiller', 'feedback', 'shootguide', 'taunt', 'illusion', 'stronger', 'cluster', 'purify', 'immunity', 'clearbuff', 'immo']
  ]
]
// tag0 职业定位
var lib_tag_0 = {
  sirius_orientation_hack: '破译',
  sirius_orientation_support: '援护',
  sirius_orientation_intel: '情报',
  sirius_orientation_interference: '干扰',
  sirius_orientation_survive: '生存',

  mobius_orientation_damage: '伤害',
  mobius_orientation_block: '阻制',
  mobius_orientation_agile: '敏捷',
  mobius_orientation_intel: '情报',
  mobius_orientation_hide: '隐秘'
}
var tag0_sirius_orientation_hack = new Map,
  tag0_sirius_orientation_hack = new Map,
  tag0_sirius_orientation_hack = new Map,
  tag0_sirius_orientation_hack = new Map,
  tag0_sirius_orientation_hack = new Map,

  tag0_mobius_orientation_damage = new Map,
  tag0_mobius_orientation_block = new Map,
  tag0_mobius_orientation_agile = new Map,
  tag0_mobius_orientation_intel = new Map,
  tag0_mobius_orientation_hide = new Map

// tag1 职业定位
var lib_tag_1 = {
  mobius_orientation_111: '111',
}
var tag1_mobius_orientation_111 = new Map


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
  max_ap: '<img src="../img/class-icon/icon-max_crit.png" style="width:19px;height:19px">攻击无视护甲',

  command_dmg: '<img src="../img/icon-atkdmg.png" style="width:19px;height:19px">团队火力UP',
  command_rof: '<img src="../img/icon-rof.png" style="width:19px;height:19px">团队射速UP',
  command_acu: '<img src="../img/icon-atkacu.png" style="width:19px;height:19px">团队命中UP',
  command_eva: '<img src="../img/icon-eva.png" style="width:19px;height:19px">团队回避UP',
  command_arm: '<img src="../img/icon-arm.png" style="width:19px;height:19px">团队护甲UP',
  command_crit: '<img src="../img/icon-crit.png" style="width:19px;height:19px">团队暴击率UP',
  command_critdmg: '<img src="../img/icon-critdmg.png" style="width:19px;height:19px">团队暴击伤害UP',
  command_movespeed: '<img src="../img/class-icon/icon-movespeed.png" style="width:19px;height:19px">团队移速UP',
  command_reducehurt: '<img src="../img/class-icon/icon-reducehurt.png" style="width:19px;height:19px">团队伤害减免',
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
  dmgstatic: '<img src="../img/class-icon/icon-staticdmg.png" style="width:19px;height:19px">固定伤害',
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
  tag2_max_ap = new Map,

  tag2_command_dmg = new Map,
  tag2_command_rof = new Map,
  tag2_command_acu = new Map,
  tag2_command_eva = new Map,
  tag2_command_arm = new Map,
  tag2_command_crit = new Map,
  tag2_command_critdmg = new Map,
  tag2_command_movespeed = new Map,
  tag2_command_reducehurt = new Map,
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
  tag2_dmgstatic = new Map,
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
  taunt: '<img src="../img/class-icon/icon-taunt.png" style="width: 19px; height: 19px">嘲讽',
  illusion: '<img src="../img/class-icon/icon-illusion.png" style="width: 19px; height: 19px">靶机',
  stronger: '<img src="../img/class-icon/icon-m82a1.png" style="width:19px;height:19px">越战越勇',
  cluster: '<img src="../img/class-icon/icon-cluster.png" style="width:19px;height:19px">聚怪',
  purify: '<img src="../img/class-icon/icon-purify.png" style="width:19px;height:19px">净化',
  immunity: '<img src="../img/class-icon/icon-immunity.png" style="width:19px;height:19px">伤害免疫',
  clearbuff: '<img src="../img/class-icon/icon-clearbuff.png" style="width:19px;height:19px">清除增益',
  immo: '<img src="../img/class-icon/icon-immo.png" style="width:19px;height:19px">条件无敌',
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
  tag3_taunt = new Map,
  tag3_illusion = new Map,
  tag3_stronger = new Map,
  tag3_cluster = new Map,
  tag3_purify = new Map,
  tag3_immunity = new Map,
  tag3_clearbuff = new Map,
  tag3_immo = new Map

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
        if (tag.length > 0)
          eval('tag' + i + '_' + tag[0] + '.set(' + "'t'+tdoll.id,true)") // record t-doll id
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
  for (var i = 0; i < num_taglist; i++) {
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
    str_tdoll = '<img src="avatar/' + entry.id + '.png" style="width:37px;height:37px"> '
    str_pid = 'tag_tdoll_' + entry.type + '_' + entry.star
    str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tdoll_' + entry.id + '" onclick="classify_by_tdoll(' + entry.id + ')">' + str_tdoll
    str_btn += make_starstr(entry.star) + ' '
    eval('str_btn+=lib_name.t' + entry.id)
    str_btn += '</button> '
    document.getElementById(str_pid).innerHTML += str_btn
  }
}
function empty_taglist(tag_type) { // 清空对应tag列表选取
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
      str_tdoll = '<img src="avatar/' + entry.id + '.png" style="width:37px;height:37px"> '
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
  str_pickname = '<img src="avatar/' + id + '.png" style="width:37px;height:37px"> '
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
      current_str += '<img src="avatar/' + current_tdoll.id + '.png" style="width:37px;height:37px"> ' + make_starstr(current_tdoll.star)
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
    t_details += '&nbsp-&nbsp伤害免疫 ↔ 力场盾：1<br>'
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