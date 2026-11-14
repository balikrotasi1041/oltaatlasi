// A documented species/identity improvement may remain C/HOLD while access is unresolved.
// This predicate never authorizes publication or changes the grade itself.
export function isEvidenceBackedCHold(route) {
  const assessment = route.qualityAssessment;
  const profile = route.confidenceProfile;
  const sources = new Set((route.sources || []).map(source => source.url));
  return route.indexing === 'hold' && route.confidence === 'C' && route.qualityGrade === 'C'
    && assessment?.model === 'expanded-v2' && assessment.identityVerified === true
    && assessment.speciesRouteSpecific === true && assessment.safePublicAccessVerified === false
    && assessment.unresolvedRisks?.some(risk => typeof risk === 'string' && risk.trim().length > 0)
    && profile?.identity.level === 'strong' && profile.species.level === 'strong'
    && profile.access.level === 'unverified' && Boolean(profile.access.note?.trim())
    && profile.field.level === 'unverified' && ['partial', 'strong'].includes(profile.legal.level)
    && route.fish?.length > 0 && route.fishEvidence?.length === route.fish.length
    && route.fishEvidence.every(item => sources.has(item.sourceUrl) && Boolean(item.note?.trim()));
}
