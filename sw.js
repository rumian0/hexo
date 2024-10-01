/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","631cc27ef10f2105e67c5280c3003912"],["/2024/01/22/Markdown/index.html","b04b87ec860c447e254d77f5698156e5"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","c1830dcfe4b82893214eaf66143067bc"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","e50b5cbea06b64f0017c90e88dfafa28"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","2ac22a913243c67f6437707d5bc92008"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","716f768b4dd76dbe7d4df15fcf5e471f"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","cf9127ea1c245a98a7872c4bc0ec459e"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","01a14dfae0c309aaf0fe02762c3adcbc"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","cc18fc318242f5471a8fa77612b25e09"],["/2024/04/10/C-saolei/index.html","543775369b371b77be4f4e5332772638"],["/2024/04/10/free-yuming/index.html","c1c79c1eab3cd46d7b299306395690fe"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d9fc8a7150932ff789836aa0021fe863"],["/2024/04/21/kw/index.html","548691a4998764c50838f6e82b82802f"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","800977883f0fcb519aec67bdf9897de8"],["/2024/05/12/music_download/index.html","fcbe13b7941c7a048aa7cacfb19e7239"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3f733b5e024bcfce7afb25be5cd34e04"],["/2024/05/25/Vercel-Typecho/index.html","07d61c77e8dfd91a08eabd4b3ff5a206"],["/2024/06/02/website-all/index.html","c97c94e398939c9f7362bf813d10dc09"],["/2024/06/17/tools-box/index.html","6cd98e6dfd7965912fcc6373a748f208"],["/2024/06/22/biibili-zhilian/index.html","a3613fcc83c8be7a3a9248eb8a56e99c"],["/2024/06/23/sqyy/index.html","023bd6d227a2b8ddb4ab9863ce133757"],["/2024/06/24/win-chachong/index.html","7e9ec9e5cc32fb87e408679b022df487"],["/2024/07/03/dyd/index.html","38d3d039f5b51302c7558a514fc36c4e"],["/2024/07/03/geospy/index.html","07b7e57ab3dd9617c27baee0194610b1"],["/2024/07/16/TuneFree/index.html","8c1cc6ef4a260c5680dd96de313ab1f2"],["/2024/07/16/pdf-repalr/index.html","6664e9591feced05728c6c5f6b71a9f9"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","00792784a96612a21ef6e89d1df296b3"],["/2024/07/23/an-yuyin/index.html","f5e11674cea2583bfb091822bfc0cea8"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","ca79edbc78e8b4bf516024cdd5b38ec3"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","1c532736343da1861be785f43ec24fbd"],["/2024/07/24/win11-win10/index.html","13c3730735046ab1da1ff8cd974f7268"],["/2024/08/03/wu-muose/index.html","ec65b3f53bca5165f9a378ca87f47a53"],["/2024/08/04/ab/index.html","9a98147129dee7785f90976d74df96e2"],["/2024/08/25/mp3tag/index.html","8b788e97ad9e65dd35c106c06aaa4026"],["/2024/08/31/cf-words/index.html","bd67c4e9078f22d56044f69bfb580349"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","30de864eb9c432eabfc9c6788205fda0"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ad75b55aeee701b548b2226a330efd4e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","dccf396c6dc307aaeda058fe99590693"],["/2024/09/30/123-liuliang/index.html","0d0baca1661b624632bdf8e00f85aef9"],["/2024/10/01/allmusic/index.html","e80eee2abc7c069730d6de602e8a9409"],["/404.html","219a4e4a0016a6b07aa6221b6d62be4e"],["/about/index.html","47da4d12a037e257000f83b264e17dcf"],["/archives/2024/01/index.html","f00a1337a532bd758547f225dcd5ff1c"],["/archives/2024/02/index.html","017029850df07f77228d977c024acbec"],["/archives/2024/03/index.html","d910a619271f730f510e3573c7b751e0"],["/archives/2024/04/index.html","d02a64af405c90aba2dcd671c8634011"],["/archives/2024/05/index.html","43f2e998c40379b68075598a60c73dc0"],["/archives/2024/06/index.html","5c204681135c204fd67e30ac980b87ee"],["/archives/2024/07/index.html","d1be5932f5abf625ffba9ee2069851d6"],["/archives/2024/08/index.html","461e503407b10dad7edb9900de51374b"],["/archives/2024/09/index.html","1507f1eef977f75af263c1fab356d86c"],["/archives/2024/10/index.html","591afa7b76e2170531666df8e3c72f04"],["/archives/2024/index.html","913671036211548294c1af029b24a07a"],["/archives/2024/page/2/index.html","1651dd7c56d155b540220f713b167f3d"],["/archives/2024/page/3/index.html","9e8bc21f56c564574f54b09d6b387e7f"],["/archives/2024/page/4/index.html","98ddd4cc3168f65b1782e5363224d192"],["/archives/index.html","fcefc155e42914082238fd4f4e9bb020"],["/archives/page/2/index.html","e0ec75266691a60c6f8397fe743d1bea"],["/archives/page/3/index.html","94c33142d15f1c818189f5a917319257"],["/archives/page/4/index.html","2147ae02921a05646a6dd3354786a619"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","9c8c664d3807dfde434b41ed9115cae3"],["/categories/index.html","0653949ec357020ed7b838b0f32496df"],["/categories/学习资料/index.html","31431646acb50ecdc7afcfce3890bea1"],["/categories/安卓应用/index.html","5ecc7a932a15490376918f32df5c7424"],["/categories/实用推荐/index.html","cfef0f9668d65e532a93731493e9dc9b"],["/categories/实用软件/index.html","b9d395870c2ab22f32fac05c09c98277"],["/categories/心情随笔/index.html","246cdb3885f8ec9649f3e32de06e044d"],["/categories/技术分享/index.html","f8b915d955f0ff08a56a51c49f711adb"],["/categories/探究所以/index.html","4bbaf9d5d6ecfcb60609787bdb3ea835"],["/categories/硬核科技/index.html","e63c2d876f36ea576171f47418c761e4"],["/categories/硬核科技/page/2/index.html","8fd9c3cc42358a696b50a3b160227ed4"],["/categories/编程语言/index.html","933f164487ad9f8a608e13e655de50e4"],["/categories/网站建站/index.html","649260391f84f788b12df4aadb56818c"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","ee03ac1c0adf97d36d021e9f2c725358"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","f71e80220a0bab87e0a5b011746d707a"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","ae9949cb08545f70c0e7a38d538928ba"],["/message/index.html","1378c0a537c659b58ce28fea97f469ea"],["/moments/index.html","4ddb44310d584a01f98956a3a8ee4e63"],["/music/index.html","e6107559899c94e3ebe7a1f0600a27c3"],["/page/2/index.html","44edcda7336e7e7bb66834e4c2acca48"],["/page/3/index.html","eab7c6f102a1a17d62ebd16648134330"],["/page/4/index.html","eb9241819d3fe2b2ce98fb9b8310e1c3"],["/recentcomments/index.html","25e01cdff13f4387d54c5db74e7797b1"],["/service-worker.js","3f8ed5097765b7aac7a578c395ea3ee1"],["/sw-register.js","be6e84c1fc17af984e8cea9c98c45936"],["/tags/123网盘/index.html","a9c27488828532da86203f80e89af4ee"],["/tags/C/index.html","dc444374881709cb610c13e572b536bf"],["/tags/ChatGPT/index.html","e950161b12cfde3e7c7146c3e3d6d6cb"],["/tags/Cloudflare/index.html","10c9d8ac79dbdc83b74e6880dd1cdf7a"],["/tags/Markdown/index.html","e7c459e90812bbbdfb35e7cac601412d"],["/tags/Openai/index.html","8cf0b1fc7819a24e1cac339ce9bf1a37"],["/tags/app/index.html","5f6eada85c6b0dd1a85127bf5d6ae98c"],["/tags/hexo/index.html","66e5de85a11e7a1f6121df3d0dde4f27"],["/tags/index.html","8a6f326d66a25ede1bdf2972ff7ca35a"],["/tags/信息修改/index.html","d9480d019972729e834316cb5a20ab07"],["/tags/写作/index.html","b0e62fbc481aa96bf4db72900e043fa5"],["/tags/分享/index.html","8ef9d388594b7ae01b3dd527c91ddce8"],["/tags/吾爱破解/index.html","60d89e40273d1195a83192bbb744c646"],["/tags/安卓应用/index.html","263412b24a0fff3fa1244a03ce506ea1"],["/tags/安卓应用/page/2/index.html","10212a61538efee8e0b18d39ae425669"],["/tags/安卓软件/index.html","4ba93f9bc90afb504947e5dca7a63d99"],["/tags/实用/index.html","1a18ca053becc304fe1bab972db2deb0"],["/tags/实用推荐/index.html","ed2d171b2daee7d46700bc62ce1b14fa"],["/tags/实用推荐/page/2/index.html","6d8f10e21f0db9398dffcedcb2e0597e"],["/tags/工具/index.html","ca9344e40751c81190dab33474792c82"],["/tags/工具/page/2/index.html","f6980ededad98dfaae03f2e25788e5b3"],["/tags/工具电脑软件/index.html","f7b2824ac88ac239b330e0a933b04458"],["/tags/广告/index.html","c730ed9dd427d164fd4c5b0efc16ccc6"],["/tags/建站/index.html","566acd3afda4121b22e314bd2359b461"],["/tags/思考/index.html","5bc12bb30f6f9b94e5ed7acff92974eb"],["/tags/技术分享/index.html","3a8f0b0ca94a1ad8bdd4522485d6777f"],["/tags/指令/index.html","066633d0f96a5c6beeb2f5456d0a77a9"],["/tags/探究所以/index.html","811fdc73bbd6c45daf4afbf2a8aed00e"],["/tags/推荐/index.html","e060be86939178acba685da3f51b89a1"],["/tags/文字语音/index.html","5148d5bc9ceb4d07c436081455f8f72f"],["/tags/班级/index.html","f175a68faa2565fcbd594ad015016fbc"],["/tags/电脑软件/index.html","da277c2129dad7e197c019a1b4662050"],["/tags/电脑软件/page/2/index.html","941dd649264e2a625fba893a11cf1532"],["/tags/百度网盘/index.html","e5f07ca7e32a0c61c609ab3c9e38c380"],["/tags/科幻科普/index.html","725be7441718e034062542b85dd23149"],["/tags/精选网站/index.html","891bad4cffb68eaa8a31e6cbf70d651d"],["/tags/系统优化/index.html","9a2afd6b9704fac53f0120c23e4c3c10"],["/tags/编程语言/index.html","e46ed7c7ae5194324808e8645522f28c"],["/tags/网站建站/index.html","d7fae3f5be091a9a90d401035dc810cc"],["/tags/视频/index.html","0a59a5905fd1f24fef808ae957030be1"],["/tags/计算机/index.html","5859ffe2881e15c79cafd006a181e23e"],["/tags/记录/index.html","c0f94781bdaa3d049fecabe9296f7787"],["/tags/部署/index.html","91d6078006b8295424951ecaa9677565"],["/tags/音乐/index.html","008a619d270c8debfa88c2fd76cbf0b6"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
