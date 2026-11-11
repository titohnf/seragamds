import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

/**
 * Carousel Seragam (Figma "Carousel updated"; panduan seragam.belajar.id/carousel).
 * Satu slide aktif pada satu waktu. Kontrol: tombol panah 28px (lingkaran putih `light` atau `gray-90` `dark`), titik pagination,
 * swipe, dan tombol panah keyboard. Autoplay opsional (ms) berhenti saat disentuh, disorot, atau difokuskan dan selalu punya tombol jeda;
 * tidak berjalan bila pengguna memilih gerak berkurang. Beri `aria-label` pada carousel dan teks alternatif pada setiap gambar di dalam slide.
 * Maksimal 5–7 slide (lihat panduan).
 */
export function Carousel({ slides, label, autoplay, pagination = true, arrows = true, arrowTone = 'light', loop = true, index, onIndexChange, className = '' }: {
  slides: ReactNode[];
  /** Nama carousel untuk pembaca layar (wajib), mis. "Pengumuman terbaru". */
  label: string;
  /** Jeda antar slide dalam milidetik. Kosongkan untuk tanpa autoplay (bawaan). */
  autoplay?: number;
  pagination?: boolean;
  arrows?: boolean;
  arrowTone?: 'light' | 'dark';
  loop?: boolean;
  index?: number;
  onIndexChange?: (i: number) => void;
  className?: string;
}) {
  const [inner, setInner] = useState(0);
  const cur = index ?? inner;
  const n = slides.length;
  const [paused, setPaused] = useState(false);   // dipicu hover/fokus
  const [stopped, setStopped] = useState(false); // dipicu tombol jeda atau navigasi manual
  const touchX = useRef<number | null>(null);
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const auto = !!autoplay && !reduced;
  const running = auto && !paused && !stopped;

  const go = useCallback((i: number, manual = false) => {
    const next = loop ? (i + n) % n : Math.min(n - 1, Math.max(0, i));
    if (index === undefined) setInner(next);
    onIndexChange?.(next);
    if (manual) setStopped(true);
  }, [index, loop, n, onIndexChange]);

  useEffect(() => {
    if (!running || n < 2) return;
    const t = setTimeout(() => go(cur + 1), autoplay);
    return () => clearTimeout(t);
  }, [running, cur, n, autoplay, go]);

  const arrow = (dir: -1 | 1) => {
    const disabled = !loop && (dir === -1 ? cur === 0 : cur === n - 1);
    const dark = arrowTone === 'dark';
    return (
      <button type="button" aria-label={dir === -1 ? 'Slide sebelumnya' : 'Slide berikutnya'} disabled={disabled} onClick={() => go(cur + dir, true)}
        className={`absolute top-1/2 z-10 grid size-[28px] -translate-y-1/2 place-items-center rounded-full shadow-sd-01 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sd-blue-50 disabled:opacity-40 ${dir === -1 ? 'left-[8px]' : 'right-[8px]'} ${dark ? 'bg-sd-gray-90 text-sd-white' : 'bg-sd-white text-sd-gray-90'}`}>
        {dir === -1 ? <ChevronLeft className="size-[20px]" /> : <ChevronRight className="size-[20px]" />}
      </button>
    );
  };

  return (
    <section role="group" aria-roledescription="carousel" aria-label={label} className={`flex flex-col gap-[12px] ${className}`}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, true); } if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, true); } }}>
      <div className="relative overflow-hidden rounded-[8px]"
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; setPaused(true); }}
        onTouchEnd={(e) => { const s = touchX.current; touchX.current = null; setPaused(false); if (s === null) return; const d = e.changedTouches[0].clientX - s; if (Math.abs(d) > 40) go(cur + (d < 0 ? 1 : -1), true); }}>
        <div aria-live={running ? 'off' : 'polite'} className="flex transition-transform duration-300 motion-reduce:transition-none" style={{ transform: `translateX(-${cur * 100}%)` }}>
          {slides.map((s, i) => (
            <div key={i} role="group" aria-roledescription="slide" aria-label={`${i + 1} dari ${n}`} aria-hidden={i !== cur} inert={i !== cur} className="w-full shrink-0">{s}</div>
          ))}
        </div>
        {arrows && n > 1 && <>{arrow(-1)}{arrow(1)}</>}
      </div>
      {(pagination || auto) && n > 1 && (
        <div className="flex items-center justify-center gap-[4px]">
          {auto && (
            <button type="button" aria-label={running ? 'Jeda otomatis' : 'Putar otomatis'} onClick={() => setStopped(running)}
              className="mr-[8px] grid size-[28px] place-items-center rounded-full text-sd-gray-90 hover:bg-sd-gray-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50">
              {running ? <Pause className="size-[16px]" /> : <Play className="size-[16px]" />}
            </button>
          )}
          {pagination && slides.map((_, i) => (
            <button key={i} type="button" aria-label={`Ke slide ${i + 1}`} aria-current={i === cur} onClick={() => go(i, true)}
              className="grid size-[24px] place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-sd-blue-50">
              <span className={`block rounded-full transition-all ${i === cur ? 'h-[8px] w-[20px] bg-sd-blue-70' : 'size-[8px] bg-sd-gray-30'}`} />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
