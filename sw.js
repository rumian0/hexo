/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","c5cfbf17f79d0097bba3b81bd1daf8e9"],["/2024/01/22/Markdown/index.html","706aff5a53070ab75c6ec8e268ca16ae"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","6910691740715ba3a61310ce53c377e8"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","fae34ee8cc261dca98d758974e16a7ad"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","67375655cc7d9abc159911d0d50dc82d"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","689aebab132e607865386bc512c8ef09"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","9cb9c731389fc9ed9cc328cc8d3ba83b"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","c18d7abcb491a88179a0eaa1b97093e5"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","2b1a09a23b61c9b3ab1ce56c2b07378a"],["/2024/04/10/C-saolei/index.html","b1a43b67dd59b835d8adf5a47863dd18"],["/2024/04/10/free-yuming/index.html","6b4b007b6a208644ff629e6550e13f2e"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","b3db4ee004fb8ba74e4ac890c39d39eb"],["/2024/04/21/kw/index.html","09481de92b1d87e430d830d57c85b83a"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","a1083249f6b0df78f02b8fa245af14b9"],["/2024/05/12/music_download/index.html","e50185a9ec8e83f2ab30cbf2d8d82300"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","d624f7408edab2e3cf8a594bbf3c68a7"],["/2024/05/25/Vercel-Typecho/index.html","18dfebcd6433f2c95799fdb3227db1bc"],["/2024/06/02/website-all/index.html","4e383010a4fba1d70a940b2204ed50ec"],["/2024/06/17/tools-box/index.html","66b2a8e979827deb2c63c9e37c26854c"],["/2024/06/22/biibili-zhilian/index.html","de4a80c428397d46b769c18268782dce"],["/2024/06/23/sqyy/index.html","b168987effe3e769c04f98937e67f62e"],["/2024/06/24/win-chachong/index.html","936af2c9e1c1a6c98c9818667d86d20e"],["/2024/07/03/dyd/index.html","4926de9850fd1faf3c2adde399e0103f"],["/2024/07/03/geospy/index.html","98c9a5e5654edfd847cdefefef7e10d5"],["/2024/07/16/TuneFree/index.html","e76cd057128fd1625ecd9fd121ef75e6"],["/2024/07/16/pdf-repalr/index.html","25e3085c2f1ac46a43a2648ff09764ed"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","a7ac015bb1776828461b6b29ba94da7c"],["/2024/07/23/an-yuyin/index.html","5956c8063b20a5d08fb5df5ace73c2c0"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","795dd7943aff1a015961306e889e42e9"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","3f126ccba864d3eea334e677cd8e9e36"],["/2024/07/24/win11-win10/index.html","017cc6ec3bf40985ce9c4d5679476f45"],["/2024/08/03/wu-muose/index.html","5b3b9384532dc72acbeca94b5599363c"],["/2024/08/04/ab/index.html","571cec0b7a5742dd5ae3b749e2522cdd"],["/2024/08/25/mp3tag/index.html","a960cfbc7f6e43afd62ec5c24218e598"],["/2024/08/31/cf-words/index.html","72b265c05f8aea9f1df969a0577d7f97"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","3bce5b98d93ebc0ec18484316ec9c042"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ce66ec3fc71327651311ebf27afdf3db"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","1c3d349f17a004ede0d42755297c35f1"],["/2024/09/30/123-liuliang/index.html","b7bd88fa88f360d35c2bb6238fd104cb"],["/2024/10/01/app-allmusic/index.html","bcfb0b422584236b5eac458fa414cf53"],["/2024/10/01/win-musicfree/index.html","f06f0887a3776a4529cf94f8f7049b35"],["/2024/10/02/fire-xinli/index.html","0face915b7d74112474bf0ea6a190e34"],["/2024/10/02/win-wyydaili/index.html","f1d011742501c3c6b0e6d1f0bef8ccbd"],["/404.html","9570a2ff34458d2c15ed35f64cc79a7e"],["/about/index.html","44c5ec9d7ea34217e8af978b73f24f90"],["/archives/2024/01/index.html","7cdc930c73297a19b1d054338bd7bd52"],["/archives/2024/02/index.html","5baa1f0839c523f0b02f517c8617388a"],["/archives/2024/03/index.html","fda153d5d1cfd0ea6dd597b2a941caa5"],["/archives/2024/04/index.html","d381327cf31a546c65460ab35b9ed620"],["/archives/2024/05/index.html","e4a9848bd829b67142471ed28c697c83"],["/archives/2024/06/index.html","dbe7c20f35683c41ac4bc4d13d10105f"],["/archives/2024/07/index.html","e6ee6958089d1b2f0b26f92421a963a8"],["/archives/2024/08/index.html","81b918139b7552bc2960d0587f944290"],["/archives/2024/09/index.html","fec00f3e69c5cab691b106bf0c764afb"],["/archives/2024/10/index.html","f525635243c233c0b41a22317d45a74c"],["/archives/2024/index.html","2d92080ffc9f642f4a8a14c496bab30d"],["/archives/2024/page/2/index.html","e67250dbc299ed30151db17febd40375"],["/archives/2024/page/3/index.html","76150ba8d2ede569647f9cafa8460797"],["/archives/2024/page/4/index.html","3b58b1289050f698da213447c3544d15"],["/archives/2024/page/5/index.html","6b196a3797d87750916a648e63ed07e7"],["/archives/index.html","0c3d431376dbf3c5913159c171945859"],["/archives/page/2/index.html","f29739ed029bc4eb1efc5a9a83f7575d"],["/archives/page/3/index.html","338a2c849aea6f2bdae941b9553486e6"],["/archives/page/4/index.html","d428d50b7ded7cb2410df17de8b2f61a"],["/archives/page/5/index.html","a8ed52748d73a1010c0d6a3a4f036105"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","17cb21aa4ce7f6aae446a10ec2fff9d5"],["/categories/index.html","65357475819ff32a0d57e468884172c6"],["/categories/学习资料/index.html","7a793f0cef5dcc6976647dce8bfa6784"],["/categories/安卓应用/index.html","22456c0c8d8b0beb51d30ad11869f36f"],["/categories/实用推荐/index.html","c9744b4ff2b9b8707c73272430ed5ffe"],["/categories/实用软件/index.html","080428c15933c6b1cd45cfca372c50fc"],["/categories/心情随笔/index.html","37791c5528e1ee0d259ba67215eb3382"],["/categories/心理实验/index.html","045ee8dfb72739c7f7e87ea859614216"],["/categories/技术分享/index.html","d7fdea02334ef80f644e8a0037e370c4"],["/categories/探究所以/index.html","6c7bb0ed542cfa0777f85ccf1a592980"],["/categories/硬核科技/index.html","99cc843d79c7d7087f88b630f36e17b7"],["/categories/硬核科技/page/2/index.html","aad37d4cc301210d0d65f223678a2128"],["/categories/编程语言/index.html","716359f4a6719c969e4592cefc766154"],["/categories/网站建站/index.html","9de7721e029ede20a64bdce74e165cbf"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","7a4818427eb9d629e2f086004e5f3fcf"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","3e97b04ddf05a78438b5508d05a91fd9"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","1b2b0d2444d64c61053abc9432f40366"],["/message/index.html","a5cacd898f433413df3dd2763212da99"],["/moments/index.html","598d8bb9ce9d2d097198dcb25aed994f"],["/music/index.html","799cc418004f5aa637a534d72dcf9692"],["/page/2/index.html","75ca25fd4d2a700b4e228ba8fd42b70f"],["/page/3/index.html","607a830913fedc34a7c2fde19ce6e5dd"],["/page/4/index.html","f89bf431af3357ec7fb9f9c2206709f4"],["/page/5/index.html","d2426ae35e5c3b4bd43bb0d3be3f797a"],["/recentcomments/index.html","d989a72e3fe291f32eb48d4c37fc20dd"],["/service-worker.js","64efef1c3a933e1b12a3f012120a63df"],["/sw-register.js","90cb7e79338f9313d81fb4a3400b7ac6"],["/tags/123网盘/index.html","0216d488827e5e2d65730010fd21606e"],["/tags/C/index.html","d3f72a3356f5109f5d234b36f21c50a4"],["/tags/ChatGPT/index.html","d2ae8e42e4bca16f127b55ccde375f75"],["/tags/Cloudflare/index.html","bbc045d8adb6a7d04a11747c72b1b4ba"],["/tags/Markdown/index.html","5ad8cd9043fc0de24fb255996f59ab32"],["/tags/Openai/index.html","66fe549eb847ca3fcaedd3900d2d66d4"],["/tags/app/index.html","7314c32c90c375589e247d4e8c3eaa12"],["/tags/hexo/index.html","0efcb277a98f6b3cbc951298229f401c"],["/tags/index.html","82f6a530e8d3172272c7964e511ef8fe"],["/tags/信息修改/index.html","40aa39a56195e033e9250b2a013d5e7c"],["/tags/写作/index.html","1a41a61d3a84689467c5d59f62a8a825"],["/tags/分享/index.html","6141f97bd964c9344f10ac6415bf59eb"],["/tags/吾爱破解/index.html","53c17e73467a6a1c7f5109b1b6a2d47a"],["/tags/安卓应用/index.html","1e77f7832dd1f5cba10ffe884bed3f4e"],["/tags/安卓应用/page/2/index.html","49897f903e28f0eea9ad586295d83132"],["/tags/安卓软件/index.html","16136cab7dc6b6ce6cf35527d28869b9"],["/tags/实用/index.html","d36ef1cbea0dcb2ee6bfe2ff1961f1d0"],["/tags/实用推荐/index.html","9f4b5c5d8be168e1064bd6e2a6f01082"],["/tags/实用推荐/page/2/index.html","e75b461e1f1cb370e9a4b55540cc7680"],["/tags/实验/index.html","547d34f202b8896c141b08e982c22e21"],["/tags/工具/index.html","a000bea44a0700f6e9b0ea68387dd677"],["/tags/工具/page/2/index.html","65bd7c5c2e31530c1a429cda7f3d6b80"],["/tags/广告/index.html","cf8c626146c307bc10b537e6c6c8d847"],["/tags/建站/index.html","5ddd6c1fe33fab4c120d60ec6904c5db"],["/tags/心理/index.html","2b47046704cea188548ddb7ef45d01e0"],["/tags/思考/index.html","b6aa15137a495380a6690ae265659870"],["/tags/技术分享/index.html","06417dca8170fa0386109d271ac92e4d"],["/tags/指令/index.html","5bcd271b80b124e5261d65b88578ebff"],["/tags/探究所以/index.html","312fb33e26bdde942d0b2e101fa5d47b"],["/tags/推荐/index.html","59fc35b0d89e8b6837bbaed5eb8361b0"],["/tags/文字语音/index.html","6f10a77300d6010f4389ff8fc72911a0"],["/tags/班级/index.html","a599e603ca44e38cb78637031c8fc1c9"],["/tags/电脑软件/index.html","39bfd7510118460ce3c9292492f2dee8"],["/tags/电脑软件/page/2/index.html","98836c576aa32b13207276381793dc7c"],["/tags/百度网盘/index.html","ab200b7811d3310e7ff488a60fc4a8c4"],["/tags/科幻科普/index.html","69e607d9aa44afcb346b4a2444ee5f4e"],["/tags/精选网站/index.html","65338d6e15a3e4f000b34c3722f93e45"],["/tags/系统优化/index.html","7c31eb9b2b3b079d78daba7a37510d10"],["/tags/编程语言/index.html","c4d56c0b2de0af61015b215c2acd05f1"],["/tags/网站建站/index.html","f0f598c8d4c05b10e5c9a3a460ae8a12"],["/tags/视频/index.html","dff55a325282155942e3b1f93585e8b0"],["/tags/计算机/index.html","a9369931277e655c23947340f40a4f42"],["/tags/记录/index.html","02e00bcc55d5b691541967cbc1ea89b8"],["/tags/部署/index.html","50acb9af0af924d39155e5363a4fa09e"],["/tags/音乐/index.html","c02663a0fdc4500b9167ee8f508b19c8"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
