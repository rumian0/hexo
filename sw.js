/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","bd9840cf2fc056dbc4002c49099e50ad"],["/2024/01/22/Markdown/index.html","fde911d5b68a0a925274af58aa07ddd0"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","9aefa21f699d6afe61ff19beae094760"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","5b3722375a3fba42e11989f421a26943"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","c15481d246ffe22f02c86bf7e380b881"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","d6c7a9ab444afcd8ee4648237de5dd18"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","c5f8f937f632894579e7046aff963cad"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","7f7563766927b60b81d6d61ac51a82ac"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","508ae3afefbeeef15e710434949581f6"],["/2024/04/10/C-saolei/index.html","2073d74c3fedbd19e54fb0d758dc5b9a"],["/2024/04/10/free-yuming/index.html","da627e2e9849e21516b34a728c917ce6"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","a23bb7734a5a4580dd9ec7d90bac1955"],["/2024/04/21/kw/index.html","ae68283327dab49c7edd166be8c43c6c"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","612eb93158d76fc87cf77c0b0d44736d"],["/2024/05/12/music_download/index.html","2d023a4fc5b2fb0f929840e37604421e"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","02768f291046a421f7f63baf6cb824f1"],["/2024/05/25/Vercel-Typecho/index.html","17888f159743786af2059efc57b6fa95"],["/2024/06/02/website-all/index.html","d72878d51ecfc3356b7f23213eeff54d"],["/2024/06/17/tools-box/index.html","0507630717de26757fb9a5a4c51ed5cf"],["/2024/06/22/biibili-zhilian/index.html","f85e7a26a7968fc786b222b8098369a2"],["/2024/06/23/sqyy/index.html","d2717fdce94c115b2206590c0ddfe6f3"],["/2024/06/24/win-chachong/index.html","086bc329a0b3486f4e659816c09f6056"],["/2024/07/03/dyd/index.html","4c594fc5b77c273609574cca35fe50e1"],["/2024/07/03/geospy/index.html","ef9a936f38826af422c1e4b707c7bea3"],["/2024/07/16/TuneFree/index.html","92ed359d168c3768f21cec80a90996a9"],["/2024/07/16/pdf-repalr/index.html","8575cd384b946f78f755520953eaa7e1"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","b0a213c20682ad75a0b12563362df620"],["/2024/07/23/an-yuyin/index.html","c25f624378b7ba116620cc894f600e65"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","dad21e1da6c1115f0d17d1a32b922bfa"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","7379ca060545b1e009c18e3f2ed8d544"],["/2024/07/24/win11-win10/index.html","f24c67b1c80b2c357dc88d28fdf8c5a4"],["/2024/08/03/wu-muose/index.html","c86b904a795779f7db5b5486974e35b9"],["/2024/08/04/ab/index.html","341c84e920081cddb0220a2106770dda"],["/2024/08/25/mp3tag/index.html","d851d0b0ab08eb53da7540bb08d25cfd"],["/2024/08/31/cf-words/index.html","12e10e49ce4137f03338e874f81a3d32"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","02ac56575a5066d267f7a8ea07b14624"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","0f575f059a3f53710d28652696230939"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","cf65303fb811383fcb6a058c0ac198ee"],["/2024/09/30/123-liuliang/index.html","5afc9f9ba1f514775547c9dd85dfe20c"],["/2024/10/01/app-allmusic/index.html","8bf252bf1edabfebfadb7646d9f17a68"],["/2024/10/01/win-musicfree/index.html","04e15b6c9e67c5d61da45115e9bed274"],["/2024/10/02/fire-xinli/index.html","9c7c35f361b2a451ee82cd86052c8747"],["/2024/10/02/win-wyydaili/index.html","0aa111d980ac52dbafd7fe98d6856e87"],["/2024/10/13/qq-histort/index.html","d6ec7a40f32d4d17be64debada9f066c"],["/404.html","da0ca4615e0d7a403c8a14dde6cf7584"],["/about/index.html","27c16d80a3ae633a72c6a5012ef6418c"],["/archives/2024/01/index.html","6e0f8067b38fb8204b5fd8e29e258b94"],["/archives/2024/02/index.html","17f6c4610f0fe444ed699b2022a1801a"],["/archives/2024/03/index.html","4a5c9609f30c85b19604569d1259bd35"],["/archives/2024/04/index.html","99efb03ad713b7fce9c1dcc8b3a11cae"],["/archives/2024/05/index.html","3633ef617d12fe4270ea1079cbf0b433"],["/archives/2024/06/index.html","d11bf7450a27413bfdee3d13ceff13c7"],["/archives/2024/07/index.html","2c8cbbaf5d9e5cd53d95dd5488382ca5"],["/archives/2024/08/index.html","6f81dd7f7719f1b86698f50896552eb7"],["/archives/2024/09/index.html","873ddf39a7be25b3c55fe945d7ad1d8c"],["/archives/2024/10/index.html","545bebceb7f96d2c76194618d9c9d8f2"],["/archives/2024/index.html","bfb583b9c298980c002b763395a22c33"],["/archives/2024/page/2/index.html","5fb7c47d4a0595b567baa813bf2051c3"],["/archives/2024/page/3/index.html","2533d3d5b5752892642bb780e42243be"],["/archives/2024/page/4/index.html","58a3d535f52d7bbdb9a6736abdeca3bd"],["/archives/2024/page/5/index.html","d7793dd16504538caca0fb39006923f1"],["/archives/index.html","73ca4b42a3d96541cc2c04c796662247"],["/archives/page/2/index.html","6e1c465bb07782a093a2d09f4d5195ec"],["/archives/page/3/index.html","22de69e068f2d269b568c473831a3d1f"],["/archives/page/4/index.html","260b36cd1870bda9e4bc2e2fbb34287f"],["/archives/page/5/index.html","277125a1446a7ebce2e4bcc1dbce6ba7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a9f3f47caec4562faac09b8834e88429"],["/categories/index.html","95367efdcb831b0ed2f77bbf963e8ed1"],["/categories/学习资料/index.html","48613c0b8eb56b082e6ae06e3d961739"],["/categories/安卓应用/index.html","854392ea2726fca1fc44fb397249ecb3"],["/categories/实用推荐/index.html","d65943d2ac96319bbd9f7a192c920dc9"],["/categories/实用软件/index.html","3098e08b68b6b935c9bbb2f5c22b19ac"],["/categories/实际生活/index.html","4907352ff251e3b3fe1da7d5dab5239f"],["/categories/心情随笔/index.html","a4ac06ec0a861622c4f31d759e602b40"],["/categories/心理实验/index.html","f753950d4ff35d2bc299f946d90fd6c2"],["/categories/技术分享/index.html","92c75551ee942d1ebb3ec5f5ddcbaa83"],["/categories/探究所以/index.html","c85646ea97fdb931e367ad9e22c40750"],["/categories/硬核科技/index.html","8a2ebc48db53e6c7bf450c9106c9da03"],["/categories/硬核科技/page/2/index.html","f1c8fc0675d2a6d30a514f3f7a22631e"],["/categories/编程语言/index.html","9d5c79b3a094f3e8d018b847e4755c4f"],["/categories/网站建站/index.html","9395406ba7ff5cdc3e58ac4eefc16d04"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0fed22fa7e2bde735d7a478f3fda86a1"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","9c999b1190441483131a0971f7b43294"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","132ecd3ce66c235808ee59907fde427b"],["/message/index.html","691198ccf37b1732be70e0b7133999ea"],["/moments/index.html","e4a5c817496eddbd2e6861b12ab713cb"],["/music/index.html","f28e3084cb2a637b198fb6853ba74223"],["/page/2/index.html","a271da376edb9fc109de6f37b221c793"],["/page/3/index.html","479e645f9825d455280830843ff3803a"],["/page/4/index.html","3f7f9e1d6fa3de3cb0968fe404b52a3c"],["/page/5/index.html","6cf83a87c67ee703802f98a37becd996"],["/recentcomments/index.html","e562349e02bdf5e596008585e68add51"],["/service-worker.js","55e14fa1a49ea2a759bfd5806b7ba678"],["/sw-register.js","80a996dc39dc4fcfdca5df6a097cd30a"],["/tags/123网盘/index.html","659fcd37435759d7330ffa0f0421acd8"],["/tags/C/index.html","2617e6531985e23bedf50f4b9b881950"],["/tags/ChatGPT/index.html","05deb81134b84b08b60f700265fceb53"],["/tags/Cloudflare/index.html","dcd857a235e5f78f94f3f243a9f88261"],["/tags/Markdown/index.html","3982b4a57e35b6c15844f4e48f3b6d9b"],["/tags/Openai/index.html","eecb48455ed8f70cab031d9bbe1ce0df"],["/tags/QQ空间/index.html","f1cbca8e480fb1e82f6867143229c503"],["/tags/app/index.html","13998bfdf4a31c807be94acfba0f5803"],["/tags/hexo/index.html","c74fe909e788ba75efc367eb71f35d36"],["/tags/index.html","daca7c38b603be802c888c7a66ac70d5"],["/tags/信息修改/index.html","fa369b0bf17459007946383ad1301b3e"],["/tags/写作/index.html","3d34c6a0d698176b4943b321ec7c0ca4"],["/tags/分享/index.html","d7dce9ad14b44f7e43a6b720393c5b1a"],["/tags/吾爱破解/index.html","49a219a73ef4142bf1e8b2f5469a57a7"],["/tags/安卓应用/index.html","3b65db6777d168d063c126d018829855"],["/tags/安卓应用/page/2/index.html","febfc1a56106367adb26683e8c8a6657"],["/tags/安卓软件/index.html","23e4534b1545f1e750df3404edabd291"],["/tags/实用/index.html","122f7fd418f7fc82e54fd95a6b9061f0"],["/tags/实用推荐/index.html","66b37d0c776c371af91369021d996d85"],["/tags/实用推荐/page/2/index.html","b81c06405886ef0ed36ce2c817884116"],["/tags/实验/index.html","027d05c4e5cbcb39c369b1d9be476c04"],["/tags/工具/index.html","069354d706e9085daccd0a022a7c7119"],["/tags/工具/page/2/index.html","e99d8af6fd0a0756505c1faeea0c9453"],["/tags/广告/index.html","af7a9a8769e9cd188f16e8051de801ba"],["/tags/建站/index.html","abdae7e9066036feb70c513adbf32ece"],["/tags/开源/index.html","b45dd884bb5328a427479dff8483164a"],["/tags/心理/index.html","a13758d2aad30ad17f435aaf85750f11"],["/tags/思考/index.html","a5b01b5eadd70511151eca2a9280e920"],["/tags/技术分享/index.html","bd5db793d5eb18a34246fd878ca227b3"],["/tags/指令/index.html","a90707637a25da6bfe301f6bce0cb178"],["/tags/探究所以/index.html","9d41716337f4b46f14d24c74ef3e3960"],["/tags/推荐/index.html","9eb918da6cbd1df813d4d52c25a0c8ee"],["/tags/文字语音/index.html","29c7deb031ef2bda8b4454c9db4a7eee"],["/tags/班级/index.html","94fde978f4c3d167f571689ee8cf0fc8"],["/tags/电脑软件/index.html","802076ea9df33e69243f6af5e7c46398"],["/tags/电脑软件/page/2/index.html","5e4b05a4331305ae06d4c714d08eb2d0"],["/tags/百度网盘/index.html","b2dee5f0b7897a023e9e5cdbd6a5d255"],["/tags/科幻科普/index.html","5f6eb310627767434b669bd621543dca"],["/tags/精选网站/index.html","5ac7d00d0de99ff4c2f1269e2869c26a"],["/tags/系统优化/index.html","d5410cf71c5950fbbab78432d9eb77ba"],["/tags/编程语言/index.html","1c0c17b2fdf1707db397f03ca3a7ab16"],["/tags/网站建站/index.html","ee69d5108d4a647e9d838ce9ca5fdecb"],["/tags/视频/index.html","93f557147bba4de07a17f991b9f93fdb"],["/tags/计算机/index.html","26cb3e3c7ead182fb8729c35ef848cd7"],["/tags/记录/index.html","9781ebc8c6b008768d9a563c763f6fb0"],["/tags/部署/index.html","4ad09ba5aebd3dd5e26b41a347c8ba95"],["/tags/音乐/index.html","1bcc534184da474e25bae4c30453cfad"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
