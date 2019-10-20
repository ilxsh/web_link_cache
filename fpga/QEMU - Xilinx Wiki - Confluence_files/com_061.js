WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.soy' */
// This file was automatically generated from fields.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace jiraIntegration.templates.fields.
 */

if (typeof jiraIntegration == 'undefined') { var jiraIntegration = {}; }
if (typeof jiraIntegration.templates == 'undefined') { jiraIntegration.templates = {}; }
if (typeof jiraIntegration.templates.fields == 'undefined') { jiraIntegration.templates.fields = {}; }


jiraIntegration.templates.fields.stringField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({labelContent: '' + soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.stringField.soyTemplateName = 'jiraIntegration.templates.fields.stringField';
}


jiraIntegration.templates.fields.textareaField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><textarea rows="10" id="' + soy.$$escapeHtml(opt_data.name) + '" name="' + soy.$$escapeHtml(opt_data.name) + '" class="textarea long-field">' + soy.$$escapeHtml(opt_data.value) + '</textarea>';
  if (opt_data.errorTexts) {
    var errorList37 = opt_data.errorTexts;
    var errorListLen37 = errorList37.length;
    for (var errorIndex37 = 0; errorIndex37 < errorListLen37; errorIndex37++) {
      var errorData37 = errorList37[errorIndex37];
      output += '<div class="error">' + soy.$$escapeHtml(errorData37) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.textareaField.soyTemplateName = 'jiraIntegration.templates.fields.textareaField';
}


jiraIntegration.templates.fields.arrayField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.arrayField.soyTemplateName = 'jiraIntegration.templates.fields.arrayField';
}


jiraIntegration.templates.fields.numberField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.numberField.soyTemplateName = 'jiraIntegration.templates.fields.numberField';
}


jiraIntegration.templates.fields.allowedValuesField = function(opt_data, opt_ignored) {
  return '' + ((opt_data.options.length) ? aui.form.selectField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), options: opt_data.options, isRequired: opt_data.isRequired, isMultiple: opt_data.isMultiple, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}) : aui.form.valueField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: 'None', isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts}));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.allowedValuesField.soyTemplateName = 'jiraIntegration.templates.fields.allowedValuesField';
}


jiraIntegration.templates.fields.timeTrackingField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({id: opt_data.name, name: opt_data.name, labelContent: '' + soy.$$escapeHtml(opt_data.labelText), value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.timeTrackingField.soyTemplateName = 'jiraIntegration.templates.fields.timeTrackingField';
}


jiraIntegration.templates.fields.unrenderableTypeField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field jira-field-unrenderable' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '"><label>' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label>' + aui.form.value({content: opt_data.reasonContent});
  if (opt_data.errorTexts) {
    var errorList117 = opt_data.errorTexts;
    var errorListLen117 = errorList117.length;
    for (var errorIndex117 = 0; errorIndex117 < errorListLen117; errorIndex117++) {
      var errorData117 = errorList117[errorIndex117];
      output += '<div class="error">' + soy.$$escapeHtml(errorData117) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.unrenderableTypeField.soyTemplateName = 'jiraIntegration.templates.fields.unrenderableTypeField';
}


jiraIntegration.templates.fields.dateField = function(opt_data, opt_ignored) {
  return '' + aui.form.textField({labelContent: '' + soy.$$escapeHtml(opt_data.labelText), id: opt_data.name, name: opt_data.name, value: opt_data.value, isRequired: opt_data.isRequired, extraClasses: 'jira-field' + (opt_data.extraClasses ? ' ' + opt_data.extraClasses : ''), extraAttributes: {'data-jira-type': opt_data.jiraType}, errorTexts: opt_data.errorTexts});
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.dateField.soyTemplateName = 'jiraIntegration.templates.fields.dateField';
}


jiraIntegration.templates.fields.select2WithIconField = function(opt_data, opt_ignored) {
  var output = '<div class="field-group jira-field' + ((opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '') + '" data-jira-type="' + soy.$$escapeHtml(opt_data.jiraType) + '"><label for="' + soy.$$escapeHtml(opt_data.name) + '">' + soy.$$escapeHtml(opt_data.labelText) + ((opt_data.isRequired) ? '<span class="aui-icon icon-required"></span>' : '') + '</label><select id="' + soy.$$escapeHtml(opt_data.name) + '" name="' + soy.$$escapeHtml(opt_data.name) + '">';
  var optionList154 = opt_data.options;
  var optionListLen154 = optionList154.length;
  for (var optionIndex154 = 0; optionIndex154 < optionListLen154; optionIndex154++) {
    var optionData154 = optionList154[optionIndex154];
    output += '<option value="' + soy.$$escapeHtml(optionData154.value) + '" ' + ((optionData154.selected) ? 'selected' : '') + ' data-icon-url="' + soy.$$escapeHtml(optionData154.iconUrl) + '">' + soy.$$escapeHtml(optionData154.text) + '</option>';
  }
  output += '</select>';
  if (opt_data.errorTexts) {
    var errorList170 = opt_data.errorTexts;
    var errorListLen170 = errorList170.length;
    for (var errorIndex170 = 0; errorIndex170 < errorListLen170; errorIndex170++) {
      var errorData170 = errorList170[errorIndex170];
      output += '<div class="error">' + soy.$$escapeHtml(errorData170) + '</div>';
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconField.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconField';
}


jiraIntegration.templates.fields.select2WithIconOption = function(opt_data, opt_ignored) {
  return ((opt_data.iconUrl) ? aui.avatar.avatar({avatarImageUrl: opt_data.iconUrl, size: 'xsmall', isProject: opt_data.isProject, extraClasses: 'select-option-image', tagName: 'span'}) : '') + '<span class="select-option" title="' + soy.$$escapeHtml(opt_data.optionValue) + '">' + soy.$$escapeHtml(opt_data.optionValue) + '</span>';
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.select2WithIconOption.soyTemplateName = 'jiraIntegration.templates.fields.select2WithIconOption';
}


jiraIntegration.templates.fields.labelFieldResult = function(opt_data, opt_ignored) {
  return '' + ((opt_data.label.isNew) ? soy.$$escapeHtml(AJS.format('\x22{0}\x22 - (New label)',opt_data.label.labelName)) : soy.$$escapeHtml(opt_data.label.labelName));
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.labelFieldResult.soyTemplateName = 'jiraIntegration.templates.fields.labelFieldResult';
}


jiraIntegration.templates.fields.userOptionSelect = function(opt_data, opt_ignored) {
  var output = '';
  var userOption__soy197 = soy.$$escapeHtml(opt_data.displayName) + ' - (' + soy.$$escapeHtml(opt_data.name) + ')';
  output += '<span title="' + soy.$$filterNoAutoescape(userOption__soy197) + '">' + soy.$$filterNoAutoescape(userOption__soy197) + '</span>';
  return output;
};
if (goog.DEBUG) {
  jiraIntegration.templates.fields.userOptionSelect.soyTemplateName = 'jiraIntegration.templates.fields.userOptionSelect';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/fields.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=(function(J,Q){var k="YYYY-MM-DD";var g={template:jiraIntegration.templates.fields.stringField,getContext:v,getValue:B};var z={template:jiraIntegration.templates.fields.stringField,getContext:q,getValue:E,behavior:o};var u={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:C,behavior:j};var s={template:jiraIntegration.templates.fields.textareaField,getContext:v,getValue:B};var G={template:jiraIntegration.templates.fields.numberField,getContext:v,getValue:D};var c={template:jiraIntegration.templates.fields.arrayField,getContext:h,getValue:C};var P={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:Q.bind(b,null,"id"),behavior:S};var M={template:jiraIntegration.templates.fields.allowedValuesField,getContext:f,getValue:Q.bind(b,null,"id")};var L={template:jiraIntegration.templates.fields.timeTrackingField,getContext:R,getValue:e};var K={template:jiraIntegration.templates.fields.dateField,getContext:v,getValue:r,behavior:y};var i={template:jiraIntegration.templates.fields.select2WithIconField,getContext:I,getValue:Q.bind(b,null,"id"),behavior:a};var l={"com.pyxis.greenhopper.jira:gh-epic-label":g,string:g,summary:g,"com.atlassian.jira.plugin.system.customfieldtypes:textfield":g,"com.atlassian.jira.plugin.system.customfieldtypes:url":g,environment:s,"com.atlassian.jira.plugin.system.customfieldtypes:textarea":s,description:s,"com.atlassian.jira.plugin.system.customfieldtypes:float":G,array:c,labels:u,"com.atlassian.jira.plugin.system.customfieldtypes:labels":c,resolution:P,fixVersions:P,priority:i,versions:P,components:P,security:P,"com.atlassian.jira.plugin.system.customfieldtypes:version":P,"com.atlassian.jira.plugin.system.customfieldtypes:multiversion":P,"com.atlassian.jira.plugin.system.customfieldtypes:project":P,assignee:z,reporter:z,timetracking:L,duedate:K,"com.atlassian.jira.plugin.system.customfieldtypes:datepicker":K,"com.atlassian.jira.plugin.system.customfieldtypes:multiselect":M,"com.atlassian.jira.plugin.system.customfieldtypes:select":M};var w={ignoreFieldsWithDefaultValue:false};function m(V,T,W){var U=T.schema.system||"customfield_"+T.schema.customId;return{labelText:T.name,name:U,isRequired:T.required,errorTexts:W[U],jiraType:V}}function v(X,T,U,V){var W=X.name;X.value=(J.isPlainObject(V[W])?V[W].name:V[W])||(U&&U.fields[W])||"";return X}function B(T){return T.val()}function r(T){var U=T.val();if(U===""){return null}else{return U}}function D(T){var U=T.val();if(t(U)){return Number(U)}return U||null}function y(T){var V=T.find("input");if(!!navigator.userAgent.match(/Trident/)&&AJS.version<"5.3.5"){var U="placeholder" in document.createElement("input");V.attr("placeholder",k);if(!U){V.on("focus",function(){if(V.val()===V.attr("placeholder")){V.val("")}}).on("blur",function(){if(V.val()===""){V.val(V.attr("placeholder"))}}).blur()}}else{V.datePicker({overrideBrowserDefault:true})}}function h(X,T,U,V){var W=X.name;X.value=(V[W]&&V[W].join(","))||(U&&U.fields[W]&&U.fields[W].join(","));return X}function C(T){return Q.map(T.val().split(","),J.trim)}function f(Z,T,U,W){var X=Z.name;var V=W[X];var aa=U&&U.fields[X];var Y;if(V){Y=J.isArray(V)?Q.pluck(V,"name"):[V.name]}else{if(aa){Y=J.isArray(aa)?Q.pluck(aa,"name"):[aa.name]}else{Y=[]}}Z.options=Q.map(T.allowedValues,function(ab){return{value:ab.id,text:ab.name||ab.value,selected:Q.contains(Y,ab.name||ab.id)}});Z.isMultiple=Q.contains(T.operations,"add");return Z}function b(W,U){var X=U.val();var T=U.attr("multiple");var V=function(Z){var Y={};Y[W]=Z;return Y};if(T){return J.isArray(X)?Q.map(X,V):[V(X)]}return V(X)}function S(T){T.find("select[multiple]").auiSelect2()}function q(X,T,U,V){var W=X.name;X.value=(V[W]&&V[W].name)||(U&&U.fields[W]&&U.fields[W].name)||"";return X}function E(T){return{name:T.val()}}function O(U,X,W,V,Y){var aa=U.find("input");var Z=U.attr("name");aa.removeClass("text");var T={minimumInputLength:1,id:Z,name:Z,query:function(ac){function ab(ad){ac.callback({results:ad})}n(X,W,ac.term,V).done(ab)}};aa.auiSelect2(J.extend(T,Y));U.find("div.aui-select2-container").addClass("jira-select2-drop-box")}function o(T,W,V,U){var X={formatInputTooShort:function(){return "Find users..."},formatResult:function(Y){return jiraIntegration.templates.fields.userOptionSelect({name:Y.id,displayName:Y.text})}};O(T,W,V,U,X)}function j(T,W,V,U){var X=T.find("input");jiraIntegration.fields._labelPicker.build(X,function(Y){return n(W,V,Y,U)})}function n(X,V,W,U){var T=J.extend({restType:V,issueKey:(U&&U.key)||"",term:W},X);return J.ajax({type:"POST",timeout:0,contentType:"application/json",dataType:"json",url:AJS.contextPath()+"/rest/jira-integration/latest/fields/autocomplete",data:JSON.stringify(T)})}function R(X,T,U,V){var W=X.name;X.value=(V[W]&&V[W].remainingEstimate)||(U&&U.fields[W]&&U.fields[W].remainingEstimate)||"";return X}function e(T){return{remainingEstimate:T.val()}}function I(Y,T,U,V){var W=Y.name;var X=(V[W]&&V[W].name)||(U&&U.fields&&U.fields[W]&&U.fields[W].name)||"";Y.options=Q.map(T.allowedValues,function(Z){return{value:Z.id,text:Z.name,selected:X===Z.name,iconUrl:Z.iconUrl}});return Y}function A(U){var T;if(U.id){T=J(U.element).attr("data-icon-url")}return jiraIntegration.templates.fields.select2WithIconOption({optionValue:U.text,iconUrl:T})}function a(X,W,U,T){if(!J.fn.auiSelect2){AJS.log("AUI version 5.2 or greater is required as this plugin needs the .auiSelect2() jQuery plugin.");return}var V=X.find("select");V.addClass("jira-select2-drop-box");V.auiSelect2({hasAvatar:true,minimumResultsForSearch:-1,formatSelection:A,formatResult:A})}function p(U,T){if(Q.has(l,U)&&console&&console.warn){console.warn("Redefining handler for type "+U+".")}l[U]=T}function F(T){return T.schema?(T.schema.system||T.schema.custom||T.schema.customId):T}function N(T){return l[F(T)]}function x(T){var U=d(T);return U&&N(U)}function d(T){return T.closest(".jira-field").attr("data-jira-type")}function H(U,T){return J.ajax({type:"GET",timeout:0,url:AJS.contextPath()+"/rest/jira-integration/1.0/servers/"+U.serverId+"/projects/"+U.projectKey+"/issue-types/"+U.issueType+"/fields-meta"}).pipe(function(W){var V=[];Q.each(W.fields,function(Y){var X=F(Y);if(Y.required&&!Q.contains(T.excludedFields,X)){V.push(Y)}});return V})}function t(T){return/\d/.test(T)&&/^-?\d*\.?\d*$/.test(T)}return{addFieldHandler:p,getFieldHandler:N,canRender:function(T){var V=F(T);var U=l[V];if(!U){return false}return T.operations&&T.operations.length&&(!U.canRender||U.canRender(T))},renderField:function(X,Z,aa,Y){var T=Z.schema.system||Z.schema.custom||Z.schema.customId;var V=l[T];var W=m(T,Z,Y||{});var ab=!V||(V.canRender&&!V.canRender(Z));var U=!Z.operations||!Z.operations.length;if(ab||U){W.reasonContent=ab?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(X?X.url:"#")+'">',"</a>"):U?AJS.format("{0}Edit{1} this field in JIRA",'<a href="'+(X?X.url:"#")+'">',"</a>"):null;if(!W.reasonContent){throw new Error("Invalid unrenderable reason.")}return jiraIntegration.templates.fields.unrenderableTypeField(W)}return V.template(V.getContext(W,Z,X,aa||{}))},getJSON:function(T){var U=x(T);return U&&U.getValue&&U.getValue(T)},attachFieldBehaviors:function(V,U,T){V.find(".jira-field").each(function(Y,X){var W=J(X);var aa=d(W);var Z=aa&&N(aa);var ab=Z&&Z.behavior;if(ab){ab(W,U,aa,T)}})},renderCreateRequiredFields:function(X,W,V,U,T){U=Q.extend({},w,U);function Y(Z){if(U.ignoreFieldsWithDefaultValue){Z=Q.filter(Z,function(ab){return !ab.hasDefaultValue})}var aa=Q.filter(Z,function(ab){return !jiraIntegration.fields.canRender(ab)});if(aa.length){if(T){T(aa)}return}X.html(Q.map(Z,function(ab){return jiraIntegration.fields.renderField(null,ab,null,null)}).join(""));jiraIntegration.fields.attachFieldBehaviors(X,{serverId:V.serverId,projectKey:V.projectKey},null)}if(U.requiredFields){Y(U.requiredFields)}else{H(V,U).done(Y)}}}}(AJS.$,window._));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.integration.jira.jira-integration-plugin:fields', location = '/fields/label-picker.js' */
var jiraIntegration=window.jiraIntegration||{};jiraIntegration.fields=jiraIntegration.fields||{};jiraIntegration.fields._labelPicker=function(a){var b=function(d,c){d.auiSelect2({tags:true,multiple:true,tokenSeparators:[","," "],createSearchChoice:function(e){if(!e){return null}return{id:e,text:e,isNew:true}},query:function(f){var e=function(g){f.callback({results:g})};c(f.term).done(e)},formatResult:function(e){return jiraIntegration.templates.fields.labelFieldResult({label:{labelName:e.text,isNew:e.isNew}})}})};return{build:b}}(AJS.$);
}catch(e){WRMCB(e)};