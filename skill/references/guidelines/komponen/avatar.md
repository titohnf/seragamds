# Avatar

- Kode: `Avatar` (`src/components`)
- Spesifikasi visual: [avatar.md](../../components/avatar.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/avatar, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Representasi grafis pengguna: gambar kecil atau inisial nama. Props: `size` (20/24/32/36/48/64), `shape`, `src`, `name`, `alt`.

| `shape` | Kapan dipakai |
|---|---|
| `circle` | Pengguna individu |
| `square` | Entitas non-manusia: komunitas, sampul playlist, grup, proyek |

## Perilaku
- Dipakai di profil, komentar, pesan, dan area lain yang perlu mengenali pengguna.
- Gambar biasanya diunggah pengguna di **Akun Belajar.id (SSO)**. Bila tidak ada atau gagal dimuat, tampilkan gambar bawaan: komponen menampilkan **inisial dari `name`**.
- Tidak punya state interaksi.

## Panduan
- Isi `alt` yang deskriptif (atau `alt=""` bila nama sudah tertulis di sebelahnya).
- Situs tidak memuat panduan penulisan, aksesibilitas, atau ukuran untuk komponen ini; ukuran mengikuti Figma.
