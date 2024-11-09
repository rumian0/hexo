/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","002d7856600db6cab3ad43ded31e76e4"],["/2024/01/22/Markdown/index.html","7f26d8229a82c7052cce7f0e6ce20030"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","8db7b6b08b888e2f2804895b21e7b184"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","962ec81bad02536ed763ca6cdd175824"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","95b1ba520910f9a89c138faf048e99ba"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","4914cb9c212f8a458f14223ac085b194"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","218edd7f00268e0a9fdb4bb3fceac6e5"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","7fb2a9e49d69eeee8bbecd89b90c7fe1"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","75037bc96c2eaf9147bf8dc2018c5f03"],["/2024/04/10/C-saolei/index.html","18fc47941bd50d7775be411ee70f99b7"],["/2024/04/10/free-yuming/index.html","f84ff2115822ec2a6b9ed07385e94eda"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","0e1bf26fa806ffb0172f5061de9f05a2"],["/2024/04/21/kw/index.html","4fbefa1186b38f3b575971d9ba4ea13d"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","02fd6aac26997edaaad761fea151d2b8"],["/2024/05/12/music_download/index.html","2ef9301bb9465ef37539448f8c8158dc"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","dbee7bf4879723017b598ae07692b076"],["/2024/05/25/Vercel-Typecho/index.html","09c5506fcee8020333c4db99a139e954"],["/2024/06/02/website-all/index.html","15d661aabea262b6572550c7236a19fd"],["/2024/06/17/tools-box/index.html","476bef68679a2109d276430b77c8d87f"],["/2024/06/22/biibili-zhilian/index.html","146fad0d4e02590cf4fe6561cc35d742"],["/2024/06/23/sqyy/index.html","026e248bb6dd6a3b465ca803c8899cad"],["/2024/06/24/win-chachong/index.html","7b408c5e516c4fd3c0aa106af1ec3ec5"],["/2024/07/03/dyd/index.html","503fcb857788ad3d0d1d75da567c2cb7"],["/2024/07/03/geospy/index.html","0597d7104e8f7c8b7933a870a4c5c0d9"],["/2024/07/16/TuneFree/index.html","2f5aa4c486984ae3f5fd44081acf76ec"],["/2024/07/16/pdf-repalr/index.html","f7fe3df454ed5ddea0cd4e04923e253d"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","51ad01fea6114e014323e097d032c5de"],["/2024/07/23/an-yuyin/index.html","7b450e27300276b9d17014bb64a23fee"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","f8347edf8a79206b1f1c5829d18a1724"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","c7ba29742e6a715725cb73738f1dd2a3"],["/2024/07/24/win11-win10/index.html","b2413a55eceb56548578da765477caf7"],["/2024/08/03/wu-muose/index.html","fd050f2222f2f427f7c339559584a634"],["/2024/08/04/ab/index.html","0698d611e26b0318d8540d9d3f202386"],["/2024/08/25/mp3tag/index.html","c228d734a4f6856e3f9d2a72566765e0"],["/2024/08/31/cf-words/index.html","f25723d8f63ff0305fff3d47a8879462"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","4a83d7db62d6e85698af8b6e4a470bd0"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","a52dc66f5da150a1a2fca47f2c33c1ce"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","e17088290da07a22b947a9590a8d6706"],["/2024/09/30/123-liuliang/index.html","fb21bf4ab62a57d897662236e5aadb2e"],["/2024/10/01/app-allmusic/index.html","ae38f72ab3beef071cd72528985ec0ed"],["/2024/10/01/win-musicfree/index.html","829a156fe618ce3b0d567141ed463efd"],["/2024/10/02/fire-xinli/index.html","d5b1e4faec6e137a77a3c732a435bc6d"],["/2024/10/02/win-wyydaili/index.html","1738a3424ad57f7e176c3cef4c3847d6"],["/2024/10/14/qq-histort/index.html","86271f399e5f6856a8a492a9a5ca9fec"],["/2024/10/26/suijip/index.html","066020d54f2988a23ae07345051c4d9f"],["/2024/10/27/ai-tlp/index.html","8370c8884bce2988afb5c63b8b587679"],["/2024/10/27/cloudflare-cfff/index.html","aacf4b6da3b2b917c47c712a4eea1fe9"],["/2024/10/27/tvbox/index.html","0627dceb0df7bbc9b6af4b1de0287680"],["/404.html","31c68c37404520a8c91d3b0a974ff6b0"],["/about/index.html","48e4688abf5026fd8b9636074376435f"],["/archives/2024/01/index.html","f6832ed23ca4924e62f29bfae34e4d0d"],["/archives/2024/02/index.html","6055c936328669ff13802d17f964979a"],["/archives/2024/03/index.html","1ae2b9ddb6f30ec96eb08a79234dceb9"],["/archives/2024/04/index.html","2ddfb40df7395bc4b018797db3625ab8"],["/archives/2024/05/index.html","1a87c66c676e41fbb624d826f28738b3"],["/archives/2024/06/index.html","fcbf28d0f36a9e8fb86e7b4e3c490f16"],["/archives/2024/07/index.html","497d2a8efa3a069562fcb190e8a09fd2"],["/archives/2024/08/index.html","17481c7f45478226667209653891cd64"],["/archives/2024/09/index.html","2311a663854f0e1d3e17df3674feb6da"],["/archives/2024/10/index.html","8455fc93647c9e832896c51a411ac0c1"],["/archives/2024/index.html","cf8997103c12cbc8e5f585221f884b28"],["/archives/2024/page/2/index.html","b344be204943fcfc47d099f4fc1b29df"],["/archives/2024/page/3/index.html","e09313ed5934021b9073938875a74f02"],["/archives/2024/page/4/index.html","495c4545c64db8bc77cfb8f4e6c37b63"],["/archives/2024/page/5/index.html","b7a9991c75d0829f53749891333014bc"],["/archives/index.html","7582b77dde791cb50725d51b6f03f455"],["/archives/page/2/index.html","f00080064bf7e2b3d5ac7c02d14deed6"],["/archives/page/3/index.html","5a11e1a8755e3af45958ef51dee27339"],["/archives/page/4/index.html","5f968c95d2120ac1fe6172e5a9bba8db"],["/archives/page/5/index.html","473e84feea19deb0f6952aa1b4eda3dc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","48bb0e28130b4cff6dcda96220b39c7f"],["/categories/index.html","a02b50b3820ddb25696108295855122d"],["/categories/学习资料/index.html","3b1138a8fe2d656f43338d7a49c701fa"],["/categories/安卓应用/index.html","d2a1de6a8d16633710dcd5f1b5c71038"],["/categories/实用技巧/index.html","0491ceb595677c31a89ca2321dc5f96c"],["/categories/实用推荐/index.html","74b3f6a46b38a0cb0814ac74d9b85213"],["/categories/实用软件/index.html","1fb77c2b8f39f95003efe46fcbc7502c"],["/categories/实际生活/index.html","cfab7d9beb16b5bc3dbccf2679677e82"],["/categories/影视资源/index.html","752b30181c03980012f54dced4f73d21"],["/categories/心情随笔/index.html","2c5a187e041e86e2df600501dbf0c57f"],["/categories/心理实验/index.html","e7820eb11882e33634dffffeaf7575c9"],["/categories/技术分享/index.html","c17eb9ccbdae374707f1f70e095dea44"],["/categories/探究所以/index.html","78bcea99f1b2634f9472444b328d2cc2"],["/categories/硬核科技/index.html","a7b7317208a5f800eb5dcf88612f62da"],["/categories/硬核科技/page/2/index.html","faa5eba3bd7f7f43d4584a590412a3fa"],["/categories/编程语言/index.html","a97fa2bb398cda50cf0d7a63816ad3e2"],["/categories/网站建站/index.html","874772191d2914fb91c4731dd9636929"],["/cookies/index.html","f6c9e005e62bb47538bd3bc2727d8ee1"],["/copyright/index.html","055211bb087ac149fc6520c8f0eb21a6"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","f487d9db305b62d91ca279e597b1bc97"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","fa2a2124edcf8d37a65d31511d5f0da1"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","a04652df8f60c4df36aa6baa2107a305"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","9e4cecd93cc9dcc0c790352e19e5190c"],["/message/index.html","a17f1bfc8f63bc5d1239f5b18bb887ad"],["/moments/index.html","39b6c6989fa3489020fbc5ead8326583"],["/music/index.html","cdc6d3278739acbd48aa63e2b31e064e"],["/page/2/index.html","8ab49d6d46fc61adc0745b52471527f3"],["/page/3/index.html","a2c13926f7d64b8317ef41a75b3db134"],["/page/4/index.html","f0a7b91297065d780630f4f62f52fe1e"],["/page/5/index.html","700512032d3b7b63f8ea5eb422a1ba4b"],["/privacy/index.html","8e3d893934ef70744cb2b489a025b380"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","e81edf6415cc0c25c29f369bc41f4a20"],["/service-worker.js","5d75f56bd3d76a619d251cbc469b9907"],["/sw-register.js","90e1c486ef4e0baca39e03dc663e1621"],["/tags/123网盘/index.html","3be33a9eeeca9c2844cf7b75a461bc12"],["/tags/C/index.html","54e54d54bcdd5d99c22def1d8b2f6997"],["/tags/ChatGPT/index.html","6a42493d904c9d0b1bef6b4edb3d771b"],["/tags/Cloudflare/index.html","7f4ce1fa6785ddfc8f6c857328e5338f"],["/tags/Markdown/index.html","328e474877ffb0019a7e79da3e67e6e1"],["/tags/Openai/index.html","c323abb21de19997b20f1c5e6040b78d"],["/tags/QQ空间/index.html","28410071e442170a6ef8bfe378058f7f"],["/tags/VPN/index.html","b4f9420cf3c4432b5b258a02619db3e7"],["/tags/app/index.html","9a22683501df524f69017372208a4605"],["/tags/hexo/index.html","2b53284c8e927c4070a6e837140dd79b"],["/tags/index.html","90274fe3774501b1e3a882032d8fe2f8"],["/tags/works/index.html","9dd242440e381d65c3aa2f93cf54d2ef"],["/tags/信息修改/index.html","8015058a69921cdabb639fcf71be1667"],["/tags/写作/index.html","1bb7920194b786121f5cdd0de96b471d"],["/tags/分享/index.html","292e0b239ac9b60c09a988ea5976604d"],["/tags/吾爱破解/index.html","b394c9f3fbdd796bc06a63ed3d7d3d5b"],["/tags/塔罗牌/index.html","3b8cbc38d9a992cab9e8c2c66aeaeee8"],["/tags/壁纸/index.html","4d5dbdc23666eb1cd3025c09342fb14f"],["/tags/安卓应用/index.html","9ec8edca85d9ba90bcee8d418d9aeb84"],["/tags/安卓应用/page/2/index.html","04f63745c213129e8c56b958d98e41ce"],["/tags/安卓软件/index.html","43b6b3045198e4c90fd648db2ead1cc0"],["/tags/实用/index.html","3425709c17129b024819fe677e6738d7"],["/tags/实用推荐/index.html","7702af4f9e7909686eee02b74605f136"],["/tags/实用推荐/page/2/index.html","9c7f56ed330ac29354059eb122e807ff"],["/tags/实验/index.html","134c3828922434c08577a1dbac4f5925"],["/tags/工具/index.html","989967f237aa90576f2d87b650ded0a4"],["/tags/工具/page/2/index.html","6f935cbac77febffe1f34765bf881618"],["/tags/广告/index.html","10be7979026226f990f0b8c97e084a93"],["/tags/建站/index.html","c31abe86297997bab0130185c33ba9e6"],["/tags/开源/index.html","3f48805302391852cccc27326e813958"],["/tags/影视/index.html","8fc4e8b64c8c487442f4e39db6c2b05c"],["/tags/心理/index.html","f587de8eb7238fad5bf8015aff4ec2b7"],["/tags/思考/index.html","7ed0d967a973e1e7f463c7ea521edfce"],["/tags/技术分享/index.html","3a6e9438c13c42f7a4dfa6746b363e78"],["/tags/指令/index.html","7eccbbee76dd1fbabcaa1006927442cb"],["/tags/探究所以/index.html","1deb3c066e174b304cb2ce37734574bb"],["/tags/推荐/index.html","5cf5ac36a06e5b7438525ffe6f74abfc"],["/tags/文字语音/index.html","f6a9feda6a6ce8f4e2458a222dbb910e"],["/tags/班级/index.html","180ce7b5eb679b2710cb0fe36de51fbf"],["/tags/电脑软件/index.html","0b7f05da83a731db273cf0496b09792b"],["/tags/电脑软件/page/2/index.html","396767604e01e4768f2cc9b0536ee4c8"],["/tags/百度网盘/index.html","29a60b0a12458acd1328acd6ca577f81"],["/tags/科幻科普/index.html","b2cf4e61bbf7c72b26b98a7e653bb9f5"],["/tags/精选网站/index.html","aae27dcb3f31c519c0ec963bbd90e1a0"],["/tags/系统优化/index.html","a17467475bda60fb0974bafdc12e4de4"],["/tags/编程语言/index.html","9e004ecb367561a52bd822ce176d5d0f"],["/tags/网站建站/index.html","1f4f944e03c201b28c3a8d072f1ec05e"],["/tags/网页精选/index.html","1b7984fb82f435fb7743fefa93eff2e7"],["/tags/节点/index.html","0a2b358c8df5b74b5789dfcccb6dceb5"],["/tags/视频/index.html","b1c0d396b33743cbc8e81cb964e9c064"],["/tags/计算机/index.html","81a52aed6a183ff391fb6535eba2532f"],["/tags/记录/index.html","e153a25d5205d4992254102c2c98dca8"],["/tags/部署/index.html","c49cdbf263385600898d33711fa18e51"],["/tags/随机图/index.html","3fc30cffa162dfe097e2717dc943cc24"],["/tags/音乐/index.html","7638f4f13c2fcc5cc63242e0304d6f60"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
