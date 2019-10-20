WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/reporters/server-duration-reporter.js' */
define("confluence-browser-metrics/reporters/server-duration-reporter",["internal/browser-metrics","jquery"],function(c,d){var b=d.Deferred();d(function(){var e=JSON.parse(d("#confluence-server-performance").html());if(e!==null&&e.serverDuration){b.resolve(e)}else{b.resolve({})}});var a=function(e){if(e.isInitial){return b.promise()}else{return{}}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/marshallers/server-duration-marshaller.js' */
define("confluence-browser-metrics/marshallers/server-duration-marshaller",["confluence-browser-metrics/util/is-number"],function(b){function c(d){return b(d.serverDuration)}var a=function(d){if(c(d)){return{serverDuration:""+Math.floor(d.serverDuration)}}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:server-duration', location = '/js/marshallers/request-correlation-id-marshaller.js' */
define("confluence-browser-metrics/marshallers/request-correlation-id-marshaller",["confluence-browser-metrics/util/is-string"],function(a){function b(d){return a(d.requestCorrelationId)}var c=function(d){if(b(d)){return{requestCorrelationId:d.requestCorrelationId}}};return c});
}catch(e){WRMCB(e)};