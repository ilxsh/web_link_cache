(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{"6Ziv":function(t,e,n){"use strict";n.r(e);var o,s,a=n("uDfI"),r=n("sbiO"),c=n("DMQv"),i=n("2BEd"),p=n("VrFO"),u=n.n(p),l=n("Y9Ll"),d=n.n(l),m=n("N+ot"),f=n.n(m),_=n("AuHH"),S=n.n(_),g=n("1Pcy"),h=n.n(g),y=n("5Yy7"),C=n.n(y),v=n("KEM+"),b=n.n(v),k=(n("aWzz"),n("ERkP")),E=n.n(k),O=n("O94r"),M=n.n(O),j=n("OOEx"),B=n.n(j),K=n("7A9o"),L=n("L21V"),x=n("IGvV"),w=n("Sl8s"),N=n("fLXQ"),R=n("KEW3"),A=n.n(R),U=(o=Object(x.a)(A.a),Object(L.g)(s=o(s=function(t){function e(){var t,n;u()(this,e);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return n=f()(this,(t=S()(e)).call.apply(t,[this].concat(s))),b()(h()(n),"_bodyContainer",void 0),b()(h()(n),"_scriptContainer",void 0),b()(h()(n),"_setBodyContainerRef",function(t){n._bodyContainer=t}),b()(h()(n),"_setScriptContainerRef",function(t){n._scriptContainer=t}),n}return C()(e,t),d()(e,[{key:"componentDidMount",value:function(){this._fetch(this.props,!0)}},{key:"componentDidUpdate",value:function(){this._bootstrapMacros(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(t){this._fetch(t)}},{key:"_fetch",value:function(t){(arguments.length>1&&void 0!==arguments[1]&&arguments[1]||this._shouldUpdate(t))&&t.getSpaceCustomSettings({spaceKey:t.spaceKey})}},{key:"_shouldUpdate",value:function(t){return t.spaceKey!==this.props.spaceKey||t.isSuperbatchLoaded!==this.props.isSuperbatchLoaded}},{key:"_bootstrapMacros",value:function(t){var e=this,n=t.space,o=t.type,s=t.isSuperbatchLoaded;if(!n||!n.customSettings[o]||!n.customSettings[o].body)return null;s&&Object(N.i)([],n.customSettings[o].js,this._scriptContainer).then(function(){return Object(w.d)(e._bodyContainer)})}},{key:"render",value:function(){var t=this.props,e=t.space,n=t.type,o=t.className,s=t.intl;if(!(e&&e.customSettings&&e.customSettings[n]&&e.customSettings[n].body))return null;var a=e.customSettings[n],r=a.spaUnfriendlyMacros||[];return E.a.createElement("div",{className:A.a.root},r.length?E.a.createElement("div",{className:A.a.unsupportedMacros},E.a.createElement(B.a,{primaryColor:K.colors.Y500,label:s.formatMessage({id:"header.or.footer.unsupported.macros.title"})}),s.formatMessage({id:"header.or.footer.unsupported.macros.list"},[n]),E.a.createElement("ul",null,r.map(function(t){return E.a.createElement("li",{key:t.name},t.name)}))):null,E.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.css}}),E.a.createElement("div",{id:"custom-content-".concat(n),"data-test-id":"custom-settings-".concat(n),dangerouslySetInnerHTML:{__html:a.body},ref:this._setBodyContainerRef,className:M()(o,A.a[n])}),E.a.createElement("div",{ref:this._setScriptContainerRef}))}}]),e}(k.Component))||s)||s);e.default=Object(a.connect)(function(t){var e=Object(r.N)(t)?Object(r.C)(t).spaceKey:t.meta.get("space-key")||null;return{spaceKey:e,space:t.entities.getIn(["spaces",e],null),isSuperbatchLoaded:Object(i.a)(t)}},function(t){return{getSpaceCustomSettings:function(e){var n=e.spaceKey;return t(Object(c.o)({spaceKey:n}))}}})(U)},E5OL:function(t,e,n){(e=t.exports=n("RDo7")(!1)).push([t.i,".SpaceCustomSettingsBlockComponent_root_3le{margin:0;padding:15px 20px}.SpaceCustomSettingsBlockComponent_root_3le .SpaceCustomSettingsBlockComponent_footer_3SA{margin-top:50px}.SpaceCustomSettingsBlockComponent_unsupportedMacros_1j_>span{vertical-align:middle}",""]),e.locals={root:"SpaceCustomSettingsBlockComponent_root_3le",header:"SpaceCustomSettingsBlockComponent_header_1Uj",footer:"SpaceCustomSettingsBlockComponent_footer_3SA",unsupportedMacros:"SpaceCustomSettingsBlockComponent_unsupportedMacros_1j_"}},KEW3:function(t,e,n){var o=n("E5OL"),s=n("7l8p");"string"==typeof o&&(o=[[t.i,o,""]]),t.exports=o.locals||{},t.exports._getContent=function(){return o},t.exports._getCss=function(){return o.toString()},t.exports._insertCss=function(t){return s(o,t)}}}]);
//# sourceMappingURL=page.header-footer.d2db951a69c309e89e0b-v38.js.map