var UA = navigator.userAgent.toLowerCase();
var isIE = (document.all && window.ActiveXObject && !window.opera) ? true : false;
var isChrome = navigator.userAgent.indexOf('Chrome') != -1;
var isGecko = navigator.userAgent.indexOf('WebKit') != -1;
var DMURL = document.location.protocol+'//'+location.hostname+(location.port ? ':'+location.port : '')+'/';
var AJPath = (XZGPath.indexOf('://') == -1 ? XZGPath : (XZGPath.indexOf(DMURL) == -1 ? DMURL : XZGPath))+'ajax.php';
var imgLoader = new Image();
imgLoader.src = XZGPath + 'data/image/loading.gif';
if(isIE) try {document.execCommand("BackgroundImageCache", false, true);} catch(e) {}
function Go(url){ window.location.href = url; }
function confirmURL(m, f){if(confirm(m)) Go(f);}
function Dmsg(str, i, s, t){
	var t = t ? t : 5000; var s = s ? true : false;
	try{if(s){window.scrollTo(0,0);}$('#x'+i).html(' <img src="'+SKPath+'image/check_error.gif" width="12" height="12" align="absmiddle" /> '+str+sound('tip')); $('#'+i).focus();}catch(e){}
	window.setTimeout(function(){$('#x'+i).html('');}, t);
}
function ext(v) {return v.substring(v.lastIndexOf('.')+1, v.length);}
function lang(s, a) {for(var i = 0; i < a.length; i++) {s = s.replace('{V'+i+'}', a[i]);} return s;}
function FCKLen(i) {
	var i = i ? i : 'content';
	var o = FCKeditorAPI.GetInstance(i);
	var d = o.EditorDocument;
	var l ;
	if(document.all) {
		l = d.body.innerText.length;
	} else {
		var r = d.createRange(); r.selectNodeContents(d.body); l = r.toString().length;
	}
	return l;
}
function FCKXHTML(i) {
	var i = i ? i : 'content';
	return FCKeditorAPI.GetInstance(i).GetXHTML(true);
}
function isImg(i, e){
	var v = $('#'+i).val();
	if(v == ''){ confirm(L['choose_file']); return false; }
	var t = ext(v);
	t = t.toLowerCase();
	var a = typeof e == 'undefined' ? 'jpg|gif|png|jpeg|bmp' : e;
	if(a.length > 2 && a.indexOf(t) == -1) {confirm(L['allow']+a); return false;}
	return true;
}
function set_cookie(n, v, d) {
	var e = ''; 
	var f = d ? d : 365;
	e = new Date((new Date()).getTime() + f * 86400000);
	e = "; expires=" + e.toGMTString();
	document.cookie = CKPrex + n + "=" + v + ((CKPath == "") ? "" : ("; path=" + CKPath)) + ((CKDomain =="") ? "" : ("; domain=" + CKDomain)) + e; 
}
function get_cookie(n) {
	var v = ''; var s = CKPrex + n + "=";
	if(document.cookie.length > 0) {
		o = document.cookie.indexOf(s);
		if(o != -1) {	
			o += s.length;
			end = document.cookie.indexOf(";", o);
			if(end == -1) end = document.cookie.length;
			v = unescape(document.cookie.substring(o, end));
		}
	}
	return v;
}
function del_cookie(n) {var e = new Date((new Date()).getTime() - 1 ); e = "; expires=" + e.toGMTString(); document.cookie = CKPrex + n + "=" + escape("") +";path=/"+ e;}
function substr_count(str, exp) {if(str == '') return 0;var s = str.split(exp);return s.length-1;}
function RandStr(){
	var chars = "abcdefhjmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWYXZ";
	var str = '';
	for(var i = 0; i < 18; i++){
		str += chars.charAt(Math.floor( Math.random()*chars.length));
	}
	return str;
}
function showmsg(m, t){
	var t = t ? t : 5000; var s = m.indexOf(L['str_delete']) != -1 ? 'delete' : 'ok';
	try{$('#msgbox').show().html(m+sound(s));window.setTimeout('closemsg();', t);}catch(e){}
}
function closemsg(){ try{ $('#msgbox').html('').hide(); }catch(e){} }
function is_captcha(v){
	if(v == L['str_captcha']) return false;
	if(v.match(/^[a-f0-9]{1,}$/)){
		return v.match(/^[a-f0-9]{4,}$/);
	}else{
		return v.length > 1;
	}
}
function sound(f) {return '<div style="float:left;"><embed src="'+XZGPath+'data/flash/'+f+'.swf" quality="high" type="application/x-shockwave-flash" height="0" width="0" hidden="true"/></div>';}
function confirmURI(m,f) {if(confirm(m)) Go(f);}
function checkall(f, o, t){
	var t = t ? t : 1;
	$('#'+f+' input:checkbox').each(function(i){
		if($(this).attr('type') == 'checkbox'){
			if(t == 1){ $(this).attr('checked', $(this).attr('checked') ? false : true); }
			if(t == 2){ $(this).attr('checked', true); }
			if(t == 3){ $(this).attr('checked', false); }
		}
	});
	o.attr('checked', false);
}
function select_op(i, v) {
	var o = document.getElementById(i);
	for(var i=0; i<o.options.length; i++) {if(o.options[i].value == v) {o.options[i].selected=true;break;}}
}
function removeHTMLTag(str) {
	str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
	str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
	str = str.replace(/\n[\s| | ]*\r/g, '\n'); //去除多余空行
	str=str.replace(/&nbsp;/ig, '');//去掉&nbsp;
	return str;
}
function Eh(t) {
	var t = t ? t : 'select';
	if(isIE) {
		var arVersion = navigator.appVersion.split("MSIE"); var IEversion = parseFloat(arVersion[1]);		
		if(IEversion >= 7 || IEversion < 5) return;
		var ss = document.body.getElementsByTagName(t);					
		for(var i=0;i<ss.length;i++) {ss[i].style.visibility = 'hidden';}
	}
}
function Es(t) {
	var t = t ? t : 'select';
	if(isIE) {
		var arVersion = navigator.appVersion.split("MSIE"); var IEversion = parseFloat(arVersion[1]);		
		if(IEversion >= 7 || IEversion < 5) return;
		var ss = document.body.getElementsByTagName(t);					
		for(var i=0;i<ss.length;i++) {ss[i].style.visibility = 'visible';}
	}
}
// window.setInterval(func,time,param);
var _setInterval = setInterval;
window.setInterval = function(callback, timeout, param){
	var args = Array.prototype.slice.call(arguments, 2);
	var _cb = function(){ callback.apply(null,args); }
	return _setInterval(_cb, timeout);
}