(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{"2kJU":function(e,n,t){"use strict";t.r(n);var i,o=t("Jygk"),r=t.n(o),c=t("bfgX"),a=t("kw4U"),u=t("cGYM"),s="confluence.editor.autocomplete.fabric.mentions",l=!1;function d(){i=Date.now(),l=!1,Object(c.b)("analytics",{name:"".concat(s,".trigger"),data:{}})}function f(e,n){var t=m(!1);l=!0,Object(c.b)("analytics",{name:"".concat(s,".").concat(p("insert",t)),data:{sessionDurationInMillis:t}}),Object(c.b)("analytics",{name:"confluence.spa.editor.autocomplete.fabric.mentions.insert",data:{sessionDurationInMillis:t,queryLength:n.queryLength,mentioneeId:Object(u.a)(n.mentioneeId),contentId:Object(u.a)(n.contentId)}})}function h(){if(!l){var e=m(!0);Object(c.b)("analytics",{name:"".concat(s,".").concat(p("close",e)),data:{sessionDurationInMillis:e}})}l=!1}function m(e){var n=-1;return i&&(n=Date.now()-i,e&&(i=null)),n}function p(e,n){return-1===n?e:"".concat(e,n<1e3?".less.than.1s":n<5e3?".less.than.5s":n<1e4?".less.than.10s":n<2e4?".less.than.20s":".more.than.20s")}t.d(n,"triggerEditorPluginsLoaded",function(){return y});var g=t("8cd6").default;!function(){Object(c.a)("init.rte",function(){Object(c.a)("mention-autocomplete-on-start",d),Object(c.a)("mention-autocomplete-on-select",f),Object(c.a)("mention-autocomplete-on-death",h)}),Object(c.a)("rte-destroyed",function(){Object(c.c)("mention-autocomplete-on-death",h),Object(c.c)("mention-autocomplete-on-select",f),Object(c.c)("mention-autocomplete-on-start",d)})}(),Object(c.a)("rte-pre-resolveplugins",function(){var e=Object(a.b)();r.a.tinymce.create("tinymce.plugins.MentionsAutoComplete",g),r.a.tinymce.PluginManager.add("fabricmention",r.a.tinymce.plugins.MentionsAutoComplete),e.addTinyMcePluginInit(function(e){e.plugins+=",fabricmention"})});var y=function(){Object(c.b)("frontend.editor.plugins.resources.loaded")}},"8cd6":function(e,n,t){"use strict";t.r(n);var i=t("tQaH"),o=t.n(i),r=t("xeH2"),c=t.n(r),a=t("2srY"),u=t.n(a),s=t("Jygk"),l=t.n(s),d=t("bfgX"),f=t("Z49i"),h=t("/FQd"),m=t("bQlP"),p=t("kw4U"),g=t("jqY8"),y=t("btMZ"),v=t("vqNw"),k=t("GHF8"),b=t("uCC1"),C=t("VrFO"),E=t.n(C),O=t("Y9Ll"),P=t.n(O),I=t("sbiO"),S=t("ANWt"),w=t("gHN4"),j=t("ERkP"),A=t.n(j),x=t("7nmT"),T=t.n(x),K=t("fN3Q"),M=t.n(K),R=t("HbzK"),D=t("utTn");var N=function(e){return e.replace(/[&"'<>`]/g,function(e){var n={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;","`":"&#96;"};return"string"==typeof n[e]?n[e]:"&quot;"})},F=1,q=2;function U(e,n,t){var i,o=n.jquery?n:c()(n),r=l.a.AJS.Position.spaceAboveBelow(l.a.AJS.Rte.getEditorFrame(),e),a=l.a.AJS.Rte.Content.offset(e),u=c()(l.a).width(),s=Math.max(o.width()+a.left-u,0),d=t&&t.adjustX||0,f=t&&t.adjustY||0,h=a.left-s+d,m=o.outerHeight(!0);i=function(e){return e.below>e.above?q:F}(r)===F?a.top-m-f:a.top+e.height()+f,n.css({left:h,top:i,display:"block"})}var B={adjustY:2};var _,H,L=function(){function e(n){var t=this;E()(this,e),this._mentionSelected=this._mentionSelected.bind(this),this._setPickerRef=this._setPickerRef.bind(this),this.options=n,this.resourceProvider=function(e){var n=e||{},t=n.mentionResource,i=n.contextIdentifier;return i?new S.a(t,o()({},i,{sessionId:M()()})):t}(n),Object(m.M)(m.u)&&(this.presenceProvider=n.presenceResource),this.$mentionPickerContainer=c()("<div/>"),this.mentionPickerContainer=this.$mentionPickerContainer[0],this.query=n.query,this.$mentionPickerContainer.css({position:"absolute","z-index":1e4,display:"none"}),c()("body").append(this.mentionPickerContainer),this._renderPicker(),this.resourceProvider.subscribe("@atlaskit/mentions",function(e){e&&e.length>0&&t.reposition()},function(){t.reposition()})}return P()(e,[{key:"_setPickerRef",value:function(e){this.mentionPickerRef=e}},{key:"_mentionSelected",value:function(e){e?this.options.update(e):this.options.die()}},{key:"_renderPicker",value:function(){var e=A.a.createElement(w.a,{resourceProvider:this.resourceProvider,presenceProvider:this.presenceProvider,query:this.query,onSelection:this._mentionSelected,ref:this._setPickerRef});T.a.render(e,this.mentionPickerContainer)}},{key:"update",value:function(e){Object(d.b)("mention-autocomplete-on-select",{mentioneeId:e.id,contentId:R.a.get("content-id"),queryLength:(this.query||"").length}),function(e){var n=Object(D.a)(),t=N(e.name),i={attrs:{href:Object(I.k)(e.id),accountid:e.id,"data-linked-resource-default-alias":t},body:{html:t,text:t},classes:["confluence-link"]};n.fromData(i).insert()}(e,this.options.atlassianAccount)}},{key:"onTextChange",value:function(e){this.query=e,this._renderPicker()}},{key:"isDataValid",value:function(){return!0}},{key:"die",value:function(){T.a.unmountComponentAtNode(this.mentionPickerContainer),this.$mentionPickerContainer.remove(),this.resourceProvider.unsubscribe("@atlaskit/mentions")}},{key:"onKeyUp",value:function(){this.mentionPickerRef.selectPrevious()}},{key:"onKeyDown",value:function(){this.mentionPickerRef.selectNext()}},{key:"onKeyEnter",value:function(){this.mentionPickerRef.chooseCurrentSelection()}},{key:"onKeyTab",value:function(){this.mentionPickerRef.chooseCurrentSelection()}},{key:"reposition",value:function(){!function(e,n,t){setTimeout(function(){U(e,n,t)},1)}(this.options.anchor,this.$mentionPickerContainer,B)}}]),e}(),V=(t("PN9k"),t("gPFU")),J=t("fLXQ"),Y=new y.a(l.a.navigator.userAgent),G={leadingChar:"",isDataValid:function(){return!1},backWords:0,onBeforeDie:function(){}},Q=function(){function e(n){E()(this,e),this.ed=Object(p.c)().getEditor(),this.settings=Object.assign({},G,n),this.control=null,this.picker=null}return P()(e,[{key:"start",value:function(){console.debug("startAutoComplete (FE) - Started"),this.control=Object(p.a)().Control(this.ed,this.settings),this.control&&(Object(d.b)("mention-autocomplete-on-start"),this.attachEventsToControl())}},{key:"attachEventsToControl",value:function(){var e=this,n=e.control;if("function"==typeof this.settings.onBeforeDie){var t=this.control.die;this.control.die=function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e.settings.onBeforeDie.apply(e.control,i),t.apply(e.control,i)}}var i={onBeforeKey:function(n,t){return n.keyCode!==V.a.ESCAPE&&e.control&&Object(J.a)(e.control.getContainer()[0],"isDirty"),n.keyCode===V.a.DOWN?(this.settings.onKeyDown&&this.settings.onKeyDown(),l.a.tinymce.dom.Event.cancel(n),!1):n.keyCode===V.a.UP?(this.settings.onKeyUp&&this.settings.onKeyUp(),l.a.tinymce.dom.Event.cancel(n),!1):n.keyCode===V.a.ENTER?(e.settings.onBeforeEnter&&e.settings.onBeforeEnter(e.ed.undoManager),this.settings.onKeyEnter&&this.settings.onKeyEnter(),l.a.tinymce.dom.Event.cancel(n),!1):n.keyCode===V.a.TAB?(this.settings.onKeyTab&&this.settings.onKeyTab(),l.a.tinymce.dom.Event.cancel(n),!1):!(n.keyCode===V.a.ESCAPE||n.keyCode===V.a.BACKSPACE&&!t)||(console.debug("autoCompleteControl.onBeforeKey - killing autoCompleteControl"),this.die(n.keyCode===V.a.BACKSPACE),!1)},onKeyPress:function(e){var t=Y.isIE()?e.keyCode:e.which;if(e.keyCode===V.a.ENTER)return l.a.tinymce.dom.Event.cancel(e),!1;var i=String.fromCharCode(t);return this.settings.endChars.indexOf(i)>=0&&(console.debug("autoCompleteControl.onKeyPress - caught autocomplete-closing char - character"),n.die()),!0},onAfterKey:function(n,t){var i=e.control.getContainer()[0].querySelectorAll("#autocomplete-trigger"),o=i[0].innerText;return i.length>0&&o!==e.settings.leadingChar?(console.debug("after","dying because of: trigger text is modified"),e.reset(),!1):n.keyCode===V.a.ENTER?(l.a.tinymce.dom.Event.cancel(n),!1):(this.settings.onTextChange&&this.settings.onTextChange(o,t),!0)},onDeath:function(){console.debug("autoCompleteControl.onDeath called"),e.control=null,Object(d.b)("mention-autocomplete-on-death")},onScroll:function(){e.picker&&e.picker.reposition()}};Object.assign(n,i)}},{key:"reset",value:function(){this.control&&(this.control.die(),this.control=null)}}]),e}(),$={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SpaceIDQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"space"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:91,source:{body:"\n  query SpaceIDQuery($spaceKey: String!) {\n    space(key: $spaceKey) {\n      id\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},W=new y.a(Object(g.c)().navigator.userAgent),Z="@";function X(e){0}function z(e){0}function ee(){if((!_.control||_.control.dying)&&H&&(_.start(),_.control)){var e=_.control.getContainer();return e&&e.addClass("fabric-mentions-autocomplete"),_.picker=new L({mentionResource:H.mentionResource,presenceResource:H.presenceResource,anchor:e,query:_.control.word,update:function(e){_&&_.control&&_.control.update(e)},die:function(){_&&_.control&&_.control.die()},contextIdentifier:H.contextIdentifier}),!0}return!1}var ne=function(e){return Object(f.a)().query({query:$,variables:{spaceKey:e}})};var te={init:function(e){var n=Object(p.c)();Object(v.a)("Initialising the Mentions plugin"),function(e){var n=l.a.location.href.match(/\/spaces\/([^/]+)\//),t=n?n[1]:null;Object(m.M)(m.t)?Object(h.b)(Object(f.a)()).then(function(n){var i=n.cloudId;return ne(t).then(function(n){return Object(k.a)(i,null,o()({},e,{spaceId:n.data.space.id})).then(function(e){return H=e}).catch(function(e){return X()})}).catch(function(e){z(),Object(k.a)(i).then(function(e){return H=e}).catch(function(e){return X()})})}).catch(function(e){}):ne(t).then(function(n){return Object(b.a)(null,o()({},e,{spaceId:n.data.space.id})).then(function(e){return H=e})}).catch(function(e){z(),Object(b.a)().then(function(e){return H=e})})}({contentId:function(e){return u()(e,"settings.page_id")}(e),commentId:function(e){var n=u()(e,"formElement.offsetParent.id","");return n.includes("comment-")||n.includes("addcomment")?n.replace("comment-",""):null}(e)}),e.addCommand("mceConfInsertFabricMentionsAutocomplete",ee),function(){Object(p.a)().Settings[Z]={ch:Z,endChars:[],onTextChange:function(e,n){_.picker.onTextChange&&_.picker.onTextChange(n)},isDataValid:function(){return!0},onKeyUp:function(){_.picker.onKeyUp&&_.picker.onKeyUp()},onKeyDown:function(){_.picker.onKeyDown&&_.picker.onKeyDown()},onKeyEnter:function(){_.picker.onKeyEnter&&_.picker.onKeyEnter()},onKeyTab:function(){_.picker.onKeyTab&&_.picker.onKeyTab()},update:function(e,n){_.picker.update&&_.picker.update(n),_.picker.die&&_.picker.die(),_.reset()}},_=new Q({leadingChar:Z,onBeforeDie:function(){if(_.picker&&_.picker.die(),_.control){var e=c()(_.control.getContainer()),n=e.find(".inserting");e.hasClass("isDirty")||n.closest("#autocomplete-search-text").remove()}},onBeforeEnter:function(e){if(_.control){var n=c()(_.control.getContainer()).find("#autocomplete-search-text");n.text().length>0&&(n.prepend(Z),e&&"function"==typeof e.add&&e.add())}}})}(),function(){Object(d.a)("confluence.editor.registerHandlers",function(e,n){var t=n.handlerManager,i=n.ed,o=(0,n.createHandler)(/(?:\s|\xA0|^|\ufeff|\u200b)()$/,function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];Object(v.a)("=== activating mentions via handler....",n),ee()},!0,"#autocomplete");i.onKeyPress.addToTop(function(e,n){if(n.metaKey)return!0;var t=W.isIE()?n.keyCode:n.which;return"@"!==String.fromCharCode(t)||(ee()&&l.a.tinymce.dom.Event.cancel(n),!1)}),t.registerHandler("@".charCodeAt(0),o)})}(),e.onContextMenu.add(function(){_.reset()}),c()("#insertmention-button").click(function(e){e.stopPropagation(),e.preventDefault(),ee()}),Object(d.a)("editor.text-placeholder.activated",function(n,t){t&&"mention"===t.placeholderType&&(function(e){return e&&e.shiftKey&&!e.ctrlKey&&!e.altKey&&!e.altGraphKey&&!e.metaKey&&64===e.which}(t.triggerEvent)&&l.a.tinymce.dom.Event.cancel(t.triggerEvent),l.a.tinymce.execCommand("mceFocus",!1,e.id),ee())}),n.Placeholder&&n.Placeholder.addPlaceholderType&&n.Placeholder.addPlaceholderType({type:"mention",label:"User mention",tooltip:"Instructional text is replaced with suggested people when a person types."})},getInfo:function(){return{longname:"Fabric Mentions",author:"Atlassian",authorurl:"http://www.atlassian.com",version:"".concat(l.a.tinymce.majorVersion,".").concat(l.a.tinymce.minorVersion)}},getServiceUrl:function(){return H.mentionServiceUrl}};n.default=te},GHF8:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var i=t("VtSi"),o=t.n(i),r=t("cbiG"),c=t.n(r),a=t("2srY"),u=t.n(a),s=t("/FQd"),l=t("Z49i"),d=t("bQlP"),f=t("7EDp"),h=t("ktBm"),m=t("RwrK"),p=t("uCC1"),g="/gateway/api/mentions",y="/gateway/api/teams/mentions";function v(e,n,t){return k.apply(this,arguments)}function k(){return(k=c()(o.a.mark(function e(n,t,i){var r,c,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:"".concat(g,"/").concat(n),productId:"micros-group/confluence",containerId:t||null,shouldHighlightMention:function(e){return e.id===i}},c={url:y,productId:"micros-group/confluence",containerId:t||null,shouldHighlightMention:function(e){return e.id===i}},e.next=4,Object(s.b)(Object(l.a)());case 4:if(a=e.sent,!a.featureFlags[d.v]){e.next=8;break}return e.abrupt("return",new f.a(r,c));case 8:return e.abrupt("return",new h.c(r));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function b(e,n,t){return C.apply(this,arguments)}function C(){return(C=c()(o.a.mark(function e(n,t,i){var r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(d.M)(d.t)){e.next=2;break}return e.abrupt("return",Object(p.a)(t,i));case 2:if(r=u()(i,"spaceId",null),n){e.next=5;break}throw new Error("MentionResource cannot be configured without a cloud id");case 5:return e.next=7,v(n,r,t);case 7:return c=e.sent,e.abrupt("return",{mentionResource:c,presenceResource:new m.a({url:"/gateway/api/directory/graphql",cloudId:n,productId:"confluence"}),mentionServiceUrl:"".concat(g,"/").concat(n),contextIdentifier:{containerId:r,objectId:u()(i,"contentId",null),childObjectId:u()(i,"commentId",null)}});case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}},btMZ:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return a});var i=t("VrFO"),o=t.n(i),r=t("Y9Ll"),c=t.n(r),a=function(){function n(t){o()(this,n),t?this.userAgent=t:e.window&&(this.userAgent=e.window.navigator.userAgent)}return c()(n,[{key:"isFirefox",value:function(){return-1!==this.userAgent.indexOf("Firefox/")}},{key:"notFirefox",value:function(){return!this.isFirefox()}},{key:"isMSEdge",value:function(){return-1!==this.userAgent.indexOf("Edge/")}},{key:"notMSEdge",value:function(){return!this.isMSEdge()}},{key:"isIE",value:function(){return-1!==this.userAgent.indexOf("MSIE")||-1!==this.userAgent.indexOf("Trident/")||this.isMSEdge()}},{key:"notIE",value:function(){return!this.isIE()}},{key:"isChrome",value:function(){return-1!==this.userAgent.indexOf("Chrome/")}},{key:"notChrome",value:function(){return!this.isChrome()}},{key:"isSafari",value:function(){return-1!==this.userAgent.indexOf("Safari/")&&-1===this.userAgent.indexOf("Chrome/")}},{key:"notSafari",value:function(){return!this.isSafari()}},{key:"isPhantom",value:function(){return-1!==this.userAgent.indexOf("PhantomJS")}},{key:"notPhantom",value:function(){return!this.isPhantom()}},{key:"version",value:function(){if(this.isIE()){var e=this.userAgent.match(/MSIE\s([\d.]+)/)||this.userAgent.match(/rv:([\d.]+)/)||this.userAgent.match(/Edge\/([\d.]+)/);return parseInt(e[1])}return this.isChrome()?parseInt(this.userAgent.match(/Chrome\/([\d.]+)/)[1]):this.isSafari()?parseInt(this.userAgent.match(/Version\/([\d.]+)/)[1]):this.isFirefox()?parseInt(this.userAgent.match(/Firefox\/([\d.]+)/)[1]):void 0}},{key:"friendlyName",value:function(){return this.isMSEdge()?"MSEdge":this.isIE()?"IE":this.isChrome()?"Chrome":this.isSafari()?"Safari":this.isFirefox()?"Firefox":void 0}}]),n}()}).call(this,t("fRV1"))},gPFU:function(e,n,t){"use strict";var i={BACKSPACE:8,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,INS:45,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46,META:91};t.d(n,"a",function(){return i})},kw4U:function(e,n,t){"use strict";t.d(n,"b",function(){return u}),t.d(n,"c",function(){return s}),t.d(n,"a",function(){return l});var i=t("Jygk"),o=t.n(i),r=t("5PxA"),c=t("WHVE"),a=t("bQlP");function u(){return Object(a.M)("fd-87.editor.spa")&&(Object(r.a)(),Object(c.a)()),o.a.AJS.Rte.BootstrapManager}function s(){return Object(a.M)("fd-87.editor.spa")&&Object(r.a)(),o.a.AJS.Rte}function l(){return o.a.Confluence.Editor.Autocompleter}},uCC1:function(e,n,t){"use strict";var i=t("2srY"),o=t.n(i),r=t("ktBm"),c=t("RwrK"),a=t("jf+T");var u="mentions",s=t("VrFO"),l=t.n(s),d=t("Y9Ll"),f=t.n(d),h=t("Jygk"),m=t.n(h),p=t("sbiO"),g=t("vqNw"),y="".concat(p.a,"/rest/mentions/latest/service/token"),v=function(){function e(){l()(this,e),this._useSecurityProvider=!0}return f()(e,[{key:"getServiceConfiguration",value:function(){var e=this;return new Promise(function(n){Object(g.a)("About to retrieve the Mentions Service JWT from  ".concat(y)),Object(a.registerToken)({id:u,generator:function(){return new Promise(function(e,t){m.a.AJS.safe.post(y,{},function(t){n({tenantId:t.tenantId}),e(t)}).fail(function(){t()})})}}),e._useSecurityProvider=!0})}},{key:"shouldUseSecurityProvider",value:function(){return this._useSecurityProvider}}]),e}();t.d(n,"a",function(){return O});var k=function(e){var n={ACTIVITY_SERVICE:"activity.atlassian.io",LEGACY_MENTION_SERVICE_URL:"https://api-private.atlassian.com/mentions"}[e];if(!n)throw new Error("Missing cloud property for ".concat(e));return n}("LEGACY_MENTION_SERVICE_URL");function b(e){return{headers:{Authorization:e},omitCredentials:!0}}function C(){return b(Object(a.getToken)(u))}function E(){return Object(a.refreshToken)(u).then(function(e){return Promise.resolve(b(e))})}function O(e,n){var t=new v,i=t.shouldUseSecurityProvider();return new Promise(function(a){var u=o()(n,"spaceId",null);t.getServiceConfiguration().then(function(t){a({mentionResource:new r.c({url:k,productId:"micros-group/confluence",containerId:u,securityProvider:i?C:null,shouldHighlightMention:function(n){return n.id===e},refreshedSecurityProvider:i?E:null}),presenceResource:new c.a({url:"/gateway/api/directory/graphql",cloudId:t.tenantId,productId:"confluence"}),mentionServiceUrl:k,contextIdentifier:{containerId:u,objectId:o()(n,"contentId",null),childObjectId:o()(n,"commentId",null)}})})})}},utTn:function(e,n,t){"use strict";t.d(n,"c",function(){return c}),t.d(n,"b",function(){return a}),t.d(n,"a",function(){return u}),t.d(n,"d",function(){return s});var i=t("Jygk"),o=t.n(i),r=t("M2LZ"),c=function(){r.a.require(["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:resources"]).then(function(){o.a.Confluence.SpaceBlueprint.Dialog.launch()})},a=function(){r.a.require(["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:resources"]).then(function(){o.a.Confluence.Blueprint.loadDialogAndOpenTemplate({})})},u=function(){return Confluence.Link},s=("undefined"!=typeof Confluence&&Confluence,function(){return"undefined"!=typeof Confluence&&Confluence.Binder&&Confluence.Binder.userHover&&Confluence.Binder.userHover()})},vqNw:function(e,n,t){"use strict";function i(e){0}t.d(n,"a",function(){return i})}}]);
//# sourceMappingURL=initialize-editor-plugins.a71b7bb7a06a8b8f7906-v38.js.map