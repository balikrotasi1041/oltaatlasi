import { readFile, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const sourceFile=path.resolve("scripts/enrich-national-routes.mjs");
const temporaryFile=path.resolve("scripts/.enrich-national-routes-fast-runtime.mjs");
const source=await readFile(sourceFile,"utf8");

const sequentialOverpass=`const nearbyIndex={};
let provinceCounter=0;
for(const[province,routes]of groups){
  provinceCounter+=1;
  const query=buildOverpassQuery(routes);
  const elements=await queryOverpass(query);
  for(const route of routes)nearbyIndex[route.slug]=analyzeNearby(route,elements);
  console.log(\`OSM çevre taraması \${provinceCounter}/\${groups.size}: \${province} – \${elements.length} nesne\`);
}`;

const concurrentOverpass=`const nearbyIndex={};
const groupEntries=[...groups.entries()];
let provinceCounter=0;
for(let start=0;start<groupEntries.length;start+=3){
  const batch=groupEntries.slice(start,start+3);
  const results=await Promise.all(batch.map(async([province,routes])=>{
    const query=buildOverpassQuery(routes);
    const elements=await queryOverpass(query);
    return{province,routes,elements};
  }));
  for(const{province,routes,elements}of results){
    provinceCounter+=1;
    for(const route of routes)nearbyIndex[route.slug]=analyzeNearby(route,elements);
    console.log(\`OSM çevre taraması \${provinceCounter}/\${groups.size}: \${province} – \${elements.length} nesne\`);
  }
}`;

let optimized=source
  .replaceAll("[out:json][timeout:120]","[out:json][timeout:35]")
  .replaceAll("around:15000","around:12000")
  .replaceAll("around:8000","around:6000")
  .replaceAll("around:5000","around:4000")
  .replace(
    '`way(around:3500,${point.lat},${point.lng})["highway"~"trunk|primary|secondary|tertiary|unclassified|residential|service|track"];`',
    '`way(around:2200,${point.lat},${point.lng})["highway"]["name"];`'
  )
  .replace('{kind:"overpass",gap:1700,attempts:2}','{kind:"overpass",gap:1100,attempts:1}')
  .replace(
    'const response=await fetch(url,{...options,headers:{"User-Agent":userAgent,"Accept":"application/json",...(options.headers||{})}});',
    'const response=await fetch(url,{...options,signal:options.signal||AbortSignal.timeout(policy.kind==="overpass"?35000:25000),headers:{"User-Agent":userAgent,"Accept":"application/json",...(options.headers||{})}});'
  )
  .replace('url.searchParams.set("taxon_key",String(fishClassKey));','url.searchParams.set("taxonKey",String(fishClassKey));')
  .replace('url.searchParams.set("geo_distance",`${radius}km,${point.lat},${point.lng}`);','url.searchParams.set("geoDistance",`${point.lat},${point.lng},${radius}km`);')
  .replace('url.searchParams.set("has_coordinate","true");','url.searchParams.set("hasCoordinate","true");')
  .replace('url.searchParams.set("has_geospatial_issue","false");','url.searchParams.set("hasGeospatialIssue","false");')
  .replace('url.searchParams.set("occurrence_status","PRESENT");','url.searchParams.set("occurrenceStatus","PRESENT");')
  .replace('url.searchParams.delete("geo_distance");','url.searchParams.delete("geoDistance");')
  .replace(sequentialOverpass,concurrentOverpass);

if(optimized===source)throw new Error("Araştırma betiğinde hızlandırılacak veya düzeltilecek bölüm bulunamadı.");
if(!optimized.includes("groupEntries=[...groups.entries()]"))throw new Error("Overpass paralelleştirme dönüşümü uygulanamadı.");
if(!optimized.includes("AbortSignal.timeout"))throw new Error("HTTP zaman aşımı dönüşümü uygulanamadı.");
if(!optimized.includes('url.searchParams.set("geoDistance",`${point.lat},${point.lng},${radius}km`);'))throw new Error("GBIF geoDistance dönüşümü uygulanamadı.");
if(!optimized.includes('url.searchParams.set("taxonKey",String(fishClassKey));'))throw new Error("GBIF taxonKey dönüşümü uygulanamadı.");
await writeFile(temporaryFile,optimized,"utf8");
try{
  await import(`${pathToFileURL(temporaryFile).href}?run=${Date.now()}`);
}finally{
  await unlink(temporaryFile).catch(()=>{});
}
