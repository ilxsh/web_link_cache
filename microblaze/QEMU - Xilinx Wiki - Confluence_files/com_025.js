WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml('No matches') + '" placeholder="' + soy.$$escapeHtml('Users name, group name, or email') + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml('Add an optional note') + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml('Share') + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml('Cancel') + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
define("confluence-share-button",["ajs","jquery","skate","confluence-share-page-plugin/js/autocomplete","confluence-share-page-plugin/js/jquery-elastic","confluence/legacy"],function(i,f,g,h,l,j){var d=function(p,n,o){if(p.find("input").length){o();return}p.append(j.Templates.Share.Dialog.shareContentPopup());j.SharePage.autocompleteUser();var q=function(s){j.SharePage.current.hide();if(s){setTimeout(function(){p.empty()},300)}return false};f(document).keyup(function(s){if(s.keyCode==27){q(true);f(document).unbind("keyup",arguments.callee);return false}return true});p.find(".close-dialog").click(function(){q(true)});p.find("#note").elastic();p.find("form").submit(function(){var x=[];p.find(".recipients li").each(function(y,z){x.push(f(z).attr("data-userKey"))});if(x.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");p.find(".progress-messages-icon").removeClass("error");p.find(".progress-messages").text("Sending");p.find(".progress-messages").attr("title","Sending");var u=Raphael.spinner(p.find(".progress-messages-icon")[0],7,"#666");p.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");p.find(".progress-messages").css("padding-left",p.find(".progress-messages-icon").innerWidth()+20);var x=[];p.find(".recipients li[data-userKey]").each(function(y,z){x.push(f(z).attr("data-userKey"))});var w=[];p.find(".recipients li[data-email]").each(function(y,z){w.push(f(z).attr("data-email"))});var s=[];p.find(".recipients li[data-group]").each(function(y,z){s.push(f(z).attr("data-group"))});var t=p.find("#note");var v={users:x,emails:w,groups:s,note:t.hasClass("placeholded")?"":t.val(),entityId:i.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:j.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(v),dataType:"text",success:function(){setTimeout(function(){u();p.find(".progress-messages-icon").addClass("done");p.find(".progress-messages").text("Sent");p.find(".progress-messages").attr("title","Sent");setTimeout(function(){p.find(".progress-messages").text("");p.find(".progress-messages-icon").removeClass("done");p.find("#note").val("");f("button,input,textarea",p).removeAttr("disabled");q(false)},1000)},500)},error:function(z,y){u();p.find(".progress-messages-icon").addClass("error");p.find(".progress-messages").text("Error sending");p.find(".progress-messages").attr("title","Error sending"+": "+y);f("button,input,textarea",p).removeAttr("disabled")}});return false});var r=p.find("#users");var m=p.find("input.submit");r.bind("selected.autocomplete-sharepage",function(t,s){var u=function(x,w,y){var A=p.find(".recipients"),z,v;z="li[data-"+x+'="'+y.content[x]+'"]';if(A.find(z).length>0){A.find(z).hide()}else{A.append(w(y.content))}v=A.find(z);v.find(".remove-recipient").click(function(){v.remove();if(A.find("li").length==0){m.attr("disabled","true")}j.SharePage.current.refresh();r.focus();return false});v.fadeIn(200)};if(s.content.email){u("email",j.Templates.Share.Dialog.recipientEmail,s)}else{if(s.content.type=="group"){u("group",j.Templates.Share.Dialog.recipientGroup,s)}else{u("userKey",j.Templates.Share.Dialog.recipientUser,s)}}j.SharePage.current.refresh();m.removeAttr("disabled");r.val("");r.focus();return false});r.bind("open.autocomplete-sharepage",function(t,s){if(f("a:not(.no-results)",i.dropDown.current.links).length>0){i.dropDown.current.moveDown()}});r.keypress(function(s){return s.keyCode!=13});f(document).bind("showLayer",function(u,t,s){if(t=="inlineDialog"&&s.popup==j.SharePage.current){s.popup.find("#users").focus()}});f(n).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);o()};var a=function(m){j.SharePage.initDialog(f("#shareContentLink"),"shareContentPopup")};var b={width:250};var e=function(m){j.SharePage={};j.SharePage.autocompleteUser=h.autocomplete;j.SharePage.initDialog=function(n,o){j.SharePage.current=i.InlineDialog(n,o,d,b)}};var c=function(m){};var k=function(){g("webitem-share-button",{type:g.types.CLASS,events:{},attached:a,detached:c,created:e})};return{attached:a,detached:c,init:k}});require("confluence/module-exporter").safeRequire("confluence-share-button",function(a){a.init()});
}catch(e){WRMCB(e)};