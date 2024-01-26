// /// <reference types="astro/client" />

// // https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
// interface ImportMetaEnv {
// 	readonly SITE: string;
// 	readonly SUPABASE_URL: string;
//   readonly SUPABASE_ANON_KEY: string;
// }

// interface ImportMeta {
// 	readonly env: ImportMetaEnv;
// }


/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    email: string;
  }
}

interface ImportMetaEnv {
  readonly SUPABASE_URL: string
  readonly SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
