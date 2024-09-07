/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","b128a579a8490c72d7a7899ce889b1d7"],["/2024/01/22/Markdown/index.html","86458751c4fa1ad4d7ca143856749803"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","8dd0d267a6e1e00c8314583d6cf8a2e4"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","abd866b412f42b77777e45ad8217c771"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","959113a04aa33bec60869980571b12aa"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","f95cbfbb12ef44eeb27cb948ad30959d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","614fb6667a6cf1bcad633e37507b73d7"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","062ed2937c03eb0b38b25a45af950f1c"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","fa9d67c2e709d82d59f3fa85a184caa3"],["/2024/04/10/C-saolei/index.html","579caa9d0269c5c5557d90e3e0e8867c"],["/2024/04/10/free-yuming/index.html","ab4bf8c7135fd0e4b1aa69ef090b19f1"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","36ffc45bb7895944a83603c6a79ef1b1"],["/2024/04/21/kw/index.html","6afdb1b119b9518db97bd5a831522353"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","9b60f0a169f78128830b72996e586e02"],["/2024/05/12/music_download/index.html","035ef56e890a3b9929ea7388a4fa43b4"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","3832df575525abd22e2a762043bc1f88"],["/2024/05/25/Vercel-Typecho/index.html","7182b24851b67f00c8a591bc9ad6397a"],["/2024/06/02/website-all/index.html","f087ba74bc10db324234654a218cd87b"],["/2024/06/17/tools-box/index.html","7ad7fbd6a224601ce85a064643201834"],["/2024/06/22/biibili-zhilian/index.html","f01901c6628cbd1ae6ba1bdc416c64d1"],["/2024/06/23/sqyy/index.html","76c2eb98da832504f5f5b64c04e53666"],["/2024/06/24/win-chachong/index.html","853b3466764ce5580fb0eba14dfe4ede"],["/2024/07/03/dyd/index.html","cb8571a2a316241e9bcffb76995a69e6"],["/2024/07/03/geospy/index.html","7fe15aa45a93612e6a24b4e7079dc9a2"],["/2024/07/16/TuneFree/index.html","3b4188e6dd8c560a20753d010027d4c5"],["/2024/07/16/pdf-repalr/index.html","91c046ec36090877e1c98d20dc3644ed"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","8504d502e5ff23fe1f2247f523c0f3ce"],["/2024/07/23/an-yuyin/index.html","d34c76a08cef695186af7fd68ebe4981"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","6e37b938c88f3d91bb2dce1293b71cb8"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","1fc37b9b44fa06e3682a6bd047bab69f"],["/2024/07/24/win11-win10/index.html","8ed61d067779824f4327a3db5d6df027"],["/2024/08/03/wu-muose/index.html","583a53e157e7ca43f3e060db5efadee4"],["/2024/08/04/ab/index.html","4a80c235822dd0d84c30bec1fd863640"],["/2024/08/25/mp3tag/index.html","f82cc48f963fae7f957c6d52ee9be6c4"],["/2024/08/31/cf-words/index.html","41db13c35b0f26714bf19297d462f589"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","75118a8268cb6561839c06c955f898cd"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/404.html","ab98b85aa650e0140d501f54715ebdfb"],["/about/index.html","b6ecb8d96ed09249d4027d020b966c31"],["/archives/2024/01/index.html","a4035cc84ee4bf9630752d0a9480f5c2"],["/archives/2024/02/index.html","c1c756eb950ec3d9c6f43ebca3bd2852"],["/archives/2024/03/index.html","f9982f02de1000ae77fb132493582f95"],["/archives/2024/04/index.html","bbaa7a70d6230b37cb5f87aa1fccc996"],["/archives/2024/05/index.html","7a801c4db8f4bbd52527817df2882306"],["/archives/2024/06/index.html","c05deb5846b5a33b30e5e97183bf7e19"],["/archives/2024/07/index.html","1a83160b5bf16dfaae17d4256cf4f81c"],["/archives/2024/08/index.html","2987d8c96228aa0393e2b198c6e4ddd3"],["/archives/2024/09/index.html","b0f3c493acd4225df1051effba286bab"],["/archives/2024/index.html","0a6d1f0137c298bd6849765ecd0299d2"],["/archives/2024/page/2/index.html","f3361478ef82a660907d385d9c9068dc"],["/archives/2024/page/3/index.html","5de3a090642fa679bd4c652c8d3ca6af"],["/archives/2024/page/4/index.html","2eccd1b11a2fdab303b1eee93066069b"],["/archives/index.html","4b60fe9b68d63e62efa90b2682521c06"],["/archives/page/2/index.html","eea56ea00283b7d8f9554a74cc46ca50"],["/archives/page/3/index.html","5d7a5ca2c3a834f17ad043b9be618b43"],["/archives/page/4/index.html","0922382b6c45ffaf9cf9aca949301dab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","f10cdbcf2c47d6720cf496467120c83f"],["/categories/index.html","c837975560fca3d17ccd6607ff91a942"],["/categories/学习资料/index.html","99e39c84ff1381ead2f8a52242dbca10"],["/categories/安卓应用/index.html","6cf013955187226d51ce9a28e945c10f"],["/categories/实用推荐/index.html","81f5a79f9e65a265001dc48c86201312"],["/categories/实用软件/index.html","912ca3f3a06d0e77487e6e52e70553f2"],["/categories/心情随笔/index.html","1442d9d31a62fd29c948637a30d8183d"],["/categories/技术分享/index.html","d9a11a35d4685578a7d7dff394cecfe1"],["/categories/探究所以/index.html","102fd333201442dd5211ec7d80718aa9"],["/categories/硬核科技/index.html","eda2a3a20b2a23d0515a36878ced837d"],["/categories/编程语言/index.html","a045b0c44776960caf181bc273533eda"],["/categories/网站建站/index.html","ea196b48f1e20fd2235513bd0042c742"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","d9144570e756098584bd782d90464982"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","5db72d8fa2f10d696f3fc3597fd0bdfc"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","fd8d86ee37cf9eeb8e4b151bab6ae8d5"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","7533672ed3b01c12b8cfd03c113cc54b"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","a937661e2684eba92abcc996ad692bdf"],["/message/index.html","675dfeb713a88568fb5f487d76c36b77"],["/moments/index.html","37a55bc407f9558aac52ab121e3cae50"],["/music/index.html","88c73cca87c24dd52ac0f04ddfbc7af3"],["/page/2/index.html","aafb1d7dcf6afa5979a7c36838240bd7"],["/page/3/index.html","bc7c53b9fa7731599bda214ec0669dcb"],["/page/4/index.html","1eb38fa44c1d75a31240feabfa33bed1"],["/recentcomments/index.html","3bdf931d5d79a62e5e42a90003be49ef"],["/service-worker.js","aa635eaa147f0f8ec8a5338e58d4dcf7"],["/sw-register.js","0cfcbd2b1fee0c4614ce138d745d61ae"],["/tags/C/index.html","6ee8ae438047d7433b40587fd2ea7876"],["/tags/ChatGPT/index.html","c5bbca135eedc80b5947291fa10a2076"],["/tags/Cloudflare/index.html","2ac5483d49270b4f5d8d6a059093c1a7"],["/tags/Markdown/index.html","52de5b5f9678d28357e612ffe5249256"],["/tags/Openai/index.html","52788770ab836705fa069543149fd66e"],["/tags/app/index.html","d129416441e65ed2a92edb88fc474d84"],["/tags/hexo/index.html","21765d0a257b52e43a02a6d3b44b7ba4"],["/tags/index.html","6c121c62bf1988fab5c77319f7bfcdcc"],["/tags/信息修改/index.html","d6b52438950934606bb81b5e38319725"],["/tags/写作/index.html","808499dad5d068388a394d1841f9eeb9"],["/tags/分享/index.html","6b938a3eafba7e26c9b9b79b46d9c8fa"],["/tags/吾爱破解/index.html","4d71dfe99a45189efc943592a80905a8"],["/tags/安卓应用/index.html","b6cea85e81251c83d51fa1318c08ac82"],["/tags/安卓应用/page/2/index.html","706c5808957f4c286f47919eefee2def"],["/tags/实用/index.html","3bc68a7e3a8bcadf306d99e7fce90ec7"],["/tags/实用推荐/index.html","4ef6dea3c2c264a1e2067e80157ad4d4"],["/tags/工具/index.html","cf9378c4310577730ad56955aaf85b05"],["/tags/工具/page/2/index.html","6e00a5e7457c90cf29043624d8c265e2"],["/tags/工具电脑软件/index.html","5dd287af859b6800760376debf55f29c"],["/tags/广告/index.html","0b5a22b19a6e0f07b583a695989bd35d"],["/tags/建站/index.html","077837b0df8408104382e68931292a92"],["/tags/思考/index.html","1c2bce8ee3ec684299568f02c7a803b7"],["/tags/技术分享/index.html","87bc8dc93c4dfbe39d44510a20f1ab00"],["/tags/指令/index.html","4983b7f7490be2cb8805ab41e4bb3a73"],["/tags/探究所以/index.html","a9765ccb8efc39627f425c4fad5d6058"],["/tags/推荐/index.html","e51575d8d1ec1cd5a0e6840f01a2c964"],["/tags/文字语音/index.html","4d3c9012a7ae8c0bb0c8ac691d45ba2b"],["/tags/电脑软件/index.html","173c745212e921040873a8aaace0b3ab"],["/tags/科幻科普/index.html","a6ff786e492979722378fccc170d9972"],["/tags/精选网站/index.html","6e7a7b869c10c2368766e735b96e132c"],["/tags/系统优化/index.html","90e1e7c378c9636b151e7b5d7ec4bbf2"],["/tags/编程语言/index.html","6077580182e74a5ac019be38c6a3294d"],["/tags/网站建站/index.html","ef5e5f4e1ff2e03306de549eee783c0e"],["/tags/视频/index.html","d21b38772663027d5cac66bef219b258"],["/tags/计算机/index.html","907cfc9b69218f1474a60b5fd043406e"],["/tags/记录/index.html","ae7e87182a2384f68d80ac47d1173e54"],["/tags/部署/index.html","d5b633049c1055458cc05fa57cd6c6de"],["/tags/音乐/index.html","668da86286655a87f5473a20bc3ef601"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
