WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:module-loader-v5', location = 'v5/js/iframe/host/module-loader.js' */
connectHost.defineModule("cookie",connectHostCookie);connectHost.defineModule("history",connectHostHistory);connectHost.defineModule(connectHostRequest.default);connectHost.defineModule("navigator",require("ac/navigator/module"));connectHost.defineModule("user",require("ac/user"));connectHost.defineModule("context",require("ac/context"));
}catch(e){WRMCB(e)};