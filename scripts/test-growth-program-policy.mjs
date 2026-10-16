import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateGrowthProgram} from './growth-program-policy.mjs';

const ledger=JSON.parse(readFileSync('.github/automation-state/olta-growth-daily-2026-10-16.json','utf8'));
const baseline=JSON.parse(readFileSync(ledger.baselineFile,'utf8'));
assert.deepEqual(validateGrowthProgram(ledger,baseline,meralar),[]);
const check=(mutate,needle)=>{
  const l=structuredClone(ledger),b=structuredClone(baseline),r=structuredClone(meralar);
  mutate(l,b,r);
  assert(validateGrowthProgram(l,b,r).some(error=>error.includes(needle)),needle);
};
check((l)=>{l.newIndexableSlugs[0]=l.newIndexableSlugs[1]},'çift sayıldı');
check((l)=>{l.newIndexableSlugs=[]},'gerçek farkla');
check((l)=>{l.existingReleasedSlugs=[]},'gerçek farkla');
check((l,b)=>{b.mainSha='wrong'},'main SHA');
check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).indexing='hold'},'gerçek farkla');
check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).confidence='D'},'D kayıt');
check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[0]).qualityAssessment.currentLawResolved=false},'currentLawResolved');
check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[1]).fishEvidence=[]},'tür kanıtı');
check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[0]).indexing='hold'},'index olmalı');
check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).qualityAssessment.reviewedAt='2026-10-15'},'salım günü');
check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).qualityGrade='B'},'confidence terfisi');
const short=structuredClone(ledger);short.newIndexableSlugs=[];short.existingReleasedSlugs=[];short.shortfall={newReason:'Kaynaklı yeni aday bulunmadı.',existingReason:'Erişim teyidi bekleniyor.'};
assert(validateGrowthProgram(short,baseline,meralar).some(e=>e.includes('gerçek farkla')));
console.log('Büyüme politikası: baseline, gerçek fark, tür/hukuk/erişim, sayım ve sahte salım regresyonları geçti.');
