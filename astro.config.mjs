// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(
  process.env.PUBLIC_SANITY_PROJECT_ID || "",
  process.cwd(),
  ""
);

const { PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.PUBLIC_SANITY_PROJECT_ID || "",
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  site: "https://texef.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // for static builds
      // apiVersion: "2024-07-24", // insert the current date to access the latest version of the API
      studioBasePath: "/studio", // If you want to access the Studio on a route
    }),
  ],
});
