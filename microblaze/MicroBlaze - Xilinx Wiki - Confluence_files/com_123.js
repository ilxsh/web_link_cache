WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/util.js' */
_AP.util={escapeSelector:function(a){if(!a)throw Error("No selector to escape");return a.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$\x26")}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:iframe-host-js-v5', location = 'v5/js/iframe/host/main.js' */
_AP.addonAttemptCounter={};connectHost.onIframeEstablished(function(a){a.$el.closest(".ap-iframe-container").addClass("iframe-init")});AJS.$(window).on("blur",function(){var a=AJS.LayerManager.global.getTopLayer();if(a&&a.hasClass("aui-dialog2"))return!1;AJS.$(document.activeElement).hasClass("ap-iframe")&&document.documentElement.click()});define("ac/create",function(){return{appendConnectAddon:function(a){return window._AP.appendConnectAddon(a)}}});
window.addEventListener("message",function(a){"set_inner_iframe_url"===a.data.type&&(a.source.location=a.data.iframeData.url)});connectHost.setExtensionConfigurationOptions("crev",window._AP.allJsVersion);
}catch(e){WRMCB(e)};