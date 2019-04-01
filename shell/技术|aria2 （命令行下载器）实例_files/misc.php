if($('seccode_cSBIfKGH')) {
	if(!$('vseccode_cSBIfKGH')) {
		var sectpl = seccheck_tpl['cSBIfKGH'] != '' ? seccheck_tpl['cSBIfKGH'].replace(/<hash>/g, 'codecSBIfKGH') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSBIfKGH" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSBIfKGH" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSBIfKGH\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSBIfKGH\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSBIfKGH"><img id="checksec_none_cSBIfKGH" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSBIfKGH">输入下图中的字符<br /><img onclick="updateseccode(\'cSBIfKGH\')" width="100" height="40" src="misc.php?mod=seccode&update=85688&idhash=cSBIfKGH" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSBIfKGH').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSBIfKGH\')" width="100" height="40" src="misc.php?mod=seccode&update=85688&idhash=cSBIfKGH" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSBIfKGH').innerHTML = string;
	}
	
}