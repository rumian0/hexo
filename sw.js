/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","8df0ae14fcdc778a0dcb6963bebc2359"],["/2024/01/22/Markdown/index.html","ee1686980ae9d3ccc296de5e9a64e4ee"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","a8e387ff9bd9c0ee9f41e9eb11ffbd1c"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","c99b92b3d70d8987807755ff82733263"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","65d82d6e50dca1fc90987f11da715b1f"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","a4b17053e4584ab965907b762c114408"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","8976560935e3e304080706fdaab5bae0"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","63f1d5603db0b24f62b7a293bbf90bd6"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","54d010d34659bfc753155f6235054df8"],["/2024/04/10/C-saolei/index.html","4469f3a9adf03f8f48de200f1f0f8ce4"],["/2024/04/10/free-yuming/index.html","4ef34d1b788b9021375b53abb6431c7f"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","d4446f9fa47ac58a4b0e0be277cd13e0"],["/2024/04/21/kw/index.html","3d32d9dde44c97b485720c77faa93c69"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","fc8d5a81196bd58424c5e9f7a1d87098"],["/2024/05/12/music_download/index.html","49b8db7e2301b1b87d38e081ea6f746b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","21fa612259c83d739234852907674fe9"],["/2024/05/25/Vercel-Typecho/index.html","7c1f15e737daee83360a77446740b3f2"],["/2024/06/02/website-all/index.html","59568e5c60fac3c96470518818325e77"],["/2024/06/17/tools-box/index.html","9d9bb1e49464a3fb06740abdf9c16524"],["/2024/06/22/biibili-zhilian/index.html","be65e12069ff7fd32e3ee0fc89ea5c36"],["/2024/06/23/sqyy/index.html","8172b5c12f3a40e95da2f79767ef628f"],["/2024/06/24/win-chachong/index.html","0c9683bfd4b38dabcf57f18546d5cde2"],["/2024/07/03/dyd/index.html","2a44860539c124de64c25734a2e30006"],["/2024/07/03/geospy/index.html","327a39669cbe1ab2021829c3fcf913e3"],["/2024/07/16/TuneFree/index.html","6cfb14221899da9069ec597c99002cfe"],["/2024/07/16/pdf-repalr/index.html","6f2d9df253646baf04ca51ba5b0a8d17"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","3a5982f60d7c6d337a2238687e6061b1"],["/2024/07/23/an-yuyin/index.html","f7330dae8ac95d4165071ca686beea14"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","39bc78584ab25d1e873d05c2996af420"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","66eefe3f0bcd3234857b11579ff97374"],["/2024/07/24/win11-win10/index.html","f1c5b293e16f529bc420f39752f08902"],["/2024/08/03/wu-muose/index.html","87c9c72de710eda48e0c2431a00a114d"],["/2024/08/04/ab/index.html","71e0901d9df92078f51302213c0ca9b9"],["/2024/08/25/mp3tag/index.html","4486bbe26156c86d1b2c6b090eba0223"],["/2024/08/31/cf-words/index.html","dc08df1c3199411811591f7cde12221c"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","295ab5821da74322bddcfe53941ed117"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","4756ac0d931207d88ca5ff5d4b3e2250"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","ff175f20117e9c18fd36996244cd106e"],["/2024/09/30/123-liuliang/index.html","1356e11f38200bd5afaac51f62739d27"],["/2024/10/01/app-allmusic/index.html","91c2f458c1c43463a7721ae1101d5bed"],["/2024/10/01/win-musicfree/index.html","8dd6bdd4e17f248173ce42302694d9cb"],["/2024/10/02/fire-xinli/index.html","774d538229aa188625da716d06df5994"],["/2024/10/02/win-wyydaili/index.html","aca20e81b4976bf0dfe46e03dc33fba2"],["/2024/10/14/qq-histort/index.html","b7ab92f880916836b6ae96df9ecea1e3"],["/2024/10/26/suijip/index.html","40e31e2ece0f790755b4b275369ff239"],["/404.html","578f20d15adb46e540d7d9d236ff48a9"],["/about/index.html","c405c76d6313a9b79371845468536988"],["/archives/2024/01/index.html","d1f0e1d3bb6f1730fac28575d16dbc14"],["/archives/2024/02/index.html","c896b28bd3b51d2fa587fea187c534cc"],["/archives/2024/03/index.html","05cac30427114b502c084c7875a22d8f"],["/archives/2024/04/index.html","c07d620ded7f0a044ec3eef9c03afd11"],["/archives/2024/05/index.html","c4253913b08a9e3f84d68e48742d5187"],["/archives/2024/06/index.html","7968a0512d6fc193715c2feb2d527b90"],["/archives/2024/07/index.html","2faeda60975c0e9732684688776b473d"],["/archives/2024/08/index.html","92d5f806f955a0ec6fd489d57efe5923"],["/archives/2024/09/index.html","99d5f6664fdc72834793feb9d3027a6e"],["/archives/2024/10/index.html","5924efffb1f0bdce05ca7aece8bb6291"],["/archives/2024/index.html","52a6754ef30d38f8d21f709ab035b98e"],["/archives/2024/page/2/index.html","8c531a33620cf7c5f46ce32a14a27b15"],["/archives/2024/page/3/index.html","8e0d022a3428ca7ab2c7d1c75d841c56"],["/archives/2024/page/4/index.html","f52c715a5f78bdcc08d29a24b7622cc2"],["/archives/2024/page/5/index.html","234551277e58f6dd80f5843b4a1029aa"],["/archives/index.html","a5facb220d899a5fee0c1a0230a0f72d"],["/archives/page/2/index.html","abdb5bbfe8b5df9d88bf8c53c4539422"],["/archives/page/3/index.html","f411351ee25d2ab3bad4e73f180f4a1b"],["/archives/page/4/index.html","bc415ee4469989d12836878392fdf270"],["/archives/page/5/index.html","0401a31801a5953c891c52d49796860b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","d18d337e0d825219de3618ee7b8c9ca6"],["/categories/index.html","33e2c4a3e9183f05ee27d01c2c7892a1"],["/categories/学习资料/index.html","7e74ed9ee6effd588a349a256a80d218"],["/categories/安卓应用/index.html","2cbc64fed0f42d8ec38c46893cee933f"],["/categories/实用技巧/index.html","8fc97c9b7788a805efc6a42c26d2ef01"],["/categories/实用推荐/index.html","d87dd9ddc9138c75aca43b2107b3169c"],["/categories/实用软件/index.html","7a7a895aa2281b4ffc79c83e5ab916ea"],["/categories/实际生活/index.html","593cabb72596c9f4d384fecb6c73cad6"],["/categories/心情随笔/index.html","ce114195f530f99de014935e304dec83"],["/categories/心理实验/index.html","ae1e2174d6d9a8cd21c07331409db8f9"],["/categories/技术分享/index.html","a1e648891f0a59ce825ceae0695b169f"],["/categories/探究所以/index.html","563970f5c7d8bf995bf39039aebd23f7"],["/categories/硬核科技/index.html","d955f453f96e610e1c1b57a23de9fa5a"],["/categories/硬核科技/page/2/index.html","e5cff8f1cb3f8792d52496181860d3d6"],["/categories/编程语言/index.html","1a20a77dc2cedaa45101d1180f94879e"],["/categories/网站建站/index.html","ca6586d83a82ae5a7f76524b168b79c4"],["/cookies/index.html","5635cfac925d69aa46c6ba95b1127cbd"],["/copyright/index.html","2b9288695254c1c1eb474a55d0b16d20"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","234f6240946e3f44b933727222b0bc7f"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4b81acc6569da6597a6df9834a85a61a"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","baca610cf2822ae4d9edc030047d6fdf"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","f3bb28a9dc593bceac6077f742f561be"],["/message/index.html","4acae9f9300f4766fe82092925cbd92b"],["/moments/index.html","83136a1b043a8fa34fea4da548c94806"],["/music/index.html","44db96d951f6edd38118dcd3b1ceb01d"],["/page/2/index.html","38d25675d12d972ebc0c646bd130d414"],["/page/3/index.html","439d775aeddad24dad4bd17ab052f4b0"],["/page/4/index.html","af102102ae9629728288c41dee0ff1b0"],["/page/5/index.html","729f66fea68e3c495fded756dbba0865"],["/privacy/index.html","19f7ab0dd0dce751cb316bf689452535"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","a29035587e071146848b4ff6e9422469"],["/service-worker.js","8acb5405d1fe589c1d86b8adcc5f9e4f"],["/sw-register.js","7a5a1e5fe074c93827e7c18384ac2342"],["/tags/123网盘/index.html","2fe06cea256a6bcf5d19c07d265a386e"],["/tags/C/index.html","116eeeed6f1d072b350c891bfd26e1fb"],["/tags/ChatGPT/index.html","630783722a9b07dfaabae9523166477a"],["/tags/Cloudflare/index.html","a635f9615c7d5572cb443bf0da81f966"],["/tags/Markdown/index.html","8e915318d9bd49a2d0d92797d25af0cb"],["/tags/Openai/index.html","c0fd17f31dfe94544ed1f053d4cc8026"],["/tags/QQ空间/index.html","3e80fb4e477f22e7ff44fca5c3f19b95"],["/tags/app/index.html","b604460df42a440f80771628b9343b14"],["/tags/hexo/index.html","c9b6bff87b0ac7dc6a0377265b3e41ba"],["/tags/index.html","596f11ecc048d8c73c6b99f689be0a89"],["/tags/works/index.html","3b8406ef68c825c17aa101e034e6c0f3"],["/tags/信息修改/index.html","28855b0e42c91a25b4fc828717555b82"],["/tags/写作/index.html","5e691e0ef99ec02f71ca02a1a3158f31"],["/tags/分享/index.html","a2f8b2fee366ae64ed3911b6f70d625b"],["/tags/吾爱破解/index.html","da2e3f0ac2ea59bda3fbf7b2f22c4189"],["/tags/壁纸/index.html","8c9012aa7f478cb5489333ee9ab67eda"],["/tags/安卓应用/index.html","99e9da82e903d7feac9012552afada3a"],["/tags/安卓应用/page/2/index.html","98a493a71cc4c94befff519b13fa908b"],["/tags/安卓软件/index.html","09aee751c72c2c95ae0851653e488153"],["/tags/实用/index.html","22ab9db914eae98b5eda6cccc6c1a957"],["/tags/实用推荐/index.html","632c3f2ccc2272d056704582185f1227"],["/tags/实用推荐/page/2/index.html","f2459a0805f96015268dc3c3d936e591"],["/tags/实验/index.html","982d41061999b3245b5d5816cb055260"],["/tags/工具/index.html","ede18a8f363ccd7cd639694674c82e25"],["/tags/工具/page/2/index.html","1f9743aac10970eae6e92972aa71cf52"],["/tags/广告/index.html","64f2df5b3f9adda90ea698bb6370cbcf"],["/tags/建站/index.html","268321c191c5e56b2fc46e0e936bfdfb"],["/tags/开源/index.html","c3499448a19a5a72c0f6497a9db818b1"],["/tags/心理/index.html","72f9037cb5d20805d9d6a6614a39c654"],["/tags/思考/index.html","4246311d167d59870dfebd62df790f92"],["/tags/技术分享/index.html","99149ef126a82e8c87d36f8ad15d387e"],["/tags/指令/index.html","a7b619a081b5edf3005e8da8b3993546"],["/tags/探究所以/index.html","a3415a75cfafb9624a883f7c44c52487"],["/tags/推荐/index.html","f15e9618f728eead8341ebdf72688b23"],["/tags/文字语音/index.html","80b284002c68e3899b8a155ee0de0d11"],["/tags/班级/index.html","c3f841d7c6648840258fa53382b1aa2f"],["/tags/电脑软件/index.html","f0a5dbf921a98ea18ead79c3dbf68a25"],["/tags/电脑软件/page/2/index.html","9073d0e537692203a2fdc2d42674ecb4"],["/tags/百度网盘/index.html","f17fff40f6d19f4a21d28bdc9fdee3a5"],["/tags/科幻科普/index.html","ea44dddf571e7bef93562863f4957fe6"],["/tags/精选网站/index.html","12e0dcebc7c6300f64af2cb862b0619e"],["/tags/系统优化/index.html","37957e2708601ceba2ceff215c3df984"],["/tags/编程语言/index.html","ee159fb8ab25c30f8b821892b5ec57a6"],["/tags/网站建站/index.html","4b66dfb0eb23ba2e5a788aa186a23990"],["/tags/视频/index.html","ec590ddd3ca92d9a503f587b3656ac25"],["/tags/计算机/index.html","4422deb14c9e9e78a06159c6255dad15"],["/tags/记录/index.html","dda7d9d016c6d508fc5fcf55f3b68424"],["/tags/部署/index.html","94e934449e9afca5d440caf76a3b815a"],["/tags/随机图/index.html","3e21ba8092de3b5d1ad1401eefad861d"],["/tags/音乐/index.html","be7c59f3ec87ec1f5b1cc4efc729d17d"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
