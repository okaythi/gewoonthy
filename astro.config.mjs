import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import remarkGithubAlerts from 'remark-github-alerts';
import remarkGfm from 'remark-gfm';
import { unified } from '@astrojs/markdown-remark';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  redirects: {
    '/github': 'https://github.com/okaythi/gewoonthy'
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm, remarkGithubAlerts]
    }),
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
