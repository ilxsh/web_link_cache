WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:spa-navigation', location = 'js/marshallers/spa-navigation-marshaller.js' */
define("confluence-browser-metrics/marshallers/spa-navigation-marshaller",["confluence-browser-metrics/util/is-string"],function(a){return function(b){if(a(b.transitionTo)){return{transitionTo:b.transitionTo}}}});
}catch(e){WRMCB(e)};