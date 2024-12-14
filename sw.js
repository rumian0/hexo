/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","a415a83c7d285d4f90df8ba5ff9ced13"],["/2024/01/22/Markdown/index.html","2ac0f5b0b4fdd22db9d8b0fd038ed016"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","0c5b81c53d2cb0d58b99de76c91f68bc"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","8d7c348d2056662b251c3fe9d2607b14"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","a8671349fb9a3f4c4d00fdd490f024b7"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","ecd3909cef16c1fb7c2c89f0945ff1fa"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","10952801ee18a1eb72705fced93ee31c"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","784471a94d722e1904e412bbca913a78"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","4d97b7c058d53bd57b5f1b95bd0be126"],["/2024/04/10/C-saolei/index.html","8481acc975f929cb7ff2636cc07cdf7f"],["/2024/04/10/free-yuming/index.html","da3d3332d92c6f73fa795db0efb9a496"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","1c26f1e81b0293af81324361554c0a75"],["/2024/04/21/kw/index.html","c61cbe05c2c4daf0efbddb08e2d148a5"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","daf57a878bb1286cc36cdbca21fb1c34"],["/2024/05/12/music_download/index.html","2580c4fa30994cd33999fac1ecdbf43e"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","b6a3ae9cd12b173b62a93e27e4002781"],["/2024/05/25/Vercel-Typecho/index.html","32b1f325eef6f87e233b6561b4e07510"],["/2024/06/02/website-all/index.html","690dd09f7914f85cb72d729bf69ffd51"],["/2024/06/17/tools-box/index.html","4d4efbaa4029d766c307cc325b31de8a"],["/2024/06/22/biibili-zhilian/index.html","6e2c769df219c5754b5d3eaa5af7ed16"],["/2024/06/23/sqyy/index.html","590e4c7349a18e6a3f3c2baeb6189df6"],["/2024/06/24/win-chachong/index.html","56a7bb9c1dc64063e7fc76251c4d447b"],["/2024/07/03/dyd/index.html","c41d8c51b1a776d80db75412f989f7f9"],["/2024/07/03/geospy/index.html","7264d1628367ce44d94f87163404e93a"],["/2024/07/16/TuneFree/index.html","7751f1956c5aed1cf2ac03f7503835d5"],["/2024/07/16/pdf-repalr/index.html","73b35584e4949e86ac7f40021d72780e"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","c1c7b911a29d088f88a64f45f87d0f7a"],["/2024/07/23/an-yuyin/index.html","4040f4dd10cd9aa7cfda9f28a97cf889"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","3fcf46f515adb5197ddf7c449ebdbd9b"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","1fb4b4c911799e1de4c26ed0f0427d6e"],["/2024/07/24/win11-win10/index.html","392fa9a57ac997c5f90036234982bb78"],["/2024/08/03/wu-muose/index.html","41c7aaea0e22cd9fdaee260edf74b2d6"],["/2024/08/04/ab/index.html","438681b166058d6b468d41f00b0ed522"],["/2024/08/25/mp3tag/index.html","2256c10ea3f051f81f1e2d495cf25a4a"],["/2024/08/31/cf-words/index.html","814107cc8669131cdef314824ddb50c8"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","bd3d9403e40eaf3ebc607705bbe28b90"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","da1529b04d05de7f6f18c646567436ba"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","df21babef4c65d3d727891bace885575"],["/2024/09/30/123-liuliang/index.html","fb1d8a9cce0f0c19af8c2dc3bac4b83d"],["/2024/10/01/app-allmusic/index.html","d2e1f4305e06c5ff193bbc74d86b4442"],["/2024/10/01/win-musicfree/index.html","f62b2178ec74909d719d310376f9bf72"],["/2024/10/02/fire-xinli/index.html","5acf995ac82d2d4b915c192015dc4cf9"],["/2024/10/02/win-wyydaili/index.html","fcd01dcf37e24f6e080cc1c0489d2be0"],["/2024/10/14/qq-histort/index.html","9bd9863ae0c8b6571df78897c9636b61"],["/2024/10/26/suijip/index.html","5385d54607de24b87bc2348236bc879d"],["/2024/10/27/ai-tlp/index.html","817c449d48bdb5644fb2b6cb5e2f2918"],["/2024/10/27/cloudflare-cfff/index.html","88e6797515afb57c905b00c2efc96bb6"],["/2024/10/27/tvbox/index.html","5ac31e948ad6d45d715b6aa886674272"],["/2024/11/20/wyy--2/index.html","d3646112418b7635cf91de24f1ac2dd8"],["/2024/11/23/fjyangcheng/index.html","13db69a29f5f06b75d468cd62ea11f22"],["/2024/11/23/office-ltsc/index.html","02984ac172b2c8918fb71f5ed7f3e348"],["/2024/12/01/aitiaosuo/index.html","42f6badcd00d9baab4e4da159e766603"],["/2024/12/01/yjx-study/index.html","f3b1c52088e9f7855aac333276139bb3"],["/404.html","7212a435cb108533abed6e7a62b627f2"],["/about/index.html","9a49ef93a398a8dbfadaf22d19e9389d"],["/archives/2024/01/index.html","90f39e7c178cb0df9294a267c1b1763f"],["/archives/2024/02/index.html","628451b9cf9aa04d90c852804a5029a0"],["/archives/2024/03/index.html","c2948a5b83c8af0197d40573b067bebe"],["/archives/2024/04/index.html","6e1af63dfaa4ace20a857079f48d1c9b"],["/archives/2024/05/index.html","f79e9d9740c671f3553ba0cab90f294f"],["/archives/2024/06/index.html","74088c027d106fdb748cf2618b564a05"],["/archives/2024/07/index.html","76d0259bfb196d378456b0dbc804f2ad"],["/archives/2024/08/index.html","3afd60d710e37e23c9acf69cc65f6e1b"],["/archives/2024/09/index.html","fc834ef1f97a2465580742942a3625db"],["/archives/2024/10/index.html","4da79e8dd399a3fdef351f207ad6d549"],["/archives/2024/11/index.html","c2f43459327bd37b83f78b89ed8a82b3"],["/archives/2024/12/index.html","8c6ff7b3d57bc01476e052139a6b6938"],["/archives/2024/index.html","24f94c5e062a7d7e4e40bf4261eff55e"],["/archives/2024/page/2/index.html","0502bbd40328f5b06adab6233bb2aa4f"],["/archives/2024/page/3/index.html","4fc3a7e00a0bae798d30daad0bee1dc1"],["/archives/2024/page/4/index.html","9ab33eccc82c7b3f2d9f208a79bc8ce2"],["/archives/2024/page/5/index.html","970a9b9347573f347e94c6ce29099759"],["/archives/2024/page/6/index.html","4be5f1806e60c13bd9e3e1a78991e40d"],["/archives/index.html","0d012f63fac2d9bd381c43d96c84714c"],["/archives/page/2/index.html","d5c8f894682dd1ba92cc8d8c601bfe9d"],["/archives/page/3/index.html","087ebf30cb767017a21c113ba42cf380"],["/archives/page/4/index.html","5d315986b72a6e089fceae06fecf5a0b"],["/archives/page/5/index.html","baa5d726201ec855661090cf5dde9885"],["/archives/page/6/index.html","2d732679c0669ea8d65850bed9ceeef9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","fe33a1ab49e10b7c73aeba5b82edd3de"],["/categories/index.html","b121085511aaaec30198109f8557b445"],["/categories/学习资料/index.html","6d3b343c32072aac83c10eaa99b4cdd6"],["/categories/安卓应用/index.html","d392728bcf16dd412dd230037cc2a936"],["/categories/实用技巧/index.html","de03bec086cb9abf6e56fa171cea2478"],["/categories/实用推荐/index.html","116357d008effaabbbb0b942d5fcfab1"],["/categories/实用软件/index.html","a340ed32b7bbfb8c1c8b081784abf0ff"],["/categories/实际生活/index.html","86e8986663e91dec8d2d7c39ba9a17c6"],["/categories/影视资源/index.html","1239b811066c88cf22eb47111f862e4b"],["/categories/心情随笔/index.html","f6e3f7c4c2ed83465d1c49ee53bac867"],["/categories/心理实验/index.html","2fcb0eb559a78bc034fb789c9d989ea2"],["/categories/技术分享/index.html","69403cc251116ac90cd5762561813d3f"],["/categories/技术教学/index.html","a78fd3b13b825ebff22b52a08adc9071"],["/categories/探究所以/index.html","7164f5cf3e7d8fd74a30461377813746"],["/categories/生活方面/index.html","830873c352b06299979d916d8ee26dc4"],["/categories/硬核科技/index.html","c3889b5918149d1ff3d0f2d2e5f45672"],["/categories/硬核科技/page/2/index.html","3d27d6e37eef20a7a3ced3f490f249fa"],["/categories/编程语言/index.html","20463b8499075aaf61b03d7e33e3ca37"],["/categories/网站建站/index.html","e5d4bc1f593c928c7009ccc69c8aaf09"],["/cookies/index.html","943136f4cf6e4cd26fc5fe8afa57bba6"],["/copyright/index.html","365d03388ea585fbe59b8b531af6d62a"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","d955d6c7d123645a7a5bd052f5e1c47f"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","6d695e5b3aca5554075673e62bacdacd"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","0fe53e23b5e3c903bcd96702586cbd60"],["/message/index.html","83b100f918c4123c03fc7fb07b8b7cd3"],["/moments/index.html","43a8eef0fbd418506f583abd023b9524"],["/music/index.html","0aa82bb3a55dcd02f1073cc58187362d"],["/page/2/index.html","edfabc43bf9cd8d57280a54cd0f4508a"],["/page/3/index.html","afc5dd51259c984c39e36c59fe1a00ba"],["/page/4/index.html","b8ed8f7d7283c45e4a42d343b8daa4c8"],["/page/5/index.html","7087a1af8346e94a1ef072291bb4098f"],["/page/6/index.html","b6d9e3669873553f856d333015586e50"],["/privacy/index.html","00218449b4b38eae18dd3eb4806f4a89"],["/recentcomments/index.html","9479e81d034d1ebfdd98c186f6903b65"],["/service-worker.js","018580a2d57f800e43fadde4a3940f31"],["/sw-register.js","14ecafd42d5336d9e56eb12f13c49f57"],["/tags/123网盘/index.html","58ed4d5e6daddfb145d3c63e7033e17b"],["/tags/Ai/index.html","eabe31162fa58ee4e2311ae57b97b9f9"],["/tags/C/index.html","a78749a0841d4839142155366374b0ce"],["/tags/ChatGPT/index.html","df105176e36a4b91050756089ce7ecf7"],["/tags/Cloudflare/index.html","51d1f7096cc07f52f28a48d95a5dc395"],["/tags/Markdown/index.html","25e389b084981db14e5e9e295db606d4"],["/tags/Openai/index.html","119299caf0c3a5b1bc56f27b6d7aa67d"],["/tags/QQ空间/index.html","157f5e9ed3d4222771247ed3e4bef60f"],["/tags/VPN/index.html","fa7c1bd1aaaaa43fe00d269ad1b80c85"],["/tags/app/index.html","79c06c8423e6f2832b105f8da37071ec"],["/tags/hexo/index.html","679bcd6a9988b54f2b784536157f986c"],["/tags/index.html","8fc1f2de6346b778e3a7ad22cec93f3d"],["/tags/works/index.html","172575032d5defe97b570492df9e5a7c"],["/tags/信息修改/index.html","28d9eebcb3a1172b74c18cc369cda8e6"],["/tags/写作/index.html","532ecc37759c6c4eba06514aa530d06e"],["/tags/分享/index.html","1a5b71b97e53dd81ee2480eda01dbb1d"],["/tags/吾爱破解/index.html","c5315f8aa08c5a9182c1a2c2d73e9715"],["/tags/塔罗牌/index.html","f494bced2ab973e7e68f8cf28d924c68"],["/tags/壁纸/index.html","24cc4fdd7e1b93c35ddb088f36970d79"],["/tags/安卓应用/index.html","675a202965405ab34902b11c11ba1c6e"],["/tags/安卓应用/page/2/index.html","6b66ddb56cfeab924a2cb4fd7b00aeb7"],["/tags/安卓软件/index.html","4e0e9b8383e0bed3f39f697c528c9fca"],["/tags/实用/index.html","643ab6a3e814c2e25097517cee35872b"],["/tags/实用推荐/index.html","a1afdd862f9ba00a075079a6066197b0"],["/tags/实用推荐/page/2/index.html","b48f686f3a02b864296400353e06ac9c"],["/tags/实验/index.html","74d1229a0b71cd07905d68fd89ea8330"],["/tags/工具/index.html","ae9853394a11e6b23d8419bfaf9da5f1"],["/tags/工具/page/2/index.html","27c44e205c60b109bd9bb74892c1c54c"],["/tags/广告/index.html","ad852f61d47c5706c27be671d12884d6"],["/tags/建站/index.html","ee6132e4c5a061b432807563f9108a02"],["/tags/开源/index.html","edd4ae92b7e400e91a60000986e43853"],["/tags/影视/index.html","5a925757b017f13214c7962efad40a42"],["/tags/心理/index.html","e130cddaf71389bbaa7550a5d1143a9d"],["/tags/思考/index.html","32356a09691453e83103e2287508aca7"],["/tags/技术分享/index.html","39d4a8de23d10d43e293eafe7f617e79"],["/tags/指令/index.html","6911231dc06ad0252e8b9b9d7d3f7e8a"],["/tags/探究所以/index.html","a60d717a84951a911b4f7e262fe46205"],["/tags/推荐/index.html","df230308e18b6694c67c2e30222963f5"],["/tags/教程/index.html","414d25b6ce94c31906ff9fc3ad5d70d6"],["/tags/文字语音/index.html","fd7f2d0b74574ca9f245742769cca47a"],["/tags/激活/index.html","d7ecd028125401d94a69922e228003d2"],["/tags/班级/index.html","a9c74f4de7b8b78179e5cc6f5c768a95"],["/tags/生活/index.html","203e9c6fb024918acffb2aa2d9d1a55e"],["/tags/电脑软件/index.html","c40eaa3fbdfa83d70506842d3199a6c7"],["/tags/电脑软件/page/2/index.html","8b7b0132ac1310f3c863fe6ee3eb7764"],["/tags/百度网盘/index.html","329c149779808d652a68f991f983660c"],["/tags/科幻科普/index.html","335d52dd5427e6791f9e247d0c75632e"],["/tags/精选网站/index.html","e3e7e298fd7ea22ee785c231a9a638f3"],["/tags/系统优化/index.html","7ee6967b55ecaaeb63ffd669455b8f12"],["/tags/编程语言/index.html","d4aef472689a15a629f47d65e4724590"],["/tags/网站建站/index.html","23d98c4b45e0529bf98f4bc60f8e624f"],["/tags/网页精选/index.html","193afd0602d78ae54a7055568772429a"],["/tags/脚本/index.html","2d2f95129da8e67dc77b3b15b9ec3fc4"],["/tags/节点/index.html","c4aa0a8e33286e2c6aee1d92049eaf6f"],["/tags/视频/index.html","cabc302fac42d33939ef27c725f59a26"],["/tags/计算机/index.html","8c5f11d58dfcefbc06b1c86e2a0f587a"],["/tags/记录/index.html","2ad335f523ca6dad07b7f9e97b35890f"],["/tags/调查/index.html","8b526381487db70cd3a3a35c0c270a07"],["/tags/部署/index.html","2c24a4820d86631625f5934b43f1f72a"],["/tags/锻炼/index.html","9922f538cd4e6e46f2625d102b9cdf5d"],["/tags/随机图/index.html","f41bc90a30abc256de501f0813224524"],["/tags/音乐/index.html","a0d00e3c74e00db718371d010b13784a"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
