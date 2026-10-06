import assert from "node:assert/strict";
import test from "node:test";
import { academicEvidenceMatchesRoute } from "./national-research-matchers.mjs";
const route={name:"Abant Gölü"};
const evidence={evidenceLevel:"Rota adıyla eşleşen akademik yayın",sourceLabel:"Türkiye’nin Endemik ve Egzotik Alabalıkları",note:"Örnekleme alanı tam metinden ayrıca doğrulanmalıdır."};
test("abstract-only route match retains its actual source text",()=>{
  assert.equal(academicEvidenceMatchesRoute(route,evidence),false);
  assert.equal(academicEvidenceMatchesRoute(route,{...evidence,sourceExcerpt:"Abant Gölü alabalık popülasyonları incelenmiştir."}),true);
});
test("unrelated abstracts and generic water names do not pass",()=>{
  assert.equal(academicEvidenceMatchesRoute(route,{...evidence,sourceExcerpt:"İznik Gölü örnekleri incelenmiştir."}),false);
  assert.equal(academicEvidenceMatchesRoute({name:"Balık Gölü"},{...evidence,sourceExcerpt:"Balık Gölü"}),false);
});
test("distinctive title matches remain supported",()=>{
  assert.equal(academicEvidenceMatchesRoute(route,{...evidence,sourceLabel:"Abant Gölü balıkları"}),true);
});
