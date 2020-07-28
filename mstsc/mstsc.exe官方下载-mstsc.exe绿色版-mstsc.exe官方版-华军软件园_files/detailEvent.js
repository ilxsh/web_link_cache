var storage = {
    set:function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get:function(key) {
        return JSON.parse(localStorage.getItem(key));
    },
     remove:function(key) {
        localStorage.removeItem(key);
    }
};
var laiyuan = (function(){//判断来源
    var ref =document.referrer;
    if(ref.indexOf("baidu.com")>-1){
        return "baidu"
    }else if(ref.indexOf("so.com")>-1){
        return "360"
    }else{
        return ""
    }
})();

var hide_down = function(){ //判断id 隐藏下载地址或替换高速下载
    var softarr = ["115775", "494657", "534536", "582636", "597221", "703469", "225383", "300138", "535075", "657840", "657942", "658716", "658809", "684647", "265185", "275354", "277492", "389895", "551615", "580010", "586697", "638388", "703476", "417134", "598692", "731470", "737520", "869814", "603384", "604553", "607878", "639186", "692195", "1007127", "602710", "648384","1152021"];
    var gaosuarr = ['579548','584251','586878','447664','579308','579366','579449','579593','579725','579839','579901','580058','580280','580465','581063','581339','581522','581712','582124','582788','583027','583357','583534','583802','584080','584544','585392','585775','586205','586387','587189','1207398','1209304','1112625','1113043','1113114','1114320','1114505','1114987','1115697','975161','622037','579261','587361','303961','1207266','1109531','621998','975540','977027'];
    var strlocation = document.location.href;
    softid = strlocation.replace(/[^0-9]+/g, '');
    if (gaosuarr.indexOf(softid) > -1 && strlocation.indexOf("soft") > -1) {//替换高速下载包为本地下载
        var bendidown = $(".downx1 + a").attr("href")
        $('.downgs1,.downgs2,.downgstip,.onedownbtn2 ').attr("href",bendidown)
    }
    if (softarr.indexOf(softid) > -1 && strlocation.indexOf("soft") > -1) { //暂不提供下载
        $('.onedownbtn1,.qrcode_show,.downDz h4').hide();
        $('.onedownwp,.downDz').prepend('<span style="display:block;width:200px;background-color: #ffaa01;height: 40px;color: #fff; line-height: 40px;text-align:center;font-size:16px;">因政策调整,暂不提供下载</span>');
    }

}
$("input[name=fkinfo]").on("click",function(){
    var ival=$('input[type=radio][name=fkinfo]:checked').hasClass("qitaRadio");
    if(ival){
        $(".qitaTextarea").show();
    }else{
        $(".qitaTextarea").hide();
    }
})
$.ajaxSetup({ cache: false });
function fkfn(obj,time){
    $.ajax({
        type: "POST",
        url: "https://d.onlinedown.net/HjFeedback.php?t="+new Date().getTime(),
        data: obj,
        dataType: "json",
        success: function(data){
            softidArr=storage.get("fkkey")?storage.get("fkkey").softid:[];
            softidArr.push(obj.softid);
            storage.set("fkkey",{"status":"true","time":time,"softid":softidArr})
            $(".fktijiao").addClass("yes").text("感谢反馈");
        },
        error:function(e){
            console.log(e);
        }
    });
}

var softidArr=[];
$(".fktijiao").on("click",function(){
    var ival=$('input[type=radio][name=fkinfo]:checked').val();
    if(ival){
        var fkinfo = ival;//当前选中哪个?
        var qita = "";//选其他时输入的内容
        var iUa = navigator.userAgent;//ua
        if($('input[type=radio][name=fkinfo]:checked').hasClass("qitaRadio")){
            if($(".qitaTextarea").val().length>0){
                qita=$(".qitaTextarea").val();
            }else{
                alert("请输入要反馈的内容！");
                return false;
            }
        }
        var fktime = new Date().getTime();
        if(storage.get("fkkey")){
            var nowTime = new Date().getTime();
            var lastTime = storage.get("fkkey").time;
            var lastId = storage.get("fkkey").softid;
            if($.inArray(softid, lastId)< 0 ){
                // if(nowTime-lastTime>300000){
                    fkfn({
                        "softid":softid,
                        "softtitle":softtitle,
                        "version":version,
                        "ua":iUa,
                        "fkinfo":fkinfo,
                        "qita":qita
                    },fktime)
                // }else{
                //     alert("您刚刚提交，请5分钟后再提交！")
                // }
            }else{
                alert("您已经提交过了!")
            }
        }else{
            fkfn({
                "softid":softid,
                "softtitle":softtitle,
                "version":version,
                "ua":iUa,
                "fkinfo":fkinfo,
                "qita":qita
            },fktime)
        }
        
    }else{
        alert("请选择");
        return false;
    }
    
})

// 点击下载数据统计
$(".onedownwpPc .onedownbtn2,.downxzqtir a,.downgsPc a").on("click",function(e){
    $.ajax({
        type: "GET",
        url: "https://d.onlinedown.net/new_tongji.php",
        data: {"softid":softid,"softtitle":softtitle,"laiyuan":laiyuan,"type":"gaosu"},
        dataType: "json",
        success: function(data){
        }
    });
});
$(".downlistPc a").on("click",function(e){
    $.ajax({
        type: "GET",
        url: "https://d.onlinedown.net/new_tongji.php",
        data: {"softid":softid,"softtitle":softtitle,"laiyuan":laiyuan,"type":"putong"},
        dataType: "json",
        success: function(data){
        }
    });
});
// 评论
$('input[name="pinglun"]').click(function() {
    var text = $('textarea[name="content"]').val();
    //var code = $('input[name="verify_code"]').val();
    if (text != '') {
        alert('评论成功！通过审核后才会被公开。');

    } else {
        alert('评论内容不能为空！！');
    }
})
$(function(){
    hide_down();

    var strlocation = document.location.href;
    softid = strlocation.replace(/[^0-9]+/g, '');
    //office 北京 上海 海外 下载地址替换
    var officearr = ["19604","37112","37113","242146","243802","259197","259198","428776","428877","428991","429588","577700","578141","578241","578242","578404","578517","578567","580521","583777","588065","588068","588069","588070","588078","588079","588080","588081","588095","588096","612273","707558","966176","976965","1106835","1106977","1108837","1109806","1109808","1109809","1109810","1109813","1109814","1109816","1109817","1109819","1109821","1109823","1109824","1109826","1109827","1109829","1109830","1109831","1109832","1109833","1109835","1109838","1109839","1109841","1109844","1109845","1109846","1109847","1109848","1109849","1109850","1109851","1109852","1109854","1109855","1160842","1161651","1196249","1223355","1223356","1223438","1223439","1223440"];
    var office_down_arr = {
        'bs':'https://obs-office.obs.cn-east-2.myhwclouds.com/360Whitelist/wx/OfficeV3.9.24.10.exe',
        'hw':'https://obs-office.obs.cn-east-2.myhwclouds.com/360Whitelist/wx/OfficeV3.9.20.12.exe'
    };
    if (officearr.indexOf(softid) > -1 && strlocation.indexOf("soft") > -1) {
        $.ajax({
            type: "GET",
            url: "http://office.balance.desktop.zhuazi.com/area/areaShielding",
            dataType: "json",
            success: function(data){
                console.log(data.data.onlinedown)
                if(data.code=='200'){
                    switch(data.data.onlinedown){//0 其他包  1 北京 上海包  2  海外包
                        case 1 : 
                            console.log('bs' + office_down_arr.bs)
                            $('.onedownbtn1,#down_url .downx1 + a').attr('href',office_down_arr.bs);
                            break;
                        case 2 : 
                            console.log('hw' + office_down_arr.hw)
                            $('.onedownbtn1,#down_url .downx1 + a').attr('href',office_down_arr.hw);
                            break;
                    }
                }
            }
        });
    }
})

