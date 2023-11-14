const staticDietCalc = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/bundle.css",
  "/assets/bundle.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDietCalc).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  });
