(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function e(a,b,d){a.addEventListener&&a.addEventListener(b,d,!1)};function g(a,b){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");d.src=b;a.google_image_requests.push(d)};function h(){var a=document.currentScript;return(a=void 0===a?null:a)&&22==a.getAttribute("data-jc")?a:document.querySelector('[data-jc="22"]')};var k=document,l=window;function m(a,b,d){if(Array.isArray(b))for(var c=0;c<b.length;c++)m(a,String(b[c]),d);else null!=b&&d.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};/* 
 Copyright (c) Microsoft Corporation. All rights reserved. 
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use 
 this file except in compliance with the License. You may obtain a copy of the 
 License at http://www.apache.org/licenses/LICENSE-2.0 
 
 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY 
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED 
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
 MERCHANTABLITY OR NON-INFRINGEMENT. 
 
 See the Apache Version 2.0 License for specific language governing permissions 
 and limitations under the License. 
*/ 
function n(){var a=p.url,b=p["gws-id"],d=p["qem-id"];q(k.hidden)?(this.a="hidden",this.f="visibilitychange"):q(k.mozHidden)?(this.a="mozHidden",this.f="mozvisibilitychange"):q(k.msHidden)?(this.a="msHidden",this.f="msvisibilitychange"):q(k.webkitHidden)&&(this.a="webkitHidden",this.f="webkitvisibilitychange");this.g=a;this.b=!1;this.c=-1;this.h=b;this.i=d;k[this.a]&&r(this,2);t(this);u(this)} 
function t(a){e(k,a.f,function(){if(k[a.a])a.b&&(a.b=!1,a.c=Date.now(),r(a,0));else{if(-1!=a.c){var b=Date.now()-a.c;0<b&&(a.c=-1,r(a,1,b))}r(a,3)}})}function u(a){e(l,"click",function(b){return a.handleClick(b)})}n.prototype.handleClick=function(){var a=this;this.b=!0;l.setTimeout(function(){a.b=!1},5E3)}; 
function r(a,b,d){var c={gqid:a.h,qqid:a.i};0==b&&(c["return"]=0);1==b&&(c["return"]=1,c.timeDelta=d);2==b&&(c.bgload=1);3==b&&(c.fg=1);b=[];for(var v in c)m(v,c[v],b);g(l,a.g+"&label=window_focus&"+b.join("&"));var f=void 0===f?.01:f;if(!(Math.random()>f)){a=h();f="https://pagead2.googleadservices.com/pagead/gen_204?id=jca&jc=22&version="+(a&&a.getAttribute("data-jc-version")||"unknown")+"&sample="+f;a=window;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon? 
a.navigator.sendBeacon(f):g(a,f)}}function q(a){return"undefined"!==typeof a};var w=h();if(null==w)throw Error("JSC not found 22");for(var p={},x=w.attributes,y=x.length-1;0<=y;y--){var z=x[y].name;0===z.indexOf("data-jcp-")&&(p[z.substring(9)]=x[y].value)}window.window_focus_for_click=new n;}).call(this);
