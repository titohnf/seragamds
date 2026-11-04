---
name: seragam
description: Terapkan Design System Seragam (GovTech Kemendikdasmen) saat membuat atau mengubah UI. Gunakan setiap kali membuat halaman, komponen, warna, tipografi, tabel, modal, tab, tombol, badge, atau banner, atau saat pengguna menyebut Seragam atau desain sistem.
---

# Seragam Design System

Sumber kebenaran: `tokens/seragam.tokens.json` dan `tokens/seragam.css` di paket ini; spesifikasi komponen di `docs/components/<nama>.md`.

## Aturan
1. **Jangan menulis hex langsung.** Pakai kelas token: `text-sd-gray-90` (teks), `text-sd-gray-60` (teks sekunder), `text-sd-blue-70` (aksi/tautan), `border-sd-gray-50`, `bg-sd-gray-0` (latar halaman), `bg-sd-blue-5` (terpilih).
2. **Tipografi** Inter, skala Desktop: heading-large 22/28, heading-medium 19/24, body 16/24, body-small 14/20, helper 12/16, action 16/24 (600). Jangan pakai ukuran di luar skala.
3. **Radius**: kontrol 4px, kartu 8px, badge pill. **Bayangan**: Elevation 01 kartu, 06 modal.
4. **Komponen**: sebelum membuat komponen, baca `docs/components/<nama>.md` dan ikuti ukuran, padding, gap, dan token warnanya. Pakai komponen di `src/` bila ada (Tabs, Button, Badge, Banner, Chip, Checkbox, Radio, Switch, TextField, TextArea, Modal, Toast, Select, Tooltip, Breadcrumb, Pagination, Stepper, Accordion, Avatar, Card).
5. Hex lama di Figma (`#0B5FEF`, `#65686C`, `#2F3031`) = token baru (`blue-70`, `gray-60`, `gray-90`); selalu pakai token baru.
6. Pastikan kontras teks minimal WCAG AA (teks sekunder pakai `gray-60`, bukan lebih pucat).
7. Tabel: header 13/16 semibold kapital, sel 15/22. Kolom Aksi: ≤2 tombol tampil langsung, >2 masuk menu ⋮.
