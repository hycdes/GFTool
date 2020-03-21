function get_color(num) {
    if (num === 6) return '#FF0000'
    else if (num === 5) return '#FF9900'
    else if (num === 4) return '#33CC00'
    else if (num === 3) return '#3366CC'
    else if (num === 2) return '#66CC99'
    else if (num === 1) return '#FF33FF'
}
function get_rank_color(str) {
    if (str === 'SP') return '#33FFCC'
    else {
        if (str[0] === 'S') return '#FF0000'
        else if (str[0] === 'A') {
            if (str.length > 1 && str[1] === '-') return '#33CC00'
            else return '#FF9900'
        }
        else if (str[0] === 'B') return '#33CC00'
        else if (str[0] === 'C') return '#3366CC'
        else if (str[0] === 'N') return '#666666'
        else if (str[0] === ' ') return '#FF9999'
    }
}
function get_imgid(num, name) {
    if (isNaN(num)) {
        var ex_id = parseInt((num.split(' '))[1])
        return 2000 + ex_id
    } else {
        var num_id = num
        if (name.length > 5) {
            if (name.substr(-5) === '[MOD]') num_id += 1000
        }
        return num_id
    }
}
function get_mod(name) {
    if (name.length > 5) {
        if (name.substr(-5) === '[MOD]') return ' <img src="img/produce/MOD3.png">'
    }
    return ''
}
function get_specialize(list_str) {
    var sp_str = ''
    if (list_str.length === 0) sp_str = '-'
    else {
        for (var item_sp of list_str) {
            sp_str += '<b><span style="font-size:18px;color:' + get_rank_color(item_sp[0]) + '">' + item_sp[0] + ' ' + item_sp[1] + '</span></b> '
        }
    }
    return sp_str
}
function get_cv(str_link) {
    var list_cv = str_link.split('/'),
        rt_str = ''
    rt_str = '<a href="' + str_link + '" target="_blank">' + list_cv[list_cv.length - 1] + '</a>'
    return rt_str
}

function get_item(_info) { // [num,type,star,name,rank1,[list_rank2]]
    var _num = _info[0],
        _type = _info[1],
        _star = _info[2],
        _name = _info[3],
        _rank1 = _info[4],
        _rank2 = _info[5],
        _link = _info[6]
    var temp_str = ''
    temp_str += '<tr>'
    // 图鉴序号
    temp_str += '<td style="text-align:center">' + '<img src="img/class/' + get_imgid(_num, _name) + '.png" style="width:30px;height:30px">' + ' #' + _num + ' ' + '</td>'
    // 人形
    temp_str += '<td style="vertical-align:middle"><img src="img/produce/' + _star + _type + '.png" style="width:53.5px;height:27.5px"> '
    temp_str += '<b><span style="color:' + get_color(_star) + '">' + _name + '</span></b>' + get_mod(_name) + '</td>'
    // 泛用
    temp_str += '<td style="text-align:center"><b><span style="font-size:18px;color:' + get_rank_color(_rank1) + '">' + _rank1 + '</span></b></td>'
    // 特化
    temp_str += '<td style="vertical-align:middle"><b>' + get_specialize(_rank2) + '</b></td>'
    // 链接
    temp_str += '<td style="text-align:center;vertical-align:middle">' + get_cv(_link) + '</td>'
    // finish
    temp_str += '</tr>'
    return temp_str
}

function fix(command) {
    // do command
    if (command === 'init') {
        document.getElementById('reviews').innerHTML = ''
        for (data of review_data) {
            document.getElementById('reviews').innerHTML += get_item(data)
        }
    } else if (command === 'filter_type') {
        document.getElementById('reviews').innerHTML = ''
        if (document.getElementById('select_type').value === 'ALL') {
            fix('init')
        } else {
            for (data of review_data) {
                if (document.getElementById('select_type').value === data[1]) {
                    document.getElementById('reviews').innerHTML += get_item(data)
                }
            }
        }
    }
}

var review_data = [
    [1, 'HG', 5, '柯尔特左轮 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv3771208'],
    [2, 'HG', 4, 'M1911 [MOD]', 'B+', [[' ', '打捞专精']], 'https://www.bilibili.com/read/cv3831463'],
    [4, 'HG', 5, '蟒蛇', 'S', [], 'https://www.bilibili.com/read/cv2935925'],
    [5, 'HG', 5, '纳甘左轮 [MOD]', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv3776941'],
    [7, 'HG', 5, '斯捷奇金 [MOD]', 'S+', [], 'https://www.bilibili.com/read/cv4305983'],
    [12, 'HG', 4, 'C96 [MOD]', 'C', [['N', '待定']], 'https://www.bilibili.com/read/cv4312827'],
    [20, 'SMG', 5, 'Vector', 'A', [], 'https://www.bilibili.com/read/cv5014972'],
    [26, 'SMG', 5, 'MP5 [MOD]', 'B+', [['A+', '']], 'https://www.bilibili.com/read/cv3654973'],
    [28, 'SMG', 5, 'MP7', 'A', [['S', '']], 'https://www.bilibili.com/read/cv3765548'],
    [31, 'SMG', 4, '伯莱塔38型 [MOD]', 'A', [], 'https://www.bilibili.com/read/cv4351815'],
    [32, 'SMG', 4, '微型乌兹 [MOD]', 'A+', [], 'https://www.bilibili.com/read/cv4300299'],
    [37, 'RF', 4, 'M14 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv5155672'],
    [39, 'RF', 5, '莫辛纳甘 [MOD]', 'S', [['A+', '']], 'https://www.bilibili.com/read/cv3900123'],
    [48, 'RF', 5, 'WA2000', 'S', [], 'https://www.bilibili.com/read/cv3744190'],
    [51, 'RF', 4, 'FN-49 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv5200229'],
    [53, 'RF', 6, 'NTW-20 [MOD]', 'S', [['S+', '']], 'https://www.bilibili.com/read/cv5002785'],
    [55, 'AR', 5, 'M4A1 [MOD]', 'SP', [['SP', '特殊攻击']], 'https://www.bilibili.com/read/cv3931725'],
    [56, 'AR', 5, 'M4 SOPMODII [MOD]', 'S', [[' ', '双瞄具']], 'https://www.bilibili.com/read/cv4704206'],
    [57, 'AR', 5, 'ST AR-15 [MOD]', 'SP', [[' ', '双瞄具']], 'https://www.bilibili.com/read/cv4062046'],
    [60, 'AR', 5, 'AS Val [MOD]', 'A-', [['S+', '']], 'https://www.bilibili.com/read/cv3670181'],
    [62, 'AR', 5, 'G41', 'A', [], 'https://www.bilibili.com/read/cv3615142'],
    [64, 'AR', 5, 'G36 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv4058662'],
    [65, 'AR', 6, 'HK416 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv3683344'],
    [73, 'AR', 5, 'AUG', 'A-', [['A-', '']], 'https://www.bilibili.com/read/cv3885734'],
    [75, 'MG', 5, 'M1918 [MOD]', 'S', [['A+', '']], 'https://www.bilibili.com/read/cv4503050'],
    [81, 'MG', 4, 'LWMMG [MOD]', 'S', [[' ', '道中特化']], 'https://www.bilibili.com/read/cv4513284'],
    [91, 'HG', 4, 'MP-446 [MOD]', 'A+', [], 'https://www.bilibili.com/read/cv3893355'],
    [95, 'RF', 4, '汉阳造88式 [MOD]', 'A', [['S', '']], 'https://www.bilibili.com/read/cv3615097'],
    [96, 'HG', 5, '灰熊 MkV', 'S', [], 'https://www.bilibili.com/read/cv5051038'],
    [97, 'HG', 5, 'M950A', 'S', [], 'https://www.bilibili.com/read/cv5065001'],
    [101, 'SMG', 5, 'UMP9 [MOD]', 'A', [['S', '']], 'https://www.bilibili.com/read/cv3580229'],
    [102, 'SMG', 4, 'UMP40', 'B', [['A-', '']], 'https://www.bilibili.com/read/cv5081124'],
    [103, 'SMG', 5, 'UMP45 [MOD]', 'S+', [], 'https://www.bilibili.com/read/cv4047670'],
    [109, 'MG', 5, 'MG5', 'A+', [], 'https://www.bilibili.com/read/cv4427344'],
    [112, 'MG', 5, '内格夫', 'B', [['S+', '']], 'https://www.bilibili.com/read/cv4456647'],
    [122, 'AR', 5, 'G11', 'S', [[' ', '集中爆发']], 'https://www.bilibili.com/read/cv4041492'],
    [125, 'MG', 5, 'MG4', 'B', [], 'https://www.bilibili.com/read/cv4539624'],
    [129, 'AR', 5, '95式', 'A', [['A', '']], 'https://www.bilibili.com/read/cv3749127'],
    [130, 'AR', 5, '97式', 'A-', [['A+', '']], 'https://www.bilibili.com/read/cv3749126'],
    [135, 'SMG', 5, 'SR-3MP', 'A-', [['A+', '']], 'https://www.bilibili.com/read/cv3703443'],
    [136, 'SMG', 4, 'PP-19', 'A-', [], 'https://www.bilibili.com/read/cv3968162'],
    [142, 'HG', 5, 'Five-seveN', 'S', [], 'https://www.bilibili.com/read/cv3959281'],
    [148, 'RF', 5, 'IWS2000', 'A-', [], 'https://www.bilibili.com/read/cv3877691'],
    [166, 'HG', 5, 'CZ75', 'B+', [['B+', '']], 'https://www.bilibili.com/read/cv3759897'],
    [172, 'AR', 5, 'RFB', 'A+', [[' ', '后排打击']], 'https://www.bilibili.com/read/cv4145669'],
    [173, 'MG', 5, 'PKP', 'S', [], 'https://www.bilibili.com/read/cv4438541'],
    [177, 'SMG', 5, 'KLIN', 'A-', [], 'https://www.bilibili.com/read/cv5138129'],
    [183, 'HG', 5, '竞争者', 'A', [['A', '']], 'https://www.bilibili.com/read/cv3627805'],
    [192, 'RF', 5, 'JS05', 'B', [['A-', '']], 'https://www.bilibili.com/read/cv3742277'],
    [194, 'AR', 5, 'K2', 'A', [[' ', '开场爆发'], [' ', '多段攻击']], 'https://www.bilibili.com/read/cv4181170'],
    [197, 'RF', 5, '卡尔卡诺M1891', 'A', [[' ', '固定搭配']], 'https://www.bilibili.com/read/cv3873751'],
    [198, 'RF', 5, '卡尔卡诺M91/38', 'A', [['SP', '']], 'https://www.bilibili.com/read/cv3869586'],
    [202, 'HG', 4, '雷电', 'B+', [['B+', '']], 'https://www.bilibili.com/read/cv3759887'],
    [203, 'SMG', 4, '蜜獾', 'A+', [], 'https://www.bilibili.com/read/cv3786788'],
    [204, 'RF', 5, '芭莉斯塔', 'A', [], 'https://www.bilibili.com/read/cv5093806'],
    [205, 'AR', 5, 'AN-94', 'S+', [[' ', '首发双倍']], 'https://www.bilibili.com/read/cv4155386'],
    [206, 'AR', 5, 'AK-12', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv4150780'],
    [207, 'AR', 4, 'CZ2000', 'A-', [], 'https://www.bilibili.com/read/cv3786114'],
    [208, 'MG', 5, 'HK21', 'B+', [['A', '']], 'https://www.bilibili.com/read/cv4133124'],
    [211, 'RF', 5, 'SRS', 'A+', [], 'https://www.bilibili.com/read/cv5110047'],
    [212, 'HG', 4, 'K5', 'S', [], 'https://www.bilibili.com/read/cv4685199'],
    [213, 'SMG', 5, 'C-MS', 'S', [], 'https://www.bilibili.com/read/cv3765555'],
    [214, 'AR', 5, 'ADS', 'A-', [], 'https://www.bilibili.com/read/cv3193751'],
    [215, 'AR', 5, 'MDR', 'A+', [['A', '套盾']], 'https://www.bilibili.com/read/cv5124948'],
    [224, 'SMG', 5, 'PM-06', 'A', [], 'https://www.bilibili.com/read/cv3706386'],
    [233, 'HG', 5, 'Px4 风暴', 'S', [], 'https://www.bilibili.com/read/cv3753669'],
    [234, 'SMG', 5, 'JS 9', 'S', [], 'https://www.bilibili.com/read/cv4548637'],
    [242, 'HG', 5, 'P22', 'S+', [], 'https://www.bilibili.com/read/cv3781592'],
    [243, 'AR', 5, '64式自', 'A-', [['N', '待定']], 'https://www.bilibili.com/read/cv3943508'],
    [245, 'SMG', 5, 'P90', 'A+', [['S+', '']], 'https://www.bilibili.com/read/cv2994209'],
    [250, 'HG', 5, 'HS2000', 'A+', [['S+', '']], 'https://www.bilibili.com/read/cv4088671'],
    [251, 'SMG', 5, 'X95', 'B+', [], 'https://www.bilibili.com/read/cv3209420'],
    [252, 'RF', 4, 'KSVK', 'B', [['A-', '']], 'https://www.bilibili.com/read/cv3781372'],
    [253, 'MG', 5, '刘易斯', 'S+', [['S+', '']], 'https://www.bilibili.com/read/cv4094534'],
    [257, 'RF', 5, 'M200', 'B', [['S+', '']], 'https://www.bilibili.com/read/cv2814821'],
    [260, 'HG', 5, 'PA-15', 'A', [['S', '']], 'https://www.bilibili.com/read/cv3272087'],
    [261, 'RF', 5, 'QBU-88', 'A-', [['S', '']], 'https://www.bilibili.com/read/cv3074400'],
    [262, 'AR', 4, 'EM-2', 'A', [['A+', '']], 'https://www.bilibili.com/read/cv4602735'],
    [263, 'MG', 5, 'MG36', 'B', [], 'https://www.bilibili.com/read/cv4528643'],
    [266, 'RF', 5, 'R93', 'S', [], 'https://www.bilibili.com/read/cv2738393'],
    [270, 'RF', 4, '四式', 'A-', [['A+', '']], 'https://www.bilibili.com/read/cv3233897'],
    [272, 'HG', 5, '沙漠之鹰', 'A+', [['S+', '']], 'https://www.bilibili.com/read/cv3546395'],
    [274, 'AR', 5, 'ACR', 'A-', [], 'https://www.bilibili.com/read/cv3517485'],
    [275, 'MG', 4, 'M1895CB', 'A-', [['S', '']], 'https://www.bilibili.com/read/cv3820390'],
    [276, 'MG', 5, 'Kord', 'S+', [['S+', '']], 'https://www.bilibili.com/read/cv3313727'],
    [280, 'SMG', 4, 'MAT-49', 'A+', [], 'https://www.bilibili.com/read/cv4332796'],
    [283, 'SG', 4, '解放者', 'B-', [['N', '待定']], 'https://www.bilibili.com/read/cv4081981'],
    [285, 'HG', 5, 'C-93', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv4289147'],
    [286, 'SMG', 4, 'KAC-PDW', 'A-', [['A+', '']], 'https://www.bilibili.com/read/cv4318300'],
    [287, 'AR', 5, 'SIG-556', 'A+', [], 'https://www.bilibili.com/read/cv4282813'],
    [288, 'AR', 4, 'CR-21', 'A', [], 'https://www.bilibili.com/read/cv4323465'],
    [289, 'AR', 5, 'R5', 'A+', [], 'https://www.bilibili.com/read/cv4238681'],
    [290, 'AR', 5, '89式自', 'S', [['S+', '']], 'https://www.bilibili.com/read/cv4614480'],
    [292, 'MG', 5, 'RPK-16', 'S', [[' ', '极限铁甲'], [' ', 'AR混编']], 'https://www.bilibili.com/read/cv4440170'],
    [293, 'AR', 5, 'AK-15', 'A+', [], 'https://www.bilibili.com/read/cv4471194'],
    [294, 'HG', 5, '韦伯利', 'S', [['S+', '']], 'https://www.bilibili.com/read/cv4768621'],
    [295, 'SMG', 4, 'CF05', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv4558680'],
    [296, 'RF', 5, 'SL8', 'S', [], 'https://www.bilibili.com/read/cv4405812'],
    [297, 'RF', 4, 'M82', 'B+', [], 'https://www.bilibili.com/read/cv4415859'],
    ['EX 9', 'HG', 1, '克莉尔', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv3974911'],
    ['EX 10', 'HG', 1, '菲尔', 'B+', [['A+', '']], 'https://www.bilibili.com/read/cv3987286'],
    ['EX 17', 'HG', 1, '吉尔·斯汀雷', 'S', [['S+', '']], 'https://www.bilibili.com/read/cv2923748'],
    ['EX 18', 'HG', 1, '赛伊·朝雾', 'A', [['S', '']], 'https://www.bilibili.com/read/cv2970990'],
    ['EX 19', 'SMG', 1, '多萝西·海兹', 'S', [], 'https://www.bilibili.com/read/cv2955020'],
    ['EX 20', 'RF', 1, '史黛拉·星井', 'A+', [], 'https://www.bilibili.com/read/cv2893767'],
    ['EX 21', 'MG', 1, '阿尔玛·阿玛斯', 'A+', [], 'https://www.bilibili.com/read/cv2899402'],
    ['EX 22', 'SG', 1, '达娜·赞恩', 'A+', [], 'https://www.bilibili.com/read/cv2916327'],
]
var review_head = '<tr><th style="text-align:center;vertical-align:middle;width:100px">图鉴序号(共' + review_data.length + '篇)</th>'
    + '<th style="text-align:center;vertical-align:middle;width:250px">'
    + '<select class="form-control input-sm" style="width:120px" id="select_type" onchange="fix(' + "'" + 'filter_type' + "'" + ')">'
    + '<option value="ALL" selected>全部人形</option><option value="HG">HG</option><option value="AR">AR</option><option value="SMG">SMG</option>'
    + '<option value="RF">RF</option><option value="MG">MG</option><option value="SG">SG</option>'
    + '</select>'
    + '</th><th style="text-align:center;vertical-align:middle;width:100px">泛用</th>'
    + '<th style="text-align:center;vertical-align:middle;width:200px">特化</th>'
    + '<th style="text-align:center;vertical-align:middle">评测链接</th></tr>'

window.onload = function () {
    document.getElementById('reviews_head').innerHTML = review_head
    this.fix('init')
}