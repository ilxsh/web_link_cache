WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:editor', location = '/js/editor.js' */
require(["internal/browser-metrics","jquery"],function(b,c){function a(){var h=AJS.Meta.get("content-type");var g=AJS.Meta.getBoolean("new-page")?"create":"edit";var f=c("body");var d=f.hasClass("edit")||f.hasClass("create");if(d&&h&&g){var e="confluence."+h+"."+g+".collaborative.view";b.start({key:e,isInitial:true});AJS.bind("rte-collab-ready",function(){b.end({key:e});b.start({key:e+".connected"})});AJS.bind("synchrony.connected",function(){b.end({key:e+".connected"})})}}c(a)});
}catch(e){WRMCB(e)};