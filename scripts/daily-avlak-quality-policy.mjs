import { createHash } from 'node:crypto';
import { validateExpandedQuality } from './expanded-quality-policy.mjs';

const hash = value => createHash('sha256').update(value).digest('hex');
const sorted = values => [...values].sort();
const same = (a, b) => JSON.stringify(sorted(a)) === JSON.stringify(sorted(b));
const grade = route => route?.qualityGrade || route?.confidence;
const rank = { D: 0, C: 1, 'C+': 2, B: 3, A: 4 };
const indexable = route => !!route && route.confidence !== 'D' && route.indexing !== 'hold';
const state = route => [route.slug, route.confidence ?? null, route.qualityGrade ?? null, route.indexing ?? null];
const distanceKm = route => {
  const radians = Math.PI / 180;
  const latitude = (route.lat - 41.0082) * radians;
  const longitude = (route.lng - 28.9784) * radians;
  const a = Math.sin(latitude / 2) ** 2 + Math.cos(route.lat * radians) * Math.cos(41.0082 * radians) * Math.sin(longitude / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
};
const dailyCap = date => [3, 4].includes(new Date(`${date}T00:00:00Z`).getUTCDay()) ? 4 : 2;

export function validateDailyAvlakQuality(ledger, baseline, routes) {
  const errors = [];
  const fail = (condition, message) => { if (condition) errors.push(message); };
  fail(ledger.program !== 'istanbul-radius-quality-v2', 'Güncel program kimliği geçersiz.');
  fail(ledger.date !== baseline.date || ledger.baselineMainSha !== baseline.mainSha, 'Gün/baseline main SHA uyuşmuyor.');
  fail(baseline.routeCount !== Object.keys(baseline.routes).length, 'Baseline rota sayısı uyuşmuyor.');
  fail(hash(Object.keys(baseline.routes).sort().join('\n')) !== baseline.routeSlugsSha256, 'Baseline slug özeti uyuşmuyor.');
  const baselineStates = Object.entries(baseline.routes).map(([slug, route]) => state({ slug, ...route })).sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
  fail(hash(JSON.stringify(baselineStates)) !== baseline.routeStatesSha256, 'Baseline durum özeti uyuşmuyor.');
  const current = new Map(routes.map(route => [route.slug, route]));
  fail(current.size !== routes.length, 'Çift slug bulundu.');
  const actualNew = routes.filter(route => !baseline.routes[route.slug]).map(route => route.slug);
  const actualPromotions = routes.filter(route => baseline.routes[route.slug] && rank[grade(route)] > rank[grade(baseline.routes[route.slug])]).map(route => route.slug);
  const actualReleases = routes.filter(route => indexable(route) && !indexable(baseline.routes[route.slug])).map(route => route.slug);
  const changedOld = routes.filter(route => baseline.routes[route.slug] && JSON.stringify(state(route)) !== JSON.stringify(state({ slug: route.slug, ...baseline.routes[route.slug] }))).map(route => route.slug);
  const fields = ['newRouteSlugs', 'promotionSlugs', 'indexReleaseSlugs', 'maintenanceOnlySlugs', 'eligibleReviewedSlugs'];
  for (const field of fields) {
    fail(!Array.isArray(ledger[field]), `${field} listesi gerekli.`);
    if (Array.isArray(ledger[field])) fail(new Set(ledger[field]).size !== ledger[field].length, `${field} çift sayıldı.`);
  }
  if (fields.some(field => !Array.isArray(ledger[field]))) return errors;
  fail(!same(actualNew, ledger.newRouteSlugs), 'Yeni avlak listesi gerçek baseline farkıyla uyuşmuyor.');
  fail(!same(actualPromotions, ledger.promotionSlugs), 'Gerçek sınıf terfisi listesi baseline farkıyla uyuşmuyor.');
  fail(!same(actualReleases, ledger.indexReleaseSlugs), 'İndeks salımı listesi baseline farkıyla uyuşmuyor.');
  fail(changedOld.some(slug => !ledger.promotionSlugs.includes(slug) && !ledger.indexReleaseSlugs.includes(slug) && !ledger.maintenanceOnlySlugs.includes(slug)), 'Bildirilmeyen mevcut rota değişikliği var.');
  fail(routes.length !== baseline.routeCount + actualNew.length, 'Baseline rotası silindi veya gizli rota eklendi.');
  fail(ledger.indexReleaseCap !== dailyCap(ledger.date), 'Hafta gününe göre ortak indeks kotası yanlış.');
  fail(actualReleases.length > dailyCap(ledger.date), 'Günlük ortak indeks kotası aşıldı.');
  fail(ledger.newRouteSlugs.length < 2 && !ledger.shortfall?.newReason, 'İki yeni C+ hedefinin eksik nedeni gerekli.');
  fail(ledger.promotionSlugs.length < 3 && !ledger.shortfall?.promotionReason, 'Üç gerçek terfi hedefinin eksik nedeni gerekli.');
  fail(!['İstanbul', 'Türkiye'].includes(ledger.scopePhase), 'Coğrafi tarama aşaması gerekli.');
  fail(ledger.scopePhase === 'Türkiye' && !ledger.istanbulExhaustedEvidence, 'Türkiye genişlemesi için İstanbul kapsam gerekçesi gerekli.');
  fail(!Number.isFinite(ledger.searchRadiusKm) || ledger.searchRadiusKm < 0, 'Kalıcı tarama yarıçapı gerekli.');
  for (const slug of ledger.newRouteSlugs) {
    const route = current.get(slug);
    if (!route) { errors.push(`${slug}: yeni avlak bulunamadı.`); continue; }
    fail(!['C+', 'B', 'A'].includes(grade(route)), `${slug}: yeni avlak en az C+ olmalı.`);
    fail(route.qualityAssessment?.reviewedAt !== ledger.date, `${slug}: günlük kanıt incelemesi gerekli.`);
    if (ledger.scopePhase === 'İstanbul') fail(route.province !== 'İstanbul', `${slug}: İstanbul aşamasında il uyuşmuyor.`);
    errors.push(...validateExpandedQuality(route, { requireAssessment: true }));
  }
  for (const slug of ledger.promotionSlugs) {
    const route = current.get(slug), before = baseline.routes[slug];
    if (!route || !before) { errors.push(`${slug}: terfi için mevcut baseline kaydı gerekli.`); continue; }
    fail(route.qualityAssessment?.reviewedAt !== ledger.date, `${slug}: terfi günü kanıt incelemesi gerekli.`);
    if (['C+', 'B', 'A'].includes(grade(route))) errors.push(...validateExpandedQuality(route, { requireAssessment: true }));
  }
  for (const slug of [...ledger.newRouteSlugs, ...ledger.promotionSlugs]) {
    const route = current.get(slug);
    const decision = ledger.decisions?.find(entry => entry.slug === slug);
    fail(!decision || !decision.identityAndSpecies || !decision.access || !decision.law || !decision.sources?.length, `${slug}: kaynaklı editoryal karar gerekli.`);
    fail(!!decision && !decision.sources.every(url => route?.sources?.some(source => source.url === url)), `${slug}: karar kaynakları sayfada bulunmalı.`);
    fail(!Number.isFinite(route?.lat) || !Number.isFinite(route?.lng) || !Number.isFinite(decision?.distanceKmFromIstanbulCenter), `${slug}: doğrulanmış konum/mesafe gerekli.`);
    if (Number.isFinite(decision?.distanceKmFromIstanbulCenter) && Number.isFinite(route?.lat) && Number.isFinite(route?.lng)) {
      fail(Math.abs(decision.distanceKmFromIstanbulCenter - distanceKm(route)) > 1, `${slug}: İstanbul merkezine mesafe uyuşmuyor.`);
      fail(ledger.newRouteSlugs.includes(slug) && distanceKm(route) > ledger.searchRadiusKm + 1, `${slug}: tarama yarıçapı dışında.`);
    }
    fail(decision?.baselineGrade !== (baseline.routes[slug] ? grade(baseline.routes[slug]) : null) || decision?.finalGrade !== grade(route), `${slug}: önce/sonra sınıf kaydı uyuşmuyor.`);
  }
  const publishedNew = actualNew.filter(slug => indexable(current.get(slug))).length;
  const releasedExisting = actualReleases.filter(slug => !!baseline.routes[slug]).length;
  if (ledger.publication?.verified) {
    fail(!ledger.publication.liveSha || ledger.publication.liveSha !== ledger.publication.mergedMainSha, 'Canlı/main tam SHA eşleşmeli.');
    fail(ledger.publication.newRoutesPublished !== publishedNew || ledger.publication.existingRoutesReleased !== releasedExisting, 'Canlı teslim sayaçları gerçek yayınlarla eşleşmeli.');
  } else fail((ledger.publication?.newRoutesPublished || 0) > 0 || (ledger.publication?.existingRoutesReleased || 0) > 0, 'Canlı doğrulama olmadan teslim sayılmaz.');
  return errors;
}
