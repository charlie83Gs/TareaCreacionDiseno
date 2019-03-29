
//let figure;

let screenWidth = 600;
let screenHeight = 600;
let figures = [];


function setup(){
	createCanvas(screenWidth,screenHeight);
	
	let figureFactory = new FigureFactory();
	//figure = new Sphere(createVector(50,50),color(255, 204, 0),Direction.UP,1);
	//figure = figureFactory.createSphere(90,200,255,204,0,Direction.RIGHT,1)
	//figure = new Sphere();
	for(let totalFigures = 0; totalFigures < 100; totalFigures++){
		let newFigure = figureFactory.createSphere(Math.random()*screenWidth,Math.random()*screenHeight,random(255),random(255),random(255),randomDir(),Math.random()*3);
		figures.push(newFigure);
	}
}

function draw(){
	background(0);
	//figure.DrawSelf();
	//figure.Simulate(screenWidth,screenHeight);

	figures.forEach(
		(figure) => {
			figure.DrawSelf();
			figure.Simulate(screenWidth,screenHeight);

		}
	)

}

const Direction = {
	UP:0,
	DOWN:1,
	LEFT:2,
	RIGHT:3,

}

function randomDir(){
	let newDir = Math.floor(Math.random() * 3.99);

	switch(newDir){
		case 0:
			return Direction.UP;
			break;
		case 1:
			return Direction.DOWN;
			break;
		case 2:
			return Direction.LEFT;
			break;
		case 3:
			return Direction.RIGHT;
			break;
	}
}


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
				this.position.y += this.speed;
				break;
		}
		this.checkBounce(width,height);

	}

	checkBounce(width,height){
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

	
}


class FigureFactory{

	constructor(){

	}

	createSphere(x,y,r,g,b,direction,speed){
		let position = createVector(x,y);
		let newColor = color(r,g,b);
		let sphere = new Sphere(position,newColor,direction,speed);
		return sphere;
	}

}