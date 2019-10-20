WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/reporters/bigpipe-reporter.js' */
define("confluence-browser-metrics/reporters/bigpipe-reporter",["jquery"],function(c){var a=c.Deferred();c(function(){if(typeof AJS.BigPipe!=="undefined"&&AJS.BigPipe.metrics){a.resolve(AJS.BigPipe.metrics)}else{a.resolve({})}});var b=function(d){if(d.isInitial){return a.promise()}else{return{}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/marshallers/bigpipe-marshaller.js' */
define("confluence-browser-metrics/marshallers/bigpipe-marshaller",["confluence-browser-metrics/util/is-boolean"],function(c){function a(d){return c(d.isBigPipeEnabled)}var b=function(d){if(a(d)){return{isBigPipeEnabled:""+d.isBigPipeEnabled}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:bigpipe-reporter', location = '/js/marshallers/page-end-marshaller.js' */
define("confluence-browser-metrics/marshallers/page-end-marshaller",["confluence-browser-metrics/util/is-number"],function(c){function b(d){return c(d.pageEnd)}var a=function(d){if(b(d)){return{pageEnd:""+Math.floor(d.pageEnd)}}};return a});
}catch(e){WRMCB(e)};