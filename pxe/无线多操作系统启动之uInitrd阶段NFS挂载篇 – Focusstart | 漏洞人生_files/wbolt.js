// JavaScript Document
(function(){
		jQuery('#J_wboltDonateBtn').click(function(e) {
            jQuery('#J_popUpWB').show();
			jQuery('#J_maskWB').show();
			//
			var tab = jQuery('.wbolt-tab-item').eq(0);
			var url = tab.attr('url');
			if(url && url.length>0){
				setTimeout(function(){window.location.href = url;},1250);
			}		
        });
		jQuery('#J_closeBtn,#J_maskWB').click(function(e) {
            jQuery('#J_popUpWB').hide();
			jQuery('#J_maskWB').hide();
        });
        
		jQuery('.wbolt-tab-item').eq(0).addClass('current');
		jQuery('.wbolt-tab-cont').eq(0).addClass('current');
		
		
		if(jQuery('.wbolt-tab-item').length == 1){			
			jQuery('.wbolt-tab-nav').hide();			
		}
		
		jQuery('.wbolt-tab-item').click(function(e) {
			jQuery('.wbolt-tab-item').removeClass('current');
			jQuery('.wbolt-tab-cont').removeClass('current');
			
			var $this = jQuery(this);
			
            $this.addClass('current');
			var idx = $this.index();
			jQuery('.wbolt-tab-cont').eq(idx).addClass('current');
			
			var url = $this.attr('url');
			if(url && url.length>0){
				window.open(url);
			}
			return false;
				
        });
		
    })()