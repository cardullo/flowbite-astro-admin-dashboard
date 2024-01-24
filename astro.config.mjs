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
  // ... other configurations

  // Function to inject the CSP header and meta tag
  async onPageRender({ renderResult }) {
    // Retrieve the inline script hashes from the cache
    const inlineScriptHashes = this.cache.get('inlineScriptHashes') || [];

    // Calculate the hash of the specific inline script causing the issue
    const problematicScriptHash = calculateInlineScriptHash('your_inline_script_content');

    // Include the problematic script hash in the array
    inlineScriptHashes.push(problematicScriptHash);

    // Create the Content-Security-Policy header
    const cspHeader = `script-src 'self' 'unsafe-inline' ${inlineScriptHashes.join(' ')};`;

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
