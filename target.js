class Target{
	constructor(x, y){
		// determine the color of the target 
		this.x = x;
		this.y = y;

		//decide the color of the target 
		let num = int(random(5));
		if(num == 0){
			this.color = color(255);
			//this.isT = true;
		}else {
			this.color = color(0);
			//this.isT = false;
		}

		this.speed = random(2 , 4);

		//three sides of the target
		this.left = this.x - 12.5;
		this.right = this.left + 25;

		//this.bottom = 0;
	}

	display(){
		this.body();
	}

	setSpeed(s){
		this.speed = s;
	}

	//draw the target 
	body(){
		fill(this.color);
		strokeWeight(2);
		ellipse(this.x, this.y, 20, 20);
		fill(0,0,255);
		rect(this.left, this.y + 12.5, 25, 30);

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

	atBottom(){
		return this.bottom > 600; 
	}
		
}
