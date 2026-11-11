# Table

- Kode: `Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell` (`src/components`)
- Spesifikasi visual: [table.md](../../components/table.md)

> **Status: dari panduan Seragam** (seragam.belajar.id), disesuaikan ke props komponen di repo ini. Varian `vertical-striped`, `rounded`, dan `responsive` dari panduan lama belum ada di kode.

## Menyusun
```tsx
<Table caption="Daftar pegawai" striped>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Nama</TableHeaderCell>
      <TableHeaderCell>Jabatan</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Hesti Usada</TableCell>
      <TableCell>Guru Matematika</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Props `Table`
| Prop | Nilai | Kegunaan |
|---|---|---|
| `size` | `lg` (default, padding 16) · `md` (12) · `sm` (8) | Kepadatan baris. |
| `striped` | `false` (default) · `true` | Baris genap berlatar `table-stripe` (`#FAFAFA`). |
| `bordered` | `true` (default) · `'rows'` · `false` | Garis 1px `#D9DBDD`: `true` di semua sisi sel; `'rows'` hanya antar baris, tanpa garis vertikal antar kolom (ekstensi, lihat [extensions.md](../../extensions.md)); `false` tanpa garis. |
| `TableRow selected` | `false` (default) · `true` | Latar `surface-selected-default` untuk baris yang dipilih. |
| `headerTone` | `default` (putih) · `subtle` (`#F5F5F5`) · `neutral` (`#EFEFEF`, ekstensi) | Latar header. `subtle` hampir sama dengan latar halaman `#F9F9F9`, jadi di halaman berlatar abu pakai `neutral` agar header terbaca beda. |
| `hoverable` | `true` (default) · `false` | Sorotan hover baris. Matikan bila barisnya tidak bisa diklik dan hanya tombol di dalamnya yang interaktif. |
| `caption` | teks | Judul tabel untuk pembaca layar (tidak tampil). Selalu isi. |
| `stickyHeader` / `maxHeight` | `false` · angka/teks | Header menempel di atas saat isi menggulir; atur `maxHeight` untuk tabel panjang. |
| `stacked` | `false` · `true` | Di bawah 768px baris jadi kartu bertumpuk; wajib isi `label` pada tiap `TableCell`. |

Tabel otomatis bisa digulir horizontal bila lebih lebar dari wadahnya. `TableHeaderCell` memakai `scope="col"` secara bawaan.

## Kapan memakai apa
| Kebutuhan | Pengaturan |
|---|---|
| Data dinamis atau ada interaksi (kotak centang, tombol aksi) | Dasar (`striped={false}`) |
| Data statis, banyak baris, hanya dibaca | `striped` |
| Daftar data dengan tombol aksi yang terasa kaku bila bergaris kotak penuh | `bordered="rows"` (ekstensi) |
| Tampilan ringan di dalam kartu | `bordered={false}` |
| Banyak data di layar sempit | `size="sm"` |

## Panduan
- Header ditulis sentence case di kode; komponen otomatis menampilkannya KAPITAL.
- Rata kiri untuk teks (jangan pernah rata tengah), rata kanan (`align="right"`) untuk angka. Isi rata tengah secara vertikal di dalam baris.
- Nilai yang hilang atau tidak berlaku ditulis dengan en dash (–); beri teks tersembunyi (`sr-only`) bila artinya perlu dibacakan.
- Teks di sel maksimal 2 baris di desktop dan 3 baris di mobile; lebihnya dipotong atau tabel digulir (hanya mobile).
- Semua baris memiliki status hover. Tabel dengan baris yang bisa dipilih wajib punya kotak centang di kolom paling kiri; baris terpilih memakai `selected`.
- Hindari `striped` pada tabel interaktif: banyaknya variasi warna dari state interaksi membingungkan.
- Pemilihan baris yang langsung berlaku (tanpa langkah lanjutan) memakai kotak centang di kolom kiri. Bila memilih membuka dialog atau meminta isian lebih dulu (mis. menetapkan target), pakai tombol Secondary "Pilih" di kolom aksi; membatalkan pilihan memakai `destructive-secondary`. Dari semua tombol sejenis di tabel, tidak ada yang Ultimate; Ultimate hanya satu per layar, di luar tabel.
- Sertakan [Pagination](pagination.md) bila data lebih dari 10–20 baris.
- Kolom Aksi: maksimal 2 tombol tampil langsung; lebih dari itu masuk menu ⋮ ([Popover](popover.md)).
- Tabel kosong: tampilkan [Empty State](empty-state.md) yang menjelaskan alasan kosong, bukan baris kosong.
- Status di sel memakai [Badge](badge.md), bukan teks berwarna.

> Catatan: Figma *Seragam Web* (node `505:24585`) dan halaman Table di seragam.belajar.id menampilkan tabel dengan pemisah antar baris, header abu `#D9DBDD`, judul kolom Title Case, dan teks 14/20. Yang diadopsi hanya pemisah antar baris (`bordered="rows"`), hover, perataan tengah vertikal, dan `selected`. Warna header dan ukuran teks tetap mengikuti token Seragam dan skala mobile (header `subtle` `#F5F5F5` atau putih, 13/16 kapital, sel 15/22), karena file Figma Web tersebut diperkirakan belum diperbarui.

## Jenis dan responsif (panduan Seragam)
- **Plain vs Stripes**: *Plain* bila ada interaksi yang mengubah tampilan karena data dinamis (mis. dengan kotak centang); *Stripes* (`striped`) bila tidak ada interaksi dan datanya banyak serta statis.
- **Fit vs Scrollable** (mobile/app): *Fit* menampilkan semua isi tanpa gulir (data ringkas; tidak cocok untuk banyak kolom karena teks jadi terlalu kecil; ukuran Small/Medium/Large = `sm`/`md`/`lg`). *Scrollable* menggulir horizontal (ukuran tetap proporsional; butuh penanda atau kolom lengket agar konteks tidak hilang). Komponen ini otomatis scrollable bila lebih lebar dari wadah, dengan **bayangan di tepi yang masih bisa digeser** (indikator gulir). Untuk tabel yang kolomnya terlalu banyak di mobile, pakai `stacked`: di bawah 768px tiap baris menjadi kartu dan tiap sel menampilkan labelnya (isi `label` pada `TableCell`).
- **Teks di sel**: maksimal 2 baris di desktop, 3 baris di mobile; lebihnya truncate (desktop: dengan [Tooltip](tooltip.md)) atau tabel scrollable (hanya mobile).
- **Kolom aksi** di desktop tetap di ujung kanan, sejajar dengan konten.

| Breakpoint | Lebar | Catatan |
|---|---|---|
| Mobile (≤768) | 100% | grid dengan gulir horizontal + indikator; alternatif *stacked* bila kolom terlalu banyak; header lengket untuk tabel panjang |
| Tablet (769–1024) | 80–90% | gulir bila ≥ 6 kolom; kolom non-prioritas boleh disembunyikan/digabung ke tooltip; header lengket; tombol aksi minimal 40px |
| Desktop (1025–1440) | 60–70%, maks ±960px | tampil penuh bila kolom ≤ 8–9 |
| Large (1440+) | 40–50%, maks ±1280px | semua kolom satu layar; jarak kolom 24–32px; kolom aksi boleh berlabel + ikon |

Judul dan isi kolom ringkas, **maksimal 2–3 kata**, tanpa titik di akhir. (Situs menulis judul kolom Title Case; repo memakai sentence case yang ditampilkan KAPITAL; lihat catatan di bawah.) Header lengket: `stickyHeader` (+ `maxHeight` agar tabel panjang menggulir di dalam wadahnya).

## Do & Don't
- ✅ Satu tabel untuk satu kumpulan data yang sejenis.
- ✅ `caption` yang menyebut isi tabel.
- ❌ Memakai `<table>` mentah dengan kelas sendiri. Pakai komponen ini.
- ❌ Menaruh tata letak halaman di dalam tabel.
