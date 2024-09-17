/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","a81a3ce09974497e577744e4424e68b2"],["/2024/01/22/Markdown/index.html","7a6fe7cf323ba1fcfbd468a8c2bff0cf"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","5d3277176343d1590e866a1ad1bbc3bf"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","9165cc33d8c617e33a9b716180469566"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","c2470c4b26fd54f19b41fdaf812a45c1"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","856e76877a0ea87d2f19c05ac36fbdb4"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","01341c87f08a3dd9e3a8bd579d66ad26"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","1cc00e5b3dc056d8b8044381d41efa4e"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","ba845bd0c8fc8fa9847833c3b753ef38"],["/2024/04/10/C-saolei/index.html","d73c56b7c6bd0fd419965ff5de885de0"],["/2024/04/10/free-yuming/index.html","ea39381136aff3c097d0916f0d5bc767"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","e6c6983729ee30726ea9cb3737adcbda"],["/2024/04/21/kw/index.html","96db11b3aa3dade7b1368f0a60ae29f3"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","94145eee158f63baeb7a2a3ac7c72899"],["/2024/05/12/music_download/index.html","31f151c5a8146cbcede45a0cb0d15acf"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","30896938fe52d63a324bd1301dac4f4f"],["/2024/05/25/Vercel-Typecho/index.html","571f40a4cf2733724844345a5dfcaea3"],["/2024/06/02/website-all/index.html","470c6033ff54e831b37cc29ad147202d"],["/2024/06/17/tools-box/index.html","3328fe2caaa3800d926e64b97770a690"],["/2024/06/22/biibili-zhilian/index.html","de987810a5ab5f0dcc36ad7ade0c7f7d"],["/2024/06/23/sqyy/index.html","116af20e89b15984ee3066ad18efcfd1"],["/2024/06/24/win-chachong/index.html","3ea9cbcfb770431e1b368a0306a21e7f"],["/2024/07/03/dyd/index.html","e27f298177a7b0b8bb1478e2360566f7"],["/2024/07/03/geospy/index.html","eae712a1047502ec1b188bb276e02f36"],["/2024/07/16/TuneFree/index.html","0bbba81d6fdcd72924b91fa158ce1604"],["/2024/07/16/pdf-repalr/index.html","efc8bccdfbca1d4d316d38ccf8f59897"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","505c1312b153844ba3efe0b1c3d49868"],["/2024/07/23/an-yuyin/index.html","04109bfc4f2e1292f5e0aec9d49cd54e"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","9e021094d067858a07362812efa842a2"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","b47cc8a0bc2797ff476590652224bd81"],["/2024/07/24/win11-win10/index.html","eed56a688984d2bc9dee09e39cd766ba"],["/2024/08/03/wu-muose/index.html","815d3c46414b97c678f00fc886937c36"],["/2024/08/04/ab/index.html","979fffb56d62433de5c0bd916f4b2e83"],["/2024/08/25/mp3tag/index.html","b4dffdc6f15674a74332d4d53e259630"],["/2024/08/31/cf-words/index.html","c189ef7aeb4cfe49da4e7ba4c1ca91b8"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","3f50b154303016b7b43d985772f55d97"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ed582374a17c9fc6a4a13e9f924ac08e"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","d023c7734068210520a185762c3be931"],["/404.html","510b494b058189b301b12ab317476e24"],["/about/index.html","04d5c61ae7ff0cf9cf319832d91563b0"],["/archives/2024/01/index.html","a6cce511fd8a0aed3ba1b379591a2204"],["/archives/2024/02/index.html","2172230a9f2e6f775f9ca85f717eddad"],["/archives/2024/03/index.html","47005d8ab65ad2df194beaca14c35f4e"],["/archives/2024/04/index.html","539d9f73b89763bc579dcf6e59fc21e4"],["/archives/2024/05/index.html","457b3f558e83c9106e8f531475fe50d4"],["/archives/2024/06/index.html","33870d17aba5f94620dba8e9a5c646a1"],["/archives/2024/07/index.html","6022928b2e7a6240a1a3c992cef0c9e9"],["/archives/2024/08/index.html","9a37ef721df47b8df9ae0a49873c064f"],["/archives/2024/09/index.html","08cc3fd4d720c5d363ddfcc4ec120f12"],["/archives/2024/index.html","787b828ee49d6086a824a2d14a466aeb"],["/archives/2024/page/2/index.html","74bd3b1a779156f0bef2997fe64660a8"],["/archives/2024/page/3/index.html","4cb3c68c9549e134eeed2ce4a4ad5773"],["/archives/2024/page/4/index.html","a43f3846445d252e6f6a84beff0f3d89"],["/archives/index.html","55044807c7c909b73aa97ba7a9973d4b"],["/archives/page/2/index.html","bcb08919a261e20892129a3816f03358"],["/archives/page/3/index.html","494ac659466837b355a3e6cf24e39c0a"],["/archives/page/4/index.html","87e1aedacdfdbbc120caa1073642c6e2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","996dc181d52ae82fe0b2bb6ce424f3d5"],["/categories/index.html","4e6d17de29ab5408844331776de614a9"],["/categories/学习资料/index.html","1b33c7f93386a50b03a340ea7e3902ff"],["/categories/安卓应用/index.html","d0d4ca2aca30f0f5c120ce36a666bbb7"],["/categories/实用推荐/index.html","a87070599dea80a3118eb882cd5961e3"],["/categories/实用软件/index.html","afc6276018269b04a813053b8259aa66"],["/categories/心情随笔/index.html","fb435b70314f9c323ec7503b3af4201a"],["/categories/技术分享/index.html","21ce52bbf84f4b1aa76d25345392de19"],["/categories/探究所以/index.html","044938dc89ddba96a8184988b8963071"],["/categories/硬核科技/index.html","670748386cd56e3bd0ea8085a1da5a7f"],["/categories/硬核科技/page/2/index.html","d812a99109f0ea5ffea57eb23c12949d"],["/categories/编程语言/index.html","49708e2852069a7671d0a79182517d94"],["/categories/网站建站/index.html","8043e6f34ba1d831afac81f3841850f6"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","f9c3238a7191ae8443f833ab1b346a51"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","32ef0a1b57c4d7d97c217740b692f267"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","48d470db5566edf9727ddea7cfe327dd"],["/message/index.html","4415008428a5344af95b07e906e69dc9"],["/moments/index.html","1df317c7045d2a31a754cc7c35350513"],["/music/index.html","46c51d87c45a30de5fe1bbf5b6833e53"],["/page/2/index.html","5d22e15177476550d545576d4ab9334e"],["/page/3/index.html","0ec094a339c4dd560a1d1d22cfc3929f"],["/page/4/index.html","94556658b104d328897d4c3e50d0c3f4"],["/recentcomments/index.html","1fd14aa3b0111e1a101f1f09b643c6a5"],["/service-worker.js","7a35c599b783fd7422ad66fa1ca4ec62"],["/sw-register.js","acb619e3f478c91eee8ca144067856ea"],["/tags/C/index.html","2707ae57f08990c8f6ad8f1e2fc73fc5"],["/tags/ChatGPT/index.html","2955d3dbdc8fc1ba3ad3dfa758cb2f8e"],["/tags/Cloudflare/index.html","a1247d792ec04061d3935338eac05cee"],["/tags/Markdown/index.html","4519271de27b255e9eac3123a901d830"],["/tags/Openai/index.html","635b7a284a310cf30bb7190e62ad1d8a"],["/tags/app/index.html","11f0cb7afd9816633ce8bd502c5c69ef"],["/tags/hexo/index.html","85d4b5f7779a8aec4df2c6444e63b4ad"],["/tags/index.html","4a5087884c55c623afa476e8e44aebe1"],["/tags/信息修改/index.html","a30b2b68d7834e0edbd3de4995219c98"],["/tags/写作/index.html","6874a9baeddf16d915e8cb20fb5127e0"],["/tags/分享/index.html","88ed7b6e753feeec435f6e32d176bde4"],["/tags/吾爱破解/index.html","612f7bde4a9746d7eb206052f862f733"],["/tags/安卓应用/index.html","bcab181a7a1589ecfe6bc1dadf416976"],["/tags/安卓应用/page/2/index.html","def103247d84040b1569ef4c02f816a8"],["/tags/实用/index.html","b8d11ed7964085b8a0348d2793260eae"],["/tags/实用推荐/index.html","dc9d9575d6230de6219bb66b0b01ac41"],["/tags/实用推荐/page/2/index.html","9961380b5b7f1dee367262fdb80199d3"],["/tags/工具/index.html","732202391e5c4b6590145759d43e4821"],["/tags/工具/page/2/index.html","0aa74ccdfaf9f8b4c3537a5f70e68ab7"],["/tags/工具电脑软件/index.html","2e28a090074e27765bdba079f5e1e3be"],["/tags/广告/index.html","d9ab8367b8df3e5a190602f3918bac65"],["/tags/建站/index.html","323e2392a59ee0bb0ec5420ca93119c7"],["/tags/思考/index.html","653151944ed2235787c029de154bb15f"],["/tags/技术分享/index.html","c01faf4acda5701f31317924980cffd4"],["/tags/指令/index.html","bbe706e492a054b4ae491351b7e325ca"],["/tags/探究所以/index.html","33bedde6d868188e0ea16d044fa4939a"],["/tags/推荐/index.html","5df67bdb46d8f330ba286ba194f778d6"],["/tags/文字语音/index.html","1694d4bff4c11e1740ea5707430dcbeb"],["/tags/班级/index.html","5eeb9d5078f9a65f8eda26a9732f4ad8"],["/tags/电脑软件/index.html","43fe0b6cf247c59283076e79cb8563a3"],["/tags/电脑软件/page/2/index.html","2d335dd8cdd6547eb0f4d820c2f90c4c"],["/tags/百度网盘/index.html","d6162515f1bf83e3212df4a73c11ec46"],["/tags/科幻科普/index.html","929c78572a34cd15def464214783fb0b"],["/tags/精选网站/index.html","22ce662713d16a015ed125dd11e31487"],["/tags/系统优化/index.html","2e97fdc6024bb94aab21d8332b60ade8"],["/tags/编程语言/index.html","cea7ff6c79228abb7fb5ecf02445b686"],["/tags/网站建站/index.html","25039724b75fe76d815e50545cba509f"],["/tags/视频/index.html","2858b8832789d059038a5c5ecc557eb2"],["/tags/计算机/index.html","98c32486319758dafd9925c128de9c67"],["/tags/记录/index.html","60355a5723ac0ccfb159f68e63727570"],["/tags/部署/index.html","92ad7ee3a26537e5f6eedb59e89f0bb3"],["/tags/音乐/index.html","03a94c90330d147d33235e286a61fd06"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
