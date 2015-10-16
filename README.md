# imgur-capacity
Bypass the "Imgur is over-capacity" page. If Imgur is over-capacity, it displays an "over capacity" page This is not the case for the "i.imgur.com" subdomain.  This plugin redirects the user to the "i" subdomain.

## Installation
Install one of the following: 
* [TamperMonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) (Chrome), 
* [GreaseMonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) (Firefox), 
* [OilCan](http://oilcan.jsharkey.org/) (Android)

On iOs, you should be able to create a bookmark with the following contents (untested)

  	javascript:!function(){"use strict";var i=(window.location+"").split("imgur.com"),t=i[0].indexOf("https")>-1,o=i[0].indexOf("i.")>-1,n="http";o||(t&&(n+="s"),n+="://i.imgur.com"+i[1],window.location=n)}();
  	kappa();

add the plugin.js file to your browser-extension and you should be good to go!
