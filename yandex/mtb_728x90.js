(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
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
		{src:"images/price.png", id:"price"},
		{src:"images/ref.png", id:"ref"},
		{src:"images/sroki.png", id:"sroki"},
		{src:"images/terminal.png", id:"terminal"},
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


(lib.price = function() {
	this.initialize(img.price);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,54);


(lib.ref = function() {
	this.initialize(img.ref);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,86);


(lib.sroki = function() {
	this.initialize(img.sroki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,26);


(lib.terminal = function() {
	this.initialize(img.terminal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,474);


(lib.tv = function() {
	this.initialize(img.tv);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,59);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.sroki, null, new cjs.Matrix2D(1,0,0,1,-43.3,-18.9)).s().p("AmwBCIAAiDINhAAIAACDg");
	this.shape.setTransform(-2.7,-14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.sroki, null, new cjs.Matrix2D(1,0,0,1,-136.7,-18.9)).s().p("AnzBCIAAiDIPnAAIAACDg");
	this.shape_1.setTransform(0.7,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.sroki, null, new cjs.Matrix2D(1,0,0,1,-236.9,-18.9)).s().p("An0BCIAAiDIPpAAIAACDg");
	this.shape_2.setTransform(-0.1,13.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-20.7,101,41.3);


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


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#282828").s().p("AAwCqIAAgsIAoAAIAAAsgAACCqIAAgsIAoAAIAAAsgAgpCqIAAgsIAoAAIAAAsgAhXCqIAAgsIAoAAIAAAsgAiFCqIAAgsIApAAIAAAsgABdB4IAAgrIApAAIAAArgAAwB4IAAgrIAoAAIAAArgAhXB4IAAgrIAoAAIAAArgAiFB4IAAgrIApAAIAAArgABdBHIAAgsIApAAIAAAsgAAwBHIAAgsIAoAAIAAAsgAhXBHIAAgsIAoAAIAAAsgAiFBHIAAgsIApAAIAAAsgAAwAVIAAgpIAoAAIAAApgAACAVIAAgpIAoAAIAAApgAgpAVIAAgpIAoAAIAAApgAhXAVIAAgpIAoAAIAAApgAiFAVIAAgpIApAAIAAApgAhXgaIAAgsIAoAAIAAAsgAiFgaIAAgsIApAAIAAAsgAhXhMIAAgrIAoAAIAAArgAiFhMIAAgrIApAAIAAArgAAwh9IAAgsIAoAAIAAAsgAACh9IAAgsIAoAAIAAAsgAgph9IAAgsIAoAAIAAAsgAhXh9IAAgsIAoAAIAAAsgAiFh9IAAgsIApAAIAAAsg");
	this.shape.setTransform(-66,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AJbCqIAAgsIApAAIAAAsgAGrCqIAAgsIAoAAIAAAsgAF9CqIAAgsIAoAAIAAAsgAFQCqIAAgsIAoAAIAAAsgAEiCqIAAgsIApAAIAAAsgAApCqIAAgsIAnAAIAAAsgAgDCqIAAgsIAmAAIAAAsgAhgCqIAAgsIAoAAIAAAsgAiOCqIAAgsIApAAIAAAsgAlECqIAAgsIAoAAIAAAsgAlxCqIAAgsIAoAAIAAAsgAnMCqIAAgtIAnAAIAAAtgAqDCqIAAgtIAoAAIAAAtgAHZB4IAAgrIAnAAIAAArgAGrB4IAAgrIAoAAIAAArgAEiB4IAAgrIApAAIAAArgAD0B4IAAgrIApAAIAAArgAApB4IAAgrIAnAAIAAArgAgDB4IAAgrIAmAAIAAArgAhgB4IAAgrIAoAAIAAArgAiOB4IAAgrIApAAIAAArgAlEB4IAAgrIAoAAIAAArgAlxB4IAAgrIAoAAIAAArgAnMB3IAAgqIAnAAIAAAqgApVB3IAAgqIAoAAIAAAqgAqDB3IAAgqIAoAAIAAAqgAJbBHIAAgsIApAAIAAAsgAIGBHIAAgsIAoAAIAAAsgAHZBHIAAgsIAnAAIAAAsgAD0BHIAAgsIApAAIAAAsgADHBHIAAgsIAoAAIAAAsgAApBHIAAgsIAnAAIAAAsgAgDBHIAAgsIAmAAIAAAsgAhgBHIAAgsIAoAAIAAAsgAiOBHIAAgsIApAAIAAAsgAlEBHIAAgsIAoAAIAAAsgAlxBHIAAgsIAoAAIAAAsgAnMBHIAAgsIAnAAIAAAsgAooBHIAAgsIAoAAIAAAsgApVBHIAAgsIAoAAIAAAsgAqDBHIAAgsIAoAAIAAAsgAJbAVIAAgpIApAAIAAApgAIGAVIAAgpIAoAAIAAApgAHZAVIAAgpIAnAAIAAApgAD0AVIAAgpIApAAIAAApgADHAVIAAgpIAoAAIAAApgAApAVIAAgpIAnAAIAAApgAgDAVIAAgpIAmAAIAAApgAhgAVIAAgpIAoAAIAAApgAiOAVIAAgpIApAAIAAApgAi7AVIAAgpIAoAAIAAApgAjpAVIAAgpIApAAIAAApgAkXAVIAAgpIApAAIAAApgAlEAVIAAgpIAoAAIAAApgAlxAVIAAgpIAoAAIAAApgAnMAVIAAgpIAnAAIAAApgAn6AVIAAgpIAoAAIAAApgAooAVIAAgpIAoAAIAAApgApVAVIAAgpIAoAAIAAApgAqDAVIAAgpIAoAAIAAApgAJbgaIAAgsIApAAIAAAsgAIGgaIAAgsIAoAAIAAAsgAHZgaIAAgsIAnAAIAAAsgAD0gaIAAgsIApAAIAAAsgADHgaIAAgsIAoAAIAAAsgAApgaIAAgsIAnAAIAAAsgAgDgaIAAgsIAmAAIAAAsgAhggaIAAgsIAoAAIAAAsgAiOgaIAAgsIApAAIAAAsgAlEgaIAAgsIAoAAIAAAsgAlxgaIAAgsIAoAAIAAAsgAnMgaIAAgsIAnAAIAAAsgAn6gaIAAgsIAoAAIAAAsgAoogaIAAgsIAoAAIAAAsgAqDgaIAAgsIAoAAIAAAsgAJbhMIAAgrIApAAIAAArgAHZhMIAAgrIAnAAIAAArgAGrhMIAAgrIAoAAIAAArgAEihMIAAgrIApAAIAAArgAD0hMIAAgrIApAAIAAArgAAphMIAAgrIAnAAIAAArgAgDhMIAAgrIAmAAIAAArgAhghMIAAgrIAoAAIAAArgAiOhMIAAgrIApAAIAAArgAlEhMIAAgrIAoAAIAAArgAlxhMIAAgrIAoAAIAAArgAnMhMIAAgrIAnAAIAAArgAn6hMIAAgrIAoAAIAAArgAqDhMIAAgrIAoAAIAAArgAJbh9IAAgsIApAAIAAAsgAGrh9IAAgsIAoAAIAAAsgAF9h9IAAgsIAoAAIAAAsgAFQh9IAAgsIAoAAIAAAsgAEih9IAAgsIApAAIAAAsgACxh9IAAgsIAoAAIAAAsgACEh9IAAgsIAnAAIAAAsgABWh9IAAgsIAoAAIAAAsgAAph9IAAgsIAnAAIAAAsgAgDh9IAAgsIAmAAIAAAsgAhgh9IAAgsIAoAAIAAAsgAiOh9IAAgsIApAAIAAAsgAlEh9IAAgsIAoAAIAAAsgAlxh9IAAgsIAoAAIAAAsgAnMh9IAAgsIAnAAIAAAsgAqDh9IAAgsIAoAAIAAAsg");
	this.shape_1.setTransform(15,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.4,-17,158.8,34);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmsDUIAAmnINZAAIAAGng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-21.2,85.9,42.5);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.price();
	this.instance.setTransform(-58,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-27,116,54);


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
	this.shape.setTransform(0,0,1,1,-50);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-9.6,29.1,21.6);


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

	// Layer 1
	this.t2 = new lib.Symbol52();
	this.t2.setTransform(-0.5,21.7);

	this.t1 = new lib.Symbol51();
	this.t1.setTransform(0,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-35,156.7,70.1);


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


(lib.Symbol63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol58();
	this.instance.setTransform(3.1,0.6,1.2,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6FAA","#87ACFA","#F7CEFE","#8C5693"],[0,0.086,0.918,1],-0.1,-50.6,-0.1,50.6).s().p("ArtHnQgxAAAAgxIgMt1QAAgwAwAAIX1AHQAwAAAAAwIgbN4QAAAwgwAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.2,-49.7,162.4,99.4);


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


(lib.Symbol57 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// price
	this.price = new lib.Symbol63();
	this.price.setTransform(-4.3,-72.3);

	this.timeline.addTween(cjs.Tween.get(this.price).wait(1));

	// bingo
	this.bingo = new lib.Symbol62();
	this.bingo.setTransform(-4.8,-71.3,0.945,1.235);

	this.timeline.addTween(cjs.Tween.get(this.bingo).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6DB600","#99FF00","#99FF00","#81D700"],[0,0.086,0.918,1],-0.1,-50.6,-0.1,50.6).s().p("ArtHnQgxAAAAgxIgMt1QAAgwAwAAIX1AHQAwAAAAAwIgbN4QAAAwgwAAg");
	this.shape.setTransform(-4.3,-72.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.terminal();
	this.instance.setTransform(-107.5,-237);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.4,-363.6,651,600.7);


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
p.nominalBounds = new cjs.Rectangle(-126.7,-162.6,437.8,228.6);


(lib.Symbol2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1020,165);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(980,165);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(940,165);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(900,165);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(860,165);

	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(820,165);

	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(780,165);

	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(740,165);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(700,165);

	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(660,165);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(620,165);

	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(580,165);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(540,165);

	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(500,165);

	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(460,165);

	this.instance_15 = new lib.Symbol1();
	this.instance_15.setTransform(420,165);

	this.instance_16 = new lib.Symbol1();
	this.instance_16.setTransform(380,165);

	this.instance_17 = new lib.Symbol1();
	this.instance_17.setTransform(340,165);

	this.instance_18 = new lib.Symbol1();
	this.instance_18.setTransform(300,165);

	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(260,165);

	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(220,165);

	this.instance_21 = new lib.Symbol1();
	this.instance_21.setTransform(180,165);

	this.instance_22 = new lib.Symbol1();
	this.instance_22.setTransform(140,165);

	this.instance_23 = new lib.Symbol1();
	this.instance_23.setTransform(100,165);

	this.instance_24 = new lib.Symbol1();
	this.instance_24.setTransform(60,165);

	this.instance_25 = new lib.Symbol1();
	this.instance_25.setTransform(20,165);

	this.instance_26 = new lib.Symbol1();
	this.instance_26.setTransform(1040,130);

	this.instance_27 = new lib.Symbol1();
	this.instance_27.setTransform(1000,130);

	this.instance_28 = new lib.Symbol1();
	this.instance_28.setTransform(960,130);

	this.instance_29 = new lib.Symbol1();
	this.instance_29.setTransform(920,130);

	this.instance_30 = new lib.Symbol1();
	this.instance_30.setTransform(880,130);

	this.instance_31 = new lib.Symbol1();
	this.instance_31.setTransform(840,130);

	this.instance_32 = new lib.Symbol1();
	this.instance_32.setTransform(800,130);

	this.instance_33 = new lib.Symbol1();
	this.instance_33.setTransform(760,130);

	this.instance_34 = new lib.Symbol1();
	this.instance_34.setTransform(720,130);

	this.instance_35 = new lib.Symbol1();
	this.instance_35.setTransform(680,130);

	this.instance_36 = new lib.Symbol1();
	this.instance_36.setTransform(640,130);

	this.instance_37 = new lib.Symbol1();
	this.instance_37.setTransform(600,130);

	this.instance_38 = new lib.Symbol1();
	this.instance_38.setTransform(560,130);

	this.instance_39 = new lib.Symbol1();
	this.instance_39.setTransform(520,130);

	this.instance_40 = new lib.Symbol1();
	this.instance_40.setTransform(480,130);

	this.instance_41 = new lib.Symbol1();
	this.instance_41.setTransform(440,130);

	this.instance_42 = new lib.Symbol1();
	this.instance_42.setTransform(400,130);

	this.instance_43 = new lib.Symbol1();
	this.instance_43.setTransform(360,130);

	this.instance_44 = new lib.Symbol1();
	this.instance_44.setTransform(320,130);

	this.instance_45 = new lib.Symbol1();
	this.instance_45.setTransform(280,130);

	this.instance_46 = new lib.Symbol1();
	this.instance_46.setTransform(240,130);

	this.instance_47 = new lib.Symbol1();
	this.instance_47.setTransform(200,130);

	this.instance_48 = new lib.Symbol1();
	this.instance_48.setTransform(160,130);

	this.instance_49 = new lib.Symbol1();
	this.instance_49.setTransform(120,130);

	this.instance_50 = new lib.Symbol1();
	this.instance_50.setTransform(80,130);

	this.instance_51 = new lib.Symbol1();
	this.instance_51.setTransform(40,130);

	this.instance_52 = new lib.Symbol1();
	this.instance_52.setTransform(1020,95);

	this.instance_53 = new lib.Symbol1();
	this.instance_53.setTransform(980,95);

	this.instance_54 = new lib.Symbol1();
	this.instance_54.setTransform(940,95);

	this.instance_55 = new lib.Symbol1();
	this.instance_55.setTransform(900,95);

	this.instance_56 = new lib.Symbol1();
	this.instance_56.setTransform(860,95);

	this.instance_57 = new lib.Symbol1();
	this.instance_57.setTransform(820,95);

	this.instance_58 = new lib.Symbol1();
	this.instance_58.setTransform(780,95);

	this.instance_59 = new lib.Symbol1();
	this.instance_59.setTransform(740,95);

	this.instance_60 = new lib.Symbol1();
	this.instance_60.setTransform(700,95);

	this.instance_61 = new lib.Symbol1();
	this.instance_61.setTransform(660,95);

	this.instance_62 = new lib.Symbol1();
	this.instance_62.setTransform(620,95);

	this.instance_63 = new lib.Symbol1();
	this.instance_63.setTransform(580,95);

	this.instance_64 = new lib.Symbol1();
	this.instance_64.setTransform(540,95);

	this.instance_65 = new lib.Symbol1();
	this.instance_65.setTransform(500,95);

	this.instance_66 = new lib.Symbol1();
	this.instance_66.setTransform(460,95);

	this.instance_67 = new lib.Symbol1();
	this.instance_67.setTransform(420,95);

	this.instance_68 = new lib.Symbol1();
	this.instance_68.setTransform(380,95);

	this.instance_69 = new lib.Symbol1();
	this.instance_69.setTransform(340,95);

	this.instance_70 = new lib.Symbol1();
	this.instance_70.setTransform(300,95);

	this.instance_71 = new lib.Symbol1();
	this.instance_71.setTransform(260,95);

	this.instance_72 = new lib.Symbol1();
	this.instance_72.setTransform(220,95);

	this.instance_73 = new lib.Symbol1();
	this.instance_73.setTransform(180,95);

	this.instance_74 = new lib.Symbol1();
	this.instance_74.setTransform(140,95);

	this.instance_75 = new lib.Symbol1();
	this.instance_75.setTransform(100,95);

	this.instance_76 = new lib.Symbol1();
	this.instance_76.setTransform(60,95);

	this.instance_77 = new lib.Symbol1();
	this.instance_77.setTransform(20,95);

	this.instance_78 = new lib.Symbol1();
	this.instance_78.setTransform(1040,60);

	this.instance_79 = new lib.Symbol1();
	this.instance_79.setTransform(1000,60);

	this.instance_80 = new lib.Symbol1();
	this.instance_80.setTransform(960,60);

	this.instance_81 = new lib.Symbol1();
	this.instance_81.setTransform(920,60);

	this.instance_82 = new lib.Symbol1();
	this.instance_82.setTransform(880,60);

	this.instance_83 = new lib.Symbol1();
	this.instance_83.setTransform(840,60);

	this.instance_84 = new lib.Symbol1();
	this.instance_84.setTransform(800,60);

	this.instance_85 = new lib.Symbol1();
	this.instance_85.setTransform(760,60);

	this.instance_86 = new lib.Symbol1();
	this.instance_86.setTransform(720,60);

	this.instance_87 = new lib.Symbol1();
	this.instance_87.setTransform(680,60);

	this.instance_88 = new lib.Symbol1();
	this.instance_88.setTransform(640,60);

	this.instance_89 = new lib.Symbol1();
	this.instance_89.setTransform(600,60);

	this.instance_90 = new lib.Symbol1();
	this.instance_90.setTransform(560,60);

	this.instance_91 = new lib.Symbol1();
	this.instance_91.setTransform(520,60);

	this.instance_92 = new lib.Symbol1();
	this.instance_92.setTransform(480,60);

	this.instance_93 = new lib.Symbol1();
	this.instance_93.setTransform(440,60);

	this.instance_94 = new lib.Symbol1();
	this.instance_94.setTransform(400,60);

	this.instance_95 = new lib.Symbol1();
	this.instance_95.setTransform(360,60);

	this.instance_96 = new lib.Symbol1();
	this.instance_96.setTransform(320,60);

	this.instance_97 = new lib.Symbol1();
	this.instance_97.setTransform(280,60);

	this.instance_98 = new lib.Symbol1();
	this.instance_98.setTransform(240,60);

	this.instance_99 = new lib.Symbol1();
	this.instance_99.setTransform(200,60);

	this.instance_100 = new lib.Symbol1();
	this.instance_100.setTransform(160,60);

	this.instance_101 = new lib.Symbol1();
	this.instance_101.setTransform(120,60);

	this.instance_102 = new lib.Symbol1();
	this.instance_102.setTransform(80,60);

	this.instance_103 = new lib.Symbol1();
	this.instance_103.setTransform(40,60);

	this.instance_104 = new lib.Symbol1();
	this.instance_104.setTransform(1020,25);

	this.instance_105 = new lib.Symbol1();
	this.instance_105.setTransform(980,25);

	this.instance_106 = new lib.Symbol1();
	this.instance_106.setTransform(940,25);

	this.instance_107 = new lib.Symbol1();
	this.instance_107.setTransform(900,25);

	this.instance_108 = new lib.Symbol1();
	this.instance_108.setTransform(860,25);

	this.instance_109 = new lib.Symbol1();
	this.instance_109.setTransform(820,25);

	this.instance_110 = new lib.Symbol1();
	this.instance_110.setTransform(780,25);

	this.instance_111 = new lib.Symbol1();
	this.instance_111.setTransform(740,25);

	this.instance_112 = new lib.Symbol1();
	this.instance_112.setTransform(700,25);

	this.instance_113 = new lib.Symbol1();
	this.instance_113.setTransform(660,25);

	this.instance_114 = new lib.Symbol1();
	this.instance_114.setTransform(620,25);

	this.instance_115 = new lib.Symbol1();
	this.instance_115.setTransform(580,25);

	this.instance_116 = new lib.Symbol1();
	this.instance_116.setTransform(540,25);

	this.instance_117 = new lib.Symbol1();
	this.instance_117.setTransform(500,25);

	this.instance_118 = new lib.Symbol1();
	this.instance_118.setTransform(460,25);

	this.instance_119 = new lib.Symbol1();
	this.instance_119.setTransform(420,25);

	this.instance_120 = new lib.Symbol1();
	this.instance_120.setTransform(380,25);

	this.instance_121 = new lib.Symbol1();
	this.instance_121.setTransform(340,25);

	this.instance_122 = new lib.Symbol1();
	this.instance_122.setTransform(300,25);

	this.instance_123 = new lib.Symbol1();
	this.instance_123.setTransform(260,25);

	this.instance_124 = new lib.Symbol1();
	this.instance_124.setTransform(220,25);

	this.instance_125 = new lib.Symbol1();
	this.instance_125.setTransform(180,25);

	this.instance_126 = new lib.Symbol1();
	this.instance_126.setTransform(140,25);

	this.instance_127 = new lib.Symbol1();
	this.instance_127.setTransform(100,25);

	this.instance_128 = new lib.Symbol1();
	this.instance_128.setTransform(60,25);

	this.instance_129 = new lib.Symbol1();
	this.instance_129.setTransform(20,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1060,190);


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
	this.comb.setTransform(-111.7,81.4,0.8,0.8);

	this.ref = new lib.Symbol71();
	this.ref.setTransform(-134.9,62.2,0.8,0.8);

	this.car = new lib.Symbol72();
	this.car.setTransform(-46.9,61,0.7,0.7);

	this.tv = new lib.Symbol73();
	this.tv.setTransform(-5.3,45.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tv},{t:this.car},{t:this.ref},{t:this.comb}]}).wait(1));

	// bingo
	this.bingo = new lib.Symbol25();
	this.bingo.setTransform(-252.3,84.4,0.47,0.47);

	this.bigCircle = new lib.bigCircle();
	this.bigCircle.setTransform(-253.1,74.4,0.517,0.517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bigCircle},{t:this.bingo}]}).wait(1));

	// btn
	this.btn = new lib.Symbol39();
	this.btn.setTransform(145,63.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// sroki
	this.sroki = new lib.Symbol74();
	this.sroki.setTransform(299,61);
	this.sroki.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.sroki).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-311.9,8,661.7,123.4);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var cards = [];
		var cardChosen = r.bingo.c5;
		var knop = document.getElementById("cont");
		
		
		/*TweenMax.to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.0});
		TweenMax.to(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.1});
		TweenMax.to(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2, delay:0.2});
		
		var ty = new TimelineMax();
		ty.to(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2}, 0.0)
		  .to(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2}, 0.1)
		  .to(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.2}, 0.2)
		  ;*/
		
		/*TweenMax.to(r, 18, {alpha:1, onComplete:check18});
		function check18() {
			console.log("18");
		}
		function checkEnd() {
			console.log("End");
		}*/
		
		var tl = new TimelineMax();
		tl.set(r.pBar.mc, {scaleX:0})
		  .set(r.t3, {y:-660})
		  .set(r.t4, {y:-660})
		  .set(r.scend, {y:-1660})
		  .set(r.term, {y:915})
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
		  .to(r.bingo.c1, 1.2, {x:-213, y:-72, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.0)
		  .to(r.bingo.c2, 1.2, {x:-104, y:-4, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.03)
		  .to(r.bingo.c3, 1.2, {x:1, y:-72, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.06)
		  .to(r.bingo.c4, 1.2, {x:109, y:-5, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.09)
		  .to(r.bingo.c5, 1.2, {x:218, y:-74, rotation:0, scaleX:1, scaleY:1, ease:Back.easeInOut}, 3.12)
		  
		  .staggerTo([r.bingo.c1.btn, r.bingo.c2.btn, r.bingo.c3.btn, r.bingo.c4.btn, r.bingo.c5.btn], 0.1, {alpha:1, ease:Power0.easeNone}, 0.00, 3.7)
		  .from(r.t2.t1, 1.0, {x:"+=100", alpha:0, ease:Expo.easeOut}, 3.7)
		  .from(r.t2.t2, 1.4, {x:"+=100", alpha:0, ease:Expo.easeOut}, 3.75)
		  
		  .set(knop, {width:"0px"}, 4.3)
		  .from(r.cur, 1.0, {scaleX:0, scaleY:0, y:"+=30", ease:Expo.easeOut}, 4.3)
		  .from(r.pBar, 1.0, {y:"+=20", alpha:0, ease:Expo.easeOut}, 4.3)
		  .from(r.pBar.mc2, 1.0, {scaleX:0, ease:Expo.easeInOut}, 4.3)
		  .call(userReaction)
		  
		  ;
		
		
		
		function userReaction() {
			//console.log("choose it!")
			TweenMax.to(r.cur, 0.8, {x:"-=30", y:"-=20", rotation:"-=20", yoyo:true, repeat:10, repeatDelay:0.0, ease:Sine.easeInOut})
			TweenMax.to(r.pBar.mc, 6.0, {scaleX:1, ease:Power0.easeNone, onComplete:endPBar})
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
			TweenMax.killTweensOf(r.cur);
			TweenMax.to(r.cur, 0.4, {y:"+=250", rotation:"-=60", ease:Expo.easeIn})
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
			knop.style.width = "728px";
			TweenMax.set(r.btnMain, {scaleX:0})
			//console.log(cardChosen);
			TweenMax.killTweensOf(r.cur);
			TweenMax.killTweensOf(r.pBar.mc);
			TweenMax.to(r.cur, 0.4, {y:"+=250", rotation:"-=60", ease:Expo.easeIn});
			r.btnMain.removeEventListener("rollover", hideCur);
			//console.log("second part begins");
			var tm = new TimelineMax();
			tm.set(r.t3, {x:162, y:0})
			  .set(r.t4, {x:162, y:0})
			  .set(r.scend, {y:-60})
			  .set(r.term, {x:-68, y:16})
			  .staggerTo(cards, 0.4, {y:"-=350", ease:Expo.easeIn}, 0.05, 0.0)
			  .staggerTo([r.pBar, r.t2.t2, r.t2.t1], 0.2, {y:"+=140", ease:Expo.easeIn}, 0.03, 0.0)
			  .staggerTo([r.bingo.c1.btn, r.bingo.c2.btn, r.bingo.c3.btn, r.bingo.c4.btn, r.bingo.c5.btn], 0.1, {alpha:0, ease:Power0.easeNone}, 0.00, 0.0)
			  .staggerTo([r.scend.bingo.c1.btn, r.scend.bingo.c2.btn, r.scend.bingo.c3.btn, r.scend.bingo.c4.btn, r.scend.bingo.c5.btn], 0.1, {alpha:0, ease:Power0.easeNone}, 0.00, 0.0)
			  .to(cardChosen, 1.3, {x:237, y:-15, rotation:"+=360", ease:Back.easeInOut, overwrite:true}, 0.0)
			  .staggerFrom([r.t3.t1, r.t3.t2], 1.0, {x:"+=200", alpha:0.0, ease:Expo.easeOut}, 0.07, 0.5)
			  .from(r.term, 0.8, {x:"+=200", y:"+=800", rotation:"-=90", ease:Expo.easeOut}, 0.5)
			  .to(r.wifi, 0.5, {alpha:1, ease:Power0.easeNone}, 1.3)
			  .from(r.wifi.w1, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.3)
			  .from(r.wifi.w2, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.4)
			  .from(r.wifi.w3, 0.2, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:8, repeatDelay:0.2}, 1.5)
			  
			  .staggerTo([r.t3.t1, r.t3.t2], 0.5, {y:0, scaleX:0, scaleY:0, ease:Back.easeIn}, 0.06, 3.0)
			  .to(r.term, 1.2, {scaleX:0.7, scaleY:0.7, y:"+=34", ease:Expo.easeInOut}, 3.0)
			  .to(r.wifi, 0.3, {alpha:0, ease:Power0.easeNone}, 3.0)
			  .to(cardChosen, 0.5, {scaleX:0, scaleY:0, ease:Back.easeIn}, 3.0)
			  .to(r.term.bingo, 0.1, {alpha:0, ease:Power0.easeNone, yoyo:true, repeat:-1, repeatDelay:0.4}, 3.5)
			  .to(r.term.price, 0.2, {alpha:0, ease:Power0.easeNone}, 3.5)
			  .staggerFrom([r.t4.t1, r.t4.t2, r.t4.t3], 1.0, {y:"+=80", alpha:0.0, scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.07, 3.5)
			  
			  .staggerTo([r.term, r.t4.t3, r.t4.t2, r.t4.t1], 0.5, {y:"+=600", ease:Expo.easeIn}, 0.04, 5.5)
			  
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
			  /*.to(r.scend.btn.mc, 0.2, {y:0, ease:Power0.easeNone}, 8.5)
			  .to(r.scend.btn.mc, 0.2, {y:"-=5", ease:Power0.easeNone}, 9.0)*/
			  
			  //.call(setPause)
			  .to(r.blk, 0.6, {alpha:1, ease:Power0.easeNone, onComplete:restart}, 70)
			;
			
		}
		
		function setPause() {
			//ty.pause();
		}
		
		function restart() {
			//var cards = [];
			//var cardChosen = r.bingo.c5;
			TweenMax.staggerTo([r.t4.t3, r.t4.t2, r.t4.t1], 0.1, {y:"-=600"}, 0.0)
			TweenMax.staggerTo([r.pBar, r.t2.t2, r.t2.t1], 0.1, {y:"-=140"}, 0.0)
			TweenMax.set(r.cur, {rotation:0, x:80, y:24})
			TweenMax.set(r.term, {scaleX:0.4, scaleY:0.4})
			TweenMax.set(r.term.bingo, {alpha:1})
			TweenMax.set(r.term.price, {alpha:1})
			TweenMax.set(r.t3.t1, {y:-18, scaleX:1, scaleY:1})
			TweenMax.set(r.t3.t2, {y:25, scaleX:1, scaleY:1})
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
				  TweenMax.from(z[currObj], 2.0, {scaleX:0, scaleY:0, rotation:"+=0", y:"+=100", /*alpha:0, */ease:Elastic.easeOut.config(0.9,0.6), delay:(i-56)*0.005+0.0});
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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,3.033,0.225);
	this.blk.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// scend
	this.scend = new lib.Symbol67();
	this.scend.setTransform(0,-60,1,1,0,0,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.scend).wait(1));

	// pBar
	this.pBar = new lib.pBar();
	this.pBar.setTransform(180.1,39,0.532,0.5);

	this.timeline.addTween(cjs.Tween.get(this.pBar).wait(1));

	// t1
	this.t1 = new lib.t1();
	this.t1.setTransform(130,6,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.t2();
	this.t2.setTransform(180.1,1.8,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// hand cursors
	this.cur = new lib.cursor();
	this.cur.setTransform(80,24);

	this.timeline.addTween(cjs.Tween.get(this.cur).wait(1));

	// t3
	this.t3 = new lib.Symbol54();
	this.t3.setTransform(162,0,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// wifi
	this.wifi = new lib.Symbol59();
	this.wifi.setTransform(10,-21.5,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.wifi).wait(1));

	// bingo
	this.bingo = new lib.Symbol25();
	this.bingo.setTransform(-98.3,20.3,0.45,0.45);

	this.bigCircle = new lib.bigCircle();
	this.bigCircle.setTransform(-98.3,1.8,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bigCircle},{t:this.bingo}]}).wait(1));

	// term
	this.term = new lib.Symbol57();
	this.term.setTransform(-68,16,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.term).wait(1));

	// t4
	this.t4 = new lib.Symbol54copy();
	this.t4.setTransform(162,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.t4).wait(1));

	// btnMain
	this.btnMain = new lib.link();
	this.btnMain.setTransform(0,0,1.137,0.225);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// bg
	this.bg = new lib.Symbol2();
	this.bg.setTransform(-404.5,-61.8,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.5,-242,1252.5,481);


// stage content:
(lib.mtb_728x90 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg42AHBIAAuBMBxtAAAIAAOBg");
	mask.setTransform(364,45);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(364,45);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;