(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"17lG":function(e,n,t){"use strict";t.d(n,"b",function(){return i}),t.d(n,"a",function(){return c});var r=t("Jygk"),o=t.n(r),a=t("k8+f");function i(e){try{return o.a.require(e),!0}catch(e){return!1}}function c(e,n){e.listener;var t=e.module,r=e.interval,o=void 0===r?250:r;Object(a.a)({listener:"wait-for-required-module ".concat(t),globalProperty:"require"},function(){if(i(t))n();else var e=setInterval(function(){i(t)&&(clearInterval(e),n())},o)})}},"3ac5":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t("TOvH"),o=t("RZKf"),a=t("HA9u"),i=t("hd8a"),c=t("7xNx"),l=t("rQmM"),u=t("iLhO");function s(){a.a.preload(),r.a.preload(),o.a.preload(),i.a.preload(),c.a.preload(),l.a.preload(),u.b.preload(),u.a.preload()}},"681K":function(e,n,t){"use strict";t.d(n,"a",function(){return L});var r=t("VrFO"),o=t.n(r),a=t("Y9Ll"),i=t.n(a),c=t("N+ot"),l=t.n(c),u=t("AuHH"),s=t.n(u),d=t("1Pcy"),p=t.n(d),f=t("5Yy7"),g=t.n(f),y=t("KEM+"),h=t.n(y),m=(t("aWzz"),t("ERkP")),v=t.n(m),D=t("uDfI"),O=t("Jygk"),C=t.n(O),b=t("hqKg"),P=t("lZoD"),E=t("M2LZ"),S=t("3ac5"),_=t("bfgX"),k=t("f6W2"),M=t("EvJo"),R=t("k8+f"),I=t("17lG"),w=t("0Wx+"),K=["wrc!com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources","wrc!create-content"],x=function(e){function n(){var e,t;o()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=l()(this,(e=s()(n)).call.apply(e,[this].concat(a))),h()(p()(t),"isOpening",!1),h()(p()(t),"forceReloadInNextOpen",!0),h()(p()(t),"_setOpenState",function(e){return e?t._open():t._close()}),h()(p()(t),"_close",function(e){if("function"==typeof t._confluenceDialogClose){try{t._confluenceDialogClose()}catch(e){0}t._confluenceDialogClose=null}Object(_.c)("remove.dialog",t._afterDialogClosed),t.props.onClose(e)}),h()(p()(t),"_afterDialogClosed",function(e,n){"create-dialog"===n.dialog.id&&(t._confluenceDialogClose=null,t._close(e))}),h()(p()(t),"_isActive",function(){return!!C.a.document.querySelector("#create-dialog")}),h()(p()(t),"_open",function(){if(!t._isActive()&&!t.isOpening){var e=t.props,n=e.blueprint,r=e.spaceKey,o=e.parentPageId;n&&(t.isOpening=!0,E.a.require(K).then(function(){Object(I.a)({listener:"PseudoWizardDialog",module:"ac/confluence/style/link-style-css"},function(){var e=C.a.require("ac/confluence/style/link-style-css");e&&"function"==typeof e.addLinkTags&&e.addLinkTags()}),Object(R.a)({listener:"PseudoWizardDialog",globalProperty:"Confluence.Blueprint.loadDialogAndOpenTemplate"},function(){var e=n.contentBlueprintId,a=n.templateId,i=n.itemModuleCompleteKey;C.a.Confluence.Blueprint.loadDialogAndOpenTemplate({spaceKey:r,contentBlueprintId:e,templateId:a,initContext:{itemModuleCompleteKey:i,parentPageId:"no-parent-page"===o?null:o}}),t.isOpening=!1,t.forceReloadInNextOpen=!1})}))}}),t}return g()(n,e),i()(n,[{key:"componentDidMount",value:function(){Object(_.a)("remove.dialog",this._afterDialogClosed),this.forceReloadInNextOpen=!0,this.props.isSuperbatchLoaded&&this._setOpenState(this.props.open)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.spaceKey!==e.spaceKey&&(this.forceReloadInNextOpen=!0),e.isSuperbatchLoaded&&this._setOpenState(e.open),e.open&&Object(S.a)()}},{key:"render",value:function(){return null}}]),n}(m.PureComponent);h()(x,"defaultProps",{onClose:function(){}}),h()(x,"displayName","PseudoWizardDialog"),x.displayName="PseudoWizardCreateDialogComponent";var A=Object(b.createSelector)(k.d,function(e){return e.webResources&&e.webResources.contexts?e.webResources.contexts:{}},function(e,n){return!e||function(e){return!!e&&e.get("state")===w.a.LOADED}(n.get&&n.get("_super"))}),N=Object(D.connect)(function(e){return{isSuperbatchLoaded:A(e)}})(x),L=function(){return v.a.createElement(P.c,{to:[M.a],key:"create-page-state-container"},function(e){return e.state.createModal||e.setCreateModal(function(e){return v.a.createElement(N,e)}),null})};L.displayName="PseudoWizardCreateDialog",L.displayName="PseudoWizardDialog"},"7xNx":function(e,n,t){"use strict";var r=t("x+QU"),o=t.n(r)()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(4),t.e(5),t.e(371)]).then(t.bind(null,"R0Hm"))},loading:function(){return null}});n.a=o},EvJo:function(e,n,t){"use strict";t.d(n,"a",function(){return D});var r=t("tQaH"),o=t.n(r),a=t("97Jx"),i=t.n(a),c=t("VrFO"),l=t.n(c),u=t("N+ot"),s=t.n(u),d=t("AuHH"),p=t.n(d),f=t("1Pcy"),g=t.n(f),y=t("5Yy7"),h=t.n(y),m=t("KEM+"),v=t.n(m),D=(t("ERkP"),function(e){function n(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l()(this,n),e=s()(this,p()(n).call(this,t)),v()(g()(e),"open",function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.setState({openDrawer:n,contentId:t})}),v()(g()(e),"close",function(){return e.setState({openDrawer:null,contentId:null})}),v()(g()(e),"setDrawerState",function(n){var t=i()({},n);return e.setState(o()({},t))}),v()(g()(e),"setContentId",function(n){return e.setState({contentId:n})}),v()(g()(e),"getContentId",function(){return e.state.contentId}),v()(g()(e),"clearContentId",function(){return e.setState({contentId:null})}),v()(g()(e),"setSpaceKey",function(n){return e.setState({spaceKey:n})}),v()(g()(e),"setSpaceRestriction",function(n){return e.setState({spaceRestricted:n})}),v()(g()(e),"getSpaceRestriction",function(){return e.state.spaceRestricted}),v()(g()(e),"getSpaceKey",function(){return e.state.spaceKey}),v()(g()(e),"setCreateModal",function(n){return e.setState({createModal:n})}),v()(g()(e),"getCreateModal",function(n){return e.state.createModal(n)}),v()(g()(e),"clearSpaceKey",function(){return e.setState({spaceKey:null})}),e.state={openDrawer:t.openDrawer,contentId:t.contentId,spaceKey:t.spaceKey,createModal:t.createModal,spaceRestricted:t.spaceRestricted},e}return h()(n,e),n}(t("lZoD").a))},HA9u:function(e,n,t){"use strict";var r=t("97Jx"),o=t.n(r),a=t("VtSi"),i=t.n(a),c=t("cbiG"),l=t.n(c),u=t("T0aG"),s=t.n(u),d=t("ERkP"),p=t.n(d),f=(t("aWzz"),t("x+QU")),g=t.n(f),y=t("7yUP"),h=t("CSJ9"),m=t("Tl5U"),v=t("VrFO"),D=t.n(v),O=t("Y9Ll"),C=t.n(O),b=t("N+ot"),P=t.n(b),E=t("AuHH"),S=t.n(E),_=t("1Pcy"),k=t.n(_),M=t("5Yy7"),R=t.n(M),I=t("KEM+"),w=t.n(I),K=function(e){function n(){var e,t;D()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=P()(this,(e=S()(n)).call.apply(e,[this].concat(o))),w()(k()(t),"_renderFuncChildrenWithLoadedData",function(e){var n=t.props,r=n.children,o=n.editorModule,a=n.SynchronyProvider,i=n.featuredMacros;return r({Editor:o.Editor,EmojiResource:o.EmojiResource,ToolbarFeedback:o.ToolbarFeedback,WithHelpTrigger:o.WithHelpTrigger,editorActions:e,SynchronyProvider:a,featuredMacros:i})}),t}return R()(n,e),C()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.editorModule,r=t.EditorContext,o=t.WithEditorActions;return"function"!=typeof n?null:p.a.createElement(r,null,p.a.createElement(o,{render:this._renderFuncChildrenWithLoadedData}))}}]),n}(d.PureComponent);w()(K,"displayName","EditorLoader"),K.displayName="EditorLoader";n.a=g.a.Map({loader:{editorModule:function(){var e=l()(i.a.mark(function e(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Object(y.d)("".concat("confluence.fabric.editor.download",".start")),e.next=3,Promise.all([t.e(27),t.e(13),t.e(2),t.e(1),t.e(0),t.e(376)]).then(t.bind(null,"POf1"));case 3:return n=e.sent,Object(y.d)("".concat("confluence.fabric.editor.download",".end")),e.abrupt("return",n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),synchronyModule:function(){return Promise.all([t.e(1),t.e(0),t.e(375)]).then(t.bind(null,"/VC6"))},featuredMacros:function(){return Object(m.c)()}},loading:function(e){return s()(e.isLoading)?p.a.createElement(h.a,{size:"medium"}):null},render:function(e,n){var t=e.editorModule,r=e.synchronyModule,a=e.featuredMacros;return p.a.createElement(K,o()({},n,{editorModule:t,SynchronyProvider:r.Provider,featuredMacros:a}))}})},RZKf:function(e,n,t){"use strict";var r=t("x+QU"),o=t.n(r);n.a=o()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(373)]).then(t.bind(null,"ktcL"))},loading:function(){return null}})},YXey:function(e,n,t){"use strict";var r=t("97Jx"),o=t.n(r),a=t("VrFO"),i=t.n(a),c=t("Y9Ll"),l=t.n(c),u=t("N+ot"),s=t.n(u),d=t("AuHH"),p=t.n(d),f=t("1Pcy"),g=t.n(f),y=t("5Yy7"),h=t.n(y),m=t("KEM+"),v=t.n(m),D=t("tQaH"),O=t.n(D),C=t("EfWO"),b=t.n(C),P=t("ERkP"),E=t.n(P),S=(t("aWzz"),t("+mzV")),_=t("qdfj"),k=t("Clud"),M=function(e){function n(){return i()(this,n),s()(this,p()(n).apply(this,arguments))}return h()(n,e),l()(n,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.queryMatcher;return E.a.createElement(k.b.Consumer,null,function(e){var r=e.getQueryParams;return n&&t(r())?E.a.createElement(P.Fragment,null,n):null})}}]),n}(P.Component);M.displayName="QueryRenderer";var R=t("KuJZ");function I(e){var n=e.children,t=e.name;return E.a.createElement(R.a.Provider,{value:t},n)}I.displayName="Experience";var w=t("3VMZ"),K=t("L+/v"),x=t("ZQ7y"),A=function(e){function n(){var e,t;i()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=s()(this,(e=p()(n)).call.apply(e,[this].concat(o))),v()(g()(t),"state",{isCreateDialogOpen:!1,shouldSuppressDialog:!1}),v()(g()(t),"closeDialog",function(){(0,t.props.setQueryParams)({createDialog:null})}),t}return h()(n,e),l()(n,[{key:"componentWillUnmount",value:function(){var e=this.props,n=e.getQueryParams,t=e.spaceKey,r=e.replace;if(this.state.isCreateDialogOpen&&n().ccProxyTarget){var o=function(e,n,t){if(!/.*\/viewpreviousversions\.action/.test(e))return{url:e,query:n};var r=O()({},n);return delete r.pageId,{url:"/wiki/spaces/".concat(t,"/history/").concat(n.pageId),query:r}}(window.location.pathname,n(),t);delete o.query.createDialog,delete o.query.ccProxyTarget,r(b.a.format({origin:window.location.origin,pathname:o.url,query:o.query}))}}},{key:"render",value:function(){var e=this.state,n=e.isCreateDialogOpen,t=e.shouldSuppressDialog;return n?E.a.createElement(x.a,{key:"create",open:n,onClose:this.closeDialog,shouldSuppressDialog:t}):null}}],[{key:"getDerivedStateFromProps",value:function(e){var n=(0,e.getQueryParams)(),t=n.createDialog,r=n.createDialogSpaceKey,o=n.createDialogBlueprintId,a=n.createDialogTemplateId;return{isCreateDialogOpen:"true"===t,shouldSuppressDialog:!(!r||!o&&!a)}}}]),n}(P.Component);A.displayName="CreateDialogQueryRendererComponent";var N=function(e){var n=e.createDialog;return["true","close"].includes(n)},L=Object(_.a)(function(e){return E.a.createElement(M,{queryMatcher:N},E.a.createElement(I,{name:w.a.CREATE_PAGE},E.a.createElement(K.a,{modal:{onClose:function(){return e.setQueryParams({createDialog:null})}}},E.a.createElement(S.a.Consumer,null,function(n){var t=n.spaceKey;return E.a.createElement(A,o()({},e,{spaceKey:t}))}))))});t.d(n,"a",function(){return L})},ZQ7y:function(e,n,t){"use strict";var r=t("uDfI"),o=t("f6W2"),a=t("2BEd"),i=t("VrFO"),c=t.n(i),l=t("Y9Ll"),u=t.n(l),s=t("N+ot"),d=t.n(s),p=t("AuHH"),f=t.n(p),g=t("1Pcy"),y=t.n(g),h=t("5Yy7"),m=t.n(h),v=t("KEM+"),D=t.n(v),O=(t("aWzz"),t("ERkP")),C=t("Jygk"),b=t.n(C),P=t("M2LZ"),E=t("3ac5"),S=t("bfgX"),_=t("hpu0"),k=t("3VMZ"),M=t("k8+f"),R=t("17lG"),I=t("lZ+S"),w=t("jqY8"),K=function(e){function n(){var e,t;c()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=d()(this,(e=f()(n)).call.apply(e,[this].concat(o))),D()(y()(t),"isOpening",!1),D()(y()(t),"forceReloadInNextOpen",!0),D()(y()(t),"_setOpenState",function(e){e?t._open():t._close()}),D()(y()(t),"_close",function(){if("function"==typeof t._confluenceDialogClose){try{t._confluenceDialogClose()}catch(e){0}t._confluenceDialogClose=null}}),D()(y()(t),"_afterDialogClosed",function(e,n){"create-dialog"===n.dialog.id&&(t._confluenceDialogClose=null,t._close(e),t.props.onClose())}),D()(y()(t),"_isActive",function(){return!!b.a.document.querySelector("#create-dialog")}),D()(y()(t),"_open",function(){t._isActive()||t.isOpening||(t.isOpening=!0,P.a.require(I.a.CREATE_DIALOG).then(function(){Object(R.a)({listener:"PseudoCreateDialog",module:"ac/confluence/style/link-style-css"},function(){var e=Object(w.d)("ac/confluence/style/link-style-css");e&&"function"==typeof e.addLinkTags&&e.addLinkTags()}),t.props.shouldSuppressDialog||Object(M.a)({listener:"PseudoCreateDialog",globalProperty:"Confluence.Blueprint.loadDialog"},function(){b.a.Confluence.Blueprint.loadDialog({triggerSrc:"create-page",forceReload:t.forceReloadInNextOpen}).then(function(e){t.isOpening=!1,t.forceReloadInNextOpen=!1,t._confluenceDialogClose=e.closeDialog,Object(_.a)().succeed({name:k.a.CREATE_PAGE_LOAD_DIALOG})})})}))}),t}return m()(n,e),u()(n,[{key:"componentDidMount",value:function(){Object(S.a)("remove.dialog",this._afterDialogClosed),this.forceReloadInNextOpen=!0,this.props.isSuperbatchLoaded&&this._setOpenState(this.props.open)}},{key:"componentWillUnmount",value:function(){this.props.open&&this._close(),Object(S.c)("remove.dialog",this._afterDialogClosed)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.spaceKey!==e.spaceKey&&(this.forceReloadInNextOpen=!0),e.isSuperbatchLoaded&&this._setOpenState(e.open),e.open&&Object(E.a)()}},{key:"render",value:function(){return null}}]),n}(O.PureComponent);D()(K,"defaultProps",{onClose:function(){}}),D()(K,"displayName","PseudoCreateDialog"),K.displayName="PseudoCreateDialog";n.a=Object(r.connect)(function(e){return{spaceKey:Object(o.d)(e)?Object(o.c)(e).spaceKey:e.meta.get("space-key")||null,isSuperbatchLoaded:Object(a.a)(e)}})(K)},rQmM:function(e,n,t){"use strict";var r=t("x+QU"),o=t.n(r);n.a=o()({loader:function(){return Promise.all([t.e(2),t.e(1),t.e(0),t.e(370)]).then(t.bind(null,"goqy"))},loading:function(){return null}})}}]);
//# sourceMappingURL=navigation-v2-integration~resizable-split-panel.7868c42aeadc36bc4e49-v38.js.map