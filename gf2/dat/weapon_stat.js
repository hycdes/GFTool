// GF2 Tools weapon data
// Fields: id, name, rank (5/4/3), tags, intro, image, thumbnail, stats, bond{id,name,text}, trait{label,text}, effects[], pools[]
window.WEAPON_STAT = {
    "Weapon_Igla_5":  {
                          "id":  "Weapon_Igla_5",
                          "name":  "天鹅之死",
                          "rank":  5,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "针被配给的高性能近战武器，将哀婉的弧线凝练为刃锋的轨迹，每一次挥击都是无声的哀悼。",
                          "image":  "img/weapon/Weapon_Igla_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Igla_5_1024.png",
                          "stats":  {
                                        "攻击":  "348",
                                        "暴击伤害":  "25%"
                                    },
                          "bond":  {
                                       "id":  "IglaSSR",
                                       "name":  "针",
                                       "text":  "对持有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对生骸造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，造成近战伤害时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "执事热忱 Lv.1",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "执事热忱 Lv.2",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "执事热忱 Lv.3",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "执事热忱 Lv.4",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "执事热忱 Lv.5",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "执事热忱 Lv.6",
                                              "text":  "自身拥有增益效果时，造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。友方单位使用主动斩域技能造成伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n若造成回合外物理伤害，技能后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e通透指数，每回合至多获得\u003cspan style=\"color:#f26c1c\"\u003e6点\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_Agent_5":  {
                           "id":  "Weapon_Agent_5",
                           "name":  "恶兆之钥",
                           "rank":  5,
                           "tags":  [
                                        "机枪",
                                        "重型弹"
                                    ],
                           "intro":  "利用铁血技术研发的特制武器，枪身及子弹均经过了特殊改造，以符合代理人对强大攻击力的要求。子弹倾泻之时，所有被锁定之人都将重新回忆起何为“恐惧”。",
                           "image":  "img/weapon/Weapon_Agent_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Agent_5_1024.png",
                           "stats":  {
                                         "攻击":  "397",
                                         "暴击伤害":  "25%"
                                     },
                           "bond":  {
                                        "id":  "AgentSSR",
                                        "name":  "代理人",
                                        "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对军方造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。自身造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，战斗开始时获得\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e侍从协振\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e侍从协振:\u003c/span\u003e 自身造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径8格内\u003c/span\u003e的友方单位对敌方单位造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时或拥有\u003cspan style=\"color:#3487e0\"\u003e铁血\u003c/span\u003e的友方人形造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e铁血:\u003c/span\u003e 特殊标记。不可驱散。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "造成伤害时若产生武器克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，产生浊刻克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "倾壁尽野 Lv.1",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           },
                                           {
                                               "name":  "倾壁尽野 Lv.2",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           },
                                           {
                                               "name":  "倾壁尽野 Lv.3",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           },
                                           {
                                               "name":  "倾壁尽野 Lv.4",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           },
                                           {
                                               "name":  "倾壁尽野 Lv.5",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           },
                                           {
                                               "name":  "倾壁尽野 Lv.6",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e造成范围\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_Cecilia_5":  {
                             "id":  "Weapon_Cecilia_5",
                             "name":  "斯诺特拉",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "希丽雅被配给的高性能突击步枪，以格威尔36-康派科特为原型，突显轻量化特性的同时，极尽所能地强化了战斗性能，以守护希丽雅从激烈的冲突中全身而退。",
                             "image":  "img/weapon/Weapon_Cecilia_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Cecilia_5_1024.png",
                             "stats":  {
                                           "攻击":  "383",
                                           "攻击加成":  "15%"
                                       },
                             "bond":  {
                                          "id":  "CeciliaSSR",
                                          "name":  "希丽雅",
                                          "text":  "对拥有燃烧类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "孤羽归群 Lv.1",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "孤羽归群 Lv.2",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "孤羽归群 Lv.3",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "孤羽归群 Lv.4",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "孤羽归群 Lv.5",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "孤羽归群 Lv.6",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动支援造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e后，自身获得\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，每个大回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Eagletta_5":  {
                              "id":  "Weapon_Eagletta_5",
                              "name":  "银翼匹丝缇",
                              "rank":  5,
                              "tags":  [
                                           "手枪",
                                           "轻型弹"
                                       ],
                              "intro":  "伊格蕾塔被配给的高性能手枪，以沙漠之鹰为原型，在加强破坏力的同时减轻了后坐力，赋予了她直面危险的勇气。用鹰啸般凌厉的枪火，照亮狩猎真相的远途。",
                              "image":  "img/weapon/Weapon_Eagletta_5_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Eagletta_5_1024.png",
                              "stats":  {
                                            "攻击":  "390",
                                            "暴击伤害":  "25%"
                                        },
                              "bond":  {
                                           "id":  "EaglettaSSR",
                                           "name":  "伊格蕾塔",
                                           "text":  "对拥有冷凝类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对瓦良格帮造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "若技能不消耗导染指数，则暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "逐风 Lv.1",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              },
                                              {
                                                  "name":  "逐风 Lv.2",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              },
                                              {
                                                  "name":  "逐风 Lv.3",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              },
                                              {
                                                  "name":  "逐风 Lv.4",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              },
                                              {
                                                  "name":  "逐风 Lv.5",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              },
                                              {
                                                  "name":  "逐风 Lv.6",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。若技能不消耗导染指数，且对处于冷凝类地格上的敌方目标造成伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                            }
                                        ]
                          },
    "Weapon_Asteria_5":  {
                             "id":  "Weapon_Asteria_5",
                             "name":  "忏悔罗盘",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "阿斯缇亚被配给的高性能突击步枪，以阿玛莱特15型自动步枪为原型，在结合了“罪”与“罚”的数据后，其射程、精准度以及操控性均被提升至极限。只要是枪口所指的方向，必定会降下审判。",
                             "image":  "img/weapon/Weapon_Asteria_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Asteria_5_1024.png",
                             "stats":  {
                                           "攻击":  "341",
                                           "暴击伤害":  "25%"
                                       },
                             "bond":  {
                                          "id":  "AsteriaSSR",
                                          "name":  "阿斯缇亚",
                                          "text":  "对持有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "造成弹种物理伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "罪恶衡量 Lv.1",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             },
                                             {
                                                 "name":  "罪恶衡量 Lv.2",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             },
                                             {
                                                 "name":  "罪恶衡量 Lv.3",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e19%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             },
                                             {
                                                 "name":  "罪恶衡量 Lv.4",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             },
                                             {
                                                 "name":  "罪恶衡量 Lv.5",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e23%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             },
                                             {
                                                 "name":  "罪恶衡量 Lv.6",
                                                 "text":  "偶数回合时，造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e防御力并且造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。奇数回合时，效果翻倍。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Koleda_5":  {
                            "id":  "Weapon_Koleda_5",
                            "name":  "切尔诺伯格",
                            "rank":  5,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "克莱妲被配给的高性能突击步枪，以12型突击步枪为原型，完美适配克莱妲如今的素体，能够适应大多数的极端环境和特殊情况，让克莱妲可以随时以最佳状态面对敌人。\n“埃芙她们真的太无聊了，连给武器起名字都懒得，不像我，连专用的杯子都有名字。”",
                            "image":  "img/weapon/Weapon_Koleda_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Koleda_5_1024.png",
                            "stats":  {
                                          "攻击":  "362",
                                          "攻击加成":  "15%"
                                      },
                            "bond":  {
                                         "id":  "KoledaSSR",
                                         "name":  "克莱妲",
                                         "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "自身及自身召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成浊刻伤害，则提高至\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "灾厄 Lv.1",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            },
                                            {
                                                "name":  "灾厄 Lv.2",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            },
                                            {
                                                "name":  "灾厄 Lv.3",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            },
                                            {
                                                "name":  "灾厄 Lv.4",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            },
                                            {
                                                "name":  "灾厄 Lv.5",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            },
                                            {
                                                "name":  "灾厄 Lv.6",
                                                "text":  "自身和自身召唤物造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。自身使用普攻或主动技能前，自身和自身召唤物获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e穿透I\u003c/span\u003e\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e领域穿透I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n所有友方实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e穿透I:\u003c/span\u003e 精准伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e领域穿透I:\u003c/span\u003e 范围伤害无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的防御力。增益效果。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_Faelynn_5":  {
                             "id":  "Weapon_Faelynn_5",
                             "name":  "森牙戾兽",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "为芙铃专门改造的高性能自动步枪，把工艺的复杂性发挥到了极致，优异的稳定性使它能够在短时间内倾泻大量弹药，如同在战场上咆哮的野兽。",
                             "image":  "img/weapon/Weapon_Faelynn_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Faelynn_5_1024.png",
                             "stats":  {
                                           "攻击":  "383",
                                           "暴击伤害":  "25%"
                                       },
                             "bond":  {
                                          "id":  "FaelynnSSR",
                                          "name":  "芙铃",
                                          "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "狡犬衔锁 Lv.1",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "狡犬衔锁 Lv.2",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "狡犬衔锁 Lv.3",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e33%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "狡犬衔锁 Lv.4",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e42%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "狡犬衔锁 Lv.5",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e51%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "狡犬衔锁 Lv.6",
                                                 "text":  "若主动技能未造成伤害，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。每次使用额外主动技能攻击时，酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。当前回合每次攻击后，下一次技能的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                           }
                                       ]
                         },
    "Weapon_Welrodmk2_5":  {
                               "id":  "Weapon_Welrodmk2_5",
                               "name":  "缄默制裁",
                               "rank":  5,
                               "tags":  [
                                            "手枪",
                                            "轻型弹"
                                        ],
                               "intro":  "维尔德被配给的高性能手枪，以马克二型栓动手枪为原型，在保证其“隐秘特性”的同时，对击发方式也进行了颠覆性的改造，从而极大的提升了威力与弹速。潜伏在阴影中的侦探，将用它贯彻心中的正义。",
                               "image":  "img/weapon/Weapon_Welrodmk2_5_1024.png",
                               "thumbnail":  "img/weapon/thumb/Weapon_Welrodmk2_5_1024.png",
                               "stats":  {
                                             "攻击":  "313",
                                             "攻击加成":  "15%"
                                         },
                               "bond":  {
                                            "id":  "WelrodSSR",
                                            "name":  "维尔德",
                                            "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                        },
                               "trait":  {
                                             "label":  "特质",
                                             "text":  "累积受到\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e初始生命值的伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                               "effects":  [
                                               {
                                                   "name":  "诺克斯十戒 Lv.1",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "诺克斯十戒 Lv.2",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "诺克斯十戒 Lv.3",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "诺克斯十戒 Lv.4",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "诺克斯十戒 Lv.5",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "诺克斯十戒 Lv.6",
                                                   "text":  "自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。对拥有酸蚀类减益效果的敌方单位造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               }
                                           ],
                               "pools":  [
                                             {
                                                 "name":  "军备提升",
                                                 "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                             },
                                             {
                                                 "name":  "军备提升",
                                                 "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                             }
                                         ]
                           },
    "Weapon_Mityl_5":  {
                           "id":  "Weapon_Mityl_5",
                           "name":  "绒鼠新星",
                           "rank":  5,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "米蒂尔被配给的高性能冲锋枪，以90型单兵自卫武器为原型，为适应独特的作战方式进一步强化了射速。极低的后坐力带来了良好的射击精度和火力持续性，一旦偷袭得手，便可形成强力压制。“鼠鼠战术”下的亡魂，从此又多了一位。",
                           "image":  "img/weapon/Weapon_Mityl_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Mityl_5_1024.png",
                           "stats":  {
                                         "攻击":  "383",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "MitylSSR",
                                        "name":  "米蒂尔",
                                        "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对瓦良格帮造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "幻影尖兵 Lv.1",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "幻影尖兵 Lv.2",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "幻影尖兵 Lv.3",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "幻影尖兵 Lv.4",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "幻影尖兵 Lv.5",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "幻影尖兵 Lv.6",
                                               "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，攻击时若目标处于浊刻类地格，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_Soppo_5":  {
                           "id":  "Weapon_Soppo_5",
                           "name":  "碎穹嚎歌",
                           "rank":  5,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "索普被配给的高性能步枪，以特殊模组战术步枪为原型，大幅强化了枪身结构与杀伤力，电光火石之间穿梭于废墟与风暴，狂犬血脉撕裂苍穹。",
                           "image":  "img/weapon/Weapon_Soppo_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Soppo_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "SoppoSSR",
                                        "name":  "索普",
                                        "text":  "对拥有燃烧类减益或冷凝类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对生骸造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "对处于燃烧类或冷凝类地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若次此伤害为\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e或\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，则提高至\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "结构性绞杀 Lv.1",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "结构性绞杀 Lv.2",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "结构性绞杀 Lv.3",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "结构性绞杀 Lv.4",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "结构性绞杀 Lv.5",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "结构性绞杀 Lv.6",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。自身产生冷凝类或燃烧类地格后，造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e和\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                         }
                                     ]
                       },
    "Weapon_BlackOTs14_5":  {
                                "id":  "Weapon_BlackOTs14_5",
                                "name":  "卡庇托林",
                                "rank":  5,
                                "tags":  [
                                             "突击步枪",
                                             "中型弹"
                                         ],
                                "intro":  "为OTs-14所定制的特装型突击步枪，枪管与制退器经过了特殊处理，在保持射速的同时，兼顾了弹道的稳定性。优越的性能，足以将使用者，指引至凯旋的终点。",
                                "image":  "img/weapon/Weapon_BlackOTs14_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BlackOTs14_5_1024.png",
                                "stats":  {
                                              "攻击":  "369",
                                              "暴击伤害":  "25%"
                                          },
                                "bond":  {
                                             "id":  "OTs14SSR",
                                             "name":  "OTs-14",
                                             "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对奥尔劳格财团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御力。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "凯旋誓约 Lv.1",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "凯旋誓约 Lv.2",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "凯旋誓约 Lv.3",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "凯旋誓约 Lv.4",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "凯旋誓约 Lv.5",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "凯旋誓约 Lv.6",
                                                    "text":  "主动攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。若主动技能未造成伤害，则当前大回合攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                              },
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                              },
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                              }
                                          ]
                            },
    "Weapon_Sextans_5":  {
                             "id":  "Weapon_Sextans_5",
                             "name":  "暮色蔷薇",
                             "rank":  5,
                             "tags":  [
                                          "刀",
                                          "近战"
                                      ],
                             "intro":  "六分仪被配给的高性能近战武器，手感极佳、携带轻便，在暮色下映出动人的辉光，可于无形之中克敌制胜。",
                             "image":  "img/weapon/Weapon_Sextans_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Sextans_5_1024.png",
                             "stats":  {
                                           "攻击":  "341",
                                           "攻击加成":  "15%"
                                       },
                             "bond":  {
                                          "id":  "SextansSSR",
                                          "name":  "六分仪",
                                          "text":  "对拥有电导类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对生骸造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "友方单位（不包含自身）使用主动技能前，若自身导染指数小于等于\u003cspan style=\"color:#f26c1c\"\u003e5点\u003c/span\u003e，则技能后自身获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "末日裁决 Lv.1",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             },
                                             {
                                                 "name":  "末日裁决 Lv.2",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             },
                                             {
                                                 "name":  "末日裁决 Lv.3",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             },
                                             {
                                                 "name":  "末日裁决 Lv.4",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             },
                                             {
                                                 "name":  "末日裁决 Lv.5",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             },
                                             {
                                                 "name":  "末日裁决 Lv.6",
                                                 "text":  "所有友方单位造成电导或近战伤害时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e（满足多个条件时仅生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Liushih_5":  {
                             "id":  "Weapon_Liushih_5",
                             "name":  "绝影",
                             "rank":  5,
                             "tags":  [
                                          "狙击枪",
                                          "重型弹"
                                      ],
                             "intro":  "刘莳被配给的高性能步枪，以刘氏步枪为原型，大幅强化了枪身结构与杀伤力，如绝影疾行，逐风追电，于瞬息之间开辟出胜利的道路。",
                             "image":  "img/weapon/Weapon_Liushih_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Liushih_5_1024.png",
                             "stats":  {
                                           "生命":  "946",
                                           "暴击伤害":  "25%"
                                       },
                             "bond":  {
                                          "id":  "LiushihSSR",
                                          "name":  "刘莳",
                                          "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对无阵营的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动结束时，自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "戮力同心 Lv.1",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "戮力同心 Lv.2",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "戮力同心 Lv.3",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "戮力同心 Lv.4",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "戮力同心 Lv.5",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "戮力同心 Lv.6",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，普攻造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_MK23_5":  {
                          "id":  "Weapon_MK23_5",
                          "name":  "告死礼赞",
                          "rank":  5,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "贝丝蒂自行改装的精英战斗手枪，如她本人一样极具破坏力和想象力，连撞针的击发声都独树一帜，是她为敌人精心编织的安魂曲。",
                          "image":  "img/weapon/Weapon_MK23_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_MK23_5_1024.png",
                          "stats":  {
                                        "攻击":  "341",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "BastiSSR",
                                       "name":  "贝丝蒂",
                                       "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对奥尔劳格财团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "自身和自身的召唤物造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "群星殉灭 Lv.1",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "群星殉灭 Lv.2",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "群星殉灭 Lv.3",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "群星殉灭 Lv.4",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e33%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "群星殉灭 Lv.5",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e39%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "群星殉灭 Lv.6",
                                              "text":  "全体友方单位造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身每召唤一个召唤物，自身和召唤物造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_M200_5":  {
                          "id":  "Weapon_M200_5",
                          "name":  "夜行豆蔻",
                          "rank":  5,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "夏安被配给的高性能狙击枪，以干预200为原型，进一步提升了射程与火力。自渺远晦暗之处，直抵敌人的咽喉命脉。",
                          "image":  "img/weapon/Weapon_M200_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_M200_5_1024.png",
                          "stats":  {
                                        "攻击":  "397",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "CheyanneSSR",
                                       "name":  "夏安",
                                       "text":  "对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对莫科什造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "孤星寄怀 Lv.1",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "孤星寄怀 Lv.2",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "孤星寄怀 Lv.3",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "孤星寄怀 Lv.4",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e22%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "孤星寄怀 Lv.5",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e26%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "孤星寄怀 Lv.6",
                                              "text":  "每个大回合的\u003cspan style=\"color:#f26c1c\"\u003e前2次\u003c/span\u003e攻击造成的物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，并无视目标\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e防御力。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                        }
                                    ]
                      },
    "Weapon_DSR50_5":  {
                           "id":  "Weapon_DSR50_5",
                           "name":  "潮涌夜曲",
                           "rank":  5,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "为罗蕾莱所定制的特装型号反器材步枪，枪管采用先进工艺重铸，并整合了新一代高效微声制退器。这套改造使其在具备极致远程精度的同时，开火时的声响和枪口焰被降至最低，能够在黑夜中，悄无声息地一举击中目标。",
                           "image":  "img/weapon/Weapon_DSR50_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_DSR50_5_1024.png",
                           "stats":  {
                                         "攻击":  "369",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "LoreleySSR",
                                        "name":  "罗蕾莱",
                                        "text":  "对拥有燃烧类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对生骸造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "行动结束时，若自身导染指数不满，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "月火遗诗 Lv.1",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "月火遗诗 Lv.2",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "月火遗诗 Lv.3",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。"
                                           },
                                           {
                                               "name":  "月火遗诗 Lv.4",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "月火遗诗 Lv.5",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "月火遗诗 Lv.6",
                                               "text":  "全体友方单位造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e余烬\u003c/span\u003e\u003c/span\u003e或\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e炽火余烬\u003c/span\u003e\u003c/span\u003e，则造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。\n友方单位获得燃烧类增益效果时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e炽火余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，受到的伤害降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e余烬:\u003c/span\u003e 造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e；暴击伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。燃烧类增益不可驱散。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_Sakura_5":  {
                            "id":  "Weapon_Sakura_5",
                            "name":  "绯红契约",
                            "rank":  5,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "樱花被配给的高性能冲锋枪，以樱花冲锋枪为原型，大幅提升火力。火光乍现处，弹雨如约至。",
                            "image":  "img/weapon/Weapon_Sakura_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Sakura_5_1024.png",
                            "stats":  {
                                          "攻击":  "362",
                                          "暴击伤害":  "25%"
                                      },
                            "bond":  {
                                         "id":  "SakuraSSR",
                                         "name":  "樱花",
                                         "text":  "对拥有燃烧类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对P.M.C.造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生燃烧克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "绯樱灼华 Lv.1",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "绯樱灼华 Lv.2",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "绯樱灼华 Lv.3",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "绯樱灼华 Lv.4",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "绯樱灼华 Lv.5",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e22%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "绯樱灼华 Lv.6",
                                                "text":  "\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_Phaetusa_5":  {
                              "id":  "Weapon_Phaetusa_5",
                              "name":  "因果律理",
                              "rank":  5,
                              "tags":  [
                                           "刀",
                                           "近战"
                                       ],
                              "intro":  "翡图萨被配给的高性能近战武器，用料优质、工艺精良，少见的配色为武器增添了一丝不可言说的神秘，像极了翡图萨本人的气质。",
                              "image":  "img/weapon/Weapon_Phaetusa_5_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Phaetusa_5_1024.png",
                              "stats":  {
                                            "攻击":  "369",
                                            "暴击伤害":  "25%"
                                        },
                              "bond":  {
                                           "id":  "PhaetusaSSR",
                                           "name":  "翡图萨",
                                           "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对P.M.C.造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "萤火淬炼 Lv.1",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "萤火淬炼 Lv.2",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "萤火淬炼 Lv.3",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "萤火淬炼 Lv.4",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "萤火淬炼 Lv.5",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "萤火淬炼 Lv.6",
                                                  "text":  "酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。若主动技能未造成伤害，下次攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                            }
                                        ]
                          },
    "Weapon_DP12_5":  {
                          "id":  "Weapon_DP12_5",
                          "name":  "谧语永护",
                          "rank":  5,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "海伦被配给的高性能霰弹枪，以12型双管霰弹枪为原型，高效提升作战性能。弹药容量惊人，火力十足，可攻可守，所向披靡。",
                          "image":  "img/weapon/Weapon_DP12_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_DP12_5_1024.png",
                          "stats":  {
                                        "攻击":  "299",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "HelenSSR",
                                       "name":  "海伦",
                                       "text":  "对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有冷凝类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "受到的物理伤害降低\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "诡秘寓言 Lv.1",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          },
                                          {
                                              "name":  "诡秘寓言 Lv.2",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          },
                                          {
                                              "name":  "诡秘寓言 Lv.3",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          },
                                          {
                                              "name":  "诡秘寓言 Lv.4",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          },
                                          {
                                              "name":  "诡秘寓言 Lv.5",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          },
                                          {
                                              "name":  "诡秘寓言 Lv.6",
                                              "text":  "自身防御力提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e。行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值的生命值。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_Lewisgun_5":  {
                              "id":  "Weapon_Lewisgun_5",
                              "name":  "玩具匠",
                              "rank":  5,
                              "tags":  [
                                           "机枪",
                                           "重型弹"
                                       ],
                              "intro":  "刘易斯被配给的高性能轻机枪，以刘易斯轻机枪为原型，结合火神重工的数据全面改造升级，在中距离作战中展现出绝对的压制力。可爱和威力并存，要试试看吗！",
                              "image":  "img/weapon/Weapon_Lewisgun_5_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Lewisgun_5_1024.png",
                              "stats":  {
                                            "攻击":  "390",
                                            "攻击加成":  "15%"
                                        },
                              "bond":  {
                                           "id":  "LewisSSR",
                                           "name":  "刘易斯",
                                           "text":  "对持有燃烧类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对熵病毒造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生燃烧克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "稚心绽放 Lv.1",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "稚心绽放 Lv.2",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "稚心绽放 Lv.3",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "稚心绽放 Lv.4",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "稚心绽放 Lv.5",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "稚心绽放 Lv.6",
                                                  "text":  "造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，本回合若造成\u003cspan style=\"color:#f26c1c\"\u003e3次及以上\u003c/span\u003e\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，下回合造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e额外提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                            },
                                            {
                                                "name":  "自选采购·军备",
                                                "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                            }
                                        ]
                          },
    "Weapon_AK15_5":  {
                          "id":  "Weapon_AK15_5",
                          "name":  "6P71",
                          "rank":  5,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "威玛西娜被配给的高性能突击步枪，以卡拉什尼科夫突击步枪15为原型，经过改造后具有强大的火力输出，让威玛西娜在中近距离的交火中获得压倒性的优势。战场上，紧跟她的脚步，她火力覆盖范围，便是安全的地方。",
                          "image":  "img/weapon/Weapon_AK15_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AK15_5_1024.png",
                          "stats":  {
                                        "攻击":  "390",
                                        "暴击伤害":  "25%"
                                    },
                          "bond":  {
                                       "id":  "VoymastinaSSR",
                                       "name":  "威玛西娜",
                                       "text":  "对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对吉拉尔集团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "斗争的顶点 Lv.1",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "斗争的顶点 Lv.2",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "斗争的顶点 Lv.3",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "斗争的顶点 Lv.4",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "斗争的顶点 Lv.5",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "斗争的顶点 Lv.6",
                                              "text":  "造成物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成物理伤害时无视目标\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e防御力。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-26 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_AN94_5":  {
                          "id":  "Weapon_AN94_5",
                          "name":  "6P33",
                          "rank":  5,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "埃芙被配给的高性能突击步枪，以尼科诺夫突击步枪94为原型，通过针对性的改造，使得其射程与有效杀伤力获得了可怖的提升。此刻限制解除，进行最大火力输出！",
                          "image":  "img/weapon/Weapon_AN94_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AN94_5_1024.png",
                          "stats":  {
                                        "攻击":  "348",
                                        "暴击伤害":  "25%"
                                    },
                          "bond":  {
                                       "id":  "AlvaSSR",
                                       "name":  "埃芙",
                                       "text":  "对拥有冷凝类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对吉拉尔集团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "雪镜协奏 Lv.1",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "雪镜协奏 Lv.2",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "雪镜协奏 Lv.3",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "雪镜协奏 Lv.4",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "雪镜协奏 Lv.5",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "雪镜协奏 Lv.6",
                                              "text":  "所有友方单位造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，若拥有护盾类效果，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_AA12_5":  {
                          "id":  "Weapon_AA12_5",
                          "name":  "刺棘法则",
                          "rank":  5,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "琳德被配给的高性能霰弹枪，以艾奇逊12自动霰弹枪为原型，经过全面的改造升级，在近距离作战中展现出毁灭性的破坏力。竖起尖刺，是保护自我的手段，也是反击的利器。",
                          "image":  "img/weapon/Weapon_AA12_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AA12_5_1024.png",
                          "stats":  {
                                        "攻击":  "390",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "LindSSR",
                                       "name":  "琳德",
                                       "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对P.M.C.造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "焦虑代偿 Lv.1",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "焦虑代偿 Lv.2",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "焦虑代偿 Lv.3",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "焦虑代偿 Lv.4",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "焦虑代偿 Lv.5",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "焦虑代偿 Lv.6",
                                              "text":  "攻击前，敌方每有\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，对其造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e，若造成酸蚀伤害，则造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                        },
                                        {
                                            "name":  "重逢采购·军备",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_PA15_5":  {
                          "id":  "Weapon_PA15_5",
                          "name":  "伊阿索",
                          "rank":  5,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "芙洛伦被配给的高性能手枪，以15式自动手枪为原型，提升了射速的同时保证了安全性与便利性，十分强力。在它的帮助下，芙洛伦得以发挥出全部实力。",
                          "image":  "img/weapon/Weapon_PA15_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_PA15_5_1024.png",
                          "stats":  {
                                        "攻击":  "355",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "FlorenceSSR",
                                       "name":  "芙洛伦",
                                       "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对P.M.C.造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "使用主动技能前，驱散自身\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，若驱散成功，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "禁忌支配者 Lv.1",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          },
                                          {
                                              "name":  "禁忌支配者 Lv.2",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          },
                                          {
                                              "name":  "禁忌支配者 Lv.3",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          },
                                          {
                                              "name":  "禁忌支配者 Lv.4",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          },
                                          {
                                              "name":  "禁忌支配者 Lv.5",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          },
                                          {
                                              "name":  "禁忌支配者 Lv.6",
                                              "text":  "全场实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位攻击前，若目标拥有浊刻类减益，则造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，若此次攻击是\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e反击\u003c/span\u003e\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e反击:\u003c/span\u003e 进行一次攻击；无法被伏击、反击和支援攻击触发。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                        },
                                        {
                                            "name":  "重逢采购·军备",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_UMP40_5":  {
                           "id":  "Weapon_UMP40_5",
                           "name":  "骄阳构想",
                           "rank":  5,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "莱妮被配给的高性能冲锋枪，以通用冲锋枪40为原型，大幅改造了内部结构，赋予其可怖的杀伤力。直面阳光，就要做好被灼伤的准备。",
                           "image":  "img/weapon/Weapon_UMP40_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP40_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "暴击伤害":  "25%"
                                     },
                           "bond":  {
                                        "id":  "LeneSSR",
                                        "name":  "莱妮",
                                        "text":  "对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对P.M.C.造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "伞尖锋芒 Lv.1",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e防御力，不可叠加。"
                                           },
                                           {
                                               "name":  "伞尖锋芒 Lv.2",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e防御力，不可叠加。"
                                           },
                                           {
                                               "name":  "伞尖锋芒 Lv.3",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e19%\u003c/span\u003e防御力，不可叠加。"
                                           },
                                           {
                                               "name":  "伞尖锋芒 Lv.4",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e防御力，不可叠加。"
                                           },
                                           {
                                               "name":  "伞尖锋芒 Lv.5",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e23%\u003c/span\u003e防御力，不可叠加。"
                                           },
                                           {
                                               "name":  "伞尖锋芒 Lv.6",
                                               "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e防御力，若有其他友方单位持有此效果，额外无视\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e防御力，不可叠加。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_RO635_5":  {
                           "id":  "Weapon_RO635_5",
                           "name":  "流浪者赞歌",
                           "rank":  5,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "洛贝拉被配给的高性能冲锋枪，以柯尔特635型冲锋枪为原型，进行了全方位的性能升级，拥有了更强的火力和射速。追寻自我的道路虽然坎坷，但有了它，也就有了愈战愈勇的底气。",
                           "image":  "img/weapon/Weapon_RO635_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_RO635_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "RobellaSSR",
                                        "name":  "洛贝拉",
                                        "text":  "对拥有冷凝类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对吉拉尔集团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "冷静审视 Lv.1",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "冷静审视 Lv.2",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "冷静审视 Lv.3",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "冷静审视 Lv.4",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "冷静审视 Lv.5",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e22%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "冷静审视 Lv.6",
                                               "text":  "\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，每进行\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e回合外攻击，回合外攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_UMP45_5":  {
                           "id":  "Weapon_UMP45_5",
                           "name":  "狡狐",
                           "rank":  5,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "莱娅被配给的高性能冲锋枪，以通用冲锋枪45为原型，通过强化射速、精度实现了综合性能跃升。任何人都别想在莱娅的眼皮底下，威胁到她最重要的家人。",
                           "image":  "img/weapon/Weapon_UMP45_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP45_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "LevaSSR",
                                        "name":  "莱娅",
                                        "text":  "对拥有电导类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对吉拉尔集团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "造成的稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e，若目标为首领单位，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "引敌入局 Lv.1",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           },
                                           {
                                               "name":  "引敌入局 Lv.2",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           },
                                           {
                                               "name":  "引敌入局 Lv.3",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           },
                                           {
                                               "name":  "引敌入局 Lv.4",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           },
                                           {
                                               "name":  "引敌入局 Lv.5",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           },
                                           {
                                               "name":  "引敌入局 Lv.6",
                                               "text":  "对拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e；对稳态崩溃的敌方目标，造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-09-30 06:00:00 ~ 2025-11-11 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_VSK94_5":  {
                           "id":  "Weapon_VSK94_5",
                           "name":  "护梦银翼",
                           "rank":  5,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "妮基塔被配给的高性能狙击枪，以维斯卡94为原型，提升了射击精准度，成为维护正义的利器。将所有罪恶扼杀于萌芽中，还孩子们一片安宁梦乡。",
                           "image":  "img/weapon/Weapon_VSK94_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_VSK94_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "NikketaSSR",
                                        "name":  "妮基塔",
                                        "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "美德礼赞 Lv.1",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。"
                                           },
                                           {
                                               "name":  "美德礼赞 Lv.2",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "美德礼赞 Lv.3",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "美德礼赞 Lv.4",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "美德礼赞 Lv.5",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "美德礼赞 Lv.6",
                                               "text":  "行动结束时，给自身和自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e浸润I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。\n\u003cspan style=\"color:#3487e0\"\u003e浸润I:\u003c/span\u003e 造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。浊刻类增益。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-09-30 06:00:00 ~ 2025-11-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_K2_5":  {
                        "id":  "Weapon_K2_5",
                        "name":  "流光花火",
                        "rank":  5,
                        "tags":  [
                                     "突击步枪",
                                     "中型弹"
                                 ],
                        "intro":  "幼熙被配给的突击步枪，以卡宾刻2型为原型，最大限度提升了杀伤力与便携性。即便只是星星点点的火花，也要竭尽全力为珍视之人照亮未来的方向。",
                        "image":  "img/weapon/Weapon_K2_5_1024.png",
                        "thumbnail":  "img/weapon/thumb/Weapon_K2_5_1024.png",
                        "stats":  {
                                      "攻击":  "348",
                                      "攻击加成":  "15%"
                                  },
                        "bond":  {
                                     "id":  "YooHeeSSR",
                                     "name":  "幼熙",
                                     "text":  "对持有防御减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                 },
                        "trait":  {
                                      "label":  "特质",
                                      "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                  },
                        "effects":  [
                                        {
                                            "name":  "璀璨火花 Lv.1",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "璀璨火花 Lv.2",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "璀璨火花 Lv.3",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "璀璨火花 Lv.4",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "璀璨火花 Lv.5",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "璀璨火花 Lv.6",
                                            "text":  "所有友方单位主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。每为友方单位（不包含自身）施加1个增益，自身主动物理攻击时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e防御力，至多无视\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。"
                                        }
                                    ],
                        "pools":  [
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                      },
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                      },
                                      {
                                          "name":  "自选采购·军备",
                                          "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                      },
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                      },
                                      {
                                          "name":  "重逢采购·军备",
                                          "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                      }
                                  ]
                    },
    "Weapon_HAWK12_5":  {
                            "id":  "Weapon_HAWK12_5",
                            "name":  "逐光",
                            "rank":  5,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "秋桦被配给的高性能霰弹枪，以九七式霰为原型，最大限度提升了可靠性与杀伤力。仅凭星火微光亦要驱散万丈黑暗。",
                            "image":  "img/weapon/Weapon_HAWK12_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_HAWK12_5_1024.png",
                            "stats":  {
                                          "攻击":  "348",
                                          "暴击伤害":  "25%"
                                      },
                            "bond":  {
                                         "id":  "QiuhuaSSR",
                                         "name":  "秋桦",
                                         "text":  "对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有燃烧类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "使用主动技能前，驱散自身\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，若驱散成功，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机攻击增益，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "薪火燎原 Lv.1",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "薪火燎原 Lv.2",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "薪火燎原 Lv.3",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "薪火燎原 Lv.4",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "薪火燎原 Lv.5",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "薪火燎原 Lv.6",
                                                "text":  "造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e燃烧伤害，造成的燃烧伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                          },
                                          {
                                              "name":  "重逢采购·军备",
                                              "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_MP5_5":  {
                         "id":  "Weapon_MP5_5",
                         "name":  "厄梅尼塔",
                         "rank":  5,
                         "tags":  [
                                      "冲锋枪",
                                      "轻型弹"
                                  ],
                         "intro":  "佩莉被配给的高性能冲锋枪，以五号九毫米冲锋枪为原型，改造了部分内部结构，大幅提升了杀伤力。用吸睛的外表迷惑敌人，用绝对的实力战胜敌人。",
                         "image":  "img/weapon/Weapon_MP5_5_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_MP5_5_1024.png",
                         "stats":  {
                                       "攻击":  "320",
                                       "攻击加成":  "15%"
                                   },
                         "bond":  {
                                      "id":  "PeriSSR",
                                      "name":  "佩莉",
                                      "text":  "对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有燃烧类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "受到伤害时，攻击者每拥有1个燃烧类减益，自身受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多降低\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "致命红心 Lv.1",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "致命红心 Lv.2",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "致命红心 Lv.3",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "致命红心 Lv.4",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "致命红心 Lv.5",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "致命红心 Lv.6",
                                             "text":  "普通攻击造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每使用\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e普通攻击暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高至\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                       },
                                       {
                                           "name":  "重逢采购·军备",
                                           "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_M1903_5":  {
                           "id":  "Weapon_M1903_5",
                           "name":  "信仰棘光",
                           "rank":  5,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "春田被配给的高性能狙击枪，以斯普林菲尔德为原型，进一步提升了便携性和击发速度。刺穿一切困境，只为给重要之人开辟更明朗的未来。",
                           "image":  "img/weapon/Weapon_M1903_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1903_5_1024.png",
                           "stats":  {
                                         "攻击":  "320",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "SpringfieldSSR",
                                        "name":  "春田",
                                        "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "治疗后，自身恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "同心所向 Lv.1",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "同心所向 Lv.2",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "同心所向 Lv.3",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "同心所向 Lv.4",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "同心所向 Lv.5",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "同心所向 Lv.6",
                                               "text":  "全体友方单位造成的浊刻伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。自身最大生命值提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。\n主动治疗时，为目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击提升II:\u003c/span\u003e 攻击力提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。增益效果。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_G36KKSK_5":  {
                             "id":  "Weapon_G36KKSK_5",
                             "name":  "阿格莱亚",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "安朵丝被配给的高性能突击步枪，以格威尔36-斯佩凯芙特为原型，便于操作，可靠性强，威力也大幅提升。握在手中，安朵丝也有了守护重要之人的自信。",
                             "image":  "img/weapon/Weapon_G36KKSK_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_G36KKSK_5_1024.png",
                             "stats":  {
                                           "攻击":  "327",
                                           "攻击加成":  "15%"
                                       },
                             "bond":  {
                                          "id":  "AndorisSSR",
                                          "name":  "安朵丝",
                                          "text":  "对罗联造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有电导类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "受到伤害时目标每有1个电导类减益降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e伤害，最大\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "和暖关照 Lv.1",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "和暖关照 Lv.2",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "和暖关照 Lv.3",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "和暖关照 Lv.4",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "和暖关照 Lv.5",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "和暖关照 Lv.6",
                                                 "text":  "全体友军造成电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；行动结束时恢复自身\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e最大生命值；若自身拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e正电荷\u003c/span\u003e\u003c/span\u003e，则自身及召唤物造成电导伤害均提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e正电荷:\u003c/span\u003e 行动结束时，恢复自身20%最大生命值的生命值。若\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e存在其他拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的友方单位，则额外恢复自身15%最大生命值的生命值。攻击拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的敌方目标时，造成的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e，每个持有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的目标，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e此效果。电导类增益。\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                           },
                                           {
                                               "name":  "自选采购·军备",
                                               "time":  "2025-03-25 06:00:00 ~ 2025-05-06 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                           },
                                           {
                                               "name":  "自选采购·军备",
                                               "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                           },
                                           {
                                               "name":  "重逢采购·军备",
                                               "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_G28_5":  {
                         "id":  "Weapon_G28_5",
                         "name":  "林野精灵",
                         "rank":  5,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "比悠卡被配给的高性能突击步枪，以格威尔28为原型，进一步提升了射击精度与威力。战场上活跃的她活似林间精灵，轻快而精准地击退所有入侵者。",
                         "image":  "img/weapon/Weapon_G28_5_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G28_5_1024.png",
                         "stats":  {
                                       "攻击":  "348",
                                       "暴击伤害":  "25%"
                                   },
                         "bond":  {
                                      "id":  "BiyocaSSR",
                                      "name":  "比悠卡",
                                      "text":  "对罗联造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有电导类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "行动结束时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "松鼠的魔法 Lv.1",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "松鼠的魔法 Lv.2",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "松鼠的魔法 Lv.3",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e19%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "松鼠的魔法 Lv.4",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "松鼠的魔法 Lv.5",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e23%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "松鼠的魔法 Lv.6",
                                             "text":  "攻击前，每消耗1格行动力，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。若目标拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e，则造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "自选采购·军备",
                                           "time":  "2025-03-25 06:00:00 ~ 2025-05-06 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                       },
                                       {
                                           "name":  "重逢采购·军备",
                                           "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_Vector_5":  {
                            "id":  "Weapon_Vector_5",
                            "name":  "报丧轻语",
                            "rank":  5,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "维克托被配给的高性能冲锋枪，以短剑为原型，进行了全方位的升级。扣动扳机，让死亡在敌人耳边低吟歌唱。",
                            "image":  "img/weapon/Weapon_Vector_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vector_5_1024.png",
                            "stats":  {
                                          "攻击":  "348",
                                          "攻击加成":  "15%"
                                      },
                            "bond":  {
                                         "id":  "VectorSSR",
                                         "name":  "维克托",
                                         "text":  "对罗联造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有燃烧类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "悼亡诗 Lv.1",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "悼亡诗 Lv.2",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "悼亡诗 Lv.3",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "悼亡诗 Lv.4",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "悼亡诗 Lv.5",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "悼亡诗 Lv.6",
                                                "text":  "友方单位攻击前，若目标拥有燃烧类减益，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，若造成燃烧伤害，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e过热自燃\u003c/span\u003e，则精准支援攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-03-25 06:00:00 ~ 2025-05-06 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                          },
                                          {
                                              "name":  "重逢采购·军备",
                                              "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_G11_5":  {
                         "id":  "Weapon_G11_5",
                         "name":  "白日梦",
                         "rank":  5,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "米什缇被配给的高性能突击步枪，以无壳弹步枪11为原型，将威力进一步提升，配合上米什缇的高爆发，致力于击碎每一个敌人的白日梦。",
                         "image":  "img/weapon/Weapon_G11_5_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G11_5_1024.png",
                         "stats":  {
                                       "攻击":  "341",
                                       "攻击加成":  "15%"
                                   },
                         "bond":  {
                                      "id":  "MishtySSR",
                                      "name":  "米什缇",
                                      "text":  "对罗联造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有酸蚀类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "普攻时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "多重梦空间 Lv.1",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "多重梦空间 Lv.2",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e19%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "多重梦空间 Lv.3",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e23%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "多重梦空间 Lv.4",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "多重梦空间 Lv.5",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e31%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "多重梦空间 Lv.6",
                                             "text":  "普攻后，造成酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。所有友方单位造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                       },
                                       {
                                           "name":  "自选采购·军备",
                                           "time":  "2025-09-30 06:00:00 ~ 2025-11-11 07:59:59"
                                       },
                                       {
                                           "name":  "重逢采购·军备",
                                           "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_HK416_5":  {
                           "id":  "Weapon_HK416_5",
                           "name":  "斯库拉",
                           "rank":  5,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "可露凯被配给的高性能突击步枪，以通用黑克勒科赫416为原型进行改造。可拓展性得到了极大提升，适配于多种不同战术。完美的外观与性能下，是张扬的野心，它的獠牙利齿将会撕碎一切敌人。",
                           "image":  "img/weapon/Weapon_HK416_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_HK416_5_1024.png",
                           "stats":  {
                                         "攻击":  "390",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "ClukaySSR",
                                        "name":  "可露凯",
                                        "text":  "对罗联造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有酸蚀类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生酸蚀克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.1",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.2",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.3",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e19%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.8%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.4",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3.2%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.5",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e23%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3.6%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "鳄鱼的眼泪 Lv.6",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e，每造成\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_CSLS06_5":  {
                            "id":  "Weapon_CSLS06_5",
                            "name":  "不留行",
                            "rank":  5,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "朝晖被配给的高性能冲锋枪，以长风零六为原型，大幅增强了杀伤力。行侠仗义的侠客以它为刃，十步取敌首，千里不留行。",
                            "image":  "img/weapon/Weapon_CSLS06_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_CSLS06_5_1024.png",
                            "stats":  {
                                          "攻击":  "348",
                                          "暴击伤害":  "25%"
                                      },
                            "bond":  {
                                         "id":  "ZhaohuiSSR",
                                         "name":  "朝晖",
                                         "text":  "对P.M.C.造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e；若目标拥有浊刻类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "除恶务尽 Lv.1",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "除恶务尽 Lv.2",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "除恶务尽 Lv.3",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "除恶务尽 Lv.4",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "除恶务尽 Lv.5",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "除恶务尽 Lv.6",
                                                "text":  "克制时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对有浊刻类减益的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-10-30 06:00:00 ~ 2025-11-25 07:59:59"
                                          },
                                          {
                                              "name":  "重逢采购·军备",
                                              "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_KSVK_5":  {
                          "id":  "Weapon_KSVK_5",
                          "name":  "传颂之诗",
                          "rank":  5,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "杜莎妮被配给的高性能狙击枪，以科夫罗夫为原型，在不损失威力的前提下，降低了后坐力。“它在向我诉说着什么，也许是历经千年仍熠熠生辉的英雄之诗。”以上是使用者杜莎妮的评价。",
                          "image":  "img/weapon/Weapon_KSVK_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_KSVK_5_1024.png",
                          "stats":  {
                                        "攻击":  "348",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "DusevnyjSSR",
                                       "name":  "杜莎妮",
                                       "text":  "对马利热电厂造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e凝固\u003c/span\u003e\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e凝固:\u003c/span\u003e 行动力降低\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e；行动结束时，若拥有\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e凝固\u003c/span\u003e，则转化为\u003cspan style=\"color:#3487e0\"\u003e僵冷\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e；至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。冷凝类移动减益。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生冷凝克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "胜者加冕 Lv.1",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                          },
                                          {
                                              "name":  "胜者加冕 Lv.2",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                          },
                                          {
                                              "name":  "胜者加冕 Lv.3",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                          },
                                          {
                                              "name":  "胜者加冕 Lv.4",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                          },
                                          {
                                              "name":  "胜者加冕 Lv.5",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                          },
                                          {
                                              "name":  "胜者加冕 Lv.6",
                                              "text":  "拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。友方单位主动攻击前，若目标拥有冷凝类减益时，则造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e时，造成的冷凝伤害提高增加至\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-11-11 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2025-10-30 06:00:00 ~ 2025-11-25 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2026-03-17 06:00:00 ~ 2026-04-28 07:59:59"
                                        },
                                        {
                                            "name":  "重逢采购·军备",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_M1931_5":  {
                           "id":  "Weapon_M1931_5",
                           "name":  "未言使命",
                           "rank":  5,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "索米被配给的高性能冲锋枪，以索米为原型，枪身更加轻盈，威力也进一步提升，以适应各种复杂的战况。紧握着这把枪，索米会完成一切使命。",
                           "image":  "img/weapon/Weapon_M1931_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1931_5_1024.png",
                           "stats":  {
                                         "攻击":  "313",
                                         "攻击加成":  "15%"
                                     },
                           "bond":  {
                                        "id":  "SuomiSSR",
                                        "name":  "索米",
                                        "text":  "对马利热电厂造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e僵冷\u003c/span\u003e\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "致密防护 Lv.1",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "致密防护 Lv.2",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "致密防护 Lv.3",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "致密防护 Lv.4",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "致密防护 Lv.5",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "致密防护 Lv.6",
                                               "text":  "全体友方单位造成的冷凝伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。若自身稳态指数\u003cspan style=\"color:#f26c1c\"\u003e大于0\u003c/span\u003e，施放制胜技能前，施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果增加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-10-30 06:00:00 ~ 2025-11-25 07:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_Ullr_5":  {
                          "id":  "Weapon_Ullr_5",
                          "name":  "流羽白英",
                          "rank":  5,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "乌尔丽德被配给的高性能近战武器，取用良好的钢材，精工锻造，缀以简约的花朵装饰，让武器整体显得锋锐而不失灵动。",
                          "image":  "img/weapon/Weapon_Ullr_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Ullr_5_1024.png",
                          "stats":  {
                                        "攻击":  "341",
                                        "暴击":  "25%"
                                    },
                          "bond":  {
                                       "id":  "UllridSSR",
                                       "name":  "乌尔丽德",
                                       "text":  "对马利热电厂造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e；若目标生命值不满，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "主动攻击后自身获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "首领威势 Lv.1",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "首领威势 Lv.2",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "首领威势 Lv.3",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "首领威势 Lv.4",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "首领威势 Lv.5",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "首领威势 Lv.6",
                                              "text":  "主动攻击时，对生命值不满的目标追加一次\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e攻击力的固定伤害，对生命值百分比低于自身的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2025-10-30 06:00:00 ~ 2025-11-25 07:59:59"
                                        },
                                        {
                                            "name":  "重逢采购·军备",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_WA2000_5":  {
                            "id":  "Weapon_WA2000_5",
                            "name":  "苦涩焦糖",
                            "rank":  5,
                            "tags":  [
                                         "狙击枪",
                                         "重型弹"
                                     ],
                            "intro":  "玛绮朵被配给的高性能狙击枪，以瓦尔特2000为原型，千万次的调试带来了极致的精准和强大。将反复熬煮的心意注入子弹之中，玛绮朵会使用这把枪，击穿所有阻碍。",
                            "image":  "img/weapon/Weapon_WA2000_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_WA2000_5_1024.png",
                            "stats":  {
                                          "攻击":  "390",
                                          "暴击伤害":  "25%"
                                      },
                            "bond":  {
                                         "id":  "MacqiatoSSR",
                                         "name":  "玛绮朵",
                                         "text":  "对帕拉蒂斯造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e凝固\u003c/span\u003e\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e凝固:\u003c/span\u003e 行动力降低\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e；行动结束时，若拥有\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e凝固\u003c/span\u003e，则转化为\u003cspan style=\"color:#3487e0\"\u003e僵冷\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e；至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。冷凝类移动减益。\n\u003cspan style=\"color:#3487e0\"\u003e僵冷:\u003c/span\u003e 无法移动、无法主动位移。冷凝类移动减益。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "攻击无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，若目标拥有冷凝类减益，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "抹杀艺术 Lv.1",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e4次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "抹杀艺术 Lv.2",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e4次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "抹杀艺术 Lv.3",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "抹杀艺术 Lv.4",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "抹杀艺术 Lv.5",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e2次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "抹杀艺术 Lv.6",
                                                "text":  "造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，回合外每造成\u003cspan style=\"color:#f26c1c\"\u003e2次\u003c/span\u003e伤害，自身下一次主动攻击造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-04-30 11:00:00 ~ 2024-06-05 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2024-08-27 05:00:00 ~ 2024-10-09 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-07-08 06:00:00 ~ 2025-08-19 04:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-12-02 06:00:00 ~ 2026-01-13 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                          },
                                          {
                                              "name":  "重逢采购·军备",
                                              "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_Pecheng_5":  {
                             "id":  "Weapon_Pecheng_5",
                             "name":  "光学幻境",
                             "rank":  5,
                             "tags":  [
                                          "机枪",
                                          "重型弹"
                                      ],
                             "intro":  "佩里缇亚被配给的高性能机枪，以佩切涅为原型，改装后，威力有了大幅提升。使用这把武器的人，是否也会像幻境一样消失？",
                             "image":  "img/weapon/Weapon_Pecheng_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Pecheng_5_1024.png",
                             "stats":  {
                                           "攻击":  "348",
                                           "暴击":  "25%"
                                       },
                             "bond":  {
                                          "id":  "PerityaSSR",
                                          "name":  "佩里缇亚",
                                          "text":  "对瓦良格帮造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若使用的技能为基础类技能，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "若造成范围伤害，则施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e；若目标拥有\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e以上减益效果，则此次攻击无视其\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e的掩体减伤。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "谐振腔 Lv.1",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。造成伤害后，有\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的概率对目标施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果。"
                                             },
                                             {
                                                 "name":  "谐振腔 Lv.2",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。造成伤害后，有\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e的概率对目标施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果。"
                                             },
                                             {
                                                 "name":  "谐振腔 Lv.3",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。造成伤害后，有\u003cspan style=\"color:#f26c1c\"\u003e54%\u003c/span\u003e的概率对目标施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果。"
                                             },
                                             {
                                                 "name":  "谐振腔 Lv.4",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成伤害后，有\u003cspan style=\"color:#f26c1c\"\u003e68%\u003c/span\u003e的概率对目标施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果。"
                                             },
                                             {
                                                 "name":  "谐振腔 Lv.5",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成伤害后，有\u003cspan style=\"color:#f26c1c\"\u003e84%\u003c/span\u003e的概率对目标施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果。"
                                             },
                                             {
                                                 "name":  "谐振腔 Lv.6",
                                                 "text":  "攻击每累计命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e目标，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，范围技能伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成伤害后，对目标施加\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e减益效果。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2024-03-26 11:00:00 ~ 2024-04-09 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_QBZ97_5":  {
                           "id":  "Weapon_QBZ97_5",
                           "name":  "跃虎",
                           "rank":  5,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "绛雨被配给的高性能突击步枪，以九七式为原型，是十分可靠的武器。子弹出膛的声音明快热烈，正如乐曲中激昂的鼓点，深受绛雨的喜爱。",
                           "image":  "img/weapon/Weapon_QBZ97_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_QBZ97_5_1024.png",
                           "stats":  {
                                         "攻击":  "348",
                                         "暴击伤害":  "25%"
                                     },
                           "bond":  {
                                        "id":  "JiangyuSSR",
                                        "name":  "绛雨",
                                        "text":  "对P.M.C.造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e防御减益\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "释放制胜技能后，获得\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "跃步积势 Lv.1",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e4回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "跃步积势 Lv.2",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "跃步积势 Lv.3",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e4层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e4层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "跃步积势 Lv.4",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "跃步积势 Lv.5",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "跃步积势 Lv.6",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。造成异位伤害时，异位伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若造成电导伤害，则额外获得\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e时，主动精准物理攻击造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，冷却\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e；自身造成的电导伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的稳态伤害永久提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-03-26 11:00:00 ~ 2024-04-30 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "自选采购·军备",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-10-09 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-08-26 08:00:00 ~ 2025-09-09 07:59:59"
                                         },
                                         {
                                             "name":  "重逢采购·军备",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_M1891_5":  {
                           "id":  "Weapon_M1891_5",
                           "name":  "斯摩希克",
                           "rank":  5,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "莫辛纳甘被配给的高性能狙击枪，以莫辛-纳甘为原型，在保留泛用性的基础上将威力提升到了极致。举起枪的莫辛纳甘，在瞄准敌人的同时，是否也在审视自己的内心？",
                           "image":  "img/weapon/Weapon_M1891_5_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1891_5_1024.png",
                           "stats":  {
                                         "攻击":  "383",
                                         "暴击伤害":  "25%"
                                     },
                           "bond":  {
                                        "id":  "MosinnagantSSR",
                                        "name":  "莫辛纳甘",
                                        "text":  "对P.M.C.造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。"
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "加把劲 Lv.1",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "加把劲 Lv.2",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "加把劲 Lv.3",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "加把劲 Lv.4",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "加把劲 Lv.5",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "加把劲 Lv.6",
                                               "text":  "造成异位伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。若造成\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升β",
                                             "time":  "2024-03-05 17:00:00 ~ 2024-03-26 10:59:59"
                                         }
                                     ]
                       },
    "Weapon_UMP9_5":  {
                          "id":  "Weapon_UMP9_5",
                          "name":  "幼狮",
                          "rank":  5,
                          "tags":  [
                                       "冲锋枪",
                                       "轻型弹"
                                   ],
                          "intro":  "莱娜被配给的高性能冲锋枪，以通用冲锋枪9为原型进行改造。改造过程中也参考了莱娅的意见，莱娜非常喜欢这把枪。",
                          "image":  "img/weapon/Weapon_UMP9_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_UMP9_5_1024.png",
                          "stats":  {
                                        "攻击":  "313",
                                        "攻击加成":  "15%"
                                    },
                          "bond":  {
                                       "id":  "LennaSSR",
                                       "name":  "莱娜",
                                       "text":  "对瓦良格帮造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "造成伤害时，目标每拥有1个减益效果，无视其\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e的防御，至多\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "狮吼 Lv.1",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e"
                                          },
                                          {
                                              "name":  "狮吼 Lv.2",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e \n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。"
                                          },
                                          {
                                              "name":  "狮吼 Lv.3",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e"
                                          },
                                          {
                                              "name":  "狮吼 Lv.4",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e"
                                          },
                                          {
                                              "name":  "狮吼 Lv.5",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e \n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。"
                                          },
                                          {
                                              "name":  "狮吼 Lv.6",
                                              "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e导电\u003c/span\u003e\u003c/span\u003e时，追加一次\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e攻击力的固定伤害，并有\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e的概率施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e麻痹\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e导电:\u003c/span\u003e 受到伤害时，转化为\u003cspan style=\"color:#3487e0\"\u003e麻痹\u003c/span\u003e。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e 指令禁止，禁止使用普通攻击和主动技能。电导类减益。\n\u003cspan style=\"color:#3487e0\"\u003e麻痹:\u003c/span\u003e"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升α",
                                            "time":  "2024-02-23 11:00:00 ~ 2024-03-26 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2024-08-27 05:00:00 ~ 2024-10-09 10:59:59"
                                        },
                                        {
                                            "name":  "自选采购·军备",
                                            "time":  "2025-03-25 06:00:00 ~ 2025-05-06 07:59:59"
                                        },
                                        {
                                            "name":  "重逢采购·军备",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_QBZ-191_5":  {
                             "id":  "Weapon_QBZ-191_5",
                             "name":  "金石奏",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "琼玖被配给的高性能突击步枪，以一九一式为原型，在保证多种环境泛用的基础上，提升了威力和稳定性。沉稳的节奏之下，是未曾改变的初心。",
                             "image":  "img/weapon/Weapon_QBZ-191_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_QBZ-191_5_1024.png",
                             "stats":  {
                                           "攻击":  "369",
                                           "攻击加成":  "15%"
                                       },
                             "bond":  {
                                          "id":  "QiongjiuSSR",
                                          "name":  "琼玖",
                                          "text":  "对生骸造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若对方不受掩体保护，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动结束时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "积势 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "积势 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "积势 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "积势 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "积势 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e4层\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "积势 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。获得增益效果时，下一次\u003cspan style=\"color:#3487e0\"\u003e支援攻击\u003c/span\u003e造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，获得\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e4层\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2024-02-08 17:00:00 ~ 2024-02-23 10:59:59"
                                           }
                                       ]
                         },
    "Weapon_G36_5":  {
                         "id":  "Weapon_G36_5",
                         "name":  "女仆准则",
                         "rank":  5,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "桑朵莱希被配给的高性能突击步枪，以格威尔36为原型，使用了特殊的材料，正如其主人一般精确和精致，能够完美地完成自己的工作。这把枪，应该能够贯彻使用者的信念和准则吧。",
                         "image":  "img/weapon/Weapon_G36_5_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G36_5_1024.png",
                         "stats":  {
                                       "攻击":  "320",
                                       "攻击加成":  "15%"
                                   },
                         "bond":  {
                                      "id":  "CentaureissiSSR",
                                      "name":  "桑朵莱希",
                                      "text":  "对帕拉蒂斯造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若使用的技能拥有异位属性，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "治疗后，自身恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "沉稳守护 Lv.1",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉稳守护 Lv.2",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e2\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉稳守护 Lv.3",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e3\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉稳守护 Lv.4",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e4\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉稳守护 Lv.5",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e4\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉稳守护 Lv.6",
                                             "text":  "主动治疗时，若目标稳态指数小于\u003cspan style=\"color:#f26c1c\"\u003e4\u003c/span\u003e，则额外为其恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e2次\u003c/span\u003e。自身满稳态指数时，治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升α",
                                           "time":  "2024-01-23 11:00:00 ~ 2024-02-23 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-05-14 17:00:00 ~ 2024-06-05 10:59:59"
                                       },
                                       {
                                           "name":  "自选采购·军备",
                                           "time":  "2024-08-27 05:00:00 ~ 2024-10-09 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                       },
                                       {
                                           "name":  "重逢采购·军备",
                                           "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_SPAS-12_5":  {
                             "id":  "Weapon_SPAS-12_5",
                             "name":  "梅扎露娜",
                             "rank":  5,
                             "tags":  [
                                          "霰弹枪",
                                          "霰弹"
                                      ],
                             "intro":  "塞布丽娜被配给的高性能霰弹枪，以特殊用途自动型霰弹枪为原型，采用了特殊的设计，提升了稳定性的同时更加方便收纳和携带，但外观仍具有威慑性。出于不要惊吓到别人的想法，塞布丽娜用意餐中常见的厨具为它命名。",
                             "image":  "img/weapon/Weapon_SPAS-12_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_SPAS-12_5_1024.png",
                             "stats":  {
                                           "攻击":  "327",
                                           "攻击加成":  "15%"
                                       },
                             "bond":  {
                                          "id":  "SabrinaSSR",
                                          "name":  "塞布丽娜",
                                          "text":  "对瓦良格帮造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若使用的技能为导染类技能，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "完美食谱 Lv.1",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e10\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径6格内\u003c/span\u003e攻击力最高的敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低I:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                             },
                                             {
                                                 "name":  "完美食谱 Lv.2",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e10\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格内\u003c/span\u003e攻击力最高的敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低I:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                             },
                                             {
                                                 "name":  "完美食谱 Lv.3",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e10\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径8格内\u003c/span\u003e攻击力最高的敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低I:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                             },
                                             {
                                                 "name":  "完美食谱 Lv.4",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e10\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径9格内\u003c/span\u003e攻击力最高的敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低I:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                             },
                                             {
                                                 "name":  "完美食谱 Lv.5",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e8\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径10格内\u003c/span\u003e攻击力最高的敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低II:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。减益效果。"
                                             },
                                             {
                                                 "name":  "完美食谱 Lv.6",
                                                 "text":  "若处于稳态崩溃，则稳态恢复时，额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。若自身稳态指数大于\u003cspan style=\"color:#f26c1c\"\u003e6\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。行动结束时，对\u003cspan style=\"color:#f26c1c\"\u003e周围半径10格内\u003c/span\u003e攻击力最高的\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e敌方目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e攻击降低II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e攻击降低II:\u003c/span\u003e 攻击力降低\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。减益效果。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2024-01-16 17:00:00 ~ 2024-01-30 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_QBZ-95_5":  {
                            "id":  "Weapon_QBZ-95_5",
                            "name":  "重弦",
                            "rank":  5,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "黛烟被配给的高性能突击步枪，以九五式为原型，在保证威力的前提下，更拥有雅致的外观。在黛烟手中，作为武器的重弦也会如乐器一般优雅。",
                            "image":  "img/weapon/Weapon_QBZ-95_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_QBZ-95_5_1024.png",
                            "stats":  {
                                          "攻击":  "341",
                                          "暴击伤害":  "25%"
                                      },
                            "bond":  {
                                         "id":  "DaiyanSSR",
                                         "name":  "黛烟",
                                         "text":  "对P.M.C.造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "历音 Lv.1",
                                                "text":  "攻击前，有\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e的概率驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "历音 Lv.2",
                                                "text":  "攻击前，有\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e的概率驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7.5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "历音 Lv.3",
                                                "text":  "攻击前，有\u003cspan style=\"color:#f26c1c\"\u003e52%\u003c/span\u003e的概率驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "历音 Lv.4",
                                                "text":  "攻击前，有\u003cspan style=\"color:#f26c1c\"\u003e68%\u003c/span\u003e的概率驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "历音 Lv.5",
                                                "text":  "攻击前，有\u003cspan style=\"color:#f26c1c\"\u003e84%\u003c/span\u003e的概率驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "历音 Lv.6",
                                                "text":  "攻击前，驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。对未受到掩体保护的目标暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升α",
                                              "time":  "2023-12-25 17:00:00 ~ 2024-01-22 16:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-04-09 17:00:00 ~ 2024-04-30 10:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2024-08-27 05:00:00 ~ 2024-10-09 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                          },
                                          {
                                              "name":  "自选采购·军备",
                                              "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                          },
                                          {
                                              "name":  "重逢采购·军备",
                                              "time":  "2026-09-22 09:00:00 ~ 2026-11-03 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_AK-Alfa_5":  {
                             "id":  "Weapon_AK-Alfa_5",
                             "name":  "游星",
                             "rank":  5,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "托洛洛被配给的高性能突击步枪，以卡拉什-阿尔法为原型，枪身重量更轻，射击精度更高。它的设计风格轻盈且独辟蹊径，兼具实用主义的理性与探索未知的浪漫，与其主人非常相似。",
                             "image":  "img/weapon/Weapon_AK-Alfa_5_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_AK-Alfa_5_1024.png",
                             "stats":  {
                                           "攻击":  "376",
                                           "暴击伤害":  "25%"
                                       },
                             "bond":  {
                                          "id":  "TololoSSR",
                                          "name":  "托洛洛",
                                          "text":  "对生骸造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若自身处于满稳态，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动开始时，若自身满生命值，则随机获得1个攻击类增益，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "轨迹巡弋 Lv.1",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e5层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e5层\u003c/span\u003e时，主动攻击后获得2格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "轨迹巡弋 Lv.2",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e5层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e5层\u003c/span\u003e时，主动攻击后获得3格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "轨迹巡弋 Lv.3",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，每次获得\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e6层\u003c/span\u003e时，主动攻击后获得3格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "轨迹巡弋 Lv.4",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，每次获得\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e7层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e7层\u003c/span\u003e时，主动攻击后获得3格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "轨迹巡弋 Lv.5",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，每次获得\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e8层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e8层\u003c/span\u003e时，主动攻击后获得3格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "轨迹巡弋 Lv.6",
                                                 "text":  "造成击杀时或当自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e结束后，主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，每次获得\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e8层\u003c/span\u003e。叠加至\u003cspan style=\"color:#f26c1c\"\u003e8层\u003c/span\u003e时，主动攻击后获得4格\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2023-12-21 10:00:00 ~ 2024-01-04 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_Vepr12_5":  {
                            "id":  "Weapon_Vepr12_5",
                            "name":  "猎心者",
                            "rank":  5,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "维普蕾被配给的高性能霰弹枪，以莫洛12为原型，用于在表演出现意外时保护观众的安全。不过，作为专业的偶像，维普蕾会用这把枪偷偷猎取观众们的心也说不定。",
                            "image":  "img/weapon/Weapon_Vepr12_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vepr12_5_1024.png",
                            "stats":  {
                                          "攻击":  "320",
                                          "导染增伤":  "30%"
                                      },
                            "bond":  {
                                         "id":  "VepleySSR",
                                         "name":  "维普蕾",
                                         "text":  "对帕拉蒂斯造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标身上无增益效果，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "安可 Lv.1",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低I:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                            },
                                            {
                                                "name":  "安可 Lv.2",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低I:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                            },
                                            {
                                                "name":  "安可 Lv.3",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低I:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。减益效果。"
                                            },
                                            {
                                                "name":  "安可 Lv.4",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低II:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。减益效果。"
                                            },
                                            {
                                                "name":  "安可 Lv.5",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，每回合至多生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低II:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。减益效果。"
                                            },
                                            {
                                                "name":  "安可 Lv.6",
                                                "text":  "主动技能造成伤害后额外追加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e攻击力的固定伤害。对拥有移动类减益的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。受到精准伤害时，若攻击者拥有移动类减益，则受到伤害前对其施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e伤害降低II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e伤害降低II:\u003c/span\u003e 造成伤害降低\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。减益效果。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_ColphneDoppelgaenger_5":  {
                                          "id":  "Weapon_ColphneDoppelgaenger_5",
                                          "name":  "毕宿五",
                                          "rank":  5,
                                          "tags":  [
                                                       "手枪",
                                                       "轻型弹"
                                                   ],
                                          "intro":  "利用铁血技术升级后的精英战斗手枪，以金牛座曲线为原型。在显著提升攻击力的同时，还增加了近战形态——她终于拥有了亲手保护伙伴的力量。",
                                          "image":  "img/weapon/Weapon_ColphneDoppelgaenger_5_1024.png",
                                          "thumbnail":  "img/weapon/thumb/Weapon_ColphneDoppelgaenger_5_1024.png",
                                          "stats":  {
                                                        "攻击":  "320",
                                                        "攻击加成":  "15%"
                                                    },
                                          "bond":  {
                                                       "id":  "ColphneDoppelgaengerSSR",
                                                       "name":  "寇尔芙·镜刻",
                                                       "text":  "对拥有浊刻类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                                   },
                                          "trait":  {
                                                        "label":  "特质",
                                                        "text":  "自身与自身实体召唤物造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，自身造成近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                                    },
                                          "effects":  [
                                                          {
                                                              "name":  "赤红预兆 Lv.1",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                                          },
                                                          {
                                                              "name":  "赤红预兆 Lv.2",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                                          },
                                                          {
                                                              "name":  "赤红预兆 Lv.3",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                                          },
                                                          {
                                                              "name":  "赤红预兆 Lv.4",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                                          },
                                                          {
                                                              "name":  "赤红预兆 Lv.5",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                          },
                                                          {
                                                              "name":  "赤红预兆 Lv.6",
                                                              "text":  "对友方单位（不包含自身）使用主动技能时，自身和自身实体召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。友方单位攻击前，若目标拥有\u003cspan style=\"color:#3487e0\"\u003e镜缚\u003c/span\u003e，造成的\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                                          }
                                                      ],
                                          "pools":  [

                                                    ]
                                      },
    "Weapon_NemesisGnosis_5":  {
                                   "id":  "Weapon_NemesisGnosis_5",
                                   "name":  "西比尔",
                                   "rank":  5,
                                   "tags":  [
                                                "狙击枪",
                                                "重型弹"
                                            ],
                                   "intro":  "纳美西丝被配给的定制型狙击枪，以复仇女神为原型，显著提升了极端射程下的绝对精度与稳定性——或许这一次，她能够借此触碰真理。",
                                   "image":  "img/weapon/Weapon_NemesisGnosis_5_1024.png",
                                   "thumbnail":  "img/weapon/thumb/Weapon_NemesisGnosis_5_1024.png",
                                   "stats":  {
                                                 "攻击":  "383",
                                                 "暴击伤害":  "25%"
                                             },
                                   "bond":  {
                                                "id":  "NemesisGnosisSSR",
                                                "name":  "纳美西丝·衍光",
                                                "text":  "对拥有酸蚀类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对帕拉蒂斯造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                            },
                                   "trait":  {
                                                 "label":  "特质",
                                                 "text":  "\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                             },
                                   "effects":  [
                                                   {
                                                       "name":  "炽曜辉光 Lv.1",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   },
                                                   {
                                                       "name":  "炽曜辉光 Lv.2",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   },
                                                   {
                                                       "name":  "炽曜辉光 Lv.3",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   },
                                                   {
                                                       "name":  "炽曜辉光 Lv.4",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e32%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   },
                                                   {
                                                       "name":  "炽曜辉光 Lv.5",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e36%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   },
                                                   {
                                                       "name":  "炽曜辉光 Lv.6",
                                                       "text":  "自身造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动支援\u003c/span\u003e\u003c/span\u003e造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动支援:\u003c/span\u003e 支援攻击。进行一次攻击；无法被支援攻击触发。"
                                                   }
                                               ],
                                   "pools":  [

                                             ]
                               },
    "Weapon_M26_5":  {
                         "id":  "Weapon_M26_5",
                         "name":  "尼奥尔德",
                         "rank":  5,
                         "tags":  [
                                      "机枪",
                                      "重型弹"
                                  ],
                         "intro":  "巴希达被配给的高性能机枪，以拉赫蒂26型轻机枪为原型，通过强化火力、提高射速，实现了破坏力飞跃式提升。既然上了战场，那就不妨再猛一些。",
                         "image":  "img/weapon/Weapon_M26_5_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_M26_5_1024.png",
                         "stats":  {
                                       "攻击":  "313",
                                       "攻击加成":  "15%"
                                   },
                         "bond":  {
                                      "id":  "BalthildeSSR",
                                      "name":  "巴希达",
                                      "text":  "对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对吉拉尔集团造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "沉重的咬合 Lv.1",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉重的咬合 Lv.2",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉重的咬合 Lv.3",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉重的咬合 Lv.4",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉重的咬合 Lv.5",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "沉重的咬合 Lv.6",
                                             "text":  "友方单位对拥有防御类减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_SteyrTMP_5":  {
                              "id":  "Weapon_SteyrTMP_5",
                              "name":  "二律背反",
                              "rank":  5,
                              "tags":  [
                                           "冲锋枪",
                                           "轻型弹"
                                       ],
                              "intro":  "哈卜茜被配给的高性能冲锋枪，以施泰尔冲锋手枪为原型，搭配哈卜茜的自设，大幅提升精准度。无论在哪个位面，都不会让敌人逃出生天。",
                              "image":  "img/weapon/Weapon_SteyrTMP_5_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_SteyrTMP_5_1024.png",
                              "stats":  {
                                            "攻击":  "348",
                                            "暴击伤害":  "25%"
                                        },
                              "bond":  {
                                           "id":  "HarpsySSR",
                                           "name":  "哈卜茜",
                                           "text":  "对莫科什造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，若目标拥有酸蚀类减益，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "数字进化 Lv.1",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "数字进化 Lv.2",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "数字进化 Lv.3",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e31%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "数字进化 Lv.4",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e34%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "数字进化 Lv.5",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e37%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "数字进化 Lv.6",
                                                  "text":  "\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。对友方目标使用主动技能后，造成的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1个大回合\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_CZ75_5":  {
                          "id":  "Weapon_CZ75_5",
                          "name":  "赫斯提亚",
                          "rank":  5,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "绯被配给的高性能手枪，以斯柯达75为原型，易于携带、精度良好。在绯的手中，赫斯提亚就如同真正的火焰女神一般令人畏惧。",
                          "image":  "img/weapon/Weapon_CZ75_5_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_CZ75_5_1024.png",
                          "stats":  {
                                        "攻击":  "341",
                                        "暴击伤害":  "25%"
                                    },
                          "bond":  {
                                       "id":  "FayeSSR",
                                       "name":  "绯",
                                       "text":  "对持有防御减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e，对塞卡科技造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "使自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e的敌方单位受到的稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "仙灵吐息 Lv.1",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "仙灵吐息 Lv.2",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "仙灵吐息 Lv.3",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "仙灵吐息 Lv.4",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "仙灵吐息 Lv.5",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "仙灵吐息 Lv.6",
                                              "text":  "物理伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e；攻击时若与目标距离小于等于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_PPSh41_5":  {
                            "id":  "Weapon_PPSh41_5",
                            "name":  "斯瓦罗格",
                            "rank":  5,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "波波沙被配给的高性能冲锋枪，以波波沙冲锋枪为原型，在保证火力及低后坐力的前提下，减轻了枪身的重量。举起它，波波沙便将高洁的光辉握在了手中。",
                            "image":  "img/weapon/Weapon_PPSh41_5_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_PPSh41_5_1024.png",
                            "stats":  {
                                          "攻击":  "369",
                                          "攻击加成":  "15%"
                                      },
                            "bond":  {
                                         "id":  "PapashaSSR",
                                         "name":  "波波沙",
                                         "text":  "对P.M.C.造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e；对大型目标，额外提高\u003cspan style=\"color:#f26c1c\"\u003e2.5%\u003c/span\u003e。"
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "造成伤害时，目标每拥有1个减益效果，无视其\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e的防御，至多\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "荣光照引 Lv.1",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "荣光照引 Lv.2",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "荣光照引 Lv.3",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "荣光照引 Lv.4",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "荣光照引 Lv.5",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "荣光照引 Lv.6",
                                                "text":  "护城卫士造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。自身或友方单位进行支援攻击后，自身下一次主动攻击暴击率提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_BpSGssr001_5":  {
                                "id":  "Weapon_BpSGssr001_5",
                                "name":  "远行游鸽",
                                "rank":  5,
                                "tags":  [
                                             "霰弹枪",
                                             "霰弹"
                                         ],
                                "intro":  "高性能霰弹枪，枪身线条精巧流畅，威力十足。依靠这股力量，胆小的幼鸽也能重拾信心，勇敢地为同行朋友保驾护航。",
                                "image":  "img/weapon/Weapon_BpSGssr001_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BpSGssr001_5_1024.png",
                                "stats":  {
                                              "攻击":  "306",
                                              "攻击加成":  "15%"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "霰弹施压 Lv.1",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡I:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。防御类减益效果。"
                                                },
                                                {
                                                    "name":  "霰弹施压 Lv.2",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡I\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡I:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。防御类减益效果。"
                                                },
                                                {
                                                    "name":  "霰弹施压 Lv.3",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡II:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e。防御类减益效果。"
                                                },
                                                {
                                                    "name":  "霰弹施压 Lv.4",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡II:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e。防御类减益效果。"
                                                },
                                                {
                                                    "name":  "霰弹施压 Lv.5",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡II:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e。防御类减益效果。"
                                                },
                                                {
                                                    "name":  "霰弹施压 Lv.6",
                                                    "text":  "若目标满稳态指数或拥有\u003cspan style=\"color:#3487e0\"\u003e暴露\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。造成伤害时，对目标施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e稳态失衡II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e3回合\u003c/span\u003e。冷却\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e稳态失衡II:\u003c/span\u003e 受到稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e。防御类减益效果。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_BpMGssr001_5":  {
                                "id":  "Weapon_BpMGssr001_5",
                                "name":  "妙尔尼尔",
                                "rank":  5,
                                "tags":  [
                                             "机枪",
                                             "重型弹"
                                         ],
                                "intro":  "高性能机枪，性能优异，威力强大。设计师以此命名，或许是希望使用者能和雷神一般恰如其分地发挥它的力量。",
                                "image":  "img/weapon/Weapon_BpMGssr001_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BpMGssr001_5_1024.png",
                                "stats":  {
                                              "攻击":  "327",
                                              "攻击加成":  "15%"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "若造成范围伤害，则施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "定点射击 Lv.1",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                },
                                                {
                                                    "name":  "定点射击 Lv.2",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                },
                                                {
                                                    "name":  "定点射击 Lv.3",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。"
                                                },
                                                {
                                                    "name":  "定点射击 Lv.4",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。"
                                                },
                                                {
                                                    "name":  "定点射击 Lv.5",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。"
                                                },
                                                {
                                                    "name":  "定点射击 Lv.6",
                                                    "text":  "若未进行过移动，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，且行动结束时恢复最大生命值的\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e稳态指数。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_BpKnifessr001_5":  {
                                   "id":  "Weapon_BpKnifessr001_5",
                                   "name":  "王冠鹿角兔",
                                   "rank":  5,
                                   "tags":  [
                                                "刀",
                                                "近战"
                                            ],
                                   "intro":  "高性能近战武器，威力强大，外观颇有艺术感。使用它来进行的战斗，也一定更有观赏性吧。",
                                   "image":  "img/weapon/Weapon_BpKnifessr001_5_1024.png",
                                   "thumbnail":  "img/weapon/thumb/Weapon_BpKnifessr001_5_1024.png",
                                   "stats":  {
                                                 "攻击":  "313",
                                                 "攻击加成":  "15%"
                                             },
                                   "bond":  {
                                                "id":  "",
                                                "name":  "",
                                                "text":  ""
                                            },
                                   "trait":  {
                                                 "label":  "特质",
                                                 "text":  "主动攻击每造成\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e击杀，则获得\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动追加\u003c/span\u003e\u003c/span\u003e（每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。"
                                             },
                                   "effects":  [
                                                   {
                                                       "name":  "正面交锋 Lv.1",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   },
                                                   {
                                                       "name":  "正面交锋 Lv.2",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   },
                                                   {
                                                       "name":  "正面交锋 Lv.3",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   },
                                                   {
                                                       "name":  "正面交锋 Lv.4",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   },
                                                   {
                                                       "name":  "正面交锋 Lv.5",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   },
                                                   {
                                                       "name":  "正面交锋 Lv.6",
                                                       "text":  "对满生命值或生命值百分比低于自身的敌方单位造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，若目标附近没有掩体，则攻击前对其造成\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态伤害。"
                                                   }
                                               ],
                                   "pools":  [

                                             ]
                               },
    "Weapon_BpARssr001_5":  {
                                "id":  "Weapon_BpARssr001_5",
                                "name":  "盖尔诺",
                                "rank":  5,
                                "tags":  [
                                             "突击步枪",
                                             "中型弹"
                                         ],
                                "intro":  "高性能突击步枪，能够轻松应对各种实战情况。拥有女武神盖尔诺之名的它，应该也希望被高洁之人握在手中吧。",
                                "image":  "img/weapon/Weapon_BpARssr001_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BpARssr001_5_1024.png",
                                "stats":  {
                                              "攻击":  "320",
                                              "攻击加成":  "15%"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "集群作战 Lv.1",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，大于\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "集群作战 Lv.2",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，大于\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "集群作战 Lv.3",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e，大于\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "集群作战 Lv.4",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e，存在友方单位（不包含自身）时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "集群作战 Lv.5",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e，存在友方单位（不包含自身）时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "集群作战 Lv.6",
                                                    "text":  "周围半径\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e内每有1个友方单位（不包含自身），治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e，至多\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，存在友方单位（不包含自身）时，主动攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e4格\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_BpRFssr001_5":  {
                                "id":  "Weapon_BpRFssr001_5",
                                "name":  "阿尔克纳",
                                "rank":  5,
                                "tags":  [
                                             "狙击枪",
                                             "重型弹"
                                         ],
                                "intro":  "高性能狙击枪，外观冰冷而具有科技感。子弹的轨迹中，是否也蕴含着天地万物的运转之理？",
                                "image":  "img/weapon/Weapon_BpRFssr001_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BpRFssr001_5_1024.png",
                                "stats":  {
                                              "攻击":  "327",
                                              "攻击加成":  "15%"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "单兵突破 Lv.1",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径4格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "单兵突破 Lv.2",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径4格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "单兵突破 Lv.3",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "单兵突破 Lv.4",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "单兵突破 Lv.5",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "单兵突破 Lv.6",
                                                    "text":  "造成伤害时，若敌方目标\u003cspan style=\"color:#f26c1c\"\u003e周围半径2格范围内\u003c/span\u003e不存在其他敌方单位，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_BpSMGssr001_5":  {
                                 "id":  "Weapon_BpSMGssr001_5",
                                 "name":  "绝密手稿",
                                 "rank":  5,
                                 "tags":  [
                                              "冲锋枪",
                                              "轻型弹"
                                          ],
                                 "intro":  "高性能冲锋枪，是威力强劲且独具个性的武器。设计师起的这个名字，应该也有将它视为秘密武器的意图吧。",
                                 "image":  "img/weapon/Weapon_BpSMGssr001_5_1024.png",
                                 "thumbnail":  "img/weapon/thumb/Weapon_BpSMGssr001_5_1024.png",
                                 "stats":  {
                                               "攻击":  "292",
                                               "攻击加成":  "15%"
                                           },
                                 "bond":  {
                                              "id":  "",
                                              "name":  "",
                                              "text":  ""
                                          },
                                 "trait":  {
                                               "label":  "特质",
                                               "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                           },
                                 "effects":  [
                                                 {
                                                     "name":  "战场奔袭 Lv.1",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e25%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果。"
                                                 },
                                                 {
                                                     "name":  "战场奔袭 Lv.2",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果。"
                                                 },
                                                 {
                                                     "name":  "战场奔袭 Lv.3",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e35%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e4格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e增益效果。"
                                                 },
                                                 {
                                                     "name":  "战场奔袭 Lv.4",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e40%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e4格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e增益效果。"
                                                 },
                                                 {
                                                     "name":  "战场奔袭 Lv.5",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e45%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e4格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e增益效果。"
                                                 },
                                                 {
                                                     "name":  "战场奔袭 Lv.6",
                                                     "text":  "每移动\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，至多\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e。若移动大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则攻击前随机驱散目标\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e增益效果。"
                                                 }
                                             ],
                                 "pools":  [

                                           ]
                             },
    "Weapon_BpHRssr001_5":  {
                                "id":  "Weapon_BpHRssr001_5",
                                "name":  "喧闹恶灵",
                                "rank":  5,
                                "tags":  [
                                             "手枪",
                                             "轻型弹"
                                         ],
                                "intro":  "高性能手枪，设计精致而巧妙。名字是武器设计师起的，据说源于一种会吃掉不听话小孩的怪物。",
                                "image":  "img/weapon/Weapon_BpHRssr001_5_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BpHRssr001_5_1024.png",
                                "stats":  {
                                              "攻击":  "285",
                                              "攻击加成":  "15%"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "普通攻击射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "机动掩护 Lv.1",
                                                    "text":  "若满生命值，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "机动掩护 Lv.2",
                                                    "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e90%\u003c/span\u003e，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "机动掩护 Lv.3",
                                                    "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e21%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "机动掩护 Lv.4",
                                                    "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e70%\u003c/span\u003e，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "机动掩护 Lv.5",
                                                    "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e27%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "机动掩护 Lv.6",
                                                    "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e，则治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_Igla_4":  {
                          "id":  "Weapon_Igla_4",
                          "name":  "挽歌",
                          "rank":  4,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "与针契合度高的近战武器，根据针的战斗方式制作而来，刃部的金属质量优越，为敌人奉上无尽的哀悼。",
                          "image":  "img/weapon/Weapon_Igla_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Igla_4_1024.png",
                          "stats":  {
                                        "攻击":  "251"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，造成近战伤害时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "悉心款待 Lv.1",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "悉心款待 Lv.2",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "悉心款待 Lv.3",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "悉心款待 Lv.4",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "悉心款待 Lv.5",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "悉心款待 Lv.6",
                                              "text":  "造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_Agent_4":  {
                           "id":  "Weapon_Agent_4",
                           "name":  "黑棘",
                           "rank":  4,
                           "tags":  [
                                        "机枪",
                                        "重型弹"
                                    ],
                           "intro":  "与代理人契合度较高的特制武器，根据代理人的要求进行了改装，以适配铁血人形的基本作战需要。",
                           "image":  "img/weapon/Weapon_Agent_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Agent_4_1024.png",
                           "stats":  {
                                         "攻击":  "285"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "造成伤害时若产生武器克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力，产生浊刻克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "履职 Lv.1",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "履职 Lv.2",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "履职 Lv.3",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "履职 Lv.4",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "履职 Lv.5",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "履职 Lv.6",
                                               "text":  "自身造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_Cecilia_4":  {
                             "id":  "Weapon_Cecilia_4",
                             "name":  "格威尔36-康派科特",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与希丽雅契合度较高的枪械，根据希丽雅的需要加强了稳定性，增配了定制消音器。应对复杂的战斗环境时，表现仍然沉稳可靠。",
                             "image":  "img/weapon/Weapon_Cecilia_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Cecilia_4_1024.png",
                             "stats":  {
                                           "攻击":  "272"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "慰藉 Lv.1",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "慰藉 Lv.2",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "慰藉 Lv.3",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "慰藉 Lv.4",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "慰藉 Lv.5",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "慰藉 Lv.6",
                                                 "text":  "持有护盾时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Eagletta_4":  {
                              "id":  "Weapon_Eagletta_4",
                              "name":  "沙漠之鹰",
                              "rank":  4,
                              "tags":  [
                                           "手枪",
                                           "轻型弹"
                                       ],
                              "intro":  "与伊格蕾塔契合度较高的手枪，针对伊格蕾塔的作战偏好优化了枪械结构，在危机四伏的荒野中，具备不可小觑的威慑力。",
                              "image":  "img/weapon/Weapon_Eagletta_4_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Eagletta_4_1024.png",
                              "stats":  {
                                            "攻击":  "278"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "若技能不消耗导染指数，则暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "掠影 Lv.1",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "掠影 Lv.2",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "掠影 Lv.3",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "掠影 Lv.4",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "掠影 Lv.5",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "掠影 Lv.6",
                                                  "text":  "造成的\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                            }
                                        ]
                          },
    "Weapon_Asteria_4":  {
                             "id":  "Weapon_Asteria_4",
                             "name":  "阿玛莱特15型自动步枪",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与阿斯缇亚契合度极高的枪械，客制化的枪身在确保射击精度的同时，可以满足所有的战术需求。",
                             "image":  "img/weapon/Weapon_Asteria_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Asteria_4_1024.png",
                             "stats":  {
                                           "攻击":  "244"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "造成弹种物理伤害时，无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御力。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "缄默射击 Lv.1",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "缄默射击 Lv.2",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "缄默射击 Lv.3",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "缄默射击 Lv.4",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "缄默射击 Lv.5",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "缄默射击 Lv.6",
                                                 "text":  "造成弹种伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Koleda_4":  {
                            "id":  "Weapon_Koleda_4",
                            "name":  "12型突击步枪",
                            "rank":  4,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "与克莱妲契合度极高的枪械，拥有相比老式突击步枪更高的射击精度与低后坐力。",
                            "image":  "img/weapon/Weapon_Koleda_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Koleda_4_1024.png",
                            "stats":  {
                                          "攻击":  "258"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "自身及自身召唤物的暴击伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成浊刻伤害，则提高至\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "亵渎 Lv.1",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "亵渎 Lv.2",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "亵渎 Lv.3",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "亵渎 Lv.4",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "亵渎 Lv.5",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "亵渎 Lv.6",
                                                "text":  "若自身拥有浊刻类增益，则自身和自身召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                          }
                                      ]
                        },
    "Weapon_Faelynn_4":  {
                             "id":  "Weapon_Faelynn_4",
                             "name":  "格威尔41",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与芙铃契合度高的枪械，火力稳定而强大，做工考究，对日常保养有较高需求。",
                             "image":  "img/weapon/Weapon_Faelynn_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Faelynn_4_1024.png",
                             "stats":  {
                                           "攻击":  "272"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "兽抓刨伤 Lv.1",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "兽抓刨伤 Lv.2",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "兽抓刨伤 Lv.3",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "兽抓刨伤 Lv.4",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "兽抓刨伤 Lv.5",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "兽抓刨伤 Lv.6",
                                                 "text":  "对位于酸蚀地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                           }
                                       ]
                         },
    "Weapon_Welrodmk2_4":  {
                               "id":  "Weapon_Welrodmk2_4",
                               "name":  "马克二型栓动手枪",
                               "rank":  4,
                               "tags":  [
                                            "手枪",
                                            "轻型弹"
                                        ],
                               "intro":  "与维尔德契合度高的枪械，适合于侦探任务和隐秘行动。基于特殊的设计，发射时的枪声音量被降至极低的水平。",
                               "image":  "img/weapon/Weapon_Welrodmk2_4_1024.png",
                               "thumbnail":  "img/weapon/thumb/Weapon_Welrodmk2_4_1024.png",
                               "stats":  {
                                             "攻击":  "223"
                                         },
                               "bond":  {
                                            "id":  "",
                                            "name":  "",
                                            "text":  ""
                                        },
                               "trait":  {
                                             "label":  "特质",
                                             "text":  "累积受到\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e初始生命值的伤害时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                               "effects":  [
                                               {
                                                   "name":  "推理范式 Lv.1",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "推理范式 Lv.2",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "推理范式 Lv.3",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "推理范式 Lv.4",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "推理范式 Lv.5",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "推理范式 Lv.6",
                                                   "text":  "攻击前若满生命值，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                               }
                                           ],
                               "pools":  [
                                             {
                                                 "name":  "军备提升",
                                                 "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                             },
                                             {
                                                 "name":  "军备提升",
                                                 "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                             }
                                         ]
                           },
    "Weapon_Mityl_4":  {
                           "id":  "Weapon_Mityl_4",
                           "name":  "90型单兵自卫武器",
                           "rank":  4,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与米蒂尔契合度高的枪械，优秀的射速尤其适合用于突击作战。特殊的供弹设计是最突出的亮点。",
                           "image":  "img/weapon/Weapon_Mityl_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Mityl_4_1024.png",
                           "stats":  {
                                         "攻击":  "272"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "自身及自身的召唤物造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e，造成的伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "模仿本能 Lv.1",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "模仿本能 Lv.2",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "模仿本能 Lv.3",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "模仿本能 Lv.4",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "模仿本能 Lv.5",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "模仿本能 Lv.6",
                                               "text":  "对位于浊刻地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_Soppo_4":  {
                           "id":  "Weapon_Soppo_4",
                           "name":  "特殊模组战术步枪",
                           "rank":  4,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "与索普契合度高的枪械，针对索普的作战偏好进行了一定的改造，改进了供弹装置和瞄准系统，显著提升了武器射速与有效射程。",
                           "image":  "img/weapon/Weapon_Soppo_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Soppo_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "对处于燃烧类或冷凝类地格上的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若次此伤害为\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e或\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e，则提高至\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "针对性预演 Lv.1",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "针对性预演 Lv.2",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "针对性预演 Lv.3",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "针对性预演 Lv.4",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "针对性预演 Lv.5",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "针对性预演 Lv.6",
                                               "text":  "造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                         }
                                     ]
                       },
    "Weapon_BlackOTs14_4":  {
                                "id":  "Weapon_BlackOTs14_4",
                                "name":  "闪电-3",
                                "rank":  4,
                                "tags":  [
                                             "突击步枪",
                                             "中型弹"
                                         ],
                                "intro":  "与OTs-14契合度较高的枪械，优化了后坐力控制与战术导轨。对她而言，这不仅是武器，更是用于测量与“另一个自己”之间差距的标尺。",
                                "image":  "img/weapon/Weapon_BlackOTs14_4_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BlackOTs14_4_1024.png",
                                "stats":  {
                                              "攻击":  "265"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "特质",
                                              "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御力。"
                                          },
                                "effects":  [
                                                {
                                                    "name":  "契约赦令 Lv.1",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "契约赦令 Lv.2",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "契约赦令 Lv.3",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "契约赦令 Lv.4",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "契约赦令 Lv.5",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "契约赦令 Lv.6",
                                                    "text":  "普攻造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                              },
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                              },
                                              {
                                                  "name":  "军备提升",
                                                  "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                              }
                                          ]
                            },
    "Weapon_Sextans_4":  {
                             "id":  "Weapon_Sextans_4",
                             "name":  "夜蛇",
                             "rank":  4,
                             "tags":  [
                                          "刀",
                                          "近战"
                                      ],
                             "intro":  "与六分仪契合度高的近战武器，针对六分仪的作战偏好进行了一定的改造，握把和刃部使用了最新的合金材料，能悄无声息地没入敌人的身体。",
                             "image":  "img/weapon/Weapon_Sextans_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Sextans_4_1024.png",
                             "stats":  {
                                           "攻击":  "244"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "友方单位（不包含自身）使用主动技能前，若自身导染指数小于等于\u003cspan style=\"color:#f26c1c\"\u003e5点\u003c/span\u003e，则技能后自身获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "暗夜降临 Lv.1",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "暗夜降临 Lv.2",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "暗夜降临 Lv.3",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "暗夜降临 Lv.4",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "暗夜降临 Lv.5",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "暗夜降临 Lv.6",
                                                 "text":  "造成的电导伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，造成的近战伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_Liushih_4":  {
                             "id":  "Weapon_Liushih_4",
                             "name":  "刘氏步枪",
                             "rank":  4,
                             "tags":  [
                                          "狙击枪",
                                          "重型弹"
                                      ],
                             "intro":  "与刘莳契合度高的枪械，针对刘莳的作战偏好进行了一定的改造，修复了自动结构的缺陷，提高了连续点射的稳定性。",
                             "image":  "img/weapon/Weapon_Liushih_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Liushih_4_1024.png",
                             "stats":  {
                                           "生命":  "675"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动结束时，自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "助阵 Lv.1",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "助阵 Lv.2",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "助阵 Lv.3",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "助阵 Lv.4",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "助阵 Lv.5",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             },
                                             {
                                                 "name":  "助阵 Lv.6",
                                                 "text":  "自身和自身\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e17%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                           }
                                       ]
                         },
    "Weapon_MK23_4":  {
                          "id":  "Weapon_MK23_4",
                          "name":  "马克23进攻型手枪",
                          "rank":  4,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "与贝丝蒂契合度高的枪械，突出了易隐蔽和火力高的优点，是一击毙命的暗杀利器。",
                          "image":  "img/weapon/Weapon_MK23_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_MK23_4_1024.png",
                          "stats":  {
                                        "攻击":  "244"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "自身和自身的召唤物造成的范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "街头明星 Lv.1",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "街头明星 Lv.2",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "街头明星 Lv.3",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "街头明星 Lv.4",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "街头明星 Lv.5",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "街头明星 Lv.6",
                                              "text":  "自身处于酸蚀类地格上时造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_M200_4":  {
                          "id":  "Weapon_M200_4",
                          "name":  "干预200",
                          "rank":  4,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "与夏安契合度高的枪械，针对夏安的作战偏好进行了一定的改造，加装消音器的同时兼顾了散热效率与连续射击精度。",
                          "image":  "img/weapon/Weapon_M200_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_M200_4_1024.png",
                          "stats":  {
                                        "攻击":  "285"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "遥远守望 Lv.1",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "遥远守望 Lv.2",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "遥远守望 Lv.3",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "遥远守望 Lv.4",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "遥远守望 Lv.5",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "遥远守望 Lv.6",
                                              "text":  "对自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径7格外\u003c/span\u003e的敌方目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                        }
                                    ]
                      },
    "Weapon_DSR50_4":  {
                           "id":  "Weapon_DSR50_4",
                           "name":  "因戈尔夫50",
                           "rank":  4,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "与罗蕾莱契合度高的枪械，优化了液压缓冲系统和扳机手感，后坐力更可控，是值得信赖的攻坚利器。",
                           "image":  "img/weapon/Weapon_DSR50_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_DSR50_4_1024.png",
                           "stats":  {
                                         "攻击":  "265"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "行动结束时，若自身导染指数不满，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "不熄终曲 Lv.1",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "不熄终曲 Lv.2",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "不熄终曲 Lv.3",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "不熄终曲 Lv.4",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "不熄终曲 Lv.5",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "不熄终曲 Lv.6",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若拥有燃烧类增益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_Sakura_4":  {
                            "id":  "Weapon_Sakura_4",
                            "name":  "樱花冲锋枪",
                            "rank":  4,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "与樱花契合度高的枪械，针对樱花的作战偏好进行了一定的改造，提高了枪身的材料强度，使其更适合长时间作战。",
                            "image":  "img/weapon/Weapon_Sakura_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Sakura_4_1024.png",
                            "stats":  {
                                          "攻击":  "258"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生燃烧克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "焰樱 Lv.1",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "焰樱 Lv.2",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "焰樱 Lv.3",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "焰樱 Lv.4",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "焰樱 Lv.5",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "焰樱 Lv.6",
                                                "text":  "回合外攻击造成\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_Phaetusa_4":  {
                              "id":  "Weapon_Phaetusa_4",
                              "name":  "灰棘",
                              "rank":  4,
                              "tags":  [
                                           "刀",
                                           "近战"
                                       ],
                              "intro":  "与翡图萨契合度高的近战武器，针对翡图萨的作战偏好进行了一定的改造，使用起来更加趁手。",
                              "image":  "img/weapon/Weapon_Phaetusa_4_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Phaetusa_4_1024.png",
                              "stats":  {
                                            "攻击":  "265"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "刀魂 Lv.1",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "刀魂 Lv.2",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "刀魂 Lv.3",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "刀魂 Lv.4",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "刀魂 Lv.5",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "刀魂 Lv.6",
                                                  "text":  "制胜技能造成的酸蚀伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                            }
                                        ]
                          },
    "Weapon_DP12_4":  {
                          "id":  "Weapon_DP12_4",
                          "name":  "12型双管霰弹枪",
                          "rank":  4,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "与海伦契合度高的枪械，针对海伦的作战偏好进行了一定的改造，提升弹仓的装填性能，使其更适用于多种场合下的灵活作战。",
                          "image":  "img/weapon/Weapon_DP12_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_DP12_4_1024.png",
                          "stats":  {
                                        "攻击":  "216"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "造成的稳态伤害增加\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "霜华缭乱 Lv.1",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "霜华缭乱 Lv.2",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "霜华缭乱 Lv.3",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "霜华缭乱 Lv.4",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "霜华缭乱 Lv.5",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "霜华缭乱 Lv.6",
                                              "text":  "对拥有冷凝类减益效果的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_Lewisgun_4":  {
                              "id":  "Weapon_Lewisgun_4",
                              "name":  "刘易斯轻机枪",
                              "rank":  4,
                              "tags":  [
                                           "机枪",
                                           "重型弹"
                                       ],
                              "intro":  "与刘易斯契合度高的枪械，针对刘易斯的作战偏好进行了一定的改造，全新的冷却系统解决了枪械在连射时的过热问题。",
                              "image":  "img/weapon/Weapon_Lewisgun_4_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Lewisgun_4_1024.png",
                              "stats":  {
                                            "攻击":  "278"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生燃烧克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "绘梦 Lv.1",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "绘梦 Lv.2",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "绘梦 Lv.3",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "绘梦 Lv.4",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "绘梦 Lv.5",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "绘梦 Lv.6",
                                                  "text":  "主动技能和普攻造成的\u003cspan style=\"color:#e67129\"\u003e燃烧伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                            },
                                            {
                                                "name":  "军备提升",
                                                "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                            }
                                        ]
                          },
    "Weapon_AK15_4":  {
                          "id":  "Weapon_AK15_4",
                          "name":  "卡拉什尼科夫突击步枪15",
                          "rank":  4,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "与威玛西娜契合度高的枪械，针对威玛西娜的作战偏好进行了一定的改造，经过了特殊化的内部改造，杀伤力得到了质的提升。",
                          "image":  "img/weapon/Weapon_AK15_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AK15_4_1024.png",
                          "stats":  {
                                        "攻击":  "278"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "剔骨之牙 Lv.1",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "剔骨之牙 Lv.2",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e22%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "剔骨之牙 Lv.3",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e24%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "剔骨之牙 Lv.4",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e26%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "剔骨之牙 Lv.5",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e28%\u003c/span\u003e防御力。"
                                          },
                                          {
                                              "name":  "剔骨之牙 Lv.6",
                                              "text":  "主动物理攻击时无视目标\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e防御力。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-26 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_AN94_4":  {
                          "id":  "Weapon_AN94_4",
                          "name":  "尼科诺夫突击步枪94",
                          "rank":  4,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "与埃芙契合度高的枪械，针对埃芙的作战偏好进行了一定的改造，大幅度减轻了后坐力，显著提升了连续射击的精度。",
                          "image":  "img/weapon/Weapon_AN94_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AN94_4_1024.png",
                          "stats":  {
                                        "攻击":  "251"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "完美后备 Lv.1",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "完美后备 Lv.2",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "完美后备 Lv.3",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "完美后备 Lv.4",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "完美后备 Lv.5",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "完美后备 Lv.6",
                                              "text":  "拥有护盾类效果时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_AA12_4":  {
                          "id":  "Weapon_AA12_4",
                          "name":  "艾奇逊12自动霰弹枪",
                          "rank":  4,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "与琳德契合度高的枪械，针对琳德的作战偏好进行了一定的改造，先进的缓冲系统有效降低了后坐力，同时优化了弹道的稳定性。",
                          "image":  "img/weapon/Weapon_AA12_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AA12_4_1024.png",
                          "stats":  {
                                        "攻击":  "278"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "激素特化 Lv.1",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "激素特化 Lv.2",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "激素特化 Lv.3",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "激素特化 Lv.4",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "激素特化 Lv.5",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "激素特化 Lv.6",
                                              "text":  "对拥有酸蚀类减益的敌方目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_PA15_4":  {
                          "id":  "Weapon_PA15_4",
                          "name":  "15型自动手枪",
                          "rank":  4,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "与芙洛伦契合度高的枪械，针对芙洛伦的作战偏好进行了一些改造，加强了火力的同时提高了使用耐久度。",
                          "image":  "img/weapon/Weapon_PA15_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_PA15_4_1024.png",
                          "stats":  {
                                        "攻击":  "251"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "使用主动技能前，驱散自身\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，若驱散成功，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机增益，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "服从之心 Lv.1",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "服从之心 Lv.2",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "服从之心 Lv.3",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "服从之心 Lv.4",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "服从之心 Lv.5",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "服从之心 Lv.6",
                                              "text":  "自身实体召唤物造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，造成\u003cspan style=\"color:#2caadb\"\u003e浊刻伤害\u003c/span\u003e时，额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_UMP40_4":  {
                           "id":  "Weapon_UMP40_4",
                           "name":  "通用冲锋枪40",
                           "rank":  4,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与莱妮契合度高的枪械，针对莱妮的作战偏好进行了一定的改造，减轻枪身重量的同时改进了枪体材料，高速连射时更加可靠。",
                           "image":  "img/weapon/Weapon_UMP40_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP40_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "优势追击 Lv.1",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "优势追击 Lv.2",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "优势追击 Lv.3",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "优势追击 Lv.4",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "优势追击 Lv.5",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           },
                                           {
                                               "name":  "优势追击 Lv.6",
                                               "text":  "自身的\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e实体召唤物\u003c/span\u003e\u003c/span\u003e造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e实体召唤物:\u003c/span\u003e 在战斗中占用地格、拥有属性且可被选中的召唤物。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_RO635_4":  {
                           "id":  "Weapon_RO635_4",
                           "name":  "柯尔特635型冲锋枪",
                           "rank":  4,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与洛贝拉契合度高的枪械，针对洛贝拉的作战偏好进行了一定的改造，提高了射速，在近战和冲锋战中更有优势。",
                           "image":  "img/weapon/Weapon_RO635_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_RO635_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "出击的决心 Lv.1",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "出击的决心 Lv.2",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "出击的决心 Lv.3",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "出击的决心 Lv.4",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "出击的决心 Lv.5",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "出击的决心 Lv.6",
                                               "text":  "回合外攻击造成\u003cspan style=\"color:#42cce0\"\u003e冷凝伤害\u003c/span\u003e时，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_UMP45_4":  {
                           "id":  "Weapon_UMP45_4",
                           "name":  "通用冲锋枪45",
                           "rank":  4,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与莱娅契合度高的枪械，针对莱娅的作战偏好进行了一定的改造，增强了杀伤力，提高了个体的战场生存能力。",
                           "image":  "img/weapon/Weapon_UMP45_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP45_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "造成的稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e，若目标为首领单位，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "优势利用 Lv.1",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "优势利用 Lv.2",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "优势利用 Lv.3",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "优势利用 Lv.4",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "优势利用 Lv.5",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "优势利用 Lv.6",
                                               "text":  "对处于电导类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_VSK94_4":  {
                           "id":  "Weapon_VSK94_4",
                           "name":  "维斯卡94",
                           "rank":  4,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "与妮基塔契合度高的枪械，针对妮基塔的作战偏好进行了一定的改造，减轻了重量，在执行任务时更加便携。",
                           "image":  "img/weapon/Weapon_VSK94_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_VSK94_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "警诫 Lv.1",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "警诫 Lv.2",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "警诫 Lv.3",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "警诫 Lv.4",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "警诫 Lv.5",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "警诫 Lv.6",
                                               "text":  "制胜技能造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_K2_4":  {
                        "id":  "Weapon_K2_4",
                        "name":  "卡宾刻2型",
                        "rank":  4,
                        "tags":  [
                                     "突击步枪",
                                     "中型弹"
                                 ],
                        "intro":  "与幼熙契合度高的枪械，针对幼熙的作战偏好进行了一定的改造，大大提升了枪械稳定度与便携性，确保了在移动过程中的射击精度。",
                        "image":  "img/weapon/Weapon_K2_4_1024.png",
                        "thumbnail":  "img/weapon/thumb/Weapon_K2_4_1024.png",
                        "stats":  {
                                      "攻击":  "251"
                                  },
                        "bond":  {
                                     "id":  "",
                                     "name":  "",
                                     "text":  ""
                                 },
                        "trait":  {
                                      "label":  "特质",
                                      "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                  },
                        "effects":  [
                                        {
                                            "name":  "坚定之心 Lv.1",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e"
                                        },
                                        {
                                            "name":  "坚定之心 Lv.2",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e"
                                        },
                                        {
                                            "name":  "坚定之心 Lv.3",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e"
                                        },
                                        {
                                            "name":  "坚定之心 Lv.4",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e"
                                        },
                                        {
                                            "name":  "坚定之心 Lv.5",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e"
                                        },
                                        {
                                            "name":  "坚定之心 Lv.6",
                                            "text":  "主动物理攻击造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e"
                                        }
                                    ],
                        "pools":  [
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                      },
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                      },
                                      {
                                          "name":  "军备提升",
                                          "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                      }
                                  ]
                    },
    "Weapon_HAWK12_4":  {
                            "id":  "Weapon_HAWK12_4",
                            "name":  "九七式霰",
                            "rank":  4,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "与秋桦契合度高的枪械，针对秋桦的作战偏好进行了一定的改造，不仅降低了后坐力，还增强了远距离的命中率。",
                            "image":  "img/weapon/Weapon_HAWK12_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_HAWK12_4_1024.png",
                            "stats":  {
                                          "攻击":  "251"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "使用主动技能前，驱散自身\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，若驱散成功，则获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e随机攻击增益，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "燃薪 Lv.1",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "燃薪 Lv.2",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "燃薪 Lv.3",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "燃薪 Lv.4",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "燃薪 Lv.5",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "燃薪 Lv.6",
                                                "text":  "对拥有燃烧类减益的目标，造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_MP5_4":  {
                         "id":  "Weapon_MP5_4",
                         "name":  "五号九毫米冲锋枪",
                         "rank":  4,
                         "tags":  [
                                      "冲锋枪",
                                      "轻型弹"
                                  ],
                         "intro":  "与佩莉契合度高的枪械，针对佩莉的作战偏好进行了一定的改造，还搭载了一些不知何处搜罗的部件，射速微妙地得到了提升。",
                         "image":  "img/weapon/Weapon_MP5_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_MP5_4_1024.png",
                         "stats":  {
                                       "攻击":  "230"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "受到伤害时，攻击者每拥有1个燃烧类减益，自身受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多降低\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "无间勇气 Lv.1",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "无间勇气 Lv.2",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "无间勇气 Lv.3",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "无间勇气 Lv.4",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "无间勇气 Lv.5",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "无间勇气 Lv.6",
                                             "text":  "自身生命值低于\u003cspan style=\"color:#f26c1c\"\u003e75%\u003c/span\u003e时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                       }
                                   ]
                     },
    "Weapon_M1903_4":  {
                           "id":  "Weapon_M1903_4",
                           "name":  "斯普林菲尔德",
                           "rank":  4,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "与春田契合度高的枪械，针对春田的作战偏好进行了一定的改造，使子弹出膛速度更快，提升了射击威力。",
                           "image":  "img/weapon/Weapon_M1903_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1903_4_1024.png",
                           "stats":  {
                                         "攻击":  "230"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "治疗后，自身恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "无声共情 Lv.1",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无声共情 Lv.2",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无声共情 Lv.3",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无声共情 Lv.4",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无声共情 Lv.5",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无声共情 Lv.6",
                                               "text":  "主动攻击或者主动治疗前，若目标拥有浊刻类效果，则造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_G36KKSK_4":  {
                             "id":  "Weapon_G36KKSK_4",
                             "name":  "格威尔36-斯佩凯芙特",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与安朵丝契合度高的枪械，针对安朵丝的作战偏好进行了一定的改造，加强了火力和误差修正。",
                             "image":  "img/weapon/Weapon_G36KKSK_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_G36KKSK_4_1024.png",
                             "stats":  {
                                           "攻击":  "223"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "受到伤害时目标每有1个电导类减益降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e伤害，最大\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "稳健策略 Lv.1",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "稳健策略 Lv.2",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "稳健策略 Lv.3",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "稳健策略 Lv.4",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "稳健策略 Lv.5",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             },
                                             {
                                                 "name":  "稳健策略 Lv.6",
                                                 "text":  "攻击拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e负电荷\u003c/span\u003e\u003c/span\u003e的敌方目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e负电荷:\u003c/span\u003e 受到电导精准伤害时，所有拥有\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e的目标受到此次伤害\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e的固定伤害。被再次施加\u003cspan style=\"color:#3487e0\"\u003e负电荷\u003c/span\u003e时，额外受到\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e施加者攻击力的固定伤害。受到来自拥有\u003cspan style=\"color:#3487e0\"\u003e正电荷\u003c/span\u003e的单位攻击时，受到的\u003cspan style=\"color:#d4ae08\"\u003e电导伤害\u003c/span\u003e提高。电导类减益（同名效果覆盖时，后施加的效果会对先施加的效果进行覆盖，并继承先施加效果的剩余持续时间）。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                           },
                                           {
                                               "name":  "军备提升",
                                               "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                           }
                                       ]
                         },
    "Weapon_G28_4":  {
                         "id":  "Weapon_G28_4",
                         "name":  "格威尔28",
                         "rank":  4,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "与比悠卡契合度高的枪械，针对比悠卡的作战偏好进行了一定的改造，更适应长距离射击。",
                         "image":  "img/weapon/Weapon_G28_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G28_4_1024.png",
                         "stats":  {
                                       "攻击":  "251"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "撒娇绝技 Lv.1",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "撒娇绝技 Lv.2",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "撒娇绝技 Lv.3",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "撒娇绝技 Lv.4",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "撒娇绝技 Lv.5",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "撒娇绝技 Lv.6",
                                             "text":  "攻击拥有电导类减益的目标时，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                       }
                                   ]
                     },
    "Weapon_Vector_4":  {
                            "id":  "Weapon_Vector_4",
                            "name":  "短剑",
                            "rank":  4,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "与维克托契合度高的枪械，针对维克托的作战偏好进行了一定的改造，机动性强，稳定性高。",
                            "image":  "img/weapon/Weapon_Vector_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vector_4_1024.png",
                            "stats":  {
                                          "攻击":  "251"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "黯然 Lv.1",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "黯然 Lv.2",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "黯然 Lv.3",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "黯然 Lv.4",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "黯然 Lv.5",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "黯然 Lv.6",
                                                "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若为燃烧类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_G11_4":  {
                         "id":  "Weapon_G11_4",
                         "name":  "无壳弹步枪11",
                         "rank":  4,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "与米什缇契合度高的枪械，针对米什缇的作战偏好进行了一定的改造，射速和精准度均有提升。",
                         "image":  "img/weapon/Weapon_G11_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G11_4_1024.png",
                         "stats":  {
                                       "攻击":  "244"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "行动结束时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "诡原梦境 Lv.1",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "诡原梦境 Lv.2",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "诡原梦境 Lv.3",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "诡原梦境 Lv.4",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "诡原梦境 Lv.5",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "诡原梦境 Lv.6",
                                             "text":  "攻击拥有酸蚀类减益的目标后，自身造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                       }
                                   ]
                     },
    "Weapon_HK416_4":  {
                           "id":  "Weapon_HK416_4",
                           "name":  "黑克勒科赫416",
                           "rank":  4,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "与可露凯契合度高的枪械，针对可露凯的作战偏好进行了一定的改造，可靠性和精准度均得到了不小的提升。",
                           "image":  "img/weapon/Weapon_HK416_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_HK416_4_1024.png",
                           "stats":  {
                                         "攻击":  "278"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生酸蚀克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "无情推演 Lv.1",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无情推演 Lv.2",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无情推演 Lv.3",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无情推演 Lv.4",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无情推演 Lv.5",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "无情推演 Lv.6",
                                               "text":  "主动攻击命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e及以上目标时，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         }
                                     ]
                       },
    "Weapon_CSLS06_4":  {
                            "id":  "Weapon_CSLS06_4",
                            "name":  "长风零六",
                            "rank":  4,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "与朝晖契合度高的枪械，针对朝晖的作战偏好进行了一定的改造，更加轻便，提升了在移动中射击的精准度。",
                            "image":  "img/weapon/Weapon_CSLS06_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_CSLS06_4_1024.png",
                            "stats":  {
                                          "攻击":  "251"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "破风追云 Lv.1",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "破风追云 Lv.2",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "破风追云 Lv.3",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "破风追云 Lv.4",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "破风追云 Lv.5",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "破风追云 Lv.6",
                                                "text":  "若造成击杀，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，可叠加\u003cspan style=\"color:#f26c1c\"\u003e2层\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_KSVK_4":  {
                          "id":  "Weapon_KSVK_4",
                          "name":  "科夫罗夫",
                          "rank":  4,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "与杜莎妮契合度高的枪械，针对杜莎妮的作战偏好进行了一定的改造，穿透力以及射击精度都有不同幅度的提升。",
                          "image":  "img/weapon/Weapon_KSVK_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_KSVK_4_1024.png",
                          "stats":  {
                                        "攻击":  "251"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "若产生克制，则无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，产生冷凝克制时，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "裁决时刻 Lv.1",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "裁决时刻 Lv.2",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "裁决时刻 Lv.3",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "裁决时刻 Lv.4",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "裁决时刻 Lv.5",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "裁决时刻 Lv.6",
                                              "text":  "对处于冷凝类地格上的目标，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_M1931_4":  {
                           "id":  "Weapon_M1931_4",
                           "name":  "索米",
                           "rank":  4,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与索米契合度高的枪械，针对索米的作战偏好进行了一定的改造，在减轻枪械重量的同时提高了耐用度，射击威力也有所提升。",
                           "image":  "img/weapon/Weapon_M1931_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1931_4_1024.png",
                           "stats":  {
                                         "攻击":  "223"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "雪中送炭 Lv.1",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "雪中送炭 Lv.2",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "雪中送炭 Lv.3",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "雪中送炭 Lv.4",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "雪中送炭 Lv.5",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           },
                                           {
                                               "name":  "雪中送炭 Lv.6",
                                               "text":  "施加\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e护盾\u003c/span\u003e\u003c/span\u003e的效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。为友方单位（不包含自身）施加增益效果时，治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e2回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e护盾:\u003c/span\u003e 能吸收一定量的伤害。护盾之间无法叠加，但可以进行覆盖，当后施加的护盾持续回合数或者伤害吸收量大于前者时，则进行覆盖。护盾包含\u003cspan style=\"color:#3487e0\"\u003e寒霜屏障\u003c/span\u003e、\u003cspan style=\"color:#3487e0\"\u003e本金防护\u003c/span\u003e等效果。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         }
                                     ]
                       },
    "Weapon_Ullr_4":  {
                          "id":  "Weapon_Ullr_4",
                          "name":  "羽锋",
                          "rank":  4,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "与乌尔丽德契合度高的近战武器，针对乌尔丽德的作战偏好进行了一定的改造，更加锋利、耐用。",
                          "image":  "img/weapon/Weapon_Ullr_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Ullr_4_1024.png",
                          "stats":  {
                                        "攻击":  "244"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "主动攻击后自身获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "捕狩 Lv.1",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "捕狩 Lv.2",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "捕狩 Lv.3",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "捕狩 Lv.4",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "捕狩 Lv.5",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "捕狩 Lv.6",
                                              "text":  "对未受掩体保护的敌方目标造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                        }
                                    ]
                      },
    "Weapon_WA2000_4":  {
                            "id":  "Weapon_WA2000_4",
                            "name":  "瓦尔特2000",
                            "rank":  4,
                            "tags":  [
                                         "狙击枪",
                                         "重型弹"
                                     ],
                            "intro":  "与玛绮朵契合度高的枪械，针对玛绮朵的作战偏好进行了一定的改造，更加轻便，射击准度也有所提升。",
                            "image":  "img/weapon/Weapon_WA2000_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_WA2000_4_1024.png",
                            "stats":  {
                                          "攻击":  "278"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "攻击无视目标\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御，若目标拥有冷凝类减益，额外无视其\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e防御。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "全盛态势 Lv.1",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "全盛态势 Lv.2",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "全盛态势 Lv.3",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "全盛态势 Lv.4",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "全盛态势 Lv.5",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "全盛态势 Lv.6",
                                                "text":  "若生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则回合外伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-04-30 11:00:00 ~ 2024-06-05 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_OTS14_4":  {
                           "id":  "Weapon_OTS14_4",
                           "name":  "格洛利娅",
                           "rank":  4,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "与闪电契合度高的枪械，针对闪电的作战偏好进行了一定的改造，在保证枪支便携性的同时，提升了威力和连射效果。",
                           "image":  "img/weapon/Weapon_OTS14_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_OTS14_4_1024.png",
                           "stats":  {
                                         "攻击":  "216"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "行动结束时，若自身拥有\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e或以上\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e，则恢复\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "逆境转袭 Lv.1",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e4次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "逆境转袭 Lv.2",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "逆境转袭 Lv.3",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "逆境转袭 Lv.4",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "逆境转袭 Lv.5",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e2次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           },
                                           {
                                               "name":  "逆境转袭 Lv.6",
                                               "text":  "每施加\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e掩护\u003c/span\u003e\u003c/span\u003e效果，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e掩护:\u003c/span\u003e 获得稳态保护，使自身受到的稳态伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e；每受到一次稳态伤害消耗\u003cspan style=\"color:#f26c1c\"\u003e1层\u003c/span\u003e，至多叠加\u003cspan style=\"color:#f26c1c\"\u003e3层\u003c/span\u003e。增益效果。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-04-09 17:00:00 ~ 2024-04-30 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_Pecheng_4":  {
                             "id":  "Weapon_Pecheng_4",
                             "name":  "佩切涅",
                             "rank":  4,
                             "tags":  [
                                          "机枪",
                                          "重型弹"
                                      ],
                             "intro":  "与佩里缇亚契合度高的枪械，针对佩里缇亚的作战偏好进行了一定的改造，提升了火力和便携性，在佩里缇亚手中威力更强。",
                             "image":  "img/weapon/Weapon_Pecheng_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Pecheng_4_1024.png",
                             "stats":  {
                                           "攻击":  "251"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "若造成范围伤害，则施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "共聚焦 Lv.1",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e4个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "共聚焦 Lv.2",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "共聚焦 Lv.3",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "共聚焦 Lv.4",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e3个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "共聚焦 Lv.5",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e2个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "共聚焦 Lv.6",
                                                 "text":  "攻击若命中\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e目标，则下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升",
                                               "time":  "2024-03-26 11:00:00 ~ 2024-04-09 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_QBZ97_4":  {
                           "id":  "Weapon_QBZ97_4",
                           "name":  "九七式",
                           "rank":  4,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "与绛雨契合度高的枪械，针对绛雨的作战偏好进行了一定的改造，枪身结构更加坚固，威力也有不小的提升。",
                           "image":  "img/weapon/Weapon_QBZ97_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_QBZ97_4_1024.png",
                           "stats":  {
                                         "攻击":  "251"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "施加异位属性类减益效果后，自身随机获得\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "摧锋 Lv.1",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "摧锋 Lv.2",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "摧锋 Lv.3",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "摧锋 Lv.4",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "摧锋 Lv.5",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "摧锋 Lv.6",
                                               "text":  "若自身拥有增益效果，则造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若为电导类增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-03-26 11:00:00 ~ 2024-04-30 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-08-26 08:00:00 ~ 2025-09-09 07:59:59"
                                         }
                                     ]
                       },
    "Weapon_M1891_4":  {
                           "id":  "Weapon_M1891_4",
                           "name":  "莫辛-纳甘",
                           "rank":  4,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "与莫辛纳甘契合度高的枪械，针对莫辛纳甘的作战偏好进行了一定的改造，精简的枪身设计便于维护，使用起来也更加轻松。",
                           "image":  "img/weapon/Weapon_M1891_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1891_4_1024.png",
                           "stats":  {
                                         "攻击":  "272"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "趁热打铁 Lv.1",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "趁热打铁 Lv.2",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "趁热打铁 Lv.3",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "趁热打铁 Lv.4",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "趁热打铁 Lv.5",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "趁热打铁 Lv.6",
                                               "text":  "若目标拥有异位属性类减益效果，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升β",
                                             "time":  "2024-03-05 17:00:00 ~ 2024-03-26 10:59:59"
                                         }
                                     ]
                       },
    "Weapon_UMP9_4":  {
                          "id":  "Weapon_UMP9_4",
                          "name":  "通用冲锋枪9",
                          "rank":  4,
                          "tags":  [
                                       "冲锋枪",
                                       "轻型弹"
                                   ],
                          "intro":  "与莱娜契合度高的枪械，针对莱娜的作战偏好进行了一定的改造，保证射击精度的同时，射速也有所提升。",
                          "image":  "img/weapon/Weapon_UMP9_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_UMP9_4_1024.png",
                          "stats":  {
                                        "攻击":  "223"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "造成伤害时，目标每拥有1个减益效果，无视其\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e的防御，至多\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "锐牙 Lv.1",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "锐牙 Lv.2",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "锐牙 Lv.3",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "锐牙 Lv.4",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "锐牙 Lv.5",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "锐牙 Lv.6",
                                              "text":  "对拥有减益的目标造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，若为电导类减益，则造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升α",
                                            "time":  "2024-02-23 11:00:00 ~ 2024-03-26 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                        }
                                    ]
                      },
    "Weapon_QBZ-191_4":  {
                             "id":  "Weapon_QBZ-191_4",
                             "name":  "一九一式",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与琼玖契合度高的枪械，针对琼玖的作战偏好进行了一定的改造，射击时更加稳定，也更精准。",
                             "image":  "img/weapon/Weapon_QBZ-191_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_QBZ-191_4_1024.png",
                             "stats":  {
                                           "攻击":  "265"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动结束时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "摧锋 Lv.1",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，持续到行动开始。"
                                             },
                                             {
                                                 "name":  "摧锋 Lv.2",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e，持续到行动开始。"
                                             },
                                             {
                                                 "name":  "摧锋 Lv.3",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e，持续到行动开始。"
                                             },
                                             {
                                                 "name":  "摧锋 Lv.4",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e，持续到行动开始。"
                                             },
                                             {
                                                 "name":  "摧锋 Lv.5",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e，持续到行动开始。"
                                             },
                                             {
                                                 "name":  "摧锋 Lv.6",
                                                 "text":  "获得增益效果时，造成伤害增加\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e，持续到行动开始。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2024-02-08 17:00:00 ~ 2024-02-23 10:59:59"
                                           }
                                       ]
                         },
    "Weapon_G36_4":  {
                         "id":  "Weapon_G36_4",
                         "name":  "格威尔36",
                         "rank":  4,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "与桑朵莱希契合度高的枪械，针对桑朵莱希的作战偏好进行了一定的改造，进一步减轻了枪身重量。",
                         "image":  "img/weapon/Weapon_G36_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G36_4_1024.png",
                         "stats":  {
                                       "攻击":  "230"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "治疗后，自身恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "双效提振 Lv.1",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "双效提振 Lv.2",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "双效提振 Lv.3",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e70%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "双效提振 Lv.4",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "双效提振 Lv.5",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e90%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "双效提振 Lv.6",
                                             "text":  "攻击或者主动治疗时，对生命值低于\u003cspan style=\"color:#f26c1c\"\u003e100%\u003c/span\u003e的目标，造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升α",
                                           "time":  "2024-01-23 11:00:00 ~ 2024-02-23 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-05-14 17:00:00 ~ 2024-06-05 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_ROBINSONXCR_4":  {
                                 "id":  "Weapon_ROBINSONXCR_4",
                                 "name":  "罗宾逊先进步枪",
                                 "rank":  4,
                                 "tags":  [
                                              "突击步枪",
                                              "中型弹"
                                          ],
                                 "intro":  "与夏克里契合度高的枪械，针对夏克里的作战偏好进行了一定的改造，枪支的平衡性有了改善，射击精度也有提升。",
                                 "image":  "img/weapon/Weapon_ROBINSONXCR_4_1024.png",
                                 "thumbnail":  "img/weapon/thumb/Weapon_ROBINSONXCR_4_1024.png",
                                 "stats":  {
                                               "攻击":  "272"
                                           },
                                 "bond":  {
                                              "id":  "",
                                              "name":  "",
                                              "text":  ""
                                          },
                                 "trait":  {
                                               "label":  "特质",
                                               "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                           },
                                 "effects":  [
                                                 {
                                                     "name":  "聚光灯 Lv.1",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "聚光灯 Lv.2",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "聚光灯 Lv.3",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "聚光灯 Lv.4",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "聚光灯 Lv.5",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "聚光灯 Lv.6",
                                                     "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e3点\u003c/span\u003e导染指数，下一次主动技能造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                                 }
                                             ],
                                 "pools":  [
                                               {
                                                   "name":  "军备提升α",
                                                   "time":  "2024-01-23 11:00:00 ~ 2024-02-23 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升β",
                                                   "time":  "2024-03-05 17:00:00 ~ 2024-03-26 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-05-14 17:00:00 ~ 2024-06-05 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-08-26 08:00:00 ~ 2025-09-09 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                               }
                                           ]
                             },
    "Weapon_Blade_4":  {
                           "id":  "Weapon_Blade_4",
                           "name":  "野兔",
                           "rank":  4,
                           "tags":  [
                                        "刀",
                                        "近战"
                                    ],
                           "intro":  "与克罗丽科契合度高的近战武器，针对克罗丽科的作战偏好进行了一定的改造，涂装上采用了与克罗丽科相配的颜色。",
                           "image":  "img/weapon/Weapon_Blade_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Blade_4_1024.png",
                           "stats":  {
                                         "攻击":  "244"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "主动攻击每造成\u003cspan style=\"color:#f26c1c\"\u003e3次\u003c/span\u003e击杀，则获得\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e行动追加\u003c/span\u003e\u003c/span\u003e（每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e）。\n\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "原野猎手 Lv.1",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e6格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "原野猎手 Lv.2",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e6格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "原野猎手 Lv.3",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e6格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "原野猎手 Lv.4",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "原野猎手 Lv.5",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e4格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "原野猎手 Lv.6",
                                               "text":  "攻击前，若移动超过\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，此次伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升α",
                                             "time":  "2024-01-23 11:00:00 ~ 2024-02-23 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升β",
                                             "time":  "2024-03-05 17:00:00 ~ 2024-03-26 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-04-30 11:00:00 ~ 2024-06-05 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_SPAS-12_4":  {
                             "id":  "Weapon_SPAS-12_4",
                             "name":  "特殊用途自动型霰弹枪",
                             "rank":  4,
                             "tags":  [
                                          "霰弹枪",
                                          "霰弹"
                                      ],
                             "intro":  "与塞布丽娜契合度高的枪械，针对塞布丽娜的作战偏好进行了一定的改造，重量更轻，更加便于携带和使用。",
                             "image":  "img/weapon/Weapon_SPAS-12_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_SPAS-12_4_1024.png",
                             "stats":  {
                                           "攻击":  "230"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "谢谢款待 Lv.1",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若受到治疗后的生命值回满，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "谢谢款待 Lv.2",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若受到治疗后的生命值大于\u003cspan style=\"color:#f26c1c\"\u003e90%\u003c/span\u003e，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "谢谢款待 Lv.3",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若受到治疗后的生命值大于\u003cspan style=\"color:#f26c1c\"\u003e80%\u003c/span\u003e，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "谢谢款待 Lv.4",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若受到治疗后的生命值大于\u003cspan style=\"color:#f26c1c\"\u003e70%\u003c/span\u003e，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "谢谢款待 Lv.5",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若受到治疗后的生命值大于\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "谢谢款待 Lv.6",
                                                 "text":  "受到治疗后，自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若受到治疗后的生命值大于\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e，则主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2024-01-16 17:00:00 ~ 2024-01-30 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_MP7_4":  {
                         "id":  "Weapon_MP7_4",
                         "name":  "黑科赫7",
                         "rank":  4,
                         "tags":  [
                                      "冲锋枪",
                                      "轻型弹"
                                  ],
                         "intro":  "与奇塔契合度高的枪械，针对奇塔的作战偏好进行了一定的改造，枪身小巧、重量极轻，但射击威力却十分强大。",
                         "image":  "img/weapon/Weapon_MP7_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_MP7_4_1024.png",
                         "stats":  {
                                       "攻击":  "237"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "若移动\u003cspan style=\"color:#f26c1c\"\u003e5格\u003c/span\u003e及以上，则下次行动开始时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e移动提升II\u003c/span\u003e\u003c/span\u003e，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e移动提升II:\u003c/span\u003e 行动力提高\u003cspan style=\"color:#f26c1c\"\u003e2格\u003c/span\u003e。增益效果。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "有益发明 Lv.1",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "有益发明 Lv.2",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "有益发明 Lv.3",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "有益发明 Lv.4",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "有益发明 Lv.5",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "有益发明 Lv.6",
                                             "text":  "为友方目标施加增益效果时，使自身下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升β",
                                           "time":  "2024-01-16 17:00:00 ~ 2024-01-30 16:59:59"
                                       },
                                       {
                                           "name":  "军备提升β",
                                           "time":  "2024-02-08 17:00:00 ~ 2024-02-23 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-03-26 11:00:00 ~ 2024-04-30 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                       }
                                   ]
                     },
    "Weapon_OM50_4":  {
                          "id":  "Weapon_OM50_4",
                          "name":  "复仇女神",
                          "rank":  4,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "与纳美西丝契合度高的枪械，针对纳美西丝的作战偏好进行了一定的改造，威力和精准度得到了进一步提升。",
                          "image":  "img/weapon/Weapon_OM50_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_OM50_4_1024.png",
                          "stats":  {
                                        "攻击":  "278"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "攻击无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数，拥有\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e洞察\u003c/span\u003e\u003c/span\u003e时，额外无视\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。\n\n\u003cspan style=\"color:#3487e0\"\u003e洞察:\u003c/span\u003e 制胜技能的射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e。增益效果。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "殁兆宣祷 Lv.1",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e90%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "殁兆宣祷 Lv.2",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e70%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "殁兆宣祷 Lv.3",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e50%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "殁兆宣祷 Lv.4",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "殁兆宣祷 Lv.5",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "殁兆宣祷 Lv.6",
                                              "text":  "若目标当前生命值比例大于\u003cspan style=\"color:#f26c1c\"\u003e30%\u003c/span\u003e，则对其造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [
                                        {
                                            "name":  "军备提升β",
                                            "time":  "2024-01-16 17:00:00 ~ 2024-01-30 16:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-03-26 11:00:00 ~ 2024-04-30 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-07-29 06:00:00 ~ 2025-08-19 04:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                        },
                                        {
                                            "name":  "军备提升",
                                            "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                        }
                                    ]
                      },
    "Weapon_QBZ-95_4":  {
                            "id":  "Weapon_QBZ-95_4",
                            "name":  "九五式",
                            "rank":  4,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "与黛烟契合度高的枪械，针对黛烟的作战偏好进行了一定的改造，更加轻便，稳定性也有所提升。",
                            "image":  "img/weapon/Weapon_QBZ-95_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_QBZ-95_4_1024.png",
                            "stats":  {
                                          "攻击":  "244"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "扬声 Lv.1",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "扬声 Lv.2",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "扬声 Lv.3",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "扬声 Lv.4",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "扬声 Lv.5",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "扬声 Lv.6",
                                                "text":  "行动开始时，若有额外行动力，则下一次造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [
                                          {
                                              "name":  "军备提升α",
                                              "time":  "2023-12-25 17:00:00 ~ 2024-01-22 16:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2024-04-09 17:00:00 ~ 2024-04-30 10:59:59"
                                          },
                                          {
                                              "name":  "军备提升",
                                              "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                          }
                                      ]
                        },
    "Weapon_M1895_4":  {
                           "id":  "Weapon_M1895_4",
                           "name":  "纳甘左轮",
                           "rank":  4,
                           "tags":  [
                                        "手枪",
                                        "轻型弹"
                                    ],
                           "intro":  "与纳甘契合度高的枪械，针对纳甘的作战偏好进行了一定的改造，子弹初速更高，也更加耐用。",
                           "image":  "img/weapon/Weapon_M1895_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1895_4_1024.png",
                           "stats":  {
                                         "攻击":  "244"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "回合外攻击射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，造成的稳态伤害增加\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "热效递进 Lv.1",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。每回合至多触发1次。"
                                           },
                                           {
                                               "name":  "热效递进 Lv.2",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。每回合至多触发1次。"
                                           },
                                           {
                                               "name":  "热效递进 Lv.3",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。每回合至多触发1次。"
                                           },
                                           {
                                               "name":  "热效递进 Lv.4",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。每回合至多触发1次。"
                                           },
                                           {
                                               "name":  "热效递进 Lv.5",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。每回合至多触发1次。"
                                           },
                                           {
                                               "name":  "热效递进 Lv.6",
                                               "text":  "施加减益效果时，下一次主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若施加减益为防御类减益，则额外施加\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e个减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e，且下一次主动技能造成伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。每回合至多触发1次。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升α",
                                             "time":  "2023-12-25 17:00:00 ~ 2024-01-22 16:59:59"
                                         },
                                         {
                                             "name":  "军备提升β",
                                             "time":  "2024-02-08 17:00:00 ~ 2024-02-23 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-05-14 17:00:00 ~ 2024-06-05 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-08-26 08:00:00 ~ 2025-09-09 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_TaurusCurve_4":  {
                                 "id":  "Weapon_TaurusCurve_4",
                                 "name":  "金牛座曲线",
                                 "rank":  4,
                                 "tags":  [
                                              "手枪",
                                              "轻型弹"
                                          ],
                                 "intro":  "与寇尔芙契合度高的枪械，针对寇尔芙的作战偏好进行了一定的改造，更加实用、小巧、便捷，威力也有所提升。",
                                 "image":  "img/weapon/Weapon_TaurusCurve_4_1024.png",
                                 "thumbnail":  "img/weapon/thumb/Weapon_TaurusCurve_4_1024.png",
                                 "stats":  {
                                               "攻击":  "209"
                                           },
                                 "bond":  {
                                              "id":  "",
                                              "name":  "",
                                              "text":  ""
                                          },
                                 "trait":  {
                                               "label":  "特质",
                                               "text":  "普通攻击射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数。"
                                           },
                                 "effects":  [
                                                 {
                                                     "name":  "灵巧后援 Lv.1",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                 },
                                                 {
                                                     "name":  "灵巧后援 Lv.2",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                 },
                                                 {
                                                     "name":  "灵巧后援 Lv.3",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                 },
                                                 {
                                                     "name":  "灵巧后援 Lv.4",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e稳态指数。"
                                                 },
                                                 {
                                                     "name":  "灵巧后援 Lv.5",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。"
                                                 },
                                                 {
                                                     "name":  "灵巧后援 Lv.6",
                                                     "text":  "造成伤害后，下一次主动治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e；若有友方单位陷入稳态崩溃，则自身下一次主动治疗时额外恢复\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e稳态指数。"
                                                 }
                                             ],
                                 "pools":  [
                                               {
                                                   "name":  "军备提升α",
                                                   "time":  "2023-12-25 17:00:00 ~ 2024-01-22 16:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-04-09 17:00:00 ~ 2024-04-30 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-04-30 11:00:00 ~ 2024-06-05 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-06-25 11:00:00 ~ 2024-07-16 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-08-06 11:00:00 ~ 2024-08-27 04:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-09-19 11:00:00 ~ 2024-10-09 10:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-10-29 08:00:00 ~ 2024-11-19 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2024-12-10 05:00:00 ~ 2024-12-31 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-01-21 08:00:00 ~ 2025-02-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-03-04 08:00:00 ~ 2025-03-25 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-04-15 08:00:00 ~ 2025-05-06 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-05-27 08:00:00 ~ 2025-06-17 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-07-08 06:00:00 ~ 2025-07-29 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-08-19 05:00:00 ~ 2025-09-09 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-09-30 06:00:00 ~ 2025-10-21 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-11-11 08:00:00 ~ 2025-12-02 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2025-12-23 08:00:00 ~ 2026-01-13 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-02-03 08:00:00 ~ 2026-02-24 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-03-17 06:00:00 ~ 2026-04-07 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-04-28 08:00:00 ~ 2026-05-19 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-06-09 08:00:00 ~ 2026-06-30 05:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-07-21 08:00:00 ~ 2026-08-11 07:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-09-01 08:00:00 ~ 2026-09-22 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                               },
                                               {
                                                   "name":  "军备提升",
                                                   "time":  "2026-10-13 09:00:00 ~ 2026-11-03 08:59:59"
                                               }
                                           ]
                             },
    "Weapon_AK-Alfa_4":  {
                             "id":  "Weapon_AK-Alfa_4",
                             "name":  "卡拉什-阿尔法",
                             "rank":  4,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "与托洛洛契合度高的枪械，针对托洛洛的作战偏好进行了一定的改造，提高了射击精度，也能够应对多种作战环境。",
                             "image":  "img/weapon/Weapon_AK-Alfa_4_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_AK-Alfa_4_1024.png",
                             "stats":  {
                                           "攻击":  "272"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "特质",
                                           "text":  "行动开始时，若自身满生命值，则随机获得1个增益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                       },
                             "effects":  [
                                             {
                                                 "name":  "耐行 Lv.1",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "耐行 Lv.2",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。"
                                             },
                                             {
                                                 "name":  "耐行 Lv.3",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "耐行 Lv.4",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "耐行 Lv.5",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             },
                                             {
                                                 "name":  "耐行 Lv.6",
                                                 "text":  "获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e再动\u003c/span\u003e\u003c/span\u003e时，精准类主动技能造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e再动:\u003c/span\u003e 包含\u003cspan style=\"color:#3487e0\"\u003e行动追加\u003c/span\u003e，\u003cspan style=\"color:#3487e0\"\u003e移动追加\u003c/span\u003e和\u003cspan style=\"color:#3487e0\"\u003e指令追加\u003c/span\u003e。\n\u003cspan style=\"color:#3487e0\"\u003e行动追加:\u003c/span\u003e 可以进行一次行动。\n\u003cspan style=\"color:#3487e0\"\u003e指令追加:\u003c/span\u003e 可以执行除移动以外的其他指令。"
                                             }
                                         ],
                             "pools":  [
                                           {
                                               "name":  "军备提升β",
                                               "time":  "2023-12-21 10:00:00 ~ 2024-01-04 16:59:59"
                                           }
                                       ]
                         },
    "Weapon_Galil_4":  {
                           "id":  "Weapon_Galil_4",
                           "name":  "加利尔轻机枪",
                           "rank":  4,
                           "tags":  [
                                        "机枪",
                                        "重型弹"
                                    ],
                           "intro":  "与莉塔拉契合度高的枪械，针对莉塔拉的作战偏好进行了一定的改造，进一步提升了对恶劣环境的适应性，使用更为舒适。",
                           "image":  "img/weapon/Weapon_Galil_4_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Galil_4_1024.png",
                           "stats":  {
                                         "攻击":  "265"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "特质",
                                         "text":  "若造成范围伤害，则施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e减益效果，持续\u003cspan style=\"color:#f26c1c\"\u003e1回合\u003c/span\u003e。"
                                     },
                           "effects":  [
                                           {
                                               "name":  "慎行 Lv.1",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "慎行 Lv.2",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "慎行 Lv.3",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "慎行 Lv.4",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "慎行 Lv.5",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "慎行 Lv.6",
                                               "text":  "若主动攻击时剩余行动力大于\u003cspan style=\"color:#f26c1c\"\u003e3格\u003c/span\u003e，则造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。若目标拥有减益效果，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [
                                         {
                                             "name":  "军备提升β",
                                             "time":  "2023-12-21 10:00:00 ~ 2024-01-04 16:59:59"
                                         },
                                         {
                                             "name":  "军备提升α",
                                             "time":  "2024-02-23 11:00:00 ~ 2024-03-26 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-03-26 11:00:00 ~ 2024-04-09 16:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-07-29 06:00:00 ~ 2025-08-26 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                         },
                                         {
                                             "name":  "军备提升",
                                             "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                         }
                                     ]
                       },
    "Weapon_APS_4":  {
                         "id":  "Weapon_APS_4",
                         "name":  "斯捷奇金",
                         "rank":  4,
                         "tags":  [
                                      "手枪",
                                      "轻型弹"
                                  ],
                         "intro":  "与科谢尼娅契合度高的枪械，针对科谢尼娅的作战偏好进行了一定的改造，枪身更加轻便，枪械精准度也得到了提升。",
                         "image":  "img/weapon/Weapon_APS_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_APS_4_1024.png",
                         "stats":  {
                                       "攻击":  "216"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "普通攻击射程增加\u003cspan style=\"color:#f26c1c\"\u003e1格\u003c/span\u003e，攻击后获得\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "激情消费 Lv.1",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e50%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         },
                                         {
                                             "name":  "激情消费 Lv.2",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e60%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         },
                                         {
                                             "name":  "激情消费 Lv.3",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e70%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         },
                                         {
                                             "name":  "激情消费 Lv.4",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e11%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e80%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         },
                                         {
                                             "name":  "激情消费 Lv.5",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e13%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e90%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         },
                                         {
                                             "name":  "激情消费 Lv.6",
                                             "text":  "为友方目标施加增益效果时，自身下一次主动技能治疗和造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e15%\u003c/span\u003e。若施加增益为攻击增益，则额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，\u003cspan style=\"color:#f26c1c\"\u003e100%概率\u003c/span\u003e为其额外施加\u003cspan style=\"color:#f26c1c\"\u003e1个\u003c/span\u003e增益效果，每回合至多触发\u003cspan style=\"color:#f26c1c\"\u003e1\u003c/span\u003e次。"
                                         }
                                     ],
                         "pools":  [
                                       {
                                           "name":  "军备提升β",
                                           "time":  "2023-12-21 10:00:00 ~ 2024-01-04 16:59:59"
                                       },
                                       {
                                           "name":  "军备提升α",
                                           "time":  "2024-02-23 11:00:00 ~ 2024-03-26 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-03-26 11:00:00 ~ 2024-04-09 16:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-06-05 11:00:00 ~ 2024-06-25 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-07-16 11:00:00 ~ 2024-08-06 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-08-27 05:00:00 ~ 2024-09-19 10:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-10-09 08:00:00 ~ 2024-10-29 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-11-19 08:00:00 ~ 2024-12-10 04:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2024-12-31 08:00:00 ~ 2025-01-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-02-11 08:00:00 ~ 2025-03-04 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-03-25 06:00:00 ~ 2025-04-15 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-05-06 06:00:00 ~ 2025-05-27 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-06-17 08:00:00 ~ 2025-07-08 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-07-29 06:00:00 ~ 2025-08-26 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-09-09 08:00:00 ~ 2025-09-30 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-10-21 08:00:00 ~ 2025-11-11 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2025-12-02 06:00:00 ~ 2025-12-23 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-01-13 08:00:00 ~ 2026-02-03 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-02-24 08:00:00 ~ 2026-03-17 05:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-04-07 08:00:00 ~ 2026-04-28 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-05-19 08:00:00 ~ 2026-06-09 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-06-30 06:00:00 ~ 2026-07-21 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-08-11 08:30:00 ~ 2026-09-01 07:59:59"
                                       },
                                       {
                                           "name":  "军备提升",
                                           "time":  "2026-09-22 09:00:00 ~ 2026-10-13 08:59:59"
                                       }
                                   ]
                     },
    "Weapon_Vepr12_4":  {
                            "id":  "Weapon_Vepr12_4",
                            "name":  "莫洛12",
                            "rank":  4,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "与维普蕾契合度高的枪械，针对维普蕾的作战偏好进行了一定的改造，是更加适合元气可爱偶像使用的“演出道具”。",
                            "image":  "img/weapon/Weapon_Vepr12_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vepr12_4_1024.png",
                            "stats":  {
                                          "攻击":  "230"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "盛装登场 Lv.1",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "盛装登场 Lv.2",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "盛装登场 Lv.3",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e7%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "盛装登场 Lv.4",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e8%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "盛装登场 Lv.5",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e9%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "盛装登场 Lv.6",
                                                "text":  "行动开始时，从精准或者范围增伤和导染类或者基础类增伤中随机获得\u003cspan style=\"color:#f26c1c\"\u003e2种\u003c/span\u003e，使造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_M26_4":  {
                         "id":  "Weapon_M26_4",
                         "name":  "拉赫蒂26型轻机枪",
                         "rank":  4,
                         "tags":  [
                                      "机枪",
                                      "重型弹"
                                  ],
                         "intro":  "与巴希达契合度高的枪械，针对巴希达的作战偏好进行了一定的改造，大幅增加了弹夹容量，提高了个体的战场压制能力。",
                         "image":  "img/weapon/Weapon_M26_4_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_M26_4_1024.png",
                         "stats":  {
                                       "攻击":  "223"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "特质",
                                       "text":  "攻击防御力\u003cspan style=\"color:#f26c1c\"\u003e小于等于0\u003c/span\u003e的敌方目标后，造成\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e固定稳态伤害。"
                                   },
                         "effects":  [
                                         {
                                             "name":  "机械天赋 Lv.1",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "机械天赋 Lv.2",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "机械天赋 Lv.3",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "机械天赋 Lv.4",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "机械天赋 Lv.5",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "机械天赋 Lv.6",
                                             "text":  "自身实体召唤物造成伤害和治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_SteyrTMP_4":  {
                              "id":  "Weapon_SteyrTMP_4",
                              "name":  "施泰尔冲锋手枪",
                              "rank":  4,
                              "tags":  [
                                           "冲锋枪",
                                           "轻型弹"
                                       ],
                              "intro":  "与哈卜茜契合度高的枪械，针对哈卜茜的作战偏好进行了一定的改造，增加了更多配件位，供她自行提升武器性能。",
                              "image":  "img/weapon/Weapon_SteyrTMP_4_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_SteyrTMP_4_1024.png",
                              "stats":  {
                                            "攻击":  "251"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "特质",
                                            "text":  "造成范围伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，若造成酸蚀范围伤害，则造成的范围伤害额外提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                              "effects":  [
                                              {
                                                  "name":  "算力再分配 Lv.1",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "算力再分配 Lv.2",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "算力再分配 Lv.3",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "算力再分配 Lv.4",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "算力再分配 Lv.5",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "算力再分配 Lv.6",
                                                  "text":  "回合外造成的\u003cspan style=\"color:#8679e8\"\u003e酸蚀伤害\u003c/span\u003e提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_CZ75_4":  {
                          "id":  "Weapon_CZ75_4",
                          "name":  "斯柯达75",
                          "rank":  4,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "与绯契合度高的枪械，针对绯的作战偏好进行了一定的改造，使用简便快捷，耐用性高。",
                          "image":  "img/weapon/Weapon_CZ75_4_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_CZ75_4_1024.png",
                          "stats":  {
                                        "攻击":  "244"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "特质",
                                        "text":  "使自身\u003cspan style=\"color:#f26c1c\"\u003e周围半径3格内\u003c/span\u003e的敌方单位受到的稳态伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e。"
                                    },
                          "effects":  [
                                          {
                                              "name":  "碎形 Lv.1",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "碎形 Lv.2",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "碎形 Lv.3",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "碎形 Lv.4",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "碎形 Lv.5",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "碎形 Lv.6",
                                              "text":  "对持有防御减益的目标造成的伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_M1_4":  {
                        "id":  "Weapon_M1_4",
                        "name":  "超级90",
                        "rank":  4,
                        "tags":  [
                                     "霰弹枪",
                                     "霰弹"
                                 ],
                        "intro":  "与洛塔契合度高的枪械，针对洛塔的作战偏好进行了一定的改造，在威力与火力持续性方面均有一定的提升。",
                        "image":  "img/weapon/Weapon_M1_4_1024.png",
                        "thumbnail":  "img/weapon/thumb/Weapon_M1_4_1024.png",
                        "stats":  {
                                      "攻击":  "278"
                                  },
                        "bond":  {
                                     "id":  "",
                                     "name":  "",
                                     "text":  ""
                                 },
                        "trait":  {
                                      "label":  "特质",
                                      "text":  "破坏掩体时，获得\u003cspan style=\"color:#3487e0\"\u003e\u003cspan class=\"border-b border-dashed border-blue-500\"\u003e速效屏障\u003c/span\u003e\u003c/span\u003e。\n\n\u003cspan style=\"color:#3487e0\"\u003e速效屏障:\u003c/span\u003e 受到的精准伤害降低\u003cspan style=\"color:#f26c1c\"\u003e60%\u003c/span\u003e，生效\u003cspan style=\"color:#f26c1c\"\u003e1次\u003c/span\u003e。增益效果。"
                                  },
                        "effects":  [
                                        {
                                            "name":  "展翼 Lv.1",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "展翼 Lv.2",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "展翼 Lv.3",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "展翼 Lv.4",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "展翼 Lv.5",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e2点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "展翼 Lv.6",
                                            "text":  "每消耗\u003cspan style=\"color:#f26c1c\"\u003e1点\u003c/span\u003e导染指数，造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e，至多提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                        }
                                    ],
                        "pools":  [

                                  ]
                    },
    "Weapon_PPSh41_4":  {
                            "id":  "Weapon_PPSh41_4",
                            "name":  "波波沙冲锋枪",
                            "rank":  4,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "与波波沙契合度高的枪械，针对波波沙的作战偏好进行了一定的改造，材质不变，但枪身更加坚固。",
                            "image":  "img/weapon/Weapon_PPSh41_4_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_PPSh41_4_1024.png",
                            "stats":  {
                                          "攻击":  "265"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "特质",
                                          "text":  "造成伤害时，目标每拥有1个减益效果，无视其\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e的防御，至多\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                      },
                            "effects":  [
                                            {
                                                "name":  "高级通缉 Lv.1",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e10%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "高级通缉 Lv.2",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e12%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "高级通缉 Lv.3",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e14%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "高级通缉 Lv.4",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e16%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "高级通缉 Lv.5",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e18%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "高级通缉 Lv.6",
                                                "text":  "对大型目标造成的精准伤害提高\u003cspan style=\"color:#f26c1c\"\u003e20%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_G36_3":  {
                         "id":  "Weapon_G36_3",
                         "name":  "旧式格威尔36",
                         "rank":  3,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "从暗商处采购的廉价武器，保养不佳，在使用前最好进行全面检查。",
                         "image":  "img/weapon/Weapon_G36_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G36_3_1024.png",
                         "stats":  {
                                       "攻击":  "160"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "援助武装 Lv.1",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.2",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.3",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.4",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.5",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.6",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_QBZ-95_3":  {
                            "id":  "Weapon_QBZ-95_3",
                            "name":  "旧式九五式",
                            "rank":  3,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，枪体布满修理痕迹，但还能正常击发。",
                            "image":  "img/weapon/Weapon_QBZ-95_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_QBZ-95_3_1024.png",
                            "stats":  {
                                          "攻击":  "174"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_M1895_3":  {
                           "id":  "Weapon_M1895_3",
                           "name":  "旧式纳甘左轮",
                           "rank":  3,
                           "tags":  [
                                        "手枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，表面锈迹斑斑，好在仔细保养过后还能正常使用。",
                           "image":  "img/weapon/Weapon_M1895_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1895_3_1024.png",
                           "stats":  {
                                         "攻击":  "174"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_SPAS-12_3":  {
                             "id":  "Weapon_SPAS-12_3",
                             "name":  "旧式特殊用途自动型霰弹枪",
                             "rank":  3,
                             "tags":  [
                                          "霰弹枪",
                                          "霰弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，磨损程度很高，看起来快要彻底报废了。",
                             "image":  "img/weapon/Weapon_SPAS-12_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_SPAS-12_3_1024.png",
                             "stats":  {
                                           "攻击":  "160"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "防御武装 Lv.1",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.2",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.3",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.4",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.5",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.6",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_QBZ-191_3":  {
                             "id":  "Weapon_QBZ-191_3",
                             "name":  "旧式一九一式",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，枪体上布满划痕，似乎久经风霜。",
                             "image":  "img/weapon/Weapon_QBZ-191_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_QBZ-191_3_1024.png",
                             "stats":  {
                                           "攻击":  "188"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_MP7_3":  {
                         "id":  "Weapon_MP7_3",
                         "name":  "旧式黑科赫7",
                         "rank":  3,
                         "tags":  [
                                      "冲锋枪",
                                      "轻型弹"
                                  ],
                         "intro":  "奇塔的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                         "image":  "img/weapon/Weapon_MP7_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_MP7_3_1024.png",
                         "stats":  {
                                       "攻击":  "167"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "火力武装 Lv.1",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.2",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.3",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.4",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.5",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.6",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_AK-Alfa_3":  {
                             "id":  "Weapon_AK-Alfa_3",
                             "name":  "旧式卡拉什-阿尔法",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "托洛洛的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                             "image":  "img/weapon/Weapon_AK-Alfa_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_AK-Alfa_3_1024.png",
                             "stats":  {
                                           "攻击":  "188"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_ROBINSONXCR_3":  {
                                 "id":  "Weapon_ROBINSONXCR_3",
                                 "name":  "旧式罗宾逊先进步枪",
                                 "rank":  3,
                                 "tags":  [
                                              "突击步枪",
                                              "中型弹"
                                          ],
                                 "intro":  "夏克里的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                                 "image":  "img/weapon/Weapon_ROBINSONXCR_3_1024.png",
                                 "thumbnail":  "img/weapon/thumb/Weapon_ROBINSONXCR_3_1024.png",
                                 "stats":  {
                                               "攻击":  "188"
                                           },
                                 "bond":  {
                                              "id":  "",
                                              "name":  "",
                                              "text":  ""
                                          },
                                 "trait":  {
                                               "label":  "",
                                               "text":  ""
                                           },
                                 "effects":  [
                                                 {
                                                     "name":  "火力武装 Lv.1",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "火力武装 Lv.2",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "火力武装 Lv.3",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "火力武装 Lv.4",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "火力武装 Lv.5",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "火力武装 Lv.6",
                                                     "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                                 }
                                             ],
                                 "pools":  [

                                           ]
                             },
    "Weapon_Pecheng_3":  {
                             "id":  "Weapon_Pecheng_3",
                             "name":  "旧式佩切涅",
                             "rank":  3,
                             "tags":  [
                                          "机枪",
                                          "重型弹"
                                      ],
                             "intro":  "佩里缇亚的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                             "image":  "img/weapon/Weapon_Pecheng_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Pecheng_3_1024.png",
                             "stats":  {
                                           "攻击":  "174"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_Blade_3":  {
                           "id":  "Weapon_Blade_3",
                           "name":  "旧式野兔",
                           "rank":  3,
                           "tags":  [
                                        "刀",
                                        "近战"
                                    ],
                           "intro":  "克罗丽科的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                           "image":  "img/weapon/Weapon_Blade_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Blade_3_1024.png",
                           "stats":  {
                                         "攻击":  "174"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Vepr12_3":  {
                            "id":  "Weapon_Vepr12_3",
                            "name":  "旧式莫洛12",
                            "rank":  3,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "维普蕾的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                            "image":  "img/weapon/Weapon_Vepr12_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vepr12_3_1024.png",
                            "stats":  {
                                          "攻击":  "160"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_OTS14_3":  {
                           "id":  "Weapon_OTS14_3",
                           "name":  "旧式格洛利娅",
                           "rank":  3,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "闪电的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                           "image":  "img/weapon/Weapon_OTS14_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_OTS14_3_1024.png",
                           "stats":  {
                                         "攻击":  "153"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "防御武装 Lv.1",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "防御武装 Lv.2",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "防御武装 Lv.3",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "防御武装 Lv.4",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "防御武装 Lv.5",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "防御武装 Lv.6",
                                               "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_OM50_3":  {
                          "id":  "Weapon_OM50_3",
                          "name":  "旧式复仇女神",
                          "rank":  3,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "纳美西丝的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                          "image":  "img/weapon/Weapon_OM50_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_OM50_3_1024.png",
                          "stats":  {
                                        "攻击":  "195"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_TaurusCurve_3":  {
                                 "id":  "Weapon_TaurusCurve_3",
                                 "name":  "旧式金牛座曲线",
                                 "rank":  3,
                                 "tags":  [
                                              "手枪",
                                              "轻型弹"
                                          ],
                                 "intro":  "寇尔芙的训练专用制式武器，常用于小队配合训练，必要时也用于基础作战。",
                                 "image":  "img/weapon/Weapon_TaurusCurve_3_1024.png",
                                 "thumbnail":  "img/weapon/thumb/Weapon_TaurusCurve_3_1024.png",
                                 "stats":  {
                                               "攻击":  "146"
                                           },
                                 "bond":  {
                                              "id":  "",
                                              "name":  "",
                                              "text":  ""
                                          },
                                 "trait":  {
                                               "label":  "",
                                               "text":  ""
                                           },
                                 "effects":  [
                                                 {
                                                     "name":  "援助武装 Lv.1",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "援助武装 Lv.2",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "援助武装 Lv.3",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "援助武装 Lv.4",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "援助武装 Lv.5",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                                 },
                                                 {
                                                     "name":  "援助武装 Lv.6",
                                                     "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                                 }
                                             ],
                                 "pools":  [

                                           ]
                             },
    "Weapon_Igla_3":  {
                          "id":  "Weapon_Igla_3",
                          "name":  "旧式挽歌",
                          "rank":  3,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，弓弦需要更换，刀刃需要磨砺……不过，现在还可以勉强使用。",
                          "image":  "img/weapon/Weapon_Igla_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Igla_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "援助武装 Lv.1",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.2",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.3",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.4",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.5",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.6",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_Agent_3":  {
                           "id":  "Weapon_Agent_3",
                           "name":  "旧式黑棘",
                           "rank":  3,
                           "tags":  [
                                        "机枪",
                                        "重型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，以不俗的武力与新颖的外观引起了代理人的几分兴趣。",
                           "image":  "img/weapon/Weapon_Agent_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Agent_3_1024.png",
                           "stats":  {
                                         "攻击":  "202"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Cecilia_3":  {
                             "id":  "Weapon_Cecilia_3",
                             "name":  "旧式格威尔36-康派科特",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，年久失修，急需养护。",
                             "image":  "img/weapon/Weapon_Cecilia_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Cecilia_3_1024.png",
                             "stats":  {
                                           "攻击":  "188"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_Eagletta_3":  {
                              "id":  "Weapon_Eagletta_3",
                              "name":  "旧式沙漠之鹰",
                              "rank":  3,
                              "tags":  [
                                           "手枪",
                                           "轻型弹"
                                       ],
                              "intro":  "从暗商处采购的廉价武器，磨损严重，只能勉强使用。",
                              "image":  "img/weapon/Weapon_Eagletta_3_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Eagletta_3_1024.png",
                              "stats":  {
                                            "攻击":  "195"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "",
                                            "text":  ""
                                        },
                              "effects":  [
                                              {
                                                  "name":  "火力武装 Lv.1",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.2",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.3",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.4",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.5",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.6",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_Asteria_3":  {
                             "id":  "Weapon_Asteria_3",
                             "name":  "旧式阿玛莱特15型自动步枪",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，只能说勉强可以使用。",
                             "image":  "img/weapon/Weapon_Asteria_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Asteria_3_1024.png",
                             "stats":  {
                                           "攻击":  "174"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_Koleda_3":  {
                            "id":  "Weapon_Koleda_3",
                            "name":  "旧式12型突击步枪",
                            "rank":  3,
                            "tags":  [
                                         "突击步枪",
                                         "中型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，只能说勉强可以使用。",
                            "image":  "img/weapon/Weapon_Koleda_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Koleda_3_1024.png",
                            "stats":  {
                                          "攻击":  "181"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_Faelynn_3":  {
                             "id":  "Weapon_Faelynn_3",
                             "name":  "旧式格威尔41",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，性能尚可，可惜因为成本原因，早早被市场淘汰。",
                             "image":  "img/weapon/Weapon_Faelynn_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Faelynn_3_1024.png",
                             "stats":  {
                                           "攻击":  "188"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_Mityl_3":  {
                           "id":  "Weapon_Mityl_3",
                           "name":  "旧式90型单兵自卫武器",
                           "rank":  3,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，只能说勉强可以使用。",
                           "image":  "img/weapon/Weapon_Mityl_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Mityl_3_1024.png",
                           "stats":  {
                                         "攻击":  "188"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Soppo_3":  {
                           "id":  "Weapon_Soppo_3",
                           "name":  "旧式特殊模组战术步枪",
                           "rank":  3,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，虽然可以勉强使用，但是气动装置老化严重，容易出现供弹故障。",
                           "image":  "img/weapon/Weapon_Soppo_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Soppo_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_BlackOTs14_3":  {
                                "id":  "Weapon_BlackOTs14_3",
                                "name":  "旧式闪电-3",
                                "rank":  3,
                                "tags":  [
                                             "突击步枪",
                                             "中型弹"
                                         ],
                                "intro":  "污染区常见的旧式突击步枪，布满了磕碰与锈迹，似乎经历过一段缺乏保养的仓促时光。",
                                "image":  "img/weapon/Weapon_BlackOTs14_3_1024.png",
                                "thumbnail":  "img/weapon/thumb/Weapon_BlackOTs14_3_1024.png",
                                "stats":  {
                                              "攻击":  "188"
                                          },
                                "bond":  {
                                             "id":  "",
                                             "name":  "",
                                             "text":  ""
                                         },
                                "trait":  {
                                              "label":  "",
                                              "text":  ""
                                          },
                                "effects":  [
                                                {
                                                    "name":  "火力武装 Lv.1",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "火力武装 Lv.2",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "火力武装 Lv.3",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "火力武装 Lv.4",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "火力武装 Lv.5",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                                },
                                                {
                                                    "name":  "火力武装 Lv.6",
                                                    "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                                }
                                            ],
                                "pools":  [

                                          ]
                            },
    "Weapon_Sextans_3":  {
                             "id":  "Weapon_Sextans_3",
                             "name":  "旧式夜蛇",
                             "rank":  3,
                             "tags":  [
                                          "刀",
                                          "近战"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，刃部已不再锋利，手感略显逊色。",
                             "image":  "img/weapon/Weapon_Sextans_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Sextans_3_1024.png",
                             "stats":  {
                                           "攻击":  "174"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "援助武装 Lv.1",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "援助武装 Lv.2",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "援助武装 Lv.3",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "援助武装 Lv.4",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "援助武装 Lv.5",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "援助武装 Lv.6",
                                                 "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_Liushih_3":  {
                             "id":  "Weapon_Liushih_3",
                             "name":  "旧式刘氏步枪",
                             "rank":  3,
                             "tags":  [
                                          "狙击枪",
                                          "重型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，虽然可以满足日常使用，但是部件磨损严重，容易出现供弹故障。",
                             "image":  "img/weapon/Weapon_Liushih_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_Liushih_3_1024.png",
                             "stats":  {
                                           "生命":  "473"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "火力武装 Lv.1",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.2",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.3",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.4",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.5",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "火力武装 Lv.6",
                                                 "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_MK23_3":  {
                          "id":  "Weapon_MK23_3",
                          "name":  "旧式马克23进攻型手枪",
                          "rank":  3,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，做工已经落后于时代。",
                          "image":  "img/weapon/Weapon_MK23_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_MK23_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "援助武装 Lv.1",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.2",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.3",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.4",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.5",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.6",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_M200_3":  {
                          "id":  "Weapon_M200_3",
                          "name":  "旧式干预200",
                          "rank":  3,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "黄区废弃据点中捡来的廉价武器，简单修理后，勉强能用。",
                          "image":  "img/weapon/Weapon_M200_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_M200_3_1024.png",
                          "stats":  {
                                        "攻击":  "202"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_DSR50_3":  {
                           "id":  "Weapon_DSR50_3",
                           "name":  "旧式因戈尔夫50",
                           "rank":  3,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "污染区常见的旧式武器，布满了磕碰与锈迹。",
                           "image":  "img/weapon/Weapon_DSR50_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_DSR50_3_1024.png",
                           "stats":  {
                                         "攻击":  "188"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Sakura_3":  {
                            "id":  "Weapon_Sakura_3",
                            "name":  "旧式樱花冲锋枪",
                            "rank":  3,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，耐用性低，但胜在火力尚可。",
                            "image":  "img/weapon/Weapon_Sakura_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Sakura_3_1024.png",
                            "stats":  {
                                          "攻击":  "181"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_DP12_3":  {
                          "id":  "Weapon_DP12_3",
                          "name":  "旧式12型双管霰弹枪",
                          "rank":  3,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，锈迹斑斑，好在勉强可用。",
                          "image":  "img/weapon/Weapon_DP12_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_DP12_3_1024.png",
                          "stats":  {
                                        "攻击":  "153"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "援助武装 Lv.1",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.2",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.3",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.4",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.5",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.6",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_AK15_3":  {
                          "id":  "Weapon_AK15_3",
                          "name":  "旧式卡拉什尼科夫突击步枪15",
                          "rank":  3,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，枪身布满划痕，枪管锈迹斑斑，幸运的是还可以继续发射。",
                          "image":  "img/weapon/Weapon_AK15_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AK15_3_1024.png",
                          "stats":  {
                                        "攻击":  "195"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_AN94_3":  {
                          "id":  "Weapon_AN94_3",
                          "name":  "旧式尼科诺夫突击步枪94",
                          "rank":  3,
                          "tags":  [
                                       "突击步枪",
                                       "中型弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，好在准头还行，总体来说足以满足日常使用。",
                          "image":  "img/weapon/Weapon_AN94_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AN94_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_PA15_3":  {
                          "id":  "Weapon_PA15_3",
                          "name":  "旧式15型自动手枪",
                          "rank":  3,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "黄区随处可见的廉价武器，十分破旧，只能勉强满足使用需求。",
                          "image":  "img/weapon/Weapon_PA15_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_PA15_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "援助武装 Lv.1",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.2",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.3",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.4",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.5",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "援助武装 Lv.6",
                                              "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_Welrodmk2_3":  {
                               "id":  "Weapon_Welrodmk2_3",
                               "name":  "旧式马克二型栓动手枪",
                               "rank":  3,
                               "tags":  [
                                            "手枪",
                                            "轻型弹"
                                        ],
                               "intro":  "污染区常见的旧式武器，缺乏保养，枪管内残留着不少射击的痕迹。",
                               "image":  "img/weapon/Weapon_Welrodmk2_3_1024.png",
                               "thumbnail":  "img/weapon/thumb/Weapon_Welrodmk2_3_1024.png",
                               "stats":  {
                                             "攻击":  "153"
                                         },
                               "bond":  {
                                            "id":  "",
                                            "name":  "",
                                            "text":  ""
                                        },
                               "trait":  {
                                             "label":  "",
                                             "text":  ""
                                         },
                               "effects":  [
                                               {
                                                   "name":  "援助武装 Lv.1",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "援助武装 Lv.2",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "援助武装 Lv.3",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "援助武装 Lv.4",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "援助武装 Lv.5",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                               },
                                               {
                                                   "name":  "援助武装 Lv.6",
                                                   "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                               }
                                           ],
                               "pools":  [

                                         ]
                           },
    "Weapon_Lewisgun_3":  {
                              "id":  "Weapon_Lewisgun_3",
                              "name":  "旧式刘易斯轻机枪",
                              "rank":  3,
                              "tags":  [
                                           "机枪",
                                           "重型弹"
                                       ],
                              "intro":  "从暗商处采购的廉价武器，沉重无比，长时间射击会导致过热和卡壳。",
                              "image":  "img/weapon/Weapon_Lewisgun_3_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Lewisgun_3_1024.png",
                              "stats":  {
                                            "攻击":  "195"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "",
                                            "text":  ""
                                        },
                              "effects":  [
                                              {
                                                  "name":  "火力武装 Lv.1",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.2",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.3",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.4",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.5",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.6",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_M26_3":  {
                         "id":  "Weapon_M26_3",
                         "name":  "旧式拉赫蒂26型轻机枪",
                         "rank":  3,
                         "tags":  [
                                      "机枪",
                                      "重型弹"
                                  ],
                         "intro":  "从暗商处采购的廉价武器，虽然时不时会出现卡弹的毛病，但勉强也能凑合着用。",
                         "image":  "img/weapon/Weapon_M26_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_M26_3_1024.png",
                         "stats":  {
                                       "攻击":  "153"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "火力武装 Lv.1",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.2",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.3",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.4",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.5",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.6",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_Phaetusa_3":  {
                              "id":  "Weapon_Phaetusa_3",
                              "name":  "旧式灰棘",
                              "rank":  3,
                              "tags":  [
                                           "刀",
                                           "近战"
                                       ],
                              "intro":  "从暗商处采购的廉价武器，多处磨损，但还能使用。",
                              "image":  "img/weapon/Weapon_Phaetusa_3_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_Phaetusa_3_1024.png",
                              "stats":  {
                                            "攻击":  "188"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "",
                                            "text":  ""
                                        },
                              "effects":  [
                                              {
                                                  "name":  "火力武装 Lv.1",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.2",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.3",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.4",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.5",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.6",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_AA12_3":  {
                          "id":  "Weapon_AA12_3",
                          "name":  "旧式艾奇逊12自动霰弹枪",
                          "rank":  3,
                          "tags":  [
                                       "霰弹枪",
                                       "霰弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，射速虽快但精度欠佳，长时间射击会导致过热和卡壳。",
                          "image":  "img/weapon/Weapon_AA12_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_AA12_3_1024.png",
                          "stats":  {
                                        "攻击":  "195"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_UMP40_3":  {
                           "id":  "Weapon_UMP40_3",
                           "name":  "旧式通用冲锋枪40",
                           "rank":  3,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，后坐力大，控制起来较为费劲。",
                           "image":  "img/weapon/Weapon_UMP40_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP40_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_RO635_3":  {
                           "id":  "Weapon_RO635_3",
                           "name":  "旧式柯尔特635型冲锋枪",
                           "rank":  3,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，成色和性能都不太好，但是勉强满足日常执勤的充数使用。",
                           "image":  "img/weapon/Weapon_RO635_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_RO635_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_UMP45_3":  {
                           "id":  "Weapon_UMP45_3",
                           "name":  "旧式通用冲锋枪45",
                           "rank":  3,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，严重磨损几近报废，在物资匮乏时也可应急使用。",
                           "image":  "img/weapon/Weapon_UMP45_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_UMP45_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_VSK94_3":  {
                           "id":  "Weapon_VSK94_3",
                           "name":  "旧式维斯卡94",
                           "rank":  3,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，准头一般，但还能凑合使用。",
                           "image":  "img/weapon/Weapon_VSK94_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_VSK94_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_K2_3":  {
                        "id":  "Weapon_K2_3",
                        "name":  "旧式卡宾刻2型",
                        "rank":  3,
                        "tags":  [
                                     "突击步枪",
                                     "中型弹"
                                 ],
                        "intro":  "从暗商处采购的廉价武器，枪身遍布被硝烟侵蚀的伤痕，请务必小心使用。",
                        "image":  "img/weapon/Weapon_K2_3_1024.png",
                        "thumbnail":  "img/weapon/thumb/Weapon_K2_3_1024.png",
                        "stats":  {
                                      "攻击":  "174"
                                  },
                        "bond":  {
                                     "id":  "",
                                     "name":  "",
                                     "text":  ""
                                 },
                        "trait":  {
                                      "label":  "",
                                      "text":  ""
                                  },
                        "effects":  [
                                        {
                                            "name":  "火力武装 Lv.1",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.2",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.3",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.4",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.5",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.6",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                        }
                                    ],
                        "pools":  [

                                  ]
                    },
    "Weapon_MP5_3":  {
                         "id":  "Weapon_MP5_3",
                         "name":  "旧式五号九毫米冲锋枪",
                         "rank":  3,
                         "tags":  [
                                      "冲锋枪",
                                      "轻型弹"
                                  ],
                         "intro":  "从暗商处采购的廉价武器，缺少了一些零件，但还勉强能够使用。",
                         "image":  "img/weapon/Weapon_MP5_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_MP5_3_1024.png",
                         "stats":  {
                                       "攻击":  "160"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "火力武装 Lv.1",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.2",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.3",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.4",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.5",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.6",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_HK416_3":  {
                           "id":  "Weapon_HK416_3",
                           "name":  "旧式黑克勒科赫416",
                           "rank":  3,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "污染区常见的旧式武器，外观老旧，但破损并不严重，可以正常使用。",
                           "image":  "img/weapon/Weapon_HK416_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_HK416_3_1024.png",
                           "stats":  {
                                         "攻击":  "195"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_G11_3":  {
                         "id":  "Weapon_G11_3",
                         "name":  "旧式无壳弹步枪11",
                         "rank":  3,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "污染区常见的旧式武器，破破烂烂，但还能使用。",
                         "image":  "img/weapon/Weapon_G11_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G11_3_1024.png",
                         "stats":  {
                                       "攻击":  "174"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "火力武装 Lv.1",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.2",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.3",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.4",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.5",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.6",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_CSLS06_3":  {
                            "id":  "Weapon_CSLS06_3",
                            "name":  "旧式长风零六",
                            "rank":  3,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，枪管有点生锈，令人怀疑它是否能发挥出应有的杀伤力。",
                            "image":  "img/weapon/Weapon_CSLS06_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_CSLS06_3_1024.png",
                            "stats":  {
                                          "攻击":  "174"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_SteyrTMP_3":  {
                              "id":  "Weapon_SteyrTMP_3",
                              "name":  "旧式施泰尔冲锋手枪",
                              "rank":  3,
                              "tags":  [
                                           "冲锋枪",
                                           "轻型弹"
                                       ],
                              "intro":  "污染区常见的旧式武器，偶有卡壳，但火力尚可。",
                              "image":  "img/weapon/Weapon_SteyrTMP_3_1024.png",
                              "thumbnail":  "img/weapon/thumb/Weapon_SteyrTMP_3_1024.png",
                              "stats":  {
                                            "攻击":  "174"
                                        },
                              "bond":  {
                                           "id":  "",
                                           "name":  "",
                                           "text":  ""
                                       },
                              "trait":  {
                                            "label":  "",
                                            "text":  ""
                                        },
                              "effects":  [
                                              {
                                                  "name":  "火力武装 Lv.1",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.2",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.3",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.4",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.5",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                              },
                                              {
                                                  "name":  "火力武装 Lv.6",
                                                  "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                              }
                                          ],
                              "pools":  [

                                        ]
                          },
    "Weapon_HAWK12_3":  {
                            "id":  "Weapon_HAWK12_3",
                            "name":  "旧式九七式霰",
                            "rank":  3,
                            "tags":  [
                                         "霰弹枪",
                                         "霰弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，虽然存在卡壳的风险，但足以胜任日常的安保护卫任务。",
                            "image":  "img/weapon/Weapon_HAWK12_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_HAWK12_3_1024.png",
                            "stats":  {
                                          "攻击":  "174"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_M1903_3":  {
                           "id":  "Weapon_M1903_3",
                           "name":  "旧式斯普林菲尔德",
                           "rank":  3,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，状态不怎么稳定，但还勉强能够使用。",
                           "image":  "img/weapon/Weapon_M1903_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1903_3_1024.png",
                           "stats":  {
                                         "攻击":  "160"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "援助武装 Lv.1",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "援助武装 Lv.2",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "援助武装 Lv.3",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "援助武装 Lv.4",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "援助武装 Lv.5",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "援助武装 Lv.6",
                                               "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_G28_3":  {
                         "id":  "Weapon_G28_3",
                         "name":  "旧式格威尔28",
                         "rank":  3,
                         "tags":  [
                                      "突击步枪",
                                      "中型弹"
                                  ],
                         "intro":  "污染区常见的旧式武器，充满了被风沙侵蚀的痕迹。",
                         "image":  "img/weapon/Weapon_G28_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_G28_3_1024.png",
                         "stats":  {
                                       "攻击":  "174"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "火力武装 Lv.1",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.2",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.3",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.4",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.5",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "火力武装 Lv.6",
                                             "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_Vector_3":  {
                            "id":  "Weapon_Vector_3",
                            "name":  "旧式短剑",
                            "rank":  3,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "污染区常见的旧式武器，尽管快散架了，但小心一点还是能用。",
                            "image":  "img/weapon/Weapon_Vector_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_Vector_3_1024.png",
                            "stats":  {
                                          "攻击":  "174"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_CZ75_3":  {
                          "id":  "Weapon_CZ75_3",
                          "name":  "旧式斯柯达75",
                          "rank":  3,
                          "tags":  [
                                       "手枪",
                                       "轻型弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，击发有点问题，只能凑合着使用。",
                          "image":  "img/weapon/Weapon_CZ75_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_CZ75_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_G36KKSK_3":  {
                             "id":  "Weapon_G36KKSK_3",
                             "name":  "旧式格威尔36-斯佩凯芙特",
                             "rank":  3,
                             "tags":  [
                                          "突击步枪",
                                          "中型弹"
                                      ],
                             "intro":  "从暗商处采购的廉价武器，非常破旧，看上去使用寿命已达上限。",
                             "image":  "img/weapon/Weapon_G36KKSK_3_1024.png",
                             "thumbnail":  "img/weapon/thumb/Weapon_G36KKSK_3_1024.png",
                             "stats":  {
                                           "攻击":  "160"
                                       },
                             "bond":  {
                                          "id":  "",
                                          "name":  "",
                                          "text":  ""
                                      },
                             "trait":  {
                                           "label":  "",
                                           "text":  ""
                                       },
                             "effects":  [
                                             {
                                                 "name":  "防御武装 Lv.1",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.2",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.3",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.4",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.5",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                             },
                                             {
                                                 "name":  "防御武装 Lv.6",
                                                 "text":  "受到伤害降低\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                             }
                                         ],
                             "pools":  [

                                       ]
                         },
    "Weapon_M1_3":  {
                        "id":  "Weapon_M1_3",
                        "name":  "旧式超级90",
                        "rank":  3,
                        "tags":  [
                                     "霰弹枪",
                                     "霰弹"
                                 ],
                        "intro":  "从暗商处采购的廉价武器，性能和它的外观一样平平无奇。",
                        "image":  "img/weapon/Weapon_M1_3_1024.png",
                        "thumbnail":  "img/weapon/thumb/Weapon_M1_3_1024.png",
                        "stats":  {
                                      "攻击":  "195"
                                  },
                        "bond":  {
                                     "id":  "",
                                     "name":  "",
                                     "text":  ""
                                 },
                        "trait":  {
                                      "label":  "",
                                      "text":  ""
                                  },
                        "effects":  [
                                        {
                                            "name":  "火力武装 Lv.1",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.2",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.3",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.4",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.5",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                        },
                                        {
                                            "name":  "火力武装 Lv.6",
                                            "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                        }
                                    ],
                        "pools":  [

                                  ]
                    },
    "Weapon_PPSh41_3":  {
                            "id":  "Weapon_PPSh41_3",
                            "name":  "旧式波波沙冲锋枪",
                            "rank":  3,
                            "tags":  [
                                         "冲锋枪",
                                         "轻型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，枪身已经有些斑驳，好在还算坚固可靠。",
                            "image":  "img/weapon/Weapon_PPSh41_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_PPSh41_3_1024.png",
                            "stats":  {
                                          "攻击":  "188"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_M1931_3":  {
                           "id":  "Weapon_M1931_3",
                           "name":  "旧式索米",
                           "rank":  3,
                           "tags":  [
                                        "冲锋枪",
                                        "轻型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，枪身各处似乎都有一些磨损，但没有影响正常使用。",
                           "image":  "img/weapon/Weapon_M1931_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1931_3_1024.png",
                           "stats":  {
                                         "攻击":  "153"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Galil_3":  {
                           "id":  "Weapon_Galil_3",
                           "name":  "旧式加利尔轻机枪",
                           "rank":  3,
                           "tags":  [
                                        "机枪",
                                        "重型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，有些沉重，好在整体上还算便于携带。",
                           "image":  "img/weapon/Weapon_Galil_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_Galil_3_1024.png",
                           "stats":  {
                                         "攻击":  "188"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_Ullr_3":  {
                          "id":  "Weapon_Ullr_3",
                          "name":  "旧式羽锋",
                          "rank":  3,
                          "tags":  [
                                       "刀",
                                       "近战"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，外观朴素、陈旧，算是污染区常见的武器。",
                          "image":  "img/weapon/Weapon_Ullr_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_Ullr_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_APS_3":  {
                         "id":  "Weapon_APS_3",
                         "name":  "旧式斯捷奇金",
                         "rank":  3,
                         "tags":  [
                                      "手枪",
                                      "轻型弹"
                                  ],
                         "intro":  "从暗商处采购的廉价武器，枪身有些老旧，勉强还能击中目标。",
                         "image":  "img/weapon/Weapon_APS_3_1024.png",
                         "thumbnail":  "img/weapon/thumb/Weapon_APS_3_1024.png",
                         "stats":  {
                                       "攻击":  "153"
                                   },
                         "bond":  {
                                      "id":  "",
                                      "name":  "",
                                      "text":  ""
                                  },
                         "trait":  {
                                       "label":  "",
                                       "text":  ""
                                   },
                         "effects":  [
                                         {
                                             "name":  "援助武装 Lv.1",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.2",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.3",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.4",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.5",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                         },
                                         {
                                             "name":  "援助武装 Lv.6",
                                             "text":  "治疗效果提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                         }
                                     ],
                         "pools":  [

                                   ]
                     },
    "Weapon_QBZ97_3":  {
                           "id":  "Weapon_QBZ97_3",
                           "name":  "旧式九七式",
                           "rank":  3,
                           "tags":  [
                                        "突击步枪",
                                        "中型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，外观破旧，好像使用时如果不谨慎一些，就会立刻损坏。",
                           "image":  "img/weapon/Weapon_QBZ97_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_QBZ97_3_1024.png",
                           "stats":  {
                                         "攻击":  "174"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_WA2000_3":  {
                            "id":  "Weapon_WA2000_3",
                            "name":  "旧式瓦尔特2000",
                            "rank":  3,
                            "tags":  [
                                         "狙击枪",
                                         "重型弹"
                                     ],
                            "intro":  "从暗商处采购的廉价武器，枪身坑坑洼洼，不过没有影响击发。",
                            "image":  "img/weapon/Weapon_WA2000_3_1024.png",
                            "thumbnail":  "img/weapon/thumb/Weapon_WA2000_3_1024.png",
                            "stats":  {
                                          "攻击":  "195"
                                      },
                            "bond":  {
                                         "id":  "",
                                         "name":  "",
                                         "text":  ""
                                     },
                            "trait":  {
                                          "label":  "",
                                          "text":  ""
                                      },
                            "effects":  [
                                            {
                                                "name":  "火力武装 Lv.1",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.2",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.3",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.4",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.5",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                            },
                                            {
                                                "name":  "火力武装 Lv.6",
                                                "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                            }
                                        ],
                            "pools":  [

                                      ]
                        },
    "Weapon_M1891_3":  {
                           "id":  "Weapon_M1891_3",
                           "name":  "旧式莫辛-纳甘",
                           "rank":  3,
                           "tags":  [
                                        "狙击枪",
                                        "重型弹"
                                    ],
                           "intro":  "从暗商处采购的廉价武器，款式已经过时，但还算坚固好用。",
                           "image":  "img/weapon/Weapon_M1891_3_1024.png",
                           "thumbnail":  "img/weapon/thumb/Weapon_M1891_3_1024.png",
                           "stats":  {
                                         "攻击":  "188"
                                     },
                           "bond":  {
                                        "id":  "",
                                        "name":  "",
                                        "text":  ""
                                    },
                           "trait":  {
                                         "label":  "",
                                         "text":  ""
                                     },
                           "effects":  [
                                           {
                                               "name":  "火力武装 Lv.1",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.2",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.3",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.4",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.5",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                           },
                                           {
                                               "name":  "火力武装 Lv.6",
                                               "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                           }
                                       ],
                           "pools":  [

                                     ]
                       },
    "Weapon_KSVK_3":  {
                          "id":  "Weapon_KSVK_3",
                          "name":  "旧式科夫罗夫",
                          "rank":  3,
                          "tags":  [
                                       "狙击枪",
                                       "重型弹"
                                   ],
                          "intro":  "从暗商处采购的廉价武器，日常保养很不到位，影响了射击精度，只能凑合用用。",
                          "image":  "img/weapon/Weapon_KSVK_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_KSVK_3_1024.png",
                          "stats":  {
                                        "攻击":  "174"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      },
    "Weapon_UMP9_3":  {
                          "id":  "Weapon_UMP9_3",
                          "name":  "旧式通用冲锋枪9",
                          "rank":  3,
                          "tags":  [
                                       "冲锋枪",
                                       "轻型弹"
                                   ],
                          "intro":  "污染区常见的廉价武器，枪托有些许破损，枪身各处更有大量焊接修补的痕迹。",
                          "image":  "img/weapon/Weapon_UMP9_3_1024.png",
                          "thumbnail":  "img/weapon/thumb/Weapon_UMP9_3_1024.png",
                          "stats":  {
                                        "攻击":  "153"
                                    },
                          "bond":  {
                                       "id":  "",
                                       "name":  "",
                                       "text":  ""
                                   },
                          "trait":  {
                                        "label":  "",
                                        "text":  ""
                                    },
                          "effects":  [
                                          {
                                              "name":  "火力武装 Lv.1",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e1%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.2",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e2%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.3",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e3%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.4",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e4%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.5",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e5%\u003c/span\u003e。"
                                          },
                                          {
                                              "name":  "火力武装 Lv.6",
                                              "text":  "造成伤害提高\u003cspan style=\"color:#f26c1c\"\u003e6%\u003c/span\u003e。"
                                          }
                                      ],
                          "pools":  [

                                    ]
                      }
};
