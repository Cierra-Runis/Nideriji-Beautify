// ==UserScript==
// @name         你的日记美化插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  美化一下这个网址拉
// @author       Cierra_Runis
// @match        https://nideriji.cn/diary/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nideriji.cn
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var common_css = document.getElementsByTagName('link')[2];
    var semantic_css = document.getElementsByTagName('link')[3];
    var diary_css = document.getElementsByTagName('link')[4];
    var loader_css = document.getElementsByTagName('link')[5];

    common_css.setAttribute('href', "")
    /* 背景 */
    var body = _.querySelector('body');
    body.style.background = "#222222";

    /* 左边导航栏 */
    var left_nav = _.querySelector('.left-nav');
    left_nav.style.background = "#444444";

    /* 写日记按钮 */
    var btn_new = _.querySelector('.left-nav .bottom-btngrp .new');
    btn_new.style.color = "#000000";

    /* 中部日记 */
    var paper = _.querySelector('.paper');
    paper.style.background = "#444444";
    paper.style.color = ""

    /* 选取背景色 */
    var selection = _.querySelector('::selection');
    selection.background = "#ff8800"

})();
