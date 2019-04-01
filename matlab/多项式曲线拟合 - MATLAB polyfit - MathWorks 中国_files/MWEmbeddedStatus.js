if((window.location.pathname.indexOf("/api/parts/") == -1)  && 
		(window.location.pathname !== "/login") && 
		(window.location.pathname.indexOf("/login/") == -1) &&
		(window.location.search.indexOf("requestedDomain=") == -1) &&
		(window.location.hostname.indexOf("mathworks.com") == -1)){
	
	MWEmbeddedStatus.initialize({
		clientString: "login",
		parentNodeId: null,
		embeddedEndpoint: embeddedEndpoint,
		statusInterval: 60000,
		logout: function(responseData){
			window.location.replace("https://" + window.location.hostname + "/login/logout?uri=" + encodeURIComponent(location.href));
		}
	});

}
