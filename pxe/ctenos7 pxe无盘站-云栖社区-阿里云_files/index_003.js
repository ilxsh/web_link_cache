(function(a,e,o,t,r,i,n){if(e.__no_sec_entry){return}var c=t.userAgent;var l=n("%58%75%65%58%69");var m=l.toLowerCase();if(c.indexOf(l)>=0||r.host.indexOf(m)>=0||top!==self&&e.referrer.indexOf(m)>=0){return}var f=e.getElementsByTagName("head")[0];function v(a){var o=e.createElement("script");o.src=a;return f.appendChild(o)}var s="//g.alicdn.com";var d=self.goldlog;if(d&&d.getCdnPath){s=d.getCdnPath()}s+="/secdev/";var u=c.match(/Chrome\/(\d*)/);if(u){u=+u[1]}if(!e._sufei_data2){var h="3.8.7";var g=v(s+"sufei_data/"+h+"/index.js");g.async=e.cookie.indexOf("isg=")<0;g.id="aplus-sufei"}var b=.001;if(o()<b){e._linkstat_sample=b;v(s+"linkstat/index.js?v=1201")}a.nsrprtrt=1e-4;var p=0;if(!/Mobile/.test(c)){var _=["taobao.com","alibaba.com","alipay.com","tmall.com","lazada","aliexpress.com","1688.com","alimama.com","tb.cn","xiami.com","amap.com","cainiao.com","aliyun.com","etao.com","fliggy.com","liangxinyao.com","damai.cn","daraz.lk","tmall.hk","jiyoujia.com","taopiaopiao.com","alitrip.com","fliggy.hk","alihealth.cn","alitrip.hk","ele.me","gaode.cn","mp.dfkhgj.com","mp.bcvbw.com","m.dfkhgj.com","pailitao.com"];for(var y=0;y<_.length;y++){if(r.host&&~r.host.indexOf(_[y])){p=1;break}}}if(p){var x=["1.0.71","d",82];var j=["1.0.72","d",83];var k=1e4;var M=x;if((o()*1e4|0)<k){M=j}if(!M){return}var C=s;if(r.hostname.indexOf("sijipiao.")>-1){C=C.replace("/secdev/","??xlly/spl/index.js,secdev/")}var E=C+"nsv/"+M[0]+"/";var S=E+"ns_"+M[1]+"_"+M[2]+"_3_f.js";var w=E+"ns_"+M[1]+"_"+M[2]+"_3_n.js";function I(){var a="function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";if("WebkitAppearance"in e.documentElement.style){if(escape(t.javaEnabled.toString())===a){return true}}return false}var L=c.match(/Edge\/([\d]*)/);var O=c.match(/Safari\/([\d]*)/);var A=c.match(/Firefox\/([\d]*)/);var B=c.match(/MSIE|Trident/);if(L){v(S)}else if(u){v(S)}else if(O||A||B){v(w)}else{if(I()){v(S)}else{v(w)}}}function D(){var o=a.atob;if(!o){return}function t(a,e){var o=[];for(var t in a){o.push(t+"="+i(a[t]))}(new Image).src=e+o.join("&")}var r=0;var n="";function c(){if(++r==3){clearInterval(u)}f()}var l;var m=Math.random()*1e8|0;function f(){var a=l.getUA({MaxMTLog:500,MTInterval:7});a=m+"|"+a;var e={token:a,cna:n,ext:7};t(e,"https://fourier.taobao.com/ts?")}var s=+localStorage._xlly;if(!s&&/xlly=/.test(e.cookie)){s=+new Date;localStorage._xlly=s}if(s){var d=new Date-s;if(d>1e3*3600*24){d=0;delete localStorage._xlly}if(d<1e3*60*20){var u=setInterval(c,1e3*60);if(a.addEventListener){a.addEventListener("unload",f)}var h=e.cookie.match(/cna=([^;]+)/);if(h){n=h[1]}var g=v(o("aHR0cHM6Ly9nLmFsaWNkbi5jb20vQVdTQy9BV1NDL2F3c2MuanM="));var b=unescape("%75%61%62");g.onload=function(){a.AWSC&&AWSC.use(b,function(a,e){if(a==="loaded"){l=e}})}}}}try{D()}catch(a){}try{a.etrprtrt=.01;var T=0;var W=["login.taobao.com/member/login.jhtml","passport.alibaba.com/mini_login.htm","login.taobao.com/member/loginByIm.do","login.taobao.com/member/login_by_safe.htm","login.taobao.com/member/vst.htm","login.taobao.com/member/facebookLogin.do","buy.taobao.com/auction/buy_now.jhtml","buy.taobao.com/auction/order/confirm_order.html","buy.tmall.com/order/confirm_order.html"];var F=r.host+r.pathname;if(~W.join().indexOf(F)){T=1}if(T){var N="1.2.5";var R="1.2.6";var U=1;var z=N;if(Math.random()<U){z=R}if(!z){return}var H="//g.alicdn.com/AWSC/et/"+z+"/";var P=H+"et_f.js";var Q=H+"et_n.js";if(L){v(P)}else if(u){v(P)}else if(O||A||B){v(Q)}else{if(I()){v(P)}else{v(Q)}}}}catch(a){}})(window,document,Math.random,navigator,location,encodeURIComponent,decodeURIComponent);