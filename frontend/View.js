export default class View {
	constructor(model) {
		this.model = model;
		//canvas
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
		this.canvas.style.border = "2px solid black";
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
		let radius = 4;
		let stardAngle = 0;
		let endAngle = 2*Math.PI;
		let lineWidth = 18;

		for(let i=0; i<10 ; i++) {
			this.ctx.beginPath();
			this.ctx.arc(x, y, radius, stardAngle, endAngle, true);
			this.ctx.strokeStyle = "red";
			this.ctx.lineWidth = lineWidth;
			this.ctx.stroke();
			radius += lineWidth + 10;
		}
	}

}