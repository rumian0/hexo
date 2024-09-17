/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","6bf88b8bdc145cbeae1248b17877881b"],["/2024/01/22/Markdown/index.html","6b1c0ce62ebd814d41c095d49c3a4872"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","f32027dd17207c9a332e4ac23ddce123"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","d1bab394c511401b9b1475daca3ea007"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","93c1d014e102da6e03d5d9abd51d3ac8"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","a0b340470bcef1805e52e9790bdda517"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","42158671194230d72a4ca9a0f890608d"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","f4d7bbeef423a12a33862339dee8d880"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","75b7605c1ae26c3702d4d435aa831c57"],["/2024/04/10/C-saolei/index.html","660706e82af22aa0da59602047bb931b"],["/2024/04/10/free-yuming/index.html","83728b26df3a4e5322d3dabe46026573"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","2537f7e9f1261a6437558bcc4f9dd0b6"],["/2024/04/21/kw/index.html","24a9c93309cad99d8b406244e2cc94ba"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","920297d4bfbb8bdffef7c27c8a4cc0c0"],["/2024/05/12/music_download/index.html","985853e324a7ecddb7d41f7c1e5f6a6c"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","ccfa7f0a0b5a889f8887a24c2a865b4f"],["/2024/05/25/Vercel-Typecho/index.html","9b8fb2a02a236b94b9d2bd3782d2ac6e"],["/2024/06/02/website-all/index.html","8e7cd9504873b9deadff839899ac7f15"],["/2024/06/17/tools-box/index.html","052aa9ad27543accdbff6e665d9fdaf9"],["/2024/06/22/biibili-zhilian/index.html","13fd565f720f439c65bd6cd48cb1915f"],["/2024/06/23/sqyy/index.html","75ae24f995dbc631958dcad9d17fe419"],["/2024/06/24/win-chachong/index.html","16b9b4be3dfd4f591e83ebcbef021bd4"],["/2024/07/03/dyd/index.html","3b6cc114c637e356a434c72691025a19"],["/2024/07/03/geospy/index.html","e7882492bbc1fa96b84afa767081b7dc"],["/2024/07/16/TuneFree/index.html","3f588a0c9a6536f0f141b167949ca28c"],["/2024/07/16/pdf-repalr/index.html","437fc953c10e672f00ea41ad6def8e8f"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","7cd631ec7a82178408b6d4543a0db9cf"],["/2024/07/23/an-yuyin/index.html","f6038ec517c1038e8dabdec5c400b15b"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","0eb4e1fad4a50c7fb85b296433582eb5"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","46021f20fc74c6cc6d8c5f95fad13733"],["/2024/07/24/win11-win10/index.html","a37c6054268031ce1e59613a5a5b3b43"],["/2024/08/03/wu-muose/index.html","0ca5416db571d4387038bf5890c53ad5"],["/2024/08/04/ab/index.html","3f84044ac347921d323e09fbeb34f9a7"],["/2024/08/25/mp3tag/index.html","724c18e8de4669116ec10074c1fe91fa"],["/2024/08/31/cf-words/index.html","7fc3c70ceab9339db4907a5d562e8a18"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","769b469045f7cea09c758a55fdaf6029"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","6054c69f926ec77cd7a7b43bf318c72e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","57161ec87f51db644818dfda22715915"],["/404.html","6c539f18c6bfbc8805fe02fe7f317009"],["/about/index.html","82900f78a0a75714dc26c22d0d772e1f"],["/archives/2024/01/index.html","88766f398fca798873e0adef9d5d695b"],["/archives/2024/02/index.html","12c92941690420fad9091fa4a3008777"],["/archives/2024/03/index.html","8f54067a52591d14540e68d832ea49d3"],["/archives/2024/04/index.html","ba67a6d3a1386852cc04825d8846c781"],["/archives/2024/05/index.html","d4f97e473b49dfed60454f84311d0113"],["/archives/2024/06/index.html","c71070ea8b769bf9a8cdd777919ca8b6"],["/archives/2024/07/index.html","99a9d2bb35ac6bd973e1bc6839c970e7"],["/archives/2024/08/index.html","306d1ae7f10dee5d277dfa75d018425c"],["/archives/2024/09/index.html","74e5ce0d58d640649ae3ef0ee9a7b070"],["/archives/2024/index.html","cc9cb280de410774b5ce92823b3c0dc3"],["/archives/2024/page/2/index.html","2d53bdf0bf0131b21d80ea0730923c81"],["/archives/2024/page/3/index.html","14528ca8399bfaf5c4543de963c1c9ac"],["/archives/2024/page/4/index.html","2d17aec6baf9dfc69f4fc820830d8321"],["/archives/index.html","c5bfdd2c392dae2f54955e8a3ea0a565"],["/archives/page/2/index.html","c26a51c6b44f876e053ec6185d3d7317"],["/archives/page/3/index.html","5853e29e18ac7b5c2f387aceb0405ae7"],["/archives/page/4/index.html","08f7e2251611b3d3a4363c538232fbc8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","f7f0171b7ba5f5dd3f879f5c6d62cc31"],["/categories/index.html","3b92ed194ba693cd889dca821a66fbc5"],["/categories/学习资料/index.html","8ea78f969377b90ccf565ab6bd7b2bdf"],["/categories/安卓应用/index.html","3d286392fa1ef05b4b8d0e0583e766d7"],["/categories/实用推荐/index.html","0f2bcf43c14cd048cf90e91e49b82380"],["/categories/实用软件/index.html","6ff4fd49004a0884daeeddbfb209e625"],["/categories/心情随笔/index.html","135c63b2c5675df9f10638dcb8f41b03"],["/categories/技术分享/index.html","55e9dfe151d89a2fbcf55a75114ff028"],["/categories/探究所以/index.html","e7a9cc97623c4e36ad7a7adf0e945058"],["/categories/硬核科技/index.html","c5a8661352c77704a35cf6ed7f166388"],["/categories/硬核科技/page/2/index.html","11688119f0e563422158cfe4004c3bac"],["/categories/编程语言/index.html","565bf93e10a50916a4c5ed5bdd795c9a"],["/categories/网站建站/index.html","cb6a850450ba44b6bfc6947a787cf35a"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","09be8bbfd5b3880e934e0d77db6a68a7"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","b6d34556e136a06c8e64f52377309506"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b415dec819d8acee1f6a23a263682fb5"],["/message/index.html","2bee5f47c1549760046b45b739fd4525"],["/moments/index.html","d2139cb5cb7c52aa8ec449ba9a6ae2ae"],["/music/index.html","0ed6852cfc6a3caf7abcbb870cefe02a"],["/page/2/index.html","5b7f20e82cb1107459ee5c5f976c9a4e"],["/page/3/index.html","0e2d47adc3e218d5f893c57dd0a99bad"],["/page/4/index.html","6c344da7061ceb38201283ce8a51b8ec"],["/recentcomments/index.html","82b52ce7d0f424859cff4a3e3156727e"],["/sw-register.js","a6f8890164959dbc3ac332abd01a54ca"],["/tags/C/index.html","e956ed9f54af54c524c9571aed60afc8"],["/tags/ChatGPT/index.html","4fffb5a20b3d1ec819c50136243aa70c"],["/tags/Cloudflare/index.html","d9b7deefd1924a4ebf4369b12831a659"],["/tags/Markdown/index.html","126208a19d10f39d74db4e377ea12f93"],["/tags/Openai/index.html","7aaab8ca45aaf1a94579609dfade18d6"],["/tags/app/index.html","fddac46cc6e4f557cb05072dff5e0c77"],["/tags/hexo/index.html","5ad0aea3db884d3949d0d297c051b039"],["/tags/index.html","9aa51dbe7545bcefa435029f5edb2e07"],["/tags/信息修改/index.html","0b737f93093e3ae211b14c8283e7d4b9"],["/tags/写作/index.html","eaee06509372b9c25349689b89a31349"],["/tags/分享/index.html","07431e984f2875bb1ac65f0ec8e72912"],["/tags/吾爱破解/index.html","aa4d1e73c44b6db405715aa5f0ca4ac9"],["/tags/安卓应用/index.html","a8eb9825a50f6b1af1a655e7fb6721cb"],["/tags/安卓应用/page/2/index.html","582a0e3803006a307aef8dc86914057d"],["/tags/实用/index.html","307423efc242b891825db9617ade205b"],["/tags/实用推荐/index.html","2fcbd6d1e93e50bc8f07d9e7771b562d"],["/tags/实用推荐/page/2/index.html","7c64fe10267e7662da0454dc409a1bd9"],["/tags/工具/index.html","b60009083034b77a71d7dd610660dd56"],["/tags/工具/page/2/index.html","e1a7c88abb73deabba0baee643e432a2"],["/tags/工具电脑软件/index.html","b297082266f786ff0e1d341138f7aa39"],["/tags/广告/index.html","dbfa4cddac967206021c5d82b9c01eba"],["/tags/建站/index.html","1f414ed6ab1a86c19e608c34997750f9"],["/tags/思考/index.html","00f53bf71e5cf29b8f09afd551d7bb9d"],["/tags/技术分享/index.html","88b9985cdf8c25ecfd099d46df3ce00c"],["/tags/指令/index.html","56721f54679209d5d628c33138723758"],["/tags/探究所以/index.html","2a391ce193a2b905493b4ee4fa256132"],["/tags/推荐/index.html","37fdef2ff96a48b30172dfb5308e25d0"],["/tags/文字语音/index.html","096fef288497524d1d2190c4e1924c16"],["/tags/班级/index.html","d817f91a697dbb6718069aa26c00e919"],["/tags/电脑软件/index.html","2562d9769380981403826a5b3501d5d2"],["/tags/电脑软件/page/2/index.html","314751b5042fc56764f351ebf5d35212"],["/tags/百度网盘/index.html","1775d4abc962cc18f486b79182fd7cdd"],["/tags/科幻科普/index.html","f52ddd4b2c39233fef46b4e389efb235"],["/tags/精选网站/index.html","77a5cc150c0717714cde10288e41610a"],["/tags/系统优化/index.html","55ab9dda1feb64873b643ca8fa1883a1"],["/tags/编程语言/index.html","b3373672b99e2945503aed89a6e58995"],["/tags/网站建站/index.html","8a4f275bfe57399f45a3ebca6ef3cb3e"],["/tags/视频/index.html","b7ea9a5c6b59c7eb6f54624dd52a49ef"],["/tags/计算机/index.html","05ecabbbffd97973ae4cdd1fa641ea37"],["/tags/记录/index.html","56447ece3526b41191aa51eb7aadb8cb"],["/tags/部署/index.html","3253546363d6d760fad406f6ac3e0d6b"],["/tags/音乐/index.html","37d5280a8b66c28922550d421d2b9e02"]];
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
