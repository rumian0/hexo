/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","8b5d37dc59293ad024d45b3775b77331"],["/2024/01/22/Markdown/index.html","d52c6e6bfc729b3394214f5150e84d70"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","308a98f15d189dcc698f906f927e29f4"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","3b7c482fb5dae8cc75f8de9b86f077e5"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","6cabaac9f47977a86b95c721e30a28a6"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","425727d414e88248ee1f6338b8842930"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","22b03ca6885cf2714b891075e8adb97e"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","91bd930779f1bfeba9ab419c3ac9e66e"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","25d89eb8fa3782e459947114a34abd42"],["/2024/04/10/C-saolei/index.html","8a4be4acab6fc74778ea10053c18e07b"],["/2024/04/10/free-yuming/index.html","1a3c18702a9ba20f82239c04c681c299"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","6770a44cbac21d4b31479336cde0d554"],["/2024/04/21/kw/index.html","7462c52d5b01c4ad58c94b699d276676"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","4509ab01e6c6d04f37e2a882398b98a1"],["/2024/05/12/music_download/index.html","1fb44616a04bee7c03d4343d3c035c1b"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","a7b69e0c74844a77dc4388b4cf4d9d65"],["/2024/05/25/Vercel-Typecho/index.html","fa1f99e7c03ec14112aef31bd89f52e4"],["/2024/06/02/website-all/index.html","d8a462f6110b9fdcd8199662bb099ac1"],["/2024/06/17/tools-box/index.html","e6565d365170d67594f71d495951e25c"],["/2024/06/22/biibili-zhilian/index.html","ab46e3705f8f7f7a1629b8358cd0b460"],["/2024/06/23/sqyy/index.html","0e0c5432c47d7d70afe6d148e9a364d4"],["/2024/06/24/win-chachong/index.html","6457e37ae688ca3cb9f4a63bb7a411f4"],["/2024/07/03/dyd/index.html","8240f0fc46f2283aa9682eb747ad112d"],["/2024/07/03/geospy/index.html","3cf08379042e975174a7e1273aed9ff3"],["/2024/07/16/TuneFree/index.html","20dc8051adc4e8e336ddb6529e435ded"],["/2024/07/16/pdf-repalr/index.html","fb47d8fb81067bd153b6a2851b3a33fe"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","f2938b2c1f91742ebfa30fb43f901a0a"],["/2024/07/23/an-yuyin/index.html","e8496aa661c5e022f019a2174bb6a72d"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","b22c5f3c73c0091ba8fa28fe7815631f"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","52a599e2659ff76138331ed71c56c5de"],["/2024/07/24/win11-win10/index.html","542337f1ba7753644abef51fd1ff641a"],["/2024/08/03/wu-muose/index.html","f77b3c3f925add32626f5bc2f8ef91b7"],["/2024/08/04/ab/index.html","9514be52d18ddaa70c2b9f3808bf1ba6"],["/2024/08/25/mp3tag/index.html","1ff99e57f3bfc14861bcfb8ef8abc650"],["/2024/08/31/cf-words/index.html","32ce1fcd72c847f74e3da6d42ddda2b0"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","0a290e548b5f8432d4174be2a0f9190a"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","354ffa7083203af4f6a421c84cff5f80"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","72e0ab153a043bc6cf3452e0c099322e"],["/2024/09/30/123-liuliang/index.html","9e6a2a48ea891563877ceabe81e9db2f"],["/2024/10/01/app-allmusic/index.html","fd0211377e59e64190eb49383349cdba"],["/2024/10/01/win-musicfree/index.html","08173d13760572f224e573e7ec4f0bbf"],["/2024/10/02/fire-xinli/index.html","589bac399ce57f238e96776bfbbceff9"],["/2024/10/02/win-wyydaili/index.html","9e087d35a858e37a8816867205317566"],["/2024/10/14/qq-histort/index.html","02737dce91cfcecf0d2bfa4e62f2959b"],["/2024/10/26/suijip/index.html","b14c3f53d1637db9f01e2f32f01071a3"],["/2024/10/27/ai-tlp/index.html","dd511687c08de4ccc13d8514e92326c1"],["/2024/10/27/cloudflare-cfff/index.html","713c36f42bf4219c4076e0ac406fbb7e"],["/2024/10/27/tvbox/index.html","888d29b7071e6b0f2bfeb4d8797b83e5"],["/2024/11/20/wyy--2/index.html","e4dc7f90b9e37806115bd4af1f2fef11"],["/2024/11/23/fjyangcheng/index.html","7430704e19d36896ea9a346f215902d5"],["/2024/11/23/office-ltsc/index.html","6afe902a1416ae18f84ad1733c80dc54"],["/2024/12/01/aitiaosuo/index.html","05c15990672105c628a2b8dd2ec2ac03"],["/2024/12/01/yjx-study/index.html","02f2dc1810a1298dd6d41a3321411eec"],["/2024/12/21/riji12-09/index.html","0052dd9655372063e62d2bd421f55839"],["/2024/12/28/obsessive-thinking/index.html","c587810d05f8b371ef0f5ed2d8c83d93"],["/2024/12/29/yjxxx-essay/index.html","9ec62827ae779e0e48af0d0c8101f513"],["/404.html","dd1b60486f3e70f18a62135208721642"],["/about/index.html","2a3fafdc9a30d63cf7f7192cea139035"],["/archives/2024/01/index.html","97bfd8fa401db5b6d42482520f94defa"],["/archives/2024/02/index.html","17ecb86ba42c7d9c0cea5f2dc1345821"],["/archives/2024/03/index.html","f94a25b3818c6ad4a85bb8d0a3cd83bc"],["/archives/2024/04/index.html","6b3f62f293fe011dfb108b642896a2e7"],["/archives/2024/05/index.html","b62110727a5acbfd9ee7430567e69b98"],["/archives/2024/06/index.html","4080338eca5ba8e05ef92d5d8b0e86fc"],["/archives/2024/07/index.html","3433473cc2838b3d8ddfb06c9685b70e"],["/archives/2024/08/index.html","0b99e6b118ebe36bc4beb65b98646206"],["/archives/2024/09/index.html","03ba31cd69dd64ffd11483409e26ebb0"],["/archives/2024/10/index.html","5a37a9df8c5defd6f1eeef1a09987b53"],["/archives/2024/11/index.html","b8a6caa5d5e469b0c8ccaac733b16a3e"],["/archives/2024/12/index.html","9874eb880691ba4e31dea1132215f5f0"],["/archives/2024/index.html","044b1a3605aa9bcdf4a018c5e2a3cf47"],["/archives/2024/page/2/index.html","60f41aeeb3f6cd7f50e510e2e99e56dc"],["/archives/2024/page/3/index.html","8891f61c588809486c46936737352efc"],["/archives/2024/page/4/index.html","eba4dc65cf0c48c6e4cf7e43efb325a2"],["/archives/2024/page/5/index.html","2d60ffcab82a0775182644a1edc1ef99"],["/archives/2024/page/6/index.html","1f89085a02dab8f951a27cbdc43cfbd0"],["/archives/index.html","922cb6a8a7cf40775e2971acacc9022c"],["/archives/page/2/index.html","12ae000c6b90b05c17e335b574492422"],["/archives/page/3/index.html","260fde3c28acf21381894d552c361ec0"],["/archives/page/4/index.html","7343a7c6da218e7c91a2538a660179d9"],["/archives/page/5/index.html","b75355686558c1ac09dbc1c9972caa83"],["/archives/page/6/index.html","cd93327c1142f40b4e766a33bbdb0ee4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","a600746657640b68070e11e86d6c352f"],["/categories/index.html","26dca909dec2f79e4f53874abbe6555d"],["/categories/学习资料/index.html","e474e62d8506b0bedb8410ea4478a866"],["/categories/安卓应用/index.html","fc8d5764e0da3d7174939aa2cddeed45"],["/categories/实用技巧/index.html","0cfbd09422a4046ce2ec56e7f5f5c8a7"],["/categories/实用推荐/index.html","acb8bf52fb4c79e2037296000517fa29"],["/categories/实用软件/index.html","0502e675a407dd9ff299d71687439fb5"],["/categories/实际生活/index.html","2d4f6daed8002df0bf899c8b2b334f81"],["/categories/影视资源/index.html","2d5a997bf6b78ce8db6cb1bbf2363d92"],["/categories/心情随笔/index.html","da226707d858bc27607d8e5213112d46"],["/categories/心理实验/index.html","4bf2d542f9a8df647b1931e6deb991fa"],["/categories/技术分享/index.html","fe1ff0286a97bd1883818799526dfd02"],["/categories/技术教学/index.html","62c45071bde36171e2782ea1e33056cf"],["/categories/探究所以/index.html","c6362167e4c1177e6b8291155107fd66"],["/categories/生活方面/index.html","62da0773dc60fdcbe5422feea6e1df0c"],["/categories/硬核科技/index.html","366f26a3d46053fc7458bb6019cf0aff"],["/categories/硬核科技/page/2/index.html","445cc18ae1c11f47741d5f113bb711a5"],["/categories/编程语言/index.html","f658e327fdb63bd50ba68d063d2b9ff6"],["/categories/网站建站/index.html","c8a550fd99a4c74d4c78db9c393d7941"],["/cookies/index.html","7166bcc3aa15937ce34ee775e115dcbb"],["/copyright/index.html","986fd2b22658d56dcf881f305f07ab65"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4716d6cc9487c4194b2f11fafb7707e0"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","b5bc4ff703baf48751cfb0edbcc78e76"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","c494bd53eb8a67105cdad040b6dbe29e"],["/message/index.html","34fa540810ecd6bd80423131a9edc213"],["/moments/index.html","de9763d2db3be65014199c57d7f69f55"],["/music/index.html","5b602612a820ecaab29250e1f9ffc58c"],["/page/2/index.html","7f396ae9a85662bf03defc0b379767cc"],["/page/3/index.html","11bf6062d45928d5fc9b15fe6e9b8f87"],["/page/4/index.html","61ad75aac8d7378e36f37af677edb2ed"],["/page/5/index.html","18a2155af54dcf13387e72abe920f00c"],["/page/6/index.html","3ef8913d6eef357a41347d0176f483bc"],["/privacy/index.html","d223688429f93877bb420bc67afce42a"],["/recentcomments/index.html","99aecaf80698c90708320dc2bfbf41d9"],["/service-worker.js","7c75bb99b41c03bea680e48b06f4b933"],["/sw-register.js","e3db610df67838cf6598104d6afd640b"],["/tags/123网盘/index.html","ffaa911762f6024db2abc562ad935e14"],["/tags/Ai/index.html","1cbc93e3fef8b60207a1f7c723c4b373"],["/tags/C/index.html","ed06832e9adaaab36a3311e0f6bfd657"],["/tags/ChatGPT/index.html","5d06133731567484de8c5e10b8edc721"],["/tags/Cloudflare/index.html","c7fbce9314c86c85d3ef53e04106746f"],["/tags/Markdown/index.html","98197af7c43ff3e9a37c756a2179f39d"],["/tags/Openai/index.html","226be886653cffecd9fc56f5e780c1a4"],["/tags/QQ空间/index.html","4f772e6d4cb66b67cf27f994a2c6cc2e"],["/tags/VPN/index.html","a88ea3648c79acac2bac292fb8b013de"],["/tags/app/index.html","32e4f0360f1292289c6c16d6c65039b8"],["/tags/hexo/index.html","a07a89786376e7c3ec9b68199d583695"],["/tags/index.html","81eafa4a8841b902bd3803613f647355"],["/tags/works/index.html","70cf9cd7a0b6e4c911787d94247a95a4"],["/tags/信息修改/index.html","1f8ec2ac32f444026465d9016d59be87"],["/tags/写作/index.html","63a3dae9a9529355877e31a38f561464"],["/tags/分享/index.html","aa8ab20b069177cad4dea7a8f37fe158"],["/tags/吾爱破解/index.html","982ac3334f6e7dad1af29dc73442b194"],["/tags/塔罗牌/index.html","46faa74217a7d11d47a3cc2b001215ee"],["/tags/壁纸/index.html","b88abbf2caa8b2c3f0eb333497fc4306"],["/tags/安卓应用/index.html","70cdd611510e195e1872701be4691cc7"],["/tags/安卓应用/page/2/index.html","b26099f36deea8afbb3965e69676955a"],["/tags/安卓软件/index.html","8dbaecc1f0aed67703c1e2e3e306218f"],["/tags/实用/index.html","33a44dea1553e3473b45bdba5a4dbab0"],["/tags/实用推荐/index.html","5a95b70b7024e28b3f8491afce75c203"],["/tags/实用推荐/page/2/index.html","f1b6f7fa3ddfd3121894daaae46a2685"],["/tags/实验/index.html","ade124cd26f063f384ca97460973eaa9"],["/tags/工具/index.html","84d3329b3eef79ea9de524c798e7bf36"],["/tags/工具/page/2/index.html","8024790779f7354aa2baaa7f9c8112b3"],["/tags/广告/index.html","b72b6efd393c7123a4f139509d26150e"],["/tags/建站/index.html","bec986b64da78928dfdeeda8335bd01f"],["/tags/开源/index.html","8c04f4892689bdc9b5eb7194b7cb2511"],["/tags/影视/index.html","4a26b7435b5e126fa2baa5e1c3f10153"],["/tags/心理/index.html","ad037938611618791978d500699c43c6"],["/tags/思考/index.html","692aa9a344bf65a3b6002fa827294a27"],["/tags/技术分享/index.html","93415543f9a88d5c7d4c38e321dd77e3"],["/tags/指令/index.html","b8e3b5ce38b7c3ee8b2a563d4d6e43f9"],["/tags/探究所以/index.html","952dc9bf90e332bd735aac1306ba0470"],["/tags/推荐/index.html","39a44636175574bb6cd5769048060acd"],["/tags/教程/index.html","844f65211cbf558f82fe948effef8fb7"],["/tags/文字语音/index.html","cf90daac9443136eb1558975e26c63d7"],["/tags/激活/index.html","c55da60e1ac12c71b826d566975f98e9"],["/tags/班级/index.html","bc4087a5d65cbe34888b20a02c82ebaa"],["/tags/生活/index.html","bb52d8704e8ddbc2d30da7d170a4e02f"],["/tags/电脑软件/index.html","11ca6fa6997afaf66533ba620455767a"],["/tags/电脑软件/page/2/index.html","05e49afe0748a0d36b0943ed80c4817f"],["/tags/百度网盘/index.html","b70055b557c0bdd2558e0ce339985263"],["/tags/科幻科普/index.html","538ab0160da3e346b42f1a4881b373b1"],["/tags/精选网站/index.html","b6cbeb60a0d7f0c367c04d6eeb17c0ea"],["/tags/系统优化/index.html","bff1cca659aab73f8cc13990d819b962"],["/tags/编程语言/index.html","c86830c6aa4ac8615b8d298d49bbc602"],["/tags/网站建站/index.html","f8001496fe281377935c4e8c4b2c77ab"],["/tags/网页精选/index.html","f7ae1e038918ba141bd8979da872badc"],["/tags/脚本/index.html","70290c7bc8c90ab22e0bb593d6c07220"],["/tags/节点/index.html","bcc569ac48b7100670899abd284084a5"],["/tags/视频/index.html","4271dac9f9e24e15d99f9934a39a2a5e"],["/tags/计算机/index.html","08a9637b03f1239f76f6a70530e8a6fc"],["/tags/记录/index.html","4f254e8ced2f18cfbb2842a9fd4766ff"],["/tags/调查/index.html","4f6ee93dfe2588da9ad7d6b241b7b2b7"],["/tags/部署/index.html","b18378dcf6d5546a5dd3124b5f3d2e71"],["/tags/锻炼/index.html","b45c8774d1a2bc597aa8dc3b81c9aca9"],["/tags/随机图/index.html","5ac9201abea85acafe77b8853d4dbab3"],["/tags/音乐/index.html","603da8fb42332f018258b731c635d621"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
