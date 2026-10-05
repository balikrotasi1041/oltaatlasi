import {readFileSync} from "node:fs";
import {meralar} from "../src/data/meralar-tumu.ts";
import {istanbulRing40Slugs20261005,istanbulRing40Stats20261005} from "../src/data/meralar-quality-istanbul-ring40-2026-10-05.ts";
import {validateExpandedQuality} from "./expanded-quality-policy.mjs";
const baseline=JSON.parse(readFileSync(".github/automation-state/olta-daily-baseline-2026-10-04.json","utf8"));
const errors=[]; const fail=(c,m)=>{if(c)errors.push(m);};
fail(istanbulRing40Slugs20261005.length!==40||new Set(istanbulRing40Slugs20261005).size!==40,"Tam 40 benzersiz aday gerekli.");
const by=new Map(meralar.map(r=>[r.slug,r]));
let baselineD=0,baselineC=0,promotions=0,holds=0,ready=0;
for(const slug of istanbulRing40Slugs20261005){
 const before=baseline.routes[slug];
 fail(!before,`${slug}: baseline'da yok.`);
 fail(before&&!["D","C"].includes(before.confidence),`${slug}: başlangıçta D/C alt havuzunda değil.`);
 if(before?.confidence==="D")baselineD++; if(before?.confidence==="C")baselineC++;
 const r=by.get(slug); fail(!r,`${slug}: aktif rotada yok.`); if(!r)continue;
 errors.push(...validateExpandedQuality(r));
 const promoted=(before?.confidence==="D"&&r.confidence!=="D")||(before?.confidence==="C"&&["C+","B","A"].includes(r.qualityGrade));
 if(promoted)promotions++;
 if(r.indexing==="hold")holds++;
 if(["C+","B","A"].includes(r.qualityGrade))ready++;
}
fail(baselineD!==30||baselineC!==10,`Başlangıç dağılımı 30 D + 10 C olmalı: D=${baselineD}, C=${baselineC}`);
fail(promotions!==istanbulRing40Stats20261005.actualQualityPromotions,`Gerçek promotion ${promotions}, rapor ${istanbulRing40Stats20261005.actualQualityPromotions}.`);
fail(promotions!==4,`Bu turda kanıtlanan gerçek promotion 4 olmalı: ${promotions}.`);
fail(ready!==0,`C+ üstü hazır kayıt beklenmiyor: ${ready}.`);
fail(holds!==40,`40 kaydın tamamı HOLD olmalı: ${holds}.`);
console.log(`İstanbul çevresi 40: ${baselineD} D + ${baselineC} C uygun aday; ${promotions} gerçek yükseltme; ${holds} HOLD; ${errors.length} hata.`);
for(const e of errors)console.error(e); if(errors.length)process.exit(1);
