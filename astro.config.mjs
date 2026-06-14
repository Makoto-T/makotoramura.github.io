import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://makototamura.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
