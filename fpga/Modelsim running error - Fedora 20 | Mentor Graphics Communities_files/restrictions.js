// This file was automatically generated from restrictions.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.restrictions');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.attachment.formatSize');


jive.rte.attachment.restrictions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.restrictions.maxSize) {
    output.append('<span class="js-attachments-sizeRestriction">', soy.$$escapeHtml(jive.i18n._i18n('8f035a',[])), ' ');
    jive.rte.attachment.formatSize({size: opt_data.restrictions.maxSize}, output);
    output.append('</span>');
  }
  output.append((opt_data.restrictions.allowByDefault) ? (opt_data.restrictions.attachmentExtensions.length > 0) ? ((opt_data.latest && opt_data.restrictions.maxSize) ? ' &bull; ' : '') + '<span class="js-attachments-typeRestriction">' + soy.$$escapeHtml(jive.i18n._i18n('f91017',[])) + '  ' + soy.$$escapeHtml(opt_data.restrictions.attachmentExtensions) + '</span>' : '' : ((opt_data.latest && opt_data.restrictions.maxSize) ? ' &bull; ' : '') + '<span class="js-attachments-typeRestriction">' + soy.$$escapeHtml(jive.i18n._i18n('0a5230',[])) + '  ' + soy.$$escapeHtml(opt_data.restrictions.attachmentExtensions) + '</span>', (opt_data.restrictions.disallowedTypes) ? ((opt_data.latest && (opt_data.restrictions.maxSize || ! opt_data.restrictions.allowByDefault || opt_data.restrictions.attachmentExtensions.length > 0)) ? ' &bull; ' : '') + '<span class="js-attachments-typeRestriction">' + soy.$$escapeHtml(jive.i18n._i18n('ea6aa3',[])) + ' ' + soy.$$escapeHtml(opt_data.restrictions.disallowedTypes) + '</span>' : '', (opt_data.restrictions.maxFiles) ? ((opt_data.latest && (opt_data.restrictions.disallowedTypes || opt_data.restrictions.maxSize || ! opt_data.restrictions.allowByDefault || opt_data.restrictions.attachmentExtensions.length > 0)) ? ' &bull; ' : '') + '<span class="js-attachments-countRestriction">' + soy.$$escapeHtml(jive.i18n._i18n('dd4761',[])) + ' ' + soy.$$escapeHtml(opt_data.restrictions.maxFiles) + '</span>' : '');
  return opt_sb ? '' : output.toString();
};
