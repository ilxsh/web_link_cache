$(function(){
    //新版---2015.02.13
    groupSite(".sub_sites","p");
    groupSite("#UserLogin dl","dd");
    //搜索
    iSearch("#selectClass","#selectform");
    //新版---2015.02.13
//搜索
    $(".sctype").hover(
        function(){
            $(".sctype ul,.sctype span").addClass("show")},
        function(){
            $(".sctype ul,.sctype span").removeClass("show")}
    );
    $(".sctype ul li").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        });
    $(".sctype ul li").click(function(){
        $(".sctype span").html($(this).html());
        $(".sctype span").attr("qb",$(this).attr("qb"));
        $(".s_text").val($(this).attr("val"));
        $(".sctype ul").removeClass("show");
    });
    $("#srchform").submit(function(){
        var oWd=$(".s_text").val();
        var oType=$(".sctype span").attr("qb");
        if(oType=="wy"){
            document.getElementById('srchform').setAttribute("action","http://search.yesky.com/search.do?wd="+oWd);
        }else if(oType=="cp"){
            document.getElementById('srchform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
        }else if(oType=="tp"){
            document.getElementById('srchform').setAttribute("action","http://search.yesky.com/searchpicture.do?wd="+oWd);
        }else if(oType=="bj"){
            document.getElementById('srchform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
        }else if(oType=="xz"){
            document.getElementById('srchform').setAttribute("action","http://search.yesky.com/searchdownload.do?wd="+oWd);
        }
    });
//分站
    $(".sub_nav dl").hover(
        function(){
            $(this).find("dd").addClass("show");
        },
        function(){
            $(this).find("dd").removeClass("show");
        });
//二级导航
    $(".sub_nav p").hover(
        function(){
            $(this).addClass("show");
        },
        function(){
            $(".sub_nav p").removeClass("show");
        });
    $(".sub_nav h3").hover(
        function(){
            var hIndex = $(this).index();
            $(".sub_nav p").eq(hIndex).addClass("show");
        },
        function(){
            $(".sub_nav p").removeClass("show");
        });
//边栏相关评论
    if($("#relink").length>0){$(".xgwz").parent("li").removeClass("hidden");};
//滑动门
    function Tabs(tabs,container,active,event){
        $(tabs).bind(event,function(){
            var oIndex = $(tabs).index(this);
            $(this).addClass(active).siblings(tabs).removeClass(active);
            $(container).eq(oIndex).show().siblings(container).hide();
        })
    };
    Tabs(".titbs span",".channel div","show","mouseover");
    Tabs("#intel ul li","#intel div","show","mouseover");
    Tabs(".inrtj p span",".inrtj blockquote","show","mouseover");
    Tabs(".inrtj p i",".inrtj blockquote","show","mouseover");
    Tabs("#jxs ul li","#jxs div","show","mouseover");
    Tabs(".jkx .tabs span","#jkx_box ul","show","click");       //极客修选项卡

    if (channelId == 327){
        // $(".adv_shipin").wrap("<div class='adv_shipin_wrap'></div>");
        $(".adv_shipin_wrap").css({"display":"none"});
        $("#ac_js86_78001").prev().css({"display":"none"});
        $("embed [name='ac_cs_78001_1']").parent().parent().parent().css({"display":"none"});
        var _aArr = $("meta[name='keywords']").attr("content");
        if (_aArr.indexOf("苹果") > -1 || _aArr.indexOf("iPhone") > -1 || _aArr.indexOf("iPhone6") > -1 ) {
            $(".adv_shipin_wrap").css({"display":"block"});
            $("#ac_js86_78001").prev().css({"display":"block"});
            $("embed [name='ac_cs_78001_1']").parent().parent().parent().css({"display":"block"});

        }
    }
})
if (channelId==null)
{
    var channelId = 22;
}
if (referId==null)
{
    var referId = 0;
}
//2014.07.07 wangrui
if(referId == 38012442){
    $("#pl,#saymore").hide();
}
//2014.07.07 qiuxiaoling
//    if(channelId == 327 || channelId == 555720){
//    var id  = 'A100188989';
//    var uid = '';
//    document.write(unescape("%3Cscript src='http://sl.linktech.cn/lkt.js' type='text/javascript'%3E%3C/script%3E"));
//    }

//2014.08.022 张萌_网金链
if(referId == 38691371){
    var _tjlt = new Date().toDateString().replace(/\s/g, '');
    document.write(unescape("%3Cscript src='http://www.yesky.com/TLimages2009/yesky/js/wangjinlian.js?v="+_tjlt+".js' type='text/javascript'%3E%3C/script%3E"));
    document.write(unescape("%3Cscript src='http://file.chanet.com.cn/html/js/wangjinlian/wangjinlian2.js?v="+_tjlt+".js' type='text/javascript'%3E%3C/script%3E"));
    document.write(unescape("%3Cscript src='http://www.yesky.com/TLimages2009/yesky/js/wangjinlian0.js?v="+_tjlt+".js' type='text/javascript'%3E%3C/script%3E"));
}

//文章隐藏头像
if(referId==103960514||referId ==103965051||referId ==103964239||referId ==103982646){
	$(".editphoto").hide();
	}
//2014.09.17 baifendian
if(channelId == 327 || channelId == 548880){
    var categoryurl= sitemapurl+'/c/'+channelId+'_'+categoryid+'.shtml';
    window["_BFD"] = window["_BFD"] || {};
    _BFD.BFD_INFO = {
        "title" : articletitle,   //标题
        "id" : referId,   //文章id，唯一表示
        "url" : window.location.href,   //文章链接
        "category" : [[sitemapname,sitemapurl],[categoryName,categoryurl]],   //文章所属的分类信息，二维数据，按照分类大小从大到小顺序，参考页面面包屑信息。。
        "type" : "mobile",
        "pic" : "",
        "ptime" : displayTime,   //文章发表时间，时间戳格式
        "user_id" : "", //网站当前用户id，如果未登录就为0或空字符串
        "page_type" : "mobile_detail" //当前页面全称，请勿修改
    };

    _BFD.showMoblie = function(data,bid,req_id){

        //内容输出
        var oHtml="";
        for(var i=0;i<data.length;i++){
            oHtml+='<li><a href="'+data[i].url+'">'+data[i].name+'</a></li>';
        }
        var iHtml='<div id="y_bfd"><div class="tita">相关推荐</div><ul class="rear">'+oHtml+'</ul><a href=\"http://www.baifendian.com\" style="position:absolute;bottom:170px;right:5px" target=\"_blank\" class=\"bfd_img_logoy\"></a></div>';
        if($("#relink").length>0)
        {
            $("#relink").after(iHtml);
            $("#relink").css({"float":"left","width":"310px"});
            $("#y_bfd").css({"float":"right","width":"310px"});

        }
        else{
            $(".weibo").after(iHtml);
        }
        _BFD.bind(data,"showMoblie",bid,req_id);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
    }
};
//groupSite 新版导航---2015.02.13
function groupSite(tag,obj){
    var oGsUl=$(tag).children(obj);
    $(tag).hover(function(){
        $(this).addClass("show");
        oGsUl.show();
    },function(){
        $(this).removeClass("show");
        oGsUl.hide();
    });
};
//login
//浮动层搜索
function iSearch(id,form){
    //搜索类型选择
    $(id).hover(function(){
        $(this).find("ul").show();
    },function(){
        $(this).find("ul").hide();
    });
    $(id + " li").click(function(){
        $(this).parent().prev("span").html($(this).html());
        $(this).parent().prev("span").attr("qb",$(this).attr('qb'))
        $(this).parent().hide();
    });
    $(id + " li").hover(function(){
        $(this).addClass("show").siblings("li").removeClass("show");
    });
    $(id).hover(function(){
        $(this).find("ul").show();
        $(this).find("span").addClass("sel");
    },function(){
        $(this).find("ul").hide();
        $(this).find("span").removeClass("sel");
    });
    //按类型提交判断
    $(form).submit(function(){
        var oWd=$(this).find(".seltext").val();
        var oType=$(id+' span').attr('qb');
        if(oType=="wy"){
            document.getElementById('selectform').setAttribute("action","http://search.yesky.com/search.do?wd="+oWd);
            document.getElementById('floatform').setAttribute("action","http://search.yesky.com/search.do?wd="+oWd);
        }else if(oType=="cp"){
            document.getElementById('selectform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
            document.getElementById('floatform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
        }else if(oType=="tp"){
            document.getElementById('selectform').setAttribute("action","http://search.yesky.com/searchpicture.do?wd="+oWd);
            document.getElementById('floatform').setAttribute("action","http://search.yesky.com/searchpicture.do?wd="+oWd);
        }else if(oType=="bj"){
            document.getElementById('selectform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
            document.getElementById('floatform').setAttribute("action","http://search.yesky.com/searchproduct.do?wd="+oWd);
        }else if(oType=="xz"){
            document.getElementById('selectform').setAttribute("action","http://search.yesky.com/searchdownload.do?wd="+oWd);
            document.getElementById('floatform').setAttribute("action","http://search.yesky.com/searchdownload.do?wd="+oWd);
        }
    });
}
$('#selectClass li').click(function(){
    var oValue = $(this).attr('val');
    $('.seltext').val(oValue);
});
/*360回流*/
//var _location = window.location.href;
//var _reg = new RegExp("(http://notebook.yesky.com/|http://mobile.yesky.com/|http://wearable.yesky.com/|http://digital.yesky.com/)",'ig');
//if(_reg.test(_location)){/*360关键词回流路径*/
  //  xgss();
//}

var index = 0;
$("body").on("click",".related-search .change",function(){
    var len = $(this).parent().siblings(".keyblock").find("ul").length;
    var obj1=$(this).parent().siblings(".keyblock").find("ul");
    if (index == len) {
        index = 0;
    };
    $(obj1).eq(index).fadeOut(0).siblings().fadeIn(0);
    index += 1;
});
function xgss() {
    $.ajax({
        url: "https://mbsug.ssl.so.com/idxdata/get?type=hot&hotnum=30&hotinclude=key_word",
        dataType: 'jsonp',
        data: '',
        jsonp: 'callback',
        jsonpCallback: "jsonpCallback",
        success: function (result) {
            var _data = result.data.hot;
            var _htmls = '<div id="related-search-div" class="section related-search"><div class="header"><h2>相关搜索</h2><span class="change" href="javascript:void(0);"><img src="http://www.yesky.com/TLimages2009/yesky/images/ywap15/keyicon.jpg"> 换一批</span></div>'
                + '<div class="keyblock"><ul class="list clearfix" >';
            for (var i in _data) {
                if (i < 6) {
                    _htmls += '<li><a class="c"' + 'onclick="' + "_hmt.push(['_trackEvent', '360xw" + i + "', 'ad_click', '360xw" + i + "']);" + '"'
                    + 'href="https://www.so.com/s?ie=utf-8&src=free_yesky_com&q=' + _data[i].key_word + '">' + _data[i].key_word + '</a></li>';
                } else if (i == 6) {
                    _htmls += '</ul>' + '<ul class="list clearfix" style="display: none">' + '<li><a class="c"' + 'onclick="' + "_hmt.push(['_trackEvent', '360xw" + i + "', 'ad_click', '360xw" + i + "']);" + '"'
                    + 'href="https://www.so.com/s?ie=utf-8&src=free_yesky_com&q=' + _data[i].key_word + '">' +  _data[i].key_word + '</a></li>';
                } else if (i < 12 && i > 6) {
                    _htmls += '<li><a class="c"' + 'onclick="' + "_hmt.push(['_trackEvent', '360xw" + i + "', 'ad_click', '360xw" + i + "']);" + '"'
                    + 'href="https://www.so.com/s?ie=utf-8&src=free_yesky_com&q=' + _data[i].key_word + '">' +  _data[i].key_word + '</a></li>';
                } else {
                    _htmls += '</ul>' + '</div></div>';
                    $("#saymore").after(_htmls);
                    return;
                }
            }
        },
        error: function (e) {
            console.log(e);
            console.log("error");
        }

    })
}
/*视频播放判断*/
var userAgent = navigator.userAgent;
var isIe = (userAgent.indexOf("MSIE")>0 );
if (isIe) {
    $(".vedio_box embed").show();
}else{
    $(".vedio_box video").show();
}