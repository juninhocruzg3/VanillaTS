import html from './example.component.html';

class ExampleComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
	}
}

customElements.define('app-example', ExampleComponent);
