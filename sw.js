/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","c71a312dea40ba3cc07d09ddc668fbda"],["/2024/01/22/Markdown/index.html","99f8d5cfd60bf1e2f3051a9c5bccac82"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","95415a02d92c1a948dbf641cf4c7b219"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","8e7623db4a0fd1b216e7363eb7f61d7b"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","7de403f2fad3bcdab1862bb75135423b"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","b352026d8473ed88654e5ce14eca004a"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","80bad42b00cbd467ae773d22a0ea41c6"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","f61bc94307533435ab0a352b409e1aa9"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","47da58ce573b6fbfb004a0d1bd8a3f98"],["/2024/04/10/C-saolei/index.html","50edb2c33512690205fffddf7950bce8"],["/2024/04/10/free-yuming/index.html","554106abb686be8f84de5efc9fdf4900"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","1e9075bfc5f42fc2eeddd4c054cfa9b1"],["/2024/04/21/kw/index.html","fca39ddb4892d8d4d800976fe3a25526"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","51a8597c714379d8e23a0113a871d1c5"],["/2024/05/12/music_download/index.html","5f4cdc905d8519d83392fb9ee7bbf253"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","69d795506f0a8992acdac51ae4bf117d"],["/2024/05/25/Vercel-Typecho/index.html","377c5dd63ca677a21f5bc04c12cf0980"],["/2024/06/02/website-all/index.html","b9452d95c5cde102a0f40ccf11960cad"],["/2024/06/17/tools-box/index.html","0ff29660edc7d3586d0f93fb1d4c451b"],["/2024/06/22/biibili-zhilian/index.html","4debc1b8fd9d84ec031dd03b7c5323e9"],["/2024/06/23/sqyy/index.html","9a2f1c047206a4988325d3483ca2ac41"],["/2024/06/24/win-chachong/index.html","c64e9e089cc92fa698bbe7fd68d684b4"],["/2024/07/03/dyd/index.html","2721427da6d651b0fd079f8a23bf5e8b"],["/2024/07/03/geospy/index.html","715ea38cfab4ccd771a88f2339a6466b"],["/2024/07/16/TuneFree/index.html","9ab6d852f12fd3d2cc2e3d0bc530661f"],["/2024/07/16/pdf-repalr/index.html","b65bc0d8c5b48c9265149da0d7b07cab"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","20f57a31f1899db75bd3d4f3ddd2d868"],["/2024/07/23/an-yuyin/index.html","5512767f14834ebf0b4128cdcf9c8815"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","b53574e022cd9a09980dee084fef645e"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","0fdacf9fa3f6130e766385d75f7e63c5"],["/2024/07/24/win11-win10/index.html","70f7c5b03524b1171aaf2b6d16caff19"],["/2024/08/03/wu-muose/index.html","a71a4ec47d44cb9228c9d224d0f9a7c8"],["/2024/08/04/ab/index.html","f4f3296f0e47708ac8de4ce9ade15aa9"],["/2024/08/25/mp3tag/index.html","bd4ac2e7118a944b70e4011e577cc189"],["/2024/08/31/cf-words/index.html","c8e12d86e331a303b8a5a3ce72249c60"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","6ecae5fdf47decabbc53041ebed9e359"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ae45149f65b2b4b34eba928bf6c073dc"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","652ba9b65559461401eb2efe1c951002"],["/404.html","819b5150a9249cd07a371ebaa4dabbc2"],["/about/index.html","65f1064f0f20d981188598baea7c533b"],["/archives/2024/01/index.html","6eddb644a5cee39dd47eee3222cd8708"],["/archives/2024/02/index.html","9661905e0fd871c557513239245d88a4"],["/archives/2024/03/index.html","41b2bbb88a940fad6dee862c37b479a9"],["/archives/2024/04/index.html","0dd74a9f9ae0304f4c30d9a4660b2a57"],["/archives/2024/05/index.html","b3d74b95fd1d17626868e2d9f90c2ada"],["/archives/2024/06/index.html","d457630f3d7b9a8e2abb2a58597f64f3"],["/archives/2024/07/index.html","5fea07379f8bc0aef52c04878c97c0b8"],["/archives/2024/08/index.html","663d4464e7d6929a8d749f1af68f8b8d"],["/archives/2024/09/index.html","5c1b8a9f34c6373ea5b9a6e15763143b"],["/archives/2024/index.html","96e5ca10cbc130686cecc615ee0a6c99"],["/archives/2024/page/2/index.html","6397ab1c2f7cb588e7a90eea942f80d2"],["/archives/2024/page/3/index.html","521d322652da0e197afee80f71a89258"],["/archives/2024/page/4/index.html","ba769c6fa7ba3a43bd471ec9229c0b9e"],["/archives/index.html","70e92cbb81c112e885575ff847fa4120"],["/archives/page/2/index.html","215028d494402e5698e3e41eebc3a600"],["/archives/page/3/index.html","17bede8fa05a14c9c7340bd859cdbe52"],["/archives/page/4/index.html","6199b334b6eb719ec04fb45098185c63"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","027a413382496de8ee60f0f3d40470ae"],["/categories/index.html","bced08ec9fa862e872be9dc40bd976b8"],["/categories/学习资料/index.html","bfb82830d0a1f35cdc3e5f0e9b5ee99f"],["/categories/安卓应用/index.html","f795646b42e60cb28a1b1fce4c25dec2"],["/categories/实用推荐/index.html","e4e2462e37975212946a04d76c1f4333"],["/categories/实用软件/index.html","8e52a9d4f6bb576b2a3455d08529ec22"],["/categories/心情随笔/index.html","51f80f2781ff9c61688918cdd0be4282"],["/categories/技术分享/index.html","bdff6df1abea5642453fc67a9fc036f4"],["/categories/探究所以/index.html","8c5fbae8d2a381c14c4098f485ec04e5"],["/categories/硬核科技/index.html","8585a0c6c415bd3d218deee469e55b06"],["/categories/硬核科技/page/2/index.html","7433a4fcab17b69d9d3b1320fa1a1661"],["/categories/编程语言/index.html","db5cd5eb76dfa625306a4945ddd3d794"],["/categories/网站建站/index.html","2027dc842e2af18277496f2de60d74c3"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","fd6302f0229f26b31f62a2f3d455717f"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","8305e079c09a9f905509f95d51092d81"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","ce0d976b09156ef6cae7c9445017407f"],["/message/index.html","9259b5471056ad5a8985f9c483d21fc2"],["/moments/index.html","84f6e4ae135604ac4a16542015415de7"],["/music/index.html","6cdc04262b85f301c30a342a56b5ff2d"],["/page/2/index.html","a003be105e23dd5d59c1d83939e077b1"],["/page/3/index.html","e45aaafdd3d1329b1c5d1e8c11d877b7"],["/page/4/index.html","b14e0cafbcbf0418cbdf732471a0cec0"],["/recentcomments/index.html","367c7f5dfcd4d1b96d124d011ccc4736"],["/service-worker.js","d9fe374f2ed9f8c992875113cfe82b88"],["/sw-register.js","c810297523d7df2d27437f698e6293e1"],["/tags/C/index.html","96d545a222094d1fc84a6f1acbb6d630"],["/tags/ChatGPT/index.html","8eacee72ddf97c2057e0be9d889a8928"],["/tags/Cloudflare/index.html","986add233f8151011e655e7f44aa76ce"],["/tags/Markdown/index.html","dce7a85a54557da722aa3995e5cb9a77"],["/tags/Openai/index.html","752c0c30498b1f39ca4ffe689f6b5d6b"],["/tags/app/index.html","85662e7e63a71a7e9da6caccb44b03ce"],["/tags/hexo/index.html","3f1f4f1fda021e1c9dbc318c03204100"],["/tags/index.html","dba178c3f8584e8e4ee1e7b5feae48b0"],["/tags/信息修改/index.html","8af08bd0989a4e3d4daa8893a21c145c"],["/tags/写作/index.html","27a49f03e1bc6119dd13093b02408a62"],["/tags/分享/index.html","83ce8f50afafa0b500af93826d9c402b"],["/tags/吾爱破解/index.html","483f2d55851da68b1e4ca29c575b5d16"],["/tags/安卓应用/index.html","34d31803e4b76c77413dc76096d66304"],["/tags/安卓应用/page/2/index.html","f17749449316866cf790e0581f0fd17f"],["/tags/实用/index.html","013e39764b3017a2bb22366ac356a7c9"],["/tags/实用推荐/index.html","a462d6d98489cab000899346b42c2d3c"],["/tags/实用推荐/page/2/index.html","64c5b7f74fc7a974d320d0c920ad78cd"],["/tags/工具/index.html","f6993f4c968c5778db1e2c2955c5ec20"],["/tags/工具/page/2/index.html","7147a5ad7f949a6f119a0b983ac0815b"],["/tags/工具电脑软件/index.html","b8742221604134205ef6095312499810"],["/tags/广告/index.html","dc0637510535199df27b40698be7ead9"],["/tags/建站/index.html","502f9f5c5b8686e4f391debff6d14e4a"],["/tags/思考/index.html","75b7b03826548ea84d739d54a13eb9d9"],["/tags/技术分享/index.html","cc968326d5b19244986b5bbb597e6654"],["/tags/指令/index.html","3f07cbd4c07725cafd749f0b334d3533"],["/tags/探究所以/index.html","270db85528f38d658e23b285bdd46fac"],["/tags/推荐/index.html","4e2150f20208d4de6b98842f38ff2f8d"],["/tags/文字语音/index.html","9c3e405cbb7b98247bc026f2f0399cee"],["/tags/班级/index.html","837ab4cadb44124f7216b0f2c025e82d"],["/tags/电脑软件/index.html","d79bf27821e7b51c79ff21b0a1e216b6"],["/tags/电脑软件/page/2/index.html","3c1470aa6a5a18fa7380498295a86be0"],["/tags/百度网盘/index.html","f354dcc4fe4070ba57fa8536db4d4797"],["/tags/科幻科普/index.html","98da34712c9460a420116393137551ab"],["/tags/精选网站/index.html","e14f2a519bd50aecf47e066ad241448b"],["/tags/系统优化/index.html","78df8f6b964e335502bd7316cca93b73"],["/tags/编程语言/index.html","83c36bc2608fb521a3eca1ea96e9ec18"],["/tags/网站建站/index.html","64b7fefdaef5aec851f41abdad05512d"],["/tags/视频/index.html","cf3068ea047a47ebfe8592761568b16f"],["/tags/计算机/index.html","72b600c695d5d54e1433eccc5ee487fc"],["/tags/记录/index.html","8a1480d2e6639a0a43c4cc11f701176d"],["/tags/部署/index.html","7fb8e72cda820cbe7087c0ca920aecea"],["/tags/音乐/index.html","30f41680988437502aa596ebf65c66bc"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
