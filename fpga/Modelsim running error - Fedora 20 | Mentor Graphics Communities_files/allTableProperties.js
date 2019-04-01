// This file was automatically generated from allTableProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.allTableProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.table.cellProperties');
goog.require('jive.rte.table.headerCellProperties');
goog.require('jive.rte.table.tableProperties');


jive.rte.table.allTableProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'properties\'><form action=\'javascript:;\' onsubmit=\'return false\'><nav class=\'j-tab-nav\'><ul class=\'tabs j-tabbar\'><li class=\'j-tab-selected\'><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('cdf4f1',[])), '</a></li><li><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('acb6d3',[])), '</a></li><li><a href=\'javascript:;\'>', soy.$$escapeHtml(jive.i18n._i18n('a34972',[])), '</a></li></ul></nav>');
  jive.rte.table.tableProperties(null, output);
  jive.rte.table.headerCellProperties({section: 'table'}, output);
  jive.rte.table.cellProperties({section: 'table'}, output);
  output.append('</form></div>');
  return opt_sb ? '' : output.toString();
};
