var fprev=new Image();
var previous=new Image();
var fnext=new Image();
var next=new Image();

var fprev_on=new Image();
var previous_on=new Image();
var fnext_on=new Image();
var next_on=new Image();

fprev.src="images/prv_btn.gif";
previous.src="images/prv_btn.gif";
fnext.src="images/nxt_btn.gif";
next.src="images/nxt_btn.gif";

fprev_on.src="images/prv_btn2.gif";
previous_on.src="images/prv_btn2.gif";
fnext_on.src="images/nxt_btn2.gif";
next_on.src="images/nxt_btn2.gif";

function SwitchImg(imgName, state) {
  document [imgName].src = eval(imgName + state + ".src");
}

function SyncDocsan(doSync) {
var file = (doSync) ? location.pathname : "";
if (top != null)
if (top.frames[0] != null)
if (top.frames[0].frames[1] != null)
if (top.frames[0].frames[1].document != null)
if (top.frames[0].frames[1].document.Docsan != null)
top.frames[0].frames[1].document.Docsan.syncTOC(file);
}

arrowH = 30;
arrowRefresh = 50;

if (!document.all)
  {
  document.all = document;
  }
if (!document.all.Arrow.style)
  {
  document.all.Arrow.style = document.all.Arrow;
  }

newArrow = document.all.Arrow.style;
newArrow.height = arrowH;
navDOM = window.innerHeight;

function setVals() {
  scrollBarH = 0;
  if (navDOM)
    {
    if (document.height > innerHeight)
      {
      scrollBarH = 20;
      }
    }
  else
    {
    innerWidth = document.body.clientWidth;
    innerHeight = document.body.clientHeight;
    }
  posX = 5;
  posY = (innerHeight - arrowH)- scrollBarH;
  }

function newRefresh() {
  newArrow.left = posX + (navDOM?pageXOffset:document.body.scrollLeft);
  newArrow.top = posY + (navDOM?pageYOffset:document.body.scrollTop);
  }

function arrowMe() {
  SyncDocsan(true);
  setVals();
  window.onresize=setVals;
  arrowID = setInterval ("newRefresh()",arrowRefresh);
  }

window.onload=arrowMe;

