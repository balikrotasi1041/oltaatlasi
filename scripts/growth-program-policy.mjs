import {createHash} from 'node:crypto';
import {validateExpandedQuality} from './expanded-quality-policy.mjs';

const sha256=value=>createHash('sha256').update(value).digest('hex');
const state=r=>[r.slug,r.confidence??null,r.qualityGrade??null,r.indexing??null];
const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
const indexable=r=>!!r&&r.confidence!=='D'&&r.indexing==='index';
const grade=r=>r?.qualityGrade||r?.confidence;

export function validateGrowthProgram(ledger,baseline,routes){
  const errors=[];
  const fail=(condition,message)=>{if(condition)errors.push(message);};
  fail(ledger.program!=='istanbul-centered-growth-v1','Büyüme programı kimliği geçersiz.');
  fail(ledger.date!==baseline.date,'Büyüme baseline günü uyuşmuyor.');
  fail(ledger.baselineMainSha!==baseline.mainSha,'Büyüme baseline main SHA uyuşmuyor.');
  fail(baseline.routeCount!==Object.keys(baseline.routes).length,'Büyüme baseline rota sayısı uyuşmuyor.');
  fail(sha256(Object.keys(baseline.routes).sort().join('\n'))!==baseline.routeSlugsSha256,'Büyüme baseline slug özeti uyuşmuyor.');
  const baselineStates=Object.entries(baseline.routes).map(([slug,r])=>state({slug,...r})).sort((a,b)=>a[0].localeCompare(b[0],'en'));
  fail(sha256(JSON.stringify(baselineStates))!==baseline.routeStatesSha256,'Büyüme baseline durum özeti uyuşmuyor.');
  const current=new Map(routes.map(r=>[r.slug,r]));
  fail(current.size!==routes.length,'Çift slug bulundu.');
  const actualNew=routes.filter(r=>!baseline.routes[r.slug]).map(r=>r.slug);
  const actualNewIndexable=routes.filter(r=>!baseline.routes[r.slug]&&indexable(r)).map(r=>r.slug);
  const actualNewHold=routes.filter(r=>!baseline.routes[r.slug]&&!indexable(r)).map(r=>r.slug);
  const actualReleased=routes.filter(r=>baseline.routes[r.slug]&&!indexable(baseline.routes[r.slug])&&indexable(r)).map(r=>r.slug);
  const actualChanged=routes.filter(r=>baseline.routes[r.slug]&&JSON.stringify(state(r))!==JSON.stringify(state({slug:r.slug,...baseline.routes[r.slug]}))).map(r=>r.slug);
  fail(!Array.isArray(ledger.newIndexableSlugs)||!Array.isArray(ledger.newHoldSlugs)||!Array.isArray(ledger.existingReleasedSlugs),'Yeni/index, yeni/HOLD ve eski salım listeleri gerekli.');
  if(!Array.isArray(ledger.newIndexableSlugs)||!Array.isArray(ledger.newHoldSlugs)||!Array.isArray(ledger.existingReleasedSlugs))return errors;
  fail(new Set(ledger.newIndexableSlugs).size!==ledger.newIndexableSlugs.length,'Yeni slug çift sayıldı.');
  fail(new Set(ledger.newHoldSlugs).size!==ledger.newHoldSlugs.length,'Yeni HOLD slug çift sayıldı.');
  fail(ledger.newHoldSlugs.some(slug=>ledger.newIndexableSlugs.includes(slug)),'Yeni slug hem HOLD hem index sayılamaz.');
  fail(new Set(ledger.existingReleasedSlugs).size!==ledger.existingReleasedSlugs.length,'Eski salım çift sayıldı.');
  const shortfall=ledger.shortfall;
  fail(ledger.newIndexableSlugs.length<2&&!shortfall?.newReason,'Günlük iki yeni sayfa hedefi karşılanmadı; kanıtlı eksik nedenini kaydet.');
  fail(ledger.existingReleasedSlugs.length<1&&!shortfall?.existingReason,'Günlük bir eski salım hedefi karşılanmadı; kanıtlı eksik nedenini kaydet.');
  fail(!same(actualNewIndexable,ledger.newIndexableSlugs),'Yeni index sayacı gerçek farkla eşleşmiyor.');
  fail(!same(actualNewHold,ledger.newHoldSlugs),'Yeni HOLD sayacı gerçek farkla eşleşmiyor.');
  fail(!same(actualReleased,ledger.existingReleasedSlugs),'Eski noindex→index sayacı gerçek farkla eşleşmiyor.');
  fail(!same(actualChanged,ledger.existingReleasedSlugs),'Bildirilmeyen eski rota sınıf/indeks değişikliği var.');
  fail(routes.length!==baseline.routeCount+actualNew.length,'Baseline rotası silindi veya gizli rota eklendi.');
  fail(ledger.newPagesCreated!==actualNew.length,'newPagesCreated sayacı uyuşmuyor.');
  fail(ledger.noindexToIndex!==actualReleased.length,'noindexToIndex sayacı uyuşmuyor.');
  fail(ledger.technicalIndexableGain!==actualNewIndexable.length+actualReleased.length,'Teknik indekslenebilir artış sayacı uyuşmuyor.');
  fail(ledger.eligibleReviewed!==0||ledger.actualConfidencePromotions!==0,'Bugünkü yeni/C+ bakım kayıtları gerçek confidence terfisi değildir.');
  fail(ledger.maintenanceOnly!==actualReleased.length,'Bakım sayacı mevcut salımlarla eşleşmiyor.');
  for(const slug of ledger.newIndexableSlugs){
    const r=current.get(slug);
    if(!r){errors.push(`${slug}: yeni rota yok.`);continue;}
    fail(r.province!=='İstanbul',`${slug}: yeni rota İstanbul'da olmalı.`);
    fail(!['C+','B','A'].includes(grade(r))||!indexable(r),`${slug}: yeni rota C+ veya üstü index olmalı.`);
    fail(r.qualityAssessment?.reviewedAt!==ledger.date,`${slug}: aynı gün çekirdek kanıt incelemesi gerekli.`);
    errors.push(...validateExpandedQuality(r,{requireAssessment:true}));
    const decision=ledger.decisions?.find(d=>d.slug===slug&&d.kind==='new');
    fail(!decision||!decision.identityAndSpecies||!decision.access||!decision.law,`${slug}: editoryal karar/kapsam eksik.`);
    fail(!decision?.sources?.every(url=>r.sources?.some(source=>source.url===url)),`${slug}: karar kaynağı rota sayfasında yok.`);
  }
  for(const slug of ledger.newHoldSlugs){
    const r=current.get(slug);
    if(!r){errors.push(`${slug}: yeni HOLD rota yok.`);continue;}
    fail(r.indexing!=='hold',`${slug}: yeni HOLD rota noindex olmalı.`);
    fail(r.confidence==='D'&&r.qualityGrade==='C+',`${slug}: D/C+ tutarsız.`);
    errors.push(...validateExpandedQuality(r));
  }
  for(const slug of ledger.existingReleasedSlugs){
    const r=current.get(slug),before=baseline.routes[slug];
    if(!r||!before){errors.push(`${slug}: baseline veya rota yok.`);continue;}
    fail(!['C','C+','B','A'].includes(grade(before))||before.indexing!=='hold',`${slug}: eski kayıt başlangıçta C veya üstü HOLD/noindex olmalı.`);
    fail(r.confidence==='D'||!indexable(r),`${slug}: D kayıt salınamaz.`);
    fail(grade(r)!==grade(before),`${slug}: bakım salımı confidence terfisi değildir.`);
    fail(r.qualityAssessment?.reviewedAt!==ledger.date,`${slug}: salım günü yeniden kanıt incelemesi gerekli.`);
    errors.push(...validateExpandedQuality(r,{requireAssessment:true,allowCIndex:grade(r)==='C'}));
    const decision=ledger.decisions?.find(d=>d.slug===slug&&d.kind==='existing-noindex-release');
    fail(!decision||!decision.identityAndSpecies||!decision.access||!decision.law,`${slug}: editoryal karar/kapsam eksik.`);
    fail(!decision?.sources?.every(url=>r.sources?.some(source=>source.url===url)),`${slug}: karar kaynağı rota sayfasında yok.`);
  }
  fail(ledger.publication?.verified===true&&!ledger.publication.liveSha,'Canlı teslim SHA olmadan doğrulanmış sayılamaz.');
  return errors;
}
