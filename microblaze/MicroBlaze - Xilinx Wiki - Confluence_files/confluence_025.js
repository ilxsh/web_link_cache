WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.web.resources:page-permissions-deferred-loader', location = 'includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader",["confluence/dark-features","ajs","confluence/page-loading-indicator","jquery","wrm"],function(b,d,a,e,c){var f=a(e("body"));return function(a){var b=c.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){d.trigger("deferred.page.permissions")});f.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(b){var d=require("ajs"),a=require("skate");a("action-page-permissions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});a("rte-button-restrictions",{type:a.types.CLASS,events:{click:function(a,c){b(c)}}});d.bind("system-content-metadata.open-restrictions-dialog",b)});
}catch(e){WRMCB(e)};