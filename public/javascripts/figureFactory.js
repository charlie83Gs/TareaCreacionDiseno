
class FigureFactory{

	constructor(){

	}

	createSphere(x,y,r,g,b,direction,speed){
		let position = createVector(x,y);
		let newColor = color(r,g,b);
		let sphere = new Sphere(position,newColor,direction,speed);
		return sphere;
	}

	createRandomSphere(){
		let currentBox = SingletonBox.getInstance()
		//console.log(currentBox);
		let position = createVector(Math.random()*currentBox.width,Math.random()*currentBox.height);
		let newColor = color(random(255),random(255),random(255));
		let newSpeed = Math.random()*3;
		let sphere = new Sphere(position,newColor,randomDir(),newSpeed);
		//console.log(position);
		return sphere;
	}


}