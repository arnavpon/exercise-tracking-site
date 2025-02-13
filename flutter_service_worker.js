'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dafbfd1b05b1e013671459918b1d5b9a",
"version.json": "7cd6a41407e3ce7ca7e1a9f156efa75f",
"index.html": "ec806e26ab2deab4478e6b43b10c4913",
"/": "ec806e26ab2deab4478e6b43b10c4913",
"main.dart.js": "8499acce939ea9cb5dee2721dbfe53e6",
"sqlite3.wasm": "fe0b5f7d20d0d900508725319188a9a8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"drift_worker.js": "cc8dcf2512b9249680708088d04324e5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "68f6e6a66005769f35303d10dfb343db",
".git/config": "295de4bb41a4fe5aaa2b5bf29c0630de",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/92/bf3d17a0835b8cc6cd365f3ce383cfa88109dc": "f6cfeb796b0ad30c6525c5027dd2e899",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/abe293b6db3263c48aa33bbe07dfda3c542b71": "9a7ce23ec11b5c22c619547d4431143d",
".git/objects/6a/446f4d8f85600f2b54ce418d18b11776a355bd": "e80301fb98ad3694fbc8c68767168e7d",
".git/objects/35/bdf346295d678892df235da9fb1460b1aea287": "62be073807fdff740c3be06b97f2033a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/7c7202ec1818d7a364d26d5fb9888da6013cbb": "dee913905604bb2b6fc2cddc7b190b0f",
".git/objects/33/71f30cf797bb453aa0985ef7902c95930ca36d": "e28ce8b64ed17974f1f83fb760c34b37",
".git/objects/d7/ff8187d8f73869f026a0654d92826e85943e71": "5634dc44ca4072f96d38c63a7bb07a4b",
".git/objects/d1/66cf104315944ab2d70f2917cd151aff37b711": "ecc973d28d2a5765ff187f065c5a7411",
".git/objects/d8/144f9e8d89f7bf86d645e1af02ecdd7e101ecf": "da6cf4bf12039cc48f86088401839ea6",
".git/objects/e5/b54b070ef4c81cd1ec830e43fadfc7e639dff9": "e2572954f5110be2f283d64d19ea8624",
".git/objects/c7/4f8aebdbca21421f302907c1a172ea37ee4c8f": "a3a4ea522fadf7e763bd6af486b7fc1b",
".git/objects/c9/bbd4778fffacb1f4ba8ce92fc9e7db5d62609b": "7a4fd0952ba8d5542d8c1cc4e2a8e084",
".git/objects/fc/39cf0be27fc0b99d61b9530a566f20a113a3d6": "242b3fba924ab115feb0f628356b4d90",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/a879dc912d23d5069439e9320aedcf3bcaebb9": "1066d47d12834542530ed0d4a4e14afe",
".git/objects/e4/45c1ef1777d152c5598b4e90c053229d6c8e87": "4f55684b23cdf39c71ce17c4e37bfb69",
".git/objects/fb/0be28b300c81740fd3d256d8e7af8274d64172": "1da8ce675ca6aa7feef2a4b001e4bdff",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/9b9e2dc515a349945afea42f67a78f30e70646": "0402cfca45b27ddfebd624441f6970f6",
".git/objects/ec/87e2677d0b589dfc8346c69e9313d27ed4c363": "b11af8b7feb7f33bf2b20c6f276b4929",
".git/objects/4e/e2a1d9f0ae92ff556def38ecbf9189be99a926": "69baf004367893058fc65ad294da29ff",
".git/objects/4e/3e657f7753ed1fabef3cf46d371ba05351e06b": "8516ac940449c2569e18baedd5c8a554",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/02d9e3a6be874da76624d51370468b8ef5b8b6": "5b7a6e8d6a9a20ccb9c964e8c7a3c174",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/b8db39fe465c1a02e1c5830fdf16d4b0870b94": "658c7dcba044c49004577cf70492f795",
".git/objects/74/222521018c4ae5e42f212fd7c64a95fc6f5a68": "bf71996e7828551c1ee099f4f84de81a",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/657c675baa8566cb4c76c9170b76483a26e390": "b5f32f3c38f897f51f4e0eecf959b74d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/642a19bc0e04e7cae94198c702a5639c7d34f7": "412fa57de191ffd71be49fb1b7513c82",
".git/objects/72/3b72dbbe79f29b07380fcea22d1f59e0012968": "8a8ce29c23ee1cb0db5c362d0d88d52b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/3f/537a2c898b515df72beb8ff27923f6c4d74b20": "7dde8a3baeda8fe338803230c518b31c",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/297e0269791c1dfb158728db2037691e01b058": "f3b935a14f18c9250908743bd1f469d0",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/807e7c0764a31b841e4fbf2714ef900ef04f61": "1f08be9da7f76a4f32bd30086c97dafb",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/3d3e58595080156530b35a9e751b5e06c0aadd": "6edbf59e81d940dd80b37d4132588811",
".git/objects/e1/95eced065406a3fa9c98e5826f93db9d07393f": "c90bfc72a428100d97a1b4d63b3ee501",
".git/objects/ff/dde9a7978e4ca1571b2cfa58e85384249a85cf": "ac19922322c95e834f9b89270dd45679",
".git/objects/ce/ab1fcfc6df367712bbc8cbfbf1b0907c6d7f61": "dac7029500f439ae3260c6cbfa41c30c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/4f/21c9d5fac9a9bdfbe2b1cf867b436c382f46e0": "77bce8f223bdc049bb073f268474248e",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/db16e740bf746aa3fd1a33ab2d72b8d0e71b90": "d3524de2a317073f2a2527e4b1e65426",
".git/objects/2e/098d591721533ab331af7685b52fbb5433a8cb": "0ab5967102823eec04b1c5e294ec33cf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/c50e2bb544019fb50f721c70dc9768be668753": "f5ce6a1b2145b23a7a403d02ec58c788",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "096d589265a2c2dade9ae01d048d173c",
".git/logs/refs/heads/main": "3767a875626df100733a3edc3ecf1a1e",
".git/logs/refs/remotes/origin/main": "6ce1b0ece0caed3a12c09d33e59df655",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1f121cc47d72ef4873dbc793dc452bd1",
".git/refs/remotes/origin/main": "1f121cc47d72ef4873dbc793dc452bd1",
".git/index": "39ecda2f22f6349b3ef6c31df8867877",
".git/COMMIT_EDITMSG": "0ebcfc8502583d8bb7a449b51953d77f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "d1520aad3b6bf8f497f5f8158b1c7173",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "a3176fe299b8af16cd49ddd604078fc6",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
