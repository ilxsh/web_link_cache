WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.extra.team-calendars:auto-complete-search-helper', location = 'com/atlassian/confluence/extra/calendar3/components/auto-complete-search-helper/auto-complete-search-helper.js' */
define("tc/auto-complete-search-helper",["jquery","tc/calendar-util"],function(b,a){return{makeAutoCompleteSearch:function(f,e,d,h,c,g){e.keydown(function(j){var i=b("li.active",h);if(27==j.keyCode){if(!h.hasClass("hidden")){h.addClass("hidden");return false}}if(38==j.keyCode){if(!h.hasClass("hidden")){if(i.length){if(i.prev().length){i.removeClass("active").prev().addClass("active")}}else{b(".aui-dropdown li:last",h).addClass("active")}return false}}if(40==j.keyCode){if(!h.hasClass("hidden")){if(i.length){if(i.next().length){i.removeClass("active").next().addClass("active")}}else{b(".aui-dropdown li:first",h).addClass("active")}return false}return false}if(13==j.keyCode){if(!h.hasClass("hidden")){b(".aui-dropdown li.active a",h).trigger("click");return false}}if(b.trim(e.val())){setTimeout(function(){if(!b.trim(e.val())){h.addClass("hidden");return}b.ajax({cache:false,data:b.extend({search:"name",query:e.val()},d),dataType:"json",error:function(k,m,l){if(k.status!==400){a.showAjaxError(f,k,m,l)}},success:function(m){var n=b(document.createElement("ol"));var p=function(s){return k.id?a.getParameter(f,"baseUrl")+"/pages/viewpage.action?pageId="+encodeURIComponent(s.id):"#"};for(var r=0;r<m.group.length;++r){var l=m.group[r];if(l.result){for(var q=0;q<l.result.length;++q){var k=l.result[q];if(g&&!g(k)){continue}var o=b(document.createElement("li")).mouseover(function(){b("li.active",h).removeClass("active");b(this).addClass("active")});if(k.thumbnailLink){b(document.createElement("img")).attr("src",k.thumbnailLink.href).appendTo(o)}if(k.link&&k.link.length){b(document.createElement("span")).attr("title",k.title||(k.space?" "+k.space.name:"")).text(k.title).appendTo(b(document.createElement("a")).data("result",k).attr("href",p(k)||"").addClass(k.type?"content-type-"+k.type:"").click(function(){if(c){c(e,b(this))}h.addClass("hidden");return false}).appendTo(o))}o.appendTo(n)}}}if(n.children().length){b("li",n).each(function(s){if(s>4){b(this).remove()}});b(".aui-dropdown",h).empty().append(n);h.removeClass("hidden").dropDown("Standard")}else{h.addClass("hidden")}},timeout:a.ajaxTimeout,url:a.getParameter(f,"baseUrl")+"/rest/prototype/1/search.json"})},300)}}).focus(function(){if(e.hasClass("with-hint")){e.removeClass("with-hint").val("")}}).blur(function(){if(!b.trim(e.val())){e.addClass("with-hint").val("Confluence page or URL")}})}}});
}catch(e){WRMCB(e)};