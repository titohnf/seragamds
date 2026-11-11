"""Sinkron props: setiap prop publik komponen di src/components harus disebut di halaman panduannya, dan sebaliknya
nama di baris "Props ..." panduan harus benar-benar ada di kode.

Props dibaca dari destrukturisasi parameter pertama komponen (tanpa compiler TypeScript, karena TS 7 native tidak punya API JS):
  export function Nama({ a, b = 1, 'aria-label': x, ...rest }: {...})
  export const Nama = forwardRef<...>(({ a, b, ...rest }, ref) => ...)
"""
import os, re

# Props yang tidak perlu disebut satu per satu di panduan.
IGNORE = {'className', 'children', 'style', 'key', 'ref', 'onInput', 'onKeyDown'}

def _balanced(text, start, open_ch='{', close_ch='}'):
    depth = 0
    for i in range(start, len(text)):
        c = text[i]
        if c == open_ch: depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0: return i
    return -1

def _split_top(body):
    parts, depth, cur, quote = [], 0, '', None
    for c in body:
        if quote:
            cur += c
            if c == quote: quote = None
            continue
        if c in '\'"`': quote = c; cur += c; continue
        if c in '([{<': depth += 1
        elif c in ')]}>': depth -= 1
        if c == ',' and depth == 0: parts.append(cur); cur = ''
        else: cur += c
    if cur.strip(): parts.append(cur)
    return parts

def component_props(src_text):
    """{NamaKomponen: set(props)} dari satu berkas .tsx."""
    out = {}
    for m in re.finditer(r'^export (?:function|const) ([A-Z][A-Za-z0-9]*)\b', src_text, re.M):
        name = m.group(1)
        if name.isupper(): continue
        rest = src_text[m.end():m.end() + 1500]
        # parameter pertama berupa destrukturisasi: "({" pada function, atau "(\n  ({" pada forwardRef
        pm = re.search(r'\(\s*\{', rest) if rest.lstrip().startswith(('(', '<', '=')) else None
        if not pm: continue
        # lewati kurung generik/forwardRef: cari "({" pertama yang membuka parameter komponen
        idx = m.end() + pm.end() - 1
        end = _balanced(src_text, idx)
        if end < 0: continue
        props = set()
        for part in _split_top(src_text[idx + 1:end]):
            part = part.strip()
            if not part or part.startswith('...'): continue
            key = re.split(r'[=:]', part, 1)[0].strip().strip('\'"')
            if re.fullmatch(r"[A-Za-z_][\w-]*", key): props.add(key)
        if props: out[name] = props
    return out

def load_code_props(root):
    d = os.path.join(root, 'src', 'components'); res = {}
    for f in sorted(os.listdir(d)):
        if f.endswith('.tsx'): res.update(component_props(open(os.path.join(d, f), encoding='utf-8').read()))
    return res

def _first_tokens_of_props_line(line):
    """Dari baris "Props ...: `a` (..), `b`, ..." ambil nama prop pertama tiap segmen tingkat atas."""
    body = line.split(':', 1)[1] if ':' in line else line
    segs, cur, in_bt, depth = [], '', False, 0
    for c in body:
        if c == '`': in_bt = not in_bt
        elif not in_bt:
            if c == '(': depth += 1
            elif c == ')': depth -= 1
        if c == ',' and not in_bt and depth == 0: segs.append(cur); cur = ''
        else: cur += c
    segs.append(cur)
    names = []
    for s in segs:
        m = re.search(r'`([^`]+)`', s)
        if m and re.fullmatch(r'[a-z][A-Za-z0-9]*(?:-[a-z]+)*', m.group(1)): names.append(m.group(1))
    return names

def check_page(page_text, comp_names, code_props, err, label):
    page_text = re.sub(r'```.*?```', '', page_text, flags=re.S)  # blok kode berpagar merusak pencocokan backtick
    own = set()
    for n in comp_names: own |= code_props.get(n, set())
    if not own: return
    ids = set()
    for tok in re.findall(r'`([^`]+)`', page_text): ids |= set(re.findall(r"[A-Za-z][\w-]*", tok))
    for p in sorted(own - IGNORE):
        if p not in ids: err(f'{label}: prop `{p}` ada di kode ({"/".join(sorted(comp_names))}) tetapi tidak disebut di panduan')
    for line in page_text.splitlines():
        if re.match(r'^Props\b', line):
            for n in _first_tokens_of_props_line(line):
                if n not in own and n not in IGNORE and not n.startswith('aria-'): err(f'{label}: prop `{n}` disebut di panduan tetapi tidak ada di kode ({"/".join(sorted(comp_names))})')
