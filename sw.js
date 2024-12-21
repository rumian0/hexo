/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","54660cb4d9958aa0e77ff45e00905b23"],["/2024/01/22/Markdown/index.html","d16d22bb76d6d6a6026b3ca060b7ca88"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","3c40905ceb258b7e6e78150f51fac80a"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","6f2162dc94304764d722cc9ace4b6511"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","946aa7e5e7f09626d24f720d78599b3a"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","029b889a29f4c06b85aac1baa66ed004"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","33cb1fc74d87ed3e6e255e6af56f5ac9"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","0060384b31f7be7bd35f942c00478ef8"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","c6f2560f0d45a755b621c03d1d80d884"],["/2024/04/10/C-saolei/index.html","f6d23477f27450d27250ccbbe395ef30"],["/2024/04/10/free-yuming/index.html","30af217ae1e3c5e9158c99470e373079"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","956dc034fe9ee1736a57b6771fb5c25b"],["/2024/04/21/kw/index.html","1b70f97954ce69f1636b6d128e6a3024"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","b58f2c5590eb4034220e87f4dfea8174"],["/2024/05/12/music_download/index.html","fe82aa6adb71ab670ab075f8f570ec57"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","5818dbf69ab475a3d55c4bb4bfdae905"],["/2024/05/25/Vercel-Typecho/index.html","7fc046859e3dd563e8d06241578b9e0c"],["/2024/06/02/website-all/index.html","036f75e740ba54525165522306ac1e45"],["/2024/06/17/tools-box/index.html","6871da8de8f8b6671e32e2fcb2fef5a6"],["/2024/06/22/biibili-zhilian/index.html","6c15fcdf412b744266b4ca1b9ad6102c"],["/2024/06/23/sqyy/index.html","4f43c7179a0d5ade4798f85058982a2c"],["/2024/06/24/win-chachong/index.html","5fb521850134479aae1fd03b754a5071"],["/2024/07/03/dyd/index.html","ff7a4da5fd843d5399fb7a472f8168e5"],["/2024/07/03/geospy/index.html","74f27cdacab9d450df4a800c81acfb3d"],["/2024/07/16/TuneFree/index.html","3b9e921699fff66d2ac800ac8a31fb4f"],["/2024/07/16/pdf-repalr/index.html","27691c4871a2a44b68be2322d9758350"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","20de518c39353372284ceb6199bc4e3b"],["/2024/07/23/an-yuyin/index.html","e3726857d0e5567ece2af38ea07c4a91"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","7a9d18ce61d260796d9f6640d8237770"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","d2373de663812441aeb10d29a492242c"],["/2024/07/24/win11-win10/index.html","6030ad510dfb5cd3e47f7cdd582e6d15"],["/2024/08/03/wu-muose/index.html","dd8af0e413c32af39ead23b421080150"],["/2024/08/04/ab/index.html","a1c2d06fac2936e83e3d13d3b89e6d97"],["/2024/08/25/mp3tag/index.html","3235f90dcf453a47bf1a4ebd0b6a623c"],["/2024/08/31/cf-words/index.html","6ea70d2e651db07c235b9dab7826d51f"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","dd2554365e8448bc5a6705a70d90dd9a"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","766cdf1edf5c9f5cea70fed018394b05"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","b2fbc6af79459ea858bc892156ef32f1"],["/2024/09/30/123-liuliang/index.html","e1016817e76da79c10696981e79a52fc"],["/2024/10/01/app-allmusic/index.html","c549a3bcdb64312676e70b345912a799"],["/2024/10/01/win-musicfree/index.html","8c18a677d523d1c14a5207955f52e7da"],["/2024/10/02/fire-xinli/index.html","068c8d30301392f2a8612fc504fd9054"],["/2024/10/02/win-wyydaili/index.html","ed1f044dc2067783904137a09f6bbf56"],["/2024/10/14/qq-histort/index.html","314b40fdf6273832af81c01030f21318"],["/2024/10/26/suijip/index.html","3a1e713f91b50a1e4d75d98dd73b376d"],["/2024/10/27/ai-tlp/index.html","d890f8fda0c9e1365bc6307154e45563"],["/2024/10/27/cloudflare-cfff/index.html","9dae53bab7197a695cd059cd561141ef"],["/2024/10/27/tvbox/index.html","a1bf9e9c8277657d7f75bdde526e7a36"],["/2024/11/20/wyy--2/index.html","f7713728fbef23e9f1739d66f24e27b3"],["/2024/11/23/fjyangcheng/index.html","55262eab6ead510dbccea6570b85e288"],["/2024/11/23/office-ltsc/index.html","25e0447964ff487ca3cfd55d36030347"],["/2024/12/01/aitiaosuo/index.html","694aef11b7ddf96aa95d08dde9b4a232"],["/2024/12/01/yjx-study/index.html","d00225a6d2a12a95d1d8e1b1f0387971"],["/404.html","eb7db52362b63e5260c05ce612b32a50"],["/about/index.html","073c6f968f5efa8cbd3c5051ea5909f2"],["/archives/2024/01/index.html","ec006330600fbda4b2cd15f79647425e"],["/archives/2024/02/index.html","5c8238dcba2823bafcb055ed62cc4466"],["/archives/2024/03/index.html","e708e79e8adbc8b5c74d72a832cf5fa3"],["/archives/2024/04/index.html","4c07a2383238bcb11717f5e139282405"],["/archives/2024/05/index.html","89cfdc6a5f4506d9b424c647300242b0"],["/archives/2024/06/index.html","5764949696d313e3cc254c38dce43f91"],["/archives/2024/07/index.html","681bab121baee7fcd6e624af58b0976c"],["/archives/2024/08/index.html","032f2d52650b2ed1ccb40bc2006e5609"],["/archives/2024/09/index.html","9d632941b90b374bbcac4df53c656bf6"],["/archives/2024/10/index.html","7e94eb24d51e34c18bdc03083f7baaf4"],["/archives/2024/11/index.html","fc6fbb96a74948c0cce8080472eea3e9"],["/archives/2024/12/index.html","8d7a94e66ca07102a23bd1f81cadd8ba"],["/archives/2024/index.html","923dafaa07098b538f17a06fd0e35b0c"],["/archives/2024/page/2/index.html","aa9367e0066d0159c2378ed1aaa07d00"],["/archives/2024/page/3/index.html","a07ae5c7566525d9c169cc0a7ce4f5ed"],["/archives/2024/page/4/index.html","17a585938d07247619d558b8ca4475a0"],["/archives/2024/page/5/index.html","5d312f3a37f3f46f0f7640adb6220811"],["/archives/2024/page/6/index.html","599e5ccc6faeb5f92a7eb68b3c7489d9"],["/archives/index.html","8842ae9dae77d4cc89add71b1beeabbf"],["/archives/page/2/index.html","b6df10b7787f49b024997334bdd3f017"],["/archives/page/3/index.html","fa59714f50fd0a33ddf1cbbd185a5b51"],["/archives/page/4/index.html","b91236cdf740bc493c2b1fde24da7c35"],["/archives/page/5/index.html","1b37f9b02c44b16e56bda2098ea95664"],["/archives/page/6/index.html","da7fcca9f2bf34d8e719e4162f317d7c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c510052669a736e2ee89cee11738385c"],["/categories/index.html","4eb10ba1a0e69629d357ea4b2a980af6"],["/categories/学习资料/index.html","0fbe7cfefe0047ed274832f581e667bc"],["/categories/安卓应用/index.html","cee5a57972663a04f62c4fb475daff00"],["/categories/实用技巧/index.html","b7c1317fa296431a54cc7719551c894d"],["/categories/实用推荐/index.html","c3cacda65536267260f1ea2578fc39c1"],["/categories/实用软件/index.html","fb0fef85409adb514d85242538263c7b"],["/categories/实际生活/index.html","2a1420f7d0be0f79a5b36ef9bf0df61b"],["/categories/影视资源/index.html","85cc6e31b6c995d3122e07e8190b3220"],["/categories/心情随笔/index.html","5e799c15eb13231b80039404676ec0c0"],["/categories/心理实验/index.html","b3a3516fd96decd1bfde396c795c471e"],["/categories/技术分享/index.html","a2c0bed89a9ad48a59c0fbc6e634413b"],["/categories/技术教学/index.html","9c8e6139f408597896afdce347822d93"],["/categories/探究所以/index.html","e184da91d936cfa95fd3f457f0a23ecc"],["/categories/生活方面/index.html","349b993f4d8f19432af4f4f730f99c86"],["/categories/硬核科技/index.html","0c8365b7cd71ae5c7d32f077aa41678c"],["/categories/硬核科技/page/2/index.html","74c540b2078861c5fd32711732490a04"],["/categories/编程语言/index.html","40feaf2abd44cee5c357b7b5d3fbf69a"],["/categories/网站建站/index.html","4391004eff1cdaf1362016dbc1f3c88a"],["/cookies/index.html","858ffbf14d073a663d17a771a16e374d"],["/copyright/index.html","e9148c40e685ca91ef51585893dc2ce3"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","977b37a0cd2d9eeb997f74da4b453ac4"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","ae74994bca2e94dc173b777d7787787b"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","54a462a42b59187f53b0f90a1a6423ec"],["/message/index.html","2f92e106cf92d9c73541ecd306b54c70"],["/moments/index.html","d1d86d4233deb57734cc0053e44772bf"],["/music/index.html","93af81679732207763cb4400de10e309"],["/page/2/index.html","d653ce6661730c6f79665fcf428a5764"],["/page/3/index.html","291cea5861a7c899e148fdb3b49c7ac1"],["/page/4/index.html","2f5ef1c8d7534ac7ad7693f77f188e1b"],["/page/5/index.html","03b4b20b836f37fb5d39ab73011f8cb1"],["/page/6/index.html","308926f6ae2f87069ca3b22cbbd817d8"],["/privacy/index.html","4b4be4beb490ea3529abb7cffced60ec"],["/recentcomments/index.html","be75fdace722199da85a7587475e14ac"],["/service-worker.js","36a3303afae7023c0076eb1838a6a143"],["/sw-register.js","1b5b4a57aac5d1a7a36dd8ad37b21d15"],["/tags/123网盘/index.html","779e5fc67c244bb487a4f70d96fac17c"],["/tags/Ai/index.html","f97b02feae1cf4477f5445da75daee50"],["/tags/C/index.html","53a783652879a66b7acc376070bfc4c8"],["/tags/ChatGPT/index.html","2052449dc1f40c828fcb47f2655bef80"],["/tags/Cloudflare/index.html","dd57b1e31d5b3d49e8fc494c4c2fb10b"],["/tags/Markdown/index.html","2c02cf5a2322373efdae1b57fd032e4a"],["/tags/Openai/index.html","8d7722b57dcd5c1956127afef0dbde78"],["/tags/QQ空间/index.html","eea0dedbe81d4f0d6c4692a3fe9083d2"],["/tags/VPN/index.html","35474fdbd2ee52d49a9df461dfc8f2a1"],["/tags/app/index.html","aa6c7c3fc0c0b9ee784eb895a93b5583"],["/tags/hexo/index.html","85a1d8e4aa75b5e84d61461e4f75a97a"],["/tags/index.html","fb1f462a72e54e567d7c355f3e53e712"],["/tags/works/index.html","2d8d4b10450f7c9ba84ec2a7a8a252cb"],["/tags/信息修改/index.html","e4d9fe2c565412c6757a8a3779a2a497"],["/tags/写作/index.html","a8977ca15a8df45ea4f80b544e27c960"],["/tags/分享/index.html","75b9e178304a12ec8f219498300bfe1f"],["/tags/吾爱破解/index.html","a6522858dca2231c59b8d51b2ae53cab"],["/tags/塔罗牌/index.html","230b3e98f226aef343e9e5a6efc8d233"],["/tags/壁纸/index.html","ba7c9bfb7dfa64ece54de351fb43c7e0"],["/tags/安卓应用/index.html","445ed43683f7991f889fc1a1fbbeac82"],["/tags/安卓应用/page/2/index.html","af4000f730f1e80081bdd38b2067e74a"],["/tags/安卓软件/index.html","5eadffe3e78a7818589bf520db174178"],["/tags/实用/index.html","7c0bcf2da953236ac61644cde3c14743"],["/tags/实用推荐/index.html","989164a0e514b2a52eaa256af73beb8c"],["/tags/实用推荐/page/2/index.html","8897b99655faba4240f4b6fb345ae953"],["/tags/实验/index.html","77148c180e9b0c3a7254b77d944b6f9b"],["/tags/工具/index.html","527a72e9b3b1ee87dfd867ffe9629c2c"],["/tags/工具/page/2/index.html","a98e3bf2d83b473e9519fabd9cdcb181"],["/tags/广告/index.html","8a6cd200e90b0e6c4fb0732afb7f6da0"],["/tags/建站/index.html","f2dddef1ebfe3489f3886b10dc5edb59"],["/tags/开源/index.html","228f8070986c02cead53d38b8b289c60"],["/tags/影视/index.html","1c598379a7b5d4aaa71522aabcd6c93f"],["/tags/心理/index.html","228f50cdbfe42397b2623b7d8b3537d8"],["/tags/思考/index.html","f3ab9344a20beb7436514fe5a7309881"],["/tags/技术分享/index.html","ad43a9444729aec794d188ef65671104"],["/tags/指令/index.html","e996a2ad8aef0561d9daae274e286be7"],["/tags/探究所以/index.html","7f09bb235be9ce7764347d308ffdc741"],["/tags/推荐/index.html","02ef9e27a886081c03ffb93c1daacb9e"],["/tags/教程/index.html","6df9f97a7474e1c338f351bb03377262"],["/tags/文字语音/index.html","c374167b38db512925bad423817fba7c"],["/tags/激活/index.html","79c16de3b94ce17e3ab1998b00e93bcc"],["/tags/班级/index.html","236db842e6f99de305132372ba36a6c9"],["/tags/生活/index.html","6780fc3849ddfa145b617e3b2067729f"],["/tags/电脑软件/index.html","98868051d72b89239a4917c29d7d89c5"],["/tags/电脑软件/page/2/index.html","b1439355cc9bb5537a35f5b2b550d789"],["/tags/百度网盘/index.html","fcdf99d12b4823eb973f8d29b2f9d9b4"],["/tags/科幻科普/index.html","25b07bc30ae146238f3a9e8c2952bc86"],["/tags/精选网站/index.html","07f02a48384a95000c6ab6ffa131400c"],["/tags/系统优化/index.html","9a5be4a588a86906037076bc9c305c41"],["/tags/编程语言/index.html","f7265d973f750bbb898c55ba4d442b80"],["/tags/网站建站/index.html","111338efc0b1f4df76da1a3d6d2bb8e9"],["/tags/网页精选/index.html","e19957953276108ac5676e642886f843"],["/tags/脚本/index.html","df1092955af3da3ef7c35660ccfbb71b"],["/tags/节点/index.html","e11f4a692563fbd12eb2c87c0b98b662"],["/tags/视频/index.html","e3a793fbedb7de90cad7749d71c27a46"],["/tags/计算机/index.html","80f10105d6bcb3e12d408465dfa3a763"],["/tags/记录/index.html","d64da47db3b6f14569dafcd64626e24a"],["/tags/调查/index.html","fa3dad84c826b24d7ece04257453f8a8"],["/tags/部署/index.html","aea1a7908fdd31d58eb388c7726f1b76"],["/tags/锻炼/index.html","bc57345e11f98abc99b3d80ab7e20e26"],["/tags/随机图/index.html","28987847a0adb2dfd5ea4654768358c8"],["/tags/音乐/index.html","dca2bab52074573bf8b40b421fb5d2bf"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
