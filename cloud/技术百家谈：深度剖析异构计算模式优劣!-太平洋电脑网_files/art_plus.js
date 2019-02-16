function jsonp(t, e, o, n) {
    var o = o || "jsonp" + Math.random().toString(32).slice(2), a = document.createElement("script");
    if (n) for (var i in n) n.hasOwnProperty(i) && a.setAttribute(i, n[i]);
    window[o] = function(t) {
        e && e(t), a.parentNode.removeChild(a), a = null;
    }, a.src = -1 !== t.indexOf("?") ? t + "&callback=" + o :t + "?callback=" + o, document.getElementsByTagName("head")[0].appendChild(a);
}

!function(t, e) {
    var o = t, n = function() {
        var t = [].forEach;
        return t ? function(e, o) {
            o && e && t.call(e, o);
        } :function(t, e) {
            if (e && t) for (var o = t.length, n = 0; o--; ) e(t[n], n++);
        };
    }(), a = function() {
        o.console && o.console.log(arguments);
    }, i = e.createElement("script"), s = e.head || e.getElementsByTagName("head")[0], c = "onload", l = c in i, c = l ? c :"onreadystatechange", r = /complete|loaded/, d = function(t, e, o) {
        var n = this;
        n.fns = [ o ], n.status = -1, n.id = t, n._name = e;
    };
    d.prototype = {
        constructor:d,
        addFn:function(t) {
            this.fns.push(t);
        },
        setStatus:function(t) {
            this.status = t;
        },
        load:function(t, n, i, d) {
            var u, h = this, p = e.createElement("script"), m = 0, f = function() {
                h.fire(d), s.removeChild(p), p = null;
            };
            h.id = p.id = t, p[c] = l ? f :function() {
                r.test(p.readyState) && (++m, 1 === m ? u = o.setTimeout(f, 500) :(o.clearTimeout(u),
                f()));
            }, p.charset = i, p.setAttribute("async", "true"), p.setAttribute("type", "text/javascript"),
            p.src = n, s.appendChild(p), p.onError = function() {
                o.clearTimeout(u), a(t, n, url, " is load error"), s.removeChild(p), p = null;
            }, h.setStatus(0);
        },
        fire:function(t) {
            var e = this;
            n(e.fns, function(o) {
                o.call(t || null, e._name);
            }), e.setStatus(1);
        }
    };
    var u = function() {
        var t = this;
        t.point = 0, t.script = {};
    };
    u.prototype = {
        constructor:u,
        create:function(t, e) {
            var o = this, n = o.script[t] = new d(o.point++, t, e);
            return n;
        },
        get:function(t, e) {
            var o = this, n = o.script[t];
            return n || (n = o.create(t, e)), n;
        }
    };
    var h = new u(), p = function(t, o, n, a) {
        var i = a || t, s = (n || e.charset, h.get(i, o)), c = s.status, l = "js-id-" + +new Date();
        switch (c) {
          case -1:
            s.load(l, t, n);
            break;

          case 0:
            s.addFn(o);
            break;

          case 1:
            s.fire();
        }
        return l;
    }, m = {};
    m.mods = {}, m._path = {}, m._short = {}, m.w = {}, m.config = function(t) {
        var e, o, n = this, a = t.baseUrl || n._baseUrl || "", i = t.deps, s = t.combo, c = t.comboUrl, l = t.path, r = t.alies;
        for (e in l) {
            var d = n._path[e] = n._path[l[e]] = {};
            d.src = l[e], d.callback = [];
        }
        for (o in r) n._short[o] = r[o];
        n._baseUrl = a, i && (n._deps = i), s && (n._combo = s), c && (n._comboUrl = c);
    };
    var f = function(t) {
        var e = m._deps || {}, o = e[t], a = [];
        return o && n(o, function(t) {
            var o = e[t];
            o && a.push.apply(a, o);
        }), a.push.apply(a, o || []), a;
    }, v = function(t, o, i, s) {
        var c = m, l = c.mods, r = c._path, d = c._baseUrl, u = "", h = [], v = function() {
            var e = [];
            n(h, function(t) {
                t = c._short[t] || t;
                var e = l[t];
                e.factory && e.factory();
            }), n(t, function(t, o) {
                t = c._short[t] || t, e[o] = l[t].exports;
            }), o.apply(null, e);
        };
        n(t, function(t) {
            h.push.apply(h, f(t));
        }), h.push.apply(h, t);
        var g = h.length;
        if ((!c._combo || s) && n(h, function(t) {
            t = c._short[t] || t;
            var o = l[t], n = r[t], a = n ? d + n.src.replace(/(?:^\.\/|^\.|\/)/, "") :t;
            o && o.loaded ? 0 === --g && v() :(u = a, p(u, function() {
                l[t] || (l[t] = {}), l[t].loaded = !0, 0 === --g && v();
            }, i || e.charset, t));
        }), c._combo && !s) {
            var b = [];
            n(h, function(t) {
                t = c._short[t] || t;
                var e = l[t];
                if (!e || !e.loaded) {
                    var o = r[t].src;
                    if (!r[t]) throw new Error(t + "is not define by module.");
                    b.push(o);
                }
            }), a(d), b.length > 0 ? p((d + c._comboUrl || "") + b.join(","), function() {
                v();
            }, i || e.charset, b.join(",")) :v();
        }
    }, g = function(t) {
        var e = m.mods[t];
        return e.factory && e.factory(), e.exports;
    }, b = function(t, e, o) {
        !o && (o = e, e = []);
        var n = t.split("|"), a = n[0], i = n.length > 1, s = i ? n[1] :a, c = m, l = c.mods[s] = {}, r = l.exports = {};
        i && (c._short[a] = s), l.factory = function() {
            o.apply(c.w, [ g, r, l ]), delete this.factory;
        }, l.loaded = !0;
    };
    v.config = function(t) {
        m.config(t);
    }, t.define = b, t.require = v;
}(window, document);

var Lazy = {
    eCatch:{},
    eHandle:0,
    isFunction:function(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
    },
    addEvent:function(t, e, o) {
        return t.addEventListener ? t.addEventListener(e, o, !1) :t.attachEvent("on" + e, o),
        this.eCatch[++this.eHandle] = {
            handler:o
        }, this.eHandle;
    },
    removeEvent:function(t, e, o) {
        t.addEventListener ? t.removeEventListener(e, this.eCatch[o].handler, !1) :t.detachEvent("on" + e, this.eCatch[o].handler);
    },
    $$:function(t) {
        return "object" == typeof t ? t :document.getElementById(t);
    },
    converNodeToArray:function(t) {
        var e = [];
        try {
            e = Array.prototype.slice.call(t, 0);
        } catch (o) {
            for (var n = 0, a = t.length; a > n; n++) e.push(t[n]);
        }
        return e;
    },
    each:function(t, e) {
        for (var o = 0, n = t.length; n > o; o++) e.call(t[o], o, t[o]);
    },
    create:function(t) {
        var e = this;
        t.loading = !1, t.timmer = void 0, t.time_act = 0, t.delay = t.delay || 100, t.delay_tot = t.delay_tot || 1e3,
        t.imgList = [], this.imgLoad = t.imgLoad;
        var o = t.lazyId, n = [];
        if (o = "string" == typeof o ? [].concat(o) :o, e.each(o, function(t, o) {
            var a = document.getElementById(o);
            if (a) {
                var i;
                i = document.querySelectorAll ? document.querySelectorAll("#" + o + " img") :a.getElementsByTagName("img"),
                n = n.concat(i && e.converNodeToArray(i));
            }
        }), e.each(n, function(e, o) {
            o.getAttribute(t.trueSrc) && t.imgList.push(o);
        }), t.imgCount = t.imgList.length, t.jsList) {
            t.jsCount = t.jsList.length;
            for (var a = 0; a < t.jsCount; a++) t.jsList[a].oDom = "object" == typeof t.jsList[a].id ? t.jsList[a].id :document.getElementById(t.jsList[a].id);
        } else t.jsList = [], t.jsCount = 0;
        return this.init(t), t;
    },
    checkPhone:function(t) {
        this.isPhone = t.indexOf("android") > -1 || t.indexOf("iphone") > -1 || t.indexOf("ipod") > -1 || t.indexOf("ipad") > -1 ? !0 :!1;
    },
    checkLazyLoad:function(t) {
        return t.indexOf("opera mini") > -1 ? !1 :!0;
    },
    init:function(t) {
        if (t.unNeedListen) return void this.loadOnce(t);
        if (0 != t.imgCount || 0 != t.jsCount) {
            var e = navigator.userAgent.toLowerCase();
            this.checkLazyLoad(e) ? (this.checkPhone(e), t.e1 = this.addEvent(window, "scroll", this.load(t)),
            t.e2 = this.addEvent(window, "touchmove", this.load(t)), t.e3 = this.addEvent(window, "touchend", this.load(t)),
            this.loadTime(t)) :this.loadOnce(t);
        }
    },
    destory:function(t) {
        t.imgCount = [], t.e1 = this.addEvent(window, "scroll", this.load(t)), t.e2 = this.addEvent(window, "touchmove", this.load(t)),
        t.e3 = this.addEvent(window, "touchend", this.load(t));
    },
    getYGetBound:function(t, e) {
        var o = t.getBoundingClientRect().top || 0;
        return 0 == o ? null :o + e;
    },
    getYOffSet:function(t) {
        for (var e = 0; t.offsetParent; ) e += t.offsetTop, t = t.offsetParent;
        return 0 == e ? null :e;
    },
    getHideY:function(t, e, o) {
        for (;t && t !== document; ) {
            var n = e(t, o);
            if (null != n) return n;
            t = t.parentNode;
        }
        return 0;
    },
    getY:function(t, e) {
        var o;
        if (t) return o = t.getBoundingClientRect ? this.getHideY(t, this.getYGetBound, e) :this.getHideY(t, this.getYOffSet);
    },
    load:function(t) {
        return function() {
            1 != t.loading && (t.loading = !0, t.time_act && 1 * new Date() - t.time_act > t.delay_tot ? (t.timmer && clearTimeout(t.timmer),
            Lazy.loadTime(t)) :(t.timmer && clearTimeout(t.timmer), t.timmer = setTimeout(function() {
                Lazy.loadTime(t);
            }, t.delay)), t.loading = !1);
        };
    },
    setSrc:function(t, e) {
        var o = this, n = t.getAttribute(e), a = new Image();
        a.onload = function() {
            t.setAttribute("src", n), t.removeAttribute(e), o.imgLoad && o.imgLoad.call(t, t, a.width, a.height);
        }, a.src = n;
    },
    setJs:function(js) {
        Lazy.isFunction(js) ? js.call(this) :eval(js);
    },
    loadTime:function(t) {
        t.time_act = 1 * new Date();
        var e, o, n;
        if (this.isPhone ? (e = window.screen.height, o = window.scrollY, n = o + e) :(e = document.documentElement.clientHeight || document.body.clientHeight,
        o = Math.max(document.documentElement.scrollTop, document.body.scrollTop), n = e + o),
        t.offset = t.offset || e, t.preOffset = t.preOffset || e, t.imgCount) {
            for (var a = [], i = 0; i < t.imgCount; i++) {
                var s, c = t.imgList[i], s = this.getY(c, o);
                s > o - t.preOffset && s < n + t.offset && (s > o && n > s ? this.setSrc(c, t.trueSrc) :a.push(c),
                t.imgList.splice(i, 1), i--, t.imgCount--);
            }
            var l = a.length;
            if (l) for (var i = 0; l > i; i++) {
                var c = a[i];
                this.setSrc(c, t.trueSrc);
            }
        }
        if (t.jsCount) for (var i = 0; i < t.jsCount; i++) {
            var r = t.jsList[i], d = this.getY(r.oDom, o);
            d < n + t.offset && (this.setJs.call(r.oDom, r.js), t.jsList.splice(i, 1), i--,
            t.jsCount--);
        }
        0 == t.imgCount && 0 == t.jsCount && (this.removeEvent(window, "scroll", t.e1),
        this.removeEvent(window, "touchmove", t.e2), this.removeEvent(window, "touchend", t.e3));
    },
    loadOnce:function(t) {
        for (var e = 0; e < t.imgCount; e++) {
            var o = t.imgList[e];
            this.setSrc(o, t.trueSrc);
        }
        if (t.jsList) for (var e = 0; e < t.jsCount; e++) {
            var n = t.jsList[e];
            this.setJs.call(n.oDom, n.js);
        }
    }
};

!function() {
    function t(t, e) {
        for (var o in e) t[o] = e[o];
        return this;
    }
    function e(t) {
        return t && t.preventDefault ? t.preventDefault() :window.event.returnValue = !1,
        !1;
    }
    function o(t) {
        var e = document.createElement("link");
        e.type = "text/css", e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e);
    }
    function n(t, e) {
        for (var o = [], n = "*", a = new RegExp("(^|\\\\s)" + t + "(\\\\s|$)", "i"), i = e ? e.getElementsByTagName(n) :document.getElementsByTagName(n), s = 0; s < i.length; s++) {
            var c = i[s].className;
            c.length > 0 && (c == t || a.test(c)) && o.push(i[s]);
        }
        return o;
    }
    var a = function(e) {
        this.option = {
            title:null,
            content:"",
            width:"310px",
            closeable:!0,
            closeText:"close",
            closeDelay:0,
            boxClass:"popup",
            okText:"确定",
            cancelText:"取消",
            okButton:!1,
            cancelButton:!1,
            focusOk:!1,
            focusCancel:!1,
            bottom:"",
            withLayer:!0,
            overlayIndex:900,
            boxIndex:950
        }, e && t(this.option, e), this.init();
    };
    a.prototype = {
        init:function() {
            this.create(), this.bind(), this.show();
        },
        bind:function() {
            var t = this, o = t.option;
            if (o.okEle && (o.okEle.onclick = function(o) {
                o = o || window.event, t.ok(), e(o);
            }), o.cancelEle && (o.cancelEle.onclick = function(o) {
                o = o || window.event, t.cancel(), e(o);
            }), o.closeEle && (o.closeEle.onclick = function(o) {
                o = o || window.event, t.close(), e(o);
            }), o.closeDelay) {
                var n = parseInt(o.closeDelay, 10);
                setTimeout(function() {
                    t && t.close();
                }, n);
            }
        },
        create:function() {
            var t = this, e = t.option;
            e.withLayer && (e.overlay = document.createElement("div"), e.overlay.className = "overlay",
            e.overlay.style.zIndex = e.overlayIndex);
            var o = document.createElement("div");
            o.className = e.boxClass;
            var n = "";
            if (e.title && (n += '<div class="popup-wrap"><div class="hd"><span class="mark">' + e.title + '</span><a href="javascript:;" class="close"></a></div>'),
            n += '<div class="bd">' + e.content + "</div>", e.okButton || e.cancelButton) {
                var a = e.focusOk ? "btn btn-ok active" :"btn btn-ok", i = e.focusCancel ? "btn btn-cancle active" :"btn btn-cancle";
                n += '<div class="btn-wrap">', e.okButton && (n += '<a href="javascript:;" class="' + a + '">' + e.okText + "</a>"),
                e.cancelButton && (n += '<a href="javascript:;" class="' + i + '">' + e.cancelText + "</a>");
            }
            n += "</div>", e.bottom && (n += '<div class="btm">' + e.bottom + "</div>"), o.innerHTML = n,
            e.ele = o;
            for (var s = o.getElementsByTagName("a"), c = 0, l = s.length; l > c; c++) {
                var r = s[c];
                -1 != r.className.indexOf("close") ? e.closeEle = r :-1 != r.className.indexOf("btn-ok") ? e.okEle = r :-1 != r.className.indexOf("btn-cancle") && (e.cancelEle = r);
            }
        },
        close:function() {
            var t = this.option;
            t.ele && t.overlay && (document.body.removeChild(t.ele), document.body.removeChild(t.overlay),
            t.closeCallback && t.closeCallback(), this.option.ele = null, this.option.overlay = null);
        },
        ok:function() {
            var t = this, e = t.option;
            e.okcallback ? e.okcallback() :t.close();
        },
        cancel:function() {
            var t = this, e = t.option;
            e.cancelCallback ? e.cancelCallback() :t.close();
        },
        show:function() {
            var t, e, o = this.option, n = document.compatMode && "css1compat" == document.compatMode.toLowerCase() ? document.documentElement :document.body;
            window.innerWidth ? t = window.innerWidth :n && (t = n.clientWidth), window.innerHeight ? e = window.innerHeight :n && (e = n.clientHeight),
            o.overlay && document.body.appendChild(o.overlay), document.body.appendChild(o.ele);
            var a = document.documentElement.scrollTop ? document.documentElement.scrollTop :document.body.scrollTop, i = a + (e - o.ele.offsetHeight) / 2, s = (t - o.ele.offsetWidth) / 2;
            o.ele.style.position = "absolute", o.ele.style.zIndex = o.boxIndex, o.ele.style.top = i + "px",
            o.ele.style.left = s + "px";
        }
    }, window.popTips = function(t, e, o) {
        var n = '<p class="info"><i class="icon"></i>' + t + "</p>";
        new a({
            title:"提示信息",
            boxClass:"popup " + e,
            content:n,
            bottom:o,
            closeDelay:"3000"
        });
    }, window.popBox = a, window.GlobalLogin = {
        cb:null,
        addHtml:!1,
        cmu:"cmu",
        csid:"common_session_id",
        charset:(document.charset ? document.charset :document.characterSet).toLowerCase(),
        passUrl:"https://passport3.pconline.com.cn/passport3/passport/login.jsp",
        loadAccountName:function() {
            var t = decodeURIComponent(this.getCookie(this.cmu));
            return t;
        },
        loadSessionId:function() {
            return this.getCookie(this.csid);
        },
        getCookie:function(t) {
            var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
            return null != e ? e[2] :null;
        },
        checkForm:function(t) {
            for (var e, t = this.form, o = 0; o < t.length; o++) if (e = t[o], !("text" != e.type && "password" != e.type || "" != e.value && e.value != e.defaultValue)) return this.showWran(e.getAttribute("empty")),
            !1;
            return !0;
        },
        checkLogin:function() {
            var t = 0, e = this, o = setInterval(function() {
                if (!(t++ < 30) || document.cookie.match(new RegExp("(^|; )" + e.csid + "=[^;]+"))) if (document.cookie.match(new RegExp("(^|; )" + e.csid + "=[^;]+"))) {
                    clearInterval(o);
                    var n = e.loadAccountName(), a = e.loadSessionId();
                    null != a && "" != n && "null" != n && "undefined" != n && (popLogin.close(), e.cb && (e.cb(),
                    e.cb = null), "undefined" != typeof f_Logan && f_Logan.build(), ajaxLogin && ajaxLogin.setup(),
                    document.charset = e.charset);
                } else clearInterval(o), e.showWran("登录失败! 请检查帐号和密码是否正确。"), document.charset = e.charset;
            }, 100);
        },
        ifLogin:function() {
            return document.cookie.match(new RegExp("(^|; )" + this.csid + "=[^;]+")) ? !0 :!1;
        },
        showWran:function(t) {
            this.warn.innerHTML = t, this.warn.style.display = "block";
        },
        showFB:function(t) {
            var e = '<div class="form"> <form onsubmit="return GlobalLogin.submitForm(this);" target="bestLogFrame" method="post" action="' + this.passUrl + '" accept-charset="gbk" autocomplete="off" id="JbestLoginForm"> <table width="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr class="line-word"> <td class="col-1">&nbsp;</td> <td> <p class="warn">登录失败</p> </td> </tr> <tr> <td class="col-1">账号</td> <td> <input type="passport" name="username" class="input holder" onfocus="if(this.value == this.defaultValue) {this.value = \'\';this.className = this.className.replace(\' holder\',\'\')}" onblur="if(this.value == \'\') {this.value = this.defaultValue;this.className += \' holder\' }" value="用户名/邮箱/手机号" empty="请输入账号！"> </td> </tr> <tr> <td class="col-1">密码</td> <td> <input type="password" name="password" class="input" empty="请输入密码！"> </td> </tr> <tr class="line-word"> <td></td> <td> <input type="checkbox" name="auto_login" value="3000" class="checkbox" id="auto_login"> <label for="auto_login">记住登录状态</label> </td> </tr> <tr> <td class="col-1"></td> <td> <input type="submit" class="btn" value="登录"><a href="http://my.pconline.com.cn/passport/forgot_password.jsp" class="fc-blue">忘记密码？</a> </td> </tr> </tbody> </table> </form> </div> <iframe name="bestLogFrame" id="bestLogFrame" width="0" height="0" scrolling="no" frameborder="0"></iframe>';
            window.popLogin = new a({
                title:"登录",
                content:e,
                boxClass:"popup popup-login",
                bottom:'还没有注册太平洋通行证？点击<a href="http://my.pconline.com.cn/passport/register.jsp" target="_blank" class="fc-blue">立即注册</a>'
            }), this.form = document.getElementById("JbestLoginForm"), this.warn = n("warn", this.form)[0],
            t && (this.cb = t);
        },
        submitForm:function(t) {
            return this.checkForm(t) && (this.checkLogin(), document.charset = "gbk", t.submit()),
            !1;
        }
    }, o("//js.3conline.com/ue/popup/online/css/popup.css");
}(), function() {
    window.ArtTools = {
        collectUrl:"",
        voteUrl:"",
        voteFlag:!0,
        isHasTopTools:!1,
        needJS:function(t, e, o, n) {
            var a = document.createElement("script");
            if (n && (a.charset = n), a.src = t, "function" == typeof e && 3 == arguments.length && "undefined" != typeof o && null != o && "" != o) return e(!1);
            if ("function" == typeof e) {
                var i = window.__needJS__ || (window.__needJS__ = []), s = i[t] || (i[t] = {
                    loaded:!1,
                    callbacks:[]
                });
                if (s.loaded) return e(!1);
                s.callbacks.push(e), 1 == s.callbacks.length && (a.onreadystatechange = a.onload = function() {
                    if (!(a.readyState && "loaded" != a.readyState && "complete" != a.readyState || s.loaded)) {
                        s.loaded = !0;
                        for (var t = 0; t < s.callbacks.length; t++) s.callbacks[t](!0);
                    }
                });
            }
            document.getElementsByTagName("head")[0].appendChild(a);
        },
        needCSS:function(t) {
            var e = document.createElement("link");
            e.type = "text/css", e.rel = "stylesheet", e.href = t, document.getElementsByTagName("head")[0].appendChild(e);
        },
        init:function(t) {
            function e() {
                $.extend(ArtTools, t), ArtTools.getDom(), ArtTools.resetData();
            }
            "undefined" == typeof jQuery ? this.needJS("//js.3conline.com/min/temp/v1/lib-jquery1.4.2.js", function() {
                e();
            }) :e();
        },
        usejq:function(fn){
            "undefined" == typeof jQuery ? this.needJS("//js.3conline.com/min/temp/v1/lib-jquery1.4.2.js", function() {
                fn()
            }) : fn() ;

        },
        getDom:function() {
            var t = $("#JartTools"), e = '<div class="at-wrap clearfix"> <a href="javascript:;" onclick="ArtTools.collect(this,1);return false;" target="_self" class="at-btn at-btn-clt"> <em></em><i class="at-txt">收藏</i> (<i class="at-num">0</i>) <i class="at-rate">+1</i> </a><a href="javascript:;" onclick="ArtTools.vote(this,0);return false;" target="_self" class="at-btn at-btn-pos"  title="点赞"> <em></em><i class="at-txt">赞</i> (<i class="at-num">0</i>) <i class="at-rate">+1</i> </a><a href="javascript:;" onclick="ArtTools.vote(this,1);return false;" target="_self" class="at-btn at-btn-neg"> <em></em><i class="at-txt">踩</i> (<i class="at-num">0</i>) <i class="at-rate">+1</i> </a><span class="pc-share" id="JpcShare"><a href="javascript:" target="_self" class="at-btn at-btn-share"><em></em>分享</a><div id="bdshare_warp" class="pc-share-wrap" shareType="tools" style="color:#fff" ' + ("undefined" != typeof bdSharePic ? "pic=" + bdSharePic :"") + ("undefined" != typeof bdShareDesc ? " content=" + bdShareDesc.replace(/[\s\t\r\n\f]/g, "&nbsp;") :"") + ("undefined" != typeof bdShareTit ? " tit=" + bdShareTit.replace(/[\s\t\r\n\f]/g, "&nbsp;") :"") + "></div></span></div>", o = $("#JartToolsTop");
            t.length > 0 && (this.needCSS("//js.3conline.com/ue/article/tools/css/art_tools.css"),
            t.append(e), 1 == this.isHasTopTools && o.length > 0 && (html_toptools = '<span class="pc-share tool-item tool-item-sha" id="JpcShareV2"><a href="javascript:;" target="_self"><em class="i-sha"></em></a><div id="bdshare_warp_v2" class="pc-share-wrap" style="font-size:0; color:#fff" sharetype="tools" ' + ("undefined" != typeof bdSharePic ? "pic=" + bdSharePic :"") + ("undefined" != typeof bdShareDesc ? " content=" + bdShareDesc.replace(/[\s\t\r\n\f]/g, "&nbsp;") :"") + ("undefined" != typeof bdShareTit ? " tit=" + bdShareTit.replace(/[\s\t\r\n\f]/g, "&nbsp;") :"") + '></div></span><span class="tool-item tool-item-col"><a href="javascript:;" onclick="ArtTools.collect(this,2);return false;" target="_self"  title="收藏" class="colBtn"><em class="i-col"></em></a><div class="tool-item-tip"><em class="art-triangle"></em>收藏成功<a href="//my.pconline.com.cn/collection/myArticle.jsp" target="_blank">查看收藏&gt;&gt;</a></div></span><span class="tool-item tool-item-cmt" id="cmtCount"></span>',
            o.append(html_toptools)), this.needJS("//js.3conline.com/ue/share/online/bd_share_allin_v6.js", null, null, "gbk"),
            this.bind());
        },
        resetData:function() {
            var t = $("#JartTools"), e = $("#JartToolsTop");
            $.ajax({
                url:"//bip.pconline.com.cn/intf/article.jsp?act=getArticleCount&siteId=1&articleId=" + this.id + "&additionalCollect=0&callback=?&additionalAgree=" + this.initAgree + "&additionalAgainst=" + this.initAgainst,
                dataType:"jsonp",
                jsonpCallback:"artInitData",
                success:function(e) {
                    var o = 0, n = 0;
                    e && (t.find(".at-btn-clt .at-num").html(e.collectCount), o = parseInt(e.agreeCount) + parseInt(e.addAgree),
                    t.find(".at-btn-pos .at-num").html("" + o), n = parseInt(e.againstCount) + parseInt(e.addAgainst),
                    t.find(".at-btn-neg .at-num").html("" + n));
                }
            }), $.ajax({
                url:"//bip.pconline.com.cn/intf/article.jsp?act=isCollect&callback=?&siteId=1&articleId=" + this.id,
                dataType:"jsonp",
                jsonpCallback:"artInitVote",
                success:function(o) {
                    if (o && 1 == o.code) {
                        var n = t.find(".at-btn-clt"), a = n.find(".at-txt");
                        a.html("已" + a.html()), n.addClass("actived"), n.get(0).onclick = function() {
                            return !1;
                        }, 1 == ArtTools.isHasTopTools && e.length > 0 && (e.find(".tool-item-col").addClass("tool-item-coled"),e.find(".colBtn").attr("title","取消收藏"),e.find(".tool-item-col a").get(0).onclick = function() {
                           e.find(".colBtn").attr("title","收藏");
                           ArtTools.collect(this, "4");
                        });
                        
                    }
                }
            });
        },
        bind:function() {
            var t = $("#JpcShare");
            t.bind("mouseenter", function() {
                $(this).addClass("pc-share-hover");
            }), t.bind("mouseleave", function() {
                $(this).removeClass("pc-share-hover");
            });
            var e = $("#JartToolsTop .tool-item");
            $.each(e, function(t, e) {
                $(e).bind("mouseenter", function() {
                    $(this).addClass("tool-item-hover");
                }), $(e).bind("mouseleave", function() {
                    $(this).removeClass("tool-item-hover");
                });
            });
        },
        collect:function() {
            function t() {
                GlobalLogin.ifLogin() ? (("1" == e[1] || "2" == e[1]) && ArtTools.collectAct(e),
                ("3" == e[1] || "4" == e[1]) && ArtTools.delCollectAct(e)) :GlobalLogin.showFB(function() {
                    ("1" == e[1] || "2" == e) && ArtTools.collectAct(e), ("3" == e[1] || "4" == e) && ArtTools.delCollectAct(e);
                });
            }
            var e = arguments;
            "undefined" == typeof GlobalLogin ? this.needJS("//js.3conline.com/ue/popup/online/js/popup.js", function() {
                t();
            }, {}, "gbk") :t();
        },
        delCollectAct:function(t) {
            var e = $("#JartTools"), o = $("#JartToolsTop"), n = $(t[0]), a = t[1];
            $atTxt = e.find(".at-btn-clt .at-txt"), $atNum = e.find(".at-btn-clt .at-num"),
            isHasTopTools = this.isHasTopTools, that = this, num = parseInt($atNum.html()),
            $.ajax({
                url:"//bip.pconline.com.cn/intf/article.jsp?act=delMyCollection&siteId=1&callback=?&articleId=" + this.id,
                dataType:"jsonp",
                jsonpCallback:"delArtCollect",
                success:function(t) {
                    var e = 0;
                    if (null == t) return void alert("亲，接口异常，请刷新页面！");
                    if (e = t.code, 0 == e ? num-- :-1 == e && that.collect(), $atTxt.html($atTxt.html().replace("已", "")),
                    $atNum.html(num), n.addClass("actived"), n.get(0).onclick = function() {
                        ArtTools.collect(this, "1");
                    }, 1 == isHasTopTools) {
                        var i = o.find(".tool-item-col");
                        if (i.removeClass("tool-item-coled"), i.find("a").get(0).onclick = function() {
                            ArtTools.collect(this, "2");
                        }, "4" == a) {
                            var s = i.find(".tool-item-tip").html().replace("收藏", "取消");
                            i.find(".tool-item-tip").html(s), i.addClass("tool-item-showtip"),i.find(".colBtn").attr("title","收藏"), setTimeout(function() {
                                i.removeClass("tool-item-showtip");
                            }, 3e3);
                        }
                    }
                }
            });
        },
        collectAct:function(t) {
            var e = $("#JartTools"), o = $("#JartToolsTop"), n = $(t[0]), a = t[1];
            $atTxt = e.find(".at-btn-clt .at-txt"), $atNum = e.find(".at-btn-clt .at-num"),
            isHasTopTools = this.isHasTopTools, that = this, num = parseInt($atNum.html()),
            $.ajax({
                url:"//bip.pconline.com.cn/intf/article.jsp?act=addArtCollect&siteId=1&callback=?&articleId=" + this.id,
                dataType:"jsonp",
                jsonpCallback:"addArtCollect",
                success:function(t) {
                    var e = 0;
                    if (null == t) return void alert("亲，接口异常，请刷新页面！");
                    if (e = t.code, 0 == e ? num++ :2 == e && that.collect(), $atTxt.html("已" + $atTxt.html()),
                    $atNum.html(num), n.addClass("actived"), n.get(0).onclick = function() {
                        ArtTools.collect(this, "3");
                    }, 1 == isHasTopTools) {
                        var i = o.find(".tool-item-col");
                        if (i.addClass("tool-item-coled"),i.find(".colBtn").attr("title","取消收藏"), i.find("a").get(0).onclick = function() {
                            ArtTools.collect(this, "4");
                        }, "2" == a) {
                            var s = i.find(".tool-item-tip").html().replace("取消", "收藏");
                            i.find(".tool-item-tip").html(s),i.find(".colBtn").attr("title","取消收藏"),i.addClass("tool-item-showtip"), setTimeout(function() {
                                i.removeClass("tool-item-showtip");

                            }, 3e3);
                        }
                    }
                }
            });
        },
        vote:function(t, e) {
            var o = $(t), n = 0 == e ? o.next() :o.prev(), e = e + 1, a = this;
            this.voteFlag && (this.voteFlag = !1, $.ajax({
                url:"//bip.pconline.com.cn/intf/article.jsp?act=addArtAgree&siteId=1&callback=?&articleId=" + this.id + "&isAgree=" + e,
                dataType:"jsonp",
                jsonpCallback:"addArtAgree",
                success:function(t) {
                    if (!t) return void alert("亲，接口异常，请刷新页面！");
                    var i = t.code, s = o.find(".at-txt"), c = o.find(".at-num"), l = o.find(".at-rate");
                    a.voteFlag = !0, 0 == i ? (l.show().animate({
                        top:-30
                    }, 500, function() {
                        c.html(parseInt(c.html()) + 1), l.hide();
                    }), s.html("已" + s.html())) :(1 == i || 2 == i) && (e != i && (s = n.find(".at-txt")),
                    s.html("已" + s.html() + "过")), o.addClass("actived"), o.get(0).onclick = function() {
                        return !1;
                    }, n.addClass("disabled"), n.get(0).onclick = function() {
                        return !1;
                    };
                }
            }));
        }
    };
}();
(function(){
    ArtTools.usejq(function(){
      $('.art-pic-for-cmt').each(function(ele,index){
        $(this).parent()[0].tagName==='A' && $(this).parent().wrap('<i class="cmt-img-editor-el"></i>')
        $(this).parent()[0].tagName!=='A' && $(this).wrap('<i class="cmt-img-editor-el"></i>')
      });
    });

})();

