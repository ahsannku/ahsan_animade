import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'build',
    },
    // To Enable cors
    proxy: {
        '/api': {
          target: 'https://animadebackend-production.up.railway.app',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
    },
    // To enable cors
    server: {
        port: 3000,
        cors: true
    },
    plugins: [react()],
  };
});