# Accordion

- Kode: `Accordion, AccordionGroup` (`src/components`)
- Spesifikasi visual: [accordion.md](../../components/accordion.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/accordion, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Menampilkan dan menutup bagian konten secara interaktif untuk menghemat ruang layar. Props `Accordion`: `title`, `children`, `defaultOpen`, atau terkendali `open` + `onOpenChange`. `AccordionGroup`: `items` (`{ key, title, content }`), `type` (`single` bawaan · `multiple`), `defaultOpen` (daftar key), `variant`. Props `Accordion` juga `variant` (`card` bawaan · `custom`).

## Anatomi
Header/trigger (bisa diklik), panel konten, ikon ekspansi (chevron berputar).

## Jenis
| Jenis | Catatan |
|---|---|
| **Card** | Terkontrol dengan margin kiri-kanan; untuk antarmuka berruang terbatas. Inilah yang ada di kode. |
| **Custom** (`variant="custom"`) | Selebar halaman, tanpa kartu: hanya garis pemisah. Untuk daftar selebar kolom (mis. FAQ). |

## Perilaku
- **Bawaan tertutup**; atur terbuka di awal lewat `defaultOpen`.
- Klik/ketuk header membuka atau menutup panel. State: default, hover (kursor di header), focus (cincin biru saat fokus keyboard), tekan.
- **Single Expand**: satu panel terbuka sekali waktu. **Multi Expand**: beberapa panel terbuka bersamaan. Pakai `AccordionGroup type="single|multiple"`.
- Keyboard: header adalah `<button>`; `Tab` memfokuskan, `Enter`/`Space` membuka-menutup. Panel `role="region"` dan header `aria-expanded`/`aria-controls`.

## Panduan
- Kapan dipakai: konten panjang yang perlu disederhanakan, navigasi informasi bertingkat, ruang terbatas, dokumentasi interaktif (mis. FAQ).
- **Batasi jumlah panel** agar tidak kelebihan informasi (situs tidak menyebut angka).
- Judul deskriptif; pikirkan hierarki informasi. Petunjuk visual (ikon, transisi) membantu.
- Jangan menyembunyikan informasi yang wajib dibaca semua pengguna di dalam panel tertutup.
