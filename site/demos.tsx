import { useState, type ReactNode } from 'react';
import * as S from '../src';
import { User, Building2, House, Users, FolderOpen, Palette, Image, LayoutGrid, Search } from 'lucide-react';

const Row = ({ children, label }: { children: ReactNode; label?: string }) => (
  <div className="flex flex-col gap-[8px]">
    {label && <div className="text-sd-gray-60" style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600 }}>{label}</div>}
    <div className="flex flex-wrap items-center gap-[12px]">{children}</div>
  </div>
);
const Box = ({ w = 328, children }: { w?: number; children: ReactNode }) => <div style={{ width: '100%', maxWidth: w }}>{children}</div>;

function TabsDemo() {
  const [a, setA] = useState(0); const [b, setB] = useState(1); const [c, setC] = useState(0); const [d, setD] = useState(0);
  return <><Row label="Dasar"><S.Tabs items={['Satu', 'Dua', 'Tiga']} active={a} onChange={setA} /></Row>
    <Row label="Dengan jumlah"><S.Tabs items={[{ label: 'Masuk', count: 12 }, { label: 'Terkirim' }, { label: 'Draf', count: 3 }]} active={b} onChange={setB} /></Row>
    <Row label="Tab nonaktif (dilewati keyboard)"><S.Tabs items={['Aktif', { label: 'Terkunci', disabled: true }, 'Arsip']} active={c} onChange={setC} /></Row>
    <Row label="Scrollable (tepi memudar bila meluber)"><div className="w-[360px] max-w-full"><S.Tabs items={['Modul ajar', 'Aksi nyata', 'Video pembelajaran', 'Bank soal', 'Asesmen', 'Perangkat ajar', 'Komunitas']} active={d} onChange={setD} /></div></Row></>;
}
function ChipDemo() { const [a, setA] = useState(0); return <S.ChipGroup items={['Semua', 'Aktif', 'Selesai', 'Ditunda']} active={a} onChange={setA} />; }
function StepperDemo() { const [n, setN] = useState(2); return <Row><S.Stepper value={n} onChange={setN} min={0} max={10} /><S.Stepper value={0} onChange={() => {}} disabled /><S.Stepper value={11} onChange={() => {}} error /></Row>; }
function SliderDemo() { const [v, setV] = useState(40); return <Box><S.Slider value={v} onChange={setV} showRange /></Box>; }
function RatingDemo() { const [v, setV] = useState(3); return <Row><S.Rating value={v} onChange={setV} /><S.Rating value={4.5} /></Row>; }
function PaginationDemo() { const [p, setP] = useState(3); return <S.Pagination page={p} pageCount={10} onPageChange={setP} />; }
function ExpanderDemo() { const [e, setE] = useState(false); return <Box><p className="text-sd-gray-90" style={{ fontSize: 15, lineHeight: '22px' }}>Ringkasan laporan semester ganjil.{e && ' Isi lengkap laporan tampil di sini setelah dibuka.'}</p><S.Expander expanded={e} onToggle={() => setE(!e)} /></Box>; }
function ModalDemo() { const [o, setO] = useState(false); return <><S.Button onClick={() => setO(true)}>Buka modal</S.Button><S.Modal open={o} onClose={() => setO(false)} title="Hapus laporan?" footer={<><S.Button variant="secondary" onClick={() => setO(false)}>Batal</S.Button><S.Button variant="destructive" onClick={() => setO(false)}>Hapus laporan</S.Button></>}>Laporan yang dihapus tidak bisa dikembalikan.</S.Modal></>; }
function SheetDemo() { const [o, setO] = useState(false); const [s, setS] = useState(0); return <><S.Button variant="secondary" onClick={() => setO(true)}>Buka bottom sheet</S.Button><S.BottomSheet open={o} onClose={() => setO(false)} title="Pilih urutan">{['Terbaru', 'Terlama', 'Nama A–Z'].map((t, i) => <S.BottomSheetItem key={t} selected={s === i} onClick={() => { setS(i); setO(false); }}>{t}</S.BottomSheetItem>)}</S.BottomSheet></>; }


const ROWS = [['Hesti Usada', 'Guru Matematika', 'Aktif'], ['Budi Santoso', 'Kepala Sekolah', 'Aktif'], ['Sari Dewi', 'Staf TU', 'Cuti'], ['Andi Pratama', 'Guru Bahasa', 'Aktif']];
function TableDemo({ size, striped, bordered = true, hoverable, headerTone }: { size?: S.TableSize; striped?: boolean; bordered?: S.TableBorder; hoverable?: boolean; headerTone?: S.TableHeaderTone }) {
  return (
    <S.Table size={size} striped={striped} bordered={bordered} hoverable={hoverable} headerTone={headerTone} caption="Daftar pegawai">
      <S.TableHead><S.TableRow><S.TableHeaderCell>Nama</S.TableHeaderCell><S.TableHeaderCell>Jabatan</S.TableHeaderCell><S.TableHeaderCell>Status</S.TableHeaderCell></S.TableRow></S.TableHead>
      <S.TableBody>{ROWS.map((r) => <S.TableRow key={r[0]}><S.TableCell>{r[0]}</S.TableCell><S.TableCell>{r[1]}</S.TableCell><S.TableCell><S.Badge tone={r[2] === 'Aktif' ? 'green' : 'amber'}>{r[2]}</S.Badge></S.TableCell></S.TableRow>)}</S.TableBody>
    </S.Table>
  );
}

const PROFIL = [
  { label: 'NIP', value: '198001012005011001' }, { label: 'NIK', value: '3171010101800001' },
  { label: 'Nomor KK', value: '3171010101090001' }, { label: 'Jenis Kelamin', value: 'Laki-laki' },
  { label: 'Tempat Lahir', value: 'Jakarta' }, { label: 'Tanggal Lahir', value: '1 Januari 1980' },
  { label: 'Alamat', value: 'Jl. Merdeka No. 1, Kelurahan Gambir, Jakarta Pusat', full: true },
];

const MENU: S.VerticalNavItem[] = [
  { key: 'beranda', label: 'Beranda', icon: <House />, href: '#' },
  { key: 'pengguna', label: 'Manajemen pengguna', icon: <Users />, children: [{ key: 'daftar', label: 'Daftar pengguna' }, { key: 'peran', label: 'Peran akses' }, { key: 'log', label: 'Riwayat aktivitas' }] },
  { key: 'dokumen', label: 'Dokumen', icon: <FolderOpen />, children: [{ key: 'sk', label: 'Surat keputusan' }] },
  { key: 'tampilan', label: 'Tampilan', icon: <Palette />, children: [{ key: 'tema', label: 'Tema' }] },
  { key: 'media', label: 'Media', icon: <Image />, children: [{ key: 'galeri', label: 'Galeri' }] },
  { key: 'aplikasi', label: 'Aplikasi', icon: <LayoutGrid />, children: [{ key: 'integrasi', label: 'Integrasi' }] },
];
function VerticalNavigationDemo() {
  const [active, setActive] = useState('daftar');
  const items = MENU.map((i) => ({ ...i, onClick: i.href ? () => setActive(i.key) : undefined, children: i.children?.map((c) => ({ ...c, onClick: () => setActive(c.key) })) }));
  return <div className="flex flex-wrap gap-[24px]"><S.VerticalNavigation items={items} active={active} /><S.VerticalNavigation tone="light" items={items} active={active} /></div>;
}

function CarouselDemo() {
  const slides = ['Pengumuman jadwal ujian', 'Pelatihan guru dibuka', 'Pembaruan aplikasi'].map((t, i) => <div key={t} className="grid h-[200px] place-items-center bg-sd-blue-5 text-sd-gray-90" style={{ fontSize: 18, lineHeight: '24px', fontWeight: 600 }}>{i + 1}. {t}</div>);
  return <Box w={480}><S.Carousel label="Pengumuman terbaru" slides={slides} /></Box>;
}

function ChipDemo2() { const [a, setA] = useState<number[]>([0]); const [items, setItems] = useState(['Modul ajar', 'Aksi nyata', 'Video']); return <div className="flex flex-col gap-[12px]"><S.ChipGroup aria-label="Jenis konten" active={a} items={items} onChange={(i) => setA((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))} onRemove={(i) => setItems((c) => c.filter((_, k) => k !== i))} /><S.ChipGroup size="small" aria-label="Ukuran kecil" active={0} items={['Semua', 'Aktif']} onChange={() => {}} /></div>; }
function ToastDemo() { const [on, setOn] = useState(false); return <div className="flex flex-col gap-[12px]"><S.Toast>Data berhasil disimpan</S.Toast><S.Toast tone="success">Berhasil menyimpan perubahan!</S.Toast><S.Toast action="Urungkan">Laporan dihapus</S.Toast><S.Button variant="secondary" size="md" onClick={() => setOn(true)}>Tampilkan toast otomatis (4 dtk)</S.Button>{on && <S.Toast tone="success" duration={4000} onClose={() => setOn(false)}>Berhasil mengirim laporan!</S.Toast>}</div>; }

function SelectDemo() {
  const [v, setV] = useState(''); const [w, setW] = useState('');
  const opts = [{ value: 'sd', label: 'SD', description: 'Sekolah dasar, kelas 1–6' }, { value: 'smp', label: 'SMP', description: 'Sekolah menengah pertama' }, { value: 'sma', label: 'SMA', description: 'Sekolah menengah atas' }, { value: 'smk', label: 'SMK', description: 'Sekolah menengah kejuruan' }, { value: 'slb', label: 'SLB', description: 'Sekolah luar biasa', disabled: true }];
  return <div className="flex flex-col gap-[16px]"><Box><S.Select label="Select bawaan" placeholder="Pilih jenjang" helper="Pilih satu"><option>SD</option><option>SMP</option></S.Select></Box>
    <Box><S.CustomSelect label="Custom Select" options={opts} value={v} onChange={setV} helper="Daftar rancangan khusus" /></Box>
    <Box><S.CustomSelect label="Custom List Menu" mode="list-menu" listTitle="Pilih jenjang" options={opts} value={w} onChange={setW} helper="Membuka Modal dengan konteks tiap opsi" /></Box>
    <Box><S.CustomSelect label="Galat" options={opts} onChange={() => {}} error="Jenjang wajib dipilih" /></Box></div>;
}
function NavbarDemo() {
  const items = [{ key: 'a', label: 'Beranda' }, { key: 'b', label: 'Layanan' }, { key: 'c', label: 'Pelatihan' }, { key: 'd', label: 'Komunitas' }, { key: 'e', label: 'Bantuan' }, { key: 'f', label: 'Pengumuman' }];
  const logo = <span style={{ fontWeight: 600, fontSize: 18 }}>Nama Aplikasi</span>;
  return <div className="flex w-full flex-col gap-[16px]">
    <Row label="Default (logo + menu + aksi)"><div className="w-full overflow-visible"><S.NavigationBar sticky={false} items={items} active="b" logo={logo} actions={<S.Button size="md">Masuk</S.Button>} /></div></Row>
    <Row label="Menu sempit: kelebihan masuk Lainnya"><div style={{ width: 640 }} className="max-w-full"><S.NavigationBar sticky={false} collapseBelow={1} items={items} active="e" logo={logo} actions={<S.Button size="md">Masuk</S.Button>} /></div></Row>
    <Row label="Tanpa aksi"><div className="w-full"><S.NavigationBar sticky={false} items={items.slice(0, 3)} active="a" logo={logo} /></div></Row>
    <Row label="Tanpa menu (admin)"><div className="w-full"><S.NavigationBar sticky={false} items={[]} active="" logo={logo} actions={<S.Avatar name="Hesti Usada" size={36} />} /></div></Row>
    <Row label="Hanya logo"><div className="w-full"><S.NavigationBar sticky={false} items={[]} active="" logo={logo} /></div></Row>
    <Row label="Hamburger (di bawah 769px; di sini dipaksa dengan collapseBelow=5000)"><div className="w-full"><S.NavigationBar sticky={false} collapseBelow={5000} items={items} active="a" logo={logo} actions={<S.Button size="md">Masuk</S.Button>} /></div></Row>
  </div>;
}
function TableStickyDemo() {
  const rows = Array.from({ length: 14 }, (_, i) => [`Pegawai ${i + 1}`, 'Guru Matematika', i % 3 ? 'Aktif' : 'Cuti', `19800101200501100${i % 10}`]);
  return <div className="flex w-full flex-col gap-[24px]">
    <Row label="stickyHeader + maxHeight"><div className="w-full"><S.Table stickyHeader maxHeight={220} caption="Daftar pegawai panjang"><S.TableHead><S.TableRow><S.TableHeaderCell>Nama</S.TableHeaderCell><S.TableHeaderCell>Jabatan</S.TableHeaderCell><S.TableHeaderCell>Status</S.TableHeaderCell><S.TableHeaderCell>NIP</S.TableHeaderCell></S.TableRow></S.TableHead><S.TableBody>{rows.map((r) => <S.TableRow key={r[0]}>{r.map((c, i) => <S.TableCell key={i}>{c}</S.TableCell>)}</S.TableRow>)}</S.TableBody></S.Table></div></Row>
    <Row label="stacked (kartu di bawah 768px; lebar jendela ini mungkin lebih besar)"><div className="w-full"><S.Table stacked caption="Daftar pegawai"><S.TableHead><S.TableRow><S.TableHeaderCell>Nama</S.TableHeaderCell><S.TableHeaderCell>Jabatan</S.TableHeaderCell><S.TableHeaderCell>Status</S.TableHeaderCell></S.TableRow></S.TableHead><S.TableBody>{rows.slice(0, 3).map((r) => <S.TableRow key={r[0]}><S.TableCell>{r[0]}</S.TableCell><S.TableCell>{r[1]}</S.TableCell><S.TableCell>{r[2]}</S.TableCell></S.TableRow>)}</S.TableBody></S.Table></div></Row>
  </div>;
}

export const demos: Record<string, () => ReactNode> = {
  carousel: () => <CarouselDemo />,
  footer: () => <div className="w-full overflow-hidden rounded-[8px]"><S.Footer logo={<span style={{ fontSize: 18, fontWeight: 600 }}>Nama Aplikasi</span>} sections={[{ title: 'Layanan', links: [{ label: 'Beranda', href: '#' }, { label: 'Bantuan', href: '#' }] }, { title: 'Tautan', links: [{ label: 'Kemendikdasmen', href: '#', external: true }] }]} copyright="Hak Cipta 2021 oleh Kementerian Pendidikan Dasar dan Menengah Republik Indonesia" language="ID" /></div>,
  loading: () => <div className="flex flex-col gap-[16px]"><Row label="Spinner"><S.Spinner size="sm" /><S.Spinner /><S.Spinner size="lg" /></Row><Row label="Skeleton"><Box w={328}><div className="flex flex-col gap-[8px]"><S.Skeleton shape="circle" /><S.Skeleton width="60%" /><S.Skeleton /><S.Skeleton shape="block" height={80} /></div></Box></Row></div>,
  button: () => <div className="flex flex-col gap-[16px]">{(['ultimate', 'primary', 'secondary', 'quiet', 'destructive', 'destructive-secondary'] as const).map((v) => <Row key={v} label={v}><S.Button variant={v}>Simpan</S.Button><S.Button variant={v} size="md">Medium</S.Button><S.Button variant={v} size="sm">Small</S.Button><S.Button variant={v} loading>Memuat</S.Button><S.Button variant={v} disabled>Nonaktif</S.Button></Row>)}<Row label="iconOnly"><S.Button iconOnly aria-label="Cari"><Search /></S.Button><S.Button iconOnly size="md" variant="secondary" aria-label="Cari"><Search /></S.Button><S.Button iconOnly size="sm" variant="quiet" aria-label="Cari"><Search /></S.Button></Row><Row label="floating"><S.Button floating>Kembali ke atas</S.Button><S.Button floating variant="primary" size="md">Tambah</S.Button><S.Button floating variant="secondary" size="sm">Filter</S.Button></Row><div className="rounded-[8px] bg-sd-gray-90 p-[16px]"><Row label="inverse (latar gelap)"><S.Button variant="secondary" inverse>Secondary</S.Button><S.Button variant="quiet" inverse>Quiet</S.Button></Row></div></div>,
  'text-field': () => <div className="flex flex-col gap-[16px]"><Box><S.TextField label="Nama lengkap" placeholder="cth. Budi Santoso" helper="Sesuai kartu identitas" /></Box><Box><S.TextField label="Email aktif" defaultValue="budi@" error="Email tidak valid. Pastikan menggunakan format nama@email.com" /></Box><Box><S.TextField label="Nonaktif" disabled defaultValue="Tidak bisa diubah" /></Box><Box><S.TextArea label="Catatan" placeholder="Tulis catatan" /></Box><Box><S.TextArea label="Catatan (autoGrow)" autoGrow placeholder="Tekan Enter beberapa kali: tinggi mengikuti isi" /></Box></div>,
  modal: () => <ModalDemo />,
  'bottom-sheet': () => <SheetDemo />,
  badge: () => <Row><S.Badge tone="green">Disetujui</S.Badge><S.Badge tone="amber">Menunggu</S.Badge><S.Badge tone="red">Ditolak</S.Badge><S.Badge tone="blue">Diproses</S.Badge><S.Badge>Draf</S.Badge></Row>,
  banner: () => <div className="flex w-full max-w-[640px] flex-col gap-[8px]"><S.Banner tone="info" title="Informasi">Jadwal rapor dibuka minggu depan.</S.Banner><S.Banner tone="success">Perubahan berhasil disimpan.</S.Banner><S.Banner tone="warning" title="Peringatan">Data belum lengkap.</S.Banner><S.Banner tone="critical" title="Galat" action={<S.Button variant="secondary" size="sm">Coba lagi</S.Button>}>Laporan gagal dikirim.</S.Banner><S.Banner tone="neutral" onClose={() => {}}>Pengumuman biasa.</S.Banner><S.Banner tone="entry" action={<S.Button variant="secondary" size="sm">Coba</S.Button>} link={<S.Link href="#">Pelajari fitur baru</S.Link>}>Coba fitur Bank Soal yang baru dirilis.</S.Banner></div>,
  checkbox: () => <Row><S.Checkbox label="Saya menyetujui syarat dan ketentuan" defaultChecked /><S.Checkbox label="Sebagian" indeterminate /><S.Checkbox label="Nonaktif" disabled /></Row>,
  radio: () => <Row><S.Radio name="demo-r" label="Guru" defaultChecked /><S.Radio name="demo-r" label="Kepala sekolah" /><S.Radio name="demo-r" label="Nonaktif" disabled /></Row>,
  switch: () => <Row><S.Switch label="Notifikasi email" defaultChecked /><S.Switch label="Mati" /><S.Switch label="Nonaktif" disabled /></Row>,
  select: () => <SelectDemo />,
  toast: () => <ToastDemo />,
  tabs: () => <TabsDemo />,
  chip: () => <div className="flex flex-col gap-[16px]"><ChipDemo /><ChipDemo2 /></div>,
  list: () => <Box><S.List><S.ListItem label="Budi Santoso" description="Kelas 5A" artwork={<S.Avatar name="Budi" />} /><S.ListItem label="Sari Dewi" description="Kelas 5B" artwork={<S.Avatar name="Sari" />} end={<S.Badge tone="green">Hadir</S.Badge>} /></S.List></Box>,
  breadcrumb: () => <div className="flex flex-col gap-[12px]">{(() => <div className="flex flex-col gap-[12px]"><S.Breadcrumb items={[{ label: 'Beranda', href: '#' }, { label: 'Kepegawaian', href: '#' }, { label: 'Detail' }]} /><S.Breadcrumb maxItems={3} items={[{ label: 'Beranda', href: '#' }, { label: 'Kepegawaian', href: '#' }, { label: 'Unit kerja', href: '#' }, { label: 'Pegawai', href: '#' }, { label: 'Detail' }]} /></div>)()}<div style={{ width: 360 }} className="max-w-full"><S.Breadcrumb maxItems="auto" items={['Beranda', 'Kepegawaian', 'Unit kerja', 'Pegawai', 'Riwayat jabatan', 'Detail'].map((label, i, a) => i < a.length - 1 ? { label, href: '#' } : { label })} /></div></div>,
  pagination: () => <PaginationDemo />,
  popover: () => <S.Popover trigger={({ toggle }) => <S.Button variant="secondary" onClick={toggle}>Menu</S.Button>} items={[{ label: 'Ubah', onSelect: () => {} }, { label: 'Duplikat', onSelect: () => {} }, { label: 'Hapus', onSelect: () => {}, disabled: true }]} />,
  tooltip: () => <div className="flex gap-[16px] pt-[40px]"><S.Tooltip text="Teks tooltip di atas"><S.Button variant="secondary">Hover saya</S.Button></S.Tooltip><S.Tooltip text="Di bawah" side="bottom"><S.Button variant="secondary">Bawah</S.Button></S.Tooltip></div>,
  'navigation-bar': () => <NavbarDemo />,
  stepper: () => <StepperDemo />,
  avatar: () => <Row><S.Avatar name="Budi" size={20} /><S.Avatar name="Budi" size={36} /><S.Avatar name="Budi" size={64} /><S.Avatar name="Komunitas" shape="square" size={48} /></Row>,
  link: () => <Row><S.Link href="#">Primary</S.Link><S.Link href="#" type="secondary">Secondary</S.Link><span className="rounded-[4px] bg-sd-gray-90 px-[12px] py-[8px]"><S.Link href="#" type="inverse">Inverse</S.Link></span><S.Link href="#" underline={false}>Tanpa garis bawah</S.Link><S.Link href="#" disabled>Nonaktif</S.Link></Row>,
  expander: () => <ExpanderDemo />,
  accordion: () => <div className="flex flex-col gap-[24px]">{(() => <Box w={480}><S.AccordionGroup type="single" defaultOpen={['a']} items={[{ key: 'a', title: 'Apa itu Seragam?', content: 'Design system untuk produk Kemendikdasmen.' }, { key: 'b', title: 'Siapa yang memakainya?', content: 'Tim produk, desainer, dan penulis.' }, { key: 'c', title: 'Bagaimana memulai?', content: 'Baca panduan penggunaan tiap komponen.' }]} /></Box>)()}<Box w={480}><S.AccordionGroup variant="custom" type="multiple" defaultOpen={['a']} items={[{ key: 'a', title: 'Custom: selebar kolom', content: 'Tanpa kartu, hanya garis pemisah.' }, { key: 'b', title: 'Pertanyaan kedua', content: 'Multi expand: boleh terbuka bersamaan.' }]} /></Box></div>,
  'empty-state': () => <div className="flex flex-col gap-[24px]"><S.EmptyState title="Belum Ada Laporan" description="Buat laporan pertamamu untuk mulai memantau perkembangan." action={<S.Button>Buat laporan</S.Button>} /></div>,
  'search-bar': () => <div className="flex flex-col gap-[16px]"><Box><S.SearchBar placeholder="Cari modul ajar..." /></Box><Box><S.SearchBar placeholder="Cari modul ajar..." error="Ketik kata kunci dulu." /></Box></div>,
  card: () => <Box><S.Card title="Judul kartu" action={<S.Button size="sm">Aksi</S.Button>}>Deskripsi singkat kartu.</S.Card></Box>,
  'progress-bar': () => <div className="flex w-full max-w-[328px] flex-col gap-[16px]"><S.ProgressBar value={25} /><S.ProgressBar value={60} label="60%" /><S.ProgressBar value={100} label="Selesai" labelPosition="left" /></div>,
  separator: () => <Box w={328}><p style={{ fontSize: 15 }}>Atas</p><S.Separator /><p style={{ fontSize: 15 }}>Tengah</p><S.Separator subdued /><p style={{ fontSize: 15 }}>Bawah</p></Box>,
  table: () => <div className="flex flex-col gap-[32px]">{(() => <div className="flex w-full flex-col gap-[24px]"><Row label="Dasar (lg)"><div className="w-full"><TableDemo /></div></Row><Row label="Belang, header subtle, md"><div className="w-full"><TableDemo size="md" striped headerTone="subtle" /></div></Row><Row label="Garis antar baris, header subtle (ekstensi)"><div className="w-full"><TableDemo bordered="rows" headerTone="subtle" /></div></Row><Row label="Garis antar baris, header neutral, tanpa hover (ekstensi)"><div className="w-full"><TableDemo bordered="rows" headerTone="neutral" hoverable={false} /></div></Row><Row label="Tanpa garis, sm"><div className="w-full"><TableDemo size="sm" bordered={false} /></div></Row></div>)()}<TableStickyDemo /></div>,
  panel: () => <div className="flex w-full max-w-[520px] flex-col gap-[16px]"><S.Panel title="Data Diri" icon={<User />}><S.DescriptionList items={PROFIL.slice(0, 4)} /></S.Panel><S.Panel variant="outlined" subtleHeader title="Unit Organisasi" icon={<Building2 />} action={<S.Button variant="quiet" size="sm">Lihat semua</S.Button>}>Balai Penjaminan Mutu Pendidikan Provinsi D.K.I. Jakarta</S.Panel></div>,
  'description-list': () => <div className="flex w-full max-w-[640px] flex-col gap-[16px]"><S.Panel title="Data Diri" icon={<User />}><S.DescriptionList items={PROFIL} /></S.Panel><S.Panel title="Satu kolom, nilai tidak berubah" variant="outlined"><S.DescriptionList columns={1} items={[{ label: 'Nama', value: 'Hesti Usada', emphasis: 'normal' }, { label: 'Catatan', value: '-', muted: true, emphasis: 'normal' }]} /></S.Panel></div>,
  'vertical-navigation': () => <VerticalNavigationDemo />,
  slider: () => <SliderDemo />,
  rating: () => <RatingDemo />,
  'header-bar': () => <Box w={420}><S.HeaderBar title="Judul halaman" actions={<S.Button size="sm">Simpan</S.Button>} /><div className="h-[16px]" /><S.HeaderBar title="Tanpa bayangan" borderless compact /></Box>,
};
