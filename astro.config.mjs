// astro.config.mjs

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import crypto from 'crypto';

const DEV_PORT = 4321;

// Function to calculate the hash of inline scripts
const calculateInlineScriptHash = (scriptContent) =>
  crypto.createHash('sha256').update(scriptContent).digest('base64');

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'server',
  server: {
    port: DEV_PORT
  },
  integrations: [sitemap(), tailwind()],
  adapter: vercel(),

  // Build hook to capture inline script hashes
  hooks: {
    onEnd() {
      // Access the built HTML
      const { contents } = this.dist.read('index.html');

      // Extract inline script contents using a regex
      const inlineScripts = contents.match(/<script>([\s\S]*?)<\/script>/g) || [];
      const inlineScriptHashes = inlineScripts.map((script) => {
        const scriptContent = script.replace(/<script>|<\/script>/g, '').trim();
        return calculateInlineScriptHash(scriptContent);
      });

      // Save the inline script hashes for later use
      this.cache.set('inlineScriptHashes', inlineScriptHashes);
    },
  },

  // Function to inject the CSP header and meta tag
  async onPageRender({ route, renderResult }) {
    // Retrieve the inline script hashes from the cache
    const inlineScriptHashes = this.cache.get('inlineScriptHashes') || [];

    // Create the Content-Security-Policy header
    const cspHeader = `script-src 'self' 'unsafe-inline' ${inlineScriptHashes.join(' ')};`;

    // Inject the CSP header into the response
    renderResult.headers.set('Content-Security-Policy', cspHeader);

    // Inject the CSP meta tag into the head
    const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="${cspHeader}">`;
    renderResult.html = renderResult.html.replace('</head>', `${cspMetaTag}</head>`);
  },
});
