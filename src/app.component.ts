class App extends HTMLElement {
	creationDate: Date;
	message: string;

	constructor() {
		super();
		this.creationDate = new Date();
		this.message = `
			<nav>Navegação</nav>
			<app-example></app-example>
			<footer>Rodapé</footer>
		`;
	}

	connectedCallback() {
		this.innerHTML = this.message;
	}
}

customElements.define('app-root', App);
