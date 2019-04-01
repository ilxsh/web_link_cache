// This file was automatically generated from attachmentBlock.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.attachmentBlock');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.attachment.attachmentButton');
goog.require('jive.rte.attachment.attachmentHeader');
goog.require('jive.rte.attachment.attachmentList');


jive.rte.attachment.attachmentBlock = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.rte.attachment.attachmentButton(opt_data, output);
  jive.rte.attachment.attachmentHeader(opt_data, output);
  jive.rte.attachment.attachmentList(opt_data, output);
  return opt_sb ? '' : output.toString();
};
