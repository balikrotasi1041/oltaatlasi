import {readFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {validateGrowthProgram} from './growth-program-policy.mjs';

const ledger=JSON.parse(readFileSync('.github/automation-state/olta-growth-daily-2026-10-16.json','utf8'));
const baseline=JSON.parse(readFileSync(ledger.baselineFile,'utf8'));
const errors=validateGrowthProgram(ledger,baseline,meralar);
for(const error of errors)console.error(error);
console.log(`Büyüme: ${ledger.newPagesCreated} yeni, ${ledger.noindexToIndex} eski salım, teknik artış ${ledger.technicalIndexableGain}; ${errors.length} hata.`);
if(errors.length)process.exit(1);
