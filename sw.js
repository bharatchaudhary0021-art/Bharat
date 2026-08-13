const CACHE_NAME = "lakshyaloop-shell-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

// Keep network requests fresh so study data and new releases are never held back by the PWA shell.
self.addEventListener("fetch", () => {});
