# -*- coding: utf-8 -*-
"""Generate dat/mimicry_stat.js from the local GF2 config tables.

Usage:
    py -3 scripts/scrape_mimicry.py [table_dir]

Default table_dir: D:/Program Files/GF2Exilium/GF2 Game/GF2_Exilium_Data/LocalCache/Data/Table

Sources:
    CoreData.bytes          - per-doll mimic core: role, 6 slot types, base atk/hp/def, 6 form ids
    LevelUpData.bytes       - core level coefficient (x1000)
    MasterEntryData.bytes   - per-core 6 manifestation forms: stage, effect, factor requirements
    FeaturesEntryData.bytes - specialization entries (specialized forms) + growth data variants
"""
import json
import os
import re
import struct
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DEFAULT_TABLE = r'D:\Program Files\GF2Exilium\GF2 Game\GF2_Exilium_Data\LocalCache\Data\Table'

ROLES = {
    1: {"name": "防卫", "color": "#3b82f6"},
    2: {"name": "尖兵", "color": "#a855f7"},
    3: {"name": "支援", "color": "#22c55e"},
    4: {"name": "火力", "color": "#ef4444"},
}
STAGE_LEVELS = [0, 10, 20, 30, 45, 60]


def read_varint(b, i):
    shift = 0
    result = 0
    while True:
        if i >= len(b):
            raise ValueError("eof")
        x = b[i]
        i += 1
        result |= (x & 0x7F) << shift
        if not (x & 0x80):
            break
        shift += 7
    return result, i


def parse(b):
    out = []
    i = 0
    while i < len(b):
        key, i = read_varint(b, i)
        f = key >> 3
        wt = key & 7
        if f == 0:
            raise ValueError("bad field")
        if wt == 0:
            v, i = read_varint(b, i)
            out.append((f, wt, v))
        elif wt == 2:
            ln, i = read_varint(b, i)
            if i + ln > len(b):
                raise ValueError("bad len")
            out.append((f, wt, b[i:i + ln]))
            i += ln
        elif wt == 5:
            out.append((f, wt, struct.unpack('<I', b[i:i + 4])[0]))
            i += 4
        elif wt == 1:
            out.append((f, wt, struct.unpack('<Q', b[i:i + 8])[0]))
            i += 8
        else:
            raise ValueError("bad wire type")
    return out


def load(table_dir, name):
    path = os.path.join(table_dir, name + '.bytes')
    return parse(open(path, 'rb').read()[4:])


def dict_of(b):
    return {f: v for f, wt, v in parse(b)}


def lang_map(table_dir):
    m = {}
    for f, wt, v in load(table_dir, 'LangPackageTableCnData'):
        if f != 1 or not isinstance(v, bytes):
            continue
        try:
            fs = dict_of(v)
        except Exception:
            continue
        i = fs.get(1)
        s = fs.get(2)
        if isinstance(i, int) and isinstance(s, bytes):
            try:
                t = s.decode('utf-8')
            except Exception:
                continue
            if all(ord(c) >= 32 or c in '\n\r\t' for c in t):
                m[i] = t
    return m


def msg_lang(b, lang):
    if not isinstance(b, bytes):
        return None
    try:
        fs = dict_of(b)
    except Exception:
        return None
    v = fs.get(1)
    return lang.get(v) if isinstance(v, int) else None


def text_of(b):
    if not isinstance(b, bytes):
        return None
    try:
        s = b.decode('utf-8')
    except Exception:
        return None
    return s if s and all(ord(c) >= 32 or c in '\n\r\t' for c in s) else None


def tdoll_names():
    txt = open(os.path.join(ROOT, 'dat', 'tdoll_stat.js'), encoding='utf-8').read()
    return {m.group(1): m.group(2) for m in re.finditer(r'"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)"', txt)}


def main():
    table_dir = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_TABLE
    lang = lang_map(table_dir)

    # core level coefficients (x1000)
    rates = {}
    for f, wt, v in load(table_dir, 'LevelUpData'):
        if f == 1 and isinstance(v, bytes):
            d = dict_of(v)
            if isinstance(d.get(1), int) and isinstance(d.get(3), int):
                rates[str(d[1])] = d[3]

    # growth data + specialization entries
    entries = {}
    growth = []
    for f, wt, v in load(table_dir, 'FeaturesEntryData'):
        if f != 1 or not isinstance(v, bytes):
            continue
        d = dict_of(v)
        entry_name = msg_lang(d.get(2), lang)
        if not entry_name:
            continue
        role = d.get(7)
        if role not in ROLES:
            continue
        grow_name = msg_lang(d.get(4), lang)
        prefix_name = msg_lang(d.get(6), lang)
        lv = d.get(9)
        eff = msg_lang(d.get(3), lang)
        icon = text_of(d.get(5)) or ''
        if grow_name:
            growth.append({
                "name": grow_name, "entry": entry_name, "role": role,
                "lv": lv, "icon": icon, "fac": lv,
            })
        key = (entry_name, role)
        e = entries.setdefault(key, {
            "name": entry_name, "role": role, "max": 0,
            "growth": [], "levels": [], "prefix": None,
        })
        if prefix_name and not grow_name and not e["prefix"]:
            e["prefix"] = prefix_name
        e["levels"].append({"lv": lv, "effect": eff, "fac": lv})
        if grow_name:
            e["growth"].append(grow_name)
        e["max"] = max(e["max"], d.get(10) or lv or 0)

    # all specialization entries (fixed 4 per role + random 11 per role)
    entry_list = []
    for key in sorted(entries, key=lambda k: (k[1], 0 if entries[k]["growth"] else 1, k[0])):
        e = entries[key]
        e["levels"].sort(key=lambda x: x["lv"] or 0)
        e["growth"].sort()
        e["fixed"] = bool(e["growth"])
        entry_list.append(e)

    # stage names from any master entry row
    stage_names = {}
    master = {}
    for f, wt, v in load(table_dir, 'MasterEntryData'):
        if f != 1 or not isinstance(v, bytes):
            continue
        d = dict_of(v)
        mid = d.get(1)
        stage = (mid // 10000) if isinstance(mid, int) else 0
        master[mid] = d
        nm = msg_lang(d.get(2), lang)
        if nm:
            stage_names[stage] = nm

    stages = [{"n": i, "name": stage_names.get(i, ''), "lv": STAGE_LEVELS[i - 1]} for i in range(1, 7)]

    # per-doll cores
    by_name = {}
    cores = {}
    for f, wt, v in load(table_dir, 'CoreData'):
        if f != 1 or not isinstance(v, bytes):
            continue
        d = dict_of(v)
        cid = d.get(1)
        if not isinstance(cid, int):
            continue
        name = msg_lang(d.get(2), lang) or ''
        role = d.get(3)
        by_name[name.split('·', 1)[1] if '·' in name else name] = cid
        cores[cid] = {
            "core": cid, "name": name,
            "role": ROLES.get(role, {}).get("name", ''),
            "atk": d.get(6), "hp": d.get(7), "def": d.get(8),
            "slots": list(d.get(5) or b''),
            "forms": [],
        }

    for cid, c in cores.items():
        for st in range(1, 7):
            d = master.get(st * 10000 + cid)
            if not d:
                continue
            req = list(d.get(4) or b'')
            c["forms"].append({
                "s": st,
                "name": stage_names.get(st, ''),
                "effect": msg_lang(d.get(3), lang) or '',
                "req": (req + [0, 0, 0, 0])[:4],
            })

    by_doll = {}
    missing = []
    for doll_id, doll_name in tdoll_names().items():
        cid = by_name.get(doll_name)
        if not cid:
            missing.append((doll_id, doll_name))
            continue
        c = cores[cid]
        by_doll[doll_id] = {
            "core": cid, "name": c["name"], "role": c["role"],
            "atk": c["atk"], "hp": c["hp"], "def": c["def"],
            "slots": c["slots"], "forms": c["forms"],
        }

    out = {
        "roles": {str(k): v for k, v in ROLES.items()},
        "stages": stages,
        "factorUnit": 1,
        "rates": rates,
        "byDoll": by_doll,
        "entries": entry_list,
        "growth": growth,
    }

    dst = os.path.join(ROOT, 'dat', 'mimicry_stat.js')
    with open(dst, 'w', encoding='utf-8', newline='\n') as fp:
        fp.write('// GF2 Tools mimicry-atlas (core / growth data) data\n')
        fp.write('// Generated by scripts/scrape_mimicry.py from the local game config tables.\n')
        fp.write('// attr(L) = ceil(base * rates[L] / 1000)\n')
        fp.write('window.MIMICRY_STAT = ')
        json.dump(out, fp, ensure_ascii=False, separators=(',', ':'))
        fp.write(';\n')

    print('dolls:', len(by_doll), 'entries:', len(entry_list), 'growth:', len(growth))
    if missing:
        print('unmapped dolls:', len(missing), missing[:10])


if __name__ == '__main__':
    main()
