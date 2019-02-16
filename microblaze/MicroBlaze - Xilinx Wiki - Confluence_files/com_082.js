WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/routes.js' */
(function(l,f){f(["ac/navigator/routes","ac/navigator/utils"],function(f,g){function h(a,c){l.ajax({url:d+"/rest/api/content/"+a,dataType:"json"}).success(c).fail(function(){AJS.error("Content not found (ID\x3d"+a+")")})}var m=["page","blogpost","attachment","comment"],d=AJS.contextPath();AJS.Meta.get("enabled-dark-features");var e=g.hasContext,k=g.appendQueryParam;f.addRoutes({dashboard:"",contentedit:function(a,c){e(a,"contentId")&&h(a.contentId,function(a){var b=a.type;/^ac:/.test(b)?c(d+"/display/"+
a.space.key+"/customcontent/edit/"+a.id):-1!==m.indexOf(b)?c(d+"/pages/edit"+b+".action?pageId\x3d"+a.id):AJS.error('Cannot navigate to "contentedit" target for content (ID\x3d'+a.id+"). Content type \x3c"+b+"\x3e is not supported.")})},spacetools:"/spaces/viewspacesummary.action?key\x3d{spaceKey}",spaceview:"/spaces/{spaceKey}",userprofile:function(a,c){var b;e(a,"userAccountId")?b="/people/"+a.userAccountId:e(a,"username")&&(b=d+"/display/~"+a.username);b&&c(b)},contentview:function(a,c){e(a,"contentId")&&
h(a.contentId,function(b){b=d+b._links.webui;e(a,"versionOverride")&&(b=k(b,"versionOverride",a.versionOverride));e(a,"embeddedContentRender")&&(b=k(b,"embeddedContentRender",a.embeddedContentRender));b&&c(b)})},contentlist:function(a,c){var b=encodeURIComponent(a.spaceKey);a=a.contentType;"page"===a?c(d+"/spaces/"+b+"/pages"):"blogpost"===a?c(d+"/spaces/"+b+"/blog"):/^ac:/.test(a)?c(d+"/display/"+b+"/customcontent/list/"+encodeURIComponent(a)):AJS.error('Cannot navigate to "contentlist" target for content type \x3c'+
a+"\x3e")}});g.enableApi()})})(AJS.$,require);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:confluence-navigator-routes-v5', location = 'v5/js/confluence/navigator/context.js' */
(function(c,a){a(["ac/navigator/context","confluence/api/navigator-context"],function(a,b){a.setContextFunction(b.getCurrent)})})(AJS.$,require);
}catch(e){WRMCB(e)};