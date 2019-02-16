(function (window, undefined) {
    if (getCookie("sso_username") != null && getCookie("sso_username") != "undefined") {
        jQuery("#LoginFalse").hide();
        jQuery("#LoginTrue").show();
        jQuery("#logintrueName").html(substr(getCookie("sso_username"), 10));
        jQuery("#log_out").attr("href", "http://u.it168.com/Logout?returnUrl=" + location.href);
        jQuery("#LoginTrue").hover(function () {
            jQuery(".zhanghao").show()
        }, function () {
            jQuery(".zhanghao").hide()
        })
    } else {
        jQuery("#LoginTrue").hide();
        jQuery("#LoginFalse").show();
        jQuery("#login").attr("href", "http://u.it168.com/Login?returnUrl=" + escape(top.document.URL));
        jQuery("#Register").attr("href", "http://u.it168.com/Register?returnUrl=" + escape(top.document.URL))
    }

    function getCookie(sName) {
        var aCookie = document.cookie.split("; ");
        for (var i = 0; i < aCookie.length; i++) {
            var aCrumb = aCookie[i].split("=");
            if (encodeURIComponent(sName) == aCrumb[0]) {
                return decodeURIComponent(aCrumb[1])
            }
        }
        return null
    }

    document.getElementById("nav").onselectstart = function () {
        return false
    };
    if (document.getElementById("nav")) {
        var sfEls = document.getElementById("nav").getElementsByTagName("li");
        for (var i = 0; i < sfEls.length; i++) {
            $(sfEls[i]).hover(function () {
                $(this).addClass("all")
            }, function () {
                $(this).removeClass("all")
            })
        }
    }
    jQuery("#SouSearch").submit(function () {
        var q = document.getElementById("q").value;
        if (q == "" || q == "请输入要查询的关键词") {
            alert("请输入要查询的关键词!");
            return false
        }
        document.getElementById("SouSearch").action = "http://sou.it168.com/search?q=" + q + "&f=" + chanstr
    });
    jQuery(".Tab_Nav li").hover(function () {
        var idstr = jQuery(this).parent().attr("id");
        for (var i = 0; i < jQuery(this).parent().find("li").length; i++) {
            jQuery("#" + idstr + "_Content" + i).hide()
        }
        jQuery(this).parent().find("span").attr("class", "");
        jQuery(this).find("span").attr("class", "here");
        jQuery("#" + idstr + "_Content" + jQuery(this).attr("data")).show()
    });

    function substr(str, len) {
        if (!str || !len) {
            return ""
        }
        var a = 0;
        var i = 0;
        var temp = "";
        for (i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                a += 2
            } else {
                a++
            }
            if (a > len) {
                return temp
            }
            temp += str.charAt(i)
        }
        return str
    }

    function It168Article_CommonAjax() {
        this.Main = function () {
            /*var AjaxsendUrl = "http://ajaxlist.it168.com/It168ArticleHandler.ashx?type=ArticleCommon&articleid=" + articleCode;
            $.ajax({
                type: "GET",
                cache: false,
                url: AjaxsendUrl + "&src=ajaxreturn",
                dataType: "jsonp",
                jsonp: "callbackparam",
                success: function (data) {
                    if (data != null && typeof(data) != "undefined" && data != "") {
                        $("#commonajax").html(data);
                        if ($("#IT168zanNum").length > 0 && $("#ArticleComment_count").length > 0) {
                            $("#IT168zanNum").html($("#ArticleComment_count").html());
                            var val = readCookie("ArtGrade_cookie_zan");
                            val = val == null ? "" : val;
                            if (val != "") {
                                var arr = val.split(",");
                                for (var i = 0; i < arr.length; i++) {
                                    if ($.trim(arr[i]) == articleCode) {
                                    }
                                }
                            }
                        }
                    } else {
                        return
                    }
                },
                error: function (data) {
                }
            })*/
        };
        var setCook = function (name, value) {
            var exp = new Date();
            exp.setTime(exp.getTime() + 864000000);
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=.it168.com;path=/"
        };
        var readCookie = function (name, defaultValue) {
            var cName = name + "=";
            var CA = new Array();
            CA = document.cookie.split(";");
            for (var i = 0; i < CA.length; i++) {
                var c = CA[i].replace(/(^\s*)|(\s*$)/g, "");
                if (c.indexOf(cName) == 0) {
                    return decodeURIComponent(c.substring(cName.length, c.length))
                }
            }
            return typeof defauleValue != "undefined" ? defauleValue : null
        };
        var It168addcount = function (d) {
            var g = new Image(1, 1);
            g.onLoad = function () {
            };
            g.src = d
        };
        this.addArtGrade = function (artId, typeId) {
            if (typeId == 1) {
                var val = readCookie("ArtGrade_cookie_zan");
                val = val == null ? "" : val;
                var arr = val.split(",");
                for (var i = 0; i < arr.length; i++) {
                    if ($.trim(arr[i]) == artId) {
                        return
                    }
                }
                jQuery(".zan").css("position", "relative");
                jQuery("#IT168zanNum").html(parseInt($("#IT168zanNum").html()) + 1);
                setTimeout(function () {
                    $(".numZan1").hide()
                }, 500);
                if (jQuery.trim(val) == "") {
                    val = artId
                } else {
                    val = val + "," + artId
                }
                setCook("ArtGrade_cookie_zan", val)
            }
            var it168_ArticleCommentUrl = "http://ajaxlist.it168.com/It168ArticleHandler.ashx?type=ArticleComment&articleId=" + artId + "&typeId=" + typeId;
            It168addcount(it168_ArticleCommentUrl)
        };
        this.init = function () {
            jQuery(".zan").hover(function () {
                var val = readCookie("ArtGrade_cookie_zan");
                val = val == null ? "" : val;
                var arr = val.split(",");
                var artId2 = jQuery(".zan").attr("data");
                for (var i = 0; i < arr.length; i++) {
                    if ($.trim(arr[i]) == artId2) {
                        jQuery("#unTap_zan").hide();
                        jQuery("#tap_zan").show()
                    } else {
                        jQuery("#tap_zan").hide();
                        jQuery("#unTap_zan").show()
                    }
                    jQuery(".InitZan").hide()
                }
            }, function () {
                jQuery("#unTap_zan").hide();
                jQuery("#tap_zan").hide();
                jQuery(".InitZan").show()
            })
        }
    }

    var It168CommonAjax = new It168Article_CommonAjax();
    It168CommonAjax.Main();
    It168CommonAjax.init();
    jQuery(".zan").click(function () {
        var artId1 = jQuery(".zan").attr("data");
        It168CommonAjax.addArtGrade(artId1, 1)
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 250) {
            jQuery(".fu").fadeIn(500)
        } else {
            jQuery(".fu").fadeOut(500)
        }
    });
    jQuery(".fanhui").click(function () {
        jQuery("body,html").animate({scrollTop: 0}, 1000);
        return false
    });

    function autoAddEllipsis(pStr, pLen) {
        var _ret = cutString(pStr, pLen);
        var _cutFlag = _ret.cutflag;
        var _cutStringn = _ret.cutstring;
        if ("1" == _cutFlag) {
            return _cutStringn + "..."
        } else {
            return _cutStringn
        }
    }

    function cutString(pStr, pLen) {
        var _strLen = pStr.length;
        var _tmpCode;
        var _cutString;
        var _cutFlag = "1";
        var _lenCount = 0;
        var _ret = false;
        if (_strLen <= pLen / 2) {
            _cutString = pStr;
            _ret = true
        }
        if (!_ret) {
            for (var i = 0; i < _strLen; i++) {
                if (isFull(pStr.charAt(i))) {
                    _lenCount += 2
                } else {
                    _lenCount += 1
                }
                if (_lenCount > pLen) {
                    _cutString = pStr.substring(0, i);
                    _ret = true;
                    break
                } else {
                    if (_lenCount == pLen) {
                        _cutString = pStr.substring(0, i + 1);
                        _ret = true;
                        break
                    }
                }
            }
        }
        if (!_ret) {
            _cutString = pStr;
            _ret = true
        }
        if (_cutString.length == _strLen) {
            _cutFlag = "0"
        }
        return {"cutstring": _cutString, "cutflag": _cutFlag}
    }

    function isFull(pChar) {
        for (var i = 0; i < pChar.strLen; i++) {
            if ((pChar.charCodeAt(i) > 128)) {
                return true
            } else {
                return false
            }
        }
    }
})(window);