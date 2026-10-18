import assert from 'node:assert/strict';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateGrowthProgram} from './growth-program-policy.mjs';
import {loadLatestGrowthLedger} from './load-growth-ledger.mjs';

const {ledger,baseline}=loadLatestGrowthLedger();
assert.deepEqual(validateGrowthProgram(ledger,baseline,meralar),[]);
const check=(mutate,needle)=>{
  const l=structuredClone(ledger),b=structuredClone(baseline),r=structuredClone(meralar);
  mutate(l,b,r);
  assert(validateGrowthProgram(l,b,r).some(error=>error.includes(needle)),needle);
};
if(ledger.newIndexableSlugs.length>1)check((l)=>{l.newIndexableSlugs[0]=l.newIndexableSlugs[1]},'çift sayıldı');
if(ledger.newIndexableSlugs.length)check((l)=>{l.newIndexableSlugs=[]},'gerçek farkla');
if(ledger.existingReleasedSlugs.length)check((l)=>{l.existingReleasedSlugs=[]},'gerçek farkla');
check((l,b)=>{b.mainSha='wrong'},'main SHA');
if(ledger.existingReleasedSlugs.length){
  check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).indexing='hold'},'gerçek farkla');
  check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).confidence='D'},'D kayıt');
  check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).qualityAssessment.reviewedAt='2000-01-01'},'salım günü');
  check((l,b,r)=>{r.find(route=>route.slug===l.existingReleasedSlugs[0]).qualityGrade='B'},'confidence terfisi');
}
if(ledger.newIndexableSlugs.length){
  check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[0]).qualityAssessment.currentLawResolved=false},'currentLawResolved');
  check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[0]).fishEvidence=[]},'tür kanıtı');
  check((l,b,r)=>{r.find(route=>route.slug===l.newIndexableSlugs[0]).indexing='hold'},'index olmalı');
}
check((l)=>{l.newHoldSlugs=['unverified-new']},'Yeni D/C/HOLD');
check((l)=>{l.publication.verified=false;l.publication.newRoutesPublished=3},'Canlı doğrulama olmadan');
check((l)=>{l.publication={verified:true,mergedMainSha:'test-sha',liveSha:'test-sha',newRoutesPublished:l.newIndexableSlugs.length+1,existingRoutesReleased:l.existingReleasedSlugs.length}},'Canlı yeni rota sayacı');
check((l)=>{l.publication={verified:true,mergedMainSha:'test-sha',liveSha:'wrong',newRoutesPublished:l.newIndexableSlugs.length,existingRoutesReleased:l.existingReleasedSlugs.length}},'tam SHA');
if(ledger.decisions?.length)check((l)=>{l.decisions[0].distanceKmFromIstanbulCenter=999},'mesafesi koordinatla');
const short=structuredClone(ledger);short.newIndexableSlugs=[];short.existingReleasedSlugs=[];short.shortfall={newReason:'Kaynaklı yeni aday bulunmadı.',existingReason:'Erişim teyidi bekleniyor.'};
if(ledger.newIndexableSlugs.length||ledger.existingReleasedSlugs.length)assert(validateGrowthProgram(short,baseline,meralar).some(e=>e.includes('gerçek farkla')));
console.log('Büyüme politikası: baseline, gerçek fark, tür/hukuk/erişim, sayım ve sahte salım regresyonları geçti.');
