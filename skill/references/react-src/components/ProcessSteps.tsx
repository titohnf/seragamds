import type { ReactNode } from 'react';
import { typo } from '../tokens';

export type ProcessStepState = 'done' | 'active' | 'todo';
/** `detail` hanya dipakai orientasi vertikal: isi yang tampil di bawah langkah (mis. daftar bagian yang perlu diisi). */
/** `disabled` menonaktifkan langkah ini secara eksplisit (tidak bisa dipilih); tanpa itu, `sequential` yang menentukan. */
export type ProcessStep = { key: string; label: ReactNode; caption?: ReactNode; state: ProcessStepState; detail?: ReactNode; disabled?: boolean };

const T = {
  light: {
    lineOn: 'bg-sd-green-60', lineOff: 'bg-sd-gray-10',
    done: 'border-sd-green-60 bg-sd-green-60 text-white', active: 'border-sd-blue-70 bg-white text-sd-blue-70', todo: 'border-sd-gray-30 bg-white text-sd-gray-60',
    label: 'text-sd-gray-90', caption: 'text-sd-gray-60', todoHover: 'group-hover:border-sd-gray-60', current: 'bg-sd-blue-5',
    disabledCircle: 'border-sd-gray-20 bg-white text-sd-gray-50', disabledLabel: 'text-sd-gray-50', disabledCaption: 'text-sd-gray-50',
    ring: 'shadow-[0_0_0_2px_#fff,0_0_0_4px_var(--sd-interactive-focused)]',
    focus: 'focus-visible:shadow-[0_0_0_2px_#fff,0_0_0_4px_var(--sd-interactive-focused)]',
  },
  inverse: {
    lineOn: 'bg-sd-green-40', lineOff: 'bg-sd-gray-70',
    done: 'border-sd-green-40 bg-sd-green-40 text-white', active: 'border-sd-blue-30 bg-transparent text-sd-blue-30', todo: 'border-sd-gray-60 bg-transparent text-sd-gray-30',
    label: 'text-sd-text-inverse', caption: 'text-sd-text-inverse-subdued', todoHover: 'group-hover:border-sd-gray-30', current: 'bg-white/10',
    disabledCircle: 'border-sd-gray-70 bg-transparent text-sd-gray-40', disabledLabel: 'text-sd-gray-40', disabledCaption: 'text-sd-gray-40',
    ring: 'shadow-[0_0_0_3px_var(--sd-blue-30)]',
    focus: 'focus-visible:shadow-[0_0_0_3px_var(--sd-blue-30)]',
  },
} as const;

/**
 * Process Steps Seragam (ekstensi di luar Figma): rel proses horizontal untuk alur berurutan yang bisa dilompati.
 * Bukan Stepper (yang di Seragam adalah input angka). Lingkaran 32px: `done` terisi + centang, `active` garis biru,
 * `todo` garis abu. `current` menandai halaman yang sedang dibuka (cincin fokus). Label 13/20 semibold, keterangan 12/16.
 * `orientation="vertical"`: daftar tegak (lingkaran di kiri, label dan keterangan di kanan) untuk sidebar; langkah aktif diberi latar. Warna status: belum = abu, berjalan = biru, selesai = hijau. Garis penghubung hijau di antara langkah yang selesai dan langkah sesudahnya. `inverse` untuk latar gelap apa pun (mis. PageHeader blue atau dark); cincin tanpa celah supaya tidak bergantung warna latar.
 * Langkah selesai tetap menampilkan nomornya; statusnya terbaca dari warna: selesai = hijau terisi, berjalan = outline biru, belum = outline abu. Tanpa tanda centang.
 */
export function ProcessSteps({ steps, current, onSelect, sequential = false, inverse = false, orientation = 'horizontal', 'aria-label': ariaLabel = 'Langkah proses', className = '' }: {
  steps: ProcessStep[]; current?: string; onSelect?: (key: string) => void; sequential?: boolean; inverse?: boolean; orientation?: 'horizontal' | 'vertical'; 'aria-label'?: string; className?: string;
}) {
  const t = inverse ? T.inverse : T.light;
  // Langkah hanya DAPAT DIKLIK bila `onSelect` ada. Tanpa itu rel hanya penanda posisi: elemen statis, tanpa hover/fokus/kursor tangan,
  // supaya tidak menjanjikan interaksi yang tidak ada. Bila dapat diklik: tombol dengan hover terlihat TANPA mengubah warna latar (label bergaris bawah, tepi lingkaran belum-selesai menguat, kursor tangan), fokus, dan aria-current.
  // `sequential`: langkah baru bisa dipilih setelah langkah sebelumnya selesai; sisanya nonaktif (tombol `disabled`, redup, kursor not-allowed).
  const interactive = !!onSelect;
  // Nonaktif: `disabled` eksplisit pada langkah, atau (mode `sequential`) langkah yang langkah SEBELUMNYA belum selesai. Langkah pertama selalu aktif.
  const isOff = (i: number) => interactive && (steps[i].disabled ?? (sequential && i > 0 && steps[i - 1].state !== 'done'));
  const Step = interactive ? 'button' : 'div';
  const stepProps = (key: string, off: boolean) => (interactive ? { type: 'button' as const, onClick: () => onSelect?.(key), disabled: off } : {});
  if (orientation === 'vertical') {
    return (
      <ol aria-label={ariaLabel} className={`flex flex-col ${className}`}>
        {steps.map((s, i) => {
          const on = current === s.key;
          const berikut = steps[i + 1];
          const garisOn = s.state === 'done';
          const off = isOff(i); const dim = off && s.state === 'todo';
          return (
            <li key={s.key} className="relative">
              {berikut && <span aria-hidden className={`absolute bottom-[-10px] left-[25px] top-[38px] w-[3px] ${garisOn ? t.lineOn : t.lineOff}`} />}
              <Step
                {...stepProps(s.key, off)} aria-current={on ? 'step' : undefined}
                className={`group relative z-[1] flex w-full items-center gap-[12px] rounded-[8px] px-[12px] py-[10px] text-left outline-none ${interactive ? (off ? 'cursor-not-allowed' : `cursor-pointer ${t.focus}`) : ''}`}
              >
                <span className={`grid size-[28px] shrink-0 place-items-center rounded-full border-2 ${dim ? t.disabledCircle : t[s.state]} ${interactive && !off && s.state === 'todo' ? t.todoHover : ''}`} style={{ ...typo.bodySmallBold }}>
                  {i + 1}
                </span>
                <span className={`${dim ? t.disabledLabel : t.label} ${interactive && !off ? 'group-hover:underline group-hover:underline-offset-[3px]' : ''}`} style={{ ...typo.body, fontWeight: on ? 700 : 400 }}>{s.label}</span>
              </Step>
              {s.detail && <div className="relative z-[1] pb-[6px] pl-[52px] pr-[8px]">{s.detail}</div>}
            </li>
          );
        })}
      </ol>
    );
  }
  return (
    <div className="max-w-full overflow-x-auto">
    <ol aria-label={ariaLabel} className={`flex min-w-[720px] items-start ${className}`}>
      {steps.map((s, i) => {
        const on = current === s.key;
        const garisOn = i > 0 && steps[i - 1].state === 'done';
        const off = isOff(i); const dim = off && s.state === 'todo';
        return (
          <li key={s.key} className="relative flex-1">
            {/* Garis hanya di antara tepi dua lingkaran (radius 16 + celah 6), tepat di tengah vertikal lingkaran (6 + 16 = 22), dan di ATAS latar hover tombol (z-[2], tanpa pointer) agar tidak hilang saat hover.
                Tidak boleh dimulai/berakhir di pusat lingkaran: pada varian inverse lingkaran todo/aktif transparan sehingga garis akan tampak masuk ke dalamnya. */}
            {i > 0 && <span aria-hidden data-connector className={`pointer-events-none absolute top-[20.5px] z-[2] h-[3px] ${garisOn ? t.lineOn : t.lineOff}`} style={{ left: 'calc(-50% + 22px)', right: 'calc(50% + 22px)' }} />}
            <Step
              {...stepProps(s.key, off)} aria-current={on ? 'step' : undefined}
              className={`group relative z-[1] flex w-full flex-col items-center gap-[6px] rounded-[8px] px-[4px] py-[6px] text-center outline-none ${interactive ? (off ? 'cursor-not-allowed' : `cursor-pointer ${t.focus}`) : ''}`}
            >
              <span className={`grid size-[32px] place-items-center rounded-full border-2 ${dim ? t.disabledCircle : t[s.state]} ${on ? t.ring : ''} ${interactive && !off && s.state === 'todo' ? t.todoHover : ''}`} style={{ ...typo.action }}>
                {i + 1}
              </span>
              <span className={`${dim ? t.disabledLabel : t.label} ${interactive && !off ? 'group-hover:underline group-hover:underline-offset-[3px]' : ''}`} style={{ ...typo.bodySmall, fontWeight: on ? 700 : 600 }}>{s.label}</span>
              {s.caption && <span className={dim ? t.disabledCaption : t.caption} style={{ ...typo.helper }}>{s.caption}</span>}
            </Step>
          </li>
        );
      })}
    </ol>
    </div>
  );
}
