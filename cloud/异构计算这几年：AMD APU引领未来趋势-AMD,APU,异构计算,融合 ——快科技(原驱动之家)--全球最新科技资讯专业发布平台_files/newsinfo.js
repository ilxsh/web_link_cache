document.domain = "mydrivers.com";
var my_return_url = window.location.href;
var winH = $(window).height(); //页面可视区域高度 
var pageid = 2; //设置当前页数 
var typeid = 1;
var isdeal = 0;
function GetNewsListAppend(){
 var urlpost = "//blog.mydrivers.com/news/getdatalist.aspx?minid=" + minid;
	 $.ajax({
        url: urlpost,
        dataType: "jsonp",
        jsonpCallback: "NewsList",
        success: function (data) {
            //var NewsCount = data.Table_AllCount[0].CountNums;
            minid = data.Table_minid[0].minid;
            var result = TrimPath.processDOMTemplate("_mycomments_", data);
            var myTemplateObj = TrimPath.parseDOMTemplate("_mycomments_");
            var result = myTemplateObj.process(data);
            $("#newsleft").append(result);
        }
    });
}
$(function () {

    $(document).bind("click", function (e) {
        var target = $(e.target);
        if (target.closest("#i_xz_bt").length == 0 && target.closest("#i_xz_dia").length == 0) {
            $("#i_xz_dia").hide();
            $("#i_xz_bt").attr("class", "right_install");
        }
    })

   
    $("#i_xz_bt").click(function () {
        $("#i_xz_bt").attr("class", "right_install_cur");
        $("#i_xz_dia").show();
    });
    $(".save_button").click(function () {
        saveMyClass();
        $("#i_xz_bt").attr("class", "right_install");
        $("#i_xz_dia").hide();
    });
    $("#i_xz_class li").click(function () {
        if ($(this).attr("class") == null || $(this).attr("class") == "") {
            $(this).addClass("select");
        } else {
            $(this).removeClass("select");
        }
    });
        
});

var minid = 0;

function check_login_comments() {
    if ($("#txtUserNameComments").val() == "") {
        ShowAjaxTip("CommentsTip", "请填写用户名！", "AjaxTipWarning")
        $("#txtUserNameComments").focus();
        return false;
    }
    if ($("#txtPwdComments").val() == "") {
        ShowAjaxTip("CommentsTip", "请填写密码！", "AjaxTipWarning")
        $("#txtPwdComments").focus();
        return false;
    }

    $("#mydrivers_LoginComments").attr("action", "http://passport.mydrivers.com/comments/check_login.aspx?ReturnUrl=" + my_return_url).submit();
}

function StringBuffer()//使用构造函数
{
    this._strings_ = new Array;
}

StringBuffer.prototype.append = function (str)//使用原型定义函数属性
{
    this._strings_.push(str);
}

StringBuffer.prototype.toString = function ()//使用原型定义函数属性
{
    return this._strings_.join("");
}

function getPager(currentpage, recordcount) {
    var pagecount = 0;
    var sb = new StringBuffer();
    var retval = "";
    var showpage = 5;//每个页面上展示多少个页码
    var pagesize = 20;

    if (recordcount % pagesize != 0)
        pagecount = parseInt(recordcount / pagesize) + 1;
    else
        pagecount = parseInt(recordcount / pagesize);

    if (currentpage < 1)
        currentpage = 1;
    if (pagecount < 1)
        pagecount = 1;
    if (currentpage > pagecount)
        currentpage = pagecount;

    var prevpage = currentpage - 1;
    var nextpage = currentpage + 1;

    if (prevpage < 1) {
        sb.append(" <a>首页</a>");
        sb.append(" <a>上一页</a>");
    }
    else {
        sb.append(" <a target=\"_self\" href=\"javascript:GetNewsList(1)\">首页</a>");
        sb.append(" <a target=\"_self\" href=\"javascript:GetNewsList(" + prevpage + ")\">上一页</a>");
    }

    var startpage;
    if (currentpage % showpage == 0) {
        startpage = currentpage - (showpage - 1);
    }
    else {
        startpage = currentpage - parseInt(currentpage % showpage) + 1;
    }

    if (startpage > showpage)
        sb.append("<a target=\"_self\" href=\"javascript:GetNewsList(" + (startpage - 1) + ")\">...</a>");

    for (var i = startpage; i < startpage + showpage; i++) {
        if (i > pagecount)
            break;
        if (i == currentpage)
            sb.append(" <a style=\"background:#347dcb; color:#FFF;\" title=\"Page " + i + "\">" + i + "</a>");
        else
            sb.append(" <a target=\"_self\" href=\"javascript:GetNewsList(" + i + ")\">" + i + "</a>");
    }

    if (pagecount >= currentpage + showpage)
        sb.append("<a target=\"_self\" href=\"javascript:GetNewsList(" + (startpage + showpage) + ")\">...</a>");

    if (nextpage > pagecount) {
        sb.append(" <a>下一页</a>");
        sb.append(" <a>尾页</a>");
    }
    else {
        sb.append(" <a target=\"_self\" href=\"javascript:GetNewsList(" + nextpage + ")\">下一页</a>");
        sb.append(" <a target=\"_self\" href=\"javascript:GetNewsList(" + pagecount + ")\">尾页</a>");
    }
    retval = sb.toString();
    if (pagecount > 1) {
        $(".postpage").html(retval);
        $(".postpage").show();
    }
}

function change_cvote(Tid, typeid) {
    var cookieName = "doc_" + Tid;
    if (!getCookieDig(cookieName)) {
        setCookieDig(cookieName, Tid);
        var url = "http://dt.mydrivers.com/CommentsVoteForJsonp.aspx";
        url += "?Tid=" + Tid + "&tag=1&type=" + typeid + "&callback=?";
        $.ajax({
            url: url,
            dataType: "jsonp",
            jsonpCallback: "NewsVote",
            success: function (data) {
                if (typeid == "0") {
                    $('#news_opp_' + Tid).html(parseInt($('#news_opp_' + Tid).text()) + 1)
                    $("#news_opp_" + Tid).css("position", "relative").append($("<div>", {
                        css: {
                            font: "600 30px/34px '黑体'",
                            color: "#c00",
                            position: "absolute",
                            display: "none",
                            top: 0,
                            left: 10
                        },
                        text: "+1"
                    })).find("> div").css("display", "block").animate({ top: [-50, "swing"] }, 300, function () { $(this).fadeOut(300) });


                } else {
                    $('#news_support_' + Tid).html(parseInt($('#news_support_' + Tid).text()) + 1);
                    $("#news_support_" + Tid).css("position", "relative").append($("<div>", {
                        css: {
                            font: "600 30px/34px '黑体'",
                            color: "#c00",
                            position: "absolute",
                            display: "none",
                            top: 0,
                            left: 10
                        },
                        text: "+1"
                    })).find("> div").css("display", "block").animate({ top: [-50, "swing"] }, 300, function () { $(this).fadeOut(300) });

                }
            }
        });

    } else {//已经投过票
        alert('您已投过票！');
        return;
    }
}

//改变当前的投票数
function change_vote(Tid, typeid) {
    var cookieName = "doc_" + Tid;
    if (!getCookieDig(cookieName)) {
        setCookieDig(cookieName, Tid);
        var urlpost = "http://dt.mydrivers.com/NewsVoteForJsonp.aspx";
        urlpost += "?Tid=" + Tid + "&tag=1&type=" + typeid + "&callback=?";
        $.ajax({
            url: urlpost,
            dataType: "jsonp",
            jsonpCallback: "NewsVote",
            success: function (data) {
                var s = data.NewsSupport;
                $("#news_support_" + Tid).html(s);
                $("#news_support_" + Tid).css("position", "relative").append($("<div>", {
                    css: {
                        font: "600 30px/34px '黑体'",
                        color: "#c00",
                        position: "absolute",
                        display: "none",
                        top: 0,
                        left: 10
                    },
                    text: "+1"
                })).find("> div").css("display", "block").animate({ top: [-50, "swing"] }, 300, function () { $(this).fadeOut(300) });
            }
        });
    } else {//已经投过票
        alert('您已投过票！');
        return;
    }
}
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
    (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}

//显示隐藏
function i_showset() {
    $(".product_small").show();
}
$(function () {
    $(document).bind("click", function (e) {
        var target = $(e.target);
        if (target.closest(".product_small").length == 0) {
            $(".product_small").hide();

        }
    })
})
function news_PaiHang(tabname) {
	$("#i_yuedu_tab,#i_pinglun_tab").attr("class","");
	$("#i_"+tabname+"_tab").attr("class", "cur");
	$("#i_yuedu_content,#i_pinglun_content").hide();
	$("#i_"+tabname+"_content").show();
}
function mhotnewstabit(id)
{
    if(id==1)
   {
        $("#remenpinglumonth").removeClass("pingluhover");
        $("#remenpingluweek").addClass("pingluhover");
        $("#hotday7").show();
        $("#hotday30").hide();
   } 
   else if(id==2)
   {
        $("#remenpinglumonth").addClass("pingluhover");
        $("#remenpingluweek").removeClass("pingluhover");
        $("#hotday7").hide();
        $("#hotday30").show();
   }
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
function MTiaoZhuan(tid)
{
	var ua = window.navigator.userAgent;
	var s_ref;
	try{
		s_ref=escape(document.referrer);
		}
	catch(ex)
	{}
	var href = "//m.mydrivers.com/newsview/"+tid+".html?ref="+s_ref;
	var config = ['iPad','Android','iPhone','iPod','MI PAD'];
	var isPc = true;
	for(var i=0; i<config.length;i++){
		if(ua.indexOf(config[i]) !== -1){
			isPc = false;
			break;
		}
	}
	if(isPc===false && getParameterByName("fr")!="m"){
		window.location.href = href;
	}	
}
function news_df(Score,TagID)
         {
            var Tid=$("#news_tid").val();
			var news_df_tid = getCookieDig("news_df_"+Tid);
           	if(Score<2)//用户登录
             {
			   if (news_df_tid != null && news_df_tid!="")
          	    {  
						  alert('已评分，不能重复评分，谢谢！');
						  return;
			  	}	   
             }
             $.ajax({
                    url:"//dt.mydrivers.com/action/newsscoreoption.aspx?newsscore="+Score+"&tid="+Tid+"&uid="+get_cookie("mydrivers_usernumid")+"&ukey="+get_cookie("mydrivers_userkey")+"&callback=?",
                    dataType:"jsonp",
                    jsonpCallback:"News_DF",
                    success:function(data)
                    {
                        $("#news_df_score").html(parseInt(data.allscore));
                        $("#news_df_peoplenum").html(parseInt(data.allnum));
                        if(Score<2)
                        {
                        	setCookieDig("news_df_"+Tid,"df_option_"+TagID);
							 $("#df_option_"+TagID).attr("class","dafencur");
							switch(TagID)
								{
									case 1:
										$("#df_option_"+TagID).html("有价值<p>+3分</p>");
										
										break; 
									case 0:
										$("#df_option_"+TagID).html("一般般<p>+1分</p>");
										break; 
									case 2:
										$("#df_option_"+TagID).html("没价值<p>-1分</p>");
										break; 
								}
                        }
                    }
               });

          if (news_df_tid != null && news_df_tid!="")
          {
            $("#"+news_df_tid).attr("class","dafencur");
            var my_index=news_df_tid.replace("df_option_","");
            switch(my_index)
            {
                case "1":
                    $("#"+news_df_tid).html("有价值<p>+3分</p>");
					
                    break; 
                case "0":
                    $("#"+news_df_tid).html("一般般<p>+1分</p>");
                    break; 
                case "2":
                    $("#"+news_df_tid).html("没价值<p>-1分</p>");
                    break; 
            }
          }
         }
		 
		 
function showding(showdingurl,type){
  $.ajax({
        url:showdingurl,   
        dataType:"jsonp",
        jsonpCallback:"NewsVote",
        success:function(data){
				var s = data.NewsSupport;
				var o = data.NewsOppose;



   if (1 == type) 
	{
       $("#good_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number\">"+(parseInt(s)+1)+"</div>");
        $("#bad_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number1\">"+o+"</div>");
	}
	else if (0 == type) 
		{
		$("#bad_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number1\">"+s+"</div>");
        $("#good_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number\">"+(parseInt(o)+1)+"</div>");
	}else
	{
		
		}
     }
   });
}
function change_ding(type){
    var Tid=$("#news_tid").val();
	var cookieName = "ding_"+Tid;
	var change_dingurl ="//dt.mydrivers.com/NewsVoteForJsonp.aspx";
 	change_dingurl+="?Tid="+Tid+"&tag=1&type="+type+"&callback=?";
 	 $.ajax({
        url:change_dingurl,   
        dataType:"jsonp",
        jsonpCallback:"NewsVote",
        success:function(data){
				var s = data.NewsSupport;
				var o = data.NewsOppose;
   if (1 == type) 
	{
	   setCookieDig(cookieName,"good");
       $("#good_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number\">"+(parseInt(s)+1)+"</div>");
        $("#bad_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number1\">"+o+"</div>");
	}
	else if (0 == type) 
		{
		setCookieDig(cookieName,"bad");
		$("#bad_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number1\">"+(parseInt(o)+1)+"</div>");
        $("#good_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number\">"+s+"</div>");
	}
     }
   });
 }
 function init_ding()
 {
    var Tid=$("#news_tid").val();
	var cookieName = "ding_"+Tid;
	var change_dingurl ="//dt.mydrivers.com/NewsVoteForJsonp.aspx";
 	change_dingurl+="?Tid="+Tid+"&tag=0&type=0&callback=?";
	 $.ajax({
        url:change_dingurl,   
        dataType:"jsonp",
        jsonpCallback:"NewsVote",
        success:function(data){
				var s = data.NewsSupport;
				var o = data.NewsOppose;
			if (!getCookieDig(cookieName))//无cookie
			{
				 $("#good_id").html("<a href=\"javascript:change_ding(1)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number1\">"+s+"</div>");
        $("#bad_id").html("<a href=\"javascript:change_ding(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number1\">"+o+"</div>");
			}else
			{
				 if(getCookieDig(cookieName)=="good")
				 {
					  $("#good_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number\">"+s+"</div>");
				 
                $("#bad_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number1\">"+o+"</div>");
				}else
					 {
						 $("#good_id").html("<a href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"good_id_num\" class=\"number1\">"+s+"</div>");
				 
                         $("#bad_id").html("<a class=\"cur\" href=\"javascript:void(0)\" target=\"_self\"></a><div id=\"bad_id_num\" class=\"number\">"+o+"</div>"); 
					}
				
			}	
   }
   });
 }
 $(function () {
init_ding();
news_df(2,0);})
  var BROWSER = {};
var USERAGENT = navigator.userAgent.toLowerCase();
browserVersion({'ie':'msie','firefox':'','chrome':'','opera':'','safari':'','mozilla':'','webkit':'','maxthon':'','qq':'qqbrowser'});
var JSMENU = [];
JSMENU['active'] = [];
JSMENU['timer'] = [];
JSMENU['drag'] = [];
JSMENU['layer'] = 0;
JSMENU['zIndex'] = {'win':200,'menu':300,'dialog':400,'prompt':500};
JSMENU['float'] = '';
function browserVersion(types) {
	var other = 1;
	for(i in types) {
		var v = types[i] ? types[i] : i;
		if(USERAGENT.indexOf(v) != -1) {
			var re = new RegExp(v + '(\\/|\\s)([\\d\\.]+)', 'ig');
			var matches = re.exec(USERAGENT);
			var ver = matches != null ? matches[2] : 0;
			other = ver !== 0 && v != 'mozilla' ? 0 : other;
		}else {
			var ver = 0;
		}
		eval('BROWSER.' + i + '= ver');
	}
	BROWSER.other = other;
}

if(BROWSER.safari) {
	BROWSER.firefox = true;
}
BROWSER.opera = BROWSER.opera ? opera.version() : 0;

HTMLNODE = document.getElementsByTagName('head')[0].parentNode;
if(BROWSER.ie) {
	HTMLNODE.className = 'ie_all ie' + parseInt(BROWSER.ie);
}

function copyNewsUrl() {
	setCopy(document.getElementById('thread_subject').innerHTML + '\n' +  location.href + '', '地址已经复制到剪贴板');
}
function setCopy(text, msg){
	if(BROWSER.ie) {
		clipboardData.setData('Text', text);
		alert('标题和链接已经复制成功，可以粘贴给你的好友了! ');
	} else {
		var msg = '<div class="c"><div style="width: 200px; text-align: center; text-decoration:underline;">点此复制标题和链接</div>' +
		AC_FL_RunContent('id', 'clipboardswf', 'name', 'clipboardswf', 'devicefont', 'false', 'width', '200', 'height', '40', 'src',  '//news.mydrivers.com/images/clipboard.swf', 'menu', 'false',  'allowScriptAccess', 'sameDomain', 'swLiveConnect', 'true', 'wmode', 'transparent', 'style' , 'margin-top:-20px') + '</div>';
		showDialog(msg, 'info');
		text = text.replace(/[\xA0]/g, ' ');
		CLIPBOARDSWFDATA = text;
	}
}
function AC_GetArgs(args, classid, mimeType) {
	var ret = new Object();
	ret.embedAttrs = new Object();
	ret.params = new Object();
	ret.objAttrs = new Object();
	for (var i = 0; i < args.length; i = i + 2){
		var currArg = args[i].toLowerCase();
		switch (currArg){
			case "classid":break;
			case "pluginspage":ret.embedAttrs[args[i]] = '//www.macromedia.com/go/getflashplayer';break;
			case "src":ret.embedAttrs[args[i]] = args[i+1];ret.params["movie"] = args[i+1];break;
			case "codebase":ret.objAttrs[args[i]] = '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0';break;
			case "onafterupdate":case "onbeforeupdate":case "onblur":case "oncellchange":case "onclick":case "ondblclick":case "ondrag":case "ondragend":
			case "ondragenter":case "ondragleave":case "ondragover":case "ondrop":case "onfinish":case "onfocus":case "onhelp":case "onmousedown":
			case "onmouseup":case "onmouseover":case "onmousemove":case "onmouseout":case "onkeypress":case "onkeydown":case "onkeyup":case "onload":
			case "onlosecapture":case "onpropertychange":case "onreadystatechange":case "onrowsdelete":case "onrowenter":case "onrowexit":case "onrowsinserted":case "onstart":
			case "onscroll":case "onbeforeeditfocus":case "onactivate":case "onbeforedeactivate":case "ondeactivate":case "type":
			case "id":ret.objAttrs[args[i]] = args[i+1];break;
			case "width":case "height":case "align":case "vspace": case "hspace":case "class":case "title":case "accesskey":case "name":
			case "tabindex":ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];break;
			default:ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
		}
	}
	ret.objAttrs["classid"] = classid;
	if(mimeType) {
		ret.embedAttrs["type"] = mimeType;
	}
	return ret;
}
function AC_FL_RunContent() {
	var str = '';
	if(AC_DetectFlashVer(9,0,124)) {
		var ret = AC_GetArgs(arguments, "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
		if(BROWSER.ie && !BROWSER.opera) {
			str += '<object ';
			for (var i in ret.objAttrs) {
				str += i + '="' + ret.objAttrs[i] + '" ';
			}
			str += '>';
			for (var i in ret.params) {
				str += '<param name="' + i + '" value="' + ret.params[i] + '" /> ';
			}
			str += '</object>';
		} else {
			str += '<embed ';
			for (var i in ret.embedAttrs) {
				str += i + '="' + ret.embedAttrs[i] + '" ';
			}
			str += '></embed>';
		}
	} else {
		str = '此内容需要 Adobe Flash Player 9.0.124 或更高版本<br /><a href="//www.adobe.com/go/getflashplayer/" target="_blank"><img src="//www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="下载 Flash Player" /></a>';
	}
	return str;
}
function AC_DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
	var versionStr = -1;
	if(navigator.plugins != null && navigator.plugins.length > 0 && (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"])) {
		var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
		var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
		var descArray = flashDescription.split(" ");
		var tempArrayMajor = descArray[2].split(".");
		var versionMajor = tempArrayMajor[0];
		var versionMinor = tempArrayMajor[1];
		var versionRevision = descArray[3];
		if(versionRevision == "") {
			versionRevision = descArray[4];
		}
		if(versionRevision[0] == "d") {
			versionRevision = versionRevision.substring(1);
		} else if(versionRevision[0] == "r") {
			versionRevision = versionRevision.substring(1);
			if(versionRevision.indexOf("d") > 0) {
				versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
			}
		}
		versionStr = versionMajor + "." + versionMinor + "." + versionRevision;
	} else if(BROWSER.ie && !BROWSER.opera) {
		try {
			var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			versionStr = axo.GetVariable("$version");
		} catch (e) {}
	}
	if(versionStr == -1 ) {
		return false;
	} else if(versionStr != 0) {
		if(BROWSER.ie && !BROWSER.opera) {
			tempArray = versionStr.split(" ");
			tempString = tempArray[1];
			versionArray = tempString.split(",");
		} else {
			versionArray = versionStr.split(".");
		}
		var versionMajor = versionArray[0];
		var versionMinor = versionArray[1];
		var versionRevision = versionArray[2];
		return versionMajor > parseFloat(reqMajorVer) || (versionMajor == parseFloat(reqMajorVer)) && (versionMinor > parseFloat(reqMinorVer) || versionMinor == parseFloat(reqMinorVer) && versionRevision >= parseFloat(reqRevision));
	}
}
function isUndefined(variable) {
	return typeof variable == 'undefined' ? true : false;
}
function in_array(needle, haystack) {
	if(typeof needle == 'string' || typeof needle == 'number') {
		for(var i in haystack) {
			if(haystack[i] == needle) {
					return true;
			}
		}
	}
	return false;
}

function trim(str) {
	return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}

function strlen(str) {
	return (BROWSER.ie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

function mb_strlen(str) {
	var len = 0;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
	}
	return len;
}
function showDialog(msg, mode, t, func, cover, funccancel, leftmsg, confirmtxt, canceltxt) {
	cover = isUndefined(cover) ? (mode == 'info' ? 0 : 1) : cover;
	leftmsg = isUndefined(leftmsg) ? '' : leftmsg;
	mode = in_array(mode, ['confirm', 'notice', 'info']) ? mode : 'alert';
	var menuid = 'fwin_dialog';
	var menuObj = document.getElementById(menuid);
	confirmtxt = confirmtxt ? confirmtxt : '确定';
	canceltxt = canceltxt ? canceltxt : '取消';

	if(menuObj) hideMenu('fwin_dialog', 'dialog');
	menuObj = document.createElement('div');
	menuObj.style.display = 'none';
	menuObj.className = 'fwinmask';
	menuObj.id = menuid;
	document.getElementById('append_parent').appendChild(menuObj);
	var s = '<table cellpadding="0" cellspacing="0" class="fwin"><tr><td class="t_l"></td><td class="t_c"></td><td class="t_r"></td></tr><tr><td class="m_l">&nbsp;&nbsp;</td><td class="m_c"><h3 class="flb"><em>';
	s += t ? t : '提示信息';
	s += '</em><span><a href="javascript:;" id="fwin_dialog_close" class="flbc" onclick="hideMenu(\'' + menuid + '\', \'dialog\')" title="关闭">关闭</a></span></h3>';
	if(mode == 'info') {
		s += msg ? msg : '';
	} 
	s += '</td><td class="m_r"></td></tr><tr><td class="b_l"></td><td class="b_c"></td><td class="b_r"></td></tr></table>';
	menuObj.innerHTML = s;
	if(document.getElementById('fwin_dialog_submit')) document.getElementById('fwin_dialog_submit').onclick = function() {
		if(typeof func == 'function') func();
		else eval(func);
		hideMenu(menuid, 'dialog');
	};
	if(document.getElementById('fwin_dialog_cancel')) {
		document.getElementById('fwin_dialog_cancel').onclick = function() {
			if(typeof funccancel == 'function') funccancel();
			else eval(funccancel);
			hideMenu(menuid, 'dialog');
		};
		document.getElementById('fwin_dialog_close').onclick = document.getElementById('fwin_dialog_cancel').onclick;
	}
	showMenu({'mtype':'dialog','menuid':menuid,'duration':3,'pos':'00','zindex':JSMENU['zIndex']['dialog'],'cache':0,'cover':cover});
}
function showMenu(v) {
	var ctrlid = isUndefined(v['ctrlid']) ? v : v['ctrlid'];
	var showid = isUndefined(v['showid']) ? ctrlid : v['showid'];
	var menuid = isUndefined(v['menuid']) ? showid + '_menu' : v['menuid'];
	var ctrlObj = document.getElementById(ctrlid);
	var menuObj = document.getElementById(menuid);
	if(!menuObj) return;
	var mtype = isUndefined(v['mtype']) ? 'menu' : v['mtype'];
	var evt = isUndefined(v['evt']) ? 'mouseover' : v['evt'];
	var pos = isUndefined(v['pos']) ? '43' : v['pos'];
	var layer = isUndefined(v['layer']) ? 1 : v['layer'];
	var duration = isUndefined(v['duration']) ? 2 : v['duration'];
	var timeout = isUndefined(v['timeout']) ? 250 : v['timeout'];
	var maxh = isUndefined(v['maxh']) ? 600 : v['maxh'];
	var cache = isUndefined(v['cache']) ? 1 : v['cache'];
	var drag = isUndefined(v['drag']) ? '' : v['drag'];
	var dragobj = drag && document.getElementById(drag) ? document.getElementById(drag) : menuObj;
	var fade = isUndefined(v['fade']) ? 0 : v['fade'];
	var cover = isUndefined(v['cover']) ? 0 : v['cover'];
	var zindex = isUndefined(v['zindex']) ? JSMENU['zIndex']['menu'] : v['zindex'];
	var winhandlekey = isUndefined(v['win']) ? '' : v['win'];
	zindex = cover ? zindex + 200 : zindex;
	if(typeof JSMENU['active'][layer] == 'undefined') {
		JSMENU['active'][layer] = [];
	}

	if(evt == 'click' && in_array(menuid, JSMENU['active'][layer]) && mtype != 'win') {
		hideMenu(menuid, mtype);
		return;
	}
	if(mtype == 'menu') {
		hideMenu(layer, mtype);
	}

	if(ctrlObj) {
		if(!ctrlObj.initialized) {
			ctrlObj.initialized = true;
			ctrlObj.unselectable = true;

			ctrlObj.outfunc = typeof ctrlObj.onmouseout == 'function' ? ctrlObj.onmouseout : null;
			ctrlObj.onmouseout = function() {
				if(this.outfunc) this.outfunc();
				if(duration < 3 && !JSMENU['timer'][menuid]) JSMENU['timer'][menuid] = setTimeout('hideMenu(\'' + menuid + '\', \'' + mtype + '\')', timeout);
			};

			ctrlObj.overfunc = typeof ctrlObj.onmouseover == 'function' ? ctrlObj.onmouseover : null;
			ctrlObj.onmouseover = function(e) {
				doane(e);
				if(this.overfunc) this.overfunc();
				if(evt == 'click') {
					clearTimeout(JSMENU['timer'][menuid]);
					JSMENU['timer'][menuid] = null;
				} else {
					for(var i in JSMENU['timer']) {
						if(JSMENU['timer'][i]) {
							clearTimeout(JSMENU['timer'][i]);
							JSMENU['timer'][i] = null;
						}
					}
				}
			};
		}
	}

	var dragMenu = function(menuObj, e, op) {
		e = e ? e : window.event;
		if(op == 1) {
			if(in_array(BROWSER.ie ? e.srcElement.tagName : e.target.tagName, ['TEXTAREA', 'INPUT', 'BUTTON', 'SELECT'])) {
				return;
			}
			JSMENU['drag'] = [e.clientX, e.clientY];
			JSMENU['drag'][2] = parseInt(menuObj.style.left);
			JSMENU['drag'][3] = parseInt(menuObj.style.top);
			document.onmousemove = function(e) {try{dragMenu(menuObj, e, 2);}catch(err){}};
			document.onmouseup = function(e) {try{dragMenu(menuObj, e, 3);}catch(err){}};
			doane(e);
		}else if(op == 2 && JSMENU['drag'][0]) {
			var menudragnow = [e.clientX, e.clientY];
			menuObj.style.left = (JSMENU['drag'][2] + menudragnow[0] - JSMENU['drag'][0]) + 'px';
			menuObj.style.top = (JSMENU['drag'][3] + menudragnow[1] - JSMENU['drag'][1]) + 'px';
			doane(e);
		}else if(op == 3) {
			JSMENU['drag'] = [];
			document.onmousemove = null;
			document.onmouseup = null;
		}
	};
	if(!menuObj.initialized) {
		menuObj.initialized = true;
		menuObj.ctrlkey = ctrlid;
		menuObj.mtype = mtype;
		menuObj.layer = layer;
		menuObj.cover = cover;
		if(ctrlObj && ctrlObj.getAttribute('fwin')) {menuObj.scrolly = true;}
		menuObj.style.position = 'absolute';
		menuObj.style.zIndex = zindex + layer;
		menuObj.onclick = function(e) {
			if(!e || BROWSER.ie) {
				window.event.cancelBubble = true;
				return window.event;
			} else {
				e.stopPropagation();
				return e;
			}
		};
		if(duration < 3) {
			if(duration > 1) {
				menuObj.onmouseover = function() {
					clearTimeout(JSMENU['timer'][menuid]);
					JSMENU['timer'][menuid] = null;
				};
			}
			if(duration != 1) {
				menuObj.onmouseout = function() {
					JSMENU['timer'][menuid] = setTimeout('hideMenu(\'' + menuid + '\', \'' + mtype + '\')', timeout);
				};
			}
		}
		if(cover) {
			var coverObj = document.createElement('div');
			coverObj.id = menuid + '_cover';
			coverObj.style.position = 'absolute';
			coverObj.style.zIndex = menuObj.style.zIndex - 1;
			coverObj.style.left = coverObj.style.top = '0px';
			coverObj.style.width = '100%';
			coverObj.style.height = document.body.offsetHeight + 'px';
			coverObj.style.backgroundColor = '#000';
			coverObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=50)';
			coverObj.style.opacity = 0.5;
			document.getElementById('append_parent').appendChild(coverObj);
			_attachEvent(window, 'load', function () {
				coverObj.style.height = document.body.offsetHeight + 'px';
			}, document);
		}
	}
	if(drag) {
		dragobj.style.cursor = 'move';
		dragobj.onmousedown = function(event) {try{dragMenu(menuObj, event, 1);}catch(e){}};
	}
	menuObj.style.display = '';
	if(cover) document.getElementById(menuid + '_cover').style.display = '';
	if(fade) {
		var O = 0;
		var fadeIn = function(O) {
			if(O == 100) {
				clearTimeout(fadeInTimer);
				return;
			}
			menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
			menuObj.style.opacity = O / 100;
			O += 10;
			var fadeInTimer = setTimeout(function () {
				fadeIn(O);
			}, 50);
		};
		fadeIn(O);
		menuObj.fade = true;
	} else {
		menuObj.fade = false;
	}
	if(pos != '*') {
		setMenuPosition(showid, menuid, pos);
	}
	if(BROWSER.ie && BROWSER.ie < 7 && winhandlekey && document.getElementById('fwin_' + winhandlekey)) {
		document.getElementById(menuid).style.left = (parseInt(document.getElementById(menuid).style.left) - parseInt(document.getElementById('fwin_' + winhandlekey).style.left)) + 'px';
		document.getElementById(menuid).style.top = (parseInt(document.getElementById(menuid).style.top) - parseInt(document.getElementById('fwin_' + winhandlekey).style.top)) + 'px';
	}
	if(maxh && menuObj.scrollHeight > maxh) {
		menuObj.style.height = maxh + 'px';
		if(BROWSER.opera) {
			menuObj.style.overflow = 'auto';
		} else {
			menuObj.style.overflowY = 'auto';
		}
	}

	if(!duration) {
		setTimeout('hideMenu(\'' + menuid + '\', \'' + mtype + '\')', timeout);
	}

	if(!in_array(menuid, JSMENU['active'][layer])) JSMENU['active'][layer].push(menuid);
	menuObj.cache = cache;
	if(layer > JSMENU['layer']) {
		JSMENU['layer'] = layer;
	}
}
function setMenuPosition(showid, menuid, pos) {
	var showObj = document.getElementById(showid);
	var menuObj = menuid ? document.getElementById(menuid) : document.getElementById(showid + '_menu');
	if(isUndefined(pos)) pos = '43';
	var basePoint = parseInt(pos.substr(0, 1));
	var direction = parseInt(pos.substr(1, 1));
	var sxy = 0, sx = 0, sy = 0, sw = 0, sh = 0, ml = 0, mt = 0, mw = 0, mcw = 0, mh = 0, mch = 0, bpl = 0, bpt = 0;

	if(!menuObj || (basePoint > 0 && !showObj)) return;
	if(showObj) {
		sxy = fetchOffset(showObj);
		sx = sxy['left'];
		sy = sxy['top'];
		sw = showObj.offsetWidth;
		sh = showObj.offsetHeight;
	}
	mw = menuObj.offsetWidth;
	mcw = menuObj.clientWidth;
	mh = menuObj.offsetHeight;
	mch = menuObj.clientHeight;

	switch(basePoint) {
		case 1:
			bpl = sx;
			bpt = sy;
			break;
		case 2:
			bpl = sx + sw;
			bpt = sy;
			break;
		case 3:
			bpl = sx + sw;
			bpt = sy + sh;
			break;
		case 4:
			bpl = sx;
			bpt = sy + sh;
			break;
	}
	switch(direction) {
		case 0:
			menuObj.style.left = (document.body.clientWidth - menuObj.clientWidth) / 2 + 'px';
			mt = (document.documentElement.clientHeight - menuObj.clientHeight) / 2;
			break;
		case 1:
			ml = bpl - mw;
			mt = bpt - mh;
			break;
		case 2:
			ml = bpl;
			mt = bpt - mh;
			break;
		case 3:
			ml = bpl;
			mt = bpt;
			break;
		case 4:
			ml = bpl - mw;
			mt = bpt;
			break;
	}
	var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	if(in_array(direction, [1, 4]) && ml < 0) {
		ml = bpl;
		if(in_array(basePoint, [1, 4])) ml += sw;
	} else if(ml + mw > scrollLeft + document.body.clientWidth && sx >= mw) {
		ml = bpl - mw;
		if(in_array(basePoint, [2, 3])) ml -= sw;
	}
	if(in_array(direction, [1, 2]) && mt < 0) {
		mt = bpt;
		if(in_array(basePoint, [1, 2])) mt += sh;
	} else if(mt + mh > scrollTop + document.documentElement.clientHeight && sy >= mh) {
		mt = bpt - mh;
		if(in_array(basePoint, [3, 4])) mt -= sh;
	}
	if(pos == '210') {
		ml += 69 - sw / 2;
		mt -= 5;
		if(showObj.tagName == 'TEXTAREA') {
			ml -= sw / 2;
			mt += sh / 2;
		}
	}
	if(direction == 0 || menuObj.scrolly) {
		if(BROWSER.ie && BROWSER.ie < 7) {
			if(direction == 0) mt += scrollTop;
		} else {
			if(menuObj.scrolly) mt -= scrollTop;
			menuObj.style.position = 'fixed';
		}
	}
	if(ml) menuObj.style.left = ml + 'px';
	if(mt) menuObj.style.top = mt + 'px';
	if(direction == 0 && BROWSER.ie && !document.documentElement.clientHeight) {
		menuObj.style.position = 'absolute';
		menuObj.style.top = (document.body.clientHeight - menuObj.clientHeight) / 2 + 'px';
	}
	if(menuObj.style.clip && !BROWSER.opera) {
		menuObj.style.clip = 'rect(auto, auto, auto, auto)';
	}
}
function hideMenu(attr, mtype) {
	attr = isUndefined(attr) ? '' : attr;
	mtype = isUndefined(mtype) ? 'menu' : mtype;
	if(attr == '') {
		for(var i = 1; i <= JSMENU['layer']; i++) {
			hideMenu(i, mtype);
		}
		return;
	} else if(typeof attr == 'number') {
		for(var j in JSMENU['active'][attr]) {
			hideMenu(JSMENU['active'][attr][j], mtype);
		}
		return;
	}else if(typeof attr == 'string') {
		var menuObj = document.getElementById(attr);
		if(!menuObj || (mtype && menuObj.mtype != mtype)) return;
		clearTimeout(JSMENU['timer'][attr]);
		var hide = function() {
			if(menuObj.cache) {
				menuObj.style.display = 'none';
				if(menuObj.cover) document.getElementById(attr + '_cover').style.display = 'none';
			}else {
				menuObj.parentNode.removeChild(menuObj);
				if(menuObj.cover) document.getElementById(attr + '_cover').parentNode.removeChild(document.getElementById(attr + '_cover'));
			}
			var tmp = [];
			for(var k in JSMENU['active'][menuObj.layer]) {
				if(attr != JSMENU['active'][menuObj.layer][k]) tmp.push(JSMENU['active'][menuObj.layer][k]);
			}
			JSMENU['active'][menuObj.layer] = tmp;
		};
		if(menuObj.fade) {
			var O = 100;
			var fadeOut = function(O) {
				if(O == 0) {
					clearTimeout(fadeOutTimer);
					hide();
					return;
				}
				menuObj.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity=' + O + ')';
				menuObj.style.opacity = O / 100;
				O -= 10;
				var fadeOutTimer = setTimeout(function () {
					fadeOut(O);
				}, 50);
			};
			fadeOut(O);
		} else {
			hide();
		}
	}
}
function getClipboardData() {
	window.document.clipboardswf.SetVariable('str', CLIPBOARDSWFDATA);
}
function add_shoucang()
	{
		var cookieName = "shoucang_"+s_NewsID;
		if (!getCookieDig(cookieName))
		{
				$.ajax({
				url:"//dt.mydrivers.com/action/shoucangnews.ashx?id="+s_NewsID+"&title="+s_NewsTitle+"&classid="+s_NewsClassID+"&callback=?",   
			    dataType:"jsonp",
			    jsonpCallback:"NewsShouCang",
				success:function(data){
						var s = parseInt(data.StateCode);
						if(s==1)
						{
							setCookieDig(cookieName,1);
							alert("收藏成功!");	
						}else
						{
							alert("请稍后重试!");	
						}
				}
		   });
		}
		else
		{
				alert("这篇文章已经收藏过了!");
		}
	}
function news_shoucang()
{
	var username = get_cookie("mydrivers_userid");
    if (username != null && username != "") {
		add_shoucang();
		}else{
         ShowLogin();
			} 
}
function searchinfo() {
    var s_keywords = $("#q").val();
    if ((s_keywords == "" || s_keywords == "请输入关键字")) {
        alert("请输入查询关键字!");
        $("#q").focus();
        return false;
    }
    $("#myforminfo").attr("action", "//so.mydrivers.com/news_utf8.aspx?q=" + escape(s_keywords));
    return true;
}


  function autoScroll(obj){
    $(obj).find("ul").animate({
      marginTop : "-75px"
    },1000,function(){
        var str= $(this).css({marginTop : "0px"});
		    for(var i=0;i<3;i++)
			{
			  str.find("li:first").appendTo(this);
			}
    })
  }
  $(function(){
    var scroll=setInterval('autoScroll(".maquee")',9000);
     $(".maquee").hover(function(){
      console.log("aaa");
      clearInterval(scroll);
     },function(){
      scroll=setInterval('autoScroll(".maquee")',9000);
     });
  });





