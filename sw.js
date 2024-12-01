/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","a9985722205b25be072311528238d0f1"],["/2024/01/22/Markdown/index.html","cc065199c400d3af415196f727187dfe"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","f00bbebbaca0d1e42bfb1cd3d8765dce"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","13227ffe21784fc6cf5b5115c4e60724"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","5aa9330a6ef795d50764a6cc9d608092"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","c7b679375672aef37bdf79c8e5256e5e"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","1801a70647c19fe7345781275672d4a7"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","83181e5e05582a081c3c0064c274c1e2"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","3fcd09be66163ee8c1b52ee1ca75af3c"],["/2024/04/10/C-saolei/index.html","b7b1729e7d2dd5a4b05a817636a1b415"],["/2024/04/10/free-yuming/index.html","5e3fdb531f9180d1dde79f248ebb5cdf"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","746b4b387d6f8df0832d636d1fd666c7"],["/2024/04/21/kw/index.html","ac391cb3914508364df367101d3c69f6"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","c1440cd9fb08851adcc20f73fb257698"],["/2024/05/12/music_download/index.html","47ba3ee03d312d2775702031583e4543"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","909d4d85842783a470830d0639450b42"],["/2024/05/25/Vercel-Typecho/index.html","c855e0cf21fa828d65b482b3f405f2e6"],["/2024/06/02/website-all/index.html","d4ebf49f508a4e155ccddfb38b91e539"],["/2024/06/17/tools-box/index.html","b26484b3bab905e5a7c1f9b6222b50e0"],["/2024/06/22/biibili-zhilian/index.html","c12cf8a5cd649edae5ca06ffb41e4b24"],["/2024/06/23/sqyy/index.html","6a68d72497a498ea20ce8420e6b0d839"],["/2024/06/24/win-chachong/index.html","9b4fca5105511dd1db4ceb29772a37fb"],["/2024/07/03/dyd/index.html","c81d623086e8077e5280eb945f98f2c8"],["/2024/07/03/geospy/index.html","b15733d05a4a6c38c162bb80ab60f7d6"],["/2024/07/16/TuneFree/index.html","275f954cf355045809d51fd7862ec88d"],["/2024/07/16/pdf-repalr/index.html","c9528d0bcc9c0a37814762c992834eaf"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","5c31936e86904babb30c5d73e8f7d500"],["/2024/07/23/an-yuyin/index.html","4d2f2a6ff23665fda84aab91e0811a08"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","35ebcaaa1dddaff986119311daedc17d"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","37932d3bd42f3a8f13f2accf0d392dae"],["/2024/07/24/win11-win10/index.html","467c78941bc18c9cd6ae2af840212f2d"],["/2024/08/03/wu-muose/index.html","1b394ceb845d97dd158ab717ee6683f6"],["/2024/08/04/ab/index.html","17a0db1d6c4a6fdd761d87d2c22ac0bc"],["/2024/08/25/mp3tag/index.html","e8e3cd5e8a04089d4821b2cdabfdbfc2"],["/2024/08/31/cf-words/index.html","20168dd10b7229f15906d2b6da30063f"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","8a4838caacbf9da1855806cc0bc3a2d5"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","d6f8b516c2b6b5bd28af3d3af0c6023a"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","6377b5dc7ec41540d2b885a7cfbfb367"],["/2024/09/30/123-liuliang/index.html","c088a4da10efe7f75d70c5a16f946ec6"],["/2024/10/01/app-allmusic/index.html","e35274fb57c6d9fa6414b31f0d260c7f"],["/2024/10/01/win-musicfree/index.html","07947dd888a4a1c0d326b2383118e1e0"],["/2024/10/02/fire-xinli/index.html","a99b1e98fa9b97d3c751b35c24693649"],["/2024/10/02/win-wyydaili/index.html","635e003151c64ee81d63e104eb51932a"],["/2024/10/14/qq-histort/index.html","8fb3881bf37ea718de58eb698349b2b9"],["/2024/10/26/suijip/index.html","e5ccf2cc32c7ebcea0c74eef750f749b"],["/2024/10/27/ai-tlp/index.html","6a9030053fe3472f4c70d0a9a44b13a0"],["/2024/10/27/cloudflare-cfff/index.html","74112d8532a77c97a864ac443c9c4d77"],["/2024/10/27/tvbox/index.html","990d112e43dabd6d44c8e5a280658ff9"],["/2024/11/20/wyy--2/index.html","3baf20829262719140244ad167caa892"],["/2024/11/23/fjyangcheng/index.html","89f0285ba8d7f8ff87394f57a0562931"],["/2024/11/23/office-ltsc/index.html","a91c0d7723739c28823c45b337b63c81"],["/2024/12/01/aitiaosuo/index.html","910d0aad8b29010cb581ebae6584243c"],["/2024/12/01/yjx-study/index.html","117d8e9cf064ccfd8c1e1879d004e6f7"],["/404.html","cd507308b65a3cf82b35c40b59a8c0f9"],["/about/index.html","bce5e2d5fce94928b9c7e5fe7c49dfca"],["/archives/2024/01/index.html","953d61628a8d402979294a1e404514fb"],["/archives/2024/02/index.html","23ade5a9d8ec72c94ab86a567387a2c5"],["/archives/2024/03/index.html","e291672d34c167730f7655b5711998af"],["/archives/2024/04/index.html","93c616665f85a2ee6bb95c12815f4fc7"],["/archives/2024/05/index.html","f39fbc9b7c8d7755ab49189d24f780bf"],["/archives/2024/06/index.html","a549311d2d87fdf2da8ebc2c4e10d32b"],["/archives/2024/07/index.html","349a8d3a942bdf40560d126620215099"],["/archives/2024/08/index.html","43ae36d8c9d97e420c75f098287e9150"],["/archives/2024/09/index.html","c285a361602eacf7726d4d5c6ac0b18f"],["/archives/2024/10/index.html","7d21419bc95bc4a5b7c601c76d66b07c"],["/archives/2024/11/index.html","555088372b79997a92436e22a8160cab"],["/archives/2024/12/index.html","d54c35e5ad50011c7575ae0ce50ef6c3"],["/archives/2024/index.html","fdf3ea968c670909d54e399ab199001d"],["/archives/2024/page/2/index.html","499064048bfbaa448bb20d9749f5f058"],["/archives/2024/page/3/index.html","ec3ff1e20919a22fe53722e7d8d176ed"],["/archives/2024/page/4/index.html","9531dd09443c1e25a854c32942905f7c"],["/archives/2024/page/5/index.html","ba7eab9aa81b7423e51c2037aa9b6622"],["/archives/2024/page/6/index.html","1a2116464b9928c162dd996aefe71f3f"],["/archives/index.html","a7505becc57134c50058c94e4d94adaa"],["/archives/page/2/index.html","920811d1028a0855f49499a427d4b14b"],["/archives/page/3/index.html","1870a7655c84407cfd94295ad4c11851"],["/archives/page/4/index.html","c6a6aca5e1fe6ff268835eae4b664d8a"],["/archives/page/5/index.html","9f65e0a63958235d2de1ee9f1d224128"],["/archives/page/6/index.html","8d4a3d395238a19955dfddc16ec33c15"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","519b56eb13fe45ecb405ca0e44ca12c9"],["/categories/index.html","c9aaa1a3e3cd7b9ffe4ec23bb7d61661"],["/categories/学习资料/index.html","c0c4ceff307bf6e696b00a6924ba05b5"],["/categories/安卓应用/index.html","5cd58c925561586969c862357d0c3c01"],["/categories/实用技巧/index.html","e32c5b56cd97aee4b8afafb79c1d23b6"],["/categories/实用推荐/index.html","e94b86ab5d7ecd087e2264a819f6a898"],["/categories/实用软件/index.html","f63f888e26409f7636d3239e93ba46c8"],["/categories/实际生活/index.html","3c734735cc744cbff202ef426e310dad"],["/categories/影视资源/index.html","2694e6aeb2cc0941b965097a5e080a10"],["/categories/心情随笔/index.html","c1c28e867f4393a4df3d779fea6013b9"],["/categories/心理实验/index.html","a887511031532d79d0cfd4640233fed4"],["/categories/技术分享/index.html","b4f2d59da198f00a4f387d3e49c65b96"],["/categories/技术教学/index.html","bccffa145130facd35a8016e5ddc40ac"],["/categories/探究所以/index.html","a8038801c29aecb5ae4c5a7c0c0e9dc7"],["/categories/生活方面/index.html","049d028bd5ee9c24302d3b7be42b7d55"],["/categories/硬核科技/index.html","eeb02d463df08ec52430a350bd9e6cd7"],["/categories/硬核科技/page/2/index.html","71fccbdb1cb4f5311bd160899e778a7f"],["/categories/编程语言/index.html","87431769d65b81e3a432861db6f6e5f7"],["/categories/网站建站/index.html","ca3d0377a8189f5d7801c30058e8bb8c"],["/cookies/index.html","1e329374e1b438e604ad0b8f2dcc9198"],["/copyright/index.html","79e9c37e6e11431dafdc3ace0ea1c5fd"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8eadd62858bdd7c97aa8182872abecf5"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","9bbf9060b1b8f614670f56fc32d35437"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","e9f66ab8a47f61f6566595c0abb36df6"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","37e2b48c5f62910085a64366f9f49b1d"],["/message/index.html","852151201678b1c35dc176d955fd4b20"],["/moments/index.html","2bdc2f7c41c701f2a18d8b273868ab01"],["/music/index.html","b0c09e415334725657a79df8a2d3eab4"],["/page/2/index.html","34b10e564dcf2e9c7d33d328c6fd3706"],["/page/3/index.html","19b17e9c0ed2a60bb0a3129d436647be"],["/page/4/index.html","42d01af1634f71f3d9e88e64f6583d9b"],["/page/5/index.html","ff48237a950c394bdf3c657c5b3c532b"],["/page/6/index.html","499ea7e2ffe2ec2cdfbef097a839bd22"],["/privacy/index.html","d7817851a82824afed5138b2ee8f1eab"],["/recentcomments/index.html","cf4945ad78fa3e9c2887bc794ebaf471"],["/service-worker.js","b44be4225f89f395c554ea18ad5df26e"],["/sw-register.js","2307f61cc61d8c65ea34841ecf15731d"],["/tags/123网盘/index.html","0e35c09609dd94621dd53ccbb2dc6303"],["/tags/Ai/index.html","771dda9eb576f26b876f50c6887ab6bf"],["/tags/C/index.html","7e77dda7fc38a4a38977cf4184efd0d1"],["/tags/ChatGPT/index.html","01e712b1f558cad7f51471f4878bd705"],["/tags/Cloudflare/index.html","190e387f66631bdacc90c12298614a5f"],["/tags/Markdown/index.html","1537a4234aa8736466a889a96a408f76"],["/tags/Openai/index.html","3e53557de0d709b69a466d49e104978b"],["/tags/QQ空间/index.html","5fe19f00f30a59c18b290dc15086b012"],["/tags/VPN/index.html","ec78292ba937426d444676938c5e2d44"],["/tags/app/index.html","d50db9a7d5ffbf63e5526d750bb57ad2"],["/tags/hexo/index.html","23bcabd0e0f40557a89e1f7da652e73a"],["/tags/index.html","fedae84c7b5c9e441e81b3a7bf2377a7"],["/tags/works/index.html","edb1449ae9283400a36d08770fd02408"],["/tags/信息修改/index.html","f1dcf4a5486ab2ebb83b5fe22ba8fb3a"],["/tags/写作/index.html","a3f30782b1a8c13f15b6dd48919dcae1"],["/tags/分享/index.html","0f1ff109d124237bb229b83a4903091e"],["/tags/吾爱破解/index.html","c886db79c06c47e7fb8aa80a27f6868d"],["/tags/塔罗牌/index.html","8fb061a6ac7eabef2101954e059513b4"],["/tags/壁纸/index.html","b8f1ca3530dc2211d2e0c271a6fb315b"],["/tags/安卓应用/index.html","51802cdc379499ceeb96baa05ca7faf7"],["/tags/安卓应用/page/2/index.html","fd2d52398afdf6d42bcfb6f95c2de005"],["/tags/安卓软件/index.html","038d122e7bcf581ef2c5d0ef417beb55"],["/tags/实用/index.html","cb6214d93047f2293c4d86882de054b0"],["/tags/实用推荐/index.html","b4029e17e2da53f1cc9e482d13cd8524"],["/tags/实用推荐/page/2/index.html","c9de9f37586b0a5a6113091175b6a227"],["/tags/实验/index.html","4edeec54628678b183e7b25ee64f9b92"],["/tags/工具/index.html","376e4bebace30feaea25e903fd486d77"],["/tags/工具/page/2/index.html","6aafa15a8f2a5a549b6ec061f78dd6e1"],["/tags/广告/index.html","1b71b196a96919ebdbe063addacf6b45"],["/tags/建站/index.html","4da8e462c59897048af5e0011d0e243a"],["/tags/开源/index.html","7cfc21bafb122941157b58039aced586"],["/tags/影视/index.html","b98b035897ad2ee0dadab769e2ab118c"],["/tags/心理/index.html","6ccca41b8c03bc175d4c7f76eb4d1acd"],["/tags/思考/index.html","3f6056e96c2582f1ae5e1dbed7fdee19"],["/tags/技术分享/index.html","ff13df5d553b81604e52fd7695e35c82"],["/tags/指令/index.html","13f0c32e0a51a4ebfcd51e221cd10e8a"],["/tags/探究所以/index.html","a62e82a3918776c3641c5cce1d291c00"],["/tags/推荐/index.html","15dcbd4be7b6ef4c2855f25004ddd073"],["/tags/教程/index.html","d82bd756e45898d5e0c5019449f3f9c0"],["/tags/文字语音/index.html","acb89efd6ad78e208c6c07ea4a759141"],["/tags/激活/index.html","6dcdd7c21358952899ed6b70ad5a2bf8"],["/tags/班级/index.html","8bf48858e5f4bdf3013eb39d4159abd0"],["/tags/生活/index.html","7788614ed0b60928faf4e15c7db03120"],["/tags/电脑软件/index.html","0d6ca2ea8c263ede7302d816bde1a9ff"],["/tags/电脑软件/page/2/index.html","ec6e8e7dfe0fb7351c602de77e662122"],["/tags/百度网盘/index.html","3ef4acedc33f92acd10b35d76d82b161"],["/tags/科幻科普/index.html","7fb4d934a22ae5b6195bf5bbfa503c50"],["/tags/精选网站/index.html","82aa28bde960db4d60b39f3aeccda448"],["/tags/系统优化/index.html","613d7b77cec89f6d65e15ecc03c98a57"],["/tags/编程语言/index.html","529e5a86d5131c4dc3032dbe21d595db"],["/tags/网站建站/index.html","5290d1f97f254702bf180c5e9965b69e"],["/tags/网页精选/index.html","cd7d6b05b97fe6aba68fc4cc46708644"],["/tags/脚本/index.html","8f42d08ed6ef6abefb6d8fe8fb8a4248"],["/tags/节点/index.html","11584c2febc5b7150d409aa9adcaaf66"],["/tags/视频/index.html","19147853fc3524ff6e5e1e2a0d9bc9fd"],["/tags/计算机/index.html","25dfc1464a4b897f25f43aed2318e1ce"],["/tags/记录/index.html","d4c95bdd12232c99f7f1dd4dad1e7302"],["/tags/调查/index.html","5905078e71745eab24762aa2ffda0554"],["/tags/部署/index.html","981d4f050a48852dc5dcb6086bc6efb0"],["/tags/锻炼/index.html","b2e916c67534e2d99e2dea94bc9ad591"],["/tags/随机图/index.html","ebd7d07dd8314423ca30a84e752e7c54"],["/tags/音乐/index.html","35189eeb72ef49b52402f4915c17a148"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
