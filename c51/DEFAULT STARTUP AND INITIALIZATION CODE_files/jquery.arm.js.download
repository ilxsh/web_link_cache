/*
 *
 *   Author:         Michael Youngblood, Yinka Lawal
 *   Description:    This file is to become a Universal JQuery/JavaScript Library
 *                   for the entire ARM site. 
 *
 */
// Functions to load on page ready
jQuery(document).ready(function() {
    //variable to hold the time in milliseconds used by the setTimeout Function    
    var wait;
      
    jQuery("#cookieStatus") 
      // On mouseenter and mouseleave, we want to react 
      .on("mouseenter mouseleave", "div", function(e){ 
          // Find the element whose id matches our current title 
          var el = jQuery("#" + this.title); 
          // Determine if we're entering or exiting the div 
          switch ( e.type ) { 
         // Show the tooltip element or hide the tooltip element, and remove or re-add title attribute to prevent default browser behavior 
             case "mouseenter" : 
                 el.show(); 
                 var currentTitle = jQuery(this).attr("title"); 
                 jQuery(this).attr("tmp_title", currentTitle); 
                 jQuery(this).attr("title", ""); 
             break; 
             case "mouseleave" : 
                 var currentTitle = jQuery(this).attr("tmp_title"); 
                 jQuery(this).attr("title", currentTitle); 
                 jQuery(this).attr("tmp_title", ""); 
                 var el = jQuery("#" + this.title); 
                 el.hide(); 
             break;
         } 
    }); 
     
    // Create a Test Cookie to see if user has cookies enabled.  
    create('testCookies', 'yes', 365, '/', '.arm.com');
		//delete old cookie
    create("acceptCookies", '', -1, '/', '.arm.com');
    //read acceptCookie to get the cookie value set
    var cVal = read("acceptCookie");
    //if User has cookie enabled and acceptCookie has NOT been set Show the initial cookie popup
    if((read("testCookies") == 'yes')&& (!cVal)){
    	jQuery('#cookiemodule').css('display', 'block');
    }
    //change the settings in the footer Area to indicate which cookie has been set to 'best experience'
    changeSettingsFooter('3');

    
    /*
     * On click of the 'Don't show this message again' button, in the initial Cookie pop up,
     * Set acceptCookie to 3 (i.e. best experience)
     * fadeOut the initial cookie pop up
     * change the settings in the footer Area to indicate which cookie has been set
     * 
     */
    jQuery('button#cookieSettings').click(function() {
        create('acceptCookie','3', 365, '/', '.arm.com');
        jQuery('#cookiemodule').fadeOut('slow');
        changeSettingsFooter('3');
    });
    
    
        
        //if acceptCookie cookie has been set, change the settings in the footer Area to indicate which cookie has been set
        changeSettingsFooter(cVal);
        
        /*
         * On click of the Cookie Settings link in the footer,read the value of acceptCookie
         * generate the Cookie Settings modal
         * If acceptCookie has been set, show the cookie state in the Cookie Settings modal
         */    
        //jQuery('.fleft a.customModal').click(function(e){
        jQuery('a.customModal').click(function(e){
            e.preventDefault();
            var cookieVal = read('acceptCookie');
            modal.custom({div: '#hiddenDivForCookieModal',width: 620, height:725});
            if(cookieVal){
                showTabs(cookieVal);
            }
            else{
               showTabs('3');
            }
        });
     
      
                
                
                
    
});
/*
 * @Param : index - The index of the tab selected.This corresponds to the value the cookie is set to
 * case 1: Strictly Necessary is selected, index=1. The Strictly Necessary tab ONLY is highlighted, arrow points to Strictly Necessary ONLY.
 * case 2: Performance and Functionality is selected, index=2. The Strictly Necessary and Performance and Functionality tabs are highlighted, arrow points to Performance and Functionality ONLY.
 * case 3: Targeting and advertising is selected, index=3. All tabs are highlighted, arrow points to Targeting and advertising ONLY.
 */
function showTabs(index){
    switch(index)
   {
       case '1':
       
       jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle1').attr('class', 'selected');
            jQuery('#cookieSettingsCnt #horzListController ul li#cookieSet1').attr('class', 'selected');
            jQuery('#cookieSettingsCnt #horzListController ul li a div#cookieLock1').attr('class', 'active');
            for( var i=2; i<=3; i++ ){
            jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle'+i).attr('class', 'notselected');
            jQuery('#cookieSettingsCnt #horzListController ul li#cookieSet'+i).attr('class', 'notselected');
            jQuery('#cookieSettingsCnt #horzListController ul li a div#cookieLock'+i).attr('class', 'inactive');
            }
        break;
       case '2':
           for( var i=1; i<=index; i++ ){
            
            jQuery('#cookieSettingsCnt #horzListController ul li#cookieSet'+i).attr('class', 'selected');
            jQuery('#cookieSettingsCnt #horzListController ul li a div#cookieLock'+i).attr('class', 'active');
            if (i==index){
            jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle'+i).attr('class', 'selected');
            }
           }
            jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle1').attr('class', 'notselected');
            jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle3').attr('class', 'notselected');
            jQuery('#cookieSettingsCnt #horzListController ul li#cookieSet3').attr('class', 'notselected');
            jQuery('#cookieSettingsCnt #horzListController ul li a div#cookieLock3').attr('class', 'inactive');
        break;
       case '3':
       
           for( var i=1; i<=index; i++ ){
            
            jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle'+i).attr('class', 'selected');
            jQuery('#cookieSettingsCnt #horzListController ul li#cookieSet'+i).attr('class', 'selected');
            jQuery('#cookieSettingsCnt #horzListController ul li a div#cookieLock'+i).attr('class', 'active');    
           }
           jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle1').attr('class', 'notselected');
           jQuery('#cookieSettingsCnt #horzListController ul li #cookietitle2').attr('class', 'notselected');
           
        break;
    }
    
    for( var i=1; i<=3; i++ ){
       if(i==index){
            jQuery('#cookieSettingsCnt #cookieContent'+i).css('display', 'block');
        } else {
            jQuery('#cookieSettingsCnt #cookieContent'+i).css('display', 'none');
        }
    }
}
/*
 * change the class attribute for the divs in the cookie settings in Footer area
 * @param index: the number of the cookie set
 * case 1: Strictly Necessary is selected, index=1. The Strictly Necessary ONLY is highlighted and has the 'blue tick'.
 * case 2: Performance and Functionality is selected, index=2. The Strictly Necessary and Performance and Functionality tabs are highlighted, BOTH have the 'blue tick.
 * case 3: Targeting and advertising is selected, index=3. All are highlighted and have the 'blue tick.
 */
function changeSettingsFooter(index){
   switch(index)
   {
       case '1':
           jQuery('#cookieStatus #strictlyNecessary').attr('class', 'set');
                   jQuery('#cookieStatus #performanceFunctionality').attr('class', 'notSet');
                   jQuery('#cookieStatus #targetAdvertise').attr('class', 'notSet');
        break;
       case '2':
         jQuery('#cookieStatus #performanceFunctionality').attr('class', 'set');
                   jQuery('#cookieStatus #strictlyNecessary').attr('class', 'set');
                   jQuery('#cookieStatus #targetAdvertise').attr('class', 'notSet');
        break;
       case '3':
         jQuery('#cookieStatus #targetAdvertise').attr('class', 'set');
                   jQuery('#cookieStatus #strictlyNecessary').attr('class', 'set');
                   jQuery('#cookieStatus #performanceFunctionality').attr('class', 'set');
        break;
    }
}
//When user clicks on Save Settings button, get the ID of the selected list item 
function save(){
    var msg = 'test';
    jQuery("li.selected").each(function() {
        msg=this.id;
    });
    //get the number at the end of the id
    var cookieVal = msg.substring(9,10);
    //create a cookie whose value is the number above.
    create('acceptCookie',cookieVal, 365, '/', '.arm.com');
    //erase cookies not relevant to this section
    eraseCookies(cookieVal);
    //change state of cookie settings in the footer
    changeSettingsFooter(cookieVal);
    //close the cokkie settings Modal Manager Modal window
    modal.close();
    //close the Initial Cookie Modal Window
    jQuery('#cookiemodule').fadeOut('fast');
    /*
     * If we have infocenterSearchFrame and SearchFrame elements we're running on an Infocenter; 
     * reload the 'SearchFrame' frameset so that the changes to the cookie Manager can take effect
     */
    if($('#infocenterSearchFrame').length && $('#SearchFrame').length) {
        $('#SearchFrame').attr('src', function () { return $(this).contents().get(0).location.href });
    }
}
/*
 * When user clicks on Cancel button, close the Cookie Settings Manager modal 
 * if acceptCookie has NOT been set, show the initial cookie modal again
 */
function cancel(){
    if(!read('acceptCookie')){
        jQuery('#cookiemodule').fadeIn('slow');
    }
    modal.close();
}
/*
 * @param index: the number of the cookie set
 * case 1: Erase cookies not related to Strictly Necessary.
 * case 2: Erase cookies not related to Performance and Functionality is selected.
 */
function eraseCookies(index){
             
     switch(index)
     {
         case '1':
             var i=0;
             var cookieArray = ['__unam','__utma', '__utmb', '__utmc','__utmd', '__utmz','_mkto_trk','region','armlanguage','tabcontainer1','processortabs'];             
             for (i=0;i<cookieArray.length;i++) {
                 create(cookieArray[i], '', -1, '/', '.arm.com');
             }
            for(i=1; i<=15;i++){
                 // browsers vary in whether a cookie's path requires a trailing slash
                 create('wset'+i, '', -1, '/help/advanced/', '.arm.com');
                 create('wset'+i, '', -1, '/help/advanced', '.arm.com');
            }
             cookieArray.length=0;
         break;
         case '2':
             var i=0;
             var cookieArray = ['_mkto_trk','region'];
             for (i=0;i<cookieArray.length;i++) {
                 create(cookieArray[i], '', -1, '/', '.arm.com');
             }
             cookieArray.length=0;
         break;
     }
 }
// Cookie create, read and erase Functions
/*
 *Create a new cookie
 *@param string name Name of the cookie
 *@param string value Value of the cookie
 *@param string days Number of days the cookie should remain valid
 *@param string path Path to define within the cookie
 *@param string domain Domain the cookie is valid within
 */
function create(name, value, days, path, domain) {
    path = typeof path !== 'undefined' ? path : '/';
    domain = typeof domain !== 'undefined' ? '; domain=' + domain : '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + domain + "; path=" + path;
}
/*
 *Read the value of a cookie with the specified name 
 *@param string name Name of the cookie to read
 */
function read(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
  
/*
 *Erase a Cookie with the specified name
 *Same path and domain used to set the cookie must be used to erase it
 *This function will only erase cookies that was NOT set with specific domain
 */       
function erase(name) {
    create(name, "", -1);
}