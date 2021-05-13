class Target{
	constructor(x, y){
		// determine the color of the target 
		this.x = x;
		this.y = y;

		//decide the color of the target 
		let num = int(random(6));
		if(num == 0){
			this.color = color(255,224,189);
		}else if(num == 1){
			this.color = color(96,57,9);
		}else if(num == 2){
			this.color = color(62,43,19);
		}else if(num == 3){
			this.color = color(88,53,18);
		}else if(num == 4){
			this.color = color(126,77,28);
		}else {
			this.color = color(224,172,105);
		}

		this.speed = random(2 , 4);

		//three sides of the target
		this.left = this.x - 10;
		this.right = this.x + 10;

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
		stroke(80);
		strokeWeight(1);

		//head
		fill(this.color);
		ellipse(this.x, this.y, 18, 18);
		//arms and hands 
		rect(this.left - 5, this.y + 20.5, 4, 12);
		rect(this.right + 1, this.y + 20.5, 4, 12);
		ellipse(this.left - 2.5, this.y + 35, 5, 5);
		ellipse(this.right + 3.5, this.y + 35, 5, 5);
		//body
		fill(255, 165, 0);
		rect(this.left, this.y + 11.5, 20, 25);
		//shoulders
		rect(this.left - 6, this.y + 12.5, 6, 8);
		rect(this.right, this.y + 12.5, 6, 8);
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
