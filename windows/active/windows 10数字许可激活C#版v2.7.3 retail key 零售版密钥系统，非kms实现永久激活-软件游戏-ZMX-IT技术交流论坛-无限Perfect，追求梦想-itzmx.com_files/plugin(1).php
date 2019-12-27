var announce, aId = 0, btURI, aList;

function switchButton(e_id){
	$("e_btn_info").className = e_id=="info"?"current":"";
	$("e_btn_files").className = e_id=="files"?"current":"";
	$("e_info").style.display = e_id=="info"?"block":"none";
	$("e_files").style.display = e_id=="files"?"block":"none";
}
function bt_get(){
	aId = announce.length>aId?aId:0;
	$("bt_notice").className = "notice upnf bt_magnet bt_loading";
	$("bt_text").innerHTML = "Loading...";
	$("announce").innerHTML = aList[aId];
	$("announce").title = aList[aId];
	appendscript(btURI+announce[aId]+"&r="+Math.random());
	aId++;
}
function bt_callback(type, str){
	$("bt_notice").className = "notice upnf bt_magnet";
	switch (type) {
	case 0: str = "服务器未开启 CURL 扩展，请与管理员联系。";break;
	case 1: str = "种子&nbsp;<span class=\"xi1\">"+str["complete"]+"</span>,&nbsp;下载&nbsp;<span class=\"xi1\">"+str["incomplete"]+"</span>,&nbsp;完成&nbsp;<span class=\"xi1\">"+str["downloaded"]+"</span>&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"点击刷新种子状态\">[刷新]</a>";break;
	case 2: str = "连接服务器超时 ("+str+" 秒)&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"点击重试\">[重试]</a>";break;
	case 3: str = "连接服务器失败 (代码 "+str+")&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"点击重试\">[重试]</a>";break;
	default: str = "资源无效或未发布";break;
	}
	$("bt_text").innerHTML = str;
	$("bt_text").innerHTML+= type>0&&announce.length>1?"&nbsp;<a href=\"javascript:;\" onclick=\"bt_get()\" title=\"点击切换服务器\">["+aId+"/"+announce.length+"]</a>":"";
}
