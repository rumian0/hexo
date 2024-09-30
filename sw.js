/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","d55aa0aa7d88ab1d0b2e91a22df62fd0"],["/2024/01/22/Markdown/index.html","39d5c72b340ff18d103ed236055b42b6"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","2fd6b6c05ea0190f813e4de20ec478e3"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","4fd9f109e8da7cd138becb8ba1858ced"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","ccae6777516ea142c4b25f31b80d16a7"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","f46000d75ad5d1ad7a406c5792e2763c"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","a4af3c7bd6b16a0a26869cfb2a8c6cb3"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","7cdfacaa3706067cab635e02e9e17008"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","aefa53928bc422a05a2fd9b8c4c9ce62"],["/2024/04/10/C-saolei/index.html","722d764fce90e0974978f8d8653e9863"],["/2024/04/10/free-yuming/index.html","92eca6b72f9e25413da9a5d8a3b19b0a"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d68822de2a50c35015a88b9b3c290807"],["/2024/04/21/kw/index.html","2c41874d85daffaf732b9a19018fdf7e"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","5631dfc8765157d8044182bcff57730b"],["/2024/05/12/music_download/index.html","ebf3e5d71ce1476e79e85b15818c8dd6"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3ab03f1a2a574590a1d1d6e3168260d3"],["/2024/05/25/Vercel-Typecho/index.html","60e867c2641b45f5595fe43a242e40d2"],["/2024/06/02/website-all/index.html","4036c33907f71bf45f0b8841c8393de5"],["/2024/06/17/tools-box/index.html","d9f284dc517edfad8c2626c98b01561d"],["/2024/06/22/biibili-zhilian/index.html","6a83fa1c31e25fae5948f0738af7b5fe"],["/2024/06/23/sqyy/index.html","14ccb02a791e632230948a82f89f234c"],["/2024/06/24/win-chachong/index.html","73154ee1353175c4fa5d8a940132bad1"],["/2024/07/03/dyd/index.html","cbe570e69b6676c0c31b6b2625001f80"],["/2024/07/03/geospy/index.html","3e2c43ab44f674fe13290c4e5b37e3a8"],["/2024/07/16/TuneFree/index.html","e94a1981c3ae0119b41d7948324533a9"],["/2024/07/16/pdf-repalr/index.html","a8620743ace846395887bae0f1d4e00a"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","4bb0488c626b0e022a0f866119d12aa1"],["/2024/07/23/an-yuyin/index.html","b9e3eb264433ee139cde705daffe0ceb"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","201232685fc2e3bee96f1ed2b3455285"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","3c57473ef17192cbffe0afcaee55ed9b"],["/2024/07/24/win11-win10/index.html","da4cff7fa6e65238fadcd3c91719c04a"],["/2024/08/03/wu-muose/index.html","3c34f09d74961042811a61153850a8a6"],["/2024/08/04/ab/index.html","a1a46826642d9f28f99e3190dd25546e"],["/2024/08/25/mp3tag/index.html","2d7b048bb65d923415b5802b50afb748"],["/2024/08/31/cf-words/index.html","6a31a42d719ccffee45abfde5735dd51"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","53c620adf8e19257581da893777f787e"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","c48ff49dff67243991be3a2e0a7f9f7d"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","b133787090854d28efc208c12dd1cbf3"],["/2024/09/30/123-liuliang/index.html","2a3c44bed6f6afe51f46d4ad706bbfb2"],["/2024/10/01/all-music/index.html","6ffc670439ad856cd4fa5f04495319db"],["/404.html","660ca9c721f79ab0f173b8ec1cdeb8fb"],["/about/index.html","77bc03c44736fec80aa633ec0cfdbd38"],["/archives/2024/01/index.html","f576820f8f7904975e48b11aa9556bf1"],["/archives/2024/02/index.html","acabd27843040d0f211f8fb3989db50c"],["/archives/2024/03/index.html","1aa8fd516cb2f41a81a8094c581c75f3"],["/archives/2024/04/index.html","a3b45aadc1244f7fb00a09c5b60d8be6"],["/archives/2024/05/index.html","7820bd905712b291181f29cb2e03564d"],["/archives/2024/06/index.html","96582922ca64ff2af08c812c0f357491"],["/archives/2024/07/index.html","25079626c9163c1938b89161981d8480"],["/archives/2024/08/index.html","fbf6012ff7014dfd07edb6e5c6365f5b"],["/archives/2024/09/index.html","236b068e6a0c60e6ac0d2715bd59549c"],["/archives/2024/10/index.html","2bfd0ccb65ac2e02e01bda2766416345"],["/archives/2024/index.html","5e678da1263d2b05c6422d99554ed59a"],["/archives/2024/page/2/index.html","b056d198a7ced593169b5a77058f3e4e"],["/archives/2024/page/3/index.html","eb628ab3cd8b5a5a28adec69f2ac09ce"],["/archives/2024/page/4/index.html","e02a31795705b9af1ce251e75c479573"],["/archives/index.html","0b34d32537263c5c59e90c2862728260"],["/archives/page/2/index.html","401865c8d5e68860c4e939b7999e389a"],["/archives/page/3/index.html","8906ba7d4e63f4c4380b4f58c6ef2909"],["/archives/page/4/index.html","7c1d7e43e4ccc18f091ff1d89a09b803"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","1bc7227fa0f967f5e430b15d72f2adbc"],["/categories/index.html","f82ae4626b8148946b51b030ca149d0b"],["/categories/学习资料/index.html","8533210ef026de3ac1ced174a28466fe"],["/categories/安卓应用/index.html","3ad23b9520eb3761a10874ec68fde732"],["/categories/实用推荐/index.html","87f14d516ae9a0d569feaebf5b82e838"],["/categories/实用软件/index.html","b8bde0083d0d298239103fdf18057daf"],["/categories/心情随笔/index.html","06630a08002bd9a064e188f27e04626f"],["/categories/技术分享/index.html","6d80c34007866e7ad1af4bbc6414c597"],["/categories/探究所以/index.html","cb7107e784aaa3e0ed17ec4eb010934c"],["/categories/硬核科技/index.html","4f232c75592a23fdcf07c82e6d4344fa"],["/categories/硬核科技/page/2/index.html","cf3f15e58daea7d98a621c4ee7323f86"],["/categories/编程语言/index.html","ac9f172a9e5ae9f5eef62d70efada961"],["/categories/网站建站/index.html","35a72e653af4bb46242354bf279c7242"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0a8e0b568ecd61336fc19d30ba33cb15"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","d1f710d6e3ccfde9e80c3cc414605db1"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","af9c1b9eb340d3f9aec15dedf9762f5d"],["/message/index.html","e4b76a755e10124fc531c46b0c31c3ca"],["/moments/index.html","a6ff103e7ccec4008a1237497b565da8"],["/music/index.html","cbccdca345abb7a585ca652b01220826"],["/page/2/index.html","c094dca3e2bd774441516a525c67e52e"],["/page/3/index.html","fb38ac6f816fef4911a887337243ba27"],["/page/4/index.html","111e7e85a172a91aa4b4f837cbf68726"],["/recentcomments/index.html","76a36d23025c6d5fc3b3f36c1e222061"],["/service-worker.js","6d61c60eb294f509758a8ba4076626b9"],["/sw-register.js","69f91fcdced41b120c96439804b10489"],["/tags/123网盘/index.html","a362c5dfcfa0ae3bfaff69fcbd3764c1"],["/tags/C/index.html","796ef0c1d4dbdf7ee9c3bd8715402e8b"],["/tags/ChatGPT/index.html","2595e97dd4594fed0af08f7a81fd292b"],["/tags/Cloudflare/index.html","eb866f3b29cdadc1c9b3152a34bed8f2"],["/tags/Markdown/index.html","58ccb2b311198bb629b0e33bf81a1c8d"],["/tags/Openai/index.html","98765c725e06f88d29b78c0ff7ac7a6b"],["/tags/app/index.html","dde221f59d5d4cf9210325a09d6a8499"],["/tags/hexo/index.html","2ba392d578225c478f5d4eb03a9e61af"],["/tags/index.html","62dabde323139fdd204d187ba8522c9e"],["/tags/信息修改/index.html","7c3dd62ed56fc631473015f8fd267e64"],["/tags/写作/index.html","6189257bf603e050ed03daa93c8019d4"],["/tags/分享/index.html","6d6364757b19e14c440876a9a6ade438"],["/tags/吾爱破解/index.html","af6a191c0401a272b6487f5626e1b7fe"],["/tags/安卓应用/index.html","c941cfb51b77ebbde83a19ed57396d8f"],["/tags/安卓应用/page/2/index.html","a1e8243f6baca665cf03d460987b8cce"],["/tags/安卓软件/index.html","c80ab87c4bd2d69001f9628546a05b24"],["/tags/实用/index.html","66208f6b5f52babf03da4034bb8791f4"],["/tags/实用推荐/index.html","aad69a30b2938a72c972b3e9bc9d67e0"],["/tags/实用推荐/page/2/index.html","e438509b3a5eb94c5f499cc57fb0a8c8"],["/tags/工具/index.html","ee530d4d39b1953faeb48085b02a9ba9"],["/tags/工具/page/2/index.html","85f4402e2f14901b28c1ec18ca5ba1d4"],["/tags/工具电脑软件/index.html","880cddb4609d75e666c035b9fa001335"],["/tags/广告/index.html","881b06487fb8dc9b9c87471c23ba030d"],["/tags/建站/index.html","d39ccdee92bcb221bc1ae0c2462945f4"],["/tags/思考/index.html","7da64f856759568b25f4edc3f96e3420"],["/tags/技术分享/index.html","af3fcf2fc5a50e3f1636229df3de04b6"],["/tags/指令/index.html","2ab97617f626ef4b735c644a24288a34"],["/tags/探究所以/index.html","92668ba1f9d7bfcb4fb4e69292669c6e"],["/tags/推荐/index.html","0e1b4b6fbf30444b0e455bd80bb94660"],["/tags/文字语音/index.html","0325776211dad7b260be02ec846be59a"],["/tags/班级/index.html","c34515d58a04e2f1bfb51c536916468f"],["/tags/电脑软件/index.html","6ceba0af97f7d5ef224feae97bd4b0f9"],["/tags/电脑软件/page/2/index.html","cebc9718af6bf463657c25a4f0e63f91"],["/tags/百度网盘/index.html","a98dd3c18cc37e3bced94f937babea3c"],["/tags/科幻科普/index.html","ecd0e1bb239b375194d77c037ac05683"],["/tags/精选网站/index.html","5ca03c11e0875e0120b901865a3d1ac5"],["/tags/系统优化/index.html","1cca4ed0e4a09e30c49a5898f61ff39a"],["/tags/编程语言/index.html","1f88d44718228090b088f1452e082f36"],["/tags/网站建站/index.html","73b81f1e0ea538ab2923256e2d169bbc"],["/tags/视频/index.html","7152de2a03d51647220eefcd59a19573"],["/tags/计算机/index.html","57842182265b3fbbf6e6a4e5ca144336"],["/tags/记录/index.html","e6a951305f3d0c7df324640fbf77fc99"],["/tags/部署/index.html","1c42d84940dfbb915c6aba8b1c5db25e"],["/tags/音乐/index.html","a4eecf5426b6316f1704dade9f99714a"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
