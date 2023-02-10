'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e538f23a566cc2080c7f3f87a7c6511a",
".git/config": "af57529e7677c553fd960bd9197796c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8bf594c4a46590ea6624d2f0574f0778",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
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
".git/index": "ecb96fbfe51261564b9ddd4ff8da3959",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed0cbceda7225024419f50da4ceec7ad",
".git/logs/refs/heads/main": "ef7e59380a4e016e6deefb082c2b2bcb",
".git/logs/refs/heads/release": "6465cdf99ecec6ed530a3f20f6215733",
".git/logs/refs/remotes/origin/main": "703decf3704e25ecab95590c3c0193bb",
".git/logs/refs/remotes/origin/release": "02944babbc474c23f08b222e0b5253f9",
".git/logs/refs/remotes/origin/stable": "9fb9c200f36eba4847f6f79e60043edc",
".git/objects/00/17ef842c8410659e96e4ac3cff7c43a2378b2c": "94a5cff9dafe1305b9ae9ea976ac9887",
".git/objects/00/f1add20f7d65b48ffaac54b8e9a3ffea600a92": "205a858e7be08a87caa7877c4eeef898",
".git/objects/02/8a8af45ead5b3d6fe599369cf8c31e086a2c63": "bfc72df258ebb9d3442338b5bddd52d0",
".git/objects/03/8143c7145144094f87c267d2f95455539274c5": "71f1b1f9e098e2d434831f808a937d19",
".git/objects/03/fa348c7cefda5fc1c33b912af02916a901c7b6": "6825bc77f5bc67c88a266732afc3f5df",
".git/objects/05/56f03e95f1e2f94b4c84b601257b2b6b91c755": "4d680109cf20770e013efd0850343601",
".git/objects/0e/c9834b8bef27e21f3fdd58fc645523e12839fe": "b4c8a5b52d70d89e41505850b417031e",
".git/objects/18/d60861f10dd1f45bb7b4c0d038f271dc0ce7bd": "aae0b26bc73192202085c05636634fb7",
".git/objects/20/53aecebcd0f07bde3a0545d2be4725c3636887": "0dd0651f280c4f5195364338ecad7d85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/7864f2528ece7e1b477b49f139813c5828fe69": "c43472dc7e183b6629ebabe266332dc7",
".git/objects/25/809703d52ba01a0da218e585e273ab31e5dd25": "462ab80355d2e1dde848986172969d95",
".git/objects/25/9767ec107f0fca5b118f82844c0bb10e27b6ef": "04a1dc7eab730b02848c879b3e737436",
".git/objects/27/cea7aa665226ad278840d342fe929ba5299615": "764fe2e72ea3aa765f7b780d88085aa9",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/28/c994fd491d115bff60d8b89abaf03fbe9f0a85": "762d898dcf005c540fbaaffb8d120037",
".git/objects/28/fd5c4a32c515409e71d6f97890f631fc64afa0": "f062ea30d9f787ca9e42abcd43712d07",
".git/objects/2d/394aeb1158a4c27ac85276ed4291251a110317": "90559325b2d454be6504c3e970cd0182",
".git/objects/33/4a1bef98f130e4f8b1998537f2c9a908d47526": "e4a88383a48c3e94ddf8bf9952bab119",
".git/objects/33/d758446ddf6346b49daee09405f7af3e714c05": "8169fb4cbf1b8988fcf70e0649c8b5af",
".git/objects/35/14d11e71f1ffef674d6b6136ae51a029d63bdc": "0419d1bb6f60aa67a7a5d8f8ad5eb876",
".git/objects/36/989897f6f80ad2193dce8eab8acb67c4e2c858": "497ec478d250e7e0909ccd99baf95219",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/1c7d4ec7e04b5e180e891142bd19931493630b": "dba22866ce083aab3716787dc84e1c65",
".git/objects/3f/38d33bf700d217311db223a70d81311dd07796": "aed88c5d14d6e5fe121b382eae8c02b4",
".git/objects/41/001ab6459f63bfbfeada010839b4dc6e5e8ffb": "9951f13da230889767a84a6deb16f11b",
".git/objects/43/59b69338ee3c0fd724aa0b5bf68f071d8d890e": "8ca98bbfd9af26df7ba7e25084c2e97e",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4e/eeef89c61e1026c9a449095364b30080953a15": "d9fc4293868a70a299abd4bd89722da2",
".git/objects/52/e4634b705b4a040b63dbb4134aa18e3a5790bd": "78ed2921691e2a38966e478d5b9a3dee",
".git/objects/55/2d5f1fdfec804c70da7dbfe13529164554eb28": "36b2a750e97622987b5192cf7729d117",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/022b2a438e1397074166df6c04ae20262ba4c9": "c780d6dd7baeb9e77ffa69e21141539d",
".git/objects/59/3a6bc004f217244584ccd664e6b38f71bfdf3a": "9520966d7c5f1def9631f1bf43078168",
".git/objects/59/7427b834faa069b1070877438e058fef16905f": "a06733012d3c0b0d6f4f46682b06e74c",
".git/objects/5f/2ea1f93168f47e7cf34f2aa28a7a3c06df92a2": "9ddde4770799700bec96908af153483b",
".git/objects/66/49f45348dfe418fda0e5d81e5aa411db70b930": "71e7d4261fe5b52e0284848186a087ac",
".git/objects/67/78d18f5ea1cee8878075221cc6988d8dd42094": "cfdfe8a60696689d7f2657e6d115517e",
".git/objects/69/00ccc7a6cbc58f5b83d6d91d99f66905891653": "c91a8a07e6da7215757a7662f855746b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/7dd33a6d0cd544cf5f1441bd4bbe55f37da780": "e7ebfcece488c5ce5185e0552a0189af",
".git/objects/6d/6be44a50e23de7cc217829ecad109eb712b73e": "29e56892240326dbf1d064361a590aec",
".git/objects/70/404080769617a332d1d8a559d4a92b4a7815df": "00bf24183d0be198d0cc09d4616a8338",
".git/objects/70/977a6b06706f8b062488a2302979710d8310c4": "b7994a20531d6a4f99c2c9155fc762db",
".git/objects/70/ef2a2b7855df20d670c3bf602ed9ed4ffdaa34": "72d009fbe61e870a86c6ce68c7f2b2fc",
".git/objects/72/a2060c3dc57f0c528549e425223e5ca02f095c": "9e4629e314b85051621a2983571fab8f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/61d054c1d902c302758dc8757de6309bc35b20": "1a18e5411804e0ba5ad803aa3249c280",
".git/objects/79/5a00c49b6e24296126eeb1091bf95c8ed6fb12": "3270f4225767ce596e9f97d8aed80abf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/05e2aaa4e07b7a69dd980a0dceac103075e660": "243f4126f29052276d25552577a22b2f",
".git/objects/7e/f1874c243154b3ac2df546d968f776f549cd93": "62882ffc92c7a01047d00d6738acfb77",
".git/objects/7f/2460e16e3f535861615cdbf808f9a04370ed27": "d027783ebb9eb636d74a438bb427b5bb",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/85/44d131c546ba0712d0125f7f93bc2e7f6cd487": "4f6cbc74a9ac3585aebded86ae017644",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/c63d972a8d33266e85707aef8db79e7deabdef": "8731976d4b2bbf69dd7016529fe9bbd6",
".git/objects/8e/098fd3a7f245abd7dbc055fb4c334c4ec360a3": "1c68131f373c8fa2cf3cb92eb7c73b42",
".git/objects/91/de3649f5ad60fd7b60c1e5d6c896bcdf6ad242": "573ef392a49923a95f37dc9407d9688b",
".git/objects/92/88057b8257a74ce63966fb5ad9dcfb87be378f": "65495b12b53b2ea86d911368d428ef24",
".git/objects/93/e190d25b0ce237342e85ce54987cd336eff4c4": "45ecba645a2d85bf755daefbafd6628f",
".git/objects/97/b1a330e9b9527940d30334555b688d6db5dfd3": "488691fa59af1c75bdd128a5e331f8cb",
".git/objects/97/d8f93f3aeb2e5d44e129f9345249dd2db8f128": "3f8bf75c6d9b22ea5afbcb0552ce6c88",
".git/objects/9e/7b19ba0de3c37bb7fed0e8c13a9bbda33f5c61": "ba1913ac3bc78b14ea5e8f3e22daf23d",
".git/objects/a0/0387c38517e69f90bcab7bdcff339d30fcce2d": "a9d538b1dce50190484709da79cb4d2f",
".git/objects/a0/2ac04b6cca2290ed207729bb5b2b547b408574": "adfcd59bc0e94a1b55ef635caa07c041",
".git/objects/a7/8729c92ddc4d295d7fc0732935a2ec45630518": "1a5fea7e63514a7ecab5495d7437445d",
".git/objects/a8/5f320b6f410d4564eb29e72ff9bc0cd0d38a98": "e6a42aa9d9f974016f35fbb42b703f5e",
".git/objects/ae/289a81e8d59c9364428ea3bce85ba3354c7430": "fec42fe9a6862daf864deedaa4a9ead0",
".git/objects/ae/f36e485f4bdff24ecabd283532cf050aca86de": "dca87742d66fa16daaf23b43941fb12a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/30f1d451de9d6ededf08a8faa2c692f7621dc7": "ddc99b250164fbf8b3e5584e04e12cc2",
".git/objects/bb/3bfd3653fb8c3eb9655ab41608011abe63d28f": "f28680933a0f57d047c235fcc6b03411",
".git/objects/c2/e1af19191ac42cf99758d1da0ba747cb887834": "e2d4b71a0aabfc9150c7f513731bcaf8",
".git/objects/c5/feade917fa7be57480bef348875c009141ca28": "368bc71dbe4a16816f4e9a72af6c2f61",
".git/objects/cc/db01d2bae7b0d8fe27a27601ac47ec8ffbf719": "d28fcedde86e1fd57df31fbda6873d18",
".git/objects/d3/b4dc903a9d83334b66db107b68dd1fd4f371f3": "56c70583a1c21a561a3a402a64fbe7c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/366b02de823d313d68d832dceb9a5d9d61ba34": "9dc0841cf74857c9e1a3579c938eaa4b",
".git/objects/da/3eb332160f781843ba4ed9931c1df91f4ea736": "014a334e13e76343d55e8449a5792f0d",
".git/objects/da/b0605f0a3fb464a99a7f73f7f691d188bb77cc": "5aedd29c34a5dab52b7071af19a2e249",
".git/objects/da/d8fca5093cfbae1acc4cbc0a9b6c93429af1d8": "283d224b421b61faf5865c03d9c80c04",
".git/objects/df/9effd2591a90c12d1fbaa39892fef4f0a8217b": "bf5b5f70193e0b87ca7287531dc12405",
".git/objects/df/e9a1ad174e472e0d38880edca78a3333207df8": "af13b883c085fb9780a7fa234be95732",
".git/objects/e4/22daae9b881232ad0a882dc4ac84df103fa280": "1c0e1de3338e5c15d240652760faf21d",
".git/objects/e5/abd16fc2638e3f8b3865b379911bb54725a615": "6299b2fccccde3948d31a89051dca939",
".git/objects/e6/697e57929a9d2eba3fb546f919448ebf1dea79": "ca5c49c0bae86fb84f4e765892454cd6",
".git/objects/e9/f942bc099bae44c3cd3c8b981f4a8735d29d21": "78990c961e95bb812cc7b78127f6a36b",
".git/objects/eb/66f2c9305faad420398e39712a7991802a65df": "8cab1ef0d7435e1077b1975b3c0d79ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/e7d4057dc9da03f30a378b62a545da0a89e066": "0371ce7329cd952f662816b1dbea21a7",
".git/objects/ee/d4d12c5fdfcabd460b057bdad96672a813df54": "802057763f82634b3570de03486fb949",
".git/objects/f0/9f2cd53250b9deac491611920bac6b5cbec09d": "1da256a5e8bc5b13e0f6de274d21e14e",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f4/5a4444f64c8fe3309a0282889bb610fa76b348": "4c17ca08b26c07a74a12414fff53a279",
".git/objects/f5/b0c3832288027cba89457c62e7c1c06a041e09": "38a729415d9f1d553b8db2ec6ae35bbb",
".git/objects/f6/e52115d9a7832142f33ca8b0aafbc33b00286e": "faa8a1fe1f9f9ba54c30790b4bf97ff0",
".git/objects/f9/c58e2ac60823863d1a6c8d475b4759c33ecf1d": "93265c8f145036bc2c32db312a33715b",
".git/objects/fa/ef47b47d3ff423e32fd978dbe26626856dbfda": "349af427415125a70a21575a3cd41f88",
".git/objects/fc/6f09f3f28fa1a317bb571ccd09d145f6599090": "4833cd0b94684c061356a4c6a917ae35",
".git/objects/pack/pack-5138ac79761e70b2d9158144dbb8b8552c650be2.idx": "d9e902693efa8abe1d318e11be56a0b6",
".git/objects/pack/pack-5138ac79761e70b2d9158144dbb8b8552c650be2.pack": "2e14124af1124f5909c2add3a8488245",
".git/ORIG_HEAD": "8385f9768ebc9a9f2d3d8b3a18ce6842",
".git/refs/heads/main": "7da87714e1862cb14edc6836c573bee5",
".git/refs/heads/release": "8385f9768ebc9a9f2d3d8b3a18ce6842",
".git/refs/remotes/origin/main": "16429852932a254edc45e2a6c5dea5dc",
".git/refs/remotes/origin/release": "8385f9768ebc9a9f2d3d8b3a18ce6842",
".git/refs/remotes/origin/stable": "95583deff230687cb2b535b0013ba6e1",
"assets/AssetManifest.json": "b9b36d6f688acb188189aa3de9f4f21a",
"assets/assets/animations/failed.json": "770b474afa6155c0dd5cfc295bb61c75",
"assets/assets/animations/lonely.json": "c1fbd13eaa4a31021195817d305dae47",
"assets/assets/animations/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/assets/svg_disabled_bus_seat.svg": "9c78cc8f0b93adb820cf38787eb919d0",
"assets/assets/svg_selected_bus_seats.svg": "c906d5bbcc1179ea14b79c22bfff13bb",
"assets/assets/svg_sold_bus_seat.svg": "3eb7c233aa51cd894da17e3a0a9cedb6",
"assets/assets/svg_unselected_bus_seat.svg": "d9348bee6b2f7fb05326e2e595a9e5ef",
"assets/assets/timemanagement.svg": "f3bd1becf4e14feaf25fb389ecbd93e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "faaaebccadc8cb32c38f14a8c94514b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9fb80ddd243949ced7d8eab7451d29f",
"/": "e9fb80ddd243949ced7d8eab7451d29f",
"main.dart.js": "27b56fabb5a8bb20522f8cf16c584f90",
"manifest.json": "378376bf7246d8415958b3376be5b9c2",
"version.json": "ccd5b1ed493eff9a75b3e9522052e54d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
