(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var p=this||self; 
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var r="closure_uid_"+(1E9*Math.random()>>>0),ba=0,ca=Date.now||function(){return+new Date}; 
function da(){var a=ea;a=(a instanceof t&&a.constructor===t&&a.b===w?a.a:"type_error:SafeScript").toString();if(p.execScript)p.execScript(a,"JavaScript");else if(p.eval){if(null==x){try{p.eval("var _evalTest_ = 1;")}catch(d){}if("undefined"!=typeof p._evalTest_){try{delete p._evalTest_}catch(d){}x=!0}else x=!1}if(x)p.eval(a);else{var b=p.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.head.appendChild(c);b.head.removeChild(c)}}else throw Error("goog.globalEval not available"); 
}var x=null;var fa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ha(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<y.length;f++)c=y[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function z(a,b){this.b=a===A&&b||"";this.a=B}var B={},A={};function t(){this.a="";this.b=w}var w={};function C(a){var b=new t;b.a=a;return b}var ia=C("");function D(a){D[" "](a);return a}D[" "]=function(){};var F=document,G=window;function H(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function I(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{D(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function J(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function ja(a){p.google_image_requests||(p.google_image_requests=[]);var b=p.document.createElement("img");b.src=a;p.google_image_requests.push(b)};var ka=!!window.google_async_iframe_id,K=ka&&window.parent||window;function la(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var ma=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function na(a,b){this.a=a;this.b=b}function oa(a,b){this.url=a;this.g=!!b;this.depth=null};function L(){this.c="&";this.f=!1;this.b={};this.h=0;this.a=[]}function pa(a,b){var c={};c[a]=b;return[c]}function qa(a,b,c,d,e){var f=[];J(a,function(h,g){(h=ra(h,b,c,d,e))&&f.push(g+"="+h)});return f.join(b)} 
function ra(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],h=0;h<a.length;h++)f.push(ra(a[h],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(qa(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function M(a,b,c,d){a.a.push(b);a.b[b]=pa(c,d)} 
function sa(a,b){b+="//pagead2.googlesyndication.com/pagead/gen_204?id=jserror&";var c=ta(a)-27;if(0>c)return"";a.a.sort(function(u,n){return u-n});for(var d=null,e="",f=0;f<a.a.length;f++)for(var h=a.a[f],g=a.b[h],l=0;l<g.length;l++){if(!c){d=null==d?h:d;break}var m=qa(g[l],a.c,",$");if(m){m=e+m;if(c>=m.length){c-=m.length;b+=m;e=a.c;break}a.f&&(e=c,m[e-1]==a.c&&--e,b+=m.substr(0,e),e=a.c,c=0);d=null==d?h:d}}a="";null!=d&&(a=e+"trn="+d);return b+a} 
function ta(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function ua(){var a=void 0===a?G:a;this.b="http:"===a.location.protocol?"http:":"https:";this.a=Math.random()}function va(){var a=N,b=O.google_srt;0<=b&&1>=b&&(a.a=b)}function wa(a,b,c){if(1>(c?a.a:Math.random()))try{if(b instanceof L)var d=b;else d=new L,J(b,function(f,h){var g=d,l=g.h++;f=pa(h,f);g.a.push(l);g.b[l]=f});var e=sa(d,a.b);e&&ja(e)}catch(f){}};var P=null;function xa(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=p.performance,ya=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=ya){var b;if(null===P){P="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function za(){var a=O;this.a=[];this.c=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=R()||(null!=b?b:1>Math.random())}function Aa(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))} 
za.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?p:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=p.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):ca());a=new xa(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};function Ba(){this.c=N;this.a=null;this.b=!1}function S(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var N,T,U;if(ka&&!I(K)){var V="."+F.domain;try{for(;2<V.split(".").length&&!I(K);)F.domain=V=V.substr(V.indexOf(".")+1),K=window.parent}catch(a){}I(K)||(K=window)}var O=K,W=new za;function Ca(){O.google_measure_js_timing||(W.b=!1,W.a!=W.c.google_js_reporting_queue&&(R()&&fa(W.a,Aa),W.a.length=0))} 
(function(){N=new ua;"number"!==typeof O.google_srt&&(O.google_srt=Math.random());va();T=new Ba;T.a=function(b){var c=G.jerExpIds;if("array"==q(c)&&0!==c.length){var d=b.eid;if(d){c=k(d.split(",")).concat(k(c));d={};for(var e=0,f=0;f<c.length;){var h=c[f++];var g=h;var l=typeof g;g="object"==l&&null!=g||"function"==l?"o"+(Object.prototype.hasOwnProperty.call(g,r)&&g[r]||(g[r]=++ba)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(d,g)||(d[g]=!0,c[e++]=h)}c.length=e;b.eid=c.join(",")}else b.eid= 
c.join(",")}U&&(b.jc=U);(c=G.jerUserAgent)&&(b.useragent=c)};T.b=!0;"complete"==O.document.readyState?Ca():W.b&&H(O,"load",function(){Ca()});var a=F.currentScript;U=a?a.dataset.jc:""})(); 
function Da(a,b){var c=a;a=T;try{var d=new L;d.f=!0;M(d,1,"context",535);c.error&&c.meta&&c.id||(c=new la(c,{message:S(c)}));c.msg&&M(d,2,"msg",c.msg.substring(0,512));var e=c.meta||{};if(a.a)try{a.a(e)}catch(E){}if(b)try{b(e)}catch(E){}b=[e];d.a.push(3);d.b[3]=b;e=p;b=[];c=null;do{var f=e;if(I(f)){var h=f.location.href;c=f.document&&f.document.referrer||null}else h=c,c=null;b.push(new oa(h||""));try{e=f.parent}catch(E){e=null}}while(e&&f!=e);h=0;for(var g=b.length-1;h<=g;++h)b[h].depth=g-h;f=p;if(f.location&& 
f.location.ancestorOrigins&&f.location.ancestorOrigins.length==b.length-1)for(g=1;g<b.length;++g){var l=b[g];l.url||(l.url=f.location.ancestorOrigins[g-1]||"",l.g=!0)}var m=new oa(p.location.href,!1);f=null;var u=b.length-1;for(l=u;0<=l;--l){var n=b[l];!f&&ma.test(n.url)&&(f=n);if(n.url&&!n.g){m=n;break}}n=null;var Ea=b.length&&b[u].url;0!=m.depth&&Ea&&(n=b[u]);var v=new na(m,n);v.b&&M(d,4,"top",v.b.url||"");M(d,5,"url",v.a.url||"");wa(a.c,d,a.b)}catch(E){try{wa(a.c,{context:"ecmserr",rctx:535,msg:S(E), 
url:v&&v.a.url},a.b)}catch(Ga){}}};var X,Y=new z(A,"(a=0)=>{let b;const c=class{};}");X=Y instanceof z&&Y.constructor===z&&Y.a===B?Y.b:"type_error:Const";var Z;0===X.length?Z=ia:Z=C(X);var ea=Z;function Fa(a){var b="";a=a||{};a.error?b=S(a.error):b=a.message||"";var c={};if("array"==q(window.jerExpIds)){c.eids=window.jerExpIds.join(",");try{da();var d=!0}catch(e){d=!1}c.es6=d}Da(new la(Error(b),{message:b}),function(e){ha(e,c)})};try{H(G,"error",Fa)}catch(a){};}).call(this);
