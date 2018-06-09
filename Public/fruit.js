function fruit() {
	this.x;
	this.y;
	//this.eated = false;

	this.pickLocation = () => {
		this.x = ~~(( Math.random() * (width - scl))/scl) * scl;
		this.y = ~~(( Math.random() * (height - scl))/scl) * scl;
	}

	this.show = () => {
		fill( 127, 0, 25);
		rect( this.x, this.y, scl, scl);
	}
	
}