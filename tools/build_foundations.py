"""Hasilkan docs/foundations/{warna,tipografi,elevasi-radius}.md dari tokens/seragam.tokens.json.
spacing.md ditulis manual. Pakai --check untuk memastikan berkas di repo sama dengan hasil generate (keluar 1 bila beda)."""
import json, re, os, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.path.join(ROOT, 'docs', 'foundations')

def fam(n): return n.rsplit('-', 1)[0] if re.search(r'-\d+$', n) else n

def warna(d):
    P, S, F = d['primitive'], d['semantic'], d['fixed']
    L = ["# Warna", "", "Sumber: Figma *Seragam Dasar* (token `tokens/seragam.tokens.json`, variabel CSS `tokens/seragam.css`). **Jangan menulis hex langsung**: pakai kelas token (`bg-sd-blue-70`, `text-sd-gray-90`, `border-sd-gray-50`).", "",
         "> Berkas ini dihasilkan oleh `tools/build_foundations.py`. Jangan sunting manual; ubah token lalu jalankan ulang.", "",
         "## Aturan cepat", "- Teks utama `gray-90`, teks sekunder `gray-60` (kontras minimal WCAG AA; jangan lebih pucat).",
         "- Aksi dan tautan `blue-70`. Terpilih `blue-5`. Latar halaman `gray-0`.",
         "- Hex lama di Figma (`#0B5FEF`, `#65686C`, `#2F3031`) sudah digantikan: `blue-70`, `gray-60`, `gray-90`.",
         "- Mode gelap belum dimasukkan.", "", "## Primitif", ""]
    fams = {}
    for k, v in P.items(): fams.setdefault(fam(k), []).append((k, v))
    for f, items in fams.items():
        L += [f"### {f}", "", "| Token | Hex | Kelas |", "|---|---|---|"]
        for k, v in items: L.append(f"| `{k}` | `{v}` | `bg-sd-{k}` · `text-sd-{k}` |")
        L.append("")
    L += ["## Semantik", "", "Alias bermakna yang menunjuk ke primitif. Variabel CSS: `var(--sd-<nama>)`.", "", "| Token | Menunjuk ke |", "|---|---|"]
    for k, v in S.items(): L.append(f"| `{k}` | `{v}` |")
    L += ["", "## Tetap (fixed)", "", "Nilai hex tetap yang tidak berasal dari primitif.", "", "| Token | Hex |", "|---|---|"]
    for k, v in F.items(): L.append(f"| `{k}` | `{v}` |")
    return "\n".join(L) + "\n"

def tipografi(d):
    T = d['typography']
    row = lambda n, t: f"| `{n}` | {t['size']:g}/{t['lineHeight']:g} | {t['weight']} | {t['letterSpacing']:g} | {t['textCase'] or '-'} |"
    head = ["| Nama | Ukuran/baris (px) | Berat | Jarak huruf | Huruf |", "|---|---|---|---|---|"]
    L = ["# Tipografi", "", "Font: **Inter**. Sumber: token `typography` (Figma *Seragam Dasar*).", "",
         "> Berkas ini dihasilkan oleh `tools/build_foundations.py`. Jangan sunting manual.", "",
         "## Keputusan: pakai skala Mobile di semua perangkat",
         "Komponen di Figma hanya dibuat versi mobile, jadi **skala Mobile dipakai di semua perangkat** (body 15/22, body-small 13/20, action 15/22 semibold, heading-medium 18/24). Jangan memakai skala Desktop (16/24, 14/20) dan jangan memakai ukuran di luar skala. Lihat [DECISIONS](../DECISIONS.md).", "",
         "Kelas CSS: `.sd-t-mobile-<nama>` (dan `.sd-t-desktop-<nama>` bila perlu).", "", "## Skala Mobile (dipakai)", ""] + head
    for n, t in sorted(T['mobile'].items(), key=lambda x: -x[1]['size']): L.append(row(n, t))
    L += ["", "## Skala Desktop (referensi, tidak dipakai)", ""] + head
    for n, t in sorted(T['desktop'].items(), key=lambda x: -x[1]['size']): L.append(row(n, t))
    return "\n".join(L) + "\n"

def elevasi(d):
    L = ["# Elevasi dan radius", "", "> Berkas ini dihasilkan oleh `tools/build_foundations.py`. Jangan sunting manual.", "", "## Elevasi", "",
         "Kelas: `shadow-sd-00` … `shadow-sd-08`. Pakai elevasi 01 untuk kartu, 06 untuk modal.", "", "| Level | Kegunaan | CSS |", "|---|---|---|"]
    for k, v in d['elevation'].items(): L.append(f"| `{k}` | {v['use']} | `{v['css']}` |")
    L += ["", "## Radius", "", "Kelas: `rounded-sd-sm` dst. Kontrol 4px, kartu 8px, badge pill.", "", "| Token | px |", "|---|---|"]
    for k, v in d['radius'].items(): L.append(f"| `{k}` | {v} |")
    return "\n".join(L) + "\n"

def build():
    d = json.load(open(os.path.join(ROOT, 'tokens', 'seragam.tokens.json')))
    return {'warna.md': warna(d), 'tipografi.md': tipografi(d), 'elevasi-radius.md': elevasi(d)}

if __name__ == '__main__':
    files = build(); bad = 0
    for name, text in files.items():
        p = os.path.join(OUT, name)
        if '--check' in sys.argv:
            if not os.path.exists(p) or open(p).read() != text:
                print(f'BEDA: docs/foundations/{name} tidak sama dengan hasil generate (jalankan: npm run build:foundations)'); bad += 1
        else:
            open(p, 'w').write(text); print('tulis', name)
    sys.exit(1 if bad else 0)
