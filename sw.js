/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","2d81f3051cda3b50f5b4a553f7cb4f93"],["/2024/01/22/Markdown/index.html","44b5f1b32563e5d83a01de1ed67655c4"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","7efd45d894f0e90e898fd94658a4707d"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","a16efd1b80a419f5a468dc003f08e34a"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","8edb05004787f6697388ee027bd82c18"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","07d19e93d9bc0843f83c3ae79282d1f1"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","ceed6abe3d2342df36fc88c1a17a0646"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","33548f9298a87179561bc40a2ad799cb"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","19f68eb97b37878450870e83f7710a7f"],["/2024/04/10/C-saolei/index.html","56121695dca1dee0719ec897f9bdf9a3"],["/2024/04/10/free-yuming/index.html","787a2c586a1ca4c32ba617e08522ad39"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","e5325d6e23b1b33e71565b5ccda5be29"],["/2024/04/21/kw/index.html","bca0ad7f4b2e5e4bb53e06515561a1dc"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","3d0e778cbb366ffb5fc91ce812acc607"],["/2024/05/12/music_download/index.html","cf150632edd2ec2103caec8151e1be32"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","c7e5ac2f0ad7223bbbf241730b689679"],["/2024/05/25/Vercel-Typecho/index.html","001e51ba2c17c61d33477173d7eb315d"],["/2024/06/02/website-all/index.html","e8a55724e61d92103fa1dce531c88338"],["/2024/06/17/tools-box/index.html","9b5ee25e76b1d52554e88d1425062f57"],["/2024/06/22/biibili-zhilian/index.html","3f9bfb066f50c10101e48f580c87a2ba"],["/2024/06/23/sqyy/index.html","5bc8e1b99ceef3224312c1885e7155c5"],["/2024/06/24/win-chachong/index.html","ef8acd148405709f847b3d73dac01e6f"],["/2024/07/03/dyd/index.html","e47208572f8ce3676c34c6a1ee3e29f2"],["/2024/07/03/geospy/index.html","eb909e3b11d454e57872bb19ba05decf"],["/2024/07/16/TuneFree/index.html","21142ab606f4bfb571c70141d2e8f9a0"],["/2024/07/16/pdf-repalr/index.html","6ad444e681876716efd09f69f3d2dadc"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","1feddd1aa02851bfaeba5167a8e20873"],["/2024/07/23/an-yuyin/index.html","a5fdecc409557f730e69fdd9dc9b5153"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","6dc6177a6c724b3b88f119b2e8ff30ec"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","ff9e8ea8d202614fe55634b865148ac4"],["/2024/07/24/win11-win10/index.html","efe3ddd0cd1aeb14c037d49f32171fd1"],["/2024/08/03/wu-muose/index.html","2d92f9e84fcac2923748e70b07dbc0e6"],["/2024/08/04/ab/index.html","d88af6c1ab89229dabe74e24085028ee"],["/2024/08/25/mp3tag/index.html","ccd3b051f3dfe8a674442d93867764ab"],["/2024/08/31/cf-words/index.html","3d755cbca98b01288404c74fac513f33"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","b34fc3afac37f5a4abb11439cccd1e49"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","b98a571deb1f44d311eed181ff8325ef"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","49b04fcd287ff6c588a12c1095dfd3ac"],["/2024/09/30/123-liuliang/index.html","3a78139d2b9b4ad7395cb1b84f8e442e"],["/2024/10/01/app-allmusic/index.html","275ebf23c8df6a4deafece7c1ce19503"],["/2024/10/01/win-musicfree/index.html","2399daf4710b5656337f65784f5e60cc"],["/2024/10/02/fire-xinli/index.html","9f0afbbcc7a59fff175a40164ed236ce"],["/2024/10/02/win-wyydaili/index.html","7ef248bd66ff9bb56d200371830f9823"],["/2024/10/14/qq-histort/index.html","8fede1675d9ed1ef878e33ac4a32051e"],["/404.html","dedfeb18a4b6133a75c0c1efa271257e"],["/about/index.html","1656428a296d1913ac9ff0d771be700d"],["/archives/2024/01/index.html","7f8714464ce91d803c3deee4ccae8b97"],["/archives/2024/02/index.html","a76cd2f0af6d14aa55caec5c8b660429"],["/archives/2024/03/index.html","3dca60d831d8bee66d64747232f9ea6b"],["/archives/2024/04/index.html","dde147511c50c1b0d466d90197e16569"],["/archives/2024/05/index.html","da17cd2c6335aa182c2f010e9439df10"],["/archives/2024/06/index.html","ac126f95e446015f17bbc51b69770c8b"],["/archives/2024/07/index.html","5c215d5592eb030b214c6b1702f6dea6"],["/archives/2024/08/index.html","eef0a88f5486803b1b98bf13433c001d"],["/archives/2024/09/index.html","70876c1674d5ab00c9a9174faa330f26"],["/archives/2024/10/index.html","4d4dfe22aa3f3e7e5b1bdda3c5aec742"],["/archives/2024/index.html","3b0c9a489bad015b299e1cfc44e45682"],["/archives/2024/page/2/index.html","51c6d183e9d6c4bd8e077a43f4c5786c"],["/archives/2024/page/3/index.html","7ee2a7cfca91df320223bd84550a3feb"],["/archives/2024/page/4/index.html","97437bca487801cd220633e333c2b6a8"],["/archives/2024/page/5/index.html","17aeb827bf768a3181d78a659a058584"],["/archives/index.html","bb71e3828a402eeb26ba0f60594d3309"],["/archives/page/2/index.html","259ed58bd748ac3a214ebb070acb0a4e"],["/archives/page/3/index.html","138fc4102458ab01134f67dee8b9c401"],["/archives/page/4/index.html","d40de30007c986220497bac37aa9a1be"],["/archives/page/5/index.html","e6ec456e82b6852d332f4c584df92d58"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","b846aa8607f2dbad16f824ef8d860d26"],["/categories/index.html","453e100b2aeae13fb008e7fd5e76b5f7"],["/categories/学习资料/index.html","fbabcc74c0a1c842bac69d6c82353930"],["/categories/安卓应用/index.html","1642d298852bd56a302dc350b9b37002"],["/categories/实用推荐/index.html","9b60244c112ee0deac47d993e0d57438"],["/categories/实用软件/index.html","c6929311feddfd45c76a046ee77f9507"],["/categories/实际生活/index.html","53169398e15c33714130c88a8e4fd019"],["/categories/心情随笔/index.html","61698dffc666752eafe36d27e4462110"],["/categories/心理实验/index.html","e0ee547723ff5661010f6f46901f51eb"],["/categories/技术分享/index.html","9a3e78b71ab1ef22c7342b487422e5c2"],["/categories/探究所以/index.html","18913fa1ba2bcaa5f5cefad89931e147"],["/categories/硬核科技/index.html","d703ba5aa3e10d4264482ccff3465291"],["/categories/硬核科技/page/2/index.html","c47f671993015a82f3ebfc6e0cd1673d"],["/categories/编程语言/index.html","2d3b0fb50a7ac0e4881dc259c066e778"],["/categories/网站建站/index.html","e34ddb161126b3036afbf96a95b82892"],["/css/custom.css","7ae5e8c679c0fc037ae2bb972d670436"],["/css/index.css","301f58f698e7c50a10ef0cdba067eb8e"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","af8ef941616d214376d6b8fa45b4c707"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","2be9af18fc5795c14a25a22b1345810b"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","d5f742ba6ef01cfe2b4aa26cb23dd363"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","b3f3683a17a6c5cb372654674c3aea95"],["/message/index.html","eb7f0d9dfb47996f526e7bb652f8a614"],["/moments/index.html","87cf1aec470044afcb25b7b7ff9654d4"],["/music/index.html","513e696e249a7af11fe365b268261017"],["/page/2/index.html","105448d47bd29cd0f676e6efb7969d42"],["/page/3/index.html","b126f2eb61a8c49d4d958f0899e683e7"],["/page/4/index.html","f4b05cd72d62450b499e622ad4b376aa"],["/page/5/index.html","bfc1441739d4a95249da9de7292956d9"],["/recentcomments/index.html","4c691c1153cbdd7d5b9ef72ac8eb6710"],["/service-worker.js","589113b1202351246da542b376e93d2f"],["/sw-register.js","6ce5a011a283992416fac0dfe9b23ad1"],["/tags/123网盘/index.html","80e7131f89ac27bcf91f9deacdb28f0f"],["/tags/C/index.html","c235335d412095275d9e93e4b2963afa"],["/tags/ChatGPT/index.html","7c15b6ad48f419a339bc6170fb69f1ba"],["/tags/Cloudflare/index.html","93c27a05f03868cbeea991beb8cb640a"],["/tags/Markdown/index.html","d91d6447d2a94bf653d58332f26fad0a"],["/tags/Openai/index.html","9b13cd0b8a5387c0d2a8c08d85ca3ced"],["/tags/QQ空间/index.html","d6ed4782389590e19f78d157493a0694"],["/tags/app/index.html","1ce6b0a8ca0953a9e08a1fe4f259e252"],["/tags/hexo/index.html","fdb1d566928c9b498a1b563c65d0863f"],["/tags/index.html","8bcbcc9de6632f0efb74ebeee97ebf55"],["/tags/信息修改/index.html","f6a3f593e6c75f04c90fe343b18da6c7"],["/tags/写作/index.html","0f0231224f81caddd6723c4a78b8d228"],["/tags/分享/index.html","aaba0e187b0da84ec146660788d2bd8d"],["/tags/吾爱破解/index.html","3ed0f5da42c2f2d47da74c75497df4a9"],["/tags/安卓应用/index.html","773b028404641a1e2493d0a3741c35c3"],["/tags/安卓应用/page/2/index.html","6d64ec5c1cef8f427d7cc88db3e343bd"],["/tags/安卓软件/index.html","1cbb6cf557acf9ea8d487c618919525d"],["/tags/实用/index.html","9526a4b9430bbaf083ea88b265df9e4f"],["/tags/实用推荐/index.html","0c0626e570ce3fe59367e9bd99e027c7"],["/tags/实用推荐/page/2/index.html","bad3ce6060d59c0455e9c9777d56b488"],["/tags/实验/index.html","c5ce2d97dda5ac2a46bbbe4e80873f81"],["/tags/工具/index.html","d0d083cace3a9027083ee256c488d2c7"],["/tags/工具/page/2/index.html","97df08e937ce4c3a4346d08fcde43cc8"],["/tags/广告/index.html","492cde6256b84568eeb74be673c8e44b"],["/tags/建站/index.html","107f5fbdee75261987ace410b836b580"],["/tags/开源/index.html","74d86d4cfa86cb4e9891f4d8daa1d3c3"],["/tags/心理/index.html","52b639651fe57250ae38127fcf2216c3"],["/tags/思考/index.html","e6fa7d341c10fc790effd0dddfa28f5d"],["/tags/技术分享/index.html","325222220a0c6a4d1fd3d399bced06ac"],["/tags/指令/index.html","06daa04ac334b0d1af91e1ac69091826"],["/tags/探究所以/index.html","7f1f4c9d7cddf5d29f23b78e88aed8af"],["/tags/推荐/index.html","5089bc9547f806145482a2f0d7991979"],["/tags/文字语音/index.html","7faea1b10e46acfcac5852aa5c2e0931"],["/tags/班级/index.html","2c08f24235b2ab26d555029a85eb2336"],["/tags/电脑软件/index.html","2e433e10e19eb6e06cde43bcdfcf2326"],["/tags/电脑软件/page/2/index.html","d94b2ae0496b6a2218b476d5199b33ba"],["/tags/百度网盘/index.html","ea4305ed2139cc1ec6b136e31a781c34"],["/tags/科幻科普/index.html","113a80a5028cc7e4bbf64ad0f7e3d8a7"],["/tags/精选网站/index.html","0b2eb8c686454a613e971e73b67028ff"],["/tags/系统优化/index.html","76ea4e04b9162b7282f027d0f8175642"],["/tags/编程语言/index.html","0317846362a51883bf60839da940c4fa"],["/tags/网站建站/index.html","7814317685819724a5f24b9f08a3fb5f"],["/tags/视频/index.html","7ffbf6a6e1559156b19b1e9f90e3b755"],["/tags/计算机/index.html","0704c64723bc37781f115386208a5c80"],["/tags/记录/index.html","d5d0b682fced7958100eb4798c619b69"],["/tags/部署/index.html","fcb09f89ba93ef223a7acde73dfebc86"],["/tags/音乐/index.html","24976e181a6e25868f4efb49ca4f4fd3"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
