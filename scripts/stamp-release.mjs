import {mkdirSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {resolveReleaseSha} from './release-sha.mjs';
// Both GitHub's direct deploy and Cloudflare's repository build must stamp their checkout.
// A Cloudflare deploy hook can supply a branch ref instead of a full commit SHA.
let checkoutSha;
try { checkoutSha=execFileSync(process.env.OLTA_GIT_BIN||'git',['rev-parse','HEAD'],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim(); } catch {}
const sha=resolveReleaseSha(checkoutSha,[process.env.WORKERS_CI_COMMIT_SHA,process.env.CF_PAGES_COMMIT_SHA,process.env.GITHUB_SHA]);
mkdirSync('public/__deploy',{recursive:true});
writeFileSync('public/__deploy/version.txt',`${sha}\n`);
console.log(`Release marker: ${sha}`);
