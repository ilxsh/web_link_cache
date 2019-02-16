







$(document).ready(function(){
	
	
	
	
	
	//热门专题
	$("#hot_project a").mouseenter(function(){
		$(this).find(".on").hide();
		$(this).find(".off").show();
		$(this).siblings().find(".on").show();
		$(this).siblings().find(".off").hide();
	})
	
	
	
	//返回顶部部分
	
	$(".gotopbox .weixin").mouseenter(function(){
		$(".gotopbox .gotop_erweima").fadeIn(500);
	}).mouseleave(function(){
		$(".gotopbox .gotop_erweima").fadeOut(500);
	})
	
	
	//企业库
	$(".qiyeku .showmore").click(function(){
		$(this).parents(".idc").siblings(".more").toggle();
		$(this).toggleClass("showmore1")
	})
	//导航部分
	$(".nav dl").hover(function(){
		$(this).find("dd").show();
	},function(){
		$(this).find("dd").hide();
	});
	
	
	
	
	
	
	
	$(".news .share").bind("mouseenter",function(){
		$(this).find(".bdsharebuttonbox").show();
	})
	$(".news .share").bind("mouseleave",function(){
		$(this).find(".bdsharebuttonbox").hide();
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//微信公众号文字显示
	$(".weixin").each(function(){
		var n = $(this).find(".weixin_nr");
		var m = n.text().length;
		if(m<=22){
			n.css({"margin-top":"20px"})
		}else{
			n.css({"margin-top":"14px"})
		}
	})
	
	//服务商排行榜选项卡
	$(".top10_title div").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var n = $(this).index();
		$(".top10 .ul").eq(n).addClass("current").siblings(".ul").removeClass("current");
	})
	
	
	/*
	 * 会议活动*/
	
	
	$("#activity .news_title a").click(function(){
		var n = $(this).index();
		var m = $(this).parents(".newsbox").find("ul").eq(n); 
		m.addClass("current").siblings("ul").removeClass("current");
 	})
	$("#project .news_title a").click(function(){
		var n = $(this).index();
		var m = $(this).parents(".newsbox").find("ul").eq(n);
		m.addClass("current").siblings("ul").removeClass("current");
	})
	
	$(window).scroll(function () {
		var m = $(window).scrollTop();//滚动条距离高度
		if(m>1400){
			$(".gotopbox .gotop").css({"display":"block"})
		}else{
			$(".gotopbox .gotop").hide()
		}
	});
	
	
	
	
	//新闻列表文字显示
	
	$(".news").each(function(){
		$(this).bind('mouseover', function() {
			share_pic = $(this).find(".newsimg").attr("src");
			share_text = $(this).find(".d1 .title").text();
			share_url = $(this).find(".bdurl").attr("href");
			//console.log(share_url)
			$('#fx_text').attr('data', share_text);
			$('#fx_url').attr('data', share_url);
			$('#fx_pic').attr('data', share_pic);
		});
	})
	  
})//document
	
	$(function() {
		$('.bdsharebuttonbox a').mouseover(function() {
			$('#fx_text').attr('data', '11111111111');
			$('#fx_url').attr('data', 'http://www.idcquan.com');
			$('#fx_pic').attr('data', "http://upload.idcquan.com/2017/0424/1493022389897.jpg");
		});
	});
	
	
	
	window._bd_share_config = {
		common: {
			onBeforeClick: function(cmd, config) {
				return { 
					"bdText": $('#fx_text').attr('data'),
					"bdUrl": $('#fx_url').attr('data'), 
					"bdPic": $('#fx_pic').attr('data'),
					"bdStyle": "1", 
				}
			}
		},
		share: [{
			"bdSize": 24
		}],
		
	
	};
	with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
