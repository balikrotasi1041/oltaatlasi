import type { Mera, SourceLink } from "./meralar";
import { kocaeliIyilestirmeler } from "./meralar-kocaeli-iyilestirmeler";
import { istanbulIyilestirmeler } from "./meralar-istanbul-iyilestirmeler";

const today="2026-08-06";
const kocaeliTur:SourceLink={label:"Kocaeli İl Tarım ve Orman Müdürlüğü – İzmit Körfezi türleri",url:"https://kocaeli.tarimorman.gov.tr/Haber/520/Hayalet-Aglardan-Sifir-Atiga",note:"İzmit Körfezi'nde raporlanan türleri bölgesel ölçekte destekler; belirli kıyı cebinde günlük av garantisi değildir."};
const koskem2026:SourceLink={label:"Kocaeli Büyükşehir – KOSKEM 2026 sahil güvenliği",url:"https://www.kocaeli.bel.tr/haber/koskem-iki-haftada-66-vatandasi-hayata-bagladi-51438.html",note:"2026 yazında Bayramoğlu, Kerpe ve Kandıra kıyılarında cankurtaran/bayrak güvenliği bağlamının güncel olduğunu doğrular."};
const karamursel2026:SourceLink={label:"Kocaeli sahillerinde 2026 yaz hazırlıkları – Karamürsel/Ereğli",url:"https://www.kocaelitv.com.tr/kocaeli-sahillerine-buyuksehirden-yaz-dokunusu-karamursel-ve-eregli-plajlari-sezona-hazirlaniyor",note:"9 Haziran 2026 tarihli destekleyici kaynak; Karamürsel merkez kıyısında taş duvar ve sezon hazırlıklarının güncel durumunu bildirir."};
const degirmendere2026:SourceLink={label:"Kocaeli Büyükşehir – Değirmendere sahili 2026 çalışmaları",url:"https://www.kocaeli.bel.tr/haber/degirmendere-sahili-yeni-bir-yuze-kavusuyor-51383.html",note:"23 Haziran 2026 tarihli resmî kaynak; dalgakıran, yol ve kıyı düzenlemesinin güncel durumunu doğrular."};
const istDenetim2026:SourceLink={label:"İstanbul İl Tarım – 17 Haziran 2026 amatör balıkçılık denetimi",url:"https://istanbul.tarimorman.gov.tr/Haber/3125/Galata-Ve-Unkapani-Koprulerinde-Amator-Balikcilara-Yonelik-Musterek-Denetim-Gerceklestirildi",note:"İstanbul kıyılarında 6/2 Tebliğ hükümlerinin 2026'da fiilen denetlendiğini doğrular."};

const kBySlug=new Map(kocaeliIyilestirmeler.map(m=>[m.slug,m]));
const iBySlug=new Map(istanbulIyilestirmeler.map(m=>[m.slug,m]));
const uniq=(sources:SourceLink[])=>[...new Map(sources.map(s=>[s.url,s])).values()];

function refresh(m:Mera, extra:SourceLink[], localNote:string):Mera{
  return {
    ...m,
    updatedAt:today,
    confidence:"C",
    verification:"Masa başı doğrulama; saha teyidi yok. Kamusal erişim, yerel kullanım/risk bağlamı, bölgesel tür verisi ve yürürlükteki 6/2 Tebliğ güncel kaynaklarla yeniden kontrol edildi.",
    socialImage:m.image,
    planningNotes:[localNote,...m.planningNotes.filter(n=>n!==localNote).slice(0,2)],
    sources:uniq([...extra,...m.sources])
  };
}

const required=(map:Map<string,Mera>,slug:string)=>{const m=map.get(slug);if(!m)throw new Error(`Bakım kaydı bulunamadı: ${slug}`);return m;};

export const bakimMeralar20260806B:Mera[]=[
  refresh(required(kBySlug,"izmit-korfezi-sahil-bandi"),[kocaeliTur],"2026 kontrolünde vapur iskelesi, marina, Balıkhan ve operasyon şeritleri yeniden rota dışında tutuldu; yalnız açık kamusal sahil cepleri değerlendirilmeli."),
  refresh(required(kBySlug,"karamursel-sahili"),[karamursel2026,kocaeliTur],"9 Haziran 2026 sezon çalışmaları nedeniyle taş duvar ve sahil düzeni değişmiş olabilir; çekek/tekne cepleri ile yeni çalışma sınırlarını yerinde yeniden kontrol et."),
  refresh(required(kBySlug,"eskihisar-sahili"),[kocaeliTur],"Eskihisar feribot terminali, araç bekleme/rampa sahası ve kooperatif-tekne çalışma alanları rekreasyon kıyısından kesin biçimde ayrılmalıdır."),
  refresh(required(kBySlug,"bayramoglu-sahili"),[koskem2026,kocaeliTur],"2026 yazında cankurtaran ve bayrak uygulamaları günceldir; yüzme zonu veya cankurtaran gözetimindeki plaj kesiminde olta açma."),
  refresh(required(kBySlug,"kerpe-kiyilari"),[koskem2026],"2026 KOSKEM müdahaleleri kıyı riskinin güncelliğini teyit ediyor; dik ve ıslak kayalık mikro-konumları kullanma, plaj yüzme zonlarını tamamen dışla."),
  refresh(required(kBySlug,"kefken-cebeci-kiyilari"),[koskem2026],"Cebeci'de açık deniz ve rip riski, Kefken'de balıkçı barınağı operasyonu ana dışlama kriteridir; 2026 bayrak ve cankurtaran uyarıları saha kararından üstündür."),
  refresh(required(iBySlug,"emirgan-sahili"),[istDenetim2026],"Emirgan İskelesi aktif ulaşım tesisidir; yanaşma boyu ve görevli alanı çevresinde değil, koru önü boyunca yalnız açık kamusal ceplerde değerlendirme yap."),
  refresh(required(iBySlug,"bebek-sahili"),[istDenetim2026],"Bebek Koyu'nda bağlı tekne ve görünmeyen bağlama halatları temel risk olmaya devam ediyor; aktif iskele ile bağlama ceplerini rota dışında tut."),
  refresh(required(iBySlug,"arnavutkoy-besiktas-sahili"),[istDenetim2026],"Arnavutköy'de dar kaldırım ve aktif iskele nedeniyle güvenli arka atış koridoru çoğu saatte oluşmaz; güvenli boş cep yoksa av yapılmamalıdır."),
  refresh(required(iBySlug,"ortakoy-sahili"),[istDenetim2026],"Ortaköy İskelesi ve meydan çevresi yoğun ulaşım/turizm alanıdır; iskele önü, tur teknesi yanaşmaları ve kalabalık meydan hattı av alanı değildir.")
];

export const bakimSlugs20260806B=new Set(bakimMeralar20260806B.map(m=>m.slug));
