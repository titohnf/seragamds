# Ilustrasi

Sumber: seragam.belajar.id (Ilustrasi: prinsip, tipe, peran, palet warna, cara menggambar). Ilustrasi adalah alat berkomunikasi: menambah kejelasan, memperkuat pesan, dan menambah nilai. Panduan ini untuk ilustrator dan desainer. Galeri Ilustrasi (Figma `MIdf08QSwNcwX8J4koF7EX`) berupa gambar dan tidak disalin ke sini. Untuk **membuat** ilustrasi sesuai panduan ini sebagai SVG, pakai skill `seragam-illustration` (folder `skill-illustration/`: katalog galeri, palet terkunci, contoh SVG, validator, dan pratinjau). Nilai heks palet ada di [palet ilustrasi](../foundations/palet-ilustrasi.md).

## Prinsip
1. **Lugas dalam penyampaian**: jelas dan bermakna umum; tidak ambigu.
2. **Membangkitkan minat, emosi, dan aksi.**
3. **Akrab dan dekat dengan keseharian**: situasi yang sudah dikenal pengguna.
4. **Sederhana dalam detail**: bentuk, perspektif, dan warna sederhana.
5. **Inklusif dan menunjukkan keberagaman** pengguna.

## Tipe
| Tipe | Fungsi | Dipakai di |
|---|---|---|
| **Hero** | Merangkum keseluruhan pesan, menarik perhatian | Head/cover banner; poster, banner media sosial, video |
| **Spot** | Lebih kecil dan sederhana; pesan dan petunjuk cepat | USP, onboarding, pengumuman, indikator progres |
| **Empty State** | Mirip spot tetapi lebih besar; menggambarkan situasi dan menuntun ke aksi | [EmptyState](komponen/empty-state.md) (prop `artwork`) |

## Peran
- **Di antarmuka**: petunjuk cepat, memperjelas, melengkapi teks tanpa membebani, menuntun agar pengguna percaya diri bertindak, merayakan keberhasilan.
- **Di media dan branding**: menerjemahkan gagasan rumit/abstrak, menggambarkan pengalaman kontekstual, memperkuat tujuan komunikasi atau brand, menuntun audiens.

## Palet warna
Nilai heks lengkap: [palet ilustrasi](../foundations/palet-ilustrasi.md). Untuk ilustrator, selaras dengan gaya ilustrasi. Setiap warna punya 5 turunan dari terang ke gelap yang berbeda *value* dan *hue* untuk membentuk cahaya dan bayangan. Setiap ilustrasi memakai tiga elemen: warna dasar, bayangan, garis detail; pilih tiga dari lima turunan. Hindari gradasi pada spot/empty state.

## Cara menggambar: Hero
- **Gaya**: flat illustration, warna tegas, bayangan secukupnya, outline minimalis. Antara kartun dan realis: menyenangkan tetapi profesional, tidak kekanak-kanakan. Ujung tumpul (rounded). Subjek flat dengan garis tegas pada detail (juga mencegah kontras rendah). Tebal garis menyesuaikan ukuran subjek.
- **Karakter**: proporsi realistis; tinggi menurut rentang usia dan jenis kelamin; garis bantu tiga sudut (depan, samping, 3/4); variasikan berat badan. Garis bantu hanya panduan.
- **Anak dengan disabilitas**: struktur sama dengan karakter lain; peka pada pose dan ekspresi; hindari label negatif, fokus pada keunikan; tampilkan alat bantu (kursi roda, alat bantu jalan/dengar) secara wajar dengan pose dan ekspresi positif.
- **Gestur**: fleksibel, menunjukkan gerak/aksi; hindari kaku, robotik, atau diam. Sudut kamera dinamis.
- **Wajah**: keberagaman bukan hanya warna kulit; variasikan rambut, alis, dagu, rahang, hidung, mulut, dahi. Ekspresi sesuai perasaan dan konteks.
- **Komposisi**: rule of thirds, diagonal/double diagonal, segitiga, garis bantu lingkungan, simetris di latar, golden ratio, subjek dominan.
- **Arah kamera**: shot lebar, jauh, sedang, koboi, rapat, atas bahu, tinggi (dinamis), rendah (otoritas), orang pertama; pilih sesuai tujuan.
- **Latar depan**: titik fokal jelas, sederhana, kontras dan *value* cukup, cenderung cerah (tidak kusam, tidak menyilaukan).
- **Latar belakang**: monokrom (fokus ke latar depan), garis (di produk, agar tidak menarik perhatian), warna penuh (video, brand, pemasaran); tanpa latar bila hanya menambah rumit.

## Cara menggambar: Spot dan Empty State
- **Gaya**: flat, geometris, ujung tumpul; tangan dan unsur manusia tidak kaku; warna memberi kedalaman dan pencahayaan dinamis.
- **Bentuk**: sederhana, mudah dikenali pada ukuran kecil, detail seperlunya. Lebih dari satu objek boleh bila perlu, asal objek pendukung tidak dominan dan semuanya satu kesatuan.
- **Warna**: pakai contoh kombinasi; tiap pertemuan dua warna beda *value*; cenderung cerah; **tanpa gradasi**.
- **Cahaya dan bayangan**: terdiri dari light, base, shadow (elemen opsional boleh dibuang). Sumber cahaya di pojok atas objek, tidak terlalu tinggi/rendah. Pada empty state yang luas, cahaya boleh berinteraksi dengan lingkungan (mis. dari sela jendela).
- **Perspektif dan fokus**: sudut seimbang, hindari ekstrem; arahkan fokus lewat warna, ukuran, frame, atau elemen pendukung.
- **Kanvas**: Spot besar **84×84 px**, Spot kecil **60×60 px** (grid hanya panduan; objek boleh melewati grid bila ada ruang kosong). Empty State **120 px**, berbentuk lingkaran, tanpa grid pasti.

## Untuk pengembang
- Pasang gambar informatif dengan teks alternatif ([penulisan](penulisan.md)); ilustrasi dekoratif `alt=""`.
- Ilustrasi empty state masuk lewat `EmptyState artwork`.
