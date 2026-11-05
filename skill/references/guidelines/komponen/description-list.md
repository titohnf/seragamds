# Description List

- Kode: `DescriptionList` (`src/components`)
- Spesifikasi visual: ada di halaman ini (ekstensi, tidak ada di Figma)

> **Status: ekstensi.** Komponen di luar Figma Seragam, dibuat karena pola label di atas nilai ditemukan berulang di proyek (data profil, detail usulan, formulir hanya-baca). Lihat [extensions.md](../../extensions.md). Usulkan ke tim desain Seragam.

Menampilkan data berpasangan: label kecil di atas, nilai di bawahnya. Untuk menampilkan, bukan mengisi. Untuk mengisi data, pakai [Text Field](text-field.md).

## Spesifikasi
| Bagian | Nilai |
|---|---|
| Label | 13/20 regular `gray-60` (elemen `dt`) |
| Nilai | 15/22 semibold `gray-90` (elemen `dd`); `emphasis: 'normal'` = regular; `muted` = `gray-60` |
| Jarak label–nilai | 4px |
| Jarak antar item | 16px (kolom dan baris) |
| Kolom | 1, 2 (default), atau 3. Jumlah kolom menyesuaikan **lebar wadah** (container query): 1 kolom di bawah 384px, 2 kolom mulai 384px, 3 kolom mulai 672px |
| Nilai panjang | `break-words`; `full: true` membentangkan item selebar baris |
| Hint | ikon 13px setelah label, mis. info |

## Props
`items`: daftar `{ label, value, hint?, full?, emphasis?, muted? }`; `columns` (`1` · `2` · `3`); `className`.

## Contoh
```tsx
<Panel title="Data Diri" icon={<User />}>
  <DescriptionList
    items={[
      { label: 'NIP', value: '198001012005011001' },
      { label: 'Tanggal Lahir', value: '1 Januari 1980' },
      { label: 'Alamat', value: 'Jl. Merdeka No. 1, Jakarta', full: true },
    ]}
  />
</Panel>
```

## Panduan
- Letakkan di dalam [Panel](panel.md) bila perlu judul dan pengelompokan.
- Isi nilai kosong dengan "-", bukan dibiarkan hilang.
- Urutkan item mengikuti cara pengguna membaca (kiri ke kanan, atas ke bawah).
- Data sensitif yang disamarkan (mis. titik-titik) diatur oleh pemanggil, komponen hanya menampilkan `value`.
- `emphasis: 'normal'` untuk daftar yang sebagian besar nilainya tidak berubah, dan `strong` untuk menandai nilai yang berubah.

## Do & Don't
- ✅ Label singkat dan konsisten ("NIP", "Tanggal Lahir").
- ✅ `full` untuk alamat, jabatan panjang, atau catatan.
- ❌ Menulis label dan nilai dengan `div` dan ukuran font manual.
- ❌ Memakai daftar deskripsi untuk data tabular banyak baris dan banyak kolom. Pakai [Table](table.md).
