(function(){var h;function m(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function q(a){var b=Object.create(null);if(!a)return b;for(var c;c=aa.exec(a);){var d=m(c[1],c[1]),e=c[2]?m(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var t="";
function w(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=b;var d=self.AMP_CONFIG||{},e=!!d.test||!1,f=q(c.location.originalHash||c.location.hash),g=d.spt;d=d.esm;var k=q(c.location.search);t||(t=c.AMP_CONFIG&&c.AMP_CONFIG.v?c.AMP_CONFIG.v:"012002192257490");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(f.development)||c.AMP_DEV_MODE),examiner:"2"==f.development,esm:d,geoOverride:f["amp-geo"],minified:!0,lite:void 0!=k.amp_lite,test:e,log:f.log,version:"2002192257490",
rtvVersion:t,singlePassType:g};c=b.__AMP_MODE=c}return c};function ba(a){var b=!1,c=null,d=a;return function(a){for(var e=[],g=0;g<arguments.length;++g)e[g-0]=arguments[g];b||(c=d.apply(self,e),b=!0,d=null);return c}};var x=self.AMP_CONFIG||{},y={thirdParty:x.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:x.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof x.thirdPartyFrameRegex?new RegExp(x.thirdPartyFrameRegex):x.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:x.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:x.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:x.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/]};function ca(){}function da(a,b){return b.reduce(function(a,b){return a+"&s[]="+encodeURIComponent(String(z(b)))},"https://log.amp.dev/?v=012002192257490&id="+encodeURIComponent(a))}
function A(a,b,c){var d=this;c=void 0===c?"":c;this.win=a;this.Y=b;this.w=this.win.console&&this.win.console.log&&"0"!=w().log?this.Y({localDev:!1,development:w(void 0).development,esm:w(void 0).esm,filter:w(void 0).filter,minified:!0,lite:w(void 0).lite,test:!1,log:w(void 0).log,version:w(void 0).version,rtvVersion:w(void 0).rtvVersion,singlePassType:w(void 0).singlePassType}):0;this.H=c;this.D=null;this.U=ba(function(){a.fetch(y.cdn+"/rtv/012002192257490/log-messages.simple.json").then(function(a){return a.json()},
ca).then(function(a){a&&(d.D=a)})})}function B(a,b,c,d){if(0!=a.w){var e=a.win.console.log;"ERROR"==c?e=a.win.console.error||e:"INFO"==c?e=a.win.console.info||e:"WARN"==c&&(e=a.win.console.warn||e);c=d;c=Array.isArray(c[0])?C(a,c[0]):c;b="["+b+"]";"string"===typeof c[0]?c[0]=b+" "+c[0]:c.unshift(b);e.apply(a.win.console,c)}}h=A.prototype;h.isEnabled=function(){return 0!=this.w};h.fine=function(a,b){4<=this.w&&B(this,a,"FINE",Array.prototype.slice.call(arguments,1))};
h.info=function(a,b){3<=this.w&&B(this,a,"INFO",Array.prototype.slice.call(arguments,1))};h.warn=function(a,b){2<=this.w&&B(this,a,"WARN",Array.prototype.slice.call(arguments,1))};h.P=function(a,b){if(1<=this.w)B(this,a,"ERROR",Array.prototype.slice.call(arguments,1));else{var c=D.apply(null,Array.prototype.slice.call(arguments,1));E(this,c);return c}};h.error=function(a,b){var c=this.P.apply(this,arguments);c&&(c.name=a||c.name,self.__AMP_REPORT_ERROR(c))};
h.expectedError=function(a,b){var c=this.P.apply(this,arguments);c&&(c.expected=!0,self.__AMP_REPORT_ERROR(c))};h.createError=function(a){var b=D.apply(null,arguments);E(this,b);return b};h.createExpectedError=function(a){var b=D.apply(null,arguments);E(this,b);b.expected=!0;return b};
h.assert=function(a,b,c){var d;if(Array.isArray(b))return this.assert.apply(this,[a].concat(C(this,b)));if(!a){var e=(b||"Assertion failed").split("%s"),f=e.shift(),g=f,k=[],l=2;for(""!=f&&k.push(f);0<e.length;){var r=e.shift(),n=arguments[l++];n&&n.tagName&&(d=n);k.push(n);f=r.trim();""!=f&&k.push(f);g+=z(n)+r}l=Error(g);l.fromAssert=!0;l.associatedElement=d;l.messageArray=k;E(this,l);self.__AMP_REPORT_ERROR(l);throw l;}return a};
h.assertElement=function(a,b){F(this,a,a&&1==a.nodeType,"Element expected",b);return a};h.assertString=function(a,b){F(this,a,"string"==typeof a,"String expected",b);return a};h.assertNumber=function(a,b){F(this,a,"number"==typeof a,"Number expected",b);return a};h.assertArray=function(a,b){F(this,a,Array.isArray(a),"Array expected",b);return a};h.assertBoolean=function(a,b){F(this,a,!!a===a,"Boolean expected",b);return a};
h.assertEnumValue=function(a,b,c){a:{for(var d in a)if(a[d]===b){a=!0;break a}a=!1}if(a)return b;this.assert(!1,'Unknown %s value: "%s"',c||"enum",b)};function E(a,b){b=G(b);a.H?b.message?-1==b.message.indexOf(a.H)&&(b.message+=a.H):b.message=a.H:0<=b.message.indexOf("\u200b\u200b\u200b")&&(b.message=b.message.replace("\u200b\u200b\u200b",""))}function C(a,b){var c=b.shift();w(a.win).development&&a.U();return a.D&&c in a.D?[a.D[c]].concat(b):["More info at "+da(c,b)]}
function F(a,b,c,d,e){Array.isArray(e)?a.assert(c,e.concat(b)):a.assert(c,(e||d)+": %s",b)}function z(a){return a&&1==a.nodeType?a.tagName.toLowerCase()+(a.id?"#"+a.id:""):a}function G(a){var b=Object.getOwnPropertyDescriptor(a,"message");if(b&&b.writable)return a;var c=a.stack,d=Error(a.message),e;for(e in a)d[e]=a[e];d.stack=c;return d}
function D(a){for(var b=null,c="",d=0;d<arguments.length;d++){var e=arguments[d];e instanceof Error&&!b?b=G(e):(c&&(c+=" "),c+=e)}b?c&&(b.message=c+": "+b.message):b=Error(c);return b}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var H=self.__AMP_LOG,I=null;function ea(){H.user||(H.user=fa());return H.user}
function fa(){var a="\u200b\u200b\u200b";if(!I)throw Error("failed to call initLogConstructor");return new I(self,function(a){var b=parseInt(a.log,10);return a.development||1<=b?4:2},a)}function J(){if(H.dev)return H.dev;if(!I)throw Error("failed to call initLogConstructor");return H.dev=new I(self,function(a){a=parseInt(a.log,10);return 3<=a?4:2<=a?3:0})};function K(a){return a||{}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function L(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function M(a,b,c){c=void 0===c?{}:c;var d=void 0===d?null:d;c.type=a;c.sentinel=b;return"amp-"+(d||"")+JSON.stringify(c)};function N(){var a=100;this.S=a;this.K=this.O=0;this.A=Object.create(null)}N.prototype.has=function(a){return!!this.A[a]};N.prototype.get=function(a){var b=this.A[a];if(b)return b.access=++this.K,b.payload};N.prototype.put=function(a,b){this.has(a)||this.O++;this.A[a]={payload:b,access:this.K};if(!(this.O<=this.S)){J().warn("lru-cache","Trimming LRU cache");a=this.A;var c=this.K+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.O--)}};K({c:!0,v:!0,a:!0,ad:!0,action:!0});var O,ha;var P,ia="Webkit webkit Moz moz ms O o".split(" ");function ja(a,b,c){if(L(b,"--"))return b;P||(P=Object.create(null));var d=P[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var f=0;f<ia.length;f++){var g=ia[f]+e;if(void 0!==a[g]){e=g;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(P[b]=d)}return d}function ka(a){var b={"pointer-events":"none"};a=a.style;for(var c in b)a.setProperty(ja(a,c),b[c].toString(),"important")}
function la(a,b,c){var d;(b=ja(a.style,b,void 0))&&(a.style[b]=d?c+d:c)}function Q(a,b){for(var c in b)la(a,c,b[c])}function ma(a,b){for(var c=0;c<b.length;c++)la(a,b[c],null)};function na(a){try{return!!a.location.href&&(a.test||!0)}catch(b){return!1}};function R(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function S(a){return R(Number(a.left),Number(a.top),Number(a.width),Number(a.height))};function oa(a,b,c){var d=150,e=c.width/2-b.width/2-b.left+"px",f=c.height/2-b.height/2-b.top+"px",g=b.top+"px",k=c.width-(b.left+b.width)+"px",l=b.left+"px",r=c.height-(b.top+b.height)+"px",n=b.height+"px",u=b.width+"px";var p=e;var v=f;"number"==typeof p&&(p+="px");void 0===v?p="translate("+p+")":("number"==typeof v&&(v+="px"),p="translate("+p+", "+v+")");Q(a,{position:"fixed",top:g,right:k,left:l,bottom:r,height:n,width:u,transition:"transform "+d+"ms ease",transform:p,margin:0})};function T(a,b,c){a.requestAnimationFrame(function(){b.measure&&b.measure(c);b.mutate&&b.mutate(c)})}function ra(a){var b=200;setTimeout(a,b)};function sa(a,b,c){T(a,{measure:function(c){c.viewportSize={width:a.innerWidth,height:a.innerHeight};c.rect=S(b.getBoundingClientRect())},mutate:function(d){var e=d.viewportSize,f=R(0,0,e.width,e.height);oa(b,d.rect,d.viewportSize);ka(b);ra(function(){T(a,{mutate:function(){ma(b,["pointer-events"]);Q(b,{position:"fixed","z-index":1E3,left:0,right:0,top:0,bottom:0,width:"100vw",height:"100vh",transition:null,transform:null,margin:0,border:0});c(d.rect,f)}})})}},{})}
function ta(a,b,c,d){T(a,{mutate:function(){ma(b,"position z-index left right top bottom width height margin border".split(" "));c();T(a,{measure:function(){d(S(b.getBoundingClientRect()))}})}})};function U(a){this.o=a;this.I=this.L=!1;this.B=null;ua(this)}function ua(a){a.o.addEventListener("resize",function(){return a.onWindowResize()})}U.prototype.onWindowResize=function(){this.L&&(this.I=!0)};U.prototype.expandFrame=function(a,b){var c=this;sa(this.o,a,function(a,e){c.L=!0;c.I=!1;c.B=a;b(e)})};U.prototype.collapseFrame=function(a,b){var c=this;ta(this.o,a,function(){c.L=!1;c.I||b(c.B)},function(a){c.B=a;c.I&&b(c.B)})};function va(){this.h=null}h=va.prototype;h.add=function(a){var b=this;this.h||(this.h=[]);this.h.push(a);return function(){b.remove(a)}};h.remove=function(a){this.h&&(a=this.h.indexOf(a),-1<a&&this.h.splice(a,1))};h.removeAll=function(){this.h&&(this.h.length=0)};h.fire=function(a){if(this.h)for(var b=this.h,c=0;c<b.length;c++)(0,b[c])(a)};h.getHandlerCount=function(){return this.h?this.h.length:0};function wa(a,b){function c(c){g=null;f=a.setTimeout(d,e);b.apply(null,c)}function d(){f=0;g&&c(g)}var e=100,f=0,g=null;return function(a){for(var b=[],d=0;d<arguments.length;++d)b[d-0]=arguments[d];f?g=b:c(b)}};function V(a){this.o=a;this.G=null;var b=this.o;a=b.document;if(a.scrollingElement)a=a.scrollingElement;else{var c;if(c=a.body)b=b.navigator.userAgent,c=/WebKit/i.test(b)&&!/Edge/i.test(b);a=c?a.body:a.documentElement}this.Z=a;this.J=null}
V.prototype.observe=function(a,b){var c=this;if(!this.G){this.G=new va;var d=wa(this.o,function(){c.J=c.getViewportRect();c.G.fire()});this.J=this.getViewportRect();this.o.addEventListener("scroll",d,!0);this.o.addEventListener("resize",d,!0)}b({viewportRect:this.J,targetRect:this.getTargetRect(a)});return this.G.add(function(){b({viewportRect:c.J,targetRect:c.getTargetRect(a)})})};
V.prototype.getViewportRect=function(){var a=this.Z,b=this.o,c=a.scrollLeft||b.pageXOffset,d=a.scrollTop||b.pageYOffset;return R(Math.round(c),Math.round(d),b.innerWidth,b.innerHeight)};V.prototype.getTargetRect=function(a){for(var b=S(a.getBoundingClientRect()),c=0,d=a.ownerDocument.defaultView;10>c&&d&&d!=this.o&&d!=this.o.top;c++,d=d.parent){var e=S(d.frameElement.getBoundingClientRect());a=b;var f=e.left,g=e.top;b=0==f&&0==g||0==a.width&&0==a.height?a:R(a.left+f,a.top+g,a.width,a.height)}return b};var xa=["send-positions"];function W(){this.M={}}W.prototype.listen=function(a,b){this.M[a]=b};W.prototype.fire=function(a,b,c){return a in this.M?this.M[a].apply(b,c):!1};
function ya(a,b){var c=na(a.top)?a.top:a;this.C=b;this.j=Object.create(null);a=c;a.ampInaboxPositionObserver=a.ampInaboxPositionObserver||new V(a);this.N=a.ampInaboxPositionObserver;this.F=new W;a=c;a.ampInaboxFrameOverlayManager=a.ampInaboxFrameOverlayManager||new U(a);this.R=a.ampInaboxFrameOverlayManager;this.F.listen("send-positions",this.X);this.F.listen("full-overlay-frame",this.W);this.F.listen("cancel-full-overlay-frame",this.V)}h=ya.prototype;
h.processMessage=function(a){var b=a.data;if("string"==typeof b&&0==b.indexOf("amp-")&&-1!=b.indexOf("{")){var c=b.indexOf("{");try{var d=JSON.parse(b.substr(c))}catch(p){J().error("MESSAGING","Failed to parse message: "+b,p),d=null}}else d=null;if(!d||!d.sentinel)return!1;a:if(b=d.sentinel,this.j[b])b=this.j[b];else{if(c=this.getMeasureableFrame(a.source))for(var e=c.contentWindow,f=0;f<this.C.length;f++)for(var g=this.C[f],k=0,l=e;10>k;k++,l=l.parent){if(g.contentWindow==l){this.j[b]={iframe:g,
measurableFrame:c};b=this.j[b];break a}if(l==window.top)break}b=null}var r=b;if(!r)return J().info("InaboxMessagingHost","Ignored message from untrusted iframe:",a),!1;var n=r.iframe.dataset.ampAllowed,u=n?n.split(/\s*,\s*/):xa;return-1===u.indexOf(d.type)?(J().info("InaboxMessagingHost","Ignored non-whitelisted message type:",a),!1):this.F.fire(d.type,this,[r.measurableFrame,d,a.source,a.origin])?!0:(J().warn("InaboxMessagingHost","Unprocessed AMP message:",a),!1)};
h.X=function(a,b,c){var d=this.N.getViewportRect(),e=this.N.getTargetRect(a);za(b,c,K({viewportRect:d,targetRect:e}));this.j[b.sentinel].observeUnregisterFn=this.j[b.sentinel].observeUnregisterFn||this.N.observe(a,function(a){return za(b,c,a)});return!0};function za(a,b,c){b.postMessage(M("position",a.sentinel,c),"*")}h.W=function(a,b,c,d){this.R.expandFrame(a,function(a){c.postMessage(M("full-overlay-frame-response",b.sentinel,K({success:!0,boxRect:a})),d)});return!0};
h.V=function(a,b,c,d){this.R.collapseFrame(a,function(a){c.postMessage(M("cancel-full-overlay-frame-response",b.sentinel,K({success:!0,boxRect:a})),d)});return!0};h.getMeasureableFrame=function(a){if(!a)return null;for(var b,c=0,d=a;10>c&&d!=d.top&&!na(d);c++,b=d,d=d.parent);if(b){c=b.parent.document.querySelectorAll("iframe");d=0;for(var e=c[d];d<c.length;d++,e=c[d])if(e.contentWindow==b)return e}return a.frameElement};
h.unregisterIframe=function(a){var b=this.C.indexOf(a);-1!=b&&this.C.splice(b,1);for(var c in this.j)this.j[c].iframe==a&&(this.j[c].observeUnregisterFn&&this.j[c].observeUnregisterFn(),delete this.j[c])};function Aa(a){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Ba(a,"ampdoc")}function Ca(a){var b=Da(a);b=Da(b);b=b.isSingleDoc()?b.win:b;return Ba(b,"viewer")}function Da(a){return a.nodeType?Aa((a.ownerDocument||a).defaultView).getAmpDoc(a):a}function Ba(a,b){var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj};function Ea(){var a=1.5,b=Fa(a);return function(a){return setTimeout(a,b())}}function Fa(a){var b=a||2,c=0;return function(){var a=Math.pow(b,c++);var e=a*(e||.3)*Math.random();.5<Math.random()&&(e*=-1);a+=e;return 1E3*a}};var Ga=!1;function Ha(a){Ga||(Ga=!0,Q(a.body,{opacity:1,visibility:"visible",animation:"none"}))};var X=self.__AMP_ERRORS||[];self.__AMP_ERRORS=X;function Y(a){Y=Ea();return Y(a)}function Ia(a){try{return JSON.stringify(a)}catch(b){return String(a)}}var Z;
function Ja(a,b){try{if(a)if(void 0!==a.message)a=G(a);else{var c=a;a=Error(Ia(c));a.origError=c}else a=Error("Unknown error");if(a.reported)return a;a.reported=!0;var d=b||a.associatedElement;d&&d.classList&&(d.classList.add("i-amphtml-error"),w().development&&(d.classList.add("i-amphtml-element-error"),d.setAttribute("error-message",a.message)));if(self.console){var e=console.error||console.log;a.messageArray?e.apply(console,a.messageArray):d?e.call(console,a.message,d):e.call(console,a.message)}d&&
d.T&&d.T("amp:error",a.message);Ka.call(void 0,void 0,void 0,void 0,void 0,a)}catch(f){setTimeout(function(){throw f;})}return a}function Ka(a,b,c,d,e){var f=this;this&&this.document&&Ha(this.document);if(!w().development){var g=!1;try{g=La()}catch(l){}if(!(g&&.01<Math.random())){var k=Ma(a,b,c,d,e,g);k&&Y(function(){try{return Na(f,k).catch(function(){})}catch(l){}})}}}
function Na(a,b){return Oa(a,b).then(function(a){if(!a){var c=new XMLHttpRequest;c.open("POST",y.errorReporting,!0);c.send(JSON.stringify(b))}})}
function Oa(a,b){var c=Aa(a);if(!c.isSingleDoc())return Promise.resolve(!1);var d=c.getSingleDoc(),e=d.getRootNode().documentElement,f=e.hasAttribute("report-errors-to-viewer");if(!f)return Promise.resolve(!1);var g=Ca(d);return g.hasCapability("errorReporter")?g.isTrustedViewer().then(function(a){if(!a)return!1;g.sendMessage("error",K({m:b.m,a:b.a,s:b.s,el:b.el,ex:b.ex,v:b.v,jse:b.jse}));return!0}):Promise.resolve(!1)}
function Ma(a,b,c,d,e,f){var g=a;e&&(g=e.message?e.message:String(e));g||(g="Unknown error");a=g;var k=!(!e||!e.expected);if(!/_reported_/.test(a)&&"CANCELLED"!=a){var l=!(self&&self.window),r=Math.random();if(-1!=a.indexOf("Failed to load:")||"Script error."==a||l)if(k=!0,.001<r)return;var n=0<=a.indexOf("\u200b\u200b\u200b");if(!(n&&.1<r)){g=Object.create(null);g.v=w().rtvVersion;g.noAmp=f?"1":"0";g.m=a.replace("\u200b\u200b\u200b","");g.a=n?"1":"0";g.ex=k?"1":"0";g.dw=l?"1":"0";var u="1p";self.context&&
self.context.location?(g["3p"]="1",u="3p"):w().runtime&&(u=w().runtime);w().singlePassType&&(g.spt=w().singlePassType);g.rt=u;"inabox"===u&&(g.adid=w().a4aId);f=self;g.ca=f.AMP_CONFIG&&f.AMP_CONFIG.canary?"1":"0";f=self;g.bt=f.AMP_CONFIG&&f.AMP_CONFIG.type?f.AMP_CONFIG.type:"unknown";self.location.ancestorOrigins&&self.location.ancestorOrigins[0]&&(g.or=self.location.ancestorOrigins[0]);self.viewerState&&(g.vs=self.viewerState);self.parent&&self.parent!=self&&(g.iem="1");if(self.AMP&&self.AMP.viewer){var p=
self.AMP.viewer.getResolvedViewerUrl(),v=self.AMP.viewer.maybeGetMessagingOrigin();p&&(g.rvu=p);v&&(g.mso=v)}Z||(Z=Pa());g.jse=Z;var pa=[];f=self.__AMP__EXPERIMENT_TOGGLES||null;for(var qa in f)pa.push(qa+"="+(f[qa]?"1":"0"));g.exps=pa.join(",");e?(g.el=e.associatedElement?e.associatedElement.tagName:"u",e.args&&(g.args=JSON.stringify(e.args)),n||e.ignoreStack||!e.stack||(g.s=e.stack),e.message&&(e.message+=" _reported_")):(g.f=b||"",g.l=c||"",g.c=d||"");g.r=self.document?self.document.referrer:"";
g.ae=X.join(",");g.fr=self.location.originalHash||self.location.hash;b=a;25<=X.length&&X.splice(0,X.length-25+1);X.push(b);return g}}}
function La(){var a=self;if(!a.document)return!1;a=a.document.querySelectorAll("script[src]");for(var b=0;b<a.length;b++){var c=a[b].src.toLowerCase();if("string"==typeof c){O||(O=self.document.createElement("a"),ha=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new N));var d=ha;var e=O;if(d&&d.has(c))c=d.get(c);else{e.href=c;e.protocol||(e.href=e.href);var f={href:e.href,protocol:e.protocol,host:e.host,hostname:e.hostname,port:"0"==e.port?"":e.port,pathname:e.pathname,search:e.search,hash:e.hash,origin:null};
"/"!==f.pathname[0]&&(f.pathname="/"+f.pathname);if("http:"==f.protocol&&80==f.port||"https:"==f.protocol&&443==f.port)f.port="",f.host=f.hostname;e=e.origin&&"null"!=e.origin?e.origin:"data:"!=f.protocol&&f.host?f.protocol+"//"+f.host:f.href;f.origin=e;d&&d.put(c,f);c=f}}if(!y.cdnProxyRegex.test(c.origin))return!0}return!1}
function Pa(){function a(){}a.prototype.t=function(){throw Error("message");};var b=new a;try{b.t()}catch(d){b=d.stack;if(L(b,"t@"))return"Safari";if(-1<b.indexOf(".prototype.t@"))return"Firefox";var c=b.split("\n").pop();if(/\bat .* \(/i.test(c))return"IE";if(L(b,"Error: message"))return"Chrome"}return"unknown"};new function(a){if(a.ampInaboxInitialized)J().info("inabox-host","Skip a 2nd attempt of initializing AMP inabox host.");else{a.ampInaboxInitialized=!0;I=A;J();ea();self.__AMP_REPORT_ERROR=Ja;a.ampInaboxIframes&&!Array.isArray(a.ampInaboxIframes)&&(J().info("inabox-host","Invalid %s. %s","ampInaboxIframes",a.ampInaboxIframes),a.ampInaboxIframes=[]);var b=new ya(a,a.ampInaboxIframes);a.AMP=a.AMP||{};a.AMP.inaboxUnregisterIframe?J().info("inabox-host","win.AMP[inaboxUnregisterIframe] already defined}"):
a.AMP.inaboxUnregisterIframe=b.unregisterIframe.bind(b);var c=a.ampInaboxPendingMessages,d=function(a){try{b.processMessage(a)}catch(f){J().error("inabox-host","Error processing inabox message",a,f)}};c&&(Array.isArray(c)?c.forEach(function(a){var b=!(!a.source||!a.source.postMessage);b||ea().warn("inabox-host","Ignoring an inabox message. Likely the requester iframe has been removed. message.data="+JSON.stringify(a.data));b&&d(a)}):J().info("inabox-host","Invalid %s %s","ampInaboxPendingMessages",
c));a.ampInaboxPendingMessages=[];a.ampInaboxPendingMessages.push=function(){};a.addEventListener("message",d.bind(b))}}(self);})();

//# sourceMappingURL=amp4ads-host-v0.js.map
