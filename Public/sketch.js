var snake; 
/*
	Note: don't use var area, scale or 
*/
var scl = 40;

function setup(){
	createCanvas( 400,400);
	snake = new Snake();
	frameRate(10);
}


function draw(){
	background( 60);

	snake.update();
	snake.show();
}

function keyPressed(){
	if( keyCode === UP_ARROW){
		snake.dir( 0, -1);
	}else if( keyCode === DOWN_ARROW){
		snake.dir( 0, 1);
	}else if( keyCode === LEFT_ARROW){
		snake.dir( -1, 0);
	}else if( keyCode === RIGHT_ARROW){
		snake.dir( 1, 0);
	}
}