class Target{
	constructor(x){
		// determine the color of the target 
		this.x = x;
		this.y = -50;

		//decide the color of the target 
		let num = random([0, 1]);
		if(num == 0){
			this.color = color(0);
			this.isT = true;
		}else {
			this.color = color(255);
			this.isT = false;
		}

		this.speed = random(1, 2);

		//three sides of the target
		this.left = this.x - 12.5;
		this.right = this.left + 25;
	}

	setColor(a){
		if(a == 0){
			this.color = color(0);
			this.isT = true;
		}else {
			this.color = color(255);
			this.isT = false;
		}
	}

	setY(y) {
		this.y = y;
	}

	isTarget(){
		return this.isT;
	}

	display(){
		this.body();
		this.update();
	}

	//draw the target 
	body(){
		fill(this.color);
		strokeWeight(2);
		ellipse(this.x, this.y, 20, 20);
		fill(0,0,255);
		rect(this.left, this.y + 12.5, 25, 30);
		if(this.isT){
			this.addX();
		}
	}

	//add the "x" tagert marker to some of the targets
	addX(){
		fill(255, 0, 0);
		textSize(26);
		text('x', this.x - 6, this.y + 30);
	}

	update(){
		this.y += this.speed;
		this.bottom = this.y + 42.5;
	}

	hit(a, b){
		if(a >= this.left && a <= this.right) {
			if(b <= this.bottom){
				return true;
			}
		}
		return false;
	}

	outOfBounds(){
		return this.bottom > 650;
	}
		
}
