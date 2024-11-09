/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","658b21e8f3fa30cd4b0c84f3a715492b"],["/2024/01/22/Markdown/index.html","0958747fb34b42003cef2358149f6d1e"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","7f31a3003c3831a7bbf8aed7e8d917d6"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","7fe64eff48bba83f3d443621c436b97f"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","594425b4dc5c642f6766008ea27875fe"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","e53695bbf1f35c01ee25a28d0412017d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","14d8f2e2a4b358c535784bd81193ad05"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","0e8818c7b5ba0453b5a516e60f34dcc4"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","cc942956427eefb2a74d6574d0a76eda"],["/2024/04/10/C-saolei/index.html","ba78079546571e9bb986e1a1a6142d94"],["/2024/04/10/free-yuming/index.html","0303628897027ca8fa9d99f1a6efddaf"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","1dfcc8546d3b5e8d02e62bd688d80eb5"],["/2024/04/21/kw/index.html","9337ff0002b8532f4b4506ade16fe005"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","54290679a64d22e0758fa70b8557a2ba"],["/2024/05/12/music_download/index.html","192b6ff5de9045131d9cfa4cec2a10d0"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","b578d29433fa5f7c1c0c48b0b25270a3"],["/2024/05/25/Vercel-Typecho/index.html","f0a1a48a9f1acf0a08c28ed005a844c6"],["/2024/06/02/website-all/index.html","34c93fe24dac04b1bf92990cef7e8468"],["/2024/06/17/tools-box/index.html","8a11b3a452eba4cbdafa848011e44f91"],["/2024/06/22/biibili-zhilian/index.html","5c5acb227edce8d358024b833f6cbc43"],["/2024/06/23/sqyy/index.html","04d5882cf7f8314e8f762f9c9a4dc2b0"],["/2024/06/24/win-chachong/index.html","4ea2198522b1d6c192808aa1216f4c17"],["/2024/07/03/dyd/index.html","eeadb7d0d83a314a83204fc33852e499"],["/2024/07/03/geospy/index.html","4aaa9d5bcc5e362240b1fa7703694882"],["/2024/07/16/TuneFree/index.html","b5baeaf4c29015116f3f814efea15766"],["/2024/07/16/pdf-repalr/index.html","47fcb0c5c2d8276fc4d6102b4d3488ea"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","0e8cdef0bf8353b3de5e8da7ab8875e1"],["/2024/07/23/an-yuyin/index.html","cadda9013120efa02da8d1a3e257d8b4"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","91601045f3e2a7999b23c75e46e628ac"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","9c69766178bde5f72367dbb4a535877d"],["/2024/07/24/win11-win10/index.html","7a2329c2e1ea14da0edf0f12843780fc"],["/2024/08/03/wu-muose/index.html","b8db2f98be6071a58833a06fe474a6ce"],["/2024/08/04/ab/index.html","75e7d0d5e9618085b77b1b6cdf75a295"],["/2024/08/25/mp3tag/index.html","e0f770d2dab8af35f47513f92ea465da"],["/2024/08/31/cf-words/index.html","528a27115c321fab4cbf14ff16d9c17c"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","32e2cb0fea4708582ee08bfe81776531"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","2044d50092d27b52b305d5815909d6fd"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","71c7586005b4ec31da59cdb66da46791"],["/2024/09/30/123-liuliang/index.html","902967f481bd61e31370876d46442980"],["/2024/10/01/app-allmusic/index.html","a5578f154d6e7fa142bffe3bea25cbd3"],["/2024/10/01/win-musicfree/index.html","511633f79e34a05dc49eb3a9b7d582c4"],["/2024/10/02/fire-xinli/index.html","48f3d7dc133a1fc8bcce39b2dbfa1191"],["/2024/10/02/win-wyydaili/index.html","c491b252a68ff0ca13c2ba668203f822"],["/2024/10/14/qq-histort/index.html","81f19031116615afb5ce52f0cd5f50b2"],["/2024/10/26/suijip/index.html","502ba7b7b44910a4a311fb0317161978"],["/2024/10/27/ai-tlp/index.html","7f35478bd54f6e09fa1b769e2d492e50"],["/2024/10/27/cloudflare-cfff/index.html","6297738594383fe152010eab6c2a5a10"],["/2024/10/27/tvbox/index.html","7916810d7664667e4cef91ac94e577bc"],["/404.html","37ab08d6a176c26e328da6bd21f9fd47"],["/about/index.html","90beab3af91fc095206d333b083fbdd1"],["/archives/2024/01/index.html","48e94cef16dfec984a7f48163baded91"],["/archives/2024/02/index.html","f031984d204f0f3c0112c48793631792"],["/archives/2024/03/index.html","80c570eba288c4ed189ce6965f076605"],["/archives/2024/04/index.html","1294de2b8557299ac6b66ba918cc572f"],["/archives/2024/05/index.html","ec5c03fd0a0c0c675d2b9d6201ef1eed"],["/archives/2024/06/index.html","1fca1562e06742f6bdcc66b0fb3a4a26"],["/archives/2024/07/index.html","d304138703a37d8859507c8e2dfa99f7"],["/archives/2024/08/index.html","36feab4ef3b7d477111d3661192845d5"],["/archives/2024/09/index.html","bab6673351d7ee904cf433a7c87860ba"],["/archives/2024/10/index.html","bdc4247bf1a6b0b83eb90ffabd3f8b29"],["/archives/2024/index.html","83c8d9c1c77cc4855106a4d9b67ecc96"],["/archives/2024/page/2/index.html","93a4dd22e58f7e4d505d2829cb75b399"],["/archives/2024/page/3/index.html","3fe51aec256beeb4cefc750c0c7debe4"],["/archives/2024/page/4/index.html","7785b7369ddedca686441009f2f06c69"],["/archives/2024/page/5/index.html","9897ec51473c3a658ec433268c53fcdf"],["/archives/index.html","3196a6d608959f4567f4fdb01e4f7b89"],["/archives/page/2/index.html","7e0e0006ae32193c99a1f66e24a8677e"],["/archives/page/3/index.html","b4beddb22979b5bc2acb7e53bf6f1d12"],["/archives/page/4/index.html","de498350a584cc5d88b82115b8f8ff5f"],["/archives/page/5/index.html","581a0005e904fae8b3d36d470305a0ce"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","261a81677ae94e78530d2797328d4c89"],["/categories/index.html","cbbd141e67fe48d66201278941337499"],["/categories/学习资料/index.html","689c5d7f6a63145a25944e23f5a95073"],["/categories/安卓应用/index.html","2fe3039be09ad022cddd1fb734b8696f"],["/categories/实用技巧/index.html","9e45f6c42228db92c9e9bcd145268a58"],["/categories/实用推荐/index.html","1c60ac05bc12c2fa4de64fc038610aeb"],["/categories/实用软件/index.html","295ad9c44dc3de67e44523d9674e9f19"],["/categories/实际生活/index.html","a18c736fe66a84bb861b5b33d0f26bc9"],["/categories/影视资源/index.html","9542cc6a2217ed749cfdb09377730b47"],["/categories/心情随笔/index.html","6a71949ad73df8558e7bbb0f2d006294"],["/categories/心理实验/index.html","a38fed8de7def6bbf88f5e5901825437"],["/categories/技术分享/index.html","c82b110a16d0293f725e5dc1fa2a325b"],["/categories/探究所以/index.html","97c86923ccf57971120f2bc4d7490b54"],["/categories/硬核科技/index.html","d1511b0cc5be9cf8521f09694bd117d1"],["/categories/硬核科技/page/2/index.html","3cbf8a901c27d1f12eccbf58c6a8b583"],["/categories/编程语言/index.html","785df4d73436d44d76fc28af4722b6b1"],["/categories/网站建站/index.html","e5fd3038a7fc82db667735b71fcbf1e8"],["/cookies/index.html","a05e7b5f8bd1cdf44daef84de34a3aa1"],["/copyright/index.html","6c27035a44bd6ff4222c9a77bd543663"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","f487d9db305b62d91ca279e597b1bc97"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0cf0137a07a53c491ea9f2b8f3460300"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","b7e8d15ff874dd23ef8e75d165c37aa6"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","6686816264a416fdf04cc543a70932f1"],["/message/index.html","65917845063672a133ea2c303ada6818"],["/moments/index.html","af021aa3b2492cdec8d84a9fa104ddfd"],["/music/index.html","647f95e3ee98e93e559fe3e3bac79400"],["/page/2/index.html","6c120f5ae25c8c2c2d103560a1f88724"],["/page/3/index.html","eb2a8cea7c379203eda0ab977caa8841"],["/page/4/index.html","d12e1341a2c1c847e5a6158539da6c62"],["/page/5/index.html","7eeaae4ac00ebb4e0bb1423b03a385ee"],["/privacy/index.html","e273e8d83ce9504289fff29208337f61"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","f2cdc500b2417209ed401ede561b9dc0"],["/service-worker.js","7979703e4bf550eb1a6644f970a20029"],["/sw-register.js","43b3704a08bdc18829cd93d8c9eed42b"],["/tags/123网盘/index.html","b38429d623a237ef55587477dab43d62"],["/tags/C/index.html","13a419631089c13ee795d17542e3d046"],["/tags/ChatGPT/index.html","bfa89838185e96fb5f5d5c5e158d0b9c"],["/tags/Cloudflare/index.html","ad570ac86e412ce33043bff46eeafea6"],["/tags/Markdown/index.html","eb493c10e3903e5862e4982a9f62b98b"],["/tags/Openai/index.html","9f8e94f3976d91560a4a968ce366ad3d"],["/tags/QQ空间/index.html","ff60296dd13a9f8b890c2124fa1fc9ff"],["/tags/VPN/index.html","1f66053e964636252839fb70d64cb398"],["/tags/app/index.html","88ef84576c96d5822a076c71a30686ce"],["/tags/hexo/index.html","2ead5fdb9c9503f112572b01f0a1c372"],["/tags/index.html","2396585c9b8d7c063cff69941c044729"],["/tags/works/index.html","fac2530744d5030923ebd8f6cb03c525"],["/tags/信息修改/index.html","f379a3f417841682d8486f9b6d656359"],["/tags/写作/index.html","21699847452d85e6925bba3c4897f077"],["/tags/分享/index.html","80414d1f86c2cb63f5aac8f6481b3309"],["/tags/吾爱破解/index.html","d60ab69b4123009f75766d7215aef52b"],["/tags/塔罗牌/index.html","217cda40469283fcbe4b14710fc02925"],["/tags/壁纸/index.html","ed7ce6a2785904d06cd24fa20a8aa97b"],["/tags/安卓应用/index.html","132d406f828b5c4eb69761395e712a5c"],["/tags/安卓应用/page/2/index.html","6a635d608fb202535f63acc107ea7f7f"],["/tags/安卓软件/index.html","e8e866652997112bcbedd4191ad939a0"],["/tags/实用/index.html","e8799ca886eb49e15840d777faa0d79f"],["/tags/实用推荐/index.html","8771e0dbb3f288fa9131f3f176f389cf"],["/tags/实用推荐/page/2/index.html","049e45bbc635759ffa4466a876cd570f"],["/tags/实验/index.html","2ef73dff5a4af21d93f29c044ba8a100"],["/tags/工具/index.html","1ef34518e7b385ab79c3b18166025f9b"],["/tags/工具/page/2/index.html","b0e3d578b2767517b90d3c763ebb1186"],["/tags/广告/index.html","97c531e197a14c79793fe99cb0a5ebca"],["/tags/建站/index.html","2c973828a0150f5c315e39dfbc1828b5"],["/tags/开源/index.html","0be51173eefb594adcb5af9ddb2e01ad"],["/tags/影视/index.html","9b89aa6ef45fedbe317838895637a978"],["/tags/心理/index.html","a778b4bd16b815df74b03f25fc17fab4"],["/tags/思考/index.html","5be0e51b14fd4916d325a0e5df171888"],["/tags/技术分享/index.html","8572d26400766236f980f5a1415daad7"],["/tags/指令/index.html","d3497c27233301a82fad2901dcf4c4ec"],["/tags/探究所以/index.html","24a3846781478ec18a22fcd936e9a561"],["/tags/推荐/index.html","d0d291a29daa8f8c5a67918742182617"],["/tags/文字语音/index.html","1efaf87cc34f6f2f4ce23ee5247103b1"],["/tags/班级/index.html","fa543b9cad818d139b89545adf2f91eb"],["/tags/电脑软件/index.html","485faaa3f6d8494a46172eef206585cb"],["/tags/电脑软件/page/2/index.html","89b798d1faf84495f7ccc32c7c0e985b"],["/tags/百度网盘/index.html","7545b414758bc0d74c30f7f4b139d36a"],["/tags/科幻科普/index.html","4c916812afbd3e6cfd860632fc9af3f1"],["/tags/精选网站/index.html","4019e8326f1182c217e827a17a9d385e"],["/tags/系统优化/index.html","09365382443717f5a5b3197f12fde1c5"],["/tags/编程语言/index.html","ae4e18a214bf71f2d3e3d731c789b2cd"],["/tags/网站建站/index.html","3c4b76c0535143abc537448e9abff679"],["/tags/网页精选/index.html","3dd67050374a53992064e69a44e35baa"],["/tags/节点/index.html","879dc022a8404d52bd91e7ada8da22ce"],["/tags/视频/index.html","3490337f23b09c7a85208fa997e84a15"],["/tags/计算机/index.html","e9e42a43760a1a74386323e9f75a6d20"],["/tags/记录/index.html","719a6f8a6abb1d74d3f8ae4ea3ffffff"],["/tags/部署/index.html","e31559299205c37911135abc8972f5be"],["/tags/随机图/index.html","4d8212fa8324dcf31b1e197f39a925ca"],["/tags/音乐/index.html","fa12ccf6c96c09b6b6fca16920ff2391"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
