jQuery(document).ready(function($){
	var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	
	// 顶部搜索框
	var tgWidth = $('#toggler').width();
	$('#tg-s').click(function() { // jQuery 1.8 去除了 toggle() 方法
		if (!$(this).hasClass('tg-actived')) {
			$('#searchform-top').animate({width: '196px'}, 210);
			$('#toggler').animate({width: '0'}, 210);
			$('#tg-s a').css('color', '#FFF');
			$(this).addClass('tg-actived');
		} else {
			$('#searchform-top').animate({width: '0'}, 210);
			$('#toggler').animate({width: tgWidth}, 210);
			$('#tg-s a').css('color', '');
			$(this).removeClass('tg-actived');
		}
	});

	// 响应式顶部二级菜单，针对移动端触控操作优化
	var listenHoverIntent = function(){
		$('.topmenu .menu-item:has(.sub-menu) > a').click(function(event) {
			if (!$(this).parent().hasClass('touched')) {
				event.preventDefault();
			}
		});
		$('.topmenu .menu-item:has(.sub-menu)').hoverIntent({
			over: function() {
				$(this).find('.sub-menu').stop().slideDown(210);
				$(this).addClass('touched');
			},
			out: function() {
				$(this).find('.sub-menu').stop().slideUp(210);
				$(this).removeClass('touched');
			},
			timeout: 180,
			sensitivity: 7,
			interval: 100
		});
	};
	listenHoverIntent();
	
	$('#tg-m').click(function(){
		if (!$(this).hasClass('tg-actived')) {
			$('.topmenu').slideDown(210);
			$('#tg-m a').css('color', '#FFF');
			$(this).addClass('tg-actived');
		} else {
			$('.topmenu').slideUp(210);
			$('#tg-m a').css('color', '');
			$(this).removeClass('tg-actived');
		}
	});
	
	// 使“阅读更多”链接独占一行
	$('.more-link').before('<p>').after('</p>');

	// Ajax Reply
	jQuery.fn.ajaxReply = function(){
		$(this).click(function(){
			var c = $(this).parent().parent().find(".comment-author").text();
			$("#comment").attr("value", "回复 " + c + ": ").focus();
		}),
		$("#cancel-comment-reply-link").click(function(){
			$("#comment").attr("value", "");
		});
	};
	$(".comment-reply-link").ajaxReply();

	// Ajax 评论分页
	if ($('body').hasClass('comments-ajax-page')) {
		$(document).on('click', '.comments-nav a', function(e){
			e.preventDefault();
			$.ajax({
				type: "GET",
				url: $(this).attr('href'),
				beforeSend: function(){
					$('.cancel-comment-reply-link').click();
					$('.comments-nav').remove();
					$('.comment-list').remove();
					$('#loading-comments').slideDown();
					$body.animate({scrollTop: $('#loading-comments').offset().top - 70}, 490);
				},
				dataType: "html",
				success: function(out){
					var result = $(out).find('.comment-list');
					var nextlink = $(out).find('.comments-nav');
					$('#loading-comments').slideUp('fast');
					$('#loading-comments').after(result.fadeIn(400));
					$('.comment-list').after(nextlink);
					$(".comment-reply-link").ajaxReply();
				}
			});
		});
	}

	// 固定小工具容器
	$('#container').css('min-height', $('#sidebar').height() + 'px');
	var topHeight = $('#wpadminbar').height() + 21,
		footerHeight = $('#foot').outerHeight() + 42;
	$.lockfixed('#sbpin', {offset: {top: topHeight, bottom: footerHeight}});

	// 计算滚动条宽度
	var oP = document.createElement('p'),
		styles = {
			width: '100px',
			height: '1px',
			overflowY: 'scroll'
		}, i, scrollbarWidth;
	for (i in styles) oP.style[i] = styles[i];
	document.body.appendChild(oP);
	scrollbarWidth = oP.offsetWidth - oP.clientWidth;
	document.body.removeChild(oP);

	// 窗口大小调整时需要重绘的样式
	$(window).resize(function(){
		$('#sbpin').css('width', $('#sbnormal').width() + 'px');
		if ($(document).width() + scrollbarWidth >= 600) {
			$('.topmenu').show();
		} else {
			$('.topmenu').hide();
		}
	});

	// Unslider
	$('.banner').unslider({speed: 490, delay: 3500, keys: true, dots: true, fluid: true});
	
	// iCheck
	iCheckInit($);

	// 返回顶部
	$(document).on('click', '#gotop', function() {
		$body.animate({scrollTop: 0}, 700, 'easeOutQuad');
	});
	
	// 全站 pushState + Ajax
	var ps =
		window.history && window.history.pushState && window.history.replaceState &&
		// pushState isn't reliable on iOS until 5.
		!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
	// 以上判断代码来自 jQuery.pjax
	
	var reloadJs = function(file) {
		var rj = $('script[role="reload"]');
		for (i = 0; i < rj.length; i++) {
			alert(rj.eq(i).attr('src'))
			$.getScript(rj.eq(i).attr('src'));
		}
	};
	var triggleAction = function() {
		listenPop();
		listenHoverIntent();
		iCheckInit($);
		if ($('body').hasClass('comments-ajax-post')) listenSubmit($);
		$('.more-link').before('<p>').after('</p>');
		$(".comment-reply-link").ajaxReply();
		$.lockfixed('#sbpin', {offset: {top: topHeight, bottom: footerHeight}});
		$('#container').css('min-height', $('#sidebar').height() + 'px');
		eval(trigglerList);
	}
	var pjaxLoad = function(url, position, state) {
		$.ajax({
			type: "GET",
			url: url,
			beforeSend: function(){
				nanobar.go(35);
			},
			dataType: "html",
			success: function(r){
				if (state) history.pushState(state, "", url);
				document.title = $(r).filter('title').text();
				$('#container').replaceWith($(r).find('#container'));
				$('.topmenu').replaceWith($(r).find('.topmenu'));
				// 移动端点击后收起菜单
				if ($(document).width() + scrollbarWidth < 600) {
					$('.topmenu, .sub-menu').slideUp(210);
				}
				if (typeof(position) == 'number') {
					$body.animate({scrollTop: position}, 490);
				} else if (typeof(position) == 'string') {
					$body.animate({scrollTop: $(position).offset().top - 70}, 490);
				}
				nanobar.go(100);
				triggleAction();
				//reloadJs();
			},
			error: function(){
				nanobar.go(1);
			},
		});
	};
	
	if (ps && $('body').hasClass('pjax')) {
		var selecters = '.post-title a';
			selecters += ', .post-meta a';
			selecters += ', a.more-link';
			selecters += ', .post-pagenavi a';
			selecters += ', #p-nav a';
			selecters += ', #sb a:not(#sb .widget_meta a)';
			selecters += ', #footsb a:not(#footsb .widget_meta a)';
			selecters += ', .logo a';
			selecters += ', .topmenu a';
			selecters += ', #breadcrumbs a';
		$(document).on('click', selecters, function(e){
			var td = $(this)[0];
			if ((td.target) == '_balnk') return;
			if (td.host != location.host || wpau.test(td.href)) return;
			if ($(this).parent().hasClass('menu-item-has-children') && !$(this).parent().hasClass('touched')) return;
			e.preventDefault();
			var u = td.href,
				h = td.hash,
				s = {
					title: document.title,
					url: window.location.href,
					offset: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
				};
			if (h) {
				pjaxLoad(u, h, s);
			} else {
				pjaxLoad(u, 0, s);
			}
		});
		var listenPop = function() {
			$(window).off("popstate");
			var s = history.state;
			if (s) {
				$(window).on("popstate", function(e) {
					pjaxLoad(s.url, s.offset);
				});
			}
		};
	}
});
