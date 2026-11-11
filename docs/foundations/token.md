# Token

Sumber: seragam.belajar.id/token. Token desain adalah variabel global yang menjadi jembatan desain dan pengembangan, mendefinisikan elemen visual dan perilaku. Disusun bertingkat supaya mudah diperluas dan dipelihara.

| Tingkat | Isi | Contoh di repo ini |
|---|---|---|
| **Primitive** | Nilai mentah: kode warna, ukuran font, jarak dasar | `blue-70` = `#0954D9`, `gray-90` |
| **Semantic** | Memberi peran pada primitive | `action-default`, `text-subdued`, `surface-selected-default` |
| **Komponen** | Penerapan semantic pada elemen tertentu | token khusus komponen: `modal-header`, `table-stripe`, `badge-success` |

Aturan pakai: dari primitive, ke semantic, ke komponen. Di kode, pakai kelas token (`text-sd-gray-90`, `bg-sd-blue-5`), bukan hex. Halaman sumber tidak menjelaskan konvensi penamaan; konvensi di repo ini ada di `tokens/seragam.tokens.json` (kelompok `primitive`, `semantic`, `fixed`, `elevation`, `radius`, `typography`). Daftar nilai: [warna](warna.md), [tipografi](tipografi.md), [elevasi dan radius](elevasi-radius.md), [spacing](spacing.md).
