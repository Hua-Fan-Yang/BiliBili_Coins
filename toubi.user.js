// ==UserScript==
// @name         偷取UP的硬币
// @namespace    https://www.jinguanzj.com/
// @version      1.2
// @description  这个脚本可以让你在B站给视频投币后 不满意要回你的币（嗯！
// @author       阳阳_Yyang https://space.bilibili.com/498424665
// @match        *://www.bilibili.com/video/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @updateURL    https://openuserjs.org/meta/2914443983qq.com/偷取UP的硬币.meta.js
// @downloadURL  https://openuserjs.org/install/2914443983qq.com/偷取UP的硬币.user.js
// @license      MIT
// ==/UserScript==

(function () {
    
    //因为请在页面加载完毕后再点击投币按钮，心急吃不了热豆腐！
    
    var coined = false;//是否已投币
    var coins;//硬币数量
    window.setTimeout(main,5000);//页面加载完成前DOM对象找不到，延时5s
    function main() {
        $(".coin").click(function () {
            if (coined == false) {
                window.setTimeout(function () {
                    $(".bi-btn").click(function () {
                        coined = true;
                        console.log(coined);///////
                        window.setTimeout(function () { coins = Number($(".jump .money")[0].innerText);console.log(coins)}, 2000);//获取投币后账号硬币，再投币后获取
                        $(".ops").append("<span id=\"tb\" class=\"coin\"><canvas width=\"34\" height=\"34\" class=\"ring-progress\" style=\"width:34px;height:34px;left:-3px;top:-3px;\"></canvas><i class=\"van-icon-videodetails_throw\" style=\"color:;\"></i>偷币</span>");
                        $("#tb").click(function () {
                            $(".coin")[0].click();
                            window.setTimeout(function () {
                                var coinNum = 2;
                                $(".coin-title")[0].innerHTML = "从UP主那里偷<span>1</span>枚硬币";
                                $(".like-checkbox")[0].innerHTML = "<label><input type=\"checkbox\"><i><\/i>同时点踩内容<\/label>";
                                $(".left-con").click(function () { $(".coin-title")[0].innerHTML = "从UP主那里偷<span>1</span>枚硬币"; coinNum = 1; });
                                $(".right-con").click(function () { $(".coin-title")[0].innerHTML = "从UP主那里偷<span>2</span>枚硬币"; coinNum = 2; });
                                $(".bi-btn").click(function () {
                                    $(".jump .money")[0].innerText = Number(coins) - Number(coinNum);
                                    window.setTimeout(function () {
                                        $("#bilibili-player")[0].innerHTML = "<iframe src=\"https://www.bilibili.com/blackboard/newplayer.html?bvid=BV1GJ411x7h7&amp;autoplay=1\" style=\"width: 100%;height: 100%;\"></iframe>";
                                    },10000);
                                });
                            },200);
                        });
                    });
                },1000);
            };
        });
    };
})();