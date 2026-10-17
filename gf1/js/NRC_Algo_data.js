var lib_neursoul_data = new Map
function create_neursoul(hp, ad, ap, addfs, apdfs, rof, crit, critdmg, adpnt, appnt, eva, hprecover) {
    var neursoul = {}
    neursoul.hp = hp
    neursoul.ad = ad
    neursoul.ap = ap
    neursoul.addfs = addfs
    neursoul.apdfs = apdfs
    neursoul.rof = rof
    neursoul.crit = crit
    neursoul.critdmg = critdmg
    neursoul.adpnt = adpnt
    neursoul.appnt = appnt
    neursoul.eva = eva
    neursoul.hprecover = hprecover
    return neursoul
}
function _search(job_id, neursoul_id) {
    return lib_neursoul_data.get(job_id + '-' + neursoul_id)
}

lib_neursoul_data.set('1-1', create_neursoul(10253, 582, 529, 168, 168, 120, 0.1, 0.5, 438, 397, 0, 364)) // hubble

lib_neursoul_data.set('2-1', create_neursoul(16474, 549, 436, 368, 368, 110, 0.1, 0.5, 391, 359, 0.05, 588)) // aki


var lib_algo = // [algo_area,algo_name]
    [
        // 置空
        ['<option value=-1 selected>-</option>'],
        // 攻击性
        [
            '<option value=0 selected>异相回归</option>',
            '<option value=1>最小阈值</option>',
            '<option value=2>数据复原</option>',
            '<option value=3>前馈</option>',
            '<option value=4>渐进</option>',
            '<option value=5>推演</option>',
            '<option value=6>单格算法</option>',
        ],
        // 稳定性
        [
            '<option value=0 selected>代码封装</option>',
            '<option value=1>机器学习</option>',
            '<option value=2>补码溢出</option>',
            '<option value=3>感知</option>',
            '<option value=4>理性</option>',
            '<option value=5>连结</option>',
            '<option value=6>单格算法</option>',
        ],
        // 特异性
        [
            '<option value=0 selected>矢量加速</option>',
            '<option value=1>矩阵结构</option>',
            '<option value=2>支持向量</option>',
            '<option value=3>正向反馈</option>',
            '<option value=4>集束</option>',
            '<option value=5>卷积</option>',
            '<option value=6>启发</option>',
            '<option value=7>博弈</option>',
            '<option value=8>单格算法</option>',
        ],
    ]
var lib_property_main =
    [
        // 置空
        [],
        // 攻击性
        [
            ['<option value=0 selected>攻击力 +12%</option>', 'ad', 'percent', 0.12],
            ['<option value=1>攻击力 +56</option>', 'ad', 'value', 56],
            ['<option value=2>算力 +12%</option>', 'ap', 'percent', 0.12],
            ['<option value=3>算力 +56</option>', 'ap', 'value', 56],
            ['<option value=4>物理穿透 +7.2%</option>', 'adpnt', 'percent', 0.072],
            ['<option value=5>物理穿透 +20</option>', 'adpnt', 'value', 20],
            ['<option value=6>算量穿透 +7.2%</option>', 'appnt', 'percent', 0.072],
            ['<option value=7>算量穿透 +20</option>', 'appnt', 'value', 20],
        ],
        // 稳定性
        [
            ['<option value=0 selected>生命值 +12%</option>', 'hp', 'percent', 0.12],
            ['<option value=1>生命值 +56</option>', 'hp', 'value', 1800],
            ['<option value=2>物理防御 +7.2%</option>', 'addfs', 'percent', 0.072],
            ['<option value=3>物理防御 +56</option>', 'addfs', 'value', 56],
            ['<option value=4>算量防御 +7.2%</option>', 'apdfs', 'percent', 0.072],
            ['<option value=5>算量防御 +56</option>', 'apdfs', 'value', 56],
            ['<option value=6>战后生命恢复 +720</option>', 'hprecover', 'value', 720],
        ],
        // 特异性
        [
            ['<option value=0 selected>技能急速 +8%</option>', 'cd', 'percent', 0.08],
            ['<option value=1>治疗加成 +4%</option>', 'heal', 'percent', 0.04],
            ['<option value=2>物理防御 +7.2%</option>', 'addfs', 'percent', 0.072],
            ['<option value=3>物理防御 +56</option>', 'addfs', 'value', 56],
            ['<option value=4>算量防御 +7.2%</option>', 'apdfs', 'percent', 0.072],
            ['<option value=5>算量防御 +56</option>', 'apdfs', 'value', 56],
            ['<option value=6>暴击率 +8%</option>', 'crit', 'percent', 0.08],
            ['<option value=7>暴伤 +16%</option>', 'critdmg', 'percent', 0.16],
        ]
    ]