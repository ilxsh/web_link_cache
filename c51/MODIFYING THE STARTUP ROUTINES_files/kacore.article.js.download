  if (window.addEventListener){
    window.addEventListener("load", armkb_pageload, true);
  } else if (window.attachEvent) {
    window.attachEvent("onload", armkb_pageload);
  }
  var mergestr;
  var favstr;
  var menuclick = 0;
  function armkb_pageload() {
    var armkbcell = getElement("armkb_cell");
    mergestr = readCookie('armkb_mergelist');
    favstr = readCookie('armkb_favlist');
    var doc = window.location.href;
    doc = doc.replace(/^.*\//g, "");
    doc = doc.replace(/\.html.*$/, "");
    var mergelist = mergestr.split("^");
    var mergenum = 0;
    var thisdocismerged = 0;
    for (var item in mergelist) {
      if (mergelist[item] != '') {
        if (mergelist[item] == doc) {
          thisdocismerged = 1;
        }
        mergenum++;
      }
    }
    if ((favstr.length > 0) && (favstr.substr(0,1) != "\x10")) {
      createCookie('armkb_favlist','',9999999);
      favstr = "";
    }
    var favlist = favstr.split("\x10");
    var favnum = 0;
    var thisdocisfav = 0;
    for (var item in favlist) {
      if (favlist[item] != '') {
        if (favlist[item] == doc) {
          thisdocisfav = 1;
        }
        favnum++;
      }
    }
    var kbmenus = "<ul class='armkb_celldu'><li class='armkb_celld' onmouseover='armkb_docmerge()' onmouseout='armkb_closemenu()' id='armkb_merge_count'><img src='kacore.merge.png' alt='' /> Document Merge (" + mergenum + ")<br /><ul id='armkb_docmerge_menu' class='armkb_menu_hidden'>";
    kbmenus += "<li><a href='kamerge.html' class='armkb_menulink'>Generate Merged Doc</a></li>";
    kbmenus += "<li id='armkb_menu_merge_rem'><a href='#' class='armkb_menulink' onclick='armkb_docmerge_remove()'>Remove this document from merge list</a></li>";
    kbmenus += "<li id='armkb_menu_merge_add'><a href='#' class='armkb_menulink' onclick='armkb_docmerge_add()'>Add this document to merge list</a></li>";
    kbmenus += "<li><a href='#' class='armkb_menulink' onclick='armkb_docmerge_clear()'>Clear document merge list</a></li></ul>";
    kbmenus += "</li>";
    kbmenus += "<li class='armkb_celld' onmouseover='armkb_docfav()' onmouseout='armkb_closemenu()' id='armkb_fav_count'><img src='kacore.merge.png' alt='' /> Favorite Articles (" + favnum + ")<br /><ul id='armkb_docfav_menu' class='armkb_menu_hidden'>";
    kbmenus += "<li><a href='kafav.html' class='armkb_menulink'>My Favorite Articles</a></li>";
    kbmenus += "<li id='armkb_menu_fav_rem'><a href='#' class='armkb_menulink' onclick='armkb_docfav_remove()'>Remove this document from favorites</a></li>";
    kbmenus += "<li id='armkb_menu_fav_add'><a href='#' class='armkb_menulink' onclick='armkb_docfav_add()'>Add this document to favorites</a></li>";
    kbmenus += "<li><a href='#' class='armkb_menulink' onclick='armkb_docfav_clear()'>Clear favorite document list</a></li></ul>";
    kbmenus += "</li></ul>";

    armkbcell.innerHTML = kbmenus;
    if (thisdocismerged) {
      getElement('armkb_menu_merge_rem').style.display="block";
      getElement('armkb_menu_merge_add').style.display="none";
    } else {
      getElement('armkb_menu_merge_rem').style.display="none";
      getElement('armkb_menu_merge_add').style.display="block";
    }
    if (thisdocisfav) {
      getElement('armkb_menu_fav_rem').style.display="block";
      getElement('armkb_menu_fav_add').style.display="none";
    } else {
      getElement('armkb_menu_fav_rem').style.display="none";
      getElement('armkb_menu_fav_add').style.display="block";
    }
  }
  function armkb_closemenu() {
    var menubox = getElement('armkb_docfav_menu');
    menubox.className="armkb_menu_hidden";
    menubox = getElement('armkb_docmerge_menu');
    menubox.className="armkb_menu_hidden";

    menubox = getElement('armkb_merge_count');
    menubox.className="armkb_celld";

  }
  function armkb_docmerge() {
    var docmergemenu = getElement('armkb_docmerge_menu');
    docmergemenu.className="armkb_menu_shown";
    docmergemenu = getElement('armkb_merge_count');
    docmergemenu.className="armkb_celldd";
  }
  function armkb_docmerge_add() {
    mergestr = readCookie('armkb_mergelist');
    var doc = window.location.href;
    doc = doc.replace(/^.*\//g, "");
    doc = doc.replace(/\.html.*$/, "");
    var mergelist = mergestr.split("^");
    var mergenum = 0;
    var thisdocismerged = 0;
    for (var item in mergelist) {
      if (mergelist[item] != '') {
        if (mergelist[item] == doc) {
          alert("This item has already been added to the merge list", "ARM KB Information");
          return;
        }
        mergenum++;
      }
    }
    if (mergestr.length > 0) { mergestr += "^"; }
    mergestr += doc;
    mergenum++;
    createCookie('armkb_mergelist',mergestr,0);
    var mergenumobj = getElement("armkb_merge_count");
    if (mergenumobj) { mergenumobj.innerHTML = mergenumobj.innerHTML.replace(/\(\d+\)/, '('+mergenum+')'); }
    getElement('armkb_menu_merge_rem').style.display="block";
    getElement('armkb_menu_merge_add').style.display="none";
    armkb_closemenu();
  }
  function armkb_docmerge_remove() {
    var oldmergestr = readCookie('armkb_mergelist');
    mergestr = "";
    var doc = window.location.href;
    doc = doc.replace(/^.*\//g, "");
    doc = doc.replace(/\.html.*$/, "");
    var mergelist = oldmergestr.split("^");
    var mergenum = 0;
    var thisdocismerged = 0;
    for (var item in mergelist) {
      if (mergelist[item] != '') {
        if (mergelist[item] != doc) {
          if (mergestr.length > 0) { mergestr += "^"; }
          mergestr += mergelist[item];
          mergenum++;
        }
      }
    }
    createCookie('armkb_mergelist',mergestr,0);
    var mergenumobj = getElement("armkb_merge_count");
    if (mergenumobj) { mergenumobj.innerHTML = mergenumobj.innerHTML.replace(/\(\d+\)/, '('+mergenum+')'); }
    getElement('armkb_menu_merge_rem').style.display="none";
    getElement('armkb_menu_merge_add').style.display="block";
    armkb_closemenu();
  }
  function armkb_docmerge_clear() {
    mergestr = "";
    createCookie('armkb_mergelist','',0);
    var mergenumobj = getElement("armkb_merge_count");
    if (mergenumobj) { mergenumobj.innerHTML = mergenumobj.innerHTML.replace(/\(\d+\)/, '(0)'); }
    getElement('armkb_menu_merge_rem').style.display="none";
    getElement('armkb_menu_merge_add').style.display="block";
    armkb_closemenu();
  }


  function armkb_docfav() {
    var docfavmenu = getElement('armkb_docfav_menu');
    docfavmenu.className="armkb_menu_shown";
  }
  function armkb_docfav_add() {
    favstr = readCookie('armkb_favlist');
    var doc = window.location.href;
    var doctitle = document.title;
    doc = doc.replace(/^.*\//g, "");
    doc = doc.replace(/\.html.*$/, "");
    var favlist = favstr.split("\x10");
    var favnum = 0;
    var thisdocisfavd = 0;
    for (var item in favlist) {
      var favdis = favlist[item].split("\x11");
      if (favdis[0] != '') {
        if (favdis[0] == doc) {
          alert("This item has already been added to the fav list", "ARM KB Information");
          return;
        }
        favnum++;
      }
    }
    favstr += "\x10";
    favstr += doc + "\x11" + doctitle;
    favnum++;
    createCookie('armkb_favlist',favstr,9999999);
    var favnumobj = getElement("armkb_fav_count");
    if (favnumobj) { favnumobj.innerHTML = favnumobj.innerHTML.replace(/\(\d+\)/, '('+favnum+')'); }
    var docfavmenu = getElement('armkb_docfav_menu');
    docfavmenu.className="armkb_menu_hidden";
    getElement('armkb_menu_fav_rem').style.display="block";
    getElement('armkb_menu_fav_add').style.display="none";
  }
  function armkb_docfav_remove() {
    var oldfavstr = readCookie('armkb_favlist');
    favstr = "";
    var doc = window.location.href;
    doc = doc.replace(/^.*\//g, "");
    doc = doc.replace(/\.html.*$/, "");
    var favlist = oldfavstr.split("\x10");
    var favnum = 0;
    var thisdocisfavd = 0;
    for (var item in favlist) {
      var favdis = favlist[item].split("\x11");
      if (favdis[0] != '') {
        if (favlist[item] != doc) {
          favstr += "\x10";
          favstr += favlist[item];
          favnum++;
        }
      }
    }
    createCookie('armkb_favlist',favstr,9999999);
    var favnumobj = getElement("armkb_fav_count");
    if (favnumobj) { favnumobj.innerHTML = favnumobj.innerHTML.replace(/\(\d+\)/, '('+favnum+')'); }
    var docfavmenu = getElement('armkb_docfav_menu');
    docfavmenu.className="armkb_menu_hidden";
    getElement('armkb_menu_fav_rem').style.display="none";
    getElement('armkb_menu_fav_add').style.display="block";
  }
  function armkb_docfav_clear() {
    favstr = "";
    createCookie('armkb_favlist','',9999999);
    var favnumobj = getElement("armkb_fav_count");
    if (favnumobj) { favnumobj.innerHTML = favnumobj.innerHTML.replace(/\(\d+\)/, '(0)'); }
    var docfavmenu = getElement('armkb_docfav_menu');
    docfavmenu.className="armkb_menu_hidden";
    getElement('armkb_menu_fav_rem').style.display="none";
    getElement('armkb_menu_fav_add').style.display="block";
  }
  function armkb_expandall() {
    var expbut = getElement("armkb_expandallbutton");
    var direction = 0;
    if (expbut.innerHTML == "Expand All") {
      expbut.innerHTML = "Collapse All";
      direction = 1;
    } else {
      expbut.innerHTML = "Expand All";
    }
    for (var objref in armkb_objlist) {
      var ulblock = getElement("ul_" + armkb_objlist[objref]);
      var imgblock = getElement("img_" + armkb_objlist[objref]);
      if (ulblock) {
       if (direction == 1) {
          ulblock.className = "armkb_shown";
          imgblock.src = "images/armkb_collapse.gif";
       } else {
          ulblock.className = "armkb_hidden";
          imgblock.src = "images/armkb_expand.gif";
       }
      }
    }
  }
  function armkb_toggle(objid) {
    var ulblock = getElement("ul_" + objid);
    var imgblock = getElement("img_" + objid);
    if (ulblock) {
      if (ulblock.className == "armkb_hidden") {
        ulblock.className = "armkb_shown";
        imgblock.src = "images/armkb_collapse.gif";
      } else {
        ulblock.className = "armkb_hidden";
        imgblock.src = "images/armkb_expand.gif";
      }
    }
  }
  function getElement(objID) {
    if (document.getElementById) {
      return document.getElementById(objID);
    }
    else if (document.all) {
      return document.all(objID);
    }
    else if (document.layers) {
      document.layers(objID);
    }
  }
  function createCookie(name, value, days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    var ck = name + "=" + value + expires + "; path=/";
    document.cookie = ck;
  }
  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i=0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
  }
  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  var armkb_objlist = new Array();
