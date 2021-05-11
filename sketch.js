let score = 0;
let t;
let p;
let position;
let bullets = [];
let targets = [];
let targetNum = 2;
let timer = 1;

let play;
let skip;

let next;

let game;

//credit: https://editor.p5js.org/carrefinho/sketches/Sk7ZvoMn7

function setup() {
	let canvas = createCanvas(600, 600);
	canvas.position(windowWidth/2 - 300, windowHeight/2 -300);//centering canvas 
	background(102, 98, 99);

	skip = createButton('SKIP');
	play = createButton('PLAY');
	game = false;

	//create next buttons 
	//next = createButton('Next');
	//next.style('font-size', '20px'); //change text size 
	//next.hide(); //hide button 

	warning();

	if(game){
		p = new Player();
		targets.push(new Target(random(30, 570)));
	}

}

//warning

// I added a warning and a skip option for the game for people who might find this disturbing 
// I personally have very strong political belief when it comes to the subject of racism. I believe the more disturbing the topic is,
// the more we need to bring attention to it. The game is definitly extremely inappropriate and aggressive, but that is precisely the point. 
// There are so many people who lost their life due to racism. And just because we are not the one doing the harm, we are not exempted from 
// being guilty of systemic racism.  

function warning(){
	textSize(28);
	textAlign(CENTER);
	fill(0);
	text('THIS IS A SHOOTING GAME!', 300, 250);
	//\n You might find this game disturbing. \n To skip the game, press SKIP; otherwise, press PLAT'

	skip.style('font-size', '20px'); 
	skip.position(windowWidth/2 - 150, windowHeight/2 + 50);
	skip.mousePressed(story);

	play.style('font-size', '20px'); 
	play.mousePressed(start);
	play.position(windowWidth/2 + 80, windowHeight/2 + 50);
}

function start() {
	skip.hide();
	play.hide();
	game = true;
}

function story() {}

//press any key to fire 
function keyPressed(){
	//push space bar the fired bullet to the array 
	if(keyCode == 32){
		bullets.push(new Bullet(position + 30));
	}

}


function draw() {
	background(102, 98, 99);

	playerPosition();

	//add targets
	addTargets();

	//display and update tagerts
	displayTargerts();

	//check if fired bullets hit any target 
	check();

	if(score == 10){
		gameover();
	}
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
	/*
	textSize(40);
	fill(0);
	text('GAME OVER', 180, 220);
	text('Score: ', 230, 320);
	text(score, 360, 320);
	noLoop(); //stop the game 


	next.show(); //show button 
	next.position(windowWidth/2 - 20, windowHeight/2 + 100);
	next.size(60, 30);
	next.mousePressed(story);
	*/

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
