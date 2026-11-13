const isFullSha = value => typeof value === 'string' && /^[a-f0-9]{40}$/i.test(value);

export function resolveReleaseSha(checkoutSha, environmentShas = []) {
  const candidates = environmentShas.filter(isFullSha).map(value => value.toLowerCase());
  const checkout = isFullSha(checkoutSha) ? checkoutSha.toLowerCase() : null;
  const sha = checkout || candidates[0];
  if (!sha) throw new Error('A full checkout SHA is required for production verification.');
  if (candidates.some(candidate => candidate !== sha)) {
    throw new Error('Release environment SHA does not match the checked-out source.');
  }
  return sha;
}
