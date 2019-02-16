WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-page.js' */
define("confluence-request-access-plugin/request-access",["jquery","confluence/legacy","confluence/meta","ajs","skate"],function(e,g,d,c,b){var a=function(){var h=d.get("page-id");var i=e("#invite-to-edit-draft").length;if(i){h=e("#invite-to-edit-draft").data("draft-id")}return h};function f(j){j=j||{};var h=a()||j.pageId;var i=g.getContextPath();var k=function(n){var o=e(".request-access-container");var m=o.find("button");var l=o.data("access-type");if(o.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(m.length){c.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{accessType:l}})}}m.prop("disabled",false);m.removeAttr("aria-disabled");m.click(function(){c.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{accessType:l}});m.attr("aria-disabled","true");var p=e(g.Request.Access.loading({}));m.replaceWith(p);e.ajax({url:i+"/rest/request-access/latest/page/restriction/"+h+"/request/"+l,type:"POST",contentType:"application/json; charset=utf-8",success:function(q){c.flag({type:"success",title:"Request sent",body:c.format("We\'\'ve asked {0} to give you access. You\'\'ll get an email once the request is approved",g.Request.Access.usernameLink({user:q}))})},error:function(q,r){c.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."})},complete:function(){p.remove();g.Binder.userHover()}})})};if(!window.__skate||!window.__skate.registry||!window.__skate.registry["request-access-container"]){b("request-access-container",{type:b.types.CLASS,attached:k})}}return{init:f}});require("confluence/module-exporter").safeRequire("confluence-request-access-plugin/request-access",function(a){require("ajs").toInit(a.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
define("confluence-request-access-plugin/grant-access",["jquery","confluence/legacy","confluence/meta","ajs","confluence/dark-features"],function(e,h,d,a,b){function c(i){i=i.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var k=new RegExp("[\\?&]"+i+"=([^&#]*)");var j=k.exec(location.search);return j==null?"":decodeURIComponent(j[1].replace(/\+/g," "))}function g(){return a.Rte&&a.Rte.getEditor&&a.Rte.getEditor()&&(!!a.$("#editpageform").length||!!a.$("#createpageform").length)}function f(w){var o=h.getContextPath();w=w||{};var i=d.get("page-id")||w.pageId;var m=d.get("remote-user");var r=d.get("content-type");var s=c("username");var j=c("userFullName").split("+").join(" ");var k=c("accessType");var n=e("#content-metadata-page-restrictions");var v=e("#content-metadata-page-restrictions.restricted").length!==0;var l=e("#rte-button-restrictions");var q=g()&&!!l.length&&!!c("grantAccess")&&!!k;var u=n.length&&v&&!!c("grantAccess")&&!!k;if(!u&&!q){return}if(q){n=l;i=d.get("content-id")}var p=e(h.Request.Access.loading());var t=a.InlineDialog(n,"grantAccessDialog",function(y,x,z){y.css({padding:"20px"}).html(h.Grant.Access.dialog({requestAccessUsername:s,requestAccessUserFullName:j,requestAccessType:k,contentType:r}));y.on("click",".aui-button.grant-access",function(C){C.stopPropagation();var A=y.find(".actions-result");A.replaceWith(p);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{accessType:k}});var B="";e.ajax({url:o+"/rest/request-access/latest/page/restriction/"+i+"/grant/"+k,type:"POST",contentType:"application/json; charset=utf-8",data:s,success:function(E,F,D){if(D.status==202){B="Access was already granted to the user."}else{B="Access was granted, a notification to the user will be sent."}a.flag({type:"success",title:"Access request granted",body:B})},error:function(D){if(D.status==412){B="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(D.status==502){B="Access was granted, but an unexpected error happened while sending the notification."}else{B="Sorry, there was an unexpected error while granting access."}}a.flag({type:"error",title:"Access request error",body:B})},complete:function(D){t.hide()}})});y.on("click",".aui-button.deny-access",function(A){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{accessType:k}});t.hide()});z();return false},{offsetY:10,offsetX:-20,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(t.hide(),5000)}});t.show()}return{init:f,initWhenEditorReady:function(){a.bind("rte-collab-ready",f)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span id="request-access-loading" class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml('Loading, please wait') + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}


Confluence.Request.Access.dialog = function(opt_data, opt_ignored) {
  return '<div class="request-access-dialog"><h2 class="grant-access-title">' + soy.$$escapeHtml('You don\x27t have permission to edit') + '</h2>' + ((opt_data.canRequestAccess) ? '<p class="grant-access-message">' + soy.$$escapeHtml('Hit request access and we\x27ll find someone who can give you access.') + '</p><div class="actions-result"><button id="request-access-dialog-button" class="aui-button">' + soy.$$escapeHtml('Request access') + '</button><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Cancel') + '</button><div>' : '<p class="grant-access-message">' + soy.$$escapeHtml('A space admin or the person who shared this page may be able to give you access.') + '</p><div class="actions-result"><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Close') + '</button><div>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.dialog.soyTemplateName = 'Confluence.Request.Access.dialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  var requestAccessDescription__soy8 = '' + ((opt_data.requestAccessType == 'edit') ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this page.',usernameLink__soy4)) : (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this page.',usernameLink__soy4)));
  output += '<h2 class="title grant-access-title">' + soy.$$escapeHtml('Access request') + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(requestAccessDescription__soy8) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml('Grant access') + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml('Deny') + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/wiki") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};