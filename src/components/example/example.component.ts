import html from './example.component.html';
import './example.component.scss';

class ExampleComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
	}
}

customElements.define('app-example', ExampleComponent);
