(function(){function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function ba(a){if(!(a instanceof Array)){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(var c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ia={};try{ia.__proto__=fa;ea=ia.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da;function ka(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}var l=this||self,la=/^[\w+/_-]+[=]{0,2}$/,n=null;function ma(){}function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){return"function"==p(a)}function r(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var na="closure_uid_"+(1E9*Math.random()>>>0),oa=0;function pa(a,b,c){return a.call.apply(a.bind,arguments)}function qa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=pa:t=qa;return t.apply(null,arguments)}var ra=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(w,Error);w.prototype.name="CustomError";var sa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ta=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function ua(a,b){this.h=a===va&&b||"";this.g=wa}var wa={},va={},x=new ua(va,"");function y(a,b,c){this.j=a===xa&&b||"";this.g=a===xa&&c||null;this.h=ya}function za(a){if(a instanceof y&&a.constructor===y&&a.h===ya)return a.j;p(a);return"type_error:TrustedResourceUrl"}var ya={},xa={};var A;a:{var Aa=l.navigator;if(Aa){var Ba=Aa.userAgent;if(Ba){A=Ba;break a}}A=""};function Ca(){this.g="";this.h=Da}function Fa(){var a=Ga;if(a instanceof Ca&&a.constructor===Ca&&a.h===Da)return a.g;p(a);return"type_error:SafeHtml"}var Da={};function Ha(a){var b=new Ca;b.g=a;return b}Ha("<!DOCTYPE html>");var Ga=Ha("");Ha("<br>");function Ia(a){var b=new y(xa,x instanceof ua&&x.constructor===ua&&x.g===wa?x.h:"type_error:Const",null);a.src=b.g?b.g:za(b).toString()};function Ja(a){Ja[" "](a);return a}Ja[" "]=ma;var Ka=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE");function La(){}var Ma="function"==typeof Uint8Array;function Na(a,b,c){a.h=null;b||(b=[]);a.u=void 0;a.l=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(null!==d&&"object"==typeof d&&"array"!=p(d)&&!(Ma&&d instanceof Uint8Array)){a.m=b-a.l;a.j=d;break a}}a.m=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.m)d+=a.l,a.g[d]=a.g[d]||Oa;else{var e=a.m+a.l;a.g[e]||(a.j=a.g[e]={});a.j[d]=a.j[d]||Oa}}var Oa=[];function B(a,b){if(b<a.m){b+=a.l;var c=a.g[b];return c===Oa?a.g[b]=[]:c}if(a.j)return c=a.j[b],c===Oa?a.j[b]=[]:c}function C(a,b,c){a=B(a,b);return null==a?c:a}function D(a,b){a=B(a,b);a=null==a?a:!!a;return null==a?!1:a}function Pa(a){var b=Qa;a.h||(a.h={});if(!a.h[1]){var c=B(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}function Ra(a){if(a.h)for(var b in a.h){var c=a.h[b];if("array"==p(c))for(var d=0;d<c.length;d++)c[d]&&Ra(c[d]);else c&&Ra(c)}}La.prototype.toString=function(){Ra(this);return this.g.toString()};function Qa(a){Na(this,a,Sa)}u(Qa,La);var Sa=[28];function Ta(a){Na(this,a,Ua)}u(Ta,La);var Ua=[21];function E(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function Va(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Wa(b,a)[0]||null);return a||null}function Wa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=sa(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e}function Xa(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}function Ya(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function Za(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ja(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function $a(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function F(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var ab=/^true$/.test("false"),bb=/^true$/.test("true");var G=document,H=window;function I(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function cb(a,b){a.removeEventListener&&a.removeEventListener("message",b,!1)};function db(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};function eb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var fb=!!window.google_async_iframe_id,J=fb&&window.parent||window;function gb(a){try{var b=H;a=a||H;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1}function K(a,b){a&&eb(b,function(c,d){a.style[d]=c})};function hb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var ib=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function jb(a,b){this.g=a;this.h=b}function kb(a,b){this.url=a;this.N=!!b;this.depth=null};function lb(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]}function mb(a,b){var c={};c[a]=b;return[c]}function nb(a,b,c,d,e){var f=[];$a(a,function(g,h){(g=ob(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}function ob(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(ob(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(nb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function pb(a,b,c,d){a.g.push(b);a.h[b]=mb(c,d)}function qb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=rb(a)-c.length;if(0>d)return"";a.g.sort(function(v,P){return v-P});c=null;for(var e="",f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],k=0;k<h.length;k++){if(!d){c=null==c?g:c;break}var m=nb(h[k],a.j,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.j;break}a.l&&(e=d,m[e-1]==a.j&&--e,b+=m.substr(0,e),e=a.j,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function rb(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};function sb(){var a=void 0===a?H:a;this.g="http:"===a.location.protocol?"http:":"https:";this.h=Math.random()}function tb(){var a=ub,b=L.google_srt;0<=b&&1>=b&&(a.h=b)}function vb(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof lb)var e=c;else e=new lb,$a(c,function(g,h){var k=e,m=k.m++;g=mb(h,g);k.g.push(m);k.h[m]=g});var f=qb(e,a.g,"/pagead/gen_204?id="+b+"&");f&&db(l,f)}catch(g){}};var wb=null;function xb(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ra()}function yb(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function zb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var M=l.performance,Ab=!!(M&&M.mark&&M.measure&&M.clearMarks),N=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=Ab){var b;if(null===wb){wb="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(wb=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=wb;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Bb(){var a=L;this.h=[];this.j=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=N()||(null!=b?b:1>Math.random())}function Cb(a){a&&M&&N()&&(M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}Bb.prototype.start=function(a,b){if(!this.g)return null;var c=yb()||xb();a=new zb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";M&&N()&&M.mark(b);return a};function Db(){var a=Eb;this.l=ub;this.h=null;this.m=this.j;this.g=void 0===a?null:a}function Fb(a,b,c){try{if(a.g&&a.g.g){var d=a.g.start(b.toString(),3);var e=c();var f=a.g;c=d;if(f.g&&"number"===typeof c.value){var g=yb()||xb();c.duration=g-c.value;var h="goog_"+c.label+"_"+c.uniqueId+"_end";M&&N()&&M.mark(h);!f.g||2048<f.h.length||f.h.push(c)}}else e=c()}catch(k){f=!0;try{Cb(d),f=a.m(b,new hb(k,{message:Gb(k)}),void 0,void 0)}catch(m){a.j(217,m)}if(!f)throw k;}return e}function Hb(a,b){var c=Ib;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return Fb(c,a,function(){return b.apply(void 0,e)})}}Db.prototype.j=function(a,b,c,d,e){e=e||"jserror";try{var f=new lb;f.l=!0;pb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new hb(b,{message:Gb(b)}));b.msg&&pb(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.h)try{this.h(g)}catch(ha){}if(d)try{d(g)}catch(ha){}b=[g];f.g.push(3);f.h[3]=b;d=l;b=[];g=null;do{var h=d;if(Za(h)){var k=h.location.href;g=h.document&&h.document.referrer||null}else k=g,g=null;b.push(new kb(k||""));try{d=h.parent}catch(ha){d=null}}while(d&&h!=d);k=0;for(var m=b.length-1;k<=m;++k)b[k].depth=m-k;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var v=b[m];v.url||(v.url=h.location.ancestorOrigins[m-1]||"",v.N=!0)}var P=new kb(l.location.href,!1);h=null;var Ea=b.length-1;for(v=Ea;0<=v;--v){var z=b[v];!h&&ib.test(z.url)&&(h=z);if(z.url&&!z.N){P=z;break}}z=null;var zc=b.length&&b[Ea].url;0!=P.depth&&zc&&(z=b[Ea]);var R=new jb(P,z);R.h&&pb(f,4,"top",R.h.url||"");pb(f,5,"url",R.g.url||"");vb(this.l,e,f,c)}catch(ha){try{vb(this.l,e,{context:"ecmserr",rctx:a,msg:Gb(ha),url:R&&R.g.url},c)}catch(cd){}}return!0};function Gb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var ub,Ib,Jb;if(fb&&!Za(J)){var Kb="."+G.domain;try{for(;2<Kb.split(".").length&&!Za(J);)G.domain=Kb=Kb.substr(Kb.indexOf(".")+1),J=window.parent}catch(a){}Za(J)||(J=window)}var L=J,Eb=new Bb;function Lb(){if(!L.google_measure_js_timing){var a=Eb;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(N()&&ta(a.h,Cb),a.h.length=0)}}(function(){ub=new sb;"number"!==typeof L.google_srt&&(L.google_srt=Math.random());tb();Ib=new Db;Ib.h=function(b){var c=H.jerExpIds;if("array"==p(c)&&0!==c.length){var d=b.eid;if(d){c=ba(d.split(",")).concat(ba(c));d={};for(var e=0,f=0;f<c.length;){var g=c[f++];var h=g;h=r(h)?"o"+(h[na]||(h[na]=++oa)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,c[e++]=g)}c.length=e;b.eid=c.join(",")}else b.eid=c.join(",")}Jb&&(b.jc=Jb);(c=H.jerUserAgent)&&(b.useragent=c)};"complete"==L.document.readyState?Lb():Eb.g&&I(L,"load",function(){Lb()});var a=G.currentScript;Jb=a?a.dataset.jc:""})();function O(a,b){return Hb(a,b)};function Mb(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null}function Nb(){this.referenceFrameArray=[]}function Ob(a){return{referenceFrameArray:a.referenceFrameArray.map(function(b){return{xOffset:b.xOffset,yOffset:b.yOffset,height:b.height,width:b.width}})}}function Pb(a){var b=void 0===b?new Nb:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===l.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===l.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new Mb(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(k){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};function Qb(a,b){this.j=a;this.l=b;this.h=0;this.g=null}Qb.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};function Rb(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function Sb(a){l.setTimeout(function(){throw a;},0)}var Tb;function Ub(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==A.indexOf("Presto")&&(a=function(){var e=Xa("IFRAME");e.style.display="none";Ia(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Fa());e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&-1==A.indexOf("Trident")&&-1==A.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.M;c.M=null;e()}};return function(e){d.next={M:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Xa("SCRIPT")?function(e){var f=Xa("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function Vb(){this.h=this.g=null}var Xb=new Qb(function(){return new Wb},function(a){a.reset()});Vb.prototype.add=function(a,b){var c=Xb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function Yb(){var a=Zb,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function Wb(){this.next=this.h=this.g=null}Wb.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};Wb.prototype.reset=function(){this.next=this.h=this.g=null};function $b(a,b){ac||bc();cc||(ac(),cc=!0);Zb.add(a,b)}var ac;function bc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);ac=function(){a.then(dc)}}else ac=function(){var b=dc,c;!(c=!q(l.setImmediate))&&(c=l.Window&&l.Window.prototype)&&(c=-1==A.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate);c?(Tb||(Tb=Ub()),Tb(b)):l.setImmediate(b)}}var cc=!1,Zb=new Vb;function dc(){for(var a;a=Yb();){try{a.g.call(a.h)}catch(b){Sb(b)}Rb(Xb,a)}cc=!1};function Q(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=ma)try{var b=this;a.call(void 0,function(c){S(b,2,c)},function(c){S(b,3,c)})}catch(c){S(this,3,c)}}function ec(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1}ec.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var fc=new Qb(function(){return new ec},function(a){a.reset()});function gc(a,b,c){var d=fc.get();d.j=a;d.h=b;d.context=c;return d}function hc(){var a,b=new Q(function(c){a=c});return new ic(b,a)}Q.prototype.then=function(a,b,c){return jc(this,q(a)?a:null,q(b)?b:null,c)};Q.prototype.$goog_Thenable=!0;Q.prototype.cancel=function(a){if(0==this.g){var b=new T(a);$b(function(){kc(this,b)},this)}};function kc(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?kc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):lc(c),mc(c,e,3,b)))}a.j=null}else S(a,3,b)}function nc(a,b){a.h||2!=a.g&&3!=a.g||oc(a);a.l?a.l.next=b:a.h=b;a.l=b}function jc(a,b,c,d){var e=gc(null,null,null);e.g=new Q(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof T?g(h):f(k)}catch(m){g(m)}}:g});e.g.j=a;nc(a,e);return e.g}Q.prototype.w=function(a){this.g=0;S(this,2,a)};Q.prototype.A=function(a){this.g=0;S(this,3,a)};function S(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof Q){nc(d,gc(e||ma,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(r(d))try{var k=d.then;if(q(k)){pc(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,oc(a),3!=b||c instanceof T||qc(a,c))}}function pc(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function oc(a){a.o||(a.o=!0,$b(a.v,a))}function lc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}Q.prototype.v=function(){for(var a;a=lc(this);)mc(this,a,this.g,this.u);this.o=!1};function mc(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,rc(b,c,d);else try{b.l?b.j.call(b.context):rc(b,c,d)}catch(e){sc.call(null,e)}Rb(fc,b)}function rc(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)}function qc(a,b){a.m=!0;$b(function(){a.m&&sc.call(null,b)})}var sc=Sb;function T(a){w.call(this,a)}u(T,w);T.prototype.name="cancel";function ic(a,b){this.h=a;this.g=b};function U(){this.h=this.h;this.w=this.w}U.prototype.h=!1;U.prototype.g=function(){if(this.w)for(;this.w.length;)this.w.shift()()};function tc(a){var b=[];uc(new vc,a,b);return b.join("")}function vc(){}function uc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==p(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),uc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),wc(d,c),c.push(":"),uc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":wc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var xc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function wc(a,b){b.push('"',a.replace(yc,function(c){var d=xc[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),xc[c]=d);return d}),'"')};function V(a,b,c,d,e,f){U.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.A=t(this.H,this);this.F=f}ka(V,U);V.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(r(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,Ac(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if("string"===typeof a&&("string"===typeof b||r(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};function Ac(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(tc(b),a.m)}V.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&Ac(this)}catch(a){}window.setTimeout(t(this.D,this),50)}};V.prototype.connect=function(a){a&&(this.u=a);I(window,"message",this.A);this.I&&this.D()};function Bc(a,b,c){a.B[b]=c}V.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(tc(c),this.m)}catch(d){}};V.prototype.g=function(){this.status=3;cb(window,this.A);U.prototype.g.call(this)};function Cc(a,b,c,d,e){V.call(this,a,b,c,d);this.C=e}ka(Cc,V);Cc.prototype.l=function(a,b){Dc(this,a,b)};function Ec(a,b){var c=new Q(function(d,e){l.setTimeout(function(){return e(Error("apmc:nocon"))},4E3);Ka?l.setTimeout(function(){return a.connect(d)},0):a.connect(d)});c.then(function(){return a.A(b)},function(){});return c}function Dc(a,b,c){c=void 0===c?{}:c;var d={},e=(d.c=a.o,d.i=a.v,d.s=b,d.p=c,d);a.C&&(e.msg_type=a.C);Ka?l.setTimeout(function(){a.j.postMessage(JSON.stringify(e),a.m)},0):a.j.postMessage(JSON.stringify(e),a.m)}function Fc(a,b){return new Q(function(c,d){l.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new Cc(f,a.source,a.origin,!0);Ec(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};function Gc(a,b){U.call(this);var c=this;this.v=a;this.o=null;this.m=hc();this.l=!1;this.u=b;this.j=O(276,function(d){return Hc(c,d)})}ka(Gc,U);function Ic(a){var b={};b=(b.msg_type=a.v,b);I(H,"message",a.j);a=H.top;b.googMsgType="sth";a.postMessage(tc(b),"*")}function Hc(a,b){gb(b.source)&&!a.l&&(a.l=!0,Fc(b,a.u).then(function(c){cb(H,a.j);a.o=c;a.m.g&&a.m.g(c)},function(){a.l=!1}))}Gc.prototype.g=function(){cb(H,this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}U.prototype.g.call(this)};function Jc(a){if(a.classList)return a.classList;a=a.className;return"string"===typeof a&&a.match(/\S+/g)||[]}function W(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=sa(Jc(a),b))||(a.className+=0<a.className.length?" "+b:b)};function Kc(a){this.g=(this.serializedAttributionData=a)?new Ta(a):null;this.isMutableImpression=null!=B(this.g,1)&&!!D(Pa(this.g),33);this.S=C(this.g,30,"")||"";this.Z=!!D(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=B(this.g,1);this.R=!!D(this.g,4);this.V=!!D(this.g,6);this.G=!!D(this.g,13);C(this.g,8,0);this.creativeIndexSuffix=1<C(this.g,8,0)?C(this.g,7,0).toString():"";this.$=!!D(this.g,17);this.Y=!!D(this.g,18);this.P=!!D(this.g,14);this.H=!!D(this.g,15);D(this.g,5);this.W=1==D(this.g,9);this.openAttributionInline=1==D(this.g,10);this.isMobileDevice=!!D(this.g,12);this.L=null;this.U=(a=G.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.J=""!==this.creativeIndexSuffix)&&void 0===H.goog_multislot_cache&&(H.goog_multislot_cache={});if(this.J&&!this.U){if(a=H.goog_multislot_cache.hd,void 0===a){a=!1;var b=G.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.I=a;this.w=E("abgcp"+this.creativeIndexSuffix);this.C=E("abgc"+this.creativeIndexSuffix);this.h=E("abgs"+this.creativeIndexSuffix);this.B=E("abgl"+this.creativeIndexSuffix);this.u=E("abgb"+this.creativeIndexSuffix);this.F=E("abgac"+this.creativeIndexSuffix);E("mute_panel"+this.creativeIndexSuffix);this.D=Va("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.D&&!!this.P&&!Va("goog_delegate_disabled")&&!this.H;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.X="left"==this.S;this.m=this.isDelegateAttributionActive?this.D:E("cbb"+this.creativeIndexSuffix);this.T=this.I?"0"===this.creativeIndexSuffix:!0;if(a=!!this.m)a=this.m,a=a.classList?a.classList.contains("goog_dismissable_menu"):0<=sa(Jc(a),"goog_dismissable_menu");this.enableDelegateDismissableMenu=a;this.o=null;this.K=0;this.j=this.isDelegateAttributionActive?this.D:this.V&&this.w?this.w:this.C;this.A=null;this.v=H;this.O=!!D(this.g,19);this.adbadgeEnabled=!!D(this.g,24);this.enableNativeSurveyLoadIndicator=!!D(this.g,25);D(this.g,26);this.enableNativeJakeUi=!!D(this.g,27);this.isPoliticalAd=!!D(this.g,29)};function Lc(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};function Mc(a,b){var c=this;this.g=a;this.h=b;this.g.$||(this.o=!1,this.l=this.m=this.j=null,!this.g.I||this.g.adbadgeEnabled||this.g.T?Nc(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(K(this.g.u,a),K(this.g.h,a),K(this.g.w,b),K(this.g.C,b)):K(this.g.C,a)),Oc(this),this.g.enableNativeJakeUi&&this.g.enableNativeSurveyLoadIndicator&&W(this.g.F,"abgnac"),this.g.isDelegateAttributionActive?(W(document.body,"goog_delegate_active"),W(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.m&&Ya(this.g.m),this.m=setTimeout(function(){W(document.body,"jar")},this.g.G?750:100)),this.g.H&&W(document.body,"goog_delegate_disabled"),this.g.O&&H.addEventListener("load",function(){return c.h()}),Pc(this))}function Oc(a){if(a.g.Z)I(a.g.j,"click",O(365,function(c){var d=H.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)I(a.g.j,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.m&&I(a.g.m,"click",function(){return a.h()}),a.g.R)Qc(a);else{I(a.g.j,"mouseover",O(367,function(){return Qc(a)}));I(a.g.j,"mouseout",O(369,function(){return Rc(a,500)}));I(a.g.j,"touchstart",O(368,function(){return Qc(a)}));var b=O(370,function(){return Rc(a,4E3)});I(a.g.j,"mouseup",b);I(a.g.j,"touchend",b);I(a.g.j,"touchcancel",b);a.g.l&&I(a.g.l,"click",O(371,function(c){return a.preventDefault(c)}))}}function Nc(a){if(a.g.l&&a.g.Y){var b=Pa(a.g.g);b&&null!=B(b,5)&&null!=B(b,6)&&(a.j=new Lc(C(b,5,""),C(b,6,""),C(b,19,"")));I(a.g.l,"click",O(452,function(){if(!a.o&&(a.o=!0,a.j)){var c=a.j,d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);db(window,d)}}))}}function Pc(a){a.g.G&&(a.l=new Gc("xcat","xca-ch"),a.l.m.h.then(function(b){Bc(b,"xca-rdy",function(){a.g.A=Pb(a.g.v);var c={abgp:a.g.v.abgp,name:a.g.v.name,abg_href:a.g.B.getAttribute("href"),abg_target:a.g.B.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.w,is_rtl:a.g.X,has_aria_hidden:"true"===a.g.B.getAttribute("aria-hidden"),serializable_reference_frame_set:Ob(a.g.A)};b.l("render-xca",c)});Bc(b,"req-pos-xca",function(){a.g.A=Pb(a.g.v);var c={serializable_reference_frame_set:Ob(a.g.A)};b.l("pos-xca",c)});Bc(b,"xca-dis",function(){clearTimeout(a.m);a.m=null;W(document.body,"jaa")});Bc(b,"xca-clk",function(){a.g.L.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})}),Ic(a.l))}function Sc(a){var b=a.g.F;b.style.display="block";a.g.enableNativeJakeUi&&a.g.enableNativeSurveyLoadIndicator&&window.requestAnimationFrame(function(){W(b,"abgacfo")})}function Qc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.h&&"block"==a.g.h.style.display||(a.g.K=ra(),a.g.u&&a.g.h&&(a.g.u.style.display="none",a.g.h.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")))}function Rc(a,b){window.clearTimeout(a.g.o);a.g.o=window.setTimeout(function(){return Tc(a)},b)}function Tc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.u&&a.g.h&&(a.g.u.style.display="block",a.g.h.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")}Mc.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>ra()-this.g.K)F(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&F(a):window.openAttribution&&(window.openAttribution(b),F(a))}else this.g.W&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&F(a):window.openSystemBrowser&&(window.openSystemBrowser(b),F(a)))};function Uc(a){var b=Vc,c=this;if(!b)throw Error("bad ctor");this.j=b;this.h=a;this.g=!1;Va("goog_delegate_deferred")?void 0!==H.goog_delegate_deferred_token?Wc(this):(a=function(){Wc(c)},H.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Wc(this)}function Wc(a){if(!a.g&&(a.g=!0,H.goog_delegate_deferred_token=void 0,a.h)){var b=a.j;a=a.h;if(!a)throw Error("bad attrdata");a=new Kc(a);new b(a)}};function Xc(){a:{if(ab)try{var a=H.google_cafe_host||H.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=bb?"https":"http";l.location&&"https:"==l.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20191001/r20110914/abg_survey.js"].join("")};function Yc(){var a=hc();this.promise=a.h;this.resolve=a.g}function Zc(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Yc,b&&b());return a[5]}function $c(){var a=window,b=Xc();return Zc(a,function(){var c=a.document,d=c.createElement("script");d.src=za(new y(xa,b,null));if(null===n)a:{var e=l.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&la.test(e)){n=e;break a}n=""}(e=n)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Vc(a){var b=this;this.g=a;this.h=new Mc(this.g,O(359,function(){return ad(b)}))}function ad(a){Fb(Ib,373,function(){Tc(a.h);Sc(a.h)});window.goog_extracreative_attribution||$c().then(function(b){b.createAttributionCard(a.g);a.g.L=b;b.expandAttributionCard()})};function bd(a){var b=[a];b=void 0===b?[]:b;l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,b]);new Uc(a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===bd?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=bd;}).call(this);
