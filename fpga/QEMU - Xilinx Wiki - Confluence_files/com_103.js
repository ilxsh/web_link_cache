WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","confluence/dark-features","vfm/view-file-macro-utils"],function(c,h,g,i,k,j){function b(w){var v=c(w.el);var u=v.find(".confluence-embedded-image, .confluence-embedded-file");if(u.hasClass("unknown-attachment")||(u.attr("src")&&u.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var l={mimeType:"",niceType:"",containerId:"",fileSrc:"",attachmentId:"",fileName:""};var o=false;if(u.attr("data-linked-resource-type")==="attachment"){o=true;l.containerId=u.attr("data-linked-resource-container-id");l.fileSrc=u.attr("data-file-src");l.attachmentId=u.attr("data-linked-resource-id");l.fileName=u.attr("data-linked-resource-default-alias")}var m=u.hasClass("confluence-embedded-image");var r=v.parent().is("a");var p=u.attr("data-has-thumbnail")==="true";if(m){l.mimeType="image/png"}else{l.mimeType=u.attr("data-mime-type");l.niceType=u.attr("data-nice-type")!=="null"?u.attr("data-nice-type"):"generic file"}var s=!r?d(u):"";var n=(!m&&p)?a(l):"";var t=o&&n&&k.isEnabled("mediaviewer.companion")&&k.isEnabled("edit.in.app.discovery")?f(l):"";if(!s&&!n){return this}var q=c(i.ViewFileMacro.Templates.overlayEmbeddedFile());q.append(s).append(n).append(t);if(n){v.addClass("has-comment-overlay")}v.append(q)}var e=function(l){l=parseInt(l,10);l=c.isNumeric(l)?l:0;return l>9?"9+":l+""};var d=function(q){var l="",m=q.attr("data-linked-resource-container-id"),o=q.attr("data-linked-resource-id");if(m&&o){var p=q.attr("data-unresolved-comment-count");var n=e(p);if(n!=="0"){l=i.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:n})}}return l};var a=function(l){return i.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:j.getFileTypeTextFromNiceType(l.niceType),iconClass:g.Confluence.FileTypesUtils.getAUIIconFromMime(l.mimeType)})};var f=function(l){return i.ViewFileMacro.Templates.overlayEditFileInApp({containerId:l.containerId,fileSrc:l.fileSrc,attachmentId:l.attachmentId,fileName:l.fileName})};return{render:b}});
}catch(e){WRMCB(e)};