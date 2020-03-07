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
	
function goBack(button, param) {
	parent.history.back();
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function goForward(button, param) {
	parent.history.forward();
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function goHome(button, location) {
	if (! alreadyThere(location)) {
		parent.ContentViewFrame.location = location;
	}
	parent.parent.NavFrame.collapseToc();
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function goLocation(button, location) {
	if (! alreadyThere(location)) {
		parent.ContentViewFrame.location = location;
	}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function alreadyThere(location) {
	try {
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

function bookmarkPage(button, param)
{
	// Currently we pick up the url from the content page.
	// If the page is from outside the help domain, a script
	// exception is thrown. We need to catch it and ignore it.
	try
	{
		// use the url from plugin id only
		var url = parent.ContentViewFrame.location.href;
		var i = url.indexOf("/topic/");
		if (i >=0 )
			url = url.substring(i+6);
		// remove any query string
		i = url.indexOf("?");
		if (i >= 0)
			url = url.substring(0, i);
			
		var title = parent.ContentViewFrame.document.title;
		if (title == null || title == "")
			title = url;

		/********** HARD CODED VIEW NAME *************/
		parent.parent.NavFrame.ViewsFrame.bookmarks.bookmarksViewFrame.location.replace("bookmarksView.jsp?operation=add&bookmark="+encodeURIComponent(url)+"&title="+encodeURIComponent(title));
	}catch (e) {}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function bookmarkInfocenterPage(button, param)
{
	// Currently we pick up the url from the content page.
	// If the page is from outside the help domain, a script
	// exception is thrown. We need to catch it and ignore it.
	try
	{
		// use the url from plugin id only
		var url = parent.ContentViewFrame.location.href;
		var i = url.indexOf("/topic/");
		if (i >=0 )
			url = url.substring(i+6);
		// remove any query string
		i = url.indexOf("?");
		if (i >= 0)
			url = url.substring(0, i);
			
		var title = parent.ContentViewFrame.document.title;
		if (title == null || title == "")
			title = url;

		/********** HARD CODED VIEW NAME *************/
		window.external.AddFavorite(parent.ContentViewFrame.location.href,title);
	}catch (e) {}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function resynch(button, param)
{
	try {
		var topic = parent.ContentViewFrame.window.location.href;
		// remove the query, if any
		var i = topic.indexOf('?');
		if (i != -1)
			topic = topic.substring(0, i);
		parent.parent.NavFrame.displayTocFor(topic);
	} catch(e) {}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function printContent(button, param)
{
	try {
		parent.ContentViewFrame.focus();
		parent.ContentViewFrame.print();
	} catch(e) {}
	if (isIE && button && document.getElementById(button)){
		document.getElementById(button).blur();
	}
}

function setButtonLocation(buttonName, href)
{
	var tdbutton = document.getElementById("tdb_" + buttonName);
	if (tdbutton == null) return;
	var anchors = tdbutton.getElementsByTagName("a");
	if (anchors.length == 0) return;
	if ((href == null) || (href == "")) {
	 	anchors[0].removeAttribute("href");
		disableButton(buttonName);
	}
	else {
		var anchorId = anchors[0].id
		if (anchorId == null) anchorId = "";
	 	anchors[0].href = "javascript:goLocation('" + anchorId + "', '" + href + "');";
		enableButton(buttonName);
	 }
}

function disableButton(buttonName)
{
	var button = document.getElementById(buttonName);
	if (button == null) return;
	var currentSrc = button.src;
	if (currentSrc == null) return;
	var onIndex = currentSrc.lastIndexOf("/e_");
	if (onIndex != -1) {
		var disabledSrc = currentSrc.substring(0, onIndex + 1) + currentSrc.substring(onIndex + 3);
		button.src = disabledSrc;
	}
}

function enableButton(buttonName)
{
	var button = document.getElementById(buttonName);
	if (button == null) return;
	var currentSrc = button.src;
	if (currentSrc == null) return;
	var offIndex = currentSrc.lastIndexOf("/");
	var onIndex = currentSrc.lastIndexOf("/e_");
	if ((offIndex != -1) && (onIndex == -1)) {
		var enabledSrc = currentSrc.substring(0, offIndex + 1) + "e_" + currentSrc.substring( offIndex + 1);
		button.src = enabledSrc;
	}
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

