import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import remarkGithubAlerts from 'remark-github-alerts';

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
    remarkPlugins: [remarkGithubAlerts],
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
