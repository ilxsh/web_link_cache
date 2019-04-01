// This file was automatically generated from attachmentButton.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.attachmentButton');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.attachment.attachmentButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="attachmentButton" tabindex="0"><span class="jive-icon-glyph icon-attachment"></span>', soy.$$escapeHtml(jive.i18n._i18n('ad2ac6',[])), '<span class="j-attachmentblock-toggle jive-icon-glyph icon-angle-up"></span></span>');
  return opt_sb ? '' : output.toString();
};
