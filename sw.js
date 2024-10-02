/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","40fd78f1071808d4b1244fdb3285fc75"],["/2024/01/22/Markdown/index.html","7d12f68aa4b95d869d2247e7f7033b87"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","9a072f3d8acc7fc5b2ca8c990a128b40"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","fda7b9492b0fc9074c6195cbeea8f9d1"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","be540ac38d7422da04051a8e5a10ed48"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","ed82572e08bd1158211b41190494ea61"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","4f8aef184380a56c0001e2c64f6d8619"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","a09f2015cfc81bf468754815f7ec8722"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","379930a1479ecd378c58b4f819e9733f"],["/2024/04/10/C-saolei/index.html","4c83a2fda60eceff885107b9ce3399ff"],["/2024/04/10/free-yuming/index.html","9a9e2f49d105a1803c0a615d31dace91"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","5c3dcc74d68b1d685e726d966950a2c0"],["/2024/04/21/kw/index.html","a8b6f88a2fdfd864f870a8f43df6b4b5"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","71e277bdae508e96a671d46a5f3da88b"],["/2024/05/12/music_download/index.html","88a97f5f409a7b87dff88370d02e3736"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","27404181aabf96716caa3ad86e05f035"],["/2024/05/25/Vercel-Typecho/index.html","2235ba0aca9ff9ac903b3693e331d712"],["/2024/06/02/website-all/index.html","253593dc5b61f3f3bd19ff5a206551ed"],["/2024/06/17/tools-box/index.html","0f973a51cd621f1240986c281c391b45"],["/2024/06/22/biibili-zhilian/index.html","167bbcaf25b06db1ad34011107b3e5ff"],["/2024/06/23/sqyy/index.html","c584a808e7656eee43eb3f1ab0a21612"],["/2024/06/24/win-chachong/index.html","3d87bf77c5e06545fb109d65417df36f"],["/2024/07/03/dyd/index.html","2717e59da4bd768451e1571828c10702"],["/2024/07/03/geospy/index.html","470e919c3d12c9a5eef232bc67235137"],["/2024/07/16/TuneFree/index.html","dc3f2d8075d8e9062ee2b482bcc03b9f"],["/2024/07/16/pdf-repalr/index.html","7b6051e5c0bb393ba9b2f19d5700d07a"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","1003504c0001187ce9dae3f9ced9374c"],["/2024/07/23/an-yuyin/index.html","6a0511b471db580d984a716a728f244b"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","5697666e2ab90ad34b1fceeef0db8594"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","9f49184ac7dbbd0afe726baaed787a1f"],["/2024/07/24/win11-win10/index.html","2d8dbf0db6163c9d38cd9f5145f546ef"],["/2024/08/03/wu-muose/index.html","7157e422621c859eade28e61888813b6"],["/2024/08/04/ab/index.html","188dc12759c28bca71a80506352970e4"],["/2024/08/25/mp3tag/index.html","ca83021b5ea416dca380e37183b798df"],["/2024/08/31/cf-words/index.html","68ebe892e4d96f65ef182674d264ffcf"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","521740f4533e93fa785e8cbedd4089ac"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","29bdc81b952943c99e300acfbe585ba5"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","231674fbc6630770039691a5514f2661"],["/2024/09/30/123-liuliang/index.html","8df8cb8af9ac2420491de411a670dca6"],["/2024/10/01/app-allmusic/index.html","f9a27730bd952ea751734fe2d1e79125"],["/2024/10/01/win-musicfree/index.html","37a2403d0a022e241779e34c8f6753cf"],["/2024/10/02/fire-xinli/index.html","cbb014b007586bac83e11ca67ab7b820"],["/2024/10/02/win-wyydaili/index.html","c2f6dddfc2408c7ee391f9a34e53581e"],["/404.html","3b9984728f5540ef7e52130d3bd88ffa"],["/about/index.html","32c748af095a7b9a59a7039071696539"],["/archives/2024/01/index.html","2da66f3b9de03dcd7c2988acf0700b13"],["/archives/2024/02/index.html","d5901a369764df4e4235d029d187b3aa"],["/archives/2024/03/index.html","7f59aeff48d756daff389585c1ba426f"],["/archives/2024/04/index.html","ca2d389147863d056d0a616786d6a5e8"],["/archives/2024/05/index.html","c8ad014903866b172c107334c442a543"],["/archives/2024/06/index.html","f8e9483296a43dcf5486e49542085cf1"],["/archives/2024/07/index.html","d954d5c67376bb865f2b90e5da7fc084"],["/archives/2024/08/index.html","4a54e33491492a87bcea7a83c022528e"],["/archives/2024/09/index.html","e65a08b25693f5c4c9b7cbf26d775e2d"],["/archives/2024/10/index.html","5c2109e75533b6d9a18ee8f8a617c740"],["/archives/2024/index.html","7c3601fde4e28cf5d235dd4caf4e1e6e"],["/archives/2024/page/2/index.html","38910fa55d6dcec9e1f268e4918317df"],["/archives/2024/page/3/index.html","2865b66fc7ce4f5b6b0d2c9cae563f56"],["/archives/2024/page/4/index.html","cd41c872b2507d92699e5bef4f72eefd"],["/archives/2024/page/5/index.html","47c69b7467bab633b144e77a6b567830"],["/archives/index.html","0bab30f55d4baaa616a2ce5cca5177a7"],["/archives/page/2/index.html","7a9d16428486e086e8d5b825f53f5067"],["/archives/page/3/index.html","9ed9c6e98bc338177e79d5b206584883"],["/archives/page/4/index.html","bafe6d5c46a6f05b4d39d87cae9251a3"],["/archives/page/5/index.html","8ed41a2b448f7c3d83ef8e346da61bf5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","311524cf6d7e3e51abc0ae71ba1f4095"],["/categories/index.html","02900447122d9acb474642ba43e4a12e"],["/categories/学习资料/index.html","93a0a0ffbe716068d44453b1a6250fda"],["/categories/安卓应用/index.html","a0b01a86be8bfc48177b6be5163c616f"],["/categories/实用推荐/index.html","56dc835377385e61e9b9ba453b9588eb"],["/categories/实用软件/index.html","c0ab98a1aae0bce9625b3d5df5d90a43"],["/categories/心情随笔/index.html","07f99d8eb73adb66d3832188db79fad5"],["/categories/心理实验/index.html","191cee15090e1b76671687ffe0e388e6"],["/categories/技术分享/index.html","da0e61c0a9e0b73d0cc12c55e3363ebf"],["/categories/探究所以/index.html","e242fc737948ff9d6dd57d2c580a0e88"],["/categories/硬核科技/index.html","a8f15a30653e9d00a0290084c7ae0f41"],["/categories/硬核科技/page/2/index.html","89f7b193433e1617aef9202c3689152f"],["/categories/编程语言/index.html","111743e8e1f2180b6c66c44d100187da"],["/categories/网站建站/index.html","4fb3fc48ebe90ffade4b043e4833ded3"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","69939fd41d5c08e7458278d2a51c7a8b"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","0852d4cd2e4c3544361536ae4598196a"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","6a12abcb040713be316d514112cf06bc"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","161f5981112930a5259c2e4409234896"],["/message/index.html","d543d4ce22be7955d7451501dd216c45"],["/moments/index.html","726208020e104eb16395cba715456857"],["/music/index.html","aa05a2978b8783f37d600ab485b972af"],["/page/2/index.html","8917a0ce108639ded1e5a28b78717549"],["/page/3/index.html","d2a4532948569c7f441d0181cde59a0c"],["/page/4/index.html","c8ca37711d03d25ea2db12e5564db385"],["/page/5/index.html","8bab142282da379b882858fffd15e562"],["/recentcomments/index.html","1703831616c0e127097e5100ce94ad78"],["/service-worker.js","ec3188765fe575842049cda6970a63b3"],["/sw-register.js","b931e05385541a0b9201dc501835b8cb"],["/tags/123网盘/index.html","3ae36b473eea31731a27c6a7be5adb26"],["/tags/C/index.html","bad14bc9492f91b8f185d80c695775a1"],["/tags/ChatGPT/index.html","bc2df92cb8d2e1fd2d5af3c585961b25"],["/tags/Cloudflare/index.html","dea886cacf2798f01ab5d94474548a4f"],["/tags/Markdown/index.html","661ac8944fa0a533dad15a5e2d6be912"],["/tags/Openai/index.html","093ca09bab2d0c26bbe317fceaf14d81"],["/tags/app/index.html","f70282952b29741b49d61465f3d91fda"],["/tags/hexo/index.html","aa1cf5fd57a573fd36777495e86c144b"],["/tags/index.html","54640ff3ebb0645a12695c841935f162"],["/tags/信息修改/index.html","201513d5bfdcb030b71baacf9fc43268"],["/tags/写作/index.html","4aba4cd64d9dbdb2562af42b12dbc225"],["/tags/分享/index.html","67f63a88bd6aebf1725539699ed30b0d"],["/tags/吾爱破解/index.html","ba880c8246d54b6ef7eeaa398b6d0de1"],["/tags/安卓应用/index.html","74361b331dd48660013c48d0f296e315"],["/tags/安卓应用/page/2/index.html","5bb1841d796561c6232dbae49e466e8c"],["/tags/安卓软件/index.html","517db0b9d9eb49ec2811ed4b0ae8db3e"],["/tags/实用/index.html","05e587409f49b98e224bd25507237ff5"],["/tags/实用推荐/index.html","bb411aa77cd8bf668c44c16f560f1dce"],["/tags/实用推荐/page/2/index.html","c778c5b699901d56787c2d845b57d9f7"],["/tags/实验/index.html","48560341a32d746400046e78fcdd45de"],["/tags/工具/index.html","edfd3c466dba7c238e72f5e6f2e05e13"],["/tags/工具/page/2/index.html","5987b77875cbf923e73dd6cc60633b19"],["/tags/广告/index.html","1d758938d2551bb51e93616f08499bdf"],["/tags/建站/index.html","83aa6b00185e5e0fd9e347e1b843b3f8"],["/tags/心理/index.html","beb70187b87d4464143a78cf5bf11d18"],["/tags/思考/index.html","801a57b16e0314cdcbe835e32149d8c2"],["/tags/技术分享/index.html","7b26219a66d9081be759ffec6458edc1"],["/tags/指令/index.html","48076c37ddcd3c9243acf33aa1e68b22"],["/tags/探究所以/index.html","362bb52d296d19c93913dd552c40967e"],["/tags/推荐/index.html","4007898e0961fef44c238ba14029b48d"],["/tags/文字语音/index.html","7b468f848b2383a175346c05fbc64b1b"],["/tags/班级/index.html","b96d4b6e7d286ce579999e77f41805c5"],["/tags/电脑软件/index.html","b93977db0628467c36cc13baa2e671c2"],["/tags/电脑软件/page/2/index.html","343b4a8b2bcbb84feaf3541aa15f49ff"],["/tags/百度网盘/index.html","f1679e1221cfba1fc9b1158fcc3000fb"],["/tags/科幻科普/index.html","2c9b57970f34a54910e8cd6eb210264a"],["/tags/精选网站/index.html","f7bcad1662b75a8db2ddf7d095d17ddf"],["/tags/系统优化/index.html","decc037bb32f8f66b5a481dbc9d355c7"],["/tags/编程语言/index.html","9b91b0d6ffb9ceb75f2dd901092c6edc"],["/tags/网站建站/index.html","657edb037560efdd64b1c63291503897"],["/tags/视频/index.html","9fe2d841e8d32e38acb6fc51841c8593"],["/tags/计算机/index.html","ac6c8ac68b0a246867eedceb793017a9"],["/tags/记录/index.html","1e2a212350ba978bd31331b05d9fdd62"],["/tags/部署/index.html","d8c505f9ee6f935e8aa9bcd4e42ff569"],["/tags/音乐/index.html","1b3a61165a47d1179498e7eca99f22d9"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
