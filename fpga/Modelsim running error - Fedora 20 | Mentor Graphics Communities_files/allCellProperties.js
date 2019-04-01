// This file was automatically generated from allCellProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.allCellProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.table.cellProperties');
goog.require('jive.rte.table.headerCellProperties');


jive.rte.table.allCellProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'properties\'><form action=\'javascript:;\' onsubmit=\'return false\'><div class=\'content\'><input type=\'radio\' name=\'style\' class=\'radio chooseHeader\'/> ', soy.$$escapeHtml(jive.i18n._i18n('acb6d3',[])), '<input type=\'radio\' name=\'style\' class=\'radio chooseCell\'/> ', soy.$$escapeHtml(jive.i18n._i18n('a34972',[])), '</div>');
  jive.rte.table.headerCellProperties({section: 'cell'}, output);
  jive.rte.table.cellProperties({section: 'cell'}, output);
  output.append('</form></div>');
  return opt_sb ? '' : output.toString();
};
