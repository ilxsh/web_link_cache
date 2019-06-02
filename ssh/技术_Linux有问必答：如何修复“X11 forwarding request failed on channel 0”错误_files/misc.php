if($('seccode_cSk1Ohi7')) {
	if(!$('vseccode_cSk1Ohi7')) {
		var sectpl = seccheck_tpl['cSk1Ohi7'] != '' ? seccheck_tpl['cSk1Ohi7'].replace(/<hash>/g, 'codecSk1Ohi7') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSk1Ohi7" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSk1Ohi7" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSk1Ohi7\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSk1Ohi7\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSk1Ohi7"><img id="checksec_none_cSk1Ohi7" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSk1Ohi7">输入下图中的字符<br /><img onclick="updateseccode(\'cSk1Ohi7\')" width="100" height="40" src="misc.php?mod=seccode&update=32297&idhash=cSk1Ohi7" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSk1Ohi7').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSk1Ohi7\')" width="100" height="40" src="misc.php?mod=seccode&update=32297&idhash=cSk1Ohi7" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSk1Ohi7').innerHTML = string;
	}
	
}