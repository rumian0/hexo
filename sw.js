/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","e72c25108ef86a5c4d616240f4cd2a45"],["/2024/01/22/Markdown/index.html","c24a2bd655f35e87af143ec0b4858d4b"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","c5ad209dd94fcfa86da522460e8cc683"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","997e448ce175b7a7ff53683bb9773811"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","653b9bfc48e6592b6be7efa8c67411cf"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","e5eeb5ad253c7aae9f3e587452ecaae9"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","6d65691555ed99a7936c817161872ad9"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","8b3404f399080cff00fedeaafa4e7854"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","92a4c78397f497ed25a2d8e28778b0ce"],["/2024/04/10/C-saolei/index.html","13bb8087e025ea86582a177bd618a3d7"],["/2024/04/10/free-yuming/index.html","c92530fbc18349e3878164aa54b3cfcb"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","6ef50e31af4d9fbb53951919d0d60933"],["/2024/04/21/kw/index.html","70a5efe17dc6266f17409104b1299407"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","2333607c84e55272e60fade170cbbe06"],["/2024/05/12/music_download/index.html","601faba753210589f84704ec0ae690ec"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","bdb307db2496b110ae650b3e6859b50e"],["/2024/05/25/Vercel-Typecho/index.html","0c1cb03c888642247a70e9d549d8af23"],["/2024/06/02/website-all/index.html","5e60ebde0293aa3d62d5bfbff4570f7d"],["/2024/06/17/tools-box/index.html","a37951ade26164457e3be4ce4edfd443"],["/2024/06/22/biibili-zhilian/index.html","3f6aa8e6b121bf3520e2c7f32c3ebebf"],["/2024/06/23/sqyy/index.html","1df5ad0e79afa332e006a551341246a6"],["/2024/06/24/win-chachong/index.html","ffe1c9240a08817a5dfb6e2aee3eb892"],["/2024/07/03/dyd/index.html","a3a0d71763e3a92f844d97748941a0fe"],["/2024/07/03/geospy/index.html","d0b8ca596386880ad987312188c984ad"],["/2024/07/16/TuneFree/index.html","4e1da8d051c287478d8b795190f314ab"],["/2024/07/16/pdf-repalr/index.html","cd818bd9a33e4037518f4feda0546a5d"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","1e379a3d1d521d8afa7050a77b59b1d9"],["/2024/07/23/an-yuyin/index.html","ab7634c190f75d3e479ebab90d974741"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","97d8ffc35c4e2cca8682828eb28296a5"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","01ffe87a7afb3ff7c0cfcb21fa526417"],["/2024/07/24/win11-win10/index.html","3be7511fc2c2a627023c7a4b713b7d77"],["/2024/08/03/wu-muose/index.html","4ab30ca12313319b331ee98c2f9a3603"],["/2024/08/04/ab/index.html","39f6a0648d83b2f44894a01f6866bc7a"],["/2024/08/25/mp3tag/index.html","dfd655b6937d0098c83b9a84308b7a2b"],["/2024/08/31/cf-words/index.html","77482adec9812fb353b5eaa69c61aa80"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","08e461ef5d558b25bbee2e4c4ef268ee"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ef6b0e91b448a1ab357b6c0ca220cf42"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","43fdc015c3108dafadb4919a3eaa2198"],["/2024/09/30/123-liuliang/index.html","d1ad020ccdd847fe0ee1f519c57394e6"],["/2024/10/01/app-allmusic/index.html","7fcbcad452ab293def6f562645095be1"],["/2024/10/01/win-musicfree/index.html","394f0dc437e3dfa9c79a0bb77da5b1f0"],["/2024/10/02/fire-xinli/index.html","16a4cc89e61e9fd03cf625e7f969ec9c"],["/2024/10/02/win-wyydaili/index.html","f5bdb7f73171886177386fa996b7592d"],["/2024/10/14/qq-histort/index.html","fa32898cf684bdeb3445f28c0bb77010"],["/404.html","dedfeb18a4b6133a75c0c1efa271257e"],["/about/index.html","1656428a296d1913ac9ff0d771be700d"],["/archives/2024/01/index.html","209dd3fd6f4bed77fb267651050848ea"],["/archives/2024/02/index.html","6fcc2e704ea7d33886a7772a0709afdf"],["/archives/2024/03/index.html","580a6b0ec5e8d1fff48f3a10bb53f5a4"],["/archives/2024/04/index.html","90066d1a20278fe469e3833dd65ae057"],["/archives/2024/05/index.html","f9d4123c618c7291bafb1b3d6680f4b6"],["/archives/2024/06/index.html","d4ceb82f78915dfd17be119bb5a77c0d"],["/archives/2024/07/index.html","badf562972b45eaeba7c51657613fe09"],["/archives/2024/08/index.html","022d458d04c561b026410db186e2514e"],["/archives/2024/09/index.html","4a755d95a3c6b125170d181c0edb8ed3"],["/archives/2024/10/index.html","aec6bf5a7452739e94cb4b5bc4b35da6"],["/archives/2024/index.html","6563c1d4c682a8950d44da625533ed72"],["/archives/2024/page/2/index.html","1844f16b6de7061d6bb0bfae1c6a4068"],["/archives/2024/page/3/index.html","12b747a44b61b0e963a7dd82ffd288b3"],["/archives/2024/page/4/index.html","3e95d8e4dd80f5ef370b26a17c1ee696"],["/archives/2024/page/5/index.html","2813485199184385ced01261d2bb2f5f"],["/archives/index.html","80f88c948e0044a42a721596e701e0b0"],["/archives/page/2/index.html","9593b2bc91fb68247b55e075339aec68"],["/archives/page/3/index.html","c47deac7bbb8e6b679418b183fc7d74a"],["/archives/page/4/index.html","d0dd22c579198f09b01df7db0798c459"],["/archives/page/5/index.html","a0b124d498ec3e62d4b64bb9db671804"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","8c41fa4f289fe1f227b9e0bd61cdd8b2"],["/categories/index.html","453e100b2aeae13fb008e7fd5e76b5f7"],["/categories/学习资料/index.html","adefab3aa5b34c431b78db4487c8df5b"],["/categories/安卓应用/index.html","4f022a51cb9eae4aed3230f6ab3d0b6e"],["/categories/实用推荐/index.html","81c81c17c2d3662ae2cb0e80aa014d4d"],["/categories/实用软件/index.html","91b513a585b41fa38bf1081e5340496e"],["/categories/实际生活/index.html","24d6f551b685e868bfd985ca62d8f384"],["/categories/心情随笔/index.html","c4ff70acd5df068576dc140406353c05"],["/categories/心理实验/index.html","a36f9f39b716c3a8cf194cba9bb29a75"],["/categories/技术分享/index.html","5ef9851b87e50f02f04a2c542cbe8548"],["/categories/探究所以/index.html","f5cc032b0eb8d4c5abe1d51f83648c1a"],["/categories/硬核科技/index.html","b4c851f8e449dd71d5691ed96265a085"],["/categories/硬核科技/page/2/index.html","bff0b071a93d236362985cd40e12a775"],["/categories/编程语言/index.html","9cd8410b867bb71a4d7137d9799f99e0"],["/categories/网站建站/index.html","4841185d0e0c899008e224afc59a0ca8"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","af8ef941616d214376d6b8fa45b4c707"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","7392e4b7703fcec01aef4efb6091fa54"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b3f3683a17a6c5cb372654674c3aea95"],["/message/index.html","eb7f0d9dfb47996f526e7bb652f8a614"],["/moments/index.html","87cf1aec470044afcb25b7b7ff9654d4"],["/music/index.html","513e696e249a7af11fe365b268261017"],["/page/2/index.html","73e3bd2adf5c4eb2dcf6a087b33e3d51"],["/page/3/index.html","91dbf641328b14009cee0fe6eabe9c73"],["/page/4/index.html","e2d1f7918788eb9b7ea1e7b5cbe5233b"],["/page/5/index.html","a7dcb64c769d7c5e0c0c3dc77e4b761e"],["/recentcomments/index.html","4c691c1153cbdd7d5b9ef72ac8eb6710"],["/sw-register.js","fb66d4b919500756a4cfc1c5fe9fa59a"],["/tags/123网盘/index.html","0e6079679ed7102d038c112006756853"],["/tags/C/index.html","aedaca463ccb50f9e6f6948016fa8f5b"],["/tags/ChatGPT/index.html","1ed571bf0fb825ed06dbfd143dbc4e88"],["/tags/Cloudflare/index.html","5a5387fa7f29ce18c90f70325cff34cc"],["/tags/Markdown/index.html","d7d4ac3936b7a8c146f3c5bbaecd823d"],["/tags/Openai/index.html","d8739e4c6dc85fa4c20685e5a9e8a828"],["/tags/QQ空间/index.html","449456dc19c015c879bd8c775d1fa28a"],["/tags/app/index.html","89d0d30206b5861a0ac5bca5554dcddd"],["/tags/hexo/index.html","e2581c0825499b8e4a65d3d42eea468a"],["/tags/index.html","8bcbcc9de6632f0efb74ebeee97ebf55"],["/tags/信息修改/index.html","f51a707b8d49e4cbca95041227f0222d"],["/tags/写作/index.html","bf81b4bab10a1077c293191577b80e5d"],["/tags/分享/index.html","82f5fafcd02b5d69beefe4b59eddb9ff"],["/tags/吾爱破解/index.html","fe088cdc52c5e82bcd7e66b6cdb3274a"],["/tags/安卓应用/index.html","5fbc76ccb2494e492527e73162436cd2"],["/tags/安卓应用/page/2/index.html","b2d525d549976860d7fd04b063176348"],["/tags/安卓软件/index.html","d3f0dcc01b3d51ab6fb9dd7931315291"],["/tags/实用/index.html","6290214ccaed6b3105834c5718fc1133"],["/tags/实用推荐/index.html","7e1762b12539647644264ca505d4b96a"],["/tags/实用推荐/page/2/index.html","24df7191e3f5fb7a0149c930e10db1bb"],["/tags/实验/index.html","d8211b3f9ff7ddd3e1582c5a40bee497"],["/tags/工具/index.html","ec10140263404ed4d9793e8bfff3f51d"],["/tags/工具/page/2/index.html","8ac3c928bfd910756eb8251874090905"],["/tags/广告/index.html","68eb3c4dc75f92bf2455a2840e6352b8"],["/tags/建站/index.html","7d382d18665696fc7e1456c623319c98"],["/tags/开源/index.html","6fe1defb706e07e62b352a73e7547f7f"],["/tags/心理/index.html","6eabda3f0d9a244963cddad242210215"],["/tags/思考/index.html","487c7d13399f192ca0f8fa015d77a1d0"],["/tags/技术分享/index.html","24604a2e70b9b7301d3ceb045452d485"],["/tags/指令/index.html","94bdf8ccf00f64586cf0214898fac50d"],["/tags/探究所以/index.html","0a3910c2faaaa456261cecb1da8859d2"],["/tags/推荐/index.html","5d416634b491350e1c832563dcb47d87"],["/tags/文字语音/index.html","db6e6ff496281c4a98c4c347c49e7522"],["/tags/班级/index.html","3ee31b9d68c971de047873c6c8d43679"],["/tags/电脑软件/index.html","1af6bd0713c04735ff61909317a2df43"],["/tags/电脑软件/page/2/index.html","e6fac6116baf5325f751be159c41ceda"],["/tags/百度网盘/index.html","15fc934a7cae6376c6ba6a6c078b768d"],["/tags/科幻科普/index.html","a4a8af39b17975b167af69841cef4551"],["/tags/精选网站/index.html","20f223d0d8f84c38a5012afa54a0f421"],["/tags/系统优化/index.html","35334f5ef1bede803e136f637a8031cf"],["/tags/编程语言/index.html","dbd8645d66212c3c37a496f2477c57fd"],["/tags/网站建站/index.html","4a2bdca484b9c53d6180368dd8f12ffc"],["/tags/视频/index.html","e326e904710a2f3173eb99f5b34d7ca3"],["/tags/计算机/index.html","4af0206646af5bfadb4d68f977b9d3d6"],["/tags/记录/index.html","f28d014c7e08253e13c318240471a6d7"],["/tags/部署/index.html","4c5d17b5f0b90123e70781aa2986743d"],["/tags/音乐/index.html","af8891063c38f57d0220620fb4c626e3"]];
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
