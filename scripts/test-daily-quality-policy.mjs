import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateDailyQuality} from './daily-quality-policy.mjs';
const liveState=JSON.parse(readFileSync('.github/automation-state/olta-daily-quality.json','utf8'));
const liveBaseline=JSON.parse(readFileSync(liveState.dailyPolicy.baselineFile,'utf8'));
assert.deepEqual(validateDailyQuality(liveState,liveBaseline,meralar),[]);
// Stable synthetic fixtures keep regression coverage independent of today's promotion count.
const reviewedAt='2026-10-12';
const route=(slug,grade,indexing)=>({slug,confidence:grade==='C+'?'C':grade,qualityGrade:grade,indexing,lat:40,lng:30,fish:['Sazan'],fishEvidence:[{name:'Sazan',sourceUrl:'https://example.org/evidence'}],accessEvidence:[{sourceUrl:'https://example.org/evidence'}],sources:[{url:'https://example.org/evidence'}],image:'/test.svg',socialImage:'/test.svg',qualityAssessment:{model:'expanded-v2',reviewedAt,identityVerified:true,speciesRouteSpecific:true,currentLawResolved:grade==='C+',safePublicAccessVerified:grade==='C+',independentStrongFamilies:['official'],unresolvedRisks:grade==='C+'?[]:['access unresolved']}});
const routes=[route('promoted','C+','index'),route('held','C','hold'),route('bilecik-cerkesli-baraj-goleti','C+','index'),route('mugla-ula-ula-goleti','C+','index')];
const baseline={baselineDate:reviewedAt,routes:Object.fromEntries(routes.map(r=>[r.slug,{confidence:r.confidence,qualityGrade:r.qualityGrade,indexing:r.indexing}]))};
baseline.routes.promoted={confidence:'C',qualityGrade:'C',indexing:'hold'};
baseline.routes.held={confidence:'D',qualityGrade:'D',indexing:'hold'};
const evidence=slug=>({slug,families:['official','academic'],coverage:['identity','location','locationPrecision','publicAccessContext','law','risk','species'],sources:['https://example.org/evidence']});
const state={date:reviewedAt,done:false,analytics:{},stage2:{promotedSlugs:['promoted','held'],promotedCount:2,eligibleReviewed:2,actualConfidencePromotions:2,maintenanceOnly:0,indexReleasedSlugs:['promoted']},dailyPolicy:{actualConfidencePromotionsTarget:17,indexReleaseHardCap:2,indexReleaseOperationalCap:2,repositoryCap:2,gscCap:2,priorTodayUpgradedSlugs:[],priorTodayReleasedSlugs:[],qualityUpgradedSlugs:['promoted','held'],eligibleReviewedSlugs:['promoted','held'],actualConfidencePromotionSlugs:['promoted','held'],maintenanceOnlySlugs:[],releasedSlugs:['promoted'],holdSlugs:['held'],newSlugs:[],evidence:[evidence('promoted'),evidence('held')]}};
assert.deepEqual(validateDailyQuality(state,baseline,routes),[]);
const s=()=>structuredClone(state);
const errors=(st=state,b=baseline,r=routes)=>validateDailyQuality(st,b,r);
let x;
for(const invalid of ['bilecik-cerkesli-baraj-goleti','mugla-ula-ula-goleti']){
 x=s();x.dailyPolicy.eligibleReviewedSlugs.push(invalid);x.stage2.eligibleReviewed++;assert(errors(x).some(e=>e.includes('başlangıçta C+')));
 x=s();x.dailyPolicy.releasedSlugs=[invalid];assert(errors(x).some(e=>e.includes('başlangıçta zaten indekslenebilir')));
}
x=s();x.done=true;assert(errors(x).some(e=>e.includes('terfi hedefi eksikken')));
x=s();x.dailyPolicy.evidence[0].families=[];assert(errors(x).some(e=>e.includes('kaynak ailesi')));
x=s();x.dailyPolicy.evidence[0].families=['tek'];assert.deepEqual(errors(x),[]);
x=s();x.dailyPolicy.indexReleaseOperationalCap=5;assert(errors(x).some(e=>e.includes('Operasyonel')));
for(const value of [undefined,'noindex','unexpected']){
 const changed=structuredClone(routes);changed[0].indexing=value;
 assert(errors(state,baseline,changed).some(e=>e.includes('açık index')));
 assert(errors(state,baseline,changed).some(e=>e.includes('Salım sayacı')));
}
for(const slug of ['promoted','held']){
 const changed=structuredClone(routes);delete changed.find(r=>r.slug===slug).qualityAssessment;
 assert(errors(state,baseline,changed).some(e=>e.includes('expanded-v2')));
}
const unknownBaseline=structuredClone(baseline);delete unknownBaseline.routes.promoted.indexing;
assert(errors(state,unknownBaseline).some(e=>e.includes('başlangıçta zaten indekslenebilir')));
x=s();x.dailyPolicy.newSlugs=['new'];x.dailyPolicy.manualCPlusNewSlugs=['new'];x.dailyPolicy.evidence.push(evidence('new'));
assert(errors(x,baseline,[...routes,route('new','C+','index')]).some(e=>e.includes('manuel C+ istisnası')));
x=s();x.dailyPolicy.newSlugs=['research'];const newResearch=route('research','D','hold');newResearch.fish=[];newResearch.fishEvidence=[];assert.deepEqual(errors(x,baseline,[...routes,newResearch]),[]);
const unsupportedResearch=structuredClone(newResearch);unsupportedResearch.fish=['Sazan'];assert(errors(x,baseline,[...routes,unsupportedResearch]).some(e=>e.includes('kanıtsız tür')));
x=s();x.dailyPolicy.newSlugs=['new'];x.dailyPolicy.newIndexReleasedSlugs=['new'];x.dailyPolicy.evidence.push({...evidence('new'),families:['tek']});x.stage2.indexReleasedSlugs.push('new');
assert(errors(x,baseline,[...routes,route('new','C+','index')]).some(e=>e.includes('önce HOLD/noindex')));
const priorHeld=route('prior-held','C+','index');
const priorBaseline=structuredClone(baseline);
priorBaseline.routes['prior-held']={confidence:'C',qualityGrade:'C+',indexing:'hold'};
x=s();x.dailyPolicy.releasedSlugs.push('prior-held');x.dailyPolicy.releaseReviewedSlugs=['prior-held'];x.dailyPolicy.evidence.push({...evidence('prior-held'),families:['tek']});x.stage2.indexReleasedSlugs.push('prior-held');
assert.deepEqual(errors(x,priorBaseline,[...routes,priorHeld]),[]);
const sourceFree=structuredClone(x);sourceFree.dailyPolicy.evidence.find(e=>e.slug==='prior-held').sources=[];
assert(errors(sourceFree,priorBaseline,[...routes,priorHeld]).some(e=>e.includes('kaynak URL')));
const uncited=structuredClone(priorHeld);uncited.fishEvidence[0].sourceUrl='';uncited.accessEvidence[0].sourceUrl='';
assert(errors(x,priorBaseline,[...routes,uncited]).some(e=>e.includes('rota kaynağına')));
priorHeld.qualityAssessment.reviewedAt='2026-10-11';
assert(errors(x,priorBaseline,[...routes,priorHeld]).some(e=>e.includes('salım günü yeniden')));
x=s();x.dailyPolicy.priorTodayReleasedSlugs=['bilecik-cerkesli-baraj-goleti','mugla-ula-ula-goleti'];assert(errors(x).some(e=>e.includes('tavanı aşıyor')));
assert(errors(state,{...baseline,baselineDate:'2026-10-11'}).some(e=>e.includes('Baseline tarihi')));
const october5=JSON.parse(readFileSync('docs/olta-daily-quality-2026-10-05.json','utf8'));
assert.equal(october5.summary.actualConfidencePromotions,2);
assert.equal(october5.summary.eligibleReviewed,17);
assert.deepEqual(october5.invalidCandidatesRemoved.map(r=>r.slug).sort(),['bilecik-cerkesli-baraj-goleti','mugla-ula-ula-goleti']);
console.log('Günlük politika: C+/HOLD sonraki gün salımı, yeni HOLD, kaynak bağı ve iki salım tavanı ile 5 Ekim regresyonları geçti.');
const {validateExpandedQuality}=await import('./expanded-quality-policy.mjs');
x=s();x.dailyPolicy.indexReleaseHardCap=3;assert(validateDailyQuality(x,baseline,routes).some(e=>e.includes('sabit 2')));
const reviewed=meralar.find(r=>r.qualityAssessment&&r.confidence==='C');assert(reviewed);
let candidate=structuredClone(reviewed);candidate.indexing='index';assert(validateExpandedQuality(candidate).some(e=>e.includes('hold')));
candidate.qualityGrade='C+';assert(validateExpandedQuality(candidate).some(e=>e.includes('currentLawResolved')));
candidate.qualityAssessment.currentLawResolved=true;assert(validateExpandedQuality(candidate).some(e=>e.includes('safePublicAccessVerified')));
candidate.qualityAssessment.safePublicAccessVerified=true;assert(validateExpandedQuality(candidate).some(e=>e.includes('riskleri')));
candidate.qualityAssessment.unresolvedRisks=[];candidate.lat=40;candidate.lng=30;assert.deepEqual(validateExpandedQuality(candidate),[]);
candidate.qualityGrade='B';candidate.confidence='B';candidate.qualityAssessment.independentStrongFamilies=['same'];assert(validateExpandedQuality(candidate).some(e=>e.includes('ikinci')));
candidate.qualityAssessment.independentStrongFamilies=['DSİ','Üniversite'];candidate.qualityGrade='A';candidate.confidence='A';assert(validateExpandedQuality(candidate).some(e=>e.includes('olağanüstü')));
assert(validateExpandedQuality({slug:'missing'},{requireAssessment:true}).length>0);
console.log('Sabit 2, C/C+ ayrımı, hukuk/erişim blokajı, bağımsızlık ve A saha eşiği regresyonları geçti.');
