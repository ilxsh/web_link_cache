(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"/CY5":function(e,n,t){"use strict";n.a={isDashboard:function(e){return"/spa.action"===e},getSpaceKey:function(e){if("string"!=typeof e)return null;var n=e.match(/\/*spaces\/(.*?)\/overview/);return n?decodeURIComponent(n[1]):null},SITE_HOME_QUERY_KEY:"mode",SITE_HOME_QUERY_VALUE:"global"}},"17lG":function(e,n,t){"use strict";t.d(n,"b",function(){return s}),t.d(n,"a",function(){return o});var a=t("Jygk"),r=t.n(a),c=t("k8+f");function s(e){try{return r.a.require(e),!0}catch(e){return!1}}function o(e,n){e.listener;var t=e.module,a=e.interval,r=void 0===a?250:a;Object(c.a)({listener:"wait-for-required-module ".concat(t),globalProperty:"require"},function(){if(s(t))n();else var e=setInterval(function(){s(t)&&(clearInterval(e),n())},r)})}},"6lDt":function(e,n,t){"use strict";n.a={TOOLS_MENU_CONTAINER:"system.content.action",TOOLS_MENU_MARKER:"system.content.action/marker",TOOLS_MENU_LEADING:"system.content.action/leading",TOOLS_MENU_PRIMARY:"system.content.action/primary",TOOLS_MENU_SECONDARY:"system.content.action/secondary",TOOLS_MENU_MODIFY:"system.content.action/modify",PAGE_BUTTONS:"system.content.button",SYSTEM_DASHBOARD:"system.dashboard",SYSTEM_DASHBOARD_BUTTON:"system.dashboard.button",SYSTEM_CONTENT_BYLINE:"system.content.byline",SYSTEM_CONTENT_METADATA:"system.content.metadata",PAGE_METADATA_BANNER:"page.metadata.banner",SYSTEM_HEADER_LEFT:"system.header/left",SYSTEM_HEADER_LEFT_BUTTON_GROUP:"system.header/left.button.group",SYSTEM_HELP:"system.help/pages",SYSTEM_USER_ANONYMOUS:"system.user/anonymous",SYSTEM_USER:"system.user",SYSTEM_ADMIN_SITE_SECTION:"system.admin.site/site_admin_section",SPACE_SIDEBAR:"system.space.sidebar/main-links",SYSTEM_ADMIN:"system.admin",SYSTEM_EDITOR_LINK_BROWSER_TABS:"system.editor.link.browser.tabs",SYSTEM_EDITOR_PRECURSOR_BUTTONS:"system.editor.precursor.buttons",CREATE_DIALOG:"system.create.dialog/content",DASHBOARD_LEFT:"atl.dashboard.left",DASHBOARD_SECONDARY:"atl.dashboard.secondary",ATL_GENERAL:"atl.general",ATL_FOOTER:"atl.footer",ATL_PAGE_METADATA:"atl.page.metadata.banner",ATL_PAGE_CONTENT_FOOTER_ACTIONS:"atl.page.content.footer.actions",ATL_EDITOR_SAVEBAR:"atl.editor.savebar",SYSTEM_ADMIN_SITE_ADMINISTRATION:"system.admin/siteadministration"}},CKyl:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a={WHEEL:1};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!(e.button===a.WHEEL||e.metaKey||e.ctrlKey||e.shiftKey)}},DMQv:function(e,n,t){"use strict";var a=t("Ci1e"),r=t("jEko"),c=t("yLtY"),s={changeSets:new a.schema.Array({user:c.M,recentUpdates:new a.schema.Array(c.l)})},o={results:new a.schema.Array(c.l)},i={resultList:new a.schema.Array(c.l)};t.d(n,"m",function(){return u}),t.d(n,"o",function(){return l}),t.d(n,"c",function(){return E}),t.d(n,"h",function(){return d}),t.d(n,"a",function(){return f}),t.d(n,"v",function(){return O}),t.d(n,"t",function(){return _}),t.d(n,"k",function(){return T}),t.d(n,"i",function(){return A}),t.d(n,"e",function(){return S}),t.d(n,"j",function(){return b}),t.d(n,"l",function(){return I}),t.d(n,"g",function(){return N}),t.d(n,"u",function(){return m}),t.d(n,"d",function(){return p}),t.d(n,"r",function(){return C}),t.d(n,"f",function(){return R}),t.d(n,"n",function(){return g}),t.d(n,"p",function(){return y}),t.d(n,"w",function(){return w}),t.d(n,"s",function(){return D}),t.d(n,"q",function(){return v}),t.d(n,"b",function(){return L});Object(c.I)("DASHBOARD_VIEW_MODEL",r.a.views.dashboard);var u=Object(c.I)("SPACE_INFO",r.a.spaces.space,{schema:c.J.spaces}),l=Object(c.I)("SPACE_CUSTOM_SETTINGS",r.a.spaces.customSettings,{schema:c.J.space}),E=Object(c.I)("ANONYMOUS_SPACES",r.a.spaces.anonymous,{schema:c.J.spaces}),d=Object(c.I)("FAVOURITED_SPACES",r.a.spaces.favourited,{schema:c.J.spaces}),f=(Object(c.I)("RECENTLY_VISITED_SPACES",r.a.spaces.recentlyVisited,{schema:c.J.spaces}),Object(c.I)("SPACE_LABELS",r.a.spaces.labels),Object(c.I)("SPACE_FAVOURITE",r.a.spaces.favourite)),O=Object(c.I)("SPACE_UNFAVOURITE",r.a.spaces.unfavourite),_=Object(c.I)("SPACE_HOME_CONTENT",r.a.spaces.spaceHomeContent,{schema:c.J.content}),T=(Object(c.I)("DELETE_ATTACHMENT",r.a.content.deleteContent),Object(c.I)("LABELS",r.a.spaces.labels),Object(c.I)("RECENTLY_UPDATED_CONTENT",r.a.content.recentlyUpdated,{schema:s})),A=Object(c.I)("POPULAR_CONTENT",r.a.content.popular,{schema:i}),S=Object(c.I)("DRAFTS_CONTENT",r.a.content.drafts,{schema:o}),b=Object(c.I)("RECENT_WORK_CONTENT",r.a.content.recentlyUpdatedByCurrentUserWithDrafts,{schema:o}),I=Object(c.I)("RECENTLY_VISITED_CONTENT",r.a.content.recentlyVisitedByCurrentUser,{schema:o}),N=Object(c.I)("FAVOURITED_CONTENT",r.a.content.favouritedByCurrentUser,{schema:o}),m=(Object(c.I)("WEBPANELS_FOR_LOCATION_BATCHED",r.a.webPanels.forLocationBatched,{schema:{webPanels:new a.schema.Array(c.J.webPanel)}}),Object(c.I)("UNFAVOURITE_CONTENT",r.a.content.unfavourite)),p=(Object(c.I)("SPACE_WATCH_ADD",r.a.watches.add),Object(c.I)("SPACE_WATCH_DELETE",r.a.watches.delete),Object(c.I)("GET_APP_SWITCHER_LINKS",r.a.appSwitcher.getAppSwitcherLinks)),C=Object(c.I)("FEATURE_DISCOVERED_MARK",r.a.featureDiscovery.markDiscovered),R=(Object(c.I)("FOLLOW_USER",r.a.users.follow,{schema:c.J.user}),Object(c.I)("UNFOLLOW_USER",r.a.users.unfollow,{schema:c.J.user}),Object(c.I)("EDITOR_CONTENT_METADATA",r.a.content.editPageMetadata,{schema:c.J.content})),g=Object(c.I)("SPACE_CALENDAR",r.a.views.spaceCalendar),y=(Object(c.I)("UPDATE_SPACE_LOGO",r.a.spaces.logo,{schema:c.J.space}),Object(c.I)("SPACE_HOME_OVERRIDE_CONTENT",r.a.atlassianConnect.getConnectModuleDescriptor,{schema:c.J.connectModule})),h={RECENTLY_VISITED_CONTENT:r.a.content.recentlyVisitedByCurrentUser,RECENT_WORK_CONTENT:r.a.content.recentlyUpdatedByCurrentUserWithDrafts,FAVOURITED_CONTENT:r.a.content.favouritedByCurrentUser,DRAFTS_CONTENT:r.a.content.drafts};function w(e,n){return Object(c.I)(e,h[e],{schema:o})(n)}Object(c.I)("USER_DARK_FEATURE",r.a.settings.addUserDarkFeature);var D=Object(c.I)("SEND_ANALYTICS",r.a.settings.sendAnalytics),v=Object(c.I)("UNREAD_NOTIFICATION_COUNT",r.a.notification.getUnreadCount),L=Object(c.I)("ABOUT_CONFLUENCE",r.a.content.getAboutConfluence)},TSlp:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return o});var a=t("hqKg"),r=t("sbiO"),c=t("/CY5"),s=function(e){return e.views.app.lookAndFeelId},o=Object(a.createSelector)([function(e){return e&&Object(r.N)(e)&&Object(r.C)(e)&&Object(r.C)(e).spaceKey||e.meta&&e.meta.get("space-key")},function(e){return Object(r.N)(e)&&Object(r.v)(e).query[c.a.SITE_HOME_QUERY_KEY]===c.a.SITE_HOME_QUERY_VALUE},s,function(e){return e.entities.get("lookAndFeelSettings")},function(e){return e.entities.get("spaces")}],function(e,n,t,a,r){return n||!e?function(e,n){if(!n)return{};var t=n.get(e);return t?t.toJS():{}}(t,a):function(e,n){var t=n.get(e);return t&&t.get("lookAndFeel")?t.get("lookAndFeel").toJS():{}}(e,r)})},cMUv:function(e,n,t){"use strict";t.d(n,"a",function(){return N});var a=t("RhWx"),r=t.n(a),c=t("VrFO"),s=t.n(c),o=t("N+ot"),i=t.n(o),u=t("AuHH"),l=t.n(u),E=t("1Pcy"),d=t.n(E),f=t("5Yy7"),O=t.n(f),_=t("KEM+"),T=t.n(_),A=(t("ERkP"),t("lZoD")),S=t("Jygk"),b=t.n(S),I="ServerRenderedBanners",N=function(e){function n(){var e;return s()(this,n),e=i()(this,l()(n).call(this)),T()(d()(e),"_findBanner",function(n){return e.state.banners.indexOf(e.state.banners.filter(function(e){return e.name===n})[0])}),T()(d()(e),"_updateServerRenderedBanners",function(n){0===n?e.hide(I):e.show(I,n)}),T()(d()(e),"show",function(n,t){var a=e._findBanner(n);if(-1===a){var c=r()(e.state.banners);c.push({name:n,height:t}),e.setState(function(){return{banners:c}})}else if(e.state.banners[a].height!==t){var s=r()(e.state.banners);s[a].height=t,e.setState(function(){return{banners:s}})}}),T()(d()(e),"hide",function(n){var t=e._findBanner(n);if(t>-1){var a=r()(e.state.banners);a.splice(t,1),e.setState(function(){return{banners:a}})}}),T()(d()(e),"getTotalHeight",function(){return e.state.banners.reduce(function(e,n){return e+n.height},0)}),e.state={banners:[]},b.a.legacyMessageQueue&&"function"==typeof b.a.legacyMessageQueue.push&&b.a.legacyMessageQueue.push({type:"ATLASSIAN_CONFLUENCE_BANNER_REGISTER_CALLBACK",payload:e._updateServerRenderedBanners}),e}return O()(n,e),n}(A.a)},iLhO:function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return i});var a=t("ERkP"),r=t.n(a),c=t("x+QU"),s=t.n(c),o=s()({loader:function(){return Promise.all([t.e(0),t.e(4),t.e(5),t.e(14),t.e(18),t.e(29),t.e(17),t.e(23),t.e(393)]).then(t.bind(null,"wv4k"))},loading:function(){return null}}),i=s()({loader:function(){return Promise.all([t.e(141),t.e(104),t.e(392)]).then(t.bind(null,"yRof"))},loading:function(){return null}}),u=function(e){var n=e.contentId,t=e.spaceKey,c=e.draftShareId;return r.a.createElement(a.Fragment,null,r.a.createElement(i,{contentId:n,spaceKey:t,draftShareId:c}),r.a.createElement(o,{contentId:n,spaceKey:t,draftShareId:c}))};u.displayName="Loader",n.c=u},"k8+f":function(e,n,t){"use strict";function a(e){for(var n=e.split("."),t=window[n.shift()];void 0!==t&&n.length;)t=t[n.shift()];return t}t.d(n,"a",function(){return c});function r(e){0}function c(e,n){var t=e.listener,c=e.globalProperty,s=e.interval,o=void 0===s?250:s;if(a(c))return r("window.".concat(c," is already available for use by ").concat(t,".")),n(),null;var i=setInterval(function(){r("".concat(t," is waiting for window.").concat(c," to be available")),a(c)&&(r("window.".concat(c," now available!")),clearInterval(i),n())},o);return{cancel:function(){i&&clearInterval(i)}}}},"lZ+S":function(e,n,t){"use strict";var a=["wr!confluence.web.resources:navigator-context","wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5"];n.a={CONNECT:a,EDITOR_LOADER:[].concat(a,["wr!confluence.web.resources:breadcrumbs","wr!confluence.web.resources:page-permissions-deferred-loader","wr!com.atlassian.confluence.plugins.editor-loader:background-loading-editor","wr!com.atlassian.confluence.plugins.quickedit:quick-edit-general","wr!com.atlassian.confluence.plugins.quickedit:quick-comment-initial"]),CONFLUENCE_PREVIEWER:["wr!com.atlassian.confluence.plugins.confluence-previews:fallback-mode","wrc!media-viewer"],CREATE_DIALOG:["wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:resources","wr!com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:blueprint-css-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:icons-css-resources","wr!com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources"],CONFLUENCE_SPACE_IA:["wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog","wr!com.atlassian.confluence.plugins.confluence-link-browser:link-browser","wr!com.atlassian.confluence.plugins.confluence-link-browser:linkbrowser-css-resources"],FLAGS:["wr!confluence.aui.staging:confluence-flags"]}}}]);
//# sourceMappingURL=admin-navigation-v1~global-navigation-v1~root~space-navigation-v1.0960b6506bdae0d4f7bb-v38.js.map