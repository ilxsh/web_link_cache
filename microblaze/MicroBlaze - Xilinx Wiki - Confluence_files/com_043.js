WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-context-v5', location = 'v5/js/context/util.js' */
define("ac/context/util",function(){return{isValidExtensionOptionsForCache:function(a){var b=(!a.contextJwt||!connectHost.isJwtExpired(a.contextJwt,!0))&&!!a.structuredContext;if(b){var c=a.productContext&&0<Object.getOwnPropertyNames(a.productContext).length;a=0<Object.getOwnPropertyNames(a.structuredContext).length;c&&!a&&(b=!1)}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-context-v5', location = 'v5/js/context/main.js' */
define("ac/context",["ac/content-resolver","ac/context/util"],function(h,k){function d(a){if(a.id&&1<a.id.length)return a.id;throw Error("ACJS: cannot generate cache key for extension");}function l(a){a=3E4+a;var b=Date.now();return a<b}function f(a,b){return{cachedAt:Date.now(),contextJwt:b,contextObj:a}}function e(a){var b=d(a);if(!c[b]||!c[b].promise&&c[b].context&&l(c[b].context.cachedAt))a.classifier="json",c[b]=c[b]||{},c[b].promise=h.resolveByExtension(a,!0).done(function(a){a&&(c[b].context=
f(a.options.structuredContext,a.options.contextJwt))})}function g(a){if(!a||2>a.length)throw Error("ACJS: Cannot get token. Add-on does not support JWT authentication");}var c={};window.connectHost.onIframeEstablished(function(a){if(k.isValidExtensionOptionsForCache(a.extension.options)){var b=d(a.extension);c[b]={context:f(a.extension.options.structuredContext,a.extension.options.contextJwt)}}else e(a.extension)});window.connectHost.onIframeUnload(function(a){delete c[d(a.extension)]});return{getToken:function(a){var b=
d(a._context.extension);e(a._context.extension);c[b].promise?c[b].promise.done(function(b){g(b.options.contextJwt);try{a(b.options.contextJwt)}catch(m){}}.bind(this)).fail(function(){console.error("ACJS: content resolver failed to get context jwt token")}).always(function(){delete c[b].promise}.bind(this)):(g(c[b].context.contextJwt),a(c[b].context.contextJwt))},getContext:function(a){var b=d(a._context.extension);e(a._context.extension);c[b].promise?c[b].promise.done(function(d){try{a(c[b].context.contextObj)}catch(m){}}.bind(this)).fail(function(){console.error("ACJS: content resolver failed to get context")}).always(function(){delete c[b].promise}.bind(this)):
a(c[b].context.contextObj)}}});
}catch(e){WRMCB(e)};