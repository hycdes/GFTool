// GF2 Tools mind-spiral key data
// byDoll[dollId] = { affection{id,name,icon,attrs[]}, shared{id,name,icon,attrs[],text}, fixed[{id,name,icon,text}], leap{id,name,icon,text}|null }
// attr.name normalized to 攻击/生命/防御/暴击/暴击伤害 (value is percent)
window.KEY_STAT = {
    "byDoll":  {
                   "CharolicSR":  {
                                      "affection":  {
                                                        "id":  "charolic_love",
                                                        "name":  "契合键·灼热守护",
                                                        "icon":  "img/key/charolic_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "charolic_common",
                                                     "name":  "共键·暴力美学",
                                                     "icon":  "img/key/charolic_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  3
                                                                   }
                                                               ],
                                                     "text":  "若自身拥有燃烧类增益，则免疫 凝固 和 僵冷 ，且造成伤害提高5%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "charolic_static_1",
                                                        "name":  "固键·凝神瞬息",
                                                        "icon":  "img/key/charolic_static_1.png",
                                                        "text":  "主动技能杀戮序列的导染消耗减少1点。"
                                                    },
                                                    {
                                                        "id":  "charolic_static_2",
                                                        "name":  "固键·凶猛掠食",
                                                        "icon":  "img/key/charolic_static_2.png",
                                                        "text":  "主动技能粉碎回旋若只命中1个目标，造成伤害提高30%。"
                                                    },
                                                    {
                                                        "id":  "charolic_static_3",
                                                        "name":  "固键·炽热的怒火",
                                                        "icon":  "img/key/charolic_static_3.png",
                                                        "text":  "若自身周围半径3格内没有其他友方单位，则造成伤害提高10%。"
                                                    },
                                                    {
                                                        "id":  "charolic_static_4",
                                                        "name":  "固键·高傲的挑战者",
                                                        "icon":  "img/key/charolic_static_4.png",
                                                        "text":  "若使用主动技能淬火斩造成击杀，则此技能冷却时间减少2回合。"
                                                    },
                                                    {
                                                        "id":  "charolic_static_5",
                                                        "name":  "固键·追击本能",
                                                        "icon":  "img/key/charolic_static_5.png",
                                                        "text":  "行动开始时，若场上存在拥有 溢火 的敌方单位，则获得 火热攻势II ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "charolic_static_6",
                                                        "name":  "固键·积势潜行",
                                                        "icon":  "img/key/charolic_static_6.png",
                                                        "text":  "攻击前，若移动了3格以上，则自身暴击率提高10%。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "charolic_leap",
                                                   "name":  "跃键·兔袭苍穹",
                                                   "icon":  "img/key/charolic_leap.png",
                                                   "text":  "攻击前，每移动1格，此次攻击暴击率和暴击伤害提高5%，至多提高15%。"
                                               }
                                  },
                   "NemesisSR":  {
                                     "affection":  {
                                                       "id":  "nemesi_love",
                                                       "name":  "契合键·低语",
                                                       "icon":  "img/key/nemesi_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "nemesi_common",
                                                    "name":  "共键·晨星的祝福",
                                                    "icon":  "img/key/nemesi_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "主动攻击造成击杀时，若自身拥有 洞察 ，则获得3格移动追加。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "nemesi_static_1",
                                                       "name":  "固键·灵验的诅咒",
                                                       "icon":  "img/key/nemesi_static_1.png",
                                                       "text":  "若目标拥有 悼亡预言 ，则主动攻击前对其施加 防御降低II 。"
                                                   },
                                                   {
                                                       "id":  "nemesi_static_2",
                                                       "name":  "固键·流转的运势",
                                                       "icon":  "img/key/nemesi_static_2.png",
                                                       "text":  "拥有 洞察 时，主动技能启星和隧穿之匣的射程增加1格。"
                                                   },
                                                   {
                                                       "id":  "nemesi_static_3",
                                                       "name":  "固键·好运的呼唤",
                                                       "icon":  "img/key/nemesi_static_3.png",
                                                       "text":  "拥有 洞察 时，若自身附近存在掩体，则受到的范围伤害降低20%。"
                                                   },
                                                   {
                                                       "id":  "nemesi_static_4",
                                                       "name":  "固键·无声的灾厄",
                                                       "icon":  "img/key/nemesi_static_4.png",
                                                       "text":  "击杀拥有 悼亡预言 标记的目标时，获得 攻击提升I 和 伤害提升I ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "nemesi_static_5",
                                                       "name":  "固键·命定的劫难",
                                                       "icon":  "img/key/nemesi_static_5.png",
                                                       "text":  "击杀拥有 悼亡预言 标记的目标时，额外获得1点导染指数。"
                                                   },
                                                   {
                                                       "id":  "nemesi_static_6",
                                                       "name":  "固键·凝注的目光",
                                                       "icon":  "img/key/nemesi_static_6.png",
                                                       "text":  "拥有 洞察 时，免疫敌方单位施加的位移效果。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "nemesi_leap",
                                                  "name":  "跃键·悼亡的预言",
                                                  "icon":  "img/key/nemesi_leap.png",
                                                  "text":  "回合开始时，为射程内生命值最高的敌方目标施加 悼亡预言 标记。"
                                              }
                                 },
                   "ColphneSR":  {
                                     "affection":  {
                                                       "id":  "colphne_love",
                                                       "name":  "契合键·治愈系诊疗",
                                                       "icon":  "img/key/colphne_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "防御",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "colphne_common",
                                                    "name":  "共键·虚构生命",
                                                    "icon":  "img/key/colphne_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "生命",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "主动单体治疗前，驱散目标身上随机1个减益效果。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "colphne_static_1",
                                                       "name":  "固键·谨遵医嘱",
                                                       "icon":  "img/key/colphne_static_1.png",
                                                       "text":  "主动技能危情救护为目标施加 防御提升I 和 掩护 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "colphne_static_2",
                                                       "name":  "固键·快速手术",
                                                       "icon":  "img/key/colphne_static_2.png",
                                                       "text":  "若友方目标被攻击后陷入稳态崩溃，则自身获得 移动提升II ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "colphne_static_3",
                                                       "name":  "固键·急救直通车",
                                                       "icon":  "img/key/colphne_static_3.png",
                                                       "text":  "主动技能战场微芒效果增加，同时为自身周围半径3格内的友方目标恢复生命值。"
                                                   },
                                                   {
                                                       "id":  "colphne_static_4",
                                                       "name":  "固键·战斗医疗兵",
                                                       "icon":  "img/key/colphne_static_4.png",
                                                       "text":  "自身生命值高于80%时，攻击力提高10%。"
                                                   },
                                                   {
                                                       "id":  "colphne_static_5",
                                                       "name":  "固键·静息愈疗",
                                                       "icon":  "img/key/colphne_static_5.png",
                                                       "text":  "治疗后，随机为目标驱散1个减益效果。"
                                                   },
                                                   {
                                                       "id":  "colphne_static_6",
                                                       "name":  "固键·速效痊愈",
                                                       "icon":  "img/key/colphne_static_6.png",
                                                       "text":  "主动治疗时，若目标生命值低于50%，则此次治疗效果提高20%。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "colphne_leap",
                                                  "name":  "跃键·情绪疏导专家",
                                                  "icon":  "img/key/colphne_leap.png",
                                                  "text":  "进行 行动支援 时，为进行攻击的友方单位恢复50%攻击力的生命值和1点稳态指数。"
                                              }
                                 },
                   "LennaSSR":  {
                                    "affection":  {
                                                      "id":  "lenna_love",
                                                      "name":  "契合键·轻快语调",
                                                      "icon":  "img/key/lenna_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "lenna_common",
                                                   "name":  "共键·尖利的爪牙",
                                                   "icon":  "img/key/lenna_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "暴击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "造成精准伤害后，对目标施加 导电 ，持续1回合。每回合至多触发2次。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "lenna_static_1",
                                                      "name":  "固键·制敌有妙招",
                                                      "icon":  "img/key/lenna_static_1.png",
                                                      "text":  "攻击拥有 导电 但免疫 麻痹 的敌方目标时，无视其15%防御力。"
                                                  },
                                                  {
                                                      "id":  "lenna_static_2",
                                                      "name":  "固键·攻击动作要帅气",
                                                      "icon":  "img/key/lenna_static_2.png",
                                                      "text":  "使用主动技能野性扑灭造成击杀时，获得2点导染指数。"
                                                  },
                                                  {
                                                      "id":  "lenna_static_3",
                                                      "name":  "固键·万全的处事方式",
                                                      "icon":  "img/key/lenna_static_3.png",
                                                      "text":  "施加 导电 时，将目标身上的1个增益效果转换为随机减益效果。"
                                                  },
                                                  {
                                                      "id":  "lenna_static_4",
                                                      "name":  "固键·还可以更厉害",
                                                      "icon":  "img/key/lenna_static_4.png",
                                                      "text":  "使用主动技能跃动追踪后，对自身周围半径5格内最近的2个敌方单位施加 导电 ，持续1回合。"
                                                  },
                                                  {
                                                      "id":  "lenna_static_5",
                                                      "name":  "固键·化为前进的动力",
                                                      "icon":  "img/key/lenna_static_5.png",
                                                      "text":  "拥有电导类减益的敌方单位死亡时，自身获得1点导染指数。"
                                                  },
                                                  {
                                                      "id":  "lenna_static_6",
                                                      "name":  "固键·顶级临场反应",
                                                      "icon":  "img/key/lenna_static_6.png",
                                                      "text":  "受到攻击后若稳态崩溃，则对周围半径5格内的所有敌方目标施加 麻痹 ，持续1回合。每场战斗至多触发1次。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "lenna_leap",
                                                 "name":  "跃键·幼狮的决意",
                                                 "icon":  "img/key/lenna_leap.png",
                                                 "text":  "使用制胜技能狩猎策略后，自身获得 制胜明光 ，持续3回合。 使用主动技能跃动追踪后， 指令追加 时主动攻击的伤害系数增加100%。 大回合内每消耗1点导染指数，下个大回合攻击力提高5%，至多提高30%。"
                                             }
                                },
                   "VepleySSR":  {
                                     "affection":  {
                                                       "id":  "vepley_love",
                                                       "name":  "契合键·闪亮登场",
                                                       "icon":  "img/key/vepley_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "vepley_common",
                                                    "name":  "共键·直击心灵",
                                                    "icon":  "img/key/vepley_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "若行动力大于等于目标，则造成伤害提高7%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "vepley_static_1",
                                                       "name":  "固键·安全观演距离",
                                                       "icon":  "img/key/vepley_static_1.png",
                                                       "text":  "对拥有移动类减益的敌方目标造成的稳态伤害增加2点。"
                                                   },
                                                   {
                                                       "id":  "vepley_static_2",
                                                       "name":  "固键·污染区巡演",
                                                       "icon":  "img/key/vepley_static_2.png",
                                                       "text":  "主动技能全力演出的范围修改为5×3格，击退格数修改为1格。"
                                                   },
                                                   {
                                                       "id":  "vepley_static_3",
                                                       "name":  "固键·偶像的好运",
                                                       "icon":  "img/key/vepley_static_3.png",
                                                       "text":  "若自身周围半径6格内没有友方单位，则行动结束时获得1层 速效屏障 。"
                                                   },
                                                   {
                                                       "id":  "vepley_static_4",
                                                       "name":  "固键·小恐龙突袭",
                                                       "icon":  "img/key/vepley_static_4.png",
                                                       "text":  "使用主动技能专属舞台时，对拥有移动类减益的目标，无视其10%的掩体减伤。"
                                                   },
                                                   {
                                                       "id":  "vepley_static_5",
                                                       "name":  "固键·抗压能力特训",
                                                       "icon":  "img/key/vepley_static_5.png",
                                                       "text":  "若自身附近存在掩体，则受到的范围伤害降低20%。"
                                                   },
                                                   {
                                                       "id":  "vepley_static_6",
                                                       "name":  "固键·舞台坚守",
                                                       "icon":  "img/key/vepley_static_6.png",
                                                       "text":  "对大型目标施加移动类减益时，追加1次15%攻击力的固定伤害。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "vepley_leap",
                                                  "name":  "跃键·偶像舞步",
                                                  "icon":  "img/key/vepley_leap.png",
                                                  "text":  "攻击无视目标15%防御，若目标拥有移动类减益，额外无视其15%防御。使用主动技能全力演出时，对目标施加 眩晕 和 易伤II ，持续2回合。"
                                              }
                                 },
                   "GrozaSR":  {
                                   "affection":  {
                                                     "id":  "groza_love",
                                                     "name":  "契合键·静夜沉思",
                                                     "icon":  "img/key/groza_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "groza_common",
                                                  "name":  "共键·持久续航",
                                                  "icon":  "img/key/groza_common.png",
                                                  "attrs":  [

                                                            ],
                                                  "text":  "拥有 掩护 时，免疫1次位移，冷却1回合。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "groza_static_1",
                                                     "name":  "固键·多方位考量",
                                                     "icon":  "img/key/groza_static_1.png",
                                                     "text":  "若造成稳态崩溃，则对其施加 防御降低I 和 攻击降低I ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "groza_static_2",
                                                     "name":  "固键·稳步进军指令",
                                                     "icon":  "img/key/groza_static_2.png",
                                                     "text":  "使用主动技能完美掩护时，同时施加 攻击提升I ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "groza_static_3",
                                                     "name":  "固键·自适应策略",
                                                     "icon":  "img/key/groza_static_3.png",
                                                     "text":  "自身生命值低于30%时，受到的治疗效果提高50%。"
                                                 },
                                                 {
                                                     "id":  "groza_static_4",
                                                     "name":  "固键·火力优势战术",
                                                     "icon":  "img/key/groza_static_4.png",
                                                     "text":  "使用主动技能强力压制，造成敌方目标稳态崩溃时，对目标施加 嘲讽 ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "groza_static_5",
                                                     "name":  "固键·可持续行动",
                                                     "icon":  "img/key/groza_static_5.png",
                                                     "text":  "自身拥有 掩护 时，受到的范围伤害降低20%。"
                                                 },
                                                 {
                                                     "id":  "groza_static_6",
                                                     "name":  "固键·标准回避法则",
                                                     "icon":  "img/key/groza_static_6.png",
                                                     "text":  "稳态崩溃时，恢复自身最大生命值的20%，5点稳态指数，同时驱散自身4个减益效果，每场战斗至多触发1次。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "groza_leap",
                                                "name":  "跃键·绝对防御要义",
                                                "icon":  "img/key/groza_leap.png",
                                                "text":  "暴击5% 使用主动技能完美掩护时，自身获得 绝对防御 。"
                                            }
                               },
                   "PerityaSSR":  {
                                      "affection":  {
                                                        "id":  "peritya_love",
                                                        "name":  "契合键·猫咪的松弛",
                                                        "icon":  "img/key/peritya_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "peritya_common",
                                                     "name":  "共键·全点了伤害",
                                                     "icon":  "img/key/peritya_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "主动技能若命中2个以上敌方目标，则造成伤害提高7%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "peritya_static_1",
                                                        "name":  "固键·临时系统维护",
                                                        "icon":  "img/key/peritya_static_1.png",
                                                        "text":  "每造成10点稳态伤害，获得1点导染指数。"
                                                    },
                                                    {
                                                        "id":  "peritya_static_2",
                                                        "name":  "固键·即兴猫鼠游戏",
                                                        "icon":  "img/key/peritya_static_2.png",
                                                        "text":  "若攻击前有剩余行动力，则行动结束时获得 移动提升II ，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "peritya_static_3",
                                                        "name":  "固键·自动修复程序",
                                                        "icon":  "img/key/peritya_static_3.png",
                                                        "text":  "攻击前若未进行移动，则驱散自身2个减益效果。"
                                                    },
                                                    {
                                                        "id":  "peritya_static_4",
                                                        "name":  "固键·慵懒的抵抗",
                                                        "icon":  "img/key/peritya_static_4.png",
                                                        "text":  "主动技能领域压制对免疫位移的目标，造成伤害提高15%。"
                                                    },
                                                    {
                                                        "id":  "peritya_static_5",
                                                        "name":  "固键·片刻的安宁",
                                                        "icon":  "img/key/peritya_static_5.png",
                                                        "text":  "战斗开始时获得3点导染指数。"
                                                    },
                                                    {
                                                        "id":  "peritya_static_6",
                                                        "name":  "固键·友善的接触",
                                                        "icon":  "img/key/peritya_static_6.png",
                                                        "text":  "主动技能定点侵蚀对主目标造成的稳态伤害提高4点。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "peritya_leap",
                                                   "name":  "跃键·猫影朦胧",
                                                   "icon":  "img/key/peritya_leap.png",
                                                   "text":  "造成酸蚀伤害时目标每持有1个减益，对其造成的伤害提高5%，至多提高25%。制胜技能多重编译命中敌方单位时朝自身拉拽2格。 在1个大回合中，每进行2次 行动支援 ，下一次 行动支援 改为对目标及其周围3×3格内所有敌方目标造成50%攻击力的范围酸蚀伤害和2点稳态伤害。"
                                               }
                                  },
                   "SharkrySR":  {
                                     "affection":  {
                                                       "id":  "sharkry_love",
                                                       "name":  "契合键·偶像的觉悟",
                                                       "icon":  "img/key/sharkry_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "sharkry_common",
                                                    "name":  "共键·暖场烟花",
                                                    "icon":  "img/key/sharkry_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  3
                                                                  }
                                                              ],
                                                    "text":  "若自身拥有的增益效果大于1个，则造成伤害提高7%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "sharkry_static_1",
                                                       "name":  "固键·小恶魔的低语",
                                                       "icon":  "img/key/sharkry_static_1.png",
                                                       "text":  "战斗开始时获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "sharkry_static_2",
                                                       "name":  "固键·热浪回馈",
                                                       "icon":  "img/key/sharkry_static_2.png",
                                                       "text":  "射程内有敌方目标被施加 溢火 时，对其进行1次 临机支援 ，造成80%攻击力的物理伤害和2点稳态伤害。每回合至多触发3次。"
                                                   },
                                                   {
                                                       "id":  "sharkry_static_3",
                                                       "name":  "固键·致命诱惑",
                                                       "icon":  "img/key/sharkry_static_3.png",
                                                       "text":  "行动开始时，若场上有敌方单位拥有 溢火 ，则自身获得 火热攻势II ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "sharkry_static_4",
                                                       "name":  "固键·偶像进修日",
                                                       "icon":  "img/key/sharkry_static_4.png",
                                                       "text":  "使用主动技能完美升调时，若目标拥有 溢火 ，则攻击前获得 火热攻势II ，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "sharkry_static_5",
                                                       "name":  "固键·目标是你的心",
                                                       "icon":  "img/key/sharkry_static_5.png",
                                                       "text":  "使用主动技能滚烫音浪时，若造成击杀，则获得1层 聚焦 。"
                                                   },
                                                   {
                                                       "id":  "sharkry_static_6",
                                                       "name":  "固键·掌心的飞吻",
                                                       "icon":  "img/key/sharkry_static_6.png",
                                                       "text":  "攻击拥有 溢火 的目标后，恢复自身最大生命值的20%。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "sharkry_leap",
                                                  "name":  "跃键·热情的节拍",
                                                  "icon":  "img/key/sharkry_leap.png",
                                                  "text":  "临机支援 造成的伤害改为燃烧伤害。"
                                              }
                                 },
                   "DusevnyjSSR":  {
                                       "affection":  {
                                                         "id":  "dusevnyj_love",
                                                         "name":  "契合键·微光追忆",
                                                         "icon":  "img/key/dusevnyj_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "dusevnyj_common",
                                                      "name":  "共键·艺术感召",
                                                      "icon":  "img/key/dusevnyj_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "对行动力小于等于自身或无法移动目标，造成的异位伤害提高10%。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "dusevnyj_static_1",
                                                         "name":  "固键·祝福之枪",
                                                         "icon":  "img/key/dusevnyj_static_1.png",
                                                         "text":  "每层溢出的 寒冰的祝福 将提高主动技能勇者守则5%暴击率，至多提高30%。"
                                                     },
                                                     {
                                                         "id":  "dusevnyj_static_2",
                                                         "name":  "固键·冒险者意志",
                                                         "icon":  "img/key/dusevnyj_static_2.png",
                                                         "text":  "主动攻击仅命中1个目标时，造成冷凝伤害提高20%，造成的稳态伤害提高2点。"
                                                     },
                                                     {
                                                         "id":  "dusevnyj_static_3",
                                                         "name":  "固键·魔法援护",
                                                         "icon":  "img/key/dusevnyj_static_3.png",
                                                         "text":  "主动技能产生冷凝类地格时，若范围内已有冷凝类地格，则触发地格反应，消除敌方目标脚下地格并驱散1个增益效果。每消除1个地格，获得1层 寒冰的祝福 ，至多获得3层。"
                                                     },
                                                     {
                                                         "id":  "dusevnyj_static_4",
                                                         "name":  "固键·勇气重剑",
                                                         "icon":  "img/key/dusevnyj_static_4.png",
                                                         "text":  "使用主动技能冬神的许可时，技能后若造成目标稳态崩溃，则对其施加 防御降低II ，持续2回合。"
                                                     },
                                                     {
                                                         "id":  "dusevnyj_static_5",
                                                         "name":  "固键·贤者之心",
                                                         "icon":  "img/key/dusevnyj_static_5.png",
                                                         "text":  "拥有 极寒领域 时，免疫移动类减益。"
                                                     },
                                                     {
                                                         "id":  "dusevnyj_static_6",
                                                         "name":  "固键·神圣光芒",
                                                         "icon":  "img/key/dusevnyj_static_6.png",
                                                         "text":  "回合开始时，若处于我方冷凝类地格上，则驱散自身2个减益效果。"
                                                     }
                                                 ],
                                       "leap":  {
                                                    "id":  "dusevnyj_leap",
                                                    "name":  "跃键·勇者的冬日赞歌",
                                                    "icon":  "img/key/dusevnyj_leap.png",
                                                    "text":  "友方单位造成冷凝伤害时，获得1层 寒冰的祝福 ，并使全体友方单位造成的冷凝伤害提高5%，至多提高15%。 自身精准攻击造成的伤害改为冷凝伤害且无视目标30%防御，并且对敌方目标造成冷凝伤害提高30%。 战斗开始时，使初始攻击力最高的2个友方人形（不包含自身）造成伤害提高10%，造成冷凝伤害提高10%。"
                                                }
                                   },
                   "CheetaSR":  {
                                    "affection":  {
                                                      "id":  "cheeta_love",
                                                      "name":  "契合键·天才的运气",
                                                      "icon":  "img/key/cheeta_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "cheeta_common",
                                                   "name":  "共键·微妙的发明",
                                                   "icon":  "img/key/cheeta_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "攻击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "主动治疗时，有50%概率对目标随机施加1个增益效果，持续1回合。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "cheeta_static_1",
                                                      "name":  "固键·正经科研经费",
                                                      "icon":  "img/key/cheeta_static_1.png",
                                                      "text":  "战斗开始时获得3点导染指数。"
                                                  },
                                                  {
                                                      "id":  "cheeta_static_2",
                                                      "name":  "固键·超级有益发明",
                                                      "icon":  "img/key/cheeta_static_2.png",
                                                      "text":  "行动支援 的射程增加2格。"
                                                  },
                                                  {
                                                      "id":  "cheeta_static_3",
                                                      "name":  "固键·金手指",
                                                      "icon":  "img/key/cheeta_static_3.png",
                                                      "text":  "主动技能辣味糖果新增效果，自身拥有火热攻势时，为最近的1个友方目标（不包含自身）恢复100%攻击力的生命值。"
                                                  },
                                                  {
                                                      "id":  "cheeta_static_4",
                                                      "name":  "固键·大大的恶作剧",
                                                      "icon":  "img/key/cheeta_static_4.png",
                                                      "text":  "每拥有1个增益效果，攻击力提高3%，至多提高15%。"
                                                  },
                                                  {
                                                      "id":  "cheeta_static_5",
                                                      "name":  "固键·天才辅助方案",
                                                      "icon":  "img/key/cheeta_static_5.png",
                                                      "text":  "主动技能烟火嘉年华不再对敌方目标造成伤害，效果修改为恢复范围内友方目标90%攻击力的生命值，并驱散1个减益效果。"
                                                  },
                                                  {
                                                      "id":  "cheeta_static_6",
                                                      "name":  "固键·天才的尊严",
                                                      "icon":  "img/key/cheeta_static_6.png",
                                                      "text":  "若行动结束时，拥有火热攻势，则恢复自身20%攻击力的生命值。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "cheeta_leap",
                                                 "name":  "跃键·天才的伟大发明",
                                                 "icon":  "img/key/cheeta_leap.png",
                                                 "text":  "主动攻击后，制胜技能惊喜盲盒冷却时间减少2回合。"
                                             }
                                },
                   "TololoSSR":  {
                                     "affection":  {
                                                       "id":  "tololo_love",
                                                       "name":  "契合键·星群絮语",
                                                       "icon":  "img/key/tololo_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "tololo_common",
                                                    "name":  "共键·余辉",
                                                    "icon":  "img/key/tololo_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "导染指数不满时，造成伤害提高7%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "tololo_static_1",
                                                       "name":  "固键·彗尾过境",
                                                       "icon":  "img/key/tololo_static_1.png",
                                                       "text":  "行动追加 时，行动力提高1格。"
                                                   },
                                                   {
                                                       "id":  "tololo_static_2",
                                                       "name":  "固键·观测法则",
                                                       "icon":  "img/key/tololo_static_2.png",
                                                       "text":  "使用主动技能黑洞反演时，对目标施加 淤滞 ，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "tololo_static_3",
                                                       "name":  "固键·不可见光线",
                                                       "icon":  "img/key/tololo_static_3.png",
                                                       "text":  "行动追加 时，获得 攻击提升II 和 伤害提升II ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "tololo_static_4",
                                                       "name":  "固键·逆行轨迹线",
                                                       "icon":  "img/key/tololo_static_4.png",
                                                       "text":  "使用主动技能超新星冲击时，若有友方单位在自身攻击前进行支援攻击，则对目标施加 眩晕 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "tololo_static_5",
                                                       "name":  "固键·星河游弋",
                                                       "icon":  "img/key/tololo_static_5.png",
                                                       "text":  "若产生克制，攻击前驱散目标2个增益效果。"
                                                   },
                                                   {
                                                       "id":  "tololo_static_6",
                                                       "name":  "固键·掩星",
                                                       "icon":  "img/key/tololo_static_6.png",
                                                       "text":  "满生命值和稳态指数时，无视目标10%的掩体减伤。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "tololo_leap",
                                                  "name":  "跃键·被捕获的星光",
                                                  "icon":  "img/key/tololo_leap.png",
                                                  "text":  "【1阶】使用主动技能后自身获得2点导染指数。若友方单位（不包含自身）造成浊刻伤害，则自身主动技能黑洞反演的冷却时间减少1回合。 【2阶】 战斗开始时，获得3层星能储备。托洛洛行动结束时，获得1层观测优势，持续1个大回合。若场上定点卫星未达上限，则消耗1层星能储备，在自身周围召唤1个定点卫星，持续2个大回合。每间隔1回合开始时，获得3层星能储备。托洛洛主动攻击后，对目标施加引力标记。定点卫星造成伤害后，托洛洛对目标施加1层星光折射，自身获得1层轨道共振。"
                                              }
                                 },
                   "NagantSR":  {
                                    "affection":  {
                                                      "id":  "nagant_love",
                                                      "name":  "契合键·帽子戏法",
                                                      "icon":  "img/key/nagant_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "nagant_common",
                                                   "name":  "共键·前辈常谈",
                                                   "icon":  "img/key/nagant_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "攻击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "若目标的稳态指数低于自身，则对其造成伤害提高7%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "nagant_static_1",
                                                      "name":  "固键·英勇出击",
                                                      "icon":  "img/key/nagant_static_1.png",
                                                      "text":  "战斗开始时获得3点导染指数。"
                                                  },
                                                  {
                                                      "id":  "nagant_static_2",
                                                      "name":  "固键·前辈的经验",
                                                      "icon":  "img/key/nagant_static_2.png",
                                                      "text":  "若攻击拥有防御类减益效果的敌方目标，则自身所有主动技能的冷却时间减少1回合。"
                                                  },
                                                  {
                                                      "id":  "nagant_static_3",
                                                      "name":  "固键·隐形防弹衣",
                                                      "icon":  "img/key/nagant_static_3.png",
                                                      "text":  "若被拥有减益的敌方目标攻击，则受到的伤害降低10%。"
                                                  },
                                                  {
                                                      "id":  "nagant_static_4",
                                                      "name":  "固键·守护者传说",
                                                      "icon":  "img/key/nagant_static_4.png",
                                                      "text":  "使用主动技能正义的伙伴时，若攻击2次，则第一次造成10%，第二次造成130%攻击力的物理伤害。"
                                                  },
                                                  {
                                                      "id":  "nagant_static_5",
                                                      "name":  "固键·一枪定胜负",
                                                      "icon":  "img/key/nagant_static_5.png",
                                                      "text":  "对拥有防御类减益的敌方目标，暴击率和暴击伤害提高10%。"
                                                  },
                                                  {
                                                      "id":  "nagant_static_6",
                                                      "name":  "固键·正义的子弹",
                                                      "icon":  "img/key/nagant_static_6.png",
                                                      "text":  "使用主动技能前辈的劝诫时，若造成敌方目标稳态崩溃，则对其追加一次50%攻击力的固定伤害。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "nagant_leap",
                                                 "name":  "跃键·前辈的叮嘱",
                                                 "icon":  "img/key/nagant_leap.png",
                                                 "text":  "主动攻击后，对目标施加 眩晕 ，持续2回合；本场战斗中，对同一目标若多次触发该效果，则 眩晕 改为持续1回合。"
                                             }
                                },
                   "QiongjiuSSR":  {
                                       "affection":  {
                                                         "id":  "qiongjiu_love",
                                                         "name":  "契合键·暖玉",
                                                         "icon":  "img/key/qiongjiu_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击伤害",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "qiongjiu_common",
                                                      "name":  "共键·攻坚谈判",
                                                      "icon":  "img/key/qiongjiu_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "自身行动回合外造成伤害提高7%。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "qiongjiu_static_1",
                                                         "name":  "固键·专注性",
                                                         "icon":  "img/key/qiongjiu_static_1.png",
                                                         "text":  "战斗开始时获得3点导染指数。"
                                                     },
                                                     {
                                                         "id":  "qiongjiu_static_2",
                                                         "name":  "固键·高效规划",
                                                         "icon":  "img/key/qiongjiu_static_2.png",
                                                         "text":  "行动支援前，驱散目标身上1个增益效果。"
                                                     },
                                                     {
                                                         "id":  "qiongjiu_static_3",
                                                         "name":  "固键·针对性训练",
                                                         "icon":  "img/key/qiongjiu_static_3.png",
                                                         "text":  "处于支援状态时，在友方单位攻击前，对目标施加 防御降低II ，持续1回合。"
                                                     },
                                                     {
                                                         "id":  "qiongjiu_static_4",
                                                         "name":  "固键·弱点标记",
                                                         "icon":  "img/key/qiongjiu_static_4.png",
                                                         "text":  "主动技能胜利指引效果修改为对所选方向8格内的所有敌方目标造成伤害，第一个目标外的敌方目标受到伤害降低30%。"
                                                     },
                                                     {
                                                         "id":  "qiongjiu_static_5",
                                                         "name":  "固键·必要的调整",
                                                         "icon":  "img/key/qiongjiu_static_5.png",
                                                         "text":  "使用主动技能共轨时，若产生克制，则获得 火热攻势II ，持续2回合。"
                                                     },
                                                     {
                                                         "id":  "qiongjiu_static_6",
                                                         "name":  "固键·稳定性",
                                                         "icon":  "img/key/qiongjiu_static_6.png",
                                                         "text":  "拥有支援增幅时，免疫敌方单位施加的位移效果。"
                                                     }
                                                 ],
                                       "leap":  {
                                                    "id":  "qiongjiu_leap",
                                                    "name":  "跃键·玉石俱焚",
                                                    "icon":  "img/key/qiongjiu_leap.png",
                                                    "text":  "【1阶】 行动支援 造成的伤害改为燃烧伤害，且对拥有燃烧类减益的目标造成的伤害提高15%。 【2阶】 自身攻击力提高35%，暴击伤害提高35%。 自身获得协击号声、先发制人和炽热反攻，每触发其中1个效果，自身获得1层破军；若目标为首领单位，对其施加1层丧胆，持续2回合。 使用制胜技能追袭夺势时，若自身拥有3层破军，则为友方人形额外施加武魂，持续1个大回合。"
                                                }
                                   },
                   "CentaureissiSSR":  {
                                           "affection":  {
                                                             "id":  "centaureissi_love",
                                                             "name":  "契合键·女仆的骄傲",
                                                             "icon":  "img/key/centaureissi_love.png",
                                                             "attrs":  [
                                                                           {
                                                                               "name":  "攻击",
                                                                               "value":  4.5
                                                                           },
                                                                           {
                                                                               "name":  "防御",
                                                                               "value":  4.5
                                                                           },
                                                                           {
                                                                               "name":  "生命",
                                                                               "value":  4.5
                                                                           }
                                                                       ]
                                                         },
                                           "shared":  {
                                                          "id":  "centaureissi_common",
                                                          "name":  "共键·必备热饮",
                                                          "icon":  "img/key/centaureissi_common.png",
                                                          "attrs":  [

                                                                    ],
                                                          "text":  "行动结束时，为最近的1个没有 热态回复 的友方单位施加 热态回复 。冷却2回合。"
                                                      },
                                           "fixed":  [
                                                         {
                                                             "id":  "centaureissi_static_1",
                                                             "name":  "固键·餐前甜品",
                                                             "icon":  "img/key/centaureissi_static_1.png",
                                                             "text":  "战斗开始时获得3点导染指数。"
                                                         },
                                                         {
                                                             "id":  "centaureissi_static_2",
                                                             "name":  "固键·女仆的决心",
                                                             "icon":  "img/key/centaureissi_static_2.png",
                                                             "text":  "若自身周围半径7格内有友方单位受到伤害后处于稳态崩溃，则消耗自身 热态回复 ，并为其施加 热态回复 。"
                                                         },
                                                         {
                                                             "id":  "centaureissi_static_3",
                                                             "name":  "固键·高效处理",
                                                             "icon":  "img/key/centaureissi_static_3.png",
                                                             "text":  "触发 热态回复 效果时，随机驱散攻击者1个增益效果。触发 热态回复 效果前，驱散拥有者自身2个减益效果。"
                                                         },
                                                         {
                                                             "id":  "centaureissi_static_4",
                                                             "name":  "固键·舒心特调",
                                                             "icon":  "img/key/centaureissi_static_4.png",
                                                             "text":  "主动技能方糖特饮的治疗系数提高75%。"
                                                         },
                                                         {
                                                             "id":  "centaureissi_static_5",
                                                             "name":  "固键·周全准备",
                                                             "icon":  "img/key/centaureissi_static_5.png",
                                                             "text":  "主动治疗友方目标时，为其驱散1个减益效果，对拥有 热态回复 的目标，额外驱散1个减益效果。"
                                                         },
                                                         {
                                                             "id":  "centaureissi_static_6",
                                                             "name":  "固键·幸运菜单",
                                                             "icon":  "img/key/centaureissi_static_6.png",
                                                             "text":  "主动治疗友方目标时，若目标拥有 热态回复 ，则为其随机施加1个强力增益效果，持续1回合。"
                                                         }
                                                     ],
                                           "leap":  {
                                                        "id":  "centaureissi_leap",
                                                        "name":  "跃键·守护的觉悟",
                                                        "icon":  "img/key/centaureissi_leap.png",
                                                        "text":  "【1阶】战斗开始时和使用制胜技能午后茶歇后，对自身施加 醒神热茶 ，持续 2个 大回合。使用主动技能方糖特饮后，为所有友方单位施加 完美守护 ，持续 2回合 。 友方单位造成燃烧伤害，自身进行支援攻击时，获得 1点 导染指数，每回合至多触发 1次 。 【2阶】自身攻击力提高 30% ，暴击率提高 30% 。 主动技能方糖特饮后获得指令追加。若制胜技能午后茶歇对友方人形造成过量治疗，则对其施加坚韧心域，持续 2个 大回合，坚韧心域吸收量为 50% 施加者攻击力，至多不超过 100% 目标最大生命值。 当射程内的敌方单位受到来自友方的精准伤害时，进行行动支援造成的伤害改为燃烧伤害，自身额外获得 1点 导染指数，并为友方人形施加坚韧心域，持续 2个 大回合。 使用主动技能、进行行动支援或锁定攻击后，对周围 半径 7格 内 的所有敌方单位造成 150% 攻击力的燃烧伤害，若命中目标数量多于 3个 ，则造成 75% 攻击力的燃烧伤害。 希丽雅在场时，其普攻后桑朵莱希进行 1次 锁定攻击，若其普攻造成精准伤害，则锁定攻击对目标造成 150% 攻击力的燃烧伤害；若其普攻造成范围伤害，则锁定攻击对目标及其周围5× 5格 内的所有敌方目标造成 150% 攻击力的范围燃烧伤害；自身获得 1点 导染指数，并对希丽雅施加守望，每回合至多触发 1次 。"
                                                    }
                                       },
                   "SabrinaSSR":  {
                                      "affection":  {
                                                        "id":  "sabrina_love",
                                                        "name":  "契合键·甜点时间",
                                                        "icon":  "img/key/sabrina_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "防御",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "sabrina_common",
                                                     "name":  "共键·高油温防护",
                                                     "icon":  "img/key/sabrina_common.png",
                                                     "attrs":  [

                                                               ],
                                                     "text":  "造成精准伤害时，对目标施加 移动降低II ，持续1回合。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "sabrina_static_1",
                                                        "name":  "固键·能吃是福",
                                                        "icon":  "img/key/sabrina_static_1.png",
                                                        "text":  "受到攻击时，防御力提高20%。"
                                                    },
                                                    {
                                                        "id":  "sabrina_static_2",
                                                        "name":  "固键·美味分享",
                                                        "icon":  "img/key/sabrina_static_2.png",
                                                        "text":  "战斗开始时获得3点导染指数。"
                                                    },
                                                    {
                                                        "id":  "sabrina_static_3",
                                                        "name":  "固键·温水煮一切",
                                                        "icon":  "img/key/sabrina_static_3.png",
                                                        "text":  "在浊刻类地格上时，防御力提高30%，并免疫敌方单位施加的位移效果和所有浊刻类异常地面效果。"
                                                    },
                                                    {
                                                        "id":  "sabrina_static_4",
                                                        "name":  "固键·吃饱饱睡好好",
                                                        "icon":  "img/key/sabrina_static_4.png",
                                                        "text":  "导染指数未满时，每获得1点导染指数，恢复2点稳态指数。"
                                                    },
                                                    {
                                                        "id":  "sabrina_static_5",
                                                        "name":  "固键·卡路里超标",
                                                        "icon":  "img/key/sabrina_static_5.png",
                                                        "text":  "主动技能美味盛宴的生效范围改为周围半径1格，选择目标改为地格，将所有目标朝中心拉拽1格，造成伤害提高到攻击力的100%。"
                                                    },
                                                    {
                                                        "id":  "sabrina_static_6",
                                                        "name":  "固键·怪味健康餐",
                                                        "icon":  "img/key/sabrina_static_6.png",
                                                        "text":  "主动技能饭前准备作用范围修改为自身周围半径5格，不再施加 移动降低II ，对至多2个目标施加 嘲讽 效果，持续1回合。冷却时间修改为3回合。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "sabrina_leap",
                                                   "name":  "跃键·传说中的食谱",
                                                   "icon":  "img/key/sabrina_leap.png",
                                                   "text":  "反击 造成的伤害改为浊刻伤害；若触发浊刻类地格反应，则不再消除该地格。每进行一次 反击 ，自身受到伤害降低5%，至多叠加至30%，持续2回合。"
                                               }
                                  },
                   "DaiyanSSR":  {
                                     "affection":  {
                                                       "id":  "daiyan_love",
                                                       "name":  "契合键·柔情曲调",
                                                       "icon":  "img/key/daiyan_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "daiyan_common",
                                                    "name":  "共键·金石裂帛",
                                                    "icon":  "img/key/daiyan_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "行动开始时，获得 移动提升I ，持续1回合。冷却1回合。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "daiyan_static_1",
                                                       "name":  "固键·绕梁",
                                                       "icon":  "img/key/daiyan_static_1.png",
                                                       "text":  "拥有 校音 时，行动力增加1格。"
                                                   },
                                                   {
                                                       "id":  "daiyan_static_2",
                                                       "name":  "固键·青云未至",
                                                       "icon":  "img/key/daiyan_static_2.png",
                                                       "text":  "战斗开始时获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "daiyan_static_3",
                                                       "name":  "固键·烟行调",
                                                       "icon":  "img/key/daiyan_static_3.png",
                                                       "text":  "攻击时每拥有1点额外的行动力，暴击率提高10%。"
                                                   },
                                                   {
                                                       "id":  "daiyan_static_4",
                                                       "name":  "固键·曼声传情",
                                                       "icon":  "img/key/daiyan_static_4.png",
                                                       "text":  "若自身行动力比目标高，则主动攻击前获得1层 校音 。"
                                                   },
                                                   {
                                                       "id":  "daiyan_static_5",
                                                       "name":  "固键·破阵",
                                                       "icon":  "img/key/daiyan_static_5.png",
                                                       "text":  "每拥有3层 校音 ，使用主动技能绝调金声时，额外驱散1个增益效果。"
                                                   },
                                                   {
                                                       "id":  "daiyan_static_6",
                                                       "name":  "固键·流芳",
                                                       "icon":  "img/key/daiyan_static_6.png",
                                                       "text":  "使用主动技能清商和鸣后，若本回合造成击杀，则恢复自身最大生命值的20%及2点稳态指数。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "daiyan_leap",
                                                  "name":  "跃键·行云流水之韵",
                                                  "icon":  "img/key/daiyan_leap.png",
                                                  "text":  "【1阶】 使用制胜技能逸响入神和进行 伏击 时，获得1层永久校音。 大回合结束时，若未进行 伏击 ，则获得2层永久校音并使下次主动攻击的伤害系数提高150%，稳态伤害提高4点。 使用制胜技能逸响入神后，对目标额外进行1次攻击，每拥有1层永久校音，造成100%攻击力的物理伤害和1点稳态伤害。 【2阶】 使用制胜技能逸响入神和进行伏击时，获得1层永久校音。大回合结束时，若未进行伏击，则获得2层永久校音并使下次主动攻击的伤害系数提高150%，稳态伤害提高4点。 使用制胜技能逸响入神后，对目标额外进行1次攻击，每拥有1层永久校音，造成100%攻击力的物理伤害和1点稳态伤害。"
                                              }
                                 },
                   "MosinnagantSSR":  {
                                          "affection":  {
                                                            "id":  "mosinnagant_love",
                                                            "name":  "契合键·热心肠",
                                                            "icon":  "img/key/mosinnagant_love.png",
                                                            "attrs":  [
                                                                          {
                                                                              "name":  "攻击",
                                                                              "value":  4.5
                                                                          },
                                                                          {
                                                                              "name":  "暴击",
                                                                              "value":  4.5
                                                                          },
                                                                          {
                                                                              "name":  "生命",
                                                                              "value":  4.5
                                                                          }
                                                                      ]
                                                        },
                                          "shared":  {
                                                         "id":  "mosinnagant_common",
                                                         "name":  "共键·看穿一切",
                                                         "icon":  "img/key/mosinnagant_common.png",
                                                         "attrs":  [

                                                                   ],
                                                         "text":  "拥有 洞察 时，造成伤害提高7%。"
                                                     },
                                          "fixed":  [
                                                        {
                                                            "id":  "mosinnagant_static_1",
                                                            "name":  "固键·治安巡逻小队",
                                                            "icon":  "img/key/mosinnagant_static_1.png",
                                                            "text":  "若目标拥有 麻痹 ，则对其造成的稳态伤害增加2点。"
                                                        },
                                                        {
                                                            "id":  "mosinnagant_static_2",
                                                            "name":  "固键·预备防御措施",
                                                            "icon":  "img/key/mosinnagant_static_2.png",
                                                            "text":  "使用主动技能制胜准星时，若造成电导伤害，则对其施加 麻痹 ，持续1回合，不再施加 导电 效果。"
                                                        },
                                                        {
                                                            "id":  "mosinnagant_static_3",
                                                            "name":  "固键·秩序维护",
                                                            "icon":  "img/key/mosinnagant_static_3.png",
                                                            "text":  "若目标拥有 麻痹 ，则攻击前对其施加2个减益效果。"
                                                        },
                                                        {
                                                            "id":  "mosinnagant_static_4",
                                                            "name":  "固键·积极调整心态",
                                                            "icon":  "img/key/mosinnagant_static_4.png",
                                                            "text":  "主动技能积极心态中，自身拥有 电击 时，攻击无视15%的掩体减伤。"
                                                        },
                                                        {
                                                            "id":  "mosinnagant_static_5",
                                                            "name":  "固键·专注办公",
                                                            "icon":  "img/key/mosinnagant_static_5.png",
                                                            "text":  "拥有 洞察 时，受到的稳态伤害降低1点。"
                                                        },
                                                        {
                                                            "id":  "mosinnagant_static_6",
                                                            "name":  "固键·机动巡视",
                                                            "icon":  "img/key/mosinnagant_static_6.png",
                                                            "text":  "若造成目标 麻痹 ，则主动攻击后获得3格移动追加。"
                                                        }
                                                    ],
                                          "leap":  {
                                                       "id":  "mosinnagant_leap",
                                                       "name":  "跃键·白色死神",
                                                       "icon":  "img/key/mosinnagant_leap.png",
                                                       "text":  "友方单位尝试对目标施加 麻痹 时，莫辛纳甘对目标施加 电火花 ，持续1回合，每个大回合至多生效1次。"
                                                   }
                                      },
                   "MacqiatoSSR":  {
                                       "affection":  {
                                                         "id":  "macqiato_love",
                                                         "name":  "契合键·焦糖心意",
                                                         "icon":  "img/key/macqiato_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击伤害",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "macqiato_common",
                                                      "name":  "共键·生存本能",
                                                      "icon":  "img/key/macqiato_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "行动开始时，若自身生命值大于80%，则受到攻击时，受到的稳态伤害降低2点，每回合至多生效1次。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "macqiato_static_1",
                                                         "name":  "固键·附加情报",
                                                         "icon":  "img/key/macqiato_static_1.png",
                                                         "text":  "主动技能冷厉闪狙造成击杀时，获得1点导染指数。"
                                                     },
                                                     {
                                                         "id":  "macqiato_static_2",
                                                         "name":  "固键·加冰加奶沫",
                                                         "icon":  "img/key/macqiato_static_2.png",
                                                         "text":  "战斗开始时获得3点导染指数。"
                                                     },
                                                     {
                                                         "id":  "macqiato_static_3",
                                                         "name":  "固键·不屈独狼",
                                                         "icon":  "img/key/macqiato_static_3.png",
                                                         "text":  "施放主动技能专业手段后，若自身周围半径3格内没有其他友方单位，则获得1层 独狼 。"
                                                     },
                                                     {
                                                         "id":  "macqiato_static_4",
                                                         "name":  "固键·休整时机",
                                                         "icon":  "img/key/macqiato_static_4.png",
                                                         "text":  "在冷凝地格上施放独狼领域、冷厉闪狙或专业手段后，驱散自身身上所有冷凝类减益效果，并获得3格移动追加。"
                                                     },
                                                     {
                                                         "id":  "macqiato_static_5",
                                                         "name":  "固键·加热加焦糖",
                                                         "icon":  "img/key/macqiato_static_5.png",
                                                         "text":  "战斗开始时，对全场生命值最高的敌方单位施加 颤栗杀机 。"
                                                     },
                                                     {
                                                         "id":  "macqiato_static_6",
                                                         "name":  "固键·绝对专注",
                                                         "icon":  "img/key/macqiato_static_6.png",
                                                         "text":  "战斗开始时，攻击力提高10%，持续到生命值首次低于100%。"
                                                     }
                                                 ],
                                       "leap":  {
                                                    "id":  "macqiato_leap",
                                                    "name":  "跃键·狙心锁定",
                                                    "icon":  "img/key/macqiato_leap.png",
                                                    "text":  "【1阶】伏击造成的暴击伤害提高30%。 使用制胜技能绝对心防后，获得 指令追加 ，且当前回合内返还主动技能冷厉闪狙消耗的导染指数，攻击首领单位前，对其施加 糖分过量 ，持续2回合。 【2阶】战斗开始时，自身攻击力提高30%，且攻击时无视敌方目标30%防御力；并在自身周围最近的1个空地格制造1个高台，自身处于高台时，造成的伤害提高80%，暴击伤害提高30%。 伏击命中目标后在其附近召唤1个 冰凝体 ， 冰凝体 出生时和行动结束时，对自身周围半径3格内的所有敌方目标施加嘲讽（被伏击的目标获得嘲讽后不会立刻生效），持续2回合。"
                                                }
                                   },
                   "JiangyuSSR":  {
                                      "affection":  {
                                                        "id":  "jiangyu_love",
                                                        "name":  "契合键·叛逆节拍",
                                                        "icon":  "img/key/jiangyu_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "jiangyu_common",
                                                     "name":  "共键·以武服人",
                                                     "icon":  "img/key/jiangyu_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "对处于稳态崩溃的敌方单位造成的伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "jiangyu_static_1",
                                                        "name":  "固键·气氛催化剂",
                                                        "icon":  "img/key/jiangyu_static_1.png",
                                                        "text":  "战斗开始时，获得4层 气势 。"
                                                    },
                                                    {
                                                        "id":  "jiangyu_static_2",
                                                        "name":  "固键·出奇制胜",
                                                        "icon":  "img/key/jiangyu_static_2.png",
                                                        "text":  "自身周围半径8格内的敌方单位主动攻击前，对其进行1次 伏击 ，造成60%攻击力的电导伤害和2点稳态伤害，技能前对目标施加 导电 ，持续1回合。每回合至多触发2次。"
                                                    },
                                                    {
                                                        "id":  "jiangyu_static_3",
                                                        "name":  "固键·无法抑制的行动力",
                                                        "icon":  "img/key/jiangyu_static_3.png",
                                                        "text":  "被施加 嘲讽 、 逃避 、 诱导 或 眩晕 后，立即驱散该效果。冷却1回合。"
                                                    },
                                                    {
                                                        "id":  "jiangyu_static_4",
                                                        "name":  "固键·凝神专注",
                                                        "icon":  "img/key/jiangyu_static_4.png",
                                                        "text":  "回合开始时，为攻击力最高的友方人形施加 正电荷 ，持续3回合。"
                                                    },
                                                    {
                                                        "id":  "jiangyu_static_5",
                                                        "name":  "固键·先下手为强",
                                                        "icon":  "img/key/jiangyu_static_5.png",
                                                        "text":  "拥有 正电荷 的友方单位（不包含自身）主动攻击前，优先对目标施加 防御降低II ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "jiangyu_static_6",
                                                        "name":  "固键·精英的游刃有余",
                                                        "icon":  "img/key/jiangyu_static_6.png",
                                                        "text":  "所有友方单位受到的稳态伤害降低1点。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "jiangyu_leap",
                                                   "name":  "跃键·跃动的表现欲",
                                                   "icon":  "img/key/jiangyu_leap.png",
                                                   "text":  "每进行一次 伏击 ，下一回合获得2点导染指数。 对拥有 负电荷 的目标进行 伏击 时，造成伤害提高20%。"
                                               }
                                  },
                   "KseniaSR":  {
                                    "affection":  {
                                                      "id":  "ksenia_love",
                                                      "name":  "契合键·生财之道",
                                                      "icon":  "img/key/ksenia_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "ksenia_common",
                                                   "name":  "共键·熊熊燃烧",
                                                   "icon":  "img/key/ksenia_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "生命",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "施加燃烧类增益时，有50%概率对目标施加1个增益效果，持续1回合。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "ksenia_static_1",
                                                      "name":  "固键·合作共赢",
                                                      "icon":  "img/key/ksenia_static_1.png",
                                                      "text":  "当对自身以外的友方目标治疗时，为其及自身随机施加1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "ksenia_static_2",
                                                      "name":  "固键·等价交换",
                                                      "icon":  "img/key/ksenia_static_2.png",
                                                      "text":  "使用主动技能有利循环时，每造成1次击杀，本回合 行动支援 次数增加1次。"
                                                  },
                                                  {
                                                      "id":  "ksenia_static_3",
                                                      "name":  "固键·稳定收益",
                                                      "icon":  "img/key/ksenia_static_3.png",
                                                      "text":  "造成燃烧伤害后，恢复造成伤害10%的生命值和1点稳态指数。"
                                                  },
                                                  {
                                                      "id":  "ksenia_static_4",
                                                      "name":  "固键·互惠互利",
                                                      "icon":  "img/key/ksenia_static_4.png",
                                                      "text":  "使用主动技能全面救援时，自身也可获得技能中相同增益效果。"
                                                  },
                                                  {
                                                      "id":  "ksenia_static_5",
                                                      "name":  "固键·友情附赠",
                                                      "icon":  "img/key/ksenia_static_5.png",
                                                      "text":  "施加燃烧类增益时，额外驱散1个减益效果。"
                                                  },
                                                  {
                                                      "id":  "ksenia_static_6",
                                                      "name":  "固键·优惠攻略",
                                                      "icon":  "img/key/ksenia_static_6.png",
                                                      "text":  "若行动结束时拥有 热态回复 ，则获得1点导染指数。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "ksenia_leap",
                                                 "name":  "跃键·情谊胜千金",
                                                 "icon":  "img/key/ksenia_leap.png",
                                                 "text":  "行动结束时，为稳态指数最低的友方人形恢复2点稳态指数。"
                                             }
                                },
                   "UllridSSR":  {
                                     "affection":  {
                                                       "id":  "ullrid_love",
                                                       "name":  "契合键·捏捏终结者",
                                                       "icon":  "img/key/ullrid_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "ullrid_common",
                                                    "name":  "共键·创口撕裂",
                                                    "icon":  "img/key/ullrid_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "攻击前若敌方目标生命值不满，则对其造成伤害提高7%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "ullrid_static_1",
                                                       "name":  "固键·迅疾的行动",
                                                       "icon":  "img/key/ullrid_static_1.png",
                                                       "text":  "拥有连旋时可以使用普攻和其他主动技能，但是额外消耗2点导染指数。"
                                                   },
                                                   {
                                                       "id":  "ullrid_static_2",
                                                       "name":  "固键·猎物锁定",
                                                       "icon":  "img/key/ullrid_static_2.png",
                                                       "text":  "敌方目标周围半径3格内无任何敌方单位时，无视该敌方目标30%防御。"
                                                   },
                                                   {
                                                       "id":  "ullrid_static_3",
                                                       "name":  "固键·适当的警戒",
                                                       "icon":  "img/key/ullrid_static_3.png",
                                                       "text":  "战斗开始时获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "ullrid_static_4",
                                                       "name":  "固键·理想化状态",
                                                       "icon":  "img/key/ullrid_static_4.png",
                                                       "text":  "自身3格范围内无友方目标时（不包含召唤物），自身暴击率提高20%。"
                                                   },
                                                   {
                                                       "id":  "ullrid_static_5",
                                                       "name":  "固键·首领的威压",
                                                       "icon":  "img/key/ullrid_static_5.png",
                                                       "text":  "当自身满生命值时，造成伤害提高15%。"
                                                   },
                                                   {
                                                       "id":  "ullrid_static_6",
                                                       "name":  "固键·猎手的敏锐",
                                                       "icon":  "img/key/ullrid_static_6.png",
                                                       "text":  "造成克制时，自身获得 攻击提升I ，持续2回合。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "ullrid_leap",
                                                  "name":  "跃键·决绝的追击",
                                                  "icon":  "img/key/ullrid_leap.png",
                                                  "text":  "【1阶】 使用主动技能利刃连旋后，若未击杀敌方目标，则对其追加1次90%攻击力的物理伤害和1点稳态伤害，且此次攻击造成的伤害提高30%。每回合至多触发3次。 使用主动技能利刃连旋前，对目标施加 猎物标记 ，技能后制胜技能隐迹追猎的冷却时间减少1回合。若连续命中同一个敌方目标，恢复自身1点导染指数。每个大回合至多触发1次。 释放制胜技能隐迹追猎前，自身获得满层 猎手天赋 。 猎手天赋 效果新增，若自身暴击率大于100%，每额外拥有1%暴击率，暴击伤害提高0.3%。所有友方单位造成的近战伤害提高10%；每消耗1层 猎手天赋 ，恢复自身1点导染指数。 猎物标记 效果新增，持有者获得 割裂伤 。 猎手天赋效果新增，若自身暴击率大于100%，每额外拥有1%暴击率，暴击伤害提高0.3%。所有友方单位造成的近战伤害提高10%;每消耗1层猎手天赋，恢复自身1点导染指数。 猎物标记效果新增，持有者获得割裂伤。"
                                              }
                                 },
                   "LittaraSR":  {
                                     "affection":  {
                                                       "id":  "littara_love",
                                                       "name":  "契合键·纸上心绪",
                                                       "icon":  "img/key/littara_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "littara_common",
                                                    "name":  "共键·弱点击破",
                                                    "icon":  "img/key/littara_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  3
                                                                  }
                                                              ],
                                                    "text":  "对拥有防御类减益的目标，造成伤害提高7%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "littara_static_1",
                                                       "name":  "固键·制定计划",
                                                       "icon":  "img/key/littara_static_1.png",
                                                       "text":  "战斗开始时获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "littara_static_2",
                                                       "name":  "固键·积累经验",
                                                       "icon":  "img/key/littara_static_2.png",
                                                       "text":  "每造成3次伤害，获得1点导染指数。"
                                                   },
                                                   {
                                                       "id":  "littara_static_3",
                                                       "name":  "固键·乘胜追击",
                                                       "icon":  "img/key/littara_static_3.png",
                                                       "text":  "若产生克制，则攻击后对目标随机施加1个减益效果，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "littara_static_4",
                                                       "name":  "固键·寻找破绽",
                                                       "icon":  "img/key/littara_static_4.png",
                                                       "text":  "若目标拥有防御类减益，则暴击率提高15%。"
                                                   },
                                                   {
                                                       "id":  "littara_static_5",
                                                       "name":  "固键·分析战局",
                                                       "icon":  "img/key/littara_static_5.png",
                                                       "text":  "使用主动技能绝佳时机时，对目标施加 攻击降低I ，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "littara_static_6",
                                                       "name":  "固键·积极进攻",
                                                       "icon":  "img/key/littara_static_6.png",
                                                       "text":  "使用主动技能可靠的掩护前，若未进行过移动，则造成伤害修改为范围燃烧伤害。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "littara_leap",
                                                  "name":  "跃键·战略家的凝视",
                                                  "icon":  "img/key/littara_leap.png",
                                                  "text":  "若目标拥有防御类减益，则对其造成伤害提升10%，且无视15%的掩体减伤。"
                                              }
                                 },
                   "SuomiSSR":  {
                                    "affection":  {
                                                      "id":  "suomi_love",
                                                      "name":  "契合键·摇滚格调",
                                                      "icon":  "img/key/suomi_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "suomi_common",
                                                   "name":  "共键·使命的加护",
                                                   "icon":  "img/key/suomi_common.png",
                                                   "attrs":  [

                                                             ],
                                                   "text":  "生命值低于80%时，恢复自身15%最大生命值的生命值，并获得 防御提升III ，持续2回合。一场战斗至多触发1次。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "suomi_static_1",
                                                      "name":  "固键·气势不能输",
                                                      "icon":  "img/key/suomi_static_1.png",
                                                      "text":  "使用主动技能凛冬制裁后，若目标处于稳态崩溃，则恢复自身2点稳态指数。"
                                                  },
                                                  {
                                                      "id":  "suomi_static_2",
                                                      "name":  "固键·小小守护者",
                                                      "icon":  "img/key/suomi_static_2.png",
                                                      "text":  "战斗开始时，获得3点导染指数。"
                                                  },
                                                  {
                                                      "id":  "suomi_static_3",
                                                      "name":  "固键·善意的回馈",
                                                      "icon":  "img/key/suomi_static_3.png",
                                                      "text":  "使用主动技能瑞雪报恩时，若目标生命值低于80%，则获得1点导染指数。"
                                                  },
                                                  {
                                                      "id":  "suomi_static_4",
                                                      "name":  "固键·动作要迅速",
                                                      "icon":  "img/key/suomi_static_4.png",
                                                      "text":  "回合开始时，每有一个生命值低于80%的友方单位（不包含自身），自身行动力增加1格。"
                                                  },
                                                  {
                                                      "id":  "suomi_static_5",
                                                      "name":  "固键·不可以倒下",
                                                      "icon":  "img/key/suomi_static_5.png",
                                                      "text":  "被施加 眩晕 、 嘲讽 、 麻痹 时，立刻驱散该效果，且一回合内免疫 眩晕 、 嘲讽 、 麻痹 ，同时自身获得 寒霜屏障 ，持续3回合， 寒霜屏障 吸收量为60%初始攻击力，至多不超过100%最大生命值。一场战斗至多触发1次。"
                                                  },
                                                  {
                                                      "id":  "suomi_static_6",
                                                      "name":  "固键·后勤保障中",
                                                      "icon":  "img/key/suomi_static_6.png",
                                                      "text":  "行动结束时，若自身稳态指数大于0，则恢复10%最大生命值的生命值和1点稳态指数。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "suomi_leap",
                                                 "name":  "跃键·摇滚雪绒花",
                                                 "icon":  "img/key/suomi_leap.png",
                                                 "text":  "行动支援 造成的伤害改为冷凝伤害。友方单位拥有 寒霜屏障 时，造成的冷凝伤害提高15%，回合开始时恢复4点稳态指数。友方单位攻击前，若没有 寒霜屏障 ，则索米立刻为其施加 寒霜屏障 ，持续2回合，吸收量为60%索米初始攻击力，至多不超过100%目标最大生命值。使用制胜技能雪域明光时，对敌方目标施加 冰封 ，持续2回合。"
                                             }
                                },
                   "PapashaSSR":  {
                                      "affection":  {
                                                        "id":  "papasha_love",
                                                        "name":  "契合键·坚守的信念",
                                                        "icon":  "img/key/papasha_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "防御",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "papasha_common",
                                                     "name":  "共键·闪亮的勋章",
                                                     "icon":  "img/key/papasha_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "友方单位（不包含自身）支援技能造成的伤害提高10%。每回合至多触发1次。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "papasha_static_1",
                                                        "name":  "固键·与光荣同在",
                                                        "icon":  "img/key/papasha_static_1.png",
                                                        "text":  "主动技能荣誉捍卫攻击大型目标时，造成伤害提高20%，护城卫士技能反恐支援造成的稳态伤害提高2点。"
                                                    },
                                                    {
                                                        "id":  "papasha_static_2",
                                                        "name":  "固键·誓死掩护",
                                                        "icon":  "img/key/papasha_static_2.png",
                                                        "text":  "护城卫士处于 修整 状态时，波波沙造成伤害提高20%。"
                                                    },
                                                    {
                                                        "id":  "papasha_static_3",
                                                        "name":  "固键·坚定的信念",
                                                        "icon":  "img/key/papasha_static_3.png",
                                                        "text":  "护城卫士不会自行移动，但其攻击力提高10%。"
                                                    },
                                                    {
                                                        "id":  "papasha_static_4",
                                                        "name":  "固键·最后攻坚",
                                                        "icon":  "img/key/papasha_static_4.png",
                                                        "text":  "主动技能默契突围造成伤害时，若护城卫士周围半径3格内没有敌方单位，造成伤害提高10%。"
                                                    },
                                                    {
                                                        "id":  "papasha_static_5",
                                                        "name":  "固键·我学习一下",
                                                        "icon":  "img/key/papasha_static_5.png",
                                                        "text":  "回合开始时，若自身拥有的可驱散增益效果小于等于1个，则获得1个随机可驱散增益，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "papasha_static_6",
                                                        "name":  "固键·同志的力量",
                                                        "icon":  "img/key/papasha_static_6.png",
                                                        "text":  "回合开始时，自身与护城卫士之间攻击力较低者获得 勋章的辉光 ，持续1回合。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "papasha_leap",
                                                   "name":  "跃键·不落城池",
                                                   "icon":  "img/key/papasha_leap.png",
                                                   "text":  "护城卫士造成的伤害提高50%。护城卫士在场时，使全体友方实体召唤物造成的伤害提高30%，行动结束时获得 减伤III ，持续1回合。 主动技能默契突围消耗的导染减少3点，释放时，护城卫士获得2层 钢铁铸造 。"
                                               }
                                  },
                   "LottaSR":  {
                                   "affection":  {
                                                     "id":  "lotta_love",
                                                     "name":  "契合键·新芽",
                                                     "icon":  "img/key/lotta_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "lotta_common",
                                                  "name":  "共键·捕猎陷阱",
                                                  "icon":  "img/key/lotta_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "攻击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "对拥有移动类减益的敌方目标，造成伤害提高7%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "lotta_static_1",
                                                     "name":  "固键·默默打气",
                                                     "icon":  "img/key/lotta_static_1.png",
                                                     "text":  "战斗开始时，获得3点导染指数。"
                                                 },
                                                 {
                                                     "id":  "lotta_static_2",
                                                     "name":  "固键·信心增强",
                                                     "icon":  "img/key/lotta_static_2.png",
                                                     "text":  "对拥有冷凝类减益的敌方目标造成伤害提高10%。"
                                                 },
                                                 {
                                                     "id":  "lotta_static_3",
                                                     "name":  "固键·颤抖瞄准",
                                                     "icon":  "img/key/lotta_static_3.png",
                                                     "text":  "若造成冷凝伤害，则对目标施加 凝固 ，持续2回合。"
                                                 },
                                                 {
                                                     "id":  "lotta_static_4",
                                                     "name":  "固键·谨慎躲避",
                                                     "icon":  "img/key/lotta_static_4.png",
                                                     "text":  "生命值大于50%时，受到的范围伤害降低20%。"
                                                 },
                                                 {
                                                     "id":  "lotta_static_5",
                                                     "name":  "固键·壮胆大喊",
                                                     "icon":  "img/key/lotta_static_5.png",
                                                     "text":  "主动技能冷静弹药新增效果，将目标击退3格。"
                                                 },
                                                 {
                                                     "id":  "lotta_static_6",
                                                     "name":  "固键·定心安抚",
                                                     "icon":  "img/key/lotta_static_6.png",
                                                     "text":  "主动技能心智调整新增效果，获得1层 速效屏障 。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "lotta_leap",
                                                "name":  "跃键·勇气的回报",
                                                "icon":  "img/key/lotta_leap.png",
                                                "text":  "攻击前，若目标稳态指数大于0，则对其造成伤害提高10%。"
                                            }
                               },
                   "AndorisSSR":  {
                                      "affection":  {
                                                        "id":  "andoris_love",
                                                        "name":  "契合键·润物无声",
                                                        "icon":  "img/key/andoris_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "防御",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "andoris_common",
                                                     "name":  "共键·感性磁场",
                                                     "icon":  "img/key/andoris_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "防御",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "回合开始时，场上每有1个电导类减益，自身造成伤害提高5%，至多提高10%，持续到大回合结束。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "andoris_static_1",
                                                        "name":  "固键·侧耳倾听",
                                                        "icon":  "img/key/andoris_static_1.png",
                                                        "text":  "战斗开始时，获得3点导染指数。"
                                                    },
                                                    {
                                                        "id":  "andoris_static_2",
                                                        "name":  "固键·迂缓回路",
                                                        "icon":  "img/key/andoris_static_2.png",
                                                        "text":  "自身造成电导伤害时，若目标处于稳态崩溃，且其拥有 电充能 ，则额外造成10%攻击力的固定伤害。"
                                                    },
                                                    {
                                                        "id":  "andoris_static_3",
                                                        "name":  "固键·慢工细作",
                                                        "icon":  "img/key/andoris_static_3.png",
                                                        "text":  "安朵丝为友方施加 正电荷 时，为其和所有自巡炮驱散2个减益效果。"
                                                    },
                                                    {
                                                        "id":  "andoris_static_4",
                                                        "name":  "固键·调谐联结",
                                                        "icon":  "img/key/andoris_static_4.png",
                                                        "text":  "安朵丝在场时，拥有 正电荷 的友方单位行动结束时，若自身周围半径3格内存在其他拥有 正电荷 的友方单位，则获得1层 掩护 。"
                                                    },
                                                    {
                                                        "id":  "andoris_static_5",
                                                        "name":  "固键·情报共享",
                                                        "icon":  "img/key/andoris_static_5.png",
                                                        "text":  "战斗开始时，为所有友方人形施加 正电荷 ，持续3回合。"
                                                    },
                                                    {
                                                        "id":  "andoris_static_6",
                                                        "name":  "固键·预先侦查",
                                                        "icon":  "img/key/andoris_static_6.png",
                                                        "text":  "战斗开始时，为最大生命值最高的敌方单位施加 电充能 ，持续2回合。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "andoris_leap",
                                                   "name":  "跃键·不渝守望",
                                                   "icon":  "img/key/andoris_leap.png",
                                                   "text":  "自巡炮行动结束时，若未造成伤害，则安朵丝恢复2点导染指数。自巡炮对拥有 负电荷 的敌方目标进行攻击前，自身攻击力提高50%。 拥有 正电荷 的友方单位受到伤害时，由安朵丝承担的伤害提高到65%，替友方单位承担伤害后，全场友方单位每有1层 钝感力 ，安朵丝恢复自身0.5%的最大生命值。 安朵丝行动结束时，为距离自身最近的友方人形施加 正电荷 ，持续3回合。"
                                               }
                                  },
                   "FayeSSR":  {
                                   "affection":  {
                                                     "id":  "faye_love",
                                                     "name":  "契合键·生死一线",
                                                     "icon":  "img/key/faye_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "faye_common",
                                                  "name":  "共键·死斗",
                                                  "icon":  "img/key/faye_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "暴击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "使自身周围半径3格内的敌方单位受到的物理伤害提高5%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "faye_static_1",
                                                     "name":  "固键·寻息追踪",
                                                     "icon":  "img/key/faye_static_1.png",
                                                     "text":  "场上每存在1个拥有 裂伤 的敌方单位时，自身提高1格行动力，至多提高3格。"
                                                 },
                                                 {
                                                     "id":  "faye_static_2",
                                                     "name":  "固键·全力斩击",
                                                     "icon":  "img/key/faye_static_2.png",
                                                     "text":  "主动技能破障回旋仅命中1个单位时，造成伤害提高20%。"
                                                 },
                                                 {
                                                     "id":  "faye_static_3",
                                                     "name":  "固键·救援响应补给",
                                                     "icon":  "img/key/faye_static_3.png",
                                                     "text":  "战斗开始时，获得3点导染指数。"
                                                 },
                                                 {
                                                     "id":  "faye_static_4",
                                                     "name":  "固键·急救预备方案",
                                                     "icon":  "img/key/faye_static_4.png",
                                                     "text":  "生命值低于50%时，受到的治疗效果提高30%。"
                                                 },
                                                 {
                                                     "id":  "faye_static_5",
                                                     "name":  "固键·险境防卫",
                                                     "icon":  "img/key/faye_static_5.png",
                                                     "text":  "行动结束时，若自身周围半径2格内存在拥有 裂伤 的敌方单位，则获得 范围防御I ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "faye_static_6",
                                                     "name":  "固键·搏击进行时",
                                                     "icon":  "img/key/faye_static_6.png",
                                                     "text":  "拥有 创口 的敌方单位死亡时，自身提高4%的攻击力，至多提高20%。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "faye_leap",
                                                "name":  "跃键·永不停息的斗魂",
                                                "icon":  "img/key/faye_leap.png",
                                                "text":  "对拥有 创口 的敌方目标造成伤害时，无视目标50%的防御，且攻击力提高15%。使用制胜技能无人生还后，对目标施加2层 裂伤 。使用飞斧或旋斧后，对目标施加 移动失效 ，持续1回合。"
                                            }
                               },
                   "VectorSSR":  {
                                     "affection":  {
                                                       "id":  "vector_love",
                                                       "name":  "契合键·悲剧预演",
                                                       "icon":  "img/key/vector_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "vector_common",
                                                    "name":  "共键·丧钟",
                                                    "icon":  "img/key/vector_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "回合开始时，若场上存在拥有燃烧类减益的敌方单位，攻击力提高8%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "vector_static_1",
                                                       "name":  "固键·临终关怀",
                                                       "icon":  "img/key/vector_static_1.png",
                                                       "text":  "使用主动技能末路熔断若击杀主目标，则在其及其周围半径3格内产生 焚化 地格，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "vector_static_2",
                                                       "name":  "固键·悲观主义溅射",
                                                       "icon":  "img/key/vector_static_2.png",
                                                       "text":  "战斗开始时获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "vector_static_3",
                                                       "name":  "固键·消极型支援",
                                                       "icon":  "img/key/vector_static_3.png",
                                                       "text":  "主动攻击前，驱散敌方目标2个增益效果。"
                                                   },
                                                   {
                                                       "id":  "vector_static_4",
                                                       "name":  "固键·绝望的蔓延",
                                                       "icon":  "img/key/vector_static_4.png",
                                                       "text":  "主动攻击对大型目标造成伤害时，追加一次15%攻击力的固定伤害。"
                                                   },
                                                   {
                                                       "id":  "vector_static_5",
                                                       "name":  "固键·不幸言中",
                                                       "icon":  "img/key/vector_static_5.png",
                                                       "text":  "处于燃烧类地格上时，受到伤害降低20%，行动结束时，恢复2点稳态指数和10%生命值上限的生命值。"
                                                   },
                                                   {
                                                       "id":  "vector_static_6",
                                                       "name":  "固键·负能量激励",
                                                       "icon":  "img/key/vector_static_6.png",
                                                       "text":  "射程内敌方单位被施加溢火时，进行 临机支援 ，造成60%攻击力的燃烧伤害和1点稳态伤害。一回合至多1次。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "vector_leap",
                                                  "name":  "跃键·颓丧共感",
                                                  "icon":  "img/key/vector_leap.png",
                                                  "text":  "主动攻击后，制胜技能壮烈终章冷却时间减少1回合。 友方单位进行造成燃烧伤害的支援攻击后，自身获得1点导染指数并为全场所有友方目标恢复15%攻击力的生命值，每回合至多触发4次。"
                                              }
                                 },
                   "BiyocaSSR":  {
                                     "affection":  {
                                                       "id":  "biyoca_love",
                                                       "name":  "契合键·跃然心事",
                                                       "icon":  "img/key/biyoca_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "biyoca_common",
                                                    "name":  "共键·争夺宠爱的决心",
                                                    "icon":  "img/key/biyoca_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "若消耗行动力，则造成伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "biyoca_static_1",
                                                       "name":  "固键·蓬勃朝气",
                                                       "icon":  "img/key/biyoca_static_1.png",
                                                       "text":  "潜藏 效果结束时，自身恢复30%最大生命值的生命值和4点稳态指数。"
                                                   },
                                                   {
                                                       "id":  "biyoca_static_2",
                                                       "name":  "固键·眼泪攻势",
                                                       "icon":  "img/key/biyoca_static_2.png",
                                                       "text":  "若自身拥有 持续放电 ，则免疫移动类减益效果。"
                                                   },
                                                   {
                                                       "id":  "biyoca_static_3",
                                                       "name":  "固键·气氛活跃者",
                                                       "icon":  "img/key/biyoca_static_3.png",
                                                       "text":  "回合开始时，若自身周围半径5格内有敌方单位，则获得 移动提升I ，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "biyoca_static_4",
                                                       "name":  "固键·翘起的尾巴",
                                                       "icon":  "img/key/biyoca_static_4.png",
                                                       "text":  "使用主动技能爆裂果壳攻击拥有 负电荷 的敌方目标时，攻击力提高10%。"
                                                   },
                                                   {
                                                       "id":  "biyoca_static_5",
                                                       "name":  "固键·渴望的夸奖",
                                                       "icon":  "img/key/biyoca_static_5.png",
                                                       "text":  "行动结束时，若场上存在拥有 负电荷 的首领单位，则自身获得 暴击提升I 和 伤害提升I ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "biyoca_static_6",
                                                       "name":  "固键·制胜心机",
                                                       "icon":  "img/key/biyoca_static_6.png",
                                                       "text":  "施放制胜技能跃动弧光前，驱散敌方目标2个增益效果。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "biyoca_leap",
                                                  "name":  "跃键·松鼠的觉悟",
                                                  "icon":  "img/key/biyoca_leap.png",
                                                  "text":  "主动技能松枝飞跃改为造成电导伤害，此次攻击造成的暴击伤害提高，提高量为场上 正电荷 个数×5%，至多提高25%。 使用主动技能爆裂果壳与制胜技能跃动弧光时，若消耗的行动力小于10点，则视为消耗10点行动力。"
                                              }
                                 },
                   "SpringfieldSSR":  {
                                          "affection":  {
                                                            "id":  "springfield_love",
                                                            "name":  "契合键·灵犀守候",
                                                            "icon":  "img/key/springfield_love.png",
                                                            "attrs":  [
                                                                          {
                                                                              "name":  "攻击",
                                                                              "value":  4.5
                                                                          },
                                                                          {
                                                                              "name":  "防御",
                                                                              "value":  4.5
                                                                          },
                                                                          {
                                                                              "name":  "生命",
                                                                              "value":  4.5
                                                                          }
                                                                      ]
                                                        },
                                          "shared":  {
                                                         "id":  "springfield_common",
                                                         "name":  "共键·滴水不漏",
                                                         "icon":  "img/key/springfield_common.png",
                                                         "attrs":  [

                                                                   ],
                                                         "text":  "回合开始时，若自身稳态指数不满，获得 持续回稳II ，持续1回合。"
                                                     },
                                          "fixed":  [
                                                        {
                                                            "id":  "springfield_static_1",
                                                            "name":  "固键·凝聚核心",
                                                            "icon":  "img/key/springfield_static_1.png",
                                                            "text":  "使用制胜技能守护之道时，会将所有目标朝中心拉拽3格。"
                                                        },
                                                        {
                                                            "id":  "springfield_static_2",
                                                            "name":  "固键·情报探悉",
                                                            "icon":  "img/key/springfield_static_2.png",
                                                            "text":  "主动攻击前，驱散目标身上1个增益效果。"
                                                        },
                                                        {
                                                            "id":  "springfield_static_3",
                                                            "name":  "固键·飞讯连结",
                                                            "icon":  "img/key/springfield_static_3.png",
                                                            "text":  "场上存在塔瑞兹时，全体友方单位防御力提高10%。"
                                                        },
                                                        {
                                                            "id":  "springfield_static_4",
                                                            "name":  "固键·通晓人心",
                                                            "icon":  "img/key/springfield_static_4.png",
                                                            "text":  "若目标的生命值低于80%，则治疗效果提高15%。"
                                                        },
                                                        {
                                                            "id":  "springfield_static_5",
                                                            "name":  "固键·笑容背后",
                                                            "icon":  "img/key/springfield_static_5.png",
                                                            "text":  "主动攻击前，为敌方目标施加浊刻弱点，持续1回合。"
                                                        },
                                                        {
                                                            "id":  "springfield_static_6",
                                                            "name":  "固键·温柔安抚",
                                                            "icon":  "img/key/springfield_static_6.png",
                                                            "text":  "对稳态崩溃的目标进行主动治疗时，额外恢复2点稳态指数。"
                                                        }
                                                    ],
                                          "leap":  {
                                                       "id":  "springfield_leap",
                                                       "name":  "跃键·守望相依",
                                                       "icon":  "img/key/springfield_leap.png",
                                                       "text":  "主动技能遥天援济的效果对全体友方单位生效。 使用制胜技能守护之道后在目标周围召唤 爱尔辛 。 若 爱尔辛 存在，友方实体召唤物造成的伤害提高50%。其他友方实体召唤物每造成1次浊刻伤害，对目标施加1层 潮濡 ， 爱尔辛 的被动技能啄击触发时消耗 潮濡 ，每消耗1层该效果，啄击的伤害系数提高5%。"
                                                   }
                                      },
                   "QiuhuaSSR":  {
                                     "affection":  {
                                                       "id":  "qiuhua_love",
                                                       "name":  "契合键·烹饪顾问",
                                                       "icon":  "img/key/qiuhua_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "qiuhua_common",
                                                    "name":  "共键·精烹美味",
                                                    "icon":  "img/key/qiuhua_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "回合外攻击 造成燃烧伤害时，造成的伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "qiuhua_static_1",
                                                       "name":  "固键·备餐",
                                                       "icon":  "img/key/qiuhua_static_1.png",
                                                       "text":  "战斗开始时，获得3点导染指数。"
                                                   },
                                                   {
                                                       "id":  "qiuhua_static_2",
                                                       "name":  "固键·炉灶旺火",
                                                       "icon":  "img/key/qiuhua_static_2.png",
                                                       "text":  "回合开始时，对生命值最高的敌方单位施加持续3回合的 焦痕 ，冷却时间2回合。"
                                                   },
                                                   {
                                                       "id":  "qiuhua_static_3",
                                                       "name":  "固键·砍瓜切菜",
                                                       "icon":  "img/key/qiuhua_static_3.png",
                                                       "text":  "免疫燃烧类地格的负面效果和所有燃烧类减益效果。行动结束时，若处于燃烧类地格上，则恢复2点稳态指数和10%最大生命值的生命值。"
                                                   },
                                                   {
                                                       "id":  "qiuhua_static_4",
                                                       "name":  "固键·烈火烹油",
                                                       "icon":  "img/key/qiuhua_static_4.png",
                                                       "text":  "主动攻击前，为敌方目标施加 溢火 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "qiuhua_static_5",
                                                       "name":  "固键·炊烟缭绕",
                                                       "icon":  "img/key/qiuhua_static_5.png",
                                                       "text":  "移动后，获得1层 速效屏障 。"
                                                   },
                                                   {
                                                       "id":  "qiuhua_static_6",
                                                       "name":  "固键·酒足饭饱",
                                                       "icon":  "img/key/qiuhua_static_6.png",
                                                       "text":  "临机支援前，驱散目标身上1个增益效果。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "qiuhua_leap",
                                                  "name":  "跃键·猛火快炒",
                                                  "icon":  "img/key/qiuhua_leap.png",
                                                  "text":  "临机支援 的系数提高30%且造成伤害时无视目标15%的防御力；每进行1次 临机支援 ，自身获得1层 锅气 ，持续2个大回合。 持有焦痕的单位死亡时，对周围半径3格内所有友方单位造成秋桦130%攻击力的范围燃烧伤害。 主动技能腾空飞跃造成伤害时，在目标周围半径1格内产生 焚化 地格，持续2回合。"
                                              }
                                 },
                   "HarpsySSR":  {
                                     "affection":  {
                                                       "id":  "harpsy_love",
                                                       "name":  "契合键·胆小鬼的苦恼",
                                                       "icon":  "img/key/harpsy_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "harpsy_common",
                                                    "name":  "共键·可靠技术力",
                                                    "icon":  "img/key/harpsy_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "施加减益效果后，造成的伤害提高10%，持续1个大回合。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "harpsy_static_1",
                                                       "name":  "固键·移动基站",
                                                       "icon":  "img/key/harpsy_static_1.png",
                                                       "text":  "使用主动技能广域增幅后获得6格 移动追加 。"
                                                   },
                                                   {
                                                       "id":  "harpsy_static_2",
                                                       "name":  "固键·暴力改装",
                                                       "icon":  "img/key/harpsy_static_2.png",
                                                       "text":  "施加 查杀程序 时，额外对目标施加 退行 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "harpsy_static_3",
                                                       "name":  "固键·多手准备",
                                                       "icon":  "img/key/harpsy_static_3.png",
                                                       "text":  "自身行动结束后，持有 优先进程 的友方单位获得 移动提升II ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "harpsy_static_4",
                                                       "name":  "固键·伙伴的力量",
                                                       "icon":  "img/key/harpsy_static_4.png",
                                                       "text":  "场上每存在1个持有 优先进程 的友方单位，每层 查杀程序 生效时伤害系数提高2%。"
                                                   },
                                                   {
                                                       "id":  "harpsy_static_5",
                                                       "name":  "固键·勇气的凝聚",
                                                       "icon":  "img/key/harpsy_static_5.png",
                                                       "text":  "对持有 优先进程 的友方人形使用主动技能广域增幅后，自身暴击率提高20%，持续1个大回合。"
                                                   },
                                                   {
                                                       "id":  "harpsy_static_6",
                                                       "name":  "固键·远距离聆听",
                                                       "icon":  "img/key/harpsy_static_6.png",
                                                       "text":  "主动技能和普攻的射程增加2格。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "harpsy_leap",
                                                  "name":  "跃键·裂解式入侵",
                                                  "icon":  "img/key/harpsy_leap.png",
                                                  "text":  "使用制胜技能网络重拳后对目标施加退行，持续1回合。主动技能攻击后若目标拥有退行，则施加移动降低III，持续1回合。 主动技能攻击后施加3层查杀程序。 自身造成伤害时，每有1个友方单位拥有优先进程，自身造成的酸蚀伤害提高5%。"
                                              }
                                 },
                   "ZhaohuiSSR":  {
                                      "affection":  {
                                                        "id":  "zhaohui_love",
                                                        "name":  "契合键·晖光同行",
                                                        "icon":  "img/key/zhaohui_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "zhaohui_common",
                                                     "name":  "共键·唢呐音域",
                                                     "icon":  "img/key/zhaohui_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "回合开始时，下一次主动攻击暴击伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "zhaohui_static_1",
                                                        "name":  "固键·命门识破",
                                                        "icon":  "img/key/zhaohui_static_1.png",
                                                        "text":  "对拥有浊刻类减益的目标造成伤害提高10%"
                                                    },
                                                    {
                                                        "id":  "zhaohui_static_2",
                                                        "name":  "固键·嫉恶如仇",
                                                        "icon":  "img/key/zhaohui_static_2.png",
                                                        "text":  "主动技能夺影索仅命中1个目标时，额外对其造成1次10%攻击力的固定伤害，并施加 潮湿 ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "zhaohui_static_3",
                                                        "name":  "固键·缓冲时间",
                                                        "icon":  "img/key/zhaohui_static_3.png",
                                                        "text":  "若场上存在定息镝，则自身行动结束时，恢复自身10%的生命值。"
                                                    },
                                                    {
                                                        "id":  "zhaohui_static_4",
                                                        "name":  "固键·正道的光",
                                                        "icon":  "img/key/zhaohui_static_4.png",
                                                        "text":  "使用主动技能定风波时，自身获得1层 速效屏障 ，并将目标击退2格。"
                                                    },
                                                    {
                                                        "id":  "zhaohui_static_5",
                                                        "name":  "固键·定场旋律",
                                                        "icon":  "img/key/zhaohui_static_5.png",
                                                        "text":  "若自身处于定息镝周围半径2格内时，受到的稳态伤害降低1点，受到范围伤害降低30%。"
                                                    },
                                                    {
                                                        "id":  "zhaohui_static_6",
                                                        "name":  "固键·冷笑话检定",
                                                        "icon":  "img/key/zhaohui_static_6.png",
                                                        "text":  "行动支援 前，驱散目标2个增益效果。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "zhaohui_leap",
                                                   "name":  "跃键·形影归一",
                                                   "icon":  "img/key/zhaohui_leap.png",
                                                   "text":  "对稳态崩溃的目标，造成的浊刻伤害提高45%。 在被动技能十面埋伏中选取定息镝进行跳跃后，可对射程内最近的敌方目标造成80%攻击力的浊刻伤害，2点稳态伤害，并施加 潮湿 ，持续2回合；自身获得1点导染指数。"
                                               }
                                  },
                   "MishtySSR":  {
                                     "affection":  {
                                                       "id":  "mishty_love",
                                                       "name":  "契合键·酣眠",
                                                       "icon":  "img/key/mishty_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "防御",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "mishty_common",
                                                    "name":  "共键·现在是游戏时间",
                                                    "icon":  "img/key/mishty_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "普攻造成的伤害提高20%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "mishty_static_1",
                                                       "name":  "固键·好梦碎片",
                                                       "icon":  "img/key/mishty_static_1.png",
                                                       "text":  "使用普攻睡前热身后，获得1个随机增益效果，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "mishty_static_2",
                                                       "name":  "固键·祝你长眠",
                                                       "icon":  "img/key/mishty_static_2.png",
                                                       "text":  "若产生克制，则攻击后对目标施加 毒素环绕 。"
                                                   },
                                                   {
                                                       "id":  "mishty_static_3",
                                                       "name":  "固键·恐怖电影之夜",
                                                       "icon":  "img/key/mishty_static_3.png",
                                                       "text":  "使用主动技能爆裂梦潮时，攻击前，对大型目标施加 浓酸腐蚀II ，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "mishty_static_4",
                                                       "name":  "固键·快点打完好睡觉",
                                                       "icon":  "img/key/mishty_static_4.png",
                                                       "text":  "使用主动技能无梦好夜时，在最近的敌方单位周围半径2格内产生 毒瘴 地格，持续2回合。"
                                                   },
                                                   {
                                                       "id":  "mishty_static_5",
                                                       "name":  "固键·废柴精神",
                                                       "icon":  "img/key/mishty_static_5.png",
                                                       "text":  "使用普攻睡前热身前，驱散目标2个增益效果。"
                                                   },
                                                   {
                                                       "id":  "mishty_static_6",
                                                       "name":  "固键·懒人沙发护体",
                                                       "icon":  "img/key/mishty_static_6.png",
                                                       "text":  "自身拥有2个及以上增益效果时，受到的精准伤害降低20%。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "mishty_leap",
                                                  "name":  "跃键·梦游暴走症",
                                                  "icon":  "img/key/mishty_leap.png",
                                                  "text":  "战斗开始时，进入 梦游 状态，并新增技能 苏醒指令 。 回合开始时若处于 梦游 状态，消耗自身所有导染指数，获得满层助眠套件，持续2回合，每消耗1点导染指数，驱散自身1个减益效果，并为所有友方单位施加1层 梦境亢奋 ，持续1个大回合。 行动结束时若处于 梦游 状态，则自身每拥有1层梦境亢奋，对距离最近的敌方单位释放1次 残梦流弹 ，并为所有友方单位恢复米什缇10%攻击力的生命值和1点稳态指数。"
                                              }
                                 },
                   "ClukaySSR":  {
                                     "affection":  {
                                                       "id":  "clukay_love",
                                                       "name":  "契合键·银翼飞驰",
                                                       "icon":  "img/key/clukay_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "clukay_common",
                                                    "name":  "共键·杀意返场",
                                                    "icon":  "img/key/clukay_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "回合开始时，若自身满导染指数，则下一次主动攻击造成的范围伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "clukay_static_1",
                                                       "name":  "固键·致命缠绞",
                                                       "icon":  "img/key/clukay_static_1.png",
                                                       "text":  "回合开始时，若只有1个敌方目标，则对其施加1层 强酸倾压 ，持续2回合。并获得2点导染指数。"
                                                   },
                                                   {
                                                       "id":  "clukay_static_2",
                                                       "name":  "固键·一举击溃",
                                                       "icon":  "img/key/clukay_static_2.png",
                                                       "text":  "制胜技能重创漂移若只命中1个目标，则对其造成伤害提高30%。"
                                                   },
                                                   {
                                                       "id":  "clukay_static_3",
                                                       "name":  "固键·绝不手软",
                                                       "icon":  "img/key/clukay_static_3.png",
                                                       "text":  "强酸倾压 效果新增，对稳态崩溃的目标，造成伤害提高15%。"
                                                   },
                                                   {
                                                       "id":  "clukay_static_4",
                                                       "name":  "固键·坚实的后背",
                                                       "icon":  "img/key/clukay_static_4.png",
                                                       "text":  "其他友方单位每进行一次支援攻击，自身获得1点导染指数。"
                                                   },
                                                   {
                                                       "id":  "clukay_static_5",
                                                       "name":  "固键·超越极限的边界",
                                                       "icon":  "img/key/clukay_static_5.png",
                                                       "text":  "制胜技能重创漂移生效范围宽度减少至3格，每减少1格，造成伤害提高10%。"
                                                   },
                                                   {
                                                       "id":  "clukay_static_6",
                                                       "name":  "固键·命定的反击时刻",
                                                       "icon":  "img/key/clukay_static_6.png",
                                                       "text":  "持有者受到 毒性侵入 的伤害后若未死亡，则获得1层 强酸倾压 ，持续2回合。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "clukay_leap",
                                                  "name":  "跃键·精英人形的骄傲",
                                                  "icon":  "img/key/clukay_leap.png",
                                                  "text":  "战斗开始时，召唤 獠牙 跟随自身。 触发 强酸倾压 效果时，每持有1层 好胜心 ，每层 强酸倾压 的伤害系数额外提高1%。"
                                              }
                                 },
                   "PeriSSR":  {
                                   "affection":  {
                                                     "id":  "peri_love",
                                                     "name":  "契合键·行商有道",
                                                     "icon":  "img/key/peri_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "防御",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "peri_common",
                                                  "name":  "共键·持续长大中",
                                                  "icon":  "img/key/peri_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "生命",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "多次攻击同一敌方单位时，对其造成的异位伤害提高10%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "peri_static_1",
                                                     "name":  "固键·交易的本金",
                                                     "icon":  "img/key/peri_static_1.png",
                                                     "text":  "战斗开始时，获得3点导染指数。"
                                                 },
                                                 {
                                                     "id":  "peri_static_2",
                                                     "name":  "固键·帅气又可靠",
                                                     "icon":  "img/key/peri_static_2.png",
                                                     "text":  "每持有1层 热销投资 ，防御提高5%。"
                                                 },
                                                 {
                                                     "id":  "peri_static_3",
                                                     "name":  "固键·绝密商业情报",
                                                     "icon":  "img/key/peri_static_3.png",
                                                     "text":  "回合开始时，若自身拥有的 热销投资 层数大于2层，则获得2层 掩护 。"
                                                 },
                                                 {
                                                     "id":  "peri_static_4",
                                                     "name":  "固键·独当一面",
                                                     "icon":  "img/key/peri_static_4.png",
                                                     "text":  "使用制胜技能后，驱散自身所有减益效果。"
                                                 },
                                                 {
                                                     "id":  "peri_static_5",
                                                     "name":  "固键·成熟的大人",
                                                     "icon":  "img/key/peri_static_5.png",
                                                     "text":  "被施加 眩晕 、 嘲讽 、 麻痹 时，立刻驱散该效果，且1回合内免疫 眩晕 、 嘲讽 、 麻痹 ，同时自身恢复20%最大生命值的生命值，冷却3回合。"
                                                 },
                                                 {
                                                     "id":  "peri_static_6",
                                                     "name":  "固键·社交小技巧",
                                                     "icon":  "img/key/peri_static_6.png",
                                                     "text":  "对拥有燃烧类减益的敌方目标造成伤害提高10%。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "peri_leap",
                                                "name":  "跃键·暗商的心机",
                                                "icon":  "img/key/peri_leap.png",
                                                "text":  "普攻改为进行两次攻击。 热销投资 不再降低受到的治疗效果。 每拥有1层 热销投资 ，所有友方单位（不包含自身）受到的伤害降低5%。 被动技能极致收益效果修改，友方单位（不包含自身）造成燃烧伤害时即可触发自身获得导染指数的效果。"
                                            }
                               },
                   "YooHeeSSR":  {
                                     "affection":  {
                                                       "id":  "yoohee_love",
                                                       "name":  "契合键·舞台巨星",
                                                       "icon":  "img/key/yoohee_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "防御",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "yoohee_common",
                                                    "name":  "共键·主舞的实力",
                                                    "icon":  "img/key/yoohee_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "攻击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "造成弹种伤害时，造成的伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "yoohee_static_1",
                                                       "name":  "固键·付出与收获",
                                                       "icon":  "img/key/yoohee_static_1.png",
                                                       "text":  "主动技能即兴舞步额外消耗导染指数时，造成的暴击伤害提高5%。"
                                                   },
                                                   {
                                                       "id":  "yoohee_static_2",
                                                       "name":  "固键·享受舞台",
                                                       "icon":  "img/key/yoohee_static_2.png",
                                                       "text":  "触发 最佳舞者 后，恢复自身20%最大生命值的生命值。"
                                                   },
                                                   {
                                                       "id":  "yoohee_static_3",
                                                       "name":  "固键·节奏共鸣",
                                                       "icon":  "img/key/yoohee_static_3.png",
                                                       "text":  "使用主动技能即兴舞步前驱散目标1个随机增益效果。"
                                                   },
                                                   {
                                                       "id":  "yoohee_static_4",
                                                       "name":  "固键·情绪感染",
                                                       "icon":  "img/key/yoohee_static_4.png",
                                                       "text":  "使用主动技能舞蹈的真谛对敌方目标施加 眩晕 后，在 眩晕 解除时，对其施加 移动失效 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "yoohee_static_5",
                                                       "name":  "固键·绝妙的舞台位移",
                                                       "icon":  "img/key/yoohee_static_5.png",
                                                       "text":  "若本回合未进行移动，下回合所有普攻和主动技能射程增加3格。"
                                                   },
                                                   {
                                                       "id":  "yoohee_static_6",
                                                       "name":  "固键·精妙的编舞设计",
                                                       "icon":  "img/key/yoohee_static_6.png",
                                                       "text":  "绝不认输 生效时，自身攻击力提高10%。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "yoohee_leap",
                                                  "name":  "跃键·完美的舞姿",
                                                  "icon":  "img/key/yoohee_leap.png",
                                                  "text":  "释放制胜技能致命高光后，使用主动技能轻盈回旋或热情共鸣时，会对选择目标以外的2个攻击力最高的友方单位（不包含自身）释放该技能，且本回合不再触发这两个主动技能。 造成被动物理伤害时， 绝不认输 效果生效；友方单位造成异位伤害时，该效果不会中断。 所有友方单位受到的治疗效果提高50%。 战斗开始时，场上每有1个物理属性友方单位，所有友方单位造成的物理伤害提高3%，至多提高15%。"
                                              }
                                 },
                   "NikketaSSR":  {
                                      "affection":  {
                                                        "id":  "nikketa_love",
                                                        "name":  "契合键·正义的伙伴",
                                                        "icon":  "img/key/nikketa_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "nikketa_common",
                                                     "name":  "共键·卫道者",
                                                     "icon":  "img/key/nikketa_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "自身拥有浊刻增益时，暴击率提高10%"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "nikketa_static_1",
                                                        "name":  "固键·正派人形",
                                                        "icon":  "img/key/nikketa_static_1.png",
                                                        "text":  "使用普攻或精准技能后，获得1点导染指数。"
                                                    },
                                                    {
                                                        "id":  "nikketa_static_2",
                                                        "name":  "固键·公义使者",
                                                        "icon":  "img/key/nikketa_static_2.png",
                                                        "text":  "若目标拥有 畏罪 ，则对其额外造成2点稳态伤害。"
                                                    },
                                                    {
                                                        "id":  "nikketa_static_3",
                                                        "name":  "固键·英勇气势",
                                                        "icon":  "img/key/nikketa_static_3.png",
                                                        "text":  "主动技能冷冽谴责修改为范围技能，对周围半径2格内目标造成80%范围浊刻伤害"
                                                    },
                                                    {
                                                        "id":  "nikketa_static_4",
                                                        "name":  "固键·赏善罚暴",
                                                        "icon":  "img/key/nikketa_static_4.png",
                                                        "text":  "使用主动技能呼叫搭档后，在生效范围内产生 暗流 ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "nikketa_static_5",
                                                        "name":  "固键·严厉视线",
                                                        "icon":  "img/key/nikketa_static_5.png",
                                                        "text":  "攻击后若目标处于稳态崩溃，则对其施加 逃避 ，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "nikketa_static_6",
                                                        "name":  "固键·锐气逼人",
                                                        "icon":  "img/key/nikketa_static_6.png",
                                                        "text":  "获得线索时，自身获得 攻击提升II ，持续1回合。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "nikketa_leap",
                                                   "name":  "跃键·正义永不缺席",
                                                   "icon":  "img/key/nikketa_leap.png",
                                                   "text":  "【1阶】行动结束后，获得 1层 正气 。 库利奇每进行 1次 反击 ，为妮基塔恢复 1点 导染指数。 库利奇的忠诚 的射程增加 2格 。 【2阶】战斗开始时，在自身附近召唤 1个 基利 。 库里奇 反击 时，在目标周围 半径 2格 内 生成 暗流 ，持续 2回合 。库里奇被攻击后，若生命值低于 50% ，下一次 反击 后恢复 50% 最大生命值的生命值。受到致命伤害后不会死亡并立即恢复 50% 最大生命值的生命值，每场战斗至多触发 1次 。 攻击力和暴击伤害提高 30% ；使用制胜技能正义裁决时，每拥有 1层 线索，伤害系数提高 15% ，至多提高 150% 。"
                                               }
                                  },
                   "LevaSSR":  {
                                   "affection":  {
                                                     "id":  "leva_love",
                                                     "name":  "契合键·未尽的棋局",
                                                     "icon":  "img/key/leva_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "leva_common",
                                                  "name":  "共键·王牌特工",
                                                  "icon":  "img/key/leva_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "攻击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "对拥有电导类减益的敌方目标，造成的伤害提高7%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "leva_static_1",
                                                     "name":  "固键·大人的余裕",
                                                     "icon":  "img/key/leva_static_1.png",
                                                     "text":  "战斗开始时，获得2层 超导代码 和1点导染指数。"
                                                 },
                                                 {
                                                     "id":  "leva_static_2",
                                                     "name":  "固键·狐狸的微笑",
                                                     "icon":  "img/key/leva_static_2.png",
                                                     "text":  "对稳态崩溃的敌方单位造成的伤害提高7%。"
                                                 },
                                                 {
                                                     "id":  "leva_static_3",
                                                     "name":  "固键·见机行事",
                                                     "icon":  "img/key/leva_static_3.png",
                                                     "text":  "临机支援 前，驱散目标身上1个增益效果。"
                                                 },
                                                 {
                                                     "id":  "leva_static_4",
                                                     "name":  "固键·隐匿计策",
                                                     "icon":  "img/key/leva_static_4.png",
                                                     "text":  "使用主动技能 超导闪击 后，获得 隐匿 ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "leva_static_5",
                                                     "name":  "固键·理智反应",
                                                     "icon":  "img/key/leva_static_5.png",
                                                     "text":  "友方单位主动攻击前，对射程内的敌方单位施加 负电荷 ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "leva_static_6",
                                                     "name":  "固键·有备行动",
                                                     "icon":  "img/key/leva_static_6.png",
                                                     "text":  "战斗开始时，获得 超频打击 ，持续3回合。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "leva_leap",
                                                "name":  "跃键·幻电谍影",
                                                "icon":  "img/key/leva_leap.png",
                                                "text":  "被动技能狐狸的计谋触发的 临机支援 和主动技能 超导闪击 的射程扩大至9格， 临机支援 次数增加1次。 战斗开始时，场上每有1个友方电导属性人形，自身造成的电导伤害提高2%，稳态伤害提高1点。 攻击拥有 负电荷 的敌方目标时，暴击伤害提高7%，若目标处于稳态崩溃，则额外提高7%。"
                                            }
                               },
                   "RobellaSSR":  {
                                      "affection":  {
                                                        "id":  "robella_love",
                                                        "name":  "契合键·心灵渡船",
                                                        "icon":  "img/key/robella_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "robella_common",
                                                     "name":  "共键·正义护体",
                                                     "icon":  "img/key/robella_common.png",
                                                     "attrs":  [

                                                               ],
                                                     "text":  "自身拥有 护盾 类效果时，造成的异位伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "robella_static_1",
                                                        "name":  "固键·防御降临",
                                                        "icon":  "img/key/robella_static_1.png",
                                                        "text":  "拥有 同心连结 的友方单位进行主动攻击或伏击前，对受到攻击的敌方单位施加 防御降低II ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "robella_static_2",
                                                        "name":  "固键·三代心智",
                                                        "icon":  "img/key/robella_static_2.png",
                                                        "text":  "行动结束时，若自身拥有 耀光升华 ，则获得 攻击提升II ，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "robella_static_3",
                                                        "name":  "固键·额外关注",
                                                        "icon":  "img/key/robella_static_3.png",
                                                        "text":  "使用普攻超级射击后，自身获得2层 弱点探明 。"
                                                    },
                                                    {
                                                        "id":  "robella_static_4",
                                                        "name":  "固键·不如兵蚁",
                                                        "icon":  "img/key/robella_static_4.png",
                                                        "text":  "自身或拥有 同心连结 的友方单位对拥有 护盾 类效果的敌方单位造成冷凝伤害时， 护盾穿透率 提高30%，造成的伤害提高20%。"
                                                    },
                                                    {
                                                        "id":  "robella_static_5",
                                                        "name":  "固键·冷淡保护色",
                                                        "icon":  "img/key/robella_static_5.png",
                                                        "text":  "若处于我方 霜冻 地格上，则使用普攻超级射击或制胜技能疾风凌啸后，获得5格移动追加。"
                                                    },
                                                    {
                                                        "id":  "robella_static_6",
                                                        "name":  "固键·内核稳定",
                                                        "icon":  "img/key/robella_static_6.png",
                                                        "text":  "进行 凛冽侵蚀 前，驱散目标身上2个增益效果。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "robella_leap",
                                                   "name":  "跃键·正义执行演算",
                                                   "icon":  "img/key/robella_leap.png",
                                                   "text":  "若自身拥有 耀光升华 ，则使用普攻超级射击后，获得 指令追加 ，每回合至多触发1次。 使用主动技能耀光记忆或拥有 深层洞悉 的敌方单位被友方单位击杀后，获得3层 弱点探明 。 主动攻击前，在自身周围半径2格内产生 霜冻 地格，持续2回合。"
                                               }
                                  },
                   "LeneSSR":  {
                                   "affection":  {
                                                     "id":  "lene_love",
                                                     "name":  "契合键·自我的空间",
                                                     "icon":  "img/key/lene_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "lene_common",
                                                  "name":  "共键·完全解放",
                                                  "icon":  "img/key/lene_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "攻击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "对防御力小于等于0的敌方单位造成的伤害提高10%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "lene_static_1",
                                                     "name":  "固键·心智纽带",
                                                     "icon":  "img/key/lene_static_1.png",
                                                     "text":  "莱妮或心像受到治疗时，为对方恢复20%最大生命值。此效果不会循环触发。"
                                                 },
                                                 {
                                                     "id":  "lene_static_2",
                                                     "name":  "固键·坏东西全飞走",
                                                     "icon":  "img/key/lene_static_2.png",
                                                     "text":  "莱妮使用主动技能算力倾压或心像使用主动技能算力超频后，另一方执行指令时，将目标击退2格。"
                                                 },
                                                 {
                                                     "id":  "lene_static_3",
                                                     "name":  "固键·持伞守护",
                                                     "icon":  "img/key/lene_static_3.png",
                                                     "text":  "我方回合结束时，若莱妮与心像距离大于等于3格，双方获得 范围防御II ，持续1回合。"
                                                 },
                                                 {
                                                     "id":  "lene_static_4",
                                                     "name":  "固键·伙伴的回归",
                                                     "icon":  "img/key/lene_static_4.png",
                                                     "text":  "心像消失时，清空制胜技能拟造伙伴的冷却时间，每场战斗至多触发1次。"
                                                 },
                                                 {
                                                     "id":  "lene_static_5",
                                                     "name":  "固键·阳光的温度",
                                                     "icon":  "img/key/lene_static_5.png",
                                                     "text":  "莱妮与心像使用攻防演算和进击推演时，若目标防御力小于等于0，则随机驱散其1个增益效果。"
                                                 },
                                                 {
                                                     "id":  "lene_static_6",
                                                     "name":  "固键·OGAS的实力",
                                                     "icon":  "img/key/lene_static_6.png",
                                                     "text":  "对防御力小于等于0的敌方单位造成的暴击伤害提高5%。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "lene_leap",
                                                "name":  "跃键·叠加算法演绎",
                                                "icon":  "img/key/lene_leap.png",
                                                "text":  "【1阶】 伞下关照 效果提升：防御力降低额外提高6%。 莱妮使用制胜协议、攻防演算或算力倾压时，或者心像使用迷惘影射、进击推演或算力超频时，莱妮每拥有1点导染指数，莱妮和心像的暴击伤害提高15%。 心像存活时，莱妮和心像的行动力增加2格。 【2阶】 心像行动结束时，将全场范围内的敌方单位朝自身方向牵引1格，并造成2点稳态伤害。 莱妮或心像主动攻击后，若敌方目标拥有3层伞下关照，对其施加镜像缓存；若敌方目标拥有6层伞下关照，镜像缓存累积的最终伤害提高至25%，且使本回合莱妮或心像使用下一次主动攻击造成的伤害提高30%、暴击伤害提高30%。 莱妮或心像主动攻击前，若敌方目标拥有镜像缓存，则触发该效果，且自身的主动攻击伤害系数永久提高15%，至多提高90%。"
                                            }
                               },
                   "LindSSR":  {
                                   "affection":  {
                                                     "id":  "lind_love",
                                                     "name":  "契合键·长夜的尽头",
                                                     "icon":  "img/key/lind_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "lind_common",
                                                  "name":  "共键·深夜永不结束",
                                                  "icon":  "img/key/lind_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "攻击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "攻击有减益效果的敌方单位时，造成的异位伤害提高10%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "lind_static_1",
                                                     "name":  "固键·痛觉感知",
                                                     "icon":  "img/key/lind_static_1.png",
                                                     "text":  "回合开始时，获得 速效屏障 。"
                                                 },
                                                 {
                                                     "id":  "lind_static_2",
                                                     "name":  "固键·夜猫子的敏锐",
                                                     "icon":  "img/key/lind_static_2.png",
                                                     "text":  "使用主动技能强势浸袭或主动技能过激崩解后，获得5格移动追加。"
                                                 },
                                                 {
                                                     "id":  "lind_static_3",
                                                     "name":  "固键·电台邀约",
                                                     "icon":  "img/key/lind_static_3.png",
                                                     "text":  "选取全场范围内1个友方人形，本场战斗内该人形无法移动且使用主动技能，但全体敌方单位防御力降低15%，持续至该友方人形死亡。自身获得 移动追加 ，并可使用一次指令。"
                                                 },
                                                 {
                                                     "id":  "lind_static_4",
                                                     "name":  "固键·文明的裁决",
                                                     "icon":  "img/key/lind_static_4.png",
                                                     "text":  "主动技能过激崩解若只命中1个敌方目标，则对其造成伤害提高30%。"
                                                 },
                                                 {
                                                     "id":  "lind_static_5",
                                                     "name":  "固键·甜食疗愈",
                                                     "icon":  "img/key/lind_static_5.png",
                                                     "text":  "当自身拥有 糖渍 时，攻击前驱散自身1个减益效果。"
                                                 },
                                                 {
                                                     "id":  "lind_static_6",
                                                     "name":  "固键·戒断反应",
                                                     "icon":  "img/key/lind_static_6.png",
                                                     "text":  "使用制胜技能糖分超载前，获得 暴击提升II ，持续2回合。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "lind_leap",
                                                "name":  "跃键·糖衣炮弹",
                                                "icon":  "img/key/lind_leap.png",
                                                "text":  "战斗开始时，获得5层 糖渍 。 制胜技能 糖分超载 触发敌方单位拥有的酸蚀类减益效果时，使其受到的伤害提高 50% 。 主动技能 过激崩解 的伤害系数额外提高 65% ，造成的稳态伤害额外提高 2点 。 蜜糖陷阱 造成的伤害提高 100% ，造成的稳态伤害提高至 3点 。"
                                            }
                               },
                   "PhaetusaSSR":  {
                                       "affection":  {
                                                         "id":  "phaetusa_love",
                                                         "name":  "契合键·一体双芯",
                                                         "icon":  "img/key/phaetusa_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击伤害",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "phaetusa_common",
                                                      "name":  "共键·无中生有",
                                                      "icon":  "img/key/phaetusa_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "当前大回合导染指数等于0后，造成的伤害提高10%。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "phaetusa_static_1",
                                                         "name":  "固键·冰冷血脉",
                                                         "icon":  "img/key/phaetusa_static_1.png",
                                                         "text":  "刀刃共鸣 首次叠加至满层后，自身暴击率提高20%。"
                                                     },
                                                     {
                                                         "id":  "phaetusa_static_2",
                                                         "name":  "固键·游走的决意",
                                                         "icon":  "img/key/phaetusa_static_2.png",
                                                         "text":  "回合开始时，为全场敌方单位施加 割裂伤 ，持续1回合，每2回合至多触发1次。"
                                                     },
                                                     {
                                                         "id":  "phaetusa_static_3",
                                                         "name":  "固键·绝命的执刀者",
                                                         "icon":  "img/key/phaetusa_static_3.png",
                                                         "text":  "若主动攻击只命中1个敌方目标，则对其造成伤害提高15%。"
                                                     },
                                                     {
                                                         "id":  "phaetusa_static_4",
                                                         "name":  "固键·生灵相馈",
                                                         "icon":  "img/key/phaetusa_static_4.png",
                                                         "text":  "每消耗1层 刀刃共鸣 ，恢复自身10%攻击力的生命值和1点稳态指数。"
                                                     },
                                                     {
                                                         "id":  "phaetusa_static_5",
                                                         "name":  "固键·界域的主人",
                                                         "icon":  "img/key/phaetusa_static_5.png",
                                                         "text":  "行动支援 前，驱散目标1个增益效果。"
                                                     },
                                                     {
                                                         "id":  "phaetusa_static_6",
                                                         "name":  "固键·双影随行",
                                                         "icon":  "img/key/phaetusa_static_6.png",
                                                         "text":  "使用主动技能复写陷阱后，获得6格移动追加。"
                                                     }
                                                 ],
                                       "leap":  {
                                                    "id":  "phaetusa_leap",
                                                    "name":  "跃键·双魂共振奏鸣曲",
                                                    "icon":  "img/key/phaetusa_leap.png",
                                                    "text":  "持有刀刃共鸣时，自身造成的伤害提高30%，且主动攻击后对周围半径8格内最近的敌方目标造成1次100%攻击力的近战酸蚀伤害。 自身造成回合外伤害后对目标施加3层尖端恐惧，持续2回合。"
                                                }
                                   },
                   "BalthildeSSR":  {
                                        "affection":  {
                                                          "id":  "balthilde_love",
                                                          "name":  "契合键·笨拙心语",
                                                          "icon":  "img/key/balthilde_love.png",
                                                          "attrs":  [
                                                                        {
                                                                            "name":  "攻击",
                                                                            "value":  4.5
                                                                        },
                                                                        {
                                                                            "name":  "防御",
                                                                            "value":  4.5
                                                                        },
                                                                        {
                                                                            "name":  "生命",
                                                                            "value":  4.5
                                                                        }
                                                                    ]
                                                      },
                                        "shared":  {
                                                       "id":  "balthilde_common",
                                                       "name":  "共键·能工巧匠",
                                                       "icon":  "img/key/balthilde_common.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  5
                                                                     }
                                                                 ],
                                                       "text":  "自身实体召唤物防御力提高7%。"
                                                   },
                                        "fixed":  [
                                                      {
                                                          "id":  "balthilde_static_1",
                                                          "name":  "固键·拙于口舌",
                                                          "icon":  "img/key/balthilde_static_1.png",
                                                          "text":  "主动攻击前对敌方目标施加 应力裂隙 ，持续2回合。"
                                                      },
                                                      {
                                                          "id":  "balthilde_static_2",
                                                          "name":  "固键·急性子",
                                                          "icon":  "img/key/balthilde_static_2.png",
                                                          "text":  "战斗开始时获得3点导染指数。"
                                                      },
                                                      {
                                                          "id":  "balthilde_static_3",
                                                          "name":  "固键·被误解的真心",
                                                          "icon":  "img/key/balthilde_static_3.png",
                                                          "text":  "行动结束时，对全场附近没有掩体的我方单位施加 减伤II ，持续1回合。"
                                                      },
                                                      {
                                                          "id":  "balthilde_static_4",
                                                          "name":  "固键·故障排查模块",
                                                          "icon":  "img/key/balthilde_static_4.png",
                                                          "text":  "行动结束时，为稳态最低的友方人形恢复3点稳态指数。"
                                                      },
                                                      {
                                                          "id":  "balthilde_static_5",
                                                          "name":  "固键·实用主义改装",
                                                          "icon":  "img/key/balthilde_static_5.png",
                                                          "text":  "友方单位受到攻击前，协防构装为其恢复1点稳态指数。"
                                                      },
                                                      {
                                                          "id":  "balthilde_static_6",
                                                          "name":  "固键·机械操控",
                                                          "icon":  "img/key/balthilde_static_6.png",
                                                          "text":  "场上有构装时，自身造成的稳态伤害提高3点。"
                                                      }
                                                  ],
                                        "leap":  null
                                    },
                   "LewisSSR":  {
                                    "affection":  {
                                                      "id":  "lewis_love",
                                                      "name":  "契合键·童梦永驻",
                                                      "icon":  "img/key/lewis_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "lewis_common",
                                                   "name":  "共键·大力出奇迹",
                                                   "icon":  "img/key/lewis_common.png",
                                                   "attrs":  [

                                                             ],
                                                   "text":  "攻击加成5% 制胜技能造成的伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "lewis_static_1",
                                                      "name":  "固键·天真浪漫的设计师",
                                                      "icon":  "img/key/lewis_static_1.png",
                                                      "text":  "齐射前对目标施加 溢火 ，持续2回合。"
                                                  },
                                                  {
                                                      "id":  "lewis_static_2",
                                                      "name":  "固键·传播笑容的秘诀",
                                                      "icon":  "img/key/lewis_static_2.png",
                                                      "text":  "被动技能锡兵集结效果修改，可以对非燃烧属性的友方人形（不包含自身）施加锡兵卫队；若主动技能或普攻未造成燃烧伤害，也可触发齐射。"
                                                  },
                                                  {
                                                      "id":  "lewis_static_3",
                                                      "name":  "固键·守护童心的信念",
                                                      "icon":  "img/key/lewis_static_3.png",
                                                      "text":  "主动技能惊喜奇趣球与制胜技能玩具嘉年华攻击前驱散目标1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "lewis_static_4",
                                                      "name":  "固键·可爱即是正义",
                                                      "icon":  "img/key/lewis_static_4.png",
                                                      "text":  "回合开始时，若场上锡兵卫队中最高的军衔等级大于等于2级时，本场战斗内主动技能惊喜奇趣球与制胜技能玩具嘉年华的射程增加2格。"
                                                  },
                                                  {
                                                      "id":  "lewis_static_5",
                                                      "name":  "固键·来自云端的守望",
                                                      "icon":  "img/key/lewis_static_5.png",
                                                      "text":  "锡兵卫队持有者行动结束时获得2层 功勋 。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "lewis_leap",
                                                 "name":  "跃键·锡兵总动员",
                                                 "icon":  "img/key/lewis_leap.png",
                                                 "text":  "施加锡兵卫队后，若场上友方燃烧人形数量大于等于4个，提高1级锡兵卫队的军衔等级。 军衔等级达到3级后，每个大回合开始时，自身消耗该锡兵卫队持有者的所有功勋，每消耗1层该效果，自身本回合造成的燃烧伤害提高6%，暴击伤害提高6%，至多提高8%。"
                                             }
                                },
                   "WelrodSSR":  {
                                     "affection":  {
                                                       "id":  "welrod_love",
                                                       "name":  "契合键·循迹誓约",
                                                       "icon":  "img/key/welrod_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "防御",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "welrod_common",
                                                    "name":  "共键·范达因准则",
                                                    "icon":  "img/key/welrod_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "生命",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "攻击时，若自身生命值百分比大于等于目标，则造成的异位伤害提高 10% 。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "welrod_static_1",
                                                       "name":  "固键·神探气质",
                                                       "icon":  "img/key/welrod_static_1.png",
                                                       "text":  "战斗开始时，获得 3点 导染指数。"
                                                   },
                                                   {
                                                       "id":  "welrod_static_2",
                                                       "name":  "固键·前期取证",
                                                       "icon":  "img/key/welrod_static_2.png",
                                                       "text":  "主动攻击前，驱散目标 1个 增益效果。"
                                                   },
                                                   {
                                                       "id":  "welrod_static_3",
                                                       "name":  "固键·本格逻辑",
                                                       "icon":  "img/key/welrod_static_3.png",
                                                       "text":  "侦探豁免 吸收最终伤害的比例提高至 90% 。"
                                                   },
                                                   {
                                                       "id":  "welrod_static_4",
                                                       "name":  "固键·魔犬狩猎",
                                                       "icon":  "img/key/welrod_static_4.png",
                                                       "text":  "攻击首领单位时，造成的酸蚀伤害提高 20% 。"
                                                   },
                                                   {
                                                       "id":  "welrod_static_5",
                                                       "name":  "固键·最后一案",
                                                       "icon":  "img/key/welrod_static_5.png",
                                                       "text":  "免疫 眩晕 、 逃避 效果。治疗效果提高 30% 。"
                                                   },
                                                   {
                                                       "id":  "welrod_static_6",
                                                       "name":  "固键·两人一体的侦探",
                                                       "icon":  "img/key/welrod_static_6.png",
                                                       "text":  "侦探豁免 的行动结束时对自身造成固定伤害的效果改为 2次 ，受到的固定伤害降低 15% ，"
                                                   }
                                               ],
                                     "leap":  null
                                 },
                   "FlorenceSSR":  {
                                       "affection":  {
                                                         "id":  "florence_love",
                                                         "name":  "契合键·恶作剧处方",
                                                         "icon":  "img/key/florence_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "防御",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "florence_common",
                                                      "name":  "共键·主人的指令",
                                                      "icon":  "img/key/florence_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "自身实体召唤物攻击力提高7%。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "florence_static_1",
                                                         "name":  "固键·致命刺激",
                                                         "icon":  "img/key/florence_static_1.png",
                                                         "text":  "战斗开始时获得3点导染指数。"
                                                     },
                                                     {
                                                         "id":  "florence_static_2",
                                                         "name":  "固键·自我愉悦",
                                                         "icon":  "img/key/florence_static_2.png",
                                                         "text":  "使用主动技能后，为自身和 阿利奥斯 恢复自身80%攻击力的生命值"
                                                     },
                                                     {
                                                         "id":  "florence_static_3",
                                                         "name":  "固键·敏感度上升",
                                                         "icon":  "img/key/florence_static_3.png",
                                                         "text":  "自身和 阿利奥斯 攻击后，会对敌方单位施加 防御降低II ，持续2回合。"
                                                     },
                                                     {
                                                         "id":  "florence_static_4",
                                                         "name":  "固键·反攻的奖赏",
                                                         "icon":  "img/key/florence_static_4.png",
                                                         "text":  "阿利奥斯 反击后，获得 攻击提升II ，持续1回合。"
                                                     },
                                                     {
                                                         "id":  "florence_static_5",
                                                         "name":  "固键·紧缚欲",
                                                         "icon":  "img/key/florence_static_5.png",
                                                         "text":  "制胜技能会将所有目标朝着自身拉拽3格。"
                                                     },
                                                     {
                                                         "id":  "florence_static_6",
                                                         "name":  "固键·甜蜜的诱引",
                                                         "icon":  "img/key/florence_static_6.png",
                                                         "text":  "主动技能特别护理不再进行治疗和驱散，修改为对范围内所有目标（不包含自身）都造成30%攻击力的范围物理伤害。"
                                                     }
                                                 ],
                                       "leap":  {
                                                    "id":  "florence_leap",
                                                    "name":  "跃键·刺激的探索者",
                                                    "icon":  "img/key/florence_leap.png",
                                                    "text":  "使用主动技能快感激活后，对所有友方 实体召唤物 释放快感激活。 友方单位获得 兴奋剂 时， 阿利奥斯 获得1层 欣喜欲狂 ，持续3回合，至多叠加6层。 拥有 兴奋剂 的友方单位受到治疗后，对其施加 浸润I ，持续2回合。"
                                                }
                                   },
                   "AlvaSSR":  {
                                   "affection":  {
                                                     "id":  "alva_love",
                                                     "name":  "契合键·受祝之人",
                                                     "icon":  "img/key/alva_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "alva_common",
                                                  "name":  "共键·心眼",
                                                  "icon":  "img/key/alva_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "攻击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "对拥有护盾的敌方单位造成的异位伤害提高10%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "alva_static_1",
                                                     "name":  "固键·雪地漫步者",
                                                     "icon":  "img/key/alva_static_1.png",
                                                     "text":  "液氮毒刺周围半径4格内的敌方单位被施加 寒意 时，在范围内产生 霜冻 地格，持续3回合。"
                                                 },
                                                 {
                                                     "id":  "alva_static_2",
                                                     "name":  "固键·后勤专家",
                                                     "icon":  "img/key/alva_static_2.png",
                                                     "text":  "战斗开始时，获得3点导染指数和3层 战备 。"
                                                 },
                                                 {
                                                     "id":  "alva_static_3",
                                                     "name":  "固键·援护指挥",
                                                     "icon":  "img/key/alva_static_3.png",
                                                     "text":  "拥有 凛冬屏障 的友方单位受到的稳态伤害降低1点。"
                                                 },
                                                 {
                                                     "id":  "alva_static_4",
                                                     "name":  "固键·大器晚成",
                                                     "icon":  "img/key/alva_static_4.png",
                                                     "text":  "每消耗1层 战备 ，自身攻击力提高3%，至多提高18%。"
                                                 },
                                                 {
                                                     "id":  "alva_static_5",
                                                     "name":  "固键·重整旗鼓",
                                                     "icon":  "img/key/alva_static_5.png",
                                                     "text":  "使用制胜技能雪域镇魂歌前，驱散目标2个增益效果。"
                                                 },
                                                 {
                                                     "id":  "alva_static_6",
                                                     "name":  "固键·刺骨",
                                                     "icon":  "img/key/alva_static_6.png",
                                                     "text":  "液氮毒刺周围半径4格内的敌方单位受到的稳态伤害提高2点。"
                                                 }
                                             ],
                                   "leap":  {
                                                "id":  "alva_leap",
                                                "name":  "跃键·承袭头狼之名",
                                                "icon":  "img/key/alva_leap.png",
                                                "text":  "自身施加护盾的效果提高80%。 凛冬屏障效果提升：造成冷凝伤害时，提高造成的伤害和暴击伤害所需的护盾值降低至500。 友方单位拥有凛冬屏障并造成冷凝伤害时，无视目标15%防御力。 液氮毒刺效果提升：埃芙攻击时，基于护盾累积吸收量的伤害系数翻倍。"
                                            }
                               },
                   "VoymastinaSSR":  {
                                         "affection":  {
                                                           "id":  "voymastina_love",
                                                           "name":  "契合键·无言守候",
                                                           "icon":  "img/key/voymastina_love.png",
                                                           "attrs":  [
                                                                         {
                                                                             "name":  "攻击",
                                                                             "value":  4.5
                                                                         },
                                                                         {
                                                                             "name":  "暴击",
                                                                             "value":  4.5
                                                                         },
                                                                         {
                                                                             "name":  "暴击伤害",
                                                                             "value":  4.5
                                                                         }
                                                                     ]
                                                       },
                                         "shared":  {
                                                        "id":  "voymastina_common",
                                                        "name":  "共键·撕裂连奏",
                                                        "icon":  "img/key/voymastina_common.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  5
                                                                      }
                                                                  ],
                                                        "text":  "造成近战伤害时，物理伤害提高10%，持续1个大回合。"
                                                    },
                                         "fixed":  [
                                                       {
                                                           "id":  "voymastina_static_1",
                                                           "name":  "固键·破片帷幕",
                                                           "icon":  "img/key/voymastina_static_1.png",
                                                           "text":  "主动技能天穹狼群及其被动命中首领单位或大于等于3个敌方目标时，获得 速效屏障 。"
                                                       },
                                                       {
                                                           "id":  "voymastina_static_2",
                                                           "name":  "固键·宽广视野",
                                                           "icon":  "img/key/voymastina_static_2.png",
                                                           "text":  "触发制胜技能锐牙崩击的被动后，获得 移动提升II ，持续2回合。"
                                                       },
                                                       {
                                                           "id":  "voymastina_static_3",
                                                           "name":  "固键·全域狩猎",
                                                           "icon":  "img/key/voymastina_static_3.png",
                                                           "text":  "所有 行动支援 的射程改为全场范围，对非首领单位造成伤害的提高30%。"
                                                       },
                                                       {
                                                           "id":  "voymastina_static_4",
                                                           "name":  "固键·孤立绝杀",
                                                           "icon":  "img/key/voymastina_static_4.png",
                                                           "text":  "主动技能天穹狼群及其被动只命中1个敌方目标时，造成伤害的提高20%，稳态伤害提高2点。"
                                                       },
                                                       {
                                                           "id":  "voymastina_static_5",
                                                           "name":  "固键·强者杀手",
                                                           "icon":  "img/key/voymastina_static_5.png",
                                                           "text":  "攻击前自身获得 反御增伤 ，持续3回合。"
                                                       },
                                                       {
                                                           "id":  "voymastina_static_6",
                                                           "name":  "固键·伤痕即是力量",
                                                           "icon":  "img/key/voymastina_static_6.png",
                                                           "text":  "受到攻击后，下一次使用制胜技能锐牙崩击时，造成的伤害提高15%。"
                                                       }
                                                   ],
                                         "leap":  null
                                     },
                   "HelenSSR":  {
                                    "affection":  {
                                                      "id":  "helen_love",
                                                      "name":  "契合键·隐秘情报",
                                                      "icon":  "img/key/helen_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "防御",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "helen_common",
                                                   "name":  "共键·不动的防线",
                                                   "icon":  "img/key/helen_common.png",
                                                   "attrs":  [

                                                             ],
                                                   "text":  "防御加成5% 若自身防御力大于等于目标防御力，则造成的伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "helen_static_1",
                                                      "name":  "固键·双面谍影",
                                                      "icon":  "img/key/helen_static_1.png",
                                                      "text":  "回合开始时，自身获得3层 蓄锋 。"
                                                  },
                                                  {
                                                      "id":  "helen_static_2",
                                                      "name":  "固键·冷艳绽放",
                                                      "icon":  "img/key/helen_static_2.png",
                                                      "text":  "使用普攻攻击首领单位时，造成的冷凝伤害提高20%。"
                                                  },
                                                  {
                                                      "id":  "helen_static_3",
                                                      "name":  "固键·掩埋的过去",
                                                      "icon":  "img/key/helen_static_3.png",
                                                      "text":  "普攻前，驱散敌方目标2个增益效果。"
                                                  },
                                                  {
                                                      "id":  "helen_static_4",
                                                      "name":  "固键·守护者的决意",
                                                      "icon":  "img/key/helen_static_4.png",
                                                      "text":  "行动结束时，为自身和拥有 庇佑 的目标施加2层 掩护 。"
                                                  },
                                                  {
                                                      "id":  "helen_static_5",
                                                      "name":  "固键·母性光辉",
                                                      "icon":  "img/key/helen_static_5.png",
                                                      "text":  "回合开始时，若自身生命值大于等于30%，则获得 母性光辉 。"
                                                  },
                                                  {
                                                      "id":  "helen_static_6",
                                                      "name":  "固键·规则运用者",
                                                      "icon":  "img/key/helen_static_6.png",
                                                      "text":  "受到的稳态伤害降低2点，且免疫 眩晕 、 逃避 效果。"
                                                  }
                                              ],
                                    "leap":  null
                                },
                   "SakuraSSR":  {
                                     "affection":  {
                                                       "id":  "sakura_love",
                                                       "name":  "契合键·使命必达",
                                                       "icon":  "img/key/sakura_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "生命",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "sakura_common",
                                                    "name":  "共键·王牌配送员",
                                                    "icon":  "img/key/sakura_common.png",
                                                    "attrs":  [

                                                              ],
                                                    "text":  "暴击5% 对拥有减益效果的敌方目标，造成的范围伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "sakura_static_1",
                                                       "name":  "固键·做事一根筋",
                                                       "icon":  "img/key/sakura_static_1.png",
                                                       "text":  "战斗开始时，对全场任意3个敌方单位施加1层 樱戳 。"
                                                   },
                                                   {
                                                       "id":  "sakura_static_2",
                                                       "name":  "固键·运单要准时",
                                                       "icon":  "img/key/sakura_static_2.png",
                                                       "text":  "非制胜技能施加10680000时，施加 溢火 ，持续1回合。"
                                                   },
                                                   {
                                                       "id":  "sakura_static_3",
                                                       "name":  "固键·道歉要诚心",
                                                       "icon":  "img/key/sakura_static_3.png",
                                                       "text":  "施加 霉运 时，驱散目标1个增益效果。"
                                                   },
                                                   {
                                                       "id":  "sakura_static_4",
                                                       "name":  "固键·霉运体质",
                                                       "icon":  "img/key/sakura_static_4.png",
                                                       "text":  "战斗开始时，为全场生命值最高的敌方单位施加 霉运 ，持续3回合。"
                                                   },
                                                   {
                                                       "id":  "sakura_static_5",
                                                       "name":  "固键·独当一面的勇气",
                                                       "icon":  "img/key/sakura_static_5.png",
                                                       "text":  "行动结束时，自身周围半径3格内有敌方单位，则获得1层 速效屏障 。"
                                                   },
                                                   {
                                                       "id":  "sakura_static_6",
                                                       "name":  "固键·每日进步一点点",
                                                       "icon":  "img/key/sakura_static_6.png",
                                                       "text":  "拥有 樱戳 的敌方单位死亡时，自身攻击力提高4%，至多提高20%。"
                                                   }
                                               ],
                                     "leap":  {
                                                  "id":  "sakura_leap",
                                                  "name":  "跃键·火樱之舞",
                                                  "icon":  "img/key/sakura_leap.png",
                                                  "text":  "使用主动技能瞬转四方获得指令追加时可移动 6格 。 樱戳的伤害系数提高15%，每触发3次樱戳的效果（不包含制胜技能霉运的领域触发），自身获得1点导染指数，每回合至多获得4点。 每触发1次热能传导的效果，自身造成的伤害永久提高 15% ，暴击伤害永久提高 15% ，至多提高 75% 。"
                                              }
                                 },
                   "LoreleySSR":  {
                                      "affection":  {
                                                        "id":  "loreley_love",
                                                        "name":  "契合键·欲望的回响",
                                                        "icon":  "img/key/loreley_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "loreley_common",
                                                     "name":  "共键·餍足的叹息",
                                                     "icon":  "img/key/loreley_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "自身拥有燃烧类增益时，暴击率提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "loreley_static_1",
                                                        "name":  "固键·隐秘的热情",
                                                        "icon":  "img/key/loreley_static_1.png",
                                                        "text":  "战斗开始时，获得1点导染指数和10点 灼炎 。"
                                                    },
                                                    {
                                                        "id":  "loreley_static_2",
                                                        "name":  "固键·痛感阈值",
                                                        "icon":  "img/key/loreley_static_2.png",
                                                        "text":  "巡猎者·Ⅱ型 的被动技能 磷火脉冲 造成伤害时对目标施加 溢火 ，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "loreley_static_3",
                                                        "name":  "固键·纠缠之梦",
                                                        "icon":  "img/key/loreley_static_3.png",
                                                        "text":  "场上存在 巡猎者·Ⅱ型 时，全体友方单位造成的燃烧伤害提高7%。"
                                                    },
                                                    {
                                                        "id":  "loreley_static_4",
                                                        "name":  "固键·天使的温柔",
                                                        "icon":  "img/key/loreley_static_4.png",
                                                        "text":  "主动攻击前，驱散目标1个增益效果。"
                                                    },
                                                    {
                                                        "id":  "loreley_static_5",
                                                        "name":  "固键·恶魔的步调",
                                                        "icon":  "img/key/loreley_static_5.png",
                                                        "text":  "战斗开始时，获得 移动提升III ，持续1回合。"
                                                    },
                                                    {
                                                        "id":  "loreley_static_6",
                                                        "name":  "固键·绝对支配者",
                                                        "icon":  "img/key/loreley_static_6.png",
                                                        "text":  "生骸类普通怪物行动结束时若停留在 巡猎者·Ⅱ型 周围半径3格范围内，则直接消灭该目标。（机制击杀不造成伤害）"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "loreley_leap",
                                                   "name":  "跃键·女主人的特权",
                                                   "icon":  "img/key/loreley_leap.png",
                                                   "text":  "自身攻击力提高30%。巡猎者·Ⅱ型每释放1次磷火脉冲，下回合主动技能灼热烙痕和磷火脉冲的伤害系数提高12%。 回合开始时，场上每有1个狙击枪人形，则狙击枪人形造成的伤害提高5%，持续1个大回合。 友方单位若拥有炽火余烬，则其燃烧伤害额外提高30%。 战斗开始时，若燃烧类友方人形数量大于等于3个，则对全场范围内所有友方单位施加攻击提升II，持续2回合，且罗蕾莱后续施加的持续2回合的攻击提升II替换为火热攻势II。"
                                               }
                                  },
                   "CheyanneSSR":  {
                                       "affection":  {
                                                         "id":  "cheyanne_love",
                                                         "name":  "契合键·屏息祈盼",
                                                         "icon":  "img/key/cheyanne_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "暴击伤害",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "cheyanne_common",
                                                      "name":  "共键·爱是久别重逢",
                                                      "icon":  "img/key/cheyanne_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "对当前生命值大于自身的目标造成的伤害提高10%。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "cheyanne_static_1",
                                                         "name":  "固键·别过来会害羞",
                                                         "icon":  "img/key/cheyanne_static_1.png",
                                                         "text":  "造成精准伤害时，击退目标2格，并施加 移动降低II ，持续2回合。"
                                                     },
                                                     {
                                                         "id":  "cheyanne_static_2",
                                                         "name":  "固键·自由的自我",
                                                         "icon":  "img/key/cheyanne_static_2.png",
                                                         "text":  "免疫嘲讽、诱导和逃避效果。每3回合免疫1次范围伤害。"
                                                     },
                                                     {
                                                         "id":  "cheyanne_static_3",
                                                         "name":  "固键·勇敢的一小步",
                                                         "icon":  "img/key/cheyanne_static_3.png",
                                                         "text":  "战斗开始时行动力提高2格，持续1回合。并在自身周围最近的1个空地格制造1个高台。"
                                                     },
                                                     {
                                                         "id":  "cheyanne_static_4",
                                                         "name":  "固键·社交不适应症",
                                                         "icon":  "img/key/cheyanne_static_4.png",
                                                         "text":  "持有靶心的敌方单位死亡时，对场上当前生命值最高的1个敌方单位施加靶心。"
                                                     },
                                                     {
                                                         "id":  "cheyanne_static_5",
                                                         "name":  "固键·心理韧性",
                                                         "icon":  "img/key/cheyanne_static_5.png",
                                                         "text":  "对持有靶心目标造成的伤害提高10%，且视为重型弹克制。"
                                                     },
                                                     {
                                                         "id":  "cheyanne_static_6",
                                                         "name":  "固键·倾注全神",
                                                         "icon":  "img/key/cheyanne_static_6.png",
                                                         "text":  "每个大回合，仅有持有靶心的目标行动结束时，对其释放1次谋定而动，其伤害系数和稳态伤害在原有基础上增加数倍，倍数为本回合谋定而动释放次数之和。恢复自身2点导染指数。每回合至多触发1次。"
                                                     }
                                                 ],
                                       "leap":  null
                                   },
                   "BastiSSR":  {
                                    "affection":  {
                                                      "id":  "basti_love",
                                                      "name":  "契合键·刹那而永恒",
                                                      "icon":  "img/key/basti_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "basti_common",
                                                   "name":  "共键·致命占有欲",
                                                   "icon":  "img/key/basti_common.png",
                                                   "attrs":  [

                                                             ],
                                                   "text":  "暴击5% 若敌方处于酸蚀地格上，则对其造成异位伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "basti_static_1",
                                                      "name":  "固键·一时兴起",
                                                      "icon":  "img/key/basti_static_1.png",
                                                      "text":  "战斗开始时获得3点导染指数。"
                                                  },
                                                  {
                                                      "id":  "basti_static_2",
                                                      "name":  "固键·街头艺术",
                                                      "icon":  "img/key/basti_static_2.png",
                                                      "text":  "场上存在友方 毒瘴 地格时，全体友方单位造成的酸蚀伤害提高7%。"
                                                  },
                                                  {
                                                      "id":  "basti_static_3",
                                                      "name":  "固键·痛楚依存",
                                                      "icon":  "img/key/basti_static_3.png",
                                                      "text":  "被施加 逃避 、 嘲讽 、 诱导 、 眩晕 或禁锢后，立即解除该效果，一场战斗至多触发1次；战斗开始时，获得 防御提升III ，持续3回合。"
                                                  },
                                                  {
                                                      "id":  "basti_static_4",
                                                      "name":  "固键·闯祸的天才",
                                                      "icon":  "img/key/basti_static_4.png",
                                                      "text":  "“小可爱” 出生时为场上生命值最低的友方目标恢复100%攻击力的生命值和2点稳态指数，一回合至多触发1次。"
                                                  },
                                                  {
                                                      "id":  "basti_static_5",
                                                      "name":  "固键·惊吓礼物",
                                                      "icon":  "img/key/basti_static_5.png",
                                                      "text":  "“小可爱” 攻击前，驱散目标1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "basti_static_6",
                                                      "name":  "固键·恣意涂抹",
                                                      "icon":  "img/key/basti_static_6.png",
                                                      "text":  "”小可爱“出生时，在其所在地格生成 毒瘴 地格。"
                                                  }
                                              ],
                                    "leap":  {
                                                 "id":  "basti_leap",
                                                 "name":  "跃键·备受宠爱的猫咪",
                                                 "icon":  "img/key/basti_leap.png",
                                                 "text":  "主动技能地雷系少女后对目标施加 扭曲的情感 ，持续2回合。贝丝蒂处于友方酸蚀类地格并造成酸蚀伤害时，每有1级地格等级，攻击力提高10%。"
                                             }
                                },
                   "LiushihSSR":  {
                                      "affection":  {
                                                        "id":  "liushih_love",
                                                        "name":  "契合键·珠玉满堂",
                                                        "icon":  "img/key/liushih_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "防御",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "liushih_common",
                                                     "name":  "共键·亿点钞能力",
                                                     "icon":  "img/key/liushih_common.png",
                                                     "attrs":  [

                                                               ],
                                                     "text":  "自身 实体召唤物 造成的伤害提高10%。 自身锁敌造成的伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "liushih_static_1",
                                                        "name":  "固键·相得益彰",
                                                        "icon":  "img/key/liushih_static_1.png",
                                                        "text":  "珀伽索 处于 协同作战 状态时，自身和 珀伽索 造成的伤害提高20%。"
                                                    },
                                                    {
                                                        "id":  "liushih_static_2",
                                                        "name":  "固键·百步穿杨",
                                                        "icon":  "img/key/liushih_static_2.png",
                                                        "text":  "每层 精准 额外提高暴击率5%。"
                                                    },
                                                    {
                                                        "id":  "liushih_static_3",
                                                        "name":  "固键·慷慨解囊",
                                                        "icon":  "img/key/liushih_static_3.png",
                                                        "text":  "珀伽索 释放 近防机炮 前，驱散目标1个增益效果。"
                                                    },
                                                    {
                                                        "id":  "liushih_static_4",
                                                        "name":  "固键·坚韧之心",
                                                        "icon":  "img/key/liushih_static_4.png",
                                                        "text":  "珀伽索 免疫控制类效果。"
                                                    },
                                                    {
                                                        "id":  "liushih_static_5",
                                                        "name":  "固键·重金改良",
                                                        "icon":  "img/key/liushih_static_5.png",
                                                        "text":  "使用主动技能决胜千里后，获得4格 移动追加 。"
                                                    },
                                                    {
                                                        "id":  "liushih_static_6",
                                                        "name":  "固键·一呼百应",
                                                        "icon":  "img/key/liushih_static_6.png",
                                                        "text":  "非 珀伽索 的友方 实体召唤物 攻击后，自身获得1点导染指数，每个单位每个大回合至多触发1次。"
                                                    }
                                                ],
                                      "leap":  {
                                                   "id":  "liushih_leap",
                                                   "name":  "跃键·福运相伴",
                                                   "icon":  "img/key/liushih_leap.png",
                                                   "text":  "珀伽索首次处于整备状态时，清空主动技能决胜千里的冷却时间，每场战斗至多触发 1次 。 自身和珀伽索的最大生命值提高 15% ，当前大回合珀伽索每进行 1次 攻击，下个大回合自身和珀伽索造成的浊刻伤害提高 20% 。 刘莳在场时，自身和所有友方实体召唤物获得祥兆。"
                                               }
                                  },
                   "SextansSSR":  {
                                      "affection":  {
                                                        "id":  "sextans_love",
                                                        "name":  "契合键·静默回声",
                                                        "icon":  "img/key/sextans_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "sextans_common",
                                                     "name":  "共键·掌心的圣痕",
                                                     "icon":  "img/key/sextans_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "造成的近战伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "sextans_static_1",
                                                        "name":  "固键·契约者的羁绊",
                                                        "icon":  "img/key/sextans_static_1.png",
                                                        "text":  "战斗开始时场上每有1个电导类人形或使用刀的人形，自身获得1层 凝血 （满足多个条件时仅生效1次）。"
                                                    },
                                                    {
                                                        "id":  "sextans_static_2",
                                                        "name":  "固键·缄默碑文",
                                                        "icon":  "img/key/sextans_static_2.png",
                                                        "text":  "拥有 圣血印记 的友方单位主动攻击前，对目标施加 防御降低II ，持续2回合。"
                                                    },
                                                    {
                                                        "id":  "sextans_static_3",
                                                        "name":  "固键·怀表校准",
                                                        "icon":  "img/key/sextans_static_3.png",
                                                        "text":  "血色纹章 攻击前驱散目标1个增益效果。"
                                                    },
                                                    {
                                                        "id":  "sextans_static_4",
                                                        "name":  "固键·枯萎之誓",
                                                        "icon":  "img/key/sextans_static_4.png",
                                                        "text":  "稳态崩溃的敌方单位受到的伤害提高7%。"
                                                    },
                                                    {
                                                        "id":  "sextans_static_5",
                                                        "name":  "固键·红丝绒帷幕",
                                                        "icon":  "img/key/sextans_static_5.png",
                                                        "text":  "友方单位（不包含自身）使用刀进行攻击后，在目标周围半径1格内产生 电压 地格。"
                                                    },
                                                    {
                                                        "id":  "sextans_static_6",
                                                        "name":  "固键·黑天鹅之羽",
                                                        "icon":  "img/key/sextans_static_6.png",
                                                        "text":  "所有友方单位造成的稳态伤害提高1点。"
                                                    }
                                                ],
                                      "leap":  null
                                  },
                   "OTs14SSR":  {
                                    "affection":  {
                                                      "id":  "ots14_love",
                                                      "name":  "契合键·私享格调",
                                                      "icon":  "img/key/ots14_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "暴击伤害",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "ots14_common",
                                                   "name":  "共键·骄傲的起源",
                                                   "icon":  "img/key/ots14_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "暴击伤害",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "自身造成的固定伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "ots14_static_1",
                                                      "name":  "固键·掠夺者步伐",
                                                      "icon":  "img/key/ots14_static_1.png",
                                                      "text":  "使用主动技能全面压制或完美应变后，获得6格 移动追加 ，每回合至多触发1次。"
                                                  },
                                                  {
                                                      "id":  "ots14_static_2",
                                                      "name":  "固键·自我认同感",
                                                      "icon":  "img/key/ots14_static_2.png",
                                                      "text":  "获得 逆反同化 时，驱散自身所有减益效果。"
                                                  },
                                                  {
                                                      "id":  "ots14_static_3",
                                                      "name":  "固键·一心执念",
                                                      "icon":  "img/key/ots14_static_3.png",
                                                      "text":  "主动攻击只命中1个敌方目标时，造成的伤害提高20%。"
                                                  },
                                                  {
                                                      "id":  "ots14_static_4",
                                                      "name":  "固键·完美作战计划",
                                                      "icon":  "img/key/ots14_static_4.png",
                                                      "text":  "使用主动技能全面压制前驱散敌方目标1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "ots14_static_5",
                                                      "name":  "固键·不惜一切代价",
                                                      "icon":  "img/key/ots14_static_5.png",
                                                      "text":  "自身处于 掩护指令 状态时，受到的伤害降低20%。"
                                                  },
                                                  {
                                                      "id":  "ots14_static_6",
                                                      "name":  "固键·毁灭的渴望",
                                                      "icon":  "img/key/ots14_static_6.png",
                                                      "text":  "细胞重构始终获得重构·零。"
                                                  }
                                              ],
                                    "leap":  null
                                },
                   "NemesisGnosisSSR":  {
                                            "affection":  {
                                                              "id":  "nemesisgnosis_love",
                                                              "name":  "契合键·低语",
                                                              "icon":  "img/key/nemesisgnosis_love.png",
                                                              "attrs":  [
                                                                            {
                                                                                "name":  "暴击伤害",
                                                                                "value":  4.5
                                                                            },
                                                                            {
                                                                                "name":  "攻击",
                                                                                "value":  4.5
                                                                            },
                                                                            {
                                                                                "name":  "生命",
                                                                                "value":  4.5
                                                                            }
                                                                        ]
                                                          },
                                            "shared":  {
                                                           "id":  "nemesisgnosis_common",
                                                           "name":  "共键·复仇的意志",
                                                           "icon":  "img/key/nemesisgnosis_common.png",
                                                           "attrs":  [
                                                                         {
                                                                             "name":  "攻击",
                                                                             "value":  5
                                                                         }
                                                                     ],
                                                           "text":  "战斗开始时，场上如果存在2个使用狙击枪的友方人形或2个酸蚀类友方人形，则自身造成的伤害提高10%。"
                                                       },
                                            "fixed":  [
                                                          {
                                                              "id":  "nemesisgnosis_static_1",
                                                              "name":  "固键·归途之锚",
                                                              "icon":  "img/key/nemesisgnosis_static_1.png",
                                                              "text":  "战斗开始时，获得3点导染指数。"
                                                          },
                                                          {
                                                              "id":  "nemesisgnosis_static_2",
                                                              "name":  "固键·睿智的判断",
                                                              "icon":  "img/key/nemesisgnosis_static_2.png",
                                                              "text":  "获得 第一预言：共鸣 ：共鸣时，普攻星陨，主动技能灾厄共鸣，主动技能棱中折光，制胜技能命途归演的射程增加1格。"
                                                          },
                                                          {
                                                              "id":  "nemesisgnosis_static_3",
                                                              "name":  "固键·流浪者本能",
                                                              "icon":  "img/key/nemesisgnosis_static_3.png",
                                                              "text":  "获得 第二预言：孤高 时，若自身造成击杀，则获得 隐匿 ，持续1回合。"
                                                          },
                                                          {
                                                              "id":  "nemesisgnosis_static_4",
                                                              "name":  "固键·免疫体血脉",
                                                              "icon":  "img/key/nemesisgnosis_static_4.png",
                                                              "text":  "获得 第一预言：共鸣 时，自身 行动支援 后，驱散目标1个增益效果。"
                                                          },
                                                          {
                                                              "id":  "nemesisgnosis_static_5",
                                                              "name":  "固键·先知的独白",
                                                              "icon":  "img/key/nemesisgnosis_static_5.png",
                                                              "text":  "获得 第二预言：孤高 时，行动力增加2格。使用主动技能棱中折光后，获得4格 移动追加 。"
                                                          },
                                                          {
                                                              "id":  "nemesisgnosis_static_6",
                                                              "name":  "固键·希岸的赐福",
                                                              "icon":  "img/key/nemesisgnosis_static_6.png",
                                                              "text":  "使用主动技能灾厄共鸣时，若自身周围半径4格内存在友方单位，则获得 第一预言：共鸣 ；若自身周围半径4格内不存在友方单位，则获得 第二预言：孤高 。 第一预言：共鸣 和 第二预言：孤高 同时仅存在1个。"
                                                          }
                                                      ],
                                            "leap":  null
                                        },
                   "SoppoSSR":  {
                                    "affection":  {
                                                      "id":  "soppo_love",
                                                      "name":  "契合键·嬉闹和弦",
                                                      "icon":  "img/key/soppo_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "生命",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "soppo_common",
                                                   "name":  "共键·野性的呼唤",
                                                   "icon":  "img/key/soppo_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "暴击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "攻击处于冷凝或燃烧类地格上的敌方单位时，造成的异位伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "soppo_static_1",
                                                      "name":  "固键·这是我的地盘",
                                                      "icon":  "img/key/soppo_static_1.png",
                                                      "text":  "战斗开始时获得2层 狂躁因子 。"
                                                  },
                                                  {
                                                      "id":  "soppo_static_2",
                                                      "name":  "固键·还想再被咬吗",
                                                      "icon":  "img/key/soppo_static_2.png",
                                                      "text":  "攻击处于异位地格上的敌方目标后，驱散其1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "soppo_static_3",
                                                      "name":  "固键·极寒的地狱",
                                                      "icon":  "img/key/soppo_static_3.png",
                                                      "text":  "回合开始时，在自身周围半径4格内产生 霜冻 地格，持续2回合。"
                                                  },
                                                  {
                                                      "id":  "soppo_static_4",
                                                      "name":  "固键·圈地自疗",
                                                      "icon":  "img/key/soppo_static_4.png",
                                                      "text":  "受到伤害时若处于异位地格上，受到的伤害降低10%，受到的稳态伤害降低1点。"
                                                  },
                                                  {
                                                      "id":  "soppo_static_5",
                                                      "name":  "固键·纵情杀意",
                                                      "icon":  "img/key/soppo_static_5.png",
                                                      "text":  "自身拥有护盾时，造成的冷凝伤害和燃烧伤提高10%。"
                                                  },
                                                  {
                                                      "id":  "soppo_static_6",
                                                      "name":  "固键·群体协调",
                                                      "icon":  "img/key/soppo_static_6.png",
                                                      "text":  "友方单位（不包含自身）进行回合外攻击后，若自身无 火热攻势I 或 寒冰突击 ，则获得该效果，持续2回合。"
                                                  }
                                              ],
                                    "leap":  null
                                },
                   "MitylSSR":  {
                                    "affection":  {
                                                      "id":  "mityl_love",
                                                      "name":  "契合键·鼠鼠的归宿",
                                                      "icon":  "img/key/mityl_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "mityl_common",
                                                   "name":  "共键·机灵鼠小蒂",
                                                   "icon":  "img/key/mityl_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "暴击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "造成伤害时若自身处于浊刻地格，造成的伤害提高10%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "mityl_static_1",
                                                      "name":  "固键·电影级表现力",
                                                      "icon":  "img/key/mityl_static_1.png",
                                                      "text":  "主动技能凌空疾走造成伤害时驱散目标1个增益效果。"
                                                  },
                                                  {
                                                      "id":  "mityl_static_2",
                                                      "name":  "固键·乔装扮演",
                                                      "icon":  "img/key/mityl_static_2.png",
                                                      "text":  "自我弧影可以手动操作且可以移动。"
                                                  },
                                                  {
                                                      "id":  "mityl_static_3",
                                                      "name":  "固键·凌空接枪三周半",
                                                      "icon":  "img/key/mityl_static_3.png",
                                                      "text":  "米蒂尔行动结束时若处于浊刻类地格，获得移动提升II，持续2回合。"
                                                  },
                                                  {
                                                      "id":  "mityl_static_4",
                                                      "name":  "固键·泣系演出",
                                                      "icon":  "img/key/mityl_static_4.png",
                                                      "text":  "米蒂尔和弧影造成浊刻伤害时对目标施加情绪感染。"
                                                  },
                                                  {
                                                      "id":  "mityl_static_5",
                                                      "name":  "固键·先跟风冲一波",
                                                      "icon":  "img/key/mityl_static_5.png",
                                                      "text":  "战斗开始时，米蒂尔召唤1个弧影，米蒂尔与该弧影同时被视为人形与召唤物。该弧影无技能且无法行动。"
                                                  },
                                                  {
                                                      "id":  "mityl_static_6",
                                                      "name":  "固键·真假难辨",
                                                      "icon":  "img/key/mityl_static_6.png",
                                                      "text":  "米蒂尔和弧影造成伤害时若自身位于浊刻地格，造成的伤害提高10%，浊刻地格每有1级地格等级，造成的伤害额外提高5%。"
                                                  }
                                              ],
                                    "leap":  null
                                },
                   "FaelynnSSR":  {
                                      "affection":  {
                                                        "id":  "faelynn_love",
                                                        "name":  "契合键·烂漫纪行",
                                                        "icon":  "img/key/faelynn_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "faelynn_common",
                                                     "name":  "共键·瑟瑟犬威",
                                                     "icon":  "img/key/faelynn_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "回合开始时，若自身处于3级异位地格上，则造成的范围伤害提高 10% ，持续1个大回合。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "faelynn_static_1",
                                                        "name":  "固键·团子尾刀",
                                                        "icon":  "img/key/faelynn_static_1.png",
                                                        "text":  "对生命值不满的敌方单位造成的伤害提高 7% 。"
                                                    },
                                                    {
                                                        "id":  "faelynn_static_2",
                                                        "name":  "固键·竖毛警戒",
                                                        "icon":  "img/key/faelynn_static_2.png",
                                                        "text":  "使用额外主动技能巡狩本能前驱散目标1个增益效果。"
                                                    },
                                                    {
                                                        "id":  "faelynn_static_3",
                                                        "name":  "固键·最后一咕",
                                                        "icon":  "img/key/faelynn_static_3.png",
                                                        "text":  "死亡时对自身周围 半径 6格 内 的所有敌方单位造成 500% 攻击力的固定伤害和 3点 稳态伤害，产生 毒瘴 地格，并施加 最后一咕 ，持续 2回合 ；对非首领单位额外造成 300% 其最大生命值的固定伤害。"
                                                    },
                                                    {
                                                        "id":  "faelynn_static_4",
                                                        "name":  "固键·猎袭步法",
                                                        "icon":  "img/key/faelynn_static_4.png",
                                                        "text":  "回合开始时在自身 周围半径1格内 产生 毒瘴 地格，持续 2回合 。"
                                                    },
                                                    {
                                                        "id":  "faelynn_static_5",
                                                        "name":  "固键·猎袭步法",
                                                        "icon":  "img/key/faelynn_static_5.png",
                                                        "text":  "处于酸蚀类地格时受到的伤害降低 15% ，受到的稳态伤害降低 1点 。"
                                                    },
                                                    {
                                                        "id":  "faelynn_static_6",
                                                        "name":  "固键·气味标记",
                                                        "icon":  "img/key/faelynn_static_6.png",
                                                        "text":  "战斗开始时对生命值最高的敌方单位施加 嗅迹标 ，持续2回合。"
                                                    }
                                                ],
                                      "leap":  null
                                  },
                   "KoledaSSR":  {
                                     "affection":  {
                                                       "id":  "koleda_love",
                                                       "name":  "契合键·与狼共舞",
                                                       "icon":  "img/key/koleda_love.png",
                                                       "attrs":  [
                                                                     {
                                                                         "name":  "暴击",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "暴击伤害",
                                                                         "value":  4.5
                                                                     },
                                                                     {
                                                                         "name":  "攻击",
                                                                         "value":  4.5
                                                                     }
                                                                 ]
                                                   },
                                     "shared":  {
                                                    "id":  "koleda_common",
                                                    "name":  "共键·杀戮视野",
                                                    "icon":  "img/key/koleda_common.png",
                                                    "attrs":  [
                                                                  {
                                                                      "name":  "暴击",
                                                                      "value":  5
                                                                  }
                                                              ],
                                                    "text":  "若自身或自身实体召唤物行动力大于等于目标，则造成伤害提高10%。"
                                                },
                                     "fixed":  [
                                                   {
                                                       "id":  "koleda_static_1",
                                                       "name":  "固键·信条",
                                                       "icon":  "img/key/koleda_static_1.png",
                                                       "text":  "战斗开始时，获得 2层 升格 ；战斗开始时和 隐罪者 出生时，获得 动能回收 ，持续 3回合 。"
                                                   },
                                                   {
                                                       "id":  "koleda_static_2",
                                                       "name":  "固键·无暇赴死",
                                                       "icon":  "img/key/koleda_static_2.png",
                                                       "text":  "隐罪者 受到致命伤害时，生命值不会低于1，持续至大回合结束，冷却 2个 大回合。"
                                                   },
                                                   {
                                                       "id":  "koleda_static_3",
                                                       "name":  "固键·破灭之梦",
                                                       "icon":  "img/key/koleda_static_3.png",
                                                       "text":  "隐罪者 释放主动技能前，驱散目标1个增益效果。"
                                                   },
                                                   {
                                                       "id":  "koleda_static_4",
                                                       "name":  "固键·破灭之梦",
                                                       "icon":  "img/key/koleda_static_4.png",
                                                       "text":  "回合开始时，若自身拥有 5层 升格 ，则驱散自身的移动类减益和指令禁止效果。"
                                                   },
                                                   {
                                                       "id":  "koleda_static_5",
                                                       "name":  "固键·应晓吾名",
                                                       "icon":  "img/key/koleda_static_5.png",
                                                       "text":  "自身和 隐罪者 释放普攻或主动技能前，对敌方目标施加 防御降低II ，持续 2回合 。"
                                                   },
                                                   {
                                                       "id":  "koleda_static_6",
                                                       "name":  "固键·择死求生",
                                                       "icon":  "img/key/koleda_static_6.png",
                                                       "text":  "隐罪者 处于 S挡 或 S+挡 时，每有 1个 敌方单位死亡， 隐罪者 攻击力提高 4% ，至多提高 20% 。"
                                                   }
                                               ],
                                     "leap":  null
                                 },
                   "AsteriaSSR":  {
                                      "affection":  {
                                                        "id":  "asteria_love",
                                                        "name":  "契合键·无声的羁绊",
                                                        "icon":  "img/key/asteria_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "暴击伤害",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "asteria_common",
                                                     "name":  "共键·遥仰苍穹之人",
                                                     "icon":  "img/key/asteria_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "使用制胜技能时，本回合造成的伤害提高 10% 。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "asteria_static_1",
                                                        "name":  "固键·隐形守护",
                                                        "icon":  "img/key/asteria_static_1.png",
                                                        "text":  "所有友方单位回合外攻击造成的物理伤害提高 10% 。"
                                                    },
                                                    {
                                                        "id":  "asteria_static_2",
                                                        "name":  "固键·伸冤者",
                                                        "icon":  "img/key/asteria_static_2.png",
                                                        "text":  "施加 同调 时刷新全场所有 伸冤者印记 的持续时间。"
                                                    },
                                                    {
                                                        "id":  "asteria_static_3",
                                                        "name":  "固键·歌利亚领域",
                                                        "icon":  "img/key/asteria_static_3.png",
                                                        "text":  "友方单位攻击持有 伸冤者印记 的目标前，获得 反御增伤 ，持续 3回合 。"
                                                    },
                                                    {
                                                        "id":  "asteria_static_4",
                                                        "name":  "固键·再会的承诺",
                                                        "icon":  "img/key/asteria_static_4.png",
                                                        "text":  "持有 伸冤者印记 的单位死亡时，对最近的 1个 敌方单位施加 伸冤者印记 ，持续 2个大回合 。"
                                                    },
                                                    {
                                                        "id":  "asteria_static_5",
                                                        "name":  "固键·结果导向",
                                                        "icon":  "img/key/asteria_static_5.png",
                                                        "text":  "罪与罚每攻击1个不同的敌方目标，造成的伤害提高 5% ，至多提高 30% 。"
                                                    },
                                                    {
                                                        "id":  "asteria_static_6",
                                                        "name":  "固键·追寻的道路",
                                                        "icon":  "img/key/asteria_static_6.png",
                                                        "text":  "制胜技能轨炮裁决改为造成近战伤害并对帕拉蒂斯单位造成的伤害提高 80% 。"
                                                    }
                                                ],
                                      "leap":  null
                                  },
                   "EaglettaSSR":  {
                                       "affection":  {
                                                         "id":  "eagletta_love",
                                                         "name":  "契合键·无饰的真心",
                                                         "icon":  "img/key/eagletta_love.png",
                                                         "attrs":  [
                                                                       {
                                                                           "name":  "暴击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "攻击",
                                                                           "value":  4.5
                                                                       },
                                                                       {
                                                                           "name":  "生命",
                                                                           "value":  4.5
                                                                       }
                                                                   ]
                                                     },
                                       "shared":  {
                                                      "id":  "eagletta_common",
                                                      "name":  "共键·演员的自我修养",
                                                      "icon":  "img/key/eagletta_common.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  5
                                                                    }
                                                                ],
                                                      "text":  "若技能不消耗导染指数，则造成的伤害提高 10% 。"
                                                  },
                                       "fixed":  [
                                                     {
                                                         "id":  "eagletta_static_1",
                                                         "name":  "固键·猎食者的威慑",
                                                         "icon":  "img/key/eagletta_static_1.png",
                                                         "text":  "对非首领单位使用普攻撕裂重爪或被动技能 掠杀 后，对其施加震慑。"
                                                     },
                                                     {
                                                         "id":  "eagletta_static_2",
                                                         "name":  "固键·长空领主",
                                                         "icon":  "img/key/eagletta_static_2.png",
                                                         "text":  "主动攻击前，驱散目标1个增益效果。"
                                                     },
                                                     {
                                                         "id":  "eagletta_static_3",
                                                         "name":  "固键·高空中的守望",
                                                         "icon":  "img/key/eagletta_static_3.png",
                                                         "text":  "我方回合结束时，每有 1层 外来威胁 ，自身恢复 1点 稳态指数。"
                                                     },
                                                     {
                                                         "id":  "eagletta_static_4",
                                                         "name":  "固键·苍穹支配者",
                                                         "icon":  "img/key/eagletta_static_4.png",
                                                         "text":  "对生命值小于等于 50% 的非首领单位造成的伤害提高 20% 。"
                                                     },
                                                     {
                                                         "id":  "eagletta_static_5",
                                                         "name":  "固键·逆风振翼",
                                                         "icon":  "img/key/eagletta_static_5.png",
                                                         "text":  "使用普攻迅猛鹰击前，对目标施加防御降低II，持续2回合。"
                                                     },
                                                     {
                                                         "id":  "eagletta_static_6",
                                                         "name":  "固键·深入无人之境",
                                                         "icon":  "img/key/eagletta_static_6.png",
                                                         "text":  "普攻迅猛鹰击对机械型的非首领单位造成的伤害提高 30% 。"
                                                     }
                                                 ],
                                       "leap":  null
                                   },
                   "CeciliaSSR":  {
                                      "affection":  {
                                                        "id":  "cecilia_love",
                                                        "name":  "契合键·定向话疗",
                                                        "icon":  "img/key/cecilia_love.png",
                                                        "attrs":  [
                                                                      {
                                                                          "name":  "暴击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "攻击",
                                                                          "value":  4.5
                                                                      },
                                                                      {
                                                                          "name":  "生命",
                                                                          "value":  4.5
                                                                      }
                                                                  ]
                                                    },
                                      "shared":  {
                                                     "id":  "cecilia_common",
                                                     "name":  "共键·不止善解人意",
                                                     "icon":  "img/key/cecilia_common.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  5
                                                                   }
                                                               ],
                                                     "text":  "持有护盾时造成的燃烧伤害提高10%。"
                                                 },
                                      "fixed":  [
                                                    {
                                                        "id":  "cecilia_static_1",
                                                        "name":  "固键·情绪稳定",
                                                        "icon":  "img/key/cecilia_static_1.png",
                                                        "text":  "战斗开始时获得3点导染指数。"
                                                    },
                                                    {
                                                        "id":  "cecilia_static_2",
                                                        "name":  "固键·亲和魅力",
                                                        "icon":  "img/key/cecilia_static_2.png",
                                                        "text":  "普攻前，驱散敌方目标1个增益效果。"
                                                    },
                                                    {
                                                        "id":  "cecilia_static_3",
                                                        "name":  "固键·轻盈转身",
                                                        "icon":  "img/key/cecilia_static_3.png",
                                                        "text":  "主动使用普攻抚慰之语后，获得4格移动追加并驱散自身1个减益效果。"
                                                    },
                                                    {
                                                        "id":  "cecilia_static_4",
                                                        "name":  "固键·无害伪装",
                                                        "icon":  "img/key/cecilia_static_4.png",
                                                        "text":  "行动结束后获得 坚韧心域 ，持续 2个 大回合。 坚韧心域 吸收量为 50% 施加者攻击力，至多不超过 100% 目标最大生命值。"
                                                    },
                                                    {
                                                        "id":  "cecilia_static_5",
                                                        "name":  "固键·致命洞察",
                                                        "icon":  "img/key/cecilia_static_5.png",
                                                        "text":  "持有 强固心域 时，自身造成的回合外燃烧伤害提高15%。"
                                                    },
                                                    {
                                                        "id":  "cecilia_static_6",
                                                        "name":  "固键·自我激励",
                                                        "icon":  "img/key/cecilia_static_6.png",
                                                        "text":  "造成范围伤害前，获得覆盖提升II，持续2回合；造成精准伤害前，获得精准提升II，持续2回合。"
                                                    }
                                                ],
                                      "leap":  null
                                  },
                   "AgentSSR":  {
                                    "affection":  {
                                                      "id":  "agent_love",
                                                      "name":  "契合键·主人的命令",
                                                      "icon":  "img/key/agent_love.png",
                                                      "attrs":  [
                                                                    {
                                                                        "name":  "暴击",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "暴击伤害",
                                                                        "value":  4.5
                                                                    },
                                                                    {
                                                                        "name":  "攻击",
                                                                        "value":  4.5
                                                                    }
                                                                ]
                                                  },
                                    "shared":  {
                                                   "id":  "agent_common",
                                                   "name":  "共键·即刻清理指令",
                                                   "icon":  "img/key/agent_common.png",
                                                   "attrs":  [
                                                                 {
                                                                     "name":  "攻击",
                                                                     "value":  5
                                                                 }
                                                             ],
                                                   "text":  "自身造成的范围伤害提高5%。累计造成10次范围伤害后，造成的范围伤害额外提高5%。"
                                               },
                                    "fixed":  [
                                                  {
                                                      "id":  "agent_static_1",
                                                      "name":  "固键·随侍同心",
                                                      "icon":  "img/key/agent_static_1.png",
                                                      "text":  "大回合开始时，若自身处于3级浊刻地格上，攻击力永久提高9%。每场战斗至多触发1次。"
                                                  },
                                                  {
                                                      "id":  "agent_static_2",
                                                      "name":  "固键·优雅脱壳艺术",
                                                      "icon":  "img/key/agent_static_2.png",
                                                      "text":  "受到致命伤害时，若场上存在影侍，移除所有影侍，自身生命值不会低于1，持续至大回合结束；每场战斗至多触发1次。"
                                                  },
                                                  {
                                                      "id":  "agent_static_3",
                                                      "name":  "固键·女仆的威慑",
                                                      "icon":  "img/key/agent_static_3.png",
                                                      "text":  "除尘标记的效果改为造成的伤害降低40%，持续3个大回合。"
                                                  },
                                                  {
                                                      "id":  "agent_static_4",
                                                      "name":  "固键·严肃待客之道",
                                                      "icon":  "img/key/agent_static_4.png",
                                                      "text":  "行动力锁定至1格，自身对非首领单位造成的伤害提高30%，被动技能铁血战术不再消耗导染指数。"
                                                  },
                                                  {
                                                      "id":  "agent_static_5",
                                                      "name":  "固键·忠诚屏障",
                                                      "icon":  "img/key/agent_static_5.png",
                                                      "text":  "受到伤害时，自身周围半径8格内每有1个影侍或拥有铁血覆写的友方单位，自身受到的伤害降低10%。至多降低30%。"
                                                  },
                                                  {
                                                      "id":  "agent_static_6",
                                                      "name":  "固键·提裙愈步",
                                                      "icon":  "img/key/agent_static_6.png",
                                                      "text":  "自身行动结束时，恢复自身周围半径8格内所有拥有铁血覆写的单位和拥有铁血的友方人形15%最大生命值的生命值。"
                                                  }
                                              ],
                                    "leap":  null
                                },
                   "ColphneDoppelgaengerSSR":  {
                                                   "affection":  {
                                                                     "id":  "colphnedoppelgaenger_love",
                                                                     "name":  "契合键·治愈系诊疗",
                                                                     "icon":  "img/key/colphnedoppelgaenger_love.png",
                                                                     "attrs":  [
                                                                                   {
                                                                                       "name":  "攻击",
                                                                                       "value":  4.5
                                                                                   },
                                                                                   {
                                                                                       "name":  "生命",
                                                                                       "value":  4.5
                                                                                   },
                                                                                   {
                                                                                       "name":  "防御",
                                                                                       "value":  4.5
                                                                                   }
                                                                               ]
                                                                 },
                                                   "shared":  {
                                                                  "id":  "colphnedoppelgaenger_common",
                                                                  "name":  "共键·镜影化身",
                                                                  "icon":  "img/key/colphnedoppelgaenger_common.png",
                                                                  "attrs":  [
                                                                                {
                                                                                    "name":  "生命",
                                                                                    "value":  5
                                                                                }
                                                                            ],
                                                                  "text":  "施加减益效果后，防御力提高7%，持续1个大回合。"
                                                              },
                                                   "fixed":  [
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_1",
                                                                     "name":  "固键·手术预演",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_1.png",
                                                                     "text":  "战斗开始时，获得3点导染指数。"
                                                                 },
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_2",
                                                                     "name":  "固键·病理加速",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_2.png",
                                                                     "text":  "使用主动技能同源排异或制胜技能解离疗法获得指令追加时可移动6格。"
                                                                 },
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_3",
                                                                     "name":  "固键·自体吞噬",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_3.png",
                                                                     "text":  "友方人形或实体召唤物死亡时，自身获得1点导染指数，每回合至多获得3点导染指数。"
                                                                 },
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_4",
                                                                     "name":  "固键·靶向定位剂",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_4.png",
                                                                     "text":  "战斗开始时，为生命值最低的敌方普通单位、精英单位和首领单位各施加1层镜缚。"
                                                                 },
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_5",
                                                                     "name":  "固键·免疫性耐受",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_5.png",
                                                                     "text":  "反噬首次达到100层时，驱散50层该效果。每场战斗至多触发1次。"
                                                                 },
                                                                 {
                                                                     "id":  "colphnedoppelgaenger_static_6",
                                                                     "name":  "固键·全天候出诊",
                                                                     "icon":  "img/key/colphnedoppelgaenger_static_6.png",
                                                                     "text":  "处于浊刻类地格上时受到的伤害降低15%，受到的稳态伤害降低1点。"
                                                                 }
                                                             ],
                                                   "leap":  null
                                               },
                   "IglaSSR":  {
                                   "affection":  {
                                                     "id":  "igla_love",
                                                     "name":  "契合键·杰奎琳之泪",
                                                     "icon":  "img/key/igla_love.png",
                                                     "attrs":  [
                                                                   {
                                                                       "name":  "暴击伤害",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "攻击",
                                                                       "value":  4.5
                                                                   },
                                                                   {
                                                                       "name":  "生命",
                                                                       "value":  4.5
                                                                   }
                                                               ]
                                                 },
                                   "shared":  {
                                                  "id":  "igla_common",
                                                  "name":  "共键·竭诚为您服务",
                                                  "icon":  "img/key/igla_common.png",
                                                  "attrs":  [
                                                                {
                                                                    "name":  "暴击",
                                                                    "value":  5
                                                                }
                                                            ],
                                                  "text":  "若消耗导染指数，则本回合造成的伤害提高10%。"
                                              },
                                   "fixed":  [
                                                 {
                                                     "id":  "igla_static_1",
                                                     "name":  "固键·晨间问候",
                                                     "icon":  "img/key/igla_static_1.png",
                                                     "text":  "战斗开始时，获得1点导染指数，自身和距离自身最近的使用刀的友方人形获得2点通透指数。"
                                                 },
                                                 {
                                                     "id":  "igla_static_2",
                                                     "name":  "固键·随侍管家",
                                                     "icon":  "img/key/igla_static_2.png",
                                                     "text":  "所有使用刀的友方人形造成的伤害提高7%，细胞共鸣叠加至满层时，造成的伤害提高至14%。"
                                                 },
                                                 {
                                                     "id":  "igla_static_3",
                                                     "name":  "固键·优雅时光",
                                                     "icon":  "img/key/igla_static_3.png",
                                                     "text":  "主动技能造成伤害前若拥有律动模式，则对目标施加防御降低II，持续2回合。"
                                                 },
                                                 {
                                                     "id":  "igla_static_4",
                                                     "name":  "固键·茶会演奏者",
                                                     "icon":  "img/key/igla_static_4.png",
                                                     "text":  "获得律动模式时，获得反御增伤，持续3回合。"
                                                 },
                                                 {
                                                     "id":  "igla_static_5",
                                                     "name":  "固键·贴身照料",
                                                     "icon":  "img/key/igla_static_5.png",
                                                     "text":  "友方人形触发针的音刃震颤时，该人形恢复25%最大生命值的生命值，并获得贴身照料。"
                                                 },
                                                 {
                                                     "id":  "igla_static_6",
                                                     "name":  "固键·强韧细胞",
                                                     "icon":  "img/key/igla_static_6.png",
                                                     "text":  "自身有30%的概率免疫1次伤害。"
                                                 }
                                             ],
                                   "leap":  null
                               }
               },
    "genericShared":  {
                          "id":  "generic_crit",
                          "name":  "共键·通用暴击",
                          "icon":  "",
                          "attrs":  [
                                        {
                                            "name":  "攻击",
                                            "value":  3
                                        },
                                        {
                                            "name":  "暴击",
                                            "value":  3
                                        }
                                    ],
                          "text":  "攻击提高3%，暴击提高3%。"
                      }
};
