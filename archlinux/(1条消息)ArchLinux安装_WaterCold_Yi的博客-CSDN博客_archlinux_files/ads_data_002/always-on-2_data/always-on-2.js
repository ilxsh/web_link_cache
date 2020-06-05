(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/beijingyi.jpg", id:"beijingyi"},
		{src:"images/yiyebiaoti.png", id:"yiyebiaoti"},
		{src:"images/yiyewener.png", id:"yiyewener"},
		{src:"images/yiyewenyi.png", id:"yiyewenyi"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.beijingyi = function() {
	this.initialize(img.beijingyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yiyebiaoti = function() {
	this.initialize(img.yiyebiaoti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,23);


(lib.yiyewener = function() {
	this.initialize(img.yiyewener);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,27);


(lib.yiyewenyi = function() {
	this.initialize(img.yiyewenyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yuanjiand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yiyewener();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,27);


(lib.yuanjianc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yiyewenyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yuanjianb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yiyebiaoti();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80,23);


(lib.yuanjiana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.beijingyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib.alwayson2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.yuanjiand("synched",0);
	this.instance.setTransform(261,137,1,1,0,0,0,136,8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:248,alpha:1},14).wait(95).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// 图层_3
	this.instance_1 = new lib.yuanjianc("synched",0);
	this.instance_1.setTransform(68.5,8,1,1,0,0,0,98.5,8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:98.5,alpha:1},14).wait(95).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// 图层_2
	this.instance_2 = new lib.yuanjianb("synched",0);
	this.instance_2.setTransform(262.5,55.5,1,1,0,0,0,52.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({startPosition:0},0).to({alpha:0},10).wait(1));

	// 图层_1
	this.instance_3 = new lib.yuanjiana("synched",0);
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({startPosition:0},0).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120,125,330,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;