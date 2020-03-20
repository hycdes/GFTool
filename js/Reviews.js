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
        else if (str[0] === ' ') return '#FF9999'
    }
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
    temp_str += '<td style="text-align:center">#' + _num + '</td>'
    // 人形
    temp_str += '<td style="vertical-align:middle"><img src="img/produce/' + _star + _type + '.png" style="width:53.5px;height:27.5px"> '
    temp_str += '<b><span style="color:' + get_color(_star) + '">' + _name + '</span></b></td>'
    // 泛用
    temp_str += '<td style="text-align:center"><b><span style="font-size:18px;color:' + get_rank_color(_rank1) + '">' + _rank1 + '</span></b></td>'
    // 特化
    temp_str += '<td style="vertical-align:middle"><b>' + get_specialize(_rank2) + '</b></td>'
    // 链接
    temp_str += '<td style="vertical-align:middle">' + get_cv(_link) + '</td>'
    // finish
    temp_str += '</tr>'
    return temp_str
}

function fix() {
    document.getElementById('reviews_head').innerHTML = review_head
    for (data of review_data) {
        document.getElementById('reviews').innerHTML += get_item(data)
    }
}

var review_data = [
    [1, 'HG', 5, '柯尔特左轮 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv3771208'],
    [2, 'HG', 4, 'M1911 [MOD]', 'B+', [[' ', '打捞专精']], 'https://www.bilibili.com/read/cv3831463'],
    [4, 'HG', 5, '蟒蛇', 'S', [], 'https://www.bilibili.com/read/cv2935925'],
    [5, 'HG', 5, '纳甘左轮 [MOD]', 'A+', [['S', '']], 'https://www.bilibili.com/read/cv3776941'],
    [7, 'HG', 5, '斯捷奇金 [MOD]', 'S+', [], 'https://www.bilibili.com/read/cv4305983'],

    [53, 'RF', 6, 'NTW-20 [MOD]', 'S', [['S+', '']], 'https://www.bilibili.com/read/cv5002785'],
    [55, 'AR', 5, 'M4A1 [MOD]', 'SP', [['SP', '特殊攻击']], 'https://www.bilibili.com/read/cv3931725'],
    [56, 'AR', 5, 'M4 SOPMODII [MOD]', 'S', [[' ', '双瞄具']], 'https://www.bilibili.com/read/cv4704206'],
    [57, 'AR', 5, 'ST AR-15 [MOD]', 'SP', [[' ', '双瞄具']], 'https://www.bilibili.com/read/cv4062046'],
    [65, 'AR', 6, 'HK416 [MOD]', 'S', [], 'https://www.bilibili.com/read/cv3683344'],

    [73, 'AR', 5, 'AUG', 'A-', [['A-', '']], 'https://www.bilibili.com/read/cv3885734'],

    [194, 'AR', 5, 'K2', 'A', [[' ', '开场爆发'], [' ', '多段攻击']], 'https://www.bilibili.com/read/cv4181170'],


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
var review_head = '<tr><th style="text-align:center">图鉴序号(共' + review_data.length + '篇)</th><th style="text-align:center">人形</th><th style="text-align:center">泛用</th><th style="text-align:center">特化</th><th style="text-align:center">评测链接</th></tr>'

window.onload = function () {
    this.fix()
}