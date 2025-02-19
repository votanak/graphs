import { defineConfig } from 'vite';
import react from '/node_modules/@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
