(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{"2rtj":function(e,t,n){"use strict";var a=n("97Jx"),r=n.n(a),i=n("VrFO"),o=n.n(i),c=n("Y9Ll"),s=n.n(c),l=n("N+ot"),u=n.n(l),p=n("AuHH"),d=n.n(p),f=n("5Yy7"),m=n.n(f),h=n("KEM+"),v=n.n(h),y=n("ERkP"),k=n.n(y),g=(n("aWzz"),n("Clud")),b=n("tQaH"),S=n.n(b),C=n("1Pcy"),O=n.n(C),w=n("EfWO"),E=n.n(w),N=n("xBue"),x=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=u()(this,(e=d()(t)).call.apply(e,[this].concat(r))),v()(O()(n),"onAnchorLinkClick",function(e){n.props.onPageReload(e.target.getAttribute("href")),n.props.onClick(e)}),n}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.name,r=e.href,i=void 0===r?null:r,o=e.to,c=void 0===o?null:o,s=e.target,l=void 0===s?null:s,u=e.params,p=void 0===u?{}:u,d=e.toUrl,f=e.matchSupportedRoute,m=e.onClick,h=i||c,v={};h&&(v=E.a.parse(h,!0));var y=d(a,S()({},p,v));return f(y)?k.a.createElement(N.a,{to:y,className:n,onClick:m},t):k.a.createElement("a",{href:y,className:n,onClick:this.onAnchorLinkClick,target:l,rel:"_blank"===l?"noreferrer":null},t)}}]),t}(y.Component);x.displayName="LinkComponent",n.d(t,"a",function(){return R});var R=function(e){function t(){return o()(this,t),u()(this,d()(t).apply(this,arguments))}return m()(t,e),s()(t,[{key:"render",value:function(){var e=this;return k.a.createElement(g.b.Consumer,null,function(t){var n=t.toUrl,a=t.matchSupportedRoute,i=t.onPageReload;return k.a.createElement(x,r()({},e.props,{toUrl:n,matchSupportedRoute:a,onPageReload:i}),e.props.children)})}}]),t}(y.Component);v()(R,"defaultProps",{onClick:function(){}}),R.displayName="Link"},"4z6U":function(e,t,n){"use strict";n.r(t);var a=n("VrFO"),r=n.n(a),i=n("Y9Ll"),o=n.n(i),c=n("N+ot"),s=n.n(c),l=n("AuHH"),u=n.n(l),p=n("5Yy7"),d=n.n(p),f=n("ERkP"),m=n.n(f),h=(n("aWzz"),n("L21V")),v=n("kFJ8"),y=n("Clud"),k={kind:"Document",definitions:function(e){var t={};return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!t[n]&&(t[n]=!0,!0)})}([{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SpaceSwitcherQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"selectedSpaceKey"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"space"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"selectedSpaceKey"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SpaceFragment"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"recentSpaces"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SpaceFragment"},directives:[]}]}}]}}].concat([{kind:"FragmentDefinition",name:{kind:"Name",value:"SpaceFragment"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Space"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"key"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"icon"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"path"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"ABSOLUTE"}}],directives:[]}]}}]}}])),loc:{start:0,end:179,source:{body:"\n  query SpaceSwitcherQuery($selectedSpaceKey: String!) {\n    space(key: $selectedSpaceKey) {\n      ...SpaceFragment\n    }\n    recentSpaces {\n      ...SpaceFragment\n    }\n  }\n\n  \n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},g=n("1Pcy"),b=n.n(g),S=n("KEM+"),C=n.n(S),O=n("tQaH"),w=n.n(O),E=n("5qRq"),N=n("9ycr"),x=n("7A9o"),R=n("PTiB"),A=n("+5ab"),P=n("2srY"),M=n.n(P),j=n("nnRT"),L=n.n(j),B=n("UAvc"),F=n("l1C2"),T=n("mGuG"),I=n("Ml1+"),K=n("97Jx"),U=n.n(K),q=n("m3Bd"),V=n.n(q),_=n("Rj/g"),D=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.itemState,n=e.styles,a=e.theme,r=V()(e,["itemState","styles","theme"]),i=a.mode,o=a.context,c=n(i.item(t)[o],t).itemBase.backgroundColor;return Object(F.d)(_.a,U()({borderColor:c},r))}}]),t}(f.Component),W=Object(T.a)(D),H=Object(T.a)(W),Y=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"render",value:function(){return Object(F.d)(H,this.props)}}]),t}(f.Component);C()(Y,"defaultProps",{styles:I.a});var z=n("PLaw"),J=n.n(z),Q=function(e){return w()({},e,{itemBase:w()({},e.itemBase,{paddingLeft:8})})},G=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"shouldComponentUpdate",value:function(e){return!L()(this.props.space,e.space)||!L()(this.props.name,e.name)}},{key:"render",value:function(){var e=this.props.space;return m.a.createElement(B.a,{before:function(t){return m.a.createElement(Y,{src:M()(e,"icon.path",null),itemState:t,appearance:"square"})},styles:Q,after:J.a,text:M()(e,"name",m.a.createElement(h.b,{id:"space-switcher.unknown.space",description:"Name to show when a space cannot be found",defaultMessage:"Unknown space"}))})}}]),t}(f.Component);G.displayName="Target";var X=n("Ty0x"),$=n("2rtj"),Z=function(e){return w()({},e,{itemBase:w()({},e.itemBase,{backgroundColor:x.colors.N0,paddingLeft:20}),textWrapper:w()({},e.textWrapper,{color:x.colors.B400})})},ee=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),C()(b()(n),"onClick",function(){var e=n.props.sendAnalytics;e&&e()}),C()(b()(n),"renderLink",function(e){var t=e.children,a=e.className,r=n.props.to;return m.a.createElement($.a,{className:a,to:r,onClick:n.onClick},t)}),n}return d()(t,e),o()(t,[{key:"render",value:function(){return m.a.createElement(X.a,{component:this.renderLink,styles:Z,text:m.a.createElement(h.b,{id:"space-switcher.view.all.spaces",description:"Message on button to allow users to view all spaces",defaultMessage:"View all spaces"}),onClick:this.onClick})}}]),t}(f.Component);ee.displayName="ViewAllOption";var te=function(e){return w()({},e,{itemBase:w()({},e.itemBase,{backgroundColor:x.colors.N0,paddingLeft:16,marginBottom:2,"&:hover":{backgroundColor:x.colors.N20}}),beforeWrapper:w()({},e.beforeWrapper,{marginRight:12})})},ne=function(e){return{itemBase:w()({},e.itemBase,{backgroundColor:x.colors.N0,"&:hover":{backgroundColor:x.colors.N20}})}},ae=function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),C()(b()(n),"sendAnalytics",function(e){return function(){var t=n.props.data;t.createAnalyticsEvent({type:"sendUIEvent",data:{action:"clicked",actionSubject:"navigationItem",source:"spaceSwitcherMenu",attributes:{itemId:e?"spaceSwitcherSpaceItem":"spaceSwitcherAllSpaces",isExpanded:!t.isCollapsed,navigationLayer:"container",selectedItemPageContext:(t.match||{}).name,navVersion:"2"}}}).fire()}}),C()(b()(n),"onClick",function(e){var t=n.props,a=t.data,r=t.selectOption;e.metaKey||r(a),n.sendAnalytics(a.key)()}),C()(b()(n),"renderLink",function(e){var t=e.children,a=e.className,r=n.props.data;return m.a.createElement($.a,{className:a,to:r.to,onClick:n.onClick},t)}),n}return d()(t,e),o()(t,[{key:"shouldComponentUpdate",value:function(e){return!L()(this.props.data,e.data)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.selectOption;return t?t.key?m.a.createElement(X.a,{id:t.key,component:this.renderLink,text:t.text,styles:te,before:function(e){return m.a.createElement(Y,{src:t.avatar,itemState:e,styles:ne,appearance:"square"})}}):m.a.createElement(ee,{selectOption:n,sendAnalytics:this.sendAnalytics(null),to:t.to}):null}}]),t}(f.Component);ae.displayName="Option";var re=function(e){return w()({},e,{itemBase:w()({},e.itemBase,{backgroundColor:x.colors.N0,paddingLeft:"20px",margin:"20px 0 11px",cursor:"default"}),textWrapper:w()({},e.textWrapper,{color:x.colors.N200})})},ie=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.selectOption,n=e.children;return m.a.createElement(y.b.Consumer,null,function(e){var a=e.toUrl;return m.a.createElement("section",null,m.a.createElement(X.a,{styles:re,text:n}),m.a.createElement(ee,{selectOption:t,to:a(A.SPACE_DIRECTORY.name)}))})}}]),t}(f.Component);ie.displayName="NoOptionsMessage";var oe=Object(h.f)({noMatchingRecentSpaces:{id:"space-switcher.no.matching.recent.spaces",description:"Message when there are no recent spaces the match the search terms",defaultMessage:"No matching recent spaces"},noRecentSpaces:{id:"space-switcher.no.recent.spaces",description:"Message to show when there are no recent spaces",defaultMessage:"No recent spaces"}}),ce={groupHeading:function(e){return w()({},e,{color:x.colors.N200,paddingLeft:16,marginBottom:6})},control:function(e){return w()({},e,{height:40,margin:"8px 2px"})},noOptionsMessage:function(e){return w()({},e,{textAlign:"left",paddingLeft:16,margin:"32px 0px"})},group:function(e){return w()({},e,{paddingBottom:0})}},se=Object(R.a)()(function(e){function t(){var e,n;r()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return n=s()(this,(e=u()(t)).call.apply(e,[this].concat(i))),C()(b()(n),"noOptions",!0),C()(b()(n),"getOptions",function(e,t,a){var r=n.props,i=r.createAnalyticsEvent,o=r.match,c=r.toUrl,s=e?e.filter(function(e){return null!==e}).filter(function(e){return e.id!==M()(t,"id",null)}).map(function(e){return{avatar:e.icon.path,id:e.id,key:e.key,text:e.name,to:c(A.SPACE_INDEX.name,{spaceKey:e.key}),isCollapsed:a,createAnalyticsEvent:i,match:o}}):[];return s.push({text:m.a.createElement(h.b,{id:"space-switcher.view.all.spaces",description:"Message on button to allow users to view all spaces",defaultMessage:"View all spaces"}),to:c(A.SPACE_DIRECTORY.name),isCollapsed:a,createAnalyticsEvent:i}),[{label:m.a.createElement(h.b,{id:"space-switcher.recent.spaces.label",description:"Section label for recent spaces",defaultMessage:"Recent spaces"}),options:s}]}),C()(b()(n),"filterOption",function(e,t){var a=e.data,r=!1;return a.key?(r=a.text.toLowerCase().includes(t.toLowerCase()),n.noOptions=n.noOptions&&!r):(r=!n.noOptions,n.noOptions=!0),r}),C()(b()(n),"getNoOptionsMessageText",function(e){var t=e.inputValue;return n.props.intl.formatMessage(t?oe.noMatchingRecentSpaces:oe.noRecentSpaces)}),C()(b()(n),"onOpen",function(e){return function(){(0,n.props.createAnalyticsEvent)({type:"sendUIEvent",data:{action:"clicked",actionSubject:"navigationItem",source:"containerNavigation",attributes:{itemId:"spaceSwitcher",isExpanded:!e,navigationLayer:"container",selectedItemPageContext:null,navVersion:"2"}}}).fire()}}),n}return d()(t,e),o()(t,[{key:"render",value:function(){var e=this,t=this.props.data;return m.a.createElement(E.a,null,function(n){var a=n.state.isCollapsed;return m.a.createElement(N.a,{target:m.a.createElement(G,{space:t.space}),options:e.getOptions(t.recentSpaces,t.space,a),filterOption:e.filterOption,styles:ce,noOptionsMessage:e.getNoOptionsMessageText,components:{IndicatorSeparator:null,Option:ae,NoOptionsMessage:ie},placeholder:m.a.createElement(h.b,{id:"space-switcher.search.placeholder",description:"Placeholder text for searching recent spaces",defaultMessage:"Search recent spaces"}),popperProps:{positionFixed:!0},onOpen:e.onOpen(a)})})}}]),t}(f.Component));n.d(t,"SpaceSwitcher",function(){return ue});var le=function(e){function t(){return r()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.selectedSpaceKey,n=e.intl;return m.a.createElement(v.d,{query:k,variables:{selectedSpaceKey:t}},function(e){var t=e.data,a=e.loading;return e.error||a?null:m.a.createElement(y.b.Consumer,null,function(e){var a=e.match,r=e.toUrl;return m.a.createElement(se,{data:t,intl:n,match:a,toUrl:r})})})}}]),t}(f.Component);le.displayName="SpaceSwitcherContainer";var ue=Object(h.g)(le)},PLaw:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("ERkP")),r=i(n("4KTy"));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e){return a.default.createElement(r.default,o({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'},e))};c.displayName="ChevronDownIcon";var s=c;t.default=s},nChe:function(e,t){e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),a=Object.keys(t),r=n.length;if(a.length!==r)return!1;for(var i=0;i<r;i++){var o=n[i];if(e[o]!==t[o])return!1}return!0}},xBue:function(e,t,n){"use strict";var a=n("ERkP"),r=n.n(a),i=n("aWzz"),o=n.n(i),c=n("I9iR"),s=n.n(c),l=n("W47X"),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},f=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=a=p(this,e.call.apply(e,[this].concat(i))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!d(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,i=n.to;r?t.replace(i):t.push(i)}},p(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var i=this.context.router.history,o="string"==typeof t?Object(l.a)(t,null,null,i.location):t,c=i.createHref(o);return r.a.createElement("a",u({},a,{onClick:this.handleClick,href:c,ref:n}))},t}(r.a.Component);f.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},f.defaultProps={replace:!1},f.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},t.a=f}}]);
//# sourceMappingURL=space-switcher.ef8f25d3c612e02f8d19-v38.js.map