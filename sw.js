/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","0009d876526639ebf73a1b540a07ee1a"],["/2024/01/22/Markdown/index.html","8f1d1bd1418bcaef5ebb3b92fc9b3fce"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","209ef51426682df6e4338832e6f9e489"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","41c123235f3711ad4a34ee202f4ec297"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","413b298e9817de5e23355941ae3f8402"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","05577daeaed4281f57b2e2cb40e01106"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","633ef7afc774fcbbcb260218c6928810"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","2422929b4d575d57241818af5bc40b9c"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","9693b699ecafc793ee89d8f790ee708c"],["/2024/04/10/C-saolei/index.html","534e05ba49d1066edf0fc9f0dd7229cb"],["/2024/04/10/free-yuming/index.html","4fccdc031988ffd5aa5b25997548680b"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","06b8b6e931d867c0349365694e688e31"],["/2024/04/21/kw/index.html","daf392862c5437e7bffdffa5c3e565fb"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","bf27aa9dc940c0d4abbc0c33d02002f2"],["/2024/05/12/music_download/index.html","428d3442f72d327f54e96302199164e1"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3a7c48a23b04e87d9b63dfd0c9d52da9"],["/2024/05/25/Vercel-Typecho/index.html","d4ce1986a8eef886035961683bab427c"],["/2024/06/02/website-all/index.html","0671b58ef9e7715b040e1fbdb53fe1a4"],["/2024/06/17/tools-box/index.html","c74ae412450ca07603dda2c92cf7fb0e"],["/2024/06/22/biibili-zhilian/index.html","2e0211d80231e422aa29652b10e93904"],["/2024/06/23/sqyy/index.html","eb250d1d01bc0273c010ab793503d343"],["/2024/06/24/win-chachong/index.html","2fdd621e693245a6a172e29bb0f05a29"],["/2024/07/03/dyd/index.html","149d20d2dbcc9e62bb2f5fc20ae572bb"],["/2024/07/03/geospy/index.html","46026f58d9080fbe7017efd64e974a66"],["/2024/07/16/TuneFree/index.html","29dfcbdffc52fb195d48be815b539f1c"],["/2024/07/16/pdf-repalr/index.html","7722e5122b7dacf848abbf31fe71d3c4"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","7629691b1214fe98cc20d1a1707efdd2"],["/2024/07/23/an-yuyin/index.html","3c2299a338cdd50a5494786586c1e557"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","e13dd109b3808594351e69aa1b497f4d"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","6d95ad8d27f383762057272a2db32e2f"],["/2024/07/24/win11-win10/index.html","adc00fa06e9f125d072932175e4aaad1"],["/2024/08/03/wu-muose/index.html","4a1f322eaf76bb9afb35e301a01dab7e"],["/2024/08/04/ab/index.html","88e9991ede97bbea05a0a39d6cf4dbdb"],["/2024/08/25/mp3tag/index.html","21a71a3ca4ae2b91c3e2202a2adec448"],["/2024/08/31/cf-words/index.html","3f655bb7e48ac67e6ad4373dddc365af"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","bc19ba848da785e471afd78a98ad5607"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","5bc8b280a5765ffc4349421053fbcec6"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","f57da24ac73f5acaa9c2740ad39667d5"],["/2024/09/30/123-liuliang/index.html","d944bc31c1248ac6073edd8733778377"],["/2024/10/01/app-allmusic/index.html","8508b6fa0c0036edfbe6032ae28716d0"],["/2024/10/01/win-musicfree/index.html","17a7e5018844d38a820c7a49168035fc"],["/2024/10/02/fire-xinli/index.html","3c71018560ea25c2f96cbd128dfcb4f2"],["/404.html","54d3112a37b2bad164eb62f9ed716235"],["/about/index.html","1942baa87d8b8102663a6bbb5d4084c6"],["/archives/2024/01/index.html","cd6b59cc014a31f5b63f1fb3289aeb4c"],["/archives/2024/02/index.html","fa7c6e5a9d58bb141edb0a7316d343cf"],["/archives/2024/03/index.html","8a100f6ed74feb1334e5b3b5d0e476cc"],["/archives/2024/04/index.html","94485c68f7ea6557b3032d95dd817203"],["/archives/2024/05/index.html","b9f62c464c33247935588a15709ea1df"],["/archives/2024/06/index.html","14a3aa33e2cc47c74533c33dcc69604f"],["/archives/2024/07/index.html","a19f4777108116e9afc2d5360550ce7a"],["/archives/2024/08/index.html","5311d303940a0280b8304b6ca46f6c85"],["/archives/2024/09/index.html","e097474a1c47537ce0ecd45fa7fc9f08"],["/archives/2024/10/index.html","a2f61210df3e10800d435bfb80290cbf"],["/archives/2024/index.html","e5ee269f268ded1a21b5bd00160bbac4"],["/archives/2024/page/2/index.html","e542a43a22ea9177d9e47fb1396fedb3"],["/archives/2024/page/3/index.html","be1665b001f1315e87787b7adc093377"],["/archives/2024/page/4/index.html","2ddb6cdaf84623281b5edce1fd8beab6"],["/archives/2024/page/5/index.html","baa062d8cb76a466700eef2f47f9d0d5"],["/archives/index.html","a4d4615d3affb64228e57a71dbe9372e"],["/archives/page/2/index.html","62b5b877ae66016188001819e8f42469"],["/archives/page/3/index.html","8e7dfe4139137478b3e6e905487da301"],["/archives/page/4/index.html","d9ee74b74506d48902429e62c4ecde32"],["/archives/page/5/index.html","438e8859408016e9bb1a20bca63a8a3b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c5804729a192c6d961ae48a9421a79ae"],["/categories/index.html","8263ea556c433e9d2df0ac89b58b2a96"],["/categories/学习资料/index.html","21e5d1b635369a263f71fb2947e3dc89"],["/categories/安卓应用/index.html","6eee3f6d0b4e753eaeb030518a7f5c63"],["/categories/实用推荐/index.html","fb5d560013e285e5848bd277a3c0a291"],["/categories/实用软件/index.html","ef58cf3d38f3631df7d81329db10aca8"],["/categories/心情随笔/index.html","bde9b56371eb1a04f929c83d49bc7121"],["/categories/心理实验/index.html","29e48a4f1a43204da44fa14f3194b8f8"],["/categories/技术分享/index.html","4fd4c09e17a59a7a113fe3fe2b5307d5"],["/categories/探究所以/index.html","b59a6572119d63c98cda5d9226b90a94"],["/categories/硬核科技/index.html","a93c15de0612e99e30265f11910b67d6"],["/categories/硬核科技/page/2/index.html","463c20ad2b4b4fec5d7c664d853c6863"],["/categories/编程语言/index.html","f441c59bd07706bdd1256ae3af961910"],["/categories/网站建站/index.html","512ba6298b16ec7d7d92ef841af96258"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","8a6dc525f4424bd37e6bd21c82e1501c"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","571e867ec555ca89907078959b4026ec"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4b4cbd5fce0643fae94c5385dfc402fb"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","955854ccb8cc78bd620186eca453d52a"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","bd45b71a4b8181fa7f3a71d2f06df206"],["/message/index.html","fafa4d00c2f69913dc81e6e438b3bdbd"],["/moments/index.html","bec9808f7c81c7d661fedc46720dca5e"],["/music/index.html","04631ef2680d1df20f85aa185af771c6"],["/page/2/index.html","e0a05c589775831756e4871f5a35de1a"],["/page/3/index.html","7af66f09da01ede0c833fc996cbda803"],["/page/4/index.html","c51b9d45843882978f9162bba4f6184d"],["/page/5/index.html","7725369ec2b7fbbfdb7f8e0bd0ca543b"],["/recentcomments/index.html","e7aa35471929e9ae06dba552fd08085f"],["/service-worker.js","dce721ddb55f3983266e12884fb1a6da"],["/sw-register.js","a9e711b19040496aff4d758601f5b3c0"],["/tags/123网盘/index.html","277d340a267b79eaf3c7f3ccc9ce3cf3"],["/tags/C/index.html","4c4717433385012657a0c091c9803df0"],["/tags/ChatGPT/index.html","5ed194e808ea9e39e934475a59ca1c18"],["/tags/Cloudflare/index.html","a258f405fe4c9c368fc81a8e49a8efe4"],["/tags/Markdown/index.html","d398e1d6baee36a060de841a577dadb3"],["/tags/Openai/index.html","a21b8305ba37e3c7880aafd2b5fe2762"],["/tags/app/index.html","8e12bad4bd9eb0d5c640c9892d727bd9"],["/tags/hexo/index.html","c2497c3861a4cd8681d69dde41884a01"],["/tags/index.html","33fee9900391fd87425c36c6e2005bb1"],["/tags/信息修改/index.html","67ba174c83fee300a41ac096c3f0acb8"],["/tags/写作/index.html","985c8f22530513fd27985d6079400755"],["/tags/分享/index.html","60553e35685d44b1c3c562f7d5152324"],["/tags/吾爱破解/index.html","32e675251172130b8e70955aa7fd58f4"],["/tags/安卓应用/index.html","a7433d5fe86768850ff8c31125c07c7d"],["/tags/安卓应用/page/2/index.html","4478c477b4fec37e905baf1ac8336b10"],["/tags/安卓软件/index.html","ba183862871cf20daebe1f33a35b82d0"],["/tags/实用/index.html","ebc6381eead93f1dcfc84433cc6d8ab0"],["/tags/实用推荐/index.html","ee0c9e8cd9e6f186d2a83c2c579b5c04"],["/tags/实用推荐/page/2/index.html","17ca68c84575de015080bfb4237ed74f"],["/tags/实验/index.html","40ade8604cbbd44f39bed9e8b91f83de"],["/tags/工具/index.html","3a2eb825f8e988e1a924e871d21a278d"],["/tags/工具/page/2/index.html","1b3d8f80cdbfa93d5e4ba3b64d5c2219"],["/tags/广告/index.html","47da7c12c1ad597055c99fbdd4d4f416"],["/tags/建站/index.html","70e144e1d15978a7c3f799c2c32032d4"],["/tags/心理/index.html","bd028ffa945382ecf5d64310edeca46b"],["/tags/思考/index.html","a7aba432e3a76333bdc69435825e5c91"],["/tags/技术分享/index.html","f4c0e8786715df9fd0d3afeffdade3a9"],["/tags/指令/index.html","65b85e5a9ed4ccc8a3e8c85f4c7e775b"],["/tags/探究所以/index.html","964c3e0c63cced020602a1db495d32a7"],["/tags/推荐/index.html","1d0e00e153c263d441c4e72a487d7a89"],["/tags/文字语音/index.html","f290965a60881928f30c078cf1543ee0"],["/tags/班级/index.html","0d0466ddd550a134d417cdba42ac132b"],["/tags/电脑软件/index.html","29be0d3371b0721d84a914711a129f3b"],["/tags/电脑软件/page/2/index.html","4e0bed10467cd9dd1e38b34fb8f0d66c"],["/tags/百度网盘/index.html","db9208ad97c17b3ce360fe85e3b20f63"],["/tags/科幻科普/index.html","d9adb075f7738e4a7eb033784043fc94"],["/tags/精选网站/index.html","c101a38c235045ccfe445270a6212e5a"],["/tags/系统优化/index.html","7670b3722d8154c905a606cf9c571ff1"],["/tags/编程语言/index.html","55272c739d8be97b3a1c92e52fcd3a40"],["/tags/网站建站/index.html","84e29b010ad951a880b05a5aadf3324e"],["/tags/视频/index.html","722d7b1e9b169bfd857705ada2c0bc78"],["/tags/计算机/index.html","f6bd088b1c12559cfeb3816c97e2a94c"],["/tags/记录/index.html","0622ae2dfc50561052bd6259e649692d"],["/tags/部署/index.html","6d007746d3caec081507d7a556bed60e"],["/tags/音乐/index.html","401eef42fd60182816c47d2bdcafb2d9"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
