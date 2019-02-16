WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-connect-plugin:ap-user-v5', location = 'v5/js/iframe/host/user.js' */
define("ac/user",function(){return{getUser:function(b){var a=b._context.extension.options.apiMigrations;if(a&&a.gdpr)throw Error("ACJS: Deprecated API usage while in GDPR mode.");var a=b._context.extension.options.user,c=AJS.Meta.get("remote-user-fullname")||AJS.Meta.get("current-user-fullname")||null;b({fullName:c,id:a.uid,key:a.ukey})},getCurrentUser:function(b){var a=AJS.Meta.get("atlassian-account-id")||null;b({atlassianAccountId:a})},getTimeZone:function(b){var a=b._context.extension.options.apiMigrations;
if(a&&a.gdpr)throw Error("ACJS: Deprecated API usage while in GDPR mode.");b(b._context.extension.options.user.timeZone)}}});
}catch(e){WRMCB(e)};