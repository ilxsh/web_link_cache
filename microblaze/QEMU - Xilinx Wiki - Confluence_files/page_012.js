(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{"1KmX":function(e,n,t){var a=t("aOHI"),i=t("7l8p");"string"==typeof a&&(a=[[e.i,a,""]]),e.exports=a.locals||{},e.exports._getContent=function(){return a},e.exports._getCss=function(){return a.toString()},e.exports._insertCss=function(e){return i(a,e)}},F0GY:function(e,n,t){"use strict";var a=Array.isArray,i=Object.keys,r=Object.prototype.hasOwnProperty,l="undefined"!=typeof Element;e.exports=function(e,n){try{return function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){var o,s,c,u=a(n),d=a(t);if(u&&d){if((s=n.length)!=t.length)return!1;for(o=s;0!=o--;)if(!e(n[o],t[o]))return!1;return!0}if(u!=d)return!1;var p=n instanceof Date,f=t instanceof Date;if(p!=f)return!1;if(p&&f)return n.getTime()==t.getTime();var m=n instanceof RegExp,v=t instanceof RegExp;if(m!=v)return!1;if(m&&v)return n.toString()==t.toString();var g=i(n);if((s=g.length)!==i(t).length)return!1;for(o=s;0!=o--;)if(!r.call(t,g[o]))return!1;if(l&&n instanceof Element&&t instanceof Element)return n===t;for(o=s;0!=o--;)if(!("_owner"===(c=g[o])&&n.$$typeof||e(n[c],t[c])))return!1;return!0}return n!=n&&t!=t}(e,n)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},PLaw:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("ERkP")),i=r(t("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){return a.default.createElement(i.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};o.displayName="ChevronDownIcon";var s=o;n.default=s},Zwax:function(e,n,t){"use strict";t.r(n);var a,i,r=t("VrFO"),l=t.n(r),o=t("Y9Ll"),s=t.n(o),c=t("N+ot"),u=t.n(c),d=t("AuHH"),p=t.n(d),f=t("5Yy7"),m=t.n(f),v=t("ERkP"),g=t.n(v),b=t("kFJ8"),h=(t("aWzz"),t("/FQd")),k=t("2srY"),y=t.n(k),E=t("UIW9"),L=t("1Pcy"),w=t.n(L),N=t("KEM+"),_=t.n(N),x=t("7wq/"),D=t.n(x),S=t("L21V"),O=t("KsTJ"),I=t("hMfX"),C=t("PTiB"),j=t("0Dc1"),F=t("WB0a"),K=t("p7S1"),M=t("snXN"),T=t.n(M),A=t("7A9o"),P=t("+CY+");function R(){var e=D()(["\n  cursor: pointer;\n"]);return R=function(){return e},e}function U(){var e=D()(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  a {\n    color: ",";\n  }\n"]);return U=function(){return e},e}var V,Y,q=O.default.div(U(),A.colors.N500),z=O.default.a(R()),B=Object(S.f)({tooltipText:{id:"labels.editLabels.action",defaultMessage:"Add labels",description:"Tooltip text to add/edit labels when hovering over link"}}),H=Object(S.g)((i=a=function(e){function n(){var e,t;l()(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=u()(this,(e=p()(n)).call.apply(e,[this].concat(i))),_()(w()(t),"onClickEditLabelsLink",function(e){e.preventDefault(),t.props.onClickEditLink()}),t}return m()(n,e),s()(n,[{key:"render",value:function(){var e=(0,this.props.intl.formatMessage)(B.tooltipText);return g.a.createElement(q,null,g.a.createElement(P.a,{accelerator:"l",listener:this.onClickEditLabelsLink}),g.a.createElement(z,{title:e,onClick:this.onClickEditLabelsLink},g.a.createElement(T.a,{label:e,size:"medium"})))}}]),n}(v.Component),_()(a,"displayName","EditLabelLink"),i));function Q(){var e=D()(["\n  position: relative;\n"]);return Q=function(){return e},e}function X(){var e=D()(["\n  padding-right: 20px;\n"]);return X=function(){return e},e}function G(){var e=D()(["\n  padding-right: 30px;\n"]);return G=function(){return e},e}function J(){var e=D()(["\n  display: block;\n  float: right;\n  padding-right: 32px;\n"]);return J=function(){return e},e}var W=O.default.div(J()),$=O.default.div(G()),Z=O.default.div(X()),ee=O.default.div(Q()),ne=Object(C.a)()((Y=V=function(e){function n(){var e,t;l()(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return t=u()(this,(e=p()(n)).call.apply(e,[this].concat(i))),_()(w()(t),"state",{isShowingDialog:!1}),_()(w()(t),"showEditLabelDialog",function(){t.setState({isShowingDialog:!0}),t.sendOpenDialogAnalyticsEvent()}),_()(w()(t),"closeEditLabelDialog",function(){t.setState({isShowingDialog:!1})}),t}return m()(n,e),s()(n,[{key:"sendOpenDialogAnalyticsEvent",value:function(){this.props.createAnalyticsEvent({type:"sendTrackEvent",data:{action:"open",actionSubject:"labelsDialog",source:"editLabelLink",attributes:{componentVersion:"v2"}}}).fire()}},{key:"renderLabelList",value:function(){var e=this.props,n=e.spaceKey,t=e.labels,a=e.contentId;if(0===t.length)return g.a.createElement(W,null,g.a.createElement(S.b,{id:"labels.none.message",defaultMessage:"No labels",description:"Message for no labels on content"}));return g.a.createElement($,null,g.a.createElement(I.a,{alignment:this.props.alignment},t.filter(function(e){return!function(e){return"my"===e.prefix&&("favourite"===e.name||"favorite"===e.name)}(e)}).map(function(e){return g.a.createElement(F.a,{key:e.id,id:e.id,prefix:e.prefix,name:e.name,spaceKey:n,contentId:a})})))}},{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.spaceKey,a=e.canUpdate,i=e.isFetching,r=e.labels,l=this.state.isShowingDialog;return g.a.createElement(ee,null,i?null:g.a.createElement("div",{className:"label-list"},g.a.createElement("section",{className:"labels-content"},this.renderLabelList(),a?g.a.createElement(Z,null,g.a.createElement(H,{key:"edit-label",refs:"editLabelLink",onClickEditLink:this.showEditLabelDialog})):null,g.a.createElement(j.a,{subject:"labels",subjectId:n,details:{labelsCount:r.length,userCanUpdate:a}}),l?g.a.createElement(K.a,{contentId:n,spaceKey:t,closeDialog:this.closeEditLabelDialog}):null)))}}]),n}(v.Component),_()(V,"defaultProps",{canUpdate:!1,alignment:""}),Y)),te=t("JByK"),ae=function(e){function n(){return l()(this,n),u()(this,p()(n).apply(this,arguments))}return m()(n,e),s()(n,[{key:"contentOperationsHasUpdateOperation",value:function(e,n){return!!e.length&&Boolean(e.filter(function(e){return e.targetType===n&&"update"===e.operation}).length)}},{key:"render",value:function(){var e=this,n=this.props,t=n.contentId,a=n.spaceKey,i=n.alignment;return g.a.createElement(v.Fragment,null,g.a.createElement(E.a,{subject:"labels",subjectId:t,markBeforeMount:!0}),g.a.createElement(b.d,{query:te.a,variables:{contentId:t,refetchQuery:!1}},function(n){var r=n.data,l=n.loading;if(n.error||!y()(r,"content"))return null;var o=y()(r,"content.nodes[0].operations")||[],s=y()(r,"content.nodes[0].type")||"",c=y()(r,"content.nodes[0].labels.nodes")||[],u=e.contentOperationsHasUpdateOperation(o,s);return g.a.createElement(ne,{labels:c,contentId:t,spaceKey:a,alignment:i,canUpdate:u,isFetching:l})}))}}]),n}(v.Component);ae.displayName="Labels";var ie,re,le,oe,se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LabelsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"operations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"operation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"targetType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"200"}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:363,source:{body:"\n  query LabelsQuery($contentId: ID!) {\n    content(id: $contentId) {\n      nodes {\n        id\n        type\n        operations {\n          operation\n          targetType\n        }\n        labels(first: 200, offset: 0) {\n          count\n          nodes {\n            id\n            label\n            name\n            prefix\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ce=t("O94r"),ue=t.n(ce),de=t("IGvV"),pe=t("bsva"),fe=t("zQXw"),me=t("1KmX"),ve=t.n(me),ge=Object(de.a)(ve.a)(ie=Object(S.g)(ie=function(e){function n(e){var t;return l()(this,n),(t=u()(this,p()(n).call(this,e)))._onClickEditLabelsLink=t._onClickEditLabelsLink.bind(w()(t)),t}return m()(n,e),s()(n,[{key:"_onClickEditLabelsLink",value:function(e){e.preventDefault(),this.props.onClickEditLink()}},{key:"render",value:function(){var e=(0,this.props.intl.formatMessage)({id:"edit.labels"});return g.a.createElement("div",{className:ve.a.editLabel},g.a.createElement("a",{className:"spa-show-labels-dialog-link",href:"#",title:e,onClick:this._onClickEditLabelsLink},g.a.createElement(T.a,{label:e,size:"medium"})))}}]),n}(v.Component))||ie)||ie;ge.displayName="EditLabelLink";var be=Object(de.a)(ve.a)((oe=le=function(e){function n(){var e,t;l()(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=u()(this,(e=p()(n)).call.apply(e,[this].concat(i)))).state={isShowingDialog:!1},t._showEditLabelDialog=t._showEditLabelDialog.bind(w()(t)),t._closeEditLabelDialog=t._closeEditLabelDialog.bind(w()(t)),t}return m()(n,e),s()(n,[{key:"_showEditLabelDialog",value:function(){this.setState({isShowingDialog:!0})}},{key:"_closeEditLabelDialog",value:function(){this.setState({isShowingDialog:!1})}},{key:"_renderLabelList",value:function(){var e=this.props,n=e.spaceKey,t=e.labels,a=e.contentId;if(Object(fe.c)(t))return g.a.createElement("div",{className:ue()(ve.a.labelNone,"no-labels-message")},g.a.createElement(S.b,{id:"labels.none"}));return g.a.createElement("div",{style:{paddingRight:"30px"}},g.a.createElement(I.a,{alignment:this.props.alignment},t.filter(function(e){return!function(e){return"my"===e.prefix&&("favourite"===e.name||"favorite"===e.name)}(e)}).map(function(e){return g.a.createElement(pe.g,{key:e.id,id:e.id,prefix:e.prefix,name:e.name,spaceKey:n,contentId:a})})))}},{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.spaceKey,a=e.canUpdate,i=e.isFetching,r=this.state.isShowingDialog;return g.a.createElement("div",{className:ue()(ve.a.container,"labels-section-content","content-column")},i?null:g.a.createElement("div",{className:"label-list"},g.a.createElement("section",{className:"labels-content"},this._renderLabelList(),a?g.a.createElement("div",{style:{paddingRight:"20px"}},g.a.createElement(ge,{key:"edit-label",refs:"editLabelLink",onClickEditLink:this._showEditLabelDialog})):null,r?g.a.createElement(pe.b,{contentId:n,spaceKey:t,closeDialog:this._closeEditLabelDialog}):null)))}}]),n}(v.Component),_()(le,"defaultProps",{canUpdate:!1,alignment:""}),re=oe))||re;t.d(n,"default",function(){return he});ae.displayName="LabelsV2";var he=function(e){function n(){return l()(this,n),u()(this,p()(n).apply(this,arguments))}return m()(n,e),s()(n,[{key:"contentOperationsHasUpdateOperation",value:function(e,n){return!(!e||!e.length)&&Boolean(e.filter(function(e){return e.targetType===n&&"update"===e.operation}).length)}},{key:"render",value:function(){var e=this,n=this.props,t=n.contentId,a=n.spaceKey,i=n.alignment;return g.a.createElement(h.a,null,function(n){var r=n.featureFlags;return g.a.createElement(b.d,{query:se,variables:{contentId:t}},function(n){var l=n.data,o=n.loading;if(n.error||!l||!l.content||!l.content.nodes||0===l.content.nodes.length||!l.content.nodes[0].labels||!l.content.nodes[0].labels.nodes)return null;var s=l.content.nodes[0].operations,c=l.content.nodes[0].labels.nodes,u=l.content.nodes[0].type,d=e.contentOperationsHasUpdateOperation(s,u);return r["confluence.frontend.labels.v2"]?g.a.createElement(ae,{contentId:t,spaceKey:a,alignment:i}):g.a.createElement(be,{labels:c,contentId:t,spaceKey:a,alignment:i,canUpdate:!!d,isFetching:o})})})}}]),n}(v.Component);he.displayName="LabelsGraphql"},aOHI:function(e,n,t){(n=e.exports=t("RDo7")(!1)).push([e.i,"#labels-section{position:relative}#labels-section .loader{width:16px;height:16px;position:relative;float:right}.Labels_container_1YZ{position:relative}.Labels_labelNone_36Y{display:block;float:right;padding-right:32px}.Labels_editLabel_2Nx{position:absolute;top:0;right:0}.Labels_editLabel_2Nx a{color:#42526e}#likes-and-labels-container{overflow:hidden;margin:10px 0;padding:10px 0;clear:both}#likes-and-labels-container #react-labels-section{float:right;width:48%}.show-labels-editor{color:#707070}",""]),n.locals={container:"Labels_container_1YZ",labelNone:"Labels_labelNone_36Y",editLabel:"Labels_editLabel_2Nx"}},hMfX:function(e,n,t){"use strict";var a=t("Rhu4"),i=t.n(a),r=t("aq5/"),l=t.n(r),o=t("4Mt5"),s=t.n(o),c=t("7xyS"),u=t.n(c),d=t("k2Qk"),p=t.n(d),f=t("ERkP"),m=t.n(f),v=t("Fxww"),g=t.n(v),b=t("KsTJ"),h=g()(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n  width: 100%;\n"],["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: ",";\n  width: 100%;\n"]),k=b.default.div(h,function(e){return"flex-"+e.justify}),y=function(e){function n(){return l()(this,n),u()(this,(n.__proto__||i()(n)).apply(this,arguments))}return p()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.alignment,t=e.children;return m.a.createElement(k,{justify:n},t)}}]),n}(f.PureComponent);y.defaultProps={alignment:"start"};var E=y;t.d(n,"a",function(){return E})},k689:function(e,n,t){"use strict";var a=t("RR8A"),i=t("pd6y");n.a=Object(i.a)(a.b)},snXN:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("ERkP")),i=r(t("4KTy"));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){return a.default.createElement(i.default,l({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M4.02 19.23a1 1 0 0 0 1.18 1.18l3.81-.78-4.21-4.21-.78 3.81zM19.844 6.707l-2.12-2.122A1.997 1.997 0 0 0 16.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 0 0 0-2.828z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};o.displayName="EditFilledIcon";var s=o;n.default=s}}]);
//# sourceMappingURL=page.labels.edb472ec0b1492147d41-v38.js.map