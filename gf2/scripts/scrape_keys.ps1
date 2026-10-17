$ErrorActionPreference = "Stop"
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = "E:\AIGC\GF2Tools"
$imgDir = Join-Path $root "img\key"
New-Item -ItemType Directory -Force -Path $imgDir | Out-Null

$wc = New-Object System.Net.WebClient
$wc.Encoding = [System.Text.Encoding]::UTF8
$wc.Headers.Add("User-Agent", "Mozilla/5.0")

function Strip($html) {
    $s = $html -replace '<br\s*/?>', "`n"
    $s = $s -replace '<[^>]+>', ' '
    $s = $s -replace '&nbsp;', ' '
    $s = $s -replace '&amp;', '&'
    $s = $s -replace '\s+', ' '
    return $s.Trim()
}
function Api($path, $body) {
    for ($i = 0; $i -lt 3; $i++) {
        try { return (Invoke-WebRequest -Uri "https://gf2-bbs-api.exiliumgf.com$path" -Method Post -Body $body -ContentType "application/json" -UseBasicParsing -TimeoutSec 40).Content }
        catch { Start-Sleep 2 }
    }
    throw "api fail $path"
}
function GetIcon($url, $name) {
    if (-not $url) { return "" }
    $p = Join-Path $imgDir $name
    if (Test-Path -LiteralPath $p) { return "img/key/$name" }
    $base = $url
    if ($base -match 'gf2\.mcc\.wiki/image/key/') { $base = $base -replace '/image/key/', '/static/thumbnail/item/' }
    $cands = @($base)
    if ($base -match '_love\.png$') { $cands += ($base -replace '_love\.png$', '.png') }
    foreach ($u in $cands) { try { $wc.DownloadFile($u, $p); break } catch { } }
    return "img/key/$name"
}

# name -> dollId
$tdRaw = Get-Content "$root\dat\tdoll_stat.js" -Raw -Encoding UTF8
$tdJson = $tdRaw.Substring($tdRaw.IndexOf('{', $tdRaw.IndexOf('window.TDOLL_STAT'))).TrimEnd(";`r`n ".ToCharArray())
$tdo = $tdJson | ConvertFrom-Json
$nameToId = @{}
foreach ($p in $tdo.PSObject.Properties) { $nameToId[$p.Value.name] = $p.Name }
Write-Host "dolls=$($nameToId.Count)"

$ids = @()
foreach ($id in 1001..1090) {
    $r = (Api "/wiki/hero_detail" "{`"id`":$id}")
    if (($r | ConvertFrom-Json).Code -eq 0) { $ids += $id }
}
Write-Host "heroes=$($ids.Count)"

$byDoll = [ordered]@{}
$missing = @()
foreach ($id in $ids) {
    $o = (Api "/wiki/hero_detail" "{`"id`":$id}") | ConvertFrom-Json
    $name = $o.data.info.name
    $did = $nameToId[$name]
    if (-not $did) { $missing += $name; continue }
    $entry = [ordered]@{ affection = $null; shared = $null; fixed = [object[]]@(); leap = $null }
    $eng = ($did -replace 'SSR$', '' -replace 'SR$', '').ToLower()
    $fidx = 0
    foreach ($t in $o.data.info.talent) {
        $desc = $t.desc
        if (-not $desc) { continue }
        $keyName = Strip ([regex]::Match($desc, '<h2>([\s\S]*?)</h2>').Groups[1].Value)
        if (-not $keyName) { continue }
        $iconTag = [regex]::Match($desc, '<img[^>]*>').Value
        $icon = [regex]::Match($iconTag, 'src="([^"]+)"').Groups[1].Value
        $attrs = [object[]]@(); $rawTexts = @()
        foreach ($m in [regex]::Matches($desc, '<img[^>]*(?:width|height)="20"[^>]*>\s*(?:</sub>)?\s*([^<]*)')) {
            $at = Strip $m.Groups[1].Value
            $mm = [regex]::Match($at, '^(.+?)([\d.]+)%$')
            if ($mm.Success) {
                $an = ($mm.Groups[1].Value -replace '加成$', '')
                $attrs += [ordered]@{ name = $an; value = [double]$mm.Groups[2].Value }
                $rawTexts += $at
            }
        }
        $full = Strip $desc
        $eff = $full.Replace($keyName, '').Trim()
        foreach ($rt in $rawTexts) { $eff = $eff.Replace($rt, '') }
        $eff = ($eff -replace '\s+', ' ').Trim()
        $kind = ($keyName -split '·')[0]
        $stem = ""
        switch ($kind) {
            '契合键' { $stem = "${eng}_love"; foreach ($a in $attrs) { $a.value = 4.5 } }
            '固键' { $fidx++; $stem = "${eng}_static_$fidx" }
            '共键' { $stem = "${eng}_common" }
            '跃键' { $stem = "${eng}_leap" }
        }
        if (-not $stem) { continue }
        $iconRel = GetIcon $icon "$stem.png"
        switch ($kind) {
            '契合键' { $entry.affection = [ordered]@{ id = $stem; name = $keyName; icon = $iconRel; attrs = $attrs } }
            '固键' { $entry.fixed += [ordered]@{ id = $stem; name = $keyName; icon = $iconRel; text = $eff } }
            '共键' { $entry.shared = [ordered]@{ id = $stem; name = $keyName; icon = $iconRel; attrs = $attrs; text = $eff } }
            '跃键' { $entry.leap = [ordered]@{ id = $stem; name = $keyName; icon = $iconRel; text = $eff } }
        }
    }
    $byDoll[$did] = $entry
    Write-Host "[$($byDoll.Count)] $did $name aff=$([bool]$entry.affection) fixed=$($entry.fixed.Count) shared=$([bool]$entry.shared) leap=$([bool]$entry.leap)"
}
if ($missing.Count) { Write-Host ("MISSING name map: " + ($missing -join ',')) }

$out = [ordered]@{
    byDoll = $byDoll
    genericShared = [ordered]@{
        id = "generic_crit"
        name = "共键·通用暴击"
        icon = ""
        attrs = [object[]]@([ordered]@{ name = "攻击"; value = 3 }, [ordered]@{ name = "暴击"; value = 3 })
        text = "攻击提高3%，暴击提高3%。"
    }
}
$json = $out | ConvertTo-Json -Depth 12
$head = "// GF2 Tools mind-spiral key data`r`n" +
        "// byDoll[dollId] = { affection{id,name,icon,attrs[]}, shared{id,name,icon,attrs[],text}, fixed[{id,name,icon,text}], leap{id,name,icon,text}|null }`r`n" +
        "// attr.name normalized to 攻击/生命/防御/暴击/暴击伤害 (value is percent)`r`n" +
        "window.KEY_STAT = " + $json + ";`r`n"
[IO.File]::WriteAllText("$root\dat\key_stat.js", $head, [System.Text.Encoding]::UTF8)
Write-Host "Written dat\key_stat.js dolls=$($byDoll.Count) icons=$((Get-ChildItem $imgDir -File).Count)"
