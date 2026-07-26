export type DunyaBalikcilikYazisi = {
  slug: string;
  title: string;
  country: string;
  location: string;
  species: string;
  angler: string;
  summary: string;
  publishedAt: string;
  observedAt: string;
  sourceCheckedAt: string;
  sourcePlatform: string;
  sourceUrl: string;
  sourceLabel: string;
  sourceAuthor: string;
  cover: string;
  body: string[];
  tags: string[];
  mediaMode: "original-illustration" | "licensed-image" | "youtube-embed" | "source-link-only";
  embedUrl?: string;
  licenseName?: string;
  licenseUrl?: string;
  licenseCredit?: string;
  licenseChanges?: string;
};

/**
 * Telif varsayılanı:
 * - Üçüncü taraf fotoğrafı indirilmez veya yeniden barındırılmaz.
 * - Her yazı yerel, özgün bir Olta Atlası illüstrasyonu kullanır.
 * - Kaynak içerik yalnızca bağlantı ile gösterilir; YouTube varsa yalnızca resmî iframe gömme bağlantısı kullanılabilir.
 * - Lisanslı görsel kullanılacaksa lisans adı, bağlantısı, eser sahibi ve yapılan değişiklikler zorunludur.
 */
export const dunyaBalikcilikYazilari: DunyaBalikcilikYazisi[] = [];
