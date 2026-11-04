"""Ubah spec.json menjadi dokumentasi Markdown per komponen."""
import json, os, re, sys, collections

SPEC, OUT = sys.argv[1], sys.argv[2]
spec = json.load(open(SPEC))
os.makedirs(OUT, exist_ok=True)

def slug(s):
    s = re.sub(r'^->\s*', '', s.strip())
    s = re.sub(r'\(.*?\)', '', s).strip()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def tok(c):
    if not c: return ''
    if 'hex' in c:
        t = c.get('token')
        a = f" @{int(c['alpha']*100)}%" if c.get('alpha') else ''
        return f"{t} ({c['hex']}){a}" if t else f"{c['hex']}{a}"
    if 'gradient' in c: return 'gradient ' + '>'.join(c['gradient'])
    return str(c)

def fills(f):
    if f is None: return ''
    if isinstance(f, list): return ' / '.join(tok(x) for x in f)
    return tok(f)

def pad(p):
    if not p: return ''
    t, r, b, l = p
    if t == b and l == r: return f"{t}" if t == l else f"{t} {l}"
    return f"{t} {r} {b} {l}"

def txt(t):
    parts = [f"{t.get('font') or ''} {t.get('size')}/{t.get('lineHeight')} w{t.get('weight')}"]
    if t.get('case'): parts.append(t['case'].lower())
    if t.get('letterSpacing'): parts.append(f"ls {t['letterSpacing']}")
    if t.get('decoration'): parts.append(t['decoration'].lower())
    if t.get('color'): parts.append(tok(t['color']))
    return ' '.join(parts)

def collect(n, path, out, depth=0):
    """Kumpulkan elemen bermakna: teks, ikon, dan frame ber-style."""
    name = n.get('name', '')
    here = path + [name] if depth else path
    if n.get('type') == 'TEXT' and n.get('text'):
        out.append(('text', '/'.join(here), n['text'].get('content', ''), txt(n['text'])))
    elif depth and n.get('type') in ('FRAME', 'INSTANCE', 'COMPONENT', 'RECTANGLE', 'ELLIPSE', 'GROUP'):
        bits = []
        if n.get('size'): bits.append(f"{n['size'][0]}x{n['size'][1]}")
        if n.get('padding'): bits.append('pad ' + pad(n['padding']))
        if n.get('gap'): bits.append(f"gap {n['gap']}")
        if n.get('radius'): bits.append(f"radius {n['radius']}")
        if n.get('fill'): bits.append('fill ' + fills(n['fill']))
        if n.get('stroke'): bits.append(f"stroke {tok(n['stroke'])} {n['stroke'].get('weight')}px")
        if n.get('effects'): bits.append('shadow ' + ', '.join(f"{e.get('x',0)} {e.get('y',0)} {e.get('blur')} {e.get('spread',0)} {e.get('color','')}" for e in n['effects'] if e['type'].endswith('shadow')))
        if bits and (n.get('fill') or n.get('stroke') or n.get('radius') or n.get('padding') or n.get('effects')):
            out.append(('box', '/'.join(here), '', '; '.join(bits)))
    for c in n.get('children', []) or []:
        collect(c, here, out, depth + 1)

def root_line(s):
    bits = []
    if s.get('size'): bits.append(f"ukuran {s['size'][0]}x{s['size'][1]}")
    if s.get('layout'): bits.append(f"layout {s['layout']}")
    if s.get('padding'): bits.append('padding ' + pad(s['padding']))
    if s.get('gap'): bits.append(f"gap {s['gap']}")
    if s.get('radius'): bits.append(f"radius {s['radius']}")
    if s.get('fill'): bits.append('fill ' + fills(s['fill']))
    if s.get('stroke'): bits.append(f"stroke {tok(s['stroke'])} {s['stroke'].get('weight')}px {str(s['stroke'].get('align') or '').lower()}")
    if s.get('effects'):
        bits.append('shadow ' + ' | '.join(f"{e.get('x',0)}px {e.get('y',0)}px {e.get('blur')}px {e.get('spread',0)}px {e.get('color','')}" for e in s['effects'] if e['type'].endswith('shadow')))
    return '; '.join(bits)

def vlabel(v):
    if isinstance(v, dict): return ', '.join(f"{k}={x}" for k, x in v.items())
    return str(v)

index = []
files = collections.OrderedDict()
for page, info in spec.items():
    comps = info['components']
    if not comps: continue
    base = slug(page)
    responsive = page.strip().startswith('->')
    md = files.setdefault(base, {'title': re.sub(r'^->\s*', '', page.strip()), 'pid': info['pageId'], 'parts': []})
    for c in comps:
        md['parts'].append(('Responsif (desktop/tablet/mobile)' if responsive else 'Dokumentasi', c))

for base, f in files.items():
    L = [f"# {f['title']}", '', f"Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `{f['title']}` (node `{f['pid']}`).", '']
    seen = set()
    for src, c in f['parts']:
        key = (c['name'], c.get('variantCount'))
        if key in seen: continue
        seen.add(key)
        L.append(f"## {c['name']}")
        if c.get('description'): L += ['', c['description'].strip()]
        if c['kind'] == 'set':
            L += ['', f"{c['variantCount']} varian. Properti:"]
            for k, vals in c['properties'].items():
                L.append(f"- **{k}**: {', '.join(vals)}")
            L += ['', 'Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):', '']
            for s in c['samples']:
                L.append(f"### {vlabel(s['variant'])}")
                L.append(f"- Root: {root_line(s['spec'])}")
                items = []
                collect(s['spec'], [], items)
                shown = 0
                for kind, path, content, desc in items:
                    if shown >= 14: L.append('- …'); break
                    if kind == 'text': L.append(f"- Teks `{path}` \"{content}\": {desc}")
                    else: L.append(f"- `{path}`: {desc}")
                    shown += 1
                L.append('')
        else:
            L += ['', f"- Root: {root_line(c['spec'])}"]
            items = []
            collect(c['spec'], [], items)
            for kind, path, content, desc in items[:14]:
                L.append(f"- Teks `{path}` \"{content}\": {desc}" if kind == 'text' else f"- `{path}`: {desc}")
            L.append('')
    open(os.path.join(OUT, base + '.md'), 'w').write('\n'.join(L))
    index.append((base, f['title'], sum(1 for _ in f['parts'])))
print(len(index), 'berkas komponen')
json.dump([(b, t) for b, t, _ in index], open(os.path.join(OUT, '_index.json'), 'w'))
