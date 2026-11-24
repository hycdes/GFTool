# SKILL_gamedata — 少女前线2：追放 数据来源与解包笔记

> 本文件记录：站内数据**从哪来、怎么抓、怎么解**，以及**出新角色时的更新流程**。以后版本更新照此操作即可。

---

## 红线：词条引用解析（严禁再犯）

以下为硬约束，违反会直接导致攻略错误：

1. **严禁**把 `0:-1,<familyId>,<flag>` 中的 `-1` / 尾部 `flag` 当作 buff id；解析只取中间的 `familyId`。
2. **严禁**用“`BuffClassData` 组内第一个有名字的 buff”去猜词条；必须按 §9.4 的顺序解析（精确 → 家族 → 分享组 → 隐藏名 → 显式组 → 相邻）。
3. **严禁**用一次性 `TERM_REF_OVERRIDES` 掩盖解析器缺陷；必须修 `parse_refs()` / `resolve_one()` 根因，override 只用于确实无规律的数据。
4. 每次「更新角色」后，**必须**检查 `scrape_local.py` 的 `heuristic term refs` 日志（含 `owner=技能:...` / `owner=名词:...`），并抽查 §9.4 回归锚点；特别确认卡萝「直播状态」→「热度」，**绝不能是「火热攻势I」**。
5. 出现同类串词条，视为 P0 缺陷：修解析器 + 补日志/锚点 + 重跑全量数据，不允许只修单个坏词条。

> 2026-11-24 案例：`parse_refs()` 曾把尾部 flag `1` 当候选，命中 `BuffClassData` 组 1（火热攻势I），导致卡萝「直播状态」的叠层显示成火热攻势I；上一轮只给破坏者加了单点 override 所以复发。现已从解析器层修复并加日志/锚点。

---

## 0. 触发词：更新角色

当用户说「更新角色」时：**以本地客户端配置表 / AssetBundles 为准重新生成，不要用 mcc / 官网 API 替代人形、技能、名词、位键、技能图标。** 按顺序执行：

1. 确认游戏已更新：`Table/GunData.bytes` 的修改时间、`CacheResVersion` 已是新版本，且 `GunData` 里能查到新角色 sid；游戏进程未运行。
2. `py -3 scripts/scrape_local.py --rescan` — 重扫 bundle、重写 `dat/tdoll_stat.js` / `dat/term_stat.js`、更新 `img/avatar` / `img/thumbnail` / `img/skill`（本地技能图标 128×128）。
3. `py -3 scripts/scrape_keys_local.py` — 本地 `TalentKeyData` / `ItemData` / `PropertyData` → `dat/key_stat.js` + `img/key/`（本地位键图标 256×256）。
4. `py -3 scripts/scrape_key_texts.py` — 本地 `TalentKeyData` → `dat/key_desc_stat.js`，词条并入 `term_stat.js`。
5. `py -3 scripts/scrape_mimicry.py` — 本地拟态图谱 → `dat/mimicry_stat.js`。
6. 武器（**默认必跑**）：`powershell -File scripts/scrape_weapon.ps1`（源 mcc；**只有武器仍走 mcc**，脚本用 `$PSScriptRoot` 自动定位仓库根目录）。跑完确认 `WEAPON_STAT` 中存在 `bond.id == 新角色 sid` 且 `rank == 5` 的专武（人形页会通过 `signatureWeapon()` 自动装备），并检查 `img/weapon/` 与 `img/weapon/thumb/` 图片已下载。
7. 校验：新角色名字、标签、头像、技能名/等级/椎体、名词浮窗、**技能头元数据（稳态伤害 f23 优先，卡萝乐子制造机=2）**、位键（含本地图标/跃键 1/2 阶）、**专武（bond.id/rank/图片）**、拟态；**必须检查 `scrape_local.py` 的 `heuristic term refs` 日志和 §9.4 回归锚点**（直播状态→热度等）。

> `scripts/scrape_skill_icons.py`（官网技能图标）和 `scripts/scrape_keys.ps1`（官网位键）**已停用**，保留仅作参考。之前在 mcc 上手工补的临时数据会被第 2 步整体覆盖，属预期。

---

## 1. 数据来源一览

| 数据 | 来源 | 抓取方式 | 落地文件 |
|---|---|---|---|
| 人形基础信息 / 头像 / 缩略图 | 本地配置表 + AssetBundles | `scripts/scrape_local.py` | `dat/tdoll_stat.js`、`img/avatar/`、`img/thumbnail/` |
| 技能 / 椎体 / 机制名词 | 本地配置表 | `scripts/scrape_local.py` | `dat/tdoll_stat.js`、`dat/term_stat.js` |
| 技能头元数据（弹种 / 稳态伤害 / 属性 / 冷却 / 导染消耗） | 本地 `BattleSkillData` | `scripts/scrape_local.py` | `dat/tdoll_stat.js`（`skills[].meta`） |
| 技能图标 | 本地 `BattleSkillDisplayData.f10` 贴图名 | `scripts/scrape_local.py` → 128×128 | `img/skill/Skill_<id>_*.png` |
| 武器（属性/烙印/特质/特效/卡池） | `https://gf2.mcc.wiki/weapon` | 页面 HTML（SSR） | `dat/weapon_stat.js`、`img/weapon/` |
| 位键（固键/共键/好感键/跃键） | 本地 `TalentKeyData` + `ItemData.f8` + `PropertyData` | `scripts/scrape_keys_local.py` | `dat/key_stat.js`、`img/key/` |
| 心智螺旋键描述（富文本 / 词条） | 本地 `TalentKeyData` / `SpTalentKeyData` + `BattleSkillDisplayData` | `scripts/scrape_key_texts.py` | `dat/key_desc_stat.js`（词条并入 `dat/term_stat.js`） |
| 拟态图谱（核心） | 游戏本地配置表 | 解包 protobuf | `dat/mimicry_stat.js` |
| 拟态图谱（核心 / 生长数据 / 显像形态） | 游戏本地配置表 | 解包 protobuf | `dat/mimicry_stat.js` |
| 契合度（默契回馈） | 游戏本地配置表 + 反推公式 | 解包 + 四锚点拟合 | 内置在 `js/app.js` |

> 人形页的技能、椎体、机制名词、技能头元数据、头像/缩略图、技能图标、位键（数据 + 图标）全部为**纯本地客户端**（见 §9.5.1、§9.8）；官网 API 已停用。只有武器仍走 mcc.wiki。

抓取脚本都在 `scripts/`，解包工具 `scripts/pbtable_decode.py`。

---

## 2. 本地配置表在哪、什么格式

游戏安装目录 `D:\Program Files\GF2Exilium`（重装后多了一层 `GF2 Game`），配置表在：

```
D:\Program Files\GF2Exilium\GF2 Game\GF2 Game\GF2_Exilium_Data\LocalCache\Data\Table\
```

> 资源包在同级的 `AssetBundles_Windows\`；`scrape_local.py` / `scrape_mimicry.py` 的默认路径已按此更新。

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

## 5. 官网 API（已停用）

位键和技能图标已全部改为本地来源，不再依赖 `gf2-bbs-api.exiliumgf.com`：

- 位键数据 + 图标：`scripts/scrape_keys_local.py`（本地 `TalentKeyData` / `ItemData.f8` / `PropertyData`，见 §9.8）。
- 位键富文本描述：`scripts/scrape_key_texts.py`（本地 `BattleSkillDisplayData`）。
- 技能图标：`scripts/scrape_local.py`（本地贴图，见 §9.5.1）。

> 历史备注：旧方案用 `POST /wiki/hero_detail` 的 `data.info.talent[]` / `skill[]`，从描述 HTML 里的 `<img>` 解析属性与图标；`scripts/scrape_keys.ps1`、`scripts/scrape_skill_icons.py` 保留但**不再运行**。官网新角色数据也可能延迟（例如 2026-11-24 卡萝 hero id 1089 返回 `Code 20052`）。

---

## 6. 出新角色时的更新流程

1. **人形 / 技能 / 名词 / 技能图标（纯本地）**：进游戏让它下载最新配置表，再运行
   `py -3 scripts/scrape_local.py [--table DIR] [--bundles DIR] [--index FILE] [--no-images] [--rescan]`（默认读取 `D:\Program Files\GF2Exilium\...\Table` 与 `...\AssetBundles_Windows`）。
   脚本会重写 `dat/tdoll_stat.js`、`dat/term_stat.js`，更新 `img/avatar/`、`img/thumbnail/`、`img/ui/`，并把 `BattleSkillDisplayData.f10` 的技能图标以 128×128 导出到 `img/skill/Skill_<id>_*.png`（见 §9.5.1）。
   - 首次运行会扫描全部 bundle 建立 `scripts/.asset_index.json` 缓存（约 2 分钟）；之后直接复用。若新增/改名贴图找不到，加 `--rescan`。
   - 只更新数据不抓图：加 `--no-images`。
2. **位键（纯本地）**：
   - `py -3 scripts/scrape_keys_local.py` — 本地表 → `dat/key_stat.js` + `img/key/*.png`（256×256，见 §9.8）。
   - `py -3 scripts/scrape_key_texts.py` — 位键富文本描述 → `dat/key_desc_stat.js`，并把词条并入 `dat/term_stat.js`。
3. **武器（mcc，默认必跑）**：`powershell -File scripts/scrape_weapon.ps1`（只有武器仍用 mcc）。脚本抓 mcc 列表页 `/weapon` 与全部详情页，更新 `dat/weapon_stat.js`、`img/weapon/`、`img/weapon/thumb/`；跑完确认新角色 `bond.id` 对应的 rank 5 专武存在。
4. **更新拟态图谱**：
   `py -3 scripts/scrape_mimicry.py`（默认读取 `D:\Program Files\GF2Exilium\...\Table`，可传入其它目录）。
   脚本会重写 `dat/mimicry_stat.js`（核心属性、槽位、显像形态、特化形态、生长数据）。
5. **契合度无需更新**（公式与 §4 系数对所有人都适用；除非游戏改系数，才需重测）。
6. 校验：拿任一新人的游戏内 UI 对一遍（名字、标签、头像、技能名/等级/椎体、名词浮窗、技能头元数据、位键图标/属性、拟态）。

---

## 7. 已知陷阱

- PowerShell 5.1 默认按 ANSI 读 `.ps1`，含中文的脚本必须存成 **UTF-8 with BOM**，否则中文乱码、正则失效。
- `ConvertTo-Json` 会把**单元素数组**变成标量、**空数组**变成 `{}`；写数组字段要用 `[object[]]@(...)` 强制。
- mcc 的 `doll` / `weapon` 详情页是 SSR，数据直接在 HTML 里；官网 `exiliumgf` 是 Vue SPA，数据走上面的 API。
- 新版本表的 `GachaData.f30` 是 bytes（ASCII 数字，如 `b"1089"`），`release_dates()` 需要兼容 bytes，否则新角色拿不到上线时间、排不到列表最前。
- `TermStore.collect` 需要兼容 `collect_key_refs()` 传入的**未解析** refs（第二项是候选 id 列表而不是单个 id），否则新角色带位键时会 `%d format` 报错。
- 词条 ref `0:-1,X,1` 的尾 `1` 是参数不是 id；旧解析把它当 id 会落到 `BuffClassData` 组 1（火热攻势I）。已按 §9.4 修复，更新角色后务必检查 `heuristic term refs` 日志，防止再次串词条。
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

技能名右侧展示的弹种、稳态伤害、属性、冷却时间、导染消耗全部来自本地 `BattleSkillData` / `BattleSkillDisplayData`，**不要再从 wiki / 官网页面临时抓**：

| 字段 | 含义 | 本地来源 | 规则 |
|---|---|---|---|
| `ammo` | 子弹类型 | `BattleSkillData.f45`（经 `subtags_for`） | `2/4/8/16/32` = 轻型/中型/重型/近战/霰弹；`1` = 用人形自身枪种弹种；空 = 无。普攻兜底用自身枪种弹种。 |
| `stability` | 稳态伤害 | **优先 `BattleSkillDisplayData.f23`**；否则 `BattleSkillData.f17` | `f23` 是游戏 UI 的稳态伤害字段，必须优先；复合/召唤技能只在这里有值（乐子制造机=2、狂欢时间=5、守护之道=2）。`f23` 为空时才看 `f17` 分号段里的 `2,<n>`（普攻/直接伤害）。**不要用 `f3` 子技能的稳态值兜底**：那可能是条件值（如雷降“若潮湿额外 4 点固定稳态伤害”），f23 为空时游戏不显示基础稳态。 |
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
- 例：破坏者普攻 `{ammo:"霰弹", stability:3, element:"冷凝"}`；狂欢时间 `{stability:5, element:"冷凝", cooldown:3}`；卡萝乐子制造机 `{ammo:"中型弹", stability:2, element:"电导"}`；卡萝弹幕发射 `{ammo:"中型弹", stability:3}`。
- 回归锚点：卡萝「乐子制造机」stability=**2**；破坏者「狂欢时间」=5；春田「守护之道」=2；卡萝「弹幕发射」=3；卡萝「谣言制裁」「重度直播」不应有 stability（f23 为空且 f17 无 `2,<n>`）。

### 9.3.2 心智螺旋键描述（本地富文本）

- `TalentKeyData.f7` = 键名（与 `key_stat.js` 的 `name` 对应），`f6` = 该键对应的战斗技能 id。
- `BattleSkillDisplayData.f1 = f6` 的行：`f3` = 富文本（含 `<color=#...>`），`f4` = 词条引用串。
- `scripts/scrape_key_texts.py` 按键名匹配本地行，生成 `dat/key_desc_stat.js`（`keyId -> {text, refs}`），并把键引用到的词条合并进 `dat/term_stat.js`；技能和键共用同一套 `TERM_STAT`。
- 前端 `spiralKeyCard` 使用 `KEY_DESC_STAT[keyId]` + `renderRich(text, refs)`，与技能描述一致：数值橙色、机制词条蓝色虚线下划线 + 悬浮浮窗。
- 好感键/契合键在 `TalentKeyData` 中没有战斗技能描述，只有属性；面板只显示属性 chip。
- 跃键 2 阶描述来自 `SpTalentKeyData.f5` → `BattleSkillDisplayData.f3/f4`；两阶同名，`scrape_key_texts.py` 用 `talentId` / `spTalentId` 显式映射，**不能按名称匹配**。
- 位键的**数据与图标**同样来自本地，见 §9.8（`scrape_keys_local.py`）。

### 9.4 机制名词（BattleDictionary）

- 表格：`BattleDictionaryData`（类型 1）与 `BattleBuffPerformData`（类型 0）。两者结构都是：
  - `f1` = id，`f2` = 名称语言 id，`f3` = 描述语言 id，`f4` = 子词条引用串。
- 技能/名词描述里的 `{0}`、`{1}` 对应 `f4` 中以 `;` 分隔的第 0、1 条引用。
- 引用串只有两种：
  - `<type>:<id>`（单 id）；
  - `<type>:-1,<familyId>,<flag>`（如 `0:-1,10890400,1`）：`-1` 是哨兵，尾部 `flag` 是参数，**不是 buff id**。
- **不要把 `-1` / 尾部 flag 当候选 id。** 历史 bug：旧 `parse_refs()` 把尾部 `1` 当成 id，解析落到 `BuffClassData` 第 1 组（火热攻势I），导致卡萝「直播状态」的叠层被错误显示成「火热攻势I」，同类问题也发生在破坏者「弹药狂热」等。现在 `parse_refs()` 对 `-1,<familyId>,<flag>` 只取中间的 `familyId`。
- `TermStore.resolve_one()` 的解析顺序：
  1. **精确 id**：类型 0 查 `BattleBuffPerformData`，类型 1 查 `BattleDictionaryData`。
  2. **buff 家族**：id 以 `familyId` 为字符串前缀、且多 1–3 位（`10890400 → 108904002/3/4`、`107007 → 10700701/02`）；按**名称**分组，取成员最多的同名家族，再取最低等级（基础描述）。
  3. **分享组**：`BuffShareLimitData.f5` 的 `id-level` 列表（如 `104700 → 塔瑞兹 104704011`）。
  4. `BattleBuffData.f3` 的隐藏基础名（仅名称兜底）。
  5. **显式 buff 组**：`BuffClassData.f1 → f2` 或 `BattleBuffData.f44`，取组内最低 id 的有名成员。
  6. **空壳 id 相邻**：`X-1` / `X+1`（如 `1088081262 → 拒绝退场 1088081261`）。
- 走 2–6 的启发式解析时，`scrape_local.py` 会输出 `heuristic term refs` 日志（cands → chosen + 同组成员）。**新增角色后必须检查这份日志**，确认选中的名词在句子里通顺；只有无法解释的候选才用 `TERM_REF_OVERRIDES` 兜底（按键为解析后的 cands tuple）。
- 回归锚点（每次更新后抽查）：
  - 卡萝「直播状态」`{1}` → **热度**（`108904002`）
  - 破坏者「弹药狂热」`{4}` → **拒绝退场**（`1088081261`）
  - 米什缇「梦游」→ **补丁模式 / 激斗模式**
  - 春田「跃键·守望相依」→ **塔瑞兹**（`104704011`）
  - 贝丝蒂「闯祸的天才 / 惊吓礼物 / 恣意涂抹」→ **“小可爱”**（`10710701`）
  - 夏安「社交不适应症 / 心理韧性 / 倾注全神」→ **靶心**（`10700701`）
  - 秋桦「焦痕」、妮基塔「畏罪」、黛烟「校音」、乌尔丽德「迷彩」、莫辛纳甘「积极作战」等启发式项也应通顺
  - **非燃烧语境里不应再出现「火热攻势I」**。
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
  - 技能图标：本地 `BattleSkillDisplayData.f10` 贴图（128×128）就是最终图标，见 §9.5.1。
  - 技能头图标 `img/ui/type_s_cd.png` ← `Buff_Cooldown`；`type_s_potential.png` ← `Buff_PotentialAdd`；`type_s_steady.png` ← `Buff_WillSub`（均缩放到 50×50）。
  - 定位/职业小图标 `img/ui/prof_guard|scout|assist|suppress.png` ← `Icon_Professional_Guard/Scout/Assist/Suppress`（缩放到 64×64，用于显像形态需求徽章）
- `scrape_local.py` 首次运行会扫描全部 bundle，建立 `scripts/.asset_index.json`（`贴图名 → bundle 文件名`）；之后复用。新增贴图找不到时加 `--rescan`。
- 只更新数据、不抓图：`py -3 scripts/scrape_local.py --no-images`。

### 9.5.1 技能图标（本地）

- **纯本地**：技能图标 = `BattleSkillDisplayData.f10` 的贴图名，从 `AssetBundles_Windows` 导出。
- `scrape_local.py` 以 **128×128** 导出到 `img/skill/<贴图名>.png`，并把 `skills[].icon` 写成对应相对路径（如 `img/skill/Skill_KuroSSR_Active_1.png`）。
- 普攻：`f10` 为空时回退到枪种通用图标 `Skill_Attack_*`（通用图标本身也由本地导出）。
- 新角色/新贴图先跑 `scrape_local.py --rescan` 更新 `.asset_index.json`。
- 官网版 `scrape_skill_icons.py`（`NAME_skill_NO.png`）**已停用**；旧的 `NAME_skill_NO.png` 已从 `img/skill/` 删除，只保留本地 `Skill_*.png` + 8 个通用 `Skill_Attack_*`。
- 示例（破坏者）：普攻「撕咬」→ `Skill_Attack_Shotgun.png`；毁灭指令 → `Skill_DestroyerSSR_Active_1.png`；末日弹幕 → `Skill_DestroyerSSR_Active_2.png`；狂欢时间 → `Skill_DestroyerSSR_Active_3.png`；弹药狂热 → `Skill_DestroyerSSR_Passive_1.png`。

### 9.5.2 图标本地化现状

- 技能图标已 100% 本地（`Skill_<id>_Active/Passive_*.png`），`tdoll_stat.js` 不再引用任何官网图标；旧的官网图标文件已删除。
- 之前“官网 API 约 20 个图标不一致”的问题已消失（统一使用本地纹理）；普通攻击通用图标仍保留 `Skill_Attack_*`。
- **技能头图标**：`stability` / `cooldown` / `cost` 已使用本地 `Buff_WillSub` / `Buff_Cooldown` / `Buff_PotentialAdd`。
- **仍待本地化**：`type_a_*`（弹种）与 `type_e_*`（属性）目前在本地纹理索引中**没有找到直接同名/等价资源**，可能内嵌在 UI SpriteAtlas 或 TMP SpriteAsset 中；先保留现有图标，不做替换，后续再查。

### 9.6 属性组现状

- `基础属性`/`心智增域`/`心智螺旋-增效点位`/`心智螺旋-额外进阶收益` 目前**优先沿用旧 `tdoll_stat.js` 中已有的值**，避免破坏现有计算。
- 新角色若没有旧值，脚本用 `GunPresetGroupPropertyByGroupIdData`（组 = `枪id×100`）+ `PropertyData` 最后一级（60 级）的 `f2/f3/f5` 作为「基础属性」兜底；暴击/暴伤暂按 20%/120%，稳态取 `f8`。
- 心智增域 / 心智螺旋的完整本地拆分仍待继续逆向（`SquadTalentTreeData`、`SquadTalentGunData`、`TalentKeyData` 等）。

### 9.7 前端展示约定

- 人形列表按**上线时间倒序**（最新在前）：`scrape_local.py` 的 `release_dates()` 从本地 `GachaData` 取每个角色最早的角色卡池开始时间（`f4=3`，`f30`=角色 id，`f7`=开始时间戳）；没有卡池记录的早期人形按 `LEGACY_DOLL_ORDER` 的 wiki 顺序兜底。新角色只要游戏里开了角色卡池，重新生成后会自动排在最前。
- 人形筛选新增「跃键」：`全部 / 1阶 / 2阶`。1阶 = 拥有 1 阶跃键（51 人），2阶 = 拥有 2 阶跃键（10 人）；数据取 `KEY_STAT.byDoll[id].leaps[].stage`。
- 人形详情页的「技能」是一个 `panel`，每个技能是其中的子 panel（`.skill-card`）；「技能」标题沿用原来的 17px；技能图标底板为深灰 `#2c2c30`。
- 每个技能有 `Lv.N ( X椎 )` 按钮，点击可手动切换该等级的完整描述（`descs`）；普攻图标缺失时按枪种回退到 `Skill_Attack_*`。
- 技能名右侧显示元数据 chip（弹种 / 稳态伤害 / 属性 / 冷却时间 / 导染消耗），来自 `skills[].meta`；下方 `.skill-tags` 只显示技能分类 `tags`，不再重复弹种。
- 人形详情新增「心智螺旋」panel：按好感键 / 共键 / 专属固键 / 跃键分组，展示 `KEY_STAT.byDoll[id]` 的图标、名称、属性 chip 和描述；固键双列、移动端单列；跃键单列展示**所有阶段**（1阶/2阶），卡片名称旁显示 `1阶`/`2阶` 徽章。描述优先取 `KEY_DESC_STAT`，用 `renderRich` 渲染（数值橙色、机制词条浮窗），与技能描述一致。
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
- 人形详情通过 `signatureWeapon(d.id)` 自动装备专武：在 `WEAPON_STAT` 中找 `rank == 5 && bond.id == d.id` 的武器；新角色未抓专武时武器磁贴只显示空槽。因此「更新角色」默认必须跑 `scripts/scrape_weapon.ps1` 并核对 `bond.id`。

### 9.8 心智螺旋位键（本地）

脚本：`scripts/scrape_keys_local.py`（数据 + 图标）、`scripts/scrape_key_texts.py`（富文本描述）。

| 内容 | 本地来源 |
|---|---|
| 键类型 | `TalentKeyData.f2`：`1` 固键 / `2` 共键 / `3` 跃键 / `4` 契合键（好感键） |
| 键名 | `TalentKeyData.f7`（语言 id）；2 阶跃键沿用 1 阶名称 |
| 归属人形 | `f9`（固/跃）或 `f15`（共/契合）= 枪 id |
| 描述 | 1 阶 `TalentKeyData.f6`；2 阶 `SpTalentKeyData.f5` → `BattleSkillDisplayData.f3/f4`（`scrape_key_texts.py`） |
| 图标 | `ItemData.f8` = 贴图名；从 bundle 导出 **256×256** 到 `img/key/<eng>_*.png` |
| 属性 | `f5` → `PropertyData`：`9` 暴击 / `10` 暴击伤害 / `29` 攻击 / `30` 生命 / `32` 防御；数值为 ×10 的百分比（`50` → `5%`） |

- 命名与旧版一致：`<eng>_love` / `<eng>_common` / `<eng>_static_N` / `<eng>_leap`；`eng` = 角色 id 去掉 `SSR`/`SR` 后小写。
- **跃键多阶**：`TalentKeyData` 的 `f2=3` 是 1 阶；`SpTalentKeyData` 以 `f2=1阶键 id`、`f5=2阶描述显示行` 表示 2 阶（当前共 10 人：琼玖、玛绮朵、乌尔丽德、索米、莱妮、托洛洛、桑朵莱希、黛烟、绛雨、妮基塔）。
  - `key_stat.js` 的 `leaps` 数组保存全部阶段：`{id,name,icon,stage,talentId[,spTalentId],text}`；`stage` 为 1/2，2 阶 id 为 `<eng>_leap_2`，图标复用 1 阶。
  - `leap` 字段保留为**最高阶**对象（兼容旧用法）；前端/筛选以 `leaps` 为准。
  - `key_desc_stat.js` 同时写 `jiangyu_leap`（1 阶）和 `jiangyu_leap_2`（2 阶）；两阶名称相同，**不能只按名称匹配**，`scrape_key_texts.py` 用 `talentId` / `spTalentId` 显式映射。
  - 前端「心智螺旋」跃键组按 stage 升序单列展示；筛选「跃键」1阶=有 1 阶（51 人），2阶=有 2 阶（10 人）。
- 契合键三个属性值统一写 **4.5%**（最大值），属性名取自 `PropertyData` 字段。
- 变体人形本地没有独立契合键行（`ColphneDoppelgaengerSSR`、`NemesisGnosisSSR`）：脚本用 `VARIANT_LOVE` 复用本体（`ColphneSR` / `NemesisSR`）的名称/属性，但图标用自己的 `<sid>_love` 贴图。
- 通用共键 `generic_crit` 是站内固定项，硬编码在脚本里。
- 旧 `scrape_keys.ps1`（官网 API）已停用。

---

## 10. 预下载（PreDownloadRes）拆包

版本更新前的「预下载」**只有资源、没有配置表**：`Table/` 要等正式版本更新、登录器下载新 `StcTable` 后才会出现新角色数据；官网 `hero_detail` 也会等到角色上线才有。

- 目录：`...\LocalCache\Data\AssetBundles_Windows_PreDownloadRes`
  - `<md5>.bundle`：新增 bundle，直接用 §9.5 的 key 解密即可。
  - `<md5>.bundle_diff`：对现有 bundle 的 **HDIFFSF20（zstd）** 补丁；文件名去掉 `_diff` 就是目标 bundle。
  - `*.gf`：zip，内含 CriWare 音频（`.acb`），不是贴图。
- 打补丁：调用游戏自带的 `...\GF2_Exilium_Data\Plugins\x86_64\hpatchz.dll` 唯一导出 `hpatch(old, diff, out, NULL)`（ctypes，`restype=c_ubyte`）；返回 1 并打印 `patch ok!` 即成功。
- 新角色贴图通常加进**已有的共享 bundle**（不是新建 bundle）：2026-11 卡萝的头像在 `9d5e9b62...bundle`、技能图标在 `9405364c...bundle`，两者在预下载里都是 `.bundle_diff`。定位方法：在 `.asset_index.json` 里找同类贴图（其他 `Avatar_Whole_*` / `Skill_*`）所在 bundle，再看该 bundle 有没有预下载补丁。
- 打完补丁后用同一套 `decrypt_bundle` + UnityPy 读取；把新贴图名 → bundle 名补进 `.asset_index.json`，正式更新后不加 `--rescan` 也能直接提取。
- **技能/属性等文本可从 mcc 临时补**：mcc.wiki 详情页是 Nuxt SSR，HTML 只渲染当前等级 + 词条解释；但它的 `/_nuxt/*.js` chunk 内嵌了该角色的完整对象（`DollProperty` / `DollSkill` / `DollKeys` / `Pools`），包含每级 `Desc`、椎体 `UpgradeDesc`、`ElementTypeId` / `BulletTypeId` / `CDTime` / `WillDamage`、图标名和位键描述。用 `new Function("return (" + 对象字面量 + ")")()` 即可取出（见 2026-11-24 卡萝临时数据）。
- 2026-11-24 实例：新角色「卡萝」内部 id = `KuroSSR`（火力 / 突击步枪 / 电导）。预下载已有模型、武器、技能图标、`Avatar_Whole/Half_KuroSSR`，但 `GunData` 和官网 API 均无她的数据。当时先用 mcc 的 JS 数据临时生成技能（全等级 + 椎体 + 12 个新词条，词条 id 用 990000001+ 临时编号）、属性和图标；`tdoll_stat.js` / `term_stat.js` 均会在本地表更新后的下一次 `scrape_local.py` 重写，临时数据自动被本地版覆盖。
