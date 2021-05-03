let score = 0;
let t;
let p;

function setup() {
	createCanvas(600, 600);
	background(220);
	t = new Target(30, 0);

	//create player 
	p = new Player();
		//player = createSprite(300, 580, 20, 20);
		//player.shapeColor = color(0, 255, 255);
}

function draw() {
	background(220);	

	t.display();

	/*if(mouseX < 0){
		player.position.x = 0;
	} else if (mouseX > 580) {
		player.position.x = 580;
	}*/
	//player.drawSprites();

	position = mouseX;
	if(mouseX < 0){
		position = 0;
	} else if (mouseX > 560) {
		position = 560;
	}
	p.display(position);
}
