$(function(){

$('.main_nav .w1080 .Login').mouseover(function(){$('.main_nav .loginbox').show();});
    $('.main_nav .loginbox').hover(function(){$(this).show();},function(){$(this).hide();});
$(".box dl").mouseover(function(){
	$(this).addClass("show").siblings().removeClass("show");
	});
if($("#relink").length>0){$(".likebox").show();};		
picFuns(".lubotu");	
/*picFuns("#like");	*/
/*水平滚动*/		
	function picFuns(obj) {
    var sWidth = $(obj + " ul li").width(); //获取焦点图的宽度（显示面积）
    var len = $(obj + "  ul li").length; //获取焦点图个数
    var index = 0;
    var adTimer;
    var timea = 5000; //  time ctrl
    $(obj + " ul").css("width", sWidth * (len));
    //intialize function
    function init() {
        $(obj).hover(
            function() {clearInterval(adTimer);},

            function() {timer();});
        timer();
    }
    function showImg(index) {
        var newLeft = -index * sWidth;
        $(obj + " ul").stop().animate({
            "left": newLeft
        }, 300);
    }
    function showTab(index) {
        $(obj + " div span").eq(index).addClass("show").siblings().removeClass("show");
    }
    function timer() {
        adTimer = setInterval(function() {
            index++;
            if (index == len) {
                index = 0;
            }
            showImg(index);
            showTab(index);
        }, timea);
    }
$(obj + " .prev").click(function() {
        index -= 1;
        if (index == -1) {
            index = len-1;
        }
        showImg(index);
        showTab(index);
    });
    $(obj + " .next").click(function() {
        index += 1;
        if (index == len) {
            index = 0;
        }
        showImg(index);
        showTab(index);
    });
    $(obj + " div span").click(function() {
        index = $(this).index();
        showImg(index);
        showTab(index);
    });

    init();
};
	})