(function(){
    var cmflag = document.cookie.replace(/(?:(?:^|.*;\s*)cmflag\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(document.location.protocol.indexOf('https') === -1 && !cmflag && Math.random() < 0.6){
        var version = '2.0.60';
        var d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = 'cmflag=true; expires=' + d.toUTCString() + '; path=/';
        document.write('<iframe id="tanxcmiframe" width="0" height="0" src="http://dspcm.brand.sogou.com/qi?_v=' + version + '" style="display:none"><' + '/iframe>');
    }
})();
