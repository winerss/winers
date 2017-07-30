
    function requestFullScreen(element) {
        // 判断各种浏览器，找到正确的方法
        var requestMethod = element.requestFullScreen || //W3C
            element.webkitRequestFullScreen ||  //Chrome等
            element.mozRequestFullScreen || //FireFox
            element.msRequestFullScreen; //IE11
        if (requestMethod) {
            requestMethod.call(element);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
    function exitFull() {
        // 判断各种浏览器，找到正确的方法
        var exitMethod = document.exitFullscreen || //W3C
            document.mozCancelFullScreen ||  //Chrome等
            document.webkitExitFullscreen || //FireFox
            document.webkitExitFullscreen; //IE11
        if (exitMethod) {
            exitMethod.call(document);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
function addLoadEvent(func){
    var oldonLoad=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonLoad();
            func();
        }
    }
}
//获取浏览器视口大小
function resize (){
    var el=document.getElementById("container");
    var pageWidth=window.innerWidth,pageHeight=window.innerHeight;
    if(typeof pageWidth!="number"){
        if(document.compatMode=="CSS1Compat"){
            pageWidth=document.documentElement.clientWidth;
            pageHeight=document.documentElement.clientHeight;
        }else{
            pageWidth=document.body.clientWidth;
            pageHeight=document.body.clientHeight;
        }
    }
    el.style.width=pageWidth+"px";
    el.style.height=pageHeight+"px";
}
addLoadEvent(resize);
window.onresize=resize;
//切换窗口
function clickHandle() {
    var clickNum = 0;
    var fullScreen = document.getElementById("fullScreen");
    fullScreen.onclick=function(){
        clickNum++;
        if(clickNum % 2!=0){
            requestFullScreen(document.documentElement);
            this.style.background = "url(img/icon/layout.png) no-repeat";
            this.style.backgroundPosition = "-245px -4px";
        }else{
            exitFull();
            this.style.background = "url(img/icon/layout.png) no-repeat";
            this.style.backgroundPosition = "-198px -4px";
        }
    }
}
addLoadEvent(clickHandle);
//项目标题动画
$(document).ready(function () {
    $(".caption h4").mouseenter(function(){
        $(this).addClass("animated shake");
    });
    $(".caption h4").mouseleave(function(){
        $(this).removeClass("animated shake");
    });
});
