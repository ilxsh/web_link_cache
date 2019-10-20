WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-quit-dialog', location = 'editor/page-editor-quit-dialog.js' */
define("confluence-editor/editor/page-editor-quit-dialog","jquery confluence/templates ajs confluence/meta window document confluence-editor/editor/page-editor-message confluence/api/constants underscore confluence/legacy-editor-global-AVOID-IF-POSSIBLE".split(" "),function(c,s,d,e,i,N,l,m,B,f){function C(a){a.stopPropagation();a.preventDefault();d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.show-diff-clicked"});b.showDiffButton.hide();w(false);b.hideDiffButton.show()}
function D(a){a.stopPropagation();a.preventDefault();d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.hide-diff-clicked"});b.hideDiffButton.hide();b.closeButton.show();b.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium");n(j)}function E(a){d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard"});a.stopPropagation();a.preventDefault();f.UI.setButtonsState(false,b.buttonsAll);var o=e.get("content-id"),a=d.contextPath(),a=g?
a+"/rest/synchrony/1.0/content/"+o+"/changes/unpublished":a+"/rest/api/content/"+o+"?status=draft";if(g){l.suppressMessage("editor.synchrony.revert-page");c(i).trigger("revert.tinymce",{pageVersion:d.params.pageVersion||"null"})}else c(i).trigger("delete.tinymce");c.ajax({url:a,type:"DELETE",data:{draftId:o},contentType:"application/json",dataType:"json"}).done(function(){g&&l.handleMessage("collaborative-editor-discard-error",{type:"success",close:"auto",message:"Successfully reverted to the last published version"});
d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-success",data:{contentId:o}});x()}).fail(function(a){var c=JSON.parse(a.responseText),e="There were errors discarding your draft.",a=a.errors||"An unknown error has occurred. Please check your logs.";if(c.data&&c.data.errors&&c.data.errors[0]&&c.data.errors[0].message.key==="content.delete.published"){e="This page has already been published";a="You can no longer discard this draft because its not a draft anymore!"}l.handleMessage("collaborative-editor-discard-error",
{type:"error",title:g?"Can\'t revert to last published version":e,message:g?"We can\'t get the last published version of the page at the moment. Give it a few moments then try discarding the draft again.":a});d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.discard-error",data:{contentId:o}});b.dialog.hide();f.UI.setButtonsState(true,b.buttonsAll)})}function x(){b.editorForm.append(s.Editor.Page.hiddenInputCancel()).submit()}function y(a){if(a){a.stopPropagation();a.preventDefault()}x()}function F(a){f.UI.setButtonsState(false,
b.buttonsAll);t.save(a).done(function(){q.resolve()})}function G(a){a.stopPropagation();a.preventDefault();j=null;d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.draft-status-indicator.click"});b.closeButton.show();w(true)}function H(a){a.stopPropagation();a.preventDefault();b.closeButton.show();e.get("new-page")?n(h.DELETE):n(h.REVERT)}function I(a){a.stopPropagation();a.preventDefault();f.Drafts.isDraftDirty()?r(z):z()}function z(){var a=e.get("content-id"),b=e.get("space-key"),d=
m.CONTEXT_PATH+"/spaces/"+b+"/pages/edit-v2/"+a;c.ajax({url:m.CONTEXT_PATH+"/rest/api/content/"+a+"?status=draft&expand=body.atlas_doc_format,metadata.properties.editor",type:"GET"}).success(function(b){b.body.atlas_doc_format.value.includes('"extensionKey":"__confluenceADFMigrationUnsupportedContentInternalExtension__"')?l.handleMessage("collaborative-editor-discard-error",{type:"error",title:"Your page is not migratable to Fabric Editor!",message:"Your page contains content, that is not migratable to Fabric Editor."}):
b.metadata.properties.editor?c.ajax({url:m.CONTEXT_PATH+"/rest/api/content/"+a+"/property/editor",type:"PUT",data:JSON.stringify({key:"editor",value:"v2",version:{number:b.metadata.properties.editor.version.number+1,minorEdit:false}}),contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(){i.location.href=d}).fail(function(){u()}):c.ajax({url:m.CONTEXT_PATH+"/rest/api/content/"+a+"/property",type:"POST",data:JSON.stringify({key:"editor",value:"v2",version:{number:1,minorEdit:false}}),
contentType:"application/json; charset=utf-8",dataType:"json"}).success(function(){i.location.href=d}).fail(function(){u()})}).fail(function(){u()})}function u(){l.handleMessage("collaborative-editor-discard-error",{type:"error",title:"Something went wrong migrating page to Fabric Editor!",message:"Please reload your editor and try again."})}function J(a){a.stopPropagation();a.preventDefault();b.dialog.hide()}function w(a){function d(){c.ajax({url:m.CONTEXT_PATH+"/rest/tinymce/1/content/"+e.get("page-id")+
"/draft/diff",type:"GET"}).success(function(a){c(".diff-spinner").hide();b.dialogContent.find(".wiki-content").html(a).children().first().hasClass("diff-context-placeholder")&&b.dialogContent.find("hr").hide()})}b.dialogEl.removeClass("aui-dialog2-medium").addClass("aui-dialog2-xlarge");n(h.SHOW_DIFF);c(".diff-spinner").show();a?r(d):d()}function n(a){function d(){return a===h.SHOW_DIFF&&(j===h.REVERT||j===h.DELETE)}function f(g){b.dialogHeader.html(s.Editor.Page.quitDialogHeader({dialogType:i,contentType:e.get("content-type"),
newPage:e.get("new-page")}));b.dialogContent.html(s.Editor.Page.quitDialogContent({dialogType:a,contributors:g,contentType:e.get("content-type"),newDialog:j==null}));b.hideDiffButton=c("#qed-hide-diff-button").click(D);if(!e.get("new-page")){a!==h.SHOW_DIFF&&(j=a);b.showDiffButton=c("#qed-show-diff-button").click(C);b.showDiffButton.show();b.buttonsAll.push(b.showDiffButton)}if(a===h.DELETE||a===h.REVERT||d()){b.discardButton.show();b.dialogEl.addClass("aui-dialog2-warning")}else b.dialogEl.removeClass("aui-dialog2-warning");
b.closeButton.show();b.dialogFooter.find("."+a).show();b.dialog.show()}var g=k.requireSynchronyPresence();p=p.map(function(a){if(g)a.active=g.isUserActive(a.accountId);return a}).sort(function(a,b){return a.active&&!b.active?false:!a.active&&b.active?true:a.lastModification<b.lastModification});var i=a;d()&&(i=j);require([K],function(a){a(p).then(f)})}function L(){d.trigger("analyticsEvent",{name:"confluence.synchrony.editor.quit-dialog.dialog-closed"});b.dialogEl.removeClass("aui-dialog2-xlarge").addClass("aui-dialog2-medium");
f.UI.toggleSavebarBusy(false);b.dialogFooter.find(".aui-button").hide();b.dialogContent.empty()}function M(a,b){b&&b.contributors&&(p=B.reject(b.contributors,function(a){return a.accountId===e.get("atlassian-account-id")||a.name===e.get("remote-user")}))}function r(a){f.Drafts.save({forceSave:g,skipErrorHandler:true,onSuccessHandler:a||c.noop})}var k={},b={},g,A,h={DELETE:"delete",REVERT:"revert",PUBLISH:"publish",UPDATE:"update",SHOW_DIFF:"diff"},p=[],v=false,t={},j,q,K="confluence-collaborative-editor-plugin/cql-user-information";
k.init=function(a){if(A=e.get("content-type")==="page"||e.get("content-type")==="blogpost")if(v){t.save=a.saveHandler;b.publishButton.click(F)}else{g=!e.get("new-page");b.discardButton=c("#qed-discard-button").tooltip({gravity:"s",className:"quit-editor-dialog"});b.discardButton.click(E);b.saveExitButton=c("#qed-save-exit-button").click(y);b.publishButton=c("#qed-publish-button");b.closeButton=c("#qed-close-button").click(J);b.buttonsAll=[b.discardButton,b.saveExitButton,b.hideDiffButton,b.publishButton];
b.dialog=d.dialog2("#quit-editor-dialog");b.dialogEl=b.dialog.$el;b.dialogHeader=b.dialogEl.find(".aui-dialog2-header");b.dialogContent=b.dialogEl.find(".aui-dialog2-content");b.dialogFooter=b.dialogEl.find(".aui-dialog2-footer");b.editorForm=c("#wysiwyg").closest("form");c("#rte-show-changes").on("click",G);c("#rte-show-revert").on("click",H);c("#rte-show-migrate").on("click",I);b.dialog.on("hide",L);d.bind("editor-heartbeat",M);v=true}};k.process=function(a){if(A){a.stopPropagation();a.preventDefault();
c(i).one("editor-heartbeat",function(){switch(a.target.id){case f.UI.saveButton.attr("id"):case f.UI.versionCommentInput.attr("id"):f.UI.toggleSavebarBusy(true);if(p.length===0)t.save().done(function(){q.resolve()});else{r();n(g?h.UPDATE:h.PUBLISH)}break;case f.UI.cancelButton.attr("id"):f.Drafts.isDraftDirty()&&r();y()}});f.heartbeat();q=c.Deferred();return q.promise()}var b=c.Deferred();b.fail();return b.promise()};k.requireSynchronyPresence=function(){return require("confluence-collaborative-editor-plugin/synchrony-presence")};
k._destroy=function(){v=false};return k});
}catch(e){WRMCB(e)};