(function(){
  var href = window.location.href.toString(); //获取当前链接,转换成字符串
  var domain = document.domain; // 域名
  var key = domain.split('.')[1]; // key: 网站名称
  
  // 设置移动访问的值
  var browser = {
    versions: function () {
      var u = navigator.userAgent, app = navigator.appVersion;
      return {//移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
      };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
  }
  // 电脑端 域名
  var pcAllDomain = {
    'www.onlinedown.net': 'm.onlinedown.net',
    'news.onlinedown.net': 'mnews.onlinedown.net',
    'www.pcsoft.com.cn': 'm.pcsoft.com.cn',
    'www.188soft.com': 'm.188soft.com',
    'www.downza.cn': 'm.downza.cn'
  };
  // 移动端 域名
  var mAllDomain = {
    'm.onlinedown.net': 'www.onlinedown.net',
    'mnews.onlinedown.net': 'news.onlinedown.net',
    'm.pcsoft.com.cn': 'www.pcsoft.com.cn',
    'm.188soft.com': 'www.188soft.com'
  }
  if (browser.versions.mobile && (browser.versions.android || browser.versions.iPhone || browser.versions.iPad)) { //判断是否为移动设备
    if (pcAllDomain.hasOwnProperty(domain)) {  //判断链接的主域名是否在非移动端的对象里面存在 
      var secondKey = getVarFuncs('secondKey',domain, href);
      var other = getVarFuncs('other',domain, href);
      var idHtml = getVarFuncs('idHtml',domain, href);
      var jumpUrl = getReturnUrl(key, secondKey, pcAllDomain[domain], other, idHtml);
      console.log(jumpUrl);
      postApi(href, jumpUrl); // 统计接口方法
      setTimeout(function(){  
        window.location.href = jumpUrl; 
      }, 50);
    }
  } else { // 非移动设备
    if (mAllDomain.hasOwnProperty(domain)) { //判断链接的主域名是否在移动端的对象里面存在
      var secondKey = getVarFuncs('secondKey',domain, href);
      var other = getVarFuncs('other',domain, href);
      var idHtml = getVarFuncs('idHtml',domain, href);
      var jumpUrl = getReturnUrl(key, secondKey, mAllDomain[domain], other, idHtml);
      console.log(jumpUrl);
      postApi(href, jumpUrl); // 统计接口方法
      setTimeout(function(){  
        window.location.href = jumpUrl; 
      }, 50);
    }
  }
  
  /**
   * 处理secondkey idHtml other 变量
   * @param {string} varKey 变量标识
   * @param {string} domain 网站域名
   * @param {string} href 原始链接
   * @returns
   */
  function getVarFuncs(varKey,domain, href){
    var halfUrl = location.pathname;
    var secondKey = (halfUrl == '/') ? 'none' : halfUrl.split('/')[1];
    var idHtml = '';
    if (halfUrl != '/') {
      idHtml = halfUrl.replace('\/' + secondKey + '\/', "")
    }
    var varFuncs = {
      secondKey: function(){
        if (domain.includes('onlinedown')){
          if (href.includes('mnews')){
            return 'news';
          } else if (href.includes('news')){
            return 'mnews';
          }
        }
        if (domain.includes('pcsoft') && halfUrl != '/article/' && secondKey == 'article') {return 'wap_article';}
        if (domain.includes('pcsoft') && halfUrl == '/android/soft/') {return 'soft';}
        return secondKey;
      },
      idHtml: function(){
        if (domain.includes('onlinedown') && href.includes('news')) {return location.pathname;} 
        if (domain.includes('pcsoft') && halfUrl == '/android/soft/') {return '';}
        if (domain.includes('pcsoft') && idHtml == 'game/') {return '';}
        return idHtml;
      },
      other: function() {
        if (domain.includes('pcsoft') && halfUrl == '/soft/' && secondKey == 'soft') {return '/android';}
        return '';
      }
    }
    return varFuncs[varKey]();
  }
  
  /**
   * 处理原始链接
   * @param {string} key 网站名称
   * @param {string} secondKey 链接模块
   * @param {string} domain 网站域名
   * @param {string} other 处理过的特殊字符
   * @param {string} idHtml 链接相对路径拼接
   * @returns 返回处理过的链接地址
   */
  function getReturnUrl(key, secondKey, domain, other, idHtml) {
    var http = location.protocol + '//'; // 协议是http:还是https:
    var arr = []; //特殊链接数组
    arr['onlinedown'] = ['android', 'game', 'news', 'mnews', 'nicepc', 'hits', 'iphone', 'dnb'];
    arr['pcsoft'] = ['article', 'wap_article', 'soft'];
    arr['downza'] = ['bt'];
    var secondObjKey = secondKey;
    if (arr.hasOwnProperty(key) && arr[key].includes(secondKey)) { //判断是否在特殊数组里
      var onlinedownOtherKey = ['nicepc', 'hits', 'iphone', 'dnb'];
      secondObjKey = onlinedownOtherKey.includes(secondKey) ? 'none' : key + '_' + secondKey;
    } else {
      var pcOnlineDownArr = ['none','new','sort','soft','zt','miniapp'];
      if (domain == 'm.onlinedown.net' && !(pcOnlineDownArr.includes(secondKey))) { // 判断域名是否为华军网站电脑端访问
        // 华军电脑端访问特殊处理方法
        return onlinedown(href);
      }
    }
    /**
     * 根据对象key值返回链接地址
     * @param {string} objKey 处理过的链接模块
     * @returns
     */
    function getUrlBySecondObjKey(objKey) {
      var secondKeyObj = {
        'none': function () { return http + domain; },
        'onlinedown_news': function () { return 'https://news.onlinedown.net' + idHtml },
        'onlinedown_mnews': function () { return 'https://mnews.onlinedown.net' + idHtml },
        'onlinedown_android': function () { return http + domain + '/game/' + idHtml },
        'onlinedown_game': function () { return http + domain + '/android/' + idHtml },
        'pcsoft_soft': function () { return http + domain + other + '/soft/' + idHtml },
        'pcsoft_wap_article': function () { return http + domain + '/article/' + idHtml },
        'pcsoft_article': function () { return http + domain + '/wap_article/' + idHtml },
        'downza_bt': function () { return http + domain + '/bt/' + (idHtml == '' ? 'category.html' : idHtml) }
      }
      return secondKeyObj.hasOwnProperty(objKey) ? secondKeyObj[objKey]() : http + domain + '/' + secondKey + '/' + idHtml;
    }
  
    return getUrlBySecondObjKey(secondObjKey);
  }
  
  /**
   * 请求统计接口 原生ajax请
   * @param {*} startUrl 原始链接
   * @param {*} endUrl 处理过的跳转链接
   */
  function postApi(startUrl, endUrl) {
    var params = "startUrl=" + startUrl + "&endUrl=" + endUrl; //拼接请求参数
    var postAjax = null;
    try {
      postAjax = new XMLHttpRequest();
    } catch (e) {
      //兼容IE5/6
      postAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    postAjax.open('POST', 'https://mip.js.xzstatic.com/collect', true);
    postAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    postAjax.send(params);
  }
  
  /**
   * 华军原有js特殊链接处理(只移动端使用)
   * @param {string} href 原始链接
   */
  function onlinedown(href) {
    var strUrl = href;
    var arrUrl = strUrl.split("/");
    var strPage = arrUrl[arrUrl.length - 1];
    var str1 = arrUrl[3];
    var str2 = arrUrl[4] || "";
    var str3 = arrUrl[5] || "";
    strPage = strPage.replace(".htm", "");
    strPage = strPage.replace("_2", "");
    var jumpUrl = "https://m.onlinedown.net/app.php?str1=" + str1 + "&str2=" + str2 + "&str3=" + str3;
    console.log('特殊');
    return jumpUrl;
  }
})()
