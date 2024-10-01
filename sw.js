/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","5b9b0e470b0e22eb27653caf2ca9ccdf"],["/2024/01/22/Markdown/index.html","27735e3accaf063bd7f3e023863de9fd"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","fe4aaebb4926104dc3bd536e7d24d4b9"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","076e45b46cc4de04c96f2d19d49e9d8c"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","a175ede2072a6dc1cea3d721aacb3e45"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","3522c1b41e3cea6ee0f97585b1b60995"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","37b31df4e72c4b0a68f94fd4ffe045b8"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","76d27fd323c4d8cfa5a49f0c2b399b42"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","6e2b01305b35f72e5f26947c06f1b455"],["/2024/04/10/C-saolei/index.html","7d36b79633508163993b36d6241656fc"],["/2024/04/10/free-yuming/index.html","e2efea7037590dfda1ae33ae33885d0e"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d17163c2e55b64265156d83ca0b6c8eb"],["/2024/04/21/kw/index.html","b89b46d382e383b4d817c052f8b352d7"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","ca6c13d38eebf15913ec97c18a51fcc8"],["/2024/05/12/music_download/index.html","361b8766806f96ca85a49c9c2ab38091"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","30752f30979c1f056cbb44e2740cd253"],["/2024/05/25/Vercel-Typecho/index.html","e0299396d067b1d110616736ba7315f3"],["/2024/06/02/website-all/index.html","07b1521765371c25d7765c024372ea96"],["/2024/06/17/tools-box/index.html","8498a83456402a088d4e159b34b3d5ed"],["/2024/06/22/biibili-zhilian/index.html","99f6727eee1b10cc48cb0e4a9c944568"],["/2024/06/23/sqyy/index.html","50bddc3276507dfa257e5bab9eb42166"],["/2024/06/24/win-chachong/index.html","273370dd7dbd8133a9521cce19bfe6fc"],["/2024/07/03/dyd/index.html","280784d3745c4150a32cf9a5c9b67791"],["/2024/07/03/geospy/index.html","0b88f6a5b239285b32fe5167a9aa15fe"],["/2024/07/16/TuneFree/index.html","d804157c7af26b028a01025083588d3f"],["/2024/07/16/pdf-repalr/index.html","8dc4539348ae2bf587ae81ad1cf25290"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","f8ae8a22ff75c610235f4e7543d0f249"],["/2024/07/23/an-yuyin/index.html","348e06302c269de9f7746c5032cf98bd"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","4ea8c5b774876699770f19918ad7caf5"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","566d24c621fb0aa055354ddcbb948dda"],["/2024/07/24/win11-win10/index.html","6ccb0ed0a86c6b3ae16539a225f1e0d9"],["/2024/08/03/wu-muose/index.html","35ea02f2cb81cf4dc9e86039cd660b88"],["/2024/08/04/ab/index.html","fb1c14a1aaef23d1373e7399d9ea9a72"],["/2024/08/25/mp3tag/index.html","9e3a1fa44e3e2c154da9222bf0cd2cd4"],["/2024/08/31/cf-words/index.html","26b3ed64fc5940ebcffe68a65fdca931"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","0ccea0b92a5118a3e6979d979ef889bd"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","f948000f2148bda462917ad3e7b92ab8"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","85eb29acf7c95ecafb683bc0a6b32252"],["/2024/09/30/123-liuliang/index.html","9d0ce2074d6e5d64d05ec690842f1370"],["/2024/10/01/app-allmusic/index.html","69143b392ff8e5237ac43c8084e75071"],["/404.html","6c2639f3865a0ebc38eb70bce6dce18a"],["/about/index.html","a77ac982209ec6b978edfbfa3a56d3b8"],["/archives/2024/01/index.html","e772f34fffd36e6321a51990d9080eb7"],["/archives/2024/02/index.html","ca16e64ab05234294fa319a8c868db07"],["/archives/2024/03/index.html","e2f120e8bbbddf6c48d7246f7ea228d6"],["/archives/2024/04/index.html","5e4c2b7c155c9ab55f0b87c3a4c393e0"],["/archives/2024/05/index.html","24e987dda7823f2dd10bfc0043d49cc9"],["/archives/2024/06/index.html","27625c8e38fef52972a49b8e48a11e15"],["/archives/2024/07/index.html","92285a630f842508ce969823dd7ce081"],["/archives/2024/08/index.html","cb4e9a862f8c2f6cab5458b2038575e6"],["/archives/2024/09/index.html","dc4be97ba3f15753588e5da03819c92b"],["/archives/2024/10/index.html","4b5a548c5ac0f10a32b8454e315d3863"],["/archives/2024/index.html","b45c0ce1eafeb203f29a354a1148106e"],["/archives/2024/page/2/index.html","9786765ee7a89731f00688231dc02f38"],["/archives/2024/page/3/index.html","af13adc6d3c17cac68dd02ed0006170a"],["/archives/2024/page/4/index.html","b20c83c1016aeeea05a5099cd70df94f"],["/archives/index.html","f931ee53d9a059abafb0a5f1a5661a11"],["/archives/page/2/index.html","7d59360335d138d4fdc898424e76b5c1"],["/archives/page/3/index.html","4bd257c3661d5e642f1fdb4b3d907fc7"],["/archives/page/4/index.html","3997bd5b7d6b56fa45a235fc1e2d44d9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","7e5165dea39e1b2cf303f746d749e083"],["/categories/index.html","d5b854eca01050f6dfc7f55e132814a7"],["/categories/学习资料/index.html","03174ad654d721357247795ac12c50e0"],["/categories/安卓应用/index.html","5d141a6507898057cbc1032b9474e8f8"],["/categories/实用推荐/index.html","12419dde2cf9007eaa6dd8b926cda787"],["/categories/实用软件/index.html","158160f0ddbf7b56dca8dff697312178"],["/categories/心情随笔/index.html","13094a4fc1f3adaa04abed6a2b50d459"],["/categories/技术分享/index.html","6161bbbc9dc69f7e8b5866f6121dc906"],["/categories/探究所以/index.html","3b97891a9a6b9f3c09f7dd7be24dc0cf"],["/categories/硬核科技/index.html","710cfb2bf0a8ad5975a922b1a3a5cbf1"],["/categories/硬核科技/page/2/index.html","892541e1f46b68a9890be56118528407"],["/categories/编程语言/index.html","a59e1cecfd3fbe6b8ae17bea1d35b1b1"],["/categories/网站建站/index.html","c687e0e2c73fbb979da68a15f0191ae3"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","cd898c41252731b792607e6989c22c47"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","c77173b3fcca1d6b5c55a4df0b65fec7"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","124d17e1c74741f725e16cb2cb888e00"],["/message/index.html","fcf3dff8be7434fd7fbe6ecdec803f62"],["/moments/index.html","c3416700b6d1866fd30dbd9254ce536a"],["/music/index.html","38250ddcfeee20193351f8b342528d96"],["/page/2/index.html","afe39c154b55b98ec903f99e8bbbbdb5"],["/page/3/index.html","67f3bb4f1a013047233344791b441f88"],["/page/4/index.html","788b91cd378d56cfed9ddbdbfebfb347"],["/recentcomments/index.html","057b5840be15b4bb3675ea2044546e1b"],["/service-worker.js","810e54f148a5407b15f397b62fd2ee9b"],["/sw-register.js","734a58215eda85a618ee1b2ea7e133dc"],["/tags/123网盘/index.html","cf8f399f086810fe86036c7b1afbee06"],["/tags/C/index.html","a73b84cf3ab9ccc785b646b9d0d3fb31"],["/tags/ChatGPT/index.html","ab7e23530c0df0cbbdd3e27d4541b12a"],["/tags/Cloudflare/index.html","3460f60abba5d610f43e908532df8ce2"],["/tags/Markdown/index.html","79902beb5a920328846b3d7c1db13585"],["/tags/Openai/index.html","d9f4e29979d448b6db68fe15940eb927"],["/tags/app/index.html","7d488a7415ce3c8ca50edd030cf0b786"],["/tags/hexo/index.html","c73906159b9676ac1d611f1b03bdf95f"],["/tags/index.html","8ed28bdb2817319152cda60ffebf7de0"],["/tags/信息修改/index.html","1cf6327d9bc7dbf8d2fb374fc39ae8cb"],["/tags/写作/index.html","eceb66cb3f5ef61972fdfecf4465083d"],["/tags/分享/index.html","9a8df197a5a3aa5f60c83fd4803c8d45"],["/tags/吾爱破解/index.html","b7e7956558f017186b3d8c40416aa2ad"],["/tags/安卓应用/index.html","8cbfe50299e9459235ae677fc259f5be"],["/tags/安卓应用/page/2/index.html","f310312fd40e653ece780b207a57bbb1"],["/tags/安卓软件/index.html","cff83040f8ecbbb02e93aaebf41c5096"],["/tags/实用/index.html","cd9194afe1dc77aa011d1e81367ef2ad"],["/tags/实用推荐/index.html","50679eb376b9e87e15c891cd84486de2"],["/tags/实用推荐/page/2/index.html","4b425b986405d7724cce420517a83c40"],["/tags/工具/index.html","d88ce71b966e9efa7b983d4407bf2ded"],["/tags/工具/page/2/index.html","c065970e57840511023ccea8c5d9cbb4"],["/tags/工具电脑软件/index.html","59ac8e103ca28931e3874fe476c63219"],["/tags/广告/index.html","c092ca51b48c1575a4ae0078cc55cbcd"],["/tags/建站/index.html","b46b608a8fcc6355c34119d8577e61fe"],["/tags/思考/index.html","bcc5712a51435e11a8aa854a82ce48d8"],["/tags/技术分享/index.html","1ddf7cf02bd37d982e8c9872e62e38bc"],["/tags/指令/index.html","823128e33ecce36a6b500c5b44ff007f"],["/tags/探究所以/index.html","364b38e96a08ebb0d72683777f2f2b87"],["/tags/推荐/index.html","7d7dc9d961a5019c70e8153818c050ed"],["/tags/文字语音/index.html","1a57e0acdca7e15de8a754395c527c99"],["/tags/班级/index.html","a89db6d3d73751274406af58cd8f19c2"],["/tags/电脑软件/index.html","a5e5f4e14bb7e71e04a06aa52a39b5b7"],["/tags/电脑软件/page/2/index.html","22d42b44aec4558b22a80c9d85053351"],["/tags/百度网盘/index.html","68fd59b8b8e9db90c7bec1b4c72afc49"],["/tags/科幻科普/index.html","5e2dcd22c8e3d4f9398a40cafa712e8d"],["/tags/精选网站/index.html","a000bb174e2ea50e885d11de156bccee"],["/tags/系统优化/index.html","b1217832fa54049bc9afbb3867dbb1e8"],["/tags/编程语言/index.html","7ec2ba3acae01332731f40cf50ccefca"],["/tags/网站建站/index.html","ab2c3a17394853c5cf8259fded7d349c"],["/tags/视频/index.html","03aaff3ffc197262303765d0d6272508"],["/tags/计算机/index.html","27bb55349bc86f8e89a421759976c766"],["/tags/记录/index.html","2e6ea66e185d2969f14ca4c10f8cc0e4"],["/tags/部署/index.html","ccf071d3683cec8c9f3e0ebb6d8a3ead"],["/tags/音乐/index.html","6fe0eba8b9374157bf0f4a84c3963e01"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
