# Process Steps

- Kode: `ProcessSteps` (`src/components`)

> **Status: ekstensi (draf).** Tidak ada di Figma Seragam. `Stepper` di Seragam adalah input angka (+/−), bukan rel proses. Lihat [extensions.md](../../extensions.md).

Rel horizontal untuk alur berurutan yang boleh dilompati, mis. siklus 6M. Setiap langkah bisa diklik.

## Spesifikasi dan props
`steps` (`{ key, label, caption?, state: 'done' | 'active' | 'todo', detail? }`; `detail` hanya untuk vertikal), `current` (key halaman yang dibuka), `onSelect`, `inverse`, `orientation` (`horizontal` bawaan, atau `vertical`), `aria-label`.

## Perilaku
- **Garis penghubung (horizontal)**: hanya di antara tepi dua lingkaran (celah 6px), tepat di tengah vertikal lingkaran, dan **di atas** latar hover langkah, jadi tidak hilang saat hover dan, pada `inverse` (lingkaran todo/berjalan transparan), tidak tampak masuk ke dalam lingkaran berikutnya. Hijau bila langkah sebelumnya selesai, selain itu abu.
- Rel **horizontal** selebar minimum 720px dan **menggulir sendiri** (wadah `overflow-x-auto`) di layar yang lebih sempit, sehingga halaman tidak ikut melebar (360px).
- Tiga status, semuanya menampilkan nomor: `todo` = outline abu, `active` (berjalan) = outline biru, `done` = hijau terisi. Tanpa tanda centang.
- `current` memberi cincin fokus agar terlihat posisi pengguna, terpisah dari status.
- Garis penghubung hijau di antara langkah selesai dan langkah sesudahnya, selain itu abu.
- `inverse` untuk latar gelap (di dalam `PageHeader tone="dark"`).
- Horizontal: lebar minimal 720px; bungkus dengan `overflow-x-auto` di layar sempit.
- `vertical`: lingkaran 28px (angka 13/20) dan label 15/22, untuk sidebar ±280px yang `sticky`. Tanpa latar: langkah yang dibuka berlabel tebal, hover hanya garis bawah, teks hitam. Slot `detail` memuat daftar bagian yang bisa diklik. Di bawah 1024px pakai horizontal.

## Panduan
- Pakai hanya bila isinya benar-benar berurutan. Untuk menu biasa pakai `NavigationBar`.
- Maksimal 7 langkah; label satu kata. `caption` tidak ditampilkan pada orientasi vertikal.
- Status berasal dari data (bukti), jangan dari isian manual.
