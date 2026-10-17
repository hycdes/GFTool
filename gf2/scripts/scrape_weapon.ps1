$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$base = "https://gf2.mcc.wiki"
$root = "E:\AIGC\GF2Tools"
$imgDir  = Join-Path $root "img\weapon"
$thumDir = Join-Path $root "img\weapon\thumb"
New-Item -ItemType Directory -Force -Path $imgDir, $thumDir | Out-Null

$wc = New-Object System.Net.WebClient
$wc.Encoding = [System.Text.Encoding]::UTF8
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)")

$listHtml = $wc.DownloadString("$base/weapon")
$ids = [regex]::Matches($listHtml, 'href="/weapon/([A-Za-z0-9_\-]+)"') |
    ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
Write-Host "Found $($ids.Count) weapons"

function Clean-Text([string]$s) {
    if ([string]::IsNullOrEmpty($s)) { return "" }
    $s = $s -replace '<!---->', ''
    $s = $s -replace '<br\s*/?>', "`n"
    $s = $s -replace '</br>', "`n"
    return $s.Trim()
}

$all = [ordered]@{}
$count = 0
$bytes = 0
foreach ($id in $ids) {
    $count++
    try { $html = $wc.DownloadString("$base/weapon/$id") } catch { Write-Host "[$count] FAIL $id"; continue }

    $nameM = [regex]::Match($html, 'text-4xl font-bold">([^<]*)</div>')
    $name = if ($nameM.Success) { $nameM.Groups[1].Value.Trim() } else { $id }

    $tagsM = [regex]::Match($html, 'flex flex-row gap-2 mb-4">((?:<div class="tag">[^<]*</div>)+)</div>')
    $tags = [object[]]@()
    if ($tagsM.Success) {
        $tags = [object[]]@([regex]::Matches($tagsM.Groups[1].Value, '<div class="tag">([^<]*)</div>') | ForEach-Object { $_.Groups[1].Value })
    }

    $introM = [regex]::Match($html, 'mb-4">(?:<div class="tag">[^<]*</div>)+</div><div>([\s\S]*?)</div><div class="font-bold">')
    $intro = if ($introM.Success) { Clean-Text $introM.Groups[1].Value } else { "" }

    $stats = [ordered]@{}
    foreach ($pm in [regex]::Matches($html, '<div class="tag property-label"><div>([^<]*)</div><div>([^<]*)</div></div>')) {
        $stats[$pm.Groups[1].Value.Trim()] = $pm.Groups[2].Value.Trim()
    }

    $srcM = [regex]::Match($html, 'aspect-2/1"><img class="object-cover" src="([^"]+)"')
    $file = if ($srcM.Success) { ($srcM.Groups[1].Value -split '/')[-1] } else { "$id`_1024.png" }
    $imageRel = "img/weapon/$file"
    $thumbRel = "img/weapon/thumb/$file"
    $imgPath = Join-Path $imgDir $file
    $thumPath = Join-Path $thumDir $file
    try { if (-not (Test-Path -LiteralPath $imgPath)) { $wc.DownloadFile("$base/static/image/weapon/$file", $imgPath) } } catch { Write-Host "  ! img $id" }
    try { if (-not (Test-Path -LiteralPath $thumPath)) { $wc.DownloadFile("$base/static/thumbnail/weapon/$file", $thumPath) } } catch { Write-Host "  ! thumb $id" }

    # 烙印增效 -> bond doll + text
    $bondId = ""; $bondName = ""; $bondText = ""
    $bM = [regex]::Match($html, '<a href="/doll/([A-Za-z0-9_\-]+)"[^>]*>([^<]*)</a></div><div class="bg-container p-2">((?:(?!</div>)[\s\S])*?)</div>')
    if ($bM.Success) { $bondId = $bM.Groups[1].Value; $bondName = $bM.Groups[2].Value; $bondText = Clean-Text $bM.Groups[3].Value }

    # 特质 -> label without nested tag + plain container
    $traitLabel = ""; $traitText = ""
    $tM = [regex]::Match($html, '<div class="font-bold">([^<]*)</div><div class="bg-container p-2">((?:(?!</div>)[\s\S])*?)</div>')
    if ($tM.Success) { $traitLabel = $tM.Groups[1].Value.Trim(); $traitText = Clean-Text $tM.Groups[2].Value }

    # 特效 -> named effect list
    $effects = [object[]]@()
    foreach ($em in [regex]::Matches($html, '<div class="bg-container p-2 flex flex-row items-start gap-4"><div class="tag font-bold shrink-0">([^<]*)</div><div>((?:(?!</div>)[\s\S])*?)</div></div>')) {
        $effects += [ordered]@{ name = $em.Groups[1].Value.Trim(); text = (Clean-Text $em.Groups[2].Value) }
    }

    # 卡池 -> pool name + time
    $pools = [object[]]@()
    foreach ($pm2 in [regex]::Matches($html, '<div class="flex flex-row text-sm gap-2"><div class="w-24 shrink-0">([^<]*)</div><div>([^<]*)</div></div>')) {
        $pools += [ordered]@{ name = $pm2.Groups[1].Value.Trim(); time = $pm2.Groups[2].Value.Trim() }
    }

    $suffix = ($id -split '_')[-1]
    $rank = if ($suffix -eq "5") { 5 } elseif ($suffix -eq "4") { 4 } else { 3 }

    $all[$id] = [ordered]@{
        id        = $id
        name      = $name
        rank      = $rank
        tags      = $tags
        intro     = $intro
        image     = $imageRel
        thumbnail = $thumbRel
        stats     = $stats
        bond      = [ordered]@{ id = $bondId; name = $bondName; text = $bondText }
        trait     = [ordered]@{ label = $traitLabel; text = $traitText }
        effects   = $effects
        pools     = $pools
    }
    Write-Host "[$count/$($ids.Count)] OK $id $name rank=$rank stats=$($stats.Count) fx=$($effects.Count)"
}

$json = $all | ConvertTo-Json -Depth 10
$out = "// GF2 Tools weapon data`r`n" +
       "// Fields: id, name, rank (5/4/3), tags, intro, image, thumbnail, stats, bond{id,name,text}, trait{label,text}, effects[], pools[]`r`n" +
       "window.WEAPON_STAT = " + $json + ";`r`n"
[IO.File]::WriteAllText("$root\dat\weapon_stat.js", $out, [System.Text.Encoding]::UTF8)
Write-Host "Written dat\weapon_stat.js with $($all.Count) weapons"
