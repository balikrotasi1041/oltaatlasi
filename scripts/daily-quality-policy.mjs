import {validateExpandedQuality} from './expanded-quality-policy.mjs';
export function validateDailyQuality(state, baseline, routes) {
  const errors=[];
  const p=state.dailyPolicy;
  if(!p) return ['Günlük politika eksik.'];
  const fail=(condition,message)=>{if(condition)errors.push(message);};
  const same=(a,b)=>JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
  const indexable=r=>r.confidence!=='D'&&r.indexing!=='hold';
  const rank={D:0,C:1,B:2,A:3};
  const current=new Map(routes.map(r=>[r.slug,r]));
  const lists=['priorTodayUpgradedSlugs','priorTodayReleasedSlugs','qualityUpgradedSlugs','releasedSlugs','holdSlugs','newSlugs'];
  for(const key of lists){
    fail(!Array.isArray(p[key]),`${key}: liste gerekli.`);
    if(!Array.isArray(p[key]))return errors;
    fail(new Set(p[key]).size!==p[key].length,`${key}: çift sayım.`);
    fail(p[key].some(s=>!current.has(s)),`${key}: bilinmeyen slug.`);
  }
  fail(p.qualityUpgradesTarget<17,'Kalite hedefi 17 altına düşemez.');
  fail(p.indexReleaseHardCap!==2,'Sert salım tavanı sabit 2 olmalı.');
  const backlog=state.analytics.discovered+state.analytics.crawledNotIndexed;
  const derivedGscCap=2; // Backlog can lower operational caps, never raise the fixed ceiling.
  const caps=[2,p.indexReleaseOperationalCap,p.repositoryCap,p.gscCap,derivedGscCap];
  fail(caps.some(c=>!Number.isInteger(c)||c<0),'Geçersiz salım tavanı.');
  fail(p.indexReleaseOperationalCap>2,'Operasyonel tavan sabit 2 sınırını aşamaz.');
  const actualUpgrades=routes.filter(r=>baseline.routes[r.slug]&&rank[r.confidence]>rank[baseline.routes[r.slug].confidence]).map(r=>r.slug);
  const actualReleases=routes.filter(r=>indexable(r)&&(!baseline.routes[r.slug]||!indexable(baseline.routes[r.slug]))).map(r=>r.slug);
  for(const r of routes)errors.push(...validateExpandedQuality(r,{requireAssessment:actualReleases.includes(r.slug)}));
  const actualNew=routes.filter(r=>!baseline.routes[r.slug]).map(r=>r.slug);
  fail(!same(actualUpgrades,p.qualityUpgradedSlugs),'Kalite sayacı gerçek değişikliklerle eşleşmiyor.');
  fail(!same(actualReleases,p.releasedSlugs),'Salım sayacı gerçek noindex → index değişiklikleriyle eşleşmiyor.');
  fail(!same(actualNew,p.newSlugs),'Yeni slug sayacı gerçek veriyle eşleşmiyor.');
  fail(p.priorTodayReleasedSlugs.some(s=>p.releasedSlugs.includes(s)),'Önceki salım yeniden sayıldı.');
  fail(p.priorTodayUpgradedSlugs.some(s=>p.qualityUpgradedSlugs.includes(s)),'Önceki yükseltme yeniden sayıldı.');
  fail(p.priorTodayReleasedSlugs.length+p.releasedSlugs.length>Math.min(...caps),'Günlük toplam salım en sıkı tavanı aşıyor.');
  const expectedHold=actualUpgrades.filter(s=>!indexable(current.get(s)));
  fail(!same(expectedHold,p.holdSlugs),'Yükseltilen ama salınmayan kayıt hold listesinde olmalı.');
  for(const slug of p.holdSlugs)fail(current.get(slug)?.indexing!=='hold',`${slug}: indexing=hold gerekli.`);
  for(const slug of [...actualUpgrades,...actualNew]){
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
  fail(!same(state.stage2.indexReleasedSlugs,[...p.priorTodayReleasedSlugs,...p.releasedSlugs]),'Günlük salım listesi tutarsız.');
  fail(state.done&&state.stage2.promotedCount<p.qualityUpgradesTarget,'Hedef eksikken tamamlandı denemez.');
  return errors;
}
