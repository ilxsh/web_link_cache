WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/reporters/spa-transitions-reporter.js' */
define("confluence-browser-metrics/reporters/spa-transitions-reporter",["jquery","ajs","confluence/storage-manager"],function(c,i,l){var d=c.Deferred();var m="page-page";var k="dashboard-page";var a=l("confluence","spa-transition");i.toInit(function(){c(document).on("click","a",g);var o=null;if(a.doesContain(m)){o=m}else{if(a.doesContain(k)){o=k}}if(o){d.resolve({"confluence-spa-transition":o});a.removeItem(o)}else{d.resolve({})}});function g(p){var o=c(this).attr("href");if(o&&e(p)&&b(o)){a.setItemQuietly(h()?k:m,true,300)}return true}function e(o){return o.which===1&&!o.metaKey&&!o.ctrlKey&&!o.shiftKey}function b(o){return(o.indexOf("/display/")!==-1||j(o)||o.indexOf("/viewpage.action")!==-1)&&(o.indexOf("~")===-1||n(o))}function n(o){return(o.indexOf("/",o.indexOf("~")+1)!==-1)&&o.slice(-1)!=="/"}function j(o){return/spaces\/(.*)\/pages\/(.*)/.test(o)}function h(){return c("body").hasClass("dashboard")}var f=function(o){if(o.isInitial){return d.promise()}else{return{}}};return f});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-transitions', location = '/js/marshallers/spa-transitions-marshaller.js' */
define("confluence-browser-metrics/marshallers/spa-transitions-marshaller",["confluence-browser-metrics/util/is-string"],function(a){function c(d){return a(d["confluence-spa-transition"])}var b=function(d){if(c(d)){return{"confluence-spa-transition":d["confluence-spa-transition"]}}};return b});
}catch(e){WRMCB(e)};