//tealium universal tag - utag.3536 ut4.0.201810291703, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var URSId=b['userId'];_ml=window._ml||{};_ml.eid='50070';_ml.fp=URSId;_ml.cid=b['pageViewGuid'];_ml.redirect=('https:'==document.location.protocol?'https://':'http://')+'dpm.demdex.net/ibs:dpid=22052&dpuuid=[PersonID]&redir=';_ml.informer={enable:true};(function(){var gd=document.createElement('script');gd.type='text/javascript';gd.async=true;var cd=new Date();gd.src=('https:'==document.location.protocol?'https://':'http://')+'ml314.com/tag.aspx?'+cd.getDate()+cd.getMonth()+cd.getFullYear();var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(gd,s);})();}};utag.o[loader].loader.LOAD(id);})("3536","cbsi.techrepublicsite");}catch(error){utag.DB(error);}