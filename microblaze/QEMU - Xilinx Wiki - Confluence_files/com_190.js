WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","skate","vfm/components/embedded-file-view"],function(f,b,a,d){f(document).on("click",".confluence-embedded-file.unknown-attachment",function(g){g.preventDefault()});function c(g){if(!__skate||!__skate.registry){return false}return __skate.registry[g]!==undefined}var e="confluence-embedded-file-wrapper";if(!c(e)){a(e,{type:a.types.CLASS,attached:function(g){d.render({el:g})}})}});
}catch(e){WRMCB(e)};