---
name: seragam
description: Terapkan Design System Seragam (GovTech Kemendikdasmen) saat membuat atau mengubah UI. Gunakan setiap kali membuat halaman, komponen, warna, tipografi, tabel, modal, tab, tombol, badge, atau banner, atau saat pengguna menyebut Seragam atau desain sistem.
---

# Seragam Design System

Sumber kebenaran (folder `references/` di samping berkas ini): `references/seragam.tokens.json` dan `references/seragam.css` (token), `references/components-spec/<nama>.md` (spesifikasi tiap komponen dari Figma), `references/react-src/` (kode komponen React siap salin).

Untuk proyek baru: salin `references/seragam.css` ke proyek dan impor setelah `@import "tailwindcss"`; salin komponen yang dibutuhkan dari `references/react-src/components/` beserta `tokens.ts`. Di proyek yang memasang paket `seragam-design-system`, impor dari paket itu dan tambahkan `@source "../node_modules/seragam-design-system/src";` di CSS agar Tailwind memindai kelasnya.

## Aturan
1. **Jangan menulis hex langsung.** Pakai kelas token: `text-sd-gray-90` (teks), `text-sd-gray-60` (teks sekunder), `text-sd-blue-70` (aksi/tautan), `border-sd-gray-50`, `bg-sd-gray-0` (latar halaman), `bg-sd-blue-5` (terpilih).
2. **Tipografi** Inter, skala **MOBILE di semua perangkat** (komponen DS hanya ada versi mobile): body 15/22, body-small 13/20, action 15/22 semibold, helper 12/16, heading-medium 18/24, heading-large 22/28, display-small 24/28. Jangan pakai skala Desktop (16/24, 14/20) dan jangan pakai ukuran di luar skala.
3. **Radius**: kontrol 4px, kartu 8px, badge pill. **Bayangan**: Elevation 01 kartu, 06 modal.
4. **Komponen**: sebelum membuat komponen, baca `references/components-spec/<nama>.md` dan ikuti ukuran, padding, gap, dan token warnanya. Pakai komponen di `src/` bila ada (Tabs, Button, Badge, Banner, Chip, Checkbox, Radio, Switch, TextField, TextArea, Modal, Toast, Select, Tooltip, Breadcrumb, Pagination, Stepper, Accordion, Avatar, Card, Link, ProgressBar, EmptyState, List, Separator, SearchBar, Popover, Slider, Expander, Rating, HeaderBar, NavigationBar, BottomSheet).
5. Hex lama di Figma (`#0B5FEF`, `#65686C`, `#2F3031`) = token baru (`blue-70`, `gray-60`, `gray-90`); selalu pakai token baru.
6. Pastikan kontras teks minimal WCAG AA (teks sekunder pakai `gray-60`, bukan lebih pucat).
7. Button: pakai `variant` ultimate (aksi utama, biru), primary (hitam), secondary (outline), quiet (teks), destructive (merah solid), atau `destructive-secondary` (outline merah, ekstensi untuk Tolak/Hapus). Jangan menulis kelas tombol sendiri.
8. Tabel: header 13/16 semibold kapital, sel 15/22. Kolom Aksi: ≤2 tombol tampil langsung, >2 masuk menu ⋮.
