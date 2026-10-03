import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

/**
 * Dev/preview port. Change the default here, or override per-run with the
 * PORT env var (`PORT=8080 npm run dev`). Read from the config rather than
 * passed as `--port` so it works the same on Windows and Unix shells.
 */
const PORT = Number(process.env.PORT) || 3200;

/**
 * Absolute origin used for og:/twitter: image URLs — scrapers fetch these
 * server-side, so a relative "/og.png" will not resolve.
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL automatically at build time, so
 * this is correct on deploy with no configuration. Elsewhere, set SITE_URL, or
 * edit the fallback below before deploying anywhere.
 */
const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : (process.env.SITE_URL ?? 'https://your-domain.example');

/**
 * Swaps the __SITE_URL__ placeholder in index.html for the real origin.
 * Vite's `define` only rewrites JavaScript, not HTML, so this has to be an
 * explicit transform.
 */
const siteUrlPlugin = {
  name: 'inject-site-url',
  transformIndexHtml(html: string) {
    return html.replaceAll('__SITE_URL__', SITE_URL);
  },
};

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), siteUrlPlugin],
    server: {
      port: PORT,
      // Fail loudly instead of silently sliding to the next free port.
      strictPort: true,
    },
    preview: {
      port: PORT,
      strictPort: true,
    },
  };
});
