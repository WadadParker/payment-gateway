import { defineConfig } from 'astro/config';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        buffer: 'buffer'
      }
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser global polyfills
        define: {
          global: 'globalThis'
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ]
      }
    }
  }
});