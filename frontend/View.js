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

		//multipliers
		this.multipliers = document.getElementById("multipliers");
		this.multiplierA = document.getElementById("multiplierA");
		this.multiplierB = document.getElementById("multiplierB");
		this.multiplierC = document.getElementById("multiplierC");
		this.multiplierD = document.getElementById("multiplierD");
		this.multiplierE = document.getElementById("multiplierE");
		this.multiplierF = document.getElementById("multiplierF");
		this.multiplierG = document.getElementById("multiplierG");
		this.multiplierH = document.getElementById("multiplierH");
		this.multiplierI = document.getElementById("multiplierI");
		this.multiplierJ = document.getElementById("multiplierJ");
		//buttons
		this.upgradeSpeedBtnA = document.getElementById("upgradeSpeedBtnA");
		this.upgradeSpeedBtnB = document.getElementById("upgradeSpeedBtnB");
		this.upgradeSpeedBtnC = document.getElementById("upgradeSpeedBtnC");
		this.upgradeSpeedBtnD = document.getElementById("upgradeSpeedBtnD");
		this.upgradeSpeedBtnE = document.getElementById("upgradeSpeedBtnE");
		this.upgradeSpeedBtnF = document.getElementById("upgradeSpeedBtnF");
		this.upgradeSpeedBtnG = document.getElementById("upgradeSpeedBtnG");
		this.upgradeSpeedBtnH = document.getElementById("upgradeSpeedBtnH");
		this.upgradeSpeedBtnI = document.getElementById("upgradeSpeedBtnI");
		this.upgradeSpeedBtnJ = document.getElementById("upgradeSpeedBtnJ");

		//available funds 
		this.availableFunds = document.getElementById("availableFunds");

		//buttons color and multipliers color
		//generate the path
		for(let i=0; i<this.letters.length; i++) {
			console.log("i", i);
			let multiplierPath = "multiplier" + this.letters[i];
			console.log("path:",multiplierPath);
		}
		//objectif automatise this:
		this.multiplierA.style.color = this.color[2];
		
	}
	updateView() {
		this.multiplierA.textContent = this.model.multiplierA.toFixed(2);
		this.multiplierB.textContent = this.model.multiplierB.toFixed(2);
		this.multiplierC.textContent = this.model.multiplierC.toFixed(2);
		this.multiplierD.textContent = this.model.multiplierD.toFixed(2);
		this.multiplierE.textContent = this.model.multiplierE.toFixed(2);
		this.multiplierF.textContent = this.model.multiplierF.toFixed(2);
		this.multiplierG.textContent = this.model.multiplierG.toFixed(2);
		this.multiplierH.textContent = this.model.multiplierH.toFixed(2);
		this.multiplierI.textContent = this.model.multiplierI.toFixed(2);
		this.multiplierJ.textContent = this.model.multiplierJ.toFixed(2);

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
		//le haut
		let stardAngle = -Math.PI /2;
		let indexEndAngle = 2;
		let endAngle = indexEndAngle*Math.PI;
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
	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	render() {
		this.clearCanvas();
		this.drawCircles();
	}

}