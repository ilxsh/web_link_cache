if($('seccode_cSyZz7u1')) {
	if(!$('vseccode_cSyZz7u1')) {
		var sectpl = seccheck_tpl['cSyZz7u1'] != '' ? seccheck_tpl['cSyZz7u1'].replace(/<hash>/g, 'codecSyZz7u1') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSyZz7u1" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSyZz7u1" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSyZz7u1\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSyZz7u1\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSyZz7u1"><img id="checksec_none_cSyZz7u1" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSyZz7u1">输入下图中的字符<br /><img onclick="updateseccode(\'cSyZz7u1\')" width="100" height="40" src="misc.php?mod=seccode&update=66908&idhash=cSyZz7u1" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSyZz7u1').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSyZz7u1\')" width="100" height="40" src="misc.php?mod=seccode&update=66908&idhash=cSyZz7u1" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSyZz7u1').innerHTML = string;
	}
	
}