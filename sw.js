/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","c5263ad90bac88c63577fe77faa8422a"],["/2024/01/22/Markdown/index.html","572d0c079019ccb99d11805a2ad7ae26"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","29cb800b4b8a264172c91c165c47f5a3"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","239ac7868634e9844b7315c187ff1de9"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","e274b498a473126b8951c0929fa77da4"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","0630b1848367396e9a026b8bf84f701b"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","937e8afdea2aba572b4f289d93382caf"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","d23f3a89ff3b4a3ea2fa04bb4be23f11"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","b3ea34fdefe76687e5069b53367d6bfb"],["/2024/04/10/C-saolei/index.html","27166fefdd8aae977bb526a608ff7649"],["/2024/04/10/free-yuming/index.html","7af3b9834a864a32151225a4d85031f4"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","18420619c0136b5ed44ff1d694746602"],["/2024/04/21/kw/index.html","2cd4a43dfbac1edf052e69bd35038fd7"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","0ff2b7e6748394de0afe11575746d9a9"],["/2024/05/12/music_download/index.html","70a9a2518810a04a5f1593996c8528a0"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a5c097308b79e6609d51f02a4a07f680"],["/2024/05/25/Vercel-Typecho/index.html","c0d7ee97c35f680920ea548153fc10dc"],["/2024/06/02/website-all/index.html","205e5e2738b5568bdff81eef6cab0cee"],["/2024/06/17/tools-box/index.html","ef5a1db0ef348647d11989976337b8ea"],["/2024/06/22/biibili-zhilian/index.html","e903833ce02619a4317fbd7bd0d214f1"],["/2024/06/23/sqyy/index.html","bbf8f329fe68e84410e6c95d23952588"],["/2024/06/24/win-chachong/index.html","0b9f7ab72fe483f1a7982e819916f659"],["/2024/07/03/dyd/index.html","c09268b0587e7b8fef6068f1d695e43d"],["/2024/07/03/geospy/index.html","f726a9a0227a4a733e1701c962d5c2bc"],["/2024/07/16/TuneFree/index.html","0f0ef3a8c1bf747aa0223e45f57499d5"],["/2024/07/16/pdf-repalr/index.html","7312152a60e7b66306787455ec4e75ed"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","d3b7f370db3f6bcb4ed2bc02aefeaa74"],["/2024/07/23/an-yuyin/index.html","14dcf2a026316703a9359a05dba13038"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","166908bb7b1ada0a0738229ce19191e0"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","6998b6fb3c562fa50282a74abf565f42"],["/2024/07/24/win11-win10/index.html","4f1d443f43357414239e70ee32546add"],["/2024/08/03/wu-muose/index.html","2e9bfef75e95268ecc40bd6193f4b123"],["/2024/08/04/ab/index.html","cc95338266cd3459288bf267378b8465"],["/2024/08/25/mp3tag/index.html","0bc492fe14c8822a520e6a918b46c3dc"],["/2024/08/31/cf-words/index.html","0866821f003970739afd76f37b5c17af"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","7b45513f8ba8c644458d149577607308"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","ae40332515a0e1da1937a883bb3e2987"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","fe6b622af1e968ad6e29601813d39800"],["/2024/09/30/123-liuliang/index.html","d04ad637bbec5e65e2bcc1eecf739e08"],["/2024/10/01/app-allmusic/index.html","f05fcdde8a591a5e4416db19b36d6914"],["/2024/10/01/win-musicfree/index.html","563c3d55e942ae811435c59cbf7b0dcb"],["/2024/10/02/fire-xinli/index.html","c340da15da64741ea5935e6dd1c12816"],["/2024/10/02/win-wyydaili/index.html","c110c0de0d86e42f0bbd273a5d844766"],["/2024/10/14/qq-histort/index.html","0c7dc865ff2024e3d88025628efe6a09"],["/2024/10/26/suijip/index.html","329bf65f6e931b590a627320123fb60f"],["/2024/10/27/ai-tlp/index.html","e9122dde50bf0f6ec0113823e773921e"],["/2024/10/27/tvbox/index.html","1fca1e2bf2affd28f2ddd224f857aa3b"],["/2024/11/20/wyy--2/index.html","5aa6f805accbe7b69bf2b766b69aca57"],["/2024/11/23/fjyangcheng/index.html","20ffb4a841568c3261cd1c931db3100d"],["/2024/11/23/office-ltsc/index.html","412dc79d31fa82d21cd000c02b603349"],["/2024/12/01/aitiaosuo/index.html","6a9cf3b55f05022cf2f12556be333e68"],["/2024/12/01/yjx-study/index.html","0ac5a42a55559bac71739e79d2cb6134"],["/2024/12/21/riji12-09/index.html","b2dfbb5f787d17b319a057860a442abc"],["/2024/12/28/obsessive-thinking/index.html","c061033bd3b3c2d8e861462ff6183b33"],["/2024/12/29/yjxxx-essay/index.html","deaeff23408878042c2dd10298a97b04"],["/2025/01/01/new/index.html","56df9469238f677ed4462c585548d86d"],["/404.html","464fcebe4b85fa2e146c59e204ac29e5"],["/about/index.html","2dae33a5f826cc712148d5ddf8e92c1c"],["/archives/2024/01/index.html","b4a90dc2ec74b17908b622e78311f850"],["/archives/2024/02/index.html","7fad4b4a96ce88a0b9330eeb96769b88"],["/archives/2024/03/index.html","c7697fdfee6b68a4ddaedaf3ce07b5ff"],["/archives/2024/04/index.html","07548cb4a90005d800f04c715e00142c"],["/archives/2024/05/index.html","ebf474cb41059f2a11a489f6e9120633"],["/archives/2024/06/index.html","7cae1ce92d1b9765ac54c7c0e767965d"],["/archives/2024/07/index.html","957cbad62fed077a97a1a272fe95c7c7"],["/archives/2024/08/index.html","328be78024c11e029d0b8a38af3dc97b"],["/archives/2024/09/index.html","f21f4bcc5a84888c65b28713eb09165a"],["/archives/2024/10/index.html","7ccdee90e89ac7bff68b99ecd3e97601"],["/archives/2024/11/index.html","0fc98f4e5234dd03de74a25a42d4c606"],["/archives/2024/12/index.html","e7087e300328d5336d77743e8cafb913"],["/archives/2024/index.html","22604c2ba1d87b48f22108611ed81b9e"],["/archives/2024/page/2/index.html","0207f81b4d1a3d909067fcc4f696755f"],["/archives/2024/page/3/index.html","a678e8f7b291beae11e1812f442d81fa"],["/archives/2024/page/4/index.html","dedb135fe7374511aae0e8da6984e689"],["/archives/2024/page/5/index.html","a905518dfb752fd6e0379999838dd74c"],["/archives/2024/page/6/index.html","cfbc02dc712b5bced9b431671f968ebc"],["/archives/2025/01/index.html","a1a767a6e2048cf78f6db94f294670bd"],["/archives/2025/index.html","8e4bd12f02ea481b7cc9a46f36ce50e6"],["/archives/index.html","e671b34d21a7263e3c54edafbd413059"],["/archives/page/2/index.html","122478ca5557566b26a6e1ebf6b79730"],["/archives/page/3/index.html","c7504f98c952f33543d4db9271f7b8f7"],["/archives/page/4/index.html","f674c3bf797fea09360e60bd1225cb67"],["/archives/page/5/index.html","dd3aef38849cc83cc77f35413f7df682"],["/archives/page/6/index.html","0068ba89188e8adb9c3ac86831362483"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","415b3ee9000ccdde1e7ab2222571b173"],["/categories/index.html","d9853fc8ad54bc4d6831e7b0ed2c6457"],["/categories/学习资料/index.html","5ef839c9ee649fa4f56e9a36c750fa4b"],["/categories/安卓应用/index.html","977a9b1f5cc7be901e8874db4ac0a911"],["/categories/实用技巧/index.html","48fd40004d8b3bc66d0b3bab971a32e6"],["/categories/实用推荐/index.html","071bb8fec1a541f7b8c5ab11ef30c523"],["/categories/实用软件/index.html","b1b8302fd31ab23c9c386b1657570800"],["/categories/实际生活/index.html","80134169015c7986e6d0bac921ad4a3d"],["/categories/影视资源/index.html","8ac4f9cf41f2a89d0bab55e7cc66a4f8"],["/categories/心情随笔/index.html","d1e632d90c95e4d83b0aa2c3742696f4"],["/categories/心理实验/index.html","12ddc2d787a8a6f4e75745c9a822c6bf"],["/categories/技术分享/index.html","dcd5cb4aab11f98d586e620df2a6bd1d"],["/categories/技术教学/index.html","50592a74c971d542e7eaf418673fcbfa"],["/categories/探究所以/index.html","210736eca813201d8eb867318c54b539"],["/categories/生活方面/index.html","c63991b4b5911d477e16b43392c176be"],["/categories/硬核科技/index.html","35aa717f44935ee1fc107053add06792"],["/categories/硬核科技/page/2/index.html","4b3eb2bd1e4f54eba511884615a75155"],["/categories/编程语言/index.html","407fef2e865d8fe29b1c911b0139d3fb"],["/categories/网站建站/index.html","e42ec25fd601f10ea0d7a20b57aa928c"],["/cookies/index.html","800e1a5102c5fc452511b9a6a6af0d22"],["/copyright/index.html","7b99ef06e42ca15b363542a6fc1e6680"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","ab1c08633b54cd91c086cb1bd2d07c72"],["/fcircle/index.html","46b7e89c564d97b86ea0d66b7669a465"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/phone.png","ace8353e0b6333cc9902d31f5543b7e0"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","5419c13a2a0dc1904023c84e0236fcad"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/post_ai.js","379c555303d60ef939122d81d159b6f7"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","99344ee59b79943b9f107216b6a2df85"],["/message/index.html","1dac1225793e70b5fa28eedd56fcfe9f"],["/moments/index.html","7fee6710606e7346637d7b04cac547ee"],["/music/index.html","0a24bd433408af48bf5307bbe7fec3db"],["/page/2/index.html","6a20f007f11922a8ffa2767c4913a385"],["/page/3/index.html","4ed9a3c2f0f261b337312a0ca092d22e"],["/page/4/index.html","9d6d627df5edf1c68e8616fb722eb1a6"],["/page/5/index.html","1fa9b33d96b3daf94ee56671396a529a"],["/page/6/index.html","765303a58306a69bf156947f304e7ac5"],["/privacy/index.html","91626959ff0cba007e0a4118c59ced2a"],["/public/service-worker.js","7d4f04542b5751a8cf464bd98fcaa62f"],["/public/workbox-53ab6fa2.js","9f94064b4db6b5be966f23fc7ebbdc16"],["/recentcomments/index.html","8f9ef7ede72e400dac30aa0974a88e0c"],["/service-worker.js","105f088c918e46d800296e9a336a4fab"],["/sw-register.js","28abef8201caf26628460bbd0d44f0d4"],["/tags/123网盘/index.html","8da6527973a8d293686fb54767fb925c"],["/tags/Ai/index.html","7e0a90b48314acfb60f7906a4f037269"],["/tags/C/index.html","1ffb06bb96c792c5242a2170a3bf1cb9"],["/tags/ChatGPT/index.html","7ea32ab9c4060f64fff6befcbf4cb9d9"],["/tags/Cloudflare/index.html","6f5136f89cccf03c6fafc5777fe1ee89"],["/tags/Markdown/index.html","88b47c6646d8e5ed13c3c4eeaf70d2b9"],["/tags/Openai/index.html","8836341e1d8c2f3a715473f10d97c4f6"],["/tags/QQ空间/index.html","6b63d7be32511ea7ae001cfc7765f39b"],["/tags/app/index.html","2962731bc53cbbdcb8ef83a8fb3703bc"],["/tags/hexo/index.html","f8769b931f3053780ae7e8b27a0d548c"],["/tags/index.html","cf945efe045d2f5bfc10eac5ed9375d6"],["/tags/works/index.html","2fda487ee5ea29f66ede39bd877db432"],["/tags/信息修改/index.html","9b020845c74e7871c24d3bb69f6b5b14"],["/tags/写作/index.html","31f245c819bd7e1a4136f6a36b32777a"],["/tags/分享/index.html","a9afad3d930dc211635d7814a83bf645"],["/tags/吾爱破解/index.html","59c3e19ffbf7595d6fc7eebda01c390e"],["/tags/塔罗牌/index.html","743d749dcf3379b3827c5afc3c86d487"],["/tags/壁纸/index.html","2eb2181ff1182249aa4db896ff611c70"],["/tags/安卓应用/index.html","5cee400f3e7e76916f11d4693b8a8fe3"],["/tags/安卓应用/page/2/index.html","5e706d9db6a6db685a70a015bf48c324"],["/tags/安卓软件/index.html","3acd6c64b9050a7937bc44517f3bbde8"],["/tags/实用/index.html","7b4ce518fd67bd6597a35b6bee5c013d"],["/tags/实用推荐/index.html","9690a1df82a1f906a9a04a42b016e4e6"],["/tags/实用推荐/page/2/index.html","6689e085d8f3aac2015f153d4624d204"],["/tags/实验/index.html","af778f8ed6b799ce11a9877b4fd2ab53"],["/tags/工具/index.html","8dca03d76ea8a8131d202b8ea5d877a3"],["/tags/工具/page/2/index.html","b6eebd273b422916ed4de05b038865f3"],["/tags/广告/index.html","f41b496a39e3d59443388b45d7514f7f"],["/tags/建站/index.html","b3cfd88434add3bb1604316366f9d8d1"],["/tags/开源/index.html","64207a224635ff4c94162eca6a8090cd"],["/tags/影视/index.html","64ead00719e0b2cb1c6970842e67cfaf"],["/tags/心理/index.html","decc8d6a71230075f0532bbf850e1007"],["/tags/思考/index.html","a9eb8f4b838f8ed3df383e53a087add2"],["/tags/技术分享/index.html","dcd4d54e6f105dc5f1d2a2de41a24cfc"],["/tags/指令/index.html","aff228a74a37c39106b5692e4d4dc549"],["/tags/探究所以/index.html","5f22267ff468f793f8c9de1d76ae3256"],["/tags/推荐/index.html","45fa523c8cc12139f75f878cff8406e3"],["/tags/教程/index.html","a87404d67081ae61afcc2469166019fb"],["/tags/文字语音/index.html","c4f4ed69dc7da4a16b17dc378cb59f1c"],["/tags/激活/index.html","d300f9501503a8a2d1cb478775570c6e"],["/tags/班级/index.html","0e4ebc60d4a87adce89bcf5cebc4de28"],["/tags/生活/index.html","9bc88814ac84683b88f4b05f89b55a68"],["/tags/电脑软件/index.html","131497a636ed3668de0a3356dfe82e13"],["/tags/电脑软件/page/2/index.html","eb46d5ea9d300ee40704630d6bbf93d8"],["/tags/百度网盘/index.html","b0696d274782d26069a3f5abcfda7527"],["/tags/科幻科普/index.html","c4b0d9bd64f56f99589ab78f3564f163"],["/tags/精选网站/index.html","df59123f3317eaa46e506a66654a3149"],["/tags/系统优化/index.html","d1bd4c5dcbdb66b1a9aeaac4aa8a6b0f"],["/tags/编程语言/index.html","4a87a5379e2cfc61921d2ee7a5f8680d"],["/tags/网站建站/index.html","1d80c4f0cb671613ec1814bc7efbd6e5"],["/tags/网页精选/index.html","f708ec17ba5010e7baa2124ca1c2aa01"],["/tags/脚本/index.html","bd5d9bf479e5f487150986e0a8e6904b"],["/tags/视频/index.html","eaacaa892036a1d28c7b757b3c581246"],["/tags/计算机/index.html","18145cb254ef41558d759dea946c2e35"],["/tags/记录/index.html","48bf9f15319a856b3863ae0e15c369a5"],["/tags/调查/index.html","3a23004ab06335e677028ceb5ca3ce23"],["/tags/部署/index.html","ef8c94ac0d00e87393b6cd7425498180"],["/tags/锻炼/index.html","5dc629605eeb55aa05e483f5429fb3e4"],["/tags/随机图/index.html","42a818cebbc62a8835390505e32e1143"],["/tags/音乐/index.html","eeed50240d68ecd356067cb307b20040"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
