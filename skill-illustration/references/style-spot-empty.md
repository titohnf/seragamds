# Cara Menggambar: Ilustrasi Spot & Empty State

Sumber: https://seragam.belajar.id/cara-menggambar:-ilustrasi-spot-dan-ilustrasi-empty-state + analisis SVG asli dari Galeri Ilustrasi Figma (lihat `../examples/`).

## Fakta teknis dari SVG asli di Galeri

- `viewBox="0 0 84 84"`, `fill="none"` di root, semua bentuk `<path fill="#HEX">`.
- **0 stroke, 0 gradient, 0 filter, 0 opacity trick.** Semua kedalaman dibuat dari bidang warna solid yang ditumpuk.
- 13–26 path per ilustrasi. Sederhana!
- 8–20 warna unik, hampir semua dari palet ilustrasi (`palette.json`).
- Aksen gelap (mata smiley, centang, lubang kunci) memakai **Gray 50 `#020A11`** — bukan `#000`.

## Style

Flat, bentuk **geometris dengan ujung tumpul (rounded)**. Tangan/manusia tidak boleh kaku — jari melengkung lembut. Kedalaman datang dari pewarnaan, bukan outline.

## Bentuk

- **Simpel & minimalis**: objek harus terbaca di 60px. Rounded corner di semua sudut (radius ±2–6 unit pada kanvas 84).
- **Detail secukupnya**: garis teks di dokumen = 2–4 bar rounded rect (Blue 20 `#458CFF` / Blue 30). Jangan tulis teks sungguhan.
- **Lebih dari satu objek** boleh jika 1 objek tidak cukup menjelaskan konteks. Objek pendukung lebih kecil, tidak dominan, dan menyatu dengan objek utama (overlap/menempel). Pola umum: objek utama + badge kecil (centang hijau, kaca pembesar, jam, gembok, smiley) di pojok kanan atas/bawah.

## Struktur cahaya & bayangan (WAJIB)

Sumber cahaya: **pojok kiri atas**, tidak terlalu tinggi/rendah → bayangan minimalis jatuh ke **kanan bawah**.

Setiap objek diwarnai dari **satu ramp** palet:

| Elemen | Turunan ramp | Wajib? | Cara menggambar |
|---|---|---|---|
| Highlight | 10 | opsional | potongan kecil di tepi kiri/atas |
| Light | 20 | ya | bidang miring (diagonal) di sisi kiri/atas permukaan |
| Base color | 30 | ya | warna utama permukaan |
| Shadow | 40 | ya | bidang di sisi kanan/bawah, atau sisi tebal (ketebalan objek) |
| Core shadow | 50 | opsional | celah, bagian belakang, ketebalan paling gelap |
| Cast shadow | `#E5E5E5` / Soft Gray 20–30 | opsional | bentuk rounded pipih di kanan bawah objek, offset ±2–4 unit |

Aturan kombinasi dari panduan: **pilih 3 dari 5 turunan** yang berurutan (mis. 20-30-40 atau 30-40-50) untuk light/base/shadow. Perbatasan antar bidang warna harus beda value yang jelas (kontras).

**Teknik signature gaya ini:** bidang light/shadow dipotong dengan **garis diagonal lurus atau kurva lebar** melintasi permukaan (lihat clipboard & dokumen di `style` contoh) — bukan gradien, bukan blur. Buat dengan path kedua yang di-clip ke bentuk dasar (pakai `<clipPath>` atau gambar langsung bentuk potongannya).

### Resep path "wedge" (diambil dari `examples/attendance-calendar.svg`)

Untuk permukaan persegi `x0,y0 → x1,y1`:
- **Light wedge** (turunan 20, kiri-atas): `M x0 y0 H xm C (kurva lebar ke kiri-bawah) ... x0 ym V y0 Z` — contoh asli: `M38.7 16 C25.5 16 17.2 35.9 16.6 37.5 V16 Z`.
- **Highlight** (turunan 10, opsional): wedge yang lebih kecil di dalam light wedge, di pojok kiri atas.
- **Shadow wedge** (turunan 40, kanan-bawah): `M x1 ym V y1 H xm C ... x1 ym Z` — contoh asli: `M73.8 35.4 V72.8 H23.6 C67.2 72.8 73.8 35.4 73.8 35.4 Z`.
- **Ketebalan**: duplikat bentuk dasar, geser +2,+2, isi turunan 50.
- Bungkus wedge dengan `<clipPath>` dari bentuk dasar supaya tidak keluar dari tepi rounded.

Contoh hasil generate yang lolos review: `../examples/generated-certificate-training-award.svg`.

## Kombinasi warna (contoh resmi)

3 ramp:
- Blue + Yellow + Soft Bluish Gray
- Blue + Yellow + Bluish Gray
- Blue + Yellow + Purple
- Purple + Yellow + Green

4 ramp:
- Blue + Yellow + Green + Soft Green
- Blue + Yellow + Bluish Gray + Soft Bluish Gray
- Green + Yellow + Soft Yellow + Soft Bluish Gray
- Red + Purple + Blue + Soft Bluish Gray

**Default aman:** Blue (objek utama) + Yellow (aksen/smiley/bintang) + Soft Bluish Gray atau Soft Blue (kertas/permukaan terang). Status sukses = Green 20/30 lingkaran + centang `#020A11`. Error/gagal = Red 30/40. 

Maksimal **4 ramp** per ilustrasi (tidak termasuk Gray 50 untuk aksen dan skin untuk tangan).

## Kecerahan

Latar depan cenderung cerah (vibrant) tapi tidak menyilaukan. Hindari warna kusam — jangan pakai Gray/Soft Gray sebagai warna utama kecuali konteksnya memang "nonaktif/offline/gagal cetak".

## Hindari

- ❌ Gradien (tidak sesuai style, merusak struktur cahaya).
- ❌ Outline/stroke di Spot & Empty State.
- ❌ Perspektif/angle ekstrem. Pakai tampak depan atau 3/4 ringan yang proporsional.
- ❌ Detail kecil yang hilang di 60px.
- ❌ Warna di luar palet (cek dengan `scripts/validate_svg.py`).

## Elemen pendukung yang sering dipakai di Galeri

- **Smiley**: lingkaran Yellow 30 `#EFB003` + sisi bayangan Yellow 40, mata 2 elips kecil `#020A11`, senyum path melengkung `#020A11`.
- **Sparkle/emphasis lines**: 2–3 garis pendek rounded (path pill) di pojok kanan atas, warna Yellow 30 atau Blue 20.
- **Badge centang**: lingkaran Green 20 `#2DB24F` (+ sisi Green 30), centang `#020A11`.
- **Tangan**: pakai ramp skin (Yellow Skin / Red Skin / Brown Skin / White Skin), light 20, base 30, shadow 40, garis lipatan jari 50.

## Titik fokus

Buat lewat warna paling kontras, ukuran, atau elemen penunjang (sparkle, badge). Hanya **satu** titik fokus.

## Grid & kanvas

- **Spot besar**: kanvas 84×84. Objek kotak mengisi ±64–72; objek tinggi/lebar boleh sampai ±80 di satu sisi; lingkaran ±70. Grid bersifat panduan, objek dengan banyak white space boleh sedikit lebih besar.
- **Spot kecil**: kanvas 60×60 (skala 0.714 dari 84). Lebih baik gambar di 84 lalu set `width="60" height="60"` dengan viewBox tetap 84.
- **Empty State**: kanvas 120×120, lingkaran latar Ø110 di tengah (`cx=60 cy=60 r=55`, fill Soft Gray 10/20 `#F7F7F7`/`#EAEAEA` atau `#EFEFEF`). Objek boleh keluar sedikit dari lingkaran (dipotong di bawah, atau tangan masuk dari tepi). Boleh ada pencahayaan lingkungan (mis. sinar jendela = bidang terang diagonal semi lebar).

## Template SVG

```svg
<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="img-<nama-kebab>">
    <!-- 1. cast shadow (paling bawah) -->
    <!-- 2. ketebalan/sisi gelap objek (40/50) -->
    <!-- 3. permukaan base (30) -->
    <!-- 4. bidang light (20) + highlight (10) -->
    <!-- 5. bidang shadow di atas permukaan (40) -->
    <!-- 6. detail (bar teks, ikon) -->
    <!-- 7. objek pendukung / badge -->
    <!-- 8. aksen: sparkle, mata, centang (#020A11) -->
  </g>
</svg>
```
