// This file was automatically generated from tableProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.tableProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.table.tableProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'content tableStyle\'><h3>', soy.$$escapeHtml(jive.i18n._i18n('b47f60',[])), '</h3><div class=\'formFields\'><a href=\'javascript:;\' class=\'th th-t\'></a><a href=\'javascript:;\' class=\'th th-tb\'></a><a href=\'javascript:;\' class=\'th th-tl\'></a><a href=\'javascript:;\' class=\'th th-n\'></a></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('895940',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('accb52',[])), ': <input value=\'\' class=\'borderWidth spin-button\' maxlength=\'2\'/> px<br>', soy.$$escapeHtml(jive.i18n._i18n('37d196',[])), ': <input value=\'\' class=\'borderColor color\'/><br></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('4ee1c6',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('accb52',[])), ': <input value=\'\' class=\'widthPx spin-button\' maxlength=\'4\'/> <input value=\'\' class=\'widthPer spin-button\' maxlength=\'3\'/> <input type=\'radio\' name=\'width\' class=\'radio chooseWidthPx\'/> px <input type=\'radio\' name=\'width\' class=\'radio chooseWidthPer\'/> %<br>', soy.$$escapeHtml(jive.i18n._i18n('5d9ab9',[])), ': <input type=\'radio\' name=\'height\' class=\'radio chooseHeightAuto\'/> ', soy.$$escapeHtml(jive.i18n._i18n('cc118e',[])), '<br/><input type=\'radio\' name=\'height\' class=\'radio chooseHeightPx\'/> <input value=\'\' class=\'heightPx spin-button\' maxlength=\'4\'/> px<br>', soy.$$escapeHtml(jive.i18n._i18n('24074c',[])), ':<a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justifytablenone\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('04a4df',[])), '\'><span class=\'mceIcon mce_justifytablenone\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justifytableleft\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('c6b147',[])), '\'><span class=\'mceIcon mce_justifytableleft\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justifytableright\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('f081d0',[])), '\'><span class=\'mceIcon mce_justifytableright\'></span></a></div></div>');
  return opt_sb ? '' : output.toString();
};
