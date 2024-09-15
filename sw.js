/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","2e606b0a163e188a5518a2d23de98eb2"],["/2024/01/22/Markdown/index.html","39de8ff784ecf8947be0ef03624da11b"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","4dc23c31c8c93c7292f1e60a334b5869"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","320542ae6f1230d24ac935ea9212ad44"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","398b966d23bc5b6f349659a808b491a8"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","b2e9348e5a55d9a2f4300123f3cd4713"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","575a0bae9061c084ed941f147512e75a"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","38f979b9fb46d4b186aeb5c8a14ddb08"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","97acbb9a8fb37f3b0a4e3ff733327425"],["/2024/04/10/C-saolei/index.html","fb77f2fce7cb9c1f5d728d301ba875fb"],["/2024/04/10/free-yuming/index.html","9bda041cfe3ba5b9918bfd2fef5b5bef"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","41cbb568a867d5f8b419f20ca7ba5b64"],["/2024/04/21/kw/index.html","4b93c7a2f054d0da1beaca8fb954ddc7"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","d91aa6841186692e8e7a001ffe0317e5"],["/2024/05/12/music_download/index.html","456f4c758de9f03d1dc1cf6808a909aa"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","b52faca4253313d7ae4485c8218ad8d7"],["/2024/05/25/Vercel-Typecho/index.html","37d2c1cc07d455c194b7858ced656fb6"],["/2024/06/02/website-all/index.html","63295789238eeae564198a706f111ee7"],["/2024/06/17/tools-box/index.html","e150812e73f30e8135e8ce9f27876813"],["/2024/06/22/biibili-zhilian/index.html","5976ef410b52886fd751f08edb5360d5"],["/2024/06/23/sqyy/index.html","1c01818ef292e91b2cc56afba45a89b7"],["/2024/06/24/win-chachong/index.html","e2f46c188d90f095243dd92356b4aa34"],["/2024/07/03/dyd/index.html","5c46e2153c977ec9aa2889b31a9fadbb"],["/2024/07/03/geospy/index.html","ec4c348df683ca8e52bc59ea312675cd"],["/2024/07/16/TuneFree/index.html","8ffa00c1917949f8f67cb3a08a9067d8"],["/2024/07/16/pdf-repalr/index.html","4d948217e1021c629cf47adc9f296484"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","5d83222c6ca84de595a1cb15740c1761"],["/2024/07/23/an-yuyin/index.html","c8c6ab72f7c912b82d6d2871be42120e"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","c776dba1344fa82da8926fe3339546b0"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","940edc7620c480af474d0bf0e785c9d6"],["/2024/07/24/win11-win10/index.html","fd3b0e707cad9d8e42df01ba02947e99"],["/2024/08/03/wu-muose/index.html","0547473f6f50861b9fa276ea70df784f"],["/2024/08/04/ab/index.html","1e64528ece6c0fc520d50d7a9fd6fb17"],["/2024/08/25/mp3tag/index.html","a8290c7bf46a053e93916cff754a5249"],["/2024/08/31/cf-words/index.html","3179d96fc5fb530118a69b54cac63a17"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","7451f6b39db7af96382c8b4aa14427cd"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","aad14559d5a7d629bfe06c1c453e73f2"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","8a9c06c9928947d350a455aeebbbcb0c"],["/404.html","094bd1e355b832bbee0a7ba40740f7c3"],["/about/index.html","d9d6b3820366f78f502b0797161861eb"],["/archives/2024/01/index.html","20d269ded8517934137001348159f9ac"],["/archives/2024/02/index.html","b22e6f5ce5b5eb002c34ba1ca8e3a128"],["/archives/2024/03/index.html","9352861af0d2fa42fef44f9db7457e73"],["/archives/2024/04/index.html","23148733430804c68de0e717926ae0fc"],["/archives/2024/05/index.html","c90d4739c9381c61aaca63ef42f4e232"],["/archives/2024/06/index.html","ce64ca1f41e1cf91197db1070790d184"],["/archives/2024/07/index.html","ecd5ff676082eb33a72bcf23a88a9d0b"],["/archives/2024/08/index.html","14b7817f51a003b11002b39dbf92b8a4"],["/archives/2024/09/index.html","a8b9d4c339be6589b70d0726aef7f7f0"],["/archives/2024/index.html","27871c337154325f7a4796a1164d0aae"],["/archives/2024/page/2/index.html","ed101c15ab5b7f95c6fdb3544398c86f"],["/archives/2024/page/3/index.html","9d56c0af1ed166b3056eb614cc666e7d"],["/archives/2024/page/4/index.html","35356d4707227fc4f326c9f9013bb553"],["/archives/index.html","fe70ca54263370de61e4965144a2bcdb"],["/archives/page/2/index.html","873b71c7f153366eff016e28b7ca472c"],["/archives/page/3/index.html","1ddedb186d58d0f86c28b4bb37b98ed8"],["/archives/page/4/index.html","5896b0e45695a3b2607474df05c01d67"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","510f139efd9905c7d3e43f664a7964c5"],["/categories/index.html","f0e6047a8a54584e1c6ec7d0b4b74960"],["/categories/学习资料/index.html","71a3c72ffd6fbdd63542521d0057fb9d"],["/categories/安卓应用/index.html","7c26376ab3dc164a82a4cd82ad0221b5"],["/categories/实用推荐/index.html","4b960aaa4d7edd903bb79d9237c19014"],["/categories/实用软件/index.html","d4477315599d32c4fbf6822cc4ccdada"],["/categories/心情随笔/index.html","1477f782ea79689418363ceeb3f002cf"],["/categories/技术分享/index.html","854115bc804e551cedcc6feb3466d849"],["/categories/探究所以/index.html","9fc12a52a394713b00288edf2e071e68"],["/categories/硬核科技/index.html","65378ab3695ee0728dc018d2c53b05b0"],["/categories/硬核科技/page/2/index.html","4ce5f167bdf5997693ffb3d758976c39"],["/categories/编程语言/index.html","b8cee6925d1e57ea772530d5a1cb8308"],["/categories/网站建站/index.html","68098e5a38b51e2ddd0a18b3d9cedb53"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","26d69b51c68e26b879fe62471d9ecc79"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","ebdbe21e799adb7957109ddcc7f2bb9f"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","7533672ed3b01c12b8cfd03c113cc54b"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","bd9c26bdf6a6aa2a656f8d3dcff0118b"],["/message/index.html","8c1880529b4bf2d3e7b5682ca2d4c8c8"],["/moments/index.html","3fbf2d672182c24c0bf99199e56d85ae"],["/music/index.html","87cb2a9c056963050ab6dae44dd9bb13"],["/page/2/index.html","f033dad2a6636b70f6fd6f1042426cee"],["/page/3/index.html","6dc9fc65d79f58e7c4371a0928d5c3aa"],["/page/4/index.html","eea774b4541bde2122c5a77092057bc3"],["/recentcomments/index.html","00c17c578dcdc46868048c9e7b868176"],["/service-worker.js","b05128cfee8eecf4ed727c31e110c70f"],["/sw-register.js","37d470b65a8e5e69350c9458dbddf2a7"],["/tags/C/index.html","cc538e44e63a352e917b3736a6ba0ac3"],["/tags/ChatGPT/index.html","29fadf972ceac448dc533f74e4539118"],["/tags/Cloudflare/index.html","04c6851fdb469997e022e4f46fd3e483"],["/tags/Markdown/index.html","36d7ab136e733454e7193487593dc7f5"],["/tags/Openai/index.html","925ae4cb2a84f3b92c7ba3b6769c5480"],["/tags/app/index.html","b56ea95972f8126cd20fa2181c90594f"],["/tags/hexo/index.html","3c915f96c5f493f6c9d098d4676a7eaf"],["/tags/index.html","39bdd58a312866697b847e51c22a94b8"],["/tags/信息修改/index.html","93e472a7e17b6114ed9c5f044a43d0c6"],["/tags/写作/index.html","eed9c0de8428121ae3ebbdf1ad3a91ad"],["/tags/分享/index.html","b529a3d1078e81907132fdf31abca8f6"],["/tags/吾爱破解/index.html","a2ca9a98d37e82e1473ee83e0a215b52"],["/tags/安卓应用/index.html","ff6746a7cf0e2b9e5d2cb13961714b29"],["/tags/安卓应用/page/2/index.html","cf1ed5588652fd559265d8f67157ab29"],["/tags/实用/index.html","253553e91a845e293ab8a2cf8bee0754"],["/tags/实用推荐/index.html","6fc940da25df292b160e8b7c9a93a0c3"],["/tags/实用推荐/page/2/index.html","f53bdd523f0f4a791a033c974b1fcb85"],["/tags/工具/index.html","78e89e7a4bf1437a56ed70876c560229"],["/tags/工具/page/2/index.html","0be6d6d7fd85bc7fa42d33d9c9b2dc47"],["/tags/工具电脑软件/index.html","f41683e07682c30ddec0bc6bf8a323d6"],["/tags/广告/index.html","eee9649e5bdaeba116402d6ca95a388b"],["/tags/建站/index.html","087004ba9b25ba0b8df9b10eaf2d635d"],["/tags/思考/index.html","789e76a63a8be05bd1b6c2fee43caf9a"],["/tags/技术分享/index.html","75eeec31d51365c662ad1443435ca2a5"],["/tags/指令/index.html","3c7b49c2fb4ea030161022d8ca905ea4"],["/tags/探究所以/index.html","a2d113a9c75f7891d29503c30be1cf98"],["/tags/推荐/index.html","474534ece74f57944748cc6e6bbc72ca"],["/tags/文字语音/index.html","587b9ff116ada603040cf230ae3f46fd"],["/tags/班级/index.html","b8918e7b019fb688430b57af9b969403"],["/tags/电脑软件/index.html","496da5e6fdf34142b2499c9e9363365d"],["/tags/电脑软件/page/2/index.html","1e7e269ec9ec25359aa492d991052c63"],["/tags/百度网盘/index.html","9f86269f429b243433f2bc634ca16674"],["/tags/科幻科普/index.html","0c836fc830d87653469d1901d6bb7d93"],["/tags/精选网站/index.html","068766612798a4c0bc9ca3d1cb3b3ef3"],["/tags/系统优化/index.html","3b3e377ea44697d28836ea50de00469f"],["/tags/编程语言/index.html","48d849d30759c9bfb80bd359dc6e10e3"],["/tags/网站建站/index.html","0ac1ce979caba5e53c88f1a348c9f414"],["/tags/视频/index.html","ad2177dd34e50448dd920ab6d5ffe1b7"],["/tags/计算机/index.html","6c386c7e653f770e7626eb481b9e5550"],["/tags/记录/index.html","c1a2ebafe8f29be0bfaf26e8a7a6407b"],["/tags/部署/index.html","262491864ce8688a0220e5e7f58f4acb"],["/tags/音乐/index.html","dfe56b07a47782e7bd9b711f9bafe546"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
