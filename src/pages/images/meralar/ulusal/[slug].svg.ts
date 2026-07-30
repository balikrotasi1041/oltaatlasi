import { ulusalMeralar } from "../../../../data/meralar-ulusal";

export const prerender = true;

export function getStaticPaths() {
  return ulusalMeralar.map((mera) => ({ params: { slug: mera.slug }, props: { mera } }));
}

const escapeXml = (value: string) => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export const GET = ({ props }: { props: { mera: (typeof ulusalMeralar)[number] } }) => {
  const { mera } = props;
  const name = escapeXml(mera.name);
  const province = escapeXml(mera.province);
  const waterType = escapeXml(mera.waterType);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
  <title id="title">${name} ön değerlendirme rota görseli</title>
  <desc id="desc">${province} ilindeki ${name} için açık kaynak ön değerlendirme kaydı.</desc>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e8f5f3"/><stop offset="1" stop-color="#a8d8cf"/></linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#28778a"/><stop offset="1" stop-color="#174f63"/></linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#sky)"/>
  <path d="M0 390C180 330 340 430 535 382s390-74 665 18v275H0Z" fill="url(#water)"/>
  <path d="M0 500C230 445 420 545 690 485s350-28 510 22v168H0Z" fill="#123f52" opacity=".72"/>
  <path d="M0 365c195-38 365 24 555-10s405-52 645 8v55c-230-51-430-22-625 12S205 410 0 430Z" fill="#d2bc7b"/>
  <g transform="translate(70 70)">
    <rect width="1060" height="215" rx="28" fill="#ffffff" opacity=".9"/>
    <text x="42" y="70" font-family="system-ui,sans-serif" font-size="25" font-weight="750" fill="#9a4a25">ÖN DEĞERLENDİRME · GÜVEN D</text>
    <text x="42" y="132" font-family="system-ui,sans-serif" font-size="48" font-weight="850" fill="#143d47">${name}</text>
    <text x="42" y="181" font-family="system-ui,sans-serif" font-size="28" fill="#315f68">${province} · ${waterType} · kesin erişim noktası yayımlanmadı</text>
  </g>
  <g transform="translate(78 534)">
    <circle cx="30" cy="30" r="30" fill="#ef6a45"/>
    <path d="M22 31c20-19 37-8 40 3-12 16-30 18-45 7l-9 7 3-14-3-14 10 7c1 1 3 3 4 4Z" fill="#fff"/>
    <text x="82" y="40" font-family="system-ui,sans-serif" font-size="28" font-weight="700" fill="#fff">Olta Atlası · açık kaynak rota kaydı</text>
  </g>
</svg>`;
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
