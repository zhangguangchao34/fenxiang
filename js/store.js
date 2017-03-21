$('.downlod').on("click", function () {
    alert(1)
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    function is_weixin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }
    if(is_weixin()){
        window.location = "http://a.app.qq.com/o/simple.jsp?pkgname=com.youge.jobfinder";
    }else {
        if (isAndroid) {
            window.location.href = 'http://123.57.15.173:8089/userfiles/1/files/version/2016/01/zhaoshiba.apk';
        }
        if (isIOS) {
            window.location.href = 'https://appsto.re/cn/B6zA-.i';
        }
    }

});