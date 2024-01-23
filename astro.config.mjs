import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

const DEV_PORT = 4321;

// Content Security Policy (CSP) meta tag
const cspMetaTag = '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\' \'unsafe-inline\';">';

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: 'server',
  /* Like Vercel, Netlify,… Mimicking for dev. server */
  // trailingSlash: 'always',

  server: {
    /* Dev. server only */
    port: DEV_PORT
  },
  integrations: [
    sitemap(), tailwind(),
  ],
  adapter: vercel(),

  // Add the CSP meta tag to the head of the HTML
  // Adjust this based on your actual HTML structure
  head: [
    cspMetaTag,
  ],
});




// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
// import tailwind from '@astrojs/tailwind';
// import vercel from "@astrojs/vercel/serverless";
// const DEV_PORT = 4321;


// // https://astro.build/config
// export default defineConfig({
//   site: process.env.CI ? 'https://themesberg.github.io' : `http://localhost:${DEV_PORT}`,
//   base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
//   output: 'server',
//   /* Like Vercel, Netlify,… Mimicking for dev. server */
//   // trailingSlash: 'always',

//   server: {
//     /* Dev. server only */
//     port: DEV_PORT
//   },
//   integrations: [
//   //
//   sitemap(), tailwind()],
//   adapter: vercel()
// });
