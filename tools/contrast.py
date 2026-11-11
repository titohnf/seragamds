"""Audit kontras WCAG 2.1 untuk pasangan teks/latar yang benar-benar dipakai komponen.

Nilai warna dibaca dari tokens/seragam.tokens.json (primitive, semantic, fixed). Teks biasa wajib >= 4.5:1 (AA);
komponen UI dan teks besar (>= 24px, atau >= 18,66px tebal) >= 3:1. Teks nonaktif dikecualikan WCAG (1.4.3).
Tambah pasangan di PAIRS saat komponen memakai kombinasi warna baru; pasangan yang gagal tetapi sah wajib masuk
ACCEPTED lengkap dengan alasannya, bukan dihapus.
"""

# (teks, latar, minimum, dipakai di)
PAIRS = [
    ('gray-90', 'white', 4.5, 'teks utama di kartu, modal, kolom isian'),
    ('gray-90', 'gray-0', 4.5, 'teks utama di latar halaman'),
    ('gray-90', 'gray-5', 4.5, 'hover/aktif Navigation Bar dan Vertical Navigation terang'),
    ('gray-90', 'blue-5', 4.5, 'Chip aktif, baris tabel terpilih'),
    ('gray-90', 'red-5', 4.5, 'Select/TextField galat'),
    ('gray-90', 'badge-neutral', 4.5, 'Badge netral, header tabel neutral'),
    ('gray-90', 'badge-success', 4.5, 'Badge sukses'),
    ('gray-90', 'badge-warning', 4.5, 'Badge peringatan'),
    ('gray-90', 'badge-critical', 4.5, 'Badge kritis'),
    ('gray-90', 'badge-info', 4.5, 'Badge informasi'),
    ('gray-90', 'warning-surface', 4.5, 'Banner peringatan'),
    ('gray-90', 'cyan-5', 4.5, 'Banner informasi'),
    ('gray-90', 'green-5', 4.5, 'Banner sukses'),
    ('gray-60', 'white', 4.5, 'teks sekunder, placeholder, label Panel'),
    ('gray-60', 'gray-0', 4.5, 'teks sekunder di latar halaman, placeholder'),
    ('gray-70', 'red-5', 4.5, 'placeholder CustomSelect saat galat'),
    ('blue-70', 'white', 4.5, 'tautan, aksi, tab aktif'),
    ('blue-70', 'blue-5', 4.5, 'Chip aktif'),
    ('blue-70', 'gray-0', 4.5, 'tautan di latar halaman'),
    ('red-60', 'white', 4.5, 'pesan galat'),
    ('green-60', 'white', 4.5, 'teks sukses'),
    ('yellow-70', 'warning-surface', 4.5, 'teks peringatan'),
    ('white', 'blue-70', 4.5, 'Button ultimate'),
    ('white', 'gray-90', 4.5, 'Button primary, Toast, Tooltip'),
    ('white', 'red-60', 4.5, 'Button destructive'),
    ('white', 'surface-dark-blue', 4.5, 'Vertical Navigation gelap, PageHeader biru'),
    ('white', 'gray-100', 4.5, 'lapis hak cipta Footer'),
    ('blue-30', 'gray-90', 4.5, 'aksi Toast'),
    ('text-inverse-subdued', 'surface-dark-blue', 4.5, 'teks sekunder di latar biru gelap'),
    ('gray-30', 'gray-90', 4.5, 'pemisah dan teks sekunder inverse'),
    ('gray-50', 'white', 3.0, 'border kontrol (komponen UI, WCAG 1.4.11)'),
]

# Gagal AA untuk teks biasa tetapi sengaja diterima. (teks, latar): alasan.
ACCEPTED = {
    ('gray-60', 'gray-5'): 'hanya state hover/tekan sesaat (Pagination); teks tetap terbaca, kontras 4,26:1',
    ('gray-60', 'badge-neutral'): 'hanya state hover Pagination, kontras 4,18:1',
    ('gray-50', 'white'): 'teks nonaktif dikecualikan WCAG 1.4.3; border kontrol dipakai pada 3:1 (1.4.11)',
}

def hex_of(tokens, name):
    for grp in ('primitive', 'semantic', 'fixed'):
        d = tokens[grp]
        if name in d:
            v = d[name]
            return hex_of(tokens, v) if grp == 'semantic' else v
    raise KeyError(name)

def _lum(h):
    h = h.lstrip('#'); r, g, b = (int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))
    f = lambda c: c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)

def ratio(tokens, fg, bg):
    a, b = sorted((_lum(hex_of(tokens, fg)), _lum(hex_of(tokens, bg))), reverse=True)
    return (a + 0.05) / (b + 0.05)

def check(tokens, err):
    for fg, bg, minimum, use in PAIRS:
        try: r = ratio(tokens, fg, bg)
        except KeyError as e: err(f'kontras: token {e} tidak ada ({fg} di {bg})'); continue
        if r + 1e-9 < minimum and (fg, bg) not in ACCEPTED:
            err(f'kontras: {fg} di atas {bg} = {r:.2f}:1 < {minimum}:1 ({use}). Perbaiki warnanya atau catat di ACCEPTED dengan alasan')
