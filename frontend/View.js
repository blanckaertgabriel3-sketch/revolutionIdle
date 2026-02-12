export default class View {
	constructor(model) {
		this.model = model;
		//canvas
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
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
		this.resizeCanvas();
		window.addEventListener(("resize"), () => 
			this.resizeCanvas()
		);
	}
	updateView() {
		this.multiplierA.innerHTML = this.model.multiplierA.toFixed(2);
		this.multiplierB.innerHTML = this.model.multiplierB.toFixed(2);
		this.multiplierC.innerHTML = this.model.multiplierC.toFixed(2);
		this.multiplierD.innerHTML = this.model.multiplierD.toFixed(2);
		this.multiplierE.innerHTML = this.model.multiplierE.toFixed(2);
		this.multiplierF.innerHTML = this.model.multiplierF.toFixed(2);
		this.multiplierG.innerHTML = this.model.multiplierG.toFixed(2);
		this.multiplierH.innerHTML = this.model.multiplierH.toFixed(2);
		this.multiplierI.innerHTML = this.model.multiplierI.toFixed(2);
		this.multiplierJ.innerHTML = this.model.multiplierJ.toFixed(2);

		this.availableFunds.innerHTML = this.model.availableFunds.toFixed(2);	
	}
	resizeCanvas() {
		const rect = this.canvas.getBoundingClientRect();

		this.canvas.width = rect.width;
		this.canvas.height = rect.height;
		this.drawCircles();
	}
	drawCircles() {
		let x = this.canvas.width / 2;
		let y = this.canvas.height / 2;
		let radius = 9;
		//le haut
		let stardAngle = -Math.PI /2;
		let indexEndAngle = 0.5;
		let endAngle = indexEndAngle*Math.PI;
		let lineWidth = 18;
		let spacing = 8;
		let color = [
			"#E64F4F","#FFA64D","#F8F84A","#A0F549","#4BFEA4","#4CFFFF","#3F3FD4","#9F49F4","#FB4BFB","#FFFFFF"
		];
		let colorIndex = 0;

		// numbers of circles
		for(let i=0; i<10 ; i++) {
			
			//draw circle
			this.ctx.beginPath();
			this.ctx.arc(x, y, radius, stardAngle, endAngle, false);
			//the circle color
			this.ctx.strokeStyle = color[colorIndex];
			//the circle line width
			this.ctx.lineWidth = lineWidth;
			this.ctx.stroke();
			//increment the radius for the next circle
			radius += lineWidth + spacing;
			//next color in the tab
			colorIndex ++;
			//restart the colorIndex
			if(colorIndex >= color.length) {
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