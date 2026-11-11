# Footer

- Kode: `Footer` (`src/components`)
- Spesifikasi visual: [footer.md](../../components/footer.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/footer), disesuaikan ke props komponen di repo ini.

Props: `logo`, `sections` (`{ title?, links: { label, href, external? }[] }[]`), `social`, `download`, `copyright` (wajib), `language`, `aria-label`.

Footer adalah bagian terbawah halaman yang konsisten di seluruh situs: informasi tambahan, navigasi pendukung, dan identitas website.

## Anatomi
1. **Logo / brand**: selalu di kiri, menjadi tautan ke beranda. Boleh 1 atau 2 logo. Di latar gelap pakai versi putih (inverse), kecuali logo tertentu seperti Tut Wuri Handayani.
2. **Menu navigasi dan tautan eksternal** (`sections`).
3. **Unduh aplikasi** (`download`, opsional).
4. **Media sosial** (`social`).
5. **Hak cipta** (`copyright`).
6. **Bahasa** (`language`).

## Spesifikasi responsif
| Lebar | Susunan |
|---|---|
| Mobile (360) | logo di atas, menu memanjang ke bawah (1 kolom); margin kiri-kanan 16, atas-bawah 24 |
| Tablet (768) | menu 2 kolom; margin dan padding 24 |
| Desktop (1440) | logo di kiri atas, menu 4 kolom; margin kiri-kanan 80, atas-bawah 40, padding kiri-kanan 32 |
| Desktop besar (≥1536) | sama dengan desktop, isi dibatasi 1280 dan dipusatkan |

Warna: lapis 1 `gray-90`, lapis 2 (hak cipta dan bahasa) `gray-100`, teks putih. Teks menu 15/22, hak cipta 12/16.

## Panduan
- **Satu footer per halaman.**
- Menu yang tampil boleh disesuaikan kebutuhan; jumlah item mengikuti lebar layar dan sisanya turun ke baris berikutnya.
- State hover, fokus, dan aktif konsisten pada setiap tautan; tautan eksternal diberi tahu ke pembaca layar ("membuka tab baru").
- Semua item bisa dioperasikan keyboard dan terbaca pembaca layar.

## Penulisan
Label menu 1–3 kata, sentence case. Hak cipta: "Hak Cipta 2021 oleh Kementerian Pendidikan Dasar dan Menengah Republik Indonesia".
