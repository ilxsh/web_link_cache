
/*

 * dxpmedia js

 * Version 1.1

 * author zhi.wang

 * 

 */

var DXPmedia={request : function(_url){if(_url.length==0)return;_url = _url.replace(/__TS__/ig, (Math.random()+"").substr(2,4));var img = new Image(); img.src=_url;},dotracking : function (_urls){if(_urls.length==0){return;}var _arrlist = _urls.split("||");for(var i=0;i<_arrlist.length;i++){var _url = unescape(_arrlist[i]);DXPmedia.request(_url);}}}