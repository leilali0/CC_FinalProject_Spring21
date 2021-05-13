let score = 0;
let t;
let p;
let position;
let bullets = [];
let targets = [];
let targetNum = 1;
let timer = 1;
let fixed = [];

let countdown = 0;

let play;
let flash = 0;

let next;

//credit: https://editor.p5js.org/carrefinho/sketches/Sk7ZvoMn7

function setup() {
	let canvas = createCanvas(600, 600);

	canvas.position(windowWidth/2 - 300, windowHeight/2 -300);//centering canvas 
	background(102, 98, 99);
	play = true;
	y = 1;
	//create next buttons 
	//next = createButton('Next');
	//next.style('font-size', '20px'); //change text size 
	//next.hide(); //hide button 
	p = new Player();
	targets.push(new Target(random(30, 570), -50));

	stepFour();
}

//press any key to fire 
function keyPressed(){
	//push space bar the fired bullet to the array 
	if(keyCode == 32 && play == true){
		bullets.push(new Bullet(position + 30));
	} 
}
/*
function draw() {
	background(102, 98, 99);

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

	if(score == 10){
		gameover();
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
			targets[j].setSpeed(random(3,6));
		}
		if(!targets[j].atBottom()){
			targets[j].display();
			targets[j].update();
		} else {
			if(play) { // keep moving
				targets[j].display();
				targets[j].update();
				if(targets[j].outOfBounds()){ // remove from array when out of frame 
					targets.splice(j, 1);
				}
			} else { // stops at the bottom 
				countdown += 0.001; 
				targets[j].display();
				addTargets();
				}
			}
		}
	if(countdown > 25){
		noLoop();
		setTimeout(stepOne, 800);
	}
}

function displayFixed(){
	for(let i = 0; i < fixed.length; i++){
		fixed[i].display();
	}
}

//move player with mouse 
function playerPosition(){
	position = mouseX;
	if(mouseX < 0){
		position = 0;
	} else if (mouseX > 560) {
		position = 540;
	}

	//mimic the police flashing light. 
	//Might not register with a lot people of people immidiately, but I don't want to be too blunt
	if(flash < 10){
		p.displayA(position);
		flash++;
	} else if (flash < 20){
		p.displayB(position);
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
					//if(targets[j].isTarget()){ // check if it is a target 
						bullets.splice(i, 1);
						targets.splice(j, 1);
						score++;
					//} else {
						//game over
					//	gameover(); 
				}
			}
		}

	}
}
*/

function gameover() {
	play = false;
	displayFixed();
}

function stepOne() {
	background(102, 98, 99);
	//textAlign(CENTER);
	textSize(18);
	fill(255);
	text('1,127 people were killed by police in 2020.', 5, 25);
	stepOneSquares();
}

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
	stepThreeSquares();
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
	stepTwoSquares();
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
	stepFourSquares();
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





