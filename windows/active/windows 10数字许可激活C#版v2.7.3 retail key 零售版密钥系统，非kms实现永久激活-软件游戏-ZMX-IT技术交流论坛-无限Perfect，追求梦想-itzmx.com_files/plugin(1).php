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
	case 0: str = "������δ���� CURL ��չ���������Ա��ϵ��";break;
	case 1: str = "����&nbsp;<span class=\"xi1\">"+str["complete"]+"</span>,&nbsp;����&nbsp;<span class=\"xi1\">"+str["incomplete"]+"</span>,&nbsp;���&nbsp;<span class=\"xi1\">"+str["downloaded"]+"</span>&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"���ˢ������״̬\">[ˢ��]</a>";break;
	case 2: str = "���ӷ�������ʱ ("+str+" ��)&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"�������\">[����]</a>";break;
	case 3: str = "���ӷ�����ʧ�� (���� "+str+")&nbsp;<a href=\"javascript:;\" onclick=\"aId--;bt_get()\" title=\"�������\">[����]</a>";break;
	default: str = "��Դ��Ч��δ����";break;
	}
	$("bt_text").innerHTML = str;
	$("bt_text").innerHTML+= type>0&&announce.length>1?"&nbsp;<a href=\"javascript:;\" onclick=\"bt_get()\" title=\"����л�������\">["+aId+"/"+announce.length+"]</a>":"";
}
