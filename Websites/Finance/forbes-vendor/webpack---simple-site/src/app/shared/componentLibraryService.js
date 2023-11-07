const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

/**
 * Creates a server side ready react component.
 *
 * @param { React.FunctionComponent } component React component from the component library.
 * @param { object } props React component props.
 * @param { React.children } children prop to be passed to component
 * @returns Server side ready react component.
 */
const useReactComponent = (component, props = {}, children = null) => {
	// @TODO: This should return an object
	if (!component) return '';

	const reactElement = React.createElement(component, props, children);
	return ({
		// @TODO: rename component prop renderToString & convert to function
		component: ReactDOMServer.renderToString(reactElement),
		data: props,
		hydrate: (target) => ReactDOM.hydrateRoot(target, reactElement),
	});
};

module.exports = { useReactComponent };
