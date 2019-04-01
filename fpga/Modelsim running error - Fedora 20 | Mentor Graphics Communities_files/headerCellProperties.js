// This file was automatically generated from headerCellProperties.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.table.headerCellProperties');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rte.table.headerCellProperties = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'content ', soy.$$escapeHtmlAttribute(opt_data.section), 'Header\'><h3>', soy.$$escapeHtml(jive.i18n._i18n('74b211',[])), '</h3><div class=\'formFields sampleContainer\'><table align=\'center\' class=\'sampleHeader\' style=\'width:145px;margin-left:20px;\'><tr><th>', soy.$$escapeHtml(jive.i18n._i18n('acb6d3',[])), '</th></tr></table></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('cdf4f1',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('4412f9',[])), ': <input value=\'\' class=\'padding spin-button\' maxlength=\'2\'/> px<br>', soy.$$escapeHtml(jive.i18n._i18n('7e2fab',[])), ': <input value=\'\' class=\'backgroundColor color\'/><br></div><h3>', soy.$$escapeHtml(jive.i18n._i18n('f160b4',[])), '</h3><div class=\'formFields\'>', soy.$$escapeHtml(jive.i18n._i18n('24074c',[])), ':<a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justify mceButtonSelected mce_justifyleft\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('c6b147',[])), '\'><span class=\'mceIcon mce_justifyleft\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justify mce_justifycenter\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('36802d',[])), '\'><span class=\'mceIcon mce_justifycenter\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justify mce_justifyright\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('f081d0',[])), '\'><span class=\'mceIcon mce_justifyright\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_justify mce_justifyfull\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('8c9e38',[])), '\'><span class=\'mceIcon mce_justifyfull\'></span></a><br>', soy.$$escapeHtml(jive.i18n._i18n('d715c3',[])), ':<a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_valign mceButtonSelected mce_valigntop\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('ff9661',[])), '\'><span class=\'mceIcon mce_valigntop\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_valign mce_valignmiddle\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('a96ba2',[])), '\'><span class=\'mceIcon mce_valignmiddle\'></span></a><a href=\'javascript:;\' class=\'mceButton mceButtonEnabled mce_valign mce_valignbottom\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n._i18n('65153a',[])), '\'><span class=\'mceIcon mce_valignbottom\'></span></a><br>', soy.$$escapeHtml(jive.i18n._i18n('2eaa79',[])), ': <a href=\'javascript:;\' class=\'family\'/></a><br>', soy.$$escapeHtml(jive.i18n._i18n('37d196',[])), ': <input value=\'\' class=\'fontColor color\'/><br></div></div>');
  return opt_sb ? '' : output.toString();
};
