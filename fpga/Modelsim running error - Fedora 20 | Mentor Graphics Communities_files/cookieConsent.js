require(['jquery',
        'jive/accessibility', 'soy!jive.skin.template.cookieConsent.cookieBanner', 'domReady!'
        ],
    function($, Accessibility) {
        var name = 'jive.cookie.consent.accepted';
        var re = new RegExp(name + '=[^;]+', 'i');
        var defaultDeclineUrl = '/cookie-consent-decline.jspa';

        if (!document.cookie.match(re)) {
            if ($('#cookie-consent-alert').length > 0) {
                showConsentPopUp();
            } else {
                $(document).on('cookieBannerLoad', showConsentPopUp);
            }
        }

        function showConsentPopUp() {

            if( _jive_base_absolute_url + defaultDeclineUrl === window.location.href){
                return;
            }
            var $cookieAlert = $('#cookie-consent-alert');
            var $cookieOverlay = $('#cookie-consent-overlay');

            new Accessibility({
                scope: $cookieAlert,
                otherActions: [
                    Accessibility.focusRingAction($cookieAlert),
                    Accessibility.menuSelectAction({
                        container: $cookieAlert,
                        moveFocus: true,
                        skipTargetCheck: true,
                        selectedClass: false
                    })
                ]
            });
            $cookieAlert.show();
            $cookieOverlay.show();
            $('body').css('overflow-y', 'hidden');
            $('#cookie-consent-agree').focus();

            $cookieAlert.on('mousedown', function(e) {
                e.preventDefault();
                e.stopPropagation();
            });

            $('#cookie-consent-agree').on('click', function(e) {
                e.preventDefault();
                createCookie(name, 'true', 365);
                $cookieAlert.hide();
                $cookieOverlay.hide();
                $('body').css('overflow-y', 'visible');
                $.ajax({
                    type: 'POST',
                    url: _jive_base_absolute_url + '/cookie-consent.jspa',
                })
            });

            $('#cookie-consent-disagree').on('click', deleteAllCookies);
        }

        $('body').on('click', '#jive-profile-link-action-remove-consent', deleteAllCookies);

        function deleteAllCookies() {
            $.ajax({
                type: 'DELETE',
                url: _jive_base_absolute_url + '/cookie-consent.jspa',
                success: function () {
                    document.cookie = name + '= ;' + 'expires=Thu, 01-Jan-70 00:00:01 GMT;';
                    var $declineUrl = $("#cookie-consent-disagree").attr('data-decline-url');
                    if ( $declineUrl === defaultDeclineUrl.substr(1, defaultDeclineUrl.length) ){
                        window.location.replace( _jive_base_absolute_url + defaultDeclineUrl);
                    } else {
                        window.location.replace($declineUrl);
                    }
                }
            });
        }

        function createCookie(name, value, daysToExpiration) {
            var expires;
            if (daysToExpiration) {
                var date = new Date();
                date.setTime(date.getTime()+(daysToExpiration*24*60*60*1000));
                expires = '; expires=' + date.toGMTString() + ';';
            }
            else {
                expires = '';
            }
            document.cookie = name + '='+ value + expires + "path=/";
        }
    });
