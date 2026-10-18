# -*- coding: utf-8 -*-
"""Generate GF2 T-Doll data (and images) from the local game client.

This replaces the old wiki scraper.  It reads the protobuf config tables and
extracts portraits / thumbnails / skill icons from the local AssetBundles.

Usage:
    py -3 scripts/scrape_local.py [--table DIR] [--bundles DIR] [--no-images]
                                  [--rescan] [--index FILE]

Defaults:
    table   D:/Program Files/GF2Exilium/GF2 Game/GF2_Exilium_Data/LocalCache/Data/Table
    bundles D:/Program Files/GF2Exilium/GF2 Game/GF2_Exilium_Data/LocalCache/Data/AssetBundles_Windows
"""
import argparse
import io
import json
import os
import re
import struct
import sys
from collections import OrderedDict, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DEFAULT_TABLE = r'D:\Program Files\GF2Exilium\GF2 Game\GF2_Exilium_Data\LocalCache\Data\Table'
DEFAULT_BUNDLES = r'D:\Program Files\GF2Exilium\GF2 Game\GF2_Exilium_Data\LocalCache\Data\AssetBundles_Windows'
DEFAULT_INDEX = os.path.join(HERE, '.asset_index.json')

BUNDLE_KEY = b'UnityFS\x00\x00\x00\x00\x075.x.'
BUNDLE_XOR_LIMIT = 0x1000 * 8

AMMO_BY_WEAPON = {
    1: '轻型弹',  # HG
    2: '轻型弹',  # SMG
    3: '重型弹',  # RF
    4: '中型弹',  # AR
    5: '重型弹',  # MG
    6: '霰弹',    # SG
    7: '近战',    # Blade
}
AMMO_BY_ELEMENT = {2: '轻型弹', 4: '中型弹', 8: '重型弹', 16: '近战', 32: '霰弹', 1: None}
SKILL_ORDER = {3: 0, 4: 1, 5: 2, 2: 3, 1: 4}
PROFESSION_ICONS = {
    'Icon_Professional_Guard': 'prof_guard',
    'Icon_Professional_Scout': 'prof_scout',
    'Icon_Professional_Assist': 'prof_assist',
    'Icon_Professional_Suppress': 'prof_suppress',
}

# Preserve the wiki-era default list order.  New dolls are appended alphabetically
# after these entries so existing ordering never churns.
LEGACY_DOLL_ORDER = [
    'IglaSSR', 'AgentSSR', 'CeciliaSSR', 'EaglettaSSR', 'AsteriaSSR', 'KoledaSSR',
    'FaelynnSSR', 'WelrodSSR', 'MitylSSR', 'SoppoSSR', 'OTs14SSR', 'SextansSSR',
    'LiushihSSR', 'BastiSSR', 'CheyanneSSR', 'LoreleySSR', 'SakuraSSR', 'PhaetusaSSR',
    'HelenSSR', 'LewisSSR', 'VoymastinaSSR', 'AlvaSSR', 'LindSSR', 'FlorenceSSR',
    'LeneSSR', 'RobellaSSR', 'LevaSSR', 'NikketaSSR', 'YooHeeSSR', 'QiuhuaSSR',
    'PeriSSR', 'SpringfieldSSR', 'AndorisSSR', 'BiyocaSSR', 'VectorSSR', 'MishtySSR',
    'ClukaySSR', 'ZhaohuiSSR', 'DusevnyjSSR', 'SuomiSSR', 'UllridSSR', 'MacqiatoSSR',
    'JiangyuSSR', 'PerityaSSR', 'MosinnagantSSR', 'LennaSSR', 'QiongjiuSSR',
    'CentaureissiSSR', 'SabrinaSSR', 'DaiyanSSR', 'TololoSSR',
    'ColphneDoppelgaengerSSR', 'NemesisGnosisSSR', 'BalthildeSSR', 'HarpsySSR',
    'FayeSSR', 'PapashaSSR', 'VepleySSR', 'GrozaSR', 'SharkrySR', 'CharolicSR',
    'CheetaSR', 'NemesisSR', 'NagantSR', 'ColphneSR', 'LittaraSR', 'KseniaSR',
    'LottaSR',
]


# ---------------------------------------------------------------------------
# protobuf reader (same format as scrape_mimicry.py / pbtable_decode.py)
# ---------------------------------------------------------------------------
def read_varint(b, i):
    shift = 0
    result = 0
    while True:
        x = b[i]
        i += 1
        result |= (x & 0x7F) << shift
        if not (x & 0x80):
            break
        shift += 7
    return result, i


def try_parse(b):
    out = []
    i = 0
    try:
        while i < len(b):
            key, i = read_varint(b, i)
            f = key >> 3
            wt = key & 7
            if f == 0:
                return None
            if wt == 0:
                v, i = read_varint(b, i)
                out.append((f, wt, v))
            elif wt == 2:
                ln, i = read_varint(b, i)
                if i + ln > len(b):
                    return None
                out.append((f, wt, b[i:i + ln]))
                i += ln
            elif wt == 5:
                out.append((f, wt, struct.unpack('<I', b[i:i + 4])[0]))
                i += 4
            elif wt == 1:
                out.append((f, wt, struct.unpack('<Q', b[i:i + 8])[0]))
                i += 8
            else:
                return None
        return out
    except Exception:
        return None


def dict_of(b):
    d = {}
    for f, wt, v in try_parse(b) or []:
        d.setdefault(f, []).append(v)
    return {k: (v[0] if len(v) == 1 else v) for k, v in d.items()}


def packed_varints(b):
    if not isinstance(b, bytes):
        return []
    out = []
    i = 0
    while i < len(b):
        v, i = read_varint(b, i)
        out.append(v)
    return out


class Tables:
    def __init__(self, table_dir):
        self.dir = table_dir
        self.cache = {}
        self.lang = self._lang_map()

    def load(self, name):
        if name in self.cache:
            return self.cache[name]
        path = os.path.join(self.dir, name + '.bytes')
        data = try_parse(open(path, 'rb').read()[4:]) or []
        self.cache[name] = data
        return data

    def rows(self, name):
        out = []
        for f, wt, v in self.load(name):
            if f == 1 and wt == 2:
                d = dict_of(v)
                if d:
                    out.append(d)
        return out

    def _lang_map(self):
        m = {}
        for f, wt, v in self.load('LangPackageTableCnData'):
            if f != 1 or not isinstance(v, bytes):
                continue
            d = dict_of(v)
            i, s = d.get(1), d.get(2)
            if isinstance(i, int) and isinstance(s, bytes):
                try:
                    t = s.decode('utf-8')
                except Exception:
                    continue
                if all(ord(c) >= 32 or c in '\n\r\t' for c in t):
                    m[i] = t
        return m

    def text(self, v):
        if isinstance(v, int):
            return self.lang.get(v)
        if isinstance(v, bytes):
            s = None
            try:
                s = v.decode('utf-8')
                if not all(ord(c) >= 32 or c in '\n\r\t' for c in s):
                    s = None
            except Exception:
                s = None
            if s is not None:
                return s
            d = dict_of(v)
            if isinstance(d.get(1), int):
                return self.lang.get(d[1])
        return None


# ---------------------------------------------------------------------------
# bundle decryption / texture extraction
# ---------------------------------------------------------------------------
def decrypt_bundle(data):
    b = bytearray(data)
    if len(b) < 16:
        return bytes(b)
    file_key = bytes(x ^ y for x, y in zip(b[:16], BUNDLE_KEY))
    n = min(BUNDLE_XOR_LIMIT, len(b))
    for i in range(n):
        b[i] ^= file_key[i % 16]
    return bytes(b)


def build_asset_index(bundle_dir, index_path, needed=None, rescan=False):
    """Return {texture_name: bundle_filename}.  Cache is reused when possible."""
    if not rescan and os.path.exists(index_path):
        try:
            with open(index_path, encoding='utf-8') as fp:
                index = json.load(fp)
            if index:
                return index
        except Exception:
            pass

    try:
        import UnityPy
    except ImportError:
        print('! UnityPy is required for image extraction: pip install UnityPy', file=sys.stderr)
        return {}

    files = sorted(f for f in os.listdir(bundle_dir) if f.endswith('.bundle'))
    index = {}
    total = len(files)
    for i, fn in enumerate(files, 1):
        path = os.path.join(bundle_dir, fn)
        try:
            raw = open(path, 'rb').read()
            env = UnityPy.load(io.BytesIO(decrypt_bundle(raw)))
            for obj in env.objects:
                if obj.type.name not in ('Texture2D', 'Sprite'):
                    continue
                try:
                    d = obj.read()
                    nm = getattr(d, 'm_Name', None)
                    if nm and nm not in index:
                        index[nm] = fn
                except Exception:
                    pass
        except Exception:
            pass
        if i % 200 == 0:
            print('  index %d/%d' % (i, total), flush=True)

    try:
        with open(index_path, 'w', encoding='utf-8') as fp:
            json.dump(index, fp, ensure_ascii=False)
    except Exception as e:
        print('! cannot write asset index:', e, file=sys.stderr)
    return index


def extract_textures(bundle_dir, index, wanted, out_dir, size=None, name_fn=None):
    """wanted: iterable of texture names.  Saves <name>.png in out_dir."""
    try:
        from PIL import Image
        import UnityPy
    except ImportError as e:
        print('! missing dependency:', e, file=sys.stderr)
        return set()

    by_bundle = defaultdict(list)
    for nm in wanted:
        fn = index.get(nm)
        if fn:
            by_bundle[fn].append(nm)

    saved = set()
    os.makedirs(out_dir, exist_ok=True)
    for fn, names in by_bundle.items():
        path = os.path.join(bundle_dir, fn)
        try:
            raw = open(path, 'rb').read()
            env = UnityPy.load(io.BytesIO(decrypt_bundle(raw)))
        except Exception as e:
            print('! bundle load failed:', fn, e, file=sys.stderr)
            continue
        wanted_set = set(names)
        for obj in env.objects:
            if obj.type.name != 'Texture2D':
                continue
            try:
                d = obj.read()
                nm = getattr(d, 'm_Name', None)
                if nm not in wanted_set:
                    continue
                img = d.image
                if size:
                    img = img.resize(size, Image.LANCZOS)
                out_name = name_fn(nm) if name_fn else nm
                img.save(os.path.join(out_dir, out_name + '.png'))
                saved.add(nm)
            except Exception as e:
                print('! texture failed:', fn, getattr(obj, 'path_id', ''), e, file=sys.stderr)
    return saved


# ---------------------------------------------------------------------------
# data builders
# ---------------------------------------------------------------------------
def build_dolls(t, old_attr):
    guns = t.rows('GunData')
    chars = {}
    for r in t.rows('GunCharacterData'):
        sid = t.text(r.get(4))
        if sid:
            chars[sid] = r

    duty = {r.get(1): t.text(r.get(2)) for r in t.rows('GunDutyData')}
    weapon_type = {r.get(1): t.text(r.get(2)) for r in t.rows('GunWeaponTypeData')}
    elements = {}
    for r in t.rows('LanguageElementData'):
        eid = r.get(1)
        name = t.text(r.get(2))
        if name:
            elements[eid] = name
    elements.setdefault(None, '物理')
    elements.setdefault(31, '源谐')

    # property groups (fallback for new dolls only)
    group_props = {}
    for r in t.rows('GunPresetGroupPropertyByGroupIdData'):
        group_props[r.get(1)] = packed_varints(r.get(2))
    prop_rows = {}
    for r in t.rows('PropertyData'):
        prop_rows[r.get(1)] = r

    out = OrderedDict()
    for g in guns:
        sid = t.text(g.get(5))
        if not sid:
            continue
        gid = g.get(1)
        if not isinstance(gid, int):
            continue
        role = duty.get(g.get(13), '')
        wt = weapon_type.get(g.get(23), '')
        elem = elements.get(g.get(22), elements.get(None, '物理'))
        tags = [role, wt, elem]

        ch = chars.get(sid)
        intro = t.text(ch.get(11)) if ch else None
        if not intro:
            intro = t.text(g.get(6)) or ''

        rank = g.get(15)
        if not isinstance(rank, int):
            rank = 5 if sid.endswith('SSR') else (4 if sid.endswith('SR') else 3)

        attr = old_attr.get(sid)
        if not attr:
            attr = fallback_attr(t, gid, group_props, prop_rows)

        out[sid] = {
            'id': sid,
            'name': t.text(g.get(2)) or sid,
            'rank': rank,
            'tags': [x for x in tags if x],
            'intro': intro,
            'avatar': 'img/avatar/%s.png' % sid,
            'thumbnail': 'img/thumbnail/%s.png' % sid,
            'attrGroups': attr,
            'skills': [],
        }
    return out


def fallback_attr(t, gun_id, group_props, prop_rows):
    """Approximate stats for a doll missing from the old data file."""
    ids = group_props.get(gun_id * 100, [])
    if not ids:
        return {}
    p = prop_rows.get(ids[-1], {})
    return {
        '基础属性': {
            '攻击': str(p.get(2, '')),
            '生命': str(p.get(3, '')),
            '防御': str(p.get(5, '')),
            '暴击': '20%',
            '暴击伤害': '120%',
            '稳态': str(p.get(8, '')),
            '行动力': '',
        }
    }


def build_skills(t, dolls, term_store):
    display = {r.get(1): r for r in t.rows('BattleSkillDisplayData') if isinstance(r.get(1), int)}
    battle = {r.get(1): r for r in t.rows('BattleSkillData') if isinstance(r.get(1), int)}

    # family base -> list of level rows
    family = defaultdict(list)
    for skid, r in display.items():
        lv = r.get(9)
        if isinstance(lv, int) and lv >= 1:
            base = skid - (lv - 1)
            family[base].append(r)

    # grade map: skill variant id -> vertebra number
    grade_by_skill = {}
    grades_by_gun = defaultdict(list)
    for r in t.rows('GunGradeData'):
        gid = r.get(2)
        if not isinstance(gid, int):
            continue
        grades_by_gun[gid].append(r)
        variant = r.get(4)
        if isinstance(variant, int):
            grade = (r.get(1) % 100) - 1 if isinstance(r.get(1), int) else None
            if grade and 1 <= grade <= 6:
                grade_by_skill[variant] = grade

    # gun id -> GunData row
    gun_by_id = {}
    gun_id_by_sid = {}
    for g in t.rows('GunData'):
        gid = g.get(1)
        sid = t.text(g.get(5))
        if isinstance(gid, int):
            gun_by_id[gid] = g
        if sid:
            gun_id_by_sid[sid] = gid

    for sid, doll in dolls.items():
        gid = gun_id_by_sid.get(sid)
        if not gid:
            continue
        grade_rows = sorted(grades_by_gun.get(gid, []), key=lambda x: x.get(1) or 0)
        main_ids = []

        # 1) normal attack: GunData.f18
        normal = gun_by_id.get(gid, {}).get(18)
        if isinstance(normal, int):
            main_ids.append(normal)

        # 2) ultimate / active1 / active2: first matching category in 0阶 f11
        f11_ids = []
        if grade_rows:
            first = grade_rows[0].get(11)
            if isinstance(first, bytes):
                first = first.decode('utf-8', 'replace')
            if first:
                for x in first.split(','):
                    x = x.strip()
                    if x.isdigit():
                        f11_ids.append(int(x))
        by_cat = {}
        for skid in f11_ids:
            cat = battle.get(skid, {}).get(5)
            if cat in (2, 4, 5) and cat not in by_cat:
                by_cat[cat] = skid
        for cat in (4, 5, 2):
            if cat in by_cat:
                main_ids.append(by_cat[cat])

        # 3) passive: prefer the character's own *_Passive_* icon family
        passive = None
        base_name = re.sub(r'(SSR|SR)$', '', sid)

        def is_doll_passive(icon):
            return ('_Passive_' in icon and 'Summon' not in icon
                    and (icon.startswith('Skill_' + sid + '_') or icon.startswith('Skill_' + base_name + '_')))

        passive_candidates = []
        for skid, r in display.items():
            if r.get(9) != 1:
                continue
            icon = t.text(r.get(10)) or ''
            if is_doll_passive(icon):
                if skid not in main_ids:
                    passive_candidates.append(skid)
        if passive_candidates:
            def passive_score(skid):
                rows = family.get(skid, [])
                has_grade = any(grade_by_skill.get(r.get(1)) for r in rows)
                return (0 if has_grade else 1, -len(rows), skid)
            passive = min(passive_candidates, key=passive_score)
        if passive is None:
            for skid in f11_ids:
                if battle.get(skid, {}).get(5) == 1:
                    passive = skid
                    break
        if passive is None:
            for r in grade_rows[1:]:
                v = r.get(4)
                if not isinstance(v, int):
                    continue
                lv = display.get(v, {}).get(9)
                if isinstance(lv, int) and lv >= 1:
                    base = v - (lv - 1)
                    if battle.get(base, {}).get(5) == 1:
                        passive = base
                        break
        if passive is not None:
            main_ids.append(passive)

        # 4) special / extra skill: f15, else f14 (single int or packed list)
        extra = None
        if grade_rows:
            g0 = grade_rows[0]
            if isinstance(g0.get(15), int):
                extra = g0.get(15)
            elif isinstance(g0.get(14), int):
                extra = g0.get(14)
            elif isinstance(g0.get(14), bytes):
                vals = packed_varints(g0.get(14))
                if vals:
                    extra = vals[0]
        if extra is not None and battle.get(extra, {}).get(5) not in (1, 2, 3, 4, 5):
            main_ids.append(extra)

        # convert every id to its level-1 family base, dedupe, keep order
        base_skills = []
        for skid in main_ids:
            lv = display.get(skid, {}).get(9)
            base = skid - (lv - 1) if isinstance(lv, int) and lv >= 1 else skid
            if base not in base_skills:
                base_skills.append(base)

        seen = set()
        skills = []
        for base in base_skills:
            if base in seen:
                continue
            seen.add(base)
            rows = sorted(family.get(base, []), key=lambda x: x.get(9) or 0)
            if not rows:
                continue
            first = rows[0]
            icon = t.text(first.get(10)) or ''
            if not icon:
                icon = generic_attack_icon(doll['tags'][1] if len(doll['tags']) > 1 else '')
            tags = [x.strip() for x in (t.text(first.get(22)) or '').split('/') if x.strip()]
            sub = subtags_for(first, battle, doll, tags)
            levels = []
            descs = []
            desc_refs = []
            vertebrae = []
            for r in rows:
                lv = r.get(9) or 1
                skid = r.get(1)
                grade = grade_by_skill.get(skid)
                if lv == 1:
                    levels.append('Lv.1')
                elif grade:
                    levels.append('Lv.%d ( %d椎 )' % (lv, grade))
                else:
                    levels.append('Lv.%d' % lv)
                refs = term_store.resolve(parse_refs(t.text(r.get(4))))
                descs.append(t.text(r.get(3)) or '')
                desc_refs.append(refs)
                if lv > 1:
                    delta = t.text(r.get(8)) or ''
                    if delta:
                        vertebrae.append({
                            'label': '椎体 · %d' % (grade or (lv - 1)),
                            'text': delta,
                            'refs': refs,
                        })
            if len(levels) == 1:
                levels = []
            skills.append({
                'name': t.text(first.get(2)) or '',
                'icon': 'img/skill/%s.png' % icon,
                'tags': tags,
                'subTags': sub,
                'levels': levels,
                'desc': descs[0] if descs else '',
                'descs': descs,
                'descRefs': desc_refs,
                'vertebrae': vertebrae,
                'quote': t.text(first.get(6)) or '',
                '_sort': skill_sort_key(first, battle, base_skills),
            })
        skills.sort(key=lambda s: s['_sort'])
        for s in skills:
            s.pop('_sort', None)
        doll['skills'] = skills


def skill_sort_key(row, battle, base_skills):
    b = battle.get(row.get(1), {})
    cat = b.get(5)
    if cat in SKILL_ORDER:
        return (SKILL_ORDER[cat], 0)
    return (99, base_skills.index(row.get(1)) if row.get(1) in base_skills else 0)


def generic_attack_icon(weapon):
    return {
        '手枪': 'Skill_Attack_Pistol',
        '冲锋枪': 'Skill_Attack_Submachinegun',
        '突击步枪': 'Skill_Attack_AssaultRifle',
        '狙击枪': 'Skill_Attack_SniperRifle',
        '机枪': 'Skill_Attack_MachineGun',
        '霰弹枪': 'Skill_Attack_Shotgun',
        '刀': 'Skill_Attack_Blade',
    }.get(weapon, 'Skill_Attack_AssaultRifle')


def subtags_for(row, battle, doll, tags):
    b = battle.get(row.get(1), {})
    f45 = b.get(45)
    if f45 in AMMO_BY_ELEMENT and AMMO_BY_ELEMENT[f45]:
        return [AMMO_BY_ELEMENT[f45]]
    if f45 == 1 or '普攻' in tags:
        weapon = doll['tags'][1] if len(doll['tags']) > 1 else ''
        ammo = AMMO_BY_WEAPON.get(weapon_id(weapon))
        return [ammo] if ammo else []
    return []


def weapon_id(name):
    return {
        '手枪': 1, '冲锋枪': 2, '狙击枪': 3, '突击步枪': 4,
        '机枪': 5, '霰弹枪': 6, '刀': 7,
    }.get(name)


def parse_refs(s):
    if not s:
        return []
    refs = []
    for token in s.split(';'):
        token = token.strip()
        if not token or ':' not in token:
            continue
        type_s, rest = token.split(':', 1)
        try:
            typ = int(type_s)
        except ValueError:
            continue
        cands = []
        for x in rest.replace(':', ',').split(','):
            x = x.strip()
            if x.lstrip('-').isdigit():
                cands.append(int(x))
        refs.append([typ, cands])
    return refs


class TermStore:
    def __init__(self, t):
        self.dicts = {}
        for r in t.rows('BattleDictionaryData'):
            i = r.get(1)
            if isinstance(i, int):
                self.dicts[i] = {
                    'name': t.text(r.get(2)) or '',
                    'desc': t.text(r.get(3)) or '',
                    'raw': parse_refs(t.text(r.get(4))),
                }
        self.buffs = {}
        for r in t.rows('BattleBuffPerformData'):
            i = r.get(1)
            if isinstance(i, int):
                self.buffs[i] = {
                    'name': t.text(r.get(2)) or '',
                    'desc': t.text(r.get(3)) or '',
                    'raw': parse_refs(t.text(r.get(4))),
                }
        self.buff_data = {}
        self.buff_groups = defaultdict(list)
        for r in t.rows('BattleBuffData'):
            i = r.get(1)
            if isinstance(i, int):
                self.buff_data[i] = {
                    'name': t.text(r.get(3)) or '',
                    'desc': '',
                }
                group = r.get(44)
                if isinstance(group, int):
                    self.buff_groups[group].append(i)
        for r in t.rows('BuffClassData'):
            group = r.get(1)
            if isinstance(group, int):
                self.buff_groups[group].extend(packed_varints(r.get(2)))

    def resolve_one(self, typ, cands):
        table = self.buffs if typ == 0 else (self.dicts if typ == 1 else {})
        fallback = self.buff_data if typ == 0 else {}
        positives = [x for x in cands if x > 0]
        for x in sorted(positives, reverse=True):
            if x in table and (table[x]['name'] or table[x]['desc']):
                return x
        for x in positives:
            if x in fallback and (fallback[x]['name'] or fallback[x]['desc']):
                return x
            if typ == 0 and x in self.buff_groups:
                for gid in sorted(self.buff_groups[x]):
                    if gid in table and (table[gid]['name'] or table[gid]['desc']):
                        return gid
        return None

    def resolve(self, raw):
        out = []
        for typ, cands in raw:
            out.append([typ, self.resolve_one(typ, cands)])
        return out

    def collect(self, skill_refs):
        terms = {}
        seen = set()
        queue = []
        for refs in skill_refs:
            for typ, rid in refs or []:
                if rid is not None:
                    queue.append((typ, rid))

        while queue:
            typ, rid = queue.pop(0)
            key = '%d:%d' % (typ, rid)
            if key in seen:
                continue
            seen.add(key)
            src = (self.buffs if typ == 0 else self.dicts).get(rid)
            if not src:
                f = self.buff_data.get(rid) if typ == 0 else None
                if f and (f['name'] or f['desc']):
                    src = {'name': f['name'], 'desc': f['desc'], 'raw': []}
                else:
                    continue
            refs = self.resolve(src.get('raw', []))
            terms[key] = {
                'name': src.get('name') or '',
                'desc': src.get('desc') or '',
                'refs': refs,
            }
            for t2, r2 in refs:
                if r2 is not None:
                    queue.append((t2, r2))
        return terms


# ---------------------------------------------------------------------------
# main
# ---------------------------------------------------------------------------
def load_old_attr():
    path = os.path.join(ROOT, 'dat', 'tdoll_stat.js')
    if not os.path.exists(path):
        return {}
    try:
        raw = open(path, encoding='utf-8').read()
        raw = raw[raw.find('window.TDOLL_STAT'):]
        raw = raw[raw.find('=') + 1:]
        raw = raw[:raw.rfind('}') + 1]
        data = json.loads(raw)
        return {k: v.get('attrGroups', {}) for k, v in data.items() if isinstance(v, dict)}
    except Exception:
        return {}


def collect_skill_refs(dolls):
    refs = []
    for d in dolls.values():
        for s in d.get('skills', []):
            for r in s.get('descRefs', []):
                refs.append(r)
            for v in s.get('vertebrae', []):
                refs.append(v.get('refs'))
    return refs


def order_dolls(dolls):
    ordered = OrderedDict()
    for sid in LEGACY_DOLL_ORDER:
        if sid in dolls:
            ordered[sid] = dolls[sid]
    for sid in sorted(dolls):
        if sid not in ordered:
            ordered[sid] = dolls[sid]
    return ordered


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--table', default=DEFAULT_TABLE)
    ap.add_argument('--bundles', default=DEFAULT_BUNDLES)
    ap.add_argument('--index', default=DEFAULT_INDEX)
    ap.add_argument('--no-images', action='store_true')
    ap.add_argument('--rescan', action='store_true')
    args = ap.parse_args()

    print('reading tables ...')
    t = Tables(args.table)
    old_attr = load_old_attr()
    dolls = order_dolls(build_dolls(t, old_attr))
    print('dolls:', len(dolls))

    print('building skills ...')
    term_store = TermStore(t)
    build_skills(t, dolls, term_store)
    print('terms ...')
    terms = term_store.collect(collect_skill_refs(dolls))
    print('terms:', len(terms))

    if not args.no_images:
        print('indexing bundles ...')
        needed = set()
        for d in dolls.values():
            needed.add('Avatar_Whole_' + d['id'])
            needed.add('Avatar_Half_' + d['id'])
            for s in d.get('skills', []):
                icon = s.get('icon', '').split('/')[-1]
                if icon.endswith('.png'):
                    icon = icon[:-4]
                if icon:
                    needed.add(icon)
        needed.update(PROFESSION_ICONS.keys())
        index = build_asset_index(args.bundles, args.index, needed, args.rescan)
        print('extracting images ...')
        # avatars
        extract_textures(args.bundles, index, {'Avatar_Whole_' + d['id'] for d in dolls.values()},
                         os.path.join(ROOT, 'img', 'avatar'),
                         name_fn=lambda nm: nm[len('Avatar_Whole_'):] if nm.startswith('Avatar_Whole_') else nm)
        # thumbnails
        extract_textures(args.bundles, index, {'Avatar_Half_' + d['id'] for d in dolls.values()},
                         os.path.join(ROOT, 'img', 'thumbnail'), size=(256, 256),
                         name_fn=lambda nm: nm[len('Avatar_Half_'):] if nm.startswith('Avatar_Half_') else nm)
        # skill icons
        icons = set()
        for d in dolls.values():
            for s in d.get('skills', []):
                icon = s.get('icon', '').split('/')[-1]
                if icon.endswith('.png'):
                    icon = icon[:-4]
                if icon:
                    icons.add(icon)
        extract_textures(args.bundles, index, icons, os.path.join(ROOT, 'img', 'skill'), size=(64, 64))
        # profession / duty icons (used by mimicry requirement badges)
        extract_textures(args.bundles, index, set(PROFESSION_ICONS.keys()), os.path.join(ROOT, 'img', 'ui'),
                         size=(64, 64), name_fn=lambda nm: PROFESSION_ICONS.get(nm, nm))

    # write data
    out = OrderedDict()
    for sid, d in dolls.items():
        d['skills'] = [
            {k: v for k, v in s.items() if k not in ('quote',)}
            for s in d.get('skills', [])
        ]
        out[sid] = d
    dst = os.path.join(ROOT, 'dat', 'tdoll_stat.js')
    with open(dst, 'w', encoding='utf-8', newline='\n') as fp:
        fp.write('// GF2 Tools T-Doll data\n')
        fp.write('// Generated by scripts/scrape_local.py from the local game client.\n')
        fp.write('// Fields: id, name, rank, tags, intro, avatar, thumbnail, attrGroups, skills\n')
        fp.write('// skill: { name, icon, tags, subTags, levels, desc, descs, descRefs, vertebrae }\n')
        fp.write('window.TDOLL_STAT = ')
        json.dump(out, fp, ensure_ascii=False, separators=(',', ':'))
        fp.write(';\n')

    dst2 = os.path.join(ROOT, 'dat', 'term_stat.js')
    with open(dst2, 'w', encoding='utf-8', newline='\n') as fp:
        fp.write('// GF2 Tools battle dictionary / buff terms\n')
        fp.write('// Generated by scripts/scrape_local.py from the local game client.\n')
        fp.write('window.TERM_STAT = ')
        json.dump(terms, fp, ensure_ascii=False, separators=(',', ':'))
        fp.write(';\n')

    print('written', dst, dst2)


if __name__ == '__main__':
    main()
