(function(){function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function h(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ea(a,b){if(b){var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}var fa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ea("Object.assign",function(a){return a||fa});var p=this||self;function ha(){}function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=ia:v=ja;return v.apply(null,arguments)}var w=Date.now||function(){return+new Date};function y(a,b){function c(){}c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.D=function(d,e,l){for(var f=Array(arguments.length-2),m=2;m<arguments.length;m++)f[m-2]=arguments[m];return b.prototype[e].apply(d,f)}};var z=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"==typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function ka(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function A(){this.a="";this.c=la}A.prototype.f=!0;A.prototype.b=function(){return this.a.toString()};var ma=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function na(a){if(a instanceof A)return a;a="object"==typeof a&&a.f?a.b():String(a);ma.test(a)||(a="about:invalid#zClosurez");return B(a)}var la={};function B(a){var b=new A;b.a=a;return b}B("about:blank");function C(a){C[" "](a);return a}C[" "]=ha;function D(){}var pa="function"==typeof Uint8Array;function E(a,b,c){a.a=null;b||(b=[]);a.j=void 0;a.f=-1;a.b=b;a:{if(b=a.b.length){--b;var d=a.b[b];if(!(null===d||"object"!=typeof d||"array"==r(d)||pa&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.g)d+=a.f,a.b[d]=a.b[d]||F;else{var e=a.g+a.f;a.b[e]||(a.c=a.b[e]={});a.c[d]=a.c[d]||F}}var F=[];function G(a,b){if(b<a.g){b+=a.f;var c=a.b[b];return c===F?a.b[b]=[]:c}if(a.c)return c=a.c[b],c===F?a.c[b]=[]:c}function H(a,b,c){a=G(a,b);return null==a?c:a}function I(a,b){a=G(a,b);a=null==a?a:!!a;return null==a?!1:a}function qa(a){var b=J;a.a||(a.a={});if(!a.a[1]){var c=G(a,1);c&&(a.a[1]=new b(c))}return a.a[1]}function ra(a){var b=sa;a.a||(a.a={});if(!a.a[1]){for(var c=G(a,1),d=[],e=0;e<c.length;e++)d[e]=new b(c[e]);a.a[1]=d}b=a.a[1];b==F&&(b=a.a[1]=[]);return b}D.prototype.toString=function(){return this.b.toString()};function J(a){E(this,a,ta)}y(J,D);function sa(a){E(this,a,null)}y(sa,D);var ta=[1];function ua(a){E(this,a,null)}y(ua,D);var K=document,L=window;function M(){var a=N;try{var b;if(b=!!a&&null!=a.location.href)a:{try{C(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};var va={capture:!0},wa={passive:!0},xa=ka(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",null,b)}catch(c){}return a});function ya(a){return a?a.passive&&xa()?a:a.capture||!1:!1}function O(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,ya(d))};var za=/^((market|itms|intent|itms-appss):\/\/)/i;function Aa(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var Ba=!!window.google_async_iframe_id,N=Ba&&window.parent||window;function Ca(a,b){a&&Aa(b,function(c,d){a.style[d]=c})}function Da(a){for(var b=K.body,c=document.createDocumentFragment(),d=a.length,e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};function Ea(a){a=void 0===a?[]:a;p.google_logging_queue||(p.google_logging_queue=[]);p.google_logging_queue.push([12,a])};function Fa(a,b,c){if("array"==r(b))for(var d=0;d<b.length;d++)Fa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};var P=null;function Ga(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=p.performance,Ha=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=ka(function(){var a;if(a=Ha){var b;if(null===P){P="";try{a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Ia(){var a=S;this.a=[];this.c=a||p;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=R()||(null!=b?b:1>Math.random())}function Ja(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Ia.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?p:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=p.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):w());a=new Ga(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};if(Ba&&!M()){var T="."+K.domain;try{for(;2<T.split(".").length&&!M();)K.domain=T=T.substr(T.indexOf(".")+1),N=window.parent}catch(a){}M()||(N=window)}var S=N,U=new Ia;function Ka(){S.google_measure_js_timing||(U.b=!1,U.a!=U.c.google_js_reporting_queue&&(R()&&z(U.a,Ja),U.a.length=0))}"complete"==S.document.readyState?Ka():U.b&&O(S,"load",function(){Ka()});function La(){return function(a){var b=void 0===b?L:b;b=("http:"===b.location.protocol?"http:":"https:")+"//pagead2.googlesyndication.com/pagead/gen_204";a={id:"unsafeurl",ctx:625,url:a};var c=[];for(d in a)Fa(d,a[d],c);var d=c.join("&");if(d){a=b.indexOf("#");0>a&&(a=b.length);c=b.indexOf("?");if(0>c||c>a){c=a;var e=""}else e=b.substring(c+1,a);b=[b.substr(0,c),e,b.substr(a)];a=b[1];b[1]=d?a?a+"&"+d:d:a;b=b[0]+(b[1]?"?"+b[1]:"")+b[2]}navigator.sendBeacon&&navigator.sendBeacon(b,"")}};function V(){this.b=this.b;this.c=this.c}V.prototype.b=!1;function Ma(a){a.b||(a.b=!0,a.f())}V.prototype.f=function(){if(this.c)for(;this.c.length;)this.c.shift()()};function W(a,b,c){V.call(this);this.g=a;this.u=b||0;this.i=c;this.j=v(this.o,this)}y(W,V);W.prototype.a=0;W.prototype.f=function(){W.C.f.call(this);this.stop();delete this.g;delete this.i};W.prototype.start=function(a){this.stop();var b=this.j;a=void 0!==a?a:this.u;if("function"!=r(b))if(b&&"function"==typeof b.handleEvent)b=v(b.handleEvent,b);else throw Error("Invalid listener argument");this.a=2147483647<Number(a)?-1:p.setTimeout(b,a||0)};W.prototype.stop=function(){0!=this.a&&p.clearTimeout(this.a);this.a=0};W.prototype.o=function(){this.a=0;this.g&&this.g.call(this.i)};function Na(a){O(L,"message",function(b){try{var c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};var Oa={display:"inline-block",position:"absolute"},Pa={display:"none",width:"100%",height:"100%",top:"0",left:"0"};function X(a,b){a&&(a.style.display=(void 0===b?0:b)?"none":"inline-block")}function Y(){this.g=[];this.i=this.b=null;this.A=[];this.a=null;this.u=[];this.f=[];this.j=[];this.o={};this.B=[];this.c=null}Y.prototype.init=function(a){var b=this;Ea([a]);this.a=new ua(a);a=qa(this.a);z(ra(a),function(l){b.j.push({v:0,m:!1,w:0,h:l,s:-1})});try{var c=K.querySelectorAll("*[data-ifc]")}catch(l){c=[]}this.f=c;c=this.f.length;for(a={l:0};a.l<c;a={l:a.l},++a.l){var d=new J(JSON.parse(this.f[a.l].getAttribute("data-ifc")||"[]"));z(ra(d),function(l){return function(f){b.j.push({v:0,m:!1,w:0,h:f,s:l.l})}}(a))}c=!1;a=h(this.j);for(d=a.next();!d.done;d=a.next()){d=d.value;var e=d.h;0<H(e,2,0)&&0<H(e,5,1)?(!this.b&&I(e,9)&&(this.b=Qa(this,Pa)),Ra(this,d)):H(e,1,"")&&I(e,9)&&Sa(this,H(e,1,""));H(e,1,"")&&(c=!0)}a=this.g.slice(0);this.b&&a.push(this.b);K.body&&Da(a);O(K,"click",function(l){for(var f,m=-1,aa=[],oa=h(b.j),t=oa.next();!t.done;t=oa.next()){t=t.value;var g=t.s,k=-1!==g;if(!(H(t.h,3,0)<=m||t.m||k&&!1===aa[g])){var q=!k||aa[g]||b.f[g].contains(l.target);k&&q&&(aa[g]=!0);if(g=q)if(q=l,g=t,k=g.h,0<H(k,2,0)&&0<H(k,5,1))g=b.o[H(k,5,1)],g=void 0!==g&&w()<g+H(k,2,0);else if(H(k,1,"")){k=0<=g.s?b.f[g.s]:K.body;var x=b.c&&I(b.a,12)&&500>q.timeStamp-b.c.timeStamp;x=h(x?[b.c.changedTouches[0].clientX,b.c.changedTouches[0].clientY]:[q.clientX,q.clientY]);q=x.next().value;x=x.next().value;k=k.getBoundingClientRect();var u=parseFloat(K.body.style.zoom||1);u=h([q/u-k.left,x/u-k.top,k.width,k.height]);k=u.next().value;q=u.next().value;x=u.next().value;u=u.next().value;!(0<x&&0<u)||isNaN(k)||isNaN(q)||0>k||0>q?g=!1:(g=Ta(H(g.h,1,"")),g=!(k>=g.left&&x-k>g.right&&q>=g.top&&u-q>g.bottom))}else g=!0;g&&(f=t,m=H(t.h,3,0))}}if(f)switch(m=f.h,H(m,4,1)){case 2:case 3:var n=void 0===n?!1:n;l.preventDefault?l.preventDefault():l.returnValue=!1;n&&l.stopPropagation();n=w();500<n-f.w&&(f.w=n,++f.v);n=f.h;if(H(n,8,0)&&f.v>=H(n,8,0))if(f.m=!0,b.b&&0<H(n,2,0))Ua(b);else if(0<b.g.length&&H(n,1,""))for(n=h(b.g),f=n.next();!f.done;f=n.next())X(f.value,!0);n=m.b;f=h(b.u);for(m=f.next();!m.done;m=f.next())m=m.value,m(l,n)}},va);c&&I(this.a,12)&&O(K,"touchend",function(l){b.c=l},wa)};Y.prototype.registerCallback=function(a){this.u.push(a)};function Sa(a,b){b=Ta(b);var c=H(a.a,9,0);a.g=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(function(d){return Qa(a,d,9019)})}function Z(a,b){if(!b.m){var c=H(b.h,5,1);a.o[c]=w();I(b.h,9)&&(a.A.push(b),Ua(a))}}function Ra(a,b){switch(H(b.h,5,1)){case 2:L.AFMA_Communicator&&L.AFMA_Communicator.addEventListener&&L.AFMA_Communicator.addEventListener("onshow",function(){Z(a,b)});break;case 4:O(K,"DOMContentLoaded",function(){Z(a,b)});break;case 8:Na(function(d){d.rr&&Z(a,b)});break;case 9:if(L.IntersectionObserver){var c=new IntersectionObserver(function(d){d=h(d);for(var e=d.next();!e.done;e=d.next())if(0<e.value.intersectionRatio){Z(a,b);break}});c.observe(K.body);a.B.push(c)}}}function Ua(a){for(var b=0,c=h(a.A),d=c.next();!d.done;d=c.next()){d=d.value;var e=d.h,l=a.o[H(e,5,1)];d.m||void 0===l||(b=Math.max(b,l+H(e,2,0)))}a.i&&Ma(a.i);b-=w();var f=a.b;0<b?(X(f),a.i=new W(function(){X(f,!0)},b),a.i.start()):X(f,!0)}function Qa(a,b,c){var d=K.createElement("DIV");Ca(d,Object.assign(Oa,{"z-index":void 0===c?2147483647:c},b));I(a.a,10)&&O(d,"click",ha);if(I(a.a,11)){a=K.createElement("A");b=La();var e;za.test("#")?e=B("#"):e="#";"about:invalid#zClosurez"===(e instanceof A?e:na(e)).b()&&b(String(e));e=e instanceof A?e:na(e);a.href=e instanceof A&&e.constructor===A&&e.c===la?e.a:"type_error:SafeUrl";a.appendChild(d);return a}return d}function Ta(a){a=void 0===a?"":a;var b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4==a.length&&a.reduce(function(c,d){return c&&!isNaN(d)},!0)&&(a=h(a.map(function(c){return+c})),b.top=a.next().value,b.right=a.next().value,b.bottom=a.next().value,b.left=a.next().value));return b};window.googqscp=new Y;}).call(this);
