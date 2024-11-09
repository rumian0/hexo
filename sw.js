/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","81b6ce1d9fca6276d7bcd4c6f369883b"],["/2024/01/22/Markdown/index.html","83cb9e1263cba2ab9752ac6f71bbf02b"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","ca25b17c809162669a89be585600080c"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","5162605655cd697455436cec8a670d2e"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","9dd680ddb81ead6641652e5f330c1e18"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","96fc7a1949f20a6713798feb15b33a44"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","abfa0bdb2450426803dc1046e3ead9e1"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","378136b393982597e85e9254dbe1770f"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","0133ba4a9e80b0c3d05a228e93c5cab8"],["/2024/04/10/C-saolei/index.html","5b23323003194cdf08d015f47e51c8fb"],["/2024/04/10/free-yuming/index.html","427a504db64a6e4cf190a15b6828eb40"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","ff09ad4ec8aee66e47fc58088a763be8"],["/2024/04/21/kw/index.html","4f91a3677b9b17492ce05f74bab7f2c4"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","08431c4d236844d467cd2f20b19c0ff6"],["/2024/05/12/music_download/index.html","9657cbd1db1bcc94757856bd34c93a1f"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","e833c3547db9673a38737c1aaae26c78"],["/2024/05/25/Vercel-Typecho/index.html","0497e4c4ef8ac6e1172b441a94ab3bfb"],["/2024/06/02/website-all/index.html","299f0db0138aba6054397da9825f698d"],["/2024/06/17/tools-box/index.html","472de9b16206d7e6525baef41b58e9a8"],["/2024/06/22/biibili-zhilian/index.html","b23c31104360d981e4fea6e2760f205a"],["/2024/06/23/sqyy/index.html","857c4eb264d5922ee5d1df3dcc295c07"],["/2024/06/24/win-chachong/index.html","e6394bdec235ff1894a7f3aa2a8b82a5"],["/2024/07/03/dyd/index.html","3d70d5939196ab36cc3beea2f1dfb17a"],["/2024/07/03/geospy/index.html","8539ffc17a15460b75b557e0c720f1f1"],["/2024/07/16/TuneFree/index.html","09fc12e8c06f82bba750c330fe6c9d2e"],["/2024/07/16/pdf-repalr/index.html","00df3cb3649c8c2e9aeb409818e08a7c"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","d5aaba7d4b4a75eda20050ecd7df0349"],["/2024/07/23/an-yuyin/index.html","c911a5e12d1a073b7cd7cd06d547c3ee"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","4f197a8f1abcf429c8022911b01c0661"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","41b008016389d4758b138794dfe74b55"],["/2024/07/24/win11-win10/index.html","fe2fea98dde6536b5ea1e03d5cef6d4c"],["/2024/08/03/wu-muose/index.html","20f3e58995281c22632240ca72c71434"],["/2024/08/04/ab/index.html","71df2c15ab0a8a0a7b866a78db0412e1"],["/2024/08/25/mp3tag/index.html","a0f579b6841625528631158f112a4e16"],["/2024/08/31/cf-words/index.html","7edbb756f30f6b914f625a4d50c696e3"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","9d6a5a1e41ffa9c66fc624dc877dcf58"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","53ae5ebb59f4cf9e1710f859c533fbba"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","8963fad49c947b6b06e5a7c9a08d2771"],["/2024/09/30/123-liuliang/index.html","ab945cccb32236c833fbfd39d022cb6c"],["/2024/10/01/app-allmusic/index.html","bb3f11c9a9f4a1bc8c03826598dca253"],["/2024/10/01/win-musicfree/index.html","5dd3ab0389d1feb5449de2600759996b"],["/2024/10/02/fire-xinli/index.html","6378a83cf67483b55c47fe68418b3194"],["/2024/10/02/win-wyydaili/index.html","34f1a942147d980b4cd30c4bc66ba760"],["/2024/10/14/qq-histort/index.html","9b0f1d72623d9a278af3d0d87f4ff2ea"],["/2024/10/26/suijip/index.html","343c7c6e706d50c06173dbd829b68d92"],["/2024/10/27/ai-tlp/index.html","5af6a6fd532b8036ae3b2a69e20fd4ec"],["/2024/10/27/cloudflare-cfff/index.html","942a54d9fb52708e9923886e7ce549c5"],["/2024/10/27/tvbox/index.html","e953112a01ab60608a02df0f7ecd38d2"],["/404.html","cbdcb157007ee932b2345364ce77d70a"],["/about/index.html","2e62fcdc5dbbe09f518ec548654e79ac"],["/archives/2024/01/index.html","8b5cea0676038677232c19d2cd4e744e"],["/archives/2024/02/index.html","72a04892fcb473c730e5c06047127995"],["/archives/2024/03/index.html","d5cae2cce13c19371d84da997cf38dbf"],["/archives/2024/04/index.html","ff7f588940a0f4bf6dea29ef77c85061"],["/archives/2024/05/index.html","f4543a1fd0d880a5fd95b37fc903091b"],["/archives/2024/06/index.html","d99c26d6dda9da78d033e270e122aac5"],["/archives/2024/07/index.html","e663275bbad3ed4395ef6eccadc5a8a6"],["/archives/2024/08/index.html","c727a21b17ea60c3a5cf3996ec81f66f"],["/archives/2024/09/index.html","1ded266004024f947d3404443172e4ef"],["/archives/2024/10/index.html","e6f6858676e85b6f8da650c1e5c3a5f8"],["/archives/2024/index.html","6c2de06d391dd5cfff2a04c86ffe8a3d"],["/archives/2024/page/2/index.html","da9907288dd1b260080106d71e285ed2"],["/archives/2024/page/3/index.html","d35b780a78988bc8fe76b27c3e27099d"],["/archives/2024/page/4/index.html","a5623c0ac3bacbcace082b168790e0b1"],["/archives/2024/page/5/index.html","69fdf31792720a2cac4ca44f28133d87"],["/archives/index.html","34ff749bde283cd50d58fa40f8b68158"],["/archives/page/2/index.html","1b18033272d744c3bbaa0bdde57f554e"],["/archives/page/3/index.html","c9d87783c657c2c4686ece5ba14c51be"],["/archives/page/4/index.html","f2104763cd7c2f0863c3f054364ab08e"],["/archives/page/5/index.html","240397ea8c0087a65231c7104ddb5ac6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","05e8eccd5d83adc2a68675edb198ce52"],["/categories/index.html","8b37eb6e96f1d6be26930a9ff69bf356"],["/categories/学习资料/index.html","90ec516b85f3102b1832b725a539e1d3"],["/categories/安卓应用/index.html","03a2dfd4eadbe70f8f4213413008dc18"],["/categories/实用技巧/index.html","4de1b9f60912f2e7e7566294246c74fe"],["/categories/实用推荐/index.html","fb0116ecbed3d9d80cc2acc0fdd85733"],["/categories/实用软件/index.html","bf99317f6133e5bf2562aef3d74da673"],["/categories/实际生活/index.html","5e8548beef053bbfb65d47020ffffd8c"],["/categories/影视资源/index.html","4f34ea811de3adf354cf4ae510bd6c7c"],["/categories/心情随笔/index.html","7a5a7868ac80a638656d8a7f87b98010"],["/categories/心理实验/index.html","56a6124d5325c21346669f06dd99ae40"],["/categories/技术分享/index.html","fbad82f630db51de92a701295725518e"],["/categories/探究所以/index.html","7b1fa3b6b4b720d7b9cbc2896042af06"],["/categories/硬核科技/index.html","736b97a6673dc704e2288ddc090f2a02"],["/categories/硬核科技/page/2/index.html","7a84f1a1322eb7fa1b5a12872e936724"],["/categories/编程语言/index.html","1c44bc31dcd4a8552836652ba4def552"],["/categories/网站建站/index.html","3595726f2236d3a7597d36c29728e7c7"],["/cookies/index.html","d8c1b87ca60e3d17e466a5266c4611b2"],["/copyright/index.html","9bcb19c18dd6ab53a3dfc560a7d97d96"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","f487d9db305b62d91ca279e597b1bc97"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","e6c37d7f76f5de12d195d0f8841915c3"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","b26a5c08c2718eac2d36f4fb73d6a2a7"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","7171b28ae78545065335461d019cd1a3"],["/message/index.html","9a45f5afc86046abf18ef7f118816bed"],["/moments/index.html","4f69649fdca237ea5e85cf02a1c87a2a"],["/music/index.html","32a6b6a8d38ab276a44017e9c7742ffd"],["/page/2/index.html","a4cb6106f08f3eb358ebdbe5b9a75c78"],["/page/3/index.html","3a453fbd086d85e25d5032cee1a31f0b"],["/page/4/index.html","4ea8e27fe436fd8d42e72fdde195bb12"],["/page/5/index.html","059f12ed1e4a06bd5e454a681ed3caa8"],["/privacy/index.html","398e39af969050dc4ffb4f5df6c61cb0"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","d07d2b590080cdf95d492491bd0f1964"],["/sw-register.js","431bcce664be6d219beb0ebede1e78a0"],["/tags/123网盘/index.html","9e0e5c0941d702b97cbe57b0bcd68c20"],["/tags/C/index.html","202f6b662d3004d309dcd053133f8ace"],["/tags/ChatGPT/index.html","8bf896572cc5d0719689466c928cfbf4"],["/tags/Cloudflare/index.html","e7d164659fa433eadf551733ab9d1cc2"],["/tags/Markdown/index.html","2860f840547679a62d819226555f1ea2"],["/tags/Openai/index.html","2a27de01e5fa5145e41a8099238053cd"],["/tags/QQ空间/index.html","8dc6cb997ff935a942e2bde180063b12"],["/tags/VPN/index.html","83a939dda299fc73ef6ccb4b2b53f785"],["/tags/app/index.html","a304993045a3e4a05195ff71b60d9670"],["/tags/hexo/index.html","80cf644eedc7d524480e5482f0b780df"],["/tags/index.html","2afba55f0e4411c120afcead593660a6"],["/tags/works/index.html","58af1ec10562fc58ff2c3686ea1b1712"],["/tags/信息修改/index.html","23f46a54a7b9f694a7b415beba98849f"],["/tags/写作/index.html","9a99c9df1647bddc5a85eaa245b31e84"],["/tags/分享/index.html","41154591adaff89ced108729dda7c779"],["/tags/吾爱破解/index.html","5a89d2d4b776deb88eceb052956578fd"],["/tags/塔罗牌/index.html","97dd16a41b2410ca2dde29ecf983f60c"],["/tags/壁纸/index.html","26f6f4d784f66f3fc376426eaa1cf83a"],["/tags/安卓应用/index.html","1c1bfe1f11480e15dbbfcb01d49ead7e"],["/tags/安卓应用/page/2/index.html","c9cb969aa1c3f3307885208d539c5b3c"],["/tags/安卓软件/index.html","e9bd212449c38889a583b7c17926f7ec"],["/tags/实用/index.html","9d6d95665cee0caeda825600db5a6faa"],["/tags/实用推荐/index.html","457021e2dd8c8eae893ebe467caa6e33"],["/tags/实用推荐/page/2/index.html","6bac029705261de680a10bb915c6cc47"],["/tags/实验/index.html","882ef4a71856b12bda0059c4bd40af9f"],["/tags/工具/index.html","d1ba3b5fc41e9df96a464bf65204be6e"],["/tags/工具/page/2/index.html","6b79a5f4a129a456bf057d8ff3866d63"],["/tags/广告/index.html","4cd70ca83d949ef7e4b0a9628bc4c15f"],["/tags/建站/index.html","bbf47f5600a653282f5e71e33a9a66ea"],["/tags/开源/index.html","8ea2c8de48518ded753c7c69178b9fd0"],["/tags/影视/index.html","6a834189c8b810157ccd50ee341c7ebf"],["/tags/心理/index.html","ed5d5e761c04799a2bb5a56ccc05cffb"],["/tags/思考/index.html","df7268e268bbc7a2b591147e8025919d"],["/tags/技术分享/index.html","3ac3214f93142814d752b5dd5f63db84"],["/tags/指令/index.html","8b304f47c75329ac9db6375dc1ec1915"],["/tags/探究所以/index.html","030a5a405419eed0a0c82e3e4723574c"],["/tags/推荐/index.html","6643b5feb2dc6756ac0df4df4748bf3d"],["/tags/文字语音/index.html","97c53930440ddcb883ad108a51bfe2a4"],["/tags/班级/index.html","e446d4226691e1d538205ddeed2e96c5"],["/tags/电脑软件/index.html","4d1296fba6fb9033f6b171e335d1ed8c"],["/tags/电脑软件/page/2/index.html","c34cd4116bd24ddad7ddedb01a2b2b13"],["/tags/百度网盘/index.html","c23ae94acdf733fc9272cd858c25e16d"],["/tags/科幻科普/index.html","b6b1bea0e22d27a322d3140a2d29c877"],["/tags/精选网站/index.html","51740da994c0d836923d93acd02054c0"],["/tags/系统优化/index.html","cc546f8142efdfe8bf996b3103a4e46c"],["/tags/编程语言/index.html","1aee557986eb95af4e202740fd8064d2"],["/tags/网站建站/index.html","a9e3db9713441d6d057fc94d37fe3d34"],["/tags/网页精选/index.html","22a3f00ea911138f4ec23c6e8014afed"],["/tags/节点/index.html","45c25dc38c6cd29cb3f8834e9cf7fcd5"],["/tags/视频/index.html","0add93c53739e2b03c3ae29e64147ddd"],["/tags/计算机/index.html","d00d9c88e1456cf55db43758519be3c9"],["/tags/记录/index.html","fa2fdd5964c57bab356135e010711ec1"],["/tags/部署/index.html","4f8fa32630bbf69264d1099d3255fad4"],["/tags/随机图/index.html","9d556ea3f70fef9a4bf21459bda580b6"],["/tags/音乐/index.html","e386a9f88d375b0629c5714639a1a6e4"]];
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
