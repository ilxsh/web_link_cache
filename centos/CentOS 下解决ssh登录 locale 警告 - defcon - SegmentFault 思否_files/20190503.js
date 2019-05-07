/**
 * Created by sf on 2018/8/3.
 */
var areaArr = []

var trackHost = 'https://segmentfault.com';
var viewApi = trackHost + '/ad/track/view'
var clickApi = trackHost + '/ad/track/click'

function ajax(opt) {
    opt = opt || {};//opt以数组方式存参，如果参数不存在就为空。
    opt.method = opt.method.toUpperCase() || 'POST';//转为大写失败，就转为POST
    opt.url = opt.url || '';//检查URL是否为空
    opt.async = opt.async || true;//是否异步
    opt.data = opt.data || null;//是否发送参数，如POST、GET发送参数
    opt.success = opt.success || function () {}; //成功后处理方式
    var xmlHttp = null;//定义1个空变量
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();//如果XMLHttpRequest存在就新建，IE大于9&&非IE有效
    }
    else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');//用于低版本IE
    }
    var params = [];//定义1个空数组
    for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);//将opt里的data存到push里
    }
    var postData = params.join('&');//追加个& params
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);//开始请求
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');//发送头信息，与表单里的一样。
        xmlHttp.send(postData);//发送POST数据
    }
    else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url, opt.async);//GET请求
        xmlHttp.send(null);//发送空数据
    }
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {//readyState有5个状态，可以百度一下看看都有什么。当请求完成，并且返回数据成功
            opt.success(xmlHttp.responseText);//返回成功的数据
        }
    };
}

var sTitle="";
window.SFGridAd = {};
SFGridAd.d = function(o) {
    sTitle = o.getAttribute('stitle');
    document.getElementById("gridMapHoverBox").style.display = "block"
}

SFGridAd.e = function(o) {
    sTitle = "";
    document.getElementById("gridMapHoverBox").style.display = "none"
}

SFGridAd.c = function(id) {

    var clickApi2 = clickApi + '?id=' + id

    ajax({url: clickApi2, method: 'GET'})
};

// 这里 data 需要注入
[{"id":"1750000018681388","user_id":"1030000002496563","box_ad_id":"0","started":"1553788800","ended":"1557417600","cycles":"2","status":"0","banner":"\/593\/351\/593351944-5c9c277fa5689","link":"https:\/\/www.fundebug.com\/?utm_source=sf_lattice_ad","title":"\u4e00\u884c\u4ee3\u7801\u641e\u5b9aBUG\u76d1\u63a7","area_info":{"area":"F5:I5","height":"17","width":"68","left":"85","top":"68","pos":{"rowTop":5,"rowBottom":5,"columnLeft":6,"columnRight":9},"size":4},"created":"1553702483","modified":"1553737645"},{"id":"1750000018986889","user_id":"1030000006669669","box_ad_id":"0","started":"1556208000","ended":"1559836800","cycles":"6","status":"0","banner":"\/146\/246\/1462460668-5cc16a1f1e095","link":"https:\/\/www.apipost.cn\/?fr=sf","title":"\u53ef\u76f4\u63a5\u751f\u6210\u6587\u6863\u7684API\u8c03\u8bd5\u3001\u7ba1\u7406\u5de5\u5177","area_info":{"area":"A1:E1","height":"17","width":"85","left":"0","top":"0","pos":{"rowTop":1,"rowBottom":1,"columnLeft":1,"columnRight":5},"size":5},"created":"1556179397","modified":"1556179525"},{"id":"1750000019033855","user_id":"1030000008298805","box_ad_id":"0","started":"1556812800","ended":"1557417600","cycles":"1","status":"0","banner":"\/315\/987\/3159875209-5cc70b759ebce","link":"https:\/\/www.codecolor.cn\/","title":"\u5343\u53d8\u4e07\u5316\uff0c\u7cbe\u6479\u7ec6\u7422\uff0c\u524d\u7aefCSS\u6280\u672f\u7684\u96c6\u5408","area_info":{"area":"G7:H7","height":"17","width":"34","left":"102","top":"102","pos":{"rowTop":7,"rowBottom":7,"columnLeft":7,"columnRight":8},"size":2},"created":"1556546630","modified":"1556548510"},{"id":"1750000019047496","user_id":"1030000010454649","box_ad_id":"0","started":"1556812800","ended":"1557417600","cycles":"1","status":"0","banner":"\/163\/193\/1631931937-5cc8280bb8986","link":"https:\/\/www.84php.com","title":"\u6700\u6613\u5165\u95e8\u7684PHP\u6846\u67b6","area_info":{"area":"I2:K4","height":"51","width":"51","left":"136","top":"17","pos":{"rowTop":2,"rowBottom":4,"columnLeft":9,"columnRight":11},"size":9},"created":"1556620722","modified":"1556621355"},{"id":"1750000019048405","user_id":"1030000010454649","box_ad_id":"0","started":"1556812800","ended":"1557417600","cycles":"1","status":"0","banner":"\/391\/268\/3912683593-5cc829a1afbb8","link":"https:\/\/www.84php.com","title":"\u6700\u6613\u5165\u95e8\u7684PHP\u6846\u67b6","area_info":{"area":"F2:H4","height":"51","width":"51","left":"85","top":"17","pos":{"rowTop":2,"rowBottom":4,"columnLeft":6,"columnRight":8},"size":9},"created":"1556621676","modified":"1556621759"}].forEach(function(item) {
    var html = '<area shape="rect" ' +
        'target="_blank" ' +
        'onmouseover="SFGridAd.d(this)" ' +
        'onmouseout="SFGridAd.e(this)" ' +
        'onclick="SFGridAd.c(' + item.id + ')" ' +
        'coords="' + item.area_info.left + ',' + item.area_info.top + ',' + ((+item.area_info.left)+(+item.area_info.width)) + ',' + ((+item.area_info.top)+(+item.area_info.height)) + '" ' +
        'href="' + item.link + '" ' +
        'stitle="' + item.title + '" />'

    areaArr.push(html)
})

document.getElementById('gridsMap').innerHTML = areaArr.join('')

document.getElementById('gridsMap').onmousemove = function(e) {
    var pos = getMousePos(e)

    document.getElementById("gridMapHoverBox").style.left = pos.x + 20 + 'px'
    document.getElementById("gridMapHoverBox").style.top = pos.y + 20 + 'px'

    document.getElementById("gridMapHoverBox").innerHTML = sTitle
}

// 增加 view 统计
setTimeout(function() {
    isShow = document.querySelector('img[src^="https://static.segmentfault.com/sponsor"]').clientHeight > 0
    if (isShow) ajax({url: viewApi, method: 'GET'})
}, 0)

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}
