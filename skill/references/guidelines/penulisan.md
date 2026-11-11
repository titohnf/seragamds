# Panduan penulisan

Berlaku untuk semua teks di antarmuka. Sumber: seragam.belajar.id (penulisan, prinsip komunikasi, gaya bahasa, inklusivitas). Semua teks dalam Bahasa Indonesia. Halaman "Strategi Penulisan Kasus Unik" di situs sumber belum punya isi, jadi belum ada di sini.

Panduan ini disusun tim penulis produk INA Digital Edu (pertengahan–akhir 2024) untuk mengenali pengguna dan cara mereka membaca, serta menjaga konsistensi penulisan sebagai penguat branding. Pembacanya: UX writer, penulis Brand and Communication (skrip, key visual, push notification, voice over), tim Ops, Konten, Substansi, Marketing, dan siapa pun yang menulis untuk pengguna.

## Prinsip utama: kejelasan di atas segalanya
Kejelasan adalah prioritas pertama. Gaya bahasa dipertimbangkan setelah pesan jelas. Jika harus memilih antara jelas dan bergaya, pilih jelas.

## Empat prinsip komunikasi (wajib)
1. **Menulis dengan empati.** Pahami tantangan pengguna, beri solusi nyata.
2. **Jelas dan ringkas.** Sampaikan hal penting dalam waktu sesingkat mungkin.
3. **Membimbing.** Beri panduan, bukan perintah; bangun kemandirian pengguna.
4. **Menggunakan fakta.** Berdasarkan sumber resmi dan tepercaya.

## Gaya bahasa
- **Lugas:** langsung ke inti, tidak berbunga-bunga.
- **Formal tetapi tidak kaku:** sopan dan profesional, mudah dipahami; bukan bahasa baku penuh.

Prinsip komunikasi menentukan **apa** yang disampaikan (wajib, diutamakan). Gaya bahasa menentukan **bagaimana** (opsional, pelengkap): terdiri dari *voice* (sosok) dan *tone* (cara mengekspresikannya). Yang menyatukan semua produk: empat prinsip, ditambah dua gaya umum di atas. Sosok berbeda per produk.

| Sosok | Posisi terhadap pengguna | Kata kunci | Kelugasan | Formalitas |
|---|---|---|---|---|
| Rekan | Sesama rekan kerja atau teman curhat; setara | persuasif, kasual, naratif, humanis, suportif, ajakan dan seruan semangat | Sedang: langsung ke inti, ada ruang untuk ajakan | Cenderung tidak formal; dekat dengan budaya pengguna |
| Tenaga operasional | Seperti orang Tata Usaha: lebih tahu, tetap setara | formal, teknis, diandalkan, cepat, efektif, paham jalan pintas | Sangat lugas; boleh bahasa teknis | Netral |
| Atasan | Atasan atau manajer: lebih tinggi karena wewenang dan wawasan | deskriptif, kredibel, sopan, regulasi, substansi, instruktif, berhati-hati | Sedang: tidak bertele-tele, tidak terlalu transparan | Sangat formal |

Pilih sosok sesuai produk: Rekan untuk produk kolaborasi antarguru, Tenaga operasional untuk sistem administrasi, Atasan untuk produk regulasi/kebijakan. **Kejelasan di atas gaya**: tulis sejelas mungkin dulu, baru beri nuansa.

## Panduan per elemen

### Tombol
Kata kerja spesifik, maksimal 2–3 kata, sentence case, tanpa titik di akhir.

| ✅ Benar | ❌ Salah |
|---|---|
| Simpan perubahan | SIMPAN |
| Kirim laporan | Klik Di Sini |
| Masuk | OK. |
| Hapus data | SUBMIT |
| Cek selengkapnya | Selengkapnya... |

### Label kolom
Ringkas dan jelas. Beri peringatan bila informasinya sensitif.

| ✅ Benar | ❌ Salah |
|---|---|
| Nama lengkap | Name |
| Email aktif | Email Address |
| Nomor telepon (opsional) | Phone |

### Placeholder
Deskriptif dan singkat, dengan contoh nyata.

| ✅ Benar | ❌ Salah |
|---|---|
| cth. nama@email.com | Enter your email |
| cth. Budi Santoso | Type here... |
| cth. 08123456789 | Phone number |

### Teks bantu
Jelaskan format yang diharapkan dan beri konteks yang membantu.

| ✅ Benar | ❌ Salah |
|---|---|
| Gunakan email yang aktif untuk verifikasi | Email harus valid |
| Maks. 150 karakter | Don't exceed 150 chars |

### Pesan galat
Jelaskan **apa** yang salah dan **bagaimana** memperbaikinya. Jangan teknis, jangan menyalahkan pengguna.

| ✅ Benar | ❌ Salah |
|---|---|
| Email tidak valid. Pastikan menggunakan format nama@email.com | Error 400: Invalid email |
| Kata sandi terlalu pendek. Gunakan minimal 8 karakter | Password error |
| Kolom ini wajib diisi | Required field |

### Empty state
Judul Title Case, deskripsi sentence case. Selalu jelaskan mengapa kosong dan arahkan langkah berikutnya.

| ✅ Benar | ❌ Salah |
|---|---|
| **Belum Ada Laporan** — Buat laporan pertamamu untuk mulai memantau perkembangan. | Tidak ada data |
| **Pencarian Tidak Ditemukan** — Coba gunakan kata kunci yang berbeda. | No results |

### Loading
Judul menjelaskan aksi yang berjalan, kalimat aktif, **selalu diakhiri elipsis** ("Mengirim laporan…"). Deskripsi menyebut lama menunggu ("Mohon tunggu sebentar"); bila lama, tenangkan pengguna. Lihat [loading](komponen/loading.md).

| ✅ Benar | ❌ Salah |
|---|---|
| Mengirim laporan… Mohon tunggu sebentar | Loading |
| Menyimpan perubahan… | Selesai! (padahal belum) |

### Toast dan notifikasi
Singkat, maksimal 1–2 kalimat. Untuk konfirmasi aksi yang selesai. Jangan dipakai untuk galat yang butuh tindakan.

| ✅ Benar | ❌ Salah |
|---|---|
| Data berhasil disimpan | Success: Data saved successfully! |
| Laporan telah dikirim | Your report has been submitted |

## Konsistensi dan tanda template (keputusan UX)
- **Kata kerja yang sama sepanjang alur.** Tombol "Kirim laporan" → judul Modal "Kirim laporan?" → Toast "Berhasil mengirim laporan!". Jangan ganti nama aksi di tengah alur; kosakata antarmuka adalah penunjuk jalan.
- **Galat tidak meminta maaf dan tidak samar.** Sebut apa yang salah dan cara memperbaikinya, dengan suara antarmuka, bukan suara seseorang. ❌ "Maaf, terjadi kesalahan." ✅ "Laporan belum terkirim. Periksa sambungan internet lalu coba lagi."
- **Kosong adalah ajakan bertindak**, bukan suasana hati.
- **Hindari tanda template di teks UI:** panah "→" di akhir tombol atau tautan, label berformat "KATA — fragmen", dan rangkaian titik tengah ("A · B · C"). Tulis kalimat atau label biasa.
- **Nama menurut pemahaman pengguna**, bukan cara sistem dibangun: pengguna mengelola "notifikasi", bukan "konfigurasi webhook".
- Lihat juga [keputusan UX](keputusan-ux.md).

## Inklusivitas

### Pilihan kata
| ❌ Dihindari | ✅ Disarankan |
|---|---|
| Lihat, Baca, Tonton video | Cek, Pelajari, Tampilkan, Putar video |
| Pengguna | Anda, Kamu |
| Balik | Kembali, Ke [nama halaman] |
| Singkirkan, Buang | Tutup, Batalkan, Sembunyikan |
| Modifikasi | Ubah, Edit |
| Jargon teknis | Bahasa umum; jelaskan singkatan saat pertama disebut |

Tambahan dari panduan:
- "Pengguna" boleh dipakai bila konteksnya bergantung peran tertentu (mis. admin). Jangan menyorot satu target audiens saja.
- Singkatan: jelaskan saat pertama disebut (dalam kurung atau kalimat). Hindari slang dan jargon.
- Pesan galat tanpa istilah teknis ("server error timeout"); arahkan ke bantuan atau coba lagi nanti.
- Gunakan "Coba" atau "Mulai" alih-alih "Rasakan" atau "Alami"; "Tutup", "Batalkan", "Sembunyikan" alih-alih "Hentikan".
- Proses bertahap: tampilkan posisi tahap ("1 dari 3 tahap") dan beri tahu apa yang perlu dilakukan.

### Kejelasan
- Informasi utama di kalimat pertama: pembaca layar sering hanya mendengar kalimat pertama pada kecepatan tinggi. Humor boleh, asal informasi tetap jelas sejak awal.
- Jangan pakai petunjuk arah ("tombol di kanan atas", "tombol biru di bawah"). Sebut nama atau label elemennya; petunjuk visual hanya pelengkap.
- Ikon dan emoji tidak selalu terbaca pembaca layar; pakai emoji hanya bila sesuai konteks.
- Pakai komponen desain dan format yang tepat untuk membagi informasi.

### Konteks budaya
- Jangan mengasumsikan jabatan dipegang gender tertentu.
- Sapa dengan nama pengguna; bila perlu sapaan, "Bapak/Ibu". Bukan "Bapak/Ibu [jabatan]".
- Gunakan lingua franca: bahasa Indonesia yang umum dipahami; ganti sapaan bahasa daerah.

### Teks alternatif gambar
Dua jenis teks perlu bermakna: teks yang terlihat dan teks yang tidak terlihat (dibacakan pembaca layar: alt text ikon, gambar, alur kerja, tutorial).

- **Tentukan dulu perlu atau tidak.** Bila teks di sekitar gambar sudah menjelaskan isinya, alt text bisa dikosongkan (`alt=""`); jangan mengulang.
- **Bersifat tambahan**: beri konteks yang hilang bagi yang tak bisa melihat gambar.
- **Konsisten** dengan gaya bahasa produk, tanpa jargon yang belum diperkenalkan.
- **Suara aktif**, sentence case, diakhiri titik, tanpa singkatan.
- **Cara praktis**: bayangkan mendeskripsikan gambar lewat telepon.
- Banyak gambar: beri nomor ("Gambar 1") lalu deskripsikan.
- Ikon: deskripsikan **fungsi**, bukan bentuk. Ikon tanda tanya = "Informasi tambahan", bukan "Tanda tanya".

| ✅ Benar | ❌ Salah |
|---|---|
| Guru sedang mengajar di depan kelas. | image1.jpg |
| Ilustrasi siswa membaca buku. | Gambar siswa |

## Rencana sumber
Situs sumber berencana menambah panduan inklusivitas untuk disabilitas (mental, netra, tuli, bisu, fisik, bahasa isyarat), gender, umur, dan status ekonomi/sosial. Referensi: Adobe, Atlassian, Conscious Style Guide, Material Design Accessibility, NCDJ, POUR, WCAG.

## Daftar periksa
- [ ] Semua teks Bahasa Indonesia
- [ ] Tombol: kata kerja aktif, sentence case, maks 3 kata
- [ ] Label ringkas dan jelas
- [ ] Placeholder berupa contoh nyata, bukan instruksi
- [ ] Teks bantu: format + konteks
- [ ] Pesan galat: masalah + solusi, tidak teknis
- [ ] Empty state: judul Title Case, deskripsi sentence case dan mengarahkan tindakan
- [ ] Tidak ada "Lorem ipsum"
- [ ] Teks alternatif untuk semua gambar yang informatif
- [ ] Tidak ada jargon tanpa penjelasan
- [ ] Tidak ada asumsi gender pada jabatan
