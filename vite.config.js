import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Cyifmae-Cipher/',
  plugins: [react()],
  server: {
    port: 1932,
    allowedHosts: ['.zrok.io'],
  },
});
