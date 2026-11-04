# Seragam Design System (paket portabel)

Token dan komponen React dari Figma **Seragam Dasar** (fondasi) dan **Dokumentasi Seragam Mobile 3.0** (komponen), dibaca langsung lewat Figma REST API.

## Isi
| Folder | Isi |
|---|---|
| `tokens/seragam.tokens.json` | Primitif (74), semantik (45), tipografi Desktop dan Mobile (36), elevasi 00–08, radius |
| `tokens/seragam.css` | Variabel CSS `--sd-*`, tema Tailwind v4 (`bg-sd-blue-70`, `shadow-sd-06`, …), kelas tipografi `.sd-t-desktop-body` |
| `docs/components/*.md` | Spesifikasi 48 halaman komponen (181 komponen): ukuran, padding, radius, warna token, teks |
| `src/` | Komponen React: Tabs, Button, Badge, Banner, Chip, Checkbox, Radio, Switch, TextField, TextArea, Modal, Toast, Select, Tooltip, Breadcrumb, Pagination, Stepper, Accordion, Avatar, Card, Link, ProgressBar, EmptyState, List, Separator, SearchBar, Popover, Slider, Expander, Rating, HeaderBar, NavigationBar, BottomSheet (sisanya ada di `docs/`) |
| `examples/Gallery.tsx` | Galeri semua komponen untuk cek visual (pasang di rute mana pun) |
| `skill/SKILL.md` | Claude Skill agar proyek lain otomatis mengikuti Seragam |
| `tools/` | Skrip ekstraksi: `extract.py`, `render_docs.py`, `build_tokens.py` |

## Memakai di proyek lain
1. Salin `tokens/seragam.css` dan impor di CSS utama (setelah `@import "tailwindcss"`).
2. Salin `src/` ke proyek (butuh `react` dan `lucide-react`), atau pakai kelas token langsung: `bg-sd-blue-70 text-sd-gray-90 rounded-sd-sm`.
3. Salin `skill/` ke `.claude/skills/seragam/` (atau `~/.claude/skills/seragam/`).

## Catatan
- Fondasi adalah sumber kebenaran. Dokumentasi komponen di Figma masih memakai hex lama (mis. `#0B5FEF`); di `docs/` hex lama diberi anotasi `legacy … = blue-70`.
- Mode gelap (Mode 2) belum dimasukkan. Halaman Spacing di Figma kosong.
- Memperbarui token: unduh ulang dari Figma lalu jalankan `tools/*.py` (butuh token Figma di `~/.figma_token`).
