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

}

//press any key to fire 
function keyPressed(){
	//push space bar the fired bullet to the array 
	if(keyCode == 32 && play == true){
		bullets.push(new Bullet(position + 30));
	}

}


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
		StepOne();
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


function gameover() {
	play = false;
	displayFixed();
}

function StepOne() {
	background(102, 98, 99);
	textAlign(CENTER);
	textSize(28);
	text('\B\ 1,127 people were killed by police in 2020.', );
}

/*
function story(){
	next.hide();
	background(102, 98, 99);
	fill(255);
	textAlign(CENTER);
	textSize(28);
	text('Did you notice something inappropriate?', 300, 250);

	yes = createButton('Yes');
	yes.position(windowWidth/2 - 150, windowHeight/2 + 50);
	yes.style('font-size', '20px');
	yes.size(60, 30);
	yes.mousePressed(yStepOne);

	no = createButton('No');
	no.position(windowWidth/2 + 80, windowHeight/2 + 50);
	no.style('font-size', '20px');
	no.size(60, 30);
	no.mousePressed(nStepOne);
}

function yStepOne() {
	background(102, 98, 99);
	fill(255);
	textSize(28);
	textAlign(CENTER);
	text('Was it the tagert color?', 300, 250);

	yes.mousePressed(stepTwo);
	no.mousePressed(nStepOne);
}

function nStepOne() {
	background(102, 98, 99);
	fill(255);
	textSize(28);
	textAlign(CENTER);
	text("Did you notice the color of targets?", 300, 250);

	//targetA = new Target(275);
	//targetA.setY(100);
	//targetA.setColor(0);
	//targetA.display();

	//targetB = new Target(325);
	//targetB.setY(100);
	//targetB.setColor(1);
	//targetB.display();

	yes.mousePressed(stepTwo);
	no.mousePressed(stepTwo);
}

function stepTwo() {
	yes.hide();
	no.hide();

	background(102, 98, 99);
	fill(255);
	textSize(28);
	textAlign(CENTER);
	text("Did you know Florida Police was caught \n used mugshots of black man for target \n practice in 2015?", 300, 250);

	setTimeout(stepThree, 3000);

	more = createButton('Learn More');
	more.position(windowWidth/2 - 75, windowHeight/2 + 50);
	more.style('font-size', '20px');
	more.size(textWidth('Learn More') + 5, 30);
}
*/

function stepThree() {
	//source: https://www.pnas.org/content/116/34/16793
	//Over the life course, about 1 in every 1,000 black men can expect to be killed by police.
	//Black men are about 3 times more likely to be killed by police over the life course than are white men. 
	//Black women are about 1.4 times more likely to be killed by police than are white women.

	//About 17% of the black people who died as a result of police harm were unarmed, 1.3 times more than white man

	//98.3% of killings by police from 2013-2020 have not resulted in officers being charged with a crime.

	//learn more: https://mappingpoliceviolence.org

	//learn more: https://policeviolencereport.org

	//The average lifetime odds of being killed by police are about 1 in 2,000 for men and about 1 in 33,000 for women.
}
