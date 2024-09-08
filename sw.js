/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","1c2bf84bb44cdb108dcf001256d35c1f"],["/2024/01/22/Markdown/index.html","23ebd1aec9dca572be45a0b0dc11d237"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","0861a1a2ea474b16430e63ac2a73c019"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","94985be425871f5df07e195c4a17de12"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","276965c9ae51de59aa6e647a19b32982"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","eddce86f3095e61fa6fe849ec25fc683"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","1aa5cec6c752e6618f7a9ae74b743805"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","015e575f879d1e4e789423cf3e771567"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","cbca3af1f48dc2d1573bf19647e999ff"],["/2024/04/10/C-saolei/index.html","72a51ecaa9b9fc4d4121dc193baa8dd7"],["/2024/04/10/free-yuming/index.html","f74b6ec02e0b699343efef88497802d1"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","e02f6077cea6c221b7c125afa8441ebb"],["/2024/04/21/kw/index.html","57006656bef6e362ba4ec7ceac79ac4a"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","a8c690e28f248e08b77727a356b0348e"],["/2024/05/12/music_download/index.html","a345262b66cb4612de8636d583f6a591"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","23f79083c5d0bab392fdf756c8c72bdf"],["/2024/05/25/Vercel-Typecho/index.html","7a3aed50ffb862e00bf0667d786caa90"],["/2024/06/02/website-all/index.html","39436c50162a6abd501401468a92750f"],["/2024/06/17/tools-box/index.html","9ef1b0bfbfdf9fc23bb33c12156d7e3b"],["/2024/06/22/biibili-zhilian/index.html","4670621ea66c876e7e1d4e55e906ff5c"],["/2024/06/23/sqyy/index.html","5e9a91ec96361fe399e0c0c6f0ced7d9"],["/2024/06/24/win-chachong/index.html","acde928f96b3889a51a99fffdef65190"],["/2024/07/03/dyd/index.html","bbde708e48c4f32fce0d6d17f901e080"],["/2024/07/03/geospy/index.html","1c3c0b0ddb8375c3955c25611c93de40"],["/2024/07/16/TuneFree/index.html","b8f382f33744a96891eeb3b8316f08eb"],["/2024/07/16/pdf-repalr/index.html","cea51e36ceafd3ccc811606bc3ca8691"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","17c2b0a3af9810d14ac4eeed3aa2a97e"],["/2024/07/23/an-yuyin/index.html","102b6df8e94593cbe0524f03037ecb7e"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","ec2b7161fa4104c5323d6be5cdc0c627"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","38317974e3a96b7ba10448bd030b554d"],["/2024/07/24/win11-win10/index.html","6d539e38b2572261c30b018188f7e9e3"],["/2024/08/03/wu-muose/index.html","336aad6c1bb2b04932e91fd373b0cd71"],["/2024/08/04/ab/index.html","bb5a7b54babf6f060ebc751374ee7c1b"],["/2024/08/25/mp3tag/index.html","d1890825087e5a8809c9a347f9126418"],["/2024/08/31/cf-words/index.html","d97e03fa5334398e2da5a0865659925d"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","ac69b77fa37ba41400162c8bede47325"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","9be916e537811c88958880d0de48c8a0"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","700acf4e33b409da86aa51b6b7b61ddf"],["/404.html","11f75e300be5b3f591ddfb10cf3f3f73"],["/about/index.html","1711313c7c8845223fcbb9309d6805c2"],["/archives/2024/01/index.html","e867a3f579953c8c1ce504778af7c97e"],["/archives/2024/02/index.html","bdd31dd73f60a0ba5f1e16a6d5ba6681"],["/archives/2024/03/index.html","b305b9b5305aab5084682bceff8b3c45"],["/archives/2024/04/index.html","198ab11e5aac8402db95f43b06b83190"],["/archives/2024/05/index.html","0ee8a2c6edce20e7380810aea0c727fe"],["/archives/2024/06/index.html","52878420a674a54f22cb434005a8f6cd"],["/archives/2024/07/index.html","8c8d61e39c3ae8a4e04b53cb45e4ae15"],["/archives/2024/08/index.html","dc32b246b9189b3b509344619a5502f9"],["/archives/2024/09/index.html","570e0b8f25de5f02947a031959848aad"],["/archives/2024/index.html","b4bc3368cb9b16bc794d5181109c3155"],["/archives/2024/page/2/index.html","632dfa9f1580669f97d7d71b4ca05123"],["/archives/2024/page/3/index.html","c141ddbf236df795dca7e4a8cd830155"],["/archives/2024/page/4/index.html","b4ab46a09e9ca068787a4290389c591c"],["/archives/index.html","bedac2c574f25af2bc2de76759874c36"],["/archives/page/2/index.html","e71ceae60615dc6324f76424515d502c"],["/archives/page/3/index.html","f374f948b7c848d634157fd5dc28a707"],["/archives/page/4/index.html","6f7ceb0deda054cb5c456c6a39940149"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","6277bc88c469fdd926c9fab5e834c698"],["/categories/index.html","4d305e7a75b1c080701e83d0b0e5345e"],["/categories/学习资料/index.html","532ef69cd4d06306673897c33801c142"],["/categories/安卓应用/index.html","72e64095e55e32f58dfa74e7b28cdd4d"],["/categories/实用推荐/index.html","d1cb9475e26578b768658f199bcf039b"],["/categories/实用软件/index.html","34d65a6c890ecd0637d7876cb06fe103"],["/categories/心情随笔/index.html","e62d763c408d1e86ff988fb7bdb8fd55"],["/categories/技术分享/index.html","de3eb41be6e2ec8da3184aa48a83c65a"],["/categories/探究所以/index.html","8baee08fce948acdd68f970094d45a25"],["/categories/硬核科技/index.html","b9f8bd11bbbc6750c3373d1b1249f6aa"],["/categories/硬核科技/page/2/index.html","d14924238915aa5f8ac8af7c39823c8c"],["/categories/编程语言/index.html","86035af9a53c80ae61e9cf5f553cad0b"],["/categories/网站建站/index.html","58452ba0a9281a670d734db992c733b1"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","f103b62545c0799e534b8feb4d82f05c"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","341764255eab60ae77aaab0e5d2176b2"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","7533672ed3b01c12b8cfd03c113cc54b"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","79d1448e61dd4d711ebf85f20a9c6006"],["/message/index.html","2adff4ee52107cdf34024ba1eaebcf89"],["/moments/index.html","66fb63f48f1ded2543082ec577dd9870"],["/music/index.html","356035b85d4b48c2f803762282052409"],["/page/2/index.html","03b9d41afc4012e6dace493e2eed6dc4"],["/page/3/index.html","e76dd88b50ada9f7a6119836f6493250"],["/page/4/index.html","14be5d05abb4a4a050e737ced716a7d4"],["/recentcomments/index.html","26565022887212a1bd4123af4571231a"],["/service-worker.js","523e60b07fca818d2e84c967d0ac6eb6"],["/sw-register.js","b40493824dd9a36306f4e76da5b2c590"],["/tags/C/index.html","0aefee9b04b036444c2f3101755e8236"],["/tags/ChatGPT/index.html","6fe5fcc5f1d1ba033e7a09ee2c8fe908"],["/tags/Cloudflare/index.html","b0cedcfc8b6e59b6a4d0becc113430e0"],["/tags/Markdown/index.html","e5e52cb3fec092cf732808056d36370f"],["/tags/Openai/index.html","1fe858fd1c67660a4ce4d7a430b6d3c8"],["/tags/app/index.html","5a6902fe4987544430842414706ffcd5"],["/tags/hexo/index.html","eb74f4d308caeb16b0fe4ea107f3ecd1"],["/tags/index.html","e1d563fcfcb37259b51287a3274c858a"],["/tags/信息修改/index.html","6d12b5984d1d9bf3eac1441eb8396109"],["/tags/写作/index.html","f88aa787d50a0bc41cb80a401c8c01dc"],["/tags/分享/index.html","56c1ae8bc1aed00e45b03617de1027ff"],["/tags/吾爱破解/index.html","deab124e9c9ab5758b69135bdae3cca6"],["/tags/安卓应用/index.html","7c66d8d9e9366b9c54a7c2fa0be21304"],["/tags/安卓应用/page/2/index.html","a53ca583fa8553270c2f5d761be56492"],["/tags/实用/index.html","eef163b9a72c33a93ceff5d277979867"],["/tags/实用推荐/index.html","66ae4bf8091764dd1a9af35d9c878ea4"],["/tags/实用推荐/page/2/index.html","d8326911891b4a95ff0673b8a806a96c"],["/tags/工具/index.html","7e88bb60b81216cf5c0723dfc2e81f2f"],["/tags/工具/page/2/index.html","0a785c9bf756407e1b5fb4bfbff75c44"],["/tags/工具电脑软件/index.html","bb5c90232d04b3394268beea0241b795"],["/tags/广告/index.html","89c19e26b26fc43bad68f0ee24c3afa7"],["/tags/建站/index.html","452907596ec35bdbd297e2c5843d2d55"],["/tags/思考/index.html","e4bb94619dc06bcb5707e85c70bbe467"],["/tags/技术分享/index.html","523cb27f3aaacf2aa4ae388463047891"],["/tags/指令/index.html","3702379084a3ad019eb1413d1735bf42"],["/tags/探究所以/index.html","3a3e512d62b382629f2389f7ed0f0993"],["/tags/推荐/index.html","630615adf17880436f01b90a711c7315"],["/tags/文字语音/index.html","72f53f0b74dc45bd452f38d3225743f9"],["/tags/班级/index.html","79e1267ceeebfc334c5a3b9338967553"],["/tags/电脑软件/index.html","0340089f7e695398c18c469ce846fe27"],["/tags/电脑软件/page/2/index.html","d4b8bdd4413322f5be69316202cb8309"],["/tags/百度网盘/index.html","0f3c3da001ec80b0d083207a256dc545"],["/tags/科幻科普/index.html","f3aead6bdd8b51cc89639b6259b7699c"],["/tags/精选网站/index.html","96876d337a6b98d53d61ac53d053321c"],["/tags/系统优化/index.html","045ebf92adf2c52179af0c113f16ce78"],["/tags/编程语言/index.html","8dc2d7875e528488d7f5913ca1f7a6a2"],["/tags/网站建站/index.html","b0c9dea807dae91d19cf851bc8691d02"],["/tags/视频/index.html","ce5e9e6d6619544c316c3a4fee43272a"],["/tags/计算机/index.html","137239ef92f1e62d1f4c838fb4f0e557"],["/tags/记录/index.html","fee2c8eb2a5a2ad2567fc1d214ee2b1f"],["/tags/部署/index.html","0e08e8b688039531cd21bb0dc30c0d51"],["/tags/音乐/index.html","2c1561eb921728d747922770fd4c0d44"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
