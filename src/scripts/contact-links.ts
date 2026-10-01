// Keep every rendered contact href canonical; fragments never reach the server.
document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.button !== 0) return;
  const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[data-report-link]") : null;
  if (!target) return;
  const params = new URLSearchParams();
  if (target.dataset.reportTopic) params.set("konu", target.dataset.reportTopic);
  if (target.dataset.reportPage) params.set("sayfa", target.dataset.reportPage);
  if (target.dataset.reportPath) params.set("url", target.dataset.reportPath);
  const destination = `/iletisim/#${params.toString()}`;
  // Modified clicks retain the native clean-link fallback.
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  window.location.assign(destination);
});
