import appWorker from "./audit-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.100",
  "195.178.110.199",
]);

const getClientIp = (request) => request.headers.get("CF-Connecting-IP")?.trim() || "";

const forbiddenResponse = () => new Response("Forbidden", {
  status: 403,
  headers: {
    "content-type": "text/plain; charset=utf-8",
    "cache-control": "private, no-store",
    "x-content-type-options": "nosniff",
  },
});

export default {
  async fetch(request, env, ctx) {
    const clientIp = getClientIp(request);
    if (BLOCKED_IPS.has(clientIp)) return forbiddenResponse();
    return appWorker.fetch(request, env, ctx);
  },
};
