/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","8b92eb30facde1f2b8c921e6783c4654"],["/2024/01/22/Markdown/index.html","85a12363f678f782bbd71d6f957218b0"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","4dfad28cda00f40a5b10a02c183ba950"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","a265ffda71c6c8c68184ad04afaf5df1"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","fab25e79ddbd7d749302dbf44520924d"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","6565684f5d2e07dc9e109511300150ae"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","176c0c26199b8a7178ecda63f4eb0a05"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","10725cfec94c41c2f4d419df17a37c57"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","8cd35e20e9aaa623cfbefcc6aadf2fd9"],["/2024/04/10/C-saolei/index.html","9111cec486533c1666add110c9bf6ba7"],["/2024/04/10/free-yuming/index.html","b12077a41e4b3c2888ab8ac55c9546f3"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","33e6bcc3cc59118c9350f8a7e4ce4804"],["/2024/04/21/kw/index.html","e1af896242efa417f860b1a1d741d647"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","dd361bc3ecc02dfea1929dcf2da1f067"],["/2024/05/12/music_download/index.html","d7f94699c314ed909b496cdaac61c802"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","09364d4adf33aafaeddf71464c4dc773"],["/2024/05/25/Vercel-Typecho/index.html","15588c32751a7d02dca5c9cab7db2540"],["/2024/06/02/website-all/index.html","9de580da4486da51c579a55f0a4d457f"],["/2024/06/17/tools-box/index.html","5cca2c0564081ae88f9d32d7480866ce"],["/2024/06/22/biibili-zhilian/index.html","317e0b8a53d607e372fa7ca315874377"],["/2024/06/23/sqyy/index.html","351e7dcb6dda4da707821b2e414c7fd0"],["/2024/06/24/win-chachong/index.html","bfa230b5c8920e8cf11aa370ea1af21f"],["/2024/07/03/dyd/index.html","cc46c89b7edf97e7b38078aa604b213b"],["/2024/07/03/geospy/index.html","acd0aed3aa3fcaeb61f22e6a6a63de2c"],["/2024/07/16/TuneFree/index.html","5e217b83a213cfc8cf3dbdbb8f89bb12"],["/2024/07/16/pdf-repalr/index.html","09b0d23327b2dc20309db3be95afdba9"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","659eed1782864d5a4ac9ac0ab280649e"],["/2024/07/23/an-yuyin/index.html","83d0c73bfbe48c98fa75ea53069c1c65"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","fc77ce91f7264488d9e00cd46d0b366d"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","41bb0a323097307ea021c8ca6fd0c142"],["/2024/07/24/win11-win10/index.html","5e949665f4c66abdd6022e94410168e7"],["/2024/08/03/wu-muose/index.html","38b2ab793dde3c2d1508b680afdb7662"],["/2024/08/04/ab/index.html","1682d5b5e0095fefce0d6f3ccad500b1"],["/2024/08/25/mp3tag/index.html","774074a6d168af687e7fe48b7a8b8869"],["/2024/08/31/cf-words/index.html","74aa00d2eefbc0ad18435b0c13e74a46"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","23642573757e17b8f3932098bbc9c2fa"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","847ecccda2a659580352cea64c10fa37"],["/404.html","8c262bdabd464afd089e052d402357e9"],["/about/index.html","6392e730ecac2a827ce26a4d876dce0e"],["/archives/2024/01/index.html","701bd9fb5db9be376ec6a4f35e81d7a9"],["/archives/2024/02/index.html","5db4d89a1adf82d8b0373e2f5dfb1627"],["/archives/2024/03/index.html","2cf7c88a202e3a64953af5eba83fcd18"],["/archives/2024/04/index.html","8cda839c2834287b27d6d99ad5337524"],["/archives/2024/05/index.html","060e1d92aa73fae42777349e3aaff606"],["/archives/2024/06/index.html","3d14d21dbec85221dbfa8919e1f09891"],["/archives/2024/07/index.html","74f7cdeb26417b7f6a6ff3d3cffce548"],["/archives/2024/08/index.html","3fc13c95226824942814309cbf3ae408"],["/archives/2024/09/index.html","3ded10f750348a6a01d8c813f1269e4d"],["/archives/2024/index.html","534e41a6fe3ba942015dc947c1e30459"],["/archives/2024/page/2/index.html","51763641095934b27a16ff8611ff4c17"],["/archives/2024/page/3/index.html","81d3d542f06746116b822f39e766e5b8"],["/archives/2024/page/4/index.html","2760b14b4702dd438e7eb870daa7f9f0"],["/archives/index.html","6cb48ecf8023a4c3ab8f863edc245320"],["/archives/page/2/index.html","5bf9ee8e062bb245eab29fcafde69fdb"],["/archives/page/3/index.html","a88fd047e2458b78aa85ada91ca991e1"],["/archives/page/4/index.html","3a030b62ae1b80ec3150051a7f1fdab8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","ba4d310dfd0ec6262a81163c412e15fc"],["/categories/index.html","292c7a2e36247142ec28a48727afe577"],["/categories/学习资料/index.html","4d0f4705f34931ec519d1f800df050fc"],["/categories/安卓应用/index.html","93bcf1d4c69b9727047436e0512d4b8d"],["/categories/实用推荐/index.html","770018a6f26e7d3e49ac7752a1053a01"],["/categories/实用软件/index.html","b9f2cb627d03deaa1b18aa6ac38f8c14"],["/categories/心情随笔/index.html","f1ed26d3a442a669cd729fb914aed31a"],["/categories/技术分享/index.html","eb20072935cdd2c323ec733331ea6462"],["/categories/探究所以/index.html","c4fb64c4a9b145a14d5b5c1e6643454d"],["/categories/硬核科技/index.html","59e1370eb434fd0653ede81cf3008b3f"],["/categories/硬核科技/page/2/index.html","e49646fd2171ff87a0b2a80760b0b2f6"],["/categories/编程语言/index.html","63adc9d1d5ab11cd086f030b1c4647a7"],["/categories/网站建站/index.html","4d18d5cb79d201d96ba3b2d4336186b9"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","a89b0b2e644de3f589a22530f2a7a957"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","6d7018fb1b6415eb07d00e87b46498b2"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","7533672ed3b01c12b8cfd03c113cc54b"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","019f2b6310fabe6cede00294d2641c51"],["/message/index.html","e915393ebe8173ab7a1cdc3ad87eb770"],["/moments/index.html","113000e7028913e3e70635d9cd301615"],["/music/index.html","090505ae0f73244d8878a145ca64d9bf"],["/page/2/index.html","e3f63159aed8b17d36a4cdbbcb40e60b"],["/page/3/index.html","a32f931eb17dfe57f346ec5d13a8c262"],["/page/4/index.html","1a1ea8a94fe0eb5668661acd973def22"],["/recentcomments/index.html","6d74c389488d07f349074a115ad181ca"],["/service-worker.js","e93171e53b675ecf921a4454a43843ea"],["/sw-register.js","dda028b23c2d801b6ba9562f150661f7"],["/tags/C/index.html","8e3ea189cbfcb815dfff3b076a9fdef6"],["/tags/ChatGPT/index.html","bf4e5b13ded78cfad39d2b089c15d227"],["/tags/Cloudflare/index.html","fca861758e3f49a63741751cfd21e59a"],["/tags/Markdown/index.html","7a26083f0b167ce3b28eae22a3a187fe"],["/tags/Openai/index.html","7fdaa33f223b53b0b2e9db73fe66cb55"],["/tags/app/index.html","6386df1c6c8cbbb1f73ae3ed3ba33ff0"],["/tags/hexo/index.html","a43508bd21871584ba64b5aba01a3241"],["/tags/index.html","09adc460bd3cabb97da1a8d8354856cf"],["/tags/信息修改/index.html","390017a5a4107b887340b4d433ebd40d"],["/tags/写作/index.html","e28d442d81c384ee35e62a3c6ed3357e"],["/tags/分享/index.html","ec06ad156c3a896e30b27df8c31752c0"],["/tags/吾爱破解/index.html","5734f881b979be2cb28f660008ad79df"],["/tags/安卓应用/index.html","ae1701990035d2f2b9905a79335f6a64"],["/tags/安卓应用/page/2/index.html","b809b99bd2bc2a62efde0c482fb60540"],["/tags/实用/index.html","27602bb182d8988a5475fe2457e9d47f"],["/tags/实用推荐/index.html","bb8d0a5f6f97c5afc1f9bdc7012b43b6"],["/tags/工具/index.html","729db69e2b6f1cd726d950ba2ecfb2be"],["/tags/工具/page/2/index.html","2f3f7b9fca05a696c8bc62a0b4e77adc"],["/tags/工具电脑软件/index.html","82f698e7dd9236f6d922204f848f0d13"],["/tags/广告/index.html","236d6551ed776470201475e11828349c"],["/tags/建站/index.html","c6c11d263e043bb94625272d38eab997"],["/tags/思考/index.html","a3eff576be5248b89c0b4a09c6b3e707"],["/tags/技术分享/index.html","4e83ffa58b9f0d812d79b5764f77dd62"],["/tags/指令/index.html","d133fe73de85129d97755248296c9ec3"],["/tags/探究所以/index.html","225c4c4983dde0705ba3c30ce409eb9c"],["/tags/推荐/index.html","30adb1f196742c173f2660e6739aaf51"],["/tags/文字语音/index.html","2c77920f23eaef09f90c362c7beddd59"],["/tags/电脑软件/index.html","9ffdd1b67f8503ab6d66c9c14962a7f5"],["/tags/电脑软件/page/2/index.html","61573ef42be067cc8c45dc4faa04156c"],["/tags/百度网盘/index.html","b67558e8e04d06c9e7c742c852f65945"],["/tags/科幻科普/index.html","ad2d36cf0ff497ed60c1a86509160e78"],["/tags/精选网站/index.html","c326295600084c693ef267717955eb9a"],["/tags/系统优化/index.html","07301aa05db74c969653d42f725e2125"],["/tags/编程语言/index.html","99f7e09ea083d6a9639c1ca5b21226f1"],["/tags/网站建站/index.html","77e97d76673496b1fe6036ca59fccbd8"],["/tags/视频/index.html","e335d2622cdbc2fa6911a1097b8be6ad"],["/tags/计算机/index.html","7c882d51796baa881f78df96aa68c9cc"],["/tags/记录/index.html","efea5dd5ba83273adfbe8009017e153d"],["/tags/部署/index.html","3f03bf8af2aa57b6e03531fa161eec71"],["/tags/音乐/index.html","7239b642e09973427a52198e1336dde2"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
