# Tipografi

Font: **Inter**. Sumber: token `typography` (Figma *Seragam Dasar*).

> Berkas ini dihasilkan oleh `tools/build_foundations.py`. Jangan sunting manual.

## Keputusan: pakai skala Mobile di semua perangkat
Komponen di Figma hanya dibuat versi mobile, jadi **skala Mobile dipakai di semua perangkat** (body 15/22, body-small 13/20, action 15/22 semibold, heading-medium 18/24). Jangan memakai ukuran di luar skala. Pengecualian: produk web desktop (mis. prototipe platform-spmp) memakai skala Desktop (body 16/24, body-small 14/20, action 16/24 semibold, heading-medium 19/24) sesuai keputusan 2026-11-10. Lihat [DECISIONS](../DECISIONS.md).

Kelas CSS: `.sd-t-mobile-<nama>` (dan `.sd-t-desktop-<nama>` bila perlu).

## Skala Mobile (dipakai)

| Nama | Ukuran/baris (px) | Berat | Jarak huruf | Huruf |
|---|---|---|---|---|
| `displaylarge` | 32/36 | 600 | 0 | - |
| `displaymedium` | 28/36 | 600 | 0 | - |
| `displaysmall` | 24/28 | 600 | 0 | - |
| `headinglarge` | 22/28 | 600 | 0 | - |
| `headingmedium` | 18/24 | 600 | 0 | - |
| `eyebrowlarge` | 17/24 | 400 | 0 | - |
| `headingsmall` | 16/22 | 600 | 0 | - |
| `body` | 15/22 | 400 | 0 | - |
| `bodyunderline` | 15/22 | 400 | 0 | - |
| `action` | 15/22 | 600 | 0 | - |
| `eyebrowmedium` | 15/24 | 400 | 0 | - |
| `subheading` | 13/16 | 600 | 0.5 | upper |
| `bodysmall` | 13/20 | 400 | 0 | - |
| `bodysmall-bold` | 13/20 | 600 | 0 | - |
| `eyebrowsmall` | 12/16 | 400 | 0 | - |
| `helper-bold` | 12/16 | 600 | 0 | - |
| `helper` | 12/16 | 400 | 0 | - |

## Skala Desktop (referensi, tidak dipakai)

| Nama | Ukuran/baris (px) | Berat | Jarak huruf | Huruf |
|---|---|---|---|---|
| `headlinelarge` | 80/88 | 600 | 0 | - |
| `headlinemedium` | 64/72 | 600 | 0 | - |
| `headlinesmall` | 54/62 | 600 | 0 | - |
| `headlinexsmall` | 42/48 | 600 | 0 | - |
| `displaylarge` | 32/36 | 600 | 0 | - |
| `displaymedium` | 28/36 | 600 | 0 | - |
| `displaysmall` | 24/28 | 600 | 0 | - |
| `headinglarge` | 22/28 | 600 | 0 | - |
| `bodylarge` | 20/28 | 400 | 0 | - |
| `headingmedium` | 19/24 | 600 | 0 | - |
| `headingsmall` | 17/22 | 600 | 0 | - |
| `body` | 16/24 | 400 | 0 | - |
| `bodyunderline` | 16/24 | 400 | 0 | - |
| `action` | 16/24 | 600 | 0 | - |
| `subheading` | 14/16 | 600 | 0.5 | upper |
| `bodysmall` | 14/20 | 400 | 0 | - |
| `bodysmall-bold` | 14/20 | 600 | 0 | - |
| `helper-bold` | 12/16 | 600 | 0 | - |
| `helper` | 12/16 | 400 | 0 | - |
