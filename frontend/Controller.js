export default class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		setInterval(() => {
			this.view.updateView(),100;
		})
	}
}