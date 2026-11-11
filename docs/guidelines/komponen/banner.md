# Banner

- Kode: `Banner` (`src/components`)
- Spesifikasi visual: [new-banner.md](../../components/new-banner.md)

> **Status: dari panduan Seragam** (seragam.belajar.id/banner, diaudit 2026-11-11 terhadap seluruh halaman situs), disesuaikan ke props komponen di repo ini.

Menyampaikan pesan penting atau sementara. Props: `tone`, `title`, `children`, `onClose` (Dismissable), `action`, `link`, `fixed`.

## Tipe (`tone`)
| `tone` | Kapan dipakai |
|---|---|
| `success` | Informasi positif, biasanya respons lanjutan setelah aksi |
| `warning` | Peringatan potensi masalah yang belum kritis dan butuh tindak lanjut |
| `critical` | Galat/blocking serius; pengguna **wajib** bertindak dulu agar bisa lanjut (`role="alert"`) |
| `neutral` | Informasi umum, sekunder, atau status tidak mendesak; berdiri sendiri |
| `info` (bawaan) | Informasi netral yang relevan; perhatiannya lebih tinggi daripada neutral |
| `entry` | **Entry Point**: mengajak pengguna masuk ke fitur; interaktif, bukan status/galat. **Wajib CTA** (`action` atau `link`); putih, border gray-50, tanpa ikon |

## Penempatan
- **Default**: di area konten, di bawah header/top bar, agar terlihat tanpa mengganggu navigasi utama.
- **Fixed** (`fixed`): selebar halaman, menempel di atas halaman, untuk informasi yang perlu segera terlihat; hanya pada halaman/fungsi tertentu.
- `action` (Button `sm` secondary) dan `link` tampil di footer banner. `onClose` menambah tombol Tutup.

## Panduan
- **Hanya pakai Banner untuk informasi penting.** Hindari banyak Banner dalam satu halaman agar urgensinya tidak berkurang (situs tidak menyebut angka maksimal).
- Pilih tipe yang sesuai dengan jenis informasinya.
- Pesan yang butuh keputusan segera atau menginterupsi: [Modal](modal.md). Pesan singkat sementara: [Toast](toast.md).
- Komponen statis: tanpa state hover/focus selain elemen interaktif di dalamnya.

## Penulisan
Kalimat singkat dan jelas, fokus pada pesan penting, buang informasi berlebihan; disarankan maksimal 3 baris teks.

## Responsif
Tersedia untuk mobile, tablet, desktop, dan large desktop (padding Fixed desktop 20×80). Situs tidak memuat aturan teks.
