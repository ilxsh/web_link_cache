WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = '/js/amd/plupload-amd.js' */
define("plupload",function(){return plupload});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = '/js/service/upload-service.js' */
define("cp/service/upload-service",["ajs","jquery","plupload","cp/service/files-service"],function(i,e,g,a){var b="application/x-upload-data";var c=i.contextPath();var f=i.Meta.get("drag-and-drop-entity-id"),j=i.Meta.get("atl-token"),h=i.Meta.get("global-settings-attachment-max-size");function d(k){this.previewingAttachment=k;this.filesService=new a(k.get("ownerId"))}d.prototype.getMetaMaxSize=function(){return h};d.prototype.getUploadUrl=function(){return c+"/plugins/drag-and-drop/upload.action"};d.prototype.buildUploadParams=function(k){var l={},m=k.name.split(".").pop();l.pageId=this.previewingAttachment.get("ownerId");l.filename=this.previewingAttachment.get("title");l.size=k.size;if(f){l.dragAndDropEntityId=f}l.mimeType=g.mimeTypes[m.toLowerCase()]||b;l.atl_token=j;l.withEditorPlaceholder=false;return l};d.prototype.parseResponse=function(k){return e.parseJSON(k).data};d.prototype.handleError=function(m){var n="";if(m.response){try{var l=e.parseJSON(m.response);n=l.actionErrors[0]}catch(o){n=m.message}}else{n=m.message;if(m.code===g.FILE_SIZE_ERROR){var p=m.file.name;var k=i.DragAndDropUtils.niceSize(h).toString();n=i.format("{0} is too big to upload. Files must be less than {1}.",p,k)}else{if(m.code===g.FILE_EXTENSION_ERROR){n="You can only upload a file of the same type"}}}return n};d.prototype.promiseFileModel=function(l){var k=(this.previewingAttachment.getLatestVersion?this.previewingAttachment.getLatestVersion():this.previewingAttachment).get("id");return this.filesService.getFileWithId(k)};d.prototype.addVersionChangeComment=function(q,o,k,m){var p=o.get("id");var l=c+"/rest/api/content/"+o.get("ownerId")+"/child/attachment/"+p;var n={id:p,version:{number:o.get("version")+1},metadata:{comment:q}};e.ajax({url:l,type:"PUT",data:JSON.stringify(n),dataType:"json",contentType:"application/json; charset=utf-8"}).done(k).fail(function(r){m(JSON.parse(r.responseText).message)})};return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = 'js/component/upload/upload-button-view.js' */
define("cp/component/upload/upload-button-view",["jquery","backbone","MediaViewer","ajs","cp/component/upload/upload-utils","core/template-store-singleton"],function(f,g,e,b,a,d){var c=g.View.extend({tagName:"span",events:{click:"_onClick"},initialize:function(i){this._mediaViewer=i.mediaViewer;var h=this._mediaViewer.getView().fileControlsView;this.listenTo(h,"renderLayers",this._initUploader)},render:function(){var h=this._mediaViewer.getCurrentFile();if(!h){return this}if(h.get("hasUploadAttachmentVersionPermission")){this.$el.html(d.get("controlUploadButton")());if(f.fn.tooltip){this.$("a").tooltip({gravity:"n"})}}else{this.stopListening().listenTo(h,"change:hasUploadAttachmentVersionPermission",this._onUploadNewVersionPermissionChanged)}return this},teardown:function(){this.stopListening();this._killExistingUploader()},_onClick:function(){b.trigger("analyticsEvent",{name:"confluence-spaces.previews.upload.click"})},_onUploadNewVersionPermissionChanged:function(h){if(h.get("hasUploadAttachmentVersionPermission")){this.render();this._initUploader()}},_initUploader:function(){var h=this._mediaViewer.getCurrentFile();if(h&&h.get("hasUploadAttachmentVersionPermission")){this._killExistingUploader();this.uploader=a.createUploader(this._mediaViewer,this.$("#cp-control-panel-upload")[0])}},_killExistingUploader:function(){if(this.uploader){this.uploader.off().destroy();this.uploader=null}}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = 'js/component/upload/attachment-uploader.js' */
define("cp/component/upload/attachment-uploader",["jquery","plupload","ajs"],function(e,c,b){var a=function(){this._workIdToBytesUploaded={};this._totalBytes=0};a.prototype={update:function(h,g,f){if(!(h in this._workIdToBytesUploaded)){this._totalBytes+=f}this._workIdToBytesUploaded[h]=g},percentComplete:function(){var f=0;e.each(this._workIdToBytesUploaded,function(g,h){f+=h});return Math.round(f*100/this._totalBytes)}};var d=function(h,q,l,n){var i=Backbone.Model.extend({initialize:function(){e(window).on("resize.attachmentUploader",function(){if(p){p.refresh()}})},cancelUpload:function(){g&&p&&p.removeFile(g);g=null},destroy:function(){e(window).off("resize.attachmentUploader");if(p){p.destroy()}}});var g=null,j=null,m=new i();function k(){var s=new c.Uploader({runtimes:"html5",dragdrop:false,browse_button:h.id,multipart:false,stop_propagation:true,max_file_size:parseInt(n.getMetaMaxSize(),10),inputFileClazz:"file-preview-input-file",filters:l?f(l.get("title")):null,multi_selection:false,container:null});var r=new o();s.init();s.bind("Started",r.handleStarted);s.bind("FilesAdded",r.handleFilesAdded);s.bind("BeforeUpload",r.handleBeforeUpload);s.bind("UploadProgress",r.handleUploadProgress);s.bind("FileUploaded",r.handleFileUploaded);s.bind("Error",r.handleError);s.bind("UploadComplete",r.handleUploadComplete);return s}function f(r){var u=[];var t=(r.indexOf(".")!==-1)?r.split(".").pop():null;if(t){var v=c.mimeTypes[t.toLowerCase()];var s=(v)?c.mineTypeToExtensionsMap[v]:[t];u.push({title:"filter",extensions:s.join(",")})}return u}function o(){}o.prototype.handleStarted=function(){m.trigger("cp.uploader.uploadStarted")};o.prototype.handleFilesAdded=function(r,s){m.trigger("cp.uploader.filesAdded",s[0]);r.start()};o.prototype.handleBeforeUpload=function(r,t){j=new a();g=t;var s=n.getUploadUrl(),u=n.buildUploadParams(t);r.settings.url=c.buildUrl(s,u)};o.prototype.handleUploadProgress=function(r,s){j.update(s.id,s.loaded,s.size);var t=j.percentComplete()/100;m.trigger("cp.uploader.uploadProgress",t)};o.prototype.handleFileUploaded=function(s,t,r){if(s.getFile(t.id)){m.trigger("cp.uploader.fileUploaded",t,r)}};o.prototype.handleError=function(r,s){m.trigger("cp.uploader.error",n.handleError(s));g=null};o.prototype.handleUploadComplete=function(r,s){j=null;g=null};var p=k();return m};return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = '/js/component/upload/upload-new-version-dialog-view.js' */
define("cp/component/upload/upload-new-version-dialog-view",["jquery","backbone","underscore","ajs","MediaViewer","core/template-store-singleton"],function(c,g,h,f,b,i){var d=b.require("core/file");var a=1;var e=g.View.extend({id:"upload-new-version-dialog",tagName:"section",className:"aui-layer aui-dialog2 aui-dialog2-small",events:{"click .close-button":"_closeDialog","click .cancel-button":"_cancelDialog"},initialize:function(j){this._mediaViewer=j.mediaViewer;this.uploader=j.uploader;if(this.uploader){this.listenTo(this.uploader,"cp.uploader.filesAdded",this._handleFileAdded);this.listenTo(this.uploader,"cp.uploader.uploadProgress",this._handleUploadProgress);this.listenTo(this.uploader,"cp.uploader.fileUploaded",this._handleFileUploaded);this.listenTo(this.uploader,"cp.uploader.error",this._handleError)}this.uploadService=j.uploadService;this.$el.attr({role:"dialog","aria-hidden":"true","data-aui-remove-on-hide":"true","data-aui-modal":"true","data-fv-allow-focus":"true"})},render:function(){this.$el.html(i.get("dialogUploadNewVersion")());this._updateElements();this.bodyInlineCSSOverflowValue=c("body")[0].style.overflow;this.dialog=f.dialog2(this.$el).show();this._mediaViewer.getView().lockNavigationKeys();return this},isVisible:function(){return this.$el.is(":visible")},_updateElements:function(){this.$header=this.$(".aui-dialog2-header-main");this.$progressBar=this.$(".aui-progress-indicator");this.$cancelButton=this.$(".cancel-button");this.$closeButton=this.$(".close-button");this.$fileNameDiv=this.$(".file-name");this.$fileNameText=this.$(".file-name-text");this.$icon=this.$(".aui-icon");this.$msg=this.$("#upload-new-version-error-msg");this.$comment=this.$("#version-comment");this.$spinner=this.$(".spinner")},_toggleCancelButton:function(j){this.$cancelButton.toggleClass("hidden",!j);this.$closeButton.toggleClass("hidden",j)},_toggleEnableButton:function(k,j){k.attr("aria-disabled",!j);k.prop("disabled",!j)},_closeDialog:function(){var j=this.$comment.val();if(j){if(j.length<=255){this._toggleEnableButton(this.$closeButton,false);this.$spinner.spin();this.uploadService.addVersionChangeComment(this.$comment.val(),this._mediaViewer.getCurrentFile(),h.bind(this._kill,this),h.bind(this._handleError,this));f.trigger("analyticsEvent",{name:"confluence-spaces.previews.upload.submit-comment"})}else{var k="The comment is longer than 255 characters.";this._handleLongCommentError(k)}}else{this._kill()}},_cancelDialog:function(){this.uploader.cancelUpload();this._kill();f.trigger("analyticsEvent",{name:"confluence-spaces.previews.upload.cancel"})},_kill:function(){if(this.uploader){this.stopListening(this.uploader)}this.dialog.hide();c("body")[0].style.overflow=this.bodyInlineCSSOverflowValue;this._mediaViewer.getView().unlockNavigationKeys()},_handleFileAdded:function(k){this.$fileNameText.text(k.name);this._showIcon(k);f.progressBars&&f.progressBars.setIndeterminate(this.$progressBar);var j=this._mediaViewer.getCurrentFile();var l=j?j.get("title"):"";f.trigger("analyticsEvent",{name:"confluence-spaces.previews.upload.start",data:{uploadSameName:l===k.name},isProject:!!(f.Meta.get("space-type")==="project"&&c('[data-internal-id="tab-files"]').length)})},_handleUploadProgress:function(j){if(!j){return}if(j===a){this._toggleEnableButton(this.$cancelButton,false)}f.progressBars&&f.progressBars.update(this.$progressBar,j)},_handleFileUploaded:function(k,j){this.uploadService.promiseFileModel(j).done(h.bind(function(l){this._toggleCancelButton(false);this.$header.text("Your upload is complete");this._mediaViewer._fileState.replaceCurrent(new d(l));this._mediaViewer.showFile(this._mediaViewer._fileState.getCurrent());this._mediaViewer._fileState.set("isNewFileUploaded",true)},this))},_handleError:function(j){this.$msg.empty();f.messages.warning("#upload-new-version-error-msg",{body:i.get("uploadErrorMessage")({message:j}),closeable:false});this.$msg.removeClass("hidden");this.$fileNameDiv.hide();this.$progressBar.hide();this.$comment.val("");this.$comment.hide();this._toggleCancelButton(false);this._toggleEnableButton(this.$closeButton,true);this.$spinner.spinStop();this.$header.text("Your upload has failed");f.trigger("analyticsEvent",{name:"confluence-spaces.previews.upload.failed"})},_handleLongCommentError:function(j){this.$msg.empty();f.messages.warning("#upload-new-version-error-msg",{body:i.get("uploadErrorMessage")({message:j}),closeable:true});this.$msg.removeClass("hidden")},_showIcon:function(k){var l=k.nativeFile&&k.nativeFile.type;var j=f.Confluence.FileTypesUtils.getAUIIconFromMime(l);this.$icon.addClass(j)}});return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = 'js/component/upload/upload-utils.js' */
define("cp/component/upload/upload-utils",["underscore","backbone","cp/component/upload/upload-new-version-dialog-view","cp/component/upload/attachment-uploader","cp/service/upload-service"],function(b,f,d,c,a){var e=function(h,g){var j=new a(h.getCurrentFile());var i=new c(g,g,h.getCurrentFile(),j);i.on("cp.uploader.uploadStarted",function(){this.uploadNewVersionDialog=new d({uploader:i,uploadService:j,mediaViewer:h});this.uploadNewVersionDialog.render()});return i};return{createUploader:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = '/templates/upload.soy' */
// This file was automatically generated from upload.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FileViewer.Templates.
 */

if (typeof FileViewer == 'undefined') { var FileViewer = {}; }
if (typeof FileViewer.Templates == 'undefined') { FileViewer.Templates = {}; }


FileViewer.Templates.controlUploadButton = function(opt_data, opt_ignored) {
  return '<a id="cp-control-panel-upload" href="#" title="' + soy.$$escapeHtml('Upload a new version') + '" class="cp-icon"></a>';
};
if (goog.DEBUG) {
  FileViewer.Templates.controlUploadButton.soyTemplateName = 'FileViewer.Templates.controlUploadButton';
}


FileViewer.Templates.dialogUploadNewVersion = function(opt_data, opt_ignored) {
  return '<header class="aui-dialog2-header upload-new-version-dialog-header"><h1 class="aui-dialog2-header-main">' + soy.$$escapeHtml('Uploading a new version') + '</h1></header><!-- Main dialog content --><div class="aui-dialog2-content"><div class="file-name"><span class="aui-icon aui-icon-small">File</span><p class="file-name-text"></p></div><div class="aui-progress-indicator"><span class="aui-progress-indicator-value"></span></div><div id="upload-new-version-error-msg" class="hidden"></div><form action="#" class="aui"><textarea class="textarea" name="comment" id="version-comment" placeholder="' + soy.$$escapeHtml('What did you change?') + '"></textarea></form><div class="dialog-actions"><span class="spinner"></span><button class="aui-button close-button hidden">' + soy.$$escapeHtml('Done') + '</button><button class="aui-button cancel-button">' + soy.$$escapeHtml('Cancel') + '</button></div></div>';
};
if (goog.DEBUG) {
  FileViewer.Templates.dialogUploadNewVersion.soyTemplateName = 'FileViewer.Templates.dialogUploadNewVersion';
}


FileViewer.Templates.uploadErrorMessage = function(opt_data, opt_ignored) {
  return '<!-- upload error message --><p class="error-msg">' + soy.$$escapeHtml(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  FileViewer.Templates.uploadErrorMessage.soyTemplateName = 'FileViewer.Templates.uploadErrorMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:upload-plugin', location = 'js/component/upload/upload-plugin.js' */
define("cp/component/upload/upload-plugin",["underscore","MediaViewer","cp/component/upload/upload-button-view"],function(b,c,a){var d=function(f){var e=f.getView().fileControlsView;var h=function(){f._fileState.get("isNewFileUploaded")&&document.location.reload(true)};var g=function(){var i=f.getCurrentFile();return !$("#insert-image-dialog").is(":visible")&&!i.get("isRemoteLink")};f.close=b.wrap(f.close,function(i){i.apply(f,Array.prototype.slice.call(arguments,1));h()});e.addLayerView("uploadButton",a,{predicate:g,weight:40})};return d});(function(){var b=require("cp/component/upload/upload-plugin");var a=require("MediaViewer");a.registerPlugin("upload",b)})();
}catch(e){WRMCB(e)};