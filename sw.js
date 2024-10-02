/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","516e6ddee702ede82e99f35f2d564e7f"],["/2024/01/22/Markdown/index.html","67cc519206fc272e47f11f38c9eedce2"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","30e8b6170d1114fffc27181e6f69fabb"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","f5fd365136ce16772b927b3846a0298e"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","ae6c43dfad429fecc7e04470248baea3"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","fc2a3cf7f8abca98c797d8cd5c01ec53"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","8add06dedf62be5c6819a3929d6a9ec7"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","1fcb35e3b3ed6981c4a0a3967c456e7e"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","b464548d090cba53cb9647e7c6dd5871"],["/2024/04/10/C-saolei/index.html","e34265f75bc2c5be76eb46968b5a50e1"],["/2024/04/10/free-yuming/index.html","4a5356bf0274272197869a92d39b4ade"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","1ccfe7cd9cd256bc0ab41247e4f6245c"],["/2024/04/21/kw/index.html","e35daed1337744e5bd217d83e81fb5b9"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","22eafae65b930691bb2c27c435cbd89a"],["/2024/05/12/music_download/index.html","6ef3a2a9a3b5a10b9458008a1ca1f5ae"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","ead37e5a0838fe9900871581e39bc837"],["/2024/05/25/Vercel-Typecho/index.html","80aee5870dbd8367b43d60d1a7f40e35"],["/2024/06/02/website-all/index.html","e8f185539fafa5b0036eea7a6938bd7a"],["/2024/06/17/tools-box/index.html","8d22986af2abae130f1edfd7a1ddbc8c"],["/2024/06/22/biibili-zhilian/index.html","9bc179689ec32479df19b584aa31591b"],["/2024/06/23/sqyy/index.html","e17abbbbc77cd1be148bf0a872480aeb"],["/2024/06/24/win-chachong/index.html","519b3053c0c1c9e78e76b1a62bc6f0df"],["/2024/07/03/dyd/index.html","aff84b45a0f5fa10e1099afced2fb988"],["/2024/07/03/geospy/index.html","2a4721d4bedf54b933aeecb701753383"],["/2024/07/16/TuneFree/index.html","346e357c80f1b1e2be35b2481da1e059"],["/2024/07/16/pdf-repalr/index.html","21a6352fb861515602e55b1c7902ad7c"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","6e5edb244f4f3f28ac55a0daa18eb863"],["/2024/07/23/an-yuyin/index.html","1519ad877d64aa58cb220ede5fa8a6f8"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","85f0f285b3638f7a6d637d6608d78c2a"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","eda3e8435e46dda6002bfb7bc304029b"],["/2024/07/24/win11-win10/index.html","d764a909fe2858374db3d27e78df71b8"],["/2024/08/03/wu-muose/index.html","014caa5d344f89b6ca36ce7d564a95c5"],["/2024/08/04/ab/index.html","a2b9aebea6935506247941e89a9eb2f3"],["/2024/08/25/mp3tag/index.html","85e521c13c2ffd25cc3c4714d6fc87c5"],["/2024/08/31/cf-words/index.html","8a7fc1603278171a93aaa61fbb67a107"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b2e0c897e9f09bdb50d79516e37819dc"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","6f75784dc640a6e698ddedeb57b622c2"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","3bff2dc3cd37d1477d77bfbb8ebfbdac"],["/2024/09/30/123-liuliang/index.html","a2f837000844b656a7a4af126503b279"],["/2024/10/01/app-allmusic/index.html","28ab88e4e50719c7180abddb984110f6"],["/2024/10/01/win-musicfree/index.html","ff8e59b6ebeb95998a6b651cb97fdc2a"],["/2024/10/02/fire-xinli/index.html","70ba6584bb00fe2f37ec7706572bb66d"],["/2024/10/02/win-wyydaili/index.html","660dcb2a3f95f86222a1db4d9179ae61"],["/404.html","2a10f694a75ae242a5e14c87f8d85779"],["/about/index.html","4761fe5ffe2dfff0d6a5278a8d18365e"],["/archives/2024/01/index.html","e32f204a97848178ea0e81a62251bd4b"],["/archives/2024/02/index.html","8b628f921f9e4f6be3ac18033a223c7a"],["/archives/2024/03/index.html","9ea35a70b009293c352266945e523448"],["/archives/2024/04/index.html","000c8e067f2c20112871262631f1438d"],["/archives/2024/05/index.html","51ec1abef9d280140a42d6f1225d1b2f"],["/archives/2024/06/index.html","6675eecf905738d1bfe518400fe5c305"],["/archives/2024/07/index.html","70c02c7a82cb5018aa36bf8bfdb647cd"],["/archives/2024/08/index.html","b51842450fc7b48bd52820112c42229e"],["/archives/2024/09/index.html","73f820fc99d3af71a14e5a5281b47693"],["/archives/2024/10/index.html","cac152cbe3021eab8149f9a834a64d24"],["/archives/2024/index.html","00ca50bd46dce0c380c06808f94b30b0"],["/archives/2024/page/2/index.html","a6f1947bb6b026e2613bd7c9e6596d74"],["/archives/2024/page/3/index.html","364ed9ecab8a0b3cd8e17b6f3cd0c90c"],["/archives/2024/page/4/index.html","3bc6d10d2a09cbe637b8c88248e81fee"],["/archives/2024/page/5/index.html","43aa1bc148fd3a44b1eee50faa56a3cd"],["/archives/index.html","ececfbfe049a5cfe371a5d2d4af6cdd4"],["/archives/page/2/index.html","cbe615a22076827397fc4b7fb7413651"],["/archives/page/3/index.html","5a642974fe50980f37a05c03c3444b67"],["/archives/page/4/index.html","3a9ddf1986bbbf9b162357058bce2c66"],["/archives/page/5/index.html","08111b8336ff8b8f8ead2a74f7b9d985"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c304da0fda36e6c158d4ace85eb8523c"],["/categories/index.html","b7c0288879845c377264d0aef4d45474"],["/categories/学习资料/index.html","3be5af6014aea55d8e3dbdfbc8e761dc"],["/categories/安卓应用/index.html","1ccad9eb9cd1b9500f0acfb471126072"],["/categories/实用推荐/index.html","086ca5bd8106d9f73e6d8d2d6a49326e"],["/categories/实用软件/index.html","9d0dd6fbebdc0c523486a81b7b71cbec"],["/categories/心情随笔/index.html","aa431b92324019f1a34e349df1cbff48"],["/categories/心理实验/index.html","690f7232a594be0966ade7243d76476c"],["/categories/技术分享/index.html","07b87100608743dd9ae74ff259720c68"],["/categories/探究所以/index.html","f455a6a742793610ac8daf088e27ec99"],["/categories/硬核科技/index.html","de3ff1150dbc1c1fd72181e210fcb6ab"],["/categories/硬核科技/page/2/index.html","264bfca744c5978aca314c8cedbfc30f"],["/categories/编程语言/index.html","2667fe0946b12f41687cc5b67561c307"],["/categories/网站建站/index.html","f055d82d5bfdf63d7b440b5b269b2abf"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","69939fd41d5c08e7458278d2a51c7a8b"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","bddd6741bd38dbf2816ee80adb773832"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","24dcedc14774294295571cf90a790f49"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","642b62837f07034deb062d02d6f99f40"],["/message/index.html","77e8292adb0caefab089b1edf6e68d5c"],["/moments/index.html","87d9b41db488f6d8d06bd06312a79bfe"],["/music/index.html","accc872e519faf9c1bbd314b9a6d4a9d"],["/page/2/index.html","6653925be90fb2584a518367d0a4bbc8"],["/page/3/index.html","4ab647d4fe878a691982a54a4361cc91"],["/page/4/index.html","2107604f8c9974513d1674b7f897d253"],["/page/5/index.html","60a4e8910d26e0f1959ecc7ecdaf62ee"],["/recentcomments/index.html","73506f54741946ba8caaca3166e77155"],["/service-worker.js","db7f09e080bcc1d6017c60197b9836e6"],["/sw-register.js","284d269899aa194115a8950d652bb801"],["/tags/123网盘/index.html","5c2e354ba5416d25ac13b327cea783b3"],["/tags/C/index.html","13f5509f926cf6c0e360b14f1b809d63"],["/tags/ChatGPT/index.html","da7bc54b0474ba05f4fd0fc24af04379"],["/tags/Cloudflare/index.html","9c990af2062b5fa068b2cb0348eb96d4"],["/tags/Markdown/index.html","80ed8bfb135e246a83f5fde49701c7d8"],["/tags/Openai/index.html","f9185ffc0fb59b51085224bf089d07d5"],["/tags/app/index.html","130c15924fe943db9f8b85776d1a5e20"],["/tags/hexo/index.html","a3d60365f00a0ac086e09889cede3dc8"],["/tags/index.html","21fe5ff7f1a257e211fe6247dfa1bb60"],["/tags/信息修改/index.html","c0ce17aec5a8104acc0d66a04c58004e"],["/tags/写作/index.html","bd559ea13aa498e001dff2b45466a01f"],["/tags/分享/index.html","66183591274c44187264494f813da289"],["/tags/吾爱破解/index.html","ffe198ce1fb004579f463cc1dc469df1"],["/tags/安卓应用/index.html","ca94209b255901815fce3aba05694c9c"],["/tags/安卓应用/page/2/index.html","bbf4f70d4438df702ae7402d25cdca73"],["/tags/安卓软件/index.html","ac3f62210a133b9c00a1e4974b973d1b"],["/tags/实用/index.html","f36a3fff69b3b898c854dcc63503ca6d"],["/tags/实用推荐/index.html","5597dc195f9cbc30694a4b9596d06b3f"],["/tags/实用推荐/page/2/index.html","b646f35959c2c51febf7c74eec183cb3"],["/tags/实验/index.html","b86f3518227949cc69e30ac5bfbb4a82"],["/tags/工具/index.html","c7f11d6c6a92c83a358f4a42caa0e31d"],["/tags/工具/page/2/index.html","54aec94aa7e46cfebdf911b0d08fb014"],["/tags/广告/index.html","ff78e21029621355c9a6ac5bf9725eb2"],["/tags/建站/index.html","620f8846470cb0294a16bd226c5f36b4"],["/tags/心理/index.html","72117491dcc1377cfb1bcc9c9ac94cff"],["/tags/思考/index.html","3369c190daf1dd6afa524f10e28dc5cb"],["/tags/技术分享/index.html","c7cfbee4b883fa0eb400cffd8d9ac9c4"],["/tags/指令/index.html","1282ae853d3217e3158b0a7c77676cdc"],["/tags/探究所以/index.html","d9940658f238a83ab7001fd1c4c5ac88"],["/tags/推荐/index.html","9d265ea82589b38f8003ee5a731db2d1"],["/tags/文字语音/index.html","62912505a05ddf582b472c66f62e6619"],["/tags/班级/index.html","ba7743d2b6d8bfdfb9cd3b1093b61937"],["/tags/电脑软件/index.html","6494fd211b62ecd0e1c6013210e98a7c"],["/tags/电脑软件/page/2/index.html","cd1d99b6dc418c46a2141b3dde44e074"],["/tags/百度网盘/index.html","67c8558c5cd528b477cf8d44f1f4da60"],["/tags/科幻科普/index.html","0a62acd37c7e3ee52cc69e3d061d0976"],["/tags/精选网站/index.html","35c6991527bb5a4d32da402d93da5b2c"],["/tags/系统优化/index.html","89a1859e310b43ea11a34d1dbc5c80c6"],["/tags/编程语言/index.html","c84819814922f5e9e3c10580028dd6d3"],["/tags/网站建站/index.html","b876f3e4bbec8bb525102c6e5dfcc23f"],["/tags/视频/index.html","72d5c912d1723fd91635a997ef852d81"],["/tags/计算机/index.html","27d33b1f39465c54c5eb175a77f14136"],["/tags/记录/index.html","a91045dbfa02c6b4eae7049a3db7e2d5"],["/tags/部署/index.html","9b191f4f2f89251e541a9d90d80870f5"],["/tags/音乐/index.html","45a7e3b2b54a2542a46aee86b5707f6f"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
