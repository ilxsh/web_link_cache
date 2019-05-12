function runLabsTests() {
    
    function doIPT(config) {

        // this is just how to make eval return an object so we can promote a string argument to the structure it represents
        if (typeof config == "string") config = eval("(function() {return " +  config + "})();");

        var _done = !1;
        var _timeout = config.ipptimeout;
        var _testSet = config.ipptestset;
        var _testSetLen = _testSet.length;
        var _tests = config.ipptests;
        var _testsComplete = 0;
        var _now = new Date;
        var _testTime = _now.getTime();
        var _result = {};

        var finishTest = function() {
            clearTimeout(_timeoutEvent);
            if(!_done) {
                for(var b = '', d = 0; d<_testSetLen; d++)
                  var c = _testSet[d], c = c.replace(/\./g,''), b = b+['z',c,'-',_result[c]?_result[c]:'null','.'].join('');
                b = ['//',config.ippresults,b].join('');
                // Change.
                // Assigning something that looks like a url to src triggers checks.
                // document.createElement('img').src = b;
                basicFetchImg(b);

                _done = !0;

                //callback instanceof Function&&callback(_result)
            }
        };

        var startTest = function() {
            for(var b = 0; b<_testSetLen; b++) {
                var a = _tests[b].exName;
                _result[a.replace(/\./g,'')] = !1;
                httpFetchImg(_tests[b].exUrl,'_ipt_'+a.replace(/\./g,''))
            }
            _timeoutEvent = setTimeout(finishTest,_timeout)
        };

        var basicFetchImg = function(url) {
            // Make the url protocol relative.
            url = url.replace(/http:/,'');
            document.createElement('img').src = url;
        };

        var httpFetchImg=function(url,name) {
            var req = document.createElement('img');
            req.name = name;
            req._start = (new Date).getTime();
            req.onload = function() {
                      _duration = (new Date).getTime() - req._start;
                      _testsComplete++;
                      var res_match = req.name.match(/^_ipt_(\w+)$/);
                      res_match[1] && (_result[res_match[1]] = _duration);
                      _testsComplete >= _testSetLen&&finishTest() 
                    };
            // Make the url protocol relative.
            url = url.replace(/http:/,'');
            req.src = url
        };

        startTest();
    }

    config  = {"ipptimeout":10000};
    var xpt = [];
    var xpl = [];
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var sp = xhr.responseText.split("\n");
            var d = sp.length;
            for(var a=0;a<(d-1); a++) {
                var xp = sp[a].split(/\s/);
                if (xp[0] == 'results') {
                    config["ippresults"]=xp[1];  // Change: Fixed a bug here.
                } else if (xp[0] == 'stunres') {
                    config["stunres"]=xp[1];
                } else if (xp[0] == 'stunsvr') {
                    config["ippstun"]=xp[1];
                } else {
                    xpt.push(xp[0])
                    xpl.push({"exName":xp[0], "exUrl": xp[1]})
                }
            }
            config["ipptestset"]=xpt;
            config["ipptests"]=xpl;
            doIPT(config);
        } else {
            console.debug('not run');
        };
    };
    xhr.open('GET', encodeURI('//cfg.dotnxdomain.net/newadcfg/ad.py?A=2111&N&R&F'));
    xhr.send();
}

