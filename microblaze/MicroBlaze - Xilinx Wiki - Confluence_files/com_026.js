WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-module-loader-v5', location = 'v5/js/confluence/module-loader.js' */
connectHost.defineModule("confluence",require("ac/confluence"));connectHost.defineModule("custom-content",require("ac/customContent"));connectHost.defineModule("customContent",require("ac/customContent"));
}catch(e){WRMCB(e)};