# Keputusan UX

Rangkuman keputusan UX untuk membangun halaman dan alur dengan Seragam: komponen mana untuk kebutuhan apa, urutan keadaan, umpan balik, formulir, gerak, dan cara memeriksa hasil. Sumbernya panduan komponen di [komponen/](README.md), [5 prinsip desain](prinsip-desain.md), [penulisan](penulisan.md), dan [DECISIONS](../DECISIONS.md). Bagian "Dari skill frontend-design" mencatat apa yang diambil dan apa yang sengaja tidak, supaya keputusannya bisa dipertanggungjawabkan.

> **Status: ekstensi (rangkuman keputusan tim).** Bukan panduan resmi tim Seragam. Aturan komponen tetap menang di halaman komponennya.

## 1. Prinsip penentu
1. **Seragam menang atas selera.** Token (warna, huruf Inter, radius, elevasi) dan komponen yang ada dipakai apa adanya; konsisten dan familier lebih penting daripada baru ([prinsip 5](prinsip-desain.md)). Kebebasan kreatif hanya di sumbu yang Seragam biarkan terbuka: komposisi halaman, isi dan teks, ilustrasi, dan halaman sambutan.
2. **Satu aksi utama per layar.** Satu tombol `ultimate` per halaman; aksi lain `primary`/`secondary`/`quiet`. Dua aksi penting bersebelahan dengan bobot sama tidak boleh.
3. **Satu elemen yang diingat, sisanya tenang.** Pada halaman sambutan atau kosong, biarkan satu hal menjadi fokus (judul, ilustrasi, atau satu ajakan) dan potong dekorasi yang tidak membantu tugas pengguna. Halaman kerja tidak memerlukan elemen "bintang".
4. **Struktur adalah informasi.** Garis, border, nomor, eyebrow, dan label dipakai hanya bila menyampaikan sesuatu. Nomor hanya untuk urutan sungguhan ([ProcessSteps](komponen/process-steps.md), [Stepper](komponen/stepper.md)); eyebrow atau label di atas judul hanya bila memuat informasi yang tidak ada di judul. Jangan memecah isi menjadi kartu identik; kelompokkan dengan [Panel](komponen/panel.md) hanya bila memang satu topik.
5. **Tulis dari sudut pandang pengguna.** Sebut hal menurut yang pengguna pahami, bukan cara sistem dibangun ([penulisan](penulisan.md)).

## 2. Peta keputusan: komponen mana untuk kebutuhan apa
| Kebutuhan | Pakai | Bukan |
|---|---|---|
| Aksi utama atau sekunder | [Button](komponen/button.md) | Chip, Link |
| Filter atau pilihan kontekstual | [Chip](komponen/chip.md) | Button (aksi maju/mundur alur) |
| Berpindah ke halaman lain di dalam teks | [Link](komponen/link.md) | Button (kecuali butuh ajakan menonjol) |
| Berpindah antarkonten **dalam satu halaman** | [Tabs](komponen/tabs.md) | Navigation Bar |
| Berpindah antarhalaman, menu atas | [Navigation Bar](komponen/navigation-bar.md) | Tabs |
| Berpindah antarhalaman, menu samping bertingkat | [Vertical Navigation](komponen/vertical-navigation.md) | Navigation Bar bersarang |
| Menunjukkan posisi dalam hierarki | [Breadcrumb](komponen/breadcrumb.md) | Tabs |
| Memilih satu dari ≤3 opsi tetap | [Radio](komponen/radio.md) | Select |
| Memilih satu dari >5 opsi atau data dinamis | [Select](komponen/select.md) / `CustomSelect` | Radio |
| Memilih beberapa, atau menyetujui | [Checkbox](komponen/checkbox.md) | Radio, Switch |
| Pengaturan on/off yang langsung berlaku | [Switch](komponen/switch.md) | Checkbox |
| Angka naik-turun bertahap | [Stepper](komponen/stepper.md) | Text Field |
| Tanggal | [Date Picker](komponen/date-picker.md) | Select tiga kolom, teks bebas |
| Kelompok Radio atau Checkbox berlabel | [Field Group](komponen/form-field.md) | `<span>` sebagai judul |
| Data berbasis teks, banyak, mudah dipindai | [List](komponen/list.md) | Card |
| Data berkolom dan dibandingkan | [Table](komponen/table.md) | List |
| Visual jadi fokus | [Card](komponen/card.md) | List |
| Informasi singkat saat hover/fokus | [Tooltip](komponen/tooltip.md) | Popover |
| Menu atau aksi tambahan singkat | [Popover](komponen/popover.md) | Modal |
| Interupsi yang butuh keputusan | [Modal](komponen/modal.md) (desktop), [Bottom Sheet](komponen/bottom-sheet.md) (mobile) | Toast |
| Pesan penting di halaman | [Banner](komponen/banner.md) | Toast |
| Konfirmasi singkat yang hilang sendiri | [Toast](komponen/toast.md) | Banner |

## 3. Urutan keadaan: semua halaman data punya lima
| Keadaan | Tampilan | Aturan |
|---|---|---|
| **Memuat** | [Skeleton](komponen/loading.md) untuk konten, Spinner untuk aksi tanpa perkiraan, [Progress Bar](komponen/progress-bar.md) bila terukur | Bentuk Skeleton sama dengan konten supaya tata letak tidak melompat; judul memuat berelipsis ("Mengirim laporan…") |
| **Kosong** | [Empty State](komponen/empty-state.md) | Jelaskan mengapa kosong dan arahkan langkah berikutnya; kosong adalah ajakan bertindak, bukan suasana |
| **Galat** | Teks bantu di isian, [Banner](komponen/banner.md) `critical` di halaman, [Modal](komponen/modal.md) bila memblokir | Sebut apa yang salah dan cara memperbaikinya; jangan meminta maaf, jangan samar, jangan teknis |
| **Berhasil** | [Toast](komponen/toast.md) | Singkat; kata kerjanya sama dengan tombol yang memicunya |
| **Terisi** | Komponen data | Tangani teks panjang (2 baris desktop, 3 baris mobile pada tabel) dan jumlah banyak ([Pagination](komponen/pagination.md)) |

## 4. Umpan balik dan konfirmasi
- **Aksi destruktif:** `destructive` (final) dengan konfirmasi di Modal berjudul sama dengan aksinya; `dismissOnOverlay={false}` agar tidak salah tutup. Aksi bernada rendah memakai `destructive-secondary`.
- **Aksi yang bisa dibatalkan** lebih baik dari konfirmasi: Toast dengan "Urungkan" (Action link) menggantikan Modal "Yakin?" untuk aksi yang mudah dibalik.
- **Satu pesan sekali waktu:** satu Toast menggantikan yang lama; jangan menumpuk Banner atau Modal.
- **Kata kerja yang sama sepanjang alur:** tombol "Kirim laporan" → Modal "Kirim laporan?" → Toast "Berhasil mengirim laporan!". Jangan ganti nama aksi di tengah alur.
- **Berikan umpan balik cepat:** tombol punya `loading`; proses lama memberi perkiraan waktu yang akurat dan tidak berpura-pura selesai.

## 5. Formulir
Label selalu ada dan di atas kolom; `helper` untuk format; `error` menjelaskan masalah dan solusi, muncul di dekat kolomnya, bukan alert terpisah. Satu kolom per baris di mobile, lebar penuh; jarak antar kolom isian minimal 24px. Data sensitif diberi peringatan. Placeholder berupa contoh nyata, bukan instruksi. Tombol kirim memakai kata kerja spesifik ("Simpan perubahan"), nonaktif hanya bila aksi memang belum mungkin.

## 6. Gerak
- Gerak **menjawab aksi pengguna** (membuka, melipat, memastikan) dan menunjukkan apa yang berubah. Itu selalu diterima.
- Gerak yang **berjalan sendiri** (autoplay, animasi masuk) secukupnya dan tidak di setiap bagian. Satu momen lebih baik dari banyak efek; tanpa fade-and-slide di setiap seksi dan tanpa transisi hover di setiap kartu.
- **Selalu hormati `prefers-reduced-motion`** dan beri kendali jeda untuk apa pun yang bergerak lebih dari beberapa detik ([Carousel](komponen/carousel.md)).

## 7. Tipografi dan teks di halaman
- Skala huruf lewat token ([tipografi](../foundations/tipografi.md)); jangan angka.
- **Panjang baris di bawah ±80 karakter** untuk blok teks (`max-w-[68ch]` seperti `PageHeader`).
- Label tetap sesuai komponen (header tabel dan subheading memang KAPITAL menurut token). **Jangan menambah** huruf kapital semua, eyebrow, atau label baru untuk menghias.
- Jangan memakai "→" di akhir tombol atau tautan, label berformat "KATA — fragmen", atau rangkaian titik tengah ("A · B · C") di teks UI.
- Isi contoh memakai konteks nyata pendidikan (guru, sekolah, rapor, modul ajar), bukan "Lorem ipsum" atau nama generik.

## 8. Halaman sambutan dan kosong: di mana kebebasan boleh dipakai
Halaman kerja (beranda, daftar, formulir, laporan) tidak diberi kejutan visual. Halaman sambutan, halaman kosong, dan pesan keberhasilan besar boleh diberi satu momen khas: ilustrasi ([ilustrasi](ilustrasi.md)), judul besar (lihat entri skala display di DECISIONS 2026-11-06), atau satu ajakan, selama tetap memakai token. Hero dibuka dengan hal paling khas dari konteksnya (misalnya data atau tugas nyata pengguna), bukan angka besar dengan gradasi.

## 9. Memeriksa hasil sebelum dianggap selesai
Merancang lalu **mengkritik hasilnya**, bukan hanya mengirim kode:
1. **Rencana ringkas dulu:** komponen mana (peta bagian 2), keadaan apa saja (bagian 3), teks apa (penulisan).
2. **Bangun dengan komponen dan token**, bukan kelas atau angka sendiri.
3. **Periksa di browser** pada lebar mobile (≈360) dan desktop (≈1440), dengan tangkapan layar bila bisa: apa yang tampak kecil, terpotong, atau bertabrakan?
4. **Periksa perilaku**: keyboard (`Tab`, `Esc`, panah) dan fokus terlihat, kelima keadaan, `prefers-reduced-motion`, teks panjang.
5. **Cocokkan dengan panduan komponen** (perilaku, responsif, penulisan). Bila ada yang "belum ada di kode", beri tahu dan tandai.
6. **Buang satu hiasan** sebelum selesai: bila elemen tidak membantu tugas, hapus.

## Dari skill frontend-design: diambil dan tidak
| Diambil | Alasan |
|---|---|
| Kosakata sama sepanjang alur; galat tidak meminta maaf dan tidak samar | Menguatkan prinsip penulisan |
| Struktur hanya bila informatif; nomor hanya untuk urutan | Selaras dengan penggunaan ProcessSteps dan Stepper |
| Gerak hanya menjawab aksi; hormati reduced motion | Sudah diterapkan di Carousel dan Spinner, kini jadi aturan |
| Baris < 80 karakter; satu elemen yang diingat | Keterbacaan dan satu aksi utama |
| Rencana, bangun, kritik dengan tangkapan layar | Menjamin tampilan dan perilaku sesuai panduan |

| Tidak diambil | Alasan |
|---|---|
| Huruf, palet, dan layout "khas" per proyek | Token dan komponen Seragam menetapkannya; konsisten mengalahkan baru |
| Larangan huruf kapital semua untuk label | Header tabel dan subheading Seragam memang kapital menurut token |
| Gerak masuk terorkestrasi, hero eksperimental di halaman kerja | Hanya untuk halaman sambutan, dan tetap memakai token |
| Menghindari kartu bersudut seragam dan bayangan sama | Seragam punya hierarki radius (kontrol 4, kartu 8) dan elevasi sendiri |
