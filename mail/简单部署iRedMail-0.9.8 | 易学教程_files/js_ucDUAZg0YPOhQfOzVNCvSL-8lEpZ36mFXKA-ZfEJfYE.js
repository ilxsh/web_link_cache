/* ===========================================================
 * jquery-jumpto.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a smooth jump to sub navigational sidebar
 * with one js call
 *
 * https://github.com/peachananr/jumpto
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    firstLevel: "> h2",
    secondLevel: false,
    innerWrapper: ".jumpto-block",
    offset: 400,
    animate: 1000,
    navContainer: false,
    anchorTopPadding: 20,
    showTitle: "Jump To",
    closeButton: true
	};
	
	function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + ($(window).height() /4);
      
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
	
  $.fn.jumpto = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        html = "",
        block = $(settings.innerWrapper),
        selectors = "",
        title = "",
        close ="";
        
    el.addClass("jumpto-cotainer");
    
    redrawMenu = function(){
      $(selectors.slice(0,-2)).each(function( index ) {
        if (isScrolledIntoView($(this))) {
          $(".jumpto-subnav a").removeClass("active").parent().find(" a[href='#"+$(this).attr("id")+"']").addClass("active")
          
          if($("a[href='#"+$(this).attr("id")+"']").parent().parent().hasClass("jumpto-second")) {
            $("a[href='#"+$(this).attr("id")+"']").closest(".jumpto-second").show()
          }
          if($("a[href='#"+$(this).attr("id")+"']").parent().parent().hasClass("jumpto-first")) {
            $("a[href='#"+$(this).attr("id")+"']").closest(".jumpto-first").find(".jumpto-second").hide()
          }
          if($("a[href='#"+$(this).attr("id")+"']").parent().find(".jumpto-second")) {
            $("a[href='#"+$(this).attr("id")+"']").parent().find(".jumpto-second").show()
          }
        }
      });
      if($(document).scrollTop() > settings.offset) {
        $(".jumpto-subnav").removeClass("bottom").addClass("fixed");
      } else {
        $(".jumpto-subnav").removeClass("bottom fixed");
      }
      if($(document).scrollTop() > el.outerHeight(true)) {
        $(".jumpto-subnav").addClass("bottom fixed");
      }
    }
    
    block.find(settings.firstLevel).each(function( index ) {
      var b = $(this),
          i = index,
          inner_html = "";
      if ( b.parent().find(settings.secondLevel).length > 0) {
        inner_html += "<ul class='jumpto-second'>"
        b.parent().find(settings.secondLevel).each(function( index ) {
          var id = "jumpto_" + i + "_" + index;
          $(this).attr("id", id);
          link_to = "<a href='#" + id + "'>" + $(this).text() + "</a>"
          inner_html += "<li>" + link_to + "</li>"
          selectors += "#"+id + ", ";
        });
        inner_html += "</ul>"
        var id = "jumpto_" + i;
        b.attr("id", id);
        link_to = "<a href='#" + id + "'>" + b.text() + "</a>"
        selectors += "#"+id + ", ";
        html += "<li>" + link_to + inner_html + "</li>"
      } else {
        var id = "jumpto_" + i;
        link_to = "<a href='#" + id + "'>" + b.text() + "</a>"
        b.attr("id", id);
        selectors += "#"+id + ", ";
        html += "<li>" + link_to + "</li>"
      }
    });
    if (settings.showTitle != false) {
      var title = "<div class='jumpto-title'>"+settings.showTitle+"</div>"
    }
    
    if (settings.closeButton != false) {
      var close = "<div class='jumpto-close'><a href='#' id='jumpto-close'>Close</a></div>"
    }
    if(settings.navContainer == false) {
      $(this).append("<nav class='jumpto-subnav'>"+ title +"<ul class='jumpto-first'>" + html + "</ul>"+ close +"</nav>")
    }else{
      $(settings.navContainer).addClass("jumpto-subnav").html(title +"<ul class='jumpto-first'>" + html + "</ul>"+ close)
    }
    
    
    $('.jumpto-subnav a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {
    
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - settings.anchorTopPadding
          }, settings.animate, 'swing');
          return false;
        }
      }
    });
    
    $(window).scroll(function() {
      redrawMenu()
    });
    
    $(".jumpto-subnav #jumpto-close").click(function() {
      var btn = $(this)
      btn.parent().parent().find("> .jumpto-first").slideToggle( "slow", function() {
          if ($(this).is(":visible")) {
            btn.html("Close");
          } else {
            btn.html("Open");
          }
        });
        return false;
    });
    
    setInterval(function() {
      var track = [];
      $(selectors.slice(0,-2)).each(function( index ) {
        track.push(isScrolledIntoView($(this)))
      });
      if($.inArray(true, track) == -1) {
        $(".jumpto-subnav a").removeClass("active")
        $(".jumpto-subnav .jumpto-second").hide()
      }
    }, 500);
  }
}(window.jQuery);
;
!function t(e,n,o){function r(i,c){if(!n[i]){if(!e[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};e[i][0].call(l.exports,function(t){var n=e[i][1][t];return r(n?n:t)},l,l.exports,t,e,n,o)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<o.length;i++)r(o[i]);return r}({1:[function(t,e){function n(t,e){return null==e?t:o(e,r(e),t)}var o=t("lodash._basecopy"),r=t("lodash.keys");e.exports=n},{"lodash._basecopy":2,"lodash.keys":11}],2:[function(t,e){function n(t,e,n){n||(n={});for(var o=-1,r=e.length;++o<r;){var a=e[o];n[a]=t[a]}return n}e.exports=n},{}],3:[function(t,e){function n(t,e,n){if("function"!=typeof t)return o;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,o,r){return t.call(e,n,o,r)};case 4:return function(n,o,r,a){return t.call(e,n,o,r,a)};case 5:return function(n,o,r,a,i){return t.call(e,n,o,r,a,i)}}return function(){return t.apply(e,arguments)}}function o(t){return t}e.exports=n},{}],4:[function(t,e){function n(t){return a(function(e,n){var a=-1,i=null==e?0:n.length,c=i>2?n[i-2]:void 0,s=i>2?n[2]:void 0,u=i>1?n[i-1]:void 0;for("function"==typeof c?(c=o(c,u,5),i-=2):(c="function"==typeof u?u:void 0,i-=c?1:0),s&&r(n[0],n[1],s)&&(c=3>i?void 0:c,i=1);++a<i;){var l=n[a];l&&t(e,l,c)}return e})}var o=t("lodash._bindcallback"),r=t("lodash._isiterateecall"),a=t("lodash.restparam");e.exports=n},{"lodash._bindcallback":3,"lodash._isiterateecall":6,"lodash.restparam":12}],5:[function(t,e){function n(t){return!!t&&"object"==typeof t}function o(t,e){var n=null==t?void 0:t[e];return i(n)?n:void 0}function r(t){return a(t)&&p.call(t)==c}function a(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return null==t?!1:r(t)?d.test(l.call(t)):n(t)&&s.test(t)}var c="[object Function]",s=/^\[object .+?Constructor\]$/,u=Object.prototype,l=Function.prototype.toString,f=u.hasOwnProperty,p=u.toString,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=o},{}],6:[function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&i(l(t))}function r(t,e){return t="number"==typeof t||s.test(t)?+t:-1,e=null==e?u:e,t>-1&&t%1==0&&e>t}function a(t,e,n){if(!c(n))return!1;var a=typeof e;if("number"==a?o(n)&&r(e,n.length):"string"==a&&e in n){var i=n[e];return t===t?t===i:i!==i}return!1}function i(t){return"number"==typeof t&&t>-1&&t%1==0&&u>=t}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var s=/^\d+$/,u=9007199254740991,l=n("length");e.exports=a},{}],7:[function(t,e){function n(t,e,n){for(var o=-1,r=a(e),i=r.length;++o<i;){var c=r[o],s=t[c],u=n(s,e[c],c,t,e);(u===u?u===s:s!==s)&&(void 0!==s||c in t)||(t[c]=u)}return t}var o=t("lodash._baseassign"),r=t("lodash._createassigner"),a=t("lodash.keys"),i=r(function(t,e,r){return r?n(t,e,r):o(t,e)});e.exports=i},{"lodash._baseassign":1,"lodash._createassigner":4,"lodash.keys":11}],8:[function(t,e){function n(t,e,n){function r(){v&&clearTimeout(v),d&&clearTimeout(d),y=0,d=v=g=void 0}function c(e,n){n&&clearTimeout(n),d=v=g=void 0,e&&(y=s(),m=t.apply(h,p),v||d||(p=h=void 0))}function u(){var t=e-(s()-b);0>=t||t>e?c(g,d):v=setTimeout(u,t)}function l(){c(k,v)}function f(){if(p=arguments,b=s(),h=this,g=k&&(v||!x),w===!1)var n=x&&!v;else{d||x||(y=b);var o=w-(b-y),r=0>=o||o>w;r?(d&&(d=clearTimeout(d)),y=b,m=t.apply(h,p)):d||(d=setTimeout(l,o))}return r&&v?v=clearTimeout(v):v||e===w||(v=setTimeout(u,e)),n&&(r=!0,m=t.apply(h,p)),!r||v||d||(p=h=void 0),m}var p,d,m,b,h,v,g,y=0,w=!1,k=!0;if("function"!=typeof t)throw new TypeError(a);if(e=0>e?0:+e||0,n===!0){var x=!0;k=!1}else o(n)&&(x=!!n.leading,w="maxWait"in n&&i(+n.maxWait||0,e),k="trailing"in n?!!n.trailing:k);return f.cancel=r,f}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var r=t("lodash._getnative"),a="Expected a function",i=Math.max,c=r(Date,"now"),s=c||function(){return(new Date).getTime()};e.exports=n},{"lodash._getnative":5}],9:[function(t,e){(function(t){function n(t){return function(e){return null==e?void 0:e[t]}}function o(t){return a(t)&&b.call(t,"callee")&&(!v.call(t,"callee")||h.call(t)==f)}function r(t){return null!=t&&!("function"==typeof t&&i(t))&&c(g(t))}function a(t){return u(t)&&r(t)}function i(t){var e=s(t)?h.call(t):"";return e==p||e==d}function c(t){return"number"==typeof t&&t>-1&&t%1==0&&l>=t}function s(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function u(t){return!!t&&"object"==typeof t}var l=9007199254740991,f="[object Arguments]",p="[object Function]",d="[object GeneratorFunction]",m=t.Object.prototype,b=m.hasOwnProperty,h=m.toString,v=m.propertyIsEnumerable,g=n("length");e.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(t,e){function n(t){return!!t&&"object"==typeof t}function o(t,e){var n=null==t?void 0:t[e];return c(n)?n:void 0}function r(t){return"number"==typeof t&&t>-1&&t%1==0&&v>=t}function a(t){return i(t)&&m.call(t)==u}function i(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function c(t){return null==t?!1:a(t)?b.test(p.call(t)):n(t)&&l.test(t)}var s="[object Array]",u="[object Function]",l=/^\[object .+?Constructor\]$/,f=Object.prototype,p=Function.prototype.toString,d=f.hasOwnProperty,m=f.toString,b=RegExp("^"+p.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),h=o(Array,"isArray"),v=9007199254740991,g=h||function(t){return n(t)&&r(t.length)&&m.call(t)==s};e.exports=g},{}],11:[function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}function o(t){return null!=t&&a(v(t))}function r(t,e){return t="number"==typeof t||p.test(t)?+t:-1,e=null==e?h:e,t>-1&&t%1==0&&e>t}function a(t){return"number"==typeof t&&t>-1&&t%1==0&&h>=t}function i(t){for(var e=s(t),n=e.length,o=n&&t.length,i=!!o&&a(o)&&(f(t)||l(t)),c=-1,u=[];++c<n;){var p=e[c];(i&&r(p,o)||m.call(t,p))&&u.push(p)}return u}function c(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function s(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(f(t)||l(t))&&e||0;for(var n=t.constructor,o=-1,i="function"==typeof n&&n.prototype===t,s=Array(e),u=e>0;++o<e;)s[o]=o+"";for(var p in t)u&&r(p,e)||"constructor"==p&&(i||!m.call(t,p))||s.push(p);return s}var u=t("lodash._getnative"),l=t("lodash.isarguments"),f=t("lodash.isarray"),p=/^\d+$/,d=Object.prototype,m=d.hasOwnProperty,b=u(Object,"keys"),h=9007199254740991,v=n("length"),g=b?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?i(t):c(t)?b(t):[]}:i;e.exports=g},{"lodash._getnative":5,"lodash.isarguments":9,"lodash.isarray":10}],12:[function(t,e){function n(t,e){if("function"!=typeof t)throw new TypeError(o);return e=r(void 0===e?t.length-1:+e||0,0),function(){for(var n=arguments,o=-1,a=r(n.length-e,0),i=Array(a);++o<a;)i[o]=n[e+o];switch(e){case 0:return t.call(this,i);case 1:return t.call(this,n[0],i);case 2:return t.call(this,n[0],n[1],i)}var c=Array(e+1);for(o=-1;++o<e;)c[o]=n[o];return c[e]=i,t.apply(this,c)}}var o="Expected a function",r=Math.max;e.exports=n},{}],13:[function(t,e){function n(t,e,n){var i=!0,c=!0;if("function"!=typeof t)throw new TypeError(a);return n===!1?i=!1:o(n)&&(i="leading"in n?!!n.leading:i,c="trailing"in n?!!n.trailing:c),r(t,e,{leading:i,maxWait:+e,trailing:c})}function o(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var r=t("lodash.debounce"),a="Expected a function";e.exports=n},{"lodash.debounce":8}],14:[function(t){var e=t("lodash.throttle"),n=t("lodash.debounce"),o=t("lodash.assign"),r=t("./libs/observer"),a=(t("./libs/classList-shim"),t("./helpers/detector")),i=t("./helpers/handleScroll"),c=t("./helpers/prepare"),s=t("./helpers/elements"),u=t("./helpers/replaceDataAttr");!function(t,l){var f=[],p=!1,d={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},m=function(t){return t&&t===!0&&(p=!0),p?(f=c(f,d),i(f,d.once),f):void 0},b=function(c){return d=o(d,c),u(),f=s(),d.disable&&(d.disable===!0||"mobile"===d.disable&&a.mobile()||"phone"===d.disable&&a.phone()||"tablet"===d.disable&&a.tablet()||"function"==typeof d.disable&&d.disable()===!0)?([].forEach.call(f,function(t){t.node.removeAttribute("aos"),t.node.removeAttribute("aos-easing"),t.node.removeAttribute("aos-duration"),t.node.removeAttribute("aos-delay")}),!1):(l.querySelector("body").setAttribute("aos-easing",d.easing),l.querySelector("body").setAttribute("aos-duration",d.duration),l.querySelector("body").setAttribute("aos-delay",d.delay),l.addEventListener(d.startEvent,function(){m(!0)}),t.addEventListener("resize orientationchange",n(m,50,!0)),t.addEventListener("scroll",e(function(){i(f,d.once)},99)),l.addEventListener("DOMNodeRemoved",function(t){var e=t.target;e&&1===e.nodeType&&e.hasAttribute&&t.target.hasAttribute("aos")&&n(m,50,!0)}),r("[aos]",m),f)},h={init:b,refresh:m};t.AOS=h}(window,document)},{"./helpers/detector":16,"./helpers/elements":17,"./helpers/handleScroll":18,"./helpers/prepare":19,"./helpers/replaceDataAttr":20,"./libs/classList-shim":21,"./libs/observer":22,"lodash.assign":7,"lodash.debounce":8,"lodash.throttle":13}],15:[function(t,e){var n=t("./../libs/offset"),o=function(t,e){var o=0,r=0,a=window.innerHeight,i={offset:t.getAttribute("aos-offset"),anchor:t.getAttribute("aos-anchor"),anchorPlacement:t.getAttribute("aos-anchor-placement")};switch(i.offset&&!isNaN(i.offset)&&(r=parseInt(i.offset)),i.anchor&&document.querySelectorAll(i.anchor)&&(t=document.querySelectorAll(i.anchor)[0]),o=n(t).top,i.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=t.offsetHeight/2;break;case"bottom-bottom":o+=t.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+t.offsetHeight;break;case"center-center":o+=a/2+t.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=t.offsetHeight+a;break;case"center-top":o+=t.offsetHeight/2+a}return i.anchorPlacement||i.offset||isNaN(e)||(r=e),o+r};e.exports=o},{"./../libs/offset":23}],16:[function(t,e){var n={phone:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t},mobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t},tablet:function(){return _detect.mobile()&&!_detect.phone()}};e.exports=n},{}],17:[function(t,e){var n=function(t){var t=t||document.querySelectorAll("[aos]"),e=[];return[].forEach.call(t,function(t){e.push({node:t})}),e};e.exports=n},{}],18:[function(t,e){var n=function(t,e,n){var o=t.node.getAttribute("aos-once");e>t.position?t.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&t.node.classList.remove("aos-animate")},o=function(t,e){var o=window.pageYOffset,r=window.innerHeight;[].forEach.call(t,function(t){n(t,r+o,e)})};e.exports=o},{}],19:[function(t,e){var n=t("./calculateOffset"),o=function(t,e){return[].forEach.call(t,function(t){t.node.classList.add("aos-init"),t.position=n(t.node,e.offset)}),t};e.exports=o},{"./calculateOffset":15}],20:[function(t,e){var n=function(){var t=["[data-aos]","[data-aos-offset]","[data-aos-easing]","[data-aos-delay]","[data-aos-anchor]","[data-aos-anchor-placement]","[data-aos-once]"],e=t.join(", "),n=document.querySelectorAll(e);[].forEach.call(n,function(e){var n=/^data\-(.+)$/,o=[];[].forEach.call(e.attributes,function(r){if(n.test(r.nodeName)){var a=r.nodeName.match(n)[0],i="["+a+"]",c=r.nodeName.match(n)[1];e.getAttribute(a).length&&-1!==t.indexOf(i)&&(e.setAttribute(c,r.nodeValue),o.push(a))}});for(var r=0;r<o.length;r++)e.removeAttribute(o[r])})};e.exports=n},{}],21:[function(){"classList"in document.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function t(t){return function(n){var o=e.className.split(/\s+/),r=o.indexOf(n);t(o,r,n),e.className=o.join(" ")}}var e=this,n={add:t(function(t,e,n){~e||t.push(n)}),remove:t(function(t,e){~e&&t.splice(e,1)}),toggle:t(function(t,e,n){~e?t.splice(e,1):t.push(n)}),contains:function(t){return!!~e.className.split(/\s+/).indexOf(t)},item:function(t){return e.className.split(/\s+/)[t]||null}};return Object.defineProperty(n,"length",{get:function(){return e.className.split(/\s+/).length}}),n}})},{}],22:[function(t,e){function n(t,e){a.push({selector:t,fn:e}),!r&&c&&(r=new c(o),r.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var t,e,n=0,o=a.length;o>n;n++){t=a[n],e=i.querySelectorAll(t.selector);for(var r,c=0,s=e.length;s>c;c++)r=e[c],r.ready||(r.ready=!0,t.fn.call(r,r))}}var r,a=[],i=window.document,c=window.MutationObserver||window.WebKitMutationObserver;e.exports=n},{}],23:[function(t,e){var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.exports=n},{}]},{},[14]);;
/*!
 * Viewer v1.0.0
 * https://github.com/fengyuanchen/viewer
 *
 * Copyright (c) 2015-2018 Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-04-01T06:11:06.751Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  var DEFAULTS = {
    // Enable inline mode
    inline: false,

    // Show the button on the top-right of the viewer
    button: true,

    // Show the navbar
    navbar: true,

    // Show the title
    title: true,

    // Show the toolbar
    toolbar: true,

    // Show the tooltip with image ratio (percentage) when zoom in or zoom out
    tooltip: true,

    // Enable to move the image
    movable: true,

    // Enable to zoom the image
    zoomable: true,

    // Enable to rotate the image
    rotatable: true,

    // Enable to scale the image
    scalable: true,

    // Enable CSS3 Transition for some special elements
    transition: true,

    // Enable to request fullscreen when play
    fullscreen: true,

    // The amount of time to delay between automatically cycling an image when playing.
    interval: 5000,

    // Enable keyboard support
    keyboard: true,

    // Enable a modal backdrop, specify `static` for a backdrop which doesn't close the modal on click
    backdrop: true,

    // Indicate if show a loading spinner when load image or not.
    loading: true,

    // Indicate if enable loop viewing or not.
    loop: true,

    // Min width of the viewer in inline mode
    minWidth: 200,

    // Min height of the viewer in inline mode
    minHeight: 100,

    // Define the ratio when zoom the image by wheeling mouse
    zoomRatio: 0.1,

    // Define the min ratio of the image when zoom out
    minZoomRatio: 0.01,

    // Define the max ratio of the image when zoom in
    maxZoomRatio: 100,

    // Define the CSS `z-index` value of viewer in modal mode.
    zIndex: 2015,

    // Define the CSS `z-index` value of viewer in inline mode.
    zIndexInline: 0,

    // Define where to get the original image URL for viewing
    // Type: String (an image attribute) or Function (should return an image URL)
    url: 'src',

    // Define where to put the viewer in modal mode.
    // Type: String | Element
    container: 'body',

    // Filter the images for viewing.
    // Type: Function (return true if the image is viewable)
    filter: null,

    // Event shortcuts
    ready: null,
    show: null,
    shown: null,
    hide: null,
    hidden: null,
    view: null,
    viewed: null
  };

  var TEMPLATE = '<div class="viewer-container" touch-action="none">' + '<div class="viewer-canvas"></div>' + '<div class="viewer-footer">' + '<div class="viewer-title"></div>' + '<div class="viewer-toolbar"></div>' + '<div class="viewer-navbar">' + '<ul class="viewer-list"></ul>' + '</div>' + '</div>' + '<div class="viewer-tooltip"></div>' + '<div role="button" class="viewer-button" data-action="mix"></div>' + '<div class="viewer-player"></div>' + '</div>';

  var IN_BROWSER = typeof window !== 'undefined';
  var WINDOW = IN_BROWSER ? window : {};
  var NAMESPACE = 'viewer';

  // Actions
  var ACTION_MOVE = 'move';
  var ACTION_SWITCH = 'switch';
  var ACTION_ZOOM = 'zoom';

  // Classes
  var CLASS_ACTIVE = NAMESPACE + '-active';
  var CLASS_CLOSE = NAMESPACE + '-close';
  var CLASS_FADE = NAMESPACE + '-fade';
  var CLASS_FIXED = NAMESPACE + '-fixed';
  var CLASS_FULLSCREEN = NAMESPACE + '-fullscreen';
  var CLASS_FULLSCREEN_EXIT = NAMESPACE + '-fullscreen-exit';
  var CLASS_HIDE = NAMESPACE + '-hide';
  var CLASS_HIDE_MD_DOWN = NAMESPACE + '-hide-md-down';
  var CLASS_HIDE_SM_DOWN = NAMESPACE + '-hide-sm-down';
  var CLASS_HIDE_XS_DOWN = NAMESPACE + '-hide-xs-down';
  var CLASS_IN = NAMESPACE + '-in';
  var CLASS_INVISIBLE = NAMESPACE + '-invisible';
  var CLASS_LOADING = NAMESPACE + '-loading';
  var CLASS_MOVE = NAMESPACE + '-move';
  var CLASS_OPEN = NAMESPACE + '-open';
  var CLASS_SHOW = NAMESPACE + '-show';
  var CLASS_TRANSITION = NAMESPACE + '-transition';

  // Events
  var EVENT_READY = 'ready';
  var EVENT_SHOW = 'show';
  var EVENT_SHOWN = 'shown';
  var EVENT_HIDE = 'hide';
  var EVENT_HIDDEN = 'hidden';
  var EVENT_VIEW = 'view';
  var EVENT_VIEWED = 'viewed';
  var EVENT_CLICK = 'click';
  var EVENT_DRAG_START = 'dragstart';
  var EVENT_KEY_DOWN = 'keydown';
  var EVENT_LOAD = 'load';
  var EVENT_POINTER_DOWN = WINDOW.PointerEvent ? 'pointerdown' : 'touchstart mousedown';
  var EVENT_POINTER_MOVE = WINDOW.PointerEvent ? 'pointermove' : 'touchmove mousemove';
  var EVENT_POINTER_UP = WINDOW.PointerEvent ? 'pointerup pointercancel' : 'touchend touchcancel mouseup';
  var EVENT_RESIZE = 'resize';
  var EVENT_TRANSITION_END = 'transitionend';
  var EVENT_WHEEL = 'wheel mousewheel DOMMouseScroll';

  var BUTTONS = ['zoom-in', 'zoom-out', 'one-to-one', 'reset', 'prev', 'play', 'next', 'rotate-left', 'rotate-right', 'flip-horizontal', 'flip-vertical'];

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  /**
   * Check if the given value is a string.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a string, else `false`.
   */
  function isString(value) {
    return typeof value === 'string';
  }

  /**
   * Check if the given value is not a number.
   */
  var isNaN = Number.isNaN || WINDOW.isNaN;

  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */
  function isObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;


      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (e) {
      return false;
    }
  }

  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */
  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
          var length = data.length;

          var i = void 0;

          for (i = 0; i < length; i += 1) {
            if (callback.call(data, data[i], i, data) === false) {
              break;
            }
          }
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }

  /**
   * Extend the given object.
   * @param {*} obj - The object to be extended.
   * @param {*} args - The rest objects which will be merged to the first object.
   * @returns {Object} The extended object.
   */
  var assign = Object.assign || function assign(obj) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(obj) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            obj[key] = arg[key];
          });
        }
      });
    }

    return obj;
  };

  var REGEXP_SUFFIX = /^(?:width|height|left|top|marginLeft|marginTop)$/;

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */
  function setStyle(element, styles) {
    var style = element.style;


    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value += 'px';
      }

      style[property] = value;
    });
  }

  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */
  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }

  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */
  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = className + ' ' + value;
    }
  }

  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */
  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }

  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    // IE10-11 doesn't support the second parameter of `classList.toggle`
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }

  var REGEXP_HYPHENATE = /([a-z\d])([A-Z])/g;

  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */
  function hyphenate(value) {
    return value.replace(REGEXP_HYPHENATE, '$1-$2').toLowerCase();
  }

  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */
  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    } else if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute('data-' + hyphenate(name));
  }

  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */
  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute('data-' + hyphenate(name), data);
    }
  }

  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */
  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (e) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (e) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute('data-' + hyphenate(name));
    }
  }

  var REGEXP_SPACES = /\s\s*/;
  var onceSupported = function () {
    var supported = false;

    if (IN_BROWSER) {
      var once = false;
      var listener = function listener() {};
      var options = Object.defineProperty({}, 'once', {
        get: function get$$1() {
          supported = true;
          return once;
        },


        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set$$1(value) {
          once = value;
        }
      });

      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();

  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var handler = listener;

    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;


        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }

  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var _handler = listener;

    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === undefined ? {} : _element$listeners;


        _handler = function handler() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }

  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */
  function dispatchEvent(element, type, data) {
    var event = void 0;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }

  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */
  function getOffset(element) {
    var box = element.getBoundingClientRect();

    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }

  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */
  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;

    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push('translateX(' + translateX + 'px)');
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push('translateY(' + translateY + 'px)');
    }

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      values.push('rotate(' + rotate + 'deg)');
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push('scaleX(' + scaleX + ')');
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push('scaleY(' + scaleY + ')');
    }

    var transform = values.length ? values.join(' ') : 'none';

    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }

  /**
   * Get an image name from an image url.
   * @param {string} url - The target url.
   * @example
   * // picture.jpg
   * getImageNameFromURL('http://domain.com/path/to/picture.jpg?size=1280×960')
   * @returns {string} A string contains the image name.
   */
  function getImageNameFromURL(url) {
    return isString(url) ? url.replace(/^.*\//, '').replace(/[?&#].*$/, '') : '';
  }

  var IS_SAFARI = WINDOW.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(WINDOW.navigator.userAgent);

  /**
   * Get an image's natural sizes.
   * @param {string} image - The target image.
   * @param {Function} callback - The callback function.
   * @returns {HTMLImageElement} The new image.
   */
  function getImageNaturalSizes(image, callback) {
    var newImage = document.createElement('img');

    // Modern browsers (except Safari)
    if (image.naturalWidth && !IS_SAFARI) {
      callback(image.naturalWidth, image.naturalHeight);
      return newImage;
    }

    var body = document.body || document.documentElement;

    newImage.onload = function () {
      callback(newImage.width, newImage.height);

      if (!IS_SAFARI) {
        body.removeChild(newImage);
      }
    };

    newImage.src = image.src;

    // iOS Safari will convert the image automatically
    // with its orientation once append it into DOM
    if (!IS_SAFARI) {
      newImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
      body.appendChild(newImage);
    }

    return newImage;
  }

  /**
   * Get the related class name of a responsive type number.
   * @param {string} type - The responsive type.
   * @returns {string} The related class name.
   */
  function getResponsiveClass(type) {
    switch (type) {
      case 2:
        return CLASS_HIDE_XS_DOWN;

      case 3:
        return CLASS_HIDE_SM_DOWN;

      case 4:
        return CLASS_HIDE_MD_DOWN;

      default:
        return '';
    }
  }

  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */
  function getMaxZoomRatio(pointers) {
    var pointers2 = assign({}, pointers);
    var ratios = [];

    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];

      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;

        ratios.push(ratio);
      });
    });

    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });

    return ratios[0];
  }

  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;

    var end = {
      endX: pageX,
      endY: pageY
    };

    return endOnly ? end : assign({
      startX: pageX,
      startY: pageY
    }, end);
  }

  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;

    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;

      pageX += startX;
      pageY += startY;
      count += 1;
    });

    pageX /= count;
    pageY /= count;

    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initViewer();
      this.initList();
      this.renderViewer();
    },
    initContainer: function initContainer() {
      this.containerData = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    initViewer: function initViewer() {
      var options = this.options,
          parent = this.parent;

      var viewerData = void 0;

      if (options.inline) {
        viewerData = {
          width: Math.max(parent.offsetWidth, options.minWidth),
          height: Math.max(parent.offsetHeight, options.minHeight)
        };

        this.parentData = viewerData;
      }

      if (this.fulled || !viewerData) {
        viewerData = this.containerData;
      }

      this.viewerData = assign({}, viewerData);
    },
    renderViewer: function renderViewer() {
      if (this.options.inline && !this.fulled) {
        setStyle(this.viewer, this.viewerData);
      }
    },
    initList: function initList() {
      var _this = this;

      var element = this.element,
          options = this.options,
          list = this.list;

      var items = [];

      forEach(this.images, function (image, i) {
        var src = image.src;

        var alt = image.alt || getImageNameFromURL(src);
        var url = options.url;


        if (isString(url)) {
          url = image.getAttribute(url);
        } else if (isFunction(url)) {
          url = url.call(_this, image);
        }

        if (src || url) {
          items.push('<li>' + '<img' + (' src="' + (src || url) + '"') + ' role="button"' + ' data-action="view"' + (' data-index="' + i + '"') + (' data-original-url="' + (url || src) + '"') + (' alt="' + alt + '"') + '>' + '</li>');
        }
      });

      list.innerHTML = items.join('');
      this.items = list.getElementsByTagName('li');
      forEach(this.items, function (item) {
        var image = item.firstElementChild;

        setData(image, 'filled', true);

        if (options.loading) {
          addClass(item, CLASS_LOADING);
        }

        addListener(image, EVENT_LOAD, function (event) {
          if (options.loading) {
            removeClass(item, CLASS_LOADING);
          }

          _this.loadImage(event);
        }, {
          once: true
        });
      });

      if (options.transition) {
        addListener(element, EVENT_VIEWED, function () {
          addClass(list, CLASS_TRANSITION);
        }, {
          once: true
        });
      }
    },
    renderList: function renderList(index) {
      var i = index || this.index;
      var width = this.items[i].offsetWidth || 30;
      var outerWidth = width + 1; // 1 pixel of `margin-left` width

      // Place the active item in the center of the screen
      setStyle(this.list, assign({
        width: outerWidth * this.length
      }, getTransforms({
        translateX: (this.viewerData.width - width) / 2 - outerWidth * i
      })));
    },
    resetList: function resetList() {
      var list = this.list;


      list.innerHTML = '';
      removeClass(list, CLASS_TRANSITION);
      setStyle(list, getTransforms({
        translateX: 0
      }));
    },
    initImage: function initImage(done) {
      var _this2 = this;

      var options = this.options,
          image = this.image,
          viewerData = this.viewerData;

      var footerHeight = this.footer.offsetHeight;
      var viewerWidth = viewerData.width;
      var viewerHeight = Math.max(viewerData.height - footerHeight, footerHeight);
      var oldImageData = this.imageData || {};
      var sizingImage = void 0;

      this.imageInitializing = {
        abort: function abort() {
          sizingImage.onload = null;
        }
      };

      sizingImage = getImageNaturalSizes(image, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = viewerWidth;
        var height = viewerHeight;

        _this2.imageInitializing = false;

        if (viewerHeight * aspectRatio > viewerWidth) {
          height = viewerWidth / aspectRatio;
        } else {
          width = viewerHeight * aspectRatio;
        }

        width = Math.min(width * 0.9, naturalWidth);
        height = Math.min(height * 0.9, naturalHeight);

        var imageData = {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: aspectRatio,
          ratio: width / naturalWidth,
          width: width,
          height: height,
          left: (viewerWidth - width) / 2,
          top: (viewerHeight - height) / 2
        };
        var initialImageData = assign({}, imageData);

        if (options.rotatable) {
          imageData.rotate = oldImageData.rotate || 0;
          initialImageData.rotate = 0;
        }

        if (options.scalable) {
          imageData.scaleX = oldImageData.scaleX || 1;
          imageData.scaleY = oldImageData.scaleY || 1;
          initialImageData.scaleX = 1;
          initialImageData.scaleY = 1;
        }

        _this2.imageData = imageData;
        _this2.initialImageData = initialImageData;

        if (done) {
          done();
        }
      });
    },
    renderImage: function renderImage(done) {
      var _this3 = this;

      var image = this.image,
          imageData = this.imageData;


      setStyle(image, assign({
        width: imageData.width,
        height: imageData.height,
        marginLeft: imageData.left,
        marginTop: imageData.top
      }, getTransforms(imageData)));

      if (done) {
        if (this.viewing && this.options.transition) {
          var onTransitionEnd = function onTransitionEnd() {
            _this3.imageRendering = false;
            done();
          };

          this.imageRendering = {
            abort: function abort() {
              removeListener(image, EVENT_TRANSITION_END, onTransitionEnd);
            }
          };

          addListener(image, EVENT_TRANSITION_END, onTransitionEnd, {
            once: true
          });
        } else {
          done();
        }
      }
    },
    resetImage: function resetImage() {
      // this.image only defined after viewed
      if (this.viewing || this.viewed) {
        var image = this.image;


        if (this.viewing) {
          this.viewing.abort();
        }

        image.parentNode.removeChild(image);
        this.image = null;
      }
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          viewer = this.viewer;


      addListener(viewer, EVENT_CLICK, this.onClick = this.click.bind(this));
      addListener(viewer, EVENT_WHEEL, this.onWheel = this.wheel.bind(this));
      addListener(viewer, EVENT_DRAG_START, this.onDragStart = this.dragstart.bind(this));
      addListener(this.canvas, EVENT_POINTER_DOWN, this.onPointerDown = this.pointerdown.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onPointerMove = this.pointermove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onPointerUp = this.pointerup.bind(this));
      addListener(element.ownerDocument, EVENT_KEY_DOWN, this.onKeyDown = this.keydown.bind(this));
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    },
    unbind: function unbind() {
      var element = this.element,
          viewer = this.viewer;


      removeListener(viewer, EVENT_CLICK, this.onClick);
      removeListener(viewer, EVENT_WHEEL, this.onWheel);
      removeListener(viewer, EVENT_DRAG_START, this.onDragStart);
      removeListener(this.canvas, EVENT_POINTER_DOWN, this.onPointerDown);
      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onPointerMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onPointerUp);
      removeListener(element.ownerDocument, EVENT_KEY_DOWN, this.onKeyDown);
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  };

  var handlers = {
    click: function click(_ref) {
      var target = _ref.target;
      var options = this.options,
          imageData = this.imageData;

      var action = getData(target, 'action');

      switch (action) {
        case 'mix':
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            } else {
              this.full();
            }
          } else {
            this.hide();
          }

          break;

        case 'hide':
          this.hide();
          break;

        case 'view':
          this.view(getData(target, 'index'));
          break;

        case 'zoom-in':
          this.zoom(0.1, true);
          break;

        case 'zoom-out':
          this.zoom(-0.1, true);
          break;

        case 'one-to-one':
          this.toggle();
          break;

        case 'reset':
          this.reset();
          break;

        case 'prev':
          this.prev(options.loop);
          break;

        case 'play':
          this.play(options.fullscreen);
          break;

        case 'next':
          this.next(options.loop);
          break;

        case 'rotate-left':
          this.rotate(-90);
          break;

        case 'rotate-right':
          this.rotate(90);
          break;

        case 'flip-horizontal':
          this.scaleX(-imageData.scaleX || -1);
          break;

        case 'flip-vertical':
          this.scaleY(-imageData.scaleY || -1);
          break;

        default:
          if (this.played) {
            this.stop();
          }
      }
    },
    load: function load() {
      var _this = this;

      if (this.timeout) {
        clearTimeout(this.timeout);
        this.timeout = false;
      }

      var element = this.element,
          options = this.options,
          image = this.image,
          index = this.index,
          viewerData = this.viewerData;


      removeClass(image, CLASS_INVISIBLE);

      if (options.loading) {
        removeClass(this.canvas, CLASS_LOADING);
      }

      image.style.cssText = 'height:0;' + ('margin-left:' + viewerData.width / 2 + 'px;') + ('margin-top:' + viewerData.height / 2 + 'px;') + 'max-width:none!important;' + 'position:absolute;' + 'width:0;';

      this.initImage(function () {
        toggleClass(image, CLASS_MOVE, options.movable);
        toggleClass(image, CLASS_TRANSITION, options.transition);

        _this.renderImage(function () {
          _this.viewed = true;
          _this.viewing = false;

          if (isFunction(options.viewed)) {
            addListener(element, EVENT_VIEWED, options.viewed, {
              once: true
            });
          }

          dispatchEvent(element, EVENT_VIEWED, {
            originalImage: _this.images[index],
            index: index,
            image: image
          });
        });
      });
    },
    loadImage: function loadImage(e) {
      var image = e.target;
      var parent = image.parentNode;
      var parentWidth = parent.offsetWidth || 30;
      var parentHeight = parent.offsetHeight || 50;
      var filled = !!getData(image, 'filled');

      getImageNaturalSizes(image, function (naturalWidth, naturalHeight) {
        var aspectRatio = naturalWidth / naturalHeight;
        var width = parentWidth;
        var height = parentHeight;

        if (parentHeight * aspectRatio > parentWidth) {
          if (filled) {
            width = parentHeight * aspectRatio;
          } else {
            height = parentWidth / aspectRatio;
          }
        } else if (filled) {
          height = parentWidth / aspectRatio;
        } else {
          width = parentHeight * aspectRatio;
        }

        setStyle(image, assign({
          width: width,
          height: height
        }, getTransforms({
          translateX: (parentWidth - width) / 2,
          translateY: (parentHeight - height) / 2
        })));
      });
    },
    keydown: function keydown(e) {
      var options = this.options;


      if (!this.fulled || !options.keyboard) {
        return;
      }

      switch (e.keyCode || e.which || e.charCode) {
        // Escape
        case 27:
          if (this.played) {
            this.stop();
          } else if (options.inline) {
            if (this.fulled) {
              this.exit();
            }
          } else {
            this.hide();
          }

          break;

        // Space
        case 32:
          if (this.played) {
            this.stop();
          }

          break;

        // ArrowLeft
        case 37:
          this.prev(options.loop);
          break;

        // ArrowUp
        case 38:
          // Prevent scroll on Firefox
          e.preventDefault();

          // Zoom in
          this.zoom(options.zoomRatio, true);
          break;

        // ArrowRight
        case 39:
          this.next(options.loop);
          break;

        // ArrowDown
        case 40:
          // Prevent scroll on Firefox
          e.preventDefault();

          // Zoom out
          this.zoom(-options.zoomRatio, true);
          break;

        // Ctrl + 0
        case 48:
        // Fall through

        // Ctrl + 1
        // eslint-disable-next-line no-fallthrough
        case 49:
          if (e.ctrlKey) {
            e.preventDefault();
            this.toggle();
          }

          break;

        default:
      }
    },
    dragstart: function dragstart(e) {
      if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
      }
    },
    pointerdown: function pointerdown(e) {
      var options = this.options,
          pointers = this.pointers;


      if (!this.viewed || this.showing || this.viewing || this.hiding) {
        return;
      }

      if (e.changedTouches) {
        forEach(e.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        pointers[e.pointerId || 0] = getPointer(e);
      }

      var action = options.movable ? ACTION_MOVE : false;

      if (Object.keys(pointers).length > 1) {
        action = ACTION_ZOOM;
      } else if ((e.pointerType === 'touch' || e.type === 'touchstart') && this.isSwitchable()) {
        action = ACTION_SWITCH;
      }

      this.action = action;
    },
    pointermove: function pointermove(e) {
      var options = this.options,
          pointers = this.pointers,
          action = this.action,
          image = this.image;


      if (!this.viewed || !action) {
        return;
      }

      e.preventDefault();

      if (e.changedTouches) {
        forEach(e.changedTouches, function (touch) {
          assign(pointers[touch.identifier], getPointer(touch, true));
        });
      } else {
        assign(pointers[e.pointerId || 0], getPointer(e, true));
      }

      if (action === ACTION_MOVE && options.transition && hasClass(image, CLASS_TRANSITION)) {
        removeClass(image, CLASS_TRANSITION);
      }

      this.change(e);
    },
    pointerup: function pointerup(e) {
      var action = this.action,
          pointers = this.pointers;


      if (e.changedTouches) {
        forEach(e.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[e.pointerId || 0];
      }

      if (!action) {
        return;
      }

      if (action === ACTION_MOVE && this.options.transition) {
        addClass(this.image, CLASS_TRANSITION);
      }

      this.action = false;
    },
    resize: function resize() {
      var _this2 = this;

      if (!this.isShown || this.hiding) {
        return;
      }

      this.initContainer();
      this.initViewer();
      this.renderViewer();
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this2.renderImage();
        });
      }

      if (this.played) {
        if (this.options.fullscreen && this.fulled && !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
          this.stop();
          return;
        }

        forEach(this.player.getElementsByTagName('img'), function (image) {
          addListener(image, EVENT_LOAD, _this2.loadImage.bind(_this2), {
            once: true
          });
          dispatchEvent(image, EVENT_LOAD);
        });
      }
    },
    wheel: function wheel(e) {
      var _this3 = this;

      if (!this.viewed) {
        return;
      }

      e.preventDefault();

      // Limit wheel speed to prevent zoom too fast
      if (this.wheeling) {
        return;
      }

      this.wheeling = true;

      setTimeout(function () {
        _this3.wheeling = false;
      }, 50);

      var ratio = Number(this.options.zoomRatio) || 0.1;
      var delta = 1;

      if (e.deltaY) {
        delta = e.deltaY > 0 ? 1 : -1;
      } else if (e.wheelDelta) {
        delta = -e.wheelDelta / 120;
      } else if (e.detail) {
        delta = e.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, true, e);
    }
  };

  var methods = {
    /** Show the viewer (only available in modal mode)
     * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
     * @returns {Viewer} this
     */
    show: function show() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
          options = this.options;


      if (options.inline || this.showing || this.isShown || this.showing) {
        return this;
      }

      if (!this.ready) {
        this.build();

        if (this.ready) {
          this.show(immediate);
        }

        return this;
      }

      if (isFunction(options.show)) {
        addListener(element, EVENT_SHOW, options.show, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_SHOW) === false || !this.ready) {
        return this;
      }

      if (this.hiding) {
        this.transitioning.abort();
      }

      this.showing = true;
      this.open();

      var viewer = this.viewer;


      removeClass(viewer, CLASS_HIDE);

      if (options.transition && !immediate) {
        var shown = this.shown.bind(this);

        this.transitioning = {
          abort: function abort() {
            removeListener(viewer, EVENT_TRANSITION_END, shown);
            removeClass(viewer, CLASS_IN);
          }
        };

        addClass(viewer, CLASS_TRANSITION);

        // Force reflow to enable CSS3 transition
        // eslint-disable-next-line
        viewer.offsetWidth;
        addListener(viewer, EVENT_TRANSITION_END, shown, {
          once: true
        });
        addClass(viewer, CLASS_IN);
      } else {
        addClass(viewer, CLASS_IN);
        this.shown();
      }

      return this;
    },


    /**
     * Hide the viewer (only available in modal mode)
     * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
     * @returns {Viewer} this
     */
    hide: function hide() {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var element = this.element,
          options = this.options;


      if (options.inline || this.hiding || !(this.isShown || this.showing)) {
        return this;
      }

      if (isFunction(options.hide)) {
        addListener(element, EVENT_HIDE, options.hide, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_HIDE) === false) {
        return this;
      }

      if (this.showing) {
        this.transitioning.abort();
      }

      this.hiding = true;

      if (this.played) {
        this.stop();
      } else if (this.viewing) {
        this.viewing.abort();
      }

      var viewer = this.viewer;


      if (options.transition && !immediate) {
        var hidden = this.hidden.bind(this);
        var hide = function hide() {
          addListener(viewer, EVENT_TRANSITION_END, hidden, {
            once: true
          });
          removeClass(viewer, CLASS_IN);
        };

        this.transitioning = {
          abort: function abort() {
            if (this.viewed) {
              removeListener(this.image, EVENT_TRANSITION_END, hide);
            } else {
              removeListener(viewer, EVENT_TRANSITION_END, hidden);
            }
          }
        };

        if (this.viewed) {
          addListener(this.image, EVENT_TRANSITION_END, hide, {
            once: true
          });
          this.zoomTo(0, false, false, true);
        } else {
          hide();
        }
      } else {
        removeClass(viewer, CLASS_IN);
        this.hidden();
      }

      return this;
    },


    /**
     * View one of the images with image's index
     * @param {number} index - The index of the image to view.
     * @returns {Viewer} this
     */
    view: function view() {
      var _this = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      index = Number(index) || 0;

      if (!this.isShown) {
        this.index = index;
        return this.show();
      }

      if (this.hiding || this.played || index < 0 || index >= this.length || this.viewed && index === this.index) {
        return this;
      }

      if (this.viewing) {
        this.viewing.abort();
      }

      var element = this.element,
          options = this.options,
          title = this.title,
          canvas = this.canvas;

      var item = this.items[index];
      var img = item.querySelector('img');
      var url = getData(img, 'originalUrl');
      var alt = img.getAttribute('alt');
      var image = document.createElement('img');

      image.src = url;
      image.alt = alt;

      if (isFunction(options.view)) {
        addListener(element, EVENT_VIEW, options.view, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_VIEW, {
        originalImage: this.images[index],
        index: index,
        image: image
      }) === false || !this.isShown || this.hiding || this.played) {
        return this;
      }

      this.image = image;
      removeClass(this.items[this.index], CLASS_ACTIVE);
      addClass(item, CLASS_ACTIVE);
      this.viewed = false;
      this.index = index;
      this.imageData = {};
      addClass(image, CLASS_INVISIBLE);

      if (options.loading) {
        addClass(canvas, CLASS_LOADING);
      }

      canvas.innerHTML = '';
      canvas.appendChild(image);

      // Center current item
      this.renderList();

      // Clear title
      title.innerHTML = '';

      // Generate title after viewed
      var onViewed = function onViewed() {
        var imageData = _this.imageData;


        title.textContent = alt + ' (' + imageData.naturalWidth + ' \xD7 ' + imageData.naturalHeight + ')';
      };
      var onLoad = void 0;

      addListener(element, EVENT_VIEWED, onViewed, {
        once: true
      });

      this.viewing = {
        abort: function abort() {
          removeListener(element, EVENT_VIEWED, onViewed);

          if (image.complete) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          } else {
            removeListener(image, EVENT_LOAD, onLoad);

            if (this.timeout) {
              clearTimeout(this.timeout);
            }
          }
        }
      };

      if (image.complete) {
        this.load();
      } else {
        addListener(image, EVENT_LOAD, onLoad = this.load.bind(this), {
          once: true
        });

        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        // Make the image visible if it fails to load within 1s
        this.timeout = setTimeout(function () {
          removeClass(image, CLASS_INVISIBLE);
          _this.timeout = false;
        }, 1000);
      }

      return this;
    },


    /**
     * View the previous image
     * @param {boolean} [loop=false] - Indicate if view the last one
     * when it is the first one at present.
     * @returns {Viewer} this
     */
    prev: function prev() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var index = this.index - 1;

      if (index < 0) {
        index = loop ? this.length - 1 : 0;
      }

      this.view(index);
      return this;
    },


    /**
     * View the next image
     * @param {boolean} [loop=false] - Indicate if view the first one
     * when it is the last one at present.
     * @returns {Viewer} this
     */
    next: function next() {
      var loop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var maxIndex = this.length - 1;
      var index = this.index + 1;

      if (index > maxIndex) {
        index = loop ? 0 : maxIndex;
      }

      this.view(index);
      return this;
    },


    /**
     * Move the image with relative offsets.
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} offsetY - The relative offset distance on the y-axis.
     * @returns {Viewer} this
     */
    move: function move(offsetX, offsetY) {
      var imageData = this.imageData;


      this.moveTo(isUndefined(offsetX) ? offsetX : imageData.left + Number(offsetX), isUndefined(offsetY) ? offsetY : imageData.top + Number(offsetY));

      return this;
    },


    /**
     * Move the image to an absolute point.
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Viewer} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var imageData = this.imageData;


      x = Number(x);
      y = Number(y);

      if (this.viewed && !this.played && this.options.movable) {
        var changed = false;

        if (isNumber(x)) {
          imageData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          imageData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderImage();
        }
      }

      return this;
    },


    /**
     * Zoom the image with a relative ratio.
     * @param {number} ratio - The target ratio.
     * @param {boolean} [hasTooltip=false] - Indicates if it has a tooltip or not.
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @returns {Viewer} this
     */
    zoom: function zoom(ratio) {
      var hasTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _originalEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var imageData = this.imageData;


      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      this.zoomTo(imageData.width * ratio / imageData.naturalWidth, hasTooltip, _originalEvent);

      return this;
    },


    /**
     * Zoom the image to an absolute ratio.
     * @param {number} ratio - The target ratio.
     * @param {boolean} [hasTooltip=false] - Indicates if it has a tooltip or not.
     * @param {Event} [_originalEvent=null] - The original event if any.
     * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
     * @returns {Viewer} this
     */
    zoomTo: function zoomTo(ratio) {
      var hasTooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _originalEvent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var _zoomable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var options = this.options,
          pointers = this.pointers,
          imageData = this.imageData;


      ratio = Math.max(0, ratio);

      if (isNumber(ratio) && this.viewed && !this.played && (_zoomable || options.zoomable)) {
        if (!_zoomable) {
          var minZoomRatio = Math.max(0.01, options.minZoomRatio);
          var maxZoomRatio = Math.min(100, options.maxZoomRatio);

          ratio = Math.min(Math.max(ratio, minZoomRatio), maxZoomRatio);
        }

        if (_originalEvent && ratio > 0.95 && ratio < 1.05) {
          ratio = 1;
        }

        var newWidth = imageData.naturalWidth * ratio;
        var newHeight = imageData.naturalHeight * ratio;

        if (_originalEvent) {
          var offset = getOffset(this.viewer);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          // Zoom from the triggering point of the event
          imageData.left -= (newWidth - imageData.width) * ((center.pageX - offset.left - imageData.left) / imageData.width);
          imageData.top -= (newHeight - imageData.height) * ((center.pageY - offset.top - imageData.top) / imageData.height);
        } else {
          // Zoom from the center of the image
          imageData.left -= (newWidth - imageData.width) / 2;
          imageData.top -= (newHeight - imageData.height) / 2;
        }

        imageData.width = newWidth;
        imageData.height = newHeight;
        imageData.ratio = ratio;
        this.renderImage();

        if (hasTooltip) {
          this.tooltip();
        }
      }

      return this;
    },


    /**
     * Rotate the image with a relative degree.
     * @param {number} degree - The rotate degree.
     * @returns {Viewer} this
     */
    rotate: function rotate(degree) {
      this.rotateTo((this.imageData.rotate || 0) + Number(degree));

      return this;
    },


    /**
     * Rotate the image to an absolute degree.
     * @param {number} degree - The rotate degree.
     * @returns {Viewer} this
     */
    rotateTo: function rotateTo(degree) {
      var imageData = this.imageData;


      degree = Number(degree);

      if (isNumber(degree) && this.viewed && !this.played && this.options.rotatable) {
        imageData.rotate = degree;
        this.renderImage();
      }

      return this;
    },


    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Viewer} this
     */
    scaleX: function scaleX(_scaleX) {
      this.scale(_scaleX, this.imageData.scaleY);

      return this;
    },


    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Viewer} this
     */
    scaleY: function scaleY(_scaleY) {
      this.scale(this.imageData.scaleX, _scaleY);

      return this;
    },


    /**
     * Scale the image.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Viewer} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;


      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.viewed && !this.played && this.options.scalable) {
        var changed = false;

        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          changed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          changed = true;
        }

        if (changed) {
          this.renderImage();
        }
      }

      return this;
    },


    /**
     * Play the images
     * @param {boolean} [fullscreen=false] - Indicate if request fullscreen or not.
     * @returns {Viewer} this
     */
    play: function play() {
      var _this2 = this;

      var fullscreen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.isShown || this.played) {
        return this;
      }

      var options = this.options,
          player = this.player;

      var onLoad = this.loadImage.bind(this);
      var list = [];
      var total = 0;
      var index = 0;

      this.played = true;
      this.onLoadWhenPlay = onLoad;

      if (fullscreen) {
        this.requestFullscreen();
      }

      addClass(player, CLASS_SHOW);
      forEach(this.items, function (item, i) {
        var img = item.querySelector('img');
        var image = document.createElement('img');

        image.src = getData(img, 'originalUrl');
        image.alt = img.getAttribute('alt');
        total += 1;
        addClass(image, CLASS_FADE);
        toggleClass(image, CLASS_TRANSITION, options.transition);

        if (hasClass(item, CLASS_ACTIVE)) {
          addClass(image, CLASS_IN);
          index = i;
        }

        list.push(image);
        addListener(image, EVENT_LOAD, onLoad, {
          once: true
        });
        player.appendChild(image);
      });

      if (isNumber(options.interval) && options.interval > 0) {
        var play = function play() {
          _this2.playing = setTimeout(function () {
            removeClass(list[index], CLASS_IN);
            index += 1;
            index = index < total ? index : 0;
            addClass(list[index], CLASS_IN);
            play();
          }, options.interval);
        };

        if (total > 1) {
          play();
        }
      }

      return this;
    },


    // Stop play
    stop: function stop() {
      var _this3 = this;

      if (!this.played) {
        return this;
      }

      var player = this.player;


      this.played = false;
      clearTimeout(this.playing);
      forEach(player.getElementsByTagName('img'), function (image) {
        removeListener(image, EVENT_LOAD, _this3.onLoadWhenPlay);
      });
      removeClass(player, CLASS_SHOW);
      player.innerHTML = '';
      this.exitFullscreen();

      return this;
    },


    // Enter modal mode (only available in inline mode)
    full: function full() {
      var _this4 = this;

      var options = this.options,
          viewer = this.viewer,
          image = this.image,
          list = this.list;


      if (!this.isShown || this.played || this.fulled || !options.inline) {
        return this;
      }

      this.fulled = true;
      this.open();
      addClass(this.button, CLASS_FULLSCREEN_EXIT);

      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);

        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }

      addClass(viewer, CLASS_FIXED);
      viewer.setAttribute('style', '');
      setStyle(viewer, {
        zIndex: options.zIndex
      });

      this.initContainer();
      this.viewerData = assign({}, this.containerData);
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this4.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }

      return this;
    },


    // Exit modal mode (only available in inline mode)
    exit: function exit() {
      var _this5 = this;

      var options = this.options,
          viewer = this.viewer,
          image = this.image,
          list = this.list;


      if (!this.isShown || this.played || !this.fulled || !options.inline) {
        return this;
      }

      this.fulled = false;
      this.close();
      removeClass(this.button, CLASS_FULLSCREEN_EXIT);

      if (options.transition) {
        removeClass(list, CLASS_TRANSITION);

        if (this.viewed) {
          removeClass(image, CLASS_TRANSITION);
        }
      }

      removeClass(viewer, CLASS_FIXED);
      setStyle(viewer, {
        zIndex: options.zIndexInline
      });

      this.viewerData = assign({}, this.parentData);
      this.renderViewer();
      this.renderList();

      if (this.viewed) {
        this.initImage(function () {
          _this5.renderImage(function () {
            if (options.transition) {
              setTimeout(function () {
                addClass(image, CLASS_TRANSITION);
                addClass(list, CLASS_TRANSITION);
              }, 0);
            }
          });
        });
      }

      return this;
    },


    // Show the current ratio of the image with percentage
    tooltip: function tooltip() {
      var _this6 = this;

      var options = this.options,
          tooltipBox = this.tooltipBox,
          imageData = this.imageData;


      if (!this.viewed || this.played || !options.tooltip) {
        return this;
      }

      tooltipBox.textContent = Math.round(imageData.ratio * 100) + '%';

      if (!this.tooltipping) {
        if (options.transition) {
          if (this.fading) {
            dispatchEvent(tooltipBox, EVENT_TRANSITION_END);
          }

          addClass(tooltipBox, CLASS_SHOW);
          addClass(tooltipBox, CLASS_FADE);
          addClass(tooltipBox, CLASS_TRANSITION);

          // Force reflow to enable CSS3 transition
          // eslint-disable-next-line
          tooltipBox.offsetWidth;
          addClass(tooltipBox, CLASS_IN);
        } else {
          addClass(tooltipBox, CLASS_SHOW);
        }
      } else {
        clearTimeout(this.tooltipping);
      }

      this.tooltipping = setTimeout(function () {
        if (options.transition) {
          addListener(tooltipBox, EVENT_TRANSITION_END, function () {
            removeClass(tooltipBox, CLASS_SHOW);
            removeClass(tooltipBox, CLASS_FADE);
            removeClass(tooltipBox, CLASS_TRANSITION);
            _this6.fading = false;
          }, {
            once: true
          });

          removeClass(tooltipBox, CLASS_IN);
          _this6.fading = true;
        } else {
          removeClass(tooltipBox, CLASS_SHOW);
        }

        _this6.tooltipping = false;
      }, 1000);

      return this;
    },


    // Toggle the image size between its natural size and initial size
    toggle: function toggle() {
      if (this.imageData.ratio === 1) {
        this.zoomTo(this.initialImageData.ratio, true);
      } else {
        this.zoomTo(1, true);
      }

      return this;
    },


    // Reset the image to its initial state
    reset: function reset() {
      if (this.viewed && !this.played) {
        this.imageData = assign({}, this.initialImageData);
        this.renderImage();
      }

      return this;
    },


    // Update viewer when images changed
    update: function update() {
      var element = this.element,
          options = this.options,
          isImg = this.isImg;

      // Destroy viewer if the target image was deleted

      if (isImg && !element.parentNode) {
        return this.destroy();
      }

      var images = [];

      forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
        if (options.filter) {
          if (options.filter(image)) {
            images.push(image);
          }
        } else {
          images.push(image);
        }
      });

      if (!images.length) {
        return this;
      }

      this.images = images;
      this.length = images.length;

      if (this.ready) {
        var indexes = [];

        forEach(this.items, function (item, i) {
          var img = item.querySelector('img');
          var image = images[i];

          if (image) {
            if (image.src !== img.src) {
              indexes.push(i);
            }
          } else {
            indexes.push(i);
          }
        });

        setStyle(this.list, {
          width: 'auto'
        });

        this.initList();

        if (this.isShown) {
          if (this.length) {
            if (this.viewed) {
              var index = indexes.indexOf(this.index);

              if (index >= 0) {
                this.viewed = false;
                this.view(Math.max(this.index - (index + 1), 0));
              } else {
                addClass(this.items[this.index], CLASS_ACTIVE);
              }
            }
          } else {
            this.image = null;
            this.viewed = false;
            this.index = 0;
            this.imageData = null;
            this.canvas.innerHTML = '';
            this.title.innerHTML = '';
          }
        }
      } else {
        this.build();
      }

      return this;
    },


    // Destroy the viewer
    destroy: function destroy() {
      var element = this.element,
          options = this.options;


      if (!getData(element, NAMESPACE)) {
        return this;
      }

      this.destroyed = true;

      if (this.ready) {
        if (this.played) {
          this.stop();
        }

        if (options.inline) {
          if (this.fulled) {
            this.exit();
          }

          this.unbind();
        } else if (this.isShown) {
          if (this.viewing) {
            if (this.imageRendering) {
              this.imageRendering.abort();
            } else if (this.imageInitializing) {
              this.imageInitializing.abort();
            }
          }

          if (this.hiding) {
            this.transitioning.abort();
          }

          this.hidden();
        } else if (this.showing) {
          this.transitioning.abort();
          this.hidden();
        }

        this.ready = false;
        this.viewer.parentNode.removeChild(this.viewer);
      } else if (options.inline) {
        if (this.delaying) {
          this.delaying.abort();
        } else if (this.initializing) {
          this.initializing.abort();
        }
      }

      if (!options.inline) {
        removeListener(element, EVENT_CLICK, this.onStart);
      }

      removeData(element, NAMESPACE);
      return this;
    }
  };

  var others = {
    open: function open() {
      var body = this.body;


      addClass(body, CLASS_OPEN);

      body.style.paddingRight = this.scrollbarWidth + (parseFloat(this.initialBodyPaddingRight) || 0) + 'px';
    },
    close: function close() {
      var body = this.body;


      removeClass(body, CLASS_OPEN);
      body.style.paddingRight = this.initialBodyPaddingRight;
    },
    shown: function shown() {
      var element = this.element,
          options = this.options;


      this.fulled = true;
      this.isShown = true;
      this.render();
      this.bind();
      this.showing = false;

      if (isFunction(options.shown)) {
        addListener(element, EVENT_SHOWN, options.shown, {
          once: true
        });
      }

      if (dispatchEvent(element, EVENT_SHOWN) === false) {
        return;
      }

      if (this.ready && this.isShown && !this.hiding) {
        this.view(this.index);
      }
    },
    hidden: function hidden() {
      var element = this.element,
          options = this.options;


      this.fulled = false;
      this.viewed = false;
      this.isShown = false;
      this.close();
      this.unbind();
      addClass(this.viewer, CLASS_HIDE);
      this.resetList();
      this.resetImage();
      this.hiding = false;

      if (!this.destroyed) {
        if (isFunction(options.hidden)) {
          addListener(element, EVENT_HIDDEN, options.hidden, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_HIDDEN);
      }
    },
    requestFullscreen: function requestFullscreen() {
      var document = this.element.ownerDocument;

      if (this.fulled && !document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        var documentElement = document.documentElement;


        if (documentElement.requestFullscreen) {
          documentElement.requestFullscreen();
        } else if (documentElement.msRequestFullscreen) {
          documentElement.msRequestFullscreen();
        } else if (documentElement.mozRequestFullScreen) {
          documentElement.mozRequestFullScreen();
        } else if (documentElement.webkitRequestFullscreen) {
          documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      }
    },
    exitFullscreen: function exitFullscreen() {
      if (this.fulled) {
        var document = this.element.ownerDocument;

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    },
    change: function change(e) {
      var options = this.options,
          pointers = this.pointers;

      var pointer = pointers[Object.keys(pointers)[0]];
      var offsetX = pointer.endX - pointer.startX;
      var offsetY = pointer.endY - pointer.startY;

      switch (this.action) {
        // Move the current image
        case ACTION_MOVE:
          this.move(offsetX, offsetY);
          break;

        // Zoom the current image
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), false, e);
          break;

        case ACTION_SWITCH:
          this.action = 'switched';

          // Empty `pointers` as `touchend` event will not be fired after swiped in iOS browsers.
          this.pointers = {};

          if (Math.abs(offsetX) > Math.abs(offsetY)) {
            if (offsetX > 1) {
              this.prev(options.loop);
            } else if (offsetX < -1) {
              this.next(options.loop);
            }
          }

          break;

        default:
      }

      // Override
      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    },
    isSwitchable: function isSwitchable() {
      var imageData = this.imageData,
          viewerData = this.viewerData;


      return this.length > 1 && imageData.left >= 0 && imageData.top >= 0 && imageData.width <= viewerData.width && imageData.height <= viewerData.height;
    }
  };

  var AnotherViewer = WINDOW.Viewer;

  var Viewer = function () {
    /**
     * Create a new Viewer.
     * @param {Element} element - The target element for viewing.
     * @param {Object} [options={}] - The configuration options.
     */
    function Viewer(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      classCallCheck(this, Viewer);

      if (!element || element.nodeType !== 1) {
        throw new Error('The first argument is required and must be an element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.action = false;
      this.fading = false;
      this.fulled = false;
      this.hiding = false;
      this.index = 0;
      this.isImg = false;
      this.length = 0;
      this.played = false;
      this.playing = false;
      this.pointers = {};
      this.ready = false;
      this.showing = false;
      this.timeout = false;
      this.tooltipping = false;
      this.viewed = false;
      this.viewing = false;
      this.isShown = false;
      this.wheeling = false;
      this.init();
    }

    createClass(Viewer, [{
      key: 'init',
      value: function init() {
        var _this = this;

        var element = this.element,
            options = this.options;


        if (getData(element, NAMESPACE)) {
          return;
        }

        setData(element, NAMESPACE, this);

        var isImg = element.tagName.toLowerCase() === 'img';
        var images = [];

        forEach(isImg ? [element] : element.querySelectorAll('img'), function (image) {
          if (isFunction(options.filter)) {
            if (options.filter.call(_this, image)) {
              images.push(image);
            }
          } else {
            images.push(image);
          }
        });

        if (!images.length) {
          return;
        }

        this.isImg = isImg;
        this.length = images.length;
        this.images = images;

        var ownerDocument = element.ownerDocument;

        var body = ownerDocument.body || ownerDocument.documentElement;

        this.body = body;
        this.scrollbarWidth = window.innerWidth - ownerDocument.documentElement.clientWidth;
        this.initialBodyPaddingRight = window.getComputedStyle(body).paddingRight;

        // Override `transition` option if it is not supported
        if (isUndefined(document.createElement(NAMESPACE).style.transition)) {
          options.transition = false;
        }

        if (options.inline) {
          var count = 0;
          var progress = function progress() {
            count += 1;

            if (count === _this.length) {
              var timeout = void 0;

              _this.initializing = false;
              _this.delaying = {
                abort: function abort() {
                  clearTimeout(timeout);
                }
              };

              // build asynchronously to keep `this.viewer` is accessible in `ready` event handler.
              timeout = setTimeout(function () {
                _this.delaying = false;
                _this.build();
              }, 0);
            }
          };

          this.initializing = {
            abort: function abort() {
              forEach(images, function (image) {
                if (!image.complete) {
                  removeListener(image, EVENT_LOAD, progress);
                }
              });
            }
          };

          forEach(images, function (image) {
            if (image.complete) {
              progress();
            } else {
              addListener(image, EVENT_LOAD, progress, {
                once: true
              });
            }
          });
        } else {
          addListener(element, EVENT_CLICK, this.onStart = function (_ref) {
            var target = _ref.target;

            if (target.tagName.toLowerCase() === 'img') {
              _this.view(_this.images.indexOf(target));
            }
          });
        }
      }
    }, {
      key: 'build',
      value: function build() {
        if (this.ready) {
          return;
        }

        var element = this.element,
            options = this.options;

        var parent = element.parentNode;
        var template = document.createElement('div');

        template.innerHTML = TEMPLATE;

        var viewer = template.querySelector('.' + NAMESPACE + '-container');
        var title = viewer.querySelector('.' + NAMESPACE + '-title');
        var toolbar = viewer.querySelector('.' + NAMESPACE + '-toolbar');
        var navbar = viewer.querySelector('.' + NAMESPACE + '-navbar');
        var button = viewer.querySelector('.' + NAMESPACE + '-button');
        var canvas = viewer.querySelector('.' + NAMESPACE + '-canvas');

        this.parent = parent;
        this.viewer = viewer;
        this.title = title;
        this.toolbar = toolbar;
        this.navbar = navbar;
        this.button = button;
        this.canvas = canvas;
        this.footer = viewer.querySelector('.' + NAMESPACE + '-footer');
        this.tooltipBox = viewer.querySelector('.' + NAMESPACE + '-tooltip');
        this.player = viewer.querySelector('.' + NAMESPACE + '-player');
        this.list = viewer.querySelector('.' + NAMESPACE + '-list');

        addClass(title, !options.title ? CLASS_HIDE : getResponsiveClass(options.title));
        addClass(navbar, !options.navbar ? CLASS_HIDE : getResponsiveClass(options.navbar));
        toggleClass(button, CLASS_HIDE, !options.button);

        if (options.backdrop) {
          addClass(viewer, NAMESPACE + '-backdrop');

          if (!options.inline && options.backdrop === true) {
            setData(canvas, 'action', 'hide');
          }
        }

        if (options.toolbar) {
          var list = document.createElement('ul');
          var custom = isPlainObject(options.toolbar);
          var zoomButtons = BUTTONS.slice(0, 3);
          var rotateButtons = BUTTONS.slice(7, 9);
          var scaleButtons = BUTTONS.slice(9);

          if (!custom) {
            addClass(toolbar, getResponsiveClass(options.toolbar));
          }

          forEach(custom ? options.toolbar : BUTTONS, function (value, index) {
            var deep = custom && isPlainObject(value);
            var name = custom ? hyphenate(index) : value;
            var show = deep && !isUndefined(value.show) ? value.show : value;

            if (!show || !options.zoomable && zoomButtons.indexOf(name) !== -1 || !options.rotatable && rotateButtons.indexOf(name) !== -1 || !options.scalable && scaleButtons.indexOf(name) !== -1) {
              return;
            }

            var size = deep && !isUndefined(value.size) ? value.size : value;
            var click = deep && !isUndefined(value.click) ? value.click : value;
            var item = document.createElement('li');

            item.setAttribute('role', 'button');
            addClass(item, NAMESPACE + '-' + name);

            if (!isFunction(click)) {
              setData(item, 'action', name);
            }

            if (isNumber(show)) {
              addClass(item, getResponsiveClass(show));
            }

            if (['small', 'large'].indexOf(size) !== -1) {
              addClass(item, NAMESPACE + '-' + size);
            } else if (name === 'play') {
              addClass(item, NAMESPACE + '-large');
            }

            if (isFunction(click)) {
              addListener(item, EVENT_CLICK, click);
            }

            list.appendChild(item);
          });

          toolbar.appendChild(list);
        } else {
          addClass(toolbar, CLASS_HIDE);
        }

        if (!options.rotatable) {
          var rotates = toolbar.querySelectorAll('li[class*="rotate"]');

          addClass(rotates, CLASS_INVISIBLE);
          forEach(rotates, function (rotate) {
            toolbar.appendChild(rotate);
          });
        }

        if (options.inline) {
          addClass(button, CLASS_FULLSCREEN);
          setStyle(viewer, {
            zIndex: options.zIndexInline
          });

          if (window.getComputedStyle(parent).position === 'static') {
            setStyle(parent, {
              position: 'relative'
            });
          }

          parent.insertBefore(viewer, element.nextSibling);
        } else {
          addClass(button, CLASS_CLOSE);
          addClass(viewer, CLASS_FIXED);
          addClass(viewer, CLASS_FADE);
          addClass(viewer, CLASS_HIDE);

          setStyle(viewer, {
            zIndex: options.zIndex
          });

          var container = options.container;


          if (isString(container)) {
            container = element.ownerDocument.querySelector(container);
          }

          if (!container) {
            container = this.body;
          }

          container.appendChild(viewer);
        }

        if (options.inline) {
          this.render();
          this.bind();
          this.isShown = true;
        }

        this.ready = true;

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        if (dispatchEvent(element, EVENT_READY) === false) {
          this.ready = false;
          return;
        }

        if (this.ready && options.inline) {
          this.view();
        }
      }

      /**
       * Get the no conflict viewer class.
       * @returns {Viewer} The viewer class.
       */

    }], [{
      key: 'noConflict',
      value: function noConflict() {
        window.Viewer = AnotherViewer;
        return Viewer;
      }

      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: 'setDefaults',
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);
    return Viewer;
  }();

  assign(Viewer.prototype, render, events, handlers, methods, others);

  if ($.fn) {
    var AnotherViewer$1 = $.fn.viewer;
    var NAMESPACE$1 = 'viewer';

    $.fn.viewer = function jQueryViewer(option) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var result = void 0;

      this.each(function (i, element) {
        var $element = $(element);
        var isDestroy = option === 'destroy';
        var viewer = $element.data(NAMESPACE$1);

        if (!viewer) {
          if (isDestroy) {
            return;
          }

          var options = $.extend({}, $element.data(), $.isPlainObject(option) && option);

          viewer = new Viewer(element, options);
          $element.data(NAMESPACE$1, viewer);
        }

        if (typeof option === 'string') {
          var fn = viewer[option];

          if ($.isFunction(fn)) {
            result = fn.apply(viewer, args);

            if (result === viewer) {
              result = undefined;
            }

            if (isDestroy) {
              $element.removeData(NAMESPACE$1);
            }
          }
        }
      });

      return result !== undefined ? result : this;
    };

    $.fn.viewer.Constructor = Viewer;
    $.fn.viewer.setDefaults = Viewer.setDefaults;
    $.fn.viewer.noConflict = function noConflict() {
      $.fn.viewer = AnotherViewer$1;
      return this;
    };
  }

})));
;

jQuery(function () {
    var imgItems = ['https://ws3.sinaimg.cn/large/005BYqpggy1g1pql2otx5j308c0653yi.jpg', 'https://ws3.sinaimg.cn/large/005BYqpggy1g1pql2pu8yj30cu07lmxf.jpg', 'https://ws3.sinaimg.cn/large/005BYqpggy1g1pql2q5g2j30ek099jrw.jpg', 'https://ws3.sinaimg.cn/large/005BYqpggy1g1pql2r18hj30gz09q3zk.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql2qin0j304g03cdfp.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql2vuphj30d907y74h.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql32nbmj30lx0cfjs6.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql336cwj30dz096glt.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql2xm4tj30i30c9wey.jpg', 'https://ws3.sinaimg.cn/large/005BYqpgly1g1pql3xae3j30jy0c3wez.jpg'];
    jQuery("img.vps-custom-img").each(function () {
	jQuery(this).attr('src', imgItems[Math.floor(Math.random() * imgItems.length)]);
    })
    jQuery("pre").addClass("prettyprint;brush:html");
    jQuery("div.main-container article").viewer({url:"data-original"});
    prettyPrint();
    jQuery("body.page-node-type-kejizixun div.content img").wrap('<span class="load-html-img loaded"></span>')
    jQuery("div.zhuanzai").html('转载请标明出处:<a href="' + window.location.href + '" target="_blank">' + jQuery("h1.page-header span").html() + '</a>')
//    var rootH = "";
//    if (jQuery("div.field--name-body > h1").length > 0)
//	rootH = "> h1";
//    if (jQuery("div.field--name-body > h2").length > 0)
//	rootH = "> h2";
//    if (jQuery("div.field--name-body > h3").length > 0)
//	rootH = "> h3";
//    console.log("rootH=" + rootH);
//    if (rootH != "") {
//	jQuery("article div.field--name-body > h2,article div.field--name-body > h3,article div.field--name-body > h1").wrap("<div class=\"jumpto-block\"></div>");
//	jQuery("article div.field--name-body").jumpto({
//	    firstLevel: rootH,
//	    secondLevel: true,
//	    innerWrapper: ".jumpto-block",
//	    offset: 400,
//	    animate: 1000,
//	    navContainer: false,
//	    anchorTopPadding: 20,
//	    showTitle: "跳转到",
//	    closeButton: true
//	});
//
//    }
    setTimeout("links_high()", 500);
    setTimeout(showGGColseButton, 15000);
    setInterval(function(){
	jQuery('.adsbygoogle:visible').each(function(){(adsbygoogle = window.adsbygoogle || []).push({});})
    },3000);

    var qiehuan = jQuery("div.content div.field--name-field-kuaisuqiehuan ").html();
    if (typeof qiehuan != "undefined" && qiehuan && qiehuan.length > 0) {
	jQuery("div.content div.field--name-body").after('<div class="field--name-field-kuaisuqiehuan">' + qiehuan + '</div>');
    }
});
window.onload = function () {
    var box = document.getElementById("edit-comment-body-0-format");
    box.parentNode.removeChild(box);
}
AOS.init({
    offset: 200,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
    once: true,
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'zh-CN', includedLanguages: 'en,ja,zh-CN,zh-TW', multilanguagePage: true}, 'google_translate_element');
}
function links_high() {
    jQuery(".region-sidebar-first a").each(function () {
	var obj = jQuery(this);
	if (obj[0].href == window.location.href) {
	    obj.addClass("currentlink");
	    return false;
	}
    });
}
function hiden() {
    jQuery("#divObj").hide();
}
function showGGColseButton()
{
    jQuery(".colseGG").show();
}


;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.theme.progressBar = function (id) {
    return '<div id="' + id + '" class="progress" aria-live="polite">' + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
  };

  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(Drupal.ProgressBar.prototype, {
    setProgress: function setProgress(percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('div.progress__bar').css('width', percentage + '%');
        $(this.element).find('div.progress__percentage').html(percentage + '%');
      }
      $('div.progress__description', this.element).html(message);
      $('div.progress__label', this.element).html(label);
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },
    startMonitoring: function startMonitoring(uri, delay) {
      this.delay = delay;
      this.uri = uri;
      this.sendPing();
    },
    stopMonitoring: function stopMonitoring() {
      clearTimeout(this.timer);

      this.uri = null;
    },
    sendPing: function sendPing() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.uri) {
        var pb = this;

        var uri = this.uri;
        if (uri.indexOf('?') === -1) {
          uri += '?';
        } else {
          uri += '&';
        }
        uri += '_format=json';
        $.ajax({
          type: this.method,
          url: uri,
          data: '',
          dataType: 'json',
          success: function success(progress) {
            if (progress.status === 0) {
              pb.displayError(progress.data);
              return;
            }

            pb.setProgress(progress.percentage, progress.message, progress.label);

            pb.timer = setTimeout(function () {
              pb.sendPing();
            }, pb.delay);
          },
          error: function error(xmlhttp) {
            var e = new Drupal.AjaxError(xmlhttp, pb.uri);
            pb.displayError('<pre>' + e.message + '</pre>');
          }
        });
      }
    },
    displayError: function displayError(string) {
      var error = $('<div class="messages messages--error"></div>').html(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });
})(jQuery, Drupal);;
/**
 * @file
 * Extends methods from core/misc/progress.js.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return '<div class="progress-wrapper" aria-live="polite">' +
             '<div class="message"></div>'+
             '<div id ="' + id + '" class="progress progress-striped active">' +
               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
                 '<span class="percentage"></span>' +
               '</div>' +
             '</div>' +
             '<div class="progress-label"></div>' +
           '</div>';
  };

  $.extend(Drupal.ProgressBar.prototype, /** @lends Drupal.ProgressBar */{

    /**
     * Set the percentage and status message for the progressbar.
     *
     * @param {number} percentage
     * @param {string} message
     * @param {string} label
     */
    setProgress: function (percentage, message, label) {
      if (percentage >= 0 && percentage <= 100) {
        $(this.element).find('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage);
        $(this.element).find('.percentage').html(percentage + '%');
      }
      if (message) {
        // Remove the unnecessary whitespace at the end of the message.
        message = message.replace(/<br\/>&nbsp;|\s*$/, '');

        $('.message', this.element).html(message);
      }
      if (label) {
        $('.progress-label', this.element).html(label);
      }
      if (this.updateCallback) {
        this.updateCallback(percentage, message, this);
      }
    },

    /**
     * Display errors on the page.
     *
     * @param {string} string
     */
    displayError: function (string) {
      var error = $('<div class="alert alert-block alert-error"><a class="close" data-dismiss="alert" href="#">&times;</a><h4>' + Drupal.t('Error message') + '</h4></div>').append(string);
      $(this.element).before(error).hide();

      if (this.errorCallback) {
        this.errorCallback(this);
      }
    }
  });

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function ($, window, Drupal, drupalSettings) {
  Drupal.behaviors.AJAX = {
    attach: function attach(context, settings) {
      function loadAjaxBehavior(base) {
        var elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = '#' + base;
        }
        $(elementSettings.selector).once('drupal-ajax').each(function () {
          elementSettings.element = this;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      Object.keys(settings.ajax || {}).forEach(function (base) {
        return loadAjaxBehavior(base);
      });

      Drupal.ajax.bindAjaxLinks(document.body);

      $('.use-ajax-submit').once('ajax').each(function () {
        var elementSettings = {};

        elementSettings.url = $(this.form).attr('action');

        elementSettings.setClick = true;

        elementSettings.event = 'click';

        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = $(this).attr('id');
        elementSettings.element = this;

        Drupal.ajax(elementSettings);
      });
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach(function (instance) {
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    }
  };

  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    var statusCode = void 0;
    var statusText = void 0;
    var responseText = void 0;
    if (xmlhttp.status) {
      statusCode = '\n' + Drupal.t('An AJAX HTTP error occurred.') + '\n' + Drupal.t('HTTP Result Code: !status', { '!status': xmlhttp.status });
    } else {
      statusCode = '\n' + Drupal.t('An AJAX HTTP request terminated abnormally.');
    }
    statusCode += '\n' + Drupal.t('Debugging information follows.');
    var pathText = '\n' + Drupal.t('Path: !uri', { '!uri': uri });
    statusText = '';

    try {
      statusText = '\n' + Drupal.t('StatusText: !statusText', {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    responseText = '';

    try {
      responseText = '\n' + Drupal.t('ResponseText: !responseText', {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    var readyStateText = xmlhttp.status === 0 ? '\n' + Drupal.t('ReadyState: !readyState', {
      '!readyState': xmlhttp.readyState
    }) : '';

    customMessage = customMessage ? '\n' + Drupal.t('CustomMessage: !customMessage', {
      '!customMessage': customMessage
    }) : '';

    this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;

    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error('Drupal.ajax() function must be called with one configuration object only');
    }

    var base = settings.base || false;
    var element = settings.element || false;
    delete settings.base;
    delete settings.element;

    if (!settings.progress && !element) {
      settings.progress = false;
    }

    var ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  Drupal.ajax.instances = [];

  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(function (instance) {
      return instance && instance.element !== false && !document.body.contains(instance.element);
    });
  };

  Drupal.ajax.bindAjaxLinks = function (element) {
    $(element).find('.use-ajax').once('ajax').each(function (i, ajaxLink) {
      var $linkElement = $(ajaxLink);

      var elementSettings = {
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink
      };
      var href = $linkElement.attr('href');

      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  Drupal.Ajax = function (base, element, elementSettings) {
    var defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? '#' + base : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...')
      },
      submit: {
        js: true
      }
    };

    $.extend(this, defaults, elementSettings);

    this.commands = new Drupal.AjaxCommands();

    this.instanceIndex = false;

    if (this.wrapper) {
      this.wrapper = '#' + this.wrapper;
    }

    this.element = element;

    this.element_settings = elementSettings;

    this.elementSettings = elementSettings;

    if (this.element && this.element.form) {
      this.$form = $(this.element.form);
    }

    if (!this.url) {
      var $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    var originalUrl = this.url;

    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');

    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    var ajax = this;

    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      beforeSerialize: function beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend: function beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success: function success(response, status, xmlhttprequest) {
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            var customMessage = Drupal.t('The response failed verification so will not be processed.');
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return ajax.success(response, status);
      },
      complete: function complete(xmlhttprequest, status) {
        ajax.ajaxing = false;
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },

      dataType: 'json',
      type: 'POST'
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }

    var wrapper = 'drupal_' + (elementSettings.dialogType || 'ajax');
    if (elementSettings.dialogRenderer) {
      wrapper += '.' + elementSettings.dialogRenderer;
    }
    ajax.options.url += Drupal.ajax.WRAPPER_FORMAT + '=' + wrapper;

    $(ajax.element).on(elementSettings.event, function (event) {
      if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
        throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
          '!url': ajax.url
        }));
      }
      return ajax.eventResponse(this, event);
    });

    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  Drupal.Ajax.prototype.execute = function () {
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);

      return $.ajax(this.options);
    } catch (e) {
      this.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + this.options.url + ': ' + e.message);

      return $.Deferred().reject();
    }
  };

  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    var ajax = this;

    if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    var ajax = this;

    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        if (ajax.setClick) {
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      ajax.ajaxing = false;
      window.alert('An error occurred while attempting to process ' + ajax.options.url + ': ' + e.message);
    }
  };

  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    var pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {};

  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    if (this.$form) {
      options.extraData = options.extraData || {};

      options.extraData.ajax_iframe_upload = '1';

      var v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    var progressIndicatorMethod = 'setProgressIndicator' + this.progress.type.slice(0, 1).toUpperCase() + this.progress.type.slice(1).toLowerCase();
    if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
      this[progressIndicatorMethod].call(this);
    }
  };

  Drupal.theme.ajaxProgressThrobber = function (message) {
    var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
    var throbber = '<div class="throbber">&nbsp;</div>';

    return '<div class="ajax-progress ajax-progress-throbber">' + throbber + messageMarkup + '</div>';
  };

  Drupal.theme.ajaxProgressIndicatorFullscreen = function () {
    return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
  };

  Drupal.theme.ajaxProgressMessage = function (message) {
    return '<div class="message">' + message + '</div>';
  };

  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    var progressBar = new Drupal.ProgressBar('ajax-progress-' + this.element.id, $.noop, this.progress.method, $.noop);
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
    }
    this.progress.element = $(progressBar.element).addClass('ajax-progress ajax-progress-bar');
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
    $(this.element).after(this.progress.element);
  };

  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').after(this.progress.element);
  };

  Drupal.Ajax.prototype.success = function (response, status) {
    var _this = this;

    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    var focusChanged = false;
    Object.keys(response || {}).forEach(function (i) {
      if (response[i].command && _this.commands[response[i].command]) {
        _this.commands[response[i].command](_this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    });

    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n >= 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    this.settings = null;
  };

  Drupal.Ajax.prototype.getEffect = function (response) {
    var type = response.effect || this.effect;
    var speed = response.speed || this.speed;

    var effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = type + 'Toggle';
      effect.hideEffect = type + 'Toggle';
      effect.showSpeed = speed;
    }

    return effect;
  };

  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }

    $(this.wrapper).show();

    $(this.element).prop('disabled', false);

    if (this.$form && document.body.contains(this.$form.get(0))) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  Drupal.theme.ajaxWrapperNewContent = function ($newContent, ajax, response) {
    return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function (i) {
      return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
    }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
  };

  Drupal.theme.ajaxWrapperMultipleRootElements = function ($elements) {
    return $('<div></div>').append($elements);
  };

  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    insert: function insert(ajax, response) {
      var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
      var method = response.method || ajax.method;
      var effect = ajax.getEffect(response);

      var settings = response.settings || ajax.settings || drupalSettings;

      var $newContent = $($.parseHTML(response.data, document, true));

      $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);

      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      $wrapper[method]($newContent);

      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      var $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      if ($newContent.parents('html').length) {
        $newContent.each(function (index, element) {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },
    remove: function remove(ajax, response, status) {
      var settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector).each(function () {
        Drupal.detachBehaviors(this, settings);
      }).remove();
    },
    changed: function changed(ajax, response, status) {
      var $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element.find(response.asterisk).append(' <abbr class="ajax-changed" title="' + Drupal.t('Changed') + '">*</abbr> ');
        }
      }
    },
    alert: function alert(ajax, response, status) {
      window.alert(response.text, response.title);
    },
    redirect: function redirect(ajax, response, status) {
      window.location = response.url;
    },
    css: function css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },
    settings: function settings(ajax, response, status) {
      var ajaxSettings = drupalSettings.ajax;

      if (ajaxSettings) {
        Drupal.ajax.expired().forEach(function (instance) {

          if (instance.selector) {
            var selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },
    data: function data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },
    invoke: function invoke(ajax, response, status) {
      var $element = $(response.selector);
      $element[response.method].apply($element, _toConsumableArray(response.args));
    },
    restripe: function restripe(ajax, response, status) {
      $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
    },
    update_build_id: function update_build_id(ajax, response, status) {
      $('input[name="form_build_id"][value="' + response.old + '"]').val(response.new);
    },
    add_css: function add_css(ajax, response, status) {
      $('head').prepend(response.data);

      var match = void 0;
      var importMatch = /^@import url\("(.*)"\);$/gim;
      if (document.styleSheets[0].addImport && importMatch.test(response.data)) {
        importMatch.lastIndex = 0;
        do {
          match = importMatch.exec(response.data);
          document.styleSheets[0].addImport(match[1]);
        } while (match);
      }
    }
  };
})(jQuery, window, Drupal, drupalSettings);;
/**
 * @file
 * Extends methods from core/misc/ajax.js.
 */

(function ($, window, Drupal, drupalSettings) {

  /**
   * Attempts to find the closest glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.findGlyphicon = function (element) {
    return $(element).closest('.form-item').find('.ajax-progress.glyphicon')
  };

  /**
   * Starts the spinning of the glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   * @param {string} [message]
   *   An optional message to display (tooltip) for the progress.
   *
   * @returns {jQuery}
   *   A jQuery object.
   */
  Drupal.Ajax.prototype.glyphiconStart = function (element, message) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.addClass('glyphicon-spin');

      // Add any message as a tooltip to the glyphicon.
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;

        if (message) {
          $glyphicon.attr('data-toggle', 'tooltip').attr('title', message).tooltip();
        }
      }

      // Append a message for screen readers.
      if (message) {
        $glyphicon.parent().append('<div class="sr-only message">' + message + '</div>');
      }
    }
    return $glyphicon;
  };

  /**
   * Stop the spinning of a glyphicon progress indicator.
   *
   * @param {jQuery|Element} element
   *   A DOM element.
   */
  Drupal.Ajax.prototype.glyphiconStop = function (element) {
    var $glyphicon = this.findGlyphicon(element);
    if ($glyphicon[0]) {
      $glyphicon.removeClass('glyphicon-spin');
      if (drupalSettings.bootstrap.tooltip_enabled) {
        $glyphicon
          .removeAttr('data-toggle')
          .removeAttr('data-original-title')
          .removeAttr('title')
          .tooltip('destroy')
        ;
      }
    }
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    var $element = $(this.element);

    // Find an existing glyphicon progress indicator.
    var $glyphicon = this.glyphiconStart($element, this.progress.message);
    if ($glyphicon[0]) {
      this.progress.element = $glyphicon.parent();
      this.progress.glyphicon = true;
      return;
    }

    // Otherwise, add a glyphicon throbber after the element.
    if (!this.progress.element) {
      this.progress.element = $(Drupal.theme('ajaxThrobber'));
    }
    if (this.progress.message) {
      this.progress.element.after('<div class="message">' + this.progress.message + '</div>');
    }

    // If element is an input DOM element type (not :input), append after.
    if ($element.is('input')) {
      $element.after(this.progress.element);
    }
    // Otherwise append the throbber inside the element.
    else {
      $element.append(this.progress.element);
    }
  };


  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   * @param {number} status
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.progress.element) {

      // Stop a glyphicon throbber.
      if (this.progress.glyphicon) {
        this.glyphiconStop(this.progress.element);
      }
      // Remove the progress element.
      else {
        this.progress.element.remove();
      }

      // Remove any message set.
      this.progress.element.parent().find('.message').remove();
    }

    // --------------------------------------------------------
    // Everything below is from core/misc/ajax.js.
    // --------------------------------------------------------

    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    var focusChanged = false;
    for (var i in response) {
      if (response.hasOwnProperty(i) && response[i].command && this.commands[response[i].command]) {
        this.commands[response[i].command](this, response[i], status);
        if (response[i].command === 'invoke' && response[i].method === 'focus') {
          focusChanged = true;
        }
      }
    }

    // If the focus hasn't be changed by the ajax commands, try to refocus the
    // triggering element or one of its parents if that element does not exist
    // anymore.
    if (!focusChanged && this.element && !$(this.element).data('disable-refocus')) {
      var target = false;

      for (var n = elementParents.length - 1; !target && n > 0; n--) {
        target = document.querySelector('[data-drupal-selector="' + elementParents[n].getAttribute('data-drupal-selector') + '"]');
      }

      if (target) {
        $(target).trigger('focus');
      }
    }

    // Reattach behaviors, if they were detached in beforeSerialize(). The
    // attachBehaviors() called on the new content from processing the response
    // commands is not sufficient, because behaviors from the entire form need
    // to be reattached.
    if (this.$form) {
      var settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }

    // Remove any response-specific settings so they don't get used on the next
    // call by mistake.
    this.settings = null;
  };

})(jQuery, this, Drupal, drupalSettings);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  function mapTextContentToAjaxResponse(content) {
    if (content === '') {
      return false;
    }

    try {
      return JSON.parse(content);
    } catch (e) {
      return false;
    }
  }

  function bigPipeProcessPlaceholderReplacement(index, placeholderReplacement) {
    var placeholderId = placeholderReplacement.getAttribute('data-big-pipe-replacement-for-placeholder-with-id');
    var content = this.textContent.trim();

    if (typeof drupalSettings.bigPipePlaceholderIds[placeholderId] !== 'undefined') {
      var response = mapTextContentToAjaxResponse(content);

      if (response === false) {
        $(this).removeOnce('big-pipe');
      } else {
        var ajaxObject = Drupal.ajax({
          url: '',
          base: false,
          element: false,
          progress: false
        });

        ajaxObject.success(response, 'success');
      }
    }
  }

  var interval = drupalSettings.bigPipeInterval || 50;

  var timeoutID = void 0;

  function bigPipeProcessDocument(context) {
    if (!context.querySelector('script[data-big-pipe-event="start"]')) {
      return false;
    }

    $(context).find('script[data-big-pipe-replacement-for-placeholder-with-id]').once('big-pipe').each(bigPipeProcessPlaceholderReplacement);

    if (context.querySelector('script[data-big-pipe-event="stop"]')) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      return true;
    }

    return false;
  }

  function bigPipeProcess() {
    timeoutID = setTimeout(function () {
      if (!bigPipeProcessDocument(document)) {
        bigPipeProcess();
      }
    }, interval);
  }

  bigPipeProcess();

  $(window).on('load', function () {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    bigPipeProcessDocument(document);
  });
})(jQuery, Drupal, drupalSettings);;
