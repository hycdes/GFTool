$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$base = "https://gf2.mcc.wiki"
$root = "E:\AIGC\GF2Tools"
$avatarDir = Join-Path $root "img\avatar"
$thumbDir  = Join-Path $root "img\thumbnail"
$skillDir  = Join-Path $root "img\skill"
New-Item -ItemType Directory -Force -Path $avatarDir, $thumbDir, $skillDir | Out-Null

$wc = New-Object System.Net.WebClient
$wc.Encoding = [System.Text.Encoding]::UTF8
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$listHtml = $wc.DownloadString("$base/doll")
$ids = [regex]::Matches($listHtml, 'href="/doll/([A-Za-z0-9_\-]+)"') |
    ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
Write-Host "Found $($ids.Count) dolls"

# ---- regexes (ASCII only) ----
$groupLabelRx = '<div class="font-bold">([^<]*)</div><div class="flex flex-row gap-1 grid'
$propRx       = '<div class="tag property-label"><div>([^<]*)</div><div>([^<]*)</div></div>'
$skillBlockRx = '<div class="bg-container p-2 flex flex-col gap-4"><div class="h-16 flex flex-row gap-2">'
$tagItemRx    = '<div class="tag">([^<]*)</div>'
$costItemRx   = '<div class="tag font-bold">([^<]*)</div>'
$levelItemRx  = '<div class="[^"]*">([^<]*)</div>'

function Clean-Desc([string]$s) {
    if ([string]::IsNullOrEmpty($s)) { return "" }
    $s = $s -replace '<!---->', ''
    $s = $s -replace '<br\s*/?>', "`n"
    $s = $s -replace '</br>', "`n"
    return $s.Trim()
}
function Get-Tags([string]$g) {
    if ([string]::IsNullOrEmpty($g)) { return @() }
    return [regex]::Matches($g, $tagItemRx) | ForEach-Object { $_.Groups[1].Value }
}

$downloadedSkills = @{}
$all = [ordered]@{}
$count = 0
foreach ($id in $ids) {
    $count++
    $html = $wc.DownloadString("$base/doll/$id")

    $nameM = [regex]::Match($html, 'text-4xl font-bold">([^<]*)</div>')
    $name = if ($nameM.Success) { $nameM.Groups[1].Value.Trim() } else { $id }

    $tagsM = [regex]::Match($html, 'flex flex-row gap-2 mb-4">((?:<div class="tag">[^<]*</div>)+)</div>')
    $tags = [object[]]@()
    if ($tagsM.Success) {
        $tags = [object[]]@([regex]::Matches($tagsM.Groups[1].Value, $tagItemRx) | ForEach-Object { $_.Groups[1].Value })
    }

    $introM = [regex]::Match($html, 'mb-4">(?:<div class="tag">[^<]*</div>)+</div><div>([\s\S]*?)</div>\s*<div class="font-bold">')
    $intro = if ($introM.Success) { $introM.Groups[1].Value.Trim() } else { "" }

    # attribute groups
    $labels = [regex]::Matches($html, $groupLabelRx)
    $groups = [ordered]@{}
    for ($i = 0; $i -lt $labels.Count; $i++) {
        $label = $labels[$i].Groups[1].Value.Trim()
        $segStart = $labels[$i].Index + $labels[$i].Length
        $segEnd = $html.Length
        if ($i + 1 -lt $labels.Count) { $segEnd = $labels[$i + 1].Index }
        $bgIdx = $html.IndexOf('<div class="bg-container', $segStart)
        if ($bgIdx -ge 0 -and $bgIdx -lt $segEnd) { $segEnd = $bgIdx }
        $seg = $html.Substring($segStart, $segEnd - $segStart)
        $pairs = [ordered]@{}
        foreach ($pm in [regex]::Matches($seg, $propRx)) {
            $k = $pm.Groups[1].Value.Trim()
            $v = $pm.Groups[2].Value.Trim()
            if ($k -ne "") { $pairs[$k] = $v }
        }
        if ($pairs.Count -gt 0) { $groups[$label] = $pairs }
    }

    # skills
    $blocks = [regex]::Matches($html, $skillBlockRx)
    $skills = [object[]]@()
    for ($b = 0; $b -lt $blocks.Count; $b++) {
        $bStart = $blocks[$b].Index
        $bEnd = if ($b + 1 -lt $blocks.Count) { $blocks[$b + 1].Index } else { $html.Length }
        # last block: stop before the fixed-key panel (same gap-4 class, no h-16 header)
        if ($b + 1 -ge $blocks.Count) {
            $tail = $html.IndexOf('<div class="bg-container p-2 flex flex-col gap-4"><!--[-->', $bStart)
            if ($tail -ge 0 -and $tail -lt $bEnd) { $bEnd = $tail }
        }
        $block = $html.Substring($bStart, $bEnd - $bStart)

        $nameM2 = [regex]::Match($block, 'text-lg font-bold">([^<]*)</div>')
        $sName = if ($nameM2.Success) { $nameM2.Groups[1].Value.Trim() } else { "" }

        $srcM = [regex]::Match($block, 'bg-icon aspect-square"><img class="object-cover" src="([^"]+)"')
        $iconRel = ""
        if ($srcM.Success) {
            $file = ($srcM.Groups[1].Value -split '/')[-1]
            $iconRel = "img/skill/$file"
            if (-not $downloadedSkills.ContainsKey($file)) {
                $dst = Join-Path $skillDir $file
                if (-not (Test-Path -LiteralPath $dst)) {
                    try { $wc.DownloadFile("$base/static/thumbnail/skill/$file", $dst); $downloadedSkills[$file] = $true }
                    catch { Write-Host "  ! skill icon failed: $file" }
                } else { $downloadedSkills[$file] = $true }
            }
        }

        $tgM = [regex]::Match($block, 'w-full flex flex-row justify-between"><div class="flex flex-row gap-1">([\s\S]*?)</div><div class="flex flex-row gap-1">([\s\S]*?)</div></div>')
        $sTags = [object[]]@(); $sSub = [object[]]@()
        if ($tgM.Success) { $sTags = [object[]]@(Get-Tags $tgM.Groups[1].Value); $sSub = [object[]]@(Get-Tags $tgM.Groups[2].Value) }

        $lvM = [regex]::Match($block, '<div class="flex flex-row gap-4"><!--\[-->([\s\S]*?)<!--\]--></div>')
        $levels = [object[]]@()
        if ($lvM.Success) {
            $levels = [object[]]@([regex]::Matches($lvM.Groups[1].Value, $levelItemRx) | ForEach-Object { $_.Groups[1].Value.Trim() })
        }

        $descM = [regex]::Match($block, '<div class="flex flex-col p-2 gap-2"><div>((?:(?!</div>)[\s\S])*?)</div>')
        $desc = if ($descM.Success) { Clean-Desc $descM.Groups[1].Value } else { "" }

        $costs = [object[]]@()
        $costM = [regex]::Match($block, '<div class="flex flex-row gap-2">((?:(?!</div>)[\s\S])*?)</div>')
        if ($costM.Success) { $costs = [object[]]@([regex]::Matches($costM.Groups[1].Value, $costItemRx) | ForEach-Object { $_.Groups[1].Value.Trim() }) }

        $vertebrae = [object[]]@()
        foreach ($vm in [regex]::Matches($block, '<div class="tag font-bold shrink-0">([^<]*)</div><div>((?:(?!</div>)[\s\S])*?)</div>')) {
            $vertebrae += [ordered]@{ label = $vm.Groups[1].Value.Trim(); text = (Clean-Desc $vm.Groups[2].Value) }
        }

        $skills += [ordered]@{
            name      = $sName
            icon      = $iconRel
            tags      = $sTags
            subTags   = $sSub
            levels    = $levels
            desc      = $desc
            costs     = $costs
            vertebrae = $vertebrae
        }
    }

    # avatar + thumbnail
    $avatarPath = Join-Path $avatarDir "$id.png"
    $thumbPath  = Join-Path $thumbDir  "$id.png"
    try { if (-not (Test-Path -LiteralPath $avatarPath)) { $wc.DownloadFile("$base/static/image/doll/Avatar_Whole_$id.png", $avatarPath) } } catch { Write-Host "  ! avatar failed for $id" }
    try { if (-not (Test-Path -LiteralPath $thumbPath)) { $wc.DownloadFile("$base/static/thumbnail/doll/Avatar_Half_$id.png", $thumbPath) } } catch { Write-Host "  ! thumbnail failed for $id" }

    $rank = if ($id.EndsWith("SSR")) { 5 } elseif ($id.EndsWith("SR")) { 4 } else { 3 }

    $all[$id] = [ordered]@{
        id         = $id
        name       = $name
        rank       = $rank
        tags       = $tags
        intro      = $intro
        avatar     = "img/avatar/$id.png"
        thumbnail  = "img/thumbnail/$id.png"
        attrGroups = $groups
        skills     = $skills
    }
    Write-Host "[$count/$($ids.Count)] OK $id $name skills=$($skills.Count)"
}

$json = $all | ConvertTo-Json -Depth 12
$out = "// GF2 Tools T-Doll data`r`n" +
       "// Fields: id, name, rank (5=Elite/SSR, 4=Standard/SR), tags, intro, avatar, thumbnail, attrGroups, skills`r`n" +
       "// skill: { name, icon, tags, subTags, levels, desc, costs, vertebrae:[{label,text}] }`r`n" +
       "window.TDOLL_STAT = " + $json + ";`r`n"
[IO.File]::WriteAllText("$root\dat\tdoll_stat.js", $out, [System.Text.Encoding]::UTF8)
Write-Host "Written dat\tdoll_stat.js with $($all.Count) dolls, $($downloadedSkills.Count) unique skill icons"
