import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Portfolio/', // Specify the base URL for deployment
  plugins: [react()],
});
