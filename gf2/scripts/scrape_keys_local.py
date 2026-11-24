# -*- coding: utf-8 -*-
"""Generate dat/key_stat.js and img/key/*.png from the local game client.

Local sources:
  TalentKeyData.f2       key type: 1 fixed / 2 shared / 3 leap / 4 affection
  TalentKeyData.f7       key name (language id)
  TalentKeyData.f6       linked BattleSkillDisplayData id (description)
  TalentKeyData.f9/f15   gun id
  TalentKeyData.f5       PropertyData id (shared / affection attributes)
  ItemData.f8            key icon texture name
  BattleSkillDisplayData.f3 rich description (fallback plain text)

Icon textures are exported from AssetBundles_Windows via scripts/.asset_index.json
(at 256x256, same as the old API icons).

Usage:
    py -3 scripts/scrape_keys_local.py [--table DIR] [--bundles DIR] [--index FILE]
"""
import argparse
import io
import json
import os
import re
import sys
from collections import OrderedDict, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)

import scrape_local as s  # noqa: E402

KEY_PATH = os.path.join(ROOT, 'dat', 'key_stat.js')
IMG_DIR = os.path.join(ROOT, 'img', 'key')

ATTR_FIELDS = OrderedDict([
    (9, '暴击'),
    (10, '暴击伤害'),
    (29, '攻击'),
    (30, '生命'),
    (32, '防御'),
])
AFFECTION_VALUE = 4.5

# Variant dolls reuse the base doll's affection key text/attrs (no own
# TalentKeyData type-4 row), but have their own icon texture.
VARIANT_LOVE = {
    'ColphneDoppelgaengerSSR': 'ColphneSR',
    'NemesisGnosisSSR': 'NemesisSR',
}

GENERIC_SHARED = OrderedDict([
    ('id', 'generic_crit'),
    ('name', '共键·通用暴击'),
    ('icon', ''),
    ('attrs', [
        OrderedDict([('name', '攻击'), ('value', 3)]),
        OrderedDict([('name', '暴击'), ('value', 3)]),
    ]),
    ('text', '攻击提高3%，暴击提高3%。'),
])


def first(value):
    if isinstance(value, list):
        return value[0] if value else None
    return value


def doll_order():
    path = os.path.join(ROOT, 'dat', 'tdoll_stat.js')
    raw = open(path, encoding='utf-8').read()
    start = raw.find('window.TDOLL_STAT')
    data = json.loads(raw[raw.find('=', start) + 1:raw.rfind('}') + 1])
    return list(data.keys())


def plain_text_from_display(t, display_id):
    if not isinstance(display_id, int):
        return ''
    row = t.display.get(display_id)
    if not row:
        return ''
    text = t.text(row.get(3)) or ''
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\{\d+\}', '', text)
    return text.strip()


def plain_text(t, key_row):
    return plain_text_from_display(t, first(key_row.get(6)))


def attrs_from(t, key_row, affection=False):
    pid = first(key_row.get(5))
    row = t.props.get(pid) if isinstance(pid, int) else None
    out = []
    if not row:
        return out
    for fid, name in ATTR_FIELDS.items():
        value = first(row.get(fid))
        if not isinstance(value, int) or value == 0:
            continue
        if affection:
            out.append(OrderedDict([('name', name), ('value', AFFECTION_VALUE)]))
        else:
            v = value / 10.0
            out.append(OrderedDict([('name', name), ('value', int(v) if v.is_integer() else v)]))
    return out


def collect_keys(t):
    guns = {}
    for row in t.rows('GunData'):
        gid, sid = row.get(1), t.text(row.get(5))
        if isinstance(gid, int) and sid:
            guns[gid] = sid
    t.display = {row.get(1): row for row in t.rows('BattleSkillDisplayData') if isinstance(row.get(1), int)}
    t.props = {}
    for row in t.rows('PropertyData'):
        pid = first(row.get(1))
        if isinstance(pid, int):
            t.props[pid] = row
    items = {}
    for row in t.rows('ItemData'):
        kid = first(row.get(1))
        if isinstance(kid, int):
            items[kid] = t.text(row.get(8)) or ''

    by_sid = defaultdict(lambda: {
        'fixed': [], 'shared': None, 'leap': None, 'leaps': [], 'affection': None,
    })
    for row in t.rows('TalentKeyData'):
        typ = first(row.get(2))
        if typ not in (1, 2, 3, 4):
            continue
        gid = first(row.get(15)) or first(row.get(9))
        sid = guns.get(gid)
        if not sid:
            continue
        key_id = first(row.get(1))
        entry = by_sid[sid]
        if typ == 1:
            entry['fixed'].append(row)
        elif typ == 3:
            entry['leaps'].append(row)
            if entry['leap'] is None:
                entry['leap'] = row
        else:
            slot = {2: 'shared', 4: 'affection'}[typ]
            if entry[slot] is None:
                entry[slot] = row
        if isinstance(key_id, int):
            entry.setdefault('icons', {})[key_id] = items.get(key_id, '')
    return by_sid


def collect_sp_keys(t):
    """Stage-2 leap keys: SpTalentKeyData.f2 = base leap key id, f5 = display id."""
    out = defaultdict(list)
    for row in t.rows('SpTalentKeyData'):
        base = first(row.get(2))
        sp_id = first(row.get(1))
        disp_id = first(row.get(5))
        if isinstance(base, int) and isinstance(sp_id, int):
            out[base].append({'spId': sp_id, 'dispId': disp_id})
    for vals in out.values():
        vals.sort(key=lambda x: x['spId'])
    return out


def build_key(t, key_row, stem, kind):
    name = t.text(key_row.get(7)) or ''
    if not name:
        return None
    key = OrderedDict([('id', stem), ('name', name), ('icon', 'img/key/%s.png' % stem)])
    if kind in ('shared', 'affection'):
        attrs = attrs_from(t, key_row, affection=(kind == 'affection'))
        if attrs:
            key['attrs'] = attrs
    text = plain_text(t, key_row)
    if text:
        key['text'] = text
    return key


def build_stat(t):
    by_sid = collect_keys(t)
    sp_by_base = collect_sp_keys(t)
    out = OrderedDict()
    for sid in doll_order():
        entry = by_sid.get(sid)
        if not entry:
            continue
        eng = re.sub(r'(SSR|SR)$', '', sid).lower()
        data = OrderedDict([
            ('affection', None), ('shared', None), ('fixed', []),
            ('leap', None), ('leaps', []),
        ])
        if entry['affection']:
            data['affection'] = build_key(t, entry['affection'], eng + '_love', 'affection')
        elif sid in VARIANT_LOVE:
            base = by_sid.get(VARIANT_LOVE[sid], {})
            if base.get('affection'):
                data['affection'] = build_key(t, base['affection'], eng + '_love', 'affection')
        if entry['shared']:
            data['shared'] = build_key(t, entry['shared'], eng + '_common', 'shared')
        fixed = sorted(entry['fixed'], key=lambda r: first(r.get(1)) or 0)
        for i, row in enumerate(fixed, 1):
            key = build_key(t, row, '%s_static_%d' % (eng, i), 'fixed')
            if key:
                data['fixed'].append(key)
        leaps = sorted(entry['leaps'], key=lambda r: first(r.get(1)) or 0)
        if leaps:
            base_row = leaps[0]
            base_id = first(base_row.get(1))
            stage1 = build_key(t, base_row, eng + '_leap', 'leap')
            if stage1:
                stage1['stage'] = 1
                stage1['talentId'] = base_id
                leap_objs = [stage1]
                for stage_no, sp in enumerate(sp_by_base.get(base_id, []), 2):
                    stage_key = OrderedDict([
                        ('id', '%s_leap_%d' % (eng, stage_no)),
                        ('name', stage1['name']),
                        ('icon', stage1['icon']),
                        ('stage', stage_no),
                        ('talentId', base_id),
                        ('spTalentId', sp['spId']),
                    ])
                    text = plain_text_from_display(t, sp.get('dispId'))
                    if text:
                        stage_key['text'] = text
                    leap_objs.append(stage_key)
                data['leaps'] = leap_objs
                data['leap'] = leap_objs[-1]
        out[sid] = data
    return out, by_sid


def extract_icons(t, by_sid, bundle_dir, index_path):
    try:
        from PIL import Image
        import UnityPy
    except ImportError as exc:
        print('! missing dependency:', exc, file=sys.stderr)
        return 0
    try:
        index = json.load(open(index_path, encoding='utf-8'))
    except Exception as exc:
        print('! cannot read asset index (run scrape_local.py first):', exc, file=sys.stderr)
        return 0

    needed = defaultdict(list)
    for sid, entry in by_sid.items():
        eng = re.sub(r'(SSR|SR)$', '', sid).lower()
        for key_id, tex in (entry.get('icons') or {}).items():
            if not tex:
                continue
            stem = None
            row = None
            for slot in ('shared', 'leap', 'affection'):
                r = entry.get(slot)
                if r is not None and first(r.get(1)) == key_id:
                    stem = {'shared': eng + '_common', 'leap': eng + '_leap', 'affection': eng + '_love'}[slot]
                    row = r
                    break
            if row is None:
                for i, r in enumerate(sorted(entry['fixed'], key=lambda r: first(r.get(1)) or 0), 1):
                    if first(r.get(1)) == key_id:
                        stem = '%s_static_%d' % (eng, i)
                        break
            if stem:
                needed[tex].append(stem)

    for sid in VARIANT_LOVE:
        entry = by_sid.get(sid)
        if entry and not entry.get('affection'):
            eng = re.sub(r'(SSR|SR)$', '', sid).lower()
            needed['Skill_Chrtalent_%s_love' % sid].append(eng + '_love')

    by_bundle = defaultdict(list)
    missing = []
    for tex, stems in needed.items():
        fn = index.get(tex)
        if not fn:
            missing.append(tex)
            continue
        by_bundle[fn].append((tex, stems))

    os.makedirs(IMG_DIR, exist_ok=True)
    saved = 0
    for fn, entries in by_bundle.items():
        try:
            raw = open(os.path.join(bundle_dir, fn), 'rb').read()
            env = UnityPy.load(io.BytesIO(s.decrypt_bundle(raw)))
        except Exception as exc:
            print('! bundle load failed:', fn, exc, file=sys.stderr)
            continue
        wanted = {tex for tex, _ in entries}
        found = set()
        for obj in env.objects:
            if obj.type.name != 'Texture2D':
                continue
            try:
                d = obj.read()
                name = getattr(d, 'm_Name', None)
                if name not in wanted:
                    continue
                img = d.image.resize((256, 256), Image.LANCZOS)
                for tex, stems in entries:
                    if tex != name:
                        continue
                    for stem in stems:
                        img.save(os.path.join(IMG_DIR, stem + '.png'))
                        saved += 1
                found.add(name)
            except Exception as exc:
                print('! texture failed:', fn, getattr(obj, 'path_id', ''), exc, file=sys.stderr)
        for tex in wanted - found:
            missing.append(tex)
    if missing:
        print('! textures not found:', len(missing))
        for tex in missing[:20]:
            print('  ', tex)
    return saved


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--table', default=s.DEFAULT_TABLE)
    ap.add_argument('--bundles', default=s.DEFAULT_BUNDLES)
    ap.add_argument('--index', default=s.DEFAULT_INDEX)
    args = ap.parse_args()

    print('reading tables ...')
    t = s.Tables(args.table)
    by_doll, by_sid = build_stat(t)
    print('dolls with keys:', len(by_doll), 'fixed:', sum(len(v['fixed']) for v in by_doll.values()))

    print('extracting key icons ...')
    saved = extract_icons(t, by_sid, args.bundles, args.index)
    print('icons saved:', saved)

    out = OrderedDict([('byDoll', by_doll), ('genericShared', GENERIC_SHARED)])
    with open(KEY_PATH, 'w', encoding='utf-8', newline='\n') as fp:
        fp.write('// GF2 Tools mind-spiral key data (local client)\n')
        fp.write('// byDoll[dollId] = { affection{id,name,icon,attrs[]}, shared{id,name,icon,attrs[],text}, fixed[{id,name,icon,text}], leap{...}|null, leaps[{id,name,icon,stage,talentId,spTalentId?,text}] }\n')
        fp.write('// attr.name normalized to 攻击/生命/防御/暴击/暴击伤害 (value is percent)\n')
        fp.write('window.KEY_STAT = ')
        json.dump(out, fp, ensure_ascii=False, separators=(',', ':'))
        fp.write(';\n')
    print('written', KEY_PATH)


if __name__ == '__main__':
    main()
