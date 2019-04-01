/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2015 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 */

/*jslint browser:true */
/*extern jive console _editor_lang _jive_image_picker_url tinyMCE tinymce */

/**
 * a generic Rich Text Editor used in ClearSpace
 * @param domID: the id of the textarea to replace with a RTE
 */
define([
    'jquery',
    'tinyMCE',
    './getSettings',
    './multiRTE',
    'jiverscripts/conc/synchronize',
    'jiverscripts/conc/next_tick',
    'jive/accessibility',
    'jive/ext/x/x_core',
    'jive/ext/x/x_timer',
    'jive/ext/y/y_core',
    'vendor/jquery/plugins/jquery.autosize',
    'jive/namespace',
    // Plugin requires
    'soy!jive.rte.attachment.attachmentBlock',
    'jquery-plugin/jquery.spinbox',
    'jquery-plugin/jquery.typeAhead',
    'jquery-plugin/jquery.form',
    'jquery-plugin/jquery.safeRemove',
    'soy!jive.rte.table.allCellProperties',
    'soy!jive.rte.table.allColumnProperties',
    'soy!jive.rte.table.allRowProperties',
    'soy!jive.rte.table.allTableProperties',
    'soy!jive.rte.table.deleteText',
    'soy!jive.rte.table.editText',
    'soy!jive.rte.table.mergeCellProperties',
    'soy!jive.rte.table.propertiesChooserCell',
    'soy!jive.rte.table.propertiesChooserColumn',
    'soy!jive.rte.table.propertiesChooserMergeCells',
    'soy!jive.rte.table.propertiesChooserRow',
    'soy!jive.rte.table.propertiesChooserTable',
    'soy!jive.DiscussionApp.soy.rteMsgQuote',
    'soy!jive.i18n.keys.postGuestWroteLabel',
    'soy!jive.i18n.keys.postUserWroteLabel',
    'soy!jive.statusinput.dropdown.ddTagsContent',
    'jive/accessibility'
], function($, tinymce, getSettings, multiRTE, synchronize, nextTick, a11y) {
    jive.namespace('rte');

    window.BOOKMARKTYPE = 2;

    window.errorHandlerMessage = 'An error occurred:';

    window.editorErrorHandler = function(message, exception) {
        // if the message is something other than a timeout, show the message plus the error code
        if (message.indexOf('Timeout') == -1) {
            $('#dwr-error-text').text(errorHandlerMessage + ' Error Code: ' + message);
            $('#dwr-error-table').fadeIn();
            setTimeout(function() {
                $('#dwr-error-table').fadeOut();
            }, 10000);
        }
    };

    window.RawHTMLSaveFunction = function(element_id, html, body) {
        var text = $('#' + element_id);
        if (text.is(':not(:visible)')) {
            return html;
        } else {
            return text.val();
        }
    };

    //Not used by RTEWrap, but we need this for backward compatibility; see CS-23883
    window.refreshLinks = function() {
        multiRTE.forEach(function(rteID) {
            if ($('#' + rteID + '_parent').length < 1) {
                // safari 2, text only
                $('#' + rteID + '_toggle_html').hide();
                $('#jivePreferredEditorModeLinkHREF').hide();
                return;
            }

            if (currentMode == 'rawhtml') {
                $('#' + rteID + '_toggle_html').css('display', 'block');
            } else {
                $('#' + rteID + '_toggle_html').hide();
            }

            if (preferredMode == currentMode) {
                $('#jivePreferredEditorModeLinkHREF').hide();
            } else {
                $('#jivePreferredEditorModeLinkHREF').css('display', 'block');
            }
        });
    };

    window.editor = new jive.ext.y.HashTable();

    jive.rte.RTE = function(services, domID, settings_id, options) {

        var that = this;
        this.options = options = $.extend({
            scrollIntoView: function(target) {
                target.scrollIntoView(true);
            },
            iOSorAndroid: (/iPhone|iPod|iPad|Android/).test(navigator.userAgent)
        }, options);

        var my_editor = null;
        if (typeof(domID) == 'object') {
            // they passed in a tinymce editor
            // as the argument, so use that as
            // my_editor
            my_editor = domID;
            domID = my_editor.id;
        }

        var disabled = false;
        var mobileonly = false;
        var textonly = false;

        //$formTextarea is the textarea that holds the value to be submitted with the form.  It's our storage mechanism.
        var $formTextarea = $('#' + domID);
        if ($formTextarea.val() == '') {
            $formTextarea.val('<p></p>');
        }

        if (!options.rteLayout) {
            options.rteLayout = new jive.rte.RTELayout({
                domExists: true,
                $editorPanel: $formTextarea.parent(),
                rte: that,
                id: domID
            });
        }
        options.theme_advanced_toolbar_container = options.rteLayout.getEditorPanel().get(0);

        //$userTextarea is the "Raw HTML" editor textbox, and used as a create-only fallback in browsers that don't support contentEditable (i.e. mobile).
        var $userTextarea = options.rteLayout.getUserTextarea().hide();

        var popOverWrap = $('<div class="rte_wrap tiny_mce_content"><div class="popOverContent"></div></div>').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
        });
        var $gutter = $('<div class=\'gutter\'></div>');
        var $belowEditor = $('<div class=\'belowEditor\'></div>');

        var richContentWrap = $('<div class="rte_wrap tiny_mce_content"><div class="superRichContent"></div></div>').css({
            position: 'absolute',
            overflow: 'hidden', //This is necessary to keep things inside the iframe bounds.  updateRichHeight manages the height of richContentWrap.
            top: 0,
            left: 0,
            width: '100%'
        });

        if (!$def(settings_id)) {
            settings_id = 0;
        }

        var contentAreaHeight = 0;
        var contentAreaWidth = 0;


        var needsInit = true;
        var settings = null;
        var editorReadyDeferred = new $.Deferred();

        function initializeTinyMCE() {
            if (!my_editor) {
                settings = $.extend({}, getSettings(settings_id), {
                    mode: 'exact',
                    elements: domID,
                    // Ensures getEditor() is run early enough so that the onInit callback gets called
                    oninit: function rteOninitHandler() {
                        getEditor();
                    },
                    oninitFail: function rteInitFailedHandler() {
                        editorReadyDeferred.reject('rte initialization failed');
                    }
                }, that.options);

                if (that.options.comment) {
                    settings.body_class += ' j-rte-comment';
                }

                try {
                    if (!settings.language && typeof(window._editor_lang) != 'undefined') {
                        settings.language = _editor_lang;
                    }
                    if (!settings.jive_image_picker_url && typeof(window._jive_image_picker_url) != 'undefined') {
                        settings.jive_image_picker_url = _jive_image_picker_url;
                    }
                } catch (e) {
                    console.log('error during rte construction', e);
                }
                if (typeof(tinymce) == 'undefined') {
                    // safari 2!
                    editorReadyDeferred.reject('tinymce is undefined');
                } else {
                    try {
                        tinymce.init(settings);
                    } catch (exc) {
                        editorReadyDeferred.reject(exc);
                    }
                }

                editorReadyDeferred.fail(function(ex) {
                    console.log('tinyMCE.init failed: ', ex);
                    textonly = true;
                    $userTextarea.hide();
                    $formTextarea.show();
                    $formTextarea.height('200px');
                });
            } else {
                getEditor();
            }
        }

        this.getSettings = function() {
            return settings;
        };

        this.isTextOnly = function() {
            return textonly;
        };

        this.isMobileOnly = function() {
            return mobileonly;
        };

        this.setMobileOnly = function(b) {
            mobileonly = b;
        };

        this.isDisabled = function() {
            return disabled;
        };

        this.setDisabled = function(b) {
            disabled = b;
        };

        function getService(name) {
            if (services && services[name]) {
                return services[name];
            }
            return null;
        }

        function removeAbsolutePositionFromRawHtml(htmlText){
            return  htmlText.replace('position: absolute','');
        }

        function teardownServices() {
            var promises = [];
            $.each(services || {}, function() {
                if (this.teardown) {
                    var ret = this.teardown();
                    if (ret) {
                        promises.push(ret);
                    }
                }
            });
            return synchronize(promises);
        }

        this.getImageService = function() {
            return getService('imageService');
        };

        this.getLinkService = function() {
            return getService('linkService');
        };

        this.getFormService = function() {
            return getService('formService');
        };

        this.getEntitlementService = function() {
            return getService('entitlementService');
        };

        this.getAttachmentService = function() {
            return getService('attachmentService');
        };

        var ignore_change = true;

        // true if the spell checker is running
        var is_spelling = false;

        function updateRichHeight() {
            var ed = getEditor();
            if (ed) {
                var $iframe = $('iframe', ed.getContentAreaContainer());
                contentAreaHeight = $iframe.outerHeight();
                contentAreaWidth = $iframe.outerWidth();
                richContentWrap.css({
                    height: that.getHeight() - that.getToolbarHeight()
                });

                var jivescroll = ed.plugins.jivescroll;
                that.scrollRichContent(jivescroll.lastScrollX, jivescroll.lastScrollY);
            }
        }

        this.scrollRichContent = function(scrollX, scrollY) {
            this.getHiddenContainer().css('top', (-1 * scrollY))
                .css('left', (-1 * scrollX));

            this.getPopOverContainer().css('top', (-1 * scrollY))
                .css('left', (-1 * scrollX));
        };

        var isRichHeightScheduled = false;

        function scheduleRichHeightUpdate() {
            //schedule a rich height update for the next tick, if it isn't already.
            if (!isRichHeightScheduled) {
                isRichHeightScheduled = true;
                setTimeout(function() {
                    updateRichHeight();
                    isRichHeightScheduled = false;
                }, 0);
            }
        }

        this.scheduleRichHeightUpdate = scheduleRichHeightUpdate;

        options.rteLayout.addListener('resized', scheduleRichHeightUpdate);

        /**
         * returns the tinymce editor
         *
         * this function is private for a reason, and
         * the tinymce editor shouldn't be exposed outside
         * of this class.
         */
        var ignoreResize = true;

        function getEditor() {
            if (!that.isTextOnly() && needsInit) {
                if (!my_editor) {
                    my_editor = tinymce.get(domID);
                }
                if (!$def(my_editor) || !my_editor) {
                    return null;
                }
                needsInit = false;

                // set up the superRichContent for awesomeness
                $('#' + domID + '_tbl td.mceIframeContainer')
                    .prepend(richContentWrap)
                    .append(popOverWrap)
                    .append($gutter)
                    .closest('span.mceEditor')
                    .append($belowEditor);

                // initialize the height/width of the content area
                contentAreaHeight = $('iframe', getEditor().getContentAreaContainer()).outerHeight();
                contentAreaWidth = $('iframe', getEditor().getContentAreaContainer()).outerWidth();

                $.each(my_editor.plugins, function() {
                    try {
                        if (this.setRTE) {
                            this.setRTE(that);
                        }
                    } catch (e) {
                        console.log('Error calling setRTE in plugin', this.getInfo(), e);
                    }
                });

                $userTextarea.keyup(function(e) {
                    that.notifyOnKeyUp(e.keyCode);
                });
                $userTextarea.change(function(e) {
                    that.notifyOnChange(e.keyCode);
                });

                my_editor.onKeyUp.add(function(ed, e) {
                    that.notifyOnKeyUp(e.keyCode);
                });
                my_editor.onChange.add(function(ed, e) {
                    that.notifyOnChange(e.keyCode);
                });
                my_editor.onNodeChange.add(function() {
                    that.notifyOnNodeChange();
                });

                (function(ed) {
                    if (ed.id == domID) {
                        that.notifyInitFinished(that);
                    }
                    ed.getContainer().childNodes[0].style.width = '';
                    var body = ed.getBody();
                    if (body.childNodes.length === 0) {
                        body.appendChild(ed.plugins.jivemacros.createEmptyPara());
                    }

                    if (tinymce.isIE) {
                        $(window.document.body).find('.tiny_mce_content').addClass('ie');
                        $(ed.getBody()).addClass('ie');
                    }
                })(my_editor);
                my_editor.onBeginSpelling.add(function() {
                    is_spelling = true;
                });
                my_editor.onEndSpelling.add(function() {
                    is_spelling = false;
                });
                my_editor.theme.onResize.add(function() {
                    if (ignoreResize) {
                        ignoreResize = false;
                        that.resizeTo(that.getHeight());
                        my_editor.theme.onResize.dispatch();
                    } else {
                        ignoreResize = true;
                        that.notifyResized();
                    }

                    scheduleRichHeightUpdate();
                });
                my_editor.plugins.html.registerToggleFunction(that.toggleEditorMode);

                editorReadyDeferred.resolve(that);
            }

            return my_editor;
        }

        this.isSpellChecking = function() {
            return is_spelling;
        };

        this.toggleSpellChecker = function() {
            getEditor().execCommand('mceSpellCheck');
        };

        this.closeAllDialogs = function() {
            var ed = getEditor();
            if (ed) {
                var windows = ed.windowManager.windows;
                var keys = Object.keys(windows);
                for (var i = 0; i < keys.length; i++) {
                    ed.windowManager.close(null, windows[keys[i]].id);
                }
                ed.plugins.jivemacros.removeDuplicateMacros(ed, false);
                ed.plugins.jivemacros.fixBodyParagraphs();
                return windows;
            }
        };


        this.getMacroForName = function(name) {
            // find our macro
            return window.jive.rte.macros.filter(function(macro) {
                return macro.getName() == name;
            }).first() || null;
        };

        /**
         * adds a macro to the RTE w/ the default paramset
         * @param macro
         * @param paramset a parameter set. these can be created w/ the jive.rte.ParamSet class
         * @param customImage optional location of a custom image to be displayed in the rte.
         */
        this.addMacro = function(macro, paramset, customImage) {
            var ed = getEditor();
            if (!ed) return null;
            ed.undoManager.add();
            if (ed.selection.getNode().nodeName.toLowerCase() == 'html') {
                var body = ed.getBody();
                if (body.childNodes.length) {
                    body = body.childNodes[0];
                }
                ed.selection.select(body);
                ed.selection.collapse(true);
            }
            var pre = ed.plugins.jivemacros.insertMacro(ed, macro, null, customImage);
            ed.plugins.jivemacros.applyParameterSet(pre, macro, paramset);
            ed.plugins.jivemacros.validateMacroElements(pre);
            var uid = that.getUIDForElement($(pre));
            var $ele = that.getHiddenElementFor(uid);
            macro.refreshPosition(that, pre, $ele);
            macro.refresh(that, pre);
            ed.nodeChanged();
            return pre;
        };

        this.applyParamSet = function(node, macro, paramset) {
            var ed = getEditor();
            if (!ed) return null;
            ed.plugins.jivemacros.applyParameterSet(node, macro, paramset);
        };

        /**
         * adds a table w/ data to the RTE
         */
        this.addTable = function(attribs, data) {
            var ed = getEditor();
            if (!ed) return null;

            var html = '',
                i, j, r;

            // Create new table
            html += '<table';

            for (i = 0; i < attribs.length; i++) {
                html += ' ' + attribs[i].name + '=\'' + attribs[i].value + '\'';
            }

            html += '>';
            html += '<tbody>';
            for (i = 0; i < data.length; i++) {
                var row = data[i];
                html += '<tr>';
                if (i === 0) {
                    for (j = 0; j < row.length; j++) {
                        r = row[j];
                        html += '<th align="center" valign="middle" style="background-color:#6690BC;"><font color="#ffffff"><strong>' +
                            r + '</strong></font></th>';
                    }
                } else {
                    for (j = 0; j < row.length; j++) {
                        r = row[j];
                        html += '<td><p>' + r + (tinymce.isIE ? '' : '<br mce_bogus="1"/>') + '</p></td>';
                    }
                }
                html += '</tr>';
            }
            html += '</tbody>';
            html += '</table>';

            ed.execCommand('mceBeginUndoLevel');
            ed.execCommand('mceInsertContent', false, html);
            ed.addVisual();
            ed.execCommand('mceEndUndoLevel');
            return true;
        };

        /**
         * returns a jquery selection of the currently
         * focused DOM node
         */
        this.getCurrentNode = function() {
            var ed = getEditor();
            if (!ed) return null;
            return $(ed.selection.getNode());
        };

        /**
         * destroys an editor
         */
        this.destroy = function() {
            // Fix for IE 7 focus bug see CS-23334
            // focus on parent window, otherwise IE 7 will not focus on newly create tiny mce iframe and allow users to edit
            // parent window's dom.
            this.killYourself();
            this.teardownServices();
            $(window).focus();
            // End Fix
            if (my_editor) {
                tinymce.remove(my_editor);
            }
            popOverWrap.remove();
            richContentWrap.remove();
            // JIVE-2360: using this instead of jQuery.remove() to resolve this ticket, and also for performance reasons
            $(this.getDOM()).parent().html('');
            $(this.getTextArea()).remove();
            options.rteLayout.teardown();
        };

        this.teardownServices = function() {
            teardownServices();
        };

        /**
         * returns the i18n value for the input string, or returns the default if none
         * @param str
         * @param def
         */
        this.getLang = function(str, def) {
            var ed = getEditor();
            if (!ed) return null;
            return ed.getLang(str, def);
        };

        /**
         *  returns true if the editor has been fully loaded
         *  returns false otherwise
         *
         * don't count on any other functions working until this
         * guy returns true...
         */
        this.isReady = function() {
            if (that.isTextOnly()) {
                return true;
            }
            var ed = getEditor();
            return !!ed;
        };

        this.getReadyPromise = function() {
            return editorReadyDeferred.promise();
        };


        /**
         * returns the DOM container for this editor
         */
        this.getDOM = function() {
            var ed = getEditor();
            if (!ed) return null;
            return ed.getContainer();
        };

        /**
         * returns the ID of the DOM that this editor was initialized with
         */
        this.getID = function() {
            return domID;
        };

        /**
         * sets the XHTML data for this editor
         * @param html
         */
        this.setHTML = function(html) {
            html = this.replaceWhiteSpace(html);
            var ret;
            if (that.isMobileOnly()) {
                ret = $userTextarea.val(html);
            } else if (that.isTextOnly()) {
                ret = $formTextarea.val(html);
            } else {
                $userTextarea.val(html);

                var ed = getEditor();

                var prevFocus = null;
                if (tinymce.isIE) {
                    prevFocus = document.activeElement;
                    ed.focus();
                }
                ret = ed.setContent(html.replace(/>\n/g, '>'));
                if (prevFocus) prevFocus.focus();
                if (html === '' && ed.plugins.jiveplaceholder) {
                    ed.plugins.jiveplaceholder.onBlur();
                }
            }
            this.notifyOnChange();
            return ret;
        };

        this.getOriginalTextBox = function() {
            return $formTextarea;
        };

        /**
         * returns the XHTML data from this editor
         */
        this.getHTML = function() {
            if (that.isMobileOnly()) {
                return $userTextarea.val();
            }
            if (that.isTextOnly()) {
                return $formTextarea.val();
            }
            if (that.isDisabled()) {
                return $formTextarea.val();
            }
            var ed = getEditor();
            if (this.isHidden()) {
                var htmlText = $userTextarea.val().replace(/>\n/g, '>')
                ed.setContent(removeAbsolutePositionFromRawHtml(htmlText));
            }

            // Quirks.js adds a zwnj, unicode \u200c, for iDevices
            var body = tinymce.isIDevice ? ed.getContent().replace(/&zwnj\;/, '') : ed.getContent();

            if (($.trim(body).length > 0) && body.indexOf('<body') !== 0) {
                body = '<body>' + body + '</body>';
            }
            return body;
        };

        /**
         * Replaces white space with nbsp.
         * On large strings (100k+), this method is
         * about 100-1000 times faster than string concatination.
         * @param str
         */
        this.replaceWhiteSpace = function(str) {
            var buffer = [];
            var start = 0;
            var end = -1;
            while ((end = str.indexOf('  ', start)) >= 0) {
                if (end < start) {
                    break;
                }
                buffer.push(str.substring(start, end));
                buffer.push('&nbsp;');
                start = end + 1;
            }

            if (start < str.length) {
                buffer.push(str.substring(start));
            }
            return buffer.join('');
        };

        /**
         * shows the editor in the page if it's hidden
         */
        this.show = function() {
            var ed = getEditor();
            if (!ed) return null;
            ed.show();
            that.notifyShowing();
        };

        /**
         *  returns the window object that this RTE is
         *  inside of
         */
        this.getWindow = function() {
            var ed = getEditor();
            if (!ed) return null;
            return ed.getWin();
        };

        this.getDoc = function() {
            var ed = getEditor();
            if (!ed) return null;
            return ed.getDoc();
        };


        var hiddenContainer = null;
        this.getHiddenContainer = function() {
            if (hiddenContainer) {
                return hiddenContainer;
            }
            hiddenContainer = richContentWrap.find('div.superRichContent');
            return hiddenContainer;
        };

        var hiddenPOContainer = null;
        this.getPopOverContainer = function() {
            if (hiddenPOContainer) {
                return hiddenPOContainer;
            }
            hiddenPOContainer = popOverWrap.find('div.popOverContent');
            return hiddenPOContainer;
        };

        this.getGutter = function() {
            return $gutter.get(0);
        };

        /**
         * Be sure to call autoReposition if you make changes to the DOM that might affect the layout.
         */
        this.getBelowEditorArea = function() {
            return $belowEditor.get(0);
        };

        this.getHiddenElementFor = function(uid) {
            var $me = that.getHiddenContainer();
            var $ele = $me.find('#' + uid);
            if ($ele.length) {
                return $ele;
            }
            return null;
        };

        var UID_CLASS_RE = /\b_jivemacro_uid(\w+)\b/;
        /**
         * returns the UID for the element
         * if any, or returns null if the
         * element does not have a UID
         * @param $ele the element
         */
        this.getUIDForElement = function($ele) {
            var match = UID_CLASS_RE.exec($ele.attr('class'));
            if (match) {
                return match[1];
            }
            return null;
        };


        var hashOfElements = new jive.ext.y.HashTable();

        this.getRTEElementFor = function(uid) {
            if (uid) {
                var $ele = hashOfElements.get(uid);
                if ($ele) {
                    if ($ele.length == 1 && $ele.get(0).parentNode) {
                        //cache hit
                        return $ele;
                    }
                    //cache is stale or corrupt, remove the offending key
                    hashOfElements.clear(uid);
                }
                //Do the class name lookup
                $ele = $('._jivemacro_uid' + uid, that.getBody());
                if ($ele.length == 1) {
                    //only cache the results if they're unique
                    hashOfElements.put(uid, $ele);
                }
                if ($ele.length > 0) {
                    return $ele;
                }
            }
            return null;
        };

        this.removeMacroWithUID = function(uid) {
            var $ele = hashOfElements.get(uid);
            if ($ele) {
                $ele.remove();
            }
            hashOfElements.clear(uid);
            var $me = that.getHiddenContainer();
            $me.children('#' + uid).remove();
        };

        this.setAttributeForMacroWithUID = function(uid, attribute, value) {
            var $ele = hashOfElements.get(uid);
            if ($ele) {
                $ele.attr(attribute, value);
            }
        };

        this.generateUID = function() {
            return '_' + (new Date()).getTime() + Math.round(Math.random() * 10000);
        };

        /**
         * returns the document body of which this
         * RTE is a part
         */
        this.getBody = function() {
            var ed = getEditor();
            if (!ed) return null;
            return ed.getBody();
        };

        this.getTextArea = function() {
            return $formTextarea;
        };

        /**
         * appends the input HTML to the body of the document
         * @param str
         */
        this.appendHTML = function(str) {
            $(this.getBody()).append(str);
        };

        /**
         * inserts HTML at the cursor position
         */
        this.insertHTMLAtCursor = function(str) {
            if (str.indexOf('<body>') >= 0) {
                str = str.replace(/<body>/g, '');
            }
            if (str.indexOf('</body>') >= 0) {
                str = str.replace(/<\/body>/g, '');
            }
            if (!getEditor().selection.getNode() ||
                getEditor().selection.getNode().nodeName.toLowerCase() == 'body') {
                that.appendHTML(str);
            } else {
                $(getEditor().selection.getNode()).after(str);
            }
        };

        /**
         * returns the current selection for the editor
         *
         * the range that is returned should be used for read-only
         * selection only. you cannot / should not update the selection
         * using this returned range.
         *
         * also, if the DOM changes / is modified after you read the value
         * from this function, then you'll need to call this function again
         * to get a valid updated selection.
         */
        this.selection = function() {
            return getEditor().selection.getRng(true);
        };

        /**
         * focuses the cursor in the RTE
         */
        this.focus = function() {
            try {
                var ed = getEditor();
                if (!ed || ed.destroyed) {
                    return;
                }

                //Speak any errors in the label
                var $labelErrors = $('label[for=\'' + this.getID() + '\'] .jive-error-message');
                var errorText = [];
                $labelErrors.each(function() {
                    errorText.push($(this).text());
                });
                if (errorText.length) {
                    a11y.speak(errorText.join('\n'));
                }

                if (this.isHidden()) {
                    $userTextarea.focus();
                } else {
                    var body = that.getBody();
                    ed.focus();

                    // scroll to top of the entire RTE region, not just the editable field.
                    var $table = $(getEditor().getContainer()).find('table:first');
                    options.scrollIntoView($table.get(0));

                    // adjust scroll beyond toolbar when pinned/floating.
                    if (that.options.pinToolbar) {
                        var scrollTop = $(window).scrollTop();
                        $(window).scrollTop(scrollTop - this.getToolbarHeight());
                    }
                    if (body.childNodes.length === 0) {
                        // the <body> is empty,
                        // add a <p> and select it
                        body.appendChild(ed.plugins.jivemacros.createEmptyPara());
                        ed.selection.select(body.childNodes[0].childNodes[0]);
                        ed.selection.collapse(true);
                        return;
                    } else if (body.childNodes.length == 1) {
                        var p = body.childNodes[0];
                        var br;
                        if (p.childNodes.length == 1 && (br = p.childNodes[0]) && br.nodeName.toLowerCase() == 'br') {
                            ed.selection.select(br);
                            ed.selection.collapse(true);
                            return;
                        }
                    }
                    if (!that.options.iOSorAndroid && that.getCurrentNode()[0].nodeName.toLowerCase() == 'body') {
                        // it put the cursor in the body tag, and that ain't no good,
                        // try again, and force it into a /real/ tag
                        var node = that.getBody();
                        while (node.nodeType == 1 && node.childNodes.length > 0) {
                            node = node.childNodes[0];
                        }
                        ed.selection.select(node);
                        ed.selection.collapse(true);
                    }
                }
            } catch (e) {
                console.log(e);
            }
        };

        /**
         * Focuses cursor in the RTE.  This method defers to the built in TinyMCE
         * implementation.
         */
        this.tinymceFocus = function() {
            getEditor().focus();
        };

        /**
         * collapse the editor's cursor to a point
         */
        this.collapseSelection = function() {
            var ed = getEditor(),
                node = ed.selection.getNode();
            if (node && !ed.selection.isCollapsed()) {
                that.focus();
                ed.selection.collapse();
            }
        };

        /**
         * select the input node
         */
        this.select = function(node) {
            var ed = getEditor();
            ed.selection.select(node);
        };

        /**
         * hides the RTE from view
         */
        this.hide = function() {
            var ed = getEditor();
            if (ed && !ed.destroyed) {
                ed.hide();
            }
        };

        /**
         * returns true of the RTE is hidden from view
         */
        this.isHidden = function() {
            // The RTE is hidden when the regular textbox is visible.
            return $userTextarea.is(':visible');
        };

        /**
         * resize the editor to the input height
         * @param height
         */
        this.resizeTo = function(height) {
            options.rteLayout.resizeTo(height);
        };

        /**
         * this should be called any time changes are made to the RTE's dom, such as adding things to the belowEditor area.
         */
        this.autoReposition = function() {
            options.rteLayout.reposition();
        };

        /**
         * returns the height in px of the editor
         */
        this.getHeight = function() {
            var contain = $(getEditor().getContainer());
            var table = contain.find('table:first').get(0);
            if (table) {
                return $(table).height();
            } else {
                return 100;
            }
        };

        this.getToolbarHeight = function() {
            var $rows = $(getEditor().getContainer()).find('table:eq(0) > tbody > tr'),
                height = $rows.eq(0).find('td:first, th:first').height();

            if ($rows.length > 2) {
                height += $rows.last().find('td:first, th:first').height();
            }

            return height;
        };

        this.getContentAreaHeight = function() {
            return contentAreaHeight;
        };

        this.getContentAreaWidth = function() {
            return contentAreaWidth;
        };

        /**
         * this tells the RTE that we won't be using it
         * anymore, so it needs to turn off any timer
         * functions it's using, etc
         */
        this.killYourself = function() {
            var ed = getEditor();
            if (!ed) return;
            $.each(ed.plugins, function() {
                if (this.killYourself) {
                    this.killYourself();
                }
            });
        };

        /**
         * toggles the editor between rich and raw html
         */
        this.toggleEditorMode = function(edid) {
            var h, tinyt;
            if (edid == domID) {
                if (that.isHidden()) {
                    /* Switch from rawhtml to advanced. */
                    h = $userTextarea.height();
                    $userTextarea.hide();
                    that.show();
                    that.setHTML(removeAbsolutePositionFromRawHtml($userTextarea.val()));
                    that.focus();
                    that.resizeTo(h);
                    getEditor().plugins.jivemacros.removeDuplicateMacros(getEditor(), false);
                    getEditor().plugins.jivemacros.fixBodyParagraphs();
                } else {
                    /* Switch from advanced to rawhtml. */
                    tinyt = $('#' + domID + '_tbl');
                    h = tinyt.height();
                    $userTextarea.val(that.getHTML(true));
                    that.hide();
                    $userTextarea.height(h);
                    $userTextarea.autosize();
                    $userTextarea.show();
                    // autosize doesn't correctly size the text box initially, manually ask it to adjust the size
                    _.defer(function() {
                        $userTextarea.trigger('autosize');
                    });
                    // never show tinyMCE's text box to the user
                    // only show our own text box
                    $formTextarea.hide();
                    that.focus();
                }
                scheduleRichHeightUpdate();
                that.notifyDoneTogglingMode();
            }
        };


        this.i18n = function(key, def) {
            if (typeof(def) == 'undefined') {
                def = key;
            }
            var ed = getEditor();
            return ed.getLang(key, def);
        };

        /******************************************
         * listener functions
         ******************************************/
        var listeners = [];
        var listener_actions = [];

        this.addListener = function(list) {
            if ($def(list.onShow)) {
                list.onShow();
            }
            listeners.push(list);
            if (that.initted && list.initFinished) {
                list.initFinished(that);
            }
        };

        /**
         * act must be a thunk (a function without arguments)
         * it will be executed after either
         * notifyLoadFinish or notifyLoadFail
         */
        this.addListenerAction = function(act) {
            listener_actions.push(act);
        };

        /**
         * private
         * executes all the listener actions
         */
        this.executeListenerActions = function() {
            while (listener_actions.length > 0) {
                listener_actions[0]();
                listener_actions.splice(0, 1);
            }
        };

        this.removeListener = function(list) {
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i] == list) {
                    listeners.splice(i, 1);
                }
            }
        };

        this.initted = false;
        this.notifyInitFinished = function(rte) {
            if (!that.initted) {
                that.initted = true;
                for (var i = 0; i < listeners.length; i++) {
                    listeners[i].initFinished(rte);
                }
                that.executeListenerActions();
            }
        };

        this.notifyOnKeyUp = function(keyCode) {
            // the user typed a key!
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].onKeyUp(keyCode);
            }
            that.executeListenerActions();
        };

        this.notifyOnChange = function() {
            if (ignore_change) {
                ignore_change = false;
                return;
            }
            // the user typed a key!
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].onChange();
            }
            that.executeListenerActions();
        };

        this.notifyResized = function() {
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].onResize();
            }
            that.executeListenerActions();
        };

        this.notifyShowing = function() {
            // the user typed a key!
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].onShow();
            }
            that.executeListenerActions();
        };

        this.notifyOnNodeChange = function() {
            // the user typed a key!
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].onNodeChange();
            }
            that.executeListenerActions();
        };

        this.notifyDoneTogglingMode = function() {
            // the user typed a key!
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].doneTogglingMode();
            }
            that.executeListenerActions();
        };

        nextTick(initializeTinyMCE);
    };

    return jive.rte.RTE;
});
