WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser', location = 'js/macro-browser-overrides.js' */
define("confluence-inline-tasks/macro-browser-overrides",["jquery","ajs","confluence-inline-tasks/space-page-picker-shim"],function(c,a,b){return{fields:{string:{spaceAndPage:function(g){var f=g.multiple?"autocomplete-multi-space-and-page":"autocomplete-space-and-page";var e=c(Confluence.Templates.MacroBrowser.macroParameter());var h=e.find("input[type='text']");h.addClass(f).attr("data-none-message","Not found");if(g.required){h.keyup(a.MacroBrowser.processRequiredParameters)}h.auiSelect2(b.build({multiple:g.multiple,orgElement:h,inputSpaceId:"legacy-macro-param-spaces",inputSpaceCatId:"legacy-macro-param-space-cats",inputPageId:"legacy-macro-param-pages"}));var d={setValue:function(i){b.setValue(i,h)}};return a.MacroBrowser.Field(e,h,d)}}},beforeParamsSet:function(d){var e=b.combineMapToString({page:d.pages,space:d.spaces});if(e){d.spaceAndPage=e}delete d.pages;delete d.spaces;return d},beforeParamsRetrieved:function(e){var d=b.splitStringToMap(e.spaceAndPage);if(d.page.length){e.pages=d.page.join(",")}if(d.space.length){e.spaces=d.space.join(",")}delete e.spaceAndPage;return e}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser', location = 'js/macro-browser-overrides-call.js' */
require("confluence/module-exporter").safeRequire("confluence-inline-tasks/macro-browser-overrides",function(a){require("ajs").MacroBrowser.setMacroJsOverride("tasks-report-macro",a)});
}catch(e){WRMCB(e)};