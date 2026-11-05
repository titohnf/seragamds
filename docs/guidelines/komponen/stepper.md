# Stepper

- Kode: `Stepper` (`src/components`)
- Spesifikasi visual: [stepper.md](../../components/stepper.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Props: `value`, `onChange`, `min`, `max`, `step`, `disabled`, `error`.

## Kapan dipakai
- Pengguna mengisi angka yang bisa ditambah/dikurangi.
- Bukan untuk tanggal.

## Panduan
- Sertakan teks atau elemen visual di sebelahnya agar konteksnya jelas.
- Jangan menaruh dua Stepper bersebelahan tanpa konteks.
- Selalu atur `min` dan `max`.
