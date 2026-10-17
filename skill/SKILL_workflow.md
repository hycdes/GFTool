# SKILL_workflow — 仓库操作约定

## 提交到 git（用户说「帮我全提交到git」/「全提交」）

固定流程，**commit 与 push 分开**：

1. 先检查 `git status` / `git diff` / `git log`，确认没有临时文件、密钥等不该提交的内容。
2. `git add -A`，然后**只执行 commit**（提交到本地仓库）。
3. 向用户汇报 commit hash、变更文件数、`+/-` 行数，并确认工作区是否干净。
4. 明确询问：「要现在 push 到 origin/master 吗？」
5. 只有用户明确同意后才执行 `git push`。

不要默认把 commit 和 push 合成一步，也不要未经确认直接 push。

## 仓库信息

- 远程：`origin` = `github.com/hycdes/GFTool.git`，主分支 `master`
- 结构：`/` 首页（hycdes.com）、`/gf1/` 少女前线工具、`/gf2/` 少女前线2：追放工具
- 仓库体量较大（约 360MB），首次/大量推送会较慢
- Windows 下 git 会提示 `LF will be replaced by CRLF`，属正常现象
- 若 SSH 报 host key 变更，先核对 GitHub 公布的指纹；也可改用 HTTPS 推送，不要盲目删除 `known_hosts`
