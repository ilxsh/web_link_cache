(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{DxEJ:function(e,n,t){"use strict";t.r(n);var i=t("VrFO"),o=t.n(i),r=t("Y9Ll"),a=t.n(r),c=t("N+ot"),u=t.n(c),d=t("AuHH"),l=t.n(d),s=t("1Pcy"),p=t.n(s),m=t("5Yy7"),f=t.n(m),h=t("KEM+"),C=t.n(h),v=t("ERkP"),y=t.n(v),L=(t("aWzz"),t("qdfj")),g=t("pAm2"),w=t("9IcS"),k=t("7wq/"),S=t.n(k),N=t("kFJ8"),P=t("KsTJ"),M=t("2srY"),V=t.n(M),E=t("E+Ah"),b={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"NavigationWordmarkQuery"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"spaViewModel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"siteTitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"showSiteTitle"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"siteConfiguration"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"customSiteLogo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"siteLogoUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:170,source:{body:"\n  query NavigationWordmarkQuery {\n    spaViewModel {\n      siteTitle\n      showSiteTitle\n    }\n\n    siteConfiguration {\n      customSiteLogo\n      siteLogoUrl\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function I(){var e=S()(["\n  max-height: 32px;\n  max-width: 184px;\n"]);return I=function(){return e},e}function x(){var e=S()(["\n  margin-top: 4px;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  line-height: 1.454;\n  font-size: 0.785em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n"]);return x=function(){return e},e}var H=P.default.div(x()),Z=P.default.img(I()),A=function(e){function n(){return o()(this,n),u()(this,l()(n).apply(this,arguments))}return f()(n,e),a()(n,[{key:"render",value:function(){return y.a.createElement(N.d,{query:b},function(e){var n=e.data,t=e.loading,i=e.error;if(t)return null;if(i)return y.a.createElement(E.a,null);var o=V()(n,"spaViewModel.showSiteTitle",!1),r=V()(n,"siteConfiguration.customSiteLogo",!1),a=V()(n,"spaViewModel.siteTitle"),c=V()(n,"siteConfiguration.siteLogoUrl");return y.a.createElement(v.Fragment,null,r?y.a.createElement(Z,{src:c}):y.a.createElement(E.a,null),o?y.a.createElement(H,{title:a},a):null)})}}]),n}(v.PureComponent);A.displayName="NavigationWordmark";var F=t("x+QU"),W=t.n(F),Q=t("LpWn"),U=W()({loader:function(){return Promise.all([t.e(10),t.e(19),t.e(41),t.e(75),t.e(67),t.e(145),t.e(61),t.e(99),t.e(314)]).then(t.bind(null,"XggU")).then(function(e){return e.ProductNavigation})},loading:Q.a});U.displayName="ProductNavigationLoader";var Y={id:w.e,type:"product",getItems:function(){return[{type:"HeaderSection",id:"".concat(w.e,":header"),items:[{wordmark:A,type:"Wordmark",id:"header"}]},{type:"MenuSection",id:"".concat(w.e,":component"),nestedGroupKey:"ProductMenu",items:[{component:U,type:"InlineComponent",id:"component"}]}]}},K=W()({loader:function(){return Promise.all([t.e(10),t.e(19),t.e(41),t.e(67),t.e(212),t.e(61),t.e(313)]).then(t.bind(null,"EInA")).then(function(e){return e.AddonsPanel})},loading:Q.a});K.displayName="AddonsPanelLoader";var O={id:w.d,type:"product",getItems:function(){return[{type:"HeaderSection",id:"".concat(w.e,":header"),items:[{wordmark:A,type:"Wordmark",id:"header"}]},{type:"MenuSection",id:"".concat(w.d,":component"),parentId:"".concat(w.e,":component"),nestedGroupKey:"ProductMenu",items:[{component:K,type:"InlineComponent",id:"".concat(w.d,":component")}]}]}},T=W()({loader:function(){return Promise.all([t.e(1),t.e(2),t.e(10),t.e(19),t.e(41),t.e(68),t.e(91),t.e(163)]).then(t.bind(null,"4z6U")).then(function(e){return e.SpaceSwitcher})},loading:function(){return null}});T.displayName="SpaceSwitcher";var J=W()({loader:function(){return Promise.all([t.e(1),t.e(2),t.e(10),t.e(19),t.e(41),t.e(68),t.e(91),t.e(163),t.e(312)]).then(t.bind(null,"I2jX")).then(function(e){return e.StandaloneSpaceSwitcher})},loading:function(){return null}});T.displayName="StandaloneSpaceSwitcher";var q=t("wgWf"),z={id:w.c,type:"container",getItems:function(){return[{type:"HeaderSection",id:"".concat(w.c,":spaceSwitcher"),items:[{component:J,type:"InlineComponent",id:"spaceSwitcher"}]},{type:"MenuSection",id:"".concat(w.c,":component"),nestedGroupKey:"ContainerNav",items:[{component:q.a,type:"InlineComponent",id:"component"}]}]}},D=t("r6zf"),R={id:w.b,type:"container",getItems:function(){return[{type:"HeaderSection",id:"".concat(w.c,":spaceSwitcher"),items:[{component:J,type:"InlineComponent",id:"spaceSwitcher"}]},{type:"MenuSection",id:"".concat(w.b,":component"),parentId:"".concat(w.c,":component"),nestedGroupKey:"ContainerNav",items:[{type:"BackItem",goTo:w.c,id:"container-back-link",testKey:"container-back-link"},{component:D.a,type:"InlineComponent",id:"component"}]}]}},G=W()({loader:function(){return Promise.all([t.e(10),t.e(19),t.e(61),t.e(310)]).then(t.bind(null,"xHkZ")).then(function(e){return e.AdminNavigation})},loading:function(){return null}});G.displayName="AdminNavigationLoader";var j={id:w.a,type:"product",getItems:function(){return[{type:"HeaderSection",id:"".concat(w.a,":header"),items:[{type:"Wordmark",wordmark:A,id:"header"}]},{type:"Section",id:"".concat(w.a,":component"),items:[{component:G,type:"InlineComponent",id:"component"}]}]}};t.d(n,"NavigationView",function(){return B});var B=Object(g.a)(Object(L.a)(function(e){function n(){var e,t;o()(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=u()(this,(e=l()(n)).call.apply(e,[this].concat(r))),C()(p()(t),"setView",function(e){var n=t.props.navigationViewController;e&&n.setView(e)}),C()(p()(t),"handleQueryParams",function(){var e=t.props,n=e.view,i=(0,e.getQueryParams)();if(i.view&&"addons"===i.view&&n===w.e)return t.setView(w.d),!0;if(i.mode){if("global"===i.mode&&"addons"===i.view)return t.setView(w.d),!0;if("global"===i.mode)return t.setView(w.e),!0}return!1}),t}return f()(n,e),a()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.view,t=e.navigationViewController;t.addView(Y),t.addView(O),t.addView(z),t.addView(R),t.addView(j),!this.handleQueryParams()&&this.setView(n)}},{key:"componentDidUpdate",value:function(e){var n=this.props.view;this.props.view!==e.view&&this.setView(n),this.props.location.search!==e.location.search&&!this.handleQueryParams()&&this.setView(n)}},{key:"render",value:function(){return null}}]),n}(v.Component)))},"E+Ah":function(e,n,t){"use strict";t.d(n,"a",function(){return w});var i=t("97Jx"),o=t.n(i),r=t("VrFO"),a=t.n(r),c=t("Y9Ll"),u=t.n(c),d=t("N+ot"),l=t.n(d),s=t("AuHH"),p=t.n(s),m=t("5Yy7"),f=t.n(m),h=t("KEM+"),C=t.n(h),v=t("ERkP"),y=t.n(v),L=t("V5Il"),g=t("6ksJ"),w=function(e){function n(){return a()(this,n),l()(this,p()(n).apply(this,arguments))}return f()(n,e),u()(n,[{key:"render",value:function(){return y.a.createElement(g.a,o()({},this.props,{svg:'<canvas height="32" width="126" aria-hidden="true"></canvas>\n<svg viewBox="0 0 126 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n  <g stroke="none" stroke-width="1" fill-rule="evenodd" fill="inherit">\n    <path d="M13.312,20.984 C12.064,21.608 10.66,22.024 8.866,22.024 C4.81,22.024 2.34,19.424 2.34,15.498 C2.34,11.572 4.732,8.92 8.736,8.92 C10.712,8.92 12.064,9.336 13.286,10.116 L13.286,7.854 C12.064,6.97 10.4,6.658 8.736,6.658 C3.172,6.658 -2.04281037e-14,10.298 -2.04281037e-14,15.498 C-2.04281037e-14,20.88 3.172,24.26 8.788,24.26 C10.556,24.26 12.246,23.948 13.312,23.246 L13.312,20.984 Z M21.918,24.26 C18.018,24.26 15.73,21.374 15.73,17.474 C15.73,13.574 18.018,10.74 21.918,10.74 C25.792,10.74 28.054,13.574 28.054,17.474 C28.054,21.374 25.792,24.26 21.918,24.26 Z M21.918,12.82 C19.136,12.82 17.914,15.004 17.914,17.474 C17.914,19.944 19.136,22.18 21.918,22.18 C24.674,22.18 25.87,19.944 25.87,17.474 C25.87,15.004 24.674,12.82 21.918,12.82 Z M41.704,16.382 C41.704,12.794 39.988,10.74 36.998,10.74 C35.256,10.74 33.722,11.598 32.89,13.132 L32.89,11 L30.654,11 L30.654,24 L32.89,24 L32.89,16.772 C32.89,14.146 34.32,12.768 36.4,12.768 C38.532,12.768 39.468,13.808 39.468,16.148 L39.468,24 L41.704,24 L41.704,16.382 Z M47.918,9.622 C47.918,8.452 48.594,7.646 49.972,7.646 C50.492,7.646 50.986,7.698 51.376,7.776 L51.376,5.722 C50.986,5.618 50.544,5.514 49.868,5.514 C47.086,5.514 45.734,7.152 45.734,9.57 L45.734,11 L43.628,11 L43.628,13.08 L45.734,13.08 L45.734,24 L47.918,24 L47.918,13.08 L51.272,13.08 L51.272,11 L47.918,11 L47.918,9.622 Z M58.318,23.974 L58.318,21.972 C58.058,21.998 57.902,21.998 57.668,21.998 C56.706,21.998 55.926,21.582 55.926,20.412 L55.926,5.566 L53.69,5.566 L53.69,20.672 C53.69,23.064 55.042,24.078 57.174,24.078 C57.746,24.078 58.136,24.026 58.318,23.974 Z M60.216,18.618 C60.216,22.206 61.932,24.26 64.922,24.26 C66.664,24.26 68.198,23.402 69.03,21.868 L69.03,24 L71.266,24 L71.266,11 L69.03,11 L69.03,18.228 C69.03,20.854 67.6,22.232 65.52,22.232 C63.388,22.232 62.452,21.192 62.452,18.852 L62.452,11 L60.216,11 L60.216,18.618 Z M84.89,23.48 C83.824,24.052 82.186,24.26 80.86,24.26 C75.998,24.26 73.866,21.452 73.866,17.474 C73.866,13.548 76.05,10.74 80.002,10.74 C84.006,10.74 85.618,13.522 85.618,17.474 L85.618,18.488 L76.128,18.488 C76.44,20.698 77.87,22.128 80.938,22.128 C82.446,22.128 83.72,21.842 84.89,21.426 L84.89,23.48 Z M79.898,12.768 C77.532,12.768 76.336,14.302 76.102,16.564 L83.356,16.564 C83.226,14.146 82.134,12.768 79.898,12.768 Z M99.32,16.382 C99.32,12.794 97.604,10.74 94.614,10.74 C92.872,10.74 91.338,11.598 90.506,13.132 L90.506,11 L88.27,11 L88.27,24 L90.506,24 L90.506,16.772 C90.506,14.146 91.936,12.768 94.016,12.768 C96.148,12.768 97.084,13.808 97.084,16.148 L97.084,24 L99.32,24 L99.32,16.382 Z M111.618,21.66 C110.812,21.946 109.98,22.128 108.654,22.128 C105.248,22.128 103.844,19.996 103.844,17.474 C103.844,14.952 105.222,12.82 108.602,12.82 C109.824,12.82 110.708,13.054 111.54,13.444 L111.54,11.364 C110.526,10.896 109.616,10.74 108.446,10.74 C103.818,10.74 101.66,13.548 101.66,17.474 C101.66,21.452 103.818,24.26 108.446,24.26 C109.642,24.26 110.838,24.078 111.618,23.662 L111.618,21.66 Z M124.41,23.48 C123.344,24.052 121.706,24.26 120.38,24.26 C115.518,24.26 113.386,21.452 113.386,17.474 C113.386,13.548 115.57,10.74 119.522,10.74 C123.526,10.74 125.138,13.522 125.138,17.474 L125.138,18.488 L115.648,18.488 C115.96,20.698 117.39,22.128 120.458,22.128 C121.966,22.128 123.24,21.842 124.41,21.426 L124.41,23.48 Z M119.418,12.768 C117.052,12.768 115.856,14.302 115.622,16.564 L122.876,16.564 C122.746,14.146 121.654,12.768 119.418,12.768 Z"></path>\n  </g>\n</svg>'}))}}]),n}(v.Component);C()(w,"defaultProps",L.a)},LpWn:function(e,n,t){"use strict";t.d(n,"a",function(){return C});var i=t("VrFO"),o=t.n(i),r=t("Y9Ll"),a=t.n(r),c=t("N+ot"),u=t.n(c),d=t("AuHH"),l=t.n(d),s=t("5Yy7"),p=t.n(s),m=t("ERkP"),f=t.n(m),h=t("es0P"),C=function(e){function n(){return o()(this,n),u()(this,l()(n).apply(this,arguments))}return p()(n,e),a()(n,[{key:"render",value:function(){return f.a.createElement(h.a,{type:"product"})}}]),n}(m.PureComponent);C.displayName="ProductSkeleton"},r6zf:function(e,n,t){"use strict";t.d(n,"a",function(){return a});t("ERkP");var i=t("x+QU"),o=t.n(i),r=t("y8te"),a=o()({loader:function(){return Promise.all([t.e(12),t.e(10),t.e(19),t.e(41),t.e(67),t.e(145),t.e(99),t.e(311)]).then(t.bind(null,"9lmV")).then(function(e){return e.BlogNavigation})},loading:r.a});a.displayName="BlogNavigationLoader"},wgWf:function(e,n,t){"use strict";t.d(n,"a",function(){return a});t("ERkP");var i=t("x+QU"),o=t.n(i),r=t("y8te"),a=o()({loader:function(){return Promise.all([t.e(12),t.e(10),t.e(19),t.e(41),t.e(67),t.e(145),t.e(99),t.e(311)]).then(t.bind(null,"FUCS")).then(function(e){return e.SpaceNavigation})},loading:r.a});a.displayName="SpaceNavigationLoader"},y8te:function(e,n,t){"use strict";t.d(n,"a",function(){return C});var i=t("VrFO"),o=t.n(i),r=t("Y9Ll"),a=t.n(r),c=t("N+ot"),u=t.n(c),d=t("AuHH"),l=t.n(d),s=t("5Yy7"),p=t.n(s),m=t("ERkP"),f=t.n(m),h=t("es0P"),C=function(e){function n(){return o()(this,n),u()(this,l()(n).apply(this,arguments))}return p()(n,e),a()(n,[{key:"render",value:function(){return f.a.createElement(h.a,{type:"container"})}}]),n}(m.PureComponent);C.displayName="ContainerSkeleton"}}]);
//# sourceMappingURL=navigation-view-v2.46faebb265a3a59ab52c-v38.js.map