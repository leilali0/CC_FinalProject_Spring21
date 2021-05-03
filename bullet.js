class bullet{
	constructor(x){
		this.x = x;
		this.y = 600;
	}

	display(){
		fill(255);
		ellipse(this.x, this.y, 10);
		this.update();
	}

	//update the position of the bullet 
	update(){
		this.y -= 1;
	}

	posY(){
		return this.y
	}

	posX(){
		reutnr this.x;
	}
}