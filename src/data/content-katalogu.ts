import { baliklar as temelBaliklar } from "./baliklar";
import { baliklarEk20260823 } from "./baliklar-ek-2026-08-23";
import { rehberler as temelRehberler } from "./rehber-katalogu";
import { rehberlerEk20260823 } from "./rehberler-ek-2026-08-23";

const assertUnique=(label:string,slugs:string[])=>{
  const seen=new Set<string>();
  for(const slug of slugs){if(seen.has(slug))throw new Error(`${label} duplicate slug: ${slug}`);seen.add(slug);}
};

export const baliklar=[...temelBaliklar,...baliklarEk20260823];
export const rehberler=[...rehberlerEk20260823,...temelRehberler];
assertUnique("Balık",baliklar.map((item)=>item.slug));
assertUnique("Rehber",rehberler.map((item)=>item.slug));
export const rehberKategorileri=[...new Set(rehberler.map((item)=>item.category))].sort((a,b)=>a.localeCompare(b,"tr"));
