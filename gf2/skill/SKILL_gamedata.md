# SKILL_gamedata — 少女前线2：追放 数据来源与解包笔记

> 本文件记录：站内数据**从哪来、怎么抓、怎么解**，以及**出新角色时的更新流程**。以后版本更新照此操作即可。

---

## 1. 数据来源一览

| 数据 | 来源 | 抓取方式 | 落地文件 |
|---|---|---|---|
| 人形基础信息 / 头像 / 缩略图 | 本地配置表 + AssetBundles | `scripts/scrape_local.py` | `dat/tdoll_stat.js`、`img/avatar/`、`img/thumbnail/` |
| 技能 / 椎体 / 机制名词 | 本地配置表 | `scripts/scrape_local.py` | `dat/tdoll_stat.js`、`dat/term_stat.js` |
| 技能头元数据（弹种 / 稳态伤害 / 属性 / 冷却 / 导染消耗） | 本地 `BattleSkillData` | `scripts/scrape_local.py` | `dat/tdoll_stat.js`（`skills[].meta`） |
| 技能图标 | 官网 API `hero_detail` 的 `skill[].desc` 首个 `<img>` | `scripts/scrape_skill_icons.py` → 128×128 | `img/skill/NAME_skill_NO.png` |
| 武器（属性/烙印/特质/特效/卡池） | `https://gf2.mcc.wiki/weapon` | 页面 HTML（SSR） | `dat/weapon_stat.js`、`img/weapon/` |
| 位键（固键/共键/好感键/跃键） | `gf2-bbs-api.exiliumgf.com`（官网 API） | POST 接口 | `dat/key_stat.js`、`img/key/` |
| 心智螺旋键描述（富文本 / 词条） | 本地 `TalentKeyData` + `BattleSkillDisplayData` | `scripts/scrape_key_texts.py` | `dat/key_desc_stat.js`（词条并入 `dat/term_stat.js`） |
| 拟态图谱（核心） | 游戏本地配置表 | 解包 protobuf | `dat/mimicry_stat.js` |
| 拟态图谱（核心 / 生长数据 / 显像形态） | 游戏本地配置表 | 解包 protobuf | `dat/mimicry_stat.js` |
| 契合度（默契回馈） | 游戏本地配置表 + 反推公式 | 解包 + 四锚点拟合 | 内置在 `js/app.js` |

> 人形页的技能、椎体、机制名词、技能头元数据、头像/缩略图已改为**纯本地客户端**；技能图标改走**官网 API**（见 §9.5.1），不再使用 mcc.wiki。武器与位键暂时仍走 wiki / 官网 API。

抓取脚本都在 `scripts/`，解包工具 `scripts/pbtable_decode.py`。

---

## 2. 本地配置表在哪、什么格式

游戏安装目录 `D:\Program Files\GF2Exilium`，配置表在：

```
…\GF2 Game\GF2_Exilium_Data\LocalCache\Data\Table\
```

- 共约 **2288 个 `.bytes`** 文件（全量配置表），**二进制 protobuf、未加密**。
- 格式：`[4 字节前缀] + Protobuf 消息`；顶层 `f1`≈表号、`f2`=版本，之后是重复的「行」`f3`（或 `f1`）`{f1: 主键, f2: {字段…}}`。
- IL2CPP 的 `global-metadata.dat` **被网易 NEP2 加密**，字段名读不到 → 只能黑盒反推。

**解码工具**：`scripts/pbtable_decode.py`（Python 3）

```
py -3 scripts/pbtable_decode.py "<某个.bytes>" <递归深度> 4
# 第 3 个参数 4 = 跳过开头 4 字节前缀
```

---

## 3. 拟态图谱（游戏内叫「核心」）

- 表 **`CoreData.bytes`**：每组一行，共 68 行 = 68 名人形。
  - `f1` = 核心 id（1–68）
  - `f2.f1` = 名称语言 id（对应「支援核心·针」这类）
  - `f3` = 定位（1 防卫 / 2 尖兵 / 3 支援 / 4 火力）
  - **`f6` = 攻击、`f7` = 生命、`f8` = 防御**（Lv1 基础值）
  - `f9..f14` = 6 个阶段 id；`f16/f17` = 图标路径（含英文人名）
- 表 **`LevelUpData.bytes`**：60 级等级系数，每级 `f3`（=f4=f5）= **系数 ×1000**（Lv1=1000 → Lv60=7000）。
- **公式：核心属性(Lv) = ⌈基础值 × 系数(Lv) ÷ 1000⌉**（向上取整）。

校验锚点：代理人 37/97/31 → Lv60 **259/679/217**；寇尔芙·镜刻 30/101/41 → Lv1 30/101/41、Lv2 32/107/44。

**映射**：`CoreData.f2.f1` → 语言表字符串「<定位>核心·<人形名>」→ 取 `·` **第一个**之后的部分 = 人形中文名 → 匹配 `tdoll_stat` 的 `name`。

---

## 4. 契合度（默契回馈）

- **因人而异，且为累加**：逐级增量求和。基础取该人形「基础属性」的 攻击 / 生命 / 防御；**只 2–5 级加成（1、6–9 级不加）**。分属性算法见下。
- **攻击 / 防御**：逐级增量 = `round(基础 × 系数 ÷ 1000)`，再逐级求和（系数‰）：

| 契合度 | 攻击 | 防御 |
|---|---|---|
| 2 | 36.34 | — |
| 3 | — | 71.9 |
| 4 | 62.7 | 167.4 |
| 5 | 80.81 | — |

- **生命**：用「先累计、再逐级取差」——`cum(L) = round(基础 × 累计率(L) ÷ 1000)`，增量 = cum(L) − cum(L−1)。累计率（‰）：L2=50.41、L3=107.88、L4=107.88、L5=179.80。（这样能避免边界 ±1，如夏安。）

校验锚点（Lv5 累计）：

| 人形 | 基础 攻/生/防 | 攻击 | 生命 | 防御 |
|---|---|---|---|---|
| 佩里缇亚 | 612/1668/459 | 109 | 300 | 110 |
| 埃芙 | 605/1689/438 | 109 | 304 | 104 |
| 维尔德 | 536/2002/494 | 96 | 360 | 119 |
| 夏安 | 675/1648/438 | 122 | 296 | 104 |

> `Love*` 系列表（`LoveLevelData` / `LovePropertyGroupData` / `LovePropertyGroupByGunIdData`）里契合度 2–5 级**引用属性组 65500001~4**，但该属性组**在全表中只被引用、从未定义** → 系数是客户端算的；上表的系数是用三个人形反推出的**等效值**。

---

## 5. 官网 API（位键）

- 基址 `https://gf2-bbs-api.exiliumgf.com`，POST，返回 `{Code, Message, data}`（`Code==0` 成功）。
- 人形详情：`POST /wiki/hero_detail`，body `{"id": <id>}`；id 为 4 位数（1001–1085，共 68 个）。
- 每人的 `data.info.talent[]` 即心智螺旋键：按标题前缀分 契合键 / 固键 / 共键 / 跃键。
- 键图标/属性解析要点：描述里 `<img>` 的尺寸写作 `width="70"`、`height="71"`、`height="20"` 等**不统一**，且常有 `style=` 排在 `src=` 前 → **键图标取描述里第一个 `<img>`**，**属性图标取 `width` 或 `height="20"`**（文案紧跟其后）。
- 好感键（契合键）的属性百分比统一按 **4.5%（最大值）** 写入。
- 少数键图标 URL 指向 `gf2.mcc.wiki/image/key/...`（**404**），需改写到 `/static/thumbnail/item/...`；`*_love.png` 失效时去掉 `_love` 再试。
- 共键原生属性可能为空（纯效果键）；界面里三个共键的加成会**合并为一项**展示。

---

## 6. 出新角色时的更新流程

1. **人形（纯本地）**：进游戏让它下载最新配置表，再运行
   `py -3 scripts/scrape_local.py [--table DIR] [--bundles DIR] [--index FILE] [--no-images] [--rescan]`（默认读取 `D:\Program Files\GF2Exilium\...\Table` 与 `...\AssetBundles_Windows`）。
   脚本会重写 `dat/tdoll_stat.js`、`dat/term_stat.js`，并更新 `img/avatar/`、`img/thumbnail/`、`img/ui/`；`img/skill/` 的本地导出仅作备用，最终技能图标按 §9.5.1 从官网下载并命名。
   - 首次运行会扫描全部 bundle 建立 `scripts/.asset_index.json` 缓存（约 2 分钟）；之后直接复用。若新增/改名贴图找不到，加 `--rescan`。
   - 只更新数据不抓图：加 `--no-images`。
2. **技能图标**：运行 `py -3 scripts/scrape_skill_icons.py`。
   脚本会从官网 API 下载全部技能图标、转 128×128、按 `NAME_skill_NO` 命名，并回写 `tdoll_stat.js` 的 `skills[].icon`；普攻通用图标保留 `Skill_Attack_*`，旧 `Skill_<id>_*.png` 不再使用。
3. **武器 / 位键**：
   - `scripts\scrape_weapon.ps1`（武器，源 mcc）
   - `scripts\scrape_keys.ps1`（位键，源官网 API；**文件含中文，需 UTF-8 BOM**）
4. **更新拟态图谱**：
   `py -3 scripts/scrape_mimicry.py`（默认读取 `D:\Program Files\GF2Exilium\...\Table`，可传入其它目录）。
   脚本会重写 `dat/mimicry_stat.js`（核心属性、槽位、显像形态、特化形态、生长数据）。
5. **契合度无需更新**（公式与 §4 系数对所有人都适用；除非游戏改系数，才需重测）。
6. 校验：拿任一新人的游戏内 UI 对一遍（名字、标签、头像、技能名/等级/椎体、名词浮窗、技能头元数据）。

---

## 7. 已知陷阱

- PowerShell 5.1 默认按 ANSI 读 `.ps1`，含中文的脚本必须存成 **UTF-8 with BOM**，否则中文乱码、正则失效。
- `ConvertTo-Json` 会把**单元素数组**变成标量、**空数组**变成 `{}`；写数组字段要用 `[object[]]@(...)` 强制。
- mcc 的 `doll` / `weapon` 详情页是 SSR，数据直接在 HTML 里；官网 `exiliumgf` 是 Vue SPA，数据走上面的 API。
- `CoreData` 里核心名含两个 `·`（如「支援核心·寇尔芙·镜刻」），取人形名要 `split("·",1)[1]`。

---

## 8. 拟态图谱（本地配置表）

游戏内叫「拟态核心」，内部名 `RemouldingPattern`。相关表：

| 表 | 作用 | 关键字段 |
|---|---|---|
| `CoreData` | 每名人形的拟态核心 | `f1` 核心 id；`f2.f1` 名称语言 id；`f3` 职业；`f5` **6 个生长数据槽位类型**（1 防卫 / 2 尖兵 / 3 支援 / 4 火力）；`f6/f7/f8` 基础攻/生/防；`f9..f14` 6 个显像形态 id；`f15` 因子展示顺序；`f16` 图标 |
| `LevelUpData` | 核心 1–60 级系数 | 每行 `f1` 等级、`f3` 系数 ×1000；属性 = `⌈基础值 × 系数 ÷ 1000⌉` |
| `MasterEntryData` | 每个核心的 6 个显像形态 | `f1 = 阶段 × 10000 + 核心 id`；`f2.f1` 阶段名（胚胎/幼苗/花芽/花蕾/花苞/花朵）；`f3.f1` 效果文案；`f4` **4 字节 packed = 防卫/尖兵/支援/火力 因子需求**；`f6` 战斗技能 id；`f7=150` 为展示配置，不是需求 |
| `FeaturesEntryData` | 特化形态词条 + 生长数据 | `f2.f1` 词条名；`f3.f1` 每级效果；`f4.f1` **固定词条主名**（仅 α/β/γ = 1/2/3 级有值，如「穹顶之花α」）；`f6.f1` **随机词条前缀**（如「除湿」）；`f5` 图标；`f7` 因子类型（1–4）；`f9` 等级；`f10` 该词条上限；`f12` 分解/价值（固定词条 30×等级，随机词条 15×等级），**不是因子** |

- 显像形态解锁等级：初始 / 10 / 20 / 30 / 45 / 60，对应 胚胎 / 幼苗 / 花芽 / 花蕾 / 花苞 / 花朵。
- **生长数据命名**：`随机词条前缀 · 固定词条主名 + 等级后缀`，例如 浊刻抗性（`f6` 前缀「除湿」）+ 攻击强化（`f4` 主名「穹顶之花」）→「除湿·穹顶之花γ」。
- 特化形态共 60 种：固定词条 16 种（4 职业 × 4 系，有 α/β/γ 生长数据，上限 6 级）、随机词条 44 种（11 × 4 职业，无固定生长数据，上限 2/3/5 级）。
- **因子：每条词条每级提供 1 点；`MasterEntryData.f4` 直接是因子数量。**
- 每件生长数据同时携带 1 条固定词条（`f4` 主名）和 1 条随机词条（`f6` 前缀），两者都提供显像因子，所以一件生长数据可能提供两种因子类型。
- `MasterEntryData.f4` 的 4 个需求都是有效的；核心没有对应槽位时，需要用随机词条前缀提供的跨类型因子来满足。
- `CoreData.f15` 只是因子展示顺序（以核心职业开头），不是需求数组的顺序；`f4` 固定按 1–4 职业顺序。
- 语言表 `LangPackageTableCnData`：`f1` 为语言 id、`f2` 为文本；`scrape_mimicry.py` 内含完整的 id→文本解析。

---

## 9. 人形页本地数据映射（已替代 wiki）

脚本：`scripts/scrape_local.py`。生成 `dat/tdoll_stat.js`、`dat/term_stat.js`，并导出图片。

### 9.1 基础信息

| 页面字段 | 本地来源 | 说明 |
|---|---|---|
| `id` | `GunData.f5` | 如 `JiangyuSSR`，同时是图片文件名 |
| `name` | `GunData.f2` | 语言 id → 中文名 |
| `rank` | `GunData.f15` | 5 = SSR / 4 = SR |
| `tags` | `GunData.f13` 定位、`f23` 枪种、`f22` 属性 | 名称分别查 `GunDutyData` / `GunWeaponTypeData` / `LanguageElementData`；`f22` 为空 = 物理，31 = 源谐 |
| `intro` | `GunCharacterData.f11`（按 `f4 = id` 匹配） | 缺失时退回 `GunData.f6` |
| `avatar` | bundle 里的 `Avatar_Whole_<id>` | 2048×2048，直接导出 |
| `thumbnail` | bundle 里的 `Avatar_Half_<id>` | 512×512 → 缩放到 256×256 |

### 9.2 技能列表

不要直接照抄 `GunGradeData` 0 阶 `f11`：它同时包含**替换/变体技能**（如赛希莉娅的「抚慰之语·范围/精准」、艾格蕾塔的替换普攻）。正确取法：

1. **普攻**：`GunData.f18`。
2. **主动 1 / 主动 2 / 制胜**：在 0 阶 `f11` 里按 `BattleSkillData.f5` 分类取**每个分类的第一个**：
   - `4` = 主动 1，`5` = 主动 2，`2` = 制胜。
3. **被动**：在所有 `BattleSkillDisplayData` 里找图标名同时包含 `_Passive_` 且属于本人（`Skill_<id>_` / `Skill_<去掉SSR/SR后缀>_`）的家族；优先带椎体升级的。排除 `Summon`（召唤物被动）。
4. **额外技能**（部分人形有，如针的「入殓奏鸣曲」、克罗丽科的「淬火燎原」）：
   - `GunGradeData.f15` 为单 id；否则 `f14`（可能是单 int，也可能是 packed varint 列表，取第一个）。
   - 这些技能 `BattleSkillData.f5` 通常为 `70/71`，排在被动之后。
5. 所有 id 都换算成**1 级家族基址** `base = id - (f9 - 1)`，再去重。
6. 排序：普攻 → 主动 1 → 主动 2 → 制胜 → 被动 → 额外技能。

### 9.3 技能等级 / 椎体

- `BattleSkillDisplayData.f1` = 技能 id，`f9` = 等级（1..N），`f2` = 名称，`f3` = 完整描述，`f8` = 该等级相对上一级的**变化文案**，`f10` = 图标名，`f22` = 标签（`主动 / 范围 / 近战`）。
- `GunGradeData` 0 阶 `f1 = 枪 id×100+1`，第 N 椎 `f1 = 枪 id×100+1+N`，`f4` = 该椎解锁的技能 id。由此得到每个等级的 `Lv.N ( X椎 )`。
- **椎体显示**：等级 >1 的 `f8` 文案，标签为 `椎体 · X`（X = 解锁该等级的椎数）。
- **等级切换**：前端把每级 `f3` 各渲染一份，点 Lv 标签切换显示。
- **弹种子标签**：`BattleSkillData.f45`：`1` = 用人形自身枪种弹种，`2/4/8/16/32` = 轻型/中型/重型/近战/霰弹；空 = 无子标签。普攻兜底用自身枪种弹种。
- 输出到 `tdoll_stat.js` 的技能对象：`{name, icon, tags, subTags, meta, levels, desc, descs, descRefs, vertebrae}`；`desc = descs[0]`，`descRefs[i]` 与 `descs[i]` 的 `{n}` 占位符一一对应；`vertebrae[] = {label, text, refs}`。

### 9.3.1 技能头元数据（`skills[].meta`，纯本地解包）

技能名右侧展示的弹种、稳态伤害、属性、冷却时间、导染消耗全部来自本地 `BattleSkillData`，**不要再从 wiki / 官网页面临时抓**：

| 字段 | 含义 | 本地来源 | 规则 |
|---|---|---|---|
| `ammo` | 子弹类型 | `BattleSkillData.f45`（经 `subtags_for`） | `2/4/8/16/32` = 轻型/中型/重型/近战/霰弹；`1` = 用人形自身枪种弹种；空 = 无。普攻兜底用自身枪种弹种。 |
| `stability` | 稳态伤害 | `BattleSkillData.f17` | 分号分隔段中的 `2,<n>`（`n` 必须是数字）；没有该段、或第二段是 `#...` 引用时不写入。 |
| `element` | 属性 | `BattleSkillData.f6` | `1` 燃烧 / `2` 电导 / `3` 冷凝 / `4` 酸蚀 / `5` 浊刻 / `6` 重势 / `7` 寄生 / `31` 源谐；缺失 = 物理/无属性。 |
| `cooldown` | 冷却时间 | `BattleSkillData.f31` | 大于 0 才写入。 |
| `cost` | 导染消耗 | `BattleSkillData.f34` | 大于 0 才写入。 |

- 输出：`skills[].meta = {ammo, stability, element, cooldown, cost}`，只写实际存在的键。
- 图标（`img/ui/`）：
  - `ammo` → `type_a_light / mid / heavy / sword / sg.png`（轻型 / 中型 / 重型 / 近战 / 霰弹）。
  - `element` → `type_e_fire / elec / ice / acid / hydro / harmony.png`（燃烧 / 电导 / 冷凝 / 酸蚀 / 浊刻 / 源谐）。
  - `stability` → `type_s_steady.png`（游戏 `Buff_WillSub`）。
  - `cooldown` → `type_s_cd.png`（游戏 `Buff_Cooldown`）。
  - `cost` → `type_s_potential.png`（游戏 `Buff_PotentialAdd`；导染内部名为 Potential）。
- 前端：技能名右侧按 `ammo → 稳态伤害 N → element → 冷却时间 N → 导染消耗 N` 顺序渲染 `.meta-chip`，每个 chip 为 16×16 圆形图标 + 文字；下方 `.skill-tags` 只显示 `tags`，不再重复弹种。
- 例：破坏者普攻 `{ammo:"霰弹", stability:3, element:"冷凝"}`；狂欢时间 `{element:"冷凝", cooldown:3}`。

### 9.3.2 心智螺旋键描述（本地富文本）

- `TalentKeyData.f7` = 键名（与 `key_stat.js` 的 `name` 对应），`f6` = 该键对应的战斗技能 id。
- `BattleSkillDisplayData.f1 = f6` 的行：`f3` = 富文本（含 `<color=#...>`），`f4` = 词条引用串。
- `scripts/scrape_key_texts.py` 按键名匹配本地行，生成 `dat/key_desc_stat.js`（`keyId -> {text, refs}`），并把键引用到的词条合并进 `dat/term_stat.js`；技能和键共用同一套 `TERM_STAT`。
- 前端 `spiralKeyCard` 使用 `KEY_DESC_STAT[keyId]` + `renderRich(text, refs)`，与技能描述一致：数值橙色、机制词条蓝色虚线下划线 + 悬浮浮窗。
- 好感键/契合键在 `TalentKeyData` 中没有战斗技能描述，只有属性；面板只显示属性 chip。

### 9.4 机制名词（BattleDictionary）

- 表格：`BattleDictionaryData`（类型 1）与 `BattleBuffPerformData`（类型 0）。两者结构都是：
  - `f1` = id，`f2` = 名称语言 id，`f3` = 描述语言 id，`f4` = 子词条引用串。
- 技能/名词描述里的 `{0}`、`{1}` 对应 `f4` 中以 `;` 分隔的第 0、1 条引用。
- 引用格式：`<类型>:<id>`，后面可跟逗号参数（如 `0:-1,10058001,1`）。解析时取**存在的最大正数 id**；类型 0 查 `BattleBuffPerformData`，类型 1 查 `BattleDictionaryData`。
- 类型 0 若直接 id 不存在，可能是 **buff 组 id**：再查 `BuffClassData.f1 → f2 packed varint 列表` 或 `BattleBuffData.f44`，取组内第一个有名称/描述的 buff。
- **已知特例**：破坏者「弹药狂热」的 `{4}` 原始引用是 `0:-1,1088081262,1`；`1088081262` 是无名称/描述的空壳 buff，`1088081261` 才是「拒绝退场」。走 group fallback 会误选 `1` 组里的「火热攻势I」。`scrape_local.py` 用 `TERM_REF_OVERRIDES` 把该 ref 覆盖为 `1088081261`。
- `BattleBuffData.f3` 是**名称语言 id**（不是描述），仅在 `BattleBuffPerformData` 缺失时作为名称兜底。
- 前端 `dat/term_stat.js` 存展开后的 `{name, desc, refs}`。鼠标悬浮词条时：
  - 显示该词条名称 + 描述；
  - 递归展开其 `refs` 子词条；
  - 用 `visited` 去重，防止 A↔B 循环；
  - 浮窗深色底，描述内颜色标签 `<color=#RRGGBB>` 转成 `<span style="color:#...">`。

### 9.5 图片 / bundle 解密

- 资源包目录：`...\LocalCache\Data\AssetBundles_Windows\*.bundle`（约 9600 个）。
- 文件头被 XOR 过，但**只加密前 `0x8000` 字节**：
  ```
  key = b"UnityFS\x00" + b"\x00\x00\x00\x07" + b"5.x."   # 16 字节
  file_key = data[0:16] XOR key              # 16 字节
  for i in range(min(0x8000, len(data))):
      data[i] ^= file_key[i % 16]
  ```
  解密后即为标准 UnityFS，可直接用 UnityPy 读取。
- 贴图映射：
  - 头像 `img/avatar/<id>.png` ← `Avatar_Whole_<id>`
  - 缩略图 `img/thumbnail/<id>.png` ← `Avatar_Half_<id>`（缩放到 256×256）
  - 技能图标：本地 `BattleSkillDisplayData.f10` 贴图仅作备用（64×64）；最终图标按 §9.5.1 从官网下载。
  - 技能头图标 `img/ui/type_s_cd.png` ← `Buff_Cooldown`；`type_s_potential.png` ← `Buff_PotentialAdd`；`type_s_steady.png` ← `Buff_WillSub`（均缩放到 50×50）。
  - 定位/职业小图标 `img/ui/prof_guard|scout|assist|suppress.png` ← `Icon_Professional_Guard/Scout/Assist/Suppress`（缩放到 64×64，用于显像形态需求徽章）
- `scrape_local.py` 首次运行会扫描全部 bundle，建立 `scripts/.asset_index.json`（`贴图名 → bundle 文件名`）；之后复用。新增贴图找不到时加 `--rescan`。
- 只更新数据、不抓图：`py -3 scripts/scrape_local.py --no-images`。

### 9.5.1 技能图标（官网，全量）

- **不再从 mcc.wiki 找技能图标**。统一从官网 API `POST /wiki/hero_detail` 的 `data.info.skill[]` 取：每个技能 `desc` 里的第一个 `<img src="...">`（`community-cdn.exiliumgf.com/prod/...`）。
- 脚本：`py -3 scripts/scrape_skill_icons.py`。自动读取 `dat/tdoll_stat.js` → 按角色名匹配官网技能 → 下载 → 转 **128×128 PNG** → 按规则命名 → 回写 `skills[].icon`。支持 `--dry-run`、`--force`、`--only ID`。
- 命名：`NAME_skill_NO.png`
  - `NAME` = 角色英文名，去掉 `SSR`/`SR` 后缀（如 `DestroyerSSR` → `Destroyer`）。
  - `_skill_` 为固定字段。
  - `NO` 为两位数字：
    - 普攻：若现有图标是通用 `Skill_Attack_*.png`，直接复用现有通用图标，**不新增文件**；普攻非通用时命名 `00`。
    - 其他技能：按技能展示顺序从 `01` 开始编号（`01`、`02`、`03`……）。
- 官网 API 偶尔返回旧的 `gf2.mcc.wiki/image/skill/...` 地址（404）；脚本会自动改写到 `gf2.mcc.wiki/static/thumbnail/skill/...`。
- 旧 `Skill_<角色id>_Active/Passive_*.png` 在完成全量替换后删除，只保留 8 个通用 `Skill_Attack_*`。
- 示例（破坏者）：
  - 普攻「撕咬」→ 复用 `Skill_Attack_Shotgun.png`
  - 毁灭指令 → `Destroyer_skill_01.png`
  - 末日弹幕 → `Destroyer_skill_02.png`
  - 狂欢时间 → `Destroyer_skill_03.png`
  - 弹药狂热 → `Destroyer_skill_04.png`

### 9.5.2 图标本地化匹配现状

- **技能图标**：350/350 均可在本地 bundle 找到对应纹理（`BattleSkillDisplayData.f10`）；最新角色需要先跑一次 `scrape_local.py --rescan` 更新 `scripts/.asset_index.json` 缓存（破坏者的 4 个图标就是 rescan 后才进入索引的）。
- **当前 web 图标 vs 本地纹理**：327/350 基本一致（94 个像素级一致，233 个仅缩放差异）；**20 个明显不同**，官方 API 疑似给的是通用/错位图标：
  - `NemesisSR`：启星、隧穿之匣、星群追应、定点观测
  - `LennaSSR`：野性扑灭、跃动追踪
  - `PeriSSR`：风险投资、超额订单、最终价码、极致收益
  - `DaiyanSSR`：清商和鸣、逸响入神
  - `AsteriaSSR`：轨炮裁决；`UllridSSR`：隐迹追猎、哨戒射击（通用弓图标被官方图标覆盖）
  - `MishtySSR`：无梦好夜；`LevaSSR`：有序扰乱；`NagantSR`：制裁宣告
  - `LoreleySSR`：女王的恩赐；`MacqiatoSSR`：专业手段
- **技能头图标**：`stability` / `cooldown` / `cost` 已使用本地 `Buff_WillSub` / `Buff_Cooldown` / `Buff_PotentialAdd`。
- **仍待本地化**：`type_a_*`（弹种）与 `type_e_*`（属性）目前在本地纹理索引中**没有找到直接同名/等价资源**，可能内嵌在 UI SpriteAtlas 或 TMP SpriteAsset 中；先保留现有图标，不做替换，后续再查。

### 9.6 属性组现状

- `基础属性`/`心智增域`/`心智螺旋-增效点位`/`心智螺旋-额外进阶收益` 目前**优先沿用旧 `tdoll_stat.js` 中已有的值**，避免破坏现有计算。
- 新角色若没有旧值，脚本用 `GunPresetGroupPropertyByGroupIdData`（组 = `枪id×100`）+ `PropertyData` 最后一级（60 级）的 `f2/f3/f5` 作为「基础属性」兜底；暴击/暴伤暂按 20%/120%，稳态取 `f8`。
- 心智增域 / 心智螺旋的完整本地拆分仍待继续逆向（`SquadTalentTreeData`、`SquadTalentGunData`、`TalentKeyData` 等）。

### 9.7 前端展示约定

- 人形列表按**上线时间倒序**（最新在前）：`scrape_local.py` 的 `release_dates()` 从本地 `GachaData` 取每个角色最早的角色卡池开始时间（`f4=3`，`f30`=角色 id，`f7`=开始时间戳）；没有卡池记录的早期人形按 `LEGACY_DOLL_ORDER` 的 wiki 顺序兜底。新角色只要游戏里开了角色卡池，重新生成后会自动排在最前。
- 人形详情页的「技能」是一个 `panel`，每个技能是其中的子 panel（`.skill-card`）；「技能」标题沿用原来的 17px；技能图标底板为深灰 `#2c2c30`。
- 每个技能有 `Lv.N ( X椎 )` 按钮，点击可手动切换该等级的完整描述（`descs`）；普攻图标缺失时按枪种回退到 `Skill_Attack_*`。
- 技能名右侧显示元数据 chip（弹种 / 稳态伤害 / 属性 / 冷却时间 / 导染消耗），来自 `skills[].meta`；下方 `.skill-tags` 只显示技能分类 `tags`，不再重复弹种。
- 人形详情新增「心智螺旋」panel：按好感键 / 共键 / 专属固键分组，展示 `KEY_STAT.byDoll[id]` 的图标、名称、属性 chip 和描述；固键双列、移动端单列，跃键暂不展示。描述优先取 `KEY_DESC_STAT`，用 `renderRich` 渲染（数值橙色、机制词条浮窗），与技能描述一致。
- 「椎体」横向拉条范围 0–6，默认 6；选中后，每个技能自动切到**不超过该椎体的最高等级**描述，并在对应 Lv 标签前显示绿色 `✓`。
- 技能下方「椎体 · X」列表来自该等级 `f8` 变化文案；额外技能若无椎体升级则不显示。
- 技能/椎体描述中的机制名词渲染为蓝色虚线下划线（`.term`）；鼠标悬浮显示深色浮窗（`.term-tip`）。
- 浮窗内容 = 该词条 + 其 `refs` 递归子词条；用 `visited` 去重，A↔B 只显示一次。
- 描述中的 `<color=#RRGGBB>` 统一转成 `<span style="color:#RRGGBB">`；换行转 `<br>`。
- 人形详情第一个 panel 标题为「属性」；「人物配置」及小字紧挨标题右侧（不靠右），点击展开/收起，展开状态按人形记忆；展开内容有虚线边框。
- 人物配置排版：第一行「椎体 / 契合度（Lv9）/ 徽记助益」三等分；第二行「武器」独占，四个配件在武器右侧并保持同高；第三行「位键佩戴 / 拟态图谱」两等分。
- 椎体拉条坐标轴显示 `0 1 2 3 4 5 6`，当前值高亮；武器磁贴宽度为原 312px 的 1.5 倍（468px），高度与 2×2 配件区一致（160px），武器图用 `object-fit: contain`。
- 配件区宽度 480px（每格约 236px），枪口 4 个四字属性、其他配件 3 个四字属性都能单行显示；属性 chip 不换行。
- 拟态图谱固定 Lv.60，不再提供等级输入；「显像形态」合并进拟态图谱组，需求徽章改用游戏内职业小图标（`img/ui/prof_*.png`），不再显示「支援」等文字；生长数据槽位底色使用对应职业色（防卫蓝 / 尖兵紫 / 支援绿 / 火力红）。
- 契合度固定 Lv.9（计算按 2–5 级封顶），标题为「契合度（Lv9）」；铭契为独立开关（默认开启），+5% 攻击/生命/防御计入百分比。
- 徽记助益默认开启；其 +1 攻击/生命/防御**在最终乘算之后加算**（表单 `add` 项）；开关文案只保留「最终攻击 / 生命 / 防御 +1」。
- 位键默认：1 号槽自己的好感键，2 号槽自己的共键，3/4 号槽「共键·通用暴击」；「攻暴满配」开关位于位键磁贴上方，默认开启。
- 所有 checkbox 使用 Apple 风格滑动开关；键名称按 `·` 换行（如「共键」换行「通用暴击」）。
- 武器/位键/配件编辑浮窗（以及伤害计算的人形/敌人选择浮窗）用 `position: fixed` 定位到点击磁贴附近：优先下方 8px；下方不足 200px 时放到上方；最大高度按剩余空间自适应。
