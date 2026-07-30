import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root=process.cwd();
const routeFile=path.join(root,"src/data/meralar-ulusal.js");
const outputFile=path.join(root,"src/data/meralar-ulusal-koordinatlar.js");
const refresh=process.argv.includes("--refresh");
const requestGapMs=1100;
const userAgent=process.env.NOMINATIM_USER_AGENT||"OltaAtlası/1.0 (+https://oltaatlasi.com/sorumluluk-ve-kullanim/)";
let lastRequestAt=0;

const sleep=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));
const normalize=(value="")=>String(value)
  .toLocaleLowerCase("tr-TR")
  .replaceAll("ç","c").replaceAll("ğ","g").replaceAll("ı","i")
  .replaceAll("ö","o").replaceAll("ş","s").replaceAll("ü","u")
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g," ").trim();
const slugify=(value)=>normalize(value).replaceAll(" ","-");
const waterTypeFor=(name)=>{const n=normalize(name);if(n.includes("sahili"))return"Deniz";if(n.includes("baraj"))return"Baraj";if(n.includes("golet"))return"Gölet";if(/(nehri|cayi|deresi|irmagi|suyu|iyidere|buyukdere|degirmendere)/.test(n))return"Akarsu";return"Göl";};

const source=await readFile(routeFile,"utf8");
const block=source.match(/const\s+rawRoutes\s*=\s*String\.raw`([\s\S]*?)`;/)?.[1];
if(!block)throw new Error("meralar-ulusal.js içindeki rawRoutes bloğu okunamadı.");
const seeds=block.trim().split(/\r?\n/).flatMap((line)=>{const[province,zone,names]=line.split("|");if(!province||!zone||!names)throw new Error(`Geçersiz rota satırı: ${line}`);return names.split(";").map((name)=>({slug:`ulusal-${slugify(province)}-${slugify(name)}`,name,province,zone,waterType:waterTypeFor(name)}));});
if(seeds.length!==405)throw new Error(`405 rota beklenirken ${seeds.length} rota okundu.`);

let existingCoordinates={};
let existingMeta={provinceBounds:{}};
try{
  const loaded=await import(`${pathToFileURL(outputFile).href}?t=${Date.now()}`);
  existingCoordinates=loaded.ulusalKoordinatlar||{};
  existingMeta=loaded.ulusalKoordinatMeta||existingMeta;
}catch{}

const throttle=async()=>{const wait=requestGapMs-(Date.now()-lastRequestAt);if(wait>0)await sleep(wait);lastRequestAt=Date.now();};
const nominatim=async(params)=>{
  await throttle();
  const url=new URL("https://nominatim.openstreetmap.org/search");
  for(const[key,value]of Object.entries(params))if(value!==undefined&&value!==null&&value!=="")url.searchParams.set(key,String(value));
  for(let attempt=1;attempt<=3;attempt+=1){
    const response=await fetch(url,{headers:{"User-Agent":userAgent,"Accept":"application/json","Accept-Language":"tr"}});
    if(response.ok)return response.json();
    if(![429,502,503,504].includes(response.status))throw new Error(`Nominatim ${response.status}: ${await response.text()}`);
    await sleep(attempt*2500);
  }
  return[];
};

const provinceBounds={...(existingMeta.provinceBounds||{})};
for(const province of [...new Set(seeds.map((seed)=>seed.province))]){
  if(provinceBounds[province]&&!refresh)continue;
  const results=await nominatim({q:`${province}, Türkiye`,format:"jsonv2",addressdetails:1,limit:5,countrycodes:"tr",featureType:"state","accept-language":"tr"});
  const candidate=results.find((item)=>normalize(item.display_name).includes(normalize(province))&&Array.isArray(item.boundingbox));
  if(candidate){
    const[south,north,west,east]=candidate.boundingbox.map(Number);
    provinceBounds[province]={south,north,west,east};
  }else console.warn(`İl sınırı bulunamadı: ${province}`);
}

const cleanName=(name,province)=>name
  .replace(new RegExp(`\\s+${province}\\s+Kıyısı$`,"i"),"")
  .replace(new RegExp(`\\s+${province}$`,"i"),"")
  .replace(/\s+Kıyısı$/i,"")
  .replace(/\s+Hattı$/i,"")
  .trim();
const meaningfulTokens=(name,province)=>normalize(cleanName(name,province)).split(" ").filter((token)=>token.length>2&&!new Set(["baraj","golu","golu","gölü","nehri","cayi","deresi","irmagi","sahili","kiyisi","hatti"]).has(token));
const withinBounds=(item,bounds)=>{if(!bounds)return false;const lat=Number(item.lat),lng=Number(item.lon);return Number.isFinite(lat)&&Number.isFinite(lng)&&lat>=bounds.south&&lat<=bounds.north&&lng>=bounds.west&&lng<=bounds.east;};
const waterCompatible=(seed,item)=>{const text=normalize(`${item.category||""} ${item.type||""} ${item.addresstype||""} ${item.name||""} ${item.display_name||""}`);if(seed.waterType==="Baraj")return/(reservoir|dam|water|baraj)/.test(text);if(seed.waterType==="Göl")return/(lake|reservoir|water|gol|krater)/.test(text);if(seed.waterType==="Gölet")return/(pond|lake|reservoir|water|golet)/.test(text);if(seed.waterType==="Akarsu")return/(river|stream|canal|waterway|nehir|cay|dere|irmak|suyu)/.test(text);return/(beach|coast|bay|sea|sahil|plaj|kiyi)/.test(text);};
const rankCandidate=(seed,item,bounds,bounded)=>{
  const text=normalize(`${item.name||""} ${item.display_name||""} ${Object.values(item.address||{}).join(" ")}`);
  const provinceToken=normalize(seed.province);
  const provinceMatch=text.includes(provinceToken)||withinBounds(item,bounds);
  const tokens=meaningfulTokens(seed.name,seed.province);
  const tokenHits=tokens.filter((token)=>text.includes(token)).length;
  const cleaned=normalize(cleanName(seed.name,seed.province));
  const exactName=cleaned.length>3&&text.includes(cleaned);
  const waterMatch=waterCompatible(seed,item);
  let score=tokenHits*2+(exactName?6:0)+(provinceMatch?5:0)+(waterMatch?5:-5)+(bounded?1:0)+Math.min(2,Number(item.importance||0)*2);
  if(!waterMatch||!provinceMatch)return{accepted:false,score};
  const minimum=Math.max(1,Math.min(2,tokens.length));
  return{accepted:(exactName||tokenHits>=minimum)&&score>=11,score};
};
const osmUrl=(item)=>{const type={node:"node",way:"way",relation:"relation"}[item.osm_type];return type&&item.osm_id?`https://www.openstreetmap.org/${type}/${item.osm_id}`:"https://www.openstreetmap.org/";};

const coordinates={...existingCoordinates};
const unresolved=[];
let processed=0;
for(const seed of seeds){
  if(coordinates[seed.slug]&&!refresh){processed+=1;continue;}
  const bounds=provinceBounds[seed.province];
  const variants=[seed.name,cleanName(seed.name,seed.province),cleanName(seed.name,seed.province).replace(/Baraj Gölü/gi,"Barajı")].filter((value,index,array)=>value&&array.indexOf(value)===index);
  let selected=null;
  for(let index=0;index<variants.length&&!selected;index+=1){
    const bounded=index===0&&Boolean(bounds);
    const params={q:`${variants[index]}, ${seed.province}, Türkiye`,format:"jsonv2",addressdetails:1,namedetails:1,extratags:1,limit:5,countrycodes:"tr","accept-language":"tr"};
    if(bounded){params.viewbox=`${bounds.west},${bounds.north},${bounds.east},${bounds.south}`;params.bounded=1;}
    const results=await nominatim(params);
    const ranked=results.map((item)=>({item,...rankCandidate(seed,item,bounds,bounded)})).filter((entry)=>entry.accepted).sort((a,b)=>b.score-a.score);
    if(ranked[0])selected={...ranked[0],query:params.q,matchScope:bounded?"province-bounded":"name-and-province"};
  }
  if(selected){
    const{item,score,query,matchScope}=selected;
    coordinates[seed.slug]={
      lat:Number(item.lat),lng:Number(item.lon),displayName:item.display_name,name:item.name||seed.name,
      category:item.category||null,type:item.type||null,osmType:item.osm_type||null,osmId:item.osm_id||null,
      sourceUrl:osmUrl(item),query,matchScope,matchScore:Number(score.toFixed(2)),matchedAt:new Date().toISOString(),
    };
  }else unresolved.push(seed.slug);
  processed+=1;
  if(processed%10===0)console.log(`${processed}/${seeds.length} rota işlendi; ${Object.keys(coordinates).length} koordinat bulundu.`);
}

const validEntries=Object.entries(coordinates).filter(([,value])=>Number.isFinite(value?.lat)&&Number.isFinite(value?.lng));
const sortedCoordinates=Object.fromEntries(validEntries.sort(([a],[b])=>a.localeCompare(b,"tr")));
const meta={
  generatedAt:new Date().toISOString(),provider:"OpenStreetMap Nominatim",attribution:"© OpenStreetMap contributors, ODbL",
  resolvedCount:Object.keys(sortedCoordinates).length,unresolvedCount:seeds.length-Object.keys(sortedCoordinates).length,
  unresolvedSlugs:seeds.filter((seed)=>!sortedCoordinates[seed.slug]).map((seed)=>seed.slug),provinceBounds,
  policy:"Tek iş parçacığı, en fazla saniyede bir istek ve kalıcı sonuç önbelleği kullanıldı.",
};
const output=`export const ulusalKoordinatMeta = ${JSON.stringify(meta,null,2)};\n\nexport const ulusalKoordinatlar = ${JSON.stringify(sortedCoordinates,null,2)};\n`;
await writeFile(outputFile,output,"utf8");
console.log(`Koordinat kaydı tamamlandı: ${meta.resolvedCount} bulundu, ${meta.unresolvedCount} çözülemedi.`);
