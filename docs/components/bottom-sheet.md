# Bottom Sheet

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Bottom Sheet` (node `296:8783`).

## Assets / Action button

- Root: ukuran 360.0x71.0; fill white (#FFFFFF)
- `Line`: 360.0x1.0; fill border-disabled-alt (#D9DBDD)
- `Button`: 328.0x64.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0
- Teks `Button/Assets / Button/Text` "Button": Inter 15.0/22.0 w600 white (#FFFFFF)

## Assets / Menu

12 varian. Properti:
- **State**: Default, Hover, Focused, Pressed, Selected, Disabled
- **Icon**: true, false

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### State=Hover, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0; fill surface-subdued-alt (#F5F5F5)
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### State=Focused, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0; stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px inside
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### State=Pressed, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0; fill border-disabled-alt (#D9DBDD)
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### State=Selected, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0; fill surface-subdued-alt (#F5F5F5)
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### State=Disabled, Icon=true
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 808489 = gray-50 (#808489)

### State=Default, Icon=false
- Root: ukuran 344.0x46.0; layout horizontal; radius 4.0
- `Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Menu item/Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

## Assets / Menu Item

- Root: ukuran 344.0x46.0; layout horizontal; padding 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Label` "Label": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

## Assets / Header

3 varian. Properti:
- **Type**: Default, Menu, No title

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Default
- Root: ukuran 360.0x54.0; layout horizontal; padding 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF); shadow 0.0px 2.0px 4.0px 0px rgba(0,0,0,0.05)
- Teks `Title` "Sheet title": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Type=Menu
- Root: ukuran 360.0x54.0; layout horizontal; padding 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF)
- Teks `Title` "Sheet title": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)

### Type=No title
- Root: ukuran 360.0x54.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF)

## Overlay

- Root: ukuran 360.0x640.0
- `Overlay`: 360.0x640.0; fill black (#000000) @70%

## Menu

2 varian. Properti:
- **Icon**: True, False

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Icon=True
- Root: ukuran 360.0x246.0; layout vertical
- `Assets / Header`: 360.0x54.0; pad 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF)
- Teks `Assets / Header/Title` "Sheet title": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content`: 360.0x192.0; pad 0 8.0 8.0 8.0; fill white (#FFFFFF)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Kirim via email": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Copy link": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Simpan": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- …

### Icon=False
- Root: ukuran 360.0x246.0; layout vertical
- `Assets / Header`: 360.0x54.0; pad 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF)
- Teks `Assets / Header/Title` "Sheet title": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content`: 360.0x192.0; pad 0 8.0 8.0 8.0; fill white (#FFFFFF)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Kirim via email": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Copy link": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Assets / Menu/Menu item/Label` "Simpan": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Assets / Menu`: 344.0x46.0; radius 4.0
- `Content/Assets / Menu/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- …

## Dialog

4 varian. Properti:
- **Type**: Confirmation, Acknowledgement
- **Two line title**: false, true

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Confirmation, Two line title=false
- Root: ukuran 360.0x236.0; layout vertical; radius [12.0, 12.0, 0.0, 0.0]
- `Content`: 360.0x236.0; pad 20.0 16.0 16.0 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Content/Body/Title` "Keluar dari halaman ini?": Inter 18.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Content/Body/Supporting text` "Penilaian yang sudah Anda berikan tidak akan tersimpan dan p": Inter 15.0/22.0 w400 legacy 65686C = gray-60 (#65686C)
- `Content/Footer/Button`: 328.0x46.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Content/Footer/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0
- `Content/Footer/Button`: 328.0x46.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Content/Footer/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0

### Type=Acknowledgement, Two line title=false
- Root: ukuran 360.0x204.0; layout vertical; radius [12.0, 12.0, 0.0, 0.0]
- `Content`: 360.0x204.0; pad 20.0 16.0 16.0 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Content/Body/Title` "Gagal Masuk ke Akun": Inter 18.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Content/Body/Supporting text` "Email Anda belum terdaftar ke aplikasi ini. Silakan cek ke k": Inter 15.0/22.0 w400 legacy 65686C = gray-60 (#65686C)
- `Content/Footer/Button`: 328.0x46.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Content/Footer/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0

### Type=Confirmation, Two line title=true
- Root: ukuran 360.0x260.0; layout vertical; radius [12.0, 12.0, 0.0, 0.0]
- `Content`: 360.0x260.0; pad 20.0 16.0 16.0 16.0; gap 24.0; fill white (#FFFFFF)
- Teks `Content/Body/Title` "Anda yakin keluar dari halaman penilaian ini?": Inter 18.0/24.0 w600 legacy 2F3031 = gray-90 (#2F3031)
- Teks `Content/Body/Supporting text` "Penilaian yang sudah Anda berikan tidak akan tersimpan dan p": Inter 15.0/22.0 w400 legacy 65686C = gray-60 (#65686C)
- `Content/Footer/Button`: 328.0x46.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Content/Footer/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0
- `Content/Footer/Button`: 328.0x46.0; gap 8.0; radius 4.0; stroke legacy 808489 = gray-50 (#808489) 1.0px
- `Content/Footer/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0

## Default

3 varian. Properti:
- **Type**: Custom, With action, Selection picker

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Custom
- Root: ukuran 360.0x278.0
- `Content`: 360.0x224.0; fill white (#FFFFFF)
- `Header`: 360.0x54.0; pad 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF); shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.05)
- Teks `Header/Title` "Sheet title": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Type=With action
- Root: ukuran 360.0x349.0
- `Action`: 360.0x71.0; fill white (#FFFFFF)
- `Action/Line`: 360.0x1.0; fill border-disabled-alt (#D9DBDD)
- `Action/Button`: 328.0x64.0; gap 8.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031)
- `Action/Button/Assets / Button`: 328.0x46.0; pad 12.0 20.0; gap 4.0
- Teks `Action/Button/Assets / Button/Text` "Button": Inter 15.0/22.0 w600 white (#FFFFFF)
- `Content`: 360.0x224.0; fill white (#FFFFFF)
- `Header`: 360.0x54.0; pad 8.0 12.0 8.0 16.0; gap 12.0; radius [12.0, 12.0, 0.0, 0.0]; fill white (#FFFFFF); shadow 0.0 2.0 4.0 0 rgba(0,0,0,0.05)
- Teks `Header/Title` "Sheet title": Inter 16.0/22.0 w600 legacy 2F3031 = gray-90 (#2F3031)

### Type=Selection picker
- Root: ukuran 360.0x349.0
- `Content`: 360.0x225.0; fill white (#FFFFFF)
- `Content/Menu 1`: 344.0x46.0; radius 4.0
- `Content/Menu 1/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Menu 1/Menu item/Label` "Literasi": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Menu 2`: 344.0x46.0; radius 4.0; fill surface-subdued-alt (#F5F5F5)
- `Content/Menu 2/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Menu 2/Menu item/Label` "Numerasi": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Menu 3`: 344.0x46.0; radius 4.0
- `Content/Menu 3/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Menu 3/Menu item/Label` "Literasi Sains": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Menu 4`: 344.0x46.0; radius 4.0
- `Content/Menu 4/Menu item`: 344.0x46.0; pad 12.0 16.0 12.0 8.0; gap 12.0; radius 4.0
- Teks `Content/Menu 4/Menu item/Label` "Literasi Digital": Inter 15.0/22.0 w400 legacy 2F3031 = gray-90 (#2F3031)
- `Content/Menu 5`: 344.0x46.0; radius 4.0
- …
