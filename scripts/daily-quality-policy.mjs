import {validateExpandedQuality} from './expanded-quality-policy.mjs';
import {createHash} from 'node:crypto';
export function validateDailyQuality(state, baseline, routes) {
  const errors=[];
  const p=state.dailyPolicy;
  if(!p) return ['Günlük politika eksik.'];
  const fail=(condition,message)=>{if(condition)errors.push(message);};
  const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
  const indexable=r=>r?.confidence!=='D'&&r?.indexing==='index';
  const rank={D:0,C:1,'C+':2,B:3,A:4};
  const grade=r=>r?.qualityGrade||r?.confidence;
  const current=new Map(routes.map(r=>[r.slug,r]));
  const lists=['priorTodayUpgradedSlugs','priorTodayReleasedSlugs','qualityUpgradedSlugs','eligibleReviewedSlugs','actualConfidencePromotionSlugs','maintenanceOnlySlugs','releasedSlugs','holdSlugs','newSlugs'];
  for(const key of lists){
    fail(!Array.isArray(p[key]),`${key}: liste gerekli.`);
    if(!Array.isArray(p[key]))return errors;
    fail(new Set(p[key]).size!==p[key].length,`${key}: çift sayım.`);
    fail(p[key].some(s=>!current.has(s)),`${key}: bilinmeyen slug.`);
  }
  fail((p.actualConfidencePromotionsTarget??p.qualityUpgradesTarget)!==17,'Gerçek confidence terfi hedefi 17 olmalı.');
  fail(p.indexReleaseHardCap!==2,'Sert salım tavanı sabit 2 olmalı.');
  const derivedGscCap=2; // Backlog can lower operational caps, never raise the fixed ceiling.
  const caps=[2,p.indexReleaseOperationalCap,p.repositoryCap,p.gscCap,derivedGscCap];
  fail(caps.some(c=>!Number.isInteger(c)||c<0),'Geçersiz salım tavanı.');
  fail(p.indexReleaseOperationalCap>2,'Operasyonel tavan sabit 2 sınırını aşamaz.');
  const actualUpgrades=routes.filter(r=>baseline.routes[r.slug]&&rank[grade(r)]>rank[grade(baseline.routes[r.slug])]).map(r=>r.slug);
  const actualReleases=routes.filter(r=>baseline.routes[r.slug]&&indexable(r)&&!indexable(baseline.routes[r.slug])).map(r=>r.slug);
  for(const r of routes)errors.push(...validateExpandedQuality(r,{requireAssessment:actualReleases.includes(r.slug)||actualUpgrades.includes(r.slug)}));
  const actualNew=baseline.routeSlugsSha256?p.newSlugs:routes.filter(r=>!baseline.routes[r.slug]).map(r=>r.slug);
  if(baseline.routeSlugsSha256){
    const priorSlugs=routes.map(r=>r.slug).filter(slug=>!p.newSlugs.includes(slug)).sort();
    const priorHash=createHash('sha256').update(priorSlugs.join('\n')).digest('hex');
    fail(priorSlugs.length!==baseline.routeCount||priorHash!==baseline.routeSlugsSha256,'Kompakt baseline rota kümesi güncel veriyle eşleşmiyor.');
  }
  for(const slug of p.eligibleReviewedSlugs){
    const before=baseline.routes[slug];
    fail(!before,`${slug}: eligibility baseline kaydı eksik.`);
    fail(before&&!['D','C'].includes(grade(before)),`${slug}: günlük aday başlangıçta D veya C<C+ değil.`);
    fail(before?.confidence==='C'&&grade(before)==='C+',`${slug}: başlangıçta C+ olan kayıt günlük aday olamaz.`);
    fail(current.get(slug)?.qualityAssessment?.reviewedAt!==state.date,`${slug}: uygun aday aynı gün expanded-v2 değerlendirmesi taşımalı.`);
  }
  for(const slug of p.maintenanceOnlySlugs){
    const before=baseline.routes[slug];
    fail(!before||!['C+','B','A'].includes(grade(before)),`${slug}: maintenanceOnly yalnız başlangıçta C+/B/A olabilir.`);
    fail(p.eligibleReviewedSlugs.includes(slug),`${slug}: bakım kaydı 17 aday havuzuna karıştırılamaz.`);
  }
  fail(!same(actualUpgrades,p.actualConfidencePromotionSlugs),'Gerçek confidence terfi sayacı baseline değişiklikleriyle eşleşmiyor.');
  fail(!same(p.qualityUpgradedSlugs,p.actualConfidencePromotionSlugs),'Eski kalite sayacı yalnız gerçek confidence terfilerini içermeli.');
  fail(p.actualConfidencePromotionSlugs.some(s=>!p.eligibleReviewedSlugs.includes(s)),'Confidence terfisi uygun aday havuzu dışında olamaz.');
  fail(!same(actualReleases,p.releasedSlugs),'Salım sayacı gerçek noindex → index değişiklikleriyle eşleşmiyor.');
  fail(!same(actualNew,p.newSlugs),'Yeni slug sayacı gerçek veriyle eşleşmiyor.');
  fail(p.priorTodayReleasedSlugs.some(s=>p.releasedSlugs.includes(s)),'Önceki salım yeniden sayıldı.');
  fail(p.priorTodayUpgradedSlugs.some(s=>p.qualityUpgradedSlugs.includes(s)),'Önceki yükseltme yeniden sayıldı.');
  fail(p.priorTodayReleasedSlugs.length+p.releasedSlugs.length>Math.min(...caps),'Günlük toplam salım en sıkı tavanı aşıyor.');
  for(const slug of p.releasedSlugs){
    fail(!p.actualConfidencePromotionSlugs.includes(slug),`${slug}: yalnız bu batch'te gerçek confidence terfisi alan kayıt salınabilir.`);
    fail(rank[grade(current.get(slug))]<rank['C+'],`${slug}: yeni indeks salımı en az C+ olmalı.`);
    fail(indexable(baseline.routes[slug]),`${slug}: başlangıçta zaten indekslenebilir olan yüksek kalite kayıt release sayılamaz.`);
  }
  const expectedHold=p.eligibleReviewedSlugs.filter(s=>current.get(s)?.indexing==='hold');
  fail(!same(expectedHold,p.holdSlugs),'İncelenen ve hold olan kayıtlar hold listesiyle eşleşmeli.');
  for(const slug of p.holdSlugs)fail(current.get(slug)?.indexing!=='hold',`${slug}: indexing=hold gerekli.`);
  for(const slug of [...p.actualConfidencePromotionSlugs,...actualNew]){
    const r=current.get(slug),e=p.evidence.find(e=>e.slug===slug);
    fail(!e||new Set(e.families).size<2,`${slug}: iki bağımsız kaynak ailesi gerekli.`);
    for(const key of ['identity','location','locationPrecision','publicAccessContext','law','risk','species'])fail(!e?.coverage?.includes(key),`${slug}: ${key} kanıt incelemesi eksik.`);
    fail(!r.fishEvidence?.length||!r.accessEvidence?.length,`${slug}: tür/erişim kanıtı eksik.`);
    fail(e?.sources?.some(url=>!r.sources?.some(s=>s.url===url)),`${slug}: kanıt kaynağı rota kaynaklarında yok.`);
    if(actualNew.includes(slug)){
      fail(!['A','B'].includes(r.confidence),`${slug}: yeni rota en az B olmalı.`);
      fail(r.image!==r.socialImage||!r.image.endsWith('.svg'),`${slug}: aynı özgün SVG kullanılmalı.`);
    }
  }
  fail(!same(state.stage2.promotedSlugs,[...p.priorTodayUpgradedSlugs,...p.qualityUpgradedSlugs]),'Günlük toplam kalite listesi tutarsız.');
  fail(state.stage2.promotedCount!==state.stage2.promotedSlugs.length,'Günlük kalite sayısı tutarsız.');
  fail(state.stage2.eligibleReviewed!==p.eligibleReviewedSlugs.length,'eligibleReviewed sayısı tutarsız.');
  fail(state.stage2.actualConfidencePromotions!==p.actualConfidencePromotionSlugs.length,'actualConfidencePromotions sayısı tutarsız.');
  fail(state.stage2.maintenanceOnly!==p.maintenanceOnlySlugs.length,'maintenanceOnly sayısı tutarsız.');
  fail(!same(state.stage2.indexReleasedSlugs,[...p.priorTodayReleasedSlugs,...p.releasedSlugs]),'Günlük salım listesi tutarsız.');
  fail(state.done&&state.stage2.actualConfidencePromotions<p.actualConfidencePromotionsTarget,'Gerçek confidence terfi hedefi eksikken tamamlandı denemez.');
  return errors;
}
