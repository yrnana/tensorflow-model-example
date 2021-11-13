import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/tensorflow-model-example/',
  plugins: [react()],
  resolve: {
    alias: {
      '~/': `${process.cwd()}/src/`,
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    sourcemap: true,
  },
}));
