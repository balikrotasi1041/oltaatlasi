import type { EnrichedMera, FishEvidence, ResearchSource } from "./meralar-tumu-core";

const evidenceSlugs = [
  "ankara-500km-bolu-buyukgol",
  "ankara-500km-bolu-deringol",
  "ankara-500km-adiyaman-karahuyuk-goleti",
] as const;

const narrativeSlugs = [
  "ulusal-adiyaman-cat-baraj-golu",
  "ulusal-agri-balik-golu",
  "ulusal-ardahan-aktas-golu",
  "ulusal-ardahan-posof-cayi",
  "ulusal-bitlis-van-golu-tatvan-kiyisi",
  "ulusal-denizli-adiguzel-baraj-golu",
  "ulusal-elazig-cip-baraj-golu",
  "ulusal-erzurum-demirdoven-baraj-golu",
  "ulusal-eskisehir-porsuk-baraj-golu",
  "ulusal-gaziantep-kayacik-baraj-golu",
  "ulusal-nigde-gumusler-baraj-golu",
  "ulusal-sivas-delice-baraj-golu-sivas",
] as const;

const coordinatePatches: Record<string, {lat:number; lng:number; source:ResearchSource; note:string}> = {
  "ulusal-ardahan-aktas-golu": {
    lat:41.1177,
    lng:42.8056,
    source:{label:"Açık harita - Aktaş Gölü genel konumu",url:"https://worldguide.com.tr/cografya/aktas-golu",note:"Aktaş Gölünün 41.1177, 42.8056 genel su konumunu ikincil harita verisiyle destekler; sınır hattı, hassas kuş adaları veya kıyı girişi değildir."},
    note:"Koordinat yalnız Aktaş Gölünün Türkiye-Gürcistan sınırındaki genel su gövdesini planlama amacıyla gösterir. Sınır güvenliği, kuş üreme alanları ve mikro kıyı erişimi için kullanılmaz."
  },
  "ulusal-ardahan-posof-cayi": {
    lat:41.55964,
    lng:42.82825,
    source:{label:"Açık harita - Posof Çayı genel konumu",url:"https://mapcarta.com/34741212",note:"Posof Çayı adına bağlı 41.55964, 42.82825 genel konum referansını açık harita/GeoNames tabanlı veriyle destekler; kesin olta cebi, araç girişi veya mülkiyet sınırı değildir."},
    note:"Koordinat Posof Çayı için yalnız genel planlama referansıdır. Akarsu yatağı, sınır yakınlığı, özel parsel ve taşkın/debi koşulları hareket günü ayrıca kontrol edilir."
  },
  "ulusal-sivas-delice-baraj-golu-sivas": {
    lat:39.91556,
    lng:38.10977,
    source:{label:"Açık harita - Delice Barajı genel konumu",url:"https://mapcarta.com/34339312",note:"İmranlı Delice Barajını 39.91556, 38.10977 genel su yapısı konumunda eşler; ikincil harita verisidir ve park/kıyı giriş izni değildir."},
    note:"Koordinat İmranlı Delice Barajının genel planlama konumudur. Sulama tesisi, servis yolu, özel parsel veya güvenli kıyı girişi olarak yorumlanmaz."
  },
};

const scientificNameFor = (name: string) => name === "Sazan" ? "Cyprinus carpio" : null;
const uniqSources = (sources: ResearchSource[]) => [...new Map(sources.map((source)=>[source.url,source])).values()];

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
      evidenceLevel: /olasılık/i.test(previousLevel) ? previousLevel : `${previousLevel} · tür olasılık kanıtı`,
      sourceLabel: previous?.sourceLabel || fallbackSource.label,
      sourceUrl: previous?.sourceUrl || fallbackSource.url,
      note: /olasılık/i.test(previousNote)
        ? previousNote
        : `${previousNote} Bu kayıt tür varlığı için olasılık kanıtıdır; güncel stok yoğunluğu veya av başarısı garantisi değildir.`.trim(),
      recordCount: previous?.recordCount ?? null,
      distanceKm: previous?.distanceKm ?? null,
    };
  });
};

export const applyDailyQuality20260904Stage4EvidenceFix = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of evidenceSlugs) {
    const route = routeMap.get(slug);
    if (!route) throw new Error(`4 Eylül Stage4 tür kanıtı hedefi yok: ${slug}`);
    if (route.confidence !== "C") throw new Error(`4 Eylül Stage4 tür kanıtı yalnız C yükseltmeye uygulanır: ${slug} (${route.confidence})`);
    routeMap.set(slug, { ...route, fishEvidence: normalizeEvidence(route) });
  }

  for (const slug of narrativeSlugs) {
    const route = routeMap.get(slug);
    if (!route) throw new Error(`4 Eylül Stage4 anlatı hedefi yok: ${slug}`);
    if (route.confidence !== "C") throw new Error(`4 Eylül Stage4 anlatı düzeltmesi yalnız C yükseltmeye uygulanır: ${slug} (${route.confidence})`);
    const evidenceSummary = route.researchSummary || route.verification;
    const coordinatePatch = coordinatePatches[slug];
    routeMap.set(slug, {
      ...route,
      ...(coordinatePatch ? {lat:coordinatePatch.lat,lng:coordinatePatch.lng,sources:uniqSources([...(route.sources||[]),coordinatePatch.source]),navigationNote:coordinatePatch.note} : {}),
      summary:`${route.name}, rota kimliği, tür olasılığı, genel kullanım/erişim bağlamı ve riskleri çoklu kaynaklarla çaprazlanmış Güven C planlama rotasıdır; mikro kıyı erişimi ayrıca doğrulanmalıdır.`,
      longIntro:[
        `${route.name}, 4 Eylül 2026 kalite çalışmasında Güven C düzeyine çıkarılırken yalnız rota özelindeki kanıtlar esas alındı. ${evidenceSummary}`,
        `Güven C, her kıyının sürekli açık olduğu veya av başarısının garanti edildiği anlamına gelmez. Genel konum, güncel 6/2 Tebliğ, yerel saha kuralları, özel mülkiyet, su seviyesi ve işletme ya da koruma sınırları hareket günü yeniden kontrol edilmelidir.`
      ],
    });
  }
  return routeMap;
};