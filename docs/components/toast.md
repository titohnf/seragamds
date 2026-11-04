# Toast

Sumber: Figma *Dokumentasi Seragam Mobile 3.0*, halaman `Toast` (node `296:8782`).

## Assets / Action

5 varian. Properti:
- **State**: Default, Hover, Pressed, Disabled, Focused

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### State=Default
- Root: ukuran 44.0x20.0; layout horizontal; gap 10.0
- Teks `Action` "Action": Inter 14.0/20.0 w600 legacy 91BCFD = blue-30 (#91BCFD)

### State=Hover
- Root: ukuran 44.0x20.0; layout horizontal; gap 10.0
- Teks `Action` "Action": Inter 14.0/20.0 w600 legacy 4C8DF6 = blue-50 (#4C8DF6)

### State=Pressed
- Root: ukuran 44.0x20.0; layout horizontal; gap 10.0
- Teks `Action` "Action": Inter 14.0/20.0 w600 legacy 0B5FEF = blue-70 (#0B5FEF)

### State=Disabled
- Root: ukuran 44.0x20.0; layout horizontal; gap 10.0
- Teks `Action` "Action": Inter 14.0/20.0 w600 border-subdued-alt (#C9CBCF)

### State=Focused
- Root: ukuran 44.0x20.0; layout vertical
- `Fcous ring/Base`: 53.0x26.0; radius 4.0; stroke legacy 4C8DF6 = blue-50 (#4C8DF6) 2.0px
- Teks `Action` "Action": Inter 14.0/20.0 w600 legacy 91BCFD = blue-30 (#91BCFD)

## Mobile

8 varian. Properti:
- **Type**: Default, Success
- **Two line**: False, True
- **Action**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Default, Two line=False, Action=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Semua informasi video harus diisi!": Inter 15.0/22.0 w400 white (#FFFFFF)

### Type=Success, Two line=False, Action=False
- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Murid berhasil ditambahkan.": Inter 15.0/22.0 w400 white (#FFFFFF)

### Type=Default, Two line=True, Action=False
- Root: ukuran 328.0x68.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Buku Teks sedang diunduh. Lihat progres di notifikasi perang": Inter 15.0/22.0 w400 white (#FFFFFF)

### Type=Default, Two line=False, Action=True
- Root: ukuran 328.0x72.0; layout vertical; padding 12.0 16.0; gap 4.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Gagal dalam menyimpan.": Inter 15.0/22.0 w400 white (#FFFFFF)
- Teks `Action` "Action": Inter 15.0/22.0 w600 legacy 91BCFD = blue-30 (#91BCFD)

## Mobile/Success/Two Line/With Action

- Root: ukuran 328.0x72.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Content/Message` "Video berhasil disimpan.": Inter 15.0/22.0 w400 white (#FFFFFF)
- Teks `Content/Action` "Action": Inter 15.0/22.0 w600 legacy 91BCFD = blue-30 (#91BCFD)

## Mobile/Success/One Line/No Action

- Root: ukuran 328.0x68.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Buku Teks sedang diunduh. Lihat progres di notifikasi perang": Inter 15.0/22.0 w400 white (#FFFFFF)

## Mobile/Default/Two Line/With Action

- Root: ukuran 328.0x94.0; layout vertical; padding 12.0 16.0; gap 4.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Terdapat gangguan saat menandai perangkat.": Inter 15.0/22.0 w400 white (#FFFFFF)
- Teks `Action` "Action": Inter 15.0/22.0 w600 legacy 91BCFD = blue-30 (#91BCFD)

## Mobile/Default/One Line/No Action

- Root: ukuran 328.0x46.0; layout horizontal; padding 12.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Message` "Semua informasi video harus diisi!": Inter 15.0/22.0 w400 white (#FFFFFF)

## Desktop

8 varian. Properti:
- **Type**: Default, Success
- **Two line**: False, True
- **Action**: False, True

Spesifikasi contoh varian (satu varian default plus satu untuk tiap nilai properti):

### Type=Default, Two line=False, Action=False
- Root: ukuran 236.0x48.0; layout horizontal; padding 14.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Berhasil menghapus pengguna` "Berhasil menghapus pengguna": Inter 14.0/20.0 w400 white (#FFFFFF)

### Type=Success, Two line=False, Action=False
- Root: ukuran 272.0x52.0; layout horizontal; padding 14.0 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Berhasil menghapus pengguna` "Berhasil menghapus pengguna": Inter 14.0/20.0 w400 white (#FFFFFF)

### Type=Default, Two line=True, Action=False
- Root: ukuran 504.0x72.0; layout horizontal; padding 16.0; gap 10.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Daftar whitelist sedang diproses. Pengguna akan dikabarkan melalui email jika proses berhasil` "Daftar whitelist sedang diproses. Pengguna akan dikabarkan m": Inter 14.0/20.0 w400 white (#FFFFFF)

### Type=Default, Two line=False, Action=True
- Root: ukuran 560.0x52.0; layout horizontal; padding 16.0; gap 12.0; radius 4.0; fill legacy 2F3031 = gray-90 (#2F3031); shadow 0.0px 2.0px 10.0px 0px rgba(0,0,0,0.1) | 0.0px 0.0px 2.0px 0px rgba(0,0,0,0.2)
- Teks `Buku Teks sedang diunduh. Lihat progres di notifikasi perangkat Anda.` "Buku Teks sedang diunduh. Lihat progres di notifikasi perang": Inter 14.0/20.0 w400 white (#FFFFFF)
- Teks `Assets / Action/Action` "Action": Inter 14.0/20.0 w600 legacy 91BCFD = blue-30 (#91BCFD)
