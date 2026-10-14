import {readFileSync,existsSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateExpandedQuality} from './expanded-quality-policy.mjs';
import worker from '../worker/index.js';
const report=JSON.parse(readFileSync('docs/quality-stress-2026-10-04.json','utf8'));
const baseline=JSON.parse(readFileSync('.github/automation-state/olta-daily-baseline-2026-10-04.json','utf8'));
const errors=[];
const fail=(condition,message)=>{if(condition)errors.push(message);};
const rows=report.candidates;
const previous=['mahmut-sevket','pasamandira','karamandere','riva-deresi','agva-goksu','alibey','buyukcekmece','darlik','omerli','sazlidere','namazgah','tahtali','ihsaniye','sapanca','poyrazlar','taskisigi','gokce-baraj','sarpdere','uluabat','demirtas','karaidemir','inanli','efteni','abant','kizildamlar'];
fail(rows.length!==25||new Set(rows.map(r=>r.slug)).size!==25,'Tam 25 farklı mevcut aday gerekli.');
const by=new Map(meralar.map(r=>[r.slug,r]));
const rank={D:0,C:1,'C+':2,B:3,A:4};
for(const r of rows){
 fail(previous.some(p=>r.slug.includes(p)),`${r.slug}: önceki 25 ile çakışma.`);
 fail(baseline.routes[r.slug]?.confidence!==r.before,`${r.slug}: önce sınıfı baseline ile uyuşmuyor.`);
 fail(!r.primaryMissing||!r.sources?.length,`${r.slug}: karar/kanıt eksik.`);
 if(r.decision==='301'){
  fail(by.has(r.slug)||!by.has(r.redirectTo),`${r.slug}: konsolidasyon eksik.`);
  const response=await worker.fetch(new Request(`https://oltaatlasi.com/meralar/${r.slug}/`),{ASSETS:{fetch:async()=>new Response('asset')}},{});
  fail(response.status!==301||response.headers.get('location')!==`https://oltaatlasi.com/meralar/${r.redirectTo}/`,`${r.slug}: 301 yanlış.`);
 }else{
  const route=by.get(r.slug);
  // The 4 October result is a historical floor; a later reviewed promotion and release may supersede it.
  fail(!route||rank[route.qualityGrade||route.confidence]<rank[r.after]||!['hold','index'].includes(route.indexing),`${r.slug}: tarihsel rapor/veri uyuşmazlığı.`);
  if(route)errors.push(...validateExpandedQuality(route));
 }
}
for(const c of report.canonicalUpdates||[]){const r=by.get(c.slug);fail(!r||r.confidence!==c.after||r.indexing!==c.indexing,`${c.slug}: kanonik aktarım eksik.`);}
console.log(`İkinci 25: ${rows.length} aday, önceki havuzdan tekrar yok, 301 ve gerçek veri karşılaştırması: ${errors.length} hata.`);
for(const e of errors)console.error(e);
if(errors.length)process.exit(1);
