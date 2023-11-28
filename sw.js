const CACHE_NAME = "Don´t-Overthink-cache-v1";
const urlsToCache = [
      "/",
      "/fonts/Banana.otf",
      "/fonts/juego.otf",
      "/icons/icono1.png",
      "/icons/icono2.png",
      "/index.html",
      "/manifest.json",
      "/css/estilosbg.css",
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
      "/images/6.png",
      "/images/7.png",
      "/images/8.png",
      "/images/9.png",
      "/images/personaje1.png",
      "/images/personaje2.png",
      "/images/personaje3.png",
      "/images/personaje4.png",
      "/images/personaje5.png",
      "/images/logomuerte.png",
      "/images/logoempresa.png",
      "/images/logoportada.png",
      "/images/fondovideo.png",
      "/images/steam.png",
      "/images/playstore.png",
      "/videos/trailer.mp4",
      "/googlemaps.html",
      "/googlemaps.js",
      "/login.html",
      "/loginindex.js",
      "/app/firebase.js",
      "/app/signupForm.js",
      "/app/signinForm.js",
      "/app/showMessage.js",
      "/app/postList.js",
      "/app/logout.js",
      "/app/loginCheck.js",
      "/app/googleLogin.js",
      "/app/githubLogin.js",
      "/app/facebookLogin.js",
      "/css/estiloslogin.css",
      "/images/portada.png",
      "/index.js",
      "/main.css",
      "/main.js",
     
    ];
 
 
      self.addEventListener("install", (event) => {
        event.waitUntil(
          caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
          })
        );
      });
      
      self.addEventListener("fetch", (event) => {
        event.respondWith(
          caches.match(event.request).then((response) => {
            return response || fetch(event.request);
          })
        );
      });
      
      self.addEventListener("activate", (event) => {
        event.waitUntil(
          caches.keys().then((cacheNames) => {
            return Promise.all(
              cacheNames.map((cacheName) => {
                if (cacheName !== CACHE_NAME) {
                  return caches.delete(cacheName);
                }
              })
            );
          })
        );
      });