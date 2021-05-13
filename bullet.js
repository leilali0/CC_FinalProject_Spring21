class Bullet{
	constructor(x){
		this.x = x;
		this.y = 580;
		this.speed = 4;

		this.r = random(256); 
  		this.g = random(256); 
  		this.b = random(256); 
	}

	display(){
		//flashing bullets 
		//let r = random(256); 
  		//let g = random(256); 
  		//let b = random(256); 

		fill(this.r, this.g, this.b);
		noStroke();
		ellipse(this.x, this.y, 10);
	}

	//update the position of the bullet 
	update(){
		this.y -= this.speed;
	}

	posY(){
		return this.y;
	}

	posX(){
		return this.x;
	}
}