import { useEffect, type ReactNode } from 'react';
import { CircleCheck } from 'lucide-react';
import { typo } from '../tokens';

/** Durasi tampil minimal (ms) menurut panduan: Toast harus terbaca. */
export const TOAST_MIN_DURATION = 4000;

/**
 * Toast Seragam: latar gray-90, teks putih Body, radius 4, padding 12x16; aksi blue-30 semibold.
 * `tone`: `default` (netral/informatif) atau `success` (ikon centang hijau, untuk aksi yang berhasil). Aksi (`action`) = Action link: harus bisa dilakukan di tempat lain juga dan umum (mis. "Urungkan").
 * Penutupan: beri `duration` (ms) + `onClose` agar hilang sendiri; durasi dipaksa minimal 4000ms. Pengguna mobile juga bisa menutupnya dengan geser ke atas.
 * Posisi dan susunan (Toast baru MENGGANTIKAN yang lama) diatur pemanggil: render satu Toast saja pada satu waktu.
 * Pesan: informatif "subjek + kata kerja + keterangan."; galat "Gagal + kata kerja + objek. Coba lagi."; berhasil "Berhasil + kata kerja + objek!". Kata terpenting di awal; batas 1 baris mobile 64 karakter (2 baris 84), desktop 66.
 */
export function Toast({ children, action, onAction, tone = 'default', duration, onClose }: {
  children: ReactNode; action?: string; onAction?: () => void; tone?: 'default' | 'success'; duration?: number; onClose?: () => void;
}) {
  useEffect(() => {
    if (duration === undefined || !onClose) return;
    const t = setTimeout(onClose, Math.max(duration, TOAST_MIN_DURATION));
    return () => clearTimeout(t);
  }, [duration, onClose, children]);
  let startY: number | null = null;
  return (
    <div role="status" className="flex min-w-[min(328px,100%)] max-w-[480px] items-center justify-between gap-[12px] rounded-[4px] bg-sd-gray-90 px-[16px] py-[12px] text-white shadow-[0_2px_10px_rgba(0,0,0,0.1),0_0_2px_rgba(0,0,0,0.2)]" style={{ ...typo.body }}
      onTouchStart={(e) => { startY = e.touches[0].clientY; }}
      onTouchEnd={(e) => { if (startY !== null && startY - e.changedTouches[0].clientY > 30) onClose?.(); startY = null; }}>
      <span className="flex items-center gap-[8px]">
        {tone === 'success' && <CircleCheck aria-hidden className="size-[20px] shrink-0 text-sd-green-30" />}
        <span>{children}</span>
      </span>
      {action && <button onClick={onAction} className="text-sd-blue-30 hover:text-sd-blue-50" style={{ fontWeight: 600 }}>{action}</button>}
    </div>
  );
}
