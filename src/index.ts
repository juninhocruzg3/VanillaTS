class App extends HTMLElement {
	creationDate: Date;
	message: string;

	constructor() {
		super();
		this.creationDate = new Date();
		this.message = 'Welcome to VanillaTS';
	}

	connectedCallback() {
		this.innerHTML = this.message;
	}
}

customElements.define('app-root', App);
