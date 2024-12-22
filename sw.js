/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","8df810e72717e282270799ca065b862b"],["/2024/01/22/Markdown/index.html","031cab731abaf09041d5539ce49550c2"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","424e2f37a7cc810ac99da43cbbf812e1"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","ccd6664d711f86b83154f4e650981a5f"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","304c9b7f399bdc6341333d0cf3486175"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","dec6a5e2ffae25c6700ead6b1f495dab"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","0f0ad1aefe767b2a6b9dad7c0fd5d3b2"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","f13c154fcf45331c906e2988d9e28803"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","5603f6b2cbed065d9a9b897e6ab10b76"],["/2024/04/10/C-saolei/index.html","8f125ab738d1c938be76d5fc6182c964"],["/2024/04/10/free-yuming/index.html","e3adcc8cd866489c0a2f0455c1664ac1"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","c608f9660ded5c6837d7d2f5e910dcbb"],["/2024/04/21/kw/index.html","baeeb1f526aad3e9e3ecdadb8fe4752f"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c5a82a38a5d82bc6c441d188adb5e1f9"],["/2024/05/12/music_download/index.html","01dfb286c22bf7af970b0eff524ac791"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","fffc80f139cfa9b450f34e4a14cc4dd2"],["/2024/05/25/Vercel-Typecho/index.html","1afb15deb1c58135d594848fdba228a9"],["/2024/06/02/website-all/index.html","e5f14b0ddcd5d575586e565ce8aefa6c"],["/2024/06/17/tools-box/index.html","4cb9b7e745909929f794ac70df2d7a3b"],["/2024/06/22/biibili-zhilian/index.html","78217a048c409936024160d9e1fc4353"],["/2024/06/23/sqyy/index.html","cdcd781775765a021acde0d690c22413"],["/2024/06/24/win-chachong/index.html","2cd45cbc4555eb6846d838f98b81d88c"],["/2024/07/03/dyd/index.html","9554fc00734ac7daa65e22773636db22"],["/2024/07/03/geospy/index.html","202d49575fefd29df7911ee21be0776d"],["/2024/07/16/TuneFree/index.html","6e3b635737d604269ebc1ca8029cc6f4"],["/2024/07/16/pdf-repalr/index.html","89a7b636de6190eb3fb65b1d836049c9"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","26cbe3ee590e6b30011b584748982ca8"],["/2024/07/23/an-yuyin/index.html","4d0e201a4d937041150bcc9ad9712f69"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","f09e5fd6d7346b611b22b381a6c1f5e0"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","66b47d6fc0f0e016495dcd672ac00061"],["/2024/07/24/win11-win10/index.html","d29b8e2c59273dfb56b63d89051432ab"],["/2024/08/03/wu-muose/index.html","0c96a5d8ea7ff8bec8640d8b637e26cd"],["/2024/08/04/ab/index.html","c0d5183f621522ccf17f60ae54df2fa1"],["/2024/08/25/mp3tag/index.html","32868e766bf0addb88e0385b622c9d57"],["/2024/08/31/cf-words/index.html","67b1558fca7b7fd058a6d558fdcef5d3"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","a60f876a4af6c1d1b56f85689facf9d7"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","560f581dfbdfc87ad716698c7106ff5e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","be2dfa45a7983a8e40187e862ee973d8"],["/2024/09/30/123-liuliang/index.html","cf6dd4cc65f23f0a96015164fe98ac9e"],["/2024/10/01/app-allmusic/index.html","2b3632d45ec85bb394bc7d6d2892217a"],["/2024/10/01/win-musicfree/index.html","b9e8aec34b27b425a3a8b974f012499d"],["/2024/10/02/fire-xinli/index.html","8030c5cdfd502df14a1f9b11d082b625"],["/2024/10/02/win-wyydaili/index.html","e1117bb396de7360e5eac7d42bc5f294"],["/2024/10/14/qq-histort/index.html","f2ab301dcf56d3349755fcf79604dcee"],["/2024/10/26/suijip/index.html","2f0d005c04227ef563422b19c65692cb"],["/2024/10/27/ai-tlp/index.html","e09bbbb375f0997c481038c962b8ec90"],["/2024/10/27/cloudflare-cfff/index.html","fa23d7aad67df81b619a7b7ad510cf6a"],["/2024/10/27/tvbox/index.html","5a0c11605877f694c76aed21004a2c16"],["/2024/11/20/wyy--2/index.html","d87e64afbc43b1aef1aba93dc89551e5"],["/2024/11/23/fjyangcheng/index.html","8d1f0305abc1eca974ad1f361ab8e786"],["/2024/11/23/office-ltsc/index.html","f5d9417b119d5241ded15df0d39c496c"],["/2024/12/01/aitiaosuo/index.html","dbd1b2b325169b46af44d8914f5f38a0"],["/2024/12/01/yjx-study/index.html","48549c57321f2c105771ee86082fd9ef"],["/404.html","678b98dc3280b7e4f2470de89ed4cbf9"],["/about/index.html","773a57b39d0df7e9a528291e73795e09"],["/archives/2024/01/index.html","be1f191c79354e6433dfdb648d4ddabf"],["/archives/2024/02/index.html","e624e8460b20c4b8458be0847fd70c10"],["/archives/2024/03/index.html","9df87542c654cdb620a609e873f83b43"],["/archives/2024/04/index.html","5229f264f580546db60cc12a721c56d2"],["/archives/2024/05/index.html","e6c6cb41a4d0d50aa7e3f99733506d22"],["/archives/2024/06/index.html","b21c0bb9b8cf455a0a20730ba26f614e"],["/archives/2024/07/index.html","7cd4e487df2da9e5c1410150362d0a72"],["/archives/2024/08/index.html","5fd071ac7f90b097d7ec36df3b153b2e"],["/archives/2024/09/index.html","a43fabe8d461db4e47a6a0099c1cdfc4"],["/archives/2024/10/index.html","6f59345f66b9b969fbe4153d8b9209bd"],["/archives/2024/11/index.html","86751ae5f1c9957a316a16cfeb342982"],["/archives/2024/12/index.html","8bbb82585acb5d3daf9ecf3d93dc8411"],["/archives/2024/index.html","e4edf7fe1ae09c7d51947a17f6be8113"],["/archives/2024/page/2/index.html","e7b1d959a3ec558027a1736f07ef9495"],["/archives/2024/page/3/index.html","7c2272965e794f6eea313af9257696af"],["/archives/2024/page/4/index.html","cb545bdf98c9a5433491799afd6bda37"],["/archives/2024/page/5/index.html","212eee067fc39e7e1553936c94c1be29"],["/archives/2024/page/6/index.html","28888ed23d69fa908b68b54a23653f63"],["/archives/index.html","fcb2558d272a37ae48a4e6a5c4f5f8d6"],["/archives/page/2/index.html","c320ccbd23a0f8b6a1a8e4f976ade0e5"],["/archives/page/3/index.html","1b6f4923a1cf834d9585ddf605669648"],["/archives/page/4/index.html","91a01825bc94b6adf074032c854205c4"],["/archives/page/5/index.html","83307035f936faf49307f330e372a297"],["/archives/page/6/index.html","b2f9dbec5f76c58f58fd30227abcd814"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","f7340259b3e6d161bd1edbbf2f6fbaa0"],["/categories/index.html","a97b8b9c0dd9b16487d67c815ab7bd46"],["/categories/学习资料/index.html","2cae2dd957d22ee5b2e34fd36d18fcbb"],["/categories/安卓应用/index.html","698829dd416c86462e5acbfeb27afdb8"],["/categories/实用技巧/index.html","5c738d471ef88e8802e342aaa154d2c0"],["/categories/实用推荐/index.html","59bbf0495a735c96c1c760bb1f7d3fc0"],["/categories/实用软件/index.html","3360d594042ec9fcd56a5bae2f67c8d8"],["/categories/实际生活/index.html","9b61637957df2ec3875ea27b4db94e4c"],["/categories/影视资源/index.html","30cab008742d0f536d9462fc877a142a"],["/categories/心情随笔/index.html","792c3cf40519a98212c47bf40a87c3fa"],["/categories/心理实验/index.html","d05bfa95d3800e1c1443da29441db660"],["/categories/技术分享/index.html","f38ea34709b735f4ceff2af2f037effc"],["/categories/技术教学/index.html","da87d9dc58cc9b0741d251dd54deccdc"],["/categories/探究所以/index.html","381706c38ae2de1b3bfe28b5bd23280b"],["/categories/生活方面/index.html","19b069c1d3dac767330c0ebfe3eb367b"],["/categories/硬核科技/index.html","2e55dee18de5a4f4e5f4e915c170788d"],["/categories/硬核科技/page/2/index.html","0e44ee92462d7b01c87810080afb41ed"],["/categories/编程语言/index.html","0c419799c02672525a3e961d7d929edd"],["/categories/网站建站/index.html","7b6f1ad6b326b264bac900c64e7daf11"],["/cookies/index.html","281f76243908051fac4ef99643f16799"],["/copyright/index.html","ded42d32ce98c6c69dd56708ac76b311"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","c3c0e6942c211cf73f2ef6510fc73d0a"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","58018a8534dc9f4e210e5679bb021c9e"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","cc7be9968223b9dfeef8b75768850496"],["/message/index.html","38c9cbb5288f3c5dafc32e601efddb28"],["/moments/index.html","17efacc9fc4700f7c4cefcd4b50e5cc1"],["/music/index.html","da5811da4ec04a8acbc99a682c4aa007"],["/page/2/index.html","541e1ef9bcd5d9b400924b07839db2ae"],["/page/3/index.html","945299a119ac4116b5a951e1d84944b6"],["/page/4/index.html","a99aa1fb4961d98b582e6bdfa920916b"],["/page/5/index.html","293340084fad7081f51e81a0d2759e41"],["/page/6/index.html","d1a937930855ff7b69daf1ff769a60e0"],["/privacy/index.html","b9b9d56802743d786d2d70d15d4ed9fa"],["/recentcomments/index.html","acfb1bae7a4f3695fef09a93990046fe"],["/service-worker.js","468d57001f1df305fe94d08fca6bee1f"],["/sw-register.js","76cb1573a57dc3a14212af928f68dada"],["/tags/123网盘/index.html","b0ec7a262c2e33b55176a0a5d2a006a5"],["/tags/Ai/index.html","7bcd96f848be4e31ae8410187c6a3809"],["/tags/C/index.html","e403e9d20564847509ca2369b3b67da0"],["/tags/ChatGPT/index.html","eacfc390bc2e590100e72d6fba064ead"],["/tags/Cloudflare/index.html","99edc2225f637dd5c2c1b9cdd96a26dd"],["/tags/Markdown/index.html","e9ebd45cbec5eb38e14d7a6f0c12dcec"],["/tags/Openai/index.html","15e9b96e0deae1ad2d677920ef13515c"],["/tags/QQ空间/index.html","a3e78953bfc4fcc6b1218d9451e5e4e1"],["/tags/VPN/index.html","23ea9ccadfa306ec7dbceb3217748888"],["/tags/app/index.html","fb97b94b4feb29715365164fcf812da9"],["/tags/hexo/index.html","b50dbccd6e10744a7e1a425f237bac60"],["/tags/index.html","555a7a2b4557225809a595e8a7f5c458"],["/tags/works/index.html","8e7b337af19ba1c57d8b89b9fdc441dd"],["/tags/信息修改/index.html","324b1e41a361db8bec6efe799304eb31"],["/tags/写作/index.html","a72c85d3afd3fae846887415a9c6d111"],["/tags/分享/index.html","34d547703fc744dd2e3110068e42f026"],["/tags/吾爱破解/index.html","0df45b4b4a7b54a0e0d405ee19b0dda0"],["/tags/塔罗牌/index.html","cbefbed31b576e96e2a24b154c19a96b"],["/tags/壁纸/index.html","58ca9f8d35e50ac3bf4b37f9e8ef4c9b"],["/tags/安卓应用/index.html","d748356e0f03eca2f22d9931e15f1480"],["/tags/安卓应用/page/2/index.html","2c11ecbb03dad605c23184b7bf7b9dd1"],["/tags/安卓软件/index.html","8cb7f85c2b8089aa529ef99fab8d4137"],["/tags/实用/index.html","491952b500f84335f195e8b6a938bc92"],["/tags/实用推荐/index.html","eb2bde29846500e211ce0c6d9c3de1de"],["/tags/实用推荐/page/2/index.html","d73d7e620ddaed12e7c246bea2b283ff"],["/tags/实验/index.html","9620a4b65742835744cb14cb6a7c40d3"],["/tags/工具/index.html","32e99f1fb64c09017fa3b39aaa7a87fe"],["/tags/工具/page/2/index.html","6b7114ed6961765a7ab8584f3bce385e"],["/tags/广告/index.html","fefa57b60abec656e017f84f6a946152"],["/tags/建站/index.html","d22eed4ebad9e79e4506234320d902b3"],["/tags/开源/index.html","84dc4fc76d3aec2a1874fee06c2b19d3"],["/tags/影视/index.html","e0f3b19652cea96374a8a797558a923a"],["/tags/心理/index.html","89e7409da627a47fb16305b873cc0019"],["/tags/思考/index.html","4be7b98fad0ced6fbae030b4b43ff456"],["/tags/技术分享/index.html","4a388c43be578588322e06f9a7c762af"],["/tags/指令/index.html","4fb0da19e6c941e6172a1996edbab1f0"],["/tags/探究所以/index.html","f672cd1385507932a7a300a3219f3b73"],["/tags/推荐/index.html","8cbc027043efd49b3f2ad7ca9a96abd8"],["/tags/教程/index.html","2fa1101397e19b37e162da47654907a0"],["/tags/文字语音/index.html","4f82b1a5bc97a672ee587c3c891076c2"],["/tags/激活/index.html","b4032edc54e9d1b6bbc10085715f014d"],["/tags/班级/index.html","f54f8a83ee226c7364a4e8a5c59df617"],["/tags/生活/index.html","c140f338c6adf35769aa9ed2cfa0bb3a"],["/tags/电脑软件/index.html","1ea8a561f87dd7ba813c772ba9710031"],["/tags/电脑软件/page/2/index.html","e8c57ba768e169fe4b37e940b49e43b6"],["/tags/百度网盘/index.html","11a733d4e256082ed1540411b5ccccc8"],["/tags/科幻科普/index.html","0309cb84ebfced4d186d5f24bbeb7b10"],["/tags/精选网站/index.html","3545acb0eb7757c1fffb232b246c1ca4"],["/tags/系统优化/index.html","24c97b844de2566b256f5bfa9fa75a29"],["/tags/编程语言/index.html","d7eaf3ddc4cc826ebd8d2df2b889c796"],["/tags/网站建站/index.html","c83f2c4cfb9150fd3c73e2205655e2f3"],["/tags/网页精选/index.html","13219e4d7802e4a5758486ee30728aa1"],["/tags/脚本/index.html","c2f6d64c15ff8633bde0d582a5c24605"],["/tags/节点/index.html","39aa84c44932cdd98827316140d1c64f"],["/tags/视频/index.html","243cf4d1f3b89d9606dcdb6f64f84ac2"],["/tags/计算机/index.html","31409a8e741872a456ee1dea33d1c4ca"],["/tags/记录/index.html","2f0e4b600ea5ccbe585697996872d8e2"],["/tags/调查/index.html","e24f57fb232f002ae962efc341993b93"],["/tags/部署/index.html","b077c0d88b07d012ff03bf35811668eb"],["/tags/锻炼/index.html","1332d86ab4dbfb3acec7db21ce791481"],["/tags/随机图/index.html","97ea2a83f723883bb312e27e026ee74a"],["/tags/音乐/index.html","8b3274539368143c19246254fc56f610"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
