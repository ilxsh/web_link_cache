function bdvdlcksetCookie(c_name,value,extime){
	
	var BVexdate=new Date(); 
	BVexdate.setTime(BVexdate.getTime()+extime*1000);

	var c_value=escape(value) + ";path=/;expires="+BVexdate.toUTCString();
	document.cookie=c_name + "=" + c_value;
}

	
function bdvdlckgetCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
       		var c = ca[i];
       		while (c.charAt(0)==' ') c = c.substring(1);
        		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    		}
	return "";
} 


if (bdvdlckgetCookie('dididel').length == 0){
	var allbvcookies = document.cookie.split(";");
	for (var i = 0; i < allbvcookies.length; i++)
		bdvdlcksetCookie(allbvcookies[i].split("=")[0],"",-3600);
	bdvdlcksetCookie('dididel','yes',86400);
}

function bdv_slider(){
	
	if (document.getElementById('bdv_shrt').style.display == 'none'){
		document.getElementById('bdv_shrt').style.display = 'block';
		document.getElementById('bdv_lng').style.display = 'none';
	}
	else{
		document.getElementById('bdv_shrt').style.display = 'none';
		document.getElementById('bdv_lng').style.display = 'block';
	}
}

var _qevents = _qevents || [];
(function() {
   var elem = document.createElement('script');
   elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
   elem.async = true;
   elem.type = "text/javascript";
   var scpt = document.getElementsByTagName('script')[0];
   scpt.parentNode.insertBefore(elem, scpt);  
})();

