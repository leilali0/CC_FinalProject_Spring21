let score = 0;
let position;
let bullets = [];
let targets = [];
let targetNum = 1;
let timer = 1;

let step;

let countdown = 0; //countdown for the ending of the game 

let play;
let flash = 0;

let q = true;


//credit: https://editor.p5js.org/carrefinho/sketches/Sk7ZvoMn7

function setup() {
	let canvas = createCanvas(600, 600);

	canvas.position(windowWidth/2 - 300, windowHeight/2 -300); //centering canvas 
	background(102, 98, 99);
	play = true;
	//y = 1;
	p = new Player(); //creating the player 
	targets.push(new Target(random(30, 570), -50)); //creating the first target 

	step = 1;

	print('WARMING: THis game contains shooting which some might find disturbing. Press "s" key twice to skip.');
	print('Press "space" key to shot, and press left and right arrow to look at different data sets');
}

//press any key to fire 
function keyPressed(){
	//push space bar the fired bullet to the array 
	if(keyCode == 32 && play){
		bullets.push(new Bullet(position));
	} else if(keyCode == 37 && step > 1) {
		step--;
	} else if(keyCode == 39 && step < 5) {
		step++;
	} else if(keyCode == 83){ // press s twice to skip the game 
		noLoop();
		stepOne();
	}

	if(step == 1){
		stepOne();
	} else if(step == 2){
		stepTwo();
	} else if(step == 3){
		stepThree();
	} else if(step == 4){
		stepFour();
	} else {
		step == 1;
	}
}

function draw() {
	if(q){
		background(102, 98, 99);

		//make sure the player box moves with mouse
		playerPosition();

		//add targets
		//calling it multiple times to create targets frequently, and not all at once
		addTargets();

		//display and update tagerts
		displayTargerts();

		addTargets();

		//check if fired bullets hit any target 
		check();

		addTargets();
	}

	if(score == 15){ //game over
		play = false;
	}
}

//add targets
function addTargets(){
	timer += 1;
	if(timer % 300 == 0) {
		targetNum += 1;
		for(let i = 0; i < targetNum/4; i++){
			targets.push(new Target(random(30, 570), -50)); // add new tagert with random position 
		} 
	}
}

//display and update tagerts
function displayTargerts(){
	for(let j = 0; j < targets.length; j++){
		if(!play){
			targets[j].setSpeed(random(3,6)); //speedup the targets 
		}
		if(!targets[j].atBottom()){ //keep moving when not at the bottom
			targets[j].display();
			targets[j].update();
		} else {
			if(play) { // keep moving when during the game 
				targets[j].display();
				targets[j].update();
				if(targets[j].outOfBounds()){ // remove target from array when out of frame 
					targets.splice(j, 1);
				}
			} else { // stops at the bottom 
				countdown += 0.001; 
				targets[j].display();
				addTargets();
				}
			}
		}
	if(countdown > 10){ //after game animation
		q = false;
		setTimeout(stepOne, 300);
		//noLoop();
		//setTimeout(stepOne, 300);
		//targets.splice(0, targets.length); //remove everything from array 
	}
}

//move player with mouse 
function playerPosition(){
	position = mouseX;
	if(mouseX < 0){
		position = 30;
	} else if (mouseX > 570) {
		position = 570;
	}

	//mimic the police flashing light. 
	//Might not register with a lot people of people immidiately, but I don't want to be too blunt
	if(flash < 10){
		p.displayA(position - 30); //- 30 to keep it centered
		flash++;
	} else if (flash < 20){
		p.displayB(position - 30);
		flash++;
	} else{
		flash = 0;
	}
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
						bullets.splice(i, 1); //remove bullet 
						targets.splice(j, 1); //remove target 
						score++;
				}
			}
		}

	}
}

function stepOne() {
	background(102, 98, 99);
	//textAlign(CENTER);
	textSize(18);
	fill(255);
	text('1,127 people were killed by police in 2020.', 5, 25);
	stepOneSquares();
}

//drawing the graphics 
function stepOneSquares(){
	fill(255, 165, 0);
	noStroke();
	let x = 4;
	let y = 37;
	for(let i = 0; i < 33; i++){
		for(let j = 0; j < 34; j++){
			rect(x, y, 14, 14);
			x += 17;
		}
		x = 4;
		y += 17;
	}

	y = 37;
	for(let i = 0; i < 5; i++){
		rect(582, y, 14, 14);
		y += 17;
	}
}

function stepThree() {
	background(102, 98, 99);
	textSize(18);
	fill(255);
	text('Officers were charged with a crime in only 16 of these cases.', 5, 25);
	blank();
}

function stepThreeSquares(){
	let count = 0;
	noStroke();
	let x = 4;
	let y = 37;
	for(let i = 0; i < 34; i++){
		for(let j = 0; j < 33; j++){
			if(count < 16){
				fill(255, 165, 0);
			} else {
				fill(130);
			}
			count++;

			rect(x, y, 14, 14);
			y += 17;
		}
		y = 37;
		x += 17;
	}

	y = 37;
	for(let i = 0; i < 5; i++){
		rect(582, y, 14, 14);
		y += 17;
	}
}

function stepTwo() {
	background(102, 98, 99);
	textSize(16);
	fill(255);
	text('21.4% of the victums were Black, while Black only make up 13% of the population.', 5, 25);
	blank();
}     

//drawing a blank graphic 
function blank(){
	noStroke();
	let x = 4;
	let y = 37;
	for(let i = 0; i < 34; i++){
		for(let j = 0; j < 33; j++){
			fill(130);
			rect(x, y, 14, 14);
			y += 17;
		}
		y = 37;
		x += 17;
	}

	y = 37;
	for(let i = 0; i < 5; i++){
		rect(582, y, 14, 14);
		y += 17;
	}
	if(step == 2){
		setTimeout(stepTwoSquares, 200);
	} else if(step == 3){
		setTimeout(stepThreeSquares, 200);
	} else if(step == 4){
		setTimeout(stepFourSquares, 200);
	}
}

function stepTwoSquares(){
	let count = 0;
	noStroke();
	let x = 4;
	let y = 37;
	for(let i = 0; i < 34; i++){
		for(let j = 0; j < 33; j++){
			if(count < 241){
				fill(255, 165, 0);
			} else {
				fill(130);
			}
			count++;

			rect(x, y, 14, 14);
			y += 17;
		}
		y = 37;
		x += 17;
	}

	y = 37;
	for(let i = 0; i < 5; i++){
		rect(582, y, 14, 14);
		y += 17;
	}
}

function stepFour() {
	background(102, 98, 99);
	textSize(15);
	fill(255);
	text('At least 14 officers have shot or killed someone before. 5 had multiple prior shootings.', 5, 25);
	blank();
}  

function stepFourSquares() {
	let count = 0;
	noStroke();
	let x = 4;
	let y = 37;
	for(let i = 0; i < 34; i++){
		for(let j = 0; j < 33; j++){
			if(count < 5){
				fill(102, 0, 0);
			} else if(count < 14){
				fill(255, 165, 0);
			}
			else {
				fill(130);
			}
			count++;

			rect(x, y, 14, 14);
			y += 17;
		}
		y = 37;
		x += 17;
	}

	y = 37;
	for(let i = 0; i < 5; i++){
		rect(582, y, 14, 14);
		y += 17;
	}
}





