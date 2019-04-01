// This file was automatically generated from attachmentList.soy.
// Please don't edit this file by hand.

goog.provide('jive.rte.attachment.attachmentList');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.rte.attachment.formatSize');


jive.rte.attachment.attachmentList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.attachments.length > 0) {
    output.append('<ul class="js-attachment-list clearfix">');
    var attachmentList6 = opt_data.attachments;
    var attachmentListLen6 = attachmentList6.length;
    for (var attachmentIndex6 = 0; attachmentIndex6 < attachmentListLen6; attachmentIndex6++) {
      var attachmentData6 = attachmentList6[attachmentIndex6];
      output.append('<li><span class="', (! opt_data.latest) ? 'jive-icon-med' : 'jive-icon-big', ' jive-icon-doctype-', soy.$$escapeHtml(attachmentData6.doctype), '"></span><span class="j-attachment-name-chop">', soy.$$escapeHtml(attachmentData6.filename), '</span> <strong class="font-color-meta j-attach-meta">');
      if (attachmentData6.size) {
        jive.rte.attachment.formatSize({size: attachmentData6.size}, output);
      }
      output.append('</strong>', (opt_data.restrictions.hasAttachPerms) ? '<a class="js-attachment-remove j-remove" href=\'#\'><span class="' + ((! opt_data.latest) ? 'ui-remove' : 'jive-icon-glyph icon-close-med') + '" title="' + soy.$$escapeHtml(jive.i18n._i18n('618086',[])) + '">' + soy.$$escapeHtml(jive.i18n._i18n('618086',[])) + '</span></a>' : '', '</li>');
    }
    output.append('</ul>', (! opt_data.latest) ? '<div class="j-attach-clip j-ui-elem"></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};
