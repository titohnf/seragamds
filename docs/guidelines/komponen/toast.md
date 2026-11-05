# Toast

- Kode: `Toast` (`src/components`)
- Spesifikasi visual: [toast.md](../../components/toast.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

Komponen ini hanya **tampilan**. Posisi, animasi, dan penutupan otomatis diatur oleh pemanggil.

## Kapan dipakai
- Mengonfirmasi aksi yang berhasil ("Data berhasil disimpan").
- Informasi singkat yang tidak butuh tindakan.
- Jangan pakai untuk galat yang butuh tindakan: gunakan [Banner](banner.md) atau [Modal](modal.md).

## Panduan
- Tampil minimal 4 detik.
- Toast baru menggantikan toast sebelumnya.
- Posisi atas-tengah paling terlihat.
- `action` (mis. "Urungkan") hanya untuk satu tindakan singkat.

## Penulisan
Maksimal 1–2 kalimat. ✅ "Data berhasil disimpan". ❌ "Success: Data saved successfully!".
