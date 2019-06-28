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
  t4: '蟒蛇', t96: '灰熊MkV', t97: 'M950A', t114: '维尔德MkⅡ',
  t1005: '纳甘左轮 MOD',
  t3: 'M9',
  t5: '纳甘左轮',

  t65: 'HK416', t73: 'AUG', t106: 'FAL', t196: 'Zas M21', t206: 'AK-12', t236: 'K11',
  t54: 'M16A1',

  t16: '汤姆森', t104: 'G36C', t143: 'RO635', t213: 'C-MS',

  t48: 'WA2000', t50: '李·恩菲尔德', t53: 'NTW-20', t128: 'M99', t179: 'DSR-50', t197: '卡尔卡诺M1891', t198: '卡尔卡诺M91/38',t211: 'SRS', t266: 'R93',
  t200: 'XM3',

  t105: 'MG5', t112: '内格夫', t173: 'PKP',

  t157: 'KSG'
}
var lib_tdoll = [
  create_entry([1, 5, 4], ['support', 'dps'], ['random'], ['forcus_dmg', 'command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_crit'], ['feedback']),
  create_entry([1, 5, 96], ['support'], ['random'], ['command_dmg'], []),
  create_entry([1, 5, 97], ['support'], ['random'], ['command_rof'], []),
  create_entry([1, 5, 114], ['support'], ['random'], ['weak_acu'], []),
  create_entry([1, 4, 1005], ['support'], ['random'], ['command_dmg', 'command_acu', 'weak_dmg', 'fastcd', 'night'], []),
  create_entry([1, 3, 3], ['support'], ['random'], ['dizz'], []),
  create_entry([1, 2, 5], ['support'], ['random'], ['weak_dmg', 'night'], []),

  create_entry([2, 5, 65], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 73], ['dps'], ['front'], ['sweep', 'rofstatic'], []),
  create_entry([2, 5, 106], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 5, 196], ['dps'], ['front'], ['grenade', 'forcus_dmg'], []),
  create_entry([2, 5, 206], ['dps', 'longdps'], ['front'], ['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_crit'], []),
  create_entry([2, 5, 106], ['dps'], ['front'], ['grenade'], []),
  create_entry([2, 4, 54], ['tank_eva', 'tank_arm'], ['front'], ['dizz'], []),

  create_entry([3, 5, 16], ['tank_eva'], ['random'], ['longcd', 'ffshield'], []),
  create_entry([3, 5, 104], ['tank_eva'], ['random'], ['longcd', 'ffshield'], []),
  create_entry([3, 5, 143], ['tank_eva'], ['random'], ['weak_dmg', 'forcus_eva', 'fastcd'], []),
  create_entry([3, 5, 213], ['tank_eva'], ['random', 'ap'], ['forcus_eva', 'forcus_dmg', 'forcus_acu', 'status', 'fastcd'], []),

  create_entry([4, 5, 48], ['dps'], ['back', 'ap'], ['forcus_rof'], []),
  create_entry([4, 5, 50], ['dps'], ['back', 'ap'], ['forcus_dmg'], []),
  create_entry([4, 5, 53], ['dps'], ['back', 'ap'], ['snipe', 'longcd'], []),
  create_entry([4, 5, 128], ['dps'], ['back', 'ap'], ['snipe', 'longcd'], []),
  create_entry([4, 5, 179], ['dps'], ['back', 'ap'], ['snipe', 'longcd'], []),
  create_entry([4, 5, 197], ['dps', 'support'], ['back', 'ap'], ['forcus_rof', 'forcus_crit', 'command_rof', 'command_crit'], []),
  create_entry([4, 5, 198], ['dps'], ['back', 'ap'], ['snipe', 'fastcd'], ['normalkiller']),
  create_entry([4, 5, 211], ['dps'], ['back', 'ap'], ['forcus_rof', 'forcus_acu'], []),
  create_entry([4, 5, 266], ['dps', 'longdps'], ['back', 'ap'], ['forcus_dmg', 'forcus_rof'], []),
  create_entry([4, 4, 200], ['dps'], ['back', 'ap'], ['forcus_dmg', 'forcus_rof', 'longcd', 'night'], []),

  create_entry([5, 5, 105], ['dps', 'fastdps'], ['random', 'ap'], ['passive'], []),
  create_entry([5, 5, 112], ['dps', 'longdps'], ['random', 'ap'], ['forcus_dmg', 'passive'], []),
  create_entry([5, 5, 173], ['dps', 'fastdps'], ['random', 'ap'], ['passive'], []),

  create_entry([6, 5, 157], ['tank_arm'], ['random', 'beakback'], ['forcus_arm', 'forcus_eva'], [])
]
// ====================标签添加：修改lib_tag和lib_tag_NUMBER，并添加一个新的MAP类tagNUMBER_TAGNAME====================
var lib_tag = [
  [['dps', 'support', 'tank_eva', 'tank_arm']
    , ['fastdps', 'longdps']],

  [['front', 'back', 'random'],
    ['ap', 'multitarget', 'beakback']],

  [['forcus_dmg', 'forcus_rof', 'forcus_acu', 'forcus_eva', 'forcus_arm', 'forcus_crit', 'forcus_critdmg'],
    ['command_dmg', 'command_rof', 'command_acu', 'command_eva', 'command_crit', 'command_critdmg'],
    ['weak_dmg', 'weak_acu'],
    ['fastcd', 'longcd', 'passive', 'night'],
    ['grenade', 'snipe', 'dizz', 'ffshield', 'status', 'sweep', 'beakback', 'rofstatic']],

  [['mengxin', 'normalkiller', 'feedback']]
]
// tag0————————————————————————————————————————
var lib_tag_0 = {
  dps: '输出',
  support: '辅助',
  tank_eva: '闪避前排',
  tank_arm: '护甲前排',

  fastdps: '快速爆发',
  longdps: '持久战斗'
}
var tag0_support = new Map,
  tag0_dps = new Map,
  tag0_tank_eva = new Map,
  tag0_tank_arm = new Map,
  tag0_fastdps = new Map,
  tag0_longdps = new Map
// tag1————————————————————————————————————————
var lib_tag_1 = {
  front: '优先前排',
  back: '优先后排',
  random: '随机锁敌',

  ap: '穿甲',
  multitarget: '多目标',
  beakback: '普攻击退'
}
var tag1_front = new Map,
  tag1_back = new Map,
  tag1_random = new Map,
  tag1_ap = new Map,
  tag1_multitarget = new Map,
  tag1_beakback = new Map
// tag2————————————————————————————————————————
var lib_tag_2 = {
  forcus_dmg: '火力UP',
  forcus_rof: '射速UP',
  forcus_acu: '命中UP',
  forcus_eva: '回避UP',
  forcus_arm: '护甲UP',
  forcus_crit: '暴击率UP',
  forcus_critdmg: '暴击伤害UP',

  command_dmg: '团队火力UP',
  command_rof: '团队射速UP',
  command_acu: '团队命中UP',
  command_eva: '团队回避UP',
  command_crit: '团队暴击率UP',
  command_critdmg: '团队暴击伤害UP',

  weak_dmg: '火力压制',
  weak_acu: '命中压制',

  fastcd: '短前置',
  longcd: '长前置',
  passive: '被动',
  night: '夜战特化',

  grenade: '榴弹',
  snipe: '炮击',
  dizz: '眩晕',
  ffshield: '力场',
  status: '状态切换',
  sweep: '扫射',
  beakback: '技能击退',
  rofstatic: '固定射速'
}
var tag2_forcus_dmg = new Map,
  tag2_forcus_rof = new Map,
  tag2_forcus_acu = new Map,
  tag2_forcus_eva = new Map,
  tag2_forcus_arm = new Map,
  tag2_forcus_crit = new Map,
  tag2_forcus_critdmg = new Map,

  tag2_command_dmg = new Map,
  tag2_command_rof = new Map,
  tag2_command_acu = new Map,
  tag2_command_eva = new Map,
  tag2_command_crit = new Map,
  tag2_command_critdmg = new Map,

  tag2_weak_dmg = new Map,
  tag2_weak_acu = new Map,

  tag2_fastcd = new Map,
  tag2_longcd = new Map,
  tag2_passive = new Map,
  tag2_night = new Map,

  tag2_grenade = new Map,
  tag2_snipe = new Map,
  tag2_dizz = new Map,
  tag2_ffshield = new Map,
  tag2_sweep = new Map,
  tag2_beakback = new Map,
  tag2_status = new Map,
  tag2_rofstatic = new Map
// tag3————————————————————————————————————————
var lib_tag_3 = {
  mengxin: '新手',
  normalkiller: '非精英超伤害',
  feedback: '反馈增益'
}
var tag3_mengxin = new Map,
  tag3_normalkiller = new Map,
  tag3_feedback = new Map

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
  else if (num === 1) str += '<span style="color:purple">'
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
  var str_pid = '', str_btn = ''
  for (var entry of lib_tdoll) {
    str_pid = 'tag_tdoll_' + entry.type + '_' + entry.star
    str_btn = '<button type="button" style="padding:5px" class="btn btn-default" id="btn_tdoll_' + entry.id + '" onclick="classify_by_tdoll(' + entry.id + ')">'
    str_btn += make_starstr(entry.star) + ' '
    eval('str_btn+=lib_name.t' + entry.id)
    str_btn += '</button> '
    document.getElementById(str_pid).innerHTML += str_btn
  }
}
function jump_tag (tag_type, tag) {
  document.getElementById('sort_tdoll').className = 'tab-pane fade'
  document.getElementById('sort_tag').className = 'tab-pane fade in active'
  document.getElementById('sort_tdoll_li').className = ''
  document.getElementById('sort_tag_li').className = 'active'
  for (var i = 0; i < 4;i++) {
    for (var currenttag of pick_tag[i]) {
      document.getElementById('btn_tag_' + i + '_' + currenttag).className = 'btn btn-default'
    }
  }
  pick_tag = [[], [], [], []]
  change_tag(tag_type, tag)
}
function change_tag (tag_type, tag) { // 改变标签，按钮名btn_tag_0_TAGNAME
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
  classify_by_tag()
}
function classify_by_tag () {
  var over = false, status = 'no-tdoll'
  var list_num = []
  for (var tdoll of lib_tdoll) {
    list_num.push(tdoll.id)
  }
  for (var tn = 0; tn < 4; tn++) {
    for (var tag of pick_tag[tn]) {
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
    var str_btn = ''
    for (var entry_num of list_num) {
      var entry = find_tdoll(entry_num)
      str_btn += '<button type="button" style="padding:5px" class="btn btn-default" id="btn_jump_tdoll_' + entry.id + '" onclick="jump_tdoll(' + entry.id + ')">'
      str_btn += make_starstr(entry.star) + ' '
      eval('str_btn+=lib_name.t' + entry.id)
      str_btn += '</button> '
    }
    document.getElementById('result_1').innerHTML = str_btn
  }
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
