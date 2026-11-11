# Pemetaan nama komponen

Satu komponen punya tiga nama yang berbeda di tempat berbeda. Di kode repo ini, **gunakan kolom Kode**.

| Figma / seragam.belajar.id | Kode (`seragam-design-system`) | Panduan | Catatan |
|---|---|---|---|
| Accordion | `Accordion` | [accordion](komponen/accordion.md) | |
| Avatar | `Avatar` | [avatar](komponen/avatar.md) | |
| Badge | `Badge` | [badge](komponen/badge.md) | `tone`: green, amber, red, blue, gray |
| Banner | `Banner` | [banner](komponen/banner.md) | Figma "New Banner" yang dipakai; "Banner (old)" jangan |
| Bottom Sheets | `BottomSheet`, `BottomSheetItem` | [bottom-sheet](komponen/bottom-sheet.md) | |
| Breadcrumbs | `Breadcrumb` | [breadcrumb](komponen/breadcrumb.md) | |
| Button | `Button` | [button](komponen/button.md) | Varian `destructive-secondary` adalah ekstensi |
| Card | `Card` | [card](komponen/card.md) | |
| Carousel | `Carousel` | [carousel](komponen/carousel.md) | Figma "Carousel updated" |
| Checkbox | `Checkbox` | [checkbox](komponen/checkbox.md) | |
| Chips | `ChipGroup` | [chip](komponen/chip.md) | |
| Empty State | `EmptyState` | [empty-state](komponen/empty-state.md) | |
| Text Expander | `Expander` | [expander](komponen/expander.md) | |
| Footer | `Footer` | [footer](komponen/footer.md) | |
| Header / Header Bar | `HeaderBar` | [header-bar](komponen/header-bar.md) | Small, Large, Transparent |
| Link | `Link` | [link](komponen/link.md) | |
| List | `List`, `ListItem` | [list](komponen/list.md) | |
| Modal | `Modal` | [modal](komponen/modal.md) | |
| Vertical Navigation / Sidebar Menu | `VerticalNavigation` | [vertical-navigation](komponen/vertical-navigation.md) | Dari Figma Seragam Web; menu samping. Halaman Sidebar Menu di situs gagal dimuat |
| Navigation Bar | `NavigationBar` | [navigation-bar](komponen/navigation-bar.md) | Menu atas desktop |
| (ekstensi) Description List | `DescriptionList` | [description-list](komponen/description-list.md) | Tidak ada di Figma |
| Pagination | `Pagination` | [pagination](komponen/pagination.md) | Figma menandai WIP |
| (ekstensi) Page Header | `PageHeader` | [page-header](komponen/page-header.md) | Tidak ada di Figma |
| (ekstensi) Process Steps | `ProcessSteps` | [process-steps](komponen/process-steps.md) | Tidak ada di Figma |
| (ekstensi) Platform | `Platform` | [platform](komponen/platform.md) | Pemilih skala tipografi Mobile/Desktop |
| (ekstensi) Panel | `Panel` | [panel](komponen/panel.md) | Tidak ada di Figma |
| Popover | `Popover` | [popover](komponen/popover.md) | |
| Loading → Progress bar | `ProgressBar` | [progress-bar](komponen/progress-bar.md) | |
| Loading → Spinner, Shimmer | `Spinner`, `Skeleton` | [loading](komponen/loading.md) | Shimmer = `Skeleton` |
| Radio | `Radio` | [radio](komponen/radio.md) | |
| Rating | `Rating` | [rating](komponen/rating.md) | Figma menandai WIP |
| Search | `SearchBar` | [search-bar](komponen/search-bar.md) | |
| Select | `Select` | [select](komponen/select.md) | |
| Separator | `Separator` | [separator](komponen/separator.md) | |
| Slider | `Slider` | [slider](komponen/slider.md) | |
| Stepper | `Stepper` | [stepper](komponen/stepper.md) | |
| Switch | `Switch` | [switch](komponen/switch.md) | |
| Table | `Table`, `TableHead`, `TableBody`, `TableRow`, `TableHeaderCell`, `TableCell` | [table](komponen/table.md) | Varian `vertical-striped`/`rounded` belum ada |
| Tabs | `Tabs` | [tabs](komponen/tabs.md) | |
| Text Field | `TextField`, `TextArea` | [text-field](komponen/text-field.md) | Label/teks bantu/galat adalah prop |
| Toast | `Toast` | [toast](komponen/toast.md) | Tampilan saja; posisi diatur pemanggil |
| Tooltip | `Tooltip` | [tooltip](komponen/tooltip.md) | |

## Tidak sama dengan pustaka `@wartek-id`
Panduan lama (`dokumentasiseragam`) memakai nama pustaka resmi. Bila membaca panduan itu atau kode proyek lama, terjemahkan:

| `@wartek-id` | Repo ini |
|---|---|
| `Input` | `TextField` |
| `Textarea` | `TextArea` |
| `Dialog` | `Modal` |
| `Sheet` | `BottomSheet` |
| `Navbar` | `NavigationBar` |
| `Chip` | `ChipGroup` |
| `Button variant="solid" color="blue"` | `Button variant="ultimate"` |
| `Button variant="solid" color="black"` | `Button variant="primary"` |
| `Button variant="solid" color="white"` | `Button variant="secondary"` |
| `Button variant="ghost" color="blue"` | `Button variant="quiet"` |
| `Button variant="solid" color="red"` | `Button variant="destructive"` |
| `isLoading`, `isDisabled`, `isInvalid` | `loading`, `disabled`, `error` |
| `Badge variant="success\|warning\|critical\|informational\|neutral"` | `Badge tone="green\|amber\|red\|blue\|gray"` |
| `Banner type=...`, `closable` | `Banner tone=...`, `onClose` |
| `isOpen` (Dialog) | `open` |

## Belum ada di kode
Komponen yang ada di Figma/panduan tetapi belum dibuat di repo ini (hanya spesifikasi di `docs/components/`): Status Bar dan sisanya. Lihat `docs/components/_index.json`.
