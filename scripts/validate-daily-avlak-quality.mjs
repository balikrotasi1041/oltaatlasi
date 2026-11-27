import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import { meralar } from '../src/data/meralar-tumu.ts';
import { validateDailyAvlakQuality } from './daily-avlak-quality-policy.mjs';

const directory = '.github/automation-state';
const files = readdirSync(directory).filter(name => /^olta-avlak-kalite-daily-\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort();
if (!files.length) throw new Error('Güncel avlak/kalite günlük kaydı bulunamadı.');
const ledgerFile = files.at(-1);
const ledger = JSON.parse(readFileSync(`${directory}/${ledgerFile}`, 'utf8'));
if (!/^\d{4}-\d{2}-\d{2}$/.test(ledger.date)
  || ledgerFile !== `olta-avlak-kalite-daily-${ledger.date}.json`
  || ledger.baselineFile !== `${directory}/olta-growth-baseline-${ledger.date}.json`) {
  throw new Error('Günlük kayıt ve baseline dosya tarihleri eşleşmeli.');
}
const baselineText = readFileSync(ledger.baselineFile, 'utf8');
const baseline = JSON.parse(baselineText);
const errors = validateDailyAvlakQuality(ledger, baseline, meralar);
if (process.env.GITHUB_EVENT_NAME === 'pull_request') {
  try {
    const git = process.env.OLTA_GIT_BIN || 'git';
    execFileSync(git, ['fetch', '--no-tags', '--depth=1', 'origin', 'main'], { stdio: 'pipe' });
    const mainLedgerPath = execFileSync(git, ['ls-tree', '-r', '--name-only', 'FETCH_HEAD', '--', directory + '/'], { encoding: 'utf8' })
      .split('\n').filter(name => /^\.github\/automation-state\/olta-avlak-kalite-daily-\d{4}-\d{2}-\d{2}\.json$/.test(name)).sort().at(-1);
    if (!mainLedgerPath) throw new Error('Main günlük kaydı bulunamadı.');
    if (ledgerFile < mainLedgerPath.split('/').at(-1)) errors.push('Main üzerindeki son günlük kayıt geriye alınamaz.');
    const mainLedger = JSON.parse(execFileSync(git, ['show', `FETCH_HEAD:${mainLedgerPath}`], { encoding: 'utf8' }));
    const mainBaseline = JSON.parse(execFileSync(git, ['show', `FETCH_HEAD:${mainLedger.baselineFile}`], { encoding: 'utf8' }));
    const hasNew = mainBaseline.compact === true
      ? ledger.newRouteSlugs.some(slug => !mainLedger.newRouteSlugs.includes(slug))
      : (() => {
          const onMain = new Set([...Object.keys(mainBaseline.routes), ...mainLedger.newRouteSlugs]);
          return meralar.some(route => !onMain.has(route.slug));
        })();
    const istanbulToday = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul', dateStyle: 'short' }).format(new Date());
    if (hasNew && ledger.date !== istanbulToday) errors.push('Yeni avlaklar yalnızca güncel Türkiye tarihine kaydedilebilir.');
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
