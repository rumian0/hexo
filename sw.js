/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","fc37003c9dc5e08005de4759a9ed9e94"],["/2024/01/22/Markdown/index.html","c566c178b28e8e4a20a73e2691d2b731"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","828da75e8212f4d80452094690559020"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","4998e7b7dc43b22120b862e4641496a3"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","67bf5af8ddc7b62389f3ed9742ceaefd"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","4cf9edf3890703573919264d509a8465"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","21f2f131d45b0686aa158d77bddf3d77"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","2429cb06263ce0a50cfe9b0354f5f070"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","1bbc8c2147ae4dbf7331f1651fcb4665"],["/2024/04/10/C-saolei/index.html","7afaedd4a39f15d6a012538b6c4e5015"],["/2024/04/10/free-yuming/index.html","3f1cdfcd77c5696c8a184c779b6b57f2"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","cce4070f616aa59a0de9d588613fc9d7"],["/2024/04/21/kw/index.html","ab6ad2fd0ca53bd2c3c0ad316c06ff46"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","0eb7f221ada8fbf51f027e9108f4e9af"],["/2024/05/12/music_download/index.html","8bbee85c579ae15a491f4fb74ec79bf1"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a03da8dd36f07e762cfadd41d876a1f4"],["/2024/05/25/Vercel-Typecho/index.html","e66befda2ec702c684e5a241819665ed"],["/2024/06/02/website-all/index.html","64fc1c8a33eab2af0fc820d3a32a2344"],["/2024/06/17/tools-box/index.html","640be82ca6b8bccfabbc3ce59d4866db"],["/2024/06/22/biibili-zhilian/index.html","bc591bab145339d683dc85dd623d7b2d"],["/2024/06/23/sqyy/index.html","99ff89dee0a891a7b1a18cf8fb28ad23"],["/2024/06/24/win-chachong/index.html","ef6a6a74d4171b3b4f86ddcb56b6d9ee"],["/2024/07/03/dyd/index.html","5bce24a2f313b00f54c8b4b65181a1d4"],["/2024/07/03/geospy/index.html","6c399c521b0e20f3d48906e70f8d0315"],["/2024/07/16/TuneFree/index.html","095324763b475878328f982a1199b770"],["/2024/07/16/pdf-repalr/index.html","330bc28a770626c0c7ca7527d96617fd"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","4049e7a0dd1fbfbc1ca8c1b27d152669"],["/2024/07/23/an-yuyin/index.html","a181c60fb7906b4271c6f3dbcccb02a3"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","0dcd47920ecc75b76ff3c8f4053883f2"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","2038435d8b7c0d71eb595bd43a1f2372"],["/2024/07/24/win11-win10/index.html","c18479b01b4185afba3356deae5df319"],["/2024/08/03/wu-muose/index.html","76bcf9b2ff10a0d4ebf3ef76e318bb60"],["/2024/08/04/ab/index.html","1e828fb869372f8a4a5d43ef841109d8"],["/2024/08/25/mp3tag/index.html","562c924b0f58e277111036438edb329f"],["/2024/08/31/cf-words/index.html","1c6ff9dfb6ae9aa5a0a757403d5e4a17"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","d6e1fefabc4bbef0e469759c47180fd8"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","cee831467e6e47f7f32e890ed5b22189"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","76839b2ee7b95aa704db90ba2a0fa853"],["/2024/09/30/123-liuliang/index.html","868a13bb2e9da57ac9ee94f4e02269fc"],["/2024/10/01/app-allmusic/index.html","7e7adf62e884cc34c9706b1479425cec"],["/2024/10/01/win-musicfree/index.html","a3ba98acf57f9840aead2f47a3cd5581"],["/2024/10/02/fire-xinli/index.html","9afdd30a0b5cdf1cd633963eb636c436"],["/2024/10/02/win-wyydaili/index.html","259e8ce048e8d0b4323571c1815c9851"],["/404.html","7eda37fa76d9693ba4c64919ba44ceee"],["/about/index.html","822ebd6f8572f924085785e63a842cec"],["/archives/2024/01/index.html","20a5ad0ce40716e447c5e877b1507f6a"],["/archives/2024/02/index.html","26f864de31695c7569337c71ebb86c49"],["/archives/2024/03/index.html","7b9b44bacca22d8ccfee386720ef9104"],["/archives/2024/04/index.html","a99dd4f7c33754350f08c699837e8fb7"],["/archives/2024/05/index.html","3a42453decb167801639ddaee257c99d"],["/archives/2024/06/index.html","f818967114479b6873037dd990457847"],["/archives/2024/07/index.html","bd200a2f304b9a93ce2e796d3499a35c"],["/archives/2024/08/index.html","66093524c8353596acc25ecb4636ad4a"],["/archives/2024/09/index.html","13877f3f578ccf5e45543a5d007f0c04"],["/archives/2024/10/index.html","a6408ee6f2b89a8d226849f6669f92c3"],["/archives/2024/index.html","14ded079559977c35d37cf7829baa13c"],["/archives/2024/page/2/index.html","9d0f6beaa2f23409bc7ab2eb7a8b8df1"],["/archives/2024/page/3/index.html","87ad7593f78e3f5478dbb8709f23caee"],["/archives/2024/page/4/index.html","95c1bb8a1a16d94549dc7c0b42993cb6"],["/archives/2024/page/5/index.html","12175f46d20cb41b2d790f550bd72cf7"],["/archives/index.html","30999c7a684fac87755becfb7e2ee699"],["/archives/page/2/index.html","70f98b2bb94c6a27d734d79f93742d64"],["/archives/page/3/index.html","8f490ab0ecf0f7fdccb6c9727b77e1ee"],["/archives/page/4/index.html","da9a67033761cac9f9e01e4e15897a4a"],["/archives/page/5/index.html","cbd19a8c42629194f60815ec69816225"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","b17a401b11aa1939ead9e4180cfeaa1f"],["/categories/index.html","653bc9cc36962d37b661e336e29e5741"],["/categories/学习资料/index.html","e58f96a35b086b2a66f7b1a39a01b8d4"],["/categories/安卓应用/index.html","bf8e85f0c42c1958a5b215ef11fa3626"],["/categories/实用推荐/index.html","8246279cc547a2b0370dbd45bd9415fb"],["/categories/实用软件/index.html","7dd50607975d8cb4bdeaee725c841827"],["/categories/心情随笔/index.html","8f0f3f170d5235f892da9fb900dcad9b"],["/categories/心理实验/index.html","d1a76f022f5a90293e184243c08dcf83"],["/categories/技术分享/index.html","2c1451efd4b899c419a7cf8a27b5ec40"],["/categories/探究所以/index.html","3011e7092a4da4aee835f81af7f2f332"],["/categories/硬核科技/index.html","244e9165eb1acf551a0bb18cddc8fc8a"],["/categories/硬核科技/page/2/index.html","faffa16613e8bb140be29461664026bf"],["/categories/编程语言/index.html","5f444a327d7a2ca74f443b20db0449d2"],["/categories/网站建站/index.html","09ee1439e48e50ee9ebe737120c85b15"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","ae4772a5fbde76e853e068cdf1bb8ed9"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","851463d4e7273564265f385e6f87f328"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","d6a50fd517e6092ef7eb450d7f4e82be"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","75c096166f68a4564659808513f648c2"],["/message/index.html","f675516099d7181b654fee6b527ca945"],["/moments/index.html","8a964befe8bfceb7b018eddd76378385"],["/music/index.html","dfa19a765f3b9cf2db4e6693689a3611"],["/page/2/index.html","bb92cc669f96e9707817cc1451ef4dd1"],["/page/3/index.html","5e90011d6408219ca3c2d2332b8662e4"],["/page/4/index.html","d1c6183437fffd3eab75834efadf071c"],["/page/5/index.html","65080ade63fadeaba006cfa0d3291f75"],["/recentcomments/index.html","37ac9c083b2825bdd1b5043c981bc5ea"],["/service-worker.js","001f22531a2b55b341e0572b1d56779c"],["/sw-register.js","a0da5c827c20c0aabb16ae0fa715e8b7"],["/tags/123网盘/index.html","fb15d2d8c606aa4c015f2541cf30000d"],["/tags/C/index.html","e67b5fe1091d0ff0f49866ae460d69fc"],["/tags/ChatGPT/index.html","f270d91f422b7d4c6cef2279d73c3cc5"],["/tags/Cloudflare/index.html","7a72321e7703736e4ee745ad9fc56935"],["/tags/Markdown/index.html","763d6e4edf830abb0e60ad4b0bb2dca6"],["/tags/Openai/index.html","872ad8f8a87d37183e2c068dea743270"],["/tags/app/index.html","14b99f2c4bda7e7ba211d7549617f497"],["/tags/hexo/index.html","ca169e6f9e875fdb6f038258cd27e5c3"],["/tags/index.html","e78f3a4e0c09764d41943d97d65e6118"],["/tags/信息修改/index.html","a5af936b62c063b57eb1a64e838cec5a"],["/tags/写作/index.html","02f9bb26d1c49cc02e1cec34ec95ec5e"],["/tags/分享/index.html","d6aede51ef303a90ce9c9edaca518bb3"],["/tags/吾爱破解/index.html","a03a2d2f9a598405ec71aa3f5a3ca6dc"],["/tags/安卓应用/index.html","ac82871a1c2480b0569b7888614bb2f2"],["/tags/安卓应用/page/2/index.html","300cac295ff6f040d2ce145c0fe14764"],["/tags/安卓软件/index.html","3fd959676a43169403755ebe4e6503e9"],["/tags/实用/index.html","afdee093b75dc2e437b9163f218fc8d8"],["/tags/实用推荐/index.html","f5e26e96100279896246dabaedcaa2ac"],["/tags/实用推荐/page/2/index.html","c2bb0d14070bdb3da2c8242910271020"],["/tags/实验/index.html","406d477afb89118baafce73a9ae27a7c"],["/tags/工具/index.html","4ba7f2a318b27f0095ffd04708d6f4b4"],["/tags/工具/page/2/index.html","94dfcddb0665bb23679a3880d6fd06fa"],["/tags/广告/index.html","1e08ff9e37d17b7bdf4888ffec0cb908"],["/tags/建站/index.html","804d6224fe205a8402c727f23f2e976c"],["/tags/心理/index.html","106d68c4de3106e393dd64aa7229f4e0"],["/tags/思考/index.html","0ff5c67a34701fe0c290b2445055ea22"],["/tags/技术分享/index.html","204c2ca1448fb50f9f7f45c5c1cff486"],["/tags/指令/index.html","7928f9e3706e2af2ce04e8b008e38a7b"],["/tags/探究所以/index.html","80cd3c7eca5c2215f18ba010c4ca8e52"],["/tags/推荐/index.html","747b260db6bde4cb2a65c10d465c40b0"],["/tags/文字语音/index.html","a8c14f318defcfddc3ebf42a2ee2c310"],["/tags/班级/index.html","5f34c4b21b9cf841607844ba4db7113a"],["/tags/电脑软件/index.html","c209dbfba66e045583e9988fb92c3fc2"],["/tags/电脑软件/page/2/index.html","37ec5188005e89be7efdc278e6189821"],["/tags/百度网盘/index.html","c305b770acd24ac4032b3b3709511c16"],["/tags/科幻科普/index.html","9dca8b01fed2318a12c6058bfaae70a1"],["/tags/精选网站/index.html","76c3def7e4326d008836a9babef403eb"],["/tags/系统优化/index.html","0c507597e8ed9dc6bfd23b8a9048fece"],["/tags/编程语言/index.html","e3b22692c415b30113e0f686ed56e25b"],["/tags/网站建站/index.html","43dc72a69caa60f64e3d82ad95161f78"],["/tags/视频/index.html","25910403284b7c10a19879b977c750a1"],["/tags/计算机/index.html","92d7699bf98911590cc4ca1af0e9e940"],["/tags/记录/index.html","c129b64040f72ef848134a87ced01c01"],["/tags/部署/index.html","a01d55cb3adef70725a9a7e81819df18"],["/tags/音乐/index.html","0315c48fb8170718623efcf375b9ca07"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
