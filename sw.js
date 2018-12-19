var staticAssets = ["./","./script.js","./style.css"];

var test=[];

self.addEventListener("install", async function(event){
    var cache = await caches.open("calcCache");
    cache.addAll(staticAssets);
    console.log("ran this once");
});
self.addEventListener("fetch", function(event){
    const req = event.request;
    event.respondWith(caches.match(req)||fetch(req));
    
});
