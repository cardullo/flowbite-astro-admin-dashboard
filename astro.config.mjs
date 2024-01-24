import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import crypto from 'crypto';

const DEV_PORT = 4321;

// Calculate the hash of an inline script
function calculateInlineScriptHash(content) {
  const hash = crypto.createHash('sha256');
  hash.update(content);
  return `'sha256-${hash.digest('base64')}'`;
}

// Content Security Policy (CSP) meta tag
function createCspMetaTag(inlineScriptHashes) {
  const cspContent = `script-src 'self' 'unsafe-inline' ${inlineScriptHashes.join(' ')}`;
  return `<meta http-equiv="Content-Security-Policy" content="${cspContent}">`;
}

export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'server',
  server: {
    port: DEV_PORT,
  },
  integrations: [
    sitemap(),
    tailwind(),
  ],
  adapter: vercel(),

  // Add the CSP meta tag to the head of the HTML
  // Adjust this based on your actual HTML structure
  head: [
    createCspMetaTag([
      calculateInlineScriptHash("sha256-deGfea5nUfuOted+3cop9YJHuSceUjGFRHAYCXVNqH4="),
      // Add more hashes for other inline scripts as needed
    ]),
  ],
});



// // astro.config.mjs

// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
// import tailwind from '@astrojs/tailwind';
// import vercel from "@astrojs/vercel/serverless";
// import crypto from 'crypto';

// const DEV_PORT = 4321;

// // Function to calculate the hash of inline scripts
// const calculateInlineScriptHash = (scriptContent) => {
//   return crypto.createHash('sha256').update(scriptContent).digest('base64');
// };

// // https://astro.build/config
// export default defineConfig({
//   site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
//   base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
//   output: 'server',
//   server: {
//     port: DEV_PORT
//   },
//   integrations: [sitemap(), tailwind()],
//   adapter: vercel(),

//   // Build hook to capture inline script hashes
//   hooks: {
//     onEnd() {
//       // Access the built HTML
//       const { contents } = this.dist.read('index.html');

//       // Extract inline script contents using a regex
//       const inlineScripts = contents.match(/<script>([\s\S]*?)<\/script>/g) || [];
//       const inlineScriptHashes = inlineScripts.map((script) => {
//         const scriptContent = script.replace(/<script>|<\/script>/g, '').trim();
//         return calculateInlineScriptHash(scriptContent);
//       });

//       // Save the inline script hashes for later use
//       this.cache.set('inlineScriptHashes', inlineScriptHashes);
//     },
//   },

//   // Function to inject the CSP header and meta tag
//   async onPageRender({ route, renderResult }) {
//     // Retrieve the inline script hashes from the cache
//     const inlineScriptHashes = this.cache.get('inlineScriptHashes') || [];

//     // Create the Content-Security-Policy header
//     const cspHeader = `script-src 'self' 'unsafe-inline' ${inlineScriptHashes.join(' ')};`;

//     // Add the CSP header to the response
//     renderResult.headers.append('Content-Security-Policy', cspHeader);

//     // Inject the CSP meta tag into the head
//     const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="${cspHeader}">`;
//     renderResult.html = renderResult.html.replace('</head>', `${cspMetaTag}</head>`);
//   },
// });
