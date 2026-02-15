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
		this.initInput();
	}
	//add listeners
	initInput() {
		window.addEventListener(("resize"), () => 
			this.view.resizeCanvas()
		);


	}
}