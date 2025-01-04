/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","94a4c3613797082e798527ecff22e8c7"],["/2024/01/22/Markdown/index.html","c764c0bef0c5140d08804d75345aac74"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","d5808af7078b0561f8ecc21568a02a9d"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","9ab486bb90b7540974597c2bf2255c7d"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","0e5d162f9c65c79d8fef5ce462429354"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","951121f3f977162045c1c0d8b4ac24ae"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","a7bca2db3bf4eba181c572faf147c648"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","86767225ad2e0f54198fac4e67643df1"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","20ab5f648fea631692950e9b1e2ea74e"],["/2024/04/10/C-saolei/index.html","b0df2b5573095a5c0759c8c8ab4ea658"],["/2024/04/10/free-yuming/index.html","3bdcb90908306920e78675fcc1ed79cb"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","96296d87a38ded4854ce365875230734"],["/2024/04/21/kw/index.html","759796702cdfa813b041557d7d4f71e0"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","84a0a189ffcb66ad1daf98c8b27362bb"],["/2024/05/12/music_download/index.html","020a658c320162134a67bc5efd72cca4"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","259c88d1ad3fce3d0a4b401f3ce8f723"],["/2024/05/25/Vercel-Typecho/index.html","32421e5485e8022ce28bde5860f2589b"],["/2024/06/02/website-all/index.html","f7b74399585b67fe04bd9a31f188121b"],["/2024/06/17/tools-box/index.html","61f071156eda69db20775cd5cc11ecee"],["/2024/06/22/biibili-zhilian/index.html","0b5667afc0f40fe96482e25b824cf4e3"],["/2024/06/23/sqyy/index.html","9ef4330388adcc15dfa8490a54953cca"],["/2024/06/24/win-chachong/index.html","5dec543bf172b8a76d2cf3b63af1255b"],["/2024/07/03/dyd/index.html","d01560ac696fce0a1305eeb8626f83cd"],["/2024/07/03/geospy/index.html","4915b286fd642f51bc541ce65317e4d5"],["/2024/07/16/TuneFree/index.html","bb98a82be7e1287d5b4aee709e7a98ad"],["/2024/07/16/pdf-repalr/index.html","1e20deb1c96363af51260511b9221f45"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","5823583fe888f6e94c8679915a15a210"],["/2024/07/23/an-yuyin/index.html","da11dce7da0a1e0b4de472ac73a70163"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","9e597f50d289103a2bc8c486685cf076"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","fed4e35dc5c337c1cc9d02d5bbbf0e00"],["/2024/07/24/win11-win10/index.html","7a0f0c05ce47e1d84ef811b8e0772b1f"],["/2024/08/03/wu-muose/index.html","ea4000502b4a3638e96bd830ab913586"],["/2024/08/04/ab/index.html","54a06f71d4b71a626d7223b070068195"],["/2024/08/25/mp3tag/index.html","19b373c66d4b1d4639eb4527825d9dd5"],["/2024/08/31/cf-words/index.html","2d69020dcaa72be15f671a36446929e0"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","6d63c06d225f7f1fad24777f419c26f8"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","2a0a2dac8f2fc31b1319e2b0a983e366"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","724db67b3bafd113f27883e4fed76a71"],["/2024/09/30/123-liuliang/index.html","36c3191c07ddc1044feecf388224f864"],["/2024/10/01/app-allmusic/index.html","58987c05732fe5cb5e0afec2afac1830"],["/2024/10/01/win-musicfree/index.html","a8d2db0bce05ea9531af02f28352d955"],["/2024/10/02/fire-xinli/index.html","eb1199578442cd481eceae46c40db93a"],["/2024/10/02/win-wyydaili/index.html","9900987e7c17f4c7c3e54e411b620fa5"],["/2024/10/14/qq-histort/index.html","929ca0565f11e056cff344a0a76eaada"],["/2024/10/26/suijip/index.html","0efc76c2642202a75ba5cdda508b01ec"],["/2024/10/27/ai-tlp/index.html","0cbcb3cef7066d954fbc79e664182547"],["/2024/10/27/tvbox/index.html","dd396285ab466eeb571a61c40ec08e8e"],["/2024/11/20/wyy--2/index.html","0445b359a4ce28bf519a11f03c15e5ec"],["/2024/11/23/fjyangcheng/index.html","799ac3b4ce1f35c385f69e812acf7e5b"],["/2024/11/23/office-ltsc/index.html","fa4bb7b6ed3fafa89ec89c18a2caf59f"],["/2024/12/01/aitiaosuo/index.html","38eddf1922f62c01e6cb1dc576b95d81"],["/2024/12/01/yjx-study/index.html","e2e7ebad085e71b4badff1d8e318d8dd"],["/2024/12/21/riji12-09/index.html","253be9c0a2de8b5fed06f5a5279da464"],["/2024/12/28/obsessive-thinking/index.html","bea38defe3c99d7632af98c87171228b"],["/2024/12/29/yjxxx-essay/index.html","f76cfb6d0173d5202cdedcfea19de619"],["/2025/01/01/happy/index.html","2e01480d87102c3e0198345fc9812f7b"],["/404.html","b8a42ef51e3f62d5af606a3147409fe3"],["/about/index.html","60fc7c3afe00dbfc8e2c6af1a8a92d63"],["/archives/2024/01/index.html","b755fe715125ca054463bd836e3b6f97"],["/archives/2024/02/index.html","e33000861e9358dd2a41c6e756c77686"],["/archives/2024/03/index.html","a3f36a453042fe227201fed59763b8e5"],["/archives/2024/04/index.html","b804d4eeb3b427c013f17121d07e0128"],["/archives/2024/05/index.html","f3558a280df14211bbd9480825680d9f"],["/archives/2024/06/index.html","03a2713ea7230f93d9ca9ddc18b8d45e"],["/archives/2024/07/index.html","8d87ddc5fc1591f524e4330db3bb023c"],["/archives/2024/08/index.html","91821c78f584c5b32fba35b01f8c242d"],["/archives/2024/09/index.html","afdc76ee90e2df0f2caa9b58d4df4612"],["/archives/2024/10/index.html","24d514a8a656231c82afd88ff8a8317e"],["/archives/2024/11/index.html","f25a93e16bac63f089b95f6004fd1c12"],["/archives/2024/12/index.html","0bda8acb36840876ee57971b18382908"],["/archives/2024/index.html","d87a5ff1c6940da186d5d6c7477cbc0e"],["/archives/2024/page/2/index.html","3cc5ede3164eb60cc87f321ae769347a"],["/archives/2024/page/3/index.html","b624eb3d08b87aac5f452e7951612f7d"],["/archives/2024/page/4/index.html","c75d2b71b70915673123c9b66867defb"],["/archives/2024/page/5/index.html","f13b50424ac594a0652d563c20407084"],["/archives/2024/page/6/index.html","ef7f0c13050d5d8f87f16b9a159bbe87"],["/archives/2025/01/index.html","5ab0633d8bd9136687b0ffa05a845956"],["/archives/2025/index.html","6a0498aefc298d2177c33c1dc27647b6"],["/archives/index.html","b3a93432925907bf7053e1babd6b972a"],["/archives/page/2/index.html","edff882354913fc6990041590ef44da2"],["/archives/page/3/index.html","21899f23ee73e52f6f241b527abfb5a1"],["/archives/page/4/index.html","ec721e7c49c3c130d97a2842e55be592"],["/archives/page/5/index.html","32b58fb2c31a8bb1f64cd28f7c41857a"],["/archives/page/6/index.html","d3becb0fd00df7ce8ef50d17325545e2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c20cb4c5e7efb9d64445c5f248eb5ac0"],["/categories/index.html","3058543cc32be38ca23729df3eef7f58"],["/categories/学习资料/index.html","c543d876e6ade35608fbea31c479e2ce"],["/categories/安卓应用/index.html","a9473f92d0c0d44955f1efbdabf7e348"],["/categories/实用技巧/index.html","0a1879442a2616d78b0aec15ed614645"],["/categories/实用推荐/index.html","9e00aa3dd9abc2a4272462264b048cbb"],["/categories/实用软件/index.html","7a0a78129505ceb912bfca8753b6915c"],["/categories/实际生活/index.html","0bff879da400fef31f5e46d45b180d03"],["/categories/影视资源/index.html","9284d440876a49318d56adea18e73ea8"],["/categories/心情随笔/index.html","57b95ae859a4386b4c4800a80d1794ba"],["/categories/心理实验/index.html","c833ef7d9dba3825e2104265e233d925"],["/categories/技术分享/index.html","fc8297a31495148578b0106a9101c5fc"],["/categories/技术教学/index.html","2ca63bff0b1185f00b29074fd9dc24b0"],["/categories/探究所以/index.html","dd0a1fc6f4c5e8f744f27303638bedab"],["/categories/生活方面/index.html","1bd7195a8790f875afd81c507026bddd"],["/categories/硬核科技/index.html","0fcf719b1695688af86ceda13aff63b0"],["/categories/硬核科技/page/2/index.html","4bcc313b8d821dec60833eeae984da13"],["/categories/编程语言/index.html","c3aefb12137c2e5b8fc5bf66e24d1d57"],["/categories/网站建站/index.html","4bbc53c3f5cf443158fdf63c8643b8d5"],["/cookies/index.html","38eb68a47fd8291f35ecbee4d1ab59f0"],["/copyright/index.html","ebaccb5ced0f3796e04908a96dc2aee8"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/fclite.css","1c0194f4261c2b0b94f88252261c1c64"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8f1550886a3c86a38ffcc23225cffc8f"],["/fcircle/index.html","8a807abf7ce4aacaa8a406b00a5a6ceb"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/phone.png","ace8353e0b6333cc9902d31f5543b7e0"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","f3fd235ddee2ac01d95dfdb1d99d3dfc"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/jclite.js","02a8a4fb83edf88399efa9729a4db74e"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/post_ai.js","379c555303d60ef939122d81d159b6f7"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","d84e965f3441c74873ac1504fb7111d1"],["/message/index.html","5ad463da286db9d19b506ab9adf347a3"],["/moments/index.html","6a953ba6d42e249bf93eec3665c77db8"],["/music/index.html","591359d6ae7cb67029edfb39b01d4273"],["/page/2/index.html","74f4261177c68f26f4fe703f4f57624a"],["/page/3/index.html","938dc42227e7e3a2b158916c49fbf395"],["/page/4/index.html","b352d50b5645a447473b6d65f957afda"],["/page/5/index.html","6c26b0c1de0e70f44f4477891a45561d"],["/page/6/index.html","d9882fd7cba9db311344ab41dbc8e86c"],["/privacy/index.html","e62784d67f3d3b0c579dd6bdf1bc9808"],["/public/service-worker.js","7d4f04542b5751a8cf464bd98fcaa62f"],["/public/workbox-53ab6fa2.js","9f94064b4db6b5be966f23fc7ebbdc16"],["/recentcomments/index.html","89f3870f3d38e902c87d4244d3de2014"],["/service-worker.js","3c15f8619012f609e0090071b5539de6"],["/sw-register.js","5d09ab8c7d8f6fff82efb2ea996074b3"],["/tags/123网盘/index.html","696500d274ce1bc318ccb5c3ab0fcf19"],["/tags/Ai/index.html","fd43e1137d42ee5a8240ae7abb81e7fb"],["/tags/C/index.html","5f4e5de21883a0ad822445b9bd00ad29"],["/tags/ChatGPT/index.html","e591187cea0a56ae3bb672b3ba0e0e19"],["/tags/Cloudflare/index.html","7f3080895cb166766069bed0e1d3900c"],["/tags/Markdown/index.html","9cd7978dab80606609277034e8a4c359"],["/tags/Openai/index.html","c75ecbb0dd194e932821cb275b809838"],["/tags/QQ空间/index.html","1bd89653e5e6caf6e57cb27c7e0bd2f0"],["/tags/app/index.html","800253cc7d15ce8db6dbe2a74bc9493e"],["/tags/hexo/index.html","e8fb6a649a1fa87acf0c681614aeaaf6"],["/tags/index.html","dc9dbfa938cd8911c13f865c2dbc67be"],["/tags/works/index.html","573c8cb40c67e99b00572d5f8cf69c39"],["/tags/信息修改/index.html","4ad8e5085e257be313dae55ed110ea25"],["/tags/写作/index.html","a173299b76c0cf998599e6aa4838009f"],["/tags/分享/index.html","e539aba69c644a9c95afc13218611c4f"],["/tags/吾爱破解/index.html","9a57467819aa4e44f7b9c8451d132767"],["/tags/塔罗牌/index.html","ce891598512b32347d28272d112cff19"],["/tags/壁纸/index.html","d23883d63947e1ed49d2ed2945c08c6d"],["/tags/安卓应用/index.html","21879f67c8b8fff4f31cb3b97f82ef13"],["/tags/安卓应用/page/2/index.html","df5a942eb3acd54827878d78e3f41ed7"],["/tags/安卓软件/index.html","3b3887d28241fc923575e7341d60a69b"],["/tags/实用/index.html","56866c86486083c1681667cec7222c54"],["/tags/实用推荐/index.html","ed83a91dec11c9c22692a6cc666ce2c7"],["/tags/实用推荐/page/2/index.html","fa78a34ce02a84113eed89db39c7b39a"],["/tags/实验/index.html","34c3852f3af250457812cf08f0b7a4df"],["/tags/工具/index.html","115726f11812f9e10755ff0c7f74b435"],["/tags/工具/page/2/index.html","80608c4f92f45755bcf1c47c9d0f78a9"],["/tags/广告/index.html","94db916b17ae46d1ddcfe1fed87a3c75"],["/tags/建站/index.html","1541f132295f8c0730e4285faab7c510"],["/tags/开源/index.html","d2663932e379cf4ea345e3f1c8cd81b0"],["/tags/影视/index.html","f1069f8133b91ee208432c840c24dc57"],["/tags/心理/index.html","411cc896e84310d987813d94c6217404"],["/tags/思考/index.html","99a407e0832d0394bff0232cf41f71db"],["/tags/技术分享/index.html","69096040e3240ccb58ab9a99db115eec"],["/tags/指令/index.html","ed56b0afad2182ccf4240b9c3b5e772f"],["/tags/探究所以/index.html","bc46ea912a67c9ac0726232994e7196b"],["/tags/推荐/index.html","f311f1c29a2562e7c0da4483c6eda67e"],["/tags/教程/index.html","55238675646632b758273219e2c5037f"],["/tags/文字语音/index.html","3fea67704ad3e8dfe9c3208d1c731d59"],["/tags/激活/index.html","113eb95a91969a4742651cb8ce18f6e5"],["/tags/班级/index.html","4b21eae5e0bb3014e347808f7a63952f"],["/tags/生活/index.html","84fdfc332ff7767636330b45ccd1b6db"],["/tags/电脑软件/index.html","3dcdf9fe8bb6456c8b4b4a394ab8dfaa"],["/tags/电脑软件/page/2/index.html","1bd3a74f889241fea706d34649e2a18b"],["/tags/百度网盘/index.html","ba4cfaed8b6dc69eb6ab0da4b3a4271b"],["/tags/科幻科普/index.html","29294999b61c0eeeb2d970cdcff9e4fd"],["/tags/精选网站/index.html","19bf1b86882084ff1bf545365f830b11"],["/tags/系统优化/index.html","1b7d17e132c8067bae25a31c7f70f926"],["/tags/编程语言/index.html","59fd09fa7829a2084a65dae7d039e148"],["/tags/网站建站/index.html","9c2d233bc3d261a6fecf94696724f0a9"],["/tags/网页精选/index.html","87e93133254de7f4a9e6bd3a02d08b54"],["/tags/脚本/index.html","b8742ce3b9df66058b3d215804c40f7e"],["/tags/视频/index.html","dbbf404912a9100d145318f601a07407"],["/tags/计算机/index.html","6bda59da8c85378e1ed79fc2b7c1c931"],["/tags/记录/index.html","23696940407f94a672e4a15124ce5b02"],["/tags/调查/index.html","12ec860a9c2a14a7524fdda33fe3c003"],["/tags/部署/index.html","01937c510754bce796cdbdec240ebef1"],["/tags/锻炼/index.html","1ec7cf80bdce16eb95ce1a6ea1a47153"],["/tags/随机图/index.html","2f0f9b1f1b926590c4c4e6875ac0b997"],["/tags/音乐/index.html","e3eb72d3fdec73532a64416b0cddab6a"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
