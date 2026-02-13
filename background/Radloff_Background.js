(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Radloff_Background_atlas_1", frames: [[0,0,847,731]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Radloff_Background_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2227,1384);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-229.9,-466.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFL/FICaAAIAAERAnk0mIAAqfIMJAAAHl6CMAAAA5IIvJAAMAAAgzE");
	this.shape.setTransform(-1.85,15.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AgubLIgUAAIgLAAIg9gDQhwgGhwgTQiLgXiEg2QiHg4h1hYQhXhBg0heQhGh9gJiNQgEgzAAg0IgHADIgHADIgHAEIgGADIgIADIgHAEIgJAEIgIADIgIADIgJACIgIACQhiArhpADQiEAEiFgDQhcgDhbgOQh5gThsg8Qhqg7hEhkQgxhJgjhSIgMhHQgIgsAAgsQABgpAHgoQAHgqAQgpQANgkAMglQALgjAagYIAFgFIADgFIAEgFIADgFIAHgGIAHgHIAHgEIAHgEIAFgDIAFgDIAFgEIAGgDQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAgBAAIgGgDIgHgEIgGgDIgIgDIgIgEQg6gPg3gYQg8gbg1glQg1gmgpgyQgngvgHg8QgEgvgCgvQgBg3AJg2IADgIIAEgJIAEgIIADgJIAEgJIACgGIACgGIADgJIAEgIIAFgHIAEgFIAEgFIAGgHIAGgHIAFgHIAEgFIADgFIAEgGIADgHIAEgGIAMgRIAPgTIARgUIASgRIAWgSQAJgIAHgJIAQgTQA2gkA3gjQA/gnBHgZQBRgdBNglQBEggBKgBICeAAIA8AAIAAhxQAAg8ADg7QADhAAGhAQAGg6ALg4QALg7Abg2IAWguQBDhNBhgZQBtgbBvABIDqADQB+ABB6AlQAvAOAtAWQBJAmA9A4IAEAGIAEAGIADAGIAEAGIACAGIADAFIAEAHIAEAHIAEAIIAEAHIADAIIADAHIACAIIABAIIABAHIAAAGQBihkB0hPQCAhWCOg3QBSgfBYgDQCpgGCoAKQBQAFBPAQQClAhCOBXQAfATAaAZQAnAmAZAxIACAHIACAGIABAKIgBAJIgBAIIgCAHIgCAHIgCAKIgCAJIgCAJIgBAIIAAAIIgBAKIgCAJIgBAGIgDAFIgDAHIgEAGIgBADIAAABIgBACIgDAHIgCAFIgBADIgCAEIAEgCIAHgCQCNgECOAJQArADAqAMQCZAsCNBLQCPBMBvB2QBuB2gCChQgBBaghBWQg6CXh2B0Qg0A0hBAkIABAAIAJACQBdARBaAiQBiAmBgApQBgAoBSA/QAsAiAqAjQAnAiAZAtQA1BggHBuQgCAsgGAsIgCAHQgjBEhBArQhKAxhUAdQhZAghbAXQhjAZhhAfQhiAghmgBIg/AAIADAEIAFAIIAGAHIAFAIIADAIIAEAIIADAHIAFAIIAEAHIARAUQAHAKAGALQAEALADAMQACALAAAMIAAAdIgDAbIgBAJQgoBphJBZQhRBjhtBAQh2BFiMgNQhqgKhhgoQg+gZg5ghQgcgQgagSQhUg5hChOQgTgXgSgYIgCgHIgCgHIgBgIIgBgHQggBHgtBBQgtBBg4A3Qg6A5g4A7Qg4A7hEAtIhgBBQgwAhg1AXIgQADIgPACIgUAAIgKAAIgKAAgAiKahIAAqfIMKAAIsKAAgAM/USIAAkQIiaAAICaAAgAaVTHIABAAIABgCIgCACgAKnR7IAAgBIAAAAIAAABg");
	this.shape_1.setTransform(-36.4749,-286.5118);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AnkeOMAAAgzEIA9ADIAKAAIAVAAIAUAAIAUAAIAPgCIARgDQA1gXAvghIBghBQBEgtA4g7QA4g7A6g5QA4g3AthBQAshBAhhHIAAAHIACAIIACAHIACAHQASAYASAXQBDBOBUA5MAAAA5IgAFN+EIAAAAIAAABIAAgBg");
	this.shape_2.setTransform(-1.85,20.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Tree, new cjs.Rectangle(-296.7,-466.3,520.5,681.3), null);


(lib.TallGrass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TallGrass, new cjs.Rectangle(0,0,1113.5,692), null);


(lib.RollingHills = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339900").s().p("AfteeQi3gRlwgxI8HjyQACgJgDgJQgDgKgHgFIwhgNQjDgDhiABQijACiBALQiqAOjsApQkOAxiGAYQnuBVk8gcQjGgSjlhBQirgwj0hcQkKhlj0hpQg2gXgagOQgrgYgcgbQgcgagXgnQgSgdgUguQiwmHgIomQgDjRAWitQAbjKA+ipQAziHBqi9ICyk7QBfi2ApibQAyi+gailIgBgEQBRgkBZgUQCjglChAZQCiAZCQBUQCRBUBlCAIAlAvQAVAaASARQAuhMBdg2QBHgpBtghQEjhZDxATQCLAKB8AuQCEAxBkBVQCqCOBsEPQDWgyCZAAQDLAACRBSQBbAzBkBrQA5A9BvB+QAXAZARAMQAYARAYADQAdADAigRQARgJAngcQEOjFFigIQFhgHEWC5QB7hxC1gDQC1gCB+BtQBtBeA8CrQAmBvAgDQQC2hIBxgaQCnglCIAZQB9AXBrBOQBrBNA9BwQDEheDZgEQCBgDBnArQB3AxAtBjQCTjND/hSQEAhSDuBSQA3isCBiIQCAiJCphCQCPg4C8gJQEdgNB6CMIAHAHQgHBEAMBVIAiC0QAyELgNE+QgLD+g2FMQgaCigaBrQgjCRgxByQg5CFhQBoQhZByhuBHQiHBWjeAwQkFA5mHAOQm4AJjbANQg6ADjoATQizAPhwADQgzACg2AAQjNAAj0gXg");
	this.shape.setTransform(552.1356,200.2611);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CC00").s().p("EAjeAfBQkfgNllgpQjSgZmwg7IzTipQgPgCgLgIQgNgJAFgMIwbgOQi9gDhlABQigACiBALQiaANjKAiIliBCQm7BRkMgDQmJgFnSieQkihioQj0IBbC5Qj3iqkfhbQC/gbC1A/QjXnhgfnqQgjoSC+m6QAxhwBji0QB2jVAlhLQBRilAliOQAsirgQiXQg8BqgdB4QgdB5AGB6QglhyAkiSQAUhPA1h6QgiASghAWQghAWgOAHQgcANgXgCQBUhKBkgxIAFgKQAFgPAQAMIAAAAQA7gaA/gTQC7g4C9AaQC9AaCmBoQCmBoBpCfQB4hpCmhAQCVg4CygWQDAgXCcAbQDsAqC+CiQC/CiBPDiQDDg3CpAEQDGAECTBWQBbA1BnBsQA6A9ByB/QAUAVAQAKQAVAPAWABQAVACAZgOQAOgHAbgVQD4i6FDgdQFCgdEVCLQAoAUARAGQAgAMAbgBQAYgBAdgNIAygZQBvg4BuADQB1ADBsBEQBmBABFBoQB0CtAYEZQCAg3BDgWQBvglBdgHQCWgMCPA8QCQA9BhBzQAXAcANALQAWATAWADQAVACAagMQAPgHAdgRQAogVA5gJQAjgFBEgDQBagEAtABQBLACA6AOQBFARA3AmQA7AoAdA5QCai+D2hPQD3hPDsBCQBAimCAiDQCAiCCkhFQCjhDDAgFQCMgEBxAnQCDAtBGBgQgIANgSgHQgGgCgFgEQBSF/AFGKQAFGehPGUQg4EfhiDHQh6D6jCCAQheA+h+ApQhlAhiJAYQiIAYitAPQhnAJjQANQoKAfkFAIQjLAHi5AAQjRAAi5gJgA0tZEIQhANQAHAGADAJQAEAJgDAJIcHDyQFwAxC4ASQEzAcD3gHQBwgECygOQDogTA7gEQDbgNG3gIQGHgPEFg5QDegwCHhWQBvhGBYhzQBRhoA4iEQAxhzAjiRQAahrAbihQA2lNAKj+QANk9gykLIghi1QgMhVAHhDIgHgIQh7iMkdAOQi8AJiPA4QipBCiACIQiACIg3CtQjvhSj/BSQkABRiSDNQguhih3gyQhmgqiCACQjZAEjDBfQg9hwhrhOQhrhNh+gYQiIgZinAmQhxAai1BHQghjQgmhvQg7irhtheQh/hti0ADQi1ADh7BxQkXi6lgAIQliAHkODGQgnAcgSAJQghARgdgEQgYgCgZgSQgQgMgYgYQhuh/g6g9QhkhrhagzQiRhSjLABQiZAAjWAyQhtkPipiPQhkhUiEgxQh8guiMgLQjwgTkjBZQhuAihHApQhcA2guBLQgSgQgWgbIgkguQhmiAiQhVQiRhUihgZQiigYijAkQhZAUhQAlIAAADQAaClgyC+QgoCchfC1IiyE7QhrC9gyCHQg/CpgaDLQgXCtAEDRQAHImCwGHQAVAtARAdQAYAnAbAbQAdAbAqAXQAbAOA1AYQD0BpELBlQDzBbCrAxQDmBADGASQE8AdHthWQCHgXENgyQDtgpCpgOQCCgKCjgCIA/AAIDlABgEhQqAVBQAtAaBgA8QAZAQAPAAIg3hcQgMgUgKgIQgIgGgSgFQhwgghygLQBEAbBQAtg");
	this.shape_1.setTransform(545.69,199.4019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.RollingHills, new cjs.Rectangle(0,0,1091.4,398.9), null);


(lib.REALplaneshape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADsF6QgHgIAAgWIABgrIgFgBIhvgKQh1gKibAFQg/ACjSAOQleAXjCggQgWgEgHgIQgIgJABgUQACgagCgGQhGgghNASQgcAGgKgIQgHgHgBgMQAAgIADgPQAGgrgOgoQgIgVAIgIQAFgFAPAAIDVAIQgTiSABiXQAAgogCgRQgDgggKgWQgIgSADgHQAHgOAZAFIBiAOQAaAEAKAGQAQAJASAgIBLCGQAGAJAAAJIAAABIAIgCIASgEQALgBAIACQALAEALASIAQAaQAKgDAVAEQBTAQBrACQA9ABCCgFQJ4gYJagDQAdAAAOABQAYADASAIQAiARAeA0QAoBFAMAOIAMAPQAGAKgBAIQgBAJgLANQgtAygcAYQgrAmgqARQgbALgkAFQgXAEgqADIi0APIAPBRQADATgHAHQgGAHgRAAQjdACjhAXIgLABQgXAAgIgLgAD4EIQAGACADALQADADAAAEQABAFgCAEQACAhgCAdIHPgaQgQgrAAgvQABgPAFgFQAGgGAOAAIBmgFQBCgEAhgEQA2gGAqgPQAxgQAmgeQApghASgrQgLgQgNgaIgWgrQgcg1gngOQgRgGglgBQjtgFkgAGQjLAFlAANQjNAIhjAAQifAAh/gOIAPAdQAfA3AeAbQAPANgEAKQgCAEgFADQgFACgFgBQgIgCgKgKQgdgeghg6QgrhMgOgUQguALgugBQAPAoAGAlIAGAjQAGAhAUBDIAPAyQADALAAAFQgBALgIACQgIADgIgIQgEgGgDgKQgghogMhDQgHgogDgMQgIgcgPgSQgJgLAAgGQAAgJALgFQAFgDANAAIApAAIAHAAIgDgFIhgilQg3gDg8gOIAZGgQABANgEAGQgGAHgSgBIjFgGIABBbQBdgJBZAgQAPAFACAIQADAIgLATQgIAPAHAGQAyARBAAGQAsAEBJAAQDlgBDkgQQCRgKAkgBQBmgFBOAIIBPAJQAtAEAhgCIALgBQAEgFAFAAIADAAgAK+AEQgFgFACgHQACgIAHgEQAJgFASAAIAxAAQANAAAFAEQAEAEAAAGQABAHgEAEQgGAFgOAAIgcAAQgRABgLACIgKAAQgLAAgEgEgAOsAEQgKAAgFgCQgFgDgBgHQgBgHAFgFQAFgFAPAAIA1AAQARAAAFAGQAEAFgBAHQgBAHgFACQgFACgKAAgAHXAAQgLAAgEgCQgFgDgCgGQgCgHAEgEQAFgIARAAIAzAAQAMAAAFAEQAGAEAAAIQgBAIgGAEQgFACgKAAgACHAAQgKAAgEgBQgIgEgCgGQgBgEACgFQADgFAFgCQAGgDAOAAIA+AAQAQAAAGAHQADAEAAAGQgBAFgDAEQgFAEgPAAgAjCAAQgKAAgEgBQgIgEgCgGQgBgEACgFQADgFAFgCQAGgDAOAAIA+AAQAQAAAGAHQADAEAAAGQgBAFgDAEQgFAEgPAAgAnWAAQgNAAgGgCQgLgFACgKQABgIAJgDQAEgCALAAIBNAAQAOAAAFAFQAFAEAAAHQgBAHgFAEQgFADgLAAg");
	this.shape.setTransform(121.4271,38.8469);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AECEkQABgDAAgFQgBgEgCgDQgDgMgHgBQgHgCgFAHIgKAAQghADgugFIhPgIQhNgIhnAEQgjACiSAKQjkAQjkAAQhJABgsgEQhBgGgxgRQgHgGAIgQQALgTgDgHQgCgIgPgGQhZgghdAJIgBhbIDFAHQASABAFgIQAFgFgBgOIgZmfQA8ANA3AEIBfClIADAFIgGAAIgqAAQgMAAgGACQgKAGAAAJQAAAGAJALQAPARAHAdQAEAMAHAoQAMBCAgBpQACAKAFAFQAHAJAJgDQAIgCAAgLQABgGgDgLIgPgxQgUhDgGgiIgGgiQgGgmgQgnQAvABAugLQAOAUArBLQAgA7AeAdQAKAKAIACQAFABAFgCQAFgCACgFQADgJgOgNQgegbgfg4IgPgcQB/AOCfAAQBigBDNgIQFBgNDLgEQEfgGDuAEQAlABARAHQAnAOAcA1IAWAqQANAaALAQQgSArgpAhQgmAegyARQgpAOg2AHQghAEhCADIhnAGQgOAAgFAGQgFAFgCAOQAAAwARAqInPAaQABgdgBghgALDgUQgHAEgCAHQgCAIAFAEQAFAHAUgDQALgCARAAIAcgBQAOAAAGgFQADgEAAgGQgBgGgDgEQgFgEgNAAIgxgBQgTAAgIAGgAOZgUQgEAEABAIQABAHAFACQAFADAJAAIA9AAQAKAAAFgDQAFgCABgHQABgHgEgEQgFgGgRAAIg1AAQgPAAgGAFgAHCgXQgEAFACAGQABAGAGADQAEADALAAIA1AAQALAAAFgDQAFgEACgHQgBgJgFgEQgFgDgNAAIgzAAQgRAAgEAHgAB2gcQgEADgDAEQgCAFAAAFQADAGAHADQAFACAKAAIBEAAQAOAAAGgFQADgDAAgGQABgFgDgEQgGgHgRAAIg+gBQgNAAgHADgAjSgcQgFADgDAEQgDAFACAFQABAGAJADQAEACAJAAIBFAAQAPAAAFgFQADgDAAgGQABgFgDgEQgGgHgQAAIg+gBQgOAAgGADgAnpgcQgJADgCAIQgBAKALAEQAFADAOAAIBMAAQALAAAFgEQAFgDAAgHQABgHgFgEQgFgFgOAAIhOAAQgKAAgEACg");
	this.shape_1.setTransform(121.55,38.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.REALplaneshape, new cjs.Rectangle(0,0,242.9,77.7), null);


(lib.Paperplane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AoxORIomrGIlYRkA4LgNMAwXgUhMgpjAX5");
	this.shape.setTransform(-161.8,132.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("A5irFMAzFgKyMgY2ArvIoHowIt+GfIhMAjIAAgjIAA0EIgQg5g");
	this.shape_1.setTransform(-170.5,139.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnaNIIomrGMApjgX5MgY2ArvgA2kTnIAA0EIgQg5MAwXgUhMgpjAX5IlYRlgAwACCIImLGIt+GfgAnaNIgAwACCgA20hWIiupvMAzFgKyMgwXAUhg");
	this.shape_2.setTransform(-170.5,139.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("A4NFtMAvTgK6QAAAAABAAQAlAigFgwQAnAmAAg3");
	this.shape_3.setTransform(-161.975,36.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(10,1,1).p("Afkn4IglgDMg4wgEzIlySHIOsh4IA8JOMAuYgUIIAAAAIAggOg");
	this.shape_4.setTransform(-208.975,50.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AwkDhIusB4IFyyHMA4vAEzIgCAUIggAOIAAgBMgvTAK7MAvTgK7IAAABMguXAUIg");
	this.shape_5.setTransform(-210.8375,50.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},6).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-415.9,-35.9,413.9,320.9);


(lib.BigBush = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EApuAAAQAALbsOIFQsOIFxSAAQxRAAsOoFQsOoFAArbQAAraMOoFQMOoFRRAAQRSAAMOIFQMOIFAALag");
	this.shape.setTransform(-3,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339900").s().p("A9fTgQsOoFAArbQAAraMOoFQMOoFRRAAQRSAAMOIFQMOIFAALaQAALbsOIFQsOIFxSAAQxRAAsOoFg");
	this.shape_1.setTransform(-3,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BigBush, new cjs.Rectangle(-271,-183,536,355), null);


(lib.REALplane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.REALplaneshape();
	this.instance.setTransform(-203.9,-2.55,1,1,0,0,0,121.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:38.8,x:-163.25,y:20.1},0).wait(1).to({x:-122.3,y:41.7},0).wait(1).to({x:-81.05,y:62.25},0).wait(1).to({x:-39.55,y:81.7},0).wait(1).to({x:2.25,y:100},0).wait(1).to({x:44.3,y:117.25},0).wait(1).to({x:86.7,y:133.35},0).wait(1).to({x:129.3,y:148.4},0).wait(1).to({x:172.25,y:162.3},0).wait(1).to({x:215.5,y:175.15},0).wait(1).to({x:259.05,y:186.9},0).wait(1).to({x:302.85,y:197.5},0).wait(1).to({x:347,y:207.05},0).wait(1).to({x:391.4,y:215.5},0).wait(1).to({x:436.15,y:222.85},0).wait(1).to({x:481.15,y:229.1},0).wait(1).to({x:526.45,y:234.25},0).wait(1).to({x:572.1,y:238.3},0).wait(1).to({x:618,y:241.25},0).wait(1).to({x:664.25,y:243.1},0).wait(1).to({x:710.75,y:243.85},0).wait(1).to({x:757.6,y:243.5},0).wait(1).to({x:804.75,y:242.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-325.3,-41.4,1251.5,324.2);


(lib.Papeplaneflying = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Paperplane();
	this.instance.setTransform(-442,-189.9,0.407,0.3718,0,0,0,-170.4,138.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-209,regY:124.5,x:-411.25,y:-230.65},0).wait(1).to({x:-366.35,y:-262.7},0).wait(1).to({x:-322.9,y:-291.15},0).wait(1).to({x:-281,y:-316},0).wait(1).to({x:-240.55,y:-337.25},0).wait(1).to({x:-201.65,y:-354.95},0).wait(1).to({x:-164.2,y:-369},0).wait(1).to({x:-128.25,y:-379.55},0).wait(1).to({x:-93.8,y:-386.45},0).wait(1).to({x:-60.9,y:-389.8},0).wait(1).to({x:-29.4,y:-389.55},0).wait(1).to({x:0.6,y:-385.7},0).wait(1).to({x:29.1,y:-378.3},0).wait(1).to({x:56.1,y:-367.3},0).wait(1).to({x:81.65,y:-352.75},0).wait(1).to({x:105.7,y:-334.6},0).wait(1).to({x:128.25,y:-312.85},0).wait(1).to({x:149.35,y:-287.55},0).wait(1).to({x:168.9,y:-258.6},0).wait(1).to({x:187.05,y:-226.1},0).wait(1).to({x:203.65,y:-190},0).wait(1).to({x:218.8,y:-150.3},0).wait(1).to({x:232.45,y:-107},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-510.6,-438,827.2,390.7);


// stage content:
(lib.Radloff_Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Tall_Grass
	this.instance = new lib.TallGrass();
	this.instance.setTransform(422.6,356.05,1,1,0,0,0,556.6,345.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// big_bush
	this.instance_1 = new lib.BigBush();
	this.instance_1.setTransform(707,587.15,0.7902,0.9017,0,0,0,-3,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Paper_Plane
	this.instance_2 = new lib.Papeplaneflying();
	this.instance_2.setTransform(281.05,349.65,1,1,0,0,0,-233,-254.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Tree
	this.instance_3 = new lib.Tree();
	this.instance_3.setTransform(477.35,375.95,0.7387,0.7767,0,0,0,-36.5,-126);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Real_Plane
	this.instance_4 = new lib.REALplane();
	this.instance_4.setTransform(180.7,90.7,1,1,0,0,0,121.4,38.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// rolling_hills
	this.instance_5 = new lib.RollingHills();
	this.instance_5.setTransform(475.2,486.25,1,1,0,0,0,545.7,199.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhSEg4BMCkJAAAMAAABwDMikJAAAg");
	this.shape.setTransform(481.3,322.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#005EFF","#FFFFFF"],[0,1],370,372.2,-369.9,-372.2).s().p("EhSDA4CMAAAhwDMCkIAAAMAAABwDg");
	this.shape_1.setTransform(481.3,322.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(214,283.1,806.9,463.69999999999993);
// library properties:
lib.properties = {
	id: 'F987BBE3CF5C485CA6F7B22B61C98368',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1770946957562", id:"CachedBmp_1"},
		{src:"images/Radloff_Background_atlas_1.png?1770946957555", id:"Radloff_Background_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F987BBE3CF5C485CA6F7B22B61C98368'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;