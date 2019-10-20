WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.JIRA.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Issues', type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Sprints', type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Versions', type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Epics', type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.metadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.metadata';
}


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml('View related Jira items here') + '</h2><p>' + soy.$$escapeHtml('Now you can see which epics, sprints, versions and issues relate to this page.') + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: 'Show me', extraClasses: 'showme'}) + aui.buttons.button({text: 'Don\x27t show again', type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.featureDiscovery';
}


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Jira links cannot be displayed. Either you do not have correct Jira permissions or the links have been removed.') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.nometadata';
}


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format('{0}Login \x26amp; Approve{1} to retrieve data from {2}','<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml('Authenticate to retrieve data from the following instances:') + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderAuthPrompts';
}


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format('View {0} more in {1}',linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderGroup';
}


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.loadingMetadata';
}


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata.') + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. The following errors occurred:') + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderJiraErrors';
}


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. Could not connect to Confluence') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
define("confluence/jira-metadata",["jquery","ajs","confluence/legacy","skate"],function(g,j,l,s){var h="com.atlassian.confluence.plugins.confluence-jira-metadata";var t=false;var p;var m;var r="jira-metadata-dialog";var u;var e="jira-metadata-discovery";var k="linked-issues-dropdown";function q(v,x,w){f(v,x,w);v.removeClass("hidden");if(b(v)){p=j.InlineDialog(v,r,function(z,y,A){j.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!m||!t){m=z;A();a(v)}else{A()}return false},{hideDelay:null});v.click(function(){if(g("#"+r).is(":visible")){p.hide()}})}if(v&&i()){n(v);v.one("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k)})}}function f(v,x,w){if(!w){var y=(x===1)?"1 Jira link":j.format("{0} Jira links",x);v.children("span").text(y)}}function b(v){return !v.attr("href")}function n(v){u=j.InlineDialog(v,e,function(x,w,y){x.html(l.Templates.Metadata.JIRA.featureDiscovery());x.find(".showme").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide();p.show()});x.find(".close").on("click",function(){l.FeatureDiscovery.forPlugin(h).markDiscovered(k);u.hide()});y()},{noBind:true,closeOthers:false,hideDelay:null});u.show();l.FeatureDiscovery.forPlugin(h).addDiscoveryView(k)}function i(){return !j.Meta.get("blueprint-index-popup-key")&&l.FeatureDiscovery.forPlugin(h).shouldShow(k)}function a(v){d();m.html(l.Templates.Metadata.JIRA.loadingMetadata());m.find(".spinner").spin("medium");var w=v.attr("data-page-id")||j.Meta.get("page-id");g.ajax({url:j.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+w,type:"GET",dataType:"json",contentType:"application/json",error:function(x){c();m.html(l.Templates.Metadata.JIRA.unknownError())},success:function(x){c();t=true;f(v,x.count,false);var y;if(x.count===0&&!(x.unauthorisedAppLinks&&x.unauthorisedAppLinks.length>0)&&x.errors.length==0){j.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});y=l.Templates.Metadata.JIRA.nometadata()}else{y=l.Templates.Metadata.JIRA.metadata(x)}m.html(y);setTimeout(function(){m.find("#"+r).addClass("show")},0);o(v)},complete:function(){g("#"+r+" .icon-close").click(function(x){x.stopPropagation();g(this).closest(".closable").remove()})}})}function o(v){g(".jira-metadata-auth-link").click(function(w){w.preventDefault();window.AppLinks.authenticateRemoteCredentials(g(this).data("href"),function(){a(v)},function(){})})}function d(){if(m&&m.height()>0){m.css("height",m.height())}}function c(){m&&m.css("height","")}return{init:function(){s("content-metadata-jira",{type:s.types.CLASS,attached:function(z){var v=g(z);var A=v.attr("data-jira-metadata-count")||j.Meta.get("jira-metadata-count");A=parseInt(A,10);var y=v.attr("data-count-incomplete")||j.Meta.get("jira-metadata-count-incomplete");var w=v.attr("data-page-id")||j.Meta.get("page-id");if(A>0){q(v,A,y)}else{if(A===-1){var x=j.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+w;g.ajax({url:x,type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(B){if(B.count>0){q(v,B.count,B.incomplete)}}})}}}})}}});require("confluence/module-exporter").safeRequire("confluence/jira-metadata",function(a){a.init()});
}catch(e){WRMCB(e)};