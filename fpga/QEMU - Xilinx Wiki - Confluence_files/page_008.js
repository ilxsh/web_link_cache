(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{"/mVA":function(e,n,t){"use strict";t("ERkP");var a=t("x+QU"),i=t.n(a)()({loader:function(){return Promise.all([t.e(1),t.e(0),t.e(25),t.e(106)]).then(t.bind(null,"pN4w"))},loading:function(){return null}});n.a=i},"1KmX":function(e,n,t){var a=t("aOHI"),i=t("7l8p");"string"==typeof a&&(a=[[e.i,a,""]]),e.exports=a.locals||{},e.exports._getContent=function(){return a},e.exports._getCss=function(){return a.toString()},e.exports._insertCss=function(e){return i(a,e)}},Bl01:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t("ERkP")),i=l(t("4KTy"));function l(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=function(e){return a.default.createElement(i.default,r({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M11.433 5.428l-4.207.6A2 2 0 0 0 5.53 7.727l-.6 4.207a1 1 0 0 0 .281.849l6.895 6.894a.999.999 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L12.282 5.71a.998.998 0 0 0-.849-.283m-.647 5.858A1.666 1.666 0 1 1 8.43 8.929a1.666 1.666 0 0 1 2.357 2.357" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};o.displayName="LabelIcon";var s=o;n.default=s},Zwax:function(e,n,t){"use strict";t.r(n);var a,i,l=t("VrFO"),r=t.n(l),o=t("Y9Ll"),s=t.n(o),c=t("N+ot"),d=t.n(c),u=t("AuHH"),p=t.n(u),m=t("5Yy7"),f=t.n(m),v=t("ERkP"),b=t.n(v),g=t("kFJ8"),k=(t("aWzz"),t("/FQd")),h=t("2srY"),y=t.n(h),E=t("UIW9"),L=t("1Pcy"),N=t.n(L),w=t("KEM+"),D=t.n(w),_=t("7wq/"),S=t.n(_),x=t("L21V"),I=t("KsTJ"),O=t("hMfX"),C=t("PTiB"),F=t("0Dc1"),K=t("WB0a"),A=t("p7S1"),j=t("Bl01"),T=t.n(j),U=t("7A9o"),V=t("+CY+");function M(){var e=S()(["\n  cursor: pointer;\n"]);return M=function(){return e},e}function P(){var e=S()(["\n  position: absolute;\n  top: 0;\n  right: 0;\n\n  a {\n    color: ",";\n  }\n"]);return P=function(){return e},e}var B,H,Y=I.default.div(P(),U.colors.N500),q=I.default.a(M()),Q=Object(x.f)({tooltipText:{id:"labels.editLabels.action",defaultMessage:"Add labels",description:"Tooltip text to add/edit labels when hovering over link"}}),R=Object(x.g)((i=a=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=d()(this,(e=p()(n)).call.apply(e,[this].concat(i))),D()(N()(t),"onClickEditLabelsLink",function(e){e.preventDefault(),t.props.onClickEditLink()}),t}return f()(n,e),s()(n,[{key:"render",value:function(){var e=(0,this.props.intl.formatMessage)(Q.tooltipText);return b.a.createElement(Y,null,b.a.createElement(V.a,{accelerator:"l",listener:this.onClickEditLabelsLink}),b.a.createElement(q,{title:e,onClick:this.onClickEditLabelsLink},b.a.createElement(T.a,{label:e,size:"medium"})))}}]),n}(v.Component),D()(a,"displayName","EditLabelLink"),i));function G(){var e=S()(["\n  position: relative;\n"]);return G=function(){return e},e}function J(){var e=S()(["\n  padding-right: 20px;\n"]);return J=function(){return e},e}function z(){var e=S()(["\n  padding-right: 30px;\n"]);return z=function(){return e},e}function W(){var e=S()(["\n  display: block;\n  float: right;\n  padding-right: 32px;\n  padding-top: 4px;\n"]);return W=function(){return e},e}var X=I.default.div(W()),Z=I.default.div(z()),$=I.default.div(J()),ee=I.default.div(G()),ne=Object(C.a)()((H=B=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=d()(this,(e=p()(n)).call.apply(e,[this].concat(i))),D()(N()(t),"state",{isShowingDialog:!1}),D()(N()(t),"showEditLabelDialog",function(){t.setState({isShowingDialog:!0}),t.sendOpenDialogAnalyticsEvent()}),D()(N()(t),"closeEditLabelDialog",function(){t.setState({isShowingDialog:!1})}),t}return f()(n,e),s()(n,[{key:"sendOpenDialogAnalyticsEvent",value:function(){this.props.createAnalyticsEvent({type:"sendTrackEvent",data:{action:"open",actionSubject:"labelsDialog",source:"editLabelLink",attributes:{componentVersion:"v2"}}}).fire()}},{key:"renderLabelList",value:function(){var e=this.props,n=e.spaceKey,t=e.labels,a=e.contentId;if(0===t.length)return b.a.createElement(X,null,b.a.createElement(x.b,{id:"labels.none.message",defaultMessage:"No labels",description:"Message for no labels on content"}));return b.a.createElement(Z,null,b.a.createElement(O.a,{alignment:this.props.alignment},t.filter(function(e){return!function(e){return"my"===e.prefix&&("favourite"===e.name||"favorite"===e.name)}(e)}).map(function(e){return b.a.createElement(K.a,{key:e.id,id:e.id,prefix:e.prefix,name:e.name,spaceKey:n,contentId:a})})))}},{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.spaceKey,a=e.canUpdate,i=e.isFetching,l=e.labels,r=this.state.isShowingDialog;return b.a.createElement(ee,null,i?null:b.a.createElement("div",{className:"label-list"},b.a.createElement("section",{className:"labels-content"},this.renderLabelList(),a?b.a.createElement($,null,b.a.createElement(R,{key:"edit-label",refs:"editLabelLink",onClickEditLink:this.showEditLabelDialog})):null,b.a.createElement(F.a,{subject:"labels",details:{labelsCount:l.length,userCanUpdate:a}}),r?b.a.createElement(A.a,{contentId:n,spaceKey:t,closeDialog:this.closeEditLabelDialog}):null)))}}]),n}(v.Component),D()(B,"defaultProps",{canUpdate:!1,alignment:""}),H)),te=t("JByK"),ae=function(e){function n(){return r()(this,n),d()(this,p()(n).apply(this,arguments))}return f()(n,e),s()(n,[{key:"contentOperationsHasUpdateOperation",value:function(e,n){return!!e.length&&Boolean(e.filter(function(e){return e.targetType===n&&"update"===e.operation}).length)}},{key:"render",value:function(){var e=this,n=this.props,t=n.contentId,a=n.spaceKey,i=n.alignment;return b.a.createElement(v.Fragment,null,b.a.createElement(E.a,{subject:"labels",markBeforeMount:!0}),b.a.createElement(g.d,{query:te.a,variables:{contentId:t,refetchQuery:!1}},function(n){var l=n.data,r=n.loading;if(n.error||!y()(l,"content"))return null;var o=y()(l,"content.nodes[0].operations")||[],s=y()(l,"content.nodes[0].type")||"",c=y()(l,"content.nodes[0].labels.nodes")||[],d=e.contentOperationsHasUpdateOperation(o,s);return b.a.createElement(ne,{labels:c,contentId:t,spaceKey:a,alignment:i,canUpdate:d,isFetching:r})}))}}]),n}(v.Component);ae.displayName="Labels";var ie,le,re,oe,se={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LabelsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"operations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"operation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"targetType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"200"}},{kind:"Argument",name:{kind:"Name",value:"offset"},value:{kind:"IntValue",value:"0"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:363,source:{body:"\n  query LabelsQuery($contentId: ID!) {\n    content(id: $contentId) {\n      nodes {\n        id\n        type\n        operations {\n          operation\n          targetType\n        }\n        labels(first: 200, offset: 0) {\n          count\n          nodes {\n            id\n            label\n            name\n            prefix\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ce=t("O94r"),de=t.n(ce),ue=t("IGvV"),pe=t("hGWn"),me=t("/mVA"),fe=t("/4nh"),ve=t("1KmX"),be=t.n(ve),ge=t("snXN"),ke=t.n(ge),he=Object(ue.a)(be.a)(ie=Object(x.g)(ie=function(e){function n(e){var t;return r()(this,n),(t=d()(this,p()(n).call(this,e)))._onClickEditLabelsLink=t._onClickEditLabelsLink.bind(N()(t)),t}return f()(n,e),s()(n,[{key:"_onClickEditLabelsLink",value:function(e){e.preventDefault(),this.props.onClickEditLink()}},{key:"render",value:function(){var e=(0,this.props.intl.formatMessage)({id:"edit.labels"});return b.a.createElement("div",{className:be.a.editLabel},b.a.createElement("a",{className:"spa-show-labels-dialog-link",href:"#",title:e,onClick:this._onClickEditLabelsLink},b.a.createElement(ke.a,{label:e,size:"medium"})))}}]),n}(v.Component))||ie)||ie;he.displayName="EditLabelLink";var ye=Object(ue.a)(be.a)((oe=re=function(e){function n(){var e,t;r()(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=d()(this,(e=p()(n)).call.apply(e,[this].concat(i)))).state={isShowingDialog:!1},t._showEditLabelDialog=t._showEditLabelDialog.bind(N()(t)),t._closeEditLabelDialog=t._closeEditLabelDialog.bind(N()(t)),t}return f()(n,e),s()(n,[{key:"_showEditLabelDialog",value:function(){this.setState({isShowingDialog:!0})}},{key:"_closeEditLabelDialog",value:function(){this.setState({isShowingDialog:!1})}},{key:"_renderLabelList",value:function(){var e=this.props,n=e.spaceKey,t=e.labels,a=e.contentId;if(Object(fe.c)(t))return b.a.createElement("div",{className:de()(be.a.labelNone,"no-labels-message")},b.a.createElement(x.b,{id:"labels.none"}));return b.a.createElement("div",{style:{paddingRight:"30px"}},b.a.createElement(O.a,{alignment:this.props.alignment},t.filter(function(e){return!function(e){return"my"===e.prefix&&("favourite"===e.name||"favorite"===e.name)}(e)}).map(function(e){return b.a.createElement(pe.a,{key:e.id,id:e.id,prefix:e.prefix,name:e.name,spaceKey:n,contentId:a})})))}},{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.spaceKey,a=e.canUpdate,i=e.isFetching,l=this.state.isShowingDialog;return b.a.createElement("div",{className:de()(be.a.container,"labels-section-content","content-column")},i?null:b.a.createElement("div",{className:"label-list"},b.a.createElement("section",{className:"labels-content"},this._renderLabelList(),a?b.a.createElement("div",{style:{paddingRight:"20px"}},b.a.createElement(he,{key:"edit-label",refs:"editLabelLink",onClickEditLink:this._showEditLabelDialog})):null,l?b.a.createElement(me.a,{contentId:n,spaceKey:t,closeDialog:this._closeEditLabelDialog}):null)))}}]),n}(v.Component),D()(re,"defaultProps",{canUpdate:!1,alignment:""}),le=oe))||le;t.d(n,"default",function(){return Ee});ae.displayName="LabelsV2";var Ee=function(e){function n(){return r()(this,n),d()(this,p()(n).apply(this,arguments))}return f()(n,e),s()(n,[{key:"contentOperationsHasUpdateOperation",value:function(e,n){return!(!e||!e.length)&&Boolean(e.filter(function(e){return e.targetType===n&&"update"===e.operation}).length)}},{key:"render",value:function(){var e=this,n=this.props,t=n.contentId,a=n.spaceKey,i=n.alignment;return b.a.createElement(k.a,null,function(n){var l=n.featureFlags;return b.a.createElement(g.d,{query:se,variables:{contentId:t}},function(n){var r=n.data,o=n.loading;if(n.error||!r||!r.content||!r.content.nodes||0===r.content.nodes.length||!r.content.nodes[0].labels||!r.content.nodes[0].labels.nodes)return null;var s=r.content.nodes[0].operations,c=r.content.nodes[0].labels.nodes,d=r.content.nodes[0].type,u=e.contentOperationsHasUpdateOperation(s,d);return l["confluence.frontend.labels.v2"]?b.a.createElement(ae,{contentId:t,spaceKey:a,alignment:i}):b.a.createElement(ye,{labels:c,contentId:t,spaceKey:a,alignment:i,canUpdate:!!u,isFetching:o})})})}}]),n}(v.Component);Ee.displayName="LabelsGraphql"},aOHI:function(e,n,t){(n=e.exports=t("RDo7")(!1)).push([e.i,"#labels-section{position:relative}#labels-section .loader{width:16px;height:16px;position:relative;float:right}.Labels_container_1YZ{position:relative}.Labels_labelNone_36Y{display:block;float:right;padding-right:32px}.Labels_editLabel_2Nx{position:absolute;top:0;right:0}.Labels_editLabel_2Nx a{color:#42526e}#likes-and-labels-container{overflow:hidden;margin:10px 0;padding:10px 0;clear:both}#likes-and-labels-container #react-labels-section{float:right;width:48%}.show-labels-editor{color:#707070}",""]),n.locals={container:"Labels_container_1YZ",labelNone:"Labels_labelNone_36Y",editLabel:"Labels_editLabel_2Nx"}}}]);
//# sourceMappingURL=page.labels.544d4136570841fa26bf-v38.js.map