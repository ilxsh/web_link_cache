(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5PxA":function(e,t,n){"use strict";var o=n("tQaH"),i=n.n(o),r=n("Jygk"),a=n.n(r),l=n("xeH2"),c=n.n(l),s=n("Zf7T"),p=n("zWu7");function u(e){return!!(e=e&&e.jquery?e[0]:e)&&("BR"!==e.tagName&&3!==e.nodeType||(e=e.parentNode),e&&9===e.nodeType&&(e=null),e)}var d={};d.Rte={HIDDEN_CHAR:"\ufeff",ZERO_WIDTH_WHITESPACE:"&#x200b;",editorId:"wysiwygTextArea",isQuickEdit:!1,getEditor:function(){return a.a.tinymce.activeEditor},getCurrentBaseUrl:function(){if(!this.currentBaseUrl){var e=a.a.document.location;this.currentBaseUrl="".concat(e.protocol,"//").concat(e.hostname).concat(e.port?":".concat(e.port):"")}return this.currentBaseUrl},showSelection:function(e){Object(s.b)().showElement(a.a.tinymce.activeEditor.selection.getStart(),e)},isAnyPartShown:function(e){if(!(e=u(e)))return!1;var t=c()(e),n=t.offset().top,o=n+t.outerHeight(),i=c()(Object(s.b)().getEditor().getDoc()).scrollTop(),r=i+c()(Object(s.b)().getEditorFrame()).height();return o>i&&n<r},showElement:function(e,t){var n=u(e);if(!n)return!1;var o=c()(n),i=Object(s.b)().getEditor(),r=c()(i.getDoc()),a=o.offset().top,l=a+o.outerHeight(),p=r.scrollTop(),d=p+c()(Object(s.b)().getEditorFrame()).height(),g=function(){Object(s.b)().bindScroll("AJS.Rte.showElement",function(){Object(s.b)().unbindScroll("AJS.Rte.showElement"),setTimeout(t,1)})};a<p?(Object(s.b)().scrollTo(a),t&&g()):l>d?(Object(s.b)().scrollTo(Math.min(a,p+l-d)),t&&g()):t&&t()},scrollTo:function(e){var t=Object(s.b)().getEditor();e=Math.ceil(e),c()(t.getDoc()).scrollTop(e)},bindScroll:function(e,t){var n=Object(s.b)().getEditor();c()(document).add(n.getDoc()).add(n.getWin()).bind("scroll.".concat(e),t)},unbindScroll:function(e){var t=Object(s.b)().getEditor();c()(document).add(t.getDoc()).add(t.getWin()).unbind("scroll.".concat(e))},getMainEditor:function(){var e=a.a.tinymce.EditorManager.editors[Object(s.b)().editorId];if(!e)throw new Error("Main editor has not been initialised yet and is therefore not accessible via window.tinymce.EditorManager.editors");return e},getEditorContainer:function(){return document.getElementById("wysiwyg")},getEditorFrame:function(){return document.getElementById("".concat(Object(s.b)().getEditor().id,"_ifr"))},getEditorTable:function(){return document.getElementById("".concat(Object(s.b)().getEditor().id,"_tbl"))},webResourcePath:"/download/resources/com.atlassian.confluence.tinymceplugin%3Atinymceeditor/",getResourceUrlPrefix:function(){return this.resourceUrlPrefix||(this.resourceUrlPrefix=this.getCurrentBaseUrl()+p.a.get("editor-plugin-resource-prefix")),this.resourceUrlPrefix},getTinyMceBaseUrl:function(){return this.absoluteUrl||(this.absoluteUrl="".concat(this.getResourceUrlPrefix()+this.webResourcePath,"tinymcesource/")),this.absoluteUrl},getMinEditorHeight:function(){return+p.a.get("min-editor-height")},getTinyMceEditorMinHeight:function(e){e=e||0;var t=Object(s.b)().getMinEditorHeight(),n=0;return t||(Array.prototype.forEach.call(document.querySelectorAll("#editor-precursor,#header-precursor,#header"),function(e){n+=c()(e).outerHeight(!0)}),c()(a.a).height()-n-e)},fixEditorFocus:function(){0},editorFocus:function(e){if(e&&!e.destroyed){var t=function(){var t=e.dom.getRoot();return a.a.tinymce.isWebKit&&!c()(t).parents("body").length&&(t=c()(e.getBody()).find("p:first-child")[0]),t}();t&&(e.selection.select(t,1),e.selection.collapse(1),t.focus()),e.getBody().focus(),e.getWin().focus()}}},d.KEYS={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,META:91};var g=d;n.d(t,"a",function(){return m});var m=function(){void 0===a.a.AJS.Rte&&(a.a.AJS.Rte=i()({},g.Rte)),void 0===a.a.AJS.Rte.getEditor&&(a.a.AJS.Rte=i()({},a.a.AJS.Rte,g.Rte))}},WHVE:function(e,t,n){"use strict";var o=n("Jygk"),i=n.n(o),r=n("ddV6"),a=n.n(r),l=n("bfgX"),c=n("zWu7"),s=n("w19e"),p={Formatting:".rte-toolbar-group-formatting",Style:".rte-toolbar-group-style",Indentation:".rte-toolbar-group-indentation",Lists:".rte-toolbar-group-lists",Tasks:".rte-toolbar-group-task-lists",Justification:".rte-toolbar-group-justification",Links:".rte-toolbar-group-link",Table:".rte-toolbar-group-table",Insert:".rte-toolbar-group-insert",Undo:".rte-toolbar-group-undo",PageLayouts:"#page-layout-2-group",SearchReplace:".rte-toolbar-group-searchreplace",Help:".rte-toolbar-group-help"},u=function(e,t,n){!1===t&&function(e,t){Array.prototype.forEach.call(document.getElementById(e).querySelectorAll(t),function(e){e.style.display="none"})}(e,n)},d=n("bS8p"),g=n("5PxA"),m={atlassian:!0,keep_values:!0,convert_urls:!0,relative_urls:!1,remove_script_host:!1,button_tile_map:!0,gecko_spellcheck:!0,apply_source_formatting:!1,list_outdent_on_enter:!0,visual:!1,confluence_table_style:"confluenceTable",confluence_table_cell_style:"confluenceTd",confluence_table_heading_style:"confluenceTh",confluence_table_default_rows:4,confluence_table_default_cols:3,confluence_table_default_heading:!0,cleanup:!0,cleanup_on_startup:!0,fix_list_elements:!1,fix_table_elements:!0,valid_elements:"@[id|class|style|title|wysiwyg|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[*],strong/b,em/i,s,u,#p[align|user],-ol[type|compact],-ul[type|compact],li,br,img[imagetext|longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote[cite|markup],-table[*],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,div[*],span[*],-code,#pre[*],address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big",extended_valid_elements:"img[*],time[class|datetime|contenteditable|onselectstart|unselectable|oncontrolselect]",formats:{alignleft:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"left"}},{selector:"img.confluence-embedded-image",classes:"image-left"},{selector:"img,table",collapsed:!1,styles:{float:"left"}}],aligncenter:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"center"}},{selector:"img.confluence-embedded-image",classes:"image-center"},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",styles:{textAlign:"right"}},{selector:"img.confluence-embedded-image",classes:"image-right"},{selector:"img,table",collapsed:!1,styles:{float:"right"}}],underline:[{inline:"u",remove:"all"},{inline:"span",styles:{textDecoration:"underline"},exact:!0}],strikethrough:[{inline:"s",remove:"all"}],removeformat:[{selector:"h1,h2,h3,h4,h5,h6,pre",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0,block:"*"},{selector:"address,article,b,big,blockquote,center,cite,code,date,dd,del,dfn,dl,dt,em,embed,font,footer,header,hgroup,i,ins,kbd,link,menu,nav,object,param,q,s,samp,script,section,small,strike,strong,style,sub,sup,time,tt,u,var",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"table",attributes:["cellpadding","cellspacing","border"],split:!1,expand:!1,deep:!0},{selector:"*",attributes:["style","color","bgcolor","title","lang"],split:!1,expand:!1,deep:!0}]},forced_root_block:"p",force_p_newlines:!0,force_br_newlines:!1,padd_empty_with_br:!0,allow_unsafe_link_target:!0,paste_remove_styles_if_webkit:!1,object_resizing:!1};var b={_tinyMceHasInit:!1,_beforeInitCallbacks:[],_tinymcePluginInits:[],_settings:null,isInitComplete:function(){return b._tinyMceHasInit},isEditorActive:function(){return!!(b.isInitComplete()&&i.a.tinymce&&i.a.tinymce.activeEditor)},onInit:function(){b._tinyMceHasInit=!0;var e=i.a.AJS.Rte.getEditor();if(e.getBody().classList.add("notranslate"),Object(l.b)("init.rte",{editor:e}),!1!==c.a.get("editor-auto-focus")){var t=i.a.document.getElementById("content-title");t&&""===t.value?t.focus():i.a.AJS.Rte.editorFocus(e)}else 0},addOnInitCallback:function(e){if("function"!=typeof e)throw new Error("Attempt made to register an oninit callback that is not a function. Received: ".concat(e));b._tinyMceHasInit?e():Object(l.a)("init.rte",e)},addBeforeInitCallback:function(e){b._beforeInitCallbacks.push(e)},addTinyMcePluginInit:function(e){b._tinymcePluginInits.push(e)},preInitialise:function(e){b._settings=Object.assign({},m,e)},initialise:function(e){if(Object(s.a)("confluence.editor.tinymce"),b._settings){e=Object.assign({},e);var t=Object.assign({},b._settings);i.a.AJS.Rte.isQuickEdit=e.isQuickEdit||!1,b._beforeInitCallbacks.forEach(function(e){e(t)}),Object(l.b)("rte-pre-resolveplugins");for(var n=0,o=b._tinymcePluginInits.length;n<o;n++)"function"==typeof b._tinymcePluginInits[n]&&b._tinymcePluginInits[n](t);!function(e,t){if(e)if(void 0!==t){var n=new RegExp("".concat(t["keyboard.shortcut.ctrl"],"+"),"g"),o=new RegExp("".concat(t["keyboard.shortcut.shift"],"+"),"g"),r=new RegExp("".concat(t["keyboard.shortcut.alt"],"+"),"g"),l=function(e){return e.replace(n,"⌘").replace(o,"⇧").replace(r,t["keyboard.shortcut.option"])},c={};Object.entries(t).forEach(function(e){var t=a()(e,2),n=t[0],o=t[1];i.a.tinymce.Env.mac&&(o=l(o)),c[n]=o}),i.a.tinymce.EditorManager.addI18n(e,c);var s,p={"propertypanel.links_goto":"tinymce.propertypanel.links.goto","propertypanel.links_edit":"tinymce.propertypanel.links.edit","propertypanel.links_unlink":"tinymce.propertypanel.links.unlink","propertypanel.links_goto_disabled_tooltip":"tinymce.propertypanel.links.goto.disabled.tooltip","propertypanel.links_edit_tooltip":"tinymce.propertypanel.links.edit.tooltip","propertypanel.links_unlink_tooltip":"tinymce.propertypanel.links.unlink.tooltip","propertypanel.images_small":"tinymce.propertypanel.images.small","propertypanel.images_medium":"tinymce.propertypanel.images.medium","propertypanel.images_large":"tinymce.propertypanel.images.large","propertypanel.images_original":"tinymce.propertypanel.images.original","propertypanel.images_border":"tinymce.propertypanel.images.border","propertypanel.images_link_create":"tinymce.propertypanel.images.link.create","propertypanel.images_link_edit":"tinymce.propertypanel.images.link.edit","propertypanel.images_link_remove":"tinymce.propertypanel.images.link.remove","propertypanel.images_link_create_tooltip":"tinymce.propertypanel.images.link.create.tooltip","propertypanel.images_link_edit_tooltip":"tinymce.propertypanel.images.link.edit.tooltip","propertypanel.images_link_remove_tooltip":"tinymce.propertypanel.images.link.remove.tooltip","propertypanel.images_sizing_tooltip":"tinymce.propertypanel.images.sizing.tooltip","propertypanel.images_small_tooltip":"tinymce.propertypanel.images.small.tooltip","propertypanel.images_medium_tooltip":"tinymce.propertypanel.images.medium.tooltip","propertypanel.images_large_tooltip":"tinymce.propertypanel.images.large.tooltip","propertypanel.images_original_tooltip":"tinymce.propertypanel.images.original.tooltip","propertypanel.images_thumbnail_tooltip":"tinymce.propertypanel.images.thumbnail.tooltip","propertypanel.images_border_tooltip":"tinymce.propertypanel.images.border.tooltip"};for(s in p)i.a.tinymce.EditorManager.i18n.data["".concat(e,".").concat(s)]=i.a.tinymce.translate(p[s]);i.a.tinymce.ScriptLoader.markDone("".concat(i.a.tinymce.baseURL,"/langs/").concat(e,".js")),i.a.tinymce.Env.mac&&Array.prototype.forEach.call(i.a.document.querySelectorAll("#rte-toolbar .toolbar-item, #rte-toolbar .dropdown-item, #rte-savebar .aui-button"),function(e){var t=e.getAttribute("title"),n=e.dataset.tooltip;t&&e.setAttribute("title",l(t)),n&&(e.dataset.tooltip=l(n))})}else i.a.tinymce.ScriptLoader.markDone("".concat(i.a.tinymce.baseURL,"/langs/").concat(e,".js"))}(t.locale,t.messages),function(e,t){var n;if(!1!==t)for(n in t=t||{})t.hasOwnProperty(n)&&p[n]&&u(e,t[n],p[n]);else document.getElementById(e).style.display="none"}("toolbar",e.toolbar);var r=["confluencecleanupplugin","confluencepastetableplugin","confluencepastemacroplugin","confluencelist"];e.excludePlugins=e.excludePlugins instanceof Array?r.concat(e.excludePlugins):r,t.plugins=function(e,t,n){var o=e.split(",");return t.forEach(function(e){o.indexOf(e)<0&&o.push(e)}),(o=o.filter(function(e){return n.indexOf(e)<0})).join(",")}(t.plugins,e.plugins||[],e.excludePlugins),t.setup=e.onInitialise,"page"!==c.a.get("content-type")&&"blogpost"!==c.a.get("content-type")||(t.iframe_attrs={"data-gramm":!1}),t.init_instance_callback=function(e){Object(g.a)(),i.a.tinymce.FocusManager.isEditorUIElement=function(e){for(var t=e,n=!1;t;){if("rte-toolbar"===t.id){n=!0;break}t=t.parentElement}return n};try{var n=t.contentCssTags,o=e.getDoc().querySelectorAll("head");if(void 0===o[0])throw new Error("No editor <head>");o[0].innerHTML=n+o[0].innerHTML}catch(e){}i.a.AJS.Rte.BootstrapManager.onInit(e),d.a.editorResetContentChanged(),i.a.AJS.Rte.getEditorFrame().setAttribute("tabindex",100),i.a.tinymce.isIE&&i.a.AJS.Rte.getEditorFrame().setAttribute("hidefocus","hidefocus"),Object(s.b)("confluence.editor.tinymce"),Object(l.b)("rte-ready")},i.a.tinymce.init(t)}}},f=b;n.d(t,"a",function(){return y});var y=function(){void 0!==i.a.AJS.Rte&&void 0===i.a.AJS.Rte.BootstrapManager&&(i.a.AJS.Rte.BootstrapManager=f)}},Zf7T:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var o=n("Jygk"),i=n.n(o);function r(){return i.a.AJS.Rte.BootstrapManager}function a(){return i.a.AJS.Rte}},w19e:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return f});var o=n("Jygk"),i=n.n(o),r=n("bfgX"),a=!1,l="",c={},s={},p=function(){if(a){var e=function(){for(var e={},t={name:l,data:e},n=u.getEntriesByType("measure"),o=0;o<n.length;o++){var i=n[o],r=i.name;c[r]&&(e["".concat(r,".startTime")]=i.startTime,e["".concat(r,".duration")]=i.duration)}return t}();Object(r.b)("analytics",e),a=!1}};var u=i.a.performance,d=function(e){return"".concat(e,".start")},g=function(e){if(u&&u.mark&&c[e]){a||(a=!0);var t=d(e);u.mark(t)}},m=function(e){if(u&&u.mark&&c[e]){var t=d(e);if(0!==u.getEntriesByName(t,"mark").length){var n=function(e){return"".concat(e,".end")}(e);u.mark(n),u.measure(e,t,n),s[e]&&p()}else i.a.console.warn("Calling debugTimeEnd for ".concat(e," before debugTime"))}};function b(e){g(e)}function f(e){m(e)}}}]);
//# sourceMappingURL=initialize-editor-plugins~page.editor-loader~space.createpage~space.editpage.89c008088181815a1a80-v38.js.map