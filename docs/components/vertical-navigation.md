# Vertical Navigation

Sumber: Figma *Seragam Web*, halaman `Vertical Navigation` (node `10:2`).

## Vertical Navigation

2 varian. Properti:
- **Tru**: True (latar gelap), False (latar putih)

### Tru=True
- Root: 300x956; fill Expressive/Surface/Dark Blue (#103178); bayangan Elevation/01
- `Content`: layout vertical; pad atas 20, kiri 12; lebar 276; gap 12
- Teks menu: Inter 16.0/24.0 putih (Text/Inverse #FFFFFF)

### Tru=False
- Root: 300x956; fill putih (Surface/Default); bayangan Elevation/01
- Teks menu: Inter 16.0/24.0 gray-90 (Text/Default, #2F3031 di Figma = token `gray-90`)
- Catatan: lapisan hover dan aktif di Figma tetap putih 10% sehingga tak terlihat di latar putih (lihat DECISIONS)

## Assets / Menu (item induk tanpa sub-menu dan baris induk)

4 varian. Properti:
- **State**: Default, Hover, Active, Focused

Ukuran 278x48 (276 bila tanpa chevron); layout horizontal; pad 12; gap 12.
- Ikon: 24x24 di kiri; chevron `keyboard_arrow_down` 24x24 di kanan (hanya induk accordion)
- Teks: Inter 16.0/24.0, mengisi sisa lebar

### State=Default
- Radius 8; tanpa fill; teks Inter regular

### State=Hover
- Radius 8; fill putih 10% (rgba(255,255,255,0.1)); teks regular

### State=Active
- Radius 8; fill putih 10%; teks Inter **bold** (700)

### State=Focused
- Radius 4; stroke putih 2.0px; teks regular

## Assets / Parent with Accordion

6 varian. Properti:
- **State**: Default, Hover, Focused
- **Expanded**: No, Yes
- Expanded=Yes memakai chevron ke atas (`keyboard_arrow_up`), Expanded=No ke bawah

## Assets / Parent

4 varian (State: Default, Hover, Active, Focused). Induk tanpa accordion: ikon + teks, tanpa chevron, 276x48. Item aktif tingkat atas ("Page name 1") memakai varian ini.

## Assets / Child

4 varian (State: Default, Hover, Active, Focused). Sub-menu: 242x48, tanpa ikon, pad 12, gap 12; state sama dengan Assets / Menu. Wadah `Child`: lebar 242, rata kanan (menjorok 36px dari tepi kiri item), gap antar anak 8.

Deskripsi komponen di Figma: "Click child to view option".
