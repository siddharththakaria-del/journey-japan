import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://siddharththakaria-del.github.io',
  base: '/journey-japan',
  markdown: {
    syntaxHighlight: 'shiki'
  }
});