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

// Function to generate a nonce value
const generateNonce = () => crypto.randomBytes(16).toString('base64');

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://cardullo.github.io' : `https://ufox.vercel.app`,
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

      // Save the generated nonce for later use
      this.cache.set('nonceValue', generateNonce());
    },
  },

  // Function to inject the CSP header and meta tag
  async onPageRender({ renderResult }) {
    // Retrieve the inline script hashes and nonce from the cache
    const inlineScriptHashes = this.cache.get('inlineScriptHashes') || [];
    const nonceValue = this.cache.get('nonceValue') || '';

    // Create the Content-Security-Policy header
    const cspHeader = `script-src 'self' 'unsafe-inline' 'nonce-${nonceValue}' ${inlineScriptHashes.join(' ')};`;

    // Create a copy of the original renderResult to avoid modifying the parameter directly
    const modifiedResult = { ...renderResult };

    // Add the CSP header to the response
    modifiedResult.headers.append('Content-Security-Policy', cspHeader);

    // Inject the CSP meta tag into the head
    const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="${cspHeader}">`;
    modifiedResult.html = modifiedResult.html.replace('</head>', `${cspMetaTag}</head>`);

    // Return the modified result
    return modifiedResult;
  },
});
