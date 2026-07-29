import { writeFileSync, readFileSync } from "node:fs";
const site=(process.env.PUBLIC_SITE_URL||"https://oltaatlasi.com").replace(/\/$/,"");
writeFileSync("public/robots.txt",`User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\nSitemap: ${site}/sitemap-images.xml\n`);
const baseSource=readFileSync("src/data/meralar.ts","utf8");
const baseMatch=baseSource.match(/export const meralar: Mera\[\] = (\[.*?\n\]);\n\nexport const provinces/s);
if(!baseMatch) throw new Error("Temel mera verisi image sitemap için okunamadı.");
const dailySource=readFileSync("src/data/meralar-gunluk.ts","utf8");
const dailyArrayMatch=dailySource.match(/export const gunlukMeralar:\s*Mera\[\]\s*=\s*(\[.*\]);\s*$/s);
const seedMatch=dailySource.match(/const seeds:RouteSeed\[\]=\s*(\[.*\]);\s*export const gunlukMeralar/s);
let dailyMeralar=[];
if(dailyArrayMatch){
  dailyMeralar=Function(`"use strict"; return (${dailyArrayMatch[1]});`)();
}else if(seedMatch){
  const seeds=JSON.parse(seedMatch[1]);
  dailyMeralar=seeds.map((seed)=>({
    slug:seed.slug,
    name:seed.name,
    summary:`${seed.profile} Saha doğrulaması bulunmadığından genel erişim düzeyinde tutulmuştur.`,
    socialImage:`/images/meralar/${seed.slug}.svg`
  }));
}else{
  throw new Error("Günlük mera verisi image sitemap için okunamadı.");
}
const meralar=[...JSON.parse(baseMatch[1]),...dailyMeralar];
const escapeXml=(value)=>String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;");
const entries=meralar.map((m)=>`  <url>\n    <loc>${site}/meralar/${escapeXml(m.slug)}/</loc>\n    <image:image>\n      <image:loc>${site}${escapeXml(m.socialImage)}</image:loc>\n      <image:title>${escapeXml(m.name)} balık avı rotası</image:title>\n      <image:caption>${escapeXml(m.summary)}</image:caption>\n    </image:image>\n  </url>`).join("\n");
const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;
writeFileSync("public/sitemap-images.xml",xml);
console.log(`robots.txt ve ${meralar.length} görselli sitemap hazır: ${site}`);
