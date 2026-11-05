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
| `bordered` | `true` (default) · `false` | Garis 1px `#D9DBDD` antar sel. |
| `headerTone` | `default` (putih) · `subtle` (`#F5F5F5`) | Latar header. |
| `caption` | teks | Judul tabel untuk pembaca layar (tidak tampil). Selalu isi. |

Tabel otomatis bisa digulir horizontal bila lebih lebar dari wadahnya. `TableHeaderCell` memakai `scope="col"` secara bawaan.

## Kapan memakai apa
| Kebutuhan | Pengaturan |
|---|---|
| Data dinamis atau ada interaksi (kotak centang, tombol aksi) | Dasar (`striped={false}`) |
| Data statis, banyak baris, hanya dibaca | `striped` |
| Tampilan ringan di dalam kartu | `bordered={false}` |
| Banyak data di layar sempit | `size="sm"` |

## Panduan
- Header ditulis sentence case di kode; komponen otomatis menampilkannya KAPITAL.
- Rata kiri untuk teks, rata kanan (`align="right"`) untuk angka.
- Sertakan [Pagination](pagination.md) bila data lebih dari 10–20 baris.
- Kolom Aksi: maksimal 2 tombol tampil langsung; lebih dari itu masuk menu ⋮ ([Popover](popover.md)).
- Tabel kosong: tampilkan [Empty State](empty-state.md) yang menjelaskan alasan kosong, bukan baris kosong.
- Status di sel memakai [Badge](badge.md), bukan teks berwarna.

## Do & Don't
- ✅ Satu tabel untuk satu kumpulan data yang sejenis.
- ✅ `caption` yang menyebut isi tabel.
- ❌ Memakai `<table>` mentah dengan kelas sendiri. Pakai komponen ini.
- ❌ Menaruh tata letak halaman di dalam tabel.
