var MWEmbeddedStatus;

if (MWEmbeddedStatus === undefined) { MWEmbeddedStatus = {}; }

// Implement endsWith to fix IE issues
String.prototype.endsWith = function(pattern) {
  var d = this.length - pattern.length;
  return d >= 0 && this.lastIndexOf(pattern) === d;
};

MWEmbeddedStatus = (function () {
  "use strict";

  var MWEmbeddedStatus;

  /* Constructors */

  MWEmbeddedStatus = function (options,callback) {
    this.instance;
    this.config = $.extend({}, MWEmbeddedStatus.defaultConfig, options || {});
    this._loaded = false;
    this._session = MWEmbeddedStatus.prototype.findCookie("mwa_SID");
    this._clientNonce = (Math.random()+'').substr(2);
    this._clientMessage = this._buildPostMessage(this._clientNonce, "");
    var aObject = {};
    aObject['class'] = this.config['class'];
    aObject['id'] = 'myStatus';
    aObject['width'] = this.config.width;
    aObject['height'] = this.config.height;
    aObject['tabindex'] = this.config.tabindex;
    aObject['statusInterval'] = this.config.statusInterval;
    aObject['title'] = 'Status';
    aObject['frameborder'] = this.config.frameborder;
    aObject['src'] = this._buildStatusUrl(this.config.embeddedEndpoint, 'v2/status.html');

    this._iframe = $('<iframe>', aObject);
  };

  MWEmbeddedStatus.defaultConfig = {};
  MWEmbeddedStatus.defaultConfig['tabindex'] = "-1";
  MWEmbeddedStatus.defaultConfig['title'] = "empty";
  MWEmbeddedStatus.defaultConfig['wrapperId'] ='iframeWrapper';
  MWEmbeddedStatus.defaultConfig['height'] = 0;
  MWEmbeddedStatus.defaultConfig['width'] = 0;
  MWEmbeddedStatus.defaultConfig['frameborder'] = 0;
  MWEmbeddedStatus.defaultConfig['statusInterval'] = 60000;
  MWEmbeddedStatus.defaultConfig['class'] = "embeddedForm";
  MWEmbeddedStatus.defaultConfig['success'] = function(){};
  MWEmbeddedStatus.defaultConfig['error'] = function(){};

  MWEmbeddedStatus.BrowserNotSupportedError = function() {
    this.type = "browserNotSupported";
  };

  /* Class Methods */

  MWEmbeddedStatus.initialize = function(options,callback){
    var _instance = new MWEmbeddedStatus(options,callback);
    try{
      MWEmbeddedStatus.instance = _instance.initialize();
      return this;
    } catch (exception) {
      _instance.errorEvent({type: exception.type})
    }
  };

  MWEmbeddedStatus.setLoginNonce = function(){
    var instance = MWEmbeddedStatus.instance;
    if(instance !== undefined){
      instance.setLoginNonce();
    }
  };

  MWEmbeddedStatus.completeNonce = function(serverNonce){
    MWEmbeddedStatus.instance.completeNonce(serverNonce);
  };

  MWEmbeddedStatus.getSession = function(){
    return MWEmbeddedStatus.instance.getSession();
  };

  MWEmbeddedStatus.findCookie = function(cname) {
	  return MWEmbeddedStatus.instance.findCookie(cname);
  }

  MWEmbeddedStatus.redirectToSSO = function(){
	MWEmbeddedStatus.instance.redirectToSSO();
  }

  MWEmbeddedStatus.checkLoadedStatus = function(){
    MWEmbeddedStatus.instance.checkLoadedStatus();
  };

  MWEmbeddedStatus.verifyEvent = function(event){
    return MWEmbeddedStatus.instance.verifyOrigin(event.origin);
  };

  MWEmbeddedStatus.errorEvent = function(responseData){
    MWEmbeddedStatus.instance.errorEvent(responseData);
  };

  MWEmbeddedStatus.getConfig = function(){
    return MWEmbeddedStatus.instance.config;
  };

  MWEmbeddedStatus.getIframe = function(){
    return MWEmbeddedStatus.instance._getIframe();
  };

  MWEmbeddedStatus.logout = function(){
    return MWEmbeddedStatus.instance.logout();
  };
  
  MWEmbeddedStatus.postMessage = function(msg){
    return MWEmbeddedStatus.instance.postMessage(msg);
  };

  /* Public Methods */

  MWEmbeddedStatus.prototype.initialize = function(){
    this._writeIframe(this.setLoginNonce);
    if (window.addEventListener){
      window.addEventListener('message', this._receiver, false);
      return this;
    }
    else{
      throw new MWEmbeddedStatus.BrowserNotSupportedError();
    }
  };

  MWEmbeddedStatus.prototype.setLoginNonce = function() {
  	MWEmbeddedStatus.postMessage(this._clientMessage);
    setTimeout(MWEmbeddedStatus.checkLoadedStatus, 5000);
  };

  MWEmbeddedStatus.prototype.completeNonce = function(serverNonce) {
    this._loaded = true;
  };

  MWEmbeddedStatus.prototype.getSession = function() {
	  return this._session;
  };
  
  MWEmbeddedStatus.prototype.getIsIE = function() {
    var ua = window.navigator.userAgent;
    if((ua.indexOf('MSIE') >= 0 || ua.indexOf('Trident/') >= 0 || ua.indexOf('Edge/') >=0)){
    	return true;
    }
	  return false;
  };

  MWEmbeddedStatus.prototype.findCookie = function(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return;
  };

  MWEmbeddedStatus.prototype.redirectToSSO = function(){
	  this._redirect("/login/mwa-sso", window.location.href, location.hostname);
  };

  MWEmbeddedStatus.prototype.checkLoadedStatus = function(){
    if(!this._loaded){
      MWEmbeddedStatus.errorEvent({type:"loadFailure"});
    }
  };

  MWEmbeddedStatus.prototype.verifyOrigin = function(origin) {
    return origin.endsWith(".mathworks.com");
  };

  MWEmbeddedStatus.prototype.errorEvent = function(responseData){
    this.config.error(responseData);
  };

  MWEmbeddedStatus.prototype.logout = function(){
    document.cookie = "mwa_SID=; domain=" + window.location.hostname + ";path=/";
 		MWEmbeddedStatus.getConfig().logout();
  };
  
  MWEmbeddedStatus.prototype.postMessage = function(msg){
  	MWEmbeddedStatus.getIframe().contentWindow.postMessage(JSON.stringify(msg), "*");
  };
  
  MWEmbeddedStatus.prototype.checkStatus = function(){
    var msg = {
        "event": "status"
      };
    MWEmbeddedStatus.prototype.postMessage(msg);
    setTimeout(MWEmbeddedStatus.prototype.checkStatus, MWEmbeddedStatus.getConfig().statusInterval);
  };

  /* Private Methods */
  MWEmbeddedStatus.prototype._receiver = function(event){

		  try {
			  if( MWEmbeddedStatus.verifyEvent(event) ){
			  var responseData = JSON.parse(event.data);
			  var eventCode = responseData.event;
			  var serverNonce = responseData.transactionId;

			  if (eventCode == "nonce") {
				  MWEmbeddedStatus.completeNonce(serverNonce);
			  } else if (eventCode == "connected") {
				  var s = MWEmbeddedStatus.getSession();
				  
			  	var interval = MWEmbeddedStatus.getConfig().statusInterval;
			  	var isIE = MWEmbeddedStatus.prototype.getIsIE();
				  MWEmbeddedStatus.postMessage(MWEmbeddedStatus.prototype._buildInitMessage((isIE) ? 0 : interval));
				  if(interval && isIE){
				  	MWEmbeddedStatus.prototype.checkStatus();
				  }
					if (!responseData.sessionId && s !== responseData.sessionId) {
						MWEmbeddedStatus.logout();
					} else if (s !== responseData.sessionId) {
						MWEmbeddedStatus.redirectToSSO();
					}
					
			  } else if (eventCode == "stateChange"){
				  var s = MWEmbeddedStatus.getSession();
				  if(s && !responseData.sessionId){
		     		MWEmbeddedStatus.logout();
				  }else{
				    MWEmbeddedStatus.redirectToSSO();
				  }
			  }
		  }
	  } catch (err) {
		  return;//not one of our postMessages, move along
	  }
  };

  MWEmbeddedStatus.prototype._buildPostMessage = function(transactionId, clientTransactionId) {
    var responseData = {
      "event": "init",
      "transactionId": transactionId,
      "clientTransactionId": clientTransactionId
    };
    return responseData;
  };
  
  MWEmbeddedStatus.prototype._buildInitMessage = function(interval) {
	  var configMessage = {
        "event": 'initialize',
        "interval": interval,
        "origin": location.origin
       };
    return configMessage;
  };

  MWEmbeddedStatus.prototype._buildStatusUrl = function(endpoint, loginUri) {
    return endpoint + loginUri;
  };

  MWEmbeddedStatus.prototype._redirect = function(uri, returnUri, domain) {
    var queryStringParams = "";
    if (returnUri) {
      queryStringParams = "?uri=" + encodeURIComponent(returnUri);
    }
    var redirectUrl = "https://" + domain + uri + queryStringParams;
    window.location.href = redirectUrl;
  };

  MWEmbeddedStatus.prototype._writeIframe = function(callback) {
  	window.addEventListener('DOMContentLoaded', function(){
  		if(MWEmbeddedStatus.getConfig().parentNodeId){
  			$("#" + MWEmbeddedStatus.getConfig().parentNodeId).append(MWEmbeddedStatus.getIframe());
  		}else{
  			document.querySelector("body").appendChild(MWEmbeddedStatus.getIframe());
  		}

  	}, false);
  };

  MWEmbeddedStatus.prototype._getIframe = function(){
    return this._iframe[0];
  };


  return MWEmbeddedStatus;
}());
