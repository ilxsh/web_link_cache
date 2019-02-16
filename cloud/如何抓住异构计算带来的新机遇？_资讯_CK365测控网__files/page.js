function Print(i) {if(isIE) {window.print();} else {var i = i ? i : 'content'; var w = window.open('','',''); w.opener = null; w.document.write('<div style="width:630px;">'+$('#'+i).html()+'</div>'); w.window.print();}}
function addFav(t) {document.write('<a href="'+window.location.href+'" title="'+document.title+'" rel="sidebar" onclick="window.external.addFavorite(this.href, this.title);return false;">'+t+'</a>');}
function Dsearch(){
	if($('#xzgcms_kw').val().length < 1 || $('#xzgcms_kw').val() == L['keyword_message']){
		$('#xzgcms_kw').val('');
		window.setTimeout(function(){$('#xzgcms_kw').val(L['keyword_message'])}, 500);
		return false;
	}
}
function set_searchModule(i, o){
	$('#xzgcms_moduleid').val(o);
	$('#search_m').html(i);
	$('#search_module').hide();
}
function setModule(i, o){
	$('#xzgcms_moduleid').val(i);
	searchid = i;
	$('#search_module li').each(function(j){
		$(this).removeClass();
	});
	o.addClass('head_search_on');
}
var tip_word = '';
function STip(w){
	if(w.length < 2) {$('#search_tips').html(''); $('#search_tips').hide(); return;}
	if(w == tip_word) {return;} else {tip_word = w;}
	$.post(XZGPath+'api/ajax.php', {a:'tipword', mid:searchid, word:w}, function(data){
		if(data){
			$('#search_tips').show().html(data+'<label onclick="$(\'#search_tips\').hide();">'+L['search_tips_close']+'&nbsp;&nbsp;</label>');
		}else{
			$('#search_tips').html('').hide();
		}
	});
}
function Dsearch_adv() {Go(XZGPath+'search.php?moduleid='+$('#xzgcms_moduleid').val());}
function Dsearch_top() {$('#xzgcms_spread').val(1);$('#xzgcms_search').submit();}
function show_task(s) {document.write('<script type="text/javascript" src="'+XZGPath+'api/task.js.php?'+s+'&refresh='+Math.random()+'.js"></sc'+'ript>');}
function task(s) {document.write('<script type="text/javascript" src="'+XZGPath+'api/task.js.php?'+s+'&refresh='+Math.random()+'.js"></sc'+'ript>');}
function PushNew(){
	$.post(AJPath, {a:'pushnew'}, function(data){
		if(data){
			var t = data.split('|');
			var s = '';
			t[3] = substr_count(get_cookie('cart'), ',');
			$('#xzgcms_cart').html(t[3] > 0 ? '<strong class="f_red">'+t[3]+'</strong>' : '0');
			$('#xzgcms_chat').html(t[0] > 0 ? '<strong class="f_red">'+t[0]+'</strong>' : '0');
			$('#xzgcms_message').html(t[1] > 0 ? '<strong class="f_red">'+t[1]+'</strong>' : '0');
			if(t[0] && xzgcms_chat < t[0]) s += sound('chat_new');
			if(t[1] && t[2] && xzgcms_message < t[1]) s += sound('message_'+t[2]);
			if(s) $('#tb_c').html(s);
			xzgcms_chat = t[0];
			xzgcms_message = t[1];
		}
	});
}
function View(s){window.open(XZGPath+'api/view.php?img='+s);}
function Album(id, s){
	for(var i = 0; i < 3; i++){ $('#t_'+i).removeClass().addClass(id == i ? 'ab_on' : 'ab_im');}
	$('#abm').html('<img src="'+s+'" onload="if($(this).width()>240){$(this).width(240);}" onclick="PAlbum($(this));" onmouseover="SAlbum($(this).attr(\'src\'));" onmouseout="HAlbum();" id="DIMG"/>');
}
function SAlbum(s){
	if(s.indexOf('nopic240.gif') != -1) return;
	if(s.indexOf('.middle.') != -1) s = s.substring(0, s.length-8-ext(s).length);
	$('#imgshow').html('<img src="'+s+'" onload="if($(this).width()<240){HAlbum();}else if($(this).width()>630){$(this).width(630);}"/>').show('slow');
}
function HAlbum(){ $('#imgshow').hide('slow', function(){ $('#imgshow').html(''); }); }
function PAlbum(o){if(o.attr('src').indexOf('nopic240.gif')==-1) View(o.attr('src'));}
function user_login(){
	if($('#user_name').val().length < 2){ $('#user_name').focus(); return false; }
	if($('#user_pass').val() == 'password' || $('#user_pass').val().length < 6){ $('#user_pass').focus(); return false;}
}
function show_comment(u, m, i){document.write('<iframe src="'+u+'comment.php?mid='+m+'&itemid='+i+'" name="xzgcms_comment" id="xzg'+'cms_comment" style="width:100%;height:0px;" scrolling="no" frameborder="0"></iframe>');}
function show_answer(u, i) {document.write('<iframe src="'+u+'answer.php?itemid='+i+'" name="xzgcms_answer" id="xzgc'+'ms_answer" style="width:100%;height:0px;" scrolling="no" frameborder="0"></iframe>');}
function show_message(u, i) {document.write('<iframe src="'+u+'message.php?itemid='+i+'" name="xzgcms_msg" id="xzg'+'cms_msg" style="width:99%;height:0px;" scrolling="no" frameborder="0"></iframe>');}
function show_biaoqing(u, m,i){document.write('<iframe src="'+u+'biaoqing.php?mid='+m+'&itemid='+i+'" name="xzgcms_biaoqing" id="xzgcms_biaoqing" style="width:99%; height:0px;" scrolling="no" frameborder="0"></iframe>');}
function img_tip(o, i){
	if(i){
		if(i.indexOf('nopic.gif') == -1){
			if(i.indexOf('.thumb.') != -1) {var t = i.split('.thumb.');var s = t[0];} else {var s = i;}
			var aTag = o; var leftpos = toppos = 0;
			do {aTag = aTag.offsetParent; leftpos	+= aTag.offsetLeft; toppos += aTag.offsetTop;
			} while(aTag.offsetParent != null);
			var X = o.offsetLeft + leftpos + 90;
			var Y = o.offsetTop + toppos - 20;
			$('#img_tip').css('left', X+'px').css('top', Y+'px').show().html('<img src="'+s+'" onload="if(this.width<200) {$(\'#img_tip\').hide();}else if(this.width>300){this.width=300;}$(\'#img_tip\').width($(this).width());"/>')
		}
	}else{
		$('#img_tip').hide();
	}
}
function tagtip(o, i, u){
	if(i){
		var aTag = o; var leftpos = toppos = 0;
		do {aTag = aTag.offsetParent; leftpos	+= aTag.offsetLeft; toppos += aTag.offsetTop;
		} while(aTag.offsetParent != null);
		var X = o.offsetLeft + leftpos + 8;
		var Y = o.offsetTop + toppos + 8;
		$('#tagtip').css('left', X+'px').css('top', Y+'px').show().html('<a href="'+u+'" target="_blank"><span class="f_red">'+i+'</span> 的微门户</a>');
	}else{
		$('#tagtip').hide();
	}
}
function Tb(d, t, p, c){
	for(var i=1; i<=t; i++){
		if(d == i){ $('#'+p+'_t_'+i).removeClass().addClass(c+'_2');$('#'+p+'_c_'+i).show(); }else{ $('#'+p+'_t_'+i).removeClass().addClass(c+'_1');$('#'+p+'_c_'+i).hide(); }
	}
}
function show_sell_cat(id, a){
	for(var i = 0; i < a; i++){
		$('#childcat_'+i).hide();
		$('#maincat_'+i).addClass('sell_maincat');
	}
	$('#childcat_'+id).show();
	$('#maincat_'+id).removeClass().addClass('sell_maincat_on');
}
function hide_sell_cat(a){
	for(var i = 0; i < a; i++){
		$('#childcat_'+i).hide();
		$('#maincat_'+i).removeClass().addClass('sell_maincat');
	}
}
function cat_more_show(){
	var lis = $('#category_more li');
	lis.each(function(index){
		$(this).show();
	});
	$('#cat_more_show').hide();
	$('#cat_more_hide').show();
}
function isMobile(){
	var platform = navigator.platform;
	var ios = /iPhone|iPad|iPod/.test(platform) && UA.indexOf( "applewebkit" ) > -1;
	var andriod = UA.indexOf( "android" ) > -1;
	if(ios || andriod){
		return true;
	}else{
		return false;
	}
}
function GoMobile(url) {
	if(isMobile() && get_cookie('mobile') != 'pc') Go(url);
}
function cat_more_hide(index){
	var lis = $('#category_more li');
	lis.each(function(i){
		if(i > index){
			$(this).hide();
		}
	});
	$('#cat_more_show').show();
	$('#cat_more_hide').hide();
}
function cat_more_show1(){
	var lis = $('#category_more tr');
	lis.each(function(i){
		$(this).show();
	});
	$('#cat_more_show').hide();
	$('#cat_more_hide').show();
}
function cat_more_hide1(index){
	var lis = $('#category_more tr');
	lis.each(function(i){
		if(i > index){
			$(this).hide();
		}
	});
	$('#cat_more_show').show();
	$('#cat_more_hide').hide();
}
var tongjiId = 0; 
function tongji(f, u, m, i, catid, html, resolution, color){
	$.post(AJPath, {a:'tongji', f:encodeURI(f), u:encodeURI(u), mid:m, itemid:i, html:html, catid:catid, resolution:resolution, color:color}, function(data){ tongjiId = parseInt(data);});
}
$(window).bind('beforeunload', function(){ if(tongjiId){ $.post(AJPath, {a:'unloadTongji', id:tongjiId}); } });
(function() {
	$(window).bind("scroll.back2top", function() {
		var st = $(document).scrollTop(), winh = $(window).height();
        (st > 0) ? $('#back2top').show() : $('#back2top').hide();        
        if(!window.XMLHttpRequest) { $('#back2top').css("top", st + winh - 166);}//IE6
	});
})();
var _page = 0;
function getItemList(mid, start, limit, total, where, order, datetype){
	var order = order ? order : 'addtime desc';
	var where = where ? where : 'status = 3';
	var datetype = datetype ? datetype : 6;
	var tags = '';
	if(_page < total){
		var offset = start + _page * limit;
		_page++;
		$.ajax({
			url: AJPath,
			data:{
				a: 'getItemList',
				offset: offset,
				mid: mid,
				w: where,
				order: order,
				limit: limit,
				datetype: datetype
			},
			async: false,
			type: 'GET',
			success: function(data){
				tags = eval('('+data+')');
			}
		});
		return tags;
	}
}
function _Ni_Hits(n, t){
	n = encodeURIComponent(n); t = encodeURIComponent(t);
	var s = document.createElement("script");
	s.type = "text/javascript";
	s.id = "xzgcms_ni";
	s.src = XZGPath+'api/hits.js.php?n='+n+'&t='+t+'&refresh='+new Date().getTime();
	document.body.appendChild(s);
}
$(document).ready(function(){
	$(document).keydown(function(e){
		var k = e.keyCode;
		if(k == 37){
			if($('#xzgcms_previous').val()) window.location = $('#xzgcms_previous').val();
		}else if(k == 39){
			if($('#xzgcms_next').val()) window.location = $('#xzgcms_next').val();
		}
	});
});