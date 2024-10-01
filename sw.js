/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","3669d72ace88f2c334edafa0879b0848"],["/2024/01/22/Markdown/index.html","e15ec75b3abee2d52c2ca502b4601050"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","49148e84034d9b796046727a5939fec2"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","40dbd6d4782d01e9629bbb91b245c1ac"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","2cfb6c57b11fdb8a8602b6d616f73cc5"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","d6abf7bd0d44e76d197bcefd0da078e9"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","63ed3d2834e0ec4cd3cc44e5c9a39423"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","8da76233ce380f2e049d2cb61a893905"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","278caf2b1ff93a321c86363ec90c7291"],["/2024/04/10/C-saolei/index.html","722ac62b50e72c83f0920d6a38427571"],["/2024/04/10/free-yuming/index.html","a8c4cf53bda4ca5a4f987d594831fe5d"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","6bd9274975aba2bc2d8c4e2832245bcf"],["/2024/04/21/kw/index.html","7b88b6cb827b8060f89f1dd18767ac8d"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","260ad49f2bc0d06806a06de23d21cedd"],["/2024/05/12/music_download/index.html","94178d42a41834a21725a2a781f7f684"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","1f26f2b87424b14f2ba542fa187394b4"],["/2024/05/25/Vercel-Typecho/index.html","898687fa690eddee3813120fe066fa51"],["/2024/06/02/website-all/index.html","341e6a68c8d53462ade7a857a6aad9c4"],["/2024/06/17/tools-box/index.html","4caad43d43eba060ac9bc60f045c203d"],["/2024/06/22/biibili-zhilian/index.html","2fc15d8502eb04071f471d9367a93f8c"],["/2024/06/23/sqyy/index.html","69f69b08d3c06e74cebe7d0add3eaae7"],["/2024/06/24/win-chachong/index.html","724ccf880309ecadf1b9a7f5557bb69a"],["/2024/07/03/dyd/index.html","0419f563137ab0ded9c2315a4c45afb7"],["/2024/07/03/geospy/index.html","8af76449fc16aaae2c29f7b1912085cb"],["/2024/07/16/TuneFree/index.html","d7570d901e8d7b04a7ad19feb07561b0"],["/2024/07/16/pdf-repalr/index.html","65c0b3e9910a4b004b1063f9dd4ab1a8"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","9ff0a65c0e90ffeda53f4bc288172a41"],["/2024/07/23/an-yuyin/index.html","7266b80257ac8317a0e24d8bf3a4023a"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","ed0b0d6d373af725352386d566fb085d"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","78343a57f1a2ce6eca93c2abdab7760d"],["/2024/07/24/win11-win10/index.html","79f9632108a65cd4e0e8a3b288028f14"],["/2024/08/03/wu-muose/index.html","138ee1cec67f85fb6df9c414ef14749a"],["/2024/08/04/ab/index.html","636d5f683a4977480f2d72112edd7ae0"],["/2024/08/25/mp3tag/index.html","7fe3f4a6e295c00a23f7383c54669d4c"],["/2024/08/31/cf-words/index.html","f2593bef074d3cb0e79ef51c551a5173"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b8230e4bfdf9c5a92ab7db1772295b5e"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","fff0f1e8643b1b4b9f3d7c95fcc47fb5"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","536e454ef8456db757a5fd2e0417e47f"],["/2024/09/30/123-liuliang/index.html","7e2956ab28aed9cea4b146ede4a6c7d4"],["/2024/10/01/app-allmusic/index.html","7e54d695f5f982d246255d1819bd3334"],["/404.html","816c47f14bed9afeb36584de5c363290"],["/about/index.html","ed925a7236542ba217ff83c7a960bc70"],["/archives/2024/01/index.html","79f8e369e3850478715f1f692bf29ba9"],["/archives/2024/02/index.html","e056770afeddcc5f4ccf6e2e2220192a"],["/archives/2024/03/index.html","fc3c7095daa2391c4e645da74d58307e"],["/archives/2024/04/index.html","ff5bd1a8bcdba0bbbfe9d4e88c65a938"],["/archives/2024/05/index.html","c44ed551d4994b7f5abd688378cc85c5"],["/archives/2024/06/index.html","aa46a4a2010e1a7ee3e725422a5cd5d5"],["/archives/2024/07/index.html","621bd665aaf5c62e16d6320bafe08810"],["/archives/2024/08/index.html","d8717d574c152114223a35addbb87634"],["/archives/2024/09/index.html","2b99ffe4acbfe7a13f62317ddd0003d2"],["/archives/2024/10/index.html","3a3031c43ed01e3fbf9b10a8365c1541"],["/archives/2024/index.html","9e147b4ef5222439fbcee42d10dff93e"],["/archives/2024/page/2/index.html","a9ea04274cdd0e2106a687b82322ec13"],["/archives/2024/page/3/index.html","b509b78553433ebc42a158a9a6e29648"],["/archives/2024/page/4/index.html","7177dc40f00f8d49ea99c90cde127470"],["/archives/index.html","afb6d8818b7cb47a13e58cdf188a7a6b"],["/archives/page/2/index.html","782c825a84ae84483e07b72c01643622"],["/archives/page/3/index.html","be698b91d54b05f0a2241ad578007e61"],["/archives/page/4/index.html","eab169489509cc4d77972a0d8d06ef82"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","ff39141c1f3129c38a2b3d5f1b22645a"],["/categories/index.html","117da3f0f7a0404eec1fb9bda6771a26"],["/categories/学习资料/index.html","582250fb7c5409b0a9d031faf674e9a1"],["/categories/安卓应用/index.html","35e71747cf76fc0ce7f3b37032f08286"],["/categories/实用推荐/index.html","e86796c84667b7aadd23637f8f67e7f3"],["/categories/实用软件/index.html","d1cb0f156b2782a546943767d29b72c0"],["/categories/心情随笔/index.html","fc489345f9a840eadc331641354e9b5c"],["/categories/技术分享/index.html","1003202dfe7e9e2927d7a3efcd344a4c"],["/categories/探究所以/index.html","b589851a4bc4074935f1ea8a22443622"],["/categories/硬核科技/index.html","1a58a3085da51a977404ce61282eb1d7"],["/categories/硬核科技/page/2/index.html","636fd6c3857f36fb24431ca1dc70da7d"],["/categories/编程语言/index.html","dbb42aedc9d960dd90e725ee8bce0937"],["/categories/网站建站/index.html","3e37d790227f88f157e4d9287293a271"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8a29e60219fd835d837584431ea748e5"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","28bf13fb21a1cb3f546526d46f0e34dc"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","240ec6de661df43e71824100d741956c"],["/message/index.html","f3783dc1c2f8a9ccd0f29528ee33206d"],["/moments/index.html","29833dc6a40f98d448d25731c314ab06"],["/music/index.html","dd5ee1f62e4b86ec3ac2d75d8d2ba30c"],["/page/2/index.html","8cef8fb2b18fa33a0613e80d932c4ff7"],["/page/3/index.html","0139fde4476f85d2eb976c0ee12a758f"],["/page/4/index.html","0a8c94a0590265c1b6d910f24f076134"],["/recentcomments/index.html","5c153fbd235d460e03e9a0db83c79e84"],["/service-worker.js","b7b299835fe03a2666d4ae254af4380c"],["/sw-register.js","325e3a7e188649a5ab55f7c3d66f8b62"],["/tags/123网盘/index.html","d3b4a86f57f4aad1e69e9dd097aa5a3f"],["/tags/C/index.html","2d11ae0502dade157f74480abfdc1f42"],["/tags/ChatGPT/index.html","c9c803433f8fa231de57ac2c07cadf44"],["/tags/Cloudflare/index.html","49a3bba7269091e519c3770d3404fb52"],["/tags/Markdown/index.html","58d96730103caff5122ebdceda931952"],["/tags/Openai/index.html","31a6633405836ac1aae67617603abe36"],["/tags/app/index.html","5026b39e6d11a0be8d7a5885c7563a17"],["/tags/hexo/index.html","5eeb7b996c095da7cd721163851c5b03"],["/tags/index.html","3d5aa5d5fed8925a584d57459e0e8024"],["/tags/信息修改/index.html","27556ce2c82770f09eb811a05b50a56f"],["/tags/写作/index.html","0110257499f4506a73efed460739a49a"],["/tags/分享/index.html","ed69da9a1c3661a525d155d7aa22d4f4"],["/tags/吾爱破解/index.html","d6771452de0c902ba08b99c6c2b72140"],["/tags/安卓应用/index.html","2bffc0ea8f4ce3e7a94315a14ee2319c"],["/tags/安卓应用/page/2/index.html","35c8794b784d4db379316478d31af69a"],["/tags/安卓软件/index.html","9ddceca9eb066b41898ac408913dfb5d"],["/tags/实用/index.html","b9b591e5991ae327ea7b4f10dfae8e02"],["/tags/实用推荐/index.html","a5c8a8e7f4ad457a9246c545eac3e342"],["/tags/实用推荐/page/2/index.html","9049b515343a3b663beb735a61062421"],["/tags/工具/index.html","1a68f8e8b25b8739be868760a52576d0"],["/tags/工具/page/2/index.html","f3b09caea553698235abdfabb8b137df"],["/tags/工具电脑软件/index.html","361b3468da3636aca8bd2b8c95f4012e"],["/tags/广告/index.html","90bb06068805eed5c455c6453db962cd"],["/tags/建站/index.html","7571deaa29a5cc87f620ca81b1261111"],["/tags/思考/index.html","a73ece7cb129ee581d390b8f745e2011"],["/tags/技术分享/index.html","556261bfb98cc7d547f018b4912e1712"],["/tags/指令/index.html","40b599b56183f1fab619ad81161dc78f"],["/tags/探究所以/index.html","cb5dbd240644e58d8abfd1bbdcd5faa4"],["/tags/推荐/index.html","68fa1d2597d32afd343328e4107ba760"],["/tags/文字语音/index.html","f60757d06e254cae531fa1b8f8f5b65c"],["/tags/班级/index.html","ebd7aaae1f223a2d8be292ca1eac05b1"],["/tags/电脑软件/index.html","2583902b06b2982992f5a67e01e9e068"],["/tags/电脑软件/page/2/index.html","b6dea6e9bfe1947e00bc46b053fc08e2"],["/tags/百度网盘/index.html","25536d9d21416c456db909b1b96ceaff"],["/tags/科幻科普/index.html","f1e97c94c0520ef64e6d4422bc414aaa"],["/tags/精选网站/index.html","27298fd636d42c11a2aba93ca43327d2"],["/tags/系统优化/index.html","b76021832ccbcb0b46ff6f167a13760d"],["/tags/编程语言/index.html","322d1e72c2ab4c34aee2d7914033ff0d"],["/tags/网站建站/index.html","bbbac8c97e34c2bb6687aec9421b6f2b"],["/tags/视频/index.html","8939ca6ac6b7ecb5bbf765535217ad79"],["/tags/计算机/index.html","ebb9b4afc9ae2ddf71232f8b4eb56ce1"],["/tags/记录/index.html","1aaec987b90bac94ac173c0f27664a0c"],["/tags/部署/index.html","03cebe88469ada4827d0732ffd77755c"],["/tags/音乐/index.html","edef66ab72542f1bc21d9efad582ae14"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
