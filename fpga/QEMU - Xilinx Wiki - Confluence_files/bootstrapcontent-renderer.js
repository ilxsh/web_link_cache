(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1:function(e,t){},2:function(e,t){},3:function(e,t){},KuJZ:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("ERkP"),i=n.n(r).a.createContext(void 0)},"L+/v":function(e,t,n){"use strict";n.d(t,"a",function(){return R});var r,i,a=n("tQaH"),o=n.n(a),u=n("VrFO"),c=n.n(u),s=n("Y9Ll"),l=n.n(s),d=n("N+ot"),f=n.n(d),p=n("AuHH"),h=n.n(p),m=n("1Pcy"),v=n.n(m),b=n("5Yy7"),g=n.n(b),E=n("KEM+"),y=n.n(E),k=n("ERkP"),S=n.n(k),w=(n("aWzz"),n("L21V")),A=n("OOEx"),C=n.n(A),M=n("Pydg"),O=n("ZmIu"),T=n("KkZ4"),L=n("hE99"),F=n("w1By"),x=n("Zpwg"),I=n("Ly6k"),P=Object(w.f)({closeButton:{id:"error-boundary.close",description:"Button to close the dialog",defaultMessage:"Close"}}),j=function(e){if(e&&e.graphQLErrors&&0!==e.graphQLErrors.length)return e.graphQLErrors[0].traceId},R=Object(w.g)((i=r=function(e){function t(){var e,n;c()(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=f()(this,(e=h()(t)).call.apply(e,[this].concat(i))),y()(v()(n),"state",{caughtError:null,isModalClosed:!1}),y()(v()(n),"onCloseModal",function(){n.setState({isModalClosed:!0})}),n}return g()(t,e),l()(t,[{key:"componentDidCatch",value:function(e,t){var n=this.props.attribution,r=j(e);Object(I.b)().noticeError(e,o()({attribution:n,componentStack:t.componentStack},r?{traceId:r}:{})),Object(T.getAnalyticsWebClient)().then(function(i){i.sendOperationalEvent({source:"ui",action:"unhandledError",actionSubject:"ui",attributes:o()({error:e.message||String(e),componentStack:t.componentStack,browserInfo:window.navigator.userAgent,source:n},r?{traceId:r}:{})})}),this.setState({caughtError:{error:e,info:t}})}},{key:"getErrorString",value:function(){var e=this.state.caughtError,t=e.error,n=e.info,r=j(t),i=r?"\n Trace ID: ".concat(r):"";return"Error: ".concat(t.message||String(t),".\nError info: ").concat(n.componentStack,".").concat(i)}},{key:"getFrontendVersion",value:function(){var e=L.b||"undefined";return S.a.createElement(w.b,{id:"error-boundary.frontendVersion",description:"label for version",defaultMessage:"Frontend Version: {frontendVersion}",values:{frontendVersion:e},tagName:"p"})}},{key:"renderErrorDetail",value:function(){return S.a.createElement("div",null,S.a.createElement(k.Fragment,null,S.a.createElement(w.b,{id:"error-boundary.description",description:"Additional text shown when displaying a technical error. {atlassianSupportLink} will be substituted with a message that has id='error-boundary.description.support-link' which reads as 'Atlassian Support' by default.",defaultMessage:"Our team has been notified. If the problem persists, please contact {atlassianSupportLink}.",tagName:"p",values:{atlassianSupportLink:S.a.createElement("a",{target:"_blank",href:"https://support.atlassian.com/contact/#/"},S.a.createElement(w.b,{id:"error-boundary.description.support-link",description:"Text for a link that will lead the user to Atlassian Support web site. This link will be inserted into another text string with id='error-boundary.description', which by default reads 'Our team has been notified. If the problem persists, please contact <THIS_MESSAGE>.'",defaultMessage:"Atlassian Support"}))}})),this.getFrontendVersion(),S.a.createElement("h3",null,"Error details:"),S.a.createElement("pre",{style:{whiteSpace:"pre-wrap",borderLeft:"2px solid red",paddingLeft:20}},this.getErrorString()))}},{key:"render",value:function(){var e=this.state,t=e.caughtError,n=e.isModalClosed,r=this.props,i=r.modal,a=r.intl;if(!t)return this.props.children;var o=S.a.createElement(w.b,{id:"error-boundary.title",description:"Title shown when displaying a technical error",defaultMessage:"Something's gone wrong"});if(i){var u=[{text:i.closeText||a.formatMessage(P.closeButton),onClick:i.onClose||this.onCloseModal}];return S.a.createElement(M.b,null,n?null:S.a.createElement(O.a,{appearance:"danger",heading:o,actions:u},this.renderErrorDetail()),S.a.createElement(F.a,{error:t.error}),S.a.createElement(x.b,null))}return S.a.createElement("div",{style:{padding:20}},S.a.createElement("h3",null,S.a.createElement("span",{style:{color:"#DE350B",marginRight:10}},S.a.createElement(C.a,{size:"medium",label:""})),o),this.renderErrorDetail(),S.a.createElement(F.a,{error:t.error}),S.a.createElement(x.b,null))}}]),t}(k.Component),y()(r,"defaultProps",{attribution:"unknown",modal:null}),i))},Ly6k:function(e,t,n){"use strict";n.d(t,"a",function(){return f}),n.d(t,"b",function(){return p});var r,i=n("T0aG"),a=n.n(i),o=n("VrFO"),u=n.n(o),c=n("Y9Ll"),s=n.n(c),l=n("KEM+"),d=n.n(l),f=function(){function e(){u()(this,e),d()(this,"implementation",window.newrelic)}return s()(e,[{key:"noticeError",value:function(e,t){"object"===a()(this.implementation)&&this.implementation.noticeError(e,t)}},{key:"addPageAction",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===a()(this.implementation)&&this.implementation.addPageAction(e,t)}},{key:"setPageViewName",value:function(e){"object"===a()(this.implementation)&&this.implementation.setPageViewName(e)}},{key:"addRelease",value:function(e,t){"object"===a()(this.implementation)&&this.implementation.addRelease(e,t)}},{key:"setCustomAttribute",value:function(e,t){"object"===a()(this.implementation)&&this.implementation.setCustomAttribute(e,t)}}]),e}(),p=function(){return r||(r=new f),r}},M2LZ:function(e,t,n){"use strict";var r,i=n("Jygk"),a=n.n(i);var o={require:function(e,t){return void 0!==a.a.WRM&&void 0!==a.a.WRM.require?a.a.WRM.require(e,t):function(){return r||(r=new Promise(function(e){var t=a.a.setInterval(function(){void 0!==a.a.WRM&&void 0!==a.a.WRM.require&&(a.a.clearInterval(t),e())},50)}))}().then(function(){return a.a.WRM.require(e,t)})}},u=n("97Jx"),c=n.n(u),s=n("VrFO"),l=n.n(s),d=n("Y9Ll"),f=n.n(d),p=n("N+ot"),h=n.n(p),m=n("AuHH"),v=n.n(m),b=n("1Pcy"),g=n.n(b),E=n("5Yy7"),y=n.n(E),k=n("tQaH"),S=n.n(k),w=n("ERkP"),A=n.n(w);var C=function(e,t){var n=S()({isBlocking:!0,separateRequires:!1},t);return function(t){var r=function(r){function i(){var e;return l()(this,i),(e=h()(this,v()(i).call(this))).state={dependenciesLoaded:!1},e.markAsLoaded=e.markAsLoaded.bind(g()(e)),e}return y()(i,r),f()(i,[{key:"componentDidMount",value:function(){this.isUnmounted=!1,e&&e.length>0?n.separateRequires?Promise.all(e.map(function(e){return o.require(e)})).then(this.markAsLoaded):o.require(e).then(this.markAsLoaded):this.markAsLoaded()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e||this.state!==t}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0}},{key:"markAsLoaded",value:function(){!1===this.isUnmounted&&this.setState({dependenciesLoaded:!0})}},{key:"render",value:function(){var e=this.state.dependenciesLoaded;return e||!n.isBlocking?A.a.createElement(t,c()({},this.props,{wrmDependenciesLoaded:e})):null}}]),i}(w.Component);return r.displayName="WRMComponent",r.displayName="WRMComponent(".concat(t.name,")"),r}};n.d(t,"a",function(){return o}),n.d(t,"b",function(){return C})},OlTx:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a});var r={PAGE_COMMENT_ADD:"pageCommentAdd",PAGE_COMMENT_PUBLISH:"pageCommentPublish",PAGE_COMMENT_CLOSE:"pageCommentClose",PAGE_VIEW:"pageView",PAGE_EDIT:"pageEdit",PAGE_CREATE:"pageCreate",PAGE_PUBLISH:"pagePublish",PAGE_CLOSE:"pageClose"},i={START:"taskStart",SUCCESS:"taskSuccess",FAIL:"taskFail"},a={IMMEDIATE_SUCCESS:"IMMEDIATE_SUCCESS",IMMEDIATE_FAILURE:"IMMEDIATE_FAILURE",ATTEMPT:"ATTEMPT"}},VSaf:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("ERkP"),i=n.n(r),a=n("nnm9"),o=n.n(a),u=i.a.createContext({onSuccess:o.a,onFailure:o.a,onAttempt:o.a})},Zpwg:function(e,t,n){"use strict";var r=n("VrFO"),i=n.n(r),a=n("Y9Ll"),o=n.n(a),u=n("N+ot"),c=n.n(u),s=n("AuHH"),l=n.n(s),d=n("5Yy7"),f=n.n(d),p=n("KEM+"),h=n.n(p),m=n("ERkP"),v=n.n(m),b=n("aWzz"),g=n.n(b),E=n("VSaf"),y=n("OlTx"),k=function(e){function t(){return i()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"componentDidMount",value:function(){this._fireTracking()}},{key:"componentDidUpdate",value:function(){this._fireTracking()}},{key:"_fireTracking",value:function(){var e=this.props,t=e.type,n=e.onFailure,r=e.onSuccess,i=e.onAttempt;switch(t){case y.a.IMMEDIATE_FAILURE:n();break;case y.a.IMMEDIATE_SUCCESS:r();break;case y.a.ATTEMPT:i()}}},{key:"render",value:function(){return v.a.createElement("div",null)}}]),t}(m.Component);function S(e){var t,n;return n=t=function(t){function n(){return i()(this,n),c()(this,l()(n).apply(this,arguments))}return f()(n,t),o()(n,[{key:"render",value:function(){return v.a.createElement(E.a.Consumer,null,function(t){return null===t?null:v.a.createElement(k,{onFailure:t.onFailure,onSuccess:t.onSuccess,onAttempt:t.onAttempt,type:e})})}}]),n}(m.Component),h()(t,"displayName","createExperienceTracker"),n}k.displayName="ExperienceTrackerConsumer";var w=function(e){function t(){return i()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"componentDidCatch",value:function(e){throw this.props.onFailure(),e}},{key:"render",value:function(){return this.props.children}}]),t}(m.Component);h()(w,"displayName","ExperienceWrapper"),w.displayName="ExperienceTrackerWrapper",n.d(t,"d",function(){return A}),n.d(t,"c",function(){return C}),n.d(t,"b",function(){return M}),n.d(t,"a",function(){return O});var A=function(){var e,t;return t=e=function(e){function t(){return i()(this,t),c()(this,l()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.children;return v.a.createElement(E.a.Consumer,null,function(t){return null===t?e:v.a.createElement(w,{onFailure:t.onFailure},e)})}}]),t}(m.Component),h()(e,"displayName","TrackerWrapper"),t}();A.displayName="ExperienceWrapper",A.propTypes={children:g.a.node};var C=S(y.a.IMMEDIATE_SUCCESS);C.displayName="ExperienceSuccessTracker";var M=S(y.a.IMMEDIATE_FAILURE);M.displayName="ExperienceFailureTracker";var O=S(y.a.ATTEMPT);O.displayName="ExperienceAttemptTracker"},bx1d:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var r=n("RhWx"),i=n.n(r),a=n("tQaH"),o=n.n(a),u=n("VrFO"),c=n.n(u),s=n("N+ot"),l=n.n(s),d=n("AuHH"),f=n.n(d),p=n("1Pcy"),h=n.n(p),m=n("5Yy7"),v=n.n(m),b=n("KEM+"),g=n.n(b),E=function(e){function t(e){var n;return c()(this,t),n=l()(this,f()(t).call(this)),g()(h()(n),"showFlag",function(e){var t=n.state,r=t.flags,a=t.nextFlagId;if(!r.find(function(t){return t.id===e.id})){var u=o()({id:a},e);return n.setState({flags:[].concat(i()(n.state.flags),[u]),nextFlagId:a+1}).then(function(){return u})}}),g()(h()(n),"hideFlag",function(e){n.setState({flags:n.state.flags.filter(function(t){return t.id!==e})})}),g()(h()(n),"showSuccessFlag",function(e){var t=e.title,r=e.description,i=e.actions,a=e.onClose;return n.showFlag({type:"success",title:t,description:r,close:"auto",actions:i,onClose:a})}),g()(h()(n),"showInfoFlag",function(e){var t=e.title,r=e.description,i=e.actions,a=e.onClose;return n.showFlag({type:"info",title:t,description:r,actions:i,onClose:a})}),g()(h()(n),"showWarningFlag",function(e){var t=e.title,r=e.description,i=e.actions,a=e.onClose;return n.showFlag({type:"warning",title:t,description:r,actions:i,onClose:a})}),g()(h()(n),"showErrorFlag",function(e){var t=e.title,r=e.description,i=e.actions,a=e.onClose;return n.showFlag({type:"error",title:t,description:r,actions:i,onClose:a})}),n.state={flags:e||[],nextFlagId:e?e.length:0},n}return v()(t,e),t}(n("lZoD").a)},cGYM:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u}),n.d(t,"c",function(){return c});var r=n("VrFO"),i=n.n(r),a=function e(t){var n=this;i()(this,e),this.value=t,this.valueOf=this.toString=this.toJSON=function(){return n.value}},o=function(e){return new a(e)},u=function(e){return e instanceof a},c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.includes(e)?Object.freeze(new a(e)):e}}},daKX:function(e,t,n){"use strict";n.d(t,"a",function(){return l});n("RhWx");var r=n("VrFO"),i=n.n(r),a=n("Y9Ll"),o=n.n(a),u=n("KEM+"),c=n.n(u);var s=function(){function e(t){i()(this,e),c()(this,"name",void 0),this.name=function(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}(t)}return o()(e,[{key:"log",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.logAnyLevel(console.log,"#009966",e,n)}},{key:"debug",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.logAnyLevel(console.debug,"#999",e,n)}},{key:"info",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.logAnyLevel(console.info,"#4488dd",e,n)}},{key:"warn",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.logAnyLevel(console.warn,"black",e,n)}},{key:"error",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.logAnyLevel(console.error,"black",e,n)}},{key:"logAnyLevel",value:function(e,t,n,r){}}]),e}(),l=function(e){return new s(e)}},f6W2:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var r=function(e){return!e.isServerRenderedPage&&Boolean(e.router)},i=function(e){return!e.isServerRenderedPage&&e.router?e.router.location:{}},a=function(e){var t=i(e);return t&&t.query?t.query:{}},o=function(e){return!e.isServerRenderedPage&&e.router?e.router.params:{}}},hpu0:function(e,t,n){"use strict";var r=n("ddV6"),i=n.n(r),a=n("lSUb"),o=n("KkZ4"),u=n("Ly6k"),c=n("7wq/"),s=n.n(c),l=n("tQaH"),d=n.n(l),f=n("VrFO"),p=n.n(f),h=n("Y9Ll"),m=n.n(h),v=n("KEM+"),b=n.n(v),g=n("daKX");function E(){var e=s()(["Error occurred in ExperienceTracker subscriber ",""]);return E=function(){return e},e}function y(){var e=s()([""," ",""]);return y=function(){return e},e}var k=function(){function e(){p()(this,e),b()(this,"experiences",{}),b()(this,"subscribers",[]),b()(this,"logger",Object(g.a)(e))}return m()(e,[{key:"start",value:function(e){var t=this,n=e.name,r=e.id,i=e.timeout,a=e.onSuccess,o=e.onFailure,u=e.onAbort,c=this.experiences[n];if(!c||c.id!==r){c&&!c.hasStopped&&this.abort({name:n,reason:"Aborted because the same experience was started with a new id"});var s={name:n,id:r,hasStopped:!1,startTime:window.performance.now(),onSuccess:a,onFailure:o,onAbort:u};this.experiences[n]=s,null!=i&&(s.timer=window.setTimeout(function(){t.fail({name:n,error:new Error("Experience failed to complete in ".concat(i,"ms"))})},i)),this.emit("taskStart",s,{timeout:i})}}},{key:"succeed",value:function(e){var t=e.name,n=this.experiences[t];n&&(n.hasStopped||(this.stop(n),this.emit("taskSuccess",n),n.onSuccess&&n.onSuccess()))}},{key:"fail",value:function(e){var t=this,n=e.name,r=e.error;Object.values(this.experiences).forEach(function(e){null!=n&&e.name!==n||e.hasStopped||(t.stop(e),t.emit("taskFail",e,{errorMessage:r.message}),e.onFailure&&e.onFailure())})}},{key:"abort",value:function(e){var t=this,n=e.name,r=e.reason;Object.values(this.experiences).forEach(function(e){null!=n&&e.name!==n||e.hasStopped||(t.stop(e),t.emit("taskAbort",e,{reason:r}),e.onAbort&&e.onAbort())})}},{key:"subscribe",value:function(e){var t=this;if("function"!=typeof e)throw new Error("Subscriber must be a function");return this.subscribers.push(e),function(){t.subscribers=t.subscribers.filter(function(t){return t!==e})}}},{key:"stop",value:function(e){e.hasStopped=!0,null!=e.timer&&window.clearTimeout(e.timer)}},{key:"emit",value:function(e,t){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=d()({task:t.name,taskId:t.id},r);"taskStart"!==e&&(i.duration=Math.round(window.performance.now()-t.startTime)),this.logger.log(y(),e,i),this.subscribers.forEach(function(t){try{t({action:e,attributes:i})}catch(e){n.logger.error(E(),e)}})}}]),e}();n.d(t,"a",function(){return S});var S=Object(a.a)(function(){var e=new k;return e.subscribe(function(e){var t=e.action,n=e.attributes;Object(o.getAnalyticsWebClient)().then(function(e){e.sendOperationalEvent({source:"ui",actionSubject:"ui",action:t,attributes:n})})}),e.subscribe(function(e){var t=e.action,n=e.attributes,r={};Object.entries(n).forEach(function(e){var t=i()(e,2),n=t[0],a=t[1];null!=a&&(r[n]="string"==typeof a||"number"==typeof a?a:JSON.stringify(a))}),Object(u.b)().addPageAction("experience-tracker:".concat(t),r),"number"==typeof n.duration&&Object(u.b)().addPageAction("metric.performance:experience-tracker:".concat(t),r)}),e})},kR5U:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c});var r=n("hqKg"),i=n("pPdq"),a=Object(r.createSelector)(function(e){return e.meta},function(e){return!e||!e.get("atlassian-account-id")}),o=function(e){return e.meta?e.meta.get("enabled-dark-features","").split(","):[]},u=Object(r.createSelector)(o,function(e,t){return t},function(e,t){return e.indexOf(t)>-1&&-1===e.indexOf("".concat(t,".disable"))}),c=Object(r.createSelector)(function(e){return e},function(e,t){return t.meta.get("content-type","")},function(e,t){return t.toLowerCase()===e.toLowerCase()}),s=function(e,t,n){var r=u(e,t)===n,a=Object(i.a)(e,t)===n;return!1===n?r&&a:r||a},l=function(e){return void 0===e.find(function(e){return!e})};Object(r.createSelector)(function(e){return e},function(e,t){return t},function(e,t){var n=t.map(function(t){if("string"==typeof t)return s(e,t,!0);var n=Object.keys(t).map(function(n){var r=t[n];return Array.isArray(r)?!!r.find(function(t){return s(e,n,t)}):s(e,n,r)});return l(n)});return l(n)})},pPdq:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return s});var r=n("hqKg"),i=function(e){return e.views.dashboard.viewModel},a=Object(r.createSelector)(i,function(e){return e.get("experimentFeatures")}),o=Object(r.createSelector)(i,function(e){var t=e.get("experimentFeatures");try{return JSON.parse(t)}catch(e){return{}}}),u=function(e,t){return t},c=Object(r.createSelector)(o,u,function(e,t){return e[t]||null}),s=Object(r.createSelector)(i,function(e){return e.get("abTestCohorts")}),l=Object(r.createSelector)(i,function(e){var t=e.get("abTestCohorts");try{return JSON.parse(t)}catch(e){return{}}});Object(r.createSelector)(l,u,function(e,t){return e[t]||null})},w1By:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("ERkP"),i=n("hpu0"),a=n("KuJZ");function o(e){var t=e.name,n=e.error,o=Object(r.useContext)(a.a);return Object(r.useEffect)(function(){Object(i.a)().fail({name:t||o,error:n})},[]),null}}}]);
//# sourceMappingURL=bootstrap~content-renderer.9244edfa6dba591d3a68-v38.js.map