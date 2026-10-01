import {readFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateDailyQuality} from './daily-quality-policy.mjs';
const state=JSON.parse(readFileSync('.github/automation-state/olta-daily-quality.json','utf8'));
const baseline=JSON.parse(readFileSync(state.dailyPolicy.baselineFile,'utf8'));
const errors=validateDailyQuality(state,baseline,meralar);
for(const e of errors)console.error(e);
console.log(`Günlük kalite ${state.stage2.promotedCount}/${state.dailyPolicy.qualityUpgradesTarget}; günlük salım ${state.stage2.indexReleasedSlugs.length}; yeni çalışma hold ${state.dailyPolicy.holdSlugs.length}. ${errors.length} politika hatası. Hedef eksikliği başarı olarak raporlanmaz.`);
if(errors.length)process.exit(1);
