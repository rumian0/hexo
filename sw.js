/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","bd08b517ff2dae828a4524170ab497fb"],["/2024/01/22/Markdown/index.html","1d9a6120f153e6fa2c88cb3c0dd5e1c0"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","658a07820b360a49e2f660e13a1f986d"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","4ac1958c783592ceadde8a3f5171e50a"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","82bd3818951d338c36ac96dca2bbe2cb"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","b26b78192437c8ec9a4e29b055eb772d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","66b6713e8d41876a54f0dfe1f59306c2"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","30239553bc5be316cf269883a7b2dc2f"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","308238e5adf640489ada05570132b0e6"],["/2024/04/10/C-saolei/index.html","ced5931f4147cf89f9e7885860cf9975"],["/2024/04/10/free-yuming/index.html","485ffd143f56c10ff89de6294bac21e0"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","6b7d52376cd338b4495b6f3096e22831"],["/2024/04/21/kw/index.html","8e50c6604af98a722154b8c365182076"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","ff6ebc17a25fb2158ff883f8fd051673"],["/2024/05/12/music_download/index.html","de319615b89247338973c7ed8288c30c"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","ff83c13537a931d1acf7866e3d36849e"],["/2024/05/25/Vercel-Typecho/index.html","9b41f22c4035ada846a2ce43ac5b79d4"],["/2024/06/02/website-all/index.html","41844243401449eae9295bcbb392e06d"],["/2024/06/17/tools-box/index.html","2a15d54f8d49059a2e299963c346e68a"],["/2024/06/22/biibili-zhilian/index.html","cbd9f6c25858d832c19f327db132a3f2"],["/2024/06/23/sqyy/index.html","376614a85b40f9e43081496d5d9d93a8"],["/2024/06/24/win-chachong/index.html","953ab8809efa7894e5eb2d6cd92bad26"],["/2024/07/03/dyd/index.html","fcb7a38fd2f3199b391f077ae0fdf50d"],["/2024/07/03/geospy/index.html","a181cd8cb1ce5cce4bd60584676e4a7d"],["/2024/07/16/TuneFree/index.html","5c4658b04ebe7048b3c8927f3aef3251"],["/2024/07/16/pdf-repalr/index.html","480d50729097f45053e263d1ee670f33"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","0a247df8f779db900d43e08932becead"],["/2024/07/23/an-yuyin/index.html","5c7fd1b8e0e06810215849b21289b6bb"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","72c713d2fbfc2345de6627247ed71438"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","8884bb370c4c3e58b79dc03099de4eae"],["/2024/07/24/win11-win10/index.html","ea59ef50a9b616ca5f444aabfa2f862f"],["/2024/08/03/wu-muose/index.html","2f67c1c52da1f80f0e97251044b2d2b9"],["/2024/08/04/ab/index.html","f0f3f47e690a83777431833ad3fe1a53"],["/2024/08/25/mp3tag/index.html","9894f0115c3d629f8d0843ba44e80a43"],["/2024/08/31/cf-words/index.html","bca279931543d188c1fc8c347724cd6c"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b235965afd94e2ecd562992fe26f38f7"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","1d9463b3667ba76cc377b9c1be375757"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","8787563f76d644d2ed78ff06b89161fc"],["/2024/09/30/123-liuliang/index.html","eb2a5a311bc726fd2dafcb907a8ab8dd"],["/2024/10/01/app-allmusic/index.html","c6ff0854543bb8c85db7cdf266b97d1b"],["/2024/10/01/win-musicfree/index.html","907156cddd1da3212c3b54b61e2e05bc"],["/2024/10/02/fire-xinli/index.html","55667748ac5b04ec8fce4184c19115fb"],["/2024/10/02/win-wyydaili/index.html","81dabc78c44fce563e5f8b938e48f5af"],["/404.html","d3e97787fb2bbab2afad7bdc09b292a2"],["/about/index.html","cda543b02c88d2bd03457f94e441d0cf"],["/archives/2024/01/index.html","dc581403021f9dfd60bc8b29bdc46669"],["/archives/2024/02/index.html","58de81a600e5e99faa9b0cc94041e38b"],["/archives/2024/03/index.html","5e060503882fb9fd78357da8b1cb21e2"],["/archives/2024/04/index.html","4b4bea68905bdef22f8f82d6fcb4372d"],["/archives/2024/05/index.html","1d7d9b2a530dc7b5a528e8bb5add8a4d"],["/archives/2024/06/index.html","31be072fcd6ba68ab0f657dfb21f5db4"],["/archives/2024/07/index.html","ae567e41509e653a83906988a5adaf6b"],["/archives/2024/08/index.html","7db268bd52584f2cdf8298b8916ed797"],["/archives/2024/09/index.html","e1705809151429859c290d439ec8baec"],["/archives/2024/10/index.html","030d21ca66bccfe66ff5275a33825504"],["/archives/2024/index.html","df4389888641e861f6b88370807139aa"],["/archives/2024/page/2/index.html","504665e1c4d3e1d0bcc2a72950b46ecc"],["/archives/2024/page/3/index.html","cc3034436dc444aac8a5a6c78ae302ff"],["/archives/2024/page/4/index.html","7c2ca8c844db1e18bc2c255a15f15dca"],["/archives/2024/page/5/index.html","33f06fdae82040d4f1de6ff2d580417f"],["/archives/index.html","640d1f304083f3ecf5d0a0fcf30d77b6"],["/archives/page/2/index.html","8f72f597d7f48f4cdad186103cd28c5c"],["/archives/page/3/index.html","aa112acb76b7651f2914a38a7c604198"],["/archives/page/4/index.html","916a35318d4085b7b650e810987a7674"],["/archives/page/5/index.html","63f332bda1539d1cefdc18453f56669a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","dbe09eb8adface65889310c10355273b"],["/categories/index.html","4edcfb21d7281641fbfea3267f3b083a"],["/categories/学习资料/index.html","3eda6b60e7659f9cecea86022d04dc4c"],["/categories/安卓应用/index.html","e446e1c4c81ffdf83f6bc723b7a8abc9"],["/categories/实用推荐/index.html","584cd0b5b1959a3e0f22dc182b79a3cc"],["/categories/实用软件/index.html","0fdd65751dfc9ee47eb710a91a21c1e8"],["/categories/心情随笔/index.html","0133f237496ce282c584a86851a35d23"],["/categories/心理实验/index.html","5a2861817cb475c2bd071cb5f646b265"],["/categories/技术分享/index.html","0ca627b7cc41fb05a817393fe7057a84"],["/categories/探究所以/index.html","57d6039a858bef19c2be38fe119c473c"],["/categories/硬核科技/index.html","57cb4c627183fc8a01fb7621908e3341"],["/categories/硬核科技/page/2/index.html","31ad04ba487bf55912044f208d6267a4"],["/categories/编程语言/index.html","c23c377f29097668ece42cff73b911c3"],["/categories/网站建站/index.html","d005b7e562b43403dc19c2361fadcebf"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","6d089760f8f898e22239bd647d5a92ed"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","e73a0b3e82b16b52fab3eddc2f796ebc"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","2e5c4f29a59b326c5b862928e1a6399e"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b1ec72abd15aea76aeec020918e1b0df"],["/message/index.html","f565ca93204be1b0e2f8f814c6c08b11"],["/moments/index.html","a4b5d55c7f633d17a139bfbc5f526727"],["/music/index.html","7303405d78bc53661d8b81858e9a55db"],["/page/2/index.html","00863991969ebd3d64f812e8e417d345"],["/page/3/index.html","eb1ee50cb8d21e5141cd236349a5b5e5"],["/page/4/index.html","928ac5c459654f56900238ab6c1947b6"],["/page/5/index.html","9f9037dfdd99a62e8e2c5ec8bb1a3634"],["/recentcomments/index.html","6388bced6922ae9288e3d415d1af3eda"],["/service-worker.js","974620d58d9fb54f0fb6492ecc19bb60"],["/sw-register.js","6366e9edae112133de19c4bc127f40c1"],["/tags/123网盘/index.html","638bcf1fd67bf22d27c24a63e2844397"],["/tags/C/index.html","da6b7e7011b1f73820b813949da7546f"],["/tags/ChatGPT/index.html","55eed0842f3488ea0394a0d18afccc20"],["/tags/Cloudflare/index.html","f20bf053456bd1be88aeb71cea98e079"],["/tags/Markdown/index.html","fac9cc60635264633f859954a8926311"],["/tags/Openai/index.html","87ea43b94c59bf7aaae76a4c039d8882"],["/tags/app/index.html","f850d1f0eaee82a76d7332b44ca37cb7"],["/tags/hexo/index.html","892f5129a609e48acc2fa6eee29fc7e4"],["/tags/index.html","33ee6d53919112bec05fd9821337c2da"],["/tags/信息修改/index.html","ff9dc23de97e5671cdabfd462c357aee"],["/tags/写作/index.html","33e52f7449fb156b748f568c0f769305"],["/tags/分享/index.html","320efe21451a39ab0727e9956e0d2891"],["/tags/吾爱破解/index.html","023101677e7d0b71de2a0b604ab880ff"],["/tags/安卓应用/index.html","f1ddf7832b271e3cb6688b7f9d539f1d"],["/tags/安卓应用/page/2/index.html","c759830db6bd6d19219584a46c4b2daa"],["/tags/安卓软件/index.html","1fe2d0f56e993de645479abeb0abc48f"],["/tags/实用/index.html","9f1b4193431eeb6e429ead83050faf5c"],["/tags/实用推荐/index.html","b0bc0a8eaf51d21f2e739a4fac466e93"],["/tags/实用推荐/page/2/index.html","ceaf8f0d04a931e7592e658199db8268"],["/tags/实验/index.html","4ee8a7e060bd765b1fe32bf5f2c27bca"],["/tags/工具/index.html","a0ded4f61e105ddf452ddfd2ef247c9d"],["/tags/工具/page/2/index.html","e20f4a951b9e6c9037a4c664d5d36a36"],["/tags/广告/index.html","aaaf3fb4ffe828d207e59f9eb8b01b53"],["/tags/建站/index.html","4243a870b9004db35e0d6524b7e89b1c"],["/tags/心理/index.html","2bdc773d9677108ae1cb254526f41ad9"],["/tags/思考/index.html","d8f853afe9a4edddd0b5f40726d3bae1"],["/tags/技术分享/index.html","c6e54900a293cbc4fa2d91ea94b30ccc"],["/tags/指令/index.html","d7a068e9cec20c9a299ea1bf4c50d8f5"],["/tags/探究所以/index.html","ebf937ecc00b89c100e0df4dbe7f5999"],["/tags/推荐/index.html","046b2f052c019422122b15511a135ac1"],["/tags/文字语音/index.html","f71c62e7ff7a02bc2a48d77fda798f93"],["/tags/班级/index.html","ff936c7cc2fd61371881cfef4b19065f"],["/tags/电脑软件/index.html","f0e28943a5f5e6b4ae519a7cf8310285"],["/tags/电脑软件/page/2/index.html","049f621ccaa79b015f436224349c4cbc"],["/tags/百度网盘/index.html","4edc20969c110fc172717f3471e84341"],["/tags/科幻科普/index.html","6e8858edbdfb5fe7eb992c7057b96f39"],["/tags/精选网站/index.html","a633b062bc64d45d02c7bac36f01a04a"],["/tags/系统优化/index.html","ba864e15ddc02467badadec6d77fed39"],["/tags/编程语言/index.html","341634a8d2677ea89ba166cff8c92f97"],["/tags/网站建站/index.html","8f8f31ad9010886664f5c17f54d4fc14"],["/tags/视频/index.html","7e7711936355cacba64b7b5380bde677"],["/tags/计算机/index.html","401434edd1933f3f865a8332cfcd7a21"],["/tags/记录/index.html","86bf0191db9f6825c4aebfe47af13bb6"],["/tags/部署/index.html","e759be206a2d1f7d0f7f373a9420cd10"],["/tags/音乐/index.html","68ca66dea4b096df530d4e6afcc2de70"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
