import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Build paket: lib/index.js (ESM, React dan lucide-react eksternal) + lib/style.css (reset, utilitas, token). Tipe dibuat terpisah oleh tsconfig.pkg.json. */
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'lib', emptyOutDir: true, sourcemap: true, cssCodeSplit: false,
    lib: { entry: 'src/pkg-entry.ts', formats: ['es'], fileName: () => 'index.js', cssFileName: 'style' },
    rollupOptions: { external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'] },
  },
});
