jbMap = window.jbMap || {};
function jbViaJs(locationId) {
    var _f = undefined;
    var _fconv = 'jbMap[\"' + locationId + '\"]';
    try {
        _f = eval(_fconv);
        if (_f != undefined) {
            _f()
        }
    } catch(e) {}
}
function jbLoader(closetag) {
    var jbTest = null,
    jbTestPos = document.getElementsByTagName("span");
    for (var i = 0; i < jbTestPos.length; i++) {
        if (jbTestPos[i].className == "jbTestPos") {
            jbTest = jbTestPos[i];
            break
        }
    }
    if (jbTest == null) return;
    if (!closetag) {
        document.write("<span id=jbTestPos_" + jbTest.id + " style=display:none>");
        jbViaJs(jbTest.id);
        return
    }
    document.write("</span>");
    var real = document.getElementById("jbTestPos_" + jbTest.id);
    for (var i = 0; i < real.childNodes.length; i++) {
        var node = real.childNodes[i];
        if (node.tagName == "SCRIPT" && /closetag/.test(node.className)) continue;
        jbTest.parentNode.insertBefore(node, jbTest);
        i--
    }
    jbTest.parentNode.removeChild(jbTest);
    real.parentNode.removeChild(real)
}

var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);

var logo_m='<a href="http://www.jhlengku.com/" target="_blank"><img src="//files.jb51.net/image/dkwm430.gif?0723" width=430 height=60 /></a>';
var logo_r='<a href="http://wpa.qq.com/msgrd?v=3&uin=939067999&site=qq&menu=yes" target="_blank"><img src="//files.jb51.net/image/ll430.gif?0909" width=430 height=60 /></a>';

var aliyun1000='';
aliyun1000 += '<div class="mainlr"><a href="http://wpa.qq.com/msgrd?v=3&uin=2018222888&site=qq&menu=yes" target="_blank"><img src="//files.jb51.net/image/2018222888_1200.gif" alt="seo" width="1200" height="50"></a></div><div class="blank5"></div>';
aliyun1000+='<div class="mainlr"><a href="https://jq.qq.com/?_wv=1027&k=5QfkGxG" target="_blank"><img src="//files.jb51.net/image/ssfb8_1200.png?1014" alt="" width="1200" height="50"></a></div><div class="blank5"></div>';
aliyun1000+='<div class="mainlr"><a href="https://jq.qq.com/?_wv=1027&k=5iTQHP6" target="_blank"><img src="//files.jb51.net/image/ssfb_1200.png?09191" alt="" width="1200" height="50"></a></div><div class="blank5"></div>';
aliyun1000+='<div class="mainlr"><a href="https://jq.qq.com/?_wv=1027&k=5pJlGpO" target="_blank"><img src="//files.jb51.net/image/xiongzhang_1200.png?09191" alt="" width="1200" height="50"></a></div>';

var aliyun10002='';

var idctu="";
idctu+='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt><!--thea+300*250--><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px"data-ad-client="ca-pub-6389290466807248"data-ad-slot="6788945816"></ins><scr'+'ipt>(adsbygoogle=window.adsbygoogle||[]).push({});</scr'+'ipt>';
idctu+='<div class="blank5"></div><A href="https://www.kuaidaili.com/?utm_source=jbzj&utm_medium=j1&utm_campaign=j1a1" target=_blank><IMG alt="" src="//files.jb51.net/image/kdaili.png?1012" width="300" height="100"></A>';
idctu+='<div class="blank5"></div><A href="https://www.50vm.com/server.html?pg=34" target=_blank><IMG alt="" src="//files.jb51.net/image/99idc300.jpg" width="300" height="100"></A>';

//idctu+='<div class="blank10"></div><iframe src="https://www.jb51.net/static/zbj.html?id=300250" width="300" height="250" align="center,center" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" style="border:0; vertical-align:bottom;margin:0;" allowtransparency="true"></iframe>';


var aliwenzi='<li><a href="http://click.aliyun.com/m/15321/" target="_blank"><span style="color:red;">30余款阿里云产品免费6个月</span></a></li>';
var ali237='<li><A href="http://click.aliyun.com/m/28331/" target=_blank><IMG alt="" src="//files.jb51.net/image/ali2650323.gif" width="211" height="50"></A></li>';
var ali2371='<li><A href="http://click.aliyun.com/m/17168/" target=_blank><IMG alt="" src="//files.jb51.net/image/ali2371.jpg" width="211" height="50"></A></li>';

var tgtxt="";
tgtxt+='<div class="blank5"></div><div id="txtlink"><ul>';

tgtxt+='<li><a href="https://dwz.cn/kMi9ZjsH" target="_blank"><span style="color:blue;">【阿里云】产品2000元优惠券（点我）领取</span></a></li>';
tgtxt+='<li><a href="http://www.uujs.cc" target="_blank"><span style="color:blue;">免费网站全球加速和防御[优优加速]</span></a></li>';
tgtxt+='<li><a href="https://www.95idc.com" target="_blank"><span style="color:blue;">95IDC█香港沙田CN2服务器 599/月</span></a></li>';
tgtxt+='<li><a href="http://www.zh.cc/us/" target="_blank"><span style="color:blue;">不限内容美国独立服务器出租</span></a></li>';

tgtxt+='<li><a href="https://okzy.co/" target="_blank"><span style="color:red;">OK资源站提供高清电影采集</span></a></li>';
tgtxt+='<li><a href="http://www.hkcn2.com/51.htm" target="_blank"><span style="color:red;">**香港高防10m大带宽独服，低至999元**</span></a></li>';
tgtxt+='<li><a href="http://wpa.qq.com/msgrd?v=3&uin=6883741&site=qq&menu=yes" target="_blank"><span style="color:red;">高价收【网赚粉】等各类活粉Q6883741</span></a></li>';
tgtxt+='<li><a href="http://www.zoneidc.com/" target="_blank"><span style="color:red;">香港/美国/韩国等十五国云服务器9.9元/月起</span></a></li>';

/*
tgtxt+='<li><a href="http://www.ku86.com/" target="_blank"><span style="color:blue;">百兆 12核24线程 16G内存 2T 999/月</span></a></li>';
tgtxt+='<li><a href="http://s.jb51.net/" target="_blank"><span style="color:blue;">服务器常用软件</span></a></li>';
tgtxt+='<li><a href="http://t.cn/E9OUxEx" target="_blank"><span style="color:blue;">500G学习资源/python/php/java</span></a></li>';
tgtxt+='<li><a href="http://ke.jb51.net" target="_blank"><span style="color:red;">脚本之家云课堂</span></a></li>';
*/

tgtxt+='<li><a href="http://t.cn/E9OUxEx" target="_blank"><span style="color:blue;">500G学习资源/python/php/java</span></a></li>';
tgtxt+='<li><a href="https://www.50vm.com/" target="_blank"><span style="color:blue;">宿迁100G高防VPS大带宽300元/月|创梦网络</span></a></li>';
tgtxt+='<li><a href="http://www.gwidc.com/host/home/free.html" target="_blank"><span style="color:blue;">港湾网络-云虚拟主机 永久免费！~</span></a></li>';
tgtxt+='<li><a href="https://www.tzidc.com/dist/highDefense.html#jb51" target="_blank"><span style="color:blue;">██高防ip██高防服务器租用</span></a></li>';

tgtxt+='<li><a href="http://www.ushk.net/server.html" target="_blank"><span style="color:red;">██美港数据██高端香港服务器租用</span></a></li>';
tgtxt+='<li><a href="http://vps.zzidc.com/tongji/jb51w.html" target="_blank"><span style="color:red;">★☆云服务器5折，天天抽红包抵扣☆★</span></a></li>';
tgtxt+='<li><a href="http://www.enkj.com/idc/zuyong/6" target="_blank"><span style="color:red;">移动BGP，百兆独享带宽，399元/月</span></a></li>';
tgtxt+='<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:red;">韩国香港美国站群服务器 巨牛网络</span></a></li>';

tgtxt+='<li><a href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target="_blank"><span style="color:blue;">█▇▆5M独享云主机599/年▆▇█</span></a></li>';
tgtxt+='<li><a href="http://www.qy.com.cn/" target="_blank"><span style="color:blue;">群英云服务器送10M带宽30G防御,49元起</span></a></li>';
tgtxt+='<li><a href="http://www.tuidc.com/" target="_blank"><span style="color:blue;">服务器租用/托管-域名空间/认准腾佑科技</span></a></li>';
tgtxt+='<li><a href="http://www.vzidc.com/cloud/" target="_blank"><span style="color:blue;">华为云4核8g限时免费送另有代金券免费送</span></a></li>';

tgtxt+='<li><a href="http://www.ssf.cc/" target="_blank"><span style="color:red;">免备vps20/百独799/双线350/45互联</span></a></li>';
tgtxt+='<li><a href="http://www.zitian.cn/" target="_blank"><span style="color:red;">中原地区核心数据中心，月付299元起</span></a></li>';
tgtxt+='<li><a href="http://www.qy.cn/gfhd.html" target="_blank"><span style="color:red;">██群英网络██◆◆◆300G高防仅需599元◆◆◆</span></a></li>';
tgtxt+='<li><a href="http://www.pdidc.com/" target="_blank"><span style="color:red;">浦东数据中心上海电信4星云主机30元/月起</span></a></li>';

tgtxt+='<li><a href="http://www.pppoevps.com/" target="_blank"><span style="color:blue;">█动态拨号IP云主机，电信ADSL独享20M█ </span></a></li>';
tgtxt+='<li><a href="http://www.360jq.com/hkshuang.htm" target="_blank"><span style="color:blue;">[香港双高防]无视CC★DDOS/堪比广东！</span></a></li>';
tgtxt+='<li><a href="http://www.cyidc.cc/" target="_blank"><span style="color:blue;">畅游网络 百独服务器 包跑满 998元</span></a></li>';
tgtxt+='<li><a href="http://www.wdw6.com/" target="_blank"><span style="color:blue;">bgp多线机房、大带宽</span></a></li>';

tgtxt+='<li><a href="https://www.beianidc.com/cuxiao.html?jb51.net" target="_blank"><span style="color:red;">佛山机房直销/7天无理由退款/防火墙自助管理</span></a></li>';
tgtxt+='<li><a href="http://www.ku86.com/" target="_blank"><span style="color:red;">百兆 12核24线程 16G内存 2T 999/月</span></a></li>';
tgtxt+='<li><a href="http://tianyi.jb51.net/" target="_blank"><span style="color:red;">天翼云，云主机，云存储，云安全</span></a></li>';
tgtxt+='<li><a href="http://t.cn/E9OUxEx" target="_blank"><span style="color:red;">500G学习资源/python/php/java</span></a></li>';

tgtxt+='</ul><DIV class=clearfix></DIV></div>';

var tonglan1="";
tonglan1+=aliyun1000;
tonglan1+=tgtxt;
tonglan1+='<div class="blank5"></div>';
tonglan1+='<div class="topimg"><ul>';
tonglan1+='<li><A href="http://www.ruixunidc.net/a/youhuihuodong/" target=_blank><IMG alt="" src="//files.jb51.net/image/ruixun235.gif?1014"></a></li>';
tonglan1+='<li><A href="https://inxy.com/?utm_source=jb51&utm_medium=cpc&utm_campaign=allsales" target=_blank><IMG alt="" src="//files.jb51.net/image/inxy.gif"></A></li>';
//tonglan1+='<li><A href="https://ke.jb51.net/" target=_blank><IMG alt="" src="//files.jb51.net/image/jb51cn.gif" width="210" height="50"></A></li>';
//tonglan1+='<li><A href="http://www.cnzlapp.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/cnzlapp210.gif" width="210" height="50"></A></li>';
tonglan1+='<li><A href="https://www.7e.hk/" target=_blank><IMG alt="" src="//files.jb51.net/image/7ehk210.gif"></A></li>';
tonglan1+='<li><A href="http://www.ku86.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif"></A></li>';
tonglan1+='<li><A href="https://www.8a.hk/server/" target=_blank><IMG alt="" src="//files.jb51.net/image/8a210.gif"></A></li>';
//tonglan1+='<li><A href="http://www.zgcyjd.com/?id=3" target=_blank><IMG alt="" src="//files.jb51.net/image/zgcyjd.gif" width="210" height="50"></A></li>';
//tonglan1+='<li><A href="https://jieidc.taobao.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="210" height="50"></A></li>';
tonglan1+='</ul></div><div class="blank5"></div>';
tonglan1+=aliyun10002;

var tonglan1_2="";
tonglan1_2+=aliyun1000;
tonglan1_2+=tgtxt;
tonglan1_2+='<div class="blank5"></div>';
tonglan1_2+='<div class="topimg"><ul>';
tonglan1_2+='<li><A href="http://t.cn/E9OUxEx" target=_blank><IMG alt="" src="//files.jb51.net/image/tb_210_50.gif?1008" width="265" height="50"></A></li>';
tonglan1_2+='<li><A href="https://jieidc.taobao.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="210" height="50"></A></li>';
//tonglan1_2+=ali237;
tonglan1_2+='<li><A href="http://www.ku86.com/" target=_blank><IMG alt="" src="//files.jb51.net/image/ku86_237.gif?1010" width="210" height="50"></A></li>';
tonglan1_2+='<li><A href="http://www.wsisp.com" target=_blank><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="265" height="50"></A></li>';
tonglan1_2+='</ul></div><div class="blank5"></div>';

var tonglan2='';
var tonglan2_1='<a href="https://www.jb51.net/s/idc/" alt="高防服务器" target="_blank"><img src="//files.jb51.net/image/bgp_jb51.gif" width="1080" height="50" border="0" /></a>';
var tonglan2_2='<a href="http://www.tuidc.com" alt="腾佑" target="_blank"><img src="//files.jb51.net/image/tuidc1080.gif?0516" width="1080" height="50" border="0" /></a>';


var tonglan3_1='<div class="mainlr"><a href="https://www.qy.cn/free/?f=jb51" target="_blank"><img src="//files.jb51.net/image/qy1080.gif?0313" width="1080" height="50"></a></div><div class="blank5"></div>';

var tonglan3_2='<div class="topimg"><ul>';
tonglan3_2+='<li><A href="http://www.wsisp.com" target=_blank><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.jjidc.com" target=_blank><IMG alt="" src="//files.jb51.net/image/jjidc237.gif" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.enkj.com/gfcloud/" target=_blank><IMG alt="" src="//files.jb51.net/image/enkj0810.gif" alt="云服务器" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="http://www.cyidc.cc/" target=_blank><IMG alt="" src="//files.jb51.net/image/cyidc237.gif" width="210" height="50"></A></li>';
tonglan3_2+='<li><A href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target=_blank><IMG alt="" src="//files.jb51.net/image/wsisp210.gif?1226" width="210" height="50"></a></li>';
tonglan3_2+='</ul></div>';

var tonglan3_3='<div class="mainlr"><a href="http://www.qy.com.cn" target="_blank"><img src="//files.jb51.net/image/qy_1000.gif" width="1080" height="50"></a></div><div class="blank5"></div>';

var botad='<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
botad+='<ins class="adsbygoogle" style="display:inline-block;width:336px;height:280px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6445926239" data-override-format="true" data-page-url="http://www.jb51.net"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
//u2261513
var bd200='<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/hod9xqa8sj.js"></sc'+'ript>';

var idctu1='<div class="idc3"><a href="http://tools.jb51.net" target="_blank"><h1>在线工具</h1><span>代码格式化等</span> </a><a href="https://www.jb51.net/s/idc/" target="_blank"><h1>高防主机</h1><span>600G 防护</span> </a><a href="http://www.33ip.com" target="_blank"><h1>枫信科技</h1><span>IDC服务商</span> </a></div>';
var idctu2='<a href="http://tuidc.com" target="_blank"><img src="//files.jb51.net/image/tengyou300.gif" width="300" height="100"></a>';
idctu2+='<div class="blank5"></div><a href="http://www.enkj.com/encloud/" target="_blank"><img src="//files.jb51.net/image/enkj300.gif?0319" alt="云服务器" width="300" height="100"></a>';

//if (projectName=='article'){idctu2=bd200+'<div class="blank5"></div>'+idctu2;}

/*******---------在线工具start----------********/
var bctools='<li><a href="http://tools.jb51.net/code/css" target="_blank"><font color="red">CSS代码工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/js" target="_blank"><font color="red">JavaScript代码格式化工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/xmlformat" target="_blank">在线XML格式化/压缩工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/phpformat" target="_blank"><font color="red">php代码在线格式化美化工具</font></a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/sqlcodeformat" target="_blank">sql代码在线格式化美化工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/transcoding/html_transcode" target="_blank">在线HTML转义/反转义工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/code/json" target="_blank">在线JSON代码检验/检验/美化/格式化</a></li>';
bctools+='<li><a href="http://tools.jb51.net/regex/javascript" target="_blank">JavaScript正则在线测试工具</a></li>';
bctools+='<li><a href="http://tools.jb51.net/transcoding/jb51qrcode" target="_blank">在线生成二维码工具(加强版)</a></li>';
bctools+='<li><a href="http://tools.jb51.net/" target="_blank">更多在线工具</a></li>';
/*******---------在线工具end----------********/


//u336546
var tonglanbd='<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/cmds5flr1.js"></scr'+'ipt>';

var tonglangg='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
tonglangg+='<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="9750602991"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

var tonglan_1024 = '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/lgypohpyo.js"></scr'+'ipt>';
//var art_up = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/gn3a1ecf96f1ccff30db1c7481b2b03ded00b3930a3ef6.js"></s'+'cript>';

//var tit_down = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/uphlhyovv.js"></s'+'cript>';
//var tit_down = '关注脚本之家微信公众号(jb51net) 每周都有大礼相送哦';
var tit_down = ''
var art_up_isbd=0;
var art_upp = new Array()
art_upp[0] = '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3921475131"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
art_upp[1] = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/production/n/i/production/eqhjo/openjs/oq.js"></s'+'cript>';
art_upp[2] = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/site/u_plx/static/xm/resource/ql/source/l.js"></s'+'cript>';

var nn =Math.round(Math.random());
if (nn==1){art_up_isbd=1}
var art_up = art_upp[nn];

/*var art_up='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3921475131"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
*/

var art_wxz='';
if("undefined" != typeof lmname){
	if(lmname == "python"){
	art_wxz+='<a href="http://www.xz577.com/v/python/" target="_blank"><img src="//files.jb51.net/image/python_tb.gif?1012" class="nohref"></a>';
	}else if(lmname == "java"){
	art_wxz+='<a href="http://www.xz577.com/v/java/" target="_blank"><img src="//files.jb51.net/image/java_tb.gif?1012" class="nohref"></a>';
	}else if (lmname == "Android"||lmname == "JavaScript"||lmname == "CSS/HTML"||lmname == "AJAX相关"||lmname == "C 语言"||lmname == "服务器"||lmname == "Mysql"||lmname == "PHP编程")
	{
	art_wxz+='<a href="http://www.xz577.com/v/" target="_blank"><img src="//files.jb51.net/image/all_tb.gif?1012" class="nohref"></a>';
	}
}
var art_down='';
if(art_wxz!=''){
art_down=art_wxz;
}else{
art_down='';
}
var art_down2 ='<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/source/p_khqtq/common/j/source/qq.js"></s'+'cript>';
//var art_down ='<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/production/ql/common/h/source/n/h/production/kmtr.js"></s'+'cript>';
//art_down += '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3647610559" data-ad-format="link" data-full-width-responsive="true"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
//var art_down2 = '<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/site/bws_yc/v_o/source/lc.js"></s'+'cript>';

var list_r_r300 = '<scrip'+'t type="text/javascript" src="//jscode.jbzj.com/common/static/js/2f9w.js?cxtwdu=wg"></s'+'cript>';

var art_xg = '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/site/g/bx_d/production/hak_cq.js"></scr'+'ipt>';

//var art_down3 = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/mhzqnndqnkon.js"></s'+'cript>';

var side_up = '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
side_up+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
/*side_up+='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
//var side_up = '<sc'+'ript type="text/javascript" src="//jscode.jbzj.com/faswjbzpw.js"></sc'+'ript>';*/

var r_2 = '<script type="text/javascript">var cpro_id="u1397867";(window["cproStyleApi"] = window["cproStyleApi"] || {})[cpro_id]={at:"3",rsi0:"300",rsi1:"380",pat:"6",tn:"baiduCustNativeAD",rss1:"#FFFFFF",conBW:"1",adp:"1",ptt:"0",titFF:"%E5%BE%AE%E8%BD%AF%E9%9B%85%E9%BB%91",titFS:"14",rss2:"#000000",titSU:"0",ptbg:"90",piw:"0",pih:"0",ptp:"0"}</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script>';

var fudong=r_2;

if (art_up_isbd==1){
var art_bot=art_upp[0];
}else{
var art_bot=art_upp[1];
}

if (projectName!='article')
{
art_bot=art_upp[1];
}

var gg_l = '';
/*if("undefined" != typeof tougao && projectName=='photoshop'){
	gg_l +='<a href="https://huke88.com/?source=jb51" target="_blank"><img src="//files.jb51.net/image/ps300.png?0926" width="300" height="250" class="nohref" data-baiduimageplus-ignore=""></a>';
}else{*/
gg_l += '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
gg_l += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6438537127"></ins>';
gg_l += '<scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
//}
//var gg_l= '<scr'+'ipt type="text/javascript" src="//jscode.jbzj.com/lgycphfyo.js"></scr'+'ipt>';

//u811641
var gg_r = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/bwyffvsfzdec.js"></sc'+'ript>';

//var r1gg=side_up;

var r1gg='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
r1gg+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2817964327"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

var r2gg='<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt>';
r2gg+='<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2129515335"></ins>';
r2gg+='<scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';

var rbbd = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/source/hcy/static/z/common/l/k-blu.js"></sc'+'ript>';

var dxy728 = '<a href="http://www.33ip.com" target="_blank"><img src="//files.jb51.net/image/33ip_728.gif"></a>';
var dxy320 = '<a href="http://edu.jb51.net/" target="_blank"><img src="//files.jb51.net/image/edu320.png" width=320 height=90></a>';

//u1424765
var qq_index = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/rldzo3l5kz.js"></scri'+'pt>';

jbMap['logo_m'] = function() {
	document.writeln(logo_m);
};

jbMap['logo_r'] = function() {
	document.writeln(logo_r);
};

jbMap['idctu'] = function() {
	document.writeln(idctu);
};

jbMap['tonglanbd'] = function() {
	document.writeln(tonglanbd);
};

jbMap['tonglangg'] = function() {
	document.writeln(tonglangg);
};

jbMap['tonglan1'] = function() {
	document.writeln(tonglan1);
};

jbMap['tonglan1_2'] = function() {
	document.writeln(tonglan1_2);
};

jbMap['tonglan2'] = function() {
	document.writeln(tonglan2);
};

jbMap['tonglan2_1'] = function() {
	document.writeln(tonglan2_1);
};

jbMap['tonglan2_2'] = function() {
	document.writeln(tonglan2_2);
};

jbMap['tonglan3_1'] = function() {
	document.writeln(tonglan3_1);
};

jbMap['tonglan3_2'] = function() {
	document.writeln(tonglan3_2);
};

jbMap['tonglan3_3'] = function() {
	document.writeln(tonglan3_3);
};

jbMap['tonglan_1024'] = function() {
	document.writeln(tonglan_1024);
};

jbMap['botad'] = function() {
	document.writeln(botad);
};

jbMap['idctu1'] = function() {
	document.writeln(idctu1);
};

jbMap['idctu2'] = function() {
	document.writeln(idctu2);
};

jbMap['tit_down'] = function() {
	document.writeln(tit_down);
};

jbMap['art_up'] = function() {
	document.writeln(art_up);
};

jbMap['art_bot'] = function() {
	document.writeln(art_bot);
};

jbMap['art_down'] = function() {
	document.writeln(art_down);
};

jbMap['art_down2'] = function() {
	document.writeln(art_down2);
};

jbMap['list_r_r300'] = function() {
	document.writeln(list_r_r300);
};

jbMap['art_xg'] = function() {
	document.writeln(art_xg);
};

jbMap['side_up'] = function() {
	document.writeln(side_up);
};

jbMap['r_2'] = function() {
	document.writeln(r_2);
};

jbMap['fudong'] = function() {
	document.writeln(fudong);
};


jbMap['gg_l'] = function() {
	document.writeln(gg_l);
};

jbMap['gg_r'] = function() {
	document.writeln(gg_r);
};

jbMap['r1gg'] = function() {
	document.writeln(r1gg);
};

jbMap['r2gg'] = function() {
	document.writeln(r2gg);
};

jbMap['rbbd'] = function() {
	document.writeln(rbbd);
};

jbMap['bd200'] = function() {
	document.writeln(bd200);
};


jbMap['bctools'] = function() {
	document.writeln(bctools);
};

jbMap['dxy728'] = function() {
	document.writeln(dxy728);
};

jbMap['dxy320'] = function() {
	document.writeln(dxy320);
};

jbMap['qq_index'] = function() {
	document.writeln(qq_index);
};

if (jQuery) { 
/*$jb51_top = $('#jb51_topbar');
if($jb51_top){
    $jb51_top.html('<div class="userbar"><a href="http://tougao.jb51.net" target="_blank">投稿中心</a><img style="width:32px; height:22px" src="http://img.jb51.net/skin/2016/images/newn.gif" alt="hot"></div>');
}

$addnav = $('.watch');
if($addnav){
    $addnav.before('<li><div class="one"><a href="http://wxbj.jb51.net" target="_blank">微信编辑器</a></div></li>');
	$(".watch .one a").attr("href","http://www.jb51.net/about.htm");
}*/

$yuanshichang = $('.topToolsLeft');
if($yuanshichang){
	$yuanshichang.append('<a href="https://www.yuanshichang.com/" target="_blank" style="color:red">源码商城</a><a href="http://idc.jb51.net/" target="_blank" style="color:red">脚本云</a>');
}
if ("undefined" != typeof ourl) {
    if (ourl) {
        $content = $('#content');
        if($content){
			if(ourl.indexOf(":") > 0 ){
            $content.append('<p>原文链接：' + ourl +'</p>');
			}else{
			$content.append('<p>原文链接：' + base64decode(ourl) +'</p>');
			}
        }
    }
}
$(function(){ 
var vzl=document.getElementById('txtlink').getElementsByTagName('span'),j=0;
for(var i=0;i<vzl.length;i++){
	j=i%4?j:++j;
	vzl[i].style=j%2?'color:red':'color:blue';
}
}); 


var shequlink = '<div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/jb51ewm.png" /></div><div class="fr"><p>微信公众号搜索 “ <span>脚本之家</span> ” ，选择关注</p><p>程序猿的那些事、送书等活动等着你</p></div></div>';
var newslink = '<div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/itewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>IT服务圈儿</span> ” ，选择关注</p><p>每日十点播报，把握行业热点，紧跟行业脚步</p></div></div>';
$content = $('#content');
//shequlink=art_wxz+shequlink;
if("undefined" != typeof downlm && downlm == "art-news"){
	if($content){$content.append(newslink);}
}else{
    if($content){$content.append(shequlink);}
}



/*
$topnum = $('.newsList.newList-in');
if("undefined" == typeof tougao){
	if($topnum){$topnum.append('<li><EM class="no11">11</EM><a href="https://www.xrcloud.net/ruicloud/AnniversaryActive?from=jiaobenzhijia" title="【新睿云】1117周年庆，产品低至1.7折" target="_blank">【新睿云】1117周年庆，产品低至1.7折</a></li>');}
}
var topli=$('#ic .list');
if(topli){
	topli.find("li:eq(0)").html('<li><a href="/list/list_207_1.htm" title="java" target="_blank" class="tag">java</a><a href="/article/160064.htm" title="开发10年，全记在这本Java进阶宝典里了" target="_blank" class="tt" style=" color:red;">开发10年，全记在这本Java进阶宝典里了</a><span>04-22</span></li>');
}*/
//var el = $('#footer'); 
//el.html(el.html().replace(/脚本之家/ig, '徐州蓝佳网络科技有限公司'));

/*if(getCookie("zfbhb")!="ok"){
	$('#content').append('<div id="hbbox"><a href="http://dwz.cn/7oNQfU" target="_blank"><img src="//files.jb51.net/image/0yg.jpg"></a></div>');
	setCookie("zfbhb","ok");
}
var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);
if("undefined" != typeof tougao && projectName=='3DMAX'){
$('.article-right').prepend("<div class='r300 clearfix mb10'><a href='https://jq.qq.com/?_wv=1027&k=5IxNMeP' target='_blank'><img src='//files.jb51.net/image/3dmax300.gif?0613' width='300' height='200'></a></div>");
}
if("undefined" == typeof tougao){
$('.article-right').prepend("<div class='r300 clearfix mb10'><a href='http://tg.iopen.com.cn/pc/jbzj/index.html?utm_source=jiaobenzhijia' target='_blank'><img src='//files.jb51.net/image/iopen250.gif'></a></div>");
}*/	
}
