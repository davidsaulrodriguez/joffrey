const CACHED_FILES = [
  "./",
  "./index.html",
  "./index.js",
  "./styles.css",
  "./manifest.json",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "static-data-cache-v1";

// Install

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("All files were pre-cached sucessfully!");
      return cache.addAll(CACHED_FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (!key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data");
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});
