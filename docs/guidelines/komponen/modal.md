# Modal

- Kode: `Modal` (`src/components`)
- Spesifikasi visual: [modal.md](../../components/modal.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/modal-, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Muncul di tengah layar menutupi sebagian/seluruh konten; selama aktif pengguna umumnya tidak bisa berinteraksi dengan komponen lain sampai ditutup atau aksinya selesai. Props: `open`, `onClose`, `title` (**wajib**), `size` (`sm` 432 · `md` 660 bawaan · `lg` 888), `footer`, `dismissOnOverlay`, `children`.

## Jenis
- **Passive**: hanya informasi, tanpa aksi. **Transactional**: meminta aksi (simpan, hapus). **Scrollable**: isi lebih panjang dari wadah dan menggulir di dalam Modal.
- Tujuan perilaku: *Seek for Attention* (konfirmasi), *Feedback*, *Progress* (tahap proses), *Additional Space* (info yang tak muat di halaman).

## Perilaku
- **Esc** menutup (desktop). Selalu sediakan cara menutup yang jelas: tombol "Batal" atau ikon ×.
- **Overlay dismiss**: klik area luar menutup. **Aktifkan** untuk Modal informatif; **nonaktifkan** (`dismissOnOverlay={false}`) untuk aksi kritis seperti penghapusan data dan formulir, agar tidak salah tutup.
- Fokus pindah ke dalam dialog, `Tab` terkurung, fokus kembali ke pemicu saat ditutup, gulir halaman terkunci; `aria-modal` dan `aria-labelledby` ke judul.
- **Layering**: hindari menumpuk lebih dari satu Modal; bila terpaksa, prioritas jelas dan overlay berbeda. Usahakan Modal muncul sekali dalam satu alur.

## Panduan
- **As Support**: mendukung alur, tidak menghambat. **Context First**: tampil hanya saat relevan. **Problem Solving**: pastikan bernilai ("No one likes to be interrupted, but if you must, make sure it's worth the cost").
- Perlakukan Modal sebagai percakapan singkat sistem–pengguna: **satu topik atau keputusan per Modal**; bahasa alami, ringkas, langsung. Konten panjang: halaman penuh.
- **Responsif**: desktop = overlay di tengah; mobile = gunakan [Bottom Sheet](bottom-sheet.md). Konfirmasi sederhana: pola in-page lain. Pilih `size` yang sepadan dengan isi.
- Tombol aksi utama di `footer`, varian berbeda dari tombol batal.

## Penulisan
| Jenis pesan | Nada |
|---|---|
| Konfirmasi (setujui/tolak aksi) | Instruktif |
| Informasi/peringatan penting | Informatif dan membantu |
| Kesalahan kritis | Jelas dan mendukung |

- **Judul**: wajib, ringkas, langsung ke inti, **sentence case**, tanpa titik.
- **Deskripsi**: konteks atau instruksi tambahan, kalimat lengkap berpunctuation, **jangan mengulang judul**.
- **Tombol**: kata kerja perintah ("Simpan", "Hapus", "Kirim"); konteks halus: "Lanjut". Konsisten dengan judul aksi.
- **Ilustrasi**: opsional, bila mendukung pesan atau menambah kesan menyenangkan.
