import type { Mera } from "./meralar";
import { istanbulKocaeliIyilestirmeleri20260810Evening, istanbulKocaeliYeni20260810Evening } from "./meralar-istanbul-kocaeli-2026-08-10-evening";

const wrong="https://www.kocaeli.bel.tr/haber/kandira-sahillerine-ulasim-artik-daha-kolay-51318.html";
const correct="https://www.kocaeli.bel.tr/amp/haber/800ckda-tum-yollar-kandira-sahillerine-cikacak-51322.html";
const corrected=(route:Mera):Mera=>({...route,sources:route.sources.map((source)=>source.url===wrong?{...source,url:correct}:source)});

export const istanbulKocaeliIyilestirmeleri20260810Final:Mera[]=istanbulKocaeliIyilestirmeleri20260810Evening.map(corrected);
export const istanbulKocaeliYeni20260810Final:Mera[]=istanbulKocaeliYeni20260810Evening.map(corrected);
