/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","d14e6de384ec2df121ae3bf5c61b38ae"],["/2024/01/22/Markdown/index.html","103a2990707a81e7c8d96e9ec916bdda"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","82a67c9b9177ea826b505bef2b83d116"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","06d5e9464c35c30e60d044b732665ac0"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","83c8d9391ad83d32e31163e726071d39"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","d68b2d3a039b493f75a23dda35ca1cca"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","47492e5554aabc3ee3feb65d09d65638"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","07eb3b8bff529eb674c6f707e1be7af2"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","379363723373f9cfe6a8ba84dea6a130"],["/2024/04/10/C-saolei/index.html","631369ee701741665469ef762a6735f6"],["/2024/04/10/free-yuming/index.html","3d1cfd4dcfdde45dd5139001913f495c"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","bcdb4a06e1b2b926357fc6c9cb442b87"],["/2024/04/21/kw/index.html","08f041dc65ee4aa7dbbd337e922b4a2d"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","db32a75c19511117af2f9c4602972599"],["/2024/05/12/music_download/index.html","a488604ecd421df4c214d1829f7c9dcd"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","9dbd6737665b6ba7f2d0f82156fb0cc7"],["/2024/05/25/Vercel-Typecho/index.html","4c4fb5faa580b637f6be99932fb8c6df"],["/2024/06/02/website-all/index.html","289f39eefa2dd2ed22577353bd0639bb"],["/2024/06/17/tools-box/index.html","b650a0d3089eeadad93d70b124a08bd9"],["/2024/06/22/biibili-zhilian/index.html","0bee542f1af50cc746f5232aefaa96d1"],["/2024/06/23/sqyy/index.html","f0eb4ea3a417762d9b25eb728c87e736"],["/2024/06/24/win-chachong/index.html","9ddc1c992e7ea5649530078112d937b0"],["/2024/07/03/dyd/index.html","5bc6fb65889b6840a2bca5bf8b70e4d3"],["/2024/07/03/geospy/index.html","4cab9f8862efd9106b2191e9a6ea8b1a"],["/2024/07/16/TuneFree/index.html","57761d1e8a6eb26c7300395ca4f6324c"],["/2024/07/16/pdf-repalr/index.html","c3bc05fd64b267efbe8a79775fa94e86"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","7b27046c76d471845b973271c21f3435"],["/2024/07/23/an-yuyin/index.html","51da862ec8575c82482b3f352da771f6"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","6b73055721bf33e10fb7ddeda9bc6322"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","e1c6129102ebf72d107bf9bd53a9aa57"],["/2024/07/24/win11-win10/index.html","21f05fefcb37ded81bc890abdfcf03b5"],["/2024/08/03/wu-muose/index.html","dd47199ef2e8946e1c28ff62d08084c3"],["/2024/08/04/ab/index.html","f570627966bf58d40d3e70c1ba61c683"],["/2024/08/25/mp3tag/index.html","ea6fa1651f826bc5dc44adc4098860a7"],["/2024/08/31/cf-words/index.html","bf9deb11b636fa28bf73d18bdc617310"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","cce9b9afa0fd9272419074cf925ab6b0"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","5163c25c4f44741037303dee1b505e98"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","6662595437742eabfb369f64a74cd562"],["/2024/09/30/123-liuliang/index.html","1b9434598958c52bfb5392c6f85d265c"],["/2024/10/01/app-allmusic/index.html","04e70ce4e10a988246adecb719b98abb"],["/2024/10/01/win-musicfree/index.html","64e8de83f8c26507464ae9ba1309b49f"],["/2024/10/02/fire-xinli/index.html","84a655c6048a5380acc696e4720eea37"],["/2024/10/02/win-wyydaili/index.html","c91b767d38ac4a0c0ca5f95ca73a8d7d"],["/2024/10/14/qq-histort/index.html","5336d3a1f33f9252e116d843ba66085a"],["/2024/10/26/suijip/index.html","cb9c271e254ac9abc721c25f0a6d9683"],["/2024/10/27/ai-tlp/index.html","4719966a8805c40c0864acf2ff158436"],["/2024/10/27/cloudflare-cfff/index.html","36049e0291ff29b87cf50fb1c8c01e13"],["/2024/10/27/tvbox/index.html","3a063f4c05925d2e2843446b583b4b6f"],["/2024/11/20/wyy--2/index.html","ecde756ff3da1e53bb8aa78c67c7c2e5"],["/2024/11/23/fjyangcheng/index.html","7df29ae01148d591b163fd33e78343e8"],["/2024/11/23/office-ltsc/index.html","b4c069993d62b0dbdfb9b49aac2b1042"],["/2024/12/01/aitiaosuo/index.html","28d8a1a4e6a6a0629c197da746632334"],["/2024/12/01/yjx-study/index.html","f1c5cb56edbc167f204e0111546faa01"],["/404.html","e5f3c735e1d01bd835f6c269eeb696dc"],["/about/index.html","d41dd17d9ce3d47181894f577020a1f6"],["/archives/2024/01/index.html","741b5a8844ed918a5b15470cdbde78d1"],["/archives/2024/02/index.html","4718c2e17fca6f92699827ae92c6c8bd"],["/archives/2024/03/index.html","f16b37c7f132ad6028921aa08c59687f"],["/archives/2024/04/index.html","d6c472f063ec7294475b0f6f24cfabba"],["/archives/2024/05/index.html","9033c3d261d9bc7551793927361e7e19"],["/archives/2024/06/index.html","f0b28178942752e041cc8ec4be685717"],["/archives/2024/07/index.html","23ad862a85c4600e11dac4a1821b296d"],["/archives/2024/08/index.html","6f10fcf0e1320f4dbb72466cfc524a42"],["/archives/2024/09/index.html","3d55661a5e4c97d368cb1bd1de6d3b1b"],["/archives/2024/10/index.html","b294324ce6a61e0372b14c42f97bf902"],["/archives/2024/11/index.html","926a456b96b2a014bc5f41284006b72d"],["/archives/2024/12/index.html","9f2928b55e657bfa58eefacec0886fb8"],["/archives/2024/index.html","e5907d219506fecec3a0e5201f0d719f"],["/archives/2024/page/2/index.html","902531d0244dde84cb1e9c32604bc865"],["/archives/2024/page/3/index.html","29dd063a75cdc321e2084d2f4d3f53a7"],["/archives/2024/page/4/index.html","f0eea2f18e8ecc3de8c13cff171cf5e3"],["/archives/2024/page/5/index.html","0beb0094521eccc4fc7562b6c2a990e9"],["/archives/2024/page/6/index.html","940bfedb631c89f5d7f3aad6111e55ec"],["/archives/index.html","47212ca5485c49b9f34f91151fd11ea0"],["/archives/page/2/index.html","bdd98b9a065309ce1eadf4d196e89951"],["/archives/page/3/index.html","be1e2fd673b1fca64eaaa2889617a8a2"],["/archives/page/4/index.html","4c2c280d43073715e946c5ae18d4a39c"],["/archives/page/5/index.html","5ebb8775263ac3bc9ca6485d1b10b2cd"],["/archives/page/6/index.html","0c6fc64e0ed7c897b2b61bf86dcf2f0c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","b29c071a80ef67df3cda2bdbde98663f"],["/categories/index.html","62d86a6fec2a9051d0f4a68dc65f5d16"],["/categories/学习资料/index.html","b4fffdf346e8b5b98ea986b17d4cd9c2"],["/categories/安卓应用/index.html","787104f00e16e2686c0f52c398a90e95"],["/categories/实用技巧/index.html","03e8a798587984b78144dc3a739ad547"],["/categories/实用推荐/index.html","6ce5b9df8980e673a9333c5daca9518c"],["/categories/实用软件/index.html","cd2eae05acefb840c9c2f8f47b42a6f7"],["/categories/实际生活/index.html","26ab718bb973407d00c1ff45fab47826"],["/categories/影视资源/index.html","cb7a8ddcb1517b427dfebe544d9021a0"],["/categories/心情随笔/index.html","bef40ee7e70d09218f873baea938cb73"],["/categories/心理实验/index.html","e0beece54f13e510247b3c11ec8097dc"],["/categories/技术分享/index.html","7999acde73186f26497e5d08511b9d38"],["/categories/技术教学/index.html","096dd41824b6c6d706a67dba21ebe69d"],["/categories/探究所以/index.html","b1302e1fb346f150758a2419c94b3ed6"],["/categories/生活方面/index.html","9de3ec4617d8d30b78c7f3d61dd40bb5"],["/categories/硬核科技/index.html","1d6d79c95b8f50243eb1e1419fb3bdda"],["/categories/硬核科技/page/2/index.html","bfbc28f9012ca2df2c2f098c85bf1499"],["/categories/编程语言/index.html","6378bc4a20c39018156a3fc0b1d4de1f"],["/categories/网站建站/index.html","6828a9203749f2089a0f81229e958c6f"],["/cookies/index.html","98aa76eb77f82d29c11fd948b60123f2"],["/copyright/index.html","1328517919374f38e8b3068ad092731a"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","b65a39d8e0d822df2fce852f2c80c0a9"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","23eb95a335fc259c83bc365290396a66"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","3e34060c67a3cb9c56a83506c9012552"],["/message/index.html","4cfa3e92ecc47ad53c5a7bebecc32b3b"],["/moments/index.html","d4d9d200b9adf2d5f403d914bd209b1a"],["/music/index.html","7b82dacf1c193aab957d98502e0b2ba3"],["/page/2/index.html","62112f2e96dbdf81079ec071720baabe"],["/page/3/index.html","de69a664d31ac05fb15e6585c5b473de"],["/page/4/index.html","6787afbb118e4cbcfe1cedc1017839dd"],["/page/5/index.html","a818b5fb0d9dda614e50d23b00ee1851"],["/page/6/index.html","8940a6321308997da2076a59f41055b4"],["/privacy/index.html","082ca85269b144dea92730b375aec7fc"],["/recentcomments/index.html","a744cbc236a55c25fb4e2038abd0fdd7"],["/service-worker.js","75f70cff62e41f50d8f1462d3c6f12df"],["/sw-register.js","8b08cd4470d06700722d3b7265e770d6"],["/tags/123网盘/index.html","6c371abf7240281b53d4109dca96bf29"],["/tags/Ai/index.html","b3b4f557b51bc5ffde220334e14b8d13"],["/tags/C/index.html","412bc96e16ee19a94449022d0664a763"],["/tags/ChatGPT/index.html","430f6d3996d33fe8a42ed8ccc7c0f21e"],["/tags/Cloudflare/index.html","e667bbdd81be388120b791a68e675e0e"],["/tags/Markdown/index.html","c52690992747b87bcf344dfdb838c41d"],["/tags/Openai/index.html","57ddf80a7201f40790ccf19e155ca36b"],["/tags/QQ空间/index.html","3ed6bcc456e54fb9c365f33a3b7cfe8f"],["/tags/VPN/index.html","3843a4f087a89d22f86f50634c475548"],["/tags/app/index.html","46e763f25315122ac930cf9270721aca"],["/tags/hexo/index.html","559cda4f9099af92693f0346bc39b181"],["/tags/index.html","55be18402093f89e9027b5c3a1f25a9a"],["/tags/works/index.html","69761fb37abedcdd3c8f173badb033c3"],["/tags/信息修改/index.html","02211997f49e0638a804327f504fd797"],["/tags/写作/index.html","ec443e98648e2b224a32aab9dda70ccd"],["/tags/分享/index.html","c15f630811f1b253bd62299917aaa9c6"],["/tags/吾爱破解/index.html","1e52850eaf98b5782137b1c15b790968"],["/tags/塔罗牌/index.html","75e12186c5685cd59c5ac5acad21a8a7"],["/tags/壁纸/index.html","950456bca7c27b548f1d9c3d7d9644c1"],["/tags/安卓应用/index.html","e413cab6d6eab15926ebb58d394317b9"],["/tags/安卓应用/page/2/index.html","7e1ff452e064e4da114a00400f0b660a"],["/tags/安卓软件/index.html","e35fc33d300aade0cae21f2382b3afc1"],["/tags/实用/index.html","94a9b4e70b560a51cf207467b64a6c86"],["/tags/实用推荐/index.html","9e3b3fda9abfb1230f90fab9b07e1b7d"],["/tags/实用推荐/page/2/index.html","11ebc1214a06a717881285931714d3a1"],["/tags/实验/index.html","92e7ac08664d049b639d3a086406d012"],["/tags/工具/index.html","96214b7f139dfcccfe79c7b5e549de21"],["/tags/工具/page/2/index.html","d001c5bcbe68f43e7d2466dc97391c96"],["/tags/广告/index.html","bfb80c98f3372f12f72647a15adb4056"],["/tags/建站/index.html","321b07525e403f3f73f31f0338efefee"],["/tags/开源/index.html","c0be1abec270e2b17f1dba2a6c47676b"],["/tags/影视/index.html","5e23e3d79bc1d43be60517b04dd9a4a5"],["/tags/心理/index.html","353e9e2cac28161c23515542fec01d50"],["/tags/思考/index.html","65ac430c826d621e7c05e92e6964a188"],["/tags/技术分享/index.html","3f4e362a698de0ea516789e09df376d5"],["/tags/指令/index.html","f906d068668f7b255007d3aaed28ca7f"],["/tags/探究所以/index.html","43c9ad2aa56307f86efbca421fd4caee"],["/tags/推荐/index.html","091c3c2aba49c57ee5842fd10c5229d8"],["/tags/教程/index.html","563d3cd7b35561235f1728f3003d1480"],["/tags/文字语音/index.html","75aa7f6f36a53fb02166340bbca05184"],["/tags/激活/index.html","be495fa5847c03a29319b210c49408cb"],["/tags/班级/index.html","b01da6b52beb33860dcb4f9bed70189e"],["/tags/生活/index.html","b6e3f2423880ec8c6ca748235470e401"],["/tags/电脑软件/index.html","0164ff44c7a396694c300eb0b454d212"],["/tags/电脑软件/page/2/index.html","5c951a1fff6b8720fe538851ac965861"],["/tags/百度网盘/index.html","6499fab06ae1b268f8c9dc1581d7457a"],["/tags/科幻科普/index.html","e4c919574061d131c8b5e6650b96683b"],["/tags/精选网站/index.html","2921eaee857bcdc590e636ac3bee47c5"],["/tags/系统优化/index.html","ef8b4ab48695bfb72f4a769bd8c3629e"],["/tags/编程语言/index.html","3240003ffa43a72bcc9ccb2bab8dc911"],["/tags/网站建站/index.html","338a38a20fb7ef909ba68a42f6cc249c"],["/tags/网页精选/index.html","29c9703e3920933fe3ab8a1c95952657"],["/tags/脚本/index.html","111dd2d066c477306e07833a157fa7eb"],["/tags/节点/index.html","995e3bfc154f48a52cbe78b9503f5d7c"],["/tags/视频/index.html","eb4b4e67d8e43b3fe8645cfd022031ba"],["/tags/计算机/index.html","11a137cf49c2497c638dc845cbd55e1e"],["/tags/记录/index.html","e7ef926bed223bb54ff0b6a4884ad15a"],["/tags/调查/index.html","0c87769026a86a5e97145c57b97f0c52"],["/tags/部署/index.html","841bbb4477e2a3dabd5893be429dd1e2"],["/tags/锻炼/index.html","3da71ea49855789d7129acb4d10d9d87"],["/tags/随机图/index.html","34adbcf05fa05f7f3d625cadd893e279"],["/tags/音乐/index.html","d540fd66620b4d52a12d34f834740870"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
