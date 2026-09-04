import type { EnrichedMera, FishEvidence } from "./meralar-tumu-core";

const targetSlugs = [
  "ankara-500km-bolu-buyukgol",
  "ankara-500km-bolu-deringol",
  "ankara-500km-adiyaman-karahuyuk-goleti",
] as const;

const scientificNameFor = (name: string) => name === "Sazan" ? "Cyprinus carpio" : null;

const normalizeEvidence = (route: EnrichedMera): FishEvidence[] => {
  const existing = new Map((route.fishEvidence || []).map((item) => [item.name, item]));
  const fallbackSource = route.sources?.[0];
  if (!fallbackSource) throw new Error(`4 Eylül Stage4 tür kanıtı kaynağı yok: ${route.slug}`);

  return route.fish.map((name) => {
    const previous = existing.get(name);
    const previousLevel = previous?.evidenceLevel || "Rota özelinde kaynaklı kayıt";
    const previousNote = previous?.note || fallbackSource.note || "";
    return {
      name,
      scientificName: previous?.scientificName ?? scientificNameFor(name),
      evidenceLevel: /olasılık/i.test(previousLevel) ? previousLevel : `${previousLevel} · tür olasılığı`,
      sourceLabel: previous?.sourceLabel || fallbackSource.label,
      sourceUrl: previous?.sourceUrl || fallbackSource.url,
      note: /olasılık/i.test(previousNote)
        ? previousNote
        : `${previousNote} Bu kanıt türün bu su gövdesinde bulunma olasılığını destekler; güncel stok yoğunluğu veya av başarısı garantisi değildir.`.trim(),
      recordCount: previous?.recordCount ?? null,
      distanceKm: previous?.distanceKm ?? null,
    };
  });
};

export const applyDailyQuality20260904Stage4EvidenceFix = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of targetSlugs) {
    const route = routeMap.get(slug);
    if (!route) throw new Error(`4 Eylül Stage4 tür kanıtı hedefi yok: ${slug}`);
    if (route.confidence !== "C") throw new Error(`4 Eylül Stage4 tür kanıtı yalnız C yükseltmeye uygulanır: ${slug} (${route.confidence})`);
    routeMap.set(slug, { ...route, fishEvidence: normalizeEvidence(route) });
  }
  return routeMap;
};