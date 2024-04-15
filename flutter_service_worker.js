'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0eeaf1fa961967ce013180ac61924069",
".git/config": "78c2ba6a02717b4aee07e79d05a38050",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ce84a4518e3ead37f1f20b3177eebd3e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "41f00d2fbc38ba7ba3cded5496d556be",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3def964910b0b9826c4a0be1eeb35b7f",
".git/logs/refs/heads/master": "3def964910b0b9826c4a0be1eeb35b7f",
".git/logs/refs/remotes/origin/HEAD": "5a3589eac058c83cb2708ae9eff1fee2",
".git/logs/refs/remotes/origin/master": "6ff7fcf0444c7c5d75f334c25b62cd21",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/9d597614976300665d5a7f19487df343187bd8": "e92105e7657de2a462023db0d1b181b4",
".git/objects/0c/2deea0b98d9404ea8540c753adb07fa35592cb": "5e0cc0cb09ad3183c9b1c6baa97ed2f6",
".git/objects/11/e8d79f0e241802b7d72a3ebfb57ae2292961c1": "ec634acf9684ae4a8ba478dda0e6f10f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1a/20d2e7a17f3056430b9dd07af8bd82c68748de": "cd1a4280641acddec17f9897ef40bd17",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/b75858705c869bfe9e7c474ec736362df46ed1": "97fdb215d0ce4c77b8e2841c8136b5de",
".git/objects/27/18c5d95010c747a2326407dff4a7004435872e": "8251b13a1577fab33f926f9ffb069128",
".git/objects/27/c7c0141561ce470cc2be036e6e4dd501b49c95": "815257dfb5eb6263f4cd744fc53ee65e",
".git/objects/2a/74849ab57692b617242760ad00ea34e0323df2": "95fa9a7e3e5d1170f71746c47d38e711",
".git/objects/31/7128d4438d534cb49b4b8e24ea7d0293d25aca": "e26c65afad46344423fa2a1db4533085",
".git/objects/3b/60402a273775031e6282cfe811814563cbeb89": "395617a34740a05d26c2596a94082f54",
".git/objects/42/4367fb787d42c7289abab006c83d0fc641ef4b": "135524a23c5115e9cd8687826afd56b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/84861d9bcf7c943372ea3092bd76b1df8ed275": "c494cb4f7ad493e588b893e69af5761a",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/6d80eab61fac5015acb034ffb6a72024c2e02e": "e4c0cdd5a618402097d82f1cc3a6d2aa",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/39774b228a47ed7f8696670cfc4b0fbfeeac1b": "2856301e56c0c69b32423fbe6c79c5f4",
".git/objects/5f/168c858a50fa90c1e96438c40280427f6912cf": "074e594343e32388c7e0e8c488a1220c",
".git/objects/6c/26b0d293d7f3133f05380c035dabfb150889d8": "1e90e55d954bee5b0255f08c66514e51",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/7a/e9c11e5b3cc6ddfde575c51a05b92b25c5f46b": "940969e6211d3d41fa96529e62d21007",
".git/objects/7d/c2bfc268897122581b41bf835ed9a8b7134c3b": "9b193a3b790d7c3468dd99ba974c2c8c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0da4f72131eec74696bf5faa2abcf1cdbef612": "544b196afb3310d95620cc66f70eb31f",
".git/objects/89/d622358254b945d365608cffcb2e332576975e": "4f7fa4999d1b342221ea59f4996fa9be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/e58873870e8991c3beeaf1d8652cca80468c4c": "05ec78059c840dee653fde7e98a4289c",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/96/d558765e47e13e2aa5d4835f72c57cdf106b9c": "a999ce2303ab8ca387729388f7f55d74",
".git/objects/9a/ae93d5b16802f6116086ce70b357d29acd05e8": "21028e548723e23821c5e3e1ee94d16f",
".git/objects/9c/b4b7702d9a06a347a54e5eb7d095a151ffe773": "449d39c44d47db3b362132f32b9fdaa5",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/109887de1167e765f7c742524c4f450bc92233": "b92aef82ec98e40f6f68d025bf97af79",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a4caa054a7f84fb3de19a4f69cf6b73909d019": "01e938c82c5ac3cb48a4c43e336d15dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cc/acb83d1ec59137b41f7c2911a22b1f57b84b46": "83a76b5dba3ed7d2594da750c9f770e4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/ed3e848050282d16eab5f9a78694920ac179c2": "77b238f48ca8648fff7e02e66e827248",
".git/objects/d6/2dd53cdc9c19d484937fdbba278a707ee3f22a": "91217badd7c45e295141ea3497c5c301",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/eb9b4abc963bc5daaed291f3837fb6c3c2ebf9": "1ca942c88ed2ef1ca33bd454b702b768",
".git/objects/ee/50424a443fe5f585cda713df2ef8b88cfcaac3": "b928b725cee3824344ae61eb446baf45",
".git/objects/ef/8681ee866d8dd7fae9432ade1c04b067ab4745": "aad6e8f2247443254130a79c2efb859d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/33135ecb80c0adcda6156eefe35d8041002a1a": "f1a5835df2f796fd839346696652983f",
".git/objects/fc/d06bf5b707fb4fb476233607b4c0754c498569": "134921727d2dd9ea15bacce12380c129",
".git/objects/fe/392a12368023228585f06f7b1b27de94dd5576": "ac8c95836d8964d79333af0ddc020298",
".git/objects/pack/pack-7cf3d5e6316df8436fa9f9a2061cd25fc5773e41.idx": "af34c01fcce2ab335e86a027ce79eb77",
".git/objects/pack/pack-7cf3d5e6316df8436fa9f9a2061cd25fc5773e41.pack": "767193055afe2ef83073f20477d68e59",
".git/packed-refs": "e6ce587f9bc9edda5129f0dc0e5c57f5",
".git/refs/heads/master": "14b83fd6888046161337b0cf00e831f2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "14b83fd6888046161337b0cf00e831f2",
".git/sourcetreeconfig.json": "e18e079cf0534a420ba5ab723cb3af28",
"assets/AssetManifest.bin": "12051c182bb6199fcb0240263b126d6d",
"assets/AssetManifest.bin.json": "172d19080e6a7463bdd65ffe69c2fa16",
"assets/AssetManifest.json": "08d0505b06ecdcdc841e6959acea5871",
"assets/assets/shopList.json": "965f4cb8cca0ce77a30e96bac97685e2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c7333170f1a883e97a79488257271acc",
"assets/NOTICES": "6aaa5e1dc77fe36fdbd8ed2b718db29e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "39114cab442d0e0db7015f8ad3d57023",
"/": "39114cab442d0e0db7015f8ad3d57023",
"main.dart.js": "8f266f660186d989cfc0b30039f04e83",
"manifest.json": "3dfb9f7fdba1b1564f42a18a06c5d972",
"README.md": "dedfc688cdc97068b390e6d64b6a5610",
"version.json": "79a59b4f665ca0eaae59debe61c2400d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
