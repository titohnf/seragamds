import { useState, type ReactNode } from 'react';
import * as S from '../src';
import { User, Building2, House, Users, FolderOpen, Palette, Image, LayoutGrid } from 'lucide-react';

const Row = ({ children, label }: { children: ReactNode; label?: string }) => (
  <div className="flex flex-col gap-[8px]">
    {label && <div className="text-sd-gray-60" style={{ fontSize: 12, lineHeight: '16px', fontWeight: 600 }}>{label}</div>}
    <div className="flex flex-wrap items-center gap-[12px]">{children}</div>
  </div>
);
const Box = ({ w = 328, children }: { w?: number; children: ReactNode }) => <div style={{ width: '100%', maxWidth: w }}>{children}</div>;

function TabsDemo() { const [a, setA] = useState(0); const [b, setB] = useState(1); return <><Row label="Dasar"><S.Tabs items={['Satu', 'Dua', 'Tiga']} active={a} onChange={setA} /></Row><Row label="Dengan jumlah"><S.Tabs items={[{ label: 'Masuk', count: 12 }, { label: 'Terkirim' }, { label: 'Draf', count: 3 }]} active={b} onChange={setB} /></Row></>; }
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

export const demos: Record<string, () => ReactNode> = {
  button: () => <div className="flex flex-col gap-[16px]">{(['ultimate', 'primary', 'secondary', 'quiet', 'destructive', 'destructive-secondary'] as const).map((v) => <Row key={v} label={v}><S.Button variant={v}>Simpan</S.Button><S.Button variant={v} size="md">Medium</S.Button><S.Button variant={v} size="sm">Small</S.Button><S.Button variant={v} loading>Memuat</S.Button><S.Button variant={v} disabled>Nonaktif</S.Button></Row>)}</div>,
  'text-field': () => <div className="flex flex-col gap-[16px]"><Box><S.TextField label="Nama lengkap" placeholder="cth. Budi Santoso" helper="Sesuai kartu identitas" /></Box><Box><S.TextField label="Email aktif" defaultValue="budi@" error="Email tidak valid. Pastikan menggunakan format nama@email.com" /></Box><Box><S.TextField label="Nonaktif" disabled defaultValue="Tidak bisa diubah" /></Box><Box><S.TextArea label="Catatan" placeholder="Tulis catatan" /></Box></div>,
  modal: () => <ModalDemo />,
  'bottom-sheet': () => <SheetDemo />,
  badge: () => <Row><S.Badge tone="green">Disetujui</S.Badge><S.Badge tone="amber">Menunggu</S.Badge><S.Badge tone="red">Ditolak</S.Badge><S.Badge tone="blue">Diproses</S.Badge><S.Badge>Draf</S.Badge></Row>,
  banner: () => <div className="flex w-full max-w-[640px] flex-col gap-[8px]"><S.Banner tone="info" title="Informasi">Jadwal rapor dibuka minggu depan.</S.Banner><S.Banner tone="success" title="Berhasil">Data tersimpan.</S.Banner><S.Banner tone="warning" title="Perhatian">Batas unggah tinggal 2 hari.</S.Banner><S.Banner tone="critical" title="Gagal">Berkas gagal diunggah. Coba lagi.</S.Banner><S.Banner tone="neutral" onClose={() => {}}>Pengumuman biasa.</S.Banner></div>,
  checkbox: () => <Row><S.Checkbox label="Saya menyetujui syarat dan ketentuan" defaultChecked /><S.Checkbox label="Sebagian" indeterminate /><S.Checkbox label="Nonaktif" disabled /></Row>,
  radio: () => <Row><S.Radio name="demo-r" label="Guru" defaultChecked /><S.Radio name="demo-r" label="Kepala sekolah" /><S.Radio name="demo-r" label="Nonaktif" disabled /></Row>,
  switch: () => <Row><S.Switch label="Notifikasi email" defaultChecked /><S.Switch label="Mati" /><S.Switch label="Nonaktif" disabled /></Row>,
  select: () => <Box><S.Select label="Jenjang" placeholder="Pilih jenjang" helper="Pilih satu"><option>SD</option><option>SMP</option><option>SMA</option></S.Select></Box>,
  toast: () => <div className="flex flex-col gap-[12px]"><S.Toast>Data berhasil disimpan</S.Toast><S.Toast action="Urungkan">Laporan dihapus</S.Toast></div>,
  tabs: () => <TabsDemo />,
  chip: () => <ChipDemo />,
  list: () => <Box><S.List><S.ListItem label="Budi Santoso" description="Kelas 5A" artwork={<S.Avatar name="Budi" />} /><S.ListItem label="Sari Dewi" description="Kelas 5B" artwork={<S.Avatar name="Sari" />} end={<S.Badge tone="green">Hadir</S.Badge>} /></S.List></Box>,
  breadcrumb: () => <S.Breadcrumb items={[{ label: 'Beranda', href: '#' }, { label: 'Kepegawaian', href: '#' }, { label: 'Detail' }]} />,
  pagination: () => <PaginationDemo />,
  popover: () => <S.Popover trigger={({ toggle }) => <S.Button variant="secondary" onClick={toggle}>Menu</S.Button>} items={[{ label: 'Ubah', onSelect: () => {} }, { label: 'Duplikat', onSelect: () => {} }, { label: 'Hapus', onSelect: () => {}, disabled: true }]} />,
  tooltip: () => <div className="flex gap-[16px] pt-[40px]"><S.Tooltip text="Teks tooltip di atas"><S.Button variant="secondary">Hover saya</S.Button></S.Tooltip><S.Tooltip text="Di bawah" side="bottom"><S.Button variant="secondary">Bawah</S.Button></S.Tooltip></div>,
  'navigation-bar': () => <S.NavigationBar items={[{ key: 'a', label: 'Beranda' }, { key: 'b', label: 'Layanan' }, { key: 'c', label: 'Bantuan' }]} active="b" />,
  stepper: () => <StepperDemo />,
  avatar: () => <Row><S.Avatar name="Budi" size={20} /><S.Avatar name="Budi" size={36} /><S.Avatar name="Budi" size={64} /><S.Avatar name="Komunitas" shape="square" size={48} /></Row>,
  link: () => <Row><S.Link href="#">Primary</S.Link><S.Link href="#" type="secondary">Secondary</S.Link><span className="rounded-[4px] bg-sd-gray-90 px-[12px] py-[8px]"><S.Link href="#" type="inverse">Inverse</S.Link></span><S.Link href="#" underline={false}>Tanpa garis bawah</S.Link><S.Link href="#" disabled>Nonaktif</S.Link></Row>,
  expander: () => <ExpanderDemo />,
  accordion: () => <Box w={480}><S.Accordion title="Apa itu Seragam?" defaultOpen>Design system untuk produk Kemendikdasmen.</S.Accordion><S.Accordion title="Siapa yang memakai?">Tim produk dan pengembang.</S.Accordion></Box>,
  'empty-state': () => <div className="flex flex-col gap-[24px]"><S.EmptyState title="Belum Ada Laporan" description="Buat laporan pertamamu untuk mulai memantau perkembangan." action={<S.Button>Buat laporan</S.Button>} /></div>,
  'search-bar': () => <Box><S.SearchBar placeholder="Cari modul ajar..." /></Box>,
  card: () => <Box><S.Card title="Judul kartu" action={<S.Button size="sm">Aksi</S.Button>}>Deskripsi singkat kartu.</S.Card></Box>,
  'progress-bar': () => <div className="flex w-full max-w-[328px] flex-col gap-[16px]"><S.ProgressBar value={25} /><S.ProgressBar value={60} label="60%" /><S.ProgressBar value={100} label="Selesai" labelPosition="left" /></div>,
  separator: () => <Box w={328}><p style={{ fontSize: 15 }}>Atas</p><S.Separator /><p style={{ fontSize: 15 }}>Tengah</p><S.Separator subdued /><p style={{ fontSize: 15 }}>Bawah</p></Box>,
  table: () => <div className="flex w-full flex-col gap-[24px]"><Row label="Dasar (lg)"><div className="w-full"><TableDemo /></div></Row><Row label="Belang, header subtle, md"><div className="w-full"><TableDemo size="md" striped headerTone="subtle" /></div></Row><Row label="Garis antar baris, header subtle (ekstensi)"><div className="w-full"><TableDemo bordered="rows" headerTone="subtle" /></div></Row><Row label="Garis antar baris, header neutral, tanpa hover (ekstensi)"><div className="w-full"><TableDemo bordered="rows" headerTone="neutral" hoverable={false} /></div></Row><Row label="Tanpa garis, sm"><div className="w-full"><TableDemo size="sm" bordered={false} /></div></Row></div>,
  panel: () => <div className="flex w-full max-w-[520px] flex-col gap-[16px]"><S.Panel title="Data Diri" icon={<User />}><S.DescriptionList items={PROFIL.slice(0, 4)} /></S.Panel><S.Panel variant="outlined" subtleHeader title="Unit Organisasi" icon={<Building2 />} action={<S.Button variant="quiet" size="sm">Lihat semua</S.Button>}>Balai Penjaminan Mutu Pendidikan Provinsi D.K.I. Jakarta</S.Panel></div>,
  'description-list': () => <div className="flex w-full max-w-[640px] flex-col gap-[16px]"><S.Panel title="Data Diri" icon={<User />}><S.DescriptionList items={PROFIL} /></S.Panel><S.Panel title="Satu kolom, nilai tidak berubah" variant="outlined"><S.DescriptionList columns={1} items={[{ label: 'Nama', value: 'Hesti Usada', emphasis: 'normal' }, { label: 'Catatan', value: '-', muted: true, emphasis: 'normal' }]} /></S.Panel></div>,
  'vertical-navigation': () => <VerticalNavigationDemo />,
  slider: () => <SliderDemo />,
  rating: () => <RatingDemo />,
  'header-bar': () => <Box w={420}><S.HeaderBar title="Judul halaman" actions={<S.Button size="sm">Simpan</S.Button>} /><div className="h-[16px]" /><S.HeaderBar title="Tanpa bayangan" borderless compact /></Box>,
};
