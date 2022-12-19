// ==UserScript==
// @name         你的日记美化插件
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  美化一下这个网址拉
// @author       Cierra_Runis
// @match        https://nideriji.cn/diary/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nideriji.cn
// @grant        GM_addStyle
// ==/UserScript==

var iframeOutListener;
var iframeCloseListener;

(function () {
    'use strict';

    let webCss = `
    *{
    font-family: ui-monospace !important;
    color: #f0f0f0cc
    }

    body{
        background: #222222
    }

    .paper .title .main {
        border-bottom: 1px solid #ff8000
    }

    .paper{
        background: #444444
    }

    .left-nav{
        background: #444444
    }

    .left-nav .btn:hover {
        color: #ff8000;
    }

    .left-nav .bottom-btngrp .new {
        color: #ff8000;
    }

    .calendar{
        background: #444444
    }

    .calendar .content td.hasDiary .inner {
        color: #ff8000;
    }

    .calendar .content td.hasDiary:hover .inner, .calendar .content td.hasDiary.active .inner {
        background: #ff8000;
    }

    .calendar .header .title{
        color: #f0f0f0;
        user-select: none;
    }

    .calendar .header .ctrl{
        color: #f0f0f0
    }

    .calendar .header .ctrl:hover{
        color: #f0f0f080
    }
    `

    let iframeCss = `
    *{
    font-family: ui-monospace !important;
        color: #f0f0f0;
        background: #444444
    }

    .header{
        background: #444444
    }

    .tab-right{
        color: #f0f0f0
    }

    .content{
        height: 674px
    }

    .content textarea {
        position: absolute;
        padding: 2px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        resize: none;
        font-size: 17px;
        background: #222222;
        border-radius: 10px;
    }

    .content .left-panel ul li:hover.active, .content .left-panel ul li.active.active {
        color: #ff8000;
    }

    .content .left-panel ul li:hover.active:before, .content .left-panel ul li.active.active:before {
        background: #ff8000;
    }

    .content .tabs-container ul.tab li .tab-right {
        margin-left: 30px;
        padding-left: 60px;
        margin-top: auto;
        margin-bottom: auto;
        color: #f0f0f0cc
    }

    .btn {
        color: #f0f0f0;
        border-radius: 9px;
        background: #ff8000;
    }

    .btn:hover {
        background: #ffa000;
    }
    `

    function isFrameClose() {
        console.log('监视 iframe 是否消失中……')
        // 若 iframe 消失，重新开始原计时器
        if (!document.querySelector('iframe').checkVisibility()) {
            clearInterval(iframeCloseListener)
            iframeOutListener = setInterval(isFrameOut, 500);
        }
    }

    function isFrameOut() {
        console.log('监视 iframe 是否有 src 且显示出来中……')
        // 如果有 src 且显示出来，加五遍后停止原计时器，开始监视 iframe 是否消失
        if (document.querySelector('iframe').src != '' && document.querySelector('iframe').checkVisibility()) {
            for (var i = 0; i < 5; i++) {
                document.querySelector('iframe').contentWindow.document.head.appendChild(GM_addStyle(iframeCss))
            }
            clearInterval(iframeOutListener)
            iframeCloseListener = setInterval(isFrameClose, 500)
        }
    }

    GM_addStyle(webCss);
    iframeOutListener = setInterval(isFrameOut, 500);

})();
