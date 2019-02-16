var doMethods = {};
var doMeobject = {};
var EbProductOld = function () {
    return {
        ProductUrl: "http://product.pcpop.com/",
        OpenUrl: "http://open.pcpop.com/",
        Version: '201211301032',
        EbType: 0,
        SensisID: 0,            //产品ID
        subCategorySN: "",      //子类SN
        BrandSN: "",
        PabId: "",               //产品前台ID/文章ID/帖子ID 返利细分使用
        ParentDivID: "",        //电商模块对应的整体DIV ID
        EbDivID: "",            //电商Html 所属的Div ID
        FileType: 0,            //取数据类型 （纯JS or JS+Json）
        PageSize: 0,            //每页显示 5个产品
        DivWidth: 0,            //容器宽度
        DivHeight: 0,           //容器高度
        ChannelId: 0,           //频道id
        ChannelPageId: 0,       //频道页id
        ChannelPageBlockId: 0,  //频道页块id

        /*今日降价专用*/
        isRefJS: 1,
        /*******/

        /*推荐模块专用*/
        ProductSN: "",
        /*******/
        /*页面标记 用于特殊处理 更便宜*/
        PageFlag: "",
        /*******/
        /*单品JS网上购买页专用*/
        EBCallback: "",
        AnchorID: "", //锚点ID
        /**/
        Direction: 0, //亚马逊广告
        CityName: "全国",
        newInit: function () {
            return this;
        },
        init: function () {
            return new EbProductOld();
        },
        LoadEbData: function () {
            switch (this.EbType) {
                case 1:
                    this.GetDpEb();
                    break;
                case 2:
                    this.GetEbWorthBuying();
                    break;
                case 3:
                    this.GetRecommend();
                    break;
                case 5:
                    this.GetEbWorthBuyingV2();
                    break;
                case 9:
                    this.GetRecommendBuy(); //推荐电商
                    break;
                case 10:
                    this.GetTaobaoInfo(); //淘宝天猫相关产品推荐
                    break;
            }
        },
        //1单品JS
        GetDpEb: function () {
            var url = this.OpenUrl + "ElectricBusinessShare.aspx?SensisID=" + this.SensisID + "&SiteID=" + this.ChannelId + "&PageType=" + this.ChannelPageId +
              "&ParentId=" + this.ParentDivID + "&EblistId=" + this.EbDivID + "&pageblockId=" + this.ChannelPageBlockId + "&AnchorID=" + this.AnchorID +
              "&PabId=" + this.PabId + "&FileType=2&width=" + this.DivWidth + "&EBCallback=" + this.EBCallback;
            this.LoadScript(url);
        },
        //2今日降价
        GetEbWorthBuying: function () {
            var url = this.OpenUrl + "Ajax_EbWorthBuyingProduct.aspx?subCategorySN=" + this.subCategorySN + "&siteid=" + this.ChannelId + "&pageType=" + this.ChannelPageId +
              "&pageprocount=" + this.PageSize + "&divId=" + this.EbDivID + "&width=" + this.DivWidth + "&height=" + this.DivHeight +
              "&pageblockId=" + this.ChannelPageBlockId + "&isRefJS=" + this.isRefJS + "&PabId=" + this.PabId + "&FileType=2";
            this.LoadScript(url);
        },
        //3推荐JS
        GetRecommend: function () {
            var url = this.OpenUrl + "Ajax_ElectricBusinessRecommend.aspx?siteid=" + this.ChannelId + "&SitePageID=" + this.ChannelPageId +
              "&outerDivID=" + this.ParentDivID + "&PageFlag=" + this.PageFlag + "&divId=" + this.EbDivID + "&ProId=" + this.ProductSN + "&SubCategorySN=" + this.subCategorySN + "&BrandSN=" + this.BrandSN + "&PageSize=" + this.PageSize +
              "&divWidth=" + this.DivWidth + "&pageblockId=" + this.ChannelPageBlockId + "&PabId=" + this.PabId + "&FileType=2";
            this.LoadScript(url);
        },
        //5今日降价V2（宽屏幕)
        GetEbWorthBuyingV2: function () {
            var url = this.OpenUrl + "Ajax_EbWorthBuyingProduct.aspx?subCategorySN=" + this.subCategorySN + "&siteid=" + this.ChannelId + "&pageType=" + this.ChannelPageId +
              "&pageprocount=" + this.PageSize + "&PageFlag=" + this.PageFlag + "&divId=" + this.EbDivID + "&width=" + this.DivWidth + "&height=" + this.DivHeight +
              "&styleversion=2&pageblockId=" + this.ChannelPageBlockId + "&isRefJS=" + this.isRefJS + "&PabId=" + this.PabId + "&FileType=2";
            this.LoadScript(url);
        },
        //9推荐电商
        GetRecommendBuy: function () {
            var url = this.OpenUrl + "Ajax_RecommendBuy.aspx?SensisID=" + this.SensisID + "&SiteID=" + this.ChannelId + "&PageType=" + this.ChannelPageId + "&pageblockId=" + this.ChannelPageBlockId;
            this.LoadScript(url);
        },
        //10淘宝模块
        GetTaobaoInfo: function () {
            var url = this.OpenUrl + "Ajax_Taobao.aspx?SensisID=" + this.SensisID + "&SiteID=" + this.ChannelId + "&PageType=" + this.ChannelPageId + "&pageblockId=" + this.ChannelPageBlockId;
            this.LoadScript(url);
        },
        
        LoadScript: function (src) {
            var script = document.createElement("script");
            script.setAttribute("charset", "utf-8");
            script.setAttribute("type", "text/javascript");
            script.src = src;
            document.getElementsByTagName("script")[0].parentNode.appendChild(script);

        },
        LoadCss: function (url) {
            var jsonp = document.createElement("link");
            jsonp.setAttribute("type", "text/css");
            jsonp.setAttribute("rel", "stylesheet");
            jsonp.setAttribute("href", url);
            document.getElementsByTagName("head")[0].appendChild(jsonp);
        }

    }.newInit()
};

var EbProduct = new EbProductOld();
//写 Cookie
function SetCookie(name, value, expires) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expires * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}
//读 Cookie（公共方法）
function GetCookie(name) {
    var strArg = name + "=";
    var nArgLen = strArg.length;
    var nCookieLen = document.cookie.length;
    var nEnd;
    var i = 0;
    var j;
    while (i < nCookieLen) {
        j = i + nArgLen;
        if (document.cookie.substring(i, j) == strArg) {
            nEnd = document.cookie.indexOf(";", j);
            if (nEnd == -1) nEnd = document.cookie.length;
            return unescape(document.cookie.substring(j, nEnd));
        }
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return "";
}
﻿var webroot = "http://open.pcpop.com/";

function StringBuilder() {
    this._stringBuffer = [];
}
StringBuilder.prototype = {
    append: function(str) {
        this._stringBuffer.push(str);
        return this;
    },
    empty: function() {
        this._stringBuffer = [];
    },
    toString: function() {
        return this._stringBuffer.join("");
    }
};


//GA统计 电商点击统计
//站点ID, eb产品ID , 分库前台产品ID,频道页ID,  子类名          品牌名     产品名       子类ID         系列ID
//修改JS包括：单品JS、团购JS、比价JS、今日降价排行JS、推荐产品JS、热门产品JS
var GetEbCountStr = function(ShopID, SiteID, EbProductID, ProductID, PageType, GaProductStr, SubCateGorySN, BrandSN, pageblockId, tourl) {
    //频道ID        // 频道页ID
    return "SendElectricPV('" + SiteID + "','" + PageType + "', '" + pageblockId + "','" + ShopID + "','0','" + EbProductID + "','" + SubCateGorySN + "','" + BrandSN + "','" + ProductID + "','" + tourl + "');";    
}


//电商统计
var GetShopEnName = function(shopId) {
    var ShopEnNameJSON = { e1: "360buy", e2: "amazon", e3: "suning", e4: "gome", e5: "51buy", e6: "coo8", e7: "yidianda", e8: "Taobao", e9: "applestore", e10: "Tmall", e11: "liantong", e12: "gaohong", e13: "tianyi", e14: "lenovo",
        e15: "51greenorange", e16: "xiaomi", e17: "oppo", e18: "vivo", e19: "meizu", e20: "huawei", e21: "ejiayu", e22: "microsoft", e23: "htc", e24: "samsung", e25: "sony", e26: "nokia", e27: "dell", e28: "changhong", e29: "logitech",
        e30: "haier", e31: "dangdang", e32: "newegg", e33: "okhqb", e34: "yihaodian", e35: "zm7", e36: "feihu", e37: "new7", e38: "dell", e39: "yihaomall", e40: "dianping", e41: "nuomi", e42: "manzuo", e43: "lvsen", e44: "v6"
        , e45: "letv", e46: "coolpad", e47: "hp", e48: "bjmobile", e55: "oneplus", e56: "ztehn", e61: "coocaa", e62: "ms", e63: "huahua", e64: "yougou"
    };
    return ShopEnNameJSON["e" + shopId];
}

//发送电商PV的统计
var SendElectricPV = function(siteid, pageid, pbid, mallid, shopid, eb2bproductid, F_SubcategorySN, F_BrandSN, F_ProductSN, tourl) {
    //添加参数兼容
    if (tourl == null) tourl = "";
    //调用pv统计方法
    var clickpvtrack = new ClickPvTrack();
    clickpvtrack.cid = siteid;
    clickpvtrack.cpid = pageid;
    clickpvtrack.bdid = mallid;
    clickpvtrack.spid = shopid;
    clickpvtrack.ckpid = eb2bproductid;
    clickpvtrack.scid = F_SubcategorySN;
    clickpvtrack.bid = F_BrandSN;
    clickpvtrack.pid = F_ProductSN;
    clickpvtrack.pbid = pbid; //页块id
    clickpvtrack.cpurl = tourl;
    clickpvtrack.track();
}

var GetPageName = function(shopId) {
    var PageNameJSON = {
        e1: "电商报价页", e2: "综述页", e3: "电商报价页", e4: "综述页", e5: "系列页", e6: "文章页", e7: "图赏页", e8: "图赏页", e9: "文章页", e11: "实体店报价页（动静）", e12: "手机版v1",
        e13: "产品综述", e14: "价格趋势", e16: "老点评页", e20: "评测页", e21: "比价落地页", e23: "比价落地页", e24: "参数页", e25: "大图页", e26: "点评最终页", e28: "DIY聚合频道", e30: "主板频道",
        e31: "显卡频道", e32: "三大件频道", e34: "音箱频道", e35: "耳机频道", e36: "键鼠频道", e37: "机电散频道", e38: "笔记本频道", e39: "超级本频道", e40: "手机频道", e41: "平板频道",
        e42: "数码相机频道", e43: "数字家电频道", e44: "智能电视频道", e45: "显示器频道", e46: "MP3MP4频道", e47: "GPS频道", e48: "电子书频道", e49: "移动存储频道", e50: "摄像机频道", e51: "台式机频道",
        e52: "一体电脑频道", e53: "商用电脑频道", e54: "首页", e55: "笔记本频道", e56: "LCD频道", e57: "耳机频道", e59: "平板电脑频道", e60: "手机频道", e61: "摄像机频道", e62: "数码相机频道",
        e63: "超级本频道", e64: "台式机频道", e66: "一体电脑频道", e67: "投影机频道", e68: "GPS频道", e69: "机电散频道", e70: "键鼠频道", e72: "数码频道集合页频道", e73: "音箱频道", e74: "MP3频道",
        e75: "家电频道", e76: "显卡频道", e77: "主板频道", e78: "CPU频道", e79: "无线频道", e80: "本友会", e81: "安卓之家", e83: "ACER论坛", e84: "DELL论坛", e85: "板友会", e86: "Iepad",
        e87: "静态实体店报价页", e88: "参数页", e89: "图片C页面", e90: "图片具体类别页面", e91: "文章页", e92: "文章行情列表页", e93: "文章导购列表页", e95: "点评老最终页", e97: "下载页", e98: "特色",
        e99: "读图选机", e100: "动态实体店报价页", e101: "大图页", e102: "B页面", e103: "售后服务页", e104: "综述页简版", e105: "新点评页", e106: "标评排行榜", e107: "主题购", e108: "主题购", e109: "IT168首页",
        e110: "标评排行榜", e112: "B页面", e113: "直播", e114: "产品论坛帖子页", e115: "俱乐部帖子（静）", e125: "越来越会买首页", e127: "越来越会买列表页", e128: "越来约会买文章页", e129: "标屏最终页面",
        e130: "IT168长尾词专题", e131: "泡泡长尾词专题", e132: "新点评页", e133: "高清播放机频道", e134: "老点评页", e135: "新版B页面", e136: "新文章页", e138: "机友会手机价格", e139: "ieda乐园",
        e140: "摄友会", e142: "烧友会", e143: "峰友会", e144: "WP之家", e145: "机友会", e146: "泡美美专题", e147: "软件频道", e148: "高清播放机频道", e150: "新浪微博", e151: "机友团", e152: "本友团",
        e153: "板友团", e155: "摄友团", e156: "团购详情页", e157: "产品详情页", e158: "汽车之家首页", e159: "产品库首页", e161: "平板电脑频道", e162: "直播文章页", e163: "印象栏目文章页",
        e164: "专题页面", e165: "单电频道", e166: "手机平板频道", e167: "WindowsPhone频道", e168: "机友会首页", e169: "特惠买首页", e170: "推划算首页", e171: "问答频道", e172: "盒子网",
        e173: "专题页面", e174: "平板笔记本频道", e175: "新品首页", e176: "IT168产品库首页", e177: "hao123数码二级页面", e178: "更便宜综述页", e179: "手机团购频道", e180: "M.IT168文章页",
        e181: "M.IT168图赏", e182: "M.PCPOP文章页", e183: "M.PCPOP图赏", e184: "IT168 APP", e185: "PCPOP APP"
    };
    return PageNameJSON["e" + shopId];
}
var script = null;
var jsonp = function(args) {
    script = document.createElement("script");
    script.setAttribute("charset", "utf-8");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", args.url);
    script.onload = script.onreadystatechange = function() {



        if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
            if (typeof args.callBack == "function") args.callBack(args.args); //回调函数
            script.onload = script.onreadystatechange = null;
            try { script.parentNode && script.parentNode.removeChild(jsonp); } catch (e) { };
        }
    };
    window.setTimeout('headAppendChild()', 1);
}
var headAppendChild = function() {
    document.getElementsByTagName("head")[0].appendChild(script);
}

var EBSubString = function(str, len) {
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
        var nowlen = 0;
        if (str.charCodeAt(i) > 128) {
            nowlen = 2;
        } else {
            nowlen = 1;
        }
        if (strlen + nowlen <= len) {
            s += str.charAt(i);
            strlen += nowlen;
        } else {
            return s;
        }
    }
    return s;
}

var EBCountString = function(str) {
    var strlen = 0;
    for (var i = 0; i < str.length; i++) {
        var nowlen = 0;
        if (str.charCodeAt(i) > 128) {
            nowlen = 2;
        } else {
            nowlen = 1;
        }
        strlen += nowlen;
    }
    return strlen;
}

function HTMLDeCode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&gt;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, "    ");
    s = s.replace(/'/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br>/g, "\n");
    return s;
} 
﻿var Hash = function () {
    this._data = new Object();
    this.clear = function () {
        delete this._data;
        this._data = new Object();
    }
    this.add = function (key, value) {
        if (!key || typeof (value) === 'undefined') return false;
        this._data[key] = { key: key, value: value };
        return true;
    }
    this.addRange = function (h) {
        for (var key in h._data) {
            var item = h._data[key];
            if (typeof (item) !== 'undefined') {
                this.add(item.key, item.value);
            }
        }
    }
    this.remove = function (key) {
        if (!key) return undefined;
        var item = this._data[key];
        delete this._data[key];
        return item;
    }
    this.removeAt = function (index) {
        if (isNaN(index)) return undefined;
        var i = 0;
        for (var key in this._data) {
            if (i == index) {
                return this.remove(key);
            }
            i++;
        }
        return undefined;
    }
    this.removeRange = function (startIndex, endIndex) {
        if (isNaN(startIndex) || isNaN(endIndex)) return undefined;
        var i = 0;
        var h = new Hash();
        for (var key in this._data) {
            if (i >= startIndex && i <= endIndex) {
                h.add(key, this.remove(key).value);
            }
            i++;
        }
        return h;
    }
    this.getCount = function () {
        var i = 0;
        for (var key in this._data) i++;
        return i;
    }
    this.forEach = function (method, instance) {
        var i = 0;
        for (var key in this._data) {
            var item = this._data[key];
            if (typeof (item) !== 'undefined') {
                method.call(instance, item, i, this);
                i++;
            } else {
                delete this._data[key];
            }
        }
    }
    this.getKeys = function () {
        var arr = new Array();
        for (var key in this._data) {
            var item = this._data[key];
            arr.push(item.key);
        }
        return arr;
    }
    this.getValues = function () {
        var arr = new Array();
        for (var key in this._data) {
            var item = this._data[key];
            arr.push(item.value);
        }
        return arr;
    }
    this.getItem = function (key) {
        if (!key) return undefined;
        var item = this._data[key];
        if (typeof (item) !== 'undefined') {
            return item;
        } else {
            delete this._data[key];
            return undefined;
        }
    }
    this.containsKey = function (key) {
        if (typeof (this.getItem(key)) !== 'undefined') {
            return true;
        }
        return false;
    }
    this.containsValue = function (value) {
        for (var key in this._data) {
            if (value === this._data[key].value) {
                return true;
            }
        }
        return false;
    }
}

var jsonSort = function () {
    this.Sorter = new Hash();
    this.sortercount = 0; //排序字段个数
    this.Arr = [];
    this.sorterIndex = 0; //排序时遍历排序字段用
    var $this = this;
    this.trim = function (inputString) {
        if (typeof inputString != "string") { return inputString; }
        var retValue = inputString;
        var ch = retValue.substring(0, 1);
        while (ch == " ") {
            //检查字符串开始部分的空格
            retValue = retValue.substring(1, retValue.length);
            ch = retValue.substring(0, 1);
        }
        ch = retValue.substring(retValue.length - 1, retValue.length);
        while (ch == " ") {
            //检查字符串结束部分的空格
            retValue = retValue.substring(0, retValue.length - 1);
            ch = retValue.substring(retValue.length - 1, retValue.length);
        }
        while (retValue.indexOf("  ") != -1) {
            //将文字中间多个相连的空格变为一个空格
            retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length);
        }
        return retValue;
    }
    this.init = function (array, sorter) {
        this.Arr = array;
        //处理排序
        var coltypes = sorter.split(','); //["col1 desc","col2 asc","col3 desc"]
        for (var i = 0; i < coltypes.length; i++) {
            var coltype = coltypes[i];
            coltype = this.trim(coltype);
            var coltypeSpliter = coltype.split(' '); //拆分列名和排序规则
            if (coltypeSpliter.length > 1)//有列和排序规则时添加到HashTable中
            {
                this.Sorter.add(coltypeSpliter[0], coltypeSpliter[1]);
            }
            else if (coltypeSpliter.length == 1) {
                this.Sorter.add(coltypeSpliter[0], "asc"); //默认正序
            }
        }
        this.sortercount = $this.Sorter.getCount();
    }

    this.downup = function (x, y) {

        var col = $this.Sorter.getKeys()[$this.sorterIndex]; //排序列(hash中的key)
        var sortType = $this.Sorter.getItem(col).value; //排序类别(hash中的value)

        var xValue = eval("x." + col);
        var yValue = eval("y." + col);
        //处理非数字情况
        xValue = isNaN(xValue) ? 0 : xValue;
        yValue = isNaN(yValue) ? 0 : yValue;

        if (xValue == yValue && $this.sorterIndex < $this.sortercount - 1) {//值相等(且不是最后一个字段)时,继续按下一字段排序
            $this.sorterIndex++;
            return $this.downup(x, y);
        }
        else {
            $this.sorterIndex = 0;

            if (sortType == "asc")//正序
            {
                return xValue - yValue;
            } else { //倒序
                return yValue - xValue;
            }
        }
    }

    //开始排序
    this.Sort = function (array, sorter) {
        this.init(array, sorter); //初始化参数
        this.Arr.sort(this.downup); //排序
        return this.Arr;
    }
}

var OpenRootUrl = "http://open.pcpop.com/";
var EblistArr = new Hash();
var EBjs = {
    SortParentDom: null,
    SensisID: 0,
    SubCateGorySN: 0,
    BrandSN: 0,
    ProductSN: 0,
    PageType: 0,
    SiteID: 0,
    EbList: null,
    EbSortFlag: false,
    HTML: null,
    lastIndex: 0,
    pageblockId: 0,
    SiteID: 0, PabId: 0,
    EblistId: null,
    ParentID: null,
    width: 0,
    Init: function (json, ele) {
        //没有数据隐藏
        if (json.EbJson.EbList.length == 0) {
            document.getElementById(json.EbJson.ParentID).style.display = "none";
            document.getElementById(json.EbJson.EblistId).style.display = "none";
            return;
        }
        eval(json.EbJson.EBCallback);
        document.getElementById(json.EbJson.EblistId).style.display = "";
        document.getElementById(json.EbJson.ParentID).style.display = "";
        this.SiteID = json.EbJson.SiteID;
        this.SensisID = json.EbJson.SensisID;
        this.PabId = json.EbJson.PABId;
        this.EblistId = json.EbJson.EblistId;
        this.ParentID = json.EbJson.ParentID;
        this.width = json.EbJson.width;
        this.SubCateGorySN = json.EbJson.SubCateGorySN;
        this.BrandSN = json.EbJson.BrandSN;
        this.ProductSN = json.EbJson.ProductSN;
        this.SiteID = json.EbJson.SiteID;
        this.PageType = json.EbJson.PageType;
        this.SortParentDom = json.EbJson.EblistId;
        this.EbList = json.EbJson.EbList;
        this.pageblockId = json.EbJson.pageblockId;
        this.SortData("EBPrice", "EBCommentCount", "up", "down", this.EbSortFlag, this.SensisID);
        var listHtml = [];
        listHtml.push(this.BuildHtml(this.SensisID))//拼接大电商
        this.HTML = listHtml.join('');
        document.getElementById(this.SortParentDom).innerHTML = this.HTML;
    },
    SortData: function (Field1, Field2, sorttype1, sorttype2, IsAllSort, SensisID) {
        if ((this.PageType == 5 || this.PageType == 4 || this.PageType == 1) && EblistArr.getCount() > 0) {
            var Key = "eb" + SensisID;

            if (EblistArr.containsKey(Key)) {

                this.EbList = EblistArr.getItem(Key).value;
            }
        }
        this.EbSortFlag = IsAllSort;
        //排序
        var sort1 = new jsonSort();
        this.EbList = sort1.Sort(this.EbList, "IsStock desc," + Field1 + " " + (sorttype1 == "up" ? "asc" : "desc") + ",ForceSort desc," + Field2 + " " + (sorttype2 == "up" ? "asc" : "desc")); //库存排序优先  ForceSort:强制排名，价格相同时按它排
        if (this.PageType == 5 || this.PageType == 4 || this.PageType == 1) {
            var Key = "eb" + SensisID;

            if (!EblistArr.containsKey(Key)) {

                EblistArr.add(Key, this.EbList);
            }
        }
    },
    OrderHtml: function (orderby, SensisID) {

        document.getElementById("Price" + SensisID + "").className = "pai3";
        document.getElementById("Comment" + SensisID + "").className = "";

        var Operation;

        if (orderby == "EBPrice") {
            document.getElementById("Price" + SensisID + "").className = "pai2";
            this.SortData("EBPrice", "EBCommentCount", "up", "down", true, SensisID);
        }

        if (orderby == "EBCommentCount") {
            document.getElementById("Comment" + SensisID + "").className = "pai1";
            this.SortData("EBCommentCount", "EBPrice", "down", "up", true, SensisID);
        }

        this.EbSortFlag = orderby;
        var EbDiv = document.getElementById("ebList" + SensisID);
        EbDiv.innerHTML = this.BuildBody();
    }
    ,
    BuildHtml: function (SensisID) {
        if (this.EbList.length > 0) {
            var className = "ebproductButton"; //屏蔽底部宽度
            if ((this.PageType == 4 && this.pageblockId == 151) || (this.PageType == 88 && this.pageblockId == 504) || (this.PageType == 97 && this.pageblockId == 505) || (this.PageType == 91 && this.pageblockId == 506) || (this.PageType == 24 && this.pageblockId == 516) || (this.PageType == 132 && this.pageblockId == 517)) {
                className = "";
            }
            var Html = [];
            var BHtml = "";
            Html.push("<div class=\"ebproduct " + className + "\"  " + this.GetStyle("ebproduct") + " >");
            Html.push(this.BuildHead(SensisID));
            Html.push("<ul class=\"list_text\" id=\"ebList" + SensisID + "\">");
            Html.push(this.BuildBody());
            Html.push("</ul>")
            Html.push("<div class=\"clear\"> </div>");
            Html.push("</div>");
            Html.unshift(BHtml); //添加到前面
            return Html.join('');
        }
        return "";
    },
    BuildHead: function (SensisID) {
        var headHtml = " <ul class=\"list_title\"  " + this.GetStyle("ebproduct") + ">";
        headHtml += "   <li class=\"t2_1\"  " + this.GetStyle("t1_1") + ">网上商城</li>";
        headHtml += "   <li class=\"t2_2\"  " + this.GetStyle("t1_2") + "><a class=\"pai2\" id=\"Price" + SensisID + "\"  s onclick=\"EBjs.OrderHtml('EBPrice'," + SensisID + ")\">价格/促销</a></li>";
        headHtml += "   <li class=\"t2_3\"  " + this.GetStyle("t1_3") + "><a onclick=\"EBjs.OrderHtml('EBCommentCount'," + SensisID + ")\"  id=\"Comment" + SensisID + "\" >评价</a></li>";
        headHtml += "   <li class=\"t2_5\" " + this.GetStyle("t1_4") + ">购买</li>";
        headHtml += "    </ul>";
        return headHtml;
    },
    BuildBody: function () {
        var BodyHTML = " ";
        var count = 0;
        var shopIdList = [];
        var temp = -1;
        var temObj = "";
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (val) {
                var value = this;
                for (var i = 0; i < value.length; i++) {
                    if (value[i] == val) return i;
                }
                return -1;
            };
        }
        for (var i = 0; i < this.EbList.length; i++) {
            var item = this.EbList[i];
            var shopID = parseInt(item.ShopID)
            var styleName = this.GetShopStyle(shopID);
            BodyHTML += " <li  class=\"bg\">";
            var GaCountStr = GetEbCountStr(shopID, this.SiteID, item.B2BProductId, this.ProductSN, this.PageType, "单品JS", this.SubCateGorySN, this.BrandSN, this.pageblockId, item.EBProductUrl);
            var isconvert = shopID == 8 || shopID == 10 ? "isconvert=\"1\"" : "";
            BodyHTML += "   <a href=\"" + item.EBProductUrl + "\" " + isconvert + " target=\"_blank\" " + this.GetStyle("ebproduct") + "onclick=\"" + GaCountStr + "\">";
            BodyHTML += "    <div class=\"n1_1\" " + this.GetStyle("n1_1") + ">";
            BodyHTML += " <span class=\"" + styleName + "\">" + item.WebSiteName + "</span>";
            if (item.isThird) {
                BodyHTML += "<i class=\"disanfang\">(第三方)</i>";
            }
            if (shopID == 1) {
                BodyHTML += "<div id=\"ebjd\" style=\"float:left;margin-left:5px ;\" titleWidth=\"" + this.GetStyle("n1_1") + "\">";
                BodyHTML += "</div>";
            }
            BodyHTML += "</div>";
            var zindex = "";
            if (this.PageType == 5 || this.PageType == 4 || this.PageType == 1) {
                zindex = "style=\"z-index:" + (this.lastIndex + 20 - i) + "\"";
            }
            else {
                zindex = "style=\"z-index:" + ((this.EbList.length + 10) - i) + "\"";
            }
            BodyHTML += "    <div class=\"n1_2\"  " + this.MergeStyle(this.GetStyle("n1_2"), zindex) + "    >";
            //价格(无库存时为灰色样式)
            if (item.IsStock == 0) {
                BodyHTML += "   <b  class=\"hui\">￥" + parseInt(item.EBPrice) + "</b>";
            }
            else {
                BodyHTML += "   <b  >￥" + parseInt(item.EBPrice) + "</b>";
            }
            BodyHTML += "</div>"
            BodyHTML += "  <div class=\"n1_3\" " + this.GetStyle("n1_3") + ">";
            BodyHTML += "  <span>" + item.EBCommentCount + "条评价</span></div>";
            BodyHTML += "  <div class=\"n1_4\" " + this.GetStyle("n1_4") + ">";
            //去看看按钮(无库存时为灰色样式,且文字为'缺货')
            if (item.IsStock == 0) {
                BodyHTML += "  <span  class=\"none\">缺货</span></div>";
            } else {
                BodyHTML += "  <span  >去看看</span></div>";
            }
            BodyHTML += " </a>";
            BodyHTML += "</li>";
        }
        return BodyHTML;
    }
    ,
    MergeStyle: function (First, Second) {
        return First.replace("px\"", "px;") + Second.replace("style=\"", "");
    },
    //每个电商对应的样式名称
    GetShopStyle: function (shopId) {
        var ShopStyleJSON = {
            e1: "jingdong", e2: "z", e3: "suning", e4: "guomei", e5: "yixun", e6: "kuba", e7: "yidianda", e8: "tmall", e9: "apple", e10: "taobao",
            e11: "liantong", e12: "gaohong", e13: "tianyi", e14: "lenovo", e15: "qingcheng", e16: "xiaomi", e17: "oppo", e18: "bubugao", e19: "meizu", e20: "huawei",
            e21: "jiayu", e22: "microsoft", e23: "htc", e24: "samsung", e25: "sony", e26: "nokia", e27: "dell", e28: "changhong", e29: "logitech", e30: "haier",
            e31: "dangdang", e32: "newegg", e33: "okhqb", e34: "yihaodian", e35: "zm7", e36: "feihu", e37: "new7", e38: "dell", e39: "yihaomall", e40: "dianping",
            e41: "nuomi", e42: "manzuo", e43: "lvsen", e44: "v6", e45: "letv", e46: "coolpad", e47: "hp", e48: "bj10086",
            e55: "oneplus", e56: "ztehn",
            e61: "coocaa", e62: "ms", e63: "huahua", e65: "tmall",
            e72: "ruijie", e73: "thinkpad",
            e81: "taobao", e82: "hasee", e83: "leishen", e84: "bnmhh", e85: "youyu", e86: "jingdong", e87: "nubia", e88: "ivvi"
        };

        return ShopStyleJSON["e" + shopId];
    }
      ,
    GetStyle: function (style) {
        //新版样式 用宽度作为key
        var NewStyleJson = {
            "P586": { "ebproduct": "586", "t1_1": "160", "t1_2": "145", "t1_3": "130", "t1_4": "57", "n1_1": "161", "n1_2": "146", "n1_3": "130", "n1_4": "57" },
            "P590": { "ebproduct": "590", "t1_1": "161", "t1_2": "146", "t1_3": "131", "t1_4": "57", "n1_1": "162", "n1_2": "147", "n1_3": "131", "n1_4": "57" },
            "P596": { "ebproduct": "596", "t1_1": "150", "t1_2": "145", "t1_3": "130", "t1_4": "78", "n1_1": "151", "n1_2": "146", "n1_3": "130", "n1_4": "57" },
            "P598": { "ebproduct": "598", "t1_1": "160", "t1_2": "145", "t1_3": "130", "t1_4": "70", "n1_1": "161", "n1_2": "146", "n1_3": "130", "n1_4": "57" },
            "P668": { "ebproduct": "668", "t1_1": "180", "t1_2": "165", "t1_3": "150", "t1_4": "80", "n1_1": "181", "n1_2": "166", "n1_3": "150", "n1_4": "57" },
            "P730": { "ebproduct": "730", "t1_1": "195", "t1_2": "159", "t1_3": "153", "t1_4": "130", "n1_1": "196", "n1_2": "160", "n1_3": "159", "n1_4": "57" },
            "P748": { "ebproduct": "748", "t1_1": "200", "t1_2": "164", "t1_3": "157", "t1_4": "134", "n1_1": "201", "n1_2": "165", "n1_3": "158", "n1_4": "57" },
            "P760": { "ebproduct": "760", "t1_1": "220", "t1_2": "170", "t1_3": "150", "t1_4": "127", "n1_1": "221", "n1_2": "171", "n1_3": "151", "n1_4": "57" },
            "P770": { "ebproduct": "770", "t1_1": "220", "t1_2": "174", "t1_3": "149", "t1_4": "134", "n1_1": "221", "n1_2": "175", "n1_3": "150", "n1_4": "57" },
            "P778": { "ebproduct": "778", "t1_1": "220", "t1_2": "174", "t1_3": "157", "t1_4": "134", "n1_1": "221", "n1_2": "175", "n1_3": "158", "n1_4": "57" },
            "P780": { "ebproduct": "780", "t1_1": "220", "t1_2": "174", "t1_3": "157", "t1_4": "136", "n1_1": "221", "n1_2": "175", "n1_3": "158", "n1_4": "57" },
            "P800": { "ebproduct": "800", "t1_1": "195", "t1_2": "233", "t1_3": "177", "t1_4": "102", "n1_1": "195", "n1_2": "234", "n1_3": "178", "n1_4": "57" },
            "P906": { "ebproduct": "906", "t1_1": "187", "t1_2": "269", "t1_3": "230", "t1_4": "127", "n1_1": "188", "n1_2": "270", "n1_3": "231", "n1_4": "57" }
        }
        var styleJsonNow = eval("NewStyleJson.P" + this.width);
        var width = eval("styleJsonNow." + style);
        var style = "style=\"width:" + width + "px\"";
        return style;
    },
    jsonp: function (args) {
        var jsonp = document.createElement("script");
        jsonp.setAttribute("charset", "utf-8");
        jsonp.setAttribute("type", "text/javascript");
        jsonp.setAttribute("src", args.url);
        jsonp.onload = jsonp.onreadystatechange = function () {
            if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                if (typeof args.callBack == "function") args.callBack(args.args); //回调函数
                jsonp.onload = jsonp.onreadystatechange = null;
                try { jsonp.parentNode && jsonp.parentNode.removeChild(jsonp); } catch (e) { };
            }
        };
        document.getElementsByTagName("head")[0].appendChild(jsonp);
    }
};﻿var OpenRootUrl = "http://open.pcpop.com/";

var HotProduct = {
    //当前页
    CurrentPage: 1,

    ParentId: null,

    //左右移动
    MoveRecommend: function(l_r, PageCount, SubCateGorySN) {


        if (SubCateGorySN == undefined || SubCateGorySN == "undefined") {
            SubCateGorySN = "";
        }
        if (l_r == 'l') {
            if (HotProduct.CurrentPage == 1) {
                HotProduct.CurrentPage = PageCount;
            } else {
                HotProduct.CurrentPage--;
            }
        }
        if (l_r == 'r') {

            if (HotProduct.CurrentPage == PageCount) {
                HotProduct.CurrentPage = 1;
            } else {
                HotProduct.CurrentPage++;
            }

        }
        if (HotProduct.CurrentPage > 1) {
            HotProduct.ShowImage(HotProduct.CurrentPage, SubCateGorySN);
        }
        for (var i = 1; i <= PageCount; i++) {
            document.getElementById("page_" + i + SubCateGorySN).style.display = "none";
        }

        document.getElementById("page_" + HotProduct.CurrentPage + SubCateGorySN).style.display = "block";

    },
    //兼容老版本
    Reload: function(ChannelID, ChannelPageID, ParentId, EbProductID, SubCateGorySN, BrandSN, top, width, pageblockId) {
        this.ReloadNew(ChannelID, ChannelPageID, ParentId, EbProductID, SubCateGorySN, BrandSN, "", top, width, pageblockId);
    },
    //兼容老版本
    ReloadNew: function(ChannelID, ChannelPageID, ParentId, EbProductID, SubCateGorySN, BrandSN, productSN, top, width, pageblockId) {
        this.ParentId = ParentId;
        this.CurrentPage = 1;
        var pagebockId_new = (pageblockId == null ? 0 : pageblockId);

        var url = OpenRootUrl + "Ajax_ChannelHotProduct.aspx?ChannelID=" + ChannelID + "&ChannelPageID=" + ChannelPageID + "&SubCateGorySN=" + SubCateGorySN + "&BrandSN=" + BrandSN + "&productSN=" + productSN + "&top=" + top + "&width=" + width + "&pageblockId=" + pagebockId_new;
        jsonp({ url: url, callBack: HotProduct.LoadHtml() });
    },
    Reload2013: function(ChannelID, ChannelPageID, ParentId, SubCateGorySN, BrandSN, topListId, top, width, pageblockId) {
        this.ParentId = ParentId;
        this.CurrentPage = 1;
        var pagebockId_new = (pageblockId == null ? 0 : pageblockId);

        var url = OpenRootUrl + "Ajax_ChannelHotProduct.aspx?ChannelID=" + ChannelID + "&ChannelPageID=" + ChannelPageID + "&SubCateGorySN=" + SubCateGorySN + "&BrandSN=" + BrandSN + "&topListId=" + topListId + "&top=" + top + "&width=" + width + "&pageblockId=" + pagebockId_new;
        jsonp({ url: url, callBack: HotProduct.LoadHtml() });
    },
    LoadHtml: function(html) {
        if (html != undefined && html != "undefined") {
            document.getElementById(this.ParentId).innerHTML = html;
        }
    }
    ,
    HideEbDiv: function(ProductSN, flag) {

        if (flag == "True") {
            document.getElementById("p" + ProductSN).style.display = "none";
        }
        document.getElementById("l" + ProductSN).style.border = "1px solid #fff";
        document.getElementById("n" + ProductSN).className = "layer_con1";
    },
    ShowEbDiv: function(ProductSN, flag) {
        if (flag == "True") {
            document.getElementById("p" + ProductSN).style.display = "";
        }
        document.getElementById("l" + ProductSN).style.border = "1px solid #e3e2e2";
        document.getElementById("n" + ProductSN).className = "layer_con1 layer_here1";
    },
    ShowImage: function(PageIndex, SubCateGorySN) {
        var productList = document.getElementById("page_" + PageIndex + SubCateGorySN);
        var objs = productList.getElementsByTagName("img");

        for (var i = 0; i < objs.length; i++) {
            obj = objs[i];
            if (obj.name.length > 0) {
                obj.src = obj.name;
            }
        }
    }
};

  EbProduct.LoadCss('http://product.pcpop.com/eb/css/css4_1_1_1_1.css');