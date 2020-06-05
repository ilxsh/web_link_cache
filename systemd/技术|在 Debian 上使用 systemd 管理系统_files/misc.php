if($('seccode_cSz00BwB')) {
	if(!$('vseccode_cSz00BwB')) {
		var sectpl = seccheck_tpl['cSz00BwB'] != '' ? seccheck_tpl['cSz00BwB'].replace(/<hash>/g, 'codecSz00BwB') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cSz00BwB" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cSz00BwB" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cSz00BwB\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cSz00BwB\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cSz00BwB"><img id="checksec_none_cSz00BwB" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cSz00BwB">输入下图中的字符<br /><img onclick="updateseccode(\'cSz00BwB\')" width="100" height="40" src="misc.php?mod=seccode&update=88288&idhash=cSz00BwB" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cSz00BwB').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cSz00BwB\')" width="100" height="40" src="misc.php?mod=seccode&update=88288&idhash=cSz00BwB" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cSz00BwB').innerHTML = string;
	}
	
}