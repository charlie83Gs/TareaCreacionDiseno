

let screenWidth = 600;
let screenHeight = 600;
let figures = [];






function setup(){
	createCanvas(screenWidth,screenHeight,WEBGL);
	let boxSingleton = SingletonBox.getInstance();

	boxSingleton.setWidth(screenWidth);
	boxSingleton.setHeight(screenHeight);

	
	let figureFactory = new FigureFactory();
	//figure = new Sphere(createVector(50,50),color(255, 204, 0),Direction.UP,1);
	//figure = figureFactory.createSphere(90,200,255,204,0,Direction.RIGHT,1)
	//figure = new Sphere();
	let targetFigures = 100000;

	//measure factory time
	startTimer();
	for(let totalFigures = 0; totalFigures < targetFigures; totalFigures++){
		//let newFigure = figureFactory.createSphere(Math.random()*screenWidth,Math.random()*screenHeight,random(255),random(255),random(255),randomDir(),Math.random()*3);
		
		let newFigure = figureFactory.createRandomSphere();
		boxSingleton.InsertFigure(newFigure);
	}
	let factoryTime = endTimer();

	let originalSphere = figureFactory.createRandomSphere();
	startTimer();
	for(let totalFigures = 0; totalFigures < targetFigures; totalFigures++){
		//let newFigure = figureFactory.createSphere(Math.random()*screenWidth,Math.random()*screenHeight,random(255),random(255),random(255),randomDir(),Math.random()*3);
		let newFigure = originalSphere.ClonSelf();
		originalSphere.Randomize();
		boxSingleton.InsertFigure(newFigure);
	}
	let prototypeTime = endTimer();



	startTimer();
	for(let totalFigures = 0; totalFigures < targetFigures; totalFigures++){
		let newFigure = figureFactory.createSphere(Math.random()*screenWidth,Math.random()*screenHeight,random(255),random(255),random(255),randomDir(),Math.random()*3);
		
		//let newFigure = figureFactory.createRandomSphere();
		boxSingleton.InsertFigure(newFigure);
	}
	let noPatternTime = endTimer();

	document.getElementById("rigthNormalLabel").innerHTML = "Time with no pattern: " + noPatternTime;
	document.getElementById("rigthFactoryLabel").innerHTML = "Time with factory pattern: " + factoryTime;
	document.getElementById("rigthPrototypeLabel").innerHTML = "Time with prototype pattern: " + prototypeTime;



	//console.log(boxSingleton);
}

function draw(){
	background(0);
	translate(-width/2,-height/2,0);
	noStroke();


	let boxSingleton = SingletonBox.getInstance();
	

	boxSingleton.DrawSelf();
	boxSingleton.Simulate();

}

const Direction = {
	UP:0,
	DOWN:1,
	LEFT:2,
	RIGHT:3,

}




//deprecated figure managers

/*
class FigManagement{
	constructor() {
		this.hashFig = []
	}

	AddFig( name, fig )
    {
         this.hashFig[name] = fig;
    }

    GetFig( name )
    {
         return this.hashFig[name];
    }

    getClon( name )
    {
         let sphere = this.hashFig[name];
         return sphere.ClonSelf();
    }
}

*/



//helper for randonm dir

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

//helper functions for measuring time

var startTime, endTime;

function startTimer() {
  startTime = new Date();
};

function endTimer() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  //var seconds = Math.round(timeDiff);
  console.log(timeDiff + " seconds");
  return timeDiff;
}
