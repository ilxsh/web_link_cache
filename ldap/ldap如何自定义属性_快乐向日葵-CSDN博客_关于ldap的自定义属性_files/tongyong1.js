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
		{src:"images/beijinger.jpg", id:"beijinger"},
		{src:"images/beijingsan.jpg", id:"beijingsan"},
		{src:"images/beijingyi.jpg", id:"beijingyi"},
		{src:"images/eryewenyi.png", id:"eryewenyi"},
		{src:"images/sanyewenba.png", id:"sanyewenba"},
		{src:"images/sanyewener.png", id:"sanyewener"},
		{src:"images/sanyewenliu.png", id:"sanyewenliu"},
		{src:"images/sanyewenqi.png", id:"sanyewenqi"},
		{src:"images/sanyewensan.png", id:"sanyewensan"},
		{src:"images/sanyewensi.png", id:"sanyewensi"},
		{src:"images/sanyewenwu.png", id:"sanyewenwu"},
		{src:"images/sanyewenyi.png", id:"sanyewenyi"},
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



(lib.beijinger = function() {
	this.initialize(img.beijinger);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.beijingsan = function() {
	this.initialize(img.beijingsan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.beijingyi = function() {
	this.initialize(img.beijingyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.eryewenyi = function() {
	this.initialize(img.eryewenyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.sanyewenba = function() {
	this.initialize(img.sanyewenba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,30);


(lib.sanyewener = function() {
	this.initialize(img.sanyewener);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,245,24);


(lib.sanyewenliu = function() {
	this.initialize(img.sanyewenliu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,17);


(lib.sanyewenqi = function() {
	this.initialize(img.sanyewenqi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,21);


(lib.sanyewensan = function() {
	this.initialize(img.sanyewensan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,17);


(lib.sanyewensi = function() {
	this.initialize(img.sanyewensi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,17);


(lib.sanyewenwu = function() {
	this.initialize(img.sanyewenwu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,17);


(lib.sanyewenyi = function() {
	this.initialize(img.sanyewenyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,48);


(lib.yiyewenyi = function() {
	this.initialize(img.yiyewenyi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewener();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,24);


(lib.yuanjianq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewenba();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,30);


(lib.yuanjianp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewenqi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182,21);


(lib.yuanjiano = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewenliu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,17);


(lib.yuanjiann = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewenwu();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,17);


(lib.yuanjianm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewensi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,17);


(lib.yuanjianl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewensan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,17);


(lib.yuanjianj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.sanyewenyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,48);


(lib.yuanjiani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.beijingsan();
	this.instance.setTransform(0,0,1.007,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,302,250);


(lib.yuanjiang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.eryewenyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yuanjiane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.beijinger();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yuanjianc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yiyewenyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.yuanjiana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.beijingyi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yuanjianj("synched",0);
	this.instance.setTransform(52.5,15.5,1,1,0,0,0,52.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141,48);


// stage content:
(lib.tongyong1300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.yuanjianc("synched",0);
	this.instance.setTransform(68.6,8,1,1,0,0,0,98.5,8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:98.5,alpha:1},14).wait(95).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(240));

	// 图层_1
	this.instance_1 = new lib.yuanjiana("synched",0);
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(240));

	// 图层_7
	this.instance_2 = new lib.yuanjiang("synched",0);
	this.instance_2.setTransform(119.6,8.5,1,1,0,0,0,71.1,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({regX:71,x:71,alpha:1},14).wait(95).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(120));

	// 图层_5
	this.instance_3 = new lib.yuanjiane("synched",0);
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({alpha:1},9).wait(100).to({startPosition:0},0).to({alpha:0},10).to({_off:true},1).wait(120));

	// 图层_17
	this.instance_4 = new lib.yuanjianq("synched",0);
	this.instance_4.setTransform(150.1,216.6,1,1,0,0,0,57.1,14.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(299).to({_off:false},0).to({y:206.6,alpha:1},10).wait(51));

	// 图层_16
	this.instance_5 = new lib.yuanjianp("synched",0);
	this.instance_5.setTransform(169.5,180.1,1,1,0,0,0,110.5,26.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(299).to({_off:false},0).to({x:168.5,y:187.1,alpha:1},10).wait(51));

	// 图层_15
	this.instance_6 = new lib.yuanjiano("synched",0);
	this.instance_6.setTransform(208.1,142.6,1,1,0,0,0,60.1,8.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(289).to({_off:false},0).to({y:142.9,alpha:1},10).wait(61));

	// 图层_14
	this.instance_7 = new lib.yuanjiann("synched",0);
	this.instance_7.setTransform(193.1,114.6,1,1,0,0,0,45.1,8.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(279).to({_off:false},0).to({y:115.6,alpha:1},10).wait(71));

	// 图层_13
	this.instance_8 = new lib.yuanjianm("synched",0);
	this.instance_8.setTransform(86.6,142.6,1,1,0,0,0,38.6,8.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({x:68.1,y:142.9,alpha:1},10).wait(81));

	// 图层_12
	this.instance_9 = new lib.yuanjianl("synched",0);
	this.instance_9.setTransform(87.1,115.6,1,1,0,0,0,38.1,8.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(259).to({_off:false},0).to({x:67.6,alpha:1},10).wait(91));

	// 图层_11
	this.instance_10 = new lib.元件3("synched",0);
	this.instance_10.setTransform(172.6,80.1,1,1,0,0,0,134.6,12.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(249).to({_off:false},0).to({x:162.1,y:89.1,alpha:1},10).wait(101));

	// 图层_10
	this.instance_11 = new lib.元件2("synched",0);
	this.instance_11.setTransform(143.5,32.6,1,1,0,0,0,74,21.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(240).to({_off:false},0).to({x:153.5,y:42.6,alpha:1},9).wait(111));

	// 图层_9
	this.instance_12 = new lib.yuanjiani("synched",0);
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(240).to({_off:false},0).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.1,125,330,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;