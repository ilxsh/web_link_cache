WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-utils-v5', location = 'v5/js/iframe/host/util.js' */
_AP.util={escapeSelector:function(a){if(!a)throw Error("No selector to escape");return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$\x26")},isGlobalDefined:function(a){return"undefined"!==typeof window[a]},awaitGlobal:function(a,c,b){b=b||100;if(_AP.util.isGlobalDefined(a))c(window[a]);else var d=setInterval(function(){_AP.util.isGlobalDefined(a)&&(clearInterval(d),c(window[a]))},b)}};
}catch(e){WRMCB(e)};