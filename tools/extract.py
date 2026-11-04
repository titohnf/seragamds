"""Ekstrak spesifikasi komponen Seragam dari hasil unduhan Figma (pages/*.json) menjadi spec.json."""
import json, os, sys, glob, re, collections

BASE = sys.argv[1]  # folder berisi pages/
OUT = sys.argv[2]

# hex -> nama token primitif/semantik (dibaca dari Seragam Dasar)
PRIM = {
 'F9F9F9':'gray-0','F1F1F1':'gray-5','D8D8D8':'gray-10','C7C7C7':'gray-20','ADADAD':'gray-30','9E9E9E':'gray-40','828282':'gray-50','727272':'gray-60','5E5E5E':'gray-70','505050':'gray-80','323232':'gray-90','212121':'gray-100',
 'FFF6F8':'red-0','FEEDF2':'red-5','FECACE':'red-10','FFB3B6':'red-20','FF8C8C':'red-30','FB7474':'red-40','EB4545':'red-50','DF2121':'red-60','BD1214':'red-70','A21013':'red-80','650C0F':'red-90','470909':'red-100',
 'F5FAFF':'blue-0','E6F1FF':'blue-5','BFDAFE':'blue-10','A4C9FE':'blue-20','79AFFD':'blue-30','5F9FFC':'blue-40','2A7EFB':'blue-50','0A65FC':'blue-60','0954D9':'blue-70','0746BD':'blue-80','04287E':'blue-90','021A5E':'blue-100',
 'F1FBFE':'cyan-0','E3F4FC':'cyan-5','AFDEF9':'cyan-10','8CCFF7':'cyan-20','55B6F2':'cyan-30','36A7EC':'cyan-40','0687D9':'cyan-50','0075C5':'cyan-60','0061A8':'cyan-70','005291':'cyan-80','003258':'cyan-90','05233B':'cyan-100',
 'F0FDED':'green-0','E2F5E0':'green-5','BBE2B8':'green-10','9FD49D':'green-20','77BE75':'green-30','5FB05E':'green-40','369536':'green-50','268326':'green-60','196D1A':'green-70','135D15':'green-80','0D390F':'green-90','0B270E':'green-100',
 'FFF9D4':'yellow-0','FDF2B2':'yellow-5','F7D63A':'yellow-10','FABE24':'yellow-20','FD9400':'yellow-30','E78701':'yellow-40','BF6F02':'yellow-50','A76203':'yellow-60','8B5104':'yellow-70','754504':'yellow-80','482B06':'yellow-90','311D06':'yellow-100',
 'FFFFFF':'white','000000':'black',
 'EDA62B':'border-warning','4CA375':'border-success','FFEFD6':'surface-warning','F5F5F5':'surface-subdued-alt','C9CBCF':'border-subdued-alt','D9DBDD':'border-disabled-alt',
 '9AE5B9':'badge-success','FFDFA3':'badge-warning','FFE9EA':'badge-critical','98DAFB':'badge-info','EFEFEF':'badge-neutral',
}

# Hex lama (gaya Figma lama) -> padanan token baru di fondasi
LEGACY = {'0B5FEF':'blue-70','054BCC':'blue-80','103178':'blue-90','4C8DF6':'blue-50','91BCFD':'blue-30',
 '65686C':'gray-60','808489':'gray-50','2F3031':'gray-90','45474A':'gray-80','53575A':'gray-70','1E1F1F':'gray-100',
 'C9CBCF':'gray-20','D9DBDD':'gray-10','B3B5B7':'gray-30','EFEFEF':'gray-5','EFF0F0':'gray-5',
 'E02D38':'red-60','D93640':'red-60','C82236':'red-70','2E8A5C':'green-60','35825A':'green-60',
 'ECF5FE':'blue-5','E7F6FE':'cyan-5','FEF4F4':'red-5','ECFEF2':'green-5'}
for _h,_t in LEGACY.items():
    PRIM.setdefault(_h,'legacy '+_h+' = '+_t)

def hexc(c, opacity=1.0):
    if not c: return None
    h = '%02X%02X%02X' % tuple(round(c[k]*255) for k in 'rgb')
    a = c.get('a', 1.0) * (opacity if opacity is not None else 1.0)
    return h, round(a, 2)

def paint(p):
    if p.get('visible') is False: return None
    t = p['type']
    if t == 'SOLID':
        h, a = hexc(p['color'], p.get('opacity', 1.0))
        return {'hex': '#'+h, 'token': PRIM.get(h), **({'alpha': a} if a < 1 else {})}
    if t.startswith('GRADIENT'):
        return {'gradient': [('#'+hexc(s['color'])[0]) for s in p.get('gradientStops', [])]}
    return {'type': t}

def effect(e):
    if e.get('visible') is False: return None
    r = {'type': e['type'].lower()}
    if 'offset' in e: r['x'] = e['offset']['x']; r['y'] = e['offset']['y']
    r['blur'] = e.get('radius');
    if e.get('spread'): r['spread'] = e['spread']
    if 'color' in e:
        h, a = hexc(e['color']); r['color'] = f'rgba({round(e["color"]["r"]*255)},{round(e["color"]["g"]*255)},{round(e["color"]["b"]*255)},{round(e["color"].get("a",1),2)})'
    return r

def node_spec(n, depth=0, maxdepth=4):
    s = {'name': n['name'], 'type': n['type']}
    bb = n.get('absoluteBoundingBox')
    if bb: s['size'] = [round(bb['width'], 1), round(bb['height'], 1)]
    if n.get('layoutMode') in ('HORIZONTAL', 'VERTICAL'):
        s['layout'] = n['layoutMode'].lower()
        pad = [n.get('paddingTop', 0), n.get('paddingRight', 0), n.get('paddingBottom', 0), n.get('paddingLeft', 0)]
        if any(pad): s['padding'] = pad
        if n.get('itemSpacing'): s['gap'] = n['itemSpacing']
        for k in ('primaryAxisAlignItems', 'counterAxisAlignItems'):
            if n.get(k) and n[k] not in ('MIN',): s[k] = n[k]
    if n.get('cornerRadius'): s['radius'] = n['cornerRadius']
    elif n.get('rectangleCornerRadii'): s['radius'] = n['rectangleCornerRadii']
    fills = [paint(p) for p in n.get('fills', []) if p]
    fills = [f for f in fills if f]
    if fills and n['type'] != 'TEXT': s['fill'] = fills[0] if len(fills) == 1 else fills
    strokes = [paint(p) for p in n.get('strokes', []) if p]
    strokes = [f for f in strokes if f]
    if strokes: s['stroke'] = {**strokes[0], 'weight': n.get('strokeWeight'), 'align': n.get('strokeAlign')}
    effs = [effect(e) for e in n.get('effects', [])]
    effs = [e for e in effs if e]
    if effs: s['effects'] = effs
    if n.get('opacity', 1) < 1: s['opacity'] = round(n['opacity'], 2)
    if n['type'] == 'TEXT':
        st = n.get('style', {})
        s['text'] = {'content': (n.get('characters') or '')[:60], 'font': st.get('fontFamily'), 'size': st.get('fontSize'), 'weight': st.get('fontWeight'),
                     'lineHeight': round(st.get('lineHeightPx', 0), 1) if st.get('lineHeightPx') else None,
                     **({'letterSpacing': round(st['letterSpacing'], 2)} if st.get('letterSpacing') else {}),
                     **({'case': st['textCase']} if st.get('textCase') and st['textCase'] != 'ORIGINAL' else {}),
                     **({'decoration': st['textDecoration']} if st.get('textDecoration') and st['textDecoration'] != 'NONE' else {})}
        tf = [paint(p) for p in n.get('fills', []) if p]
        tf = [f for f in tf if f]
        if tf: s['text']['color'] = tf[0]
    if depth < maxdepth and n.get('children') and n['type'] not in ('TEXT', 'VECTOR', 'BOOLEAN_OPERATION'):
        ch = [node_spec(c, depth+1, maxdepth) for c in n['children'] if c.get('visible', True)]
        if ch: s['children'] = ch
    return s

def parse_variant(name):
    props = {}
    for part in name.split(','):
        if '=' in part:
            k, v = part.split('=', 1); props[k.strip()] = v.strip()
    return props

def sample_variants(variants):
    """Satu varian default + satu varian untuk setiap nilai tiap properti (cakupan satu-faktor)."""
    chosen, seen = [], set()
    if not variants: return chosen
    chosen.append(variants[0]); seen.add(variants[0]['name'])
    first = parse_variant(variants[0]['name'])
    for key in first:
        for v in variants:
            pv = parse_variant(v['name'])
            if all(pv.get(k) == first[k] or k == key for k in first) and v['name'] not in seen:
                val = pv.get(key)
                if val and not any(parse_variant(c['name']).get(key) == val and all(parse_variant(c['name']).get(k) == first[k] or k == key for k in first) for c in chosen):
                    chosen.append(v); seen.add(v['name'])
    return chosen

spec = collections.OrderedDict()
for fn in sorted(glob.glob(os.path.join(BASE, 'pages', '*.json')), key=lambda f: json.load(open(f))['nodes'].__iter__().__next__()):
    d = json.load(open(fn))
    for nid, wrap in d['nodes'].items():
        page = wrap['document']
        pname = page['name']
        comps = []
        def walk(n):
            if n['type'] == 'COMPONENT_SET':
                comps.append(n)
            elif n['type'] == 'COMPONENT':
                comps.append(n)
            else:
                for c in n.get('children', []):
                    if c['type'] in ('COMPONENT_SET', 'COMPONENT', 'FRAME', 'GROUP', 'SECTION', 'INSTANCE'):
                        walk(c)
        for c in page.get('children', []): walk(c)
        entries = []
        for c in comps:
            if c['type'] == 'COMPONENT_SET':
                vs = [v for v in c.get('children', []) if v['type'] == 'COMPONENT']
                props = collections.OrderedDict()
                for v in vs:
                    for k, val in parse_variant(v['name']).items():
                        props.setdefault(k, [])
                        if val not in props[k]: props[k].append(val)
                entries.append({'name': c['name'], 'kind': 'set', 'description': c.get('description', ''), 'variantCount': len(vs), 'properties': props,
                                'samples': [{'variant': parse_variant(v['name']) or v['name'], 'spec': node_spec(v)} for v in sample_variants(vs)]})
            else:
                entries.append({'name': c['name'], 'kind': 'component', 'description': c.get('description', ''), 'spec': node_spec(c)})
        spec[pname] = {'pageId': page['id'], 'components': entries}
json.dump(spec, open(OUT, 'w'), ensure_ascii=False, indent=1)
print('halaman', len(spec), 'komponen', sum(len(v['components']) for v in spec.values()))
