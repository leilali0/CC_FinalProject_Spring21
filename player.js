class Player {
	constructor(){
		this.w = 40;
		this.h = 20;
		this.y = 580
	}

	display(position){
		fill(123, 134, 133);
		rect(position, this.y, this.w, this.h);
	}
}