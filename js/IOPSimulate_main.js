var listNum = 0, listNumH = 0, listNumE = 0, listNumEH = 0
var fiveStarNum = 0, fiveStarNumH = 0, fiveStarNumE = 0, fiveStarNumEH = 0, fairyNum = 0
var mul_smg = 1, mul_ar = 1, mul_rf = 1, mul_mg = 1, mul_sg = 1
var reso_nt = [30, 30, 30, 30], // max 999
  reso_ht = [1000, 1000, 1000, 1000], // max 9999
  reso_ne = [10, 10, 10, 10], // max 300
  reso_he = [500, 500, 500, 500], // max 5000
  reso_costs = { // total costs
    hum: 0, amm: 0, rat: 0, pts: 0,
    tc: 0, ec: 0,
    core: 0
  },
  list_produce = { // produce list for display innerHTML
    nt: '', nt_5: '',
    ht: '', ht_5: '',
    ne: '', ne_5: '',
    he: '', he_5: ''
  },
  controller = { // show which produce list controller
    show_nt: 'all',
    show_ht: 'all',
    show_ne: 'all',
    show_he: 'all'
  },
  list_name = [
    [96, '灰熊 MkV'], [97, 'M950A'], [114, '维尔德MkⅡ'], [126, 'NZ75'], [183, '竞争者'], [233, 'Px4风暴'], [260, 'PA-15'],
    [1, '柯尔特左轮'], [7, '斯捷奇金'], [99, 'Mk23'], [100, 'P7'], [168, 'Spitfire'], [212, 'K5'], [248, '杰里科'], [269, 'P30'],
    [3, 'M9'], [6, '托卡列夫'], [8, '马卡洛夫'], [11, 'P08'], [12, 'C96'], [13, '92式'], [14, '阿斯特拉左轮'], [123, 'P99'],
    [2, 'M1911'], [5, '纳甘左轮'], [9, 'P38'], [10, 'PPK'], [90, 'FNP-9'], [91, 'MP-446'], [139, 'Bren Ten'], [141, 'USP Compat'],
    [62, 'G41'], [65, 'HK416'], [106, 'FAL'], [122, 'G11'], [129, '95式'], [130, '97式'], [172, 'RFB'], [181, 'T-91'], [194, 'K2'], [196, 'Zas M21'], [214, 'ADS'], [206, 'AK-12'], [205, 'AN-94'], [215, 'MDR'], [236, 'K11'], [243, '64式自'],
    [60, 'AS Val'], [64, 'G36'], [66, '56-1式'], [69, 'FAMAS'], [72, 'TAR-21'], [118, '9A-91'], [171, '利贝罗勒'], [216, 'XM8'], [237, 'SAR-21'], [262, 'EM-2'],
    [58, 'AK-47'], [61, 'StG44'], [70, 'FNC'], [105, 'OTs-12'],
    [63, 'G3'], [68, 'L85A1'], [71, '加利尔'], [74, 'SIG-50'], [107, 'F2000'], [133, '63式'],
    [16, '汤姆森'], [20, 'Vector'], [28, 'MP7'], [104, 'G36C'], [115, '索米'], [127, '79式'], [135, 'SR-3MP'], [213, 'C-MS'], [228, '樱花'], [245, 'P90'],
    [23, 'PP-90'], [26, 'MP5'], [101, 'UMP9'], [103, 'UMP45'], [137, 'PP-19-01'], [150, '希普卡'],
    [18, 'MAC-10'], [22, 'PPS-43'], [27, '蝎式'], [29, '司登 MkⅡ'], [32, '微型乌兹'], [116, 'Z-62'],
    [17, 'M3'], [21, 'PPsh-41'], [24, 'PP2000'], [25, 'MP-40'], [31, '伯莱塔38型'], [33, 'M45'], [92, 'Spectre M4'], [93, 'IDW'], [94, '64式'],
    [261, 'QBU-88'], [257, 'M200'], [198, '卡尔卡诺M91/38'], [197, '卡尔卡诺M1891'], [148, 'IWS2000'], [128, 'M99'], [53, 'NTW-20'], [50, '李·恩菲尔德'], [48, 'WA2000'], [46, 'Kar98k'],
    [36, '春田'], [39, '莫辛·纳甘'], [42, 'PTRD'], [43, 'SVD'], [117, 'PSG-1'], [146, 'G28'], [180, 'PzB39'], [184, 'T-5000'], [235, 'SPR-A3G'], [247, 'K31'], [270, '四式'],
    [34, 'M1加兰德'], [37, 'M14'], [44, 'SV-98'], [95, '汉阳造88式'],
    [40, 'SVT-38'], [41, '西蒙诺夫'], [47, 'G43'], [51, 'FN-49'], [52, 'BM-59'],
    [109, 'MG5'], [112, '内格夫'], [125, 'MG4'], [173, 'PKP'], [238, '88式'], [263, 'MG36'],
    [75, 'M1918'], [78, 'M60'], [85, 'PK'], [88, 'MG3'], [121, 'Mk48'], [149, 'AEK-999'], [185, '阿梅利'], [199, '80式'], [264, '绍沙'],
    [77, 'M2HB'], [80, 'M1919A4'], [86, 'MG42'], [89, '布伦'],
    [81, 'LWMMG'], [82, 'DP28'], [87, 'MG34'], [110, 'FG-42'], [111, 'AAT-52']
  ]

// UI display
function get_decimal(num, ratio) {
  return Math.floor(num / ratio) - 10 * Math.floor(num / (10 * ratio))
}
function get_color(num) {
  if (num === 5) return 'darkorange'
  if (num === 4) return 'chartreuse'
  if (num === 3) return 'dodgerblue'
  if (num === 2) return 'darkseagreed'
}
function swap_reso(produce_type, hum, amm, rat, pts) { // 建造模板，一键设置资源
  if (produce_type === 1) reso_nt = [hum, amm, rat, pts]
  else if (produce_type === 2) reso_ht = [hum, amm, rat, pts]
  else if (produce_type === 3) reso_ne = [hum, amm, rat, pts]
  else if (produce_type === 4) reso_he = [hum, amm, rat, pts]
  show_numbers(produce_type)
}
function swap_show(produce_type) { // 更换显示全部和稀有建造
  if (produce_type === 1) {
    if (controller.show_nt === 'all') controller.show_nt = 'five'
    else controller.show_nt = 'all'
    if (controller.show_nt === 'all') document.getElementById('btn_show_nt').src = '../img/produce/show-all.png'
    else document.getElementById('btn_show_nt').src = '../img/produce/show-five.png'
    show_produce(produce_type)
  }
}
function change_reso(str) { // 按钮调整资源
  var action = 1
  if (str[0] === '-') action = -1
  var produce_type = parseInt(str[1]),
    reso_type = parseInt(str[2]),
    temp_reso = 0
  if (produce_type === 1) {
    var increment = action * Math.pow(10, 3 - parseInt(str[3]))
    temp_reso = reso_nt[reso_type - 1] + increment
    if (temp_reso < 30) temp_reso = 30
    else if (temp_reso > 999) temp_reso = 999
    reso_nt[reso_type - 1] = temp_reso
  } else if (produce_type === 2) {
    true
  } else if (produce_type === 3) {
    true
  } else if (produce_type === 4) {
    true
  }
  show_numbers(produce_type)
}
function show_numbers(produce_type) {
  if (produce_type === 1) {
    for (i = 1; i <= 4; i++) {
      document.getElementById('num1' + i + '1').src = '../img/produce/normal-tdoll/img-' + get_decimal(reso_nt[i - 1], 100) + '.png'
      document.getElementById('num1' + i + '2').src = '../img/produce/normal-tdoll/img-' + get_decimal(reso_nt[i - 1], 10) + '.png'
      document.getElementById('num1' + i + '3').src = '../img/produce/normal-tdoll/img-' + get_decimal(reso_nt[i - 1], 1) + '.png'
    }
  }
}
function show_costs() {
  document.getElementById('costs_hum').innerHTML = reso_costs.hum
  document.getElementById('costs_amm').innerHTML = reso_costs.amm
  document.getElementById('costs_rat').innerHTML = reso_costs.rat
  document.getElementById('costs_pts').innerHTML = reso_costs.pts
  document.getElementById('costs_tc').innerHTML = reso_costs.tc
  document.getElementById('costs_ec').innerHTML = reso_costs.ec
  document.getElementById('costs_core').innerHTML = reso_costs.core
}
function show_produce(produce_type) {
  if (produce_type === 1) {
    if (controller.show_nt === 'all') document.getElementById('produce_nt').innerHTML = list_produce.nt
    else document.getElementById('produce_nt').innerHTML = list_produce.nt_5
  }
}

// produce
function record_costs(reso_list, tc, ec, core) {
  reso_costs.hum += reso_list[0]
  reso_costs.amm += reso_list[1]
  reso_costs.rat += reso_list[2]
  reso_costs.pts += reso_list[3]
  reso_costs.tc += tc
  reso_costs.ec += ec
  reso_costs.core += core
}
function record_produce(produce_type, starNum, str_info) {
  var temp_str = ''
  temp_str += '<tr><td>' + listNum + '</td><td>'
  temp_str += reso_nt[0] + ' ' + reso_nt[1] + ' ' + reso_nt[2] + ' ' + reso_nt[3] + '</td><td>'
  temp_str += '<span style="color:' + get_color(starNum) + '">' + str_info + '</span>'
  temp_str += '</td></tr>'
  if (produce_type === 1) {
    list_produce.nt += temp_str
    if (starNum >= 5) list_produce.nt_5 += temp_str
  }
}
function produce(produce_type, produce_num) {
  if (produce_type === 1) {
    document.getElementById('panelT').className = 'active'
    document.getElementById('panelE').className = ''
    document.getElementById('TdollResult').className = 'tab-pane fade in active'
    document.getElementById('EquipmentResult').className = 'tab-pane fade'
    for (var pn = 0; pn < produce_num; pn++) {
      listNum++
      var starNum = get_star(1)
      var str_info = makeTdoll(reso_nt[0], reso_nt[1], reso_nt[2], reso_nt[3], starNum)
      record_costs(reso_nt, 1, 0, 0)
      record_produce(produce_type, starNum, str_info)
    }
    show_costs()
    show_produce(produce_type)
  } else if (produce_type === 2) {
    ;
  }
}

function find_name(index) {
  for (var entry of list_name) {
    if (entry[0] === index) return entry[1]
  }
}

function makeTdoll(Mw, Aw, Rw, Pw, starNum) { // Normal-produce T-doll, possibility*100
  if (starNum === 5) fiveStarNum++
  var TdollInfo = ''
  var TdollList = []
  // HG-total<=920
  if (Mw + Aw + Rw + Pw <= 920) {
    getMul_HG(Mw + Aw + Rw + Pw)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_HG('HG@96', 200))
      TdollList.push(creatTdollInfo_HG('HG@126', 110))
      TdollList.push(creatTdollInfo_HG('HG@233', 30))
      TdollList.push(creatTdollInfo_HG('HG@260', 30))
      if (Mw >= 130 && Aw >= 130 && Rw >= 130 && Pw >= 30) {
        TdollList.push(creatTdollInfo_HG('HG@97', 80))
        TdollList.push(creatTdollInfo_HG('HG@114', 100))
        TdollList.push(creatTdollInfo_HG('HG@183', 30))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_HG('HG@1', 367))
      TdollList.push(creatTdollInfo_HG('HG@99', 259))
      TdollList.push(creatTdollInfo_HG('HG@100', 263))
      TdollList.push(creatTdollInfo_HG('HG@269', 260))
      if (Mw >= 130 && Aw >= 130 && Rw >= 130 && Pw >= 30) {
        TdollList.push(creatTdollInfo_HG('HG@7', 87))
        TdollList.push(creatTdollInfo_HG('HG@168', 147))
        TdollList.push(creatTdollInfo_HG('HG@212', 140))
        TdollList.push(creatTdollInfo_HG('HG@248', 80))
      }
    } else if (starNum === 3) {
      TdollList.push(creatTdollInfo_HG('HG@3', 366))
      TdollList.push(creatTdollInfo_HG('HG@6', 267))
      TdollList.push(creatTdollInfo_HG('HG@8', 186))
      TdollList.push(creatTdollInfo_HG('HG@11', 322))
      TdollList.push(creatTdollInfo_HG('HG@12', 360))
      TdollList.push(creatTdollInfo_HG('HG@13', 183))
      TdollList.push(creatTdollInfo_HG('HG@14', 325))
      TdollList.push(creatTdollInfo_HG('HG@123', 152))
    } else {
      TdollList.push(creatTdollInfo_HG('HG@2', 570))
      TdollList.push(creatTdollInfo_HG('HG@5', 547))
      TdollList.push(creatTdollInfo_HG('HG@9', 572))
      TdollList.push(creatTdollInfo_HG('HG@10', 563))
      TdollList.push(creatTdollInfo_HG('HG@90', 500))
      TdollList.push(creatTdollInfo_HG('HG@91', 544))
      TdollList.push(creatTdollInfo_HG('HG@139', 570))
      TdollList.push(creatTdollInfo_HG('HG@141t', 556))
    }
  }
  // SMG-always
  if (true) {
    getMul_SMG(Mw + Aw + Rw + Pw)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_SMG('SMG@16', 160)); // 4442 base:70,x2.4
      if (Mw >= 400 && Aw >= 400) {
        TdollList.push(creatTdollInfo_SMG('SMG@20', 108))
        TdollList.push(creatTdollInfo_SMG('SMG@104', 24))
        TdollList.push(creatTdollInfo_SMG('SMG@115', 48))
        TdollList.push(creatTdollInfo_SMG('SMG@127', 132))
        TdollList.push(creatTdollInfo_SMG('SMG@135', 57))
        TdollList.push(creatTdollInfo_SMG('SMG@213', 22))
        TdollList.push(creatTdollInfo_SMG('SMG@245', 14))
        TdollList.push(creatTdollInfo_SMG('SMG@228', 108))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_SMG('SMG@23', 114)); // 4442 base:76,x1.5
      TdollList.push(creatTdollInfo_SMG('SMG@26', 220))
      TdollList.push(creatTdollInfo_SMG('SMG@137', 220))
      if (Mw >= 400 && Aw >= 400) {
        TdollList.push(creatTdollInfo_SMG('SMG@101', 220))
        TdollList.push(creatTdollInfo_SMG('SMG@103', 155))
        TdollList.push(creatTdollInfo_SMG('SMG@150', 120))
      }
    } else if (starNum === 3) {
      TdollList.push(creatTdollInfo_SMG('SMG@18', 178))
      TdollList.push(creatTdollInfo_SMG('SMG@23', 99))
      TdollList.push(creatTdollInfo_SMG('SMG@27', 130))
      TdollList.push(creatTdollInfo_SMG('SMG@29', 298))
      TdollList.push(creatTdollInfo_SMG('SMG@32', 188))
    } else {
      TdollList.push(creatTdollInfo_SMG('SMG@93', 308)); // 4442 base:154,x2
      TdollList.push(creatTdollInfo_SMG('SMG@17', 344))
      TdollList.push(creatTdollInfo_SMG('SMG@21', 308))
      TdollList.push(creatTdollInfo_SMG('SMG@24', 432))
      TdollList.push(creatTdollInfo_SMG('SMG@31', 342))
      TdollList.push(creatTdollInfo_SMG('SMG@33', 376))
      TdollList.push(creatTdollInfo_SMG('SMG@92', 444))
      TdollList.push(creatTdollInfo_SMG('SMG@94', 316))
    }
  }
  // AR-total>=800
  if (Mw + Aw + Rw + Pw >= 800) {
    getMul_AR(Mw + Aw + Rw + Pw, Aw, Rw)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_AR('AR@65', 180)); // rounding down 20% from 1441
      TdollList.push(creatTdollInfo_AR('AR@122', 50))
      if (Aw >= 400 && Rw >= 400) {
        TdollList.push(creatTdollInfo_AR('AR@62', 120))
        TdollList.push(creatTdollInfo_AR('AR@106', 100))
        TdollList.push(creatTdollInfo_AR('AR@129', 100))
        TdollList.push(creatTdollInfo_AR('AR@130', 100))
        TdollList.push(creatTdollInfo_AR('AR@172', 80))
        TdollList.push(creatTdollInfo_AR('AR@181', 100))
        TdollList.push(creatTdollInfo_AR('AR@194', 100))
        TdollList.push(creatTdollInfo_AR('AR@196', 190))
        TdollList.push(creatTdollInfo_AR('AR@205', 50))
        TdollList.push(creatTdollInfo_AR('AR@206', 50))
        TdollList.push(creatTdollInfo_AR('AR@215', 100))
        TdollList.push(creatTdollInfo_AR('AR@236', 180))
        TdollList.push(creatTdollInfo_AR('AR@243', 100))
        TdollList.push(creatTdollInfo_AR('AR@214', 100))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_AR('AR@60', 200)) // avg rounding to 200
      TdollList.push(creatTdollInfo_AR('AR@66', 200))
      TdollList.push(creatTdollInfo_AR('AR@69', 200))
      TdollList.push(creatTdollInfo_AR('AR@118', 200))
      TdollList.push(creatTdollInfo_AR('AR@216', 200))
      TdollList.push(creatTdollInfo_AR('AR@237', 200))
      TdollList.push(creatTdollInfo_AR('AR@262', 200))
      if (Aw >= 400 && Rw >= 400) {
        TdollList.push(creatTdollInfo_AR('AR@64', 100))
        TdollList.push(creatTdollInfo_AR('AR@72', 200))
        TdollList.push(creatTdollInfo_AR('AR@171', 200))
      }
    } else if (starNum === 3) {
      TdollList.push(creatTdollInfo_AR('AR@58', 290)); // 4442 base:180, 1441 base:400,avg
      TdollList.push(creatTdollInfo_AR('AR@61', 315))
      TdollList.push(creatTdollInfo_AR('AR@70', 290))
      TdollList.push(creatTdollInfo_AR('AR@105', 270))
    } else {
      TdollList.push(creatTdollInfo_AR('AR@63', 350)); // 4442 base:233,1441 base:434,avg
      TdollList.push(creatTdollInfo_AR('AR@68', 300))
      TdollList.push(creatTdollInfo_AR('AR@71', 300))
      TdollList.push(creatTdollInfo_AR('AR@74', 300))
      TdollList.push(creatTdollInfo_AR('AR@107', 300))
      TdollList.push(creatTdollInfo_AR('AR@133', 350))
    }
  }
  // RF: Mw>=300 && Rw>=300
  if (Mw >= 300 && Rw >= 300) {
    getMul_RF(Mw + Aw + Rw + Pw, Mw, Rw)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_RF('RF@48', 85)) // all same rounding as ar
      TdollList.push(creatTdollInfo_RF('RF@53', 90))
      TdollList.push(creatTdollInfo_RF('RF@197', 60))
      if (Mw >= 400 && Rw >= 400) {
        TdollList.push(creatTdollInfo_RF('RF@46', 28))
        TdollList.push(creatTdollInfo_RF('RF@50', 60))
        TdollList.push(creatTdollInfo_RF('RF@128', 28))
        TdollList.push(creatTdollInfo_RF('RF@148', 16))
        TdollList.push(creatTdollInfo_RF('RF@198', 14))
        TdollList.push(creatTdollInfo_RF('RF@257', 85))
        TdollList.push(creatTdollInfo_RF('RF@261', 30))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_RF('RF@36', 300))
      TdollList.push(creatTdollInfo_RF('RF@39', 260))
      TdollList.push(creatTdollInfo_RF('RF@42', 160))
      TdollList.push(creatTdollInfo_RF('RF@43', 110))
      TdollList.push(creatTdollInfo_RF('RF@184', 100))
      TdollList.push(creatTdollInfo_RF('RF@235', 100))
      TdollList.push(creatTdollInfo_RF('RF@247', 100))
      TdollList.push(creatTdollInfo_RF('RF@270', 100))
    } else if (starNum === 3) {
      TdollList.push(creatTdollInfo_RF('RF@34', 400))
      TdollList.push(creatTdollInfo_RF('RF@37', 370))
      TdollList.push(creatTdollInfo_RF('RF@44', 300))
      if (Mw >= 400 && Aw >= 400) {
        TdollList.push(creatTdollInfo_RF('RF@95', 90))
      }
    } else {
      TdollList.push(creatTdollInfo_RF('RF@40', 500))
      TdollList.push(creatTdollInfo_RF('RF@41', 500))
      TdollList.push(creatTdollInfo_RF('RF@47', 440))
      TdollList.push(creatTdollInfo_RF('RF@51', 430))
      TdollList.push(creatTdollInfo_RF('RF@52', 460))
    }
  }
  // MG: Mw>=400 && Aw>=600 && Pw>=300
  if (Mw >= 400 && Aw >= 600 && Pw >= 300) {
    getMul_MG(Mw + Aw + Rw + Pw)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_MG('MG@109', 90)) // all same rounding as ar
      if (Mw >= 600 && Aw >= 600 && Rw >= 100 && Pw >= 400) {
        TdollList.push(creatTdollInfo_MG('MG@112', 40))
        TdollList.push(creatTdollInfo_MG('MG@125', 50))
        TdollList.push(creatTdollInfo_MG('MG@173', 70))
        TdollList.push(creatTdollInfo_MG('MG@238', 70))
        TdollList.push(creatTdollInfo_MG('MG@263', 70))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_MG('MG@75', 230))
      TdollList.push(creatTdollInfo_MG('MG@78', 150))
      TdollList.push(creatTdollInfo_MG('MG@88', 200))
      TdollList.push(creatTdollInfo_MG('MG@185', 55))
      if (Mw >= 600 && Aw >= 600 && Rw >= 100 && Pw >= 400) {
        TdollList.push(creatTdollInfo_MG('MG@85', 80))
        TdollList.push(creatTdollInfo_MG('MG@121', 80))
        TdollList.push(creatTdollInfo_MG('MG@149', 80))
        TdollList.push(creatTdollInfo_MG('MG@199', 70))
        TdollList.push(creatTdollInfo_MG('MG@264', 80))
      }
    } else if (starNum === 3) {
      TdollList.push(creatTdollInfo_MG('MG@77', 170))
      TdollList.push(creatTdollInfo_MG('MG@80', 350))
      TdollList.push(creatTdollInfo_MG('MG@86', 350))
      TdollList.push(creatTdollInfo_MG('MG@89', 380))
    } else {
      TdollList.push(creatTdollInfo_MG('MG@81', 590))
      TdollList.push(creatTdollInfo_MG('MG@82', 790))
      TdollList.push(creatTdollInfo_MG('MG@87', 650))
      TdollList.push(creatTdollInfo_MG('MG@110', 630))
      TdollList.push(creatTdollInfo_MG('MG@111', 680))
    }
  }
  var totalPosiNum = 0
  for (var i = 0; i < TdollList.length; i++) {
    totalPosiNum += parseInt(TdollList[i].possibility)
  }
  var selectTdoll = Math.floor(Math.random() * totalPosiNum)
  for (var i = 0; i < TdollList.length; i++) {
    selectTdoll -= parseInt(TdollList[i].possibility)
    if (selectTdoll <= 0) {
      var str_pair = (TdollList[i].name).split('@')
      var index = parseInt(str_pair[1])
      str_pair[1] = find_name(index)
      TdollInfo += '<img src="../img/produce/avator/' + index + '.png" width=50px height=50px> '
      TdollInfo += '<img src="../img/produce/' + starNum + str_pair[0] + '.png" width=53px height=27px> ' // img icon
      TdollInfo += str_pair[1]
      break
    }
  }
  return TdollInfo
}
function _sum(list) {
  var sum = 0
  for (var entry of list) sum += entry
  return sum
}
function get_star(produce_type) {
  if (produce_type === 1) {
    var ran = Math.floor(Math.random() * 100)
    if (_sum(reso_nt) >= 420) { // normal resources [3,10,27,60]
      if (ran < 3) return 5
      else if (ran >= 3 && ran < 13) return 4
      else if (ran >= 13 && ran < 40) return 3
      else return 2
    } else if (_sum(reso_nt) >= 200 && _sum(reso_nt) < 420) { // low resource [2,8,25,65]
      if (ran < 2) return 5
      else if (ran >= 2 && ran < 10) return 4
      else if (ran >= 10 && ran < 35) return 3
      else return 2
    } else { // very-low resource [1,7,22,70]
      if (ran < 1) return 5
      else if (ran >= 1 && ran < 8) return 4
      else if (ran >= 8 && ran < 30) return 3
      else return 2
    }
  }
}

// old
function swapImage(imageCode) {
  panelSetting = document.getElementById('panelSetting')
  if (imageCode === 1) panelSetting.style = 'background:url(../img/Produce-tdoll-normal.png) no-repeat right 15px bottom 15px'
  else if (imageCode === 2) panelSetting.style = 'background:url(../img/Produce-tdoll-heavy.png) no-repeat right 15px bottom 15px'
  else if (imageCode === 3) panelSetting.style = 'background:url(../img/Produce-equip-normal.png) no-repeat right 15px bottom 15px'
  else if (imageCode === 4) panelSetting.style = 'background:url(../img/Produce-equip-heavy.png) no-repeat right 15px bottom 15px'
  else if (imageCode === 5) panelSetting.style = 'background:url(../img/Produce-contract.png) no-repeat right 15px bottom 15px'
}

function creatTdollInfo_HG(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_hg
  return TdollInfo
}

function creatTdollInfo_SMG(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_smg
  return TdollInfo
}

function creatTdollInfo_AR(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_ar
  return TdollInfo
}

function creatTdollInfo_RF(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_rf
  return TdollInfo
}

function creatTdollInfo_MG(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_mg
  return TdollInfo
}

function creatTdollInfo_SG(name, possibility) {
  var TdollInfo = {}
  TdollInfo.name = name
  TdollInfo.possibility = parseInt(possibility) * mul_sg
  return TdollInfo
}

function creatEquipInfo(name, possibility) {
  var EquipInfo = {}
  EquipInfo.name = name
  EquipInfo.possibility = parseInt(possibility)
  return EquipInfo
}

function getMul_HG(allReso) { // HG possibility decline
  if (allReso >= 820 && allReso < 920) {
    mul_hg = 0.37
  } else if (allReso >= 420 && allReso < 820) {
    mul_hg = 1
  } else if (allReso >= 220 && allReso < 420) {
    mul_hg = 0.7
  } else {
    mul_hg = 0.37
  }
}

function getMul_SMG(allReso) { // SMG possibility decline
  if (allReso >= 1800) {
    mul_smg = 0.9
  } else if (allReso >= 1000 && allReso < 1800) {
    mul_smg = 1
  } else if (allReso >= 600 && allReso < 1000) {
    mul_smg = 0.6
  } else {
    mul_smg = 0.3
  }
}

function getMul_AR(allReso, Aw, Rw) { // AR possibility decline
  if (allReso >= 1000) { // allReso base
    mul_ar = 1
  } else {
    mul_ar = 0.8
  }
  if (Aw < 400) {
    mul_ar *= 0.9; // ammor<400 decline
  }
  if (Rw < 400) {
    mul_ar *= 0.9; // ration<400 decline
  }
}

function getMul_RF(allReso, Mw, Rw) { // RF possibility decline
  if (allReso >= 1100) { // allReso base
    mul_rf = 1
  } else if (allReso >= 800 && allReso < 1100) {
    mul_rf = 0.7
  } else {
    mul_rf = 0.5
  }
  if (Mw < 400) {
    mul_rf *= 0.8; // manpower<400 decline
  }
  if (Rw < 400) {
    mul_rf *= 0.8; // ration<400 decline
  }
}

function getMul_MG(allReso) { // MG possibility decline
  if (allReso >= 1700) { // allReso base
    mul_mg = 1
  } else {
    mul_mg = 0.8
  }
}

function getMul_SG(allReso, AwH) { // SG possibility decline
  if (allReso >= 18000) {
    mul_sg = 1
  } else if (allReso >= 17000 && allReso < 18000) {
    mul_sg = 0.8
  } else {
    mul_sg = 0.6
  }
  if (AwH <= 3000) {
    mul_sg *= 1
  } else if (AwH > 3000 && AwH <= 5000) {
    mul_sg *= 0.9
  } else {
    mul_sg *= 0.8
  }
}

function getMul_SMG_H(allReso) { // SMG_Heavy possibility decline
  mul_smg = 3
  if (allReso >= 22000) {
    mul_smg *= 0.2
  } else if (allReso >= 18000 && allReso < 22000) {
    mul_smg *= 0.4
  } else if (allReso >= 10000 && allReso < 18000) {
    mul_smg *= 0.6
  } else if (allReso >= 7000 && allReso < 10000) {
    mul_smg *= 0.8
  } else {
    mul_smg *= 1
  }
}

function getMul_AR_H(allReso) { // AR_Heavy possibility decline
  mul_ar = 3
  if (allReso >= 22000) {
    mul_ar *= 0.15
  } else if (allReso >= 18000 && allReso < 22000) {
    mul_ar *= 0.2
  } else if (allReso >= 15000 && allReso < 18000) {
    mul_ar *= 0.3
  } else if (allReso >= 12000 && allReso < 15000) {
    mul_ar *= 0.4
  } else if (allReso >= 10000 && allReso < 12000) {
    mul_ar *= 0.6
  } else if (allReso >= 7000 && allReso < 10000) {
    mul_ar *= 0.8
  } else {
    mul_ar *= 1
  }
}

function getMul_RF_H(allReso) {
  mul_rf = 3
  if (allReso >= 22000) {
    mul_rf *= 0.25
  } else if (allReso >= 18000 && allReso < 22000) {
    mul_rf *= 0.35
  } else if (allReso >= 14000 && allReso < 18000) {
    mul_rf *= 0.5
  } else if (allReso >= 12000 && allReso < 14000) {
    mul_rf *= 0.7
  } else {
    mul_rf *= 1
  }
}

function getMul_MG_H(allReso) {
  mul_mg = 3
  if (allReso >= 22000) {
    mul_mg *= 0.4
  } else if (allReso >= 20000 && allReso < 22000) {
    mul_mg *= 0.6
  } else if (allReso >= 18000 && allReso < 20000) {
    mul_mg *= 0.8
  } else if (allReso >= 17000 && allReso < 18000) {
    mul_mg *= 1
  } else {
    mul_mg *= 0.8
  }
}



function makeStar_Heavy(HClass) { // Star possibility=15,45,40/20,60,20/25,75,0
  var starNum = Math.floor(Math.random() * 100)
  if (HClass === 1) {
    if (starNum < 15) return 5
    else if (starNum >= 15 && starNum < 60) return 4
    else return 3
  } else if (HClass === 2) {
    if (starNum < 20) return 5
    else if (starNum >= 20 && starNum < 80) return 4
    else return 3
  } else {
    if (starNum < 25) return 5
    else return 4
  }
}

function makeStarE() { // Star possibility=6.5,15,30,48.5
  var Mw = parseInt(document.getElementById('MwE').value)
  var Aw = parseInt(document.getElementById('AwE').value)
  var Rw = parseInt(document.getElementById('RwE').value)
  var Pw = parseInt(document.getElementById('PwE').value)
  var starNum = Math.floor(Math.random() * 200)
  if (Mw + Aw + Rw + Pw >= 580) {
    if (starNum < 13) return 5
    else if (starNum >= 13 && starNum < 43) return 4
    else if (starNum >= 43 && starNum < 103) return 3
    else return 2
  } else if (Mw + Aw + Rw + Pw >= 360 && Mw + Aw + Rw + Pw < 580) { // low resource decline: 5,13,27,55
    if (starNum < 10) return 5
    else if (starNum >= 10 && starNum < 36) return 4
    else if (starNum >= 36 && starNum < 90) return 3
    else return 2
  } else { // low resource decline: 3,10,17,70
    if (starNum < 6) return 5
    else if (starNum >= 6 && starNum < 26) return 4
    else if (starNum >= 26 && starNum < 60) return 3
    else return 2
  }
}

function makeStar_HeavyE(EHClass) { // Star possibility=27,11,22,40/37,18,45,0/47,26,27,0 , STAR=6 means Fairy
  var starNum = Math.floor(Math.random() * 100)
  if (EHClass === 1) {
    if (starNum < 27) return 6
    else if (starNum >= 27 && starNum < 38) return 5
    else if (starNum >= 38 && starNum < 60) return 4
    else return 3
  } else if (EHClass === 2) {
    if (starNum < 37) return 6
    else if (starNum >= 37 && starNum < 55) return 5
    else return 4
  } else {
    if (starNum < 47) return 6
    else if (starNum >= 47 && starNum < 73) return 5
    else return 4
  }
}

function makeTdoll_Heavy(MwH, AwH, RwH, PwH, starNum) { // Heavy-produce T-doll, possibility*100
  if (starNum === 5) fiveStarNumH++
  var TdollInfo = '<b>'
  var TdollList = []
  for (var i = 0; i < starNum; i++) {
    TdollInfo += '★'
  }
  // SG: 4163 and 6164
  if (MwH >= 4000 && AwH >= 1000 && RwH >= 6000 && PwH >= 3000) {
    getMul_SG(MwH + AwH + RwH + PwH)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_SMG('SG@KSG', 48))
      if (MwH >= 6000 && AwH >= 1000 && RwH >= 6000 && PwH >= 4000) {
        TdollList.push(creatTdollInfo_SMG('SG@AA-12', 32))
        TdollList.push(creatTdollInfo_SMG('SG@FP-6', 24))
        TdollList.push(creatTdollInfo_SMG('SG@Saiga-12', 40))
        TdollList.push(creatTdollInfo_SMG('SG@S.A.T.8', 24))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_SMG('SG@M590', 200))
      TdollList.push(creatTdollInfo_SMG('SG@M1014', 60))
      TdollList.push(creatTdollInfo_SMG('SG@SPAS-12', 160))
      TdollList.push(creatTdollInfo_SMG('SG@USAS-12', 80))
      if (MwH >= 6000 && AwH >= 1000 && RwH >= 6000 && PwH >= 4000) {
        TdollList.push(creatTdollInfo_SMG('SG@M37', 180))
        TdollList.push(creatTdollInfo_SMG('SG@Super-Shorty', 130))
      }
    } else {
      TdollList.push(creatTdollInfo_SMG('SG@M1897', 270))
      TdollList.push(creatTdollInfo_SMG('SG@M400', 290))
      TdollList.push(creatTdollInfo_SMG('SG@KS-23', 270))
      TdollList.push(creatTdollInfo_SMG('SG@NS2000', 150))
      if (MwH >= 6000 && AwH >= 1000 && RwH >= 6000 && PwH >= 4000) {
        TdollList.push(creatTdollInfo_SMG('SG@RMB93', 260))
      }
    }
  }
  // SMG-always
  if (true) {
    getMul_SMG_H(MwH + AwH + RwH + PwH)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_SMG('SMG@汤姆森', 160))
      if (MwH >= 4000 && AwH >= 4000) {
        TdollList.push(creatTdollInfo_SMG('SMG@Vector', 108))
        TdollList.push(creatTdollInfo_SMG('SMG@G36C', 24))
        TdollList.push(creatTdollInfo_SMG('SMG@索米', 48))
        TdollList.push(creatTdollInfo_SMG('SMG@79式', 132))
        TdollList.push(creatTdollInfo_SMG('SMG@SR-3MP', 57))
        TdollList.push(creatTdollInfo_SMG('SMG@C-MS', 22))
        TdollList.push(creatTdollInfo_SMG('SMG@P90', 14))
        TdollList.push(creatTdollInfo_SMG('SMG@樱花', 108))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_SMG('SMG@PP-90', 114))
      TdollList.push(creatTdollInfo_SMG('SMG@MP5', 220))
      if (MwH >= 4000 && AwH >= 4000) {
        TdollList.push(creatTdollInfo_SMG('SMG@UMP9', 220))
        TdollList.push(creatTdollInfo_SMG('SMG@UMP45', 155))
        TdollList.push(creatTdollInfo_SMG('SMG@希普卡', 120))
      }
    } else {
      TdollList.push(creatTdollInfo_SMG('SMG@F1', 200))
      TdollList.push(creatTdollInfo_SMG('SMG@Z-62', 300))
      TdollList.push(creatTdollInfo_SMG('SMG@MAC-10', 178))
      TdollList.push(creatTdollInfo_SMG('SMG@PPS-43', 99))
      TdollList.push(creatTdollInfo_SMG('SMG@蝎式', 130))
      TdollList.push(creatTdollInfo_SMG('SMG@司登MKII', 298))
      TdollList.push(creatTdollInfo_SMG('SMG@微型乌兹', 188))
    }
  }
  // AR-always+1441
  if (true) {
    getMul_AR_H(MwH + AwH + RwH + PwH)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_AR('AR@HK416', 180))
      TdollList.push(creatTdollInfo_AR('AR@G11', 50))
      if (AwH >= 4000 && RwH >= 4000) {
        TdollList.push(creatTdollInfo_AR('AR@G41', 120))
        TdollList.push(creatTdollInfo_AR('AR@FAL', 100))
        TdollList.push(creatTdollInfo_AR('AR@95式', 100))
        TdollList.push(creatTdollInfo_AR('AR@97式', 100))
        TdollList.push(creatTdollInfo_AR('AR@RFB', 80))
        TdollList.push(creatTdollInfo_AR('AR@T91', 100))
        TdollList.push(creatTdollInfo_AR('AR@K2', 100))
        TdollList.push(creatTdollInfo_AR('AR@Zas M21', 190))
        TdollList.push(creatTdollInfo_AR('AR@AN-94', 50))
        TdollList.push(creatTdollInfo_AR('AR@AK-12', 50))
        TdollList.push(creatTdollInfo_AR('AR@MDR', 100))
        TdollList.push(creatTdollInfo_AR('AR@K11', 180))
        TdollList.push(creatTdollInfo_AR('AR@64式自 ', 100))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_AR('AR@AS Val', 200))
      TdollList.push(creatTdollInfo_AR('AR@56-1式', 200))
      TdollList.push(creatTdollInfo_AR('AR@FAMAS', 200))
      TdollList.push(creatTdollInfo_AR('AR@9A-91', 200))
      TdollList.push(creatTdollInfo_AR('AR@XM8', 200))
      TdollList.push(creatTdollInfo_AR('AR@SAR-21', 200))
      TdollList.push(creatTdollInfo_AR('AR@EM-2', 200))
      if (AwH >= 4000 && RwH >= 4000) {
        TdollList.push(creatTdollInfo_AR('AR@G36', 100))
        TdollList.push(creatTdollInfo_AR('AR@TAR-21', 200))
        TdollList.push(creatTdollInfo_AR('AR@利贝罗勒', 200))
      }
    } else {
      TdollList.push(creatTdollInfo_AR('AR@ARX-160', 280))
      TdollList.push(creatTdollInfo_AR('AR@AK-47', 290))
      TdollList.push(creatTdollInfo_AR('AR@StG44', 315))
      TdollList.push(creatTdollInfo_AR('AR@FNC', 290))
      TdollList.push(creatTdollInfo_AR('AR@OTs-12', 270))
      TdollList.push(creatTdollInfo_AR('AR@StG44', 315))
    }
  }
  // RF: 4141
  if (MwH >= 4000 && RwH >= 4000) {
    getMul_RF_H(MwH + AwH + RwH + PwH)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_RF('RF@WA2000', 85))
      TdollList.push(creatTdollInfo_RF('RF@NTW-20', 90))
      TdollList.push(creatTdollInfo_RF('RF@卡尔卡诺M1891', 60))
      TdollList.push(creatTdollInfo_RF('RF@Kar98k', 28))
      TdollList.push(creatTdollInfo_RF('RF@李·恩菲尔德', 60))
      TdollList.push(creatTdollInfo_RF('RF@M99', 28))
      TdollList.push(creatTdollInfo_RF('RF@IWS2000', 16))
      TdollList.push(creatTdollInfo_RF('RF@卡尔卡诺M91/38', 14))
      TdollList.push(creatTdollInfo_RF('RF@M200', 85))
      TdollList.push(creatTdollInfo_RF('RF@QBU-88', 30))
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_RF('RF@PSG-1', 200))
      TdollList.push(creatTdollInfo_RF('RF@G28', 170))
      TdollList.push(creatTdollInfo_RF('RF@PzB-39', 140))
      TdollList.push(creatTdollInfo_RF('RF@春田', 300))
      TdollList.push(creatTdollInfo_RF('RF@莫辛-纳甘', 260))
      TdollList.push(creatTdollInfo_RF('RF@PTRD', 160))
      TdollList.push(creatTdollInfo_RF('RF@SVD', 110))
      TdollList.push(creatTdollInfo_RF('RF@T-5000', 100))
      TdollList.push(creatTdollInfo_RF('RF@SPR-A3G', 40))
      TdollList.push(creatTdollInfo_RF('RF@K31', 100))
    } else {
      TdollList.push(creatTdollInfo_RF('RF@Ots-44', 230))
      TdollList.push(creatTdollInfo_RF('RF@M1加兰德', 400))
      TdollList.push(creatTdollInfo_RF('RF@M14', 370))
      TdollList.push(creatTdollInfo_RF('RF@SV-98', 300))
      TdollList.push(creatTdollInfo_RF('RF@汉阳造88式', 90))
    }
  }
  // MG: 4614 6614
  if (MwH >= 4000 && AwH >= 6000 && PwH >= 4000) {
    getMul_MG_H(MwH + AwH + RwH + PwH)
    if (starNum === 5) {
      TdollList.push(creatTdollInfo_MG('MG@MG5', 90))
      if (MwH >= 6000 && AwH >= 6000 && PwH >= 4000) {
        TdollList.push(creatTdollInfo_MG('MG@内格夫', 40))
        TdollList.push(creatTdollInfo_MG('MG@MG4', 50))
        TdollList.push(creatTdollInfo_MG('MG@PKP', 70))
        TdollList.push(creatTdollInfo_MG('MG@88式', 70))
        TdollList.push(creatTdollInfo_MG('MG@MG36', 70))
      }
    } else if (starNum === 4) {
      TdollList.push(creatTdollInfo_MG('MG@M1918', 230))
      TdollList.push(creatTdollInfo_MG('MG@M60', 150))
      TdollList.push(creatTdollInfo_MG('MG@MG3', 200))
      TdollList.push(creatTdollInfo_MG('MG@阿梅丽', 55))
      if (MwH >= 6000 && AwH >= 6000 && PwH >= 4000) {
        TdollList.push(creatTdollInfo_MG('MG@PK', 80))
        TdollList.push(creatTdollInfo_MG('MG@MK48', 80))
        TdollList.push(creatTdollInfo_MG('MG@AEK-999', 80))
        TdollList.push(creatTdollInfo_MG('MG@80式', 70))
        TdollList.push(creatTdollInfo_MG('MG@绍沙', 80))
      }
    } else {
      TdollList.push(creatTdollInfo_MG('MG@M2HB', 170))
      TdollList.push(creatTdollInfo_MG('MG@M1919A4', 350))
      TdollList.push(creatTdollInfo_MG('MG@MG42', 350))
      TdollList.push(creatTdollInfo_MG('MG@布伦', 380))
    }
  }
  var totalPosiNum = 0
  for (var i = 0; i < TdollList.length; i++) {
    totalPosiNum += parseInt(TdollList[i].possibility)
  }
  var selectTdoll = Math.floor(Math.random() * totalPosiNum)
  for (var i = 0; i < TdollList.length; i++) {
    selectTdoll -= parseInt(TdollList[i].possibility)
    if (selectTdoll <= 0) {
      TdollInfo += ' '
      TdollInfo += TdollList[i].name
      break
    }
  }
  TdollInfo += '</b>'
  return TdollInfo
}

function makeEquip(Mw, Aw, Rw, Pw, starNum) { // Normal-produce Equip, possibility*100, refer to 150x4
  if (starNum === 5) fiveStarNumE++
  var EquipInfo = '<b>'
  var EquipList = []
  for (var i = 0; i < starNum; i++) {
    EquipInfo += '★'
  }
  // Scope: Aw<=150 and Pw<=150
  if (Aw <= 150 && Pw <= 150) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[光瞄] VFL 6-24x56', 100))
      EquipList.push(creatEquipInfo('[全息] EOT 518', 100))
      EquipList.push(creatEquipInfo('[红点] ITI Mars', 100))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[光瞄] PSO-1', 190))
      EquipList.push(creatEquipInfo('[全息] EOT 516', 190))
      EquipList.push(creatEquipInfo('[红点] COG-M150', 190))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[光瞄] LRA 2-12x50', 235))
      EquipList.push(creatEquipInfo('[全息] EOT 512', 235))
      EquipList.push(creatEquipInfo('[红点] AMP-COMPM4', 235))
    } else {
      EquipList.push(creatEquipInfo('[光瞄] BM 3-12X40', 310))
      EquipList.push(creatEquipInfo('[全息] EOT 506', 310))
      EquipList.push(creatEquipInfo('[红点] AMP-COMPM2', 310))
    }
  }
  // Night & Cape: Mw>=100 and Rw>=100
  if (Mw >= 100 && Rw >= 100) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[披风] 热光学迷彩披风', 50))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-16A', 100))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[披风] 城市迷彩披风', 109))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-15', 167))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[披风] 伪装披风', 183))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-5', 160))
    } else {
      EquipList.push(creatEquipInfo('[披风] 破旧披风', 254))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-2', 198))
    }
  }
  // Exoskeleton: Mw>=50 and Pw>=50
  if (Mw >= 50 && Pw >= 50) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T4 外骨骼', 48))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X4 外骨骼', 48))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T3 外骨骼', 89))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X3 外骨骼', 89))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T2 外骨骼', 110))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X2 外骨骼', 110))
    } else {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T1 外骨骼', 145))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X1 外骨骼', 145))
    }
  }
  // Suppressor: Mw>=50
  if (Mw >= 50) {
    if (starNum === 5) EquipList.push(creatEquipInfo('[消音器] AC4 消音器', 75))
    else if (starNum === 4) EquipList.push(creatEquipInfo('[消音器] AC3 消音器', 129))
    else if (starNum === 3) EquipList.push(creatEquipInfo('[消音器] AC2 消音器', 177))
    else EquipList.push(creatEquipInfo('[消音器] AC1 消音器', 221))
  }
  // Ammo and box: Aw>=150 and Pw>=50
  if (Aw >= 150 && Pw >= 50) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[弹链] IOP极限弹链箱', 60))
      EquipList.push(creatEquipInfo('[高速弹] APCR高速弹', 60))
      EquipList.push(creatEquipInfo('[穿甲弹] Mk211高爆穿甲弹', 94))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 52))
      EquipList.push(creatEquipInfo('[霰弹] #000猎鹿弹', 55))
      EquipList.push(creatEquipInfo('[霰弹] SABOT独头弹', 55))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[弹链] IOP大容量弹链箱', 125))
      EquipList.push(creatEquipInfo('[高速弹] JHP高速弹', 141))
      EquipList.push(creatEquipInfo('[穿甲弹] Mk169穿甲弹', 191))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 140))
      EquipList.push(creatEquipInfo('[霰弹] #00猎鹿弹', 132))
      EquipList.push(creatEquipInfo('[霰弹] WAD独头弹', 139))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[高速弹] JSP高速弹', 253))
      EquipList.push(creatEquipInfo('[穿甲弹] M993穿甲弹', 338))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 284))
      EquipList.push(creatEquipInfo('[霰弹] #0猎鹿弹', 258))
      EquipList.push(creatEquipInfo('[霰弹] FST独头弹', 248))
    } else {
      EquipList.push(creatEquipInfo('[高速弹] FMJ高速弹', 344))
      EquipList.push(creatEquipInfo('[穿甲弹] M61穿甲弹', 430))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 377))
      EquipList.push(creatEquipInfo('[霰弹] #1猎鹿弹', 343))
      EquipList.push(creatEquipInfo('[霰弹] BK独头弹', 327))
    }
  }
  // Armor plate and box: Rw>=50 and Pw>=50
  if (Rw >= 50 && Pw >= 50) {
    if (starNum === 5) EquipList.push(creatEquipInfo('[防弹插板] Type3防弹插板', 113))
    else if (starNum === 4) EquipList.push(creatEquipInfo('[防弹插板] Type2防弹插板', 288))
    else EquipList.push(creatEquipInfo('[防弹插板] Type1防弹插板', 149))
  }
  var totalPosiNum = 0
  for (var i = 0; i < EquipList.length; i++) {
    totalPosiNum += parseInt(EquipList[i].possibility)
  }
  var selectEquip = Math.floor(Math.random() * totalPosiNum)
  for (var i = 0; i < EquipList.length; i++) {
    selectEquip -= parseInt(EquipList[i].possibility)
    if (selectEquip <= 0) {
      EquipInfo += ' '
      EquipInfo += EquipList[i].name
      break
    }
  }
  EquipInfo += '</b>'
  return EquipInfo
}

function makeEquipH(Mw, Aw, Rw, Pw, starNum) { // Normal-produce Equip, possibility*100, refer to 150x4
  if (starNum === 6) fairyNum++
  else if (starNum === 5) fiveStarNumEH++
  var EquipInfo = '<b>'
  var EquipList = []
  if (starNum <= 5) {
    for (var i = 0; i < starNum; i++) {
      EquipInfo += '★'
    }
  }
  // Fairy
  if (starNum === 6) {
    if (Mw >= 2000 && Rw >= 2000 && Pw >= 1000) {
      EquipList.push(creatEquipInfo('[策略妖精] 增援妖精', 100))
      EquipList.push(creatEquipInfo('[策略妖精] 空降妖精', 100))
      EquipList.push(creatEquipInfo('[策略妖精] 防御妖精', 100))
    }
    if (Aw >= 2000 && Rw >= 2000 && Pw >= 1000) {
      EquipList.push(creatEquipInfo('[策略妖精] 布雷妖精', 100))
      EquipList.push(creatEquipInfo('[策略妖精] 火箭妖精', 100))
      EquipList.push(creatEquipInfo('[策略妖精] 工事妖精', 100))
    }
    EquipList.push(creatEquipInfo('[战斗妖精] 指挥妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 搜救妖精', 100))
    EquipList.push(creatEquipInfo('[策略妖精] 照明妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 勇士妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 暴怒妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 盾甲妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 护盾妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 嘲讽妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 狙击妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 炮击妖精', 100))
    EquipList.push(creatEquipInfo('[战斗妖精] 空袭妖精', 100))
  }
  // Scope?
  if (Aw < 1000 && Pw < 1000) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[光瞄] VFL 6-24x56', 100))
      EquipList.push(creatEquipInfo('[全息] EOT 518', 100))
      EquipList.push(creatEquipInfo('[红点] ITI Mars', 100))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[光瞄] PSO-1', 190))
      EquipList.push(creatEquipInfo('[全息] EOT 516', 190))
      EquipList.push(creatEquipInfo('[红点] COG-M150', 190))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[光瞄] LRA 2-12x50', 235))
      EquipList.push(creatEquipInfo('[全息] EOT 512', 235))
      EquipList.push(creatEquipInfo('[红点] AMP-COMPM4', 235))
    }
  }
  // Night & Cape?
  if (Mw >= 2000 && Pw >= 1000) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[披风] 热光学迷彩披风', 50))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-16A', 100))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[披风] 城市迷彩披风', 109))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-15', 167))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[披风] 伪装披风', 183))
      EquipList.push(creatEquipInfo('[夜视仪] PEQ-5', 160))
    }
  }
  // Exoskeleton?
  if (Mw >= 2000 && Pw >= 2000) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T4 外骨骼', 48))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X4 外骨骼', 48))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T3 外骨骼', 89))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X3 外骨骼', 89))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[外骨骼T] IOP T2 外骨骼', 110))
      EquipList.push(creatEquipInfo('[外骨骼X] IOP X2 外骨骼', 110))
    }
  }
  // Suppressor: Mw>=50
  if (Mw >= 2000) {
    if (starNum === 5) EquipList.push(creatEquipInfo('[消音器] AC4 消音器', 75))
    else if (starNum === 4) EquipList.push(creatEquipInfo('[消音器] AC3 消音器', 129))
    else if (starNum === 3) EquipList.push(creatEquipInfo('[消音器] AC2 消音器', 177))
  }
  // Ammo and box?
  if (Aw >= 2000 && Pw >= 1000) {
    if (starNum === 5) {
      EquipList.push(creatEquipInfo('[弹链] IOP极限弹链箱', 60))
      EquipList.push(creatEquipInfo('[高速弹] APCR高速弹', 60))
      EquipList.push(creatEquipInfo('[穿甲弹] Mk211高爆穿甲弹', 94))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 52))
      EquipList.push(creatEquipInfo('[霰弹] #000猎鹿弹', 55))
      EquipList.push(creatEquipInfo('[霰弹] SABOT独头弹', 55))
    } else if (starNum === 4) {
      EquipList.push(creatEquipInfo('[弹链] IOP大容量弹链箱', 125))
      EquipList.push(creatEquipInfo('[高速弹] JHP高速弹', 141))
      EquipList.push(creatEquipInfo('[穿甲弹] Mk169穿甲弹', 191))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 140))
      EquipList.push(creatEquipInfo('[霰弹] #00猎鹿弹', 132))
      EquipList.push(creatEquipInfo('[霰弹] WAD独头弹', 139))
    } else if (starNum === 3) {
      EquipList.push(creatEquipInfo('[高速弹] JSP高速弹', 253))
      EquipList.push(creatEquipInfo('[穿甲弹] M993穿甲弹', 338))
      EquipList.push(creatEquipInfo('[状态弹] ILM空尖弹', 284))
      EquipList.push(creatEquipInfo('[霰弹] #0猎鹿弹', 258))
      EquipList.push(creatEquipInfo('[霰弹] FST独头弹', 248))
    }
  }
  // Armor plate and box?
  if (Rw >= 2000 && Pw >= 1000) {
    if (starNum === 5) EquipList.push(creatEquipInfo('[防弹插板] Type3防弹插板', 113))
    else if (starNum === 4) EquipList.push(creatEquipInfo('[防弹插板] Type2防弹插板', 288))
    else if (starNum === 3) EquipList.push(creatEquipInfo('[防弹插板] Type1防弹插板', 149))
  }
  var totalPosiNum = 0
  for (var i = 0; i < EquipList.length; i++) {
    totalPosiNum += parseInt(EquipList[i].possibility)
  }
  var selectEquip = Math.floor(Math.random() * totalPosiNum)
  for (var i = 0; i < EquipList.length; i++) {
    selectEquip -= parseInt(EquipList[i].possibility)
    if (selectEquip <= 0) {
      EquipInfo += ' '
      EquipInfo += EquipList[i].name
      break
    }
  }
  EquipInfo += '</b>'
  return EquipInfo
}

function addListH() { // Add Heavy-produce info
  listNum++
  listNumH++
  var chart = document.getElementById('rankingChart')
  var sumchart = document.getElementById('sumChart')
  var resochart = document.getElementById('resoChart')
  var tabSum = sumchart.innerHTML
  var tabReso = resochart.innerHTML
  var HClassId = document.getElementById('HClass')
  var HClass = parseInt(HClassId.value)
  var MwHId = document.getElementById('MwH')
  var MwH = parseInt(MwHId.value)
  allM += MwH
  var AwHId = document.getElementById('AwH')
  var AwH = parseInt(AwHId.value)
  allA += AwH
  var RwHId = document.getElementById('RwH')
  var RwH = parseInt(RwHId.value)
  allR += RwH
  var PwHId = document.getElementById('PwH')
  var PwH = parseInt(PwHId.value)
  allP += PwH
  if (HClass === 1) {
    allCon += 1
    allCore += 3
  } else if (HClass === 2) {
    allCon += 20
    allCore += 5
  } else {
    allCon += 50
    allCore += 10
  }
  var starNum = makeStar_Heavy(HClass)
  var Tdoll = makeTdoll_Heavy(MwH, AwH, RwH, PwH, starNum)
  // Add list
  global_list = global_list.substring(0, global_list.length - 16)
  global_list += '<tr>'
  global_list += '<td><span style="color:darkorange"><b>'
  global_list += (listNum + '')
  global_list += '</b></span></td>'
  global_list += '<td>'
  global_list += (MwH + ' ')
  global_list += (AwH + ' ')
  global_list += (RwH + ' ')
  global_list += (PwH + ' ')
  global_list += ('Rank' + HClass)
  global_list += '</td>'
  global_list += '<td>'
  global_5list = global_5list.substring(0, global_5list.length - 16)
  global_5list += '<tr>'
  if (starNum === 5) {
    global_5list += '<td><span style="color:darkorange"><b>'
    global_5list += (listNum + '')
    global_5list += '</b></span></td>'
    global_5list += '<td>'
    global_5list += (MwH + ' ')
    global_5list += (AwH + ' ')
    global_5list += (RwH + ' ')
    global_5list += (PwH + ' ')
    global_5list += ('Rank' + HClass)
    global_5list += '</td>'
    global_5list += '<td><span style="color:darkorange">'
    global_5list += Tdoll
    global_5list += '</span></td>'
    global_list += '<span style="color:darkorange">'
    global_list += Tdoll
    global_list += '</span>'
  } else if (starNum === 4) {
    global_list += '<span style="color:chartreuse">'
    global_list += Tdoll
    global_list += '</span>'
  } else {
    global_list += '<span style="color:dodgerblue">'
    global_list += Tdoll
    global_list += '</span>'
  }
  global_list += '</td></tr>'
  global_list += '</tbody></table>'
  global_5list += '</tr></tbody></table>'
  tabSum = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>总建造数</th><th>五星人形获取数</th><th>五星人形获取率</th><th>评价</th></tr></thead><tbody>'
  tabSum += '<tr>'
  var RateNormal
  if (listNum === listNumH) RateNormal = -1; // Not normal-produce
  else RateNormal = Math.ceil(100 * fiveStarNum / (listNum - listNumH))
  var RateHeavy
  if (listNumH === 0) RateHeavy = -1; // Not heavy-produce
  else RateHeavy = Math.ceil(100 * fiveStarNumH / listNumH)
  tabSum += '<td>'
  tabSum += (listNum + '')
  tabSum += '</td>'
  tabSum += '<td>'
  tabSum += (fiveStarNum + ' + ')
  tabSum += (fiveStarNumH + '')
  tabSum += '</td>'
  tabSum += '<td>'
  if (RateNormal < 0) tabSum += '-'
  else tabSum += (RateNormal + '%')
  tabSum += ' / '
  if (RateHeavy < 0) tabSum += '-'
  else tabSum += (RateHeavy + '%')
  tabSum += '</td>'
  tabSum += '<td>'
  if ((RateNormal < 0 || RateNormal > 10) && (RateHeavy < 0 || RateHeavy > 30)) {
    tabSum += '<span style="color:darkorange"><b>欧皇</b></span>'
  } else if ((RateNormal <= 2 && RateNormal >= 0) && (RateHeavy < 0 || (RateHeavy <= 10 && RateHeavy >= 0))) {
    tabSum += '<span style="color:darkseagreen"><b>非酋</b></span>'
  } else {
    tabSum += '<span style="color:dodgerblue"><b>亚洲人</b></span>'
  }
  tabSum += '</td></tr>'
  tabSum += '</tbody></table>'
  tabReso = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>人力消耗</th><th>弹药消耗</th><th>口粮消耗</th><th>零件消耗</th><th>人形契约消耗</th><th>装备契约消耗</th><th>核心消耗</th></tr></thead><tbody><tr>'
  tabReso += '<td>'
  tabReso += (allM + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allA + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allR + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allP + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCon + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allConE + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCore + '')
  tabReso += '</td>'
  tabReso += '</tr></tbody></table>'
  var switchA = document.getElementById('showAllSwitch')
  if (switchA.checked === true) {
    chart.innerHTML = global_list
  } else {
    chart.innerHTML = global_5list
  }
  sumchart.innerHTML = tabSum
  resochart.innerHTML = tabReso
}

function addListE() { // Add Normal-produce-equip info
  listNumE++
  var chart = document.getElementById('rankingChartE')
  var sumchart = document.getElementById('sumChartE')
  var resochart = document.getElementById('resoChart')
  var tabSum = sumchart.innerHTML
  var tabReso = resochart.innerHTML
  var MwId = document.getElementById('MwE')
  var Mw = parseInt(MwId.value)
  allM += Mw
  var AwId = document.getElementById('AwE')
  var Aw = parseInt(AwId.value)
  allA += Aw
  var RwId = document.getElementById('RwE')
  var Rw = parseInt(RwId.value)
  allR += Rw
  var PwId = document.getElementById('PwE')
  var Pw = parseInt(PwId.value)
  allP += Pw
  allConE++
  var starNum = makeStarE()
  var Equip = makeEquip(Mw, Aw, Rw, Pw, starNum)
  // add List
  global_listE = global_listE.substring(0, global_listE.length - 16)
  global_listE += '<tr>'
  global_listE += '<td>'
  global_listE += (listNumE + '')
  global_listE += '</td>'
  global_listE += '<td>'
  global_listE += (Mw + ' ')
  global_listE += (Aw + ' ')
  global_listE += (Rw + ' ')
  global_listE += (Pw + ' ')
  global_listE += '</td>'
  global_listE += '<td>'
  global_5listE = global_5listE.substring(0, global_5listE.length - 16)
  global_5listE += '<tr>'
  if (starNum === 5) {
    global_5listE += '<td>'
    global_5listE += (listNumE + '')
    global_5listE += '</td>'
    global_5listE += '<td>'
    global_5listE += (Mw + ' ')
    global_5listE += (Aw + ' ')
    global_5listE += (Rw + ' ')
    global_5listE += (Pw + ' ')
    global_5listE += '</td>'
    global_5listE += '<td><span style="color:darkorange">'
    global_5listE += Equip
    global_5listE += '</span></td>'
    global_listE += '<span style="color:darkorange">'
    global_listE += Equip
    global_listE += '</span>'
  } else if (starNum === 4) {
    global_listE += '<span style="color:chartreuse">'
    global_listE += Equip
    global_listE += '</span>'
  } else if (starNum === 3) {
    global_listE += '<span style="color:dodgerblue">'
    global_listE += Equip
    global_listE += '</span>'
  } else {
    global_listE += '<span style="color:darkseagreen">'
    global_listE += Equip
    global_listE += '</span>'
  }
  global_listE += '</td></tr>'
  global_listE += '</tbody></table>'
  global_5listE += '</tr></tbody></table>'
  tabSum = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>总建造数</th><th>五星装备/妖精获取数</th><th>获取率</th><th>评价</th></tr></thead><tbody>'
  tabSum += '<tr>'
  var RateNormal
  if (listNumE === listNumEH) RateNormal = -1; // Not normal-produce
  else RateNormal = Math.ceil(100 * fiveStarNumE / (listNumE - listNumEH))
  var RateHeavy
  if (listNumEH === 0) RateHeavy = -1; // Not heavy-produce
  else RateHeavy = Math.ceil(100 * fiveStarNumEH / listNumEH)
  var RateFairy
  if (listNumEH === 0) RateFairy = -1; // Not heavy-produce
  else RateFairy = Math.ceil(100 * fairyNum / listNumEH)
  tabSum += '<td>'
  tabSum += (listNumE + '')
  tabSum += '</td>'
  tabSum += '<td>'
  tabSum += (fiveStarNumE + ' + ')
  tabSum += (fiveStarNumEH + ' / ')
  tabSum += (fairyNum + ' + ')
  tabSum += '</td>'
  tabSum += '<td>'
  if (RateNormal < 0) tabSum += '-'
  else tabSum += (RateNormal + '%')
  tabSum += ' / '
  if (RateHeavy < 0) tabSum += '-'
  else tabSum += (RateHeavy + '%')
  tabSum += ' / '
  if (RateFairy < 0) tabSum += '-'
  else tabSum += (RateFairy + '%')
  tabSum += '</td>'
  tabSum += '<td>'
  if ((RateNormal < 0 || RateNormal > 10) && (RateHeavy < 0 || RateHeavy > 30) && (RateFairy < 0 || RateFairy > 50)) {
    tabSum += '<span style="color:darkorange"><b>欧皇</b></span>'
  } else if ((RateNormal <= 4 && RateNormal >= 0) && (RateHeavy < 0 || (RateHeavy <= 7 && RateHeavy >= 0)) && (RateFairy < 0 || (RateFairy <= 15 && RateHeavy >= 0))) {
    tabSum += '<span style="color:darkseagreen"><b>非酋</b></span>'
  } else {
    tabSum += '<span style="color:dodgerblue"><b>亚洲人</b></span>'
  }
  tabSum += '</td></tr>'
  tabSum += '</tbody></table>'
  tabReso = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>人力消耗</th><th>弹药消耗</th><th>口粮消耗</th><th>零件消耗</th><th>人形契约消耗</th><th>装备契约消耗</th><th>核心消耗</th></tr></thead><tbody><tr>'
  tabReso += '<td>'
  tabReso += (allM + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allA + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allR + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allP + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCon + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allConE + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCore + '')
  tabReso += '</td>'
  tabReso += '</tr></tbody></table>'
  var switchA = document.getElementById('showAllSwitchE')
  var switchF = document.getElementById('showFairy')
  if (switchA.checked === true) {
    chart.innerHTML = global_listE
  } else if (switchF.checked === true) {
    chart.innerHTML = global_fairylist
  } else {
    chart.innerHTML = global_5listE
  }
  sumchart.innerHTML = tabSum
  resochart.innerHTML = tabReso
}

function addListEH() { // Add Heavy-produce-equip info
  listNumE++
  listNumEH++
  var chart = document.getElementById('rankingChartE')
  var sumchart = document.getElementById('sumChartE')
  var resochart = document.getElementById('resoChart')
  var tabSum = sumchart.innerHTML
  var tabReso = resochart.innerHTML
  var EHClassId = document.getElementById('EHClass')
  var EHClass = parseInt(EHClassId.value)
  var MwId = document.getElementById('MwEH')
  var Mw = parseInt(MwId.value)
  allM += Mw
  var AwId = document.getElementById('AwEH')
  var Aw = parseInt(AwId.value)
  allA += Aw
  var RwId = document.getElementById('RwEH')
  var Rw = parseInt(RwId.value)
  allR += Rw
  var PwId = document.getElementById('PwEH')
  var Pw = parseInt(PwId.value)
  allP += Pw
  if (EHClass === 1) {
    allConE += 1
    allCore += 2
  } else if (EHClass === 2) {
    allConE += 20
    allCore += 4
  } else {
    allConE += 50
    allCore += 6
  }
  var starNum = makeStar_HeavyE(EHClass)
  var Equip = makeEquipH(Mw, Aw, Rw, Pw, starNum)
  // add List
  global_listE = global_listE.substring(0, global_listE.length - 16)
  global_listE += '<tr>'
  global_listE += '<td>'
  global_listE += (listNumE + '')
  global_listE += '</td>'
  global_listE += '<td>'
  global_listE += (Mw + ' ')
  global_listE += (Aw + ' ')
  global_listE += (Rw + ' ')
  global_listE += (Pw + ' ')
  global_listE += ('Rank' + EHClass)
  global_listE += '</td>'
  global_listE += '<td>'
  global_5listE = global_5listE.substring(0, global_5listE.length - 16)
  global_5listE += '<tr>'
  global_fairylist = global_fairylist.substring(0, global_fairylist.length - 16)
  global_fairylist += '<tr>'
  if (starNum === 6) {
    global_fairylist += '<td>'
    global_fairylist += (listNumE + '')
    global_fairylist += '</td>'
    global_fairylist += '<td>'
    global_fairylist += (Mw + ' ')
    global_fairylist += (Aw + ' ')
    global_fairylist += (Rw + ' ')
    global_fairylist += (Pw + ' ')
    global_fairylist += ('Rank' + EHClass)
    global_fairylist += '</td>'
    var fairyName = Equip.substring(5, 6)
    if (fairyName === '战') {
      global_fairylist += '<td><span style="color:red">'
      global_fairylist += Equip
      global_fairylist += '</span></td>'
      global_listE += '<span style="color:red">'
      global_listE += Equip
      global_listE += '</span>'
    } else {
      global_fairylist += '<td><span style="color:cornflowerblue">'
      global_fairylist += Equip
      global_fairylist += '</span></td>'
      global_listE += '<span style="color:cornflowerblue">'
      global_listE += Equip
      global_listE += '</span>'
    }
  } else if (starNum === 5) {
    global_5listE += '<td>'
    global_5listE += (listNumE + '')
    global_5listE += '</td>'
    global_5listE += '<td>'
    global_5listE += (Mw + ' ')
    global_5listE += (Aw + ' ')
    global_5listE += (Rw + ' ')
    global_5listE += (Pw + ' ')
    global_5listE += ('Rank' + EHClass)
    global_5listE += '</td>'
    global_5listE += '<td><span style="color:darkorange">'
    global_5listE += Equip
    global_5listE += '</span></td>'
    global_listE += '<span style="color:darkorange">'
    global_listE += Equip
    global_listE += '</span>'
  } else if (starNum === 4) {
    global_listE += '<span style="color:chartreuse">'
    global_listE += Equip
    global_listE += '</span>'
  } else if (starNum === 3) {
    global_listE += '<span style="color:dodgerblue">'
    global_listE += Equip
    global_listE += '</span>'
  } else {
    global_listE += '<span style="color:darkseagreen">'
    global_listE += Equip
    global_listE += '</span>'
  }
  global_listE += '</td></tr>'
  global_listE += '</tbody></table>'
  global_5listE += '</tr></tbody></table>'
  global_fairylist += '</tr></tbody></table>'
  tabSum = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>总建造数</th><th>五星装备/妖精获取数</th><th>获取率</th><th>评价</th></tr></thead><tbody>'
  tabSum += '<tr>'
  var RateNormal
  if (listNumE === listNumEH) RateNormal = -1; // Not normal-produce
  else RateNormal = Math.ceil(100 * fiveStarNumE / (listNumE - listNumEH))
  var RateHeavy
  if (listNumEH === 0) RateHeavy = -1; // Not heavy-produce
  else RateHeavy = Math.ceil(100 * fiveStarNumEH / listNumEH)
  var RateFairy
  if (listNumEH === 0) RateFairy = -1; // Not heavy-produce
  else RateFairy = Math.ceil(100 * fairyNum / listNumEH)
  tabSum += '<td>'
  tabSum += (listNumE + '')
  tabSum += '</td>'
  tabSum += '<td>'
  tabSum += (fiveStarNumE + ' + ')
  tabSum += (fiveStarNumEH + ' / ')
  tabSum += (fairyNum + '')
  tabSum += '</td>'
  tabSum += '<td>'
  if (RateNormal < 0) tabSum += '-'
  else tabSum += (RateNormal + '%')
  tabSum += ' / '
  if (RateHeavy < 0) tabSum += '-'
  else tabSum += (RateHeavy + '%')
  tabSum += ' / '
  if (RateFairy < 0) tabSum += '-'
  else tabSum += (RateFairy + '%')
  tabSum += '</td>'
  tabSum += '<td>'
  if ((RateNormal < 0 || RateNormal > 10) && (RateHeavy < 0 || RateHeavy > 30) && (RateFairy < 0 || RateFairy > 50)) {
    tabSum += '<span style="color:darkorange"><b>欧皇</b></span>'
  } else if ((RateNormal <= 4 && RateNormal >= 0) && (RateHeavy < 0 || (RateHeavy <= 7 && RateHeavy >= 0)) && (RateFairy < 0 || (RateFairy <= 15 && RateHeavy >= 0))) {
    tabSum += '<span style="color:darkseagreen"><b>非酋</b></span>'
  } else {
    tabSum += '<span style="color:dodgerblue"><b>亚洲人</b></span>'
  }
  tabSum += '</td></tr>'
  tabSum += '</tbody></table>'
  tabReso = '<table class="table table-striped table-bordered table-hover"><thead><tr><th>人力消耗</th><th>弹药消耗</th><th>口粮消耗</th><th>零件消耗</th><th>人形契约消耗</th><th>装备契约消耗</th><th>核心消耗</th></tr></thead><tbody><tr>'
  tabReso += '<td>'
  tabReso += (allM + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allA + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allR + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allP + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCon + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allConE + '')
  tabReso += '</td>'
  tabReso += '<td>'
  tabReso += (allCore + '')
  tabReso += '</td>'
  tabReso += '</tr></tbody></table>'
  var switchA = document.getElementById('showAllSwitchE')
  var switchF = document.getElementById('showFairy')
  if (switchA.checked === true) {
    chart.innerHTML = global_listE
  } else if (switchF.checked === true) {
    chart.innerHTML = global_fairylist
  } else {
    chart.innerHTML = global_5listE
  }
  sumchart.innerHTML = tabSum
  resochart.innerHTML = tabReso
}

function showAll() { // Show all results
  var chart = document.getElementById('rankingChart')
  chart.innerHTML = global_list
}

function showFive() { // Show 5-star results
  var chart = document.getElementById('rankingChart')
  chart.innerHTML = global_5list
}

function showAllE() { // Show all-equip results
  var chart = document.getElementById('rankingChartE')
  chart.innerHTML = global_listE
}

function showFiveE() { // Show 5-star-equip results
  var chart = document.getElementById('rankingChartE')
  chart.innerHTML = global_5listE
}

function showFairy() { // Show fairy results
  var chart = document.getElementById('rankingChartE')
  chart.innerHTML = global_fairylist
}



function addListHMulti() {
  var panelT = document.getElementById('panelT')
  var panelE = document.getElementById('panelE')
  var resultT = document.getElementById('TdollResult')
  var resultE = document.getElementById('EquipmentResult')
  panelT.className = 'active'
  panelE.className = ''
  resultT.className = 'tab-pane fade in active'
  resultE.className = 'tab-pane fade'
  var NTimesH = document.getElementById('NTimesH')
  var timesH = parseInt(NTimesH.value)
  for (var i = 0; i < timesH; i++) {
    addListH()
  }
}

function addListEMulti() {
  var panelT = document.getElementById('panelT')
  var panelE = document.getElementById('panelE')
  var resultT = document.getElementById('TdollResult')
  var resultE = document.getElementById('EquipmentResult')
  panelT.className = ''
  panelE.className = 'active'
  resultT.className = 'tab-pane fade'
  resultE.className = 'tab-pane fade in active'
  var NTimes = document.getElementById('NTimesE')
  var times = parseInt(NTimes.value)
  for (var i = 0; i < times; i++) {
    addListE()
  }
}

function addListEHMulti() {
  var panelT = document.getElementById('panelT')
  var panelE = document.getElementById('panelE')
  var resultT = document.getElementById('TdollResult')
  var resultE = document.getElementById('EquipmentResult')
  panelT.className = ''
  panelE.className = 'active'
  resultT.className = 'tab-pane fade'
  resultE.className = 'tab-pane fade in active'
  var NTimesH = document.getElementById('NTimesEH')
  var timesH = parseInt(NTimesH.value)
  for (var i = 0; i < timesH; i++) {
    addListEH()
  }
}
