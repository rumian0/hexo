/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","f38cfd5e1420ea6a696b5fa905e50186"],["/2024/01/22/Markdown/index.html","a3453bf5aa5984d923fbc137d1f3914c"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","2ebd2e81a18f5b54f9e7107d404f3add"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","21f0efb12d27fd0c3d47e1e02cd38077"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","e0ae134669b749bd27ead3ca4ca4605b"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","c973812a706a4c606381d72c109de4dd"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","479320c8bb424236bfd6fcb44c9d33e2"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","9a4015be3155d62938cac0ccb2d234fb"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","8f428b8a9a648a28a400826ebda78f53"],["/2024/04/10/C-saolei/index.html","aba2acadd80c190b94bc4bdac6f8478e"],["/2024/04/10/free-yuming/index.html","bd17f3ac1a3b51d2657bd7d6398f2267"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","7b02e5364af17f4ae55f35b7612f6dac"],["/2024/04/21/kw/index.html","0268db51b46910bbd2bf6b7229582dce"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c15b9d0cf84f5ac456d629364ceffa60"],["/2024/05/12/music_download/index.html","161200225645de76caa24aeb6f92449c"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a91b6bfc63e073bacd6b96d1dffc838f"],["/2024/05/25/Vercel-Typecho/index.html","cc04d501154f660b094b9192f67d0eba"],["/2024/06/02/website-all/index.html","a37b559d069cfdfce7a9f602c4188a05"],["/2024/06/17/tools-box/index.html","6649272b2eee0957893f3e2acdb1014c"],["/2024/06/22/biibili-zhilian/index.html","292eb323b5b69c5febc20295b6b45263"],["/2024/06/23/sqyy/index.html","fbd55b0d5355bbcb3e6751521a923b59"],["/2024/06/24/win-chachong/index.html","91bffd392a67b856f552f79c83ce60ac"],["/2024/07/03/dyd/index.html","2e3f846d1dfd4b99735f94dab59d8e39"],["/2024/07/03/geospy/index.html","019b0626d58337df335e0424080f7043"],["/2024/07/16/TuneFree/index.html","671ca39fb5e25054f784404d5435f37d"],["/2024/07/16/pdf-repalr/index.html","caf3bf25ba775749fbb2d3573057ccd8"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","5cb4c013250491d5b0412704fdfaeb6c"],["/2024/07/23/an-yuyin/index.html","770679e47c1db1f1168b4d10dc30f21b"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","7007eacb27ad6bf93fa572e0caa2c00c"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","3ee0e288bf8592827015a19fdb5d3db7"],["/2024/07/24/win11-win10/index.html","f1bf158a9345adc130873980b2864005"],["/2024/08/03/wu-muose/index.html","c2a4f4b1d4240e7466569026e11d2fce"],["/2024/08/04/ab/index.html","8f8a8484948343fec0d81c5210f3e675"],["/2024/08/25/mp3tag/index.html","b51003ffd7dec24ad9bb4f4936ac9e23"],["/2024/08/31/cf-words/index.html","276c85d67e39d795cd223cb5c75dedd9"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","ede1e8123e42bdd581fe09b35da02078"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","b1bd0f8bab3e301c9e52cfbee369867b"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","9f56def5b71d344f855f8e1c3a472549"],["/2024/09/30/123-liuliang/index.html","9c74d682dec4ab54a5226fc9c461dc7d"],["/2024/10/01/app-allmusic/index.html","43398390673fccda1b381268b4bd2911"],["/2024/10/01/win-musicfree/index.html","244fba37c1bf623eab09fb3dfdbbae4a"],["/2024/10/02/fire-xinli/index.html","acf82a7853867fefa0b55426a6942431"],["/2024/10/02/win-wyydaili/index.html","23c7bf9f21d3749faf3c7714d5348725"],["/2024/10/14/qq-histort/index.html","71d7fbe059bf2c1cbee581aeb54bba5c"],["/2024/10/26/suijip/index.html","5c3e38937e78663fb1a744f686f75814"],["/2024/10/27/ai-tlp/index.html","c13b15ab0b3c530b0918d7579bc10cf6"],["/2024/10/27/cloudflare-cfff/index.html","c1375556b41e1da9634505ddfcfaf3e0"],["/2024/10/27/tvbox/index.html","343cd28f9cec8da1b510519c54a9cda0"],["/2024/11/20/wyy--2/index.html","1293d397d9ff9ed012ac2b0466fd3f14"],["/2024/11/23/fjyangcheng/index.html","0ecaba422772658288f5cf6871e6d545"],["/2024/11/23/office-ltsc/index.html","995e7c5cf58211c1c706804fcc33ff82"],["/2024/12/01/aitiaosuo/index.html","a98a40bf15f53bf65cfe289cf0a78ef9"],["/2024/12/01/yjx-study/index.html","036d4dcbbc86fc9666416588d839adf2"],["/404.html","e636d406f912ef5e12f3d8556f1d5206"],["/about/index.html","895fd1877754dd98a1c22868019531a5"],["/archives/2024/01/index.html","8e0ec881ced8ed049ed52d2a33149782"],["/archives/2024/02/index.html","7e3c09f40b0a3aa915a7b468ff0e9345"],["/archives/2024/03/index.html","c76501ade81c64759cd799ca5846ac9f"],["/archives/2024/04/index.html","39656ed036b5e41e495421cc0271b7c4"],["/archives/2024/05/index.html","75cf47cefe2470cc7ad25b7d66fe6cda"],["/archives/2024/06/index.html","da5961602f575445f6c6c23b746f7fe2"],["/archives/2024/07/index.html","9321ed77f24d822dc5c97192ed5eebe5"],["/archives/2024/08/index.html","64dae20e8e02c0a446c8487bb6a74da7"],["/archives/2024/09/index.html","093dd60e03dbaba21f27e0f229e50567"],["/archives/2024/10/index.html","62db88c6370a8b977e885989c25d16db"],["/archives/2024/11/index.html","a74cf404c919e755d782b605d7f4395c"],["/archives/2024/12/index.html","054016c7e73bcbc968c1a9dbcdfbd51e"],["/archives/2024/index.html","1adb5bf7576d6db7d3d842dda1f7ade5"],["/archives/2024/page/2/index.html","2275acf8aeafe222c0218cac8b98cfc2"],["/archives/2024/page/3/index.html","b8579882027853aa4702073d3210c456"],["/archives/2024/page/4/index.html","f20d4ec6cfb3560d5aa471f94ec36ed7"],["/archives/2024/page/5/index.html","e12fc818d8835e8d00fab489d308dd51"],["/archives/2024/page/6/index.html","e6a19d35ba894cd5da9b24ae4ec61832"],["/archives/index.html","cd5525380277bdf6abc059018d1e0947"],["/archives/page/2/index.html","3a66f9ff7bcfda2293ae45252c653195"],["/archives/page/3/index.html","9016272f647895d04acb7e562fb74a32"],["/archives/page/4/index.html","fb6b807835e90970a62cf5696560e5d1"],["/archives/page/5/index.html","c280e389902a0db1983ea37213ae34f2"],["/archives/page/6/index.html","bde49e37cda7b53f309dd339b5d7065e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","9316d43b08428dcb9a48253c301ab78e"],["/categories/index.html","4b4cafc8c8257fcf1654a3fef3f0ad5e"],["/categories/学习资料/index.html","bb88b7f48c6e30db48206433a66d9ae6"],["/categories/安卓应用/index.html","52a6750056d7057aad920e36a6f63896"],["/categories/实用技巧/index.html","244eed9f268f383f66501ce2906f34f8"],["/categories/实用推荐/index.html","4d8558ff6df669b7a9ea7577df55ccf3"],["/categories/实用软件/index.html","f2bbf12791fa29656183c75fd0b8ed39"],["/categories/实际生活/index.html","394615d6379912bebbbd5aab9e219b15"],["/categories/影视资源/index.html","04403c09b6e4a782b08e6a0daf6aa3bb"],["/categories/心情随笔/index.html","e54addd7e2865af906f776e5167e8f31"],["/categories/心理实验/index.html","fc08f30cce77bb59124cf506278cb4f2"],["/categories/技术分享/index.html","f6c3000037465c47bcaf00c29ac9e6d9"],["/categories/技术教学/index.html","647ccf52ca6e56a5a14cc7ca7d9523e8"],["/categories/探究所以/index.html","daab3b128b1841dae08554380fc67fa7"],["/categories/生活方面/index.html","7ca67e9fa1d29c6395cc59cc66b06835"],["/categories/硬核科技/index.html","46198b6396de6bcf046b95026e5408bc"],["/categories/硬核科技/page/2/index.html","15dcaa01ee58ad6af706ceaf48d38613"],["/categories/编程语言/index.html","b2657732ab3a9c07d353d04864c650a4"],["/categories/网站建站/index.html","009089f021f4124844207709e052a6f5"],["/cookies/index.html","e7a86358736d01235ba0f3b420c0b42f"],["/copyright/index.html","f833f1463d0cb606134a5758012b53f8"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","c04ba018e2e7f430d3490b79112fecd0"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","a5215ed506dbbb3dfdd62e1b3255ad52"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","acaf07ec6299ed6f2b57f06271ad3471"],["/message/index.html","390d3354e528ecdbd34d2cdceaedb45d"],["/moments/index.html","a460cea6dc6cd29eb609d422a7ab2dfb"],["/music/index.html","8b821038b090a9e6a9f3be8009190852"],["/page/2/index.html","63dea8a6b0cc2e290f30375b2f0466a8"],["/page/3/index.html","ee07a8c9054beef84eea18e06b1bfcc5"],["/page/4/index.html","9ae72db4899013153e533fef7390cea5"],["/page/5/index.html","d224914933bb987aedae33a833af328f"],["/page/6/index.html","9ba43760ab722d57408d6cfff229c9f2"],["/privacy/index.html","ad6e87a8d02731cebee79b58042f815b"],["/recentcomments/index.html","6ab8cbfe9c3700d5b55e0c1283411016"],["/service-worker.js","ddee2eca2f1567aa58bbb6f0a679ec3e"],["/sw-register.js","66d2cc797b764d53ab8c1d2221611ee1"],["/tags/123网盘/index.html","f44f19cac00556feae1c43663c83de77"],["/tags/Ai/index.html","368eb2b2195f72631273204d12e1fc58"],["/tags/C/index.html","7db268354079c40a8d6d1ead489e6b25"],["/tags/ChatGPT/index.html","473633d630a260cdc1cc8e0075044099"],["/tags/Cloudflare/index.html","e1f4e52cc254f83dfac497b3d7468143"],["/tags/Markdown/index.html","c2d83c729720e3a2f75ddcb2251ba36b"],["/tags/Openai/index.html","4866be5d85b6f93359502419cf5b148c"],["/tags/QQ空间/index.html","60499fcdb60d501637417b7bc72a6cf1"],["/tags/VPN/index.html","2be17d29877390cfb74f36ac06d97dc4"],["/tags/app/index.html","23c6b574cca8eea7cf1eebb71549ff98"],["/tags/hexo/index.html","c7e6c5445fab2c7cd492e9931ec8ee8a"],["/tags/index.html","fc91c6d1cee5ad164aab533ed5d8a71d"],["/tags/works/index.html","cfaf5cf7605443694fd422f9d400262c"],["/tags/信息修改/index.html","81302559f7961001f5c1bceb2a9ecbe5"],["/tags/写作/index.html","d2c0ac75568737bc1b8b0452b30cd1c4"],["/tags/分享/index.html","81f5696e131a589de6eb812589fe4992"],["/tags/吾爱破解/index.html","2197b19dddc32a5884aed2eeba87ba02"],["/tags/塔罗牌/index.html","694cdf2dc9cc4e6f2489a77bb73fd7f5"],["/tags/壁纸/index.html","bd4b1eae00bc63174f58c033637793f1"],["/tags/安卓应用/index.html","5ec84bf6c98922c87b539bee3003ab2b"],["/tags/安卓应用/page/2/index.html","5540c5957b5fac5373070bd9d29b4547"],["/tags/安卓软件/index.html","ee55b16d24f44d41e4e3873ca644e2e4"],["/tags/实用/index.html","167a59f97219baf1103d23459125643c"],["/tags/实用推荐/index.html","2a26db77de58f8c7192c1433088327be"],["/tags/实用推荐/page/2/index.html","5a36a9f7075f8adf3d5e7c2b5f8d6151"],["/tags/实验/index.html","4ffffe49b06b40557660e6973b6b4564"],["/tags/工具/index.html","57879b4bbc07eaec88382106328fc2cf"],["/tags/工具/page/2/index.html","9773cee8f87f1d580d10f89cc57dae8a"],["/tags/广告/index.html","f4e7edbea995d9380cc5ad75df3446c3"],["/tags/建站/index.html","284cd3afdf70d90d798e16aa3218f72c"],["/tags/开源/index.html","c68ad8eefdaf6dff7a19eb3deb6464a0"],["/tags/影视/index.html","d62d73ab390c626aa78a80a38e0860c6"],["/tags/心理/index.html","95f0ae19f4663205e6c97dd40c226a46"],["/tags/思考/index.html","83101550594d26dd30ceb0962cb9a2a9"],["/tags/技术分享/index.html","f23b1509e60f0b2911ab70abf3642074"],["/tags/指令/index.html","88fd57d7aa23ef00f0b7f891e454609e"],["/tags/探究所以/index.html","bc0144b5df10d598952bbcfb8320a228"],["/tags/推荐/index.html","6d4914bf2e3bd486a4cb2b23a7b12c63"],["/tags/教程/index.html","09ff091a71d9c7808444e5f031f1e6c8"],["/tags/文字语音/index.html","c427df804c464395d71cd396dee76d24"],["/tags/激活/index.html","63794d9637eae6499680811e048917c8"],["/tags/班级/index.html","b9e391150efff913dfe4784602590006"],["/tags/生活/index.html","f194aca35a83120d805221b1824bd342"],["/tags/电脑软件/index.html","9bcd12612b4f72281fd9d0495d901037"],["/tags/电脑软件/page/2/index.html","0357bcc1b45d939a154af5482bdccc00"],["/tags/百度网盘/index.html","469547f00021e278c1b84f1529cc6c90"],["/tags/科幻科普/index.html","4c1c790b86c86490ae05ec7fc651bf77"],["/tags/精选网站/index.html","aa98ba4b0b2daf1fc69595ad0fe2961d"],["/tags/系统优化/index.html","afdd4be08c6bd0f3e101c7e8381324ac"],["/tags/编程语言/index.html","af48af69a6b7ced033f86e03df2c72b5"],["/tags/网站建站/index.html","bde52516804686e5ebd9d6e3cb65595f"],["/tags/网页精选/index.html","295a6115d0bf9003b91d3ca20dd15bc2"],["/tags/脚本/index.html","4afabd673b62c4545aa69a59ed3cbd2a"],["/tags/节点/index.html","6bb688ee96a8f0538fe468cae21a3a8d"],["/tags/视频/index.html","69e83f63957daae4f11366f72b3a1645"],["/tags/计算机/index.html","a1d751357a8c0f57036b3c9c813c7674"],["/tags/记录/index.html","50a40d7c97f26f4d91ce4b4d78abe40a"],["/tags/调查/index.html","d3ddfc91ac90b2bc30475df3b8098e83"],["/tags/部署/index.html","fa8c0e5c51b0712e001a826d2c545739"],["/tags/锻炼/index.html","fb0f36a0b709f8075936042858d77a0c"],["/tags/随机图/index.html","5c0ceb80d34d2d32d8fd9c72b942cb73"],["/tags/音乐/index.html","2c9ce01fd99ecaf2ea5a3bd13e41d0b8"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
