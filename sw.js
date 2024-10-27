/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","0b2304e1649f5d7990319c24c12d58ac"],["/2024/01/22/Markdown/index.html","54d99e7caf2921e096eae3e27dc235cd"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","7dbcb781e873d5a623a6d0cd2ef6e486"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","53a5e390ef0dbba861da06eaf9b1f5db"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","f7e9c7928986d9634b8348e5d40ee9da"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","f508ee09f6687eeafecfc5832eda4184"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","7143866be7ce484200e592f7449106c9"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","8892581caa747f8646a467e511d4a439"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","5be452ca325223b6b482f64620ad7a85"],["/2024/04/10/C-saolei/index.html","925821a7775625c4827e46fa1c553608"],["/2024/04/10/free-yuming/index.html","1117a68ef01d67f312c18dfaf74c9188"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","fc24a5f0a756edbf46463e491d60968e"],["/2024/04/21/kw/index.html","c980d39606966d6588dbc872a29d760d"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","2b29997d57bfb849483a2859131b9a05"],["/2024/05/12/music_download/index.html","6bc1099148c661a2349c3cf6b24b5495"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a3fe112198f8f9da69ed4b75e3e32307"],["/2024/05/25/Vercel-Typecho/index.html","28dbb482eaf5d98e7cde46d5a4f8f6e2"],["/2024/06/02/website-all/index.html","c9a68eef892ec4183d4f29e406ffd5a0"],["/2024/06/17/tools-box/index.html","54158019337f25e867c07329f776c1fe"],["/2024/06/22/biibili-zhilian/index.html","41036dafe9e10bc2fbd2b96da257eafe"],["/2024/06/23/sqyy/index.html","c7f0838e8ee6922bd947482e3b28d330"],["/2024/06/24/win-chachong/index.html","4157473308ad043a0d5d6398088e9c17"],["/2024/07/03/dyd/index.html","6fe0c3f355d581afa99749915a628ade"],["/2024/07/03/geospy/index.html","fb93158b9af9e843eba832a935e2cbef"],["/2024/07/16/TuneFree/index.html","29764e2f1f7a951c9441acb4b5a76d27"],["/2024/07/16/pdf-repalr/index.html","d540d052fb422d79be97e8fd3ca31b09"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","540c69762ebd94fe6902f6dfbf19cffe"],["/2024/07/23/an-yuyin/index.html","d7c79e49d545ca7eb0a6c59a64337f2f"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","81bc3cc59fe498a6ddbce76a7c303e3c"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","74f2685cdc0019c8b724b2bbedea24bf"],["/2024/07/24/win11-win10/index.html","c702e494df2fd0f788f5cf9119594422"],["/2024/08/03/wu-muose/index.html","fa5db2123e4508dcab2d96420397a4d8"],["/2024/08/04/ab/index.html","e17224481acd6220699f3801ccf3e2c2"],["/2024/08/25/mp3tag/index.html","33aafbcec195298ff96770332d97c444"],["/2024/08/31/cf-words/index.html","5f969b78bc2e1e378882e1fb59045b03"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","ad35b9861fbd5cbb76202496ba8765b4"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","3e1b57789891b895432c5420b372d38f"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","fb8ec4b448e8217e2b294c2d1b23430e"],["/2024/09/30/123-liuliang/index.html","9f1da18bfc4eed86feab509143e0c50e"],["/2024/10/01/app-allmusic/index.html","bb2647e0cc5e42089dba18ea0fbe293b"],["/2024/10/01/win-musicfree/index.html","0289460f8b0fa9a5ad1c8401b2a3c09b"],["/2024/10/02/fire-xinli/index.html","715fab9e6aef76e538b29c302b552660"],["/2024/10/02/win-wyydaili/index.html","d01a74380e1a32770e3a00d2bd9f9003"],["/2024/10/14/qq-histort/index.html","c36ca13aa643e282d7ed64b624b216de"],["/2024/10/26/suijip/index.html","583341c86ba02a608963c464ba628e52"],["/2024/10/27/cloudflare-cfff/index.html","7515a1dd6860b75d058e34a73583f955"],["/2024/10/27/tvbox/index.html","89a2e24ef5bc061f6f823c21d466de60"],["/404.html","880bbf6976e505249280d41a9abdc2a2"],["/about/index.html","0a7f3fa1dc350c5d513b01dc7760ca9e"],["/archives/2024/01/index.html","2e15d196f1c2867bc9c08ff39158afa0"],["/archives/2024/02/index.html","14d153922dad55bdba3c768d41c86e10"],["/archives/2024/03/index.html","3be97e44a747be73773f3542d395006e"],["/archives/2024/04/index.html","47c1d9a25bf760fd2259dd0b1757e5ee"],["/archives/2024/05/index.html","2bf80a4a2cb8a908114492c30b622c6b"],["/archives/2024/06/index.html","65d8bec07a1fdf07f5df5f224330d83a"],["/archives/2024/07/index.html","fe1865f34ac4d239bd2c101d94bf6f78"],["/archives/2024/08/index.html","d7589dbd503fb7d5ad932078933eb30e"],["/archives/2024/09/index.html","03fca0ab61715f7e02dd36b56fa2e64c"],["/archives/2024/10/index.html","2ec334715aa6f0f03b9fb5f0b258a15b"],["/archives/2024/index.html","b6306e41daa6129f484c8da97884a531"],["/archives/2024/page/2/index.html","3209c05a5503a411b15c61bbfca17060"],["/archives/2024/page/3/index.html","78962c98ffa8f38cad31b2b5d9ab4301"],["/archives/2024/page/4/index.html","22f038fe1e64bf3b7c05c8e36c2eaf3f"],["/archives/2024/page/5/index.html","0a656d73489e8a9df10111f565964e16"],["/archives/index.html","24646d12e95af5d87f5e73bc19b48a50"],["/archives/page/2/index.html","6acb6a9794888fe9c4337b55c2ba5eec"],["/archives/page/3/index.html","0d6c282526a481751809c02c024dc606"],["/archives/page/4/index.html","e2aa1f00714fed39789579cdd1e4cc6b"],["/archives/page/5/index.html","83d3bfa81fe3397ba4976c708847dc8d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a63ba6c7848d50802b37cebbdc7df000"],["/categories/index.html","c6fa2ec2d99f80393e93eaacb05319a0"],["/categories/学习资料/index.html","efdd90a21d697941a07b460d2e3caca9"],["/categories/安卓应用/index.html","1fc89f577582bc1dcec3f65ab6d03c0b"],["/categories/实用技巧/index.html","35068d85be67baed1959295a8a182025"],["/categories/实用推荐/index.html","efb57717c68d43a3dae55460e5aa6b64"],["/categories/实用软件/index.html","589e5bf838c2448f92c368d3986fd6c6"],["/categories/实际生活/index.html","181b08e974b866fd5b22200c67b04f5f"],["/categories/影视资源/index.html","81e4813ae871459fedbb5f9104aea80a"],["/categories/心情随笔/index.html","a6532238d8b783c633c4d3d9e408921c"],["/categories/心理实验/index.html","7473fe0c6f321f3620ecb913454c250a"],["/categories/技术分享/index.html","868a4d3c278128519bd5a32cb7e46c15"],["/categories/探究所以/index.html","e4eacb72c4e774d83192040ec259bff0"],["/categories/硬核科技/index.html","93fe207f169a19959661d29885d8f625"],["/categories/硬核科技/page/2/index.html","1dccd2ef377effc10906fce6db20376b"],["/categories/编程语言/index.html","b21a7cc353c9958c7388f0452147b324"],["/categories/网站建站/index.html","bd290e52b5368ec930f0ba41869b008d"],["/cookies/index.html","f6fb1ff840c7e625e094be193e9c0661"],["/copyright/index.html","6c15b2ae18010d4a88a3960d0ec63bd2"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","234f6240946e3f44b933727222b0bc7f"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","3254002177a59da03f0175aeed18902b"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","ebb769d44804eb8858b4ae4871980dd1"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b3a59a1708f2e9601c16cb70d1a5e02f"],["/message/index.html","5bb828cc4190fa781e7a155eb1ead0e4"],["/moments/index.html","f5759ccf5151238c08357243b993c3d1"],["/music/index.html","3b0ebf3cfe1be5ddf2cc4bedd631aa6b"],["/page/2/index.html","eb67e1e3e7a4f8c94f6a915bfdf4458b"],["/page/3/index.html","d271dde277921a169cd01c6aa4a93076"],["/page/4/index.html","a1d4bebf8554673c1372ae5957ca6b28"],["/page/5/index.html","f0f2b20f149aa82b09fa366e2229e819"],["/privacy/index.html","d892edb304cd2aa2a1c4a43404a3577b"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","65d8440528937431aeccc929a51d22ec"],["/service-worker.js","2ab207ec9ff439927dda4e152521db34"],["/sw-register.js","053ecfc88898d7d627610e4d8edc01bd"],["/tags/123网盘/index.html","a0cdd3c4e43cc70ba383fb51a862409e"],["/tags/C/index.html","c592073df1e90ed40b70f9104d770f44"],["/tags/ChatGPT/index.html","6f57f2ca1926bc9986a4809d64ad538b"],["/tags/Cloudflare/index.html","1d6981f8cd047aba2b3d87f687c2da2e"],["/tags/Markdown/index.html","7bf7c703a5a7b6230589c08fb89499b8"],["/tags/Openai/index.html","494914b8a0199c65a5b676d11badb874"],["/tags/QQ空间/index.html","cb9b4cc787f4f3f9d2d18a7baa534ca0"],["/tags/VPN/index.html","fa7a2137af7fb5c4dfd8265acfe650bb"],["/tags/app/index.html","bec5a4269ebecc765b9964a0cdb13359"],["/tags/hexo/index.html","2ca862d74d70d0621aa9563719a52060"],["/tags/index.html","87e16fd92dcc608f7eb6c8b19554915b"],["/tags/works/index.html","0a71c9e55b2fe01083e418a4adaa967d"],["/tags/信息修改/index.html","b68fbad60e31f77c56eb4ea14212a865"],["/tags/写作/index.html","7e30077061242cc703e7ec5065696a02"],["/tags/分享/index.html","3510547bc7f03d3625cc5f74c95d6f1c"],["/tags/吾爱破解/index.html","13021b0e0ba49707153bd953eeedc3fc"],["/tags/壁纸/index.html","18f3e0f853d0bc8da922526ecf528d4d"],["/tags/安卓应用/index.html","0a3fb9bf2ab5dee96b6b8a9947f67b06"],["/tags/安卓应用/page/2/index.html","9c5bbc8d2118e1acdac32d8ee9c17f26"],["/tags/安卓软件/index.html","7277c348526b88a3f7c8bbfc68fe7811"],["/tags/实用/index.html","3777d1cdcee1465137ffae9e83a127aa"],["/tags/实用推荐/index.html","f1fe0f293b2a6547357c47c94cccdfa5"],["/tags/实用推荐/page/2/index.html","5e44733cb37279a97c0fe26eb466f859"],["/tags/实验/index.html","27d3a14197d52f3d7daa28a40cabcb70"],["/tags/工具/index.html","9b4e2dbff5a20abfb911324cb3d4e5cf"],["/tags/工具/page/2/index.html","abb247f3149009ae36d249bc0df0fe09"],["/tags/广告/index.html","7ccfaa1c1a91e6d7cb634df89e0bc2eb"],["/tags/建站/index.html","b53e466150b3732f5559ec802e51fda4"],["/tags/开源/index.html","41a9fb7e2354d728cb5591cc6f42beda"],["/tags/影视/index.html","4b6f817f5a92c1808929a4f51230888f"],["/tags/心理/index.html","4fb23eb450e86a3e2a98d3d04ab1d765"],["/tags/思考/index.html","77eaca8c203f545fce84f6375b6ca325"],["/tags/技术分享/index.html","27b9379ffb5af3b4624f01024cc33fa6"],["/tags/指令/index.html","7a9b38b2485343404d83edcf1b24e864"],["/tags/探究所以/index.html","37d266f97aa85e168eab9999bf6e9afe"],["/tags/推荐/index.html","eeb8ecd79faea663d38537641808d429"],["/tags/文字语音/index.html","4d93554ee5074a3e83a65df7d3df3f1d"],["/tags/班级/index.html","83e0bb125ed5a99619e374193dcaae15"],["/tags/电脑软件/index.html","f44e862070e7c0eb8e970e5502884227"],["/tags/电脑软件/page/2/index.html","edc6cbf941c3eeaf33bda77fd2881e5e"],["/tags/百度网盘/index.html","90f9999d85a3897c2572d04b5943c320"],["/tags/科幻科普/index.html","4ff09016bcebc7a62678d3a08932e5fd"],["/tags/精选网站/index.html","a083d3ab7e1c229b4c6a3638d183ed64"],["/tags/系统优化/index.html","f4e666a9470c967e6bf85e0031c0c73f"],["/tags/编程语言/index.html","0c0a5d36f71948669260621d2d2c5b56"],["/tags/网站建站/index.html","23e485501b51faff788d6a07d60bdd39"],["/tags/节点/index.html","2a0f18cfb3d45a9e639e92964b65b991"],["/tags/视频/index.html","971ceba6801ed4afd4848c5a7d6e4927"],["/tags/计算机/index.html","0dc6bcf59e36a700b60e47f1b2d7144f"],["/tags/记录/index.html","fd35f4ce719f4ad29bce8fd095ac3c83"],["/tags/部署/index.html","84365fc8f3dfb4b60ec26c1100682963"],["/tags/随机图/index.html","3b6a040a75c6ee6ca764f16a15abf70d"],["/tags/音乐/index.html","cb3532a308434d296c49491e67d56fcf"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
