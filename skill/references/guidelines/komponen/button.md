# Button

- Kode: `Button` (`src/components`)
- Spesifikasi visual: [button.md](../../components/button.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/button, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Elemen yang bisa diklik untuk memicu aksi atau memulai proses.

## Varian
| `variant` | Kapan dipakai |
|---|---|
| `ultimate` (bawaan) | Aksi umum yang bisa dilakukan pengguna. Biru. |
| `primary` | Aksi utama/paling penting yang mendampingi Ultimate. Hitam. |
| `secondary` | Aksi sekunder atau opsional. Outline. |
| `quiet` | Konten yang bukan fokus halaman, mis. "Cek selengkapnya". Teks biru. |
| `destructive` | Aksi merusak yang final: Hapus, Tolak. Merah solid. |
| `destructive-secondary` | Aksi merusak bernada rendah. **Ekstensi di luar Figma**, lihat [extensions.md](../../extensions.md). |

Bentuk lain (props): **`inverse`** untuk latar gelap (Figma Assets/Button Color=Inverse; di kode hanya `secondary` dan `quiet`, ekstensi); **`floating`** (Figma *Floating Button*: `ultimate`/`primary`/`secondary`, pill + Elevation 04) untuk navigasi yang mudah dijangkau, mis. "Kembali ke atas"; **`iconOnly`** (Figma *Icon Button*) persegi sebesar tingginya dan **wajib `aria-label`**.

Ukuran: `lg` (padding 12×20; tinggi Mobile 46 / Desktop 48), `md` (8×16; 38/40), `sm` (4×8; 28). Props lain: `fullWidth`, `loading`, `disabled`, `leadingIcon`, `trailingIcon`.

## State
Default, Hover, Focused (cincin 2px putih + 4px biru), Pressed, Disabled; plus `loading`. Harus memberi umpan balik visual yang cepat saat diklik (perubahan warna/animasi sederhana).

## Perilaku
- Lebar mengikuti label; `fullWidth` menyamai lebar layar, terutama di mobile.
- Floating Button di mobile diletakkan di bawah layar agar mudah dijangkau dan tidak mengganggu.
- Keyboard: tombol asli; `Enter`/`Space` menjalankan.

## Panduan
- **Ukuran sentuh cukup** (minimal 44px): pakai `lg` untuk aksi yang disentuh.
- Ikon sebagai info tambahan bersama teks. Tombol hanya ikon (`iconOnly`) boleh untuk penggunaan tertentu bila ikonnya dipahami; beri `aria-label`, dan [Tooltip](tooltip.md) bila perlu penjelasan.
- Satu aksi utama (Ultimate) per halaman.
- **Jangan menaruh dua tombol untuk dua aksi penting bersebelahan**; padukan penekanan berbeda (Ultimate + Secondary).
- `loading` saat aksi diproses; `disabled` hanya bila aksi memang belum bisa dilakukan.

## Do & Don't
- ✅ Ultimate + Secondary bersebelahan. ✅ `destructive` untuk konfirmasi hapus/tolak.
- ❌ Dua Ultimate bersebelahan. ❌ Menulis kelas tombol sendiri (pakai `Button` atau `buttonClass`).

## Penulisan label
- Kata kerja spesifik sesuai aksi dan konteks halaman, **maksimal 2–3 kata**, fokus pada aksi utama.
- Sentence case; **hindari Title Case dan HURUF KAPITAL** untuk menyorot tombol. Tanpa titik di akhir. Label tidak pecah dua baris.
- ✅ "Simpan perubahan", "Kirim laporan", "Masuk", "Hapus data". ❌ "SIMPAN", "Klik Di Sini", "OK.".
