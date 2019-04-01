// This file was automatically generated from columnProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.columnProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.table.columnProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'content columnStyle\'><h3>', soy.$$escapeHtml(jive.i18n._i18n('b47f60',[])), '</h3><div class=\'formFields\'><a href=\'javascript:;\' class=\'th th-t\'></a><a href=\'javascript:;\' class=\'th th-tb\'></a><a href=\'javascript:;\' class=\'th th-tl\'></a><a href=\'javascript:;\' class=\'th th-n\'></a></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('4ee1c6',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('accb52',[])), ': <input type=\'radio\' name=\'width\' class=\'radio chooseWidthAuto\'/> ', soy.$$escapeHtml(jive.i18n._i18n('cc118e',[])), '<br/><input type=\'radio\' name=\'width\' class=\'radio chooseWidthPx\'/> <input value=\'\' class=\'widthPx spin-button\' maxlength=\'4\'/> px<br/><input type=\'radio\' name=\'width\' class=\'radio chooseWidthPer\'/> <input value=\'\' class=\'widthPer spin-button\' maxlength=\'3\'/> %<br></div></div>');
  return opt_sb ? '' : output.toString();
};
