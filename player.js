class Player {
	constructor(){
		this.w = 60;
		this.h = 20;
		this.y = 580
	}

	display(position){
		fill(123, 134, 133);
		rect(position, this.y, this.w, this.h);
		fill(0);
		textSize(15);
		text('POLICE', position + 30, this.y + 15);
	}
}