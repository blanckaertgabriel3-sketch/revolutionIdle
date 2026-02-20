export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
		//resize canvas
		this.view.resizeCanvas();
		//update the player view
		setInterval(() => {
			this.view.updateView()
		},100)
		//draw circles
		setInterval(() => {
			this.view.render()
		}, 100)

		//add all listeners
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