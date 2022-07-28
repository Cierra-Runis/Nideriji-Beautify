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

    common_css.setAttribute('href', 'https://raw.githubusercontent.com/Cierra-Runis/Nideriji-Beautify/master/beautified_common.css');
    semantic_css.setAttribute('href', 'https://raw.githubusercontent.com/Cierra-Runis/Nideriji-Beautify/master/beautified_semantic.css');
    diary_css.setAttribute('href', 'https://raw.githubusercontent.com/Cierra-Runis/Nideriji-Beautify/master/beautified_diary.css');
    loader_css.setAttribute('href', 'https://raw.githubusercontent.com/Cierra-Runis/Nideriji-Beautify/master/.beautified_loader.css');

})();
