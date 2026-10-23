import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { meralar } from '../src/data/meralar-tumu.ts';
import { validateDailyAvlakQuality } from './daily-avlak-quality-policy.mjs';

const directory = '.github/automation-state';
const files = readdirSync(directory).filter(name => /^olta-avlak-kalite-daily-\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort();
if (!files.length) throw new Error('Güncel avlak/kalite günlük kaydı bulunamadı.');
const ledger = JSON.parse(readFileSync(`${directory}/${files.at(-1)}`, 'utf8'));
if (!/^\.github\/automation-state\/olta-growth-baseline-\d{4}-\d{2}-\d{2}\.json$/.test(ledger.baselineFile)) throw new Error('Güncel baseline yolu geçersiz.');
const baselineText = readFileSync(ledger.baselineFile, 'utf8');
const baseline = JSON.parse(baselineText);
const errors = validateDailyAvlakQuality(ledger, baseline, meralar);
if (process.env.GITHUB_EVENT_NAME === 'pull_request') {
  try {
    const git = process.env.OLTA_GIT_BIN || 'git';
    execFileSync(git, ['fetch', '--no-tags', '--depth=1', 'origin', 'main'], { stdio: 'pipe' });
    const prior = execFileSync(git, ['ls-tree', '--name-only', 'FETCH_HEAD', '--', ledger.baselineFile], { encoding: 'utf8' }).trim();
    if (prior === ledger.baselineFile) {
      const committed = execFileSync(git, ['show', `FETCH_HEAD:${ledger.baselineFile}`], { encoding: 'utf8' });
      if (committed !== baselineText) errors.push('Günün baselineı main üzerinde zaten var; yeniden yazılamaz.');
    }
  } catch (error) { errors.push(`Main baseline bütünlük denetimi başarısız: ${error.message}`); }
}
for (const error of errors) console.error(error);
console.log(`23 Ekim sonrası günlük program: ${ledger.newRouteSlugs.length} yeni, ${ledger.promotionSlugs.length} gerçek terfi, ${ledger.indexReleaseSlugs.length}/${ledger.indexReleaseCap} ortak salım; ${errors.length} hata.`);
if (errors.length) process.exit(1);
