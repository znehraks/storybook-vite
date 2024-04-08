import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@atoms': '/src/components/@atoms',
      '@molecules': '/src/components/@molecules',
      '@organisms': '/src/components/@organisms',
      '@templates': '/src/components/@templates',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
    },
  },
});
