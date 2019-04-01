// This file was automatically generated from mergeCellProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.mergeCellProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.table.mergeCellProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'properties\'><form action=\'javascript:;\' onsubmit=\'return false\'><div class=\'content\'><h3>', soy.$$escapeHtml(jive.i18n._i18n('b08cf0',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('18c1d0',[])), ': <input value=\'\' class=\'rowspan spin-button\' maxlength=\'2\'/><br>', soy.$$escapeHtml(jive.i18n._i18n('cdff7a',[])), ': <input value=\'\' class=\'colspan spin-button\' maxlength=\'2\'/><br></div></div></form></div>');
  return opt_sb ? '' : output.toString();
};
