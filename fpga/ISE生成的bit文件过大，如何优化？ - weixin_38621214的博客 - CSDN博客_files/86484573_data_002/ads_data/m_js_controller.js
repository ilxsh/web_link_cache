(function(_){var ba,ha,la,ma,ra,sa,z,xa,ya,Aa,Ha,La,Na,Wa,Za,$a,ab,cb,db,gb,ib,jb,lb,qb,sb,tb,ub,vb,wb,xb,zb,yb,Ab,Cb,Bb,Db,Eb,Fb,Gb,Jb,Lb,Qb,Pb,Tb,Vb,Wb,Xb,Zb,$b,cc,dc,bc,ac,ec,ic,jc,kc,lc,nc,oc,sc,qc,tc,xc,zc,yc,Bc,Cc,Dc,Gc,Jc,Kc,Nc,Oc,Qc,Rc,Sc,Uc,ea,Vc,fa;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};_.ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};_.da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:_.ca(a)}};ha=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype};la=function(a,b){if(b){var c=_.ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&(0,_.ka)(c,a,{configurable:!0,writable:!0,value:b})}};ma=function(a,b){this.b=a;(0,_.ka)(this,"description",{configurable:!0,writable:!0,value:b})};_.m=function(a){return void 0!==a};_.q=function(a){return"string"==typeof a};_.v=function(a,b,c){a=a.split(".");c=c||_.t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.m(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.na=function(){};_.oa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.pa=function(a){return"array"==_.oa(a)};_.qa=function(a){return"function"==_.oa(a)};ra=function(a,b,c){return a.call.apply(a.bind,arguments)};sa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}};_.w=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.w=ra:_.w=sa;return _.w.apply(null,arguments)};_.x=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}};_.y=function(a,b){function c(){}c.prototype=b.prototype;a.V=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};_.ua=function(a,b){b=(0,_.ta)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.va=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};z=function(a){return-1!=wa.indexOf(a)};xa=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};ya=function(a){ya[" "](a);return a};_.za=function(a,b){try{return ya(a[b]),!0}catch(c){}return!1};Aa=function(){var a=_.t.document;return a?a.documentMode:void 0};_.A=function(){};_.B=function(a,b,c){a.b=null;b||(b=[]);a.C=void 0;a.v=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||_.pa(d)||Ba&&d instanceof Uint8Array)){a.A=b-a.v;a.l=d;break a}}a.A=Number.MAX_VALUE}a.B={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.A)d+=a.v,a.g[d]=a.g[d]||Ca;else{var e=a.A+a.v;a.g[e]||(a.l=a.g[e]={});a.l[d]=a.l[d]||Ca}};_.Da=function(a,b){if(b<a.A){b+=a.v;var c=a.g[b];return c===Ca?a.g[b]=[]:c}if(a.l)return c=a.l[b],c===Ca?a.l[b]=[]:c};_.D=function(a,b,c){a=_.Da(a,b);return null==a?c:a};_.E=function(a,b){a=_.Da(a,b);a=null==a?a:!!a;return null==a?!1:a};_.G=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.Da(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};_.Ea=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=_.Da(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==Ca&&(b=a.b[c]=[]);return b};_.Fa=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if(_.pa(c))for(var d=0;d<c.length;d++)c[d]&&_.Fa(c[d]);else c&&_.Fa(c)}return a.g};Ha=function(a){_.B(this,a,Ga)};_.Ia=function(a){_.B(this,a,null)};_.Ka=function(a){_.B(this,a,Ja)};La=function(a){_.B(this,a,null)};_.Ma=function(a){_.B(this,a,null)};Na=function(a){return _.Ea(a,_.Ka,1)};_.Oa=function(a,b){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c||!/[?&]ae=1(&|$)/.test(a)||/[?&]dsh=1(&|$)/.test(a))return null;try{var d=b?c.index:a.length;return{Ha:a.slice(0,d)+"&act=1"+a.slice(d),N:decodeURIComponent(c[1])}}catch(e){return null}};_.Qa=function(){this.l="";this.v=Pa};_.Ra=function(a){if(a instanceof _.Qa&&a.constructor===_.Qa&&a.v===Pa)return a.l;_.oa(a);return"type_error:SafeUrl"};_.Ua=function(a){if(a instanceof _.Qa)return a;a="object"==typeof a&&a.g?a.b():String(a);Sa.test(a)||(a="about:invalid#zClosurez");return _.Ta(a)};_.Ta=function(a){var b=new _.Qa;b.l=a;return b};Wa=function(){this.l="";this.v=Va};_.Xa=function(a){if(a instanceof Wa&&a.constructor===Wa&&a.v===Va)return a.l;_.oa(a);return"type_error:SafeHtml"};_.Ya=function(a){var b=new Wa;b.l=a;return b};Za=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};$a=function(a,b){var c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)};ab=function(a,b,c,d,e){c="&"+b+"="+c;var f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?_.m(e)?ab(a,b,e,d,void 0):a:c};_.bb=function(a,b){this.b=_.m(a)?a:0;this.g=_.m(b)?b:0};cb=function(a){try{return!!a&&null!=a.location.href&&_.za(a,"foo")}catch(b){return!1}};db=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.eb=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};gb=function(a){return a?a.passive&&fb()?a:a.capture||!1:!1};_.I=function(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,gb(d))};ib=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,gb(void 0))};_.kb=function(a,b,c){jb(a,b,void 0===c?null:c)};jb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(f){c&&c(f);ib(d,"load",e);ib(d,"error",e)};_.I(d,"load",e);_.I(d,"error",e)}d.src=b;a.google_image_requests.push(d)};lb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.ob=function(a,b,c,d,e,f,g){if(!g)a:{if(1===a.nodeType)try{if(1==a.nodeType){c:{try{var h=a.getBoundingClientRect()}catch(r){var l={left:0,top:0,right:0,bottom:0};break c}if(_.nb&&a.ownerDocument.body){var n=a.ownerDocument;h.left-=n.documentElement.clientLeft+n.body.clientLeft;h.top-=n.documentElement.clientTop+n.body.clientTop}l=h}g=new _.bb(l.left,l.top)}else{var p=a.changedTouches?a.changedTouches[0]:a;g=new _.bb(p.clientX,p.clientY)}break a}catch(r){}g=new _.bb(0,0)}if(document.createEvent)l=document.createEvent("MouseEvents"),l.initMouseEvent("click",!0,!0,null,0,g.b,g.g,g.b,g.g,c,f,d,e,b,null);else return!1;if(a.dispatchEvent)a.dispatchEvent(l);else return!1;return!0};_.pb=function(a,b,c){c=void 0===c?_.J:c;switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.K=function(a,b,c){c=void 0===c?_.J:c;switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.pb(a,b,c),0<a.length)return a[0]}return null};qb=function(a,b){a&&lb(b,function(c,d){a.style[d]=c})};sb=function(a,b,c,d){b=c(d,b);if(!(b instanceof Array))return a;(0,_.rb)(b,function(e){if(2!==e.length&&3!==e.length)return a;a=ab(a,e[0],e[1],"adurl",e[2])});return a};tb=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};ub=function(a,b){this.b=a;this.g=b};vb=function(a,b){this.url=a;this.La=!!b;this.depth=null};wb=function(){this.l="&";this.v=_.m(void 0)?void 0:"trn";this.A=!1;this.g={};this.B=0;this.b=[]};xb=function(a,b){var c={};c[a]=b;return[c]};zb=function(a,b,c,d,e){var f=[];db(a,function(g,h){(g=yb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)};yb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(yb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(zb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))};Ab=function(a,b,c,d){a.b.push(b);a.g[b]=xb(c,d)};Cb=function(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=Bb(a)-c.length;if(0>d)return"";a.b.sort(function(p,r){return p-r});c=null;for(var e="",f=0;f<a.b.length;f++)for(var g=a.b[f],h=a.g[g],l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}var n=zb(h[l],a.l,",$");if(n){n=e+n;if(d>=n.length){d-=n.length;b+=n;e=a.l;break}else a.A&&(e=d,n[e-1]==a.l&&--e,b+=n.substr(0,e),e=a.l,d=0);c=null==c?g:c}}f="";a.v&&null!=c&&(f=e+a.v+"="+c);return b+f};Bb=function(a){if(!a.v)return 4E3;var b=1,c;for(c in a.g)b=c.length>b?c.length:b;return 4E3-a.v.length-b-a.l.length-1};Db=function(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{if(c instanceof wb)var g=c;else g=new wb,db(c,function(l,n){var p=g,r=p.B++;l=xb(n,l);p.b.push(r);p.g[r]=l});var h=Cb(g,a.b,"/pagead/gen_204?id="+b+"&");h&&("undefined"===typeof f?_.kb(_.t,h):_.kb(_.t,h,f))}catch(l){}};Eb=function(){var a=_.t.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.L)()};Fb=function(){var a=void 0===a?_.t:a;return(a=a.performance)&&a.now?a.now():null};Gb=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};Jb=function(){var a=Hb;this.events=[];this.g=a||_.t;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=Ib()||(null!=b?b:1>Math.random())};Lb=function(a){a&&Kb&&Ib()&&(Kb.clearMarks("goog_"+a.uniqueId+"_start"),Kb.clearMarks("goog_"+a.uniqueId+"_end"))};_.Ob=function(){var a=Mb;this.l=Nb;this.v=this.g;this.b=void 0===a?null:a};Qb=function(a,b,c){try{if(a.b&&a.b.b){var d=a.b.start(b.toString(),3);var e=c();a.b.end(d)}else e=c()}catch(f){c=!0;try{Lb(d),c=a.v(b,new tb(f,{message:Pb(f)}),void 0,void 0)}catch(g){a.g(217,g)}if(!c)throw f;}return e};_.Sb=function(a,b,c){var d=Rb;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return Qb(d,a,function(){return b.apply(c,f)})}};Pb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b};Tb=function(){if(!Hb.google_measure_js_timing){var a=Mb;a.b=!1;a.events!=a.g.google_js_reporting_queue&&(Ib()&&(0,_.rb)(a.events,Lb),a.events.length=0)}};_.Ub=function(a,b,c){Db(Nb,a,b,"jserror"!=a,c,void 0)};Vb=function(a,b,c){this.b=a;this.C=b;this.l=c;this.D=[];this.v=[];this.H={};this.g={};this.F=this.A=!1;this.B=-1};Wb=function(a,b,c){var d=b=b.getAttribute("data-original-click-url");if(d)for(var e=0;e<a.D.length;e++)d=sb(d,b,a.D[e],c);return d};Xb=function(a,b){b=void 0===b?Date.now():b;return b-a.B>_.D(a.b,39,0)};Zb=function(a,b){-1!==b.href.indexOf("dbm/clk")||null===_.Oa(b.href)&&!_.E(a.b,38)||Qb(Rb,446,function(){var c=Date.now(),d;if(d=Xb(a,c)){d=b.href;var e=(e=_.Oa(d,!0))?navigator.sendBeacon?navigator.sendBeacon($a(e.Ha,"&ri=1"),"")?{wa:e.N,ta:!0}:{wa:$a(d,"&ri=2"),ta:!1}:{wa:$a(d,"&ri=16"),ta:!1}:{wa:d,ta:!1};d=e.ta;e=e.wa;e=e instanceof _.Qa||!Yb.test(e)?e:_.Ta(e);e=e instanceof _.Qa?e:_.Ua(e);b.href=_.Ra(e)}d&&(a.B=c)})};$b=function(a,b,c,d){if(0!=a.v.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.eb(d);for(var f=[],g={},h=0;h<a.v.length;g={oa:g.oa},h++)if(g.oa=a.v[h](c),g.oa){var l=new Promise(function(n){return function(p){_.kb(_.M,n.oa,p)}}(g));f.push(l)}c=Promise.all(f);f=new Promise(function(n){window.setTimeout(n,2E3)});e&&Promise.race([c,f]).then((0,_.w)(Vb.prototype.O,a,b,d))}};cc=function(a,b,c){var d=_.Ea(a.C,_.Ia,23),e=!1;d=_.da(d);for(var f=d.next();!f.done;f=d.next())if(f=f.value,"use_async_for_js_click_handler"===_.D(f,1,"")&&"True"===_.D(f,2,"")){e=!0;break}e&&a.l?(_.eb(c),ac(a,b,c).then(function(g){g||Zb(a,b)})):bc(a,b,c)||Zb(a,b)};dc=function(a,b,c,d){a.g[d]||(a.g[d]={});a.g[d][c]||(a.g[d][c]=[]);_.I(b,d,(0,_.w)(a.K,a,b,c,d))};bc=function(a,b,c){var d=b.href;if(a.l){var e=Date.now(),f=Xb(a,e);if(a.l.Ka(b,c,a.b,a.F,f))return f&&(a.B=e),!0}else if(_.t.googdlu&&(_.t.googdlu.tryOpenPlayStore&&_.t.googdlu.tryOpenPlayStore(c,d,_.D(a.b,15,""))||_.t.googdlu.tryOpenItunesStore&&_.t.googdlu.tryOpenItunesStore(c,d,_.D(a.b,15,""),_.E(a.b,42),_.E(a.b,43),_.D(a.C,7,""),_.D(a.C,8,""))))return!0;return _.E(a.b,31)&&_.E(a.b,30)&&_.D(a.b,28,"")&&_.t.googdlu&&_.t.googdlu.tryOpenAppUrl?(_.t.googdlu.tryOpenAppUrl(c,d,_.D(a.b,32,""),_.D(a.b,28,"")),!0):!1};ac=function(a,b,c){return a.l?a.l.fb(b,c,a.b):new Promise(function(d){d(!1)})};ec=function(a){if(a.classList)return a.classList;a=a.className;return _.q(a)&&a.match(/\S+/g)||[]};_.fc=function(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=(0,_.ta)(ec(a),b))||(a.className+=0<a.className.length?" "+b:b)};_.hc=function(a,b){if(a.classList)a.classList.remove(b);else if(a.classList?a.classList.contains(b):0<=(0,_.ta)(ec(a),b))a.className=gc(ec(a),function(c){return c!=b}).join(" ")};ic=function(a){_.t.setTimeout(function(){throw a;},0)};jc=function(){var a=_.t.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var e=document.createElement("IFRAME");e.style.display="none";e.src="";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write("");e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=(0,_.w)(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.m(c.next)){c=c.next;var e=c.Ia;c.Ia=null;e()}};return function(e){d.next={Ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var f=document.createElement("SCRIPT");f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};document.documentElement.appendChild(f)}:function(e){_.t.setTimeout(e,0)}};kc=function(a,b){this.l=a;this.v=b;this.g=0;this.b=null};lc=function(){this.g=this.b=null};nc=function(){var a=mc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.g=null),b.next=null);return b};oc=function(){this.next=this.g=this.b=null};sc=function(a){pc||qc();rc||(pc(),rc=!0);mc.add(a,void 0)};qc=function(){if(_.t.Promise&&_.t.Promise.resolve){var a=_.t.Promise.resolve(void 0);pc=function(){a.then(tc)}}else pc=function(){var b=tc;!_.qa(_.t.setImmediate)||_.t.Window&&_.t.Window.prototype&&!z("Edge")&&_.t.Window.prototype.setImmediate==_.t.setImmediate?(uc||(uc=jc()),uc(b)):_.t.setImmediate(b)}};tc=function(){for(var a;a=nc();){try{a.b.call(a.g)}catch(c){ic(c)}var b=vc;b.v(a);100>b.g&&(b.g++,a.next=b.b,b.b=a)}rc=!1};_.N=function(){this.v=this.v;this.l=this.l};_.wc=function(a){_.N.call(this);this.C=1;this.A=[];this.B=0;this.b=[];this.g={};this.F=!!a};xc=function(a,b,c){sc(function(){a.apply(b,c)})};zc=function(a,b,c,d,e){this.A=new _.wc;this.g=a;this.g[0]=[b];this.v=[];this.l=new Vb(c,d,e);this.b=c;b=_.D(this.b,22,"");c=_.D(this.b,23,"");b&&c&&e&&(e.canOpenIntents([{url:b,id:b,G:c}],(0,_.w)(this.Oa,this))||e.canOpenURLs(b,(0,_.w)(this.Oa,this)));(e=_.K(1,"common_15click_anchor"))?(a[20]=[e],yc(this,20)):(e=_.va(_.pb(2,"common_15click_anchor")),0<e.length&&(a[20]=e,yc(this,20)))};_.Ac=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){var d=a[b].getAttribute(c);if(d)return d}return null};yc=function(a,b){if(a.g[b]&&a.Aa(b)){a.v.push(b);var c=a.l;a=a.g[b];for(var d=0;d<a.length;d++){var e=a[d];e.href&&e.setAttribute("data-original-click-url",e.href);dc(c,e,b,"mousedown");dc(c,e,b,"click")}c.H[b]=!0}};Bc=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0};Cc=function(a){this.C=new _.wc;this.A=null;this.l=[];this.b=a;this.v=[];this.B=!1;this.g=null};Dc=function(a){var b=[a];b=void 0===b?[]:b;_.t.google_logging_queue||(_.t.google_logging_queue=[]);_.t.google_logging_queue.push([10,b]);a=new Cc(new Ha(a));_.v("adSlot",a,void 0);return a};_.Ec=function(){var a=_.t.adSlot;return a?a:(Rb.g(536,Error("no adslot"),void 0,void 0),Dc(null))};Gc=function(a,b,c){zc.call(this,a,b,c,_.Ec().b,_.Ec().g);for(a=0;a<Fc.length;a++)yc(this,Fc[a])};Jc=function(a,b){var c=Hc,d={};if(!b)return null;d[0]=[b];lb(Ic,function(e){c[e]&&(d[e]=_.va(_.pb(2,c[e],b)))});return new Gc(d,b,a)};Kc=function(a){_.E(a,19)&&(0,_.rb)(_.Da(a,20),function(b){_.kb(_.M,b,void 0)})};Nc=function(a,b,c){b.gqid=Lc;b.qqid=Mc;b.com=a;_.Ub("glaurung",b,c)};Oc=function(a,b){var c=_.G(b,La,16);c&&_.E(c,12)&&_.E(b,5)&&qb(a,{backgroundColor:"transparent",backgroundImage:"none"})};Qc=function(a,b,c){_.K(2,"app-icon-link",b)&&(Hc[33]="app-icon-link");var d=a.b,e=_.K(1,"adunit",b),f=_.K(1,"ads",b);if(!e||!f)return 1;var g={overflow:"hidden"};0==_.D(d,32,0)?(g.width=_.D(d,2,0)+"px",g.height=_.D(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");qb(e,g);Oc(e,d);Oc(f,d);try{c(f,a)}catch(n){return _.E(d,13)&&(Pc=n),2}c=0;d=Na(d);for(e=0;e<d.length;e++){g=d[e];var h="taw"+_.D(g,2,0);f=_.K(1,h,b);if(!f)return 3;f=Jc(g,f);if(!f)return 1;var l=_.M.registerAd;l?l(f,h):c=4;h=_.M.initAppPromo;_.E(g,11)&&h&&h(f,a);Kc(g);if(_.E(g,19)&&(g=_.Da(g,33),0<g.length))for(h=0;h<g.length;h++)l=(0,_.w)(Gc.prototype.B,f,g[h]),f.l.v.push(l);a.Ba(f)}return c};Rc=function(a,b,c){var d=[];d[0]=[c];d[15]=[b];(b=_.K(1,"abgc"))&&(d[27]=[b]);(b=_.K(1,"cbc"))&&(d[28]=[b]);zc.call(this,d,c,a,_.Ec().b,_.Ec().g);yc(this,15)};Sc=function(a,b){var c={};c[0]=[b];zc.call(this,c,b,a,_.Ec().b,_.Ec().g)};Uc=function(a,b,c){zc.call(this,a,b,c,_.Ec().b,_.Ec().g);for(a=0;a<Tc.length;a++)yc(this,Tc[a]);this.listen(4,"mouseover",(0,_.w)(this.J,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.w)(this.J,this,0,"onhoverbg",!0))};_.aa=[];ea="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};if("function"==typeof Object.setPrototypeOf)Vc=Object.setPrototypeOf;else{var Wc;a:{var Xc={Wa:!0},Yc={};try{Yc.__proto__=Xc;Wc=Yc.Wa;break a}catch(a){}Wc=!1}Vc=Wc?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}fa=Vc;_.ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;_.ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};la("Promise",function(a){function b(g){this.g=0;this.l=void 0;this.b=[];var h=this.v();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}function c(){this.b=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.g=function(g){if(null==this.b){this.b=[];var h=this;this.l(function(){h.A()})}this.b.push(g)};var e=_.ia.setTimeout;c.prototype.l=function(g){e(g,0)};c.prototype.A=function(){for(;this.b&&this.b.length;){var g=this.b;this.b=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(n){this.v(n)}}}this.b=null};c.prototype.v=function(g){this.l(function(){throw g;})};b.prototype.v=function(){function g(n){return function(p){l||(l=!0,n.call(h,p))}}var h=this,l=!1;return{resolve:g(this.H),reject:g(this.A)}};b.prototype.H=function(g){if(g===this)this.A(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.K(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.B(g)}};b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.A(l);return}"function"==typeof h?this.O(h,g):this.B(g)};b.prototype.A=function(g){this.C(2,g)};b.prototype.B=function(g){this.C(1,g)};b.prototype.C=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.l=h;this.D()};b.prototype.D=function(){if(null!=this.b){for(var g=0;g<this.b.length;++g)f.g(this.b[g]);this.b=null}};var f=new c;b.prototype.K=function(g){var h=this.v();g.va(h.resolve,h.reject)};b.prototype.O=function(g,h){var l=this.v();try{g.call(h,l.resolve,l.reject)}catch(n){l.reject(n)}};b.prototype.then=function(g,h){function l(u,C){return"function"==typeof u?function(T){try{n(u(T))}catch(H){p(H)}}:C}var n,p,r=new b(function(u,C){n=u;p=C});this.va(l(g,n),l(h,p));return r};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.va=function(g,h){function l(){switch(n.g){case 1:g(n.l);break;case 2:h(n.l);break;default:throw Error("Unexpected state: "+n.g);}}var n=this;null==this.b?f.g(l):this.b.push(l)};b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};b.race=function(g){return new b(function(h,l){for(var n=_.da(g),p=n.next();!p.done;p=n.next())d(p.value).va(h,l)})};b.all=function(g){var h=_.da(g),l=h.next();return l.done?d([]):new b(function(n,p){function r(T){return function(H){u[T]=H;C--;0==C&&n(u)}}var u=[],C=0;do u.push(void 0),C++,d(l.value).va(r(u.length-1),p),l=h.next();while(!l.done)})};return b});ma.prototype.toString=function(){return this.b};_.Zc=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ma("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();_.t=this;_.L=Date.now||function(){return+new Date};var gc;_.ta=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.q(a))return _.q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.rb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.q(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};gc=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=_.q(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d};_.$c=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};_.ad=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var wa;a:{var bd=_.t.navigator;if(bd){var cd=bd.userAgent;if(cd){wa=cd;break a}}wa=""};ya[" "]=_.na;var ed,kd;_.dd=z("Opera");_.nb=z("Trident")||z("MSIE");ed=z("Edge");_.fd=z("Gecko")&&!(-1!=wa.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge");_.gd=-1!=wa.toLowerCase().indexOf("webkit")&&!z("Edge");_.hd=z("Android");_.id=xa();_.jd=z("iPad");a:{var ld="",md=function(){var a=wa;if(_.fd)return/rv:([^\);]+)(\)|;)/.exec(a);if(ed)return/Edge\/([\d\.]+)/.exec(a);if(_.nb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.gd)return/WebKit\/(\S+)/.exec(a);if(_.dd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();md&&(ld=md?md[1]:"");if(_.nb){var nd=Aa();if(null!=nd&&nd>parseFloat(ld)){kd=String(nd);break a}}kd=ld}_.od=kd;var qd=_.t.document;_.pd=qd&&_.nb?Aa()||("CSS1Compat"==qd.compatMode?parseInt(_.od,10):5):void 0;_.rd=xa()||z("iPod");_.sd=z("iPad");_.td=z("Android")&&!((z("Chrome")||z("CriOS"))&&!z("Edge")||z("Firefox")||z("FxiOS")||z("Opera")||z("Silk"));var Ba="function"==typeof Uint8Array,Ca=[];_.y(Ha,_.A);_.y(_.Ia,_.A);_.y(_.Ka,_.A);_.y(La,_.A);_.y(_.Ma,_.A);var Ga=[1,23],Ja=[20,33];_.Ka.prototype.getType=function(){return _.D(this,1,0)};_.Qa.prototype.g=!0;_.Qa.prototype.b=function(){return this.l.toString()};var Sa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pa={};_.Ta("about:blank");Wa.prototype.g=!0;Wa.prototype.b=function(){return this.l.toString()};var Va={};_.Ya("<!DOCTYPE html>");var ud=_.Ya("");_.Ya("<br>");var Yb=/^((market|itms|intent|itms-appss):\/\/)/i;_.vd=Za(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=_.Xa(ud);return!b.parentElement});var Ic;Ic={Kb:0,jc:1,kc:45,lc:46,Yb:48,URL:2,Db:3,vb:4,ic:5,cc:7,Qb:8,Bb:9,Sb:6,Vb:34,Lb:13,wb:14,Rb:15,Tb:16,Ub:40,gc:47,nc:29,Hb:30,hc:49,Zb:17,Eb:18,Jb:19,Ib:20,ec:23,zb:24,bc:25,ac:26,Ab:27,$b:28,VIDEO:39,mc:31,Gb:32,yb:33,Mb:35,Wb:36,xb:37,Fb:38,Xb:42,dc:43,fc:44,Cb:50,Nb:1E3,Ob:1001,Pb:1002};_.wd=[16,47,49,18,27,28,39];_.J=document;_.M=window;_.bb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.g=Math.ceil(this.g);return this};_.bb.prototype.floor=function(){this.b=Math.floor(this.b);this.g=Math.floor(this.g);return this};_.bb.prototype.round=function(){this.b=Math.round(this.b);this.g=Math.round(this.g);return this};var fb=Za(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});_.t.addEventListener("test",null,b)}catch(c){}return a});var xd=!!window.google_async_iframe_id,yd=xd&&window.parent||window;var zd=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ad=null;var Kb=_.t.performance,Bd=!!(Kb&&Kb.mark&&Kb.measure&&Kb.clearMarks),Ib=Za(function(){var a;if(a=Bd){var b;if(null===Ad){Ad="";try{a="";try{a=_.t.top.location.hash}catch(c){a=_.t.location.hash}a&&(Ad=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Ad;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});Jb.prototype.start=function(a,b){if(!this.b)return null;var c=Fb()||Eb();a=new Gb(a,b,c);b="goog_"+a.uniqueId+"_start";Kb&&Ib()&&Kb.mark(b);return a};Jb.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=Fb()||Eb();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";Kb&&Ib()&&Kb.mark(b);this.b&&this.events.push(a)}};_.Ob.prototype.pinger=ba(0);_.Ob.prototype.g=function(a,b,c,d,e){e=e||"jserror";try{var f=new wb;f.A=!0;Ab(f,1,"context",a);b.error&&b.meta&&b.id||(b=new tb(b,{message:Pb(b)}));b.msg&&Ab(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(d)try{d(g)}catch(F){}b=[g];f.b.push(3);f.g[3]=b;d=_.t;b=[];g=null;do{var h=d;if(cb(h)){var l=h.location.href;g=h.document&&h.document.referrer||null}else l=g,g=null;b.push(new vb(l||""));try{d=h.parent}catch(F){d=null}}while(d&&h!=d);l=0;for(var n=b.length-1;l<=n;++l)b[l].depth=n-l;h=_.t;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(n=1;n<b.length;++n){var p=b[n];p.url||(p.url=h.location.ancestorOrigins[n-1]||"",p.La=!0)}var r=new vb(_.t.location.href,!1);h=null;var u=b.length-1;for(p=u;0<=p;--p){var C=b[p];!h&&zd.test(C.url)&&(h=C);if(C.url&&!C.La){r=C;break}}C=null;var T=b.length&&b[u].url;0!=r.depth&&T&&(C=b[u]);var H=new ub(r,C);H.g&&Ab(f,4,"top",H.g.url||"");Ab(f,5,"url",H.b.url||"");Db(this.l,e,f,!1,c)}catch(F){try{Db(this.l,e,{context:"ecmserr",rctx:a,msg:Pb(F),url:H&&H.b.url},!1,c)}catch(P){}}return!0};var Nb,Rb;if(xd&&!cb(yd)){var Cd="."+_.J.domain;try{for(;2<Cd.split(".").length&&!cb(yd);)_.J.domain=Cd=Cd.substr(Cd.indexOf(".")+1),yd=window.parent}catch(a){}cb(yd)||(yd=window)}var Hb=yd,Mb=new Jb;Nb=new function(){var a=void 0===a?_.M:a;this.b="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};Rb=new _.Ob;"complete"==Hb.document.readyState?Tb():Mb.b&&_.I(Hb,"load",function(){Tb()});Vb.prototype.O=function(a,b){this.A=!0;var c=!1;b.target&&(c=_.ob(b.target,b.button,b.ctrlKey,b.shiftKey,b.metaKey,b.altKey,new _.bb(b.x,b.y)));!a.href||c||bc(this,a,b)||(Zb(this,a),_.M.top.location=a.href)};Vb.prototype.K=function(a,b,c,d){if(this.A)this.A=!1;else{d||(d=_.M.event);this.g[c][b].forEach(function(f){f(d)});if(a.href){var e=Wb(this,a,d.type);e&&(a.href=e)}"click"==c&&($b(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||cc(this,a,d))}};var uc;kc.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.l();return a};var vc=new kc(function(){return new oc},function(a){a.reset()});lc.prototype.add=function(a,b){var c=vc.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};oc.prototype.set=function(a,b){this.b=a;this.g=b;this.next=null};oc.prototype.reset=function(){this.next=this.g=this.b=null};var pc,rc=!1,mc=new lc;_.N.prototype.v=!1;_.N.prototype.Da=ba(1);_.N.prototype.M=ba(3);_.y(_.wc,_.N);_.wc.prototype.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.C;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.C=e+3;d.push(e);return e};_.wc.prototype.H=function(a){var b=this.b[a];b&&(b=this.g[b],0!=this.B?(this.A.push(a),this.b[a+1]=_.na):(b&&_.ua(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))};_.wc.prototype.D=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];xc(this.b[g+1],this.b[g+2],d)}else{this.B++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.B--,0<this.A.length&&0==this.B)for(;c=this.A.pop();)this.H(c)}}}};_.wc.prototype.M=ba(2);_.k=zc.prototype;_.k.Oa=function(a,b){b=(a=_.D(this.b,22,""))&&b?b[a]:!1;this.l.F=!!b;this.J(0,"app_installed",!b)};_.k.navigationAdPieces=function(){return this.v};_.k.Aa=function(){return!0};_.k.has=function(a){return(a=this.g[a])&&0<a.length};_.k.listen=function(a,b,c){var d=this.g[a];if(d){var e=this.l;c=_.x(c,a,this);var f=("click"==b||"mousedown"==b)&&e.H[a];e.g[b]||(e.g[b]={});e.g[b][a]||(e.g[b][a]=[]);e.g[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.I(d[a],b,c)}};_.k.J=function(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(var d=0;d<a.length;d++)c?_.hc(a[d],b):_.fc(a[d],b)}};_.k.getElementsByAdPiece=function(a){return this.g[a]?this.g[a]:[]};_.k.creativeConversionUrl=function(){return _.D(this.b,6,"")};_.k.redirectUrl=function(){return _.D(this.b,8,"")};_.k.getIndex=function(){return _.D(this.b,2,0)};_.k.listenOnObject=function(a,b){this.A.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.A.D(a,b)};_.k=Cc.prototype;_.k.forEachAd=function(a){(0,_.rb)(this.l,a)};_.k.Ba=function(a){this.l.push(a)};_.k.$a=function(a){if(a=_.K(1,a))this.A=a;if(0==this.l.length)_.t.css=null;else{for(a=0;a<this.v.length;++a)this.v[a]();this.B=!0}};_.k.listenOnObject=function(a,b){this.C.subscribe(a,b)};_.k.fireOnObject=function(a,b){this.C.D(a,b)};_.k.registerFinalizeCallback=function(a){this.B?a():this.v.push(a)};_.k.getSerializedAdSlotData=function(){return _.Fa(this.b)};_.k.getAdsLength=function(){return this.l.length};_.k.getAd=function(a){return 0<=a&&a<this.l.length&&this.l[a].getIndex()==a?this.l[a]:null};_.k.getContainer=function(){return this.A};_.k.openSystemBrowser=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1};_.k.openAttribution=function(a){return this.g?(this.g.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1};ha(Gc,zc);Gc.prototype.Aa=function(a){return Bc(this,a)||4===a};Gc.prototype.B=function(a,b){return this.Aa(b)?a:""};var Fc=[1,2,3,4,8,6,40,33,36,37,38,9];var Lc="UNKNOWN",Mc="UNKNOWN",Pc=null,O={},Hc=(O[1]="title-link",O[2]="url-link",O[3]="body-link",O[4]="button-link",O[8]="favicon-link",O[6]="image-link",O[26]="price",O[23]="reviews",O[43]="rating-stars",O[44]="reviews-count",O[24]="app-store",O[25]="promo-headline",O[33]="app-icon",O[16]="image-gallery",O[40]="image-gallery-image-link",O[36]="logo-link",O[37]="advertiser-link",O[38]="call-to-action-link",O[39]="video",O[42]="logo",O[50]="badge-box",O[9]="ad-background",O);ha(Rc,zc);ha(Sc,zc);ha(Uc,zc);Uc.prototype.Aa=function(a){return Bc(this,a)||4==a};var Q={},Dd=(Q[1]="rhtitle",Q[45]="rhtitleline1",Q[46]="rhtitleline2",Q[48]="rhlongtitle",Q[3]="rhbody",Q[2]="rhurl",Q[4]="rhbutton",Q[8]="rhfavicon",Q[14]="rhaddress",Q[6]="rhimage",Q[34]="rhimagetemplate",Q[49]="rh-scrollflow",Q[16]="rhimagegallery",Q[47]="rhreviewgallery",Q[29]="rhviewimagegallery",Q[30]="rhcloseimagegalleryview",Q[31]="rhtrydemobutton",Q[32]="rhclosetrydemoview",Q[39]="rhvideo",Q[9]="rhbackground",Q[13]="rh-icore-empty",Q[5]="rhsitelink",Q[7]="rhradlink",Q[17]="rh-multiframe",Q[18]="rh-box-breadcrumbs",Q[23]="rhstarratings",Q[24]="rhstoreicon",Q[25]="rhpromotext",Q[26]="rhprice",Q[27]="abgc",Q[28]="cbc",Q[35]="rhdemocountdowntimer",Q[36]="rhlogo",Q[1001]="rhoverlap-imagegallery",Q[1002]="rhoverlap-trydemo",Q),Tc=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];Cc.prototype.forEachAd=Cc.prototype.forEachAd;Cc.prototype.addAd=Cc.prototype.Ba;Cc.prototype.finalize=Cc.prototype.$a;_.v("buildAdSlot",Dc,void 0);_.v("buildGlaurungAds",function(a,b,c){var d=(new Date).getTime(),e=1,f=!1;Pc=null;try{var g=a.b;f=_.E(g,13);Lc=_.D(g,8,"");Mc=_.D(g,7,"");e=Qc(a,b,c)}catch(h){f&&(Pc=h),e=1}a={};Nc("bridge",(a.r=e,a.d=(new Date).getTime()-d,a));return e},void 0);_.v("glaurungError",function(){return Pc},void 0);_.v("glaurungBridge.log",Nc,void 0);_.v("glaurungBridge.getAdPieceClassName",function(a){return Hc[a]},void 0);_.v("buildImageAd",function(a,b){if(0>b||b>=Na(a.b).length)a=null;else{a=Na(a.b)[b];b=_.K(1,"google_image_div");var c=_.K(1,"aw0");a=b&&c?new Rc(a,c,b):null}return a},void 0);_.v("buildRichmediaAd",function(a,b){return 0>b||b>=Na(a.b).length?null:new Sc(Na(a.b)[b],_.J.body)},void 0);_.v("buildTextAd",function(a,b){var c=a.b;if(!(0>b||b>=Na(c).length)){if(0>b||b>=Na(a.b).length)var d=null;else{d=Na(a.b)[b];var e=_.K(1,"taw"+b);if(e){var f={0:[e]},g;for(g in Ic){var h=Ic[g],l=Dd[h];l&&(f[h]=_.va(_.pb(2,l,e)))}d=new Uc(f,e,d)}else d=null}d&&(_.M.registerAd&&_.M.registerAd(d,"taw"+b),a.Ba(d),_.E(Na(c)[b],11)&&_.M.initAppPromo&&_.M.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});
