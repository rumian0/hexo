/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","fed00a3ad7828ccd0f81b4b18d858503"],["/2024/01/22/Markdown/index.html","3202b8404053646238f695620eb71f1f"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","29f95bbded96a15ddfcfc4db63f2ceba"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","afcb60ba176058dade6695a241cce8f5"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","7c3b8a362b31377fc291bfd415ed3fc8"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","5a2f8ed46b1588f46118586df73fb58f"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","1efbc944e7b64931a6dc94aac27fcb4f"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","9b78502e202d9947f0377242092b9c6f"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","7adc8fff108e675708a73ade22201f13"],["/2024/04/10/C-saolei/index.html","fe9ccf76af46d214c2f6c9d610db99a7"],["/2024/04/10/free-yuming/index.html","35e34467f8294094f8f415fece84b113"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","3aa29f18a3435b4fba40225945969d65"],["/2024/04/21/kw/index.html","06700cdc0c6d906281118b1476226d84"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c22e0a1153e967542cc873948d3bb810"],["/2024/05/12/music_download/index.html","70f1a04b01a8217870d14cbdd2637d8a"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","8159654b11e7c004ddb953c74871f6fe"],["/2024/05/25/Vercel-Typecho/index.html","0776c638e52b7460eea2b9df9a111347"],["/2024/06/02/website-all/index.html","07ceb16942927b887777f55fed43d096"],["/2024/06/17/tools-box/index.html","c04eff3e84d9be518ff16ed65656126b"],["/2024/06/22/biibili-zhilian/index.html","defb67c76dc02360ea85215a1282f241"],["/2024/06/23/sqyy/index.html","9cb23e11964b5c2dc8bc8b005413e984"],["/2024/06/24/win-chachong/index.html","5b327789b99180cd604b13dd27305b7e"],["/2024/07/03/dyd/index.html","b3de56c07286585ba717207580b1c406"],["/2024/07/03/geospy/index.html","d41232d2a07b21a4d4506e6c89bbcee5"],["/2024/07/16/TuneFree/index.html","08384b576a72f44c496fb3a65704fc15"],["/2024/07/16/pdf-repalr/index.html","bd147b8f780bba15a8863f915f76e9b1"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","d2fa169fa6fd2e0f1725c456d616dfae"],["/2024/07/23/an-yuyin/index.html","c1b929fe8b83e85118f49c30480d1a31"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","1b90de220e854c2fe88207c7a6fdb355"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","0038aee856237d8ce2dc5f48ed31fac9"],["/2024/07/24/win11-win10/index.html","9a2034e859bd17bd31e18ef7e9bf5149"],["/2024/08/03/wu-muose/index.html","6b171a320ae71274bd01463d311e75c0"],["/2024/08/04/ab/index.html","e702852fb22ecbcaab6563f5598165da"],["/2024/08/25/mp3tag/index.html","06140b9f52fbda0c2399a9811b49a0f9"],["/2024/08/31/cf-words/index.html","f7d262efbded5a172e9fbd8ec3e3534f"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","1369c94ecd3b7fb49c9d2d4358a0abe5"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","7dd48e6eb577eecf34494f72c712afe4"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","014753ab6a53b69667b04ac983cbeb03"],["/2024/09/30/123-liuliang/index.html","4fcdef8785640014e74e062555162b0b"],["/2024/10/01/app-allmusic/index.html","1abf0c013c6792b8c6d0e6555b403eba"],["/2024/10/01/win-musicfree/index.html","e74755a5df2dfe0fea2bfec1f8e3edb8"],["/2024/10/02/fire-xinli/index.html","699cbfd3618dcde60169a59991663497"],["/2024/10/02/win-wyydaili/index.html","35371eae02359d4f72a91d9c0cff9cdd"],["/2024/10/14/qq-histort/index.html","45befac4d81170c59ceba7f59f3914b4"],["/2024/10/26/suijip/index.html","5c4c1636cdc6c40d3f93e43658fe8bec"],["/2024/10/27/ai-tlp/index.html","deb319b4979cb65af975a6aac3fae156"],["/2024/10/27/cloudflare-cfff/index.html","a6d2559fc71d25ef5abef4a6f52df01a"],["/2024/10/27/tvbox/index.html","05c526d175ac1b409081d5e7b30100a7"],["/2024/11/20/wyy--2/index.html","1fc340174f2fe10aa6ba9ba464ac8476"],["/2024/11/23/fjyangcheng/index.html","35d08de92f4088e3a6e998777c517526"],["/2024/11/23/office-ltsc/index.html","a7e523105b4eeb11f79ef4a715afeadb"],["/2024/12/01/aitiaosuo/index.html","80031b884aa23bf07cb765cf4c74f700"],["/2024/12/01/yjx-study/index.html","def53c1397659d14ec2f133ab5db2ab6"],["/2024/12/21/riji12-09/index.html","d15ceb449f5aa1a994fac8d05ee07f2c"],["/2024/12/28/obsessive-thinking/index.html","bf67618a39fc20458666dce215dd78d6"],["/404.html","6ee0a9058e6e998cf87cf921544c906a"],["/about/index.html","10f570aebfdde4361a6a08179e48b37b"],["/archives/2024/01/index.html","f2c03897bb3fa0dbc61f9c2320dd6f59"],["/archives/2024/02/index.html","99268dc9129a0e8cad3a7bcc993241b1"],["/archives/2024/03/index.html","ad8b8a367b2e504db8379d610c9eb370"],["/archives/2024/04/index.html","ae724d3cf7e95b07f8cf501bd7b64887"],["/archives/2024/05/index.html","87ea2fb787b420c8cc2e33c6364db45d"],["/archives/2024/06/index.html","92e3e6125ad7042e992e4f4ce5da9332"],["/archives/2024/07/index.html","763fb2870c1ef12ed12b100543e63f2c"],["/archives/2024/08/index.html","1f25e2d0c1f9be264cf7a01a437dc84a"],["/archives/2024/09/index.html","937a8e3b3ee041f0b77051cb8ef25736"],["/archives/2024/10/index.html","d35e80ffeed5b1f50c798567ecd87754"],["/archives/2024/11/index.html","4027d06206ae810767e58457563acf72"],["/archives/2024/12/index.html","af61accf9d52fd26d1714d76c0a03a3c"],["/archives/2024/index.html","58efc2f99440f4b7b7cfdac8324bf6af"],["/archives/2024/page/2/index.html","24cdc06f5bf1aeae2c8af8c976ed00f5"],["/archives/2024/page/3/index.html","96b76bdc967a25287ecd8d7da33c71ce"],["/archives/2024/page/4/index.html","0b41fdbd6b31d0d49f696d365c4989c8"],["/archives/2024/page/5/index.html","0921fa0a67d202d45448266374eb74a2"],["/archives/2024/page/6/index.html","b66882a26318083b68dbdd7afdd3bde8"],["/archives/index.html","4288b621800666e978fbae3ef7677eb3"],["/archives/page/2/index.html","1386440ad216b08c8031ef5349c3d842"],["/archives/page/3/index.html","b321fef5d8fba8e3bfc731c3cf360331"],["/archives/page/4/index.html","7b80120dadd9ce29e4359c7b22a25d86"],["/archives/page/5/index.html","6d3b45c3a9ae4a2cfa73da0e5be07d1b"],["/archives/page/6/index.html","af64e69a6f47489972e6214863a0659a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a712a576fd8414580d6139f112b4ac1c"],["/categories/index.html","35eb18b3a5e864d6a9bb7e8a9258e1f7"],["/categories/学习资料/index.html","3e79905ec77f8bb00ec24a12d85b5db4"],["/categories/安卓应用/index.html","96f04513f3c30c85e9bbf6136f25f3c1"],["/categories/实用技巧/index.html","46c0d498ce7e7bf628c1ec82a0f6a181"],["/categories/实用推荐/index.html","b80ec20bf52af700cae29c71a6430aac"],["/categories/实用软件/index.html","61cb7bb3898aeeaadd73af81bf24654d"],["/categories/实际生活/index.html","5a329c36ddf8f0aa0a4f0a059af1883d"],["/categories/影视资源/index.html","bcc19c591583a15724fd0c23faf5dda7"],["/categories/心情随笔/index.html","99021b990074a26916eb228627b85130"],["/categories/心理实验/index.html","92a7411772c066f39e85ed04ad98cb23"],["/categories/技术分享/index.html","754ad8142858bc3167c578cbc65cc164"],["/categories/技术教学/index.html","80d69817a0dc0f7d732b1261ac22a138"],["/categories/探究所以/index.html","faeab4a70fcd3b8dacfc2a53a4128767"],["/categories/生活方面/index.html","a85401cdf3af42ef3b7e0d1c45753ef1"],["/categories/硬核科技/index.html","e16c4e000670b8f27178490a70ca5301"],["/categories/硬核科技/page/2/index.html","c6e2903b2d946b164bc557073f6adcda"],["/categories/编程语言/index.html","b5d1a10565dec67393784921ae4c8eb4"],["/categories/网站建站/index.html","59a8406b148c678af1283868968daa16"],["/cookies/index.html","e8f0bb77fd53fa1aa3fff7fbae66f2a1"],["/copyright/index.html","d8c7a8c88d88b59959bf194b1990be43"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","36d71fe0911fb37b93e26b377a97db0c"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","4878e57237a5b0e6f3dc76cff1a39a7e"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","5dc80311305f595a8902f32a8c9a8324"],["/message/index.html","6897df3d936952aa0967bcdeacd6dd96"],["/moments/index.html","8fffd154af0dcf2753b9732f595b89e4"],["/music/index.html","e7c2fc3b27e1ee48ea5689fe68fe24c7"],["/page/2/index.html","b72f54a2f849697fe6f461fb40fa8a45"],["/page/3/index.html","1a211bdb4c15e12fc6001349a89c9a8a"],["/page/4/index.html","f30a99e9641b693500b169fc0916787e"],["/page/5/index.html","48573093b5fe3c2f90a8d70390131239"],["/page/6/index.html","43a029248cef77ba226fcd3570c2024e"],["/privacy/index.html","a94a2a57ce46b5664df57cba94827905"],["/recentcomments/index.html","c49b3160485a95b5c62948ec0cb412f2"],["/service-worker.js","61eb28f7fb8907209092491b0b58bc9a"],["/sw-register.js","bc8155188949d81cf03e5092ed6dff7a"],["/tags/123网盘/index.html","5af1c4fe9d4c4ea7717860399e1e6bfd"],["/tags/Ai/index.html","8592288c4ebe10fe7ebe77107e9cda27"],["/tags/C/index.html","16df06c716d0a793ba6492e8b88851de"],["/tags/ChatGPT/index.html","4a7f4243e387cd65d4214a1333b3595b"],["/tags/Cloudflare/index.html","1c5eaea40d87f3f8626617645ba11448"],["/tags/Markdown/index.html","42ea8569b00041e2b92b88f10baac3f4"],["/tags/Openai/index.html","f55df0812d198b42511e94293bb41d37"],["/tags/QQ空间/index.html","14c2ec774069590a7a9e6f86c3cb6cce"],["/tags/VPN/index.html","7f5efc2afce91d92b742f39184895e3c"],["/tags/app/index.html","7b4e03f4c2a3627236ed8917064dad78"],["/tags/hexo/index.html","36731158ba2c109c1d3f27e00ff1e452"],["/tags/index.html","9ada6d6577b76fdaf42025a029af7673"],["/tags/works/index.html","d27976f10772094620180a94d4922b70"],["/tags/信息修改/index.html","06fb41b6e883c1e3c0e5534220b9db88"],["/tags/写作/index.html","593dd572f77981bc56c25f95a537db3b"],["/tags/分享/index.html","65a706a838d1178aae695f56c5e43919"],["/tags/吾爱破解/index.html","8848244cbb7d0513195aa0d9d81694f0"],["/tags/塔罗牌/index.html","2e3157d5359ba455d0079fc7f6448e77"],["/tags/壁纸/index.html","ae03ac54e6e8ae0ea3d52f03c7f5913b"],["/tags/安卓应用/index.html","15bb07028e0b2285899f12046009088d"],["/tags/安卓应用/page/2/index.html","2932dbd2618677706aa0fec3ae7c8b66"],["/tags/安卓软件/index.html","cb81e55ca56568e7e6d644e8579edbd8"],["/tags/实用/index.html","72fa7dcceef2ea7329f053bcd13a367d"],["/tags/实用推荐/index.html","2a0c5ce2d7e0f6e0096a54c9cd251739"],["/tags/实用推荐/page/2/index.html","b102d681ac4e0cff66854e807a80bc7f"],["/tags/实验/index.html","991e12a515b40303e8789e7753c8f4d6"],["/tags/工具/index.html","b8e494105cc427cd6757e7ecabf84f00"],["/tags/工具/page/2/index.html","af23236dcff07d06a63b2d7ee30544a6"],["/tags/广告/index.html","9796fff90b35e984efbd12b2597354e1"],["/tags/建站/index.html","0da18117d2546175638a1f9ac6c8ff3a"],["/tags/开源/index.html","5c9456cf9cee87042ccd64199acc371d"],["/tags/影视/index.html","0f99b3aeef93a2fac81cd5770c5853ad"],["/tags/心理/index.html","757d2bdd1daf68bbca1d4e9d9a780534"],["/tags/思考/index.html","5e85db1644057e1e1970daa4e3edc538"],["/tags/技术分享/index.html","2f6dc465f82e196f961831772f949311"],["/tags/指令/index.html","d76fd0a6b23b2291b8b7f066215f4962"],["/tags/探究所以/index.html","c270c497dc666631668227799593e1e0"],["/tags/推荐/index.html","2b7ff983da7ab2aa6d6697e6c63c8ce7"],["/tags/教程/index.html","d30cfe8b7a1a222221565485c94f384e"],["/tags/文字语音/index.html","81a81bbba924a6d8e6a72122e08e8926"],["/tags/激活/index.html","9958c5896de92b5513e810263789e0d5"],["/tags/班级/index.html","3e4915bfa5b301bdf427b38f6aaecc77"],["/tags/生活/index.html","bee25716031538b33a20465eb953c88c"],["/tags/电脑软件/index.html","d6c740ee8971bcd21c58e9576517ebf3"],["/tags/电脑软件/page/2/index.html","c60c4e5ec50eced7164438279895619b"],["/tags/百度网盘/index.html","ca8e64a43d14170ff05f31ff16b52375"],["/tags/科幻科普/index.html","6f1c9d0577f349e4e966b425b240b70a"],["/tags/精选网站/index.html","77ddc3bd29de51f7fdf796ee5433cce8"],["/tags/系统优化/index.html","6c0fa0f7b7ecbc08714e0063bc983192"],["/tags/编程语言/index.html","e4d242c34876e2b44ed5a72d4079ffe8"],["/tags/网站建站/index.html","bf8479584009d90a666f83128510b5f5"],["/tags/网页精选/index.html","11c2cc636acfaa6424df555b7a788d48"],["/tags/脚本/index.html","6c50dfd3d9c7f92976f8ab8edf379f6a"],["/tags/节点/index.html","dc2dda8ec572420e6878a079bc76967e"],["/tags/视频/index.html","077b255cc273ab0f8ed0b7c9f41f2923"],["/tags/计算机/index.html","f563da98e836697960f873816751dc67"],["/tags/记录/index.html","2b742e4cff396c532a3966275b96fd00"],["/tags/调查/index.html","89cc63724ffb84eef987cae7b33c934e"],["/tags/部署/index.html","3258dd860639610d05badde23368b9ab"],["/tags/锻炼/index.html","ab4dbdb529db665b35bb3b4cbc2f83e3"],["/tags/随机图/index.html","02d26fc3c577c85efb041e2322a61100"],["/tags/音乐/index.html","22c67491d52be0a653c40862ac74d65f"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
