/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","164cc26ea7e8125b9d2694f6d9e6733c"],["/2024/01/22/Markdown/index.html","310eba8b2e503581fd0a12d7c179b9e7"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","3a6d7bbdfe449cebf0416212a42c0fb9"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","78d63740c0d2fca6439d646afde5c028"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","9b0911372da0bff93f89be518ee9c16e"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","0cfc790a496b3a263fc2ea3491615b02"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","8e5f785ac2e5cb91db5f1ef7a6be8c9b"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","b1d5a477e9f41861f35ba74450e5fb33"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","b9179596722cfc5c290265d831df69be"],["/2024/04/10/C-saolei/index.html","6ab1a8619366177421505ac86158384e"],["/2024/04/10/free-yuming/index.html","929a7c6036facb350d34dbc514bee559"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","33e0606ad4dd5acab3b44fd6f417045f"],["/2024/04/21/kw/index.html","040874e7933852c750626cebc0e51171"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","752542793f56caf61ccacb6549ea34a4"],["/2024/05/12/music_download/index.html","f012f8a3a0d076247fdcfcca6f798b7e"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","41058a16d7a15586cc6ef4c3aaa39175"],["/2024/05/25/Vercel-Typecho/index.html","5a0ed51e1b3189fb5738816229d1317c"],["/2024/06/02/website-all/index.html","e541adac30c700a420c30d3af40e6cd0"],["/2024/06/17/tools-box/index.html","c37394e62c2c65cf783f22392923f66d"],["/2024/06/22/biibili-zhilian/index.html","f770ff560ca52fe6f6f5b41d6cc1c313"],["/2024/06/23/sqyy/index.html","0c1105f32caa478b2378d11a1b33b886"],["/2024/06/24/win-chachong/index.html","6ec06e196a374fc4d12292bbbe7488b9"],["/2024/07/03/dyd/index.html","64b1f945b84c75b27cf2428c382da5f1"],["/2024/07/03/geospy/index.html","4db3a22603b075437efd64c8b97ec162"],["/2024/07/16/TuneFree/index.html","62818e86b73b62e23eb36e8f6ca5771d"],["/2024/07/16/pdf-repalr/index.html","b224bd5f538461ea919ec3351036aa91"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","f4e303d4fbbaeb854f11eb74e7aed09c"],["/2024/07/23/an-yuyin/index.html","c7304415132ee547b7579e1fbd6de229"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","adbc4707892b15d5e9d576b8a7d98119"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","67e7758428c3652e67f5d52645a940a6"],["/2024/07/24/win11-win10/index.html","c817656c1c16290e1fc65ef24a701f56"],["/2024/08/03/wu-muose/index.html","b5f12e6aadda0b56be8560b642f21cf3"],["/2024/08/04/ab/index.html","08f46b1882e0e4e94b9c83ce22ffc92e"],["/2024/08/25/mp3tag/index.html","022f2c71d74211965406033a88d3594d"],["/2024/08/31/cf-words/index.html","1246151c4647f7d2226f668b8a7f8de9"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","de8cbf2c844699cd935de0ad8c140761"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","2faaaa23ddac8b69721ba89663ecd79e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","c9bf9797a843fdb0b9d676f481c37527"],["/404.html","9fdd45c9a07b438edde6b2c40a6ac83b"],["/about/index.html","81c098a2bf40e576da24be6783660211"],["/archives/2024/01/index.html","53691c4eb432f0ec79143043051ba1c9"],["/archives/2024/02/index.html","2980fedf128a12c459af8e7c72b4cb8d"],["/archives/2024/03/index.html","d86dd60f9847578a1a8dc520f558dfd6"],["/archives/2024/04/index.html","fec354ab82e63ad38e40feb0a1803435"],["/archives/2024/05/index.html","fad4cd098535ce3397ccc5579ad79e78"],["/archives/2024/06/index.html","679052f3af9ed382a6b35090686ae9d2"],["/archives/2024/07/index.html","afd76e7813a76a1e740beaacaa6e3f4f"],["/archives/2024/08/index.html","28b64ec4900ead1db4c683565e4a1e65"],["/archives/2024/09/index.html","b552bffa8046736959ebf28a413ffd74"],["/archives/2024/index.html","eb0e5161610348774bcd8c2df9f90040"],["/archives/2024/page/2/index.html","17480603ef6b81e433c72e87b10703e9"],["/archives/2024/page/3/index.html","d83b6ccfc7324d8cac5b212fc4bd3f6c"],["/archives/2024/page/4/index.html","f74303125104ba4382734253cc70809f"],["/archives/index.html","be6f06e63a9fbb3868bbee9c7813261c"],["/archives/page/2/index.html","a20533bd45d952224a083086eac21957"],["/archives/page/3/index.html","b128f4412e4ac6675426e6c984514a30"],["/archives/page/4/index.html","6e73346830b4740b0f649e87706c33be"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","d14d830f8150fe10aa2c2c728a6fb47c"],["/categories/index.html","913e8492d271f9b93c155b6dc368ce3e"],["/categories/学习资料/index.html","938e85ec19de10b8b1c27bd6c4a03b39"],["/categories/安卓应用/index.html","0a16d30454972a717c87568108428c57"],["/categories/实用推荐/index.html","87c3a4bec09413d083d62c3ecf3af604"],["/categories/实用软件/index.html","eb1260dd5aa96838c01630b74d805b67"],["/categories/心情随笔/index.html","9659dc82ba139ee4d69cc722c52e3c6c"],["/categories/技术分享/index.html","6249f6c5e9955a4af25da3426e34ba45"],["/categories/探究所以/index.html","b4cb6813e1edb8cffe29b1c940bba2ae"],["/categories/硬核科技/index.html","8476de46880811414fa2d256f1bee2ec"],["/categories/硬核科技/page/2/index.html","6642a350b696c4251ee4b915b578f0ef"],["/categories/编程语言/index.html","4001361be117525c1041c9be1d9703e3"],["/categories/网站建站/index.html","9d482f98d7402e33b89b894fac55f7f6"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8fee56ed285512c07613a545a582d56a"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","410ae22869c04779fc2f50da367eea69"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","f1644c2d38ee9e5231ecbd6fc6ac54c0"],["/message/index.html","84786b4c97a2b7443f7a8c5eadf5f00a"],["/moments/index.html","7ae039f9ad89d36d8cb11fbe459e2475"],["/music/index.html","4a3d9d73957d1880ad99c2190e1203fb"],["/page/2/index.html","329a37ff10ba06ebabb7180bff38b0cc"],["/page/3/index.html","ce059b543ffb0d82efa865f2b0f48460"],["/page/4/index.html","d0c994f3ed3604025014f7dca64ea327"],["/recentcomments/index.html","bfe7edda3fa74b5e68ccd8cece998a4c"],["/service-worker.js","2b830eb8a70a5ee6862c148e8692841b"],["/sw-register.js","08d0063b410f2dccdff46a6e3308d902"],["/tags/C/index.html","e0124137363daf05c2bd59a6db29bb07"],["/tags/ChatGPT/index.html","bd0f96819f6293180ecab4dd12d306c4"],["/tags/Cloudflare/index.html","a047e58a6d8ab6382d1d11cb8754ca03"],["/tags/Markdown/index.html","ef814b77af1a789de2cb5a7e0941e60e"],["/tags/Openai/index.html","22410df9bf05c2a0e6da93ca2c9c3fe7"],["/tags/app/index.html","5277ce4224c0677d9ff25f9e897bbf3b"],["/tags/hexo/index.html","dbe38789289ed8595e337cb6cfd4f4f7"],["/tags/index.html","9c4ee91b5609463e0e9a8acec883ace1"],["/tags/信息修改/index.html","40ad567463f49671b4a8d12fa546f95c"],["/tags/写作/index.html","36358f2cb287f4ac6083b0ed948ef615"],["/tags/分享/index.html","e8a892567652edee7188b90de5b561f6"],["/tags/吾爱破解/index.html","faf461dbf9570bc85d1312ae73d41509"],["/tags/安卓应用/index.html","c15caaf6918967da95046c94b47d1840"],["/tags/安卓应用/page/2/index.html","551d505343b6a50221a4a075eaad16f8"],["/tags/实用/index.html","59bbf2fcd920d93986083945ec30ebb0"],["/tags/实用推荐/index.html","23b73e11443bb40828f743cf2d85644e"],["/tags/实用推荐/page/2/index.html","6d11cd65ac167f4a4dfa46ea456aa68a"],["/tags/工具/index.html","26db0c4923cf0fcf55126b3c6b97d6dd"],["/tags/工具/page/2/index.html","9f9758e644d4e341498ac733b5c8541f"],["/tags/工具电脑软件/index.html","d5e97472212fb9d50554ee717cb8ab69"],["/tags/广告/index.html","a6665d7bd982df60288b6984a61afdf1"],["/tags/建站/index.html","e10252c28dc2c1ea9930193fb880190f"],["/tags/思考/index.html","2681a6a865d89da93b474f89d4736031"],["/tags/技术分享/index.html","8384a9be3a270fd7f2a0a902ba6e7aef"],["/tags/指令/index.html","c119af42832eb4c9de6e004b5a58709b"],["/tags/探究所以/index.html","f599092253d480c819f3e5bc8c3fbef5"],["/tags/推荐/index.html","41c7f07980790de1a3a217b11223c771"],["/tags/文字语音/index.html","b71b0b7ac6f1817ecf3ad94b6f49373b"],["/tags/班级/index.html","d94790694981ca380e11037163d18eed"],["/tags/电脑软件/index.html","0e019b6680396e9cbbd5c8141348fc63"],["/tags/电脑软件/page/2/index.html","3cdc660ec331f9a6779a19ab2d869734"],["/tags/百度网盘/index.html","dff8bafabf5576f43625c86ad157186c"],["/tags/科幻科普/index.html","32e8a1dbd76a48873dd4a022f04dc43f"],["/tags/精选网站/index.html","06a7e940907cfd75116637610b32f767"],["/tags/系统优化/index.html","4415ad9f43ad8c2d76eb229b25b3308d"],["/tags/编程语言/index.html","b3460757bdcb792a76ac82969aa2cb29"],["/tags/网站建站/index.html","18be3d0d0e644232777a702b0ecaed2a"],["/tags/视频/index.html","4af490e0992d2c0f6b7bc298c024c920"],["/tags/计算机/index.html","9a3160b43d92d09ba8bee9c70f359caf"],["/tags/记录/index.html","eb7019423136ef3de9581aaf53330794"],["/tags/部署/index.html","9439a57923f0ca9d9309d1aafec9b2b5"],["/tags/音乐/index.html","017de36e61015bddb45a865d190f5470"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
