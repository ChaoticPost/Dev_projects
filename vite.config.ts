import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// GitHub Pages serves this repo at /Dev_projects/
export default defineConfig({
  plugins: [react()],
  base: '/Dev_projects/',
});
