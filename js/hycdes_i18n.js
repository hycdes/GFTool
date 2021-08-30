function translate_elements(lang) {
    // Set language maps
    lib_language = libs_language[lang];
    // lib_name = libs_name[lang];

    let translation_unit, key;
    // Convert HTML elements
    $("[data-i18n-key]").each((index, element) => {
        translation_unit = $(element);
        key = translation_unit.attr("data-i18n-key");
        translation_unit.text(localization_strings[key][lang]);
    })

    // Convert doll names from dropdown


    // Translate Fairies
    let fairyIterator = lib_fairy.keys();
    let currentFairy = fairyIterator.next();
    while (!currentFairy.done) {
        lib_fairy.get(currentFairy.value).name = lib_language["fairyNAME_" + currentFairy.value];
        currentFairy = fairyIterator.next();
    }

    // Re-render UI
    manageUI('pick-block')
}

// data-i18n-key=""
var localization_strings = {
    'title': {
        'zh-CN': '少女前线-阵形模拟器 by 命运の乐章',
        'en-US': 'Girls\' Frontline Echelon Simulator by FatalChapter'
    },
    'siteName': {
        'zh-CN': '少女前线工具',
        'en-US': 'Girls\' Frontline Tools'
    },
    'authorName': {
        'zh-CN': '命运の乐章',
        'en-US': 'FatalChapter'
    },
    'toolName': {
        'zh-CN': '阵形模拟器',
        'en-US': 'Echelon Simulator'
    },
    'echelonSetup': {
        'zh-CN': '梯队设置',
        'en-US': 'Echelon Setup'
    },
    'setupHelp': {
        'zh-CN': '设置教程',
        'en-US': 'How to Configure'
    },
    'echelonPreview': {
        'zh-CN': '梯队预览',
        'en-US': 'Echelon Preview'
    },
    'showSkillTable': {
        'zh-CN': '显示技能表',
        'en-US': 'Show Skill List'
    },
    'teamLeader': {
        'zh-CN': '队长位',
        'en-US': 'Team Leader'
    },
    'setDoll': {
        'zh-CN': '人形设定',
        'en-US': 'T-Doll'
    },
    'setFairy': {
        'zh-CN': '妖精设定',
        'en-US': 'Fairy'
    },
    'setHoc': {
        'zh-CN': '重装部队设定',
        'en-US': 'HOC'
    },
    'setSpecial': {
        'zh-CN': '特殊设定',
        'en-US': 'Special'
    },
    'infoDoll': {
        'zh-CN': '人形信息',
        'en-US': 'T-Doll Info'
    },
    'tipSelection': {
        'zh-CN': '请点选一个',
        'en-US': 'Click a '
    },
    'tipNameTile': {
        'zh-CN': '九宫格',
        'en-US': 'Tile'
    },
    'tipTilebuff': {
        'zh-CN': '放置人形后才能显示受到的增益',
        'en-US': 'Tile buff shown after selecting T-Doll'
    },
    'titleDoll': {
        'zh-CN': '人形',
        'en-US': 'T-Doll'
    },
    'titleEquip': {
        'zh-CN': '装备',
        'en-US': 'Equipment'
    },
    'buttonAddDoll': {
        'zh-CN': '添加人形',
        'en-US': 'Add Doll'
    },
    'buttonRemoveDoll': {
        'zh-CN': '删除人形',
        'en-US': 'Remove Doll'
    },
    'titleFairy': {
        'zh-CN': '妖精选择',
        'en-US': 'Fairy'
    },
    
    'fairy0': { 'zh-CN': '无妖精', 'en-US': 'No Fairy' },
    'fairy1': { 'zh-CN': 'No.1 勇士妖精', 'en-US': 'No.1 Warrior Fairy' },
    'fairy2': { 'zh-CN': 'No.2 暴怒妖精', 'en-US': 'No.2 Fury Fairy' },
    'fairy3': { 'zh-CN': 'No.3 盾甲妖精', 'en-US': 'No.3 Armor Fairy' },
    'fairy4': { 'zh-CN': 'No.4 护盾妖精', 'en-US': 'No.4 Shield Fairy' },
    'fairy5': { 'zh-CN': 'No.5 防御妖精', 'en-US': 'No.5 Defense Fairy' },
    'fairy6': { 'zh-CN': 'No.6 嘲讽妖精', 'en-US': 'No.6 Taunt Fairy' },
    'fairy7': { 'zh-CN': 'No.7 狙击妖精', 'en-US': 'No.7 Sniper Fairy' },
    'fairy8': { 'zh-CN': 'No.8 炮击妖精', 'en-US': 'No.8 Artillery Fairy' },
    'fairy9': { 'zh-CN': 'No.9 空袭妖精', 'en-US': 'No.9 Airstrike Fairy' },
    'fairy10': { 'zh-CN': 'No.10 增援妖精', 'en-US': 'No.10 Reinforcement Fairy' },
    'fairy11': { 'zh-CN': 'No.11 空降妖精', 'en-US': 'No.11 Parachute Fairy' },
    'fairy12': { 'zh-CN': 'No.12 布雷妖精', 'en-US': 'No.12 Landmine Fairy' },
    'fairy13': { 'zh-CN': 'No.13 火箭妖精', 'en-US': 'No.13 Rocket Fairy' },
    'fairy14': { 'zh-CN': 'No.14 工事妖精', 'en-US': 'No.14 Construction Fairy' },
    'fairy15': { 'zh-CN': 'No.15 指挥妖精', 'en-US': 'No.15 Command Fairy' },
    'fairy16': { 'zh-CN': 'No.16 搜救妖精', 'en-US': 'No.16 Rescue Fairy' },
    'fairy17': { 'zh-CN': 'No.17 照明妖精', 'en-US': 'No.17 Illumination Fairy' },
    'fairy18': { 'zh-CN': 'No.18 黄金妖精', 'en-US': 'No.18 Golden Fairy' },
    'fairy19': { 'zh-CN': 'No.19 炊事妖精', 'en-US': 'No.19 Cooking Fairy' },
    'fairy20': { 'zh-CN': 'No.20 花火妖精', 'en-US': 'No.20 Fireworks Fairy' },
    'fairy21': { 'zh-CN': 'No.21 年兽妖精', 'en-US': 'No.21 Zodiac Fairy' },
    'fairy22': { 'zh-CN': 'No.22 海滩妖精', 'en-US': 'No.22 Beach Fairy' },
    'fairy23': { 'zh-CN': 'No.23 连击妖精', 'en-US': 'No.23 Combo Fairy' },
    'fairy24': { 'zh-CN': 'No.24 立盾妖精', 'en-US': 'No.24 Barrier Fairy' },
    'fairy25': { 'zh-CN': 'No.25 双生妖精', 'en-US': 'No.25 Twin Fairy' },
    
    'talent0': { 'zh-CN': '不发动天赋', 'en-US': 'No Talent' },
    'talent1': { 'zh-CN': '激昂型', 'en-US': 'Fervor' },
    'talent2': { 'zh-CN': '杀伤型I', 'en-US': 'Damage I' },
    'talent3': { 'zh-CN': '杀伤型II', 'en-US': 'Damage II' },
    'talent4': { 'zh-CN': '精准型I', 'en-US': 'Accuracy I' },
    'talent5': { 'zh-CN': '精准型II', 'en-US': 'Accuracy II' },
    'talent6': { 'zh-CN': '回避型I', 'en-US': 'Evasion I' },
    'talent7': { 'zh-CN': '回避型II', 'en-US': 'Evasion II' },
    'talent8': { 'zh-CN': '护甲型I', 'en-US': 'Armor I' },
    'talent9': { 'zh-CN': '护甲型II', 'en-US': 'Armor II' },
    'talent10': { 'zh-CN': '必杀型I', 'en-US': 'Critical I' },
    'talent11': { 'zh-CN': '必杀型II', 'en-US': 'Critical II' },
    'talent12': { 'zh-CN': '冲锋型', 'en-US': 'Charge' },
    'talent13': { 'zh-CN': '突击型', 'en-US': 'Assault' },
    'talent14': { 'zh-CN': '瞄准型', 'en-US': 'Aim' },
    'talent15': { 'zh-CN': '坚韧型', 'en-US': 'Sturdy' },
    'talent16': { 'zh-CN': '镇压型', 'en-US': 'Suppression' },
    'talent17': { 'zh-CN': '敏锐型', 'en-US': 'Keen' },

    'titleAttribute': {
        'zh-CN': '妖精选择',
        'en-US': 'Fairy'
    },
    'tipActivateFairySkill': {
        'zh-CN': '发动技能',
        'en-US': 'Activate Skill'
    },
    'titleHoc': {
        'zh-CN': '火力支援',
        'en-US': 'HOC'
    },
    'titleHocStats': {
        'zh-CN': '属性',
        'en-US': 'Stats'
    },
    'titleSpecialSetting': {
        'zh-CN': '人形特殊设定',
        'en-US': 'Special T-Doll Settings'
    },
    'settingAllBuff': {
        'zh-CN': '全体增益',
        'en-US': 'Echelon Buffs'
    },
    'settingMaxCrit': {
        'zh-CN': '全员满暴击',
        'en-US': 'Everyone always crits'
    },
    'settingFortress': {
        'zh-CN': '进入紧急壁垒（工事妖精技能）',
        'en-US': 'Fortress (Construction Fairy Skill)'
    },
    'settingManualBuff': {
        'zh-CN': '增幅代码(未完成)',
        'en-US': 'Manually apply extra buffs (buggy)'
    },
    'settingDelayBattle': {
        'zh-CN': '技能强制延时',
        'en-US': 'Delay Skill Activation'
    },
    'settingDelayBattleWarning': {
        'zh-CN': '可能导致被动技能延迟，请谨慎',
        'en-US': 'Also delays passives, be careful!'
    },
    'settingDelayBattleWarning2': {
        'zh-CN': '累加在前置cd，不受冷却缩减影响',
        'en-US': 'Flat addition to initial CD, unaffected by CDR'
    },
    'titleResults': {
        'zh-CN': '结果',
        'en-US': 'Results'
    },
    'titleEnvironment': {
        'zh-CN': '环境',
        'en-US': 'Environment'
    },
    'tipEnemyNormal': {
        'zh-CN': '普通',
        'en-US': 'Normal'
    },
    'tipEnemyElite': {
        'zh-CN': '精英',
        'en-US': 'Elite'
    },
    'settingBattleStart': {
        'zh-CN': '接敌时间',
        'en-US': 'Battle Start Time'
    },
    'settingBattleDuration': {
        'zh-CN': '战斗时间',
        'en-US': 'Battle Duration'
    },
    'settingEnemyDummyLinkCount': {
        'zh-CN': '单组编制',
        'en-US': 'Enemy Dummy Links'
    },
    'settingEnemyGroupCount': {
        'zh-CN': '组数',
        'en-US': 'Enemy Groups'
    },
    'testDamageDealt': {
        'zh-CN': '输出测试',
        'en-US': 'Damage Dealt'
    },
    'testDamageTaken': {
        'zh-CN': '承伤测试',
        'en-US': 'Damage Taken'
    },
    'testOther': {
        'zh-CN': '其他',
        'en-US': 'Other'
    },
    'titleEnemyStatsDefensive': {
        'zh-CN': '敌人防御属性',
        'en-US': 'Enemy Defense Stats'
    },
    'settingEnemyEvasion': {
        'zh-CN': '回避',
        'en-US': 'EVA'
    },
    'settingEnemyArmor': {
        'zh-CN': '护甲',
        'en-US': 'Armor'
    },
    'settingEnemyForcefield': {
        'zh-CN': '力场',
        'en-US': 'Force Field'
    },
    'settingEnemyForcefieldMax': {
        'zh-CN': '力场max',
        'en-US': 'Force Field Max'
    },
    'titleDamageCalculation': {
        'zh-CN': '输出计算',
        'en-US': 'Run Damage Simulation'
    },
    'buttonRun1x': {
        'zh-CN': '计算1次',
        'en-US': 'Run Once'
    },
    'buttonRun100x': {
        'zh-CN': '100次平均',
        'en-US': '100 Run Average'
    },
    'titleEnemyStatsOffensive': {
        'zh-CN': '敌人输出属性',
        'en-US': 'Enemy Offense Stats'
    },
    'tipPlaceholder': {
        'zh-CN': '模板待定',
        'en-US': 'Placeholder'
    },
    'settingEnemyDamage': {
        'zh-CN': '伤害',
        'en-US': 'DMG'
    },
    'settingEnemyRoF': {
        'zh-CN': '射速',
        'en-US': 'RoF'
    },
    'settingEnemySureHit': {
        'zh-CN': '敌人攻击必中',
        'en-US': 'Enemy Cannot Miss'
    },
    'settingEnemyAccuracy': {
        'zh-CN': '命中',
        'en-US': 'ACC'
    },
    'settingEnemyAP': {
        'zh-CN': '穿甲',
        'en-US': 'AP'
    },
    'settingEnemyPierce': {
        'zh-CN': '破防',
        'en-US': 'Shield Pierce'
    },
    'settingEnemyEva': {
        'zh-CN': '回避',
        'en-US': 'EVA'
    },
    'settingEnemyArmor': {
        'zh-CN': '护甲',
        'en-US': 'Armor'
    },
    'tipEnemy': {
        'zh-CN': '敌人',
        'en-US': 'Enemy '
    },
    'tipEnemyCanBeKilled': {
        'zh-CN': '能够被杀死',
        'en-US': 'can be killed'
    },
    'settingEnemyHP': {
        'zh-CN': '生命',
        'en-US': 'HP'
    },
    'settingTankOrder': {
        'zh-CN': '按顺序承伤',
        'en-US': 'Damage Order'
    },
    'settingTankAoE': {
        'zh-CN': '全体承伤',
        'en-US': 'All'
    },
    'titleDamageTakenCalculation': {
        'zh-CN': '承伤计算',
        'en-US': 'Run Damage Taken Simulation'
    },
    'noticeTitle': {
        'zh-CN': '说明和参考',
        'en-US': 'Implementation Details'
    },
    'noticeBody1': {
        'zh-CN': ' * 射击及狙击弹道瞬间到达',
        'en-US': ' * Attacks and projectiles hit instantly'
    },
    'noticeBody2': {
        'zh-CN': ' * 榴弹准备至出膛设定为1秒',
        'en-US': ' * Grenade windup is set to 1 second'
    },
    'noticeBody3': {
        'zh-CN': ' * R93技能存在特殊机制故被动实际效果为92帧',
        'en-US': ' * R93 skill duration is 92F due to her special mechanic'
    },
    'tipStatistics': {
        'zh-CN': '统计数据',
        'en-US': 'Statistics'
    },
    'tipSettingDisplay': {
        'zh-CN': '显示设置',
        'en-US': 'Display Settings'
    },
    'titleSimulationResults': {
        'zh-CN': '测试结果',
        'en-US': 'Simulation Results'
    },
    'tipEnemyEncounterTime': {
        'zh-CN': '接敌',
        'en-US': 'Start'
    },
    'tipFairyTalent': {
        'zh-CN': '天赋',
        'en-US': 'Talent'
    },
    'tipBattleDuration': {
        'zh-CN': '战斗',
        'en-US': 'Duration'
    },
    'tipFairySkill': {
        'zh-CN': '技能',
        'en-US': 'Skill'
    },
    'tipEnemyType': {
        'zh-CN': '类型',
        'en-US': 'Type'
    },
    'tipEnemyLinks': {
        'zh-CN': '编制',
        'en-US': 'Links'
    },
    'tipEnemyGroups': {
        'zh-CN': '组数',
        'en-US': 'Groups'
    },
    'tipTotalDamage': {
        'zh-CN': '总输出',
        'en-US': 'Total Damage'
    },
    'titleGraph': {
        'zh-CN': '图表',
        'en-US': 'Graph'
    },

}


// Detect English Browser
if (navigator.language == "en-US") {
    translate_elements("en-US")
}

// Hide overlay
document.getElementById("loading_overlay").style.display = "none"