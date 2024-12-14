/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","eabb74e07eb244095b65cb4798d61d5f"],["/2024/01/22/Markdown/index.html","be8bdce8822a0ad7435b010d79cada02"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","1cf6557df7d7cf8828772568b6aea14b"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","a4a7816bf6e9151d302e3c833c74c8e4"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","025e16c451c54dc6197442be42fc2670"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","bc89874f4a277045acfd8a598b6ad10c"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","fd505b0cb6240beea74cacf316159c75"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","02c30b23be648566a1909838ae2e7caf"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","909c4eebabda1bfc6c68da4aa412203d"],["/2024/04/10/C-saolei/index.html","c171899d9c156ccd2d2aae487f6cfe50"],["/2024/04/10/free-yuming/index.html","f1e2af3a255d47b52b5208253a11573c"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","359b26bbc8e7c01408e058f34f8eb07b"],["/2024/04/21/kw/index.html","8603307ec945cd400665e91e8f421821"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","436ac5f2457607fa53f70b31378a1c92"],["/2024/05/12/music_download/index.html","9759bdbe762d01d247e1c2cd10bb7959"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","fb116d24bf50fecda4576033cdf6407f"],["/2024/05/25/Vercel-Typecho/index.html","59b7208562b8b0f99f978fd6550bc15b"],["/2024/06/02/website-all/index.html","6d15e7690f5361915fec8f0bb9d66ade"],["/2024/06/17/tools-box/index.html","db3de6f1f9e0d0f303bff0fc5784b9bd"],["/2024/06/22/biibili-zhilian/index.html","74f838b363933ba8840a56e0d940ef64"],["/2024/06/23/sqyy/index.html","12e947d7a542eccd53776a333ea9c433"],["/2024/06/24/win-chachong/index.html","a9a63ace364abc86863d6e1d218e4dc2"],["/2024/07/03/dyd/index.html","6d104a4f965603be75b11d533bb4fb0b"],["/2024/07/03/geospy/index.html","3b86fa8f056f20069e7ebb23d780769d"],["/2024/07/16/TuneFree/index.html","a8c248f8d8225d4ca2e7c0cf5ad7714a"],["/2024/07/16/pdf-repalr/index.html","df3f8a530ef261721b5e26badf7048c2"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","756f32441ed5118bc2d5d0f946c94008"],["/2024/07/23/an-yuyin/index.html","3266ddbb02a02d1fc11da3c750e62173"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","bcd8200f2e761a0993bb1335ab6b802a"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","52f86af2666e21ce51981d3b92cb82fc"],["/2024/07/24/win11-win10/index.html","2eb9ee012cfef27137b8ac6fd08cf80b"],["/2024/08/03/wu-muose/index.html","75d91b6e33b10081f862031982320e0e"],["/2024/08/04/ab/index.html","0713eda2c6369ccd4f57b214764a6b95"],["/2024/08/25/mp3tag/index.html","15f7326691e9458773bc2d8e0082de8b"],["/2024/08/31/cf-words/index.html","346de12fea7a00082a04e98adde57013"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","16e0b1a5ecacc20c363825f2cfe986b6"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","0fcaaa73676a99f0bd6accd2f18ac324"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","8122068a97538091ba0cdb042752ff53"],["/2024/09/30/123-liuliang/index.html","e71573a9f0b2ab6f015daaf4f38e9744"],["/2024/10/01/app-allmusic/index.html","311e27d6d687c9fc56a4b193065ac478"],["/2024/10/01/win-musicfree/index.html","efa27500389570f3c8a9128e5af772eb"],["/2024/10/02/fire-xinli/index.html","2167ea999e1047cc005c0800c174cf69"],["/2024/10/02/win-wyydaili/index.html","7b938af43a581af84a88c67c5e2dc7bb"],["/2024/10/14/qq-histort/index.html","89dca3e94ce9f0ec45e789cca1622743"],["/2024/10/26/suijip/index.html","3e43f9eb33f209d2a1af2fdccd5cf2ec"],["/2024/10/27/ai-tlp/index.html","7b2330b8a91c9491a5e08b0d2b974559"],["/2024/10/27/cloudflare-cfff/index.html","8b80f0cc4c6ea58c91ca7444904e4d3c"],["/2024/10/27/tvbox/index.html","caa776e125dacc797333cb9ac0c547d9"],["/2024/11/20/wyy--2/index.html","db5d8e647d077facf254b7dd5a951488"],["/2024/11/23/fjyangcheng/index.html","ddb5e98d2d885ed33493c8d789738020"],["/2024/11/23/office-ltsc/index.html","cdba620d7b51536758211a510d3a4780"],["/2024/12/01/aitiaosuo/index.html","46467d1942c144f50c9590486900ca1a"],["/2024/12/01/yjx-study/index.html","b3627c2b44f5a9fb3d6a6b946c2830e2"],["/404.html","8e33e6041f8eb4e7dcc99d79efdc448f"],["/about/index.html","1ede38c08a149c31fdb3ee827058a284"],["/archives/2024/01/index.html","8a23332ff28d86fcf49ad82f9809f9f4"],["/archives/2024/02/index.html","4c4f754ea11458bfbd1eaed92e8d75cd"],["/archives/2024/03/index.html","a8ab61c2d421e6943b2d99244ebfc0b6"],["/archives/2024/04/index.html","38859af741450c9c05901687379e4991"],["/archives/2024/05/index.html","3971a75bab9a1be9b77cff4aa0cdc5c5"],["/archives/2024/06/index.html","38f87de8c81cfee2274130f528fdf541"],["/archives/2024/07/index.html","dfe77d8fb1cef465c6b372af35e5a69c"],["/archives/2024/08/index.html","77047791926671d88f6f4eaebeaaaad4"],["/archives/2024/09/index.html","da55f38ba9be72e36b1a3b93366e02cd"],["/archives/2024/10/index.html","f45285437435af66fb7f566f32b0d46c"],["/archives/2024/11/index.html","89160b0b06d366a113a9aaa5877a2cfc"],["/archives/2024/12/index.html","39e3b9593a56a5d0a8a485673b5c0b95"],["/archives/2024/index.html","7d0227cdb172c70f8a9ac201e6789429"],["/archives/2024/page/2/index.html","5fbb1de17edcd090a60d7d0caabeae29"],["/archives/2024/page/3/index.html","7001cc0c7ea216c69cb911f0e54db352"],["/archives/2024/page/4/index.html","59455b8d3898ab8b707c425eccf2bfe0"],["/archives/2024/page/5/index.html","3e2582e4b9e6b3200ee1fe8bc43e4c93"],["/archives/2024/page/6/index.html","84cc4776e1b8f20105f310bc9eb643ef"],["/archives/index.html","1961cc6f0b3a2b6bdf257bcecd4bf005"],["/archives/page/2/index.html","0a5f2a966bffd5a85d526fc39a84bb7a"],["/archives/page/3/index.html","6439ea7ff71dc5e9068a9d50b5c44915"],["/archives/page/4/index.html","4fc1a9618e2653eb101c48724f42cabd"],["/archives/page/5/index.html","c56f2de2852cbdde63b274723ac46193"],["/archives/page/6/index.html","3452fab603b25b5e2da52f18d9c15028"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","05ffb69aecf722602ef81c219bdb5d3d"],["/categories/index.html","315852bcde0614956d73b1db9b59fa6e"],["/categories/学习资料/index.html","2f2665727ce9027d5222e8e4042f234f"],["/categories/安卓应用/index.html","1b57ffb41b16ba60d606848a8b55ef8d"],["/categories/实用技巧/index.html","2cee11cd207fe5801851d83ae5a2e5c5"],["/categories/实用推荐/index.html","7d3e48d7c7e24d78cc63f04616954615"],["/categories/实用软件/index.html","584c57d6a4657f70e30503ddb42d4590"],["/categories/实际生活/index.html","02a9352f08970cff1afeabbd29cc1a38"],["/categories/影视资源/index.html","dbf788259005ce47ddc14cb9f3aa2bcc"],["/categories/心情随笔/index.html","7ec464d2eb5936a6450f888433ebc2c1"],["/categories/心理实验/index.html","871fbbbc5a0c7deec80eba3bfb40174e"],["/categories/技术分享/index.html","7e2661d05341291245613f940d128180"],["/categories/技术教学/index.html","3480452250243339309394c29941b0a9"],["/categories/探究所以/index.html","fe8fef613d2c543b8f40776bd0354e72"],["/categories/生活方面/index.html","cd6c9e7a408b8084757e7bcb25e6f966"],["/categories/硬核科技/index.html","b08e9ae072a5ecf99fb9af0f81147131"],["/categories/硬核科技/page/2/index.html","29be0e257c9670b0489528e266579075"],["/categories/编程语言/index.html","1b710b18e3cf2d41824524fc2ef8c57b"],["/categories/网站建站/index.html","260759bffd789cae97da22c9e983f550"],["/cookies/index.html","be1dc7cf616782494f9ecb194f66d163"],["/copyright/index.html","90c00c67f49d1953732b967c2a78a5d6"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","f1d394d61744c1f41d078a451c7f085e"],["/go.html","03f7bc570f9ad261f3f078d16467c82d"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","8e5d29f22f9cf8cc0a3a8457da05bee0"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","8ca953de8300273a1c9dcdf0b0631ba7"],["/message/index.html","3f87392f8d0e66f860ee2eafee942850"],["/moments/index.html","891ea6e2219bd0fdeefacb9be94376f4"],["/music/index.html","966353fa4604522fcdb800b631e80603"],["/page/2/index.html","55223acff1daabec6133aca53e14b0a7"],["/page/3/index.html","a707eb1c1b8a40842c3aa903aebc2614"],["/page/4/index.html","2e4158985478ebeb62bcb45722dd3446"],["/page/5/index.html","cf6861ab78c9f8803f2f9e2b366f9e4c"],["/page/6/index.html","38400e87c4362bd3463a820ae41a667e"],["/privacy/index.html","43349f61aac4b1dd4a02624a8f731391"],["/recentcomments/index.html","d51dbd65b96f35bd22279f8e01fb1cd0"],["/service-worker.js","6d593e5b24fc188de5cd682b77dd8840"],["/sw-register.js","2cbb42f45765096684684033b7d72121"],["/tags/123网盘/index.html","3538e7104c91a3f14b3a42f26fafcc0d"],["/tags/Ai/index.html","92d5bfa8042a2137f5768a59a8840678"],["/tags/C/index.html","e5ef120cc7aabc33c6bf2ab94db35009"],["/tags/ChatGPT/index.html","d288f3b30539e49e8d93b7aca5df83c6"],["/tags/Cloudflare/index.html","36701f4ab7f8858a49f5591e9e003c1e"],["/tags/Markdown/index.html","cd6b8b04f447f3079a3b26d5fd22068a"],["/tags/Openai/index.html","cb9a25c42246c375203c0c04d91c5859"],["/tags/QQ空间/index.html","512fe9ad3f0c704ffbf164dcc3acdd65"],["/tags/VPN/index.html","b32b26daf5ca05ab3763b3f8b4fa9e92"],["/tags/app/index.html","942241d17eb5ddc5381f996ba0d8f20e"],["/tags/hexo/index.html","d471bba782260e53eabc8a5efecdbbd9"],["/tags/index.html","8967264860a7058eb29b394d3816a1e6"],["/tags/works/index.html","a2eb55577682aa6ef6656bd9cfabaa9f"],["/tags/信息修改/index.html","4bc18761148f1ffd5297d3ead0b8a069"],["/tags/写作/index.html","10266f302a45bc674201de6b9a1167fb"],["/tags/分享/index.html","22736a1d00978f5c4471ce12c7cd7772"],["/tags/吾爱破解/index.html","72b9beecc37a39151d30d3ed024d8700"],["/tags/塔罗牌/index.html","226e624782e06b3be5d1e222200c2a08"],["/tags/壁纸/index.html","11329192feb5c058af3274fb37b169bc"],["/tags/安卓应用/index.html","600a041323acd60628288d6c5c0891f7"],["/tags/安卓应用/page/2/index.html","8ce2fdd8f147a8d3a0b5bd93e08c4fab"],["/tags/安卓软件/index.html","91e25175a7d8d6aadf0d5043574068e5"],["/tags/实用/index.html","36611b8574f9eaaec0c8e2db50cd9faa"],["/tags/实用推荐/index.html","0256e71601f7adcb2fc7b88e3b113d5d"],["/tags/实用推荐/page/2/index.html","fe9fbf257db3153926d97701536ac988"],["/tags/实验/index.html","e68fa310223cf8c59bd323cbd440752d"],["/tags/工具/index.html","a578c710d600a8a6c97b4654a822733b"],["/tags/工具/page/2/index.html","a0b6901667325b7bc13292a21cff88b1"],["/tags/广告/index.html","5bf7b6cd2465ac1e1afc50f7348f52e5"],["/tags/建站/index.html","5737b804ba10767c260e92c05c52ee78"],["/tags/开源/index.html","b7bae5a2fd11ed6b65ec669b260f25c4"],["/tags/影视/index.html","c8f7a1d7503d2b4a4715d32ddc0c4510"],["/tags/心理/index.html","19936f2a32875c0fd3c391d0c36ee4e3"],["/tags/思考/index.html","f4a49f87ffff8525e49aed0c78f225b0"],["/tags/技术分享/index.html","71ac5138f3f09fe12314417f27d8b9ba"],["/tags/指令/index.html","d6c52da9f9605f83a22657bf5c96189f"],["/tags/探究所以/index.html","00ff77ec0b6561f8049489cfeef08b14"],["/tags/推荐/index.html","4eb13d6669ce7c2bc7ea141effe7b858"],["/tags/教程/index.html","428651a55d3bdce2f56c724787eacb52"],["/tags/文字语音/index.html","da71a1cf841331544815be7b64105b67"],["/tags/激活/index.html","696cf9742177a85ad05a97325bed628b"],["/tags/班级/index.html","7934299216cb8c8c14c0ba17bcfc3987"],["/tags/生活/index.html","67ec23d8794c4d45617fd2566ba27ce1"],["/tags/电脑软件/index.html","a2eb9aa5ae269596cc41412d65fb8a83"],["/tags/电脑软件/page/2/index.html","ffdf69ef33fa0cbaeb718cc658fd40ad"],["/tags/百度网盘/index.html","69b77cfb1ae759a18a0a95c9b7a8a056"],["/tags/科幻科普/index.html","9ab75ae8fd075b2f04c1dee33e374393"],["/tags/精选网站/index.html","33d7ad44c5a4976a3d27261425b50103"],["/tags/系统优化/index.html","a2729052a4ed46bd51892399f89fe122"],["/tags/编程语言/index.html","3a15455e00839b6141807d4d53b3f347"],["/tags/网站建站/index.html","03a044ee30e1314ae5bdd576e8275967"],["/tags/网页精选/index.html","06dc0b847d2275420a561b99ab65130d"],["/tags/脚本/index.html","ba689512bfe7ecb71eb1a09d4f7f4b7c"],["/tags/节点/index.html","1a044753acfa32457fd305ad96562f0e"],["/tags/视频/index.html","d46c5085d30a35a39093ccd0130a8289"],["/tags/计算机/index.html","0f161550aa82d40f9ee35fadbe327e10"],["/tags/记录/index.html","ad4170b5c2359e76512d576885c79714"],["/tags/调查/index.html","ce7b39cba3713c27e8572bf16b526e6e"],["/tags/部署/index.html","c4663c308eaf7ec7ae7beb3bfee25ec0"],["/tags/锻炼/index.html","d648f15c37c9536d5675bbe3f8ae2ddf"],["/tags/随机图/index.html","0bc30900ba480ad50230f6efe24e38e7"],["/tags/音乐/index.html","5d99a305b4919b576f4b601be0336777"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
