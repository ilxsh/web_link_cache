if($('seccode_cSJjUMjz')) {
	if(!$('vseccode_cSJjUMjz')) {
		var sectpl = seccheck_tpl['cSJjUMjz'] != '' ? seccheck_tpl['cSJjUMjz'].replace(/<hash>/g, 'codecSJjUMjz') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSJjUMjz" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSJjUMjz" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSJjUMjz\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSJjUMjz\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSJjUMjz"><img id="checksec_none_cSJjUMjz" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSJjUMjz">输入下图中的字符<br /><img onclick="updateseccode(\'cSJjUMjz\')" width="100" height="40" src="misc.php?mod=seccode&update=47164&idhash=cSJjUMjz" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSJjUMjz').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSJjUMjz\')" width="100" height="40" src="misc.php?mod=seccode&update=47164&idhash=cSJjUMjz" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSJjUMjz').innerHTML = string;
	}
	
}