var lang_type = 'cn'

// inital
function mergeCell(table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function loadScript(url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
var lib_language // 语言库
lib_language = {
  main_draw_1: '号位:',
  main_draw_2: '输出',
  main_formatDPS_1: '时间',
  main_formatDPS_2: '输出',
  main_makeGraph_1: '时间',
  main_makeGraph_2: '伤害',
  main_makeGraph_3: '生命值',
  main_show_dmg: '显示输出',
  main_show_inj: '显示承伤',
  main_makeGraph_dead: '阵亡',

  UI_affect: '影响',
  UI_num: '号位',
  UI_dmg: '输出',
  UI_inj: '承伤',
  UI_putsee: '放置人形后才能显示受到的增益',
  UI_pickblock: '请点选一个<b><span style="color: red">九宫格</span></b>',
  UI_not_2_python: ' *不能添加两个蟒蛇',
  UI_not_2_carcano: ' *不能添加两个CarcanoM1891',
  UI_not_2_ads: ' *不能添加两个ADS',
  UI_not_2_jill: ' *不能添加两个Jill',
  UI_not_2_sei: ' *不能添加两个Sei',
  UI_not_2_stella: ' *不能添加两个Stella',
  UI_fairydmg: '妖精伤害',
  UI_fairyinj: '妖精承伤',
  UI_layer: '蓄力层数',

  NAME_1: '柯尔特左轮',
  NAME_4: '蟒蛇',
  NAME_5: '纳甘左轮',
  NAME_6: '托卡列夫',
  NAME_7: '斯捷奇金',
  NAME_8: '马卡洛夫',
  NAME_13: '92式',
  NAME_14: '阿斯特拉左轮',
  NAME_15: '格洛克17',
  NAME_16: '汤姆森',
  NAME_27: '蝎式',
  NAME_29: '司登MkⅡ',
  NAME_31: '伯莱塔38型',
  NAME_32: '微型乌兹',
  NAME_34: 'M1加兰德',
  NAME_36: '春田',
  NAME_39: '莫辛-纳甘',
  NAME_41: '西蒙诺夫',
  NAME_49: '56式半',
  NAME_50: '李-恩菲尔德',
  NAME_66: '56-1式',
  NAME_71: '加利尔',
  NAME_89: '布伦',
  NAME_94: '64式',
  NAME_95: '汉阳造88式',
  NAME_96: '灰熊 MkV',
  NAME_112: '内格夫',
  NAME_113: '谢尔久科夫',
  NAME_114: '维尔德 MkⅡ',
  NAME_115: '索米',
  NAME_127: '79式',
  NAME_129: '95式',
  NAME_130: '97式',
  NAME_132: '59式',
  NAME_133: '63式',
  NAME_150: '希普卡',
  NAME_161: '97式霰',
  NAME_171: '利贝罗勒',
  NAME_174: '八一式马',
  NAME_183: '竞争者',
  NAME_185: '阿梅利',
  NAME_197: '卡尔卡诺M1891',
  NAME_198: '卡尔卡诺M91/38',
  NAME_199: '80式',
  NAME_201: '猎豹M1',
  NAME_202: '雷电',
  NAME_203: '蜜獾',
  NAME_204: '芭莉斯塔',
  NAME_225: 'Cx4风暴',
  NAME_228: '樱花',
  NAME_233: 'Px4风暴',
  NAME_238: '88式',
  NAME_239: '03式',
  NAME_243: '64式自',
  NAME_248: '杰里科',
  NAME_249: '62式',
  NAME_253: '刘易斯',
  NAME_255: '侦察者',
  NAME_256: '隼',
  NAME_258: '马盖尔',
  NAME_264: '绍沙',
  NAME_270: '四式',
  NAME_272: '沙漠之鹰',
  NAME_283: '解放者',
  NAME_290: '89式',
  NAME_294: '韦伯利',
  NAME_305: '塔布克',
  NAME_2001: '诺艾尔',
  NAME_2002: '艾尔菲尔特',
  NAME_2003: '琪亚娜',
  NAME_2004: '雷电芽衣',
  NAME_2005: '布洛妮娅',
  NAME_2006: '德丽莎',
  NAME_2007: '无量塔姬子',
  NAME_2008: '希儿',
  NAME_2009: '克莉尔',
  NAME_2010: '菲尔',
  NAME_2011: '吉尔·斯汀雷',
  NAME_2012: '赛伊·朝雾',
  NAME_2013: '多萝西·海兹',
  NAME_2014: '史黛拉·星井',
  NAME_2015: '阿尔玛·阿玛斯',
  NAME_2016: '达娜·赞恩',
  NAME_2023: '海莉艾塔',
  NAME_2024: '莉可',
  NAME_2025: '崔耶拉',
  NAME_2026: '库拉耶丝',
  NAME_2027: '安洁莉卡',

  equipNAME_0: '无装备',
  equipNAME_12: '光瞄',
  equipNAME_14: '全息',
  equipNAME_13: '红点',
  equipNAME_17: 'APS专用枪托',
  equipNAME_11: '消音器',
  equipNAME_41: '夜视仪',
  equipNAME_31: '外骨骼',
  equipNAME_33: '防弹插板',
  equipNAME_21: 'ILM空尖弹',
  equipNAME_23: 'Mk211高爆穿甲弹',
  equipNAME_22: 'APCR高速弹',
  equipNAME_24: '#000猎鹿弹',
  equipNAME_25: 'SABOT独头弹',
  equipNAME_34: '热光学迷彩披风',
  equipNAME_35: 'IOP极限弹链箱',
  equipNAME_11001: '柯尔特左轮长枪管',
  equipNAME_11005: '纳甘左轮消音器',
  equipNAME_11091: 'MP446C比赛枪管',
  equipNAME_42009: '荣耀之光',
  equipNAME_42010: '漆黑之猫',
  equipNAME_169: 'FÉLIN系统瞄具',
  equipNAME_4118: 'PKN03M夜视瞄具',
  equipNAME_11063: 'G3改良枪管组',
  equipNAME_11064: 'G36混合瞄准镜',
  equipNAME_354: '特殊战机动装甲',
  equipNAME_11056: '兵蚁型RO',
  equipNAME_11057: '轻量化导轨套件',
  equipNAME_326: 'GSG UX外骨骼',
  equipNAME_3103: 'UMP UX外骨骼',
  equipNAME_31093: '性能升级卡带',
  equipNAME_11037: 'M2两脚架',
  equipNAME_11051: '快慢机板机组',
  equipNAME_1125: 'MG4用MGO',
  equipNAME_11089: '布伦L4枪管组',
  equipNAME_21002: 'XM261短弹',
  equipNAME_21057: '.300BLK高速弹',
  equipNAME_21060: 'SP6亚音速弹',
  equipNAME_236: '国家竞赛穿甲弹',
  equipNAME_362: '高性能战术发饰',
  equipNAME_31055: '遗留的武器库',
  equipNAME_11029: '司登专用消音器',
  equipNAME_11103: '附加运算模块',
  equipNAME_11094: '64专属消音器',
  equipNAME_342: '蓝色加厚披风',
  equipNAME_31039: 'Hayha记忆芯片',
  equipNAME_31044: '数码迷彩披风',
  equipNAME_31065: '战术发卡',
  equipNAME_388: '无限弹链箱',
  equipNAME_3185: '专用战术内存',
  equipNAME_31075: 'Titan火控芯片',
  equipNAME_32012: '白骑士制式铠甲',
  equipNAME_22013: 'MIRD5级弹药',
  equipNAME_32014: '电子义眼',
  equipNAME_32015: '机械义手',
  equipNAME_32016: '机械手臂',
  equipNAME_110: 'PPK专属消音器',
  equipNAME_174: 'SIG510快慢机',
  equipNAME_117: 'OSS消音器',
  equipNAME_152: 'BM59重管',
  equipNAME_2158: '20GA猎鹿弹',
  equipNAME_11026: 'LED武器灯',
  equipNAME_11095: '加速线圈',
  equipNAME_1129: '先进单兵瞄具',
  equipNAME_384: 'RPD单兵装具',
  equipNAME_118: 'MAX10上机匣',
  equipNAME_19993: 'M9 BC2握把',
  equipNAME_372: '战术耳机',
  equipNAME_31007: '战术闪电呆毛',
  equipNAME_1172: 'RFB前导轨',
  equipNAME_1228: '折叠枪托',
  equipNAME_11012: 'C96橡木枪托',
  equipNAME_11031: 'DO反射瞄具',
  equipNAME_12023: '古董万花筒',
  equipNAME_32024: '决斗扑克',
  equipNAME_22025: '格斗刀',
  equipNAME_120261: '平光镜',
  equipNAME_120262: '天外陨石',
  equipNAME_120263: '计时腕表',
  equipNAME_32027: '童话绘本',

  skillNAME_39: '沉稳射击',
  skillNAME_39_2: '苍白收割者',
  skillNAME_55: '伸冤者印记',
  skillNAME_102: '烙印过载',
  skillNAME_180: '贯穿射击',
  skillNAME_192: '贯穿射击',
  skillNAME_194: '热力过载',
  skillNAME_213: '心情链环',
  skillNAME_231: '伪神的启示',
  skillNAME_238: '懒惰的怒火',
  skillNAME_243: '未来预警',
  skillNAME_252: '震荡冲击弹',
  skillNAME_1252: '震荡冲击弹',
  skillNAME_256: '夕阳隼',
  skillNAME_266: '强运扳机',
  skillNAME_275: '有备无患',
  skillNAME_276: '高压冲击',
  skillNAME_285: '兰蝶遗音',
  skillNAME_287: '战场弄潮儿',
  skillNAME_290: '考试系统',
  skillNAME_306: '耀变体',
  skillNAME_1007: '短板敲击乐',
  skillNAME_1065: '寄生榴弹',
  skillNAME_1097: '灵魂LIVE!',
  skillNAME_2006: '圣光制裁',
  skillNAME_2013: '私密改造',
  skillNAME_1101: '白鸮轰鸣',
  skillNAME_1124: '后发狙击',
  DESCRIBE_1124: '敌人血量低于50%',
  skillNAME_2025: '木偶把戏',
  DESCRIBE_2025: '拔刀攻击！（携带独头弹该选项无效）',
  skillNAME_2026: '沉思者之钥',
  DESCRIBE_2026: ['自动技能', '1层蓄力开火', '2层蓄力开火', '3层蓄力开火', '4层蓄力开火', '5层蓄力开火'],
  DESCRIBE_213: ['亚音速弹(+65%回避)', '勺尖弹(+85%火力)', '标准弹(+200%命中)'],
  DESCRIBE_285: ['技能1层射速', '技能2层射速', '技能3层射速'],
  DESCRIBE_290: '极限化手操：进行如下的操作循环，自动使用一次温习模式技能后，等待进入满分模式开启第二次技能，等满分buff结束后开启第三次',
  DESCRIBE_1007: '攻击低血量敌人降低回避50%',
  DESCRIBE_1101_0: '作用列',
  DESCRIBE_1101_1: '当前列',
  DESCRIBE_1101_2: '特定列(从左往右):',
  DESCRIBE_1101_3: '闪光弹眩晕敌人',
  DESCRIBE_1039: ['使用技能', '满蓄力射击', '技能击杀敌人', '普攻击杀敌人'],
  DESCRIBE_1053: ['满蓄力狙击', '狙击击杀敌人', '敌人血量高于50%'],
  DESCRIBE_55: '使用炮击',
  DESCRIBE_102_1: '默认',
  DESCRIBE_102_2: '过载',
  DESCRIBE_180: '贯穿所有敌人',
  DESCRIBE_192: '贯穿所有敌人',
  DESCRIBE_194_0: '启动状态',
  DESCRIBE_194_1: '自动释放',
  DESCRIBE_194_2: '持续Fever(三连发)',
  DESCRIBE_194_3: '持续Note(单点)',
  DESCRIBE_213_0: '挂载状态',
  DESCRIBE_214: '爆炸影响多少敌人',
  DESCRIBE_231: '战斗胜场',
  DESCRIBE_236: '倍率',
  DESCRIBE_238: '轻机枪模式',
  DESCRIBE_243_0: '发动3秒后',
  DESCRIBE_243_1: '增伤55%',
  DESCRIBE_243_2: '护盾25',
  DESCRIBE_251: '花之锁增伤',
  DESCRIBE_252: '溅射所有敌人',
  DESCRIBE_1252: '主被动溅射所有敌人',
  DESCRIBE_256: '不使用特殊子弹',
  DESCRIBE_261: '三连击影响多少敌人',
  DESCRIBE_266_0: '持续状态',
  DESCRIBE_266_1: '攻击同一目标',
  DESCRIBE_266_2: '数次普攻切换目标',
  DESCRIBE_266_3: '次',
  DESCRIBE_275: '使用后关闭自动技能',
  DESCRIBE_276_0: '贯穿模式',
  DESCRIBE_276_1: '强击效果',
  DESCRIBE_287: '仅过热终止技能，冷却结束再手动开启',
  DESCRIBE_306: '攻击正前方敌人',
  DESCRIBE_1065: '技能击杀敌人',
  DESCRIBE_1097: '位于敌方点位(5%射速和移速，只要不是我方点位或无法判断皆为此情况)',
  DESCRIBE_2006: '敌人进入制裁范围',
  DESCRIBE_2013_0: '改造切换状态',
  DESCRIBE_2013_1: '纳米迷彩',

  fairy_0: '无',
  talent_0: '无',

  enemy_normal: '普通',
  enemy_elite: '精英',

  INPUT_PI: '输入正整数',

  hp: '生命',
  cs: '弹量',
  cs_0: '<span style="color:red">无法攻击</span>',
  dmg: '伤害',
  rof: '射速',
  acu: '命中',
  eva: '回避',
  crit: '暴击',
  critdmg: '暴伤',
  arm: '护甲',
  ap: '穿甲',
  cld: '冷却',
  night: '夜战',
  daytime: '昼战',
  form: '编制',
  na: '夜视能力',
  skillstren: '技能增强',
  skilljill: '调制饮料改变人生',
  skillclaes1: '蓄力增加护盾',
  skillclaes2: '蓄力增加全队伤害',
  skillclaes3: '蓄力增加弹量',

  fairyNAME_1: '勇士妖精',
  fairyNAME_2: '暴怒妖精',
  fairyNAME_3: '盾甲妖精',
  fairyNAME_4: '护盾妖精',
  fairyNAME_5: '防御妖精',
  fairyNAME_6: '嘲讽妖精',
  fairyNAME_7: '狙击妖精',
  fairyNAME_8: '炮击妖精',
  fairyNAME_9: '空袭妖精',
  fairyNAME_10: '增援妖精',
  fairyNAME_11: '空降妖精',
  fairyNAME_12: '布雷妖精',
  fairyNAME_13: '火箭妖精',
  fairyNAME_14: '工事妖精',
  fairyNAME_15: '指挥妖精',
  fairyNAME_16: '搜救妖精',
  fairyNAME_17: '照明妖精',
  fairyNAME_18: '黄金妖精',
  fairyNAME_19: '炊事妖精',
  fairyNAME_20: '花火妖精',
  fairyNAME_21: '年兽妖精',
  fairyNAME_22: '海滩妖精',
  fairyNAME_23: '连击妖精',
  fairyNAME_24: '立盾妖精',
  fairyNAME_25: '双生妖精',

  fairyskillstr: '技能 ',
  fairy_skillNAME_0: '无',
  fairy_skillNAME_1: '战斗效率',
  fairy_skillNAME_2: '怒无限强',
  fairy_skillNAME_3: '防暴强化',
  fairy_skillNAME_4: '能量护盾',
  fairy_skillNAME_5: '临时装甲',
  fairy_skillNAME_6: '嘲讽靶机',
  fairy_skillNAME_7: '狙击指令',
  fairy_skillNAME_8: '炮击指令',
  fairy_skillNAME_9: '致命空袭',
  fairy_skillNAME_10: '增援人形',
  fairy_skillNAME_11: '机场解放',
  fairy_skillNAME_12: '地雷阵线',
  fairy_skillNAME_13: '阵地死神',
  fairy_skillNAME_14: '紧急堡垒',
  fairy_skillNAME_15: '超量经验',
  fairy_skillNAME_16: '高效搜救',
  fairy_skillNAME_17: '夜间照明',
  fairy_skillNAME_18: '黄金律法',
  fairy_skillNAME_19: '紧急开饭',
  fairy_skillNAME_20: '夏末花火',
  fairy_skillNAME_21: '爆竹惊春',
  fairy_skillNAME_22: '懈怠浪潮',
  fairy_skillNAME_23: '连携奥义',
  fairy_skillNAME_24: '护甲加固',
  fairy_skillNAME_25: '双倍守护',
  fairyDESCRIBE_19: '紧急开饭开什么饭？',
  fairyDESCRIBE_19_0: '随便什么都行(随机)',
  fairyDESCRIBE_19_1: '麻辣味(+20%伤害)',
  fairyDESCRIBE_19_2: '酸辣味(+20%射速)',
  fairyDESCRIBE_19_3: '甜的(+30%命中)',
  fairyDESCRIBE_19_4: '咸的(+25%回避)',
  fairyDESCRIBE_19_5: '…煮糊了(-0%伤害)',

  hfNAME_0: 'BGM-71',
  hfNAME_1: 'AGS-30',
  hfNAME_2: '2B-14',
  hfNAME_3: 'M2',
  hfNAME_4: 'AT4',

  special_info_unique: '<span style="color:blue">唯一人形</span> ',
  special_info_common: '<span style="color:red">特殊设定</span>',
  special_info_2011_0: '基础饮品',
  special_info_2011_1: '<span style="color:#ff9900">∎</span><span style="color:#33cc00">∎</span><span style="color:#99ccff">∎</span>Big Beer',
  special_info_2011_2: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#6600ff">∎</span>Brandtini',
  special_info_2011_3: '<span style="color:#ff3333">∎</span><span style="color:#ff9900">∎</span><span style="color:#99ccff">∎</span>Piano Woman',
  special_info_2011_4: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#99ccff">∎</span>Moonblast',
  special_info_2011_5: '<span style="color:#ff9900">∎</span><span style="color:#6600ff">∎</span><span style="color:#33cc00">∎</span>Bleeding Jane',
  special_info_2011_6: '<span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span>Fringe Weaver'

}

window.onload = function () {
  loadScript('../js/Echelon_main.js')
  loadScript('../js/Echelon_sub.js')
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_graph.js')
  loadScript('../js/Echelon_select.js')
  loadScript('../js/Echelon_special.js')
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
  mergeCell('table_envi', 0, 1, 0)
  mergeCell('table_envi', 0, 1, 2)
}
