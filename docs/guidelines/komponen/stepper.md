# Stepper

- Kode: `Stepper` (`src/components`)
- Spesifikasi visual: [stepper.md](../../components/stepper.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/stepper, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Mengatur nilai angka secara bertahap: tombol kurang dan tambah dengan angka di tengah. Props: `value`, `onChange`, `min`, `max`, `step`, `disabled`, `error`.

## State
Default (belum berinteraksi), Filled (sudah berinteraksi), Focused (highlight/border), Disabled (tidak boleh dipakai karena ada aturan), Error (ada kesalahan yang harus dijelaskan jelas ke pengguna). Situs menyebut "5 states".

## Kapan dipakai
Pengguna mengisi **angka** yang naik/turun bertahap, **bukan tanggal** (contoh: jumlah pensil yang dibeli).

## Panduan
- **Beri konteks** dengan teks atau elemen visual di sampingnya agar jelas keperluan jumlahnya.
- **Jangan menaruh beberapa Stepper berdampingan tanpa konteks**: membingungkan.
- Selalu atur `min` dan `max` (situs tidak menyebut batas).
- Situs tidak memuat jenis, keyboard, penulisan, aksesibilitas, atau responsif.
