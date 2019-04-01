// This file was automatically generated from allColumnProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.allColumnProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.table.cellProperties');
goog.require('jive.rte.table.columnProperties');
goog.require('jive.rte.table.headerCellProperties');


jive.rte.table.allColumnProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'properties\'><form action=\'javascript:;\' onsubmit=\'return false\'><nav class=\'j-tab-nav\'><ul class=\'tabs j-tabbar\'><li class=\'j-tab-selected\'><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('cdf4f1',[])), '</a></li><li><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('acb6d3',[])), '</a></li><li><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('a34972',[])), '</a></li></ul></nav>');
  jive.rte.table.columnProperties(null, output);
  jive.rte.table.headerCellProperties({section: 'column'}, output);
  jive.rte.table.cellProperties({section: 'column'}, output);
  output.append('</form></div>');
  return opt_sb ? '' : output.toString();
};
