# Button

- Kode: `Button` (`src/components`)
- Spesifikasi visual: [button.md](../../components/button.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini.

## Varian
| Varian | `variant` | Kapan dipakai |
|---|---|---|
| Ultimate | `ultimate` (default) | Aksi umum yang bisa dilakukan pengguna. Biru. |
| Primary | `primary` | Aksi penting yang mendampingi Ultimate. Hitam. |
| Secondary | `secondary` | Aksi sekunder. Outline. |
| Quiet | `quiet` | Aksi yang bukan fokus utama, misalnya "Cek selengkapnya". Teks biru. |
| Destructive | `destructive` | Aksi merusak yang final: hapus, tolak. Merah solid. |
| Destructive secondary | `destructive-secondary` | Aksi merusak bernada rendah. **Ekstensi di luar Figma**, lihat `docs/extensions.md`. |

Ukuran: `lg` 46px (default), `md` 38px, `sm` 28px. Prop lain: `fullWidth`, `loading`, `disabled`, `leadingIcon`, `trailingIcon`.

## Panduan
- Ukuran sentuh minimal 44px tinggi di mobile: pakai `lg` untuk aksi yang disentuh.
- Gunakan ikon sebagai info tambahan, bukan pengganti teks. Tombol hanya ikon wajib diberi `aria-label`.
- Satu aksi utama (Ultimate) per halaman.
- Jangan menaruh dua tombol dengan varian sama bersebelahan. Padukan varian berbeda, misalnya Ultimate + Secondary.
- Gunakan `loading` saat aksi sedang diproses, dan `disabled` hanya bila aksi memang belum bisa dilakukan.

## Do & Don't
- ✅ Ultimate + Secondary bersebelahan.
- ❌ Dua Ultimate bersebelahan (dua aksi penting bersaing).
- ✅ `destructive` untuk konfirmasi hapus/tolak.
- ❌ Menulis kelas tombol sendiri. Pakai `Button` atau `buttonClass`.

## Penulisan label
- Kata kerja spesifik sesuai konteks, maksimal 2–3 kata.
- Sentence case. Hindari Title Case dan HURUF KAPITAL.
- Tanpa tanda titik di akhir.
- Label tidak boleh pecah jadi dua baris.
- ✅ "Simpan perubahan", "Kirim laporan", "Masuk", "Hapus data". ❌ "SIMPAN", "Klik Di Sini", "OK.".
