/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","5f37a16af4cec0c67647a1a67bfaad01"],["/2024/01/22/Markdown/index.html","db02da977a541301566b5a092b9c19f4"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","419e706202311eae793ca973424acc87"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","f73c8bcb484f7b044c8dd8d175fb51d1"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","576129bc838c2be1bb32417d437f20ef"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","c99bce87358204589956f4a5ab18cb3a"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","af970cc969e0440e55d663cca1854c80"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","410522285e5f16f0f6e68ffa9eec3844"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","eb96a87dc8ba4c5d6d90e51835d60674"],["/2024/04/10/C-saolei/index.html","15efbc6590db5ce7f6cd46ad9ecb1f0d"],["/2024/04/10/free-yuming/index.html","24f9c127a4333de661cb3c90fe1a3e11"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","208a1526720012c630349e806a76c335"],["/2024/04/21/kw/index.html","cf68f91cc1378471f1632ea1757a2640"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","60af589568bc512f506ac02701d60620"],["/2024/05/12/music_download/index.html","6838c7342b3fca5bf486f44003a93254"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","ae74db7b1d2b38259e0205f3e1398209"],["/2024/05/25/Vercel-Typecho/index.html","8f6a9301bd0f5e2543c2df90a55527ef"],["/2024/06/02/website-all/index.html","b820689748b010a775a80c9d4ea1a28e"],["/2024/06/17/tools-box/index.html","b41d626ab3830abc8881bdcd259d44f4"],["/2024/06/22/biibili-zhilian/index.html","d2d202034f2abd5edc6fd35cda05417b"],["/2024/06/23/sqyy/index.html","c13a63af1089a8508ebf0fc6c5f6ee46"],["/2024/06/24/win-chachong/index.html","95229715ff1b2b6df228de72998dfc04"],["/2024/07/03/dyd/index.html","40a26cb07ef90306140f1f0adf699259"],["/2024/07/03/geospy/index.html","684da1484643098368c85540ae65208a"],["/2024/07/16/TuneFree/index.html","924c72f348e651fd3b9a0f5e1b7898ba"],["/2024/07/16/pdf-repalr/index.html","9454bd687d68c3946a80c57f28200240"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","667bb99ec708266ea059fc5469a2628c"],["/2024/07/23/an-yuyin/index.html","275e7db7d6e08418817ddaa138e904ed"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","31c5bca5f2486f4353cdfe0a5fa07fb0"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","90e33c1b89c0724d011123f12ddfd196"],["/2024/07/24/win11-win10/index.html","b7470f3334a8187ad4a793653b01526e"],["/2024/08/03/wu-muose/index.html","61b1ea2795f35232d2e1af4ad4a028ba"],["/2024/08/04/ab/index.html","452ebf6131947e73d13b221c61d4a20b"],["/2024/08/25/mp3tag/index.html","621b8816db3fd7105ef55911e283c1d7"],["/2024/08/31/cf-words/index.html","7052143f3e7119ad7c68c81f9c497a26"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","5e23a815bd4777b2a0b3355d781730fe"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","284f5186229c102c1ea9a3068245ab9c"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","ee9a5258272523a54a14689f9b6cd9c0"],["/2024/09/30/123-liuliang/index.html","468636004a968dc0e37eff2272ea31fb"],["/2024/10/01/app-allmusic/index.html","ab5d3c8b7546306559e2f26b9970e6fd"],["/2024/10/01/win-musicfree/index.html","6e469350e6de6e54c2dca7add0970e7b"],["/2024/10/02/fire-xinli/index.html","590e0bd9c12e7f67ee8fb0cbd0499629"],["/2024/10/02/win-wyydaili/index.html","d51160c64ed19565a306b8af3c65572b"],["/2024/10/13/qq-histort/index.html","09a5fdf835b10f4400cae1925387ee61"],["/404.html","155bf5dbda3d537f97ef42b1064c89c6"],["/about/index.html","27c16d80a3ae633a72c6a5012ef6418c"],["/archives/2024/01/index.html","a8eb1eee13834e7eeb6888bbd680f432"],["/archives/2024/02/index.html","caf372fbeda1bd679f63485a83c980d8"],["/archives/2024/03/index.html","67e63a9a5afa66de31df8b046cbb2b6d"],["/archives/2024/04/index.html","f81750e29c41c5299287f070ccb63f12"],["/archives/2024/05/index.html","184148f2d62cc4ee95c11f27a089677f"],["/archives/2024/06/index.html","302ed4dbcc2211c423b939cd3131ecae"],["/archives/2024/07/index.html","77229a7f11c303c06e7e4f8070253d7a"],["/archives/2024/08/index.html","a554b46aa8b09bf528b9e2bbea9965f7"],["/archives/2024/09/index.html","4b0cb3519789019959b6c78018ca8472"],["/archives/2024/10/index.html","715e4d2c97879d5aaf772839034fe6be"],["/archives/2024/index.html","347818ff5044ea5a0e00dba43a216a65"],["/archives/2024/page/2/index.html","21f589b97078411638614c2320e1096c"],["/archives/2024/page/3/index.html","419f433c8c90a27e3408d7b755ccd9d6"],["/archives/2024/page/4/index.html","6009a52dc472596e55febbd7bf79aaea"],["/archives/2024/page/5/index.html","bd9f7530836e9d5c6a448c3ed77f2322"],["/archives/index.html","c04d76e9fd42f1bec397f327e3504daf"],["/archives/page/2/index.html","3572864a6d9463c66f76d33042891779"],["/archives/page/3/index.html","d8a43e35a832fa2990e19d698f522e22"],["/archives/page/4/index.html","df2d1df72cc199cb99505fb5bd530706"],["/archives/page/5/index.html","ae0d6fa4b16a18491bfa5d0198468498"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","75fb7112089371e1e505c98d2536012f"],["/categories/index.html","95367efdcb831b0ed2f77bbf963e8ed1"],["/categories/学习资料/index.html","3d1ad57c29a6acce83b76f7cbb2ef87a"],["/categories/安卓应用/index.html","add78825764142fd476991d88dd0db4c"],["/categories/实用推荐/index.html","ceb35e1f8919f86eafe2c5317c87d8bb"],["/categories/实用软件/index.html","36a35ea117f6c8d74b6a1e5fb16c06cb"],["/categories/实际生活/index.html","92f5b72bd10481c3228dab351e43748f"],["/categories/心情随笔/index.html","accbf318465ed37f0e2f8f9fb9cd82da"],["/categories/心理实验/index.html","563c8be448be9681ca90011ce60742f0"],["/categories/技术分享/index.html","37018b77e72f92a3f2b84a73ea5e383d"],["/categories/探究所以/index.html","6f799af7ac67c46ad8f5d36760ccb36a"],["/categories/硬核科技/index.html","366c8464d228923a0e50a9cf4224c573"],["/categories/硬核科技/page/2/index.html","b426fd5d472bad4ab7f97a5f8392e94c"],["/categories/编程语言/index.html","9bcc335222318ca655accee56ad0154b"],["/categories/网站建站/index.html","ef7be8cecca50e938ff04659caa3d42c"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0fed22fa7e2bde735d7a478f3fda86a1"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","036ee372eb33c71978e02c302f501ac9"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","132ecd3ce66c235808ee59907fde427b"],["/message/index.html","691198ccf37b1732be70e0b7133999ea"],["/moments/index.html","e4a5c817496eddbd2e6861b12ab713cb"],["/music/index.html","f28e3084cb2a637b198fb6853ba74223"],["/page/2/index.html","3b4d567edae0b4668f4c0f52113491b5"],["/page/3/index.html","7902f14a64f428eb8bf1b459532c7f24"],["/page/4/index.html","bc5ea57eda1eb50aafe2c3413df59680"],["/page/5/index.html","996074772eb70e5ee1e93caaf3ef460f"],["/recentcomments/index.html","e562349e02bdf5e596008585e68add51"],["/service-worker.js","04007d3f0745ad172838c41e04c710be"],["/sw-register.js","3315546fee2ca6ed50ccd0cec29a341e"],["/tags/123网盘/index.html","924eeaf14a2ae92ee2d6d9aef4cc84b0"],["/tags/C/index.html","b8140cc80a8f55ab39c6581e0a52123f"],["/tags/ChatGPT/index.html","42fcc7ee2fe7eb4b6dfe9c899b01361d"],["/tags/Cloudflare/index.html","53a700aa461814fe8f8693acdfe0c9e8"],["/tags/Markdown/index.html","fc782cc4c41279ba7f8ace33e4f6a054"],["/tags/Openai/index.html","b141f3440dd0a7a89c2db17c796e6c2b"],["/tags/QQ空间/index.html","6c73467867a629643fc623e0fc3bde96"],["/tags/app/index.html","84d6624fadc4921b812c13ffaf5b4acf"],["/tags/hexo/index.html","710b741969a25be91e1af5230dd4a597"],["/tags/index.html","daca7c38b603be802c888c7a66ac70d5"],["/tags/信息修改/index.html","8cb092b3bb1b5e541c37ff405556164c"],["/tags/写作/index.html","3c362e7d49202144768bd7e3ae269b72"],["/tags/分享/index.html","700e8b4f2f47e2003de4dbaba2819651"],["/tags/吾爱破解/index.html","1f5ec470ed7951f5345ad8b3d69d5a69"],["/tags/安卓应用/index.html","4596bc321fc4c6ef9118bb04393bdb95"],["/tags/安卓应用/page/2/index.html","4b31a69b76e6111a3e89e9e69b6b7199"],["/tags/安卓软件/index.html","0fdac98a26675d4c03ee92858516f99a"],["/tags/实用/index.html","3d874adaa0645d6fed7f081f292ff75c"],["/tags/实用推荐/index.html","08c3924cb041dcfe4f0d1d2e44dda40f"],["/tags/实用推荐/page/2/index.html","f0fafee78d33bcca21f523818ed5533b"],["/tags/实验/index.html","d9a7d78b0e7d3b3b4ba20f37d9ce00eb"],["/tags/工具/index.html","ab02ba363c60f27df049c11bc11a53b2"],["/tags/工具/page/2/index.html","1cf400fbe480537dcf9bc82b14b10e9f"],["/tags/广告/index.html","d1871e9daf9af36bc6b17b915e141b63"],["/tags/建站/index.html","bb1926f376b724b10d69cf6948e775df"],["/tags/开源/index.html","abf08152fac693dacc576cee3405e159"],["/tags/心理/index.html","4aaeb2e9dd1a4747e2cf1a915c1723e4"],["/tags/思考/index.html","d7e2f97e79bed82d9917d72218243f79"],["/tags/技术分享/index.html","f6a23b8cd7b181fd139469f25544d6df"],["/tags/指令/index.html","f69e3bcdaf0fca755d733f6bc6cd3fda"],["/tags/探究所以/index.html","abda25841a9b7fb00a852149475c834c"],["/tags/推荐/index.html","645d339969ed5c13db88b27d17f5ee07"],["/tags/文字语音/index.html","a9b6169ca8590b6319621b31a3d95de2"],["/tags/班级/index.html","2d50a00e04d052750a3a00ccc4f6eb40"],["/tags/电脑软件/index.html","510f49e632c9a7dfad73e1a9a8aa1797"],["/tags/电脑软件/page/2/index.html","613bbbe00cb2168a654470902f31af7f"],["/tags/百度网盘/index.html","e43b6dcf963c9cc5f94e80d42f7f5386"],["/tags/科幻科普/index.html","e424f09c4fb8ed3983e4d6f247e24ab6"],["/tags/精选网站/index.html","4a7e0e23168335b7268c01072a865f45"],["/tags/系统优化/index.html","f6aef9a349e311848391086aa9fde5f7"],["/tags/编程语言/index.html","f0951b62f9354ac9e4fc56478a88cd31"],["/tags/网站建站/index.html","fa98ec6eb82e3419973b1908fe6f3873"],["/tags/视频/index.html","75e2bc6b33a8400562ccf024289bc39a"],["/tags/计算机/index.html","ab133168b397bde866a571dbd8ce053b"],["/tags/记录/index.html","b388989a1e1edfd0a867d67e27d14fc4"],["/tags/部署/index.html","d2600bb732bdea084e4d334f99d5fe95"],["/tags/音乐/index.html","16e82f939479b4632accecb3ab98c8f6"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
