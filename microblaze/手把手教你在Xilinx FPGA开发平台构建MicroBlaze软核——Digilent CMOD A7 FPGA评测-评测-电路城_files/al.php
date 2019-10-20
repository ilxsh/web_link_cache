var MAX_ef2522f1 = '';
MAX_ef2522f1 += "<"+"div id=\"MAX_ef2522f1\" style=\"position:absolute; width:956px; height:597px; z-index:9999; left: 0px; top: 0px; visibility: hidden\">\n";
MAX_ef2522f1 += "<"+"table cellspacing=\"0\" cellpadding=\"0\" style=\"border-style: solid; border-width: 1px; border-color: #000000\">\n";
MAX_ef2522f1 += "<"+"tr>\n";
MAX_ef2522f1 += "<"+"td bgcolor=\"#FFFFFF\" align=\"right\" style=\"padding: 2px\"><"+"a href=\"javascript:MAX_simplepop_ef2522f1(\'close\');\" style=\"color:black;text-decoration:none;font-family:arail,sans-serif\"><"+"span>X关闭<"+"/span><"+"/a><"+"/td>\n";
MAX_ef2522f1 += "<"+"/tr>\n";
MAX_ef2522f1 += "<"+"tr>\n";
MAX_ef2522f1 += "<"+"td  bgcolor=\"#FFFFFF\" align=\"center\">\n";
MAX_ef2522f1 += "<"+"table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n";
MAX_ef2522f1 += "<"+"tr>\n";
MAX_ef2522f1 += "<"+"td width=\"950\" height=\"580\" align=\"center\" valign=\"middle\" style=\"padding: 2px\"><"+"a href=\'https://gg.eefocus.com/www/delivery/ck.php?oaparams=2__bannerid=12588__zoneid=478__cb=e808c85e38__oadest=%2F%2Fanalytics.supplyframe.cn%2Ftrackingservlet%2Ftrack%2F%3Faction%3DadClick_eefocus%26value2%3D12588%26value3%3D168%26zone%3D478%26extra%3Dh_crc%3D2625360942%7Csrv%3Dvm-gg-2%7Cox_v%3D2.8%7Ch_value%3D0aeca8d9285b75fe1560216296%7Cgeo%3DCN%26zone%3D478%26url%3Dhttps%253A%252F%252Fwww.moore8.com%252Fcourses%252F2720\' target=\'_blank\'><"+"img src=\'https://gg.eefocus.com/www/delivery/ai.php?filename=tim图片20190610154659.jpg&amp;contenttype=jpeg\' width=\'950\' height=\'580\' alt=\'\' title=\'\' border=\'0\' /><"+"/a><"+"div id=\'beacon_e808c85e38\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'><"+"img src=\'https://gg.eefocus.com/www/delivery/lg.php?bannerid=12588&amp;campaignid=3391&amp;zoneid=478&amp;OAZBLOCK=14400&amp;OASZCAP=1&amp;loc=https%3A%2F%2Fwww.cirmall.com%2Farticles%2F215588&amp;cb=e808c85e38\' width=\'0\' height=\'0\' alt=\'\' style=\'width: 0px; height: 0px;\' /><"+"/div><"+"img src=\'//analytics.supplyframe.cn/trackingservlet/impression/?action=adImpression_eefocus&amp;value2=12588&amp;value3=168&amp;extra=query={term_enc}|h_crc=2625360942|srv=vm-gg-2|ox_v=2.8|h_value=0aeca8d9285b75fe1560216296|geo=CN&amp;zone=478\' width=\'0\' height=\'0\' alt=\'\' style=\'display:none\' /><"+"/td>\n";
MAX_ef2522f1 += "<"+"/tr>\n";
MAX_ef2522f1 += "<"+"/table>\n";
MAX_ef2522f1 += "<"+"/td>\n";
MAX_ef2522f1 += "<"+"/tr>\n";
MAX_ef2522f1 += "<"+"/table>\n";
MAX_ef2522f1 += "<"+"/div>\n";
document.write(MAX_ef2522f1);

function MAX_findObj(n, d) {
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
  d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i>d.layers.length;i++) x=MAX_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MAX_getClientSize() {
	if (window.innerHeight >= 0) {
		return [window.innerWidth, window.innerHeight];
	} else if (document.documentElement && document.documentElement.clientWidth > 0) {
		return [document.documentElement.clientWidth,document.documentElement.clientHeight]
	} else if (document.body.clientHeight > 0) {
		return [document.body.clientWidth,document.body.clientHeight]
	} else {
		return [0, 0]
	}
}

function MAX_adlayers_place_ef2522f1()
{
	var c = MAX_findObj('MAX_ef2522f1');

	if (!c)
		return false;

	_s='style'

	var clientSize = MAX_getClientSize()
	ih = clientSize[1]
	iw = clientSize[0]

	if(document.all && !window.opera)
	{
		sl = document.body.scrollLeft || document.documentElement.scrollLeft;
		st = document.body.scrollTop || document.documentElement.scrollTop;
		of = 0;
	}
	else
	{
		sl = window.pageXOffset;
		st = window.pageYOffset;

		if (window.opera)
			of = 0;
		else
			of = 16;
	}

		 c[_s].left = parseInt(sl+(iw - 956) / 2 +0) + (window.opera?'':'px');
		 c[_s].top = parseInt(st+(ih - 597) / 2 +0) + (window.opera?'':'px');

	c[_s].visibility = MAX_adlayers_visible_ef2522f1;
    c[_s].display = MAX_adlayers_display_ef2522f1;
    if (MAX_adlayers_display_ef2522f1 == 'none') {
        c.innerHTML = '&nbsp;';
    }
}


function MAX_simplepop_ef2522f1(what)
{
	var c = MAX_findObj('MAX_ef2522f1');

	if (!c)
		return false;

	if (c.style)
		c = c.style;

	switch(what)
	{
		case 'close':
			MAX_adlayers_visible_ef2522f1 = 'hidden';
            MAX_adlayers_display_ef2522f1 = 'none';
			MAX_adlayers_place_ef2522f1();
			window.clearInterval(MAX_adlayers_timerid_ef2522f1);
			break;

		case 'open':
			MAX_adlayers_visible_ef2522f1 = 'visible';
            MAX_adlayers_display_ef2522f1 = 'block';
			MAX_adlayers_place_ef2522f1();
			MAX_adlayers_timerid_ef2522f1 = window.setInterval('MAX_adlayers_place_ef2522f1()', 10);

			return window.setTimeout('MAX_simplepop_ef2522f1(\'close\')', 13000);
			break;
	}
}


var MAX_adlayers_timerid_ef2522f1;
var MAX_adlayers_visible_ef2522f1;
var MAX_adlayers_display_ef2522f1;


MAX_simplepop_ef2522f1('open');
