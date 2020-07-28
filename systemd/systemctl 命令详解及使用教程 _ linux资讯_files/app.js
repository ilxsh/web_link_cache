function getQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var url=decodeURI(decodeURI(window.location.search))  
    var r = url.substr(1).match(reg);  
    if (r != null) return unescape(r[2]); return null;  
}

try{
  window.top.location.hostname;
    if (top.location.hostname != window.location.hostname)
    {
     top.location.href =window.location.href;
    }
}
catch(e){
   top.location.href =window.location.href;
}

// Copyright (c) 1996-1997 Athenia Associates.
// http://www.webreference.com/js/
// License is granted if and only if this entire
// copyright notice is included. By Tomer Shiran.

function setCookie (name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + (expires ? "; expires=" + expires : "") +
        (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + (secure ? "secure" : "");
    document.cookie = curCookie;
}

function getCookie (name) {
    var prefix = name + '=';
    var c = document.cookie;
    var nullstring = '';
    var cookieStartIndex = c.indexOf(prefix);
    if (cookieStartIndex == -1)
        return nullstring;
    var cookieEndIndex = c.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1)
        cookieEndIndex = c.length;
    return unescape(c.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie (name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
}

function fixDate (date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0)
        date.setTime(date.getTime() - skew);
}

function rememberMe (f) {
    var now = new Date();
    fixDate(now);
    now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
    now = now.toGMTString();
    if (f.author != undefined)
       setCookie('mtcmtauth', f.author.value, now, '/', '', '');
    if (f.email != undefined)
       setCookie('mtcmtmail', f.email.value, now, '/', '', '');
    if (f.url != undefined)
       setCookie('mtcmthome', f.url.value, now, '/', '', '');
}

function forgetMe (f) {
    deleteCookie('mtcmtmail', '/', '');
    deleteCookie('mtcmthome', '/', '');
    deleteCookie('mtcmtauth', '/', '');
    f.email.value = '';
    f.author.value = '';
    f.url.value = '';
}

function hideDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function showDocumentElement(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'block';
}

var commenter_name;

function individualArchivesOnLoad(commenter_name) {

    hideDocumentElement('trackbacks-info');
	
    if (document.comments_form) {
        if (document.comments_form.email != undefined &&
            (mtcmtmail = getCookie("mtcmtmail")))
            document.comments_form.email.value = mtcmtmail;
        if (document.comments_form.author != undefined &&
            (mtcmtauth = getCookie("mtcmtauth")))
            document.comments_form.author.value = mtcmtauth;
        if (document.comments_form.url != undefined &&
            (mtcmthome = getCookie("mtcmthome")))
            document.comments_form.url.value = mtcmthome;
        if (mtcmtauth || mtcmthome) {
            document.comments_form.bakecookie.checked = true;
        } else {
            document.comments_form.bakecookie.checked = false;
        }
    }
}

function writeTypeKeyGreeting(commenter_name, entry_id) {

}

function RemoveBlockquote(strText)
{
 var regEx = /<blockquote>(.|\n|\r)*<\/blockquote>/ig;
 regEx.multiline=true;
 return strText.replace(regEx, "");
}

function RemoveHTML(strText)
{
 var regEx = /<[^>]*>/g;
 return strText.replace(regEx, "");
}

function CommentQuote(v,f) {
	
window.location.href=window.location.href+"#comment-text";

string=document.forms["comments_form"].text.value;
string2=ignoreSpaces(RemoveHTML(RemoveBlockquote(document.getElementById(v).innerHTML)));
document.forms["comments_form"].text.value="<blockquote>\n<pre>引用"+f+"的发言：</pre>\n"+string2+"\n</blockquote>\n\n"+string;

return true;
}

function ignoreSpaces(string) {
	var temp = "";
	string = '' + string;
	splitstring = string.split("  "); //双引号之间是个空格；
	for(i = 0; i < splitstring.length; i++)
	temp += splitstring[i];
	return temp;
}

var bar = 0;
var line = "||";
var amount ="||";

function pleaseWait() {
	if(document.getElementById('comment-text').value.length>1200){
		alert('留言请勿超过1200字！');
		return false;
	}

	if(!document.forms["comments_form"].author.value){
		alert('请填写“您的大名”！');
		return false;
	}

	if(document.forms["comments_form"].email.value.length<7 || document.forms["comments_form"].email.value.indexOf("@")==-1){
		alert('请正确填写电子邮件地址！');
		return false;
	}

	if(document.getElementById('comment-text').value.length<2){
		alert('留言不得为空！');
		return false;
	}

	document.getElementById("comment-submit").style.visibility="hidden";
	document.getElementById("wait").style.display="block";stick_count();
	if (document.forms["comments_form"].armor){
		ocument.forms["comments_form"].armor.value = '493b793496197fb44387464d8c8c8cb4091a0b94';
	}
	return true;
}


function stick_count(){
	bar= bar+2;
	amount =amount + line;
	document.forms["comments_form"].chart.value=amount;
	document.forms["comments_form"].percent.value=bar+"%";
	if (bar<99)
	{setTimeout("stick_count()",200);}
	else
	{}
}


var MT ={};

document.addEventListener("DOMContentLoaded", function(event) {
   individualArchivesOnLoad(commenter_name);
});
function isMobile() {
    var userAgentInfo = navigator.userAgent;

    var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

    var mobile_flag = false;

    //根据userAgent判断是否是手机
    for (var v = 0; v < mobileAgents.length; v++) {
        if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
            mobile_flag = true;
            break;
        }
    }

     var screen_width = window.screen.width;
     var screen_height = window.screen.height;    

     //根据屏幕分辨率判断是否是手机
     if(screen_width < 500 && screen_height < 800){
         mobile_flag = true;
     }

     return mobile_flag;
}
$(function(){
	$(".page_slider .slider_tab").on("click","div",function(){
		$(".slider_tab div").each(function(){
			$(this).removeClass("motup motup-green");
		});
		$(".slider_main").hide();
		var index = $(this).attr("target");
		$(this).addClass("motup motup-green");
		$(".page_slider .slider_main:eq("+index+")").show();
	});

	$(".logs_main").on("click",function(){
		$(this).children(".logs").toggle();
	});
	
	$("#tabbar").on("click","li",function(){
		var index = $(this).attr("index");
		var target = $(this).attr("target");
		var len = $("#tabbar li").length;
		if(target!=undefined){
			let a = $("<a href='"+target+"' target='_blank'></a>").get(0);  
			let e = document.createEvent('MouseEvents');  
			e.initEvent( 'click', true, true );  
			a.dispatchEvent(e);  
		}else{
			$("#tabbar li").each(function(){
				$(this).removeClass("active");
			});
			for(var i=0;i<len;i++){
				$(".edreview:eq("+i+")").hide();
			}
			$(this).addClass("active");
		}
		if(index>=0){
			$(this).addClass("active");
			$(".edreview:eq("+index+")").show();
			$(".edreview:eq("+index+") .slide img").each(function(){
				console.log("src="+$(this).src);
				console.log("imgurl="+$(this).attr("imgurl"));
				$(this).attr("src",$(this).attr("imgurl"));
			});
		}
	});
	$('video').bind('contextmenu',function() { return false; });
	$("#sh_tool").bind("click",function(){
		console.log($("#sh_tool").text());
		if($("#sh_tool").text()=="显示全部目录"){
			console.log("dddddd");
			$("#booklist").removeClass("sh_pre");
			$("#sh_tool").html("收起全部目录");
		}else if($("#sh_tool").text()=="收起全部目录"){
			$("#booklist").addClass("sh_pre");
			$("#sh_tool").html("显示全部目录");
		}
	});
	$(".docomment").bind('click',function(){
		$("#authcode_img").attr("src","../common/authcode?t=" + new Date().getTime());
		$(".comments-post").show();
		$(this).hide();
	});
	$(".nav-toggle").on('click',function(){
		if($('.nav').is(':hidden')){
			$(".nav").show();
			$(this).html('<i class="iconfont ic-unfollow">');
		}else{
			$(".nav").hide();
			$(this).html('<i class="iconfont ic-catalog"></i>');
		}
	});
	$("#showmore").on('click',function(){
		if($("#showmore td").text()=="隐藏更多"){
			$("#showmore td").text("查看更多")
		}else{
			$("#showmore td").text("隐藏更多")
		}
		$("#downlinks tr").each(function(idx,ele){
			if(idx>1){
				if($(this).is(":hidden")){
					$(this).show(500);
				}else{
					$(this).hide(500);
				}
			}
		});
		$("#downlinks tr").last().show(500);
	});
	
	if(!isMobile()&&$('#fixad').length > 0){
    var sliderbarHeight = $(".sliderbar").height();
    var sliderbarOffSetTop = $(".sliderbar").offset().top;
    var fixadHeight = $("#fixad").height();
    var fixadOffSetTop = $("#fixad").prev().offset().top + $("#fixad").prev().height();
		$(window).scroll(function(){	
      var scrollHeight = $(this).scrollTop();
      if(scrollHeight >= fixadOffSetTop ){
        if((scrollHeight + fixadHeight) <= (sliderbarOffSetTop + sliderbarHeight)){
          $('#fixad').css({'position':'fixed','top':0});		
        }else{
          $("#fixad").css({"position":"fixed","top":(sliderbarOffSetTop + sliderbarHeight - scrollHeight - fixadHeight -40)});
        }
      }else{
        $('#fixad').css({'position':'static','top':0});   
      }
		});
	}
});
/**
 * jQuery jPages v0.7
 * Client side pagination with jQuery
 * http://luis-almeida.github.com/jPages
 *
 * Licensed under the MIT license.
 * Copyright 2012 Luís Almeida
 * https://github.com/luis-almeida
 */

;
(function($, window, document, undefined) {
    var name = "jPages",
        instance = null,
        defaults = {
            containerID: "",
            first: false,
            previous: "‹",
            next: "›",
            last: false,
            links: "numeric",
            startPage: 1,
            perPage: 10,
            midRange: 5,
            startRange: 1,
            endRange: 1,
            keyBrowse: false,
            scrollBrowse: false,
            pause: 0,
            clickStop: false,
            delay: 50,
            direction: "forward",
            animation: "",
            fallback: 400,
            minHeight: true,
            callback: undefined
        };
    function Plugin(element, options) {
        this.options = $.extend({}, defaults, options);
        this._container = $("#" + this.options.containerID);
        if (!this._container.length)
            return;
        this.jQwindow = $(window);
        this.jQdocument = $(document);
        this._holder = $(element);
        this._nav = {};
        this._first = $(this.options.first);
        this._previous = $(this.options.previous);
        this._next = $(this.options.next);
        this._last = $(this.options.last);
        this._items = this._container.children(":visible");
        this._itemsShowing = $([]);
        this._itemsHiding = $([]);
        this._numPages = Math.ceil(this._items.length / this.options.perPage);
        this._currentPageNum = this.options.startPage;
        this._clicked = false;
        this._cssAnimSupport = this.getCSSAnimationSupport();
        this.init();
    }
    Plugin.prototype = {
        constructor: Plugin,
        getCSSAnimationSupport: function() {
            var animation = false,
                animationstring = 'animation',
                keyframeprefix = '',
                domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
                pfx = '',
                elm = this._container.get(0);
            if (elm.style.animationName)
                animation = true;
            if (animation === false) {
                for (var i = 0; i < domPrefixes.length; i++) {
                    if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                        pfx = domPrefixes[i];
                        animationstring = pfx + 'Animation';
                        keyframeprefix = '-' + pfx.toLowerCase() + '-';
                        animation = true;
                        break;
                    }
                }
            }
            return animation;
        },
        init: function() {
            this.setStyles();
            this.setNav();
            this.paginate(this._currentPageNum);
            this.setMinHeight();
        },
        setStyles: function() {
            var requiredStyles = "<style>" + ".jp-invisible { visibility: hidden !important; } " + ".jp-hidden { display: none !important; }" + "</style>";
            $(requiredStyles).appendTo("head");
            if (this._cssAnimSupport && this.options.animation.length)
                this._items.addClass("animated jp-hidden");
            else
                this._items.hide();
        },
        setNav: function() {
            var navhtml = this.writeNav();
            this._holder.each(this.bind(function(index, element) {
                var holder = $(element);
                holder.html(navhtml);
                this.cacheNavElements(holder, index);
                this.bindNavHandlers(index);
                this.disableNavSelection(element);
            }, this));
            if (this.options.keyBrowse)
                this.bindNavKeyBrowse();
            if (this.options.scrollBrowse)
                this.bindNavScrollBrowse();
        },
        writeNav: function() {
            var i = 1,
                navhtml;
            navhtml = this.writeBtn("first") + this.writeBtn("previous");
            for (; i <= this._numPages; i++) {
                if (i === 1 && this.options.startRange === 0)
                    navhtml += "<span>...</span>";
                if (i > this.options.startRange && i <= this._numPages - this.options.endRange)
                    navhtml += "<a href='#' class='jp-hidden'>";
                else
                    navhtml += "<a>";
                switch (this.options.links) {
                case "numeric":
                    navhtml += i;
                    break;
                case "blank":
                    break;
                case "title":
                    var title = this._items.eq(i - 1).attr("data-title");
                    navhtml += title !== undefined ? title : "";
                    break;
                }
                navhtml += "</a>";
                if (i === this.options.startRange || i === this._numPages - this.options.endRange)
                    navhtml += "<span>...</span>";
            }
            navhtml += this.writeBtn("next") + this.writeBtn("last") + "</div>";
            return navhtml;
        },
        writeBtn: function(which) {
            return this.options[which] !== false && !$(this["_" + which]).length ? "<a class='jp-" + which + "'>" + this.options[which] + "</a>" : "";
        },
        cacheNavElements: function(holder, index) {
            this._nav[index] = {};
            this._nav[index].holder = holder;
            this._nav[index].first = this._first.length ? this._first : this._nav[index].holder.find("a.jp-first");
            this._nav[index].previous = this._previous.length ? this._previous : this._nav[index].holder.find("a.jp-previous");
            this._nav[index].next = this._next.length ? this._next : this._nav[index].holder.find("a.jp-next");
            this._nav[index].last = this._last.length ? this._last : this._nav[index].holder.find("a.jp-last");
            this._nav[index].fstBreak = this._nav[index].holder.find("span:first");
            this._nav[index].lstBreak = this._nav[index].holder.find("span:last");
            this._nav[index].pages = this._nav[index].holder.find("a").not(".jp-first, .jp-previous, .jp-next, .jp-last");
            this._nav[index].permPages = this._nav[index].pages.slice(0, this.options.startRange).add(this._nav[index].pages.slice(this._numPages - this.options.endRange, this._numPages));
            this._nav[index].pagesShowing = $([]);
            this._nav[index].currentPage = $([]);
        },
        bindNavHandlers: function(index) {
            var nav = this._nav[index];
            nav.holder.bind("click.jPages", this.bind(function(evt) {
                var newPage = this.getNewPage(nav, $(evt.target));
                if (this.validNewPage(newPage)) {
                    this._clicked = true;
                    this.paginate(newPage);
                }
                evt.preventDefault();
            }, this));
            if (this._first.length) {
                this._first.bind("click.jPages", this.bind(function() {
                    if (this.validNewPage(1)) {
                        this._clicked = true;
                        this.paginate(1);
                    }
                }, this));
            }
            if (this._previous.length) {
                this._previous.bind("click.jPages", this.bind(function() {
                    var newPage = this._currentPageNum - 1;
                    if (this.validNewPage(newPage)) {
                        this._clicked = true;
                        this.paginate(newPage);
                    }
                }, this));
            }
            if (this._next.length) {
                this._next.bind("click.jPages", this.bind(function() {
                    var newPage = this._currentPageNum + 1;
                    if (this.validNewPage(newPage)) {
                        this._clicked = true;
                        this.paginate(newPage);
                    }
                }, this));
            }
            if (this._last.length) {
                this._last.bind("click.jPages", this.bind(function() {
                    if (this.validNewPage(this._numPages)) {
                        this._clicked = true;
                        this.paginate(this._numPages);
                    }
                }, this));
            }
        },
        disableNavSelection: function(element) {
            if (typeof element.onselectstart != "undefined")
                element.onselectstart = function() {
                    return false;
                };
            else if (typeof element.style.MozUserSelect != "undefined")
                element.style.MozUserSelect = "none";
            else
                element.onmousedown = function() {
                    return false;
                };
        },
        bindNavKeyBrowse: function() {
            this.jQdocument.bind("keydown.jPages", this.bind(function(evt) {
                var target = evt.target.nodeName.toLowerCase();
                if (this.elemScrolledIntoView() && target !== "input" && target != "textarea") {
                    var newPage = this._currentPageNum;
                    if (evt.which == 37)
                        newPage = this._currentPageNum - 1;
                    if (evt.which == 39)
                        newPage = this._currentPageNum + 1;
                    if (this.validNewPage(newPage)) {
                        this._clicked = true;
                        this.paginate(newPage);
                    }
                }
            }, this));
        },
        elemScrolledIntoView: function() {
            var docViewTop,
                docViewBottom,
                elemTop,
                elemBottom;
            docViewTop = this.jQwindow.scrollTop();
            docViewBottom = docViewTop + this.jQwindow.height();
            elemTop = this._container.offset().top;
            elemBottom = elemTop + this._container.height();
            return ( (elemBottom >= docViewTop) && (elemTop <= docViewBottom)) ;
        },
        bindNavScrollBrowse: function() {
            this._container.bind("mousewheel.jPages DOMMouseScroll.jPages", this.bind(function(evt) {
                var newPage = (evt.originalEvent.wheelDelta || -evt.originalEvent.detail) > 0 ? (this._currentPageNum - 1) : (this._currentPageNum + 1);
                if (this.validNewPage(newPage)) {
                    this._clicked = true;
                    this.paginate(newPage);
                }
                evt.preventDefault();
                return false;
            }, this));
        },
        getNewPage: function(nav, target) {
            if (target.is(nav.currentPage))
                return this._currentPageNum;
            if (target.is(nav.pages))
                return nav.pages.index(target) + 1;
            if (target.is(nav.first))
                return 1;
            if (target.is(nav.last))
                return this._numPages;
            if (target.is(nav.previous))
                return nav.pages.index(nav.currentPage);
            if (target.is(nav.next))
                return nav.pages.index(nav.currentPage) + 2;
        },
        validNewPage: function(newPage) {
            return newPage !== this._currentPageNum && newPage > 0 && newPage <= this._numPages;
        },
        paginate: function(page) {
            var itemRange,
                pageInterval;
            itemRange = this.updateItems(page);
            pageInterval = this.updatePages(page);
            this._currentPageNum = page;
            if ($.isFunction(this.options.callback))
                this.callback(page, itemRange, pageInterval);
            this.updatePause();
        },
        updateItems: function(page) {
            var range = this.getItemRange(page);
            this._itemsHiding = this._itemsShowing;
            this._itemsShowing = this._items.slice(range.start, range.end);
            if (this._cssAnimSupport && this.options.animation.length)
                this.cssAnimations(page);
            else
                this.jQAnimations(page);
            return range;
        },
        getItemRange: function(page) {
            var range = {};
            range.start = (page - 1) * this.options.perPage;
            range.end = range.start + this.options.perPage;
            if (range.end > this._items.length)
                range.end = this._items.length;
            return range;
        },
        cssAnimations: function(page) {
            clearInterval(this._delay);
            this._itemsHiding.removeClass(this.options.animation + " jp-invisible").addClass("jp-hidden");
            this._itemsShowing.removeClass("jp-hidden").addClass("jp-invisible");
            this._itemsOriented = this.getDirectedItems(page);
            this._index = 0;
            this._delay = setInterval(this.bind(function() {
                if (this._index === this._itemsOriented.length)
                    clearInterval(this._delay);
                else {
                    this._itemsOriented.eq(this._index).removeClass("jp-invisible").addClass(this.options.animation);
                }
                this._index = this._index + 1;
            }, this), this.options.delay);
        },
        jQAnimations: function(page) {
            clearInterval(this._delay);
            this._itemsHiding.addClass("jp-hidden");
            this._itemsShowing.fadeTo(0, 0).removeClass("jp-hidden");
            this._itemsOriented = this.getDirectedItems(page);
            this._index = 0;
            this._delay = setInterval(this.bind(function() {
                if (this._index === this._itemsOriented.length)
                    clearInterval(this._delay);
                else {
                    this._itemsOriented.eq(this._index).fadeTo(this.options.fallback, 1);
                }
                this._index = this._index + 1;
            }, this), this.options.delay);
        },
        getDirectedItems: function(page) {
            var itemsToShow;
            switch (this.options.direction) {
            case "backwards":
                itemsToShow = $(this._itemsShowing.get().reverse());
                break;
            case "random":
                itemsToShow = $(this._itemsShowing.get().sort(function() {
                    return ( Math.round(Math.random()) - 0.5) ;
                }));
                break;
            case "auto":
                itemsToShow = page >= this._currentPageNum ? this._itemsShowing : $(this._itemsShowing.get().reverse());
                break;
            default:
                itemsToShow = this._itemsShowing;
            }
            return itemsToShow;
        },
        updatePages: function(page) {
            var interval,
                index,
                nav;
            interval = this.getInterval(page);
            for (index in this._nav) {
                if (this._nav.hasOwnProperty(index)) {
                    nav = this._nav[index];
                    this.updateBtns(nav, page);
                    this.updateCurrentPage(nav, page);
                    this.updatePagesShowing(nav, interval);
                    this.updateBreaks(nav, interval);
                }
            }
            return interval;
        },
        getInterval: function(page) {
            var neHalf,
                upperLimit,
                start,
                end;
            neHalf = Math.ceil(this.options.midRange / 2);
            upperLimit = this._numPages - this.options.midRange;
            start = page > neHalf ? Math.max(Math.min(page - neHalf, upperLimit), 0) : 0;
            end = page > neHalf ? Math.min(page + neHalf - (this.options.midRange % 2 > 0 ? 1 : 0), this._numPages) : Math.min(this.options.midRange, this._numPages);
            return {
                start: start,
                end: end
            };
        },
        updateBtns: function(nav, page) {
            if (page === 1) {
                nav.first.addClass("jp-disabled");
                nav.previous.addClass("jp-disabled");
            }
            if (page === this._numPages) {
                nav.next.addClass("jp-disabled");
                nav.last.addClass("jp-disabled");
            }
            if (this._currentPageNum === 1 && page > 1) {
                nav.first.removeClass("jp-disabled");
                nav.previous.removeClass("jp-disabled");
            }
            if (this._currentPageNum === this._numPages && page < this._numPages) {
                nav.next.removeClass("jp-disabled");
                nav.last.removeClass("jp-disabled");
            }
        },
        updateCurrentPage: function(nav, page) {
            nav.currentPage.removeClass("jp-current");
            nav.currentPage = nav.pages.eq(page - 1).addClass("jp-current");
        },
        updatePagesShowing: function(nav, interval) {
            var newRange = nav.pages.slice(interval.start, interval.end).not(nav.permPages);
            nav.pagesShowing.not(newRange).addClass("jp-hidden");
            newRange.not(nav.pagesShowing).removeClass("jp-hidden");
            nav.pagesShowing = newRange;
        },
        updateBreaks: function(nav, interval) {
            if (interval.start > this.options.startRange || (this.options.startRange === 0 && interval.start > 0))
                nav.fstBreak.removeClass("jp-hidden");
            else
                nav.fstBreak.addClass("jp-hidden");
            if (interval.end < this._numPages - this.options.endRange)
                nav.lstBreak.removeClass("jp-hidden");
            else
                nav.lstBreak.addClass("jp-hidden");
        },
        callback: function(page, itemRange, pageInterval) {
            var pages = {
                    current: page,
                    interval: pageInterval,
                    count: this._numPages
                },
                items = {
                    showing: this._itemsShowing,
                    oncoming: this._items.slice(itemRange.start + this.options.perPage, itemRange.end + this.options.perPage),
                    range: itemRange,
                    count: this._items.length
                };
            pages.interval.start = pages.interval.start + 1;
            items.range.start = items.range.start + 1;
            this.options.callback(pages, items);
        },
        updatePause: function() {
            if (this.options.pause && this._numPages > 1) {
                clearTimeout(this._pause);
                if (this.options.clickStop && this._clicked)
                    return;
                else {
                    this._pause = setTimeout(this.bind(function() {
                        this.paginate(this._currentPageNum !== this._numPages ? this._currentPageNum + 1 : 1);
                    }, this), this.options.pause);
                }
            }
        },
        setMinHeight: function() {
            if (this.options.minHeight && !this._container.is("table, tbody")) {
                setTimeout(this.bind(function() {
                    this._container.css({
                        "min-height": this._container.css("height")
                    });
                }, this), 1000);
            }
        },
        bind: function(fn, me) {
            return function() {
                return fn.apply(me, arguments);
            };
        },
        destroy: function() {
            this.jQdocument.unbind("keydown.jPages");
            this._container.unbind("mousewheel.jPages DOMMouseScroll.jPages");
            if (this.options.minHeight)
                this._container.css("min-height", "");
            if (this._cssAnimSupport && this.options.animation.length)
                this._items.removeClass("animated jp-hidden jp-invisible " + this.options.animation);
            else
                this._items.removeClass("jp-hidden").fadeTo(0, 1);
            this._holder.unbind("click.jPages").empty();
        }
    };
    $.fn[name] = function(arg) {
        var type = $.type(arg);
        if (type === "object") {
            if (this.length && !$.data(this, name)) {
                instance = new Plugin(this, arg);
                this.each(function() {
                    $.data(this, name, instance);
                });
            }
            return this;
        }
        if (type === "string" && arg === "destroy") {
            instance.destroy();
            this.each(function() {
                $.removeData(this, name);
            });
            return this;
        }
        if (type === 'number' && arg % 1 === 0) {
            if (instance.validNewPage(arg))
                instance.paginate(arg);
            return this;
        }
        return this;
    };
})(jQuery, window, document);
