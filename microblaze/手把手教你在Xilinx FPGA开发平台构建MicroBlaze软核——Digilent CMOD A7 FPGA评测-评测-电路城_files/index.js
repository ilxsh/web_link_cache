/**
 * @summary Plugin
 */

/* myScroll */
(function ($) {
  $.fn.myScroll = function (options) {
    var init = {
      items: 1, //一行有几项内容
      speed: 3000, //滚动速度
      moveHeight: 22 // 行高
    };

    var intId = [];
    var opts = $.extend({}, init, options);

    function moveUp(obj) {
      obj.animate({
          marginTop: '-' + opts.moveHeight + 'px'
        },
        1000,
        function () {
          var $this = $(this);
          $this.find('li').slice(0, opts.items).appendTo($this);
          $this.css('margin-top', 0);
        })
    }

    this.each(function (i) {
      var sh = opts.moveHeight,
        speed = opts.speed,
        items = opts.items,
        $this = $(this);

      intId[i] = setInterval(timerEvent, speed);

      $this.hover(function () {
        clearInterval(intId[i]);
      }, function () {
        intId[i] = setInterval(timerEvent, speed);
      });
      var len = $this.find('li').length;
      if (len > items && len <= items * 2) {
        $this.html($this.html() + $this.html());
      }

      function timerEvent() {
        var len = $this.find('li').length;
        if (len > items && len <= items * 2) {
          len /= 2;
        }
        if (len <= items) {
          clearInterval(intId[i]);
        } else {
          moveUp($this, sh);
        }
      }
    });
  }
})(jQuery);

/**
 * @summary 定义全局变量 homepageInit
 */

var homepageInit = {
  headTabEvent: function (obj) {
    var $headTab = obj;
    var $content = $headTab.next().children();
    $headTab.on("click", "span", function () {
      var $this = $(this),
        index = $this.index();
      $this
        .removeClass("other")
        .siblings()
        .addClass("other");

      $content
        .eq(index)
        .show()
        .siblings()
        .hide();
    });
  },
  addToWishList: function (obj) {
    obj.click(function (event) {
      if ($(this).hasClass("loading")) return false;
      var target = event.target || event.srcElement;
      var url = $(target).attr("href");

      $(this).addClass("loading");
      $.ajax({
          url: url,
          method: "GET",
          context: $(this)
        })
        .done(function (data) {
          if (data && !data.error) {
            if (data.wished) {
              this.addClass("on");
            } else {
              this.removeClass("on");
            }
          }
        })
        .fail(function (jqXHR, textStatus) {
          location.href = "/signin";
        })
        .always(function () {
          this.removeClass("loading");
        });
      return false;
    });
  },
  getScrollLists: function (height) {
    var i = 0,
      $lists = $('.scroll-lists');
    for (; i < $lists.length; i++) {
      var _this = $lists[i];
      var len = $(_this).find('li').length;
      if (len > 3) {
        $(_this).myScroll({
          items: 1,
          speed: 3000,
          moveHeight: height || 30
        });
      }
    }
  },
  isMobile: function() {
    return navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) ? true : false;
  },
  navSrollEvent: function(that) {
    var $cirmallHeader = $('#cirmall_header');
    var $entranceHeader = $('#entrance-header');
    var st = that ? $(that).scrollTop() : 87;
    var lastScrollTop = 85;
    if(st > lastScrollTop) {
      $entranceHeader.hide();
      $cirmallHeader.css({
        'position': 'fixed',
        'top': '0'
      });
      $('body').css({
        'paddingTop': '135px'
      });
    } else {
      $entranceHeader.show();
      $cirmallHeader.css({
        'position': 'static',
      });
      $('body').css({
        'paddingTop': 0
      });
    }
    lastScrollTop = st;
  },
  // And more event

};

/**
 * @func
 * @desc 标签云函数
 * @param {object} target - 参数target为一个对象
 * @param {boolean} isColor - 参数isColor为是否需要随机字体颜色
 * @param {number} size - 参数size为可选字体大小，默认12
 */
function tagCloud(target, isColor, size) {
  var $hotTagItem = $(target).find('a');
  var $fontColor = ['#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#4a4a4a', '#6a6a6a'];

  for (var i = 0, l = $hotTagItem.length; i < l; i++) {
    var $this = $($hotTagItem[i]);
    var randomNum = Math.random() * 10;
    $this.css({
      fontSize: (size || 12) + Math.ceil(randomNum) + 'px'
    });
    if (isColor) {  // 首页
      $this.css({
        color: $fontColor[Math.floor(randomNum)]
      });
    } else {  // 侧边栏
      var colorRandom = Math.random();
      $this.css({
        opacity: colorRandom >= 0.6 ? colorRandom : colorRandom + 0.5
      })
    }
  }
}

function getRandAd(target) {
  var html = '';
  $.get('/cirmall/random-ad', function (data) {
    if (data) {
      html += '<a href=" ' + data.randAd.link + ' " rel="nofollow" target="_blank"><img src=" ' + data.randAd.imageUrl + ' "/></a>';
      $(target).html(html);
    }
  })
}

// 获取广告右侧活动列表
function getActivityItem() {
  $.get('/cirmall/activity-item', function(data) {
    var html = '', 
      len, 
      $scrollLists = $('#scrollLists'),
      items = data.activity3;
    if(!items) return;
    $.each(items, function(i, item) {
      html += '<li><a class="eeb-ellipsis-1" href="' + item.url + '" target="_blank">' + item.title + '</a></li>';
    });
    $scrollLists.html(html);
    len = $scrollLists.find('li').length;
    if(len > 3) {
      homepageInit.getScrollLists(24);
    }
  });
}

$(function() {

  homepageInit.getScrollLists();

  // 移动端导航
  if(homepageInit.isMobile()) {
    $(window).scroll(function(event) {
      homepageInit.navSrollEvent($(this));
    });
    $('#cirmall_header .navbar-toggle').on('click', function() {
      var $body = $('html, body'),
        $cirmallHeader = $('#cirmall_header'),
        $mobileModal = $('#mobileModal');
        
      if(!$body.is(':animated')) {
        if($mobileModal.is(':hidden')) {
          $cirmallHeader.addClass('navbar-fixed-top-position');
          $('body').addClass('body-overflow');
          $('html').addClass('html-fixed');
          $mobileModal.show();
        } else {
          $cirmallHeader.removeClass('navbar-fixed-top-position');
          $('html').removeClass('html-fixed');
          $('body').removeClass('body-overflow');
          $('html').removeClass('html-fixed');
          $mobileModal.hide();
        }
      }
      
    });
  }
})
