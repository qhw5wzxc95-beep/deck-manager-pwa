self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("deck-manager-cache").then(cache => {
      return cache.addAll(["./", "./index.html"]);
    })
  );
});
