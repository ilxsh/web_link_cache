(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{F0GY:function(e,n,t){"use strict";var r=Array.isArray,o=Object.keys,a=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,n){try{return function e(n,t){if(n===t)return!0;if(n&&t&&"object"==typeof n&&"object"==typeof t){var s,c,l,u=r(n),d=r(t);if(u&&d){if((c=n.length)!=t.length)return!1;for(s=c;0!=s--;)if(!e(n[s],t[s]))return!1;return!0}if(u!=d)return!1;var p=n instanceof Date,f=t instanceof Date;if(p!=f)return!1;if(p&&f)return n.getTime()==t.getTime();var g=n instanceof RegExp,h=t instanceof RegExp;if(g!=h)return!1;if(g&&h)return n.toString()==t.toString();var v=o(n);if((c=v.length)!==o(t).length)return!1;for(s=c;0!=s--;)if(!a.call(t,v[s]))return!1;if(i&&n instanceof Element&&t instanceof Element)return n===t;for(s=c;0!=s--;)if(!("_owner"===(l=v[s])&&n.$$typeof||e(n[l],t[l])))return!1;return!0}return n!=n&&t!=t}(e,n)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},Ppl8:function(e,n,t){"use strict";var r=t("97Jx"),o=t.n(r),a=t("tQaH"),i=t.n(a),s=t("RhWx"),c=t.n(s),l=t("VrFO"),u=t.n(l),d=t("Y9Ll"),p=t.n(d),f=t("N+ot"),g=t.n(f),h=t("AuHH"),v=t.n(h),m=t("1Pcy"),y=t.n(m),b=t("5Yy7"),k=t.n(b),w=t("KEM+"),O=t.n(w),x=t("LLBE"),S=t("ERkP"),P=t.n(S),E=t("wRyJ"),R=t("9mFX"),j=t("KsTJ"),C=t("Ip1J"),A=t("7A9o"),N=t("oFQX"),_=t("wOaa"),T=Object(C.a)({light:A.colors.B200,dark:A.colors.B75}),z=Object(C.a)({light:A.colors.N900,dark:A.colors.DN600}),I=Object(C.a)({light:A.colors.N200,dark:A.colors.DN300});function K(e){var n=e.backgroundColor,t=e.href,r=e.isActive,o=e.isHover,a=e.isSelected,i=e.onClick,s=t||i,c=n||A.colors.background;return s&&(o||a)&&(c=A.colors.backgroundHover),s&&r&&(c=A.colors.backgroundActive),c}var H=function(e){return e.truncate&&Object(j.css)(["\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  "])},D=j.default.div.withConfig({displayName:"AvatarItem__Content",componentId:"sc-189r3pd-0"})(["\n  "," flex: 1 1 100%;\n  line-height: 1.4;\n  padding-left: ","px;\n"],function(e){return e.truncate&&Object(j.css)(["\n    max-width: 100%;\n    min-width: 0;\n  "])},N.l),F=Object(_.a)(j.default.div.withConfig({displayName:"AvatarItem__PrimaryText",componentId:"sc-189r3pd-1"})(["\n  "," color: ",";\n"],H,z)),L=Object(_.a)(j.default.div.withConfig({displayName:"AvatarItem__SecondaryText",componentId:"sc-189r3pd-2"})(["\n  "," color: ",";\n  font-size: 0.85em;\n"],H,I)),B=t("gCO3"),J=t("z+0w"),M=Object(J.a)(function(e){var n=e.href,t=e.isActive,r=e.isDisabled,o=e.isFocus,a=e.onClick,i=n||a,s="transparent",c="auto",l=1,u="none",d="auto";return i&&o&&!t&&(u="none",s=T),r&&(c="not-allowed",l=.75,d="none"),i&&(c="pointer"),Object(j.css)(["\n    align-items: center;\n    background-color: ",";\n    border-radius: ","px;\n    border: 2px solid ",";\n    box-sizing: content-box;\n    color: inherit;\n    cursor: ",";\n    display: flex;\n    font-size: inherit;\n    font-style: normal;\n    font-weight: normal;\n    line-height: 1;\n    opacity: ",";\n    outline: ",";\n    margin: 0;\n    padding: ","px;\n    pointer-events: ",";\n    text-align: left;\n    text-decoration: none;\n    width: 100%;\n  "],K,N.f,s,c,l,u,A.math.divide(N.l,2),d)}),V=t("id5X"),Q=t("fWjd"),W=Object(Q.a)(function(){return{backgroundColor:""}}),X=function(e){function n(){var e,t;u()(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=g()(this,(e=v()(n)).call.apply(e,[this].concat(o))),O()(y()(t),"node",void 0),O()(y()(t),"blur",function(){t.node&&t.node.blur()}),O()(y()(t),"focus",function(){t.node&&t.node.focus()}),O()(y()(t),"guardedClick",function(e){var n=t.props,r=n.isDisabled,o=n.onClick;r||"function"!=typeof o||o({item:R.b.apply(void 0,[t.props].concat(c()(E.a))),event:e})}),O()(y()(t),"setNode",function(e){t.node=e}),t}return k()(n,e),p()(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.avatar,r=n.enableTextTruncate,a=n.primaryText,s=n.secondaryText,c=Object(B.a)(this),l=M(this.props);return P.a.createElement(x.a.Consumer,null,function(n){var u=n.mode;return P.a.createElement(W.Provider,{value:e.props.theme},P.a.createElement(W.Consumer,null,function(n){var d=K(i()({},e.props,n,{mode:u}));return P.a.createElement(l,o()({innerRef:e.setNode},c,{onClick:e.guardedClick}),Object(S.cloneElement)(t,{borderColor:d}),P.a.createElement(D,{truncate:r},P.a.createElement(F,{truncate:r},a),P.a.createElement(L,{truncate:r},s)))}))})}}]),n}(S.Component);O()(X,"defaultProps",{enableTextTruncate:!0});n.a=Object(V.a)(X)},Pq80:function(e,n,t){"use strict";var r=t("Rhu4"),o=t.n(r),a=t("aq5/"),i=t.n(a),s=t("4Mt5"),c=t.n(s),l=t("7xyS"),u=t.n(l),d=t("k2Qk"),p=t.n(d),f=t("ERkP"),g=t.n(f),h=t("8oel"),v=t("ue5L"),m=function(e){function n(){var e,t,r,a;i()(this,n);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return t=r=u()(this,(e=n.__proto__||o()(n)).call.apply(e,[this].concat(c))),r.state={page:r.props.defaultPage,sortKey:r.props.defaultSortKey,sortOrder:r.props.defaultSortOrder,rows:r.props.rows},r.onSetPage=function(e){r.props.onSetPage(e),r.setState({page:e})},r.onSort=function(e){var n=e.key,t=e.item,o=e.sortOrder;r.props.onSort({key:n,item:t,sortOrder:o}),r.setState({sortKey:n,sortOrder:o,page:1})},r.onRankEndIfExists=function(e){r.props.onRankEnd&&r.props.onRankEnd(e)},r.onRankEnd=function(e){var n=e.destination,t=r.state,o=t.rows,a=t.page,i=r.props.rowsPerPage;if(n&&o){var s=Object(v.d)(e,o,a,i);r.setState({rows:s}),r.onRankEndIfExists(e)}else r.onRankEndIfExists(e)},a=t,u()(r,a)}return p()(n,e),c()(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({page:e.page,sortKey:e.defaultSortKey,sortOrder:e.defaultSortOrder,rows:e.rows})}},{key:"render",value:function(){var e=this.state,n=e.page,t=e.sortKey,r=e.sortOrder,o=e.rows,a=this.props,i=a.caption,s=a.emptyView,c=a.head,l=a.loadingSpinnerSize,u=a.isLoading,d=a.isFixedSize,p=a.isRankable,f=a.isRankingDisabled,v=a.rowsPerPage,m=a.paginationi18n,y=a.onRankStart;return g.a.createElement(h.a,{paginationi18n:m,caption:i,emptyView:s,head:c,loadingSpinnerSize:l,isLoading:u,isFixedSize:d,onSetPage:this.onSetPage,onSort:this.onSort,page:n,rows:o,rowsPerPage:v,sortKey:t,sortOrder:r,isRankable:p,isRankingDisabled:f,onRankEnd:this.onRankEnd,onRankStart:y})}}]),n}(f.Component);m.defaultProps={defaultPage:1,isLoading:!1,isFixedSize:!1,isRankable:!1,onSetPage:function(){},onSort:function(){},rowsPerPage:1/0},n.a=m},ivey:function(e){e.exports={a:"@atlaskit/select",b:"8.1.1"}},q4aH:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("ERkP")),o=a(t("4KTy"));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=function(e){return r.default.createElement(o.default,i({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="16" cy="9" r="3"/><circle cx="8" cy="6" r="3"/><path d="M11 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z"/><path d="M13 12a1.997 1.997 0 0 0-2-2H5c-1.113 0-2 .897-2 2.003v3.826c0 1.921 4.054 2.518 7 1.984v-2.807A3.001 3.001 0 0 1 12.997 12H13z"/></g></svg>'},e))};s.displayName="PeopleIcon";var c=s;n.default=c},s6Xt:function(e,n,t){"use strict";var r=t("RR8A"),o=t("pd6y");n.a=Object(o.a)(r.a)},yQrx:function(e,n,t){"use strict";var r=t("RR8A"),o=t("mB14"),a=t("ZYHP"),i=t("PTiB"),s=t("ivey"),c=t("pd6y"),l=Object(c.a)(r.d),u=Object(o.a)("atlaskit");n.a=Object(a.a)({componentName:"select",packageName:s.a,packageVersion:s.b})(Object(i.a)({onChange:u({action:"changed",actionSubject:"option",attributes:{componentName:"select",packageName:s.a,packageVersion:s.b}})})(l))}}]);
//# sourceMappingURL=vendors~adg3.space.blog~fabric.editor.breadcrumbs~page.byline~page.header~right-sidebar~space.calend~f574debe.d931e800811ea7b8b1ee-v38.js.map