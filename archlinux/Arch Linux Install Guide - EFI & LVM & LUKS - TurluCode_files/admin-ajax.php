
.portfolio_nav { display:none; }
.top_bar.fixed
{
	position: fixed;
	animation-name: slideDown;
	-webkit-animation-name: slideDown;	
	animation-duration: 0.5s;	
	-webkit-animation-duration: 0.5s;
	z-index: 999;
	visibility: visible !important;
	top: 0px;
}

.top_bar.fixed #menu_wrapper div .nav
{
	margin-top: 16px;
}

.top_bar.fixed #searchform
{
	margin-top: 8px;
}

.top_bar.fixed .header_cart_wrapper
{
	margin-top: 21px;
}

.top_bar.fixed #menu_wrapper div .nav > li > a
{
	padding-bottom: 24px;
}

.top_bar.fixed .logo_wrapper img
{
	max-height: 40px;
	width: auto;
}

#wrapper.menu_transparent #logo_right_button a#mobile_nav_icon
{
    display: none;
}




@media only screen and (max-width: 768px) {
	html[data-menu=leftmenu] .mobile_menu_wrapper
	{
		right: 0;
		left: initial;
		
		-webkit-transform: translate(360px, 0px);
		-ms-transform: translate(360px, 0px);
		transform: translate(360px, 0px);
		-o-transform: translate(360px, 0px);
	}
}

@media only screen and (min-width: 960px)
{
	#logo_normal.logo_container
	{
		margin-left: -75px;
	}
	#logo_transparent.logo_container
	{
		margin-left: -75px;
	}


@media only screen and (min-width: 960px)
{
	.top_bar.scroll
	{
		-webkit-transform: translateY(-100px);
	    -moz-transform: translateY(-100px);
	    -o-transform: translateY(-100px);
	    -ms-transform: translateY(-100px);
	    transform: translateY(-100px);
	    opacity: 0;
	}
	.top_bar.scroll.scroll_up
	{
		-webkit-transform: translateY(00px);
	    -moz-transform: translateY(0px);
	    -o-transform: translateY(0px);
	    -ms-transform: translateY(0px);
	    transform: translateY(0px);
	    opacity: 1;
	}
	.header_style_wrapper
	{
	    -webkit-transition: opacity 0.5s;
	    -moz-transition: opacity 0.5s;
	    transition: opacity 0.5s;
	}
	.header_style_wrapper.scroll_down
	{
		opacity: 0;
		z-index: 0;
	}
	
	.header_style_wrapper.scroll_up
	{
		opacity: 1;
	}
}





