/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","429adb16dab133d927a455b2c2e7f369"],["/2024/01/22/Markdown/index.html","8b65bb7c03faec32116d854be4220a53"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","a31f865da620eaf52084c5d967bd48ce"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","2717b68386e733102762d6053a34b910"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","9f87374bab9dfa6b6ba8058bdbed5fa2"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","33c93a3681a93274ecda95ae0560e372"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","86a5066b5dabb124f31d00cbf29092cc"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","a75bbaf001885f9ba9d384dd34d6b490"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","bcde7306b5d6e3256107caa915c4c26c"],["/2024/04/10/C-saolei/index.html","6db9e97a7a1efa4f68e31e43a5b9c579"],["/2024/04/10/free-yuming/index.html","72defd8aba61c4b0b22ef931c3798d70"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","2d8c02e5221192524d2287ece0793198"],["/2024/04/21/kw/index.html","2a33fd462ffc91fb780cd414704b8366"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","22cf23ca08b7d7326636c99307d0a1e3"],["/2024/05/12/music_download/index.html","b79b4a580c90abbf57ff55bcf386fb1f"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3976c886aa1e69b0f45004ca2e29fa62"],["/2024/05/25/Vercel-Typecho/index.html","402bf2ed6af9cd840b5892d7535be7a1"],["/2024/06/02/website-all/index.html","5ed1104ea43a884ae6a0d3c3f1665c58"],["/2024/06/17/tools-box/index.html","5ca1d9c6c615e2c6fab30d5136a3c7c8"],["/2024/06/22/biibili-zhilian/index.html","bd6132fa774afe9587ea00b1b3595109"],["/2024/06/23/sqyy/index.html","55e2535304984fe9b9904a2793a1a6bc"],["/2024/06/24/win-chachong/index.html","845b3fed022530adaa2c4885cd6e0e47"],["/2024/07/03/dyd/index.html","e4a6c601dfb9b613a08daf926e928c43"],["/2024/07/03/geospy/index.html","22bbedd3df9bc974c4d40df48bd6bb27"],["/2024/07/16/TuneFree/index.html","84ca6466fb479319a688f30722f8807e"],["/2024/07/16/pdf-repalr/index.html","94fc554576b25874536e7bc9b097adc2"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","3a7057557866f7f6aedea9da5a6e728a"],["/2024/07/23/an-yuyin/index.html","5f6a545520ab3fb094f4c6a660717446"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","3a25b3e11ca690c1aea211bd049c97a4"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","ed5ab7a97c7dde1de09b1c5ef5b5464c"],["/2024/07/24/win11-win10/index.html","8104f3772965ff9ec11a4f6ccf9216d2"],["/2024/08/03/wu-muose/index.html","c7745512163c03bb5e2bdeeeaba23892"],["/2024/08/04/ab/index.html","11091d68c64d605de40363332037f364"],["/2024/08/25/mp3tag/index.html","c13edb7e0b75bb2a27aa14b24e2d9025"],["/2024/08/31/cf-words/index.html","b283d5f13b923edf4df11d6e37a944aa"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","d27ba557302c787344135e0f6b5e093a"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","379fbdc0040a5a177a2c11b538c89aea"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","04b18778428d3063282d717e930831bf"],["/2024/09/30/123-liuliang/index.html","4ef93a4e62f4a01bde8c976669e07dd0"],["/2024/10/01/app-allmusic/index.html","3c257175a3a0c38b402d668e9de9a742"],["/2024/10/01/win-musicfree/index.html","149c3cc7eda30f94e851350308257998"],["/2024/10/02/fire-xinli/index.html","7e5feef97bf105362b276e872c6ba457"],["/2024/10/02/win-wyydaili/index.html","fcab84a2ccbcbe84fc8237766f10bcfb"],["/2024/10/14/qq-histort/index.html","005f7b253d9e155e7cf28c8cfa6f2876"],["/2024/10/26/suijip/index.html","87141f570112a4747ab4e07df2865731"],["/2024/10/27/ai-tlp/index.html","e9de77b47dd00b13ee3ff703654014f3"],["/2024/10/27/cloudflare-cfff/index.html","245a80b3bef4ffde2351821589f34f56"],["/2024/10/27/tvbox/index.html","f0e64cc160f83abda10451ba4c9a0205"],["/2024/11/20/wyy--2/index.html","4bd1860fd2c5e2469f4b948cff711bf9"],["/2024/11/23/fjyangcheng/index.html","8c8c5492dff8b31c011356e359ba9109"],["/2024/11/23/office-ltsc/index.html","0aa77e6f16a634b84dd15964510a7978"],["/2024/12/01/aitiaosuo/index.html","3d30318a2d6b341b8c4a259615c0d525"],["/2024/12/01/yjx-study/index.html","294ac5c1059b5fb73f867f002a3ac6ed"],["/404.html","3223c106361a3aae664d8843f8b6b9ba"],["/about/index.html","6ed4a997fb8be501b4a27a87bfc3a789"],["/archives/2024/01/index.html","5132b136c4722e8288f387ab3bd08ff3"],["/archives/2024/02/index.html","7e85f8a5d59a9445da3a4b5d6fccbf74"],["/archives/2024/03/index.html","02b4d41a58610ecf9fc3e3fc6622c71c"],["/archives/2024/04/index.html","545d8b534c88299c3aba468c44911f3b"],["/archives/2024/05/index.html","264039d67aff02dbb30da8bc71301a09"],["/archives/2024/06/index.html","bd921a4ab4a883914a36e6332847e0d8"],["/archives/2024/07/index.html","777d264d36021735c363dfdecf5e6774"],["/archives/2024/08/index.html","ab271a6d3912233f37112fbd72fd1205"],["/archives/2024/09/index.html","4582ba285f7ee9bc0a72abc050f3a162"],["/archives/2024/10/index.html","4ef4b291b3a1fc7fe9280365486d4d0a"],["/archives/2024/11/index.html","9efa85145d0e74e58f3b25a4584dcdd2"],["/archives/2024/12/index.html","1aec62b0f85878fd841345c20cad9a06"],["/archives/2024/index.html","7bb1c226c5ae64187b89af57fb4c4c85"],["/archives/2024/page/2/index.html","82bd6d1a454decc2c0a3c92402178de2"],["/archives/2024/page/3/index.html","36a9971a774c0c950d15f441fcf6292e"],["/archives/2024/page/4/index.html","8c2cd288474c84ed24a71a8d1819c6b3"],["/archives/2024/page/5/index.html","db0673069c77484fc7d08f1bbe5974f4"],["/archives/2024/page/6/index.html","a80a735c81fcaa4b47e8f5d43c4993d7"],["/archives/index.html","60abf9c1c65f96c53dfa0e9ed27e0f7e"],["/archives/page/2/index.html","51cae2a5e5df72c9a11bf8c10d8804e7"],["/archives/page/3/index.html","f8039ebadc1e30f6311c1ff3210f0d43"],["/archives/page/4/index.html","95ee3cf6cc0b8fba9fcba1616d6ed160"],["/archives/page/5/index.html","42a95b60bc71dd2406d329b04c9dcb88"],["/archives/page/6/index.html","200880a18226f8d845dd7888930a702a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","dcf43a94c4496ec22755a2b18bf63677"],["/categories/index.html","4401c75789fdbeaefedfbad9e89fbbf4"],["/categories/学习资料/index.html","1eeaa64cc24bbb1e0698284335a2223a"],["/categories/安卓应用/index.html","712a87000ee424c200afd7e8da089e63"],["/categories/实用技巧/index.html","86918833253b52afa1fcdaedea363547"],["/categories/实用推荐/index.html","825e95895018f64da4cc41fac7762d95"],["/categories/实用软件/index.html","537085291b0d16e1eb8be55eb0fe9765"],["/categories/实际生活/index.html","be858a8968628bcb07bf4a27f313b7ae"],["/categories/影视资源/index.html","8153e96e1cb736ea7c15643a0bfdcd7c"],["/categories/心情随笔/index.html","01d799785fcd3a8594a0bf24c921d1c0"],["/categories/心理实验/index.html","109a1b27a887c66eadc446e10a9080fa"],["/categories/技术分享/index.html","3885e2b6307d48b8e12689f6adc5e862"],["/categories/技术教学/index.html","fc96ff2a4cb78b947028b05ddff19f5f"],["/categories/探究所以/index.html","29b93ecbdc16e03a26fa7ad305006093"],["/categories/生活方面/index.html","a922c579afc87d056c01fdb370152c84"],["/categories/硬核科技/index.html","1c52692983625f411483247e13ef19db"],["/categories/硬核科技/page/2/index.html","5e85c61b129c066b0b3bf5c376065f16"],["/categories/编程语言/index.html","dc232f185f3f90384e66f4ab8b89d173"],["/categories/网站建站/index.html","174fbfc07cdb1a1a44c24be3e1fc693c"],["/cookies/index.html","a75ddcad03809217c814d843fd66f407"],["/copyright/index.html","15cbd9cf10b36d56a982e94eb2168ac1"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","d29f6187a30e6a9b816e01daefbcec07"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","c738c803618d9e258fae902b64e99e01"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","5d2dd356594f7cb57c5d4e8978ecb45b"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","2091301c28d08cc7bb4972168e0e8916"],["/message/index.html","e04f9dd53e8828489628974790d7259d"],["/moments/index.html","7815b05c5238ed544454988470c8e3a9"],["/music/index.html","67f4be3d364695da9f595b4dfbdb2c51"],["/page/2/index.html","aaf244d9c4ad81e59947f73f4e027559"],["/page/3/index.html","5df1b6473923b7c48e9e15c464970488"],["/page/4/index.html","b05501987c5bed5c16a1d2d69328377c"],["/page/5/index.html","681f9962992c120461b0a069a65e0aea"],["/page/6/index.html","ba77be213afc1c72823083e156d6a6cd"],["/privacy/index.html","ea86d5e8a3f6554a0565d7b5a7e23fd7"],["/recentcomments/index.html","a62bd023caf30220b3bdb97be18f00f5"],["/service-worker.js","091d24915e264d122ef20d7147b5fb0a"],["/sw-register.js","984acc305a690ad773c337565d3d674c"],["/tags/123网盘/index.html","17501b4c7d3971ef0ed76c1672b10b9e"],["/tags/Ai/index.html","65410ea052390b095303f1b7c384528d"],["/tags/C/index.html","344f2649f0bd6d712d248f4e315237f5"],["/tags/ChatGPT/index.html","4b1bae7fb8c831517828e678b30de689"],["/tags/Cloudflare/index.html","625982319ad509bc2aef987332faed7e"],["/tags/Markdown/index.html","dcb67feb9b5a749e66d96a15eb5f2132"],["/tags/Openai/index.html","71f865d06958ef278663ba87b2b0aaf3"],["/tags/QQ空间/index.html","bf7d822b9943c50b0940963d4eb06530"],["/tags/VPN/index.html","000a433ab4c7cf4ec18ed7f76558ac4a"],["/tags/app/index.html","dfbc58bd9a014af871aa305d54943942"],["/tags/hexo/index.html","8cc92286d8f5b9a9189a649b90aaa09d"],["/tags/index.html","ef5ccf0ed1d1d3751fd9591bd673cff2"],["/tags/works/index.html","04c5f658a85dc580bc8c907cf4fbda9e"],["/tags/信息修改/index.html","c33219f4a79f2b8d0d7e9abd93616713"],["/tags/写作/index.html","bfd69b99b82efd0d03cb598fa4e38764"],["/tags/分享/index.html","80c389d98ffc78fa570b65e78b0d933b"],["/tags/吾爱破解/index.html","4a61310a0ec9cc99f8545389a9c3109a"],["/tags/塔罗牌/index.html","60e940ee9fbb6d770a6dca918da903f4"],["/tags/壁纸/index.html","e3cd4b2eedc431595d4d850efae61caf"],["/tags/安卓应用/index.html","8423f0e0c921c297b0b1404c85cfbec6"],["/tags/安卓应用/page/2/index.html","88017e44aa390a65b801d03893e50771"],["/tags/安卓软件/index.html","16a46e30f627f8d0a2ad8124ee0b0979"],["/tags/实用/index.html","a87cde79a60f1aa487ed687ba1e78054"],["/tags/实用推荐/index.html","b5be278c77403f6121dc4e62313278f5"],["/tags/实用推荐/page/2/index.html","c6b931fd437d09619d7bd7647abd79ba"],["/tags/实验/index.html","ad3ee219401398bf91301e75617fd3a9"],["/tags/工具/index.html","654b7ebc596cd23af968ab0f0985f836"],["/tags/工具/page/2/index.html","30fce0a973d6bf7cc6ca1ca234ec547c"],["/tags/广告/index.html","3e314331e9e943329c2a5903c885565a"],["/tags/建站/index.html","85c00bf9d332b85acbaf95cd3026d011"],["/tags/开源/index.html","ea5e252da1090e5b3269937c00106033"],["/tags/影视/index.html","fdbe05911a95d08a719983521f867182"],["/tags/心理/index.html","4d35bb7eab96f8cd19a3f40153fe75e2"],["/tags/思考/index.html","5e53294de500644318649da27389b553"],["/tags/技术分享/index.html","99486aae4f29669b00a712ba36a8f66e"],["/tags/指令/index.html","8a11cad02b4e7a9bf1d743c640257cc9"],["/tags/探究所以/index.html","5ad17e32b0b0e10379fcc43751bbfb80"],["/tags/推荐/index.html","941a4bd44e236a4a1c8d2a7a41278a71"],["/tags/教程/index.html","e470a859f6dc62f79990e33670e973e7"],["/tags/文字语音/index.html","21aca3af82798956a9d1f492008b0739"],["/tags/激活/index.html","014aca3ab0d5b391c3293e78cd789ea7"],["/tags/班级/index.html","0a7dfb844cb4686bc86686c113236685"],["/tags/生活/index.html","818b64c0bae11081c48ec3625dc04e86"],["/tags/电脑软件/index.html","47994c8263348b39391d7309fbc2e69e"],["/tags/电脑软件/page/2/index.html","f25f9abfc70681207878338d427ad4e7"],["/tags/百度网盘/index.html","29874f30c003203ee40260477b0e4b49"],["/tags/科幻科普/index.html","2affd212a89a40790460fcbb70382650"],["/tags/精选网站/index.html","4215d26024f3788b54f7227399b8b1cb"],["/tags/系统优化/index.html","e36890883c78ac6d9b65851f14108e96"],["/tags/编程语言/index.html","e568eec7659af13ff6d869902d643b93"],["/tags/网站建站/index.html","616920199ec739c935f8cb36a560b291"],["/tags/网页精选/index.html","e0cf2d95407c3a542ef5d8e2a1e4d355"],["/tags/脚本/index.html","e18f86bf55d71d4c1231d7012c9262a3"],["/tags/节点/index.html","74aa163ea01a8fb86bec27df7002564d"],["/tags/视频/index.html","c1c698b311856d1a2bf3d2a27aafccbf"],["/tags/计算机/index.html","8b6431dc82e3f866c2de7e40c0eeef12"],["/tags/记录/index.html","8317428980696ae2380b3518fe5801e1"],["/tags/调查/index.html","e774b0bd2b69d1e56c4469cdc3e51b27"],["/tags/部署/index.html","76ee84fe72391a49a701548fef8a4d35"],["/tags/锻炼/index.html","4fae0e612f55c091673b9a25cfb83743"],["/tags/随机图/index.html","31df75d79ca0f17f2ac801f187311630"],["/tags/音乐/index.html","461a568c773fc078fec9f22984ab3037"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
