
//let figure;

class Box{

	constructor(){
		this.figures = [];
		this.width = 0;
		this.height = 0;
	}

	DrawSelf(){
		this.figures.forEach(
			(figure) => {
				figure.DrawSelf();
				//console.log("Drawing figure");
			}
		);
	}

	Simulate(){
		this.figures.forEach(
			(figure) => {
				figure.Simulate(this.width,this.height);
			}
		);	
	}

	InsertFigure(figure){
		if(figure instanceof Figure){
			this.figures.push(figure);
			return true;
		}
		//console.log(figure instanceof Figure);
		return false;
	}

	setWidth(boxWidth){
		this.width = boxWidth;
	}

	setHeight(boxHeight){
		this.height = boxHeight;
	}
}

let SingletonBox = (function () {
    var instance;
 
    function createInstance() {
        var object = new Box();
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();



let figures2 = SingletonBox.getInstance();
let figures3 = SingletonBox.getInstance();
console.log("The singleton is working: ", figures3===figures3);
