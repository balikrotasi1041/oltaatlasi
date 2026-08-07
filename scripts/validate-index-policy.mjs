import { existsSync, readFileSync, readdirSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";
import { slugifyTr } from "../src/utils/slug.ts";

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
const isNoindex=(html)=>/name="robots" content="noindex/i.test(html);
const sitemapUrls=[...normalSitemapXml.matchAll(/<loc>(https:\/\/oltaatlasi\.com\/[^<]*)<\/loc>/g)].map((match)=>match[1]);
for(const url of sitemapUrls){
  const htmlPath=htmlPathFor(url);
  if(!existsSync(htmlPath))continue;
  if(isNoindex(readFileSync(htmlPath,"utf8")))errors.push(`${url}: noindex sayfa normal sitemap içinde.`);
}
for(const match of imageSitemapXml.matchAll(/<loc>(https:\/\/oltaatlasi\.com\/[^<]*)<\/loc>/g)){
  const url=match[1];
  const htmlPath=htmlPathFor(url);
  if(!existsSync(htmlPath))continue;
  if(isNoindex(readFileSync(htmlPath,"utf8")))errors.push(`${url}: noindex sayfa görsel sitemap içinde.`);
}

for(const route of meralar){
  const html=readFileSync(`dist/meralar/${route.slug}/index.html`,"utf8");
  const url=`https://oltaatlasi.com/meralar/${route.slug}/`;
  if(route.confidence==="D"){
    preliminaryCount+=1;
    if(!/name="robots" content="noindex,nofollow"/i.test(html))errors.push(`${route.slug}: Güven D sayfasında noindex,nofollow yok.`);
    if(html.includes('"@type":"Article"'))errors.push(`${route.slug}: Güven D sayfasında Article şeması yayımlanıyor.`);
    if(normalSitemapXml.includes(url)||imageSitemapXml.includes(url))errors.push(`${route.slug}: Güven D URL sitemap içinde kaldı.`);
  }else{
    indexableCount+=1;
    if(/name="robots" content="noindex/i.test(html))errors.push(`${route.slug}: Güven ${route.confidence} sayfası yanlışlıkla noindex.`);
    if(!normalSitemapXml.includes(url))errors.push(`${route.slug}: indekslenebilir rota normal sitemap içinde yok.`);
    if(!normalSitemapXml.includes(`<loc>${url}</loc><lastmod>${route.updatedAt}`))errors.push(`${route.slug}: normal sitemap lastmod değeri rota güncelleme tarihiyle eşleşmiyor.`);
  }
}

let noindexProvinceCount=0,noindexDistrictCount=0;
for(const province of [...new Set(meralar.map((route)=>route.province))]){
  const provinceRoutes=meralar.filter((route)=>route.province===province);
  const provincePath=`/iller/${slugifyTr(province)}/`;
  const provinceHtml=readFileSync(`dist${provincePath}index.html`,"utf8");
  const provinceUrl=`https://oltaatlasi.com${provincePath}`;
  const provinceShouldIndex=provinceRoutes.some((route)=>route.confidence!=="D");
  if(provinceShouldIndex){
    if(isNoindex(provinceHtml))errors.push(`${province}: doğrulanabilir rota bulunan il sayfası noindex.`);
    if(!normalSitemapXml.includes(provinceUrl))errors.push(`${province}: indekslenebilir il sayfası normal sitemap içinde yok.`);
  }else{
    noindexProvinceCount+=1;
    if(!isNoindex(provinceHtml))errors.push(`${province}: yalnız D kayıtlı il sayfası noindex değil.`);
    if(normalSitemapXml.includes(provinceUrl)||imageSitemapXml.includes(provinceUrl))errors.push(`${province}: yalnız D kayıtlı il sayfası sitemap içinde.`);
  }

  for(const district of [...new Set(provinceRoutes.map((route)=>route.district))]){
    const districtRoutes=provinceRoutes.filter((route)=>route.district===district);
    if(districtRoutes.length<2)continue;
    const districtPath=`${provincePath}${slugifyTr(district)}/`;
    const districtHtml=readFileSync(`dist${districtPath}index.html`,"utf8");
    const districtUrl=`https://oltaatlasi.com${districtPath}`;
    const districtShouldIndex=districtRoutes.some((route)=>route.confidence!=="D");
    if(districtShouldIndex){
      if(isNoindex(districtHtml))errors.push(`${province}/${district}: doğrulanabilir rota bulunan ilçe sayfası noindex.`);
      if(!normalSitemapXml.includes(districtUrl))errors.push(`${province}/${district}: indekslenebilir ilçe sayfası normal sitemap içinde yok.`);
    }else{
      noindexDistrictCount+=1;
      if(!isNoindex(districtHtml))errors.push(`${province}/${district}: yalnız D kayıtlı ilçe sayfası noindex değil.`);
      if(normalSitemapXml.includes(districtUrl)||imageSitemapXml.includes(districtUrl))errors.push(`${province}/${district}: yalnız D kayıtlı ilçe sayfası sitemap içinde.`);
    }
  }
}

console.log(`İndeks politikası: ${indexableCount} A/B/C rota indekslenebilir; ${preliminaryCount} D rota, ${noindexProvinceCount} yalnız-D il ve ${noindexDistrictCount} yalnız-D ilçe noindex/sitemap dışı; ${errors.length} hata.`);
for(const error of errors.slice(0,200))console.error(`HATA: ${error}`);
if(errors.length>200)console.error(`HATA: ${errors.length-200} ek hata daha var.`);
if(errors.length)process.exit(1);
