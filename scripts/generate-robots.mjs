import { writeFileSync } from "node:fs";
const site=(process.env.PUBLIC_SITE_URL||"https://oltaatlasi.com").replace(/\/$/,"");
writeFileSync("public/robots.txt",`User-agent: SemrushBot\nDisallow: /\n\nUser-agent: DotBot\nDisallow: /\n\nUser-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /api/\nDisallow: /__deploy/\nDisallow: /data/weather-official-audit.json\n\nSitemap: ${site}/sitemap-index.xml\nSitemap: ${site}/sitemap-images.xml\n`);
console.log(`robots.txt hazır; SemrushBot/DotBot taraması kapalı, genel arama motorları açık; yönetim, API, deploy işaretçisi ve hava audit verisi taramaya kapalı: ${site}`);
