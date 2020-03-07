/*******************************************************************************
 * Copyright (c) 2000, 2004 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials 
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 * 
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
 
var isMozilla = navigator.userAgent.indexOf('Mozilla') != -1 && parseInt(navigator.appVersion.substring(0,1)) >= 5;
var isIE = navigator.userAgent.indexOf('MSIE') != -1;

var navVisible = true;
	
function goLocation(button, location) {
	
	if (! alreadyThere(location)) {
		if (location.indexOf("http://") == 0) {
			top.document.location = location;
		}
		else {
			parent.ContentViewFrame.location = location;
		}
	}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function goFormWithRef(button, location) {
	
	if (! alreadyThere(location)) {
		var contentHref = getContentHref();
		var contentTitle = getContentTitle();
		var contentBookTitle = getContentBookTitle();
		
		if ((contentHref != null) && (contentHref != "")) {
			(location.indexOf("?") == -1) ? location+="?" : location+="&";
			location += "refURL=" + encodeURIComponent(contentHref);
		}
		if ((contentTitle != null) && (contentTitle != "")) {
			(location.indexOf("?") == -1) ? location+="?" : location+="&";
			location += "refPage=" + encodeURIComponent(contentTitle);
		}
		if ((contentHref != null) && (contentHref != "")) {
			(location.indexOf("?") == -1) ? location+="?" : location+="&";
			location += "refBook=" + encodeURIComponent(contentBookTitle);
		}		
		if (location.indexOf("http://") == 0) {
			top.document.location = location;
		}
		else {
			parent.ContentViewFrame.location = location;
		}
	}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function alreadyThere(location) {
	try {
		if (location.indexOf("http://") == 0) {
			return false;
		}
		var index = location.indexOf("#");
		if (index > 0) {
			location = location.substring(0, index);
		}
		index = location.indexOf("?");
		if (index > 0) {
			location = location.substring(0, index);
		}
		index = location.indexOf("/");
		if (index > 0) {
			location = location.substring(index);
		}
		var currentHref = parent.ContentViewFrame.location.href;
		index = currentHref.indexOf("#");
		if (index > 0) {
			currentHref = currentHref.substring(0, index);
		}
		index = currentHref.indexOf("?");
		if (index > 0) {
			currentHref = currentHref.substring(0, index);
		}
		currentHref = currentHref.substring(currentHref.length - location.length);
		return (currentHref == location);
	}
	catch (e) {
	}
	return false;
}

function getContentHref() {
	try {
    	var contentHref = parent.ContentViewFrame.location.href;
    	var fragment = null;
    	var index = contentHref.indexOf("#");
    	if (index > 0) {
    		fragment = contentHref.substring(index + 1);
    		contentHref = contentHref.substring(0, index);
    	}	
    	var queryString = null
    	index = contentHref.indexOf("?");
    	if (index > 0) {
    		queryString = contentHref.substring(index + 1);
    		contentHref = contentHref.substring(0, index);
    		var queries = queryString.split("&");
    		for (var i = 0; i < queries.length; i++) {
    			if (queries[i].search(/^(refURL|refPage|refBook)=/ > 0)) {
    				queries.splice(i, 1);
    				i--;
    			}
    		}
    		queryString = queries.join("&");
    	}
    	if ((queryString != null) && (queryString.length > 0)) {
    		contentHref += "?" + queryString;
    	}
    	if ((fragment != null) && (fragment.length > 0)) {
    		contentHref += "#" + fragment;
    	}
    	return contentHref;
	}
	catch(e) {
	}
	return null;
}

function getContentTitle() {
	try {
    	if (! parent.ContentViewFrame.document.getElementsByTagName) {
    		return normalizeWhitespace(parent.ContentViewFrame.document.title);
    	}
    	var hElements = null;
    	for (var i = 1; i <= 6; i++) {
    		hElements = parent.ContentViewFrame.document.getElementsByTagName("h" + i);
    		if (hElements.length > 0) {
    			var contentTitle = getText(hElements[0]);
    			return normalizeWhitespace(contentTitle);
    		}
    	}
	}
	catch(e) {
	}
	return null;
}

function getContentBookTitle() {
	try {
    	if (! parent.ContentViewFrame.document.getElementsByTagName) {
    		return null;
    	}
    	var trElements = parent.ContentViewFrame.document.getElementsByTagName("tr");
    	for (var i = 0; i < trElements.length; i++) {
    		if (trElements[i].className == "titlebar") {
    			var contentBookTitle = "";
    			var titlebarCells = trElements[i].childNodes;
    			for (var j = 0; j < titlebarCells.length; j++) {
    				if (j > 0) {http://luar.com.hk/blog/?cat=44
    					contentBookTitle += " ";
    				}
    				contentBookTitle += getText(titlebarCells[j]);
    			}				
    			return normalizeWhitespace(contentBookTitle);
    		}
    	}
	}
	catch(e) {
	}
	return null;
}

function getText(node) {
    var strings = [];
    getStrings(node, strings);
    return strings.join("");

    function getStrings(node, strings) {
        if (node.nodeType == 3 /* Node.TEXT_NODE */) 
            strings.push(node.data);
        else if (node.nodeType == 1 /* Node.ELEMENT_NODE */) {
            for(var n = node.firstChild; n != null; n = n.nextSibling) {
                getStrings(n, strings);
            }
        }
    }
}

function normalizeWhitespace(str) {
	return str.replace(/\s\s*/g, ' ').replace(/^\s/, '').replace(/\s$/, '');
}

function setTitle(label)
{
	if( label == null) label = "";
	var title = document.getElementById("titleText");
	if(title !=null){
		var text = title.lastChild;
		text.nodeValue = " "+label;
	}
}
