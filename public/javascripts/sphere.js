



class Sphere extends Figure{
	constructor( position,color, direction, speed){
		super(position,color, direction, speed);
		//console.log(this.position);

		
	}

	DrawSelf(){
		//console.log(this.color);
		//console.log(this.position);
		//fill("#FFFFFF");
		fill(this.color);
		ellipse(this.position.x, this.position.y,10,10);
		//ellipse(10, 10,10,10);
	}

	ClonSelf() {
		let newSphere = new Sphere(this.position,this.color,this.direction,this.speed);
		return newSphere;
	}

	Randomize(){
		let currentBox = SingletonBox.getInstance()
		//console.log(currentBox);
		this.position = createVector(Math.random()*currentBox.width,Math.random()*currentBox.height);
		this.newColor = color(random(255),random(255),random(255));
		this.newSpeed = Math.random()*3;
		this.direction = randomDir();


	}

	
}

