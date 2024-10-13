/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","d25c88138755bc98b60a5219c563639c"],["/2024/01/22/Markdown/index.html","1615a8e6cb3f427cbc79825662efb80e"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","78b65fff4c600c06817fcf5f36fb2785"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","b5550f8c78f07ba414785d85a0b75506"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","b798ebf2748aacd67d04ad252c27d93d"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","e3504aec20619ec52a8c8763543d7c68"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","d3c3a1ddc151ca43a10da932eab12017"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","8f9bd19d35061913fdb8e44769b8bef3"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","ac1dc2e65f5f92ac10b0ae029b232e75"],["/2024/04/10/C-saolei/index.html","407f25cb461abb5c895744aaa4214e4e"],["/2024/04/10/free-yuming/index.html","84a74a9a52a6630494702c9ac0073897"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","a314f762040173494f92b0d6bf909d8b"],["/2024/04/21/kw/index.html","a45e14ccab4f74d22a85e774da835725"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","7962f3c83720b30643c35b4284d946e1"],["/2024/05/12/music_download/index.html","c80f38c59e5da78783c9649fa56a7cf4"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","1eedf14b3e63becd8f52c2f51ea4b882"],["/2024/05/25/Vercel-Typecho/index.html","aa7f166796c76022f32c746bcde950c7"],["/2024/06/02/website-all/index.html","eb643ffc619b816de897f177978d44a8"],["/2024/06/17/tools-box/index.html","9ee51a4b815647dd7975ed50a13beb58"],["/2024/06/22/biibili-zhilian/index.html","948ec610480def5cea918334fa99b3e1"],["/2024/06/23/sqyy/index.html","67ba55dac2968538f23a54d01d86c294"],["/2024/06/24/win-chachong/index.html","6fffbc938055cdaa35867567ea98d16e"],["/2024/07/03/dyd/index.html","bdc8f951e18ca4d7c5bc5bfb8fb0d4db"],["/2024/07/03/geospy/index.html","d361bf5f30ed3631e50192fe8394f3c5"],["/2024/07/16/TuneFree/index.html","08bd03253309bee9c7998d23a810d9d0"],["/2024/07/16/pdf-repalr/index.html","a139c9e8567801daee9bbfabd0e507a8"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","b2d3af474077e91978e172e1bb2dcb67"],["/2024/07/23/an-yuyin/index.html","98d847f5639936ba19eecfae1d20b5d5"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","f12be12a440c48c4551f7d9ad89a3df7"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","ade2874d62a989eeacea65cfb7dd2d4a"],["/2024/07/24/win11-win10/index.html","9b0a43e57a50a3fcb0a12a4f710219b1"],["/2024/08/03/wu-muose/index.html","6d43febfa9b6e56d4d6ecbdc97e79f54"],["/2024/08/04/ab/index.html","b795443ff7f1b1ef4cfca03ba55eddfe"],["/2024/08/25/mp3tag/index.html","8cd5ed4bac883b323436ded3b2ccef65"],["/2024/08/31/cf-words/index.html","a035a54c2f8755326169fa25f4105038"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","810f1b127edb84f7b142b8a454e9055f"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","c83848be2e8c444eef74a6e6e7e1e192"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","f60e2d3dfd1dc2429da76a0a56f5883f"],["/2024/09/30/123-liuliang/index.html","b2dfadde2a805bfa996103e502bbabc8"],["/2024/10/01/app-allmusic/index.html","8b52c4ffa4bf9c295cfe4e861575676c"],["/2024/10/01/win-musicfree/index.html","90bcf24504ba81cf67e191cc194177f1"],["/2024/10/02/fire-xinli/index.html","a1074b4baee7275f690c78dd23caf91a"],["/2024/10/02/win-wyydaili/index.html","34a9d875a0aad04f2e0803f327142286"],["/2024/10/14/qq-histort/index.html","c0544646348b3518b8a2ffbd24dc51b4"],["/404.html","a2abd81a35173ee76c230bee99d72246"],["/about/index.html","e44556958eb1e65a243dad4b7aa1cde5"],["/archives/2024/01/index.html","ef86701e5c622877f36db847aee8f5db"],["/archives/2024/02/index.html","e7c461ac459525976114399ad1e9ec48"],["/archives/2024/03/index.html","f18f9988cd6397f3fce5ec9e93110997"],["/archives/2024/04/index.html","719cf9ce7eb09609e5e4bec369d91c61"],["/archives/2024/05/index.html","70a583363a5dc2074dd08badcdd48695"],["/archives/2024/06/index.html","b7c77a348e94c01991147fe8842ad23f"],["/archives/2024/07/index.html","c420b5cde9e84e23f00ef2edaee1ac73"],["/archives/2024/08/index.html","c752053c5ecbc7211bb44f6c7a3738a0"],["/archives/2024/09/index.html","55ac2a44aa6c3a7b94350bc8d4852f67"],["/archives/2024/10/index.html","b704531725cc0994edeb026a42f51505"],["/archives/2024/index.html","f15e0af140d0bec4b27c02b590f0b314"],["/archives/2024/page/2/index.html","b74076bd1589a90683938831dd827a2d"],["/archives/2024/page/3/index.html","325d61c4cd066dc01901e32836e755ef"],["/archives/2024/page/4/index.html","7c8ce1e703564ca058b7021d94ebf87a"],["/archives/2024/page/5/index.html","abb095f487eff3b4d9210c618fc45b75"],["/archives/index.html","119a2700937fe08c552ad5343f013713"],["/archives/page/2/index.html","df186c882d30a721baa8f9c5ff2d8de6"],["/archives/page/3/index.html","4cea896dc7ace56eb5011a8554fb0f3c"],["/archives/page/4/index.html","fd5aa87cc38eb347b3957eefbe696cf6"],["/archives/page/5/index.html","4eb1b837f5dc3b3480c79bb427668892"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c8a3ab89c410b6d5e305ee789142bed8"],["/categories/index.html","f9147de90854e9d3a411ccaf7606c018"],["/categories/学习资料/index.html","0a48ddd869ff9a80685eb36233d347a5"],["/categories/安卓应用/index.html","33096674df0ec8125a5b57d03cfccf75"],["/categories/实用推荐/index.html","dfdfd393f149cb330bcf618547dd140f"],["/categories/实用软件/index.html","60283a1c1d88bfa984b9a64c1904d498"],["/categories/实际生活/index.html","fc1a2941e917244199c32f969e8c6f17"],["/categories/心情随笔/index.html","2480061c7f5d9beaa5c9d28450aa16a0"],["/categories/心理实验/index.html","ef0d3b88aa32e7292e8f4f93b814c9e1"],["/categories/技术分享/index.html","13973175f2920fd417af7d87e87b8b32"],["/categories/探究所以/index.html","7eb20244c26061cbd3223f1e4182ce20"],["/categories/硬核科技/index.html","9177b8080089814b65010ec4288d7785"],["/categories/硬核科技/page/2/index.html","6d8d8da2be72160d1cdb7e4868149ba0"],["/categories/编程语言/index.html","16489798f7df69cb7c3d17bcce6c9a62"],["/categories/网站建站/index.html","d6f75f042a45ab1310fe564fe3aab825"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0a45457cf74baa18bb4132df82549b9e"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","7856115c018108151c5f79a759eca253"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","bc677c6016935f28c1fcfdbeeab10ace"],["/message/index.html","e0c7910155d65be07741b7312a758a88"],["/moments/index.html","6d9edb16f92e4809782c3cd9df7958ea"],["/music/index.html","aa5e0b91930b4e4b76d75a8ea7926f1d"],["/page/2/index.html","e4797afa2747c7fde9f490fae0b4a005"],["/page/3/index.html","2a15126418b01da93a3ff24bb93e939c"],["/page/4/index.html","8f2b27d68c3c129c2c8613a64306171e"],["/page/5/index.html","34816a4acbd96090ca6efdcb726d5ff4"],["/recentcomments/index.html","d4a3cdcea3126748d6546a28dc8b9dc0"],["/service-worker.js","2a4cdfe18146eaea79aac8d152a62c85"],["/sw-register.js","3e7b9a3cf3fdc1c41b494bae1e691f3a"],["/tags/123网盘/index.html","8f18ca7ca3171fb372ee0bebb3fc7b91"],["/tags/C/index.html","737b47586cf92ee9da7c1c0967901dad"],["/tags/ChatGPT/index.html","0303afbd792361a30d5ef04f09db8e86"],["/tags/Cloudflare/index.html","cbd1f308932d7b3384443731a350fd5e"],["/tags/Markdown/index.html","078e065131ed868a7b34f6ff0e172a93"],["/tags/Openai/index.html","acb1f0ceb162e7e84abd338560f636f8"],["/tags/QQ空间/index.html","1607f9373006fc050f34a2ae9afe9b15"],["/tags/app/index.html","ef3933efa48fe7bc7afd281a905a9c9a"],["/tags/hexo/index.html","e6e3b99a4db036de229cadb7ba8c53a5"],["/tags/index.html","633293f98e021480f1f5dfaa396e9c90"],["/tags/信息修改/index.html","df5e29998775e9da15e9c559b5c79156"],["/tags/写作/index.html","1e31760f8245feb8438c3da221e85867"],["/tags/分享/index.html","08bfc6f7a5bf310b5bb9663594c61275"],["/tags/吾爱破解/index.html","e806c89bf3c0d206a8ec800c67304f2c"],["/tags/安卓应用/index.html","f86b06dfddcbd98cc5489ff771d7141d"],["/tags/安卓应用/page/2/index.html","bdc7ec553172d0d952a189c85c78b626"],["/tags/安卓软件/index.html","3b7d0f58943a6c4943a9e80ddb04b612"],["/tags/实用/index.html","f2474b0fe5bf1546238c6f7403aefadb"],["/tags/实用推荐/index.html","7db3013567974576287b75ae072d8cd3"],["/tags/实用推荐/page/2/index.html","6639b6049e29e59670f82463e626ef84"],["/tags/实验/index.html","7ac7a30c268e3ec37ef23e98c0623e7d"],["/tags/工具/index.html","a375ff857989f269c56e7fe4aa4976ca"],["/tags/工具/page/2/index.html","84638a3bc65ebc21c16b468d7c77853e"],["/tags/广告/index.html","197bdb6d718cfba6913c572b25449be1"],["/tags/建站/index.html","bcbcf5825dc3e7aa332728bf137a462d"],["/tags/开源/index.html","1f13c4ce2f169abb5037eaa61877fac5"],["/tags/心理/index.html","7bfedcf42f1e68daf74830dcf32c7778"],["/tags/思考/index.html","fbce952bc35ccb574833639777a62325"],["/tags/技术分享/index.html","15dc18b6805b55d0d0d1bfec259c637d"],["/tags/指令/index.html","4c0bb9f514e39a38a1711840c081ba78"],["/tags/探究所以/index.html","d215c544f56b6ee09e89119a02b79855"],["/tags/推荐/index.html","78b7d59d385e229839655aa7bce70bd6"],["/tags/文字语音/index.html","4747ff5465a052d7ff23c18162fc1465"],["/tags/班级/index.html","76f510d477f772b58815b36faec979a0"],["/tags/电脑软件/index.html","db3953c6c5ea4731168b4b88d008e80e"],["/tags/电脑软件/page/2/index.html","1afa04e350cc87675bea803394e2f82e"],["/tags/百度网盘/index.html","d519434c144081f5d2b93f8b45e7dfd4"],["/tags/科幻科普/index.html","7410b120b0842feabb809f37cbdd4654"],["/tags/精选网站/index.html","0e98eeb1d60deba5169853148af0d63b"],["/tags/系统优化/index.html","cff96856cdfc837232dc0433d2ce8a20"],["/tags/编程语言/index.html","9213a9b9caff46364f32f2f1423b14fd"],["/tags/网站建站/index.html","0627d6984ef8da45291319564ad28eb6"],["/tags/视频/index.html","fd18234455348c7ac234765d3544b070"],["/tags/计算机/index.html","5b39a47a04a1a4fd126920fcd6953f27"],["/tags/记录/index.html","79a7507b334c018fea09311c8094db4d"],["/tags/部署/index.html","3dc13e50cf928ee03018098e30ccd5c0"],["/tags/音乐/index.html","53aa032173e295a0932d5b7ea251e6c7"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
