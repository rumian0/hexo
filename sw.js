/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","f97ce715ca48b7f9b9cdf806ded4c2cf"],["/2024/01/22/Markdown/index.html","df64f0e174928b5cd8f38033e01082dc"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","3e894c12cf39ebbd7ea87e99e619156e"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","430ea7f94d93e4d9a1266e48db4ec6e8"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","ce552903f2736eadc71efcc76b74c76d"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","693491b216d703aeb476011dd6dc9bbd"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","beb425e5a4a165d3d67de6641bd92345"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","f6aa0f3ee8ab37ad9b8c8f3da0949539"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","c91f7761da43c5d14b59bafd6b563664"],["/2024/04/10/C-saolei/index.html","c928e930c78218a84e962e9ce3251f04"],["/2024/04/10/free-yuming/index.html","94fc59f937366bfdc165141e108f021e"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","4c05e09f20d48d7115c9fa94fde975c8"],["/2024/04/21/kw/index.html","8d3611365ca313661dce636b942cf1e3"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","12ee6620a8becebd67444d88533f94d4"],["/2024/05/12/music_download/index.html","a98126c5eacb8b1e9dbb494a4bbfee51"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","caecce692582884c0fd38145fb96a343"],["/2024/05/25/Vercel-Typecho/index.html","1d69d6e4f067c8c6338f3254dd612150"],["/2024/06/02/website-all/index.html","f69e2e18d35de49b2cbb67aa2eb93ec5"],["/2024/06/17/tools-box/index.html","add5295534b50f0b74f9d6a185446d8e"],["/2024/06/22/biibili-zhilian/index.html","7ddc61dd31da8ab5909e638dad19b75d"],["/2024/06/23/sqyy/index.html","774877972cc497a5c52e2068edacd7e2"],["/2024/06/24/win-chachong/index.html","3f9f2460db1d377687ff2f8460f5a618"],["/2024/07/03/dyd/index.html","da88b8f1ce7ab2ab80e81c1187f2d6f1"],["/2024/07/03/geospy/index.html","6756aa30b631d4ecdef17fc4d966fece"],["/2024/07/16/TuneFree/index.html","54d93df05607c61b8743e4c38d6e5a5d"],["/2024/07/16/pdf-repalr/index.html","7fa5addc8c75b9d686e366016af7303b"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","79bc5d3025e5c76f298bc1beca5211cb"],["/2024/07/23/an-yuyin/index.html","71d73ec502da626f59780ae0f2b21d39"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","31dcda676cb158f1966b636b83318466"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","6aae2c724bb9e07003785296bf1456ef"],["/2024/07/24/win11-win10/index.html","199dd24ff2769289596c98d185040e10"],["/2024/08/03/wu-muose/index.html","f52930a92d99a9d6a38856699bed6a86"],["/2024/08/04/ab/index.html","ad44698320134b78b4ac88b675e0d29a"],["/2024/08/25/mp3tag/index.html","b18f1313ebe21d2d7d9cfc872691a3c2"],["/2024/08/31/cf-words/index.html","50f84b654713ba855f6243cb396076c4"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","410d72021a7fedec6100cb450e978add"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","8a6ecd0d3279eba1df3da1a12bb6ac69"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","0f2c25567dd97a4b071411ad2eb80fcf"],["/2024/09/30/123-liuliang/index.html","decb796bbc9151f1760bc05e0b8fc0b9"],["/2024/10/01/app-allmusic/index.html","b0a87992d0ad010b919768f6d4d745e3"],["/2024/10/01/win-musicfree/index.html","136bf675c909b5cc367a9c0c873bdc39"],["/2024/10/02/fire-xinli/index.html","55cb6d2da31897d0f7c2b58d365325c1"],["/2024/10/02/win-wyydaili/index.html","fb7cb47be4940916171147e7cfd03854"],["/2024/10/14/qq-histort/index.html","797001540dc3c0e0e60592a6706b7e27"],["/2024/10/26/suijip/index.html","97d7f03bb0de26d544bae5aba004d5e8"],["/2024/10/27/ai-tlp/index.html","7f29292c96ce074d2340a48af56be9a2"],["/2024/10/27/cloudflare-cfff/index.html","7c3953fe806524e4bb6d23b8d259f1f6"],["/2024/10/27/tvbox/index.html","80aafcda94ac91ff12d71f846bad6943"],["/404.html","86f23f26108b85ef57676eb983e42d44"],["/about/index.html","248f7c83c4847161a0beecc2238bfff9"],["/archives/2024/01/index.html","a96dad5bbd6170ca87359b191db6dcba"],["/archives/2024/02/index.html","ce489ce5ed22634e3f4dd5f6f33afd70"],["/archives/2024/03/index.html","faef28c0f854538aa9693804bdeb8829"],["/archives/2024/04/index.html","59adcd509961011a53ed1864dedfdd52"],["/archives/2024/05/index.html","cfdd0017f9edd15c31c1ba0090c3e02d"],["/archives/2024/06/index.html","64a922eadf4ccf2f96c6ef392b47dd9f"],["/archives/2024/07/index.html","8fcdefdbe10d75b6776357d59dcb9d27"],["/archives/2024/08/index.html","70d53f940fa80872ceef450881f39a04"],["/archives/2024/09/index.html","b3bf96d1314004f2512d3613c065f63e"],["/archives/2024/10/index.html","c094a0d9fc2280b1023611e289406100"],["/archives/2024/index.html","1bf2c0cc16cfca88547cd569f9bb544a"],["/archives/2024/page/2/index.html","dbf36fcb85003fffef6274ef7b96bb0c"],["/archives/2024/page/3/index.html","6c5a9a7127767cc6f8995265b1fd7876"],["/archives/2024/page/4/index.html","8210b1ca67252d662cda2939938a7cde"],["/archives/2024/page/5/index.html","40471f71994e3c34e29833533bc7c261"],["/archives/index.html","45c858fb657ade27418a05bb39d1ee36"],["/archives/page/2/index.html","b86594672e7316bfd0ea971c14649ad8"],["/archives/page/3/index.html","113c93f1a99352f3f145a3a0fdca2ca1"],["/archives/page/4/index.html","0988e38e3524161b63ae1747c2ed4824"],["/archives/page/5/index.html","7669d3bae6b421851540fbc21846a103"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","d80fa7147e3786de8d18d48036da5369"],["/categories/index.html","2087a430a982a18ca08515fb932eea77"],["/categories/学习资料/index.html","ba58c4f464a2f737fba9a8e3041f4108"],["/categories/安卓应用/index.html","b0cd6c0427d9dcc7e8a3498871e7eec8"],["/categories/实用技巧/index.html","c082739b15a8106f2b8116a7588fec6b"],["/categories/实用推荐/index.html","9cdf05890518db190ddd365e84d7be17"],["/categories/实用软件/index.html","6abceeb1a29b77d965f2870afd9d8c32"],["/categories/实际生活/index.html","768150d22b621d7d9ad9deaa2f55f011"],["/categories/影视资源/index.html","2e7372a3b2183ba99984785de6ef23f5"],["/categories/心情随笔/index.html","6b1a5d9ec4de2a338dc61f899d14ad67"],["/categories/心理实验/index.html","da4fd2f0f49fd6bedcdf7c54bcb33b1b"],["/categories/技术分享/index.html","baf6eb4fd86e7b2a009c14915a5d4dd3"],["/categories/探究所以/index.html","94b524f531da0ff101eb11b6a0df8c7d"],["/categories/硬核科技/index.html","8bf2193bcd6099bdea0202dceeffd57c"],["/categories/硬核科技/page/2/index.html","264a992fb234174db80b77c12e295ca5"],["/categories/编程语言/index.html","01afcdcb4904bf5cd31de3f49463842f"],["/categories/网站建站/index.html","3bc2fb13dd0e938641fd8bfba8377626"],["/cookies/index.html","54d6ae770022f6009b52092b5026167d"],["/copyright/index.html","2b29399b783cc50fec0087bcf3e9285e"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","234f6240946e3f44b933727222b0bc7f"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","c46bbcdc158427ce9df114f444e21daf"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","8d63f82b7050970e54f13f72798f37e3"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","e10bb0d0574b07b311a2092e496826b1"],["/message/index.html","985d38ac2ac4123d952bc9927543050d"],["/moments/index.html","44c4c9621eb675a54d85b2ae3a1cdd8e"],["/music/index.html","99f9c75cd9f910400225308d537bc0c1"],["/page/2/index.html","0a2a0d6e9db0b531814107ff1174144f"],["/page/3/index.html","83e06976fd831930f7d2d570d5915ca1"],["/page/4/index.html","3eb8f752b568f5eff656ab6cb907755d"],["/page/5/index.html","19678f4d5cef4c041ef17744c3d69796"],["/privacy/index.html","5f36b5756b29892db28306b3060088f3"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","5af15cd36fea5e255b9bfed736caffd5"],["/service-worker.js","9504989dc56db953e7cd43378b46656d"],["/sw-register.js","46b7dbb488f05bba89951eba09266c30"],["/tags/123网盘/index.html","d1b63698dcd66c505f9648765421c1ca"],["/tags/C/index.html","85360eacdae4c8aba79514655a3b7623"],["/tags/ChatGPT/index.html","160d05cb541242373429351d3aa10681"],["/tags/Cloudflare/index.html","181c4fb37d4dce0d5cfd85138e47f665"],["/tags/Markdown/index.html","a110bb608227cf5c1941438abff846e5"],["/tags/Openai/index.html","7f9ad7c3957d12ff3de450684a4a81a7"],["/tags/QQ空间/index.html","761761b1a439e759bacde5d308c683f4"],["/tags/VPN/index.html","f8859fcc847b9b9994dca6cb6dbb2af0"],["/tags/app/index.html","90a6c5d10708d321ec0cedbcce4cb9c4"],["/tags/hexo/index.html","2e6efaf6f8c8fa697a9a1def4c5b7432"],["/tags/index.html","b1a73ae9615e96401df2d8047c1c3a8e"],["/tags/works/index.html","6793e80d782a64c8beeb645d80236d61"],["/tags/信息修改/index.html","c02e0b4addeb07273d836300a1e27e8e"],["/tags/写作/index.html","7ce731f5764b552c93f2b8d2d05e0a21"],["/tags/分享/index.html","b4b70d847c8e95052e77b00b6d36e096"],["/tags/吾爱破解/index.html","4e74f6aabaafd9b7a0a57e99eb6ac2aa"],["/tags/塔罗牌/index.html","34d19a8395e54577cca9edab0294c868"],["/tags/壁纸/index.html","451ebe6bd4301b4b69312c3ea7c7e1fe"],["/tags/安卓应用/index.html","827d5630234e8246d1d642fa73cacbcd"],["/tags/安卓应用/page/2/index.html","0d36a6241d22b11880c00878794efd41"],["/tags/安卓软件/index.html","88e6e910789d40772227e6a344306e79"],["/tags/实用/index.html","73ed5a1419ef58e8b2c35cf2861f4f66"],["/tags/实用推荐/index.html","86f893df42f44dafe5c1d045f92ef361"],["/tags/实用推荐/page/2/index.html","a66addcd9fdbc91e4bdbbc487a8cbfa1"],["/tags/实验/index.html","01d0116192754a0a674a74e74cf5c85d"],["/tags/工具/index.html","a3af0e3bedbbb402e81c0524b97b250f"],["/tags/工具/page/2/index.html","d9983ca15b755984a54ae4d0080996bb"],["/tags/广告/index.html","17c67a92ab503394c31aa65248f18397"],["/tags/建站/index.html","6859c1ccd211a19e4f28675ff2c8e970"],["/tags/开源/index.html","5e95ae20d694ea35b66c716253047fd7"],["/tags/影视/index.html","ea25bb99a9dd9aa6cbd4da162997e784"],["/tags/心理/index.html","50ebc48e9c938a3a1981a389b5505226"],["/tags/思考/index.html","9f52268216aa0317ef6b7ef54dc3d3b1"],["/tags/技术分享/index.html","a47ee057b1bbbff140499f58c9d610be"],["/tags/指令/index.html","4a628bb96e5af3497337aed854f5ef21"],["/tags/探究所以/index.html","5c17252ea89a74ec299b00f1c3e383d0"],["/tags/推荐/index.html","38eb2b1da830904199bdafd3a9d73278"],["/tags/文字语音/index.html","60b3224a0ba1a3006336a8f02d97a943"],["/tags/班级/index.html","813e689bcdfaddf0409cfa290ef3f4b1"],["/tags/电脑软件/index.html","7f291ec71899e20de90f9aadd2c7ca80"],["/tags/电脑软件/page/2/index.html","70c70e49f6bb3136399f41087aa9a26d"],["/tags/百度网盘/index.html","495f8c4af4ad6e6c16cf80017d83f6b7"],["/tags/科幻科普/index.html","9f63daf676da9df1cdf10d7a0475a328"],["/tags/精选网站/index.html","497c0afa47578c8a142793a5ade8ae0e"],["/tags/系统优化/index.html","ea6918e733e9c9e090b5e9c2a490191a"],["/tags/编程语言/index.html","454bbe0bbc0a7f6490943b34f4fd05c5"],["/tags/网站建站/index.html","7807fe18270841d87260499e7d4572ae"],["/tags/网页精选/index.html","987e4e4bb90f52c809136fb57a1b6f1d"],["/tags/节点/index.html","d22dc38bfb7d1b1919f702f8159ebe04"],["/tags/视频/index.html","67aee0be0fca786ca6e5c212e0b10d13"],["/tags/计算机/index.html","5b2277a67beee9ec83589a014e37fb33"],["/tags/记录/index.html","bb3d9456507a84b9bf6bf8f613210c6f"],["/tags/部署/index.html","b29d934d33a0bd4ac80a44366ddab1a1"],["/tags/随机图/index.html","8c96a498707b8f6101ee7a4c22bd6ccb"],["/tags/音乐/index.html","a8774202d994ab2b3c16ab557fd15013"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
