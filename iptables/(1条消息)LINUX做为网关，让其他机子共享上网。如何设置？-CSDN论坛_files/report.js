!function(e){var t,o,r,n,i,c,a,s,d;if(i=[],t={DELAY:500,API_VERSION:"0.6.0",SERVER_URL:"https://event.csdn.net/"},COOKIE_KEYS=["utm_source"],s={pv:t.SERVER_URL+"logstores/csdn-pc-tracking-pageview/track_ua.gif?APIVersion="+t.API_VERSION,click:t.SERVER_URL+"logstores/csdn-pc-tracking-page-click/track_ua.gif?APIVersion="+t.API_VERSION,view:t.SERVER_URL+"logstores/csdn-pc-tracking-page-exposure/track"},n={PV:"pv",VIEW:"view",CLICK:"click"},a={SKIPPED_AND_VISIBLE:"0",VISIBLE:"1"},r={getRequest:function(){for(var e=new Object,t=window.location.href.split("?")[1]||"",o=t.split("&"),r=0;r<o.length;r++){var n=o[r].split("=")[0],i=o[r].split("=")[1];n&&i&&(e[n]=unescape(i))}return e},initUTM:function(){d={};var e=r.getRequest();if("{}"!==JSON.stringify(e))for(var t in COOKIE_KEYS){var o=COOKIE_KEYS[t],n=e[COOKIE_KEYS[t]];n?(r.setCookie(o,n,36e5),d[o]=n):d[o]=""}else for(var t in COOKIE_KEYS){var o=COOKIE_KEYS[t],n=r.getCookie(o);d[o]=n}return d},getTimestamp:function(){return Math.round(new Date/1e3)},getXPath:function(e){if(""!==e.id)return'//*[@id="'+e.id+'"]';if(e==document.body)return"/html/"+e.tagName.toLowerCase();if(!e.parentNode)return"";for(var t=1,o=e.parentNode.childNodes,r=0,n=o.length;r<n;r++){var i=o[r];if(i==e)return arguments.callee(e.parentNode)+"/"+e.tagName.toLowerCase()+"["+t+"]";1==i.nodeType&&i.tagName==e.tagName&&t++}},getScreen:function(){return window.screen.width+"*"+window.screen.height},getCookie:function(e){var t,o=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(o))?unescape(t[2]):""},setCookie:function(e,t,o){var r=new Date;r.setTime(r.getTime()+o),document.cookie=e+"="+escape(t)+";expires="+r.toGMTString()+";path=/ ; domain=."+this.topDomain(window.location.host)},initData:function(){var t,o,n;return c={cid:(null!=(t=/(; )?(uuid_tt_dd|_javaeye_cookie_id_)=([^;]+)/.exec(window.document.cookie))?t[3]:void 0)||"",sid:r.getCookie("dc_session_id")||"",pid:window.location.host.split(".csdn.net")[0],uid:r.getCookie("UserName"),did:r.getCookie("X-Device-ID")||"",ref:window.document.referrer,curl:window.location.href,dest:"",cfg:{viewStrategy:a.VISIBLE}},n=r.initUTM(),o=e("meta[name=report]").attr("content")?JSON.parse(e("meta[name=report]").attr("content")):{},c=e.extend({},c,{utm:n.utm_source},o)},tos:function(){var e,t,o,r;e=+new Date/1e3|0,o=null!=(t=/\bdc_tos=([^;]*)(?:$|;)/.exec(document.cookie))?t[1]:void 0;try{r=e-parseInt(o,36)}catch(e){console.warn("tos init error",e),r=-1}return document.cookie="dc_tos="+e.toString(36)+" ; expires="+new Date(1e3*(e+14400)).toGMTString()+" ; max-age=14400 ; path=/ ; domain=."+this.topDomain(window.location.host),r},topDomain:function(e){return/\.?([a-z0-9\-]+\.[a-z0-9\-]+)(:\d+)?$/.exec(e)[1]},copyArr:function(e){for(var t=[],o=0;o<e.length;o++)t.push(e[o]);return t},isView:function(e,t){var o=this;if(!e)return!1;var r=this.getElementBottom(e),n=r+e.offsetHeight;return a.VISIBLE==t?o.scrollTop()<r&&r<o.scrollTop()+o.windowHeight()||o.scrollTop()<n&&n<o.scrollTop()+o.windowHeight():a.SKIPPED_AND_VISIBLE==t?r<=o.scrollTop()+o.windowHeight()||(o.scrollTop()<r&&r<o.scrollTop()+o.windowHeight()||o.scrollTop()<n&&n<o.scrollTop()+o.windowHeight()):void 0},scrollTop:function(){return Math.max(document.body.scrollTop,document.documentElement.scrollTop)},windowHeight:function(){return"CSS1Compat"==document.compatMode?document.documentElement.clientHeight:document.body.clientHeight},getElementTop:function(t){if("undefined"!=typeof jQuery)return e(t).offset().top;var o=t.offsetTop;for(t=t.offsetParent;null!=t;)o+=t.offsetTop,t=t.offsetParent;return o},getElementBottom:function(t){if("undefined"!=typeof jQuery)return e(t).offset().top+e(t).height();var o=t.offsetTop;for(t=t.offsetParent;null!=t;)o+=t.offsetTop,t=t.offsetParent;return o},url2Obj:function(e){var t={},o=e.split("&");for(var r in o)t[o[r].split("=")[0]]=decodeURIComponent(o[r].split("=")[1]);return t},fixParamConTop:function(t,o){return t.con.split(",top_")>-1?t:(t.con=t.con+",top_"+e(o).offset().top,t)}},o={timer:0,checkTimer:0,reportServer:function(o,c){void 0!==o&&void 0!==c&&i.push(c);var a=r.copyArr(i);if(0!=a.length){i=[];var d={__source__:"csdn",__logs__:a};e.ajax({url:s[n.VIEW],type:"POST",crossDomain:!0,xhrFields:{withCredentials:!1},contentType:"text/plain;charset=UTF-8",headers:{"x-log-apiversion":t.API_VERSION,"x-log-bodyrawsize":"1234"},data:JSON.stringify(d),success:function(){},error:function(){console.error("csdn.report.reportServer()",arguments)}})}},reportServerDelay:function(e,o){i.push(o);var r=this;r.timer&&clearTimeout(r.timer),r.timer=setTimeout(function(){r.reportServer()},t.DELAY)},reportView:function(t,o,i){if(!t)return void console.warn("reportView Error:",t);var a=e.extend(!0,{},c,t);a.t=r.getTimestamp()+"",a.eleTop=o?o.offset().top+"":"",delete a.cfg,a.__time__=r.getTimestamp(),void 0===i?this.reportServerDelay(n.VIEW,a):this.reportServer(n.VIEW,a),"function"==typeof csdn.afterReportView&&csdn.afterReportView(o,t)},reportClick:function(t,o){var i=e.extend(!0,{},c,t);i.t=r.getTimestamp(),i.elePath=o?r.getXPath(o[0])+"":"",i.eleTop=o?o.offset().top+"":"",delete i.cfg,e.ajax({url:s[n.CLICK],type:"get",crossDomain:!0,xhrFields:{withCredentials:!1},contentType:"text/plain;charset=UTF-8",data:i,success:function(){},error:function(){console.error("csdn.report.reportServer()",arguments)}})},reportPageView:function(t){var o=e.extend(!0,{},c,t);o.tos=r.tos(),o.adb=r.getCookie("c_adb")||0,o.t=r.getTimestamp(),o.screen=r.getScreen(),o.un=r.getCookie("UN")||"",o.vType=r.getCookie("p_uid")||"",delete o.cfg,delete o.dest,e.ajax({url:s[n.PV],type:"get",crossDomain:!0,xhrFields:{withCredentials:!1},contentType:"text/plain;charset=UTF-8",data:o,success:function(){},error:function(){console.error("csdn.report.reportServer()",arguments)}})},viewCheck:function(){var t=this;clearTimeout(t.checkTimer),t.checkTimer=setTimeout(function(){e("[data-report-view]").each(function(){var t=e(this),o=e.extend({},c,t.data("reportView"));r.isView(t.get(0),o.cfg.viewStrategy)&&(csdn.report.reportView(o,t),t.removeData("reportView"),t.removeAttr("data-report-view"))})},200)},isView:function(e){return r.isView(e)}},void 0===window.csdn&&(window.csdn={}),csdn.report)return void console.warn("上报脚本重复，请检查");window.csdn.report=o,c=r.initData(),c.disabled||csdn.report.reportPageView()}(jQuery),jQuery(function(){var e=csdn.report;jQuery(document).on("click","[data-report-click]",function(){var t=jQuery(this).data("reportClick");e.reportClick(t,jQuery(this))}),e.viewCheck(jQuery("[data-report-view]")),jQuery(window).on("scroll",function(){e.viewCheck(jQuery("[data-report-view]"))}),jQuery(document).on("click","a[data-report-query]",function(){var e=jQuery(this),t=e.data("reportQuery")||"",o=e.attr("target"),r=e.attr("href"),n=r;return t&&(n+="?"+t),"_blank"===o?window.open(n):window.location.href=n,!1})});