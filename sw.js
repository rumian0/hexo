/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","4743d43413feaa17301befb182b3e2f2"],["/2024/01/22/Markdown/index.html","4fe233a432de120759c1f91ff2a2a260"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","d9228177d0aa334eadb0a52f1a9a5ec0"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","6dc9aa5ad1b64febd30add19d85fe2ba"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","ab628b51c28742f8dc1cc89122c6792c"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","47ea4d24665b309c5fb4e54f4c9eea57"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","a4bed50244f7673b24edaeccdcb50389"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","7081da24abdbef9a453b4dd531dc069b"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","243a38cc8fb8d7eb9754f042e511e330"],["/2024/04/10/C-saolei/index.html","f4023f6890accf6184b3fc2ad37bf481"],["/2024/04/10/free-yuming/index.html","d6191d9892db5f8265fdf278a7b48865"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","dadd0982120dacebff6d2b0af65a04f1"],["/2024/04/21/kw/index.html","8f38d78ed73d9411d99db209ca32f718"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","1dc9a4bf88062b22824d022a80d5596a"],["/2024/05/12/music_download/index.html","15ebbd5d1790968dcff5e7cfdf00cf23"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3357014dfdfabfc37f55f3754f368408"],["/2024/05/25/Vercel-Typecho/index.html","18c6e4bab0ed688847484d8858eb1687"],["/2024/06/02/website-all/index.html","e193c28907cd484bf87a5638c9d662c4"],["/2024/06/17/tools-box/index.html","1c5123dd706270296175cdf726b8a616"],["/2024/06/22/biibili-zhilian/index.html","15f1f74e17986ab855fe5b06a9895d95"],["/2024/06/23/sqyy/index.html","99edcacc51dcb53527955cda8934d07d"],["/2024/06/24/win-chachong/index.html","7d23b6bddd8e4093c63a3308a3085416"],["/2024/07/03/dyd/index.html","8829bda46188a32f4b4e93dd0c2f30b3"],["/2024/07/03/geospy/index.html","07b39691ff0db912511c5d2294c61d92"],["/2024/07/16/TuneFree/index.html","a25bcd35bff061cb009bc66ab7fdfe6d"],["/2024/07/16/pdf-repalr/index.html","0fa7f7819cd9fbbaf0045c0bf78af38e"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","9b9a827c87084a150b67cb5eacd89546"],["/2024/07/23/an-yuyin/index.html","f228c7083ad9ebc7906a3b5e43b48867"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","3250342ba086d4963480119e62c4bae2"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","2e3c6f3f495346fa9e435d2a3eced064"],["/2024/07/24/win11-win10/index.html","a2b6d0b7045b5f430e205297179b9ee3"],["/2024/08/03/wu-muose/index.html","7dfce3d80e1ae27d19e31f3036ab790c"],["/2024/08/04/ab/index.html","fcee9eee94cd1e21abeb7f85e26c077f"],["/2024/08/25/mp3tag/index.html","135ee4437b446fe88b20e3b3cf9bebd5"],["/2024/08/31/cf-words/index.html","1b643387385c7c7b5aed4ebb946e9e99"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","e09f4e3b07225c2dcb4d170e47e35a26"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","1d7184cedc0859054eeb9aa6df0c3fcf"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","6d3f3a615320e6124d89976803de7c33"],["/2024/09/30/123-liuliang/index.html","367b0648851ac82cacc17e61e9f49780"],["/2024/10/01/app-allmusic/index.html","112e86c0dfcb6e7bbd4e2aac013107ad"],["/404.html","18475ffe48227289a33ee3f03c099511"],["/about/index.html","03b237937dad67a399645b58be81ebfc"],["/archives/2024/01/index.html","f98977643d77bf25ec16efa9c94e46cf"],["/archives/2024/02/index.html","191db78021aed27e10f12f3d0b4ffa6b"],["/archives/2024/03/index.html","c37e1271d86e6362b30c3f60be267a4c"],["/archives/2024/04/index.html","981dcfdfc6f36e0d316b06ca3d40ded8"],["/archives/2024/05/index.html","9e58d0538bba8c8b15d7eadad68a7d87"],["/archives/2024/06/index.html","fa98d030476738c0317a13c187e95259"],["/archives/2024/07/index.html","36e7ee6e049ab29d519bc9d43b4bfb6b"],["/archives/2024/08/index.html","b0b24d19bb1dbada176da80a24b3552c"],["/archives/2024/09/index.html","e6525953c7f7c73e2f2ba85754528305"],["/archives/2024/10/index.html","6f8bc059145e111302b5093c82bd7219"],["/archives/2024/index.html","c8d7607bb60006e7c47af9e33091fc64"],["/archives/2024/page/2/index.html","5373d356b3965a3ec801a0bac001bf37"],["/archives/2024/page/3/index.html","af65d1d45394af5764477b15460db7cd"],["/archives/2024/page/4/index.html","b0b0f723d20f6b4e70eaf836db73ee10"],["/archives/index.html","c1fe17eadeff4b60c25c4e02b754aba0"],["/archives/page/2/index.html","212ed3da07b572f7f3e573d81622f7d2"],["/archives/page/3/index.html","8ade7f3cbafdfc3927a127125ea2ca69"],["/archives/page/4/index.html","e201e0ff9c79cadf1c421dc6ae9e6cce"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","00c5571c9f129db816f2a332e6c49c25"],["/categories/index.html","bb00a2cd22dc41416e59c41155390e8c"],["/categories/学习资料/index.html","bfb401d61c3128002cfd73c31726e774"],["/categories/安卓应用/index.html","a3ab4e1a231cac1cc8f396f5662ce676"],["/categories/实用推荐/index.html","7de64ae289ef5992cd5b10b7f53e2b19"],["/categories/实用软件/index.html","2c99cf4923a532da138688b30006b29a"],["/categories/心情随笔/index.html","5df651df54312660a27dad0f07650e40"],["/categories/技术分享/index.html","0535ee1ccaee5d575a210f62b1c76d0b"],["/categories/探究所以/index.html","2b04ac7b66951ff3df453906c46ff4f0"],["/categories/硬核科技/index.html","dee44b692b781e4204d9c7e32066cdff"],["/categories/硬核科技/page/2/index.html","a22fbce6d49ae11faa1aee1bf6c7f8b0"],["/categories/编程语言/index.html","fe1a4e4dd49596456657e43f7a1e0481"],["/categories/网站建站/index.html","20ce8cc707d16736562ad5f2eca842e0"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","5676b6c20dc5e2f9e38b46250dfdce45"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","388fba1ccce9a0721bb4af799af53176"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","4e0efd8dfb0da3ffb5fb4bc8ac2e7de4"],["/message/index.html","df15a322918c27db1efe46af01ac9b71"],["/moments/index.html","f9c0fc953a920d17dfba2bd512d8b63f"],["/music/index.html","3babd677348061a94623b26f04907744"],["/page/2/index.html","2e49bd0f0c787f48408a9530b1dffa55"],["/page/3/index.html","f074ed2da1a5dec18bc80d9ce77e1739"],["/page/4/index.html","a7e3528fe01ba94e37876516f75420ac"],["/recentcomments/index.html","7119f5a680b146972fb973c68667af2a"],["/service-worker.js","89c1ef934fcd085726decd5114634b6e"],["/sw-register.js","2859b2d264026f3ceae13796a87739a1"],["/tags/123网盘/index.html","9d0aa19ab3d40b56b597127b28a73f54"],["/tags/C/index.html","00c5a3df76639777383c513c280782d4"],["/tags/ChatGPT/index.html","0f6d7ab93402dadc92f15f9c40d6c552"],["/tags/Cloudflare/index.html","590656196eac4c30971bf1d2d1436593"],["/tags/Markdown/index.html","4f3b051ee62d50d686bf341768108404"],["/tags/Openai/index.html","1e4ef6f10654d1cf4b991d71e777789f"],["/tags/app/index.html","008cdf5c94ab94634bfca347ae917ec0"],["/tags/hexo/index.html","04bc83697f118764bc6b5b675c9827f6"],["/tags/index.html","d29036c4cb53d808fb42a738444a211a"],["/tags/信息修改/index.html","166d22fcd8de3f3479ed9a6891920a92"],["/tags/写作/index.html","080b751a1b87d6438b7d36690f0c70f8"],["/tags/分享/index.html","900daa79d5dbcf4633d6aa29ee444b0d"],["/tags/吾爱破解/index.html","2db0c4f8a73406dbedbd1621597d8002"],["/tags/安卓应用/index.html","1722cdc39e5d3076740d5178ea0a1990"],["/tags/安卓应用/page/2/index.html","cf90a432dca476bc2cbef26db43bda03"],["/tags/安卓软件/index.html","2cb5b5ee34d357e9c27462e85bc63d1e"],["/tags/实用/index.html","5ff116d40200f1a209742ae38706db44"],["/tags/实用推荐/index.html","638d6400cf35779c56a560ecb7b85f26"],["/tags/实用推荐/page/2/index.html","873d9324f3f38b5d6eec27ca6c827c0f"],["/tags/工具/index.html","6918b4111512347e787b4217dca3a054"],["/tags/工具/page/2/index.html","9a818c824ebc9b2558561dd261aa5fd3"],["/tags/工具电脑软件/index.html","91067269e3fed6930be61f003cf53ce8"],["/tags/广告/index.html","0036eaa8f51a5272b3efb68912636023"],["/tags/建站/index.html","48b7fbf2a11a87695cd17ddfc764cf86"],["/tags/思考/index.html","4d704698baa1facb33bf79ba8f377c62"],["/tags/技术分享/index.html","b84169729c9eaeb48286814ff4b0f099"],["/tags/指令/index.html","663d2178da75f3840e11b0c589e5a617"],["/tags/探究所以/index.html","fd6e016bac206f1afa3de66bb19718a1"],["/tags/推荐/index.html","f9b0cb5edbe0dcc4f895e71996b3905f"],["/tags/文字语音/index.html","291097e6b37d07e3a92a9c3b997e1d8f"],["/tags/班级/index.html","0265942cc8ee9e3039b7980458f56905"],["/tags/电脑软件/index.html","8e27d52a751108fd0c5a14ef1f5a02f3"],["/tags/电脑软件/page/2/index.html","cd80e9594e9efafa32ed6527d41884cf"],["/tags/百度网盘/index.html","1a46a245396e15652e9fdfbe3d35e788"],["/tags/科幻科普/index.html","7fd247052d76a77b2c35ac155bf7b524"],["/tags/精选网站/index.html","c26ada301b9991ced373403debc04b94"],["/tags/系统优化/index.html","7b47d831f262400bb128416c5d0c3039"],["/tags/编程语言/index.html","e25327aa1f89e3de58ebec246878e4a3"],["/tags/网站建站/index.html","4c3a2ce9f76f56f4642266c0b4f48b6d"],["/tags/视频/index.html","2b33541e985a4b6c1f0a9b8430dcec26"],["/tags/计算机/index.html","f2bfda4ea2db26e1ca933211e2566e04"],["/tags/记录/index.html","038b471de92098e1360c11d083ca698c"],["/tags/部署/index.html","90990f76fbe4d2c0b2488a4cdfcad48a"],["/tags/音乐/index.html","adcc849274b81c24fc92db3b06e97055"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
