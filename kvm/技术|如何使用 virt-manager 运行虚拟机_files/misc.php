if($('seccode_cStfSB2K')) {
	if(!$('vseccode_cStfSB2K')) {
		var sectpl = seccheck_tpl['cStfSB2K'] != '' ? seccheck_tpl['cStfSB2K'].replace(/<hash>/g, 'codecStfSB2K') : '';
		var sectplcode = sectpl != '' ? sectpl.split('<sec>') : Array('<br />',': ','<br />','');
		var string = '<input name="seccodehash" type="hidden" value="cStfSB2K" /><input name="seccodemodid" type="hidden" value="portal::view" />' + sectplcode[0] + '验证码' + sectplcode[1] + '<input name="seccodeverify" id="seccodeverify_cStfSB2K" type="text" autocomplete="off" style="ime-mode:disabled;width:100px" class="txt px vm" onblur="checksec(\'code\', \'cStfSB2K\', 0, null, \'portal::view\')" />' +
			' <a href="javascript:;" onclick="updateseccode(\'cStfSB2K\');doane(event);" class="xi2">换一个</a>' +
			'<span id="checkseccodeverify_cStfSB2K"><img id="checksec_none_cStfSB2K" src="' + STATICURL + 'image/common/none.gif" width="16" height="16" class="vm" /></span>' +
			sectplcode[2] + '<span id="vseccode_cStfSB2K">输入下图中的字符<br /><img onclick="updateseccode(\'cStfSB2K\')" width="100" height="40" src="misc.php?mod=seccode&update=82404&idhash=cStfSB2K" class="vm" alt="" /></span>' + sectplcode[3];
		evalscript(string);
		$('seccode_cStfSB2K').innerHTML = string;
	} else {
		var string = '输入下图中的字符<br /><img onclick="updateseccode(\'cStfSB2K\')" width="100" height="40" src="misc.php?mod=seccode&update=82404&idhash=cStfSB2K" class="vm" alt="" />';
		evalscript(string);
		$('vseccode_cStfSB2K').innerHTML = string;
	}
	
}