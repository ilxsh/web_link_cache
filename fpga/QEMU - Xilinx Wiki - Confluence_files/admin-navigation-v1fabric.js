(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3ldI":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return f}),n.d(e,"c",function(){return p});var r=n("RhWx"),a=n.n(r),c=n("Jygk"),o=n.n(c),u=n("M2LZ"),i=function(){return["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:editor-resources","wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-macro-browser-resources","wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources"]};function s(){var t=null;return function(){return t?Promise.resolve(t):o.a.fetch("/wiki/plugins/macrobrowser/browse-macros.action?detailed=false",{credentials:"include"}).then(function(t){return t.json()}).then(function(e){return t=e.macros,e.macros})}}function f(){return new Promise(function(t){u.a.require(["wrc!fabric-editor-macro-browser"].concat(a()(i())),function(){var e=o.a.require("confluence-macro-browser/macro-browser");o.a.AJS.trigger("reset.rte"),t(e)})})}var l=["wr!confluence.web.resources:view-content","wr!confluence.macros.advanced:get-more"];function p(t){if(t){var e=t.contexts&&t.contexts.map(function(t){return"wrc!".concat(t)})||[],n=t.keys&&t.keys.map(function(t){return"wr!".concat(t)})||[],r=[].concat(l,a()(e),a()(n));u.a.require(r)}}},CSJ9:function(t,e,n){"use strict";n("aWzz");var r=n("ERkP"),a=n.n(r),c=n("POWg"),o={small:12,medium:26,large:36},u=function(t){var e=t.size;return a.a.createElement("div",{style:{width:"100%",height:"100%",position:"relative"}},a.a.createElement("div",{"data-test-id":"spinner",style:{position:"absolute",left:"50%",top:"50%",marginLeft:-o[e]/2,marginTop:-o[e]/2,zIndex:100}},a.a.createElement(c.a,{size:o[e]})))};u.displayName="CenteredSpinner",u.displayName="CenteredSpinner",u.defaultProps={size:"small"},e.a=u},TOvH:function(t,e,n){"use strict";var r=n("x+QU"),a=n.n(r);e.a=a()({loader:function(){return Promise.all([n.e(0),n.e(374)]).then(n.bind(null,"XDCa"))},loading:function(){return null}})},Tl5U:function(t,e,n){"use strict";var r=n("tQaH"),a=n.n(r),c=n("VtSi"),o=n.n(c),u=n("cbiG"),i=n.n(u),s=n("ROYt"),f=n("dbjD"),l=n("3ldI"),p=n("ddV6"),m=n.n(p),d=n("Jygk"),h=n.n(d),v=n("idn7");function b(t,e){var n={source:t},r=h.a.require("confluence/jim/editor-plugins/jira-paste-link").pasteHandler(n,null,function(){});if(!r||!r.params)return null;var a=JSON.parse(JSON.stringify(e));return a.attrs.parameters||(a.attrs.parameters={}),a.attrs.parameters.macroParams=Object(v.d)(r.params),a}function y(t){return w.apply(this,arguments)}function w(){return(w=i()(o.a.mark(function t(e){var n,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={macroDefinition:{name:"jira"},contentId:e},t.next=3,U(n);case 3:return r=t.sent,t.abrupt("return",function(t){return b(t,r)});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var g=function(t){for(;-1!==t.indexOf("{}{}");)t=t.replace("{}{}","{}");return t="^"+(t=function(t,e,n){return n.replace(new RegExp(t,"g"),e)}("{}","[^/]*?",t=function(t){return t.replace(/[\-\[\]\/\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(t)))+"$"},x=function(t){return["http://","https://","http://{}","https://{}","http://{}.{}","https://{}.{}","http://{}.{}.{}","https://{}.{}.{}"].every(function(e){return e!==t})},P=function(t){return t.autoconvertData&&t.autoconvertData.urlParameter&&t.autoconvertData.patterns},k=function(){var t=i()(o.a.mark(function t(e,n){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(e.map(function(t){return U({macroDefinition:{name:t},contentId:n})}));case 2:return r=t.sent,t.abrupt("return",r.reduce(function(t,n,r){return t[e[r]]=n,t},{}));case 4:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),O=function(t,e,n){var r=e.find(function(e){return!!t.match(e.matcher)});if(r){var a=r.macroName,c=r.urlParameter,o={};o[c]=t;var u=n[a],i=JSON.parse(JSON.stringify(u));return i.attrs.text="".concat(c," = ").concat(t),i.attrs.extensionKey=a,i.attrs.parameters||(i.attrs.parameters={}),i.attrs.parameters.macroParams=Object(v.d)(o),i}return null};function E(t,e){return j.apply(this,arguments)}function j(){return(j=i()(o.a.mark(function t(e,n){var r,a,c,u;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,e();case 3:return a=t.sent,c=[],a.forEach(function(t){P(t)&&t.autoconvertData.patterns.forEach(function(e){if(x(e)){var n={macroName:t.macroName,urlParameter:t.autoconvertData.urlParameter,matcher:g(e)};c.push(n.macroName),r.push(n)}})}),t.next=8,k(c,n);case 8:return u=t.sent,t.abrupt("return",function(t){return O(t,r,u)});case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}var I=function(){return null},N=function(){var t=i()(o.a.mark(function t(e,n){var r,a,c,u,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.contentId){t.next=3;break}return t.abrupt("return",I);case 3:return t.next=5,Promise.all([y(r),E(e,r)]);case 5:return a=t.sent,c=m()(a,2),u=c[0],i=c[1],t.abrupt("return",function(t){return u(t)||i(t)});case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),L=n("RhWx"),M=n.n(L),D={align:!0,anchor:!0,bgcolor:!0,center:!0,cheese:!0,clickable:!0,code:!0,colgroup:!0,column:!0,"content-by-user":!0,copyright:!0,"create-space-button":!0,div:!0,"fancy-bullets":!0,favpages:!0,"gadget-b7a6531b1c147f2e175f1209bed5c0ad":!0,"global-reports":!0,highlight:!0,htmlcomment:!0,im:!0,img:!0,info:!0,junitreport:!0,li:!0,loremipsum:!0,lozenge:!0,multimedia:!0,navmap:!0,network:!0,noformat:!0,note:!0,ol:!0,p:!0,panel:!0,pre:!0,"privacy-policy":!0,"privacy-mark":!0,"recently-used-labels":!0,"reg-tm":!0,rollover:!0,roundrect:!0,search:!0,section:!0,sm:!0,"space-attachments":!0,"space-details":!0,span:!0,strike:!0,style:!0,table:!0,tbody:!0,td:!0,th:!0,thead:!0,tr:!0,tip:!0,tm:!0,ul:!0,warning:!0};function T(t){var e=t.alternateId||(t.id?t.id.replace("macro-",""):t.macroName);return!D[e]}n.d(e,"d",function(){return C}),n.d(e,"c",function(){return A}),n.d(e,"b",function(){return R}),n.d(e,"g",function(){return z}),n.d(e,"e",function(){return G}),n.d(e,"f",function(){return H}),n.d(e,"a",function(){return U});var S=Object(l.a)(),J=["toc","expand","jira","trello-board","status"],V={type:"extension",content:f.b},C=function(){return S().then(function(t){return t.filter(function(t){return T(t)&&!t.hidden})})};function A(){return C().then(function(t){return t.filter(function(t){return J.includes(t.macroName)})})}function R(t){return N(C,t)}function z(t,e){var n=t.macroName;return t.anyParameterRequired||"children"===n||"tasks-report-macro"===n?function(t,e,n){return new Promise(function(){var r=i()(o.a.mark(function r(c,u){var i,s;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.b)();case 2:i=r.sent,n&&(i.metadataList=i.metadataList.filter(n)),s=q(i,e,t,c,u);try{i.open(a()({},s,{presetMacroMetadata:t}))}catch(t){u(t)}case 6:case"end":return r.stop()}},r)}));return function(t,e){return r.apply(this,arguments)}}())}(t,e):U({macroDefinition:{name:n,body:"",params:{}},contentId:e.contentId})}function _(t,e,n){var r=t.name,a=t.body,c=t.params,o=t.defaultParameterValue,u=t.schemaVersion;return{macroDefinition:{name:r||"",body:a||"",params:c,defaultParameterValue:o||"",schemaVersion:u},contentId:e.contentId,selectedMacro:n}}function q(t,e,n,r,a){var c,u=function(t){var e=M()(t.metadataList);return t.metadataList=t.metadataList.filter(T),function(){t.metadataList=e}}(t);return{autoClose:!1,onComplete:function(){var s=i()(o.a.mark(function i(s){var f,l,p;return o.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return c=!0,t.UI.showBrowserSpinner(!0),f=n&&n.hasOwnProperty("content")?n:null,l=_(s,e,f),o.prev=4,o.next=7,U(l);case 7:p=o.sent,r(p),t.close(),u(),o.next=16;break;case 13:o.prev=13,o.t0=o.catch(4),a(o.t0);case 16:case"end":return o.stop()}},i,null,[[4,13]])}));return function(t){return s.apply(this,arguments)}}(),onCancel:function(){u(),c||a({reason:"cancel"})}}}function G(t,e){return new Promise(function(){var n=i()(o.a.mark(function n(r,c){var u,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.b)();case 2:u=n.sent,e&&(u.metadataList=u.metadataList.filter(e)),i=q(u,t,null,r,c);try{u.open(a()({},i,{selectedMacro:null}))}catch(t){c(t)}case 6:case"end":return n.stop()}},n)}));return function(t,e){return n.apply(this,arguments)}}())}function H(t,e,n){return new Promise(function(){var r=i()(o.a.mark(function r(c,u){var i,s,f;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(v.b)(t||V);case 2:return i=r.sent,r.next=5,Object(l.b)();case 5:s=r.sent,n&&(s.metadataList=s.metadataList.filter(n)),f=q(s,e,t,c,u);try{s.open(a()({},f,{selectedMacro:i}))}catch(t){u(t)}case 9:case"end":return r.stop()}},r)}));return function(t,e){return r.apply(this,arguments)}}())}var U=function(){var t=i()(o.a.mark(function t(e){var n,r,c,u,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.macroDefinition,r=e.contentId,c=e.selectedMacro,t.next=3,s.a.content.getMacroPlaceholderADF(n,r);case 3:return u=t.sent,(i=a()({},u)).type===f.a&&(c?i.content=c.content:i.content&&0!==i.content.length||(i.content=f.b)),t.abrupt("return",Object(v.c)(i));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},dbjD:function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return i});var r="extension",a="inlineExtension",c="bodiedExtension",o=[{content:[],type:"paragraph"}],u={TEMPLATE:"com.atlassian.confluence.template",MACRO_CORE:"com.atlassian.confluence.macro.core",MIGRATION:"com.atlassian.confluence.migration"},i={TEMPLATE:"variable",INLINE_EXTERNAL_IMAGE:"inline-external-image",INLINE_MEDIA_IMAGE:"inline-media-image"}},hd8a:function(t,e,n){"use strict";var r=n("x+QU"),a=n.n(r),c={loader:function(){return Promise.all([n.e(0),n.e(372)]).then(n.bind(null,"66Bi"))},loading:function(){return null}};e.a=a()(c)},idn7:function(t,e,n){"use strict";n.d(e,"d",function(){return m}),n.d(e,"a",function(){return h}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return b});var r=n("VtSi"),a=n.n(r),c=n("cbiG"),o=n.n(c),u=n("m3Bd"),i=n.n(u),s=n("Jygk"),f=n("dbjD");function l(t){return t.hasOwnProperty("")&&d(t[""])||""}function p(t){return Object.keys(t).reduce(function(e,n){var r=d(t[n]);return""===n&&""===r||(e[n]=r),e},{})}function m(t){return Object.keys(t).reduce(function(e,n){var r=d(t[n]);return""===n&&""===r||(e[n]={value:r}),e},{})}function d(t){return t.hasOwnProperty("value")?t.value:t}function h(t){var e=t.type,n=t.content,r=i()(t,["type","content"]),a=r.parameters.macroParams,c={type:e,attrs:r};return c.attrs.bodyType="none","bodiedExtension"===e&&(c.content=n&&n.length>0?n:[],c.attrs.bodyType="rich"),c.attrs.parameters.macroParams=m(a),c}function v(t){var e=t.attrs,n=t.content,r=t.type,a=e.parameters.macroParams,c=f.f;r===f.a?c=f.a:r===f.e&&(c=f.e);var o={type:c,attrs:e};return o.attrs.parameters||(o.attrs.parameters={}),n&&(o.content=n),o.attrs.parameters.macroParams=m(a),o}function b(t){return y.apply(this,arguments)}function y(){return(y=o()(a.a.mark(function t(e){var n,r,c,o,u,i,f,m,d,h,v,b,y,w,g,x;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasOwnProperty("name")||e.hasOwnProperty("attrs")){t.next=2;break}return t.abrupt("return",Promise.resolve(e));case 2:if(r=(n=e).attrs,o=(c=r||{extensionKey:null,parameters:{macroParams:{},macroMetadata:{schemaVersion:null}}}).extensionKey,u=c.parameters,i=u.macroParams,f=u.macroMetadata,m=o||"",d=p(i),h=l(i),v=f.schemaVersion||"1",n.content&&0!==n.content.length){t.next=12;break}return t.abrupt("return",{name:m,params:d,defaultParameterValue:h,schemaVersion:v,body:""});case 12:return b=n.content,y="/wiki/rest/api/contentbody/convert/storage",w={representation:"atlas_doc_format",value:JSON.stringify({type:"doc",content:b,version:1})},t.next=17,Object(s.fetch)(y,{method:"POST",body:JSON.stringify(w),credentials:"include",headers:{"Content-Type":"application/json"}});case 17:if((g=t.sent).ok&&200===g.status){t.next=20;break}throw Error("Conversion HTTP error, status = ".concat(g.status,', message = "').concat(g.statusText,'"'));case 20:return t.next=22,g.json();case 22:return x=t.sent,t.abrupt("return",{name:m,params:d,defaultParameterValue:h,schemaVersion:v,body:x.value||""});case 24:case"end":return t.stop()}},t)}))).apply(this,arguments)}}}]);
//# sourceMappingURL=admin-navigation-v1~fabric.editpage~fabric.template.editor~global-navigation-v1~navigation-v2-integr~f1c0bdd8.863733a8e9a398bf2d07-v38.js.map