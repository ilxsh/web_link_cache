WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/lazy-loading.js' */
define("confluence/jim/jira/jira-issues-view-mode/lazy-loading",["jquery","ajs","underscore","wrm","confluence/jim/jira/jira-issues-view-mode/fetching-job","confluence/jim/jira/jira-issues-view-mode/refresh-table"],function(e,i,l,b,a,d){var h={queryJiraIssuesEls:function(){return e("[data-jira-key][data-client-id]")},renderUISingleJIMFromMacroHTML:function(n,m){l.each(n,function(q,p){var o=m.filter('[data-jira-key="'+p+'"]');o.each(function(s,t){var r=e(t);if(r.hasClass("jira-table")){d.updateRefreshedElement(r,q[0])}else{r.replaceWith(q[s]||q[0])}})})},renderUISingleJIMInErrorCase:function(n,p){var m=["aui-message","aui-message-warning","jim-error-message"];var o="Data cannot be retrieved due to an unexpected error."+" "+p;if(n.hasClass("jira-table")){m.push("jim-error-message-table");d.updateRefreshedElement(n,o)}else{m.push("jim-error-message-single");n.find(".summary").text(o);n.find(".jira-status").remove();n.find(".issue-placeholder").remove();n.find(".aui-icon-wait").remove()}n.removeClass("jira-issue jira-table").addClass(m.join(" "))}};var k={handleAjaxSuccess:function(n,m,p){var o=h.queryJiraIssuesEls();l.each(n,function(r){var q=o.filter('[data-client-id="'+r.clientId+'"]');if(r.status===200){h.renderUISingleJIMFromMacroHTML(JSON.parse(r.data).htmlMacro,q)}else{if(r.status!==202){h.renderUISingleJIMInErrorCase(q,r.data)}}})},handleAjaxError:function(p,o){var m=p.clientIds.split(",");var n=h.queryJiraIssuesEls();l.each(m,function(q){var r=n.filter('[data-client-id="'+q+'"]');h.renderUISingleJIMInErrorCase(r,o)})}};var f={findAllClientIdInPageContent:function(){var n=h.queryJiraIssuesEls();var m=l.map(n,function(p){var o=e(p).attr("data-client-id");if(o){return o}});return l.uniq(m)},collectFetchingJobs:function(){var o=f.findAllClientIdInPageContent();var m=[];var n=new a({clientIds:o.join(",")});if(n.clientIds){m.push(n)}return m}};var c={loadOneByOneJiraServerStrategy:function(){var m=f.collectFetchingJobs();var p=m.length;var o=e.Deferred();var n=0;m.forEach(function(q){q.startJobWithRetry().fail(function(t,r,s){k.handleAjaxError(t,s)}).always(function(){if(++n===p){o.resolve()}}).progress(function(t,r,u){k.handleAjaxSuccess.apply(this,arguments);var s=l.reduce(t,function(w,v){if(v.status==202){w.push(v.clientId)}return w},[]);q.clientIds=s.join(",")})});return o.promise()}};var g={loadTableResourceIfNeeded:function(){var n=e.Deferred();var m=e(".jira-table[data-jira-key]");if(m.length){d.init();n.resolve()}else{n.resolve()}return n.promise()}};var j={init:function(m){return e.when(g.loadTableResourceIfNeeded()).pipe(c.loadOneByOneJiraServerStrategy)}};return j});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/fetching-job.js' */
define("confluence/jim/jira/jira-issues-view-mode/fetching-job",["jquery","ajs","confluence/jim/confluence-shim","confluence/jim/util/retry-caller","confluence/jim/util/connect-helper"],function(e,c,f,b,a){var d=function(g){this.clientIds=g.clientIds;if(a.isConnect()){this.clientIds=a.getClientIds(this.clientIds,a.getUserKey())}var h=1000;this.TICK_RETRIES=[0,1*h,1*h,2*h,3*h,5*h,8*h,13*h,13*h,13*h];this.RETRY_HTTP_CODE=202};d.prototype.startJob=function(){return this.fetchSingeJiraServer()};d.prototype.fetchSingeJiraServer=function(){var h="/rest/jiraanywhere/1.0/jira/clientIds/";var g={type:"POST",url:h,data:this.clientIds,contentType:"application/json",cache:true};var i;if(a.isConnect()){i=a.request(g.url,g)}else{g.url=c.contextPath()+g.url;i=e.ajax(g)}i.clientIds=this.clientIds;return i};d.prototype.startJobWithRetry=function(){return b(this.startJob,{name:this.clientIds,delays:this.TICK_RETRIES,context:this,tester:function(h,g,i){return i&&i.status===this.RETRY_HTTP_CODE}})};return d});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","ajs","jquery","skate","wrm","underscore"],function(f,c,g,a,b,e){var h=e.debounce(function(){f.init()},100);function d(i){if(!__skate||!__skate.registry){return false}return __skate.registry[i]!==undefined}if(!d("confluence-jim-macro")){a("confluence-jim-macro",{type:a.types.CLASS,attached:function(k){var j=g(k);var l=j.attr("data-jira-key");var i=j.attr("data-client-id");if(!l){c.debug("WARNING: Missing JIRA key.");return}if(i){h()}}})}});
}catch(e){WRMCB(e)};