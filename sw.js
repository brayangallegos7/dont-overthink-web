const CACHE_NAME = "temperature-converter-v1"
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      cache.addAll(["/", "/index.html, "/"estilosbg.css",]);
    })());
});

self.addEventListener("fetch", (event) => {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cacheResponse = await cache.match(event.request);
      if (cacheResponse) {
        return cacheResponse;
      } else {
        try {
          //Se los recursos no están en el cache, lo intenta en la red.
          const fetchResponse = await fetch(event.request);
          //Guarda los recursos en la cache
          cache.put(event.request, fetchResponse.clone());
          return fetchResponse
        } catch (e) {
          //la red falló
        }
      }
    })());
});