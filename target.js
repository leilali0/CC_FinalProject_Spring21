class Target{
	constructor(x, y){
		// determine the color of the target 
		this.x = x;
		this.y = y;

		//decide the color of the target 
		this.num = int(random(2));
		if(this.num == 0){
			this.color = color(255);
		}else {
			this.color = color(0);
		}

		this.speed = random(2);

		//three sides of the target
		this.left = this.x - 12.5;
		this.right = this.left + 25;
		this.bottom = this.y + 42.5;
	}

	display(){
		this.body();
		this.update();
	}

	//draw the target 
	body(){
		fill(this.color);
		ellipse(this.x, this.y, 20, 20);
		fill(0,0,255);
		rect(this.left, this.y + 12.5, 25, 30);
		if(this.num == 1){
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
	}

	killed(x, y){
		if(x >= this.left && x <= this.right) {
			if(y == this.bottom){
				return true;
			}
		}
		return false;
	}
		
}
