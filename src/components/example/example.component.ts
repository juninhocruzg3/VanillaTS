import html from './example.component.html';
import './example.component.scss';

class ExampleComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = html;
		this.classList.add('example-component');
	}
}

customElements.define('app-example', ExampleComponent);
