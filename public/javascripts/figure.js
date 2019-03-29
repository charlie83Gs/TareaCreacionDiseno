
class Figure{
	constructor( position,color, direction, speed){

		this.position = position;
		this.color = color;
		this.direction = direction;
		this.speed = speed;
		//this.DrawSelf = DrawSelf.bind(this);

	}

	DrawSelf(){
		console.log(this.color);
		console.log(this.position);
		
	}

	ClonSelf() {

	}

	Simulate(width,height){
		switch(this.direction){
			case Direction.UP:
				this.position.y -= this.speed;
				break;
			case Direction.DOWN:
				this.position.y += this.speed;
				break;
			case Direction.LEFT:
				this.position.x -= this.speed;
				break;
			case Direction.RIGHT:
				this.position.x += this.speed;
				break;
		}
		this.checkBounce(width,height);

	}

	checkBounce(width,height) {
		if(this.position.y < 0){
			this.direction = Direction.DOWN;
		}else if(this.position.y > height){
			this.direction = Direction.UP;
		}

		if(this.position.x < 0){
			this.direction = Direction.RIGHT;
		}else if(this.position.x > width){
			this.direction = Direction.LEFT;
		}
	}

}
