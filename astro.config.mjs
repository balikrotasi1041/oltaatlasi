import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { meralar } from "./src/data/meralar-tumu.ts";

const site = process.env.PUBLIC_SITE_URL || "https://oltaatlasi.com";
const preliminaryRoutePaths = new Set(
  meralar.filter((route) => route.confidence === "D").map((route) => `/meralar/${route.slug}/`),
);

export default defineConfig({
  site,
  integrations: [sitemap({ filter: (page) => !preliminaryRoutePaths.has(new URL(page).pathname) })],
  output: "static",
  build: { format: "directory" },
});
