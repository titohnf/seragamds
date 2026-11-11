"""Lapisan tipografi responsif platform: variabel --sd-text-<nama>-{size,line,weight} dan kelas .sd-t-<nama>.

Nilainya menunjuk ke token --sd-type-<platform>-* (sumber: tokens/seragam.tokens.json), jadi tidak ada angka baru.
Platform dipilih dengan atribut data-sd-platform pada elemen mana pun (`mobile` | `desktop` | `auto`, bawaan auto):
  auto    = skala Mobile, berganti ke Desktop mulai lebar viewport 1024px
  desktop = selalu skala Desktop (produk web desktop)
  mobile  = selalu skala Mobile
Nama yang hanya ada di satu platform (headline*, bodylarge = Desktop; eyebrow* = Mobile) dipakai di kedua platform.

Dipanggil dari build_tokens.py; juga bisa dijalankan sendiri untuk menyegarkan seragam.css dari tokens.json:
  python3 tools/build_responsive_type.py
"""
import json, os

START = '/* sd-responsive-type:start (dihasilkan tools/build_responsive_type.py; jangan sunting manual) */'
END = '/* sd-responsive-type:end */'
BREAKPOINT = 1024
HERE = os.path.dirname(os.path.abspath(__file__))

def names(typo):
    """Nama tipografi gabungan, urut tetap."""
    return sorted(set(typo['mobile']) | set(typo['desktop']))

def source(typo, plat, name):
    """Platform sumber untuk `name`: platform itu sendiri bila ada, jika tidak platform lain."""
    return plat if name in typo[plat] else ('desktop' if plat == 'mobile' else 'mobile')

def block(typo, plat, names_):
    return '\n'.join(f'  --sd-text-{n}-{s}: var(--sd-type-{source(typo, plat, n)}-{n}-{s});' for n in names_ for s in ('size', 'line', 'weight'))

def section(tokens):
    typo = tokens['typography']; ns = names(typo)
    L = [START,
         '/* Tipografi responsif platform. Pakai .sd-t-<nama> atau var(--sd-text-<nama>-size|line|weight). */',
         ':root {', block(typo, 'mobile', ns), '}',
         f'@media (min-width: {BREAKPOINT}px) {{', '  :root:not([data-sd-platform]), [data-sd-platform="auto"] {',
         block(typo, 'desktop', ns).replace('\n  ', '\n    ').replace('  --', '    --', 1), '  }', '}',
         '[data-sd-platform="mobile"] {', block(typo, 'mobile', ns), '}',
         '[data-sd-platform="desktop"] {', block(typo, 'desktop', ns), '}']
    for n in ns:
        t = (typo['mobile'].get(n) or typo['desktop'][n])
        tc = f' text-transform:{"uppercase" if t["textCase"] == "upper" else t["textCase"]};' if t.get('textCase') else ''
        ls = f' letter-spacing:{t["letterSpacing"]:g}px;' if t.get('letterSpacing') else ''
        L.append(f'.sd-t-{n} {{ font-family:Inter,system-ui,sans-serif; font-size:var(--sd-text-{n}-size); line-height:var(--sd-text-{n}-line); font-weight:var(--sd-text-{n}-weight);{tc}{ls} }}')
    L.append(END)
    return '\n'.join(L) + '\n'

def patch(css_path=None, tokens_path=None):
    css_path = css_path or os.path.join(HERE, '..', 'tokens', 'seragam.css')
    tokens_path = tokens_path or os.path.join(HERE, '..', 'tokens', 'seragam.tokens.json')
    css = open(css_path, encoding='utf-8').read()
    sec = section(json.load(open(tokens_path, encoding='utf-8')))
    if START in css:
        a, b = css.index(START), css.index(END) + len(END)
        css = css[:a].rstrip('\n') + '\n\n' + sec + css[b:].lstrip('\n')
    else:
        css = css.rstrip('\n') + '\n\n' + sec
    open(css_path, 'w', encoding='utf-8').write(css)

if __name__ == '__main__':
    patch(); print('seragam.css: lapisan tipografi responsif diperbarui')
