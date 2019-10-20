WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/asyncLoader.js' */
define("confluence/code-macro/async-loader",["wrm","underscore","window"],function(a,b,c){return function(){b.defer(function(){c.SyntaxHighlighter.highlight()})}});require("confluence/module-exporter").safeRequire("confluence/code-macro/async-loader",function(a){AJS.toInit(a)});
}catch(e){WRMCB(e)};