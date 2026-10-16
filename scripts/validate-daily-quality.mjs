import {readFileSync} from 'node:fs';
import {execFileSync,spawnSync} from 'node:child_process';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateDailyQuality} from './daily-quality-policy.mjs';
const state=JSON.parse(readFileSync('.github/automation-state/olta-daily-quality.json','utf8'));
const baselineFile=state.dailyPolicy.baselineFile;
const baselineText=readFileSync(baselineFile,'utf8');
const baseline=JSON.parse(baselineText);
const errors=validateDailyQuality(state,baseline,meralar);
if(process.env.GITHUB_EVENT_NAME==='pull_request'){
  if(!/^\.github\/automation-state\/olta-daily-baseline-\d{4}-\d{2}-\d{2}\.json$/.test(baselineFile))errors.push('Günlük baseline dosya yolu geçersiz.');
  else try{
    const git=process.env.OLTA_GIT_BIN||'git';
    execFileSync(git,['fetch','--no-tags','--depth=1','origin','main'],{stdio:'pipe'});
    const object=`FETCH_HEAD:${baselineFile}`;
    const found=spawnSync(git,['cat-file','-e',object],{encoding:'utf8'});
    if(found.error)throw found.error;
    if(found.status===0){
      const committed=execFileSync(git,['show',object],{encoding:'utf8'});
      if(committed!==baselineText)errors.push('Günlük baseline main üzerinde zaten var; aynı gün değiştirilemez.');
    }else if(found.status!==1)throw new Error(found.stderr||`git cat-file çıkışı ${found.status}`);
  }catch(error){errors.push(`Main baseline bütünlük denetimi başarısız: ${error.message}`);}
}
for(const e of errors)console.error(e);
console.log(`Uygun aday incelemesi ${state.stage2.eligibleReviewed}; gerçek confidence terfisi ${state.stage2.actualConfidencePromotions}/${state.dailyPolicy.actualConfidencePromotionsTarget}; maintenance ${state.stage2.maintenanceOnly}; günlük salım ${state.stage2.indexReleasedSlugs.length}; hold ${state.dailyPolicy.holdSlugs.length}. ${errors.length} politika hatası.`);
if(errors.length)process.exit(1);
