# Breadcrumb

- Kode: `Breadcrumb` (`src/components`)
- Spesifikasi visual: [breadcrumb.md](../../components/breadcrumb.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/breadcrumbs, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Jalur hierarki dari halaman awal ke halaman yang sedang dibuka. Props: `items` (`{ label, href?, onClick? }`), `maxItems`, `inverse`. Item terakhir adalah halaman saat ini (`aria-current`, di-highlight).

## Jenis
- **Regular**: di atas latar cerah. **Inverted** (`inverse`, di kode ini ekstensi untuk latar gelap seperti `PageHeader tone="dark"`).

## Perilaku
- Tiap judul halaman bisa diklik untuk kembali ke halaman itu.
- **Truncated** (`maxItems`): untuk jalur panjang atau layar kecil. Tampil item pertama, "…" (bukan tautan), lalu `maxItems − 1` item terakhir. Aturan situs: pertahankan **halaman paling awal, halaman kedua dari akhir, dan halaman saat ini** (`maxItems={3}`). Contoh "Beranda > … > Halaman Saat Ini".

## Panduan
- Dipakai bila pengguna perlu jejak visual, terutama pada platform dengan hierarki halaman banyak dan dalam.
- Letakkan di atas halaman, **sisi kiri**, biasanya di bawah navigasi utama.
- **Responsif** (situs): Mobile (≤768) maksimal 2–3 level terakhir, level awal diganti ikon home/ellipsis, atau gulir horizontal bila semua level perlu; Tablet (769–1024) ±4–5 item lalu potong; Desktop (1025–1440) semua level bila muat, ellipsis di tengah bila melebihi **70% lebar wadah**; Large Desktop sama dengan Desktop. Pemotongan otomatis berdasarkan lebar belum ada: atur `maxItems` per breakpoint.

## Penulisan
**Maksimal 3 kata** per level, periksa agar tidak terpotong. Sentence case (kapital hanya di awal, kecuali singkatan/nama khusus). Tanpa titik di akhir. Kapitalisasi harus konsisten.
