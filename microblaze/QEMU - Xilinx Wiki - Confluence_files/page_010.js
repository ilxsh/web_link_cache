(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"+EFR":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t("T0aG"),i=t.n(a),l=t("kVkH"),r=t.n(l),o=/\[messageKey=((?:\w|\.)+){1},\s*args=\[((?:.)+)?\]\]\]/;function s(e){var n="",t="",a=[];if("object"===i()(e)&&e.message&&(n=e.message),"string"==typeof n&&n.indexOf("messageKey")>=0&&o.test(n)){var l=o.exec(n);t=l[1];var s=l[2]?l[2].split(","):"";s&&(a[0]=r()(s),a[1]=(s||[]).slice(1).join(", "))}return{message:n,messageKey:t,args:a}}},JByK:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LabelsQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"refetchQuery"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"type"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"operations"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"skip"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"refetchQuery"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"operation"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"targetType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:390,source:{body:"\n  query LabelsQuery($contentId: ID!, $refetchQuery: Boolean!) {\n    content(id: $contentId) {\n      nodes {\n        id\n        type\n        operations @skip(if: $refetchQuery) {\n          operation\n          targetType\n        }\n        labels {\n          count\n          nodes {\n            id\n            label\n            name\n            prefix\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}}},WB0a:function(e,n,t){"use strict";var a,i,l,r,o=t("VrFO"),s=t.n(o),d=t("Y9Ll"),c=t.n(d),u=t("N+ot"),m=t.n(u),p=t("AuHH"),v=t.n(p),k=t("1Pcy"),b=t.n(k),f=t("5Yy7"),g=t.n(f),y=t("KEM+"),h=t.n(y),N=t("ERkP"),S=t.n(N),L=t("kFJ8"),I=(t("aWzz"),t("PTiB")),E=t("qdfj"),F=t("+EFR"),D=t("JByK"),V={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"DeleteLabelMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"label"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteLabel"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"contentId"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}},{kind:"ObjectField",name:{kind:"Name",value:"label"},value:{kind:"Variable",name:{kind:"Name",value:"label"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:173,source:{body:"\n  mutation DeleteLabelMutation($contentId: ID!, $label: String!) {\n    deleteLabel(input: { contentId: $contentId, label: $label }) {\n      contentId\n      label\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},T=t("L21V"),x=t("06K+"),A=Object(T.f)({deleteLabelText:{id:"labels.deleteLabel.action",defaultMessage:"Delete Label",description:"Aria label for button to delete label"}}),O=Object(T.g)((i=a=function(e){function n(){var e,t;s()(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=m()(this,(e=v()(n)).call.apply(e,[this].concat(i))),h()(b()(t),"onBeforeRemoveAction",function(){return(0,t.props.deleteLabel)(),!0}),t}return g()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.prefix,a=e.isDeletable,i=e.href,l=e.intl.formatMessage,r=t&&"global"!==t&&"team"!==t,o=l(A.deleteLabelText);return S.a.createElement(x.a,{text:"".concat(r?"".concat(t,":"):"").concat(n),href:i,onBeforeRemoveAction:a?this.onBeforeRemoveAction:null,removeButtonText:a?o:null})}}]),n}(N.Component),h()(a,"defaultProps",{isDeletable:!1}),i));t.d(n,"a",function(){return C});var C=Object(I.a)()(Object(E.a)((r=l=function(e){function n(){var e,t;s()(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return t=m()(this,(e=v()(n)).call.apply(e,[this].concat(i))),h()(b()(t),"sendLabelDeletedAnalyticsEvent",function(){var e=t.props,n=e.contentId,a=e.name;t.props.createAnalyticsEvent({type:"sendTrackEvent",data:{action:"deleted",actionSubject:"label",source:"labelComponent",attributes:{componentVersion:"v2",contentId:n,name:a}}}).fire()}),h()(b()(t),"generateDeleteLabel",function(e){var n=t.props,a=n.contentId,i=n.name;return function(){e({variables:{contentId:a,label:i}})}}),h()(b()(t),"onError",function(e){t.props.onError(Object(F.a)(e))}),t}return g()(n,e),c()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.contentId,a=n.spaceKey,i=n.prefix,l=n.name,r=n.isDeletable;return S.a.createElement(L.c,{mutation:V,refetchQueries:[{query:D.a,variables:{contentId:t,refetchQuery:!0}}],onCompleted:this.sendLabelDeletedAnalyticsEvent,onError:this.onError},function(n){var t="/wiki/label/".concat(a,"/").concat(l);return S.a.createElement(O,{href:t,prefix:i,name:l,isDeletable:r,deleteLabel:e.generateDeleteLabel(n)})})}}]),n}(N.Component),h()(l,"defaultProps",{onError:function(){}}),r)))},p7S1:function(e,n,t){"use strict";var a=t("VrFO"),i=t.n(a),l=t("Y9Ll"),r=t.n(l),o=t("N+ot"),s=t.n(o),d=t("AuHH"),c=t.n(d),u=t("5Yy7"),m=t.n(u),p=t("ERkP"),v=t.n(p),k=t("kFJ8"),b=(t("aWzz"),t("2srY")),f=t.n(b),g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"EditLabelDialogQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"status"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}},{kind:"Argument",name:{kind:"Name",value:"status"},value:{kind:"Variable",name:{kind:"Name",value:"status"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:300,source:{body:"\n  query EditLabelDialogQuery($contentId: ID!, $status: [String]) {\n    content(id: $contentId, status: $status) {\n      nodes {\n        id\n        labels {\n          count\n          nodes {\n            id\n            label\n            name\n            prefix\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddLabelsMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"labels"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"LabelInput"}}}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addLabels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"contentId"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}},{kind:"ObjectField",name:{kind:"Name",value:"labels"},value:{kind:"Variable",name:{kind:"Name",value:"labels"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:275,source:{body:"\n  mutation AddLabelsMutation($contentId: ID!, $labels: [LabelInput!]!) {\n    addLabels(input: { contentId: $contentId, labels: $labels }) {\n      labels {\n        count\n        nodes {\n          id\n          prefix\n          name\n          label\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},h=t("97Jx"),N=t.n(h),S=t("T0aG"),L=t.n(S),I=t("RhWx"),E=t.n(I),F=t("tQaH"),D=t.n(F),V=t("1Pcy"),T=t.n(V),x=t("KEM+"),A=t.n(x),O=t("7wq/"),C=t.n(O),M=t("L21V"),w=t("nnRT"),j=t.n(w),Q=t("KsTJ"),R=t("Pydg"),$=t("ZmIu"),q=t("llcG"),K=t("Xi0d"),P=t("1whV"),H=t.n(P),B=t("7A9o"),_=t("PTiB"),G=t("+EFR"),J=t("WB0a"),W=t("dV0T");function z(){var e=C()(["\n  color: ",";\n"]);return z=function(){return e},e}function Y(){var e=C()(["\n  color: ",";\n"]);return Y=function(){return e},e}var U=Q.default.h2(Y(),B.colors.N800),X=Q.default.a(z(),B.colors.B400),Z=function(e){function n(){return i()(this,n),s()(this,c()(n).apply(this,arguments))}return m()(n,e),r()(n,[{key:"renderHelpLink",value:function(){return v.a.createElement(X,{href:"https://confluence.atlassian.com/confcloud/use-labels-to-organize-your-content-724764874.html",target:"_blank",rel:"noopener"},v.a.createElement(M.b,{id:"labels.help.link.text",defaultMessage:"Help",description:"Link text to help page"}))}},{key:"render",value:function(){return v.a.createElement("div",null,v.a.createElement(W.e,null,v.a.createElement(U,null,v.a.createElement(M.b,{id:"labels.modal.title",defaultMessage:"Labels",description:"Title for modal to edit content labels"})),this.renderHelpLink()))}}]),n}(p.PureComponent);function ee(){var e=C()(["\n  color: ",";\n"]);return ee=function(){return e},e}Z.displayName="EditLabelDialogHeader";var ne=Q.default.span(ee(),B.colors.N300),te=v.a.createElement(ne,null,v.a.createElement(M.a,{id:"labels.dialog.shortcut.tip",defaultMessage:"Shortcut tip: In page view, pressing <b>{shortcut}</b> also opens this dialog box",values:{shortcut:"l"}})),ae=function(e){function n(){return i()(this,n),s()(this,c()(n).apply(this,arguments))}return m()(n,e),r()(n,[{key:"render",value:function(){var e=this.props.onClose;return v.a.createElement(W.d,null,te,v.a.createElement(q.a,{appearance:"primary",onClick:e},v.a.createElement(M.b,{id:"labels.dialog.close",defaultMessage:"Close",description:"Verb to close dialog"})))}}]),n}(p.Component);ae.displayName="EditLabelDialogFooter";var ie=t("VtSi"),le=t.n(ie),re=t("cbiG"),oe=t.n(re),se=t("RR8A"),de=t("k689"),ce={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"LabelSearchQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"contentId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"searchText"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"contentLabelSearch"},arguments:[{kind:"Argument",name:{kind:"Name",value:"contentId"},value:{kind:"Variable",name:{kind:"Name",value:"contentId"}}},{kind:"Argument",name:{kind:"Name",value:"searchText"},value:{kind:"Variable",name:{kind:"Name",value:"searchText"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"suggestedLabels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"otherLabels"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"prefix"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"label"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:316,source:{body:"\n  query LabelSearchQuery($contentId: ID!, $searchText: String!) {\n    contentLabelSearch(contentId: $contentId, searchText: $searchText) {\n      suggestedLabels {\n        prefix\n        name\n        id\n        label\n      }\n      otherLabels {\n        prefix\n        name\n        id\n        label\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ue=300,me=5,pe=function(e){return e.options&&e.options.length?v.a.createElement(se.c.Menu,e,e.children):null};pe.displayName="CustomMenu";var ve={DropdownIndicator:null,NoOptionsMessage:function(){return null},Menu:pe},ke={menuList:function(e){return D()({},e,{maxHeight:"70"})}},be=function(e,n){var t;return function(){for(var a=this,i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];clearTimeout(t),t=setTimeout(function(){return e.call.apply(e,[a].concat(l))},n)}},fe=function(e){function n(){var e,t;i()(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return t=s()(this,(e=c()(n)).call.apply(e,[this].concat(l))),A()(T()(t),"onChange",function(e){var n=e.map(function(e){return{name:e.value,prefix:e.prefix||""}});t.props.onSelectSuggestion(n)}),A()(T()(t),"onCreateOption",function(e){t.props.onCreateOption(e)}),A()(T()(t),"makeSearchQuery",function(){var e=oe()(le.a.mark(function e(n){var a,i,l,r,o,s,d,c;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props,i=a.apolloClient,l=a.contentId,e.next=3,i.query({query:ce,variables:{searchText:n,contentId:l}});case 3:return r=e.sent,o=r.data,s=f()(o,"contentLabelSearch.suggestedLabels"),(d=s.slice(0,me)).length<me&&(c=f()(o,"contentLabelSearch.otherLabels"),d=d.concat(c.slice(0,me-d.length))),e.abrupt("return",d);case 9:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()),A()(T()(t),"loadOptions",be(function(){var e=oe()(le.a.mark(function e(n,a){var i,l;return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.makeSearchQuery(n);case 2:i=e.sent,l=i.map(function(e){return{label:e.label,value:e.label}}),a(l);case 5:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),ue)),t}return m()(n,e),r()(n,[{key:"render",value:function(){var e=this.props,n=e.inputLabelsValue,t=e.setSelectInputRef;return v.a.createElement(de.a,{isClearable:!0,isMulti:!0,cacheOptions:!0,autoFocus:!0,components:ve,styles:ke,value:function(e){return e.map(function(e){return{label:e.name,value:e.name}})}(n),onCreateOption:this.onCreateOption,loadOptions:this.loadOptions,allowCreateWhileLoading:this.props.allowCreateWhileLoading,onChange:this.onChange,placeholder:"",ref:t})}}]),n}(p.Component);A()(fe,"defaultProps",{allowCreateWhileLoading:!1,setSelectInputRef:function(){}}),fe.displayName="LabelSearchComponent";var ge=function(e){function n(){return i()(this,n),s()(this,c()(n).apply(this,arguments))}return m()(n,e),r()(n,[{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.inputLabelsValue,a=e.onSelectSuggestion,i=e.onCreateOption,l=e.setSelectInputRef;return v.a.createElement(k.a,null,function(e){return v.a.createElement(fe,{apolloClient:e,contentId:n,onSelectSuggestion:a,onCreateOption:i,inputLabelsValue:t,setSelectInputRef:l})})}}]),n}(p.Component);function ye(){var e=C()(["\n  flex-basis: 100%;\n  flex-shrink: 0;\n"]);return ye=function(){return e},e}function he(){var e=C()(["\n  margin-right: 12px;\n  flex-grow: 1;\n"]);return he=function(){return e},e}function Ne(){var e=C()(["\n  align-items: baseline;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 20px;\n  visibility: visible;\n  min-height: 150px;\n"]);return Ne=function(){return e},e}ge.displayName="LabelSearch";var Se=Q.default.div(Ne()),Le=Q.default.span(he()),Ie=Q.default.div(ye()),Ee=Object(M.f)({"please.enter.a.label":{id:"labels.error.enterLabel",defaultMessage:"Please enter a label.",description:"User did not select label(s) before submitting"},"label.not.found":{id:"labels.error.notFound",defaultMessage:"Label Not Found",description:"Could not find label to delete"},"label.contains.invalid.chars":{id:"labels.error.invalidChars",defaultMessage:"{0} contains invalid characters ({1}).",description:"Message when user tries to add label with invalid characters"},"label.name.is.too.long":{id:"labels.error.tooLong",defaultMessage:"Label names must be less than {0} characters.",description:"User tried to add label with too many characters"},"only.personal.labels.permitted":{id:"labels.error.onlyPersonal",defaultMessage:"You are only permitted to add personal labels on this page.",description:"User only has permission to add personal labels"},dismissAction:{id:"labels.error.action.dismiss",defaultMessage:"Dismiss",description:"Action to dismiss error message"},errorTitle:{id:"labels.error.title",defaultMessage:"Error",description:"Title of error message"}}),Fe=Object(_.a)()(Object(M.g)(function(e){function n(){var e,t;i()(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return t=s()(this,(e=c()(n)).call.apply(e,[this].concat(l))),A()(T()(t),"state",{inputLabelsValue:[],error:null,isAdding:!1}),A()(T()(t),"selectInput",null),A()(T()(t),"setSelectInputRef",function(e){t.selectInput=e}),A()(T()(t),"sendAddLabelAnalyticsEvent",function(e){var n=t.props.contentId;t.props.createAnalyticsEvent({type:"sendTrackEvent",data:{action:"add",actionSubject:"label",source:"editLabelDialog",attributes:{componentVersion:"v2",contentId:n,newLabels:e}}}).fire()}),A()(T()(t),"onAddLabels",function(){var e=t.props,n=e.addLabels,a=e.contentId,i=e.labels,l=t.state.inputLabelsValue;n({variables:{contentId:a,labels:l},optimisticResponse:{__typename:"Mutation",addLabels:{__typename:"AddLabelsPayload",labels:{__typename:"PaginatedLabelList",count:i.length+l.length,nodes:i.concat(l.map(function(e){return D()({},e,{id:"".concat(Math.round(-1e6*Math.random())),label:e.name,__typename:"Label"})}))}}}}).then(function(){t.sendAddLabelAnalyticsEvent(l)}).catch(function(e){t.onError(Object(G.a)(e))}),t.selectInput&&t.selectInput.focus(),t.setState({inputLabelsValue:[]})}),A()(T()(t),"onSelectSuggestion",function(e){t.setState({inputLabelsValue:e})}),A()(T()(t),"onCreateOption",function(e){var n=t.state.inputLabelsValue,a=e.trim().split(" ").map(function(e){return{name:e,prefix:""}});t.setState({inputLabelsValue:[].concat(E()(n),E()(a))})}),A()(T()(t),"closeErrorMessage",function(){t.setState({error:null})}),A()(T()(t),"onError",function(e){t.setState({error:e})}),t}return m()(n,e),r()(n,[{key:"shouldComponentUpdate",value:function(e,n){return!j()(this.props,e)||!j()(this.state,n)}},{key:"parseErrorMessage",value:function(){var e=this.props.intl.formatHTMLMessage,n=this.state.error,t="";return n&&"object"===L()(n)&&(n.messageKey?t=e(Ee[n.messageKey],n.args):n.message&&(t=n.message)),t}},{key:"sendLabelErrorAnalyticsEvent",value:function(e){var n=this.props.contentId;this.props.createAnalyticsEvent({type:"sendTrackEvent",data:{action:"error",actionSubject:"label",source:"editLabelDialog",attributes:{componentVersion:"v2",contentId:n,errorMessage:e}}}).fire()}},{key:"renderErrorMessage",value:function(){var e=this.parseErrorMessage();if(e){var n=this.props.intl.formatMessage;this.sendLabelErrorAnalyticsEvent(e);var t=n(Ee.errorTitle),a=v.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}}),i=[{content:n(Ee.dismissAction),onClick:this.closeErrorMessage}];return v.a.createElement(K.b,{appearance:"error",title:t,actions:i,description:a,icon:v.a.createElement(H.a,{secondaryColor:B.colors.R300}),isDismissAllowed:!0})}return null}},{key:"renderLabelList",value:function(){var e=this.props,n=e.labels,t=e.spaceKey,a=e.contentId,i={onError:this.onError,spaceKey:t,contentId:a,isDeletable:!0};return n&&0!==n.length?n.map(function(e){var n={id:e.id,prefix:e.prefix,name:e.name};return v.a.createElement(J.a,N()({},n,i,{key:e.id}))}):null}},{key:"render",value:function(){var e=this.props,n=e.isAdding,t=e.closeDialog,a=e.contentId,i=this.state.inputLabelsValue,l={components:{Header:Z,Footer:ae},width:"medium",onClose:t,autoFocus:!1};return v.a.createElement(R.b,null,v.a.createElement($.a,l,this.renderErrorMessage(),v.a.createElement(Se,{"data-test-id":"modal-content"},v.a.createElement(Le,null,v.a.createElement(ge,{contentId:a,inputLabelsValue:i,onSelectSuggestion:this.onSelectSuggestion,onCreateOption:this.onCreateOption,setSelectInputRef:this.setSelectInputRef})),v.a.createElement(q.a,{appearance:"default",isDisabled:n,onClick:this.onAddLabels},v.a.createElement(M.b,{id:"labels.verb.add",defaultMessage:"Add",description:"Action to add a label to content"})),v.a.createElement(Ie,{id:"dialog-label-list",className:"label-list","data-ready":"true"},this.renderLabelList()))))}}]),n}(p.Component)));t.d(n,"a",function(){return Ve});var De=["current","draft"],Ve=function(e){function n(){return i()(this,n),s()(this,c()(n).apply(this,arguments))}return m()(n,e),r()(n,[{key:"render",value:function(){var e=this.props,n=e.contentId,t=e.spaceKey,a=e.closeDialog;return v.a.createElement(k.d,{query:g,variables:{contentId:n,status:De}},function(e){var i=e.data,l=e.error,r=e.loading;if(l)return null;var o=f()(i,"content.nodes[0].labels.nodes")||[];return v.a.createElement(k.c,{mutation:y,update:function(e,t){var a=t.data,i=f()(a,"addLabels.labels"),l=e.readQuery({query:g,variables:{contentId:n,status:De}});l.content.nodes[0].labels=i,e.writeQuery({query:g,variables:{contentId:n,status:De},data:l})}},function(e,i){var l=i.loading;return v.a.createElement(Fe,{labels:o,contentId:n,spaceKey:t,closeDialog:a,addLabels:e,isAdding:l||r})})})}}]),n}(p.Component);Ve.displayName="EditLabelDialog"}}]);
//# sourceMappingURL=page.edit-label-dialog~page.labels.dea9ebc8874c5ea790d9-v38.js.map