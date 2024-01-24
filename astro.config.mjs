// astro.config.mjs

import { defineConfig } from 'astro/config';
import crypto from 'crypto';

const DEV_PORT = 4321;

// Function to calculate the hash of inline scripts
const calculateInlineScriptHash = (scriptContent) =>
  crypto.createHash('sha256').update(scriptContent).digest('base64');

export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'server',
  server: {
    port: DEV_PORT,
  },
  // ... other configurations

  hooks: {
    onEnd() {
      const { contents } = this.dist.read('index.html');

      const inlineScripts = contents.match(/<script>([\s\S]*?)<\/script>/g) || [];
      const inlineScriptHashes = inlineScripts.map((script) => {
        const scriptContent = script.replace(/<script>|<\/script>/g, '').trim();
        return calculateInlineScriptHash(scriptContent);
      });

      this.cache.set('inlineScriptHashes', inlineScriptHashes);
    },
  },

  async onPageRender({ renderResult }) {
    const inlineScriptHashes = this.cache.get('inlineScriptHashes') || [];

    const cspHeader = `default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; script-src 'self' https://ufox.vercel.app 'unsafe-inline' 'unsafe-eval' ${inlineScriptHashes.join(' ')};`;

    const modifiedResult = { ...renderResult };

    modifiedResult.headers.append('Content-Security-Policy', cspHeader);

    const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="${cspHeader}">`;
    modifiedResult.html = modifiedResult.html.replace('</head>', `${cspMetaTag}</head>`);

    return modifiedResult;
  },
});
