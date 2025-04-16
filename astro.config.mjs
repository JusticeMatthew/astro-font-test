// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Calistoga",
        cssVariable: "--astro-calistoga",
        variants: [
          {
            weight: 400,
            style: "normal",
            display: "swap",
            src: ["./src/assets/fonts/Calistoga.woff2"],
          },
        ],
      }
    ],
  },
});
