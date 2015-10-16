// ==UserScript==
// @name        imgur-capacity
// @namespace   contact-at-thomasmclennan.ca
// @description If Imgur is over-capacity, it displays an "over capacity" page This is not the case for the "i.imgur.com" subdomain.  This plugin redirects the user to the "i" subdomain.
// @include     http://imgur.com/*
// @include     https://imgur.com/*
// @version     1
// @grant       none
// ==/UserScript==

/*The MIT License (MIT)

Copyright (c) 2015 Thomas Mclennan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/*global window, console, alert:false */

// If Imgur is over-capacity, it displays an "over capacity" page
// This is not the case for the "i.imgur.com" subdomain. 
// This plugin redirects the user to the "i" subdomain.

(function () {
    "use strict";
    var location = (window.location + "").split("imgur.com"); //"http://","/xyz"

    //check if https is being used
    var https = (location[0].indexOf("https") > -1);

    //check if on "i" subdomain already
    var i_subdomain = (location[0].indexOf("i.") > -1);

    var new_location = "http";
    if (!i_subdomain) {
        if (https) {
            new_location += "s";
        }
        new_location += "://i.imgur.com" + location[1];

        window.location = new_location;
    }
})();

// imgur will remove the "i" from the domain; however, the page will display
