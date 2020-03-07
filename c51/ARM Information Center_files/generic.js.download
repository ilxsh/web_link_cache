var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
         rv = parseFloat( RegExp.$1 );
   }
if(rv != '6'){
window.onresize=function(){
 document.getElementsByTagName('body')[0].style.display="none";
  document.getElementsByTagName('body')[0].style.display="block";
    changecss('.threecol .colmask','display','none');
    changecss('.threecol .colmask','display','block');
 }
}
    function correct_image() {
        var divCollection = document.getElementsByTagName("dt");
                foundme = "0";
        for (var i=0; i<divCollection.length; i++) {
            if(divCollection[i].getAttribute("class") == "quicklink" || divCollection[i].getAttribute("className") == "quicklink") {
                findMeText = divCollection[i].innerHTML;
                foundme = "1";
            } 
        }
                if(foundme == "0"){
                     var divCollection = document.getElementsByTagName("div");
                         for (var i=0; i<divCollection.length; i++) {
            if(divCollection[i].getAttribute("id") == "navigation") {
                divCollection[i].className = "sideboxhead";
            } 
        }             
                }
    }
        
  function tableRows() {
 if (document.getElementsByTagName) {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
        if (tables[i].className.indexOf("noaltrow") == -1){
      var trs = tables[i].getElementsByTagName('tr');
      for (var j = 1; j < trs.length; j+=2) {
       trs[j].className = 'alt';
      }
        }
  }
 }
}
function clearDefault(el) {
  if (el.defaultValue==el.value) el.value = ""
}
function validateLogin (userName, passWd) {
   var pwdRe = new RegExp("^.{7,128}$");
  var userRe = new RegExp("^(?=.{5,60}$)[-a-z0-9!#$%&'*+/=?^_`{|}~.]+@[a-z0-9](?:[-_a-z0-9]*[a-z0-9])*(?:\\.[a-z0-9](?:[-_a-z0-9]*[a-z0-9])*)+$", "i");
   var user = document.getElementById(userName).value;
   var pwd = document.getElementById(passWd).value;
   var result = true;
   if (!user || user.length == 0) {
      result = false;
      alert("User Name must be provided");
   } else if (!user.match(userRe)) {
      result = false;
      alert("Invalid username has been entered");
   } else if (!pwd || pwd.length == 0) {
      result = false;
      alert("Password must be provided");
   } else if (!pwd.match(pwdRe)) {
      result = false;
      alert("Invalid password has been entered");
   }
   if (result == true){
      document.getElementById('submitLogin').disabled='disabled';
      document.getElementById('submitLogin').value='Logging in...'
      document.getElementById('submitLogin').className = 'loginDisabled';
   }
   return(result);
}
function getIEVersion(){
   var rv = -1;
   if (navigator.appName == 'Microsoft Internet Explorer') {
     var ua = navigator.userAgent;
     var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
     if (re.exec(ua) != null)rv = parseFloat( RegExp.$1 );
   }
   return rv;
}
function changecss(theClass,element,value) {
     var ieVer=getIEVersion();
     if(ieVer>-1 && ieVer<9.0){
         cssRules = 'rules';
     }
     else if (document.getElementById) {
      cssRules = 'cssRules';
     }
     var added = false;
     for (var S = 0; S < document.styleSheets.length; S++){
    
            if(null === document.styleSheets[S].href || document.styleSheets[S].href.indexOf('sharethis') == "-1") {
      for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) {
       if (document.styleSheets[S][cssRules][R].selectorText == theClass) {
        if(document.styleSheets[S][cssRules][R].style[element]){
        document.styleSheets[S][cssRules][R].style[element] = value;
        added=true;
        break;
        }
                
       }
      }
      if(!added){
        
      if(document.styleSheets[S].insertRule){
                    document.styleSheets[S].insertRule(theClass+' { '+element+': '+value+'; }',document.styleSheets[S][cssRules].length);
            } else if (document.styleSheets[S].addRule) {
                document.styleSheets[S].addRule(theClass,element+': '+value+';');
            }
      }
     }
         }
    }
    
function collapseright(){
changecss('.threecol .col3','width','20px');
changecss('.threecol .col1','margin','0 0 0 209px');
changecss('.threecol .col1','margin-right','40px');
document.getElementById('rightbox').style.display='none';
document.getElementById('rightcolbox').style.display='block';
}
function expandright(){
changecss('.threecol .col3','width','198px');
changecss('.threecol .col1','margin-right','245px');
document.getElementById('rightbox').style.display='block';
document.getElementById('rightcolbox').style.display='none';
}
function collapseright_frm(){
changecss('.threecol .col3','width','20px');
changecss('.threecol .col1','margin','0 0 0 209px');
changecss('.threecol .col1','margin-right','40px');
document.getElementById('cblock_right').style.display='none';
document.getElementById('rightcolbox').style.display='block';
}
function expandright_frm(){
changecss('.threecol .col3','width','198px');
changecss('.threecol .col1','margin-right','245px');
document.getElementById('cblock_right').style.display='block';
document.getElementById('rightcolbox').style.display='none';
}
function collapseright_ext(){
document.getElementById('rightbox').style.display='none';
document.getElementById('rightcolbox').style.display='block';
document.getElementById('col3id').style.width='20px';
document.getElementById('col1id').style.marginRight='60px';
}
function expandright_ext(){
document.getElementById('rightbox').style.display='block';
document.getElementById('rightcolbox').style.display='none';
document.getElementById('col3id').style.width='200px';
document.getElementById('col1id').style.marginRight='250px';
}
 
function SelectLeft() {
 document.getElementById("left").style.backgroundImage="url(/images/site/homepagesprite.png)";
  document.getElementById("leftcontent").style.backgroundImage="url(/images/site/CommunityRepeatWhite.gif)";
  document.getElementById("midbar").style.backgroundImage="url(/images/site/homepagesprite.png)";
    document.getElementById("midbar").style.backgroundPosition="0 -265px";
  document.getElementById("rightcontent").style.backgroundImage="url(/images/site/CommunityRepeatGrey.gif)";
  document.getElementById("right").style.backgroundImage="url(/images/site/CommunityRightGrey.gif)";
    document.getElementById('findapartner').style.display='none';
  document.getElementById('communitydialog').style.display='block';
    document.getElementById('rfindapartner').style.display='none';
  document.getElementById('rcommunitydialog').style.display='block';
    document.getElementById('comimages').style.display='block';
    changecss('.rtitle a','color','#7f7f7f');
    changecss('.ltitle a','color','black');
}
function SelectRight() {
 document.getElementById("left").style.backgroundImage="url(/images/site/CommunityLeftGrey.gif)";
  document.getElementById("leftcontent").style.backgroundImage="url(/images/site/CommunityRepeatGrey.gif)";
  document.getElementById("midbar").style.backgroundImage="url(/images/site/homepagesprite.png)";
    document.getElementById("midbar").style.backgroundPosition="0 -530px";
  document.getElementById("rightcontent").style.backgroundImage="url(/images/site/CommunityRepeatWhite.gif)";
  document.getElementById("right").style.backgroundImage="url(/images/site/CommunityRightWhite.gif)";
    document.getElementById('findapartner').style.display='block';
  document.getElementById('communitydialog').style.display='none';
      document.getElementById('comimages').style.display='none';
    document.getElementById('rfindapartner').style.display='block';
  document.getElementById('rcommunitydialog').style.display='none';
        changecss('.rtitle a','color','black');
    changecss('.ltitle a','color','#7f7f7f');
}
    function textCounter(field, countfield, maxlimit)
      {
          if (field.value.length > maxlimit)
                {
                // If too long, trim it
              field.value = field.value.substring(0, maxlimit);
                    // In case final character is newline, set count to 0
                    countfield.value = 0; 
                }
          else
                { 
                // countfield.innerHTML = maxlimit - field.value.length;
              // Otherwise, update 'characters left' value
            document.getElementById(countfield).innerHTML = maxlimit - field.value.length;
                }
      }
function switchMenu(num) {
    if (document.getElementById) {
    var myImg = eval("document.getElementById('box" + num + "')");
    var myObj = 'sub' + num;
    var el = document.getElementById(myObj);
        if (el.style.display != 'block' && el.style.display != '') { // if menu is not already opened
/*
            for (var i=0; i<ar.length; i++) {    // loop thru span tags within the masterdiv div tag
                if (ar[i].className == 'submenu') { ar[i].style.display = 'none';    } // if it's a submenu, close menu                            
                var boxImg = eval("document.getElementById('box" + i + "')"); // construct a box image object
                if (boxImg) { boxImg.src = '/images/icons/box_plus.gif'; } // if object exists, set to plus sign
            }
*/
            el.style.display = 'block';    // opens selected menu
            myImg.src = '/images/icons/box_minus.gif';    // set image to minus sign
        } else {
            el.style.display = 'none';    //close menu
            myImg.src = '/images/icons/box_plus.gif';
        }
        } 
}

var modalContentFrameSrc;
function showModal(url, title) {
    if (title) { document.getElementById("modalGraphic").firstChild.innerHTML = title; }
    modalContentFrameSrc = document.getElementById('modalContentFrame').src;
    document.getElementById('modalContentFrame').src = url;
    // Fade in Background
    $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
    
    var agent = navigator.userAgent.toLowerCase();
    var android = agent.indexOf("android");
    if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || android != -1) {
        $("#fade").css("width", "10000px");
        $("#fade").css("height", "10000px");
    };
    
    $('#modalContentFrame').css("background-color", "transparent");
    $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer     
    $('#modalFrame').fadeIn('slow'); //Fade in modal 
    
    return false;
}
function closeModal() {
    $('#fade, #modalFrame').fadeOut(function() {
        $('#fade').remove();  
    });
    document.getElementById('modalContentFrame').src = modalContentFrameSrc;
}
function setModalDimensions(w, h) {
    if (w != "") { document.getElementById('modalFrame').style.width = w; }
    if (h != "") { document.getElementById('modalContentFrame').style.height = h;}
}

function checkAll(frm,selectAll)
{
  // have we been passed an ID    
  if (typeof frm == "string") {        
       frm = document.getElementById(frm);    
  }    
  // Get all of the inputs that are in this form    
  var inputs = frm.getElementsByTagName("input");    
  // for each input in the form, check if it is a checkbox    
  for (var i = 0; i < inputs.length; i++) {        
    if (inputs[i].type == "checkbox") {            
      if(selectAll.checked == true){
        inputs[i].checked = true; 
      } else {
       inputs[i].checked = false; 
      }
    }
    }
}