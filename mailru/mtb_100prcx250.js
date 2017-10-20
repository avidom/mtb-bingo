(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 2000,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bingo.png", id:"bingo"},
		{src:"images/car.png", id:"car"},
		{src:"images/card1.png", id:"card1"},
		{src:"images/card2.png", id:"card2"},
		{src:"images/card3.png", id:"card3"},
		{src:"images/card4.png", id:"card4"},
		{src:"images/card5.png", id:"card5"},
		{src:"images/cardGlow.png", id:"cardGlow"},
		{src:"images/cardsShadow.png", id:"cardsShadow"},
		{src:"images/comb.png", id:"comb"},
		{src:"images/ref.png", id:"ref"},
		{src:"images/sroki.png", id:"sroki"},
		{src:"images/tv.png", id:"tv"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bingo = function() {
	this.initialize(img.bingo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,111);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,261,126);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,94);


(lib.card2 = function() {
	this.initialize(img.card2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,89);


(lib.card3 = function() {
	this.initialize(img.card3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,90);


(lib.card4 = function() {
	this.initialize(img.card4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,89);


(lib.card5 = function() {
	this.initialize(img.card5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,96);


(lib.cardGlow = function() {
	this.initialize(img.cardGlow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,108);


(lib.cardsShadow = function() {
	this.initialize(img.cardsShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,185);


(lib.comb = function() {
	this.initialize(img.comb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,51);


(lib.ref = function() {
	this.initialize(img.ref);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,86);


(lib.sroki = function() {
	this.initialize(img.sroki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,26);


(lib.tv = function() {
	this.initialize(img.tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,59);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.instance = new lib.sroki();
	this.instance.setTransform(-111,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-13,222,26);


(lib.Symbol73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tv();
	this.instance.setTransform(-36,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-29,73,59);


(lib.Symbol72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.car();
	this.instance.setTransform(-130,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-63,261,126);


(lib.Symbol71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ref();
	this.instance.setTransform(-17,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-43,34,86);


(lib.Symbol70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.comb();
	this.instance.setTransform(-14,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-25,29,51);


(lib.Symbol66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAqIAAgPIAPAAIAAAPgAgHANIAAg2IAPAAIAAA2g");
	this.shape.setTransform(67.6,-4.1,3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAUIANAAQAOgBAJAIQAJAFAAAMQAAAMgJAIQgIAHgPAAgAgJAdIANAAQAHAAAEgEQAEgEAAgGQAAgFgEgEQgEgFgHAAIgNAAg");
	this.shape_1.setTransform(46.2,-4.1,3.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAgXIghAAIAAAXIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAYIAhAAIAAgYIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_2.setTransform(12.1,-4.1,3.9,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAqIAAgKIAJgCIAAg7IgJgCIAAgKIBBAAIAAAYIgNAAIgBgLIgZAAIAAAVIAbAAIAAAMIgbAAIAAAYIAZAAIABgKIANAAIAAAXg");
	this.shape_3.setTransform(-21.5,-4.1,3.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA1IAAgWIgyAAIAAAWIgQAAIgBgiIAHAAQAEgEAEgJQADgHABgPIABgYIgIgBIAAgKIBIAAIAAAKIgKABIAAA7IALAAIgCAigAgGgQQgBAMgCAHQgEAKgDAGIAfAAIAAg6IgUAAg");
	this.shape_4.setTransform(-54.1,0,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-20.6,142,41.3);


(lib.Symbol65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHA2IAAgKIAKgBIAAgnIgBAAIggAjIAAAEIAJABIAAAKIgjAAIAAgKIAJgBIAAg8IgJgBIAAgKIAjAAIAAAKIgJABIAAAmIAAAAIAhghIAAgFIgKgBIAAgKIAkAAIAAAKIgJABIAAA8IAJABIAAAKgAgNgpQgGgFABgIIALAAQAAAEACACQACACADAAQAEAAACgCQABgDAAgDIAMAAQABAHgGAGQgFAEgJABQgIgBgFgEg");
	this.shape.setTransform(98.7,-4.1,3.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASAqIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKgAg1AqIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAIAAAKIgJACIAAAUIAPAAQAMgBAJAIQAIAFAAAMQAAAMgIAIQgJAHgMAAgAgaAdIAPAAQAHAAAEgEQABgEAAgGQAAgFgBgEQgEgFgHAAIgPAAg");
	this.shape_1.setTransform(57.9,0.8,3.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA1IAAgWIgyAAIAAAWIgQAAIgBgiIAHAAQAEgEAEgJQADgHABgPIABgYIgIgBIAAgKIBIAAIAAAKIgKABIAAA7IALAAIgCAigAgGgQQgBAMgCAHQgEAKgDAGIAfAAIAAg6IgUAAg");
	this.shape_2.setTransform(17.6,4.9,3.9,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAqIAAgKIADAAIgMgYIgLAAIAAAXIAJABIAAAKIghAAIAAgKIAJgBIAAgXIgLAAIgMAYIADAAIAAAKIggAAIAAgKIAIgBIAVghIgLgRQgEgFgCgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgFABIgCgMIAFgCIAFgBQAHAAAEADQADABAFAIIANAXIAJAAIAAgXIgJgBIAAgKIAhAAIAAAKIgJABIAAAXIAJAAIANgXQAEgHAEgCQAEgDAGAAIAGABIAEACIgBAMIgFgBQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABAAAAQgDABgDAFIgLARIAUAhIAJABIAAAKg");
	this.shape_3.setTransform(-25.2,0.6,3.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgEgMIgZAAIgEAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdIAAAAg");
	this.shape_4.setTransform(-66.6,0.8,3.9,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGAqIAAgKIAFgBIgOgXIgKAAIAAAXIAJABIAAAKIgjAAIAAgKIAJgBIAAg8IgJgBIAAgKIAjAAIAAAKIgJABIAAAXIAIAAIAOgXQAGgIADgBQAEgDAHAAIAFABIAFACIgDAMIgFgBIgEACIgGAGIgNASIAXAgIAJABIAAAKg");
	this.shape_5.setTransform(-99.9,0.6,3.9,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115.6,-25.5,231.3,51.1);


(lib.Symbol64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE400").s().p("AAIA2IAAgKIAJgBIAAgnIghAjIAAAEIAJABIAAAKIgjAAIAAgKIAJgBIAAg8IgJgBIAAgKIAjAAIAAAKIgJABIAAAmIAhghIAAgFIgJgBIAAgKIAjAAIAAAKIgJABIAAA8IAJABIAAAKgAgOgpQgFgFAAgIIAMAAQAAAEACACQACACADAAQAEAAABgCQACgCAAgEIAMAAQAAAIgFAFQgGAEgIABQgIgBgGgEg");
	this.shape.setTransform(118.4,0,3.307,3.307);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AALAqIAAgKIAGgBIgEgMIgaAAIgDAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdg");
	this.shape_1.setTransform(88.5,4.1,3.307,3.307);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAQAOAAAJAGQAIAFAAANQAAAFgDAFQgDAFgFACQAHAAAEAFQAEAGAAAHQAAALgIAHQgIAGgPAAgAgJAdIAOAAQAHAAADgDQAEgDAAgFQAAgHgEgDQgDgDgGAAIgPAAgAgJgGIALAAQAGABAEgDQADgDAAgGQAAgFgDgDQgEgDgHAAIgKAAg");
	this.shape_2.setTransform(61.1,4.1,3.307,3.307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AASAqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAIAAAKIgJACIAAA7IAJACIAAAKgAg1AqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAIAAAKIgJACIAAAUIAOAAQANgBAJAIQAIAEAAANQAAAMgIAIQgJAHgNAAgAgaAdIAOAAQAHAAAEgEQACgDAAgHQAAgGgBgDQgFgFgHAAIgOAAg");
	this.shape_3.setTransform(29.1,4.1,3.307,3.307);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAnAAQAOAAAJAHQAJAIAAAMQAAAMgJAGQgJAIgOgBIgMAAIAAATIAIACIAAAKgAgIAAIAMAAQAHAAAEgEQADgDAAgHQAAgGgDgEQgEgEgHAAIgMAAg");
	this.shape_4.setTransform(-2.3,4.1,3.307,3.307);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE400").s().p("AgfAqIAAgKIAJgCIAAg7IgJgCIAAgKIA/AAIAAAWIgNAAIgBgJIgXAAIAAA6IAIACIAAAKg");
	this.shape_5.setTransform(-27.1,4.1,3.307,3.307);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAIAqIAAgKIAJgCIAAglIgBAAIggAhIAAAEIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAmIAhgiIAAgEIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_6.setTransform(-54.4,4.1,3.307,3.307);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AASAqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAIAAAKIgJACIAAA7IAJACIAAAKgAg1AqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAIAAAKIgJACIAAAUIAOAAQANgBAJAIQAIAEAAANQAAAMgIAIQgJAHgNAAgAgaAdIAOAAQAHAAAEgEQACgDAAgHQAAgGgBgDQgFgFgHAAIgOAAg");
	this.shape_7.setTransform(-88.9,4.1,3.307,3.307);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAQAOAAAJAGQAJAFgBANQAAAFgCAFQgEAFgFACQAHAAAEAFQAEAGAAAHQAAALgIAHQgIAGgPAAgAgJAdIAOAAQAHAAADgDQAEgDAAgFQAAgGgEgEQgDgDgGAAIgPAAgAgJgGIALAAQAGABAEgDQAEgDgBgGQABgFgEgDQgDgDgIAAIgKAAg");
	this.shape_8.setTransform(-120.8,4.1,3.307,3.307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.8,-18.2,265.8,36.4);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmsDUIAAmnINZAAIAAGng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-21.2,85.9,42.5);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAglIAAAAIghAhIAAAEIAKACIAAAKIgkAAIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAIAAAKIgKACIAAAlIAAAAIAhggIAAgFIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape.setTransform(79.1,0,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGArIAAgLIAFAAIgOgYIgKAAIAAAXIAJABIAAALIgjAAIAAgLIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAXIAIAAIAOgXQADgFAGgFQAEgDAHAAIAFABIAFACIgEANIgCAAIgCAAIgFABQgDACgCAEIgOASIAYAgIAJABIAAALg");
	this.shape_1.setTransform(52.2,-0.1,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAg6IghAAIAAA6IAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIBVAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_2.setTransform(25.1,0,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSArIgDgBIAAgNIADABIABAAQAEAAAEgCQACgDABgEIACgDIgYgwIgKgBIAAgLIAfAAIAAALIgDAAIAKAbIABAEIAAAAIAMgeIgFgBIAAgLIAfAAIAAALIgIABIgYA3QgEAJgDAEQgFAFgKAAg");
	this.shape_3.setTransform(-1.3,0.2,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAGArIAAgLIAFAAIgOgYIgKAAIAAAXIAJABIAAALIgjAAIAAgLIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAXIAIAAIAOgXQAEgGAFgEQAEgDAGAAIAGABIAFACIgEANIgCAAIgBAAIgGABQgDACgCAEIgOASIAYAgIAJABIAAALg");
	this.shape_4.setTransform(-26.4,-0.1,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSALgMQAKgMAQAAQARAAALAMQAKANAAARIAAAAQAAATgKAMQgLAMgRAAQgQAAgKgMgAgPgVQgFAIAAANIAAAAQAAAOAFAIQAFAIAKAAQALAAAFgIQAFgJAAgNIAAAAQAAgMgFgJQgGgIgKAAQgJAAgGAIg");
	this.shape_5.setTransform(-52.3,0,3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAg6IghAAIAAA6IAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIBVAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_6.setTransform(-79,0,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-13.1,184.2,26.3);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIA3IAAgLIAJgBIAAgnIAAAAIghAjIAAAEIAKABIAAALIgkAAIAAgLIAJgBIAAg8IgJgBIAAgLIAkAAIAAALIgKABIAAAmIABAAIAgghIAAgFIgJgBIAAgLIAjAAIAAALIgJABIAAA8IAJABIAAALgAgOgpQgFgFABgHIAAgBIALAAQAAADACADQACACADAAQADAAACgCQADgCAAgEIALAAIABABQgBAIgFAEQgFAEgJAAQgIAAgGgEg");
	this.shape.setTransform(51.9,-3.2,3,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgEgMIgZAAIgEAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAGIARAAIgJgcIAAAAg");
	this.shape_1.setTransform(24.7,0.6,3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGAqIAAgKIAJgCIAAg6IgWAAIAAAaQAAAWgHALQgHALgPAAIgEAAIAAgNIACAAQAIAAADgIQADgGAAgRIAAgbIgJgCIAAgKIBKAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_2.setTransform(-1.7,0.6,3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAqIAAgKIAJgCIAAg7IgJgCIAAgKIBBAAIAAAXIgNAAIgBgKIgZAAIAAAVIAbAAIAAAMIgbAAIAAAYIAZAAIABgKIANAAIAAAXg");
	this.shape_3.setTransform(-26.9,0.6,3,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAaA1IAAgVIgzAAIAAAVIgQAAIgBgjIAHAAQAEgDAEgJQADgIABgPIABgXIgIgBIAAgLIBIAAIAAALIgJABIAAA6IAKAAIgCAjgAgGgRQgBANgCAHQgCAIgFAHIAfAAIAAg5IgUAAg");
	this.shape_4.setTransform(-52,3.7,3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.9,-19.7,129.9,39.5);


(lib.Symbol53 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ArZG4IAAtvIWzAAIAANvg");
	this.shape.setTransform(0.5,-0.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 1
	this.instance = new lib.cardGlow();
	this.instance.setTransform(-83,-54);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAqIAAgPIAPAAIAAAPgAgHANIAAg2IAPAAIAAA2g");
	this.shape.setTransform(55,0,3.04,3.04);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAhQgKgJgCgQIgJAAIAAAWIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAaIAIAAQACgSAKgKQAJgMAQAAQARAAALANQAKAMAAASIAAAAQAAATgKAMQgLAMgRAAQgPABgJgLgAAAgVQgDAIAAANIAAAAQAAAPAEAHQAFAIALAAQALAAAFgIQAFgHAAgPIAAAAQAAgNgFgIQgFgIgLAAQgLAAgGAIg");
	this.shape_1.setTransform(32.3,0,3.04,3.04);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAfQgLgMAAgTIAAAAQAAgSAKgMQALgNAQAAQARAAAKANQALALAAATIAAAAQAAATgKAMQgMAMgQAAQgPAAgLgMgAgPgVQgFAJAAAMIAAAAQAAAOAFAIQAFAIAKAAQALAAAFgIQAFgIAAgOIAAAAQAAgMgFgJQgFgIgLAAQgKAAgFAIg");
	this.shape_2.setTransform(2.2,0,3.04,3.04);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAQAQAAAIAFQAIAHAAALQAAAGgDAEQgDAFgGACQAHABAFAFQADAFAAAHQAAAMgIAHQgIAGgPAAgAgIAdIANAAQAHAAAEgDQADgDAAgGQAAgGgDgEQgDgCgGAAIgPAAgAgIgGIAJAAQAIAAADgDQAEgCAAgGQAAgFgEgDQgEgDgHAAIgJAAg");
	this.shape_3.setTransform(-22.8,0,3.04,3.04);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAgQgLgNAAgSIAAgBQAAgSALgMQAMgNAPAAQAJAAAIAEQAJAEAFAGIAAARIgNAAIgCgMIgGgEQgEgCgFABQgJAAgGAIQgGAIAAANIAAABQAAANAGAIQAFAIAJAAQAFAAAFgCQAEAAACgDIACgLIANAAIAAARQgGAFgIAEQgIADgJAAQgPABgMgMg");
	this.shape_4.setTransform(-46.9,0,3.04,3.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.6,-13.3,115.3,26.8);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAglIgBAAIggAhIAAAEIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAlIAhghIAAgEIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape.setTransform(65.1,0,3.04,3.04);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiAqIAAgKIAJgCIAAg7IgJgCIAAgKIAmAAQAPAAAIAHQAJAIAAAMQAAAMgJAGQgIAHgPAAIgMAAIAAATIAIACIAAAKgAgIAAIAMAAQAGAAAFgEQADgEAAgGQAAgGgDgEQgFgEgGAAIgMAAg");
	this.shape_1.setTransform(39,0,3.04,3.04);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAqIAAgKIAJgCIAAg7IgJgCIAAgKIBBAAIAAAXIgNAAIgBgKIgZAAIAAAVIAbAAIAAAMIgbAAIAAAYIAaAAIAAgKIANAAIAAAXg");
	this.shape_2.setTransform(14.9,0,3.04,3.04);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIA/AAIAAAWIgOAAIAAgJIgXAAIAAASIANAAQAOAAAKAIQAIAFAAAMQAAAMgIAHQgJAIgPAAgAgJAdIANAAQAHAAAEgEQAEgEAAgGQAAgGgEgEQgFgEgGAAIgNAAg");
	this.shape_3.setTransform(-8.4,0,3.04,3.04);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASAqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAIAAAKIgJACIAAA7IAJACIAAAKgAg0AqIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAATIAOAAQANAAAJAIQAJAFAAAMQAAAMgJAHQgJAIgNAAgAgaAdIAOAAQAGAAAGgEQABgEAAgGQAAgGgBgEQgFgEgHAAIgOAAg");
	this.shape_4.setTransform(-37.9,0,3.04,3.04);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAQAQAAAHAFQAJAHAAALQAAAGgDAEQgDAFgGACQAIABADAFQAEAGAAAGQAAAMgIAHQgIAGgPAAgAgJAdIAOAAQAHAAADgDQAEgEAAgFQAAgGgDgEQgDgCgHAAIgPAAgAgJgGIALAAQAGAAAEgDQAEgBgBgHQABgGgEgCQgDgDgIAAIgKAAg");
	this.shape_5.setTransform(-67.3,0,3.04,3.04);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-12.9,156.7,25.9);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgEgMIgaAAIgDAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdg");
	this.shape.setTransform(65.9,0.1,2.446,2.446);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGAqIAAgKIAFAAIgOgZIgKAAIAAAYIAJABIAAAKIgjAAIAAgKIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAXIAIAAIAOgXQAEgGAFgEQADgCAIAAIAFAAIAFADIgEAMIgCgBIgBAAIgGACIgFAFIgOATIAYAgIAJABIAAAKg");
	this.shape_1.setTransform(45.1,0,2.446,2.446);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAgXIghAAIAAAXIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAZIAhAAIAAgZIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_2.setTransform(22.9,0.1,2.446,2.446);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgEgMIgZAAIgEAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdIAAAAg");
	this.shape_3.setTransform(0.9,0.1,2.446,2.446);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIA/AAIAAAVIgOAAIgBgIIgWAAIAAASIANAAQAPAAAJAIQAIAFAAAMQAAAMgJAIQgIAHgPAAgAgJAdIANAAQAHAAAEgEQAEgFAAgFQAAgGgEgEQgDgDgIAAIgNAAg");
	this.shape_4.setTransform(-19.4,0.1,2.446,2.446);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAqIAAgKIAJgCIAAg6IgPAAIgBAKIgOAAIAAgXIBLAAIAAAXIgOAAIAAgKIgQAAIAAA6IAKACIAAAKg");
	this.shape_5.setTransform(-39.2,0.1,2.446,2.446);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAqIAAgKIAKgCIACgxIgBAAIgXA9IgJAAIgXg9IgBAAIACAxIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAgAAIAUA9IAAAAIAWg9IAfAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_6.setTransform(-62.8,0.1,2.446,2.446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-10.5,151.8,21.1);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIA3IAAgLIAJgBIAAgnIAAAAIghAjIAAAEIAJABIAAALIgjAAIAAgLIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAmIABAAIAgghIAAgFIgJgBIAAgLIAjAAIAAALIgJABIAAA8IAJABIAAALgAgOgpQgFgFABgHIAAgBIALAAQAAAEACACQACACADAAQADAAACgCQADgCAAgEIALAAIAAABQAAAHgFAFQgGAFgIAAQgHAAgHgFg");
	this.shape.setTransform(111.1,-0.1,2.446,2.446);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAfQgKgMAAgTIAAAAQAAgRAKgNQALgMAQAAQARAAAKAMQALANAAARIAAAAQAAASgLANQgKAMgRAAQgQAAgLgMgAgPgVQgFAJAAAMIAAAAQAAANAFAJQAGAIAJAAQAKAAAGgIQAFgIAAgOIAAAAQAAgNgGgIQgFgIgKAAQgJAAgGAIg");
	this.shape_1.setTransform(89.2,2.9,2.446,2.446);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAqIAAgKIAJgCIAAg6IgQAAIgBAKIgMAAIAAgXIBKAAIAAAXIgOAAIgBgKIgPAAIAAA6IAJACIAAAKg");
	this.shape_2.setTransform(69.3,2.9,2.446,2.446);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIAnAAQAOAAAJAHQAJAIAAAMQAAAMgJAGQgJAHgOAAIgMAAIAAATIAIACIAAAKgAgIAAIAMAAQAHAAAEgEQADgDAAgHQAAgGgDgEQgEgEgHAAIgMAAg");
	this.shape_3.setTransform(50,2.9,2.446,2.446);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgEgMIgZAAIgEAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdIAAAAg");
	this.shape_4.setTransform(29.8,2.9,2.446,2.446);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAqIAAgKIAEAAIgOgZIgKAAIAAAYIAJABIAAAKIgjAAIAAgKIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAXIAIAAIAOgXQAFgGAEgEQADgCAHAAIAGAAIAFADIgDAMIgCgBIgDAAIgEACIgGAFIgNATIAXAgIAJABIAAAKg");
	this.shape_5.setTransform(9,2.9,2.446,2.446);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE400").s().p("AAIA3IAAgLIAJgBIAAgnIAAAAIghAjIAAAEIAJABIAAALIgjAAIAAgLIAJgBIAAg8IgJgBIAAgLIAjAAIAAALIgJABIAAAmIAAAAIAhghIAAgFIgJgBIAAgLIAjAAIAAALIgJABIAAA8IAJABIAAALgAgOgpQgFgFABgHIAAgBIALAAQAAAEACACQADACACAAQADAAADgCQABgCAAgEIAMAAIAAABQABAHgGAFQgGAFgIAAQgIAAgGgFg");
	this.shape_6.setTransform(-20.2,-0.1,2.446,2.446);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE400").s().p("AgbAfQgKgMAAgTIAAAAQAAgRAKgNQALgMAQAAQARAAAKAMQALANAAARIAAAAQAAATgLAMQgKAMgRAAQgQAAgLgMgAgPgVQgFAJAAAMIAAAAQAAANAFAJQAGAIAJAAQAKAAAGgIQAFgJAAgNIAAAAQAAgMgFgJQgGgIgKAAQgJAAgGAIg");
	this.shape_7.setTransform(-42.2,2.9,2.446,2.446);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE400").s().p("AgjAqIAAgKIAJgCIAAg7IgJgCIAAgKIA/AAIAAAVIgOAAIAAgIIgXAAIAAASIANAAQAPAAAIAIQAJAFAAAMQAAAMgJAIQgIAHgPAAgAgJAdIANAAQAGAAAFgEQAEgEAAgGQAAgGgEgEQgDgDgIAAIgNAAg");
	this.shape_8.setTransform(-62.4,2.9,2.446,2.446);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE400").s().p("AgHAiQgLgLgCgPIgIAAIAAAWIAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIAjAAIAAAKIgJACIAAAaIAIAAQABgRALgLQAIgLAQAAQASAAALAMQAKANAAARIAAAAQAAATgKAMQgLAMgRAAQgQAAgIgJgAAAgVQgDAIAAANIAAAAQAAAOADAIQAGAIALAAQAKAAAGgIQAFgJAAgNIAAAAQAAgMgFgJQgFgIgMAAQgLAAgFAIg");
	this.shape_9.setTransform(-86.7,2.9,2.446,2.446);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE400").s().p("AAGAqIAAgKIAJgCIAAg6IgWAAIAAAaQgBAXgHAKQgGALgPAAIgEAAIAAgNIACAAQAIAAADgHQACgJAAgPIABgbIgJgCIAAgKIBKAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_10.setTransform(-111.5,2.9,2.446,2.446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.7,-13.6,243.5,27.3);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE400").s().p("AggAqIAAgKIAJgCIAAg7IgJgCIAAgKIBBAAIAAAXIgNAAIgBgKIgZAAIAAAVIAbAAIAAAMIgbAAIAAAYIAZAAIABgKIANAAIAAAXg");
	this.shape.setTransform(95.9,-2.4,2.446,2.446);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE400").s().p("AAaA1IAAgVIgzAAIAAAVIgQAAIgBgiIAHAAQAEgEAEgJQADgIABgPIABgXIgIgBIAAgLIBIAAIAAALIgJABIAAA7IAKAAIgCAigAgGgRQgBANgCAHQgCAHgFAJIAfAAIAAg5IgUAAg");
	this.shape_1.setTransform(75.5,0.1,2.446,2.446);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE400").s().p("AgVAlQgKgGABgMIAAgBIAQAAQAAAGAEADQAEADAGAAQAGAAAEgDQAEgDAAgGQAAgHgDgDQgEgDgHAAIgJAAIAAgLIAJAAQAHAAADgDQADgDAAgGQAAgFgEgDQgDgDgGAAQgFAAgEABIgGAEIgCALIgNAAIAAgQQAEgGAJgEQAHgDAKAAQAOAAAIAGQAIAHAAALQAAAGgDAFQgEAEgGADQAHABAEAFQAEAFAAAHQAAAMgKAHQgIAGgOAAQgMAAgJgGg");
	this.shape_2.setTransform(55.5,-2.4,2.446,2.446);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE400").s().p("AggAqIAAgKIAJgCIAAg7IgJgCIAAgKIBBAAIAAAXIgNAAIgBgKIgZAAIAAAVIAbAAIAAAMIgbAAIAAAYIAaAAIAAgKIANAAIAAAXg");
	this.shape_3.setTransform(37.1,-2.4,2.446,2.446);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE400").s().p("AgjAqIAAgKIAKgCIAAg7IgKgCIAAgKIAkAAQAPAAAJAGQAIAGAAALQAAAGgDAFQgDAFgGACQAGAAAGAFQADAFAAAHQAAANgIAGQgIAGgPAAgAgIAdIANAAQAHAAAEgDQADgDAAgGQAAgGgDgDQgEgEgFAAIgPAAgAgIgFIAJAAQAIAAADgDQAEgDAAgFQAAgGgEgDQgDgDgIAAIgJAAg");
	this.shape_4.setTransform(18.3,-2.4,2.446,2.446);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAgkIAAgBIghAhIAAAEIAKACIAAAKIgkAAIAAgKIAJgCIAAg7IgJgCIAAgKIAkAAIAAAKIgKACIAAAlIABABIAgghIAAgFIgJgCIAAgKIAjAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_5.setTransform(-10,-2.4,2.446,2.446);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIAAgKIAJgCIAAg6IgQAAIgBAKIgMAAIAAgXIBJAAIAAAXIgMAAIgBgKIgQAAIAAA6IAKACIAAAKg");
	this.shape_6.setTransform(-31.5,-2.4,2.446,2.446);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAqIAAgKIAGgBIgDgMIgaAAIgEAMIAGABIAAAKIgdAAIAAgKIAGgBIAahIIAPAAIAaBIIAGABIAAAKgAgIAHIARAAIgJgdg");
	this.shape_7.setTransform(-49.7,-2.4,2.446,2.446);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAGAqIAAgKIAJgCIAAg6IgWAAIgBAaQAAAWgGALQgHALgPAAIgEAAIAAgNIACAAQAJAAABgHQADgIAAgQIABgbIgJgCIAAgKIBKAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_8.setTransform(-71.2,-2.4,2.446,2.446);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIAqIAAgKIAJgCIAAg6IghAAIAAA6IAJACIAAAKIgjAAIAAgKIAJgCIAAg7IgJgCIAAgKIBVAAIAAAKIgJACIAAA7IAJACIAAAKg");
	this.shape_9.setTransform(-93.5,-2.4,2.446,2.446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.1,-13.1,208.3,26.3);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FDFB55","#FCE23C","#F7A700","#DE4726"],[0.161,0.275,0.525,1],-1,1.1,0,-1,1.1,5.4).s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4D054A","rgba(114,32,111,0)"],[0.671,1],0,0,0,0,0,5.6).s().p("AgpAqQgRgSgBgYQABgXARgSQASgRAXgBQAYABASARQASASAAAXQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_1.setTransform(1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,12.3,12.3);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cardsShadow();
	this.instance.setTransform(-120,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-92,240,185);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bingo();
	this.instance.setTransform(-109,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-45,230,111);


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(252,252,252,0.698)").s().p("AxLAFIAAgIMAiWAAAIAAAIg");
	this.shape.setTransform(110,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,220,1);


(lib.Symbol1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9D2FE1").s().p("ACFj5IAAEqIkJDJg");
	this.shape.setTransform(-9.9,-7.2,0.75,0.712,-180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D24D0").s().p("AiEgwIEJjJIAAEqIkJDJg");
	this.shape_1.setTransform(-10,-7.2,0.75,0.712,-180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8111CB").s().p("AiEAxIAAkqIEJDJIAAEqg");
	this.shape_2.setTransform(10,-7.2,0.75,0.712,-180);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#952BD7").s().p("AjGBqIAAjUIDGiPIDHCPIAADUIjHCQg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-25,40,50);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AfPMAAAg+dMBj/AAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B0E77").s().p("Ak2DPIHgjOIAAgBIngjOIAAiJIJtEdIAAB1IptEeg");
	this.shape.setTransform(70.5,0,0.17,0.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B0E77").s().p("AjXFSIAAqjIGhAAIAAB+IkHAAIAACMID4AAIAAB7Ij4AAIAAChIEUAAIAAB9g");
	this.shape_1.setTransform(52.5,0,0.17,0.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B0E77").s().p("AmHFSIAAqjICXAAIAAImICnAAIAAomICTAAIAAImICoAAIAAomICWAAIAAKjg");
	this.shape_2.setTransform(40,0,0.17,0.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5B0E77").s().p("Aj7FMIAAqhICZAAIAADrQA2gEAcAAQBzAABJA1QBQA5AABrQAABbg3A6QgtAthSAWQhEAShXAAQhiABhEgKgAhjAJIAADWQAXAEAiAAQA5AAAkgcQAogeAAg2QAAg3gngdQgjgag5AAQgUAAgnAEg");
	this.shape_3.setTransform(27.3,0,0.17,0.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B0E77").s().p("AkjDbQAxgGAdgeQAcgdAMg/QAKg1AAhTIAAkpIHHAAIAAKjIiZAAIAAolIiYAAIAACgQAACPgYBSQgdBjhHAqQg8AhhLAAg");
	this.shape_4.setTransform(15.7,0.1,0.17,0.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B0E77").s().p("AjwD5QhUhgAAiUQAAiZBahjQBchlCSAAQCWAABYBlQBTBfAACSQAACkhcBgQhbBfiUAAQiTAAhXhkgAh3ihQgsA/ABBjQgBBlAtA+QAtBABJAAQBMAAAthCQAqg/AAhjQAAhggqg/QgthDhMAAQhLAAgsBBg");
	this.shape_5.setTransform(5,0,0.17,0.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B0E77").s().p("Aj7FMIAAqhIHBAAIAAB9IkoAAIAAB1QAngFAsgBQAzAAAwAOQA0AOAlAcQBPA2AABpQAABfhAA6QguAphOAUQhBARhVAAQhgABhFgKgAhjALIAADUQAXAEAkAAQAdAAAYgJQAagJATgRQAhgeAAgwQAAgxgkgcQgngeg9AAQgcAAgaAEg");
	this.shape_6.setTransform(-6,0,0.17,0.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B0E77").s().p("Aj7FMIAAqhICZAAIAADrQA0gEAeAAQBzAABJA1QBQA5AABrQAABag3A7QgtAthSAWQhFAShWAAQhiABhEgKgAhjAJIAADWQAWAEAjAAQA5AAAkgcQAogeAAg2QAAg3gngdQgjgag5AAQgVAAgmAEg");
	this.shape_7.setTransform(-19.7,0,0.17,0.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B0E77").s().p("AhNFSIAAoiIi2AAIAAiBIIHAAIAACBIi5AAIAAIig");
	this.shape_8.setTransform(-29.8,0,0.17,0.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5B0E77").s().p("ACQFSIg1itIjAAAIgwCtIieAAIDOqjIDHAAIDSKjgAgWidQgKArgGAWIgoCOICTAAIgqiOQgLglgVheIgCAAIgPBCg");
	this.shape_9.setTransform(-39,0,0.17,0.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B0E77").s().p("AB+FSIAAkbIj6AAIAAEbIiaAAIAAqjICaAAIAAEEID6AAIAAkEICZAAIAAKjg");
	this.shape_10.setTransform(-50.5,0,0.17,0.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B0E77").s().p("AiQFSQg3gNgpgXIAgh1QAcAOAqAMQAzAOArgBQA5AAAggWQAigYAAgqQAAgzgvgWQghgRg8AAIhAAAIAAhvIA/AAQA2AAAfgXQAjgXAAgnQAAgigbgUQgbgVgvAAQhEABhQAoIgkhuQBag2B4AAQBrAABBAyQA/AvgBBNQABA9gnArQgkAog9APIAAADQBDAIAsAoQAwAsgBBCQABBohcA2QhNAthtAAQg2AAg1gLg");
	this.shape_11.setTransform(-61,0,0.17,0.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B0E77").s().p("AjZFMIALh6QAUAFAeAAQAhAAAagUQAWgRAKgaQAEgIgBgIQAAgGgFgJIjknQICtAAIBiDvIAuB/IADAAQAUhIARg6IBJjsIChAAIh/FJQgmBggZA1QgkBNgiArQhFBYhtABQgtAAgegMg");
	this.shape_12.setTransform(-70.8,0.1,0.17,0.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B0E77").s().p("Eg/BAVZQkWAAj/hsQj1hni/i+Qi9i+hoj2Qhsj+AAkWQAAkUBskAQBoj1C9i+QC/i9D1hoQD/htEWAAMB+DAAAQEWAAD/BtQD1BoC/C9QC9C+BoD1QBsD/AAEVQAAEWhsD+QhoD2i9C+Qi/C+j1BnQj/BskWAAgEhGTgRQQjYBbimCnQimClhbDYQhfDfAADyQAADzBfDfQBbDYCmClQCmCnDYBbQDeBfD0AAMB+DAAAQD0AADehfQDYhbCminQCmilBbjYQBfjfAAjzQAAjyhfjfQhbjYimilQiminjYhbQjehej0AAMh+DAAAQj0AAjeBeg");
	this.shape_13.setTransform(0,0,0.17,0.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Eg/BAUFQkEAAjvhmQjmhhiyizQiziyhijmQhljvAAkEQAAkDBljuQBijmCzizQCyiyDmhiQDvhlEEgBMB+DAAAQEEABDvBlQDmBiCyCyQCyCzBjDmQBlDuAAEDQAAEEhlDvQhjDmiyCyQiyCzjmBhQjvBmkEAAg");
	this.shape_14.setTransform(0,0,0.17,0.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-23.3,183.8,46.6);


(lib.cursor = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// hand cursors
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFCFC").s().p("AgiCPQgDgYgOgaIgxhZQgCgDAAgCQAAgHAHgEQACgCAEAAQAIAAAEAGIAkA1IAAiuQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEAEAAAFIAAB3IAOAAIAAgnQAAgGACgEQADgEAGAAQAFAAAEAEQAEAEAAAGIAAAnIAOAAIAAgbQAAgEAEgFQAEgDAFAAQAFAAAEADQAEAEAAAFIAAAnIAOAAIAAgWQAAgFAEgEQAEgEAFAAQAFAAAEAEQAEADAAAGIAABGQAAARgMAdQgNAggCAPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-14.3,20.7,28.7);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t2 = new lib.Symbol52();
	this.t2.setTransform(84.9,0);

	this.t1 = new lib.Symbol51();
	this.t1.setTransform(-64,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.4,-13.3,284.9,26.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol44();
	this.t3.setTransform(0.1,29.8);

	this.t2 = new lib.Symbol43();
	this.t2.setTransform(0,-8.2);

	this.t1 = new lib.Symbol42();
	this.t1.setTransform(-0.2,-38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.7,-51.2,243.5,91.6);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAAgdQhLAAhEAdQhGAbg2A2IgrgrQA+g8BRgiQBQghBXAAQBYAABRAhQBQAiA+A8IgqArQhwhuidAAg");
	mask.setTransform(0,-9);

	// Layer 1
	this.w3 = new lib.Symbol60();
	this.w3.setTransform(-0.7,-0.9);

	this.w3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.w3).wait(1));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAAgEQhiABhGBEIgrgsQBahUB5AAQB6AABaBUIgqAsQhIhEhigBg");
	mask_1.setTransform(0,2.5);

	// Layer 1 copy
	this.w2 = new lib.Symbol60();
	this.w2.setTransform(-0.7,-0.9);

	this.w2.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.w2).wait(1));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AAAA6QgrAAgiAgIgqgqQAygwBFAAQBEAAA0AwIgrAqQgigggrAAg");
	mask_2.setTransform(0.1,9.1);

	// Layer 1 copy 2
	this.w1 = new lib.Symbol60();
	this.w1.setTransform(-0.7,-0.9);

	this.w1.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.w1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-18.1,62.2,36.2);


(lib.Symbol54copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t3 = new lib.Symbol66();
	this.t3.setTransform(121.9,26.6);

	this.t2 = new lib.Symbol65();
	this.t2.setTransform(-77.2,21.8);

	this.t1 = new lib.Symbol64();
	this.t1.setTransform(0.1,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-47.3,385.8,94.7);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.t2 = new lib.Symbol56();
	this.t2.setTransform(0,25);

	this.t1 = new lib.Symbol55();
	this.t1.setTransform(-0.1,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.1,-37.7,184.2,75.9);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card5();
	this.instance.setTransform(-76,-48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.btn = new lib.Symbol53();
	this.btn.setTransform(-0.4,0.1,1.04,1.089);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-58.7,172.6,117.7);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card4();
	this.instance.setTransform(-70,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.btn = new lib.Symbol53();
	this.btn.setTransform(-0.4,0.1,0.93,1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-53.9,154.4,108);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card3();
	this.instance.setTransform(-71,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.btn = new lib.Symbol53();
	this.btn.setTransform(-0.4,0.1,0.985,1.044);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-56.3,163.5,112.8);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card2();
	this.instance.setTransform(-70,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.btn = new lib.Symbol53();
	this.btn.setTransform(-0.5,0.1,0.93,0.965);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.7,-52,154.4,104.2);


(lib.Symbol46 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.card1();
	this.instance.setTransform(-74,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.btn = new lib.Symbol53();
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.Symbol53(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-54,166,108);


(lib.Symbol25 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mc1
	this.mc1 = new lib.Symbol26();
	this.mc1.setTransform(0,-22,1,1,0,0,0,0,-22);

	this.timeline.addTween(cjs.Tween.get(this.mc1).wait(1));

	// c1
	this.c1 = new lib.Symbol46();
	this.c1.setTransform(69.1,-66.3,0.869,0.869,-67.7);

	this.timeline.addTween(cjs.Tween.get(this.c1).wait(1));

	// c2
	this.c2 = new lib.Symbol47();
	this.c2.setTransform(33,-84.1,0.88,0.88,-81);

	this.timeline.addTween(cjs.Tween.get(this.c2).wait(1));

	// c3
	this.c3 = new lib.Symbol48();
	this.c3.setTransform(-3.5,-92.4,0.83,0.83,-90);

	this.timeline.addTween(cjs.Tween.get(this.c3).wait(1));

	// c4
	this.c4 = new lib.Symbol49();
	this.c4.setTransform(-43.4,-87.8,0.85,0.85,-99);

	this.timeline.addTween(cjs.Tween.get(this.c4).wait(1));

	// c5
	this.c5 = new lib.Symbol50();
	this.c5.setTransform(-68.9,-71.8,0.829,0.829,-108.6);

	this.timeline.addTween(cjs.Tween.get(this.c5).wait(1));

	// Layer 3
	this.sh = new lib.Symbol32();
	this.sh.setTransform(7,-66,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.sh).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.7,-162.6,308.8,228.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(2040,270);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(2000,270);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(1960,270);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(1920,270);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(1880,270);

	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(1840,270);

	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(1800,270);

	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(1760,270);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(1720,270);

	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(1680,270);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(1640,270);

	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(1600,270);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(1560,270);

	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(1520,270);

	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(1480,270);

	this.instance_15 = new lib.Symbol1();
	this.instance_15.setTransform(1440,270);

	this.instance_16 = new lib.Symbol1();
	this.instance_16.setTransform(1400,270);

	this.instance_17 = new lib.Symbol1();
	this.instance_17.setTransform(1360,270);

	this.instance_18 = new lib.Symbol1();
	this.instance_18.setTransform(1320,270);

	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(1280,270);

	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(1240,270);

	this.instance_21 = new lib.Symbol1();
	this.instance_21.setTransform(1200,270);

	this.instance_22 = new lib.Symbol1();
	this.instance_22.setTransform(1160,270);

	this.instance_23 = new lib.Symbol1();
	this.instance_23.setTransform(1120,270);

	this.instance_24 = new lib.Symbol1();
	this.instance_24.setTransform(1080,270);

	this.instance_25 = new lib.Symbol1();
	this.instance_25.setTransform(1040,270);

	this.instance_26 = new lib.Symbol1();
	this.instance_26.setTransform(1000,270);

	this.instance_27 = new lib.Symbol1();
	this.instance_27.setTransform(960,270);

	this.instance_28 = new lib.Symbol1();
	this.instance_28.setTransform(920,270);

	this.instance_29 = new lib.Symbol1();
	this.instance_29.setTransform(880,270);

	this.instance_30 = new lib.Symbol1();
	this.instance_30.setTransform(840,270);

	this.instance_31 = new lib.Symbol1();
	this.instance_31.setTransform(800,270);

	this.instance_32 = new lib.Symbol1();
	this.instance_32.setTransform(760,270);

	this.instance_33 = new lib.Symbol1();
	this.instance_33.setTransform(720,270);

	this.instance_34 = new lib.Symbol1();
	this.instance_34.setTransform(680,270);

	this.instance_35 = new lib.Symbol1();
	this.instance_35.setTransform(640,270);

	this.instance_36 = new lib.Symbol1();
	this.instance_36.setTransform(600,270);

	this.instance_37 = new lib.Symbol1();
	this.instance_37.setTransform(560,270);

	this.instance_38 = new lib.Symbol1();
	this.instance_38.setTransform(520,270);

	this.instance_39 = new lib.Symbol1();
	this.instance_39.setTransform(480,270);

	this.instance_40 = new lib.Symbol1();
	this.instance_40.setTransform(440,270);

	this.instance_41 = new lib.Symbol1();
	this.instance_41.setTransform(400,270);

	this.instance_42 = new lib.Symbol1();
	this.instance_42.setTransform(360,270);

	this.instance_43 = new lib.Symbol1();
	this.instance_43.setTransform(320,270);

	this.instance_44 = new lib.Symbol1();
	this.instance_44.setTransform(280,270);

	this.instance_45 = new lib.Symbol1();
	this.instance_45.setTransform(240,270);

	this.instance_46 = new lib.Symbol1();
	this.instance_46.setTransform(200,270);

	this.instance_47 = new lib.Symbol1();
	this.instance_47.setTransform(160,270);

	this.instance_48 = new lib.Symbol1();
	this.instance_48.setTransform(120,270);

	this.instance_49 = new lib.Symbol1();
	this.instance_49.setTransform(80,270);

	this.instance_50 = new lib.Symbol1();
	this.instance_50.setTransform(40,270);

	this.instance_51 = new lib.Symbol1();
	this.instance_51.setTransform(2020,235);

	this.instance_52 = new lib.Symbol1();
	this.instance_52.setTransform(1980,235);

	this.instance_53 = new lib.Symbol1();
	this.instance_53.setTransform(1940,235);

	this.instance_54 = new lib.Symbol1();
	this.instance_54.setTransform(1900,235);

	this.instance_55 = new lib.Symbol1();
	this.instance_55.setTransform(1860,235);

	this.instance_56 = new lib.Symbol1();
	this.instance_56.setTransform(1820,235);

	this.instance_57 = new lib.Symbol1();
	this.instance_57.setTransform(1780,235);

	this.instance_58 = new lib.Symbol1();
	this.instance_58.setTransform(1740,235);

	this.instance_59 = new lib.Symbol1();
	this.instance_59.setTransform(1700,235);

	this.instance_60 = new lib.Symbol1();
	this.instance_60.setTransform(1660,235);

	this.instance_61 = new lib.Symbol1();
	this.instance_61.setTransform(1620,235);

	this.instance_62 = new lib.Symbol1();
	this.instance_62.setTransform(1580,235);

	this.instance_63 = new lib.Symbol1();
	this.instance_63.setTransform(1540,235);

	this.instance_64 = new lib.Symbol1();
	this.instance_64.setTransform(1500,235);

	this.instance_65 = new lib.Symbol1();
	this.instance_65.setTransform(1460,235);

	this.instance_66 = new lib.Symbol1();
	this.instance_66.setTransform(1420,235);

	this.instance_67 = new lib.Symbol1();
	this.instance_67.setTransform(1380,235);

	this.instance_68 = new lib.Symbol1();
	this.instance_68.setTransform(1340,235);

	this.instance_69 = new lib.Symbol1();
	this.instance_69.setTransform(1300,235);

	this.instance_70 = new lib.Symbol1();
	this.instance_70.setTransform(1260,235);

	this.instance_71 = new lib.Symbol1();
	this.instance_71.setTransform(1220,235);

	this.instance_72 = new lib.Symbol1();
	this.instance_72.setTransform(1180,235);

	this.instance_73 = new lib.Symbol1();
	this.instance_73.setTransform(1140,235);

	this.instance_74 = new lib.Symbol1();
	this.instance_74.setTransform(1100,235);

	this.instance_75 = new lib.Symbol1();
	this.instance_75.setTransform(1060,235);

	this.instance_76 = new lib.Symbol1();
	this.instance_76.setTransform(1020,235);

	this.instance_77 = new lib.Symbol1();
	this.instance_77.setTransform(980,235);

	this.instance_78 = new lib.Symbol1();
	this.instance_78.setTransform(940,235);

	this.instance_79 = new lib.Symbol1();
	this.instance_79.setTransform(900,235);

	this.instance_80 = new lib.Symbol1();
	this.instance_80.setTransform(860,235);

	this.instance_81 = new lib.Symbol1();
	this.instance_81.setTransform(820,235);

	this.instance_82 = new lib.Symbol1();
	this.instance_82.setTransform(780,235);

	this.instance_83 = new lib.Symbol1();
	this.instance_83.setTransform(740,235);

	this.instance_84 = new lib.Symbol1();
	this.instance_84.setTransform(700,235);

	this.instance_85 = new lib.Symbol1();
	this.instance_85.setTransform(660,235);

	this.instance_86 = new lib.Symbol1();
	this.instance_86.setTransform(620,235);

	this.instance_87 = new lib.Symbol1();
	this.instance_87.setTransform(580,235);

	this.instance_88 = new lib.Symbol1();
	this.instance_88.setTransform(540,235);

	this.instance_89 = new lib.Symbol1();
	this.instance_89.setTransform(500,235);

	this.instance_90 = new lib.Symbol1();
	this.instance_90.setTransform(460,235);

	this.instance_91 = new lib.Symbol1();
	this.instance_91.setTransform(420,235);

	this.instance_92 = new lib.Symbol1();
	this.instance_92.setTransform(380,235);

	this.instance_93 = new lib.Symbol1();
	this.instance_93.setTransform(340,235);

	this.instance_94 = new lib.Symbol1();
	this.instance_94.setTransform(300,235);

	this.instance_95 = new lib.Symbol1();
	this.instance_95.setTransform(260,235);

	this.instance_96 = new lib.Symbol1();
	this.instance_96.setTransform(220,235);

	this.instance_97 = new lib.Symbol1();
	this.instance_97.setTransform(180,235);

	this.instance_98 = new lib.Symbol1();
	this.instance_98.setTransform(140,235);

	this.instance_99 = new lib.Symbol1();
	this.instance_99.setTransform(100,235);

	this.instance_100 = new lib.Symbol1();
	this.instance_100.setTransform(60,235);

	this.instance_101 = new lib.Symbol1();
	this.instance_101.setTransform(20,235);

	this.instance_102 = new lib.Symbol1();
	this.instance_102.setTransform(2040,200);

	this.instance_103 = new lib.Symbol1();
	this.instance_103.setTransform(2000,200);

	this.instance_104 = new lib.Symbol1();
	this.instance_104.setTransform(1960,200);

	this.instance_105 = new lib.Symbol1();
	this.instance_105.setTransform(1920,200);

	this.instance_106 = new lib.Symbol1();
	this.instance_106.setTransform(1880,200);

	this.instance_107 = new lib.Symbol1();
	this.instance_107.setTransform(1840,200);

	this.instance_108 = new lib.Symbol1();
	this.instance_108.setTransform(1800,200);

	this.instance_109 = new lib.Symbol1();
	this.instance_109.setTransform(1760,200);

	this.instance_110 = new lib.Symbol1();
	this.instance_110.setTransform(1720,200);

	this.instance_111 = new lib.Symbol1();
	this.instance_111.setTransform(1680,200);

	this.instance_112 = new lib.Symbol1();
	this.instance_112.setTransform(1640,200);

	this.instance_113 = new lib.Symbol1();
	this.instance_113.setTransform(1600,200);

	this.instance_114 = new lib.Symbol1();
	this.instance_114.setTransform(1560,200);

	this.instance_115 = new lib.Symbol1();
	this.instance_115.setTransform(1520,200);

	this.instance_116 = new lib.Symbol1();
	this.instance_116.setTransform(1480,200);

	this.instance_117 = new lib.Symbol1();
	this.instance_117.setTransform(1440,200);

	this.instance_118 = new lib.Symbol1();
	this.instance_118.setTransform(1400,200);

	this.instance_119 = new lib.Symbol1();
	this.instance_119.setTransform(1360,200);

	this.instance_120 = new lib.Symbol1();
	this.instance_120.setTransform(1320,200);

	this.instance_121 = new lib.Symbol1();
	this.instance_121.setTransform(1280,200);

	this.instance_122 = new lib.Symbol1();
	this.instance_122.setTransform(1240,200);

	this.instance_123 = new lib.Symbol1();
	this.instance_123.setTransform(1200,200);

	this.instance_124 = new lib.Symbol1();
	this.instance_124.setTransform(1160,200);

	this.instance_125 = new lib.Symbol1();
	this.instance_125.setTransform(1120,200);

	this.instance_126 = new lib.Symbol1();
	this.instance_126.setTransform(1080,200);

	this.instance_127 = new lib.Symbol1();
	this.instance_127.setTransform(1040,200);

	this.instance_128 = new lib.Symbol1();
	this.instance_128.setTransform(1000,200);

	this.instance_129 = new lib.Symbol1();
	this.instance_129.setTransform(960,200);

	this.instance_130 = new lib.Symbol1();
	this.instance_130.setTransform(920,200);

	this.instance_131 = new lib.Symbol1();
	this.instance_131.setTransform(880,200);

	this.instance_132 = new lib.Symbol1();
	this.instance_132.setTransform(840,200);

	this.instance_133 = new lib.Symbol1();
	this.instance_133.setTransform(800,200);

	this.instance_134 = new lib.Symbol1();
	this.instance_134.setTransform(760,200);

	this.instance_135 = new lib.Symbol1();
	this.instance_135.setTransform(720,200);

	this.instance_136 = new lib.Symbol1();
	this.instance_136.setTransform(680,200);

	this.instance_137 = new lib.Symbol1();
	this.instance_137.setTransform(640,200);

	this.instance_138 = new lib.Symbol1();
	this.instance_138.setTransform(600,200);

	this.instance_139 = new lib.Symbol1();
	this.instance_139.setTransform(560,200);

	this.instance_140 = new lib.Symbol1();
	this.instance_140.setTransform(520,200);

	this.instance_141 = new lib.Symbol1();
	this.instance_141.setTransform(480,200);

	this.instance_142 = new lib.Symbol1();
	this.instance_142.setTransform(440,200);

	this.instance_143 = new lib.Symbol1();
	this.instance_143.setTransform(400,200);

	this.instance_144 = new lib.Symbol1();
	this.instance_144.setTransform(360,200);

	this.instance_145 = new lib.Symbol1();
	this.instance_145.setTransform(320,200);

	this.instance_146 = new lib.Symbol1();
	this.instance_146.setTransform(280,200);

	this.instance_147 = new lib.Symbol1();
	this.instance_147.setTransform(240,200);

	this.instance_148 = new lib.Symbol1();
	this.instance_148.setTransform(200,200);

	this.instance_149 = new lib.Symbol1();
	this.instance_149.setTransform(160,200);

	this.instance_150 = new lib.Symbol1();
	this.instance_150.setTransform(120,200);

	this.instance_151 = new lib.Symbol1();
	this.instance_151.setTransform(80,200);

	this.instance_152 = new lib.Symbol1();
	this.instance_152.setTransform(40,200);

	this.instance_153 = new lib.Symbol1();
	this.instance_153.setTransform(2020,165);

	this.instance_154 = new lib.Symbol1();
	this.instance_154.setTransform(1980,165);

	this.instance_155 = new lib.Symbol1();
	this.instance_155.setTransform(1940,165);

	this.instance_156 = new lib.Symbol1();
	this.instance_156.setTransform(1900,165);

	this.instance_157 = new lib.Symbol1();
	this.instance_157.setTransform(1860,165);

	this.instance_158 = new lib.Symbol1();
	this.instance_158.setTransform(1820,165);

	this.instance_159 = new lib.Symbol1();
	this.instance_159.setTransform(1780,165);

	this.instance_160 = new lib.Symbol1();
	this.instance_160.setTransform(1740,165);

	this.instance_161 = new lib.Symbol1();
	this.instance_161.setTransform(1700,165);

	this.instance_162 = new lib.Symbol1();
	this.instance_162.setTransform(1660,165);

	this.instance_163 = new lib.Symbol1();
	this.instance_163.setTransform(1620,165);

	this.instance_164 = new lib.Symbol1();
	this.instance_164.setTransform(1580,165);

	this.instance_165 = new lib.Symbol1();
	this.instance_165.setTransform(1540,165);

	this.instance_166 = new lib.Symbol1();
	this.instance_166.setTransform(1500,165);

	this.instance_167 = new lib.Symbol1();
	this.instance_167.setTransform(1460,165);

	this.instance_168 = new lib.Symbol1();
	this.instance_168.setTransform(1420,165);

	this.instance_169 = new lib.Symbol1();
	this.instance_169.setTransform(1380,165);

	this.instance_170 = new lib.Symbol1();
	this.instance_170.setTransform(1340,165);

	this.instance_171 = new lib.Symbol1();
	this.instance_171.setTransform(1300,165);

	this.instance_172 = new lib.Symbol1();
	this.instance_172.setTransform(1260,165);

	this.instance_173 = new lib.Symbol1();
	this.instance_173.setTransform(1220,165);

	this.instance_174 = new lib.Symbol1();
	this.instance_174.setTransform(1180,165);

	this.instance_175 = new lib.Symbol1();
	this.instance_175.setTransform(1140,165);

	this.instance_176 = new lib.Symbol1();
	this.instance_176.setTransform(1100,165);

	this.instance_177 = new lib.Symbol1();
	this.instance_177.setTransform(1060,165);

	this.instance_178 = new lib.Symbol1();
	this.instance_178.setTransform(1020,165);

	this.instance_179 = new lib.Symbol1();
	this.instance_179.setTransform(980,165);

	this.instance_180 = new lib.Symbol1();
	this.instance_180.setTransform(940,165);

	this.instance_181 = new lib.Symbol1();
	this.instance_181.setTransform(900,165);

	this.instance_182 = new lib.Symbol1();
	this.instance_182.setTransform(860,165);

	this.instance_183 = new lib.Symbol1();
	this.instance_183.setTransform(820,165);

	this.instance_184 = new lib.Symbol1();
	this.instance_184.setTransform(780,165);

	this.instance_185 = new lib.Symbol1();
	this.instance_185.setTransform(740,165);

	this.instance_186 = new lib.Symbol1();
	this.instance_186.setTransform(700,165);

	this.instance_187 = new lib.Symbol1();
	this.instance_187.setTransform(660,165);

	this.instance_188 = new lib.Symbol1();
	this.instance_188.setTransform(620,165);

	this.instance_189 = new lib.Symbol1();
	this.instance_189.setTransform(580,165);

	this.instance_190 = new lib.Symbol1();
	this.instance_190.setTransform(540,165);

	this.instance_191 = new lib.Symbol1();
	this.instance_191.setTransform(500,165);

	this.instance_192 = new lib.Symbol1();
	this.instance_192.setTransform(460,165);

	this.instance_193 = new lib.Symbol1();
	this.instance_193.setTransform(420,165);

	this.instance_194 = new lib.Symbol1();
	this.instance_194.setTransform(380,165);

	this.instance_195 = new lib.Symbol1();
	this.instance_195.setTransform(340,165);

	this.instance_196 = new lib.Symbol1();
	this.instance_196.setTransform(300,165);

	this.instance_197 = new lib.Symbol1();
	this.instance_197.setTransform(260,165);

	this.instance_198 = new lib.Symbol1();
	this.instance_198.setTransform(220,165);

	this.instance_199 = new lib.Symbol1();
	this.instance_199.setTransform(180,165);

	this.instance_200 = new lib.Symbol1();
	this.instance_200.setTransform(140,165);

	this.instance_201 = new lib.Symbol1();
	this.instance_201.setTransform(100,165);

	this.instance_202 = new lib.Symbol1();
	this.instance_202.setTransform(60,165);

	this.instance_203 = new lib.Symbol1();
	this.instance_203.setTransform(20,165);

	this.instance_204 = new lib.Symbol1();
	this.instance_204.setTransform(2040,130);

	this.instance_205 = new lib.Symbol1();
	this.instance_205.setTransform(2000,130);

	this.instance_206 = new lib.Symbol1();
	this.instance_206.setTransform(1960,130);

	this.instance_207 = new lib.Symbol1();
	this.instance_207.setTransform(1920,130);

	this.instance_208 = new lib.Symbol1();
	this.instance_208.setTransform(1880,130);

	this.instance_209 = new lib.Symbol1();
	this.instance_209.setTransform(1840,130);

	this.instance_210 = new lib.Symbol1();
	this.instance_210.setTransform(1800,130);

	this.instance_211 = new lib.Symbol1();
	this.instance_211.setTransform(1760,130);

	this.instance_212 = new lib.Symbol1();
	this.instance_212.setTransform(1720,130);

	this.instance_213 = new lib.Symbol1();
	this.instance_213.setTransform(1680,130);

	this.instance_214 = new lib.Symbol1();
	this.instance_214.setTransform(1640,130);

	this.instance_215 = new lib.Symbol1();
	this.instance_215.setTransform(1600,130);

	this.instance_216 = new lib.Symbol1();
	this.instance_216.setTransform(1560,130);

	this.instance_217 = new lib.Symbol1();
	this.instance_217.setTransform(1520,130);

	this.instance_218 = new lib.Symbol1();
	this.instance_218.setTransform(1480,130);

	this.instance_219 = new lib.Symbol1();
	this.instance_219.setTransform(1440,130);

	this.instance_220 = new lib.Symbol1();
	this.instance_220.setTransform(1400,130);

	this.instance_221 = new lib.Symbol1();
	this.instance_221.setTransform(1360,130);

	this.instance_222 = new lib.Symbol1();
	this.instance_222.setTransform(1320,130);

	this.instance_223 = new lib.Symbol1();
	this.instance_223.setTransform(1280,130);

	this.instance_224 = new lib.Symbol1();
	this.instance_224.setTransform(1240,130);

	this.instance_225 = new lib.Symbol1();
	this.instance_225.setTransform(1200,130);

	this.instance_226 = new lib.Symbol1();
	this.instance_226.setTransform(1160,130);

	this.instance_227 = new lib.Symbol1();
	this.instance_227.setTransform(1120,130);

	this.instance_228 = new lib.Symbol1();
	this.instance_228.setTransform(1080,130);

	this.instance_229 = new lib.Symbol1();
	this.instance_229.setTransform(1040,130);

	this.instance_230 = new lib.Symbol1();
	this.instance_230.setTransform(1000,130);

	this.instance_231 = new lib.Symbol1();
	this.instance_231.setTransform(960,130);

	this.instance_232 = new lib.Symbol1();
	this.instance_232.setTransform(920,130);

	this.instance_233 = new lib.Symbol1();
	this.instance_233.setTransform(880,130);

	this.instance_234 = new lib.Symbol1();
	this.instance_234.setTransform(840,130);

	this.instance_235 = new lib.Symbol1();
	this.instance_235.setTransform(800,130);

	this.instance_236 = new lib.Symbol1();
	this.instance_236.setTransform(760,130);

	this.instance_237 = new lib.Symbol1();
	this.instance_237.setTransform(720,130);

	this.instance_238 = new lib.Symbol1();
	this.instance_238.setTransform(680,130);

	this.instance_239 = new lib.Symbol1();
	this.instance_239.setTransform(640,130);

	this.instance_240 = new lib.Symbol1();
	this.instance_240.setTransform(600,130);

	this.instance_241 = new lib.Symbol1();
	this.instance_241.setTransform(560,130);

	this.instance_242 = new lib.Symbol1();
	this.instance_242.setTransform(520,130);

	this.instance_243 = new lib.Symbol1();
	this.instance_243.setTransform(480,130);

	this.instance_244 = new lib.Symbol1();
	this.instance_244.setTransform(440,130);

	this.instance_245 = new lib.Symbol1();
	this.instance_245.setTransform(400,130);

	this.instance_246 = new lib.Symbol1();
	this.instance_246.setTransform(360,130);

	this.instance_247 = new lib.Symbol1();
	this.instance_247.setTransform(320,130);

	this.instance_248 = new lib.Symbol1();
	this.instance_248.setTransform(280,130);

	this.instance_249 = new lib.Symbol1();
	this.instance_249.setTransform(240,130);

	this.instance_250 = new lib.Symbol1();
	this.instance_250.setTransform(200,130);

	this.instance_251 = new lib.Symbol1();
	this.instance_251.setTransform(160,130);

	this.instance_252 = new lib.Symbol1();
	this.instance_252.setTransform(120,130);

	this.instance_253 = new lib.Symbol1();
	this.instance_253.setTransform(80,130);

	this.instance_254 = new lib.Symbol1();
	this.instance_254.setTransform(40,130);

	this.instance_255 = new lib.Symbol1();
	this.instance_255.setTransform(2020,95);

	this.instance_256 = new lib.Symbol1();
	this.instance_256.setTransform(1980,95);

	this.instance_257 = new lib.Symbol1();
	this.instance_257.setTransform(1940,95);

	this.instance_258 = new lib.Symbol1();
	this.instance_258.setTransform(1900,95);

	this.instance_259 = new lib.Symbol1();
	this.instance_259.setTransform(1860,95);

	this.instance_260 = new lib.Symbol1();
	this.instance_260.setTransform(1820,95);

	this.instance_261 = new lib.Symbol1();
	this.instance_261.setTransform(1780,95);

	this.instance_262 = new lib.Symbol1();
	this.instance_262.setTransform(1740,95);

	this.instance_263 = new lib.Symbol1();
	this.instance_263.setTransform(1700,95);

	this.instance_264 = new lib.Symbol1();
	this.instance_264.setTransform(1660,95);

	this.instance_265 = new lib.Symbol1();
	this.instance_265.setTransform(1620,95);

	this.instance_266 = new lib.Symbol1();
	this.instance_266.setTransform(1580,95);

	this.instance_267 = new lib.Symbol1();
	this.instance_267.setTransform(1540,95);

	this.instance_268 = new lib.Symbol1();
	this.instance_268.setTransform(1500,95);

	this.instance_269 = new lib.Symbol1();
	this.instance_269.setTransform(1460,95);

	this.instance_270 = new lib.Symbol1();
	this.instance_270.setTransform(1420,95);

	this.instance_271 = new lib.Symbol1();
	this.instance_271.setTransform(1380,95);

	this.instance_272 = new lib.Symbol1();
	this.instance_272.setTransform(1340,95);

	this.instance_273 = new lib.Symbol1();
	this.instance_273.setTransform(1300,95);

	this.instance_274 = new lib.Symbol1();
	this.instance_274.setTransform(1260,95);

	this.instance_275 = new lib.Symbol1();
	this.instance_275.setTransform(1220,95);

	this.instance_276 = new lib.Symbol1();
	this.instance_276.setTransform(1180,95);

	this.instance_277 = new lib.Symbol1();
	this.instance_277.setTransform(1140,95);

	this.instance_278 = new lib.Symbol1();
	this.instance_278.setTransform(1100,95);

	this.instance_279 = new lib.Symbol1();
	this.instance_279.setTransform(1060,95);

	this.instance_280 = new lib.Symbol1();
	this.instance_280.setTransform(1020,95);

	this.instance_281 = new lib.Symbol1();
	this.instance_281.setTransform(980,95);

	this.instance_282 = new lib.Symbol1();
	this.instance_282.setTransform(940,95);

	this.instance_283 = new lib.Symbol1();
	this.instance_283.setTransform(900,95);

	this.instance_284 = new lib.Symbol1();
	this.instance_284.setTransform(860,95);

	this.instance_285 = new lib.Symbol1();
	this.instance_285.setTransform(820,95);

	this.instance_286 = new lib.Symbol1();
	this.instance_286.setTransform(780,95);

	this.instance_287 = new lib.Symbol1();
	this.instance_287.setTransform(740,95);

	this.instance_288 = new lib.Symbol1();
	this.instance_288.setTransform(700,95);

	this.instance_289 = new lib.Symbol1();
	this.instance_289.setTransform(660,95);

	this.instance_290 = new lib.Symbol1();
	this.instance_290.setTransform(620,95);

	this.instance_291 = new lib.Symbol1();
	this.instance_291.setTransform(580,95);

	this.instance_292 = new lib.Symbol1();
	this.instance_292.setTransform(540,95);

	this.instance_293 = new lib.Symbol1();
	this.instance_293.setTransform(500,95);

	this.instance_294 = new lib.Symbol1();
	this.instance_294.setTransform(460,95);

	this.instance_295 = new lib.Symbol1();
	this.instance_295.setTransform(420,95);

	this.instance_296 = new lib.Symbol1();
	this.instance_296.setTransform(380,95);

	this.instance_297 = new lib.Symbol1();
	this.instance_297.setTransform(340,95);

	this.instance_298 = new lib.Symbol1();
	this.instance_298.setTransform(300,95);

	this.instance_299 = new lib.Symbol1();
	this.instance_299.setTransform(260,95);

	this.instance_300 = new lib.Symbol1();
	this.instance_300.setTransform(220,95);

	this.instance_301 = new lib.Symbol1();
	this.instance_301.setTransform(180,95);

	this.instance_302 = new lib.Symbol1();
	this.instance_302.setTransform(140,95);

	this.instance_303 = new lib.Symbol1();
	this.instance_303.setTransform(100,95);

	this.instance_304 = new lib.Symbol1();
	this.instance_304.setTransform(60,95);

	this.instance_305 = new lib.Symbol1();
	this.instance_305.setTransform(20,95);

	this.instance_306 = new lib.Symbol1();
	this.instance_306.setTransform(2040,60);

	this.instance_307 = new lib.Symbol1();
	this.instance_307.setTransform(2000,60);

	this.instance_308 = new lib.Symbol1();
	this.instance_308.setTransform(1960,60);

	this.instance_309 = new lib.Symbol1();
	this.instance_309.setTransform(1920,60);

	this.instance_310 = new lib.Symbol1();
	this.instance_310.setTransform(1880,60);

	this.instance_311 = new lib.Symbol1();
	this.instance_311.setTransform(1840,60);

	this.instance_312 = new lib.Symbol1();
	this.instance_312.setTransform(1800,60);

	this.instance_313 = new lib.Symbol1();
	this.instance_313.setTransform(1760,60);

	this.instance_314 = new lib.Symbol1();
	this.instance_314.setTransform(1720,60);

	this.instance_315 = new lib.Symbol1();
	this.instance_315.setTransform(1680,60);

	this.instance_316 = new lib.Symbol1();
	this.instance_316.setTransform(1640,60);

	this.instance_317 = new lib.Symbol1();
	this.instance_317.setTransform(1600,60);

	this.instance_318 = new lib.Symbol1();
	this.instance_318.setTransform(1560,60);

	this.instance_319 = new lib.Symbol1();
	this.instance_319.setTransform(1520,60);

	this.instance_320 = new lib.Symbol1();
	this.instance_320.setTransform(1480,60);

	this.instance_321 = new lib.Symbol1();
	this.instance_321.setTransform(1440,60);

	this.instance_322 = new lib.Symbol1();
	this.instance_322.setTransform(1400,60);

	this.instance_323 = new lib.Symbol1();
	this.instance_323.setTransform(1360,60);

	this.instance_324 = new lib.Symbol1();
	this.instance_324.setTransform(1320,60);

	this.instance_325 = new lib.Symbol1();
	this.instance_325.setTransform(1280,60);

	this.instance_326 = new lib.Symbol1();
	this.instance_326.setTransform(1240,60);

	this.instance_327 = new lib.Symbol1();
	this.instance_327.setTransform(1200,60);

	this.instance_328 = new lib.Symbol1();
	this.instance_328.setTransform(1160,60);

	this.instance_329 = new lib.Symbol1();
	this.instance_329.setTransform(1120,60);

	this.instance_330 = new lib.Symbol1();
	this.instance_330.setTransform(1080,60);

	this.instance_331 = new lib.Symbol1();
	this.instance_331.setTransform(1040,60);

	this.instance_332 = new lib.Symbol1();
	this.instance_332.setTransform(1000,60);

	this.instance_333 = new lib.Symbol1();
	this.instance_333.setTransform(960,60);

	this.instance_334 = new lib.Symbol1();
	this.instance_334.setTransform(920,60);

	this.instance_335 = new lib.Symbol1();
	this.instance_335.setTransform(880,60);

	this.instance_336 = new lib.Symbol1();
	this.instance_336.setTransform(840,60);

	this.instance_337 = new lib.Symbol1();
	this.instance_337.setTransform(800,60);

	this.instance_338 = new lib.Symbol1();
	this.instance_338.setTransform(760,60);

	this.instance_339 = new lib.Symbol1();
	this.instance_339.setTransform(720,60);

	this.instance_340 = new lib.Symbol1();
	this.instance_340.setTransform(680,60);

	this.instance_341 = new lib.Symbol1();
	this.instance_341.setTransform(640,60);

	this.instance_342 = new lib.Symbol1();
	this.instance_342.setTransform(600,60);

	this.instance_343 = new lib.Symbol1();
	this.instance_343.setTransform(560,60);

	this.instance_344 = new lib.Symbol1();
	this.instance_344.setTransform(520,60);

	this.instance_345 = new lib.Symbol1();
	this.instance_345.setTransform(480,60);

	this.instance_346 = new lib.Symbol1();
	this.instance_346.setTransform(440,60);

	this.instance_347 = new lib.Symbol1();
	this.instance_347.setTransform(400,60);

	this.instance_348 = new lib.Symbol1();
	this.instance_348.setTransform(360,60);

	this.instance_349 = new lib.Symbol1();
	this.instance_349.setTransform(320,60);

	this.instance_350 = new lib.Symbol1();
	this.instance_350.setTransform(280,60);

	this.instance_351 = new lib.Symbol1();
	this.instance_351.setTransform(240,60);

	this.instance_352 = new lib.Symbol1();
	this.instance_352.setTransform(200,60);

	this.instance_353 = new lib.Symbol1();
	this.instance_353.setTransform(160,60);

	this.instance_354 = new lib.Symbol1();
	this.instance_354.setTransform(120,60);

	this.instance_355 = new lib.Symbol1();
	this.instance_355.setTransform(80,60);

	this.instance_356 = new lib.Symbol1();
	this.instance_356.setTransform(40,60);

	this.instance_357 = new lib.Symbol1();
	this.instance_357.setTransform(2020,25);

	this.instance_358 = new lib.Symbol1();
	this.instance_358.setTransform(1980,25);

	this.instance_359 = new lib.Symbol1();
	this.instance_359.setTransform(1940,25);

	this.instance_360 = new lib.Symbol1();
	this.instance_360.setTransform(1900,25);

	this.instance_361 = new lib.Symbol1();
	this.instance_361.setTransform(1860,25);

	this.instance_362 = new lib.Symbol1();
	this.instance_362.setTransform(1820,25);

	this.instance_363 = new lib.Symbol1();
	this.instance_363.setTransform(1780,25);

	this.instance_364 = new lib.Symbol1();
	this.instance_364.setTransform(1740,25);

	this.instance_365 = new lib.Symbol1();
	this.instance_365.setTransform(1700,25);

	this.instance_366 = new lib.Symbol1();
	this.instance_366.setTransform(1660,25);

	this.instance_367 = new lib.Symbol1();
	this.instance_367.setTransform(1620,25);

	this.instance_368 = new lib.Symbol1();
	this.instance_368.setTransform(1580,25);

	this.instance_369 = new lib.Symbol1();
	this.instance_369.setTransform(1540,25);

	this.instance_370 = new lib.Symbol1();
	this.instance_370.setTransform(1500,25);

	this.instance_371 = new lib.Symbol1();
	this.instance_371.setTransform(1460,25);

	this.instance_372 = new lib.Symbol1();
	this.instance_372.setTransform(1420,25);

	this.instance_373 = new lib.Symbol1();
	this.instance_373.setTransform(1380,25);

	this.instance_374 = new lib.Symbol1();
	this.instance_374.setTransform(1340,25);

	this.instance_375 = new lib.Symbol1();
	this.instance_375.setTransform(1300,25);

	this.instance_376 = new lib.Symbol1();
	this.instance_376.setTransform(1260,25);

	this.instance_377 = new lib.Symbol1();
	this.instance_377.setTransform(1220,25);

	this.instance_378 = new lib.Symbol1();
	this.instance_378.setTransform(1180,25);

	this.instance_379 = new lib.Symbol1();
	this.instance_379.setTransform(1140,25);

	this.instance_380 = new lib.Symbol1();
	this.instance_380.setTransform(1100,25);

	this.instance_381 = new lib.Symbol1();
	this.instance_381.setTransform(1060,25);

	this.instance_382 = new lib.Symbol1();
	this.instance_382.setTransform(1020,25);

	this.instance_383 = new lib.Symbol1();
	this.instance_383.setTransform(980,25);

	this.instance_384 = new lib.Symbol1();
	this.instance_384.setTransform(940,25);

	this.instance_385 = new lib.Symbol1();
	this.instance_385.setTransform(900,25);

	this.instance_386 = new lib.Symbol1();
	this.instance_386.setTransform(860,25);

	this.instance_387 = new lib.Symbol1();
	this.instance_387.setTransform(820,25);

	this.instance_388 = new lib.Symbol1();
	this.instance_388.setTransform(780,25);

	this.instance_389 = new lib.Symbol1();
	this.instance_389.setTransform(740,25);

	this.instance_390 = new lib.Symbol1();
	this.instance_390.setTransform(700,25);

	this.instance_391 = new lib.Symbol1();
	this.instance_391.setTransform(660,25);

	this.instance_392 = new lib.Symbol1();
	this.instance_392.setTransform(620,25);

	this.instance_393 = new lib.Symbol1();
	this.instance_393.setTransform(580,25);

	this.instance_394 = new lib.Symbol1();
	this.instance_394.setTransform(540,25);

	this.instance_395 = new lib.Symbol1();
	this.instance_395.setTransform(500,25);

	this.instance_396 = new lib.Symbol1();
	this.instance_396.setTransform(460,25);

	this.instance_397 = new lib.Symbol1();
	this.instance_397.setTransform(420,25);

	this.instance_398 = new lib.Symbol1();
	this.instance_398.setTransform(380,25);

	this.instance_399 = new lib.Symbol1();
	this.instance_399.setTransform(340,25);

	this.instance_400 = new lib.Symbol1();
	this.instance_400.setTransform(300,25);

	this.instance_401 = new lib.Symbol1();
	this.instance_401.setTransform(260,25);

	this.instance_402 = new lib.Symbol1();
	this.instance_402.setTransform(220,25);

	this.instance_403 = new lib.Symbol1();
	this.instance_403.setTransform(180,25);

	this.instance_404 = new lib.Symbol1();
	this.instance_404.setTransform(140,25);

	this.instance_405 = new lib.Symbol1();
	this.instance_405.setTransform(100,25);

	this.instance_406 = new lib.Symbol1();
	this.instance_406.setTransform(60,25);

	this.instance_407 = new lib.Symbol1();
	this.instance_407.setTransform(20,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_407},{t:this.instance_406},{t:this.instance_405},{t:this.instance_404},{t:this.instance_403},{t:this.instance_402},{t:this.instance_401},{t:this.instance_400},{t:this.instance_399},{t:this.instance_398},{t:this.instance_397},{t:this.instance_396},{t:this.instance_395},{t:this.instance_394},{t:this.instance_393},{t:this.instance_392},{t:this.instance_391},{t:this.instance_390},{t:this.instance_389},{t:this.instance_388},{t:this.instance_387},{t:this.instance_386},{t:this.instance_385},{t:this.instance_384},{t:this.instance_383},{t:this.instance_382},{t:this.instance_381},{t:this.instance_380},{t:this.instance_379},{t:this.instance_378},{t:this.instance_377},{t:this.instance_376},{t:this.instance_375},{t:this.instance_374},{t:this.instance_373},{t:this.instance_372},{t:this.instance_371},{t:this.instance_370},{t:this.instance_369},{t:this.instance_368},{t:this.instance_367},{t:this.instance_366},{t:this.instance_365},{t:this.instance_364},{t:this.instance_363},{t:this.instance_362},{t:this.instance_361},{t:this.instance_360},{t:this.instance_359},{t:this.instance_358},{t:this.instance_357},{t:this.instance_356},{t:this.instance_355},{t:this.instance_354},{t:this.instance_353},{t:this.instance_352},{t:this.instance_351},{t:this.instance_350},{t:this.instance_349},{t:this.instance_348},{t:this.instance_347},{t:this.instance_346},{t:this.instance_345},{t:this.instance_344},{t:this.instance_343},{t:this.instance_342},{t:this.instance_341},{t:this.instance_340},{t:this.instance_339},{t:this.instance_338},{t:this.instance_337},{t:this.instance_336},{t:this.instance_335},{t:this.instance_334},{t:this.instance_333},{t:this.instance_332},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2060,295);


(lib.pBar = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.mc = new lib.Symbol10();
	this.mc.setTransform(-110,0);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// Layer 1
	this.mc2 = new lib.Symbol10();
	this.mc2.setTransform(0,-0.5,1,1,0,0,0,110,-0.5);
	this.mc2.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.mc2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-1,220,1);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.mc = new lib.Symbol40();
	this.mc.setTransform(0,-5);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

	// Layer 1
	this.instance = new lib.Symbol40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.9,-28.3,183.8,51.6);


(lib.bigCircle = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol41();
	this.instance.setTransform(102,13.3);

	this.instance_1 = new lib.Symbol41();
	this.instance_1.setTransform(99.9,25.6);

	this.instance_2 = new lib.Symbol41();
	this.instance_2.setTransform(96.3,37.7);

	this.instance_3 = new lib.Symbol41();
	this.instance_3.setTransform(90.4,49.1);

	this.instance_4 = new lib.Symbol41();
	this.instance_4.setTransform(83.1,60.5);

	this.instance_5 = new lib.Symbol41();
	this.instance_5.setTransform(74.2,70.7);

	this.instance_6 = new lib.Symbol41();
	this.instance_6.setTransform(64.6,79.6);

	this.instance_7 = new lib.Symbol41();
	this.instance_7.setTransform(54,87.5);

	this.instance_8 = new lib.Symbol41();
	this.instance_8.setTransform(42.6,94);

	this.instance_9 = new lib.Symbol41();
	this.instance_9.setTransform(30.8,97.6);

	this.instance_10 = new lib.Symbol41();
	this.instance_10.setTransform(18.8,101);

	this.instance_11 = new lib.Symbol41();
	this.instance_11.setTransform(6.7,102.6);

	this.instance_12 = new lib.Symbol41();
	this.instance_12.setTransform(-18.1,101.5);

	this.instance_13 = new lib.Symbol41();
	this.instance_13.setTransform(-30.8,98.2);

	this.instance_14 = new lib.Symbol41();
	this.instance_14.setTransform(-42.6,93.4);

	this.instance_15 = new lib.Symbol41();
	this.instance_15.setTransform(-53.6,87.5);

	this.instance_16 = new lib.Symbol41();
	this.instance_16.setTransform(-64.2,79.8);

	this.instance_17 = new lib.Symbol41();
	this.instance_17.setTransform(-73.6,71);

	this.instance_18 = new lib.Symbol41();
	this.instance_18.setTransform(-82.1,60.7);

	this.instance_19 = new lib.Symbol41();
	this.instance_19.setTransform(-89.4,49.8);

	this.instance_20 = new lib.Symbol41();
	this.instance_20.setTransform(-96,37.8);

	this.instance_21 = new lib.Symbol41();
	this.instance_21.setTransform(-100,25.9);

	this.instance_22 = new lib.Symbol41();
	this.instance_22.setTransform(-102.5,13.3);

	this.instance_23 = new lib.Symbol41();
	this.instance_23.setTransform(-102.3,-13.1);

	this.instance_24 = new lib.Symbol41();
	this.instance_24.setTransform(-100.3,-25.9);

	this.instance_25 = new lib.Symbol41();
	this.instance_25.setTransform(-96.2,-38.3);

	this.instance_26 = new lib.Symbol41();
	this.instance_26.setTransform(-90.3,-50.1);

	this.instance_27 = new lib.Symbol41();
	this.instance_27.setTransform(-83.4,-61.1);

	this.instance_28 = new lib.Symbol41();
	this.instance_28.setTransform(-75,-71.4);

	this.instance_29 = new lib.Symbol41();
	this.instance_29.setTransform(-65.9,-80.8);

	this.instance_30 = new lib.Symbol41();
	this.instance_30.setTransform(-55.4,-87.9);

	this.instance_31 = new lib.Symbol41();
	this.instance_31.setTransform(-44,-93.9);

	this.instance_32 = new lib.Symbol41();
	this.instance_32.setTransform(-32.5,-98.8);

	this.instance_33 = new lib.Symbol41();
	this.instance_33.setTransform(-19.9,-101.7);

	this.instance_34 = new lib.Symbol41();
	this.instance_34.setTransform(-6.3,-103);

	this.instance_35 = new lib.Symbol41();
	this.instance_35.setTransform(18.9,-102);

	this.instance_36 = new lib.Symbol41();
	this.instance_36.setTransform(31.8,-98.1);

	this.instance_37 = new lib.Symbol41();
	this.instance_37.setTransform(43.5,-93.9);

	this.instance_38 = new lib.Symbol41();
	this.instance_38.setTransform(55.1,-87.9);

	this.instance_39 = new lib.Symbol41();
	this.instance_39.setTransform(64.9,-80.2);

	this.instance_40 = new lib.Symbol41();
	this.instance_40.setTransform(74.6,-71.1);

	this.instance_41 = new lib.Symbol41();
	this.instance_41.setTransform(83,-61.1);

	this.instance_42 = new lib.Symbol41();
	this.instance_42.setTransform(89.9,-50.5);

	this.instance_43 = new lib.Symbol41();
	this.instance_43.setTransform(95.6,-38.5);

	this.instance_44 = new lib.Symbol41();
	this.instance_44.setTransform(99.7,-25.9);

	this.instance_45 = new lib.Symbol41();
	this.instance_45.setTransform(101.8,-13);

	this.instance_46 = new lib.Symbol41();
	this.instance_46.setTransform(102.9,0.1);

	this.instance_47 = new lib.Symbol41();
	this.instance_47.setTransform(-103,-0.2);

	this.instance_48 = new lib.Symbol41();
	this.instance_48.setTransform(-5.5,102.9);

	this.instance_49 = new lib.Symbol41();
	this.instance_49.setTransform(5.5,-103.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1,3,true).p("AO2AAQAAGJkWEWQkWEXmKAAQmJAAkWkXQkWkWAAmJQAAmJEWkWQEWkWGJAAQGKAAEWEWQEWEWAAGJg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFF9E0","#F9D992","#F4C56C","#E6B255","#D39835","#B77308","#72206F","#D727CE","#D026C8"],[0,0.396,0.616,0.69,0.749,0.816,0.867,0.969,1],0,0,0,0,0,111.6).s().p("AsIMJQlClBAAnIQAAnHFClBQFBlCHHAAQHIAAFBFCQFCFBAAHHQAAHIlCFBQlBFCnIAAQnHAAlBlCg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,-110,220.1,220.1);


(lib.Symbol67 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// comb.png
	this.comb = new lib.Symbol70();
	this.comb.setTransform(-382,85);

	this.ref = new lib.Symbol71();
	this.ref.setTransform(-413,63);

	this.car = new lib.Symbol72();
	this.car.setTransform(-289,61);

	this.tv = new lib.Symbol73();
	this.tv.setTransform(-228,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tv},{t:this.car},{t:this.ref},{t:this.comb}]}).wait(1));

	// bingo
	this.bingo = new lib.Symbol25();
	this.bingo.setTransform(-0.7,98.4,0.916,0.916);

	this.bigCircle = new lib.bigCircle();
	this.bigCircle.setTransform(-2.2,59,1.008,1.008);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bigCircle},{t:this.bingo}]}).wait(1));

	// btn
	this.btn = new lib.Symbol39();
	this.btn.setTransform(300.1,63.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// sroki
	this.sroki = new lib.Symbol74();
	this.sroki.setTransform(300,169);
	this.sroki.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.sroki).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430,-51.9,841,234);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var cards = [];
		var cardChosen = r.bingo.c5;
		var knop = document.getElementById("cont");
		
		
		var tl = new TimelineLite();
		tl.set(r.pBar.mc, {scaleX:0})
		  .set(r.t3, {y:-660})
		  .set(r.t4, {y:-660})
		  .set(r.scend, {y:-1660})
		  //.set(r.term, {y:915})
		  .set(r.wifi, {alpha:0})
		  
		  .to(r.blk, 1.2, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .staggerTo([r.bingo.c1.btn, r.bingo.c2.btn, r.bingo.c3.btn, r.bingo.c4.btn, r.bingo.c5.btn], 0.1, {alpha:0, ease:Power0.easeNone}, 0.00, 0.0)
		  .from(r.bigCircle, 1.9, {scaleX:0, scaleY:0, rotation:"+=120", ease:Expo.easeOut}, 1.0)
		  .staggerFrom([r.t1.t1, r.t1.t2, r.t1.t3], 1.5, {y:"+=20", alpha:0.0, ease:Elastic.easeOut}, 0.07, 1.3)
		  .from(r.bingo.mc1, 0.9, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 1.5)
		  .staggerFrom([r.bingo.c1, r.bingo.c2, r.bingo.c3, r.bingo.c4, r.bingo.c5], 0.9, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.08, 1.6)
		  .from(r.bingo.sh, 1.4, {alpha:0, ease:Power0.easeNone}, 1.5)
		  
		  .to(r.bigCircle, 0.7, {scaleX:0, scaleY:0, rotation:"+=120", ease:Expo.easeIn}, 3.0)
		  .to(r.bingo.sh, 0.4, {alpha:0, ease:Power0.easeNone}, 3.0)
		  .to(r.bingo.mc1, 1.2, {y:"+=180", x:"-=180", alpha:0.0, rotation:"-=360", scaleX:0, scaleY:0, ease:Expo.easeInOut}, 3.0)
		  .staggerTo([r.t1.t1, r.t1.t2, r.t1.t3], 0.4, {y:"-=180", /*y:0, scaleX:0, scaleY:0, */ease:Expo.easeIn}, 0.07, 3.3)
		  .to(r.bingo, 1.2, {rotation:"+=360", ease:Expo.easeInOut}, 3.0)
		  .to(r.bingo.c1, 1.2, {x:484, y:-93, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.0)
		  .to(r.bingo.c2, 1.2, {x:321, y:-53, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.03)
		  .to(r.bingo.c3, 1.2, {x:160, y:-91, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.06)
		  .to(r.bingo.c4, 1.2, {x:-4, y:-52, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.09)
		  .to(r.bingo.c5, 1.2, {x:-171, y:-91, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.12)
		  
		  .staggerTo([r.bingo.c1.btn, r.bingo.c2.btn, r.bingo.c3.btn, r.bingo.c4.btn, r.bingo.c5.btn], 0.1, {alpha:1, ease:Power0.easeNone}, 0.00, 3.7)
		  .from(r.t2.t1, 1.0, {x:"+=100", alpha:0, ease:Expo.easeOut}, 3.7)
		  .from(r.t2.t2, 1.4, {x:"+=100", alpha:0, ease:Expo.easeOut}, 3.75)
		  
		  //.set(knop, {width:"0px"}, 4.3)
		  .from(r.cur, 1.0, {scaleX:0, scaleY:0, y:"+=30", ease:Expo.easeOut}, 4.3)
		  .from(r.pBar, 1.0, {y:"+=20", alpha:0, ease:Expo.easeOut}, 4.3)
		  .from(r.pBar.mc2, 1.0, {scaleX:0, ease:Expo.easeInOut}, 4.3)
		  .call(userReaction)
		  
		  ;
		
		
		
		function userReaction() {
			knop.style.width = "0px";
			//console.log("choose it!")
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:0.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:0.5, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:1.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:1.5, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:2.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:2.5, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:3.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:3.5, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:4.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:4.5, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"-=10", y:"-=20", rotation:"-=10", delay:5.0, ease:Sine.easeInOut})
			TweenLite.to(r.cur, 0.5, {x:"+=10", y:"+=20", rotation:"+=10", delay:5.5, ease:Sine.easeInOut})
			
			
			TweenLite.to(r.pBar.mc, 6.0, {scaleX:1, ease:Power0.easeNone, onComplete:endPBar})
			r.btnMain.addEventListener("rollover", hideCur);
			
			//choosing card
			r.bingo.c1.btn.addEventListener("click", card1FN);
			r.bingo.c2.btn.addEventListener("click", card2FN);
			r.bingo.c3.btn.addEventListener("click", card3FN);
			r.bingo.c4.btn.addEventListener("click", card4FN);
			r.bingo.c5.btn.addEventListener("click", card5FN);
			
		}
		
		function endPBar() {
			cards = [r.bingo.c1, r.bingo.c2, r.bingo.c3, r.bingo.c4, r.bingo.c5]
			playMore();
		}
		function hideCur() {
			TweenLite.killTweensOf(r.cur);
			TweenLite.to(r.cur, 0.4, {y:"+=250", rotation:"-=60", ease:Expo.easeIn})
			//tlCur.pause();
		}
		
		function card1FN() {
			clearListeners();
			cards = [r.bingo.c2, r.bingo.c3, r.bingo.c4, r.bingo.c5]
			cardChosen = r.bingo.c1;
			playMore();
		}
		function card2FN() {
			clearListeners();
			cards = [r.bingo.c1, r.bingo.c3, r.bingo.c4, r.bingo.c5]
			cardChosen = r.bingo.c2;
			playMore();
		}
		function card3FN() {
			clearListeners();
			cards = [r.bingo.c1, r.bingo.c2, r.bingo.c4, r.bingo.c5]
			cardChosen = r.bingo.c3;
			playMore();
		}
		function card4FN() {
			clearListeners();
			cards = [r.bingo.c1, r.bingo.c2, r.bingo.c3, r.bingo.c5]
			cardChosen = r.bingo.c4;
			playMore();
		}
		function card5FN() {
			clearListeners();
			cards = [r.bingo.c1, r.bingo.c2, r.bingo.c3, r.bingo.c4]
			cardChosen = r.bingo.c5;
			playMore();
		}
		function clearListeners() {
			r.bingo.c1.btn.removeEventListener("click", card1FN);
			r.bingo.c2.btn.removeEventListener("click", card2FN);
			r.bingo.c3.btn.removeEventListener("click", card3FN);
			r.bingo.c4.btn.removeEventListener("click", card4FN);
			r.bingo.c5.btn.removeEventListener("click", card5FN);
		}
		
		
		function playMore() {
			knop.style.width = "2000px";
			TweenLite.set(r.btnMain, {scaleX:0})
			//console.log(cardChosen);
			TweenLite.killTweensOf(r.cur);
			TweenLite.killTweensOf(r.pBar.mc);
			TweenLite.to(r.cur, 0.4, {y:"+=250", rotation:"-=60", ease:Expo.easeIn});
			r.btnMain.removeEventListener("rollover", hideCur);
			//console.log("second part begins");
			var tm = new TimelineLite();
			tm.set(r.t3, {x:202, y:0})
			  .set(r.t4, {x:0, y:0})
			  .set(r.scend, {y:-60})
			  //.set(r.term, {x:-130, y:56})
			  .staggerTo(cards, 0.4, {y:"-=350", ease:Expo.easeIn}, 0.05, 0.0)
			  .staggerTo([r.pBar, r.t2.t2, r.t2.t1], 0.2, {y:"+=140", ease:Expo.easeIn}, 0.03, 0.0)
			  .staggerTo([r.bingo.c1.btn, r.bingo.c2.btn, r.bingo.c3.btn, r.bingo.c4.btn, r.bingo.c5.btn], 0.1, {alpha:0, ease:Power0.easeNone}, 0.00, 0.0)
			  .staggerTo([r.scend.bingo.c1.btn, r.scend.bingo.c2.btn, r.scend.bingo.c3.btn, r.scend.bingo.c4.btn, r.scend.bingo.c5.btn], 0.1, {alpha:0, ease:Power0.easeNone}, 0.00, 0.0)
			  .to(cardChosen, 1.3, {x:108, y:-40, rotation:"+=360", ease:Back.easeInOut, overwrite:true}, 0.0)
			  .staggerFrom([r.t3.t1, r.t3.t2], 1.0, {x:"+=200", alpha:0.0, ease:Expo.easeOut}, 0.07, 0.5)
			  //.from(r.term, 0.8, {x:"+=200", y:"+=800", rotation:"-=90", ease:Expo.easeOut}, 0.5)
			  .to(r.wifi, 0.5, {alpha:1, ease:Power0.easeNone}, 1.3)
			  .from(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.3)
			  .to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone}, 2.0)
			  .to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone}, 2.7)
			  .to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone}, 3.4)
			  .to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone}, 4.1)
			  
			  .from(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.4)
			  .to(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone}, 2.1)
			  .to(r.wifi.w2, 0.2, {alpha:1, ease:Power0.easeNone}, 2.8)
			  .to(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone}, 3.5)
			  .to(r.wifi.w2, 0.2, {alpha:1, ease:Power0.easeNone}, 4.2)
			  
			  .from(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.5)
			  .to(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone}, 2.2)
			  .to(r.wifi.w3, 0.2, {alpha:1, ease:Power0.easeNone}, 2.9)
			  .to(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone}, 3.6)
			  .to(r.wifi.w3, 0.2, {alpha:1, ease:Power0.easeNone}, 4.3)
			  
			  
			  .staggerTo([r.t3.t1, r.t3.t2], 0.5, {y:0, scaleX:0, scaleY:0, ease:Back.easeIn}, 0.06, 3.0)
			  //.to(r.term, 1.2, {scaleX:1.0, scaleY:1.0, y:"+=54", ease:Expo.easeInOut}, 3.0)
			  .to(r.wifi, 0.3, {alpha:0, ease:Power0.easeNone}, 3.0)
			  .to(cardChosen, 0.5, {scaleX:0, scaleY:0, ease:Back.easeIn}, 3.0)
			  //.to(r.term.bingo, 0.1, {alpha:0, ease:Power0.easeNone}, 3.5)
			  //.to(r.term.bingo, 0.1, {alpha:1, ease:Power0.easeNone}, 4.0)
			  //.to(r.term.bingo, 0.1, {alpha:0, ease:Power0.easeNone}, 4.5)
			  //.to(r.term.bingo, 0.1, {alpha:1, ease:Power0.easeNone}, 5.0)
			  //.to(r.term.price, 0.2, {alpha:0, ease:Power0.easeNone}, 3.5)
			  .staggerFrom([r.t4.t1, r.t4.t2, r.t4.t3], 1.0, {y:"+=80", alpha:0.0, scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.07, 3.5)
			  
			  .staggerTo([/*r.term, */r.t4.t3, r.t4.t2, r.t4.t1], 0.5, {y:"+=600", ease:Expo.easeIn}, 0.04, 5.5)
			  
			  .from(r.scend.bigCircle, 1.9, {scaleX:0, scaleY:0, rotation:"+=120", ease:Expo.easeOut}, 6.0)
			  .from(r.scend.bingo.mc1, 0.9, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 6.5)
			  .staggerFrom([r.scend.bingo.c1, r.scend.bingo.c2, r.scend.bingo.c3, r.scend.bingo.c4, r.scend.bingo.c5], 0.9, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.08, 6.6)
			  .from(r.scend.bingo.sh, 1.5, {alpha:0, ease:Power0.easeNone}, 7.0)
			  
			  .from(r.scend.tv, 0.9, {x:"+=300", alpha:0.0, ease:Expo.easeOut}, 6.5)
			  .from(r.scend.car, 0.9, {x:"-=300", y:"-=100", scaleX:0.3, scaleY:0.3, alpha:0.0, ease:Expo.easeOut}, 6.7)
			  .from(r.scend.comb, 0.9, {x:"-=300", alpha:0.0, ease:Expo.easeOut}, 6.8)
			  .from(r.scend.ref, 0.9, {x:"-=300", alpha:0.0, ease:Expo.easeOut}, 6.9)
			  
			  //.staggerFrom([r.scend.sroki.t1, r.scend.sroki.t2, r.scend.sroki.t3], 0.9, {y:"+=150", alpha:0.0, ease:Expo.easeOut}, 0.07, 7.0)
			  .from(r.scend.sroki, 0.9, {y:"+=150", alpha:0.0, ease:Expo.easeOut}, 7.0)
			  
			  .from(r.scend.btn, 1.4, {scaleX:0, scaleY:0, ease:Elastic.easeOut/*, onComplete:checkEnd*/}, 6.5)
			  .to(r.scend.btn.mc, 0.2, {y:0, ease:Power0.easeNone}, 8.5)
			  .to(r.scend.btn.mc, 0.2, {y:"-=5", ease:Power0.easeNone}, 9.0)
			  
			  //.call(setPause)
			  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 11)
			;
			
		}
		
		function setPause() {
			//ty.pause();
		}
		
		function restart() {
			//var cards = [];
			//var cardChosen = r.bingo.c5;
			var tr = new TimelineLite();
			tr.staggerTo([r.t4.t3, r.t4.t2, r.t4.t1], 0.1, {y:"-=600"}, 0.0)
			tr.staggerTo([r.pBar, r.t2.t2, r.t2.t1], 0.1, {y:"-=140"}, 0.0)
			;
			TweenLite.set(r.cur, {rotation:0, x:160, y:90})
			//TweenLite.set(r.term, {scaleX:0.8, scaleY:0.8})
			//TweenLite.set(r.term.bingo, {alpha:1})
			//TweenLite.set(r.term.price, {alpha:1})
			TweenLite.set(r.t3.t1, {y:-18, scaleX:1, scaleY:1})
			TweenLite.set(r.t3.t2, {y:25, scaleX:1, scaleY:1})
			//ty.play();
			tl.play(0);
			bgPattern();
		}
		
		
		//bg
		var z = r.bg;
		function bgPattern() {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  TweenLite.from(z[currObj], 2.0, {scaleX:0, scaleY:0, rotation:"+=0", y:"+=100", /*alpha:0, */ease:Elastic.easeOut.config(0.9,0.6), delay:(i-56)*0.001+0.0});
				  }
			i++;
			 }
		}
		bgPattern();
		/*this.btnMain.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(window.clickTag, "_blank");
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EicPgThME4fAAAMAAAAnDMk4fAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,8.333,0.625);
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// scend
	this.scend = new lib.Symbol67();
	this.scend.setTransform(0,-60,1,1,0,0,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.scend).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(130,6,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// pBar
	this.pBar = new lib.pBar();
	this.pBar.setTransform(-0.9,106,0.968,0.5);

	this.timeline.addTween(cjs.Tween.get(this.pBar).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(-1,78.8,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// hand cursors
	this.cur = new lib.cursor();
	this.cur.setTransform(160,90);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// t3
	this.t3 = new lib.Symbol54();
	this.t3.setTransform(200,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// wifi
	this.wifi = new lib.Symbol59();
	this.wifi.setTransform(-176,1.5,0.8,0.8,-90);

	this.timeline.addTween(cjs.Tween.get(this.wifi).wait(1));

	// bingo
	this.bingo = new lib.Symbol25();
	this.bingo.setTransform(-170,46);

	this.bigCircle = new lib.bigCircle();
	this.bigCircle.setTransform(-170,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bigCircle},{t:this.bingo}]}).wait(1));

	// t4
	this.t4 = new lib.Symbol54copy();
	this.t4.setTransform(0,0,1.3,1.3);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// btnMain
	this.btnMain = new lib.link();
	this.btnMain.setTransform(0,0,3.125,0.625);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// bg
	this.bg = new lib.Symbol2();
	this.bg.setTransform(-1020,-149);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1020,-672,2060,818);


// stage content:
(lib.mtb_100prcx250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EicOAThMAAAgnBME4dAAAMAAAAnBg");
	mask.setTransform(1000,125);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(1000,125);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1000,125,2000,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;