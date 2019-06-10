/**
 * slider
 */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
/**
 * tab
 */
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("w3-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-white";
}


// $('#scrollspy').DynamicScrollspy({
//               affix: true, //affix by default 
//               tH: 2, //lowest-level header to be included (H2) 
//               bH: 6, //highest-level header to be included (H6) 
//               exclude: false, //exclude from the tree/outline any H tags matching this jquery selector 
//               genIDs: true, //generate random IDs for headers? 
//               offset: 0, //offset from viewport top for scrollspy 
//               ulClassNames: 'hidden-print', //add this class to top-most UL 
//               activeClass: '', //active class (besides .active) to add to LI 
//               testing: false //if testing, append heading tagName and ID to each heading 
// });

$(function(){
        $("pre").addClass("prettyprint");
        // $(".command").addClass("prettyprint");
        prettyPrint();
}); 