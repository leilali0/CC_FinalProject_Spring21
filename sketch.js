let score = 0;
let t;
let p;
let position;
let bullets = [];
let targets = [];
let targetNum = 2;
let timer = 1;

let next;

//credit: https://editor.p5js.org/carrefinho/sketches/Sk7ZvoMn7

function setup() {
	createCanvas(600, 600);
	background(220);

	//create player 
	p = new Player();

	// start with one target 
	targets.push(new Target(random(30, 570)));

	//create next buttons 
	next = createButton('Next');
	next.hide();
}

function story(){

}

//press any key to fire 
function keyPressed(){
	//push space bar the fired bullet to the array 
	if(keyCode == 32){
		bullets.push(new Bullet(position + 20));
	}

}

function draw() {
	background(220);

	playerPosition();

	//add targets
	addTargets();

	//display and update tagerts
	displayTargerts();

	//check if fired bullets hit any target 
	check();
}

//add targets
function addTargets(){
	timer += 1;
	if(timer % 300 == 0) {
		targetNum += 1;
		for(let i = 0; i < targetNum; i++){
			targets.push(new Target(random(30, 570))); // add new tagert with random position 
		} 
	}
}

//display and update tagerts
function displayTargerts(){
	for(let j = 0; j < targets.length; j++){
		targets[j].display();
		targets[j].update();

		if(targets[j].outOfBounds()) { // out of bounds 
			targets.splice(j, 1); 
		}
	}
}

//move player with mouse 
function playerPosition(){
	position = mouseX;
	if(mouseX < 0){
		position = 0;
	} else if (mouseX > 560) {
		position = 560;
	}
	p.display(position);
}

//keeping track of fired bullets
function check(){
	for(let i = 0; i < bullets.length; i++){
		//display bullets 
		bullets[i].display();
		bullets[i].update();

		//get bullet coordinate 
		let y = bullets[i].posY();

		if(y <= 0) { //out of bounds
			bullets.splice(i, 1); //remove bullet from the array
		} else { // check if the bullet hit any target 
			// x coordinate of the bullet
			let x = bullets[i].posX(); 

			for(let j = 0; j < targets.length; j++){
				if(targets[j].hit(x, y)){ // check if hit a target 
					if(targets[j].isTarget()){ // check if it is a target 
						bullets.splice(i, 1);
						targets.splice(j, 1);
						score++;
					} else {
						//game over
						gameover(); 
					}
				} 
			}
		}

	}
}


function gameover() {
	//textAlign(CENTER);
	//background(0);
	textSize(40);
	fill(0);
	text('GAME OVER', 150, 250);
	text('Score: ', 200, 350);
	text(score, 320, 350);
	noLoop();
	next.show();
	next.mousePressed(story);
	next.position(240, 400);
	next.size(60, 30);
}

