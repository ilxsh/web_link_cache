self.studioLoader.context.evalInContext("window.STUDIO_SDK_START=+new Date();var gj=\"FLASH_LAYOUTS FLASH_CONFIGURABLE_XML FLASH_CONFIGURABLE_JSON HTML5_LAYOUTS HTML5_CONFIGURABLE HTML5_CONFIGURABLE_DAB\".split(\" \");var hj=function(){};hj.prototype.a=function(a){a=!Za(lb(fg(a)));var b=!Za(lb(\"HTML5_CONFIGURABLE\"))&&0<=Ga(gj,\"HTML5_CONFIGURABLE\")?\"HTML5_CONFIGURABLE\":null;return a&&(null===b||\"HTML5_CONFIGURABLE\"==b||\"HTML5_CONFIGURABLE_DAB\"==b||\"HTML5_LAYOUTS\"==b||\"FLASH_CONFIGURABLE_JSON\"==b)};hj.prototype.b=function(a){a=fg(a);if(Za(lb(a)))return null;a=JSON.parse(a);var b;a.Profile&&a.Profile[0]?b=Ia(a.Profile,this.f,this)[0]:b={};E(vb(a,function(a,b){return\"_profileid\"!=b&&\"Profile\"!=b}),function(a,d){b[d+\"Array\"]=Ia(a,this.f,this)},this);return ij(fg(b))};hj.prototype.f=function(a){return wb(vb(a,function(a,c){return\"_index\"!=c}),function(a){if(x(a)){b:{for(b in a)if(!v.call(void 0,a[b])){var b=!1;break b}b=!0}if(b&&1==yb(a)){b:{for(d in a)break b;var d=void 0}a=Ia(a[d],ec(z(Ib,d)))}}return a},this)};var jj=function(a,b){this.b=Qa(a);this.f=!b;this.a=[]},kj=function(a,b){a.a=[];for(var c=0;c<a.b.length;++c){var d=a.b[c];a.a[c]=!1;if(d.a(b)&&(d=d.b(b),null!==d&&(b=d,a.a[c]=!0,!a.f)))break}return b};var lj=function(a){I.call(this);this.l=a};A(lj,I);lj.prototype.b=function(){na()};lj.prototype.h=function(){na()};lj.prototype.g=function(a){n(a)&&(a=JSON.parse(a));x(a)&&\"functionName\"in a&&this.l(a.functionName,a.args)};var mj=function(a){J.call(this,a)};A(mj,J);q(\"studio.sdk.configurable.ConfigurableEvent\",mj,void 0);mj.REGISTER=\"register\";var nj=function(){},oj=function(a,b,c,d){if(0!=b.length)if(1==b.length){var e=b[0];Eb(c,e,d)}else{e=b[0];var f=parseInt(b[1],10);isNaN(f)?(Eb(c,e,{}),oj(a,b.slice(1),c[e],d)):(Eb(c,e,[]),2<b.length?(void 0===c[e][f]&&(c[e][f]={}),oj(a,b.slice(2),c[e][f],d)):void 0===c[e][f]&&(c[e][f]=d))}};var pj=function(a){this.f=a};oa(pj);pj.prototype.a=function(a){return a&&x(a)?!!Ab(a,\"DbmDynamicFeed\",0):!1};pj.prototype.b=function(a){return qj(this,a.DbmDynamicFeed[0])};var qj=function(a,b){var c={};E(b,y(function(a,b){var d=b.split(\"_\").filter(function(a){return!Za(lb(a))});if(2>d.length)Eb(c,b,a);else try{oj(this.f,d,c,a)}catch(k){Eb(c,b,a)}},a));return c};var rj={17:\"mp4v.20.9\",18:\"avc1.42E033\",22:\"avc1.640033\",37:\"avc1.640033\",36:\"mp4v.20.240\",43:\"vp8\",44:\"vp8\",45:\"vp8\",46:\"vp8\",59:\"avc1.4D4033\",133:\"avc1.4D4015\",134:\"avc1.4D401E\",135:\"avc1.4D401F\",136:\"avc1.4D401F\",137:\"avc1.640033\",160:\"avc1.4D400C\",212:\"avc1.4D401F\",309:\"avc1.640033\",342:\"avc1.42E01E\",343:\"avc1.42E01F\",344:\"avc1.42E033\",345:\"avc1.42E033\",346:\"avc1.42E033\",347:\"avc1.4D401F\"};var uj=function(){var a=sj,b=tj;this.l=window.Enabler;this.h=a;this.B=b;this.j=new Mc(h.innerWidth,h.innerHeight)},vj=[\"video/webm\",\"video/mp4\"],wj=function(a,b){var c=[],d;for(d in b)x(b[d])&&(\"transcodedVideo\"==b[d][\"@type\"]&&b[d].transcodes&&c.push(b[d]),Ra(c,wj(a,b[d])));return c};uj.prototype.f=function(a){return!!(a.url&&a.mimeType&&0<a.width&&0<a.height)};var xj=function(a,b){Wa(a,function(a,b){return a.height-b.height});var c=La(a,function(a){return 0>=b-a.height});return-1==c?a[a.length-1]:b==a[c].height?a[c]:0<c?a[c-1]:a[0]};uj.prototype.g=function(a){var b=Ha(a.transcodes,function(a){var b=a.mimeType;a=a.formatID;a=a+\"\"in rj?rj[a+\"\"]:\"\";Za(lb(a))||(b+='; codecs=\"'+a+'\"');return this.l.Qb(b)},this);b=Ha(b,this.f,this);if(0==b.length)return a.url=a.transcodes[0].url,a;for(var c=b,d=this.h?Pa(this.h,vj):vj,e=0;e<d.length;++e){var f=Ha(b,function(a){return d[e]==a.mimeType});if(f.length){c=f;break}}b=xj(c,this.B||this.j.height);a.url=b.url;return a};uj.prototype.a=function(a){a=wj(this,a);return!!a.length&&Ja(a,function(a){a=a.transcodes;return!!(a&&a.length&&Ja(a,this.f,this))},this)};uj.prototype.b=function(a){C(wj(this,a),this.g,this);return a};var yj=function(a){this.f=a};yj.prototype.b=function(a){var b=this.h(a);return zj(this,a,b)};var zj=function(a,b,c){var d=vb(b,function(a,b){return!x(a)&&!Bb(c,b)});E(c,y(function(a,b){if(\"Google_Merchant_Center\"!=b){var c=b.split(\"_\");if(3>c.length)Eb(d,b,a);else try{var e=c[c.length-1],f;if(f=e){var u=e.length-3;f=0<=u&&e.indexOf(\"Url\",u)==u}oj(this.f,c,d,f&&x(a)&&\"Url\"in a?a.Url:a)}catch(L){Eb(d,b,a)}}},a));\"Google_Merchant_Center\"in b&&(d.Product=Aj(b.Google_Merchant_Center));\"Retail\"in b&&(d.Product=Bj(b.Retail));return d},Aj=function(a){return Ia(a,function(a){var b=Ab(a,\"offer_image_derived\",\"image200\",\"url\"),d=Ab(a,\"offer_landing_page_derived\",\"Url\"),e=Ab(a,\"offer_regular_price\",\"formattedPrice\"),f=Ab(a,\"offer_title\");a=Ab(a,\"offer_description\");return{imageUrl:b,url:d,price:e,name:f,description:a}})},Bj=function(a){return Ia(a,function(a){var b=Ab(a,\"imageUrl\",\"Url\"),d=Ab(a,\"url\",\"Url\"),e=Ab(a,\"price\"),f=Ab(a,\"name\");a=Ab(a,\"description\");return{imageUrl:b,url:d,price:e,name:f,description:a}})};var Cj=function(a){this.f=a};A(Cj,yj);Cj.prototype.a=function(a){a&&x(a)?(a=null!=a?a.layout:null,a=!(null==a||!n(a)||!a)):a=!1;return a};Cj.prototype.h=function(a){a.Headline_0_productClickOnly=!0;return a};var Dj=function(a){this.f=a};A(Dj,yj);Dj.prototype.a=function(a){if(!a||!x(a))return!1;a=Ab(a,\"google_template_data\",\"adData\");return!!a&&1==a.length};Dj.prototype.h=function(a){return a.google_template_data.adData[0]};var Ej=function(){this.a=null;this.b=!1};oa(Ej);Ej.prototype.ia=function(a){if(null!=this.a)a(this.a);else{var b=null,c=[],d=void 0,e=new nj;window.Enabler&&null!=window.Enabler.getParameter(\"AdData\")?(b=window.Enabler.getParameter(\"AdData\"),c.push(new Dj(e))):window.Enabler&&null!=window.Enabler.Qa()?(b=window.Enabler.Qa(),d=c.length,c.push(new Cj(e)),c.push(new pj(e)),c.push(new hj)):window.Enabler&&null!=window.Enabler.ia()?b=window.Enabler.ia():window.GdnLayout&&null!=window.GdnLayout.getConfig()&&(b=JSON.parse(GdnLayout.getConfig()));null!=b&&(c=new jj(c,!0),this.a=kj(c,b),p(d)&&(this.b=!!c.a[d]));a(this.a)}};Ej.prototype.reset=function(){this.a=null};var ij=function(a){return JSON.parse(a)||{}};var Fj=function(a){lj.call(this,a);this.b()};A(Fj,lj);Fj.prototype.b=function(){window.Enabler.cb(\"livePreviewChannel\",y(this.g,this))};Fj.prototype.h=function(a,b){yh(window.Enabler,\"livePreviewMessage\",[{functionName:a,args:b}])};var Gj=function(a,b){lj.call(this,a);this.j=b;this.f=this.a=null;this.b()};A(Gj,lj);Gj.prototype.b=function(){if(\"FILLER\"==this.j){var a=Hj(),b=a.postMessage?a:a.document;b.postMessage?b.postMessage(\"PreviewHandler.INIT\",\"*\"):window.console.log(\"No postMessage on preview frame\",a);this.a=new Zg({tp:1,role:1,cn:\"livePreviewChannel\",osh:!0});a=Hj();this.a.U=a;this.f=new Wf(this.a);me(this,this.a);me(this,this.f);a=this.f;b=y(this.g,this);a.h.Fa(\"livePreviewService\",y(a.o,a,b),!0);this.a.connect(y(this.o,this))}};var Hj=function(){for(var a=h.Enabler.M(\"PREVIEW_FRAME_DEPTH\")||1,b=window,c=b,d=0;d<a;d++)c=c.parent;for(;c!==window.top;)b=b.parent,c=c.parent;return b};Gj.prototype.o=function(){Ij(this,\"PreviewHandler.INIT\")};var Ij=function(a,b){\"FILLER\"==a.j&&Xf(a.f,\"livePreviewService\",b,r)};Gj.prototype.h=function(a,b){Ij(this,[{functionName:a,args:b}])};var Jj=function(){this.f=this.a=this.b=null};oa(Jj);Jj.prototype.ia=function(a){if(null===this.f||null===this.b||null===this.a){var b=new jj([new Dj(new nj)]);h.onAdData=y(function(c,d){if(null===this.f||null===this.b||null===this.a){var e=kj(b,c);this.b=c;this.a=d;this.f=e;a(e,c,d)}},this)}else a(this.f,this.b,this.a)};Jj.prototype.reset=function(){this.f=this.a=this.b=null};var V=function(a){throw new Kj(a);},Kj=function(a){Ea.call(this,a)};A(Kj,Ea);Kj.prototype.name=\"ConfigurableException\";var Lj=new H,Mj=new H,Nj=0,Oj=0,Pj=!1,Qj=/(?:(.*)\\.)?([^\\.\\[]+)(?:\\[(\\d+)\\])?/;q(\"studio.sdk.configurable.config.declare\",function(a,b){Lj.P(a)?V(\"Config type \"+(a+\" already exists\")):Lj.set(a,new Rj(a,b))},void 0);var Sj=function(a,b){return Lj.P(a)?Lj.get(a).create(b):(V(Qi(a)),null)};q(\"studio.sdk.configurable.config.instantiate\",Sj,void 0);var Uj=function(a){if(!Pj)return a;null!=a[\"@type\"]||(a[\"@type\"]=\"Root\");Tj(a);return Sj(a[\"@type\"],a)},Tj=function(a,b){E(a,function(a){x(a)&&Tj(a)});if(x(a)&&!v(a)){(b=a[\"@type\"]||b)||(b=\"\"+Oj++);a[\"@type\"]=b;try{Vj(b);return}catch(c){}Lj.set(b,new Rj(b,a))}},Vj=function(a){var b=Wj(a);return b||(b=Lj.get(a),b)?b:(V(Qi(a)),null)},Yj=function(a){return Xj(a,!0)?Mj.get(a[\"@id\"]):null},ak=function(a){return x(a)?(a=Yj(a))?a.a:null:Zj(a)},bk=function(a){a=Yj(a);return a?a.a.a:(V(\"Attempt to get config type for a non-object\"),null)};q(\"studio.sdk.configurable.config.getType\",bk,void 0);q(\"studio.sdk.configurable.config.getPath\",function(a){a=Yj(a);return a?ck(a):(V(\"Attempt to get config type for a non-object\"),null)},void 0);var ek=function(a,b){var c;if(!Xj(a))return null;if(c=Qj.exec(b)){b=parseInt(c[3],10);isNaN(b)&&(b=null);var d=c[1]||\"\";c=c[2]||\"\"}else d=\"\",c=b,b=null;a=dk(a,d);return Xj(a)?{oa:a,propertyName:c,index:b}:null},fk=function(a,b,c,d){if(null==b)return null;try{var e=Vj(a)}catch(f){if(!Pj)throw f;}if(!e&&Pj){Tj(b,a);e=Vj(a);if(!e)return V(Qi(a)),null;c=ek(c,d);d=Yj(c.oa);a=e;c=d.a.b.get(c.propertyName);c.Ta(a)||c.J.add(a)}return e.create(b)},gk=function(a){this.a=a},Rj=function(a,b){this.a=a;this.b=new H;this.f=new hk;ik(this,b)};A(Rj,gk);var ik=function(a,b){b&&E(b,function(a,b){var c=jk(this.f,b,a);x(a)&&(c=c||kk(this.f,a));c||Xa(b,\"@\")||this.b.set(b,new lk(this,b,a))},a)};Rj.prototype.create=function(a){var b=mk(this);C(this.b.O(),function(c){var d=this.b.get(c),e=void 0;a&&(e=a[c]);d=nk(d,e);b[c]=d;ok(b,c,d)},this);return b};var ok=function(a,b,c){a=a?Yj(a):null;if(qa(c))for(var d=0;d<c.length;d++){var e=d,f=Yj(c[d]);f&&pk(f,a,b,e)}else(c=Yj(c))&&pk(c,a,b,void 0)},qk=function(a,b){this.a=a;this.h=b};A(qk,gk);qk.prototype.create=function(a){return l(a)?a:this.h};var rk=new qk(\"string\",\"\"),sk=new qk(\"number\",0),tk=new qk(\"boolean\",!0),uk=new qk(\"url\",null),vk=new qk(\"color\",\"#000000\"),wk=new qk(\"image\",null),xk=new qk(\"video\",null),yk=new qk(\"asset\",null),Wj=function(a){switch(a.toLowerCase()){case \"string\":case \"str\":return rk;case \"integer\":case \"int\":case \"float\":case \"number\":case \"double\":return sk;case \"boolean\":case \"bool\":return tk;case \"url\":return uk;case \"color\":return vk;case \"image\":return wk;case \"video\":return xk;case \"file\":case \"asset\":return yk}},Zj=function(a){switch(pa(a)){case \"number\":return sk;case \"boolean\":return tk;case \"string\":return rk;default:return V(Ri(a)),rk}},lk=function(a,b,c){this.g=a;this.f=b;this.J=new pf;this.h=this.b=!1;this.a=void 0;this.B=new hk;switch(pa(c)){case \"string\":case \"number\":case \"boolean\":this.b=!1;this.h=!0;this.a=c;this.J.add(Zj(this.a));break;case \"array\":zk(this,c);break;case \"object\":Ak(this,c);break;case \"null\":if(Pj)break;default:V(Si(a.a,b))}},zk=function(a,b){0!=b.length||Pj?(a.b=!0,a.h=!0,a.a=b,C(b,function(a){var b;Pj&&x(a)?b=Lj.get(a[\"@type\"]):b=Zj(a);b&&this.J.add(b)},a)):V(\"Array property \"+(a.f+(\" on type \"+(a.g.a+\" must have at least one element.\"))))},Ak=function(a,b){a.b=!!b[\"@array\"];a.h=!!b[\"@required\"];var c=b[\"@type\"];if(l(c))switch(pa(c)){case \"string\":a.J.add(Vj(c));break;case \"array\":C(c,function(a){(a=Vj(a))&&this.J.add(a)},a);break;default:V(Si(a.g.a,a.f));return}else a.J.add(rk);a.a=void 0;b.hasOwnProperty(\"@value\")?(c=b[\"@value\"],l(c)?a.a=nk(a,c):a.a=void 0):0==a.J.a.f||a.b||(a.a=a.J.K()[0].create(void 0));Bk(a.B,b)};lk.prototype.Ta=function(a){return!!a&&this.J.contains(a)};lk.prototype.j=function(a){if(!x(a))return a;var b=null;Xj(a,!0)?b=ak(a):a.hasOwnProperty(\"@type\")?(b=Lj.get(a[\"@type\"]),null==b&&Pj&&(Tj(a),b=Lj.get(a[\"@type\"]))):1==this.J.S()&&(b=this.J.K()[0]);Pj&&!this.Ta(b)&&this.J.add(b);return this.Ta(b)?b.create(a):(V(Ti(this.g.a,this.f)),null)};var nk=function(a,b){b=l(b)?b:a.a;var c=void 0;a.b?l(b)?(v(b)||(b=[b]),c=Ia(b,y(a.j,a))):c=[]:l(b)&&(c=a.j(b));return!l(c)&&a.h?(V(\"No value specified for non-optional property \"+(a.f+(\" on type \"+(a.g.a+\".\")))),null):c},mk=function(a){var b={};b[\"@id\"]=Nj++;a=new Ck(a,b);Mj.set(a.g,a);return b},Xj=function(a,b){var c=x(a)&&\"@id\"in a;c&&(c=a[\"@id\"],c=Mj.P(c)&&Mj.get(c).H()==a);c||b||V(\"Attempt to get config type for a non-object\");return c},dk=function(a,b){a=Yj(a);return a?Dk(a,b):(V(\"Attempt to get config type for a non-object\"),null)},Ck=function(a,b){this.g=b[\"@id\"];this.a=a;this.j=b;this.h=this.f=this.b=null},Ek=function(a,b){return a.a instanceof Rj?a.a.b.get(b):null};Ck.prototype.H=function(){return this.j};var ck=function(a){if(!a.b)return\"\";var b=ck(a.b);b&&(b+=\".\");b+=a.f;p(a.h)&&(b+=\"[\"+a.h+\"]\");return b},pk=function(a,b,c,d){(a.b=b)?(a.f=c,a.h=p(d)?d:null):(a.f=null,a.h=null)},Dk=function(a,b){if(!b)return a.H();if(b){var c=/^(\\w+)(?:\\[(\\d+)\\])?(?:\\.(.*))?$/.exec(b);if(c)var d={mb:c[1],index:c[2]?parseInt(c[2],10):-1,nb:c[3]?c[3]:null};else V(\"Invalid path \"+b),d=null}else d=null;b=d.mb;c=d.index;d=d.nb;var e=a.a;if(!e.b.get(b))return V(\"Property \"+(b+(\" does not exist on type \"+(e.a+\".\")))),null;a=a.H()[b];if(0<=c){if(!qa(a))return V(Ui(e.a,b)),null;a=a[c]}if(d){a=Yj(a);if(!a)return V(\"Attempt to get config type for a non-object\"),null;a=Dk(a,d)}return a},hk=function(){this.a=new pf},Fk=function(a,b,c){v(c)?C(c,function(a){this.a.add(b+\"_\"+a)},a):n(c)&&a.a.add(b+\"_\"+c)},Bk=function(a,b){b&&E(b,function(a,b){jk(this,b,a);x(a)&&kk(this,a)},a)},kk=function(a,b){try{var c=!1,d=b[\"@type\"],e=b[\"@value\"],f=d&&tk==Vj(String(d)),k=l(e)&&tk==ak(e);(f||k)&&E(b,function(a,b){c=c||jk(this,b,a)},a);return c}catch(m){return!1}},jk=function(a,b,c){if(!Xa(b,\"@\"))return!1;b=b.replace(\"@\",\"\");switch(b){case \"exit\":return Fk(a,\"exit\",c),!0;case \"counter\":return Fk(a,\"counter\",c),!0;case \"timer\":return Fk(a,\"timer\",c),!0}return!1},Gk=function(a,b){var c=a[b];return v(c)?c:(V(Ui(bk(a),b)),null)};var Ik=function(a){this.a=Yj(a);this.B=new Hk;this.f=new H;this.b=new H;this.j=new H;this.h=new H;this.g=new H},Jk=new H,Kk=function(a){if(!Xj(a))return null;var b=a[\"@id\"];Jk.P(b)||Jk.set(b,new Ik(a));return Jk.get(b)},Lk=function(a,b,c){a=ek(a,b);return!a||c&&!Gk(a.oa,a.propertyName)?null:(c=Kk(a.oa))?{controller:c,propertyName:a.propertyName,index:a.index}:null},W=function(a,b){var c=a.get(b);l(c)||(c=new Hk,a.set(b,c));return c},Nk=function(a){C(a.f.O(),function(a){var b=this.a.H()[a];W(this.f,a).a(b)},a);C(a.b.O(),function(a){for(var b=this.a.H()[a],d=0;d<b.length;d++){var e=b[d],f=d,k=b;W(this.b,a).a(e,f,k)}},a);C(a.h.O(),function(a){var b=this.a.H()[a];W(this.h,a).a(b)},a);Mk(a)},Mk=function(a){a.B.a(a.a.H());(a=a.a.b)&&Mk(Kk(a.H()))},Hk=function(){this.b=[]};Hk.prototype.add=function(a,b){var c=this.b;a={L:a,scope:b};0<=Ga(c,a)||c.push(a)};var Ok=function(a,b,c){var d=La(a.b,function(a){return a.L==b&&a.scope==c});-1!=d&&Na(a.b,d)};Hk.prototype.a=function(a){var b=arguments;C(this.b,function(a){a.L.apply(a.scope,b)})};q(\"studio.sdk.configurable.binding.addValueChangeListener\",function(a,b,c){(a=Kk(a))&&a.B.add(b,c)},void 0);q(\"studio.sdk.configurable.binding.removeValueChangeListener\",function(a,b,c){(a=Kk(a))&&Ok(a.B,b,c)},void 0);var Pk=function(a,b,c,d){(a=Lk(a,b))&&W(a.controller.f,a.propertyName).add(c,d)};q(\"studio.sdk.configurable.binding.addPropertyChangeListener\",Pk,void 0);q(\"studio.sdk.configurable.binding.removePropertyChangeListener\",function(a,b,c,d){(a=Lk(a,b))&&Ok(W(a.controller.f,a.propertyName),c,d)},void 0);var Qk=function(a,b,c,d){(a=Lk(a,b,!0))&&W(a.controller.b,a.propertyName).add(c,d)};q(\"studio.sdk.configurable.binding.addArrayInsertListener\",Qk,void 0);q(\"studio.sdk.configurable.binding.removeArrayInsertListener\",function(a,b,c,d){(a=Lk(a,b,!0))&&Ok(W(a.controller.b,a.propertyName),c,d)},void 0);var Rk=function(a,b,c,d){(a=Lk(a,b,!0))&&W(a.controller.j,a.propertyName).add(c,d)};q(\"studio.sdk.configurable.binding.addArrayRemoveListener\",Rk,void 0);q(\"studio.sdk.configurable.binding.removeArrayRemoveListener\",function(a,b,c,d){(a=Lk(a,b,!0))&&Ok(W(a.controller.j,a.propertyName),c,d)},void 0);q(\"studio.sdk.configurable.binding.addValueAddedListener\",function(a,b,c,d){(a=Lk(a,b))&&W(a.controller.h,a.propertyName).add(c,d)},void 0);q(\"studio.sdk.configurable.binding.removeValueAddedListener\",function(a,b,c,d){(a=Lk(a,b))&&Ok(W(a.controller.h,a.propertyName),c,d)},void 0);q(\"studio.sdk.configurable.binding.addValueRemovedListener\",function(a,b,c,d){(a=Lk(a,b))&&W(a.controller.g,a.propertyName).add(c,d)},void 0);q(\"studio.sdk.configurable.binding.removeValueRemovedListener\",function(a,b,c,d){(a=Lk(a,b))&&Ok(W(a.controller.g,a.propertyName),c,d)},void 0);var Sk=function(a){var b=Kk(a);if(b){Nk(b);for(var c in a)if(b=a[c],v(b))for(var d=0;d<b.length;d++)x(b[d])&&Sk(b[d]);else x(b)&&Sk(b)}};q(\"studio.sdk.configurable.binding.fireAllListeners\",Sk,void 0);var Tk=function(a,b,c){var d=Lk(a,b);if(d){a=d.controller;b=d.propertyName;d=d.index;var e=a.a.H(),f=e[b],k=Ek(a.a,b);null==c||ak(c)?(null!=d?(k=f,f=k[d],k[d]=c,c=k):e[b]=c,ok(null,b,f),ok(e,b,c),d=c,W(a.f,b).a(d),Mk(a)):V(Ti(a.a.a.a,k.f))}};q(\"studio.sdk.configurable.binding.update\",Tk,void 0);var Yk=function(a,b){if(Pj)a=Uj(b);else if(!a||!Xj(a))return a;if(!a)return a;var c=Yj(a);C(c.a instanceof Rj?c.a.b.O():null,function(d){var e=Ek(c,d),f=a[d],k=b[d],m=null!=f?ak(f):e.J.K()[0];if(e.b){if(v(f))for(;0<f.length;)Uk(a,d,0);v(k)?C(k,z(Vk,a,d)):null!=k&&Vk(a,d,k,0)}else m instanceof qk?Tk(a,d,k):m instanceof Rj&&(null!=k?Wk(a,d,k):null!=f&&Xk(a,d),null!=f&&null!=k&&Yk(f,k))});return a};q(\"studio.sdk.configurable.binding.updateAll\",Yk,void 0);var Vk=function(a,b,c,d){if(b=Lk(a,b,!0)){a=b.controller;b=b.propertyName;var e=d,f=a.a.H();if(d=Gk(f,b)){c=Ek(a.a,b).j(c);if(0>e||e>d.length)e=d.length;Ta(d,e,0,c);ok(f,b,d);W(a.b,b).a(c,e,d);Mk(a)}}};q(\"studio.sdk.configurable.binding.arrayInsert\",Vk,void 0);var Uk=function(a,b,c){if(b=Lk(a,b,!0)){a=b.controller;b=b.propertyName;var d=a.a.H(),e=Gk(d,b);if(e)if(0>c||c>=e.length)a=bk(d),V(\"Property \"+(b+(\" on type \"+(a+(\" has length \"+(e.length+(\", but invalid index \"+(c+\" was requested.\"))))))));else{var f=e[c];Na(e,c);ok(null,b,f);ok(d,b,e);W(a.j,b).a(f,c,e);Mk(a)}}};q(\"studio.sdk.configurable.binding.arrayRemove\",Uk,void 0);var Wk=function(a,b,c){if(b=Lk(a,b)){a=b.controller;b=b.propertyName;var d=a.a.H(),e=d[b],f=Ek(a.a,b);f?(c=f.j(c),d[b]=c,ok(null,b,e),ok(d,b,c),e&&W(a.g,b).a(e),W(a.h,b).a(c),Mk(a)):V(\"The optional property \"+(b+\" must be a reference\"))}};q(\"studio.sdk.configurable.binding.addValue\",Wk,void 0);var Xk=function(a,b){if(b=Lk(a,b)){a=b.controller;b=b.propertyName;var c=a.a.H();if(c[b]){var d=c[b];delete c[b];ok(null,b,d);ok(c,b,void 0);W(a.g,b).a(d);Mk(a)}}};q(\"studio.sdk.configurable.binding.removeValue\",Xk,void 0);var Zk=function(a,b,c,d){I.call(this);this.a=a;this.h=b;this.f=this.b=null;this.f=c?new Fj(y(this.g,this)):new Gj(y(this.g,this),d)};A(Zk,I);q(\"studio.sdk.configurable.PreviewHandler\",Zk,void 0);Zk.CallbackMethods={Hc:\"showNode\",Fc:\"hideNode\",Ec:\"changeValue\",Gc:\"showMessage\"};var $k=function(a,b){return a?a+\".\"+b:b};Zk.prototype.g=function(a,b){switch(a){case \"updateValue\":if(3>b.length)break;a=b[0];var c=JSON.parse(b[1]);this.ra(a,c,b[2]);break;case \"addArrayItem\":if(4>b.length)break;a=b[0];var d=b[1],e=JSON.parse(b[2]);c=b[3];a=$k(a,d);c=fk(c,e,this.a,a);Vk(this.a,a,c,-1);break;case \"removeArrayItem\":if(3>b.length)break;a=b[0];d=b[1];var f=parseInt(b[2],10);Uk(this.a,$k(a,d),f);break;case \"updateArrayValue\":if(5>b.length)break;a=b[0];d=b[1];e=JSON.parse(b[2]);c=b[3];f=parseInt(b[4],10);b=e;e=f;a=$k(a,d);Uk(this.a,a,e);c=fk(c,b,this.a,a);Vk(this.a,a,c,e);break;case \"addValue\":if(4>b.length)break;e=b[0];d=JSON.parse(b[1]);a=b[2];c=b[3];a=$k(a,e);c=fk(c,d,this.a,a);Wk(this.a,a,c);break;case \"changeInputVariable\":if(2>b.length)break;e=b[0];al(this,e,b[1]);break;case \"removeValue\":2>b.length||(e=b[0],a=b[1],Xk(this.a,$k(a,e)))}};Zk.prototype.ra=function(a,b){E(b,function(b,d){Tk(this.a,$k(a,d),b)},this)};Zk.prototype.updateValue=Zk.prototype.ra;var al=function(a,b,c){switch(b){case \"assets\":a.h&&a.h(c);break;case \"setGdnAction\":b=c,n(b)&&(b=JSON.parse(b)),x(b)&&a.b&&E(a.b(b),function(a,b){\"@\"!=b[0]&&(b=$k(\"\",b),a=fk(a[\"@type\"],a,this.a,b),Wk(this.a,b,a))},a)}},cl=function(a,b){bl.f.h(a,b)};q(\"studio.sdk.configurable.RUNTIME_MODE\",{FILLER:\"FILLER\",PLAY:\"PLAY\",TRAFFICK:\"TRAFFICK\",DEVELOPMENT:\"DEVELOPMENT\"},void 0);q(\"studio.sdk.configurable.FILLER_CONTEXT\",{CREATIVE:\"CREATIVE\",MANAGEMENT:\"MANAGEMENT\",NONE:\"NONE\"},void 0);var dl=new K,el=new H,bl=null,fl=null,gl=!1,hl=null,il=new G,sj=null,tj=null,jl=!1;q(\"studio.sdk.configurable.reset\",function(){je(Lj);je(Mj);Oj=Nj=0;Pj=!1;je(Jk);Jj.ea().reset();Ej.ea().reset();fl=null;je(el);bl=null;gl=!1;hl=null;jl=!1},void 0);q(\"studio.sdk.configurable.getConfiguration\",function(a){Pj=!0;kl(null,a)},void 0);q(\"studio.sdk.configurable.register\",function(a,b){kl(a,b)},void 0);var kl=function(a,b){B(64)||h.Enabler?ll(z(ml,a,b)):nl(z(ol,a,b))};q(\"studio.sdk.configurable.addRegisterListener\",function(a){dl.wa(\"register\",a)},void 0);var ll=function(a){if(h.Enabler){var b=h.Enabler;b.isInitialized()?a():Je(b,\"init\",a)}else Yd(il,z(ll,a))};q(\"studio.sdk.configurable.setDefaultVideoPreferences\",function(a,b){sj=a||null;tj=b||null},void 0);var nl=function(a){var b=h.a;Jj.ea().ia(function(c,d,e){jl||(gl=jl=!0,hl=e,a(c),b&&w(b)&&b(d,e))})},ml=function(a,b){if(!jl){jl=!0;var c=new jj([new uj],!1);Ej.ea().ia(function(d){d=kj(c,d);ol(a,b,d)})}},ol=function(a,b,c){c&&(c=Yk(a,c),a||(a=c));a&&B(16)?bl=new Zk(a,pl,!!h.Enabler.getParameter(\"useEnablerMessages\"),ql()):B(1)||(fl=a);b&&b(a);dl.dispatchEvent(new mj(\"register\"))};q(\"studio.sdk.configurable.exit\",function(a,b,c){(a=rl(a,b,\"exit\"))&&Ej.ea().b?(c=String,b=Ej.ea(),b.a?(a=a.split(\"_\"),a=Ab(b.a,a[0],parseInt(a[1],10),a[2])):a=null,c=c(a),h.Enabler.Pa(\"Layout Exit\",c)):a&&h.Enabler?null!=c?h.Enabler.Pa(a,c):h.Enabler.exit(a):gl&&(a&&0<a.length?hl.exit(a):hl.exit())},void 0);var rl=function(a,b,c){if((!b||0==b.length)&&(gl||Ej.ea().b))return\"\";if(a=ek(a,\"\")){var d=Yj(a.oa),e=a.propertyName,f=a.index;a=d;e&&(d=d.H()[e],p(f)&&(d=d[f]),(d=Yj(d))&&(a=d));d=!1;a.f&&(d=Ek(a.b,a.f).B.a.contains(c+\"_\"+b));b=(d=d||a.a.f.a.contains(c+\"_\"+b))||Pj?mb(ck(a),\"::\",b):\"\"}else b=\"\";if(!B(64)&&h.Enabler&&h.Enabler.getParameter(\"AdData\")||gl||Ej.ea().b)b?(b=b.replace(\"[\",\"_\"),b=b.replace(\"]::\",\"_\"),b=b.replace(\".\",\"_\"),Xa(b,\"::\")&&(b=b.substring(2)),b=b.replace(\"::\",\"_\")):b=null;return b};q(\"studio.sdk.configurable.exitQueryString\",function(a,b,c){(a=rl(a,b,\"exit\"))&&h.Enabler&&h.Enabler.hb(a,c)},void 0);q(\"studio.sdk.configurable.counter\",function(a,b,c){(a=rl(a,b,\"counter\"))&&h.Enabler&&h.Enabler.Ca(a,c)},void 0);q(\"studio.sdk.configurable.startTimer\",function(a,b){(a=rl(a,b,\"timer\"))&&h.Enabler&&h.Enabler.startTimer(a)},void 0);q(\"studio.sdk.configurable.stopTimer\",function(a,b){(a=rl(a,b,\"timer\"))&&h.Enabler&&h.Enabler.stopTimer(a)},void 0);var pl=function(a){Zh(h.Enabler,a)};q(\"studio.sdk.configurable.showFiller\",function(a){bl&&cl(\"showNode\",[a])},void 0);q(\"studio.sdk.configurable.hideFiller\",function(a){bl&&cl(\"hideNode\",[a])},void 0);q(\"studio.sdk.configurable.changeFillerValue\",function(a,b){bl?(cl(\"changeValue\",[a,b]),bl.ra(a,b,!1)):fl&&E(b,function(b,d){Tk(fl,$k(a,d),b)})},void 0);q(\"studio.sdk.configurable.setTranslationMethod\",function(a){bl&&(bl.b=a)},void 0);q(\"studio.sdk.configurable.showMessage\",function(a){bl&&cl(\"showMessage\",[a])},void 0);var ql=function(){if(!h.Enabler)return\"TRAFFICK\";switch(h.Enabler.getParameter(\"layoutsRuntime\")){case \"AUTHORING\":return\"FILLER\";case \"TESTING\":return\"PLAY\";default:return h.Enabler.isInitialized()?B(1)?\"TRAFFICK\":\"DEVELOPMENT\":\"TRAFFICK\"}};q(\"studio.sdk.configurable.getRuntimeMode\",ql,void 0);q(\"studio.sdk.configurable.getFillerContext\",function(){if(!h.Enabler)return\"NONE\";switch(h.Enabler.getParameter(\"fillerContext\")){case \"CREATIVE_FILLER\":return\"CREATIVE\";case \"MANAGEMENT_FILLER_PREVIEW\":return\"MANAGEMENT\";default:return\"NONE\"}},void 0);var sl=function(){mf(\"enabler\",function(){il.a||il.L()})};$e.configurable=3;if(!B(64)||!h.Enabler){var tl=Ah().f;if(tl){var ul=tl.get(\"e\",null);ul&&Ba(parseInt(ul,10)||0)}if(B(64))sl();else if(!B(128)){var vl=ef();/html5/.test(vl)&&ge(ed(vl+\"addata.js\"))}};");
