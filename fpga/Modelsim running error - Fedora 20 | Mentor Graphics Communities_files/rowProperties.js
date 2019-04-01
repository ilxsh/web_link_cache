// This file was automatically generated from rowProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.rowProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.table.rowProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'content rowStyle\'><h3>', soy.$$escapeHtml(jive.i18n._i18n('b47f60',[])), '</h3><div class=\'formFields\'><a href=\'javascript:;\' class=\'th th-a\'></a><a href=\'javascript:;\' class=\'th th-l\'></a><a href=\'javascript:;\' class=\'th th-n\'></a></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('4ee1c6',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('5d9ab9',[])), ': <input type=\'radio\' name=\'width\' class=\'radio chooseHeightAuto\'/> ', soy.$$escapeHtml(jive.i18n._i18n('cc118e',[])), '<br/><input type=\'radio\' name=\'width\' class=\'radio chooseHeightPx\'/> <input value=\'\' class=\'heightPx spin-button\' maxlength=\'4\'/> px<br/></div></div>');
  return opt_sb ? '' : output.toString();
};
