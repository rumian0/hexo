// deviceRedirect.js
(function() {
    function GetRequest() {
        var url = location.search; // 获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    var res = GetRequest();
    var par = res['index'];
    if (par !== 'gfan') {
        var ua = navigator.userAgent.toLowerCase();
        var contains = function(a, b) {
            return a.indexOf(b) !== -1;
        };

        // 将下面的'http://abc.com/'改成你的wap手机版页面地址
        var toMobileVersion = function() {
            window.location.href = 'http://mingcy.cn/';
        };

        if (
            contains(ua, "ipad") ||
            contains(ua, "rv:1.2.3.4") ||
            contains(ua, "0.0.0.0") ||
            contains(ua, "8.0.552.237")
        ) {
            return;
        }
        if (
            (contains(ua, "android") && contains(ua, "mobile")) ||
            (contains(ua, "android") && contains(ua, "mozilla")) ||
            (contains(ua, "android") && contains(ua, "opera")) ||
            contains(ua, "ucweb7") ||
            contains(ua, "iphone")
        ) {
            toMobileVersion();
        }
    }
})();
