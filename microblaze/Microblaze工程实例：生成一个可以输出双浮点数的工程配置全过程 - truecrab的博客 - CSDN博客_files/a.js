!function(t,i){var I=window.jQuery||{},e=i,N=window.document,r="data-bind-login",O=i,G="login-box",g="login-mark";t.loginBox=t.loginBox?t.loginBox:{},I===window.jQuery?($selectorAll=function(e){var t=[];return I(e).each(function(e,n){t.push(n)}),t},e=!0):$selectorAll=function(e){return document.querySelectorAll(e)},I.LOGIN=I.LOGIN||{},I.LOGIN.isInit=!0,t.loginBox.scope=I.LOGIN;function a(i){var r=document.cookie;return r&&function(){for(var e,n={},t=0,o=(r=r.split("; ")).length;t<o&&!(0<(e=r[t].split("=")).length&&(e[0]===i&&(n.key=e[0],n.value=e[1],n.status=!0),"key"in n));t++);return"key"in n&&n}()}function c(){a("c-login-auto").status&&function(e,n,t){var o,i,r=a(e);r&&!0===r.status&&(o=r.key+"="+r.value+";",(i=new Date).setTime(i.getTime()-1e3),o=o+"expires="+i.toGMTString()+";",n&&(o=o+"domain="+n+";"),t&&(o=o+"path="+t+";"),document.cookie=o)}("c-login-auto",".csdn.net","/"),delete I.LOGIN.options.pvSource}function s(e){e&&e.pvSource&&(I.LOGIN.options.pvSource=e.pvSource,n(I.LOGIN.options)),I.LOGIN.docDom&&(N.body.appendChild(I.LOGIN.oMark),N.body.appendChild(I.LOGIN.docDom),I.LOGIN.appendBox.isCreate=!0)}function l(e){return I.LOGIN.runStatus=I.LOGIN.options[e]?I.LOGIN.options[e]():I.LOGIN.runStatus,I.LOGIN.runStatus}function d(e,n,t){window.addEventListener?e.addEventListener(n,t,!1):e.attachEvent("on"+n,t)}function u(e,n){var t;return t="all"===e?"none":"block","start"===e&&(t="block"),I.LOGIN.options.pvSource||"block"!==t||I.LOGIN.loginService!==I.LOGIN.recordLoginService&&(I.LOGIN.appendBox.getElementsByTagName("iframe")[0].src=I.LOGIN.recordLoginService,I.LOGIN.loginService=I.LOGIN.recordLoginService),I.LOGIN.appendBox&&(I.LOGIN.markDom.style.display=t,I.LOGIN.appendBox.style.display=t,I.LOGIN.appendBox.status="block"===t||!(I.LOGIN.runStatus=!0)),I.LOGIN.appendBox.status&&n&&n(),I.LOGIN}function p(){function e(e){var n=window.event||e;if(I.LOGIN.appendBox.status)return u("all"),n.cancelBubble?n.cancelBubble=!0:n.stopPropagation(),!1}I.LOGIN.oMark&&!I.LOGIN.oMark.isClick&&(d(I.LOGIN.oMark,"click",e),I.LOGIN.oMark.isClick=!0),I.LOGIN.closeBtn&&I.LOGIN.oMark.isClick&&!I.LOGIN.closeBtn.isCloseClick&&(d(I.LOGIN.closeBtn,"click",e),I.LOGIN.closeBtn.isCloseClick=!0)}var n=t.loginBox.login=function(e){var n={domain:(e=e||{}).domain||"csdn.net",isRedirect:e.isRedirect||!document.createElement("iframe").sandbox,iframeName:e.iframeName||"passport_iframe",isIframe:e.isIframe===i||e.isIframe,frameWidth:e.frameWidth,frameHeight:e.frameHeight,append:e.append||"#passport-box",isClosedBtn:null==e.isClosedBtn||!!e.isClosedBtn,from:e.from,service:e.service,loginService:e.loginService,initRun:e.initRun||null,before:e.before||null,after:e.after||null,finished:e.finished||null};if(e.pvSource&&(n.pvSource=e.pvSource),!n.loginService)throw new Error("login 处理 control错误！");return I.LOGIN.options=n,I.LOGIN.runStatus=!0,n.isIframe&&(n.initRun&&(I.LOGIN.runStatus=n.initRun()),I.LOGIN.runStatus&&(I.LOGIN.runStatus=function(e){var n,t,o,i=e.domain,r=e.from,a=e.append,c=e.isClosedBtn,s=e.service,l=e.isRedirect,d=e.loginService,u=e.isIframe,p=e.iframeName,f=e.frameWidth,m=e.frameHeight,L=document.createElement("div");return L.className=g,N.domain=i||"csdn.net",r&&(d=d+"?from="+r,s&&(d=d+"&service="+s),o=d,e.pvSource&&(d=d+"&"+e.pvSource)),console.debug("处理service:",d),O=document.createDocumentFragment(),n='<iframe  width="'+f+'" height="'+m+'" name="'+p+'" src="'+d+'" frameborder="0" scrolling="no"></iframe>',(t=document.createElement("div")).id=a.replace(/[#\.]/,""),t.className=G,I.LOGIN.appendBox=t,I.LOGIN.markDom=L,I.LOGIN.recordLoginService=o,I.LOGIN.loginService=d,u&&(I.LOGIN.appendBox.innerHTML=n,I.LOGIN.iframeName=p,I.LOGIN.iframeDom=I.LOGIN.appendBox.firstElementChild||I.LOGIN.appendBox.firstChild),c&&(cssStyle="display: inline-block; color: #999; font-size: 22px; cursor: pointer; position:absolute; top:2%; right:5%;-moz-user-select:none; -webkit-user-select:none; user-select:none;",closeBtn=document.createElement("span"),closeBtn.style=cssStyle,closeBtn.innerHTML="&times",t.appendChild(closeBtn),I.LOGIN.closeBtn=closeBtn),O&&(O.appendChild(t),I.LOGIN.oMark=L,I.LOGIN.docDom=O),I.LOGIN.isRedirect=l,!0}(n))),t.loginBox};t.loginBox.close=function(){return I.LOGIN.appendBox.status&&u("all"),t.loginBox},t.loginBox.show=function(e){return I.LOGIN.appendBox.isCreate||s(e),I.LOGIN.appendBox.status||(u("start"),p()),t.loginBox};function o(){!function(){var e=N.head,n=e.firstElementChild||e.firstChild,t=document.createElement("style");t.innerText=".login-box{position: fixed;display: none;left: 50%;top: 50%;z-index: 10000;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: #fff;}.login-mark{position: fixed;top: 0;left: 0;z-index: 9999;background-color: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;display: none;}",e.insertBefore(t,n)}(),function(){I.LOGIN.loginBtn=$selectorAll("[data-bind-login=true]");function e(e){var n=window.event||e,t="true"===this.getAttribute(r),o=this.href;if(!I.LOGIN.runStatus&&t)return console.error("开启loginbox失败!"),!1;!1===I.LOGIN.isRedirect?!0==t&&(I.LOGIN.options.isIframe&&(c(),I.LOGIN.appendBox.isCreate||s(),l("before")&&u(i,function(){l("after")}),p()),n.cancelBubble?n.cancelBubble=!0:n.stopPropagation(),n.returnValue?n.returnValue=!1:n.preventDefault()):o||(N.location.href=I.LOGIN.options.loginService)}var n,t,o=0;if(!I.LOGIN.loginBtn||I.LOGIN.loginBtn.length<=0)return;for(;I.LOGIN.loginBtn[o];)n=o,void 0,t=I.LOGIN.loginBtn[n],d(t,"click",e),o++}(),I.LOGIN.isInit&&n({domain:"csdn.net",isIframe:!0,frameWidth:410,frameHeight:427,append:"#passportbox",from:window.location.href,loginService:"https://passport.csdn.net/account/login"})}function f(e){document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(function(){e&&e()},0):(m=function(){document.removeEventListener("DOMContentLoaded",m,!1),e()},document.addEventListener("DOMContentLoaded",m,!1)):document.attachEvent&&function(e){function n(){t||(t=!0,e&&e())}var t=!1,o=function(){try{N.documentElement.doScroll("left")}catch(e){return void setTimeout(o,50)}n()};o(),N.onreadystatechange=function(){"complete"===N.readyState&&(N.onreadystatechange=null,n())}}(e)}var m;t.loginBox.support=function(){return I.LOGIN.isRedirect};_ready=function(){e&&I(function(){o()})||f(o)},_ready()}(window.csdn=window.csdn||{},void 0);!function(e,o){var u,a,c,n=window.jQuery||{},t=o,d=o;if(!(c=/mobile|micromessenger|ios|tablet|Android tablet|Android phone|Android|webOS|NokiaN9|iPhone|iPod|BlackBerry|BlackBerry phone|BlackBerry tablet|window phone|window tablet|firefox os|firefox os phone|firefox os tablet|meeGo|Television|IEMobile|Opera Mini/i.test(navigator.userAgent.toLowerCase()))&&!(d=!!e.loginBox&&(a=window.csdn.loginBox,!0)))throw new Error("自动启动弹窗策略依赖于login-box基础脚本!");n===window.jQuery?($selectorAll=function(e){var t=[];return n(e).each(function(e,o){t.push(o)}),t},t=!0):$selectorAll=function(e){return document.querySelectorAll(e)},u={userFlg:"UserName",domain:".csdn.net",expires:31536e6,loginAutoMaxNum:20,loginAutoAdbNum:40,loginAutokey:"c-login-auto",loginAutoAdbKey:"c_adb",statisSource:"utm_source=auto_pv"};function s(i){var r=document.cookie;return r&&function(){for(var e,o={},t=0,n=(r=r.split("; ")).length;t<n&&!(0<(e=r[t].split("=")).length&&(e[0]===i&&(o.key=e[0],o.value=e[1],o.status=!0),"key"in o));t++);return"key"in o&&o}()}function l(e,o,t){var n,i,r=s(e);r&&!0===r.status&&(n=r.key+"="+r.value+";",(i=new Date).setTime(i.getTime()-1e3),n=n+"expires="+i.toGMTString()+";",o&&(n=n+"domain="+o+";"),t&&(n=n+"path="+t+";"),document.cookie=n)}function i(){var e,o,t,n,i,r=0;i=u.loginAutoMaxNum,(e=s(u.userFlg))&&e.status||!!e?l(u.loginAutokey,u.domain,"/"):(t=(n=s(u.loginAutoAdbKey))&&n.status||!!n,o=(e=s(u.loginAutokey))&&e.status||!!e,t&&(i=u.loginAutoAdbNum),o&&(r=Number(e.value,10)),i<=r?(l(u.loginAutokey,u.domain,"/"),c?window.location.href="https://passport.csdn.net/account/login":d&&(u.statisSource?a.show({pvSource:u.statisSource+i}):a.show())):function(e,o,t,n,i){var r,u=e+"="+o+";";i&&((r=new Date).setTime(r.getTime()+i),u=u+"expires="+r.toGMTString()+";"),t&&(u=u+"domain="+t+";"),n&&(u=u+"path="+n+";"),document.cookie=u}(u.loginAutokey,r+=1,u.domain,"/",u.expires))}function r(e){document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(function(){e&&e()},0):(m=function(){document.removeEventListener("DOMContentLoaded",m,!1),e()},document.addEventListener("DOMContentLoaded",m,!1)):document.attachEvent&&function(e){function o(){t||(t=!0,e&&e())}var t=!1,n=function(){try{doc.documentElement.doScroll("left")}catch(e){return void setTimeout(n,50)}o()};n(),doc.onreadystatechange=function(){"complete"===doc.readyState&&(doc.onreadystatechange=null,o())}}(e)}var m;_ready=function(){t&&n(function(){i()})||r(i)},_ready()}(window.csdn=window.csdn||{},void 0);!function(){var n=null;function t(){this.textData=null,this.htmlData=null,n=this}function a(t){if(140<window.getSelection().getRangeAt(0).toString().length){var e;t.preventDefault(),e=window.getSelection()+n.textData;window.getSelection(),n.htmlData;if(t.clipboardData)t.clipboardData.setData("text/plain",e);else{if(window.clipboardData)return window.clipboardData.setData("text",e);!function(t){var e=document.createElement("textarea");e.style.cssText="position: fixed;z-index: -10;top: -50px;left: -50px;",e.innerHTML=t,document.getElementsByTagName("body")[0].appendChild(e),e.select(),document.execCommand("copy")}(e)}}}t.prototype.init=function(t,e,n){this.textData=e,this.htmlData=n,function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}(t,"copy",a)},window.csdn=window.csdn?window.csdn:{},csdn.copyright=new t}();!function(a){var e,r,s;for(var t in s={API_SERVER:"//zhannei-dm.csdn.net/",API_BAIDU_SERVER:"https://gsp0.baidu.com/yrwHcjSl0MgCo2Kml5_Y_D3/",API_KEYWORD_GET_URL:"recommend/baidu_keyword",API_BAIDU_CACHE_URL:"recommend/baidu_zhannei_search",API_STATISTIC_SERVER:"//statistic.csdn.net/",SUB_DOMAIN:["blog.csdn.net","download.csdn.net","bbs.csdn.net","edu.csdn.net","geek.csdn.net"],keyword:"",autorun:!1,install:!0,baiduSearchAPPID:"10742016945123576423",debug:{active:!1,currentUrl:"http://blog.csdn.net/dqcfkyqdxym3f8rb0/article/details/66666666",API_SERVER:"http://devpassport.csdn.net/"}})"API_SERVER"!=t&&"API_STATISTIC_SERVER"!=t&&"API_BAIDU_SERVER"!=t&&-1<t.indexOf("API")&&(s.debug.active?s[t]=s.debug.API_SERVER+s[t]:s[t]=s.API_SERVER+s[t]);for(i in"http:"==window.location.protocol&&(s.API_BAIDU_SERVER="http://zhannei.baidu.com/"),r={getRequest:function(e,t){var n,a,c,r={};switch(t=t||"search"){case"hash":n=e.split("#")[1]||"";break;case"search":n=(n=e.split("?")[1]||"").split("#")[0]}for(c=n.split("&"),a=0;a<c.length;a++)r[c[a].split("=")[0]]=decodeURI(c[a].split("=")[1]);return r},parseCFG:function(){if(document.getElementsByTagName("meta")["csdn-baidu-search"]){var e=JSON.parse(document.getElementsByTagName("meta")["csdn-baidu-search"].content);s.keyword=e.keyword||s.keyword,s.autorun="true"==e.autorun,s.install="false"!=e.install}},autorun:function(){""!=s.keyword?csdn.baiduSearch(s.keyword,function(e){csdn.baiduCacheBuild(s.keyword,e)}):csdn.baiduKeywordGet(function(t){csdn.baiduSearch(t,function(e){csdn.baiduCacheBuild(t,e)})})},trackByGraylog:function(e,t){},filterData:function(e){var t=[];for(var n in e){var a=e[n];if(!/^((https|http)?:\/\/)(.*)download.csdn.net[^\s]+/.test(a.linkUrl)||/^((https|http)?:\/\/)download.csdn.net\/download\/[^\s]+/.test(a.linkUrl)){var c=a.title;c=(c=(c=(c=c.replace("-<em>CSDN</em>下载","")).replace("- <em>CSDN</em>下载","")).replace("-CSDN下载","")).replace(" - 下载频道 - CSDN.NET",""),a.title,a.title=c,t.push(a)}}return t},removeCurrent:function(e){var t=window.location.href.split("#")[0],n=[];for(var a in e){var c=e[a];c.linkUrl.split("?")[0]!=t&&n.push(c)}return n}},e={baiduSearchInstall:function(e){var t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=s.API_BAIDU_SERVER+"api/customsearch/apiaccept?sid="+s.baiduSearchAPPID+"&v=2.0&callback=csdn.afterBaiduSearchInit",t.onerror=function(){r.trackByGraylog("baidu_search_error",{step:"install"}),"function"==typeof csdn.baiduSearchInstallError&&csdn.baiduSearchInstallError()};var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},afterBaiduSearchInit:function(){csdn.cse=new BCse.Search(s.baiduSearchAPPID),"function"!=typeof csdn.afterCasInit?s.autorun&&r.autorun():csdn.afterCasInit(s.keyword,csdn.cse)},baiduSearch:function(n,a,e,t){if(e)if(-1<e.indexOf("/"))csdn.cse.setSearchRange(3,[e.split("/")[1]]);else{var c=e.split(".csdn.net");1<c.length&&(e=c[0]),csdn.cse.setSearchRange(2,[e+".csdn.net"])}else csdn.cse.setSearchRange(2,s.SUB_DOMAIN);t||(t=1),csdn.cse.getResult(n,function(e){r.trackByGraylog("baidu_search_success"),e=r.filterData(e),csdn.baiduCacheBuild(n,e);var t=r.removeCurrent(e);a(t)},t)},baiduKeywordGet:function(t){a.ajax({url:s.API_KEYWORD_GET_URL,type:"GET",contentType:"text/plain;charset=UTF-8",data:{url:s.debug.active?s.debug.currentUrl:window.location.href,result_size:1},success:function(e){0<e.length&&(s.debug.active,t(e[0].keyword))}})},baiduCacheBuild:function(e,t){var n="?keyword="+e;"2"==csdn.cse.param.ct&&-1==csdn.cse.param.cc.indexOf("%26")?n+="&domain_type="+csdn.cse.param.cc.split(".csdn.net")[0]:"3"==csdn.cse.param.ct&&(n+="&url_type="+csdn.cse.param.cc),a.ajax({url:s.API_BAIDU_CACHE_URL+n,type:"POST",dataType:"text",contentType:"text/plain;charset=UTF-8",data:JSON.stringify(t)})},baiduSearchCFG:s},void 0===window.csdn&&(window.csdn={}),e)window.csdn[i]=e[i];r.parseCFG(),s.install&&csdn.baiduSearchInstall()}(jQuery);