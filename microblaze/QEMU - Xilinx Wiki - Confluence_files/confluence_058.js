WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:moment', location = 'includes/js/dist/moment.js' */
(function(w){function P(a,b){return function(c){return m(a.call(this,c),b)}}function oa(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function Q(){}function z(a){R(a);n(this,a)}function A(a){a=S(a);var b=a.year||0,c=a.month||0,d=a.week||0,f=a.day||0;this._milliseconds=+(a.millisecond||0)+1E3*(a.second||0)+6E4*(a.minute||0)+36E5*(a.hour||0);this._days=+f+7*d;this._months=+c+12*b;this._data={};this._bubble()}function n(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);b.hasOwnProperty("toString")&&
(a.toString=b.toString);b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf);return a}function t(a){return 0>a?Math.ceil(a):Math.floor(a)}function m(a,b,c){for(var d=Math.abs(a)+"";d.length<b;)d="0"+d;return(0<=a?c?"+":"":"-")+d}function B(a,b,c,d){var f=b._milliseconds,k=b._days;b=b._months;var g,h;f&&a._d.setTime(+a._d+f*c);if(k||b)g=a.minute(),h=a.hour();k&&a.date(a.date()+k*c);b&&a.month(a.month()+b*c);f&&!d&&e.updateOffset(a);if(k||b)a.minute(g),a.hour(h)}function C(a){return"[object Array]"===
Object.prototype.toString.call(a)}function T(a,b,c){var d=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),e=0,g;for(g=0;g<d;g++)(c&&a[g]!==b[g]||!c&&h(a[g])!==h(b[g]))&&e++;return e+f}function q(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=pa[a]||qa[b]||b}return a}function S(a){var b={},c,d;for(d in a)a.hasOwnProperty(d)&&(c=q(d))&&(b[c]=a[d]);return b}function ra(a){var b,c;if(0===a.indexOf("week"))b=7,c="day";else if(0===a.indexOf("month"))b=12,c="month";else return;e[a]=function(d,
f){var k,g=e.fn._lang[a],h=[];"number"===typeof d&&(f=d,d=w);k=function(a){a=e().utc().set(c,a);return g.call(e.fn._lang,a,d||"")};if(null!=f)return k(f);for(f=0;f<b;f++)h.push(k(f));return h}}function h(a){a=+a;var b=0;0!==a&&isFinite(a)&&(b=0<=a?Math.floor(a):Math.ceil(a));return b}function D(a){return 0===a%4&&0!==a%100||0===a%400}function R(a){var b;a._a&&-2===a._pf.overflow&&(b=0>a._a[1]||11<a._a[1]?1:1>a._a[2]||a._a[2]>(new Date(Date.UTC(a._a[0],a._a[1]+1,0))).getUTCDate()?2:0>a._a[3]||23<a._a[3]?
3:0>a._a[4]||59<a._a[4]?4:0>a._a[5]||59<a._a[5]?5:0>a._a[6]||999<a._a[6]?6:-1,a._pf._overflowDayOfYear&&(0>b||2<b)&&(b=2),a._pf.overflow=b)}function U(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function V(a){null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&0>a._pf.overflow&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=
a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length));return a._isValid}function E(a){return a?a.toLowerCase().replace("_","-"):a}function F(a,b){return b._isUTC?e(a).zone(b._offset||0):e(a).local()}function p(a){var b=0,c,d,f,k,g=function(a){if(!u[a]&&W)try{require("./lang/"+a)}catch(Pa){}return u[a]};if(!a)return e.fn._lang;if(!C(a)){if(d=g(a))return d;a=[a]}for(;b<a.length;){k=E(a[b]).split("-");c=k.length;for(f=(f=E(a[b+1]))?f.split("-"):null;0<c;){if(d=g(k.slice(0,c).join("-")))return d;
if(f&&f.length>=c&&T(k,f,!0)>=c-1)break;c--}b++}return e.fn._lang}function sa(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function ta(a){var b=a.match(X),c,d;c=0;for(d=b.length;c<d;c++)b[c]=r[b[c]]?r[b[c]]:sa(b[c]);return function(f){var e="";for(c=0;c<d;c++)e+=b[c]instanceof Function?b[c].call(f,a):b[c];return e}}function G(a,b){if(!a.isValid())return a.lang().invalidDate();b=Y(b,a.lang());H[b]||(H[b]=ta(b));return H[b](a)}function Y(a,b){function c(a){return b.longDateFormat(a)||
a}var d=5;for(x.lastIndex=0;0<=d&&x.test(a);)a=a.replace(x,c),x.lastIndex=0,--d;return a}function ua(a,b){var c=b._strict;switch(a){case "DDDD":return Z;case "YYYY":case "GGGG":case "gggg":return c?va:wa;case "YYYYYY":case "YYYYY":case "GGGGG":case "ggggg":return c?xa:ya;case "S":if(c)return aa;case "SS":if(c)return ba;case "SSS":case "DDD":return c?Z:za;case "MMM":case "MMMM":case "dd":case "ddd":case "dddd":return Aa;case "a":case "A":return p(b._l)._meridiemParse;case "X":return Ba;case "Z":case "ZZ":return I;
case "T":return Ca;case "SSSS":return Da;case "MM":case "DD":case "YY":case "GG":case "gg":case "HH":case "hh":case "mm":case "ss":case "ww":case "WW":return c?ba:ca;case "M":case "D":case "d":case "H":case "h":case "m":case "s":case "w":case "W":case "e":case "E":return c?aa:ca;default:return b=RegExp,a=Ea(a.replace("\\","")).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$\x26"),a=new b(a)}}function da(a){a=(a||"").match(I)||[];a=((a[a.length-1]||[])+"").match(Fa)||["-",0,0];var b=+(60*a[1])+h(a[2]);return"+"===
a[0]?-b:b}function J(a){var b,c=[],d,f,k,g,l;if(!a._d){d=Ga(a);a._w&&null==a._a[2]&&null==a._a[1]&&(b=function(b){var c=parseInt(b,10);return b?3>b.length?68<c?1900+c:2E3+c:c:null==a._a[0]?e().weekYear():a._a[0]},f=a._w,null!=f.GG||null!=f.W||null!=f.E?b=ea(b(f.GG),f.W||1,f.E,4,1):(k=p(a._l),g=null!=f.d?fa(f.d,k):null!=f.e?parseInt(f.e,10)+k._week.dow:0,l=parseInt(f.w,10)||1,null!=f.d&&g<k._week.dow&&l++,b=ea(b(f.gg),l,g,k._week.doy,k._week.dow)),a._a[0]=b.year,a._dayOfYear=b.dayOfYear);a._dayOfYear&&
(b=null==a._a[0]?d[0]:a._a[0],a._dayOfYear>(D(b)?366:365)&&(a._pf._overflowDayOfYear=!0),b=ga(b,0,a._dayOfYear),a._a[1]=b.getUTCMonth(),a._a[2]=b.getUTCDate());for(b=0;3>b&&null==a._a[b];++b)a._a[b]=c[b]=d[b];for(;7>b;b++)a._a[b]=c[b]=null==a._a[b]?2===b?1:0:a._a[b];c[3]+=h((a._tzm||0)/60);c[4]+=h((a._tzm||0)%60);a._d=(a._useUTC?ga:Ha).apply(null,c)}}function Ga(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function K(a){a._a=
[];a._pf.empty=!0;var b=p(a._l),c=""+a._i,d,f,e,g,l=c.length,m=0;f=Y(a._f,b).match(X)||[];for(b=0;b<f.length;b++){e=f[b];if(d=(c.match(ua(e,a))||[])[0])g=c.substr(0,c.indexOf(d)),0<g.length&&a._pf.unusedInput.push(g),c=c.slice(c.indexOf(d)+d.length),m+=d.length;if(r[e]){d?a._pf.empty=!1:a._pf.unusedTokens.push(e);g=a;var n=g._a;switch(e){case "M":case "MM":null!=d&&(n[1]=h(d)-1);break;case "MMM":case "MMMM":e=p(g._l).monthsParse(d);null!=e?n[1]=e:g._pf.invalidMonth=d;break;case "D":case "DD":null!=
d&&(n[2]=h(d));break;case "DDD":case "DDDD":null!=d&&(g._dayOfYear=h(d));break;case "YY":n[0]=h(d)+(68<h(d)?1900:2E3);break;case "YYYY":case "YYYYY":case "YYYYYY":n[0]=h(d);break;case "a":case "A":g._isPm=p(g._l).isPM(d);break;case "H":case "HH":case "h":case "hh":n[3]=h(d);break;case "m":case "mm":n[4]=h(d);break;case "s":case "ss":n[5]=h(d);break;case "S":case "SS":case "SSS":case "SSSS":n[6]=h(1E3*("0."+d));break;case "X":g._d=new Date(1E3*parseFloat(d));break;case "Z":case "ZZ":g._useUTC=!0;g._tzm=
da(d);break;case "w":case "ww":case "W":case "WW":case "d":case "dd":case "ddd":case "dddd":case "e":case "E":e=e.substr(0,1);case "gg":case "gggg":case "GG":case "GGGG":case "GGGGG":e=e.substr(0,2),d&&(g._w=g._w||{},g._w[e]=d)}}else a._strict&&!d&&a._pf.unusedTokens.push(e)}a._pf.charsLeftOver=l-m;0<c.length&&a._pf.unusedInput.push(c);a._isPm&&12>a._a[3]&&(a._a[3]+=12);!1===a._isPm&&12===a._a[3]&&(a._a[3]=0);J(a);R(a)}function Ea(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,
c,d,f,e){return c||d||f||e})}function Ha(a,b,c,d,f,e,g){b=new Date(a,b,c,d,f,e,g);1970>a&&b.setFullYear(a);return b}function ga(a){var b=new Date(Date.UTC.apply(null,arguments));1970>a&&b.setUTCFullYear(a);return b}function fa(a,b){if("string"===typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!==typeof a)return null}else a=parseInt(a,10);return a}function Ia(a,b,c,d,f){return f.relativeTime(b||1,!!c,a,d)}function y(a,b,c){b=c-b;c-=a.day();c>b&&(c-=7);c<b-7&&(c+=7);a=e(a).add("d",c);return{week:Math.ceil(a.dayOfYear()/
7),year:a.year()}}function ea(a,b,c,d,f){var e=(new Date(m(a,6,!0)+"-01-01")).getUTCDay();b=7*(b-1)+((null!=c?c:f)-f)+(f-e+(e>d?7:0))+1;return{year:0<b?a:a-1,dayOfYear:0<b?b:(D(a-1)?366:365)+b}}function ha(a){var b=a._i,c=a._f;"undefined"===typeof a._pf&&U(a);if(null===b)return e.invalid({nullInput:!0});"string"===typeof b&&(a._i=b=p().preparse(b));if(e.isMoment(b))a=n({},b),a._d=new Date(+b._d);else if(c)if(C(c)){var b=a,d,f,k,g;if(0===b._f.length)b._pf.invalidFormat=!0,b._d=new Date(NaN);else{for(c=
0;c<b._f.length;c++)if(g=0,d=n({},b),U(d),d._f=b._f[c],K(d),V(d)&&(g+=d._pf.charsLeftOver,g+=10*d._pf.unusedTokens.length,d._pf.score=g,null==k||g<k))k=g,f=d;n(b,f||d)}}else K(a);else if(d=a,f=d._i,k=Ja.exec(f),f===w)d._d=new Date;else if(k)d._d=new Date(+k[1]);else if("string"===typeof f)if(k=d._i,b=Ka.exec(k)){d._pf.iso=!0;for(f=4;0<f;f--)if(b[f]){d._f=La[f-1]+(b[6]||" ");break}for(f=0;4>f;f++)if(ia[f][1].exec(k)){d._f+=ia[f][0];break}k.match(I)&&(d._f+="Z");K(d)}else d._d=new Date(k);else C(f)?
(d._a=f.slice(0),J(d)):"[object Date]"===Object.prototype.toString.call(f)||f instanceof Date?d._d=new Date(+f):"object"===typeof f?d._d||(f=S(d._i),d._a=[f.year,f.month,f.day,f.hour,f.minute,f.second,f.millisecond],J(d)):d._d=new Date(f);return new z(a)}function ja(a,b){e.fn[a]=e.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),e.updateOffset(this),this):this._d["get"+c+b]()}}function Ma(a){e.duration.fn[a]=function(){return this._data[a]}}function ka(a,b){e.duration.fn["as"+
a]=function(){return+this/b}}function L(a){var b=!1,c=e;"undefined"===typeof ender&&(a?(M.moment=function(){!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release."));return c.apply(null,arguments)},n(M.moment,c)):M.moment=e)}for(var e,M=this,v=Math.round,l,u={},W="undefined"!==typeof module&&module.exports&&"undefined"!==typeof require,Ja=/^\/?Date\((\-?\d+)/i,Na=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
Oa=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,X=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,x=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,ca=/\d\d?/,za=/\d{1,3}/,wa=/\d{1,4}/,ya=/[+\-]?\d{1,6}/,Da=/\d+/,Aa=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
I=/Z|[\+\-]\d\d:?\d\d/gi,Ca=/T/i,Ba=/[\+\-]?\d+(\.\d{1,3})?/,aa=/\d/,ba=/\d\d/,Z=/\d{3}/,va=/\d{4}/,xa=/[+\-]?\d{6}/,Ka=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,La=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],ia=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Fa=/([\+\-]|\d\d)/gi,N=["Date","Hours","Minutes","Seconds","Milliseconds"],
O={Milliseconds:1,Seconds:1E3,Minutes:6E4,Hours:36E5,Days:864E5,Months:2592E6,Years:31536E6},pa={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},qa={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},H={},la="DDD w W M D d".split(" "),ma="MDHhmswW".split(""),r={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,
a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return m(this.year()%100,2)},YYYY:function(){return m(this.year(),4)},YYYYY:function(){return m(this.year(),
5)},YYYYYY:function(){var a=this.year();return(0<=a?"+":"-")+m(Math.abs(a),6)},gg:function(){return m(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return m(this.weekYear(),5)},GG:function(){return m(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return m(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},
A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return h(this.milliseconds()/100)},SS:function(){return m(h(this.milliseconds()/10),2)},SSS:function(){return m(this.milliseconds(),3)},SSSS:function(){return m(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";0>a&&(a=-a,b="-");return b+m(h(a/60),2)+":"+
m(h(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";0>a&&(a=-a,b="-");return b+m(h(a/60),2)+m(h(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},na=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];la.length;)l=la.pop(),r[l+"o"]=oa(r[l],l);for(;ma.length;)l=ma.pop(),r[l+l]=P(r[l],2);r.DDDD=P(r.DDD,3);n(Q.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"===typeof b?
this[c]=b:this["_"+c]=b},_months:"January February March April May June July August September October November December".split(" "),months:function(a){return this._months[a.month()]},_monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c;this._monthsParse||(this._monthsParse=[]);for(b=0;12>b;b++)if(this._monthsParse[b]||(c=e.utc([2E3,b]),c="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),
this._monthsParse[b]=new RegExp(c.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c;this._weekdaysParse||
(this._weekdaysParse=[]);for(b=0;7>b;b++)if(this._weekdaysParse[b]||(c=e([2E3,1]).day(b),c="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(c.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,
function(a){return a.slice(1)}),this._longDateFormat[a]=b);return b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return 11<a?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){a=this._calendar[a];return"function"===typeof a?a.apply(b):a},_relativeTime:{future:"in %s",past:"%s ago",
s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var f=this._relativeTime[c];return"function"===typeof f?f(a,b,c,d):f.replace(/%d/i,a)},pastFuture:function(a,b){a=this._relativeTime[0<a?"future":"past"];return"function"===typeof a?a(b):a.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},
week:function(a){return y(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}});e=function(a,b,c,d){"boolean"===typeof c&&(d=c,c=w);return ha({_i:a,_f:b,_l:c,_strict:d,_isUTC:!1})};e.utc=function(a,b,c,d){"boolean"===typeof c&&(d=c,c=w);return ha({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b,_strict:d}).utc()};e.unix=function(a){return e(1E3*a)};e.duration=function(a,b){var c=a,d=null,f;if(e.isDuration(a))c={ms:a._milliseconds,
d:a._days,M:a._months};else if("number"===typeof a)c={},b?c[b]=a:c.milliseconds=a;else if(d=Na.exec(a))f="-"===d[1]?-1:1,c={y:0,d:h(d[2])*f,h:h(d[3])*f,m:h(d[4])*f,s:h(d[5])*f,ms:h(d[6])*f};else if(d=Oa.exec(a))f="-"===d[1]?-1:1,b=function(a){a=a&&parseFloat(a.replace(",","."));return(isNaN(a)?0:a)*f},c={y:b(d[2]),M:b(d[3]),d:b(d[4]),h:b(d[5]),m:b(d[6]),s:b(d[7]),w:b(d[8])};d=new A(c);e.isDuration(a)&&a.hasOwnProperty("_lang")&&(d._lang=a._lang);return d};e.version="2.5.0";e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";
e.updateOffset=function(){};e.lang=function(a,b){if(!a)return e.fn._lang._abbr;if(b){var c=E(a);b.abbr=c;u[c]||(u[c]=new Q);u[c].set(b)}else null===b?(delete u[a],a="en"):u[a]||p(a);return(e.duration.fn._lang=e.fn._lang=p(a))._abbr};e.langData=function(a){a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr);return p(a)};e.isMoment=function(a){return a instanceof z};e.isDuration=function(a){return a instanceof A};for(l=na.length-1;0<=l;--l)ra(na[l]);e.normalizeUnits=function(a){return q(a)};e.invalid=function(a){var b=
e.utc(NaN);null!=a?n(b._pf,a):b._pf.userInvalidated=!0;return b};e.parseZone=function(a){return e(a).parseZone()};n(e.fn=z.prototype,{clone:function(){return e(this)},valueOf:function(){return+this._d+6E4*(this._offset||0)},unix:function(){return Math.floor(+this/1E3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=e(this).utc();return 0<a.year()&&9999>=a.year()?
G(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):G(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){return[this.year(),this.month(),this.date(),this.hours(),this.minutes(),this.seconds(),this.milliseconds()]},isValid:function(){return V(this)},isDSTShifted:function(){return this._a?this.isValid()&&0<T(this._a,(this._isUTC?e.utc(this._a):e(this._a)).toArray()):!1},parsingFlags:function(){return n({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){this.zone(0);
this._isUTC=!1;return this},format:function(a){a=G(this,a||e.defaultFormat);return this.lang().postformat(a)},add:function(a,b){a="string"===typeof a?e.duration(+b,a):e.duration(a,b);B(this,a,1);return this},subtract:function(a,b){a="string"===typeof a?e.duration(+b,a):e.duration(a,b);B(this,a,-1);return this},diff:function(a,b,c){a=F(a,this);var d=6E4*(this.zone()-a.zone()),f;b=q(b);"year"===b||"month"===b?(f=432E5*(this.daysInMonth()+a.daysInMonth()),d=12*(this.year()-a.year())+(this.month()-a.month()),
d+=(this-e(this).startOf("month")-(a-e(a).startOf("month")))/f,d-=6E4*(this.zone()-e(this).startOf("month").zone()-(a.zone()-e(a).startOf("month").zone()))/f,"year"===b&&(d/=12)):(f=this-a,d="second"===b?f/1E3:"minute"===b?f/6E4:"hour"===b?f/36E5:"day"===b?(f-d)/864E5:"week"===b?(f-d)/6048E5:f);return c?d:t(d)},from:function(a,b){return e.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(e(),a)},calendar:function(){var a=F(e(),this).startOf("day"),a=
this.diff(a,"days",!0),a=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(a,this))},isLeapYear:function(){return D(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=fa(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b=this._isUTC?"UTC":"",
c;if(null!=a){if("string"===typeof a&&(a=this.lang().monthsParse(a),"number"!==typeof a))return this;c=this.date();this.date(1);this._d["set"+b+"Month"](a);this.date(Math.min(c,this.daysInMonth()));e.updateOffset(this);return this}return this._d["get"+b+"Month"]()},startOf:function(a){a=q(a);switch(a){case "year":this.month(0);case "month":this.date(1);case "week":case "isoWeek":case "day":this.hours(0);case "hour":this.minutes(0);case "minute":this.seconds(0);case "second":this.milliseconds(0)}"week"===
a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1);return this},endOf:function(a){a=q(a);return this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){b="undefined"!==typeof b?b:"millisecond";return+this.clone().startOf(b)>+e(a).startOf(b)},isBefore:function(a,b){b="undefined"!==typeof b?b:"millisecond";return+this.clone().startOf(b)<+e(a).startOf(b)},isSame:function(a,b){b=b||"ms";return+this.clone().startOf(b)===+F(a,this).startOf(b)},min:function(a){a=e.apply(null,
arguments);return a<this?this:a},max:function(a){a=e.apply(null,arguments);return a>this?this:a},zone:function(a){var b=this._offset||0;if(null!=a)"string"===typeof a&&(a=da(a)),16>Math.abs(a)&&(a*=60),this._offset=a,this._isUTC=!0,b!==a&&B(this,e.duration(b-a,"m"),1,!0);else return this._isUTC?b:this._d.getTimezoneOffset();return this},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){this._tzm?this.zone(this._tzm):
"string"===typeof this._i&&this.zone(this._i);return this},hasAlignedHourOffset:function(a){a=a?e(a).zone():0;return 0===(this.zone()-a)%60},daysInMonth:function(){var a=this.year(),b=this.month();return(new Date(Date.UTC(a,b+1,0))).getUTCDate()},dayOfYear:function(a){var b=v((e(this).startOf("day")-e(this).startOf("year"))/864E5)+1;return null==a?b:this.add("d",a-b)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(a){var b=y(this,this.lang()._week.dow,this.lang()._week.doy).year;
return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=y(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=y(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){a=q(a);return this[a]()},
set:function(a,b){a=q(a);if("function"===typeof this[a])this[a](b);return this},lang:function(a){if(a===w)return this._lang;this._lang=p(a);return this}});for(l=0;l<N.length;l++)ja(N[l].toLowerCase().replace(/s$/,""),N[l]);ja("year","FullYear");e.fn.days=e.fn.day;e.fn.months=e.fn.month;e.fn.weeks=e.fn.week;e.fn.isoWeeks=e.fn.isoWeek;e.fn.toJSON=e.fn.toISOString;n(e.duration.fn=A.prototype,{_bubble:function(){var a=this._milliseconds,b=this._days,c=this._months,d=this._data;d.milliseconds=a%1E3;a=
t(a/1E3);d.seconds=a%60;a=t(a/60);d.minutes=a%60;a=t(a/60);d.hours=a%24;b+=t(a/24);d.days=b%30;c+=t(b/30);d.months=c%12;b=t(c/12);d.years=b},weeks:function(){return t(this.days()/7)},valueOf:function(){return this._milliseconds+864E5*this._days+this._months%12*2592E6+31536E6*h(this._months/12)},humanize:function(a){var b=+this,c;c=!a;var d=this.lang(),f=v(Math.abs(b)/1E3),e=v(f/60),g=v(e/60),h=v(g/24),l=v(h/365),f=45>f&&["s",f]||1===e&&["m"]||45>e&&["mm",e]||1===g&&["h"]||22>g&&["hh",g]||1===h&&["d"]||
25>=h&&["dd",h]||45>=h&&["M"]||345>h&&["MM",v(h/30)]||1===l&&["y"]||["yy",l];f[2]=c;f[3]=0<b;f[4]=d;c=Ia.apply({},f);a&&(c=this.lang().pastFuture(b,c));return this.lang().postformat(c)},add:function(a,b){a=e.duration(a,b);this._milliseconds+=a._milliseconds;this._days+=a._days;this._months+=a._months;this._bubble();return this},subtract:function(a,b){a=e.duration(a,b);this._milliseconds-=a._milliseconds;this._days-=a._days;this._months-=a._months;this._bubble();return this},get:function(a){a=q(a);
return this[a.toLowerCase()+"s"]()},as:function(a){a=q(a);return this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:e.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),f=Math.abs(this.minutes()),e=Math.abs(this.seconds()+this.milliseconds()/1E3);return this.asSeconds()?(0>this.asSeconds()?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||f||e?"T":"")+(d?d+"H":"")+(f?f+"M":"")+(e?e+"S":""):"P0D"}});for(l in O)O.hasOwnProperty(l)&&
(ka(l,O[l]),Ma(l.toLowerCase()));ka("Weeks",6048E5);e.duration.fn.asMonths=function(){return(+this-31536E6*this.years())/2592E6+12*this.years()};e.lang("en",{ordinal:function(a){var b=a%10,b=1===h(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+b}});W?(module.exports=e,L(!0)):"function"===typeof define&&define.amd?define("moment",function(a,b,c){c.config&&c.config()&&!0!==c.config().noGlobal&&L(c.config().noGlobal===w);return e}):L()}).call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:moment', location = 'includes/js/amd/shim/moment-amd.js' */
define("moment",function(){return moment});
}catch(e){WRMCB(e)};