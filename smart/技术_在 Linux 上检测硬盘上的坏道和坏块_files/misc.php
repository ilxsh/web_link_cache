if($('seccode_cSYkvw4I')) {
	if(!$('vseccode_cSYkvw4I')) {
		var sectpl = seccheck_tpl['cSYkvw4I'] != '' ? seccheck_tpl['cSYkvw4I'].replace(/<hash>/g, 'codecSYkvw4I') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSYkvw4I" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSYkvw4I" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSYkvw4I\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSYkvw4I\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSYkvw4I"><img id="checksec_none_cSYkvw4I" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSYkvw4I">输入下图中的字符<br /><img onclick="updateseccode(\'cSYkvw4I\')" width="100" height="40" src="misc.php?mod=seccode&update=78760&idhash=cSYkvw4I" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSYkvw4I').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSYkvw4I\')" width="100" height="40" src="misc.php?mod=seccode&update=78760&idhash=cSYkvw4I" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSYkvw4I').innerHTML = string;
	}
	
}