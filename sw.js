var staticAssets = ["./","./script.js","./style.css"];

var test=[];

self.addEventListener("install", async function(event){
    var cache = await caches.open("calcCache");
    cache.addAll(staticAssets);
	showInstallButton(true);
    console.log("ran this once");
});
self.addEventListener("fetch", function(event){
    const req = event.request;
    event.respondWith(getRes(req));
    
});
async function getRes(req){
 const res = await caches.match(req);
 if(res){return res}
 return fetch(req);
 
}
