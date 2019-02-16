/*
 * edit by linan
 * 2015.1.17
 *
 */
//修改blockUI默认样式
$.blockUI.defaults.css = {
		padding:	0,
		margin:		0,
		width:		"30%",
		top:		"30%",
		left:		"50%",
		color:		"#000",
		border:		0,
		borderRadius:"3px",
		backgroundColor : "#fff",
		cursor:		"default"
};
$.blockUI.defaults.overlayCSS = {
		backgroundColor: "#000",
		opacity:	  	 0.3
};

// 路障广告***************************************/
$(function(){
	// 显示路障广告
	var showTdkAd = function(ad_url) {
		var docHeight = $(document).height(),docWidth = $(document).width();
		var setStyle=
				'<style type="text/css">'+
				'/*2015-07-20 tdk弹窗广告*/'+
				'#fix-tdkad{position: fixed;z-index: 99999;width: 640px;height: 480px;top: 50%;left: 50%;margin:-240px 0 0 -320px;}'+
				'#tdk-close{ background: url(http://www.elecfans.com/images2013/close.png) no-repeat 0 0; cursor: pointer; width: 24px; height: 24px; position: absolute; display: block; right: -12px; top: -12px; z-index: 101;}'+
				'#road-block-bg { background: #999; display: block; position: absolute; left: 0; top: 0; z-index: 99; opacity: 0.5; }'+
				'</style>'
			;
		$('body').append(setStyle+'<div id="fix-tdkad"><iframe width="640" height="480" frameborder="0" src="'+ad_url+'" scrolling="no"></iframe><span id="tdk-close" title="点击关闭"></span></div><div id="road-block-bg"></div>');
		$(document).on("click", "#tdk-close", function(){
			closeTdkAd();
		});

	}
	// 关闭路障广告
	var closeTdkAd = function(){
		if($('#fix-tdkad').length){
			$('#fix-tdkad').animate({
				"opacity" : 0
			}, 500, function(){
				$('#fix-tdkad').remove();
				$('#road-block-bg').hide();
			});
		}
	}
	// cookie 设置函数
	$.extend({
		cookieHelper: function(name, value, options) {
			if (typeof value != 'undefined') { // name and value given, set cookie
				options = options || {};
				if (value === null) {
					value = '';
					options.expires = -1;
				}
				var expires = '';
				if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
					var date;
					if (typeof options.expires == 'number') {
						date = new Date();
						date.setTime(date.getTime() + (options.expires * 60 * 60 * 1000));
					} else {
						date = options.expires;
					}
					expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
				}
				var path = options.path ? '; path=' + options.path : '';
				var domain = options.domain ? '; domain=' + options.domain : '';
				var secure = options.secure ? '; secure' : '';
				document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
			} else { // only name given, get cookie
				var cookieValue = null;
				if (document.cookie && document.cookie != '') {
					var cookies = document.cookie.split(';');
					for (var i = 0; i < cookies.length; i++) {
						var cookie = jQuery.trim(cookies[i]);
						// Does this cookie string begin with the name we want?
						if (cookie.substring(0, name.length + 1) == (name + '=')) {
							cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
							break;
						}
					}
				}
				return cookieValue;
			}
		}
	});
	// 获取当前栏目ID
	var get_current_typeid = function() {
		var ad_id = 0;
		if( $('#adChannel').length > 0 ) {
			ad_id = $('#adChannel').val();
		}
		return ad_id;
	}

	if($.cookieHelper("roadblockad") !== "yes"){
		var ad_id = get_current_typeid();
		// 栏目ID为0的页面没有对应的路障广告
		if (ad_id == 0 && window.location.href.indexOf('/tags/')>0) {
            ad_id = "homepage"
		}
		$.ajax({
			type:'GET',
			url:'/webapi/advertisement/roadblock',
			data: {site_name:'www', typeid: ad_id},
			dataType:'json',
			success: function(response) {
				if (response.error_code != 0) {
					return false;
				}
				var data = response.data;
				$.cookieHelper("roadblockad", "yes", {expires:data['frequency'], path:"/"});
				showTdkAd(data['ad_url']);
				if(window.location.href.indexOf('d/article/write/')>0){
					closeTdkAd();
				}
				setTimeout(function(){closeTdkAd();}, 30000);
			}
		});
	}







  // 显示视频路障广告
  var showTdkVideoAd = function(ad_url) {
    var setStyle=
        '<style type="text/css">'+
        '/*2015-07-20 tdk弹窗广告*/'+
        '#isShowVideo{cursor: pointer;background: #000;color: #fff;width: 161px;text-align: left;font-size: 14px;padding: 10px 0 10px 10px;box-sizing:border-box;display: none;}'+
        '.closeOpenxBtn{background: #fff;border: 1px solid #999999;padding: 3px 15px;margin: 8px;color: #999999; cursor: pointer;}'+
        '.goTargetUrl{text-decoration: none;display: block;line-height: 45px;margin-left: 80px;font-size: 15px;}'+
        '</style>'
      ;
    var content = '<div id="isShowVideo">ADI “魔术手”上线<br /> 点击了解<br />ADI如何超越一切可能！</div>'+
                  '<div style="display: flex; display: -ms-flexbox;display: -ms-flexbox;display: -moz-box">'+
                  '<button class="closeOpenxBtn">关闭</button>'+
                  '<a class="goTargetUrl" target="_blank">ADI “魔术手”上线点击了解ADI如何超越一切可能！&gt;&gt;&gt;</a>'+
                  '</div>'
    var script = "<SCRIPT language='JavaScript1.1' SRC='https://ad.doubleclick.net/ddm/trackimpj/N7384.1821876ELECFANS.COM/B21679777.228535550;dc_trk_aid=426716634;dc_trk_cid=105808177;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?'></SCRIPT>"
    $('body').append(setStyle+'<div style="position: fixed; right: 0; bottom: 0; z-index: 1001;border: 1px solid #999999;background: #fff;">'+content+'<div id="video-fix-tdkad"><iframe width="640" height="480" frameborder="0" src="'+ad_url+'" scrolling="no"></iframe></div></div>' + script);
    //关闭视频路障广告
    closeTdkVideoAd()
  }


  function sendGA(){
    //判断浏览器
    //向谷歌发送数据
    if(typeof(ga)!="undefined"){
      ga('send', 'event', 'ADI_video_banner', 'click', '[ADI_video_banner]');
    }
    //向百度发送数据
    if(typeof(_hmt)!="undefined"){
      _hmt.push(['_trackEvent', 'ADI_video_banner', 'click', '[ADI_video_banner]']);
    }
  }

  var closeTdkVideoAd = function(){
     $('#isShowVideo').click(function(){
      $(this).hide()
      $(".closeOpenxBtn").parent().show()
      $('#video-fix-tdkad').css("display", 'block')
    });
    $('.closeOpenxBtn').click(function(){
        $('#video-fix-tdkad').hide();
        $(this).parent().hide()
        $('#isShowVideo').css("display", 'block')
      })
    $(".goTargetUrl").click(function(){
        sendGA()
        window.open('https://ad.doubleclick.net/ddm/trackclk/N7384.1821876ELECFANS.COM/B21679777.228535550;dc_trk_aid=426716634;dc_trk_cid=105808177;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=')
    })
  }

  //获取视频路障广告地址
  function getVideoAdUrl(){
    var ad_id = get_current_typeid();
    // 栏目ID为0的页面没有对应的路障广告
    if (ad_id == 0 && window.location.href.indexOf('/tags/')>0) {
        ad_id = "homepage"
    }
    $.ajax({
      type:'GET',
      url:'/webapi/advertisement/roadblock',
      data: {site_name:'www', typeid: ad_id, ad_type: 5},
      dataType:'json',
      success: function(response) {
        if (response.error_code != 0) {
          return false;
        }
        var data = response.data;
        $.cookieHelper("videoRoadblockad", "yes", {expires:data['frequency'], path:"/"});
        showTdkVideoAd(data["ad_url"]);
        if(window.location.href.indexOf('d/article/write/')>0){
          $('#isShowVideo').hide();
          $('#video-fix-tdkad').hide();
          $(".closeOpenxBtn").parent().hide()
        }
      }
    });
  }

  //视频路障广告
  if($.cookieHelper("videoRoadblockad") !== "yes"){
    getVideoAdUrl()
  } else {
    var setStyle=
        '<style type="text/css">'+
        '#isShowVideoNext{cursor:pointer;background: #000;color: #fff;width: 161px;text-align: left;font-size: 14px;padding: 10px 0 10px 10px;; box-sizing: border-box; display: block;}'+
        '</style>'
      ;
    var content = '<div id="isShowVideoNext">ADI “魔术手”上线<br /> 点击了解<br />ADI如何超越一切可能！</div>';
    if(window.location.href.indexOf('d/article/write/') < 0){
      $('body').append(setStyle+'<div style="position: fixed; right: 0; bottom: 0; z-index: 100;border: 1px solid #999999;background: #fff;">'+content+'</div>');
    }
    $("#isShowVideoNext").click(function(){
      $(this).hide()
      getVideoAdUrl()
    })
  }
});

// 插入单点登录JS
;$(function(){
	if ( !$.tActivityLogin ) {
		var setHost ='https://passport.elecfans.com'; //设置域名
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = setHost + '/public/pc/js/t.passport.js';
        script.setAttribute("id", "sso_script");
        script.setAttribute("data-ssoSite", setHost);
        script.setAttribute("data-ssoReferer", encodeURIComponent(location.href));
        script.setAttribute("data-ssoSiteid", "11");
        var body = document.getElementsByTagName("body").item(0);
        body.appendChild(script);
    }
});

// 路障广告 end***************************************/
$(function(){
		$.ajaxSetup ({
			cache: false
		});

        //导航
        /*
        $("#zhuda").mouseDelay(200).hover(function(){
            $("#subNav").slideDown(100);
        },function(){
            $("#subNav").fadeOut(100);
        });
        */

        //我的菜单
        var win_width = $(window).width();
        if(win_width > 1000){
            $("#mine").mouseDelay(200).hover(function(){
                $("#mymenu").show();
            },function(){
                $("#mymenu").hide();
            });
        }else{
            /*
            $("#mine a").on('click',function(){

                $("#mymenu").toggle();
                return false;
            });
            */
        }

		//返回顶部 ----------------
		var back_to_top = $("#backToTop");
		function backToTop(){
				$(window).on('scroll', function() {
						var scroll_top = $(document).scrollTop();
						if( scroll_top > 400 ) {
								back_to_top.fadeIn(400);
						}else {
								back_to_top.fadeOut(400);
						}
				})
		}
		backToTop();
		back_to_top.on('click', function() {
				$(window).off('scroll');
				back_to_top.fadeOut(400);
				$("html, body").animate({ scrollTop: 0 }, 600 ,function(){
						backToTop();
						//$(".fixed").removeClass("fixed");
						setTimeout(function(){
								//fixed( $("#sideFix") );
						},400);
				});
				//return false;
		});

        //分页返回顶部
        $("#pagnBacktotop").on('click', function() {
				$("html, body").animate({ scrollTop: 0 }, 600 ,function(){
				});
				return false;
		});

        //专辑列表鼠标经过封面效果
        /*
        var list= $("#albumList");
        if(list.length>0){
                var easing = "cubic-bezier(0.165, 0.840, 0.440, 1.000)";
                var time = 400;

                list.find(".cover").mouseDelay(200).hover(function () {

                    list.find(".uploader").transition({
                        x: '-30px',

                        opacity: 0,
                        duration: time,
                        easing: easing
                    });

                    var _this = $(this);
                    var info = _this.find(".uploader");

                    info.stop().css({
                        x: '-20%',
                        y: 0,
                        opacity: 1,
                        display: "block"
                    }).transition({
                        x: 0,
                        duration: time,
                        easing: easing
                    });

                    //图片

                    _this.find(".img").stop().transition({
                        x: '10px',
                        opacity: .5,
                        duration: time,
                        easing: easing
                    }).transition({
                        x: 0,
                        duration: time*0.5,
                        easing: easing
                    }).css({opacity: 1});

                }, function () {

                    var info = $(this).find(".uploader");
                    info.stop(false,true).transition({
                        x: '-30px',
                        opacity: 0,
                        duration: time*1.5,
                        easing: easing
                    })
                });
        }
        */

        //显示选择菜单
        $(".choosebox").mouseDelay(150).hover(function(){
            $(".choose-menu").hide();
            $(this).find(".choose-menu").show();
        },function(){
            $(".choose-menu").hide();
        });


        //音乐风格数据交互
        $("#musicStyleList").on('click','li',function(){
            var _this = $(this);
            //获取被点击的音乐风格ID
            var music_style = _this.html();
            var music_style_id = _this.attr("id");
            //将获取的数据赋值给隐藏的input
            $("#musicStyle").val(music_style_id);

            //交互效果
            $("#chooseMusicStyle").html(music_style).removeClass("default");
            $(".choose-menu").hide();
        })
	/*展示搜索框*/
	$(document).on("click", "#searchToggle", function (e) {
		e.stopPropagation();
		$("#bdcs").toggle();
	});

})// End Document.Ready



//滚动到页面位置
function windowScroll(o,target){
		o.live('click',function(){
				var target_top = target.offset().top;
				$("html,body").animate({ scrollTop : target_top },600);
				return false;
		});
};


//定义Dialog弹出框对象 2013.01.22 by linan
function LnDialog(options) {
		var options = options ? options : {};
		this.style   = options.style || "";
		this.title   = options.title || "提示";
		this.content = options.content || "";
		//this.footer  = options.footer || "";
		this.top 	 = options.top || "25%";
		this.left 	 = options.left || "50%";
		this.width   = options.width || 500;
		this.height  = options.height || "";
		this.timeOut = options.timeOut || null;//定义对话框从出现到消失的时间
		this.overlay = options.overlay || true;//是否显示遮罩层
}
LnDialog.prototype = {
		createDialogHtml:function(html,width){
				var width = width ? width : this.width;


				var dialog_html = '';
					dialog_html += '	<div class="ln-dialog '+ this.style +'" id="lnDialog">';
					dialog_html += '		 	'+html+'';
					dialog_html += '	</div>';

					$("body").append( dialog_html );//先将DOM插入到body，$.blockUI才能捕捉DOM里的事件


					//弹出对话框
					$.blockUI({
							message : $('#lnDialog'),//对话框DOM
							css : {
									top: this.top,
									left: this.left,
									width: width + "px",
									height: this.height + "px",
									marginLeft: "-"+ width/2+"px",
									backgroundColor: 'none',
									border: 0
							},
							overlayCSS:  {
								backgroundColor: '#000',
								opacity:         0.3
							},
							timeout : this.timeOut,
							showOverlay: this.overlay,
							fadeOut:  600,
							onBlock: function() {
									//延时400给 遮罩层、关闭按钮添加title属性，以及click关闭对话框事件。
									setTimeout(function(){
											$(".blockOverlay,.ln-dialog-close").attr('title','点击关闭').on('click',$.unblockUI);
									},400);
							},
							onUnblock:function(){
									$("#lnDialog").remove();
							}
					});
		},
		createContentHtml: function( html,title,width){
				var html = html ? html : this.content
				var title = title ? title : this.title;//如果没有传标题，使用默认的标题
				var width = width ? width : this.width;
				var content_html = '';
				    content_html += '<div class="ln-dialog-hd">';
					content_html += '		<h2 class="dialog-title">'+title+'</h2>';
					content_html += '		<div class="ln-dialog-close">X</div>';
					content_html += '</div>';
					content_html += '<div class="ln-dialog-bd clearfix">';
					content_html += '		'+html+'';
					content_html += '</div>';
					//content_html += '<div class="ln-dialog-ft clearfix">'+this.footer+'</div>';
					//将内容加入到对话框DOM中
					this.createDialogHtml( content_html ,width);
		},
		deleteDialogHtml: function(){
				$("#lnDialog").html("");
		},
		showLogin: function(title){
				var html = '';
					html += '<div class="connection login-dialog">';
					html += '		<h2>使用新浪微博账号登录</h2>';
					html += '		<a class="weibo" href="/Home/Login/login/type/sina.html">新浪微博</a>';
					html += '</div>';

				var title = title ? title : "登录";//如果没有传标题，使用默认的标题

				this.createContentHtml(html,title,350);

		},
		startLoading: function( content ){
				var content = content ? content : '正在载入，请稍后';
				var html = '<div class="ln-dialog-loading"id="lnDialogLoading"><img src="http://skin.shaoerduo.com/images/loading.gif" alt="" /> <span class="fn-ml5">'+content+'</span>...</div>';
				this.createDialogHtml( html , 300);
		},
		stopLoading: function(){
				//this.deleteDialogHtml();
				$("#lnDialogLoading").remove();

		},
		showContent: function( content ,title,width ){

				this.createContentHtml(content,title,width);
		},
		showTrueOperation: function(title,callback){
				var true_dom = '';
				true_dom += '<div class="trueOpetation-box">';
				//true_dom += '		<div class="tip-msg">';
				true_dom += '				<h2 class="title">'+title+'</h2>';
				true_dom += '				<p class="opetation"><a href="#" id="opetationQueren" class="btn color">确 认</a> <a href="#" id="opetationCancel" class="btn false">取 消</a></p>';
				//true_dom += '		</div>';
				//true_dom += '		<div class="tip-icon '+tip_type+'"></div>';
				true_dom += '</div>';

				$(document).on('click',"#opetationQueren",function(){
						if(callback){ callback();}
						$.unblockUI({ fadeOut: 0 });
						return false;
				});
				$(document).on('click',"#opetationCancel",function(){
						$.unblockUI({ fadeOut: 0 });
						return false;
				});
				this.createDialogHtml(true_dom);
		},
		showTip : function(tip_title,tip_content,tip_type){
				var tip_type = tip_type ? tip_type : "";
				var tip_content = tip_content ? tip_content : "";
				var use_ico = tip_type ? "use-ico" : "";
				var tip_dom = '';
					tip_dom += '<div class="tip-box '+use_ico+'">';
					tip_dom += '		<div class="tip-msg">';
					tip_dom += '				<h2 class="tip-title">'+tip_title+'</h2>';
					tip_dom += '				<p class="tip-content">'+tip_content+'</p>';
					tip_dom += '		</div>';
					tip_dom += '		<div class="tip-icon '+tip_type+'"></div>';
					tip_dom += '</div>';

					this.createDialogHtml(tip_dom);
		},
		close : function(){
				$.unblockUI({ fadeOut: 0 });
		}
}

//2014.06.25 by house
function fixed(obj){
	var target_top = obj.offset().top;
	$(window).on('scroll', function() {
			var scroll_top = $(document).scrollTop();
			if( scroll_top > target_top ) {
					obj.addClass("fixed");

			}else {
					obj.removeClass("fixed");
			}
	})
}

//仿微博向下滚动

function weiboScroll(obj,num,height){
		var $obj = $(obj);
		var oNum = num ? num : 5;
		var oHeight = height ? height : "295px";


		$obj.each(function(){
				var $ul = $(this).find("ul");
				var liNum = $ul.find("li").length;
				$(this).hover(function(){
						clearInterval(scrtime);
				},function(){
						scrtime = setInterval(function(){
								if( liNum > oNum ){
										//鎵ц婊氬姩
										var liHeight = $ul.find("li:last").height();
										$ul.animate({ marginTop : liHeight + 20 +"px"},1000,function(){
												$ul.find("li:last").prependTo($ul);
												$ul.find("li:first").hide();
												$ul.css({marginTop:0});
												$ul.find("li:first").fadeIn(1000);
										});
								}
						},3000);
				}).trigger("mouseleave");
		});

}

function searchKyeCode(){
		var keyCode_array = [9,12,13,17,18,19,20,27,33,34,35,36,37,38,39,40,41,42,43,44,45,47,61]//Backspance ,Shift,绌烘牸涓嶅湪鍒�
		for(var i=105; i < 255; i++){
			keyCode_array.push(i)
		}
		//array[28] = 109;灏忛敭鐩橀摼鎺ョ嚎
		keyCode_array.splice(28,1);
		//array[91] = 173;宸﹂摼鎺ョ嚎
		keyCode_array.splice(91,1);
		return keyCode_array
}

//提示修改邮箱地址 20114年9月13日-16日 by 陈巧敏
function CheckEmailInfo(data) {
	$("#log-tip").remove();
	var info = $.parseJSON(data);
	var emailTip = '<div id="content_tips">'
			// +	'<p id="email_tip"class="emailTip" >亲爱的<span class="username"></span>，为了保证能及时获取我们最新的资讯和服务、以及参与活动，请尽快验证您的邮箱。<a id="resend">重发验证邮件</a> 或 <a class="email_add">修改邮箱地址。</a></p>'
		+ '<p id="email_tip" class="emailTip" >亲爱的<span class="username"></span>，为了保证能及时获取我们最新的资讯和服务、以及参与活动，请尽快验证您的邮箱。<a id="resend">重发验证邮件</a><a class="email_add" style="display:none;"></a></p>'
			// +	'<p id="send" class="emailTip" style="display:none">邮件已发送，您将很快能收到，请尽快登录邮箱进行验证！如果没有收到，请检查垃圾邮箱、<a href="http://bbs.elecfans.com/jishu_503095_1_1.html" target="_blank">设置elecfans.net为白名单</a> 或 <a class="email_add">修改邮箱地址。</a></p>'
		+ '<p id="send" class="emailTip" style="display:none">邮件已发送，您将很快能收到，请尽快登录邮箱进行验证！如果没有收到，请检查垃圾邮箱、<a href="http://bbs.elecfans.com/jishu_503095_1_1.html" target="_blank">设置elecfans.net为白名单</a><a class="email_add" style="display:none;"></a></p>' + '<p id="mod" class="emailTip" style="display:none">邮箱地址修改成功！我们已向你的邮箱 <span class="now_email"></span> 发送了一封验证邮件。请尽快登录邮箱进行验证！如果没有收到，请检查垃圾邮箱。</a></p>' + '<p id="email_send" class="email_notice" style="display:none">您已发送过验证邮件，请五分钟之后重发验证邮件或修改您的邮箱</p>' + '</div>' + '<div id="sendmail" style="display:none"></div>';

	var emailModTip = '<div id="email_mod" style="display:none">' + '<p class="mod_title">修改邮箱地址</p>' + '<form method="post" name="email-form" id="email-form" action="' + ElecfansApi_checkemail + '" autocomplete="off">' + '<ul>' + '<li>当前邮箱地址：<span class="now_email"></span></li>' + '<li class="error" id="email-error"></li>' + '<li>' + '<label for="article-email-mod">&nbsp;&nbsp;新邮箱地址：</label><input class="email-input" type="text" id="article-email-mod" placeholder="请尽量使用公司邮箱" name="newemail">' + '</li>' + '<li class="clearfix">' + '<input class="sub" id="email_sub" name="email_sub" value="确定" type="submit"/>' + '<input class="res eclose" id="email_res" name="email_res" value="取消" type="reset"/>' + '</li>' + '</ul>' + '</form>' + '<div class="email_close eclose"></div>' + '<div class="suc" style="display:none">' + '<p class="suc_title">邮件地址修改成功</p>' + '<p class="suc-tip">我们已向你的邮箱 <span class="now_email"></span>发送了一封验证邮件。</p>' + '<p class="suc-tip">请尽快登录邮箱进行验证！</p>' + '</div>' + '</div>' + '<div class="blackTip" style="display:none"></div>';
	var s_email = getCookie('s_email');
	var nowexp = new Date();
	var nowtime = nowexp.getTime();
	var settime = 5 * 60 * 1000;
	var send_cookie = false;
	if (s_email) {
		var timec = nowtime - s_email;
		if (timec < settime) {
			send_cookie = true;
		}
	}



	// 判断邮箱是否已经验证
	$.ajax({
		type: 'GET',
		url: 'http://passport.' + ELECFANS_DOMAIN + '/user/retriveEmailStatus/format/jsonp',
		dataType: 'jsonp',
		success: function(response) {
			if (response.error_code == 0) {
				var data = response.data;
				if (data['emailstatus'] != 1) {
					$("#top").after(emailTip);
					$("body").append(emailModTip);
					$('#email_tip').show();
					$('.username').html(info.username);
					$('.now_email').html(info.email);
					//判断有背景广告，就向下移
					if ($("#AD-background").length > 0) {
						$("#AD-background").css("top", "40px");
					}

					var sendemail = true;
					$('#resend').click(function() {
						if (send_cookie) {
							$('#email_send').show();
							$('#email_tip').hide();
						} else {
							if (sendemail === false) return;
							sendemail = false;
							$.ajax({
								type: 'GET',
								url: 'http://passport.' + ELECFANS_DOMAIN + '/user/resendRegValidateEmail/siteid/11/format/jsonp',
								dataType: 'jsonp',
								success: function(response) {
									if (response.error_code == 0) {
										$('#send').show().siblings().hide();
										setCookie('s_email', nowtime, 1, 'www.' + ELECFANS_DOMAIN);
									} else {
										alert(response.msg);
									}
								}
							});
						}
					});
					$('.email_add').click(function() {
						if (send_cookie) {
							$('#email_send').show();
							$('#email_tip').hide();
						} else {
							$('#email_mod').show();
							$('.blackTip').show();
						}
					});
					//关闭对修改框
					$('.eclose').click(function() {
						$('#email_mod').hide();
						$('.blackTip').hide();
					});

					var modErr = function(obj, text, display) {
						var display = display ? display : "block";
						$('#email-error').html(text).css({
							"display": display,
							"color": "#c00"
						});
					}

					var emailmod = $('#article-email-mod');
					var email_empty = '新邮箱地址不能为空';
					var email_err = '请输入有效的邮箱地址，如：qiuliang@elecfans.com';
					var email_exist = '输入的邮箱地址已注册';
					//新邮箱地址校验
					var emailRequest = function(formData, jqForm, options) {
						var emailmodVal = emailmod.val();
						if (emailmodVal.length > 0) {
							if (!emailmodVal.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)) {
								modErr(emailmod, email_err);
								emailmod.focus().addClass('red-input');
								return false;
							} else if (emailmodVal == info.email) {
								modErr(emailmod, '和原邮箱相同，请重新输入');
								emailmod.focus().addClass('red-input');
								return false;
							} else {
								$('#email_sub').val('发送中...').attr('disabled', 'disabled');
								//var queryString = $.param(formData);
								emailmod.removeClass('red-input');
								return true;
							}
						} else {
							modErr(emailmod, email_empty);
							emailmod.focus().addClass('red-input');
							return false;
						}
					}

					/*ajax修改后发送*/
					$("#email-form").ajaxForm({
						beforeSubmit: emailRequest,
						success: function(responseText, statusText) {
							$('#email_sub').val('确定').removeAttr('disabled');
							var r_msg = $.parseJSON(responseText);
							if (r_msg.status == 2) {
								modErr(emailmod, email_exist);
								emailmod.focus().addClass('red-input');
								return false;
							} else {
								var emailmodVal = emailmod.val();
								$('.now_email').html(emailmodVal);
								emailmod.removeClass('red-input');
								//@TODO 发送邮件
								$('#send').show().siblings().hide();
								setCookie('s_email', nowtime, 1, 'www.' + ELECFANS_DOMAIN);

								$('#mod').show().siblings().hide();
								$('.suc').show().siblings('#email-form').hide(); //发送成功之后弹出提示

								//发送邮件
								return true;
							}
						}
					}); //end ajaxForm

				}
			}
		}
	});
}
/**
 * JS 实现类似PHP的 in_array函数
 * @author liuping
 * @param  {[type]} needle    [description]
 * @param  {[type]} haystack  [description]
 * @param  {[type]} argStrict [description]
 * @return {[type]}           [description]
 */
function in_array(needle, haystack, argStrict) {
	var key = '',
		strict = !!argStrict;
	if (strict) {
		for (key in haystack) {
			if (haystack[key] === needle) {
				return true;
			}
		}
	} else {
		for (key in haystack) {
			if (haystack[key] == needle) {
				return true;
			}
		}
	}
	return false;
}
var ELECFANS_HOST = window.location.host;
var ELECFANS_DOMAIN_ARR = ELECFANS_HOST.split('.');
var ELECFANS_DOMAIN_LEN = ELECFANS_DOMAIN_ARR.length;
var ELECFANS_DOMAIN = ELECFANS_DOMAIN_ARR[(ELECFANS_DOMAIN_LEN - 2)] + '.' + ELECFANS_DOMAIN_ARR[(ELECFANS_DOMAIN_LEN - 1)];
var ELECFANS_BBS = 'http://bbs.' + ELECFANS_DOMAIN;
var ELECFANS_HOME = 'http://home.' + ELECFANS_DOMAIN;
//顶部弹出登录框-------
$("#btnLogin").on('click', function() {
	$.tActivityLogin();
	return false;
});
$(".notice").click(function () {
	$(this).find('span').hide();
});
//显示登录后信息
sLoginUid = 0;
sLoginUsername = '';
flagBindingQQ = false;
flagBindingWeibo = false;
if ($("#header .btn").length == 0) {
	$("#header .header").append('<a class="btn write_btn absolute-write">发文章</a>')
	setUserOpera();
}
function EchoLoginInfo(data) {
	var info = $.parseJSON(data),
		top_loginHtm = '',
		interflow = '.interflow';
	var msgTxt = '';
	if (info.msgnum > 0) {
		msgTxt = '<span class="grey9"  class="notice-num">' + info.msgnum + '</span>'

	}

	sLoginUid = info.uid;

	top_loginHtm += '<a id="searchToggle" class="pd8"><img style="width: 16px;" src="/d/public/images/u222.png" /> </a>' +
		'<a  class="pd8 write_btn "><img style="width: 16px;" src="/d/public/images/u225.png" title="写文章" /> 写文章</a> <div class="top-dropdown my-info clearfix">' + ' <div class="top-dropdown-toggle">'
		+ '<a href="' + ELECFANS_HOME + '" class="u-info"><img src="' + info.avatar + '" width="20" height="20"><strong class="u-name">' + info.username + '</strong></a>'
		+ '<span class="drop-icon"></span>' + '</div>' + '<ul class="top-dropdown-menu yahei">'
		+ '<li><a href="' + ELECFANS_HOME + '">我的中心</a></li>'
		+ '<li><a href="' + ELECFANS_BBS + '/user/' + sLoginUid + '/">我的主页</a></li>'
		+ '<li id="topMyColumn"><a href="/d/mp/mediatype">申请专栏</a></li>'
		+ '<li><a href="' + ELECFANS_BBS + '/user/' + sLoginUid + '/articles/' + '">我的文章</a></li>'
		+ '<li><a href="/member/mydata/">我的资料</a></li>'
		+ ( info.vip == 0 ? '<li><a href="http://www.elecfans.com/vip/#choose">开通VIP</a></li>':'<li><a href="http://bbs.elecfans.com/home.php?mod=spacecp&ac=vip">我的VIP</a></li>')
		+ '<li><a href="' + ELECFANS_BBS + '/home.php?mod=spacecp">账号设置</a></li>' +
		' <li><a  target="_self" href="' + ELECFANS_BBS + '/member.php?mod=logging&action=logout&refer=front">退出</a></li></ul>' + ' </div>' + ' <a class="notice" href="' + ELECFANS_BBS + '/home.php?mod=space&do=pm" >' + msgTxt + ' </a>';
	$(".apply-gzh").show();
	setTimeout(function(){
			$.ajax({
				url: check_allow,
				type: 'get',
				dataType: 'json',
				success: function (re) {
					if (re.error_code == 0) {
						var checkMpTime = setInterval(function () {
							if (mpStatus >= 0 || mpStatus == 'failed') {
								clearInterval(checkMpTime);
								if (mpStatus == 'failed' || mpStatus == '2' || mpStatus == '0') {
									if (mpStatus == '2') {
										$("#myColumn").show().find('.myGzh').attr('href', '/d/mp/message/status/2.html').html('申请专栏');
									} else {
										$("#myColumn").show().find('.myGzh').attr('href', '/d/mp/apply').html('申请专栏');
									}
								} else {
									$("#myColumn").show().find('.myGzh').attr('href', '/d/user/' + sLoginUid);
								}
							}
						}, 500)

						// window.open(add_url);
					}
				}
			});

			$("#myColumn").show().find('.myArt').attr('href', 'http://bbs.elecfans.com/user/' + sLoginUid + '/articles/');
		/*审核状态判读跳转*/
		mpStatus = -1;
		$.ajax({
			url:'/d/mp/checkStatus',
			type:'post',
			success:function(res){
				mpStatus = res.status;
				if(res.status==2){
					$("#topMyColumn a").attr('href', '/d/mp/message/status/2.html')
					$(".linkApply,.column-apply").attr('href', '/d/mp/message/status/2.html')
				} else if (res.status == 1) {
					$("#topMyColumn").html('<a href="/d/user/' + sLoginUid + '">我的专栏</a>')
					$(".HomeTop-requestBtn").remove();
				}
				/*如果没申请专栏显示入口*/
				$(".column-apply").unbind('click');
				if (res.status == 1) {
					$(".column-apply").hide();
				}
			}
		});



	},100);


	sLoginUsername = info.username;
	aUnionLogin = info['unionlogin'];
	flagBindingQQ = false;
	flagBindingWeibo = false;
	userinfo = info;
	if (in_array(1, aUnionLogin)) flagBindingQQ = true;
	if (in_array(2, aUnionLogin)) flagBindingWeibo = true;

	//顶部登录后信息
	$("#login-info").html(top_loginHtm).show();
	$("#bdcs").css('right', $("#login-info").width() + 'px');


	//判断用户是否为VIP用户
	//if(info.vip==0){
	//	var vipStr = '<div class="fr"><a class="vip-icon" href="http://vip.elecfans.com/" target="_blank" title="每天只需1块钱，玩转电子界人脉圈！" alt="每天只需1块钱，玩转电子界人脉圈！"></a></div>';
	//	$(vipStr).insertBefore('.my-info');
	//}else if(info.vip==1){
	//	var vStr = '<span class="v-icon" alt="VIP会员" title="VIP会员"></span>';
	//	$(vStr).insertBefore('.drop-icon');
	//}

	//顶部下拉菜单
	$(".top-dropdown").mouseDelay().hover(function() {
		$(".top-dropdown-menu").css("top", "23px");
	}, function() {
		$(".top-dropdown-menu").css("top", "-9999px");
	});
	//评论处登录信息
	if (typeof(article_detail_avatar)=="function" && $("#comment").length > 0) {
		var avatarUrl = article_detail_avatar(sLoginUid, 'middle');
		$('#comment-c-avatar').attr('src', avatarUrl);
		$('#comment-c-username').text(sLoginUsername);

		if (flagBindingWeibo) $('#share-weibo').prop('checked', true);
		if (flagBindingQQ) $('#share-qq').prop('checked', true);
	}
	$.unblockUI();
}

var isArticlePage = $("body").is(".article-page");
if (!isArticlePage) {
	CheckLogin();
}
/*
 *用于顶部下拉导航！
 */
(function(){
	var add_url = '/d/article/write/';
	/*发文章按钮跳转判断跳转*/

	// 有些页面引用了electag.js，也绑定了写文章判断登录事件，如果已经存在弹窗这里就不要再弹出登录
	var notBindEvent = true;
	var bindList = $._data(document,"events");
	if ( bindList && bindList.click ) {
		bindList = bindList.click;
	} else {
		bindList = [];
	}
	$.each(bindList,function(i,d){
		if ( d.namespace === "electag_write_art" ) {
			notBindEvent = false;
			return false;
		}
	});
	if ( notBindEvent ) {
		$(document).on('click.common_write_art', '.write_btn', function () {
			if ($("#btnLogin").length > 0) {
				$.tActivityLogin();
				return false;
			}
			if ($("#header .logo img").attr('src') == '/skin-2012/base2012/images/logo.png') {
				window.location.href = add_url + '/?article';
			} else {
				window.location.href = add_url;
			}
		});
	}

	$(".column-apply").click(function (e) {
		e.stopPropagation();
		$.tActivityLogin();
		return false;
	});
	var setHTML='\
<div class="sub_dis_wrap">\
    <h3 class="disTitle"><a href="http://www.elecfans.com/" target="_blank">电子发烧友</a></h3>\
    <ul class="disList">\
        <li><a href="http://www.elecfans.com/news/hangye/" target="_blank">电子新闻</a></li>\
        <li><a href="http://www.elecfans.com/soft/" target="_blank">资料下载</a></li>\
        <li><a href="http://www.elecfans.com/dianlutu/" target="_blank">电子电路</a></li>\
        <li><a href="http://www.elecfans.com/article/interview/" target="_blank">高端访谈</a></li>\
    </ul>\
    <ul class="disList">\
        <li><a href="http://www.elecfans.com/technical/all/" target="_blank">设计技术</a></li>\
        <li><a href="http://www.elecfans.com/application/" target="_blank">行业应用</a></li>\
        <li><a href="http://www.elecfans.com/tags/" target="_blank">电子标签</a></li>\
        <li><a href="http://www.elecfans.com/tekan/" target="_blank">电子特刊</a></li>\
    </ul>\
    <ul class="disList" style="margin-right: 0;">\
        <li><a href="http://bbs.elecfans.com/forum.php" target="_blank">工程师社区</a></li>\
        <li><a href="http://event.elecfans.com/index/seminar.html" target="_blank">技术研讨会</a></li>\
        <li><a href="http://webinar.elecfans.com/" target="_blank">在线研讨会</a></li>\
        <li><a href="http://www.elecfans.com/yuanqijian/" target="_blank">电子元器件</a></li>\
    </ul>\
</div>\
<div class="sub_dis_wrap">\
    <h3 class="disTitle"><a>特色服务</a></h3>\
    <ul class="disList">\
        <li><a href="http://bbs.elecfans.com/try.html" target="_blank">开发板试用</a></li>\
        <li><a href="http://z.elecfans.com/" target="_blank">聚丰众筹</a></li>\
        <li><a href="http://www.elecfans.com/d" target="_blank">电子说</a></li>\
        <li><a href="http://www.elecfans.com/tools/" target="_blank">在线工具</a></li>\
    </ul>\
    <ul class="disList" style="margin-right: 0;">\
        <li><a href="http://t.elecfans.com/" target="_blank">发烧友学院</a></li>\
        <li><a href="http://www.elecfans.com/d/column" target="_blank">专栏</a></li>\
        <li><a href="http://pdf.elecfans.com/" target="_blank">Datasheet查询</a></li>\
        <li><a href="http://bbs.elecfans.com/" target="_blank">电子问答</a></li>\
    </ul>\
</div>\
<div class="sub_dis_wrap">\
    <h3 class="disTitle"><a href="http://www.hqpcb.com/" target="_blank">华强PCB</a></h3>\
    <ul class="disList" style="margin-right: 0;">\
        <li><a href="http://www.hqpcb.com/online.html" target="_blank">在线算价</a></li>\
        <li><a href="http://www.hqpcb.com/pay.html" target="_blank">付款方式</a></li>\
        <li><a href="http://www.hqpcb.com/orderstep.html" target="_blank">下单流程</a></li>\
        <li><a href="http://www.hqpcb.com/product.html" target="_blank">产品展示</a></li>\
    </ul>\
</div>\
<div class="sub_dis_wrap" style="border-right: 0;">\
    <h3 class="disTitle"><a href="http://www.hqchip.com/" target="_blank">华强芯城</a></h3>\
    <ul class="disList">\
        <li><a href="http://www.hqchip.com/" target="_blank">元器件搜索</a></li>\
        <li><a href="http://www.hqchip.com/fangan/" target="_blank">方案中心</a></li>\
        <li><a href="http://www.hqchip.com/mozu/" target="_blank">模组专区</a></li>\
        <li><a href="http://www.hqchip.com/promote/" target="_blank">现货库存</a></li>\
    </ul>\
    <ul class="disList" style="margin-right: 0;">\
        <li><a href="http://www.hqchip.com/glist/all_cate.html" target="_blank">元器件分类</a></li>\
        <li><a href="http://www.hqchip.com/kaifaban/" target="_blank">开发板专区</a></li>\
        <li><a href="http://www.hqchip.com/bom/" target="_blank">BOM服务</a></li>\
        <li><a href="http://bbs.elecfans.com/forum.php?gid=263" target="_blank">原厂专区</a></li>\
    </ul>\
</div>\
';


	try{
		document.querySelector("#website_nav").innerHTML=setHTML;
	}catch(e){
		try {
			document.getElementById("website_nav").innerHTML=setHTML;
		} catch(e) {

		}
	}

})();
/*设置导航按钮位置*/
function setUserOpera() {
	var getWinWid = $(window).width() > 1000 ? $(window).width() : 1000;
	if (getWinWid > 1250) {
		$("#myColumn").css('left', (getWinWid - 1000) / 2 + 1000 - 86 - 28 - 115 + 'px').show();
		$(".apply-gzh").css('left', (getWinWid - 1000) / 2 + 1000 - 86 - 36 + 'px').width(65).show();
		$(".absolute-write").css('left', 1000 - 336 + $(".header .logo").width() + 'px').show();
	}

}
(function ($) {
	$.fn.switchBanner = function () {
		var setTime = 5000; //设置延时
		// banner切换初始化
		var Banner = $(this);
		var length = Banner.find('li').length;
		var control = '';
		control += '<p><span class="now"></span>';
		for (var i = 1; i < length; i++) {
			control += '<span></span>';
		}
		control += '</p>';
		control = $(control);
		Banner = Banner.append(control);
		Banner.find('li').eq(0).addClass('nowImg').css('z-index', '2');
		// 自动滚动
		timer = setInterval(slideBanner, setTime);
		// 设置手动滚动标志
		handSlide = false;
		// 鼠标切换滚动
		Banner.on('mouseover', 'span', function () {
			var self = $(this);
			var index = self.index();
			var parent = self.parent();
			handSlide = true;
			parent.find('span').removeClass('now').eq(index).addClass('now');
			slideBanner();
		});
		// hover 停止继续滚动
		Banner.hover(function () {
			clearInterval(timer);
			handSlide = true;
		}, function () {
			clearInterval(timer);
			timer = setInterval(slideBanner, setTime);
			handSlide = false;
		});

		// banner切换函数
		function slideBanner() {
			var span = control.find('span');
			var li = Banner.find('li');
			var index = control.find('.now').index();
			var next = (index + 1) >= li.length ? 0 : index + 1;
			var nowli = Banner.find('.nowImg');

			if (handSlide) {
				li.children('a').removeClass('active');
				li.eq(index).children('a').addClass('active');
			} else {
				span.removeClass('now').eq(next).addClass('now');
				li.children('a').removeClass('active');
				li.eq(next).children('a').addClass('active');
			}

			li.css('z-index', 0);
			nowli.css('z-index', 2);
			if (handSlide) {
				li.eq(index).css('z-index', 1);
			} else {
				li.eq(next).css('z-index', 1);
			}

			nowli.stop(true, false).animate({
				'opacity': 0
			}, 300, function () {
				nowli.css({
					'z-index': 0,
					'opacity': 1
				});
				if (handSlide) {
					li.removeClass('nowImg').eq(index).addClass('nowImg');
				} else {
					li.removeClass('nowImg').eq(next).addClass('nowImg');
				}
			});
		}
	}
})(jQuery);
$("#indexBanner").switchBanner();
$(window).resize(function () {
	setUserOpera();
});
/*点击任意地方 隐藏搜索框*/
$(document).on('click', function () {
	$("#bdcs").hide();
});
/*搜索框提交  内容清空*/
// $("#bdcs-search-form").submit(function () {
	// $("#bdcs-search-form-input").val("");
// });
$("#bdcs").click(function (e) {
	e.stopPropagation();
});
/*搜索框为空 点击不提交*/
$("#bdcs-search-form-submit").click(function (e) {
	if ($.trim($("#bdcs-search-form-input").val()) == "") {
		e.stopPropagation();
		e.preventDefault();
	}
});
// 正文图片放大
$.getScript('http://skin.elecfans.com/js/plugins/jquery.lightbox.min-0.5.js', function () {
	$('head').append('<link rel="stylesheet" href="http://skin.elecfans.com/js/plugins/jquery.lightbox-0.5.css"></link>')
	$('.article-content img').each(function () {

		var $t = $(this);
		// 过滤掉有超链的图片
		if (!$t.parent().is('a')) {
			$t.wrap('<a href="' + $t.attr('src') + '" rel="lightbox-img"></a>');
		}
	});
	$('.article-content [rel="lightbox-img"]').lightBox({});
});
function openX_ad(posterid, htmlid, width, height) {
	if ($(htmlid).length > 0) {
		var randomnumber = Math.random();
		var now_url = encodeURIComponent(window.location.href);
		var ga = document.createElement('iframe');
		ga.src = 'http://www1.elecfans.com/www/delivery/myafr.php?target=_blank&cb=' + randomnumber + '&zoneid=' + posterid+'&prefer='+now_url;
		ga.width = width;
		ga.height = height;
		ga.frameBorder = 0;
		ga.scrolling = 'no';
		var s = $(htmlid).append(ga);
	}
}

// //在pId页面新增iot广告
// $('#new-ic-berry, #new-adsm-berry').before(
//     '<div style="position: relative;width: 300px;margin-bottom: 0px;padding: 0">'+
//         '<a style="display: inline-block;" href="http://www.elecfans.com/topic/iot2018/agenda.html?hp300-150"  target="_blank">'+
//             '<img style="vertical-align: bottom;" src="/skin-2012/images/u120.png">'+
//         '</a>'+
//         '<div style="position: absolute;bottom: 20px;margin-left: 25px;cursor: pointer">'+
//             '<a target="_blank" class="iot_btn" href="http://www.elecfans.com/topic/iot2018/awards_i_h.html?hp300-150" style="box-shadow: 0px 4px 8px 0px rgba(0, 0, 153, 0.349019607843137) inset;margin-right: 10px;text-decoration:none;display:inline-block;border-radius:5px;color: #fff; font-size: 14px;text-align: center;width: 120px;height: 35px;background: rgba(0, 183, 238, 1);line-height: 35px">'+
//             '<img style="width: 20px;margin-right:5px;vertical-align: sub;" src="/skin-2012/images/u10.png" />创新奖投票</a>'+
//             '<a target="_blank" class="iot_btn" href="http://www.elecfans.com/topic/iot2018/apply_choose.html?hp300-150" style="box-shadow: 0px 4px 8px 0px rgba(153, 0, 0, 0.349019607843137) inset;text-decoration:none;display:inline-block;border-radius:5px;color: #fff; font-size: 14px;text-align: center;width: 120px;height: 35px;background: rgba(235, 51, 115, 1);line-height: 35px">'+
//             '<img style="width: 20px;margin-right:5px;vertical-align: sub;" src="/skin-2012/images/u12.png" />报名参会</a>'+
//         '</div>'+
//     '</div>'
// )
// $('.iot_btn').hover(function(){
//   this.style.textDecoration = 'underline'
// }, function(){
//   this.style.textDecoration = 'none'
// })

/* 添加20181212 广告 */
// $(".simditor-body").after('<div style="margin: 10px 0;"><a href="http://www.hqchip.com/app"><img src="/skin-2012/images/20181212ad_d.png?v2"/></a></div>')
//


//新增两条广告文字链
$(".article-info").after('<div style="width:672px;padding: 10px 12px;"><a style="background:#F2F2F2;" target="_blank" href="http://www.hqchip.com/bom.html?txt">如何用2秒配齐元器件BOM？>>BOM一键配单</a><a style="float:right;background:#F2F2F2;" target="_blank" href="http://www.hqpcb.com/activity/groupbuy2019?elecfans_article">双面批量最低88折,板费308元/平米.十年做板,品质为先>>极速计价</a></div>')