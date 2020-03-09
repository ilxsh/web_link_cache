(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function m(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var q;a:{var ca={o:!0},da={};try{da.__proto__=ca;q=da.o;break a}catch(a){}q=!1}n=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=n,r=this||self;
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var ha=Date.now||function(){return+new Date};function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,d=0;d<c;d++)d in e&&b.call(void 0,e[d],d,a)};function w(a,b){this.b=a===x&&b||"";this.c=ka}w.prototype.f=!0;w.prototype.a=function(){return this.b.toString()};var la=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function ma(a){if(a instanceof w)return a;a="object"==typeof a&&a.f?a.a():String(a);la.test(a)||(a="about:invalid#zClosurez");return new w(x,a)}var ka={},x={};function y(a){y[" "](a);return a}y[" "]=function(){};var na={},z=null;function A(){}var oa="function"==typeof Uint8Array;function B(a,b,c){a.b=null;b||(b=[]);a.u=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var e=a.a[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||oa&&e instanceof Uint8Array)){a.h=b-a.f;a.c=e;break a}}a.h=Number.MAX_VALUE}a.g={};if(c)for(b=0;b<c.length;b++)if(e=c[b],e<a.h)e+=a.f,a.a[e]=a.a[e]||C;else{var d=a.h+a.f;a.a[d]||(a.c=a.a[d]={});a.c[e]=a.c[e]||C}}var C=[];
function D(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===C?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===C?a.c[b]=[]:c}function E(a,b,c){a=D(a,b);return null==a?c:a}function F(a,b){a=D(a,b);a=null==a?a:!!a;return null==a?!1:a}function pa(a,b,c){a.b||(a.b={});if(!a.b[c]){var e=D(a,c);e&&(a.b[c]=new b(e))}return a.b[c]}function G(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var e=D(a,c),d=[],g=0;g<e.length;g++)d[g]=new b(e[g]);a.b[c]=d}b=a.b[c];b==C&&(b=a.b[c]=[]);return b}
A.prototype.s=oa?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!z){z={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],d=0;5>d;d++){var g=c.concat(e[d].split(""));na[d]=g;for(var f=0;f<g.length;f++){var h=g[f];void 0===z[h]&&(z[h]=f)}}}b=na[b];c=[];for(e=0;e<this.length;e+=3){var k=this[e],l=(d=e+1<this.length)?this[e+1]:0;h=(g=e+2<this.length)?this[e+2]:0;f=k>>2;
k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;g||(h=64,d||(l=64));c.push(b[f],b[k],b[l]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,qa)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,qa)};function qa(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}A.prototype.toString=function(){return this.a.toString()};function ra(a){B(this,a,null)}v(ra,A);var sa=document,H=window;function ta(a,b,c){if(Array.isArray(b))for(var e=0;e<b.length;e++)ta(a,String(b[e]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function ua(a,b){var c=[];for(e in b)ta(e,b[e],c);b=c.join("&");if(b){c=a.indexOf("#");0>c&&(c=a.length);var e=a.indexOf("?");if(0>e||e>c){e=c;var d=""}else d=a.substring(e+1,c);a=[a.substr(0,e),d,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a};function I(){var a=J;try{var b;if(b=!!a&&null!=a.location.href)a:{try{y(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};var va=/^((market|itms|intent|itms-appss):\/\/)/i;function K(a,b,c){b=b instanceof w||!va.test(b)?b:new w(x,b);"about:invalid#zClosurez"===(b instanceof w?b:ma(b)).a()&&c(String(b));c=b instanceof w?b:ma(b);a.href=c instanceof w&&c.constructor===w&&c.c===ka?c.b:"type_error:SafeUrl"}function wa(){var a=(xa()?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";return function(b){b=ua(a,{id:"unsafeurl",ctx:599,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};function xa(){var a=void 0===a?H:a;return"http:"===a.location.protocol}var ya=!!window.google_async_iframe_id,J=ya&&window.parent||window;var L=null;function za(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var M=r.performance,Aa=!!(M&&M.mark&&M.measure&&M.clearMarks),N=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Aa){var b;if(null===L){L="";try{a="";try{a=r.top.location.hash}catch(c){a=r.location.hash}a&&(L=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=L;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function Ba(){var a=O;this.a=[];this.c=a||r;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=N()||(null!=b?b:1>Math.random())}function Ca(a){a&&M&&N()&&(M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
Ba.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?r:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=r.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):ha());a=new za(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";M&&N()&&M.mark(b);return a};if(ya&&!I()){var P="."+sa.domain;try{for(;2<P.split(".").length&&!I();)sa.domain=P=P.substr(P.indexOf(".")+1),J=window.parent}catch(a){}I()||(J=window)}var O=J,Q=new Ba;function Da(){O.google_measure_js_timing||(Q.b=!1,Q.a!=Q.c.google_js_reporting_queue&&(N()&&ia(Q.a,Ca),Q.a.length=0))}"number"!==typeof O.google_srt&&(O.google_srt=Math.random());if("complete"==O.document.readyState)Da();else if(Q.b){var Ea=function(){Da()},Fa=O;Fa.addEventListener&&Fa.addEventListener("load",Ea,!1)};function Ga(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{l:a.slice(0,b)+"&act=1"+a.slice(b),m:decodeURIComponent(c[1])}}catch(d){return null}}if(0<a.indexOf("&ae=2")){c=a;var e="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),e=a.slice(b)));return{l:c+"&act=1"+e,m:c+"&dct=1"+e}}return null};function Ha(a){var b=Ia(a.href),c=b.i;K(a,b.j,wa());return c}function Ia(a){var b=Ga(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(R(b.l,"&ri=1"),"")?{j:b.m,i:!0}:{j:R(a,"&ri=2"),i:!1}:{j:R(a,"&ri=16"),i:!1}:{j:a,i:!1}}function R(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)}function Ja(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==Ga(a)};function S(){}S.prototype.f=function(){};function Ka(a){B(this,a,null)}v(Ka,A);function La(a){B(this,a,Ma)}v(La,A);var Ma=[1];function Na(a){B(this,a,Oa)}v(Na,A);var Oa=[1,2];function Pa(a){B(this,a,null)}v(Pa,A);function Qa(){this.a=NaN}function Ra(a,b){!isNaN(b)&&0<b&&(isNaN(a.a)||a.a<b)&&(a.a=b)}
function Sa(a,b,c){var e=pa(b,Na,4);if(!e)return!0;for(var d=m(G(e,La,1)),g=d.next();!g.done;g=d.next()){a:{var f=g.value;g=c;var h=E(f,2,"");h=h?document.querySelectorAll(h):[g.currentTarget];for(var k=0;k<h.length;++k){var l=h[k].getBoundingClientRect();var p=f;var t=D(p,1);p.g||(p.g={});if(!p.g[1]){for(var u=0;u<t.length;u++)t[u]=+t[u];p.g[1]=!0}p=t;t=g.clientX;u=g.clientY;if(t>=l.left&&t<=l.right&&u>=l.top&&u<=l.bottom&&(u-p[0]<l.top||t+p[1]>l.right||u+p[2]>l.bottom||t-p[3]<l.left)){f=!1;break a}}f=
!0}if(!f)return T(b,"blocked_border_click"),!1}d=m(G(e,Ka,2));for(g=d.next();!g.done;g=d.next())if(f=a,g=g.value,h=c.currentTarget,Ra(f,parseInt(h.getAttribute("data-on-ready-ts"),10)),Ra(f,parseInt(h.getAttribute("data-on-show-ts"),10)),h=f.a,isNaN(h)||!(0<h)||ha()<f.a+E(g,1,0))return T(b,"blocked_fast_click"),!1;return F(e,3)&&"function"==typeof r.copfcChm?(r.copfcChm(c),T(b,"onepointfiveclick_first_click"),!1):!0}
function T(a,b){if(a=E(a,5,"")){H.google_image_requests||(H.google_image_requests=[]);var c=H.document.createElement("img");c.src=a+"&label="+b;H.google_image_requests.push(c)}};function U(a){return function(b){b=ua("https://pagead2.googlesyndication.com/pagead/gen_204",{id:"unsafeurl",ctx:a,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};function V(a,b){a.dispatchEvent(new CustomEvent("customError",{detail:{message:b}}))}
function W(a){var b=a.currentTarget,c=a.type;null!=a.clientX&&null!=a.clientY&&(c+=" ["+a.clientX+","+a.clientY+"]");a=a.target;for(var e=!1,d=!1,g=!1;a!=b;){for(var f=a.attributes,h=0;h<f.length;++h){var k=f[h];!e&&k.name.match(/^x-.+-l$/)?(c="[l="+k.value+"]"+c,e=!0):!d&&k.name.match(/^x-.+-v$/)?(c="[v="+k.value+"]"+c,d=!0):!g&&k.name.match(/^x-.+-e$/)&&(c="[e="+k.value+"]"+c,g=!0)}f=a.parentElement||b;if(!g)for(h=f.children,k=0;k<h.length;k++)if(h[k]==a){c=">"+k+c;break}a=f}return c};function Ta(){this.a=!1}function Ua(a,b){a.a=b}function Va(a){for(;!a.id;){var b="goog-js-util-"+Math.random().toString(36).substr(2,5);if(!document.getElementById(b)){a.id=b;break}}return a.id};function Wa(a){B(this,a,Xa)}v(Wa,A);var Xa=[1];function X(){this.a=null;this.h=new Qa;this.g=new Ta;this.b=!1;this.c=-1}X.prototype=ba(S.prototype);X.prototype.constructor=X;if(ea)ea(X,S);else for(var Y in S)if("prototype"!=Y)if(Object.defineProperties){var Ya=Object.getOwnPropertyDescriptor(S,Y);Ya&&Object.defineProperty(X,Y,Ya)}else X[Y]=S[Y];
X.prototype.f=function(a){a:{var b=a.getElementsByTagName("META");for(var c=0;c<b.length;++c)if("exit"===b[c].getAttribute("name")){b=b[c].getAttribute("content");break a}b=""}if(this.a=b?new Wa(b?JSON.parse(b):null):null){b=F(this.a,7);b=void 0===b?!1:b;c=Date.now();if(!isNaN(c)&&0<c){var e=parseInt(a.getAttribute("data-on-ready-ts"),10);!b&&!isNaN(e)&&0<e||a.setAttribute("data-on-ready-ts",c)}Za(this,this.a,a);this.b||(this.b=!0,$a(this,a))}};
function Za(a,b,c){Ua(a.g,F(b,2));F(b,4)&&c.setAttribute("data-use-custom-tabs-in-sdk","true");if(E(b,5,""))for(a=c.querySelectorAll(E(b,5,"")),b=0;b<a.length;++b)a[b].addEventListener("click",function(){})}
function $a(a,b){var c=null,e=null;b.addEventListener("mousedown",function(d){for(var g=d.currentTarget,f=d.target;f!=g.parentElement&&"A"!=f.tagName;)f=f.parentElement;c=f==g.parentElement?null:f;a:{if(null!=a.a){g=d.currentTarget;f=d.target;if(F(a.a,2)&&1==f.children.length&&"SPAN"==f.children[0].tagName){var h=f.children[0],k=h.getBoundingClientRect();k.left<=d.clientX&&d.clientX<=k.right&&k.top<=d.clientY&&d.clientY<=k.bottom&&(f=h)}for(h=G(a.a,Pa,1);f!=g.parentElement;){f.matches=f.matches||
f.webkitMatchesSelector||f.mozMatchesSelector||f.msMatchesSelector||f.oMatchesSelector;for(k=0;k<h.length;++k){var l=h[k];if(f.matches(E(l,1,""))){e=l;break a}}f=f.parentElement}}e=null}if(c&&e&&E(e,2,"")){f=e;g=c;if(h=E(f,2,""))K(g,h,U(618)),g.target=E(f,3,"")||"_top";g.removeAttribute("data-u2-final-url");g.removeAttribute("data-u2-tracking-url");(h=E(f,6,""))&&g.setAttribute("data-u2-final-url",h);(h=E(f,7,""))&&g.setAttribute("data-u2-tracking-url",h);g.removeAttribute("data-app-click-info");
(f=pa(f,ra,9))&&g.setAttribute("data-app-click-info",f.s());g=d.currentTarget;"function"==fa(window.st)?window.st(Va(c)):V(g,"js-util: st() missing: "+W(d));F(a.a,6)&&c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN",{bubbles:!0}))}});b.addEventListener("click",function(d){if(c&&e&&E(e,2,"")&&Sa(a.h,e,d)&&!d.defaultPrevented){var g=a.g,f=c,h=d.currentTarget;if("function"==fa(window.ja)){a:{h=d.currentTarget;var k=d.target;if(g.a&&1==k.children.length&&"SPAN"==k.children[0].tagName){g=k.children[0];
var l=g.getBoundingClientRect();l.left<=d.clientX&&d.clientX<=l.right&&l.top<=d.clientY&&d.clientY<=l.bottom&&(k=g)}for(;k!=h;){g=k.getAttribute("x-code");if(null!=g){h=parseInt(g,10);break a}k=k.parentElement}h=17}g=h;window.ja(Va(f),g);h=d.currentTarget;(k=f.href)?(l=[],0==/&nb=[^&]+/i.test(k)&&l.push("&nb="+g),0==/&nx=[^&]+/i.test(k)&&l.push("&nx="+Math.round(d.clientX-h.offsetLeft)),0==/&ny=[^&]+/i.test(k)&&l.push("&ny="+Math.round(d.clientY-h.offsetTop)),0<l.length&&(g=l.join(""),l=k.indexOf("&adurl="),
k=0>l?k+g:k.substring(0,l)+g+k.substring(l),K(f,k,U(620)),V(h,"js-util: ja() filling: "+g+" "+W(d)))):V(h,"js-util: href is empty: "+W(d))}else V(h,"js-util: ja() missing: "+W(d));f=c;h=E(e,2,"");k=h.indexOf("&adurl=");0>k||(h=h.slice(k),k=f.href||"",g=k.indexOf(h),0>g||(l=k.slice(g+h.length))&&K(f,k.slice(0,g)+l+h,U(619)));if(F(a.a,6))c.dispatchEvent(new CustomEvent("CUSTOM_CLICK",{bubbles:!0})),d.stopImmediatePropagation(),d.preventDefault();else{d=c;if(d=(Ja(d.href)||(d.getAttribute("data-orig-async-clicktrack-url")?
Ja(d.getAttribute("data-orig-async-clicktrack-url")):!1))&&F(e,8))d=c,f=F(e,10),h=a.c,f?300>Date.now()-(void 0===h?-1:h)?d=!1:(f=d.getAttribute("data-orig-async-clicktrack-url"))?(f=Ia(f),h=f.i,K(d,f.j,wa()),d=h):(d.setAttribute("data-orig-async-clicktrack-url",d.href),d=Ha(d)):d=Ha(d);d&&(a.c=Date.now())}}else d.stopImmediatePropagation(),d.preventDefault()})};var Z=document.getElementById("mys-content");if(Z){var ab=new X;Z.addEventListener("browserReady",function(){ab.f(Z)})};}).call(this);
