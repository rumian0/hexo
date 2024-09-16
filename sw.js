/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","71b3ff0e6c5d24c5446d2ab7f5b23c38"],["/2024/01/22/Markdown/index.html","7998a254b3ba6254965309022782fc6d"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","70423b373340c737926eb382124d43f7"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","8eaa36357ac7b4bbd6557e3468f51179"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","8e702b45aa128d5f16a99d25c49d588c"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","60602565a997cc58142808adf9eaedce"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","9428d5ab3d457a1437bef5d9d2a0c6b9"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","ef8a8b9b281d7cbfdf5ee5742a12f12b"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","051cede1ddb8928305e8417e411537c0"],["/2024/04/10/C-saolei/index.html","167d14d42406fad1f4c0fe07fcbfe299"],["/2024/04/10/free-yuming/index.html","b54888104fc1e0aa31b30f0d59e8e1c8"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","dbcc26b17c0af42463c91abb73afc0af"],["/2024/04/21/kw/index.html","46f28cce93fbaad523256aef57e4a67f"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c5fcb87a03ac2dbf327f59357b75bbe0"],["/2024/05/12/music_download/index.html","ea855128f13d5f7d91382935d5d2a455"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3033f9a5273c1125c62c972944bc5790"],["/2024/05/25/Vercel-Typecho/index.html","38f48ce187342aa3c0aef9f35c2944d8"],["/2024/06/02/website-all/index.html","11e1cc24e41a0ad5eee54d83ab80e74c"],["/2024/06/17/tools-box/index.html","1fc77696a1ed1136768c9c217b8511ef"],["/2024/06/22/biibili-zhilian/index.html","3a487a704ac09f00df90f3d1653b964b"],["/2024/06/23/sqyy/index.html","570aad0debeba683291ab4dd47590ba5"],["/2024/06/24/win-chachong/index.html","59a5cd8c5b4887912d0784a7af264f96"],["/2024/07/03/dyd/index.html","69153c1accf61542bd488e3979e8f8a3"],["/2024/07/03/geospy/index.html","3681f4124dd22cb3ee46ca5e8c71c2fa"],["/2024/07/16/TuneFree/index.html","4282b71b52a740a944597676e0c9fa3e"],["/2024/07/16/pdf-repalr/index.html","21fdfb03a20e1d1c3349c280cbf3aea5"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","7b9c5f9d362055a43fe7174d2d727a9a"],["/2024/07/23/an-yuyin/index.html","164ad43e30f8fbfbc5b3b51f65c6d9b1"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","6cb4e60aa1901fed7149c33c1fb26257"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","ac6577bbaef5e1aac246374671e6d693"],["/2024/07/24/win11-win10/index.html","75d64f788aa32680f651b8de74545f86"],["/2024/08/03/wu-muose/index.html","10ed0260322850ec63906e5d92380bbb"],["/2024/08/04/ab/index.html","4f713be085bd9adf5822f242e19e8af8"],["/2024/08/25/mp3tag/index.html","6331c96029361186fa09f3fd368c4afc"],["/2024/08/31/cf-words/index.html","309db0f21f18c4da5d41ce7ccdb3b1fe"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","5905bd675130869d701d817e3b22b711"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","29cf6a2c30114019b5dcf79de0555c38"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","359c5e370cc67f0d6ae989e51f1a329a"],["/404.html","57b49ff378f584f0c951a5aa72032e67"],["/about/index.html","a5799386b39943269e12f06632217cbe"],["/archives/2024/01/index.html","a9e807ea8ab967e62e3b92efd62a3041"],["/archives/2024/02/index.html","a8ae5555c33b51e4a933f85c81ff695f"],["/archives/2024/03/index.html","1b4455868cd3434e9931b443840759ff"],["/archives/2024/04/index.html","9709e4af6a8c7f1aca2bb02b685c5fb1"],["/archives/2024/05/index.html","0e8f347781b85d4ebcd0f7157038642a"],["/archives/2024/06/index.html","14f67d00b77060a9eb84b23dfdfa50f8"],["/archives/2024/07/index.html","e6e2f37249b65ec2f240ae187d891b6d"],["/archives/2024/08/index.html","d3724670f6f88215835121beb6c91899"],["/archives/2024/09/index.html","8e422560eccb025522b5e04a563771c9"],["/archives/2024/index.html","28ac4e447031450b70eea4554ba14acf"],["/archives/2024/page/2/index.html","ddf3c562881f5849277ddc00e4797fb3"],["/archives/2024/page/3/index.html","ca82e413f20a85f59a615b2ee876a293"],["/archives/2024/page/4/index.html","049ecdc0780475b848fcc7dff5f0f39b"],["/archives/index.html","4392795f0be2cd9ab6a108e42d45c774"],["/archives/page/2/index.html","f30234fed9036b328923137ded2fce86"],["/archives/page/3/index.html","301fa242d25c1fdc25332d8865465cc5"],["/archives/page/4/index.html","8e04d53d114b5de4ba5e69727c7f1c5f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a498191e184821e4968eb9ceedb45d7e"],["/categories/index.html","5f8b7bb8a028cd67d3ef71670666e17b"],["/categories/学习资料/index.html","ed46305c94ad8f42b372cf315e8e75a4"],["/categories/安卓应用/index.html","f5d546cadd70748bbef54abba4c8cbd2"],["/categories/实用推荐/index.html","c8b8aeb24598b9a8127336f90c0fd9b2"],["/categories/实用软件/index.html","8129039996bc25b5168bbecdb66900ae"],["/categories/心情随笔/index.html","040575dfcc9ed0de6b1dd61e046fe5a7"],["/categories/技术分享/index.html","664fb137f8dd327bc6695116db4f8a2f"],["/categories/探究所以/index.html","877975bdc8bb677f8fa518e92b50a400"],["/categories/硬核科技/index.html","4349daf6168b9cc1edd124f83a1de914"],["/categories/硬核科技/page/2/index.html","157f57bd67377d111b7af6bcd5963fac"],["/categories/编程语言/index.html","8aaa263dc54937a7c3ea69a5cb76354d"],["/categories/网站建站/index.html","432f157ddde102680c6f85d2972a4662"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0a9797ddfe27471c02b66170b2241a8c"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","6989d71899c72cc7c761f6c6e397b7d3"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","a76d59f78929896de00880b053478a9c"],["/message/index.html","ab0b9d361562de6cc61b5d982b0b01f0"],["/moments/index.html","57fb0d41a807c4b951145534ad8730aa"],["/music/index.html","78b83b861b0c73fcf282bfc93949e4d0"],["/page/2/index.html","1e243fac4930633d406a42162e0ffc31"],["/page/3/index.html","372ce6d83f54582854ae559a3f61c8f0"],["/page/4/index.html","57cba5dd011ccd8eecf29507d9ec584e"],["/recentcomments/index.html","4b4704052b67cd4e342e7d15ff731cd6"],["/service-worker.js","81620bd3be73391160d88a60d83d7685"],["/sw-register.js","33730cdb6a7cbdaf1c31bd12314c0180"],["/tags/C/index.html","5922ab674b70f8cfe5276579fab1722a"],["/tags/ChatGPT/index.html","b8df61cd4c3bf38149ceaa82e211e597"],["/tags/Cloudflare/index.html","8a51ef37542682804747bddd822ecdac"],["/tags/Markdown/index.html","6ac202c6bd33f3048028656f58999762"],["/tags/Openai/index.html","efb9e28c73fd052cdce28efa84c760c8"],["/tags/app/index.html","df693d882addf6568852a95ea607a0d9"],["/tags/hexo/index.html","6eb424ec7039c7f17756bf9674acc045"],["/tags/index.html","9db8240d77de8973dbbabbe68dfdfe84"],["/tags/信息修改/index.html","f050f204846c4260a5ea28cb9b205db2"],["/tags/写作/index.html","0e0793d10c153304ec0b112d4919eb3f"],["/tags/分享/index.html","3c383d0bc9b5b20715ff86db901956ba"],["/tags/吾爱破解/index.html","6f67beebf2b442cb80d104f90f0f939d"],["/tags/安卓应用/index.html","9b32454c3b760315a373d69940e7675f"],["/tags/安卓应用/page/2/index.html","b36521e0336fa8d4313a215d8620f619"],["/tags/实用/index.html","cdf8b13747be9e77c369857bbcb4bd54"],["/tags/实用推荐/index.html","d8c31d3b7479020a88f9cf22dc258cee"],["/tags/实用推荐/page/2/index.html","cb935238d3c7733758ecaeb3dc06a042"],["/tags/工具/index.html","34fa6cca335e1928c06f4dcd28b2fcd4"],["/tags/工具/page/2/index.html","b8bb2cce508a3f835ddf8296c1e46d71"],["/tags/工具电脑软件/index.html","54d405a78fe4d506ccba02983d7de1de"],["/tags/广告/index.html","5c7128639916d5157ed911a114e24367"],["/tags/建站/index.html","eb2aaf736f53b861d6f29b96193831c4"],["/tags/思考/index.html","55bbd8a151936df4ed55b129970a4d4a"],["/tags/技术分享/index.html","523d0f277b284748388b3ef0cfe79f94"],["/tags/指令/index.html","9126cd111a1beb77c82e80726d1a5ced"],["/tags/探究所以/index.html","f7b7ff453aceaf201d1cc3876d17c8a5"],["/tags/推荐/index.html","fd572a7a545b6382ec13eb644ca04d81"],["/tags/文字语音/index.html","cb50f5e1778c2218bc0a49082ba8d848"],["/tags/班级/index.html","1f97943cd2e1c7d8c228d49a46e3cb90"],["/tags/电脑软件/index.html","74abb32947ba3bf540807a2e01d40f6f"],["/tags/电脑软件/page/2/index.html","c8ec44ec7bb2b6c24a0b9d11db04e2bc"],["/tags/百度网盘/index.html","dac336f8b9965a0bf4149e10d9b8f24b"],["/tags/科幻科普/index.html","8ba96258bd4efde58171ed7dbb75e69f"],["/tags/精选网站/index.html","27698dcc10c29a4bd6afffcd8dd439ac"],["/tags/系统优化/index.html","67e50dd73ae05ad07ae8a2b1070d46ce"],["/tags/编程语言/index.html","94705c9f6b7f5d4dabdcde561fb4931c"],["/tags/网站建站/index.html","adc55a63b9fdc48521d8e6f30b48795f"],["/tags/视频/index.html","bcbf7bfe0f05807782951e2f51f6edbf"],["/tags/计算机/index.html","9ed756e21b0097c90ea87dfb359703f0"],["/tags/记录/index.html","22340175393bc2d6ba354156378d72d6"],["/tags/部署/index.html","5a76982afadd039324e5e9f783e0f288"],["/tags/音乐/index.html","820f8593c6124dfa5acbf9afb8fa616f"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
