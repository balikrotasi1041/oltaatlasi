import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { meralar } from "./src/data/meralar-tumu.ts";
import { baliklar, balikContentUpdatedAt } from "./src/data/baliklar.ts";
import { rehberler } from "./src/data/rehber-katalogu.ts";
import { dunyaBalikcilikYazilari } from "./src/data/dunya-balikcilik.ts";
import { slugifyTr } from "./src/utils/slug.ts";

const site = process.env.PUBLIC_SITE_URL || "https://oltaatlasi.com";
const nonIndexablePaths = new Set(["/404/", "/admin/dashboard/", "/admin/seo-radar/", "/admin/traffic-diagnostics/", "/admin/growth-control/"]);
const lastModifiedByPath = new Map();
const latestDate = (routes) => routes.map((route) => route.updatedAt).filter(Boolean).sort().at(-1);
const rememberLastModified = (pathname, routes) => {
  const value = latestDate(routes);
  if (value) lastModifiedByPath.set(pathname, new Date(`${value}T00:00:00.000Z`));
};

for (const route of meralar) {
  const pathname = `/meralar/${route.slug}/`;
  rememberLastModified(pathname, [route]);
  if (route.confidence === "D") nonIndexablePaths.add(pathname);
}

for (const province of [...new Set(meralar.map((route) => route.province))]) {
  const provinceRoutes = meralar.filter((route) => route.province === province);
  const provincePath = `/iller/${slugifyTr(province)}/`;
  rememberLastModified(provincePath, provinceRoutes);

  for (const district of [...new Set(provinceRoutes.map((route) => route.district))]) {
    const districtRoutes = provinceRoutes.filter((route) => route.district === district);
    if (districtRoutes.length < 2) continue;
    const districtPath = `${provincePath}${slugifyTr(district)}/`;
    rememberLastModified(districtPath, districtRoutes);
    const verifiedDistrictRoutes = districtRoutes.filter((route) => route.confidence !== "D");
    if (district === "İl geneli" || verifiedDistrictRoutes.length < 2) nonIndexablePaths.add(districtPath);
  }
}

for (const pathname of ["/", "/meralar/", "/iller/"]) rememberLastModified(pathname, meralar);

const rememberDate = (pathname, value) => {
  if (value) lastModifiedByPath.set(pathname, new Date(`${value}T00:00:00.000Z`));
};
for (const fish of baliklar) rememberDate(`/baliklar/${fish.slug}/`, balikContentUpdatedAt);
rememberDate("/baliklar/", balikContentUpdatedAt);
for (const guide of rehberler) rememberDate(`/rehberler/${guide.slug}/`, guide.updatedAt);
rememberDate("/rehberler/", latestDate(rehberler));
for (const article of dunyaBalikcilikYazilari) rememberDate(`/dunyada-balikcilik/${article.slug}/`, article.sourceCheckedAt || article.publishedAt);
rememberDate("/dunyada-balikcilik/", latestDate(dunyaBalikcilikYazilari.map((article) => ({ updatedAt: article.sourceCheckedAt || article.publishedAt }))));
rememberDate("/yazilar/", latestDate([
  ...meralar,
  ...rehberler,
  ...dunyaBalikcilikYazilari.map((article) => ({ updatedAt: article.sourceCheckedAt || article.publishedAt })),
]));

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