



//Ê÷

$(".v3_navtree .l").hover(function(){

	$(this).addClass("cur");

	$(this).find(".treebox").show();

},function(){

	$(this).removeClass("cur");

	$(this).find(".treebox").hide();

});

///



//Ê÷

if($("body").attr("id")!="index"){

	$(".v3_navtree").hover(function(){

		$(".v3_content").show();

	},function(){

		$(".v3_content").hide();

	});

};

///



//tab

$(".tab li").hover(function(){

	$(this).siblings().removeClass("cur");

	$(this).parents(".cbox").find(".content").hide();

	$(this).addClass("cur");

	$(this).parents(".cbox").find(".content").eq($(this).index()).show();

});

///

function ShowLayers4(n,m)
{
for(i=1;i<=m;i++)
{
eval("document.getElementById('ft"+i+"').className=\"t2\";");
eval("document.getElementById('f"+i+"')").style.display="none";
}
eval("document.getElementById('ft"+n+"').className=\"t1\";");
eval("document.getElementById('f"+n+"')").style.display="";
} 

$(".map").hover(function(){
	$(this).find(".map_inner").fadeIn(300);
},function(){
	$(this).find(".map_inner").fadeOut(300);
})