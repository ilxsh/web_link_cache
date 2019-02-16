(function (n) { typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery) })(function (n) { function i(n) { return t.raw ? n : encodeURIComponent(n) } function f(n) { return t.raw ? n : decodeURIComponent(n) } function e(n) { return i(t.json ? JSON.stringify(n) : String(n)) } function o(n) { n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n } catch (i) { } } function r(i, r) { var u = t.raw ? i : o(i); return n.isFunction(r) ? r(u) : u } var u = /\+/g, t = n.cookie = function (u, o, s) { var y, a, h, v, c, p; if (arguments.length > 1 && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join(""); for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) { var w = v[c].split("="), b = f(w.shift()), l = w.join("="); if (u && u === b) { h = r(l, o); break } u || (l = r(l)) === undefined || (h[b] = l) } return h }; t.defaults = {}; n.removeCookie = function (t, i) { return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, { expires: -1 })), !n.cookie(t)) } });
var my_return_url = window.location.href;
function ShowLoginDia()
{
var o_html="";
o_html=o_html+"  <form style=\"margin:0px;\" name=\"mydrivers_Login\" id=\"mydrivers_Login\" target=\"_self\" method=\"post\">";
o_html=o_html+"    <div class=\"pinglun_login_left\">";
o_html=o_html+"      <div class=\"login_qj\">登录快科技(原驱动之家)<\/div>";
o_html=o_html+"      <div class=\"login_name\">";
o_html=o_html+"        <input name=\"username\" id=\"txtUserName\" type=\"text\" class=\"login_name_style\" onFocus=\"this.value=&#39;&#39;;show_loginyzm()\" value=\"请输入用户名\" \/>";
o_html=o_html+"      <\/div>";
o_html=o_html+"      <div class=\"login_name\">";
o_html=o_html+"        <input name=\"password\" id=\"txtPwd\" type=\"password\" class=\"login_name_style\" \/>";
o_html=o_html+"        <span style=\"padding-bottom: 20px;\"><a href=\"\/\/passport.mydrivers.com\/GetPassword.aspx\">忘记密码<\/a><\/span> <\/div>";
o_html=o_html+"      <div class=\"login_name\"> <span id=\"span_loginyzm\" style=\"display:none\">";
o_html=o_html+"        <input type=\"text\" name=\"yzm\" class=\"login_name_style\" style=\"width:50px\">";
o_html=o_html+"        <img height=\"30\" id=\"img_loginyzm\" onClick=\"reload_loginyzm()\" onMouseOver=\"this.style.cursor='pointer'\" onMouseOut=\"this.style.cursor='default'\" title=\"点击刷新验证码\" src=\"\" style=\"cursor: default;\"><\/span> <\/div>";
o_html=o_html+"      <div class=\"login_button\"><img id=\"img_btnlogin\" src=\"\/\/icons.mydrivers.com\/2018\/common\/button_tj.png\" style=\"cursor:pointer;\" width=\"104\" height=\"33\"> <\/div>";
o_html=o_html+"      <div class=\"login_button\">";
o_html=o_html+"        <div class=\"AjaxTipWarning\" id='LoginTip'><\/div>";
o_html=o_html+"      <\/div>";
o_html=o_html+"    <\/div>";
o_html=o_html+"    <div class=\"pinglun_login_right\">";
o_html=o_html+"      <div class=\"pinglun_login_right_close\"><\/div>";
o_html=o_html+"      <div class=\"pinglun_login_right_ljzc\">没有帐号？<a href=\"\/\/passport.mydrivers.com\/reg.htm\">立即注册&gt;&gt;<\/a><\/div>";
o_html=o_html+"      <div class=\"pinglun_login_right_ljzc\" style=\"font-weight: bold;\">用合作网站帐户直接登录<\/div>";
o_html=o_html+"      <div class=\"pinglun_login_right_ljzc\" style=\"margin-top: 30px;\"><a id=\"a_sina\" href=\"javascript:;\"><img src=\"\/\/icons.mydrivers.com\/2018\/common\/weibo.png\" width=\"126\" height=\"24\"><\/a><\/div>";
o_html=o_html+"      <div class=\"pinglun_login_right_ljzc\"><span class=\"pinglun_login_right_ljzc\" style=\"margin-top: 20px;\"><a id=\"a_qq\" href=\"javascript:;\"><img src=\"\/\/icons.mydrivers.com\/2018\/common\/qq.png\" alt=\"\" width=\"124\" height=\"24\"><\/a><\/span><\/div>";
o_html=o_html+"    <\/div>";
o_html=o_html+"  <\/form>";
$("#div_login").html(o_html);
$("#img_btnlogin").click(function () {
        check_login();
    });
    $("#a_sina,#div_sina").click(function () {
        window.location.href = "//passport.mydrivers.com/weibo/sinaweibo.aspx?reurl=" + my_return_url;
        return false;
    });
    $("#a_qq,#div_qq").click(function () {
        window.location.href = "//passport.mydrivers.com/qq/qqlogin.aspx?reurl=" + my_return_url;
        return false;
    });
	}
function ShowFankuiDia()
{
var o_html="";
o_html=o_html+"  <form style=\"margin:0px;\" name=\"mydrivers_Login\" id=\"mydrivers_Fankui\" target=\"_self\" method=\"post\">";
o_html=o_html+"    <div class=\"pinglun_login_left\" style=\"width:450px;height:360px; border:0px;\">";
o_html=o_html+"      <div class=\"login_qj\" style=\"height:35px;\">意见反馈<\/div>";
o_html=o_html+"      <div class=\"login_name\" style=\"height:150px;\">";
o_html=o_html+"        <label style=\"position:absolute;left:60px; top:100px;\" id=\"idPlaceholder\" for=\"fankuicontent\">请输入反馈内容<\/label>";
o_html=o_html+"        <textarea name=\"fankuicontent\" class=\"login_name_style\" style=\"width:435px; height:150px;\" id=\"fankuicontent\" onfocus=\"document.getElementById('idPlaceholder').style.display='none'\"><\/textarea>";
o_html=o_html+"        <input type=\"hidden\" name=\"typeid\" value=\"1\" \/>";
o_html=o_html+"      <\/div>";
o_html=o_html+"       <div class=\"login_name\">";
o_html=o_html+"                    <label style=\"position:absolute;left:60px; top:265px;\" id=\"idPlaceholder2\" for=\"usertel\">请输入您的QQ号<\/label>";
o_html=o_html+"                    <input name=\"usertel\" id=\"usertel\" type=\"text\" class=\"login_name_style\" style=\"width:435px;\" onfocus=\"document.getElementById('idPlaceholder2').style.display='none'\" value=\"\" \/>";
o_html=o_html+"                <\/div>";
o_html=o_html+"                <div class=\"login_name\">";
o_html=o_html+"                    <label style=\"position:absolute;left:60px; top:310px;\" id=\"idPlaceholder3\" for=\"useremal\">请输入您的邮箱地址<\/label>";
o_html=o_html+"                    <input name=\"useremail\" id=\"useremail\" type=\"text\" class=\"login_name_style\" style=\"width:435px;\" onfocus=\"document.getElementById('idPlaceholder3').style.display = 'none'\" value=\"\" \/>";
o_html=o_html+"                <\/div>";
o_html=o_html+"<div class=\"login_name\" style=\"height:150px;line-height:15px;font-size:12px;\">";
o_html=o_html+" <input type=\"file\" name=\"file_upload\" id=\"file_upload\" \/>";
o_html=o_html+"    <input name=\"txtfile\" type=\"hidden\" id=\"txtfile\" \/><input name=\"txttime\" type=\"hidden\" id=\"txttime\" value=\"b04958efa1894e3e92aae0f5995c1d77\" \/>";
o_html=o_html+"<\/div>";
o_html=o_html+"      <div class=\"login_button\"> <img id=\"img_btnfankui\" src=\"\/\/icons.mydrivers.com\/2018\/common\/button_tj.png\" style=\"cursor:pointer;\" width=\"104\" height=\"33\"> <\/div>";
o_html=o_html+"      <div class=\"login_button\">";
o_html=o_html+"        <div class=\"AjaxTipWarning\" id='FankuiTip'><\/div>";
o_html=o_html+"      <\/div>";
o_html=o_html+"    <\/div>";
o_html=o_html+"  <\/form>";
$("#div_fankui").html(o_html);
$("#img_btnfankui").click(function () {
        check_fankui();
    });
	}
        var randstr;
        function Inituploadify() {
       randstr = parseInt(99999 * Math.random());
            $('#txttime').val(randstr);
            $('#file_upload').uploadify({
                'buttonText': '上传截图(不超过3个)',
                'fileTypeDesc': 'gif png jpg jpeg',
                'fileTypeExts': '*.gif; *.png; *.jpg; *.jpeg',
                'swf': '//blog.mydrivers.com/uploadify.swf',
                'folder': 'UploadFile',
                'auto': true,
                'queueSizeLimit': 3,
                'uploadLimit': 3,
                'width': 150,
				'height': 20,
 				'removeCompleted':false,
                'uploader': '//blog.mydrivers.com/uploadmyfile.aspx?type=1&file=' + randstr,
                'onUploadComplete': function (file) {
                    $('#txtfile').val($('#txtfile').val() + '|' + file.name);
                }
            }); 
        }
function InitUser() {
    var username = get_cookie("mydrivers_userid");
    var userid = get_cookie("mydrivers_usernumid");
    if (username != null && username != "") {
	  $("#i_reg").html("");
      $("#i_reg").attr("class","");
      $("#i_login").attr("class","login");
      $("#i_login").html("<a class=\"user\" href=\"\/\/passport.mydrivers.com\/myinfo.aspx\" target=\"_self\"><img src=\"\/\/passport.mydrivers.com\/comments\/getusertouxiang.aspx?uid=" + userid + "&size=small\" width=\"16\" height=\"16\"/>" + decodeURI(username) + "<\/a> <a class=\"exit\" href=\"\/\/passport.mydrivers.com\/logout.aspx?returnurl=" + my_return_url + "\" target=\"_self\">退出<\/a><div id=\"usercommentmessage\"></div>")    
    }
}
function logout()
{
	window.location = "//passport.mydrivers.com/logout.aspx?ReturnUrl=" + my_return_url;
}
function ShowAjaxTip(divobj,ajaxReq,reqClass){
    $("#" + divobj).html('<div style="float: right"><img src="//11.mydrivers.com/comments/images/v20130509/' + reqClass + '.gif" style="margin: 7px 7px;cursor:pointer;" onclick="HideAxajTip(this);"></div><div>' + ajaxReq + '<div>').removeAttr("class").addClass(reqClass).show();
}
function HideAxajTip(myobj){
	myobj.parentNode.parentNode.style.display='none';
}
function check_login()
{ 
    if ($("#txtUserName").val() == "")
    {
        ShowAjaxTip("LoginTip", "请填写用户名！", "AjaxTipWarning")
		$("#txtUserName").focus();
		return false;
    }
    if ($("#txtPwd").val() == "") {
        ShowAjaxTip("LoginTip", "请填写密码！", "AjaxTipWarning")
        $("#txtPwd").focus();
        return false;
    }
    
    $("#mydrivers_Login").attr("action", "//passport.mydrivers.com/comments/check_login_utf8.aspx?ReturnUrl=" + my_return_url).submit();
}
function check_fankui()
{ 
    if ($("#fankuicontent").val() == "")
    {
        ShowAjaxTip("FankuiTip", "请输入反馈内容！", "AjaxTipWarning")
		$("#fankuicontent").focus();
		return false;
    } 
    $("#mydrivers_Fankui").attr("action", "//dt.mydrivers.com/userfankuiv2.aspx").submit();
}
function get_cookie(varname)
{
	var tmp_ary = new Array();
	if (varname)
	{
		var a = document.cookie.indexOf(varname+"=");
		if (a != -1)
		{
			var b = document.cookie.substring((a+varname.length+1),document.cookie.length);
			var c = b.split(";");
			var d = c[0];
			return d;
		}
	}
}
function ShowLogin() {
	ShowLoginDia();
    $.dialog({
        title: "登录",
        padding: 0,
        lock: false,
        content: document.getElementById('div_login'),
        id: 'div_login_ididid'
    });
}
function ShowFankui() {
	ShowFankuiDia();
    $.dialog({
        title: "意见反馈",
        padding: 0,
        lock: false,
        content: document.getElementById('div_fankui'),
        id: 'div_fankui_ididid'
    });
}
function setCookieDig(cookieName,value){
	var time = new Date();
	time.setTime(time.getTime() + 30*60*1000);//30分钟
	document.cookie=cookieName+"="+escape(value)+";expires="+time.toGMTString()  + ";domain=mydrivers.com;path=/";
}
function getCookieDig(cookieName){
   var cookieString = document.cookie;
   var start = cookieString.indexOf(cookieName+"=");
	if (start ==-1) return null;
	start+=cookieName.length+1;
	var end = cookieString.indexOf(';', start);
	if (end == -1) return unescape(cookieString.substring(start));
	else return unescape(cookieString.substring(start, end));
}
function setCookie_dc(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
function getCookie_dc(name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null)
        return unescape(arr[2]);
    return null;
}
(function () {
	 InitUser();
    $("#a_login").click(function () {
        ShowLogin();
    });
	 $("#a_fankui").click(function () {
        ShowFankui();
    });
	$("#mydrivers_wx").hover(function() {
		$("#mydrivers_wx_dia").show();
	},
	function() {
		$("#mydrivers_wx_dia").hide();
	});
})();
 function reload_loginyzm() 
 {
     $("#img_loginyzm").show().attr("src", "//passport.mydrivers.com/modules/yanzhengma.aspx?" + Math.random());
 }
 function show_loginyzm() {
     $("#span_loginyzm").show();
      reload_loginyzm();
}
$("img.lazy").lazyload({effect : "fadeIn"});