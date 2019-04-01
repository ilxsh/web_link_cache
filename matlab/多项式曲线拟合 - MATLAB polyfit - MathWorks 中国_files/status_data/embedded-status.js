var EmbeddedStatus = EmbeddedStatus || {};

/*
 * inputs:
 *   - the event from the postMessage event
 */
EmbeddedStatus.receiver = function(event) {
	try {
		var responseData = JSON.parse(event.data);
		var eventCode = responseData.event;

		if(eventCode === 'initialize'){
			interval = responseData.interval;
			origin = responseData.origin;
			EmbeddedStatus.statusCheck(true);
		}else if(eventCode === 'status'){
			EmbeddedStatus.statusCheck(false);
		}
	} catch (err) {
		return;//not one of our postMessages, move along
	}
};

EmbeddedStatus.statusCheck = function(isInitial) {
	var currentStatus = EmbeddedStatus.getStatus();
	
	if(currentStatus && !isInitial){
		EmbeddedStatus.validate();
	}

	//Check again
	currentStatus = EmbeddedStatus.getStatus();

	if(session != currentStatus){//IF STATUS CHANGED POST MESSAGE TO CONTAINER
		parent.postMessage(EmbeddedStatus.buildMsg('stateChange', currentStatus), origin);
		initialState = currentStatus;
	}

	if(interval){
		setTimeout(EmbeddedStatus.statusCheck, interval);
	}
};

EmbeddedStatus.validate = function(){
		var statusPost = $.ajax({
			method: "POST",
			url : "/embedded-login/v2/validateStatus"
		});
};

EmbeddedStatus.getStatus = function() {
	return EmbeddedStatus.findSessionCookie();
};

EmbeddedStatus.buildMsg = function(event, id){
	var responseData = {
			"event": event,
			"sessionId" : id
	};
	return JSON.stringify(responseData);
};

EmbeddedStatus.findSessionCookie = function(){
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return JSON.parse(c.substring(name.length, c.length)).id;
		}
	}
	return "";
}