import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { meralar } from '../src/data/meralar-tumu.ts';
import { growthRoutes20261123 } from '../src/data/meralar-growth-2026-11-23.ts';
import { validateDailyAvlakQuality } from './daily-avlak-quality-policy.mjs';

const directory = '.github/automation-state';
const files = readdirSync(directory)
  .filter(name => /^olta-avlak-kalite-daily-\d{4}-\d{2}-\d{2}\.json$/.test(name))
  .sort();
assert(files.length > 0, 'Günlük avlak/kalite kaydı bulunamadı.');
const ledger = JSON.parse(readFileSync(`${directory}/${files.at(-1)}`, 'utf8'));
const baseline = JSON.parse(readFileSync(ledger.baselineFile, 'utf8'));
assert.deepEqual(validateDailyAvlakQuality(ledger, baseline, meralar), []);
const check = (mutate, message) => {
  const changed = structuredClone(ledger), before = structuredClone(baseline), routes = structuredClone(meralar);
  mutate(changed, before, routes);
  assert(validateDailyAvlakQuality(changed, before, routes).some(error => error.includes(message)), message);
};
check((l) => { l.indexReleaseCap = l.indexReleaseCap === 4 ? 2 : 4; }, 'ortak indeks kotası yanlış');
check((l) => { l.baselineMainSha = 'wrong'; }, 'main SHA');
// Use the dedicated two-page 23 November fixture so this regression cannot silently skip.
const capFile = 'olta-avlak-kalite-daily-2026-11-23.json';
const capFixture = JSON.parse(readFileSync(`${directory}/${capFile}`, 'utf8'));
const capBaseline = JSON.parse(readFileSync(capFixture.baselineFile, 'utf8'));
const fixtures = capFixture.newRouteSlugs.map(slug => structuredClone(growthRoutes20261123.find(route => route.slug === slug)));
assert.equal(fixtures.length, 2);
const testCap = (compact, date, routeCount) => {
  const l = structuredClone(capFixture);
  const old = {
    slug: 'fixture-existing', confidence: 'D', qualityGrade: null, indexing: 'hold'
  };
  const hash = value => createHash('sha256').update(value).digest('hex');
  const b = {
    ...capBaseline, date, compact, routeCount: 1, snapshotRouteCount: 1,
    routeSlugsSha256: hash(old.slug),
    routeStatesSha256: hash(JSON.stringify([[old.slug, old.confidence, old.qualityGrade, old.indexing]]))
  };
  if (!compact) b.routes = { [old.slug]: old };
  const newRoutes = structuredClone(fixtures.slice(0, routeCount));
  if (routeCount > 2) newRoutes.push({
    ...structuredClone(newRoutes[0]), slug: 'fixture-third-new-avlak', indexing: 'hold'
  });
  newRoutes.forEach(route => { route.qualityAssessment.reviewedAt = date; });
  l.date = date;
  l.newRouteSlugs = newRoutes.map(route => route.slug);
  l.shortfall.newReason = 'Kalan adaylar için kanıt yetersiz.';
  l.indexReleaseSlugs = newRoutes.filter(route => route.indexing !== 'hold').map(route => route.slug);
  l.indexReleaseCap = [3, 4].includes(new Date(`${date}T00:00:00Z`).getUTCDay()) ? 4 : 2;
  if (routeCount > 2) l.decisions.push({ ...l.decisions[0], slug: newRoutes[2].slug });
  l.publication = { verified: false, newRoutesPublished: 0, existingRoutesReleased: 0 };
  const expected = date >= '2026-11-17' && routeCount > 2
    ? ['Günlük en fazla iki yeni avlak sınırı aşıldı (HOLD dahil).'] : [];
  assert.deepEqual(validateDailyAvlakQuality(l, b, [old, ...newRoutes]), expected);
};
for (const compact of [false, true]) {
  // Cumulative same-day runs share one baseline: the follow-up PR's third
  // route is rejected even if its new page is HOLD.
  for (const count of [0, 1, 2, 3]) testCap(compact, '2026-11-23', count);
  testCap(compact, '2026-11-27', 3);
  testCap(compact, '2026-11-16', 3);
}

// A different batch on the historical date must not inherit its exception.
if (ledger.date === '2026-11-27' && ledger.newRouteSlugs.length === 8) {
  check((l, b, routes) => {
    const slug = l.newRouteSlugs[0];
    const replacement = 'fixture-altered-historical-avlak';
    l.newRouteSlugs[0] = replacement;
    routes.find(route => route.slug === slug).slug = replacement;
  }, 'Günlük en fazla iki yeni avlak sınırı');
}

check((l) => { l.publication = { verified: true, liveSha: 'wrong', mergedMainSha: 'main', newRoutesPublished: 0, existingRoutesReleased: 0 }; }, 'tam SHA');
check((l) => { l.newRouteSlugs = l.newRouteSlugs.slice(0, 1); l.shortfall = {}; }, 'eksik nedeni');
check((l, b) => { b.routeCount += 1; }, 'Baseline rota sayısı');
if (ledger.newRouteSlugs.length) check((l) => { l.newRouteSlugs = []; }, 'gerçek baseline farkıyla');
if (ledger.promotionSlugs.length) check((l) => { l.promotionSlugs = []; }, 'baseline farkıyla');
if (ledger.indexReleaseSlugs.length) check((l) => { l.indexReleaseSlugs = []; }, 'baseline farkıyla');
// Verified new pages and index releases must stay separate when the quota is full.
const heldNew = ledger.newRouteSlugs.filter(slug => meralar.find(r => r.slug === slug)?.indexing === 'hold');
if (heldNew.length) {
  const verified = structuredClone(ledger);
  const sha = 'a'.repeat(40);
  verified.publication = {
    verified: true, liveSha: sha, mergedMainSha: sha,
    newRoutesPublished: ledger.newRouteSlugs.length,
    existingRoutesReleased: ledger.indexReleaseSlugs.filter(slug => baseline.routes[slug]).length,
    pages: heldNew.map(slug => ({ slug, status: 200,
      canonical: `https://oltaatlasi.com/meralar/${slug}/`, indexing: 'noindex', inSitemap: false, liveSha: sha }))
  };
  assert.deepEqual(validateDailyAvlakQuality(verified, baseline, meralar), []);
  for (const change of [p => { p.pages = []; }, p => { p.pages[0].status = 404; },
    p => { p.pages[0].inSitemap = true; }, p => { p.pages[0].liveSha = 'wrong'; },
    p => { p.pages[0].indexing = 'index'; }, p => { p.pages[0].canonical = 'https://example.org/'; }]) {
    const bad = structuredClone(verified); change(bad.publication);
    assert(validateDailyAvlakQuality(bad, baseline, meralar).some(e => e.includes('HOLD sayfası')));
  }
  verified.publication.newRoutesPublished -= heldNew.length;
  assert(validateDailyAvlakQuality(verified, baseline, meralar).some(e => e.includes('teslim sayaçları')));
}
console.log('Günlük avlak/kalite politika regresyonları geçti.');
