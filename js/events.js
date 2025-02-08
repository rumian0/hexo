HTMLElement.prototype.wrap=function(r){this.parentNode.insertBefore(r,this);this.parentNode.removeChild(this);r.appendChild(this)};Fluid.events={registerNavbarEvent:function(){var r=jQuery("#navbar");if(r.length===0){return}var e=jQuery("#navbar .dropdown-menu");if(r.offset().top>0){r.removeClass("navbar-dark");e.removeClass("navbar-dark")}Fluid.utils.listenScroll(function(){r[r.offset().top>50?"addClass":"removeClass"]("top-nav-collapse");e[r.offset().top>50?"addClass":"removeClass"]("dropdown-collapse");if(r.offset().top>0){r.removeClass("navbar-dark");e.removeClass("navbar-dark")}else{r.addClass("navbar-dark");e.removeClass("navbar-dark")}});jQuery("#navbar-toggler-btn").on("click",function(){jQuery(".animated-icon").toggleClass("open");jQuery("#navbar").toggleClass("navbar-col-show")})},registerParallaxEvent:function(){var a=jQuery('#banner[parallax="true"]');if(a.length===0){return}var t=jQuery("#board");if(t.length===0){return}var r=function(){var r=jQuery(window).scrollTop()/5;var e=parseInt(t.css("margin-top"),10);var n=96+e;if(r>n){r=n}a.css({transform:"translate3d(0,"+r+"px,0)"});var o=jQuery(".side-col");if(o){o.css({"padding-top":r+"px"})}};Fluid.utils.listenScroll(r)},registerScrollDownArrowEvent:function(){var r=jQuery(".scroll-down-bar");if(r.length===0){return}r.on("click",function(){Fluid.utils.scrollToElement("#board",-jQuery("#navbar").height())})},registerScrollTopArrowEvent:function(){var o=jQuery("#scroll-top-button");if(o.length===0){return}var a=jQuery("#board");if(a.length===0){return}var t=false;var s=false;var r=function(){var r=a[0].getClientRects()[0].right;var e=document.body.offsetWidth;var n=e-r;t=n>=50;o.css({bottom:t&&s?"20px":"-60px",right:n-64+"px"})};r();jQuery(window).resize(r);var e=a.offset().top;Fluid.utils.listenScroll(function(){var r=document.body.scrollTop+document.documentElement.scrollTop;s=r>=e;o.css({bottom:t&&s?"20px":"-60px"})});o.on("click",function(){jQuery("body,html").animate({scrollTop:0,easing:"swing"})})},registerImageLoadedEvent:function(){if(!("NProgress"in window)){return}var r=document.getElementById("banner");if(r){var e=r.style.backgroundImage;var n=e.match(/\((.*?)\)/)[1].replace(/(['"])/g,"");var o=new Image;o.onload=function(){window.NProgress&&window.NProgress.status!==null&&window.NProgress.inc(.2)};o.src=n;if(o.complete){o.onload()}}var a=jQuery("main img:not([lazyload])");var t=a.length;for(const o of a){const s=o.onload;o.onload=function(){s&&s();window.NProgress&&window.NProgress.status!==null&&window.NProgress.inc(.5/t)};if(o.complete){o.onload()}}},registerRefreshCallback:function(r){if(!Array.isArray(Fluid.events._refreshCallbacks)){Fluid.events._refreshCallbacks=[]}Fluid.events._refreshCallbacks.push(r)},refresh:function(){if(Array.isArray(Fluid.events._refreshCallbacks)){for(var r of Fluid.events._refreshCallbacks){if(r instanceof Function){r()}}}},billboard:function(){if(!("console"in window)){return}console.log(`
-------------------------------------------------
|                                               |
|      ________  __            _        __      |
|     |_   __  |[  |          (_)      |  ]     |
|       | |_ \\_| | | __   _   __   .--.| |     |
|       |  _|    | |[  | | | [  |/ /'\`\\' |    |
|      _| |_     | | | \\_/ |, | || \\__/  |    |
|     |_____|   [___]'.__.'_/[___]'.__.;__]     |
|                                               |
|            Powered by Hexo x Fluid            |
| https://github.com/fluid-dev/hexo-theme-fluid |
|                                               |
-------------------------------------------------
--------------------------------------------------
|                                               |
|                                               |
|           MingCY                              |
|                                               |
|                                               |
|          https://mingcy.cn                    |
-------------------------------------------------
    `)}};