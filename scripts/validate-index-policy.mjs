import { readFileSync, readdirSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";

const errors=[];
const sitemapFiles=readdirSync("dist").filter((name)=>/^sitemap.*\.xml$/i.test(name));
const sitemapXml=sitemapFiles.map((name)=>readFileSync(`dist/${name}`,"utf8")).join("\n");
let preliminaryCount=0,indexableCount=0;

for(const route of meralar){
  const html=readFileSync(`dist/meralar/${route.slug}/index.html`,"utf8");
  const url=`https://oltaatlasi.com/meralar/${route.slug}/`;
  if(route.confidence==="D"){
    preliminaryCount+=1;
    if(!/name="robots" content="noindex,nofollow"/i.test(html))errors.push(`${route.slug}: Güven D sayfasında noindex,nofollow yok.`);
    if(html.includes('"@type":"Article"'))errors.push(`${route.slug}: Güven D sayfasında Article şeması yayımlanıyor.`);
    if(sitemapXml.includes(url))errors.push(`${route.slug}: Güven D URL sitemap içinde kaldı.`);
  }else{
    indexableCount+=1;
    if(/name="robots" content="noindex/i.test(html))errors.push(`${route.slug}: Güven ${route.confidence} sayfası yanlışlıkla noindex.`);
    if(!sitemapXml.includes(url))errors.push(`${route.slug}: indekslenebilir rota sitemap içinde yok.`);
  }
}

console.log(`İndeks politikası: ${indexableCount} A/B/C rota indekslenebilir, ${preliminaryCount} D araştırma kaydı noindex ve sitemap dışı; ${errors.length} hata.`);
for(const error of errors.slice(0,200))console.error(`HATA: ${error}`);
if(errors.length>200)console.error(`HATA: ${errors.length-200} ek hata daha var.`);
if(errors.length)process.exit(1);
