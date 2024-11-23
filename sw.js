/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","5681a552f4c6da197aa96d1d53e3370c"],["/2024/01/22/Markdown/index.html","746d232a43cb35452b50bada40c55942"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","3f636b148240deedc5b38132d9475e26"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","4706c9a99cf4ea794e1b3affff85c7b4"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","dae6215c50d7e7a64378f9accb221213"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","4271c8e6f3b38814f88a75ce7ba48092"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","1ee0f865ed14492e8f3b35722c0985c2"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","74e2c0b75f3391e767f6ebb73867fea3"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","7d2d70b50b7901e690730b18ac167705"],["/2024/04/10/C-saolei/index.html","a095c01ca44b3dade19ac19b032e1676"],["/2024/04/10/free-yuming/index.html","8d449b23b3f0b753088845b0052e1751"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","31e9aff5686d2fad5061545044eecd18"],["/2024/04/21/kw/index.html","156caf7ec39dc29856b7b44b0de71d9a"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","a76bc55e5c534e36d80cf1969c379d9c"],["/2024/05/12/music_download/index.html","a020b47447e5978bb28cd70f2ae75ac4"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a82c032347d31961960b3ec412224cbe"],["/2024/05/25/Vercel-Typecho/index.html","8aac50a86772ddf64c777d22b6f711c4"],["/2024/06/02/website-all/index.html","13001bc5c8bd7545f5ba79de88ffd764"],["/2024/06/17/tools-box/index.html","dbdd1afe6fced23465246295a1b75b5a"],["/2024/06/22/biibili-zhilian/index.html","230109ac1b21e5d942896d83e0927c8f"],["/2024/06/23/sqyy/index.html","697371a1bd06218ab9b62e29e4637b98"],["/2024/06/24/win-chachong/index.html","40444ed0a5e2f593661f4b9bfff07b96"],["/2024/07/03/dyd/index.html","0289246b70c081420b8b540d359f1bd6"],["/2024/07/03/geospy/index.html","107782df0d4d19c72c6125825d3813ec"],["/2024/07/16/TuneFree/index.html","3a61f0c4b0c1445c9a7aca73cc07c0d7"],["/2024/07/16/pdf-repalr/index.html","dd3c404d7fcb65b6fe8d278e967dd18c"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","9bcd60e9680009146f4353b005b3e24f"],["/2024/07/23/an-yuyin/index.html","5976ecae70e803539b3790ee4cca0771"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","eb0053270fb09fcdbd645ccb3a4482c1"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","97ee8375c6f7053a9c09f178754aeac3"],["/2024/07/24/win11-win10/index.html","e737101821893b8d8552c18ea26be71c"],["/2024/08/03/wu-muose/index.html","29ff77e8c09d0e2e90590930251df1ba"],["/2024/08/04/ab/index.html","988fd8ba3f91f42db71b3e146bf03192"],["/2024/08/25/mp3tag/index.html","c99e6ec1bccf007e64612dc11e016ce4"],["/2024/08/31/cf-words/index.html","19478160d41944f1a68c607540c85fea"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b6d13938312b7189b516a76d50020a44"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","1a3788a61fe5939ab319efd6403ee077"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","8a789f44a16c8b149cd3ab9ee794cc41"],["/2024/09/30/123-liuliang/index.html","a6b5fec7e916f0bde2b73bc3a44746be"],["/2024/10/01/app-allmusic/index.html","f195849c6e46d5f075aa406b7ae4f458"],["/2024/10/01/win-musicfree/index.html","4e5c8eb64db1fc5005496cabbed4dee0"],["/2024/10/02/fire-xinli/index.html","1ecc1d3295262c80fb6a8eb0f8dc8902"],["/2024/10/02/win-wyydaili/index.html","110cea7f5b2b74b81dc2879774d85558"],["/2024/10/14/qq-histort/index.html","c73fc202a48afb8e372f3690cb0417bf"],["/2024/10/26/suijip/index.html","3f58bb5b1d7925b297e4e3dc023da545"],["/2024/10/27/ai-tlp/index.html","ce564762fcaa9e741fa79533ebccc667"],["/2024/10/27/cloudflare-cfff/index.html","aecba613a096b15cbeff06c131e42e6b"],["/2024/10/27/tvbox/index.html","71b34e59fd9257c42f8e83ac921e50bc"],["/2024/11/17/office-ltsc/index.html","3f4186740ca9d6c240a34d263a85f67b"],["/404.html","ac3282321dca6ff79faeb5d4a45580f6"],["/about/index.html","c22041c2b2c0a47ff22ee2586376172d"],["/archives/2024/01/index.html","4b02b40ae17c6fb8c886f27e66429cf3"],["/archives/2024/02/index.html","a6a420cdee9f6898a5ad20351c665038"],["/archives/2024/03/index.html","784def1e7ad3860667b1eef9ecb911a3"],["/archives/2024/04/index.html","bd7bd6a2aad7a4e8b6eedda1b6f667a4"],["/archives/2024/05/index.html","bfeded5124e22c6d23d873cd68a4b803"],["/archives/2024/06/index.html","906fc11d1af4d1af54aec6f32a294243"],["/archives/2024/07/index.html","a01f957526cd12535fd37c54aaa244ab"],["/archives/2024/08/index.html","4b81014fec7aa486f3567e141c3f7692"],["/archives/2024/09/index.html","94bbb12d1ce0ba501028a7d39053c199"],["/archives/2024/10/index.html","4e9f0587dc01c4c4d215450a6c0b7795"],["/archives/2024/11/index.html","c384ffee2c3f7f60d6d245b1dee5f693"],["/archives/2024/index.html","00fec30f8283243af2ecb9485d698d99"],["/archives/2024/page/2/index.html","c5b2c90c6f914b366e397fca17a884c2"],["/archives/2024/page/3/index.html","19dea55f42a96cb316290e3c5d10ecde"],["/archives/2024/page/4/index.html","59d300e403b9deec401194ecf49e60be"],["/archives/2024/page/5/index.html","b727f4db2acba78f20866f4c342ca284"],["/archives/index.html","b53fa3191299260322374c37b68ee1ba"],["/archives/page/2/index.html","7a4e01e15fd93c95999cd005f7886b13"],["/archives/page/3/index.html","693bc037c6138841924aecd55463ca43"],["/archives/page/4/index.html","4d6cc5b03e79f26fc04e247ef7caa1aa"],["/archives/page/5/index.html","c531ef22eff22ade04e483c63123a2d8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","7cfb2681f81d58dfbb75495d3096e199"],["/categories/index.html","1a571854842cfe302b3cf75939c3ed47"],["/categories/学习资料/index.html","f2dddb6a6efcc963670ae8f7e054c523"],["/categories/安卓应用/index.html","7bba32dfa651f32bf94a36472d96d540"],["/categories/实用技巧/index.html","157f8faf40a73b25ee71826ffd2c9b99"],["/categories/实用推荐/index.html","ede4470ac830a41dc569d9b8e938ad30"],["/categories/实用软件/index.html","61ee529eb70121bc324f8fadd8ee00c6"],["/categories/实际生活/index.html","a3a6c5176ddba9e01371215b3364c225"],["/categories/影视资源/index.html","36218ff69cac6e280c6e10689f25a5a5"],["/categories/心情随笔/index.html","434fe24f63178ddc910f47f20e7ae965"],["/categories/心理实验/index.html","d19296d9ffa1c1e07623249ab2f1aef1"],["/categories/技术分享/index.html","07d778900d342df53c9f32cd9b47fd3f"],["/categories/探究所以/index.html","01f521d8792086a7cd6f50942fca4ac3"],["/categories/硬核科技/index.html","de0d429ea1adf9847b9b35174c4ba6f5"],["/categories/硬核科技/page/2/index.html","6c5a4fbf05747c5a0445165a0a7f82cf"],["/categories/编程语言/index.html","25b939946fe5ef83de81b0b8f5b9b5fe"],["/categories/网站建站/index.html","6e095d9f89d99a2027b17fee0947c405"],["/cookies/index.html","b523f24fc06b7fd50e084dbfbfdbf295"],["/copyright/index.html","12656ce69154cb27d3fe6188d5f73295"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","f544b56c31de1b56a47ac66afc6c3541"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8f5dc068dcda5744c0b557fdb0b71597"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","603bb1871f6fdcc038c71f06cb22b59f"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","d5f7b8e32499807f556d804aecab4789"],["/message/index.html","ae985e63487e964821edbff69282417a"],["/moments/index.html","d7822cdfaa98f57678d895523c5db96d"],["/music/index.html","10d3ad4f9b1f8fd798560924047a8e67"],["/page/2/index.html","bd1d2fd0d07f2164a87e13a0266eae09"],["/page/3/index.html","cc24f4f257b5071bee8f1cfa2b38065b"],["/page/4/index.html","cd9b71d101f9d9c46720fc9ee2480a52"],["/page/5/index.html","c4874996745716c99311ae90eac4dabc"],["/privacy/index.html","ebff416ec1384a48983ec15a4ec46d94"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","267b7580890292b61473fe8b908c1223"],["/service-worker.js","05d6240fbcf57852618dea02b44910c6"],["/sw-register.js","acf5347a783bb520bfe164bc9f9fe966"],["/tags/123网盘/index.html","076487c802bd1f4e1f908edfe4a2c512"],["/tags/C/index.html","8078ce85c90bf0242cade6c10fd9a9f1"],["/tags/ChatGPT/index.html","820b69b542bb1154cc363ddd3b757b0d"],["/tags/Cloudflare/index.html","a22ba2411b3b44cb2f971df5c15f8eff"],["/tags/Markdown/index.html","636d893f09b1cc9863e69c44705e1ae0"],["/tags/Openai/index.html","5de06fa43d43c6f76f4947c792860758"],["/tags/QQ空间/index.html","2ecbb32ab1d7fc3e3533f3ae6e741641"],["/tags/VPN/index.html","69965fdfbf4a02998952796e3aa5d8d0"],["/tags/app/index.html","4569cc544ca9d3dca453f1bb72ee1235"],["/tags/hexo/index.html","00a2fb7aa2fbd34e3a0f0d2d3f2fdc05"],["/tags/index.html","6de417b4285a77046214ec4ed2abfc39"],["/tags/works/index.html","4188a458d7d74116fd51e8c9b6432cc9"],["/tags/信息修改/index.html","d7e37400e07575469c6a17cd62984165"],["/tags/写作/index.html","d8d42d4eb820b4ceb1559b35d00a3ea9"],["/tags/分享/index.html","8d84b27b02a026f7a94c7302b0146f33"],["/tags/吾爱破解/index.html","f3d974f2d3351ecd4f6353a716f6e409"],["/tags/塔罗牌/index.html","d23d46110019f02d7d59f67075b7c715"],["/tags/壁纸/index.html","621a84dc123ebb5b651ceee97154e20f"],["/tags/安卓应用/index.html","d536910466908537c653b70a64e08123"],["/tags/安卓应用/page/2/index.html","4fa6f6011b07c410640311deb115365c"],["/tags/安卓软件/index.html","0ffcffe6927059a300c6319bb517d1e3"],["/tags/实用/index.html","1e6b2a01ed31151dc2f8536188e55a3e"],["/tags/实用推荐/index.html","d5fb830d188fdf34d0a6698bb42fd8b4"],["/tags/实用推荐/page/2/index.html","000fd70ece71131314fc6c4c9f0d7df0"],["/tags/实验/index.html","29d563425e815f6c0bf7015a325fac3c"],["/tags/工具/index.html","f105d35f29adc4e062d1f386bec0a239"],["/tags/工具/page/2/index.html","ced2c88eebdfb797a2318b2cb302220b"],["/tags/广告/index.html","5ee6de9fa78ce657489dca3c84c8d405"],["/tags/建站/index.html","606610925be808ba1d40fb3fca14b36f"],["/tags/开源/index.html","a16d1b87800d25353e53970a326c85b1"],["/tags/影视/index.html","e8fe4d2b65c40f6aa1c0a9e4ed6103e1"],["/tags/心理/index.html","54968a17e72d081012a4c3d6f2f51a79"],["/tags/思考/index.html","36a0f179f6b2ca0c5fcb94b7aeaf402e"],["/tags/技术分享/index.html","b15ded810d91d5cba8e8ba53819db0d5"],["/tags/指令/index.html","b69cc463823ff7ad86c968919a2c196f"],["/tags/探究所以/index.html","2662f14b4699e5b8688fa1348ae5bf55"],["/tags/推荐/index.html","9452b9007473ebcc358a4ab7c3225a62"],["/tags/文字语音/index.html","c65c446b778f23e484d17f4c0382fa7c"],["/tags/班级/index.html","e12e4862dad8a411202afe78760953eb"],["/tags/电脑软件/index.html","af36214146d906b8c03b3d78fe6d251f"],["/tags/电脑软件/page/2/index.html","66098ff7841ec030a43c0c034ecfa287"],["/tags/百度网盘/index.html","a72a470843929c009df0753e766f28bb"],["/tags/科幻科普/index.html","caa1709692f87a6085a6b7756d3262d8"],["/tags/精选网站/index.html","ec34858178562667f01edcf6faf99363"],["/tags/系统优化/index.html","cc667c9224b677e00efb8e677bc0987d"],["/tags/编程语言/index.html","f69b933fffcf935d8ccc9b84a9554700"],["/tags/网站建站/index.html","1e7c28ef71334aea2451c137e7cea9e1"],["/tags/网页精选/index.html","995e0d4098612beb5fd9e460418d80c1"],["/tags/节点/index.html","846d90e8b8d3f7804f6c3db75ba24531"],["/tags/视频/index.html","f0f8e6e9e1a01dcdfde6468486cf3e71"],["/tags/计算机/index.html","c3aa55c3c5f1dfbeb35589c8cd42fdf3"],["/tags/记录/index.html","1a051df04f13ba2813cd866a92aff989"],["/tags/部署/index.html","63e32ffbd4a6539b0bcf786c7e419914"],["/tags/随机图/index.html","1e08d6362b91ec38b85a7a2f12348a3b"],["/tags/音乐/index.html","2b51d4d0d8d37423a88996bfa918e069"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
