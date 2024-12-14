/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","11c6f836a913a586f0b4c1e2752c8ba3"],["/2024/01/22/Markdown/index.html","9f5baf29adb90c417fe8de3759196d8f"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","67c8ffb01bdc8676431e13ea3ac6235b"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","2966f79d05f95dabfe6c545045aee153"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","f4ccf725d31cd45fdd66757f72088acc"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","feab344307ac360c5ddc119c0328df2d"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","419a8f3bd987c13fe5938f8ecffca1e7"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","2be30d12cee3cd291f0f3bb164ca09a4"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","c4b46c95344bd1412359e48bc5259f01"],["/2024/04/10/C-saolei/index.html","3878329ea416eda3a19d0ac1ee83bf51"],["/2024/04/10/free-yuming/index.html","f1928e3ae75cce2a946efc745b6c4042"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","0667f128b0e3a1d64faf8a53c0187b18"],["/2024/04/21/kw/index.html","862557ad4a02d95e7c2507dc3d110be7"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","b78151b96d40587f1da1863725f9c58a"],["/2024/05/12/music_download/index.html","0bff30caa62730fb4741a57acf868b4b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","1ea639a06c709477af16cc48aa641a8f"],["/2024/05/25/Vercel-Typecho/index.html","5141773c71452126b3a6e9958c5da16c"],["/2024/06/02/website-all/index.html","68bf9fae8e8005b8c2f6ce22f47cdeda"],["/2024/06/17/tools-box/index.html","e203ccc725016c93b53445c687b316ee"],["/2024/06/22/biibili-zhilian/index.html","311f1882191ea82e010e0623df801c18"],["/2024/06/23/sqyy/index.html","d402a91b09cf905f77bb432f52113644"],["/2024/06/24/win-chachong/index.html","3b1ef555702b87aeb187a1ae5f1a3382"],["/2024/07/03/dyd/index.html","d206737fec2d980ce7a1d3854bad3de4"],["/2024/07/03/geospy/index.html","b2bda05367a6ae195d0d2476084c844f"],["/2024/07/16/TuneFree/index.html","b134288b9e9f282f76de3423a639733b"],["/2024/07/16/pdf-repalr/index.html","ef4ab46575982156b9982351c7b6b20f"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","84cdebd1f73fa97717019dedb237cb3b"],["/2024/07/23/an-yuyin/index.html","ef9a9810d31290f1a7edabe796b1925a"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","eb447e9b0ad70c9e3af164335f5f7101"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","0bb4acbd496a0c6f9a601f7261b78577"],["/2024/07/24/win11-win10/index.html","ede4f9eb4d1d3a7f8a01bebf947ac2d7"],["/2024/08/03/wu-muose/index.html","bea12344c090786e1da27a5a8dcadbe5"],["/2024/08/04/ab/index.html","9bbb0d500acd09cf1bb533396065d887"],["/2024/08/25/mp3tag/index.html","c075a62b0c1b354ae96b0c94645b24a3"],["/2024/08/31/cf-words/index.html","b5a2b5469c1a2f464c2db88c3b169b34"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","a04074c6217023e9d20a882b7aaeac69"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","d0b4f4e3d0553d09b2e02f6a9b8f4238"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","421a7c8acee77dbd736a53dcb2593bf2"],["/2024/09/30/123-liuliang/index.html","38eb178ffba253ddaee0befe3e0f0ffb"],["/2024/10/01/app-allmusic/index.html","015092fc2b248a13660af9121ac669b4"],["/2024/10/01/win-musicfree/index.html","40464f9ee88d93e99c0ab315d409f8bc"],["/2024/10/02/fire-xinli/index.html","9add315f4019c2389ee131b256446118"],["/2024/10/02/win-wyydaili/index.html","ab6dabf736cdd120aa3dd0795a78f191"],["/2024/10/14/qq-histort/index.html","bfd9145ed1c190c81ebb243d78d90838"],["/2024/10/26/suijip/index.html","004fb6723a8f506c0c8eac10f604629f"],["/2024/10/27/ai-tlp/index.html","f1a3f5a4d1b3084f25c0a249da303b67"],["/2024/10/27/cloudflare-cfff/index.html","7cec5a9d7f29fa0fc1efc3004176a2dd"],["/2024/10/27/tvbox/index.html","c8693a3a909cc27b852c65cb48517390"],["/2024/11/20/wyy--2/index.html","f79f51e51dbb5119e09c31356e2a7346"],["/2024/11/23/fjyangcheng/index.html","15a68a3dce741705fe7919e8274e70b9"],["/2024/11/23/office-ltsc/index.html","d984a3bdb788c2882a223a7cbf868238"],["/2024/12/01/aitiaosuo/index.html","19d6f0542d1c4dbe750349819905c14e"],["/2024/12/01/yjx-study/index.html","21ac88660c9635657d0f736333fb5e4e"],["/404.html","dc54e1b9ba0f8aecc0180eb14f741c65"],["/about/index.html","1f202cb21f28cca6c52e988e326918ec"],["/archives/2024/01/index.html","54b190c960419e1984a2204cacf5899c"],["/archives/2024/02/index.html","8c06d5b9759636ed3828545af268ced7"],["/archives/2024/03/index.html","3b0d44aa095c280545c7c22d8683a057"],["/archives/2024/04/index.html","bcf99bd54af302da729dc8c2d7c04d69"],["/archives/2024/05/index.html","4f79123e6cb577d5239529c551a84916"],["/archives/2024/06/index.html","3d78943ab370b3ee324c223d4dde785c"],["/archives/2024/07/index.html","9d52d5381ed582a64e897b545de6b65f"],["/archives/2024/08/index.html","5acc2ff49ca991846e9e5c5938b20aea"],["/archives/2024/09/index.html","6dd1323292c5d93dfed09f9b03a1058a"],["/archives/2024/10/index.html","19d2a1cc9b90caf1c578275add11c924"],["/archives/2024/11/index.html","34e52824d8f4a810df5140ced903328c"],["/archives/2024/12/index.html","9eeac7a79921ab8b3376ff273e92931c"],["/archives/2024/index.html","804b010e3753a8adf15fd5d80108fa53"],["/archives/2024/page/2/index.html","72c251a07f33d133d271f23851c5c654"],["/archives/2024/page/3/index.html","23febfcbaa803b203815481aaffcbf2d"],["/archives/2024/page/4/index.html","c9a0b14b34c99e648930eb190f26c9f7"],["/archives/2024/page/5/index.html","cf6a36d50df6416571a0d233ecd57337"],["/archives/2024/page/6/index.html","bc5f7a81e3aed3c9f195b835f1510f95"],["/archives/index.html","0b6410b403c2d66e64efad2bf29ac6c9"],["/archives/page/2/index.html","a85f72f45f46a9788bfde2fffc0c7552"],["/archives/page/3/index.html","c77776e94955b84010a1d34d5aa7663a"],["/archives/page/4/index.html","8341f74bcae56e5b01ad202eda570bc9"],["/archives/page/5/index.html","f65b86306fc771e544bc85dced5bf8b4"],["/archives/page/6/index.html","f672133568a1ea5ae54464633cb0e854"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","bab9e2332a9144da33faa5f2e30f05cb"],["/categories/index.html","a43acf1d9e01b1506b632cc7fd6b234a"],["/categories/学习资料/index.html","006c8084373d543a6f992db7df29372f"],["/categories/安卓应用/index.html","629a3107926561afef12e968dc0b11ae"],["/categories/实用技巧/index.html","14e49fab6957f8cb9af9a29316b46ee5"],["/categories/实用推荐/index.html","90a1203124749058ddce5dbbe4fc0bfe"],["/categories/实用软件/index.html","ee4a7ec9c6e2e23e83c913a97c06db0f"],["/categories/实际生活/index.html","788bbc4cad9588ab44de40d3785dd1c6"],["/categories/影视资源/index.html","3b4fd1c8adbfa5db70dedfb517c68202"],["/categories/心情随笔/index.html","b164176c87fd0bcf9e6739ba353cf18d"],["/categories/心理实验/index.html","f70db9e5f413dfb3a900648d16f98f1b"],["/categories/技术分享/index.html","541f2e8c784556f0b571cc28c8ca202c"],["/categories/技术教学/index.html","14f028fce0ecd92f57158257b9118ddc"],["/categories/探究所以/index.html","863c7cf010dc3d4b432a89c80e948716"],["/categories/生活方面/index.html","1634fb9f2c62a8232cffdd1adf5b0902"],["/categories/硬核科技/index.html","1f37fcd33274f793d80e76ffb38073e9"],["/categories/硬核科技/page/2/index.html","71ab91f406e281fb78c272ad2b488a78"],["/categories/编程语言/index.html","725767b580302025ff13166ab8f7f609"],["/categories/网站建站/index.html","36c254770d297d7d4547809bc5bf7f54"],["/cookies/index.html","ca53868eed899a8b76e30ea0f260c2c8"],["/copyright/index.html","7c8fe0946c98b8515c86874fa20fce77"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","dc5f4b313d8751e561a8b69d172f8052"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","8361564cb2728bfd3f6798016b4b9ee1"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","8c78ee460b202007bd6ec92484a43c3a"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","8ef4b13437445e7370792707cfa7b3bb"],["/message/index.html","9d155610d8e93b6f4cb634d1bf2abcf3"],["/moments/index.html","c05b294a38edc11b1ee5c91e86033490"],["/music/index.html","571f5505e5961674cffa6afa3b5dad62"],["/page/2/index.html","fa91da2e734fd06dcf78be5fd9fe5c56"],["/page/3/index.html","c5a0cced92a4c8f3a3a38528eb7de346"],["/page/4/index.html","f6270e5297b2ffaf2ecb426e57f09a60"],["/page/5/index.html","eb9ae80f65677a05930b270f64710541"],["/page/6/index.html","38ba7fce8460c810ea111dbaae5af74f"],["/privacy/index.html","20cbf8a2db9e170f6d1df8ab259d63b2"],["/recentcomments/index.html","8be30b165bcf7d331e69555bc3ac336a"],["/service-worker.js","5313204a65affbafc34e8f4c86b9049f"],["/sw-register.js","db3517ac9c95ec0d1bc9ae39927b9c68"],["/tags/123网盘/index.html","3c8d45f5efabed64f949963e1ef08efd"],["/tags/Ai/index.html","4215071dca1a31aa7cbd9e1c4c39c4e1"],["/tags/C/index.html","ca6e62c3f06e26254661016e4ff609db"],["/tags/ChatGPT/index.html","eeffce787ebeb37031604733a52672e4"],["/tags/Cloudflare/index.html","1f7d486dda3abcb41b279b6b4c0e7893"],["/tags/Markdown/index.html","263a0d7e5b6dc4ae7a5a4f422d9ffd62"],["/tags/Openai/index.html","e075a9de9c4fe8f411ae15f3ee1348ef"],["/tags/QQ空间/index.html","f2214acf0f6fb211ef6f4a4f52fe8f35"],["/tags/VPN/index.html","fda662aa929a0868112efdab44c4483d"],["/tags/app/index.html","a8fab5c0f0c465ee8e59a4e61ef792da"],["/tags/hexo/index.html","1864218a89808201a6634dada0561827"],["/tags/index.html","32cf9f0dc61d1b1dabef9c707a5216db"],["/tags/works/index.html","a2bbfa965898cd310b8cd9ef989a3cf9"],["/tags/信息修改/index.html","78f6e6cefef44ac6fa86f244e58765df"],["/tags/写作/index.html","ab7aac8b007b26b87e70d2848ce79aba"],["/tags/分享/index.html","64ca93afc46701442bad09d490d46630"],["/tags/吾爱破解/index.html","b054a8f58658d9cc9d59c6a0ae4feacd"],["/tags/塔罗牌/index.html","ca17cee71ecb37bb9a022317b5fb8e4b"],["/tags/壁纸/index.html","af77fa36efd6750a66fde49c1144a715"],["/tags/安卓应用/index.html","f1c470648afbd7944aa24e00fc71371e"],["/tags/安卓应用/page/2/index.html","a27521baeced93de034c470157ad844c"],["/tags/安卓软件/index.html","9e6f0e295b6ea68c84d731dc1a46b051"],["/tags/实用/index.html","f58d8001c504d64cf5b8b7f2f2ec8e2f"],["/tags/实用推荐/index.html","a4f4abfa8cc8553af77d197a8b26d131"],["/tags/实用推荐/page/2/index.html","87f8cc5c596cda74186fddebfb0634bd"],["/tags/实验/index.html","61acd7d1732359f41362237646ce9870"],["/tags/工具/index.html","9c8b1acf85ae69b37bf5b3099758078f"],["/tags/工具/page/2/index.html","1599fb1dc994e0d24958ef665fd0c9e2"],["/tags/广告/index.html","1b475bca769e96e410b6cbb77ff8fc94"],["/tags/建站/index.html","2ee67b6a00c6ba9ad9c4c361ec3a1c57"],["/tags/开源/index.html","1496fe75a980777cf58f8493354c04ef"],["/tags/影视/index.html","c2ec902afe04234bdc308add96784935"],["/tags/心理/index.html","f208afc8a42f1eb86966274443cd2eda"],["/tags/思考/index.html","3e12e72e6e2e91ccebdf1b47f7c7c70f"],["/tags/技术分享/index.html","6354250c262590d0a97bc3812a710936"],["/tags/指令/index.html","d22d50821d7137c3c059eeacdc7ffe2e"],["/tags/探究所以/index.html","1f894953b9bab795b83e8d312f6d3d61"],["/tags/推荐/index.html","e62ed0414b20cbc8cd8c65f897fc0930"],["/tags/教程/index.html","21141a73ed226f4883f406bb1c8978bb"],["/tags/文字语音/index.html","f55f90c1055afef1665873b35b4862ea"],["/tags/激活/index.html","72a62dd1e1a55f739aa8ad72ca142e07"],["/tags/班级/index.html","e25f74fbcabe0c870980edaa1acb6a10"],["/tags/生活/index.html","96781e5c1e620b2fb82f204fdf6a62c7"],["/tags/电脑软件/index.html","4fae4aa411c2c0316d116705240e6bc5"],["/tags/电脑软件/page/2/index.html","7ec5b0831ddc6802d2f8fd076eb9ff98"],["/tags/百度网盘/index.html","1ade53452611e29dc7a52429134ad838"],["/tags/科幻科普/index.html","3bf8342f2f4684fb58bc0364fd194178"],["/tags/精选网站/index.html","0ae95612e7f859ad052b863dd99f19da"],["/tags/系统优化/index.html","0a933cf244d345180abe82c3451f5194"],["/tags/编程语言/index.html","5a83df3dc52efc3d402460c70fd47bfa"],["/tags/网站建站/index.html","0d735cd517b997c86c865419db5957b9"],["/tags/网页精选/index.html","7e793103ed021d6a6c8243ac51d75903"],["/tags/脚本/index.html","cdcf8394a5a48e2ec89e1aecaae22191"],["/tags/节点/index.html","bfbad5fa0df57645c69e8e40355d0feb"],["/tags/视频/index.html","8ff68de4322e4efafdbeb9065c3364d5"],["/tags/计算机/index.html","0715fc6489ab9a4cc3f870274ee93ac9"],["/tags/记录/index.html","76f8cf83f4b41ce005a7c010838e9863"],["/tags/调查/index.html","5af42d4bdeda44f4d49d3cb82e47e8cc"],["/tags/部署/index.html","ea44d9ce769e085a1a161fbf94eb23b8"],["/tags/锻炼/index.html","775a5152251faf1ad0101e338c5a842d"],["/tags/随机图/index.html","d85c640ca04b1afe955f6e0d2cf07723"],["/tags/音乐/index.html","d5e5a49473d9bdc09b83c3efc7723ff8"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
