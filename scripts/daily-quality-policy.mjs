import {validateExpandedQuality} from './expanded-quality-policy.mjs';
import {createHash} from 'node:crypto';
const sha256=value=>createHash('sha256').update(value).digest('hex');
const routeState=r=>[r.slug,r.confidence??null,r.qualityGrade??null,r.indexing??null];
export const routeSlugsSha256=routes=>sha256(routes.map(r=>r.slug).sort().join('\n'));
export const routeStatesSha256=routes=>sha256(JSON.stringify(routes.map(routeState).sort((a,b)=>a[0]<b[0]?-1:a[0]>b[0]?1:0)));
export function validateDailyQuality(state, baseline, routes) {
  const errors=[];
  const p=state.dailyPolicy;
  if(!p) return ['Günlük politika eksik.'];
  const fail=(condition,message)=>{if(condition)errors.push(message);};
  const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
  const indexable=r=>!!r&&r.confidence!=='D'&&r.indexing==='index';
  const baselineNoindex=r=>!!r&&(r.confidence==='D'||r.indexing==='hold');
  fail(baseline.baselineDate!==state.date,'Baseline tarihi çalışma günüyle eşleşmeli.');
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
  const dayUpgrades=[...p.priorTodayUpgradedSlugs,...p.actualConfidencePromotionSlugs];
  const dayReleases=[...p.priorTodayReleasedSlugs,...p.releasedSlugs];
  fail(new Set(dayUpgrades).size!==dayUpgrades.length,'Aynı gün kalite terfisi iki batch içinde yeniden sayıldı.');
  fail(new Set(dayReleases).size!==dayReleases.length,'Aynı gün indeks salımı iki batch içinde yeniden sayıldı.');
  fail((p.actualConfidencePromotionsTarget??p.qualityUpgradesTarget)!==17,'Gerçek confidence terfi hedefi 17 olmalı.');
  fail(p.indexReleaseHardCap!==2,'Sert salım tavanı sabit 2 olmalı.');
  const derivedGscCap=2; // Backlog can lower operational caps, never raise the fixed ceiling.
  const caps=[2,p.indexReleaseOperationalCap,p.repositoryCap,p.gscCap,derivedGscCap];
  fail(caps.some(c=>!Number.isInteger(c)||c<0),'Geçersiz salım tavanı.');
  fail(p.indexReleaseOperationalCap>2,'Operasyonel tavan sabit 2 sınırını aşamaz.');
  const actualUpgrades=routes.filter(r=>baseline.routes[r.slug]&&rank[grade(r)]>rank[grade(baseline.routes[r.slug])]).map(r=>r.slug);
  const actualReleases=routes.filter(r=>baseline.routes[r.slug]&&indexable(r)&&!indexable(baseline.routes[r.slug])).map(r=>r.slug);
  for(const r of routes){
    errors.push(...validateExpandedQuality(r,{requireAssessment:actualReleases.includes(r.slug)||actualUpgrades.includes(r.slug)}));
    const before=baseline.routes[r.slug];
    if(before&&before.indexing!==r.indexing)fail(!['index','hold'].includes(r.indexing),`${r.slug}: indeks değişikliği açık index veya hold olmalı.`);
  }
  const actualNew=baseline.routeSlugsSha256?p.newSlugs:routes.filter(r=>!baseline.routes[r.slug]).map(r=>r.slug);
  const manualCPlus=new Set(p.manualCPlusNewSlugs||[]);
  const indexedNew=actualNew.filter(slug=>indexable(current.get(slug)));
  fail(manualCPlus.size>0,'Günlük otomasyonda manuel C+ istisnası kullanılamaz.');
  fail(indexedNew.length>0,'Yeni rota önce HOLD/noindex olarak yayımlanmalı; indeks salımı sonraki günlük baseline üzerinden yapılır.');
  fail(!same(indexedNew,p.newIndexReleasedSlugs||[]),'Yeni rota indeks salımı sayacı eşleşmiyor.');
  fail(new Set(dayReleases).size>Math.min(...caps),'Günlük indeks salımı en sıkı tavanı aşıyor.');

  if(baseline.routeSlugsSha256){
    const priorSlugs=routes.map(r=>r.slug).filter(slug=>!p.newSlugs.includes(slug)).sort();
    const priorHash=routeSlugsSha256(priorSlugs.map(slug=>({slug})));
    fail(priorSlugs.length!==baseline.routeCount||priorHash!==baseline.routeSlugsSha256,'Kompakt baseline rota kümesi güncel veriyle eşleşmiyor.');
    fail(baseline.baselineDate>='2026-10-16'&&!baseline.routeStatesSha256,'Kompakt baseline rota durum özeti eksik.');
    const changedSlugs=new Set([...dayUpgrades,...dayReleases,...p.eligibleReviewedSlugs,...p.maintenanceOnlySlugs]);
    for(const slug of changedSlugs)fail(!baseline.routes[slug],`${slug}: günlük durum değişikliği baseline kaydında yok.`);
    for(const slug of [...p.eligibleReviewedSlugs,...p.maintenanceOnlySlugs]){
      if(dayUpgrades.includes(slug)||dayReleases.includes(slug))continue;
      const before=baseline.routes[slug],after=current.get(slug);
      if(!before||!after||JSON.stringify(routeState({slug,...before}))===JSON.stringify(routeState(after)))continue;
      fail(after.indexing!=='hold'||rank[grade(after)]>rank[grade(before)],`${slug}: terfi/salım dışındaki durum değişikliği yalnız HOLD veya güven düşürme olabilir.`);
    }
    const reconstructed=routes.filter(r=>!p.newSlugs.includes(r.slug)).map(r=>changedSlugs.has(r.slug)&&baseline.routes[r.slug]?{slug:r.slug,...baseline.routes[r.slug]}:r);
    if(baseline.routeStatesSha256)fail(routeStatesSha256(reconstructed)!==baseline.routeStatesSha256,'Kompakt baseline dışında bildirilmemiş güven/indeks değişikliği var.');
  }
  for(const slug of p.eligibleReviewedSlugs){
    const before=baseline.routes[slug];
    fail(!before,`${slug}: eligibility baseline kaydı eksik.`);
    fail(before&&!['D','C'].includes(grade(before)),`${slug}: günlük aday başlangıçta D veya C<C+ değil.`);
    fail(before?.confidence==='C'&&grade(before)==='C+',`${slug}: başlangıçta C+ olan kayıt günlük aday olamaz.`);
    fail(current.get(slug)?.qualityAssessment?.reviewedAt!==state.date,`${slug}: uygun aday aynı gün expanded-v2 değerlendirmesi taşımalı.`);
  }
  for(const slug of dayUpgrades){
    const before=baseline.routes[slug];
    fail(!before||!['D','C'].includes(grade(before)),`${slug}: gün içi gerçek terfi başlangıçta D veya C olmalı.`);
    fail(!p.eligibleReviewedSlugs.includes(slug),`${slug}: gün içi gerçek terfi uygun aday havuzunda olmalı.`);
  }
  for(const slug of p.maintenanceOnlySlugs){
    const before=baseline.routes[slug];
    fail(!before||!['C+','B','A'].includes(grade(before)),`${slug}: maintenanceOnly yalnız başlangıçta C+/B/A olabilir.`);
    fail(p.eligibleReviewedSlugs.includes(slug),`${slug}: bakım kaydı 17 aday havuzuna karıştırılamaz.`);
  }
  fail(!same(actualUpgrades,dayUpgrades),'Gerçek confidence terfi sayacı baseline değişiklikleriyle eşleşmiyor.');
  fail(!same(p.qualityUpgradedSlugs,p.actualConfidencePromotionSlugs),'Eski kalite sayacı yalnız gerçek confidence terfilerini içermeli.');
  fail(p.actualConfidencePromotionSlugs.some(s=>!p.eligibleReviewedSlugs.includes(s)),'Confidence terfisi uygun aday havuzu dışında olamaz.');
  fail(!same(actualReleases,dayReleases),'Salım sayacı gerçek noindex → index değişiklikleriyle eşleşmiyor.');
  fail(!same(actualNew,p.newSlugs),'Yeni slug sayacı gerçek veriyle eşleşmiyor.');
  const releaseOnly=p.releasedSlugs.filter(s=>!dayUpgrades.includes(s));
  fail(!same(releaseOnly,p.releaseReviewedSlugs||[]),'Önceki C+/HOLD salım inceleme listesi uyuşmuyor.');
  for(const slug of releaseOnly){
    fail(!['C+','B','A'].includes(grade(baseline.routes[slug])),`${slug}: önceki HOLD kaydı C+/B/A olmalı.`);
    fail(current.get(slug)?.qualityAssessment?.reviewedAt!==state.date,`${slug}: salım günü yeniden kalite değerlendirmesi gerekli.`);
  }
  fail(new Set(dayReleases).size>Math.min(...caps),'Günlük toplam salım en sıkı tavanı aşıyor.');
  for(const slug of p.releasedSlugs){
    fail(rank[grade(current.get(slug))]<rank['C+'],`${slug}: yeni indeks salımı en az C+ olmalı.`);
    fail(!baselineNoindex(baseline.routes[slug]),`${slug}: başlangıçta zaten indekslenebilir olan yüksek kalite kayıt release sayılamaz.`);
  }
  const expectedHold=p.eligibleReviewedSlugs.filter(s=>current.get(s)?.indexing==='hold');
  fail(!same(expectedHold,p.holdSlugs),'İncelenen ve hold olan kayıtlar hold listesiyle eşleşmeli.');
  for(const slug of p.holdSlugs)fail(current.get(slug)?.indexing!=='hold',`${slug}: indexing=hold gerekli.`);
  for(const slug of [...new Set([...p.actualConfidencePromotionSlugs,...p.releasedSlugs,...actualNew])]){
    const r=current.get(slug),e=p.evidence.find(e=>e.slug===slug);
    const ready=['C+','B','A'].includes(grade(r));
    const reviewed=actualUpgrades.includes(slug)||p.releasedSlugs.includes(slug)||indexedNew.includes(slug);
    if(reviewed){
      fail(!e||new Set(e.families||[]).size<(grade(r)==='A'||grade(r)==='B'?2:1),`${slug}: kalite sınıfına uygun kaynak ailesi eksik.`);
      for(const key of ['identity','publicAccessContext','law','species'])if(ready)fail(!e?.coverage?.includes(key),`${slug}: ${key} kanıt incelemesi eksik.`);
      fail(!e?.sources?.length,`${slug}: kaynak URL'si eksik.`);
      fail(e?.sources?.some(url=>!r.sources?.some(s=>s.url===url)),`${slug}: kanıt kaynağı rota kaynaklarında yok.`);
    }
    if(actualNew.includes(slug)){
      fail(r.indexing!=='hold',`${slug}: yeni rota ilk gün HOLD/noindex olmalı.`);
      const names=new Set((r.fishEvidence||[]).map(f=>f.name));
      fail((r.fish||[]).some(f=>!names.has(f)),`${slug}: yeni HOLD rotasında kanıtsız tür listelenemez.`);
    }
  }
  fail(!same(state.stage2.promotedSlugs,dayUpgrades),'Günlük toplam kalite listesi tutarsız.');
  fail(state.stage2.promotedCount!==state.stage2.promotedSlugs.length,'Günlük kalite sayısı tutarsız.');
  fail(state.stage2.eligibleReviewed!==p.eligibleReviewedSlugs.length,'eligibleReviewed sayısı tutarsız.');
  fail(state.stage2.actualConfidencePromotions!==p.actualConfidencePromotionSlugs.length,'actualConfidencePromotions sayısı tutarsız.');
  fail(state.stage2.maintenanceOnly!==p.maintenanceOnlySlugs.length,'maintenanceOnly sayısı tutarsız.');
  fail(!same(state.stage2.indexReleasedSlugs,dayReleases),'Günlük salım listesi tutarsız.');
  fail(state.done&&dayUpgrades.length<p.actualConfidencePromotionsTarget,'Gerçek confidence terfi hedefi eksikken tamamlandı denemez.');
  return errors;
}
