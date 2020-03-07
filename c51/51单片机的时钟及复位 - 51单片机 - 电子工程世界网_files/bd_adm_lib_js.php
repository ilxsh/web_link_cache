
function setCookie(cookieName, cookieValue) {
	var expires = new Date();
	var seconds = 365*24*3600*3000;
	expires.setTime(expires.getTime() + seconds * 2000);
	domain = 'eeworld.com.cn';
	document.cookie = escape(cookieName) + '=' + escape(cookieValue)
		+ (expires ? '; expires=' + expires.toGMTString() : '')
		+ ';path=/'
		+ (domain ? '; domain=' + domain : '');
}

function getCookie(name) {
	var cookie_start = document.cookie.indexOf(name);
	var cookie_end = document.cookie.indexOf(";", cookie_start);
	if(cookie_start == -1) {
		return '';
	} else {
		var v = document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length));
		return unescape(v);
	}
}

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

(function($){
	
	$(function(){
		
		var baidu_adm_arr = new Array();

		 baidu_adm_arr['200661'] = []; 
  baidu_adm_arr['200662'] = []; 
  baidu_adm_arr['200659'] = ['0*0']; 
  baidu_adm_arr['200660'] = []; 
  baidu_adm_arr['200663'] = ['208*262']; 
  baidu_adm_arr['200664'] = []; 
  baidu_adm_arr['200579'] = ['521*261']; 
  baidu_adm_arr['5444914'] = ['468*203']; 
  baidu_adm_arr['200599'] = []; 
  baidu_adm_arr['200600'] = []; 
  baidu_adm_arr['200601'] = []; 
  baidu_adm_arr['200602'] = []; 
  baidu_adm_arr['200603'] = []; 
  baidu_adm_arr['200604'] = []; 
  baidu_adm_arr['200605'] = []; 
  baidu_adm_arr['200606'] = []; 
  baidu_adm_arr['200607'] = []; 
  baidu_adm_arr['200608'] = []; 
  baidu_adm_arr['218884'] = []; 
  baidu_adm_arr['647665'] = []; 
  baidu_adm_arr['1096846'] = ['400*300']; 
  baidu_adm_arr['1099489'] = []; 
  baidu_adm_arr['200609'] = []; 
  baidu_adm_arr['200612'] = []; 
  baidu_adm_arr['200613'] = []; 
  baidu_adm_arr['200614'] = []; 
  baidu_adm_arr['200615'] = []; 
  baidu_adm_arr['200616'] = []; 
  baidu_adm_arr['200617'] = []; 
  baidu_adm_arr['200618'] = []; 
  baidu_adm_arr['218885'] = []; 
  baidu_adm_arr['477876'] = ['0*0']; 
  baidu_adm_arr['587578'] = []; 
  baidu_adm_arr['587580'] = []; 
  baidu_adm_arr['771108'] = []; 
  baidu_adm_arr['2061781'] = []; 
  baidu_adm_arr['200619'] = []; 
  baidu_adm_arr['200620'] = []; 
  baidu_adm_arr['200621'] = []; 
  baidu_adm_arr['200622'] = []; 
  baidu_adm_arr['200623'] = []; 
  baidu_adm_arr['200624'] = []; 
  baidu_adm_arr['200625'] = []; 
  baidu_adm_arr['200626'] = []; 
  baidu_adm_arr['200627'] = []; 
  baidu_adm_arr['200581'] = ['0*0']; 
  baidu_adm_arr['200628'] = []; 
  baidu_adm_arr['218886'] = []; 
  baidu_adm_arr['200582'] = ['0*0']; 
  baidu_adm_arr['647669'] = []; 
  baidu_adm_arr['200584'] = ['372*110']; 
  baidu_adm_arr['200629'] = []; 
  baidu_adm_arr['5444916'] = ['0*0']; 
  baidu_adm_arr['200630'] = []; 
  baidu_adm_arr['200586'] = ['0*0']; 
  baidu_adm_arr['200631'] = []; 
  baidu_adm_arr['200632'] = []; 
  baidu_adm_arr['200587'] = []; 
  baidu_adm_arr['200633'] = []; 
  baidu_adm_arr['200634'] = []; 
  baidu_adm_arr['200635'] = []; 
  baidu_adm_arr['200588'] = []; 
  baidu_adm_arr['200636'] = []; 
  baidu_adm_arr['200589'] = []; 
  baidu_adm_arr['200637'] = []; 
  baidu_adm_arr['200638'] = []; 
  baidu_adm_arr['200590'] = ['0*0']; 
  baidu_adm_arr['218887'] = []; 
  baidu_adm_arr['200591'] = ['1127*662']; 
  baidu_adm_arr['647793'] = []; 
  baidu_adm_arr['200592'] = ['0*0']; 
  baidu_adm_arr['200593'] = []; 
  baidu_adm_arr['200594'] = ['-3*64']; 
  baidu_adm_arr['200595'] = []; 
  baidu_adm_arr['200596'] = []; 
  baidu_adm_arr['200597'] = []; 
  baidu_adm_arr['200598'] = []; 
  baidu_adm_arr['272782'] = ['384*318']; 
  baidu_adm_arr['272783'] = ['0*0']; 
  baidu_adm_arr['305022'] = ['1769*957']; 
  baidu_adm_arr['200639'] = []; 
  baidu_adm_arr['456162'] = ['400*300']; 
  baidu_adm_arr['200640'] = []; 
  baidu_adm_arr['200641'] = []; 
  baidu_adm_arr['468965'] = ['242*80']; 
  baidu_adm_arr['200642'] = []; 
  baidu_adm_arr['468966'] = ['0*0']; 
  baidu_adm_arr['200643'] = []; 
  baidu_adm_arr['200644'] = []; 
  baidu_adm_arr['916518'] = ['0*0']; 
  baidu_adm_arr['200645'] = []; 
  baidu_adm_arr['1047347'] = ['0*0']; 
  baidu_adm_arr['200646'] = []; 
  baidu_adm_arr['2078109'] = ['384*318']; 
  baidu_adm_arr['200647'] = []; 
  baidu_adm_arr['200648'] = []; 
  baidu_adm_arr['218888'] = []; 
  baidu_adm_arr['647795'] = []; 
  baidu_adm_arr['1065582'] = []; 
  baidu_adm_arr['200649'] = ['0*0']; 
  baidu_adm_arr['200650'] = []; 
  baidu_adm_arr['200651'] = []; 
  baidu_adm_arr['200652'] = ['-31968*-31877']; 
  baidu_adm_arr['200653'] = []; 
  baidu_adm_arr['200654'] = []; 
  baidu_adm_arr['200655'] = []; 
  baidu_adm_arr['200656'] = []; 
  baidu_adm_arr['200657'] = []; 
  baidu_adm_arr['200658'] = ['0*0']; 
  baidu_adm_arr['218889'] = []; 
  baidu_adm_arr['600257'] = ['-31968*-31877']; 
  baidu_adm_arr['1099492'] = []; 
  baidu_adm_arr['200665'] = []; 
  baidu_adm_arr['200666'] = []; 
  baidu_adm_arr['200667'] = []; 
  baidu_adm_arr['200668'] = []; 
  baidu_adm_arr['218890'] = []; 
  baidu_adm_arr['647801'] = []; 
  baidu_adm_arr['200669'] = []; 
  baidu_adm_arr['200670'] = []; 
  baidu_adm_arr['200671'] = []; 
  baidu_adm_arr['200672'] = []; 
  baidu_adm_arr['200673'] = []; 
  baidu_adm_arr['200674'] = []; 
  baidu_adm_arr['200675'] = []; 
  baidu_adm_arr['200676'] = []; 
  baidu_adm_arr['200677'] = []; 
  baidu_adm_arr['200678'] = []; 
  baidu_adm_arr['218891'] = []; 
  baidu_adm_arr['568011'] = []; 
  baidu_adm_arr['1110415'] = []; 
  baidu_adm_arr['203631'] = []; 
  baidu_adm_arr['203632'] = []; 
  baidu_adm_arr['203633'] = []; 
  baidu_adm_arr['203634'] = []; 
  baidu_adm_arr['203635'] = []; 
  baidu_adm_arr['203636'] = []; 
  baidu_adm_arr['203637'] = []; 
  baidu_adm_arr['203638'] = []; 
  baidu_adm_arr['203639'] = []; 
  baidu_adm_arr['203640'] = []; 
  baidu_adm_arr['218892'] = []; 
  baidu_adm_arr['647806'] = []; 
  baidu_adm_arr['203641'] = ['0*0']; 
  baidu_adm_arr['203642'] = []; 
  baidu_adm_arr['203643'] = []; 
  baidu_adm_arr['203644'] = []; 
  baidu_adm_arr['203645'] = []; 
  baidu_adm_arr['203646'] = []; 
  baidu_adm_arr['203647'] = []; 
  baidu_adm_arr['203648'] = []; 
  baidu_adm_arr['203649'] = []; 
  baidu_adm_arr['203650'] = []; 
  baidu_adm_arr['218893'] = []; 
  baidu_adm_arr['647809'] = []; 
  baidu_adm_arr['893202'] = []; 
  baidu_adm_arr['1110414'] = []; 
  baidu_adm_arr['203651'] = []; 
  baidu_adm_arr['203654'] = []; 
  baidu_adm_arr['203655'] = []; 
  baidu_adm_arr['203656'] = []; 
  baidu_adm_arr['203657'] = []; 
  baidu_adm_arr['203658'] = []; 
  baidu_adm_arr['203659'] = []; 
  baidu_adm_arr['218894'] = []; 
  baidu_adm_arr['234017'] = []; 
  baidu_adm_arr['4187872'] = ['0*0']; 
  baidu_adm_arr['583047'] = []; 
  baidu_adm_arr['647817'] = []; 
  baidu_adm_arr['891039'] = []; 
  baidu_adm_arr['1049923'] = []; 
  baidu_adm_arr['1084136'] = []; 
  baidu_adm_arr['1048152'] = []; 
  baidu_adm_arr['203661'] = []; 
  baidu_adm_arr['203662'] = []; 
  baidu_adm_arr['203663'] = []; 
  baidu_adm_arr['203664'] = []; 
  baidu_adm_arr['203665'] = []; 
  baidu_adm_arr['203666'] = []; 
  baidu_adm_arr['203667'] = []; 
  baidu_adm_arr['203668'] = []; 
  baidu_adm_arr['203669'] = []; 
  baidu_adm_arr['203670'] = []; 
  baidu_adm_arr['218895'] = []; 
  baidu_adm_arr['647820'] = []; 
  baidu_adm_arr['2069185'] = []; 
  baidu_adm_arr['203671'] = ['0*0']; 
  baidu_adm_arr['203674'] = []; 
  baidu_adm_arr['203675'] = []; 
  baidu_adm_arr['203676'] = []; 
  baidu_adm_arr['203677'] = []; 
  baidu_adm_arr['203678'] = []; 
  baidu_adm_arr['203679'] = []; 
  baidu_adm_arr['203680'] = []; 
  baidu_adm_arr['218896'] = []; 
  baidu_adm_arr['475362'] = ['0*0']; 
  baidu_adm_arr['475365'] = []; 
  baidu_adm_arr['648244'] = []; 
  baidu_adm_arr['891037'] = []; 
  baidu_adm_arr['972211'] = []; 
  baidu_adm_arr['1091887'] = ['0*0']; 
  baidu_adm_arr['203681'] = []; 
  baidu_adm_arr['203682'] = []; 
  baidu_adm_arr['203683'] = []; 
  baidu_adm_arr['203684'] = []; 
  baidu_adm_arr['203685'] = []; 
  baidu_adm_arr['203686'] = []; 
  baidu_adm_arr['203687'] = []; 
  baidu_adm_arr['203688'] = []; 
  baidu_adm_arr['203689'] = []; 
  baidu_adm_arr['203690'] = []; 
  baidu_adm_arr['218897'] = []; 
  baidu_adm_arr['648248'] = []; 
  baidu_adm_arr['203691'] = []; 
  baidu_adm_arr['203692'] = []; 
  baidu_adm_arr['203693'] = []; 
  baidu_adm_arr['203694'] = []; 
  baidu_adm_arr['203695'] = []; 
  baidu_adm_arr['203696'] = []; 
  baidu_adm_arr['203697'] = []; 
  baidu_adm_arr['203698'] = []; 
  baidu_adm_arr['203699'] = []; 
  baidu_adm_arr['203700'] = []; 
  baidu_adm_arr['218898'] = []; 
  baidu_adm_arr['648251'] = []; 
  baidu_adm_arr['203701'] = []; 
  baidu_adm_arr['203702'] = []; 
  baidu_adm_arr['203703'] = []; 
  baidu_adm_arr['203704'] = []; 
  baidu_adm_arr['203705'] = []; 
  baidu_adm_arr['203706'] = []; 
  baidu_adm_arr['203707'] = []; 
  baidu_adm_arr['203708'] = []; 
  baidu_adm_arr['203709'] = []; 
  baidu_adm_arr['203710'] = []; 
  baidu_adm_arr['218899'] = []; 
  baidu_adm_arr['648252'] = []; 
  baidu_adm_arr['891038'] = []; 
  baidu_adm_arr['1074384'] = []; 
  baidu_adm_arr['203711'] = []; 
  baidu_adm_arr['203712'] = []; 
  baidu_adm_arr['203713'] = []; 
  baidu_adm_arr['203714'] = []; 
  baidu_adm_arr['203715'] = []; 
  baidu_adm_arr['203716'] = []; 
  baidu_adm_arr['203717'] = []; 
  baidu_adm_arr['203718'] = []; 
  baidu_adm_arr['203719'] = []; 
  baidu_adm_arr['203720'] = []; 
  baidu_adm_arr['218900'] = []; 
  baidu_adm_arr['648255'] = []; 
  baidu_adm_arr['867584'] = []; 
  baidu_adm_arr['867585'] = []; 
  baidu_adm_arr['867586'] = []; 
  baidu_adm_arr['867587'] = []; 
  baidu_adm_arr['867588'] = []; 
  baidu_adm_arr['923813'] = []; 
  baidu_adm_arr['999639'] = []; 
  baidu_adm_arr['999640'] = []; 
  baidu_adm_arr['1048149'] = []; 
  baidu_adm_arr['1048156'] = []; 
  baidu_adm_arr['317036'] = []; 
  baidu_adm_arr['428831'] = []; 
  baidu_adm_arr['428832'] = []; 
  baidu_adm_arr['428835'] = []; 
  baidu_adm_arr['200729'] = []; 
  baidu_adm_arr['957712'] = []; 
  baidu_adm_arr['957711'] = []; 
  baidu_adm_arr['957708'] = []; 
  baidu_adm_arr['957707'] = []; 
  baidu_adm_arr['907383'] = []; 
  baidu_adm_arr['907381'] = ['596*145']; 
  baidu_adm_arr['879729'] = []; 
  baidu_adm_arr['870116'] = []; 
  baidu_adm_arr['612851'] = ['490*118']; 
  baidu_adm_arr['522493'] = []; 
  baidu_adm_arr['564021'] = []; 
  baidu_adm_arr['564022'] = []; 
  baidu_adm_arr['732817'] = []; 
  baidu_adm_arr['732818'] = []; 
  baidu_adm_arr['749404'] = []; 
  baidu_adm_arr['749405'] = []; 
  baidu_adm_arr['782771'] = []; 
  baidu_adm_arr['782773'] = []; 
  baidu_adm_arr['782774'] = []; 
  baidu_adm_arr['782775'] = []; 
  baidu_adm_arr['200714'] = []; 
  baidu_adm_arr['200715'] = []; 
  baidu_adm_arr['200716'] = []; 
  baidu_adm_arr['200717'] = []; 
  baidu_adm_arr['200718'] = []; 
  baidu_adm_arr['200719'] = []; 
  baidu_adm_arr['200720'] = []; 
  baidu_adm_arr['200721'] = []; 
  baidu_adm_arr['200722'] = []; 
  baidu_adm_arr['200723'] = []; 
  baidu_adm_arr['956222'] = []; 
  baidu_adm_arr['200730'] = []; 
  baidu_adm_arr['200731'] = []; 
  baidu_adm_arr['200732'] = []; 
  baidu_adm_arr['200733'] = []; 
  baidu_adm_arr['200734'] = []; 
  baidu_adm_arr['202714'] = []; 
  baidu_adm_arr['202715'] = []; 
  baidu_adm_arr['202716'] = []; 
  baidu_adm_arr['202717'] = []; 
  baidu_adm_arr['202718'] = []; 
  baidu_adm_arr['202719'] = []; 
  baidu_adm_arr['202720'] = []; 
  baidu_adm_arr['202721'] = []; 
  baidu_adm_arr['202722'] = []; 
  baidu_adm_arr['202723'] = []; 
  baidu_adm_arr['202724'] = []; 
  baidu_adm_arr['202725'] = []; 
  baidu_adm_arr['202726'] = []; 
  baidu_adm_arr['202727'] = []; 
  baidu_adm_arr['202728'] = []; 
  baidu_adm_arr['202729'] = []; 
  baidu_adm_arr['202730'] = []; 
  baidu_adm_arr['202731'] = []; 
  baidu_adm_arr['202732'] = []; 
  baidu_adm_arr['202733'] = []; 
  baidu_adm_arr['202734'] = []; 
  baidu_adm_arr['202735'] = []; 
  baidu_adm_arr['202736'] = []; 
  baidu_adm_arr['202737'] = []; 
  baidu_adm_arr['202738'] = []; 
  baidu_adm_arr['202739'] = []; 
  baidu_adm_arr['202740'] = []; 
  baidu_adm_arr['202741'] = []; 
  baidu_adm_arr['202742'] = []; 
  baidu_adm_arr['202743'] = []; 
  baidu_adm_arr['202744'] = []; 
  baidu_adm_arr['202745'] = []; 
  baidu_adm_arr['202746'] = []; 
  baidu_adm_arr['202747'] = []; 
  baidu_adm_arr['202748'] = []; 
  baidu_adm_arr['202749'] = []; 
  baidu_adm_arr['202750'] = []; 
  baidu_adm_arr['202751'] = []; 
  baidu_adm_arr['202752'] = []; 
  baidu_adm_arr['202753'] = []; 
  baidu_adm_arr['202754'] = []; 
  baidu_adm_arr['202755'] = []; 
  baidu_adm_arr['202756'] = []; 
  baidu_adm_arr['202757'] = []; 
  baidu_adm_arr['202758'] = []; 
  baidu_adm_arr['202759'] = []; 
  baidu_adm_arr['202760'] = []; 
  baidu_adm_arr['202761'] = []; 
  baidu_adm_arr['202762'] = []; 
  baidu_adm_arr['202763'] = []; 
  baidu_adm_arr['202764'] = []; 
  baidu_adm_arr['202765'] = []; 
  baidu_adm_arr['202766'] = []; 
  baidu_adm_arr['202767'] = []; 
  baidu_adm_arr['202768'] = []; 
  baidu_adm_arr['202769'] = []; 
  baidu_adm_arr['202770'] = []; 
  baidu_adm_arr['218575'] = []; 
  baidu_adm_arr['301942'] = []; 
  baidu_adm_arr['301943'] = []; 
  baidu_adm_arr['301944'] = []; 
  baidu_adm_arr['301945'] = []; 
  baidu_adm_arr['301946'] = []; 
  baidu_adm_arr['301947'] = []; 
  baidu_adm_arr['301948'] = []; 
  baidu_adm_arr['580328'] = []; 
  baidu_adm_arr['580344'] = []; 
  baidu_adm_arr['597482'] = []; 
  baidu_adm_arr['597485'] = []; 
  baidu_adm_arr['597488'] = []; 
  baidu_adm_arr['597490'] = []; 
  baidu_adm_arr['597491'] = []; 
  baidu_adm_arr['597492'] = []; 
  baidu_adm_arr['599744'] = []; 
  baidu_adm_arr['599747'] = []; 
  baidu_adm_arr['788561'] = []; 
  baidu_adm_arr['788562'] = []; 
  baidu_adm_arr['788563'] = []; 
  baidu_adm_arr['788564'] = []; 
  baidu_adm_arr['920539'] = []; 
  baidu_adm_arr['920541'] = []; 
  baidu_adm_arr['920542'] = []; 
  baidu_adm_arr['986833'] = []; 
  baidu_adm_arr['200735'] = []; 
  baidu_adm_arr['200736'] = []; 
  baidu_adm_arr['200737'] = ['*107','*106','*108','*113','*114','*112','*109','*105','*111','*110','*104','*0','*103']; 
  baidu_adm_arr['200738'] = []; 
  baidu_adm_arr['200739'] = []; 
  baidu_adm_arr['200740'] = []; 
  baidu_adm_arr['202418'] = []; 
  baidu_adm_arr['202419'] = []; 
  baidu_adm_arr['202420'] = []; 
  baidu_adm_arr['202421'] = []; 
  baidu_adm_arr['202422'] = []; 
  baidu_adm_arr['202423'] = []; 
  baidu_adm_arr['202424'] = []; 
  baidu_adm_arr['202425'] = []; 
  baidu_adm_arr['202426'] = []; 
  baidu_adm_arr['202427'] = []; 
  baidu_adm_arr['202428'] = []; 
  baidu_adm_arr['202429'] = []; 
  baidu_adm_arr['202430'] = []; 
  baidu_adm_arr['202431'] = []; 
  baidu_adm_arr['202432'] = []; 
  baidu_adm_arr['202433'] = []; 
  baidu_adm_arr['202434'] = []; 
  baidu_adm_arr['202435'] = []; 
  baidu_adm_arr['202436'] = []; 
  baidu_adm_arr['202437'] = []; 
  baidu_adm_arr['202438'] = []; 
  baidu_adm_arr['202439'] = []; 
  baidu_adm_arr['202440'] = []; 
  baidu_adm_arr['202441'] = []; 
  baidu_adm_arr['202442'] = []; 
  baidu_adm_arr['202443'] = []; 
  baidu_adm_arr['202444'] = []; 
  baidu_adm_arr['202771'] = []; 
  baidu_adm_arr['202772'] = []; 
  baidu_adm_arr['202773'] = []; 
  baidu_adm_arr['202774'] = []; 
  baidu_adm_arr['202775'] = ['*117','*104']; 
  baidu_adm_arr['202776'] = []; 
  baidu_adm_arr['202777'] = []; 
  baidu_adm_arr['202778'] = []; 
  baidu_adm_arr['202779'] = []; 
  baidu_adm_arr['202780'] = []; 
  baidu_adm_arr['202781'] = []; 
  baidu_adm_arr['202782'] = []; 
  baidu_adm_arr['202783'] = []; 
  baidu_adm_arr['202784'] = []; 
  baidu_adm_arr['202785'] = []; 
  baidu_adm_arr['202786'] = []; 
  baidu_adm_arr['202787'] = []; 
  baidu_adm_arr['202788'] = []; 
  baidu_adm_arr['202789'] = []; 
  baidu_adm_arr['202790'] = []; 
  baidu_adm_arr['202791'] = []; 
  baidu_adm_arr['202792'] = []; 
  baidu_adm_arr['202793'] = []; 
  baidu_adm_arr['202794'] = []; 
  baidu_adm_arr['202795'] = []; 
  baidu_adm_arr['202796'] = []; 
  baidu_adm_arr['202797'] = []; 
  baidu_adm_arr['202798'] = []; 
  baidu_adm_arr['202799'] = []; 
  baidu_adm_arr['202800'] = []; 
  baidu_adm_arr['202801'] = []; 
  baidu_adm_arr['202802'] = []; 
  baidu_adm_arr['202803'] = []; 
  baidu_adm_arr['202804'] = []; 
  baidu_adm_arr['202805'] = []; 
  baidu_adm_arr['202806'] = []; 
  baidu_adm_arr['202807'] = []; 
  baidu_adm_arr['202808'] = []; 
  baidu_adm_arr['202809'] = []; 
  baidu_adm_arr['410035'] = []; 
  baidu_adm_arr['410049'] = []; 
  baidu_adm_arr['410051'] = []; 
  baidu_adm_arr['410054'] = []; 
  baidu_adm_arr['410058'] = []; 
  baidu_adm_arr['410059'] = []; 
  baidu_adm_arr['410566'] = []; 
  baidu_adm_arr['410567'] = []; 
  baidu_adm_arr['410568'] = []; 
  baidu_adm_arr['410569'] = []; 
  baidu_adm_arr['200741'] = ['*104','*105','*113','*111','*114','*106','*107','*112','*103','*109','*110','*108']; 
  baidu_adm_arr['200742'] = []; 
  baidu_adm_arr['200743'] = ['*106','*113','*110','*109','*114','*107','*108','*112','*103','*111','*104','*105']; 
  baidu_adm_arr['200744'] = []; 
  baidu_adm_arr['200745'] = []; 
  baidu_adm_arr['200746'] = []; 
  baidu_adm_arr['202445'] = []; 
  baidu_adm_arr['202446'] = []; 
  baidu_adm_arr['202447'] = []; 
  baidu_adm_arr['202461'] = []; 
  baidu_adm_arr['202475'] = []; 
  baidu_adm_arr['202476'] = []; 
  baidu_adm_arr['202477'] = []; 
  baidu_adm_arr['202478'] = []; 
  baidu_adm_arr['202479'] = []; 
  baidu_adm_arr['202480'] = []; 
  baidu_adm_arr['202481'] = []; 
  baidu_adm_arr['202482'] = []; 
  baidu_adm_arr['202483'] = []; 
  baidu_adm_arr['202484'] = []; 
  baidu_adm_arr['202485'] = []; 
  baidu_adm_arr['202486'] = []; 
  baidu_adm_arr['202487'] = []; 
  baidu_adm_arr['202488'] = []; 
  baidu_adm_arr['202489'] = []; 
  baidu_adm_arr['202490'] = []; 
  baidu_adm_arr['202491'] = []; 
  baidu_adm_arr['202492'] = []; 
  baidu_adm_arr['202493'] = []; 
  baidu_adm_arr['202494'] = []; 
  baidu_adm_arr['202495'] = []; 
  baidu_adm_arr['202496'] = []; 
  baidu_adm_arr['202497'] = []; 
  baidu_adm_arr['202498'] = []; 
  baidu_adm_arr['202499'] = []; 
  baidu_adm_arr['202500'] = []; 
  baidu_adm_arr['202501'] = []; 
  baidu_adm_arr['202502'] = []; 
  baidu_adm_arr['202503'] = []; 
  baidu_adm_arr['202504'] = []; 
  baidu_adm_arr['202505'] = []; 
  baidu_adm_arr['202506'] = []; 
  baidu_adm_arr['202507'] = []; 
  baidu_adm_arr['202508'] = []; 
  baidu_adm_arr['202509'] = []; 
  baidu_adm_arr['202510'] = []; 
  baidu_adm_arr['202511'] = []; 
  baidu_adm_arr['202512'] = []; 
  baidu_adm_arr['202513'] = []; 
  baidu_adm_arr['202514'] = []; 
  baidu_adm_arr['202515'] = []; 
  baidu_adm_arr['202516'] = []; 
  baidu_adm_arr['202517'] = []; 
  baidu_adm_arr['202518'] = []; 
  baidu_adm_arr['202519'] = []; 
  baidu_adm_arr['202520'] = []; 
  baidu_adm_arr['202521'] = []; 
  baidu_adm_arr['202522'] = []; 
  baidu_adm_arr['202523'] = []; 
  baidu_adm_arr['202524'] = []; 
  baidu_adm_arr['202525'] = []; 
  baidu_adm_arr['202526'] = []; 
  baidu_adm_arr['202527'] = []; 
  baidu_adm_arr['202528'] = []; 
  baidu_adm_arr['1107735'] = []; 
  baidu_adm_arr['1107736'] = []; 
  baidu_adm_arr['1107737'] = []; 
  baidu_adm_arr['1128112'] = []; 
  baidu_adm_arr['200726'] = []; 
  baidu_adm_arr['200727'] = ['*80']; 
  baidu_adm_arr['200728'] = []; 
  baidu_adm_arr['891021'] = []; 
  baidu_adm_arr['891022'] = []; 
  baidu_adm_arr['891023'] = ['*78']; 
  baidu_adm_arr['200747'] = []; 
  baidu_adm_arr['200748'] = []; 
  baidu_adm_arr['200749'] = []; 
  baidu_adm_arr['200750'] = []; 
  baidu_adm_arr['200751'] = []; 
  baidu_adm_arr['200752'] = []; 
  baidu_adm_arr['202529'] = []; 
  baidu_adm_arr['202530'] = []; 
  baidu_adm_arr['202531'] = []; 
  baidu_adm_arr['202532'] = []; 
  baidu_adm_arr['202533'] = []; 
  baidu_adm_arr['202534'] = []; 
  baidu_adm_arr['202535'] = []; 
  baidu_adm_arr['202536'] = []; 
  baidu_adm_arr['202537'] = []; 
  baidu_adm_arr['202538'] = []; 
  baidu_adm_arr['202539'] = []; 
  baidu_adm_arr['202540'] = []; 
  baidu_adm_arr['202541'] = []; 
  baidu_adm_arr['202542'] = []; 
  baidu_adm_arr['202543'] = []; 
  baidu_adm_arr['202544'] = []; 
  baidu_adm_arr['202545'] = []; 
  baidu_adm_arr['202546'] = []; 
  baidu_adm_arr['202547'] = []; 
  baidu_adm_arr['202548'] = []; 
  baidu_adm_arr['202549'] = []; 
  baidu_adm_arr['200759'] = ['*110']; 
  baidu_adm_arr['200760'] = ['*109','*106','*108','*113','*112','*107','*114','*105','*103','*111','*104','*110']; 
  baidu_adm_arr['200761'] = []; 
  baidu_adm_arr['200762'] = ['*273']; 
  baidu_adm_arr['200763'] = []; 
  baidu_adm_arr['200764'] = []; 
  baidu_adm_arr['202553'] = []; 
  baidu_adm_arr['202554'] = []; 
  baidu_adm_arr['202555'] = []; 
  baidu_adm_arr['200765'] = []; 
  baidu_adm_arr['200766'] = []; 
  baidu_adm_arr['200767'] = []; 
  baidu_adm_arr['200768'] = []; 
  baidu_adm_arr['200769'] = []; 
  baidu_adm_arr['200770'] = []; 
  baidu_adm_arr['202565'] = []; 
  baidu_adm_arr['202566'] = []; 
  baidu_adm_arr['202567'] = []; 
  baidu_adm_arr['202568'] = []; 
  baidu_adm_arr['202569'] = []; 
  baidu_adm_arr['202570'] = []; 
  baidu_adm_arr['202571'] = []; 
  baidu_adm_arr['202572'] = []; 
  baidu_adm_arr['202573'] = []; 
  baidu_adm_arr['202574'] = []; 
  baidu_adm_arr['202575'] = []; 
  baidu_adm_arr['202576'] = []; 
  baidu_adm_arr['200777'] = []; 
  baidu_adm_arr['200778'] = []; 
  baidu_adm_arr['200779'] = []; 
  baidu_adm_arr['200780'] = []; 
  baidu_adm_arr['200781'] = []; 
  baidu_adm_arr['200782'] = []; 
  baidu_adm_arr['202589'] = []; 
  baidu_adm_arr['202590'] = []; 
  baidu_adm_arr['202591'] = []; 
  baidu_adm_arr['202592'] = []; 
  baidu_adm_arr['202593'] = []; 
  baidu_adm_arr['202594'] = []; 
  baidu_adm_arr['202595'] = []; 
  baidu_adm_arr['202596'] = []; 
  baidu_adm_arr['202597'] = []; 
  baidu_adm_arr['202598'] = []; 
  baidu_adm_arr['202599'] = []; 
  baidu_adm_arr['202600'] = []; 
  baidu_adm_arr['200795'] = []; 
  baidu_adm_arr['200796'] = []; 
  baidu_adm_arr['200797'] = []; 
  baidu_adm_arr['200798'] = []; 
  baidu_adm_arr['200799'] = []; 
  baidu_adm_arr['200800'] = []; 
  baidu_adm_arr['202670'] = []; 
  baidu_adm_arr['202671'] = []; 
  baidu_adm_arr['202672'] = []; 
  baidu_adm_arr['200783'] = ['*113']; 
  baidu_adm_arr['200784'] = []; 
  baidu_adm_arr['200785'] = []; 
  baidu_adm_arr['200786'] = []; 
  baidu_adm_arr['200787'] = []; 
  baidu_adm_arr['200788'] = []; 
  baidu_adm_arr['202601'] = []; 
  baidu_adm_arr['202602'] = []; 
  baidu_adm_arr['202603'] = []; 
  baidu_adm_arr['203742'] = []; 
  baidu_adm_arr['203743'] = []; 
  baidu_adm_arr['203744'] = []; 
  baidu_adm_arr['203745'] = []; 
  baidu_adm_arr['203746'] = []; 
  baidu_adm_arr['203747'] = []; 
  baidu_adm_arr['203748'] = []; 
  baidu_adm_arr['203749'] = []; 
  baidu_adm_arr['203750'] = []; 
  baidu_adm_arr['203751'] = []; 
  baidu_adm_arr['203752'] = []; 
  baidu_adm_arr['203753'] = []; 
  baidu_adm_arr['203754'] = []; 
  baidu_adm_arr['203755'] = []; 
  baidu_adm_arr['203756'] = []; 
  baidu_adm_arr['203757'] = []; 
  baidu_adm_arr['203758'] = []; 
  baidu_adm_arr['203759'] = []; 
  baidu_adm_arr['203760'] = []; 
  baidu_adm_arr['203761'] = []; 
  baidu_adm_arr['203762'] = []; 
  baidu_adm_arr['203763'] = []; 
  baidu_adm_arr['203764'] = []; 
  baidu_adm_arr['203765'] = []; 
  baidu_adm_arr['203766'] = []; 
  baidu_adm_arr['203767'] = []; 
  baidu_adm_arr['203768'] = []; 
  baidu_adm_arr['971605'] = []; 
  baidu_adm_arr['971606'] = []; 
  baidu_adm_arr['971607'] = []; 
  baidu_adm_arr['200801'] = []; 
  baidu_adm_arr['200802'] = []; 
  baidu_adm_arr['200803'] = []; 
  baidu_adm_arr['200804'] = []; 
  baidu_adm_arr['200805'] = []; 
  baidu_adm_arr['200806'] = []; 
  baidu_adm_arr['202673'] = []; 
  baidu_adm_arr['202674'] = []; 
  baidu_adm_arr['202675'] = []; 
  baidu_adm_arr['200789'] = []; 
  baidu_adm_arr['200790'] = []; 
  baidu_adm_arr['200791'] = []; 
  baidu_adm_arr['200792'] = []; 
  baidu_adm_arr['200793'] = []; 
  baidu_adm_arr['200794'] = []; 
  baidu_adm_arr['202604'] = []; 
  baidu_adm_arr['202605'] = []; 
  baidu_adm_arr['202606'] = []; 
  baidu_adm_arr['202607'] = []; 
  baidu_adm_arr['202608'] = []; 
  baidu_adm_arr['202609'] = []; 
  baidu_adm_arr['202610'] = []; 
  baidu_adm_arr['202611'] = []; 
  baidu_adm_arr['202612'] = []; 
  baidu_adm_arr['202613'] = []; 
  baidu_adm_arr['202614'] = []; 
  baidu_adm_arr['202615'] = []; 
  baidu_adm_arr['202616'] = []; 
  baidu_adm_arr['202617'] = []; 
  baidu_adm_arr['202618'] = []; 
  baidu_adm_arr['202619'] = []; 
  baidu_adm_arr['202620'] = []; 
  baidu_adm_arr['202621'] = []; 
  baidu_adm_arr['202622'] = []; 
  baidu_adm_arr['202623'] = []; 
  baidu_adm_arr['202624'] = []; 
  baidu_adm_arr['202625'] = []; 
  baidu_adm_arr['202626'] = []; 
  baidu_adm_arr['202627'] = []; 
  baidu_adm_arr['202628'] = []; 
  baidu_adm_arr['202629'] = []; 
  baidu_adm_arr['202630'] = []; 
  baidu_adm_arr['202631'] = []; 
  baidu_adm_arr['202632'] = []; 
  baidu_adm_arr['202633'] = []; 
  baidu_adm_arr['202634'] = []; 
  baidu_adm_arr['202635'] = []; 
  baidu_adm_arr['202636'] = []; 
  baidu_adm_arr['202637'] = []; 
  baidu_adm_arr['202638'] = []; 
  baidu_adm_arr['202639'] = []; 
  baidu_adm_arr['202640'] = []; 
  baidu_adm_arr['202641'] = []; 
  baidu_adm_arr['202642'] = []; 
  baidu_adm_arr['202643'] = []; 
  baidu_adm_arr['202644'] = []; 
  baidu_adm_arr['202645'] = []; 
  baidu_adm_arr['202646'] = []; 
  baidu_adm_arr['202647'] = []; 
  baidu_adm_arr['202648'] = []; 
  baidu_adm_arr['202649'] = []; 
  baidu_adm_arr['202650'] = []; 
  baidu_adm_arr['202651'] = []; 
  baidu_adm_arr['202652'] = []; 
  baidu_adm_arr['202653'] = []; 
  baidu_adm_arr['202654'] = []; 
  baidu_adm_arr['202655'] = []; 
  baidu_adm_arr['202656'] = []; 
  baidu_adm_arr['202657'] = []; 
  baidu_adm_arr['202658'] = []; 
  baidu_adm_arr['202659'] = []; 
  baidu_adm_arr['202660'] = []; 
  baidu_adm_arr['202661'] = []; 
  baidu_adm_arr['202662'] = []; 
  baidu_adm_arr['202663'] = []; 
  baidu_adm_arr['202664'] = []; 
  baidu_adm_arr['202665'] = []; 
  baidu_adm_arr['202666'] = []; 
  baidu_adm_arr['202667'] = []; 
  baidu_adm_arr['202668'] = []; 
  baidu_adm_arr['202669'] = []; 
  baidu_adm_arr['350341'] = []; 
  baidu_adm_arr['350343'] = []; 
  baidu_adm_arr['350344'] = []; 
  baidu_adm_arr['350346'] = []; 
  baidu_adm_arr['350347'] = []; 
  baidu_adm_arr['1083774'] = []; 
  baidu_adm_arr['1083775'] = []; 
  baidu_adm_arr['1083776'] = []; 
  baidu_adm_arr['200807'] = []; 
  baidu_adm_arr['200808'] = ['*114']; 
  baidu_adm_arr['200809'] = []; 
  baidu_adm_arr['200810'] = []; 
  baidu_adm_arr['200811'] = []; 
  baidu_adm_arr['200812'] = []; 
  baidu_adm_arr['202676'] = []; 
  baidu_adm_arr['202677'] = []; 
  baidu_adm_arr['202678'] = []; 
  baidu_adm_arr['200813'] = []; 
  baidu_adm_arr['200814'] = []; 
  baidu_adm_arr['200815'] = []; 
  baidu_adm_arr['200816'] = []; 
  baidu_adm_arr['200817'] = []; 
  baidu_adm_arr['200818'] = []; 
  baidu_adm_arr['200684'] = []; 
  baidu_adm_arr['200685'] = []; 
  baidu_adm_arr['200686'] = []; 
  baidu_adm_arr['200687'] = []; 
  baidu_adm_arr['200688'] = []; 
  baidu_adm_arr['200689'] = []; 
  baidu_adm_arr['202682'] = []; 
  baidu_adm_arr['202683'] = []; 
  baidu_adm_arr['202684'] = []; 
  baidu_adm_arr['200690'] = []; 
  baidu_adm_arr['200691'] = []; 
  baidu_adm_arr['200692'] = []; 
  baidu_adm_arr['200693'] = []; 
  baidu_adm_arr['200694'] = []; 
  baidu_adm_arr['200695'] = []; 
  baidu_adm_arr['202685'] = []; 
  baidu_adm_arr['202686'] = []; 
  baidu_adm_arr['202687'] = []; 
  baidu_adm_arr['200696'] = []; 
  baidu_adm_arr['200697'] = []; 
  baidu_adm_arr['200698'] = []; 
  baidu_adm_arr['200699'] = []; 
  baidu_adm_arr['200700'] = []; 
  baidu_adm_arr['200701'] = []; 
  baidu_adm_arr['202688'] = []; 
  baidu_adm_arr['202689'] = []; 
  baidu_adm_arr['202690'] = []; 
  baidu_adm_arr['200702'] = []; 
  baidu_adm_arr['200703'] = []; 
  baidu_adm_arr['200704'] = []; 
  baidu_adm_arr['200705'] = []; 
  baidu_adm_arr['200706'] = []; 
  baidu_adm_arr['200707'] = []; 
  baidu_adm_arr['202691'] = []; 
  baidu_adm_arr['202692'] = []; 
  baidu_adm_arr['202693'] = []; 
  baidu_adm_arr['202694'] = []; 
  baidu_adm_arr['202695'] = []; 
  baidu_adm_arr['202696'] = []; 
  baidu_adm_arr['202697'] = []; 
  baidu_adm_arr['202698'] = []; 
  baidu_adm_arr['202699'] = []; 
  baidu_adm_arr['202700'] = []; 
  baidu_adm_arr['202701'] = []; 
  baidu_adm_arr['202702'] = []; 
  baidu_adm_arr['200708'] = []; 
  baidu_adm_arr['200709'] = []; 
  baidu_adm_arr['200710'] = []; 
  baidu_adm_arr['200711'] = []; 
  baidu_adm_arr['200712'] = []; 
  baidu_adm_arr['200713'] = []; 
  baidu_adm_arr['202703'] = []; 
  baidu_adm_arr['202810'] = []; 
  baidu_adm_arr['202811'] = []; 
  baidu_adm_arr['200819'] = []; 
  baidu_adm_arr['200820'] = []; 
  baidu_adm_arr['200821'] = []; 
  baidu_adm_arr['200822'] = []; 
  baidu_adm_arr['200823'] = []; 
  baidu_adm_arr['200824'] = []; 
  baidu_adm_arr['202679'] = []; 
  baidu_adm_arr['202680'] = []; 
  baidu_adm_arr['202681'] = []; 
  baidu_adm_arr['317939'] = []; 
  baidu_adm_arr['33333333'] = ['135791*','*']; 
  baidu_adm_arr['555'] = ['400*300']; 
  baidu_adm_arr['5444578'] = []; 
 

		$('body').append('<img id="eewadvimg" width="0" height="0" >');
		

		if(getCookie('advx')){
			
		}else{
			if(location.href.indexOf("?eew_adv=")<0){
				//$('body').prepend('<div style="width:100%;height:1000px;z-index:9947647;position:absolute;margin:0 auto;" class="eew_mask"></div>');
			}
		}
				   
		var adv_mouse_pos = {
		   x:0,
		   y:0,
		   clientX:0,
		   clientY:0
		};
		
	   var stay_time = 0;
	   var event_times = 0;
	   
	   //setInterval(function(){stay_time++;},1000);
	   
	   
	   $(window).on('scroll',function(e){
		   
	   });
	   
	   $(window).on('mousewheel',function(event,delta) {
		   //document.title = delta;
			if(delta==1){
				event_times++;
			}
		    $(".eew_mask").remove();
			setCookie('advx','z');		   
	   });
	   
	   $('a').click(function(){
		   //$(".eew_mask").remove();
		   //setCookie('advx','z');
	   });

	   $(window).on('click',function(e){
		   adv_mouse_pos.x = e.screenX;
		   adv_mouse_pos.y = e.screenY;
		   adv_mouse_pos.clientX = e.clientX;
		   adv_mouse_pos.clientY = e.clientY;
		   var client_pos = e.clientX+'*'+e.clientY;
		   if((e.screenX+'*'+e.screenY) == client_pos){
			   $('.eeworldadvs').remove();
		   }else{
				   //document.title = event_times;
				   //$(".eew_mask").remove();
				   //setCookie('advx','z');
				   if($(".index_topbar").size()>0){
					   
				   }else{
					   
				   }
		   }
		   
	   });
	   
	   
	   $(window).on('resize dblclick',function(e){
		    $(".eew_mask").remove();
			setCookie('advx','z');
	   });
	   
	   

       $(".eew_mask").on('click',function(e){
		   var client_pos = e.clientX+'*'+e.clientY;
		   var screen_size = screen.width+'*'+screen.height;
		   var jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id=33333333&valid=0&invalid=1&x="+e.screenX+"&y="+e.screenY+"&ss="+screen_size+"&cpos="+client_pos+'&event_times='+event_times+"&ua="+encodeURIComponent(navigator.userAgent);
		   $('#eewadvimg').attr('src',jcsrc);
	   });
	   
			
		$(".eeworldadvs").each(function(){
			var eewadvid =  $(this).attr('data');
			
			$(this).find('a').on('click',function(e){
			   var d = new Date();
			   var jcsrc = '';
			   
			   
			   if(eewadvid==555){
				   var keys_url = $(this).attr('href');
				   if(keys_url.indexOf('valid_click')==-1){
					   keys_url = keys_url+"&valid_click=1";
				   }
				   $(this).attr('href',keys_url);
			   }
			   
			   var is_invalid_click = false;
			   if(typeof baidu_adm_arr[eewadvid] != 'undefined'){
				   for(var i=0;i < baidu_adm_arr[eewadvid].length;i++){
					   if((e.screenX+'*'+e.screenY) == baidu_adm_arr[eewadvid][i]){
						   is_invalid_click = true;
						   break;
					   }
				   }
				   
				   var client_pos = e.clientX+'*'+e.clientY;
				   
				   if((e.screenX+'*'+e.screenY) == client_pos ){
					   is_invalid_click = true;
				   }
				   
				   //client_pos = client_pos+'---'+document.body.offsetWidth+'*'+document.body.offsetHeight+'---'+window.screen.height+'*'+window.screen.width+'-----'+document.documentElement.scrollHeight;
				   
				   if(is_invalid_click){
					   jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id="+eewadvid+"&valid=0&invalid=1&x="+e.screenX+"&y="+e.screenY+"&cpos="+client_pos+"&ua="+encodeURIComponent(navigator.userAgent)+"&ss="+navigator.cookieEnabled+'&stay_time='+stay_time+'&event_times='+event_times+"&r="+d.getTime();
					   $(this).attr("href","http://www.eeworld.com.cn/");
				   }else{
					   jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id="+eewadvid+"&valid=1&invalid=0&x="+e.screenX+"&y="+e.screenY+"&cpos="+client_pos+"&ua="+encodeURIComponent(navigator.userAgent)+"&ss="+navigator.cookieEnabled+'&stay_time='+stay_time+'&event_times='+event_times+"+&r="+d.getTime();
				   }
				   
			   }
			   
			   $('#eewadvimg').attr('src',jcsrc);
			   
			   if(is_invalid_click){
				  return false; 
			   }else{
				  return true;
			   }
			   
			});
			
			$(this).find('iframe').each(function(){
			    var the_iframe_obj = $(this);				
				
			    $(this).on('mouseover mouseout',function(e){
				   adv_mouse_pos.x = e.screenX;
				   adv_mouse_pos.y = e.screenY;
		           adv_mouse_pos.clientX = e.clientX;
		           adv_mouse_pos.clientY = e.clientY;
				   event_times++;
				});
				
				$(this).iframeTracker({
					blurCallback: function(){

						   var d = new Date();
						   var jcsrc = '';
						   
						   var is_invalid_click = false;
						   if(typeof baidu_adm_arr[eewadvid] != 'undefined'){
							   for(var i=0;i < baidu_adm_arr[eewadvid].length;i++){
								   if((adv_mouse_pos.x+'*'+adv_mouse_pos.y) == baidu_adm_arr[eewadvid][i]){
									   is_invalid_click = true;
									   break;
								   }
							   }
							   							 
							   if(event_times==1&&stay_time>1){
								   is_invalid_click = true;
							   }
							   
							   var client_pos = adv_mouse_pos.clientX+'*'+adv_mouse_pos.clientY;
							   
							   if((adv_mouse_pos.x+'*'+adv_mouse_pos.y) == client_pos ){
							       is_invalid_click = true;
							   }
							   
							   //client_pos = client_pos+'---'+document.body.offsetWidth+'*'+document.body.offsetHeight+'---'+window.screen.height+'*'+window.screen.width;
							   
							   if(is_invalid_click){
								   jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id="+eewadvid+"&valid=0&invalid=1&x="+adv_mouse_pos.x+"&y="+adv_mouse_pos.y+"&cpos="+client_pos+"&ua="+encodeURIComponent(navigator.userAgent)+"&ss="+navigator.cookieEnabled+'&stay_time='+stay_time+'&event_times='+event_times+"&r="+d.getTime();
								   the_iframe_obj.hide();
							   }else{
								   jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id="+eewadvid+"&valid=1&invalid=0&x="+adv_mouse_pos.x+"&y="+adv_mouse_pos.y+"&cpos="+client_pos+"&ua="+encodeURIComponent(navigator.userAgent)+"&ss="+navigator.cookieEnabled+'&stay_time='+stay_time+'&event_times='+event_times+"&r="+d.getTime();
							   }
							   
						   }else{
							   
							   jcsrc = "http://www.eeworld.com.cn/advmanagez/bd_adm_click.php?id="+eewadvid+"&valid=3&invalid=0&x="+adv_mouse_pos.x+"&y="+adv_mouse_pos.y+"&cpos="+client_pos+"&ua="+encodeURIComponent(navigator.userAgent)+"&ss="+navigator.cookieEnabled+"&r="+d.getTime();
							   
						   }
						   
						   
						   
						   $('#eewadvimg').attr('src',jcsrc);
						   
					}
				});
			   
			});
			
		});
		
	})
	
})(jQuery)