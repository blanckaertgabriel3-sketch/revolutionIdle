export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		this.view.resizeCanvas();
		setInterval(() => {
			this.view.updateView()
		},100)
		setInterval(() => {
			this.view.render()
			this.view.incrementEndAngle()
		}, 100)
		// setInterval(() => {
		// 	this.model.addTime()
		// }, this.model.timerSpeed)
		this.initInput();
	}
	//add listeners
	initInput() {
		window.addEventListener(("resize"), () => 
			this.view.resizeCanvas()
		);
		//add listener for each upgrade circle button.
		for (let letter of this.model.letters) {
			this.view["upgradeSpeedBtn" + letter].addEventListener("click", () =>
				this.model.upgradeSpeedBtnIsPressed(letter)
			);
		}


	}
}