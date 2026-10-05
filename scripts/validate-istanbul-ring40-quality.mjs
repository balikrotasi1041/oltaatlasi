import {readFileSync} from "node:fs";
import {meralar} from "../src/data/meralar-tumu.ts";
import {istanbulRing40Slugs20261005,istanbulRing40Stats20261005} from "../src/data/meralar-quality-istanbul-ring40-2026-10-05.ts";
import {validateExpandedQuality} from "./expanded-quality-policy.mjs";
const baseline=JSON.parse(readFileSync(".github/automation-state/olta-daily-baseline-2026-10-04.json","utf8"));
const errors=[];
const fail=(c,m)=>{if(c)errors.push(m);};
fail(istanbulRing40Slugs20261005.length!==40||new Set(istanbulRing40Slugs20261005).size!==40,"Tam 40 benzersiz aday gerekli.");
const by=new Map(meralar.map(r=>[r.slug,r]));
let promotions=0,ready=0,holds=0;
for(const slug of istanbulRing40Slugs20261005){
  fail(baseline.routes[slug]?.confidence!=="D",`${slug}: başlangıç adayı D değil; eligibility ihlali.`);
  const r=by.get(slug); fail(!r,`${slug}: aktif rotada yok.`); if(!r)continue;
  errors.push(...validateExpandedQuality(r));
  if(r.confidence!=="D")promotions++;
  if(["C+","B","A"].includes(r.qualityGrade))ready++;
  if(r.indexing==="hold")holds++;
}
fail(promotions!==istanbulRing40Stats20261005.actualConfidencePromotions,`Gerçek promotion ${promotions}, rapor ${istanbulRing40Stats20261005.actualConfidencePromotions}.`);
fail(ready!==2,`Index kalite eşiği 2 olmalı: ${ready}.`);
fail(holds!==38,`HOLD sayısı 38 olmalı: ${holds}.`);
const invalidHigh=istanbulRing40Slugs20261005.filter(s=>["C+","B","A"].includes(baseline.routes[s]?.confidence));
fail(invalidHigh.length>0,`Başlangıçta yüksek kalite aday seçilmiş: ${invalidHigh.join(", ")}`);
console.log(`İstanbul çevresi 40: 40 uygun D aday, ${promotions} gerçek confidence yükseltmesi, ${ready} C+/B, ${holds} HOLD; ${errors.length} hata.`);
for(const e of errors)console.error(e);
if(errors.length)process.exit(1);
