// ==UserScript==
// @name         MAL Title Link to Tokyotosho
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a Tokyotosho search link to the right of MAL Titles
// @author       DeathfireD
// @match        https://myanimelist.net/anime/*
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    var critterCells = $("#contentWrapper .h1 span");

    critterCells.each (function () {
        var jThis       = $(this);
        var critterName = jThis.text ();
        jThis.html (
            '<a href="https://www.tokyotosho.info/search.php?terms=' + critterName + '&type=1 "' + 'target="_blank">' + critterName + '</a>'
        );
    });
})();