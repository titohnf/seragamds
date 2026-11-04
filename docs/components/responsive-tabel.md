# Responsive Tabel (done)

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Responsive Tabel (done)` (node `9535:6036`).

## Assets / Column header

12 varian. Properti:
- **Type**: Default, Subtle
- **Border**: False, True
- **Size**: Large, Medium, Small

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Default, Border=False, Size=Large
- Root: ukuran 117.0x48.0; layout horizontal; padding 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0px 2.0px 1.0px 0px rgba(0,0,0,0.05)
- Teks `Heading` "TABLE HEAd": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)

### Type=Subtle, Border=False, Size=Large
- Root: ukuran 117.0x48.0; layout horizontal; padding 16.0; gap 24.0; fill surface-subdued-alt (#F5F5F5); shadow 0.0px 2.0px 1.0px 0px rgba(0,0,0,0.05)
- Teks `Heading` "TABLE HEAd": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)

### Type=Default, Border=True, Size=Large
- Root: ukuran 117.0x48.0; layout horizontal; padding 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px inside; shadow 0.0px 2.0px 1.0px 0px rgba(0,0,0,0.05)
- Teks `Heading` "TABLE HEAd": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)

### Type=Default, Border=False, Size=Medium
- Root: ukuran 109.0x40.0; layout horizontal; padding 12.0; gap 24.0; fill white (#FFFFFF); shadow 0.0px 2.0px 1.0px 0px rgba(0,0,0,0.05)
- Teks `Heading` "TABLE HEAd": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)

### Type=Default, Border=False, Size=Small
- Root: ukuran 101.0x32.0; layout horizontal; padding 8.0; gap 24.0; fill white (#FFFFFF); shadow 0.0px 2.0px 1.0px 0px rgba(0,0,0,0.05)
- Teks `Heading` "TABLE HEAd": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)

## Assets / Cell

12 varian. Properti:
- **Type**: Basic, Stripe
- **Border**: True, False
- **Size**: Large, Medium, Small

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Basic, Border=True, Size=Large
- Root: ukuran 118.0x54.0; layout horizontal; padding 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Cell` "Cell content": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Type=Stripe, Border=True, Size=Large
- Root: ukuran 118.0x54.0; layout horizontal; padding 16.0; gap 24.0; fill #FAFAFA; stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Cell` "Cell content": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Type=Basic, Border=False, Size=Large
- Root: ukuran 118.0x54.0; layout horizontal; padding 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Cell` "Cell content": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Type=Basic, Border=True, Size=Medium
- Root: ukuran 110.0x46.0; layout horizontal; padding 12.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Cell` "Cell content": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Type=Basic, Border=True, Size=Small
- Root: ukuran 102.0x38.0; layout horizontal; padding 8.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px inside
- Teks `Cell` "Cell content": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

## Table fit

6 varian. Properti:
- **Type**: Basic, Stripe
- **Size**: Large, Medium, Small

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Basic, Size=Large
- Root: ukuran 360.0x418.0; layout vertical
- `Header/Assets / Column header`: 124.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 60.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 176.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Hesti Usada": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 60.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "41": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 176.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Cluster Mawar No.32F RT04/12": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x98.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Fathonah Hassanah S.Gz": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- …

### Type=Stripe, Size=Large
- Root: ukuran 360.0x418.0; layout vertical
- `Header/Assets / Column header`: 124.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 60.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 176.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x76.0; pad 16.0; gap 24.0; fill #FAFAFA
- Teks `Row/Assets / Cell/Cell` "Hesti Usada": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 60.0x76.0; pad 16.0; gap 24.0; fill #FAFAFA
- Teks `Row/Assets / Cell/Cell` "41": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 176.0x76.0; pad 16.0; gap 24.0; fill #FAFAFA
- Teks `Row/Assets / Cell/Cell` "Cluster Mawar No.32F RT04/12": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x98.0; pad 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Row/Assets / Cell/Cell` "Fathonah Hassanah S.Gz": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- …

### Type=Basic, Size=Medium
- Root: ukuran 360.0x422.0; layout vertical
- `Header/Assets / Column header`: 109.0x40.0; pad 12.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 109.0x40.0; pad 12.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 142.0x40.0; pad 12.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 110.0x68.0; pad 12.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Hesti Usada": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 110.0x68.0; pad 12.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "41": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 140.0x68.0; pad 12.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Cluster Mawar No.32F RT04/12": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 110.0x112.0; pad 12.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Fathonah Hassanah S.Gz": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- …

### Type=Basic, Size=Small
- Root: ukuran 360.0x338.0; layout vertical
- `Header/Assets / Column header`: 101.0x32.0; pad 8.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 101.0x32.0; pad 8.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 158.0x32.0; pad 8.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 102.0x60.0; pad 8.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Hesti Usada": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 102.0x60.0; pad 8.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "41": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 156.0x60.0; pad 8.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Cluster Mawar No.32F RT04/12": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 102.0x82.0; pad 8.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Fathonah Hassanah S.Gz": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- …

## Table scrollable

2 varian. Properti:
- **Type**: Basic, Stripe

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Basic
- Root: ukuran 360.0x482.0; layout vertical
- `Scroll`: 311.0x8.0; radius 40.0; fill black (#000000)
- `Header/Assets / Column header`: 124.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 60.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 176.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Ayu Umi Pertiwi": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 60.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "60": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 200.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- Teks `Row/Assets / Cell/Cell` "Jl. Cihampelas No. 56 B": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x54.0; pad 16.0; gap 24.0; fill white (#FFFFFF); stroke border-disabled-alt (#D9DBDD) 1.0px
- …

### Type=Stripe
- Root: ukuran 360.0x482.0; layout vertical
- `Scroll`: 311.0x8.0; radius 40.0; fill black (#000000)
- `Header/Assets / Column header`: 124.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "NAME": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 60.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "AGE": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Header/Assets / Column header`: 176.0x48.0; pad 16.0; gap 24.0; fill white (#FFFFFF); shadow 0.0 2.0 1.0 0 rgba(0,0,0,0.05)
- Teks `Header/Assets / Column header/Heading` "ADDRESS": Inter 13.0/16.0 w600 upper ls 0.5 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Row/Assets / Cell/Cell` "Ayu Umi Pertiwi": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 60.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Row/Assets / Cell/Cell` "60": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 200.0x76.0; pad 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Row/Assets / Cell/Cell` "Jl. Cihampelas No. 56 B": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Row/Assets / Cell`: 124.0x54.0; pad 16.0; gap 24.0; fill #FAFAFA
- …
