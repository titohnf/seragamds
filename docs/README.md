# Dokumentasi Seragam

Satu sumber kebenaran untuk Design System Seragam di proyek Kemendikdasmen. Urutan baca:

1. **[Fondasi](foundations/)**: [warna](foundations/warna.md), [tipografi](foundations/tipografi.md), [elevasi dan radius](foundations/elevasi-radius.md), [spacing](foundations/spacing.md), [container](foundations/container.md), [token](foundations/token.md), [palet ilustrasi](foundations/palet-ilustrasi.md).
2. **[Panduan penulisan](guidelines/penulisan.md)**: bahasa, nada, dan inklusivitas untuk semua teks UI. Lalu **[prinsip desain](guidelines/prinsip-desain.md)** dan **[ilustrasi](guidelines/ilustrasi.md)**.
3. **[Panduan penggunaan komponen](guidelines/README.md)**: kapan memakai apa, ditambah do & don't (halaman di bawah).
4. **[Spesifikasi visual](components/)**: ukuran, padding, radius, warna token tiap komponen, dari Figma.
5. **[Pemetaan nama](guidelines/pemetaan-nama.md)**: nama Figma ↔ nama kode ↔ nama `@wartek-id`.
6. **[Ekstensi di luar Figma](extensions.md)** dan **[catatan keputusan](DECISIONS.md)**.

## Bila ada konflik
Token: berkas `tokens/` menang. Teknis (props, perilaku): kode di `src/` menang. Penggunaan dan penulisan: `docs/guidelines/`. Spesifikasi visual: `docs/components/`. Konflik yang ditemukan harus diperbaiki di sumbernya dan dicatat di [DECISIONS](DECISIONS.md).

## Status komponen (45 komponen dengan kode)
| Komponen | Kode | Panduan |
|---|---|---|
| [Accordion](guidelines/komponen/accordion.md) | `Accordion` | dari panduan Seragam |
| [Avatar](guidelines/komponen/avatar.md) | `Avatar` | dari panduan Seragam |
| [Badge](guidelines/komponen/badge.md) | `Badge` | dari panduan Seragam |
| [Banner](guidelines/komponen/banner.md) | `Banner` | dari panduan Seragam |
| [Bottom Sheet](guidelines/komponen/bottom-sheet.md) | `BottomSheet, BottomSheetItem` | dari panduan Seragam |
| [Breadcrumb](guidelines/komponen/breadcrumb.md) | `Breadcrumb` | dari panduan Seragam |
| [Button](guidelines/komponen/button.md) | `Button` | dari panduan Seragam |
| [Card](guidelines/komponen/card.md) | `Card` | draf |
| [Description List](guidelines/komponen/description-list.md) | `DescriptionList` | ekstensi |
| [Carousel](guidelines/komponen/carousel.md) | `Carousel` | dari panduan Seragam |
| [Checkbox](guidelines/komponen/checkbox.md) | `Checkbox` | dari panduan Seragam |
| [Chip](guidelines/komponen/chip.md) | `ChipGroup` | dari panduan Seragam |
| [Empty State](guidelines/komponen/empty-state.md) | `EmptyState` | dari panduan Seragam |
| [Expander](guidelines/komponen/expander.md) | `Expander` | dari panduan Seragam |
| [Footer](guidelines/komponen/footer.md) | `Footer` | dari panduan Seragam |
| [Header Bar](guidelines/komponen/header-bar.md) | `HeaderBar` | dari panduan Seragam |
| [Loading](guidelines/komponen/loading.md) | `Spinner, Skeleton` | dari panduan Seragam |
| [Link](guidelines/komponen/link.md) | `Link` | dari panduan Seragam |
| [List](guidelines/komponen/list.md) | `List, ListItem` | dari panduan Seragam |
| [Modal](guidelines/komponen/modal.md) | `Modal` | dari panduan Seragam |
| [Navigation Bar](guidelines/komponen/navigation-bar.md) | `NavigationBar` | dari panduan Seragam |
| [Page Header](guidelines/komponen/page-header.md) | `PageHeader` | ekstensi |
| [Platform](guidelines/komponen/platform.md) | `Platform` | ekstensi |
| [Process Steps](guidelines/komponen/process-steps.md) | `ProcessSteps` | ekstensi |
| [Pagination](guidelines/komponen/pagination.md) | `Pagination` | dari panduan Seragam |
| [Panel](guidelines/komponen/panel.md) | `Panel` | ekstensi |
| [Popover](guidelines/komponen/popover.md) | `Popover` | dari panduan Seragam |
| [Progress Bar](guidelines/komponen/progress-bar.md) | `ProgressBar` | dari panduan Seragam |
| [Radio](guidelines/komponen/radio.md) | `Radio` | dari panduan Seragam |
| [Rating](guidelines/komponen/rating.md) | `Rating` | draf |
| [Search Bar](guidelines/komponen/search-bar.md) | `SearchBar` | dari panduan Seragam |
| [Select](guidelines/komponen/select.md) | `Select` | dari panduan Seragam |
| [Separator](guidelines/komponen/separator.md) | `Separator` | draf |
| [Slider](guidelines/komponen/slider.md) | `Slider` | draf |
| [Stepper](guidelines/komponen/stepper.md) | `Stepper` | dari panduan Seragam |
| [Switch](guidelines/komponen/switch.md) | `Switch` | draf |
| [Vertical Navigation](guidelines/komponen/vertical-navigation.md) | `VerticalNavigation` | draf |
| [Table](guidelines/komponen/table.md) | `Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell` | dari panduan Seragam |
| [Tabs](guidelines/komponen/tabs.md) | `Tabs` | dari panduan Seragam |
| [Text Field](guidelines/komponen/text-field.md) | `TextField, TextArea` | dari panduan Seragam |
| [Toast](guidelines/komponen/toast.md) | `Toast` | dari panduan Seragam |
| [Tooltip](guidelines/komponen/tooltip.md) | `Tooltip` | dari panduan Seragam |

Komponen yang hanya berupa spesifikasi (belum ada kode): Status Bar dan sisanya di [components/](components/).
