(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={a:!0},ea={};try{ea.__proto__=da;ca=ea.a;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;function ha(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}var l=this||self;function n(a){return"string"==typeof a}var ia=/^[\w+/_-]+[=]{0,2}$/,p=null;function ja(){}function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function r(a){return"function"==q(a)}function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function la(a,b,c){return a.call.apply(a.bind,arguments)}function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=la:t=ma;return t.apply(null,arguments)}var na=Date.now||function(){return+new Date};function u(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ca=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}u(w,Error);w.prototype.name="CustomError";var oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(n(a))return n(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},pa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function x(a,b){this.g=a===qa&&b||"";this.h=ra}x.prototype.toString=function(){return"Const{"+this.g+"}"};var ra={},qa={},y=new x(qa,"");function sa(){this.g="";this.h=ta}function ua(a){if(a instanceof sa&&a.constructor===sa&&a.h===ta)return a.g;q(a);return"type_error:TrustedResourceUrl"}var ta={};function va(a){var b=new sa;b.g=a;return b};var z;a:{var wa=l.navigator;if(wa){var xa=wa.userAgent;if(xa){z=xa;break a}}z=""};function ya(){this.g="";this.h=za}function Ca(){var a=Da;if(a instanceof ya&&a.constructor===ya&&a.h===za)return a.g;q(a);return"type_error:SafeHtml"}var za={};function Ea(a){var b=new ya;b.g=a;return b}Ea("<!DOCTYPE html>");var Da=Ea("");Ea("<br>");function Fa(a){var b=va(y instanceof x&&y.constructor===x&&y.h===ra?y.g:"type_error:Const");a.src=ua(b).toString()};function Ga(a){Ga[" "](a);return a}Ga[" "]=ja;var Ha=-1!=z.indexOf("Trident")||-1!=z.indexOf("MSIE");function Ia(){}var Ja="function"==typeof Uint8Array;function Ka(a,b,c){a.h=null;b||(b=[]);a.u=void 0;a.l=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(null!==d&&"object"==typeof d&&"array"!=q(d)&&!(Ja&&d instanceof Uint8Array)){a.m=b-a.l;a.j=d;break a}}a.m=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.m)d+=a.l,a.g[d]=a.g[d]||B;else{var e=a.m+a.l;a.g[e]||(a.j=a.g[e]={});a.j[d]=a.j[d]||B}}var B=[];function C(a,b){if(b<a.m){b+=a.l;var c=a.g[b];return c===B?a.g[b]=[]:c}if(a.j)return c=a.j[b],c===B?a.j[b]=[]:c}function D(a,b,c){a=C(a,b);return null==a?c:a}function E(a,b){a=C(a,b);a=null==a?a:!!a;return null==a?!1:a}function La(a){var b=Ma;a.h||(a.h={});if(!a.h[1]){var c=C(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}function Na(a){if(a.h)for(var b in a.h){var c=a.h[b];if("array"==q(c))for(var d=0;d<c.length;d++)c[d]&&Na(c[d]);else c&&Na(c)}}Ia.prototype.toString=function(){Na(this);return this.g.toString()};function Oa(a){Ka(this,a,Pa)}u(Oa,Ia);function Ma(a){Ka(this,a,Qa)}u(Ma,Ia);var Pa=[21],Qa=[28];function F(a){var b=document;return n(a)?b.getElementById(a):a}function Ra(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Sa(b,a)[0]||null);return a||null}function Sa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=oa(g.split(/\s+/),b);h&&(f[d++]=a)}f.length=d;return f}return e}function Ta(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function G(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ga(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ua(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function H(a){a.preventDefault?a.preventDefault():a.returnValue=!1};var Va=/^true$/.test("false"),Wa=/^true$/.test("true");try{JSON.parse("[null,[[null,[[null,[[21062754],[21062755]]]]],[5,[[1,[[21062810],[21062811]]],[1,[[21063251],[21063252,[[147,null,null,[1]]]]]]]]]]")}catch(a){};var Xa=document,I=window;function J(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function Ya(a,b){a.removeEventListener&&a.removeEventListener("message",b,!1)};function Za(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};function $a(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var ab=!!window.google_async_iframe_id,K=ab&&window.parent||window;function bb(a){try{var b=I;a=a||I;for(var c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(d){}return!1}function L(a,b){a&&$a(b,function(c,d){a.style[d]=c})};function cb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var db=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function eb(a,b){this.g=a;this.h=b}function fb(a,b){this.url=a;this.O=!!b;this.depth=null};function gb(){this.j="&";this.l=!1;this.h={};this.m=0;this.g=[]}function hb(a,b){var c={};c[a]=b;return[c]}function ib(a,b,c,d,e){var f=[];Ua(a,function(g,h){(g=jb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}function jb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(jb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(ib(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function kb(a,b,c,d){a.g.push(b);a.h[b]=hb(c,d)}function lb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=mb(a)-c.length;if(0>d)return"";a.g.sort(function(v,O){return v-O});c=null;for(var e="",f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],k=0;k<h.length;k++){if(!d){c=null==c?g:c;break}var m=ib(h[k],a.j,",$");if(m){m=e+m;if(d>=m.length){d-=m.length;b+=m;e=a.j;break}else a.l&&(e=d,m[e-1]==a.j&&--e,b+=m.substr(0,e),e=a.j,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function mb(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.j.length-1};function nb(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof gb)var e=c;else e=new gb,Ua(c,function(g,h){var k=e,m=k.m++;g=hb(h,g);k.g.push(m);k.h[m]=g});var f=lb(e,a.g,"/pagead/gen_204?id="+b+"&");f&&Za(l,f)}catch(g){}};var ob=null;function pb(){var a=l.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):na()}function qb(){var a=void 0===a?l:a;return(a=a.performance)&&a.now?a.now():null};function rb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var M=l.performance,sb=!!(M&&M.mark&&M.measure&&M.clearMarks),N=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=sb){var b;if(null===ob){ob="";try{a="";try{a=l.top.location.hash}catch(c){a=l.location.hash}a&&(ob=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=ob;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function tb(){var a=ub;this.h=[];this.j=a||l;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=N()||(null!=b?b:1>Math.random())}function vb(a){a&&M&&N()&&(M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}tb.prototype.start=function(a,b){if(!this.g)return null;var c=qb()||pb();a=new rb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";M&&N()&&M.mark(b);return a};function wb(){var a=xb;this.j=yb;this.l=this.h;this.g=void 0===a?null:a}function zb(a,b,c){try{if(a.g&&a.g.g){var d=a.g.start(b.toString(),3);var e=c();var f=a.g;c=d;if(f.g&&"number"==typeof c.value){var g=qb()||pb();c.duration=g-c.value;var h="goog_"+c.label+"_"+c.uniqueId+"_end";M&&N()&&M.mark(h);!f.g||2048<f.h.length||f.h.push(c)}}else e=c()}catch(k){f=!0;try{vb(d),f=a.l(b,new cb(k,{message:Ab(k)}),void 0,void 0)}catch(m){a.h(217,m)}if(!f)throw k;}return e}function Bb(a,b){var c=Cb;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f]=arguments[f];return zb(c,a,function(){return b.apply(void 0,e)})}}wb.prototype.h=function(a,b,c,d,e){e=e||"jserror";try{var f=new gb;f.l=!0;kb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new cb(b,{message:Ab(b)}));b.msg&&kb(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(Aa){}b=[g];f.g.push(3);f.h[3]=b;d=l;b=[];g=null;do{var h=d;if(G(h)){var k=h.location.href;g=h.document&&h.document.referrer||null}else k=g,g=null;b.push(new fb(k||""));try{d=h.parent}catch(Aa){d=null}}while(d&&h!=d);k=0;for(var m=b.length-1;k<=m;++k)b[k].depth=m-k;h=l;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var v=b[m];v.url||(v.url=h.location.ancestorOrigins[m-1]||"",v.O=!0)}var O=new fb(l.location.href,!1);h=null;var Ba=b.length-1;for(v=Ba;0<=v;--v){var A=b[v];!h&&db.test(A.url)&&(h=A);if(A.url&&!A.O){O=A;break}}A=null;var tc=b.length&&b[Ba].url;0!=O.depth&&tc&&(A=b[Ba]);var Q=new eb(O,A);Q.h&&kb(f,4,"top",Q.h.url||"");kb(f,5,"url",Q.g.url||"");nb(this.j,e,f,c)}catch(Aa){try{nb(this.j,e,{context:"ecmserr",rctx:a,msg:Ab(Aa),url:Q&&Q.g.url},c)}catch(bd){}}return!0};function Ab(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};var yb,Cb;if(ab&&!G(K)){var Db="."+Xa.domain;try{for(;2<Db.split(".").length&&!G(K);)Xa.domain=Db=Db.substr(Db.indexOf(".")+1),K=window.parent}catch(a){}G(K)||(K=window)}var ub=K,xb=new tb;function Eb(){if(!ub.google_measure_js_timing){var a=xb;a.g=!1;a.h!=a.j.google_js_reporting_queue&&(N()&&pa(a.h,vb),a.h.length=0)}}yb=new function(){var a=void 0===a?I:a;this.g="http:"===a.location.protocol?"http:":"https:"};Cb=new wb;"complete"==ub.document.readyState?Eb():xb.g&&J(ub,"load",function(){Eb()});function P(a,b){return Bb(a,b)};function Fb(a,b,c,d){this.xOffset=a;this.yOffset=b;this.height=d;this.width=c;this.g=null}function Gb(){this.referenceFrameArray=[]}function Hb(a){return{referenceFrameArray:a.referenceFrameArray.map(function(b){return{xOffset:b.xOffset,yOffset:b.yOffset,height:b.height,width:b.width}})}}function Ib(a){var b=void 0===b?new Gb:b;for(var c=0,d=0,e=0;20>e;++e){var f=a.document.body;var g=f.parentElement;var h=a===l.top?f.scrollHeight||g.scrollHeight:a.innerHeight;g=a===l.top?f.scrollWidth||g.scrollWidth:a.innerWidth;f=b;c=new Fb(c,d,g,h);c.g=f;f.referenceFrameArray.push(c);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(k){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b};function Jb(a){this.j=a;this.h=(this.g=!!this.j&&null!=C(this.j,1))?La(this.j):null}Jb.prototype.is_mutable_impression=function(){return this.g?E(this.h,33):!1};function Kb(a){return a.g?D(a.h,5,""):""}function Lb(a){return a.g?null!=C(a.h,5):!1}function Mb(a){return a.g?D(a.h,19,""):""}function Nb(a){return a.g?D(a.h,6,""):""}function Ob(a){return a.g?null!=C(a.h,6):!1};function Pb(a,b){a.classList?b=a.classList.contains(b):(a.classList?a=a.classList:(a=a.className,a=n(a)&&a.match(/\S+/g)||[]),b=0<=oa(a,b));return b}function R(a,b){a.classList?a.classList.add(b):Pb(a,b)||(a.className+=0<a.className.length?" "+b:b)};function Qb(a){this.g=(this.serializedAttributionData=a)?new Oa(a):null;E(this.g,2);this.isMutableImpression=null!=C(this.g,1)&&!!E(La(this.g),33);this.T=D(this.g,30,"")||"";this.$=!!E(this.g,11);this.u=(this.hasUserFeedbackData=this.hasJspbUserFeedbackData=!!this.g&&null!=C(this.g,1))?new Jb(this.g):null;this.S=!!E(this.g,4);this.W=!!E(this.g,6);this.H=!!E(this.g,13);D(this.g,8,0);this.creativeIndexSuffix=1<D(this.g,8,0)?D(this.g,7,0).toString():"";this.aa=!!E(this.g,17);this.Z=!!E(this.g,18);this.R=!!E(this.g,14);this.I=!!E(this.g,15);E(this.g,5);this.X=1==E(this.g,9);this.openAttributionInline=1==E(this.g,10);this.isMobileDevice=!!E(this.g,12);this.M=null;this.V=(a=Xa.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.K=""!==this.creativeIndexSuffix)&&void 0===I.goog_multislot_cache&&(I.goog_multislot_cache={});if(this.K&&!this.V){if(a=I.goog_multislot_cache.hd,void 0===a){a=!1;var b=Xa.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect();150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.J=a;this.A=F("abgcp"+this.creativeIndexSuffix);this.D=F("abgc"+this.creativeIndexSuffix);this.h=F("abgs"+this.creativeIndexSuffix);this.C=F("abgl"+this.creativeIndexSuffix);this.v=F("abgb"+this.creativeIndexSuffix);this.G=F("abgac"+this.creativeIndexSuffix);F("mute_panel"+this.creativeIndexSuffix);this.F=Ra("goog_delegate_attribution"+this.creativeIndexSuffix);this.isDelegateAttributionActive=!!this.F&&!!this.R&&!Ra("goog_delegate_disabled")&&!this.I;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var d=0;d<c.length;d++){var e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.Y="left"==this.T;this.m=this.isDelegateAttributionActive?this.F:F("cbb"+this.creativeIndexSuffix);this.U=this.J?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.m&&Pb(this.m,"goog_dismissable_menu");this.o=null;this.L=0;this.j=this.isDelegateAttributionActive?this.F:this.W&&this.A?this.A:this.D;this.B=null;this.w=I;this.P=!!E(this.g,19);this.adbadgeEnabled=!!E(this.g,24);this.enableNativeSurveyLoadIndicator=!!E(this.g,25);E(this.g,26);this.enableAltNativeJakeUi=(this.enableNativeJakeUi=!!E(this.g,27))&&!!E(this.g,28);this.isPoliticalAd=!!E(this.g,29)};function Rb(a,b){this.j=a;this.l=b;this.h=0;this.g=null}Rb.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.j();return a};function Sb(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)};function Tb(a){l.setTimeout(function(){throw a;},0)}var Ub;function Vb(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==z.indexOf("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";Fa(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Ca());e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=t(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&-1==z.indexOf("Trident")&&-1==z.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.N;c.N=null;e()}};return function(e){d.next={N:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){l.setTimeout(e,0)}};function Wb(){this.h=this.g=null}var Yb=new Rb(function(){return new Xb},function(a){a.reset()});Wb.prototype.add=function(a,b){var c=Yb.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};function Zb(){var a=$b,b=null;a.g&&(b=a.g,a.g=a.g.next,a.g||(a.h=null),b.next=null);return b}function Xb(){this.next=this.h=this.g=null}Xb.prototype.set=function(a,b){this.g=a;this.h=b;this.next=null};Xb.prototype.reset=function(){this.next=this.h=this.g=null};function ac(a,b){bc||cc();dc||(bc(),dc=!0);$b.add(a,b)}var bc;function cc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);bc=function(){a.then(ec)}}else bc=function(){var b=ec,c;!(c=!r(l.setImmediate))&&(c=l.Window&&l.Window.prototype)&&(c=-1==z.indexOf("Edge")&&l.Window.prototype.setImmediate==l.setImmediate);c?(Ub||(Ub=Vb()),Ub(b)):l.setImmediate(b)}}var dc=!1,$b=new Wb;function ec(){for(var a;a=Zb();){try{a.g.call(a.h)}catch(b){Tb(b)}Sb(Yb,a)}dc=!1};function S(a){this.g=0;this.u=void 0;this.l=this.h=this.j=null;this.m=this.o=!1;if(a!=ja)try{var b=this;a.call(void 0,function(c){T(b,2,c)},function(c){T(b,3,c)})}catch(c){T(this,3,c)}}function fc(){this.next=this.context=this.h=this.j=this.g=null;this.l=!1}fc.prototype.reset=function(){this.context=this.h=this.j=this.g=null;this.l=!1};var gc=new Rb(function(){return new fc},function(a){a.reset()});function hc(a,b,c){var d=gc.get();d.j=a;d.h=b;d.context=c;return d}function ic(){var a,b=new S(function(c){a=c});return new jc(b,a)}S.prototype.then=function(a,b,c){return kc(this,r(a)?a:null,r(b)?b:null,c)};S.prototype.$goog_Thenable=!0;S.prototype.cancel=function(a){0==this.g&&ac(function(){var b=new U(a);lc(this,b)},this)};function lc(a,b){if(0==a.g)if(a.j){var c=a.j;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?lc(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):mc(c),nc(c,e,3,b)))}a.j=null}else T(a,3,b)}function oc(a,b){a.h||2!=a.g&&3!=a.g||pc(a);a.l?a.l.next=b:a.h=b;a.l=b}function kc(a,b,c,d){var e=hc(null,null,null);e.g=new S(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof U?g(h):f(k)}catch(m){g(m)}}:g});e.g.j=a;oc(a,e);return e.g}S.prototype.w=function(a){this.g=0;T(this,2,a)};S.prototype.A=function(a){this.g=0;T(this,3,a)};function T(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.w,f=a.A;if(d instanceof S){oc(d,hc(e||ja,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ka(d))try{var k=d.then;if(r(k)){qc(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.j=null,pc(a),3!=b||c instanceof U||rc(a,c))}}function qc(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}function g(k){h||(h=!0,c.call(e,k))}var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}function pc(a){a.o||(a.o=!0,ac(a.v,a))}function mc(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}S.prototype.v=function(){for(var a;a=mc(this);)nc(this,a,this.g,this.u);this.o=!1};function nc(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.g)b.g.j=null,sc(b,c,d);else try{b.l?b.j.call(b.context):sc(b,c,d)}catch(e){uc.call(null,e)}Sb(gc,b)}function sc(a,b,c){2==b?a.j.call(a.context,c):a.h&&a.h.call(a.context,c)}function rc(a,b){a.m=!0;ac(function(){a.m&&uc.call(null,b)})}var uc=Tb;function U(a){w.call(this,a)}u(U,w);U.prototype.name="cancel";function jc(a,b){this.h=a;this.g=b};function V(){this.h=this.h;this.w=this.w}V.prototype.h=!1;V.prototype.g=function(){if(this.w)for(;this.w.length;)this.w.shift()()};function vc(a){var b=[];wc(new xc,a,b);return b.join("")}function xc(){}function wc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if("array"==q(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),wc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),yc(d,c),c.push(":"),wc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":yc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var zc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ac=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function yc(a,b){b.push('"',a.replace(Ac,function(c){var d=zc[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),zc[c]=d);return d}),'"')};function W(a,b,c,d,e,f){V.call(this);this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.A=t(this.H,this);this.F=f}ha(W,V);W.prototype.H=function(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(ka(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,Bc(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if(n(a)&&(n(b)||ka(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}};function Bc(a){var b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(vc(b),a.m)}W.prototype.D=function(){if(1===this.status){try{this.j.postMessage&&Bc(this)}catch(a){}window.setTimeout(t(this.D,this),50)}};W.prototype.connect=function(a){a&&(this.u=a);J(window,"message",this.A);this.I&&this.D()};function Cc(a,b,c){a.B[b]=c}W.prototype.l=function(a,b){var c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(vc(c),this.m)}catch(d){}};W.prototype.g=function(){this.status=3;Ya(window,this.A);V.prototype.g.call(this)};function Dc(a,b,c,d,e){W.call(this,a,b,c,d);this.C=e}ha(Dc,W);Dc.prototype.l=function(a,b){Ec(this,a,b)};function Fc(a,b){var c=new S(function(d,e){l.setTimeout(function(){return e(Error("apmc:nocon"))},4E3);Ha?l.setTimeout(function(){return a.connect(d)},0):a.connect(d)});c.then(function(){return a.A(b)},function(){});return c}function Ec(a,b,c){c=void 0===c?{}:c;var d={},e=(d.c=a.o,d.i=a.v,d.s=b,d.p=c,d);a.C&&(e.msg_type=a.C);Ha?l.setTimeout(function(){a.j.postMessage(JSON.stringify(e),a.m)},0):a.j.postMessage(JSON.stringify(e),a.m)}function Gc(a,b){return new S(function(c,d){l.setTimeout(function(){return d(Error("apmc:timeout"))},4E3);try{var e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){var g=new Dc(f,a.source,a.origin,!0);Fc(g,a).then(function(){return c(g)},function(){g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(h){d(Error("apmc:error"))}})};function Hc(a,b){V.call(this);var c=this;this.v=a;this.o=null;this.m=ic();this.l=!1;this.u=b;this.j=P(276,function(d){return Ic(c,d)})}ha(Hc,V);function Jc(a){var b={};b=(b.msg_type=a.v,b);J(I,"message",a.j);a=I.top;b.googMsgType="sth";a.postMessage(vc(b),"*")}function Ic(a,b){bb(b.source)&&!a.l&&(a.l=!0,Gc(b,a.u).then(function(c){Ya(I,a.j);a.o=c;a.m.g&&a.m.g(c)},function(){a.l=!1}))}Hc.prototype.g=function(){Ya(I,this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}V.prototype.g.call(this)};function Kc(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};function Lc(a,b){var c=this;this.g=a;this.h=b;this.g.aa||(this.o=!1,this.l=this.m=this.j=null,!this.g.J||this.g.adbadgeEnabled||this.g.U?Mc(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(L(this.g.v,a),L(this.g.h,a),L(this.g.A,b),L(this.g.D,b)):L(this.g.D,a)),Nc(this),this.g.enableNativeJakeUi&&this.g.enableNativeSurveyLoadIndicator&&R(this.g.G,"abgnac"),this.g.isDelegateAttributionActive?(R(document.body,"goog_delegate_active"),R(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.m&&Ta(this.g.m),this.m=setTimeout(function(){R(document.body,"jar")},this.g.H?750:100)),this.g.I&&R(document.body,"goog_delegate_disabled"),this.g.P&&I.addEventListener("load",function(){return c.h()}),Oc(this))}function Nc(a){if(a.g.$)J(a.g.j,"click",P(365,function(c){var d=I.goog_interstitial_display;d&&(d(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)J(a.g.j,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.m&&J(a.g.m,"click",function(){return a.h()}),a.g.S)Pc(a);else{J(a.g.j,"mouseover",P(367,function(){return Pc(a)}));J(a.g.j,"mouseout",P(369,function(){return Qc(a,500)}));J(a.g.j,"touchstart",P(368,function(){return Pc(a)}));var b=P(370,function(){return Qc(a,4E3)});J(a.g.j,"mouseup",b);J(a.g.j,"touchend",b);J(a.g.j,"touchcancel",b);a.g.l&&J(a.g.l,"click",P(371,function(c){return a.preventDefault(c)}))}}function Mc(a){a.g.l&&a.g.Z&&(a.g.u&&Lb(a.g.u)&&Ob(a.g.u)&&(a.j=new Kc(Kb(a.g.u),Nb(a.g.u),Mb(a.g.u))),J(a.g.l,"click",P(452,function(){if(!a.o&&(a.o=!0,a.j)){var b=a.j,c=b.h+"&label=closebutton_whythisad_click";c+="&label_instance=1";b.g&&(c+="&cid="+b.g);Za(window,c)}})))}function Oc(a){a.g.H&&(a.l=new Hc("xcat","xca-ch"),a.l.m.h.then(function(b){Cc(b,"xca-rdy",function(){a.g.B=Ib(a.g.w);var c={abgp:a.g.w.abgp,name:a.g.w.name,abg_href:a.g.C.getAttribute("href"),abg_target:a.g.C.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.A,is_rtl:a.g.Y,has_aria_hidden:"true"===a.g.C.getAttribute("aria-hidden"),serializable_reference_frame_set:Hb(a.g.B)};b.l("render-xca",c)});Cc(b,"req-pos-xca",function(){a.g.B=Ib(a.g.w);var c={serializable_reference_frame_set:Hb(a.g.B)};b.l("pos-xca",c)});Cc(b,"xca-dis",function(){clearTimeout(a.m);a.m=null;R(document.body,"jaa")});Cc(b,"xca-clk",function(){a.g.M.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})}),Jc(a.l))}function Rc(a){var b=a.g.G;b.style.display="block";a.g.enableNativeJakeUi&&a.g.enableNativeSurveyLoadIndicator&&window.requestAnimationFrame(function(){R(b,"abgacfo")})}function Pc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.h&&"block"==a.g.h.style.display||(a.g.L=na(),a.g.v&&a.g.h&&(a.g.v.style.display="none",a.g.h.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")))}function Qc(a,b){window.clearTimeout(a.g.o);a.g.o=window.setTimeout(function(){return Sc(a)},b)}function Sc(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.v&&a.g.h&&(a.g.v.style.display="block",a.g.h.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")}Lc.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>na()-this.g.L)H(a);else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&H(a):window.openAttribution&&(window.openAttribution(b),H(a))}else this.g.X&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&H(a):window.openSystemBrowser&&(window.openSystemBrowser(b),H(a)))};function Tc(a){var b=Uc,c=this;if(!b)throw Error("bad ctor");this.j=b;this.h=a;this.g=!1;Ra("goog_delegate_deferred")?void 0!==I.goog_delegate_deferred_token?Vc(this):(a=function(){Vc(c)},I.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Vc(this)}function Vc(a){if(!a.g&&(a.g=!0,I.goog_delegate_deferred_token=void 0,a.h)){var b=a.j;a=a.h;if(!a)throw Error("bad attrdata");a=new Qb(a);new b(a)}};function Wc(){a:{if(Va)try{var a=I.google_cafe_host||I.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=Wa?"https":"http";l.location&&"https:"==l.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20190429/r20110914/abg_survey.js"].join("")};function Xc(){var a=ic();this.promise=a.h;this.resolve=a.g}function Yc(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Xc,b&&b());return a[5]}function Zc(){var a=window,b=Wc();return Yc(a,function(){var c=a.document,d=c.createElement("script");var e=va(b);d.src=ua(e);if(null===p)a:{e=l.document;if((e=e.querySelector&&e.querySelector("script[nonce]"))&&(e=e.nonce||e.getAttribute("nonce"))&&ia.test(e)){p=e;break a}p=""}(e=p)&&d.setAttribute("nonce",e);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(d,c)}).promise};function Uc(a){var b=this;this.g=a;this.h=new Lc(this.g,P(359,function(){return $c(b)}))}function $c(a){zb(Cb,373,function(){Sc(a.h);Rc(a.h)});window.goog_extracreative_attribution||Zc().then(function(b){b.createAttributionCard(a.g);a.g.M=b;b.expandAttributionCard()})};function ad(a){var b=[a];b=void 0===b?[]:b;l.google_logging_queue||(l.google_logging_queue=[]);l.google_logging_queue.push([11,b]);new Tc(a)}var X=["buildAttribution"],Y=l;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===ad?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=ad;}).call(this);
