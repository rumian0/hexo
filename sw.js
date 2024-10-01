/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","3cf28bd81684fd230e8b35ba96ac34f0"],["/2024/01/22/Markdown/index.html","d75c48e9567122299dbff9d4614016f7"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","a4b8d8d4717dda654ce3ac5aeee3a64a"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","a8d8cc4fb54d64c78330279a1855496a"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","25d403e8213598f729d708ecf1fc053c"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","680a4e9e63c157e414cc91eeb5661458"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","297e4e6d4ca86fc234e435f145a17ec9"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","5084047601f76be033dd99d6ffe27e07"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","9fe22f73405e8de870e8900e229f701e"],["/2024/04/10/C-saolei/index.html","c39425794add47208524921d2a95b7c7"],["/2024/04/10/free-yuming/index.html","7070f02f7b51bb0685f0bc0edbf76a03"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","ab35013ce693fce3f4206aa665030377"],["/2024/04/21/kw/index.html","d834f9b3bd9090a32d67bd60e4d07dcc"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","164e6443908a12230928923896b46cc7"],["/2024/05/12/music_download/index.html","d07f4141d9513d2ef54ed52ebef87983"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","24447301be92e243550af6704d4bc47d"],["/2024/05/25/Vercel-Typecho/index.html","6337a0fadc16fa13556979db84f6055f"],["/2024/06/02/website-all/index.html","bd59dca0b14ae81c98b5c6be67bcedf4"],["/2024/06/17/tools-box/index.html","ba6521eaf994e892259a5577f74b5a0b"],["/2024/06/22/biibili-zhilian/index.html","1697e0e07098cbf46ba109ccf73c8887"],["/2024/06/23/sqyy/index.html","4b1dddbb00fd45fc9c6740c2c25822ab"],["/2024/06/24/win-chachong/index.html","4d2f290fa63dcee63abe21b29417599c"],["/2024/07/03/dyd/index.html","550b5bba7650cbdc4d0dcc7777bd698e"],["/2024/07/03/geospy/index.html","c6e60a0cf80e66279687eb7d2cf7c4ac"],["/2024/07/16/TuneFree/index.html","60283c813fae6418f6c67f17748bca5e"],["/2024/07/16/pdf-repalr/index.html","03f6dfce9f24bea3629e4f292f6cdbd6"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","6ce3fa19fdb4549191e092c13c4b2bfd"],["/2024/07/23/an-yuyin/index.html","8bcb7355123de11154ee4d80e44283c9"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","166ea2c2ba702524d83c136f374db3fb"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","b5ea3b73ed5cbf2e21a5489d98a94bb7"],["/2024/07/24/win11-win10/index.html","ee2158f18e07e807ac12398191e48ba3"],["/2024/08/03/wu-muose/index.html","21c2098034f87cb6007895791443a16d"],["/2024/08/04/ab/index.html","f5a1b28a953d0e679ccd66986bbd7f72"],["/2024/08/25/mp3tag/index.html","eb7f41e392d9b06751ed73f73797e4d9"],["/2024/08/31/cf-words/index.html","e68f01ff2132c0cdc7e3108717b55209"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","bd0dfa37fd6f748a6f4238c69bb2f649"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","20c30ff6197385313d14b522a504a95b"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","c0a1bcbd51d2e9d5c3f75d9c697a0ff2"],["/2024/09/30/123-liuliang/index.html","b917c7a30e3a4d2452249c57aac39c4d"],["/2024/10/01/app-allmusic/index.html","125bab92927f909209cb5987b54ac3a0"],["/404.html","94e77b40f00e7693c1af85a818466c5d"],["/about/index.html","5c1342f66bd394926ad2c3dba4df74ce"],["/archives/2024/01/index.html","45ff39875de49678b191a62d8c7e871d"],["/archives/2024/02/index.html","d2dc72c2b0a1628b37c9b80c7320b032"],["/archives/2024/03/index.html","8cacc075e19378bd8d97224dfdace108"],["/archives/2024/04/index.html","66a6cadc05855288b8afb073f6b1b6bb"],["/archives/2024/05/index.html","9146604d9fdf9cd8321ed671c9b11571"],["/archives/2024/06/index.html","57d909d3373dcc3e030e3a54b973356a"],["/archives/2024/07/index.html","ef35aee3884e2013cd7d58d2a0ec6723"],["/archives/2024/08/index.html","c796d70f35906559c7a1dd9eb823ade5"],["/archives/2024/09/index.html","7d89ea4bb6d1fb331a0e802369ddab7b"],["/archives/2024/10/index.html","aeffbbeceaff18cf0088c9e86ab4eb47"],["/archives/2024/index.html","620fdf66fbd34fab0adf3f0c69d58bfe"],["/archives/2024/page/2/index.html","d469818997d8823147a005b6d32bd009"],["/archives/2024/page/3/index.html","13a1536ae536fdecc078d20db4ca8963"],["/archives/2024/page/4/index.html","ba700af569e715fa798b5a658a23df89"],["/archives/index.html","d20796187a0690905a4fa124dda1869d"],["/archives/page/2/index.html","826d133d5f83e53a4a2b3563c7267fdf"],["/archives/page/3/index.html","3e0d5ee8f18059f720d85e342f461f5e"],["/archives/page/4/index.html","007d7cd457228c66e87446ec951f8f46"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","5e1d591c52ea6747f7086e3a51b7ee73"],["/categories/index.html","d43c095fade8273fd2ffd3dcdfc83a47"],["/categories/学习资料/index.html","2ecbda99d0bbf3c01502bdb65ad0e6a3"],["/categories/安卓应用/index.html","29df2d63b30b7e01880959656fb3e69d"],["/categories/实用推荐/index.html","cba9280a4e09e7292829555c6109d460"],["/categories/实用软件/index.html","831d775afb765f902dd96245d72fd3a7"],["/categories/心情随笔/index.html","bf315475d2c4f3c312e7b0d9dd247599"],["/categories/技术分享/index.html","7dffc7af7104327dcaf9e1556c02ac1a"],["/categories/探究所以/index.html","5df4f9158f43ccf5c173f2ea535ce119"],["/categories/硬核科技/index.html","56a7c0153927141711ca7b49a69a6b5f"],["/categories/硬核科技/page/2/index.html","7559b71e571d60ee74a8ea8f32994396"],["/categories/编程语言/index.html","ebc576fbeaeb09f308936590a44cb0e2"],["/categories/网站建站/index.html","d67a6db59e424aeb58c851ea646774c7"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","1db26ec4bc1909ffc2425594228b7a62"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","5167c972e0da3c4f780fbb5b443dd9fe"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","76f165bbc78f126c4a6aee32dd3160fb"],["/message/index.html","0ebe489c2f67400ef7493bd75907391b"],["/moments/index.html","ed7ac207d7f8a39415dbc793a9eef1bc"],["/music/index.html","6683a9d6876d85bd8d6e0442346cbf95"],["/page/2/index.html","98e291d5e0b851bdf3fcbc16e54a5555"],["/page/3/index.html","1c70abf76953f320d24297e9225cab21"],["/page/4/index.html","cffb282a46b31d357d24861150410e05"],["/recentcomments/index.html","8f1be69d3370a1dec1a4e6cea482ab18"],["/service-worker.js","10610aa5d9c415b44dead4d8250a14df"],["/sw-register.js","1dbab42ca435d993a33cd521225d7ffa"],["/tags/123网盘/index.html","fb535b1f4028803178165c93ff13dc9b"],["/tags/C/index.html","5fa9f07018c58e821525d9a91e9994e1"],["/tags/ChatGPT/index.html","15d50b063e9e51547a9232c67b4ca595"],["/tags/Cloudflare/index.html","2f7bc2d9c05ae38fae69122141d78c9c"],["/tags/Markdown/index.html","bf923cf35dae546b1b029c76c3bb7203"],["/tags/Openai/index.html","83bd69516fcf58cae93bf4a98610ff73"],["/tags/app/index.html","70b50e5d280e1c3f034ffc684e494575"],["/tags/hexo/index.html","836facc91feb091ae33e5b577fb5cb06"],["/tags/index.html","fd5b593b127f6598d4321d5efcebe3a6"],["/tags/信息修改/index.html","259dd17eb8ff3ce08d7e3cad81291260"],["/tags/写作/index.html","32aa95cda147c20f3ae061fbdd24b58f"],["/tags/分享/index.html","bb0da3167b2151450131eb9defb0ed73"],["/tags/吾爱破解/index.html","c0e299466a40ecb2efe1ac027c5ae4ed"],["/tags/安卓应用/index.html","1f077719621ef9840ccedc9f7ed46d4a"],["/tags/安卓应用/page/2/index.html","e4bed8ff22195cb35f2ee14cf4795b78"],["/tags/安卓软件/index.html","ae5e9465af0de87687080bb9acaefd44"],["/tags/实用/index.html","16d618a849d976b3c9ab18774c89512d"],["/tags/实用推荐/index.html","f5fa6a0f7894b01d8b2b29105393ed21"],["/tags/实用推荐/page/2/index.html","e008e5ccc5e56c7dfddd51c2c5121cbb"],["/tags/工具/index.html","6472874c8a141647a21aa37654095a8a"],["/tags/工具/page/2/index.html","c176744cdac346fc7a4bf50c4879b8d2"],["/tags/工具电脑软件/index.html","9508f6f7c7e23c5373cb08b525a1107e"],["/tags/广告/index.html","a614affccf00350030f7de13addc30ab"],["/tags/建站/index.html","802fc3da63ae3591c5f20c0d50b508c3"],["/tags/思考/index.html","05521e939a6ad737562c811140c44fd2"],["/tags/技术分享/index.html","ca30cdc1c4ea666d5d8a0aa001a52162"],["/tags/指令/index.html","c3ef095b7ecd41a0e0d6c83f1be404e0"],["/tags/探究所以/index.html","ee41e4b43e71dfbe58897a553af8abb3"],["/tags/推荐/index.html","fedd028df6cd831ce7939976bfa6cc97"],["/tags/文字语音/index.html","a2d96ddf62828c2c8df16c5c015a428e"],["/tags/班级/index.html","04f8ee8163c951222ae6d3ce4dc95d12"],["/tags/电脑软件/index.html","4ec5cf31a8a7ed26bb6c7e695e0ad882"],["/tags/电脑软件/page/2/index.html","17e19c97c9adc36a6f9ba5eea8320a2e"],["/tags/百度网盘/index.html","88edfd4778f6c936dd8816a66e083166"],["/tags/科幻科普/index.html","82feaa92caa69468f86ec66ac5e6df02"],["/tags/精选网站/index.html","f79ca2883b1879d997485d0b1ab9c706"],["/tags/系统优化/index.html","77bf421852772408b082ade9edddcfe8"],["/tags/编程语言/index.html","ee4e4e4707cead3105eb4cdeb9c98ec7"],["/tags/网站建站/index.html","d54ecc3e3374015dae3acd20825076bc"],["/tags/视频/index.html","07eee0a38815e68929bf90e0fd12c5fb"],["/tags/计算机/index.html","8224fe3b3914416950c9e08918015eac"],["/tags/记录/index.html","ae5c05e3286440cc60fee13d674ea2fc"],["/tags/部署/index.html","7d17ef9624ea8b42a7d341e904d008d0"],["/tags/音乐/index.html","b4a14231c4f4fd4d0df2fc58d007ea6c"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
