(function() {
  jQuery(window).scroll(function() {
    var oVal;
    oVal = jQuery(window).scrollTop() / 300;
    if(oVal>1)
    {
	    oVal = 1;
    }
    oVal = parseFloat(1-oVal);
    
    return jQuery("#page_caption.hasbg .page_title_wrapper .page_title_inner").css("opacity", oVal);
  });

}).call(this);

jQuery(document).ready(function(){ 
	"use strict";

	jQuery(document).setNav();
	
	jQuery(window).resize(function(){
		jQuery(document).setNav();
	});

	jQuery('.fancy_video, .lightbox_vimeo, .lightbox_youtube, .woocommerce-product-gallery__image a').magnificPopup({
	  	src: jQuery(this).attr('href'),
	  	type: 'inline',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
	
	jQuery('a.fancy-gallery, .pp_gallery a').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade',
	  	gallery:{
	    	enabled:true
		}
	});
	
	jQuery('.img_frame').magnificPopup({
	  	type: 'image',
	  	removalDelay: 300,
	  	mainClass: 'mfp-fade'
	});
    
    jQuery('#menu_expand_wrapper a').on( 'click', function(){
    	jQuery('#menu_wrapper').fadeIn();
	    jQuery('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    jQuery('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    jQuery(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	jQuery('#menu_close').on( 'click', function(){
		jQuery('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    jQuery('#menu_wrapper').fadeOut();
	});
	
	jQuery(window).resize(function() {
		if(jQuery(this).width() < 768)
		{
			jQuery('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = jQuery('#pp_enable_right_click').val();
	
	if(parseInt(isDisableRightClick!=0))
	{
		jQuery(this).bind("contextmenu", function(e) {
	    	e.preventDefault();
	    });
	}
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 1, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000,easing:"easeOutExpo"});
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
		}
	});
 
	jQuery('#toTop, .hr_totop').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = jQuery('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		jQuery("img").mousedown(function(){
		    return false;
		});
	}
	
	if(jQuery('#pp_topbar').val()==0)
	{
		var topBarHeight = jQuery('.header_style_wrapper').height();
	}
	else
	{
		var topBarHeight = parseInt(jQuery('.header_style_wrapper').height()-jQuery('.header_style_wrapper .above_top_bar').height());
	}
	
	var logoHeight = jQuery('#custom_logo img').height();
	var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
	var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
	var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
	var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
	
	if(!jQuery('#wrapper').hasClass('menu_transparent'))
	{
		jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	}
	
	jQuery(window).resize(function(){
	    if(jQuery(this).width()>768)
	    {
	    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
		    jQuery('.logo_wrapper').css('marginTop', '');
		    jQuery('.top_bar #searchform button').css('paddingTop', '');
	    }
	    else
	    {
	    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
	    }
	});
	
	jQuery(window).scroll(function(){
		var scrollTop = jQuery(window).scrollTop();
		var docHeight = jQuery(document).height();
		var winHeight = jQuery(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);
		
		jQuery('#post_indicator').css('width', scrollPercentRounded+'%');
	});
	
	jQuery(window).scroll(function(){
	    if(jQuery('#pp_fixed_menu').val()==1)
	    {
	    	if(jQuery(this).scrollTop() >= 200){
	    		jQuery('.header_style_wrapper .above_top_bar').hide();
	    		jQuery('.extend_top_contact_info').hide();
	    		
	    		jQuery('.top_bar').addClass('scroll');
	        }
	        else if(jQuery(this).scrollTop() < 200)
	        {
	        	jQuery('.header_style_wrapper .above_top_bar').show();
	        	jQuery('.extend_top_contact_info').show();
	    	    
	    	    jQuery('#custom_logo img').removeClass('zoom');
	    	    jQuery('#custom_logo img').css('maxHeight', '');
	    	    
	    	    jQuery('#custom_logo').css('marginTop', parseInt(logoMargin)+'px');
	    		
	    		jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop+'px');
	    		jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom+'px');;
	    		
	    		jQuery('.top_bar').removeClass('scroll');
	    		
	    		if(jQuery(this).width()>768)
			    {
			    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
				    jQuery('.logo_wrapper').css('marginTop', '');
				    jQuery('.top_bar #searchform button').css('paddingTop', '');
			    }
			    else
			    {
			    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
			    }
	        }
	   }
	   else
	   {
	       if(jQuery(this).scrollTop() >= 200)
	       {
	       		jQuery('.header_style_wrapper').addClass('nofixed');
	       }
	       else
	       {
	       		jQuery('.header_style_wrapper').removeClass('nofixed');
	       		
	       		if(jQuery(this).width()>768)
			    {
			    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
				    jQuery('.logo_wrapper').css('marginTop', '');
				    jQuery('.top_bar #searchform button').css('paddingTop', '');
			    }
			    else
			    {
			    	jQuery('#wrapper').css('paddingTop', parseInt(jQuery('.header_style_wrapper').height())+'px');
			    }
	       }
	   }
	});
	
	if(jQuery('#tg_smart_fixed_menu').val()==1)
	{
		//Smart sticky menu
		if(!is_touch_device())
		{
		    var lastScrollTop = 0;
		    jQuery(window).scroll(function(event){
		       var st = jQuery(this).scrollTop();
		       if (st > lastScrollTop && st > 0){
		           jQuery('.top_bar').removeClass('scroll_up');
		           jQuery('.header_style_wrapper').removeClass('scroll_up');
		           jQuery('.header_style_wrapper').addClass('scroll_down');
		       } else {
		          jQuery('.top_bar').addClass('scroll_up');
		          jQuery('.header_style_wrapper').addClass('scroll_up');
		          jQuery('.header_style_wrapper').removeClass('scroll_down');
		       }
		       lastScrollTop = st;
		       
		       jQuery('.header_style_wrapper').attr('data-st', st);
		       jQuery('.header_style_wrapper').attr('data-lastscrolltop', lastScrollTop);
		    });
		}
		else
		{
		    var lastY;
		    jQuery(document).bind('touchmove', function (e){
		         var currentY = e.originalEvent.touches[0].clientY;

		         if(currentY > 200){
		         	jQuery('.top_bar').addClass('scroll_up');
		            jQuery('.header_style_wrapper').addClass('scroll_up');
		            jQuery('.header_style_wrapper').removeClass('scroll_down');
		            
		         } else {
		            jQuery('.top_bar').removeClass('scroll_up');
		            jQuery('.header_style_wrapper').removeClass('scroll_up');
		            jQuery('.header_style_wrapper').addClass('scroll_down');
		         }
		         
		         jQuery('.header_style_wrapper').attr('data-pos', currentY);
		    });
		}
	}
	
	jQuery(document).mouseenter(function()
	{	
	    jQuery('body').addClass('hover');	
	});	
	
	jQuery(document).mouseleave(function()
	{	
	    jQuery('body').removeClass('hover');	
	});	
	
	var siteBaseURL = jQuery('#pp_homepage_url').val();
	if(jQuery('#pp_ajax_search').val() != '')
    {
		jQuery('#s').on('input', function() {
			jQuery('#search_loading_wrapper').addClass('loading');
			
			jQuery.ajax({
				url:siteBaseURL+"/wp-admin/admin-ajax.php",
				type:'POST',
				data:'action=grandmagazine_ajax_search&s='+jQuery('#s').val(),
				success:function(results) {
					jQuery("#autocomplete").html(results);
					jQuery('#search_loading_wrapper').removeClass('loading');
					
					if(results != '')
					{
						jQuery("#autocomplete").addClass('visible');
						jQuery("#autocomplete").show();
					}
					else
					{
						jQuery("#autocomplete").hide();
					}
				}
			})
		});
		
		jQuery("#s").keypress(function(event) {
		    if (event.which == 13) {
		        event.preventDefault();
		        jQuery("form#searchform").submit();
		    }
		});
	}
	
	jQuery('#mobile_nav_icon').on( 'click', function() {
		jQuery('body').toggleClass('js_nav');
		jQuery('#close_mobile_menu').addClass('open');
	});
	
	jQuery('#close_mobile_menu').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		jQuery(this).removeClass('open');
		jQuery('#side_menu_wrapper').removeClass('visible');
		jQuery('#side_menu_wrapper').removeClass('share_open');
		jQuery('#fullscreen_share_wrapper').css('visibility', 'hidden');
	});
	
	jQuery('.mobile_menu_close a').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
	});
	
	jQuery('#search_icon').on( 'click', function() {
		jQuery('body').toggleClass('overflow_hidden');
		jQuery('#search_wrapper').toggleClass('visible');
		jQuery('#close_search').addClass('open');
		jQuery('#search_wrapper').find('#searchform').find('#s').focus();
	});
	
	jQuery('#close_search').on( 'click', function() {
		jQuery('body').removeClass('overflow_hidden');
		jQuery(this).removeClass('open');
		jQuery('#search_wrapper').removeClass('visible');
	});
	
	jQuery('#browse_icon').on( 'click', function() {
		jQuery('body').toggleClass('overflow_hidden');
		jQuery('#browse_wrapper').toggleClass('visible');
		jQuery('#close_browse').addClass('open');
	});
	
	jQuery('#close_browse').on( 'click', function() {
		jQuery('body').removeClass('overflow_hidden');
		jQuery(this).removeClass('open');
		jQuery('#browse_wrapper').removeClass('visible');
	});
	
	jQuery('.close_alert').on( 'click', function() {
		var target = jQuery(this).data('target');
		jQuery('#'+target).fadeOut();
	});			
	
	jQuery('.tooltip').tooltipster();
	jQuery('.demotip').tooltipster({
		position: 'left'
	});
        
    jQuery('#option_wrapper').mouseenter(function()
	{	
	    jQuery('body').addClass('overflow_hidden');	
	});	
	
	jQuery('#option_wrapper').mouseleave(function()
	{	
	    jQuery('body').removeClass('overflow_hidden');	
	});	
	
	jQuery('.animate').waypoint(function(direction) {
		var windowWidth = jQuery(window).width();
	
		jQuery(this).addClass('visible', direction === 'down');
	    
	} , { offset: '80%' });
	
	if(jQuery.browser.msie && parseFloat(jQuery.browser.version)<10)
	{
		jQuery('.animate').css('opacity', 1);
		jQuery('.animate').css('visibility', 'visible');
		
		jQuery('.animated').each(function() {
			jQuery(this).css('opacity', 1);
			jQuery(this).css('visibility', 'visible');
		});
	}
	
	jQuery('#page_share, #post_share_text, #post_info_share').click(function(){
		jQuery('#side_menu_wrapper').addClass('visible');
		jQuery('#side_menu_wrapper').addClass('share_open');
		jQuery('#fullscreen_share_wrapper').css('visibility', 'visible');
	});
	
	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))
    {
	    jQuery('.parallax').each(function(){
	    	var dataImgURL = jQuery(this).data('image');
	    	if(jQuery.type(dataImgURL) != "undefined")
	    	{
	    		jQuery(this).css('background-image', 'url('+dataImgURL+')');
	    		jQuery(this).css('background-size', 'cover');
	    		jQuery(this).css('background-position', 'center center');
	    	}
	    });
    }
    else
    {
    	jQuery('.parallax').each(function(){
    		var parallaxObj = jQuery(this);
    	
		 	jQuery(this).jarallax({
		 		zIndex          : 0,
		 		speed			: 0.6,
		 		onCoverImage: function() {
			        parallaxObj.css('z-index', 0);
			    }
		 	});
		 });
    }
    
    if(jQuery('#tg_sidebar_sticky').val()==1)
	{
		if(jQuery('#pp_fixed_menu').val()==1)
		{
			jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent({ offset_top: 100 });
		}
		else
		{
			jQuery("#page_content_wrapper .sidebar_wrapper").stick_in_parent();
		}
		
		if(jQuery(window).width() < 768 || is_touch_device())
		{
			jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
		}
		
		jQuery(window).resize(function() {
			if(jQuery(this).width() < 768)
			{
				jQuery("#page_content_wrapper .sidebar_wrapper").trigger("sticky_kit:detach");
			}
		});
	}
	
	// Find all YouTube & Vimeo videos
	jQuery('iframe[src*="youtube.com"]').each(function() {
		jQuery(this).wrap('<div class="video-container"></div>');
	});
	
	jQuery('iframe[src*="vimeo.com"]').each(function() {
		jQuery(this).wrap('<div class="video-container"></div>');
	});

});

jQuery(window).on('resize load',adjustIframes);