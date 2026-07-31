export const slugifyTr = (value) => String(value)
  .toLocaleLowerCase("tr-TR")
  .replace(/ı/g, "i")
  .replace(/ğ/g, "g")
  .replace(/ü/g, "u")
  .replace(/ş/g, "s")
  .replace(/ö/g, "o")
  .replace(/ç/g, "c")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

export const titleFromSlug = (slug) => String(slug)
  .split("-")
  .map((part) => part.charAt(0).toLocaleUpperCase("tr-TR") + part.slice(1))
  .join(" ");
