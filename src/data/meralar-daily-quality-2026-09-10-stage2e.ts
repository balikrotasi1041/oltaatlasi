import type { EnrichedMera, ResearchSource } from "./meralar-tumu-core";

const teblig:ResearchSource={
  label:"Tarım ve Orman Bakanlığı - Amatör Balıkçılık Mevzuatı",
  url:"https://www.tarimorman.gov.tr/BSGM/Menu/95/Amator-Balikcilik",
  note:"2024-2028 genel amatör avcılık çerçevesidir; yerel koruma, taşkın koruma, işletme ve saha kararları ayrıca uygulanır."
};

export const promoted20260910Stage2E=["ulusal-karabuk-arac-cayi"] as const;

export const applyDailyQuality20260910Stage2E=(routeMap:Map<string,EnrichedMera>)=>{
  const slug=promoted20260910Stage2E[0];
  const previous=routeMap.get(slug);
  if(!previous)throw new Error(`2026-09-10 Stage2E hedefi yok: ${slug}`);
  if(previous.confidence!=="D")throw new Error(`2026-09-10 gerçek D->C önkoşulu bozuldu: ${slug} (${previous.confidence})`);
  if(!(previous.fishEvidence?.length))throw new Error(`2026-09-10 Stage2E tür kanıtı eksik: ${slug}`);

  const ktb:ResearchSource={
    label:"Karabük İl Kültür ve Turizm Müdürlüğü - Akarsular",
    url:"https://karabuk.ktb.gov.tr/TR-63708/akarsular.html",
    note:"Araç Çayı'nı Karabük'ün önemli akarsularından biri olarak tanımlar; Ilgaz Dağları kaynaklı hattın Safranbolu güneyinden geçip Karabük'te Soğanlı Çayı ile birleştiğini resmî olarak doğrular. Mikro kıyı erişimi değildir."
  };
  const ilTarim:ResearchSource={
    label:"Karabük İl Tarım ve Orman Müdürlüğü - İl Hakkında",
    url:"https://karabuk.tarimorman.gov.tr/Menu/93/Il-Hakkinda",
    note:"Araç Çayı'nı Karabük ilinin başlıca akarsuları arasında sayar; il ve su varlığı kimliği için bağımsız resmî kaynak ailesidir."
  };
  const academic:ResearchSource={
    label:"DergiPark - Araç Çayı Trichoptera ve su kalitesi çalışması",
    url:"https://dergipark.org.tr/tr/pub/kastorman/article/705683",
    note:"Kastamonu-Karabük Araç Çayı'nda çok istasyonlu akademik saha çalışmasıdır; sucul habitatın rota özelinde araştırıldığını doğrular. Balık türü kanıtı yerine geçmez; mevcut fishEvidence ayrı tutulur."
  };
  const publicUse:ResearchSource={
    label:"Karabük kamu-STK ortak Araç Çayı temizlik çalışması (AA kaynaklı haber)",
    url:"https://www.haberler.com/guncel/karabuk-te-arac-cayi-temizligi-ve-hafiz-ogrencilerin-icazet-toreni-18691233-haberi/",
    note:"30 Mayıs 2025'te Valilik, Belediye, Çevre İl Müdürlüğü, AFAD ve İHH işbirliğiyle Karabük Üniversitesi çevresinden geçen Araç Çayı bölümünde çalışma yapıldığını kaydeder. Bu yalnız genel kamusal kıyı/kurumsal erişim bağlamıdır; olta izni, park veya kesin kıyı girişi değildir."
  };

  const sources=[...new Map([...(previous.sources||[]),ktb,ilTarim,academic,publicUse,teblig].filter((s)=>s?.url).map((s)=>[s.url,s])).values()];
  const risk="Araç Çayı kent, tarım ve taşkın koruma koridorlarından geçer. Tahkimat, köprü altı, taşkın yapıları, özel/tarımsal parseller, hızlı akım, yağış sonrası seviye artışı ve çalışma alanları nedeniyle genel rota bilgisi belirli bir kıyı cebinin kamusal ve güvenli olduğu anlamına gelmez; güncel tabela ve yerel kısıtlar hareket günü kontrol edilmelidir.";

  routeMap.set(slug,{
    ...previous,
    name:"Araç Çayı",
    province:"Karabük",
    waterType:"Akarsu",
    confidence:"C",
    locationPrecision:"Genel bölge",
    navigationVerified:false,
    summary:"Araç Çayı'nın Karabük'teki su varlığı ve genel güzergâhı iki ayrı resmî kamu kaynağıyla, sucul habitatı akademik saha çalışmasıyla ve mevcut rota-özel tür kanıtlarıyla çaprazlandı. Güven C mikro kıyı, park veya av garantisi değildir.",
    verification:`2026-09-10 Stage 2 çok kaynaklı araştırma tamamlandı; Güven C. ${risk}`,
    updatedAt:"2026-09-10",
    researchedAt:"2026-09-10",
    researchStatus:"2026-09-10 Stage 2: resmî kimlik + akademik sucul habitat + mevcut rota-özel tür kanıtı + genel kamusal kullanım bağlamı çaprazlandı.",
    researchSummary:`Karabük İl Kültür ve Turizm Müdürlüğü ile İl Tarım Araç Çayı'nı Karabük'ün resmî akarsu sistemi içinde doğrular. 2020 hakemli çalışma Araç Çayı'nda çok istasyonlu sucul habitat araştırması yapar. Mevcut kayıt içindeki rota-özel fishEvidence korunur. 2025 kamu-STK temizlik çalışması yalnız üniversite çevresindeki genel kamusal/kurumsal kıyı bağlamını destekler; olta izni veya kesin kıyı erişimi değildir. ${risk}`,
    accessEvidence:[
      ...(previous.accessEvidence||[]),
      {label:"Genel kamusal/kurumsal kıyı bağlamı",value:"Karabük Üniversitesi çevresinden geçen Araç Çayı bölümü",sourceUrl:publicUse.url,note:"Kamu kurumlarının 2025 temizlik çalışması bu bölümde erişilebilir genel kıyı bağlamı gösterir; mikro giriş, park ve av yapılabilirlik saha teyitli değildir."}
    ],
    sources,
    cautions:[...new Set([...(previous.cautions||[]),risk,"6/2 Tebliğ ve varsa Karabük'e özgü güncel yerel kararlar av öncesinde yeniden kontrol edilmelidir."])],
    navigationNote:`Harita bilgisi Araç Çayı'nın Karabük içindeki genel akarsu koridorunu temsil eder; kesin park, yol sonu, özel mülk geçişi veya olta cebi değildir. ${risk}`,
    confidenceProfile:{
      model:"evidence-v1",
      overall:"C",
      identity:{level:"strong",label:"İki resmî kaynakla rota kimliği",note:"Karabük İl Kültür ve Turizm Müdürlüğü ile İl Tarım Araç Çayı'nı Karabük akarsu sistemi içinde açıkça doğrular."},
      legal:{level:"partial",label:"Genel mevzuat + yerel kontrol gerekli",note:"6/2 Tebliğ çerçevesi uygulanır; taşkın koruma, çalışma sahası, özel mülkiyet ve yerel kararlar ayrıca kontrol edilir."},
      access:{level:"partial",label:"Genel kamusal kıyı bağlamı",note:"2025 kamu-STK çalışması üniversite çevresi Araç Çayı bölümünde genel erişim bağlamını destekler; belirli kıyı cebi veya olta izni değildir."},
      species:{level:"strong",label:"Mevcut rota-özel tür kanıtı korunur",note:"Bu yükseltme yalnız mevcut kayıttaki kaynaklı fishEvidence bulunduğunda çalışır; habitat çalışması tek başına balık türü kanıtı sayılmaz."},
      field:{level:"unverified",label:"Saha doğrulaması yok",note:"Akım, taşkın, zemin, bariyer, tabela, mülkiyet ve son yaklaşım hareket günü kontrol edilmelidir."},
      reviewedAt:"2026-09-10"
    }
  });
  return routeMap;
};
