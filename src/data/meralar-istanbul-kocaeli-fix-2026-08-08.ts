import type { Mera } from "./meralar";
import { istanbulKocaeliIyilestirmeleri20260808 } from "./meralar-istanbul-kocaeli-2026-08-08";

export const istanbulKocaeliIyilestirmeleriFix20260808:Mera[]=istanbulKocaeliIyilestirmeleri20260808.map((route)=>{
  const draft=route as Mera & {shore?:string;crowd?:string;intro?:string[];planning?:string[];seasonal?:string[]};
  return {
    ...route,
    shoreProfile:draft.shore||route.shoreProfile,
    crowdNote:draft.crowd||route.crowdNote,
    longIntro:draft.intro?.length?draft.intro:route.longIntro,
    planningNotes:[...(draft.planning?.length?draft.planning:route.planningNotes),"Gecelik konaklama gerekiyorsa ilgili ilçe merkezindeki ruhsatlı seçeneklerin güncel durumu ayrıca kontrol edilmelidir; sahil parkında geceleme veya kamp hakkı varsayılmaz."],
    seasonalNotes:draft.seasonal?.length?draft.seasonal:route.seasonalNotes,
  };
});
