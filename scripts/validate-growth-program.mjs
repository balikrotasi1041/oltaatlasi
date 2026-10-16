import {execFileSync} from 'node:child_process';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateGrowthProgram} from './growth-program-policy.mjs';
import {loadLatestGrowthLedger} from './load-growth-ledger.mjs';

const {ledger,baseline,baselineText}=loadLatestGrowthLedger();
const errors=validateGrowthProgram(ledger,baseline,meralar);
if(process.env.GITHUB_EVENT_NAME==='pull_request'){
  try{
    const git=process.env.OLTA_GIT_BIN||'git';
    execFileSync(git,['fetch','--no-tags','--depth=1','origin','main'],{stdio:'pipe'});
    const prior=execFileSync(git,['ls-tree','--name-only','FETCH_HEAD','--',ledger.baselineFile],{encoding:'utf8'}).trim();
    if(prior===ledger.baselineFile){
      const committed=execFileSync(git,['show',`FETCH_HEAD:${ledger.baselineFile}`],{encoding:'utf8'});
      if(committed!==baselineText)errors.push('Günün büyüme baselineı main üzerinde zaten var; yeniden yazılamaz.');
    }
  }catch(error){errors.push(`Büyüme baseline bütünlük denetimi başarısız: ${error.message}`);}
}
for(const error of errors)console.error(error);
console.log(`Büyüme: ${ledger.newPagesCreated} yeni, ${ledger.noindexToIndex} eski salım, teknik artış ${ledger.technicalIndexableGain}; ${errors.length} hata.`);
if(errors.length)process.exit(1);
