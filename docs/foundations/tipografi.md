# Tipografi

Font: **Inter**. Sumber: token `typography` (Figma *Seragam Dasar*).

> Berkas ini dihasilkan oleh `tools/build_foundations.py`. Jangan sunting manual.

## Keputusan: satu komponen, dua skala (Mobile dan Desktop)
Figma hanya punya komponen mobile, sehingga di desktop huruf terlihat kecil. Komponen tetap **satu** (bentuk, warna, props sama); yang berganti menurut platform hanyalah skala huruf dan tinggi kontrol turunannya. Skala dipilih oleh atribut `data-sd-platform` (`auto` bawaan = Mobile, berganti ke Desktop mulai lebar 1024px; `desktop`; `mobile`). Lihat [Platform](../guidelines/komponen/platform.md) dan [DECISIONS](../DECISIONS.md) (2026-11-11). Ini menggantikan keputusan v0.5.0 "skala Mobile di semua perangkat".

**Pakai token responsif, jangan angka.** Di kode: `style={typo.body}` (`src/tokens.ts`) atau kelas `.sd-t-<nama>` (`.sd-t-body`, `.sd-t-action`, ...), yang membaca `--sd-text-<nama>-{size,line,weight}`. Kelas `.sd-t-mobile-<nama>` / `.sd-t-desktop-<nama>` mengunci satu skala secara eksplisit. Jangan memakai ukuran di luar skala; hanya berat 400 dan 600.

| Peran | Mobile | Desktop |
|---|---|---|
| `body` | 15/22 | 16/24 |
| `bodysmall` | 13/20 | 14/20 |
| `action` | 15/22 | 16/24 |
| `subheading` | 13/16 | 14/16 |
| `headingsmall` | 16/22 | 17/22 |
| `headingmedium` | 18/24 | 19/24 |
| `headinglarge` | 22/28 | 22/28 |
| `displaysmall` | 24/28 | 24/28 |
| `helper` | 12/16 | 12/16 |

Nama yang hanya ada di satu platform (`headline*`, `bodylarge` = Desktop; `eyebrow*` = Mobile) dipakai di kedua platform.

## Skala Mobile

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

## Skala Desktop

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
