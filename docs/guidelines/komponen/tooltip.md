# Tooltip

- Kode: `Tooltip` (`src/components`)
- Spesifikasi visual: [tooltip.md](../../components/tooltip.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/tooltip, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Teks singkat yang memberi informasi tambahan secara kontekstual saat hover, fokus, atau ketuk. Props: `text`, `side` (`top` | `bottom` | `left` | `right`), `inline` (ekstensi: pembungkus `inline` untuk istilah di tengah kalimat).

## Jenis
Empat arah panah: panah kanan (tooltip di kiri elemen), panah kiri (di kanan), panah bawah (di atas), panah atas (di bawah) — dipilih lewat `side`.

## Perilaku
- **Posisi**: `side` adalah sisi pilihan; tooltip **membalik** sendiri (atas ↔ bawah, kiri ↔ kanan) bila tidak muat dan **bergeser** agar tetap di dalam layar; tidak terpotong wadah `overflow-hidden` (`position: fixed`, lihat `src/popup.ts`).
- **Sentuhan**: ketuk pada pemicu menampilkan tooltip (ditangani eksplisit lewat `pointerdown` bertipe sentuh); ketukan atau klik di luar menutupnya.
- **Aksesibilitas**: pemicu (bila satu elemen) otomatis diberi `aria-describedby` ke tooltip, jadi pembaca layar membacakannya; `Esc` menutup tanpa memindahkan fokus (WCAG 1.4.13).
- Muncul **hanya setelah ada aksi** pada elemen: hover, fokus, atau ketuk. Tidak muncul sendiri.
- **Harus dipasangkan** dengan elemen pemicu; tidak berdiri sendiri.
- Tidak permanen: hilang sendiri setelah pemicu selesai. Tidak boleh menjadi distraksi tampilan.
- Situs tidak memuat panduan keyboard (mis. tombol tutup), aksesibilitas, atau responsif.

## Panduan
- Untuk **informasi sekunder atau penjelas**. **Jangan untuk informasi penting/utama**: di layar sentuh tidak ada hover.
- Untuk istilah di dalam kalimat: pasang pada `<span tabIndex={0}>` bergaris titik-titik dan pakai `inline`. Bungkus hanya kemunculan pertama tiap istilah, dan sediakan juga daftar istilah yang bisa dicari.

## Penulisan
**Cukup satu atau dua kalimat**: inti informasi dengan kata inti, jelaskan fungsi atau aksi elemen secara sederhana. **Sentence case** (kapital hanya di awal kalimat), **tanpa titik** di akhir.
