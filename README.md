# Seragam Design System (paket portabel)

Token dan komponen React dari Figma **Seragam Dasar** (fondasi) dan **Dokumentasi Seragam Mobile 3.0** (komponen), dibaca langsung lewat Figma REST API.

## Isi
| Folder | Isi |
|---|---|
| `tokens/seragam.tokens.json` | Primitif (74), semantik (45), tipografi Desktop dan Mobile (36), elevasi 00–08, radius |
| `tokens/seragam.css` | Variabel CSS `--sd-*`, tema Tailwind v4 (`bg-sd-blue-70`, `shadow-sd-06`, …), kelas tipografi `.sd-t-desktop-body` |
| `docs/README.md` | **Titik masuk dokumentasi**: fondasi, panduan penulisan, panduan penggunaan 33 komponen, status, catatan keputusan |
| `docs/foundations/` | Warna, tipografi, elevasi dan radius, spacing |
| `docs/guidelines/` | Panduan penggunaan per komponen, panduan penulisan dan inklusivitas, pemetaan nama |
| `docs/DECISIONS.md` | Catatan keputusan desain/arsitektur |
| `docs/components/*.md` | Spesifikasi 48 halaman komponen (181 komponen): ukuran, padding, radius, warna token, teks |
| `src/` | Komponen React: Tabs, Button, Badge, Banner, Chip, Checkbox, Radio, Switch, TextField, TextArea, Modal, Toast, Select, Tooltip, Breadcrumb, Pagination, Stepper, Accordion, Avatar, Card, Link, ProgressBar, EmptyState, List, Separator, SearchBar, Popover, Slider, Expander, Rating, HeaderBar, NavigationBar, BottomSheet (sisanya ada di `docs/`) |
| `site/` | **Situs dokumentasi** (Vite): fondasi, panduan, demo hidup 32 komponen, spesifikasi Figma, Galeri. Jalankan `npm run dev` |
| `examples/Gallery.tsx` | Galeri semua komponen untuk cek visual (pasang di rute mana pun) |
| `skill/SKILL.md` | Claude Skill agar proyek lain otomatis mengikuti Seragam |
| `tools/` | `extract.py`, `render_docs.py`, `build_tokens.py` (ekstraksi dari Figma); `build_foundations.py` (fondasi dari token); `build_skill.sh` (rakit skill); `check.py` (pemeriksaan konsistensi) |

## Pasang lewat git (disarankan)
```bash
npm i github:titohnf/seragamds   # atau: pnpm add / yarn add
```
Di CSS utama proyek:
```css
@import "tailwindcss";
@import "seragam-design-system/css";
@source "../node_modules/seragam-design-system/src";
```
Pakai: `import { Button, Modal, TextField } from 'seragam-design-system'`.

## Pasang Skill Claude (sekali per mesin)
```bash
git clone https://github.com/titohnf/seragamds && cd seragamds
npm run install:skill     # merakit skill/ lalu menautkannya ke ~/.claude/skills/seragam
```

## Memakai di proyek lain (salin manual)
1. Salin `tokens/seragam.css` dan impor di CSS utama (setelah `@import "tailwindcss"`).
2. Salin `src/` ke proyek (butuh `react` dan `lucide-react`), atau pakai kelas token langsung: `bg-sd-blue-70 text-sd-gray-90 rounded-sd-sm`.
3. Salin `skill/` ke `.claude/skills/seragam/` (atau `~/.claude/skills/seragam/`).

## Catatan
- **Skala tipografi:** pakai skala Mobile di semua perangkat (body 15/22, body-small 13/20, heading-medium 18/24). Komponen di Figma hanya dibuat versi mobile, jadi desktop mengikutinya agar konsisten.
- Fondasi adalah sumber kebenaran. Dokumentasi komponen di Figma masih memakai hex lama (mis. `#0B5FEF`); di `docs/` hex lama diberi anotasi `legacy … = blue-70`.
- Mode gelap (Mode 2) belum dimasukkan. Halaman Spacing di Figma kosong.
- Memperbarui token: unduh ulang dari Figma lalu jalankan `tools/*.py` (butuh token Figma di `~/.figma_token`).

## Menjaga konsistensi
`npm run check` (Python 3, tanpa dependensi) gagal bila ada yang menyimpang: CSS tidak sama dengan token; kelas/variabel token yang dipakai kode atau dokumen tidak ada; `docs/foundations` tidak sama dengan hasil generate token; komponen yang diekspor tidak punya panduan (atau sebaliknya); tautan dokumen rusak; `skill/references` tidak sinkron. `npm run verify` menambah typecheck dan build. GitHub Action `.github/workflows/check.yml` menjalankannya di setiap push dan PR.

Alur mengubah sesuatu:
1. Token: `build_tokens.py` → `npm run build:foundations` → `npm run build:skill`.
2. Komponen/panduan: ubah `src/` dan `docs/guidelines/komponen/`, catat keputusan di `docs/DECISIONS.md`, lalu `npm run build:skill`.
3. `npm run verify` harus lulus sebelum commit.
