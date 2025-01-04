/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","5e5eb4684ec7646b3f0a8952e7b39de3"],["/2024/01/22/Markdown/index.html","67e932cbf3ee3d509bc1f0287fc629d0"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","f7fb419d21dda88dbcae2fd95202a10c"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","a925888aa07b8c69fb11bf058330369b"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","886fca3bdfd95a487df523fc7185f488"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","dd629cc05824d71725d3116a80c73e9b"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","410133610fd3fbe967fcdd1cd639089f"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","3fbb35508e61a5a22322a0a1e073660b"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","d9663e4e216e5e38ff3ed479b0dd3a0f"],["/2024/04/10/C-saolei/index.html","96852d78ad7c839defd533a686d39986"],["/2024/04/10/free-yuming/index.html","4af28925a8a3be984eb68117d99e3f6f"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","f65473799f65389de1401f304a1efaaa"],["/2024/04/21/kw/index.html","7add38549a9425ddbd32f31ceeb5d127"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","66d6121872ad8b539e73de5e0e0de91d"],["/2024/05/12/music_download/index.html","a8ca56b02e372d4fec1b943b56f9fd32"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","7d9987ae289ba3388f02d46f542717eb"],["/2024/05/25/Vercel-Typecho/index.html","169f15f7b13f7e19537a88649a25eff4"],["/2024/06/02/website-all/index.html","1f5fa0b6321ef9400ad5bfbf063b41ef"],["/2024/06/17/tools-box/index.html","d9b64a255e5e35974af20be37cc02086"],["/2024/06/22/biibili-zhilian/index.html","7a80cba261369342f9e7572a590d5498"],["/2024/06/23/sqyy/index.html","726e6f7f874f8525e5177aabe3d7cd67"],["/2024/06/24/win-chachong/index.html","948f3389d77b5fdca7a7f17d0c195ac4"],["/2024/07/03/dyd/index.html","dc0f842b1c0a087defc4f797dba24c85"],["/2024/07/03/geospy/index.html","b73316eaa4c8d08037493e74837e1441"],["/2024/07/16/TuneFree/index.html","832f003cc6b3c7a61a608eef2979310c"],["/2024/07/16/pdf-repalr/index.html","adb6f896a8e73ebb26cce1cfeeda14fe"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","6db2eb0ba28218fc7e2207c513e7bf66"],["/2024/07/23/an-yuyin/index.html","9ab8db0e1de033db2cf6b57b6dfbd63e"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","e751381266eee5c9563acabb06226a7c"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","414538f1880f78d947ad79a759ef3b99"],["/2024/07/24/win11-win10/index.html","7e5952dc0bd37da26d712978996adc84"],["/2024/08/03/wu-muose/index.html","f09226b857d399c4df6cd8225891d444"],["/2024/08/04/ab/index.html","0c84a99f1b3b09801c3432651fb53a0e"],["/2024/08/25/mp3tag/index.html","dbb97e9e47c4c247bd867211c46ab8ea"],["/2024/08/31/cf-words/index.html","811143998a10cfd40a02d0ed60578a71"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b2d30d894eaabfdf3e1edf7af76596c0"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","17f6d3822b794cf908bb1164bea76acb"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","e20d63938ad43379c4b58680f138ab4f"],["/2024/09/30/123-liuliang/index.html","86ab326a0cfea3916201c96b5ef9b63e"],["/2024/10/01/app-allmusic/index.html","1f50cd208a5b74abf279df09435b312f"],["/2024/10/01/win-musicfree/index.html","6f7f05d7cff3f16678795359b30d4245"],["/2024/10/02/fire-xinli/index.html","08b3379443412b36fd7ccd775a1dec94"],["/2024/10/02/win-wyydaili/index.html","dcfd38095bffa257a60244cbd619f46f"],["/2024/10/14/qq-histort/index.html","d21184172eda80ba4a0d8c2430f8cb0a"],["/2024/10/26/suijip/index.html","80819b19864373d02d154bfadc449d1a"],["/2024/10/27/ai-tlp/index.html","e9d1b365a11ca8e90b3cfe4a8c9cbf52"],["/2024/10/27/tvbox/index.html","4a43ad5dfb2335da440cf71ebc2a2b7b"],["/2024/11/20/wyy--2/index.html","da491c959c48747c20dbe214efcd88d0"],["/2024/11/23/fjyangcheng/index.html","857beef521df7a7d8dfabd8b26d3ad8a"],["/2024/11/23/office-ltsc/index.html","2848dcb1d463929641c30e1b44576550"],["/2024/12/01/aitiaosuo/index.html","84758eb9fd0143688d067808c279b61b"],["/2024/12/01/yjx-study/index.html","2a5ccc23ee25caab1fa654a9b68e0f1a"],["/2024/12/21/riji12-09/index.html","e259573e3977c90dd3e332f0831f3bbe"],["/2024/12/28/obsessive-thinking/index.html","01562111aa372a62e4d47bf473097dd9"],["/2024/12/29/yjxxx-essay/index.html","bf3242a6378a4e32311f832051f42960"],["/2025/01/01/new/index.html","f36852d525c49675338682bcb7b51e7c"],["/404.html","9167d71cefeb81d142d50cd822718221"],["/about/index.html","94e2844fed9b2c2b38f61b60f1d1152d"],["/archives/2024/01/index.html","2247e858340c35b6cca25c71a5562c8c"],["/archives/2024/02/index.html","a0a14ef748df18b31db0f7e954bc92e0"],["/archives/2024/03/index.html","14820abe18412fb3fa159e60568c5d40"],["/archives/2024/04/index.html","cc80325b37275d4c77da9227f34e3ce9"],["/archives/2024/05/index.html","b1d4ef30b24d9836600f6d8cc03fde83"],["/archives/2024/06/index.html","91a5260afe6b09a4ddfb847634b02102"],["/archives/2024/07/index.html","5ac52f471b253c02365e7408a94a0162"],["/archives/2024/08/index.html","08da25a27b1e26d2a1fc1de1c96c22fd"],["/archives/2024/09/index.html","ca975eaa52fe6459ce58c88269679528"],["/archives/2024/10/index.html","41ea4335786dfa7bfcf8b2ae1bd40b5f"],["/archives/2024/11/index.html","20be20507949e43812946943a323c32a"],["/archives/2024/12/index.html","6a7f4e4af1456c3e7c8f337a840daa65"],["/archives/2024/index.html","42b6d032aecf6d93f9ead237c5753ac6"],["/archives/2024/page/2/index.html","e7446d7a40052293a9519271c3a110ea"],["/archives/2024/page/3/index.html","78e0d5e4803373cdc99aa6c4d9d48c4a"],["/archives/2024/page/4/index.html","f67c87212d32bd6591552b8c2f35ee87"],["/archives/2024/page/5/index.html","d6db679bfac3e3da57f4aebcb2207634"],["/archives/2024/page/6/index.html","a7d1a404862389305e041c16845971e9"],["/archives/2025/01/index.html","a4cec3be3c6d5fad7ebadc2d6dcc79cd"],["/archives/2025/index.html","5e02847dd9d12948ae76dc01793b7c59"],["/archives/index.html","f8b42475efd914a54196d07e0a9968b9"],["/archives/page/2/index.html","73d0b5cf2f320463770b764b3819f047"],["/archives/page/3/index.html","7d3b49a0d666514636f0e00e597bab5c"],["/archives/page/4/index.html","b2e3c3533fac5ffb83dbdf38176e9667"],["/archives/page/5/index.html","ce49b044792ad436541a7fb47192dbc6"],["/archives/page/6/index.html","6d01a0997682615d6f3af5ae0fb82fb6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","0f7e2d60078e699129c64ac2e0b6673b"],["/categories/index.html","d60964377a5b1a53154bbf2003342980"],["/categories/学习资料/index.html","ad95b4ef13d7c7b80f7debccb1154421"],["/categories/安卓应用/index.html","2826731218b5e13321fc5ecfa6fd9221"],["/categories/实用技巧/index.html","8b0ccb8eb527f765f13096ffab91703c"],["/categories/实用推荐/index.html","f464e672681dcb114c203384f1195e46"],["/categories/实用软件/index.html","53d971ea80b1d9e7b032bd6603dff077"],["/categories/实际生活/index.html","cd349d4d0fe89edafbd32c83c8e94d62"],["/categories/影视资源/index.html","6cf30f56c5b92f315c77ed3d8630ca58"],["/categories/心情随笔/index.html","79aa42b7ac02e061e6173c0e98764430"],["/categories/心理实验/index.html","ac8f41cbfbbeafde546bcf5d265674fa"],["/categories/技术分享/index.html","0b62676b236eb1a21813fa3827d61964"],["/categories/技术教学/index.html","4ac53349d5e303bc3b962965fb6ad7f0"],["/categories/探究所以/index.html","21ddeb78bf24be4b38a23e44e3d2e062"],["/categories/生活方面/index.html","8afe5dad3a6b4b4c2465695cf8a45f70"],["/categories/硬核科技/index.html","cb837e39ee2b6723a273ee355509beed"],["/categories/硬核科技/page/2/index.html","75e5a19fe064327b4a2b755cb37586c8"],["/categories/编程语言/index.html","56c5b6ccf97ecea2a41c1bb164d46942"],["/categories/网站建站/index.html","af65088bedabff6d3332d43175e0d2a8"],["/cookies/index.html","7f0addb61b28b51e14363e948754df22"],["/copyright/index.html","958d9fd0e813bd505d8a53cc42badbe6"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/fclite.css","1c0194f4261c2b0b94f88252261c1c64"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","be51b4bc43c2aca828592ed2ba2841a5"],["/fcircle/index.html","3301fdb1742e924ae5e75664d16bbb42"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/phone.png","ace8353e0b6333cc9902d31f5543b7e0"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","fc1e971f7c767dada01a328a98ad1984"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/jclite.js","02a8a4fb83edf88399efa9729a4db74e"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/post_ai.js","379c555303d60ef939122d81d159b6f7"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","e35288dee6ca2f9a29e2ad38b9bcb030"],["/message/index.html","789a0a1a73e605b75e7038335cef5c6c"],["/moments/index.html","0b4bb482d5587822453d57b511fc8cf1"],["/music/index.html","c3cb3d5a8f3de7e240ee26dbbcacebb5"],["/page/2/index.html","27f8759608fd2878d6b843ae6f9a1e4a"],["/page/3/index.html","9a9169d89f09924db4a31395d8ae4ffc"],["/page/4/index.html","75fe7ce527bf597d92dccc0f65e43f62"],["/page/5/index.html","068713b586362b959e26820532696a58"],["/page/6/index.html","f69c69504e0f6bcbd3a11700d79f6358"],["/privacy/index.html","c0379b534951615bb5d732532dcb851b"],["/public/service-worker.js","7d4f04542b5751a8cf464bd98fcaa62f"],["/public/workbox-53ab6fa2.js","9f94064b4db6b5be966f23fc7ebbdc16"],["/recentcomments/index.html","15ef7678c5077988a38ab4796bd581e7"],["/service-worker.js","5bb741b027fb4d2d8797324d74feeec3"],["/sw-register.js","4f7b7de3cf0d13d5e02c3e88bf32c381"],["/tags/123网盘/index.html","c576cdd572e9e71dbd725eab1fd26ab1"],["/tags/Ai/index.html","dc25d6df49b4ea15008752f5b63c8371"],["/tags/C/index.html","5652493c34932e3084f289df9bd9f699"],["/tags/ChatGPT/index.html","d52fba03c3c7364819edfc23c041a112"],["/tags/Cloudflare/index.html","ca4be4969dfbc23e5d932bc9b74fab39"],["/tags/Markdown/index.html","26218135e19d36e732f3ff69b23cda8b"],["/tags/Openai/index.html","bb589c32fc69ae6190e93599c591fa46"],["/tags/QQ空间/index.html","a7a40a53465d3217b67dc6bfbfb8e598"],["/tags/app/index.html","9b237f063c37806a027106f821cb0641"],["/tags/hexo/index.html","6ceb86b46d8c28f71038f34926defc23"],["/tags/index.html","e796125e7fced6fb43e61ed182c1c0dd"],["/tags/works/index.html","f1194f7bb4ef88354fad8660ccbb4e44"],["/tags/信息修改/index.html","f5ff4a551cc3f19d0a6fe7be9ed38732"],["/tags/写作/index.html","9704062c7680d8000e829445b056c791"],["/tags/分享/index.html","df66b40f31bbeaae32cce0cd9f5c543f"],["/tags/吾爱破解/index.html","abc731975bf4abe49a9aaba5bb1cbcac"],["/tags/塔罗牌/index.html","58f5a0b8d9e074aa0df1e480f96a1411"],["/tags/壁纸/index.html","4e5601a3b512744bfd0cc6bd2a6347a8"],["/tags/安卓应用/index.html","0d10a6a160093bb57e354c45e247c8ee"],["/tags/安卓应用/page/2/index.html","bb61327224fa72315746fa15b49b2351"],["/tags/安卓软件/index.html","c020403ea98a10b4fc9dbe871fa3bc3e"],["/tags/实用/index.html","2ed3c0698fc0d9e80ca1a933d0d7a548"],["/tags/实用推荐/index.html","324c6b57277b2f4fc573833f01964578"],["/tags/实用推荐/page/2/index.html","28aeb36c7d75a39a45b919dca12a3c92"],["/tags/实验/index.html","2e6df19c40080bf9ba4ab4113764c136"],["/tags/工具/index.html","cd8da4af519650b6dd7b179eacc4f483"],["/tags/工具/page/2/index.html","ec9aa0e614109f74efe3bca10d7ee1e2"],["/tags/广告/index.html","83e3d69e44a24517786d5cfc2a0922ab"],["/tags/建站/index.html","462cd680e6222e12f576442ff68c61c5"],["/tags/开源/index.html","c8f0efc66d50886a007519ae4583a067"],["/tags/影视/index.html","8bf6e86f340fd1abaf08c4909babf353"],["/tags/心理/index.html","c7d8ab71b395ddfaf6f29c834a112f09"],["/tags/思考/index.html","dc46a809c5c1fcf656dd49179d0702df"],["/tags/技术分享/index.html","3ba70c383047662a1a1a489034fa120b"],["/tags/指令/index.html","9c1911c6a3bb11213e1369ee55d9abd7"],["/tags/探究所以/index.html","ee67ea7e5fdc4516c1c610b8f7d5c35d"],["/tags/推荐/index.html","77457835c30bdfcb056f06d62c640ffd"],["/tags/教程/index.html","829c5c1fb1451ec76d3eb6c79c562c21"],["/tags/文字语音/index.html","5712ce6544e3528fb640042431faffe4"],["/tags/激活/index.html","cfd259615e0b773738e54cf15feb2ea9"],["/tags/班级/index.html","699b938d5045ea1dd1a37009e0e2fd71"],["/tags/生活/index.html","4c1bfb810ee8cf3d61e55f19204a5425"],["/tags/电脑软件/index.html","46b79c4782a5dd7c0830c30519985219"],["/tags/电脑软件/page/2/index.html","67cc07acd8daea732c6afe10d1f1028b"],["/tags/百度网盘/index.html","d594b7547550838a290921cbc7ff37c3"],["/tags/科幻科普/index.html","5f5c5401fc26ffcc441de83f8674a6a4"],["/tags/精选网站/index.html","a0bb2cb34ca28d69984f5943de54a355"],["/tags/系统优化/index.html","231d77044b9d300cac05d3e81ef387bf"],["/tags/编程语言/index.html","299b76af745146d065305d7f351d3f2c"],["/tags/网站建站/index.html","63176ea7a52af72ca927a7a68e916be2"],["/tags/网页精选/index.html","36d8b0e20aa63214c85106668bc18d8c"],["/tags/脚本/index.html","458e311d57edf37e6aff67448e83403f"],["/tags/视频/index.html","ffca5699a2bb11ff06939556656dbc9e"],["/tags/计算机/index.html","c22098b6f70c415c7db4488534ebece1"],["/tags/记录/index.html","93375ad8751b97d2bffcc9eb6fc53d2d"],["/tags/调查/index.html","eeeb94a208853097ddfaedf07e93c90a"],["/tags/部署/index.html","eee0d040ad1568868509d0268cbbbeec"],["/tags/锻炼/index.html","cd33af8af8e2d38c3fa2521adec92956"],["/tags/随机图/index.html","3612864b07369c321edf85eb0934ad4f"],["/tags/音乐/index.html","b6beed57d4741de83ae4b402f159f435"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
