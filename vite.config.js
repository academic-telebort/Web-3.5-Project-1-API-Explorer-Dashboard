// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['axios'],
          utils: ['date-fns'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'production'
    ),
  },
  server: {
    port: 3000,
    open: true,
  },
});
