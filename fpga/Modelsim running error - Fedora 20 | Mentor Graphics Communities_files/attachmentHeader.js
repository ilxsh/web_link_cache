// This file was automatically generated from attachmentHeader.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.attachmentHeader');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.attachment.restrictions');


jive.rte.attachment.attachmentHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-attachment-list-bar j-attachment-header"><a href="#" class="js-attachment-button-label j-compose-row-title">', soy.$$escapeHtml(jive.i18n._i18n('7ab98b',[])), '</a><span class="j-attach-restrictions js-attachment-restrictions">');
  jive.rte.attachment.restrictions(opt_data, output);
  output.append('</span></div>');
  return opt_sb ? '' : output.toString();
};
