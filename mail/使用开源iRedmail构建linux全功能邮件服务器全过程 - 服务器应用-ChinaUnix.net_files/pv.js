var PvTrack;
this.PvTrack||(PvTrack=function(){function r(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,d);return true}else if(a.attachEvent)return a.attachEvent("on"+c,b);a["on"+c]=b}function k(a,c,b,d,y,g){var m;if(b){m=new Date;m.setTime(m.getTime()+b*6E4)}e.cookie=a+"="+s(c)+(b?";expires="+m.toGMTString():"")+";path="+(d?d:"/")+(y?";domain="+y:"")+(g?";secure":"")}function n(a){return(a=RegExp("(^|;)[ ]*"+a+"=([^;]*)").exec(e.cookie))?G(a[2]):""}function O(){var a=n(z);if(a!=""){a=a.split(".");if(a.length==
5){o=parseInt(a[0]);t=parseInt(a[1]);p=parseInt(a[2]);q=parseInt(a[3]);l=parseInt(a[4]);a=n(u);if(a!="")h=parseInt(a);A=n(B)}}}function P(){var a;H=a=Math.round((new Date).getTime()/1E3);if(o==0){o=C();p=t=a}else p=q;q=a;if(A==""){h=C();l=1}else if(n(u)==""){h=C();l=1}else{h=parseInt(A);l+=1}a=o+"."+t+"."+p+"."+q+"."+l;if(i==""){k(z,a,I);k(u,h,J);k(B,h)}else{k(z,a,I,"/",i);k(u,h,J,"/",i);k(B,h,"","/",i)}}function C(){return Math.round(Math.random()*2147483647)}function Q(a){var c=new Image(1,1);c.onLoad=
function(){};c.src=a}function K(){if(v=="")return false;if(i=="")return false;if(w=="")return false;return true}function R(){var a=n(w);return G(a)}function D(){E=true}function S(){try{if(top!=this)return false;if(self.frameElement&&self.frameElement.tagName=="IFRAME")return false;return true}catch(a){return false}}this.channel=this.pageType=this.type=this.p7=this.p6=this.p5=this.p4=this.p3=this.p2=this.p1=0;this.location=this.referrer="";this.articleid=0;var v="",i="",w="",e=document,j=navigator,
L=screen,x=window,M=x.location.hostname,s=x.encodeURIComponent||escape,G=x.decodeURIComponent||unescape,z="__pta",I=1051200,o=0,t=0,p=0,q=0,l=1,H=0,u="__pts",h=0,J=30,B="__ptb",A,T=j.cookieEnabled?1:0,U=j.javaEnabled()?1:0,F=false,N="",E=false,f=this;this.track=function(){if(E){if(K()&&F&&S()){var a=v+"?v=3.6",c="&p1="+f.p1+"&p2="+f.p2+"&p3="+f.p3+"&p4="+f.p4+"&p5="+f.p5+"&p6="+f.p6+"&p7="+f.p7+"&ar="+f.articleid+"&t="+f.type+"&cl="+f.channel+"&pt="+f.pageType+"&res="+L.width+"x"+L.height+"&sid="+
h+"&cvt="+H+"&vid="+o+"&vtf="+t+"&vtl="+p+"&vtc="+q+"&vc="+l+"&b=&d=&e=&c=&f="+T+"&g="+U+"&h=",b="-";if(j.plugins&&j.plugins.length)for(var d=0;d<j.plugins.length;d++){if(j.plugins[d].name.indexOf("Shockwave Flash")!=-1){b=j.plugins[d].description.split("Shockwave Flash ")[1];break}}else if(x.ActiveXObject)for(d=10;d>=2;d--)try{if(eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+d+"');")){b=d+".0";break}}catch(y){}d=s;var g;if(f.referrer!="")g=f.referrer;else{g="";try{g=top.document.referrer}catch(m){if(parent)try{g=
parent.document.referrer}catch(V){g=""}}if(g==="")g=e.referrer}a+=c+b+"&i="+d(g)+"&k="+s(f.location!=""?f.location:e.location.href)+"&uid="+s(N)+"&rand="+Math.random();Q(a)}}else setTimeout(arguments.callee,0)};(function(){for(var a=["pcpop.com","guomii.com"],c=["it168.com","qudao168.com","chinaunix.com","chinaunix.net","itpub.net","ixpub.net","igeek.com.cn","afjk.com","app111.com","mobpub.net","jimi168.com","feng91.com","bnxsj.com","mall.autohome.com.cn","gengpianyi.com","newbuy.cc"],b=0;b<a.length;b++)if(M.indexOf(a[b])>
-1){i=a[b];v="http://count.pcpop.com/count.ashx";w="pop_userid";return}for(b=0;b<c.length;b++)if(M.indexOf(c[b])>-1){i=c[b];v="http://stat.it168.com/count.ashx";w="sso_username_utf8";break}})();r(e,"mouseover",D,false);r(e,"mousemove",D,false);r(e,"keydown",function(a){if(a.keyCode=="37"||a.keyCode=="38"||a.keyCode=="39"||a.keyCode=="40")E=true},false);r(e,"touchstart",D,false);F=function(){var a,c;if(e.body){a=e.body.clientWidth|e.documentElement.clientWidth;c=e.body.clientHeight|e.documentElement.clientHeight}else{a=
e.documentElement.clientWidth;c=e.documentElement.clientHeight}if(a>300&&c>300)return true;return false}();if(K()&&F)try{O();P();N=R()}catch(W){}});

