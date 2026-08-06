import appWorker from "./audit-router.js";

const BLOCKED_IPS = new Set([
  "185.177.72.100",
  "195.178.110.199",
]);

const SECURITY_POLICY_HEADER = "x-olta-security-policy";
const SECURITY_POLICY_VALUE = "ip-blocklist-v1";

const getClientIp = (request) => request.headers.get("CF-Connecting-IP")?.trim() || "";

const forbiddenResponse = () => new Response("Forbidden", {
  status: 403,
  headers: {
    "content-type": "text/plain; charset=utf-8",
    "cache-control": "private, no-store",
    "x-content-type-options": "nosniff",
    [SECURITY_POLICY_HEADER]: SECURITY_POLICY_VALUE,
  },
});

const markSecurityPolicy = async (response) => {
  const headers = new Headers(response.headers);
  headers.set(SECURITY_POLICY_HEADER, SECURITY_POLICY_VALUE);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

export default {
  async fetch(request, env, ctx) {
    const clientIp = getClientIp(request);
    if (BLOCKED_IPS.has(clientIp)) return forbiddenResponse();
    return markSecurityPolicy(await appWorker.fetch(request, env, ctx));
  },
};
