class WaxPlayer extends HTMLElement {
	// dropped my custom utility function directly in here.
	// doesn't infringe upon the global namespace as it is a static method of WaxPlayer.
	/**
	 * @description Create an HTML element in a one-liner.
	 * @param {string} tag The HTML tag to create.
	 * @param {object} [attrs] An object of [valid attributes](https://dom.spec.whatwg.org/#concept-attribute) to assign to the node.
	 * @param {string} [inner] The innerHTML to set on the node.
	 * @param {string|HTMLElement} [parent] The parent element or query selector to append the node to.
	 * @returns {HTMLElement}
	 */
	static createNode(tag, attrs, inner, parent) {
		const node = document.createElement(tag);
		if (attrs) {
			for (let attrname in attrs) {
				node.setAttribute(attrname, attrs[attrname]);
			};
		};
		if (inner) node.innerHTML = inner;
		parent instanceof HTMLElement ? parent?.appendChild(node) : document.querySelector(parent)?.appendChild(node);
		return node;
	};
};

customElements.define('wax-player', WaxPlayer);