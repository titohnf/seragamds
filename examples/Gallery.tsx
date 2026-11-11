import { useState } from 'react';
import * as S from '../src';

const Sec = ({ t, children }: { t: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-[12px] border-b border-sd-modal-footer-border pb-[24px]">
    <h2 className="text-sd-gray-90" style={{ fontSize: 19, lineHeight: '24px', fontWeight: 600 }}>{t}</h2>
    <div className="flex flex-wrap items-start gap-[16px]">{children}</div>
  </section>
);

/** Galeri semua komponen Seragam untuk pengecekan visual. Pasang di rute apa pun. */
export default function Gallery() {
  const [platform, setPlatform] = useState<S.SeragamPlatform>('auto');
  const [n, setN] = useState(2); const [sl, setSl] = useState(40); const [m, setM] = useState(false); const [sh, setSh] = useState(false);
  const [ex, setEx] = useState(false); const [pg, setPg] = useState(3); const [tab, setTab] = useState(0);
  return (
    <S.Platform platform={platform}>
    <div className="mx-auto flex max-w-[1000px] flex-col gap-[24px] bg-sd-gray-0 p-[24px] font-sans">
      <h1 className="sd-t-headinglarge text-sd-gray-90">Galeri Seragam</h1>
      <div role="radiogroup" aria-label="Skala huruf" className="flex flex-wrap items-center gap-[8px] text-sd-gray-60 sd-t-bodysmall">
        Skala huruf:
        {(['auto', 'mobile', 'desktop'] as const).map((p) => <button key={p} role="radio" aria-checked={platform === p} onClick={() => setPlatform(p)} className={`rounded-full border px-[12px] py-[4px] ${platform === p ? 'border-sd-blue-70 bg-sd-blue-5 text-sd-blue-70' : 'border-sd-gray-30'}`}>{p}</button>)}
      </div>
      <Sec t="Button"><div className="flex flex-col gap-[12px]">{(['ultimate','primary','secondary','quiet','destructive','destructive-secondary'] as const).map((v) => (<div key={v} className="flex flex-wrap items-center gap-[12px]"><S.Button variant={v}>{v}</S.Button><S.Button variant={v} size="md">Medium</S.Button><S.Button variant={v} size="sm">Small</S.Button><S.Button variant={v} loading>Memuat</S.Button><S.Button variant={v} disabled>Disabled</S.Button></div>))}</div></Sec>
      <Sec t="Badge dan Chip"><S.Badge tone="green">Disetujui</S.Badge><S.Badge tone="amber">Menunggu</S.Badge><S.Badge tone="red">Ditolak</S.Badge><S.Badge tone="blue">Diproses</S.Badge><S.Badge>Draf</S.Badge></Sec>
      <Sec t="Banner"><div className="flex w-full flex-col gap-[8px]"><S.Banner tone="info">Informasi</S.Banner><S.Banner tone="success">Berhasil</S.Banner><S.Banner tone="warning">Peringatan</S.Banner><S.Banner tone="critical">Kesalahan</S.Banner></div></Sec>
      <Sec t="Tabs"><S.Tabs items={['Satu', 'Dua', 'Tiga']} active={tab} onChange={setTab} /></Sec>
      <Sec t="Pilihan"><S.Checkbox label="Checkbox" defaultChecked /><S.Checkbox label="Indeterminate" indeterminate /><S.Checkbox label="Nonaktif" disabled /><S.Radio name="r" label="Radio" defaultChecked /><S.Radio name="r" label="Radio 2" /><S.Switch label="Switch" defaultChecked /><S.Switch label="Mati" /></Sec>
      <Sec t="Isian"><div className="w-[328px]"><S.TextField label="Nama" placeholder="Input placeholder" /></div><div className="w-[328px]"><S.TextField label="Error" error="Wajib diisi" defaultValue="x" /></div><div className="w-[328px]"><S.Select label="Pilih" placeholder="Choose an option"><option>A</option></S.Select></div><div className="w-[328px]"><S.TextArea label="Catatan" /></div><div className="w-[328px]"><S.SearchBar placeholder="Cari" /></div><S.Stepper value={n} onChange={setN} /></Sec>
      <Sec t="Slider dan Progress"><div className="w-[328px]"><S.Slider value={sl} onChange={setSl} showRange /></div><div className="w-[328px]"><S.ProgressBar value={60} label="60%" /></div><S.Rating value={3.5} /></Sec>
      <Sec t="Navigasi"><S.Breadcrumb items={[{ label: 'Beranda', href: '#' }, { label: 'Kepegawaian', href: '#' }, { label: 'Detail' }]} /><S.Pagination page={pg} pageCount={10} onPageChange={setPg} /><S.NavigationBar items={[{ key: 'a', label: 'Beranda' }, { key: 'b', label: 'Layanan' }, { key: 'c', label: 'Bantuan' }]} active="b" /><S.Link href="#">Tautan</S.Link><S.Expander expanded={ex} onToggle={() => setEx(!ex)} /></Sec>
      <Sec t="Overlay"><S.Button onClick={() => setM(true)}>Buka Modal</S.Button><S.Button variant="secondary" onClick={() => setSh(true)}>Buka Bottom Sheet</S.Button><S.Tooltip text="Teks tooltip"><S.Button variant="secondary">Hover saya</S.Button></S.Tooltip><S.Popover trigger={({ toggle }) => <S.Button variant="secondary" onClick={toggle}>Menu</S.Button>} items={[{ label: 'Menu 1', onSelect: () => {} }, { label: 'Menu 2', onSelect: () => {} }]} /><S.Toast action="Urungkan">Perubahan disimpan.</S.Toast></Sec>
      <Sec t="Table"><div className="w-full"><S.Table striped caption="Daftar pegawai"><S.TableHead><S.TableRow><S.TableHeaderCell>Nama</S.TableHeaderCell><S.TableHeaderCell>Jabatan</S.TableHeaderCell><S.TableHeaderCell>Status</S.TableHeaderCell></S.TableRow></S.TableHead><S.TableBody><S.TableRow><S.TableCell>Hesti Usada</S.TableCell><S.TableCell>Guru Matematika</S.TableCell><S.TableCell><S.Badge tone="green">Aktif</S.Badge></S.TableCell></S.TableRow><S.TableRow><S.TableCell>Sari Dewi</S.TableCell><S.TableCell>Staf TU</S.TableCell><S.TableCell><S.Badge tone="amber">Cuti</S.Badge></S.TableCell></S.TableRow></S.TableBody></S.Table></div></Sec>
      <Sec t="Panel dan Daftar Deskripsi"><div className="w-full max-w-[520px]"><S.Panel title="Data Diri"><S.DescriptionList items={[{ label: 'NIP', value: '198001012005011001' }, { label: 'NIK', value: '3171010101800001' }, { label: 'Tempat Lahir', value: 'Jakarta' }, { label: 'Tanggal Lahir', value: '1 Januari 1980' }]} /></S.Panel></div></Sec>
      <Sec t="Loading"><S.Spinner size="sm" /><S.Spinner /><S.Spinner size="lg" /><div className="flex w-[328px] flex-col gap-[8px]"><S.Skeleton shape="circle" /><S.Skeleton width="60%" /><S.Skeleton /></div></Sec>
      <Sec t="Carousel"><div className="w-full max-w-[480px]"><S.Carousel label="Pengumuman terbaru" slides={['Jadwal ujian', 'Pelatihan guru', 'Pembaruan aplikasi'].map((t) => <div key={t} className="grid h-[160px] place-items-center bg-sd-blue-5 sd-t-headingmedium text-sd-gray-90">{t}</div>)} /></div></Sec>
      <Sec t="Footer"><div className="w-full overflow-hidden rounded-[8px]"><S.Footer logo={<span className="sd-t-headingmedium">Nama Aplikasi</span>} sections={[{ title: 'Layanan', links: [{ label: 'Beranda', href: '#' }, { label: 'Bantuan', href: '#' }] }, { title: 'Tautan', links: [{ label: 'Kemendikdasmen', href: '#', external: true }] }]} copyright="Hak Cipta 2021 oleh Kementerian Pendidikan Dasar dan Menengah Republik Indonesia" language="ID" /></div></Sec>
      <Sec t="Konten"><div className="w-[328px]"><S.Card title="Judul kartu" action={<S.Button>Aksi</S.Button>}>Deskripsi singkat kartu.</S.Card></div><S.Accordion title="Accordion" defaultOpen>Isi accordion</S.Accordion><div className="flex items-center gap-[8px]"><S.Avatar name="Budi" size={48} /><S.Avatar name="Sari" shape="square" /></div><div className="w-[328px]"><S.List><S.ListItem label="Item satu" description="Deskripsi" artwork={<S.Avatar name="A" />} /><S.ListItem label="Item dua" end={<S.Badge>Baru</S.Badge>} /></S.List></div><S.EmptyState title="Belum ada data" description="Data akan muncul di sini." /></Sec>
      <S.HeaderBar title="Judul halaman" actions={<S.Button size="sm">Simpan</S.Button>} />
      <S.Modal open={m} onClose={() => setM(false)} title="Judul modal" footer={<><S.Button variant="secondary" onClick={() => setM(false)}>Batal</S.Button><S.Button onClick={() => setM(false)}>Simpan</S.Button></>}>Isi modal.</S.Modal>
      <S.BottomSheet open={sh} onClose={() => setSh(false)} title="Pilih"><S.BottomSheetItem selected>Satu</S.BottomSheetItem><S.BottomSheetItem>Dua</S.BottomSheetItem></S.BottomSheet>
    </div>
    </S.Platform>
  );
}
