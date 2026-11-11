import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { typo } from '../tokens';
import { Button } from './Button';
import { TextField } from './TextField';

// ---------- tanggal (ISO "YYYY-MM-DD", tanpa zona waktu) ----------
const pad = (n: number) => String(n).padStart(2, '0');
export const toISO = (y: number, m: number, d: number) => `${y}-${pad(m + 1)}-${pad(d)}`; // m: 0-11
const parts = (iso: string) => { const [y, m, d] = iso.split('-').map(Number); return { y, m: m - 1, d }; };
const daysIn = (y: number, m: number) => new Date(y, m + 1, 0).getDate();
const mondayIndex = (y: number, m: number, d = 1) => (new Date(y, m, d).getDay() + 6) % 7; // Senin = 0
const addDays = (iso: string, n: number) => { const { y, m, d } = parts(iso); const t = new Date(y, m, d + n); return toISO(t.getFullYear(), t.getMonth(), t.getDate()); };
const addMonths = (iso: string, n: number) => { const { y, m, d } = parts(iso); const t = new Date(y, m + n, 1); const last = daysIn(t.getFullYear(), t.getMonth()); return toISO(t.getFullYear(), t.getMonth(), Math.min(d, last)); };
const todayISO = () => { const t = new Date(); return toISO(t.getFullYear(), t.getMonth(), t.getDate()); };
const clamp = (iso: string, min?: string, max?: string) => (min && iso < min ? min : max && iso > max ? max : iso);
const monthTitle = (y: number, m: number) => new Intl.DateTimeFormat('id-ID', { month: 'long', year: 'numeric' }).format(new Date(y, m, 1));
const longDate = (iso: string) => { const { y, m, d } = parts(iso); return new Intl.DateTimeFormat('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(y, m, d)); };
/** "2025-11-12" → "12/11/2025" */
export const formatDate = (iso: string | null | undefined) => (iso ? `${iso.slice(8, 10)}/${iso.slice(5, 7)}/${iso.slice(0, 4)}` : '');
/** "12/11/2025" atau "12-11-2025" → "2025-11-12"; null bila bukan tanggal yang sah. */
export function parseDate(text: string): string | null {
  const m = text.trim().match(/^(\d{1,2})[/\-.](\d{1,2})[/\-.](\d{4})$/); if (!m) return null;
  const d = +m[1], mo = +m[2] - 1, y = +m[3]; const t = new Date(y, mo, d);
  return t.getFullYear() === y && t.getMonth() === mo && t.getDate() === d ? toISO(y, mo, d) : null;
}
const WEEKDAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

/**
 * Calendar Seragam (EKSTENSI, tidak ada di Figma/situs): kisi bulan, minggu mulai Senin, bahasa Indonesia. Tanggal berformat ISO "YYYY-MM-DD".
 * Sel 44px (target sentuh); terpilih = latar blue-70 + teks putih; hari ini = border blue-70; nonaktif di luar `min`/`max`.
 * Keyboard (pola WAI-ARIA grid): ←/→ ±1 hari, ↑/↓ ±1 minggu, Home/End awal/akhir minggu, PageUp/PageDown ±1 bulan (Shift: ±1 tahun), Enter/Space memilih.
 * Hanya satu sel yang masuk urutan Tab (roving tabindex); tiap sel punya `aria-label` tanggal lengkap ("Rabu, 12 November 2025").
 */
export function Calendar({ value, onChange, min, max, className = '' }: { value?: string | null; onChange: (iso: string) => void; min?: string; max?: string; className?: string }) {
  const start = clamp(value || todayISO(), min, max);
  const [focus, setFocus] = useState(start);
  const [wantFocus, setWantFocus] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const { y, m } = parts(focus);
  const today = todayISO();
  useEffect(() => { if (wantFocus) { gridRef.current?.querySelector<HTMLElement>(`[data-date="${focus}"]`)?.focus(); setWantFocus(false); } }, [wantFocus, focus]);
  const go = (iso: string) => { setFocus(clamp(iso, min, max)); setWantFocus(true); };
  const move = (e: React.KeyboardEvent) => {
    const dow = mondayIndex(y, m, parts(focus).d);
    const to: Record<string, string> = {
      ArrowLeft: addDays(focus, -1), ArrowRight: addDays(focus, 1), ArrowUp: addDays(focus, -7), ArrowDown: addDays(focus, 7),
      Home: addDays(focus, -dow), End: addDays(focus, 6 - dow),
      PageUp: addMonths(focus, e.shiftKey ? -12 : -1), PageDown: addMonths(focus, e.shiftKey ? 12 : 1),
    };
    if (to[e.key]) { e.preventDefault(); go(to[e.key]); }
  };
  const lead = mondayIndex(y, m); const n = daysIn(y, m);
  const cells: (number | null)[] = [...Array(lead).fill(null), ...Array.from({ length: n }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const prevOff = !!min && toISO(y, m, 1) <= min; // min sudah di bulan ini (atau lebih awal sudah terlewati): bulan sebelumnya seluruhnya di luar rentang
  const nextOff = !!max && toISO(y, m, daysIn(y, m)) >= max;
  return (
    <div className={`w-[308px] max-w-full ${className}`} onKeyDown={move}>
      <div className="mb-[8px] flex items-center justify-between">
        <button type="button" aria-label="Bulan sebelumnya" disabled={prevOff} onClick={() => setFocus(clamp(addMonths(focus, -1), min, max))}
          className="grid size-[36px] place-items-center rounded-[4px] text-sd-gray-90 hover:bg-sd-gray-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50 disabled:text-sd-gray-20 disabled:hover:bg-transparent"><ChevronLeft aria-hidden className="size-[20px]" /></button>
        <div aria-live="polite" className="text-sd-gray-90" style={{ ...typo.action }}>{monthTitle(y, m)}</div>
        <button type="button" aria-label="Bulan berikutnya" disabled={nextOff} onClick={() => setFocus(clamp(addMonths(focus, 1), min, max))}
          className="grid size-[36px] place-items-center rounded-[4px] text-sd-gray-90 hover:bg-sd-gray-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50 disabled:text-sd-gray-20 disabled:hover:bg-transparent"><ChevronRight aria-hidden className="size-[20px]" /></button>
      </div>
      <div ref={gridRef} role="grid" aria-label={monthTitle(y, m)}>
        <div role="row" className="grid grid-cols-7">
          {WEEKDAYS.map((w) => <div key={w} role="columnheader" className="grid h-[32px] place-items-center text-sd-gray-60" style={{ ...typo.helperBold }}>{w}</div>)}
        </div>
        {Array.from({ length: cells.length / 7 }, (_, r) => (
          <div key={r} role="row" className="grid grid-cols-7">
            {cells.slice(r * 7, r * 7 + 7).map((d, c) => {
              if (d === null) return <div key={c} role="gridcell" />;
              const iso = toISO(y, m, d); const off = (!!min && iso < min) || (!!max && iso > max);
              const sel = iso === value; const isToday = iso === today;
              return (
                <div key={c} role="gridcell" aria-selected={sel}>
                  <button type="button" data-date={iso} tabIndex={iso === focus ? 0 : -1} disabled={off} aria-label={longDate(iso)} aria-current={isToday ? 'date' : undefined}
                    onClick={() => { onChange(iso); setFocus(iso); }}
                    className={`grid size-[44px] place-items-center rounded-[4px] outline-none focus-visible:shadow-[0_0_0_2px_#fff,0_0_0_4px_var(--sd-interactive-focused)] disabled:cursor-not-allowed disabled:text-sd-gray-50 ${sel ? 'bg-sd-blue-70 text-white hover:bg-sd-blue-80' : `text-sd-gray-90 hover:bg-sd-gray-5 ${isToday ? 'border border-sd-blue-70' : ''}`}`}
                    style={{ ...typo.body, fontWeight: sel ? 600 : 400 }}>{d}</button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Date Picker Seragam (EKSTENSI): isian tanggal berformat hh/bb/tttt yang bisa DIKETIK atau dipilih dari Calendar (tombol ikon kalender).
 * `value`/`onChange` memakai ISO "YYYY-MM-DD" (atau null). Tampilan label, teks bantu, dan galat sama dengan TextField.
 * Mengetik lalu meninggalkan isian memvalidasi: format salah atau di luar `min`/`max` menampilkan galat bawaan ("Format tanggal salah. Gunakan hh/bb/tttt.").
 * Calendar terbuka sebagai dialog di bawah isian; Esc atau klik di luar menutup (fokus kembali ke tombol), memilih tanggal menutup dan mengembalikan fokus ke isian.
 * `optional` menambah "(opsional)" pada label. Rentang tanggal (dari–sampai) belum ada.
 */
export function DatePicker({ value, onChange, min, max, label, helper, error, optional = false, disabled = false, className = '' }: {
  value: string | null; onChange: (iso: string | null) => void; min?: string; max?: string; label: string; helper?: ReactNode; error?: ReactNode; optional?: boolean; disabled?: boolean; className?: string;
}) {
  const [text, setText] = useState(formatDate(value));
  const [open, setOpen] = useState(false);
  const [bad, setBad] = useState<string | null>(null);
  const [top, setTop] = useState<number | undefined>();
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  useEffect(() => { setText(formatDate(value)); }, [value]);
  useEffect(() => {
    if (!open) return;
    const down = (e: MouseEvent) => !wrap.current?.contains(e.target as Node) && setOpen(false);
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('mousedown', down); document.addEventListener('keydown', key);
    requestAnimationFrame(() => wrap.current?.querySelector<HTMLElement>('[role=dialog] [data-date][tabindex="0"]')?.focus());
    return () => { document.removeEventListener('mousedown', down); document.removeEventListener('keydown', key); };
  }, [open]);
  const commit = () => {
    if (!text.trim()) { setBad(null); onChange(null); return; }
    const iso = parseDate(text);
    if (!iso) { setBad('Format tanggal salah. Gunakan hh/bb/tttt, misalnya 12/11/2025.'); return; }
    if ((min && iso < min) || (max && iso > max)) { setBad(`Tanggal harus ${min ? `mulai ${formatDate(min)}` : ''}${min && max ? ' ' : ''}${max ? `sampai ${formatDate(max)}` : ''}.`); return; }
    setBad(null); onChange(iso); setText(formatDate(iso));
  };
  const toggle = () => {
    if (disabled) return;
    if (!open && wrap.current && input.current) setTop(input.current.getBoundingClientRect().bottom - wrap.current.getBoundingClientRect().top + 4);
    setOpen((o) => !o);
  };
  return (
    <div ref={wrap} className={`relative ${className}`}>
      <TextField ref={input} label={optional ? `${label} (opsional)` : label} helper={helper} error={error ?? bad ?? undefined} disabled={disabled}
        inputMode="numeric" placeholder="hh/bb/tttt" autoComplete="off" value={text}
        onChange={(e) => { setText(e.target.value); if (bad) setBad(null); }} onBlur={commit}
        onKeyDown={(e) => { if (e.key === 'Enter') commit(); if (e.key === 'ArrowDown' && e.altKey) { e.preventDefault(); toggle(); } }}
        rightIcon={<button ref={btn} type="button" aria-label="Pilih tanggal" aria-haspopup="dialog" aria-expanded={open} aria-controls={open ? dialogId : undefined} disabled={disabled} onClick={toggle}
          className="grid size-[32px] place-items-center rounded-[4px] text-sd-gray-60 hover:bg-sd-gray-5 hover:text-sd-gray-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50 disabled:text-sd-gray-50"><CalendarDays aria-hidden className="size-[20px]" /></button>} />
      {open && (
        <div id={dialogId} role="dialog" aria-label="Pilih tanggal" className="absolute left-0 z-50 rounded-[8px] bg-white p-[16px] shadow-sd-03" style={{ top }}>
          <Calendar value={value} min={min} max={max} onChange={(iso) => { onChange(iso); setText(formatDate(iso)); setBad(null); setOpen(false); input.current?.focus(); }} />
          <div className="mt-[8px] flex justify-between border-t border-sd-modal-footer-border pt-[8px]">
            <Button variant="quiet" size="sm" onClick={() => { const t = todayISO(); if ((min && t < min) || (max && t > max)) return; onChange(t); setText(formatDate(t)); setBad(null); setOpen(false); input.current?.focus(); }}>Hari ini</Button>
            <Button variant="quiet" size="sm" onClick={() => { onChange(null); setText(''); setBad(null); setOpen(false); input.current?.focus(); }}>Hapus</Button>
          </div>
        </div>
      )}
    </div>
  );
}
