(function(window, undefined){
	if(!window.PicShow)
	{
		window.PicShow={};
	}
	var $ = window.PicShow || {};
	
	function GetImageUrl( picUrl, ImgWidth,ImgHeight){
		return 'http://image20.it168.com/picshow/'+ImgWidth+'x'+ImgHeight+'/'+picUrl.substr(0, 8)+'/'+picUrl;		
	};
	
	function Frame(P_ArticleId) {
		var Frame_html='';		
		Frame_html+='<div class="cont2">';
		Frame_html+='<div class="cont7"  id="Pic_Start'+P_ArticleId+'">';
		Frame_html+='<div class="bor2" id="Pic_photo'+P_ArticleId+'">';
		Frame_html+='<a class="left1"></a>';
		Frame_html+='<a class="right1"></a>';
		Frame_html+='<a href="" class="fangd"></a>';
		Frame_html+='<img src="/detailinclude/picshow/articlepicshow/images/imgload.gif" />';
		Frame_html+='</div>';
		Frame_html+='<div class="cont3"></div>';
		Frame_html+='</div>';
		Frame_html+='<div class="cont7" style="display:none;" id="Pic_End'+P_ArticleId+'">';
		Frame_html+='<div class="cont8"><a href="javascript:" target="_self" class="a1">图赏浏览完毕</a> <a href="javascript:" target="_self"  class="a2" id="Pic_Reset'+P_ArticleId+'">重新浏览</a></div>';
		Frame_html+='<div class="tit10">大家都在看</div>';
		Frame_html+='<ul class="list12">	';						
		Frame_html+='</ul>';
		Frame_html+='</div>';
		Frame_html+='<div class="cont4" >';
		Frame_html+='<ul class="list3" id="thumb'+P_ArticleId+'">	';						
		Frame_html+='</ul>';
		Frame_html+='</div>';
		Frame_html+='<div class="cont5">';
		Frame_html+='<a href="javascript:" target="_self" style="width:200px;left:0px;" id="bar'+P_ArticleId+'">';
		Frame_html+='<b class="left"></b>';
		Frame_html+='<b class="right"></b>';
		Frame_html+='<span class="center"></span>';
		Frame_html+='</a>';
		Frame_html+='</div>';
		Frame_html+='<div class="cont6">';
		Frame_html+='<div class="float1" id="PicshareShow'+P_ArticleId+'">';
		Frame_html+='<div class="list11"><a href="javascript:" target="_self" class="a1"></a><a href="javascript:" target="_self"  class="a2"></a><a href="javascript:" target="_self" class="a3"></a><a href="javascript:" target="_self" class="a4"></a></div>';
		Frame_html+='</div>';
		Frame_html+='<div class="l"><a href="http://tu.it168.com/">全部图赏</a></div>';
		Frame_html+='<div class="r"><a href="javascript:" target="_self" id="Picshare'+P_ArticleId+'">分享</a> <span>|</span> <a href="" id="PicUrl'+P_ArticleId+'">查看此图赏</a></div>';
		Frame_html+='</div>';
		Frame_html+='</div>';				
		jQuery("#It168PicShow"+P_ArticleId).html(Frame_html);		
		
	};
	
	
	 function LoadData(P_ArticleId) {	 
		var t = this;
		if(P_ArticleId<=0)
		 {
		 return
		 }
		t.P_AId =P_ArticleId;
		t.bar = {};
		t.thumb={};
		t.pic_Photo={};
		t.Pic_Start={};
		t.Pic_End={};
		t.PicUrl={};
		t.pic_Url='';		
		t.picArticle={};
		t.picList_count=0;
		t.barScroll
		t.uWidth =97;
		t.cPicImage=0;
	 
	 
	 
		var dsUrl = "http://picshowajax.it168.com/picshow.ashx?type=PicShowForArticle&articleid="+t.P_AId;
		jQuery.ajax({
				url: dsUrl+ "&src=returnjsonp&Charset=GB2312",
				dataType : "jsonp",
				jsonp: "callbackparam",
				success: function (data) {
					if(data!=""&&data!="-1")
					{
						
						//data= data.replace('//','{a}');
						//data= data.replace(/\/\//g, "{a}") 
						
						//picArticle=eval("("+data+")");
						
						t.picArticle=jQuery.parseJSON(data);
						var picList = t.picArticle.PicList
						var piclist_html ='';
						t.picList_count=picList.length;
						if(t.picList_count<=0)
						{
							return;
						}
						Frame(t.P_AId);
						for (var pic = 0; pic < t.picList_count; pic++)
						{
							piclist_html+='<li id="Nav_'+picList[pic].OrderNum+'">';
							piclist_html+='<div class="pageall">'+picList[pic].OrderNum+'/'+t.picList_count+'</div>';
							piclist_html+='<div class="borbg"></div>';
							piclist_html+='<img src="'+GetImageUrl(picList[pic].PicPath,200,150)+'" width="95" height="70" alt="'+picList[pic].Alt+'" />';
							piclist_html+='</li>';
							if(pic==(t.picList_count-1))
							{
								piclist_html+='<li id="Nav_'+(picList[pic].OrderNum+1)+'">';
								piclist_html+='<div class="pageall" style="display:none;">最后一页</div>';
								piclist_html+='<div class="borbg"></div>';
								piclist_html+='<img src="/detailinclude/picshow/articlepicshow/images/95x70.png" width="95" height="70" alt="" />';
								piclist_html+='</li>';
							}
						}
						
						if(piclist_html!=null && piclist_html!="")
						{
							t.picList_count+=1;
							t.pic_Url= t.picArticle.Channel.DomainUrl+'/tu/'+t.picArticle.ArticleId+'_1.shtml';
							
							t.bar = jQuery("#bar"+t.P_AId);
							t.thumb=jQuery("#thumb"+t.P_AId);
							t.pic_Photo = jQuery("#Pic_photo"+t.P_AId);
							t.Pic_Start = jQuery("#Pic_Start"+t.P_AId);
							t.Pic_End = jQuery("#Pic_End"+t.P_AId);
							t.PicUrl = jQuery("#PicUrl"+t.P_AId);
							
							t.thumb.html(piclist_html);
							t.init();
						}
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {}
			});	
	};
	
	
	
	LoadData.prototype = {
		init:function()
		{
			var t = this;
			var tCntWidth = t.thumb.parent().width(),
			tWidth = t.uWidth * t.picList_count;
			t.thumb.width(tWidth);
			var bCntWidth = t.bar.parent().width(),
			bWidth = Math.max(36, Math.min(tCntWidth * bCntWidth / tWidth, bCntWidth));		
			
			t.bar.width( bWidth + 'px');
			t.barScroll = new $.ui.Scroll(t.thumb, 'x', t.bar);
			t.showPhoto(1);
			t.thumb.find('li').click(function(){t.showPhoto(parseInt(jQuery(this).attr("id").replace("Nav_","")))});
			
			t.pic_Photo.find('.left1').click(function(){t.showPhoto(t.cPicImage-1);sendPV('');});
			t.pic_Photo.find('.right1').click(function(){t.showPhoto(t.cPicImage+1);sendPV('');});
			
			t.pic_Photo.hover(
				function() {
					t.pic_Photo.find('.fangd').show();
				},
				function() {
					t.pic_Photo.find('.fangd').hide()
			});
			
			t.PicShare(t.P_AId);
			
			t.PicUrl.attr('href',t.pic_Url);
			
		},
        showPhoto: function(p){
            var t = this;
			if(p>t.picList_count||p<1)
			{
				return t;
			}
			
			var tNum = Math.floor(t.thumb.parent().width() / t.uWidth),
			mult = Math.max(0, Math.min(p - Math.floor((tNum + 1) / 2), t.picList_count - tNum)),
			pos= t.uWidth * mult,
			obj=t.thumb.find('#Nav_'+p);
			
            t.barScroll.scrollTo(pos);			
			t.thumb.find('.borbg').hide();			
			obj.find('.borbg').show();
			t.cPicImage = p;
			if(p>(t.picList_count-1))
			{
				t.Pic_Start.hide();
				t.Pic_End.show();
				t.LoadRandomArticle();				
				jQuery('#Pic_Reset'+t.P_AId).click(function(){t.showPhoto(1);});
			}
			else
			{
				t.Pic_End.hide();
				t.Pic_Start.show();
				var objImg=obj.find('img').attr('src');
				if(objImg.indexOf('200x150') >=0)
				{
					objImg=objImg.replace('200x150','550x585');
					obj.find('img').attr('src',objImg);
				}
				t.pic_Photo.find('img').attr('src',objImg);				
				t.pic_Photo.find('.fangd').attr('href',t.pic_Url+'#'+p);
				
				var picBrief =t.picArticle.PicList[(p-1)].PicBrief;
				if(picBrief!="")
				{
					t.Pic_Start.find('.cont3').html(picBrief);
					t.Pic_Start.find('.cont3').show();
				}
				else
				{
				t.Pic_Start.find('.cont3').hide();
				}
				
				t.loadImage(p);
			}
            return t;
        },
		LoadRandomArticle:function ()
		{
			var t = this;
			var dsUrl = "http://picshowajax.it168.com/PicShow.ashx?type=PicArticle&ChannelId="+t.picArticle.Channel.ChannelId+"&Count=6";		
			jQuery.ajax({
				url: dsUrl+ "&src=returnjsonp&Charset=GB2312",
				dataType : "jsonp",
				jsonp: "callbackparam",
				success: function (data) {
					if(data!="")
					{
						var dataArt=eval("("+data+")");					
						if(dataArt.length>0)
						{
							a_html='';
							for (var a = 0; a < dataArt.length; a++)
							{
								var url = t.picArticle.Channel.DomainUrl+'/tu/'+dataArt[a].ArticleId+'_1.shtml';
								a_html+='<li>';
								a_html+='<div class="div1"><a href="'+url+'"><img src="'+GetImageUrl(dataArt[a].ImageUrl,200,150)+'" width="160" height="107" alt="'+dataArt[a].Title+'" /></a><p><a href="'+url+'">'+dataArt[a].Title+'</a></p></div>';
								a_html+='</li>';							
							}
							t.Pic_End.find(".list12").html(a_html);
						}				
					}
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {}
			});
		},
		PicShare: function()
		{
			var t = this;
			bShare.addEntry({
				 title: t.picArticle.Title,
				 url: t.picArticle.Channel.DomainUrl + "/tu/" + t.picArticle.ArticleId + "_1.shtml",
				 summary: t.picArticle.Title,//t.picArticle.Introduction
				 pic: GetImageUrl(t.picArticle.PicList[0].PicPath,900,675)
			 });
			
			var shareIndex= bShare.counters.length-1;
			jQuery("#PicshareShow"+t.P_AId+" .a1").click(function(e){bShare.share(e,'sinaminiblog',shareIndex);return false;});
			jQuery("#PicshareShow"+t.P_AId+" .a2").click(function(e){bShare.share(e,'weixin',shareIndex);return false;});
			jQuery("#PicshareShow"+t.P_AId+" .a3").click(function(e){bShare.share(e,'qzone',shareIndex);return false;});
			jQuery("#PicshareShow"+t.P_AId+" .a4").click(function(e){bShare.share(e,'qqmb',shareIndex);return false;});
			
			jQuery("#Picshare"+t.P_AId).hover(
				function() {
					jQuery("#PicshareShow"+t.P_AId).show();
				},
				function() {
				jQuery("#PicshareShow"+t.P_AId).hide()
			});
			
			jQuery("#PicshareShow"+t.P_AId).hover(
				function() {
					jQuery("#PicshareShow"+t.P_AId).show();
				},
				function() {
				jQuery("#PicshareShow"+t.P_AId).hide()
			});
		},
		loadImage:function(p)
		{
			var t = this;
			for(var i = (p-2);i<=(p+2);i++)
			{
				if(i > 0 && i < t.picList_count)
				{
					obj=t.thumb.find('#Nav_'+i);
					var objImg=obj.find('img').attr('src');
					if(objImg.indexOf('200x150') >=0)
					{
						objImg=objImg.replace('200x150','550x585');
						obj.find('img').attr('src',objImg);
					}
				}
			}
		
		}
    };
	
	$.LoadData =LoadData
	
})(window);

(function(window, undefined){
	jQuery("[name='It168PicShow']").each(function(){
	new PicShow.LoadData(parseInt(jQuery(this).attr("id").replace("It168PicShow","")));
  });
})(window);

