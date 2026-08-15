import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const DIST_DIR = "dist";
const SITE_ORIGIN = "https://oltaatlasi.com";
const errors = [];
const warnings = [];
const pages = [];

const walk = (dir) => readdirSync(dir).flatMap((name) => {
  const path = join(dir, name);
  return statSync(path).isDirectory() ? walk(path) : [path];
});

const attrs = (tag) => Object.fromEntries(
  [...tag.matchAll(/([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map((match) => [match[1].toLowerCase(), match[2] ?? match[3] ?? ""]),
);

const text = (value = "") => value
  .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;|&#160;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;|&#34;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/\s+/g, " ")
  .trim();

const routeForFile = (file) => {
  const rel = relative(DIST_DIR, file).split(sep).join("/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel}`;
};

for (const file of walk(DIST_DIR).filter((path) => path.endsWith(".html"))) {
  const route = routeForFile(file);
  if (route === "/404.html") continue;
  const html = readFileSync(file, "utf8");
  const metaTags = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => attrs(match[0]));
  const linkTags = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attrs(match[0]));
  const robots = metaTags.find((tag) => tag.name?.toLowerCase() === "robots")?.content?.toLowerCase() || "";
  const indexable = !robots.includes("noindex");
  if (!indexable) continue;

  const title = text(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
  const description = metaTags.find((tag) => tag.name?.toLowerCase() === "description")?.content?.trim() || "";
  const canonicalTags = linkTags.filter((tag) => (tag.rel || "").toLowerCase().split(/\s+/).includes("canonical"));
  const canonical = canonicalTags[0]?.href || "";
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1 = text(h1Matches[0]?.[1] || "");
  const visible = text(html);
  const visibleTr = visible.toLocaleLowerCase("tr-TR");
  const isRoute = /^\/meralar\/[^/]+\/$/.test(route);
  const draftPattern = /(?:ön değerlendirme|araştırma başlangıcı|pilot veri|rota dosyası)/i;

  if (!title) errors.push(`${route}: title eksik.`);
  if (!description) errors.push(`${route}: meta description eksik.`);
  if (canonicalTags.length !== 1) errors.push(`${route}: canonical sayısı ${canonicalTags.length}; tam 1 olmalı.`);
  if (h1Matches.length !== 1) errors.push(`${route}: H1 sayısı ${h1Matches.length}; tam 1 olmalı.`);
  if (draftPattern.test(title)) errors.push(`${route}: title içinde taslak/editörlük dili kaldı: "${title}".`);
  if (draftPattern.test(h1)) errors.push(`${route}: H1 içinde taslak/editörlük dili kaldı: "${h1}".`);

  if (canonical) {
    try {
      const parsed = new URL(canonical);
      if (parsed.origin !== SITE_ORIGIN) errors.push(`${route}: canonical farklı origin kullanıyor: ${canonical}`);
      if (parsed.search || parsed.hash) errors.push(`${route}: canonical query/hash içeriyor: ${canonical}`);
      if (!parsed.pathname.endsWith("/") && !parsed.pathname.includes(".")) warnings.push(`${route}: canonical son slash olmadan yayımlanıyor: ${canonical}`);
    } catch {
      errors.push(`${route}: canonical geçersiz: ${canonical}`);
    }
  }

  if (isRoute) {
    if (draftPattern.test(visible)) errors.push(`${route}: kullanıcıya görünen içerikte taslak/editörlük dili kaldı.`);
    if (!visibleTr.includes("konum")) errors.push(`${route}: rota sayfasında görünür Konum bilgisi yok.`);
    if (!/google\.com\/maps|openstreetmap\.org/i.test(html)) errors.push(`${route}: harita/konum bağlantısı yok.`);
    if (!visibleTr.includes("hassasiyet")) errors.push(`${route}: konum hassasiyeti kullanıcıya gösterilmiyor.`);
  }

  if (title.length > 72) warnings.push(`${route}: title uzun (${title.length} karakter).`);
  if (description.length > 190) warnings.push(`${route}: meta description uzun (${description.length} karakter).`);
  if (description && description.length < 60) warnings.push(`${route}: meta description kısa (${description.length} karakter).`);

  pages.push({ route, title, description, canonical, h1 });
}

const byCanonical = new Map();
const byTitle = new Map();
for (const page of pages) {
  if (page.canonical) {
    const list = byCanonical.get(page.canonical) || [];
    list.push(page.route);
    byCanonical.set(page.canonical, list);
  }
  if (page.title) {
    const list = byTitle.get(page.title) || [];
    list.push(page.route);
    byTitle.set(page.title, list);
  }
}
for (const [canonical, routes] of byCanonical) if (routes.length > 1) errors.push(`Canonical çakışması ${canonical}: ${routes.join(", ")}`);
for (const [title, routes] of byTitle) if (routes.length > 1) warnings.push(`Aynı title ${routes.length} sayfada: "${title}" → ${routes.join(", ")}`);

console.log(`Render SEO denetimi: ${pages.length} indexlenebilir HTML; ${errors.length} hata, ${warnings.length} uyarı.`);
for (const warning of warnings.slice(0, 80)) console.warn(`UYARI: ${warning}`);
if (warnings.length > 80) console.warn(`UYARI: ${warnings.length - 80} ek uyarı özet çıktıda gösterilmedi.`);
for (const error of errors) console.error(`HATA: ${error}`);
if (errors.length) process.exit(1);
