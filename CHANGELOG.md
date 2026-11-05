# Changelog

Satu changelog untuk token, komponen, dan dokumentasi. Format: [Semantic Versioning](https://semver.org/lang/id/). Proyek sebaiknya mengunci ke tag, bukan `main`:

```bash
npm i github:titohnf/seragamds#v0.6.0
```

## 0.6.0 · 2026-11-05
Dokumentasi menjadi satu sumber kebenaran. **Tidak ada perubahan yang memutus kode komponen.**
- Baru: `docs/foundations/` (warna, tipografi, elevasi dan radius, spacing), `docs/guidelines/` (panduan penggunaan 32 halaman komponen, panduan penulisan dan inklusivitas, pemetaan nama termasuk padanan `@wartek-id`), `docs/DECISIONS.md`, `docs/README.md`.
- Baru: situs dokumentasi `site/` dengan demo hidup (`npm run dev`).
- Baru: `tools/check.py` (konsistensi token, kode, panduan, skill), `tools/build_foundations.py`, GitHub Action pemeriksaan, dan workflow deploy situs (manual).
- Skill `seragam` ikut memuat fondasi dan panduan; ditambah aturan 9–11 (panduan penggunaan, penulisan teks, nama komponen).
- Dev dependency baru: vite, marked, typescript, dan lainnya (hanya untuk situs; tidak memengaruhi paket yang dipasang proyek lain).

## 0.5.0
- Skala tipografi Mobile dipakai di semua perangkat (body 15/22, action 15/22, body-small 13/20, heading-medium 18/24).

## 0.4.0
- Button: varian `destructive-secondary` (outline merah, ekstensi di luar Figma); menggantikan `danger-outline`.

## 0.3.0 · breaking
- Button mengikuti Figma. Varian `primary/outline/danger` diganti `ultimate/primary/secondary/quiet/destructive`. Ukuran 46/38/28, state, `loading`, ikon, `fullWidth`.

## 0.2.0 dan sebelumnya
- Token dari Figma (*Seragam Dasar*), spesifikasi 48 halaman komponen, 33 komponen React, Skill Claude, dan paket yang bisa dipasang lewat git.
