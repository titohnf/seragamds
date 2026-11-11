"""Pemeriksaan konsistensi Seragam. Keluar 1 bila ada yang menyimpang. Hanya butuh Python 3 (tanpa dependensi).

Yang diperiksa:
 1. tokens/seragam.css sama dengan tokens/seragam.tokens.json (nilai dan alias).
 2. Kelas/variabel token yang dipakai di src/, examples/, docs/ benar-benar ada.
 3. docs/foundations (warna, tipografi, elevasi-radius) sama dengan hasil generate dari token.
 4. Setiap komponen yang diekspor src/index.ts punya halaman panduan, ada di pemetaan-nama.md dan docs/README.md;
    setiap nama kode di panduan benar-benar diekspor.
 5. Setiap halaman panduan menyebut status, dan berkas spesifikasi yang ditautkannya ada.
 6. Tautan relatif di semua .md di docs/ valid.
 7. skill/references sama dengan sumbernya (jalankan: npm run build:skill).
"""
import json, os, re, sys, filecmp
from build_foundations import build as build_foundations
from build_responsive_type import section as responsive_type_section, names as type_names, START as RT_START, END as RT_END

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
P = lambda *a: os.path.join(ROOT, *a)
errors = []
def err(msg): errors.append(msg)
def read(*a): return open(P(*a), encoding='utf-8').read()

tokens = json.loads(read('tokens', 'seragam.tokens.json'))
css = read('tokens', 'seragam.css')

# ---------- 1. CSS == JSON ----------
decl = dict(re.findall(r'^\s*(--sd-[a-z0-9-]+):\s*(.+?);\s*$', css.split('@theme')[0], re.M))
def want(name, value):
    got = decl.get(name)
    if got is None: err(f'CSS: {name} tidak ada (ada di tokens.json)')
    elif got.lower().replace(' ', '') != value.lower().replace(' ', ''):
        err(f'CSS: {name} = {got} tetapi tokens.json = {value}')
for k, v in tokens['primitive'].items(): want(f'--sd-{k}', v)
for k, v in tokens['semantic'].items(): want(f'--sd-{k}', f'var(--sd-{v})')
for k, v in tokens['fixed'].items(): want(f'--sd-{k}', v)
for k, v in tokens['elevation'].items(): want(f'--sd-elevation-{k}', v['css'])
for k, v in tokens['radius'].items(): want(f'--sd-radius-{k}', f'{v}px')
for plat, d in tokens['typography'].items():
    for k, v in d.items():
        want(f'--sd-type-{plat}-{k}-size', f"{v['size']:g}px")
        want(f'--sd-type-{plat}-{k}-line', f"{v['lineHeight']:g}px")
        want(f'--sd-type-{plat}-{k}-weight', str(v['weight']))
        if f'.sd-t-{plat}-{k} ' not in css: err(f'CSS: kelas .sd-t-{plat}-{k} tidak ada')
expected_vars = set()
for grp in ('primitive', 'semantic', 'fixed'): expected_vars |= set(tokens[grp])
theme = css.split('@theme inline', 1)[1] if '@theme inline' in css else ''
for k in expected_vars:
    if f'--color-sd-{k}:' not in theme: err(f'CSS: tema Tailwind --color-sd-{k} tidak ada')
for k in tokens['elevation']:
    if f'--shadow-sd-{k}:' not in theme: err(f'CSS: tema Tailwind --shadow-sd-{k} tidak ada')
for k in tokens['radius']:
    if f'--radius-sd-{k}:' not in theme: err(f'CSS: tema Tailwind --radius-sd-{k} tidak ada')
# variabel di css yang tidak ada di tokens.json
known = {f'--sd-{k}' for k in expected_vars} | {f'--sd-elevation-{k}' for k in tokens['elevation']} | {f'--sd-radius-{k}' for k in tokens['radius']}
for plat, d in tokens['typography'].items():
    for k in d:
        known |= {f'--sd-type-{plat}-{k}-{s}' for s in ('size', 'line', 'weight')}
TEXT_NAMES = set(type_names(tokens['typography']))
for k in TEXT_NAMES:
    known |= {f'--sd-text-{k}-{s}' for s in ('size', 'line', 'weight')}
# lapisan tipografi responsif platform harus sama dengan hasil generate dari token
if RT_START not in css or RT_END not in css: err('CSS: lapisan tipografi responsif tidak ada (jalankan: python3 tools/build_responsive_type.py)')
elif css[css.index(RT_START):css.index(RT_END) + len(RT_END)] + '\n' != responsive_type_section(tokens): err('CSS: lapisan tipografi responsif tidak sama dengan token (jalankan: python3 tools/build_responsive_type.py)')
for name in decl:
    if name not in known: err(f'CSS: {name} ada di seragam.css tetapi tidak di tokens.json (jangan sunting CSS manual)')

# ---------- 2. Token yang dipakai ada ----------
color_names = expected_vars
shadow_names = set(tokens['elevation']); radius_names = set(tokens['radius'])
UTIL = r'(?:bg|text|border|ring|fill|stroke|outline|divide|from|to|via|decoration|accent|caret|placeholder)'
re_color = re.compile(r'(?<![\w-])(?:[a-z-]+:)*' + UTIL + r'-sd-([a-z0-9-]+?)(?:/\d+)?(?=[\s"\'`\)\]\}]|$)')
re_shadow = re.compile(r'(?<![\w-])(?:[a-z-]+:)*shadow-sd-(\d+)')
re_round = re.compile(r'(?<![\w-])(?:[a-z-]+:)*rounded(?:-[a-z]{1,2})?-sd-([a-z]+)')
re_var = re.compile(r'var\(--sd-([a-z0-9-]+)\)')
re_type = re.compile(r'\bsd-t-([a-z]+)-([a-z0-9-]+)')
def scan(path, text):
    for m in re_color.finditer(text):
        n = m.group(1)
        if n not in color_names and n not in ('modal-header', 'modal-border', 'modal-footer-border'):
            if n not in color_names: err(f'{path}: kelas warna sd-{n} tidak ada di token')
    for m in re_shadow.finditer(text):
        if m.group(1) not in shadow_names: err(f'{path}: shadow-sd-{m.group(1)} tidak ada di token')
    for m in re_round.finditer(text):
        if m.group(1) not in radius_names: err(f'{path}: rounded-sd-{m.group(1)} tidak ada di token')
    for m in re_var.finditer(text):
        n = f'--sd-{m.group(1)}'
        if n not in known: err(f'{path}: var({n}) tidak ada di token')
    for m in re_type.finditer(text):
        plat, nm = m.group(1), m.group(2)
        if plat in tokens['typography']:
            if nm not in tokens['typography'][plat]: err(f'{path}: kelas sd-t-{plat}-{nm} tidak ada di token')
        elif f'{plat}-{nm}' not in TEXT_NAMES: err(f'{path}: kelas sd-t-{plat}-{nm} tidak ada di token')
for base, exts in (('src', ('.ts', '.tsx')), ('examples', ('.ts', '.tsx')), ('site', ('.ts', '.tsx', '.css')), ('docs', ('.md',))):
    for r, _, fs in os.walk(P(base)):
        for f in fs:
            if f.endswith(exts):
                fp = os.path.join(r, f)
                scan(os.path.relpath(fp, ROOT), open(fp, encoding='utf-8').read())

# Ukuran huruf komponen harus lewat token tipografi responsif (type.* / sd-t-*), bukan angka literal.
re_fs = re.compile(r"fontSize:\s*['\"]?\d|(?<![\w-])text-\[\d+(?:\.\d+)?px\]|leading-\[\d+px\]")
for f in sorted(os.listdir(P('src', 'components'))):
    for i, line in enumerate(read('src', 'components', f).splitlines(), 1):
        if re_fs.search(line) and 'sd-allow-fontsize' not in line:
            err(f'src/components/{f}:{i}: ukuran huruf literal; pakai type.* (src/tokens.ts) atau kelas sd-t-<nama> (atau beri komentar sd-allow-fontsize bila disengaja)')

# ---------- 3. Fondasi hasil generate ----------
for name, text in build_foundations().items():
    fp = P('docs', 'foundations', name)
    if not os.path.exists(fp) or open(fp, encoding='utf-8').read() != text:
        err(f'docs/foundations/{name} tidak sama dengan hasil generate token (jalankan: npm run build:foundations)')

# ---------- 4 & 5. Komponen <-> panduan ----------
exported = set()
for line in read('src', 'index.ts').splitlines():
    m = re.match(r"export \* from '\./components/(\w+)'", line)
    if not m: continue
    src = read('src', 'components', m.group(1) + '.tsx')
    for n in re.findall(r'^export (?:function|const) ([A-Z][A-Za-z0-9]*)\b', src, re.M):
        if not n.isupper(): exported.add(n)
guide_dir = P('docs', 'guidelines', 'komponen')
documented = set()
for f in sorted(os.listdir(guide_dir)):
    t = open(os.path.join(guide_dir, f), encoding='utf-8').read()
    m = re.search(r'^- Kode: `([^`]+)`', t, re.M)
    if not m: err(f'guidelines/komponen/{f}: baris "- Kode: `...`" tidak ada'); continue
    for n in [x.strip() for x in m.group(1).split(',')]:
        documented.add(n)
        if n not in exported: err(f'guidelines/komponen/{f}: komponen `{n}` tidak diekspor src/index.ts')
    if not any(x in t for x in ('Status: draf', 'Status: dari panduan Seragam', 'Status: ekstensi')): err(f'guidelines/komponen/{f}: baris "Status:" tidak ada')
    sm = re.search(r'\]\((\.\./\.\./components/[\w-]+\.md)\)', t)
    if 'Status: ekstensi' in t:
        # Ekstensi tidak punya spesifikasi Figma: spesifikasinya ada di halaman ini dan harus tertaut ke extensions.md.
        if '## Spesifikasi' not in t: err(f'guidelines/komponen/{f}: ekstensi wajib punya bagian "## Spesifikasi"')
        if '../../extensions.md' not in t: err(f'guidelines/komponen/{f}: ekstensi wajib menautkan extensions.md')
    elif not sm: err(f'guidelines/komponen/{f}: tautan spesifikasi tidak ada')
    elif not os.path.exists(os.path.normpath(os.path.join(guide_dir, sm.group(1)))): err(f'guidelines/komponen/{f}: berkas spesifikasi {sm.group(1)} tidak ada')
pemetaan = read('docs', 'guidelines', 'pemetaan-nama.md'); readme = read('docs', 'README.md')
for n in sorted(exported):
    if n not in documented: err(f'komponen `{n}` diekspor tetapi tidak punya halaman panduan di docs/guidelines/komponen/')
    if f'`{n}`' not in pemetaan and not re.search(r'`[^`]*\b' + n + r'\b[^`]*`', pemetaan): err(f'komponen `{n}` tidak ada di docs/guidelines/pemetaan-nama.md')
for f in os.listdir(guide_dir):
    if f'guidelines/komponen/{f}' not in readme: err(f'docs/README.md tidak menautkan guidelines/komponen/{f}')

# ---------- 6. Tautan relatif ----------
for r, _, fs in os.walk(P('docs')):
    for f in fs:
        if not f.endswith('.md'): continue
        t = open(os.path.join(r, f), encoding='utf-8').read()
        for m in re.finditer(r'\]\(([^)#\s]+)(?:#[^)]*)?\)', t):
            u = m.group(1)
            if re.match(r'[a-z]+:', u): continue
            if not os.path.exists(os.path.normpath(os.path.join(r, u))):
                err(f'{os.path.relpath(os.path.join(r, f), ROOT)}: tautan rusak -> {u}')

# ---------- 7. skill/references sinkron ----------
def same(a, b, label):
    if not os.path.exists(b): err(f'skill/references/{label} tidak ada (jalankan: npm run build:skill)'); return
    if os.path.isdir(a):
        cmp = filecmp.dircmp(a, b)
        def walk(c, pre=''):
            for n in c.left_only + c.right_only + c.diff_files: err(f'skill/references/{label}/{pre}{n} beda dari sumber (jalankan: npm run build:skill)')
            for s, sc in c.subdirs.items(): walk(sc, pre + s + '/')
        walk(cmp)
    elif not filecmp.cmp(a, b, shallow=False): err(f'skill/references/{label} beda dari sumber (jalankan: npm run build:skill)')
for src, dst in (('tokens/seragam.tokens.json', 'seragam.tokens.json'), ('tokens/seragam.css', 'seragam.css'), ('docs/components', 'components-spec'),
                 ('src', 'react-src'), ('docs/foundations', 'foundations'), ('docs/guidelines', 'guidelines'),
                 ('docs/extensions.md', 'extensions.md'), ('docs/DECISIONS.md', 'DECISIONS.md')):
    same(P(src), P('skill', 'references', dst), dst)

# ---------- hasil ----------
if errors:
    print(f'{len(errors)} masalah:'); [print(' -', e) for e in errors]; sys.exit(1)
print(f'OK: token ({len(expected_vars)} warna, {len(tokens["elevation"])} elevasi, {len(tokens["radius"])} radius), {len(exported)} komponen, {len(documented)} nama terdokumentasi, fondasi, tautan, skill sinkron.')
