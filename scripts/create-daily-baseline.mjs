import {execFileSync} from 'node:child_process';
import {existsSync,writeFileSync} from 'node:fs';
import {meralar} from '../src/data/meralar-tumu.ts';
import {routeSlugsSha256,routeStatesSha256} from './daily-quality-policy.mjs';

const date=process.argv[2];
if(!/^\d{4}-\d{2}-\d{2}$/.test(date||''))throw new Error('Kullanım: node --import tsx scripts/create-daily-baseline.mjs YYYY-MM-DD');
const git=process.env.OLTA_GIT_BIN||'git';
const readGit=(...args)=>execFileSync(git,args,{encoding:'utf8'}).trim();
readGit('fetch','origin','main');
const head=readGit('rev-parse','HEAD');
if(head!==readGit('rev-parse','origin/main'))throw new Error('Baseline için checkout güncel origin/main commitinde olmalı.');
if(readGit('status','--porcelain','--untracked-files=no'))throw new Error('Baseline için izlenen dosyalarda değişiklik olmamalı.');
const path=`.github/automation-state/olta-daily-baseline-${date}.json`;
if(existsSync(path))throw new Error(`${path} zaten var; aynı gün baseline yenilenemez.`);
const routes=Object.fromEntries(meralar.map(r=>[r.slug,{confidence:r.confidence,...(r.qualityGrade?{qualityGrade:r.qualityGrade}:{}),...(r.indexing?{indexing:r.indexing}:{})}]));
const snapshot={baselineDate:date,mainSha:head,routeCount:meralar.length,routeSlugsSha256:routeSlugsSha256(meralar),routeStatesSha256:routeStatesSha256(meralar),routes};
writeFileSync(path,`${JSON.stringify(snapshot,null,2)}\n`,{flag:'wx'});
console.log(`${path}: ${snapshot.routeCount} rota, main ${head}.`);
