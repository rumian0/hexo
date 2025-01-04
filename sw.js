/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","49b234cb982e829ef4cf31c07f529789"],["/2024/01/22/Markdown/index.html","1b222fec3b5b32ff8ca7389da691c234"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","90914ee4b88e2b0ff48dc30a0cf3b1d2"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","c23692fcd3c245ea7be40f43429d6219"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","c8d331482faeb44a9e69c99ba281472b"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","accd84cb914a12baa0d8d35cf536bd8b"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","2f88124b2c297b604ef962f4087057a3"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","f5e552b07763cb9260f1e62a8d7ad88d"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","635904dd3973b69db317d44cff124578"],["/2024/04/10/C-saolei/index.html","21f05bba1ff244ef0a811628c4217050"],["/2024/04/10/free-yuming/index.html","0f619ccc19c6ce9c9ef56be5ae615cec"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","893cdaab09d1ba7e028bc2221e302bd6"],["/2024/04/21/kw/index.html","f778353bdd8b1b369eddb781a73f672c"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c61b6c465b95cce425e30306e70eed19"],["/2024/05/12/music_download/index.html","446615de9f55810645396371f7431cea"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","4fd44da4e39a85f9225122dcb997cd15"],["/2024/05/25/Vercel-Typecho/index.html","0c670b8a240730b7ecf10bf3c9fd9e93"],["/2024/06/02/website-all/index.html","d5c1e992fe8a35b93ad4eda07a367b6d"],["/2024/06/17/tools-box/index.html","2f5e68cc6a4c8a21cf551cb4f686cd9c"],["/2024/06/22/biibili-zhilian/index.html","0cb43ce6a99c9420ebe7b7c1ef37a9e0"],["/2024/06/23/sqyy/index.html","170fc8368e089ab2f96160e7bafb63f5"],["/2024/06/24/win-chachong/index.html","4c518be2fdd5a042c35a793c45adfeb8"],["/2024/07/03/dyd/index.html","3444b45d129cc5beaa65a22901204143"],["/2024/07/03/geospy/index.html","788217aa337424a4709754e3ad202862"],["/2024/07/16/TuneFree/index.html","43c9a6fb26814a0e8277efffa2213f95"],["/2024/07/16/pdf-repalr/index.html","9b791d8d4b6182a8115245ceac16d064"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","3651711d3ce9b069fbb1f1ca4a013668"],["/2024/07/23/an-yuyin/index.html","a04b1db733206cd148ddd9a9199dd89c"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","6ee8d047652c9e105f9b5ab927380529"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","c71a16094fb5e9ed836e89975e702738"],["/2024/07/24/win11-win10/index.html","9ef021db85d33b26020ccf8d23ddb033"],["/2024/08/03/wu-muose/index.html","370d8495b9689367007451942cb53211"],["/2024/08/04/ab/index.html","895e353753a3cd4d2661580365d057c5"],["/2024/08/25/mp3tag/index.html","5b0790e7bc5cebf86f63ae8530117657"],["/2024/08/31/cf-words/index.html","8d074eaea2c8d5cbcd12d72027337611"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","c5f58d332c8de588a13656494206674b"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","cb5c5dd0425a61dd78fe65da79b213e2"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","48ca058e8e03910f41a43079416beccf"],["/2024/09/30/123-liuliang/index.html","37ae674ab388d677f7e94d0e8a166d8f"],["/2024/10/01/app-allmusic/index.html","67f55b9bbbe895e3e905cbf2dff4624d"],["/2024/10/01/win-musicfree/index.html","cb34d35f3c3b7343f72efd7b31b52f9a"],["/2024/10/02/fire-xinli/index.html","cf1a6a1913245df195214baf6eccd4b0"],["/2024/10/02/win-wyydaili/index.html","ee751cbe58761c9a1d684efaff4b4a5f"],["/2024/10/14/qq-histort/index.html","1819597b40e60eddc9e1574f8b3b0bae"],["/2024/10/26/suijip/index.html","90c76957b2a03e0981998463df5580fd"],["/2024/10/27/ai-tlp/index.html","e1d046f7ca14ebb995d377bbd9aba532"],["/2024/10/27/tvbox/index.html","6591a1dba2b1ac2958733df9fe852d67"],["/2024/11/20/wyy--2/index.html","5d47cd1afa88f2afbc24e6b138655806"],["/2024/11/23/fjyangcheng/index.html","f75fe40756a93479e0439987797e74ad"],["/2024/11/23/office-ltsc/index.html","b8c677cc1ab51bab8cd2bd98b02089d4"],["/2024/12/01/aitiaosuo/index.html","3b88cf7c836cadebe427aa5ffd98d552"],["/2024/12/01/yjx-study/index.html","be8841f8793b62879e4f6c65285a7372"],["/2024/12/21/riji12-09/index.html","8770e4817a0ae916f9e6dfba34751603"],["/2024/12/28/obsessive-thinking/index.html","9dbd9884a6b13321072103f33ebf93cc"],["/2024/12/29/yjxxx-essay/index.html","b7aca8c1327193709b307fad6adefb2b"],["/2025/01/01/new/index.html","5feafd6558fa07a0a243327b4cb0e58d"],["/404.html","9167d71cefeb81d142d50cd822718221"],["/about/index.html","94e2844fed9b2c2b38f61b60f1d1152d"],["/archives/2024/01/index.html","c4e17a2bb20d5bc3afb5086f3a210548"],["/archives/2024/02/index.html","489e8177931635dc7a90135cd847f1e5"],["/archives/2024/03/index.html","955b5c65d1ce4edab090f2b11664699d"],["/archives/2024/04/index.html","911373da22e115c342118c356a4a127a"],["/archives/2024/05/index.html","4a0b02baace8eb64fb8ccde984a68143"],["/archives/2024/06/index.html","b17dffbb38d59fedc3565b5f0cfd1328"],["/archives/2024/07/index.html","e2a5c40773d898b26c5ddba6618f38e6"],["/archives/2024/08/index.html","171c3363b85db636630ed631bb90ab52"],["/archives/2024/09/index.html","0e88996658988974e412dfbb416c8f5a"],["/archives/2024/10/index.html","cff78c10fe4abda36a7e18d3409a5f17"],["/archives/2024/11/index.html","60ff7feb5c7f4659fc1021ef370c15fe"],["/archives/2024/12/index.html","d619a1abc5a713c8a4af3a83b4a13364"],["/archives/2024/index.html","b96326dac3f3a96938b24095464c1533"],["/archives/2024/page/2/index.html","884195a15be012f0875bb151b8790c1e"],["/archives/2024/page/3/index.html","0ba3190cdb41accab6fc0626556305f8"],["/archives/2024/page/4/index.html","d22688ee18cc205a95160984e8cc7864"],["/archives/2024/page/5/index.html","5842e18e851791c034a2128fa6841369"],["/archives/2024/page/6/index.html","0bbdbb342647dcf1671fa8223aecc394"],["/archives/2025/01/index.html","c752db4b3fa8bec4abee4dffb159bcac"],["/archives/2025/index.html","ecf9c4aa02e4bd7f045345336b6670f9"],["/archives/index.html","52dde3cb7402e7509c6f97001e424147"],["/archives/page/2/index.html","2a81cb0994287ec4de2a7f8bf0ca1b43"],["/archives/page/3/index.html","942345b2b126ad76f35f9c2c6ce45ea5"],["/archives/page/4/index.html","e11a1c47f4da81e55947b991b16d0a79"],["/archives/page/5/index.html","d86fa7e3e1bd95b5ce40f337cc6dffda"],["/archives/page/6/index.html","9da003c6a6cbb79fd88fe2c13f74c5e0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","492269009beb12286047afe4f5f9974c"],["/categories/index.html","d60964377a5b1a53154bbf2003342980"],["/categories/学习资料/index.html","549213ada41d076ba90a28bd2a01d85e"],["/categories/安卓应用/index.html","ba577c78dc3aafa439febb9928fe3eeb"],["/categories/实用技巧/index.html","c52d007531ed3db9037dc95ab7cd7827"],["/categories/实用推荐/index.html","05c3463a8beb25e222bee942f46a5284"],["/categories/实用软件/index.html","fd04c9dabadcafcd6f91d611f6031ea5"],["/categories/实际生活/index.html","9d214c1df9ded38cb6e7106782bfee03"],["/categories/影视资源/index.html","9bd494f9827d5c3f7c6ee35591cddb3d"],["/categories/心情随笔/index.html","05f0f26b0b764fb9167baab6547f9d6d"],["/categories/心理实验/index.html","02c6f1a6e20acc2d75d3a7892ba756b8"],["/categories/技术分享/index.html","b8993b3e54b44268b52f5fc57c1ea15b"],["/categories/技术教学/index.html","222e19cd46d9178aae72478cf73c8a26"],["/categories/探究所以/index.html","6d6c2f4f81c977996fc60c3a302265b2"],["/categories/生活方面/index.html","774c266089970b99afbc7f03f7ee6152"],["/categories/硬核科技/index.html","a1ef83cb8d6522362d6a4ec0433be995"],["/categories/硬核科技/page/2/index.html","f052035747f9b3e65a97c6e5318eb0ce"],["/categories/编程语言/index.html","13e916dcc6b869c41e8d8d6864032713"],["/categories/网站建站/index.html","227790e88be2a9bd2418689d0cbbfb83"],["/cookies/index.html","7f0addb61b28b51e14363e948754df22"],["/copyright/index.html","958d9fd0e813bd505d8a53cc42badbe6"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/fclite.css","1c0194f4261c2b0b94f88252261c1c64"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","be51b4bc43c2aca828592ed2ba2841a5"],["/fcircle/index.html","3301fdb1742e924ae5e75664d16bbb42"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/phone.png","ace8353e0b6333cc9902d31f5543b7e0"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","3e42ce0581afd49121b4dd658659aef3"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/jclite.js","02a8a4fb83edf88399efa9729a4db74e"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/post_ai.js","379c555303d60ef939122d81d159b6f7"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","e35288dee6ca2f9a29e2ad38b9bcb030"],["/message/index.html","789a0a1a73e605b75e7038335cef5c6c"],["/moments/index.html","0b4bb482d5587822453d57b511fc8cf1"],["/music/index.html","c3cb3d5a8f3de7e240ee26dbbcacebb5"],["/page/2/index.html","b2a9d3c5f0a99ec31b2a4138221345c4"],["/page/3/index.html","bf28c98a9034657e186c713336b4455e"],["/page/4/index.html","c406029d28a1e411b05ebf537de597a0"],["/page/5/index.html","4b707cfc9dc31d2e825d88eaab2051c1"],["/page/6/index.html","2cf79f2e30db6ca1a1f7c19d2fbc8639"],["/privacy/index.html","c0379b534951615bb5d732532dcb851b"],["/public/service-worker.js","7d4f04542b5751a8cf464bd98fcaa62f"],["/public/workbox-53ab6fa2.js","9f94064b4db6b5be966f23fc7ebbdc16"],["/recentcomments/index.html","15ef7678c5077988a38ab4796bd581e7"],["/service-worker.js","3c67d90e379eb396b11aa52d44729109"],["/sw-register.js","7763c9c4e9f24dd3f02e306f7605de02"],["/tags/123网盘/index.html","937e37d4204277b7a2e3f4101b41d620"],["/tags/Ai/index.html","a485709e14630c54cec21677e191a376"],["/tags/C/index.html","acedc13ed771c4224ab3d7427c8d8a80"],["/tags/ChatGPT/index.html","545dc31ff5bd2f18af239d81c3f0d288"],["/tags/Cloudflare/index.html","37e8edb3edc541a206e67e862c788824"],["/tags/Markdown/index.html","3e7da3e26f4f32b0775900939b0b1ce6"],["/tags/Openai/index.html","89fed5c978bf66ef5516241ab3bcad93"],["/tags/QQ空间/index.html","78ccdc7a667e62b0a8e102126c00ddef"],["/tags/app/index.html","8d996dbf1cdbf5f03232e3e513d28ec8"],["/tags/hexo/index.html","b0ea951e715ca936866b04b48a4b8ed2"],["/tags/index.html","e796125e7fced6fb43e61ed182c1c0dd"],["/tags/works/index.html","a9cca6bb2436853ee0e153be07d4e29a"],["/tags/信息修改/index.html","b95d7d311c781f03f665aec4d17ea8b4"],["/tags/写作/index.html","f9e055d204b2e28f51e81aeff7059ca6"],["/tags/分享/index.html","0ba263b04bfa5d8c929e5e532a5934c7"],["/tags/吾爱破解/index.html","3bc92ced188f97ef74c19cb07c8c7e9f"],["/tags/塔罗牌/index.html","c6c3810bd63b2ce699fec91ece23e71e"],["/tags/壁纸/index.html","c39e96986c9812be5d185536e35b24e2"],["/tags/安卓应用/index.html","222ed68e7af021fd8674bc51676f502b"],["/tags/安卓应用/page/2/index.html","0cdb75e51432686649250f7d4a3044f3"],["/tags/安卓软件/index.html","eaf86c288d6d27badb68add6d9a21f54"],["/tags/实用/index.html","eca780272ff140c8b98edeff433c406a"],["/tags/实用推荐/index.html","2d9b7f1dbfa9caba4c75114f6abdc1d1"],["/tags/实用推荐/page/2/index.html","30aaf5c36f6c8d543ce153a1a8565fb7"],["/tags/实验/index.html","d47d0692b9fc25c630f39bbfddceafdf"],["/tags/工具/index.html","d733526750fa33f7980f345d83075ad1"],["/tags/工具/page/2/index.html","881783596da67f6bfa7a554ab6c412fb"],["/tags/广告/index.html","e142062034482db8086f5e32162da98b"],["/tags/建站/index.html","1dcb7dedf87e70b7e5d3057bc99091e0"],["/tags/开源/index.html","00fc4081959b398d9522a60c5147c76b"],["/tags/影视/index.html","387d515f543e7d6fa014640d2a7d42e7"],["/tags/心理/index.html","534915b62910f551332588a527bf9019"],["/tags/思考/index.html","8f22c28c4c687c477b3c5a07b524de61"],["/tags/技术分享/index.html","77d68d82a6a56f9585a56460db5331e4"],["/tags/指令/index.html","ecb057952fc0c2db281c089aac92e3eb"],["/tags/探究所以/index.html","a65c76088e9397713edcc3ab25c35746"],["/tags/推荐/index.html","7ded52f3b76956d6798c6719509def3d"],["/tags/教程/index.html","03d617be05cbf146f75dd388a9d21625"],["/tags/文字语音/index.html","1e9ec887134a24410453da94a1f533ec"],["/tags/激活/index.html","a3c63cf643161d45804e5ae0d7d72614"],["/tags/班级/index.html","7510b973554f192649da9bce7ff8cdf6"],["/tags/生活/index.html","436a87900156bf9c189896edc616964f"],["/tags/电脑软件/index.html","c22b886c69c27cf96e4df0aae35f3a5b"],["/tags/电脑软件/page/2/index.html","07c7393e5da59bfbe755eb0934a7c1e7"],["/tags/百度网盘/index.html","850cf0a39c154ae59974eac88be1b7fa"],["/tags/科幻科普/index.html","e378f3cfa09a82caac380914de744954"],["/tags/精选网站/index.html","5a2ab59edf794419fdd0d1193adbe9ff"],["/tags/系统优化/index.html","fa24af31049e4459b34b908d8f974f78"],["/tags/编程语言/index.html","a21a65e3a88c6ee834fb2b0de8786ead"],["/tags/网站建站/index.html","0e38cc2f63d112a5c6b039b9abf90930"],["/tags/网页精选/index.html","ea89d87307e7e6ca5636a9b7084b1ae3"],["/tags/脚本/index.html","6aca670eb57cd44f45861e586856e1ef"],["/tags/视频/index.html","bada91eae739995da83684ac0ea58a29"],["/tags/计算机/index.html","60a01a26a71c9e618c994378bdf6b0e5"],["/tags/记录/index.html","cbe159090ac61a1f2336cb5c4d5a4130"],["/tags/调查/index.html","b2cf8e47346fc090d79880cc7a4ad39f"],["/tags/部署/index.html","4ff3bcd524d1dcb7a319a8230b295cf8"],["/tags/锻炼/index.html","36d60f300ab988885fbe4e30674f6dc7"],["/tags/随机图/index.html","d76df2eca1a19d8b31a6b75900ee8e6f"],["/tags/音乐/index.html","51722f6852af29e9434c38bd46bab8c5"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
