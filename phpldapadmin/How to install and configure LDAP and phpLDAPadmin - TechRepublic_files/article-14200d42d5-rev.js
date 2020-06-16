define('fly/utils/object-helper-1.0',['jquery'], function ($) {
 
    return {
        /* 
         * deepFind
         * Return a value from a JSON object by providing the path as a string
         * @param {Object} The parent object from which to retrieve data
         * @param {String} The path for the value ex: 'foo.bar'
         */
        deepFind: function (obj, path) {
            if (!obj || !path) {
                return null;
            }
            
            var pathArr = path.split('.'),
                pathArrLength = pathArr.length;
            
            for (i=0; i<pathArrLength; i++) {                
                if ( obj.hasOwnProperty(pathArr[i]) ) {
                    obj = obj[pathArr[i]];
                } else {
                    return null;
                }
            }
    
            return obj;
        }
    };

});



/*
 * Component Manager
 *  
 */

define('fly/managers/components-1.0',[
    'jquery',
    'version!fly/utils/string-helper',
    'version!fly/utils/object-helper',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function ($, strHlpr, objHlpr, debugMgr, componentBase) {
    
    var config = {
            attr: 'data-component', // attr used to find components
            includeContext: true // should the $context be checked for attr in addition to contents
        },
        debug = debugMgr.init('components'),
        componentMap = {},
        methods;

    // process new content dynamically added to the DOM
    $(document).on('domUpdated', function(e, data) {
        data = data || {};
        methods.process(data.$context);
    });
    
    methods = {
        /**
         * Search the DOM and initialize all found components
         *
         * @param {JQuery} $context The container to limit the DOM search
         */
        process: function($context) {
            var self = this,
                $components = this.findByAttr($context);

            $components.each(function(i, component) {
                var $component = $(component),
                    data = $component.data(),
                    names = strHlpr.toCleanArray(data.component);

                $.each(names, function(i, name) {
                    self.init(name, $component);
                });
            });
        },

        /**
         * Initialize a component utilizing the data set up in the component map
         *
         * @param {string} name    The name of the component
         * @param {JQuery} $el     Optional element to use for initialization
         * @param {object} options The component initialization options
         */
        init: function(name, $el, options) {
            var map = componentMap[name],
                scripts,
                fnName,
                inst;
            
            if (map) {
                options = options || {},
                scripts = $.makeArray(map.require) || [];
                fnName = name;
                
                if (map.alias) {
                    fnName = map.alias;
                    options = $.extend(true, {}, (map.options || {}), options);
                }

                require(scripts, function() {
                    if ($el && $el.length) {
                        if ($.isFunction($el[fnName])) {
                            $el[fnName](options);
                        }
                    }
                });
                
                debug.log('init: ', name, $el, options);
            }
        },

        /**
         * Set manager configuration
         *
         * @param {object} map Manager configuration map
         * 
         */
        setConfig: function(map) {
            if ($.isPlainObject(map)) {
                $.extend(config, map);
            } else {
                throw new Error('Component setConfig failure. Map is in the wrong format.');
            }
        },

        /**
         * Register components to be initialized
         *
         * @param {object} map Component configuration map
         *  
         * Example:
         *  register({
         *      componentName: {
         *          options: {}
         *          events: {}
         *          require: ['path/component-name']
         *      }
         *  });
         */
        register: function(map) {
            if ($.isPlainObject(map)) {                
                $.each(map, function(name, data) {
                    componentMap[name] = data;
                    
                    // set default options and events
                    if (data.options) {
                        componentBase.setDefaultOptions(name, data.options);
                    }
                    if (data.events) {
                        componentBase.addDefaultEvents(name, data.events);
                    }
                });
                
                debug.log('register: ', map);
            } else {
                throw new Error('Component register failure. Map is in the wrong format.');
            }
        },

        /**
         * Find components in the dom
         *
         * @param {JQuery}  $context       Container element to search for components - empty search entire document
         * @param {mixed}   names          String or array of specific component names - empty returns all
         * @param {boolean} includeContext Should the container element be checked in addition to children      
         *  
         */
        findByAttr: function($context, names, includeContext) {
            var $components,
                selector = '';
            names = (names && !$.isArray(names)) ? [names] : names;

            if (names) {
                $.each(names, function(i, name) {
                    selector += (i > 0) ? ', ' : '';
                    selector += '['+config.attr + '="'+name+'"], ['+config.attr + '*=\'"'+name+'"\']';
                });
            } else {
                selector = '['+config.attr + ']';
            }
            
            $context = $context || $(document.body);
            $components = $context.find(selector);
            includeContext = (typeof includeContext !== 'undefined') ? includeContext : config.includeContext;

            if (includeContext) {
                $components = $components.addBack(selector);
            }
            
            return $components;
        }
    };
    
    return methods;
    
});

/*
 * Tealium Tag Manager
 *
 */
define('fly/managers/tealium-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/guid'
], function ($, debugMgr, guid) {

    var clickEventName = ($.support.touch) ? 'vclick' : 'click';
    var debug = debugMgr.get('tealium');

    return {
        trackingData: {},
        viewGuid: null,
        resetGuidEnabled: true,
        init: function(data) {
            this.trackingData = data;
            debug.log('tealium::init:', 'loading tracking data', this.trackingData);
        },

        explicitTrackView: function(data) {
            var data = typeof data === "undefined" ? {} : data;

            // Explicit tracking a pageview - utag.view({ page:"search results", section:"search", search_term:"politics" });
            utag.view(data);
        },

        explicitTrackLink: function(data) {
            var data = typeof data === "undefined" ? {} : data;

            // Explicit tracking a link - utag.link({ page:"search results", section:"search", search_term:"politics" });
            utag.link(data);
        },

        setViewGuid: function(viewGuid) {
            this.viewGuid = viewGuid;
            debug.log('tealium::setViewGuid', this.viewGuid);
        },

        resetViewGuid: function() {
            if (this.resetGuidEnabled) {
                this.viewGuid = guid.generate();
            }
            debug.log('tealium::resetViewGuid', this.viewGuid);
            return this.viewGuid;
        },

        getViewGuid: function() {
            return this.viewGuid;
        },

        // Used to ensure both modal and tealium use the same guid (if new one is required)
        syncResetViewGuid: function() {
            var viewGuid = '';
            viewGuid = this.resetViewGuid();

            this.resetGuidEnabled = this.resetGuidEnabled ? false : true;

            return viewGuid;
        },

        getTrackingData: function() {
            return this.trackingData;
        },

    }
});


define('components/tracking-controller',[
    'jquery',
    'version!fly/managers/debug',
    'managers/page-vars',
    'managers/mpulse',
    'utils/cookie',
    'version!fly/components/base'
], function(
    $,
    debug,
    pageVars,
    mpulseMgr,
    cookie
) {
    debug = debug.init('trackingController');

    /**
     * Controls the tracking business logic for the whole page, manages tracking data for each page (including ajaxed
     * pages), and provides event tracking functions for other components to use.
     *     - Currently only used to set up mPulse beacons for comscore tracking
     *
     * @class $.tr.trackingController
     * @extends $.fly.base
     * @constructor
     */
    $.widget('tr.trackingController', $.fly.base, {

        // Options
        options: {
            gcpUrlWithoutQueryString: 'https://us-central1-i-cnet-dev.cloudfunctions.net/errorResponsePublish?'
        },

        /**
         * Configuration for each service that should have its network requests monitored and tracked. Each service
         * can be tracked based on URL prefix up to a set number of times using an array of other tracking services.
         *
         * Primary use case is monitoring the load performance (timing) and conversion rate of 3rd parties.
         *
         * @property monitoredServices
         * @type object
         * @default populated object
         */
        monitoredServices: {
            comscore: {
                fireCount:      0,
                maxFireCount:   1,
                requestPrefix:  'https://sb.scorecardresearch.com/b?',
                services:       ['mpulse'],
                timerName:      'track_comscore'
            }
        },

        /**
         * Initialize the tracking controller.
         *
         * @private
         * @method _create
         * @returns {null}
         */
        _create: function() {
            this._setup();

            // Set up the tracking of network requests on articles and blog posts
            if (pageVars.tracking.data.pageType === 'article' || pageVars.tracking.data.pageType === 'blog_post') {
                this._initRequestTracking();
            }

            // Set up Chartbeat tracking
            this._initChartbeat();

            // Trigger cloud function on 404 and 500 error pages
            if (pageVars.pageType == 'error_page') {
                this._injectQueryStringGCP();
            }

            this.initClickTracking($(document));
        },

         /**
         * Iterate over header data relevant to the CBSi Tech Error Tool, create a
         * query string from the data, and inject the query string with GCP endpoint.
         *
         * @private
         * @method _injectQueryStringIntoGCP
         * @returns {null}
         */
        _injectQueryStringGCP: function() {
            // GDPR-gated
            var self = this;
            window.TRFunctions.gdprConsentCallback('_injectQueryStringGCP', function() {
                // Data for query string
                var trackingDataDict = {
                    'ctype': 'viewguid',
                    'xref': document.referrer,
                    'cval': pageVars.guid,
                    'v21': pageVars.tracking.data.siteType + '|||' + pageVars.tracking.data.deviceType,
                    'title': document.title,
                    'srcurl': window.location.href,
                    'ld': window.location.host,
                    'brlang': navigator.language,
                    'brwinsz': window.innerWidth + 'x' + window.innerHeight,
                    'brscrsz': window.screen.width + 'x' + window.screen.height,
                    'tcset': document.characterSet,
                    'ts': Date.now(),
                    'ldc': cookie.read('LDCLGFbrowser', { raw: true }),
                    'clgf': cookie.read('XCLGFbrowser', { raw: true }),
                    'im': 'tracking-controller.js',
                    'siteid': pageVars.tracking.data['siteId'],
                    'rsid': pageVars.tracking.data['rsid'],
                    'pagetype': pageVars.tracking.data['pageType'],
                    'viewguid': pageVars.guid,
                    'devicetype': pageVars.tracking.data['deviceType'],
                    'sitetype': pageVars.tracking.data['siteType'],
                    'sid': pageVars.tracking.data['siteId'],
                    'env': pageVars.environment
                };

                // Inject
                var gcpUrlWithQueryString = self.options.gcpUrlWithoutQueryString + $.param(trackingDataDict);
                debug.log(gcpUrlWithQueryString);
                // Triggering cloud function
                $('<img src=' + gcpUrlWithQueryString + '>');
            }, {}, 'functional');
        },

        /**
         * Initialize the tracking of network requests.
         *
         * Current use cases:
         *  - Track Comscore pings in mPulse to monitor page load impact (delay) and conversion rate
         *
         * @public
         * @method _initRequestTracking
         * @returns {null}
         */
        _initRequestTracking: function() {
            var self = this,
                previousDepth = 0;

            window.setInterval(function() {
                try {
                    var resources = window.performance.getEntriesByType('resource');

                    // Don't rescan the entire array each time; only the new entries
                    previousDepth = previousDepth >= resources.length ? 0 : previousDepth;
                    while (previousDepth < resources.length) {
                        self._trackServiceRequest(resources[previousDepth]);
                        previousDepth++;
                    }
                } catch(e) {
                    debug.error('Failed to monitor tracking requests (known race condition):', e);
                }
            }, 500);
        },

        /**
         * Track the network request of an individual resource based on the configured rules set forth in [monitoredServices].
         *
         * @param {object} resource  Resource entry from the Performance API
         *
         * @private
         * @method _trackServiceRequest
         * @returns {null}
         */
        _trackServiceRequest: function(resource) {
            for (var index in this.monitoredServices) {
                var service = this.monitoredServices[index];
                if (service.fireCount < service.maxFireCount && resource.name.indexOf(service.requestPrefix)) {
                    debug.info('Tracking the request: ' + service.timerName, resource.fetchStart);
                    if (service.services.indexOf('mpulse') !== -1) {
                        mpulseMgr.sendBeacon(service.timerName, resource.fetchStart);
                    }
                    service.fireCount++;
                }
            }
        },

        /**
         * Load Chartbeat tracking script. Automatically fires tracking for the initial page load upon injection.
         * Subsequent AJAX page views must be manually tracked separately.
         *
         * @public
         * @method _initChartbeat
         * @returns {null}
         */
        _initChartbeat: function () {
            if (pageVars.services.chartbeat_tracking && pageVars.services.chartbeat_tracking.enabled) {
                debug.info('Injecting Chartbeat tracking script');
                var hasVideo = 0 < $('[data-component=trVideo]').length;

                window._sf_endpt = (new Date()).getTime();

                if (hasVideo) {
                    // Load Chartbeat Video
                    this._initChartbeatVideoStrategy();
                    window.TRFunctions.gdprConsentCallback("script_chartbeat_video", function () {
                        require(['chartbeat-video']);
                    }, {}, 'performance');
                } else {
                    window.TRFunctions.gdprConsentCallback("script_chartbeat", function () {
                        require(['chartbeat']);
                    }, {}, 'performance');
                }

            } else {
                debug.info('Chartbeat tracking is disabled');
            }
        },

        /**
         * Setup Chartbeat video strategy
         *
         * @private
         * @method _initChartbeatVideoStrategy
         */
        _initChartbeatVideoStrategy: function () {

            if (!window.VideoStrategy) {

                /** Chartbeat Video Strategy **/
                /**
                 * Constructor for the strategy. This is what gets passed to the SDK via:
                 * window['_cbv_strategies'].push(VideoStrategy);
                 * @param {Object} player A pointer to the player being tracked. The player
                 * is where all the video data is derived from
                 */
                window.VideoStrategy = function (player) {
                    this._$player = $(player).closest('[data-component=trVideo]');
                }

                /**
                 * Enum for the content type. One of these values should be returned from
                 * the "getContentType" function.
                 * @enum {string}
                 */
                VideoStrategy.ContentType = {
                    AD: 'ad',
                    CONTENT: 'ct'
                };

                /**
                 * Return whether the given video clip is being played from
                 * manual play, autoplay, continuous play (in a playlist), or unknown.
                 * @enum {string}
                 */
                VideoStrategy.AutoplayType = {
                    UNKNOWN: 'unkn',
                    MANUAL: 'man',
                    AUTOPLAY: 'auto',
                    CONTINUOUS: 'cont'
                };


                /**
                 * Enum for the video state. One of these values should be returned from
                 * the "getState" function.
                 * @enum {string}
                 */
                VideoStrategy.VideoState = {
                    UNPLAYED: 's1',
                    PLAYED: 's2',
                    STOPPED: 's3',
                    COMPLETED: 's4'
                };


                /**
                 * Indicates if the video strategy is ready for pinging.
                 * Typically this is called when all path and title metadata
                 * is available
                 * Note: Pings should only be sent after this reads true.
                 * @return {boolean} The ready state of the strategy.
                 */
                VideoStrategy.prototype.isReady = function () {
                    return this._$player !== null;
                };


                /**
                 * Gets the human readable video title.
                 * This is returned in the i key of the ping.
                 * @return {string} The video title.
                 */
                VideoStrategy.prototype.getTitle = function () {
                    var video = this._$player.trVideo('getVideo');
                    var title = (video) ? video.title : null;
                    if (title && video.apeList) {
                        title = "Unmapped: " + title;
                    }
                    return title || null;
                };


                /**
                 * Gets the video path.
                 * This is returned in the p key of the ping.
                 * Note: this should be the playable video path if available.
                 * @return {string} The video path.
                 */
                VideoStrategy.prototype.getVideoPath = function () {
                    var video = this._$player.trVideo('getVideo');
                    var path = (video) ? video.mediaUrl : null;
                    if (path && video.apeList) {
                        path += "?unmapped";
                    }
                    return path;
                };


                /**
                 * Gets the type of video playing. Returns value from the ContentType enum.
                 * This is returned in the _vt key of the ping.
                 * @return {VideoStrategy.ContentType} The type of content (ad or ct).
                 */
                VideoStrategy.prototype.getContentType = function () {
                    return this._$player.trVideo('isAdPlaying') ? VideoStrategy.ContentType.AD : VideoStrategy.ContentType.CONTENT;
                };


                /**
                 * Return whether the given video clip is being played from manual
                 * play, autoplay, continuous play (in a playlist), or unknown.
                 * @return {VideoStrategy.AutoplayType|string}
                 */
                VideoStrategy.prototype.getAutoplayType = function () {
                    var video = this._$player.trVideo('getVideo');
                    return (video && video.autoplayType) ? VideoStrategy.AutoplayType[video.autoplayType] : null;
                };


                /**
                 * Gets the total duration of the video.
                 * This is returned in the _vd key of the ping.
                 * @return {number} The total duration time in milliseconds.
                 */
                VideoStrategy.prototype.getTotalDuration = function () {
                    var video = this._$player.trVideo('getVideo');
                    return (video && video.duration) ? video.duration * 1000 : null;
                };


                /**
                 * Gets the current state of the video. Returns value from the VideoState enum.
                 * This is returned in the _vs key of the ping.
                 * @return {string} The current video state. {@link VideoStrategy.VideoState}
                 */
                VideoStrategy.prototype.getState = function () {
                    var video = this._$player.trVideo('getVideo');
                    var state = (video && video.videoState) ? VideoStrategy.VideoState[video.videoState] : null;
                    return state;
                };

                /**
                 * Gets the thumbnail of the video.
                 * This is returned in the _vtn key of the ping.
                 * @return {string} The [absolute] path to the thumbnail.
                 */
                VideoStrategy.prototype.getThumbnailPath = function () {
                    var video = this._$player.trVideo('getVideo');
                    return (video && video.thumbnail) ? video.thumbnail : null;
                };


                /**
                 * Gets the video player type.
                 * This is returned in the _vplt key of the ping.
                 * @return {string} The player type (user defined).
                 */
                VideoStrategy.prototype.getPlayerType = function () {
                    return uvpjs.Configuration.version;
                };

                /**
                 * Gets the strategy name.
                 * This represents an abbreviated (2­3 characters in length) name for your custom player strategy.
                 * @return {string} The strategy name (user defined).
                 */
                VideoStrategy.prototype.getStrategyName = function () {
                    return "VS";
                };

                /**
                 * Gets the time since start of viewing.
                 * This is returned in the _vvs key of the ping.
                 * @return {number} The time since viewing started in milliseconds.
                 */
                VideoStrategy.prototype.getViewStartTime = function () {
                    var video = this._$player.trVideo('getVideo');
                    var startTime = (video && video.contentStartTimeStamp) ? video.contentStartTimeStamp : -1;
                    return (startTime > 0) ? ((new Date().getTime() - startTime) / 1000) : null;
                };

                /**
                 * Gets the current play time of the video (where the playhead is).
                 * This is returned in the _vpt key of the ping.
                 * @return {number} The current play time in milliseconds.
                 */
                VideoStrategy.prototype.getCurrentPlayTime = function () {
                    var video = this._$player.trVideo('getVideo');
                    var currentTime = (video && video.currentPlaybackState) ? video.currentPlaybackState.currentTime : null
                    return currentTime;
                };

                /**
                 * Verifies that the given player belongs to this strategy. Used for a
                 * greedy search of the matching strategy for a given element or object.
                 * @param {Object} player A pointer to the player being tracked.
                 * @return {boolean} If the strategy can handle this type of object.
                 */
                VideoStrategy.verify = function (player) {
                    var isVerified = player && player.id.indexOf(window.uvpjs.domConstants.VIDEO_ID_PREFIX + "videoPlayer") === 0;
                    return isVerified;
                };

                // Add strategy
                window['_cbv_strategies'] = window['_cbv_strategies'] || [];
                window['_cbv_strategies'].push(window.VideoStrategy);
            }
        },

        /**
         * Fire a page tracking request to Chartbeat.
         *
         * @public
         * @method trackChartbeatPageView
         * @returns {null}
         */
        trackChartbeatPageView: function () {
            if (pageVars.services.chartbeat_tracking && pageVars.services.chartbeat_tracking.enabled) {
                try {
                    var data = {
                        path: window.location.pathname,
                        title: window.document.title,
                        authors: pageVars.tracking.data.articleAuthorName.join(','),
                        sections: pageVars.tracking.data.siteSection,
                        contentType: pageVars.tracking.data.soastaPageType
                    };

                    // Call Chartbeat's global function
                    debug.info('Tracking page load via Chartbeat', data);
                    window.pSUPERFLY.virtualPage(data);
                } catch (e) {
                    debug.info('Failed to track page load via Chartbeat', e);
                }
            } else {
                debug.info('Chartbeat tracking is disabled');
            }
        },

        /**
         * Wrapper for omnitureMgr.trackEvent to catch potential omnitureMgr errors so they won't affect other functionality
         *
         * @param {string} eventName
         * @param {object} data
         *
         * @public
         * @method trackEvent
         */
        trackEvent: function(eventName, data) {
            try {
                omnitureMgr.trackEvent(eventName, data);
            } catch(e) {
                console.log(e);
            }
        },

        /**
         * Initialise click tracking for data attribute tags inside an element
         *
         * @param {jQuery element object} $el
         *
         * @public
         * @method initClickTracking
         */
        initClickTracking: function($el) {
            var self = this;
            // Code for firing omniture click events
            var clickEventName = ($.support.touch) ? 'vclick' : 'click';
            $el.find("[data-omniture-track]").on(clickEventName, function(e) {
                var $this = $(this),
                    data = $this.data(),
                    eventName = data.omnitureTrack,
                    eventData;

                if ($.isPlainObject(eventName)) {
                    eventData = eventName.data;
                    eventName = eventName.event;
                } else {
                    eventData = data.omnitureTrackData;
                }
                debug.log("fire tracking event");
                debug.log("event info: ", eventName, eventData);
                self.trackEvent(eventName, eventData);
            });
        }

    });
});
/**
 * Controls whether or not tracking executes on the page.
 *
 * @class tracking
 */
define('managers/tracking',[
    'version!fly/managers/debug',
    'components/tracking-controller'
], function(
    debugMgr
) {
    var debug = debugMgr.init('trackingManager'),
        trackingController = $.tr.trackingController();

    return trackingController;
});
define('managers/tealium',[
    'jquery',
    'version!fly/managers/tealium',
    'managers/page-vars',
    'version!fly/managers/debug',
    'utils/cookie',
    'managers/tracking'
], function($, tagMgr, pageVars, debugMgr, cookieMgr, trackingMgr) {
    var debug = debugMgr.get('tealium');

    if (pageVars.tracking.enabled === true && pageVars.services.tealium.enabled) {
        window.TRFunctions.gdprConsentCallback("script_tealium", function() {
            require(['optional!tealium']);
        }, {}, 'functional');
    }

    var videoTracking = {
        /**
         * Track a video event
         *
         * @param {string} eventName  Event name
         * @param {object} data       specific tracking data
         *
         * @public
         * @method trackVideo
         */
        trackVideo: function(eventName, data) {
            var defaults = {
                _noLinkTrack: 'LEVT',
                _videoAction: eventName,
                link_text: eventName,
                siteHier: pageVars.tracking.data.siteHier,
                siteSection: pageVars.tracking.data.siteSection,
                siteEdition: pageVars.tracking.data.siteEdition,
                siteType: pageVars.tracking.data.siteType,
                deviceType: pageVars.tracking.data.deviceType,
                pageType: pageVars.tracking.data.pageType,
                topicId: pageVars.tracking.data.topicId,
                pageViewGuid: pageVars.tracking.data.pageViewGuid,
                articleAuthorId: pageVars.tracking.data.articleAuthorId,
                articleAuthorName: pageVars.tracking.data.articleAuthorName,
                articleId: pageVars.tracking.data.articleId,
                collectionId: pageVars.tracking.data.collectionId
            };
            defaults = typeof defaults !== "object" ? {} : defaults;
            data = typeof data !== "object" ? defaults : $.extend(defaults, data);
            debug.log(eventName, data);
            trackingMgr.trackEvent(eventName, data);
        },

        /**
         * Generic wrapper to call methods Tealium's utag.js, created by either Tealium or the CBSi tracking team.
         * Validates all data, merges defaults, performs error handling, logs debug info, and fires the tracking ping
         * iff tracking is currently enabled.
         *
         * @param {string}      object     name of window-level custom utag object
         * @param {string}      method     name of custom utag object method
         * @param {string}      eventName  name of tracking type
         * @param {object}      data       specific tracking data
         * @param {object|null} [defaults] default tracking data
         *
         * @private
         * @method _trackClickViaUtag
         */
        _trackClickViaUtag: function(object, method, eventName, data, defaults) {
            try {
                if (pageVars.tracking.enabled === true) {
                    defaults = typeof defaults !== "object" ? {} : defaults;

                    // add a/b test and user status tracking data to all tracking events
                    var forcedTracking = {
                        _test: pageVars.tracking.data.testName ? pageVars.tracking.data.testName + '|' + pageVars.tracking.data.testVersion + '|' + pageVars.tracking.data.testGroup : '',
                        userState: pageVars.tracking.data.userState,
                        userType: pageVars.tracking.data.userType,
                        userId: window.utag_data.userId,
                        pageType: pageVars.tracking.data.pageType,
                        pageViewGuid: pageVars.guid,
                        _siteTypeDevice: window.utag_data._siteTypeDevice,
                        _dwAnonId: window.utag_data._dwCookieId,
                        _siteSection: window.utag_data._siteSection
                    };

                    forcedTracking = $.extend(forcedTracking, {
                        //Always force opt groups to pass along
                        oneTrustGroup1: window.utag_data.oneTrustGroup1,
                        oneTrustGroup2: window.utag_data.oneTrustGroup2,
                        oneTrustGroup3: window.utag_data.oneTrustGroup3,
                        oneTrustGroup4: window.utag_data.oneTrustGroup4,
                        oneTrustGroup5: window.utag_data.oneTrustGroup5
                    });

                    data = typeof data !== "object" ? $.extend({}, forcedTracking, defaults) : $.extend({}, forcedTracking, defaults, data);

                    if ($.inArray(object, ['om', 'omnitureMgr', 'utag']) >= 0) {
                        window[object][method](data);

                        /* Hack because Omniture won't let go of the event, despite a Tealium tag reset. */
                        if (typeof window.s == 'object') {
                            window.s.events = '';
                        }
                        debug.log(eventName + ' ping: ', data);
                    } else {
                        debug.log('Invalid tracking object', object);
                    }
                } else {
                    debug.log(eventName + ' aborted; tracking is not enabled!');
                }
            } catch (e) {
                debug.log(eventName + ' failed:', e);
            }
        },

        /**
         * Track a custom event or user interaction.
         * - For link clicks, always use trackLink() instead.
         * - For page load events, consider using trackPageLoad() instead.
         *
         * @param {string} eventName
         * @param {object} data
         * @param {string} [action=eventName]
         *
         * @public
         * @method trackCustomEvent
         */
        trackCustomEvent: function(eventName, data, action) {
            var defaults = {
                link_text: eventName,
                _clickAction: action ? action : eventName,
                _noLinkTrack: 'LEVT'
            };

            // can't rely on page-vars.js due to a race condition on the tealium side overwriting it with a default of 'techrepublic'
            // see also managers/page-vars.js for this attribute for omnitureMgr calls
            data._siteCode = 'techrepublic';

            this._trackClickViaUtag('utag', 'link', eventName, data, defaults);
        },

        /**
         * Track a comment interaction, such as posting, flagging, liking, or sharing.
         *
         * @param eventName
         * @param data
         * @param action
         *
         * @public
         * @method trackComment
         */
        trackComment: function(eventName, data, action) {
            /*jshint camelcase: false */
            var defaults = {
                link_text: eventName,
                _clickAction: action ? action : eventName
            };
            /*jshint camelcase: true */

            this._trackClickViaUtag('utag', 'link', eventName, data, $.extend({}, this._getUdoStockData(), defaults));
        },

        /**
         * Get the "stock" data from the UDO necessary for some event tracking.
         *
         * @returns {object}
         *
         * @private
         * @method _getUdoStockData
         */
        _getUdoStockData: function() {
            var data = pageVars.tracking.data;

            return {
                siteEdition: data.siteEdition,
                pageViewGuid: data.pageViewGuid,
                pageType: data.pageType,
                siteHier: data.siteHier,
                siteType: data.siteType,
                deviceType: data.deviceType,
                articleId: data.articleId,
                articleTitle: data.articleTitle,
                articleType: data.articleType,
                articlePubDate: data.articlePubDate,
                articleAuthorId: data.articleAuthorId,
                articleAuthorName: data.articleAuthorName,
                topicId: data.topicId,
                topicName: data.topicName
            };
        },

        /**
         * Returns params needed for Adobe Heartbeat tracking
         *
         * @returns {object}
         *
         * @public
         * @method getHbParams
         */
        getHbParams: function(p) {
            var utag_keys = new Array(
                    'siteEdition', 'siteSection', 'siteType',
                    'articleId', 'articleType', 'articleTitle', 'mediaAutoPlay', 'mfr',
                    'pageType', 'pageTypeId', 'pageOntologyId', 'pageViewGuid',
                    'productId', 'productName', 'productSeriesId',
                    'productSeriesName', 'productSlug', 'productType',
                    'showId', 'showTitle', 'showEpisodeId', 'showEpisodeTitle',
                    'userState', 'userId', 'userType', 'userRegId',
                    'deviceType', 'dwAnonId', 'videoAutoPlay', 'testName', 'testVersion',
                    'testGroup'
                ),
                hbParams = [],
                data = {};

            if (!p) p = {};

            for (var i = 0; i < utag_keys.length; i++) {
                if (!!utag_data[utag_keys[i]]) {
                    hbParams[utag_keys[i]] = utag_data[utag_keys[i]];
                }
            }

            $.extend(data, hbParams, {
                'siteRsids': utag_data['_scAccount'],
                'siteCode': utag_data['_siteCode'],
                'pageUrl': window.location.href,
                'sitePrimaryRsid': utag_data['_sitePrimaryRsid'],
                'userStatus': utag_data['userType'],
                'siteHier': (utag_data['_siteCode'] && utag_data['siteHier'] && utag_data['siteHier'].length > 0) ? utag_data['_siteCode'] + ":" + utag_data['siteHier'].join('|') : '',
                'topicPrimaryId': (pageVars.tracking.data.topicId && pageVars.tracking.data.topicId.length >= 0) ? pageVars.tracking.data.topicId[0] : undefined,
                'collectionId': utag_data['collectionId'] && utag_data['collectionId'].length > 0 ? utag_data['collectionId'][0] : '',
                'test': pageVars.tracking.data.testName ? pageVars.tracking.data.testName + '|' + pageVars.tracking.data.testVersion + '|' + pageVars.tracking.data.testGroup : '',
                'abtest': pageVars.tracking.data.testName ? pageVars.tracking.data.testName + '|' + pageVars.tracking.data.testVersion + '|' + pageVars.tracking.data.testGroup : '',
            }, p);

            debug.log('getHbParams', data);

            return data;
        }
    };

    /**
     * Assuming sourcepoint is ready, get data from it and track things accordingly.
     *
     * @private
     * @method _trackSourcePoint
     */
    function _trackSourcePoint() {
        //Set adblock detection cookie
        adBlockCookieValue = cookieMgr.read('adblock_status');
        adBlockCookieValue = (adBlockCookieValue && adBlockCookieValue.length !== 0) ? adBlockCookieValue : '';
        window.utag_data._adBlockStatus = adBlockCookieValue;

        if (window._sp_ && (typeof window._sp_.isAdBlocking == 'function')) {
            window._sp_.isAdBlocking(function(isBlocking) {
                cookieMgr.write('adblock_status', isBlocking ? 'is_adblocking' : 'not_adblocking');
            });
        }
    }

    tagMgr._trackSourcePoint = _trackSourcePoint;

    //tracking for directory search bars
    var searchPosClass = ['directory-search-bar-top', 'directory-search-bar-bottom'];
    $(".directory-search-bar").find("button#directory-search-button").each(function(index) {
        if (index < searchPosClass.length && $("button#directory-search-button").length != 1) {
            $(this).addClass(searchPosClass[index]);
        }
    });
    $("button#directory-search-button").click(function(e) {
        var $this = $(this);
        if ($this.hasClass('directory-search-bar-top')) {
            trackingMgr.trackEvent('moduleClick', { 'moduleInfo': 'resourcelibrary-search-top' });
        } else if ($this.hasClass('directory-search-bar-bottom')) {
            trackingMgr.trackEvent('moduleClick', { 'moduleInfo': 'resourcelibrary-search-bottom' });
        } else {
            trackingMgr.trackEvent('moduleClick', { 'moduleInfo': 'resourcelibrary-search' });
        }
    });

    //author twitter tracking
    $("#author-bio-header .socialFollow a[data-social='twitter']").click(function(e) {
        trackingMgr.trackEvent('clickSocialShare', { 'socialCode': 9, 'socialService': 'twitterFollow' });
    });

    return $.extend(tagMgr, videoTracking);
});
define('fly/components/alert-1.0',[
    'jquery', 
    'version!fly/components/base' 
], function($) {

    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click';

    /**
     * Allow alert to be closeable
     *
     * @extends cbsi.component
     * 
     * Example Usage: 
     *      
     *      $('#my-alert').alert();
     *
     *      <div id="my-alert">
     *          <a data-close="alert">&times;</a>
     *      </div>
     */


    $.widget( 'fly.alert', $.fly.base, {
        
        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            animation: 'slide' //'fade','none'
            //closed: $.noop() tab is hidden
        },
        
        /**
         * Instantiate Alert
         * @constructor
         */
        _create: function() {
            var eventMap = {};
            
            this._setup();

            eventMap[clickEventName+' [data-close="alert"]'] = '_handleClose';
            
            this._on(this.$element, eventMap);
        },

        /**
         * Handle close action
         */ 
        _handleClose: function(e) {
            e.preventDefault();
            
            this.close();
        },

        /**
         * Close the alert
         */ 
        close: function() {
            var o = this.options;
            
            switch (o.animation) {
                case 'slide':
                    this.$element.slideUp('fast', $.proxy(this._completeClose, this));
                    break;
                case 'fade':
                    this.$element.fadeOut('fast', $.proxy(this._completeClose, this));
                    break;
                default:
                    this.$element.remove();
                    this._completeClose();
            }

        },
        
        _completeClose: function() {
            this._trigger('closed', null, {
                $alert: this.$element
            });
        }
    });
});



define('fly/components/carousel-1.0',[
    'jquery',
    'version!fly/utils/string-helper',
    'version!fly/components/base'
], function($, stringHelper) {

    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click';

    /**
     * Adds a carousel widget to the page.  Developers can choose how many slides are visible at a time by setting the
     * viewport dimensions.  The user can view other slides using a "next" and "previous" button and/or a series of
     * "jump" buttons that jump directly to a specific slide.  By default, there are five different transition types to
     * choose from which dictate what animation is used to switch from one slide to another (i.e. fade, slideHorizontal,
     * slideHorizontalInfinite, slideVertical, and slideVerticalInfinite).  The carousel can be easily extended to
     * support additional transition types by adding a new type to transitionTypes and defining the init() and
     * showSlide() functions.  There is also an autoplay feature enabled by default which will make the carousel
     * automatically cycle through slides once initialized.  The autoplay feature can be disabled by passing 0 for
     * options.autoplayDelay.
     *
     * @extends fly.base
     *
     * Example usage:
     *      <div data-component="carousel">
     *          <div data-item="viewport"> <!-- required tag -->
     *              <div data-item="canvas"> <!-- required tag -->
     *                  <div data-item="slide">First slide</div>
     *                  <div data-item="slide">Second slide</div>
     *                  <div data-item="slide">Third slide</div>
     *              </div>
     *          </div>
     *          <div data-to="1">1</div> <!-- optional, but the number of jumps must equal the number of slides -->
     *          <div data-to="2">2</div>
     *          <div data-to="3">3</div>
     *          <div data-to="prev">Previous</div>
     *          <div data-to="next">Next</div>
     *      </div>
     */

    $.widget('fly.carousel', $.fly.base, {

        // Options
        options: {
            currentSlide: 0,
            numOfVisibleSlides: 1,           // if slideWidth is not set, slide width will be carousel width divided by numOfVisbleSlides
            incrementAmount: 1,              // -1 for full viewport scrolling available in slideHorizontalInfinite
            slideHeight: null,               // height of slides and viewport
            slideWidth: null,                // width of an individual slide (overrides numOfVisibleSlides calculation)
            hidePreviousOnFirstSlide: false,

            // Update pagination
            updatePagination: false,
            pageUrlAttribute: 'page-location', // (data url)

            // Settings for cycling through the carousel automatically.
            autoplayDelay: 6000, // 0 to disable,
            autoplayPauseOnHover: true,
            autoplayPauseOnBlur: true,

            // Commonly used css classes.
            classSelected: 'selected',
            classActive: 'active', // applied to carousel on init
            classFocus: 'focused',

            // Settings for animating a slide change.
            transitionType: 'fade',
            transitionDuration: 400,
            transitionEasing: 'linear'
        },

        // Events
        // slidechanged
        // next
        // previous
        // goto
        // play
        // pause
        // stop

        // Variables
        // components
        // infinite
        // interval
        // slideWidth
        // vertical

        /**
         * Define the transition types that are available.  Each type must define init() and showSlide() functions.
         * The init() function sets any css properties that are needed at the beginning to make the animation work correctly.
         * The showSlide() function performs the animation.
         */
        transitionTypes: {
            fade: {
                init: function() {
                    var o = this.options;

                    // Set the carousel to vertical mode.
                    this.vertical = false;

                    // Initialize carousel styles.
                    this.items.slides.$elements.not('.' + o.classSelected).hide();
                },
                showSlide: function(newSlide) {
                    var o = this.options;

                    $(this.items.slides.$elements[o.currentSlide]).fadeOut(o.transitionDuration, o.transitionEasing);
                    $(this.items.slides.$elements[newSlide]).fadeIn(o.transitionDuration, o.transitionEasing);
                }
            },
            slideHorizontal: {
                init: function() {
                    var o = this.options;

                    this.items.canvas.$element.css('left', -this.slideWidth * o.currentSlide);
                },
                showSlide: function(newSlide) {
                    var o = this.options;

                    this.items.canvas.$element.animate({ left: -this.slideWidth * newSlide }, o.transitionDuration, o.transitionEasing);
                }
            },
            slideHorizontalInfinite: {
                init: function() {
                    var o = this.options;

                    // Set the carousel to infinite mode.
                    this.infinite = true;

                    // Initialize carousel styles.
                    this.items.canvas.$element.css('left', '0');

                    if (o.slideWidth && o.incrementAmount == -1) {
                        o.incrementAmount = Math.floor(this.items.container.$element.width() / parseInt(o.slideWidth));
                    }
                },
                showSlide: function(slideIncrement) {
                    var o = this.options;

                    if(slideIncrement > 0) {
                        // Push the canvas left.
                        this.items.canvas.$element.animate({ left: -this.slideWidth * slideIncrement }, o.transitionDuration, o.transitionEasing, function() {
                            // Move the no longer visible slides from the beginning of the list to the end.
                            for(var i = 0; i < slideIncrement; i++) {
                                this.items.canvas.$element.append(this.items.slides.$elements[i]);
                            }

                            // Reset the canvas position.
                            this.items.canvas.$element.css('left', '0');

                            // Update the slides list order.
                            this.items.slides.$elements = $(this.items.slides.selector, this.$element);
                        }.bind(this));
                    } else if(slideIncrement < 0) {
                        // Move the newly visible slides from the end of the list to the beginning.
                        for(var i = this.items.slides.$elements.length - 1; i >= this.items.slides.$elements.length + slideIncrement; i--) {
                            this.items.canvas.$element.prepend(this.items.slides.$elements[i]);
                        }

                        // Reset the canvas position.
                        this.items.canvas.$element.css('left', (this.slideWidth * slideIncrement) + 'px');

                        // Update the slides list order.
                        this.items.slides.$elements = $(this.items.slides.selector, this.$element);

                        // Push the canvas right.
                        this.items.canvas.$element.animate({ left: '0' }, o.transitionDuration, o.transitionEasing);
                    }
                }
            },
            slideVertical: {
                init: function() {
                    var o = this.options;

                    // Set the carousel to vertical mode.
                    this.vertical = true;

                    // Initialize carousel styles.
                    this.items.canvas.$element.css('top', -o.slideHeight * o.currentSlide);
                },
                showSlide: function(newSlide) {
                    var o = this.options;

                    this.items.canvas.$element.animate({ top: -o.slideHeight * newSlide }, o.transitionDuration, o.transitionEasing);
                }
            },
            slideVerticalInfinite: {
                init: function() {
                    var o = this.options;

                    // Set the carousel to infinite mode.
                    this.infinite = true;

                    // Set the carousel to vertical mode.
                    this.vertical = true;

                    // Initialize carousel styles.
                    this.items.canvas.$element.css('top', -o.slideHeight * o.currentSlide);
                },
                showSlide: function(slideIncrement) {
                    var o = this.options;

                    if(slideIncrement > 0) {
                        // Push the canvas up.
                        this.items.canvas.$element.animate({ top: -o.slideHeight * slideIncrement }, o.transitionDuration, o.transitionEasing, function() {
                            // Move the no longer visible slides from the beginning of the list to the end.
                            for(var i = 0; i < slideIncrement; i++) {
                                this.items.canvas.$element.append(this.items.slides.$elements[i]);
                            }

                            // Reset the canvas position.
                            this.items.canvas.$element.css('top', '0');

                            // Update the slides list order.
                            this.items.slides.$elements = $(this.items.slides.selector, this.$element);
                        }.bind(this));
                    } else if(slideIncrement < 0) {
                        // Move the newly visible slides from the end of the list to the beginning.
                        for(var i = this.items.slides.$elements.length - 1; i >= this.items.slides.$elements.length + slideIncrement; i--) {
                            this.items.canvas.$element.prepend(this.items.slides.$elements[i]);
                        }

                        // Reset the canvas position.
                        this.items.canvas.$element.css('top', (o.slideHeight * slideIncrement) + 'px');

                        // Update the slides list order.
                        this.items.slides.$elements = $(this.items.slides.selector, this.$element);

                        // Push the canvas down.
                        this.items.canvas.$element.animate({ top: '0' }, o.transitionDuration, o.transitionEasing);
                    }
                }
            }
        },

        /**
         * Initialize the carousel.
         *
         * @param options
         * @private
         */
        _create: function(options) {
            var o = this.options;

            this._setup();

            // Store the widget items for later use.
            this.items = {
                viewport: { selector: '[data-item="viewport"]' },
                canvas: { selector: '[data-item="canvas"]' },
                slides: { selector: '[data-item="slide"]' },
                next: { selector: '[data-to="next"]' },
                prev: { selector: '[data-to="prev"]' },
                jumps: { selector: '[data-to]:not([data-to="next"], [data-to="prev"])' }
            };

            //console.log($(this.items.slides.$elements[o.currentSlide]).outerHeight());

            $.each(this.items, function(name, component) {
                this.items[name].$elements = $(component.selector, this.$element);
                this.items[name].$element = (this.items[name].$elements.length > 0 ? $(this.items[name].$elements[0]) : null);
            }.bind(this));

            this.items.container = {
                $element: this.items.viewport.$element.parent()
            };

            // Mark the currently selected slide only if not in "infinite" mode.
            if(!this.infinite) {
                $(this.items.slides.$elements[o.currentSlide]).addClass(o.classSelected);
                if(this.items.jumps.$elements.length > 0) {
                    $('[data-to="' + o.currentSlide + '"]', this.items.jumps.$elements).addClass(o.classSelected);
                }
            }

            // Initialize the slide styles.
            this.$element.addClass(stringHelper.fromCamelCase(o.transitionType));
            this.transitionTypes[o.transitionType].init.bind(this)();

            // Add events.
            this._setupEvents();

            // Set the carousel width if not vertical
            if(!this.vertical) {
                this.items.viewport.$element.height(o.slideHeight);
                this.items.canvas.$element.height(o.slideHeight);
                this.items.slides.$elements.height(o.slideHeight);
                this.setWidths();
            }
            
            // Add active class to container
            this.$element.addClass(o.classActive);

            // Select the starting slide.
            $(this.items.slides.$elements[o.currentSlide]).addClass(o.classSelected);
            if(this.items.jumps.$elements.length > 0) {
                $(this.items.jumps.$elements[o.currentSlide]).addClass(o.classSelected);
            }

            // Hide Previous Button.
            if(o.hidePreviousOnFirstSlide && o.currentSlide > 0) this.checkPreviousButton(o.currentSlide);

            // Start the autoplay.
            if(o.autoplayDelay > 0) {
                this.autoplay();
            }
        },

        /**
         * Add events to widget components.
         *
         * @private
         */
        _setupEvents: function() {
            var self = this,
                o = self.options,
                eventMap = {};

            // Set next and previous button events.
            eventMap[clickEventName+' '+this.items.next.selector] = 'next';
            eventMap[clickEventName+' '+this.items.prev.selector] = 'previous';

            // Set jump event only if not in "infinite" mode.
            if(!this.infinite) {
                eventMap[clickEventName+' '+this.items.jumps.selector] = function(event) {
                    self.goto(parseInt($(event.target).data('to'), 10));
                };
            }

            // Give slides focus when hovering over them.
            this.items.slides.$elements.on('hover', function(event) {
                self.items.slides.$elements.removeClass(o.classFocus);
                $(this).addClass(o.classFocus);
            });

            // Set width resize event only if not in "vertical" mode.
            if(!this.vertical) {
                this._on(this.$window, {
                    'resize': function(event) {
                        self.setWidths();
                    }
                });
            }

            // Initialize autoplay.
            if(o.autoplayDelay > 0) {
                // Set autoplay events.
                if(o.autoplayPauseOnHover) {
                    $.extend(eventMap, {
                        'mouseenter': function(event) {
                            if(self.interval) {
                                self.pause();
                            }
                        },
                        'mouseleave': function(event) {
                            if(!self.interval) {
                                self.autoplay();
                            }
                        }
                    });
                }
                if(o.autoplayPauseOnBlur) {
                    this._on(this.$window, {
                        'blur': function(event) {
                            if(self.interval) {
                                self.pause();
                            }
                        },
                        'focus': function(event) {
                            if(!self.interval) {
                                self.autoplay();
                            }
                        }
                    });
                }
            }

            this._on(this.$element, eventMap);
        },

        /**
         * Helper function for the autoplay feature that shows the next slide in the carousel.
         *
         * @private
         */
        _autoplayNextSlide: function() {
            var o = this.options;

            this.showSlide(this.infinite ? o.incrementAmount
                : (o.currentSlide + o.incrementAmount) % this.items.slides.$elements.length);
        },

        /**
         * Updates the push state in supported browsers
         *
         * @param path (string) Path to update to
         * @private
         */
        _updatePushState: function(path){
            if (history.pushState) {
                history.pushState(null, null, path);
            }
        },

        /**
         * Display a slide.
         *
         * @param newSlide (int) The index of the slide to show.
         * @public
         */
        showSlide: function(newSlide) {
            var o = this.options;

            // Use the transition type's instructions for showing the new slide.
            this.transitionTypes[o.transitionType].showSlide.bind(this)(newSlide);

            // Update the currently selected slide only if not in "infinite" mode.
            if(!this.infinite) {
                // Deselect any slide that may already be selected.
                this.items.slides.$elements.removeClass(o.classSelected);
                this.items.jumps.$elements.removeClass(o.classSelected);

                // Select the new slide.
                $(this.items.slides.$elements[newSlide]).addClass(o.classSelected);
                if(this.items.jumps.$elements.length > 0) {
                    $(this.items.jumps.$elements[newSlide]).addClass(o.classSelected);
                }

                // Mark the new slide as current.
                o.currentSlide = newSlide;
            }

            // Update push state
            if(o.updatePagination){
                this._updatePushState($(this.items.slides.$elements[newSlide]).data(o.pageUrlAttribute));
            }

            // Trigger event.
            this._trigger('slidechanged');
        },

        /**
         * Alias for showSlide that also stops autoplay and triggers a "next" event.
         *
         * @public
         */
        next: function() {
            var o = this.options;

            this.pause(true);
            this.showSlide(this.infinite ? o.incrementAmount
                : (o.currentSlide + o.incrementAmount) % this.items.slides.$elements.length);
            if(o.hidePreviousOnFirstSlide) this.checkPreviousButton(o.currentSlide);
            this._trigger('next');
        },

        /**
         * Alias for showSlide that also stops autoplay and triggers a "previous" event.
         *
         * @public
         */
        previous: function() {
            var o = this.options;

            this.pause(true);
            this.showSlide(this.infinite ? -o.incrementAmount
                : (o.currentSlide + this.items.slides.$elements.length - o.incrementAmount) % this.items.slides.$elements.length);
            if(o.hidePreviousOnFirstSlide) this.checkPreviousButton(o.currentSlide);
            this._trigger('previous');
        },

        /**
         * Alias for showSlide that also stops autoplay and triggers a "goto" event.
         *
         * @param newSlide (int) The index of the slide to show.
         * @public
         */
        goto: function(newSlide) {
            var o = this.options;
            this.pause(true);
            this.showSlide(newSlide);
            if(o.hidePreviousOnFirstSlide) this.checkPreviousButton(newSlide);
            this._trigger('goto');
        },

        /**
         * Enable autoplay for the carousel unless the carousel is already autoplaying or it has already been paused permanently.
         *
         * @public
         */
        autoplay: function() {
            var o = this.options;

            if(o.autoplayDelay > 0) {
                this.interval = setInterval(this._autoplayNextSlide.bind(this), o.autoplayDelay);
                this._trigger('play');
            }
        },

        /**
         * Stop autoplaying the carousel.
         *
         * @param permanently (bool) If true, prevent the carousel from ever autoplaying again.  Otherwise, it can be enabled
         *      again by calling autoplay().
         * @public
         */
        pause: function(permanently) {
            var o = this.options;

            clearInterval(this.interval);
            this.interval = null;
            this._trigger('pause');

            if(permanently) {
                o.autoplayDelay = 0;
                this._trigger('stop');
            }
        },

        /**
         * Calculate the slide and canvas widths based on the viewport width.
         *
         * @public
         */
        setWidths: function() {
            var o = this.options;
            
            this.slideWidth = o.slideWidth ? parseInt(o.slideWidth) : this.items.container.$element.width() / this.options.numOfVisibleSlides;
            this.items.slides.$elements.width(this.slideWidth);
            this.items.canvas.$element.width(this.slideWidth * this.items.slides.$elements.length);
            this.items.canvas.$element.css('left', -this.slideWidth * o.currentSlide);
        },

        /**
         * Check if the current slide is the first and hide previous pagination button
         *
         * @param currentSlide
         *
         */
        checkPreviousButton: function(currentSlide){
            if(currentSlide === 0) {
                $(this.items.prev.selector).css('visibility', 'hidden');
            } else {
                $(this.items.prev.selector).css('visibility', 'visible');
            }
        }

    });

});


define('components/carousel-1.0',[
    'jquery',
    'version!fly/components/carousel'
], function ($) {

    $.widget('fly.carousel', $.fly.carousel, {

        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            // Commonly used css classes.
            //classSelected: 'selected'
        },

        /**
         * Instantiate the carousel
         * @constructor
         */
        _create: function () {

            var o = this.options;

            //Call Parent Carousel _create 
            this._super('_create');

            $jumps = this.$element.find('.jump');
            
            this._setJumps($jumps);

        },

        _setJumps: function ($jumps) {
            $jumps.width(100/$jumps.size() + '%');
        }
        
    });

});

define('fly/components/dropdown-1.0',[
    'jquery', 
    'version!fly/components/base'
], function($) {

    //Determines which click event to use depending if jQuery mobile is used and if it is a touch device
    var isTouchDevice = (('ontouchstart' in window) || ('onmsgesturechange' in window)) ? true : false,
        clickEventName = ($.mobile) ? 'vclick' : 'click';
    

    /**
     * Show and hide content based on a set of tabs
     *
     * @extends cbsi.component
     * 
     * Example Usage: 
     *      
     *      $('#my-dropdown').dropdown();
     *      
     *      <div id="my-dropdown" data-dropdown-options='{}'></a>
     *          <a data-item="trigger">Dropdown</a>
     *          <div>Content</div>
     *      </div>
     *
     */
    $.widget( 'fly.dropdown', $.fly.base, {
        
        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            classSelected: 'selected',
            event: 'click', // click | hover
            selectorTrigger: '[data-item="trigger"]'
            //shown: $.noop dropdown is shown
            //hidden: $.noop dropdown is hidden
        },

        // Vars
        $element: null, // {Object} Dropdown element
        $trigger: null, // {Object} Dropdown trigger element

        enterTimeout: null,
        leaveTimeout: null,
        
        /**
         * Instantiate Tabs
         * @constructor
         */
        _create: function() {
            var o = this.options,
                eventMap = {};
            
            this._setup();
            
            //If touch is supported, force the event to be click
            if (isTouchDevice) {
                o.event = 'click';
            }
            
            // DOM els
            this.$element = this.$element;
            this.$trigger = this.$element.find(o.selectorTrigger).first();

            // click 
            if ('click' === o.event) {
                eventMap[clickEventName] = '_handleClick';
                this._on(this.$trigger, eventMap);
            // hover
            } else if ('hover' === o.event) {
                this._on(this.$element, {
                    'mouseenter': '_handleMouseEnter',
                    'mouseleave': '_handleMouseLeave'
                });
            }
        
            
        },

        /**
         * Handle the tab click event
         *
         * @param e The click event
         * @private
         */        
        _handleClick: function(e) {
            e.preventDefault();
            //e.stopPropagation();
        
            this.toggle();
        },


        /**
         * Handle the mouseenter event
         *
         * @param e The click event
         * @private
         */        
        _handleMouseEnter: function(e) {
            var self = this;
            
            clearTimeout(this.leaveTimeout);
            
            this.enterTimeout = setTimeout(function() {
                self.show();
            }, 50);
        },

        /**
         * Handle the mouseleave event
         *
         * @param e The click event
         * @private
         */        
        _handleMouseLeave: function(e) {
            var self = this;
            
            clearTimeout(this.enterTimeout);

            this.leaveTimeout = setTimeout(function() {
                self.hide();
            }, 150);
        },

        /**
         * Close dropdown on a click outside of it
         *
         * @param e The click event
         * @private
         */  
        _handleDocClick: function(e) {
            var $el = $(e.target);
        
            // If the element clicked on is not a child of the dropdown and is still in the doc
            // then allow hide
            if (this.$element.has($el).length === 0 && $.contains(document.documentElement, $el[0])) {
                this.hide();
            }
        },

        /**
         * Show the dropdown
         */ 
        show: function() {
            var self = this,
                o = this.options,
                eventMapClick = {};
            
            this.$element.addClass(o.classSelected);
            
            // delay docClick so it doesn't fire on show click
            setTimeout(function() {
                eventMapClick[clickEventName] = '_handleDocClick';
                self._on(self.$document, eventMapClick);
            }, 1);
            
            this._trigger('shown', null, {
                $element: this.$element,
                $trigger: this.$trigger
            });
        },

        /**
         * Hide the dropdown
         */ 
        hide: function() {
            var o = this.options;
            
            this.$element.removeClass(o.classSelected);
            
            this._off(this.$document, clickEventName); 
            
            this._trigger('hidden', null, {
                $element: this.$element,
                $trigger: this.$trigger
            });
        },

        /**
         * Toggle the show/hide states of the dropdown
         */ 
        toggle: function() {
            var o = this.options,
                isSelected = this.$element.hasClass(o.classSelected);

            this[(isSelected) ? 'hide' : 'show' ]();
        }
    });
});



/*  
 *  Taken from jQuery UI Core
 *  http://api.jqueryui.com/data-selector/
 *
 *  Ex: jQuery( ":data(key)" )
 */
define('fly/utils/data-selector-1.0',['jquery'], function($) { 

    $.extend( $.expr[ ':' ], {
        data: $.expr.createPseudo(function( dataName ) {
            return function( elem ) {
                return !!$.data( elem, dataName );
            };
        })
    });

});

/* 
 * String Variables
 * Compile variables in a string with the format {varName}
 * 
 * Compiling:
 *  Example:
 *    compile('Hello {name}, Good {time}', {name: 'Lucy', time: 'Morning' });
 *    returns: Hello Lucy, Good Morning
 * 
 * Modifiers - Modify the value of the compiled string:
 *  Example:
 *    {name|upper} - Upper cases the name
 *    {name|urlencode} - Urlencode the name
 *
 */

 define('fly/utils/string-vars-1.0',['jquery'], function ($) {
 
    return {

        compile: function(val, data, globalMods) {
            var self = this;
            
            if (typeof val !== 'string') {
                return '';
            }
            
            globalMods = $.makeArray(globalMods);

            //find variables {siteId}
            val = val.replace(/\{([^}]+)\}/g, function(match) {
                var mods = globalMods,
                    dataVal = '';
                
                //find modifiers {XXXX|lower}
                match = match.replace(/\|[^\}|]+/g, function(mod) {
                    // add to modifier array
                    mods.push(mod.substr(1));

                    return '';
                });
                
                dataVal = data[match.replace(/[{}]+/g, '')] || '';
                
                $.each(mods, function(i, mod) {
                    dataVal = self.modify(mod, dataVal);
                });
                
                return dataVal;
            });

            return val;
        },
        
        modify: function(modifier, val) {
            switch(modifier) {
                case 'lower':
                    val = val.toLowerCase();
                    break;
                case 'upper':
                    val = val.toUpperCase();
                    break;
                case 'urlencode':
                    val = encodeURIComponent(val);
            }
            
            return val;
        }
    };

});


define('fly/components/loading-1.0',[
    'jquery', 
    'version!fly/utils/string-vars',
    'version!fly/components/base'
], function($, strVars) {
    
    /**
     *
     * @extends cbsi.component
     *
     * Displays and/or tracks status. Can be used to add/remove a loader gif,
     * as well as manage more complex states, such as 'start', 'end', 'error', etc.
     *
     * Each state should have a name (ex: loading, end, start), and should be given a class 
     * and text string in the options if the status is to be displayed to the user. 
     *
     * The default variables for the template are: state, baseClass, stateClass, text
     * Ex: '<div class="{baseClass} {stateClass}">{state}: {text}</div>'
     * Calling: loader.update('end');
     * Would compile to: <div class="loader load-end">end: The end</div>
     *
     * Custom data passed to update allows for custom variables on template:
     * Ex: '<div>{state}: {foo}, {bar}, {baz}</div>'
     * Calling: loader.update('test', {foo: '1', bar: '2'});
     * The 'end' state would compile to: <div>test: 1, 2</div>
     *
     * Optionally, you could only use loading to internally manage the state of a system,
     * and never show anything to the user
     *
     * 
     * Example Usage: 
     *  
     *      var loader = $.fly.loading(options);
     *  
     *  Show template:
     *  Inject the loader.$element someplace in the DOM
     *
     *      loader.$element.appendTo($('#show-loading-here'));
     *
     *  Simple loading:
     *      
     *      loader.add();
     *      loader.remove();
     *      loader.isLoading() // returns true or false
     *
     *  Loading States:
     *      Update to a state:
     *      loader.update(state);
     *
     *      Update to a state w/ custom data:
     *      loader.update(state, {foo: 'bar'});
     *
     * Notes:
     *  In the future, loading may be re-written as a component that
     *  extends a general status component. This script really contains
     *  multiple types of functionality that don't fit under the name loading
     *
     */
     
    $.widget( 'fly.loading', $.fly.base, {
        
        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            disabled: false,
            delay: 100, // start delay to reduce flicker from quick removal
            timeout: 25000, // miliseconds before loading is stopped
            initState: '', // idle|loading|etc..
            template: '<div class="{baseClass} {stateClass}"><span class="text">{text}</span></div>',
            classes: {
                base: 'loader',
                idle: '',
                loading: 'loading',
                end: 'load-end',
                error: 'load-error'
            },
            text: {
                idle: '',
                loading: 'Loading',
                end: 'The End',
                error: 'Error Encountered :('
            }

            //add: $.noop
            //added: $.noop
            //remove: $.noop
            //removed: $.noop
            //updated: $.noop
        },

        /**
         * Instantiate Tabs
         * @constructor
         */
        _create: function() {
            this._setup();
            
            this._state = null;
            this._timeoutId = null;
        },

        _init: function() {
            var o = this.options;
            
            if (!o.disabled && o.initState) {
                this._setContent(o.initState);
                
                this._state = o.initState;
            }
        },
        
        _setContent: function(state, data) {
            var o = this.options,
                template;
                
            if (state === 'remove') {
                this.$element.empty();
                return;
            }
            
            template = strVars.compile(o.template, $.extend({
                'state': state,
                'baseClass': o.classes.base,
                'stateClass': o.classes[state],
                'text': o.text[state]
            }, data));
                
            this.$element.html(template);
        },

        add: function() {
            var o = this.options;
            
            if (this._trigger('add') === false) return;

            this.update('loading');
            
            // stop loading after timeout
            if (typeof o.timeout === 'number' && o.timeout > 0) {
                this._timeoutId = setTimeout($.proxy(this.remove, this), o.timeout);
            }

            this._trigger('added');
        },

        remove: function() {
            if (this._trigger('remove') === false) return;

            this.update('remove');
            
            this._trigger('removed');
        },

        update: function(state, data) {
            var o = this.options,
                eventData = {state: state};
            
            if (this._trigger('update', null, eventData) === false) return;

            this._state = state;
            
            // if disabled don't set content
            if (o.disabled) return;

            // cancel loading timeout
            clearTimeout(this._timeoutId);
            
            this._setContent(state, data);
            
            this._trigger('updated', null, eventData);
        },

        isLoading: function() {
            return (this._state === 'loading') ? true : false;
        },

        getState: function() {
            return this._state;
        },

        /**
         * Respond to option setting 
         * @private
         */
        _setOption: function(key, value) {
            var o = this.options;
            
            // handle data
            if (key === 'data') {
                this.$element.data('data', value); 
            // handle disabled
            } else if (key === 'disabled') {
                if (value === true) {
                    this.$element.empty();
                } else {
                    this._setContent(o.initState);
                }
            }
            
            this._super(key, value);
        },
        
        _destroy: function() {
            this.$element.remove();
        }
    });

});



define('fly/components/tabs-1.0',[
    'jquery', 
    'version!fly/components/base',
    'version!fly/utils/data-selector'
], function($) {
    
    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click';
    
    /**
     * Show and hide content based on a set of tabs
     *
     * @extends cbsi.component
     * 
     * Example Usage: 
     *      
     *      $('#my-tabs').tabs();
     *
     *      <ul id="my-tabs" data-tabs-options="'{}'">
     *          <li data-item="trigger" data-target="#content-1">Tab 1</li>
     *          <li data-item="trigger" href="#content-2">Tab 2</li>
     *      </ul>
     *
     *      <div id="content-1">Content A</div>
     *      <div id="content-2">Content B</div>
     *
     * Data api:
     *
     *      Change to a tab:
     *          <a data-tabs-show="#content-2">Open Tab 2</a>
     *
     */
    $.widget( 'fly.tabs', $.fly.base, {
        
        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            tabSelector: '[data-item="trigger"]',
            classSelected: 'selected',
            enableDeselect: false
            //shown: $.noop(), tab is shown
            //hidden: $.noop() tab is hidden
        },

        /**
         * Instantiate Tabs
         * @constructor
         */
        _create: function() {
            var o = this.options,
                eventMap = {};
            
            this._setup();
            
            eventMap[clickEventName+' '+o.tabSelector] = '_handleClick';

            this._on(this.$element, eventMap);
        },

        /**
         * Handle the tab click event
         *
         * @param e The click event
         * @private
         */        
        _handleClick: function(e) {
            var o = this.options,
                $tab = $(e.target).closest(o.tabSelector);
            
            e.preventDefault();
        
            this.change($tab);
        },
        
        /**
         * Find the content element related to a tab
         *
         * @param $tab The tab element for which to get the content
         * @private
         */ 
        _getContent: function($tab) {
            var data = $tab.data() || {},
                $content = data.$content || [], // do we have a ref to $content already
                selector; 
            
            if ($content.length) {
                return $content;
            } else {
                selector = data.target || $tab.attr('href');
                $content = $(selector);
                
                // store $content in data for easy lookup
                $tab.data('$content', $content);
                
                return $content;
            }
        },

        /**
         * Activate a tab and it's content
         *
         * @param $tab The tab element for which to get the content
         * @private
         */ 
        _show: function($tab) {
            var o = this.options,
                $content;
            
            if (this._trigger('show', null, {$tab: $tab}) === false) return;
        
            $content = this._getContent($tab);
            
            $tab.addClass(o.classSelected);
            $content.addClass(o.classSelected);
            
            this._trigger('shown', null, {
                $tab: $tab,
                $content: $content
            });
        },

        /**
         * Deactivate a tab and it's content
         *
         * @param $tab The tab element for which to get the content
         * @private
         */ 
        _hide: function($tab) {
            var o = this.options,
                $content;
            
            if (this._trigger('hide', null, {$tab: $tab}) === false) return;
        
            $content = this._getContent($tab);
            
            $tab.removeClass(o.classSelected);
            $content.removeClass(o.classSelected);
            
            this._trigger('hidden', null, {
                $tab: $tab,
                $content: $content
            });
        },

        /**
         * Manage the the process of hiding and showing a tab
         *
         * @param $tab The tab element for which to get the content
         */ 
        change: function($tab) {
            var o = this.options,
                $previous,
                data;
            
            $previous = this.$element.find(o.tabSelector+'.'+o.classSelected);
            data = $tab.data();

            if ($tab.hasClass(o.classSelected)) {
                if (o.enableDeselect) this._hide($previous);
                return;
            }

            this._hide($previous);
            this._show($tab);
        }
    });


    // External Data-api
    $(document).on(clickEventName+'.tabs-api', '[data-tabs-show]', function(e) {
        var $this = $(this),
            data = $this.data(),
            $tab = $(data.tabsShow || $this.attr('href')),
            $parent;
        
        e.preventDefault();
        
        if ($tab.length) {
           $parent = $tab.parents(':data(tabs)');
           
            if ($parent.length) {
                $parent.data('tabs').change($tab);
            }
        }            
    });
});



define('components/tabs-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/managers/cookie',
    'version!fly/utils/data-selector',
    'version!fly/components/loading',
    'version!fly/components/tabs'
], function($, debugMgr, cookieMgr) {

    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click',
        debug = debugMgr.init('tabs');

    /**
     * Show and hide content based on a set of tabs
     * Has the option to cookie tabs
     *
     * @extends cbsi.component
     *
     * Example Usage:
     *
     *      $('#my-tabs').tabs();
     *
     *      <ul id="my-tabs" data-tabs-options="'{}'">
     *          <li data-item="trigger" data-target="#content-1">Tab 1</li>
     *          <li data-item="trigger" href="#content-2">Tab 2</li>
     *      </ul>
     *
     *      <div id="content-1">Content A</div>
     *      <div id="content-2">Content B</div>
     *
     * Data api:
     *
     *      Change to a tab:
     *          <a data-show="my-tabs" data-target="#content-2">Open Tab 2</a>
     *
     */
    $.widget( 'fly.tabs', $.fly.tabs, {

        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            cookie: {
                enabled: false,
                name: 'fly_tabs',
                domain: 'techrepublic.com'
            },
            pushStateHash: true
        },

        /**
         * Instantiate Tabs
         * @constructor
         */
        _create: function() {
            var o = this.options,
                eventMap = {},
                selected;

            // Call parent
            this._super('_create');

            // setup hasTabData
            this.elementId = this.$element.attr('id') || null;
            this.viewedTabs =  cookieMgr.get(o.cookie.name) || {};

            this.hasTabData = (o.cookie.enabled && (this.elementId in this.viewedTabs)) ? true : false;
            debug.log("CookieData: ",this.viewedTabs);
            debug.log("Cookie enabled: "+o.cookie.enabled+", ElementId: "+this.elementId+", Have tab data? "+this.hasTabData);

            if(this.hasTabData) {
                debug.log("Does data exist: ",this.viewedTabs[this.elementId]);
                selected = this.$element.find("[href='"+this.viewedTabs[this.elementId]+"']");
                this.change(selected);
            }

            if (window.location.hash) {
                this.change($('[data-target="' + window.location.hash + '"],[href="' + window.location.hash + '"]'));
            }

        },

        /**
         * Activate a tab and it's content
         *
         * @param $tab The tab element for which to get the content
         * @private
         */
        _show: function($tab) {
            var o = this.options,
                $content = this._getContent($tab);

            $tab.addClass(o.classSelected);
            $content.addClass(o.classSelected);

            // update cookie if enabled
            debug.log("Cookie enabled check: ",o.cookie.enabled);
            if (o.cookie.enabled) {
                this.viewedTabs[this.elementId] = $tab.attr("href");
                debug.log("Set cookie: ", JSON.stringify(this.viewedTabs));
                cookieMgr.set(o.cookie.name, JSON.stringify(this.viewedTabs), {expires: 365, path: '/', domain: o.cookie.domain});
            }

            this._trigger('shown', null, {
                $tab: $tab,
                $content: $content
            });
        },

        /**
         * Find the content element related to a tab
         *
         * @param $tab The tab element for which to get the content
         * @private
         */
        _getContent: function($tab) {
            var data = $tab.data() || {},
                $content = data.$content || [], // do we have a ref to $content already
                selector;

            if ($content.length) {
                return $content;
            } else {
                selector = data.target || $tab.attr('href');
                $content = $(selector);

                //Check if we need to AJAX in tab content
                $container = $($content[0]).find('[data-tab-url]');
                url = $container.data('tab-url');
                if (url) {
                    loader = $.fly.loading({disabled: false});
                    loader.$element.prependTo($content);
                    loader.add();
                    //Remove Alerts
                    $($content[0]).find('.alert').remove();

                    this._requestTabData(url, function(tab){
                        if (tab) {
                            $container.data('tab-url', false);
                            $container.append(tab);
                        } else {
                            $('<div class="alert alert-error">There was an error loading tab data. Please switch tabs and try again.</div>').prependTo($content);
                            $tab.data('$content', []);
                        }

                        loader.remove();
                    });
                } else {
                   // store $content in data for easy lookup
                   $tab.data('$content', $content);
                }

                return $content;

            }
        },

        /**
         * Ajax request for Tab Content
         *
         * @param $url The URL to request the tab content
         * @param fn   The callback funtion after ajax is complete
         */
        _requestTabData: function($url, fn) {

            debug.log("AJAX requesting tab from ", $url);

            $.ajax({
                url: $url,
                type: 'GET',
                dataType: 'json'
            })
            .done(function(data) {
                debug.log("success requesting tab from ", $url);
                if (typeof fn == 'function') {
                    if (data.error) {
                        fn(false);
                    } else {
                        fn($(data.html));
                    }
                }
            })
            .fail(function() {
                debug.log("AJAX error");
                if (typeof fn == 'function') {
                  fn(false);
                }
            })
            .always(function() {
                debug.log("AJAX complete");
            });

        },

        /**
         * Manage the the process of hiding and showing a tab
         *
         * @param $tab The tab element for which to get the content
         */
        change: function($tab) {
            var o = this.options,
                $previous,
                target = $tab.data('target'),
                url = window.location.pathname ? window.location.pathname : '',
                regex = /\/(\d+)\//,
                data;

            if ($tab.hasClass(o.classSelected)) {
                return;
            }

            if (!target) target = $tab.attr('href');

            $previous = this.$element.find(o.tabSelector+'.'+o.classSelected);
            data = $tab.data();

            this._hide($previous);
            this._show($tab);

            if (o.pushStateHash) {
                debug.log('Updating URL:', url);
                history.pushState(null, document.title, url+target);
            }
        }
    });


    // External Data-api
    $(document).on(clickEventName+'.tabs-api', '[data-show="tabs"]', function(e) {
        var $this = $(this),
            data = $this.data(),
            $tab = $(data.target || $this.attr('href')),
            $parent;

        e.preventDefault();

        if ($tab.length) {
           $parent = $tab.parents(':data(tabs)');

            if ($parent.length) {
                $parent.data('tabs').change($tab);
            }
        }
    });
});


/**
 * This RequireJS plugin enables individual dependencies to be declared as optional.
 *
 * By default, if any dependency fails to load, any other modules that utilize it via require/define calls will also
 * fail, bubbling upward through the call stack. Thus, if Tealium or another 3rd party goes down or is blocked for any
 * reason, large parts of our own JS will error out as well, potentially causing core site functionality to fail.
 *
 * By updating the dependencies to define them as optional, you can ensure that the calling JS continues to execute.
 * This plugin will return a 'default' response in lieu of the actual dependency being returned should an error occur
 * loading the module. However, this requires you to define/customize the default response returned by this plugin for
 * the particular use case and/or ensure that proper error handling is performed in the calling JS to accommodate the
 * 'default' response since it will not include the data/functionality expected from the actual module.
 *
 * Example usage:
 *      Replace this:
 *          require(['components/someDependency'], function(myDependency) {
 *              myDependency.someMethod();
 *          });
 *      With this:
 *          require(['optional!components/someDependency'], function(myDependency) {
 *              try {
 *                  myDependency.someMethod();
 *              } catch (e) {
 *                  debug.log('someMethod() threw an exception or the method was not defined.')
 *                  debug.log('Since this is an optional module, perhaps I didn't someMethod() to the default response.')
 *              }
 *          });
 *
 *
 *      And then update getDefaultModuleResponse() within this file as desired:
 *          var getDefaultModuleResponse = function(failedModule) {
 *              var defaultResponse = {};
 *
 *              if ('components/someDependency' === failedModule) {
 *                  defaultResponse = {
 *                      someMethod: function() {
 *                          // Some logic goes here
 *                      }
 *                  }
 *              }
 *
 *              return defaultResponse;
 *          };
 */
define("optional", [], {
    load: function(moduleName, parentRequire, onload) {
        /**
         * Returns a hard-coded, default response for a RequireJS module that failed to load. May be customized to
         * return a customized default response on a per-module basis.
         *
         * @param {string} failedModule
         *
         * @returns {object}
         *
         * @public
         * @method getDefaultModuleResponse
         */
        var getDefaultModuleResponse = function(failedModule) {
            var defaultResponse = {};

            // Report the error if possible.
            if ('object' === typeof console && 'function' === typeof console.log) {
                console.log("The RequireJS Optional plugin is returning the following default response for the module: " + failedModule, defaultResponse);
            }

            return defaultResponse;
        };

        /**
         * Event handler for successfully loading a RequireJS module.
         * This is just a pass-through to enable the default action.
         *
         * @param {object} moduleInstance
         *
         * @public
         * @method onLoadSuccess
         */
        var onLoadSuccess = function(moduleInstance) {
            onload(moduleInstance);
        };

        /**
         * Event handler for failing to load a RequireJS module. This may occur due to a server error, a network
         * outage, a JS parsing exception, or a RequireJS timeout. When it does, this method will prevent the exception
         * from bubbling up the call stack, and instead redefine the module with a default/hard-coded response (which
         * may be customized in the function getDefaultModuleResponse).
         *
         * @param {object} error
         *
         * @public
         * @method onLoadFailure
         */
        var onLoadFailure = function(error) {
            // Get the name of the module that failed to load.
            var failedModule = error.requireModules && error.requireModules[0];

            // Report the error if possible.
            if ('object' === typeof console && 'function' === typeof console.error) {
                console.error("Failed to load RequireJS module: " + failedModule + "; the Optional plugin is handling the following exception:", error);
            }

            if (failedModule) {
                // Un-define the module to cleanup internal stuff in RequireJS.
                requirejs.undef(failedModule);

                // Redefine the RequireJS module, using a hard-coded response as a substitute for the failed file.
                // This is generally expected to be an object, the the format may vary based on the module and what uses it.
                define(failedModule, [], function() {
                    return getDefaultModuleResponse(failedModule);
                });

                // Manually require the redefined module and call the success handler, forcing RequireJS to use the default
                // response defined above.
                parentRequire([failedModule], onLoadSuccess);
            }
        };

        // Register the success and failure functions for the specified module.
        parentRequire([moduleName], onLoadSuccess, onLoadFailure);
    }
});

/**
 * Provides common urs functionality.
 *
 * @class ursHelper
 */
define('utils/urs-helper',[
    'jquery',
    'version!fly/managers/debug',
    'optional!urs'
], function($, debug) {
    debug = debug.init('ursHelper');

    // Mapping of app ids to social app ids.
    var socialAppIds = {
        // TechRepublic
        309: 344,
        311: 344,
        312: 344,
        356: 344
    };

    return {
        /**
         * Find the social app id that maps to the given app id.
         *
         * @public
         * @method getSocialAppId
         *
         * @param appId {int} The app id that is mapped to the social app id being requested.
         *
         * @return The social app id that is mapped to the app id given.
         */
        getSocialAppId: function(appId) {
            return socialAppIds[appId];
        },

        /**
         * Get or create an instance of urs for social authentication.
         *
         * @public
         * @method getUrs
         *
         * @param appId {int} The urs app id the instance uses.
         * @param setupSocialEvents {function} The callback function used to initialize social events; takes the urs object as a parameter.
         *
         * @return An instance of urs using the given urs app id.
         */
        getUrs: function(appId, setupSocialEvents) {
            var urs = {};

            if ('object' === typeof window.URS && 'function' === typeof URS.getInstance && 'function' === typeof URS.newInstance) {
                urs = URS.getInstance(appId, 'v2.2');
                urs = URS.newInstance({
                    appId: appId,
                    environment: URS.ursEnvironments.LIVE,
                    version: 'v2.2',
                    clientToken: '5924deb58c854a58'
                });

                if (setupSocialEvents) {
                    setupSocialEvents(urs);
                }
            }

            return urs;
        },

        /**
         * Map social site value to URS internal representation
         *
         * @param socialSite {string} the social site value to be mapped
         *
         * @public
         * @method getSocialSite
         */
        getSocialSite: function(socialSite) {
            /** Variable to hold the return string */
            var social = '';

            /** Lowercases the social site for comparison */
            site = socialSite.toLowerCase();

            /** Checks to see what the social site is and returns the ENUM value from the URS JavaScript SDK */
            if (socialSite.indexOf('facebook') >= 0) {
                social = URS.social.sites.FACEBOOK;
            } else {
                social = URS.social.sites.LINKED_IN;
            }

            /** Returns the ENUM value */
            return social;
        }
    };
});
/**
 * Manage edition (i.e. as, au, eu, in, uk, us, etc.).
 *
 * @class edition
 */
define('managers/edition',[
    'jquery',
    'version!fly/managers/debug',
    'managers/page-vars'
], function(
    $,
    debug,
    pageVars
) {
    debug = debug.init('edition');

    // Constants
    var editions = {
        as: {
            code: 'as',
            name: 'Asia',
            language: 'en'
        },
        au: {
            code: 'au',
            name: 'Australia',
            language: 'en'
        },
        eu: {
            code: 'eu',
            name: 'Europe',
            language: 'en'
        },
        'in': {
            code: 'in',
            name: 'India',
            language: 'en'
        },
        uk: {
            code: 'uk',
            name: 'United Kingdom',
            language: 'en'
        },
        us: {
            code: 'us',
            name: 'United States',
            language: 'en'
        }
    };

    // Variables
    var editionData = {'code':'us'};

    // Public functions
    var manager = {
        /**
         * Get an edition code.
         *
         * @public
         * @method getEdition
         *
         * @param [edition] {string} The edition to get the code for; defaults to the current edition.
         *
         * @return The code of an edition.
         */
        getEdition: function(edition) {
            return editions[edition || editionData.code].code;
        },

        /**
         * Get name of an edition.
         *
         * @public
         * @method getName
         *
         * @param [edition] {string} The edition to get the name for; defaults to the current edition.
         *
         * @return The name of an edition.
         */
        getName: function(edition) {
            return editions[edition || editionData.code].name;
        },

        /**
         * Get language of an edition.
         *
         * @public
         * @method getLanguage
         *
         * @param [edition] {string} The edition to get the language for; defaults to the current edition.
         *
         * @return The language of an edition.
         */
        getLanguage: function(edition) {
            return editions[edition || editionData.code].language;
        },

        /**
         * Check if the edition is Asia.
         *
         * @public
         * @method isAsia
         *
         * @return True if the edition is au; false, otherwise.
         */
        isAsia: function() {
            return editionData.code === editions.as.code;
        },

        /**
         * Check if the edition is Australia.
         *
         * @public
         * @method isAustralia
         *
         * @return True if the edition is au; false, otherwise.
         */
        isAustralia: function() {
            return editionData.code === editions.au.code;
        },

        /**
         * Check if the edition is Europe.
         *
         * @public
         * @method isEurope
         *
         * @return True if the edition is eu; false, otherwise.
         */
        isEurope: function() {
            return editionData.code === editions.eu.code;
        },

        /**
         * Check if the edition is India.
         *
         * @public
         * @method isIndia
         *
         * @return True if the edition is in; false, otherwise.
         */
        isIndia: function() {
            return editionData.code === editions['in'].code;
        },

        /**
         * Check if the edition is United Kingdom.
         *
         * @public
         * @method isUnitedKingdom
         *
         * @return True if the edition is uk; false, otherwise.
         */
        isUnitedKingdom: function() {
            return editionData.code === editions.uk.code;
        },

        /**
         * Check if the edition is United States.
         *
         * @public
         * @method isUnitedStates
         *
         * @return True if the edition is us; false, otherwise.
         */
        isUnitedStates: function() {
            return editionData.code === editions.us.code;
        },

        /**
         * Check if the language is English.
         *
         * @public
         * @method isLanguageEnglish
         *
         * @return True if the language is en; false, otherwise.
         */
        isLanguageEnglish: function() {
            return editions[editionData.code].language === 'en';
        },

        /**
         * Check if the language is Espanol.
         *
         * @public
         * @method isLanguageEspanol
         *
         * @return True if the language is es; false, otherwise.
         */
        isLanguageEspanol: function() {
            return editions[editionData.code].language === 'es';
        }
    };

    return manager;
});
define('translations/form-validate',[
    'managers/edition'
], function (edition) {
    var translations = {
        en: {
            availableEmail: 'Email is already in use',
            availableUsername: 'User Name is already in use',
            email: 'Please enter a valid email',
            equalTo: 'Fields do not match',
            forumTopics: 'You must choose 1 - {maxcount} options',
            generic: 'There was a problem with your submission. Please check every field and try again.',
            minlength: 'This field must be at least {minlength} characters',
            maxlength: 'This field must be no more than {maxlength} characters',
            noSpecialCharacters: 'The special characters @, &, and % are not allowed in this field',
            noUrl: 'A url is not allowed in this field',
            phone: 'Please enter a valid phone number',
            postalCode: 'Please enter a valid postal code',
            recaptcha: 'Recaptcha verification failed. Please refresh the page and try again.',
            required: {
                field: 'This field is required',
                radio: 'One of these fields is required',
                modalAuthenticate: 'Please fill out all required fields',
                please: 'Please enter'
            },
            validPassword: 'Password must be a minimum of 6 characters and have any 3 of the 4 items: a number (0 through 9), a special character (such as !, $, #, %), an uppercase character (A through Z) or a lowercase (a through z) character (no spaces).',
            tos: 'Please accept the Terms of Service to continue.',

            'invalid.loginpassword': 'Invalid email/username and password combination supplied. After 6 failed login attempts you will be locked out of your account.',
            'locked.account': 'Too many attempts. Wait 5 minutes and try again, or reset your password.',
            'invalid.email': 'That’s not a valid email address. Try another.',
            'inuse.email': 'Email is already in use',
            'inuse.userName': 'User Name is already in use',

            // Subscription form
            'recurly.promoCode': 'Enter promo code (optional)',
            'recurly.promoCode.invalid': 'Invalid Promo Code',

            'recurly.number': 'Card Number',
            'recurly.numberRequired': 'Please Enter Card Number',
            'recurly.numberInvalid': 'Invalid Card Number',

            'recurly.month': 'MM',
            'recurly.monthRequired': 'Please Enter MM',
            'recurly.monthInvalid': 'Invalid MM',

            'recurly.year': 'YY',
            'recurly.yearRequired': 'Please Enter YY',
            'recurly.yearInvalid': 'Invalid YY',

            'recurly.cvv': 'CVV',
            'recurly.cvvRequired': 'Please Enter CVV',
            'recurly.cvvInvalid': 'Invalid CVV',

            'recurly.default': 'The payment system experienced an error and your account was not charged. Please contact support.',

            // Gateway code errors from recurly
            'invalid_data': 'The transaction was declined. Please contact support',
            'gateway_timeout': 'The payment system experienced an error and your account was not charged. Please contact support.',
            'fraud_address': 'Your billing address does not match the address on your account. Please update or contact your bank.',
            'invalid_card_number': 'The transaction was declined. Please update your card or contact your bank',
            'declined_expiration_date': 'Your expiration date is invalid or does not match.',
            'expired_card': 'Your credit card is expired. Please update your card and try again',
            'insufficient_funds': 'The transaction was declined due to insufficient funds. Please update your card or contact your bank.',
            'fraud_security_code': 'The security code you entered does not match. Please update the CVV and try again.',
            'declined_security_code': 'The security code you entered does not match. Please update the CVV and try again.',
            'invalid_account_number': 'Your account number is not valid. Please update your account number.',
            'invalid_gateway_configuration': 'The payment system experienced an error and your account was not charged. Please contact support.',
            'invalid_payment_method': 'The transaction was declined. Please update your card or contact your bank',
            'cardholder_requested_stop': 'Recurring payments can no longer be accepted on this card. Please update your billing information.',
            'paypal_hard_decline': 'The transaction was declined. Please update your card or contact your bank',
            'paypal_account_issue': 'The transaction was declined. Please update your card or contact your bank',
            'unknown': 'The transaction was declined. Please update your card or contact your bank',
            'ssl_error': 'The payment system experienced an error and your account was not charged. Please contact support.'
        }
    };

    return translations[edition.getLanguage()];
});

define('components/dnb',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/url-helper',
    'version!fly/components/base'
], function ($, debugMgr, urlHlpr) {

    var debug = debugMgr.init('dnb');

    /**
     * Provides supplamentary longform registration logic with the purpose
     * of autofilling form fields
     *
     * @class $.tr.dnb
     * @extends $.fly.base
     * @constructor
     *
     */
    $.widget('tr.dnb', $.fly.base, {

        /**
         * URS app id in use
         *
         * @property appId
         * @type int
         * @default 356
         */
        appId: 356,

        /**
         * csrf token in use by form
         *
         * @property csrfToken
         * @type int
         * @default null
         */
        csrfToken: null,

        /**
         * Registration source in use
         *
         * @property regSource
         * @type string
         * @default 'download'
         */
        regSource: 'download',

        /**
         * Route to dnb controller
         *
         * @property dnbUrl
         * @type String
         * @default '/user/dnb/'
         */
        dnbUrl: '/user/dnb/',

        /**
         * Route to rds controller
         *
         * @property rdsUrl
         * @type String
         * @default '/resource-library/rds/logevent'
         */
        rdsUrl: '/resource-library/rds/logevent',

        /**
         * Instantiate dnb
         * @constructor
         */
        _create: function () {
            this._setup();
        },

        /**
        * Setter function for regSource
        *
        * @public
        * @method setRegSource
        */
        setRegSource: function(regSource) {
            this.regSource = regSource;
        },

        /**
         * Setup DNB Pixel. Makes call to dnb controller and sets fields with
         * associated company data if a pixel is found for the user
         *
         * @public
         * @method setupDNBPixel
         */
        setupDNBPixel: function(csrfToken) {
            var self = this;

            // Log EVENT_REG_FORM_LOAD
            self._logRDS(19);

            this.csrfToken = csrfToken;

            require(['dnb_sync','dnb_coretag'], function() {
                dnbvid.getData('vid1250', 'json', 'T', function(dnb_Data) {
                    var jobSeniority = dnb_Data.hasOwnProperty('jobSeniority') ? dnb_Data.jobSeniority : '';

                    if (dnb_Data.hasOwnProperty('duns')) {
                        debug.log('Looking up DNB using duns: ', dnb_Data.duns);

                        // Log EVENT_DNB_PIXEL_LOAD
                        self._logRDS(25);

                        $.ajax({
                            type: 'POST',
                            url: self.dnbUrl,
                            data: {
                                csrfToken: self.csrfToken,
                                call: 'retrievePixel',
                                param: dnb_Data.duns,
                                jobseniority: jobSeniority
                            }
                        }).done(function (data) {
                            self._populateForm(data);
                        });
                    }
                });
            });
        },

        /**
         * Performs a RDS event call for the given event
         *
         * @private
         * @method _loadRDS
         */
        _logRDS: function(eventId) {
            var self = this,
                promo = ''; // No use case contains promo within the current scope of the authentication modal

            $.ajax({
                dataType: 'json',
                url: self.rdsUrl,
                data: {
                    eventId: eventId,
                    promo: promo,
                    appId: self.appId,
                    regSource: self.regSource
                },
                type: 'GET'
            });
        },

        /**
         * Updates fields with the provided data
         *
         * @private
         * @method _populateForm
         */
        _populateForm: function(data) {
            var contactNumFound = false;

            if (data.hasOwnProperty('contact')) {
                if (data.contact.jobSeniority) {
                    $('[id*="_siloUserData"]').val(data.contact.jobSeniority);
                }

                if (data.contact.givenName) {
                    $('[id*="_firstName"]').val(data.contact.givenName).trigger('change');
                }
                if (data.contact.familyName) {
                    $('[id*="_lastName"]').val(data.contact.familyName).trigger('change');
                }

                if (data.contact.jobFunction) {
                    $('[id*="_jobFunc"]').val(data.contact.jobFunction).trigger('change');
                }

                if (data.contact.telephoneNumber) {
                    $('[id*="_phone"]').val(data.contact.telephoneNumber).trigger('change');
                    contactNumFound = true;
                }
            }

            if (data.hasOwnProperty('company')) {
                if (data.company.country) {
                    $('[id*="_country"]').val(data.company.country).trigger('change');
                }

                if (data.company.companyName) {
                    $('[id*="_company"]').val(data.company.companyName).trigger('change');
                }

                if (data.company.address1) {
                    $('[id*="_address1"]').val(data.company.address1).trigger('change');
                }
                if (data.company.city) {
                    $('[id*="_city"]').val(data.company.city).trigger('change');
                }
                if (data.company.state) {
                    $('[id*="_state"]').val(data.company.state).trigger('change');
                }
                if (data.company.zip) {
                    $('[id*="_postalCode"]').val(data.company.zip).trigger('change');
                }

                // Use company phone number if contact's is not found
                if (!contactNumFound && data.company.phoneNumber) {
                    $('[id*="_phone"]').val(data.company.phoneNumber).trigger('change');
                }

                if (data.company.industry) {
                    $('[id*="_industry"]').val(data.company.industry).trigger('change');
                }
                if (data.company.companySize) {
                    $('[id*="_companySize"]').val(data.company.companySize).trigger('change');
                }
            }
        },

        /**
         * Makes dnb call(s) first to lookup the entire email address,
         * and then just the domain if data wasn't found. When data is
         * found, it is used to populate form fields
         *
         * @public
         * @method dnbEmailSearch
         */
        dnbEmailSearch: function(csrfToken, emailAddress) {
            debug.log('Performing email search');

            var self = this;

            this.csrfToken = csrfToken;

            // Log EVENT_DNB_EMAIL_LOOKUP
            this._logRDS(20);

            $.ajax({
                type: 'POST',
                url: self.dnbUrl,
                data: {
                    csrfToken: self.csrfToken,
                    call: 'searchEmail',
                    param: emailAddress
                }
            }).done(function (data) {
                if (data.hasOwnProperty('contact')) {
                    self._populateForm(data);
                }

                // Search for domain if email not found
                if (!data.hasOwnProperty('company')) {
                    // Log EVENT_DNB_EMAIL_LOOKUP
                    self._logRDS(21);

                    var selectedCountry = $('[id*="_country"]').val();

                    $.ajax({
                        type: 'POST',
                        url: self.dnbUrl,
                        data: {
                            csrfToken: self.csrfToken,
                            call: 'searchDomain',
                            param:  emailAddress,
                            country: selectedCountry
                        }
                    }).done(function (data) {
                        self._populateForm(data);
                    });
                }
            });
        },

        /**
         * Setup company autocomplete and populates form fields
         * with data associated with the selected company
         *
         * @public
         * @method setupCompanySearch
         */
        setupCompanySearch: function(csrfToken) {
           debug.log('Setting up autocomplete on company');

           var self = this;

           this.csrfToken = csrfToken;

           // Autocomplete
           require(['version!libs/jquery/ui/jquery.ui.autocomplete'], function() {
                $('[id*="_company"]').autocomplete({
                    source: function(request, response) {
                        $.post(self.dnbUrl, {
                            csrfToken: self.csrfToken,
                            call: 'searchCompany',
                            country: $('[id*="_country"]').val(),
                            term: $('[id*="_company"]').val()
                        }, response);
                    },
                    minLength: 3,
                    select: function(event, ui) {
                        // Log EVENT_DNB_EMAIL_LOOKUP
                        self._logRDS(23);

                        $.ajax({
                            type: 'POST',
                            url: self.dnbUrl,
                            data: {
                                csrfToken: self.csrfToken,
                                call: 'lookupCompany',
                                param: ui.item.id
                            }
                        }).done(function (data) {
                            self._populateForm(data);
                        });
                    },
                    search: function(event, ui) {
                        // Log EVENT_DNB_EMAIL_LOOKUP
                        self._logRDS(22);
                    }
                }).data('autocomplete')._renderItem = function(ul, item) {
                    return $('<li></li>')
                        .data('item.autocomplete', item)
                        .append('<a class="ui-corner-all"><div class="autocomplete-company-div">' + item.companyName + '</div><div class="autocomplete-address-div">' + (item.address ? item.address : '') + (item.location ? "<br>" + item.location : '') + "</div></a>")
                        .appendTo(ul);
                };
           });
        },

        /**
         * Setup country field on change event
         *
         * @public
         * @method setupCountryEvent
         */
        setupCountryEvent: function() {
            var self = this;

            // Clear locale fields when country is changed
            $('[id*="_country"]').change(function (event) {
                if (event.originalEvent) {
                    self._clearFields();
                }
            });
        },

        /**
         * Clear locale form fields
         *
         * @private
         * @method _clearFields
         */
        _clearFields: function() {
            $('[id*="_company"]').val('').trigger('change');
            $('[id*="_industry"]').val('').trigger('change');
            $('[id*="_address1"]').val('').trigger('change');
            $('[id*="_city"]').val('').trigger('change');
            $('[id*="_state"]').val('').trigger('change');
            $('[id*="_companySize"]').val('').trigger('change');
            $('[id*="_postalCode"]').val('').trigger('change');
            $('[id*="_phone"]').val('').trigger('change');
        }
    });
});
define('managers/dnb',[
    'jquery',
    'components/dnb'
], function($) {
    return $.tr.dnb();
});
define('fly/components/form-validate-1.0',[
    'jquery', 
    'version!fly/utils/string-helper',
    'version!fly/utils/string-vars',
    'version!fly/managers/debug',    
    'version!fly/components/base'
], function($, strHlpr, strVars, debugMgr) {

    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click',
        debug = debugMgr.init('formValidate');

    /**
     * Validate a form by checkgng if the fields pass their requirements.
     *
     * @extends fly.base
     * 
     * Example Usage:
     *  $('my-form').formValidate({
     *      success: function(e, data) {
     *          // do something - submits by default
     *      }
     *  });
     *
     *  <form id="my-form">
     *      <input required maxlength="10" …> // via attrs
     *      <input data-validate="email no-url" …> // space sep data
     *      <input data-validate='["email", "mailcheck"]' …> // data array
     *      <inpit data-validate="availableEmail" data-remote-url="/ajax/url" …> //remote url check
     *
     */
    $.widget( 'fly.formValidate', $.fly.base, {
        
        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            inlineErrorTemplate: '<label for="{id}" class="validate-{type}">{message}</label>',
            globalErrorTemplate: '<div class="alert alert-{type}">{message}</div>',
            classFieldStatus: 'validate-{type}', // class to add to field upon error
            animation: 'slide', // 'slide' || 'none'
            fieldSelector: '[data-item="field"]',
            ignoreHidden: true, //should hidden fields be validated
            ignoreSelector: null,
            validateOnChange: true,
            scrollToErrors: false,
            attributes: ['required', 'maxlength', 'minlength'],
            rules: {}, // allow additional rules to be passed in as options
            success: function(e, data) {
                data.$form.submit();
            },
            failure: function(e, data) {},
            // allow field position to be customized
            placeError: function($error, $field) {
                if ($field.is(':checkbox, :radio') && $field.parent('label').length) {
                    $error.insertAfter($field.parent('label'));
                } else {
                    $error.insertAfter($field);
                }
            }
            //validate
            //validated
            //success
            //failure
            //errorAdded
            //errorRemoved
            //scroll
        },
        
        rules: {
            required: {
                message: function($field) {
                    return ($field.is(':radio')) ? 'One of these fields is required' : 'This field is required';
                },
                test: function($field) {
                    var $fields,
                        val;
                    // validate all radio buttons of the same name
                    if ($field.is(':radio')) {
                        $fields = $field.closest('form').find(':radio[name="'+$field.attr('name')+'"]');
                        return $fields.is(':checked');
                    } else {
                        val = ($field.is(':checkbox')) ? $field.is(':checked') : $field.val();
                        return (val) ? true : false;
                    }
                }
            },
            
            mailcheck: {
                type: 'warning',
                message: null, //set from test
                test: function($field, queue) {
                    var self = this,
                        $form = $field.closest('form');
                        
                    require(['fly/libs/mailcheck-1.1'], function() {
                        $field.mailcheck({
                            suggested: function(element, suggestion) {                
                                self.message = 'Did you mean <a class="mailcheck" data-_insert="mailcheck">'+ suggestion.domain +'</a>?';
                                
                                $form.on(clickEventName+'.mailcheck', '[data-_insert="mailcheck"]', function() {
                                    $field.val(suggestion.full).trigger('change');                          
                                });
    
                                queue.reject('mailcheck');
                            },
                            empty: function(element) {
                                $form.off('.mailcheck');
                                queue.resolve();
                            }
                        });
                    });
    
                    return queue.promise();
                }
            },
            
            availableEmail: {
                remote: true,
                message: 'Email is already in use'
            },
            
            availableUsername: {
                remote: true,
                message: 'User Name is already in use'
            },

            minlength: {
                message: function($field) {
                    return 'This field must be at least '+$field.attr('minlength')+' characters';
                },
                test: function($field) {
                    return ($field.val().length >= $field.attr('minlength'));
                }
            },
            
            maxlength: {
                message: function($field) {
                    return 'This field must be no more than '+$field.attr('maxlength')+' characters';
                },
                test: function($field) {
                    return ($field.val().length <= $field.attr('maxlength'));
                }
            },
            
            email: {
                message: 'Please enter a valid email',
                test: function($field) {
                    return (/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i.test( $field.val() ));
                }
            },
            
            noUrl: {
                message: 'A url is not allowed in this field',
                test: function($field) {
                    return !(/http:\/\//i.test( $field.val() ));
                }
            },
            
            noSpecialCharacters: {
                message: 'The special characters @, &, and % are not allowed in this field',
                test: function($field) {
                    return (/^[^@&%]+$/i.test( $field.val() ));
                }
            },
            
            equalTo: {
                //Show validation error if two fields do not match
                //pass in data-validate-confirm-with=fieldname to confirm with
                message: 'Fields do not match',
                test: function($field) {
                    var $match = $('input[name="'+$field.data('validate-equal-to')+'"]');
                    return ($match.length && $field.val() === $match.val());
                }
            }
        },

        wasSubmitted: false, // has form submit been attempted
        isWorking: false, // is the form currently busy validating
        isFormValid: false, // is the form in a valid state


        /**
         * Instantiate Form Validate
         * @constructor
         */
        _create: function() {
            var o = this.options,
                ignore,
                eventMap = {};
            
            this._setup();
                                    
            this.$form = this.$element;
            
            // Disabled HTML5 validation
            this.$form.attr('novalidate', 'novalidate');

            this.globalErrors = [];
            
            // field that should not be validated
            this.ignoreSelector = ':submit, :reset, :image, [disabled]';
            if (o.ignoreHidden) {
                this.ignoreSelector += ', :hidden';
            }
            if (o.ignoreSelector) {
                this.ignoreSelector += ', '+o.ignoreSelector;
            }
            
            // merge in options rules
            this.addRules(o.rules);
            
            // add submit event
            this._on(this.$form, {'submit': '_handleSubmit'});

            // add change events
            if (o.validateOnChange) {
                eventMap['focusout :input:not('+this.ignoreSelector+', [data-_enabled])'] = '_handleFocusOut';
                eventMap['keyup :input:not('+this.ignoreSelector+', [readonly])'] = '_handleChange';
                eventMap['change :input:not('+this.ignoreSelector+')'] = '_handleChange';
                this._on(this.$form, eventMap);
            }
        },

        /**
         * Handle the form submit event
         *
         * @param e The event object
         * @private
         */        
        _handleSubmit: function(e) {
            this._off(this.$form, 'focusout');
            this.wasSubmitted = true;

            if (this.isFormValid) return;
            
            e.preventDefault();
            e.stopImmediatePropagation();
                
            this.validate();
        },
        
        _handleFocusOut: function(e) {
            var $field = $(e.target);
            
            $field.attr('data-_enabled', 'true');

            this._handleChange(e);
        },

        _handleChange: function(e) {
            var $field = $(e.target);
            
            this.isFormValid = false;
            
            if (this.wasSubmitted || $field.data('_enabled')) {
                $field.data('_passed', false);
                this.testField($field);
            }
        },

        getRule: function(name) {
            if (typeof this.rules[name] != 'undefined') {
                return this.rules[name];
            } else {
                return false;
            }
        },
        
        getRulesToValidate: function($field) {
            var self = this,
                validateData = $field.data('validate') || [],
                ruleNames = ($.isArray(validateData)) ? validateData : validateData.split(' ');

            $.each(this.options.attributes, function(index, attribute) {
                if ($field.attr(attribute)) {
                    ruleNames.unshift(attribute);
                }
            });

            return $.grep(ruleNames, function(name, index){
                return (self.getRule(name));
            });
        },
        
        addRules: function(rules) {
            if ($.isPlainObject(rules)) {
                $.extend(this.rules, rules);
            }
        },
        
        removeRule: function(name) {
            if (this.getRule(name) !== false) {
                delete this.rules[name];
            }
        },
        
        setFieldDelegate: function($field) {
            var $delegate = null;
            
            if ($field.is(':radio')) {
                $delegate = this.$form.find(':radio[name="'+$field.attr('name')+'"]').first();
            }
            
            $field.data('_field_delegate', $delegate);

            return $field;
        },
        
        testField: function($field) {                   
            var self = this,
                promises = [],
                rules,
                data = $field.data() || {},
                currError = data.error || {},
                fieldQueue = $.Deferred();

            //field value already tested
            if (data._passed) {
                fieldQueue.resolve();
                return fieldQueue.promise();
            }
            
            this.setFieldDelegate($field);

            // abort running requests
            if (data.remoteRequest) data.remoteRequest.abort();
            
            rules = this.getRulesToValidate($field);
            debug.log('test field: ', $field, ' w/ rules:', rules);

            $.each(rules, function(index, ruleName){
                var rule = self.getRule(ruleName),
                    passed = true,
                    isRemote = (rule.remote) ? true : false,
                    remoteUrl = null,
                    promise;
                            
                if (isRemote) {
                    remoteUrl = rule.remoteUrl || $field.data('remoteUrl');
                    self.removeError($field); // remove previous remote errors
                }
                
                // Create promise for rule
                promise = function() {
                    var queue = $.Deferred(),
                        result = null;
                    
                    if (isRemote) {
                        result = self.requestRemote(remoteUrl, $field, ruleName, queue);
                    } else {
                        result = rule.test($field, queue);
                    }
                            
                    if (result === false) {
                        passed = false;
                        queue.reject(ruleName);
                    } else if (result === true) {
                        queue.resolve(ruleName);
                    }
                    
                    // else reject or resolve must be called by function
                    return queue.promise();
                };
                
                promise = promise();
                promises.push(promise);
                
                // remove error on passing test
                $.when(promise)
                .fail(function() {
                    debug.log('rule failed: ', ruleName, $field);
                })
                .then(function() {
                    if (currError.name === ruleName) {
                        self.removeError($field);
                    }
                    debug.log('rule passed: ', ruleName, $field);
                });

                // Break loop if failed
                if (!passed) return false;
            });

            // Test field against all rules
            $.when.apply(null, promises)                    
            .fail(function(ruleName) {
                var rule = self.getRule(ruleName),
                    type = (rule.type) ? rule.type : 'error',
                    fieldData = $field.data(),
                    fieldCurrError = fieldData.error || {};

                // clear/abort any ongoing request
                if (fieldData.remoteTimeout) clearTimeout(fieldData.remoteTimeout);
                if (fieldData.remoteRequest) fieldData.remoteRequest.abort();

                if (fieldCurrError.message != self.getMessage(ruleName, $field)) {
                    self.removeError($field);
                    self.addInlineError($field, ruleName);
                }
                
                if (type !== 'error') {
                    fieldQueue.resolve();
                    debug.log('field passed: ', $field, ' type: ', type);
                } else {
                    fieldQueue.reject();
                    debug.log('field failed: ', $field);
                }
            })
            .then(function() {
                $field.data('_passed', true);
                self.removeError($field);
                fieldQueue.resolve();
                debug.log('field passed: ', $field);
            });
            
            return fieldQueue.promise();
        },
        
        requestRemote: function(url, $field, ruleName, queue) {
            var params = {},
                request = null,
                timeout = null,
                data = $field.data() || {};
            
            if (data.remoteTimeout) {
                clearTimeout(data.remoteTimeout);
                data.remoteQueue.resolve(ruleName);
            }
            
            params[$field.attr('name')] = $field.val();
            
            timeout = setTimeout(function() {
                request = $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: url,
                    data: params,
                    timeout: 5000,
                    success: function(res) {
                        switch (res) {
                            case true:
                                queue.resolve(ruleName);
                                break;
                            case false:
                                queue.reject(ruleName);
                                break;
                            default:
                                if( $.isPlainObject(res) && res.status) {
                                    if(res.status === 'success') {
                                        queue.resolve(ruleName);
                                    }
                                    else {
                                        queue.reject(ruleName);
                                    }
                                }
                                //If response is empty, accept value
                                else {
                                    queue.resolve(ruleName);
                                }
                        }
                    },
                    complete: function() {
                        $field.data('remoteRequest', null);
                    },
                    error: function(jqXHR, status) {
                        queue.resolve(ruleName);
                        $field.data('_passed', false);
                    }
                });
                
                $field.data({
                    'remoteRequest': request,
                    'remoteQueue': null,
                    'remoteTimeout': null
                });
                    
            }, 300);
            
            $field.data({
                'remoteQueue': queue,
                'remoteTimeout': timeout
            });
        },
        
        validate: function() {
            var o = this.options,
                self = this,
                fieldPromises = [];
            
            if (this.isWorking) return;
            if (this._trigger('validate') === false) return;
            
            this.isWorking = true;
            
            this.removeGlobalErrors();

            this.$form.find(':input').not(this.ignoreSelector).each(function() {
                var $field = $(this);

                fieldPromises.push(self.testField($field));
            });

            $.when.apply(null, fieldPromises)                       
            .fail(function() {
                debug.log('validate failed');
                
                // trigger failure event
                self._trigger('failure', null, {
                    $form: self.$form
                });

                if(o.scrollToErrors) {
                    self.scrollToErrors();
                }
            })
            .then(function() {
                debug.log('validate success');
                // trigger success event
                self.isFormValid = true;
                
                self._trigger('success', null, {
                    $form: self.$form
                });
                
                self.isFormValid = false;
            })
            .always(function() {
                self._trigger('validated');
                self.isWorking = false;
            });
        },
        
        scrollToErrors: function() {
            var o = this.options,
                $error = this.$form.find('[data-validate-error]').first(),
                $parent = $error.closest(o.fieldSelector),
                offset = ($parent.length ? $parent : $error).offset().top;
            
            if (this._trigger('scroll', null, {offset: offset}) === false) return;

            // don't position right at the top of the screen
            // TODO: this would be better if we only scroll
            // when the error is off screen
            offset = offset - (this.$window.height() / 6);

            $('html, body').animate({
                scrollTop: offset
            }, 'fast');
        },
        
        removeError: function($field) {
            $field = $field.data('_field_delegate') || $field;
            
            var self = this,
                o = this.options,
                data = $field.data('error');

            if(!data) return;

            if (o.animation === 'slide') {
                data.$error.slideUp('fast', function() {
                    $(this).remove();
                    self._completeRemoveError(data, $field);
                });
            } else {
                $field.remove();
                this._completeRemoveError(data, $field);
            }
            
            $field.removeClass(data.fieldClass).removeData('error');
        },
        
        getMessage: function(ruleName, $field) {
            var rule = this.getRule(ruleName),
                msg = $field.data('validate-message-'+ruleName) || $field.data('validate-message-'+ruleName.toLowerCase());

            if (!msg && msg !== false) {
                msg = ($.isFunction(rule.message)) ? rule.message($field) : rule.message;
            }

            return msg;
        },

        /**
         * Add an inline error next to field
         */  
        addInlineError: function($field, ruleName) {
            $field = $field.data('_field_delegate') || $field;
            
            var self = this,
                o = this.options,
                data = $field.data('error') || {},
                rule,
                type,
                message,
                template,
                errorObj = {
                    name: ruleName,
                    position: 'inline'
                };

            //only show one error at a time 
            if(data.type === 'error') return;
            
            message = this.getMessage(ruleName, $field);
            rule = this.getRule(ruleName);
            type = rule.type || 'error';

            template = strVars.compile(o.inlineErrorTemplate, {
                type: type,
                id: $field.attr('id'),
                message: message
            });
            
            $.extend(errorObj, {
                type: type,
                message: message,
                $error: $(template).attr('data-validate-error', true),
                fieldClass: strVars.compile(this.options.classFieldStatus, {type: type})
            });

            $field
                .addClass(errorObj.fieldClass)
                .data('error', errorObj);
            
            if (message !== false) {
                if (o.animation === 'slide') {
                    errorObj.$error = $('<div />').wrapInner(errorObj.$error);
                    errorObj.$error.hide();
                    o.placeError.call(this, errorObj.$error, $field);
                    errorObj.$error.slideDown('fast', function() {
                        self._completeAddError(errorObj, $field);
                    });
                } else {
                    o.placeError.call(this, errorObj.$error, $field);
                    this._completeAddError(errorObj, $field);
                }
            }
        },

        /**
         * Add global error to the top of the form
         */   
        addGlobalError: function(message, type) {
            type = type || 'error';
                        
            var self = this,
                o = this.options,
                template,
                errorObj = {
                    position: 'global',
                    type: type,
                    message: message
                };

            template = strVars.compile(o.globalErrorTemplate, {
                type: type,
                message: message
            });

            $.extend(errorObj, {
                $error: $(template).attr('data-validate-error', true)
            });

            if (o.animation === 'slide') {
                errorObj.$error = $('<div />').wrapInner(errorObj.$error);
                errorObj.$error.hide().prependTo(this.$form).slideDown('fast', function() {
                    self._completeAddError(errorObj);
                });
            } else {
                this.$form.prepend(errorObj.$error);
                this._completeAddError(errorObj);
            }

            this.globalErrors.push(errorObj);
        },
        
        removeGlobalErrors: function() {
            var self = this;
            
            $.each(this.globalErrors, function(i, errorObj) {
                errorObj.$error.remove();
                self._completeRemoveError(errorObj);
            });
        },
        
        removeInlineErrors: function() {
            var self = this;
        
            this.$form.find('[data-validate-error]').each(function() {
                var $field = $(this),
                    fieldData = $field.data();
                //TODO: make this work properly 
                //[data-validate-error] is not the $field, i think

                if (fieldData.error) {
                    self.removeError($field);
                }
                // abort running requests
                if (fieldData.remoteRequest) {
                    fieldData.remoteRequest.abort();
                }
            });
        },

        _completeAddError: function(errorObj, $field) {     
            this._trigger('errorAdded', null, $.extend(errorObj, {$field: $field}));
            this.$document.trigger('displayChange', {type: 'errorAdded'});
        },

        _completeRemoveError: function(errorObj, $field) {     
            this._trigger('errorRemoved', null, $.extend(errorObj, {$field: $field}));
            this.$document.trigger('displayChange', {type: 'errorRemoved'});
        },
        
        _disable: function() {
            this.removeGlobalErrors();
            this.removeInlineErrors();
        },
        
        _destroy: function() {
            this._disable();
        }
    });
});



define('components/form-validate-1.0',[
    'jquery',
    'translations/form-validate',
    'version!fly/utils/string-vars',
    'version!fly/managers/debug',
    'version!fly/components/form-validate'
], function ($, translations, strVars, debugMgr) {

    // support touch events
    var clickEventName = ($.support.touch) ? 'vclick' : 'click',
        debug = debugMgr.init('formValidate');

    /**
     * Validate a form by checkgng if the fields pass their requirements.
     *
     * @extends fly.base
     *
     * Example Usage:
     *  $('my-form').formValidate({
     *      success: function(e, data) {
     *          // do something - submits by default
     *      }
     *  } 3);
     *
     *  <form id="my-form">
     *      <input required maxlength="10" …> // via attrs
     *      <input data-validate="email no-url" …> // space sep data
     *      <input data-validate='["email", "mailcheck"]' …> // data array
     *      <inpit data-validate="availableEmail" data-remote-url="/ajax/url" …> //remote url check
     *
     */

    $.widget('fly.formValidate', $.fly.formValidate, {

        rules: {
            required: {
                message: function($field) {
                    return ($field.is(':radio')) ? translations.required.radio : translations.required.field;
                },
                test: function($field) {
                    var $fields,
                        val;

                    if ($field.is(':text') || $field.is('textarea')) { // most common
                        val = $.trim($field.val());

                    } else if ($field.is(':checkbox')) {
                        val = $field.is(':checked');

                    } else if ($field.is('select')) {
                        val = $field.val().indexOf('NOTSELECTED') < 0 && $field.val() ? true : false;

                    } else if ($field.is(':radio')) {
                        // validate all radio buttons of the same name
                        $fields = $field.closest('form').find(':radio[name="'+$field.attr('name')+'"]');
                        val = $fields.is(':checked');

                    } else {
                        val = $field.val();
                    }

                    return val ? true : false;
                }
            },

            mailcheck: {
                type: 'warning',
                message: null, //set from test
                test: function($field, queue) {
                    var self = this,
                        $form = $field.closest('form');

                    require(['fly/libs/mailcheck-1.1'], function() {
                        $field.mailcheck({
                            suggested: function(element, suggestion) {
                                self.message = 'Did you mean <a class="mailcheck" data-_insert="mailcheck">'+ suggestion.domain +'</a>?';

                                $form.on(clickEventName+'.mailcheck', '[data-_insert="mailcheck"]', function() {
                                    $field.val(suggestion.full).trigger('change');
                                });

                                queue.reject('mailcheck');
                            },
                            empty: function(element) {
                                $form.off('.mailcheck');
                                queue.resolve();
                            }
                        });
                    });

                    return queue.promise();
                }
            },

            availableEmail: {
                remote: true,
                message: translations.availableEmail
            },

            availableUsername: {
                remote: true,
                remoteUrl: window.trPageVars.user.urls.userName,
                message: translations.availableUsername,
            },

            minlength: {
                message: function($field) {
                    return strVars.compile(translations.minlength, { minlength: $field.attr('minlength') });
                },
                test: function($field) {
                    return ($field.val().length >= $field.attr('minlength'));
                }
            },

            maxlength: {
                message: function($field) {
                    return strVars.compile(translations.maxlength, { maxlength: $field.attr('maxlength') });
                },
                test: function($field) {
                    return ($field.val().length <= $field.attr('maxlength'));
                }
            },

            email: {
                message: translations.email,
                test: function($field) {
                    return (/^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,63}$/i.test($field.val()));
                }
            },

            noUrl: {
                message: translations.noUrl,
                test: function($field) {
                    return !(/http:\/\//i.test( $field.val() ));
                }
            },

            noSpecialCharacters: {
                message: translations.noSpecialCharacters,
                test: function($field) {
                    return (/^[^@&%]+$/i.test( $field.val() ));
                }
            },

            equalTo: {
                //Show validation error if two fields do not match
                //pass in data-validate-confirm-with=fieldname to confirm with
                message: translations.equalTo,
                test: function($field) {
                    var $match = $('input[name="'+$field.data('validate-equal-to')+'"]');
                    return ($match.length && $field.val() === $match.val());
                }
            },

            forumTopics: {
                message: function ($input) {
                    return strVars.compile(translations.forumTopics, { maxcount: $input.data('maxcount') });
                },
                test: function ($input) {
                    numChecked = $input.find('input').filter(':checked').length;
                    maxCount = $input.data('maxcount');

                    if (numChecked >= maxCount) {
                        $.each($input.find(':checkbox'), function(index, value) {
                            if (this.checked === false) {
                                $(this).attr('disabled', true);
                            }
                        });
                    } else {
                        $.each($input.find(':checkbox'), function(index, value) {
                            // Don't enable "Off Topic" tag - this should be disabled for all topics except "After Hours" and is validated in topicTagCheck function
                            if ($(this).context.parentNode.innerText !== 'Off Topic') {
                                $(this).prop('disabled', false);
                            }
                        });
                    }

                    debug.log('Num Checked: ' + numChecked + ', Max Count: ' + maxCount);
                    return (numChecked <= maxCount && numChecked > 0);
                }
            },
            other: {
                message: function ($input) {
                    return translations.required.field;
                },
                test: function($input) {
                    $select = $input.closest('form').find('[data-other="' + $input.attr('name') + '"]');

                    if ($select.val() == 'Other'){
                        if ($input.val()) {
                            return true;
                        } else {
                            return false;
                        }
                    } else {
                        return true;
                    }
                }
            },
            postalCodeUS: {
                message: translations.postalCode,
                test: function($field) {
                    var postalCode = $field.val(),
                        regexPassed = false;

                    // Check for valid US postal code
                    if (/^\d{5}([ +-]??\d{4})??$/.test(postalCode)) {
                        regexPassed = true;
                    }

                    return postalCode.length >= 1 && postalCode.length <= 15 && regexPassed;
                }
            },
            postalCodeCA: {
                message: translations.postalCode,
                test: function($field) {
                    var postalCode = $field.val(),
                        regexPassed = false;

                    // Check for valid CA postal code
                    if (/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test(postalCode)) {
                        regexPassed = true;
                    }

                    return postalCode.length >= 1 && postalCode.length <= 15 && regexPassed;
                }
            },
            postalCodeINTL: {
                message: translations.postalCode,
                test: function($field) {
                    var postalCode = $field.val(),
                        regexPassed = false;

                    // Check for valid International postal code
                    if (/[A-Z0-9]{0,8}[ -]?[A-Z0-9]{0,8}/.test(postalCode)) {
                        regexPassed = true;
                    }

                    return postalCode.length >= 1 && postalCode.length <= 15 && regexPassed;
                }
            },
            phone: {
                message: translations.phone,
                test: function($field) {
                    var phone = $field.val(),
                        regexPassed = false;

                    // Check for valid phone number
                    if (/^[0-9()+ -.x]+$/gm.test(phone)) {
                        regexPassed = true;
                    }

                    return phone.length >= 1 && phone.length <= 24 && regexPassed;
                }
            },
            validPassword: {
                message: translations.validPassword,
                test: function($field) {
                    var password = $field.val();
                    var characterTypes = 0;

                    // Check for numbers.
                    if(/[0-9]+/.test(password)) {
                        characterTypes++;
                    }

                    // Check for lowercase letters.
                    if(/[a-z]+/.test(password)) {
                        characterTypes++;
                    }

                    // Check for uppercase letters.
                    if(/[A-Z]+/.test(password)) {
                        characterTypes++;
                    }

                    // Check for special characters.
                    if(/[\(\)\.@`!#\$%\^&*+=\-\[\]\\';,/\{\}\|":<>\?~_]+/.test(password)) {
                        characterTypes++;
                    }

                    // Passwords must include at least 3 types of characters and at least 6 characters and must not include spaces.
                    return characterTypes >= 3 && password.length >= 6 && password.indexOf(' ') == -1;
                }
            }
        },

        options: {
            validateOnChange: false,
            globalErrorPlacement: null,
            scrollToErrors: true
        },

        /**
         * Instantiate the social-links
         * @constructor
         */
        _create: function () {
            var o = this.options,
                eventMap = {};

            //Call parent form-validate _create
            this._super();
            this.ignoreSelector = ':submit, :reset, :image, :hidden, [disabled]';

            // add change event for fieldsets
            if (o.validateOnChange) {
                eventMap['focusout fieldset [data-validate]:not('+this.ignoreSelector+', [data-_enabled])'] = '_handleFieldsetFocusOut';
                eventMap['keyup fieldset [data-validate]:not('+this.ignoreSelector+')'] = '_handleFieldsetChange';
                eventMap['change fieldset [data-validate]:not('+this.ignoreSelector+')'] = '_handleFieldsetChange';
                eventMap['reset'] = '_handleReset';
                this._on(this.$form, eventMap);
            }

            if (o.formType == 'editProfileBasics') {
                this._handleEditBasicProfileForm();
            }

        },

        validate: function() {
            var o = this.options,
                self = this,
                fieldPromises = [];

            if (this.isWorking) return;
            this.isWorking = true;

            this.$form.find(':input, fieldset [data-validate]').not(this.ignoreSelector).each(function() {
                var $field = $(this),
                    dataValidate = $field.attr('data-validate') ? $field.attr('data-validate') : '';

                // Retest password, postal code, and phone
                if (self.wasSubmitted && (dataValidate.indexOf('postalCode') >= 0 || dataValidate.indexOf('validPassword') >= 0 || dataValidate.indexOf('phone') >= 0) && $field.data('_passed')) {
                    $field.data('_passed', false);
                }

                if (self.wasSubmitted && $.trim($field.val()) === '' && $field.data('_passed')) {
                    $field.data('_passed', false);
                }

                if (self.wasSubmitted && $field.is('select') && $field.val().indexOf('NOTSELECTED') >= 0 && $field.data('_passed')) {
                    $field.data('_passed', false);
                }

                if (self.wasSubmitted && $field.is(':checkbox') && !$field.is(':checked') && $field.data('_passed')) {
                    $field.data('_passed', false);
                }

                if ($field.parents('fieldset [data-validate]').length === 0) {
                    fieldPromises.push(self.testField($field));
                }
            });

            $.when.apply(null, fieldPromises)
            .fail(function() {
                debug.log('validate failed');

                // trigger failure event
                self._trigger('failure', null, {
                    $form: self.$form
                });

                if(o.scrollToErrors) {
                    self.scrollToErrors();
                }
            })
            .then(function() {
                debug.log('validate success');

                self.removeGlobalErrors();
                self.isFormValid = true;

                // trigger success event
                self._trigger('success', null, {
                    $form: self.$form
                });

                self.isFormValid = false;
                self.wasSubmitted = false;
            })
            .always(function() {
                self.isWorking = false;
            });
        },

        testField: function($field) {
            var self = this,
                promises = [],
                rules,
                data = $field.data() || {},
                currError = data.error || {},
                fieldQueue = $.Deferred();

            //field value already tested
            if (data._passed) {
                fieldQueue.resolve();
                return fieldQueue.promise();
            }

            this.setFieldDelegate($field);

            // abort running requests
            if (data.remoteRequest) data.remoteRequest.abort();

            rules = this.getRulesToValidate($field);
            debug.log('test field: ', $field, ' w/ rules:', rules);

            if (typeof $field.context !== 'undefined' && $field.context.id === 'topic_forums') {
                self.topicTagCheck($field);
            }

            $.each(rules, function(index, ruleName){
                var rule = self.getRule(ruleName),
                    passed = true,
                    isRemote = (rule.remote) ? true : false,
                    remoteUrl = null,
                    promise;

                if (isRemote) {
                    remoteUrl = rule.remoteUrl || $field.data('remoteUrl');
                    self.removeError($field); // remove previous remote errors
                }

                // Create promise for rule
                promise = function() {
                    var queue = $.Deferred(),
                        result = null;

                    if (isRemote) {
                        result = self.requestRemote(remoteUrl, $field, ruleName, queue);
                    } else {
                        result = rule.test($field, queue);
                    }

                    if (result === false) {
                        passed = false;
                        queue.reject(ruleName);
                    } else if (result === true) {
                        queue.resolve(ruleName);
                    }

                    // else reject or resolve must be called by function
                    return queue.promise();
                };

                promise = promise();
                promises.push(promise);

                // remove error on passing test
                $.when(promise)
                .fail(function() {
                    debug.log('rule failed: ', ruleName, $field);
                })
                .then(function() {
                    if (currError.name === ruleName) {
                        self.removeError($field);
                    }
                    debug.log('rule passed: ', ruleName, $field);
                });

                // Break loop if failed
                if (!passed) return false;
            });

            // Test field against all rules
            $.when.apply(null, promises)
            .fail(function(ruleName) {
                var rule = self.getRule(ruleName),
                    type = (rule.type) ? rule.type : 'error',
                    fieldData = $field.data(),
                    fieldCurrError = fieldData.error || {};

                // clear/abort any ongoing request
                if (fieldData.remoteTimeout) clearTimeout(fieldData.remoteTimeout);
                if (fieldData.remoteRequest) fieldData.remoteRequest.abort();

                if (fieldCurrError.message != self.getMessage(ruleName, $field)) {
                    self.removeError($field);
                    self.addInlineError($field, ruleName);
                }

                if (type !== 'error') {
                    fieldQueue.resolve();
                    debug.log('field passed: ', $field, ' type: ', type);
                } else {
                    fieldQueue.reject();
                    debug.log('field failed: ', $field);
                }
            })
            .then(function() {
                if ($.inArray($field.attr('id'), ['user_password', 'user_tos', 'billing_tos']) !== -1) {
                    $(document).trigger('removeCustomGlobalErrors', [$field.attr('id')]);
                }

                $field.data('_passed', true);
                self.removeError($field);
                fieldQueue.resolve();
                debug.log('field passed: ', $field);
            });

            return fieldQueue.promise();
        },

        /**
         * Handle the form submit event
         *
         * @param e The event object
         * @private
         */
        _handleSubmit: function(e) {
            this.wasSubmitted = true;

            if (this.isFormValid) return;

            e.preventDefault();
            e.stopImmediatePropagation();

            $(document).trigger('formValidationSubmit');

            this.validate();
        },

        _handleFieldsetFocusOut: function(e) {
            debug.log('_handleFieldsetFocusOut');
            var $field = $(e.target).closest('fieldset [data-validate]');

            $field.attr('data-_enabled', 'true');

            this._handleFieldsetChange(e);
        },

        _handleFieldsetChange: function(e) {
            debug.log('_handleFieldsetChange');
            var $field = $(e.target).closest('fieldset [data-validate]');

            this.isFormValid = false;

            if (this.wasSubmitted || $field.data('_enabled')) {
                $field.data('_passed', false);
                this.testField($field);
            }
        },

        _handleReset: function(e) {
            debug.log('_handleReset');

            var $form = $(e.target);
            var $fields = $form.find('input, select, textarea, fieldset');

            $.each($fields, function(key, value) {
                $(value).data('_passed', false);

                if (value.type == "checkbox") {
                    $(value).prop('disabled', false);
                }
            });
        },

        _handleEditBasicProfileForm: function() {
            var self = this;

            this.$facebookUsername = this.$element.find('#user_facebookUsername');
            this.$linkedInUsername = this.$element.find('#user_linkedInUsername');
            this.$twitterUsername = this.$element.find('#user_twitterUsername');

            this.$socialVerify = this.$element.find('#user_socialVerify');

            if ($.trim(this.$facebookUsername.val()) !== '' || $.trim(this.$linkedInUsername.val()) !== '' || $.trim(self.$twitterUsername.val()) !== '') {
                self.$socialVerify.attr('required', true);
            }

            this.$element.find('#user_facebookUsername, #user_linkedInUsername, #user_twitterUsername').focusout(function(){
                if ($.trim(self.$facebookUsername.val()) !== '' || $.trim(self.$linkedInUsername.val()) !== '' || $.trim(self.$twitterUsername.val()) !== '') {
                    self.$socialVerify.attr('required', true);
                } else {
                    self.$socialVerify.attr('required', false);
                }
            });
        },

        /**
         * Add an inline error next to field.
         *
         * Taken from parent component.
         *
         * @public
         * @method addInlineError
         *
         * @param $field {element} The field to add an error to.
         * @param ruleName {string} The validation rule name.
         */
        addInlineError: function($field, ruleName) {
            $field = $field.data('_field_delegate') || $field;

            var self = this,
                o = this.options,
                data = $field.data('error') || {},
                rule,
                type,
                message,
                template,
                errorObj = {
                    name: ruleName,
                    position: 'inline'
                };

            //only show one error at a time
            if(data.type === 'error') return;

            message = this.getMessage(ruleName, $field);
            rule = this.getRule(ruleName);
            type = rule.type || 'error';

            template = strVars.compile(o.inlineErrorTemplate, {
                type: type,
                id: $field.attr('id'),
                message: message
            });

            $.extend(errorObj, {
                type: type,
                message: message,
                $error: $(template).attr('data-validate-error', true),
                fieldClass: strVars.compile(this.options.classFieldStatus, {type: type})
            });

            $field
                .addClass(errorObj.fieldClass)
                .data('error', errorObj);

            if (message !== false) {
                if (o.animation === 'slide') {
                    errorObj.$error = $('<div class="warning-label" />').wrapInner(errorObj.$error);
                    o.placeError.call(this, errorObj.$error, $field);
                } else {
                    o.placeError.call(this, errorObj.$error, $field);
                    this._completeAddError(errorObj, $field);
                }
            }

            $(document).trigger('displayChange'); // update window size etc
        },

        /**
         * Remove an error from a field.
         *
         * @public
         * @method removeError
         *
         * @param $field {element} The field to remove the error from.
         */
        removeError: function($field) {
            $field = $field.data('_field_delegate') || $field;

            var self = this,
                o = this.options,
                data = $field.data('error');

            if(!data) return;

            if (o.animation === 'slide') {
                data.$error.remove();
                this._completeRemoveError(data, $field);
            } else {
                $field.remove();
                this._completeRemoveError(data, $field);
            }

            $field.removeClass(data.fieldClass).removeData('error');

            // Remove error messaging from label if it exists
            var $label = $("label[for='" + $field.attr('id') + "']");
            if ($label.length && $label.hasClass('label-error')) {
                var placeholder = $field.is('select') ? $('#'+$field.attr('id')+' option[value="NOTSELECTED"]').text() : $field.attr('placeholder');

                if ($field.attr('type') === 'email') {
                    placeholder = 'Email';
                }

                $label.removeClass('label-error').text(placeholder);
            }
        },

        /**
         * Add global error to the top of the form
         */
        addGlobalError: function(message, type, $errorContainer, inlineAsGlobal) {
            type = type || 'error';

            var self = this,
                o = this.options,
                template,
                errorObj = {
                    position: 'global',
                    type: type,
                    message: message
                };

            template = strVars.compile(o.globalErrorTemplate, {
                type: type,
                message: message
            });

            $.extend(errorObj, {
                $error: $(template).attr('data-validate-error', true)
            });

            if (o.animation === 'slide') {
                errorObj.$error = $('<div />').wrapInner(errorObj.$error);

                if (inlineAsGlobal) {
                    errorObj.$error.attr('data-global-error', inlineAsGlobal);
                }

                if ($errorContainer) {
                    errorObj.$error.appendTo($errorContainer);
                    self._completeAddError(errorObj);
                } else {
                    errorObj.$error.hide().prependTo(this.$form).slideDown('fast', function() {
                        self._completeAddError(errorObj);
                    });
                }
            } else {
                if (o.globalErrorPlacement) {
                    o.globalErrorPlacement.append(errorObj.$error);
                } else {
                    this.$form.prepend(errorObj.$error);
                }

                this._completeAddError(errorObj);
            }

            this.globalErrors.push(errorObj);
        },

        getRulesToValidate: function($field) {
            var self = this,
                validateData = $field.attr('data-validate') || [],
                ruleNames = ($.isArray(validateData)) ? validateData : validateData.split(' ');

            $.each(this.options.attributes, function(index, attribute) {
                if ($field.attr(attribute)) {
                    ruleNames.unshift(attribute);
                }
            });

            return $.grep(ruleNames, function(name, index){
                return (self.getRule(name));
            });
        },

        /**
         * Validates topic tag checkboxes depending on selected topic. (TECHREPGL-5811)
         * After hours selected - check 'Off topic' and disable all others.
         * Any other selected - disable 'Off topic' checkbox.
         */
        topicTagCheck: function($field) {
            $topicTags = $field.siblings().find('#topic_tags');

            $.each($topicTags[0].childNodes, function() {
                checkbox = $($(this).find('input:checkbox'));

                if ($field.context[$field[0].selectedIndex].text === 'After Hours') {
                    if ($(this).context.innerText === 'Off Topic') {
                        checkbox.prop('checked', true);
                    } else {
                        checkbox.prop('checked', false);
                    }
                    checkbox.prop('disabled', true);
                } else {
                    // If topic is changed, re-enable all checkboxes
                    checkbox.prop('disabled', false);
                    checkbox.prop('checked', false);

                    // 'Off Topic' tag should be disabled for all topics except 'After Hours'
                    if ($(this).context.innerText === 'Off Topic') {
                        checkbox.prop('disabled', true);
                    }
                }
            });
        }
    });
});

define('components/authentication',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/managers/components',
    'managers/page-vars',
    'version!fly/utils/url-helper',
    'utils/cookie',
    'utils/urs-helper',
    'translations/form-validate',
    'managers/dnb',
    'managers/tracking',

    'optional!' + (!window.trPageVars.services.tealium || !window.trPageVars.services.tealium.enabled ? 'feature-disabled' : 'tealium'),
    'version!fly/components/base',
    'version!components/form-validate',
    'version!fly/components/loading'
], function(
    $,
    debug,
    components,
    pageVars,
    urlHelper,
    cookie,
    ursHelper,
    translations,
    dnb,
    trackingMgr
) {
    debug = debug.init('authentication');

    var unemployedJobFunc = ['STUDENT', 'RETIRED', 'UNEMPLOYED', 'OTHERNOTEMP'],
        excludeFieldsJobFunc = ['company', 'companySize', 'industry'],
        stateRequired = ['AU', 'BR', 'CA', 'CU', 'IN', 'MX', 'US'],
        excludeFieldsCountry = ['state'],
        postalCodeValidation = ['CA', 'US'],
        gdprCountries = [
            'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE',
            'ES', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE',
            'IS', 'IT', 'LI', 'LT', 'LU', 'LV', 'MT', 'NL',
            'NO', 'PL', 'PT', 'RO', 'SE', 'SK', 'SI'
        ];

    /**
     * Controls the login/registration business logic for the whole page
     * There should be only one instance of this on a page
     *
     * @class $.tr.authentication
     * @extends $.fly.base
     * @constructor
     *
     * @param [classShow]     {string} The class that makes hidden things visible
     * @param [classActive]   {string} The class that indicates a step is active
     * @param [classFade]     {string} The class that makes an active step fade out
     */
    $.widget('tr.authentication', $.fly.base, {

        // Options
        options: {
            classShow: 'show',
            classActive: 'active',
            classFade: 'fade'
        },

        /**
         * URS app id in use
         * Determined by the entry point into authentication
         *
         * @property appId
         * @type int
         * @default 309
         */
        appId: 309,

        /**
         * URS app id used for longform registration
         *
         * @property longformAppId
         * @type int
         * @default 356
         */
        longformAppId: 356,

        /**
         * Where the modal was opened from for tracking
         *
         * @property position
         * @type string
         * @default header-register
         */
        position: 'header-register',

        /**
         * Mapping appIds to tracking values
         *
         * @property trackingMap
         * @type object
         * @default populated object
         */
        trackingMap: {
            309: '|short',
            311: '|community',
            312: '|newsletters',
            356: '|long'
        },

        /**
         * The current step in the authentication flow
         *
         * @property step
         * @type string
         * @default 'start'
         */
        step: 'start',

        /**
         * A list of all the steps supported by the authentication component
         *
         * @property steps
         * @type Array
         * @default populated array
         */
        steps: ['customQuestions', 'emailContact', 'forgot', 'gatedUpdate', 'login', 'loginOrRegister', 'register', 'socialRegister', 'start'],

        /**
         * The form element used for submitting any step that requires input fields
         *
         * @property $form
         * @type element
         * @default null
         */
        $form: null,

        /**
         * The modal element used for authentication.
         *
         * @property $modal
         * @type element
         * @default null
         */
        $modal: null,

        /**
         * Keep track of whether or not authentication is waiting for a response
         *
         * @property loading
         * @type boolean
         * @default false
         */
        loading: false,

        /**
         * A function to execute after the user has logged in
         *
         * @property nextAction
         * @type function
         * @default null
         */
        nextAction: null,

        /**
         * Where to redirect after authentication is complete
         *
         * @property redirect
         * @type boolean
         * @default false
         */
        redirect: false,

        /**
         * Whether or not the page should be refreshed after authentication is complete
         *
         * @property refresh
         * @type boolean
         * @default false
         */
        refresh: false,

        /**
         * Hash to set on url after authentication
         *
         * @property hash
         * @type boolean
         * @default false
         */
        hash: false,

        /**
         * Bool used to show zd custom login header
         *
         * @property zdCustomLogin
         * @type boolean
         * @default false
         */
        zdCustomLogin: false,

        /**
         * Asset title to show on zd custom login form
         *
         * @property assetTitle
         * @type string
         * @default null
         */
        assetTitle: null,

        /**
         * Bool used to keep modal from closing after nextAction
         *
         * @property closeModal
         * @type bool
         * @default true
         */
        closeModal: true,

        /**
         * Keep track of whether or not a user attempting social login needs to register or not
         *
         * @property socialRegistration
         * @type boolean
         * @default false
         */
        socialRegistration: false,

        /**
         * Information about the user including logged in status
         *
         * @property userData
         * @type object
         * @default null
         */
        userData: null,

        /**
         * List of global errors
         *
         * @property globalErrors
         * @type array
         * @default empty array
         */
        globalErrors: [],

        /**
         * Initialize authentication
         *
         * @private
         * @method _create
         */
        _create: function() {
            debug.log('Initialize authentication component');

            this._setup();
            this._setupPageEvents();
            this.loadUserData();
            this._checkForOpenLogin();
        },

        /**
         * Setup authentication entry points
         *
         * @private
         * @method _setupPageEvents
         */
        _setupPageEvents: function() {
            var self = this;

            // Setup authentication entry points
            this.$document.on('click', '[data-authentication]', function (event) {
                var data = $(this).data('authentication');

                debug.log('Authentication data: ', data);

                // Update the app id
                if (data.appId) {
                    self.appId = data.appId;
                }

                // Update the tracking position
                if (data.position) {
                    self.position = data.position;
                }

                // Set regSource in dnb.js
                dnb.setRegSource(self.position);

                // Update first step
                if (data.step) {
                    self.step = data.step;
                } else {
                    self.step = 'start';
                }

                // Hash to set on url
                if (data.hash) {
                    self.hash = data.hash;
                }

                // Redirect after authentication is complete
                if (data.redirect) {
                    self.redirect = data.redirect;
                }

                // Refresh after authentication is complete
                if (typeof data.refresh === 'boolean') {
                    self.refresh = data.refresh;
                }

                // Set zd custom login
                if (data.zdCustomLogin) {
                    self.zdCustomLogin = data.zdCustomLogin;
                }

                // Reset the social registration flag
                self.socialRegistration = false;

                self.getUserData(function (event, userData) {
                    debug.log('User login status: ', userData.isLoggedIn);

                    // Check that the user is logged in
                    if (!userData.isLoggedIn) {
                        self._show(self.step);
                    }
                });
            });
        },

        /**
         * Show the requested authentication step
         * Accepted authentication steps (order and number of hyphens are just to indicate flow):
         *  - start
         *  -- socialRegister
         *  -- loginOrRegister
         *  --- register
         *  --- login
         *  ---- forgot
         *
         * @private
         * @method _show
         *
         * @param step {string} The authentication step to show to the user
         */
        _show: function(step) {
            debug.log('Show step: ', step);

            var self = this;

            // Ignore if the modal is currently loading
            if (!this.loading) {
                // Get a fresh copy of the modal if showing the starting step
                if (step == 'start' || (step == 'loginOrRegister' && !this.$modal)) {
                    this.loading = true;

                    // Remove the previous modal if one was used already; a new one will be needed to get a fresh csrf token
                    if (this.$modal) {
                        this.$modal.remove();
                    }

                    // Fetch the modal
                    $.ajax({
                        data: {
                            appId: self.appId,
                            zdCustomLogin: self.zdCustomLogin,
                            assetTitle: self.assetTitle
                        },
                        dataType: 'json',
                        url: pageVars.user.urls.modal
                    }).done(function (response) {
                        // Inject the modal into the page
                        self.$modal = $(response.html).addClass('appId' + self.appId).appendTo($('body'));

                        // Store the form element for easy access
                        self.$form = self.$modal.find('form');
                        self.$buttons = self.$modal.find('button');

                        // Setup loading animation
                        self.loader = $.fly.loading({ 'template':
                            '<div class="{baseClass} {stateClass} modal-loading-circle"></div>'
                        });

                        self._setStep(step);

                        // Initialize any components in the modal
                        components.process(self.$modal);

                        // Setup all modal events
                        self._setupModalEvents();

                        // Fire event143
                        trackingMgr.trackEvent('trackAuthModalView', {location: self.position, position: self.position});

                        self.loading = false;
                    }).fail(function() {
                        debug.log('Request for modal failed');
                    });
                } else {
                    // Clear any previously set errors
                    this.globalErrors = [];
                    this.$form.data('formValidate').removeGlobalErrors();

                    // Get previous step
                    var oldStep = this.$modal.find('._'+this.step);

                    // Set timeout = (# of children of prev step * (animation delay*10) + (animation duration*10)) * 100 for ms
                    // Animation duration and delay set in authentication scss
                    var timeout = ((oldStep[0].children.length * 2) + 0.5) * 100;

                    // Set timeout for next step so that fade out transition can happen first
                    setTimeout(function() {
                        self._setStep(step);
                    }, timeout);

                    // fade out current step before
                    self._fadeOutStep();
                }
            }
        },

        /**
         * Set the current authentication step and update the html accordingly
         *
         * @private
         * @method _setStep
         *
         * @param step {string} The authentication step to switch to
         */
        _setStep: function(step) {
            var self = this;

            // Carry over the email field if necessary
            if (this.$modal) {
                // Get the email from the previous step.
                var carryOverEmail = this.$modal.find('._' + this.step + ' input[type=email]').val();

                // Update the email of the next step.
                this.$modal.find('._' + step + ' input[type=email]').val(carryOverEmail);
            }

            // Keep track of the current authentication step
            this.step = step;

            if (this.step === 'register' || this.step === 'socialRegister') {
                this.populateCountry(this.$form);
                this.handleTOSCheckbox(this.$form, this.step);
            }

            this.$errors = this.$form.find('._' + this.step + ' div.alert-error');
            this.$requiredError = this.$errors.find('div.required-error');

            if (this.$modal) {
                // Tell the html what the current step is
                this.$modal.removeClass(this.steps.join(' ')).addClass(this.step + ' ' + this.options.classShow);

                if ((this.step === 'register' || this.step === 'gatedUpdate') && this.appId === this.longformAppId) {
                    // Setup DNB pixel
                    dnb.setupDNBPixel(self.$form.find('#authentication_csrf').val());

                    // Add active class to form step
                    this.$modal.find('._register, div.longform-registration-1, div.gated-update-1').addClass(this.options.classActive);
                } else {
                    // Add active class to modal step
                    this.$modal.find('._' + this.step).addClass(this.options.classActive);
                }

                // Disabling all form fields
                this.$modal.find('input:not([type=hidden])').attr('disabled', true);
                this.$modal.find('select:not([type=hidden])').attr('disabled', true);
                this.$modal.find('textarea:not([type=hidden])').attr('disabled', true);

                // Re-enable the form fields for the current step
                this.$modal.find('._' + this.step + ' input').removeAttr('disabled');
                this.$modal.find('._' + this.step + ' select').removeAttr('disabled');
                this.$modal.find('._' + this.step + ' textarea').removeAttr('disabled');
                this.$buttons.prop('disabled', false);

                // Disable any form fields related to a different app id than the current one
                this.$modal.find('[data-app-ids]').each(function(index, element) {
                    var $element = $(element);

                    if ($element.data('appIds').indexOf(self.appId) < 0) {
                        $element.attr('disabled', true);
                    }
                });

                // Give focus to the main form field of the step
                this.$modal.find('[data-focus="' + this.step + '"]').trigger('focus');

                // Don't scroll background
                $('html').css('overflow', 'hidden');
                $('body').addClass('noScroll');
            }
        },

        /**
         * Switch 'active' class to 'fade' for CSS fade out transition
         *
         * @private
         * @method _fadeOutStep
         *
         */
        _fadeOutStep: function() {
            // Clean up 'fade' class for next round of fadeOut animations
            this.$modal.find(this.options.classFade).removeClass(this.options.classFade);

            var activeStep = this.$modal.find('.active');

            if (activeStep) {
                $(activeStep).removeClass(this.options.classActive).addClass(this.options.classFade);
            }
        },


        /**
         * Setup authentication modal events
         *
         * @private
         * @method _setupModalEvents
         */
        _setupModalEvents: function() {
            debug.log('Setup modal events');

            var self = this;

            if (this.$modal) {
                this.loader.$element.appendTo(this.$form);

                // Setup form dropdowns
                this._setupDropdownEvents();

                // Setup company search and country events for DNB
                dnb.setupCompanySearch();
                dnb.setupCountryEvent();

                // Setup close button
                this.$modal.find('[data-action="close"]').on('click', function (event) {
                    self.close();
                });

                // Setup social login buttons
                this.$modal.find('[data-action="social"]').on('click', function (event) {
                    self.loader.add();

                    self.socialSite = $(this).data('site');

                    debug.log('Social authentication: ', self.socialSite);

                    var socialAppId = ursHelper.getSocialAppId(self.appId);
                    urs = ursHelper.getUrs(socialAppId, self._setupSocialEvents.bind(self));
                    urs.social.authenticate(self.socialSite);

                    // Fire event73
                    trackingMgr.trackEvent('trackSocialRegistrationOpen', {registrationFormType: socialAppId+'|'+self.socialSite, position: self.position, location: self.position});
                });

                // Setup forgot password link
                this.$modal.find('[data-action="forgot"]').on('click', function (event) {
                    debug.log('Forgot password clicked');

                    self.loader.add();

                    // Fire event18
                    trackingMgr.trackEvent('forgotPassword', {registrationFormType: self.appId});

                    // Check for a valid email address and submit the forgot password request
                    var $email = self.$form.find('#login_email');
                    if (self.$form.data('formValidate').testField($email)) {
                        $.ajax({
                            data: {
                                email: $email.val(),
                                csrf: self.$form.find('#authentication_csrf').val()
                            },
                            dataType: 'json',
                            type: 'POST',
                            url: pageVars.user.urls.forgot
                        }).done(function (response) {
                            self._show('forgot');
                            self.loader.remove();
                        }).fail(function() {
                            debug.log('Request for forgot password failed');
                            self._displayError('generic');
                        });
                    }
                });

                // Display correct TOS checkboxes
                this.$form.find('select[id$="_country"]').change(function() {
                    self.handleTOSCheckbox(self.$form, self.step);
                });

                // Add or remove field-complete class
                this.$modal.find('input, select, textarea').on('blur change', function (event) {
                    self._checkFieldComplete($(this));
                });

                // Setup form submissions
                this.$form.formValidate({
                    scrollToErrors: false,
                    success: function (event) {
                        event.preventDefault();

                        debug.log('Form validation success');

                        var formData = self.$form.serializeArray();
                        var baseData = {
                            appId: self.appId
                        };
                        var data = (formData.length === 0) ? baseData : formData.reduce(function(data, field) {
                            data[field.name] = field.value;
                            return data;
                        }, baseData);

                        // Handle the form according to the current step
                        switch (self.step) {
                            case 'start':
                                debug.log('Start form submitted');

                                self._show('loginOrRegister');
                                break;

                            case 'loginOrRegister':
                                debug.log('Email check form submitted');

                                self.loader.add();
                                self.$buttons.prop('disabled', true);

                                // Check if the user's email address is already in the system and send them to the login or registration form accordingly
                                $.ajax({
                                    data: data,
                                    dataType: 'json',
                                    type: 'POST',
                                    url: pageVars.user.urls.checkEmail
                                }).done(function(response) {
                                    if (response.success) {
                                        debug.log('Email check success');

                                        var action;

                                        if (response.taken) {
                                            // Fire event22
                                            trackingMgr.trackEvent('trackOpenLoginForm', {location: self.position, position: self.position });
                                            action = 'login';
                                        } else {
                                            // Fire event8
                                            trackingMgr.trackEvent('trackRegistrationOpen', {registrationFormType: self.appId+self.trackingMap[self.appId], position: self.position, location: self.position });
                                            action = 'register';
                                        }

                                        self.loader.remove();
                                        self._show(action);
                                    } else {
                                        self._displayError('generic');
                                    }

                                    // Update the csrf token
                                    self.$modal.find('#authentication_csrf').val(response.csrf);
                                }).fail(function() {
                                    debug.log('Request for email check failed');
                                    self._displayError('generic');
                                });
                                break;

                            case 'register':
                                debug.log('Registration form submitted');

                                self.loader.add();
                                self.$buttons.prop('disabled', true);

                                // Setup steps for longform registration
                                if (self.appId === self.longformAppId) {
                                    $first = self.$form.find('div.longform-registration-1');
                                    $second = self.$form.find('div.longform-registration-2');
                                    $third = self.$form.find('div.longform-registration-3');

                                    if ($first.is(':visible')) {
                                        // DNB email lookup
                                        dnb.dnbEmailSearch(self.$form.find('#authentication_csrf').val(), $first.find('#user_email').val());

                                        debug.log('Show registration step 2');

                                        // Move to step 2
                                        self._setFormStep($second, $first, '2');
                                        break;
                                    } else if ($second.is(':visible')) {
                                        debug.log('Show registration step 3');

                                        // Move to step 3
                                        self._setFormStep($third, $second, '3');

                                        // Hide required text if gdprTOS is shown
                                        if (self.gdprTOS) {
                                            self.$errors.text('');
                                        }
                                        break;
                                    }
                                }

                                // Register the user
                                $.ajax({
                                    data: data,
                                    dataType: 'json',
                                    type: 'POST',
                                    url: pageVars.user.urls.register
                                }).done(function(response) {
                                    if (response.success) {
                                        debug.log('Registration success');

                                        // Override existing user id in utag
                                        window.utag_data.userId = response.regId;

                                        // Fire event5
                                        trackingMgr.trackEvent('newRegistration', {registrationFormType: self.appId+self.trackingMap[self.appId], position: self.position, location: self.position });

                                        self._completeAuthentication();
                                    } else {
                                        self._displayError(response.error);
                                    }

                                    // Update the csrf token
                                    self.$modal.find('#authentication_csrf').val(response.csrf);
                                }).fail(function() {
                                    debug.log('Request for registration failed');
                                    self._displayError('generic');
                                });
                                break;

                            case 'login':
                                debug.log('Login form submitted');

                                self.loader.add();
                                self.$buttons.prop('disabled', true);

                                // Login the user
                                $.ajax({
                                    data: data,
                                    dataType: 'json',
                                    type: 'POST',
                                    url: pageVars.user.urls.login
                                }).done(function(response) {
                                    if (response.success) {
                                        debug.log('Login success');

                                        // Fire event28
                                        trackingMgr.trackEvent('trackLogin', {position: self.position, location: self.position, ursId: response.regId });

                                        self._completeAuthentication();
                                    } else {
                                        self._displayError(response.error);
                                    }

                                    // Update the csrf token.
                                    self.$modal.find('#authentication_csrf').val(response.csrf);
                                }).fail(function() {
                                    debug.log('Request for login failed');
                                    self._displayError('generic');
                                });
                                break;

                            case 'forgot':
                                debug.log('Forgot password form submitted');

                                self.close();
                                break;

                            case 'socialRegister':
                                debug.log('Social registration form submitted');

                                self.globalErrors = [];

                                self.loader.add();
                                self.$buttons.prop('disabled', true);

                                var newsletters = 'e101:INTERNAL_NEWSLETTER,e099:INTERNAL_NEWSLETTER',
                                    $gdprCheckbox = self.$form.find('._socialRegister input:checkbox[name="user[firstPartyOptIn]"]');

                                if ($gdprCheckbox.is(':visible') && !$gdprCheckbox.is(':checked')) {
                                    newsletters = '';
                                }

                                urs.social.authenticate(self.socialSite, true, {
                                    email: self.$form.find('#social_email').val(),
                                    country: self.$form.find('#country_dropdown_form_country').val(),
                                    tosAccepted: true,
                                    options: newsletters
                                });
                                break;

                            case 'gatedUpdate':
                                debug.log('Gated update form submitted');

                                self.loader.add();
                                self.$buttons.prop('disabled', true);

                                // Setup steps for gated update form
                                $first = self.$form.find('div.gated-update-1');
                                $second = self.$form.find('div.gated-update-2');

                                if ($first.is(':visible')) {
                                    debug.log('Show gated update step 2');

                                    // Move to step 2
                                    self._setFormStep($second, $first, '2');
                                    self.$form.find('button').text('Finish & Download');
                                    break;
                                }

                                // Update the user's data
                                $.ajax({
                                    data: data,
                                    dataType: 'json',
                                    type: 'POST',
                                    url: pageVars.user.urls.update
                                }).done(function(response) {
                                    if (response.success) {
                                        debug.log('Gated update success');

                                        window.location = self.redirect;
                                    } else {
                                        $.each(response.errors, function(index, error) {
                                            self._displayError(error);
                                        });
                                    }

                                    // Update the csrf token
                                    self.$modal.find('#authentication_csrf').val(response.csrf);
                                }).fail(function() {
                                    debug.log('Request to update user data failed');
                                    self._displayError('generic');
                                });
                                break;

                            case 'customQuestions':
                                debug.log('Custom questions form submitted');

                                self.loader.add();

                                // Submit form using custom questions js
                                $(document).trigger('customQuestionsSubmit', [self.$form, self.loader]);
                                break;

                            case 'emailContact':
                                debug.log('Custom questions form submitted');

                                var action = self.$form.find('#email-contact-action').val();

                                self.$buttons.prop('disabled', true);
                                self.loader.add();

                                $.ajax({
                                    data: data,
                                    dataType: 'json',
                                    type: 'POST',
                                    url: '/user/'+action+'/xhr/'
                                })
                                .done(function(response) {
                                    if (response.success) {
                                        debug.log('Email contact success');

                                        self.$form.find('div.alert-success').text('Your email has been sent');

                                        // Reset form fields
                                        self.$form.trigger('reset');
                                        self.$modal.find('input, textarea').each(function(){
                                            self._checkFieldComplete($(this));
                                        });

                                        self.loader.remove();
                                    } else {
                                        self._displayError(response.error);
                                    }
                                })
                                .fail(function(response) {
                                    debug.log('Email contact error', response);
                                    self._displayError('generic');
                                })
                                .always(function(response) {
                                    debug.log('Email contact complete', response);

                                    $('[data-component="recaptcha"]', self.$form).recaptcha('reload');
                                    self.$buttons.prop('disabled', false);
                                    self.loader.remove();
                                });
                                break;

                            default:
                                debug.log('Current step not recognized');
                        }
                    },
                    placeError: function($error, $field) {
                        debug.log('Form validation error: ', $error, $field);

                        if ($error.text() === translations.required.field) {
                            // Only add required error to the form once for all empty fields
                            self.$requiredError.html($error.text(translations.required.modalAuthenticate));
                        } else {
                            // Append all other errors to the bottom of the form
                            self.$errors.append($error);
                        }
                    }
                });
            }
        },

        /**
         * Check if field has a value set to add or remove the field complete class
         *
         * @private
         * @method _checkFieldComplete
         *
         * @param $field {element} The form field to check
         */
        _checkFieldComplete: function($field) {
            if ($.trim($field.val()) !== '' && $field.val().indexOf('NOTSELECTED') < 0) {
                $field.addClass('field-complete');
            } else {
                $field.removeClass('field-complete');
            }
        },

        /**
         * Transistion to next step on multi page forms and update counter
         *
         * @private
         * @method _setFormStep
         *
         * @param $next     {element} The form step to show
         * @param $previous {element} The form step to fade out
         * @param number    {string}  The step number
         */
        _setFormStep: function($next, $previous, number) {
            var self = this;

            // Set timeout = (# of children of prev step * (animation delay*10) + (animation duration*10)) * 100 for ms
            // Animation duration and delay set in authentication scss
            var timeout = (($previous.children.length * 2) + 0.5) * 100;

            this.loader.remove();

            $previous.removeClass(this.options.classActive).addClass(this.options.classFade);

            // Set timeout for next step so that fade out transition can happen first
            setTimeout(function() {
                $previous.hide().removeClass(self.options.classFade);
                self.$form.find('div.step-counter .active-step').text(number);
                $next.show().addClass(self.options.classActive);
                self.$buttons.prop('disabled', false);
            }, timeout);
        },

        /**
         * Complete the authentication process by executing the next action if there is one and
         * showing the user as logged in, refreshing the page if requested, and closing the modal
         *
         * @private
         * @method _completeAuthentication
         */
        _completeAuthentication: function() {
            debug.log('Authentication complete');

            var self = this;

            // Load user data
            this.loadUserData();

            this.getUserData(function (event, userData) {

                // Set hash on url
                if (self.hash) {
                    window.location.hash = self.hash;
                }

                // Redirect the page
                if (self.redirect) {
                    window.location = self.redirect;
                    return;
                }

                // Give the account information to the nextAction if there is one, and update the refresh flag accordingly
                if (typeof self.nextAction === 'function') {
                    self.nextAction(self.userData);
                    self.nextAction = null;

                    if (!self.closeModal) {
                        return;
                    }
                }

                // Refresh the page
                if (self.refresh === true) {
                    window.location.reload();
                    return;
                }

                // Close the modal
                self.close();
            });
        },

        /**
         * Get user data and logged in status
         *
         * @public
         * @method loadUserData
         */
        loadUserData: function() {
            var self = this;

            // Reset the user data
            this.userData = null;

            // Fetch user data only if the user is logged in
            if (cookie.read('purs_3')) {
                $.ajax({
                    dataType: 'json',
                    url: pageVars.user.urls.userData
                }).done(function(response) {
                    debug.log('Load user data success');

                    // Set logged in user data
                    self.userData = $.extend(true, response.user, {
                        isLoggedIn: response.isLoggedIn
                    });

                    var isPremiumUser = false;
                    // Check if user is subscribed to premium and set cookie
                    if (cookie.read('is_premium_user') === null) {
                        $.ajax({
                            dataType: 'json',
                            url: '/premium/subscription/premium-cookie/'
                        }).done(function(response) {
                            debug.log('Premium cookie:', cookie.read('is_premium_user'));

                            self.userData.isPremiumUser = (response.subscribed === 'true');

                            self.updateDisplay();

                            // Trigger an event to signal that user data is now available
                            self.$element.trigger('userdataloaded', [self.userData]);
                        }).fail(function() {
                            debug.log('Request to load user data failed');
                        });
                    } else {
                        self.userData.isPremiumUser = (cookie.read('is_premium_user') === 'true');

                        self.updateDisplay();

                        // Trigger an event to signal that user data is now available
                        self.$element.trigger('userdataloaded', [self.userData]);
                    }

                    // Update user status for Chartbeat
                    window._cbq.push(['_acct', 'lgdin']);
                }).fail(function() {
                    debug.log('Request to load user data failed');
                });
            } else {
                // Set logged out user data
                this.userData = {
                    isLoggedIn: false,
                    isPremiumUser: false
                };

                self.updateDisplay();

                // Update user status for Chartbeat
                window._cbq.push(['_acct', 'anon']);
            }
        },

        /**
         * Show the user as logged in or logged out
         * Assumes that this.userData has already been set
         *
         * @public
         * @method updateDisplay
         */
        updateDisplay: function() {
            debug.log('Update display, user login status: ', this.userData.isLoggedIn);

            var self = this,
                $loggedIn = $('[data-user-view="loggedIn"]'),
                $loggedOut = $('[data-user-view="loggedOut"]'),
                $subscribed = $('[data-premium-view="subscribed"]'),
                $unsubscribed = $('[data-premium-view="unsubscribed"]');

            if (this.userData.isLoggedIn) {
                $('[data-user-var]').each(function() {
                    var $el = $(this),
                        type = $el.data('userVar'),
                        attr = $el.data('userVarAttr');

                    if (self.userData[type]) {
                        if (attr) {
                            $el.attr(attr, self.userData[type]);
                        } else {
                            $el.text(self.userData[type]);
                        }
                    }
                });

                $loggedIn.show().css('visibility', 'visible');
                $loggedOut.hide();
                $('body').removeClass('not-logged-in');

                if (this.userData.isPremiumUser) {
                    $subscribed.show();
                    $unsubscribed.hide();
                } else {
                    $unsubscribed.show();
                    $subscribed.hide();
                }
            } else {
                $loggedOut.show().css('visibility', 'visible');
                $loggedIn.hide();
                $('body').addClass('not-logged-in');

                $unsubscribed.show();
                $subscribed.hide();
            }
        },

        /**
         * Close the authentication modal
         *
         * @public
         * @method close
         */
        close: function() {
            debug.log('Authentication modal close');

            this.nextAction = null;
            this.zdCustomLogin = false;
            this.assetTitle = null;

            this.$modal.removeClass(this.options.classShow);
            $('html').css('overflow', '');
            $('body').removeClass('noScroll');
        },

        /**
         * Display global error message in the form
         *
         * @private
         * @method _displayError
         *
         * @param error {string} The error code to display an error message for
         */
        _displayError: function(error) {
            debug.log('Display global error: ', error);

            var validator = this.$form.data('formValidate');

            this.globalErrors.push(error);

            validator.addGlobalError((translations[error || 'generic'] || translations.generic), 'error', this.$errors);

            this.$buttons.prop('disabled', false);
            this.loader.remove();
        },

        /**
         * Setup events for social authentication
         *
         * @private
         * @method _setupSocialEvents
         *
         * @param urs {object} The urs instance to add events to
         */
        _setupSocialEvents: function(urs) {
            debug.log('Setup social authentication events');

            var self = this;

            // Handle social authorization events
            urs.common.addEventListener(URS.events.AUTH_COMPLETE, function(event, apiResponse) {
                // Handle any errors that may have occurred
                if (apiResponse.response.status.errors && apiResponse.response.status.errors.length > 0) {
                    // Get the list of error application codes
                    var errors = $.map(apiResponse.response.status.errors, function(error, index) {
                        return error.applicationCode;
                    });

                    if (errors.indexOf('invalid.noLink') >= 0) {
                        debug.log('No account found, send user to social registration');

                        // No account found, move to the social registration step
                        self.socialRegistration = true;
                        self._show('socialRegister');
                    } else if (errors.indexOf('required.email') >= 0) {
                        debug.log('Email not provided, send user to social email form');

                        // No email provided, show email field
                        self.$modal.find('._socialRegister').addClass('failed');
                    } else {
                        // Display error message
                        if ($.inArray(errors[0], self.globalErrors) === -1) {
                            self._displayError(errors[0]);
                        }
                    }

                    self.loader.remove();
                    self.$buttons.prop('disabled', false);
                } else {
                    // Let symfony know the user logged in
                    $.post(pageVars.user.urls.social, {
                        email: apiResponse.response.receipt.account.emailAddress
                    }, function(response) {
                        if (response.success) {
                            debug.log('Social authentication success');

                            var registrationFormType = ursHelper.getSocialAppId(self.appId)+'|'+self.socialSite;

                            if (self.socialRegistration) {
                                // Override existing user id in utag
                                window.utag_data.userId = apiResponse.response.receipt.account.registrationId;

                                // Fire event5
                                trackingMgr.trackEvent('newRegistration', {registrationFormType: registrationFormType, position: self.position, location: self.position, ursId: apiResponse.response.receipt.account.registrationId });
                            } else {
                                // Fire event28
                                trackingMgr.trackEvent('trackLogin', {registrationFormType: registrationFormType, position: self.position, location: self.position, ursId: apiResponse.response.receipt.account.registrationId });
                            }

                            self._completeAuthentication();
                        } else {
                            self._displayError('generic');
                        }
                    }, 'json');
                }
            });
        },

        /**
         * Populate country field
         *
         * @public
         * @method _populateCountry
         *
         * @param $form {element} The form to update country on
         */
        populateCountry: function($form) {
            $country = $form.find('select[id$="_country"]');

            if (cookie.read('fly_geo')) {
                var data = JSON.parse(cookie.read('fly_geo'));

                if (data.countryCode !== null) {
                    debug.log('Populate country dropdown: ', data.countryCode);

                    // Set value of country dropdown and trigger focus out and change events
                    $country.val(data.countryCode.toUpperCase()).trigger('change');
                    $country.attr('disabled', false);
                }
            }
        },

        /**
         * Setup events for dropdown fields
         *
         * @private
         * @method _setupDropdownEvents
         */
        _setupDropdownEvents: function() {
            var self = this,
                userJobFuncVal = this.$form.find('#user_jobFunc').val();

            // Update value of NOTSELECTED for all dropdowns
            this.$form.find('#user_industry option[value="NOTSELECTED"]').text('Industry');
            this.$form.find('#user_companySize option[value="NOTSELECTED"]').text('Company Size');

            this.$form.find('#user_jobFunc option[value="NOTSELECTED"]').remove();
            this.$form.find('#user_jobFunc optgroup[label="Please select"]').remove();
            this.$form.find('#user_jobFunc').prepend('<option value="NOTSELECTED">Job Function</option>');

            this.$form.find('#user_country option[value="NOTSELECTED"], #country_dropdown_form_country option[value="NOTSELECTED"]').text('Country');

            if (userJobFuncVal == 'NOTSELECTED') {
                this.$form.find('#user_jobFunc').val(userJobFuncVal);
            }

            // Setup events for job function dropdown
            this._handleJobFuncDropDown();

            this.$form.find('#user_jobFunc').change(function() {
                self._handleJobFuncDropDown();
            });

            // Setup events for country dropdown
            this._handleCountryDropDown();

            this.$form.find('#user_country').change(function() {
                self._handleCountryDropDown();
            });
        },

        /**
         * Hide/show company information fields based on user's selected job function
         *
         * @private
         * @method _handleJobFuncDropDown
         */
        _handleJobFuncDropDown: function() {
            var jobFunc = this.$form.find('#user_jobFunc').val();

            debug.log('Handle job function dropdown: ', jobFunc);

            if (jobFunc !== 'NOTSELECTED') {
                var phonePlaceholder = 'Phone';

                // Hide fields if user selects an unemployed job function
                if ($.inArray(jobFunc, unemployedJobFunc) != -1) {
                    for (i = 0; i < excludeFieldsJobFunc.length; i++) {
                        this.$form.find('#user_' + excludeFieldsJobFunc[i]).attr('disabled', true).attr('required', false).hide();
                    }
                } else {
                    for (i = 0; i < excludeFieldsJobFunc.length; i++) {
                        this.$form.find('#user_' + excludeFieldsJobFunc[i]).attr('disabled', false).attr('required', true).show();
                    }

                    phonePlaceholder = 'Work Phone';
                }

                this.$form.find('#user_phone').attr('placeholder', phonePlaceholder);
            }
        },

        /**
         * Hide/show state dropdown based on user's selected country
         *
         * @private
         * @method _handleCountryDropDown
         */
        _handleCountryDropDown: function() {
            var country = this.$form.find('#user_country').val();

            debug.log('Handle country dropdown: ', country);

            // Update NOTSELECTED text for state dropdown
            this.$form.find('#user_state option[value*="NOTSELECTED"]').text('State/Province');

            // Hide fields if user selects a country that does not require a state
            if ($.inArray(country, stateRequired) != -1) {
                for (i = 0; i < excludeFieldsCountry.length; i++) {
                    this.$form.find('div.longform-registration-2, div.gated-update-2').removeClass(this.options.classActive);
                    this.$form.find('#user_' + excludeFieldsCountry[i]).attr('disabled', false).attr('required', true).show();
                }
            } else {
                for (i = 0; i < excludeFieldsCountry.length; i++) {
                    this.$form.find('#user_' + excludeFieldsCountry[i]).attr('disabled', true).attr('required', false).hide();
                }
            }

            // Set validation rules for postal code
            if ($.inArray(country, postalCodeValidation) != -1) {
                this.$form.find('#user_postalCode').attr('data-validate', 'postalCode'+country);
            } else {
                this.$form.find('#user_postalCode').attr('data-validate', 'postalCodeINTL');
            }
        },

        /**
         * Get user data
         *
         * @public
         * @method getUserData
         *
         * @param callback {function} The function to execute once user data is returned
         */
        getUserData: function(callback) {
            if (this.userData) {
                callback(null, this.userData);
            } else {
                this.$element.one('userdataloaded', callback);
            }
        },

        /**
         * Hide/show TOS checkboxes based on user's selected country
         *
         * @public
         * @method handleTOSCheckbox
         */
        handleTOSCheckbox: function($form, step) {
            var country = $form.find('._' + step + ' select[id$="_country"]').val(),
                geoCountry = '',
                $gdprTOS = $form.find('.gdpr-tos'),
                $allTOS = $form.find('.all-tos'),
                $allCheckbox = $allTOS.find('input');

            if (cookie.read('fly_geo')) {
                var data = JSON.parse(cookie.read('fly_geo'));

                if (data.countryCode !== null) {
                    geoCountry = data.countryCode;
                }
            }

            if ($.inArray(country, gdprCountries) != -1 || $.inArray(geoCountry, gdprCountries) != -1) {
                // Show/enable GDPR TOS and hide/disable global TOS
                $gdprTOS.show();

                $allTOS.hide();
                $allCheckbox.prop('disabled', true);

                this.gdprTOS = true;
            } else {
                // Show/enable global TOS and hide/disable GDPR TOS
                $allTOS.show();
                $allCheckbox.prop('disabled', false);

                $gdprTOS.hide();

                this.gdprTOS = false;
            }
        },

        /**
         * Determine if the user has access to a certain feature by checking if they are logged in
         *
         * @public
         * @method hasAccess
         *
         * @param options            {object}
         * @param options.appId      {int}      The app id to use if the user is logged out
         * @param options.position   {string}   The tracking position if the user is logged out
         * @param options.nextAction {function} The function to execute if/when the user has access
         */
        hasAccess: function(options) {
            var self = this;

            // Set default options
            options = $.extend(true, {
                nextAction: null,
                requireUsername: false
            }, options);

            // Update the app id
            if (options.appId) {
                self.appId = options.appId;
            }

            // Update the position
            if (options.position) {
                self.position = options.position;
            }

            // Update the step
            if (options.step) {
                self.step = options.step;
            }

            // Set zd custom login
            if (options.zdCustomLogin) {
                self.zdCustomLogin = options.zdCustomLogin;
            }

            // Set asset title
            if (options.assetTitle) {
                self.assetTitle = options.assetTitle;
            }

            // Set close modal
            if (options.closeModal) {
                self.closeModal = options.closeModal;
            }

            debug.log('User has access check: ', options);

            // Get information about the user
            this.getUserData(function (event, userData) {
                // Check if the user is logged in
                if (!userData.isLoggedIn) {
                    self.nextAction = options.nextAction;
                    self._show(self.step);
                } else if (typeof options.nextAction === 'function') {
                    options.nextAction(userData);
                }
            });
        },

        /**
         * Display gated update form after download authentication
         *
         * @public
         * @method showModalStep
         *
         * @param step     {string} Name of the step
         * @param html     {object} Html for the gated update modal
         * @param redirect {string} Url to redirect to after form submit
         */
        showModalStep: function(step, html, redirect) {
            debug.log('Show modal step: ', step);

            var self = this;

            this.loading = true;

            if (redirect) {
                this.redirect = redirect;
            }

            // Remove the previous modal if one was used already; a new one will be needed to get a fresh csrf token
            if (this.$modal) {
                this.$modal.remove();
            }

            // Inject the modal into the page
            this.$modal = $(html).addClass('appId' + this.appId).appendTo($('body'));

            // Store the form element for easy access
            this.$form = this.$modal.find('form');
            this.$buttons = this.$modal.find('button');

            // Setup loading animation
            this.loader = $.fly.loading({ 'template':
                '<div class="{baseClass} {stateClass} modal-loading-circle"></div>'
            });

            // Add field complete class to fields with values
            this.$modal.find('input, select, textarea').each(function(){
                self._checkFieldComplete($(this));
            });

            this._setStep(step);

            // Initialize any components in the modal
            components.process(this.$modal);

            // Setup all modal events
            this._setupModalEvents();

            this.loading = false;
        },

        /**
         * Check for a query string of 'openLogin=1' in the url
         * If present, open the modal by triggering a click
         *
         * @private
         * @method _checkForOpenLogin
         */
        _checkForOpenLogin: function() {
            var openLoginParam = urlHelper.getParam('openLogin');

            debug.log('Open login param: ', openLoginParam);

            if (openLoginParam == '1') {
                if (urlHelper.getParam('redirect')) {
                    this.redirect = decodeURIComponent(urlHelper.getParam('redirect'));
                }

                // Open login modal
                $('[data-authentication]').first().trigger('click');

                // Remove query params
                window.history.replaceState(null, null, document.location.pathname);
            }
        }
    });
});
/*
 * Component Manager - Desktop
 * Site specific component instantiation
 */

define('managers/components',[
  'jquery',
  'version!fly/managers/debug',
  'managers/page-vars',
  'version!fly/managers/components',
  'managers/tealium',
  'managers/tracking',

  'version!fly/components/alert',
  'version!fly/components/carousel',
  'version!components/carousel',
  'version!fly/components/dropdown',
  'version!components/tabs',
  'components/authentication',
  window.trPageVars.tracking.data.testName === 'save_content' && window.trPageVars.tracking.data.testGroup !== 'control' ? 'components/save-content' : ''
], function ($, debug, pageVars, componentMgr, tagMgr, trackingMgr) {

    debug = debug.get('components');

    componentMgr.register({
        // scripts include in main load
        alert: {},
        authentication: {},
        carousel: {},
        dropdown: {},
        emailContact: {
            require: ['components/email-contact'],
        },
        tabs: {
            options: {
                shown: function(e, data) {
                }
            }
        },
        saveContent: {},
        // scripts conditionally loaded
        dependentField: {
            require: ['version!components/dependent-field']
        },
        directorySuggestiveSearch: {
            require: ['components/directory-suggestive-search']
        },
        fixate: {
            require: 'components/fixate'
        },
        formValidate: {
            require: ['version!components/form-validate'],
        },
        premiumDownload: {
            require: 'components/premium-download'
        },
        googleCsa: {
            require: 'components/google-csa'
        },
        disqusCount: {
            require: 'components/disqus-count'
        },
        disqusComments: {
            require: 'components/disqus-comments'
        },
        loadMore: {
            require: ['components/load-more'],
            options: {
                componentRefresh: function(e, data) {
                    componentMgr.process(data.content);
                }
            }
        },
        loadMoreScroll: {
            require: ['version!fly/components/load-more-scroll']
        },
        socialLinks: {
            require: ['version!components/social-links'],
            options: {
                clicked: function(e, data) {
                    debug.log('social count clicked',e,data);
                    try {
                        trackingMgr.trackEvent('clickSocialShare', {socialCode: omnitureMgr.getSocialCode(data.name), articleTitle: pageVars.tracking.data.articleTitle});
                        dwMgr.trackSocialShare(e, {eventt: 'share', 'lite_event_category': 'social', ssite: data.name, wd: 'sharebar', wdloc: 'body'});
                    } catch(e) {
                        debug.log('Error on social click',e);
                    }
                },
                loaded: function() {
                    debug.log('social count loaded');
                }
            }
        },
        socialButton: {
            require: ['version!fly/components/social-button'],
            options: {
                clicked: function() {
                    debug.log('social button clicked');
                },
                loaded: function() {
                    debug.log('social button loaded');
                }
            }
        },
        imageGallery: {
            require: ['version!components/image-gallery']
        },
        imageGalleryThumb: {
            require: ['version!fly/components/image-gallery-thumb']
        },
        recaptcha: {
            require: 'components/recaptcha'
        },
        customQuestions: {
            require: ['version!components/custom-questions'],
        },
        newsletterSubscription: {
            require: ['version!components/newsletter-subscription'],
            options: {
                subscribeClicked: function(e, data) {
                    trackingMgr.trackEvent('newsletterSubscribe', { 'newsletterId': data.newsletterId, 'position': data.newsletterPos });
                },
                unsubscribeClicked: function(e, data) {
                    trackingMgr.trackEvent('newsletterUnSubscribe', { 'newsletterId': data.newsletterId, 'position': data.newsletterPos });
                },
                sampleShown: function(e, data) {
                    // data has:
                    // button
                    // content (iframe shown)
                }
            }
        },
        viewMore:{
            require: ['components/view-more']
        },
        loadAsync: {
            require: ['version!components/load-async'],
            options: {
                // process components in AJAX'd content
                contentSet: function(e, data) {
                    componentMgr.process(data.content);

                    // find each clickable element and set up click tracking if tracking data exists
                    trackingMgr.initClickTracking($(data.content));
                }
            }
        },
        medusaAsync: {
            require: ['version!components/medusa-async'],
            options: {
                // process components in AJAX'd content
                contentSet: function(e, data) {
                    componentMgr.process(data.$content);
                }
            }
        },
        charCount: {
            require: ['version!components/char-count']
        },
        showHide: {
            require: ['components/show-hide']
        },
        forum: {
            require: ['components/forum'],
            options: {
                contentSet: function(e, data) {
                    componentMgr.process(data.content);
                },
                actionSuccess: function(elAction, actionName, id) {
                    //Forum tracking here
                    if (elAction.type == "forumactionsuccess") {
                        trackingMgr.trackEvent('forumPost');
                    }
                }
            }
        },
        forumPeopleTag: {
            require: ['version!components/forum-people-tag']
        },
        memberProfile: {
            require: ['version!components/member-profile']
        },
        collectionLoader: {
            require: ['version!components/collection-loader']
        },
        editions: {
            require: ['version!components/editions']
        },
        brokenlink: {
            require: ['version!components/brokenlink']
        },
        rds: {
            require: ['version!components/rds']
        },
        forumSearch: {
            require: ['components/forum-search']
        },
        vote: {
            require: ['version!components/vote']
        },
        editProfileForm: {
            require: ['components/edit-profile-form']
        },
        formSocialLegal: {
            require: ['version!components/form-social-legal']
        },
        alertPreferences: {
            require: ['version!components/alert-preferences']
        },
        simpleModal: {
            require: ['components/simple-modal']
        },
        modalEnlargeImage: {
            require: 'components/modal-enlarge-image'
        },
        stickyElement: {
            require: 'components/sticky-element'
        },
        stickyMpu: {
            require: 'components/sticky-mpu'
        },
        headerSearch: {
            require: 'components/header-search'
        },
        headerNav: {
            require: 'components/header-nav'
        },
        headerNavCoverStory: {
            require: 'components/header-nav-cover-story'
        },
        lazyloadImages: {
            require: 'components/lazyload-images'
        },
        medusaContentRecommendation: {
            require: ['version!components/medusa-recommendation']
        },
        initialCapitalLetter: {
            require: 'components/initial-capital-letter'
        },
        taboola : {
            require: 'components/taboola'
        },
        frontDoorCarousel : {
            require: 'components/front-door-carousel'
        },
        startNewDiscussionButton : {
            require: 'components/start-new-discussion-button'
        },
        videoCarousel : {
            require: 'components/video-carousel'
        },
        videoPlaylistConnector : {
            require: 'components/video-playlist-connector'
        },
        trVideo: {
            require : 'components/tr-video'
        },
        woobox: {
            require: 'components/woobox'
        },
        semSearch: {
            require: 'components/sem-search'
        },
        profileShowMore: {
            require: 'components/profile-show-more'
        },
        premiumSubscription: {
            require: 'components/premium-subscription'
        },
        downloadAuthentication: {
            require: 'components/download-authentication'
        },
        premiumAuthentication: {
            require: 'components/premium-authentication'
        },
        sideqik: {
            require: 'components/sideqik'
        },
        manipulateUrl: {
            require: 'components/manipulate-url'
        }
    });

    return componentMgr;
});
/*
 * Image Resolution
 */

define('managers/image-resolution',[
    'jquery',
    'utils/cookie',
], function ($, cookieMgr) {
    
    var config = {
        cookie: {
            name: 'fly_img',
            domain: 'default'
        },
        breakpointOptions: [],
        pixelRatioOptions: [1]
    };
    
    return {
        init: function(data) {
            if ($.isPlainObject(data)) {
                // remove empty items
                data = $.grep(data, function(v){ return(v); });
                // set config
                $.extend(config, data);
            }
            
            // sort arrays in descending order
            config.breakpointOptions = config.breakpointOptions.sort(function(a,b){return a+b;});
            config.pixelRatioOptions = config.pixelRatioOptions.sort(function(a,b){return a+b;});

            this.setCookie();
        },
        
        getPixelRatio: function() {
            var pixelRatio = window.devicePixelRatio || 1,
                out = config.pixelRatioOptions[0];
            
            $.each(config.pixelRatioOptions, function(i, val) {
                if (val >= pixelRatio) {
                    out = val;
                }
            });
            
            return out;
        },
        
        getBreakpoint: function() {
            var width = $(window).width(),
                out = config.breakpointOptions[0];
                
            $.each(config.breakpointOptions, function(i, val) {
                if (val >= width) {
                    out = val;
                }
            });

            return out;
        },
        
        setCookie: function() {
            var data = {
                pixelRatio: this.getPixelRatio(),
                breakpoint: this.getBreakpoint()  
            };
            cookieMgr.write(config.cookie.name, data, {expires: 365, path: '/' });
        }
    };
    
});
/**
 * Controls which user component to load on the page
 */
define('managers/user',[
    'jquery',
    'components/authentication'
], function($) {
    return $.tr.authentication();
});
define('components/load-async-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function ($, debugMgr) {

    var debug = debugMgr.get('loadAsync');

    /**
     * Asynchronously loads a page component and injects the content into the page on page load
     *
     * @extends cbsi.base
     *
     * Example:
     *
     *      <div id="uid-1355211619"
     *           data-component="loadAsync"
     *           data-load-async-options="{
     *               &quot;url&quot;:&quot;\/some\/route\/&quot;,
     *               &quot;data&quot;:{
     *                   &quot;var1&quot;:&quot;foo&quot;,
     *                   &quot;var2&quot;:11,
     *                   &quot;var3&quot;:2145
     *               },
     *               &quot;replace&quot;:&quot;false&quot;
     *           }"
     *      >
     *      </div>
     *
     */
    $.widget( 'tr.loadAsync', $.fly.base, {
        options: {
            url: null, // {String} URL to send request to
            data: {}, // {Object} GET vars to send with request
            replace: true, // {Boolean} whether to replace the target's content or insert into it
            delay: 0
        },

        /**
         * Instantiate loadAsync
         * @constructor
         */
        _create: function() {
            var o = this.options;

            this._setup();

            this.id = this.$element.attr('id');

            if (!this.id) {
                this.id = 'uid-'+ Math.floor(Math.random() * 100000);
                this.$element.attr('id', this.id);
            }
            debug.log("_create: ", "container", this.id);

            this._load();
        },

        /**
         * Load the component's content based on the URL provided, and replace
         * the original element with the returned content.
         */
        _load: function() {
            var o = this.options,
                self = this;

            debug.log("_load: ", "loading", self.id, o.url, o.data);
            setTimeout(function(){
                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    url: o.url,
                    data: o.data
                }).done($.proxy(self._handleSuccess, self)).fail($.proxy(self._handleFailure, self));
            },o.delay);
        },

        /**
         * Handle a successful AJAX response.  Replaces the target element with
         * the returned content.
         */
        _handleSuccess: function(data) {
            var o = this.options,
                self = this;

            debug.log("_handleSuccess: ", "response success?", data.success, self.id);

            if (data.success && data.html) {
                if (o.replace) {
                    // Replace the target element with the HTML received
                    var $newContent = $(data.html);
                    self.$element.replaceWith($newContent);
                    self._trigger('contentSet', null, {content: $newContent});
                } else {
                    // Insert the HTML into the target element
                    self.$element.html(data.html);
                    self._trigger('contentSet', null, {content: self.$element});
                }
            } else {
                self._handleFailure(data);
            }
        },

        /**
         * Handle a failed AJAX response.
         */
        _handleFailure: function(data) {
            var o = this.options,
                self = this;

            debug.log("_handleFailure: ", "error message", data, self.id);
        }
    });

});

define('components/medusa-async-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/managers/components',
    'version!fly/utils/url-helper',
    'utils/cookie',
    'managers/page-vars',
    'managers/tealium',
    'managers/tracking',
    'version!components/load-async'
], function ($, debugMgr, componentMgr, urlHlpr, cookieMgr, pageVars, tealiumMgr, trackingMgr) {

    var debug = debugMgr.get('medusaAsync'),
        medusaCounter = 0;

    var pageVarTrackingData = pageVars.tracking.data;
    // Use existing upId [if already generated by medusa-recommendation] when possible
    var upId = (typeof pageVarTrackingData.upId !== 'undefined' && pageVarTrackingData.upId > 0) ? pageVarTrackingData.upId : Math.floor(Math.random() * 1000000000);
    if (typeof pageVarTrackingData.upId === 'undefined'){
        pageVarTrackingData.upId = upId;
    }

    debug.log('upId: '+upId);

    var isLocalStorageEnabled = (function isLocalStorageEnabledClosure() {
      // Feature test as per http://diveintohtml5.info/storage.html
      // The additional localStorage call is to get around a FF quirk, see
      // bug #495747 in bugzilla
      try {
        return ('localStorage' in window && window['localStorage'] !== null && localStorage);
      } catch (e) {
        return false;
      }
    })();

    /**
     * Asynchronously loads a page component and injects the content into the page on page load
     *
     * @extends tr.loadAsync
     *
     * Example:
     *
     *      <div id="uid-1355211619"
     *           data-component="medusaAsync"
     *           data-medusa-async-options="{
     *               &quot;url&quot;:&quot;\/some\/route\/&quot;,
     *               &quot;data&quot;:{
     *                   &quot;var1&quot;:&quot;foo&quot;,
     *                   &quot;var2&quot;:11,
     *                   &quot;var3&quot;:2145
     *               }
     *           }"
     *      >
     *      </div>
     *
     */
    $.widget( 'tr.medusaAsync', $.tr.loadAsync, {
        options: {
            url: null, // {String} URL to send request to
            enableABParam: false, // Turn to true to enable AB Test Param
            data: {} // {Object} GET vars to send with request
        },

        isSticky: null,

        /**
         * Initializes the component
         *
         * @private
         * @method _create
         */
        _create: function() {
            var o = this.options,
                self = this;

            window.TRFunctions.gdprConsentCallback("script_medusa", function() {
                self._setup();

                self.id = self.$element.attr('id');

                if (!self.id) {
                    self.id = 'uid-'+ Math.floor(Math.random() * 100000);
                    self.$element.attr('id', self.id);
                }
                debug.log("_create: ", "container", self.id);

                self._load();
            }, {}, 'targeting');
        },

        /**
         * Called by the _create function; does the basic setup, then
         * adds debug parameter to AJAX data if required.
         */
        _setup: function() {
            var o = this.options;
            var topicId = null;
            if ($.isArray(pageVarTrackingData.topicId)) {
                topicId = pageVarTrackingData.topicId[0];
            } else if (pageVarTrackingData.topicId) {
                topicId = pageVarTrackingData.topicId;
            }

            var topicName = '';
            var secondaryTopicNames = '';
            if(pageVarTrackingData.topicName) {
                topicName = pageVarTrackingData.topicName instanceof Array ? pageVarTrackingData.topicName[0] : pageVarTrackingData.topicName;
                secondaryTopicNames = pageVarTrackingData.topicName instanceof Array ? pageVarTrackingData.topicName.slice(1).toString() : '';
            }

            var docId = null;
            if ($.type(pageVarTrackingData.resourceLibraryId) === 'string') {
                docId = pageVarTrackingData.resourceLibraryId.split(':').pop();
            }

            var bevtopic = cookieMgr.read('b2b-aam-segments');

            var trackingData = {
                siteId: pageVarTrackingData.siteId,
                rsid: pageVarTrackingData.rsid,
                sl: 'en',
                sc: pageVarTrackingData.siteEdition,
                pagetype: pageVarTrackingData.pageType,
                topicguid: topicId,
                topicbrcrm: pageVarTrackingData.siteSection,
                topicname: topicName,
                secondarytopicnames: secondaryTopicNames,
                assetguid: pageVarTrackingData.articleId,
                assettitle: pageVarTrackingData.articleTitle,
                assettype: pageVarTrackingData.articleType,
                ftag_cd: pageVarTrackingData['qp.ftag'],
                devicetype: pageVarTrackingData.deviceType,
                viewguid: pageVars.guid,
                ursuserid: pageVarTrackingData.userId,
                docid: docId,
                upId: upId,
                bevtopic: bevtopic
            };

            // Add bombora data when it exists, retrieving first from localStorage, then from cookie
            var data;
            if (isLocalStorageEnabled) {
                data = decodeURIComponent(localStorage._ccmdt);
            } else if ($.cookie("_ccmdt")) {
                data = $.cookie("_ccmdt");
            }
            if (data) {
                var arr = data.split('||');
                var parts;
                for(var i=0, length=arr.length; i<length; i++){
                    parts = arr[i].split('=');
                    if(parts[1]){
                        if(parts[0] === "tp") {
                            trackingData.tp = parts[1].replace(/;;$/, "");
                        } else if(parts[0] === "cs") {
                            trackingData.cs = parts[1];
                        } else if(parts[0] === "ind") {
                            trackingData.ind = parts[1];
                        } else if(parts[0] === "fa") {
                            trackingData.fa = parts[1].replace(/;;$/, "");
                        }
                    }
                }
            }

            $.extend(o.data, trackingData);

            if (o.enableABParam === true) {
              o.url = o.url + window.location.search;
            }

            this._super();

            if ($.cookie("upid_"+ upId) && medusaCounter !== 0){
                o.delay = 1000 * medusaCounter;
            } else {
                $.cookie("upid_"+ upId, 1, { expires: 1 });
            }

            medusaCounter++;

            if (urlHlpr.getParam('medusaDebug')) {
                o.data.medusaDebug = urlHlpr.getParam('medusaDebug');
            }

            // right rail unit is sticky when it's the last item in the column
            this.isSticky = (o.url.indexOf('right-rail') >= 0) && (this.$element.next().length === 0);
        },

        /**
         * Load the component's content based on the URL provided, and replace
         * the original element with the returned content.
         *
         * @private
         * @method _load
         */
        _load: function() {
            var o = this.options,
                self = this;

            if(self.isSticky) {
              // sticky right rail unit should have 4 items instead of default
              o.data.count = 4;
            }

            debug.log("_load: ", "loading", self.id, o.url, o.data);
            setTimeout(function(){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: o.url,
                    data: o.data
                }).done($.proxy(self._handleSuccess, self)).fail($.proxy(self._handleFailure, self));
            },o.delay);
        },

        /**
         * Handle a successful AJAX response.  Replaces the target element with
         * the returned content.
         */
        _handleSuccess: function(data) {
            var o = this.options,
                self = this;

            debug.log("_handleSuccess: ", "response success?", self.id, ": ", data.success);
            debug.log("_handleSuccess: ", "response data - ", self.id, ": ", data);

            if (data.success && data.html) {
                self.$element.html(data.html);
                componentMgr.process(self.$element);
                trackingMgr.initClickTracking(self.$element);

                if (self.$element.find('.medusa-rightrail').length > 0) {

                    self._initStickyMedusa();

                    debug.log("fire impression");
                    if (typeof dwMgr !== 'undefined') {
                        dwMgr.trackEvent({
                            mapp: 'medusa_app',
                            comptyp: 'spot',
                            comp: 'ucwc',
                            riaevent: 'impression',
                            objtyp: 'medusa',
                            objnm: '',
                            s7: ''
                        });
                    }
                }
            } else {
                this._handleFailure(data);
            }
        },
        _initStickyMedusa: function() {
          var self = this;
          if(self.isSticky) {
            self.$element.wrap('<div class="sticky-wrapper sticky-medusa"></div>')
            require(['components/sticky-mpu'], function() {
                self.$element.stickyMpu();
            });
          }
        }
    });

});


define('components/header-search',[
    'jquery',
    'version!fly/managers/debug',
    'managers/tealium',
    'managers/tracking',
    'version!fly/components/base'
], function (
    $,
    debug,
    tagMgr,
    trackingMgr
) {
    debug = debug.init('headerSearch');

    /**
     * Header and navigation manipulations
     *
     * @class $.fly.headerSearch
     * @extends $.fly.base
     * @constructor
     */
    $.widget('fly.headerSearch', $.fly.base, {

        // Options
        options: {

        },

        /**
         * Initialize header search js
         *
         * @private
         * @method _create
         */
        _create: function() {
            this._setup();

            debug.log('headerSearch init');

            this.$overlayIconDesktop = this.$element.find('.smart-search-icon.smart-search-desktop');
            this.$overlayIconMobile = this.$element.find('.smart-search-icon.smart-search-mobile');
            this.$smartSearchDesktop = this.$element.find('.smart-search.smart-search-desktop');
            this.$smartSearchMobile = this.$element.find('.smart-search.smart-search-mobile');
            this.$input = this.$element.find('.smart-search-input');
            this.$close = this.$element.find('.smart-search-close');
            this.$resultsContainer = this.$element.find('.smart-search-results .smart-search-results-list');

            this._setupEvents();
        },

        /**
         * Setup Events
         *
         * @private
         * @method _setupEvents
         */
        _setupEvents: function() {
            var self = this;

            searchOpen = false;
            $lastFocusedInput = null;

            if ($('.navListMobile').is(':visible')) {
                this._setupSmartSearchHeight();
            }

            // Open search overlay
            this.$overlayIconDesktop.add(this.$overlayIconMobile).click(function() {
                self._handleClick();
            });

            // Close search overlay
            this.$close.on('click', function() {
                self._handleClose();
            });

            // Handle user input
            this.$input.on('input propertychange', function(e) {

                var fieldValue = self.$input.val();

                if (fieldValue.length > 0) {
                    self.$input.addClass('active-input');
                } else {
                    self.$input.removeClass('active-input');
                }

                setTimeout(function(){  // wait for a bit in case user is still typing

                    if(fieldValue != self.$input.val()) {
                        // cancel if field value has changed
                        debug.log('User typing');
                        return;
                    }
                    self._updateResults();

                }, 250);


                // Track search when user submits query using the enter key
                if (e.keyCode === 13) {
                    trackingMgr.trackEvent('moduleClick', {'moduleInfo': 'header-search-overlay'});
                }
            });

            // Get last text box that had focus
            $('.smart-search-input').focus(function() {
                $lastFocusedInput = $(this);
            });

            // Swtich between smart searches when going from landscape to portrait
            // on tablet or when resizing browser
            $(window).on('resize', function() {
                if ($lastFocusedInput) {
                    $('.smart-search-input').val($lastFocusedInput.val());
                }

                if (self.$input.val().length > 0) {
                    self.$input.addClass('active-input');
                } else {
                    self.$input.removeClass('active-input');
                }

                if ($('.navListMobile').is(':visible')) {
                    self._setupSmartSearchHeight();

                    if (searchOpen) {
                        $('html').addClass('search-open');

                        // Fix for background scrolling in mobile safari
                        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
                            $('html').css('position', 'fixed');
                        }

                        $('.search-small').addClass('active');

                        self.$smartSearchMobile.addClass('active');
                    } else {
                        self.hideOverlay();
                        self.$overlayIconDesktop.removeClass('active');

                        self.$smartSearchDesktop.removeClass('active');
                    }
                } else {
                    $('html').removeClass('search-open');
                    $('html').css('position', 'initial');

                    if (searchOpen) {
                        self.showOverlay();
                        self.$overlayIconDesktop.addClass('active');

                        self.$smartSearchDesktop.addClass('active');
                    } else {
                        $('.search-small').removeClass('active');

                        self.$smartSearchMobile.removeClass('active');
                    }
                }
            });
        },

        /**
         * Handle click
         *
         * @private
         * @method _handleClick
         */
        _handleClick: function() {
            if (!(this.$overlayIconDesktop.hasClass('active') || $('.search-small').hasClass('active'))) {
                // Trending content unit
                if ($('.smart-search-results .smart-search-trending-content').html().length === 0) {
                    this._setupTrendingContentUnit();
                }

                // Track open
                trackingMgr.trackEvent('moduleClick', {'moduleInfo': 'header-search'});

                searchOpen = true;

                if ($('.navListMobile').is(':visible')) {
                    $('html').addClass('search-open');

                    // Fix for background scrolling in mobile safari
                    if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
                        $('html').css('position', 'fixed');
                    }

                    $('.search-small').addClass('active');
                    this.$smartSearchMobile.addClass('active');
                } else {
                    this.showOverlay();
                    this.$overlayIconDesktop.addClass('active');
                    this.$smartSearchDesktop.addClass('active');
                }

                this.$input.focus();
            } else {
                this._handleClose();
            }
        },

        /**
         * Handle close
         *
         * @private
         * @method _handleClose
         */
        _handleClose: function() {
            // Track close
            trackingMgr.trackEvent('moduleClick', {'moduleInfo': 'search-overlay-close'});

            searchOpen = false;

            if ($('.navListMobile').is(':visible')) {
                this.$smartSearchMobile.removeClass('active');
            } else {
                this.hideOverlay();
                this.$smartSearchDesktop.removeClass('active');
            }

            this.$overlayIconDesktop.removeClass('active');
            $('.search-small').removeClass('active');
            $('html').removeClass('search-open');
            $('html').css('position', 'initial');
        },

        /**
         * Show the body overlay
         */
        showOverlay: function() {
            var $div = $('<div id="smart-search-overlay"></div>'),
                self = this;

            if (!($('#smart-search-overlay').length)) {
                $('body').append($div);
            }

            // Close the tab when the overlay is clicked
            $div.on('click', function() {
                self._handleClose();
            });
        },

        /**
         * Hide the body overlay
         */
        hideOverlay: function() {
            $('#smart-search-overlay').remove();
        },

        /**
         * Fetch new results or hide them if search field is empty
         *
         * @private
         * #method _updateResults
         */
        _updateResults: function() {
            var self = this;

            var fieldValue = this.$input.val();

            debug.log('checking field value');

            if (fieldValue.length > 0) {
                $('.smart-search-button .search-button').addClass('hide');
                $('.smart-search-button').addClass('active-input-button');
                $('.smart-search-button .go-button').removeClass('hide');

                $.ajax({
                    url: '/search/smart-search/xhr/',
                    data: {q: fieldValue},
                    type: 'GET',
                    dataType: 'json',
                    success: (function(response) {
                        if (!response.error) {
                            $('.smart-search-trending-content').addClass('hide');
                            self.$resultsContainer.html(response.html).removeClass('hide');
                            trackingMgr.initClickTracking(self.$resultsContainer);
                        }
                    }),
                    error: (function() {
                        debug.log("Error fetching smart search results");
                    })
                });
            } else {
                $('.smart-search-button .search-button').removeClass('hide');
                $('.smart-search-button').removeClass('active-input-button');
                $('.smart-search-trending-content').removeClass('hide');
                $('.smart-search-results .smart-search-results-list').addClass('hide');
                $('.smart-search-button .go-button').addClass('hide');
            }
        },

        /**
         * Setup trending content unit
         *
         * @private
         * #method _setupTrendingContentUnit
         */
        _setupTrendingContentUnit: function() {
            $.ajax({
                url: '/search/smart-search-trending-content/',
                type: 'GET',
                dataType: 'json',
                success: (function(response) {
                    if (!response.error) {
                        var $container = $('.smart-search-results .smart-search-trending-content');
                        $container.html(response.html);
                        trackingMgr.initClickTracking($container);
                    }
                }),
                error: (function() {
                    debug.log("Error fetching smart search trending content");
                })
            });
        },

        /**
         * Setup smart search height
         *
         * @private
         * #method _setupSmartSearchHeight
         */
        _setupSmartSearchHeight: function() {
            // Adjust height so all content can be seen
            var height = ($(window).height() - $('.container-header').height() - $('.search-small .smart-search-close.smart-search-mobile').outerHeight()) + 33;

            $('.smart-search.smart-search-mobile').css('height', height);
        }
    });
});
define('components/header-nav',[
    'jquery',
    'version!fly/managers/debug',
    'managers/page-vars',
    'version!fly/components/base'
], function(
    $,
    debug,
    pageVars
) {
    debug = debug.init('headerNav');

    /**
     * Header and navigation manipulations
     *
     * @class $.fly.headerNav
     * @extends $.fly.base
     * @constructor
     */
    $.widget('fly.headerNav', $.fly.base, {

        // Options
        options: {
            hidingNavScrollThreshold: 150,
            hidingNavSelector: '.page-header .fixation',
            hidingNavClass: 'hidden',
            headerContainerSelector: 'header.page-header'
            // None
        },
        initialised: false,

        /**
         * Initialize header js
         *
         * @private
         * @method _create
         */
        _create: function() {
            if (this.initialised) return;

            this.initialised = true;

            this._setup();

            var self = this,
                o = this.options;

            this.window = $(window);
            $headerContainer = $(o.headerContainerSelector);

            // Execute on load
            this._checkWidth();

            // Bind event listener
            this.window.resize(function() { self._checkWidth(); });

            // init nav hiding on mobile
            if (pageVars.tracking.data.deviceType != 'desktop') {
                var $window = $(window),
                    $html = $('html'),
                    lastScrollTop = $window.scrollTop(),
                    $fixedNav = $(o.hidingNavSelector),
                    navHidden = false,
                    navFixed = false,
                    navYPosition = this.getNavPosition(),
                    navAdHeight = 0;

                function onScroll(event) {
                    if (!$html.hasClass('search-open')) {
                        var scrollTop = $window.scrollTop();

                        // return unless scroll position has changed enough and not near the top of the page
                        if (Math.abs(scrollTop - lastScrollTop) < o.hidingNavScrollThreshold && scrollTop > o.hidingNavScrollThreshold) return;

                        // unhide if nav hidden and scrolled up
                        if (navHidden && scrollTop < lastScrollTop) {
                            $fixedNav.removeClass(o.hidingNavClass);
                            navHidden = false;
                        }
                        // hide if nav not hidden, not near the top and scrolled down
                        if (!navHidden && scrollTop > o.hidingNavScrollThreshold && scrollTop > lastScrollTop) {
                            $fixedNav.addClass(o.hidingNavClass);
                            navHidden = true;
                        }

                        if (scrollTop > navYPosition && !navFixed) {
                            $fixedNav.addClass('fixed');
                            navYPosition = self.getNavPosition();
                            navFixed = true;
                        }
                        if (scrollTop <= navYPosition && navFixed) {
                            $fixedNav.removeClass('fixed');
                            navYPosition = self.getNavPosition();
                            navFixed = false;
                        }

                        var newNavAdHeight = navAdHeight;
                        if(!navHidden && navFixed) {
                            var $navAdIFrame = $('.ad-nav-ad iframe');
                            if($navAdIFrame.length > 0) {
                                newNavAdHeight = $navAdIFrame.height();
                            }
                        } else {
                            newNavAdHeight = 0;
                        }
                        if(newNavAdHeight != navAdHeight) {
                            $fixedNav.css({top: newNavAdHeight + 'px'});
                            navAdHeight = newNavAdHeight;
                        }

                        lastScrollTop = scrollTop;
                    }
                }
                var optionParam = pageVars.passiveEventsSupported ? {passive: true} : false;
                window.addEventListener('scroll', onScroll, optionParam);
            }
        },

        /**
         * Get position of header
         *
         * @method getNavPosition
         */
        getNavPosition: function() {
            return $headerContainer.length > 0 ? $headerContainer.offset().top : 0;
        },

        /**
         * Manipulate navigation items
         *
         * @private
         * @method _create
         */
        _checkWidth: function()  {
            var windowsize = this.window.width(),
                hasSectionLinks = $('.sectionLinks').is(':visible');

            if (windowsize <= 1310 && windowsize > 1200 && hasSectionLinks) {
                // hide first two links
                this.element.find( "ul.navList > li.alpha" ).insertBefore( "li.alphaDrop" );
                this.element.find( "ul.navList > li.beta" ).insertAfter( "ul.menu-topics > li.alpha" );
            } else if (windowsize <= 1200 && windowsize > 1060 && hasSectionLinks) {
                // hide first four links
                this.element.find( "ul.navList > li.alpha" ).insertBefore( "li.alphaDrop" );
                this.element.find( "ul.navList > li.beta" ).insertAfter( "ul.menu-topics > li.alpha" );
                this.element.find( "ul.navList > li.gamma" ).insertAfter( "ul.menu-topics > li.beta" );
                this.element.find( "ul.navList > li.delta" ).insertAfter( "ul.menu-topics > li.gamma" );
            } else if (windowsize <= 1060 && windowsize > 1023 && hasSectionLinks) {
                // hide all links
                this.element.find( "ul.navList > li.alpha" ).insertBefore( "li.alphaDrop" );
                this.element.find( "ul.navList > li.beta" ).insertAfter( "ul.menu-topics > li.alpha" );
                this.element.find( "ul.navList > li.gamma" ).insertAfter( "ul.menu-topics > li.beta" );
                this.element.find( "ul.navList > li.delta" ).insertAfter( "ul.menu-topics > li.gamma" );
                this.element.find( "ul.navList > li.epsilon" ).insertAfter( "ul.menu-topics > li.delta" );
            } else if (windowsize <= 875 && windowsize > 767 && !hasSectionLinks) {
                // hide first two links on non-wide grid pages in tablet break point
                this.element.find( "ul.navList > li.alpha" ).insertBefore( "li.alphaDrop" );
                this.element.find( "ul.navList > li.beta" ).insertAfter( "ul.menu-topics > li.alpha" );
            } else if (windowsize > 767) {
                // show all links
                this.element.find( "ul.menu-topics > li.epsilon" ).insertBefore( "ul.navList > li.hasDrop" );
                this.element.find( "ul.menu-topics > li.delta" ).insertBefore( "ul.navList > li.epsilon" );
                this.element.find( "ul.menu-topics > li.gamma" ).insertBefore( "ul.navList > li.delta" );
                this.element.find( "ul.menu-topics > li.beta" ).insertBefore( "ul.navList > li.gamma" );
                this.element.find( "ul.menu-topics > li.alpha" ).insertBefore( "ul.navList > li.beta" );
            }
        }
    });
});

define('components/editions-1.0',[
    'jquery',
    'utils/cookie',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function ($, cookieMgr, debugMgr) {

    var debug = debugMgr.get('editions'),
        clickEventName = ($.support.touch) ? 'vclick' : 'click';

    /**
     * Set edition cookie and reload editioned site version
     *
     * @extends cbsi.base
     *
     * Example:
     *
     *      <div id="my-editions">
     *          <a data-edition="au">AU edition</a>
     *          <a data-edition="uk">UK edition</a>
     *          <a data-edition="us">US edition</a>
     *      </div>
     *
     *      $('#my-editions').editions();
     *
     */
    $.widget( 'fly.editions', $.fly.base, {
        options: {
            cookie: {
                name: 'fly_edition',
                domain: '.techrepublic.com'
            }
        },

        /**
         * Initialize
         * @constructor
         */
        _create: function() {
            var eventMap = {};

            this._setup();

            eventMap[clickEventName + ' [data-edition-set]'] = '_handleClick';
            this._on(this.$element, eventMap);
        },

        /**
         * Handle the edition click event
         *
         * @param e The click event
         * @private
         */
        _handleClick: function(e) {
            var $el = $(e.target).closest('[data-edition-set]'),
                edition = $el.data('editionSet');

            if (edition) {
                e.preventDefault();
                this.setCookie(edition);

                window.setTimeout(function() {
                    location.reload();
                }, 200);
            }
        },

        /**
         * Set the edition cookie
         *
         * @param  edition
         * @public
         */
        setCookie: function(edition) {
            var o = this.options;

            debug.log('Change edition to '+edition);

            cookieMgr.write(o.cookie.name, edition, {path: '/', domain: o.cookie.domain});
        }
    });

});


/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */

(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                    /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                    $this.trigger("appear");
                    /* if we found an image we'll load, reset the counter */
                    counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
            settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                if ($self.is("img")) {
                    $self.attr("src", settings.placeholder);
                }
            }

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {

                            var original = $self.attr("data-" + settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);

                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.attr("data-" + settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
            !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

define("libs/lazyload-1.9.3", function(){});


define('components/lazyload-images',[
    'jquery',
    'version!fly/components/base',
    'version!libs/lazyload'
], function($) {

    /**
     * Enables image lazyloading.
     *
     * @class $.fly.lazyloadImages
     * @extends $.fly.base
     * @constructor
     */
    $.widget('fly.lazyloadImages', $.fly.base, {

        // You can pass in lazyload.js option overrides
        options: {
            threshold : 200,
            skip_invisible : false
        },

        /**
         * Initialize component.
         *
         * @private
         * @method _create
         */
        _create: function() {
            this._super();
            this._setupEvents();
            this._lazyLoadImages();
        },

        /**
         * Bind lazy loading to images loaded via XHR
         *
         * @private
         * @method _setupEvents
         */
        _setupEvents: function() {
            this._on(this.$element, {
                ajaxStop: this._lazyLoadImages
            });
        },

         /**
         * Activate lazy loading in the container.
         *
         * @private
         * @method _lazyLoadImages
         */
        _lazyLoadImages: function() {
            var $images = this.$element.find("img.lazy").removeClass("lazy").addClass('loading');
            $images.load(function(e){
                $(e.currentTarget).removeClass('loading');
            });
            $images.lazyload(this.options);
        }
    });
});
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
define('libs/waypoints/jquery.waypoints-3.1.1',['jquery'], function() {
(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;

});

/**
 * Manages waypoints refreshing so that waypoints are triggered at the correct time.
 *
 * @class waypoints
 */
define('managers/waypoints',[
    'jquery',
    'version!fly/managers/debug',

    'version!libs/waypoints/jquery.waypoints',
    'version!fly/libs/jquery.throttle-debounce'
], function(
    $,
    debug
) {
    debug = debug.init('waypoints');

    // Variables
    var initialized = false;

    // Private functions
    // None

    // Public functions
    var manager = {

        /**
         * Refresh waypoints periodically.
         *
         * @public
         * @method init
         */
        init: function() {
            if(!initialized) {
                initialized = true;

                $(window).on('scroll', $.throttle(1000, function() {
                    Waypoint.refreshAll();
                    debug.log('fresh!');
                }));
            }
        }
    };

    return manager;
});
/*!
Waypoints Inview Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
define('libs/waypoints/inview-3.1.1',['jquery', 'version!libs/waypoints/jquery.waypoints'], function() {
  'use strict'

  function noop() {}

  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/shortcuts/inview */
  function Inview(options) {
    this.options = Waypoint.Adapter.extend({}, Inview.defaults, options)
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints = []
    this.createWaypoints()
  }

  /* Private */
  Inview.prototype.createWaypoints = function() {
    var configs = {
      vertical: [{
        down: 'enter',
        up: 'exited',
        offset: '100%'
      }, {
        down: 'entered',
        up: 'exit',
        offset: 'bottom-in-view'
      }, {
        down: 'exit',
        up: 'entered',
        offset: -1
      }, {
        down: 'exited',
        up: 'enter',
        offset: function() {
          return -this.adapter.outerHeight()
        }
      }],
      horizontal: [{
        right: 'enter',
        left: 'exited',
        offset: '100%'
      }, {
        right: 'entered',
        left: 'exit',
        offset: 'right-in-view'
      }, {
        right: 'exit',
        left: 'entered',
        offset: 0
      }, {
        right: 'exited',
        left: 'enter',
        offset: function() {
          return -this.adapter.outerWidth()
        }
      }]
    }

    for (var i = 0, end = configs[this.axis].length; i < end; i++) {
      var config = configs[this.axis][i]
      this.createWaypoint(config)
    }
  }

  /* Private */
  Inview.prototype.createWaypoint = function(config) {
    var self = this
    this.waypoints.push(new Waypoint({
      element: this.options.element,
      handler: (function(config) {
        return function(direction) {
          self.options[config[direction]].call(this, direction)
        }
      }(config)),
      offset: config.offset,
      horizontal: this.options.horizontal
    }))
  }

  /* Public */
  Inview.prototype.destroy = function() {
    for (var i = 0, end = this.waypoints.length; i < end; i++) {
      this.waypoints[i].destroy()
    }
    this.waypoints = []
  }

  Inview.defaults = {
    enter: noop,
    entered: noop,
    exit: noop,
    exited: noop
  }

  Waypoint.Inview = Inview

});

define('components/sticky-element',[
    'jquery',
    'version!fly/managers/debug',
    'managers/waypoints',
    'version!libs/waypoints/inview',
    'version!fly/components/base'
], function(
    $,
    debug,
    waypointsMgr
) {
    debug = debug.init('stickyElement');

    // Initialize the waypoints manager so that waypoints are refreshed periodically.
    waypointsMgr.init();

    /**
     * Stick an element to the window when it scrolls out of view.
     *
     * @class $.cnet.stickyElement
     * @extension $.fly.base
     * @constructor
     *
     * @param {string} [classFixed='fixed'] The class to apply to the sticky element when it is fixed to the window.
     * @param {string} [classHidden='hidden'] The class to apply to the placeholder element when the sticky element is not fixed to the window.
     * @param {string} [primaryEdge='top'] The edge that the sticky window stops at ('top' or 'bottom').
     */
    $.widget('fly.stickyElement', $.fly.base, {

        // Options
        options: {
            classFixed: 'fixed',
            classHidden: 'hidden',
            primaryEdge: 'top',
            classRelative: 'relative'
        },

        // Variables

        /**
         * The placeholder element for the sticky element.
         *
         * @property $placeholder
         * @type element
         * @default null
         */
        $placeholder: null,

        /**
         * The inview object that handles all the scroll events.
         *
         * @property inview
         * @type Waypoint.Inview
         * @default null
         */
        inview: null,

        /**
         * Initialize the sticky element.
         *
         * @private
         * @method _create
         */
        _create: function() {
            this._setup();
            this._setupPlaceholder();
            this._setupEvents();
        },

        /**
         * Setup a placeholder for the element so that the page layout stays the same when the element sticks to the window.
         *
         * @private
         * @method _setupPlaceholder
         */
        _setupPlaceholder: function() {
            this.$placeholder = $('<div class="sticky-element-placeholder ' + this.options.classHidden + '"></div>');
            this.$placeholder.height(this.$element.outerHeight(true));

            if (this.options.primaryEdge === 'top') {
                this.$element.before(this.$placeholder);
            } else if (this.options.primaryEdge === 'bottom') {
                this.$element.after(this.$placeholder);
            }
        },

        /**
         * Setup sticky element events.
         *
         * @private
         * @method _setupEvents
         */
        _setupEvents: function() {
            var self = this;

            this.inview = new Waypoint.Inview({
                element: this.$placeholder[0],
                entered: function(direction) {
                    if ((self.options.primaryEdge === 'top' && direction === 'up') || (self.options.primaryEdge === 'bottom' && direction === 'down')) {
                        self.$placeholder.addClass(self.options.classHidden);
                        self.$element.removeClass(self.options.classFixed);
                    }
                },
                exit: function(direction) {
                    if ((self.options.primaryEdge === 'top' && direction === 'down') || (self.options.primaryEdge === 'bottom' && direction === 'up')) {
                        self.$placeholder.removeClass(self.options.classHidden);
                        self.$element.addClass(self.options.classFixed);
                    }
            }
            });
        }
    });
});
/*
 * Medusa Replacement Component
 *
 * This file detects if adblock is present, and if so, calls the recommendationController in the fly/medusa-bundle
 * to replace the ad with a medusa spot. In addition, tracking data is set here and sent to the controller.
 *
 */

define('components/medusa-recommendation-1.0',[
    'jquery',
    'version!fly/managers/debug',
    window.trPageVars.services.dw.enabled ? 'version!fly/managers/dw-tracking' : '',
    'managers/tracking',
    'managers/page-vars',
    'version!fly/components/base'
], function ($, debugMgr, dwMgr, trackingMgr, pageVars) {
    var debug = debugMgr.init('medusaContentRecommendation');
    var pageVarTrackingData = pageVars.tracking.data;
    // Use existing upId [If already generated by medusa-async] when possible
    var upId = (typeof pageVarTrackingData.upId !== 'undefined' && pageVarTrackingData.upId > 0) ? pageVarTrackingData.upId : Math.floor(Math.random() * 1000000000);
    if (typeof pageVarTrackingData.upId === 'undefined')
        pageVarTrackingData.upId = upId;

    debug.log('upId: '+upId);
    //TODO: Ask about the namespace (i.e. fly) and make sure it's correct (saw a tr in medusa-async)
    $.widget('fly.medusaContentRecommendation', $.fly.base, {
        options: {
            promo: null,
            spot: null
        },

        /**
         * Instantiate the medusa-recommendation
         * @constructor
         */
         _create: function() {
            this._setup();
            this._adBlockerCheck();
         },

         /**
         * Calls controller to perform medusa API call for spot. Uses html from response to display spot in place of the blocked ad
         * @private
         **/
        _getMedusaContent: function(adBlockEnabled) {
            if (adBlockEnabled) {
                //Check if adblock ia present by attempting to load a file with a commonly blocked name
                var o = this.options,
                    self = this;
                var topicId = null;
                if ($.isArray(pageVarTrackingData.topicId)) {
                    topicId = pageVarTrackingData.topicId[0];
                } else if (pageVarTrackingData.topicId) {
                    topicId = pageVarTrackingData.topicId;
                }
                var url = '/medusa/recommendation/'+o.spot+'/';
                $.ajax({
                    url: url,
                    type: 'POST',
                    data: {
                        siteId: pageVarTrackingData.siteId,
                        rsid: pageVarTrackingData.rsid,
                        sl: 'en',
                        sc: pageVarTrackingData.siteEdition,
                        pagetype: pageVarTrackingData.pageType,
                        topicguid: topicId,
                        topicbrcrm: pageVarTrackingData.siteSection,
                        assetguid: pageVarTrackingData.articleId,
                        assettitle: pageVarTrackingData.articleTitle,
                        assettype: pageVarTrackingData.articleType,
                        ftag_cd: pageVarTrackingData['qp.ftag'],
                        devicetype: pageVarTrackingData.deviceType,
                        viewguid: pageVars.guid,
                        ursuserid: pageVarTrackingData.userId,
                        promo: o.promo,
                        upId: upId },
                    complete: (function() {
                    }),
                    success: (function(response) {
                        debug.log("_getMedusaContent: ", "successful ajax to /medusa/recommendation/"+o.spot, "response: ", response);
                        var $ad = self.$element;
                        if (response['success'] && response['html']){
                            debug.log("this.$element",self.$element);
                            // The sticky bottom mpu unit is blocked at the parent, so wrapping div and medusa unit must be added as a sibling to the parent instead
                            if ($ad.hasClass('mpu') && $ad.parent().hasClass("sticky-mpu-container")) {
                                $ad = $ad.parent();
                            }
                            //wrap in a <div> to maintain the order within the parent element
                            if ($ad.hasClass('leader-bottom-feature-article')) {
                                // must add 'leader-bottom-feature-article' class to wrapping div for correct styling for bottom leaderboard on feature pages
                                $ad.wrap("<div class=\"leader-bottom-feature-article\">");
                            } else if ($ad.hasClass('leader-top-feature-article')) {
                                // must add 'leader-top-feature-article' class to wrapping div for correct styling for top leaderboard on feature pages
                                $ad.wrap("<div class=\"leader-top-feature-article\">");
                            } else {
                                $ad.wrap("<div>");
                            }
                            //display html response
                            $ad.parent().append(response['html']);
                            var searchStr = 'class="'+o.spot+'"';
                            var isMedusa = new RegExp(searchStr);
                            // Check if medusa component was found
                            if (isMedusa.test(response.html)) {
                                self._setTracking();
                            }
                        } else {
                            debug.log("_getMedusaContent: ", "error within ajax to /medusa/recommendation/"+o.spot, response['error'], $ad);
                        }
                    }),
                    error: (function() {
                        debug.log("_getMedusaContent: ", "failed ajax to /medusa/recommendation/"+o.spot);
                    })
                });
            }
        },

        /**
        * Checks if existance of adblock has already been determined - if not, it does so. Does not proceed until
        * we know if adblock exists or not
        * @private
        **/
        _adBlockerCheck: function() {
            var self = this;
            var adBlockEnabled = (typeof pageVars.adBlockEnabled !== 'undefined') ? pageVars.adBlockEnabled : null;
            if (adBlockEnabled === null) {
                require(['utils/advertisement'],
                    function(){ /* File loaded */
                        pageVars.adBlockEnabled = false;
                        adBlockEnabled = false;
                        self._getMedusaContent(adBlockEnabled);
                    },
                    function(e){ /* File failed to load, adblock assumed */
                        pageVars.adBlockEnabled = true;
                        adBlockEnabled = true;
                        self._getMedusaContent(adBlockEnabled);
                    }
                );
            } else {
                self._getMedusaContent(adBlockEnabled);
            }
        },

        /**
        * Sets tracking for the replacement unit
        * @private
        **/
        _setTracking: function() {
            var self = this,
                o = this.options;
            $('.'+o.spot+' a').click(function(){ // NOTE: Assumes spot name = class of encompassing div within spot
                trackingMgr.trackEvent('moduleClick', {'moduleInfo': 'medusa-'+o.spot});
            });
            debug.log("fire impression");

            if (pageVars.services.dw.enabled) {
                dwMgr.trackEvent({
                    mapp: 'medusa_app',
                    comptyp: 'spot',
                    comp: 'ucwc',
                    riaevent: 'impression',
                    objtyp: 'medusa',
                    objnm: '',
                    s7: ''
                });
            }
        }
    });
});

define('components/simple-modal',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/components/base'
], function(
    $,
    debug
) {
    debug = debug.init('modal');

    /**
     * Creates a modal element
     *
     * @class $.tr.simpleModal
     * @extends $.fly.base
     * @constructor
     *
     * @param [title]       {string} Modal title
     * @param [description] {string} Modal description
     */
    $.widget('tr.simpleModal', $.fly.base, {

        options: {
            title: null,
            description: null
        },

        $modal: null,

        /**
         * Instantiate modal
         *
         * @public
         */
        _create: function() {
            var o = this.options;

            this._setup();

            this._setupPageEvents();
        },

        /**
         * Setup page events
         *
         * @private
         * @method _setupPageEvents
         */
        _setupPageEvents: function() {
            var self = this;

            this.$element.on('click', function() {
                self.showModal();
            });
        },

        /**
         * Get and display modal
         *
         * @public
         * @method showModal
         */
        showModal: function() {
            var o = this.options,
                self = this;

            $.ajax({
                data: {
                    title: o.title,
                    description: o.description,
                },
                dataType: 'json',
                type: 'POST',
                url: '/modal/xhr/'
            }).done(function (response) {
                debug.log('Show modal');

                // Don't scroll background
                $('html').css('overflow', 'hidden');
                $('body').addClass('noScroll');

                // Inject the modal into the page
                self.$modal = $(response.html).appendTo($('body')).addClass('start').show();

                self._setupModalEvents();
            }).fail(function() {
                debug.log('Request for modal failed');
            });
        },

        /**
         * Setup modal events
         *
         * @private
         * @method _setupModalEvents
         */
        _setupModalEvents: function() {
            var self = this;

            // Setup close button
            this.$modal.find('[data-action="close"]').on('click', function (event) {
                self.close();
            });
        },

        /**
         * Close modal
         *
         * @public
         * @method close
         */
        close: function() {
            debug.log('Modal close');

            $('html').css('overflow', '');
            $('body').removeClass('noScroll');

            this.$modal.remove();
        }
    });
});
define('components/newsletter-subscription-1.0',[
	'jquery',
	'version!fly/managers/debug',
    'managers/tracking',
    'managers/user',
    'components/simple-modal',
	'version!fly/components/base'
], function ($, debugMgr, trackingMgr, user) {
	var	clickEventName = ($.support.touch) ? 'vclick' : 'click',
		debug = debugMgr.init('newsletterSubscription');

	$.widget( 'fly.newsletterSubscription', $.fly.base, {
        options: {
            isAbTest: false
        },

		/**
		 * Instantiate Component
		 * @constructor
		 * public
		 */
		_create: function() {
			this._setup();
			this._setupEvents();
		},

		_setupEvents: function() {
			var eventMap = {};

			// Attach click event to any element that has the data-{*}-id attr
			eventMap[clickEventName+' [data-newsletter-id]'] = '_handleClick';
			eventMap[clickEventName+' [data-sample-id]'] = '_handleClickSample';

			this._on(this.$element, eventMap);

            if (window.location.hash) {
                var ecode = window.location.hash.replace('#', ''),
                    $subButton = this.$element.find('#nls'+ecode);

                if($subButton.length > 0) {
                    if ($subButton.hasClass('btn-primary')) {
                        $subButton.removeClass('btn-primary').attr('data-newsletter-type', 'unsubs').text('Unsubscribe');
                    }
                    history.pushState('', document.title, window.location.pathname + window.location.search);
                }
            }
		},

		_handleClickSample: function(e) {
			e.preventDefault(); // prevent default behavior

			var $el = $(e.currentTarget); // specific element that has been clicked

			this.nsEle = $el; // specific element
			this.nsId = $el.attr('data-sample-id'); // newsletter id

			$('#iframe-'+this.nsId).attr('src', 'http://nls.techrepublic.com/pageservices/viewOnlineNewsletter.sc?list_id='+this.nsId);
		},


        /**
         * Determine if user is logged in and handle subscription action from there
         *
         * @private
         */
        _handleClick: function(e) {
            e.preventDefault();

            var self = this;
            var $currentTarget = $(e.currentTarget);

            user.hasAccess({
                appId: 312,
                position: $currentTarget.data('authentication-position'),
                nextAction: function() {
                    self._handleSubscription($currentTarget);
                    return false;
                }
            });
        },

		/**
		 * jQuery ajax call to sub/unsub depending on the current state of subscription
         * find method used to cater for multiple buttons that may exist for the same newsletter id - e.g. 'keep up' component
         *
		 * @private
		 */
		_handleSubscription: function($currentTarget) {
            var self = this,
                id = $currentTarget.attr('data-newsletter-id'),
                position = $currentTarget.attr('data-newsletter-position'),
                module = $currentTarget.attr('data-newsletter-module'),
                nls = this.$element.find("[data-newsletter-id='" + id + "']"),
                action;

            if (nls.length > 0) {
                if (this.options.isAbTest) {
                    nls.prop('disabled', true);
                } else {
                    nls.addClass('loading').prop('disabled', true);
                }
            }

            $.when(this._getResponse($currentTarget), this._promise($currentTarget)).then(function(responseReturn, promiseReturn) {
                var $buttons = self.$element.find("[data-newsletter-id='" + promiseReturn.nsId + "']");
                $buttons.removeClass('loading').prop('disabled', false);

                if (responseReturn[0].status == 'OK' && responseReturn[0].error === false) {
                    if (promiseReturn.action == 'subs') {
                        $buttons.removeClass('btn-primary').attr('data-newsletter-type', 'unsubs').text('Unsubscribe');
                        action = 'subscribe';
                    } else {
                        if (self.options.isAbTest) {
                            $buttons.attr('data-newsletter-type', 'subs').text('Subscribe');
                        } else {
                            $buttons.addClass('btn-primary').attr('data-newsletter-type', 'subs').text('Subscribe');
                        }
                        action = 'unsubscribe';
                    }

                    self._trigger('clicked', null, {
                        'buttons': $buttons
                    });
                    self._trigger(action+'Clicked', null, {
                        'buttons': $buttons,
                        'newsletterId': id,
                        'newsletterPos': position
                    });
                    if(module) trackingMgr.trackEvent('moduleClick', {'moduleInfo': module + '-' + action });

                } else {
                    debug.log('Your request could not be processed. Please try again.');

                    self._handleSubscriptionError(responseReturn[0]);
                }
            });
        },

        _getResponse: function($currentTarget) {
            var o = this.options;

			this.nsId = $currentTarget.attr('data-newsletter-id'); // newsletter id
			this.nsType = $currentTarget.attr('data-newsletter-type'); //whether state when clicked is sub or unsub
			this.nsUrl = (this.nsType == 'subs' ? o.urlSubs : o.urlUnsubs) + this.nsId; //sub/unsub link

            return $.ajax({
                timeout: 15000,
                type: 'GET',
                dataType: 'json',
                url: this.nsUrl
			})
            .fail(function(jqXHR, textStatus){
                if (textStatus == 'timeout') {
                    debug.log('Request timeout. Try again');
                    $currentTarget.removeClass('loading').prop('disabled', false);
                }
            });
        },

        _promise: function($currentTarget) {
            var dfd = $.Deferred(),
                ele = {
                    nsId: $currentTarget.attr('data-newsletter-id'),
                    action: $currentTarget.attr('data-newsletter-type')
                };

            dfd.resolve(ele);

            return dfd.promise();
        },

        /**
         * Handle update subscription error
         *
         * @param data The response object
         * @private
         */
        _handleSubscriptionError: function(data) {
            var modal = $.tr.simpleModal({
                title: 'Error',
                description: data.error
            });

            modal.showModal();
        }
  });
});

/*!
Waypoints Sticky Element Shortcut - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
define('libs/waypoints/sticky-3.1.1',['jquery', 'version!libs/waypoints/jquery.waypoints'], function() {
  'use strict'

  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
    this.element = this.options.element
    this.$element = $(this.element)
    this.createWrapper()
    this.createWaypoint()
  }

  /* Private */
  Sticky.prototype.createWaypoint = function() {
    var originalHandler = this.options.handler

    this.waypoint = new Waypoint($.extend({}, this.options, {
      element: this.wrapper,
      handler: $.proxy(function(direction) {
        var shouldBeStuck = this.options.direction.indexOf(direction) > -1
        var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

        this.$wrapper.height(wrapperHeight)
        this.$element.toggleClass(this.options.stuckClass, shouldBeStuck)

        if (originalHandler) {
          originalHandler.call(this, direction)
        }
      }, this)
    }))
  }

  /* Private */
  Sticky.prototype.createWrapper = function() {
    this.$element.wrap(this.options.wrapper)
    this.$wrapper = this.$element.parent()
    this.wrapper = this.$wrapper[0]
  }

  /* Public */
  Sticky.prototype.destroy = function() {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy()
      this.$element.removeClass(this.options.stuckClass).unwrap()
    }
  }

  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck',
    direction: 'down right'
  }

  Waypoint.Sticky = Sticky
});

define('main',[
    'jquery',
    'managers/components',
    'managers/page-vars',
    'managers/image-resolution',
    'version!fly/utils/guid',
    'managers/tealium',
    'version!fly/managers/debug',
    'managers/user',
    window.trPageVars.tracking.data.testName === 'save_content' && window.trPageVars.tracking.data.testGroup !== 'control' ? 'managers/save-content' : '',
    // Add all common components loading on all pages
    'version!components/load-async',
    'version!components/medusa-async',
    'components/header-search',
    'components/header-nav',
    'version!components/editions',
    'version!libs/lazyload',
    'components/lazyload-images',
    'components/sticky-element',
    'version!components/medusa-recommendation',
    'version!components/newsletter-subscription',
    'managers/waypoints',
    'version!libs/waypoints/sticky',
    'managers/tracking',
    'optional'
],
function($, componentMgr, pageVars, imgResMgr, guid, tagMgr, debugMgr) {
    var debug = debugMgr.get('main');
    var $document = $(document);

    // Do logic here that can happen before document.ready

    var bodyData = window.trPageVars;


    $(document).ready(function() {
        var $body = $('body'),
            trackingData = bodyData.tracking,
            viewGuid = window.__tealium_data_guid,
            userData = bodyData.user;

        //Set regId for global usage
        userCookieValues = JSON.parse($.cookie('fly_user'));
        if (userCookieValues && userCookieValues.length !== 0) {
            userData.regId = (userCookieValues.regId) ? userCookieValues.regId : '';
        }

        //Set edition for global usage
        editionCookieValue = $.cookie('fly_edition');
        trackingData.data.edition = (editionCookieValue && editionCookieValue.length !== 0) ? editionCookieValue : '';

        // Track ad block detection
        tagMgr._trackSourcePoint();

        // page level tracking is disabled for iframe example registration, login page
        if (trackingData.enabled === true) {
            tagMgr.init(trackingData.data);
        }

        // expose tealium js manager and tracking data
        $tealium = tagMgr;

        // Image Resolution
        //--------------------------
        imgResMgr.init(bodyData.imgRes);

        // Components
        //--------------------------
        // have component manager init all components in body
        componentMgr.process($body);

        //save viewguid on cookie
        $.cookie("viewGuid", viewGuid, {
            path : '/'
        });

        // initialise sticky header now if page doesn't have a skybox ad slot, otherwise it will be initialised in the nav ad callback
        if($('.ad-nav-ad').length == 0) {
            $('#mainNav').stickyElement();
        }
    });
});
/* global disqus_config: true */
define('fly/managers/disqus-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/url-helper'
], function(
    $,
    debug,
    urlHelper
) {
    debug = debug.init('disqus');

    var initialized = false;
    var options = {
        onInit: function() {},
        disqusId: 'disqus_thread',
        disqusSelector: '[data-social="disqus"]',
        enabled: false,
        shortName: null,
        disqusConfig: {
            apiPublicKey: null,
            enableScrollContainer: true,
            sso: {
                // name
                // button
                // icon
                // authLoginUrl
                // authLogoutUrl
                // url
                // logout
                // width
                // height
                // remoteAuthS3
            },
            onNewComment: null
        }
    };
    var $disqusContainer;

    return {
        /**
         * Initialize Disqus.
         *
         * @public
         * @method init
         *
         * @param optionsData
         * @param isLoggedIn
         */
        init: function(optionsData, isLoggedIn) {
            $.extend(true, options, optionsData);

            if (options.enabled) {
                if (isLoggedIn) {
                    this.fetchSso(function() {
                        initialized = true;
                        options.onInit();

                        if ($(options.disqusSelector).data('loadOnInit')) {
                            this.parse();
                        }
                    }.bind(this));
                } else {
                    initialized = true;
                    options.onInit();

                    if ($(options.disqusSelector).data('loadOnInit')) {
                        this.parse();
                    }
                }
            }
        },

        /**
         * Parse the page for Disqus buttons and initialize them.
         *
         * @public
         * @method parse
         *
         * @param [$container] {element} If provided, limits parsing to html inside the container element.
         */
        parse: function($container) {
            $disqusContainer = $container ? $container.find(options.disqusSelector) : $(options.disqusSelector);

            // Remove all Disqus containers on the page because we're about to append a new one
            $('#'+options.disqusId).remove();

            // Create a new #disqus_thread container
            $disqusContainer.append('<div id="' + options.disqusId +'"></div>');

            // If callback defined, let them know we have a new disqus thread to initialize
            if (options.newThreadCallback) {
                options.newThreadCallback();
            }

            this.reset();
        },

        /**
         * Reset Disqus on page.
         */
        reset: function() {
            if(this.isInitialized()) {
                this._loadDisqus();
            } else {
                options.onInit = function() {
                    this._loadDisqus();
                }.bind(this);
            }
        },

        /**
         * Call external Disqus functions to load/reload Disqus on the page.
         *
         * @private
         */
        _loadDisqus: function() {
            var id = $disqusContainer.data('id');
            var title = $disqusContainer.data('title');
            var url = $disqusContainer.data('url');

            // Ensures that the URL contains a path when Disqus is loaded to prevent thread collisions
            if (!url || urlHelper.getPath(url).length < 2) {
                return;
            }

            if (window.DISQUS) {
                window.DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = id;
                        this.page.url = url;
                        this.page.title = title;
                        // might be a logout without page reload
                        if (options.disqusConfig.sso.remoteAuthS3) {
                            this.page.remote_auth_s3 = options.disqusConfig.sso.remoteAuthS3;
                        }
                    }
                });
            } else {
                disqus_config = function () {
                    this.page.api_key = options.disqusConfig.apiPublicKey;
                    this.experiment.enable_scroll_container = options.disqusConfig.enableScrollContainer;
                    this.page.identifier = id;
                    this.page.url = url;
                    this.page.title = title;
                    if (options.disqusConfig.sso.remoteAuthS3) {
                        this.page.remote_auth_s3 = options.disqusConfig.sso.remoteAuthS3;
                    }
                    this.sso = {
                        name:   options.disqusConfig.sso.name,
                        button: options.disqusConfig.sso.button,
                        icon:   options.disqusConfig.sso.icon,
                        url:    options.disqusConfig.sso.url,
                        logout: options.disqusConfig.sso.logout,
                        width:  options.disqusConfig.sso.width,
                        height: options.disqusConfig.sso.height
                    };
                    if (options.disqusConfig.sso.profile_url) {
                        this.sso.profile_url = options.disqusConfig.sso.profile_url;
                    }
                    this.callbacks.onNewComment = options.disqusConfig.onNewComment;
                };

                require(['//' + options.shortname + '.disqus.com/embed.js']);
            }
        },

        /**
         * Fetch encrypted SSO hash data from Fly.
         *
         * @param {Function} callback Callback to execute once SSO data is fetched.
         * @param {Boolean}  isLogout Whether SSO request is for login or logout.
         */
        fetchSso: function(callback, isLogout) {
            callback = callback || function(remoteAuthS3) {};
            isLogout = isLogout || false;

            $.post(isLogout ? options.disqusConfig.sso.authLogoutUrl : options.disqusConfig.sso.authLoginUrl, {}).done(function(response) {
                if (response.remoteAuthS3) {
                    options.disqusConfig.sso.remoteAuthS3 = response.remoteAuthS3;
                    callback(response.remoteAuthS3);
                } else {
                    callback(null);
                }
            }.bind(this));
        },

        /**
         * Check if Disqus has been initialized.
         *
         * @return {Boolean} True if Disqus has been initialized; false, otherwise.
         */
        isInitialized: function() {
            return initialized;
        }
    };
});

/* global disqus_config: true */
define('managers/disqus',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/managers/disqus',
    'managers/page-vars',
    'managers/tealium'
], function(
    $,
    debug,
    disqusMgr,
    pageVars,
    tealiumMgr
) {
    var debug = debug.init('disqus');
    var disqusInitialised = false;

    if (pageVars.services.disqus.enabled) {
        var options = {
            onInit: function() {},
            enabled: true,
            shortname: pageVars.disqus.shortname,
            shortName: pageVars.disqus.shortname,
            disqusConfig: {
                apiPublicKey: pageVars.disqus.publicKey,
                enableScrollContainer: true,
                sso: {
                    name:          pageVars.disqus.sso.name,
                    button:        pageVars.disqus.sso.button,
                    icon:          pageVars.disqus.sso.icon,
                    authLoginUrl:  pageVars.disqus.sso.authLoginUrl,
                    authLogoutUrl: pageVars.disqus.sso.authLogoutUrl,
                    url:           pageVars.disqus.sso.loginUrl,
                    logout:        pageVars.disqus.sso.logoutUrl,
                    width:        '800',
                    height:       '400',
                    remoteAuthS3:  null
                },
                onNewComment: [function(comment) {
                    var trackingData = pageVars.tracking.data;
                    tealiumMgr.trackComment('trackSubmitComment', {
                        _riaEvent: 'create',
                        _riaEventT: 'comment',
                        _riaWd: 'submitbutton',
                        siteSection: trackingData.siteSection,
                        userId: pageVars.user.regId,
                        pageNum: trackingData.pageNum,
                        _pageViewGuid: pageVars.guid,
                        _dwAnonId: utag_data._dwCookieId
                    }, 'submitComment');
                }]
            }
        };

        return $.extend(true, {}, disqusMgr, {
            /**
             * Initialize Disqus.
             *
             * @public
             * @method init
             */
            init: function () {
                if(disqusInitialised) return;
                disqusInitialised = true;
                window.TRFunctions.gdprConsentCallback("script_disqus", function() {
                    var isLoggedIn = false;
                    if ($.cookie('fly_user')) {
                        isLoggedIn = true;
                    }
                    disqusMgr.init(options, isLoggedIn);
                }, {}, 'functional');
            }
        });
    }

});
/* global disqus_shortname: true */
define('components/disqus-count',[
    'jquery',
    'managers/page-vars',
    'version!fly/managers/debug',
    window.trPageVars.services.disqus.enabled ? 'version!fly/components/disqus-count' : ''
], function(
    $,
    pageVars,
    debug
) {
    debug = debug.init('disqusCount');

     if (pageVars.services.disqus.enabled) {
        /**
         * Load Disqus comment counts onto the page.
         *
         * @class $.tr.disqusCount
         * @extends $.fly.disqusCount
         * @constructor
         */
        $.widget('tr.disqusCount', $.fly.disqusCount, {
            options: {
                shortname: pageVars.disqus.shortname,
                disqusIdentifier: null,
                disqusUrl: null
            },

            // Script DOM ID constant for Disqus
            disqusScriptId: 'dsq-count-scr',

            /**
             * Initialize Disqus counts
             *
             * @private
             * @method _create
             */
            _create: function() {
                var self = this;

                window.TRFunctions.gdprConsentCallback("script_disqus_count", function() {
                    self._super();
                }, {}, 'functional');
            }
        });
    }
});

define('fly/components/social-links-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/string-vars',
    'version!fly/components/base'
], function($, debugMgr, stringVars) {

    var clickEventName = ($.support.touch) ? 'vclick' : 'click', // support touch events
        debug = debugMgr.init('socialLinks'); // initialize debugger

    /**
     * Allows for a group of social media links to be opened in a window pop
     *
     * @extends cbsi.base
     * @extends utils/string-helper
     * @extends managers/debug
     *
     * Examples:
     *
     *      $(selector).socialLinks();
     *
     * Markup:
     *      <div class="social-links" data-component="socialLinks" data-social-links-options="{}">
                <a data-popup="facebook">Facebook</a></li>
                <a data-link="email">Email</a></li>
     *      </div>
     *
     *
     */
    $.widget( 'fly.socialLinks', $.fly.base, {

        options: {
            title: '',
            url: '',
            description: '',
            shortUrl: '',
            via: '',
            //site specfic data
            data: {
                //related object
            },
            popupWidth: 620, // {Int} Width of popup window
            popupHeight: 440, // {Int} Height of popup window
            location: null // {String} Location of the component - used to differentiate multiple instances on the same page
        },

        // Global vars
        isLoading: false,

        // Identifiers for link functionality popupId for social links, linkId for site services e.g email and print
        popupId: 'popup',
        linkId: 'link',

        /**
         * Link url configuration
         */
        links: {
            facebook: 'http://www.facebook.com/sharer.php?u={url}&t={title}',
            reddit: 'http://reddit.com/submit?url={url}&title={title}',
            digg: 'http://digg.com/submit?url={url}&title={title}',
            stumbleupon: 'http://www.stumbleupon.com/submit?url={url}',
            twitter: function(data) {
                var link = 'https://twitter.com/intent/tweet?text={title}&related={related}';
                link += ((data.shortUrl) ? '&url={shortUrl}&counturl={url}' : '&url={url}');
                link += ((data.via) ? '&via={via}' : '');
                return link;
            },
            delicious: 'http://del.icio.us/post?url={url}&title={title}',
            googleplus: 'https://plus.google.com/share?url={url}&utm_content={title}&utm_campaign=&utm_medium=share%2Bbutton',
            linkedin: 'http://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}',
            pinterest: 'http://pinterest.com/pin/create/button/?url={url}&media={media}&description={description}',
            tumblr: 'http://www.tumblr.com/share/link?url={url}&description={description}',
            whatsapp: function(data) {
                var devices = {
                    ios: {
                        match: /(ipad|iphone|ipod)/,
                        store: "https://itunes.apple.com/app/whatsapp-messenger/id310633997",
                        url: "whatsapp://send?text={title}%20{url}"
                    },
                    androidChrome: { // make sure this is before "android" due to "android" being in both strings.
                        match: "androidChrome",
                        store: "market://details?id=com.whatsapp",
                        url: "intent://send?text={title}%20{url}#Intent;package=com.whatsapp;scheme=whatsapp;end;"
                    },
                    android: {
                        match: "android",
                        store: "market://details?id=com.whatsapp",
                        url: "whatsapp://send?text={title}%20{url}"
                    }
                };

                var ua = window.navigator.userAgent.toLowerCase();
                for (var device in devices) {
                     device = devices[device];

                     if (ua.match(device.match)) {

                        // we need to compile the link internally here since we'll use an iframe to embed or window.open 
                        // instead of returning like normal since we need to set a timeout for the backup link to store
                        device.url = stringVars.compile(device.url, data, ['urlencode']);
                        
                        var iframe = $('<iframe />').css('display', 'none').attr('src', device.url).appendTo('body');

                        setTimeout( function()
                        {
                            // open this in a new window
                            window.open(device.store, '_blank');

                            // cleanup
                            iframe.remove();
                        }, 300);
                        return false;
                    }
                }
            },
            print: function() {
                window.print();
                return false;
            },
            email: 'mailto:?subject={title}&body={url}%0D%0D{description}'

        },

        /**
         * Instantiate socialLink
         *
         * @public
         */
        _create: function() {
            var o = this.options,
                eventMapClick = {};

            this._setup();

            // Events
            eventMapClick[clickEventName+' [data-'+this.popupId+']'] = '_handlePopup';
            eventMapClick[clickEventName+' [data-'+this.linkId+']'] = '_handleLink';

            this._on(this.$element, eventMapClick);
        },

        /**
         * Handle the click event for popup action
         *
         * @param e {Event Object}
         *
         * @private
         */
        _handlePopup: function(e) {
            var $el = $(e.currentTarget), //get current target to prevent confusion on what's clicked
                name = $el.data(this.popupId);
            e.preventDefault();

            this.$el = $el;

            this._setupClickEvent(e, {'el':$el, 'name':name});

            this.popup(e, name);
        },

        /**
         * Handle the click event for link action
         *
         * @param e {Event Object}
         *
         * @private
         */
        _handleLink: function(e) {
            var $el = $(e.currentTarget), //get current target to prevent confusion on what's clicked
                name = $el.data(this.linkId);
            e.preventDefault();

            this.$el = $el;

            this._setupClickEvent(e, {'el':$el, 'name':name});

            this.link(e, name);
        },

        /**
         * Get the compiled url for a link
         *
         * @param name {string} The link name
         *
         * @private
         */
        _getLink: function(name) {
            var link = this.links[name.toLowerCase()],
                data = this._getLinkData();

            if ($.isFunction(link)) {
                link = link(data);
            }

            link = stringVars.compile(link, data, ['urlencode']);

            return link;
        },

        /**
         * Set your own links
         *
         * @param name - name of the social site
         * @param hash - url formula for social sharing
         *
         * @public
         */
        setLink: function(name, hash) {
            this.links[name] = hash;
        },

        /**
         * Collect all data needed to build link
         *
         * @private
         */
        _getLinkData: function() {
            var o = this.options;

            return $.extend({
                title: o.title,
                description: o.description,
                url: o.url,
                shortUrl: o.shortUrl,
                via: o.via
            }, o.data);
        },

        /**
         * Open up the url in a pop up window
         *
         * @param e {Event Object}
         * @param name {string} The link to open
         */
        popup: function(e, name) {
            var url = this._getLink(name),
                coords = this._getPopUpCoords(),
                $el = this.$el;

            if (url) {
                window.open(url, 'button_share', 'width='+coords.width+', height='+coords.height+', '+
                    'left='+coords.left+', top='+coords.top+', '+
                    'personalbar=0, toolbar=0, scrollbars=1, resizable=1');

                this._setupLoadEvent(e, {'el':$el, 'name':name, 'type':this.popupId});
            }
        },

        /**
         * Open url in same browser
         *
         * @param e {Event Object}
         * @param name {string}
         */

        link: function(e, name) {
            var url = this._getLink(name),
                $el = this.$el;

            if (url) {
                this._setupLoadEvent(e, {'el':$el, 'name':name, 'type':this.linkId});
                window.location = url;
            }
        },

        /**
         * Function to calculate and return window pop-up coordinates
         *
         * @param width {int}
         * @param height {int}
         *
         * @private
         */

        _getPopUpCoords: function (width, height) {
            var o = this.options,
                w = width || o.popupWidth,
                h = height || o.popupHeight,
                sw = screen.width,
                sh = screen.height;

            return {
                left: Math.round((sw/2)-(w/2)),
                top: (sh > h) ? Math.round((sh/2)-(h/2)) : 0,
                width: (sw > w) ? w : sw,
                height: (sh > h) ? h : sh
            };
        },

        _setupClickEvent: function(e, data){
            e = e || null;
            var loc = this.options.location;

            if (loc){
                $.extend(data, {'location': loc});
            }
            debug.log("clicked");
            this._trigger('clicked', null, data);
        },

        _setupLoadEvent: function(e, data){
            e = e || null;
            var loc = this.options.location;

            if (loc){
                $.extend(data, {'location': loc});
            }

            this._trigger('loaded', e, data);
        }
    });

});

define('components/social-links-1.0',[
    'jquery',
    'version!fly/utils/string-helper',
    'version!fly/managers/debug',
    'version!fly/utils/string-vars',
    'version!fly/components/loading',
    'version!fly/components/social-links'
], function ($, strHlpr, debugMgr, stringVars) {

    var debug = debugMgr.init('socialLinks'), // initialize debugger
        loader = null,
        clickEventName = ($.support.touch) ? 'vclick' : 'click';
    /**
     * Allows for a group of social media links to be opened in a window pop
     *
     * @extends cbsi.base
     * @extends utils/string-helper
     * @extends managers/debug
     *
     * Examples:
     *
     *      $(selector).socialLinks();
     *
     * Markup:
     *      <div class="social-links" data-component="socialLinks" data-social-links-options="{}">
                <a data-popup="facebook">Facebook</a></li>
                <a data-link="email">Email</a></li>
     *      </div>
     *
     *
     */

    $.widget('fly.socialLinks', $.fly.socialLinks, {

        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            favApiUrl: '/xhr/favorite/',
            hashtag: null,
            data : {
                id : '',
                type : ''
            },
            loader : {
                disabled: false,
                template: '<span class="{baseClass} {stateClass}"></span>',
                classes: {
                    base: 'loading-con'
                },
            }
        },

        links: {
            twitter: function(data) {
                var link = 'https://twitter.com/intent/tweet?text={title}&related={related}';
                link += ((data.hashtag) ? '&button_hashtag={hashtag}' : '');
                link += '&url={url}';
                link += ((data.via) ? '&via={via}' : '');
                return link;
            },
            email: null
        },

        /**
         * Instantiate the social-links
         * @constructor
         */
        _create: function () {
            var o = this.options,
                self = this,
                commentsLink = {'click li.comment-button a':'_scrollToComments'};
                eventMapClick = {};

            //Call parent social-links _create
            //this._super();
            this._setup();

            // Events
            eventMapClick[clickEventName+' [data-'+this.popupId+']'] = '_handlePopup';
            eventMapClick[clickEventName+' [data-'+this.linkId+']'] = '_handleLink';

            this._on(this.$element, eventMapClick);

            this.$popUps = this.$element.find('[data-'+this.popupId+']');
            this.$links = this.$element.find('[data-'+this.linkId+']');

            //Check to see if you have popUps
            if (this.$popUps.length > 0) {
                this.$popUps.each(function(){
                    var $popUp = $(this),
                        name = $popUp.data(this.popupId);
                    self._initItem(name.popup, $popUp);
                });
            }
            //Check to see if you have links
            if (this.$links.length > 0) {
                this.$links.each(function(){
                    var $link = $(this),
                        name = $link.data(this.linkId);
                    self._initItem(name.link, $link);
                });
            }

            // Scroll to comments
            this._on(this.$element, commentsLink);

        },


        /**
         * Handle the click event for link action
         *
         * @param e {Event Object}
         *
         * @private
         */
        _handleLink: function(e) {
            var $el = $(e.currentTarget), //get current target to prevent confusion on what's clicked
                name = $el.data(this.linkId);
            e.preventDefault();

            this.$el = $el;

            this._setupClickEvent(e, {'el':$el, 'name':name});

            this.link(e, name);
        },

        /**
         * Get the compiled url for a link
         *
         * @param name {string} The link name
         *
         * @private
         */
        _getLink: function(name) {
            var link = this.links[name.toLowerCase()],
                data = this._getLinkData(name.toLowerCase());

            if ($.isFunction(link)) {
                link = link(data);
            }

            link = stringVars.compile(link, data, ['urlencode']);

            return link;
        },

        /**
         * Collect all data needed to build link
         *
         * @param name {string} The link name
         *
         * @private
         */
        _getLinkData: function(name) {
            var o = this.options,
                title = o.title;

            if (name == 'twitter') {
                // Workaround for ajax call firing twice
                if (window.sharebarShortenerUrl == null) {
                    $.ajax({
                      url: '/sharebar-shortener/',
                      async: false,
                      data: {
                        longurl: o.url
                      }
                    }).done(function(response) {
                        if (response.data && response.data.url) {
                            window.sharebarShortenerUrl = response.data.url;
                            o.url = response.data.url;
                        }
                    });
                } else {
                    o.url = window.sharebarShortenerUrl;
                }

                // build data string as it would appear in tweet
                var dataString = o.title + ' ' + o.url.substr(0,23) + ' '; // twitter counts a url as being max 23 characters long

                if (o.hashtag) dataString += '#' + o.hashtag + ' ';

                dataString += 'via @' + o.via;

                // strip characters from title for tweets that exceed the char limit
                // and replace with ellipsis
                if (dataString.length > 278) {
                    var charsToRemove = dataString.length - 278 + 3;

                    // trim title to fit char limit
                    title = o.title.substr(0, o.title.length - charsToRemove);
                    // trim title again if in the middle of a word and add ellipsis
                    title = title.substr(0, Math.min(title.length, title.lastIndexOf(" ")));
                    title += '...';
                }
            }

            return $.extend({
                title: title,
                description: o.description,
                url: o.url,
                via: o.via,
                hashtag: o.hashtag
            }, o.data);
        },

        /**
         * Initialize item
         *
         * @param name {string} The link name
         *
         * @private
         */
        _initItem: function(name, el) {
            var fnName = strHlpr.capitalize(name),
                self = this;

            if ($.isFunction(this['setup' + fnName])) {
                debug.log('Calling: setup' + fnName);
                this['setup' + fnName](el);
            }
            if ($.isFunction(this['get' + fnName])) {
                this.setLink(name, $.proxy(this['get' + fnName],self));
            }
        },

        setupTrfavorite: function(el) {
            var o = this.options,
                self = this;

            assetId = el.data('id');
            assetType = el.data('type');
            o.data.id = assetId;
            o.data.type = assetType;
            o.data.favApiUrl = o.favApiUrl;

            this.loader = $.fly.loading(o.loader);

            //Check for cookie to see if curent asset is favorited (fly_tr_favorites)
            this.checkCookie(el);
        },

        getTrfavorite: function(data) {
            var o = this.options,
                self = this;

            this.checkCookie(this.$el);

            if (!data.id) {
                return false;
            }

            this.loader.$element.appendTo(this.$el);
            this.loader.add();

            $.ajax({
                url: data.favApiUrl,
                type: 'POST',
                dataType: 'json',
                data: {
                    'assetId': data.id,
                    'assetType': data.type,
                    'isRemove' : o.isRemove
                },
                success: (function(response) {
                    self.loader.remove();
                    if(!response.error){
                        //If is fav set html
                        self.checkCookie(self.$el);
                    }
                }),
                error: (function(response) {
                    self.loader.remove();
                    debug.log('Favorite ajax call failed', response);
                })
            });


        },

        checkCookie: function(el) {
            var o = this.options;
            debug.log('Checking Cookie');
            favCookie = $.cookie('fly_tr_favorites');
            if (favCookie) {
                favCookie = $.parseJSON(favCookie);
                if (favCookie !== null && favCookie.hasOwnProperty(assetId)) {
                    debug.log('this asset is favorited');
                    o.isRemove = true;
                    el.html(el.html().replace('Save','Unsave'));
                    el.addClass('saved');
                } else {
                    debug.log('this asset is NOT favorited');
                    o.isRemove = false;
                    el.html(el.html().replace('Unsave','Save'));
                    el.removeClass('saved');
                }
            } else {
                this.requestCookie(el);
            }
        },

        requestCookie: function(el){
            // fix for 500 error
            return;
            var o = this.options,
                self = this;
            debug.log('Requesting Cookie');
            //Make a request to get favorites
            $.ajax({
                url: o.favApiUrl,
                type: 'GET',
                dataType: 'json',
                success: (function(data) {
                    if(!data.error){
                        //Success
                        debug.log('FAV cookie recieved');
                    }
                }),
                error: (function(response) {
                    debug.log('Cookie request failed', response);
                })
            });
        },

        _scrollToComments: function(e) {
            debug.log('Scroll to comments');
            var hash = e.currentTarget.hash;
            $target = $(hash);

            $('[data-component="disqusComments"]').disqusComments('showCommentsShareBar');

            if($target.length > 0) {
                $('html, body').animate({scrollTop:$target.offset().top - 100});
                return false;
            } else {
                return true;
            }
        },

    });

});


define('fly/components/social-button-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/string-helper',
    'version!fly/components/base'
], function($, debugMgr, strHlpr) {


    var debug = debugMgr.init('socialButton'); // initialize debugger

    /**
     * Creates a single social button
     *
     * @extends cbsi.base
     * @extends utils/string-helper
     * @extends managers/debug
     *
     * Examples:
     *      $(selector).socialButton();
     *
     * Markup:
     *      <div data-component="socialButton" data-social-button-options="{}"></div>
     *
     *
     */
    $.widget( 'fly.socialButton', $.fly.base, {

        options: {
            mode: null, // {String} Button mode - horizontal or vertical
            title: '', // {String} Page title
            summary: '', // {String} Page summary
            url: '', // {String} URL shared - required most of the time
            shortUrl: '', // {String} ShortUrl from CMS
            twitterRelated: 'cnet,zdnet', // {Comma separated string} Related sites For twitter widgets
            twitterUsername: false, // {String} // Username used for twitter mostly
            redditData: { // Reddit specific data
                target: null, // {String} community target
                bdrColor: null, // {String} button border color
                bgColor: null // {String} button background color
            },
            googleplusKey: '', // {String} Google API key - required for googleplus counts
            facebookAppId: '', // {String} Facebook appId - used for graph API tracking purposes
            site: '', // {String} Using for tracking and FB activity widget
            buttonSelectorId: 'button', // Requried {String} data attribute used to select buttons
            location: null // {String} Location of the component - used to differentiate multiple instances on the same page
        },

        /**
         * Instantiate modal
         *
         * @public
         */
        _create: function() {
            var o = this.options,
                self = this;

            this._setup();

            this.url = o.url || window.location.href;

            // Encode the values to be passed to social media sites
            this.encodedUrl = encodeURIComponent(o.url);
            this.encodedTitle = encodeURIComponent(o.title);

            //Find all buttons in this element
            this.$buttons = this.$element.find('[data-'+o.buttonSelectorId+']');


            //Check to see if you have buttons
            if (this.$buttons.length <= 0) {
                debug.log('Error: No buttons found.', this.$element);
                return false;
            }

            this.$buttons.each(function(){
                var $button = $(this),
                    name = $button.data(o.buttonSelectorId);

                self._setFunction(name.toLowerCase());
            }); 
        },

        /**
         * Setup function call based on button name
         *
         * @private
         */

        _setFunction: function(name) {
            var fnName = 'get'+ strHlpr.capitalize(name),
                data;

            if ($.isFunction(this[fnName])) {
                data = this[fnName]();
                this.setContent(name, data);                
            } else {
                debug.log('Error: Function name does not exist:', fnName);
                return false;
            }
        },

        // ***** Button Getters ***** //
        getFacebook: function () {
            var mode = this.getMode('horizontal'),
                props = {
                    width: '46',
                    layout: 'box_count',
                    href: this.url,
                    send: 'false'
                },
                data;

            switch (mode) {
                case 'horizontal':
                    props.height = '21';
                    props.width = '85';
                    props.layout = 'button_count';
                break;
                case 'horizontal-wide':
                    props.height = '24';
                    props.width = '350';
                    props.layout = 'standard';
                break;
            }

            data = '<div class="fb-like" data-send="false" data-show-faces="false" data-font="arial"';
            $.each(props, function(key, val) {
                data += ' data-'+key+'="'+val+'"';
            });
            data += '></div>';

            this._setFbContainer();

            return data;
        },

        getFacebookActivity: function(settings) {
            var props = {
                    width: '290',
                    height: '350',
                    header: 'false',
                    font: 'arial',
                    recommendations: 'true',
                    ref: 'activity-widget',
                    site: this.options.site
                },
                opts = $.extend({}, props, settings),
                data;

            data = '<div class="fb-activity" max-age="10" border-color="#fff"';
            $.each(opts, function(key, val) {
                data += ' data-'+key+'="'+val+'"';
            });
            data += '></div>';

            this._setFbContainer();

            return data;
        },

        getTwitterfollow: function () {
            var mode = this.getMode('horizontal'),
                screenName = this.options.twitterUsername,
                props = {},
                data, showScreenName, showCount;

            if(!screenName) return false;

            screenName = encodeURI($.trim(screenName));

            if (screenName.indexOf('@') === 0) {
                screenName = screenName.substring(1);
            }

            showScreenName = (mode == 'horizontal') ? 'true' : 'false';
            showCount = (mode == 'horizontal') ? 'false' : 'true';
            props = {
                'show-count': showCount,
                'lang': 'en',
                'show-screen-name': showScreenName
            };

            data = '<a href="http://twitter.com/'+screenName+'" class="twitter-follow-button"';
            $.each(props, function(key, val) {
                data += ' data-'+key+'="'+val+'"';
            });
            data += '>Follow @'+screenName+'</a>';

            return data;
        },

        getTwitter: function () {
            var mode = this.getMode('horizontal'),
                props = {},
                o = this.options,
                data;

            props = {
                count: mode,
                related: this.options.twitterRelated,
                text: this.options.title
            };

            if (o.shortUrl) {
                props.url = o.shortUrl;
                props.counturl = this.url;
            } else {
                props.url = this.url;
            }

            if (o.via) {
                props.via = o.via
            }

            data = '<a href="http://twitter.com/share" class="twitter-share-button"';
            $.each(props, function(key, val) {
                data += ' data-'+key+'="'+val.replace(/"/g, '&#34;') +'"';  //replacing double quotes with html equivalent
            });
            data += '></a>';

            return data;
        },

        getStumbleupon: function () {
            var mode = this.getMode('vertical'),
                props = {},
                data;

            if (mode === 'horizontal') {
                props.height = '18';
                props.width = '74';
                props.type = '1';
            } else {
                props.height = '60';
                props.width = '50';
                props.type = '5';
            }

            data = '<iframe src="http://www.stumbleupon.com/badge/embed/'+props.type+'/?url='+this.encodedUrl+
                '" scrolling="no" frameborder="0" style="border:none;overflow:hidden;width:'+props.width+
                'px;height:'+props.height+'px;" allowTransparency="true"></iframe>';

            return data;
        },

        getReddit: function () {
            var mode = this.getMode('horizontal'),
                host = ('https:' == document.location.protocol) ? 'https://redditstatic.s3.amazonaws.com' : 'http://www.reddit.com/static',
                props = {},
                o = this.options,
                redditOpts = o.redditData,
                data;                

            if (mode === 'horizontal') {
                props.height = '22';
                props.width = '120';
                props.type = '1';
            } else {
                props.height = '69';
                props.width = '51';
                props.type = '2';
            }

            data = '<iframe src="'+ host + '/button/button'+ props.type +'.html?width='+ props.width +'&url='+ this.encodedUrl +'&title='+ this.encodedTitle;

            if (redditOpts.target){
                data += '&sr=' + encodeURIComponent(redditOpts.target); // Community target
            }
            if (redditOpts.bgColor) {
                data += '&bgcolor=' + encodeURIComponent(redditOpts.bgColor);
            }
            if (redditOpts.bdrColor) {
                data += '&bordercolor=' + encodeURIComponent(redditOpts.bdrColor);
            }

            data += '&newwindow=1" height="'+ props.height +'" width="'+ props.width +'" scrolling="no" frameborder="0"></iframe>';

            return data;
        },

        getGoogleplus: function () {
            var mode = this.getMode('vertical'),
                type, data;

            type = (mode == 'horizontal') ? 'medium' : 'tall';
            data = '<div class="g-plusone" data-size="'+type+'" data-href="'+this.url+'" data-count="true" data-callback="handleGooglePlusCallback"></div>';

            return data;
        },


        getLinkedin: function () {
            var mode = this.getMode('vertical'),
                data, counter;

            counter = (mode == 'horizontal') ? 'right' : 'top';
            data = '<script type="IN/Share" data-counter="'+counter+'" data-url="'+encodeURI(this.url)+'" data-onsuccess="self.initLinkedEvents"></script>';

            return data;

        },
        // ***** END Button Getters ***** //
        

        /*
        * Check for fb-root div - required for fb widgets
        * If it doesn't exist create one
        *
        * @private
        *
        */
        _setFbContainer: function(){
            
            if( $('#fb-root').length <= 0 ) {
                $('<div id="fb-root"></div>').appendTo($('body')); // add fb-root container if it doesn't exist
            }
        },

        /**
         * Get the mode for the button
         *
         * Sets mode for the button requested
         *
         * @public
         */
        getMode: function(orig){
            var o = this.options,
                mode = o.mode,
                $el = this.$element;

            mode = mode || orig;
            mode = mode.toLowerCase();



            if(!$el.data('mode') || ($el.data('mode') && $el.data('mode') === mode)) {
                // set data attr for the mode
                $el.attr('data-mode', mode);
            }

            return mode;
        },

        /**
         * Set Button Content and fire Loaded event
         *
         * @public
         *
         * @param name = button name
         * @param content = html content needed for button
         */
        setContent: function(name, content){
            var fnName = '_init'+strHlpr.capitalize(name),
                $button = this._getButtonEl(name),
                self = this;

            $(content).appendTo($button); // Add html to page

            if ($.isFunction(this[fnName])) {
                this[fnName]();
            } else {
                debug.log('Error: No handler function assigned. ', fnName);
            }

            this._setupLoadEvent('loaded', null, {'el': $button, 'name':name});
        },

        /**
         * Get the button element
         *
         * @public
         *
         * @param name = button name
         */
        _getButtonEl: function(name){
            var o = this.options,
                $el;

            return this.$buttons.filter(function(i) {
                var $btn = $(this),
                    attrName = $btn.attr('data-'+o.buttonSelectorId);

                $el = (attrName === name) ? $(this) : false;

                return $el;
            });
        },

        /**
         * Initialize FB scripts after load
         *s
         * @private
         */
        _initFacebook: function(){
            var self = this;
            // Load twitter script async
            require(['//connect.facebook.net/en_US/all.js#xfbml=1&appId='+this.options.facebookAppId], function() {
                FB.XFBML.parse();
                try {
                    FB.Event.subscribe('edge.create', function(response) {
                        self._setupClickEvent(null, {'name': 'facebook', 'response': response});
                    });
                } catch(e) {}

            });
        },

        /**
         * Initialize Facebook Activity Widget scripts after load
         *
         * @private
         */
        _initFacebookactivity: function(){
            this._initFacebook(); // uses fb script
        },

        /**
         * Initialize Twitter scripts after load
         *
         * @private
         */
        _initTwitter: function(){
            // Load twitter script async
            var self = this;

            require(['http://platform.twitter.com/widgets.js'], function() {
                try {
                    twttr.widgets.load(); 
                    twttr.events.bind('follow', function(e) {
                        self._setupClickEvent(e, {'name': 'twitter', 'action': 'follow'});
                    });

                    twttr.events.bind('click', function(e) {
                        self._setupClickEvent(e, {'name': 'twitter', 'action': 'click'});
                    });

                    twttr.events.bind('tweet', function(e) {
                        self._setupClickEvent(e, {'name': 'twitter', 'action': 'tweet'});
                    });
                } catch(e) {
                    debug.log('Issue with twitter js (http://platform.twitter.com/widgets.js)', e);
                }

            });
        },

        /**
         * Initialize Twitter Follow scripts after load
         *
         * @private
         */
        _initTwitterfollow: function(){
            this._initTwitter(); // uses twitter script
        },

        /**
         * Initialize Twitter scripts after load
         *
         * @private
         */
        _initLinkedin: function(){
            // Load twitter script async
            require(['//platform.linkedin.com/in.js'], function() {
                $('.IN-widget').click(function() {
                   self._setupClickEvent(null, {'name': 'linkedin'});
                });
            });
        },

        /**
         * Initialize Twitter scripts after load
         *
         * @private
         */
        _initGoogleplus: function(){
            var self = this;

            require(['https://apis.google.com/js/plusone.js'], function() {
                window.handleGooglePlusCallback = function(data) {
                    var act = (data.state == 'on') ? 'plusone' : 'rmvplusone';
                    self._setupClickEvent(null, {'name': 'googleplus', 'type': act});
                }.bind(this);
            });
        },

        /**
         * Initialize Reddit scripts after load
         *
         * @private
         */
        _initReddit: function(){
            // Call functions needed after the reddit iframe has been loaded

        },

        _setupClickEvent: function(e, data){
            e = e || null;
            var loc = this.options.location

            if (loc){
                $.extend(data, {'location': loc});
            }
            
            this._trigger('clicked', e, data);
        },

        _setupLoadEvent: function(e, data){
            e = e || null;
            var loc = this.options.location

            if (loc){
                $.extend(data, {'location': loc});
            }

            this._trigger('loaded', e, data);
        },

        _destroy: function() {
            if(this.buttonContent){
                this.$buttonContent.remove();
            }
        }
    });

});


/*
 * History Manager
 *
 * I consider this a temporary solution of history management
 * Ideally would like to just use Backbone to handle this once
 *  it has been integrated into the stack
 *
 */

define('fly/managers/history-1.0',[
    'jquery',
    'version!fly/utils/string-vars'
], function ($, strVars) {

    'use strict';

    /**
     * Usage:
     *
     *  Initalize an instance:
     *  ----------------------
     *      historyMgr.init(options, initState);
     *
     *      examples:
     *      ---------
     *      var historyInst = historyMgr.init(
     *          {
     *              route: '/articles/{foo}/{page}',
     *              title: 'Article {foo} - Page {page}'
     *          },
     *          {
     *              page: 1,
     *              foo: 'bar'
     *          }
     *      );
     *
     *      options:
     *          - route: url template - state data is used to compile vars
     *          - title: title template - state data as well as original page title
     *              passed as {title} are used to compile vars
     *
     *          Note: route and title can be either a string or a function that
     *              returns a string. The function is passed the state data on navigate
     *
     *
     *      initState: data that will be store w/ the initial page using replaceStat.
     *          The data can then be used w 'stateChange' to perform some logic
     *
     *
     *  Update url and title via pushState/replaceState
     *  -----------------------
     *      historyInst.navigate(state, options);
     *
     *      Ex: only passing state data to compile agaist route and title
     *      ----
     *      historyInst.navigate({
     *          page: 2,
     *          foo: 'baz'
     *      });
     *      results in:
     *           - url change to '/articles/baz/2',
     *           - title change to 'Article baz - Page 2'
     *
     *      Ex: passing url and title directly
     *      ----
     *      historyInst.navigate({foo: bar}, {
     *          url: '/my/custom/url,
     *          title: 'My custom title'
     *      });
     *
     *      Note: If you want to use replaceState instead of pushState pass
     *          replace: true w/ the options
     *
     *
     *  Respond to state change via popState
     *  ---------------------------
     *      historyInst.stateChange(callback);
     *          - callback is passed the stored state data
     *
     *      Ex:
     *      ----
     *      historyInst.stateChange(function(state) {
     *          if (state.page === 1) {
     *              // setup page 1
     *          }
     *
     *          if (state.foo === 'baz') {
     *              // do something
     *          }
     *      });
     *
     */

    var history = window.history,
        $window = $(window),
        methods,
        instCount = 0,
        stateChangeCallback,
        // taken from jquery mobile
        hasPushState = 'pushState' in history &&
            'replaceState' in history &&
            !( window.navigator.userAgent.indexOf('Firefox') >= 0 && window.top !== window ) &&
            ( window.navigator.userAgent.search(/CriOS/) === -1 );

    /*
     * Initialize History
     *
     * @constructor
     * @param {object} [options] - Options for instance
     * @param {mixed} [options.title] Title template
     * @param {mixed} [options.route] Url Template
     * @param {object} [initState] - Data to be stored w/ original page
     */
    var History = function(options, initState) {
        options = options || {};

        // give instance a unique id
        instCount = instCount + 1;
        this.id = 'history-'+ instCount;

        this.title = options.title;
        this.route = options.route;
        this.originalTitle = document.title;

        if (initState) {
            this.navigate(initState, {replace: true});
        }
    };

    History.prototype = {
        constructor: History,

        navigate: function(stateData, options) {
            if (!hasPushState) return false;

            $.extend(true, stateData, {historyId: this.id});
            options = options || {};

            var title = options.title || this.title,
                url = options.url || this.route;

            title =  strVars.compile(($.isFunction(title) ? title(stateData) : title), $.extend({title: this.originalTitle}, stateData));
            url = strVars.compile(($.isFunction(url) ? url(stateData) : url), stateData);

            history[options.replace ? 'replaceState' : 'pushState'](stateData, title, url);

            // manually set title
            if (title) {
                document.title = title;
            }
        },

        stateChange: function(callback) {
            if (!hasPushState) return false;

            var self = this;

            $window.on('popstate.'+ this.id, function() {
                var state = history.state || {};

                if (state.historyId === self.id && $.isFunction(callback)) {
                    callback(state);
                }
            });
        },

        stop: function() {
            if (!hasPushState) return false;

            $window.off('popstate.'+ this.id);
        }
    };

    return {
        /*
         * Create an instance of History
         *
         * @param {object} options
         * @param {object} initState
         */
        init: function(options, initState) {
            return new History(options, initState);
        }
    };

});



define('fly/components/image-gallery-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'version!fly/utils/string-vars',
    'version!fly/managers/history',
    'version!fly/components/base'
], function($, debugMgr, strVars, historyMgr) {

    // TODO: temporarily commented until debug is fixed
    //'use strict';

    var clickEventName = ($.mobile) ? 'vclick' : 'click',
        debug = debugMgr.init('imageGallery');

    /**
     *     Image Gallery
     *
     *     @extends fly.base
     *
     *     Example:
     *
     *     $('#my-image-gallery').imageGallery({ index: 1, count: 2 });
     *
     *     <div id="my-image-gallery">
     *          <ul class="canvas">
     *              <li data-item="image" class="selected>
     *                  <img src="…" />
     *                  ...
     *              </li>
     *              <li data-item="image">
     *                  <img data-src="…" src="/placeholder/image" /> // preload
     *                  ...
     *              </li>
     *          </ul>
     *        
     *          <a data-to-image="previous">Previous</a>
     *          <a data-to-image="next">Next</a>
     *
     *          <a data-to-image="1">1</a>
     *          <a data-to-image="2">2</a>
     *          
     *          <div data-item="image-count">1 of 2</div>
     *     </div>
     *
     */

    $.widget('fly.imageGallery', $.fly.base, {

        /**
         * Options
         */
        options: {
            index: 0, // slide to show on load. 
            count: 0, // number of total images
            preloadThreshold: 2, // number of images to preload before and after the current image.
            selectors: {
                image: '[data-item="image"]', // image content container
                count: '[data-item="image-count"]' // count display
            },
            classes: {
                selected: 'selected', // added to selected images and thumbnails
                disabled: 'disabled' // added to disabled conrols
            },
            countTemplate: '<span class="index">{index}</span> / <span class="count">{count}</span>',
            pushState: {
                enabled: false,
                route: function(data) {
                    return (data.index > 1) ? './{index}' : './';
                },
                title: function(data) {
                    return '{title}' + ((data.index > 1) ? '- {index}' : '');
                }
            }
        },

        index: 1, // current image index
        indexPrevious: null, // previous image index
        count: 0, // total image count
        
        selectors: {
            control: '[data-to-image]',
            next: '[data-to-image="next"]',
            previous: '[data-to-image="previous"]',
            jump: '[data-to-image="{index}"]'
        },

        /**
         * Initialize Image Gallery
         *
         * @private
         */
        _create: function() {
            var o = this.options,
                self = this;

            this._setup();

            // set index and count
            this.index = parseInt(o.index, 10);
            this.count = parseInt(o.count, 10);

            // find element
            this.$images = this.$element.find(o.selectors.image);
            this.$count = this.$element.find(o.selectors.count);

            this._setupEvents();
            this._updateControls();
            this._preloadImages();
            
            if (o.pushState.enabled) {
                this._setupPushState();
            }
        },

        /**
         * Add events
         *
         * @private
         */        
        _setupEvents: function() {
            var eventMap = {};
                
            // prev/next events
            eventMap[clickEventName + ' ' + this.selectors.control] = '_handleControlClick';

            this._on(this.$element, eventMap);
        },

        /**
         * Setup pushState events
         *
         * @private
         */  
        _setupPushState: function() {
            var o = this.options,
                self = this;
            
            this.history = historyMgr.init(o.pushState, {index: this.index});
            
            this._on({
                'imagegalleryshown': function(e, data) {
                    var stateData = {index: data.index};
                    
                    if (data.action !== 'stateChange') {
                        self.history.navigate(stateData, {title: data.title, url: data.url});
                    }
                }
            });
            
            this.history.stateChange(function(state) {
                self.show(state.index, 'stateChange');
            });
        },

        /**
         * Handle click event on controls
         *
         * @param {Event} e The click event
         * @private
         */  
        _handleControlClick: function(e) {
            var to = $(e.target).closest(this.selectors.control).data('toImage');
            
            e.preventDefault();
            e.stopPropagation();

            switch (to) {
                case 'next':
                    this.next();
                    break;
                case 'previous':
                    this.previous();
                    break;
                default:
                    this.show(parseInt(to, 10), 'to');
            }
        },
        
        /**
         * Update control display
         *
         * @private
         */
        _updateControls: function() {
            var o = this.options,
                $previous = this.$element.find(this.selectors.previous),
                $next = this.$element.find(this.selectors.next),
                $jumpPrevious = this.$element.find( strVars.compile(this.selectors.jump, {index: this.indexPrevious }) ),
                $jumpCurrent = this.$element.find( strVars.compile(this.selectors.jump, {index: this.index }) );

            $next[(this.index === this.count) ? 'addClass' : 'removeClass'](o.classes.disabled);
            $previous[(this.index === 1) ? 'addClass' : 'removeClass'](o.classes.disabled);

            $jumpCurrent.addClass(o.classes.selected);
            $jumpPrevious.removeClass(o.classes.selected);
        },

        /**
         * Update count display
         *
         * @private
         */  
        _updateCount: function() {
            var o = this.options,
                data = {};
            
            if (!this.$count.length) return;
            
            data = {
                index: this.index,
                count: this.count
            };
            
            this.$count.html(strVars.compile(o.countTemplate, data));
        },

        /**
         * Show specific image content
         *
         * @param {number} index The image index to show
         */
        show: function(index, action) {
            var o = this.options,
                $previous,
                $current;
            
            if (index === this.index) return;
            
            // find the images
            $previous = this.$images.eq(this.index - 1);
            $current = this.$images.eq(index - 1);

            // make sure we've loaded this image
            this._loadImage($current);
            
            // add/remove show class
            $previous.removeClass(o.classes.selected);
            $current.addClass(o.classes.selected);

            // update the index
            this.indexPrevious = this.index;
            this.index = index;
            // update display
            this._updateControls();
            this._updateCount();

            this._trigger('shown', null, {
                $current: $current,
                $previous: $previous,
                index: this.index,
                action: action
            });

            // preload images
            this._preloadImages();
        },

        /**
         * Show next image content
         */
        next: function() {
            var o = this.options,
            nextIndex = this.index + 1;
            
            if (nextIndex > this.count) return;
            
            this.show(nextIndex, 'next');

            this._trigger('next');
        },

        /**
         * Show previous image content
         */
        previous: function() {
            var o = this.options,
            previousIndex = this.index - 1;
                
            if (previousIndex === 0) return;
            
            this.show(previousIndex, 'previous');

            this._trigger('previous');
        },
        

        /**
         * Collect a group of images to be preloaded
         *
         * @private
         */
        _preloadImages: function() {
            var o = this.options,
                self = this,
                indexStart, 
                indexEnd,
                $images;
                
            if (o.preloadThreshold === 0) return;

            indexStart = Math.max(1, this.index - o.preloadThreshold);
            indexEnd = Math.min(this.count, this.index + o.preloadThreshold);
            
            $images = this.$images.slice(indexStart - 1, indexEnd);

            $images.each(function(i, el) {
                self._loadImage($(el));
            });
        },

        /**
         * Load an image that is staged to be lazy loaded
         *
         * @image
         * @private
         */        
        _loadImage: function($imageCont) {
            var isLoaded = $imageCont.data('isLoaded') || false,
                $image,
                src;
            
            if (isLoaded) return;
            
            $image = $imageCont.find('img');
            src = $image.data('src');
            
            if ($image.length && src) {
                $image.attr('src', src);
                $image.removeData('src');
                $imageCont.data('isLoaded', true);
            }
        }

    });
});

define('components/image-gallery-1.0',[
    'jquery',
    'version!fly/managers/debug',
    'managers/ad',
    'managers/tealium',
    'version!fly/managers/history',
    'managers/page-vars',
    'version!fly/components/image-gallery'
], function ($, debugMgr, adMgr, tagMgr, historyMgr, pageVars) {

    var debug = debugMgr.init('imageGallery');

    $.widget('fly.imageGallery', $.fly.imageGallery, {

        /**
         * Optional data configuration
         * @define {object}
         */
        options: {
            preloadThreshold: 0,
            selectors: {
                meta: '[data-item="meta"]',
                content: '[data-item="content"]'
            },
            countTemplate: 'Image {index} of {count}',
            swipeThreshold: 20, // swipe threshold as a percentage
            canonicalProtocol: 'https:',
            pushState: {
                enabled: true,
                title: function(data) {
                    var pageTxt = ' - Page ',
                        $title = $('title').html().trim(),
                        hasPage = $title.indexOf(pageTxt),
                        title = '';

                    if (hasPage == -1) {
                        title = $title.split(' - TechRepublic')[0];
                    } else {
                        title = $title.split(' - Page ')[0];
                    }

                    return title + ((data.index > 1) ? ' - Page {index}' : '') + ' - TechRepublic';
                }
            }
        },
        refreshAds: false,

        /**
         * Instantiate the image-gallery
         * @constructor
         */
        _create: function () {
            var o = this.options;

            debug.log('_create');

            //Call Parent imageGallery _create
            this._super('_create');

            this.$content = $.find(o.selectors.content);
            this._loadImage(this.$images.eq(this.index - 1));
            this._updateMetadata();

            // check for legacy 'seq' parameter
            if(location.search && location.search.indexOf('seq=') > 0) {
                window.history.replaceState(null, null, document.location.pathname); // clear query params
            }
        },

        _setupEvents: function() {
            this._super();

            var keyboardEventMap = {};
            keyboardEventMap['keydown'] = '_handleKeyboardControl';
            this._on(document, keyboardEventMap);

            if("ontouchstart" in window) this._setupTouch();

            $('.hide-until-ready', this.$element).removeClass('hide-until-ready');
        },

        _setupPushState: function() {
            var o = this.options,
                self = this,
                route = o.pushState.route;

            o.pushState.route = function (data) {
                return ((data.index > 1) ? route + '{index}/' : route) + window.location.search + window.location.hash;
            };

            this._super();
        },

        /**
         * Handle click event on controls, modified to allow tracking js to run
         *
         * @param {Event} e The click event
         * @private
         */
        _handleControlClick: function(e) {
            var to = $(e.target).closest(this.selectors.control).data('toImage');

            e.preventDefault();

            switch (to) {
                case 'next':
                    this.next();
                    break;
                case 'previous':
                    this.previous();
                    break;
                default:
                    this.show(parseInt(to, 10), 'to');
            }
        },

        /**
         * Show specific image content
         *
         * @param {number} index The image index to show
         * @param {string} action
         */
        show: function(index, action) {
            if (index === this.index) return;

            var o = this.options,
                self = this;

            this.refreshAds = true;

            //Call parent show function
            this._super(index, action);

            var $current = this.$images.eq(index - 1).attr('style','');
            $meta = $current.find(o.selectors.meta);
            $(this.$content).html($meta.html());

            this._updateMetadata();

            // update ads and tracking after a timeout to decrease image switching latency
            setTimeout(function(){
                // check if refresh needed immediately but always do tracking calls
                var refreshAds = self.refreshAds;
                self.refreshAds = false;

                // Disable chartbeat for slide change
                pageVars.services.chartbeat_tracking.enabled = false;

                // Track as new pageview
                omnitureMgr.galleryView({pageNum:index});

                // don't refresh ads if they've already been refreshed once since the gallery was interacted with
                if(!refreshAds) {
                    return;
                }

                // don't refresh ads in shortcode galleries
                if(pageVars.pageType == 'article' || pageVars.pageType == 'blog_post') {
                    return;
                }

                try {
                    window.TRFunctions.gdprConsentCallback("script_image_gallery_gpt", function() {
                        if (pageVars.services.gpt.enabled) {
                            // Ad load
                            var adUnits = [];
                            if (pageVars.tracking.data.deviceType === "mobile") {
                                // refresh all ads for mobile
                                adUnits = adMgr.getAdUnits(pageVars.ads.data.gpt.containerId);
                            } else {
                                adUnits = adMgr.getAdUnitsExcluding(['nav-ad']);
                            }
                            adMgr.loadAds(adUnits, pageVars.ads.data, {excludeDisabled: true, incrementPageView: true});

                        }
                    });
                } catch (e) {
                    debug.log('ImageGallery ad error occurred');
                }

            }, 400);

        },

        /**
         * Show next image content
         */
        next: function() {
            //Call Parent imageGallery next
            this._super();
        },

        /**
         * Show previous image content
         */
        previous: function() {
            //Call Parent imageGallery previous
            this._super();
        },


        /**
         * Handle left/right key presses to move between images
         */
        _handleKeyboardControl: function(e) {
            var keyCode = e.keyCode;

            switch (keyCode) {
                case 37: // left
                    this.previous();
                    break;
                case 39: // right
                    this.next();
                    break;
            }
        },

        /**
         * Initialise touch events (swiping)
         */
        _setupTouch: function() {
            debug.log('initialising touch events');

            this.$element.find('.controls').hide(); // hide hover buttons

            var self = this,
                startX = -1, startY = -1, delta = 0, $currentItem,
                $items = $('li.image');


            function setTransform($el, x, y, z) {
                var transformString = 'translate3d('+x+','+y+','+z+')';
                $el.css({'transform': transformString, '-webkit-transform': transformString});
            }

            function touchStart(e) {
                if (e.touches.length == 1){
                    $currentItem = $items.eq(self.index - 1).addClass('swiping');

                    $items.each(function(i){
                        if(Math.abs(i - self.index + 1) < 2) {
                            setTransform($(this), (i - self.index + 1) * 100 + '%', 0, 0);
                        }
                    });

                    var touch = e.touches[0];
                    startX = touch.screenX;
                    startY = touch.screenY;
                    delta = 0;
                }
            }
            function touchEnd(e) {
                if (startX < 0 || startY < 0) return true;

                if (delta < -self.options.swipeThreshold && self.index < self.count) {
                    setTransform($items.eq(self.index).removeClass('swiping'), 0, 0, 0);
                    setTransform($currentItem.removeClass('swiping'), '-100%', 0, 0);
                    self.next();
                } else if (delta > self.options.swipeThreshold && self.index > 1) {
                    setTransform($items.eq(self.index - 2).removeClass('swiping'), 0, 0, 0);
                    setTransform($currentItem.removeClass('swiping'), '100%', 0, 0);
                    self.previous();
                } else {
                    setTransform($currentItem.removeClass('swiping'), 0, 0, 0);
                }

            }
            function touchMove(e) {
                if (startX < 0 || startY < 0 || e.touches.length > 1) return true;

                var touch = e.touches[0];

                 // cancel swiping if not moving enough left/right and too much up/down
                if (Math.abs(touch.screenY - startY) > 5 && Math.abs(touch.screenX - startX) < 10) {
                    startX = -1;
                    startY = -1;
                    return true;
                }

                e.preventDefault(); // prevent scrolling

                delta = (touch.screenX - startX) / self.$element.width() * 100; // calculate touch movement percentage

                setTransform($currentItem, delta +'%', 0, 0);
            }

            var optionParam = pageVars.passiveEventsSupported ? {passive: true} : false;
            self.$element[0].addEventListener('touchstart', touchStart, optionParam);
            self.$element[0].addEventListener('touchend', touchEnd, optionParam);
            self.$element[0].addEventListener('touchmove', touchMove, false);
        },

        /**
         * Update meta data tags
         *
         * @private
         * @method _updateMetadata
         */
        _updateMetadata: function() {
            var $metaDescription = $("meta[name='description']"),
                $imageData = $('[data-image-index="'+this.index+'"]').find('img'),
                dekText = $metaDescription.attr('content'),
                canonicalUrl = this.options.canonicalProtocol + '//' + location.host + location.pathname;

            $('link[rel="canonical"]').attr('href', canonicalUrl);

            if ($metaDescription.length > 0) { // pages don't necessarily have description
                $metaDescription.attr('content', dekText.length > 145 ? dekText.substr(0,145)+'...' : dekText);

                if (this.index != 1) {
                    $metaDescription.attr('content', $metaDescription.attr('content').split(' - Page ')[0] + ' - Page ' + this.index);
                } else {
                    $metaDescription.attr('content', $metaDescription.attr('content').split(' - Page ')[0]);
                }

                $("meta[property='og:description']").attr('content', $metaDescription.attr('content'));
                $("meta[name='twitter:description']").attr('content', $metaDescription.attr('content'));
            }

            $("meta[property='og:url']").attr('content', canonicalUrl);
            $("meta[property='og:title']").attr('content', document.title);
            $("meta[property='og:image']").attr('content', $imageData.attr('src'));
            $("meta[name='twitter:url']").attr('content', canonicalUrl);
            $("meta[name='twitter:image']").attr('content', $imageData.attr('src'));
            $("meta[name='twitter:image:width']").attr('content', $imageData.width());
            $("meta[name='twitter:image:height']").attr('content', $imageData.height());
            $("meta[name='twitter:title']").attr('content', document.title);
        }
    });
});

define('translations/video',[
    'managers/edition'
], function (edition) {
    var translations = {
        en: {
            resume: 'Your video will resume in ',
            seconds: ' seconds',
            noFlash: 'Please install the flash plug-in to play the video',
            adBlock: {
                title: 'Please disable ad block',
                message: 'This video is unavailable because we were unable to load a message<br/>from our sponsors. If you are using ad blocking software, please disable it and reload the page.'
            },
            autoplay: 'Autoplay',
            on: 'on',
            off: 'off',
            firefoxUpgrade: {
                title:   'Your version of Firefox is no longer supported.',
                message: '<a href="http://download.cnet.com/s/firefox/" target="_blank">Click here to download the latest version.</a>'
            },
            cannotPlay: 'This device is unable to play the requested video.'
        }
    };

    return translations[edition.getLanguage()];
});

define('components/tr-video',[
    'jquery',
    'version!fly/managers/debug',
    'managers/page-vars',
    'utils/cookie',
    'managers/tealium',
    'version!fly/utils/url-helper',
    'managers/components',
    'managers/device',
    'managers/client-storage',
    'translations/video',
    'managers/waypoints',
    'managers/tracking',

    'uvpjs',
    'version!fly/components/base',
    'version!libs/waypoints/inview',
    'version!libs/lazyload'
], function (
    $,
    debug,
    pageVars,
    cookie,
    tealiumMgr,
    urlHelper,
    componentManager,
    device,
    storage,
    translations,
    waypoints,
    trackingMgr
) {
    var namespace = 'trVideo';
    debug = debug.init(namespace);

    // Initialize the waypoints manager so that waypoints are refreshed periodically.
    waypoints.init();

    window.mpulseUserTiming = {
        'trvideocreate' : 0,
        'playerloaded'    : 0,
        'showplayoverlay' : 0,
        'adstart'         : 0,
        'adend'           : 0,
        'contentstart'    : 0
    };

    /**
     * The number of players that have been initialized since the initial page load.  Used for applying unique ids to
     * new players as they are added to the page.
     *
     * @property playersInitialized
     * @type number
     * @default 0
     */
    var playersInitialized = 0;

    /**
     * The uvp video manager responsible for creating and keeping track of all video players.
     *
     * @property videoManager
     * @type object
     * @default instance of uvpjs.VideoManager
     */
    var videoManager = new window.uvpjs.VideoManager();

    /**
     * trVideo
     *
     * @class $.tr.trVideo {uvp}
     * @extends $.fly.base
     * @constructor
     *
     * @param [prepend=false] {boolean} Whether or not a special video should be prepended to this player's playlist.
     */
    $.widget('tr.trVideo', $.fly.base, {
        options:{
            autoplay: false,
            prepend: false,
            uvpPartner: 'techrepublic',
            idPrefix: 'videoPlayer',
            classPlaybackStarted: 'playbackStarted',
            classPlaying: 'playing',
            vidInfoContainer: false,
            initialPageLoad: true,
            mutedVideoCountThreshold: false,
            blurredVideoCountThreshold: false
        },
        /**
         * Video object
         *
         * @property video
         * @type object
         * @default null
         */
        video: null,

        /**
         * Array of video objects
         *
         * @property playlist
         * @type array
         * @default []
         */
        playlist: [],

        /**
         * Config object, comes from video.yml
         *
         * @property config
         * @type object
         * @default null
         */
        config: null,

        /**
         * Video player DOM object
         *
         * @property player
         * @type object
         * @default null
         */
        player: null,

        /**
         * Is current video an ad
         *
         * @property isAd
         * @type bool
         * @default false
         */
        isAd: false,

        /**
         * Are ads being supressed
         *
         * @property suppressAds
         * @type bool
         * @default false
         */
        suppressAds: false,

        /**
         * Is the video player currently playing
         *
         * @property isPlaying
         * @type bool
         * @default false
         */
        isPlaying: false,

        /**
         * Has the player started at least one video
         *
         * @property hasPlayed
         * @type bool
         * @default false
         */
        hasPlayed: false,

        /**
         * Time stamp when content starts. Used for Chartbeat tracking.
         *
         *
         * @property contentStartTimeStamp
         * @type Date
         * @default null
         */
        contentStartTimeStamp: null,

        /**
         * Flag for when AMP player has scrolled into viewport
         *
         * @property ampPlayerSeen
         * @type boolean
         * @default false
         */
        ampPlayerSeen: false,

        /**
         * Whether or not amp integration has occurred
         *
         * @property isAmpReady
         * @type boolean
         * @default false
         */
        isAmpReady: false,

        /**
         * Whether or not the player has been initialized.  Used to avoid initializing the player more than once which
         * could occur if autoplay on scroll is enabled.
         *
         * @property initialized
         * @type boolean
         * @default false
         */
        initialized: false,

        /**
         * Contains various error strings
         *
         * @property errorDetails
         * @type object
         * @default object
         */
        errorDetails: {
            MANIFEST_LOAD_ERROR: 'manifestLoadError',
            MANIFEST_LOAD_TIMEOUT: 'manifestLoadTimeOut',
            MANIFEST_PARSING_ERROR: 'manifestParsingError',
            MANIFEST_INCOMPATIBLE_CODECS_ERROR: 'manifestIncompatibleCodecsError'
        },

        /**
         * Contains player panel overlay objects
         *
         * @property panels
         * @type object
         * @default object
         */
        panels: {},

        /**
         * Tracks whether we have received firstGesture event
         *
         * @property haveFirstGesture
         * @type boolean
         * @default false
         */
        haveFirstGesture: false,

        /**
         * Muted autoplay
         *
         * @property mutedAutoplayEnabled
         * @default false
         */
        mutedAutoplayEnabled: false,

        /**
         * Tracks whether a new playlist has been requested, but has not started playback.
         *
         * @property startingNewPlaylist
         * @type boolean
         * @default false
         */
        startingNewPlaylist: false,

        /**
         * The number of videos watched
         *
         * @property video
         * @type int
         * @default 0
         */
        watchedVideoCount: 0,

        /**
         * Tracks whether window has focus or not
         *
         * @property windowHasFocus
         * @type boolean
         * @default true
         */
        windowHasFocus: true,

        /**
         * A list of event handlers for uvp events.  For more information about these events and more, see:
         * http://vtstage.cbsinteractive.com/sites/uvpjs/docs/api/global.html#EventType
         *
         * @property uvpEvents
         * @type object
         * @default an object populated with functions
         */
        uvpEvents: {
            adError: function (data) {
                // Track the error.
                this._trackEvent('logError', 'trackVideoAdError', data);

                // Log what caused the ad to fail.
                if (this.suppressAds) {
                    debug.error('UVPJS encountered a potentially fatal ad creative exception:', data);
                } else {
                    debug.info('Ad failed to load because ads are being suppressed.', data);
                }
            },
            controlMute: function(data) {
                // Player is muted
            },
            controlUnmute: function(data) {
                if (this.panels.unMutePanel) {
                    this.panels.unMutePanel.fadeOut();
                }
            },
            controlPlay: function (data) {
                // Hide all panels when play button is pressed
                this._hidePanels();
            },
            firstGesture: function (data) {
                if (this.haveFirstGesture) {
                    return;
                } else {
                    this.haveFirstGesture = true;
                }

                var self = this;
                var videoElement = this.$element.find('#content_' + this.id + " video")[0];

                // If playlist has been paused
                if (this.playlistPaused && videoElement && (data.payload.info.isMuteButton || data.payload.info.isVolumeButton)) {
                    videoElement.src = window.uvpjs.b64TestVideo;

                    if (p) { // we got a Promise
                        p.then(function () {
                            debug.log("Promise fulfilled...");
                            if (self.player.getPlayerMuted()) {
                                self.unmute();
                            }
                            self._resumePlaylist();
                        }).catch(function (e) {
                            debug.error("Promise not met...", e);
                        });
                    } else {
                        debug.log("no Promise");
                    }
                } else {
                    self.unmute();
                }
            },
            onAdBlocked: function (data) {
                // Track the blocked ad.
                this._trackEvent('logError', 'trackVideoAdBlocked', data);

                // Log what caused the ad to fail.
                if (this.suppressAds) {
                    debug.error('UVPJS encountered a potentially fatal ad creative blockage:', data);
                } else {
                    debug.info('Ad failed to load because ads are being suppressed.', data);
                }
            },
            onAdEnd: function (data) {
                this.isAd = false;
                this._trackPerformanceEvent('adend');
                this.element.removeClass('ad_playing');
            },
            onAdPodStart: function (data) {
                this._trackPerformanceEvent('adpodstart');
            },
            onAdStart: function (data) {
                this.isAd = true;
                this._trackPerformanceEvent('adstart');
                this.panels.unMutePanel.appendTo($('#ad_videoPlayer1')[0]);
                this._stopLoading();
                this.element.addClass('ad_playing');
            },
            onContentEnd: function (data) {
                this._trackPerformanceEvent('contentend');

                // Count video as watched
                this.watchedVideoCount++;
            },
            onContentStart: function (data) {
                this.isAd = false;
                this._trackPerformanceEvent('contentstart');
                this.panels.unMutePanel.appendTo($('#panel_videoPlayer1')[0]);
                // Set/reset time stamp
                this.contentStartTimeStamp = new Date().getTime();
                this._stopLoading();
            },
            onResourceEnd: function (data) {

                if (this.testName === 'vid_focus_muted' && $.inArray(this.testGroup, ['a', 'b', 'c']) > -1) {
                    if (!this.windowHasFocus && (this.watchedVideoCount === this.options.blurredVideoCountThreshold)) {
                        // Check if window has focus
                        debug.log("onResourceEnd: paused out of focus playlist after " + this.options.blurredVideoCountThreshold + " videos");
                        this._pausePlaylist();
                    } else if (this.mutedAutoplayEnabled && this.player.getPlayerMuted() && !this.haveFirstGesture) {
                        // Pause playback if the player is autoplaying muted, and has reached threshold
                        debug.log("onResourceEnd: paused muted playlist after " + this.options.mutedVideoCountThreshold + " videos");
                        if (this.watchedVideoCount === this.options.mutedVideoCountThreshold) {
                            this._pausePlaylist();
                        }
                    } else {
                        if (!this.startingNewPlaylist) {
                            //Start the playlist over again
                            //Verify that content matches last video in playlist. 'playlistLength' can incorrectly be 0 when destroyPlaylist() is called.
                            var lastItem = this.playlist[this.playlist.length - 1];
                            if (data.payload.rco && data.payload.rco.id === lastItem.id) {
                                this._setPlaylist(this.playlist);
                            }
                        }
                    }
                } else {
                    if (!this.startingNewPlaylist) {
                        //Start the playlist over again
                        //Verify that content matches last video in playlist. 'playlistLength' can incorrectly be 0 when destroyPlaylist() is called.
                        var lastItem = this.playlist[this.playlist.length - 1];
                        if (data.payload.rco && data.payload.rco.id === lastItem.id) {
                            this._setPlaylist(this.playlist);
                        }
                    }
                }

            },
            onResourceStart: function (data) {
                this.startingNewPlaylist = false;

                // Store the current video.
                this.video = this._getVideoFromPlaylist(data.payload.rco.id) || data.payload.rco;
                this._lazyLoadImages();

                if (this.options.initialPageLoad) {
                    this.options.initialPageLoad = false;
                    debug.log('Skip updating metadata and video info on initial page load');
                } else {
                    this._updateVideoInfoHtml();
                    this._updateMetadata();
                }
            },
            onStateChange: function (data) {
                this.contentVideoState = (data.payload.isAd) ? -2 : data.payload.newState;

                switch (data.payload.newState) {
                    case 0:
                        // Stop
                        debug.info('onStateChange: stop');
                        this.isPlaying = false;
                        this.$element.removeClass(this.options.classPlaying);
                        break;
                    case 1:
                        // Play
                        debug.info('onStateChange: play');
                        this.isPlaying = true;
                        this.$element.addClass(this.options.classPlaying);
                        this.$element.addClass(this.options.classPlaybackStarted);
                        this.$element.parent().find('.videoPromo').fadeOut();
                        break;
                    case 2:
                        // Pause
                        debug.info('onStateChange: pause');
                        this.isPlaying = false;
                        this.$element.removeClass(this.options.classPlaying);
                        break;
                }
            },
            onVideoProgress: function (data) {
                //If the video is in an iframe, trigger video progress event to the parent.
                if (parent.window) {
                    try {
                        parent.$(parent.document).trigger('onIframeVideoProgress', [this.video.id]);
                    } catch (e) {
                        //debug.log('error: ', e);
                    }
                }
            },
            playerStartError: function (data) {
                // Throw an error about the player failing to start.
                debug.error('UVPJS encountered a fatal exception starting the player: ', data);

                // Track the error.
                this._trackEvent('logError', 'trackPlayerStartError', data);
            },
            videoPlaybackError: function (data) {
                // Throw an error about the video failing to play.
                debug.error('UVPJS encountered a fatal exception while playing the video: ', data);

                // Check error type
                if (data.payload && data.payload.errorInfo) {
                    var errorMsg = data.payload.errorInfo.message || "";
                    if (errorMsg.indexOf(this.errorDetails['MANIFEST_INCOMPATIBLE_CODECS_ERROR']) > -1) {
                        // Halt playback, nothing more can be done if codec is not supported.
                        $('[data-video-info]').empty();
                        this.player.destroyPlaylist();
                    }
                }

                // Track the error.
                this._trackEvent('logError', 'trackVideoPlaybackError', data);
            },
            videoStartError: function (data) {
                // If the IMA plugin failed, disable ads until the next page hard load; otherwise, just log the error.
                if (data && data.payload && data.payload.errorInfo && 1001 === data.payload.errorInfo.errorCode && !this.suppressAds) {
                    // Throw a warning about the IMA plugin failing to load.
                    debug.warn('IMA failed to load; attempting to play video without ads due to UVPJS exception:', data);

                    // Track the error.
                    this._trackEvent('logError', 'trackVideoStartImaError', data);
                } else {
                    // Throw an error about the video failing to start.
                    debug.error('UVPJS encountered a fatal error starting the video: ', data);

                    // Track the error.
                    this._trackEvent('logError', 'trackVideoStartError', data);
                }
            }
        },


        /**
         * Sets player type, UVP listener, and initializes player
         *
         * @param options
         * @private
         * @method _create
         */
        _create: function(options) {
            debug.log('player', this.options);
            debug.log('playlist', this.options.playlist);
            var self = this;

            this.config = this.options.config;
            debug.log('config', self.config);

            window.cbsoptanon.onScriptsReady(function(cmp) {
                cmp.ot.awaitInitialConsent(function() {
                    cmp.ot.getState(function(targeting, performance, functional, social) {
                        var oneTrust = {
                            'targeting': targeting,
                            'performance': performance,
                            'functional': functional,
                            'social': social
                        };
                        var uvp_sOpts = self._getUvpConfigs(oneTrust);
                        self._initialize(uvp_sOpts);
                    });
                });
            });
        },

        /**
         * Initializes  UVP player
         *
         * @param uvp_sOpts
         * @private
         * @method _initialize
         */
        _initialize: function(uvp_sOpts) {
            var self = this;

            require([
                'optional!' + (uvp_sOpts.oneTrust.targeting ? 'comscore-video' : 'feature-disabled'),
                'optional!' + (!pageVars.services.googleima || !pageVars.services.googleima.enabled ? 'feature-disabled' : 'google-ima'),
                'optional!' + (-1 !== window.location.hash.indexOf("amp=1") ? 'video-iframe-integration' : '')
            ], function () {
                self._setup();

                // Check if device can play any supported video type
                var mc = window.uvpjs.mediaCapabilities;
                if (!(mc.canPlayType('video/mp4') || mc.canPlayNativeHLS() || mc.canPlayHLSJS())) {
                    debug.error('This device is unable to play supported video types.');
                    self.$element.html('<h3 class="cannotPlay">' + translations.cannotPlay + '</h3>');
                    return false;
                }

                // Prepend a video if requested; otherwise, remove the prepend video's promo.
                if (self.options.prepend && pageVars.video.prepend && !cookie.read('viewedPrepend')) {
                    self.options.playlist.unshift(pageVars.video.prepend);
                    cookie.write('viewedPrepend', '1', {
                        expires: 1
                    });
                } else {
                    self.$element.find('.prepend.videoPromo').remove();
                }

                self.testGroup = pageVars.tracking.data.testGroup;
                self.testName = pageVars.tracking.data.testName;
                debug.log('A/B Test info:', self.testName, self.testGroup);

                // Keep track of the number of players that have been initialized.
                playersInitialized++;

                // Assign a unique id to the player for the sake of uvp.
                self.id = self.options.idPrefix + playersInitialized;
                self.$element.attr('id', self.id);

                if (navigator.userAgent.indexOf('Trident/7.0') > 0) self.$element.parent().addClass('ie11');

                self._initIframeTracking();

                // Initialize the uvp video manager.
                videoManager.initialize(uvp_sOpts, function (sysInfo) {
                    // onVideoManagerReady
                    self.systemInfoObject = sysInfo;
                    debug.log('onVideoManagerReady');
                    debug.log('sysInfo', sysInfo);

                    // Add listener for PLAYER_INIT event to get an early reference to player (in non-autoplay scenarios)
                    videoManager.addEventListener(window.uvpjs.EventType.PLAYER_INIT + '.' + self.id, function (data) {
                        if (self.id === data.target) {
                            self.player = data.payload.player;

                            if ( -1 !== window.location.hash.indexOf("amp=1") ) {
                                self._setupAmpIntegration(data.payload.player);
                            }

                            // Echo the event for other components that might need to react to it.
                            self.$element.trigger("onVideoPlayerReady", self.video);
                            debug.log("onVideoPlayerReady");
                        }
                    });

                    // Remove loading class
                    self._stopLoading();

                    // Prepare data that is reused across the component.
                    self._setupData();

                    // Setup buttons outside the player that need to interact with it.
                    self._setupExternalEvents();

                    if (self.testName === 'mobile_autoplay' && self.testGroup === 'a') {
                        self._setupScrollingAutoplay();
                    } else {
                        self._setupPlayer();
                    }

                    if (self.testName === 'vid_focus_muted') {
                        if (self.testGroup === 'a') {
                            self.options.blurredVideoCountThreshold = 3;
                            self.options.mutedVideoCountThreshold = 3;
                        } else if (self.testGroup === 'b') {
                            self.options.blurredVideoCountThreshold = 5;
                            self.options.mutedVideoCountThreshold = 5;
                        } else if (self.testGroup === 'c') {
                            self.options.blurredVideoCountThreshold = 10;
                            self.options.mutedVideoCountThreshold = 10;
                        }
                    }

                });

                require(['optional!version!libs/mpulse'],function(mPulse){
                    window.mPulseApp = mPulse.init("5VS23-BHL36-JUED4-78U6Z-ZT97H", "4fdc7002-fadc-4bd1-8244-c640e9960b3c");
                });

                self._trackPerformanceEvent('trvideocreate');
            });
        },

        /**
         * When player is in an IFRAME, copy pageVars from parent window
         *
         * @private
         * @method _initIframeTracking
         */
        _initIframeTracking: function() {
            // Handle tracking for iFrames
            if (window.trPageVars.pageType == "video_share") {
                if ( window.location !== window.parent.location ) {
                    // The page is in an iframe
                    try {
                        window.utag_data = window.parent.utag_data;
                        pageVars = window.parent.trPageVars;
                        debug.log('updated trPageVars', pageVars);
                    } catch(e) {
                        debug.log("Couldn't get trPageVars from parent");
                    }
                } else {
                    debug.log('page is not in iFrame');
                }
            } else {
                debug.log('page is not a share page');
            }
        },

        /**
         * Set/update Heartbeat metadata
         *
         * @private
         * @method _setPageContextMetadata
         */
        _setPageContextMetadata: function () {
            var authors = [];
            if (typeof this.video.author !== 'undefined' && this.video.author !== null) {
                if (this.video.author.firstName && this.video.author.lastName) {
                    authors.push(this.video.author.firstName + " " + this.video.author.lastName);
                }
            }
            if (typeof this.video.moreAuthors !== 'undefined' && this.video.moreAuthors !== null) {
                $.each(this.video.moreAuthors, function (key, author) {
                    if (author.firstName && author.lastName) {
                        authors.push(author.firstName + " " + author.lastName);
                    }
                });
            }
            var videoAuthors = null;
            if (authors.length > 0) {
                videoAuthors = authors.join(',').toLowerCase();
            }

            this.player.setPageContextMetadata(tealiumMgr.getHbParams({ 'videoAuthor': videoAuthors }));
        },

        /**
         * Creates options needed for UVP
         *
         * @param oneTrust enabled services
         * @private
         * @method _getUvpConfigs
         */
        _getUvpConfigs: function(oneTrust) {
            debug.log("_getUvpConfigs");

            // Enable / Disable based on OneTrust settings
            $.each(this.config.modules, function (key, module) {
                switch(module.one_trust_category) {
                    case 'targeting':
                        module.enabled = oneTrust.targeting;
                        break;
                    case 'performance':
                        module.enabled = oneTrust.performance;
                        break;
                    case 'functional':
                        module.enabled = oneTrust.functional;
                        break;
                    case 'social':
                        module.enabled = oneTrust.social;
                        break;
                }
            });

            this.config.modules.push(
                {
                    name: 'UVPJSDebug',
                    category: 'internal',
                    enabled: document.location.search.indexOf('trVideo') > 0,
                    params: [{
                        name: "showAll",
                        value: true
                    }]
                }
            );

            var uvp_sOpts = {
                capLevelToPlayerSize: true,
                partner: this.options.uvpPartner,
                netwk: "techrepublic",
                cms: "platform",
                uvpc: this.config,
                usesIMA: true,
                //usesTealium: true,
                playsInline: true,
                skin: true,
                'oneTrust': oneTrust
            };

            debug.log('uvp_sOpts', uvp_sOpts);

            return uvp_sOpts;
        },

        /**
         * Play the video player.
         *
         * @public
         * @method play
         */
        play: function() {
            debug.log('Play');
            if (this.player) {
                this.player.playVideo();
            } else {
                this.$element.find('.uvpjs__btn-preview').trigger('click');
            }
        },

        /**
         * Update displayed video info in surrounding HTML with info from the video object.
         *
         * @private
         * @method _updateVideoInfoHtml
         *
         * @private
         */
        _updateVideoInfoHtml: function() {
            if (this.options.vidInfoContainer) {
                var $container = $(this.options.vidInfoContainer);
                if($container.length > 0) try {
                    $container.find('[data-video-info-title]').text(this.video.title || '');
                    $.get("/videos/video-details-xhr/" + this.video.slug + "/", function(videoInfoHtml) {
                        $container.html(videoInfoHtml);
                        componentManager.process($container);
                    }.bind(this), 'html');
                } catch(e) {
                    // couldn't update video-info
                }
            }

            // Update Watch and Read title
            this.$element.parent().find('[data-video-info-title]').text(this.video.title || '');
        },

        /**
         * Returns whether the browser can play HLS media
         *
         * @public
         * @method canPlayHls
         * @returns {boolean}
         */
        canPlayHls: function() {
            var ms = window.MediaSource || window.WebKitMediaSource;
            return typeof(ms) != 'undefined' || window.uvpjs.mediaCapabilities.canPlayNativeHLS() === true;
        },

        /**
         * Build the media url used in the video selector request.
         *
         * @private
         * @method _getMediaUrl
         *
         * @param video {object} The video to generate the media url from.
         *
         * @returns {string} The media url as an m3u8 file if supported, mp4 otherwise.
         */
        _getMediaUrl: function(video) {
            var mc = window.uvpjs.mediaCapabilities,
                canPlayHls = !device.isAndroid() && (mc.canPlayNativeHLS() || mc.canPlayHLSJS()),
                mediaUrl = video.mp4;

            // Prefer m3u8 over mp4 if possible.
            if (canPlayHls && video.m3u8) {
                // Determine the device type the video should play for; this may not match up with the actual device being used.
                var deviceType = 'ott';
                if (device.isMobileUserAgent() || device.isIPhone()) {
                    deviceType = 'mobile';
                } else if (device.isIPad() || mc.isChromeOS()) {
                    deviceType = 'tablet'; // ChromeOS doesn't support the highest-bitrate video files, give it the tablet subset
                }

                // Build the m3u8 url.
                mediaUrl = video.m3u8;
                mediaUrl += mediaUrl.indexOf('?') == -1 ? '?' : '&'; // TODO: Can m3u8 actually have a query string?
                mediaUrl += 'device=' + deviceType;

                if (video.changeHost) {
                    mediaUrl += '&change-to-host=techrepublicvideo.cbsistatic.com';
                }

                mediaUrl += "&secure=true";
            }

            return mediaUrl;
        },

        /**
         * Get the uvp configs for the current playlist of videos.
         *
         * @private
         * @method _getPlaylistConfigs
         *
         * @param playlist {Array} The playlist of videos to get configs for.
         *
         * @returns {Array} A list of config objects, one per video in the playlist.
         */
        _getPlaylistConfigs: function(playlist) {
            var self = this;
            var playlistConfigs = {};

            playlistConfigs = playlist.map(function(video, index) {
                return {
                    cmsRefGuid: video.id,
                    mediaId: video.id,
                    id: video.id,
                    duration: video.duration,
                    index: index,
                    adCall: '//pubads.g.doubleclick.net/gampad/ads?' + self._getAdUrl(video, index),
                    assetURL: self._getMediaUrl(video),
                    seriesTitle: 'TechRepublic Video',
                    type:           self.suppressAds ? window.uvpjs.mediaCapabilities.RP_URL : window.uvpjs.mediaCapabilities.RP_IMA,
                    vidContId:    self.id,
                    videoTitle:   video.title,
                    slug:         video.slug
                };
            });

            debug.log('playlistConfigs', playlistConfigs);
            return playlistConfigs;
        },

        /**
         * Builds the ad url
         *
         * @public
         * @method _getAdUrl
         *
         * @param video {object} The video to generate the ad config url from.
         * @param index {int} Index of video in playlist
         *
         * @return {String}
         */
        _getAdUrl: function(video, index) {
            debug.log("getAdUrl");
            var self = this;
            var baseUrl = "sz={param:sz}&iu=/8264/vaw-techrepublic/{param:device}/{param:partner}&ciu_szs={param:ciu_szs}&impl=s&gdfp_req=1&env=vp&output={param:output}&unviewed_position_start=1&url={param:referrer_url}&description_url={param:referrer_url}&correlator={param:timestamp}&cmsid=2289&vid={param:mpxRefId}&pp={param:pp}&cust_params=";
            var customParams = "vid={param:mpxRefId}&ptype={param:ptype}&vguid={param:vguid}&session={param:session}&subses={param:sub_session}&microsite={param:microsite}&campaign={param:campaign}&cid={param:cid}&collection={param:collection}&mfr={param:mfr}&carrier={param:carrier}&section={param:section}&userGroup={param:userGroup}&tag={param:tag}&edition={param:edition}&test={param:test}&score={param:score}&feat={param:feat}&subcollection={param:subcollection}&topic={param:topic}&sectopic={param:sectopic}";
            var adData = pageVars.ads.data.gpt;

            var params =  {
                sz:             (this.mutedAutoplayEnabled && index === 0) ? "640x483" : "640x480",
                device:         ((pageVars.tracking.data.deviceType === "mobile") ? 'mobile_web' : 'desktop'),
                partner:        ((pageVars.tracking.data.deviceType === "mobile") ? 'techrepublic_mobile' : 'techrepublic'),
                ciu_szs:        "300x60",
                output:         "xml_vmap1",
                microsite:      (typeof(pageVars.ads.data.gpt.targeting.microsite) === 'string' ? pageVars.ads.data.gpt.targeting.microsite : ''),
                campaign:       '', /* unused? */
                referrer_url:   location.protocol + "//" + location.host + location.pathname,
                timestamp:      new Date().getTime(),
                ptype:          pageVars.tracking.data.pageType,
                vguid:          pageVars.guid,
                session:        pageVars.ads.data.gpt.targeting.session,
                sub_session:    pageVars.ads.data.gpt.targeting.subses,
                cid:            pageVars.ads.data.gpt.targeting.cid,
                collection:     pageVars.ads.data.gpt.targeting.collection,
                subcollection:  adData.targeting.subcollection,
                mfr:            adData.targeting.mfr,
                carrier:        adData.targeting.carrier,
                section:        pageVars.tracking.data.siteSection,
                userGroup:      adData.targeting.userGroup,
                tag:            adData.targeting.tag,
                edition:        adData.targeting.edition,
                test:           adData.targeting.test,
                score:          adData.targeting.score,
                feat:           adData.targeting.feat,
                mpxRefId:       video.mpxRefId,
                //topic:          video.primaryTopic.slug,
                sectopic:       video.secondaryTopics,
                pp:             ((pageVars.tracking.data.deviceType === "mobile") ? 'ssai' : 'vpaid_js'),
            };

            // Set any adTargeting_{key} query string params that are on the url.
            $.each(urlHelper.getAllParams(), function(key, value) {
                var adTargetingMatch = key.match(/adTargeting_(.+)/);
                if (adTargetingMatch && adTargetingMatch[1]) {
                    params[adTargetingMatch[1]] = value;
                } else if (key === 'adNetwork') {
                    params['network'] = value;
                }
            });

            $.each(params, function(key, value) {
                var re = new RegExp("{param:" + key + "}", "g");
                baseUrl = baseUrl.replace(re, self.cleanVar(value));
                customParams = customParams.replace(re, self.cleanVar(value));
            });

            // Add NPA for One Trust
            var npa = null;
            cbsoptanon.ads.getNpaFlag(function(flag) {
                npa = flag;
            });

            var adUrl = baseUrl + encodeURIComponent(customParams);

            if (npa !== null) {
                adUrl += '&npa=' + npa
            }

            return  adUrl;
        },

        /**
         * Returns value or empty string if undefined
         *
         * @public
         * @method cleanVar
         *
         * @returns {*}
         */
        cleanVar: function(v) {
            if (v === undefined || v == "||") {
                return '';
            }
            return v;
        },

        /**
         * Format seconds as time string (ex. 90 = 01:30)
         *
         * @private
         * @method _formatTime
         */
        _formatTime: function (seconds) {
            seconds = !isNaN(parseInt(seconds, 10)) ? seconds : 0;
            var date = new Date(null);
            date.setSeconds(seconds);
            return date.toISOString().substr(14, 5);
        },

        /**
         * Pauses video player
         *
         * @public
         * @method pause
         */
        pause: function() {
            debug.log('pause');
            if (this.player) {
                this.player.pauseVideo();
            }
        },

        /**
         * Pause the playlist.
         *
         * @private
         * @method _pausePlaylist
         */
        _pausePlaylist: function() {
            debug.log('_pausePlaylist');
            this.player.pausePlaylist();
            this.playlistPaused = true;

            // Unmute the player
            if (this.player.getPlayerMuted() && this.haveFirstGesture) {
                this.unmute();
            }
        },

        /**
         * Resume a paused playlist.
         *
         * @private
         * @method _resumePlaylist
         */
        _resumePlaylist: function() {
            debug.log('_resumePlaylist');
            this.player.resumePlaylist();
            this.playlistPaused = false;
        },

        /**
         * Replace the current playlist with a new one, and play the new one.  If the previous playlist was playing,
         * it will be stopped.
         *
         * @private
         * @method _setPlaylist
         *
         * @param playlist {Array} The new playlist to replace the previous one.
         */
        _setPlaylist: function(playlist) {
            if(playlist.length > 0) {

                // Set flag that new playlist has been requested
                this.startingNewPlaylist = true;

                debug.log('_setPlaylist',playlist);
                // Store the new active playlist.
                this.playlist = playlist;

                // Stop and clear any playlist that is currently playing.
                this.player.destroyPlaylist();

                // Play the new playlist.
                this.player.addResourcesToPlaylist(this._getPlaylistConfigs(playlist));

            } else {
                debug.error('No videos found in the playlist.');
            }
        },

        /**
         * Appends additional videos to current playlist
         *
         * @public
         * @method appendPlaylist
         *
         * @param additionalVideos array List of videos to add to playlist
         */
        appendPlaylist: function(additionalVideos) {
            if(additionalVideos.length > 0) {
                // If playlist is already set, add the additional videos to it.
                if (this.playlist.length > 0) {
                    // Update options playlist so that these new videos don't get removed later when setplaylist is called.
                    this.options.playlist = this.options.playlist.concat(additionalVideos);

                    // Store the new active playlist.
                    this.playlist = this.options.playlist;

                    if(this.player) {
                        this.player.addResourcesToPlaylist(this._getPlaylistConfigs(additionalVideos));
                    }
                } else {
                    this.options.playlist = this.options.playlist.concat(additionalVideos);
                }
            } else {
                debug.error('No videos found in the playlist.');
            }

            debug.log('appendPlaylist: new videos', additionalVideos);
            debug.log('appendPlaylist: new playlist', this.options.playlist);
        },

        /**
         * Get a video from the playlist by its id.
         *
         * @private
         * @method _getVideoFromPlaylist
         *
         * @param index {string} The index of the video to find.
         *
         * @return {object} The video object matching the id or null if none was found.
         */
        _getVideoFromPlaylist: function(id) {
            // Get all videos from the playlist that match the id (there should only be one).
            var matchingVideos = this.playlist.filter(function(video) {
                return video.id === id;
            });

            // Return the first matching video and assume the rest are duplicates.
            return matchingVideos[0] || null;
        },

        /**
         * Used to play a video from elsewhere on the page
         *
         * @public
         * @method playVideoClip
         *
         * @param videoClip video object
         */
        playVideoClip: function(videoClip) {
            var self = this;
            debug.log('playVideoClip', videoClip);

            if (videoClip.id === this.video.id) {
                debug.log('playVideoClip: new video id same as current');
                return;
            }

            // Is new video in current playlist?
            var index = -1;
            $.each(this.playlist, function(idx) {
                if (self.playlist[idx].id === videoClip.id) {
                    index = idx;
                    return false;
                }
            });

            if (index > -1) {
                // Reorder playlist with selected first first.
                var playlistStart = this.playlist.slice(index);
                var playlistEnd = this.playlist.slice(0, index);
                this.playlist = playlistStart.concat(playlistEnd);
            } else {
                // If video is no longer in playlist, add it to the beginning and play
                this.playlist = [videoClip].concat(this.playlist);
            }

            // Play new playlist
            this._setPlaylist(this.playlist);
        },

        /**
         * Lazy loads in all eligible images.
         *
         * @private
         * @method _lazyLoadImages
         */
        _lazyLoadImages: function() {
            debug.log('lazyLoadImages');
            this.$element.find("img.lazythumb").lazyload({
                failure_limit : 2000,
                skip_invisible : false,
                threshold : 200
            });
        },

        /**
         * Fire a video tracking event ping.
         *
         * @private
         * @method _trackEvent
         *
         * @param eventName {string} The name of the event to fire (pev2).
         * @param action {string} The action to track (v46).
         * @param uvpData {object} Event data provided by uvp.
         * @param additionalData {object} Any additional tracking-related data that should be included.
         */
        _trackEvent: function (eventName, action, uvpData, additionalData) {

            // Temporarily disable logError tracking. CNETDEV-17846
            if (eventName === "logError") {
                return;
            }

            // Provide default additional data if none was provided.
            additionalData = additionalData || {};

            // Generate an error code for the event if there is an error.
            var error = '';

            if (uvpData.errorInfo) {
                var internalErrorCode = uvpData.errorInfo.errorCode || 'null';
                var externalErrorCode = uvpData.errorInfo.serverCode || 'null';

                // HLSJS_PLAYBACK_ERROR is a very generic error; extract a more detailed error ID from the message.
                if (3005 === internalErrorCode && 'string' === typeof uvpData.errorInfo.message) {
                    var message = uvpData.errorInfo.message.split(' ');
                    externalErrorCode += '_' + message[message.length - 1];
                }

                // Build the error code.
                error = internalErrorCode + '_' + externalErrorCode;
            }

            // Check if the error is a noisy error.
            var isBufferError = -1 < error.indexOf('3005_null_buffer');
            var isBitrateError = -1 < error.indexOf('3005_null_levelLoad');
            var isErrorSuppressable = isBufferError || isBitrateError;

            // Ensure there is an active video and suppress tracking noisy errors.
            if (!isErrorSuppressable && this.video) {
                // Fire the tracking ping.
                tealiumMgr.trackCustomEvent(eventName, $.extend(true, {
                    articleAuthorId: this.video.author ? [this.video.author.id] : null,
                    articleAuthorName: this.video.author ? [this.video.author.firstName + ' ' + this.video.author.lastName] : null,
                    articleId: pageVars.tracking.data.articleId,
                    articleTitle: pageVars.tracking.data.articleTitle,
                    articleType: pageVars.tracking.data.articleType,
                    brand: pageVars.tracking.data.brand,
                    channel: 'video',
                    clickGenericText: action, // v46
                    collectionId: this.video.primaryCollection ? [this.video.primaryCollection.id] : null,
                    deviceType: pageVars.tracking.data.deviceType,
                    error: error,
                    pageType: pageVars.tracking.data.pageType,
                    siteEdition: pageVars.tracking.data.siteEdition,
                    siteHier: pageVars.tracking.data.siteHier,
                    siteSection: pageVars.tracking.data.siteSection,
                    siteType: pageVars.tracking.data.siteType,
                    videoAdIds: uvpData.adData ? uvpData.adData.adVideoId : null,
                    videoAdTitle: uvpData.adData ? uvpData.adData.adVideoTitle : null,
                    videoContentType: 'video',
                    videoId: this.video.id,
                    videoTitle: this.video.title || this.video.headline,
                    _pageChannelType: pageVars.tracking.data._pageChannelType,
                    _pageTitle: pageVars.tracking.data._pageTitle,
                    _pageViewGuid: pageVars.tracking.data._pageViewGuid
                }, additionalData));
            }
        },

        /**
         * Soasta tracker to monitor performance
         *
         * @public
         * @method _trackPerformanceEvent
         *
         * @param cval
         */
        _trackPerformanceEvent: function(cval) {
            // Publicly announce video performance events.
            debug.log('Firing event: techrepublic_video.' + cval);
            pageVars.video = pageVars.video || {};
            pageVars.video.performance = pageVars.video.performance || {};
            pageVars.video.performance[cval] = true;

            try {
                $(window).trigger('techrepublic_video.' + cval);

                if(performance.getEntriesByName(cval)[0] === undefined) {
                    performance.mark("techrepublic_video_" + cval);
                }
            } catch (e){}

            try {
                var isFirstOccurrence = mpulseUserTiming[cval] === undefined || mpulseUserTiming[cval] === 0;
                var isTargetedPage = ['video_page', 'article'].indexOf(pageVars.tracking.data.pageType) > -1;
                if (isFirstOccurrence && isTargetedPage) {
                    mpulseUserTiming[cval] = performance.now();

                    /*
                     * The following is a mapping to capture deltas between events for mPulse
                     * [ <mPulse variable name> , '<previous event to calculate delta>']
                     *
                     * NOTE: mPulse has a character limit on variable names: 15 total = 9 here + 6 down below
                     *
                     * trvideocreate = performance timer from beginning of page life
                     * adstart = time it took for an ad to load after player was loaded
                     * adpodstart = time between playerloaded and the IMA plugin receiving the DFP response
                     */
                    var mapPerformanceSoasta = {
                        'trvideocreate' : ['create'],
                        'playerloaded'    : ['ploaded', 'trvideocreate'],
                        'adstart'        : ['adStart', 'playerloaded'],
                        'adpodstart'      : ['adPodS', 'playerloaded']
                    };

                    // Set mPulse targeting
                    window.mPulseApp.setPageGroup(pageVars.tracking.data.soastaPageType);
                    window.mPulseApp.setABTest(pageVars.tracking.data.soastaBucket);
                    window.mPulseApp.setDimension("Site View", pageVars.tracking.data.deviceType);
                    if(typeof window.BOOMR !== "undefined" && window.mPulseApp.getSessionID() !== window.BOOMR.session.ID) {
                        window.mPulseApp.setSessionID(window.BOOMR.session.ID);
                    }

                    // Get the event timestamp (relative to page load or the previous event)
                    var mpulseTimerValue =  mpulseUserTiming[cval];
                    var mpulseMapping = mapPerformanceSoasta[cval];
                    if($.isArray(mpulseMapping)) {
                        var previousEventTime = mpulseUserTiming[mpulseMapping[1]] || 0;
                        mpulseTimerValue = mpulseUserTiming[cval + '_from_' + mpulseMapping[1]] = mpulseUserTiming[cval] - previousEventTime;
                    }

                    // Send the timer to mpulse based on the above mappings
                    var mpulseVar = $.isArray(mpulseMapping) ? mpulseMapping[0] : '';
                    // don't send timers for adstart or trvideocreate - would remove the calls to this function for those
                    // as well but other timers depend on their values being set
                    if(-1 === ([ 'adstart', 'trvideocreate' ].indexOf(cval)) && mpulseVar) {
                        window.mPulseApp.sendTimer("video_" + mpulseVar, mpulseTimerValue);
                        debug.info("mpulse sendTimer",  "video_" + mpulseVar, mpulseTimerValue);
                    }

                    // Cumulative timer that runs until the first video ad starts
                    if ('adstart' === cval) {
                        window.mPulseApp.sendTimer("video_adStart_c", mpulseUserTiming[cval]);
                        debug.info("mpulse sendTimer",  "video_adStart_c", mpulseUserTiming[cval]);
                    }
                }
            } catch (e) {
                debug.log("mpulse error tracking " + cval + ": " + e);
            }
        },

        /**
         * Unmute the video player.
         *
         * @public
         * @method unmute
         */
        unmute: function () {
            debug.log('unmute');
            if (this.player && this.player.getPlayerMuted()) {
                this.player.unMute();
                this.mutedAutoplayEnabled = false;

                if (this.panels.unMutePanel) {
                    this.panels.unMutePanel.fadeOut();
                }
            }

            this._trackEvent('trackClick', 'video-player|sound|on', {});
        },

        /**
         * Get current video and player data
         *
         * @private
         * @method getVideo
         *
         * @return {object} The video object matching the id or null if none was found.
         */
        getVideo: function () {
            if (!(this.video && this.video.id)) {
                return null;
            }

            // Set autoplay type needed for Chartbeat
            var autoplayType = "MANUAL";
            if (
                (this.autoplayState === "load" ||
                    (this.autoplayState === "first" &&
                        this.$element.is(
                            $("[data-component*=" + namespace + "]").first()
                        ))) &&
                this.userAutoplayEnabled
            ) {
                if (this.playlist.length > 1) {
                    autoplayType = "CONTINUOUS";
                } else if (this.autoplayState) {
                    autoplayType = "AUTOPLAY";
                }
            }

            // Set videostate needed for Chartbeat
            var videoState;
            switch (this.contentVideoState) {
                case -2:
                    videoState = "UNPLAYED";
                    break;
                case -1:
                case 1:
                case 2:
                    videoState = "PLAYED";
                    break;
                case 0:
                    videoState = "STOPPED";
                    break;
                default:
                    videoState = "COMPLETED";
                    break;
            }

            return $.extend(true, {}, this.video, {
                autoplayType: autoplayType,
                currentPlaybackState: this.player.getCurrentPlaybackState(),
                contentStartTimeStamp: this.contentStartTimeStamp,
                mediaUrl: this._getMediaUrl(this.video).split("?")[0],
                videoState: videoState
            });
        },

        /**
         * Returns object for currently playing video
         *
         * @public
         * @method getVideoPlaylist
         *
         * @return {object}
         */
        getVideoPlaylist: function() {
            return this.playlist;
        },

        /**
         * Returns bool of if the the video player has been played
         *
         * @public
         * @method getHasPlayed
         *
         * @return boolean
         */
        getHasPlayed: function() {
            return this.hasPlayed;
        },

        /**
         * Remove instance of player
         *
         * @public
         * @method destroy
         */
        destroy: function() {
            //uvpMgr.destroyVideoPlayer();
            //videoManager.destroyVideoPlayer(id);
        },

        /**
         * Update meta data tags
         *
         * @private
         * @method _updateMetadata
         */
        _updateMetadata: function () {
            if (pageVars.tracking.data.pageType !== 'video_page') {
                return false;
            }

            var videoUrl = window.location.protocol + '//' + window.location.host + '/video/' + this.video.slug + '/' + window.location.search,
                $metaDescription = $("meta[name='description']");

            window.history.pushState(window.history.state, '', videoUrl);
            document.title = this.video.title + ' | TechRepublic';

            $(window).trigger('historystatechange');

            $('link[rel="canonical"]').attr('href', window.location.href);

            if($metaDescription.length > 0) {
                $metaDescription.attr('content', this.video.description.length > 145 ? this.video.description.substr(0,145)+'...' : this.video.description);
                $("meta[property='og:description']").attr('content', $metaDescription.attr('content'));
            }

            $("meta[property='og:url']").attr('content', window.location.href);
            $("meta[property='og:title']").attr('content', document.title);
            $("meta[property='og:image']").attr('content', this.video.previewImg);

            $("meta[property='twitter:url']").attr('content', window.location.href);
            $("meta[property='twitter:title']").attr('content', document.title);
            $("meta[property='twitter:image']").attr('content', this.video.previewImg);
        },

        /**
         * Wrapper for all uvp events.  Extra tasks include:
         * 1. Log the event.
         * 2. Ensure the event was meant for this player rather than another one.
         * 3. Echo the event off of the component element so other components can react.
         *
         * @private
         * @method _processEvent
         *
         * @param data {object} The event data provided by uvp.
         */
        _processEvent: function (data) {
            // Only proceed if the event was meant for this player.
            if (data && data.target === this.id) {
                var silencedEvents = ['onVideoProgress'];

                // Log the event if it shouldn't be silenced.
                if (silencedEvents.indexOf(data.type) < 0) {
                    debug.log(data.type, data);
                }

                // Forward the event to its respective handler.
                this.uvpEvents[data.type].call(this, data);

                // Echo the event for other components that might need to react to it.
                this.$element.trigger(data.type, this.video);
            }
        },

        /**
         * Used to determine if player is in an ad break
         *
         * @public
         * @method isAdPlaying
         */
        isAdPlaying: function () {
            return this.isAd;
        },

        /**
         * Custom amp-video-iframe integration methods for the video share page.
         *
         * `ampIntegration` is an object containing the tools
         * required to integrate.
         *
         * @private
         * @method _setupAmpIntegration
         *
         * @param player {object} Reference to UVP player
         */
        _setupAmpIntegration: function(player) {

            self = this;

            // update flag to avoid calling this function twice
            this.isAmpReady = true;

            (window.AmpVideoIframe = window.AmpVideoIframe || [])
                .push(function (ampIntegration) {
                    // `ampIntegration` is an object containing the tools required to integrate.
                    ampIntegration.method('play', function () {

                        var cpb = player.getCurrentPlaybackState();
                        var pbs = cpb.playbackStarted;
                        if (player.getCurrentPlaybackState().playbackState > 0) {
                            player.playVideo();
                        }

                    });

                    ampIntegration.method('pause', function () {
                        player.pauseVideo();
                    });

                    ampIntegration.method('mute', function () {
                        player.mute();
                    });

                    ampIntegration.method('unmute', function () {
                        player.unMute();
                    });

                    ampIntegration.postEvent('canplay');

                    player.addEventListener(uvpjs.EventType.VIDEO_PROGRESS + '.amp-' + self.id, function () {
                        ampIntegration.postEvent('playing');
                    });

                    var ampWatch = setInterval(function() {
                        ampIntegration.getIntersection(function(intersection) {

                            if (!player.getPlayerMuted()) {
                                // Player has scrolled into viewport
                                if (!self.ampPlayerSeen) {
                                    self.ampPlayerSeen = intersection && intersection.intersectionRatio > .5;
                                }

                                // Pause once when it has been seen, and is no longer visible
                                if (self.ampPlayerSeen && intersection && intersection.intersectionRatio < .5) {
                                    var pbs = player.getCurrentPlaybackState().playbackState;
                                    if (player.getCurrentPlaybackState().playbackState == 1) {
                                        player.pauseVideo();
                                        clearInterval(ampWatch);
                                    }
                                }
                            }
                        });
                    }, 250);
                });

        },

        /**
         * Setup miscellaneous video player data.
         *
         * @private
         * @method _setupData
         */
        _setupData: function () {
            // Set first video
            this.video = (this.options.playlist.length > 0) ? this.options.playlist[0] : {};

            // Determine whether or not ads should be suppressed.
            var adSuppressionString = urlHelper.getParam('adSuppress') || cookie.read('adSuppress') || '';

            this.suppressAds = this.options.suppressAds || adSuppressionString === 'all' || adSuppressionString.split(',').indexOf(namespace) >= 0 || (pageVars.services.googleima && !pageVars.services.googleima.enabled);


            debug.log('autoplay', this.options.autoplay);
            if (!(this.systemInfoObject.supportsMutedAutoplay || this.systemInfoObject.supportsUnmutedAutoplay)) {
                // Disable autoplay for mature content or unsupported
                this.autoplayState = false;
            } else {
                this.autoplayState = this.options.autoplay;
            }

            // Determine whether or not muted autoplay is allowed.
            this.mutedAutoplayEnabled = this.autoplayState && this.userAutoplayEnabled && this.systemInfoObject.supportsMutedAutoplay && !this.systemInfoObject.supportsUnmutedAutoplay;
            debug.log('mutedAutoplayEnabled', this.mutedAutoplayEnabled);
        },

        /**
         * Setup events outside the player.
         *
         * @private
         * @method _setupExternalEvents
         */
        _setupExternalEvents: function () {
            var self = this;
            this.$window.on('blur.' + this.id, function (e) {
                self.windowHasFocus = false;
            });

            this.$window.on('focus.' + this.id, function (e) {
                self.windowHasFocus = true;
            });
        },

        /**
         * Setup video player events.
         *
         * @private
         * @method _setupInternalEvents
         */
        _setupInternalEvents: function () {
            var self = this;

            // Bind this component to every uvp event handler function.
            $.each(this.uvpEvents, function (eventName) {
                self.player.addEventListener(eventName + '.' + self.id, self._processEvent.bind(self));
            });
        },

        /**
         * Adds loading class and spinner to player
         *
         * @public
         * @method _startLoading
         */
        _startLoading: function () {
            this.$element.parent().addClass('loading');
        },

        /**
         * Removes loading class and spinner from the player
         *
         * @public
         * @method _stopLoading
         */
        _stopLoading: function () {
            this.$element.parent().removeClass('loading');
            this.$element.parent().find('.videoInfo').fadeIn();
        },

        /**
         * Play the active video when the player scrolls into view, and pause it when it scrolls out of view if it is
         * muted.
         *
         * @private
         * @method _setupScrollingAutoplay
         */
        _setupScrollingAutoplay: function () {
            var self = this;

            // Helper function for playing video on scroll.
            var playVideo = function (direction) {
                // Play the video if it's ready.
                if (self.player) {
                    // For normal scrolling autoplay, play the video
                    self.play();
                } else {
                    // Otherwise, create the player so it can begin autoplaying.
                    self._setupPlayer();
                }
            };

            // Helper function for pausing video on scroll.
            var pauseVideo = function (direction) {
                // Pause the video if it's ready and playing and scrolling autoplay is currently enabled.
                // && self.$element.closest(self.options.selectorScrollingAutoplayDisabled).length === 0
                if (self.player) {
                    var playbackState = self.player.getCurrentPlaybackState();

                    if (playbackState.playbackStarted) {
                        self.pause();
                    }
                }
            };

            // Create the waypoint.
            this.scrollingAutoplayWaypoint = new Waypoint.Inview({
                element: this.$element,
                entered: playVideo, // "Entered" is for the initial page load in case the video is only partially visible and the browser pauses it automatically.
                enter: playVideo, // "Enter" is for when the video begins to scroll back into view.
                exited: pauseVideo // "Exited" is for when the video has completely scrolled out of view.
            });
        },

        /**
         * Loads related videos panel via ajax
         *
         * @public
         * @method _fetchRelatedVideosPanel
         */
        _fetchRelatedVideosPanel: function () {
            var self = this;
            debug.log('getting related videos panel');

            var relatedVideosUrl = '/videos/related-videos-xhr/' + this.video.slug + '/';

            this._startLoading();

            $.ajax({
                url: relatedVideosUrl,
                type: 'GET',
                dataType: 'json',
                success: (function (response) {
                    self.panels.relatedVideosPanel.content = response.html;
                    self.panels.relatedVideosPanel._hasContent = true;
                    self.panels.relatedVideosPanel.video = self.video;

                    componentManager.process($(self.panels.relatedVideosPanel.content));
                    self._lazyLoadImages();
                    // Setup close button
                    self.panels.relatedVideosPanel.$.find('[data-item="closePanel"]').click(function () {
                        self.play();
                        self.panels.relatedVideosPanel.fadeOut();
                    });
                }),
                error: (function () {
                    self.panels.relatedVideosPanel.fadeOut();
                    debug.log('Error fetching playlist');
                }),
                complete: (function(){
                    self._stopLoading();
                })
            });
        },

        /**
         * Loads share panel via ajax
         *
         * @public
         * @method _fetchSharePanel
         */
        _fetchSharePanel: function () {
            var self = this;
            debug.log('getting share panel');
            var shareOptionsUrl = '/videos/share-links/' + this.video.slug + '/';

            this._startLoading();

            $.get(shareOptionsUrl, function (response) {
                self.panels.sharePanel.content = response;
                self.panels.sharePanel._hasContent = true;
                self.panels.sharePanel.video = self.video;

                componentManager.process($(self.panels.sharePanel.content));

                // Setup close button
                self.panels.sharePanel.$.find('[data-item="closePanel"]').click(function () {
                    self.play();
                    self.panels.sharePanel.fadeOut();
                    self.player.enableUiControls();
                    self.player.getUiController().showControls();
                });

                self._stopLoading();
                self.panels.sharePanel.fadeIn();

            }.bind(this), 'html');
        },

        /**
         * Setup video player events.
         *
         * @private
         * @method _handleUIClick
         */
        _handleUIClick: function (e) {
            debug.log('_handleUIClick', e);
            var action = e.data.action;

            if (action === 'share') {
                // Hide related videos
                this.panels.relatedVideosPanel.fadeOut();

                if (this.panels.sharePanel._visible) {
                    this.panels.sharePanel.fadeOut();
                    this.player.enableUiControls();
                } else {
                    this.player.pauseVideo();
                    this.player.disableUiControls();

                    // Don't fetch the panel if we already have it
                    if (this.panels.sharePanel.video && this.panels.sharePanel.video.id === this.video.id) {
                        this.panels.sharePanel.fadeIn();
                    } else {
                        this._fetchSharePanel();
                    }
                }
            }
            else if (action === 'related-videos') {
                // Hide share panel
                this.panels.sharePanel.fadeOut();

                if (!this.panels.relatedVideosPanel._hasContent) {
                    this._fetchRelatedVideosPanel();
                }

                if (this.panels.relatedVideosPanel._visible) {
                    this.play();
                    this.panels.relatedVideosPanel.fadeOut();
                } else {
                    this.pause();
                    this.panels.relatedVideosPanel.fadeIn();
                }
            }
        },

        /**
         * Hide all custom UI panels
         *
         * @private
         * @method _hidePanels
         */
        _hidePanels: function () {
            this.panels.sharePanel.fadeOut();
            this.panels.relatedVideosPanel.fadeOut();
            // Don't hide unmute panel if the player is muted
            if (!this.player.getPlayerMuted()) {
                this.panels.unMutePanel.fadeOut();
            }
        },

        /**
         * Setup custom UI.
         *
         * @private
         * @method _setupCustomUI
         */
        _setupCustomUI: function () {
            var self = this;

            debug.log('_setupCustomUI');

            // Create Buttons
            this.player.addCustomUiButtons([
                // Share
                {
                    identifier: 'custom_shareButton',
                    action: 'share',
                    cssClass: 'cvui-button cvui-share',
                    titleAttr: 'Share this content',
                    onClick: function(e){ self._handleUIClick.call(self, e); }
                },
                // Related Videos (don't show on video door)
                {
                    identifier: 'custom_relatedVideosButton',
                    cssClass: 'cvui-button cvui-icon-chapters',
                    action: 'related-videos',
                    titleAttr: 'Related Videos',
                    initiallyHidden: $.inArray(pageVars.tracking.data.pageType, ['video_door']) > -1 ? true : false, // Dont show on video door
                    onClick: function(e){ self._handleUIClick.call(self, e); }
                }
            ]);

            // Create Panels
            this.panels = {};

            // Share Panel
            this.panels.sharePanel = this.player.createDisplayPanel({
                className: 'cvui-share-panel',
                isFadeable: true,
                isInitiallyHidden: true,
                isInitiallyTransparent: true
            });
            // Store jQuery object for event listeners
            this.panels.sharePanel.$ = $(this.panels.sharePanel.getDom());

            // Related Videos Panel
            this.panels.relatedVideosPanel = this.player.createDisplayPanel({
                className: 'cvui-related-videos-panel',
                isFadeable: true,
                isInitiallyHidden: true,
                isInitiallyTransparent: true
            });
            // Store jQuery object for event listeners
            this.panels.relatedVideosPanel.$ = $(this.panels.relatedVideosPanel.getDom());
            this.panels.relatedVideosPanel.$.on('playlistClick', function(){
                debug.log('playlist panel click');
                self.panels.relatedVideosPanel.fadeOut();
            });

            // Unmute Panel
            this.panels.unMutePanel = this.player.createDisplayPanel({
                className: 'cvui-unmute-panel',
                isFadeable: true,
                isInitiallyHidden: !self.mutedAutoplayEnabled || playersInitialized > 1,
                isInitiallyTransparent: false,
                isClickable: true,
                isPrimary: false,
                onClick: function (e) {
                    debug.log('unmute panel click');
                    self.unmute();
                    self.panels.unMutePanel.fadeOut();
                }
            });

            this.panels.unMutePanel.content = '<div class="unmute"><span class="cvui-icon-cbs-volume"></span><span class="text">Play Sound</span></div>';

            debug.log('panels', this.panels);

            //If article page, load related videos playlist
            if (pageVars.tracking.data.pageType === 'article' && pageVars.tracking.data.deviceType !== 'mobile') {
                this._fetchRelatedVideosPanel();
            }

            if (this.testName === 'mobile_autoplay' && this.testGroup === 'a' && pageVars.tracking.data.pageType === 'article') {
                this._fetchRelatedVideosPanel();
            }
        },

        /**
         * Initialize the video player core.
         *
         * @private
         * @method _setupPlayer
         */
        _setupPlayer: function () {
            var self = this;
            debug.log('_setupPlayer');

            // Ensure the player has not already been initialized.
            if (!this.initialized) {
                // Prevent the player from being initialized more than once.
                this.initialized = true;

                // Initialize the uvp video player.
                videoManager.createVideoPlayer(self.id, function (videoPlayer) {
                    debug.log('createVideoPlayer');
                    // Store the player instance for future use.
                    self.player = videoPlayer;

                    trackingMgr.trackEvent('moduleClick', {moduleInfo: 'videoPlay', pageType: pageVars.tracking.data.pageType});

                    // Set heartbeat data.
                    self._setPageContextMetadata();
                    self._initIframeTracking();

                    self._trackPerformanceEvent('playerloaded');

                    // Setup Custom UI
                    self._setupCustomUI();

                    // Attach events to the player.
                    self._setupInternalEvents();

                    // Setup AMP integration
                    if(!self.isAmpReady && -1 !== window.location.hash.indexOf("amp=1")){
                        self._setupAmpIntegration(videoPlayer);
                    }

                    // Set the initial playlist; if autoplay on load is enabled, a video will play immediately.
                    self._setPlaylist(self.options.playlist);

                    // Add player to Chartbeat
                    var _cbv = window._cbv || (window._cbv = []);
                    _cbv.push(self.player.DOMMgr.dom.video.el);

                    // Echo the event for other components that might need to react to it.
                    self.$element.trigger("onVideoPlayerReady", self.video);

                },{
                    enableMutedAutoplay: self.mutedAutoplayEnabled,
                    enableUnmutedAutoplay: self.userAutoplayEnabled && self.systemInfoObject.supportsUnmutedAutoplay, // If autoplay is requested and supported, enable it regardless of which type was requested.
                    previewImage: (self.options.playlist.length > 0 && self.options.playlist[0].previewImg) ? self.options.playlist[0].previewImg : '',
                });
            }
        },

        /**
         * Plays the next video in playlist
         *
         * @public
         * @method playNextVideo
         */
        playNextVideo: function() {
            debug.log('playNextVideo');

            var next = this._getNextVideo(this.video.id);
            this.playVideoClip(next);
        },

        /**
         * Plays the previous video in playlist
         *
         * @public
         * @method playPreviousVideo
         */
        playPreviousVideo: function() {
            debug.log('playPreviousVideo');

            var previous = this._getPreviousVideo(this.video.id);
            this.playVideoClip(previous);
        },

        /**
         * Get next video in playlist
         *
         * @private
         * @method _getNextVideo
         *
         * @param id {string} The id of the current video.
         *
         * @return {object} The video object matching the id or null if none was found.
         */
        _getNextVideo: function(id) {
            var self = this, next = {};
            $.each(self.options.playlist, function(index) {
                if (id === this.id) {
                    next = self.options.playlist[index+1] || self.playlist[0];
                    return false;
                }
            });

            return next;
        },

        /**
         * Get previous video in playlist
         *
         * @private
         * @method _getPreviousVideo
         *
         * @param id {string} The id of the current video.
         *
         * @return {object} The video object matching the id or null if none was found.
         */
        _getPreviousVideo: function(id) {
            var self = this, previous = {};

            $.each(self.options.playlist, function(index) {
                if (id === this.id) {
                    previous = self.options.playlist[index-1] || self.playlist[0];
                    return false;
                }
            });

            return previous;
        },

    });
});

define('components/taboola',[
    'jquery',
    'version!fly/managers/debug',
    'managers/page-vars',
    'managers/client-storage',
    'managers/tracking',
    'version!fly/utils/url-helper',
    'version!fly/components/base'
], function($, debug, pageVars, storage, trackingMgr, urlHelper) {
    debug = debug.init('taboola');

    if (pageVars.services.taboola.enabled) {
        /**
         * Load and initialize a taboola recommendation ad unit on the page.
         *
         * @class $.fly.taboola
         * @extends $.fly.base
         * @constructor
         */
        $.widget('fly.taboola', $.fly.base, {

            // Options
            options: {
                mode: null,
                container: null,
                placement: null,
                targetType: 'mix',
                referrerUrl: document.referrer,
                pageType: null,
                isXhr: false
            },

            /**
             * taboola initialization object
             *
             * @property initOptions
             * @type object
             * @default {}
             */
            initOptions: {},

            /**
             * Flag indicating whether Taboola has been loaded yet.
             *
             * @property isLoaded
             * @type bool
             * @default false
             */
            isLoaded: false,

            /**
             * Initialize taboola ad.
             *
             * @private
             * @method _create
             */
            _create: function() {
                this._super();
                var self = this;
                var o = this.options;

                debug.log('Loading Taboola');

                self._loadTaboola();
            },

            /**
             * Load taboola ad.
             *
             * @private
             * @method _loadTaboola
             */
            _loadTaboola: function() {
                this.isLoaded = true;
                var self = this;

                window.TRFunctions.gdprConsentCallback('script_taboola', function(args, optanon) {
                    function getTaboola() {
                        require(['taboola'], function (taboola) {
                            taboola = window._taboola || [];

                            debug.log('Taboola widget created');

                            var o = self.options,
                                canonicalUrl = $('link[rel="canonical"]').attr('href');
                            pageType = self._getPageType();

                            debug.log("Taboola Page Type: " + pageType);
                            self.initOptions[pageType] = 'auto';

                            if (canonicalUrl) {
                                self.initOptions['url'] = canonicalUrl;
                            }

                            if (!o.isXhr) {
                                self.pushTaboola(taboola);
                            }

                            self._setupTracking(o.placement);
                        });
                    };

                    if (optanon != null) {
                        //Check if we can target
                        optanon.ot.targetingAllowed(function (allowed) {
                            self.options.allowTargeting = allowed;
                            debug.log('Taboola targeting is ' + (allowed ? 'allowed' : 'not allowed'));
                            getTaboola();
                        });
                    } else {
                        getTaboola();
                    }

                }, {}, 'targeting');

            },

            /**
             * Get taboola page type based on Omniture page type
             *
             * @private
             * @method _getPageType
             */
            _getPageType: function() {
                // Mapping of Omniture page types to Taboola page types
                var mapping = {
                    'article': 'article',
                    'blog_post': 'article',
                    'blog_list': 'category',
                    'front_door': 'home',
                    'hot_topics_door': 'category',
                    'image_gallery': 'photo',
                    'video': 'video'
                };

                debug.log('Taboola get page type');

                var pageType = 'other'; // default page type

                if (mapping[pageVars.tracking.data.pageType]) {
                    pageType = mapping[pageVars.tracking.data.pageType];
                }

                return pageType;
            },

            /**
             * Push and execute code in the Taboola stack
             *
             * @private
             * @method _pushTaboola
             */
            pushTaboola: function() {
                var o = this.options;

                _taboola.push({
                    mode: o.mode,
                    container: o.container,
                    placement: o.placement,
                    target_type: o.targetType
                });
                _taboola.push(this.initOptions); //executes the Taboola stack
            },

            /**
             * Setup omniture tracking.
             *
             * @param string placement
             *
             * @private
             * @method _setupTracking
             */
            _setupTracking: function(placement) {
                if (utag_data.contentWidget) {
                    placement = utag_data.contentWidget+'|'+placement;
                }
                utag_data.contentWidget = placement;

                this.$element.on("click", function(e) {
                    trackingMgr.trackEvent("trackClick", {"item": $(this).attr("om-event")});
                });
            }
        });
    }
});
define('components/sticky-mpu',[
	'jquery',
	'version!fly/managers/debug',
	'managers/page-vars',
	'version!fly/components/base'
], function(
	$,
	debug,
	pageVars
) {
	debug = debug.init('stickyMpu');


	/**
	 * Set up sticky mpu
	 *
	 */
	$.widget('fly.stickyMpu', $.fly.base, {

		_create: function() {
			this._setup();
			debug.log('Scrolling MPU init');
			this._initScrollingMpu();
		},

		_initScrollingMpu: function() {

			var self = this,
				$container = this.$element.closest('.row'),
				$rightRail = this.$element.closest('.col-4'),
				$mainColumn = $rightRail.prev();
				$window = $(window),
				$prevElement = this.$element.closest('.sticky-wrapper').prev(),
				$nav = $('#mainNav'),
				isFixed = false,
				isBottomFixed = false,
				adMargin = 30,
				RightRailAnchorMpuOffset = 0,
				currentBottomOffset = 0;

			if($container.find('.right-rail-bottom-mpu').length > 0) {
				RightRailAnchorMpuOffset = 250 + adMargin + 200; // if right rail anchor MPU exists leave some space for it + margin + 200px extra
			}

			$window.scroll(function() {
				var scrollTop = $window.scrollTop();
				var $mpu = self.$element;

				// calculate distance of sticky MPU from top of window (leaving space for nav ad + nav + gap)
				var navTopOffset = $nav.offset().top + $nav.height() - scrollTop + adMargin;

				var prevElementBottomOffset;
				if($prevElement.length > 0) {
					prevElementBottomOffset = $prevElement.offset().top + $prevElement.height() + adMargin;
				} else {
					prevElementBottomOffset = $rightRail.offset().top;
				}

				// check if scrolled past top of ad
				if((scrollTop + navTopOffset) > prevElementBottomOffset && ($mainColumn.height() > ($rightRail.height()))) {
					if(!isFixed) {
						$mpu.addClass('fixed');
						$mpu.css({top: navTopOffset + 'px'});
						isFixed = true;
					}

					// check if ad is at the bottom of the right rail
					if((scrollTop + $mpu.height() + navTopOffset) > ($container.offset().top + $container.height() - RightRailAnchorMpuOffset - adMargin) ) {
						var bottomOffset = $container.height() - $mpu.height() - RightRailAnchorMpuOffset - adMargin;
						if(!isBottomFixed || currentBottomOffset != bottomOffset) {
							$mpu.addClass('bottom-fixed');
							$mpu.css({top: bottomOffset + 'px'});
							isBottomFixed = true;
							currentBottomOffset = bottomOffset;
						}

					} else {
						if(isBottomFixed) {
							$mpu.removeClass('bottom-fixed');
							$mpu.css({top: navTopOffset + 'px'});
							isBottomFixed = false;
						}
					}

				} else {
					if(isFixed) {
						$mpu.removeClass('fixed');
						$mpu.css({top: ''});
						isFixed = false;
					}
				}
				debug.log('Update: fixed: ' + isFixed + ', bottom fixed: ' + isBottomFixed);

			});

		}
	});
});
/**
 * Combine all files used primarly by this page type and not already included in main.common
 */
define('pages/article',[
	'main',
	'managers/disqus',
	'components/disqus-count',
	'version!components/social-links',
	'version!fly/components/social-button',
	'version!components/image-gallery',
	'components/tr-video',
    'components/taboola',
    'components/sticky-mpu',
    'version!components/newsletter-subscription'
], function() {});
