import { meralar } from "../../../../data/meralar-tumu";

type VisualRoute = Pick<(typeof meralar)[number], "slug" | "name" | "province" | "district" | "waterType" | "confidence">;

const nationalRoutes = meralar.filter((route) => route.slug.startsWith("ulusal-"));

export const prerender = true;

export function getStaticPaths() {
  return nationalRoutes.map((route) => ({
    params: { slug: route.slug },
    props: { route },
  }));
}

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;",
  "'": "&apos;",
})[character] || character);

const wrapName = (name: string) => {
  const words = name.split(/\s+/);
  const lines: string[] = [];
  for (const word of words) {
    const last = lines.at(-1);
    if (!last || (last.length + word.length + 1 > 30 && lines.length < 2)) lines.push(word);
    else lines[lines.length - 1] = `${last} ${word}`;
  }
  if (lines.length > 2) {
    const overflow = lines.splice(2).join(" ");
    lines[1] = `${lines[1]} ${overflow}`.slice(0, 39).trimEnd() + "…";
  }
  return lines;
};

const paletteFor = (waterType: string) => {
  if (/deniz|boğaz|körfez/i.test(waterType)) return { deep: "#082f49", water: "#0e7490", light: "#67e8f9" };
  if (/akarsu|nehir|çay/i.test(waterType)) return { deep: "#12372a", water: "#16835e", light: "#86efac" };
  return { deep: "#17324d", water: "#256b82", light: "#9bd9e2" };
};

const renderSvg = (route: VisualRoute) => {
  const palette = paletteFor(route.waterType);
  const lines = wrapName(route.name).map(escapeXml);
  const location = escapeXml(`${route.province} · ${route.district}`);
  const waterType = escapeXml(route.waterType);
  const title = escapeXml(route.name);
  const lineMarkup = lines.map((line, index) => `<tspan x="86" dy="${index === 0 ? 0 : 67}">${line}</tspan>`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="title description">
  <title id="title">${title} rota planlama görseli</title>
  <desc id="description">${location} için mikro av noktası göstermeyen rota kimlik görseli.</desc>
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette.deep}"/><stop offset="1" stop-color="${palette.water}"/></linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${palette.light}" stop-opacity=".64"/><stop offset="1" stop-color="${palette.deep}" stop-opacity=".86"/></linearGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#001b28" flood-opacity=".28"/></filter>
  </defs>
  <rect width="1200" height="675" fill="url(#sky)"/>
  <g fill="none" stroke="#fff" stroke-opacity=".11" stroke-width="2">
    <path d="M-80 172C140 62 288 265 496 143S873 33 1280 151"/><path d="M-90 218C121 112 325 318 545 197s427-83 737 20"/><path d="M-72 264C170 157 347 366 602 244s449-34 678 33"/>
  </g>
  <path d="M0 438C143 386 251 469 389 428s239-2 350 9 238-83 461-20v258H0Z" fill="url(#water)"/>
  <g fill="none" stroke="#fff" stroke-opacity=".25" stroke-width="3"><path d="M0 506c164-52 284 42 445-4s281 42 441 0 219-32 314-9"/><path d="M0 571c155-48 291 39 455 0s276 33 422 0 220-37 323-7"/></g>
  <g transform="translate(910 76)" filter="url(#shadow)"><path d="M95 0c52 0 95 42 95 95 0 72-95 172-95 172S0 167 0 95C0 42 42 0 95 0Z" fill="#fff"/><circle cx="95" cy="95" r="39" fill="${palette.water}"/><path d="M70 101c18-22 50-22 69 0-18 22-50 22-69 0Zm69 0 26-17v34Z" fill="#fff"/></g>
  <text x="86" y="82" fill="${palette.light}" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="23" font-weight="800" letter-spacing="3">OLTA ATLASI · ULUSAL ROTA</text>
  <text x="86" y="172" fill="#fff" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="57" font-weight="850" letter-spacing="-1">${lineMarkup}</text>
  <text x="86" y="327" fill="#d9f4f3" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="27" font-weight="650">${location}</text>
  <g transform="translate(86 358)"><rect width="310" height="52" rx="26" fill="#fff" fill-opacity=".14" stroke="#fff" stroke-opacity=".28"/><text x="24" y="34" fill="#fff" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="20" font-weight="750">${waterType} · Güven ${route.confidence}</text></g>
  <g transform="translate(86 602)"><circle cx="10" cy="-7" r="7" fill="${palette.light}"/><text x="31" fill="#e6f5f4" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="18" font-weight="620">Planlama görseli · Mikro av noktası değildir</text></g>
</svg>`;
};

export const GET = ({ props }: { props: { route: VisualRoute } }) => new Response(renderSvg(props.route), {
  headers: {
    "Content-Type": "image/svg+xml; charset=utf-8",
    "Cache-Control": "public, max-age=31536000, immutable",
  },
});
