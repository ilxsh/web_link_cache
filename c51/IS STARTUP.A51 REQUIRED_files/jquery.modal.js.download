var modal = (function(){
    var 
    method = {},
    $overlay,
    $modal,
    $content,
    $close,
    $divSettings;
    
    // Center the modal in the viewport
    method.center = function () {
        var top, left;
        top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
        left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
        $modal.css({
            top:top + $(window).scrollTop(), 
            left:left + $(window).scrollLeft()
        });
    };
    // Open the modal
    method.open = function (settings) {
        //console.log('opening');
        $content.empty().append(settings.content);
        $modal.css({
            width: settings.width || 'auto', 
            height: settings.height || 'auto'
        });
        method.center();
        $(window).bind('resize.modal', method.center);
        
        if ($.browser.msie){
            // bring the masking in 
             $overlay.css({"filter": "alpha(opacity = 80"}).show();
        // bring the modal window in
            $modal.show();            
        }
        else 
        {
            // bring the masking in 
            $overlay.fadeIn(1000); 
            $overlay.fadeTo("slow", 0.85);
    
            // bring the modal window in
            $modal.fadeIn(500);
        }
    };
    // Close the modal
    method.close = function () {
        //console.log('closing');
        $modal.hide();
        $overlay.hide();
        $content.empty();
        //re-attach the div to the body whenever a modal is being closed
        $('body').append($divSettings);
        $(window).unbind('resize.modal');
    };
    
    method.launchVideo = function(settings) {
        method.open({content: '<iframe id="video" width="'+settings.width+'" height="'+settings.height+'" src="'+settings.href+'?wmode=transparent" frameborder="0" allowfullscreen></iframe>',width: settings.width, height: settings.height});
    };
    method.infoModal = function(settings) {
        method.open({content: settings.info,width: settings.width,height: settings.height});
        $modal.addClass('infoModalWindow');
    };
    
    method.custom = function(settings) {
        if (settings.div)
        {
        
        settings.content = $(settings.div).html();
        /*detach the div from the DOM whenever a modal is being created so that it does not appear twice.
         *When divs appear twice, jquery selectors do not work in IE7
         */  
            $divSettings = $(settings.div).detach();
            //$(settings.div).css('display',"block");
            
        }
        method.open({content: settings.content, width: settings.width, height: settings.height});
        $modal.addClass('genericModal');
    }
    // Generate the HTML and add it to the document
    $overlay = $('<div id="mask"></div>');
    $modal = $('<div id="modal"></div>');
    $content = $('<div id="content"></div>');
    $close = $('<a id="close" href="#">close</a>');
    $modal.hide();
    $overlay.hide();
    $modal.append($content, $close);
    $(document).ready(function(){
        $('body').append($overlay, $modal);
    });
    $close.on("click",function(e){
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        method.close();
    });
    return method;
}());

// Wait until the DOM has loaded before querying the document
$(document).ready(function(){

    // on clicking of the mask, close window
    $('div#mask').on('click',function() {
        //console.log('you clicked the mask');
        modal.close();
    });
    
    $('a.videoPopLink').on('click',function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    });
    $('a.infoPopLink').on('click',function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    });
    $('a.customModal').on('click',function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        return false;
    });
    
});

// close modal window on escape key
$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        modal.close();
        //console.log('escape key works');
    }
});