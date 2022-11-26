class App extends HTMLElement {
	creationDate: Date;
	message: string;

	constructor() {
		super();
		this.creationDate = new Date();
		this.message = `
			<nav>Navegação</nav>
			<h1>Título APP</h1>
			<app-example></app-example>
			<app-shadow-example></app-shadow-example>
			<footer>Rodapé</footer>
		`;
	}

	connectedCallback() {
		this.innerHTML = this.message;
	}
}

customElements.define('app-root', App);
