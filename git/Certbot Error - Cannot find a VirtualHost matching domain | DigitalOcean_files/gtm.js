
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"484",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",28],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",15],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",13],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",18],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",73,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",72,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",74,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",71,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",13],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",18],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",19],"\u0026var=",["macro",26]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAABHN6HlAAA==\u0026s=L9dW-RSPEAGmB8zBoGqMLMP4XUtZODdwovDmPJhIuLs=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":172
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]],["map","key","u2","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]],["map","key","u2","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]],["map","key","u2","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]],["map","key","u2","value",["macro",19]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotrys",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":177
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotryu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoaps",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":180
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",27]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoapc",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",20],
      "vtp_url":["macro",18],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":181
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",18],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",18],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/d.adroll.com\/ipixel\/S4BPDI4QWNB57PEKEZSLIP\/4IDGVTPEAFC4TM2QKYNQ53?name=be9695fc",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":207
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",20],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__cl",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":222
    },{
      "function":"__cl",
      "tag_id":223
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",29],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"VFLWra6znNQDhVczyhLehNxVWZX_uN0wG2fjEqMixMQ\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar wait_count=0,jQWait=window.setInterval(function(){window.jQuery\u0026\u0026function(){window.clearInterval(window.jQWait);var g=window.BelowTutorialPanel=function(b){$.extend(this,{activeTest:\"default\",panelBodyTarget:\"div.tutorial-ctas\",panelContentTarget:\"div.cta-description\",tagSelector:'a.tag:contains(\"$TAG\")',experimentName:\"Below Question Panel\",scrollCheckInterval:1E3},b||{},{event_fired:!1});this.initialize()};$.extend(g.prototype,{initialize:function(){this.userTraits={};this.analyticsActive()\u0026\u0026\n(this.userTraits=window.analytics.user().traits());this.audience=this.getAudience(Object.keys(this.panelData),this.parseCookies(document.cookie),this.userTraits);this.panel=this.getPanel(this.panelData[this.audience]);this.panelContent=this.panel.content[Math.floor(Math.random()*this.panel.content.length)];$(\"Footer\").css({\"margin-top\":0,\"border-top\":\"#444\",\"box-shadow\":\"0 0 20px rgba(0,0,0,0.1)\"}).before('\\x3cdiv class\\x3d\"tutorial-single\"\\x3e\\x3cdiv class\\x3d\"tutorial-footer\"\\x3e\\x3cdiv class\\x3d\"tutorial-ctas\"\\x3e \\x3cdiv class\\x3d\"section-content\"\\x3e\\x3cdiv class\\x3d\"cta-description\"\\x3e\\x3ch2\\x3e\\x3c\/h2\\x3e\\x3cp\\x3e\\x3c\/p\\x3e\\x3ca class\\x3d\"cloud-tutorial-cta\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\nthis.$panelBody=$(\".tutorial-ctas\");this.$panelBody.attr(\"style\",this.panel.style).css({\"border-bottom\":\"none\"}).find(\"h2\").html(this.panelContent.title||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\"}).end().find(\"p\").html(this.panelContent.desc||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\",padding:\"15px 0\",\"line-height\":\"1.3em\"}).end().find(\".cloud-tutorial-cta\").text(this.panelContent.cta||\"\").attr(\"style\",this.panel.darkBG?\"background:#FFF;color:#0069FF;\":\"\").attr(\"href\",this.panelContent.url+\n(0\u003Cthis.panelContent.url.indexOf(\"?\")?\"\\x26\":\"?\")+\"utm_source\\x3dcomm_exp\\x26utm_medium\\x3dbtq_\"+this.audience+\"_\"+this.panel.name);this.initTracking(this.$panelBody.offset().top,this.$panelBody.height(),this.audience+\" \\x3e \"+this.panel.name+\" \\x3e \"+this.panelContent.cta||\"\",this.$panelBody.find(\"a\"))},getPanel:function(b){var c=b.length,a,d,e=[],f=[];for(a=0;a\u003Cc;a++){if(\"tags\"in b[a])for(d=0;d\u003Cb[a].tags.length;d++)if(0\u003C$(this.tagSelector.replace(\"$TAG\",b[a].tags[d])).length)return b[a];\"priority\"in\nb[a]?0\u003Cb[a].priority\u0026\u0026(e.push({panel:a,priority:b[a].priority}),f.push(b[a])):f.push(b[a])}if(0\u003Ce.length)for(a=0;a\u003Ce.length;a++)if(Math.random()\u003Ce[a].priority)return b[e[a].panel];return f[Math.floor(Math.random()*f.length)]},getAudience:function(b,c,a){return-1\u003Cb.indexOf(\"customers\")\u0026\u0026(\"signed_in\"in c||\"ajs_user_id\"in c\u0026\u002610\u003Cc.ajs_user_id.length)?\"customers\":-1\u003Cb.indexOf(\"refcode\")\u0026\u0026\"refcode\"in c?\"refcode\":-1\u003Cb.indexOf(\"buildmode\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===\na.recent[3].length\u0026\u00268\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"buildmode\":-1\u003Cb.indexOf(\"regulars\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===a.recent[3].length\u0026\u002630\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"regulars\":\"everyone_else\"},analyticsActive:function(){return\"object\"===typeof window.analytics},parseCookies:function(b){b=b.split(\";\");var c={},a;for(a=0;a\u003Cb.length;a++){var d=b[a].split(\"\\x3d\");c[d[0].trim()]=d[1].trim()}return c},convertToId:function(b){return\"string\"===\ntypeof b?b.replace(\/\\W+\/g,\"_\").toLowerCase():\"\"},initTracking:function(b,c,a,d){if(this.analyticsActive()){var e,f=window.setInterval(function(){e=$(window).scrollTop();e+$(window).height()\u003Eb-c\u0026\u0026(window.clearInterval(f),analytics.track(\"Experiment Viewed\",{experimentId:this.convertToId(this.experimentName),experimentName:this.experimentName,variationId:this.convertToId(a),variationName:a}))}.bind(this),1E3);analytics.trackLink(d,\"Experiment Success\",{experimentId:this.convertToId(this.experimentName),\nexperimentName:this.experimentName,variationId:this.convertToId(a),variationName:a})}}});new g({panelData:{refcode:[{name:\"referrals\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/referrals.png); background-color:#1b78f8; background-position:bottom center;\",darkBG:!0,content:[{title:\"Your free credit awaits!\",desc:\"Sign up to redeem your credit, and start deploying your sites and apps within minutes.\",cta:\"Use Your Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"},\n{title:\"Free credit active.\",desc:\"You came to digitalocean.com via someone\\x26apos;s referral link in the past month,\\x3cbr\\x3e making you eligible for $10 credit when you sign up for an account.\",cta:\"Redeem Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"}]}],customers:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",\ndesc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",cta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",tags:[\"Docker\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,\ncontent:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",tags:[\"Jenkins\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",tags:[\"WordPress\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",\ndesc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eDigitalOcean Kubernetes is now available. Spin up a cluster today.\\x3c\/span\\x3e\",\ncta:\"Get Started\",url:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],buildmode:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],regulars:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],everyone_else:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}]}})}();10\u003Cwait_count++\u0026\u0026window.clearInterval(window.jQWait)},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cstyle\u003E\n  .righthand-ctas {\n     width: 260px;\n     height: 0px;\n     margin-left: calc(50% + 423px);\n     right: inherit;\n     z-index: 50;\n     opacity: 1;\n  }\n  .righthand-ctas .related-links {\n    background: #e9f2f7;\n    padding: 16px;\n    font-size: 16px;\n  }\n  .righthand-ctas .featured-products {\n    background:#FFF;\n  }\n  .righthand-ctas.table-of-contents:before {\n    content: none;\n  }\n  .righthand-ctas.table-of-contents ul {\n    padding:0;\n  }\n  .righthand-ctas h2 {\n    font-size: 18px;\n    color: #3a3a3a;\n    display:block;\n    padding:8px 0;\n  }\n  .featured-products h2 {\n    border-bottom:1px solid #f4f6f9;\n    padding-top:48px;\n  }\n  .featured-products .UnifiedNavDropdown-link { padding:16px 0; }\n  .righthand-ctas .related-links a { color: #666; }\n  .righthand-ctas .related-links li { padding:8px 0; line-height: 24px}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Tutorial Right Rail Kubernetes\",audience:function(){return 1350\u003C$(window).width()\u0026\u0026document.querySelector('.tag[href\\x3d\"\/community\/tags\/kubernetes?type\\x3dtutorials\"]')},variants:[{name:\"Available Now\",func:function(){var b=$(\".tutorial-image\").length?$(\".tutorial-image\").offset().top:$(\".content-title\").offset().top,c=$(\".outside_viewport .table-of-contents\");$('\\x3cdiv class\\x3d\"righthand-ctas table-of-contents\"\\x3e\\x3cdiv class\\x3d\"featured-products\"\\x3e\\x3ch2\\x3eNow Available\\x3c\/h2\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e').insertAfter(\"header\").end().css({top:b});\nvar a=$(\".righthand-ctas\");$(\".featured-products\").append('\\x3ca href\\x3d\"\/products\/kubernetes\/\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-icon\"\\x3e \\x3cimg style\\x3d\"margin-bottom:32px\" alt\\x3d\"\" src\\x3d\"\/assets\/community\/unified-nav\/products\/kubernetes-f2d12fcd6216cb404dac3a41cfd7a6d3.svg\"\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-content\"\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentTitle\"\\x3e Kubernetes \\x3c\/p\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentDescription\"\\x3e Run managed Kubernetes clusters on DigitalOcean.\\x3c\/p\\x3e \\x3cspan style\\x3d\"background:#11a95e;color:#FFF; padding: 0 12px; height: 32px; font-size: 14px; line-height: 32px;display: inline-block; overflow: visible; margin:8px 0 0 0;border: 0; border-radius: 3px;vertical-align: middle; text-align: center; font-weight: 600;\"\\x3eStart now\\x3c\/span\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/a\\x3e');\na.find(\"a\").attr(\"data-js\",\"gtm_ab_success\");window.setInterval(function(){c.hasClass(\"sticky\")?a.addClass(\"sticky\").css({top:72}):a.removeClass(\"sticky\").css({top:b})},50)}},{name:\"Available Now\",func:function(){var b=$(\".tutorial-image\").length?$(\".tutorial-image\").offset().top:$(\".content-title\").offset().top,c=$(\".outside_viewport .table-of-contents\");$('\\x3cdiv class\\x3d\"righthand-ctas table-of-contents\"\\x3e\\x3cdiv class\\x3d\"featured-products\"\\x3e\\x3ch2\\x3eAvailable Now\\x3c\/h2\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e').insertAfter(\"header\").end().css({top:b});\nvar a=$(\".righthand-ctas\");$(\".featured-products\").append('\\x3ca href\\x3d\"\/products\/kubernetes\/\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-icon\"\\x3e \\x3cimg style\\x3d\"margin-bottom:32px\" alt\\x3d\"\" src\\x3d\"\/assets\/community\/unified-nav\/products\/kubernetes-f2d12fcd6216cb404dac3a41cfd7a6d3.svg\"\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-content\"\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentTitle\"\\x3e Kubernetes \\x3c\/p\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentDescription\"\\x3e Run managed Kubernetes clusters on DigitalOcean.\\x3c\/p\\x3e \\x3cspan style\\x3d\"background:#11a95e;color:#FFF; padding: 0 12px; height: 32px; font-size: 14px; line-height: 32px;display: inline-block; overflow: visible; margin:8px 0 0 0;border: 0; border-radius: 3px;vertical-align: middle; text-align: center; font-weight: 600;\"\\x3eTry Kubernetes\\x3c\/span\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/a\\x3e');\na.find(\"a\").attr(\"data-js\",\"gtm_ab_success\");window.setInterval(function(){c.hasClass(\"sticky\")?a.addClass(\"sticky\").css({top:72}):a.removeClass(\"sticky\").css({top:b})},50)}}]})}catch(b){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $100, 60-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $100, 60-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cstyle\u003E\n  .righthand-ctas {\n     width: 260px;\n     height: 0px;\n     margin-left: calc(50% + 423px);\n     right: inherit;\n     z-index: 50;\n     opacity: 1;\n  }\n  .righthand-ctas .related-links {\n    background: #e9f2f7;\n    padding: 16px;\n    font-size: 16px;\n  }\n  .righthand-ctas .featured-products {\n    background:#FFF;\n  }\n  .righthand-ctas.table-of-contents:before {\n    content: none;\n  }\n  .righthand-ctas.table-of-contents ul {\n    padding:0;\n  }\n  .righthand-ctas h2 {\n    font-size: 18px;\n    color: #3a3a3a;\n    display:block;\n    padding:8px 0;\n  }\n  .featured-products h2 {\n    border-bottom:1px solid #f4f6f9;\n    padding-top:48px;\n  }\n  .featured-products .UnifiedNavDropdown-link { padding:16px 0; }\n  .righthand-ctas .related-links a { color: #666; }\n  .righthand-ctas .related-links li { padding:8px 0; line-height: 24px}\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Tutorial Right Rail Postgres\",audience:function(){return 1350\u003C$(window).width()\u0026\u0026document.querySelector('.tag[href\\x3d\"\/community\/tags\/postgresql?type\\x3dtutorials\"]')},variants:[{name:\"Available Now\",func:function(){var a=$(\".tutorial-image\").length?$(\".tutorial-image\").offset().top:$(\".content-title\").offset().top,c=$(\".outside_viewport .table-of-contents\");$('\\x3cdiv class\\x3d\"righthand-ctas table-of-contents\"\\x3e\\x3cdiv class\\x3d\"featured-products\"\\x3e\\x3ch2\\x3eAvailable Now\\x3c\/h2\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e').insertAfter(\"header\").end().css({top:a});\nvar b=$(\".righthand-ctas\");$(\".featured-products\").append('\\x3ca href\\x3d\"https:\/\/blog.digitalocean.com\/announcing-managed-databases-for-postgresql\/\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link\"\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-icon\"\\x3e \\x3cimg style\\x3d\"margin-bottom:32px\" alt\\x3d\"\" src\\x3d\"\/\/assets.digitalocean.com\/labs\/dbicon.svg\"\\x3e \\x3c\/div\\x3e \\x3cdiv class\\x3d\"UnifiedNavDropdown-link-content\"\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentTitle\"\\x3e\\x3c\/p\\x3e \\x3cp class\\x3d\"UnifiedNavDropdown-link-contentDescription\"\\x3e Run managed PostgreSQL clusters on DigitalOcean.\\x3c\/p\\x3e \\x3cspan style\\x3d\"background:#11a95e;color:#FFF; padding: 0 12px; height: 32px; font-size: 14px; line-height: 32px;display: inline-block; overflow: visible; margin:8px 0 0 0;border: 0; border-radius: 3px;vertical-align: middle; text-align: center; font-weight: 600;\"\\x3eRead more\\x3c\/span\\x3e \\x3c\/div\\x3e \\x3c\/div\\x3e \\x3c\/a\\x3e');\nb.find(\"a\").attr(\"data-js\",\"gtm_ab_success\");window.setInterval(function(){c.hasClass(\"sticky\")?b.addClass(\"sticky\").css({top:72}):b.removeClass(\"sticky\").css({top:a})},50)}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":216
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cmeta name=\"google-site-verification\" content=\"VFLWra6znNQDhVczyhLehNxVWZX_uN0wG2fjEqMixMQ\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{",["escape",["macro",8],8,16],"({name:\"Related Links Test\",variants:[{name:\"Algolia\",func:function(){for(var a=document.querySelectorAll(\".related-tutorials a\"),c=0;c\u003Ca.length;c++)a[c].setAttribute(\"data-js\",\"gtm_ab_success\")}},{name:\"Datascience\",func:function(){var a=window.location.href.substr(window.location.href.lastIndexOf(\"\/\")+1),c=document.querySelector(\".related-tutorials ul\"),d=\"\";fetch(\"https:\/\/assets.digitalocean.com\/labs\/related\/\"+a+\".json\").then(function(b){return b.ok?b.json():[]}).then(function(b){try{for(var a=\n0;a\u003Cb.length;a++)d+='\\x3cli\\x3e\\x3ca data-js\\x3d\"gtm_ab_success\" class\\x3d\"related-link\" href\\x3d\"\/community\/tutorials\/'+b[a].slug+'\"\\x3e'+b[a].title+\"\\x3c\/a\\x3e\\x3c\/li\\x3e\";0\u003Cd.length\u0026\u0026(c.innerHTML=d)}catch(e){}})}}]})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".sharing\").first().attr(\"style\",\"display:inline-block; padding-left:16px;\").appendTo(\".tutorial-header\");$(\".tutorial-ctas\").attr(\"style\",\"visibility:hidden;\");$(\".postable-info-bar-container\").first().remove();$('*[data-js\\x3d\"markAsComplete\"]').first().attr(\"style\",\"text-align: center\").html(\"Key user action \\x3ca target\\x3d'_blank' href\\x3d'https:\/\/jira.internal.digitalocean.com\/browse\/WEBEX-879'\\x3eJIRA\\x3c\/a\\x3e\");$($('*[data-js\\x3d\"markAsComplete\"]')[1]).remove();\n$(\".Tutorial-content\").attr(\"style\",\"padding-top: 64px\");$(\".section-item-subscribe\").remove();$(\".new-upvote-button\").first().attr(\"style\",\"width: 200px; height: 150px; background: #EEE; margin-right: 50%; position: absolute; right: -600px; font-size: 16px; color: #000;\").html('Relavant Product Mention. \\x3ca target\\x3d\"_blank\" href\\x3d\"https:\/\/jira.internal.digitalocean.com\/browse\/WEBEX-880\"\\x3eJIRA\\x3c\/a\\x3e');$(\".related-tutorials\").remove();$(\".tutorial-footer-details\").attr(\"style\",\"border-bottom:none;\");\n$('\\x3cdiv style\\x3d\"background:#EEE; text-align:center; height:400px; padding: 40px; margin-bottom:-64px;\"\\x3e\\x3ch1\\x3eCommunity-specific pre-footer\\x3c\/h1\\x3e\\x3cul\\x3e\\x3cli\\x3e1-line explanation\\x3c\/li\\x3e\\x3cli\\x3e3 call-outs: w4do, meetups, newsletter signup\\x3c\/li\\x3e\\x3cli\\x3eBillboard for product - make it look nice, value prop from homepage hero\\x3c\/li\\x3e\\x3cli\\x3eFeatured tag listing, horizontal list 6-10, all tags link\\x3c\/li\\x3e\\x3c\/ul\\x3e\\x3ca href\\x3d\"https:\/\/jira.internal.digitalocean.com\/browse\/WEBEX-874\" target\\x3d\"_blank\"\\x3eJIRA Link\\x3c\/a\\x3e\\x3c\/div\\x3e').insertBefore(\"footer\");\n$(\".content-comments\").html('\\x3cdiv style\\x3d\"text-align:center;\"\\x3e\\x3cdiv style\\x3d\" margin:0 auto; background:#EEE; text-align:left; width:754px; padding: 40px;\"\\x3e\\x3ch1\\x3eUser Action Component\\x3c\/h1\\x3e\\x3col\\x3e\\x3cli\\x3e\\x3cstrong\\x3eSolved the problem?\\x3c\/strong\\x3e Mark as Complete, Upvote and Share\\x3c\/li\\x3e\\x3cli\\x3e\\x3cstrong\\x3eDidn\\u2019t solve the problem?\\x3c\/strong\\x3e Ask a Question - sends user to question create page with same tags pre-selected\\x3c\/li\\x3e\\x3c\/ol\\x3e\\x3cem\\x3eAs little emphasis as possible - leave a comment\\x3c\/em\\x3e\\x3ca href\\x3d\"https:\/\/jira.internal.digitalocean.com\/browse\/WEBEX-879\" target\\x3d\"_blank\"\\x3eJIRA Link\\x3c\/a\\x3e\\x3c\/div\\x3e');\n0\u003Cdocument.location.search.indexOf(\"wide\")\u0026\u0026($(\".tutorial-single .tutorial-header\").attr(\"style\",'width: 960px !important;font-family: \"Sailec-Medium\"; margin-bottom:32px; text-align:center;'),$(\".tutorial-single .tutorial-content\").attr(\"style\",\"position: relative; left: 103px;\"),$(\".new-upvote-button\").remove(),$(\".table-of-contents\").addClass(\"tocwide\").attr(\"style\",\"margin-right:300px;\"),$(\".tutorial-authors\").prepend('Author Bio \\x3ca href\\x3d\"https:\/\/jira.internal.digitalocean.com\/browse\/WEBEX-876\" target\\x3d\"_blank\"\\x3eJIRA\\x3c\/a\\x3e').attr(\"style\",\n\"z-index:3001; width: 200px; height:180px; padding:10px; position: absolute; right: 50%; margin-right: 300px; background: #EEE;\"));\u003C\/script\u003E\n\u003Cstyle\u003E\n  .tocwide { margin-top:280px;}\n  .sticky.tocwide { margin-top:0;}",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",16],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/community"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"confirmed_state_pageview"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"K8S"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"\/welcome"
    },{
      "function":"_cn",
      "arg0":["macro",10],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",19],
      "arg1":"https:\/\/stage-www.s2r1.internal.digitalocean.com\/community\/tutorials"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"?preview"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,3,5],["unless",4],["add",1]],
    [["if",6],["add",2,3,4,16,24,26,27,28,30,38,41,45,48,49]],
    [["if",7],["add",2,3,4,16,24,26,27,28,30,38,41,45,48,49]],
    [["if",0,1,8,9],["add",4,24,26,27,28,30,38,41,45,48,49]],
    [["if",11],["unless",10],["add",5,6,23,25,40,44,46,47,59]],
    [["if",5,12,13,14],["add",7,8,14,17]],
    [["if",1,5,15],["unless",4],["add",9,10]],
    [["if",1,5,16],["unless",4,17],["add",11,19]],
    [["if",1,5,18],["unless",4,17],["add",12,13,18]],
    [["if",19,20],["add",15]],
    [["if",5,13,14,21],["add",20,21]],
    [["if",1,22],["unless",23],["add",22,64]],
    [["if",11],["add",22]],
    [["if",1,2],["add",29],["block",0]],
    [["if",11,24],["add",31,32]],
    [["if",11,22,25],["add",33,34,42]],
    [["if",11,26],["add",35,36]],
    [["if",1,5,8,27],["add",37]],
    [["if",28],["add",37]],
    [["if",11,29,30],["add",39]],
    [["if",31,32,33],["add",43]],
    [["if",32,33,34],["add",43]],
    [["if",33,35,36],["add",43]],
    [["if",1,37,38,39],["add",43]],
    [["if",1,30],["unless",40,41,42,43],["add",43]],
    [["if",1,5,44],["add",50]],
    [["if",33],["add",51,53]],
    [["if",33,36],["add",52]],
    [["if",1,5],["unless",4],["add",54]],
    [["if",11,45],["add",54]],
    [["if",22,25,47],["unless",46],["add",55]],
    [["if",1,50,51],["add",56]],
    [["if",47,52],["add",57]],
    [["if",33,53],["add",58]],
    [["if",22,25,33],["add",60]],
    [["if",1,54],["unless",55],["add",61]],
    [["if",1,56],["add",62]],
    [["if",47,57],["add",63,66,68]],
    [["if",22,47],["unless",58,59],["add",65]],
    [["if",22,47,60],["unless",59],["add",65]],
    [["if",1,45],["add",67]],
    [["if",1],["unless",10],["add",69]],
    [["if",47,63,64],["add",70]],
    [["if",1,22,48],["block",55]],
    [["if",0,1],["unless",49],["block",55]],
    [["if",0,47],["unless",49,61],["block",65]],
    [["if",0,47],["unless",62],["block",65]]]
},
"runtime":[
[],[]
]



};
var aa,ca=this||self,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ia=function(a){return"function"==typeof a},ja=function(a){return"string"==typeof a},ka=function(a){return"number"==typeof a&&!isNaN(a)},la=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ma=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},na=function(a,b){if(a&&la(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ka(a)||
!ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(la(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ba=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ca=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Da=function(a){if(null==a)return String(a);var b=Ca.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ea=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Fa=function(a){if(!a||"object"!=Da(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ea(a,"constructor")&&!Ea(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ea(a,b)},Ga=function(a,b){var c=b||("array"==Da(a)?[]:{}),d;for(d in a)if(Ea(a,d)){var e=a[d];"array"==Da(e)?("array"!=Da(c[d])&&(c[d]=[]),c[d]=Ga(e,c[d])):Fa(e)?(Fa(c[d])||(c[d]={}),c[d]=Ga(e,c[d])):c[d]=e}return c};var Ha={},Ia=function(a,b){Ha[a]=Ha[a]||[];Ha[a][b]=!0};var f=window,u=document,Ja=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Qa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Ra=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Sa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Va=function(a){var b=
u.getElementById(a);if(b&&Ua(b,"id")!=a){Ia("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c]}return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,ab=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},db=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=bb(a.protocol)||bb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=bb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=cb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
ma(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=ab(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},bb=function(a){return a?a.replace(":","").toLowerCase():""},cb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},eb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var fb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},ib=function(a,b,c,d){var e=gb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=hb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=hb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function jb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=fb(b,e).indexOf(c)}
var mb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=kb(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!lb(y,t)&&jb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!lb(p,t)&&jb(m,a,l)}return k};function hb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function gb(a,b){for(var c=[],d=fb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var nb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pb=/(^|\.)doubleclick\.net$/i,lb=function(a,b){return pb.test(document.location.hostname)||"/"===b&&nb.test(a)},kb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var qb=[],rb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},sb=function(a){return rb[a]},tb=/[\x00\x22\x26\x27\x3c\x3e]/g;var xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};qb[7]=function(a){return String(a).replace(xb,zb)};
qb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xb,zb)+"'"}};var Ib=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Jb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Kb=function(a){return Jb[a]};qb[16]=function(a){return a};var Mb=[],Nb=[],Ob=[],Pb=[],Qb=[],Rb={},Sb,Tb,Ub,Vb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Wb=function(a){var b=a["function"];if(!b)throw Error("Error: No function name given for function call.");var c=!!Rb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Rb[b](d):(void 0)(b,d)},Yb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Xb(a[e],b,c));return d},
Zb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Rb[b];return c?c.priorityOverride||0:0},Xb=function(a,b,c){if(la(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Xb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Mb[g];if(!h||b.qc(h))return;c[g]=!0;try{var k=Yb(h,b,c);k.vtp_gtmEventId=b.id;d=Wb(k);Ub&&(d=Ub.kf(d,k))}catch(x){b.Ld&&b.Ld(x,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[Xb(a[l],b,c)]=Xb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=Xb(a[n],b,c);Tb&&(m=m||p===Tb.ob);d.push(p)}return Tb&&m?Tb.pf(d):d.join("");case "escape":d=Xb(a[1],b,c);if(Tb&&la(a[1])&&"macro"===a[1][0]&&Tb.Qf(a))return Tb.Zf(d);d=String(d);for(var t=2;t<a.length;t++)qb[a[t]]&&(d=qb[a[t]](d));return d;case "tag":var q=a[1];if(!Pb[q])throw Error("Unable to resolve tag reference "+q+".");return d={xd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=$b(r,b,c);a[4]&&(v=!v);return v;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},$b=function(a,b,c){try{return Sb(Yb(a,b,c))}catch(d){JSON.stringify(a)}return null};var ac=function(){var a=function(b){return{toString:function(){return b}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),qa:a("function"),Be:a("instance_name"),Ce:a("live_only"),De:a("malware_disabled"),Dg:a("original_vendor_template_id"),Ee:a("once_per_event"),nd:a("once_per_load"),od:a("setup_tags"),Fe:a("tag_id"),pd:a("teardown_tags")}}();var bc=null,ec=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];bc=cc(a);for(var e=0;e<Nb.length;e++){var g=Nb[e],h=dc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Pb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},dc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=bc(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=bc(e[g]);if(null===h)return null;
if(h)return!1}return!0},cc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=$b(Ob[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var vc={},wc=null,xc=Math.random();vc.m="GTM-KHWBBT";vc.sb="521";var yc="www.googletagmanager.com/gtm.js";var zc=yc,Ac=null,Bc=null,Cc=null,Dc="//www.googletagmanager.com/a?id="+vc.m+"&cv=484",Ec={},Fc={},Gc=function(){var a=wc.sequence||0;wc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Hc()||d||"http:"!=f.location.protocol?a:b)+c},Hc=function(){var a=Oa(),b;if(1===a)a:{var c=zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ic=!1;
var Mc=function(){return"&tc="+Pb.filter(function(a){return a}).length},Vc=function(){Nc&&(f.clearTimeout(Nc),Nc=void 0);void 0===Oc||Pc[Oc]&&!Qc||(Rc[Oc]||Sc.Sf()||0>=Tc--?(Ia("GTM",1),Rc[Oc]=!0):(Sc.hg(),Ra(Uc()),Pc[Oc]=!0,Qc=""))},Uc=function(){var a=Oc;if(void 0===a)return"";for(var b,c=[],d=Ha.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Wc,Pc[a]?
"":"&es=1",Xc[a],b?"&u="+b:"",Mc(),Qc,"&z=0"].join("")},Yc=function(){return[Dc,"&v=3&t=t","&pid="+oa(),"&rv="+vc.sb].join("")},Zc="0.005000">Math.random(),Wc=Yc(),$c=function(){Wc=Yc()},Pc={},Qc="",Oc=void 0,Xc={},Rc={},Nc=void 0,Sc=function(a,b){var c=0,d=0;return{Sf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},hg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Tc=1E3,ad=function(a,b){if(Zc&&!Rc[a]&&Oc!==a){Vc();Oc=a;Qc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Xc[a]="&e="+c+"&eid="+a;Nc||(Nc=f.setTimeout(Vc,500))}},bd=function(a,b,c){if(Zc&&!Rc[a]&&b){a!==Oc&&(Vc(),Oc=a);var d=c+String(b[ac.qa]||"").replace(/_/g,"");Qc=Qc?Qc+"."+d:"&tr="+d;Nc||(Nc=f.setTimeout(Vc,500));2022<=Uc().length&&Vc()}};var cd={},dd=new pa,ed={},fd={},jd={name:"dataLayer",set:function(a,b){Ga(gd(a,b),ed);hd()},get:function(a){return id(a,2)},reset:function(){dd=new pa;ed={};hd()}},id=function(a,b){if(2!=b){var c=dd.get(a);if(Zc){var d=kd(a);c!==d&&Ia("GTM",5)}return c}return kd(a)},kd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:md(d)},md=function(a){for(var b=ed,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var pd=function(a,b){fd.hasOwnProperty(a)||(dd.set(a,b),Ga(gd(a,b),ed),hd())},gd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},hd=function(a){ra(fd,function(b,c){dd.set(b,c);Ga(gd(b,void 0),ed);Ga(gd(b,c),ed);a&&delete fd[b]})},qd=function(a,b,c){cd[a]=cd[a]||{};var d=1!==c?kd(b):dd.get(b);"array"===Da(d)||"object"===Da(d)?cd[a][b]=Ga(d):cd[a][b]=d},rd=function(a,b){if(cd[a])return cd[a][b]};var sd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),td={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ud={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},vd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var xd=function(a){var b=id("gtm.whitelist");b&&Ia("GTM",9);var c=b&&Ba(ua(b),td),d=id("gtm.blacklist");d||(d=id("tagTypeBlacklist"))&&Ia("GTM",3);
d?Ia("GTM",8):d=[];wd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=ma(ua(d),"google")&&Ia("GTM",2);var e=d&&Ba(ua(d),ud),g={};return function(h){var k=h&&h[ac.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Fc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>ma(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
ma(c,l[p])){Ia("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=ma(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ia("GTM",10);t=r}}var v=!m||t;v||!(0<=ma(l,"sandboxedScript"))||c&&-1!==ma(c,"sandboxedScript")||(v=qa(e,vd));return g[k]=v}},wd=function(){return sd.test(f.location&&f.location.hostname)};var yd={kf:function(a,b){b[ac.Vc]&&"string"===typeof a&&(a=1==b[ac.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(ac.Xc)&&null===a&&(a=b[ac.Xc]);b.hasOwnProperty(ac.Zc)&&void 0===a&&(a=b[ac.Zc]);b.hasOwnProperty(ac.Yc)&&!0===a&&(a=b[ac.Yc]);b.hasOwnProperty(ac.Wc)&&!1===a&&(a=b[ac.Wc]);return a}};var zd={active:!0,isWhitelisted:function(){return!0}},Ad=function(a){var b=wc.zones;!b&&a&&(b=wc.zones=a());return b};var Bd=!1,Cd=0,Dd=[];function Ed(a){if(!Bd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Bd=!0;for(var e=0;e<Dd.length;e++)z(Dd[e])}Dd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Fd(){if(!Bd&&140>Cd){Cd++;try{u.documentElement.doScroll("left"),Ed()}catch(a){f.setTimeout(Fd,50)}}}var Gd=function(a){Bd?a():Dd.push(a)};var Hd={};function Id(a){for(var b=Hd[a]||[],c=0;c<b.length;c++)b[c]();Hd[a]={push:function(d){d(vc.m)}}}var Ld=function(a,b,c){ia(b)&&Jd(a,b);c&&f.setTimeout(function(){return Id(a)},Number(c));return Kd(a)},Jd=function(a,b){Hd[a]=Hd[a]||[];Hd[a].push(ya(function(){return z(function(){return b(vc.m)})}))};function Kd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Id(a)})},Te:function(){d=!0;b>=c&&Id(a)}}};var Md=function(){function a(d){return!ka(d)||0>d?0:d}if(!wc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ka(jd.get("gtm.start"))?jd.get("gtm.start"):0;wc._li={cst:a(c-b),cbt:a(Bc-b)}}};var Qd=!1,Rd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Sd=!1;
var Td=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ia("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Md();return f[b]},Ud=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Rd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Wd=function(){},Vd=function(){return f.GoogleAnalyticsObject||"ga"},Xd=!1;var de=function(a){};function ce(a,b){a.containerId=vc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ee(a,b,c,d){var e=Pb[a],g=fe(a,b,c,d);if(!g)return null;var h=Xb(e[ac.od],c,[]);if(h&&h.length){var k=h[0];g=ee(k.index,{I:g,O:1===k.xd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function fe(a,b,c,d){function e(){if(g[ac.De])k();else{var x=Yb(g,c,[]),y=!1;x.vtp_gtmOnSuccess=function(){if(!y){y=!0;bd(c.id,Pb[a],"5");h()}};x.vtp_gtmOnFailure=function(){if(!y){y=!0;bd(c.id,Pb[a],"6");k()}};x.vtp_gtmTagId=g.tag_id;x.vtp_gtmEventId=c.id;bd(c.id,g,"1");try{Wb(x)}catch(w){de(w);bd(c.id,g,"7");y||(y=!0,k())}}}var g=Pb[a],h=b.I,k=b.O,l=b.terminate;if(c.qc(g))return null;var m=Xb(g[ac.pd],c,[]);if(m&&m.length){var n=m[0],p=ee(n.index,{I:h,O:k,terminate:l},c,d);if(!p)return null;h=
p;k=2===n.xd?l:p}if(g[ac.nd]||g[ac.Ee]){var t=g[ac.nd]?Qb:c.rg,q=h,r=k;if(!t[a]){e=ya(e);var v=ge(a,t,e);h=v.I;k=v.O}return function(){t[a](q,r)}}return e}function ge(a,b,c){var d=[],e=[];b[a]=he(d,e,c);return{I:function(){b[a]=ie;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=je;for(var g=0;g<e.length;g++)e[g]()}}}function he(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function ie(a){a()}function je(a,b){b()};var me=function(a,b){for(var c=[],d=0;d<Pb.length;d++)if(a.Ra[d]){var e=Pb[d];var g=b.add();try{var h=ee(d,{I:g,O:g,terminate:g},a,d);h?c.push({Zd:d,b:Zb(e),xf:h}):(ke(d,a),g())}catch(l){g()}}b.Te();c.sort(le);for(var k=0;k<c.length;k++)c[k].xf();return 0<c.length};function le(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Zd,k=b.Zd;g=h>k?1:h<k?-1:0}return g}
function ke(a,b){if(!Zc)return;var c=function(d){var e=b.qc(Pb[d])?"3":"4",g=Xb(Pb[d][ac.od],b,[]);g&&g.length&&c(g[0].index);bd(b.id,Pb[d],e);var h=Xb(Pb[d][ac.pd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var ne=!1,oe=function(a,b,c,d,e){if("gtm.js"==b){if(ne)return!1;ne=!0}ad(a,b);var g=Ld(a,d,e);qd(a,"event");qd(a,"ecommerce",1);qd(a,"gtm");var h={id:a,name:b,qc:xd(c),Ra:[],rg:[],Ld:function(p){Ia("GTM",6);de(p)}};h.Ra=ec(h);var k=me(h,g);"gtm.js"!==b&&"gtm.sync"!==b||Wd();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Pb[m];if(n&&!l[n[ac.qa]])return!0}return!1};var F={Pb:"event_callback",Rb:"event_timeout"};var qe={};var re=/[A-Z]+/,se=/\s/,te=function(a){if(ja(a)&&(a=va(a),!se.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(re.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},we=function(a){for(var b={},c=0;c<a.length;++c){var d=te(a[c]);d&&(b[d.id]=d)}ve(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function ve(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var xe=null,ye={},ze={},Ae,Be=function(a,b){var c={event:a};b&&(c.eventModel=Ga(b),b[F.Pb]&&(c.eventCallback=b[F.Pb]),b[F.Rb]&&(c.eventTimeout=b[F.Rb]));return c};
var Ge={config:function(a){},event:function(a){var b=a[1];if(ja(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Fa(a[2]))return;c=a[2]}var d=Be(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];qe[b]||(qe[b]=[]);qe[b].push(c)}},set:function(a){var b;2==a.length&&Fa(a[1])?b=Ga(a[1]):3==a.length&&ja(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ga(b),b.event="gtag.set",b._clear=!0,b}},He={policy:!0};var Ie=function(){var a=!1;return a};var Oe=function(a){if(Ne(a))return a;this.wg=a};Oe.prototype.Df=function(){return this.wg};var Ne=function(a){return!a||"object"!==Da(a)||Fa(a)?!1:"getUntrustedUpdateValue"in a};Oe.prototype.getUntrustedUpdateValue=Oe.prototype.Df;var Pe=!1,Qe=[];function Re(){if(!Pe){Pe=!0;for(var a=0;a<Qe.length;a++)z(Qe[a])}}var Se=function(a){Pe?z(a):Qe.push(a)};var Te=[],Ue=!1,Ve=function(a){return f["dataLayer"].push(a)},Xe=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&pd(g,void 0),pd(g,h))});if(!Ac){Ac=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Gc(),a["gtm.uniqueEventId"]=d,pd("gtm.uniqueEventId",d));Cc=c;var e=We(a);Cc=null;return e};
function We(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=wc.zones;d=e?e.checkState(vc.m,c):zd;return d.active?oe(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var Ye=function(){for(var a=!1;!Ue&&0<Te.length;){Ue=!0;delete ed.eventModel;hd();var b=Te.shift();if(null!=b){var c=Ne(b);if(c){var d=b;b=Ne(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=id(h,1);if(la(k)||Fa(k))k=Ga(k);fd[h]=k}}try{if(ia(b))try{b.call(jd)}catch(v){}else if(la(b)){var l=b;if(ja(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=id(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ja(b[0])){var r=Ge[b[0]];if(r&&(!c||!He[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ue=!1;continue}}a=Xe(b)||a}}finally{c&&hd(!0)}}Ue=!1}
return!a},Ze=function(){var a=Ye();try{var b=vc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},$e=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Gd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Se(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<wc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Oe(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Te.push.apply(Te,d);if(300<this.length)for(Ia("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ye()&&h};Te.push.apply(Te,a.slice(0));z(Ze)};var bf=function(a){return af?u.querySelectorAll(a):null},cf=function(a,b){if(!af)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},df=!1;if(u.querySelectorAll)try{var ef=u.querySelectorAll(":root");ef&&1==ef.length&&ef[0]==u.documentElement&&(df=!0)}catch(a){}var af=df;var ff;var Cf={};Cf.ob=new String("undefined");
var Df=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Cf.ob?b:a[d]);return c.join("")}};Df.prototype.toString=function(){return this.resolve("undefined")};Df.prototype.valueOf=Df.prototype.toString;Cf.Ge=Df;Cf.ac={};Cf.pf=function(a){return new Df(a)};var Ef={};Cf.ig=function(a,b){var c=Gc();Ef[c]=[a,b];return c};Cf.ud=function(a){var b=a?0:1;return function(c){var d=Ef[c];if(d&&"function"===typeof d[b])d[b]();Ef[c]=void 0}};Cf.Qf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Cf.Zf=function(a){if(a===Cf.ob)return a;var b=Gc();Cf.ac[b]=a;return'google_tag_manager["'+vc.m+'"].macro('+b+")"};Cf.Tf=function(a,b,c){a instanceof Cf.Ge&&(a=a.resolve(Cf.ig(b,c)),b=fa);return{nc:a,I:b}};var Ff=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Gf=function(a){wc.hasOwnProperty("autoEventsSettings")||(wc.autoEventsSettings={});var b=wc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Hf=function(a,b,c){Gf(a)[b]=c},If=function(a,b,c,d){var e=Gf(a),g=xa(e,b,d);e[b]=c(g)},Jf=function(a,b,c){var d=Gf(a);return xa(d,b,c)};var Kf=function(){for(var a=Ja.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Nf=function(a,b,c,d){var e=Lf(b);return ib(a,e,Mf(c),d)},Lf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Mf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Of(a,b){var c=""+Lf(a),d=Mf(b);1<d&&(c+="-"+d);return c};var Pf=["1"],Qf={},Uf=function(a,b,c,d){var e=Rf(a);Qf[e]||Sf(e,b,c)||(Tf(e,Kf(),b,c,d),Sf(e,b,c))};function Tf(a,b,c,d,e){var g;g=["1",Of(d,c),b].join(".");mb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Sf(a,b,c){var d=Nf(a,b,c,Pf);d&&(Qf[a]=d);return d}function Rf(a){return(a||"_gcl")+"_au"};var Vf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],Af:k[2]}))}return g};function Wf(){for(var a=Xf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Yf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Xf,Zf,$f=function(a){Xf=Xf||Yf();Zf=Zf||Wf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Xf[l],Xf[m],Xf[n],Xf[p])}return b.join("")},ag=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Zf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Xf=Xf||Yf();Zf=Zf||
Wf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var bg;function cg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var dg=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var eg=/(.*?)\*(.*?)\*(.*)/,fg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,gg=/^(?:www\.|m\.|amp\.)+/,hg=/([^?#]+)(\?[^#]*)?(#.*)?/,ig=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,kg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push($f(String(d))))}var e=b.join("*");return["1",jg(e),e].join("*")},jg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=bg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}bg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^bg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},mg=function(){return function(a){var b=eb(f.location.href),c=b.search.replace("?",""),d=ab(c,"_gl",!0)||"";a.query=lg(d)||{};var e=db(b,"fragment").match(ig);a.fragment=lg(e&&e[3]||
"")||{}}},lg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=eg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===jg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ag(t[q+1]);return p}}}}catch(r){}};
function ng(a,b,c){function d(m){var n=m,p=ig.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=hg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function og(a,b,c){for(var d={},e={},g=dg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&cg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=kg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=ng(l,a.action);Za.test(v)&&(a.action=v)}}}else pg(l,a,!1)}if(!c&&Aa(e)){var x=kg(e);pg(x,a,!0)}}function pg(a,b,c){if(b.href){var d=ng(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var qg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||og(e,e.hostname,!1)}}catch(h){}},rg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=db(eb(b.action),"host");og(b,c,!0)}}catch(d){}},sg=function(a,b,c,d){var e=dg();e.init||(Sa(u,"mousedown",qg),Sa(u,"keyup",qg),Sa(u,"submit",rg),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};dg().decorators.push(g)},tg=function(){var a=u.location.hostname,b=fg.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(gg,"")===e.replace(gg,"")},ug=function(a,b){return!1===a?!1:a||b||tg()};var vg={};var wg=/^\w+$/,xg=/^[\w-]+$/,yg=/^~?[\w-]+$/,zg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Ag(a){return a&&"string"==typeof a&&a.match(wg)?a:"_gcl"}var Cg=function(){var a=eb(f.location.href),b=db(a,"query",!1,void 0,"gclid"),c=db(a,"query",!1,void 0,"gclsrc"),d=db(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||ab(e,"gclid",void 0);c=c||ab(e,"gclsrc",void 0)}return Bg(b,c,d)};
function Bg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(xg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==vg.gtm_3pds?0:vg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Dg(a,b,c){function d(p,t){var q=Eg(p,e);q&&mb(q,t,h,g,l,!0)}b=b||{};var e=Ag(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Md?7776E3:b.Md;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.bh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Eg=function(a,b){var c=zg[a];if(void 0!==c)return b+c},Fg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Gg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Hg=function(a,b,c,d,e){if(la(b)){var g=Ag(e);sg(function(){for(var h={},k=0;k<a.length;++k){var l=Eg(a[k],g);if(l){var m=fb(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Ig=function(a){return a.filter(function(b){return yg.test(b)})},Jg=function(a){for(var b=["aw","dc"],c=Ag(a&&a.prefix),d={},e=0;e<b.length;e++)zg[b[e]]&&(d[b[e]]=zg[b[e]]);ra(d,function(g,h){var k=fb(c+h,u.cookie);if(k.length){var l=k[0],m=Fg(l),n={};n[g]=[Gg(l)];Dg(n,a,m)}})};var Kg=/^\d+\.fls\.doubleclick\.net$/;function Lg(a){var b=eb(f.location.href),c=db(b,"host",!1);if(c&&c.match(Kg)){var d=db(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Mg(a,b){if("aw"==a||"dc"==a){var c=Lg("gcl"+a);if(c)return c.split(".")}var d=Ag(b);if("_gcl"==d){var e;e=Cg()[a]||[];if(0<e.length)return e}var g=Eg(a,d),h;if(g){var k=[];if(u.cookie){var l=fb(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Gg(l[m]);n&&-1===ma(k,n)&&k.push(n)}h=Ig(k)}else h=k}else h=k}else h=[];return h}
var Ng=function(){var a=Lg("gac");if(a)return decodeURIComponent(a);var b=Vf(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Af);g=Ig(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Og=function(a,b,c,d,e){Uf(b,c,d,e);var g=Qf[Rf(b)],h=Cg().dc||[],k=!1;if(g&&0<h.length){var l=wc.joined_au=wc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="http://ad.doubleclick.net/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ja.sendBeacon&&Ja.sendBeacon(t)||Ra(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Rf(b),r=Qf[q];r&&Tf(q,r,c,d,e)}};var Pg;if(3===vc.sb.length)Pg="g";else{var Qg="G";Pg=Qg}
var Rg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Pg},Sg=function(a){var b=vc.m.split("-"),c=b[0].toUpperCase(),d=Rg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===vc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+vc.sb+
e};
var Tg=function(a){return!(void 0===a||null===a||0===(a+"").length)},Ug=function(a,b){var c;if(2===b.L)return a("ord",oa(1E11,1E13)),!0;if(3===b.L)return a("ord","1"),a("num",oa(1E11,1E13)),!0;if(4===b.L)return Tg(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.L)c="1";else if(6===b.L)c=b.Hc;else return!1;Tg(c)&&a("qty",c);Tg(b.vb)&&a("cost",b.vb);Tg(b.transactionId)&&a("ord",b.transactionId);return!0},Vg=encodeURIComponent,Wg=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:Vg(p)))}var d=a.jc,e=a.protocol;e+=a.Fb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+Vg(d)+(";type="+Vg(a.mc))+(";cat="+Vg(a.Ma));var g=a.rf||{};ra(g,function(n,p){e+=";"+Vg(n)+"="+Vg(p+"")});if(Ug(c,a)){Tg(a.Kb)&&c("u",a.Kb);Tg(a.Jb)&&c("tran",a.Jb);c("gtm",Sg());!1===a.Pe&&c("npa","1");if(a.ic){var h=Mg("dc",a.va);h&&h.length&&c("gcldc",h.join("."));var k=Mg("aw",a.va);k&&k.length&&c("gclaw",k.join("."));var l=Ng();l&&c("gac",l);Uf(a.va,void 0,a.lf,a.nf);
var m=Qf[Rf(a.va)];m&&c("auiddc",m)}Tg(a.Dc)&&c("prd",a.Dc,!0);ra(a.Qc,function(n,p){c(n,p)});e+=b||"";Tg(a.Db)&&c("~oref",a.Db);a.Fb?Qa(e+"?",a.I):Ra(e+"?",a.I,a.O)}else z(a.O)};var Zg=!!f.MutationObserver,$g=void 0,ah=function(a){if(!$g){var b=function(){var c=u.body;if(c)if(Zg)(new MutationObserver(function(){for(var e=0;e<$g.length;e++)z($g[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Sa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<$g.length;e++)z($g[e])}))})}};$g=[];u.body?b():z(b)}$g.push(a)};var sh=f.clearTimeout,th=f.setTimeout,G=function(a,b,c){if(Ie()){b&&z(b)}else return Na(a,b,c)},uh=function(){return new Date},vh=function(){return f.location.href},wh=function(a){return db(eb(a),"fragment")},xh=function(a){return cb(eb(a))},yh=function(a,b){return id(a,b||2)},zh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ve(a)},Ah=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},Bh=function(a,b,c){return fb(a,b,void 0===c?!0:!!c)},Ch=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Md:d},g=Cg();Dg(g,e);Jg(e)},Dh=function(a,b,c,d,e){var g=mg(),h=dg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(za(k,l.query),za(k,l.fragment));for(var m=Ag(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==zg[p]){var t=Eg(p,m),q=k[t];if(q){var r=Math.min(Fg(q),wa()),v;b:{for(var x=r,y=fb(t,u.cookie),
w=0;w<y.length;++w)if(Fg(y[w])>x){v=!0;break b}v=!1}v||mb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Dg(Bg(k.gclid,k.gclsrc),A);},Eh=function(a,b,c,d,e){Hg(a,b,c,d,e);},Fh=function(a,b){if(Ie()){b&&z(b)}else Qa(a,b)},Gh=function(a){return!!Jf(a,
"init",!1)},Hh=function(a){Hf(a,"init",!0)},Ih=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":zc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};
var Kh=Cf.Tf;var Lh=new pa,Mh=function(a,b){function c(h){var k=eb(h),l=db(k,"protocol"),m=db(k,"host",!0),n=db(k,"port"),p=db(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Nh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&la(c)){for(var d=0;d<c.length;d++)if(Nh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=ma(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Lh.get(q);r||(r=new RegExp(c,t),Lh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mh(b,c)}return!1};var Ph=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Qh={},Rh=encodeURI,M=encodeURIComponent,Sh=Ra;var Th=function(a,b){if(!a)return!1;var c=db(eb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Uh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Qh.Rf=function(){var a=!1;return a};var Di=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Ei=function(){this.c=1;this.e=[];this.p=null};function Fi(a){var b=wc,c=b.gss=b.gss||{};return c[a]=c[a]||new Ei}var Gi=function(a,b){Fi(a).p=b},Hi=function(a){var b=Fi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Ji=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var Yi=window,Zi=document,$i=function(a){var b=Yi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Yi["ga-disable-"+a])return!0;try{var c=Yi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=fb("AMP_TOKEN",Zi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Zi.getElementById("__gaOptOutExtension")?!0:!1};var gj=function(a,b,c){fj(a);var d=Math.floor(wa()/1E3);Fi(a).e.push(new Di(b,d,c,void 0));Hi(a)},hj=function(a,b,c){fj(a);var d=Math.floor(wa()/1E3);Fi(a).e.push(new Di(b,d,c,!0))},fj=function(a){if(1===Fi(a).c){Fi(a).c=2;var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},jj=function(a,b){},ij=function(a,b){};var V={a:{}};

V.a.jsm=["customScripts"],function(){(function(a){V.__jsm=a;V.__jsm.g="jsm";V.__jsm.h=!0;V.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
V.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;Wg(b,c)}(function(b){V.__flc=b;V.__flc.g="flc";V.__flc.h=!0;V.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Uh(b.vtp_customVariable||[],"key","value")||{},e={Ma:b.vtp_activityTag,ic:c,va:b.vtp_conversionCookiePrefix||void 0,vb:void 0,L:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,jc:b.vtp_advertiserId,mc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,I:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Hc:void 0,Fb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Jb:b.vtp_transactionVariable,transactionId:void 0,Kb:b.vtp_userVariable,Qc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){G("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([Uh(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

V.a.e=["google"],function(){(function(a){V.__e=a;V.__e.g="e";V.__e.h=!0;V.__e.b=0})(function(a){return String(rd(a.vtp_gtmEventId,"event"))})}();V.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Ff(c,"gtm.click");zh(d)}}(function(b){V.__cl=b;V.__cl.g="cl";V.__cl.h=!0;V.__cl.b=0})(function(b){if(!Gh("cl")){var c=K("document");Sa(c,"click",a,!0);Hh("cl")}z(b.vtp_gtmOnSuccess)})}();
V.a.j=["google"],function(){(function(a){V.__j=a;V.__j.g="j";V.__j.h=!0;V.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();V.a.k=["google"],function(){(function(a){V.__k=a;V.__k.g="k";V.__k.h=!0;V.__k.b=0})(function(a){return Bh(a.vtp_name,yh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
V.a.r=["google"],function(){(function(a){V.__r=a;V.__r.g="r";V.__r.h=!0;V.__r.b=0})(function(a){return oa(a.vtp_min,a.vtp_max)})}();
V.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){V.__u=b;V.__u.g="u";V.__u.h=!0;V.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:yh("gtm.url",1))||vh();var d=b[a("vtp_component")];if(!d||"URL"==d)return xh(String(c));var e=eb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?la(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=db(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=db(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
V.a.v=["google"],function(){(function(a){V.__v=a;V.__v.g="v";V.__v.h=!0;V.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=yh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
V.a.tl=["google"],function(){function a(b){return function(){if(b.yc&&b.Ac>=b.yc)b.oc&&K("self").clearInterval(b.oc);else{b.Ac++;var c=uh().getTime();zh({event:b.R,"gtm.timerId":b.oc,"gtm.timerEventNumber":b.Ac,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.yc,"gtm.timerStartTime":b.Yd,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Yd,"gtm.triggers":b.ug})}}}(function(b){V.__tl=b;V.__tl.g="tl";V.__tl.h=!0;V.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={R:b.vtp_eventName,
Ac:0,interval:Number(b.vtp_interval),yc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ug:String(b.vtp_uniqueTriggerId||"0"),Yd:uh().getTime()};c.oc=K("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
V.a.asp=["nonGoogleScripts"],function(){(function(a){V.__asp=a;V.__asp.g="asp";V.__asp.h=!0;V.__asp.b=0})(function(a){f.adroll_adv_id=a.vtp_customerId;f.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(f.adroll_conversion_value=a.vtp_conversionValueInDollars,f.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=Uh(a.vtp_customData,"key","value");f.adroll_custom_data=b}a.vtp_segmentName&&(f.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&(f.adroll_email=
a.vtp_visitorEmail);f.__adroll_loaded=!0;var c=E("https://s","http://a",".adroll.com/j/roundtrip.js");G(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
V.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Ga(Uh(l.vtp_fieldsToSet,"fieldName","value"),e);Ga(Uh(l.vtp_contentGroup,"index","group"),g);Ga(Uh(l.vtp_dimension,"index","dimension"),h);Ga(Uh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Ga(l);c=Ga(c,m)}Ga(Uh(c.vtp_fieldsToSet,"fieldName","value"),e);Ga(Uh(c.vtp_contentGroup,
"index","group"),g);Ga(Uh(c.vtp_dimension,"index","dimension"),h);Ga(Uh(c.vtp_metric,"index","metric"),k);var n=Td(c.vtp_functionName);if(ia(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Gc(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(L){var O=[].slice.call(arguments,0);O[0]=p+O[0];n.apply(window,O)},x=function(L,O){return void 0===O?O:L(O)},y=function(L,O){if(O)for(var ba in O)O.hasOwnProperty(ba)&&v("set",L+ba,O[ba])},w=function(){},
A=function(L,O,ba){var Y=0;if(L)for(var Z in L)if(L.hasOwnProperty(Z)&&(ba&&q[Z]||!ba&&void 0===q[Z])){var ha=r[Z]?ta(L[Z]):L[Z];"anonymizeIp"!=Z||ha||(ha=void 0);O[Z]=ha;Y++}return Y},B={name:t};A(e,B,!0);n("create",c.vtp_trackingId||d.trackingId,B);v("set","&gtm",Sg(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(L,O){void 0!==c[O]&&v("set",L,c[O])})("nonInteraction","vtp_nonInteraction");y("contentGroup",g);y("dimension",h);y("metric",k);var C={};A(e,C,!1)&&v("set",
C);var D;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var L=e&&e.hitCallback;ia(L)&&L();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",
eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:x(String,c.vtp_eventLabel||d.label),eventValue:x(sa,c.vtp_eventValue||d.value)};A(D,H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==
c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:U})}D?
v("send","pageview",D):v("send","pageview");}if(!a){var X=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(X="internal/"+X);a=!0;G(E("https:","http:","//www.google-analytics.com/"+X,e&&e.forceSSL),function(){var L=
Rd();L&&L.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};V.__ua=b;V.__ua.g="ua";V.__ua.h=!0;V.__ua.b=0}();




V.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){V.__gclidw=b;V.__gclidw.g="gclidw";V.__gclidw.h=!0;V.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||tg())&&
Dh(a,h,k,l));Ch(e,c,d);Og(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Eh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
V.a.aev=["google"],function(){function a(l,m){var n=!1,p;n||(p=yh("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(vh());la(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!Th(l,p)}function d(l){e.test(l)||(l="http://"+l);return db(eb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){V.__aev=l;V.__aev.g=
"aev";V.__aev.h=!0;V.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q;if(ja(g[m]))q=g[m];else{var r=a(m,"element");if(r&&(q=Wa(r),g[m]=q,h.push(m),25<h.length)){var v=h.shift();delete g[v]}}return q||n;case "URL":var x;a:{var y=String(a(m,"elementUrl")||n||""),w=eb(y),A=String(l.vtp_component||"URL");switch(A){case "URL":x=y;break a;case "IS_OUTBOUND":x=c(y,l.vtp_affiliatedDomains);
break a;default:x=db(w,A,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return x;case "ATTRIBUTE":var B;if(void 0===l.vtp_attribute)B=b(m,p,n);else{var C=l.vtp_attribute,D=a(m,"element");B=D&&Ua(D,C)||n||""}return B;default:return b(m,p,n)}})}();

V.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Md();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Sg()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?yh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};V.__awct=h;V.__awct.g="awct";V.__awct.h=!0;V.__awct.b=0}();

V.a.smm=["google"],function(){(function(a){V.__smm=a;V.__smm.g="smm";V.__smm.h=!0;V.__smm.b=0})(function(a){var b=a.vtp_input,c=Uh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



V.a.paused=[],function(){(function(a){V.__paused=a;V.__paused.g="paused";V.__paused.h=!0;V.__paused.b=0})(function(a){z(a.vtp_gtmOnFailure)})}();

V.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Kh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.nc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Xa(h),k,e)()}else th(function(){c(d)},
200)};V.__html=c;V.__html.g="html";V.__html.h=!0;V.__html.b=0}();


V.a.img=["customPixels"],function(){(function(a){V.__img=a;V.__img.g="img";V.__img.h=!0;V.__img.b=0})(function(a){var b=Xa('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Sh(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

var kj={};kj.macro=function(a){if(Cf.ac.hasOwnProperty(a))return Cf.ac[a]},kj.onHtmlSuccess=Cf.ud(!0),kj.onHtmlFailure=Cf.ud(!1);kj.dataLayer=jd;kj.callback=function(a){Ec.hasOwnProperty(a)&&ia(Ec[a])&&Ec[a]();delete Ec[a]};kj.Ye=function(){wc[vc.m]=kj;za(Fc,V.a);Tb=Tb||Cf;Ub=yd};
kj.Mf=function(){wc=f.google_tag_manager=f.google_tag_manager||{};if(wc[vc.m]){var a=wc.zones;a&&a.unregisterChild(vc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Mb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Pb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Ob.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Nb.push(p)}Rb=V;Sb=Nh;kj.Ye();$e();Bd=!1;Cd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Ed();else{Sa(u,"DOMContentLoaded",Ed);Sa(u,"readystatechange",Ed);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Fd()}Sa(f,"load",Ed)}Pe=!1;"complete"===u.readyState?Re():
Sa(f,"load",Re);a:{if(!Zc)break a;f.setInterval($c,864E5);}
Bc=(new Date).getTime();}};(0,kj.Mf)();

})()
