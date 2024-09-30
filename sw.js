/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","b18b9e964a075683aed62d0e5154f03b"],["/2024/01/22/Markdown/index.html","34d76e0000d966fda7bd65264e499a32"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","32bc618e3345becf92d1520e7b0e527f"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","d734f1c82081779035d788319dac3a5b"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","13dab90e5ae9dfc71f877dca97cb26ea"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","4f3d7d74743d20e2dbde5f23fa06bdd3"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","56b0ab9bdccb907ef0b5b18640fb787c"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","e1b17a28c018c548470aae2acdb4d818"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","47b810c2da73527443aecbbc18b3a4fe"],["/2024/04/10/C-saolei/index.html","1986a689e02f6dce211916644e93ae9f"],["/2024/04/10/free-yuming/index.html","6b49adfb5bdb5ff8aafa1d39654d0bc1"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","19552d3849a2c0ea70a4f4d994d58008"],["/2024/04/21/kw/index.html","18b9b169ab750b0818be27c3ca721d6c"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","527e69e6d4beb3ce5cee98268520d645"],["/2024/05/12/music_download/index.html","8e9db05544bb6f885769c5184d744e2b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","071ea64f5bfbe54247dcfd6b707037c7"],["/2024/05/25/Vercel-Typecho/index.html","360f699e99cff6d913701fec4908b93b"],["/2024/06/02/website-all/index.html","ff237dd0ac197df11c9e30b88785cd4d"],["/2024/06/17/tools-box/index.html","4fc5978c01e8c116b11b0b4b17bfe65d"],["/2024/06/22/biibili-zhilian/index.html","653a5c8d461428313bbf41b55b61fc6e"],["/2024/06/23/sqyy/index.html","666fc71c58418dd00ec2e4aebbd62a68"],["/2024/06/24/win-chachong/index.html","ebbec9577cf0f04bab74a426d95063ab"],["/2024/07/03/dyd/index.html","3f8db3bab1256650222a5c61f17a6f65"],["/2024/07/03/geospy/index.html","5a76351387a17414e79f0545da40af4d"],["/2024/07/16/TuneFree/index.html","7cf81ab229d04958abbb1a4d45417776"],["/2024/07/16/pdf-repalr/index.html","11e4e0e9d10060cbb0b2609b5ba1db4b"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","5eaf997cfbf94cbf380477749c748de2"],["/2024/07/23/an-yuyin/index.html","9039ac21f6a46a746d3c745b8d5c988f"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","b4174e1c4777784f7c253fd9dcaf7120"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","006fae482846c6343d10c5871c21a8b2"],["/2024/07/24/win11-win10/index.html","6ad99143123716c0fc7353f786879f3e"],["/2024/08/03/wu-muose/index.html","439bac4e43c5ae8a4c0ea17772e43900"],["/2024/08/04/ab/index.html","1d5d6108fea4e261ff17f77138eb5862"],["/2024/08/25/mp3tag/index.html","907e2252b68c320b442ee9a710574e0f"],["/2024/08/31/cf-words/index.html","2e09e4cf5418ebe8cecb8ead99e416eb"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","21e0f41c6b6de3c789eda88029df6116"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","7d13387d6aec0308ff41be895f7332ed"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","e70f9dab994e6e77a8df09a1afbe4b65"],["/2024/09/30/123-liuliang/index.html","b39490d709fcd7dee588cb799adf860e"],["/404.html","651a98c76eff75dc07cef402c8bf23d7"],["/about/index.html","045812ffe860d1e04865d71820626c60"],["/archives/2024/01/index.html","0dca1522cd14b49de8369f88d5ba90d8"],["/archives/2024/02/index.html","0779822775609137c942e17bdfcb803c"],["/archives/2024/03/index.html","2a482c43321fe9d0e35f798c049a6462"],["/archives/2024/04/index.html","2d423e5e38ff269823fe7d5120d66be3"],["/archives/2024/05/index.html","3c308b2c35c6cef21edcc531724b2633"],["/archives/2024/06/index.html","190a0145b4aa6ec2e87b1c29f7822477"],["/archives/2024/07/index.html","afa207f1855119b4a390637433c98970"],["/archives/2024/08/index.html","ce22f75377ca186f2042f642a742dd01"],["/archives/2024/09/index.html","aa104f37dfef23f2f580694aa6179738"],["/archives/2024/index.html","ace3c0b29dae694601f8356440925397"],["/archives/2024/page/2/index.html","99c8dc7599b479ed9f1cb014d685a77d"],["/archives/2024/page/3/index.html","a079c4f2c120eae5e0daec758971caeb"],["/archives/2024/page/4/index.html","8eef4cb883eeb522046f42c77f4473ef"],["/archives/index.html","a3822e579dac7f73c74c25c875f88d29"],["/archives/page/2/index.html","8310e5c5a2f7c975f979f3962a6acece"],["/archives/page/3/index.html","05b20d9163984ffe93b58e077de1b236"],["/archives/page/4/index.html","49d4d20cc64334ec14ba3bf864d3d514"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a997bc72317dae243bc5f8a25de5b39a"],["/categories/index.html","740614ca0081a8a4631ea21f71710869"],["/categories/学习资料/index.html","fa7d2ddb44a4e5e4be0f9ad32173654b"],["/categories/安卓应用/index.html","d84d357306d08c53e5a7814c52c7a817"],["/categories/实用推荐/index.html","c417408f75ac9c84014f17dd6606c685"],["/categories/实用软件/index.html","e80bd3ebdc1ac46d562508e55f02c17a"],["/categories/心情随笔/index.html","48af1a6967d813cd5653e82b01e1583a"],["/categories/技术分享/index.html","7c66d36a077201cc47e587cdf995c7db"],["/categories/探究所以/index.html","b62f80a4bee03d7105d9977515bdc95d"],["/categories/硬核科技/index.html","a4bb64488a9ee023631cc200f7deb782"],["/categories/硬核科技/page/2/index.html","be90687ab1dd78fe8783d0fdc0c1d15f"],["/categories/编程语言/index.html","058f355c63b56e09d5edbaf6b94c6f7b"],["/categories/网站建站/index.html","c298f1cf1a1547be1e956fd6a12fd4b8"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","b033dd75ed5851cec08f3b0caa604091"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","c311ca04ca6414cbb6b28a9fd8a9da18"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","a2a4b3e4c2c0915301298fe4cfb12a60"],["/message/index.html","d9f9abe78682bdae28e41862fd662ab0"],["/moments/index.html","7767f89d32b8328eb08225cebd6022b3"],["/music/index.html","eb4f893d83032ac3e1f856ca37573b29"],["/page/2/index.html","9f08be4388bcb6730a6cf23505f06823"],["/page/3/index.html","b6423a909be1b390ebcc4d1d3e74d5c6"],["/page/4/index.html","4eec73dfde13d0c87407f114c9a04ffd"],["/recentcomments/index.html","fc957ff8aadbad17489b95f6f93d5131"],["/service-worker.js","1ef918eafd61adf98dfdce8c52f66b80"],["/sw-register.js","c308d2e94483d9dbb00fd1bf853145e2"],["/tags/123网盘/index.html","6332c66ee740eaa052477cf524f35e61"],["/tags/C/index.html","390c8e93d0eb97debcfb1c4ebe23f6b3"],["/tags/ChatGPT/index.html","3da370f4d2da0bd18316c26cf7fadc77"],["/tags/Cloudflare/index.html","357fd8250cffb6a67642d99260d42d15"],["/tags/Markdown/index.html","18475f8316b01f32f07e59f56e342702"],["/tags/Openai/index.html","b6ef746b78b75bff713726fa737639cd"],["/tags/app/index.html","26e65da02f1f6f8a0b719b0ae2335bec"],["/tags/hexo/index.html","7ad3436cd351a9af26e51889edbc16b8"],["/tags/index.html","250d3e4c873560927b407e15551a84f4"],["/tags/信息修改/index.html","fdad94b1a00cbeafe60ae637933f548a"],["/tags/写作/index.html","5faf164b42a053081a1e15b60bb03706"],["/tags/分享/index.html","75dc31592e03aaea8f142fa00a10f286"],["/tags/吾爱破解/index.html","25caf784bc86e575a05fd72583b0b199"],["/tags/安卓应用/index.html","f80bfcfa1e07e310a311795498969224"],["/tags/安卓应用/page/2/index.html","9ffc5254e68f1cee221e8ff6c3920117"],["/tags/实用/index.html","2ba80e90013c918de486cbb783939ff6"],["/tags/实用推荐/index.html","c16592c590fcc51f32c27bdc36b0887c"],["/tags/实用推荐/page/2/index.html","f6a789f44a42272fa1132c37bdd88203"],["/tags/工具/index.html","a98f24607d1f153287578033bd96b0cf"],["/tags/工具/page/2/index.html","9358536d08a722d945759e4444224ba3"],["/tags/工具电脑软件/index.html","b49f2df0ed922fec975ba766289e2644"],["/tags/广告/index.html","7a2b2bd1d64c57d626852cff5bb88f49"],["/tags/建站/index.html","ab27984f4ba901cb079ca01e234f5d0b"],["/tags/思考/index.html","8a749bcb244de14908e4dd4119bfe6d7"],["/tags/技术分享/index.html","d848f72f6772b08e3d48f4c700854af5"],["/tags/指令/index.html","57de226213922c4a52e50919005ed555"],["/tags/探究所以/index.html","89ee95e62ff363a09599941d580fd2a5"],["/tags/推荐/index.html","fc01ce8a9f687e10a4413c8b3f6df956"],["/tags/文字语音/index.html","3f2edb1888570b2a8777516bc5835064"],["/tags/班级/index.html","005c427d12303e2e01c0c96de6ef9f3d"],["/tags/电脑软件/index.html","9e2f72fd8e7de74ef1b330a9fca81d89"],["/tags/电脑软件/page/2/index.html","a74dcdefa7f7e5792f5cdada4140b605"],["/tags/百度网盘/index.html","d798f66be994709c990d42dd6748a6b5"],["/tags/科幻科普/index.html","05c5b7a9b665b7bedab582738c0f7907"],["/tags/精选网站/index.html","cbd435ba2f2c3a4d446336247648bdd0"],["/tags/系统优化/index.html","c209b4ff3694fd13b55adb7a8fa37cc8"],["/tags/编程语言/index.html","f2587ee2e355ff923516c8bb95ae1a8c"],["/tags/网站建站/index.html","c14c0350525325b0a98e6c8faf9b03aa"],["/tags/视频/index.html","b6757bb64c0a49b28b9767029aeb6535"],["/tags/计算机/index.html","8a44a3173373776370cc5d33874ec743"],["/tags/记录/index.html","8fd2d52e73db3d600b9806a6fcb4b692"],["/tags/部署/index.html","56a7924de0394fcdbdd465cc2f568b10"],["/tags/音乐/index.html","7ce7e964478195b3ba06df763a07f79d"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
