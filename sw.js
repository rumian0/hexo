/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","b5e4f6242f33c6373b43dcb13bfb46db"],["/2024/01/22/Markdown/index.html","9dc7a20c7e2c82f0e3560698ebd5a36a"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","13e050ba2e1d5eb58ef98878b9b79352"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","f4dbbd62fb4b44c67c3c826c364996cc"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","3c63b50e4f5f2e2f3dbe222e949ce504"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","0f62650992576962a62fb3c7e2ed3b52"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","b779008546ae5fa8eb3f9043cd84e541"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","9a3989532ecb5dc8d65103c14a276beb"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","02eee7ac176487f901885179cb97bb80"],["/2024/04/10/C-saolei/index.html","ef97a96058c35c85af25555b3bd4fedc"],["/2024/04/10/free-yuming/index.html","45137360a1ffd9d859fd4d1687b14fdd"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","f533b9bfcb680034b08e399f722e9d9d"],["/2024/04/21/kw/index.html","fea701aef6cc4b12f3d41023f24a1025"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","543857379c7731a0b07d36eef9e3f345"],["/2024/05/12/music_download/index.html","4728fa2007194cdd1150f1ddfcc9c0e2"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","0ae0af3eba5b3aa0b0e084245169026e"],["/2024/05/25/Vercel-Typecho/index.html","7e2ec5844cc7ccc711e24ee91a8ef8cd"],["/2024/06/02/website-all/index.html","ec5fa5c568cb761606a98228c3ace9e7"],["/2024/06/17/tools-box/index.html","c7cb8d4cc2deb527b46107ba44ae2937"],["/2024/06/22/biibili-zhilian/index.html","873b4d78f463c9950f458304aa52daf8"],["/2024/06/23/sqyy/index.html","a40ece3b3dd9482ee6095fe114979cdb"],["/2024/06/24/win-chachong/index.html","28cccb286a2ac2e2a4a59b87eec54000"],["/2024/07/03/dyd/index.html","d32273f7bcbe5fd7316218324d77a145"],["/2024/07/03/geospy/index.html","508f7cf4fff9ff554369f28fe537cc3c"],["/2024/07/16/TuneFree/index.html","c70ce9bd337965a6c4a24ecb30533423"],["/2024/07/16/pdf-repalr/index.html","fd9cd5354d5514fa769fa2999e72c750"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","0b256c18d7f4d772563f2ab0e91fbb46"],["/2024/07/23/an-yuyin/index.html","44b47f976f239ea52af2be6df219d12d"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","91c3677dd535c596198e505c4c32c149"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","efe8bab101d4d5d241ab8787684731e3"],["/2024/07/24/win11-win10/index.html","f29ca03da8a7fdb91d0edad6415c22eb"],["/2024/08/03/wu-muose/index.html","22344014b04acc7c4f5afcada7d4e0b2"],["/2024/08/04/ab/index.html","74039ef9144b0db01c5c4e2dd864f8b1"],["/2024/08/25/mp3tag/index.html","8582b4f10bd0bab332381bc922b59e36"],["/2024/08/31/cf-words/index.html","7bb55f418005869f7bba5b74f6f9cb21"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","fd09369c38436e5dac210245c2568e03"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","0e9ceccf1e4e72ba57099c702032595a"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","471a92794a7b7d382bb7c52c223e7bc9"],["/2024/09/30/123-liuliang/index.html","bd2957c6aeefbd9debbd94909ae3e557"],["/2024/10/01/app-allmusic/index.html","92f152b84a99f88e7f2be7ce176ae7c7"],["/2024/10/01/win-musicfree/index.html","ae8ff297010bac8ace8166db28588834"],["/2024/10/02/fire-xinli/index.html","a6a631091f8bcd426d93d6f437c92458"],["/2024/10/02/win-wyydaili/index.html","abe0887c004eb2123d60d380f82646ec"],["/2024/10/14/qq-histort/index.html","238ad972da937a3c2d718cb9e5e4f1da"],["/2024/10/26/suijip/index.html","f892be85356d949d02022d98085f9b82"],["/2024/10/27/ai-tlp/index.html","52617d0b0768d0174512e2feeac4fa74"],["/2024/10/27/cloudflare-cfff/index.html","ba0d86e3040b4a231b34e73f0d2a8c85"],["/2024/10/27/tvbox/index.html","00a937e344c30277376b7d25e9b1bdd0"],["/2024/11/20/wyy--2/index.html","17d88728dc59a9d32a1b1332656610a0"],["/2024/11/23/fjyangcheng/index.html","ef9adc00b5704615d9aec68ddbc9b8d2"],["/2024/11/23/office-ltsc/index.html","865852377a0e9691238ed736d68c19ee"],["/2024/12/01/aitiaosuo/index.html","0c7ba38c2cca1e9be0c3e3b7f882c946"],["/2024/12/01/yjx-study/index.html","35aec8574b98f19019af768622d4dd79"],["/2024/12/21/riji12-09/index.html","b452d0443ca8f76d23c63e5dff80871a"],["/2024/12/28/obsessive-thinking/index.html","04e6a8a4b916ebc647f050ad453f8e4f"],["/2024/12/29/yjxxx-essay/index.html","adba0643211d4dde94df76a1d2fcf829"],["/404.html","7f1090afa765333661dc833961e4d0a7"],["/about/index.html","a5a8a64026fbeb22109dcf80c64b6117"],["/archives/2024/01/index.html","3bd671fb3af60cbd022fdb025dc3d45b"],["/archives/2024/02/index.html","4cc7e0527c3e653f1f3ee9bf1385928c"],["/archives/2024/03/index.html","6eb18b91a8f6e4ab5e0ea077dbccbc43"],["/archives/2024/04/index.html","6daba3d7e4af62de1b9b570bf95cb7ae"],["/archives/2024/05/index.html","1c53665d7fa62d66836c45bd9b9e6c36"],["/archives/2024/06/index.html","0f26e97aa64e7200342f270323455982"],["/archives/2024/07/index.html","2dd73083f2de8d67f820452d580816eb"],["/archives/2024/08/index.html","f863791b4bb9eb6c8e0d38dba02bf2ec"],["/archives/2024/09/index.html","c9b3ac1ec10ee0b6b88b9853cc41dcff"],["/archives/2024/10/index.html","9cc55da4fc30d2d62b60e637dcac91cb"],["/archives/2024/11/index.html","cf1c07d22e79842ca6186f54a77f6ce3"],["/archives/2024/12/index.html","be91513a62318fa203db46b30f8638fc"],["/archives/2024/index.html","64b2447854456c0d5657b87f803ab227"],["/archives/2024/page/2/index.html","135ddd4cfe8553ca8bc4495a569de356"],["/archives/2024/page/3/index.html","f7290949bfac9f0249894034e1a9f500"],["/archives/2024/page/4/index.html","94555f7654cc082ae33f19e94acbfaf9"],["/archives/2024/page/5/index.html","a338348ca3328ce6e98c4be819cdccb6"],["/archives/2024/page/6/index.html","972ce8311cfbedb7976c8ee2b563c745"],["/archives/index.html","6a12084cc5d07da0641cbad374ad2816"],["/archives/page/2/index.html","095c3c6a17591d197d90caf4fc9361eb"],["/archives/page/3/index.html","528a9be1fec76af853a5f22fa5faf2ff"],["/archives/page/4/index.html","bd842133989b4d7e050579aa9502bb06"],["/archives/page/5/index.html","cda24898fa5c06a51136a79bf1839c0f"],["/archives/page/6/index.html","cd0e2fae2641d8f6077df61198489f4a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","e51ebb5b635a2e907d575ab5e434e229"],["/categories/index.html","0c86df652867745f008acff9df030464"],["/categories/学习资料/index.html","160320f473242b41d80e695a54bb2f93"],["/categories/安卓应用/index.html","5998c8769e45285b54197400e3209d66"],["/categories/实用技巧/index.html","616062603d14866366d854674c50f0bf"],["/categories/实用推荐/index.html","61dc4ea66838332afebfeb32644d3aca"],["/categories/实用软件/index.html","fee2464a033b2bd5b17afd0637a81c4d"],["/categories/实际生活/index.html","6893abe7a2adc602a33e5d1689f8616b"],["/categories/影视资源/index.html","5c5a9aa021a941e9409f62c0a0424549"],["/categories/心情随笔/index.html","1cd91ad71f7d0fa9a8ceb36b639091d2"],["/categories/心理实验/index.html","f83441b749a161a5eca5b5ad9bc08399"],["/categories/技术分享/index.html","c5b48d41709c2b87b122993839f3cdc7"],["/categories/技术教学/index.html","daf2f160bf83d9a43201bb48c05d568f"],["/categories/探究所以/index.html","12f93cb9757590bac587a458a4e5e804"],["/categories/生活方面/index.html","a8cc1e3578aa7644f276f40ff926d87d"],["/categories/硬核科技/index.html","d17379a7600890e65708f3a7f7954274"],["/categories/硬核科技/page/2/index.html","f7b4273010f1be98f139516c51281d6f"],["/categories/编程语言/index.html","80c49163f4347e186ee655048bdb6902"],["/categories/网站建站/index.html","96a3927eb48ebd046dc4d004bf2b3d08"],["/cookies/index.html","2caea2b76c686b94162b815b50d04da1"],["/copyright/index.html","8e11e1aeac25929803ef9bef3a34a0c2"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","8dad575421d5d2536835a229317d66c0"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","14bae49db74eac70265ceb0f462a9692"],["/css/twikoo.css","206275dd355c8a9524e2352d2b209a42"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","3946f4f3f360594e32c09fea49c958d8"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/fireworks.png","5a29c6017e697dee00d396e84d676245"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/Phone.png","830ace688e0c049432343c0ee3be153d"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","654a15a6f1a9a0a7c81937a1143664bc"],["/img/pwa/favicon_16.png","15b8700d98a9235db50ea1d0acc2c09c"],["/img/pwa/favicon_32.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","9eabdba6a021fa02eab3c43f6510007a"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","6cc599428bfd0e7431466d0eb46788c0"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","bd9be758b6494a016e1518c6a46513e9"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/links/index.html","6479ca7490572957e5491dccc1132497"],["/message/index.html","c76c11807ebff7e495eafc5a3c5f2cbe"],["/moments/index.html","297531da3dbad55248e4901ac121dd73"],["/music/index.html","822b9c2e6ac09ebaa46468a48db7d8d6"],["/page/2/index.html","a4fa6a68560a39c8b5d3a2a9e249d525"],["/page/3/index.html","2e2f90266e2aa65a1263846db649b631"],["/page/4/index.html","226db6096073ed255b9e92dcaac31390"],["/page/5/index.html","fbb83c314d99dbb51a6d328a49454642"],["/page/6/index.html","09ce013da59ab1241b2c29453a725e5c"],["/privacy/index.html","65ce0a108f692c396f2a8bd79f5bda32"],["/recentcomments/index.html","04b8a9754bfb37b8f8c99ccd94577162"],["/service-worker.js","fc76e2d372d083eb6ac89d411f55f896"],["/sw-register.js","a750caa461fdb428ea4e62b04aa426f7"],["/tags/123网盘/index.html","6cc5af89e1154fd7213c7b8e4625b1cb"],["/tags/Ai/index.html","89db11d96ea13be7fab7d9965439af13"],["/tags/C/index.html","654d9922cf0a06571de3a5e68034c2e9"],["/tags/ChatGPT/index.html","05b56cd2192af48a25222ba7c126b42a"],["/tags/Cloudflare/index.html","27965f1f7542bb959045bf33bf7c4f5e"],["/tags/Markdown/index.html","f75b59066e86d7cae3ca9badf5471355"],["/tags/Openai/index.html","8408110c5b9a11a02d0851367a84615c"],["/tags/QQ空间/index.html","3f50cb36267e150a2704858b3f09710b"],["/tags/VPN/index.html","f0c5950db9ce0f3008b3cd7179bc1a03"],["/tags/app/index.html","568e22aceb4cc199aabfc4ed94b3bbb9"],["/tags/hexo/index.html","2eed68c67b7cc0683355b6ae47bf7882"],["/tags/index.html","303f3a4b5e3d05f1d2dca66a0acb5205"],["/tags/works/index.html","49aded1c9a798e5fe72c94478e727164"],["/tags/信息修改/index.html","1e141c9a9ca82914bfc146c3c20b9af3"],["/tags/写作/index.html","0c41bff5d640fe87f67b8de75bd3ac28"],["/tags/分享/index.html","ad62b7662b07d1ccfd74c8ff4e8937bb"],["/tags/吾爱破解/index.html","bd842578fcd2c4d0020867c821ac8eb4"],["/tags/塔罗牌/index.html","140f806dc7f40b4009c991e61ebf4151"],["/tags/壁纸/index.html","2b8a5f1e8db472caf80a3b5939f13329"],["/tags/安卓应用/index.html","80b5ed74471ae6196cbde63540cc7624"],["/tags/安卓应用/page/2/index.html","17d12f92c3ddc908c398d6f4978eddf9"],["/tags/安卓软件/index.html","65f8f0d7a9d47a87d63da13d343d3592"],["/tags/实用/index.html","8f897815fd9f9c0e061dea597c45e9a9"],["/tags/实用推荐/index.html","991b40d7da0d70f3ade6651d3ef51c9d"],["/tags/实用推荐/page/2/index.html","015b827e6d1800818183760214a70050"],["/tags/实验/index.html","e11be45f1f29c08cc0eddbd4f30fc4ad"],["/tags/工具/index.html","72fd89b5dea80394d17ef77973c0e555"],["/tags/工具/page/2/index.html","b12f23fc69c6661e1c9edb6f83402cf6"],["/tags/广告/index.html","44c33e1531e3e2151c25d6317d9c2520"],["/tags/建站/index.html","75189498d116d8e23f0e36ffdb9b8f77"],["/tags/开源/index.html","9dc4a28ee9847861064c0326a4a5ef8a"],["/tags/影视/index.html","086285cb5701241bbd6326406fd6e243"],["/tags/心理/index.html","81bfb458eb234915cca9d6305293446f"],["/tags/思考/index.html","2445533637560107cdfb70c67c827d2a"],["/tags/技术分享/index.html","bab754c5ffce42953841f79f42d93520"],["/tags/指令/index.html","8dd4279cdaf9092901a3933b110a70c5"],["/tags/探究所以/index.html","f656a5bb74254bb6bd49f8c1950c7270"],["/tags/推荐/index.html","c89642c2bc4e40c6d21da351b31c1d9b"],["/tags/教程/index.html","dfbcec4bf21a3992da36f54a84ecffb6"],["/tags/文字语音/index.html","4ac1071755e7363dfddb3025a6834063"],["/tags/激活/index.html","2bb2e21993c6255b40805e494770dac1"],["/tags/班级/index.html","67b64f350eb02d60762706216e4b3d0a"],["/tags/生活/index.html","55a2cd819ff71bdf70f278d57e429d5b"],["/tags/电脑软件/index.html","2e581e97ea58deebf8bb45607ed22f5f"],["/tags/电脑软件/page/2/index.html","242d3b75be9b80665d5d17c231bc37d2"],["/tags/百度网盘/index.html","0dfbd1d8d46382da20ace4375e227e12"],["/tags/科幻科普/index.html","a3bb130ca5fa2341ed18e39d3975fd1d"],["/tags/精选网站/index.html","f92ea0e75302cb19917d033a48886e27"],["/tags/系统优化/index.html","3daad9c5d0dcdcf56bf92896a3e446c2"],["/tags/编程语言/index.html","ac87a802c164e16711f207277e538264"],["/tags/网站建站/index.html","630f7200374337479e2b826973f86e60"],["/tags/网页精选/index.html","c291d7fecb2bf81ebdfa926549760203"],["/tags/脚本/index.html","b17a1fcc83c014b4e552fc4ceee883b7"],["/tags/节点/index.html","e2798e50fc14d974c0e8cd08d2b80a2b"],["/tags/视频/index.html","74cfcb8abaf040006cbb10a4b04dd764"],["/tags/计算机/index.html","8e90997aa08fc338e12e4cbb6ea0d2fb"],["/tags/记录/index.html","d8e63d7bb8b18b3f047579e0f9e30766"],["/tags/调查/index.html","ad238e04b1a851c4e1cdfd618b0dbff0"],["/tags/部署/index.html","4f0737c92334a4d9fbb5b548fedab72c"],["/tags/锻炼/index.html","d3f21aacadc3d0ae3cc87e92046813b0"],["/tags/随机图/index.html","1b225e915aa398c1cde4ad493079d5b4"],["/tags/音乐/index.html","7c2e3aebf6fcfe71f3413956753a7236"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
