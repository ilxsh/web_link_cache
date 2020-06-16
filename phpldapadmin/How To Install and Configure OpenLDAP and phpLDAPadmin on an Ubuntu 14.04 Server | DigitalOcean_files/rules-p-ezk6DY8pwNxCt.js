/*
 Quantcast measurement tag
 Copyright (c) 2008-2020, Quantcast Corp.
*/
(function(b,d,c){try{__qc("defaults",b,{labels:"_fp.event.Default"})}catch(h){}__qc("rules",[b]);(function(g){var e=function(){var a;if(d.top===d.self)a=c.location.href;else{a=c.referrer;var b=c.createElement("a");b.href=a;a=b.href}return a},f=e();setInterval(function(){var a=e();a!==f&&(f=a,__qc.apply(null,g),__qc("push",{qacct:b,event:"load"},!0))},2E3)})(["rules"])})("p-ezk6DY8pwNxCt",window,document);