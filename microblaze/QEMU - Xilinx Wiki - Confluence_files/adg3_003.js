(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"2rtj":function(e,n,i){"use strict";var t=i("97Jx"),a=i.n(t),r=i("VrFO"),d=i.n(r),o=i("Y9Ll"),u=i.n(o),l=i("N+ot"),c=i.n(l),s=i("AuHH"),m=i.n(s),k=i("5Yy7"),g=i.n(k),v=i("KEM+"),p=i.n(v),b=i("ERkP"),h=i.n(b),N=(i("aWzz"),i("Clud")),F=i("tQaH"),f=i.n(F),y=i("1Pcy"),S=i.n(y),C=i("EfWO"),A=i.n(C),L=i("xBue"),R=function(e){function n(){var e,i;d()(this,n);for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return i=c()(this,(e=m()(n)).call.apply(e,[this].concat(a))),p()(S()(i),"onAnchorLinkClick",function(e){i.props.onPageReload(e.target.getAttribute("href")),i.props.onClick(e)}),i}return g()(n,e),u()(n,[{key:"render",value:function(){var e=this.props,n=e.children,i=e.className,t=e.name,a=e.href,r=void 0===a?null:a,d=e.to,o=void 0===d?null:d,u=e.target,l=void 0===u?null:u,c=e.params,s=void 0===c?{}:c,m=e.toUrl,k=e.matchSupportedRoute,g=e.onClick,v=r||o,p={};v&&(p=A.a.parse(v,!0));var b=m(t,f()({},s,p));return k(b)?h.a.createElement(L.a,{to:b,className:i,onClick:g},n):h.a.createElement("a",{href:b,className:i,onClick:this.onAnchorLinkClick,target:l,rel:"_blank"===l?"noreferrer":null},n)}}]),n}(b.Component);R.displayName="LinkComponent",i.d(n,"a",function(){return w});var w=function(e){function n(){return d()(this,n),c()(this,m()(n).apply(this,arguments))}return g()(n,e),u()(n,[{key:"render",value:function(){var e=this;return h.a.createElement(N.b.Consumer,null,function(n){var i=n.toUrl,t=n.matchSupportedRoute,r=n.onPageReload;return h.a.createElement(R,a()({},e.props,{toUrl:i,matchSupportedRoute:t,onPageReload:r}),e.props.children)})}}]),n}(b.Component);p()(w,"defaultProps",{onClick:function(){}}),w.displayName="Link"},YBtN:function(e,n,i){"use strict";i("aWzz");var t=i("ERkP"),a=i.n(t),r=i("kFJ8"),d=i("L+/v"),o=i("2srY"),u=i.n(o),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ContentScreenQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"space"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"theme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"lookAndFeel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"screen"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundPosition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundRepeat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundClip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundAttachment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundBlendMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundPosition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundRepeat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundClip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundAttachment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundBlendMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"gutterTop"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterRight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterBottom"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterLeft"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:982,source:{body:"\n  query ContentScreenQuery($spaceKey: String!) {\n    space(key: $spaceKey) {\n      id\n      theme {\n        name\n      }\n      lookAndFeel {\n        content {\n          screen {\n            background\n            backgroundColor\n            backgroundImage\n            backgroundPosition\n            backgroundSize\n            backgroundRepeat\n            backgroundOrigin\n            backgroundClip\n            backgroundAttachment\n            backgroundBlendMode\n            layer {\n              background\n              backgroundColor\n              backgroundImage\n              backgroundPosition\n              backgroundSize\n              backgroundRepeat\n              backgroundOrigin\n              backgroundClip\n              backgroundAttachment\n              backgroundBlendMode\n              width\n              height\n            }\n            gutterTop\n            gutterRight\n            gutterBottom\n            gutterLeft\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},c=i("tQaH"),s=i.n(c),m=i("VrFO"),k=i.n(m),g=i("Y9Ll"),v=i.n(g),p=i("N+ot"),b=i.n(p),h=i("AuHH"),N=i.n(h),F=i("5Yy7"),f=i.n(F),y=i("KEM+"),S=i.n(y),C=i("7wq/"),A=i.n(C),L=i("KsTJ"),R=i("lZoD"),w=i("cMUv"),E=i("ak4O");function B(){var e=A()(["\n  position: relative;\n"]);return B=function(){return e},e}function T(){var e=A()(["\n  overflow: hidden;\n"]);return T=function(){return e},e}var z={position:"relative",background:"#fff",paddingTop:"0",paddingRight:"40px",paddingBottom:"20px",paddingLeft:"40px",minHeight:"100vh",boxSizing:"border-box"},O={position:"fixed",width:"100%",height:"100%",top:"0",display:"none",bottom:"0",left:"0",right:"0",zIndex:"10",background:"rgba(0,0,0,0.5)"},P=L.default.div(T()),H=L.default.div(B()),V=function(e){function n(){return k()(this,n),b()(this,N()(n).apply(this,arguments))}return f()(n,e),v()(n,[{key:"getScreenStyles",value:function(){var e=this.props.lookAndFeel,i=n.getCustomScreenStyles(e),t=z,a=this.getLoadingStyles();return s()({},t,i,a)}},{key:"getLoadingStyles",value:function(){return this.props.isLoading?O:{}}},{key:"adjustMinHeight",value:function(e,n){var i=s()({},e);return"100vh"===i.minHeight&&n>0&&(i.minHeight="calc(".concat(i.minHeight," - ").concat(n,"px)")),i}},{key:"renderContentScreen",value:function(e){var n=this.props,i=n.lookAndFeel,r=n.children,d=n.isThemed,o=n.isLoading;return e?a.a.createElement(t.Fragment,null,a.a.createElement(E.a,{lookAndFeel:i}),a.a.createElement(H,null,a.a.createElement(P,null),"function"==typeof r?r({isThemed:d,isLoading:o}):r)):a.a.createElement(t.Fragment,null,"function"==typeof r?r({isThemed:d,isLoading:o}):r)}},{key:"render",value:function(){var e=this,n=this.props,i=n.isContentView,t=n.isThemed||i,r=t?this.getScreenStyles():this.getLoadingStyles();return a.a.createElement(R.c,{to:[w.a]},function(n){var i=n.getTotalHeight(),d=e.adjustMinHeight(r,i);return a.a.createElement("div",{style:d},e.renderContentScreen(t))})}}],[{key:"convertGutters",value:function(e){return"none"===e.gutterLeft&&(e.paddingLeft="0"),"none"===e.gutterRight&&(e.paddingRight="0"),"0px"===e.gutterTop&&(e.paddingTop="0"),"0px"===e.gutterBottom&&(e.paddingBottom="0"),e}},{key:"getCustomScreenStyles",value:function(e){if(!e||!e.content)return{};var i=n.convertGutters(s()({},e.content.screen));return delete i.layer,i}}]),n}(t.Component);S()(V,"defaultProps",{lookAndFeel:{content:{screen:z}}}),V.displayName="ContentScreenComponent",i.d(n,"a",function(){return x});var x=function(e){var n=e.spaceKey,i=e.children,t=e.isContentView;return a.a.createElement(d.a,null,a.a.createElement(r.d,{query:l,variables:{spaceKey:n}},function(e){var n=e.data,r=e.loading,d=Boolean(u()(n,"space.theme")),o=u()(n,"space.lookAndFeel")||{};return a.a.createElement(V,{isThemed:d,isLoading:r,lookAndFeel:o,isContentView:t},i)}))};x.displayName="ContentScreen"},YtiW:function(e,n,i){"use strict";i("aWzz");var t=i("ERkP"),a=i.n(t),r=i("kFJ8"),d=i("L+/v"),o=i("2srY"),u=i.n(o),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ContentContainerQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"space"},arguments:[{kind:"Argument",name:{kind:"Name",value:"key"},value:{kind:"Variable",name:{kind:"Name",value:"spaceKey"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"theme"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"lookAndFeel"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"content"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"screen"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundPosition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundRepeat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundClip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundAttachment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundBlendMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"layer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundPosition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundRepeat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundClip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundAttachment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundBlendMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"gutterTop"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterRight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterBottom"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gutterLeft"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"container"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"background"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundColor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundImage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundPosition"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundSize"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundRepeat"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundOrigin"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundClip"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundAttachment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"backgroundBlendMode"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"padding"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"borderRadius"},arguments:[],directives:[]}]}}]}}]}}]}}]}}],loc:{start:0,end:1351,source:{body:"\n  query ContentContainerQuery($spaceKey: String!) {\n    space(key: $spaceKey) {\n      id\n      theme {\n        name\n      }\n      lookAndFeel {\n        content {\n          screen {\n            background\n            backgroundColor\n            backgroundImage\n            backgroundPosition\n            backgroundSize\n            backgroundRepeat\n            backgroundOrigin\n            backgroundClip\n            backgroundAttachment\n            backgroundBlendMode\n            layer {\n              background\n              backgroundColor\n              backgroundImage\n              backgroundPosition\n              backgroundSize\n              backgroundRepeat\n              backgroundOrigin\n              backgroundClip\n              backgroundAttachment\n              backgroundBlendMode\n              width\n              height\n            }\n            gutterTop\n            gutterRight\n            gutterBottom\n            gutterLeft\n          }\n          container {\n            background\n            backgroundColor\n            backgroundImage\n            backgroundPosition\n            backgroundSize\n            backgroundRepeat\n            backgroundOrigin\n            backgroundClip\n            backgroundAttachment\n            backgroundBlendMode\n            padding\n            borderRadius\n          }\n        }\n      }\n    }\n  }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},c=i("tQaH"),s=i.n(c),m=i("VrFO"),k=i.n(m),g=i("Y9Ll"),v=i.n(g),p=i("N+ot"),b=i.n(p),h=i("AuHH"),N=i.n(h),F=i("5Yy7"),f=i.n(F),y=i("KEM+"),S=i.n(y),C={backgroundColor:"#fff"},A={position:"fixed",width:"100%",height:"100%",top:"0",display:"none",bottom:"0",left:"0",right:"0",zIndex:"10",background:"rgba(0,0,0,0.5)"},L=function(e){switch(e){case"small":case"medium":case"large":case"default":return null;default:return e}},R=function(e){switch(e){case"small":return 5;case"medium":return 10;case"large":return 15;case"default":return null;case"none":default:return 0}},w=function(e){function n(){return k()(this,n),b()(this,N()(n).apply(this,arguments))}return f()(n,e),v()(n,[{key:"getLoadingStyles",value:function(){return this.props.isLoading?A:{}}},{key:"render",value:function(){var e=this.props,i=e.lookAndFeel,t=e.isThemed,r=e.isContentView,d=t||r,o=d?n._getContainerStyles(i):this.getLoadingStyles(),u=d?n._getInlineCommentStyles(i):null;return a.a.createElement("div",{className:this.props.className,style:o},u,this.props.children)}}],[{key:"_getContainerStyles",value:function(e){if(!e.content)return C;var n=e.content,i=n.screen,t=n.container,a=s()({},C,t),r=i.gutterTop,d=i.gutterBottom;r&&(a.marginTop=L(i.gutterTop)),d&&(a.marginBottom=L(i.gutterBottom));var o=R(i.gutterRight),u=R(i.gutterLeft);return null!==o&&(a.marginRight="".concat(o,"%")),null!==u&&(a.marginLeft="".concat(u,"%")),a.width="".concat(100-o-u,"%"),a.boxSizing="border-box",a}},{key:"_getInlineCommentStyles",value:function(e){if(!e.content)return null;var n=e.content.screen;return 0===R((void 0===n?{}:n).gutterRight)?a.a.createElement("style",null,".ic-sidebar.ic-is-spa-view-page { margin-right: 0 !important; }"):null}}]),n}(t.Component);S()(w,"defaultProps",{isContentView:!1,lookAndFeel:{content:{screen:C}}}),w.displayName="ContentContainerComponent",i.d(n,"a",function(){return E});var E=function(e){var n,i=e.isThemed,t=e.children,o=e.isContentView,c=e.spaceKey;return n=void 0!==i&&!i,a.a.createElement(d.a,null,a.a.createElement(r.d,{query:l,variables:{spaceKey:c},skip:n},function(e){var n=e.data,i=e.loading,r=e.error;if(r)throw r;var d=Boolean(u()(n,"space.theme")),l=u()(n,"space.lookAndFeel")||{};return a.a.createElement(w,{isThemed:d,lookAndFeel:l,isContentView:o,isLoading:i},t)}))};E.displayName="ContentContainer"},ak4O:function(e,n,i){"use strict";i.d(n,"a",function(){return F});var t=i("tQaH"),a=i.n(t),r=i("VrFO"),d=i.n(r),o=i("Y9Ll"),u=i.n(o),l=i("N+ot"),c=i.n(l),s=i("AuHH"),m=i.n(s),k=i("5Yy7"),g=i.n(k),v=(i("aWzz"),i("ERkP")),p=i.n(v),b=i("2srY"),h=i.n(b),N={display:"block",position:"absolute",width:"100%",top:0,left:0,height:250},F=function(e){function n(){return d()(this,n),c()(this,m()(n).apply(this,arguments))}return g()(n,e),u()(n,[{key:"render",value:function(){var e=this.props.lookAndFeel;if(!e||!e.content)return null;var n=h()(e,"content.screen.layer")||{};return p.a.createElement("div",{style:a()({},N,n)})}}]),n}(v.Component);F.displayName="ContentScreenBackgroundLayer"}}]);
//# sourceMappingURL=adg3.space.blog~space.overview~space.viewpage.238e1a3a4ef6b59c7155-v38.js.map