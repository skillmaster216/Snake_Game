var snake;
var fruit;
var eated = false;
/*
	Note: don't use var area, scale or 
*/
var scl = 40;

function setup(){
	createCanvas( 400,400);
	snake = new Snake();
	fruit = new fruit();
	frameRate(10);
	fruit.pickLocation(width,height);
}


function draw(){
	background( 60);

	snake.update();
	snake.show();
	if( snake.eat()){
		fruit.pickLocation();
	}
	fruit.show();
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