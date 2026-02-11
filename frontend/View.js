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
		//buttons
		this.upgradeSpeedBtnA = document.getElementById("upgradeSpeedBtnA");
		this.upgradeSpeedBtnB = document.getElementById("upgradeSpeedBtnB");
	}
	updateView() {
		this.multiplierA.innerHTML = this.model.multiplierA;
	}

}