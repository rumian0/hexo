/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","34662985c6f77a5c1125e8cb23cc111b"],["/2024/01/22/Markdown/index.html","053d5ec16bb0c8cdbeff990666d75364"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","4ff75b136d75784d3613fc8085b18b12"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","7362af38dbf038cab63caa133e2ed6d4"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","576097da606d15e6f65994061a5cd2bf"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","ad37aa15e04afcb9d0f580e6bc5da873"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","b79d523922d8706f6992655c27014a1c"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","9d98b1c53c44ecbf28ca8e5d4271b049"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","736eb13ef4a6d7412d6a8a76ea7f12df"],["/2024/04/10/C-saolei/index.html","b4f849efed3c64984ca2eebd9405d5eb"],["/2024/04/10/free-yuming/index.html","12556129a7429f2582ff3ae6acc3fc32"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","f08807e30693c77afd790672a60b0b69"],["/2024/04/21/kw/index.html","db1b4307dc0777309172bcfead5189b1"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","5494f77fbf32a2d14c53320d00ce53d1"],["/2024/05/12/music_download/index.html","c3c398dfd393256fd5fb94a019edf2a6"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","7d73d42614ca91d81c95de1e9853df75"],["/2024/05/25/Vercel-Typecho/index.html","1034d5a70b0a5587ccd3dc0ff3e30ab8"],["/2024/06/02/website-all/index.html","31505e4e3cd319c1e835d732f79c2b16"],["/2024/06/17/tools-box/index.html","20ce1fd0b4a0d2e0c879d426df746cf9"],["/2024/06/22/biibili-zhilian/index.html","bc9b5aff2116558bacd315edf2813478"],["/2024/06/23/sqyy/index.html","7c56a053366a331ac90903f5e6d7dcaa"],["/2024/06/24/win-chachong/index.html","62678637a9a2bb2c06e8d08a328b28e2"],["/2024/07/03/dyd/index.html","5265a03e70e4d9f5183f9c5166703264"],["/2024/07/03/geospy/index.html","815ec039da338978343cc2b0ad98f62c"],["/2024/07/16/TuneFree/index.html","7d5cffc8366397f3bb3a9cd4e974c6cc"],["/2024/07/16/pdf-repalr/index.html","eba0ecd848856daea552f4015c11b0d6"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","b6e545c34d3675d8eadff7ac87a7fb15"],["/2024/07/23/an-yuyin/index.html","f9e23e0335eb3b49a07bcee1b8901a58"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","2a6a90162711a779a13f056630fd35d9"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","2ca08677e1b4a04c77dc2802d0824e48"],["/2024/07/24/win11-win10/index.html","605996a091b1791176a31efcd2eca3c6"],["/2024/08/03/wu-muose/index.html","841aef4f700bc8fb4f50bd21f6223950"],["/2024/08/04/ab/index.html","05a2ca39200452c3dfa3d335e804937f"],["/2024/08/25/mp3tag/index.html","d8b7f1f670f2146e4b50936c5d167880"],["/2024/08/31/cf-words/index.html","fd3733eb221e58ef59650543dc2d9f90"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","bbd9b9966151db49ce193088203813d1"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","76536bc7fe43d94e77a3f30057bb71a8"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","ba6c4dc0ccebb82dbe55f72a03540f9e"],["/404.html","529501230413487b569391e6de30a9cb"],["/about/index.html","f7eb2b96b5bc6864947ffc6339c3954e"],["/archives/2024/01/index.html","58d94ecc84c0b3da5f51ee2fd188e85b"],["/archives/2024/02/index.html","0a2c95fbecc85ac28958f27c24d2cef7"],["/archives/2024/03/index.html","a1159192a67d75bc64aa5e3e5b49d88e"],["/archives/2024/04/index.html","07a8749c7e1fd874400a251ada8844fd"],["/archives/2024/05/index.html","7c47e431bfe50f02c876e9bd576dda89"],["/archives/2024/06/index.html","46fd4f288835393f6230eefc29c617d5"],["/archives/2024/07/index.html","00bb3814a77ac4471434185f1c282d84"],["/archives/2024/08/index.html","2740dd7400a8e79097613a49712a213c"],["/archives/2024/09/index.html","8c900889b64ed937cbbe825725113d39"],["/archives/2024/index.html","62f68d03f95c17063c0e5d974775fad3"],["/archives/2024/page/2/index.html","0b30742384020483f7d50bc60eb70bc9"],["/archives/2024/page/3/index.html","1c9e2ccec3c533fbd22f010a2896a79a"],["/archives/2024/page/4/index.html","f014cbcb0710a7b704db373ca9b34f8b"],["/archives/index.html","7a0c53b1e4721e81bc97e162d056019e"],["/archives/page/2/index.html","509914d27bbf423e57e2eaeb5c21d69b"],["/archives/page/3/index.html","305618e995fbc13829e6cac49d27fba1"],["/archives/page/4/index.html","16ec31733438157c1b4d47b4af481369"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","471006950bed66fbab4653e98c9b49c8"],["/categories/index.html","af03af40ec64ca5b4c9adaaf78af8e8c"],["/categories/学习资料/index.html","18c880faf7eed311d692d10283ad3603"],["/categories/安卓应用/index.html","9f52891b68150be4f10def6ed837fffd"],["/categories/实用推荐/index.html","ec26e5c1601d2d0ea7f109ba44a61906"],["/categories/实用软件/index.html","73f9e4618dc39b5f1108c49863f60764"],["/categories/心情随笔/index.html","8bccf8be8f871197d0b521296328209e"],["/categories/技术分享/index.html","cf99c28896a8f17d46ae2a2d102368ca"],["/categories/探究所以/index.html","946201cce6986be26aed794c880d465f"],["/categories/硬核科技/index.html","d50b7a3dde48404a0b35f6efd2213685"],["/categories/硬核科技/page/2/index.html","ddf4c42651bee965eb5810ac438816d2"],["/categories/编程语言/index.html","16aa929f35e2ed8fab7aff517ad2e294"],["/categories/网站建站/index.html","c638406fd98c6cca7f3411fe63e0d0be"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","424a1c01018f33ab8d7367d073f1097e"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","10271ed2cc0691916bffd28abfd3b8b5"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","532ce8c53fe364776aa547b4b4b3a429"],["/message/index.html","91ca862e34fb4978b4cc67516519d117"],["/moments/index.html","ff3015e895069b73fd8ba18fa5386bf5"],["/music/index.html","5a07b703315dd3700f3cce3d21875924"],["/page/2/index.html","34e7b95290e7031be26010000ed284f9"],["/page/3/index.html","8a25e5644df1b5952354574baf5aea6b"],["/page/4/index.html","7f9fdb2d323bba8b9134892237a86833"],["/recentcomments/index.html","77f52a2d1220544ee9d54c0a7c22351e"],["/service-worker.js","b615dfd9fca11e37c842459e28682cca"],["/sw-register.js","c024c26881a3307d1cb88bd01696c3e2"],["/tags/C/index.html","ee0bca456054583d407531cc20dd7de9"],["/tags/ChatGPT/index.html","4490161ea6dab4a9483d35f83b5aca97"],["/tags/Cloudflare/index.html","f71d1a9a10fbe6523aa09ce3e26e7838"],["/tags/Markdown/index.html","27de18632bfbd84f09f1f7d1ef298d8a"],["/tags/Openai/index.html","9311105864195b0d2e23822adb48c976"],["/tags/app/index.html","4efd6b9462fb9acf9003eb3238582d2e"],["/tags/hexo/index.html","3457310b5bfd765a82a94fa5221024ed"],["/tags/index.html","eebb65a2ef65cea755e193ec6ac618b9"],["/tags/信息修改/index.html","192fcb80504bb89d9a41df9684a652ef"],["/tags/写作/index.html","6c43356ccb82f714367b3cd82faf1c0f"],["/tags/分享/index.html","b310104e546d7be5c1911d005fe765e9"],["/tags/吾爱破解/index.html","ffb38ea3fcc92f638e39f307c0bee0ac"],["/tags/安卓应用/index.html","0f335f699f26f60fc35ff25ba61c6bba"],["/tags/安卓应用/page/2/index.html","1e846c29246990fb57734529af1a53ca"],["/tags/实用/index.html","60389143b5a21bb3f116466f430453f0"],["/tags/实用推荐/index.html","91448478b811d3350242b82cf61848bc"],["/tags/实用推荐/page/2/index.html","705eebd9de229f6a77d4e817568df678"],["/tags/工具/index.html","6ffb6ef5beea84ff5a022eae1f75d571"],["/tags/工具/page/2/index.html","116853649323aa8a4f72e49dd7ecaafb"],["/tags/工具电脑软件/index.html","2dce0f59312c3e1fda85d4f39acf9140"],["/tags/广告/index.html","7e27bf40820c29fea5d92642e041d11c"],["/tags/建站/index.html","2815c3533c9a4b80136f658e8a095c91"],["/tags/思考/index.html","2e28d6938e229a3975b894697868fb8d"],["/tags/技术分享/index.html","4989b8b37d3e3074e60ba3ddcfa6dc43"],["/tags/指令/index.html","af151bb613280607626b8564c0f3ef44"],["/tags/探究所以/index.html","92e4418d4e80a5cf5286cd1d2c2a2983"],["/tags/推荐/index.html","7b2464f72913e52c974814f79e4cf2dd"],["/tags/文字语音/index.html","d7107c108a352ff64d04281fc16573a3"],["/tags/班级/index.html","f582cfe2b189d7d0f5bcc184a27549c4"],["/tags/电脑软件/index.html","4b2a25f34150930aa6816f3e16962551"],["/tags/电脑软件/page/2/index.html","34bea79663e111500b4bdd29fb0ad4f2"],["/tags/百度网盘/index.html","b17f8e6920e9815e702e372c95f13488"],["/tags/科幻科普/index.html","bafd4bcb0fa64708754baae490fce1ae"],["/tags/精选网站/index.html","ecaaafbb48f735bd0a15d4f27dba2a11"],["/tags/系统优化/index.html","8fa42d6c5c673dba094c889e50ece850"],["/tags/编程语言/index.html","b224e2b445aa6cf755711140b903780b"],["/tags/网站建站/index.html","246a10e9821954b795b862c198e0a3de"],["/tags/视频/index.html","4ff50c67de97a017e2856e58302d3ee0"],["/tags/计算机/index.html","5656bac52a10ad43d981e4c7eea32ce9"],["/tags/记录/index.html","35f3d7e4e1e12a090639a57adc35aef6"],["/tags/部署/index.html","cadd946b573a31cea4eac7dc6f32d4e8"],["/tags/音乐/index.html","17e29bd0291804fc90edf28cd4801518"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
