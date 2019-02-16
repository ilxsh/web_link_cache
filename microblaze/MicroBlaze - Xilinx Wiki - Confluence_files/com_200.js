WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources-v5', location = 'v5/js/confluence/contentbyline/content-byline-view.js' */
AJS.toInit(function(g){function h(a,b){if(a.startsWith("http:")||a.startsWith("https:")||a.startsWith("data:"))return a;b=b.options.origin;a=a.startsWith("/")?a:"/"+a;return b+a}var d;AJS.bind("contentProperty.update",function(a,b){if(b&&b.contentProperty&&b.contentProperty.key&&(d=d||WRM.data.claim("com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-content-byline-resources.connect-content-byline-data"),a=d[b.contentProperty.key])){a=g(document.getElementById(a));var c=b.contentProperty.value,
e=c.name,f=c.tooltip,c=c.icon;e&&e.value&&a.find("span").text(e.value);f&&f.value&&a.attr("title",f.value);c&&c.url&&a.find("img").attr("src",h(c.url,b.extension))}})});
}catch(e){WRMCB(e)};