import { writeFileSync } from "node:fs";
const site=(process.env.PUBLIC_SITE_URL||"https://oltaatlasi.com").replace(/\/$/,"");
writeFileSync("public/robots.txt",`User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${site}/sitemap-index.xml\nSitemap: ${site}/sitemap-images.xml\n`);
console.log(`robots.txt hazır; /admin/ taramaya kapalı, görsel sitemap üretim çıktısından oluşturulacak: ${site}`);
