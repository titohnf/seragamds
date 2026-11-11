# Toast

- Kode: `Toast` (`src/components`)
- Spesifikasi visual: [toast.md](../../components/toast.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/toast, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Notifikasi singkat dan sementara tanpa mengganggu pengguna. Props: `children`, `tone` (`default` · `success`), `action` + `onAction`, `duration` + `onClose`. Komponen hanya **tampilan**: posisi dan animasi diatur pemanggil.

## Jenis
| Jenis | Kapan dipakai |
|---|---|
| **Action link** (`action`) | Ada aksi spesifik sebagai tindak lanjut, mis. "Urungkan" |
| **Default** | Aksi netral atau informatif |
| **Success** (`tone="success"`) | Aksi berhasil; ikon centang memperkuat kesan berhasil |

## Perilaku
- Lebar minimum 328px tetapi **menyesuaikan layar yang lebih sempit** (tidak melebihi lebar wadah).
- **Tampil minimal 4 detik** (`duration` dipaksa ≥ 4000ms bersama `onClose`).
- Hilang sendiri setelah durasi; di mobile pengguna bisa menutup dengan **geser ke atas**.
- **Toast baru menggantikan yang sebelumnya**: render satu Toast pada satu waktu.
- `role="status"`. Situs tidak memuat aksesibilitas; pertimbangkan pengguna yang butuh waktu lebih lama (tombol aksi harus ada di tempat lain juga).

## Panduan
- Hanya informasi singkat tanpa aksi mendesak. Informasi panjang atau butuh aksi mendesak: [Banner](banner.md) atau [Modal](modal.md); jangan untuk galat yang butuh tindakan, promosi, atau penawaran.
- Tombol aksi harus bisa diakses di tempat lain dan berisi aksi yang umum; bila aksinya spesifik, pertimbangkan komponen lain.
- Posisi tengah layar (atas-tengah paling terlihat).

## Penulisan
- Letakkan **kata terpenting di awal** ("Gagal", "Berhasil"), kata benda umum, bahasa lugas, tanpa gaya menonjol.
- **Informatif**: subjek + kata kerja (+ kata sifat) + keterangan opsional + titik. **Galat**: "Gagal" + kata kerja + objek + "Coba lagi" + titik. **Berhasil**: "Berhasil" + kata kerja + objek + tanda seru.
- Dengan tombol aksi: tombol mendukung pesan dan diawali kata kerja.
- **Batas karakter**: Mobile 1 baris maks **64**, 2 baris maks **84** (lebih dari itu dipotong "…"); Desktop 1 baris maks **66**, lalu 2 baris dan seterusnya (disarankan lebih singkat).
- ✅ "Data berhasil disimpan" · "Gagal mengirim laporan. Coba lagi." · "Berhasil menyimpan perubahan!". ❌ "Success: Data saved successfully!".
