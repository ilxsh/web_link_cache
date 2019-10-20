WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-spa-context-v5', location = 'v5/js/spa-context/main.js' */
define("ac/spa-context",function(){var a=null;return{provideContainerApi:function(b){a=b},isInIframe:function(){return null!==a},getContainerApi:function(){return a}}});
}catch(e){WRMCB(e)};