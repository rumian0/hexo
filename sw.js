/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","588825a173f27ccc275be0d3a84f70a8"],["/2024/01/22/Markdown/index.html","d0306a40ee828063145124c606e44b2a"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","0b974f81fa0a57bc3516e9a82f3f0c38"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","623956c4a2d1e635ab7095e49df9bd91"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","162ff4b8a604e569be48eeedbd1cf01a"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","fe64b88a128bd44c846971e9a504ce5d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","711968f29630262acc10a00228751fde"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","3615f17b15248c3516aa1fec7be2bde1"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","751910af32fc99d61ecff6c4c58732a7"],["/2024/04/10/C-saolei/index.html","32fbbd255004cbdcb3af5a78575f7fb1"],["/2024/04/10/free-yuming/index.html","3fc866d87211e9168edc8eb756d94289"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","fc9af8396865106da42e46080329934a"],["/2024/04/21/kw/index.html","05b4e961ad6932fb18e5f4185d08c0ef"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","9fb22a171d6d5954b9d5ae12325e9804"],["/2024/05/12/music_download/index.html","c2d4780701cc2cd8a24ba440c65f7587"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a9c39a34270f6f795c9c80b38007e24e"],["/2024/05/25/Vercel-Typecho/index.html","985ad82af27a3ca4721d44c3820c8557"],["/2024/06/02/website-all/index.html","bc8eec046782c4718d239427ab308e94"],["/2024/06/17/tools-box/index.html","e3a54c740735bf5c75ee093e4d18fed3"],["/2024/06/22/biibili-zhilian/index.html","8cd0adf11c01d7f192149bb3b450439e"],["/2024/06/23/sqyy/index.html","54a6c550bbb42aefb877780fd415d910"],["/2024/06/24/win-chachong/index.html","8d2844fb020d90aa376676d4e2801673"],["/2024/07/03/dyd/index.html","d4a719efb1538e17a5729e32b8230723"],["/2024/07/03/geospy/index.html","140aba5c4911c8f584472418bc5131c2"],["/2024/07/16/TuneFree/index.html","75e883c666e1e1658fea9c12ae84f05e"],["/2024/07/16/pdf-repalr/index.html","d8e3c9fc93e39706d266f64a4fa64cac"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","8343b7446708290ea70f865131d6094d"],["/2024/07/23/an-yuyin/index.html","44b3895a28134716c3aec48bf4916101"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","74451021a4c6719e65aa124797f2dca4"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","91dde04206ba8e756619d64488303e8c"],["/2024/07/24/win11-win10/index.html","d6e94e5478be9557e62c03798b0a4658"],["/2024/08/03/wu-muose/index.html","413561ecf45290c85c3ad946b44291ca"],["/2024/08/04/ab/index.html","f85bb7da6d6c80466d82c230fa511552"],["/2024/08/25/mp3tag/index.html","af896de3dea3832dd3621eba27427f56"],["/2024/08/31/cf-words/index.html","d40b848dc9c688f832fb2975c74ad5af"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","4d689c7538b0a7d56cceadebc251730d"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","2f6af8b9c1c7ea1133e080a50a09003b"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","80811d917d6f72c60db02180d7bf05ce"],["/2024/09/30/123-liuliang/index.html","55b2002dc27b9aea1ca8e09b73b599ed"],["/2024/10/01/app-allmusic/index.html","9b422eaab127337cca090329a379c2ce"],["/2024/10/01/win-musicfree/index.html","54b81156b5c8daa6657f39a36e6d6221"],["/2024/10/02/fire-xinli/index.html","643dcb4f3eea461ffa2956c40c15997b"],["/2024/10/02/win-wyydaili/index.html","f3ce2f34f9bb6dbffcdc833100b0adbc"],["/404.html","fc05b4caabdf1f4906752d01f79dae09"],["/about/index.html","169b96f3d729acedb45049a9c5d542f4"],["/archives/2024/01/index.html","4643eca071ca87ae2c66e2f8787f7e68"],["/archives/2024/02/index.html","046dce04c1f4bb9098d2b55da54c1d45"],["/archives/2024/03/index.html","1d6566eebbccc9af240a03986bcb93f6"],["/archives/2024/04/index.html","d3fa89e484c8bd3251e5ab5b303dfc64"],["/archives/2024/05/index.html","a28c6930623e8efccdce8338286caf1a"],["/archives/2024/06/index.html","797844b93d174190eeb30ed3557fa212"],["/archives/2024/07/index.html","3b29efaba0f02364e09a0941fe8c1519"],["/archives/2024/08/index.html","d055fdebfd41e25c5c55fc988b44fbe0"],["/archives/2024/09/index.html","5e7243ebe665d3dbdb3f551c07dbc30e"],["/archives/2024/10/index.html","c7ba196bbc889da068b3dc7f18d41a25"],["/archives/2024/index.html","a8e0e42d744cdd8b7d00c20a98f50765"],["/archives/2024/page/2/index.html","1023a12d45b9871e90138949b5683b38"],["/archives/2024/page/3/index.html","e46759db19078bb4c740663dc1f93217"],["/archives/2024/page/4/index.html","d4c484fed97a1b124cf9b433c7331ecb"],["/archives/2024/page/5/index.html","aabd13468ab4e318af62716a14711384"],["/archives/index.html","9ed6dba90cf2e6303d14d3efe6ea2359"],["/archives/page/2/index.html","2c3073ea9d809e03609e61570896d5dc"],["/archives/page/3/index.html","d82b50ab63ddd15ebce9f7552982ffe6"],["/archives/page/4/index.html","9e01a6f185706bead076344951b78906"],["/archives/page/5/index.html","de81fed7c720be6041e93247345438fc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","adb38c451ac7e8aca95e543b845f85cf"],["/categories/index.html","2c9e0db2fbef8602225552494311d190"],["/categories/学习资料/index.html","b660ff804ebfda05ccadb995b8f593ad"],["/categories/安卓应用/index.html","179d7aaa5c7b15bdbf8742f775bea320"],["/categories/实用推荐/index.html","711271df78fdaf831fda3b9e99a1d867"],["/categories/实用软件/index.html","3338ff2771c37b14a2c25641b3810c27"],["/categories/心情随笔/index.html","f323771d3e5ed71fb16199116241a0a5"],["/categories/心理实验/index.html","56f52252e716be22ac21de35a976c910"],["/categories/技术分享/index.html","ea5d2e2dc179602962a9df570c3bb03a"],["/categories/探究所以/index.html","de02fa47593bde19001f48587e8030f3"],["/categories/硬核科技/index.html","a7f7f9f21ae81efae0afa3525d4c7dd9"],["/categories/硬核科技/page/2/index.html","b669884edf1ee9e1884461a9dab55d5a"],["/categories/编程语言/index.html","bcb5588e1dfb4821096504e55e62cd89"],["/categories/网站建站/index.html","f8c9fbfedb4607d2ff3839019281e0ba"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","70aa1f6ef529ae5eb28b16f8da517086"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","60d7a80ad79b5452a49dd5e75ceb0f48"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","85784e184c87aa53b991a46484f0f5e3"],["/message/index.html","149b3397ff26656a2494a64dd9389b46"],["/moments/index.html","3e92673f008f7692abc9eaed31356078"],["/music/index.html","675f6219204dc99dfdab12a6087aa00e"],["/page/2/index.html","eb639702f6b86c109728a4776b88725d"],["/page/3/index.html","167355c0528b4dabc457e655253d2a30"],["/page/4/index.html","4880be7deda2cbf5daba9fe8dba0eec9"],["/page/5/index.html","38064314854e65873cf4decfd0b65eff"],["/recentcomments/index.html","bc6d937f48afea0fada72fc08b110224"],["/service-worker.js","d7b8fa84342c3dff6c7effb36fe95f75"],["/sw-register.js","8d2b2e49bd6372d6449086d3fb7fe3a8"],["/tags/123网盘/index.html","5b0603df26bfe5760edea47ac6d38139"],["/tags/C/index.html","3f257c1216415e0a6a29d8073fcd90a7"],["/tags/ChatGPT/index.html","c82352cc317d31a4e7b88285f8b89518"],["/tags/Cloudflare/index.html","182097166f16ee6198ca96d2ac456889"],["/tags/Markdown/index.html","8e64ba8311db842c0adb1a89ce16b2ef"],["/tags/Openai/index.html","92587fad2bce62ab16e6bac2bd118025"],["/tags/app/index.html","9dbfb921c25dbba0ee4927962941f76a"],["/tags/hexo/index.html","99a3c27036dc83a17dda4726800bf5b0"],["/tags/index.html","febf2f2e503d6b387c81812898f92270"],["/tags/信息修改/index.html","413cbb76256373e596f28a2e794f24bd"],["/tags/写作/index.html","91d5fd1caa5a84595c4d9447c7d0e510"],["/tags/分享/index.html","fe82682331121ebfb2b31ff87606e624"],["/tags/吾爱破解/index.html","5bf89f6f40e3ed6c4040c2fca24a3513"],["/tags/安卓应用/index.html","a85f2ea997974996128fef32f563f7e5"],["/tags/安卓应用/page/2/index.html","b8dd8157dd58fd1b1d1e00a9cd0292aa"],["/tags/安卓软件/index.html","b931381f2ba04a1f062d1a6084dd151e"],["/tags/实用/index.html","752a429ad08f6b6811f936346102502f"],["/tags/实用推荐/index.html","faff0d4fd2a365f516c52d98641cce64"],["/tags/实用推荐/page/2/index.html","7bb5f42d2fdc460606d19b1c8040aede"],["/tags/实验/index.html","dfe0af5ad4559d40c5851f3597aa48df"],["/tags/工具/index.html","fec1ef433166f9b61e58af171f3449b2"],["/tags/工具/page/2/index.html","cad2c40a12f2646bcbf325ecd8094a42"],["/tags/广告/index.html","d225fd9c97a7ba25f952e2d581e79e03"],["/tags/建站/index.html","19b03ff3dcf59baf4201d78d5899da35"],["/tags/心理/index.html","a99ce01115b5c9af54673d16e89e129f"],["/tags/思考/index.html","3223de37b973ddbe68507916c437e7df"],["/tags/技术分享/index.html","bf78bf533651326993b42a4718189984"],["/tags/指令/index.html","7c704dc12c2e9dd24dbc6b76ceec7f30"],["/tags/探究所以/index.html","496d7655e854fdf3ff17f4679bec1dbe"],["/tags/推荐/index.html","5335f63c5afb5757092b9c8b1f2c9c30"],["/tags/文字语音/index.html","381a15d184a8c21465b50b2fd5fdc137"],["/tags/班级/index.html","7dd34b731111bfc4df68347fb5be93dc"],["/tags/电脑软件/index.html","d58033e03905297de3d6c7795391590c"],["/tags/电脑软件/page/2/index.html","692c292fcb6027c49514ab138cdaa804"],["/tags/百度网盘/index.html","f13958e5f224e453a6d1012ab4643dbf"],["/tags/科幻科普/index.html","874a9a126d73dae800dc9e07f5224091"],["/tags/精选网站/index.html","3453c911caccb415b98f293fc248497d"],["/tags/系统优化/index.html","882718ae3b0c966a5b15a9fd59834aa7"],["/tags/编程语言/index.html","1b3b965138d489a5d5b2234ba4bff1e3"],["/tags/网站建站/index.html","3cea6437f437cfcb42594082060defce"],["/tags/视频/index.html","68228aa65b1eab47d8df980011d8adb4"],["/tags/计算机/index.html","ad9b3d085b84239f221c048147b97ddc"],["/tags/记录/index.html","d238018c93c7a629ac038992dda9242d"],["/tags/部署/index.html","14847ca8c13dbf687918c21996c40dea"],["/tags/音乐/index.html","143bad829a2de63901799fb4f0540288"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
