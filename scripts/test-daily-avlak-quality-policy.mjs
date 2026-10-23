import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { meralar } from '../src/data/meralar-tumu.ts';
import { validateDailyAvlakQuality } from './daily-avlak-quality-policy.mjs';

const ledger = JSON.parse(readFileSync('.github/automation-state/olta-avlak-kalite-daily-2026-10-23.json', 'utf8'));
const baseline = JSON.parse(readFileSync(ledger.baselineFile, 'utf8'));
assert.deepEqual(validateDailyAvlakQuality(ledger, baseline, meralar), []);
const check = (mutate, message) => {
  const changed = structuredClone(ledger), before = structuredClone(baseline), routes = structuredClone(meralar);
  mutate(changed, before, routes);
  assert(validateDailyAvlakQuality(changed, before, routes).some(error => error.includes(message)), message);
};
check((l) => { l.indexReleaseCap = 4; }, 'ortak indeks kotası yanlış');
check((l) => { l.baselineMainSha = 'wrong'; }, 'main SHA');
check((l) => { l.publication = { verified: true, liveSha: 'wrong', mergedMainSha: 'main', newRoutesPublished: 0, existingRoutesReleased: 0 }; }, 'tam SHA');
check((l) => { l.newRouteSlugs = l.newRouteSlugs.slice(0, 1); l.shortfall = {}; }, 'eksik nedeni');
check((l, b) => { b.routeCount += 1; }, 'Baseline rota sayısı');
if (ledger.newRouteSlugs.length) check((l) => { l.newRouteSlugs = []; }, 'gerçek baseline farkıyla');
if (ledger.promotionSlugs.length) check((l) => { l.promotionSlugs = []; }, 'baseline farkıyla');
if (ledger.indexReleaseSlugs.length) check((l) => { l.indexReleaseSlugs = []; }, 'baseline farkıyla');
console.log('Günlük avlak/kalite politika regresyonları geçti.');
