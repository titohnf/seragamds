# Seragam Design System (paket portabel)

Token dan komponen React dari Figma **Seragam Dasar** (fondasi) dan **Dokumentasi Seragam Mobile 3.0** (komponen), dibaca langsung lewat Figma REST API.

## Isi
| Folder | Isi |
|---|---|
| `tokens/seragam.tokens.json` | Primitif (74), semantik (45), tipografi Desktop dan Mobile (36), elevasi 00–08, radius |
| `tokens/seragam.css` | Variabel CSS `--sd-*`, tema Tailwind v4 (`bg-sd-blue-70`, `shadow-sd-06`, …), kelas tipografi `.sd-t-desktop-body` |
| `docs/README.md` | **Titik masuk dokumentasi**: fondasi, panduan penulisan, panduan penggunaan 34 komponen, status, catatan keputusan |
| `docs/foundations/` | Warna, tipografi, elevasi dan radius, spacing |
| `docs/guidelines/` | Panduan penggunaan per komponen, panduan penulisan dan inklusivitas, pemetaan nama |
| `docs/DECISIONS.md` | Catatan keputusan desain/arsitektur |
| `CHANGELOG.md` | Riwayat versi; proyek mengunci ke tag (`#v0.7.0`) |
| `docs/components/*.md` | Spesifikasi 48 halaman komponen (181 komponen): ukuran, padding, radius, warna token, teks |
| `src/` | Komponen React: Tabs, Table, Button, Badge, Banner, Chip, Checkbox, Radio, Switch, TextField, TextArea, Modal, Toast, Select, Tooltip, Breadcrumb, Pagination, Stepper, Accordion, Avatar, Card, Link, ProgressBar, EmptyState, List, Separator, SearchBar, Popover, Slider, Expander, Rating, HeaderBar, NavigationBar, BottomSheet (sisanya ada di `docs/`) |
| `site/` | **Situs dokumentasi** (Vite): fondasi, panduan, demo hidup 33 komponen, spesifikasi Figma, Galeri. Jalankan `npm run dev` |
| `examples/Gallery.tsx` | Galeri semua komponen untuk cek visual (pasang di rute mana pun) |
| `skill/SKILL.md` | Claude Skill agar proyek lain otomatis mengikuti Seragam |
| `skill-illustration/` | Claude Skill `seragam-illustration`: membuat ilustrasi SVG (Spot, Empty State, Hero) sesuai panduan ilustrasi, dengan palet terkunci, contoh, validator, dan pratinjau. Mandiri; tidak dirakit oleh `build:skill` |
| `lib/`, `pkg/` | Hasil `npm run build:lib` dan `npm run pack:release` (tidak di-commit): paket siap pakai dan tarball rilis |
| `tools/` | `make-package.mjs` (rakit paket), `smoke-package.mjs` (uji asap paket), `release_notes.py`; `extract.py`, `render_docs.py`, `build_tokens.py` (ekstraksi dari Figma); `build_foundations.py` (fondasi dari token); `build_skill.sh` (rakit skill); `check.py` (pemeriksaan konsistensi) |

## Pasang paket siap pakai (disarankan untuk proyek baru)
Setiap tag `vX.Y.Z` melampirkan `seragam-design-system-X.Y.Z.tgz` di [GitHub Releases](https://github.com/titohnf/seragamds/releases): JS (ESM, React dan lucide-react sebagai peer), tipe TypeScript, dan CSS jadi.
```bash
npm i https://github.com/titohnf/seragamds/releases/download/v0.18.0/seragam-design-system-0.18.0.tgz react lucide-react
```
**Tanpa Tailwind** (cukup satu impor; memuat reset, utilitas yang dipakai komponen, dan token):
```ts
import 'seragam-design-system/styles.css';
import { Button, TextField } from 'seragam-design-system';
```
**Dengan Tailwind v4** (token saja; kelas komponen dipindai dari paket):
```css
@import "tailwindcss";
@import "seragam-design-system/css";
@source "../node_modules/seragam-design-system/lib";
```
Atur skala huruf dengan `data-sd-platform="auto|mobile|desktop"` di `<html>` (lihat [Platform](docs/guidelines/komponen/platform.md)). Pindah antarversi: [docs/MIGRASI.md](docs/MIGRASI.md). Belum terbit di npm (lisensi belum ditetapkan).

## Pasang lewat git (dari sumber)
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
- **Skala tipografi:** satu komponen, dua skala. Mobile di layar kecil (body 15/22, body-small 13/20, heading-medium 18/24) dan Desktop di layar lebar (16/24, 14/20, 19/24), dipilih atribut `data-sd-platform` (`auto` bawaan: Desktop mulai 1024px; `desktop`; `mobile`) atau komponen `Platform`. Di kode pakai `typo.*` atau kelas `sd-t-<nama>`, jangan angka. Lihat `docs/foundations/tipografi.md`.
- Fondasi adalah sumber kebenaran. Dokumentasi komponen di Figma masih memakai hex lama (mis. `#0B5FEF`); di `docs/` hex lama diberi anotasi `legacy … = blue-70`.
- Mode gelap (Mode 2) belum dimasukkan. Halaman Spacing di Figma kosong.
- Memperbarui token: unduh ulang dari Figma lalu jalankan `tools/*.py` (butuh token Figma di `~/.figma_token`).

## Menjaga konsistensi
`npm run check` (Python 3, tanpa dependensi) gagal bila ada yang menyimpang: CSS tidak sama dengan token; kelas/variabel token yang dipakai kode atau dokumen tidak ada; `docs/foundations` tidak sama dengan hasil generate token; komponen yang diekspor tidak punya panduan (atau sebaliknya); tautan dokumen rusak; `skill/references` tidak sinkron. `npm run verify` menambah typecheck dan build. GitHub Action `.github/workflows/check.yml` menjalankannya di setiap push dan PR.

### Tes otomatis
`npm run test:e2e` (Playwright; lokal Chromium memakai Google Chrome yang terpasang, Firefox/WebKit lewat `npx playwright install firefox webkit`; CI memasang ketiganya) menjalankan tes di `tests/e2e/` terhadap galeri situs, lintas peramban dan perangkat (proyek `desktop` Chromium, `firefox`, `webkit`, `mobile` Pixel 7 dan `iphone` dengan sentuhan):
- `a11y.spec.ts` (hanya Chromium): axe (WCAG 2.1 A/AA) pada demo **setiap** komponen, dalam skala Mobile dan Desktop. Komponen baru otomatis ikut bila punya demo di `site/demos.tsx`.
- `behavior.spec.ts`: perilaku sesuai panduan dengan keyboard dan mouse sungguhan (Tabs, Modal, Bottom Sheet, Popover, Toast, Breadcrumb, Accordion, Chip, Banner, Button, Custom Select, Table, TextArea, SearchBar, Navigation Bar, Vertical Navigation).
- `popup.spec.ts`: popup tahan tepi layar dan wadah `overflow-hidden` (Popover, Custom Select, Date Picker, menu "Lainnya", Tooltip).
- `mobile.spec.ts`: halaman komponen tanpa gulir horizontal di 360px, tap, target sentuh ≥44px, dan geser dengan sentuhan sungguhan.
- `platform.spec.ts`: satu komponen dua skala huruf (Mobile 15/22 dan tinggi 46; Desktop 16/24 dan tinggi 48; mode Otomatis mengikuti lebar layar).

`npm run smoke:hydration` merender komponen di server lalu menghidrasinya di jsdom dengan `matchMedia` dipaksa berbeda, untuk menangkap ketidakcocokan HTML server/klien (penting bagi pemakai Next.js).

`npm run check` juga memeriksa **kontras warna** pasangan teks/latar yang dipakai komponen (`tools/contrast.py`; teks gray-50/40 hanya untuk keadaan nonaktif) dan **sinkron props** antara kode dan panduan (`tools/props_sync.py`: setiap prop publik harus disebut di panduannya dan sebaliknya).
Saat menambah komponen: tambahkan demo di `site/demos.tsx` (otomatis kena tes aksesibilitas), tes perilaku di `behavior.spec.ts` bila ada interaksi, dan pasangan warna baru di `tools/contrast.py`.

Alur mengubah sesuatu:
1. Token: `build_tokens.py` → `npm run build:foundations` → `npm run build:skill`.
2. Komponen/panduan: ubah `src/` dan `docs/guidelines/komponen/`, catat keputusan di `docs/DECISIONS.md`, lalu `npm run build:skill`.
3. `npm run verify` (check, typecheck, build, dan tes e2e) harus lulus sebelum commit.

Panduan kontribusi lengkap (komponen baru, versi, deprecation): [CONTRIBUTING.md](CONTRIBUTING.md). Butir yang menunggu tim desain: [docs/PERLU-KEPUTUSAN-DESAIN.md](docs/PERLU-KEPUTUSAN-DESAIN.md).
