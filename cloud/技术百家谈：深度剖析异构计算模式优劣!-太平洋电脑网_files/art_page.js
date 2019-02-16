function thisMovie(e) {
    return -1 != navigator.appName.indexOf("Microsoft") ? window[e + "_ob"] ? window[e + "_ob"] :document[e + "_ob"] :document[e + "_em"] ? document[e + "_em"] :document[e];
}

function double12LoadJs(e) {
    var t = document.createElement("script");
    t.charset = "GBK", document.body.insertBefore(t, document.body.firstChild).src = e;
}

!function() {
    function e(e, t) {
        var n = e.getElementsByTagName("img");
        if (n) for (var o = 0, i = n.length; i > o; o++) {
            var a = n[o];
            a.getAttribute(t) && !a.getAttribute("loaded") && (a.src = a.getAttribute(t), a.setAttribute("loaded", "true"));
        }
    }
    function t() {
        var e = pc.getElem("#Jguide"), t = document.body.clientWidth, n = document.body.scrollTop ? document.body.scrollTop :document.documentElement.scrollTop;
        n < e.getAttribute("stop") || 1230 >= t ? pc.hide(e) :pc.show(e);
    }
    function n(e, t, n, o) {
        var n = n || "jsonp" + Math.random().toString(32).slice(2), i = document.createElement("script");
        if (o) for (var a in o) o.hasOwnProperty(a) && i.setAttribute(a, o[a]);
        window[n] = function(e) {
            t && t(e), i.parentNode.removeChild(i), i = null;
        }, i.src = -1 !== e.indexOf("?") ? e + "&callback=" + n :e + "?callback=" + n, document.getElementsByTagName("head")[0].appendChild(i);
    }
    pc.addEvent(window, "scroll", function() {
        {
            var e = pc.getElem("#Jmark"), t = pc.getElem("#JhotArtRank"),
                hd= pc.getElem("#artHd"), cmt=pc.getElem("#commentHolder"),
                foot=pc.getElem("#bottom"), recBoxS= pc.getElem(".arts-recommend"), 
                recBoxEnd=pc.getElem(".product-tag"), tit=pc.getElem("h1 span"),
                tool=pc.getElem(".toolBox"), tabNav=pc.getElem(".arts-recommend .tab-nav");
            document.body.scrollTop ? document.body.scrollTop :document.documentElement.scrollTop;
        }
        t && ((e.getBoundingClientRect().top <= 20 && foot.getBoundingClientRect().top >550 ) ? pc.hasClass(t, "fix") || pc.addClass(t, "fix") :pc.removeClass(t, "fix"));
        tit &&((hd.getBoundingClientRect().top <= 100 && cmt.getBoundingClientRect().top >250 ) ? pc.addClass(tit, "fixedH1") :pc.removeClass(tit, "fixedH1"));
        tool &&((hd.getBoundingClientRect().top <= 100 && cmt.getBoundingClientRect().top >650 )? pc.addClass(tool, "fixedBox") :pc.removeClass(tool, "fixedBox"));
         tool &&(cmt.getBoundingClientRect().top>600 ? pc.removeClass(tool, "toolBoxb") :pc.addClass(tool, "toolBoxb"));
         if(recBoxEnd){
         tabNav &&((recBoxS.getBoundingClientRect().top <= -55 && recBoxEnd.getBoundingClientRect().top >580 )? pc.addClass(tabNav, "tab-fix") :pc.removeClass(tabNav, "tab-fix"));
         tabNav &&(recBoxEnd.getBoundingClientRect().top >580 ? pc.removeClass(tabNav, "tab-navB") :pc.addClass(tabNav, "tab-navB"));
        }

    }), pc.each(pc.getElems("#Jwrap .tab-nav"), function(t) {
        t.getAttribute("notbind") || new pc.tab({
            target:pc.getElems(".pannel", t),
            control:pc.getElems(".control .item", t),
            link:!0,
            onchange:function() {
                e(this.target[this.curPage], "src2");
            }
        });
    }), pc.each(pc.getElems("#Jwrap .tab"), function(t) {
        t.getAttribute("notbind") || new pc.tab({
            target:pc.getElems(".pannel", t),
            control:pc.getElems(".control .item", t),
            type:"click",
            link:!0,
            onchange:function() {
                e(this.target[this.curPage], "src2");
                
            }
        });
    }), pc.each(pc.getElems("#Jwrap .slide-pic"), function(t) {
        pc.addEvent(t, "mouseenter", function() {
            pc.addClass(t, "slide-pic-hover");
        }), pc.addEvent(t, "mouseleave", function() {
            pc.removeClass(t, "slide-pic-hover");
        });
        var n = t.getAttribute("relaid");
        t.getAttribute("notbind") || new pc.tab.scroll({
            target:pc.getElems(".pics li", t),
            prevBtn:pc.getElems(".prev", t)[0],
            nextBtn:pc.getElems(".next", t)[0],
            control:n ? pc.getElems("#" + n + " .item") :pc.getElems(".circle-ctrl .item", t),
            autoPlay:!0,
            stay:3500,
            onchange:function() {
                e(this.target[this.realCurPage], "src2");
            }
        });
    });
    var o = '<div class="guide-wrap"><a href="//app.pconline.com.cn/iphone/" class="sewm" id="sewm"><span class="sewm-stxt">手机访问</span><i class="sewm-tc"><span class="sewm-pic"></span><em class="sewm-sjx"></em><em class="sewm-txt1">最新资讯离线随时看</em><em class="sewm-txt1 sewm-txt2">聊天吐槽赢奖品</em></i></a><a href="javascript:window.scrollTo(0,0)" target="_self" class="top"><span>回到顶部</span></a></div><style type="text/css">.guide .sewm{background: url(//www1.pconline.com.cn/zt/gz20150414/appewm/ewm.jpg) no-repeat center center; position: relative;}.guide .sewm .sewm-tc{position: absolute; display: none; width: 50px; height: 45px; top:0; left: -45px; background: none}.guide .sewm .sewm-stxt{display: none;}.guide .sewms .sewm-stxt{display: block;}.guide .sewms{background: ##3371be; color: #fff}.guide .sewms .sewm-tc{display: block;}.guide .sewms .sewm-pic{width: 238px; height: 269px; position: absolute; display: block; background: #fff; border: 1px solid #e5e5e5; top: -176px; left: -205px; padding: 0; background: url(//www1.pconline.com.cn/zt/gz20150414/appewm/bewm.jpg) no-repeat center top; z-index: 0}.guide .sewms .sewm-sjx{width:0; font-size: 0; overflow: hidden; height:0; border-left:7px solid #fff;border-top:7px solid #4f90d2;border-bottom:7px solid #4f90d2; z-index: 2; position: absolute; left: 34px; top: 16px;}.guide .sewm .sewm-txt1{display: block; width: 238px; height: 24px; line-height: 24px; position: absolute; font-size: 15px; color:#0077db; left: -204px; top: 45px; z-index:3;}.guide .sewm .sewm-txt2{font-weight: 700; top: 66px; z-index: 4}</style>', i = document.createElement("div");
    i && (i.id = "Jguide", pc.addClass(i, "guide"), i.setAttribute("stop", "2000"),
    i.innerHTML = o), document.body.appendChild(i), pc.addEvent(window, "scroll", function() {
        t();
    }), function() {
        if (document.getElementById("sewm")) {
            var e = document.getElementById("sewm");
            e.onmouseover = function() {
                this.className = "sewm sewms";
            }, e.onmouseout = function() {
                this.className = "sewm";
            };
        }
    }();
    var a = pc.getElems("#productInfor .hidden-rank")[0];
    if ("undefined" != typeof a && "undefined" != typeof JhRank && "48209" == JhRank) {
        var c = "//pdhot.pconline.com.cn/api/rankList.jsp?rlid=546&max=7&refresh=true";
        n("//pdhot.pconline.com.cn/api/rankList.jsp?rlid=546&max=7&refresh=true", function(e) {
            var t = e.data;
            rankHtml = "";
            for (var n = 0; n < t.length; n++) rankHtml += '<li><i class="sub">' + t[n].price + '</i><h6><a href="' + t[n].pubUrl + '" title="' + t[n].shortName + '">' + t[n].shortName + "</a></h6><em",
            3 > n && (rankHtml += ' class="lab-' + (n + 1) + '"'), rankHtml += ">" + (n + 1) + "</em>",
            0 == n && (rankHtml += "<!--" + c + "-->"), rankHtml += "</li>";
            a.innerHTML = rankHtml, pc.removeClass(a, "hidden-rank");
        }, null, {
            charset:"utf-8"
        });
    }
    var r = {
        setCookie:function(e, t) {
            document.cookie = e + "=" + t + "; path=/; domain=" + window.location.hostname.replace(/\w+((\.\w+)+)/, "$1") + "; expires=" + new Date(+new Date() + 2592e6).toGMTString();
        },
        getCookie:function(e) {
            return unescape(document.cookie.replace(new RegExp(".*(?:^|; )" + e + "=([^;]*).*|.*"), "$1"));
        },
        init:function() {
            var e = document.getElementById("JksQ"), t = "", n = this.getCookie("mobileArtkeyWordNum");
            "" === n || "NaN" == n ? n = 0 :(n = parseInt(n) + 1, n > defaultArryLength - 1 && (n = 0)),
            t = defaultArry[n], "undefined" != t && (this.setCookie("mobileArtkeyWordNum", n),
            e.defaultValue = t);
        }
    };
    "undefined" != typeof defaultArryLength && 0 != defaultArryLength && r.init();
    var l = [ {
        id:"Jpoint",
        js:function() {
            function e(e, t, n, o, i, a) {
                var n = new Date();
                n.setTime(n.getTime() + 864e5);
                var i = ".pconline.com.cn", c = e + "=" + escape(t) + (n ? "; expires=" + n.toGMTString() :"") + "; path=/" + (i ? "; domain=" + i :"") + (a ? "; secure" :"");
                document.cookie = c;
            }
            function t(t) {
                "undefined" == typeof autoCityid ? (window._cb = t, pc.getScript("//js.3conline.com/pcauto/2014/index/js/areaData.js", function() {
                    "undefined" != typeof curAutoCity && isBelongCity(curAutoCity) || (curAutoCity = "广州",
                    e("locationAutoCity", curAutoCity));
                    for (var t = 0; t < areaData.length; t++) for (var n = areaData[t].citys, o = 0; o < n.length; o++) curAutoCity == n[o].name && (autoCityid = n[o].mid,
                    window._cb(autoCityid));
                })) :t(autoCityid);
            }
            function n() {
                t(function(e) {
                    pc.getScript("//price.pcauto.com.cn/dealer/interface/dealer_auto_market_json.jsp?rid=" + e + "&num=5&callback=getMarketData");
                });
            }
            window.isBelongCity = function(e) {
                for (var t = e, n = 0; n < areaData.length; n++) for (var o = areaData[n].citys, i = 0; i < o.length; i++) if (t == o[i].name) return !0;
                return !1;
            }, window.getMarketData = function(e) {
                var t = e.items, n = t.length, o = pc.getElem("#Jpoint"), i = "";
                if (0 == n) return void (o.innerHTML = '<li class="default-note">暂无商情内容！</li>');
                // 添加监测ad 11769
                for (var a = 0; n > a; a++) {
                    var c = t[a];
                    5 > a && (i += '<li><a href="' + c.newsUrl + '#ad=11769">' + c.newsName + "</a></li>");
                }
                o.innerHTML = i;
            }, pc.getElem("#Jpoint") && n();
        }
    },{
        id:"modGroup",
        js:function() {
            var subLen = document.getElementById("modGroup").getElementsByTagName("div").length;
            if(subLen<=0){
                pc.getScript("//www.pconline.com.cn/test/group/1704/intf18097.js");
            }
        }
    },{
        id:"Jcommnet",
        js:function(){
            
        }
    } ], s = Lazy.create({
        lazyId:[ "Jwrap" ],
        trueSrc:"#src",
        jsList:l,
        offset:500,
        delay:100,
        delay_tot:1e3
    });
    Lazy.init(s), pc.getElem("#JrightSideFocus") && new pc.tab.scroll({
        target:pc.getElems("#JrightSideFocus .pics li"),
        prevBtn:pc.getElems("#JrightSideFocus .prev")[0],
        nextBtn:pc.getElems("#JrightSideFocus .next")[0],
        control:!1,
        autoPlay:!0,
        easing:"quadIn",
        stay:3500,
        effect:"fade",
        animateTime:600,
        onchange:function() {
            e(this.target[this.curPage], "src2");
        }
    });
}();
var JeditMore = pc.getElem("#JeditMore");
!function() {
    var js2Blocks = pc.getElems(".js2-16");
    if (js2Blocks.length!=0) {
        var proIds = [];
        pc.each(js2Blocks, function(item) {
            proIds.push(item.getAttribute("productId"));
        });
        var IdsStr = proIds.join();
        jsonp("//pdlib.pconline.com.cn/product/service/_product_info.jsp?pIds=" + IdsStr + "&cb=callback", function(data) {
            pc.each(data, function(doc,index) {
                var doc = doc;
                var proId = doc.id;
                pc.each(js2Blocks,function(item,index) {
                    var cmsProId = item.getAttribute("productId");
                    if(!item.getAttribute("data-ver")){
                        proId == cmsProId && (pc.getElem(".js2GuidePrice", item).innerHTML = "" + doc.price, doc.artpicCount > 0 && (pc.getElem(".js2PicNum",item).innerHTML = "[" + doc.artpicCount + "]"),doc.reviewCount > 0 && (pc.getElem(".js2CmtNum", item).innerHTML = "[" + doc.reviewCount + "]"));
                    }else{
                        if(proId==cmsProId){
                            var strHtml = "";
                            if(doc.mallInfo&&doc.mallInfo.length!=0){
                                pc.each(doc.mallInfo, function(subitem) {
                                    strHtml += '<i class="js2-item"><a href="'+subitem.adUrl+'" target="_blank"><img src="'+subitem.logoSmallUrl+'"> '+subitem.mallName+'：<i class="js2-price">￥'+subitem.price+'</i></a></i>';
                                });
                            }else{
                                pc.getElem(".js2-dt",item).innerHTML = "参考价格"
                                strHtml = doc.price;
                            }
                            pc.getElem(".js2-dd",item).innerHTML = strHtml;
                        }
                    }
                });
            });
        }, "callback", {
            charset:"gbk"
        });
    }
}();
(function(){
    pc.each(pc.getElems(".ke-custom-bestCard"),function(item,index){
        var id = item.getAttribute("data-activityId");
        var IntfRoot = "//try.pconline.com.cn";
        if (typeof id != "undefined") {

            jsonp(IntfRoot+"/intf/getActivityInfoById.jsp?width=230&height=115&activityId=" + id, function(data) {
                var strHtml = "";
                var provImg = data.providerUrl ? '<img src="' + data.providerUrl + '">' : '';
                var dom = document.createElement("div");
                dom.className = "ke-custom-bestCard";
                strHtml = '<a href="' + data.url + '" target="_blank"><img src="' + data.img + '" class="u-cover"></a><p><strong class="u-cartTit"><a href="' + data.url + '" target="_blank">' + data.title + '</a></strong><a href="' + data.buyLink + '" target="_blank" class="ke-btn ke-btn-red"> 直接购买 <em></em></a><i class="providerWrap">' + provImg + '<em>' + data.provider + '</em><i class="u-price">市场参考价 <span>￥' + data.price + '</span></i></i></p>';
                dom.innerHTML = strHtml;
                item.parentNode.appendChild(dom);
                item.parentNode.removeChild(item);
            });
        }
    }, "callback", {
        charset:"gbk"
    });

    pc.each(pc.getElems(".ke-custom-ebestCard"),function(item,index){
        var dom = document.createElement("div");
        dom.className = "ke-custom-bestCard";
        var strHtml = '<img src="' + item.getAttribute("data-img") + '" class="u-cover"><p><strong class="u-cartTit">' + item.getAttribute("data-title") + ' <span>' + item.getAttribute("data-description") + '</span></strong><a href="' + item.getAttribute("data-link") + '" target="_blank" class="ke-btn ke-btn-red"> 立即查看 <em></em></a><i class="provider">' + item.getAttribute("data-recom") + '</i></p>';
        dom.innerHTML = strHtml;
        item.parentNode.appendChild(dom);
        item.parentNode.removeChild(item);
    });
})();
if (JeditMore && (pc.addEvent(JeditMore, "mouseenter", function() {
    pc.addClass(JeditMore, "edit-more-hover");
}), pc.addEvent(JeditMore, "mouseleave", function() {
    pc.removeClass(JeditMore, "edit-more-hover");
})), window.onload = function() {
    tempAreaId = "undefined" == typeof tempAreaId ? 0 :tempAreaId - 1, new pc.tab({
        target:pc.getElems("#JhotDealer .tab-nav .pannel"),
        control:pc.getElems("#JhotDealer .control .item"),
        link:!0,
        playTo:tempAreaId,
        onchange:function(e) {
            "true" == pc.getElem("#JhotDealer").getAttribute("data-yh") && (tempObjot = this.target[e],
            4 > e && "true" != this.target[e].getAttribute("load") && (autoLoadScript(location.protocol+"//m.pconline.com.cn/yp/company_dealer_brand_ad.jsp?ts=" + dealerList_ts[e], e),
            this.target[e].setAttribute("load", "true")), 4 == e && "true" != this.target[e].getAttribute("load") && (other = "//m.pconline.com.cn/yp/company_dealer_brand_ad.jsp?ts=" + tsID + "&max=12&callback=cpaCallback&" + ("0" == window.hq_ID ? "notInAreaId=1,2,3,4" :"areaId=" + window.hq_ID),
            autoLoadScript(other, e), this.target[e].setAttribute("load", "true")));
        }
    });
}, "undefined" != typeof hasVedio) {
    var Jbody = document.getElementById("Jbody");
    Jbody.onclick = function() {
        thisMovie("musicplayer").hideVoicebar();
    };
}
"true" === window.CommentNS.CommentNew ? require([
            // 'cmt.js'
            '//js.3conline.com/cmt/pconline/common/cmt.min.js'
             ], function() {
            if (document.getElementById("commentHolder") && "" != CommentNS.pageUrl) {
                var e = new Comment({
                    el:document.getElementById("commentHolder"),
                    onFetch:function() {
                       // cmtCount();
                    }
                });
                setTimeout(function(){
                        var t = pc.getElems("#JCmtImg .cmt-img-editor-el");
                        t.length > 0 && new ImgEditor({
                            el:t,
                            cmt:e
                        })
                    },0);
            }
        }) :window.CommentNS.CommentNew || document.getElementById("commentHolder") && "" != CommentNS.pageUrl && (new Comment({
            el:document.getElementById("commentHolder")
        })), require([ "//www.pconline.com.cn/jrzcz/jk/pc/1512/intf12245.js" ], function() {});
//同价位产品 
function rankChange(sid){
var rankPics=pc.getElems(sid);
    pc.each(rankPics,function(elem){
    pc.addEvent(elem, "mouseenter", function() {
    pc.each(rankPics,function(elem){
      pc.removeClass(elem,"current");  
    });   
    pc.addClass(this,"current");
});
})
}
rankChange("#productInfor .rank1 li");
rankChange("#productInfor .rank2 li");
// 为您推荐更多
var ptBoxs=pc.getElems(".arts-recommend .pannel"),
    ptMore=pc.getElems(".arts-recommend .ptMore"),
    pthide=pc.getElems(".arts-recommend .hidden");
 pc.each(ptMore,function(elem,k){
    pc.addEvent(elem, "click", function() {
        var hideBox=pc.getElems(".hide",ptBoxs[k+1]);
        
        if(hideBox.length>10){
           for(var i=0; i<10;i++){
             pc.removeClass(hideBox[i],"hide");
           }
        }else{
          var elemTop=document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
          for(var i=0; i<hideBox.length;i++){
            pc.removeClass(hideBox[i],"hide");
             // pc.show(pthide[i]);
           }
          
         window.scrollTo(0,elemTop); 
         pc.hide(elem);
        }

    });
 }); 
 if(pc.getElem("#JreArt")){   
 var artBox=pc.getElems(".news-no-pad li");
 if(artBox.length<1){
    var JreArt=pc.getElem("#JreArt");
    pc.hide(JreArt);
 }
}
