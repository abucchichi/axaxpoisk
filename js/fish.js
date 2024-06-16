'use strict'
function Fish(image, type) {
    this.img = image['fish' + type];
    this.w = this.img.width; // Adjust this if your fish image has multiple frames in a sprite sheet
    this.h = this.img.height; // Adjust this if your fish image has multiple frames in a sprite sheet
    this.x = 0;
    this.y = 0;
    this.r = 0; // Rotation if needed
    this.speed = Math.random() * 2 + 1;
}

Fish.prototype.move = function() {
    var rad = this.r * Math.PI / 180;
    this.x += Math.cos(rad) * this.speed;
    this.y += Math.sin(rad) * this.speed;
};

Fish.prototype.draw = function(gd) {
    gd.save();
    gd.translate(this.x, this.y);
    gd.rotate(this.r * Math.PI / 180);
    gd.drawImage(this.img, -this.w / 2, -this.h / 2, this.w, this.h);
    gd.restore();
};

Fish.prototype = new Sprite();
Fish.prototype.swimming = function(){
	if(this.life>0){
		this.sx+=this.w;
		if(this.sx>=this.w*4){
			this.sx = 0;
		}	
	}
	// else{
	// 	//如果死了，sx从
	// 	if(this.sx<this.w*5){
	// 		this.sx=this.w*5;
	// 	}
	// 	this.sx+=this.w;
	// 	if(this.sx>=this.w*8){
	// 		this.sx=this.w*5;
	// 	}
	// }
	
};
Fish.prototype.deaded=function(){

	if(this.sx<this.w*5){
		this.sx=this.w*5;
	}
	this.sx+=this.w;
	if(this.sx>=this.w*8){
		this.sx=this.w*5;
	}	
}