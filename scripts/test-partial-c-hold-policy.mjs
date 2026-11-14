import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isEvidenceBackedCHold } from './partial-c-hold-policy.mjs';
const fixture = {indexing:'hold',confidence:'C',qualityGrade:'C',qualityAssessment:{model:'expanded-v2',identityVerified:true,speciesRouteSpecific:true,safePublicAccessVerified:false,unresolvedRisks:['Public access not verified']},confidenceProfile:{identity:{level:'strong'},species:{level:'strong'},legal:{level:'partial'},access:{level:'unverified',note:'Access unresolved'},field:{level:'unverified'}},fish:['Sazan'],fishEvidence:[{sourceUrl:'https://example.gov.tr/species',note:'Historical stocking, not permission'}],sources:[{url:'https://example.gov.tr/species'}]};
test('documented C improvement can remain HOLD with access unresolved',()=>assert.equal(isEvidenceBackedCHold(fixture),true));
for (const patch of [{indexing:'index'},{qualityGrade:'C+'},{confidence:'D'},{fishEvidence:[]},{sources:[]},{qualityAssessment:{...fixture.qualityAssessment,unresolvedRisks:[]}}, {confidenceProfile:{...fixture.confidenceProfile,species:{level:'unverified'}}}]) {
 test(`does not waive release or missing evidence: ${JSON.stringify(patch)}`,()=>assert.equal(Boolean(isEvidenceBackedCHold({...fixture,...patch})),false));
}
