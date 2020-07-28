function $(id) {
	return document.getElementById(id);
}
function $name(name) {
	return document.getElementsByName(name);
}
function newhua(data, id, icon) {

	if(!data || !id) return false;
	icon = "<center>Loading...</center>";

	var o = new Object();

	o.createXMLHttpRequest = function() {
		var h = false;
		if(window.XMLHttpRequest) {
			h = new XMLHttpRequest();
			if(h.overrideMimeType) {
				h.overrideMimeType("text/xml");
			}
			return h;
		} else if(window.ActiveXObject) {
			var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
			for(var i = 0; i < versions.length; i++) {
				try {
					h = new ActiveXObject(versions[i]);
					if(h) {
						return h;
					}
				} catch(e) {
				}
			}
		}
	}



	o.a = o.createXMLHttpRequest();
	o.a.open("POST", "./ajax_top_1.4.php", true);


	o.a.onreadystatechange = function() {
		if(o.a.readyState == 1) {
			document.getElementById(id).innerHTML = icon;
		}
		if(o.a.readyState == 4) {
			if(o.a.status == 200) {
                var text = o.a.responseText;
                var json = eval( "(" + text + ")" );
		document.getElementById(id).innerHTML = json.backstr;
		alert(json.msg);
			} else {
				document.getElementById(id).innerHTML = '<font color="red">通信失败，请重试！</font>';
			}
		}
	}
	o.a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");	// POST 方法
	o.a.send(data);
}

//读写cookie函数开始
function GetCookie(c_name)
{
	if (document.cookie.length > 0)
	{
		c_start = document.cookie.indexOf(c_name + "=")
		if (c_start != -1)
		{
			c_start = c_start + c_name.length + 1;
			c_end   = document.cookie.indexOf(";",c_start);
			if (c_end == -1)
			{
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start,c_end));
		}
	}
	return null
}

function SetCookie(c_name,value,expiredays)
{
	var exdate = new Date();
	exdate.setTime(exdate.getTime()+expiredays*3600*1000);
	document.cookie = c_name + "=" +escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()); //使设置的有效时间正确。增加toGMTString()
}
//读写cookie函数结束
