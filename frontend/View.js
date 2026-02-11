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
	}
	updateView() {
		this.multiplierA.innerHTML = this.model.multiplierA;


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

}