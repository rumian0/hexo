/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","398b3d612eb03bd3b7720689bc237f6f"],["/2024/01/22/Markdown/index.html","11d40a5618f3480cc6fb45a5f487db01"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","53982c39d470b28ab4531d85c354117a"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","fb707f1df125c02206e85aa571781229"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","878fb98a65fafd86842ced1dc3dd01f8"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","473803b64be085a2dfe70b75f24fd635"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","1f15331c8728eac45f5f116161278c27"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","e5165ee81711086115cd5393f3467b8a"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","e01514a9387c706298a7bef35cde4717"],["/2024/04/10/C-saolei/index.html","675ce143cdbf012834c2840acf00aed6"],["/2024/04/10/free-yuming/index.html","691099471e0a125dde4ac77905364708"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","8d45da3de512be957ffac0bbfbd71e0e"],["/2024/04/21/kw/index.html","0ad146d4372818adce1760082fad9055"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","5d55476ee24b9047a69813a727115291"],["/2024/05/12/music_download/index.html","01e14c83773705841f2951a105483002"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","10abae50152163287673d8f45ae50c1e"],["/2024/05/25/Vercel-Typecho/index.html","b3b528596efe96c8489285f9b09fd158"],["/2024/06/02/website-all/index.html","4b28596f8d5ce51e0ea90e6d91635be2"],["/2024/06/17/tools-box/index.html","d92af9735bfb766b776b7ec961c814e7"],["/2024/06/22/biibili-zhilian/index.html","0780d5542c4697a336e7edf2b7b42274"],["/2024/06/23/sqyy/index.html","2ef1578d19960da486cb8d916e59e79d"],["/2024/06/24/win-chachong/index.html","ed40d6632152d5802c3d98a9a0cb9bea"],["/2024/07/03/dyd/index.html","c8a6536379862dc51c16bf425e7041e9"],["/2024/07/03/geospy/index.html","e69429e3051cbb224503d3f2537f613f"],["/2024/07/16/TuneFree/index.html","409a6d58645742e8bfddf62fc5136cfc"],["/2024/07/16/pdf-repalr/index.html","e83259440b4b285ad95ea3a17fba7dce"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","399b7b2b2154fa401d38944c9f98955d"],["/2024/07/23/an-yuyin/index.html","9633b343d044287fe55e9a5d577135b2"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","4f88bec20ffc0f9aa4f598ae01b95975"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","98d9056d2665c167263c65c81a876966"],["/2024/07/24/win11-win10/index.html","3f3639d615175b66120eaf5c81ca080c"],["/2024/08/03/wu-muose/index.html","8aacb58e236981f3141d2127be7e79a5"],["/2024/08/04/ab/index.html","6a882bf007987b34367b0c9ec360b5c5"],["/2024/08/25/mp3tag/index.html","7f91a5402d02e80628c9d48d5e1f9fde"],["/2024/08/31/cf-words/index.html","733ff6c2f9a2a0193df79efae469e26c"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","ff6c3038b10254be5594bd3f7031e772"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","cbbe7c0c306c970f6cd3512803c2fb4b"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","ffa0918776f424e5059cbd16cedc6986"],["/2024/09/30/123-liuliang/index.html","0c45c58c7170584564cc8ba7b934c270"],["/2024/10/01/app-allmusic/index.html","501c72a02ae37a4c44612f8e1f13e19a"],["/2024/10/01/win-musicfree/index.html","68d6af40398244246107cb6aa0e9316a"],["/2024/10/02/fire-xinli/index.html","14259bed07f50c9a073e75feefb6bf83"],["/2024/10/02/win-wyydaili/index.html","7212e35bbff483028c333826b35a59cc"],["/2024/10/14/qq-histort/index.html","b7152f852cf9599c822300aa23c58231"],["/2024/10/26/suijip/index.html","9b360331ccb6b72f4749f4183b4e88f9"],["/2024/10/27/ai-tlp/index.html","52aebb2d08292cdb93cc72d382d591ce"],["/2024/10/27/cloudflare-cfff/index.html","6887b727f5780181dacdd62e30ef91ab"],["/2024/10/27/tvbox/index.html","bd68fc6af9d31424b69bf82982025392"],["/2024/11/20/wyy--2/index.html","304b518cf2bb47230385bbbb6801c3e0"],["/2024/11/23/fjyangcheng/index.html","777300994dae29f89b2c12970cdfdd87"],["/2024/11/23/office-ltsc/index.html","bcedec38e25ca607f14f476d4b819baf"],["/2024/12/01/aitiaosuo/index.html","3e14ff07e99c31b9ebbaef1705e052e8"],["/2024/12/01/yjx-study/index.html","e5d0881ff0ed4bc2b6369ec7acbcf62b"],["/2024/12/21/riji12-09/index.html","dba9eebc44c975b3b167d1059ce6d941"],["/2024/12/28/obsessive-thinking/index.html","b59afbf562b261dd57d652bccb6cb528"],["/2024/12/29/yjxxx-essay/index.html","e517d66ca87fe800be9042a1e5617a4e"],["/404.html","b725e6365bab02019182788961ea51f4"],["/about/index.html","3590c1e8486e17be55ea87fcc7d2998f"],["/archives/2024/01/index.html","c71eb360f91e381103b0454337249a29"],["/archives/2024/02/index.html","30fa171ac7e9adce1b24f9b5ff36f0b3"],["/archives/2024/03/index.html","4471a083ae71a39d13f99db4be4c15ab"],["/archives/2024/04/index.html","31e65c222018729de6253fd1e608ce3e"],["/archives/2024/05/index.html","5ea32e95dbb0239362f0eab0f483672c"],["/archives/2024/06/index.html","03eeb0e607377269f8e93d80ea3738a5"],["/archives/2024/07/index.html","1d200d2ef53f74e896cc32dbd221660e"],["/archives/2024/08/index.html","ffdb6d55e60032693c9d876209d938f3"],["/archives/2024/09/index.html","959ebe75cc5b24371901b96c82430b38"],["/archives/2024/10/index.html","4e4f3fd4d5a834921b2d1fd0e3de618c"],["/archives/2024/11/index.html","f730b5f63ad3c7af1bbf4fd1c097da29"],["/archives/2024/12/index.html","8b16da9ebbaa269271201d0ef30dd110"],["/archives/2024/index.html","9ca4c7999cd4f80d50fc2dfec20a9677"],["/archives/2024/page/2/index.html","90c5b48d14b8bf220377b2029fbfa30e"],["/archives/2024/page/3/index.html","56c4497cee2418989896d6e5cd586737"],["/archives/2024/page/4/index.html","ea000e7f02287afcfd1ec101fa574eeb"],["/archives/2024/page/5/index.html","aaeb47d8c94a9c46e0aaa8cf354bae54"],["/archives/2024/page/6/index.html","428c1b4741c53a2d13046ca0c2d7e260"],["/archives/index.html","fba6be85f4b37e59c58c4289da2cd244"],["/archives/page/2/index.html","0e9ec5acc9e392665e3238e2eeb2e5da"],["/archives/page/3/index.html","8e895692de070c79d8dc550c646ca8a0"],["/archives/page/4/index.html","39f4bd1b5e95bfe21c51d0605c688325"],["/archives/page/5/index.html","2b69989cdb81ecc3d1bdccffc4dd696c"],["/archives/page/6/index.html","43aa3ab9fc5d9a0ea2690ae00e15b6a8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","c8bf9ac84acc1265b65bcd052a4c4481"],["/categories/index.html","38c89262be10aff4a7a8843f9b76ea45"],["/categories/学习资料/index.html","fce36f87884706dca3366a9a64a74725"],["/categories/安卓应用/index.html","4e5daef504383a1eab6c59ac93340653"],["/categories/实用技巧/index.html","40aad8983324124fea335ba7d81d09cf"],["/categories/实用推荐/index.html","3a190221dc9df4b55e505d8f58c82a45"],["/categories/实用软件/index.html","54f4ee45a675c7300ebe16e687a62e0d"],["/categories/实际生活/index.html","836378ccc353f620ba82394dec3c89c4"],["/categories/影视资源/index.html","cae4e85482a39c94e12b68624980e558"],["/categories/心情随笔/index.html","4d9187afc92858fe9f0a7406f76ad69e"],["/categories/心理实验/index.html","f53e08ba04601f9271c17189436f0969"],["/categories/技术分享/index.html","0441b9ef910cb27e560a226415d0980d"],["/categories/技术教学/index.html","b96c7b8a2b15059107f25e25f7000344"],["/categories/探究所以/index.html","f15ca812e197e022cb1b2903bf796ee1"],["/categories/生活方面/index.html","94c868ac2627ddcf2ca1f8ba1a035fc0"],["/categories/硬核科技/index.html","ed68f164ea7619031380c0dbc2966feb"],["/categories/硬核科技/page/2/index.html","cd8d10308cc9d008fa48bde111c53732"],["/categories/编程语言/index.html","3ef9ed8e3c6e3bf57b05747d622519af"],["/categories/网站建站/index.html","6c1d8edbe8c27902b7b3ef53dac23032"],["/cookies/index.html","6fa5ff8bdbcb21e46109d7b43b27e87a"],["/copyright/index.html","2437cfaaa47f31bd652abadf2194f402"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","be2a2f5d778e6e8573a5268bbc0f6903"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","c7d4f21c1ee3ee42ace884911384f191"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","15e2a3bdb6b22e6db08167870b1fb695"],["/message/index.html","39ebfe48bdd64987e416c76d312392e2"],["/moments/index.html","6f1fa65ad3fb16a7d817ecc78e457202"],["/music/index.html","f1a4281a7173465decba49dabf7b8ccd"],["/page/2/index.html","6f66697036ecffa91b12d73c1c409a79"],["/page/3/index.html","414fdd89800f76b34da12ab082f5541c"],["/page/4/index.html","3990bd7e9fbd5b0502c090d27d52430d"],["/page/5/index.html","e1c579e6fc5f755666a003c30f63e34d"],["/page/6/index.html","93b8e5ab40f543d8ad4f7e320c245ffe"],["/privacy/index.html","d5c40a3b56b1ce21196f6356a28ce38c"],["/recentcomments/index.html","f20945a4a05d65b24409434d3ff7eca9"],["/service-worker.js","ae198a253386f6f6f1f254af777f22aa"],["/sw-register.js","21a255c2a0817e01bd270dd586176ab0"],["/tags/123网盘/index.html","58c7a73a5c12028ca99a3e12278f5d23"],["/tags/Ai/index.html","7ef7dd5a6ce0e04cc5733d3bddd28a55"],["/tags/C/index.html","ca7d37eb96cf124dc7a30aea0a8759ca"],["/tags/ChatGPT/index.html","8ef8fc399e30c56ad44c1eb3283ecfeb"],["/tags/Cloudflare/index.html","498ad690271bd7dcd60cec8ca9640df3"],["/tags/Markdown/index.html","d80c3406d8a4efdba401fdd6433b4e7e"],["/tags/Openai/index.html","755c4efd1ac08411d6c20eda24b6d696"],["/tags/QQ空间/index.html","aa6c5dc92c83a06e9fe5ddd7a39a313f"],["/tags/VPN/index.html","50b3f0c1e62d1c965ffb1b6a7e9e32a3"],["/tags/app/index.html","9b07ca6bc27f41706a50a35947437ab1"],["/tags/hexo/index.html","bceb7382491b2092cf980fae0938768f"],["/tags/index.html","0c54ad4b129eb5c871c11c121f1511f2"],["/tags/works/index.html","287981b4a44ba3a849fd7d1aa141776d"],["/tags/信息修改/index.html","76a066aaea29d56daa0f591071c0cdaa"],["/tags/写作/index.html","b3a87e36aa4db1b01c6251c15230b911"],["/tags/分享/index.html","18744b32a097b4c3285219dd67031927"],["/tags/吾爱破解/index.html","7b2ccbc112fe19b6aa3d244fe6797bb4"],["/tags/塔罗牌/index.html","7ba7115b34b27509aa7019eeefb90421"],["/tags/壁纸/index.html","b4f5a6aac4f5f2f9ea7ce0746464f472"],["/tags/安卓应用/index.html","87c8b98a63ea9c68afeaab0950710a65"],["/tags/安卓应用/page/2/index.html","f1e74bee4faa1482991c1ea88a7ea1e2"],["/tags/安卓软件/index.html","4f575d593531d54b5041dc01d2be2b32"],["/tags/实用/index.html","f8b69088f36ad051a6e49d51a3bbbc70"],["/tags/实用推荐/index.html","d81e61feec4353c24e6a6e43b6e83c0f"],["/tags/实用推荐/page/2/index.html","debfe9df3bd3d6c0977132ea391e5c71"],["/tags/实验/index.html","1b351748ab7191b131b673a2d7200dcb"],["/tags/工具/index.html","cc4c7f268e6601aa37400e135c717d30"],["/tags/工具/page/2/index.html","1c21df82d013842c0fb27cc7cbc85030"],["/tags/广告/index.html","e3a0980a060ef8ead42ae93541e1c176"],["/tags/建站/index.html","b3faaa01819644e01792e3d6a60b8a70"],["/tags/开源/index.html","f25b2c0533eee800d3d1ed8de7967860"],["/tags/影视/index.html","a3d869c29dd59fd3bdca8c0c6c2ef044"],["/tags/心理/index.html","97941a6b1924c572476069c6600f44dc"],["/tags/思考/index.html","4d7c447df136bf2ed899bad2a6e36306"],["/tags/技术分享/index.html","d82ace532072e5f0a148248ad797a6e1"],["/tags/指令/index.html","bfe7edde869127fff7161ad2fccbb9c1"],["/tags/探究所以/index.html","1765a28bc323f3d462cf4ba7b685d952"],["/tags/推荐/index.html","d830a863df8ff782681f80b5713b0500"],["/tags/教程/index.html","e97cdcfff871d4a1a20a15239fe729f6"],["/tags/文字语音/index.html","ad49bd82b9f270776f51eaeffaea1095"],["/tags/激活/index.html","66cd2eb19380b5947cf5eebfefbc1fa3"],["/tags/班级/index.html","b294411a9bf9058a52210bd89ec80da7"],["/tags/生活/index.html","a3e32ab3aa91fa50fda9e3e7141ecab7"],["/tags/电脑软件/index.html","e0ff84263b069fc0916c210b06bd8511"],["/tags/电脑软件/page/2/index.html","5cd7030acbc5900ed2f39ee63edc440c"],["/tags/百度网盘/index.html","dff411642f63d8515f152d432beec496"],["/tags/科幻科普/index.html","1752775adea6ed8d8a4a8f1331cd5f1f"],["/tags/精选网站/index.html","43332044683751722fe6fe437a492e07"],["/tags/系统优化/index.html","7fc23d275525655b87529d9dccd7ad25"],["/tags/编程语言/index.html","e1b9b8e6326271fd7fba089d87cf349c"],["/tags/网站建站/index.html","e9c63156b52e102e4ff97653e205814b"],["/tags/网页精选/index.html","f6c0776d49f6c0c4f1e5c04736d4bec9"],["/tags/脚本/index.html","818f2860b48d8298b8898dd1f0a819ac"],["/tags/节点/index.html","53f1bc8eb5120c36f6a935caa26a49e2"],["/tags/视频/index.html","c6b24f95e43387a723044212bd4bdd7c"],["/tags/计算机/index.html","7a780028b03066d29bf259447ee0e494"],["/tags/记录/index.html","c520b8cefce6c90c368a7a4221ed1505"],["/tags/调查/index.html","94f6838db798cba57b146a6c15d565e9"],["/tags/部署/index.html","4f2b3b5fe53e55b0499c7911c97a3478"],["/tags/锻炼/index.html","08290875d222050deb296246c736d896"],["/tags/随机图/index.html","de450f3b8ea1337117c6a40fc5e7d236"],["/tags/音乐/index.html","c24b95cfe6f9e1f8fc97324632b6611c"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
