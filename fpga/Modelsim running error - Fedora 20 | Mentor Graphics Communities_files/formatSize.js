// This file was automatically generated from formatSize.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.formatSize');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.attachment.formatSize = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.size > 1048576) ? soy.$$escapeHtml(Math.round(opt_data.size / 1048576 * 10) / 10) + '&nbsp;MB' : soy.$$escapeHtml(Math.round(opt_data.size / 1024 * 10) / 10) + '&nbsp;KB');
  return opt_sb ? '' : output.toString();
};
