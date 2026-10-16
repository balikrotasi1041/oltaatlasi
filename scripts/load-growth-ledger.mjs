import {readFileSync,readdirSync} from 'node:fs';

export function loadLatestGrowthLedger(){
  const dir='.github/automation-state';
  const files=readdirSync(dir).filter(name=>/^olta-growth-daily-\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort();
  if(!files.length)throw new Error('Günlük büyüme kaydı bulunamadı.');
  const ledger=JSON.parse(readFileSync(`${dir}/${files.at(-1)}`,'utf8'));
  if(!/^\.github\/automation-state\/olta-growth-baseline-\d{4}-\d{2}-\d{2}\.json$/.test(ledger.baselineFile))throw new Error('Büyüme baseline yolu geçersiz.');
  const baselineText=readFileSync(ledger.baselineFile,'utf8');
  const baseline=JSON.parse(baselineText);
  return {ledger,baseline,baselineText};
}
