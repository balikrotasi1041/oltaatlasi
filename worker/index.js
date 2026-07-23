const PRIMARY_HOST = "oltaatlasi.com";
const PERMANENT_REDIRECT_HOSTS = new Set([
  "www.oltaatlasi.com",
  "balik-rotasi.balikrotasi1041.workers.dev",
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (PERMANENT_REDIRECT_HOSTS.has(url.hostname)) {
      url.protocol = "https:";
      url.hostname = PRIMARY_HOST;
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    const response = new Response(assetResponse.body, assetResponse);
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    return response;
  },
};
