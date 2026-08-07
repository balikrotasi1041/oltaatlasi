import { writeFileSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";
const site=(process.env.PUBLIC_SITE_URL||"https://oltaatlasi.com").replace(/\/$/,"");
writeFileSync("public/robots.txt",`User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\nSitemap: ${site}/sitemap-images.xml\n`);
const escapeXml=(value)=>String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const entries=meralar.map((m)=>`  <url>\n    <loc>${site}/meralar/${escapeXml(m.slug)}/</loc>\n    <image:image>\n      <image:loc>${site}${escapeXml(m.socialImage)}</image:loc>\n      <image:title>${escapeXml(m.name)} balık avı rotası</image:title>\n      <image:caption>${escapeXml(m.summary)}</image:caption>\n    </image:image>\n  </url>`).join("\n");
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;
writeFileSync("public/sitemap-images.xml",xml);
console.log(`robots.txt ve ${meralar.length} görselli sitemap hazır: ${site}`);
