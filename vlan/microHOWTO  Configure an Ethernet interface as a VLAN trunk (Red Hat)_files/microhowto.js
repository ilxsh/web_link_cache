function show_google() {
  var html = "<div class=\"g-plusone\" data-size=\"standard\">\n";
  document.getElementById('google').innerHTML = html;
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
}

function show_facebook() {
  var html = "<div class=\"fb-like\" layout=\"button_count\">\n";
  document.getElementById('fb-root').innerHTML = html;
  var e = document.createElement('script'); e.async = true;
  e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js#xfbml=1';
  document.getElementById('fb-root').appendChild(e);
}

function show_twitter() {
  var html = "<a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-via=\"twitterapi\" data-lang=\"en\">Tweet</a>";
  document.getElementById('twitter').innerHTML = html;
  var e = document.createElement('script'); e.async = true;
  e.src = 'https://platform.twitter.com/widgets.js';
  document.getElementById('twitter').appendChild(e);
}

function on_load() {
  var found = false;
  var cookies = document.cookie.split(/; */);
  for (var i = 0; i != cookies.length; ++i) {
    if (cookies[i] == "cookie=hide") { found = true; }
  }
  if (!found) { document.getElementById('cookies').setAttribute('style', ''); }
}

function hide_cookie_message() {
  document.cookie = 'cookie=hide';
  document.getElementById('cookies').setAttribute('style', 'display: none');
}
