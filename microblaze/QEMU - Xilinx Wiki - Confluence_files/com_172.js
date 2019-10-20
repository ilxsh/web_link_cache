WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save-conf-frontend', location = 'js/reliable-save.js' */
define("confluence-editor-reliable-save/reliable-save","ajs confluence/templates underscore jquery window document confluence/api/constants confluence-editor/editor/page-editor-message confluence-editor/editor/page-editor-quit-dialog confluence/analytics-support confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence/meta".split(" "),function(a,k,i,c,m,v,p,d,w,D,j,b){function x(b){var c="There was an error processing the request.";d.closeMessages(["generic-error"]);d.handleMessage("generic-error",
{type:"error",message:c});a.logError("Generic error: "+JSON.stringify(b))}function z(b){var c="Looks like your session expired. Log in again to keep working.\n \u003cdiv\u003e\u003ca href=\"dashboard.action\" target=\"_blank\"\u003eLogin\u003c/a\u003e\u003c/div\u003e";d.closeMessages(["noauthorized"]);d.handleMessage("noauthorized",{title:"Can\'t connect to the server",type:"error",message:c});b&&a.trigger("rte.safe-save.invalid-xsrf-token")}function q(){var b="Unable to communicate with server. Saving is not possible at the moment.";d.closeMessages(["server-offline"]);d.handleMessage("server-offline",{type:"error",message:b})}
var A=[],r="confluence.editor.publish",n,o={_internal:{}};o._internal.onSuccessfulResponse=function(d){var c={dataType:"json",contentId:b.get("content-id"),draftType:b.get("draft-type")};a.safe.post(p.CONTEXT_PATH+"/json/stopheartbeatactivity.action",c,function(){a.log("Stop heartbeat activity on",c.draftType,"id",c.contentId)},"json").fail(function(b,d,c){a.logError("Server error on stop heartbeat activity request:");a.log(c)}).always(function(){var a=d._links.webui;a?m.location=a.indexOf("/")!==
0?a:p.CONTEXT_PATH+a:j.UI.toggleSavebarBusy(false)})};o.initialize=function(){function y(f){function B(b){a.trigger("rte.safe-save.error",{status:b.status})}a.trigger("synchrony.stop",{id:r});f&&f.preventDefault();var h=c("#content-title");if(h.hasClass("placeholded")||h.val().trim()===""){a.trigger("rte.safe-save.error");a.trigger("synchrony.start",{id:r});d.closeMessages(["title-too-long","duplicate-title"]);d.handleMessage("empty-title",{title:"This page needs a name",type:"error",
message:"Add a page title before hitting publish."});j.UI.toggleSavebarBusy(false);f=c.Deferred();f.fail();return f.promise()}j.Drafts.unBindUnloadMessage();var e={},g=b.get("draft-id"),l=b.get("content-id"),f=p.CONTEXT_PATH+"/rest/api/content",i=c("#sourceTemplateId").val();e.status="current";e.title=h.val();e.space={key:b.get("space-key")};var t=a.Rte.getEditor().getContent();A.forEach(function(a){t=a(t)});e.body={editor:{value:t,representation:"editor"}};if(i)e.extensions={sourceTemplateId:i};h=(h=
j.UI.postingDatePicker)&&h.getDate();if(m.type==="blogpost"&&h&&h.toISOString)e.history={createdDate:h.toISOString()};b.getBoolean("new-page")&&b.get("is-blueprint-page")&&(f=f+"/blueprint/instance");f=f+"/"+l;if(b.getBoolean("new-page")){e.id=g;e.body.editor.content={id:g}}else{e.id=b.get("page-id");e.body.editor.content={id:b.get("page-id")}}f=g==="0"?f+"?status=current":f+"?status=draft";g=b.getNumber("page-version")||0;e.type=b.get("content-type");e.version={number:g+1,message:c("#versionComment").val(),
minorEdit:c("#notifyWatchers").is(":checked")?false:true,syncRev:c("#syncRev").val()};g={};g.id=b.get("parent-page-id")||"0";g.type=b.get("content-type");l=b.get("parent-page-id");if(!l||e.space.key!==b.get("space-key"))g.id="0";if(l&&g.id!==l)g.id=c("#parentPageString").val()===b.get("from-page-title")?g.id:l;if(g.id!=="0")e.ancestors=[g];return c.ajax({type:"PUT",url:f,contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify(e),success:function(b){n&&clearTimeout(n);a.trigger("rte.safe-save.success",
b);o._internal.onSuccessfulResponse(b)},error:function(b){a.trigger("rte.safe-save.error",{status:b.status});var f=false;j.UI.toggleSavebarBusy(false);switch(b.status){case 400:d.closeMessages(["empty-title","duplicate-title","title-too-long"]);b.responseText.indexOf(k.duplicatedTitle)>=0?d.handleMessage("duplicate-title",{type:"error",message:a.format("A page with the title \'\'{0}\'\' already exists in this space. Enter a different title for your page.",a.escapeHtml(c("#content-title").val()))}):b.responseText.indexOf(k.titleTooLong)>=0?d.handleMessage("title-too-long",
{type:"error",message:"Title cannot be longer than 255 characters."}):x(b);break;case 403:z(true);break;case 404:d.closeMessages(["page-not-accessible","noauthorized"]);d.handleMessage("page-not-accessible",{title:"This content cannot be accessed.",type:"error",message:a.format("Your session may have expired, you can attempt to \u003ca href=\"dashboard.action\" target=\"_blank\"\u003elog in\u003c/a\u003e.",e.space.key)});break;case 409:f=true;if(s<v){s++;u.push(setTimeout(function(){y()},C))}else{a.trigger("analyticsEvent",{name:"editor.save.error.conflict"});s=0;
d.handleMessage("page-conflict",{title:"Can\'t sync with the server.",type:"error",message:a.format("Refresh the page to try to re-establish the connection.",e.space.key)});B(b)}break;case 410:d.closeMessages(["page-deleted"]);d.handleMessage("page-deleted",{title:"This content has been deleted",type:"error",message:a.format("Copy your content, then add it to a new page or \u003cdiv\u003e\u003ca href=\"viewtrash.action?key={0}\" target=\"_blank\"\u003erestore this page from the trash\u003c/a\u003e and try again.\u003c/div\u003e",e.space.key)});break;case 413:d.closeMessages(["page-too-big"]);d.handleMessage("page-too-big",{type:"error",message:"This page is too big to save. You could split it into multiple pages, then use the \u003ca href=\"https://confluence.atlassian.com/conf51/include-page-macro-336169384.html\" target=\"_blank\"\u003einclude page macro\u003c/a\u003e to display the content."});
break;case 0:case 500:case 503:for(;u.length;)clearTimeout(u.shift());if(b.status===500){n&&clearTimeout(n);n=setTimeout(function(){q()},500)}else q();break;default:x(b)}f||B(b);a.trigger("synchrony.start",{id:r})}})}if(!(c("#editpageform").length===0&&c("#createpageform").length===0)){var k={duplicatedTitle:"A page with this title already exists",titleTooLong:"Title cannot be longer than 255 characters."},m={pageId:b.get("page-id"),type:b.get("draft-type"),spaceKey:b.get("space-key")};w.init({saveHandler:y});
j.overrideSave(w.process);var s=0,v=3,C=1E3,u=[];a.bind("rte.heartbeat-error",function(b,c){switch(c.status){case 401:case 403:d.isDisplayed(["page-not-accessible"])||z(false);break;case 0:case 404:case 500:case 503:j.metadataSyncRequired()||q();break;default:a.logError("Heartbeat action error: "+JSON.stringify(c))}});a.bind("rte.heartbeat",function(){var b=false;i.each(d.displayedErrors(),function(a){if(i.contains(["noauthorized","server-offline","page-not-accessible"],a)){b=true;d.closeMessages([a])}});
b&&d.handleMessage("reconnect",{type:"info",title:"Successfully reconnected",message:"We\'re back in business. You\'re free to save your page again.",close:"auto"})})}};o.registerCleanupFunction=function(a){A.push(a)};return o});
require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/reliable-save",function(a){var k=require("ajs"),i=require("confluence/meta"),c=require("jquery"),m=0<window.document.referrer.indexOf("createDialog=true&flashId");k.DarkFeatures.isEnabled("editor.ajax.save")&&!(""===i.get("remote-user")||m)&&k.bind("rte.init.ui",function(){a.initialize();Confluence.Editor=Confluence.Editor||{};Confluence.Editor.SafeSave=Confluence.Editor.SafeSave||{};Confluence.Editor.SafeSave._internal=
a._internal||{};a.registerCleanupFunction(function(a){return c("<div>").append(a.replace(/(<[/]?span[^>]*>)\1\1\1\1\1\1\1\1\1\1\1(\1)*/,"$1")).html()})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.reliablesave:reliable-save-conf-frontend', location = 'js/ajax-login.js' */
define("confluence-editor-reliable-save/ajax-login",["confluence/dark-features","confluence/meta","ajs","jquery","document"],function(d,c,f,g,u){return function(){function v(c,j){var a=q.call(g,c,j),d=c&&c.url;if(r&&(!j||j&&!j.preventAjaxLogin)&&d&&(l&&0===d.indexOf(l)||k&&0===d.indexOf(k))){var t=function(a,d,w,l){function k(){b.readyState=a.readyState;b.status=a.status;b.statusText=a.statusText;a.responseXML?b.responseXML=a.responseXML:b.responseText=a.responseText;d.apply(w,l)}var n=a.getResponseHeader("X-AUSERNAME");
r===n?k():(m.push({deferred:e,url:c,settings:j,defaultCallback:k}),o||(p=!1,h||(h=new f.Dialog(840,700),h.addPanel("ajax-login","ajax-login-content","ajax-login-panel",1),n=g(".ajax-login-panel"),i=g("<iframe></iframe>"),i.bind("load",function(){var a=i[0].contentDocument.location.pathname;a&&0<=a.indexOf("/"+s)&&(o=!1,p=!0,h.hide(),i.attr("src","about:blank"))}),n.append(i),g(u).bind("hideLayer",function(a,b,d){if("popup"===b&&d===h.popup){f.debug("hiding login dialog");if(p){a=m;b=0;for(d=a.length;b<
d;b++){var c=a[b];f.debug("Rerunning ajax query to: "+c.url,c);q.call(g,c.url,c.settings).done(function(){f.debug("Rerunning done");c.deferred.resolve(arguments)}).fail(function(){f.debug("Rerunning failed");c.deferred.reject(arguments)})}}else{a=m;b=0;for(d=a.length;b<d;b++){var e=a[b];f.debug("Executing with original response for: "+e.url,e);e.defaultCallback&&e.defaultCallback()}}m=[]}})),i.attr("src",x),h.show(),o=!0))};f.debug("Using authenticatingPromise");var b={abort:function(){a.abort.apply(a,
arguments)},getAllResponseHeaders:function(){a.getAllResponseHeaders.apply(a,arguments)},getResponseHeader:function(){a.getResponseHeader.apply(a,arguments)},overrideMimeType:function(){a.overrideMimeType.apply(a,arguments)},readyState:a.readyState,setRequestHeader:function(b,c){a.setRequestHeader.apply(a,arguments)},state:function(){a.state.apply(a,arguments)},status:a.status,statusCode:function(){a.statusCode.apply(a,arguments)},statusText:a.statusText},e=g.Deferred();e.promise(b);b.success=b.done;
b.error=b.fail;a.done(function(a,b,c){t(c,e.resolve,e,arguments)});a.fail(function(a,b,c){t(a,e.reject,e,arguments)});return b}return a}if(d.isEnabled("ajax.login")){f.debug("AJAX login support enabled");var o=!1,h,i,p,m=[],q=g.ajax,r=c.get("remote-user"),l=c.get("base-url"),k=c.get("context-path"),s="ajaxlogincomplete.action",x=c.get("context-path")+"/login.action?os_destination=%2F"+s;g.ajax=v}}});require("confluence/module-exporter").safeRequire("confluence-editor-reliable-save/ajax-login",function(d){require("ajs").toInit(d)});
}catch(e){WRMCB(e)};