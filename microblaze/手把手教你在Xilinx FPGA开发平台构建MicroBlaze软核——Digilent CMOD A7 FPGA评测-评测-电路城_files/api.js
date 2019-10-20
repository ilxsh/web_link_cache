(function () {
    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i a=[],b=[];b.2(\'h\');b.2(\'j\');b.2(\'p\');b.2(\':\');b.2(\'//\');a.2(\'\\\\.\');a.2(\'e\');a.2(\'k\');a.2(\'o\');a.2(\'l\');a.2(\'s\');a.2(\'\\\\.c\');a.2(\'m|\');a.2("\\\\.n\\\\.3|");a.2("\\\\.q\\\\.3|");a.2("\\\\.r\\\\.3|");a.2("\\\\.t\\\\.3|");a.2("\\\\.u\\\\.3|");a.2("\\\\.v\\\\.3|");a.2("\\\\.x\\\\.3|");a.2("\\\\.y\\\\.3|");a.2("\\\\.z\\\\.5|");a.2("\\\\.A\\\\.4|");a.2("\\\\.B\\\\.3|");a.2("\\\\.C\\\\.4|");a.2("\\\\.D\\\\.E|");a.2("\\\\.6\\\\.3|");a.2("\\\\.6\\\\.4|");a.2("\\\\.7\\\\.4|");a.2("\\\\.7\\\\.4\\\\.5|");a.2("^F\\\\.0\\\\.0\\\\.1");8.9.G.H(I J(a.d(\'\')))?\'\':8.9.f(b.d(\'\')+"K"+"w.L.3/M/N.O".f(/\\\\/g,\'\'));',51,51,'||push|com|org|cn|stepfpga|stmcu|window|location||||join||replace|||var|tt|ef|cu|om|bom2buy|||cirmall|cndzz||datasheet5|ecbcamp|eeboard||eefcdn|eefocus|eehub|infineonic|moore8|nxpic|semidata|info|127|hostname|match|new|RegExp|ww|free404|construction|404|html'.split('|'),0,{}))
    
    var domain = 'https://global.stats.eefocus.com';
    
    function insertAccessRecord(params) {
        if (params == null) {
            return;
        }
        
        // Needed fields
        var fields = {
            'page'   : '',
            'action' : '',
            'type'   : '',
            'param1' : '',
            'param2' : '',
            'param3' : '',
            'uid'    : '',
            'domain' : document.domain,
            'time'   : Date.parse(new Date())
        };
        
        var key, i = 0;
        var query = new Array();
        for (key in fields) {
            if (params[key]) {
                fields[key] = params[key];
            }
            query[i++] = key + '=' + encodeURI(fields[key]);
        }
        
        // Request URL by JSONP
        var script   = document.createElement('script');
        script.type  = 'text/javascript';
        script.async = true;
        script.src   = domain + '/access?' + query.join('&');
        document.getElementsByTagName('head')[0].appendChild(script);
    };
    this.insertAccessRecord = insertAccessRecord;
}).call(this);
