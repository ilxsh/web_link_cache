WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-insertion-v5', location = 'v5/js/iframe/combined/iframe-insertion.js' */
(function(){function g(a){var b;if("string"===typeof a&&1<a.length)try{b=JSON.parse(a)}catch(c){console.error("ACJS: failed to decode context",a)}"object"!==typeof b&&(b={});return b}function l(a,b){if("number"!==typeof a)return window.top;for(var c=b||window,d=0;d<a;d++)c=c.parent;return c}function h(a,b,c){c=c||100;if("undefined"!==typeof window[a])b(window[a]);else var d=setInterval(function(){"undefined"!==typeof window[a]&&(clearInterval(d),b(window[a]))},c)}function e(a){window._AP.isSubHost=
l(a.hostFrameOffset)!==window;var b=window._AP._convertConnectOptions(a);window._AP.addonAttemptCounter[b.containerId]=0;var c;window._AP.isSubHost?(window.AP&&window.AP._data&&window.AP._data.options&&window.AP._data.options.globalOptions&&(b.options.globalOptions=window.AP._data.options.globalOptions),c=window._AP._createSub(b),f(c,b)):h("connectHost",function(a){m(a,{addon_key:b.addon_key,key:b.key}).forEach(function(c){if(c.extension.options.uniqueKey===b.options.uniqueKey){var d=document.getElementById(c.extension_id);
a.destroy(c.extension_id);d&&AJS.$(d).closest(".ap-iframe-container").remove()}},this);c=a.create(b);f(c,b)})}function f(a,b){var c=document.getElementById(b.containerId);window._AP.addonAttemptCounter[b.containerId]++;if(c)if(delete window._AP.addonAttemptCounter[b.containerId],window._AP.isSubHost){c.appendChild(a);var c=a.contentDocument,d="(function(){ var w \x3d window; for (var i\x3d0; i\x3c"+b.options.hostFrameOffset+"; i++){w \x3d w.parent; } w.postMessage("+JSON.stringify({type:"set_inner_iframe_url",
iframeData:b})+', "*");}());';c.open();c.write("\x3cscript\x3e"+d+"\x3c/script\x3e");c.close()}else{if(d=c.querySelector(".ap-iframe-container"))d.parentNode.removeChild(d),AJS.log&&AJS.log("AJS: duplicate iframe removed",b,c);a.appendTo(c);a.data("addon-key",b.addon_key);a.data("key",b.key)}else 10>=window._AP.addonAttemptCounter[b.containerId]&&n(f)}var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,
50)}}(),m=function(a,b){return a.getExtensions(b).filter(function(a){return!!document.getElementById(a.extension_id)})},k=function(a,b,c){try{var d=require(a);b(d)}catch(p){0>=c?(console.error("Unable to load module: "+a),b(null)):setTimeout(function(){k(a,b,c-1)},500)}};window._AP=window._AP||{};window._AP.addonAttemptCounter=window._AP.addonAttemptCounter||{};window._AP._convertConnectOptions=function(a){var b={url:a.url,ns:a.uniqueKey,addon_key:a.addon_key,key:a.key,containerId:"embedded-"+a.uniqueKey,
options:{history:{state:""},uniqueKey:a.uniqueKey,origin:a.origin,hostOrigin:a.hostOrigin,moduleType:a.moduleType,moduleLocation:a.moduleLocation,isFullPage:"1"===a.general,autoresize:!0,user:{timeZone:a.timeZone,fullName:a.fullName,uid:a.uid,ukey:a.ukey},productContext:g(a.productCtx),structuredContext:g(a.structuredContext),contextJwt:a.contextJwt,contextPath:a.cp,width:a.w||a.width,height:a.h||a.height,targets:{env:{resize:"both"}}}};"string"===typeof a.contentClassifier&&(b.options.contentClassifier=
a.contentClassifier);"number"===typeof a.hostFrameOffset&&(b.options.hostFrameOffset=a.hostFrameOffset+1);window._AP.isSubHost||(b.options.history.state=window.location.hash?window.location.hash.substr(2):"");return b};window._AP._createSub=function(a){var b=document.createElement("iframe"),c=(window.connectHost||window.AP).subCreate(a);c.width=a.options.width||"";c.height=a.options.height||"";c.style="border:0;";c["class"]="ap-iframe";c["data-addon-key"]=a.addon_key;c["data-key"]=a.key;delete c.src;
Object.getOwnPropertyNames(c).forEach(function(a){b.setAttribute(a,c[a])});return b};window._AP.appendConnectAddon=function(a){var b=!1;try{window.top.karma&&(b=!0)}catch(d){}if(window===window.top||b)/com\.atlassian\.(jira|confluence)\.emcee($|\.local|\.staging|\.development\..*)/g.test(a.addon_key)?k("ac/marketplace",function(b){b&&h("connectHost",function(a){a.defineModule("marketplace",b)});e(a)},20):e(a);else{var c=function(b){b.source===window.top&&b.data&&void 0!==b.data.hostFrameOffset&&(window.removeEventListener("message",
c),a.hostFrameOffset=b.data.hostFrameOffset,e(a))};window.addEventListener("message",c);window.top.postMessage({type:"get_host_offset"},"*")}}})();
}catch(e){WRMCB(e)};