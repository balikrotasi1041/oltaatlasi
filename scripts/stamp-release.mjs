import {mkdirSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
// Both GitHub's direct deploy and Cloudflare's repository build must stamp their checkout.
let sha=process.env.WORKERS_CI_COMMIT_SHA||process.env.CF_PAGES_COMMIT_SHA||process.env.GITHUB_SHA;
if(!sha)sha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
if(!/^[a-f0-9]{40}$/i.test(sha))throw new Error('A full checkout SHA is required for production verification.');
mkdirSync('public/__deploy',{recursive:true});
writeFileSync('public/__deploy/version.txt',`${sha}\n`);
console.log(`Release marker: ${sha}`);
