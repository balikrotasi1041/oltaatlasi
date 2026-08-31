import { existsSync, readFileSync, readdirSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";
import { slugifyTr } from "../src/utils/slug.ts";
import { NOINDEX_PATHS } from "../worker/index-policy-routes.js";

const errors=[];
const sitemapFiles=readdirSync("dist").filter((name)=>/^sitemap.*\.xml$/i.test(name));
const normalSitemapXml=sitemapFiles
  .filter((name)=>name!=="sitemap-index.xml"&&name!=="sitemap-images.xml")
  .map((name)=>readFileSync(`dist/${name}`,"utf8")).join("\n");
const imageSitemapXml=existsSync("dist/sitemap-images.xml")?readFileSync("dist/sitemap-images.xml","utf8"):"";
let preliminaryCount=0,indexableCount=0;

const htmlPathFor=(url)=>{
  const pathname=new URL(url).pathname;
  return pathname==="/"?"dist/index.html":`dist/${pathname.replace(/^\//,"")}index.html`;
};
const htmlNoindex=(html)=>/name="robots" content="[^"]*noindex/i.test(html);
const normalizePath=(pathname)=>pathname.endsWith("/")?pathname:`${pathname}/`;
const runtimeNoindex=(pathname)=>NOINDEX_PATHS.has(normalizePath(pathname));
const readCanonical=(html)=>html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1]
  ||html.match(/<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i)?.[1]
  ||"";
const readMeta=(html,name)=>html.match(new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]+)"`,`i`))?.[1]
  ||html.match(new RegExp(`<meta[^>]+content="([^"]+)"[^>]+name="${name}"`,`i`))?.[1]
  ||"";
const htmlFiles=(directory)=>readdirSync(directory,{withFileTypes:true}).flatMap((entry)=>{
  const path=`${directory}/${entry.name}`;
  return entry.isDirectory()?htmlFiles(path):entry.isFile()&&entry.name==="index.html"?[path]:[];
});
const pathnameForHtml=(path)=>{
  const relative=path.replace(/^dist\/?/,"").replace(/index\.html$/,"");
  return relative?`/${relative}`:"/";
};
const sitemapUrls=[...normalSitemapXml.matchAll(/<loc>(https:\/\/oltaatlasi\.com\/[^<]*)<\/loc>/g)].map((match)=>match[1]);
const sitemapUrlSet=new Set(sitemapUrls);
for(const url of sitemapUrls){
  const htmlPath=htmlPathFor(url);
  if(!existsSync(htmlPath)){errors.push(`${url}: normal sitemap URL'sinin derlenmiş HTML karşılığı yok.`);continue;}
  const html=readFileSync(htmlPath,"utf8");
  const pathname=new URL(url).pathname;
  if(htmlNoindex(html)||runtimeNoindex(pathname))errors.push(`${url}: noindex sayfa normal sitemap içinde.`);
  if(readCanonical(html)!==url)errors.push(`${url}: sitemap URL'sinin canonical değeri kendisi değil (${readCanonical(html)||"eksik"}).`);
}
for(const match of imageSitemapXml.matchAll(/<loc>(https:\/\/oltaatlasi\.com\/[^<]*)<\/loc>/g)){
  const url=match[1];
  const htmlPath=htmlPathFor(url);
  if(!existsSync(htmlPath))continue;
  const pathname=new URL(url).pathname;
  if(htmlNoindex(readFileSync(htmlPath,"utf8"))||runtimeNoindex(pathname))errors.push(`${url}: noindex sayfa görsel sitemap içinde.`);
}

const recordsByPath=new Map();
const canonicalOwners=new Map();
for(const path of htmlFiles("dist")){
  const html=readFileSync(path,"utf8");
  const pathname=pathnameForHtml(path);
  const url=`https://oltaatlasi.com${pathname}`;
  const canonical=readCanonical(html);
  const noindex=htmlNoindex(html)||runtimeNoindex(pathname);
  recordsByPath.set(pathname,{path,html,url,canonical,noindex});
  if(!canonical)errors.push(`${pathname}: canonical etiketi eksik.`);
  if(canonical){
    const owners=canonicalOwners.get(canonical)||[];
    owners.push(pathname);
    canonicalOwners.set(canonical,owners);
  }
  if(noindex){
    if(sitemapUrlSet.has(url))errors.push(`${pathname}: noindex HTML/Worker yolu normal sitemap içinde.`);
  }else{
    if(canonical!==url)errors.push(`${pathname}: indekslenebilir canonical kendini göstermiyor (${canonical}).`);
    if(!sitemapUrlSet.has(url))errors.push(`${pathname}: indekslenebilir HTML normal sitemap içinde yok.`);
    if(!/<title>[^<]{3,}<\/title>/i.test(html))errors.push(`${pathname}: başlık etiketi eksik veya boş.`);
    if(readMeta(html,"description").trim().length<40)errors.push(`${pathname}: meta açıklaması eksik veya 40 karakterden kısa.`);
  }
}
for(const [canonical,owners] of canonicalOwners){
  const indexableOwners=owners.filter((pathname)=>!recordsByPath.get(pathname)?.noindex);
  if(indexableOwners.length>1)errors.push(`${canonical}: aynı canonical değeri ${indexableOwners.join(", ")} indekslenebilir sayfalarında yineleniyor.`);
}

let nofollowNoindexLinks=0;
for(const source of recordsByPath.values()){
  if(source.noindex)continue;
  for(const match of source.html.matchAll(/<a\b([^>]*?)href="([^"]+)"([^>]*)>/gi)){
    const href=match[2];
    if(!href||href.startsWith("#")||/^(?:mailto:|tel:|javascript:)/i.test(href))continue;
    let target;
    try{target=new URL(href,source.url);}catch{continue;}
    if(target.origin!=="https://oltaatlasi.com")continue;
    const pathname=normalizePath(target.pathname);
    const targetRecord=recordsByPath.get(pathname);
    if(!targetRecord?.noindex)continue;
    // noindex,follow kalite sayfalarına normal iç bağlantı bilinçli olarak korunur; keşif ve kullanıcı akışı kaybolmaz.
    if(/\brel="[^"]*nofollow/i.test(`${match[1]} ${match[3]}`))nofollowNoindexLinks+=1;
  }
}

for(const route of meralar){
  const html=readFileSync(`dist/meralar/${route.slug}/index.html`,"utf8");
  const pathname=`/meralar/${route.slug}/`;
  const url=`https://oltaatlasi.com${pathname}`;
  if(route.confidence==="D"){
    preliminaryCount+=1;
    if(!runtimeNoindex(pathname))errors.push(`${route.slug}: Güven D Worker noindex politikasında yok.`);
    if(normalSitemapXml.includes(url))errors.push(`${route.slug}: Güven D sayfası normal sitemap içinde olmamalı.`);
    if(imageSitemapXml.includes(url))errors.push(`${route.slug}: Güven D sayfası görsel sitemap içinde olmamalı.`);
  }else{
    indexableCount+=1;
    if(runtimeNoindex(pathname)||htmlNoindex(html))errors.push(`${route.slug}: Güven ${route.confidence} sayfası yanlışlıkla noindex.`);
    if(!html.includes('"@type":"Article"'))errors.push(`${route.slug}: indekslenebilir rota sayfasında Article şeması yok.`);
    if(!normalSitemapXml.includes(url))errors.push(`${route.slug}: indekslenebilir rota normal sitemap içinde yok.`);
    if(!imageSitemapXml.includes(url))errors.push(`${route.slug}: indekslenebilir rota görsel sitemap içinde yok.`);
    if(!normalSitemapXml.includes(`<loc>${url}</loc><lastmod>${route.updatedAt}`))errors.push(`${route.slug}: normal sitemap lastmod değeri rota güncelleme tarihiyle eşleşmiyor.`);
  }
}

for(const province of [...new Set(meralar.map((route)=>route.province))]){
  const provinceRoutes=meralar.filter((route)=>route.province===province);
  const provincePath=`/iller/${slugifyTr(province)}/`;
  const provinceHtml=readFileSync(`dist${provincePath}index.html`,"utf8");
  const provinceUrl=`https://oltaatlasi.com${provincePath}`;
  if(htmlNoindex(provinceHtml)||runtimeNoindex(provincePath))errors.push(`${province}: il sayfası yanlışlıkla noindex.`);
  if(!normalSitemapXml.includes(provinceUrl))errors.push(`${province}: indekslenebilir il sayfası normal sitemap içinde yok.`);

  for(const district of [...new Set(provinceRoutes.map((route)=>route.district))]){
    const districtRoutes=provinceRoutes.filter((route)=>route.district===district);
    if(districtRoutes.length<2)continue;
    const districtPath=`${provincePath}${slugifyTr(district)}/`;
    const districtHtml=readFileSync(`dist${districtPath}index.html`,"utf8");
    const districtUrl=`https://oltaatlasi.com${districtPath}`;
    const verifiedCount=districtRoutes.filter((route)=>route.confidence!=="D").length;
    const shouldIndex=district!=="İl geneli"&&verifiedCount>=2;
    if(shouldIndex){
      if(htmlNoindex(districtHtml)||runtimeNoindex(districtPath))errors.push(`${province}/${district}: güçlü ilçe sayfası yanlışlıkla noindex.`);
      if(!normalSitemapXml.includes(districtUrl))errors.push(`${province}/${district}: indekslenebilir ilçe sayfası normal sitemap içinde yok.`);
    }else{
      if(!runtimeNoindex(districtPath))errors.push(`${province}/${district}: zayıf/il-geneli sayfası Worker noindex politikasında olmalı.`);
      if(normalSitemapXml.includes(districtUrl))errors.push(`${province}/${district}: zayıf/il-geneli sayfası normal sitemap içinde olmamalı.`);
    }
  }
}

console.log(`İndeks politikası: ${sitemapUrls.length} sitemap URL'si; ${indexableCount} C+ rota indekslenebilir, ${preliminaryCount} Güven D noindex,follow; ${nofollowNoindexLinks} nofollow bağlantı; ${errors.length} hata.`);
for(const error of errors.slice(0,200))console.error(`HATA: ${error}`);
if(errors.length>200)console.error(`HATA: ${errors.length-200} ek hata daha var.`);
if(errors.length)process.exit(1);
