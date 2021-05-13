class Player {
	constructor(){
		this.w = 60;
		this.h = 10;
		this.y = 585;
	}

	displayA(position){
		fill(51, 51, 255);
		rect(position, this.y, this.w/2, this.h);
		fill(255);
		rect(position + this.w/2, this.y, this.w/2, this.h);
		fill(0);
		//textSize(15);
		//text('POLICE', position + 3, this.y + 15);
	}

	displayB(position){
		fill(255);
		rect(position, this.y, this.w/2, this.h);
		fill(230, 0, 0);
		rect(position + this.w/2, this.y, this.w/2, this.h);
		fill(0);
		//textSize(15);
		//text('POLICE', position + 3, this.y + 15);
	}
}