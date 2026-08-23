import fs from "node:fs";
import path from "node:path";
import { baliklar as temelBaliklar } from "../src/data/baliklar";
import { baliklarEk20260823 } from "../src/data/baliklar-ek-2026-08-23";
import { rehberler as temelRehberler } from "../src/data/rehber-katalogu";
import { rehberlerEk20260823 } from "../src/data/rehberler-ek-2026-08-23";

const fail=(message:string):never=>{throw new Error(`[guide-quality] ${message}`);};
const assertUnique=(label:string,slugs:string[])=>{
  const seen=new Set<string>();
  for(const slug of slugs){if(seen.has(slug))fail(`${label} duplicate slug: ${slug}`);seen.add(slug);}
};

if(baliklarEk20260823.length!==5)fail(`expected exactly 5 new fish guides, got ${baliklarEk20260823.length}`);
if(rehberlerEk20260823.length!==3)fail(`expected exactly 3 new fishing guides, got ${rehberlerEk20260823.length}`);
assertUnique("fish",[...temelBaliklar,...baliklarEk20260823].map((item)=>item.slug));
assertUnique("guide",[...temelRehberler,...rehberlerEk20260823].map((item)=>item.slug));

for(const fish of baliklarEk20260823){
  if(!["A","B","C"].includes(fish.qualityLevel))fail(`${fish.slug} quality below C`);
  if(!fish.scientificName.trim())fail(`${fish.slug} missing scientificName`);
  if(fish.sources.length<3)fail(`${fish.slug} needs at least 3 sources`);
  const hosts=new Set(fish.sources.map((source)=>new URL(source.url).hostname.replace(/^www\./,"")));
  if(hosts.size<2)fail(`${fish.slug} needs at least 2 independent source hosts`);
  const asset=path.join(process.cwd(),"public",fish.image.replace(/^\//,""));
  if(!fs.existsSync(asset))fail(`${fish.slug} missing image ${fish.image}`);
}

for(const guide of rehberlerEk20260823){
  if(guide.sections.length<4)fail(`${guide.slug} needs at least 4 substantive sections`);
  if(guide.sources.length<3)fail(`${guide.slug} needs at least 3 sources`);
  const cover:string=guide.cover ?? fail(`${guide.slug} missing cover`);
  const asset=path.join(process.cwd(),"public",cover.replace(/^\//,""));
  if(!fs.existsSync(asset))fail(`${guide.slug} missing cover asset ${cover}`);
  const sourceHosts=new Set(guide.sources.map((source)=>new URL(source.url).hostname.replace(/^www\./,"")));
  if(sourceHosts.size<2)fail(`${guide.slug} needs at least 2 independent source hosts`);
}

console.log(`[guide-quality] OK: ${baliklarEk20260823.length} new fish guides, ${rehberlerEk20260823.length} new fishing guides; unique slugs, source diversity and assets verified.`);
