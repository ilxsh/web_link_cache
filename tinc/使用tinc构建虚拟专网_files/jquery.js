(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){e(require("jquery"))}else{e(jQuery)}})(function(e){var n=/\+/g;function i(e){return f.raw?e:encodeURIComponent(e)}function r(e){return f.raw?e:decodeURIComponent(e)}function o(e){return i(f.json?JSON.stringify(e):String(e))}function t(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(n," "));return f.json?JSON.parse(e):e}catch(e){}}function u(n,i){var r=f.raw?n:t(n);return e.isFunction(i)?i(r):r}var f=e.cookie=function(n,t,c){if(t!==undefined&&!e.isFunction(t)){c=e.extend({},f.defaults,c);if(typeof c.expires==="number"){var a=c.expires,d=c.expires=new Date;d.setTime(+d+a*864e5)}return document.cookie=[i(n),"=",o(t),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}var s=n?undefined:{};var p=document.cookie?document.cookie.split("; "):[];for(var m=0,l=p.length;m<l;m++){var v=p[m].split("=");var x=r(v.shift());var k=v.join("=");if(n&&n===x){s=u(k,t);break}if(!n&&(k=u(k))!==undefined){s[x]=k}}return s};f.defaults={};e.removeCookie=function(n,i){if(e.cookie(n)===undefined){return false}e.cookie(n,"",e.extend({},i,{expires:-1}));return!e.cookie(n)}});