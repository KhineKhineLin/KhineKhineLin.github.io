'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7f7766040755775e4f37a1861259762a",
"index.html": "db404bbea42ab8dec3dfd87f85854377",
"/": "db404bbea42ab8dec3dfd87f85854377",
"main.dart.js": "97305ad244455e0ea4d765087a79ea59",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "ffbe15c99c83b3d66553fe4d8e191bc8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c668507619c8f6476650d797c003bcd1",
".git/config": "329cd59057f02a6b19e400569980fb67",
".git/objects/0d/877af4ca8aa4d9ef22034bbe333c7f10a6ec5c": "f6f3167423b9f65a529648b7f244baa9",
".git/objects/95/44d17e7aaaee79fa8e59001de70b09ae30a08c": "5a41605846982b47135d7a78ef73f921",
".git/objects/95/49ef3442c89f202890c8c424c7975af8873325": "f81aeefc383d39de5f5c9d900bc6eea3",
".git/objects/59/d775ffb94dbb8533e6bda42cc3b368330a2c3f": "0f291914e1a0a13067c2d5ba31f2e99d",
".git/objects/59/00f2378d756f3ce56dc73c02e1d497335b5a8c": "f2aba9d25a583c71ca9400221f6005d4",
".git/objects/92/a0684e65578dbebf64b4b380957b796a73959e": "16eca8b54c19dae50691edb365692e42",
".git/objects/3e/9066b0717fa7af87041723610a31092aaf1f61": "99c5238713ebb14698076c2bd3f205d3",
".git/objects/3e/066317e2b3fbb8941f6fe48809cc0c1e20761c": "caa14d0c8f8b53490bba2aed4a0fb7c2",
".git/objects/50/09090f6798aaae69249a6a7542acdbb1cee060": "d457138c1e31173e535aa6fc6cfabf2f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/7958c279b05cc871283137e18be0be2c323a35": "37a7f3bed674c102399d21bb018f4424",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/67/f02c3a9eb31fdec5c405cec93f77aa53988d40": "1c8203f50905e345be732935ec4a2f73",
".git/objects/67/2923bc2775098e8af5847288d38f986adb984c": "65b12699226287fd7532349326f4a2a2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/a3cfec996971738d79a53af3b2559eab8be645": "720ab0811d141c784f78f2abe750d854",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7d7d055a6b0fe75f0a257ab744e0df73e92b64": "8aa72de7f7c99461c6d6d9b169e244ba",
".git/objects/f4/fe69286c840ad65e6757f1706865bad70fcc6e": "0b72506e53d846e0f48c9371141211e5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/d202326eec2f7d62c0228f78eb28c708e56fef": "ee85aa4ef6d8c93f89366962b7bbacbd",
".git/objects/ee/77ec4b364853bb30763b30b6de10e9ec7653fc": "e86bb5ff628e0f444728c56579fd6f0d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/0a4b2ae52daad6f4c44ba4adc8dd89434285b2": "7be74310da625cb95c19e0400e91d88e",
".git/objects/e4/cb36f830cd651e4ee958af6a6a2468fca2f2d9": "15027b7d9d2f213be3fe24c1d7fb8a29",
".git/objects/c1/efc8ec67b3d0f8263f6eb5fff6f980525c258b": "134f75e01c6616638cd849a1a8dfe1bd",
".git/objects/c6/83492677b70a693206d1294082b1630032270f": "a427abc008d29073ac66d4b0ffd1dfb8",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/ec/7f21f2d220254cae58bd06a10c078e47bcbf39": "940b28e422ec428773c64af647598c26",
".git/objects/27/881b19243e468c3f56f6440dea2106b51a591f": "141d648f2ac8a3d3772947975253e043",
".git/objects/11/3f852eee68061751379f13c0bdcb47d1d5aa35": "c2cbdad3dc391df55d1b97da0dcad833",
".git/objects/16/7bd80f5b96538273ffa4570ebf38195dbe19d9": "14e1312cff1d6923a9412f5c11d3844b",
".git/objects/42/2a4f81ac7a707a686d3bb91c5f7df6d0ee6cd8": "96cdcff7be540fa7356c4666ba83fc62",
".git/objects/89/2731c13c7d93e70ed783dc6023e15bd9e65b84": "6324657d711d318dda469c166a1c925e",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/f800c6d6213619d9e4181c9c9f9e1bed2b5496": "9c0dd50d75ec47d5a97ca7d6f068bfd3",
".git/objects/45/4bff3081eaf03d2d458de7599048e5bf14ac39": "35ae1c623ec13aaa1d914ee144f5ce01",
".git/objects/1a/67928e59b0ddc17bab32bb489bbabaeac529a2": "5af64e38a1d31e6ce3c0ed8aea47ba91",
".git/objects/1a/2f0847ec44a6302b08f98f71d719eb3d1b9f18": "abab2e2d676949d3dbc8a292396e4f99",
".git/objects/17/ebb8c107329e41f9c17f127d92b0f30b2b5f5e": "d735033a4a6b1b3abacf7958b73cfd34",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/26f3a2700ab9e80004d60ecdd961d1c9fe58aa": "492452ad6da540ccb74968fcabeff376",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/d5f12fba8861ac6df3c998cdb4c2527d66d941": "128845cc7efff42c807bc50fdb1bba38",
".git/objects/4d/7dc959d40dea6ce0342469a5fb12db3b61edd1": "2cd66be7af6b1fd92471e4fc65a6601a",
".git/objects/2a/7862d4783aafd64b647c49a596c8bd6f8bf279": "44f591db345ab2d1869667df00cbeabe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/a25fe8db900e6375549cd9747a0622b057d450": "2687c6c1961e84d946a84a34425d2e83",
".git/objects/00/b234aab49517746623cdcb185db812d0c35aa8": "d142cb655a37d6597788c4a30caa0502",
".git/objects/5d/d1926d997d8c70d23b6f51754d77716409f71d": "be552862f6da22b19ee34decf731cbbf",
".git/objects/31/3560475d9b877ceab16cd0c9ece60d9c0a6ec6": "7a9c218c158945a271cd7ea23b5f0d55",
".git/objects/31/a28d1d2ba50b6f1785a9cce8b88ad003e6776e": "2dc8c90042b07a1a99e83e5c3732eb63",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/ca02490daf34cfca1b4238c9535153bec6dbd6": "088e9cb92524b4ea9b6906bd1f99c726",
".git/objects/30/1cee6cab2a65281686868a05291e1286e7d5e4": "47726fecc4402bf00f82cfa2a5c26769",
".git/objects/30/f3db7e61a37603bb51298b9c84d4b48deb10e4": "a0f939302e2703031685cba9861697e5",
".git/objects/5e/32552fec92a36bc8333d1087f38231c2e138df": "3157cfbcc832cd301d257e57b8165a2f",
".git/objects/5e/5d07bb3a6c332340d96cdd0f3b4965d6639205": "1373f0ed391ff8281c30d73c2bda1f92",
".git/objects/37/e7a161c6213179aa3bca95a5007c9317b1d56a": "8f073ec39d459c2f6577571730d78270",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/01/259b74e88da54b963ef87ad26a97d823e6675f": "fa0e60999815a22b951236977a11b76a",
".git/objects/39/268a958dcf683e2a6c3244d840ed995b46059a": "1c4d79fe868807fcbe00f3fc2af8348e",
".git/objects/52/89c79992b3180989f1b1c0e0797b27b0598713": "8e2b963416ef5686c2cf50e066154c3c",
".git/objects/0a/f352b8ce07dd18691182e90ccc9b776878dec3": "9d1ec17de59b495ac1ca1a93b93afdcb",
".git/objects/64/74553ffd84992b33b5089f6acedead4fa5d3f4": "81695f02da310776b4639bbe7a0f3f6d",
".git/objects/90/a4ad74bc94f33e6036a221d2e5a1713705373c": "afea65f79b6b292eecfdb8f56fd4c1c6",
".git/objects/d3/1ace0bc818abb763af2b5c7078652cd725bee8": "03f8a728a34e5167370d57b8e0d28b2c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/08ed63d6294834db5e82783ee7f0bfca526b7c": "38110a1ab7e31cbe83a9bae9f6fe064e",
".git/objects/dc/bebba7ebc5a90865ec02f461f3f20c52ff4b29": "a53b20c49f023376785c06cdc5015269",
".git/objects/d5/b69b16a6eb03892bb0a73a35165e06dfac0ded": "5b0f8fb20e1a66a1c2817e85ec84e33f",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9e7300d93e2dcd173ec6f8161e2284321ebd28": "dad38db05e39431fe5b0f08ede84d3f4",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/a325ba95f69dc5cda410460996231bb3f1ecc5": "9b9493fb8f50ce9e2f73b0c78a8d564e",
".git/objects/b0/52e71e9eca32680a744b765a1ff5b24bf1abd6": "25e10b713d06c3f43d65df7fd068134f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/0545577105cab2694feef68042088c9b1f2b8b": "7210d91837f6eba19e697d558709bf94",
".git/objects/e6/ae2b048ae0225184d1ce4be7eac47316179a34": "d0ff81cc66abd30b0396b57aef908fbf",
".git/objects/e6/9d63901d31fd69feed72e74ff2a589c8439e84": "9432b43bad058a2d25c1bcf11586f2a3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/3bc6f441a8ea5f843f52600162bde1bf0ac6a5": "ab31a5bb603e9054ed95f9ae27dc3092",
".git/objects/f7/88184f61358a9106aa9887f39e643aeca6337b": "8372cc831fdc6d62c1064b9421325b29",
".git/objects/f7/c27d4aa9f0365abcd3e2a00b82a3c6cfcd6590": "f35c4311d39a8ebff53289775a723a8a",
".git/objects/f7/96b2196e6b9fd642ed692a179acaa39e1f53e6": "c4b946e4f232d358d920f988d3646c7d",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e8/6d179b79df3c7b6e41f74eebaa858183312368": "16a3fd2eb01ce75805106ba98c72c7af",
".git/objects/fa/efb79f166b970481b4790a2d7dc8de770fddda": "4deb29eda2f7545c6c80d433efbd4254",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/941d4eccf0ad9a2c3ad9384e7e2104601fbd5f": "5c4edff32ec6261280c681361afff5d7",
".git/objects/e9/64b6ba091e301dc1dd199904865c5621b41ae8": "be7c9039edcd167284d03ee66fa851d4",
".git/objects/cb/4205a6db8e7c37152850b67859a09da4f56f9f": "20b020d43e7cb28b5ba117ca37f1f096",
".git/objects/ce/0de749fd83fe852174b6c7edf0d99a2a73fd04": "6f68e4218673c19a7f9fd4965eb71e18",
".git/objects/e0/b08631a390fa21ce31e6c51bf21d5293a58d41": "f3ea263778cebc8c61fcacbf2c3cccc2",
".git/objects/46/caa4a49157aad02313c372762fee5d4aed74e9": "c10bf5b005e34b79a08ed03893f14cf7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/0a4d6232de907918ac9f0a71fbc785ac28e57b": "40cc75e4ceaa4c85a3a826a46ef051b5",
".git/objects/41/cd977e2d25ff8d06e8c691ecaab316f3f2bb75": "1e4f3fd625df1f8f8851b3fecd3166ae",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/5459eba8684484d0db95f9e79cc16038fa96ba": "039e8855c1ba8fc264d87432974279cd",
".git/objects/83/5f6e769e093871edf9a7976b3792f96711cae5": "a5f3a93cf55363623727389a3cdf7821",
".git/objects/77/ae18ee83610b531d38f8c1ec87e67243da287a": "eb4b55250ccadf8128c995dc1d5400dc",
".git/objects/48/3167b70cb71075bc17c144fec9eb7317ecb7db": "09dfd107f53b9b1b7e1a7df6ad4c1fbf",
".git/objects/24/3ef2700f9f133821084e7849cb7dabc48a107b": "13608278b889b79f859298062ad46145",
".git/objects/23/371951cae60afddae447477208ea06165bcae9": "ede28598c2f02c5b3ef81aedd12b32c7",
".git/objects/12/856358f7ca802666ed14f500054c0d5feacc82": "51d66dcba70012a8eefbac9bef7c0447",
".git/objects/8c/41a6038a44788fc59e9e860f0eecee919140c6": "a11a59874c39f9189bd4a23e7f85e141",
".git/objects/85/a238d45fb987cb0d4f85bd799844347a251676": "500e573d569c9516ee4229a57eb2c719",
".git/objects/85/4f78852c43b9c01293884088050c20f69bf363": "2dc99b413e8f5e3a6661a01ac76bb320",
".git/objects/1d/d026968e6f81a2d31759691cbf7f25504f3d3a": "e3bc1436dad0b8670307a2ea6c2b2b1a",
".git/objects/76/3202f485df5e1413170536df1838786f486161": "156d9f130723598efccaf93cf5e7a626",
".git/objects/82/36b95e551941cec1fe14c778b16668c187779b": "26858cd610de4b8bd767c1579937db66",
".git/objects/49/403ca338039eb2dce1c6e8710aab7535a2fe17": "585eadf733252b0d9a1850e1e86d528c",
".git/objects/8b/2770c2773ee36eb9170baad8bc1e1aea791874": "f531c2bbabb701dcbe3a9d2d8a7759a8",
".git/objects/22/3c2632465e6dbaa4c14ee45df2cf350ffe46de": "31234152ddfec9a8e58ead56c156f7a4",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8272db79cf60b2771af24dc111ea6290",
".git/logs/refs/heads/origin/main": "666a91b4ac0cd3d606587bb02b0bf697",
".git/logs/refs/heads/main": "c216909c9f8f26fefa8b6a7aac9ac145",
".git/logs/refs/remotes/origin/main": "cf0b750d217211c3a8588906ab908a22",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/origin/main": "571f610282a7dbcc1c5d8086d773032b",
".git/refs/heads/main": "9fa4714941f922d6227a6b0983d965a3",
".git/refs/remotes/origin/main": "9fa4714941f922d6227a6b0983d965a3",
".git/index": "b481d5997d8eb12cb21126ea55ed4e45",
".git/COMMIT_EDITMSG": "68791295aece9ad79183c13767bce60e",
"assets/AssetManifest.json": "4fa7d5356b1f9ad9db93fdbbdbe33404",
"assets/NOTICES": "b2a034fe00df001d95481f952cdf85ee",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "042a95ffd0d55dadd115633256714e21",
"assets/fonts/MaterialIcons-Regular.otf": "0586cdf5a936344e91514f85f495d41e",
"assets/assets/khine.jpg": "096c5c8e420aa536298e24a88aacf592",
"assets/assets/developer_girl.json": "ec9d070eac8d52a01b1250f11c0cc792",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
