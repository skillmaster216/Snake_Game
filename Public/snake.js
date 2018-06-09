function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 0;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.update = () => {
		if( this.total === this.tail.length){
			for( let i = 0; i < this.tail.length - 1; i++){
				this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total - 1] = [this.x, this.y];

		this.x += this.xspeed * scl;
		this.y += this.yspeed * scl;

		this.x = constrain( this.x, 0, width - scl);
		this.y = constrain( this.y, 0, height - scl);
	}

	this.show = () => {
		fill(255);
		rect( this.x, this.y, scl, scl);
		for( let tail of this.tail){
			rect( tail[0], tail[1], scl, scl);
		}
	}

	this.dir = (x, y) => {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = () => {
		if( dist( this.x, this.y, fruit.x, fruit.y) < 1){ 
			this.total++;
			return true;
		}
		return false;
	}
}