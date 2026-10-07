import {readFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateDailyQuality} from './daily-quality-policy.mjs';
const state=JSON.parse(readFileSync('.github/automation-state/olta-daily-quality.json','utf8'));
const baseline=JSON.parse(readFileSync(state.dailyPolicy.baselineFile,'utf8'));
const errors=validateDailyQuality(state,baseline,meralar);
for(const e of errors)console.error(e);
console.log(`Uygun aday incelemesi ${state.stage2.eligibleReviewed}; gerçek confidence terfisi ${state.stage2.actualConfidencePromotions}/${state.dailyPolicy.actualConfidencePromotionsTarget}; maintenance ${state.stage2.maintenanceOnly}; günlük salım ${state.stage2.indexReleasedSlugs.length}; hold ${state.dailyPolicy.holdSlugs.length}. ${errors.length} politika hatası.`);
if(errors.length)process.exit(1);
