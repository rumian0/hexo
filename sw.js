/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","e9b185e884fc6f96872f3ad61d1e805d"],["/2024/01/22/Markdown/index.html","6da3411aaf740b87d2321d14afd09574"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","8d1cb65c41c1557e16882c7b63a2a909"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","b229b83f0fbbe5962eebd6659ba53ca9"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","afb119149b0384631f20f6b9acfeb6bc"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","1f7538c0facb3251f185674b083fcd6d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","a567e7c344791218abdeed3e7ab79051"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","7b8f4949e2abff2ba4bb907b54ab0058"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","8fe5abb18a7970d8b7dd7dac947ee721"],["/2024/04/10/C-saolei/index.html","5c1328c383218c51ed00722a17269b27"],["/2024/04/10/free-yuming/index.html","66ae38883be27d25619fe955690bcf17"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","01a668b8a3dae05a17a9a146c37a790b"],["/2024/04/21/kw/index.html","b0d6a2dca9fc354133228203a59c662b"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","7bbf4f8d73596f7fb3e9003efad76932"],["/2024/05/12/music_download/index.html","ff054a93cc6ec6b34f5f6c391023dc3b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","13c9e18020e31a7d3623191934a19087"],["/2024/05/25/Vercel-Typecho/index.html","78c9960b1061da5e10d8df4064338d61"],["/2024/06/02/website-all/index.html","983e828bf4999fd8074bc81f23658b0a"],["/2024/06/17/tools-box/index.html","acc59ba9eb553be355fe8b2d50d8ad55"],["/2024/06/22/biibili-zhilian/index.html","e1e2707fa595651a4f0bdd68bf46d764"],["/2024/06/23/sqyy/index.html","b9473714614d7257fed5f6b057e5c78d"],["/2024/06/24/win-chachong/index.html","34fa2902ae0bf0c5be74d3c21f0ae9f2"],["/2024/07/03/dyd/index.html","1151b49c78a517889c96c0c90273c827"],["/2024/07/03/geospy/index.html","df50e2b1ee840e16ab96f443fb25f782"],["/2024/07/16/TuneFree/index.html","a39bde3cce71f60a0e51be312b9241b5"],["/2024/07/16/pdf-repalr/index.html","5bb3c02ce06ab26b1d76076319a60680"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","c6df9c7f33b2c1c7c062732ad2fec462"],["/2024/07/23/an-yuyin/index.html","678701afd562091a75bc84f3cbbb182a"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","a12180defb5ee4bed10222e1035eeff6"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","4c838e8a8a0487a2c6a6ba4755324793"],["/2024/07/24/win11-win10/index.html","e4ef2194abce25ea9f1aeb2d3a16a680"],["/2024/08/03/wu-muose/index.html","5b6bb884813dd63cc86d4dd0f275d360"],["/2024/08/04/ab/index.html","90d97029965fbad18f93b39c2e800f01"],["/2024/08/25/mp3tag/index.html","517ceefc4df4303329cc45f58afee798"],["/2024/08/31/cf-words/index.html","a53dab583e7e7759686786b755a3d490"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","cf96421765e024d4dde54f261d860055"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","57cead577e1a46e3f26e96360bfbda6e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","89607bba543eae5a463f167433460d6e"],["/2024/09/30/123-liuliang/index.html","19bc88378530dcf25d54ec1186a0bfd0"],["/2024/10/01/app-allmusic/index.html","5b69d174ba655e8b458a358aa29f5eef"],["/2024/10/01/win-musicfree/index.html","626533d908a2c7cb26affeecd87bb2d4"],["/2024/10/02/fire-xinli/index.html","8a02fa488e9cff21cbe49be0e43e58cf"],["/2024/10/02/win-wyydaili/index.html","8731035ae09f463035ccca4085d0ff57"],["/2024/10/14/qq-histort/index.html","aba70de9c81f2426df845c3379a5a206"],["/2024/10/26/suijip/index.html","6b2ef1c94d512d5b8bfa6fb78f455865"],["/2024/10/27/ai-tlp/index.html","2a6e6d506e6d49ff821486930941a63c"],["/2024/10/27/cloudflare-cfff/index.html","52e06fa33de2334a7aa0585e61132981"],["/2024/10/27/tvbox/index.html","94332eb3c16f05f9e8ee614cd43e9f80"],["/2024/11/20/wyy--2/index.html","c2552ac0478de620703a2d9397f5f1b0"],["/2024/11/23/fjyangcheng/index.html","5d8d897fcd6ab0765335edf61069fefc"],["/2024/11/23/office-ltsc/index.html","7cc1ecdc1be4ea3df51d2c5815d84bbd"],["/2024/12/01/aitiaosuo/index.html","08a26fb6a8bf5bae4761fae8adfa65f6"],["/2024/12/01/yjx-study/index.html","16be6505c09373fffee5df5ae3e809d6"],["/2024/12/21/riji12-09/index.html","508f73f6d2571e4d4e62f48fe7f6c55e"],["/2024/12/28/obsessive-thinking/index.html","5303e6caede149f8bb7ee9a342e990bb"],["/2024/12/29/yjxxx-essay/index.html","9eb25589c06aee3e3f1f23845434a3eb"],["/404.html","95230b7d903895e2061f045547b4aaf0"],["/about/index.html","de73a16c3c3484c792fa3c1b56e4a005"],["/archives/2024/01/index.html","c872f8bc4779c9cf03b41bf1b765ba64"],["/archives/2024/02/index.html","234fe63ca4dfb44a3d5431fe769ad0d8"],["/archives/2024/03/index.html","6e42009ac2be13c83138970137850abe"],["/archives/2024/04/index.html","4776ee84f49ee4170b93f20ae0a6f755"],["/archives/2024/05/index.html","323d6a2d7e1f4c42d9173e0f126715f2"],["/archives/2024/06/index.html","528cbe866a151ca0c70248938cf589de"],["/archives/2024/07/index.html","3e9bdbcf0516870ad420839575c911c7"],["/archives/2024/08/index.html","c794db5c94c72ac9030736de758aefc8"],["/archives/2024/09/index.html","23fc1140d8f640ee91f2df8539d06393"],["/archives/2024/10/index.html","88acf9175e2f174fd00b7b80fd31627f"],["/archives/2024/11/index.html","5840e60cf4940455f5ca2a15369c0acd"],["/archives/2024/12/index.html","6807ed006596f7d8c456d81856978734"],["/archives/2024/index.html","bfc95c05e1b2be6c0cd7716442902c5a"],["/archives/2024/page/2/index.html","c1c9bdf02362444bd322c75696d17cf7"],["/archives/2024/page/3/index.html","a1ae4c4ca040376a92da43c4d3873597"],["/archives/2024/page/4/index.html","03e8153fdd953c2be0089ace6bdcd8de"],["/archives/2024/page/5/index.html","4e7d4248aec377d3fa9e55981578944e"],["/archives/2024/page/6/index.html","ad1223075850d5e8aa9f6b52508efe83"],["/archives/index.html","e465ac5b4ca8e210998242ae040df7af"],["/archives/page/2/index.html","0bb9d1045cc7f552afbc086e24d65a76"],["/archives/page/3/index.html","1fb31f6d4feedc26b54954507d7b488e"],["/archives/page/4/index.html","290ab128db7c0190a2616dc2ad40061e"],["/archives/page/5/index.html","6021cbc82a12e91c24974366cb1dde0e"],["/archives/page/6/index.html","2991f0d26828f83d41d86acebf0c9e98"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","5eaff5b61e0124910327c41a009c91b8"],["/categories/index.html","6c5515f84c8f5975bffed117f34dd1dc"],["/categories/学习资料/index.html","1378a8dd2a44c61296949a5067bbf54a"],["/categories/安卓应用/index.html","922a2c073a7c420a2011c47e113dec72"],["/categories/实用技巧/index.html","f52aafc37c23584f276aa6aef8889f9b"],["/categories/实用推荐/index.html","4e4481c7b8b64faaeeff3a267e4f0d38"],["/categories/实用软件/index.html","233a7ec595a2bd4f5934f9d680e0f7ff"],["/categories/实际生活/index.html","565e6ac1fe24682da3a96d6eaa066f83"],["/categories/影视资源/index.html","68427de3dba0692966fe591e7223cb8a"],["/categories/心情随笔/index.html","98cb83df07d164dd6904d90478b3e357"],["/categories/心理实验/index.html","3e1c88c22500e5db206e8422d72ec1c3"],["/categories/技术分享/index.html","3070c48f5f6d93ed709e6f336ef93bc0"],["/categories/技术教学/index.html","b652d936487f3a080930ab1f0806a136"],["/categories/探究所以/index.html","91d61345ed0a235f4c0d7dc6e614db71"],["/categories/生活方面/index.html","789db607b5925272dc4095e8ca179a73"],["/categories/硬核科技/index.html","73e65041541806e27d2ab698fda135fe"],["/categories/硬核科技/page/2/index.html","27a37ceb7ec1056b9b16873bcf40b074"],["/categories/编程语言/index.html","071c0bf11c7e4b5353b27f80e7d261bd"],["/categories/网站建站/index.html","65bbdfb7ab05a18d72a77997c7f50d22"],["/cookies/index.html","7dca8b9504fb6f7bd73060e61e77cb96"],["/copyright/index.html","67806a79a12ed027d9e7191f4bea4bf4"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","1260f4ce23c10b4e03b2be9ce8ae0b12"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","6a0713a719b1dd143eb23aed183f044e"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","a42ec62930d9a4bd1e14ec41f3d587fd"],["/message/index.html","7e6dc98dc1c8e4b08681ef61f6728ecc"],["/moments/index.html","767cc734351f779b99b726218f9b17f8"],["/music/index.html","944fa7ac15d0d35f4607d7021757074b"],["/page/2/index.html","278661aedca8276543585f28497c26ad"],["/page/3/index.html","d097512f537507788eeed95ce185f6f8"],["/page/4/index.html","e350254bdf6694c8b4e4602cd9030433"],["/page/5/index.html","fecce700b9236d5b71796c7d5c31f605"],["/page/6/index.html","c15c37b018959ba47ccc32fed5b26612"],["/privacy/index.html","3a2a8eac5c7acb092a1a05d8e54bc224"],["/recentcomments/index.html","7d443537699ecd6b17ebc485fec65361"],["/service-worker.js","017dcae26e8afc6665958e253b80e4b7"],["/sw-register.js","9d186da0b3b50361fc0125f401cb3b40"],["/tags/123网盘/index.html","d8ce27973aedc10f4f6cc7ba3dd313cb"],["/tags/Ai/index.html","b074b387c5f37f4c58e6093800fa4f95"],["/tags/C/index.html","837aefd55804b5f74a1e8cdd244713c0"],["/tags/ChatGPT/index.html","fc945b55b29f9726a721c87491e66f12"],["/tags/Cloudflare/index.html","a91e0faa08a8a19cacfde8f7cf505bb9"],["/tags/Markdown/index.html","be187b1a1595f3d26f077a33a1757ef0"],["/tags/Openai/index.html","a1017e17399d69e15d89d717f7e0d040"],["/tags/QQ空间/index.html","904cfc24e17552a3a25ff57790ce09dd"],["/tags/VPN/index.html","10b3e5a60dd96279cf05ad715e0ba40e"],["/tags/app/index.html","41a09488de0aa92d7d820e5a9f28e02a"],["/tags/hexo/index.html","713eaba8c67af3c52ab27f56cebbfeb4"],["/tags/index.html","13dea4ea157d153a6f50a937037154b8"],["/tags/works/index.html","f8771f3e77a2fc17a72349aed131523f"],["/tags/信息修改/index.html","1c1993c6b8d07e1ee56a7f8c55b54e03"],["/tags/写作/index.html","147320dc66235862e53d3af304552471"],["/tags/分享/index.html","201cd6993ec313833433d4693174b1ad"],["/tags/吾爱破解/index.html","523a360b3917c1b235c4bbbd23d6e155"],["/tags/塔罗牌/index.html","2d2b68fc028329c2f64386cb7d13b9f3"],["/tags/壁纸/index.html","7587b3bdf0cfcabf4781bba92e98a94c"],["/tags/安卓应用/index.html","a8c38f887640960349319eda2c152244"],["/tags/安卓应用/page/2/index.html","3c31811d44fbaba193cb96cd932c9a4a"],["/tags/安卓软件/index.html","4ec33a109eacf5b262029d7caf2c447f"],["/tags/实用/index.html","b66773668f4684393c0f3ac7dd6d3ec1"],["/tags/实用推荐/index.html","d178a90d4f408d928c6a9cd7a325c1c0"],["/tags/实用推荐/page/2/index.html","a67c770e883f3fe0a5bb077bf39122d9"],["/tags/实验/index.html","7b080843e4f8476ca813a72235f7b981"],["/tags/工具/index.html","36c5594c4a07257d34e617a073e986d5"],["/tags/工具/page/2/index.html","39617f1d402194baf8805d570122b2e4"],["/tags/广告/index.html","d06435cd62b579ce13b1ae93aac7416e"],["/tags/建站/index.html","455f97ab01d9c9f443af80c4c647a1b3"],["/tags/开源/index.html","3fe22d617673717c3cdfb257f2aa7db6"],["/tags/影视/index.html","91a3a01bc19028f0bad47d8789a19b27"],["/tags/心理/index.html","0d4602b1d169e8d73db3cc29b9d7ea5b"],["/tags/思考/index.html","d8e6a3fd4f40f03f3ce0636c065c8e81"],["/tags/技术分享/index.html","80c7e724760bf016cea8f9ffa28db9f6"],["/tags/指令/index.html","1eaa9f00285d04079e35521745d06c11"],["/tags/探究所以/index.html","6569d6e2043bc407ecf56665d48d15ba"],["/tags/推荐/index.html","55370688ea69375097b84c1a4b0bbab9"],["/tags/教程/index.html","180325b2726f417a46744c3cf5e37d01"],["/tags/文字语音/index.html","6ae09f1e496e5901d3fed3a484d74d6b"],["/tags/激活/index.html","074957c95ff54dbbf3b653707af96989"],["/tags/班级/index.html","4b706d99851c3d490f3df8f1dd59869a"],["/tags/生活/index.html","fc33405dff744a5c353106c44605a48a"],["/tags/电脑软件/index.html","613bc83c451ae214c75fdcd0e36745e0"],["/tags/电脑软件/page/2/index.html","734a488cce3634aacc40b0cc6af1bce0"],["/tags/百度网盘/index.html","a80a67251445e12903cc79e09cb17136"],["/tags/科幻科普/index.html","324a4c8cd5fdc522a49c48bef5e528d3"],["/tags/精选网站/index.html","9814e463034997a9273085c355eaf9d9"],["/tags/系统优化/index.html","044e572a086c2e81ac2574ae697065d9"],["/tags/编程语言/index.html","161663491264d457766d0e0ce6f98bab"],["/tags/网站建站/index.html","03c892633d5b9f6accec9b120078746d"],["/tags/网页精选/index.html","8e564d1280e12f16368cefd2f1268e00"],["/tags/脚本/index.html","e15a1214695dfdcdcfcf055e7e53ad02"],["/tags/节点/index.html","5e17917b997d3a8e06b2535578f3c805"],["/tags/视频/index.html","581b502d9adee24bf92ced2338b8a2d4"],["/tags/计算机/index.html","fe6fd07b1485f2c562af36cbd6095afe"],["/tags/记录/index.html","dbd44a04bfc817dffbba520d3ab4546a"],["/tags/调查/index.html","95213492905aaafbd22af454526156c5"],["/tags/部署/index.html","09e69cad122822800ad22b323171a428"],["/tags/锻炼/index.html","8071cab383a7c7d32c05cb670aaccc6e"],["/tags/随机图/index.html","3b2ed1b2186216ea67344e6ea2becf8d"],["/tags/音乐/index.html","165313dde6bac7fa5a66c3ad62f270c6"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
