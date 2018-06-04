function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;

	this.update = function (){
		this.x += this.xspeed * scl;
		this.y += this.yspeed * scl;

		this.x = constrain( this.x, 0, width - scl);
		this.y = constrain( this.y, 0, height - scl);
	}

	this.show = function (){
		fill(255);
		rect( this.x, this.y, scl, scl);
	}

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}
}