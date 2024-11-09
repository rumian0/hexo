/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","0290aefc2f88be8849db21149dab5243"],["/2024/01/22/Markdown/index.html","e10f41570f940787166669569a2c935e"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","1527f4553eea63c4ae70afd4952acd99"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","091a2ba271b9d0d23382aa38355d6ebc"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","ae70cc77aba4ca83101f71a6a2578c19"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","7cda5d9f16ed7ce58924fd41964fe9af"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","7c776c60480ac0264d71450017315b1a"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","412eafe58b054ce065930ec40f8c0654"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","694266ee312cac8446f450fb05ffea67"],["/2024/04/10/C-saolei/index.html","d8c1e9b9dc5f546d44f6e57c8bc4ee78"],["/2024/04/10/free-yuming/index.html","a78c63fc12723959bef51f64ccbc8515"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d33d82c3bcf5b3199083c2646a017527"],["/2024/04/21/kw/index.html","c393c8689e4e54508b8c2d8ec647e539"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","f041d2e0fdfcf722dea401fe9078ad01"],["/2024/05/12/music_download/index.html","f7424e7aa0f8475de754a7235f36950b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","8cdbabcc93adbc76a6f09aa3cd463ee0"],["/2024/05/25/Vercel-Typecho/index.html","deaa6b0377987cd55b83d874444e46fc"],["/2024/06/02/website-all/index.html","0b90a98658ea188ddab8829eb8d7b354"],["/2024/06/17/tools-box/index.html","f5a42e74d10667d951c4a79aa98fa549"],["/2024/06/22/biibili-zhilian/index.html","0c34d8529fc0eaddddbf27aa4d5d04de"],["/2024/06/23/sqyy/index.html","b5b6685b251b47dcf7303f449b114b10"],["/2024/06/24/win-chachong/index.html","55257a7cb2c16fe7fcc57ad4578e1588"],["/2024/07/03/dyd/index.html","07a5e4714947b0d900c869bc7018a5b6"],["/2024/07/03/geospy/index.html","2c28ea63307f2b1367d39025960919e2"],["/2024/07/16/TuneFree/index.html","400e633c4dcbd01ea0402c46b227f6e7"],["/2024/07/16/pdf-repalr/index.html","eea8cddfaf5aa63eb2af892f4f8fd45a"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","6453e55afd4e21cb9797defa1396ae06"],["/2024/07/23/an-yuyin/index.html","04ba0ed3ecd989a4c56568729b4f88c5"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","8ccde044eaa568fd71b197cedbde92dd"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","2bcc6fe2c49ab8abef106c3da58a231d"],["/2024/07/24/win11-win10/index.html","dd4432335c7117e141ed277f402b18c7"],["/2024/08/03/wu-muose/index.html","e29da302376b6d6c6ecd936fdc39b1db"],["/2024/08/04/ab/index.html","6f2cc8e75d5f3c7a12db7baf1c899f3f"],["/2024/08/25/mp3tag/index.html","90bfae33c0c1f5f3450cae04c4c72784"],["/2024/08/31/cf-words/index.html","36f0db35db354c35ea71c5a8c7e5bcfa"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","dafc914e6af154162cde0e2c1da9be14"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","75250a747a58951895681fa949d255b6"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","e49f457c3327f5903b3a66c6cf74962d"],["/2024/09/30/123-liuliang/index.html","2344ee087e3c8dc2d14ed00afbda76c5"],["/2024/10/01/app-allmusic/index.html","d4394317d9fcea5d8151b2bc534902ba"],["/2024/10/01/win-musicfree/index.html","89b0dde60dc4496f7873caee5582eb05"],["/2024/10/02/fire-xinli/index.html","edfa12129fc68b38d0991af7232edf0c"],["/2024/10/02/win-wyydaili/index.html","8c64966f7092b333636693fe711a9bb1"],["/2024/10/14/qq-histort/index.html","ac2af1e6105f10b86ebfe9c4793b95da"],["/2024/10/26/suijip/index.html","2783144bf550b6106bc2a13b9ddef9d6"],["/2024/10/27/ai-tlp/index.html","440278c389c316365618705b1236d12b"],["/2024/10/27/cloudflare-cfff/index.html","a23adcef37351b0d40290b73468a226c"],["/2024/10/27/tvbox/index.html","bfb6bc34d7802ae203f660875e709717"],["/404.html","e1ad440ad5dfe2a2b14638c5070b4241"],["/about/index.html","72f4b013137487bd629d9a24eb1f1ecd"],["/archives/2024/01/index.html","9b03115c7ce4e099f7c0b414cc6a4d59"],["/archives/2024/02/index.html","5fbd2b335a251b390b104886f979b74c"],["/archives/2024/03/index.html","b77af7920edb5ac6a64a384e241a2576"],["/archives/2024/04/index.html","2f4ca4cf4c750ec0eacabce1a597ff14"],["/archives/2024/05/index.html","83b3092a02e1d5de06874806be56ede0"],["/archives/2024/06/index.html","24b61cf446c9864f178476984fd3abeb"],["/archives/2024/07/index.html","fd8314c6f09f9934da7f5120f49fbe41"],["/archives/2024/08/index.html","c1c99d9d64033929bcd1fe057379a5a5"],["/archives/2024/09/index.html","9f230b7b968e63d52d0a2293f9711351"],["/archives/2024/10/index.html","0e4865ed2e544f74902a6f7197ec147a"],["/archives/2024/index.html","54b998712eff084a1fa89bb36bfa3ae5"],["/archives/2024/page/2/index.html","40136548e1871e52a07ca4c480ab3a44"],["/archives/2024/page/3/index.html","a802b7d89794e2c358ba1bb0dc5018d7"],["/archives/2024/page/4/index.html","2f711e4a3ddebe46b0d0f562e0c8af5d"],["/archives/2024/page/5/index.html","d96e0a267b10e814a26993011f43239c"],["/archives/index.html","9955cf62d4eab9d15f624a9ae2fc7c7a"],["/archives/page/2/index.html","c61876e3abf66d4bb9de2a1382ab1916"],["/archives/page/3/index.html","885446ba94e09fad0d6e794ea333d150"],["/archives/page/4/index.html","81fd02c78ec0d8fc7340299eeb22c2d2"],["/archives/page/5/index.html","3f6a8b5d52aafd15ddab0502a99df3b5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","2a4e040e7b16a9417f4aecd7c9cd23ef"],["/categories/index.html","8d76fe4c9991800b26d3ea35129cc15c"],["/categories/学习资料/index.html","6f9e9a75c5b3043798f0d836539a4d3b"],["/categories/安卓应用/index.html","37d3b05db0fbf55ca05da808904eda8e"],["/categories/实用技巧/index.html","6c1fcfee6f68c7cbf3daeb08bbe5ccfe"],["/categories/实用推荐/index.html","f92df0c52caec612803afd12fe1a622d"],["/categories/实用软件/index.html","66a2ac51b556a13e91efcc29b1d63068"],["/categories/实际生活/index.html","e3d6f4fed55d705c65567c2077b8ff53"],["/categories/影视资源/index.html","0125d3c2d07f62aab9d5668992c5fdbe"],["/categories/心情随笔/index.html","4ed524b4ae18baec03c1fd758e961edb"],["/categories/心理实验/index.html","6b91d879dac7c3e8c3af8525f8d3aba2"],["/categories/技术分享/index.html","2aa1996a33d29226e84dd3c07e200264"],["/categories/探究所以/index.html","1217e06b2aa4161823879e99623bc0ce"],["/categories/硬核科技/index.html","4fb8973132e611a2aa61874550b76477"],["/categories/硬核科技/page/2/index.html","707d5d2093d5e857b19a4726922b54e1"],["/categories/编程语言/index.html","8019dd6119375482e31a89512890334d"],["/categories/网站建站/index.html","b08e8fa5b4dbdabfa98810a1b56cfb83"],["/cookies/index.html","cadea9504b3fa6dfcbca08503c10a652"],["/copyright/index.html","ddb736264fffab10b9b8b439f6893898"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","f487d9db305b62d91ca279e597b1bc97"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","c351c935fb22cc55f2f755d8f4809011"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","c23a94092839e6e4bec847cf6bebce96"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b90b0d9e636270bcda4461901785b38d"],["/message/index.html","1a94aa65b054533379fab39a6ec4108f"],["/moments/index.html","92177b28943eeb554109436cfab9eccc"],["/music/index.html","a73a92836d9ecdc942a7100399aaa7cc"],["/page/2/index.html","f325e0d648cb95a37c0e5d1da78b14df"],["/page/3/index.html","cfe3faba726681f5f3ee9e8032c442af"],["/page/4/index.html","f85f2ffea0933f597e55c5d858839b6b"],["/page/5/index.html","0125d9ee9d7bf3a295a0f2514aef25d7"],["/privacy/index.html","ccb11aaff74c9ea786df520de5df87b0"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","635efbcc9f6724580cc0a84a206c44fd"],["/service-worker.js","ddccf6f6227376a6d15fb64c0fda4afa"],["/sw-register.js","12d0ba6e77141b226f9ac7721839fe4e"],["/tags/123网盘/index.html","6f11ee517ce87c011a2715a05425c06c"],["/tags/C/index.html","347ab545295eb1aaa1e3fa5bccd05d17"],["/tags/ChatGPT/index.html","3c8dbea0388d29f84217db1a92b0af51"],["/tags/Cloudflare/index.html","fb4ca00a911b4f2e2c1b537dd579f07b"],["/tags/Markdown/index.html","e13f7c718db1e1afc29cba86e4a89217"],["/tags/Openai/index.html","5d5a1f3e18498ef4b52b3448b31bce64"],["/tags/QQ空间/index.html","8bec17da1050fd485c61bbc8c40b1381"],["/tags/VPN/index.html","d8ee448762b22aef4ee5ce38248e32fd"],["/tags/app/index.html","7c6ef37cb0d496680236debd7126c3ab"],["/tags/hexo/index.html","7221cdbde7f6ae41fd851c6a9a512c6c"],["/tags/index.html","8a5d8ea38fa1c2d0860a188bdeaa5f64"],["/tags/works/index.html","ca0ca0c42d8a52b59cada9fd70de584b"],["/tags/信息修改/index.html","c8454dec2e959524686194fa530524fa"],["/tags/写作/index.html","5adda41410a486d37ebee1f3c44f4e13"],["/tags/分享/index.html","3455cf1e30d43e68c79c2292a8c29661"],["/tags/吾爱破解/index.html","5e141f46a63892c4f7cceb22a743ef58"],["/tags/塔罗牌/index.html","34a52a0230cd44909e2870767a569249"],["/tags/壁纸/index.html","aab9442b8fce70b7a4b1e8b212ebb745"],["/tags/安卓应用/index.html","bc73cc8acde5a677a4d2ec4cd111627c"],["/tags/安卓应用/page/2/index.html","d1545544f9ddbb9764f68eb1b28136aa"],["/tags/安卓软件/index.html","99077ce7021cb9445b8d9a616ed7c4ab"],["/tags/实用/index.html","62a9896adc852796f1c8f83ca5a42a4d"],["/tags/实用推荐/index.html","1a22d8cc8dff7b9d9c4b32c0a8e3e8e6"],["/tags/实用推荐/page/2/index.html","ed00ee704cfef234dd41586ff0453850"],["/tags/实验/index.html","13fa7121b959f650cdeae83e7e1b298d"],["/tags/工具/index.html","90de294ba50afc00f64c1dd62fd8f38a"],["/tags/工具/page/2/index.html","a922a518fd669fdc236421f1e5983f99"],["/tags/广告/index.html","8de45a30d0157071e364062d0150464b"],["/tags/建站/index.html","9f0d7f093d60c929e600f10b33863b1a"],["/tags/开源/index.html","2143497d96950a6c81a94cc3bf44367c"],["/tags/影视/index.html","04a8eb20e9d532af729b5eb8e3b2d3c4"],["/tags/心理/index.html","0cf92e2c064b3aeaf627b06d02ffc61d"],["/tags/思考/index.html","fd96843bbb7bbb6d0d9c6c83d919b7ea"],["/tags/技术分享/index.html","3810fc41fd23ac5cf76c1ec57ad10122"],["/tags/指令/index.html","1c021de1adedc50e154b1eac7fde6b21"],["/tags/探究所以/index.html","456be510af97859c42ebe2c4869cfdb2"],["/tags/推荐/index.html","6e1453caf69f753c62e9e1a9d1f38140"],["/tags/文字语音/index.html","ca412fac07fe2ed1503608c5a354e6ee"],["/tags/班级/index.html","aa71cf1a95ab4b42296d70369c5a43cd"],["/tags/电脑软件/index.html","32910b21e52bf5139a1020df911e9084"],["/tags/电脑软件/page/2/index.html","e7fe5a45fd60e3b9e5103f426f941542"],["/tags/百度网盘/index.html","2610075796f249e4e0f46f1ca410a1c7"],["/tags/科幻科普/index.html","c7cacea4b05854810160b09acee98cfb"],["/tags/精选网站/index.html","221ac8f6d0e41d638befbc37407408fb"],["/tags/系统优化/index.html","4c04657f228e0da0abb01767581e840d"],["/tags/编程语言/index.html","f2bc877418556368872b9e71220d1265"],["/tags/网站建站/index.html","b2c015770ba23261a479f95de1ba47bf"],["/tags/网页精选/index.html","76270aa000d6002ad870b0aa14b7b0d9"],["/tags/节点/index.html","1c1b1c2f711f9119f4ea45bbe2b65f22"],["/tags/视频/index.html","9d3daf7cb67cd5a99f011cb325677491"],["/tags/计算机/index.html","735b666d8380bcfb9980ca6f8f092161"],["/tags/记录/index.html","b918fda3ff2c7856b7f1679db6c2a5e1"],["/tags/部署/index.html","3e7b852156fd604b11260bb8406a5aa4"],["/tags/随机图/index.html","bebc6374133c7705a2b3fdd44731560f"],["/tags/音乐/index.html","8950b646b934683fc21a418cc4bd9ce8"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
