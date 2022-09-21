var num_taglist = 4; // 首页标签列表数量
var num_sort = 7 // 默认排序展示数
var pick_id = -1 //
var pick_tag = [
    [],
    [],
    [],
    []
]
var lib_sim = new Map // 存储选择人物每个tag的等级
var lib_sim_value = new Map // 存储选择人物每个tag已经计算好的数值
var lib_sim_similar = new Map

function create_entry(info_name, info_skilllist) {
    var entry = {}
    entry.type = info_name[0] // 1-天狼星英雄 2-天狼星道具 3-莫比乌斯英雄
    entry.skillnum = info_name[1] // 技能数
    entry.id = info_name[2] // 角色id
    entry.orientationlist = info_name[3] // 职业定位tag列表
    entry.skilllist = info_skilllist // 四类玩法标签
    return entry
}

// ====================人形添加：修改lib_name和lib_tdoll====================
var lib_name = {
    // —————————————— Sirius Hero ——————————————
    t11011: '骇客 K.', t11012: '理财师 查理·格雷尔',
    t11021: '救援队 前田美绘', t11022: '拳击手 黑川隼人', t11023: '殓尸人 桐木',
    t11031: '情报员 安娜', t11032: '辣妹 熏',
    t11041: '旅行者 砂',
    t11051: '狂热粉 默',
    t11061: '女演员 伊莉娜',
    // —————————————— Sirius Props ——————————————
    t1001: '替身徽章', t1003: '幻觉飞弹', t1004: '巨星玩偶', t1006: '隐身盾牌', t1008: '棒球烟雾弹', t1009: '震慑脉冲', t1011: '门锁干扰器', t1012: '惊吓魔盒', t1014: '救救鸭',
    t1016: '狗仔相机',
    // —————————————— Mobius Hero ——————————————
    t2010: '绫', t2020: '加布里埃尔', t2060: '默芙', t2070: '凡妮莎', t2080: '西斯特', t2090: '胖达', t2100: '监察之眼', t2120: '龙啸天', t2160: '警戒',
}
// 技能名库
var lib_skillname = new Map
lib_skillname.set(11011, [[0, '断点续传'], [0, '电子掩护']])
lib_skillname.set(11012, [[0, '出色规划者'], [0, '风险投资']])
lib_skillname.set(11021, [[0, '便携自救设备'], [0, '紧急支援']])
lib_skillname.set(11022, [[0, '拳王体质'], [0, '极致力量']])
lib_skillname.set(11023, [[0, '灵魂重塑'], [0, '引魂术']])
lib_skillname.set(11031, [[0, '情报探测'], [0, '洞察增幅']])
lib_skillname.set(11032, [[0, '危险信号'], [0, '魅力牵制']])
lib_skillname.set(11041, [[0, '海市蜃楼'], [0, '砂之缥缈']])
lib_skillname.set(11051, [[0, '痛觉耐性'], [0, '死缠烂打']])
lib_skillname.set(11061, [[0, '变色龙涂装-试做款'], [0, '知名人士']])

lib_skillname.set(1001, [[1, '替身徽章']])
lib_skillname.set(1003, [[1, '幻觉飞弹']])
lib_skillname.set(1004, [[1, '巨星玩偶']])
lib_skillname.set(1006, [[1, '隐身盾牌']])
lib_skillname.set(1008, [[1, '棒球烟雾弹']])
lib_skillname.set(1009, [[1, '震慑脉冲']])
lib_skillname.set(1011, [[1, '门锁干扰器']])
lib_skillname.set(1012, [[1, '惊吓魔盒']])
lib_skillname.set(1014, [[1, '救救鸭']])
lib_skillname.set(1016, [[1, '狗仔相机']])

lib_skillname.set(2010, [[0, '面壁思过！'], [1, '陨星打击！'], [1, '毁灭一击！']])
lib_skillname.set(2020, [[0, '临终忏悔'], [1, '狂野之钩'], [1, '斗士精神']])
lib_skillname.set(2060, [[0, '嗅探诱捕'], [1, '变色龙涂装'], [1, '同类感知']])
lib_skillname.set(2070, [[0, '协变性传输'], [1, '同调链接'], [1, '镜像跃迁(降临)'], [1, '镜像跃迁(召唤)']])
lib_skillname.set(2080, [[0, '狡黠'], [1, '帽子戏法-红心'], [1, '帽子戏法-梅花'], [1, '魔术禁锢']])
lib_skillname.set(2090, [[0, '震荡锤击'], [1, '多米诺连击'], [1, '滑步突进']])
lib_skillname.set(2100, [[0, '制导式脉冲'], [1, '观测枢纽'], [1, '扫描信使']])
lib_skillname.set(2120, [[0, '标记：出头鸟'], [1, '狩猎：出头鸟'], [1, '暴龙本色'], [1, '飞雷爪击']])
lib_skillname.set(2160, [[0, '全线封杀'], [1, '封锁令'], [1, '亲临现场']])

var lib_tdoll = [
    // tag内容格式
    // orientationtag: [ subtype(0~N) , tagname , level ]
    // skilltag: [ maintype(0~4) , subtype(0~N) , tagname , level ]
    // —————————————— Sirius Hero ——————————————
    // 骇客
    create_entry([1, 2, 11011, [[0, 1, 'sirius_orientation_hack', 3], [0, 1, 'sirius_orientation_survive', 1]]],
        [
            [[1, 0, 'gp_s_hack_relay', 4]],
            [[1, 5, 'gp_s_hide_reduceexpose', 3]],
        ]
    ),
    // 理财师
    create_entry([1, 2, 11012, [[0, 1, 'sirius_orientation_hack', 5]]],
        [
            [[1, 0, 'gp_s_hack_boost', 5]],
            [[1, 0, 'gp_s_hack_savelost', -1]],
        ]
    ),


    // —————————————— Sirius Props ——————————————
    // 替身徽章
    create_entry([2, 1, 1001, [[0, 1, 'sirius_orientation_survive', 4], [0, 1, 'sirius_orientation_interference', 3]]],
        [
            [[1, 6, 'gp_s_hide_invi', 4], [1, 6, 'gp_s_itf_phantom', 1]],
        ]
    ),
    // 幻觉飞弹
    create_entry([2, 1, 1003, [[0, 1, 'sirius_orientation_survive', 4], [0, 1, 'sirius_orientation_interference', 3]]],
        [
            [[1, 4, 'gp_s_block_disarm', 3], [1, 4, 'gp_s_block_watchflash', 4], [1, 6, 'gp_s_itf_phantom', 4]],
        ]
    ),
    // 隐身盾牌
    create_entry([2, 1, 1006, [[0, 1, 'sirius_orientation_survive', 5]]],
        [
            [[1, 6, 'gp_s_hide_invi', 3]],
        ]
    ),

    // —————————————— Mobius Hero ——————————————
    // 绫
    create_entry([3, 3, 2010, [[0, 2, 'mobius_orientation_damage', 2], [0, 2, 'mobius_orientation_block', 2], [0, 2, 'mobius_orientation_agile', 4]]],
        [
            [[2, 1, 'gp_m_block_forcemove', 3]],
            [[2, 2, 'gp_m_agile_fastmove', 5], [2, 5, 'gp_m_agile_reducecd', 4, '***']],
            [[2, 1, 'gp_m_block_slow', 2], [2, 1, 'gp_m_block_control', 2]]
        ]
    ),
    // 加布里埃尔
    create_entry([3, 3, 2020, [[0, 2, 'mobius_orientation_block', 4], [0, 2, 'mobius_orientation_agile', 3]]],
        [
            [[2, 5, 'gp_m_agile_reducecd', 4]],
            [[2, 1, 'gp_m_block_control', 3], [2, 1, 'gp_m_block_forcemove', 5]],
            [[2, 2, 'gp_m_agile_controlresist', 4]]
        ]
    ),
    // 默芙
    create_entry([3, 3, 2060, [[0, 2, 'mobius_orientation_intel', 3], [0, 2, 'mobius_orientation_hide', 4]]],
        [
            [[2, 3, 'gp_m_intel_cloth', -1], [2, 3, 'gp_m_intel_weakarea', 5, '***']],
            [[2, 4, 'gp_m_hide_disguisenpc', -1], [2, 4, 'gp_m_hide_immunedetect', -1]],
            [[2, 3, 'gp_m_intel_strongarea', 4], [2, 3, 'gp_m_intel_acclocate', 4, '***'], [2, 2, 'gp_m_agile_boost', 3, '***']]
        ]
    ),
    // 凡妮莎
    create_entry([3, 4, 2070, [[0, 2, 'mobius_orientation_block', 3], [0, 2, 'mobius_orientation_agile', 4]]],
        [
            [[2, 2, 'gp_m_agile_boost', 1]],
            [[2, 2, 'gp_m_agile_boost', 3], [2, 1, 'gp_m_block_slow', 3], [2, 3, 'gp_m_intel_weakarea', 1, '**']],
            [[2, 2, 'gp_m_block_slow', 3], [2, 2, 'gp_m_block_control', 5, '***'], [2, 2, 'gp_m_agile_teleport', -1]],
            [[2, 2, 'gp_m_agile_teleport', -1]]
        ]
    ),
    // 西斯特
    create_entry([3, 4, 2080, [[0, 2, 'mobius_orientation_block', 5], [0, 2, 'mobius_orientation_agile', 3]]],
        [
            [[2, 2, 'gp_m_agile_boost', 3]],
            [[2, 2, 'gp_m_agile_teleport', -1]],
            [[2, 2, 'gp_m_agile_teleport', -1]],
            [[2, 1, 'gp_m_block_control', 5]]
        ]
    ),
    // 胖达
    create_entry([3, 3, 2090, [[0, 2, 'mobius_orientation_damage', 4], [0, 2, 'mobius_orientation_agile', 2]]],
        [
            [[2, 0, 'gp_m_damage_area', 3]],
            [[2, 0, 'gp_m_damage_breakout', 4], [2, 0, 'gp_m_damage_area', 3]],
            [[2, 2, 'gp_m_agile_fastmove', 2]]
        ]
    ),
    // 监察之眼
    create_entry([3, 3, 2100, [[0, 2, 'mobius_orientation_block', 3], [0, 2, 'mobius_orientation_intel', 5]]],
        [
            [[2, 1, 'gp_m_block_slow', 4], [2, 2, 'gp_m_block_control', 2, '***']],
            [[2, 3, 'gp_m_intel_strongarea', 4]],
            [[2, 3, 'gp_m_intel_strongarea', 4], [2, 3, 'gp_m_intel_acclocate', 4, '***']]
        ]
    ),
    // 龙啸天
    create_entry([3, 4, 2120, [[0, 2, 'mobius_orientation_damage', 3], [0, 2, 'mobius_orientation_agile', 2], [0, 2, 'mobius_orientation_intel', 3]]],
        [
            [[2, 3, 'gp_m_intel_maxhackexpose', -1]],
            [],
            [[2, 2, 'gp_m_agile_boost', 4]],
            [[2, 0, 'gp_m_damage_breakout', 2], [2, 0, 'gp_m_damage_area', 3]]
        ]
    ),
    // 警戒
    create_entry([3, 3, 2160, [[0, 2, 'mobius_orientation_agile', 3], [0, 2, 'mobius_orientation_intel', 3]]],
        [
            [[2, 3, 'gp_m_intel_strongarea', 3]],
            [[2, 3, 'gp_m_intel_strongarea', 3]],
            [[2, 2, 'gp_m_agile_fastmove', 4]]
        ]
    ),

]


// ====================标签添加：（1）修改lib_tag（2）修改lib_tag_NUMBER（3）添加一个新的MAP类tagNUMBER_TAGNAME====================
var lib_tag = [
    // 职业定位
    [
        ['sirius_orientation_hack', 'sirius_orientation_support', 'sirius_orientation_intel', 'sirius_orientation_interference', 'sirius_orientation_survive'],
        ['mobius_orientation_damage', 'mobius_orientation_block', 'mobius_orientation_agile', 'mobius_orientation_intel', 'mobius_orientation_hide'],
    ],
    // 天狼星玩点
    [
        ['gp_s_hack_boost', 'gp_s_hack_relay', 'gp_s_hack_savelost'], // 破译
        ['gp_s_support_boost', 'gp_s_support_saverecover'], // 援护
        ['gp_s_intel_weakarea', 'gp_s_intel_strongarea', 'gp_s_intel_acclocate', 'gp_s_intel_maplocate'], // 情报
        ['gp_s_itf_phantom', 'gp_s_itf_phantomplus'], // 干扰
        ['gp_s_block_slow', 'gp_s_block_control', 'gp_s_block_forcemove', 'gp_s_block_disarm', 'gp_s_block_watchflash', 'gp_s_block_watchsmoke'], // 阻制
        ['gp_s_survive_highhp', 'gp_s_survive_highprotect'], // 生存
        ['gp_s_hide_invi', 'gp_s_hide_reduceexpose'], // 隐秘

    ],
    // 莫比乌斯玩点
    [
        ['gp_m_damage_breakout', 'gp_m_damage_area'], // 伤害
        ['gp_m_block_slow', 'gp_m_block_control', 'gp_m_block_forcemove'], // 阻制
        ['gp_m_agile_boost', 'gp_m_agile_fastmove', 'gp_m_agile_teleport', 'gp_m_agile_controlresist'], // 敏捷
        ['gp_m_intel_weakarea', 'gp_m_intel_strongarea', 'gp_m_intel_acclocate', 'gp_m_intel_cloth', 'gp_m_intel_maxhackexpose'], // 情报
        ['gp_m_hide_disguisenpc', 'gp_m_hide_immunedetect'], // 隐秘
        ['gp_m_agile_reducecd'], // 其它
    ],
    // 地图玩点
    [
        [],
        []
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
    tag0_sirius_orientation_support = new Map,
    tag0_sirius_orientation_intel = new Map,
    tag0_sirius_orientation_interference = new Map,
    tag0_sirius_orientation_survive = new Map,

    tag0_mobius_orientation_damage = new Map,
    tag0_mobius_orientation_block = new Map,
    tag0_mobius_orientation_agile = new Map,
    tag0_mobius_orientation_intel = new Map,
    tag0_mobius_orientation_hide = new Map

// tag1 天狼星玩点
var lib_tag_1 = {
    gp_s_hack_boost: '破译加速',
    gp_s_hack_relay: '接力破译',
    gp_s_hack_savelost: '掉点止损',

    gp_s_support_boost: '援护加速',
    gp_s_support_saverecover: '救援回血',

    gp_s_intel_weakarea: '模糊区域暴露',
    gp_s_intel_strongarea: '精确区域暴露',
    gp_s_intel_acclocate: '精确定位',
    gp_s_intel_maplocate: '小地图定位',

    gp_s_itf_phantom: '幻影',
    gp_s_itf_phantomplus: '幻影强化',

    gp_s_block_slow: '减速',
    gp_s_block_control: '控制',
    gp_s_block_forcemove: '强制位移',
    gp_s_block_disarm: '缴械',
    gp_s_block_watchflash: '视觉遮蔽：闪光',
    gp_s_block_watchsmoke: '视觉遮蔽：烟雾',

    gp_s_survive_highhp: '高血量',
    gp_s_survive_highprotect: '额外受击保护',

    gp_s_hide_invi: '隐身',
    gp_s_hide_reduceexpose: '暴露时间减少',
}
var tag1_gp_s_hack_boost = new Map,
    tag1_gp_s_hack_relay = new Map,
    tag1_gp_s_hack_savelost = new Map,

    tag1_gp_s_support_boost = new Map,
    tag1_gp_s_support_saverecover = new Map,

    tag1_gp_s_intel_weakarea = new Map,
    tag1_gp_s_intel_strongarea = new Map,
    tag1_gp_s_intel_acclocate = new Map,
    tag1_gp_s_intel_maplocate = new Map,

    tag1_gp_s_itf_phantom = new Map,
    tag1_gp_s_itf_phantomplus = new Map,

    tag1_gp_s_block_slow = new Map,
    tag1_gp_s_block_control = new Map,
    tag1_gp_s_block_forcemove = new Map,
    tag1_gp_s_block_disarm = new Map,
    tag1_gp_s_block_watchflash = new Map,
    tag1_gp_s_block_watchsmoke = new Map,

    tag1_gp_s_survive_highhp = new Map,
    tag1_gp_s_survive_highprotect = new Map,

    tag1_gp_s_hide_invi = new Map,
    tag1_gp_s_hide_reduceexpose = new Map

// tag2 莫比乌斯玩点
var lib_tag_2 = {
    gp_m_damage_breakout: '爆发伤害',
    gp_m_damage_area: '范围伤害',

    gp_m_block_slow: '减速',
    gp_m_block_control: '控制',
    gp_m_block_forcemove: '强制位移',

    gp_m_agile_boost: '加速',
    gp_m_agile_fastmove: '快速位移',
    gp_m_agile_teleport: '传送',
    gp_m_agile_controlresist: '控制抵抗',

    gp_m_intel_weakarea: '模糊区域暴露',
    gp_m_intel_strongarea: '精确区域暴露',
    gp_m_intel_acclocate: '精确定位',
    gp_m_intel_cloth: '记录服装类型',
    gp_m_intel_maxhackexpose: '暴露最高破译者',

    gp_m_hide_disguisenpc: '伪装NPC',
    gp_m_hide_immunedetect: '免疫检测',

    gp_m_agile_reducecd: '冷却缩减',
}
var tag2_gp_m_damage_breakout = new Map,
    tag2_gp_m_damage_area = new Map,

    tag2_gp_m_block_slow = new Map,
    tag2_gp_m_block_control = new Map,
    tag2_gp_m_block_forcemove = new Map,

    tag2_gp_m_agile_boost = new Map,
    tag2_gp_m_agile_fastmove = new Map,
    tag2_gp_m_agile_teleport = new Map,
    tag2_gp_m_agile_controlresist = new Map,

    tag2_gp_m_intel_weakarea = new Map,
    tag2_gp_m_intel_strongarea = new Map,
    tag2_gp_m_intel_acclocate = new Map,
    tag2_gp_m_intel_cloth = new Map,
    tag2_gp_m_intel_maxhackexpose = new Map,

    tag2_gp_m_hide_disguisenpc = new Map,
    tag2_gp_m_hide_immunedetect = new Map,

    tag2_gp_m_agile_reducecd = new Map


// tag3 地图玩点
var lib_tag_3 = {
    night: '<img src="../img/class-icon/icon-night-abilityup.png" style="width:19px;height:19px">夜战特化',

}
var tag3_night = new Map

