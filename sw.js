/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","aa855dd443bc300d04227c2519b588cb"],["/2024/01/22/Markdown/index.html","56d092760bc3d9e5c0c09d8db34487ca"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","a652b7784b4aa68f47da367f6b8ca7bd"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","2e244394b24aaa61545cde5c763d2cb7"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","1d7f102bae1f8c28a13da9ef1e68c92a"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","4b8bcf54cc43d90f06167369ceaee970"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","2a146cd250a629217e7e74f6b42849b4"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","bd50a178068b14744c7023edacf3ef39"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","b0e5c4935d766fb939b9dff76bf613c2"],["/2024/04/10/C-saolei/index.html","d7dd943316ab67fec6634a269535fdc5"],["/2024/04/10/free-yuming/index.html","a6825e0de516f4ca7b3221d223796091"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","11feb5549c908a95505afc8a22d62d5e"],["/2024/04/21/kw/index.html","748a3f8e2dca051bdfcc4380423a6ddf"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","e4bcc0a76bbaf067ba720c9da3f6f09f"],["/2024/05/12/music_download/index.html","e1f9cd69d2568f5a1b8a9dc78a93cea8"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","748670b1516295442f0799bae8620983"],["/2024/05/25/Vercel-Typecho/index.html","fe140722e4bc55afb2a0bed6df8affcd"],["/2024/06/02/website-all/index.html","059be8ad3a56064ec93f28d9aa7e8c5c"],["/2024/06/17/tools-box/index.html","174f281992324fafc267b94e54b6802f"],["/2024/06/22/biibili-zhilian/index.html","f4c5fae09fc6a79049ec3229fbcc1eb1"],["/2024/06/23/sqyy/index.html","e575ed851d407de0082946d5a476a46a"],["/2024/06/24/win-chachong/index.html","9c6494e36f8957ac799043879eb84a82"],["/2024/07/03/dyd/index.html","0304ac76b5f1dc86724705da58d76f71"],["/2024/07/03/geospy/index.html","89b86e46b19a17a1db8e009045c97d10"],["/2024/07/16/TuneFree/index.html","e347ffdb060075754f6e9c8b723cb28d"],["/2024/07/16/pdf-repalr/index.html","5aa39a2a87e8eafd64700e08017e194a"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","9803cfe7d660e146a4065c8e591cf616"],["/2024/07/23/an-yuyin/index.html","0e408ee0d1e4def2f3552492bc81802a"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","bfc556adce5c5b55643d62236de8bb2b"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","761c89d2f68f0343e5b3935aa14aa09b"],["/2024/07/24/win11-win10/index.html","4272c0690c3b1aefa995f7e284302be9"],["/2024/08/03/wu-muose/index.html","5bec2e41ff9cb264337d7668ad943369"],["/2024/08/04/ab/index.html","a6f66b4372052740a1c1d206231fd14e"],["/2024/08/25/mp3tag/index.html","55941ade600b35bb09051ddf016f5e6a"],["/2024/08/31/cf-words/index.html","0b1f156148395e085c10c0fbf98c761c"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b51ceaf6fa884617a2f1a8398b2024a0"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","a4219fef6a4856b64f6e33a26631b5c3"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","182a3ae0523fb78025546a414a57b070"],["/2024/09/30/123-liuliang/index.html","f906b7c575100e95500414a7d4b801f7"],["/2024/10/01/app-allmusic/index.html","51a978a562a6c43e0c44e07cd0196ab6"],["/2024/10/01/win-musicfree/index.html","06d2e131909b1d167bc1d51176073086"],["/404.html","226f3e2b3b155515f9c11e13c64b9feb"],["/about/index.html","f9ea898f59446efc5a201adca86fdb0e"],["/archives/2024/01/index.html","7c24ed48eb05fe8ccf13d5449f386d3c"],["/archives/2024/02/index.html","61ae31e0f2bceb542c3fa19a4863bece"],["/archives/2024/03/index.html","43ca214abff16027dbc50fb6616747ff"],["/archives/2024/04/index.html","dbf06b06ed726474d8ccbdb5469e9ea5"],["/archives/2024/05/index.html","51104a22bdb8c7d7ebeb8e948e3f8703"],["/archives/2024/06/index.html","aa20eed8222b9b1395c083c19486d36d"],["/archives/2024/07/index.html","fcd2f6d57fcf7bb01aa32394e9407feb"],["/archives/2024/08/index.html","4766cc4cf2921022f16e54e903a728cc"],["/archives/2024/09/index.html","a800101d806e6345b64ad4945bfa7f7e"],["/archives/2024/10/index.html","7d9cd48a7ee661848a23081f61bfd83c"],["/archives/2024/index.html","72c891c88e18b9defc4dd49fba54fc53"],["/archives/2024/page/2/index.html","a92506d1db57325cdbd37ef441960c42"],["/archives/2024/page/3/index.html","6562644d4cd283d189e160df2010f389"],["/archives/2024/page/4/index.html","10a89e4ff59b1e262a610b894d6474a5"],["/archives/2024/page/5/index.html","e843356ee51f7d166245cdf7b5040108"],["/archives/index.html","d05edc89835a5e74d93a766c72bb4164"],["/archives/page/2/index.html","9ea7445afd46e8fa21bbfde10f4b1ea5"],["/archives/page/3/index.html","97f1a70436fa5043d2782121265f4a90"],["/archives/page/4/index.html","2965a11594167c6418ff31f7bdaeff78"],["/archives/page/5/index.html","9c534b1242bcbb3697f227484e397ec1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","d23dca31aca3ec9e7e9d6251d67215f5"],["/categories/index.html","3d316d8a4a3ee34e757c69e980e68bee"],["/categories/学习资料/index.html","a23d615eccf2d0037b774d6afff9b9f5"],["/categories/安卓应用/index.html","e9d2d20df20e9cc6662cd9c4538912c5"],["/categories/实用推荐/index.html","5a476557c2b782fe2f22ac346654dc9a"],["/categories/实用软件/index.html","b7ba80a535639c62d083a8bbb5c01622"],["/categories/心情随笔/index.html","498a09c6598375e63ffb67b9b73c9b25"],["/categories/技术分享/index.html","2cf5655a1dd76a8cd96bd43ec3c3eecf"],["/categories/探究所以/index.html","7426f2c243d69bfd4897b3caf76a1632"],["/categories/硬核科技/index.html","1780f1c9fbe4359c2e9703d6f2e44405"],["/categories/硬核科技/page/2/index.html","eaf60f22714b9f659eb29090d75b84bf"],["/categories/编程语言/index.html","378902590f8e7fc986b28e2290fde13b"],["/categories/网站建站/index.html","bd3f5b6fac87d59d0dfd16e05b3d03bb"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0008b35745b3330a767e714139f1f792"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","915f089c881c36c2b9e42bf8c049efb7"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","6abc2d801487ac773fad2c4049f37b3f"],["/message/index.html","3034414b83e141683ca6d90e9e3ad86d"],["/moments/index.html","d4a3d1016de8e7e2223fef49c3a551d1"],["/music/index.html","bbb20b59353d02f50660da1379c1889d"],["/page/2/index.html","e49230407381520c28d7b9be344e0ce5"],["/page/3/index.html","091476069d5a24ead4ea9f8f348e2fac"],["/page/4/index.html","98723545fe58eb2dfa7b0cdc759762f2"],["/page/5/index.html","827623fd8835a473f2fbf47e07da0739"],["/recentcomments/index.html","b6e9d68cdb58d3861b74d9e4a24235ee"],["/service-worker.js","fc9c0959d0bd0a254feeb2bf5177f02b"],["/sw-register.js","d431102232ae840b8ac2c737692f2d80"],["/tags/123网盘/index.html","ca60b4437570d0a7d6e43cd9cac07365"],["/tags/C/index.html","d89c5ad1cc09fd1f4e6bc8d3da64e8cc"],["/tags/ChatGPT/index.html","8c77fe14df80f86c651be938f2c4cd08"],["/tags/Cloudflare/index.html","446e9279e185edeb202b623f4574b09f"],["/tags/Markdown/index.html","083ac5f7d47f0a0ddb65e6f896c07e7e"],["/tags/Openai/index.html","8ff0f8b7fada36ea449392e601bfb9a1"],["/tags/app/index.html","302dffcedb7b8a76b94823c636909f6e"],["/tags/hexo/index.html","e4448046ef1e2e3be138d868c8fb82af"],["/tags/index.html","18ce8f2d700f4fca428e7f2d999f6660"],["/tags/信息修改/index.html","5fba811a6ebfffd773b14a20b7560738"],["/tags/写作/index.html","4b78048908b44ed4fcf625189fe1d0a9"],["/tags/分享/index.html","ffe7a3efb7f553203089ff75f7ec834d"],["/tags/吾爱破解/index.html","238b900cd4831cf9ec5acfe64d589bae"],["/tags/安卓应用/index.html","fbcecf5a01aae451fbcb7556f3a57441"],["/tags/安卓应用/page/2/index.html","a8bb7af01123fa159f7e01fe5533b26d"],["/tags/安卓软件/index.html","29a7f1736f122923d93cfa0d835bafc1"],["/tags/实用/index.html","67d321956160c971a553353141b47aa5"],["/tags/实用推荐/index.html","0ab61105ddf624ac572d84ccd370139d"],["/tags/实用推荐/page/2/index.html","776791d5c3a88a92a376c63fe272b97f"],["/tags/工具/index.html","dd4a0093e65681719308ec65cc8de7c1"],["/tags/工具/page/2/index.html","30ce769183eed5e5ff9a7080c53f2628"],["/tags/广告/index.html","208ba6c16fd4bbb0ca131abdd0193e30"],["/tags/建站/index.html","28230d27dc40fd6c43dee938839a917b"],["/tags/思考/index.html","299f99e36e58a08b5b805934217d4409"],["/tags/技术分享/index.html","b30bfcde5712075e2c3aff090c8ff68b"],["/tags/指令/index.html","0715a9245748ece8b404bd6e43342008"],["/tags/探究所以/index.html","e6dc9d11ab8c027bf7b28fd59c4a277f"],["/tags/推荐/index.html","0d743f3e374227da40d392df7800982f"],["/tags/文字语音/index.html","75cf6c20c0f8fa818a3f3e5d370427a2"],["/tags/班级/index.html","9265d6015a3ba955f0a8bba36aa8b369"],["/tags/电脑软件/index.html","955ebc011492ccd8f324218da9ed66b4"],["/tags/电脑软件/page/2/index.html","7dca83b08b5e4ea5accb148b0d0c57cb"],["/tags/百度网盘/index.html","6f11f3f7eba89794612f7d6f65abf785"],["/tags/科幻科普/index.html","745009288a546d7d781e07e7dc32036f"],["/tags/精选网站/index.html","8be7033a99528e33529c73b7093cee04"],["/tags/系统优化/index.html","29fa7363f2bcdd8aad32ba53955f0eb8"],["/tags/编程语言/index.html","2a98302d4d517f7c11a92605be3411f8"],["/tags/网站建站/index.html","cd2faa19456ac7189f6a40eb43b0a61d"],["/tags/视频/index.html","4f0f6cf982de91722f0d978d2c00a3fb"],["/tags/计算机/index.html","2e00db0e81a68684da79fb37b3338367"],["/tags/记录/index.html","5230b1ef20469f0804cb7bef722471f0"],["/tags/部署/index.html","6644ee8b4cd9f28182f37ea614169ff5"],["/tags/音乐/index.html","908eef3357219e59372e7efc3e55463b"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
