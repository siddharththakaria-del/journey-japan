import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://journey-japan.org',
  markdown: {
    syntaxHighlight: 'shiki'
  }
});
