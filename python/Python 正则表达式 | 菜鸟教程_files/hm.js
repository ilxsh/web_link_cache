(function(){var h={},mt={},c={id:"3eec0b7da6548cf07db3bc477ea905ee",dm:["runoob.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:1,rp:[[123181, 2]],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,aet:'',hca:'C71F5A6F5E35AC7B',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(b,a,e){var d;e.B&&(d=new Date,d.setTime(d.getTime()+e.B));document.cookie=b+"="+a+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.Lb?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:t};
mt.cookie.ib=function(b,a){try{var e="Hm_ck_"+ +new Date;mt.cookie.set(e,"is-cookie-enabled",{domain:b,path:a,B:r});var d="is-cookie-enabled"===mt.cookie.get(e)?"1":"0";mt.cookie.set(e,"",{domain:b,path:a,B:-1});return d}catch(g){return"0"}};mt.lang={};mt.lang.d=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.va=function(b){return mt.lang.d(b,"Number")&&isFinite(b)};mt.lang.ba=function(){return mt.lang.d(c.aet,"String")};
mt.lang.j=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.N=function(b,a){var e=u;if(b==t||!mt.lang.d(b,"Array")||a===r)return e;if(Array.prototype.indexOf)e=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){e=s;break}return e};
(function(){var b=mt.lang;mt.e={};mt.e.ra=function(a){return document.getElementById(a)};mt.e.$=function(a,b){var d=[],g=[];if(!a)return g;for(;a.parentNode!=t;){for(var k=0,p=0,m=a.parentNode.childNodes.length,f=0;f<m;f++){var n=a.parentNode.childNodes[f];if(n.nodeName===a.nodeName&&(k++,n===a&&(p=k),0<p&&1<k))break}if((m=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<d.length?m+">"+d.join(">"):m,g.push(m)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+
(1<k?"["+p+"]":""));a=a.parentNode}g.push(d.join(">"));return g};mt.e.Wa=function(a){return(a=mt.e.$(a,s))&&a.length?String(a[0]):""};mt.e.Gb=function(a){return mt.e.$(a,u)};mt.e.Eb=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.e.Ra=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.e.Fb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.e.Ra(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());
return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.e.getAttribute=function(a,b){var d=a.getAttribute&&a.getAttribute(b)||t;if(!d&&a.attributes&&a.attributes.length)for(var g=a.attributes,k=g.length,p=0;p<k;p++)g[p].nodeName===b&&(d=g[p].nodeValue);return d};mt.e.L=function(a){var b="document";a.tagName!==r&&(b=a.tagName);return b.toLowerCase()};mt.e.Ya=function(a){var e="";a.textContent?e=b.trim(a.textContent):
a.innerText&&(e=b.trim(a.innerText));e&&(e=e.replace(/\s+/g," ").substring(0,255));return e};mt.e.Sa=function(a){var b=mt.e.L(a);"input"===b&&("button"===a.type||"submit"===a.type)?a=a.value||"":"img"===b?(b=mt.e.getAttribute,a=b(a,"alt")||b(a,"title")||b(a,"src")):a="body"===b||"html"===b?["(hm-default-content-for-",b,")"].join(""):mt.e.Ya(a);return String(a).substring(0,255)};(function(){(mt.e.za=function(){function a(){if(!a.P){a.P=s;for(var b=0,d=g.length;b<d;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,
1);return}a()}var d=u,g=[],k;document.addEventListener?k=function(){document.removeEventListener("DOMContentLoaded",k,u);a()}:document.attachEvent&&(k=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",k),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.P=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",k,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",
k);window.attachEvent("onload",a);var g=u;try{g=window.frameElement==t}catch(m){}document.documentElement.doScroll&&g&&b()}})();return function(b){a.P?b():g.push(b)}}()).P=u})();return mt.e})();mt.event={};mt.event.c=function(b,a,e){b.attachEvent?b.attachEvent("on"+a,function(a){e.call(b,a)}):b.addEventListener&&b.addEventListener(a,e,u)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=u};
(function(){var b=mt.event;mt.g={};mt.g.ua=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.gb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.mb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.M=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.C=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.orientation=0;(function(){function a(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a}a();b.c(window,"orientationchange",a)})();return mt.g})();
mt.m={};mt.m.parse=function(b){return(new Function("return ("+b+")"))()};
mt.m.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=e[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var e=["["],k=d.length,p,m,f;for(m=0;m<k;m++)switch(f=d[m],typeof f){case "undefined":case "function":case "unknown":break;default:p&&e.push(","),e.push(mt.m.stringify(f)),p=1}e.push("]");return e.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';p=["{"];m=mt.m.stringify;for(k in d)if(Object.prototype.hasOwnProperty.call(d,k))switch(f=
d[k],typeof f){case "undefined":case "unknown":case "function":break;default:e&&p.push(","),e=1,p.push(m(k)+":"+m(f))}p.push("}");return p.join("")}}}();mt.localStorage={};mt.localStorage.R=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(b){return u}return s};
mt.localStorage.set=function(b,a,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.R()&&(mt.localStorage.h.expires=d.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(b,a),mt.localStorage.h.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),e=b.substring(0,a)-0;if(e&&e>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.R())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(b)}catch(d){}return t};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.R())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(b),mt.localStorage.h.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){if(window.sessionStorage)try{window.sessionStorage.setItem(b,a)}catch(e){}};
mt.sessionStorage.get=function(b){return window.sessionStorage?window.sessionStorage.getItem(b):t};mt.sessionStorage.remove=function(b){window.sessionStorage&&window.sessionStorage.removeItem(b)};mt.Ba={};mt.Ba.log=function(b,a){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=function(){e.onload=t;e=window[d]=t;a&&a(b)};e.src=b};mt.ga={};
mt.ga.Za=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return b};
mt.ga.Db=function(b,a,e,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+e+'" height="'+d+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.k=function(b,a){var e=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return e?e[3]:t};mt.url.Hb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:t};mt.url.Ua=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):t};mt.url.Z=function(b){return(b=mt.url.Ua(b))?b.replace(/:\d+$/,""):b};mt.url.$=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function b(){for(var a=u,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,g=0;g<d;g++){var k=b[g].src;if(k&&0===k.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.Qa=b})();var A=h.Qa;
h.l={Ib:"http://tongji.baidu.com/hm-web/welcome/ico",ya:"hm.baidu.com/hm.gif",Ga:"tongji.baidu.com",cb:"hmmd",eb:"hmpl",xb:"utm_medium",bb:"hmkw",zb:"utm_term",$a:"hmci",wb:"utm_content",fb:"hmsr",yb:"utm_source",ab:"hmcu",vb:"utm_campaign",z:0,w:Math.round(+new Date/1E3),A:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",da:A()||"https:"===document.location.protocol?"https:":"http:",Jb:0,Bb:6E5,jb:6E5,Kb:5E3,Cb:5,V:1024,Ab:1,G:2147483647,Ca:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
D:s,na:["a","input","button"],Ia:{id:"data-hm-id",U:"data-hm-class",ka:"data-hm-xpath",content:"data-hm-content",ha:"data-hm-tag",link:"data-hm-link"},ma:"data-hm-enabled",la:"data-hm-disabled"};(function(){var b={r:{},c:function(a,b){this.r[a]=this.r[a]||[];this.r[a].push(b)},J:function(a,b){this.r[a]=this.r[a]||[];for(var d=this.r[a].length,g=0;g<d;g++)this.r[a][g](b)}};return h.p=b})();
(function(){function b(b,d){var g=document.createElement("script");g.charset="utf-8";a.d(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=t,d()}:g.onload=function(){d()});g.src=b;var k=document.getElementsByTagName("script")[0];k.parentNode.insertBefore(g,k)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";h.b.a.nv?(b=encodeURIComponent(document.referrer),window.sessionStorage?e.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)):b=(window.sessionStorage?e.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||"";return b}var a=mt.localStorage,e=mt.sessionStorage;return h.qa=b})();
(function(){var b=mt.lang,a=mt.e,e=mt.event,d=mt.g,g=h.l,k=h.p,p=+new Date,m=[],f={pa:function(){return function(n){if(h.b&&h.b.D&&c.aet&&c.aet.length){var l=n.target||n.srcElement;if(l){var d=h.b.na,q=a.getAttribute(l,g.ma)!=t?s:u;if(a.getAttribute(l,g.la)==t)if(q)f.S(f.Y(l,n));else{var e=a.L(l);if(b.N(d,"*")||b.N(d,e))f.S(f.Y(l,n));else for(;l.parentNode!=t;){var q=l.parentNode,e=a.L(q),v="a"===e&&b.N(d,"a")?s:u,e="button"===e&&b.N(d,"button")?s:u,y=a.getAttribute(q,g.ma)!=t?s:u;if(a.getAttribute(q,
g.la)==t&&(v||e||y)){f.S(f.Y(q,n));break}l=l.parentNode}}}}}},Y:function(n,l){var e={},q=g.Ia;e.id=a.getAttribute(n,q.id)||a.getAttribute(n,"id")||"";e.U=a.getAttribute(n,q.U)||a.getAttribute(n,"class")||"";e.ka=a.getAttribute(n,q.ka)||a.Wa(n);e.content=a.getAttribute(n,q.content)||a.Sa(n);e.ha=a.getAttribute(n,q.ha)||a.L(n);e.link=a.getAttribute(n,q.link)||a.getAttribute(n,"href")||"";e.type=l.type||"click";q=b.va(n.offsetTop)?n.offsetTop:0;"click"===l.type?q=d.ua?l.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):l.pageY:"touchend"===l.type&&(l.ea&&b.d(l.ea.changedTouches,"Array")&&l.ea.changedTouches.length)&&(q=l.ea.changedTouches[0].pageY);e.ub=q;return e},S:function(a){var e=b.j;a=[+new Date-(h.b.s!==r?h.b.s:p),e(a.id),e(a.U),e(a.ha),e(a.ka),e(a.link),e(a.content),a.type,a.ub].join("*");f.T(a);b.d(this.H(),"Function")&&this.H()()},T:function(a){a.length>g.V||(encodeURIComponent(m.join("!")+a).length>g.V&&(f.I(m.join("!")),m=[]),m.push(a))},I:function(a){h.b.a.et=5;h.b.a.ep=a;h.b.i()},
H:function(){return function(){m&&m.length&&(f.I(m.join("!")),m=[])}}};b.ba()&&""!==c.aet&&k.c("pv-b",function(){e.c(document,"click",f.pa());"ontouchend"in document&&e.c(window,"touchend",f.pa());e.c(window,"unload",f.H())});return f})();
(function(){var b=mt.event,a=mt.g,e=h.l,d=h.p,g=+new Date,k=[],p=t,m={Ma:function(){return function(){h.b&&(h.b.D&&c.aet&&c.aet.length)&&(window.clearTimeout(p),p=window.setTimeout(function(){m.Ea(a.M()+a.C())},150))}},Ea:function(a){m.T([+new Date-(h.b.s!==r?h.b.s:g),a].join("*"))},T:function(a){if(encodeURIComponent(k.join("!")+a).length>e.V||3<k.length)m.I(k.join("!")),k=[];k.push(a)},I:function(b){h.b.a.et=6;h.b.a.vh=a.C();h.b.a.ep=b;h.b.i()},H:function(){return function(){k&&k.length&&(m.I(k.join("!")),
k=[])}}};mt.lang.ba()&&""!==c.aet&&d.c("pv-b",function(){b.c(window,"scroll",m.Ma());b.c(window,"unload",m.H())});return m})();
(function(){var b=mt.e,a=h.l,e=h.load,d=h.qa;h.p.c("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.za(function(){for(var k=0,p=c.rp.length;k<p;k++){var m=c.rp[k][0],f=c.rp[k][1],n=b.ra("hm_t_"+m);if(f&&!(2==f&&!n||n&&""!==n.innerHTML))n="",n=Math.round(Math.random()*a.G),n=4==f?g+"hl.js?"+["siteId="+c.id,"planId="+m,"rnd="+n].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+m,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
n].join("&"),e(n)}})})})();(function(){var b=h.l,a=h.load,e=h.qa;h.p.c("pv-b",function(){if(c.trust&&c.vcard){var d="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+e(),"rnd="+Math.round(Math.random()*b.G),"hm=1"].join("&");a(d)}})})();
(function(){function b(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.W.Va()+","+h.W.Ta();h.b.i()}}function a(){clearTimeout(z);var b;v&&(b="visible"==document[v]);y&&(b=!document[y]);m="undefined"==typeof b?s:b;if((!p||!f)&&m&&n)x=s,w=+new Date;else if(p&&f&&(!m||!n))x=u,q+=+new Date-w;p=m;f=n;z=setTimeout(a,100)}function e(a){var b=document,n="";if(a in b)n=a;else for(var q=["webkit","ms","moz","o"],e=0;e<q.length;e++){var d=q[e]+a.charAt(0).toUpperCase()+a.slice(1);if(d in b){n=
d;break}}return n}function d(b){if(!("focus"==b.type||"blur"==b.type)||!(b.target&&b.target!=window))n="focus"==b.type||"focusin"==b.type?s:u,a()}var g=mt.event,k=h.p,p=s,m=s,f=s,n=s,l=+new Date,w=l,q=0,x=s,v=e("visibilityState"),y=e("hidden"),z;a();(function(){var b=v.replace(/[vV]isibilityState/,"visibilitychange");g.c(document,b,a);g.c(window,"pageshow",a);g.c(window,"pagehide",a);"object"==typeof document.onfocusin?(g.c(document,"focusin",d),g.c(document,"focusout",d)):(g.c(window,"focus",d),
g.c(window,"blur",d))})();h.W={Va:function(){return+new Date-l},Ta:function(){return x?+new Date-w+q:q}};k.c("pv-b",function(){g.c(window,"unload",b())});return h.W})();
(function(){var b=mt.lang,a=h.l,e=h.load,d={hb:function(d){if((window._dxt===r||b.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=h.b.K();e([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),d)}},tb:function(a){if(b.d(a,"String")||b.d(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ka=d})();
(function(){function b(a,b,e,q){if(!(a===r||b===r||q===r)){if(""===a)return[b,e,q].join("*");a=String(a).split("!");for(var d,f=u,y=0;y<a.length;y++)if(d=a[y].split("*"),String(b)===d[0]){d[1]=e;d[2]=q;a[y]=d.join("*");f=s;break}f||a.push([b,e,q].join("*"));return a.join("!")}}function a(b){for(var d in b)if({}.hasOwnProperty.call(b,d)){var f=b[d];e.d(f,"Object")||e.d(f,"Array")?a(f):b[d]=String(f)}}var e=mt.lang,d=mt.m,g=mt.g,k=h.l,p=h.p,m=h.Ka,f={F:[],Q:0,wa:u,o:{ia:"",page:""},init:function(){f.f=
0;p.c("pv-b",function(){f.La();f.Oa()});p.c("pv-d",function(){f.Pa();f.o.page=""});p.c("stag-b",function(){h.b.a.api=f.f||f.Q?f.f+"_"+f.Q:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f.o.ia,f.o.page].join("!")});p.c("stag-d",function(){h.b.a.api=0;f.f=0;f.Q=0})},La:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];e.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===
n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},Oa:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],e=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,d=b.length;q<d;q++){var v=b[q];e.test(v[0])?f.F.push(v):f.fa(v)}a.cmd[c.id]={push:f.fa}},Pa:function(){if(0<f.F.length)for(var a=0,b=f.F.length;a<b;a++)f.fa(f.F[a]);f.F=t},fa:function(a){var b=a[0];if(f.hasOwnProperty(b)&&
e.d(f[b],"Function"))f[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(f.f|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))f.f|=2,h.b.sa=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){f.f|=4;h.b.a.et=0;h.b.a.ep="";h.b.a.vl=g.M()+g.C();h.b.a.kb=0;h.b.aa?(h.b.a.nv=0,h.b.a.st=4):h.b.aa=s;var b=h.b.a.u,e=h.b.a.su;h.b.a.u=k.protocol+"//"+document.location.host+a[1];f.wa||(h.b.a.su=document.location.href);h.b.i();h.b.a.u=b;
h.b.a.su=e;h.b.s=+new Date}},_trackEvent:function(a){2<a.length&&(f.f|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=e.j(a[1])+"*"+e.j(a[2])+(a[3]?"*"+e.j(a[3]):"")+(a[4]?"*"+e.j(a[4]):""),h.b.i())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){f.Q++;for(var q=(h.b.a.cv||"*").split("!"),x=q.length;x<b-1;x++)q.push("*");q[b-1]=d+"*"+e.j(a[2])+"*"+e.j(a[3]);h.b.a.cv=q.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+
c.id,encodeURIComponent(a),c.age):h.b.lb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=b(f,d,1,a);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var g=f.o.ia,g=b(g,d,2,a);f.o.ia=g}}},_setPageTag:function(a){if(!(3>a.length)){var d=e.j(a[1]);a=e.j(a[2]);if(d!==r&&a!==r){var g=f.o.page,
g=b(g,d,3,a);f.o.page=g}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"===a[1].charAt(0)?k.protocol+"//"+window.location.host+a[1]:a[1],f.wa=s)},_trackOrder:function(b){b=b[1];e.d(b,"Object")&&(a(b),f.f|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.i())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])f.f|=32,h.b.a.et=93,h.b.a.ep=a,h.b.i()},_trackRTPageview:function(b){b=b[1];e.d(b,"Object")&&(a(b),b=d.stringify(b),
512>=encodeURIComponent(b).length&&(f.f|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(e.d(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var g=function(a){var b=h.b.a.rt;f.f|=128;h.b.a.et=90;h.b.a.rt=a;h.b.i();h.b.a.rt=b},m=b.length;if(900>=m)g.call(this,b);else for(var m=Math.ceil(m/900),q="block|"+Math.round(Math.random()*k.G).toString(16)+"|"+m+"|",x=[],v=0;v<m;v++)x.push(v),x.push(b.substring(900*v,900*v+900)),g.call(this,q+x.join("|")),x=[]}},_setUserId:function(a){a=a[1];m.hb();
m.tb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.ta=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],u===a||s===a))h.b.D=a}};f.init();h.Ha=f;return h.Ha})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.ta=this.sa=s,this.D=l.D,this.na=g.ba()&&0<c.aet.length?c.aet.split(","):"",this.aa=u,this.init())}var a=mt.url,e=mt.Ba,d=mt.ga,g=mt.lang,k=mt.cookie,p=mt.g,m=mt.localStorage,f=mt.sessionStorage,n=mt.m,l=h.l,w=h.p;b.prototype={ca:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},xa:function(a,b){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(b)},O:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.xa(b,c.dm[d]))return s}else{var e=a.Z(b);if(e&&this.ca(e,c.dm[d]))return s}return u},K:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.ca(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.xa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+
"/"}return"/"},Xa:function(){if(!document.referrer)return l.w-l.z>c.vdur?1:4;var b=u;this.O(document.referrer)&&this.O(document.location.href)?b=s:(b=a.Z(document.referrer),b=this.ca(b||"",document.location.hostname));return b?l.w-l.z>c.vdur?1:4:3},getData:function(a){try{return k.get(a)||f.get(a)||m.get(a)}catch(b){}},setData:function(a,b,d){try{k.set(a,b,{domain:this.K(),path:this.X(),B:d}),d?m.set(a,b,d):f.set(a,b)}catch(e){}},lb:function(a){try{k.set(a,"",{domain:this.K(),path:this.X(),B:-1}),
f.remove(a),m.remove(a)}catch(b){}},qb:function(){var a,b,d,e,f;l.z=this.getData("Hm_lpvt_"+c.id)||0;13===l.z.length&&(l.z=Math.round(l.z/1E3));b=this.Xa();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<l.w-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(l.w);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=l.w,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,
l.w);d=k.ib(this.K(),this.X());if(0===c.nv&&this.O(document.location.href)&&(""===document.referrer||this.O(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},pb:function(){for(var a=[],b=this.a.et,d=+new Date,e=0,f=l.Ca.length;e<f;e++){var g=l.Ca[e],k=this.a[g];"undefined"!==typeof k&&""!==k&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(k))}switch(b){case 0:a.push("sn="+l.A);this.a.rt&&
a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+l.A);break;case 5:a.push("sn="+l.A);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 6:a.push("sn="+l.A);a.push("_lpt="+this.s);a.push("_ct="+d);break;case 85:a.push("sn="+l.A);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},rb:function(){this.qb();this.a.si=c.id;this.a.hca=r;this.a.su=document.referrer;this.a.hh=window.location.hash;this.a.ds=p.mb;this.a.cl=p.colorDepth+"-bit";this.a.ln=String(p.language).toLowerCase();
this.a.ja=p.javaEnabled?1:0;this.a.ck=p.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=d.Za();this.a.v="1.2.43";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";this.a.vl=p.M()+p.C();var b=document.location.href;this.a.cm=a.k(b,l.cb)||"";this.a.cp=a.k(b,l.eb)||a.k(b,l.xb)||"";this.a.cw=a.k(b,l.bb)||a.k(b,l.zb)||"";this.a.ci=a.k(b,l.$a)||a.k(b,l.wb)||"";this.a.cf=a.k(b,l.fb)||a.k(b,l.yb)||"";this.a.cu=a.k(b,l.ab)||a.k(b,l.vb)||""},init:function(){try{this.rb(),
0===this.a.nv?this.ob():this.oa(),h.b=this,this.Ja(),w.J("pv-b"),this.nb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(l.da+"//"+l.ya+"?"+b.join("&"))}},nb:function(){function a(){w.J("pv-d")}this.sa?(this.aa=s,this.a.et=0,this.a.ep="",this.a.vl=p.M()+p.C(),this.i(a)):a();this.s=+new Date},i:function(a){if(this.ta){var b=this;b.a.rnd=Math.round(Math.random()*l.G);w.J("stag-b");
var d=l.da+"//"+l.ya+"?"+b.pb();w.J("stag-d");b.Fa(d);e.log(d,function(d){b.Aa(d);g.d(a,"Function")&&a.call(b)})}},Ja:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.Z(document.referrer)===l.Ga?1:0,f=a.k(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*l.G),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",l.protocol+"//"+c.js+f+".js?"+
this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(b,f))},Fa:function(a){var b;try{b=n.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.a.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);f.set("Hm_unsent_"+c.id,n.stringify(b))},Aa:function(a){var b;try{b=n.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,
"")){b.splice(e,1);break}b.length?f.set("Hm_unsent_"+c.id,n.stringify(b)):this.oa()}},oa:function(){f.remove("Hm_unsent_"+c.id)},ob:function(){var a=this,b;try{b=n.parse(f.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var g=function(b){e.log(l.da+"//"+b,function(b){a.Aa(b)})},k=0;k<b.length;k++)g(b[k])}};return new b})();
(function(){var b=mt.event,a=mt.lang,e=h.l;if(c.kbtrk&&"undefined"!==typeof h.b){h.b.a.kb=a.va(h.b.a.kb)?h.b.a.kb:0;var d=function(){h.b.a.et=85;h.b.a.ep=h.b.a.kb;h.b.i()};b.c(document,"keyup",function(){h.b.a.kb++});b.c(window,"unload",function(){d()});setInterval(d,e.jb)}})();var B=h.l,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var b=mt.g,a=mt.lang,e=mt.event,d=mt.m;if("undefined"!==typeof h.b&&(c.med||(!b.ua||7<b.gb)&&c.cvcc)){var g,k,p,m,f=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},l=function(b,e){var f={};f.n=g;f.t="clk";f.v=b;if(e){var k=e.getAttribute("href"),l=e.getAttribute("onclick")?""+e.getAttribute("onclick"):t,m=e.getAttribute("id")||"";p.test(k)?(f.sn="mediate",
f.snv=k):a.d(l,"String")&&p.test(l)&&(f.sn="wrap",f.snv=l);f.id=m}h.b.a.et=86;h.b.a.ep=d.stringify(f);h.b.i();for(f=+new Date;400>=+new Date-f;);};if(c.med)k="/zoosnet",g="swt",p=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(p.test(e)||p.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){k="/other-comm";g="other";p=c.cvcc.q||r;var w=c.cvcc.id||r;m={click:function(){for(var a=[],b=f(document.getElementsByTagName("a")),b=[].concat.apply(b,f(document.getElementsByTagName("area"))),b=[].concat.apply(b,f(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],p!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),w?(d=d.getAttribute("id"),(p.test(e)||p.test(g)||w.test(d))&&
a.push(b[k])):(p.test(e)||p.test(g))&&a.push(b[k])):w!==r&&(d=d.getAttribute("id"),w.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof p){var q;k+=/\/$/.test(k)?"":"/";var x=function(b,d){if(q===d)return l(k+b,d),u;if(a.d(d,"Array")||a.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return l(k+b+"/"+(e+1),d[e]),u};e.c(document,"mousedown",function(b){b=b||window.event;q=b.target||b.srcElement;var d={};for(n(m,function(b,e){d[b]=a.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&n(d,x)!==u;)q=q.parentNode})}}})();(function(){var b=mt.e,a=mt.lang,e=mt.event,d=mt.m;if("undefined"!==typeof h.b&&a.d(c.cvcf,"Array")&&0<c.cvcf.length){var g={Da:function(){for(var a=c.cvcf.length,d,m=0;m<a;m++)(d=b.ra(decodeURIComponent(c.cvcf[m])))&&e.c(d,"click",g.Na())},Na:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=d.stringify(a);h.b.i()}}};b.za(function(){g.Da()})}})();
(function(){var b=mt.event,a=mt.m;if(c.med&&"undefined"!==typeof h.b){var e=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.b.a.et=86;h.b.a.ep=a.stringify(d);h.b.i()};b.c(document,"click",function(){d.clk++});b.c(document,"keyup",function(){d.kb=1});b.c(window,"scroll",function(){d.sb++});b.c(window,"unload",function(){d.t=+new Date-e;g()});b.c(window,"load",function(){setTimeout(g,5E3)})}})();})();
