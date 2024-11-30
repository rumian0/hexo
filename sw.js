/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","6cfea23085e2b5b3b56e5eb426460c37"],["/2024/01/22/Markdown/index.html","9e10f67e0f1a88a58210564274464036"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","4a8a447b63ad43c7f05b595848723b0e"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","0b39058c97defaa4374864f5457f0df7"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","f2743ea1a5cac89aee8d359f85e6a4c1"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","5b713a86228893ce5da2db2f34a41d7e"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","d3d17aee3f971df5919c13e930117096"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","8b4176ea662bc11f1b6671f228003710"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","2262c57da4c659e98950b4c5270ab7bf"],["/2024/04/10/C-saolei/index.html","2c1082ed91003bd5de0d38a4b5c3b467"],["/2024/04/10/free-yuming/index.html","756a09b4689345f574e8652c046de3c6"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","0b239d6439f23ae5978b5fe00474b9b3"],["/2024/04/21/kw/index.html","7868bd014141c13f3ede06011315567f"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","e218842f6b50cf5a2a676145a6f18fc1"],["/2024/05/12/music_download/index.html","c7b347be03599011ab6a5afab106fe6d"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","f3444cd27cdeeda7f821e407808758a5"],["/2024/05/25/Vercel-Typecho/index.html","ec812849bf4e0e6d77a8785a5edff1de"],["/2024/06/02/website-all/index.html","80e99f46e9cb00fa553f352036906763"],["/2024/06/17/tools-box/index.html","76cf1fe91d9de2b3a1f3178cd6b61f9e"],["/2024/06/22/biibili-zhilian/index.html","191d26b0ebbc7fbda22b033733625c1c"],["/2024/06/23/sqyy/index.html","9a52fd9f65f2b3793e8deac884f5a11c"],["/2024/06/24/win-chachong/index.html","ce52ed81e5691544c526c431c05e98f1"],["/2024/07/03/dyd/index.html","c931d98c9e5cedd43fecfc303938e9ec"],["/2024/07/03/geospy/index.html","4defd42e2349dece6ce32717f022d4e9"],["/2024/07/16/TuneFree/index.html","cf60767b39adde30b734d1c38c05ae2c"],["/2024/07/16/pdf-repalr/index.html","f5796c1ddfe0af29755c1cdf41b89e3e"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","b0b05b797c3a24036dfd7d035ae1fe1d"],["/2024/07/23/an-yuyin/index.html","8be32eb357891827183e7b559ed1505c"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","531c5df2c01d9bf71e4f64a2cdcb3ea0"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","d5220a7587bdbdbed433adfca34cb70c"],["/2024/07/24/win11-win10/index.html","ebfbb395cfa0e704446a01c7bde94402"],["/2024/08/03/wu-muose/index.html","0f8485317ef6a92c08c97b1b6fc45c83"],["/2024/08/04/ab/index.html","bce0f61a1a0a9b0bb140961330d48cbc"],["/2024/08/25/mp3tag/index.html","6670d2c8182412183d55cf7dc2c7e77c"],["/2024/08/31/cf-words/index.html","8449a7320d556a6bdb557fda0b16f950"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","56578cb241aa0ab29aef2bb31b90509d"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ce69b4585676b59b65eebcab1ffd6cba"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","cbec87d62c8a975e638dcdaa27714bf8"],["/2024/09/30/123-liuliang/index.html","95ad759992dee2c877af298ed61d0dae"],["/2024/10/01/app-allmusic/index.html","3f1ff061af93bf8f1c3ef24cca05a45e"],["/2024/10/01/win-musicfree/index.html","fe4a691ce5971021503d8354d868cd4d"],["/2024/10/02/fire-xinli/index.html","78074103c271ebcba057b5f7392e7c75"],["/2024/10/02/win-wyydaili/index.html","601fd13c7d098f3f4eef51a0f8c1d9ee"],["/2024/10/14/qq-histort/index.html","a7841105a9a87cba2bc3fced7c2187c4"],["/2024/10/26/suijip/index.html","c4ef197f7e255ac02eba47f9128d7e14"],["/2024/10/27/ai-tlp/index.html","63549e351ec53714c6ff761e6e640554"],["/2024/10/27/cloudflare-cfff/index.html","0f49461e4f6b4f4f39307b75c6437f0c"],["/2024/10/27/tvbox/index.html","4e627a25618b73b20c5068556eae156e"],["/2024/11/20/wyy--2/index.html","20a47ee0647b3cf65e8d92ddece2a3b1"],["/2024/11/23/fjyangcheng/index.html","55dc2581bb0bf3c4ca1cfdf496cd1982"],["/2024/11/23/office-ltsc/index.html","f5cfc6112578d9891570adb4c2afad8f"],["/404.html","aa6d42cee83348d0a8c3cd90780b21c0"],["/about/index.html","91c860694a78a4478236eee1bd075f3c"],["/archives/2024/01/index.html","2108c5a925ce245ed46b28f6833bbcb4"],["/archives/2024/02/index.html","37c730a4ab91d2d92986c56dec782c07"],["/archives/2024/03/index.html","7faf4ddacda890d846779a1a1aea9d02"],["/archives/2024/04/index.html","c2df945d26cc61d8eb07d75dd984aa3b"],["/archives/2024/05/index.html","79c273bc6c27b81f1c5c5d9efe6af8d7"],["/archives/2024/06/index.html","ed69031f08d5fe361c2793c2d4f281cb"],["/archives/2024/07/index.html","f85f60af15f15299e85c6371ed1f18fb"],["/archives/2024/08/index.html","3b30c4f9f6abf9ca82feef10a0a9459f"],["/archives/2024/09/index.html","b26e3dadd46a7a566d042cd4f1d7a2d8"],["/archives/2024/10/index.html","aaa25fd1fee5929ee4b6818ef27a0ca8"],["/archives/2024/11/index.html","949cac26d9e01650db19fe7279592ae0"],["/archives/2024/index.html","1dbe65364397f76f57940004c412c133"],["/archives/2024/page/2/index.html","0d75c521e28c89150d260a320acc1b30"],["/archives/2024/page/3/index.html","f591eb054b3d1e6b71dd04b43b76ed1d"],["/archives/2024/page/4/index.html","ca55a758626ad1759f80b86ac3c7b1f2"],["/archives/2024/page/5/index.html","74844537418e9951f363d32e13b65659"],["/archives/2024/page/6/index.html","825ed7e8bab5443160d729c18b00ca93"],["/archives/index.html","6c970661ac81b016049e825c72588d53"],["/archives/page/2/index.html","446df9ab27c588be32f3289ac505bc91"],["/archives/page/3/index.html","aedde82b6346d2f0702de0cd61ed96ac"],["/archives/page/4/index.html","c2eb413bc333369bdafd4e5987c2af15"],["/archives/page/5/index.html","c11199bd39c3b4452654b21db0a52a19"],["/archives/page/6/index.html","524349c69ff1b0652d769d3fd29687c3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","4242a8146d5f61e3c4ffdc0f86865307"],["/categories/index.html","dd138e8c2db3ad47e2c00c3beb5108ff"],["/categories/学习资料/index.html","b529127fb2ab0dd95cd2e9fc1e039992"],["/categories/安卓应用/index.html","fbbcc526debecf4513c4ff6f0a2d9263"],["/categories/实用技巧/index.html","d8f40e9af9ee4d5639b4d3a07265e2aa"],["/categories/实用推荐/index.html","e83f32ec6c104e032ac908c8149176f0"],["/categories/实用软件/index.html","f328b4aa91bd0eed86e2f08ce1c96ad4"],["/categories/实际生活/index.html","ea38cffeaf927da93f05a661b90b135b"],["/categories/影视资源/index.html","170f7273988514bc3d49e9b8bb0e6204"],["/categories/心情随笔/index.html","aec2f697f17af132bc5f24945a550463"],["/categories/心理实验/index.html","e182dc064aa70454c25a95663fc7f630"],["/categories/技术分享/index.html","e0fdbf373bda54c74ba462168bcb9f8f"],["/categories/技术教学/index.html","7dd0ad99b27382d74169fa7bb0f17dda"],["/categories/探究所以/index.html","5d3a2518c8ab7bd14723e8b1decddedb"],["/categories/生活方面/index.html","6be6cc3e6f9c6cc37d63c098b38bef6d"],["/categories/硬核科技/index.html","9af87b41ef063499f1feaab65f6316a1"],["/categories/硬核科技/page/2/index.html","5ec42f0249fa763eeb44a6bae622f92f"],["/categories/编程语言/index.html","7b6337b555631ecbfcb22bd190a7cb27"],["/categories/网站建站/index.html","5a4efe594c562bb4d3b5094c28b29b0f"],["/cookies/index.html","10c4ea3832c3b0bae7d1b93b2fb201ea"],["/copyright/index.html","2c50e29f787bde59bcc4067293c10f5a"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","32c52228dc54ecf4354eb407568e5b1c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8da1261aa1d7913f2051f692df6124ce"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","1d8748ef99e03dee0bfa5f5735c8e52f"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","3ce60d2f56aa9e316f445e444d935082"],["/message/index.html","d78d405b62b99c286c9702fd6e0ce2c0"],["/moments/index.html","a6c0f77ce366549589c2e97a6537cb51"],["/music/index.html","f46405b5cd0a1c34ed0fec19a627b464"],["/page/2/index.html","05bf4fc809c484853826517fbd561566"],["/page/3/index.html","13436fff953c621bbd699dd256712813"],["/page/4/index.html","982320272637fd151fbc173a5b1bb7f9"],["/page/5/index.html","1f7d2433d33feba6e09bc346938fba88"],["/page/6/index.html","258525f715add472d43d301ca45b0db2"],["/privacy/index.html","f786bae4e977803a91fdb2d1d7c0f70d"],["/recentcomments/index.html","d5cfd27e808fbde351d59e0dcef590f2"],["/service-worker.js","d298a47ac4032cc263664462e0980f29"],["/sw-register.js","59f337268573db7ee01dce9d98b23bad"],["/tags/123网盘/index.html","ffdeaac06a408cb4bed9b5b7cbf28e0d"],["/tags/C/index.html","5bb5e75006344c21d033ec0f5ec907e1"],["/tags/ChatGPT/index.html","ff6ad798c0ed95ce97c6877b6346f432"],["/tags/Cloudflare/index.html","34fc47d89383da13748f1adc9bd4fe1b"],["/tags/Markdown/index.html","7cf18f29c5a76fa93ee2ac1365917c26"],["/tags/Openai/index.html","c3bf0812ce09a9a0a10df43f0919877e"],["/tags/QQ空间/index.html","e20211805a5993c69902d6278feac7b3"],["/tags/VPN/index.html","b3815290a074ce90f5d1f295c5e03f7c"],["/tags/app/index.html","c93305eeba8e2c952ea1ea758e4eaf36"],["/tags/hexo/index.html","7f4766b7dd51dfb23f3a8a4c6de8ad60"],["/tags/index.html","618ddd9d5ed79f897e0269d49ffe9dd2"],["/tags/works/index.html","f6d0ef566bd882c9c63ae4ec2546c0d3"],["/tags/信息修改/index.html","41f78f2604caf3c15de48ba3f9b9f968"],["/tags/写作/index.html","cc6d32545f715bd20b45b7636a5c5542"],["/tags/分享/index.html","191ea62f96a1e8d687cc088786946f1b"],["/tags/吾爱破解/index.html","06cd5c28726ffbfe341a0478666f3dcc"],["/tags/塔罗牌/index.html","4b93d445ccec32f67ef7356c708f26bb"],["/tags/壁纸/index.html","88287f57502e7efc972b8fdc7128efb8"],["/tags/安卓应用/index.html","394ddf770969fc4beb356b374ff1904b"],["/tags/安卓应用/page/2/index.html","dbc707b4d93d8c2537ab8543ce4f3292"],["/tags/安卓软件/index.html","cf119edcb23ef28551f3663a0977ddd6"],["/tags/实用/index.html","67a9154248f3daba26732172a8e5049e"],["/tags/实用推荐/index.html","0f42dedad4cc373c01fbe8b84f532cfd"],["/tags/实用推荐/page/2/index.html","548344f6162c70a0afc5eb4e9a025dba"],["/tags/实验/index.html","adef7ebbb9b978e0702c1ef9e8bc6153"],["/tags/工具/index.html","a700874f9f3ce5592e57cb20b903377c"],["/tags/工具/page/2/index.html","42f77aa98467e8e38d03cf397fa661ad"],["/tags/广告/index.html","8ebabba5bc3589eda4dbfe9e9d0e062d"],["/tags/建站/index.html","fcab50734009d1516191ff8495e796eb"],["/tags/开源/index.html","56a9ce591eb81e9a5dee6545b27c2c1b"],["/tags/影视/index.html","1f1a04f4d19f0970741645fdc08a314c"],["/tags/心理/index.html","d3d263a8378a3d64b3621313dedf14b1"],["/tags/思考/index.html","d2e89f3dcaad839e491ea68c88e7d2c7"],["/tags/技术分享/index.html","0c24e096fde76ca54f608e1bd59cbac8"],["/tags/指令/index.html","673bd195d670d27d9958fc1b307819a2"],["/tags/探究所以/index.html","234b3c71ef3e197786cf33e9d5ef4832"],["/tags/推荐/index.html","6bf0a2922e2b0ddc6b4135e0c185aafb"],["/tags/教程/index.html","95e6b3caff45ffa8eca2a537fea33591"],["/tags/文字语音/index.html","564f2201341ce47dd5f1540998f0386b"],["/tags/激活/index.html","62a52b21e092e702a216123b81d89302"],["/tags/班级/index.html","ae67d4e456bd13873b1b7eebd4f010c6"],["/tags/生活/index.html","29c3fd673069c108d916c7c6fa0eea84"],["/tags/电脑软件/index.html","0823e28acdd77c89111662cf79ee0013"],["/tags/电脑软件/page/2/index.html","67bdf65caf28d13fac09cadfdf5cd33a"],["/tags/百度网盘/index.html","0de96406b4474f57e694297ec236557f"],["/tags/科幻科普/index.html","d17f96a2ee9e2633e80d74beada71771"],["/tags/精选网站/index.html","8b00d3bd3cea0cced33f202d1aa15f1b"],["/tags/系统优化/index.html","0c0093f07351312579b23fd78efcfe80"],["/tags/编程语言/index.html","8494ea25dc876b2e4339447e66991b17"],["/tags/网站建站/index.html","a1694e5b248fa805d4f8ca8c906fc947"],["/tags/网页精选/index.html","a107bedfd63fa19852b9c43026f66816"],["/tags/脚本/index.html","0abeb75c3673ade5230aab6a52fc2a85"],["/tags/节点/index.html","e04a975dccc4269458cf6a2714430cb3"],["/tags/视频/index.html","0d1ed164276a04a3be72b46c7cb75e5c"],["/tags/计算机/index.html","23600b7b1437959810fdd115ea018f76"],["/tags/记录/index.html","03e952b7b27d9f3630ca15f2d91bded9"],["/tags/部署/index.html","1c7a7c7970538806f0ff4a21a4a80ac1"],["/tags/锻炼/index.html","7a7930e69e1a6c186682563e3ab2d887"],["/tags/随机图/index.html","cd6090582bb8984dfb92d6b3cdf3a016"],["/tags/音乐/index.html","b6768e3ff45ad3fc39fe2eaf34e5415b"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
