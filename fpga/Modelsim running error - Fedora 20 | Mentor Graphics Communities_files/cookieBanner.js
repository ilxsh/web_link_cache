// This file was automatically generated from cookieBanner.soy.
// Please don't edit this file by hand.

goog.provide('jive.skin.template.cookieConsent.cookieBanner');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.skin.template.cookieConsent.cookieBanner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-alert-banner" id="cookie-consent-alert" role="alert" aria-live="polite" aria-atomic="true"><div class="j-alert j-bannerContainer"><span class="j-bannerText" id="cookieConsentMessage">');
  var sanitizedURL__soy4 = new soy.StringBuilder(soy.$$escapeHtml(opt_data.privacyPolicyUrl));
  sanitizedURL__soy4 = sanitizedURL__soy4.toString();
  output.append(soy.$$escapeHtml(jive.i18n._i18n('f02403',[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<a href="' + sanitizedURL__soy4 + '" target="_blank" class="j-bannerText">'),new soydata.VERY_UNSAFE.ordainSanitizedHtml('</a>')])), '</span><label class="j-508-label" id="agreeMessage">', soy.$$escapeHtml(jive.i18n._i18n('fe042f',[])), '</label><div class="cookie-banner-btn-container"><button class="j-btn-global j-bannerButton" id="cookie-consent-agree" type="submit" aria-labelledby="cookieConsentMessage agreeMessage">', soy.$$escapeHtml(jive.i18n._i18n('fe042f',[])), '</button>', (opt_data.cookieConsentDeclineButtonEnabled) ? '<button data-decline-url="' + soy.$$escapeHtml(opt_data.declineRedirectUrl) + '" class="j-btn-global j-bannerButton" id="cookie-consent-disagree" type="submit" aria-label="' + soy.$$escapeHtmlAttribute(jive.i18n._i18n('14a275',[])) + '">' + soy.$$escapeHtml(jive.i18n._i18n('14a275',[])) + '</button>' : '', '</div></div><div class="j-cookie-consent-overlay" id="cookie-consent-overlay"/></div>');
  return opt_sb ? '' : output.toString();
};
