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
for(let start=0;start<groupEntries.length;start+=4){
  const batch=groupEntries.slice(start,start+4);
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
  .replaceAll("[out:json][timeout:120]","[out:json][timeout:25]")
  .replaceAll("around:15000","around:12000")
  .replaceAll("around:8000","around:6000")
  .replaceAll("around:5000","around:4000")
  .replace(
    '`way(around:3500,${point.lat},${point.lng})["highway"~"trunk|primary|secondary|tertiary|unclassified|residential|service|track"];`',
    '`way(around:2200,${point.lat},${point.lng})["highway"]["name"];`'
  )
  .replace('{kind:"overpass",gap:1700,attempts:2}','{kind:"overpass",gap:900,attempts:1}')
  .replace(
    'for(let attempt=1;attempt<=policy.attempts;attempt+=1){',
    'for(let attempt=1;attempt<=Math.min(policy.attempts,policy.kind==="overpass"?1:2);attempt+=1){'
  )
  .replace(
    'const response=await fetch(url,{...options,headers:{"User-Agent":userAgent,"Accept":"application/json",...(options.headers||{})}});',
    'const response=await fetch(url,{...options,signal:options.signal||AbortSignal.timeout(policy.kind==="overpass"?18000:9000),headers:{"User-Agent":userAgent,"Accept":"application/json",...(options.headers||{})}});'
  )
  .replace('url.searchParams.set("taxon_key",String(fishClassKey));','url.searchParams.set("taxonKey",String(fishClassKey));')
  .replace('url.searchParams.set("geo_distance",`${radius}km,${point.lat},${point.lng}`);','url.searchParams.set("geoDistance",`${point.lat},${point.lng},${radius}km`);')
  .replace('url.searchParams.set("has_coordinate","true");','url.searchParams.set("hasCoordinate","true");')
  .replace('url.searchParams.set("has_geospatial_issue","false");','url.searchParams.set("hasGeospatialIssue","false");')
  .replace('url.searchParams.set("occurrence_status","PRESENT");','url.searchParams.set("occurrenceStatus","PRESENT");')
  .replace('url.searchParams.delete("geo_distance");','url.searchParams.delete("geoDistance");')
  .replace(
    'const [gbif,openAlex]=await Promise.all([gbifResearch(route),openAlexResearch(route)]);',
    `const [gbif,openAlex]=await Promise.all([
      gbifResearch(route).catch((error)=>{
        console.warn(\`GBIF araştırması atlandı: \${route.slug} – \${error.message}\`);
        return{evidence:[],searchUrl:null,scope:"GBIF taraması geçici olarak tamamlanamadı"};
      }),
      openAlexResearch(route).catch((error)=>{
        console.warn(\`OpenAlex araştırması atlandı: \${route.slug} – \${error.message}\`);
        return{evidence:[],searchUrl:null};
      })
    ]);`
  )
  .replace(sequentialOverpass,concurrentOverpass);

const researchMarker='const research={};';
const routeLoopMarker='for(const route of ulusalMeralar){';
const metaMarker='\n\nconst meta={';
const researchStart=optimized.indexOf(researchMarker);
const loopStart=optimized.indexOf(routeLoopMarker,researchStart);
const bodyStart=loopStart+routeLoopMarker.length;
const metaStart=optimized.indexOf(metaMarker,bodyStart);
if(researchStart<0||loopStart<0||metaStart<0)throw new Error("Rota araştırma döngüsü bulunamadı.");
const closingLoop=optimized.lastIndexOf('\n}',metaStart);
if(closingLoop<bodyStart)throw new Error("Rota araştırma döngüsü sonu bulunamadı.");
const loopBody=optimized.slice(bodyStart,closingLoop);
const concurrentRouteLoop=`const researchRoutes=[...ulusalMeralar];
const researchBatchSize=8;
for(let start=0;start<researchRoutes.length;start+=researchBatchSize){
  const batch=researchRoutes.slice(start,start+researchBatchSize);
  await Promise.all(batch.map(async(route)=>{${loopBody}
  }));
  const completed=Math.min(start+batch.length,researchRoutes.length);
  console.log(\`Araştırma partisi tamamlandı: \${completed}/\${researchRoutes.length}\`);
}`;
optimized=optimized.slice(0,loopStart)+concurrentRouteLoop+optimized.slice(closingLoop+2);

for(const required of [
  "groupEntries=[...groups.entries()]",
  "researchBatchSize=8",
  "GBIF araştırması atlandı",
  'url.searchParams.set("geoDistance",`${point.lat},${point.lng},${radius}km`);',
  'url.searchParams.set("taxonKey",String(fishClassKey));',
  "AbortSignal.timeout"
]){
  if(!optimized.includes(required))throw new Error(`Araştırma çalışma zamanı dönüşümü uygulanamadı: ${required}`);
}
await writeFile(temporaryFile,optimized,"utf8");
try{
  await import(`${pathToFileURL(temporaryFile).href}?run=${Date.now()}`);
}finally{
  await unlink(temporaryFile).catch(()=>{});
}
