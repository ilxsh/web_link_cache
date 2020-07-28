(function(){
    var modelCache = {},
        conditions = [],
        checkRun = function(){
            for(var c = 0,cl = conditions.length,deps,callback,isOk,isRun,conTmp = []; c < cl; c++){
                deps = conditions[c].deps;
                callback = conditions[c].callback;
                isRun = conditions[c].isRun;
                isOk = true;
                for(var d = 0,dl =deps.length; d <dl; d++){
                    if(!modelCache.hasOwnProperty(deps[d])){
                        isOk = false;
                        break;
                    }else if(!modelCache[deps[d]].isRun){
                        isOk = false;
                        break;
                    }
                }
                if(isOk && !isRun){
                    callback();
                    conditions[c].isRun = true;
                    if(conditions[c].hasOwnProperty('model')){
                        modelCache[ conditions[c].model].isRun = true;
                    }
                }else{
                    conTmp.push(conditions[c])
                }
            }
            conditions = [].concat(conTmp);
            conTmp.length = 0;
        };
    window.reachJS = function(model){
        if(!modelCache.hasOwnProperty(model)){
            modelCache[model] = {isRun:true};
        }
        checkRun();
    };
    window.runAs = function(deps,callback,model){
        var conTmp = {
            deps:deps,
            callback:callback,
            isRun:false
        };

        if(model){
            if(!modelCache.hasOwnProperty(model)){
                modelCache[model] = {isRun:false};
                conTmp.model = model;
            }
        }
        conditions.push(conTmp);
        conditions.sort(function(a,b){
            return a.deps.length - b.deps.length;
        });
        checkRun();
    }
})();

var HTTP_BROWSER = {};
var HTTP_USERAGENT = navigator.userAgent.toLowerCase();
http_get_browser_version({'ie': 'msie', 'firefox': '', 'chrome': '', 'opera': '', 'safari': '', 'mozilla': '', 'webkit': '', 'maxthon': '', 'qq': 'qqbrowser', 'rv': 'rv'});
if (HTTP_BROWSER.safari) {
    HTTP_BROWSER.firefox = true;
}
HTTP_BROWSER.opera = HTTP_BROWSER.opera ? opera.version() : 0;

var AJAX_JSLOADED = [];
var AJAX_EVALSCRIPTS = [];

/**
 * 根据ID获取对象
 */
function core_get_obj(id) {
    return !id ? null : document.getElementById(id);
}

/**
 * 是否为undefined
 */
function core_is_undefined(variable) {
    return typeof variable == 'undefined' ? true : false;
}

/**
 * 添加事件
 */
function event_attach(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj : eventobj;
    if (obj.addEventListener) {
        obj.addEventListener(evt, func, false);
    } else if (eventobj.attachEvent) {
        obj.attachEvent('on' + evt, func);
    }
}

/**
 * 移除事件
 */
function event_detach(obj, evt, func, eventobj) {
    eventobj = !eventobj ? obj : eventobj;
    if (obj.removeEventListener) {
        obj.removeEventListener(evt, func, false);
    } else if (eventobj.detachEvent) {
        obj.detachEvent('on' + evt, func);
    }
}

/**
 * 获取事件对象
 */
function event_get_evt() {
    if (document.all) return window.event;
    var func = event_get_evt.caller;
    while (func != null) {
        var arg0 = func.arguments[0];
        if (arg0) {
            if ((arg0.constructor == Event || arg0.constructor == MouseEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                return arg0;
            }
        }
        func = func.caller;
    }
    return null;
}

/**
 * 阻止事件对象的默认行为及冒泡传播
 */
function event_stop_propagation(event, preventDefault, stopPropagation) {
    var preventDefault = core_is_undefined(preventDefault) ? 1 : preventDefault;
    var stopPropagation = core_is_undefined(stopPropagation) ? 1 : stopPropagation;
    var e = event ? event : window.event;
    if (!e) {
        e = event_get_evt();
    }
    if (!e) {
        return null;
    }
    if (preventDefault) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    }
    if (stopPropagation) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }
    return e;
}

/**
 * 浏览器版本计算
 */
function http_get_browser_version(types) {
    var other = 1;
    var i;
    for (i in types) {
        var v = types[i] ? types[i] : i;
        var ver;
        if (HTTP_USERAGENT.indexOf(v) != -1) {
            var re = new RegExp(v + '(\\/|\\s|:)([\\d\\.]+)', 'ig');
            var matches = re.exec(HTTP_USERAGENT);
            ver = matches != null ? matches[2] : 0;
            other = ver !== 0 && v != 'mozilla' ? 0 : other;
        } else {
            ver = 0;
        }
        eval('HTTP_BROWSER.' + i + '= ver');
    }
    HTTP_USERAGENT.other = other;
}


/**
 * 添加url参数
 *
 * @param url 原始url
 * @param params 链接参数数组，如 ['name=jianbao','age=18']
 */
function http_add_url_params(url, params) {
    params = params.join('&');
    url += (url.indexOf('?') == -1 ? '?' : '&') + params;
    return url;
}

/**
 * url 调整
 * @param url 网址
 * @param win 窗体对象，可选值：window|parent|top
 */
function http_goto(url, win) {
    var _win = win ? win : window;
    _win.location.href = url;
}

/**
 * 是否在数组中
 */
function list_in_array(needle, haystack) {
    if (typeof needle == 'string' || typeof needle == 'number') {
        for (var i in haystack) {
            if (haystack[i] == needle) {
                return true;
            }
        }
    }
    return false;
}

/**
 * 计算字符串的hash值
 */
function string_hash(string, length) {
    var length = length ? length : 32;
    var start = 0;
    var i = 0;
    var result = '';
    var filllen = length - string.length % length;
    for (i = 0; i < filllen; i++) {
        string += "0";
    }
    while (start < string.length) {
        result = string_xor(result, string.substr(start, length));
        start += length;
    }
    return result;
}

/**
 * 字符串移位运算
 */
function string_xor(s1, s2) {
    var s = '';
    var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var max = Math.max(s1.length, s2.length);
    for (var i = 0; i < max; i++) {
        var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
        s += hash.charAt(k % 52);
    }
    return s;
}

/**
 * 与php的strlen方法用法一样
 */
function string_length(string) {
    var str = string + '';
    var i = 0,
        chr = '',
        lgth = 0;
    var getWholeChar = function(str, i) {
        var code = str.charCodeAt(i);
        var next = '', prev = '';
        if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
            if (str.length <= (i + 1)) {
                throw 'High surrogate without following low surrogate';
            }
            next = str.charCodeAt(i + 1);
            if (0xDC00 > next || next > 0xDFFF) {
                throw 'High surrogate without following low surrogate';
            }
            return str.charAt(i) + str.charAt(i + 1);
        } else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
            if (i === 0) {
                throw 'Low surrogate without preceding high surrogate';
            }
            prev = str.charCodeAt(i - 1);
            if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
                throw 'Low surrogate without preceding high surrogate';
            }
            return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
        }
        return str.charAt(i);
    };
    for (i = 0, lgth = 0; i < str.length; i++) {
        if ((chr = getWholeChar(str, i)) === false) {
            continue;
        } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
        lgth++;
    }
    return lgth;
}

/**
 * Ajax类
 *
 * @param recvType 返回类型
 * @param waitId loading对象ID
 */
function Class_Ajax(recvType, waitId) {
    var ajax = new Object();
    ajax.loading = '请稍候...';
    ajax.recvType = recvType ? recvType : 'XML';
    ajax.waitId = waitId ? core_get_obj(waitId) : null;
    ajax.resultHandle = null;
    ajax.sendString = '';
    ajax.targetUrl = '';
    ajax.callback = null;

    ajax.setLoading = function(loading) {
        if (typeof loading !== 'undefined' && loading !== null) ajax.loading = loading;
    };

    ajax.setRecvType = function(recvtype) {
        ajax.recvType = recvtype;
    };

    ajax.setWaitId = function(waitId) { // waitId 即可是对象ID，也可是对象
        ajax.waitId = typeof waitId == 'object' ? waitId : core_get_obj(waitId);
    };

    ajax.createXMLHttpRequest = function() {
        var request = false;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
            if (request.overrideMimeType) {
                request.overrideMimeType('text/xml');
            }
        } else if (window.ActiveXObject) {
            var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
            for (var i = 0; i < versions.length; i++) {
                try {
                    request = new ActiveXObject(versions[i]);
                    if (request) {
                        return request;
                    }
                } catch (e) {}
            }
        }
        return request;
    };

    ajax.XMLHttpRequest = ajax.createXMLHttpRequest();
    ajax.showLoading = function() {
        if (ajax.waitId && (ajax.XMLHttpRequest.readyState != 4 || ajax.XMLHttpRequest.status != 200)) {
            ajax.waitId.style.display = '';
            ajax.waitId.innerHTML = ajax.loading;
        }

    };

    ajax.processHandle = function() {
        if (ajax.XMLHttpRequest.readyState == 4 && ajax.XMLHttpRequest.status == 200) {
            if (ajax.waitId) {
                ajax.waitId.style.display = 'none';
            }
            if (ajax.recvType == 'HTML') {
                ajax.resultHandle(ajax.XMLHttpRequest.responseText, ajax);
            } else if (ajax.recvType == 'XML') {
                if (!ajax.XMLHttpRequest.responseXML || !ajax.XMLHttpRequest.responseXML.lastChild || ajax.XMLHttpRequest.responseXML.lastChild.localName == 'parsererror') {
                    ajax.resultHandle('<a href="' + ajax.targetUrl + '" target="_blank" style="color:red">内部错误，无法显示此内容</a>', ajax);
                } else {
                    ajax.resultHandle(ajax.XMLHttpRequest.responseXML.lastChild.firstChild.nodeValue, ajax);
                }
            } else if (ajax.recvType == 'JSON') {
                var res = null;
                try {
                    res = (new Function("return (" + ajax.XMLHttpRequest.responseText + ")"))();
                } catch (e) {
                    res = null;
                }
                ajax.resultHandle(res, ajax);
            }
        }
    };

    ajax.get = function(targetUrl, resultHandle) {
        setTimeout(function() {
            ajax.showLoading()
        }, 250);
        ajax.targetUrl = targetUrl;
        ajax.XMLHttpRequest.onreadystatechange = ajax.processHandle;
        ajax.resultHandle = resultHandle;
        if (window.XMLHttpRequest) {
            ajax.XMLHttpRequest.open('GET', ajax.targetUrl);
            ajax.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            ajax.XMLHttpRequest.send(null);
        } else {
            ajax.XMLHttpRequest.open("GET", targetUrl, true);
            ajax.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            ajax.XMLHttpRequest.send();
        }
    };
    ajax.post = function(targetUrl, sendString, resultHandle) {
        setTimeout(function() {
            ajax.showLoading()
        }, 250);
        ajax.targetUrl = targetUrl;
        ajax.sendString = sendString;
        ajax.XMLHttpRequest.onreadystatechange = ajax.processHandle;
        ajax.resultHandle = resultHandle;
        ajax.XMLHttpRequest.open('POST', targetUrl);
        ajax.XMLHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        ajax.XMLHttpRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        ajax.XMLHttpRequest.send(ajax.sendString);
    };
    ajax.getJSON = function(targetUrl, resultHandle) {
        ajax.setRecvType('JSON');
        ajax.get(targetUrl + '&ajaxData=json', resultHandle);
    };
    ajax.getHTML = function(targetUrl, resultHandle) {
        ajax.setRecvType('HTML');
        ajax.get(targetUrl + '&ajaxData=html', resultHandle);
    };

    return ajax;
}

/**
 * 附加JS脚本
 */
function ajax_append_script(src, text, reload, charset) {
    reload = true; // 强制reload
    var id = string_hash(src + text);
    if (!reload && list_in_array(id, AJAX_EVALSCRIPTS)) return;
    if (reload && core_get_obj(id)) {
        core_get_obj(id).parentNode.removeChild(core_get_obj(id));
    }

    AJAX_EVALSCRIPTS.push(id);
    var scriptNode = document.createElement("script");
    scriptNode.type = "text/javascript";
    scriptNode.id = id;
    scriptNode.charset = charset ? charset : (HTTP_USERAGENT.firefox ? document.characterSet : document.charset);
    try {
        if (src) {
            scriptNode.src = src;
            scriptNode.onloadDone = false;
            scriptNode.onload = function() {
                scriptNode.onloadDone = true;
                AJAX_JSLOADED[src] = 1;
            };
            scriptNode.onreadystatechange = function() {
                if ((scriptNode.readyState == 'loaded' || scriptNode.readyState == 'complete') && !scriptNode.onloadDone) {
                    scriptNode.onloadDone = true;
                    AJAX_JSLOADED[src] = 1;
                }
            };
        } else if (text) {
            scriptNode.text = text;
        }
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
    } catch (e) {}
}

/**
 * 执行文本中的JS脚本
 */
function ajax_eval_script(string) {
    if (string.indexOf('<script') == -1) return string;
    var p = /<script[^\>]*?>([^\x00]*?)<\/script>/ig;
    var arr = [];
    while (arr = p.exec(string)) {
        var p1 = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/i;
        var arr1 = [];
        arr1 = p1.exec(arr[0]);
        if (arr1) {
            ajax_append_script(arr1[1], '', arr1[2], arr1[3]);
        } else {
            p1 = /<script(.*?)>([^\x00]+?)<\/script>/i;
            arr1 = p1.exec(arr[0]);
            ajax_append_script('', arr1[2], arr1[1].indexOf('reload=') != -1);
        }
    }
    return string;
}

/**
 * 显示 请稍候...
 */
function ajax_show_loading(waitId, display, loading) {
    var waitId = waitId ? waitId : 'ajaxWaitId';
    var display = display ? display : '';
    var loading = loading ? loading : '请稍候...';

    core_get_obj(waitId).innerHTML = loading;
    core_get_obj(waitId).style.display = display;
}

/**
 * ajax显示文本
 */
function ajax_innerhtml(showObj, string) {
    if (!showObj) {
        return false;
    }
    if (showObj.tagName != 'TBODY') {
        showObj.innerHTML = string;
    } else {
        while (showObj.firstChild) {
            showObj.firstChild.parentNode.removeChild(showObj.firstChild);
        }
        var div1 = document.createElement('DIV');
        div1.id = showObj.id + '_div';
        div1.innerHTML = '<table><tbody id="' + showObj.id + '_tbody">' + string + '</tbody></table>';
        core_get_obj('appendParent').appendChild(div1);
        var trs = div1.getElementsByTagName('TR');
        var len = trs.length;
        for (var i = 0; i < len; i++) {
            showObj.appendChild(trs[0]);
        }
        var inputs = div1.getElementsByTagName('INPUT');
        var l = inputs.length;
        for (i = 0; i < l; i++) {
            showObj.appendChild(inputs[0]);
        }
        div1.parentNode.removeChild(div1);
    }
}

/**
 * ajax Get请求
 *
 * @param url      【必填】请求URL
 * @param showId   【建议填写】请求结果显示区的ID
 * @param callback  回调函数
 * @param waitId    请求进度显示区的ID
 * @param loading   提示信息，如“请稍候...”
 * @param display   请求完成后，显示区CSS样式，默认显示 （'' 或 'none'）
 */
function ajax_send_get(url, showId, callback, waitId, loading, display) {
    showId = typeof showId == 'undefined' || showId === null ? 'ajaxShowId' : showId;
    waitId = typeof waitId == 'undefined' || waitId === null ? showId : waitId;
    var ajax = new Class_Ajax();
    ajax.setLoading(loading);
    ajax.setWaitId(waitId);
    ajax.display = typeof display == 'undefined' || display == null ? '' : display;
    ajax.showId = core_get_obj(showId);
    ajax.callback = callback;

    if (url.substr(string_length(url) - 1) == '#') {
        url = url.substr(0, string_length(url) - 1);
        ajax.autoGoto = 1;
    }

    if (ajax.autoGoto) {
        url = http_add_url_params(url, ['inAjax=1','showId=' + showId,'toDiv=' + showId]);
    } else {
        if (typeof showId == "undefined") {
            url = http_add_url_params(url, ['inAjax=1']);
        } else {
            url = http_add_url_params(url, ['inAjax=1', 'showId=' + showId]);
        }
    }

    ajax.get(url, function(result, ajax) {
        if (ajax.showId) {
            ajax.showId.style.display = ajax.display;
            ajax_innerhtml(ajax.showId, result);
            if (ajax.autoGoto) {
                scroll(0, ajax.showId.offsetTop);
            }
        }
        ajax_eval_script(result);
        
        // 回调函数
        if (typeof ajax.callback == 'function') {
            ajax.callback();
        }
    });
}

/**
 * 【表单】ajax Post请求
 *
 * @param formId      【必填】表单ID
 * @param submitBtnId 【建议填写】提交按钮ID
 * @param showId      【建议填写】请求结果显示区的ID
 * @param callback     回调函数
 * @param waitId       请求进度显示区的ID
 * @param loading      提示信息，如“请稍候...”
 * @param display      请求完成后，显示区CSS样式，默认显示 （'' 或 'none'）
 */
function ajax_send_post(formId, submitBtnId, showId, callback, waitId, loading, display) {
    showId = typeof showId == 'undefined' || showId === null ? 'ajaxShowId' : showId;
    waitId = typeof waitId == 'undefined' || waitId === null ? showId : waitId;
    display = typeof display == 'undefined' || display == null ? '' : display;
    var ajaxFrameId = 'ajaxFrame';
    var ajaxFrame = core_get_obj(ajaxFrameId);
    var curForm = core_get_obj(formId);

    // 已请求完成
    var handleResult = function() {
        var ret = '';
        var err = '内部错误，无法显示此内容';
        ajax_show_loading(waitId, 'none', null);

        try {
            ret = core_get_obj(ajaxFrameId).contentWindow.document.XMLDocument.text;
        } catch (e) {
            try {
                ret = core_get_obj(ajaxFrameId).contentWindow.document.documentElement.firstChild.wholeText;
            } catch (e) {
                try {
                    ret = core_get_obj(ajaxFrameId).contentWindow.document.documentElement.firstChild.nodeValue;
                } catch (e) {
                    ret = err;
                }
            }
        }
    
        if (typeof ret == 'undefined') {
            ret = err;
        }
        
        if (submitBtnId) {
            core_get_obj(submitBtnId).disabled = false;
        }
        if (showId) {
            core_get_obj(showId).style.display = display;
            ajax_innerhtml(core_get_obj(showId), ret);
        }
        
        ajax_eval_script(ret);
        ajaxFrame.loading = 0;
        
        if (!HTTP_USERAGENT.firefox || HTTP_USERAGENT.safari) {
            core_get_obj('appendParent').removeChild(ajaxFrame.parentNode);
        } else {
            setTimeout(
                function() {
                    core_get_obj('appendParent').removeChild(ajaxFrame.parentNode);
                }, 100);
        }

        // 回调函数
        if (typeof callback == 'function') {
            callback();
        }
    };

    if (!ajaxFrame) {
        var div = document.createElement('div');
        div.style.display = 'none';
        div.innerHTML = '<iframe name="' + ajaxFrameId + '" id="' + ajaxFrameId + '" loading="1"></iframe>';
        core_get_obj('appendParent').appendChild(div);
        ajaxFrame = core_get_obj(ajaxFrameId);
    } else if (ajaxFrame.loading) { // 表示前面的ajaxiframe还未处理完！
        return false;
    }

    event_attach(ajaxFrame, 'load', handleResult);

    ajax_show_loading(waitId, '', loading);
    curForm.target = ajaxFrameId;
    var action = "";
    if (typeof curForm.action_bak == "undefined") {
        action = curForm.action_bak = curForm.getAttribute('action');
    } else {
        action = curForm.action_bak;
    }
    curForm.action = http_add_url_params(action, ['inAjax=1', 'showId=' + showId]);
    curForm.submit();
    if (submitBtnId) {
        core_get_obj(submitBtnId).disabled = true;
        setTimeout(function() {
            core_get_obj(submitBtnId).disabled = false;
        }, 3000);
    }
    event_stop_propagation();
    return false;
}

/**
 * 清除“关闭浏览器提醒”
 */
function clear_window_notice() {
    window.onbeforeunload = null;
}

/******************************************
 * Layer弹框 
 ******************************************/

/**
 * 消息弹框
 * 
 * @param msg 消息语
 * @param time 时间，单位：秒
 */
function dialog_msg(msg, time) {
    var _time = time ? time : 3;
    layer.msg(msg, {time : _time * 1000, shade: 0.3});
}

/**
 * 显示 成功消息弹框
 * 
 * @param msg 消息语
 * @param time 时间，单位：秒
 */
function dialog_success(msg, time) {
    var _time = time ? time : 3;
    layer.msg(msg, {time : _time * 1000, icon: 1, shade: 0.3});
}

/**
 * 显示 失败消息弹框
 *
 * @param msg 消息语
 * @param time 时间，单位：秒
 */
function dialog_fail(msg, time) {
    var _time = time ? time : 3;
    layer.msg(msg, {time : _time * 1000, icon: 2, shade: 0.3});
}

/**
 * Iframe弹框
 * 
 * @param title 标题
 * @param url 网址
 * @param width 宽度：300
 * @param height 高度：500
 * @param scrollbar 是否显示滚动条：true/false
 */
function dialog_open(title, url, width, height, scrollbar) {
    var _width = (width ? width : 500) + 'px';
    var _height = (height ? height : 300) + 'px';
    var _content = scrollbar ? url :[url, 'no'];
    
    layer.open({
        type: 2,
        title: title,
        shadeClose: false,
        shade: 0.3,
        maxmin: true,
        area: [_width, _height],
        content: _content
    });
}

function dialog_confirm(msg, yesCallback, noCallback) {
    layer.confirm(msg, {
        btn: ['确定', '取消']
    }, function(index){
        if (yesCallback) {
            yesCallback();
        }
        layer.close(index);
    }, function(){
        if (noCallback) {
            noCallback();
        }
    });
}

/**
 * Layui的iframe内页 关闭自身弹框
 * http://php-note.com/article/1789.html
 */
function dialog_close() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);
}