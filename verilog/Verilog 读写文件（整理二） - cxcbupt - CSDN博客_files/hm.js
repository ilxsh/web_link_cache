(function(){var h={},mt={},c={id:"6bcd52f51e9b3dce32bec4a3997715ac",dm:["csdn.net","dingyue.programmer.com.cn","gitbook.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:true,align:1,nv:0,vdur:1800000,age:31536000000,rec:1,rp:[[119608, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'a,input,button',hca:'C71F5A6F5E35AC7B',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,t=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(b,a,g){var d;g.O&&(d=new Date,d.setTime(d.getTime()+g.O));document.cookie=b+"="+a+(g.domain?"; domain="+g.domain:"")+(g.path?"; path="+g.path:"")+(d?"; expires="+d.toGMTString():"")+(g.xc?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:v};
mt.cookie.Vb=function(b,a){try{var g="Hm_ck_"+ +new Date;mt.cookie.set(g,"is-cookie-enabled",{domain:b,path:a,O:r});var d="is-cookie-enabled"===mt.cookie.get(g)?"1":"0";mt.cookie.set(g,"",{domain:b,path:a,O:-1});return d}catch(f){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.wa=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.ca=function(b){return mt.lang.e(b,"String")};
mt.lang.g=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.K=function(b,a){var g=w;if(b==v||!mt.lang.e(b,"Array")||a===r)return g;if(Array.prototype.indexOf)g=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){g=t;break}return g};
(function(){var b=mt.lang;mt.f={};mt.f.qa=function(a){return document.getElementById(a)};mt.f.Ab=function(a){if(!a)return v;try{a=String(a);if(0===a.indexOf("!HMCC!"))return document.querySelector(a.substring(6,a.length));for(var b=a.split(">"),d=document.body,f=b.length-1;0<=f;f--)if(-1<b[f].indexOf("#")){var e=b[f].split("#")[1];(d=document.getElementById(e))||(d=document.getElementById(decodeURIComponent(e)));b=b.splice(f+1,b.length-(f+1));break}for(a=0;d&&a<b.length;){var m=String(b[a]).toLowerCase();
if(!("html"===m||"body"===m)){var f=0,l=b[a].match(/\[(\d+)\]/i),e=[];if(l)f=l[1]-1,m=m.split("[")[0];else if(1!==d.childNodes.length){for(var q=0,s=0,u=d.childNodes.length;s<u;s++){var n=d.childNodes[s];1===n.nodeType&&n.nodeName.toLowerCase()===m&&q++;if(1<q)return v}if(1!==q)return v}for(q=0;q<d.childNodes.length;q++)1===d.childNodes[q].nodeType&&d.childNodes[q].nodeName.toLowerCase()===m&&e.push(d.childNodes[q]);if(!e[f])return v;d=e[f]}a++}return d}catch(x){return v}};mt.f.sa=function(a,b){var d=
[],f=[];if(!a)return f;for(;a.parentNode!=v;){for(var e=0,m=0,l=a.parentNode.childNodes.length,q=0;q<l;q++){var s=a.parentNode.childNodes[q];if(s.nodeName===a.nodeName&&(e++,s===a&&(m=e),0<m&&1<e))break}if((l=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else l&&(l="#"+encodeURIComponent(a.id),l=0<d.length?l+">"+d.join(">"):l,f.push(l)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<e?"["+m+"]":""));a=a.parentNode}f.push(d.join(">"));return f};mt.f.Ma=function(a){return(a=
mt.f.sa(a,t))&&a.length?String(a[0]):""};mt.f.Hb=function(a){return mt.f.sa(a,w)};mt.f.xb=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return v};mt.f.zb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Fb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.f.zb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+
(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.f.getAttribute=function(a,b){var d=a.getAttribute&&a.getAttribute(b)||v;if(!d&&a.attributes&&a.attributes.length)for(var f=a.attributes,e=f.length,m=0;m<e;m++)f[m].nodeName===b&&(d=f[m].nodeValue);return d};mt.f.$=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.f.Jb=function(a){var g="";a.textContent?g=b.trim(a.textContent):a.innerText&&(g=b.trim(a.innerText));g&&(g=g.replace(/\s+/g," ").substring(0,255));
return g};mt.f.Ka=function(a,g){var d=mt.f.$(a);"input"===d&&g&&("button"===a.type||"submit"===a.type)?d=b.trim(a.value)||"":"input"===d&&!g&&"password"!==a.type?d=b.trim(a.value)||"":"img"===d?(d=mt.f.getAttribute,d=d(a,"alt")||d(a,"title")||d(a,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.f.Jb(a);return String(d).substring(0,255)};(function(){(mt.f.Sa=function(){function a(){if(!a.ba){a.ba=t;for(var d=0,b=f.length;d<b;d++)f[d]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,
1);return}a()}var d=w,f=[],e;document.addEventListener?e=function(){document.removeEventListener("DOMContentLoaded",e,w);a()}:document.attachEvent&&(e=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e),a())});(function(){if(!d)if(d=t,"complete"===document.readyState)a.ba=t;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",
e);window.attachEvent("onload",a);var f=w;try{f=window.frameElement==v}catch(l){}document.documentElement.doScroll&&f&&b()}})();return function(d){a.ba?d():f.push(d)}}()).ba=w})();return mt.f})();mt.event={};mt.event.d=function(b,a,g){b.attachEvent?b.attachEvent("on"+a,function(a){g.call(b,a)}):b.addEventListener&&b.addEventListener(a,g,w)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=w};
(function(){var b=mt.event;mt.h={};mt.h.va=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.Db=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.ec=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=
window.screen.colorDepth||0;mt.h.R=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.h.J=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.h.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.h.orientation=
a}a();b.d(window,"orientationchange",a)})();return mt.h})();mt.o={};mt.o.parse=function(b){return(new Function("return ("+b+")"))()};
mt.o.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=g[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var g={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var f=["["],e=d.length,g,l,q;for(l=0;l<e;l++)switch(q=d[l],typeof q){case "undefined":case "function":case "unknown":break;default:g&&f.push(","),f.push(mt.o.stringify(q)),g=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';g=["{"];l=mt.o.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(q=
d[e],typeof q){case "undefined":case "unknown":case "function":break;default:f&&g.push(","),f=1,g.push(l(e)+":"+l(q))}g.push("}");return g.join("")}}}();mt.localStorage={};mt.localStorage.ia=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return w}return t};
mt.localStorage.set=function(b,a,g){var d=new Date;d.setTime(d.getTime()+g||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.ia()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),g=b.substring(0,a)-0;if(g&&g>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.ia())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(d){}return v};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.ia())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(g){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):v}catch(a){return v}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Wa={};mt.Wa.log=function(b,a){var g=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=g;g.onload=function(){g.onload=v;g=window[d]=v;a&&a(b)};g.src=b};mt.Ba={};
mt.Ba.Kb=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(g){}return b};
mt.Ba.tc=function(b,a,g,d,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+g+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+g+'" height="'+d+'" src="'+a+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.m=function(b,a){var g=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return g?g[3]:v};mt.url.uc=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:v};mt.url.Cb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):v};mt.url.Q=function(b){return(b=mt.url.Cb(b))?b.replace(/:\d+$/,""):b};mt.url.sa=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){function b(){for(var a=w,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,f=0;f<d;f++){var e=b[f].src;if(e&&0===e.indexOf("https://hm.baidu.com/h")){a=t;break}}return a}return h.vb=b})();var A=h.vb;
h.w={vc:"http://tongji.baidu.com/hm-web/welcome/ico",Aa:"hm.baidu.com/hm.gif",fb:/^(tongji|hmcdn).baidu.com$/,Ya:"tongji.baidu.com",Pb:"hmmd",Qb:"hmpl",pc:"utm_medium",Ob:"hmkw",rc:"utm_term",Mb:"hmci",oc:"utm_content",Rb:"hmsr",qc:"utm_source",Nb:"hmcu",nc:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",ea:A()||"https:"===document.location.protocol?"https:":"http:",wc:0,nb:6E5,Wb:6E5,fc:5E3,ob:5,N:1024,mb:1,M:2147483647,Xa:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
S:t,Ha:["a","input","button"],hb:{id:"data-hm-id",ma:"data-hm-class",Ea:"data-hm-xpath",content:"data-hm-content",Ca:"data-hm-tag",link:"data-hm-link"},Ga:"data-hm-enabled",Fa:"data-hm-disabled",$b:"https://hmcdn.baidu.com/static/tongji/plugins/",Ra:["UrlChangeTracker"]};(function(){var b={C:{},d:function(a,b){this.C[a]=this.C[a]||[];this.C[a].push(b)},I:function(a,b){this.C[a]=this.C[a]||[];for(var d=this.C[a].length,f=0;f<d;f++)this.C[a][f](b)}};return h.z=b})();
(function(){function b(b,d){var f=document.createElement("script");f.charset="utf-8";a.e(d,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=v,d()}:f.onload=function(){d()});f.src=b;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(f,e)}var a=mt.lang;return h.load=b})();
(function(){function b(){var d="";if(h.c.b.nv){d=encodeURIComponent(document.referrer);try{window.sessionStorage?g.set("Hm_from_"+c.id,d):a.set("Hm_from_"+c.id,d,864E5)}catch(b){}}else try{d=(window.sessionStorage?g.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(e){}return d}var a=mt.localStorage,g=mt.sessionStorage;return h.wb=b})();
(function(){var b=mt.cookie,a=mt.localStorage,g=mt.sessionStorage,d={getData:function(d){try{return b.get(d)||g.get(d)||a.get(d)}catch(e){}},setData:function(f,e,m){try{b.set(f,e,{domain:d.P(),path:d.Z(),O:m}),m?a.set(f,e,m):g.set(f,e)}catch(l){}},dc:function(f){try{b.set(f,"",{domain:d.P(),path:d.Z(),O:-1}),g.remove(f),a.remove(f)}catch(e){}},T:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},da:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},P:function(){for(var a=document.location.hostname,b=0,g=c.dm.length;b<g;b++)if(d.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},Z:function(){for(var a=0,b=c.dm.length;a<b;a++){var g=c.dm[a];if(-1<g.indexOf("/")&&d.da(document.location.href,g))return g.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.na=d})();
(function(){var b=mt.lang,a=mt.o,g=h.na,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},f={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},e=["session","user"],m="Hm_up_"+c.id,l={init:function(){l.Tb()},Tb:function(){try{var f=a.parse(decodeURIComponent(g.getData(m)));b.e(f,"Object")&&(d.user=f)}catch(e){}},D:function(a){var b={};d[a]!==r&&(b=d[a]);a=this.ta();for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f]);return a},ta:function(){for(var a={},b,f=e.length-
1;0<=f;f--){b=d[e[f]];for(var n in b)b.hasOwnProperty(n)&&(a[n]=b[n])}return a},setProperty:function(f,e,g){var n=d[f];if(b.e(n,"Object")&&b.e(e,"Object")){for(var m in e)if(e.hasOwnProperty(m)){var k=b.g(String(m));if(g||!((/^_/.test(k)||/_$/.test(k))&&"_iden"!==k)){var p=e[m];if(p==v)delete n[k];else{if(b.e(p,"Object")||b.e(p,"Array"))p=a.stringify(p);p=b.g(String(p));l.Ub(f,k,p)&&(n[k]={value:p,scope:l.Na(f)})}}}"user"===f&&l.ya()}},s:function(a){a!==r&&("userId"===a&&b.e(d.user,"Object")?(delete d.user.uid_,
l.ya()):"user"===a&&b.e(d.user,"Object")?(a=d.user.uid_,d.user=a===r?{}:{uid_:a},l.ya()):d[a]!==r&&(d[a]={}))},ya:function(){try{g.setData(m,encodeURIComponent(a.stringify(d.user)),c.age)}catch(b){}},Ub:function(a,b,f){var e=t,g=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(f)).length)e=w;else{var k=g[b];g[b]={value:f,scope:l.Na(a)};a=l.W(l.D(a));2048<encodeURIComponent(a).length&&(k!==r?g[b]=k:delete g[b],e=w)}return e},W:function(a){var b=[],d,f;for(f in a)a.hasOwnProperty(f)&&
(d=[f,a[f].value],(1===a[f].scope||2===a[f].scope)&&d.push(a[f].scope),b.push(d.join("*")));return b.join("!")},Na:function(a){a=f[a];return a!==r?a:f.others}};return h.Y=l})();
(function(){var b=mt.lang,a=mt.f,g={X:function(b,f){return function(e){var m=e.target||e.srcElement;if(m){var l=m.getAttribute(b.ha);e=e.clientX+":"+e.clientY;if(l&&l===e)m.removeAttribute(b.ha);else if(f&&0<f.length&&(m=a.Hb(m))&&m.length)if(l=m.length,e=m[m.length-1],1E4>l*e.split(">").length)for(e=0;e<l;e++)g.Va(b,m[e]);else g.Va(b,e)}}},Va:function(a,f){for(var e={},g=String(f).split(">").length,l=0;l<g;l++)e[f]="",f=f.substring(0,f.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.Ia)&&a.Ia(e)},bc:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.ha,e.clientX+":"+e.clientY);a&&a.r&&(b?a.r(b):a.r("#"+encodeURIComponent(this.id),e.type))}}};return h.pa=g})();
(function(){var b=mt.f,a=mt.o,g=mt.event,d=mt.lang,f=h.pa,e=h.Y,m=e.W,l={ha:"HM_ce",$a:function(){if(c.cetrk&&c.cetrk.length){g.d(document,"click",f.X(l,c.cetrk));for(var d=0,e=c.cetrk.length;d<e;d++){var m;try{m=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(n){m={}}var x=m.p||"";-1===x.indexOf(">")&&(0===x.indexOf("#")&&(x=x.substring(1)),(x=b.qa(x))&&g.d(x,"click",f.bc(l,m)))}}},Ia:function(b){if(c.cetrk&&c.cetrk.length)for(var d=0,f=c.cetrk.length;d<f;d++){var e;try{e=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(g){e=
{}}b.hasOwnProperty(e.p)&&l.r(e)}},r:function(a){h.c.b.et=7;var f=a&&a.k||"",f=d.g(f),g={};if(a&&a.a&&d.e(a.a,"Object"))for(var n in a.a)if(a.a.hasOwnProperty(n)){var l=b.Ab(a.a[n]||""),l=l?b.Ka(l,w):"";g[n]=l}g._iden=f;e.setProperty("customEvent",g);h.c.b.ep="";h.c.b.p=m(e.D("customEvent"));h.c.i();h.c.b.p="";e.s("customEvent")}};h.z.d("pv-b",l.$a);return l})();
(function(){var b=mt.f,a=mt.lang,g=mt.event,d=mt.h,f=h.w,e=h.z,m=[],l={Za:function(){c.ctrk&&(g.d(document,"mouseup",l.lb()),g.d(window,"unload",function(){l.fa()}),setInterval(function(){l.fa()},f.nb))},lb:function(){return function(a){a=l.yb(a);if(""!==a){var b=(f.ea+"//"+f.Aa+"?"+h.c.Ua().replace(/ep=[^&]*/,"ep="+encodeURIComponent(a))).length;b+(f.M+"").length>f.N||(b+encodeURIComponent(m.join("!")+(m.length?"!":"")).length+(f.M+"").length>f.N&&l.fa(),m.push(a),(m.length>=f.ob||/\*a\*/.test(a))&&
l.fa())}}},yb:function(e){var g=e.target||e.srcElement;if(0===f.mb){var n=(g.tagName||"").toLowerCase();if("embed"==n||"object"==n)return""}var m;d.va?(m=Math.max(document.documentElement.scrollTop,document.body.scrollTop),n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=e.clientX+n,m=e.clientY+m):(n=e.pageX,m=e.pageY);e=l.Eb(e,g,n,m);var k=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:n-=k/2;break;case 2:n-=k}k=
[];k.push(n);k.push(m);k.push(e.Xb);k.push(e.Yb);k.push(e.ac);k.push(a.g(e.Zb));k.push(e.sc);k.push(e.Lb);(g="a"===(g.tagName||"").toLowerCase()?g:b.xb(g))?(k.push("a"),k.push(a.g(encodeURIComponent(g.href)))):k.push("b");return k.join("*")},Eb:function(f,e,g,m){f=b.Ma(e);var k=0,p=0,z=0,y=0;if(e&&(k=e.offsetWidth||e.clientWidth,p=e.offsetHeight||e.clientHeight,y=b.Fb(e),z=y.left,y=y.top,a.e(e.getBBox,"Function")&&(p=e.getBBox(),k=p.width,p=p.height),"html"===(e.tagName||"").toLowerCase()))k=Math.max(k,
e.clientWidth),p=Math.max(p,e.clientHeight);return{Xb:Math.round(100*((g-z)/k)),Yb:Math.round(100*((m-y)/p)),ac:d.orientation,Zb:f,sc:k,Lb:p}},fa:function(){0!==m.length&&(h.c.b.et=2,h.c.b.ep=m.join("!"),h.c.i(),m=[])}},q={cb:function(){c.ctrk&&setInterval(q.gc,f.fc)},gc:function(){var a=d.R()+d.J();0<a-h.c.b.vl&&(h.c.b.vl=a)}};e.d("pv-b",l.Za);e.d("pv-b",q.cb);return l})();
(function(){var b=mt.lang,a=mt.f,g=mt.event,d=mt.h,f=h.w,e=h.z,m=h.Y,l=m.W,q=+new Date,s=[],u={X:function(){return function(d){if(h.c&&h.c.S&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var k=h.c.Ha,p=a.getAttribute(e,f.Ga)!=v?t:w;if(a.getAttribute(e,f.Fa)==v)if(p)u.ka(u.ra(e,d));else{var g=a.$(e);if(b.K(k,"*")||b.K(k,g))u.ka(u.ra(e,d));else for(;e.parentNode!=v;){var p=e.parentNode,g=a.$(p),y="a"===g&&b.K(k,"a")?t:w,g="button"===g&&b.K(k,"button")?t:w,B=a.getAttribute(p,f.Ga)!=v?t:w;
if(a.getAttribute(p,f.Fa)==v&&(y||g||B)){u.ka(u.ra(p,d));break}e=e.parentNode}}}}}},ra:function(e,g){var k={},p=f.hb;k.id=a.getAttribute(e,p.id)||a.getAttribute(e,"id")||"";k.ma=a.getAttribute(e,p.ma)||a.getAttribute(e,"class")||"";k.Ea=a.getAttribute(e,p.Ea)||a.Ma(e);k.content=a.getAttribute(e,p.content)||a.Ka(e,t);k.Ca=a.getAttribute(e,p.Ca)||a.$(e);k.link=a.getAttribute(e,p.link)||a.getAttribute(e,"href")||"";k.type=g.type||"click";p=b.wa(e.offsetTop)?e.offsetTop:0;"click"===g.type?p=d.va?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.xa&&b.e(g.xa.changedTouches,"Array")&&g.xa.changedTouches.length)&&(p=g.xa.changedTouches[0].pageY);k.mc=p;return k},ka:function(a){var d=b.g;a=[+new Date-(h.c.F!==r?h.c.F:q),d(a.id),d(a.ma),d(a.Ca),d(a.Ea),d(a.link),d(a.content),a.type,a.mc].join("*");u.la(a);b.e(this.V(),"Function")&&this.V()()},la:function(a){a.length>f.N||(encodeURIComponent(s.join("!")+a).length>f.N&&(u.r(s.join("!")),s=[]),s.push(a))},
r:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=l(m.D("autoEventTracking"));h.c.i();h.c.b.p=""},V:function(){return function(){s&&s.length&&(u.r(s.join("!")),s=[])}}};b.ca(c.aet)&&""!==c.aet&&e.d("pv-b",function(){g.d(document,"click",u.X());"ontouchend"in document&&g.d(window,"touchend",u.X());g.d(window,"unload",u.V())});return u})();
(function(){var b=mt.event,a=mt.h,g=h.w,d=h.z,f=+new Date,e=[],m=v,l={rb:function(){return function(){h.c&&(h.c.S&&c.aet&&c.aet.length)&&(window.clearTimeout(m),m=window.setTimeout(function(){l.bb(a.R()+a.J())},150))}},bb:function(a){l.la([+new Date-(h.c.F!==r?h.c.F:f),a].join("*"))},la:function(a){if(encodeURIComponent(e.join("!")+a).length>g.N||3<e.length)l.r(e.join("!")),e=[];e.push(a)},r:function(b){h.c.b.et=6;h.c.b.vh=a.J();h.c.b.ep=b;h.c.i()},V:function(){return function(){e&&e.length&&(l.r(e.join("!")),
e=[])}}};mt.lang.ca(c.aet)&&""!==c.aet&&d.d("pv-b",function(){b.d(window,"scroll",l.rb());b.d(window,"unload",l.V())});return l})();
(function(){var b=mt.f,a=h.w,g=h.load,d=h.wb;h.z.d("pv-b",function(){var f=a.protocol+"//crs.baidu.com/";c.rec&&b.Sa(function(){for(var e=0,m=c.rp.length;e<m;e++){var l=c.rp[e][0],q=c.rp[e][1],s=b.qa("hm_t_"+l);if(q&&!(2==q&&!s||s&&""!==s.innerHTML))s="",s=Math.round(Math.random()*a.M),s=4==q?f+"hl.js?"+["siteId="+c.id,"planId="+l,"rnd="+s].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+l,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
s].join("&"),g(s)}})})})();
(function(){function b(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.oa.Gb()+","+h.oa.Bb();h.c.i()}}function a(){clearTimeout(y);var b;p&&(b="visible"==document[p]);z&&(b=!document[z]);l="undefined"==typeof b?t:b;if((!m||!q)&&l&&s)k=t,n=+new Date;else if(m&&q&&(!l||!s))k=w,x+=+new Date-n;m=l;q=s;y=setTimeout(a,100)}function g(a){var p=document,b="";if(a in p)b=a;else for(var d=["webkit","ms","moz","o"],e=0;e<d.length;e++){var y=d[e]+a.charAt(0).toUpperCase()+a.slice(1);if(y in p){b=
y;break}}return b}function d(p){if(!("focus"==p.type||"blur"==p.type)||!(p.target&&p.target!=window))s="focus"==p.type||"focusin"==p.type?t:w,a()}var f=mt.event,e=h.z,m=t,l=t,q=t,s=t,u=+new Date,n=u,x=0,k=t,p=g("visibilityState"),z=g("hidden"),y;a();(function(){var b=p.replace(/[vV]isibilityState/,"visibilitychange");f.d(document,b,a);f.d(window,"pageshow",a);f.d(window,"pagehide",a);"object"==typeof document.onfocusin?(f.d(document,"focusin",d),f.d(document,"focusout",d)):(f.d(window,"focus",d),
f.d(window,"blur",d))})();h.oa={Gb:function(){return+new Date-u},Bb:function(){return k?+new Date-n+x:x}};e.d("pv-b",function(){f.d(window,"unload",b())});e.d("duration-send",b());e.d("duration-done",function(){n=u=+new Date;x=0});return h.oa})();
(function(){var b=mt.lang,a=h.w,g=h.load,d={Sb:function(d){if((window._dxt===r||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.c){var e=h.c.P();g([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(e)].join(""),d)}},lc:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.pb=d})();
(function(){function b(a,b,d,e){if(!(a===r||b===r||e===r)){if(""===a)return[b,d,e].join("*");a=String(a).split("!");for(var f,g=w,k=0;k<a.length;k++)if(f=a[k].split("*"),String(b)===f[0]){f[1]=d;f[2]=e;a[k]=f.join("*");g=t;break}g||a.push([b,d,e].join("*"));return a.join("!")}}function a(b){for(var e in b)if({}.hasOwnProperty.call(b,e)){var y=b[e];d.e(y,"Object")||d.e(y,"Array")?a(y):b[e]=String(y)}}var g=mt.url,d=mt.lang,f=mt.o,e=mt.h,m=h.w,l=h.z,q=h.pb,s=h.load,u=h.na,n=h.Y,x=n.W,k={U:[],ga:0,Qa:w,
B:{Da:"",page:""},init:function(){k.j=0;n.init();l.d("pv-b",function(){k.qb();k.tb()});l.d("pv-d",function(){k.ub();k.B.page=""});l.d("stag-b",function(){h.c.b.api=k.j||k.ga?k.j+"_"+k.ga:"";h.c.b.ct=[decodeURIComponent(u.getData("Hm_ct_"+c.id)||""),k.B.Da,k.B.page].join("!")});l.d("stag-d",function(){h.c.b.api=0;k.j=0;k.ga=0})},qb:function(){var a=window._hmt||[];if(!a||d.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var p=arguments[b];
d.e(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},tb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,f=b.length;e<f;e++){var g=b[e];d.test(g[0])?k.U.push(g):k.za(g)}a.cmd[c.id]={push:k.za}},ub:function(){if(0<k.U.length)for(var a=0,b=k.U.length;a<b;a++)k.za(k.U[a]);k.U=
v},za:function(a){var b=a[0];if(k.hasOwnProperty(b)&&d.e(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||t===a))k.j|=2,h.c.Oa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.La();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=e.R()+e.J();h.c.b.kb=0;h.c.ua?(h.c.b.nv=0,h.c.b.st=4):h.c.ua=t;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=m.protocol+"//"+document.location.host+
a[1];k.Qa||(h.c.b.su=document.location.href);h.c.b.p=x(n.D("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=d;h.c.b.p="";h.c.F=+new Date;n.s("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.g(a[1])+"*"+d.g(a[2])+(a[3]?"*"+d.g(a[3]):"")+(a[4]?"*"+d.g(a[4]):""),h.c.b.p=x(n.ta()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){k.ga++;for(var f=(h.c.b.cv||"*").split("!"),g=f.length;g<b-1;g++)f.push("*");
f[b-1]=e+"*"+d.g(a[2])+"*"+d.g(a[3]);h.c.b.cv=f.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?u.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):u.dc("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==r&&a!==r){var f=decodeURIComponent(u.getData("Hm_ct_"+c.id)||""),f=b(f,e,1,a);u.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==
r&&a!==r){var f=k.B.Da,f=b(f,e,2,a);k.B.Da=f}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.g(a[1]);a=d.g(a[2]);if(e!==r&&a!==r){var f=k.B.page,f=b(f,e,3,a);k.B.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?m.protocol+"//"+window.location.host+a[1]:a[1],k.Qa=t)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=f.stringify(b),h.c.b.p=x(n.ta()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];q.Sb();q.lc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(d.ca(a)||d.wa(a))){var b=n.D("user").uid_;if(!(b&&b.value===d.g(String(a)))){var b=h.c.b.p,e=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.g(String(a));h.c.i();var f={};f.uid_=a;n.setProperty("user",f,t);h.c.b.p=b;h.c.b.ep=e}}},_clearUserId:function(a){1<a.length&&t===a[1]&&n.s("userId")},_setUserProperty:function(a){a=
a[1];d.e(a,"Object")&&n.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&t===a[1]&&n.s("user")},_setSessionProperty:function(a){a=a[1];d.e(a,"Object")&&n.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&t===a[1]&&n.s("session")},_setPageviewProperty:function(a){a=a[1];d.e(a,"Object")&&n.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&t===a[1]&&n.s("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.e(a,"Object")&&n.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&t===a[1]&&n.s("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||t===a))h.c.Pa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||t===a))h.c.S=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):l.I("duration-send");l.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],m.fb.test(g.Q(a))&&s(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.K(m.Ra,e)&&d.e(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]=a,b.A=b.A||[],a=b.A.slice(),e&&a.length&&a[0][1]===e))for(var f=0,g=a.length;f<g;f++){var k=a[f][2]||{};if(b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](k),b.A.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],f=a[2]||{};if(d.K(m.Ra,e))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](f);else{b.A=b.A||
[];for(var f=0,g=b.A.length;f<g;f++)if(b.A[f][1]===e)return;b.A.push(a);k._require([v,m.$b+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.e(a,"Object")&&(a._iden=b,n.setProperty("customEvent",a));h.c.b.et=7;h.c.b.ep="";h.c.b.p=x(n.D("customEvent"));h.c.i();h.c.b.p="";n.s("customEvent")}}};k.init();h.gb=k;return h.gb})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=t,this.b={},this.Pa=this.Oa=t,this.S=k.S,this.Ha=f.ca(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.ua=w,this.init())}var a=mt.url,g=mt.Wa,d=mt.Ba,f=mt.lang,e=mt.cookie,m=mt.h,l=mt.sessionStorage,q=mt.o,s=mt.event,u=h.na,n=h.Y,x=n.W,k=h.w,p=h.load,z=h.z;b.prototype={T:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},da:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},aa:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.da(b,c.dm[d]))return t}else{var e=a.Q(b);if(e&&this.T(e,c.dm[d]))return t}return w},P:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},Z:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.da(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Ib:function(){if(!document.referrer)return k.H-k.L>c.vdur?1:4;var b=w;this.aa(document.referrer)&&this.aa(document.location.href)?b=t:(b=a.Q(document.referrer),b=this.T(b||"",document.location.hostname));return b?k.H-k.L>c.vdur?1:4:3},jc:function(){var a,b,d,f,g;k.L=u.getData("Hm_lpvt_"+c.id)||0;13===k.L.length&&(k.L=Math.round(k.L/1E3));b=this.Ib();a=4!==b?1:0;if(d=u.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/
1E3));for(;2592E3<k.H-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.H);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.H,f="",g=1;u.setData("Hm_lvt_"+c.id,d,c.age);u.setData("Hm_lpvt_"+c.id,k.H);d=e.Vb(this.P(),this.Z());if(0===c.nv&&this.aa(document.location.href)&&(""===document.referrer||this.aa(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=f;this.b.lv=g},Ua:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=k.Xa.length;e<f;e++){var g=k.Xa[e],
m=this.b[g];"undefined"!==typeof m&&""!==m&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(m))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},kc:function(){this.jc();this.b.si=c.id;this.b.sn=this.La();this.b.su=document.referrer;
this.b.hh=window.location.hash;this.b.ds=m.ec;this.b.cl=m.colorDepth+"-bit";this.b.ln=String(m.language).toLowerCase();this.b.ja=m.javaEnabled?1:0;this.b.ck=m.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Kb();this.b.v="1.2.61";this.b.cv=decodeURIComponent(u.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=m.R()+m.J();var b=document.location.href;this.b.cm=a.m(b,k.Pb)||"";this.b.cp=a.m(b,k.Qb)||a.m(b,k.pc)||"";this.b.cw=a.m(b,k.Ob)||a.m(b,k.rc)||"";this.b.ci=
a.m(b,k.Mb)||a.m(b,k.oc)||"";this.b.cf=a.m(b,k.Rb)||a.m(b,k.qc)||"";this.b.cu=a.m(b,k.Nb)||a.m(b,k.nc)||""},init:function(){try{this.kc(),0===this.b.nv?this.ic():this.Ja(),h.c=this,this.jb(),this.ib(),z.I("pv-b"),this.hc()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));g.log(k.ea+"//"+k.Aa+"?"+b.join("&"))}},hc:function(){function a(){z.I("pv-d")}this.Oa?(this.ua=t,this.b.et=
0,this.b.ep="",this.b.p=x(n.D("pageview")),this.b.vl=m.R()+m.J(),this.i(a),this.b.p=""):a();this.F=+new Date;n.s("pageview")},i:function(a){if(this.Pa){var b=this;b.b.rnd=Math.round(Math.random()*k.M);z.I("stag-b");var d=k.ea+"//"+k.Aa+"?"+b.Ua();z.I("stag-d");b.eb(d);g.log(d,function(d){b.Ta(d);f.e(a,"Function")&&a.call(b)})}},jb:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.Q(document.referrer)===k.Ya?1:0,f=a.m(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&
e&&g)&&(this.b.rnd=Math.round(Math.random()*k.M),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},ib:function(){if(window.postMessage&&window.self!==window.parent){var b=this;s.d(window,"message",function(d){if(a.Q(d.origin)===k.Ya){d=d.data||{};var e=d.jn||"",f=/^customevent$/.test(e);if(RegExp(c.id).test(d.sd||
"")&&f)b.b.rnd=Math.round(Math.random()*k.M),p(k.protocol+"//"+c.js+e+".js?"+b.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},eb:function(a){var b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);l.set("Hm_unsent_"+c.id,q.stringify(b))},Ta:function(a){var b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=
a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?l.set("Hm_unsent_"+c.id,q.stringify(b)):this.Ja()}},Ja:function(){l.remove("Hm_unsent_"+c.id)},ic:function(){var a=this,b;try{b=q.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){g.log(k.ea+"//"+b,function(b){a.Ta(b)})},f=0;f<b.length;f++)e(b[f])},La:function(){return Math.round(+new Date/1E3)%65535}};return new b})();
(function(){var b=mt.event,a=mt.lang,g=h.w;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=a.wa(h.c.b.kb)?h.c.b.kb:0;var d=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};b.d(document,"keyup",function(){h.c.b.kb++});b.d(window,"unload",function(){d()});setInterval(d,g.Wb)}})();var C=h.w,D=h.load;c.pt&&D([C.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.h,a=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!b.va||7<b.Db())&&c.cvcc)){var f,e,m,l,q=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},u=function(b,e){var g={};g.n=f;g.t="clk";g.v=b;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):v,n=e.getAttribute("id")||"";m.test(k)?(g.sn=
"mediate",g.snv=k):a.e(l,"String")&&m.test(l)&&(g.sn="wrap",g.snv=l);g.id=n}h.c.b.et=86;h.c.b.ep=d.stringify(g);h.c.i();for(g=+new Date;400>=+new Date-g;);};if(c.med)e="/zoosnet",f="swt",m=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,l={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(m.test(e)||m.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){e="/other-comm";f="other";m=c.cvcc.q||r;var n=c.cvcc.id||r;l={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,f,g=0,k=b.length;g<k;g++)d=b[g],m!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),n?(d=d.getAttribute("id"),(m.test(e)||
m.test(f)||n.test(d))&&a.push(b[g])):(m.test(e)||m.test(f))&&a.push(b[g])):n!==r&&(d=d.getAttribute("id"),n.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof l&&"undefined"!==typeof m){var x;e+=/\/$/.test(e)?"":"/";var k=function(b,d){if(x===d)return u(e+b,d),w;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,g=d.length;f<g;f++)if(x===d[f])return u(e+b+"/"+(f+1),d[f]),w};g.d(document,"mousedown",function(b){b=b||window.event;x=b.target||b.srcElement;var d={};for(s(l,function(b,e){d[b]=a.e(e,
"Function")?e():document.getElementById(e)});x&&x!==document&&s(d,k)!==w;)x=x.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,g=mt.event,d=mt.o;if("undefined"!==typeof h.c&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var f={ab:function(){for(var a=c.cvcf.length,d,l=0;l<a;l++)(d=b.qa(decodeURIComponent(c.cvcf[l])))&&g.d(d,"click",f.pa())},pa:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};b.Sa(function(){f.ab()})}})();
(function(){var b=mt.event,a=mt.o;if(c.med&&"undefined"!==typeof h.c){var g={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=a.stringify(g);h.c.i()};b.d(document,"click",function(){g.clk++});b.d(document,"keyup",function(){g.kb=1});b.d(window,"scroll",function(){g.sb++});b.d(window,"load",function(){setTimeout(d,5E3)})}})();c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
