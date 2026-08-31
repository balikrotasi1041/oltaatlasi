import { writeFileSync } from "node:fs";
import { meralar } from "../src/data/meralar-tumu.ts";
import { slugifyTr } from "../src/utils/slug.ts";

const noindexPaths=new Set();

for(const route of meralar){
  if(route.confidence==="D") noindexPaths.add(`/meralar/${route.slug}/`);
}

for(const province of [...new Set(meralar.map((route)=>route.province))]){
  const provinceRoutes=meralar.filter((route)=>route.province===province);
  for(const district of [...new Set(provinceRoutes.map((route)=>route.district))]){
    const districtRoutes=provinceRoutes.filter((route)=>route.district===district);
    if(districtRoutes.length<2) continue;
    const verifiedCount=districtRoutes.filter((route)=>route.confidence!=="D").length;
    if(district==="İl geneli"||verifiedCount<2){
      noindexPaths.add(`/iller/${slugifyTr(province)}/${slugifyTr(district)}/`);
    }
  }
}

const paths=[...noindexPaths].sort((a,b)=>a.localeCompare(b,"tr"));
const output=`// Bu dosya scripts/generate-index-policy-data.mjs tarafından üretilir. Elle düzenleme.\nexport const NOINDEX_PATHS = new Set(${JSON.stringify(paths,null,2)});\n`;
writeFileSync("worker/index-policy-routes.js",output,"utf8");
console.log(`İndeks politikası Worker verisi üretildi: ${paths.length} noindex,follow yolu.`);
