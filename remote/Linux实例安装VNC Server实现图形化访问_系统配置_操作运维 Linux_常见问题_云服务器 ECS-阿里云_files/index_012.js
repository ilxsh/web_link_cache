!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(){$(document).ready(function(){$(".aliyun-individuation-index-registered").each(function(){var t=JSON.parse($(this).find("textarea[name=module]").val()||"{}");$(this).bind("_aliyun_intelligent_",function(e,n,i,r){$.each(t,function(t,e){if(e.code==n){$(".register-btn").html(e.text),$(".register-desc").html(e.title);try{"BUTTON"==$(".register-btn")[0].tagName?$(".register-btn").parent().attr({href:e.link,"data-spm-click":"gostr=/aliyun;locaid=indexregistered;;site="+i+"&content="+r+"&click="+e.spm}):$(".register-btn").attr({href:e.link,"data-spm-click":"gostr=/aliyun;locaid=indexregistered;;site="+i+"&content="+r+"&click="+e.spm})}catch(t){console.log(t)}return!1}})}),function(){var t,e=0;t=setInterval(function(){e>20&&clearInterval(t),window._intelligent_cell_init_&&(window._intelligent_cell_init_.doIt($(".aliyun-individuation-index-registered")),clearInterval(t)),e++},200)}()})})}n(2),new i,t.exports=i},,function(t,e){}]);