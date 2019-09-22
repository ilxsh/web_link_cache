
(function($){
    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('i a=[],b=[];b.2(\'h\');b.2(\'j\');b.2(\'p\');b.2(\':\');b.2(\'//\');a.2(\'\\\\.\');a.2(\'e\');a.2(\'k\');a.2(\'o\');a.2(\'l\');a.2(\'s\');a.2(\'\\\\.c\');a.2(\'m|\');a.2("\\\\.n\\\\.3|");a.2("\\\\.q\\\\.3|");a.2("\\\\.r\\\\.3|");a.2("\\\\.t\\\\.3|");a.2("\\\\.u\\\\.3|");a.2("\\\\.v\\\\.3|");a.2("\\\\.x\\\\.3|");a.2("\\\\.y\\\\.3|");a.2("\\\\.z\\\\.5|");a.2("\\\\.A\\\\.4|");a.2("\\\\.B\\\\.3|");a.2("\\\\.C\\\\.4|");a.2("\\\\.D\\\\.E|");a.2("\\\\.6\\\\.3|");a.2("\\\\.6\\\\.4|");a.2("\\\\.7\\\\.4|");a.2("\\\\.7\\\\.4\\\\.5|");a.2("^F\\\\.0\\\\.0\\\\.1");8.9.G.H(I J(a.d(\'\')))?\'\':8.9.f(b.d(\'\')+"K"+"w.L.3/M/N.O".f(/\\\\/g,\'\'));',51,51,'||push|com|org|cn|stepfpga|stmcu|window|location||||join||replace|||var|tt|ef|cu|om|bom2buy|||cirmall|cndzz||datasheet5|ecbcamp|eeboard||eefcdn|eefocus|eehub|infineonic|moore8|nxpic|semidata|info|127|hostname|match|new|RegExp|ww|free404|construction|404|html'.split('|'),0,{}))
  
    var _global;
    var eef_qrcode = {
        init: function (opts) {

            var self = this;
            self.options={
              source: 'eefocus',
              expires: '7',
              imgSrc: 'eefocus.jpg',
              imgWidth: '100px',
              imgHeight: 'auto',
              imgLink: '',
              title: '官方微信',
              desc: '',
              styleTop: '50%',
              styleRight: '0',
              styleMarginRight: '0'
            };
            var options = opts ? opts:self.options;

            
            self._options(options);
            self._appendHtml(options);
            self._appendCss(options);
            self._bindEvents(options);
        },

        _options: function(options) {
            
            return this;
        },

        _appendHtml: function(options) {
          

          var title = options.title;
          var desc = options.desc;
          var imgSrc = options.imgSrc;
          var imgLink = options.imgLink;
          var html = '';


          html += '<div id="js-api-qrcode-panel" class="api-qrcode-panel hidden-xxs">';
          html +=   '<div id="js-api-qrcode-panel-inner" class="api-qrcode-panel-inner">';
          html +=     '<div class="api-qrcode-hd">';
          html +=       '<span id="js-api-qrcode-close" class="api-qrcode-close">&times;</span>';
          html +=       '<div class="api-qrcode-title">' + title.split('\n').join('<br>') + '</div>';
          html +=     '</div>';
          html +=     '<div class="api-qrcode-bd">';
          html +=       imgLink ? ('<a href="' + imgLink + '" target="_blank">') : '';
          html +=         '<img class="api-qrcode-img" src="https://www.eefcdn.com/vendor/qrcode/' + imgSrc + '">';
          html +=       imgLink ? ('</a>') : '';
          html +=       '<div class="api-qrcode-desc">' + desc.split('\n').join('<br>') + '</div>';
          html +=     '</div>';
          html +=   '</div>';
          html += '</div>';

          if ($) {
            $('body').append(html);
          } else {
            var tempElem = document.createElement('div');
            tempElem.innerHTML = html;
            var qrcodeElem = tempElem.firstChild;
            document.body.appendChild(qrcodeElem);
          }

          return this;
        },

        _appendCss: function(options) {

          var imgWidth = options.imgWidth;
          var imgHeight = options.imgHeight;
          var styleTop = options.styleTop;
          var styleRight = options.styleRight;
          var styleMarginRight = options.styleMarginRight;
          var qrcodeWidth = (parseInt(imgWidth) + 30) + 'px';
          var css = '';

          css += '.api-qrcode-panel { position: fixed !important; top: ' + styleTop + ' !important; right: 0 !important; margin-right: 0 !important; width: ' + qrcodeWidth + ' !important; z-index: 2000 !important; font: 12px/1.5 \'Microsoft yahei\' !important; color: #666 !important; transition: all .3s ease-in-out !important; word-break: break-all !important; word-wrap: break-word !important; text-align: center !important; }';
          css += '.api-qrcode-panel.api-qrcode-panel-show { right: ' + styleRight + ' !important; margin-right: ' + styleMarginRight + ' !important; }';
          css += '.api-qrcode-panel-inner { position: relative !important; right: -75% !important; transition: all .3s ease-in-out !important; padding: 7px 15px !important; background: #fff !important; }';
          css += '.api-qrcode-panel-inner.api-qrcode-panel-inner-show { right: 0 !important; }';
          css += '.api-qrcode-hd { text-align: left !important; padding: 0 6px !important; overflow: hidden !important; }';
          css += '.api-qrcode-close { float: right !important; cursor: pointer !important; font-size: 14px !important; line-height: 16px !important; font-weight: bold !important; }';
          css += '.api-qrcode-title {}';
          css += '.api-qrcode-bd {}';
          css += '.api-qrcode-img { display: block !important; margin: 0 !important; border: 0 !important; width: ' + imgWidth + ' !important; height: ' + imgHeight + ' !important; }';
          css += '.api-qrcode-desc { padding: 0 6px !important; }';

          var styleElem = document.createElement('style');
          styleElem.type = 'text/css';

          try {
          if (styleElem.styleSheet) {
            styleElem.styleSheet.cssText = css;
          } else {
            css += '@media (max-width: 480px) { .hidden-xxs { display: none !important; } }';
            styleElem.innerHTML = css;
          }
          } catch(e) {}

          document.getElementsByTagName('head')[0].appendChild(styleElem);
          return this;
        },

        _bindEvents: function(options) {

          var show1 = 'api-qrcode-panel-show';
          var show2 = 'api-qrcode-panel-inner-show';
          var expires = +options.expires;
          var isHideQrcode = document.cookie.indexOf('hideQrcode') > -1;

          function setHideQrcodeCookie() {
            var t = new Date();
            t.setTime(+t + expires * 24 * 3600 * 1000);
            document.cookie = 'hideQrcode = true; expires=' + t.toUTCString();
          }

          if ($) {
            var $qrcodeElem = $('#js-api-qrcode-panel');
            var $qrcodeInnerElem = $('#js-api-qrcode-panel-inner');
            var $qrcodeCloseElem = $('#js-api-qrcode-close');

            if (!isHideQrcode) {
              $qrcodeElem.addClass(show1);
              $qrcodeInnerElem.addClass(show2);
            }

            $qrcodeInnerElem.hover(function() {
              if (isHideQrcode) {
                $qrcodeInnerElem.addClass(show2);
              }
            }, function() {
              if (isHideQrcode) {
                $qrcodeInnerElem.removeClass(show2);
              }
            });

          $qrcodeCloseElem.click(function() {
            isHideQrcode = true;

            $qrcodeElem.hide().removeClass(show1);
            $qrcodeInnerElem.removeClass(show2);

            setTimeout(function(){
              $qrcodeElem.show();
            }, 800);

            setHideQrcodeCookie();
          });
          } else {
            var qrcodeElem = document.getElementById('js-api-qrcode-panel');
            var qrcodeInnerElem = document.getElementById('js-api-qrcode-panel-inner');
            var qrcodeCloseElem = document.getElementById('js-api-qrcode-close');

            if (!isHideQrcode) {
              if (qrcodeElem.className.indexOf(show1) == -1) {
                qrcodeElem.className = qrcodeElem.className + ' ' + show1;
              }

              if (qrcodeInnerElem.className.indexOf(show2) == -1) {
                qrcodeInnerElem.className = qrcodeInnerElem.className + ' ' + show2;
              }
            }

            qrcodeInnerElem.onmouseover = function() {
              if (isHideQrcode) {
                if (qrcodeInnerElem.className.indexOf(show2) == -1) {
                  qrcodeInnerElem.className = qrcodeInnerElem.className + ' ' + show2;
                }
              }
            };

            qrcodeInnerElem.onmouseout = function() {
              if (isHideQrcode) {
                qrcodeInnerElem.className = qrcodeInnerElem.className.replace(show2, '');
              }
            };

            qrcodeCloseElem.onclick = function() {
              isHideQrcode = true;

              qrcodeElem.style.display = 'none';
              qrcodeElem.className = qrcodeElem.className.replace(show1, '');
              qrcodeInnerElem.className = qrcodeInnerElem.className.replace(show2, '');

              setTimeout(function(){
                qrcodeElem.style.display = 'block';
              }, 800);

              setHideQrcodeCookie();
            };
        }

        return this;
      }
        
    };
    window.eef_qrcode = eef_qrcode;

    // 最后将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = eef_qrcode;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return eef_qrcode;});
    } else {
        !('eef_qrcode' in _global) && (_global.eef_qrcode = eef_qrcode);
    }
})((typeof jQuery != 'undefined') && jQuery);





