/* eslint-disable func-names, prefer-rest-params */

// Stub window.performance for Safari
window.performance = window.performance || false;

// Polyfill element.remove for IE11
// See https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove#Polyfill
((arr) => {
	arr.forEach((item) => {
		if (Object.prototype.hasOwnProperty.call(item, 'remove')) {
			return;
		}
		Object.defineProperty(item, 'remove', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function remove() {
				this.parentNode.removeChild(this);
			},
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

// There's a load order issue between the AMP runtime v0.js custom element polyfill and the @webcomponents/custom-elements version.
// On Safari devices the polyfill looks for HTMLElement.addEventListener that it defines accessible through getOwnPropertyDescriptors.
// Since the @webcomponents/custom-elements polyfill overwrites HTMLElement with a custom class later that relies on
// prototypical inheritance instead, it doesn't exist. Just add this as a passthrough until a better solution can be found.
((arr) => {
	arr.forEach((item) => {
		if (Object.prototype.hasOwnProperty.call(item, 'addEventListener')) {
			return;
		}
		const oldListener = item.addEventListener;
		Object.defineProperty(item, 'addEventListener', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function addEventListener(...args) {
				oldListener.apply(this, args);
			},
		});
	});
})([HTMLElement.prototype]);

// Polyfill element.append for IE11
// See https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append#Polyfill
((arr) => {
	arr.forEach((item) => {
		if (Object.prototype.hasOwnProperty.call(item, 'append')) {
			return;
		}
		Object.defineProperty(item, 'append', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function append() {
				const argArr = Array.prototype.slice.call(arguments);
				const docFrag = document.createDocumentFragment();

				argArr.forEach((argItem) => {
					const isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.appendChild(docFrag);
			},
		});
	});
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);
