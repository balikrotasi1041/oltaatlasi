const MET_ENDPOINT = "https://api.met.no/weatherapi/locationforecast/2.0/compact";
const MET_ATTRIBUTION_URL = "https://api.met.no/doc/TermsOfService";
const USER_AGENT = "OltaAtlasiWeather/1.0 https://oltaatlasi.com/iletisim/";
const CACHE_SECONDS = 1800;

const jsonResponse = (body, status = 200, extraHeaders = {}) => new Response(JSON.stringify(body), {
  status,
  headers: {
    "content-type": "application/json; charset=utf-8",
    "cache-control": status === 200
      ? `public, max-age=300, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=3600`
      : "private, no-store",
    "x-content-type-options": "nosniff",
    "x-robots-tag": "noindex, nofollow, noarchive, nosnippet",
    ...extraHeaders,
  },
});

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const roundCoord = (value) => Number(value.toFixed(3));
const finite = (value) => Number.isFinite(Number(value));
const safeWaterType = (value) => ["deniz", "gol", "göl", "baraj", "akarsu", "golet", "gölet"].includes(String(value || "").toLocaleLowerCase("tr-TR"))
  ? String(value).toLocaleLowerCase("tr-TR")
  : "diger";

const compass = (degrees) => {
  if (!Number.isFinite(degrees)) return "—";
  const labels = ["K", "KKD", "KD", "DKD", "D", "DGD", "GD", "GGD", "G", "GGB", "GB", "BGB", "B", "BKB", "KB", "KKB"];
  return labels[Math.round((((degrees % 360) + 360) % 360) / 22.5) % 16];
};

const symbolText = (symbol = "") => {
  const key = String(symbol).toLowerCase();
  if (key.includes("thunder")) return "Gök gürültülü yağış";
  if (key.includes("heavyrain")) return "Kuvvetli yağmur";
  if (key.includes("rain")) return "Yağmurlu";
  if (key.includes("heavysnow")) return "Yoğun kar";
  if (key.includes("snow")) return "Karlı";
  if (key.includes("sleet")) return "Karla karışık yağmur";
  if (key.includes("fog")) return "Sisli";
  if (key.includes("cloudy")) return "Çok bulutlu";
  if (key.includes("partlycloudy")) return "Parçalı bulutlu";
  if (key.includes("fair")) return "Az bulutlu";
  if (key.includes("clearsky")) return "Açık";
  return "Tahmin mevcut";
};

const precipitationFor = (item) => Number(item?.data?.next_1_hours?.details?.precipitation_amount || 0);
const symbolFor = (item) => item?.data?.next_1_hours?.summary?.symbol_code || item?.data?.next_6_hours?.summary?.symbol_code || "";
const detailsFor = (item) => item?.data?.instant?.details || {};

const aggregateWindow = (timeseries, hours) => {
  const slice = timeseries.slice(0, Math.max(1, hours));
  const temperatures = slice.map((item) => Number(detailsFor(item).air_temperature)).filter(Number.isFinite);
  const winds = slice.map((item) => Number(detailsFor(item).wind_speed)).filter(Number.isFinite);
  const rain = slice.reduce((sum, item) => sum + precipitationFor(item), 0);
  const symbols = slice.map(symbolFor).filter(Boolean);
  return {
    hours,
    minTemperature: temperatures.length ? Math.min(...temperatures) : null,
    maxTemperature: temperatures.length ? Math.max(...temperatures) : null,
    maxWindSpeed: winds.length ? Math.max(...winds) : null,
    precipitation: Number(rain.toFixed(1)),
    hasThunder: symbols.some((symbol) => symbol.includes("thunder")),
    hasFog: symbols.some((symbol) => symbol.includes("fog")),
    condition: symbolText(symbols[Math.min(symbols.length - 1, Math.max(0, hours - 1))] || symbols[0] || ""),
  };
};

const calculateFieldCondition = ({ current, next6, next12, waterType }) => {
  let score = 100;
  const reasons = [];
  const safety = [];
  const maxWind = Math.max(Number(current.windSpeed || 0), Number(next6.maxWindSpeed || 0), Number(next12.maxWindSpeed || 0));
  const rain6 = Number(next6.precipitation || 0);
  const temperature = Number(current.temperature);
  const isSea = waterType === "deniz";

  if (next6.hasThunder || next12.hasThunder) {
    score = Math.min(score, 12);
    safety.push("Gök gürültülü hava ihtimali var; açık kıyı ve su kenarında av planı güvenli kabul edilmemelidir.");
  }

  if (maxWind >= 15) {
    score -= isSea ? 58 : 50;
    safety.push("Çok kuvvetli rüzgâr tahmini var.");
  } else if (maxWind >= 12) {
    score -= isSea ? 42 : 36;
    reasons.push("Kuvvetli rüzgâr saha rahatlığını belirgin azaltıyor.");
  } else if (maxWind >= 9) {
    score -= isSea ? 28 : 22;
    reasons.push("Rüzgâr olta kontrolünü ve kıyı konforunu zorlaştırabilir.");
  } else if (maxWind >= 6) {
    score -= 10;
    reasons.push("Orta kuvvette rüzgâr bekleniyor.");
  } else {
    reasons.push("Rüzgâr saha kullanımı açısından düşük-orta seviyede.");
  }

  if (rain6 >= 10) {
    score -= 28;
    reasons.push("İlk 6 saatte yüksek yağış toplamı bekleniyor.");
  } else if (rain6 >= 5) {
    score -= 18;
    reasons.push("İlk 6 saatte belirgin yağış bekleniyor.");
  } else if (rain6 >= 1) {
    score -= 7;
    reasons.push("Aralıklı veya hafif yağış ihtimali var.");
  } else {
    reasons.push("İlk 6 saat için yağış yükü düşük görünüyor.");
  }

  if (Number.isFinite(temperature)) {
    if (temperature <= -5 || temperature >= 38) {
      score -= 20;
      safety.push("Aşırı sıcaklık saha konforu ve güvenliğini olumsuz etkileyebilir.");
    } else if (temperature <= 2 || temperature >= 34) {
      score -= 10;
      reasons.push("Sıcaklık saha konforu açısından sınır değerlere yakın.");
    }
  }

  if (next6.hasFog) {
    score -= 8;
    reasons.push("Sis görüşü azaltabilir.");
  }

  score = Math.round(clamp(score, 0, 100));
  const label = score >= 80 ? "Çok iyi" : score >= 65 ? "İyi" : score >= 45 ? "Orta" : score >= 25 ? "Zayıf" : "Uygun değil";
  return {
    score,
    label,
    reasons: [...safety, ...reasons].slice(0, 4),
    hasSafetyConcern: safety.length > 0 || score < 25,
    disclaimer: "Bu skor balık yakalama ihtimalini değil; meteorolojik koşulların kıyı/saha kullanımı açısından göreli uygunluğunu özetler.",
  };
};

export async function handleWeatherRequest(request, ctx) {
  if (request.method !== "GET") return jsonResponse({ error: "method_not_allowed" }, 405, { allow: "GET" });

  const url = new URL(request.url);
  const lat = Number(url.searchParams.get("lat"));
  const lon = Number(url.searchParams.get("lon"));
  const waterType = safeWaterType(url.searchParams.get("water"));
  if (!finite(lat) || !finite(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180) {
    return jsonResponse({ error: "invalid_coordinates" }, 400);
  }

  const roundedLat = roundCoord(lat);
  const roundedLon = roundCoord(lon);
  const cacheUrl = new URL("https://weather-cache.oltaatlasi.local/forecast");
  cacheUrl.searchParams.set("lat", String(roundedLat));
  cacheUrl.searchParams.set("lon", String(roundedLon));
  cacheUrl.searchParams.set("water", waterType);
  const cacheKey = new Request(cacheUrl.toString(), { method: "GET" });
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const upstreamUrl = new URL(MET_ENDPOINT);
  upstreamUrl.searchParams.set("lat", String(roundedLat));
  upstreamUrl.searchParams.set("lon", String(roundedLon));

  let upstream;
  try {
    upstream = await fetch(upstreamUrl.toString(), {
      headers: {
        accept: "application/json",
        "user-agent": USER_AGENT,
      },
    });
  } catch {
    return jsonResponse({ error: "weather_provider_unreachable" }, 503);
  }

  if (!upstream.ok) {
    return jsonResponse({ error: "weather_provider_error", providerStatus: upstream.status }, 502);
  }

  let payload;
  try {
    payload = await upstream.json();
  } catch {
    return jsonResponse({ error: "weather_provider_invalid_json" }, 502);
  }

  const timeseries = Array.isArray(payload?.properties?.timeseries) ? payload.properties.timeseries.slice(0, 25) : [];
  if (!timeseries.length) return jsonResponse({ error: "weather_provider_empty" }, 502);

  const first = timeseries[0];
  const details = detailsFor(first);
  const symbol = symbolFor(first);
  const current = {
    time: first.time,
    temperature: Number.isFinite(Number(details.air_temperature)) ? Number(details.air_temperature) : null,
    windSpeed: Number.isFinite(Number(details.wind_speed)) ? Number(details.wind_speed) : null,
    windDirection: Number.isFinite(Number(details.wind_from_direction)) ? Number(details.wind_from_direction) : null,
    windDirectionLabel: compass(Number(details.wind_from_direction)),
    humidity: Number.isFinite(Number(details.relative_humidity)) ? Number(details.relative_humidity) : null,
    pressure: Number.isFinite(Number(details.air_pressure_at_sea_level)) ? Number(details.air_pressure_at_sea_level) : null,
    precipitationNextHour: precipitationFor(first),
    symbol,
    condition: symbolText(symbol),
  };
  const next6 = aggregateWindow(timeseries, 6);
  const next12 = aggregateWindow(timeseries, 12);
  const next24 = aggregateWindow(timeseries, 24);
  const fieldCondition = calculateFieldCondition({ current, next6, next12, waterType });
  const providerExpires = upstream.headers.get("expires");

  const response = jsonResponse({
    generatedAt: new Date().toISOString(),
    expiresAt: providerExpires || new Date(Date.now() + CACHE_SECONDS * 1000).toISOString(),
    coordinates: { lat: roundedLat, lon: roundedLon },
    waterType,
    current,
    forecast: { next6, next12, next24 },
    fieldCondition,
    source: {
      name: "MET Norway Locationforecast",
      institution: "Norwegian Meteorological Institute",
      url: MET_ENDPOINT,
      attributionUrl: MET_ATTRIBUTION_URL,
      license: "CC BY 4.0",
      transformed: true,
    },
  });

  if (ctx?.waitUntil) ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}
