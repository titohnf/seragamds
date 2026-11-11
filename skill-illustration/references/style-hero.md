# Cara Menggambar: Ilustrasi Hero

Sumber: https://seragam.belajar.id/cara-menggambar:-ilustrasi-hero

## Style

Kombinasi **flat illustration + warna tegas + bayangan minimalis + outline minimalis**. Komposisi dinamis, ide menyenangkan, karakter atraktif.

| Aspek | Aturan |
|---|---|
| Spektrum karakter | Seimbang antara kartun dan realis — menyenangkan tapi profesional, **tidak kekanak-kanakan**. |
| Bentuk | Ujung shape tumpul/rounded, fluid, tidak kaku. |
| Bayangan | Minimalis: base + **satu** tone shadow (turunan 40 dari ramp yang sama) berbentuk bidang tegas. Tidak ada gradien. |
| Garis detail | **Outline tegas** untuk memperkaya detail (lipatan baju, jari, telinga, hidung, rambut). Warna garis = turunan **gelap dari ramp objek itu sendiri** (mis. baju Blue → garis Blue 40/50; kulit Red Skin → garis Red Skin 50 / Yellow 50 `#7C3B00`). Rambut hitam pakai `#020A11`. Ketebalan seimbang dengan ukuran subjek — tidak terlalu tipis/tebal (±1.5–3px pada kanvas 1440 lebar). `stroke-linecap="round"`, `stroke-linejoin="round"`. |

## Struktur karakter

- Proporsi **realistis** (± 7–7.5 kepala untuk dewasa; anak 5–6 kepala). Tinggi badan variatif sesuai umur & gender.
- Variasi **berat badan** — seimbang dari kepala sampai kaki.
- Anak dengan disabilitas: kursi roda, alat bantu jalan, alat bantu dengar; pose & ekspresi positif, hormat, tanpa label negatif.
- Angle karakter: depan, samping, 3/4.

## Gestur

✅ Fleksibel, dinamis, menunjukkan aksi (jempol, menunjuk, menulis, mengangkat tangan, high-five), angle menarik.
❌ Kaku, robotik, berdiri lurus tanpa aktivitas.

## Wajah & ekspresi

- Variasi bentuk wajah (rambut, alis, dagu, rahang, hidung, mulut, dahi) — bukan hanya beda warna kulit.
- Gunakan 4 ramp skin (White/Yellow/Red/Brown Skin) secara beragam dalam satu adegan.
- Hijab, peci, seragam sekolah (putih-merah SD, putih-biru SMP, putih-abu SMA), batik, baju guru — relevan konteks Indonesia.
- Ekspresi sesuai konteks: senang, bangga, fokus, kaget, berpikir.
- Gaya wajah dari contoh: mata titik/elips kecil hitam, alis garis tegas, hidung garis sederhana, senyum garis/mulut terbuka berwarna putih.

## Komposisi (pilih satu, sebutkan di catatan desain)

Rule of thirds · Diagonal · Double diagonal · Segitiga · Garis bantu natural · Simetris · Golden ratio · Subjek dominan.

## Arah kamera

Shot lebar (lingkungan) · Shot jauh (seluruh tubuh) · Shot sedang (pinggang ke atas) · Shot koboi (paha ke atas) · Shot rapat (ekspresi) · Over-the-shoulder · Shot tinggi · Shot rendah (otoritas) · POV orang pertama.

Untuk banner produk, default: **shot sedang / koboi**, karakter terpotong di bawah frame (seperti contoh "MITRA" di panduan).

## Latar depan

- **Simpel**: subjek & objek secukupnya, satu titik fokus jelas. Terlalu banyak objek = gagal.
- Warna: dari palet; tiap objek pilih 3 dari 5 turunan untuk **base, shadow, garis detail**.
- Kontras value yang cukup antar warna; kecerahan cenderung tinggi (vibrant) tapi tidak menyilaukan.

## Latar belakang

| Tipe | Kapan |
|---|---|
| **Monokrom** | Fokus ke latar depan, tetap ekspresif. Satu ramp terang (mis. Soft Blue 10 `#CAF3F9`). |
| **Garis** | Area produk, mengurangi atensi latar. Bentuk lingkungan digambar dengan outline saja, tanpa isi. |
| **Warna full** | Video / komunikasi brand & marketing, paling atraktif. |
| **Tanpa latar** | Saat latar menambah kompleksitas berlebih terhadap UI (teks, komponen). |

Pola banner produk yang umum: **pita/rounded-rect warna terang (Soft Blue 10) di sepertiga bawah**, karakter berdiri di depannya, **sparkle 4-sudut Yellow 20 `#FCD222`** dan titik-titik kecil bertebaran di latar.

## Implementasi di SVG

Hero sangat kompleks untuk SVG tangan. Strategi:
1. Gambar di kanvas besar (mis. `viewBox="0 0 1440 480"`).
2. Setiap karakter jadi `<g>` sendiri: badan (fill base) → shadow shapes (fill 40) → outline detail (`stroke`, `fill="none"`) → wajah.
3. Bentuk tubuh pakai path kurva (C/Q), bukan rect/ellipse polos supaya tidak kaku.
4. Mulai dari 1–3 karakter maksimal. Kualitas > kuantitas.
5. Selalu render & cek (lihat SKILL.md langkah verifikasi). Jika anatomi terlihat janggal setelah 2–3 iterasi, sampaikan ke user dan tawarkan opsi gambar raster lewat Figma `generate_image` dengan prompt gaya di bawah, atau sarankan diselesaikan ilustrator.

### Prompt gaya untuk generator gambar (opsional, raster)

```
Flat vector illustration, Indonesian education context, <adegan>. Characters with realistic proportions, balanced between cartoon and realistic, professional not childish. Bold flat colors, minimal cel shading with one darker shadow tone, thin crisp outlines in a darker shade of each fill color, black hair, rounded soft shapes. Dynamic expressive gestures, diverse skin tones and face shapes<, hijab/school uniform jika relevan>. Light blue (#CAF3F9) rounded background band, small yellow four-point sparkles (#FCD222). Palette: blue #458CFF/#2560E0, yellow #EFB003/#FCD222, red #EF1616, green #2DB24F, skin tones #FFD47D #FEC283 #D19B5A. No gradients, no texture, no 3D, white background.
```
