/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","71431c4189427ec8a7ac853c9953e0a4"],["/2024/01/22/Markdown/index.html","faefb4ed8e2b455a70ee37fa91cf510c"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","4bf7f60297deb37827e08cdcf19b91cb"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","cde1524553616ffbd6ced4fa4e96a33b"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","be96687e246a4ebe85a8728af3ad0853"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","e4562dbb29e54d99b7d453cfcc70a795"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","80b17b463f223f53daedd744a1164e25"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","bd1d610cc870348f1950409ef59b8963"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","0c3517326c4f7937094a58ea09c18246"],["/2024/04/10/C-saolei/index.html","951b4d6e5601362de54e420a612735f8"],["/2024/04/10/free-yuming/index.html","b6a9c30e71a9ed6dc7bac5a48a758201"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","1c1a4a431483084c5513486562cb04f6"],["/2024/04/21/kw/index.html","579a1b1ab6fcf4f586ae3d1e6fd08962"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","b983818af3b15d21d5f421ee84c46cd8"],["/2024/05/12/music_download/index.html","7e9aa977ec525368d5ec1b7ca7221f54"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","143947bff60257d64fa9fe8e14dfcd2e"],["/2024/05/25/Vercel-Typecho/index.html","81d4108a742aaf6423dabdba252a1fb1"],["/2024/06/02/website-all/index.html","94fab6bb6da021b87433c99c6424db1d"],["/2024/06/17/tools-box/index.html","ade464412f7bbb4abc8733c68afa685f"],["/2024/06/22/biibili-zhilian/index.html","2722a2d061e17c6e5b80463d957f0093"],["/2024/06/23/sqyy/index.html","7fe2d44a960c6b458a26bbfe266de052"],["/2024/06/24/win-chachong/index.html","9580a2d21b4f031d5307263d6544e2bf"],["/2024/07/03/dyd/index.html","23ce603841140c6a4b37c1f7dac8be6d"],["/2024/07/03/geospy/index.html","b51a3920baef9a653062f5f0ddb6b94d"],["/2024/07/16/TuneFree/index.html","e6a603d76acff209f1060e3395068a03"],["/2024/07/16/pdf-repalr/index.html","730509e9ed52ef9f73d3817ae3e575b0"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","84228ef5ac3e997b26f1786704fc28ba"],["/2024/07/23/an-yuyin/index.html","56280467818cd8ba6a7c9d817959c252"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","8460c6a29ba352a87fc428b6656bc11a"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","afe95be4fc5f36d724f7093dabff39ad"],["/2024/07/24/win11-win10/index.html","93b15d9de21fba42c7897d870113afe5"],["/2024/08/03/wu-muose/index.html","38dee5422f35a3585d178ab7371ae39d"],["/2024/08/04/ab/index.html","91dfd8843646c618c723784dcb928d9a"],["/2024/08/25/mp3tag/index.html","0cf0747df9bf15a7085ad98e45568f47"],["/2024/08/31/cf-words/index.html","71179beb2d99191a81a73dd6b50128ef"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","95662060bec52e76a46b40d813666b51"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","8262e2de532217043abd5382052b7c37"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","9456cc26c6462ac31971a3542a258b29"],["/2024/09/30/123-liuliang/index.html","ea3d53e8e37890d67fada9d358ead188"],["/2024/10/01/app-allmusic/index.html","aeb02f09bbf13fcb75ac814736498b44"],["/2024/10/01/win-musicfree/index.html","3b39de2b2ebaa4f95151b3bea3aa4bf6"],["/2024/10/02/fire-xinli/index.html","7ee454efc53883bbbd69690e5c90e413"],["/404.html","7bf1c55622fd710531820ea280e29ace"],["/about/index.html","1016830aa182757d29774488d5a297e6"],["/archives/2024/01/index.html","a66811fc9d98fb322151fce6c27aaa74"],["/archives/2024/02/index.html","a01fd87b1f462aa3329282458b9e68f3"],["/archives/2024/03/index.html","975e1adba84ba781f39533a93cbf6c19"],["/archives/2024/04/index.html","fc3f0994197f4b970c8ff91b70b8eefe"],["/archives/2024/05/index.html","699c7b839a029da572e04815e9613b15"],["/archives/2024/06/index.html","88af393469ca3ee4aa0243dcfb1839fe"],["/archives/2024/07/index.html","549f334db319ed42d979b04fca2917b1"],["/archives/2024/08/index.html","03c22e78c8b4a46fd1e006a628f25acd"],["/archives/2024/09/index.html","20ea9314bb54a14b230933617f2b4dc4"],["/archives/2024/10/index.html","692e737bfc011da7049acb8c831c82a9"],["/archives/2024/index.html","4ac80f0fa84428e97ad1bbac3cccc7ac"],["/archives/2024/page/2/index.html","f6a4b3336998eb0aab22ce00c4190295"],["/archives/2024/page/3/index.html","acb3c3c1b2b51d192778577aaa45bdcd"],["/archives/2024/page/4/index.html","5145dfd37d535626c6f34c618140288c"],["/archives/2024/page/5/index.html","7b5a20fb0c9b4ac5b6acd7425054fd96"],["/archives/index.html","06e9f32d855707faa8636da660e860eb"],["/archives/page/2/index.html","099eb3481162283ccfeef15be3a4811a"],["/archives/page/3/index.html","df5a21847b414253fd91054ccfb8bb83"],["/archives/page/4/index.html","352d8845ce93fb1641796178c0b79ad9"],["/archives/page/5/index.html","575f7b52ce5cc53755888adf1c95eb2d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","ab0d3b1802a0147eb432cac5a33d27be"],["/categories/index.html","f0e8e83952ca5431883558dd089e8679"],["/categories/学习资料/index.html","cd29390b4d76b53d1cacaf0e11cce1bf"],["/categories/安卓应用/index.html","4936560bfd67e8808d523cf0665bec0d"],["/categories/实用推荐/index.html","998598af83c52c2be3f2903b19b8b0d0"],["/categories/实用软件/index.html","5d63feb7b4225b79031692dde4589179"],["/categories/心情随笔/index.html","9d8ff4a2a2e0bc0a377dc551083a4b05"],["/categories/心理实验/index.html","4caadd58fcec39a8995378c620b5c218"],["/categories/技术分享/index.html","bc2088ad7e494957eebbd39a2af9ce7c"],["/categories/探究所以/index.html","192fc1df7430e7c4b8272963983d7cb0"],["/categories/硬核科技/index.html","987c633c94e1de717a69b6c186a18574"],["/categories/硬核科技/page/2/index.html","d736407b1cacd6d28945649c70467a0c"],["/categories/编程语言/index.html","6ec76005cb94c927db9bc21b2a13d4f3"],["/categories/网站建站/index.html","c8de490b0def2b7fade7573bdd02a21e"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7cfb4153789ef40e77ac322168999cd7"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","19ab678ac61e34010eac97c36434b2e8"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","6974ab4a88b7600409db33a196020e2a"],["/message/index.html","26a0e2e2944c8eae6c9d433d8ae41645"],["/moments/index.html","5e8d63afecd1aced62215e5f58ba182e"],["/music/index.html","5da64ff5ec808e45150d31dec9a76b1c"],["/page/2/index.html","93f9f2ffdf06e644e567790f2e7b8822"],["/page/3/index.html","d10cbc097c1954bad4da4e118490f82f"],["/page/4/index.html","70fa803d20f43b56e839d9230484d480"],["/page/5/index.html","b3d754d27898cf18cc941aa97ae129d8"],["/recentcomments/index.html","304698b09fd420d1b609da6a935511c3"],["/service-worker.js","1b87edb70e21c77f7d4d870f2a7e6b11"],["/sw-register.js","a0cc5bd0ef0f42dd765abe02a0d67e14"],["/tags/123网盘/index.html","79a390c479817c37d1e23d818f3af9aa"],["/tags/C/index.html","e315680cf82e7b6153a8a9e646e0f021"],["/tags/ChatGPT/index.html","d6c6e9917138c4b7103c2ebab2587896"],["/tags/Cloudflare/index.html","8a186f8690624b7b7005f2d85b86c8ea"],["/tags/Markdown/index.html","dc2ca9eb27009a96d1eb848a1cb5207f"],["/tags/Openai/index.html","dbc108688c2c19dfa25d6f25bcbe036f"],["/tags/app/index.html","54c328deff737f698e08f63a639bd8cf"],["/tags/hexo/index.html","254283f18d762fda1ea7d4a09669232b"],["/tags/index.html","dd9d2df5f8ff2fd0790529503a25791a"],["/tags/信息修改/index.html","1c6117879f0b57172230720709aed09c"],["/tags/写作/index.html","0fb8d3c76b31d08eeb3f4a972ee10327"],["/tags/分享/index.html","c43b388161e14d68fa395c4a275233ff"],["/tags/吾爱破解/index.html","0f8a216b1c66495b83716e0bddd901b3"],["/tags/安卓应用/index.html","5939f677bc21e68fabc50f733e1738b2"],["/tags/安卓应用/page/2/index.html","1fe04546c9a0aa2c1cf06a56ab85b7a3"],["/tags/安卓软件/index.html","14939a47737d637c0e79390a10834101"],["/tags/实用/index.html","bb20b57f835875f7930bd02a2a36c32c"],["/tags/实用推荐/index.html","4c66fb1b754fc1149d38ea6b88e13a44"],["/tags/实用推荐/page/2/index.html","0599d49127a69daea21c21f198d140b6"],["/tags/实验/index.html","706eaee1fae044f08e535aeb9a679f94"],["/tags/工具/index.html","b8fa2da1e0ab5a7be6049508c676f26b"],["/tags/工具/page/2/index.html","7ecc20e9b60a80d6ea1f5ed0525185d4"],["/tags/广告/index.html","1f11b4bc85a3a7d232ed798ff62e428a"],["/tags/建站/index.html","a5b7d6e8e6807365a679466925c350c5"],["/tags/心理/index.html","86d9cb7ca74a1bac4e6cdb050eefa5e6"],["/tags/思考/index.html","40699b292ee7e3f95296294f19f8457c"],["/tags/技术分享/index.html","e462333c287c98b5cd1f4e63f90b2195"],["/tags/指令/index.html","85c9b23547bd5d740f04aec3e2207a42"],["/tags/探究所以/index.html","12ebd2875b5558702d4f5778f8d7e32d"],["/tags/推荐/index.html","a8e2428c7526549609e3654a1ef747d7"],["/tags/文字语音/index.html","dd981595bbb6db2492580a37266ac76f"],["/tags/班级/index.html","7819e1588cc2239eb5d59fde7be7aa81"],["/tags/电脑软件/index.html","158d75da43c9d69aefe666537661d7d0"],["/tags/电脑软件/page/2/index.html","cbe1dd514e214207ad7b9988db11ddd1"],["/tags/百度网盘/index.html","a7b760e920a746f2f9c6e351d4510d0a"],["/tags/科幻科普/index.html","b55ca3fcfcfdf43fa6b87ef70c5f582a"],["/tags/精选网站/index.html","a0aee82969b2a020ca5af20f6b7c1a4e"],["/tags/系统优化/index.html","484234597564e9d8fdf375344b65d408"],["/tags/编程语言/index.html","f95a5915e09ec346094790b29ffbf493"],["/tags/网站建站/index.html","876d7866bb1971cc15e9879f3e19fa92"],["/tags/视频/index.html","56909b4af9993921b781e15bb61219aa"],["/tags/计算机/index.html","6eed2c47b4e8ae05cd95380fc604b2d2"],["/tags/记录/index.html","05d054a82adb38f91ee2df1bbf3dba65"],["/tags/部署/index.html","ee1ebd64d496be527cb112aad271aab4"],["/tags/音乐/index.html","54109d5ae8a2d84b1f411a0b6f3102e1"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
