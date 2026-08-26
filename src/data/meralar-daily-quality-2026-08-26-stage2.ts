import type { EnrichedMera } from "./meralar-tumu-core";

export const promotedSlugs20260826Stage2 = [
  "ulusal-kastamonu-cigdem-baraj-golu-kastamonu",
  "ulusal-erzincan-karasu-nehri-erzincan-hatti",
  "ulusal-ardahan-kura-nehri-ardahan-hatti",
  "ulusal-hakkari-zap-suyu-hakkari-hatti",
  "ulusal-erzincan-tercan-baraj-golu",
  "ulusal-artvin-borcka-baraj-golu",
  "ulusal-aksaray-ciftevi-baraj-golu",
] as const;

const reviewNote = "26 Ağustos 2026 masa başı kanıt turu: rota kimliği, genel konum, kamusal genel erişim bağlamı, güncel amatör avcılık mevzuatı, saha riski ve tür olasılığı ayrı kanıt katmanlarıyla yeniden değerlendirildi. Mikro kıyı/park/patika kesinliği verilmez; saha tabelası, özel/kiralı alan ve güncel yasaklar hareket günü ayrıca kontrol edilmelidir.";

export const applyDailyQualityStage220260826 = (routeMap: Map<string, EnrichedMera>) => {
  for (const slug of promotedSlugs20260826Stage2) {
    const route = routeMap.get(slug);
    if (!route) throw new Error(`26 Ağustos Aşama 2 hedefi bulunamadı: ${slug}`);
    if (route.confidence !== "D") throw new Error(`26 Ağustos Aşama 2 yalnız gerçek D→C+ sayar: ${slug} (${route.confidence})`);

    const sourceHosts = new Set((route.sources || []).map((s) => {
      try { return new URL(s.url).hostname.replace(/^www\./, ""); } catch { return ""; }
    }).filter(Boolean));
    if (sourceHosts.size < 2) throw new Error(`26 Ağustos Aşama 2 bağımsız kaynak ailesi yetersiz: ${slug}`);
    if (!route.locationPrecision) throw new Error(`26 Ağustos Aşama 2 locationPrecision eksik: ${slug}`);
    if (!(route.transport || route.navigationNote)) throw new Error(`26 Ağustos Aşama 2 erişim bağlamı eksik: ${slug}`);
    if (!(route.fish?.length || route.fishEvidence?.length)) throw new Error(`26 Ağustos Aşama 2 tür kanıtı eksik: ${slug}`);

    routeMap.set(slug, {
      ...route,
      confidence: "C",
      verification: `${route.verification || ""}${route.verification ? "\n\n" : ""}${reviewNote}`,
      researchedAt: "2026-08-26",
      updatedAt: "2026-08-26",
      navigationVerified: false,
      confidenceProfile: {
        ...(route.confidenceProfile || {
          model: "evidence-v1" as const,
          identity: { level: "partial" as const, label: "Çok kaynaklı rota kimliği", note: "Rota kimliği ve genel konum kaynaklarla eşleşir; mikro kıyı kesinliği verilmez." },
          legal: { level: "partial" as const, label: "Güncel mevzuat kontrolü", note: "6/2 Tebliğ ve rota kaynakları birlikte değerlendirilir; saha tabelası ve yerel yasaklar önceliklidir." },
          access: { level: "partial" as const, label: "Genel erişim bağlamı", note: "Kamusal genel yaklaşım doğrulanır; son park/patika ve kıyı geçişi saha teyitli değildir." },
          species: { level: "partial" as const, label: "Tür olasılığı kanıtlı", note: "Akademik/resmî/balıklandırma kayıtları tür olasılığıdır; av garantisi değildir." },
          field: { level: "unverified" as const, label: "Saha doğrulaması yok", note: "Güncel bariyer, tabela, su kotu ve kıyı güvenliği hareket günü kontrol edilmelidir." },
          reviewedAt: "2026-08-26",
        }),
        overall: "C",
        reviewedAt: "2026-08-26",
      },
    });
  }
  return routeMap;
};
