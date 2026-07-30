import { readFile, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const sourceFile=path.resolve("scripts/enrich-national-routes.mjs");
const temporaryFile=path.resolve("scripts/.enrich-national-routes-fast-runtime.mjs");
const source=await readFile(sourceFile,"utf8");

let optimized=source
  .replaceAll("[out:json][timeout:120]","[out:json][timeout:40]")
  .replaceAll("around:15000","around:12000")
  .replaceAll("around:8000","around:6000")
  .replaceAll("around:5000","around:4000")
  .replace(
    '`way(around:3500,${point.lat},${point.lng})["highway"~"trunk|primary|secondary|tertiary|unclassified|residential|service|track"];`',
    '`way(around:2200,${point.lat},${point.lng})["highway"]["name"];`'
  )
  .replace('{kind:"overpass",gap:1700,attempts:2}','{kind:"overpass",gap:1300,attempts:1}');

if(optimized===source)throw new Error("Araştırma betiğinde hızlandırılacak Overpass bölümü bulunamadı.");
await writeFile(temporaryFile,optimized,"utf8");
try{
  await import(`${pathToFileURL(temporaryFile).href}?run=${Date.now()}`);
}finally{
  await unlink(temporaryFile).catch(()=>{});
}
