!function(e){window.jQuery?e(window.csdn=window.csdn||{},void 0):function(){!window.jQuery&&function(){var t=document.createElement("script"),o=document.getElementById("collection-script")||document.head.lastElementChild||document.head.lastChild;t.src="//csdnimg.cn/public/common/libs/jquery/jquery-1.9.1.min.js",t.type="text/javascript";var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://g.csdnimg.cn/user-login/2.2.4/user-login.js";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(n,c),myDOM=o.previousElementSibling||o.previousSibling,t.onload=function(){e(window.csdn=window.csdn||{},void 0)},document.body.insertBefore(t,o)}()}()}(function(e,t){function o(e){var t=!0,o=function(e){if(e?"url"in e&&""!==e.url?"source"in e&&""!==e.source?"source_id"in e&&""!==e.source_id?"author"in e&&""!==e.author?"title"in e&&""!==e.title||(console.warn("调用请提供标题信息"),t=!1):(console.warn("调用请提供访问用户作者信息"),t=!1):(console.warn("调用请提供访问来源source_id！"),t=!1):(console.warn("调用请提供访问来源类型！"),t=!1):(console.warn("调用请提供访问来源地址！"),t=!1):(console.warn("调用请提供访问需设参数！"),t=!1),!1===t)return!1};if(!n.COLLECTION.params&&o(e),n.COLLECTION.params){if(e&&t){for(var c in e)n.COLLECTION.params[c]=e[c];o(n.COLLECTION.params)}}else t&&(n.COLLECTION.params=e);return t}var n=window.jQuery||{},c=t,l=t,r=window.document,i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://g.csdnimg.cn/user-login/2.2.4/user-login.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(i,a);var s={baseUrl:"//g.csdnimg.cn/collection-box/",userTag:"UserName",ads:"//g.csdnimg.cn/collection-box/1.1.7/collection-box.css",collectionTag:"[data-bind-collection=true]",prefixStyleTag:"g-",styleTag:"collection-box",status:{create:"add-collection",list:"list-collection"},requestHostName:"//me.csdn.net",messageInfoTimer:1800};e.collectionBox=e.collectionBox?e.collectionBox:{},n===window.jQuery?(l=function(e,t){var o=[];return n(t,e).each(function(e,t){o.push(t)}),o},function(e){return n(e,r).get(0)},c=!0):l=function(e){return r.querySelectorAll(e)},n.COLLECTION={version:"1.1.7",v:"1.1.2"},n.COLLECTION.labels={currentTab:"add-collection"},e.collectionBox.params&&o(e.collectionBox.params),e.collectionBox.scope=n.COLLECTION;var u=function(e){var t=document.cookie;return t&&function(){var o,n={};t=t.split("; ");for(var c=0,l=t.length;c<l&&(o=t[c].split("="),!(o.length>0&&(o[0]===e&&(n.key=o[0],n.value=o[1],n.status=!0),"key"in n)));c++);return"key"in n&&n}()},d=function(e){return e.replace(/^\s*/g,"").replace(/\s*$/g,"")},m=function(e,t,o){window.addEventListener?function(){e.addEventListener(t,o,!1)}():function(){e.attachEvent("on"+t,o)}()},C=function(e,t,o){window.removeEventListener?function(){e.removeEventListener(t,o,!1)}():function(){e.detachEvent("on"+t,o)}()},f=function(){var e,t=r.head,o=t.firstElementChild||t.firstChild,c=r.createElement("link");return c.rel="stylesheet",c.type="text/css",c.href=s.ads,e=t.insertBefore(c,o),n.COLLECTION.linkCss=e,!!e},L=function(e){var t,o;e||(e=n.COLLECTION.labels.currentTab),"add-collection"===e?(t=new RegExp("(s*g-collection([^-]|$))","g"),o=" g-create"):"list-collection"===e&&(t=new RegExp("(s*g-create([^-]|$))","g"),o=" g-collection"),n.COLLECTION.collectionDom.className=n.COLLECTION.collectionDom.className.replace(t,o)},O=function(){var e,t=n.COLLECTION.formGroup,o=t.querySelector(".form-title")||r.getElementById("g-form-title"),c=t.querySelector(".form-des")||r.getElementById("g-form-des"),l=t.querySelector(".form-check")||r.getElementById("g-form-checks");if(o.value&&(o.value=""),c.value&&(c.value=""),l){var i=l.getElementsByTagName("input");i&&(i[0].checked=!0)}if(n.COLLECTION.formError.length>0)for(;e=n.COLLECTION.formError.shift();)e.eleTag&&delete e.isCreate&&e.removeChild(e.eleTag)},g=e.collectionBox.getState=function(t,o){return window.csdn.userLogin.loadAjax(function(e){o||(o="list"),"list"===o&&O(),n.COLLECTION.labels.currentTab=s.status[o],L()}),e.collectionBox},p=function(e){for(var t,o=0,n="";t=e[o];)n+=function(e){return'<li><span class="title"><a href="###">'+e.Name+'</a></span><em class="info"><i>'+e.FavoriteNum+'</i>条内容</em><a href="" class="btn-collect btn-collect-pos '+(e.CheckStatus>0?"btn-uncollected":"btn-collected")+'" data-id="'+e.ID+'" name="collection-btn"'+(e.CheckStatus>0?"data-checkId="+e.CheckStatus:"")+">"+(e.CheckStatus>0?"已收藏":"收藏")+"</a></li>"}(t),o++;return n},v=function(e){var t=n(n.COLLECTION.gMessage);t.text(e),t.addClass("g-fadeInDown"),setTimeout(function(){t.removeClass("g-fadeInDown")},s.messageInfoTimer)},E=function(){var t={};n.COLLECTION.formError=[];var o,c,l,i,a,u,C,f={title:{reg:"([^\\s*]+){2,20}",min:2,max:20,msg:"长度在 2 到 20 个字符"}},L=function(e){var t=e.msg,o=e.pos;return o&&!o.isCreate?function(){var e=r.createElement("div");return e.className="g-collection-error",e.innerHTML=t,o.isCreate=!0,e}():function(){var e=o.querySelector(".g-collection-error");return e&&(e.innerHTML=t),e}()},O=function(e){var t,o,c=0,l=!1,r=e.pos,i=e.msg;if(!r)return!1;if(o=i&&L(e)){for(r.appendChild(o),r.eleTag=o;t=n.COLLECTION.formError[0];){if(t===r){l=!0;break}c++}!l&&n.COLLECTION.formError.push(r)}else{var o=r.querySelector(".g-collection-error")||n(".g-collection-error",r).get(0);if(o&&!i)for(r.removeChild(o),delete r.eleTag,delete r.isCreate;t=n.COLLECTION.formError[c];){if(t===r){n.COLLECTION.formError.splice(c,1);break}c++}}},g=n.COLLECTION.formGroup,E=n.COLLECTION.formBtns;if(!E||!g)return console.warn("collection option is fail!"),!1;o=g.querySelector(".form-title")||n("#g-form-title",g).get(0),c=g.querySelector(".form-des")||n("#g-form-des",g).get(0),l=g.querySelector(".form-check")||n("#g-form-checks",g).get(0),i=E.querySelector(".btn-confirm")||n("#g-btn-confirm",E).get(0),a=E.querySelector(".btn-reset")||n("#g-btn-reset",E).get(0),u=function(e){var t,o,n,c,l=d(e&&e.value||this.value),r=d(e&&e.value||this.value),a=e&&e.getAttribute("data-name")||this.getAttribute("data-name"),s=!0;a&&(a=f[a]),t=a.reg&&new RegExp(a.reg,"g"),c=a.reg&&a.msg||"格式不正确",o=a.min,n=a.max,t&&(r=r.match(t))&&(r=r[0]),r?(o||n)&&(l.length<o||l.length>n)&&(s=!1):s=!1,!1===s?i.isNoSub=!0:delete i.isNoSub,"function"==typeof O&&O(!1===s?{msg:c,pos:this.parentNode}:{pos:this.parentNode})},C=function(){var r=l.getElementsByTagName("input");if(t.name=d(o.value),t.description=d(c.value),t.source=n.COLLECTION.params.source,t.is_private=r.length>0&&(r[0].checked?0:1),!n.ajax)return console.warn("请导入jquery, 发起请求"),!1;n.ajax({type:"post",url:s.requestHostName+"/api/favorite/createFolder",data:JSON.stringify(t),crossDomain:!0,xhrFields:{withCredentials:!0},success:function(t){if(200===t.code){var o=t.data,n=p([o]);v("创建成功!"),T(n,"single"),e.collectionBox.getState(null,"list"),N()}},error:function(e){var t;if(e){try{t=JSON.parse(e.responseText).message}catch(o){t=e.statusText}v(t||"创建失败!")}}})},o.onblur=function(){var e=this;u.call(e)},i&&m(i,"click",function(){if(o.focus(),o.blur(),i.isNoSub)return!1;C()}),a&&m(a,"click",function(){e.collectionBox.close()})},N=function(){var e;n(".btn-collect","#g-collection-list").off("click"),n(".btn-collect","#g-collection-list").on("click",function(t){var o={},c=n(this),l=Number(n(this).attr("data-id"),10),r=Number(n(this).attr("data-checkId"),10);if(n(this).hasClass("btn-collected")){if(e=s.requestHostName+"/api/favorite/create",!(n.COLLECTION.params.url&&n.COLLECTION.params.title&&n.COLLECTION.params.author&&n.COLLECTION.params.source&&n.COLLECTION.params.source_id))return alert("缺少提交参数!"),!1;o.url=n.COLLECTION.params.url,o.title=n.COLLECTION.params.title,o.description=n.COLLECTION.params.description||"",o.author=n.COLLECTION.params.author,o.source=n.COLLECTION.params.source,o.source_id=Number(n.COLLECTION.params.source_id,10),o.folder_id=l,c.isCollect=!0}else if(n(this).hasClass("btn-uncollected")){if(e=s.requestHostName+"/api/favorite/delete",!n.COLLECTION.params.source)return alert("缺少提交参数!"),!1;o.source=n.COLLECTION.params.source,r&&(o.ids=[r]),c.isCollect=!1}return n.ajax({type:"post",url:e,data:JSON.stringify(o),crossDomain:!0,xhrFields:{withCredentials:!0},success:function(e){var t=c.closest("li").find(".info i"),o=Number(t.html(),10)||0;200===e.code&&(c.isCollect?(c.attr("data-checkId",e.data.ID).removeClass("btn-collected").addClass("btn-uncollected").text("已收藏"),o+=1):(c.removeAttr("data-checkId").removeClass("btn-uncollected").addClass("btn-collected").text("收藏"),o-=1),t.html(o))},error:function(e){var t;if(e){try{t=JSON.parse(e.responseText).message}catch(o){t=e.statusText}v(t||"操作失败!")}}}),!1})},T=function(e,t){var o,c,l=n.COLLECTION.collectionList;l&&("single"===t?(l.className=l.className.replace(/hide/g,""),c=r.createElement("ul"),c.innerHTML=e,c=c.firstElementChild||c.firstChild,o=l.firstElementChild||l.firstChild||null,e&&l.insertBefore(c,o)):e&&(l.innerHTML="",l.innerHTML=e))},h=function(e){var t,o,c,l,i,a=s.prefixStyleTag?s.prefixStyleTag:"g-";return o='<div class="g-collection-box g-collection-skin '+s.styleTag+("add-collection"===n.COLLECTION.labels.currentTab?" g-collection":"")+'"><span class="'+a+'close-btn" id="g-close-btn">&times</span><div class="collection-title '+a+'collection-title">添加收藏</div><div class="collection-title '+a+'create-title">新建收藏夹</div><div class="collection-content"><ul class="list '+(e?"":"hide")+'" id="g-collection-list">'+(e||"")+'</ul><div class="collection-blank '+(e?"hide":"")+'"><span class="g-monkey"><img src="'+s.baseUrl+n.COLLECTION.version+'/images/monkey-pixel.svg" alt="no result"></span><em>没有收藏列表内容！</em></div><div class="'+a+'collection-form" id="g-collection-form"><div class="'+a+'form-control"><label class="label-title" for="g-form-title">标题</label><input data-name="title" tabindex="1" class="'+a+'form-control-text form-title" id="g-form-title" placeholder="请填写收藏夹的名称" type="text"/></div><div class="'+a+'form-control"><label class="label-title" for="g-form-des">描述（选填）</label><textarea data-name="des" class="'+a+'form-control-text form-des" id="g-form-des" placeholder="请填写收藏夹的名称" rows="8"></textarea></div><div class="'+a+"form-control "+a+'form-control-private"><label class="label-title">私密</label><span class="check-group form-check" id="g-form-checks"><span><input type="radio" name="radios" id="public-radio" value="0" checked/> <label for="public-radio">公开 所有人可见</label></span><span><input type="radio" name="radios" id="private-radio" value="1"/> <label for="private-radio">私密 只有你可以查看这个收藏夹</label></span></span></div></div></div><div class="'+a+'btn-group" id="g-btn-group"><a href="javascript:void(0);" class="btn-add-collection '+a+'btn" onclick="window.csdn.collectionBox.getState(this, \'create\');">+ 新建收藏夹</a><a href="javascript:void(0);" id="g-btn-back" class="btn-back '+a+'btn" onclick="window.csdn.collectionBox.getState(this, \'list\');">返回</a><a href="javascript:void(0);" id="g-btn-reset" class="btn-reset '+a+'btn">取消</a><a href="javascript:void(0);" id="g-btn-confirm" class="btn-confirm '+a+'btn">确定</a></div></div>',c=r.body,l=r.createDocumentFragment(),i=r.createElement("div"),i.className="g-collection-mark",i.innerHTML=o+'<span class="g-collection-message" id="g-collection-message"></span>',n.COLLECTION.fragmentDom=l,n.COLLECTION.htmlDom=i,n.COLLECTION.collectionDom=i.firstElementChild||i.firstChild,n.COLLECTION.closeBtn=n.COLLECTION.collectionDom.querySelector("."+a+"close-btn")||n.COLLECTION.collectionDom.children[0],n.COLLECTION.collectionList=n.COLLECTION.collectionDom.querySelector(".list")||n("#g-collection-list",n.COLLECTION.collectionDom).get(0),n.COLLECTION.formGroup=n.COLLECTION.collectionDom.querySelector("."+a+"collection-form")||n("#g-collection-form",n.COLLECTION.collectionDom).get(0),n.COLLECTION.formBtns=n.COLLECTION.collectionDom.querySelector("."+a+"btn-group")||n("#g-btn-group",n.COLLECTION.collectionDom).get(0),n.COLLECTION.gMessage=i.lastElementChild||i.lastChild,n.COLLECTION.collectionDom.isCreate=!0,l.appendChild(i),t=c.appendChild(l),E(),t},b=function(e,t){var o=n.COLLECTION.params.url;n.ajax({type:"get",url:s.requestHostName+"/api/favorite/folderListWithCheck?url="+o,crossDomain:!0,xhrFields:{withCredentials:!0},success:function(o){var c,l;200===o.code&&o.data&&(c=o.data.result,l=p(c),!n.COLLECTION.collectionDom||n.COLLECTION.collectionDom&&!n.COLLECTION.collectionDom.isCreate?e(l):T(l),t())},error:function(e){var t;if(e){try{t=JSON.parse(e.responseText).message}catch(o){t=e.statusText}v(t||"获取收藏列表失败!")}}})},I=function(e,t){var o;return o="all"===e?"none":"block","start"===e&&(o="block"),n.COLLECTION.collectionDom&&(n.COLLECTION.collectionDom.parentNode.style.display=o,n.COLLECTION.collectionDom.status="block"===o||(n.COLLECTION.runStatus=!0,!1)),n.COLLECTION.collectionDom.status&&t&&t(),n.COLLECTION},y=function(){var e=function(e){var t=e||window.event;if(n.COLLECTION.collectionDom.status&&t.target===this)return I("all"),g(),t.cancelBubble?t.cancelBubble=!0:t.stopPropagation(),!1};n.COLLECTION.collectionDom.parentNode&&!n.COLLECTION.collectionDom.parentNode.isClick&&(C(n.COLLECTION.collectionDom.parentNode,"click",e),m(n.COLLECTION.collectionDom.parentNode,"click",e),n.COLLECTION.collectionDom.parentNode.isClick=!0),n.COLLECTION.closeBtn&&!n.COLLECTION.closeBtn.isCloseClick&&(C(n.COLLECTION.closeBtn,"click",e),m(n.COLLECTION.closeBtn,"click",e),n.COLLECTION.closeBtn.isCloseClick=!0)},x=function(e){var c=(!n.COLLECTION.collectionDom||n.COLLECTION.collectionDom&&!n.COLLECTION.collectionDom.isCreate)&&!n.COLLECTION.linkCss&&f();if(!1===o(e))return console.warn("调用失败！"),!1;c?b(h,function(){I(t),y(),N()}):n.COLLECTION.collectionDom&&b(T,function(){I(t),N()})},w=function(){var e=n(s.collectionTag,r)||l(r,s.collectionTag);return c?n(r).on("click",s.collectionTag,function(e){var t=e||window.event;return window.csdn.userLogin.loadAjax(function(e){x()}),t.cancelBubble?t.cancelBubble=!0:t.stopPropagation(),t.returnValue?t.returnValue=!1:t.preventDefault(),!1}):e.length>0&&function(){n.COLLECTION.collectionBtns=e;for(var t=function(e){var t=e||window.event;window.csdn.userLogin.loadAjax(function(e){x()}),t.cancelBubble?t.cancelBubble=!0:t.stopPropagation(),t.returnValue?t.returnValue=!1:t.preventDefault()},o=0;e[o];)!function(o){var n=e[o];m(n,"click",t)}(o),o++}(),!0};e.collectionBox.close=function(){return!n.COLLECTION.collectionDom||n.COLLECTION.collectionDom&&!n.COLLECTION.collectionDom.status?e.collectionBox:(n.COLLECTION.collectionDom.status&&(g(),I("all")),e.collectionBox)},e.collectionBox.show=function(t){return window.csdn.userLogin.loadAjax(function(e){x(t)}),e.collectionBox};var k,D=function(){w()},B=function(){if(result=u(s.userTag),!result||result&&!result.status)return!1;D()},S=function(){B()},j=function(e){var t=!1,o=function(){t||(t=!0,e&&e())},n=function(){try{r.documentElement.doScroll("left")}catch(e){return void setTimeout(n,50)}o()};n(),r.onreadystatechange=function(){"complete"===r.readyState&&(r.onreadystatechange=null,o())}},q=function(e){document.addEventListener?~["complete","loaded","interactive"].indexOf(document.readyState)?setTimeout(function(){e&&e()},0):(k=function(){document.removeEventListener("DOMContentLoaded",k,!1),e()},document.addEventListener("DOMContentLoaded",k,!1)):document.attachEvent&&j(e)};_ready=function(){c&&n(function(){S()})||q(S)},_ready()});