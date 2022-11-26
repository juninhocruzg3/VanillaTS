import html from './shadow-example.component.html';

class ShadowExampleComponent extends HTMLElement {
	private container: HTMLDivElement | undefined;
	private templateItem: HTMLTemplateElement | undefined;
	private texts = [
		'This is the first item.',
		'The second item is before the third. And the third will be a lorem ipsum.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet porta velit, vel gravida mi sodales in. Duis ultricies sem a urna convallis, at ultrices nunc facilisis. Proin volutpat enim eget dolor aliquet, a semper mauris tincidunt. Sed fringilla mauris ut tortor interdum vehicula nec a sem. Duis non justo dapibus, dignissim est a, posuere nibh. Maecenas nibh lectus, auctor eget pulvinar ac, viverra ac lacus. Aliquam sed nulla sit amet est viverra pharetra quis eget tortor. Aliquam fringilla elit vitae lectus fringilla laoreet. Praesent ut mi eget libero maximus viverra. Fusce id justo non dolor euismod ullamcorper. Aenean a ante id elit auctor condimentum ac et enim. Praesent et ante iaculis, mollis tortor molestie, malesuada nunc. Donec quis ex tincidunt, vulputate felis sit amet, efficitur arcu. Nulla augue sem, lobortis a nunc ac, congue volutpat odio.',
	];

	constructor() {
		super();
	}

	connectedCallback() {
		const template = document.createElement('template');
		template.innerHTML = html;
		this.attachShadow({ mode: 'open' });
		this.shadowRoot?.appendChild(template.content.cloneNode(true));

		this.container = this.shadowRoot?.getElementById(
			'container'
		) as HTMLDivElement;
		this.templateItem = this.shadowRoot?.getElementById(
			'template-item'
		) as HTMLTemplateElement;
		for (const text of this.texts) {
			const item = this.templateItem.content.cloneNode(
				true
			) as DocumentFragment;
			const p = item.getElementById('text-p');
			if (p) {
				p.innerHTML = text;
			}
			this.container.appendChild(item);
		}
	}
}

customElements.define('app-shadow-example', ShadowExampleComponent);
