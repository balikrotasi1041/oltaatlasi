import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { meralar } from "./src/data/meralar-tumu.ts";
import { slugifyTr } from "./src/utils/slug.ts";

const site = process.env.PUBLIC_SITE_URL || "https://oltaatlasi.com";
const nonIndexablePaths = new Set(["/404/", "/admin/dashboard/", "/admin/seo-radar/"]);
const lastModifiedByPath = new Map();
const latestDate = (routes) => routes.map((route) => route.updatedAt).filter(Boolean).sort().at(-1);
const rememberLastModified = (pathname, routes) => {
  const value = latestDate(routes);
  if (value) lastModifiedByPath.set(pathname, new Date(`${value}T00:00:00.000Z`));
};

for (const route of meralar) {
  const pathname = `/meralar/${route.slug}/`;
  if (route.confidence === "D") nonIndexablePaths.add(pathname);
  rememberLastModified(pathname, [route]);
}

for (const province of [...new Set(meralar.map((route) => route.province))]) {
  const provinceRoutes = meralar.filter((route) => route.province === province);
  const provincePath = `/iller/${slugifyTr(province)}/`;
  if (provinceRoutes.every((route) => route.confidence === "D")) nonIndexablePaths.add(provincePath);
  rememberLastModified(provincePath, provinceRoutes);

  for (const district of [...new Set(provinceRoutes.map((route) => route.district))]) {
    const districtRoutes = provinceRoutes.filter((route) => route.district === district);
    if (districtRoutes.length < 2) continue;
    const districtPath = `${provincePath}${slugifyTr(district)}/`;
    if (districtRoutes.every((route) => route.confidence === "D")) nonIndexablePaths.add(districtPath);
    rememberLastModified(districtPath, districtRoutes);
  }
}

for (const pathname of ["/", "/meralar/", "/iller/"]) rememberLastModified(pathname, meralar);

export default defineConfig({
  site,
  integrations: [sitemap({
    filter: (page) => !nonIndexablePaths.has(new URL(page).pathname),
    serialize: (item) => {
      const lastmod = lastModifiedByPath.get(new URL(item.url).pathname);
      return lastmod ? { ...item, lastmod } : item;
    },
  })],
  output: "static",
  build: { format: "directory" },
});
