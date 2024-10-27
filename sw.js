/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/01/21/ChatGPT-KEY/index.html","c2fa2a1578e7eb0ef671efc11f1c5e5a"],["/2024/01/22/Markdown/index.html","4f3b30b7dad7c127141d5cee15eebe2d"],["/2024/01/25/gkd/013132gqzqqejqjuqcwtqs.jpg","c5ad4af0bf83cd7dd4a582cc7b13aa23"],["/2024/01/25/gkd/013135vqqmaqq9wb645965.jpg","fa495e44556bc99d6eabe8ca3197454e"],["/2024/01/25/gkd/013137gq6z1l6qiiqwz12q.jpg","b005bf16869133b312c02d01b3f1bcd1"],["/2024/01/25/gkd/013140bywm0rpwjyulb5gj.jpg","3f6cac38ff6c9ce0ac29bc0c221f6ddd"],["/2024/01/25/gkd/index.html","c94d9f5cabdcb95f8ed4e5485a61066f"],["/2024/02/21/huan/d5120eabf56734ef2a502.png","9b0e4a6b320441caefda808fdbc57fb1"],["/2024/02/21/huan/index.html","2ec6bff52afcd8fc29dd27ed06a3f966"],["/2024/03/02/qqth/Untitled.png","e8b098334336cd6547bd648ae80b6d59"],["/2024/03/02/qqth/Untitled1.png","9261e8575d0a206a1b2536fec7967281"],["/2024/03/02/qqth/Untitled10.png","aaf898792f26a6a19100caffb293f5d4"],["/2024/03/02/qqth/Untitled11.png","b859c557795f338eba2d0118e9196744"],["/2024/03/02/qqth/Untitled12.png","b677452ae274676879fb02b26e8d71ce"],["/2024/03/02/qqth/Untitled2.png","8abbf86bd7160b596b6ea5878b9e36a7"],["/2024/03/02/qqth/Untitled3.png","448518da02328b0977dae40e60ca0496"],["/2024/03/02/qqth/Untitled4.png","74ed843493192244745e5e33540c8635"],["/2024/03/02/qqth/Untitled5.png","9a4e7698df4f1fab8e11714a8c345f7c"],["/2024/03/02/qqth/Untitled6.png","1e39db7133d0ecddf94e6b674e7ccebe"],["/2024/03/02/qqth/Untitled7.png","b159560d293be26a646e9bb9ed265c4e"],["/2024/03/02/qqth/Untitled8.png","de5760cf0a873f2f423c45330aa2c422"],["/2024/03/02/qqth/Untitled9.png","a70df8efd340f3d90e7c1ced7db56c72"],["/2024/03/02/qqth/index.html","6ab5fc5c96532b58e0bdd19cc051ec31"],["/2024/03/02/qqth/show.jpg","6c26f546850426a1f5798fd81aac50fc"],["/2024/03/02/qqth/show2.jpg","251710ceec6a6db2c595220ab5545997"],["/2024/03/16/ltt/640.jpg","495f096cbdcaad5d807a1e8d16dcaa30"],["/2024/03/16/ltt/640.png","49cb257ae8b656dc44b7d8a82c23b028"],["/2024/03/16/ltt/6401.jpg","d59dbd971d23d78d24ebec9f2b6b1393"],["/2024/03/16/ltt/index.html","1cac633a2d9ab5672c14505b6bd20fbe"],["/2024/03/16/wyy/640.png","bec5c042945360c69bfd250fd744e264"],["/2024/03/16/wyy/6401.png","3b357a588fe20f4492cc070debd267c6"],["/2024/03/16/wyy/6402.png","8d2456c722611935f754e16c1356e4b6"],["/2024/03/16/wyy/index.html","4b922f7f759f2192720892b9eb83964e"],["/2024/03/16/wyy/show.jpg","922ae2befb9b402f04577a694aa66a00"],["/2024/03/22/jingzhi/index.html","3cccdabd346ca2ef173c08d983f9139f"],["/2024/03/23/PDF24/Untitled.png","1e471b24c376cd8c53e960132c5e86c6"],["/2024/03/23/PDF24/Untitled1.png","47535fcdb6ac3d20557379efbae309ce"],["/2024/03/23/PDF24/Untitled2.png","061d1887990a7bf602f718433f02f8ea"],["/2024/03/23/PDF24/Untitled3.png","7944956f1aad5c1a828b2690ff575e70"],["/2024/03/23/PDF24/Untitled4.png","bee3eb0b5a8197bad3465c3dd518f20f"],["/2024/03/23/PDF24/Untitled5.png","4a6cd2342a1575b01bffdfe82ff38f77"],["/2024/03/23/PDF24/Untitled6.png","f2163b1074d2f428bf041f68c978731a"],["/2024/03/23/PDF24/index.html","d4f8c8beb06b42550fa70642426e4d48"],["/2024/04/10/C-saolei/index.html","f4775c8406a3147d15af6f1ef2809d5b"],["/2024/04/10/free-yuming/index.html","4f037dbb6262336651a8795ccc6ef86b"],["/2024/04/14/aqi/img1.png","510c6c3e9ecd8e5be3b2d17adaeb3b64"],["/2024/04/14/aqi/img2.png","506a1858c50a7619fcb46912153e42aa"],["/2024/04/14/aqi/img3.png","3c7130ca08ddd253180a97176702681a"],["/2024/04/14/aqi/img4.png","dc3621db48230b8f15c97e54f158cb39"],["/2024/04/14/aqi/img5.png","a0196a66745f300cddf7a284dd6b2cc4"],["/2024/04/14/aqi/img6.png","d71cfde10cca81cda142f125154fbd66"],["/2024/04/14/aqi/img7.png","566a37d77f89b3a9764b903e37a543ba"],["/2024/04/14/aqi/img8.png","4876f70aa434c0da0730a7d110802249"],["/2024/04/14/aqi/img9.png","f315a1b7575500974a4b6ab0b7188cf3"],["/2024/04/14/aqi/index.html","9016d0b3c77885b61b8ed92cccb78e17"],["/2024/04/21/kw/index.html","f49ccee708d84d1d67348c778766d902"],["/2024/04/21/kw/sho.png","f7749eb1d7519bebf2945b3ec6a52b68"],["/2024/04/21/kw/show1.jpg","f073089c22bf49eef164155c506b0874"],["/2024/04/21/kw/zhifu.png","8a6582017ae18e431322b180a74016ad"],["/2024/04/30/jsj-know/index.html","5ad53731a0197f2540ebd7dae5fbbf78"],["/2024/05/12/music_download/index.html","b2c175e4fb763df4941aeec000d2372e"],["/2024/05/12/qianhe-tools/04ebc029-63ee-42a0-ba29-006c2fb39629.png","1d0e57fea2410c5f4808214c42399bb5"],["/2024/05/12/qianhe-tools/index.html","1d565a68f678e7cf66d018ab056931cf"],["/2024/05/25/Vercel-Typecho/index.html","8e26815d578fc626adaeaef8b3b38f99"],["/2024/06/02/website-all/index.html","53b57354b55dcb9b3f8535750dbb0180"],["/2024/06/17/tools-box/index.html","b9b197861e1c478730498bd033068757"],["/2024/06/22/biibili-zhilian/index.html","7244411777e0f6c123bda5a598543ee5"],["/2024/06/23/sqyy/index.html","6e75b96d9dd1349fc0e644e094edcd6d"],["/2024/06/24/win-chachong/index.html","f9fc28482ae2f6ac4bfe37ddb8691b85"],["/2024/07/03/dyd/index.html","4c8b89c9ab816c4569f660fff56c06f9"],["/2024/07/03/geospy/index.html","c9d8c386460c76ed44ccca739c0c86cb"],["/2024/07/16/TuneFree/index.html","8b1e3b261d3e16578f4d5c487c6e08c0"],["/2024/07/16/pdf-repalr/index.html","30ba1ff134c171271313d30db859ef67"],["/2024/07/17/wcn-rs/640.jpg","2895a448ff4ce91b755b2bf2ca81bee0"],["/2024/07/17/wcn-rs/640.png","e80b34c08d41c8836808573ca6dbdf26"],["/2024/07/17/wcn-rs/index.html","c0e9a6c4a009b87e7e7ee1f325fbc7ab"],["/2024/07/23/an-yuyin/index.html","f135cdd9f150b4a72deae21ef7f7fd94"],["/2024/07/23/glary/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/glary/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/glary/index.html","562a0f3fc716cdbb0b194a3b2ef1d825"],["/2024/07/23/xtyh/DM_20240723202517_001.gif","8e6d7b19284996dbd013275894d1ffaf"],["/2024/07/23/xtyh/DM_20240723202519_001.gif","ba1f5248b7dab88fde586d3daef9399a"],["/2024/07/23/xtyh/index.html","79d4ad08bc11773544ee32434ac6efe3"],["/2024/07/24/win11-win10/index.html","e9429bfb36f1e8e04a61263eb80bb0e1"],["/2024/08/03/wu-muose/index.html","924386d37fbc06d5d1026b608f55e2df"],["/2024/08/04/ab/index.html","72d7cc2ff41d3dccac0d996efd434088"],["/2024/08/25/mp3tag/index.html","cdb8cc9f7309da878621051fce79ab15"],["/2024/08/31/cf-words/index.html","291343c5db8251bd1b0680f0da780804"],["/2024/08/31/cf-words/result.png","3298f3744dc48f824f58c06d7e0dbac7"],["/2024/09/01/hexo-mp4/index.html","3de7c09ac1ac2a2cf23956095793383e"],["/2024/09/01/hexo-mp4/music.png","c68559d1d3333d11f52ce71dd4d74ca2"],["/2024/09/01/hexo-mp4/video.png","83d78cd9480a528a47bdd97f27b0f48d"],["/2024/09/07/ode/1.png","70824275135623992adfdc40c8e93156"],["/2024/09/07/ode/2.png","8ef505a75210dde8a96f0dc8726d8778"],["/2024/09/07/ode/3.png","2f9c5672efce8ea5aac3f8ba834e4345"],["/2024/09/07/ode/4.png","cd112c55b37965568f83b38bec1d8d68"],["/2024/09/07/ode/index.html","457dd3b07c65cc7a5068713b4eabca74"],["/2024/09/08/classlasland/ClassIsland.gif","852b22c32f444cce449dc8b57d7894b7"],["/2024/09/08/classlasland/index.html","de58c044324c7ab76b712c078e5033d7"],["/2024/09/30/123-liuliang/index.html","06ecc42aef831add203c27db76a56db5"],["/2024/10/01/app-allmusic/index.html","dc68545aa2792f96b5286dab47a86d97"],["/2024/10/01/win-musicfree/index.html","70b59e484c3bc59c9c43be693e999cd1"],["/2024/10/02/fire-xinli/index.html","4f0db155a0f75d57e84b3526bd63d44f"],["/2024/10/02/win-wyydaili/index.html","d383b5fc5f174cbe4a9e8249000b3d61"],["/2024/10/14/qq-histort/index.html","6a5bbf1174ca15e4aeffaf370e8cde45"],["/2024/10/26/suijip/index.html","274f882e2eb93cc86b6b0a59338333d2"],["/2024/10/27/ai-tlp/index.html","6830f135d431fd16d57fb7fa0743a814"],["/2024/10/27/cloudflare-cfff/index.html","4da600cac038938000d10667fb6a4f57"],["/2024/10/27/tvbox/index.html","840219aa2e5631f09d4c40549c31f482"],["/404.html","8e8a46c0f448b6a6decae279310458c5"],["/about/index.html","08113095cc16a3ed6cc75821c63e99d8"],["/archives/2024/01/index.html","16b669609fe7dd1a52492460f14f1cdc"],["/archives/2024/02/index.html","7b95c21c0b76ffc526fa684a0895ac6b"],["/archives/2024/03/index.html","0e887bbe0e21d6e4b1aed6f08a3da8cf"],["/archives/2024/04/index.html","f8266e6eda5037a689bb86b4aa766bf6"],["/archives/2024/05/index.html","c9c2ee9c055b014f931e82546a020060"],["/archives/2024/06/index.html","82f3dbd7ca108768bef1330035c4f31c"],["/archives/2024/07/index.html","48a987071e22590a445bc0024d677102"],["/archives/2024/08/index.html","f7d29966cfa19df214d1edb1aefce668"],["/archives/2024/09/index.html","760fe4c18ebe79b23435309ae79c76ca"],["/archives/2024/10/index.html","1f74357a03ca7162904a4c8555cf9c26"],["/archives/2024/index.html","93f9913696351e6e056b04ee5152f437"],["/archives/2024/page/2/index.html","565dca807c8be6687960ba1def6acfff"],["/archives/2024/page/3/index.html","c5adc648a9ac8bddfa993c59630bff06"],["/archives/2024/page/4/index.html","c2488272f46707a9dd50e88315f76da1"],["/archives/2024/page/5/index.html","4854458f18c6b8e41d4f8ca892df2d7f"],["/archives/index.html","b95e9e044fdb53ab5c03baa2f0f63af3"],["/archives/page/2/index.html","b1037aaaf4336ef03bc1ea68fd0e6dcc"],["/archives/page/3/index.html","f22c5bae1944ef1c1340c12ec391766b"],["/archives/page/4/index.html","cbe0d3928c53250b7b7cd5f8c73f831a"],["/archives/page/5/index.html","d65378b948a80e7e821168ba707a5499"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","2cd381ba72be1f7bf86e97fe4698a542"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/ChatGPT/index.html","62e0eafe7ab1a3bb57feae112e751933"],["/categories/index.html","aa640535bd680daea707fa20ee874eac"],["/categories/学习资料/index.html","6c1ec220f3dd6d0f16acb7755135d280"],["/categories/安卓应用/index.html","369f8ff9c9cbe00efd8bdc29ab8b85a3"],["/categories/实用技巧/index.html","6b9264e2dbee9eab4a8e9d205f5e1d5a"],["/categories/实用推荐/index.html","fe69b06ef568bdccf6b0a197de118d79"],["/categories/实用软件/index.html","4d9490adf1cb9b3a2c60b7f79b571af5"],["/categories/实际生活/index.html","1f5880c78a4004e5b0defa86119e02d8"],["/categories/影视资源/index.html","53352657ceedc6913da15812084f6fb8"],["/categories/心情随笔/index.html","7bac4ba0b1a11b33c3054b11eb4d7a66"],["/categories/心理实验/index.html","d6350d9a7d8363b6d208d0289eda3387"],["/categories/技术分享/index.html","648b871e6bfac842d83de7753c200357"],["/categories/探究所以/index.html","37743da079062c5e3f3c804bc33d1912"],["/categories/硬核科技/index.html","c7cf8cda5dbadd53d732694fc44bfa86"],["/categories/硬核科技/page/2/index.html","099cf20073fe863653dd8ec10fde3bca"],["/categories/编程语言/index.html","e25719718099636e1cb1744e0a7491d2"],["/categories/网站建站/index.html","a8d614d69b0642d97edf8522e61cba6b"],["/cookies/index.html","aecb58d7578a6a99b3e1092efc8188b0"],["/copyright/index.html","147faa5dadd6dd4cf407266ed58b62cc"],["/css/custom.css","0de829faaa7d76d4c58516077894a043"],["/css/index.css","234f6240946e3f44b933727222b0bc7f"],["/css/links-css.css","6f395ee26a7c54a2986a88a6f3bcdc3a"],["/css/third_party/snackbar.min.css","15a5c16b1b4027d6803ee87d6c8cd253"],["/css/third_party/tianli_talk.css","cac919d9eeb24cb1c80852cfdbf1032c"],["/css/twikoo.css","f978b05656387779dcd067c3c8135cde"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","a92e0fa85d4808af22238c8223680286"],["/go.html","2d5fa4e77b42212fa9f9e224b5354e98"],["/image/INFJ-T.png","6cb7e67010ee78b929b0640ec22ad933"],["/image/cat.png","1215c430edbc2657aeb9cc1f674b281d"],["/image/dark.png","1421b77455b4f6b217f08bd01bcf7ca2"],["/image/excalidraw.png","2734f68f5c82c4bba5f5013b6b7f20d2"],["/image/gy.jpg","28664e9fa46f4dc59736ef96f2ff0709"],["/image/hpjy (2).jpg","4d77ed2ff3532d918e6837fb6ee57f25"],["/image/hpjy.jpg","3f87e3211482c4de9e495a9fbfcbabf8"],["/image/light.png","28d062c83bff7b6e2a857a149e6f0d27"],["/image/maigo.jpg","cc52ad107b15b63ae8b2a4dc36f9a349"],["/image/mcy.png","82f6326838cde02ae8735135f82bb96c"],["/image/music.jpg","29cd6355815bf72bc43e7752f1a59b88"],["/image/pagespeed.png","85f446592394b827475c3c5d11f66924"],["/image/study.jpg","537a8b6194d7d6e1c9797189ad754202"],["/image/tarot.png","8601ae853a978623066de04840117073"],["/image/video.png","621fd0ca8a10dedf3a971409bdfb574a"],["/image/wx.jpg","3c20fd8085447d47bf7783c45669a2c3"],["/image/wyy.png","5abc9bb67ca58037bcab57443824fa08"],["/image/zfb.jpg","391ff292176de0b4914c47805c8f14e0"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/pwa/chat.png","5efbbd5ed6f664d1d29bac3f41aedfd3"],["/img/pwa/favicon.png","360d949746d341a5417f6e92ee798f62"],["/img/pwa/favicon_16.png","21ab5b0dc1bc371fba8942646a55abeb"],["/img/pwa/favicon_32.png","0ea9dd6a9dca6df409816b25808a3f6b"],["/img/pwa/file.png","a41b3167cf61d3a7d08806fb8cbfdf35"],["/img/pwa/img.png","f038abdabca8d7a7ec726960461f101c"],["/img/pwa/notepad.png","ec18329fbb912b6997466a24d354f2d7"],["/index.html","dbfa94493ecf72f6a0cd48525aa25f6b"],["/js/covercolor/api.js","28801170f62f53630cc1cf4a6ac8d032"],["/js/covercolor/local.js","b5e6c4cefd7bdf86c334dcc44e555752"],["/js/custom.js","2ef5993867f55cc303bd01a623708a2c"],["/js/gulpfile.js","92fe22e32b15c2ac91ed94b1b7468c89"],["/js/main.js","349736d011c74996f785ff805cb0eec1"],["/js/music.js","6ce1086e67d5b6ba7debbcf4fd390817"],["/js/right_menu.js","0a34758f0540bec079848f285348819e"],["/js/search/algolia.js","3610c7d06243fc2fcc87d4703caf4ae3"],["/js/search/local.js","8ff6bd663eb297f0abc6d1998c99a728"],["/js/third_party/barrage.min.js","7410c2ac3b56c71658fb91bb0e9a937f"],["/js/third_party/efu_ai.min.js","5dbcc0ccdf5d5a4a92085833942952d8"],["/js/third_party/envelope.min.js","7b7383571864e68026fea62696885c9d"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","cbebaaa31cefea37c68ccb8ecacd0217"],["/js/tw_cn.js","389d9c74d9fe89726c7ad165ec0b808e"],["/js/utils.js","22d64d62238de7f2d59be01dc185ead4"],["/links/index.html","d3088cf11aae457d010aee71ffe6afc4"],["/message/index.html","614adfcf1327c99702eb30e9bd78e691"],["/moments/index.html","6c48aee58b2661861fde5a6d7ba34338"],["/music/index.html","2e52ec9cc7fba2347c107824433d05f0"],["/page/2/index.html","e0784dfcfdc02460ab6a479a995bd1f8"],["/page/3/index.html","068a4748afbc7443fa5949eda541e681"],["/page/4/index.html","f36ef316ea4d2dac45eb4f499023b17b"],["/page/5/index.html","954ab72dc2ab5b9046bcb641652a8476"],["/privacy/index.html","ce20b2865d8934036f65d71b8f2eaf09"],["/qqhistory.html","998b560f28554bf5e263964b3970d960"],["/recentcomments/index.html","0b01dcdd6733bac4a4b63c2948464312"],["/service-worker.js","d77ec028715974da7d0c1ca46f03c74f"],["/sw-register.js","a14d1f6051bf5c17c7353e9df359b717"],["/tags/123网盘/index.html","dc8fe31190778528001a1ce8d5d477b1"],["/tags/C/index.html","f4442da317ad5d3bcb797b7d5d4a019a"],["/tags/ChatGPT/index.html","d6c46b7781ec9e747dc4d5e7155eec05"],["/tags/Cloudflare/index.html","8e1edcfb13db5135aa57c8fb7c9849f9"],["/tags/Markdown/index.html","dbccf587b73de0ff3b4343c78faa6e96"],["/tags/Openai/index.html","3c246b5093b800e7c119b6ed78d6584c"],["/tags/QQ空间/index.html","81b57242667e38d96a46c76ac4141ee9"],["/tags/VPN/index.html","d3370069021cc7c95ae18bf4564ce26f"],["/tags/app/index.html","e873b362ceb79ca59259ff8e74a93bad"],["/tags/hexo/index.html","92c258f11f938991505df4857a525682"],["/tags/index.html","17d7c309d0d2f1fcc9fe755f0a2227d3"],["/tags/works/index.html","6b0437f85944463e320498c61a2a54b5"],["/tags/信息修改/index.html","09f35cd08932f22c7870560b4b3792cc"],["/tags/写作/index.html","b79ca43635a2fdbf2ef01624c5f4a637"],["/tags/分享/index.html","b3fcdc45c41e958eaafd91a05e23606f"],["/tags/吾爱破解/index.html","51d57914177bddab42e8c99fca295b0e"],["/tags/塔罗牌/index.html","54709017253a3e3a5da073c9255876a9"],["/tags/壁纸/index.html","80c4240b58584ca6ab34bffab8e27184"],["/tags/安卓应用/index.html","e679d2468e52878ac89f3f1f573f7ae0"],["/tags/安卓应用/page/2/index.html","4f88c226030ee1dc657d2443d2774660"],["/tags/安卓软件/index.html","a0c5c419bcfcb545a1b8bd06c5f5ec97"],["/tags/实用/index.html","c0237a672b765c7b22cf067b122e49a0"],["/tags/实用推荐/index.html","77f49420bad5ecf92fde0a2828abb7b2"],["/tags/实用推荐/page/2/index.html","42a0190a7468558a4f6de7a8bf1f56b3"],["/tags/实验/index.html","22369223d218713218d6456a53f13695"],["/tags/工具/index.html","0f7b2951624e08cfc21f327bcbec86b6"],["/tags/工具/page/2/index.html","4e7bc16fd63aa6c58bb1e4c03e9095c9"],["/tags/广告/index.html","a2e17260cc2d2331fe1496dad71c4cf2"],["/tags/建站/index.html","a385807668d0fecf1aca94f57115c5b2"],["/tags/开源/index.html","782cef2918934397f4a014d5b6e2cd74"],["/tags/影视/index.html","06db1ded11055ab647ed72336e1f98dd"],["/tags/心理/index.html","7999e1433916e14e2bb085d29714ab28"],["/tags/思考/index.html","17d1e7615711d03670137e7fb9721ddb"],["/tags/技术分享/index.html","7b2841865ca52c8b95b99ca02f8bfabf"],["/tags/指令/index.html","cdfcf9313ac532b9dfe4f43dc7646cad"],["/tags/探究所以/index.html","7fa2bcf71adab6e40e7c6b1007b51a48"],["/tags/推荐/index.html","fe1dedd756651fcac980efc54eeb1283"],["/tags/文字语音/index.html","dc918916807455e189ca6e7926993546"],["/tags/班级/index.html","f24c0e81ed984db40a2393ec44f9c9c3"],["/tags/电脑软件/index.html","84d1c0719808ca9c8679a293fb166086"],["/tags/电脑软件/page/2/index.html","c64a2a0848198ca4014662535111ce97"],["/tags/百度网盘/index.html","873d559e8b5ef350385090f614afbeb7"],["/tags/科幻科普/index.html","739e87fdf2cf9920f31968802bd9fdc2"],["/tags/精选网站/index.html","9705b8f7560207e7c43496c782d883f3"],["/tags/系统优化/index.html","b3eb184b10f846092de3295fe9180582"],["/tags/编程语言/index.html","93d795ed8a0cce0d3c8d137b7e931205"],["/tags/网站建站/index.html","3918df39c9235299ae5e8fc3074758c6"],["/tags/网页精选/index.html","b6de2f7113f862e672ebeb96db6ca4ed"],["/tags/节点/index.html","55227499cf257eb908707a0c34695a07"],["/tags/视频/index.html","b0611da86087ac9172a140cc5081f29a"],["/tags/计算机/index.html","d9c91d0583b9b39653480d26954f84c2"],["/tags/记录/index.html","196e53f732e2df97c5fd0cbbec87f55c"],["/tags/部署/index.html","ea5f6bfaace21824bc97d6a6ba7f9f14"],["/tags/随机图/index.html","ce889079e4025477c60e4ce3e8fff52d"],["/tags/音乐/index.html","79ab009bc4d30d6bb91d1378aeee3874"],["/workbox-25e5dcee.js","f09b1c0a825c5060bf4ac1609a7573b4"]];
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
