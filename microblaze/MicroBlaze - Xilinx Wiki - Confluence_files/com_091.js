WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:defer-js', location = '/js/reporters/defer-js-reporter.js' */
define("confluence-browser-metrics/reporters/defer-js-reporter",["confluence/dark-features","jquery"],function(a,c){return function b(d){if(d.isInitial&&a.isEnabled("defer.js.enable")&&c("#doctheme-anchor").length===0){return{deferJs:true}}else{return{}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:defer-js', location = '/js/marshallers/defer-js-marshaller.js' */
define("confluence-browser-metrics/marshallers/defer-js-marshaller",["confluence-browser-metrics/util/is-boolean"],function(c){function b(d){return c(d.deferJs)}var a=function(d){if(b(d)){return{deferJs:""+d.deferJs}}};return a});
}catch(e){WRMCB(e)};