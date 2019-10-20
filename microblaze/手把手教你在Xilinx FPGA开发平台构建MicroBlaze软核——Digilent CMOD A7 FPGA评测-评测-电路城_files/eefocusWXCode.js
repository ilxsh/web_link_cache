/*
 * Purl (A JavaScript URL parser) v2.3.1
 * Developed and maintanined by Mark Perkins, mark@allmarkedup.com
 * Source repository: https://github.com/allmarkedup/jQuery-URL-Parser
 * Licensed under an MIT-style license. See https://github.com/allmarkedup/jQuery-URL-Parser/blob/master/LICENSE for details.
 */

; (function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        window.purl = factory();
    }
})(function () {

    var tag2attr = {
        a: 'href',
        img: 'src',
        form: 'action',
        base: 'href',
        script: 'src',
        iframe: 'src',
        link: 'href'
    },

        key = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'fragment'], // keys available to query

        aliases = { 'anchor': 'fragment' }, // aliases for backwards compatability

        parser = {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,  //less intuitive, more accurate to the specs
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // more intuitive, fails on relative paths and deviates from specs
        },

        isint = /^[0-9]+$/;

    function parseUri (url, strictMode) {
        var str = decodeURI(url),
            res = parser[strictMode || false ? 'strict' : 'loose'].exec(str),
            uri = { attr: {}, param: {}, seg: {} },
            i = 14;

        while (i--) {
            uri.attr[key[i]] = res[i] || '';
        }

        // build query and fragment parameters
        uri.param['query'] = parseString(uri.attr['query']);
        uri.param['fragment'] = parseString(uri.attr['fragment']);

        // split path and fragement into segments
        uri.seg['path'] = uri.attr.path.replace(/^\/+|\/+$/g, '').split('/');
        uri.seg['fragment'] = uri.attr.fragment.replace(/^\/+|\/+$/g, '').split('/');

        // compile a 'base' domain attribute
        uri.attr['base'] = uri.attr.host ? (uri.attr.protocol ? uri.attr.protocol + '://' + uri.attr.host : uri.attr.host) + (uri.attr.port ? ':' + uri.attr.port : '') : '';

        return uri;
    }

    function getAttrName (elm) {
        var tn = elm.tagName;
        if (typeof tn !== 'undefined') return tag2attr[tn.toLowerCase()];
        return tn;
    }

    function promote (parent, key) {
        if (parent[key].length === 0) return parent[key] = {};
        var t = {};
        for (var i in parent[key]) t[i] = parent[key][i];
        parent[key] = t;
        return t;
    }

    function parse (parts, parent, key, val) {
        var part = parts.shift();
        if (!part) {
            if (isArray(parent[key])) {
                parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
                parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
                parent[key] = val;
            } else {
                parent[key] = [parent[key], val];
            }
        } else {
            var obj = parent[key] = parent[key] || [];
            if (']' == part) {
                if (isArray(obj)) {
                    if ('' !== val) obj.push(val);
                } else if ('object' == typeof obj) {
                    obj[keys(obj).length] = val;
                } else {
                    obj = parent[key] = [parent[key], val];
                }
            } else if (~part.indexOf(']')) {
                part = part.substr(0, part.length - 1);
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
                // key
            } else {
                if (!isint.test(part) && isArray(obj)) obj = promote(parent, key);
                parse(parts, obj, part, val);
            }
        }
    }

    function merge (parent, key, val) {
        if (~key.indexOf(']')) {
            var parts = key.split('[');
            parse(parts, parent, 'base', val);
        } else {
            if (!isint.test(key) && isArray(parent.base)) {
                var t = {};
                for (var k in parent.base) t[k] = parent.base[k];
                parent.base = t;
            }
            if (key !== '') {
                set(parent.base, key, val);
            }
        }
        return parent;
    }

    function parseString (str) {
        return reduce(String(str).split(/&|;/), function (ret, pair) {
            try {
                pair = decodeURIComponent(pair.replace(/\+/g, ' '));
            } catch (e) {
                // ignore
            }
            var eql = pair.indexOf('='),
                brace = lastBraceInKey(pair),
                key = pair.substr(0, brace || eql),
                val = pair.substr(brace || eql, pair.length);

            val = val.substr(val.indexOf('=') + 1, val.length);

            if (key === '') {
                key = pair;
                val = '';
            }

            return merge(ret, key, val);
        }, { base: {} }).base;
    }

    function set (obj, key, val) {
        var v = obj[key];
        if (typeof v === 'undefined') {
            obj[key] = val;
        } else if (isArray(v)) {
            v.push(val);
        } else {
            obj[key] = [v, val];
        }
    }

    function lastBraceInKey (str) {
        var len = str.length,
            brace,
            c;
        for (var i = 0; i < len; ++i) {
            c = str[i];
            if (']' == c) brace = false;
            if ('[' == c) brace = true;
            if ('=' == c && !brace) return i;
        }
    }

    function reduce (obj, accumulator) {
        var i = 0,
            l = obj.length >> 0,
            curr = arguments[2];
        while (i < l) {
            if (i in obj) curr = accumulator.call(undefined, curr, obj[i], i, obj);
            ++i;
        }
        return curr;
    }

    function isArray (vArg) {
        return Object.prototype.toString.call(vArg) === "[object Array]";
    }

    function keys (obj) {
        var key_array = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) key_array.push(prop);
        }
        return key_array;
    }

    function purl (url, strictMode) {
        if (arguments.length === 1 && url === true) {
            strictMode = true;
            url = undefined;
        }
        strictMode = strictMode || false;
        url = url || window.location.toString();

        return {

            data: parseUri(url, strictMode),

            // get various attributes from the URI
            attr: function (attr) {
                attr = aliases[attr] || attr;
                return typeof attr !== 'undefined' ? this.data.attr[attr] : this.data.attr;
            },

            // return query string parameters
            param: function (param) {
                return typeof param !== 'undefined' ? this.data.param.query[param] : this.data.param.query;
            },

            // return fragment parameters
            fparam: function (param) {
                return typeof param !== 'undefined' ? this.data.param.fragment[param] : this.data.param.fragment;
            },

            // return path segments
            segment: function (seg) {
                if (typeof seg === 'undefined') {
                    return this.data.seg.path;
                } else {
                    seg = seg < 0 ? this.data.seg.path.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.path[seg];
                }
            },

            // return fragment segments
            fsegment: function (seg) {
                if (typeof seg === 'undefined') {
                    return this.data.seg.fragment;
                } else {
                    seg = seg < 0 ? this.data.seg.fragment.length + seg : seg - 1; // negative segments count from the end
                    return this.data.seg.fragment[seg];
                }
            }

        };

    }

    purl.jQuery = function ($) {
        if ($ != null) {
            $.fn.url = function (strictMode) {
                var url = '';
                if (this.length) {
                    url = $(this).attr(getAttrName(this[0])) || '';
                }
                return purl(url, strictMode);
            };

            $.url = purl;
        }
    };

    purl.jQuery(window.jQuery);

    return purl;

});
/*
 * 使用插件Purl获取链接的param
 * title -> 标题
 * desc -> 二维码底部信息描述
 * wxcode -> 二维码图片名称
 * img_width 、img_height 、 style_top 、style_left分别是外框的定位以及二维码图片大小
 * 自定义参数时：需要两处ID：
 * 1.获取参数的src，即标签script的id设置为：wxCodeScript
 * 2.需要渲染的位置id：onlyCommonHeader
 */
(function ($) {
    var 
        scriptElem = document.getElementById('wxCodeScript'),
        scriptSrc = scriptElem ? scriptElem.src : '',
        url = purl(scriptSrc),
        param = url.param(),
        initOptions = {
            source: param.source || 'eefocus',
            title: param.title,
            desc: param.desc,
            wxcode: param.wxcode,
            imgWidth: param.img_width,
            imgHeight: param.img_height,
            styleTop: param.style_top,
            styleLeft: param.style_left
        },
        EefocusWXCode = function (options) {
            if (!(this instanceof EefocusWXCode)) {
                return new EefocusWXCode(options);
            }
            this._init(options);
        }
    ;

    EefocusWXCode.prototype = {
        construstor: EefocusWXCode,

        _init: function (options) {
            this._options(options);
            this._appendHtml();
            this._appendCss();
            this._bindEvents();
        },

        _options: function (options) {
            this.options = options;
            return this;
        },

        _appendHtml: function () {
            var
                title = this.options.title || '技术交流群',
                desc = this.options.desc || '添加小编微信，我们会将你拉到相应的技术讨论群',
                wxcode = this.options.wxcode || 'code-eefocus',
                parent = '',
                html = ''
            ;

            html += '<section class="common-h-wx common-h-login" >';
            html += '  <a class="wx-wper-tit" id="wxWperTit" href="javascript:;"><span class="wx-l-logo"></span>' + title + '</a>';
            html += '  <div class="wx-wper-con" id="wxWperCon">';
            html += '    <img src="//www.eefocus.com/asset/theme-eefocus/image/common/' + wxcode + '.png" alt="二维码">';
            html += '    <span class="wx-con-info">' + desc + '</span>';
            html += '  </div>';
            html += '</section>';

            if ($) {
                parent = $('#onlyCommonHeader') || $('body');
                parent.append(html);
            } else {
                var tempElem = document.createElement('div');
                tempElem.innerHTML = html;
                var codeElem = tempElem.firstChild;
                parent = document.getElementById('onlyCommonHeader');
                if (parent) {
                    document.getElementById('onlyCommonHeader').appendChild(codeElem);
                } else {
                    document.body.appendChild(codeElem);
                }
            }

            return this;
        },

        _appendCss: function () {
            var
                imgWidth = this.options.imgWidth || '138',
                imgHeight = this.options.imgHeight || '138',
                styleTop = this.options.styleTop || '38',
                styleLeft = this.options.styleLeft || '-55',
                css = ''
            ;

            css += '.wx-wper-con img { width: ' + imgWidth + 'px; height: ' + imgHeight + 'px }';
            css += '.common-form-control { background: #fff url("//www.eefocus.com/asset/theme-eefocus/image/common/zoom.png") 11px 9px no-repeat }';
            css += '.common-h-wx { position: relative; width: 96px; padding-left: 0; text-align: right; }';
            css += '.wx-wper-tit { display: block; padding: 4px 6px; font-size: 14px; cursor: pointer; color: #8b8b8b }';
            css += '.wx-l-logo { display: inline-block; position: absolute; top: 4px; left: -2px; width: 20px; height: 20px; opacity: .6; background: url("//www.eefocus.com/asset/theme-eefocus/image/common/code-logo.png") center no-repeat; filter: alpha(opacity=60) }';
            css += '.wx-wper-tit:focus { text-decoration: none; color: #8b8b8b }';
            css += '.wx-wper-tit:hover, .wx-wper-tit.active { text-decoration: none; color: #333 }';
            css += '.wx-wper-tit:hover .wx-l-logo { opacity: 1; filter: alpha(opacity=100) }';
            css += '.wx-wper-con { display: none; position: absolute; z-index: 1000; top: ' + styleTop + 'px; top: 30px\\9; left: ' + styleLeft + 'px; width: 158px; height: auto; min-height: 170px; padding: 10px 5px 0; text-align: center; border: 1px solid #e9e9e9; background-color: #fff; box-shadow: 0 0 6px -2px #aaa }';
            css += '.wx-wper-con:before, .wx-wper-con:after { display: inline-block; display: none\\9; position: absolute; top: -9.5px; right: 35px; content: ""; border-right: 8px solid transparent; border-bottom: 8px solid #e9e9e9; border-left: 8px solid transparent }';
            css += '.wx-wper-con:after { top: -7.5px; border-bottom: 8px solid #fff }';
            css += '.wx-con-info { display: inline-block; margin-top: 5px; padding-bottom: 10px; font-size: 12px; color: #666 }';
            css += '@media (max-width:790px) { .common-h-wx { display: none }';

            var styleElem = document.createElement('style');
            styleElem.type = 'text/css';

            if (styleElem.styleSheet) {
                styleElem.styleSheet.cssText = css;
            } else {
                styleElem.innerHTML = css;
            }

            document.getElementsByTagName('head')[0].appendChild(styleElem);
            return this;
        },

        _bindEvents: function () {
            var
                timer,
                wxWperTit = document.getElementById('wxWperTit'),
                wxWperCon = document.getElementById('wxWperCon')
            ;
            wxWperTit.onmouseover = wxWperCon.onmouseover = function () {
                clearTimeout(timer);
                wxWperCon.style.display = "block";
            }
            wxWperTit.onmouseout = wxWperCon.onmouseout = function () {
                timer = setTimeout(function () {
                    wxWperCon.style.display = "none";
                }, 500);
            }

            return this;
        }

    };

    if ($) {
        $(document).ready(function () {
            EefocusWXCode(initOptions);
        });
    } else {
        function domready (callback) {
            if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', function () {
                    callback();
                }, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'complete') {
                        callback();
                    }
                });
            }
        }

        domready(function () {
            EefocusWXCode(initOptions);
        });
    }
})((typeof jQuery != 'undefined') && jQuery);
