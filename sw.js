/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/22/Markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/04/10/C-saolei/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/04/10/free-yuming/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/04/21/kw/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/05/12/music_download/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/05/25/Vercel-Typecho/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/06/02/website-all/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/06/17/tools-box/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/06/22/biibili-zhilian/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/06/23/sqyy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/06/24/win-chachong/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/03/dyd/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/03/geospy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/16/TuneFree/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/16/pdf-repalr/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/23/an-yuyin/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/07/24/win11-win10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/08/03/wu-muose/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/08/04/ab/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/08/25/mp3tag/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/08/31/cf-words/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/09/30/123-liuliang/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/01/app-allmusic/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/01/win-musicfree/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/02/fire-xinli/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/02/win-wyydaili/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/14/qq-histort/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/26/suijip/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/27/ai-tlp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/27/cloudflare-cfff/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/10/27/tvbox/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/11/20/wyy--2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/11/23/fjyangcheng/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/11/23/office-ltsc/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/12/01/aitiaosuo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/2024/12/01/yjx-study/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/2024/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/archives/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/学习资料/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/安卓应用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/实用技巧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/实用推荐/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/实用软件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/实际生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/影视资源/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/心情随笔/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/心理实验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术分享/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/技术教学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/探究所以/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/生活方面/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/硬核科技/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/硬核科技/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/编程语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/网站建站/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/cookies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/copyright/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/message/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/moments/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/music/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/privacy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/recentcomments/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/service-worker.js","646d4c2860649a99121dd2a582fb1e56"],["/sw-register.js","5330321b80c049a93518e32b7f66ec1b"],["/tags/123网盘/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Ai/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/ChatGPT/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Cloudflare/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/Openai/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/QQ空间/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/VPN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/app/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/works/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/信息修改/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/写作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/分享/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/吾爱破解/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/塔罗牌/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/壁纸/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/安卓应用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/安卓应用/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/安卓软件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/实用/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/实用推荐/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/实用推荐/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/实验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/工具/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/广告/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/建站/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/开源/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/影视/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/心理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/思考/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/技术分享/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/指令/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/探究所以/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/推荐/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/教程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/文字语音/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/激活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/班级/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/电脑软件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/电脑软件/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/百度网盘/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/科幻科普/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/精选网站/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/系统优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/编程语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/网站建站/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/网页精选/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/脚本/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/节点/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/视频/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/计算机/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/记录/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/调查/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/锻炼/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/随机图/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/音乐/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
