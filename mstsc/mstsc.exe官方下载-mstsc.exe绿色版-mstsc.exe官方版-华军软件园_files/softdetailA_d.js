
(function(window){
    var xzqdown=$(".onedownbtn2")[0]?$(".onedownbtn2").attr("href"):"";
    var txzdown=xzqdown.replace(/_14@/,"_13@");
    var txzdown910=xzqdown.replace(/_14@/,"_12@");
    // 9.10
    var barr0910=[667510,603125,600773,558415,709289,618895,568182,443450,574082,702005,710025,469879,1084497,980310,36138,580699,472225,264209,413012,614,58174,577370,115817,240002,5,538723,120092,578127,557939,34492,471748,579282,113822,452558,77166,3442,572223,690708,257184,78452,612127,117003,85345,442052,119106,28272,578184,77263,7677,90550,577848,3617,454487,41218,255573,545165,35875,267410,32502,87115,1090930,292267,247396,5306,988686,537079,486534,15759,460501,21691,514681,16280,1002,578523,56938,556496,61827,635517,41323,971052,583242,1088887,105397,378120,617078,117854,150910,703158,749369,18332,22795,73996,116938,169287,119134,971201,634079,42312,69033,8794,18162,55591,3065,636270,102591,19648,1109828,1218,455439,111799,9067,577949,402367,107769,110790,57757,578298,586762,2305,79194,293093,106990,18105,222287,76831,12112,41721,20919,974952,262472,616417,299563,82280,39710,25416,52718,285815,12095,192064,396398,1106977,580665,257109,970770,70834,12890,425371,1151685,983537,13985,95770,62044,96909,237971,1160688,300972];
    var gaosuarr = ['579548','584251','586878','447664','579308','579366','579449','579593','579725','579839','579901','580058','580280','580465','581063','581339','581522','581712','582124','582788','583027','583357','583534','583802','584080','584544','585392','585775','586205','586387','587189','1207398','1209304','1112625','1113043','1113114','1114320','1114505','1114987','1115697','975161','622037','579261','587361','303961','1207266','1109531','621998','975540','977027'];
    var strlocation = document.location.href;
    softid = strlocation.replace(/[^0-9]+/g, '');
    if(document.referrer.indexOf("so.com")>-1 && gaosuarr.indexOf(softid) == -1){
       $(".onedownbtn2,.downgs a").attr('href',txzdown);
        //    360 下载按钮20190618-start
        $(function(){
            var str = document.location.href;
            var softid=[9817];
            str = parseInt(str.match(/(https|http):\/\/.*\/soft\/(\S*)\.htm/)[2]);
            // if($.inArray(str, softid)>-1){
                $(".bdgodown .p2").remove();
                $(".bdgodown .p1").css("line-height","60px");
                $(".bdgodown").unbind('click').on("click",function(){
                    window.location.href = txzdown;
                })
                $("#NavXZDZ").unbind('click').on("click",function(){
                    $(window).scrollTop($('#down').offset().top-$(window).height()+128);
                })
            // }
        })
        //    360 下载按钮20190618-end
    }else{
        if(document.referrer.indexOf("baidu.com")>-1){
            $(".onedownbtn2,.downgs a").attr('href',txzdown910);
        }
    }
    // 反广告
    var newClass = new Date().getFullYear()+"-"+new Date().getMonth();
    if(!$(".onedownbtn2").is(":visible")){
        $(".onedownbtn2,.downgs a").attr("href","javascript:;");
        $(".onedownbtn2,.downgs a").on("click",function(){
            if(document.referrer.indexOf("so.com")>-1){
               window.location.href=txzdown;
            }else{
                window.location.href=xzqdown;
            }
        });
        $(".downgs a").attr("style","display: block;float: left;margin-right: 12px;margin-bottom: 12px;width: 85px;height: 24px;line-height: 24px;background-repeat: no-repeat;overflow: hidden;padding-left: 35px;color: #FFF;color: #fff;background-color: #f90;padding: 5px 10px;border-radius: 5px;width: 110px;margin-right: 10px;margin-bottom: 10px;text-align: center;")
        $(".downgs a:last-child").attr("style","width: 250px;padding: 0 10px;height: auto;background-color: #999999;line-height: 20px;display: block;float: left;color: #fff;border-radius: 5px;")
        $(".downgs").removeClass("downgs").addClass(newClass+" gaosu").addClass("mt10");
    }
    // 详情页点发布按钮弹窗
    $(".softDownIfTop").append('<div class="fbBtn"><a style="text-decoration:none;color:#fff;" href="http://user.onlinedown.net/" target="_blank" rel="nofollow"><i></i>发布软件/应用</a></div>');
    var softTit = $(".softDownIfTop .img img").attr("alt");
    // $("body").append(wxstr);
    $(".fbBtn").on("click",function(){
        window.open("https://user.onlinedown.net/","_blank")
    });

    // 详情页右下小说广告
    var xsStrYunxue = "<div class='qitaRankLast xsA_Detail'><a href='https://link.zhangwen.cn/link?code=223176' target='_blank' rel='nofollow' style='position:relative;'><img src='//src.onlinedown.net/d/file/p/2019-06-25/4a547af2c084850f1738a469927ba42c.png'><span style='position: absolute;color: #9c9b9b;bottom: 3px;right: 1px;'>广告×</span></a></div>";
   // $(xsStrYunxue).appendTo(".downdecail .right");
    $(window).on("scroll",function(){
        var s = $(window).scrollTop();
        if(s > $('.qitaRankLast').height() + $('.qitaRankLast').offset().top ){
            $(".xsA_Detail").css({'position': 'fixed',
            'top': '0'})
        }else{
            $(".xsA_Detail").css({'position': 'static',
            'top': '0'})
        }
    })
})(window)

var template_type12 = "\n<style>\n.singleImage .singleImage-title{text-overflow:ellipsis}\n</style>\n<script type=\"text/javascript\" src=\"//static.mediav.com/js/mvf_news_feed.js\"></script>\n<script>\n$('.downdecailItemXGZT #like_soft li').eq(1).replaceWith('<li id=\"li_id\" style=\"height:136px;overflow:hidden;\"></li>'); \n$('.downdecailItemXGZT #like_soft li').eq(6).replaceWith('<li id=\"li_id2\" style=\"height:137px;overflow:hidden;\"></li>'); \nNEWS_FEED({\n    w: 165,\n    h : 138,\n    showid : 'F3YZer',\n    inject : 'define',\n    placeholderId : 'li_id',\n    define : {\n        imagePosition : 'top',\n        imageBorderRadius : 0,\n        imageWidth: 165,\n        imageHeight: 93,\n        imageFill : 'clip',\n        displayImage : true,\n        displayTitle : true,\n        titleFontSize: 14,\n        titleFontColor: '#000',\n        titleFontFamily : 'Microsoft Yahei',\n        titleFontWeight: 'bold',\n        titlePaddingTop : 0,\n        titlePaddingRight : 20,\n        titlePaddingBottom : 0,\n        titlePaddingLeft : 20,\n        displayDesc : false,\n        descFontSize: 14,\n        descFontColor: '#8e959a',\n        descFontFamily : 'Microsoft Yahei',\n        paddingTop : 0,\n        paddingRight : 0,\n        paddingBottom : 0,\n        paddingLeft : 0,\n        backgroundColor: '#fff',\n        hoverColor: '#000'\n    }\n}) \nNEWS_FEED({\n    w: 165,\n    h : 138,\n    showid : 'F3YZer',\n    inject : 'define',\n    placeholderId : 'li_id2',\n    define : {\n        imagePosition : 'top',\n        imageBorderRadius : 0,\n        imageWidth: 165,\n        imageHeight: 93,\n        imageFill : 'clip',\n        displayImage : true,\n        displayTitle : true,\n        titleFontSize: 14,\n        titleFontColor: '#000',\n        titleFontFamily : 'Microsoft Yahei',\n        titleFontWeight: 'bold',\n        titlePaddingTop : 0,\n        titlePaddingRight : 20,\n        titlePaddingBottom : 0,\n        titlePaddingLeft : 20,\n        displayDesc : false,\n        descFontSize: 14,\n        descFontColor: '#8e959a',\n        descFontFamily : 'Microsoft Yahei',\n        paddingTop : 0,\n        paddingRight : 0,\n        paddingBottom : 0,\n        paddingLeft : 0,\n        backgroundColor: '#fff',\n        hoverColor: '#000'\n    }\n}) </script>\n";

if ($('div').is('.downdecailItemXGZT')) {
    document.writeln(template_type12);
}
// document.writeln('<script src="/Public/js/newjs/ad/20180524360ad.js"></script>')
// document.writeln('<script src="/Public/js/newjs/ad/20180524360ad2.js"></script>')

