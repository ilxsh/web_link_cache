function moveslider(e) {
  if (fbslock != 0) { return; }
  if (!e) { e = window.event; }
  if (!e) { return; }
  var overall = getElement("feedbackslider");

  var sliderleft = findPosX(overall);
  var value = e.clientX-sliderleft-24;
  if (value < 0) { value = 0; }
  if (value > 200) { value = 200; }
  redrawslider(value);
  e.cancelBubble = true;
  if (e.stopPropagation) { e.stopPropagation(); }
}

function redrawslider(value) {
  var leftside = getElement("fbsliderleftside");
  var rightside = getElement("fbsliderrightside");
  var leftimg = getElement("fbsliderleftimg");
  var rightimg = getElement("fbsliderrightimg");
  var markerimg = getElement("fbslidermarker");

  if ((slidervalue == -1) && (value > -1)) {
    markerimg.style.display = "inline";
  }

  slidervalue = value;
  var levelstr = "No feedback yet.";

  var txbox = getElement("feedbackinstr");
  if (slidervalue == -1) {
    txbox.innerHTML = "<b>Be the first to submit feedback! Move your mouse over the bar and click.</b>";
  }

  if (slidervalue == -1) {
    markerimg.style.display = "none";
    leftside.style.width = "208px";
    leftside.style.background="#CCCCCC";
    leftimg.style.width = "205px";
    rightside.style.width = "3px";
    rightimg.style.width = "0px";
  } else {
    if (slidervalue < 0) { slidervalue = 0; }
    if (slidervalue > 200) { slidervalue = 200; }

    slidervalue = Math.round(slidervalue/20);

    var redval = 255;
    if (slidervalue > 5) {
      redval = Math.round((255/5)*(10-slidervalue));
    }
    var greenval = 255;
    if (slidervalue < 5) {
      greenval = Math.round((255/5)*(slidervalue));
    }
    leftside.style.background="rgb("+redval+","+greenval+",0)";

    var leftsidew = (slidervalue*20) + 8;
    leftside.style.width=leftsidew+"px";
    var leftimgw = slidervalue*20;
    leftimg.style.width=leftimgw+"px";

    var rightsidew = 211-((slidervalue*20) + 8);
    rightside.style.width=rightsidew+"px";
    var rightimgw = 208-((slidervalue*20) + 8);
    rightimg.style.width=rightimgw+"px";

    var roundedscore = slidervalue;
    levelstr = "Current article rating: " + roundedscore + "/10";
  }
  var valuefield = getElement("feedbackvalue");
  valuefield.innerHTML = levelstr;
}
function resetslider(e) {
  if (fbslock != 0) { return; }
  if (!e) { e = window.event; }
  if (!e) { return; }
  if ((e.target) && (e.target.id != "")) { return; }
//  if ((e.srcElement) && (e.srcElement.id != "")) { return; }
  redrawslider(slideroriginal);
}
function holdslider(e) {
  if (fbslock != 0) { return; }

  fbslock = 1;

  var txbox = getElement("feedbackinstr");
  var leftside = getElement("fbsliderleftside");
  txbox.innerHTML = "<b>Before you submit your rating, please let us know:</b>";

  txbox = getElement("feedbackcontr");
  txbox.className = "armkb_shown";

  var redval = 192;
  if (slidervalue > 5) {
    redval = Math.round((96/5)*(10-slidervalue))+96;
  }
  var greenval = 192;
  if (slidervalue < 5) {
    greenval = Math.round((96/5)*(slidervalue))+96;
  }
  leftside.style.background="rgb("+redval+","+greenval+",96)";
}
function submitfeedback() {
  if (fbslock != 1) { return; }

  var httpreq = createRequest();
  httpreq.open("POST", "/help/formsaver/kbFeedback");
  httpreq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var datastr = "fbid="+fbid+"&aaslider=" + slidervalue + "&src=infocenter&helpful=";
  var dataobj = getElement("fb_helpy");
  if (dataobj && dataobj.checked) { datastr += "y"; }
  dataobj = getElement("fb_helpn");
  if (dataobj && dataobj.checked) { datastr += "n"; }
  datastr += "&comments=";
  datastr += encodeURIComponent(getElement("fb_improve").value);
  
  httpreq.send(datastr);

  var txbox = getElement("feedbackinstr");
  var leftside = getElement("fbsliderleftside");
  txbox.innerHTML = "<b>Thankyou for your feedback.</b>";

  txbox = getElement("feedbackcontr");
  txbox.className = "armkb_hidden";
  
}

function findPosX(obj)
{
  var curleft = 0;
  if (obj.x)
    curleft += obj.x;
  else {
    curleft += obj.offsetLeft;
    if (obj.scrollLeft) { curtop -= obj.scrollLeft; }
    while (obj.offsetParent) {
      if (obj.style.position == "absolute") { break; }
      obj = obj.offsetParent;
      curleft += obj.offsetLeft;
      if (obj.scrollLeft) { curtop -= obj.scrollLeft; }
    }
  }
  return curleft;
}

function createRequest() {
  var request;
  try {
    request = new XMLHttpRequest();
  } catch (trymicrosoft) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (othermicrosoft) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = false;
      }
    }
  }

  if (!request)
    alert("Error initializing XMLHttpRequest - couldn't send feedback.");

  return request;
}

