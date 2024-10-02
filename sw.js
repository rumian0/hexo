/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","78697f82babe4b7501304a8dca33ea8a"],["/2024/01/22/Markdown/index.html","95b1b0b5007f62233a5b9d5fb5517553"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","ebd4d254f2ff65fc76a532b40984ca0b"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","bae78a6a94840b9485dd0dc32dfcca05"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","d892639ef699e0148f4edf05d24573b7"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","e85e2d09a6b01c4ab7783dbb0364a74f"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","16742f910a91871d8daed452bd5db679"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","2f7eb7161569b09c99f39ca6193dc3cc"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","654f391c001ec11d9635d439def1bb1f"],["/2024/04/10/C-saolei/index.html","63496657e6ea280b38de9a51d18a635f"],["/2024/04/10/free-yuming/index.html","215c9f448fa71e6bd1abc57f1cb6bcfb"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","44b219deb6f5053956b6e3f33f5805ea"],["/2024/04/21/kw/index.html","0c623ef24c770688be2c9f24b5df5dae"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","d27ea4271c912e3f899b25050db42655"],["/2024/05/12/music_download/index.html","42cd1139b132bfecc6a8040d77dce9d1"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","edd59a28be3b6c33977f5c9005d0dc1d"],["/2024/05/25/Vercel-Typecho/index.html","53b64c4ee1c26da1dfabb8a82496fe79"],["/2024/06/02/website-all/index.html","7065c97785b6dfa54a04c92983c626b2"],["/2024/06/17/tools-box/index.html","477bf860d8bd8ec73569600bc8dbc4c4"],["/2024/06/22/biibili-zhilian/index.html","7f0fe84e111ada23a4e46ff85c00f424"],["/2024/06/23/sqyy/index.html","fcc72871f4c5dc731215c4f82bf1f410"],["/2024/06/24/win-chachong/index.html","642334b1e06d6041f3e3b30f0e99b8f0"],["/2024/07/03/dyd/index.html","2a147c143f368cab8739d3fbee157453"],["/2024/07/03/geospy/index.html","715b08e38a86cc0a55e05d34c37659ff"],["/2024/07/16/TuneFree/index.html","7c765fec9ed0a14d50ecfeefddd72059"],["/2024/07/16/pdf-repalr/index.html","8ce6b288a724f871ee232fa4af22dbf5"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","e2ed4cd4b3e20812406f93c83e916d7b"],["/2024/07/23/an-yuyin/index.html","85ae6eca2d3e969b6cb15fadbcad7523"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","e23d943adcfb7ab9a2d923d29701acf2"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","daa8d0ebd7c6fe2cbaf761e41d557cb7"],["/2024/07/24/win11-win10/index.html","227c95a629e931492091ef2220e8c8df"],["/2024/08/03/wu-muose/index.html","86d7bfd65e8bfc379dfb76009ea3b025"],["/2024/08/04/ab/index.html","fc79becafcc03d8a2f152c6dc6aaa6a9"],["/2024/08/25/mp3tag/index.html","d51201bc7c4643390437e914ed76728b"],["/2024/08/31/cf-words/index.html","0310623c998673769c5923498f0cc7e3"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","58aaa9a492b3a9854ea5f366f38eb36b"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","e33d2fe02f52d06b071045d85aff5608"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","3f6a87fc6802e46e30ee1a6beebb00c3"],["/2024/09/30/123-liuliang/index.html","023bfdf5f28e511cf32832d24d24ce94"],["/2024/10/01/app-allmusic/index.html","53fefb676ec5c5d9f4b817975b85aa22"],["/2024/10/01/win-musicfree/index.html","34eb3fae89df780cb5433faf1bac8167"],["/2024/10/02/fire-xinli/index.html","5eaefb76ccb312d6c37c5f68c690e1ac"],["/2024/10/02/win-wyydaili/index.html","3adeca8a3c633a0d3cadba5b59ebbcea"],["/404.html","b676586bce8377c0bcd4e1c481a2703a"],["/about/index.html","88e9fdf2d3f4a0ea5c2f054e22cfc3c2"],["/archives/2024/01/index.html","c59be4e115d6301a8662976426429c56"],["/archives/2024/02/index.html","12f8ea452c7615d074237d81a16f1089"],["/archives/2024/03/index.html","41fa26e023ee83c5a47ece36f5b68d02"],["/archives/2024/04/index.html","1a0faf7811c82685743ab67a7b633c39"],["/archives/2024/05/index.html","2ede4c8b3c4adfc99690253c5baa99ec"],["/archives/2024/06/index.html","4b3a2f323ba934de6be83a9915dc53dd"],["/archives/2024/07/index.html","6eebab6299ccfd7d5eca7329c86d3915"],["/archives/2024/08/index.html","e5a62fadad9afe92f02659b4bac078db"],["/archives/2024/09/index.html","d8cd52742e9435f70acd7fd797dde335"],["/archives/2024/10/index.html","ad21373cdf724189dbdc2836224b023b"],["/archives/2024/index.html","d05857c08a9f146c87bc6d84f272259a"],["/archives/2024/page/2/index.html","877b9b938a3960c39ecebad61665b430"],["/archives/2024/page/3/index.html","86ae7895babd33bc4c03f3ba8bbde295"],["/archives/2024/page/4/index.html","5ace7e43c5e81a7d97f40b327c6e0d88"],["/archives/2024/page/5/index.html","d9b595fdadcd518cc7c644c2fd7fc0a7"],["/archives/index.html","dbe0df055815b23f6865c5c137566536"],["/archives/page/2/index.html","f49aa7917f024b2357a467dd5d2f5247"],["/archives/page/3/index.html","9cc078754c19a88671e9d1d4ea5e7e06"],["/archives/page/4/index.html","aefb5a4d9718cf06ce57519557cdd1b1"],["/archives/page/5/index.html","75cec9eb1764c3a808e312f2fc2f0395"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","cea63a1421cab5932756fa28dcabe91c"],["/categories/index.html","5b11572b614f055011030762de2a698e"],["/categories/学习资料/index.html","1ee842da85250e9563d07cebd15591af"],["/categories/安卓应用/index.html","a49e781bf4ced5422e2b87e6df7dcc82"],["/categories/实用推荐/index.html","8bfca0b2247af4275bf6436438bb0a70"],["/categories/实用软件/index.html","6d4eaa7b0c62b411cb0da61c7bcc88e1"],["/categories/心情随笔/index.html","56be39d696de19b0dd0f505a05bc6f76"],["/categories/心理实验/index.html","9602c68fc74d22c44e4fac5f4b0fd93f"],["/categories/技术分享/index.html","e21e4a93da1b4330b515c45a8d5ccbf2"],["/categories/探究所以/index.html","a9e3efa11465dbeb4250750639e821c2"],["/categories/硬核科技/index.html","ac246018df4230d7a91d4000e14e3e24"],["/categories/硬核科技/page/2/index.html","7ad446894d55137a9720be883e0d0b35"],["/categories/编程语言/index.html","6b57df12c9707ae6650fe1211ed681c5"],["/categories/网站建站/index.html","2148533df54c1f72dc8276e5be893904"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","9e13742dfba481f04abdd160dab015db"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","a6fe48d19913a0f44cd7c64991814027"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","8d7ae4d7c607d0bbdc0885953370d48f"],["/message/index.html","f6c1c3fbd916fc2d7a58e979e826ef0e"],["/moments/index.html","d05e3eae14acaa33d3bdb9c369b8464d"],["/music/index.html","24e4bd9e2f7d7421952efce17bd65fa4"],["/page/2/index.html","bb2d82a26fb6059bd5a26b47b4609e2a"],["/page/3/index.html","a84326049a6824fc28c3927f40c51f6b"],["/page/4/index.html","fc9930c8f52e061d9c2afde542e5dbe4"],["/page/5/index.html","6f6b10b35be0b0f82649f5b3f3bf22d3"],["/recentcomments/index.html","d8f82290dbbdab2dc4c9095634c02089"],["/service-worker.js","2f0adf766a3780206ff663ba5cc5f1eb"],["/sw-register.js","8a1884b9a048f3b0650bfbbe208ca7a6"],["/tags/123网盘/index.html","f7c545e44de4ac7581f801125182fc75"],["/tags/C/index.html","a6788c99ee7c4b2ad1767dce90f4046b"],["/tags/ChatGPT/index.html","0b83b4e572a09b469bec770441aebe4f"],["/tags/Cloudflare/index.html","fd2af88f0e4dcbd90cc158f4bda4abcb"],["/tags/Markdown/index.html","e471149e09484b01fc79e57e1cdafdcb"],["/tags/Openai/index.html","1ee4aa51c6010b88206b649080337877"],["/tags/app/index.html","c43010d207720a01a54f224125368b27"],["/tags/hexo/index.html","79ade4fdd3437f90cb04b0ade6d31305"],["/tags/index.html","359758a1a7b13a2e5a403bf0b919de7f"],["/tags/信息修改/index.html","758e24d4274c3f89f7c03c581e5d65c5"],["/tags/写作/index.html","cc4a54eb6e0a19b346a3f4ff0e9cd583"],["/tags/分享/index.html","9f67987e71db5a13087ebe8a7b262c8b"],["/tags/吾爱破解/index.html","1f8f964e1d1b733af6aa26ac61fabd2e"],["/tags/安卓应用/index.html","e50cea521ce3a25c530adc4683efc792"],["/tags/安卓应用/page/2/index.html","2a807555f02cc41670df107ab133d589"],["/tags/安卓软件/index.html","8253d007291f94cea378d041ab0c290f"],["/tags/实用/index.html","37f41093bf9ba3ed2d79c3c5496ce2b2"],["/tags/实用推荐/index.html","469c5f24d94c34ccd92d0cc895df8377"],["/tags/实用推荐/page/2/index.html","10081fdcedd71719d899497a60db2b32"],["/tags/实验/index.html","946ba48ea20f8bbe3741ed51173abb2b"],["/tags/工具/index.html","87fbebb6af703267c81b041f7ad406e7"],["/tags/工具/page/2/index.html","25b8056890be5e29c7c9c247b820355c"],["/tags/广告/index.html","0a6e073ae9a01d5f44393a641cd3fa4b"],["/tags/建站/index.html","881f6dff94b8749c49d9277815d433a5"],["/tags/心理/index.html","b4feb33e14b65ea0a04f18dca44e79a1"],["/tags/思考/index.html","bdacdbcaa5d31a0b9d365b762affb781"],["/tags/技术分享/index.html","5b1319bacf38a90ebbe4aa85bb9670a2"],["/tags/指令/index.html","a4420f65a67ed383a83f0ceddafdd05c"],["/tags/探究所以/index.html","1ad4aa5097bdc0f3763ba528e962ad9c"],["/tags/推荐/index.html","6fe87b62829ea54c8e6a444b0cb5896d"],["/tags/文字语音/index.html","1f5257198cf4ee568b4bfd3589b94cc9"],["/tags/班级/index.html","d7db9aa2c813f43413d2d104acaaba05"],["/tags/电脑软件/index.html","f27730cd15a533f85a86ae685b12ad8a"],["/tags/电脑软件/page/2/index.html","d962033e2f30012cbf4b0c49ceec1e7a"],["/tags/百度网盘/index.html","a959acac9f9e1ee5dd8e1d2de3cd3f77"],["/tags/科幻科普/index.html","60b5cd1cfe8005aa6e4fadc288e915fe"],["/tags/精选网站/index.html","1cf94317a7e2de92443da80a29ffc5b7"],["/tags/系统优化/index.html","984a64b23f5bc2491d321e28dc380b58"],["/tags/编程语言/index.html","2d89b39530c43eb017c101b789ca96ce"],["/tags/网站建站/index.html","8b07d26e76e5ca8ee21a1d3d91df0bb5"],["/tags/视频/index.html","1b99091af131a17d1b0bfacbc822099a"],["/tags/计算机/index.html","dfc4d6b52c98d0746bb60ba41573bc3d"],["/tags/记录/index.html","9cad948b02ea1433fbf82851c27b9694"],["/tags/部署/index.html","8f07ea475ad4cc2bf7a2a7f7560cfcbe"],["/tags/音乐/index.html","06794afd2f4892ea6f003debdaa9e654"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
