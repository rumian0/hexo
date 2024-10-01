/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","4fba42b8d46d739773c0ceeaa87ce65c"],["/2024/01/22/Markdown/index.html","9b90d59d1e3660eb3747f8c06c596438"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","9dce71537d1061bad12ad72cac321c72"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","eab88f3580bbbb414dd6b1a56926fa27"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","30f84893f05c244a1c1618b359eb8293"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","74a5cdc9f262505acb473b7b736cf64d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","090b32b9c09408f7ec05851d8a13085b"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","ca3082d178dc97ac8176ad15ec7e2b2a"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","4e74108d1f8763856984373e23296576"],["/2024/04/10/C-saolei/index.html","3f853acd0fc9b63684eb11fc9288aee2"],["/2024/04/10/free-yuming/index.html","8f1566122f058f56f8229d34ddb03d41"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","ff29bd2fe9c7085213dc3d21dbe985ca"],["/2024/04/21/kw/index.html","0b57db79de8a9ff9089d16c13c3b7d5b"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","d523533159e2c19832cc3c61fc361ec0"],["/2024/05/12/music_download/index.html","fc95c7ea57206df393c3eff455fc073b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","e50ca595207c818958ec99689bb919b5"],["/2024/05/25/Vercel-Typecho/index.html","40ba0a560badf7232203c70027abe6ca"],["/2024/06/02/website-all/index.html","74841a147336f5e0bea057af08539656"],["/2024/06/17/tools-box/index.html","e3615b086b34077c3bf959875b11d7b6"],["/2024/06/22/biibili-zhilian/index.html","1c4a954515e1e9f561c0dda8ab3ec1ca"],["/2024/06/23/sqyy/index.html","31293865d6c624b075ddeb35f879fc71"],["/2024/06/24/win-chachong/index.html","682897082868780d25e75a3007dee90c"],["/2024/07/03/dyd/index.html","7975c48ace5d41267221240711c592a9"],["/2024/07/03/geospy/index.html","7ae0872229759f34104dacb9bb3db783"],["/2024/07/16/TuneFree/index.html","082ff973c85c7a508a442a409f27900f"],["/2024/07/16/pdf-repalr/index.html","75ca6e8ecc850121824368ec91c96936"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","86e1ae51df328a2292b3c0e14a3ff2eb"],["/2024/07/23/an-yuyin/index.html","79975e6229014a5b999ece7f0d45b7c0"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","b65f5495c5efdf4324a06bd0419124eb"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","93dd4115fdb0d4a1875e904475c09421"],["/2024/07/24/win11-win10/index.html","957fdc1bf6af0a869cf9aab578ac8eb0"],["/2024/08/03/wu-muose/index.html","0bd55e5fef5ff4457096608998b07c51"],["/2024/08/04/ab/index.html","818ceb8980bda1ca13ac29fe8949d12d"],["/2024/08/25/mp3tag/index.html","8e04a8e481774c205e20d93c0c595f31"],["/2024/08/31/cf-words/index.html","4091ec6dcdb8147568f3556d35a5dc7e"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","91b41277a1baa5c0617a322f9a717577"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","01fe7073fc8d93865ca8463f314a4f26"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","c0fbd488fd41431547cd9c7efc4f0d56"],["/2024/09/30/123-liuliang/index.html","fdf214bf2487a0dcbfa53e597cdd268c"],["/2024/10/01/app-allmusic/index.html","36066b5b4ebaa690da4a23f35311abc0"],["/404.html","a4ca080ecd4a6a1f637affe899b5d06b"],["/about/index.html","ec075eee6a6ea512f67ea37038847426"],["/archives/2024/01/index.html","d6d7635b03b196693bca77e2feb593f5"],["/archives/2024/02/index.html","10e1d8b748561141924a5da0a5a43e4f"],["/archives/2024/03/index.html","e89b3a6993c842665ed9649156b7b44a"],["/archives/2024/04/index.html","830bbecd4b5fd9cf8b06a53a1be2da64"],["/archives/2024/05/index.html","34a91568b627b709ba750cbe6bef3555"],["/archives/2024/06/index.html","2266d28f03df8db548189cfc50087ab2"],["/archives/2024/07/index.html","aa8f52f9de154d750ee041b85a530595"],["/archives/2024/08/index.html","4f216346985f9e968773c88fd2eababc"],["/archives/2024/09/index.html","2276b4b7bccc08ebd67b5f8c329d2166"],["/archives/2024/10/index.html","97d14a0c867e1c4d091bf416299f362e"],["/archives/2024/index.html","98700166b20abc38fcf065ed2fbcf66c"],["/archives/2024/page/2/index.html","074d0906a974f836e50143f89dacadb6"],["/archives/2024/page/3/index.html","a58a69c5627558d4add2e2b2cb87ffb3"],["/archives/2024/page/4/index.html","b9a90f39487a10176fe06f7c688a7dcd"],["/archives/index.html","1bc1f448af02f047fe484999f29fe953"],["/archives/page/2/index.html","791ef137d4eb47e4ba1bc1628dc7270d"],["/archives/page/3/index.html","2c6079dd33207e234f4c5682df4ca19f"],["/archives/page/4/index.html","7a9c04ca05933a8cc5a6370d8310fbf4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","47ff86fb7a0e0ab09c4d0cc152bd02e7"],["/categories/index.html","1977d1bff548f61b4e17a6af9db31c07"],["/categories/学习资料/index.html","a2e58a32acd14f758ca921cf2714b05a"],["/categories/安卓应用/index.html","7894617e6c52f3d500ec9c83aa46f5f5"],["/categories/实用推荐/index.html","eacafe5838aa14d64a09e79d92a55b9a"],["/categories/实用软件/index.html","edf5b01e34e6d54dbdf0e0053bd73983"],["/categories/心情随笔/index.html","c6abb10188d0678b7cc87fa2cbf94b7c"],["/categories/技术分享/index.html","50ccbdce678108e88de24fc67142719a"],["/categories/探究所以/index.html","1c97106dc255a78b05700701800d91c1"],["/categories/硬核科技/index.html","8acd23fe495b4287b30c82281dd81520"],["/categories/硬核科技/page/2/index.html","383f57ec4596902467e83fd01b6d28fd"],["/categories/编程语言/index.html","830518b714c420f036fb7bd4a6636d10"],["/categories/网站建站/index.html","5c056a5c7df1ed7bde0b054117971a57"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4877e74fc323b22e3fbe0270a1c47690"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","07044ccd27927724b54d7112d3ad7a87"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","a30caa4e77451f6197d255118b226efc"],["/message/index.html","195300a4ecf5c2f541245a2eb256fd85"],["/moments/index.html","55d7ad3307d9d543185f2f804c8a2c10"],["/music/index.html","b5f048258109c910336b8580df156055"],["/page/2/index.html","3c26b2822b5f903732aa9aadc873a473"],["/page/3/index.html","c64a9b7da4561fdcf4f220ad5f8e0770"],["/page/4/index.html","a238b40528d830d102ac4049c05265ec"],["/recentcomments/index.html","ceaad0fe64c25c57df377948e6c431ec"],["/service-worker.js","16fb359db0882e2207149df6757f19a4"],["/sw-register.js","02298acf33ec3cc32d9d84e1f658b914"],["/tags/123网盘/index.html","bd29146f2bf7198329366193893d52d3"],["/tags/C/index.html","364bd716254b8a3182c28a679c32d906"],["/tags/ChatGPT/index.html","4426972b66165f75544459632001e0ec"],["/tags/Cloudflare/index.html","a76b9a8f162564fe6be1826d6b81a9e8"],["/tags/Markdown/index.html","b159e3b124139e6ba3ba21641a4334a0"],["/tags/Openai/index.html","7bd4c02d1f6276079953135574738ece"],["/tags/app/index.html","08dc278d8049efd76e8c4e288ce3ac33"],["/tags/hexo/index.html","ede31fe5021acf2ac4d630a1a48818fb"],["/tags/index.html","7a321a1226fb5f5cfef0a0279b7e6f47"],["/tags/信息修改/index.html","e86d616bc8356d9c5492c55a9e27f715"],["/tags/写作/index.html","a60a2f6db2110f874294a23c9f119ed9"],["/tags/分享/index.html","29e155b8c21fd220d6aa6d42cc4914f6"],["/tags/吾爱破解/index.html","685e8a686310489131a57a54dab8ea73"],["/tags/安卓应用/index.html","cd1af426334cf978efea1f43253fdb31"],["/tags/安卓应用/page/2/index.html","34d03deab73cf765a20cea88a7c3c1dc"],["/tags/安卓软件/index.html","4bd8fbdff05f9be814105bbd2740a613"],["/tags/实用/index.html","b0c78f949983f774eefac420dc02e867"],["/tags/实用推荐/index.html","da15812a13fc24f0b9b164a131044b34"],["/tags/实用推荐/page/2/index.html","61e430c68a5250d1c513595206a712d9"],["/tags/工具/index.html","1132a597812b7929b88ba574913b8af4"],["/tags/工具/page/2/index.html","0516933c9f4776567a1e6952d4fc100d"],["/tags/工具电脑软件/index.html","bb89e797a91a3e44b7fdb233e5d6d3e4"],["/tags/广告/index.html","8f204f989f7d65e3db9f40be1f8453f9"],["/tags/建站/index.html","381c515e6f2c05c4355c232e559b5644"],["/tags/思考/index.html","fac6e619e255cf3d8f77e72b1e096c1f"],["/tags/技术分享/index.html","a8c9750101adcd8c37ce0545b0040cb3"],["/tags/指令/index.html","825da7ce1b8ac9e5ece6cd0f57febf19"],["/tags/探究所以/index.html","f39dc9f85b779d777b11ea973a57029f"],["/tags/推荐/index.html","5049a4207e911a62cec3b7d9c179d322"],["/tags/文字语音/index.html","5e4c3811c297853f268a7e04f5a5ec25"],["/tags/班级/index.html","027ef9ad3160d18f4cc5775926a175b7"],["/tags/电脑软件/index.html","815218ead6e6cffebc69374c879759de"],["/tags/电脑软件/page/2/index.html","195946158722cf31e68a7073cf62e3a4"],["/tags/百度网盘/index.html","30173d0065a77ab10ed42b05c1963a1c"],["/tags/科幻科普/index.html","6fcb526612f02f367615959e13af941a"],["/tags/精选网站/index.html","2ce4671b8454004c315270bdc10365a1"],["/tags/系统优化/index.html","d57ebee3debde43824da5b4fed1ac3e1"],["/tags/编程语言/index.html","3c8a93de11930e6af5291c0b1c6e6ccc"],["/tags/网站建站/index.html","d5e4b021d41b62f3e0c5590567a4e228"],["/tags/视频/index.html","7163147f789160c06df572ac3140a750"],["/tags/计算机/index.html","18f862ad07604dd89a5c88d7dd169a18"],["/tags/记录/index.html","4fa4856481bb3dbaf0931b556d109660"],["/tags/部署/index.html","9efe6ca7ce58211cf6e2e80087829da9"],["/tags/音乐/index.html","65a87441229b4d1c91107414ad1ea405"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
