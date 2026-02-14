export default class View {
	constructor(model) {
		this.model = model;
		//canvas
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		
		
		this.color = [
			"#E64F4F","#FFA64D","#F8F84A","#A0F549","#4BFEA4","#4CFFFF","#3F3FD4","#9F49F4","#FB4BFB","#FFFFFF"
		];
		this.letters = [
			"A","B","C","D","E","F","G","H","I","J",
		]
		
		//get multiplers, buttons By Id
		for(let i=0; i<this.letters.length; i++) {
			//multipliers
			this["multiplier" + this.letters[i]] = document.getElementById("multiplier" + this.letters[i]);
			//buttons
			this["upgradeSpeedBtn" + this.letters[i]] = document.getElementById("upgradeSpeedBtn" + this.letters[i]);
		}
		//colors: multipliers, buttons
		for(let i=0; i<this.letters.length; i++) {
			this["multiplier" + this.letters[i]].style.color = this.color[i];
			this["upgradeSpeedBtn" + this.letters[i]].style.backgroundColor = this.color[i];
		}
		//available funds 
		this.availableFunds = document.getElementById("availableFunds");
		this.indexEndAngle = 0;
		
	}
	updateView() {
		//update all textContent multipliers
		for(let i=0 ; i<this.letters.length ; i++) {
			this["multiplier" + this.letters[i]].textContent = this.model["multiplier" + this.letters[i]].toFixed(2);
		}

		this.availableFunds.innerHTML = this.model.availableFunds.toFixed(2);	
	}
	resizeCanvas() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.drawCircles();
	}
	drawCircles() {
		let x = this.canvas.width / 2;
		let y = this.canvas.height / 2;
		let radius = 9;
		/*
		droite → 0
		bas → Math.PI / 2
		gauche → Math.PI
		haut → -Math.PI / 2 (ou 1.5 * Math.PI)
		*/
		let stardAngle = -Math.PI / 2;
		let endAngle =  stardAngle + this.indexEndAngle;
		let lineWidth = 18;
		let spacing = 8;
		let colorIndex = 0;

		// numbers of circles
		for(let i=0; i<10 ; i++) {
			
			//draw circle
			this.ctx.beginPath();
			this.ctx.arc(x, y, radius, stardAngle, endAngle, false);
			//the circle color
			this.ctx.strokeStyle = this.color[colorIndex];
			//the circle line width
			this.ctx.lineWidth = lineWidth;
			this.ctx.stroke();
			//increment the radius for the next circle
			radius += lineWidth + spacing;
			//next color in the tab
			colorIndex ++;
			//restart the colorIndex
			if(colorIndex >= this.color.length) {
				colorIndex = 0;
			}
		}
	}
	incrementEndAngle() {
		//rotation speed
		if(this.model.multiplierA !== 0) {
			this.indexEndAngle += (2*Math.PI)/60 + ((2*Math.PI)/60)*this.model.multiplierA;
		}else {
			this.indexEndAngle += (2*Math.PI)/60;
			
		}
		if(this.indexEndAngle >= 2*Math.PI) {
			this.indexEndAngle -= 2*Math.PI;
			this.model.multiplierA += 0.01;
		}
		
	}
	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	render() {
		this.clearCanvas();
		this.drawCircles();
	}

}