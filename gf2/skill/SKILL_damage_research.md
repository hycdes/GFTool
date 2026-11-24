# SKILL_damage_research — 少前2 伤害公式逆向交接

> 新 session 请先读本文件，再继续。最后更新：2026-11-14（解包第二轮）。

## 0. 重要操作约束（先读）

- **游戏/启动器运行时，绝对不要读取或扫描 `D:\Program Files\GF2Exilium` 下的文件**。启动器修复/更新会写这些文件，和外部读取撞车可能导致校验失败、报错，甚至只能重装。
- 需要分析时，先把 `Table`、`AssetBundles_Windows`、`ClientRes_Windows` **复制到独立目录**（建议 `D:\GF2_Unpack`），只分析副本。
- 不删除、不移动、不覆盖游戏目录文件；不注入/挂钩游戏进程。运行时 dump 必须先拿到用户明确同意。
- 上次事故：用户在解包期间启动游戏，启动器修复时报未知错误，最后重装。新 session 必须先确认游戏和启动器完全退出。

## 1. 已完成结论

### 面板属性
见 `SKILL_gameplay.md`：
`攻击/生命/防御 = (各数值项之和) × (1 + 各来源百分比之和)`。
数值项包括基础、心智增域、心智螺旋、额外收益、武器、配件、调度室、拟态核心、契合度等。

### 基础伤害（现行攻略仍引用）
`基础伤害 = ceil(攻击² / (攻击 + 防御))`
再乘：`(1 + Σ增伤) × 暴击区 × 属性克制区 × 技能倍率`。
擦伤：`最终伤害 = ceil(基础伤害 × 0.1)`。

### 解包表确认（2026-11-14 复核，未变）
`BattleConfigData.bytes`（单行配置）：
- f1=4、f2=f3=1.0
- `f4 = 9` 基础稳态
- `f5 = 1.8`、`f6 = -0.36`、`f7 = -0.01` **仍未确认**（疑似防御/稳态/等级曲线系数）
- `f8 = -0.2`、`f9 = 0.1`、`f20 = 0.2`
- `f45 = 120`、`f46 = 120` 暴击伤害
- f18/f19 为颜色（"250,112,72,114" / "134,176,255,142"）
- f76 为属性→字段映射：`[1,fire_hit_damage,fire_behit_damage],...`
- f82/f83 为 `p_l_slg_turn2FullCover_01` / `HalfCover_01`

`CoverConfigData.bytes`：掩体减伤独立乘区，值有 0.5 / 0.6 / 0.75。

`ElementConfigData.bytes`：
- `target.maxhp*A/100`
- `damage*(A-100)/100`

`PropertyData` / `EnemyBalanceData` 字段名：
`pow`(攻击)、`shieldArmor`(防御)、`hitDamage`(增伤)、`behitDamage`(易伤/减伤)、`crit`、`critMult`、
`elementAdd*`(异位增伤)、`elementAgainst*`(异位抗性)、`suppressDamage`/`beSuppressedDamage`(稳态伤害)、
`coverResistRate`(掩体减伤)、`suppressResistRate`(稳态减伤)、`finalBehitDamage`、`fixedDamAdd`/`fixedDamResist`、
`beginDamagepercent`、`aoeDam`、`singleDam`、`cdDam`、`outroundDam`。

### 2026-11-14 新增

**数据副本**：`D:\GF2_Unpack\Table`（2292 文件，119MB）、`D:\GF2_Unpack\ClientRes_Windows`（1110 文件，555MB，版本 4.0.5136）。
`AssetBundles_Windows` 86GB 未复制，需要时按需复制单个 bundle。

**官方属性文案（决定性）**：`LangPackageTableCnData.bytes`（48.5MB，526,728 条 id→文本）。
配合 `LanguagePropertyData.bytes` 可还原属性 key → 名称/描述：
- `crit`：触发暴击伤害的概率，暴击成功后将造成比原攻击更高的伤害。
- `crit_mult`：**触发暴击时的伤害倍率** → 暴击区 = critMult/100，基础 120% 即 **×1.2**（不是 ×2.2）。
- `suppress_resist`：人形在掩体内、稳态指数>0 时，受到伤害值变化的百分比（稳态减伤）。
- `suppress_resist_rate`：守方稳态减伤变化（修正值）。
- `suppress_resist_ignore`：攻方无视稳态减伤。
- `cover_resist_rate`：守方掩体减伤变化；`cover_resist_ignore`：攻方无视掩体减伤。
- `suppress_dam_addrate` / `suppress_dam_times`：稳态伤害的倍率增/减。
- `suppress_defend`：稳态护甲（受到的稳态伤害降低值）。
- `fixed_effect_base` / `fixed_dam_add` / `fixed_dam_resist`：固定伤害基础值与增减。
- `final_behit_damage`：最终伤害变化修正值。
- `outround/aoe/single/cd/potential` 系列：对应场景增伤/减伤。

**其他表**：
- `BattleEstimateData.bytes`：战斗内伤害预估的表达式配置（pow/crit/hit_damage，内部定点 ×1e6）。
- `CalculateData.bytes`（128KB）：技能/机制公式表达式表（`Dynamicmakepostdamage`、`Dynamicpostsuppressdamage` 等），含大量 `{0}` `{p1}` 表达式，可用于还原技能系数计算。
- `LanguagePropertyData`、`PropertyDescData`、`LangPackageTableCnData` 三表可组合出完整属性说明文本。

**代码资产现状**：
- `*.bytes_HUDll.u` = 12 字节自定义头 + PE；PE 段正常，但 170MB/76MB 尾部 overlay 全为 0。
- 方法体仍是被替换/加密的乱码；`ilspycmd -l` 可列类型，`-t`/`-il` 反编译失败（BadImageFormat/非法 token）。
- `dnfile` 可解析元数据字段（已枚举 `GF2.Data.PropertyData` 全部字段及 FieldNumber）。
- `_AOT.u` 仅覆盖引擎/第三方库（mscorlib、Unity、UniTask 等），**不含游戏逻辑**（无 Assembly-CSharp/Common/StaticTable 的 AOT 版本）。
- 未找到 `.proto`、序列化 descriptor 或 BattleConfig 消息类；`BattleConfigReflection` 的 descriptor 在加密的 cctor 中，静态不可取。
- `NEP2.dll` 为原生 DLL（39MB），未逆向。

## 2. 待确认

1. `1.8 / -0.36 / -0.01` 的真实含义（防御曲线？稳态曲线？等级差？）。
2. ~~暴击区 ×1.2 还是 ×2.2~~ → 已由官方文案定为 **×1.2**（critMult 为基础 120% 的伤害倍率）。
3. 异位增伤与通用增伤是同一加算池还是独立乘区。
4. 稳态/掩体减伤的精确公式（当前只有定性描述 + 配置值 0.5/0.6/0.75）。

## 3. 继续路线

1. **运行时 dump（需用户明确同意）**：游戏启动后从内存取解密后的 metadata/IL；有反作弊风险，未获同意前不要做。
2. **NEP2/HybridCLR 离线解密研究**：分析 NEP2.dll 的解密流程与 key，风险低于运行时注入，但工作量大。
3. **经验拟合**：用战斗记录/实战伤害样本反推 f5/f6/f7 与掩体/稳态公式（需要样本数据）。
4. **伤害计算器框架（2026-11-14 已实现）**：`gf2/js/app.js` 的 `#/tools/damage` 页 + `gf2/css/style.css`。
   - 首位人形使用现有装备/键/拟态/契合度计算出的面板（新增 `dollFinalStats()`，属性面板与计算器共用）。
   - 公式：`ceil(攻击²/(攻击+防御))` × 技能倍率 × 增伤/易伤 × 克制(±20%) × 掩体 × 稳态 × 暴击；擦伤按 `基础×0.1`。
   - 暴击区：`暴击伤害/100`（120% → ×1.2）；可选期望/必暴/不暴。
   - 异位增伤可切换“与通用增伤加算 / 独立乘区”。
   - f5/f6/f7 作为可编辑预留系数展示，暂不参与计算；掩体/稳态减伤为可调百分比。
   - 无头 Edge 实测：DestroyerSSR（攻 4834.71、防 500、暴击 99.5%、暴伤 150%）→ 基础 4382，掩体 50%，期望暴击 ×1.498，最终 3282。
   - 待办：多段/多回合、技能等级联动、固定伤害、稳态崩溃、更多敌人模板。

## 4. 相关文件

- 调查记录：`C:\Users\hyc\AppData\Local\Temp\codemaker\GF2_调查记录_20261103.md`
- 旧公式图片：`C:\Users\hyc\AppData\Local\Temp\codemaker\gf2_damage_formula.png`
- 站内规则：`D:\GFTool\gf2\skill\SKILL_gameplay.md`、`SKILL_gamedata.md`
- 本轮分析脚本/产物（均在 `C:\Users\hyc\AppData\Local\Temp\codemaker\`）：
  - `gfl2_pbdeep.py`、`gfl2_langsearch.py`、`gfl2_langprop.py`、`gfl2_dnfields.py`、`gfl2_dntypes.py`
  - `dump_CalculateData.txt`、`dump_BattleEstimateData.txt`、`property_lang_full.txt`、`lang_hits.txt`、`mech_texts.txt`

## 5. 触发词

用户说「继续研究伤害计算」时，按本文件继续；同时遵守仓库根目录 `AGENTS.md` 中的同名触发词规则。
