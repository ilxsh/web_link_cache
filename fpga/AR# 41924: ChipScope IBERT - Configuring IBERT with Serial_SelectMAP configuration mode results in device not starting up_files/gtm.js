
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"27",
  "macros":[{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".parentElement.getAttribute(\"href\")})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],".split(\"\/\");a=a.pop();return a=a.substr(0,a.lastIndexOf(\".\"))||a})();"]
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"URL",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],".split(\"\/\");a=a.pop();return-1\u003Ca.indexOf(\".\")?a:\"n\/a\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".parentElement.getAttribute(\"data-anchor\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-anchor\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"a\");for(i=0;i\u003Ca.length;i++)if(a[i].getAttribute(\"data-anchor\")\u0026\u0026\"active\"==a[i].parentElement.getAttribute(\"class\"))return a[i].getAttribute(\"data-anchor\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".closest(\".CoveoSearchInterface\");return(a=a.querySelector('.magic-box-input .magic-box-underlay span[data-id\\x3d\"Any\"]'))?a.getAttribute(\"data-value\"):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".form;return a.find('input[type\\x3d\"radio\"][name\\x3d\"feedbackResults\"]:checked').val()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-analytics\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],".getAttribute(\"data-function\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"headerSearchBox\"==",["escape",["macro",0],8,16],".closest(\".CoveoSearchInterface\").getAttribute(\"id\")?\"Header\":\"Non-header\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"button.btn.selected\").text().trim();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".closest(\".at-share-btn\").getAttribute(\"class\");return a.endsWith(\"at-svc-linkedin\")?\"LinkedIn\":a.endsWith(\"at-svc-twitter\")?\"Twitter\":a.endsWith(\"at-svc-facebook\")?\"Facebook\":a.endsWith(\"at-svc-google_plusone_share\")?\"Google Plus\":a.endsWith(\"at-svc-email\")?\"Email\":a.endsWith(\"at-svc-wechat\")?\"We Chat\":a.endsWith(\"at-svc-tencentqq\")?\"Tencent QQ\":a.endsWith(\"at-svc-sinaweibo\")?\"Sina Weibo\":\"None\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],".closest(\".CoveoSearchInterface\"),b=a.getAttribute(\"id\");return b\u0026\u0026(a.querySelector(\".supportSearch\")||a.querySelector(\".partnerDropdown\"))?\"Xilinx-Support-Partner\":\"Not-Support-Partner\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",17],8,16],".closest(\"a\");if(b){var a=b.getAttribute(\"id\");var c=b.getAttribute(\"class\")}return\"video-info\"!==a\u0026\u0026\"video-links\"!==a\u0026\u0026\"video-documents\"!==a||\"disableHover\"!==c?null:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=",["escape",["macro",0],8,16],".closest(\".CoveoSearchInterface\"),c=b.querySelector(\".btn.dropdown-toggle\");c\u0026\u0026(a=b.querySelector(\"li[data-label\\x3d'\"+c.innerText+\"']\").getAttribute(\"data-action-link\"));a||(a=b.querySelector(\".CoveoSearchbox\").getAttribute(\"data-action-link\"));a||(a=\"searchComponent\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var B=\"UA-11440126-15\",x=\"auto\",L=null;!function(){function h(a){Ua.set(a)}function q(a){}function x(){}function B(){}function F(a){}function L(a){}function Va(a){}function r(a,b,c,e){b[a]=function(){try{return e\u0026\u0026h(e),c.apply(this,arguments)}catch(u){throw u;}}}function da(a,b,c){\"none\"==b\u0026\u0026(b=\"\");var e=[],u=G(a);a=\"__utma\"==a?6:2;for(var d=0;d\u003Cu.length;d++){var g=(\"\"+u[d]).split(\".\");g.length\u003E=a\u0026\u0026e.push({hash:g[0],R:u[d],O:g})}if(0!=e.length)return 1==e.length?e[0]:ea(b,e)||ea(c,e)||\nea(null,e)||e[0]}function ea(a,b){var c;null==a?c=a=1:(c=M(a),a=M(0==a.indexOf(\".\")?a.substring(1):\".\"+a));for(var e=0;e\u003Cb.length;e++)if(b[e].hash==c||b[e].hash==a)return b[e]}function Wa(a){var b=a.get(v);if(a.get(z))return a=a.get(H),c=C(a+b,0),\"_ga\\x3d2.\"+N(c+\".\"+a+\"-\"+b);var c=C(b,0);return\"_ga\\x3d1.\"+N(c+\".\"+b)}function C(a,b){var c=new Date,e=p.navigator,d=e.plugins||[];a=[a,e.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b];for(b=0;b\u003Cd.length;++b)a.push(d[b].description);\nreturn M(a.join(\".\"))}function ta(a,b){if(b==k.location.hostname)return!1;for(var c=0;c\u003Ca.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0\u003C=b.indexOf(a[c]))return!0;return!1}function M(a){var b,c=1;if(a)for(c=0,b=a.length-1;0\u003C=b;b--){var e=a.charCodeAt(b);c=(c\u003C\u003C6\u0026268435455)+e+(e\u003C\u003C14);e=266338304\u0026c;c=0!=e?c^e\u003E\u003E21:c}return c}var R=function(a){this.w=a||[]};R.prototype.set=function(a){this.w[a]=!0};R.prototype.encode=function(){for(var a=[],b=0;b\u003Cthis.w.length;b++)this.w[b]\u0026\u0026(a[Math.floor(b\/\n6)]^=1\u003C\u003Cb%6);for(b=0;b\u003Ca.length;b++)a[b]=\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_\".charAt(a[b]||0);return a.join(\"\")+\"~\"};var Ua=new R,Xa=function(a){return a?a.replace(\/^[\\s\\xa0]+|[\\s\\xa0]+$\/g,\"\"):\"\"},ua=function(){for(var a=p.navigator.userAgent+(k.cookie?k.cookie:\"\")+(k.referrer?k.referrer:\"\"),b=a.length,c=p.history.length;0\u003Cc;)a+=c--^b++;return[S()^2147483647\u0026M(a),Math.round((new Date).getTime()\/1E3)].join(\".\")},Ya=function(){},N=function(a){return encodeURIComponent instanceof\nFunction?encodeURIComponent(a):(h(28),a)},T=function(a,b,c,e){try{a.addEventListener?a.addEventListener(b,c,!!e):a.attachEvent\u0026\u0026a.attachEvent(\"on\"+b,c)}catch(u){h(27)}},va=\/^[\\w\\-:\/.?=\u0026%!]+$\/,U=function(){var a=\"\"+k.location.hostname;return 0==a.indexOf(\"www.\")?a.substring(4):a},wa=function(a,b){if(1==b.length\u0026\u0026null!=b[0]\u0026\u0026\"object\"==typeof b[0])return b[0];for(var c={},e=Math.min(a.length+1,b.length),d=0;d\u003Ce;d++){if(\"object\"==typeof b[d]){for(var f in b[d])b[d].hasOwnProperty(f)\u0026\u0026(c[f]=b[d][f]);break}d\u003C\na.length\u0026\u0026(c[a[d]]=b[d])}return c},D=function(){this.keys=[];this.values={};this.m={}};D.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[\":\"+a]=b:this.values[\":\"+a]=b};D.prototype.get=function(a){return this.m.hasOwnProperty(\":\"+a)?this.m[\":\"+a]:this.values[\":\"+a]};D.prototype.map=function(a){for(var b=0;b\u003Cthis.keys.length;b++){var c=this.keys[b],e=this.get(c);e\u0026\u0026a(c,e)}};var p=window,k=document,fa=window,G=function(a){var b=[],c=k.cookie.split(\";\");a=new RegExp(\"^\\\\s*\"+a+\"\\x3d\\\\s*(.*?)\\\\s*$\");\nfor(var e=0;e\u003Cc.length;e++){var d=c[e].match(a);d\u0026\u0026b.push(d[1])}return b},V=function(a,b,c,e,d,f){a:{var u=fa._gaUserPrefs;if(u\u0026\u0026u.ioo\u0026\u0026u.ioo()||d\u0026\u0026!0===fa[\"ga-disable-\"+d])var g=!0;else{try{var l=fa.external;if(l\u0026\u0026l._gaUserPrefs\u0026\u0026\"oo\"==l._gaUserPrefs){g=!0;break a}}catch(Vb){}g=!1}}if(g||Za.test(k.location.hostname)||\"\/\"==c\u0026\u0026$a.test(e))return!1;if(b\u0026\u00261200\u003Cb.length\u0026\u0026(b=b.substring(0,1200),h(24)),c=a+\"\\x3d\"+b+\"; path\\x3d\"+c+\"; \",f\u0026\u0026(c+=\"expires\\x3d\"+(new Date((new Date).getTime()+f)).toGMTString()+\n\"; \"),e\u0026\u0026\"none\"!=e\u0026\u0026(c+=\"domain\\x3d\"+e+\";\"),e=k.cookie,k.cookie=c,!(e=e!=k.cookie))a:{a=G(a);for(e=0;e\u003Ca.length;e++)if(b==a[e]){e=!0;break a}e=!1}return e},ha=function(a){return N(a).replace(\/\\(\/g,\"%28\").replace(\/\\)\/g,\"%29\")},$a=\/^(www\\.)?google(\\.com?)?(\\.[a-z]{2})?$\/,Za=\/(^|\\.)doubleclick\\.net$\/i,xa=function(){this.M=[]};xa.prototype.add=function(a){};var S=function(){return Math.round(2147483647*Math.random())},W=function(){this.data=new D},X=new D,ia=[];W.prototype.get=function(a){var b=ya(a),\nc=this.data.get(a);return b\u0026\u0026void 0==c\u0026\u0026(c=\"function\"==typeof b.defaultValue?b.defaultValue():b.defaultValue),b\u0026\u0026b.Z?b.Z(this,a,c):c};var m=function(a,b){return a=a.get(b),void 0==a?\"\":\"\"+a},ja=function(a,b){return a=a.get(b),void 0==a||\"\"===a?0:1*a};W.prototype.set=function(a,b,c){if(a)if(\"object\"==typeof a)for(var e in a)a.hasOwnProperty(e)\u0026\u0026za(this,e,a[e],c);else za(this,a,b,c)};var za=function(a,b,c,e){if(void 0!=c)switch(b){case A:ab.test(c)}var d=ya(b);d\u0026\u0026d.o?d.o(a,b,c,e):a.data.set(b,c,e)},\nO=function(a,b,c,e,d){this.name=a;this.F=b;this.Z=e;this.o=d;this.defaultValue=c},ya=function(a){var b=X.get(a);if(!b)for(var c=0;c\u003Cia.length;c++){var e=ia[c],d=e[0].exec(a);if(d){b=e[1](d);X.set(b.name,b);break}}return b},bb=function(a){var b;return X.map(function(c,e){e.F==a\u0026\u0026(b=e)}),b\u0026\u0026b.name},d=function(a,b,c,e,d){return a=new O(a,b,c,e,d),X.set(a.name,a),a.name},Y=function(a,b){ia.push([new RegExp(\"^\"+a+\"$\"),b])},l=function(a,b,c){return d(a,b,c,void 0,Aa)},Aa=function(){},P=\"slga\",Z=!1,cb=l(\"apiVersion\",\n\"v\"),db=l(\"clientVersion\",\"_v\");d(\"anonymizeIp\",\"aip\");var eb=d(\"adSenseId\",\"a\"),Ba=d(\"hitType\",\"t\");d(\"hitCallback\");d(\"hitPayload\");d(\"nonInteraction\",\"ni\");d(\"currencyCode\",\"cu\");d(\"dataSource\",\"ds\");d(\"useBeacon\",void 0,!1);d(\"transport\");d(\"sessionControl\",\"sc\",\"\");d(\"sessionGroup\",\"sg\");d(\"queueTime\",\"qt\");d(\"_s\",\"_s\");d(\"screenName\",\"cd\");var fb=(d(\"location\",\"dl\",\"\"),d(\"referrer\",\"dr\"),d(\"page\",\"dp\",\"\"));d(\"hostname\",\"dh\");d(\"language\",\"ul\");d(\"encoding\",\"de\");d(\"title\",\"dt\",function(){return k.title||\nvoid 0});Y(\"contentGroup([0-9]+)\",function(a){return new O(a[0],\"cg\"+a[1])});d(\"screenColors\",\"sd\");d(\"screenResolution\",\"sr\");d(\"viewportSize\",\"vp\");d(\"javaEnabled\",\"je\");d(\"flashVersion\",\"fl\");d(\"campaignId\",\"ci\");d(\"campaignName\",\"cn\");d(\"campaignSource\",\"cs\");d(\"campaignMedium\",\"cm\");d(\"campaignKeyword\",\"ck\");d(\"campaignContent\",\"cc\");var gb=d(\"eventCategory\",\"ec\"),hb=d(\"eventAction\",\"ea\"),ib=d(\"eventLabel\",\"el\"),jb=d(\"eventValue\",\"ev\"),kb=d(\"socialNetwork\",\"sn\"),lb=d(\"socialAction\",\"sa\"),mb=\nd(\"socialTarget\",\"st\"),nb=(d(\"l1\",\"plt\"),d(\"l2\",\"pdt\"),d(\"l3\",\"dns\"),d(\"l4\",\"rrt\"),d(\"l5\",\"srt\"),d(\"l6\",\"tcp\"),d(\"l7\",\"dit\"),d(\"l8\",\"clt\"),d(\"timingCategory\",\"utc\")),ob=d(\"timingVar\",\"utv\"),pb=d(\"timingLabel\",\"utl\"),qb=d(\"timingValue\",\"utt\");d(\"appName\",\"an\");d(\"appVersion\",\"av\",\"\");d(\"appId\",\"aid\",\"\");d(\"appInstallerId\",\"aiid\",\"\");d(\"exDescription\",\"exd\");d(\"exFatal\",\"exf\");var rb=(d(\"expId\",\"xid\"),d(\"expVar\",\"xvar\"),d(\"exp\",\"exp\"),d(\"_utma\",\"_utma\")),sb=d(\"_utmz\",\"_utmz\"),tb=d(\"_utmht\",\"_utmht\");\nd(\"_hc\",void 0,0);d(\"_ti\",void 0,0);d(\"_to\",void 0,20);Y(\"dimension([0-9]+)\",function(a){return new O(a[0],\"cd\"+a[1])});Y(\"metric([0-9]+)\",function(a){return new O(a[0],\"cm\"+a[1])});d(\"linkerParam\",void 0,void 0,Wa,Aa);d(\"usage\",\"_u\");var Ca=d(\"_um\");d(\"forceSSL\",void 0,void 0,function(){return Z},function(a,b,c){h(34);Z=!!c});var ub=d(\"_j1\",\"jid\"),vb=d(\"_j2\",\"gjid\");Y(\"\\\\\\x26(.*)\",function(a){var b=new O(a[0],a[1]),c=bb(a[0].substring(1));return c\u0026\u0026(b.Z=function(a){return a.get(c)},b.o=function(a,\nb,d,g){a.set(c,d,g)},b.F=void 0),b});var wb=l(\"_oot\"),xb=d(\"previewTask\"),yb=d(\"checkProtocolTask\"),zb=d(\"validationTask\"),Ab=d(\"checkStorageTask\"),Bb=d(\"historyImportTask\"),Cb=(d(\"samplerTask\"),d(\"_rlt\"));d(\"buildHitTask\");d(\"sendHitTask\");var Db=(d(\"ceTask\"),d(\"devIdTask\")),Eb=(d(\"timingTask\"),d(\"displayFeaturesTask\")),y=l(\"name\"),v=l(\"clientId\",\"cid\"),Da=l(\"clientIdTime\"),Ea=d(\"userId\",\"uid\"),A=l(\"trackingId\",\"tid\"),Q=l(\"cookieName\",void 0,\"_ga\"),t=l(\"cookieDomain\"),E=l(\"cookiePath\",void 0,\"\/\"),\nka=l(\"cookieExpires\",void 0,63072E3),aa=l(\"legacyCookieDomain\"),la=l(\"legacyHistoryImport\",void 0,!0),I=l(\"storage\",void 0,\"cookie\"),ma=l(\"allowLinker\",void 0,!1),na=l(\"allowAnchor\",void 0,!0),Fa=l(\"sampleRate\",\"sf\",100),oa=l(\"siteSpeedSampleRate\",void 0,1),Ga=l(\"alwaysSendReferrer\",void 0,!1),H=l(\"_gid\",\"_gid\"),z=l(\"_ge\"),pa=l(\"_gcn\"),Fb=d(\"transportUrl\"),Gb=d(\"_r\",\"_r\"),qa=function(a,b,c){this.V=a;this.fa=b;this.$=!1;this.oa=c;this.ea=1},ra=function(a,b,c){if(a.fa\u0026\u0026a.$)return 0;if(a.$=!0,b){if(a.oa\u0026\u0026\nja(b,a.oa))return ja(b,a.oa);if(0==b.get(oa))return 0}return 0==a.V?0:(void 0===c\u0026\u0026(c=void 0),0==c%a.V?Math.floor(c\/a.V)%a.ea+1:0)},J=!1,Ia=function(a){\"cookie\"==m(a,I)\u0026\u0026(Ha(a,v,Q),a.get(z)\u0026\u0026Ha(a,H,pa,864E5))},Ha=function(a,b,c,e){var d=Ja(a,b);if(d){c=m(a,c);b=Ka(m(a,E));var f=sa(m(a,t));e=e||1E3*ja(a,ka);var g=m(a,A);if(\"auto\"!=f)V(c,d,b,f,g,e)\u0026\u0026(J=!0);else{h(32);var w;if(d=[],f=U().split(\".\"),4!=f.length||(w=f[f.length-1],parseInt(w,10)!=w)){for(w=f.length-2;0\u003C=w;w--)d.push(f.slice(w).join(\".\"));\nd.push(\"none\");w=d}else w=[\"none\"];for(var k=0;k\u003Cw.length;k++)if(f=w[k],a.data.set(t,f),d=Ja(a,v),V(c,d,b,f,g,e))return void(J=!0);a.data.set(t,\"auto\")}}else a.get(z)||h(54)},Hb=function(a){if(\"cookie\"==m(a,I)\u0026\u0026!J\u0026\u0026(Ia(a),!J))throw\"abort\";},Ib=function(a){if(a.get(la)){var b=m(a,t),c=m(a,aa)||U(),e=da(\"__utma\",c,b);e\u0026\u0026(h(19),a.set(tb,(new Date).getTime(),!0),a.set(rb,e.R),(b=da(\"__utmz\",c,b))\u0026\u0026e.hash==b.hash\u0026\u0026a.set(sb,b.R))}},Ja=function(a,b){b=ha(m(a,b));var c=sa(m(a,t)).split(\".\").length;return a=\nLa(m(a,E)),1\u003Ca\u0026\u0026(c+=\"-\"+a),b?[\"GA1\",c,b].join(\".\"):\"\"},Na=function(a,b){if(b\u0026\u0026!(1\u003Eb.length)){for(var c=[],e=0;e\u003Cb.length;e++){var d=b[e].split(\".\");var f=d.shift();(\"GA1\"==f||\"1\"==f)\u0026\u00261\u003Cd.length?(f=d.shift().split(\"-\"),1==f.length\u0026\u0026(f[1]=\"1\"),f[0]*=1,f[1]*=1,d={H:f,s:d.join(\".\")}):d=void 0;d\u0026\u0026c.push(d)}if(1==c.length)return h(13),c[0].s;if(0!=c.length)return h(14),b=sa(m(a,t)).split(\".\").length,c=Ma(c,b,0),1==c.length?c[0].s:(a=La(m(a,E)),c=Ma(c,a,1),c[0]\u0026\u0026c[0].s);h(12)}},Ma=function(a,b,c){for(var e,\nd=[],f=[],g=0;g\u003Ca.length;g++){var h=a[g];h.H[c]==b?d.push(h):void 0==e||h.H[c]\u003Ce?(f=[h],e=h.H[c]):h.H[c]==e\u0026\u0026f.push(h)}return 0\u003Cd.length?d:f},sa=function(a){return 0==a.indexOf(\".\")?a.substr(1):a},Ka=function(a){return a?(1\u003Ca.length\u0026\u0026a.lastIndexOf(\"\/\")==a.length-1\u0026\u0026(a=a.substr(0,a.length-1)),0!=a.indexOf(\"\/\")\u0026\u0026(a=\"\/\"+a),a):\"\/\"},La=function(a){return a=Ka(a),\"\/\"==a?1:a.split(\"\/\").length},Jb=new RegExp(\/^https?:\\\/\\\/([^\\\/:]+)\/),Kb=\/(.*)([?\u0026#])(?:_ga=[^\u0026#]*)(?:\u0026?)(.*)\/,ba=function(a){h(48);this.target=\na;this.T=!1};ba.prototype.ca=function(a,b){if(a.tagName){if(\"a\"==a.tagName.toLowerCase())return void(a.href\u0026\u0026(a.href=ca(this,a.href,b)));if(\"form\"==a.tagName.toLowerCase())return Oa(this,a)}if(\"string\"==typeof a)return ca(this,a,b)};var ca=function(a,b,c){var e=Kb.exec(b);e\u0026\u00263\u003C=e.length\u0026\u0026(b=e[1]+(e[3]?e[2]+e[3]:\"\"));a=a.target.get(\"linkerParam\");var d=b.indexOf(\"?\");e=b.indexOf(\"#\");return c?b+=(-1==e?\"#\":\"\\x26\")+a:(c=-1==d?\"?\":\"\\x26\",b=-1==e?b+(c+a):b.substring(0,e)+c+a+b.substring(e)),b.replace(\/\u0026+_ga=\/,\n\"\\x26_ga\\x3d\")},Oa=function(a,b){if(b\u0026\u0026b.action)if(\"get\"==b.method.toLowerCase()){a=a.target.get(\"linkerParam\").split(\"\\x3d\")[1];for(var c=b.childNodes||[],e=0;e\u003Cc.length;e++)if(\"_ga\"==c[e].name)return void c[e].setAttribute(\"value\",a);c=k.createElement(\"input\");c.setAttribute(\"type\",\"hidden\");c.setAttribute(\"name\",\"_ga\");c.setAttribute(\"value\",a);b.appendChild(c)}else\"post\"==b.method.toLowerCase()\u0026\u0026(b.action=ca(a,b.action))};ba.prototype.S=function(a,b,c){function e(c){try{c=c||p.event;a:{var e=\nc.target||c.srcElement;for(c=100;e\u0026\u00260\u003Cc;){if(e.href\u0026\u0026e.nodeName.match(\/^a(?:rea)?$\/i)){var f=e;break a}e=e.parentNode;c--}f={}}(\"http:\"==f.protocol||\"https:\"==f.protocol)\u0026\u0026ta(a,f.hostname||\"\")\u0026\u0026f.href\u0026\u0026(f.href=ca(d,f.href,b))}catch(Ub){h(26)}}var d=this;this.T||(this.T=!0,T(k,\"mousedown\",e,!1),T(k,\"keyup\",e,!1));c\u0026\u0026T(k,\"submit\",function(b){if(b=b||p.event,(b=b.target||b.srcElement)\u0026\u0026b.action){var c=b.action.match(Jb);c\u0026\u0026ta(a,c[1])\u0026\u0026Oa(d,b)}})};var Pa,Mb=function(a,b,c){this.U=ub;this.aa=b;(b=c)||\n(b=(b=m(a,y))\u0026\u0026\"t0\"!=b?Lb.test(b)?\"_gat_\"+ha(m(a,A)):\"_gat_\"+ha(b):\"_gat\");this.Y=b},Qa=function(a,b,c){b.get(c)||(\"1\"==G(a.Y)[0]?b.set(c,\"\",!0):b.set(c,\"\"+S(),!0))},Lb=\/^gtm\\d+$\/,Nb=function(a){if(!a.get(\"dcLoaded\")\u0026\u0026\"cookie\"==a.get(I)){var b=a,c=b;var e=(c=c.get(Ca),\"[object Array]\"==Object.prototype.toString.call(Object(c))||(c=[]),c);e=new R(e);e.set(51);b.set(Ca,e.w);b=new Mb(a);Qa(b,a,b.U);Qa(b,a,vb);e=b;c=a;c.get(e.U)\u0026\u0026V(e.Y,\"1\",c.get(E),c.get(t),c.get(A),6E4);a.get(b.U)\u0026\u0026(a.set(Gb,1,!0),a.set(Fb,\n\"undefined\/r\/collect\",!0))}},Ob=function(){var a=p.gaGlobal=p.gaGlobal||{};return a.hid=a.hid||S()},Pb=function(a,b,c){if(!Pa){var e=k.location.hash;var d=p.name,f=\/^#?gaso=([^\u0026]*)\/;if(d=(e=(e=e\u0026\u0026e.match(f)||d\u0026\u0026d.match(f))?e[1]:G(\"GASO\")[0]||\"\")\u0026\u0026e.match(\/^(?:!([-0-9a-z.]{1,40})!)?([-.\\w]{10,1200})$\/i))V(\"GASO\",\"\"+e,c,b,a,0),window._udo||(window._udo=b),window._utcp||(window._utcp=c),a=d[1],a=\"https:\/\/www.google.com\/analytics\/web\/inpage\/pub\/inpage.js?\"+(a?\"prefix\\x3d\"+a+\"\\x26\":\"\")+S(),b=\"_gasojs\",\ne=c=void 0,a\u0026\u0026(c?(e=\"\",b\u0026\u0026va.test(b)\u0026\u0026(e=' id\\x3d\"'+b+'\"'),va.test(a)\u0026\u0026k.write(\"\\x3cscript\"+e+' src\\x3d\"'+a+'\"\\x3e\\x3c\/script\\x3e')):(c=k.createElement(\"script\"),c.type=\"text\/javascript\",c.async=!0,c.src=a,e\u0026\u0026(c.onload=e),b\u0026\u0026(c.id=b),a=k.getElementsByTagName(\"script\")[0],a.parentNode.insertBefore(c,a)));Pa=!0}},ab=\/^(UA|YT|MO|GP)-(\\d+)-(\\d+)$\/,K=function(a){function b(a,b){e.b.data.set(a,b)}function c(a,c){b(a,c);e.filters.add(a)}var e=this;this.b=new W;this.filters=new xa;b(y,a[y]);b(A,Xa(a[A]));\nb(Q,a[Q]);b(t,a[t]||U());b(E,a[E]);b(ka,a[ka]);b(aa,a[aa]);b(la,a[la]);b(ma,a[ma]);b(na,a[na]);b(Fa,a[Fa]);b(oa,a[oa]);b(Ga,a[Ga]);b(I,a[I]);b(Ea,a[Ea]);b(Da,a[Da]);b(z,a[z]);b(cb,1);b(db,\"j50\");c(wb,q);c(xb,B);c(yb,x);c(zb,L);c(Ab,Hb);c(Bb,Ib);c(Cb,Va);c(Db,F);c(Eb,Nb);Qb(this.b,a[v]);this.b.set(eb,Ob());Pb(this.b.get(A),this.b.get(t),this.b.get(E));this.ra=new qa(1E4,!0,\"gaexp10\")},Qb=function(a,b){if(\"cookie\"==m(a,I)){J=!1;var c=G(m(a,Q));if(!(c=Na(a,c))){c=m(a,t);var e=m(a,aa)||U();c=da(\"__utma\",\ne,c);void 0!=c?(h(10),c=c.O[1]+\".\"+c.O[2]):c=void 0}c\u0026\u0026(a.data.set(v,c),c=G(m(a,pa)),(c=Na(a,c))\u0026\u0026a.data.set(H,c),J=!0)}a:if(c=a.get(na),e=k.location[c?\"href\":\"search\"],c=(e=e.match(\"(?:\\x26|#|\\\\?)\"+N(\"_ga\").replace(\/([.*+?^=!:${}()|\\[\\]\\\/\\\\])\/g,\"\\\\$1\")+\"\\x3d([^\\x26#]*)\"))\u0026\u00262==e.length?e[1]:\"\")if(a.get(ma))if(-1==(e=c.indexOf(\".\")))h(22);else{var d=c.substring(0,e),f=c.substring(e+1);e=f.indexOf(\".\");c=f.substring(0,e);f=f.substring(e+1);if(\"1\"==d){if(e=f,c!=C(e,0)\u0026\u0026c!=C(e,-1)\u0026\u0026c!=C(e,-2)){h(23);\nbreak a}}else{if(\"2\"!=d){h(22);break a}if(d=f.split(\"-\",2),e=d[1],c!=C(d[0]+e,0)\u0026\u0026c!=C(d[0]+e,-1)\u0026\u0026c!=C(d[0]+e,-2)){h(53);break a}h(2);a.data.set(H,d[0])}h(11);a.data.set(v,e)}else h(21);b\u0026\u0026(h(9),a.data.set(v,N(b)));a.get(v)||((b=(b=p.gaGlobal\u0026\u0026p.gaGlobal.vid)\u0026\u0026-1!=b.search(\/^(?:utma\\.)?\\d+\\.\\d+$\/)?b:void 0)?(h(17),a.data.set(v,b)):(h(8),a.data.set(v,ua())));a.data.set(z,a.get(z)||1==ra(new qa(0,!0),void 0,M(a.get(v))));a.get(z)\u0026\u0026(b=m(a,Q),a.data.set(pa,\"_ga\"==b?\"_gid\":b+\"_gid\"));a.get(z)\u0026\u0026!a.get(H)\u0026\u0026\n(h(3),a.data.set(H,ua()));Ia(a)};K.prototype.get=function(a){return this.b.get(a)};K.prototype.set=function(a,b){this.b.set(a,b)};var Rb={pageview:[fb],event:[gb,hb,ib,jb],social:[kb,lb,mb],timing:[nb,ob,qb,pb]};K.prototype.send=function(a){if(!(1\u003Earguments.length)){var b,c;\"string\"==typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]\u0026\u0026arguments[0][Ba],c=arguments);b\u0026\u0026(c=wa(Rb[b]||[],c),c[Ba]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={},ra(this.ra,\nthis.b)\u0026\u0026this.b.get(A))}};K.prototype.ma=function(a,b){var c=this;c.get(y)};var Ra=function(a){if(\"prerender\"==k.visibilityState||(a(),!1)){h(16);var b=!1,c=function(){if(!b\u0026\u0026\"prerender\"!=k.visibilityState\u0026\u0026(a(),!0)){b=!0;var e=c,d=k;d.removeEventListener?d.removeEventListener(\"visibilitychange\",e,!1):d.detachEvent\u0026\u0026d.detachEvent(\"onvisibilitychange\",e)}};T(k,\"visibilitychange\",c)}},Sb=function(a){};new D;new D;new D;var n={ga:function(){n.f=[]}};n.ga();n.D=function(a){var b=n.J.apply(n,arguments);\nb=n.f.concat(b);for(n.f=[];0\u003Cb.length\u0026\u0026!n.v(b[0])\u0026\u0026(b.shift(),!(0\u003Cn.f.length)););n.f=n.f.concat(b)};n.J=function(a){for(var b=[],c=0;c\u003Carguments.length;c++)try{var d=new Sb(arguments[c]);d.g||(d.i\u0026\u0026(d.ha=void 0),b.push(d))}catch(u){}return b};n.v=function(a){try{if(a.u)a.u.call(p,g.j(\"t0\"));else{var b=a.c==P?g:g.j(a.c);if(a.A)\"t0\"!=a.c||g.create.apply(g,a.a);else if(a.ba)g.remove(a.c);else if(b){if(a.i)return a.ha\u0026\u0026(a.ha=void 0),!0;if(a.K){var c=a.C,d=a.a,h=b.plugins_.get(a.K);h[c].apply(h,d)}else b[a.C].apply(b,\na.a)}}}catch(f){}};var g=function(a){h(1);n.D.apply(n,[arguments])};g.h={};g.P=[];g.L=0;g.answer=42;var Tb=[A,t,y];g.create=function(a){var b=wa(Tb,[].slice.call(arguments));b[y]||(b[y]=\"t0\");var c=\"\"+b[y];return g.h[c]?g.h[c]:(b=new K(b),g.h[c]=b,g.P.push(b),b)};g.remove=function(a){for(var b=0;b\u003Cg.P.length;b++)if(g.P[b].get(y)==a){g.P.splice(b,1);g.h[a]=null;break}};g.j=function(a){return g.h[a]};g.getAll=function(){return g.P.slice(0)};g.N=function(){\"ga\"!=P\u0026\u0026h(49);var a=p[P];if(!a||42!=a.answer){g.L=\na\u0026\u0026a.l;g.loaded=!0;var b=p[P]=g;r(\"create\",b,b.create);r(\"remove\",b,b.remove);r(\"getByName\",b,b.j,5);r(\"getAll\",b,b.getAll,6);b=K.prototype;r(\"get\",b,b.get,7);r(\"set\",b,b.set,4);r(\"send\",b,b.send);r(\"requireSync\",b,b.ma);b=W.prototype;r(\"get\",b,b.get);r(\"set\",b,b.set);\"https:\"==k.location.protocol||Z||!ra(new qa(1E4))||(h(36),Z=!0);(p.gaplugins=p.gaplugins||{}).Linker=ba;b=ba.prototype;r(\"decorate\",b,b.ca,20);r(\"autoLink\",b,b.S,25);a=a\u0026\u0026a.q;\"[object Array]\"==Object.prototype.toString.call(Object(a))?\nn.D.apply(g,a):h(50)}};g.da=function(){for(var a=g.getAll(),b=0;b\u003Ca.length;b++)a[b].get(y)};var Sa=g.N,Ta=p[P];Ta\u0026\u0026Ta.r?Sa():Ra(Sa);Ra(function(){n.D([\"provide\",\"render\",Ya])})}(window);var q=\"SCITYLANA\";q=q+\"_temp_\"+Math.round(2147483647*Math.random());B=slga.create(B,x,q);L=L||B.get(\"userId\")||B.get(\"clientId\");B=document.referrer?1:0;slga.remove(q);q=window;x=\"_o_r_d_e_r_sl\";var F=(new Date).getTime();q[x]=q[x]?q[x]==F?F+1:F\u003Eq[x]?F:q[x]+1:F;return q=[\"sl\\x3d1\",\"u\\x3d\"+L,\"t\\x3d\"+q[x],\"r\\x3d\"+B].join(\"\\x26\")})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"XilinxUserOrg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],";return a?a:\"Anonymous\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OptanonActiveGroups"
    },{
      "function":"__c",
      "vtp_value":"UA-11440126-15"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",19],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(.*)\/search\/site-keyword-search.html","value","EntireSite"],["map","key","(.*)\/products\/silicon-devices\/si-keyword-search.html","value","Silicon-Devices"],["map","key","(.*)\/products\/boards-and-kits\/bk-keyword-search.html","value","Boards-and-Kits"],["map","key","(.*)\/products\/intellectual-property\/ip-keyword-search.html","value","Intellectual-Property"],["map","key","(.*)\/search\/support-keyword-search.html","value","Answers_Docs_Forums"],["map","key","(.*)\/alliance\/member-keyword-search.html","value","Partners"],["map","key","(.*)\/video\/video-keyword-search.html","value","Videos"],["map","key","(.*)\/search\/press-keyword-search.html","value","Press"],["map","key","(.*)\/support\/documentation-navigation\/documentation-keyword-search.html","value","Documentation"],["map","key","(.*)\/support\/answer-navigation\/answer-keyword-search.html","value","AnswersDatabase"],["map","key","(.*)\/search\/forums-keyword-search.html","value","Forums"],["map","key","answer record,document,forums","value","Answers_Docs_Forums"],["map","key","document","value","Documentation"],["map","key","answer record","value","AnswersDatabase"],["map","key","product information","value","Partners"],["map","key","partner information","value","Partners"],["map","key","video","value","Videos"],["map","key","press release,media kit","value","Press"],["map","key","forums","value","Forums"],["map","key","site","value","EntireSite"]]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"External-Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",2],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Mailto",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",2],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Downloads",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",26],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","XilinxUserOrg","value",["macro",21]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]],["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"404 Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",2],
      "vtp_eventLabel":["macro",29],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Answer-Feedback",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",3],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",4]],["map","fieldName","title","value",["macro",5]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Tab",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Open",
      "vtp_eventLabel":["template",["macro",2],"#",["macro",7]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Tab",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Open",
      "vtp_eventLabel":["template",["macro",2],"#",["macro",6]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",30],"#",["macro",7]]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",30],"#",["macro",6]]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["template",["macro",30],"#",["macro",8]]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["template","Search Option=",["macro",31]," | q=",["macro",9]," | ",["macro",2]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["template","Search Option=",["macro",31]," | q=",["macro",9]," | ",["macro",2]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Share",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",15]," | ",["macro",2]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",2]," | ",["macro",18]],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":["template","BK ",["macro",32]],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["template",["macro",2]," | ",["macro",32]],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Community Hackter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",26],
      "vtp_dimension":["list",["map","index","3","dimension",["macro",20]]],
      "vtp_trackingId":["macro",25],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_4",
      "tag_id":36
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_7",
      "tag_id":37
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_8",
      "tag_id":38
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_9",
      "tag_id":39
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_10",
      "tag_id":40
    },{
      "function":"__cl",
      "tag_id":41
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_13",
      "tag_id":42
    },{
      "function":"__cl",
      "tag_id":43
    },{
      "function":"__cl",
      "tag_id":44
    },{
      "function":"__fsl",
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_21",
      "tag_id":45
    },{
      "function":"__cl",
      "tag_id":46
    },{
      "function":"__cl",
      "tag_id":47
    },{
      "function":"__cl",
      "tag_id":48
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"2077980_57",
      "tag_id":49
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var c=$(\".search-container .CoveoSearchInterface\"),d=$(\".mobile-search-container .CoveoSearchInterface\"),e=$(\".xilinxSearchBox .CoveoSearchInterface\");c.on(\"beforeRedirect\",function(a,b){window.dataLayer.push({event:\"CoveoFormSubmit\",enterElement:a.target})});d.on(\"beforeRedirect\",function(a,b){window.dataLayer.push({event:\"CoveoFormSubmit\",enterElement:a.target})});e.on(\"beforeRedirect\",function(a,b){window.dataLayer.push({event:\"CoveoFormSubmit\",enterElement:a.target})})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":",2,"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"xilinx.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"http"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)2077980_4($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"mailto"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)2077980_7($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\\.(c|cpp|dat|doc|docx|exe|gif|gz|jpg|log|mp3|pdf|png|ppt|pptx|rar|svg|tar|tgz|txt|xls|xlsm|xlsx|zip|asc|sig)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)2077980_8($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"Page Not Found"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.dom"
    },{
      "function":"_css",
      "arg0":["macro",17],
      "arg1":"form button.btn.btn-info"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"support\/answers\/"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"\\.(pdf)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)2077980_13($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"#tabAnchor-"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"browse-answer-record-anchor"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"#tabAnchor-"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Not-Support-Partner"
    },{
      "function":"_re",
      "arg0":["macro",9],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"CoveoFormSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"Xilinx-Support-Partner"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"xilinx.com"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^((?!none).)*$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"^((?!undefined).)*$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"video-(info|links|documents)+"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"^(Show Documentation|Contact Sales)$"
    },{
      "function":"_sw",
      "arg0":["macro",30],
      "arg1":"\/products\/boards-and-kits"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"https:\/\/www.hackster.io"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"disableHover post tutorial"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)2077980_57($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*",
      "ignore_case":true
    }],
  "rules":[
    [["if",0],["add",0,23,25,26,27,28,29,30,31,32]],
    [["if",4,5,6],["unless",3],["add",1]],
    [["if",5,7,8],["add",2]],
    [["if",5,9,10],["add",3]],
    [["if",11,12],["add",4]],
    [["if",13,14,15],["add",5]],
    [["if",5,16,17],["add",6]],
    [["if",15,18],["unless",19],["add",7,9]],
    [["if",15,20],["add",8,10]],
    [["if",0],["unless",1],["add",11],["block",0]],
    [["if",21,22,23],["add",12]],
    [["if",22,23,24],["add",13]],
    [["if",15,25,26,27],["add",14]],
    [["if",15,28],["add",15]],
    [["if",15,29,30],["add",16]],
    [["if",5,31,32,33],["add",17]],
    [["if",0,34],["add",18,21,22,24]],
    [["if",0,35],["add",19,20]],
    [["if",0],["unless",2],["block",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null,fa=function(a,b){function c(){}c.prototype=b.prototype;a.Xg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gg=function(d,e,g){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[e].apply(d,h)}};var ha=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},oa=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},pa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ra=function(a){return Math.round(Number(a))||0},sa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ta=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ua=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},va=function(){return(new Date).getTime()},wa=function(){this.prefix="gtm.";this.values=
{}};wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};wa.prototype.get=function(a){return this.values[this.prefix+a]};wa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ba=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fa=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Ga=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Ga(e,c[d])):Fa(e)?(Fa(c[d])||(c[d]={}),c[d]=Ga(e,c[d])):c[d]=e}return c};var f=window,u=document,Ha=navigator,Ia=u.currentScript&&u.currentScript.src,Ja=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ka=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},La=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ka(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ma=function(){if(Ia){var a=Ia.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Na=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ka(c,b);void 0!==a&&(c.src=a);return c},Oa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Sa=function(a){var b=
u.getElementById(a);if(b&&Ra(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ra(document.all[a][c],"id")==a)return document.all[a][c];return b},Ra=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ta=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ua=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Xa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ya=/:[0-9]+$/,Za=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},bb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=$a(a.protocol)||$a(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(Ya,"").toLowerCase());var g=b,h,k=$a(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=ab(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ya,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Za(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},$a=function(a){return a?a.replace(":","").toLowerCase():""},ab=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},cb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Ya,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var db=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},hb=function(a,b,c,d){var e=eb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=fb(e,function(g){return g.yb},b);if(1===e.length)return e[0].id;e=fb(e,function(g){return g.Ta},c);return e[0]?e[0].id:void 0}};
function ib(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=db(b,e).indexOf(c)}
var lb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=jb(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!kb(y,t)&&ib(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!kb(p,t)&&ib(m,a,l)}return k};function fb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function eb(a,b){for(var c=[],d=db(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var mb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,nb=/(^|\.)doubleclick\.net$/i,kb=function(a,b){return nb.test(document.location.hostname)||"/"===b&&mb.test(a)},jb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var ob=[],pb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},qb=function(a){return pb[a]},sb=/[\x00\x22\x26\x27\x3c\x3e]/g;var wb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,xb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},yb=function(a){return xb[a]};
ob[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(wb,yb)+"'"}};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};ob[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||ha;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(la(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(y){d(y,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var t=Wb(a[p],b,c,d);Sb&&(n=n||t===Sb.ob);e.push(t)}return Sb&&n?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&la(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var q=2;q<a.length;q++)ob[a[q]]&&(e=ob[a[q]](e));return e;case "tag":var r=a[1];if(!Ob[r])throw Error("Unable to resolve tag reference "+r+".");return e={wd:a[2],index:r};case "zb":var v={arg0:a[2],arg1:a[3],
ignore_case:a[5]};v["function"]=a[1];var x=Zb(v,b,c,d);a[4]&&(x=!x);return x;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(t){for(var q=0;q<t.length;q++)e[t[q]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],p=0;p<Ob.length;p++)d[p]&&!e[p]&&(n[p]=!0);return n},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var pc={},qc=null,rc=Math.random();pc.m="GTM-5RHQV7";pc.sb="3i1";var sc="www.googletagmanager.com/gtm.js";var tc=sc,uc=null,vc=null,wc=null,xc="//www.googletagmanager.com/a?id="+pc.m+"&cv=27",yc={},zc={},Ac=function(){var a=qc.sequence||0;qc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Bc()||d||"http:"!=f.location.protocol?a:b)+c},Bc=function(){var a=Ma(),b;if(1===a)a:{var c=tc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Cc=!1;var Fc=function(){var a=function(b){return{toString:function(){return b}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),ra:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Cg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Gc={},Hc=function(a){Gc.GTM=Gc.GTM||[];Gc.GTM[a]=!0};
var Ic=function(){return"&tc="+Ob.filter(function(a){return a}).length},Rc=function(){Jc&&(f.clearTimeout(Jc),Jc=void 0);void 0===Kc||Lc[Kc]&&!Mc||(Nc[Kc]||Oc.Pf()||0>=Pc--?(Hc(1),Nc[Kc]=!0):(Oc.gg(),Oa(Qc()),Lc[Kc]=!0,Mc=""))},Qc=function(){var a=Kc;if(void 0===a)return"";for(var b,c=[],d=Gc.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Sc,Lc[a]?"":
"&es=1",Tc[a],b?"&u="+b:"",Ic(),Mc,"&z=0"].join("")},Uc=function(){return[xc,"&v=3&t=t","&pid="+pa(),"&rv="+pc.sb].join("")},Vc="0.005000">Math.random(),Sc=Uc(),Wc=function(){Sc=Uc()},Lc={},Mc="",Kc=void 0,Tc={},Nc={},Jc=void 0,Oc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;va()-d>=b&&(c=0);return c>=a},gg:function(){va()-d>=b&&(c=0);c++;d=va()}}}(2,1E3),Pc=1E3,Xc=function(a,b){if(Vc&&!Nc[a]&&Kc!==a){Rc();Kc=a;Mc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Tc[a]="&e="+c+"&eid="+a;Jc||(Jc=f.setTimeout(Rc,500))}},Yc=function(a,b,c){if(Vc&&!Nc[a]&&b){a!==Kc&&(Rc(),Kc=a);var d=c+String(b[Fc.ra]||"").replace(/_/g,"");Mc=Mc?Mc+"."+d:"&tr="+d;Jc||(Jc=f.setTimeout(Rc,500));2022<=Qc().length&&Rc()}};var Zc=new wa,$c={},ad={},ed={set:function(a,b){Ga(bd(a,b),$c);cd()},get:function(a){return dd(a,2)},reset:function(){Zc=new wa;$c={};cd()}},dd=function(a,b){if(2!=b){var c=Zc.get(a);if(Vc){var d=fd(a);c!==d&&Hc(5)}return c}return fd(a)},fd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;
return e?g:hd(d)},hd=function(a){for(var b=$c,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var kd=function(a,b){ad.hasOwnProperty(a)||(Zc.set(a,b),Ga(bd(a,b),$c),cd())},bd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},cd=function(a){qa(ad,function(b,c){Zc.set(b,c);Ga(bd(b,void 0),$c);Ga(bd(b,c),$c);a&&delete ad[b]})};var ld=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),md={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},nd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var pd=function(a){var b=dd("gtm.whitelist");b&&Hc(9);var c=b&&Ba(ta(b),md),d=dd("gtm.blacklist");d||(d=dd("tagTypeBlacklist"))&&Hc(3);d?Hc(8):d=[];
od()&&(d=ta(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(ta(d),"google")&&Hc(2);var e=d&&Ba(ta(d),nd),g={};return function(h){var k=h&&h[Fc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=zc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ma(c,l[p])){Hc(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,
k);if(q)t=q;else{var r;b:{for(var v=l||[],x=new wa,y=0;y<e.length;y++)x.set(e[y],!0);for(var w=0;w<v.length;w++)if(x.get(v[w])){r=!0;break b}r=!1}var D=r;D&&Hc(10);t=D}}return g[k]=!m||t}},od=function(){return ld.test(f.location&&f.location.hostname)};var rd=function(a){return function(b,c){if(ka(c))a(b,c);else{b instanceof qd||(b=new qd(b));var d=b;c&&d.jc.push(c);throw d;}}},qd=function(a){this.Tf=a;this.jc=[]};fa(qd,Error);var sd={ff:function(a,b){b[Fc.Vc]&&"string"===typeof a&&(a=1==b[Fc.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Fc.Xc)&&null===a&&(a=b[Fc.Xc]);b.hasOwnProperty(Fc.Zc)&&void 0===a&&(a=b[Fc.Zc]);b.hasOwnProperty(Fc.Yc)&&!0===a&&(a=b[Fc.Yc]);b.hasOwnProperty(Fc.Wc)&&!1===a&&(a=b[Fc.Wc]);return a}};var td={active:!0,isWhitelisted:function(){return!0}},ud=function(a){var b=qc.zones;!b&&a&&(b=qc.zones=a());return b};var vd=!1,wd=0,xd=[];function yd(a){if(!vd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){vd=!0;for(var e=0;e<xd.length;e++)z(xd[e])}xd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function zd(){if(!vd&&140>wd){wd++;try{u.documentElement.doScroll("left"),yd()}catch(a){f.setTimeout(zd,50)}}}var Ad=function(a){vd?a():xd.push(a)};var Bd=function(){function a(d){return!ka(d)||0>d?0:d}if(!qc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ka(ed.get("gtm.start"))?ed.get("gtm.start"):0;qc._li={cst:a(c-b),cbt:a(vc-b)}}};var Fd=!1,Gd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Hd=!1;var Id=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(!f[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Bd();return f[b]},Jd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Gd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ld=function(){},Kd=function(){return f.GoogleAnalyticsObject||"ga"},Md=!1;var Td=function(a){};
function Sd(a,b){a.containerId=pc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ud(a,b,c,d,e){var g=Ob[a],h=Vd(a,b,c,d,e);if(!h)return null;var k=Wb(g[Fc.nd],d.da,[],ha);if(k&&k.length){var l=k[0];h=Ud(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Vd(a,b,c,d,e){function g(){if(h[Fc.Ae])l();else{var y=Xb(h,d.da,[],rd(function(B){Hc(6);Td(B)})),w=!1;y.vtp_gtmOnSuccess=function(){if(!w){w=!0;Yc(d.id,Ob[a],"5");k()}};y.vtp_gtmOnFailure=function(){if(!w){w=!0;Yc(d.id,Ob[a],"6");l()}};y.vtp_gtmTagId=h.tag_id;Yc(d.id,h,"1");var D=
!1,A=function(B,C){if(!D){B instanceof qd||(B=new qd(B));var H=B;C&&H.jc.push(C);throw H;}Td(B);Yc(d.id,h,"7");w||(w=!0,l())};try{Vb(y,A)}catch(B){try{D=!0,A(B)}catch(C){}}}}
var h=Ob[a],k=c.I,l=c.O,m=c.terminate;if(d.da(h))return null;var n=Wb(h[Fc.od],d.da,[],ha);if(n&&n.length){var p=n[0],t=Ud(p.index,b,{I:k,O:l,terminate:m},d,e);if(!t)return null;k=t;l=2===p.wd?m:t}if(h[Fc.md]||h[Fc.Be]){var q=h[Fc.md]?Pb:b,r=k,v=l;if(!q[a]){g=ya(g);var x=Wd(a,q,g);k=x.I;l=x.O}return function(){q[a](r,v)}}return g}function Wd(a,b,c){var d=[],e=[];b[a]=Xd(d,e,c);return{I:function(){b[a]=Yd;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=Zd;for(var g=0;g<e.length;g++)e[g]()}}}
function Xd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yd(a){a()}function Zd(a,b){b()};function $d(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var ce=function(a){for(var b=$d(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Va[e]){var g=Ob[e];var h=b.add();try{var k=Ud(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Yb(g),uf:k}):(ae(e,a),h())}catch(m){h()}}b.Qe();d.sort(be);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function be(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function ae(a,b){if(!Vc)return;var c=function(d){var e=b.da(Ob[d])?"3":"4",g=Wb(Ob[d][Fc.nd],b.da,[],ha);g&&g.length&&c(g[0].index);Yc(b.id,Ob[d],e);var h=Wb(Ob[d][Fc.od],b.da,[],ha);h&&h.length&&c(h[0].index)};c(a);}
var de=!1,ee=function(a,b,c,d){if("gtm.js"==b){if(de)return!1;de=!0}Xc(a,b);var e=pd(c),g={id:a,name:b,callback:d||ha,da:e,Va:[]};g.Va=cc(e,rd(function(n){Td(n)}));var h=ce(g);"gtm.js"!==b&&"gtm.sync"!==b||Ld();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Ob[l];if(m&&!k[m[Fc.ra]])return!0}return!1};var F={Pb:"event_callback",Rb:"event_timeout"};var ge={};var he=/[A-Z]+/,ie=/\s/,je=function(a){if(ja(a)&&(a=ua(a),!ie.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(he.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}},le=function(a){for(var b={},c=0;c<a.length;++c){var d=je(a[c]);d&&(b[d.id]=d)}ke(b);var e=[];qa(b,function(g,h){e.push(h)});return e};
function ke(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ca[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var me=null,ne={},oe={},pe,re=function(a,b){var c={event:a};b&&(c.eventModel=Ga(b),b[F.Pb]&&(c.eventCallback=b[F.Pb]),b[F.Rb]&&(c.eventTimeout=b[F.Rb]));return c};
var we={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Fa(a[2]))return;c=a[2]}var d=re(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];ge[b]||(ge[b]=[]);ge[b].push(c)}},set:function(a){var b;2==a.length&&Fa(a[1])?b=Ga(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ga(b),b.event="gtag.set",b._clear=!0,b}},xe={policy:!0};var ye=function(){return!1};var Ee=function(a){if(De(a))return a;this.vg=a};Ee.prototype.Af=function(){return this.vg};var De=function(a){return!a||"object"!==Da(a)||Fa(a)?!1:"getUntrustedUpdateValue"in a};Ee.prototype.getUntrustedUpdateValue=Ee.prototype.Af;var Fe=!1,Ge=[];function He(){if(!Fe){Fe=!0;for(var a=0;a<Ge.length;a++)z(Ge[a])}}var Ie=function(a){Fe?z(a):Ge.push(a)};var Je=[],Ke=!1;function Le(a){var b=a.eventCallback,c=ya(function(){ia(b)&&z(function(){b(pc.m)})}),d=a.eventTimeout;d&&f.setTimeout(c,Number(d));return c}
var Me=function(a){return f["dataLayer"].push(a)},Oe=function(a){var b=a._clear;qa(a,function(g,h){"_clear"!==g&&(b&&kd(g,void 0),kd(g,h))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Ac(),a["gtm.uniqueEventId"]=d,kd("gtm.uniqueEventId",d));wc=c;var e=Ne(a);wc=null;if(!uc){uc=a["gtm.start"];}return e};
function Ne(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=qc.zones;d=e?e.checkState(pc.m,c):td;if(!d.active)return!1;var g=Le(a);return ee(c,b,d.isWhitelisted,g)?!0:!1}
var Pe=function(){for(var a=!1;!Ke&&0<Je.length;){Ke=!0;delete $c.eventModel;cd();var b=Je.shift();if(null!=b){var c=De(b);if(c){var d=b;b=De(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=dd(h,1);if(la(k)||Fa(k))k=Ga(k);ad[h]=k}}try{if(ia(b))try{b.call(ed)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=dd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=we[b[0]];if(r&&(!c||!xe[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ke=!1;continue}}a=Oe(b)||a}}finally{c&&cd(!0)}}Ke=!1}
return!a},Qe=function(){var a=Pe();try{var b=pc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Re=function(){var a=Ja("dataLayer",[]),b=Ja("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ad(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ie(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<qc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ee(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Je.push.apply(Je,d);if(300<this.length)for(Hc(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pe()&&h};Je.push.apply(Je,a.slice(0));z(Qe)};var Te=function(a){return Se?u.querySelectorAll(a):null},Ue=function(a,b){if(!Se)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ve=!1;if(u.querySelectorAll)try{var We=u.querySelectorAll(":root");We&&1==We.length&&We[0]==u.documentElement&&(Ve=!0)}catch(a){}var Se=Ve;var Xe;var tf={};tf.ob=new String("undefined");
var uf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===tf.ob?b:a[d]);return c.join("")}};uf.prototype.toString=function(){return this.resolve("undefined")};uf.prototype.valueOf=uf.prototype.toString;tf.De=uf;tf.$b={};tf.kf=function(a){return new uf(a)};var vf={};tf.hg=function(a,b){var c=Ac();vf[c]=[a,b];return c};tf.td=function(a){var b=a?0:1;return function(c){var d=vf[c];if(d&&"function"===typeof d[b])d[b]();vf[c]=void 0}};tf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};tf.Yf=function(a){if(a===tf.ob)return a;var b=Ac();tf.$b[b]=a;return'google_tag_manager["'+pc.m+'"].macro('+b+")"};tf.Rf=function(a,b,c){a instanceof tf.De&&(a=a.resolve(tf.hg(b,c)),b=ha);return{oc:a,I:b}};var wf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ra(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},xf=function(a){qc.hasOwnProperty("autoEventsSettings")||(qc.autoEventsSettings={});var b=qc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
yf=function(a,b,c){xf(a)[b]=c},zf=function(a,b,c,d){var e=xf(a),g=xa(e,b,d);e[b]=c(g)},Af=function(a,b,c){var d=xf(a);return xa(d,b,c)};var Bf=function(){for(var a=Ha.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(va()/1E3)].join(".")},Ef=function(a,b,c,d){var e=Cf(b);return hb(a,e,Df(c),d)},Cf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Df=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ff(a,b){var c=""+Cf(a),d=Df(b);1<d&&(c+="-"+d);return c};var Gf=["1"],Hf={},Lf=function(a,b,c,d){var e=If(a);Hf[e]||Jf(e,b,c)||(Kf(e,Bf(),b,c,d),Jf(e,b,c))};function Kf(a,b,c,d,e){var g;g=["1",Ff(d,c),b].join(".");lb(a,g,c,d,0==e?void 0:new Date(va()+1E3*(void 0==e?7776E3:e)))}function Jf(a,b,c){var d=Ef(a,b,c,Gf);d&&(Hf[a]=d);return d}function If(a){return(a||"_gcl")+"_au"};var Mf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function Nf(){for(var a=Of,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Pf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Of,Qf,Rf=function(a){Of=Of||Pf();Qf=Qf||Nf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Of[l],Of[m],Of[n],Of[p])}return b.join("")},Sf=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Qf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Of=Of||Pf();Qf=Qf||
Nf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Tf;function Uf(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Vf=function(){var a=Ja("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wf=/(.*?)\*(.*?)\*(.*)/,Xf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Yf=/^(?:www\.|m\.|amp\.)+/,Zf=/([^?#]+)(\?[^#]*)?(#.*)?/,$f=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,bg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Rf(String(d))))}var e=b.join("*");return["1",ag(e),e].join("*")},ag=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Tf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Tf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Tf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},dg=function(){return function(a){var b=cb(f.location.href),c=b.search.replace("?",""),d=Za(c,"_gl",!0)||"";a.query=cg(d)||{};var e=bb(b,"fragment").match($f);a.fragment=cg(e&&e[3]||
"")||{}}},cg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Wf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ag(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Sf(t[q+1]);return p}}}}catch(r){}};
function eg(a,b,c){function d(m){var n=m,p=$f.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Zf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fg(a,b,c){for(var d={},e={},g=Vf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Uf(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=bg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eg(l,a.action);Xa.test(v)&&(a.action=v)}}}else gg(l,a,!1)}if(!c&&Aa(e)){var x=bg(e);gg(x,a,!0)}}function gg(a,b,c){if(b.href){var d=eg(a,b.href,void 0===c?!1:c);Xa.test(d)&&(b.href=d)}}
var hg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fg(e,e.hostname,!1)}}catch(h){}},ig=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=bb(cb(b.action),"host");fg(b,c,!0)}}catch(d){}},jg=function(a,b,c,d){var e=Vf();e.init||(Pa(u,"mousedown",hg),Pa(u,"keyup",hg),Pa(u,"submit",ig),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Vf().decorators.push(g)},kg=function(){var a=u.location.hostname,b=Xf.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Yf,"")===e.replace(Yf,"")},lg=function(a,b){return!1===a?!1:a||b||kg()};var mg=/^\w+$/,ng=/^[\w-]+$/,og=/^~?[\w-]+$/,pg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function qg(a){return a&&"string"==typeof a&&a.match(mg)?a:"_gcl"}var sg=function(){var a=cb(f.location.href),b=bb(a,"query",!1,void 0,"gclid"),c=bb(a,"query",!1,void 0,"gclsrc"),d=bb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Za(e,"gclid",void 0);c=c||Za(e,"gclsrc",void 0)}return rg(b,c,d)};
function rg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(ng))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function tg(a,b,c){function d(p,t){var q=ug(p,e);q&&lb(q,t,h,g,l,!0)}b=b||{};var e=qg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||va();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.bh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ug=function(a,b){var c=pg[a];if(void 0!==c)return b+c},vg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function wg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var xg=function(a,b,c,d,e){if(la(b)){var g=qg(e);jg(function(){for(var h={},k=0;k<a.length;++k){var l=ug(a[k],g);if(l){var m=db(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},yg=function(a){return a.filter(function(b){return og.test(b)})},zg=function(a,b){for(var c=qg(b&&b.prefix),d={},e=0;e<a.length;e++)pg[a[e]]&&(d[a[e]]=pg[a[e]]);qa(d,function(g,h){var k=db(c+h,u.cookie);if(k.length){var l=k[0],m=vg(l),n={};n[g]=[wg(l)];tg(n,b,m)}})};var Ag=/^\d+\.fls\.doubleclick\.net$/;function Bg(a){var b=cb(f.location.href),c=bb(b,"host",!1);if(c&&c.match(Ag)){var d=bb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Cg(a,b){if("aw"==a||"dc"==a){var c=Bg("gcl"+a);if(c)return c.split(".")}var d=qg(b);if("_gcl"==d){var e;e=sg()[a]||[];if(0<e.length)return e}var g=ug(a,d),h;if(g){var k=[];if(u.cookie){var l=db(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=wg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=yg(k)}else h=k}else h=k}else h=[];return h}
var Dg=function(){var a=Bg("gac");if(a)return decodeURIComponent(a);var b=Mf(),c=[];qa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].xf);g=yg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Eg=function(a,b,c,d,e){Lf(b,c,d,e);var g=Hf[If(b)],h=sg().dc||[],k=!1;if(g&&0<h.length){var l=qc.joined_au=qc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ha.sendBeacon&&Ha.sendBeacon(t)||Oa(t);k=l[m]=
!0}}k|=a;if(k&&g){var q=If(b),r=Hf[q];r&&Kf(q,r,c,d,e)}};var Fg;if(3===pc.sb.length)Fg="g";else{var Gg="G";Fg=Gg}
var Hg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fg},Ig=function(a){var b=pc.m.split("-"),c=b[0].toUpperCase(),d=Hg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===pc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+pc.sb+e};var Pg=!!f.MutationObserver,Qg=void 0,Rg=function(a){if(!Qg){var b=function(){var c=u.body;if(c)if(Pg)(new MutationObserver(function(){for(var e=0;e<Qg.length;e++)z(Qg[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<Qg.length;e++)z(Qg[e])}))})}};Qg=[];u.body?b():z(b)}Qg.push(a)};var ih=f.clearTimeout,jh=f.setTimeout,G=function(a,b,c){if(ye()){b&&z(b)}else return La(a,b,c)},kh=function(){return new Date},lh=function(){return f.location.href},mh=function(a){return bb(cb(a),"fragment")},nh=function(a){return ab(cb(a))},oh=function(a,b){return dd(a,b||2)},ph=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Me(a)},qh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},rh=function(a,b,c){return db(a,b,void 0===c?!0:!!c)},sh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=sg();tg(g,e);zg(["aw"],e);zg(["dc"],e);},th=function(a,b,c,d,e){var g=dg(),h=Vf();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(za(k,l.query),za(k,l.fragment));for(var m=qg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==pg[p]){var t=ug(p,m),q=k[t];if(q){var r=Math.min(vg(q),va()),v;b:{for(var x=r,y=db(t,u.cookie),w=0;w<y.length;++w)if(vg(y[w])>x){v=!0;break b}v=!1}v||lb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var D={prefix:b,path:c,domain:d};tg(rg(k.gclid,k.gclsrc),D);},uh=function(a,b,c,d,e){
xg(a,b,c,d,e);},vh=function(a,b){if(ye()){b&&z(b)}else Na(a,b)},wh=function(a){return!!Af(a,"init",!1)},xh=function(a){yf(a,"init",!0)},yh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":tc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&qa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};var Ah=tf.Rf;
var Bh=new wa;function Ch(a,b){function c(h){var k=cb(h),l=bb(k,"protocol"),m=bb(k,"host",!0),n=bb(k,"port"),p=bb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Dh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Dh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Bh.get(q);r||(r=new RegExp(c,t),Bh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Ch(b,c)}return!1};var Fh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Gh={},Hh=encodeURI,M=encodeURIComponent,Ih=Oa;var Jh=function(a,b){if(!a)return!1;var c=bb(cb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Kh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Gh.Of=function(){var a=!1;return a};var ti=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},ui=function(){this.c=1;this.e=[];this.p=null};function vi(a){var b=qc,c=b.gss=b.gss||{};return c[a]=c[a]||new ui}var wi=function(a,b){vi(a).p=b},xi=function(a){var b=vi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var zi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||pa();return a.hid};var Oi=window,Pi=document,Qi=function(a){var b=Oi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Oi["ga-disable-"+a])return!0;try{var c=Oi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=db("AMP_TOKEN",Pi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pi.getElementById("__gaOptOutExtension")?!0:!1};var Wi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,void 0));xi(a)},Xi=function(a,b,c){Vi(a);var d=Math.floor(va()/1E3);vi(a).e.push(new ti(b,d,c,!0))},Vi=function(a){if(1===vi(a).c){vi(a).c=2;var b=encodeURIComponent(a);La(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Zi=function(a,b){},Yi=function(a,b){};var X={a:{}};
X.a.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.g="jsm";X.__jsm.h=!0;X.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();X.a.c=["google"],function(){(function(a){X.__c=a;X.__c.g="c";X.__c.h=!0;X.__c.b=0})(function(a){return a.vtp_value})}();
X.a.e=["google"],function(){(function(a){X.__e=a;X.__e.g="e";X.__e.h=!0;X.__e.b=0})(function(){return wc})}();
X.a.f=["google"],function(){(function(a){X.__f=a;X.__f.g="f";X.__f.h=!0;X.__f.b=0})(function(a){var b=oh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?bb(cb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nh(String(b)):String(b)})}();
X.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=wf(c,"gtm.click");ph(d)}}(function(b){X.__cl=b;X.__cl.g="cl";X.__cl.h=!0;X.__cl.b=0})(function(b){if(!wh("cl")){var c=K("document");Pa(c,"click",a,!0);xh("cl")}z(b.vtp_gtmOnSuccess)})}();
X.a.j=["google"],function(){(function(a){X.__j=a;X.__j.g="j";X.__j.h=!0;X.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();X.a.k=["google"],function(){(function(a){X.__k=a;X.__k.g="k";X.__k.h=!0;X.__k.b=0})(function(a){return rh(a.vtp_name,oh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

X.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.g="u";X.__u.h=!0;X.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:oh("gtm.url",1))||lh();var d=b[a("vtp_component")];if(!d||"URL"==d)return nh(String(c));var e=cb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=la(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=bb(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=bb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();X.a.v=["google"],function(){(function(a){X.__v=a;X.__v.g="v";X.__v.h=!0;X.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=oh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

X.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Ga(Kh(l.vtp_fieldsToSet,"fieldName","value"),e);Ga(Kh(l.vtp_contentGroup,"index","group"),g);Ga(Kh(l.vtp_dimension,"index","dimension"),h);Ga(Kh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ga(l);c=Ga(c,m)}Ga(Kh(c.vtp_fieldsToSet,"fieldName","value"),e);Ga(Kh(c.vtp_contentGroup,
"index","group"),g);Ga(Kh(c.vtp_dimension,"index","dimension"),h);Ga(Kh(c.vtp_metric,"index","metric"),k);var n=Id(c.vtp_functionName);if(ia(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Ac(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(L){var P=[].slice.call(arguments,0);P[0]=p+P[0];n.apply(window,P)},x=function(L,P){return void 0===P?P:L(P)},y=function(L,P){if(P)for(var ba in P)P.hasOwnProperty(ba)&&v("set",L+ba,P[ba])},w=function(){},D=function(L,P,ba){var na=0;if(L)for(var W in L)if(L.hasOwnProperty(W)&&(ba&&q[W]||!ba&&void 0===q[W])){var Z=r[W]?sa(L[W]):L[W];"anonymizeIp"!=W||Z||(Z=void 0);P[W]=Z;na++}return na},
A={name:t};D(e,A,!0);n("create",c.vtp_trackingId||d.trackingId,A);v("set","&gtm",Ig(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(L,P){void 0!==c[P]&&v("set",L,c[P])})("nonInteraction","vtp_nonInteraction");y("contentGroup",g);y("dimension",h);y("metric",k);var B={};D(e,B,!1)&&v("set",B);var C;c.vtp_enableLinkId&&
v("require","linkid","linkid.js");v("set","hitCallback",function(){var L=e&&e.hitCallback;ia(L)&&L();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:x(String,c.vtp_eventLabel||d.label),eventValue:x(ra,c.vtp_eventValue||d.value)};D(C,
H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var U=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:U})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var T="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:T})}C?v("send","pageview",C):v("send","pageview");}if(!a){var Y=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(Y="internal/"+Y);a=!0;G(E("https:","http:","//www.google-analytics.com/"+Y,e&&e.forceSSL),function(){var L=Gd();L&&L.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};X.__ua=b;X.__ua.g="ua";X.__ua.h=!0;X.__ua.b=0}();



X.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(m){var n=oh(e[m.vtp_varType],1);return void 0!==n?n:m.vtp_defaultValue},h=function(m,
n){if(!m)return!1;var p=l(lh()),t;t=la(n.vtp_affiliatedDomains)?n.vtp_affiliatedDomains:String(n.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var q=[p],r=0;r<t.length;r++)if(t[r]instanceof RegExp){if(t[r].test(m))return!1}else{var v=t[r];if(0!=v.length){if(0<=l(m).indexOf(v))return!1;q.push(l(v))}}return!Jh(m,q)},k=/^https?:\/\//i,l=function(m){k.test(m)||(m="http://"+m);return bb(cb(m),"HOST",!0)};(function(m){X.__aev=m;X.__aev.g="aev";X.__aev.h=!0;X.__aev.b=0})(function(m){switch(m.vtp_varType){case "TAG_NAME":return oh("gtm.element",
1).tagName||m.vtp_defaultValue;case "TEXT":var n,p=oh("gtm.element",1),t=oh("event",1),q=Number(kh());a===p&&b===t&&c>q-250?n=d:(d=n=p?Ta(p):"",a=p,b=t);c=q;return n||m.vtp_defaultValue;case "URL":var r;a:{var v=String(oh("gtm.elementUrl",1)||m.vtp_defaultValue||""),x=cb(v);switch(m.vtp_component||"URL"){case "URL":r=v;break a;case "IS_OUTBOUND":r=h(v,m);break a;default:r=bb(x,m.vtp_component,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var y;if(void 0===m.vtp_attribute)y=
g(m);else{var w=oh("gtm.element",1);y=Ra(w,m.vtp_attribute)||m.vtp_defaultValue||""}return y;default:return g(m)}})}();

X.a.remm=["google"],function(){(function(a){X.__remm=a;X.__remm.g="remm";X.__remm.h=!0;X.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
X.a.fsl=[],function(){function a(){var e=K("document"),g=c(),h=HTMLFormElement.prototype.submit;Pa(e,"click",function(k){var l=k.target;if(l&&(l=Wa(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&Ra(l,"value")){var m;(m=l.form?l.form.tagName?l.form:Sa(l.form):Wa(l,["form"],100))&&g.store(m,l)}},!1);Pa(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=!0;if(d(l,function(){if(n){var p=g.get(l),t;p&&(t=e.createElement("input"),
t.type="hidden",t.name=p.name,t.value=p.value,l.appendChild(t));h.call(l);t&&l.removeChild(t)}},m,b(l)&&!m))n=!1;else return m||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=!0;d(k,function(){l&&h.call(k)},!1,b(k))&&(h.call(k),l=!1)}}function b(e){var g=e.target;return g&&"_self"!==g&&"_parent"!==g&&"_top"!==g?!1:!0}function c(){var e=[],g=function(h){return oa(e,function(k){return k.form===h})};return{store:function(h,
k){var l=g(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=g(h);return k?k.button:null}}}function d(e,g,h,k){var l=Af("fsl",h?"nv.mwt":"mwt",0),m;m=h?Af("fsl","nv.ids",[]):Af("fsl","ids",[]);if(!m.length)return!0;var n=wf(e,"gtm.formSubmit",m),p=e.action;p&&p.tagName&&(p=e.cloneNode(!1).action);n["gtm.elementUrl"]=p;if(k&&l){if(!ph(n,g,l))return!1}else ph(n,function(){},l||2E3);return!0}(function(e){X.__fsl=e;X.__fsl.g="fsl";X.__fsl.h=!0;X.__fsl.b=0})(function(e){var g=e.vtp_waitForTags,
h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(p){return Math.max(k,p)};zf("fsl","mwt",m,0);h||zf("fsl","nv.mwt",m,0)}var n=function(p){p.push(l);return p};zf("fsl","ids",n,[]);h||zf("fsl","nv.ids",n,[]);wh("fsl")||(a(),xh("fsl"));z(e.vtp_gtmOnSuccess)})}();



X.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ka(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Ah(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Ua(h),k,e)()}else jh(function(){c(d)},
200)};X.__html=c;X.__html.g="html";X.__html.h=!0;X.__html.b=0}();


X.a.lcl=[],function(){function a(){var c=K("document"),d=0,e=function(g){var h=g.target;if(h&&3!==g.which&&(!g.timeStamp||g.timeStamp!==d)){d=g.timeStamp;h=Wa(h,["a","area"],100);if(!h)return g.returnValue;var k=g.defaultPrevented||!1===g.returnValue,l=Af("lcl",k?"nv.mwt":"mwt",0),m;m=k?Af("lcl","nv.ids",[]):Af("lcl","ids",[]);if(m.length){var n=wf(h,"gtm.linkClick",m);if(b(g,h,c)&&!k&&l&&h.href){var p=K((h.target||"_self").substring(1)),t=!0;if(ph(n,function(){t&&p&&(p.location.href=h.href)},l))t=
!1;else return g.preventDefault&&g.preventDefault(),g.returnValue=!1}else ph(n,function(){},l||2E3);return!0}}};Pa(c,"click",e,!1);Pa(c,"auxclick",e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var g=d.href.indexOf("#"),h=d.target;if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var k=nh(d.href),l=nh(e.location);return k!==l}return!0}(function(c){X.__lcl=c;X.__lcl.g="lcl";X.__lcl.h=!0;X.__lcl.b=0})(function(c){var d=void 0===c.vtp_waitForTags?
!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,g=Number(c.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(m){return Math.max(g,m)};zf("lcl","mwt",k,0);e||zf("lcl","nv.mwt",k,0)}var l=function(m){m.push(h);return m};zf("lcl","ids",l,[]);e||zf("lcl","nv.ids",l,[]);wh("lcl")||(a(),xh("lcl"));z(c.vtp_gtmOnSuccess)})}();

var $i={};$i.macro=function(a){if(tf.$b.hasOwnProperty(a))return tf.$b[a]},$i.onHtmlSuccess=tf.td(!0),$i.onHtmlFailure=tf.td(!1);$i.dataLayer=ed;$i.callback=function(a){yc.hasOwnProperty(a)&&ia(yc[a])&&yc[a]();delete yc[a]};$i.Ve=function(){qc[pc.m]=$i;zc=X.a;Sb=Sb||tf;Tb=sd};
$i.Jf=function(){qc=f.google_tag_manager=f.google_tag_manager||{};if(qc[pc.m]){var a=qc.zones;a&&a.unregisterChild(pc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<
n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Mb.push(p)}Qb=X;Rb=Dh;$i.Ve();Re();vd=!1;wd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)yd();else{Pa(u,"DOMContentLoaded",yd);Pa(u,"readystatechange",yd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&zd()}Pa(f,"load",yd)}Fe=!1;"complete"===u.readyState?He():Pa(f,"load",He);a:{if(!Vc)break a;f.setInterval(Wc,864E5);}vc=(new Date).getTime();}};(0,$i.Jf)();

})()
