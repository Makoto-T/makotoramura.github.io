import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://makoto-t.github.io',
  base: '/makotoramura.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
