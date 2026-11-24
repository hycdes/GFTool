# AGENTS — GFTool 会话交接

## 触发词：更新角色

当用户说「更新角色」时，按 `gf2/skill/SKILL_gamedata.md` §0 执行：以**本地客户端配置表 / AssetBundles** 为准重新生成（`scrape_local.py --rescan` → `scrape_keys_local.py` → `scrape_key_texts.py` → `scrape_mimicry.py`）。技能、属性、位键、技能图标都用本地数据，不要用 mcc / 官网 API 替代。**武器默认必跑** `scrape_weapon.ps1`（源 mcc），并确认新角色专武（`WEAPON_STAT` 中 `rank==5 && bond.id==sid`）与图片存在。跑完必须检查 `heuristic term refs` 日志与 §9.4 回归锚点，防止词条串错（如「直播状态」→「热度」而不是「火热攻势I」）。

## 触发词：继续研究伤害计算

当用户说「继续研究伤害计算」时：

1. 先读 `gf2/skill/SKILL_damage_research.md`，按其中进度和约束继续。
2. 先确认 `GF2_Exilium.exe`、`NEPDaemon.exe`、`PCLauncher.exe` 都没有运行；有运行则先让用户退出，不要读取游戏目录。
3. 只分析复制到 `D:\GF2_Unpack` 的副本；禁止删除/移动/覆盖 `D:\Program Files\GF2Exilium` 下的文件。
4. 不要注入/挂钩游戏进程；需要运行时 dump 时必须先征得用户明确同意。
5. 继续前先向用户确认：游戏是否已重装完成、是否已完全退出。
