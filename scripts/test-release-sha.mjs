import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveReleaseSha } from './release-sha.mjs';

const sha = 'ab1425b8745870479dc3172b3b309c8335561ce8';
const oldSha = '17d832a8a17f80c087250ce24a24e806a1a04a9d';
test('deploy hook branch references use the actual checkout commit', () => {
  assert.equal(resolveReleaseSha(sha, ['main', undefined, '']), sha);
  assert.equal(resolveReleaseSha(sha, ['refs/heads/main']), sha);
});
test('normal CI checkout and full environment SHA agree', () => {
  assert.equal(resolveReleaseSha(sha, [undefined, sha]), sha);
});
test('local builds use the checkout without CI variables', () => {
  assert.equal(resolveReleaseSha(sha), sha);
});
test('an archive build can use a full CI SHA without git metadata', () => {
  assert.equal(resolveReleaseSha(null, ['main', sha]), sha);
});
test('symbolic or abbreviated values alone never stamp a release', () => {
  assert.throws(() => resolveReleaseSha(null, ['main', 'ab1425b']), /full checkout SHA/);
});
test('a conflicting full SHA cannot silently mislabel the build', () => {
  assert.throws(() => resolveReleaseSha(sha, [oldSha]), /does not match/);
  assert.throws(() => resolveReleaseSha(null, [sha, oldSha]), /does not match/);
});
