/**
 * Event class module that provides an interface for handling jQuery style
 * namespacing of events.
 * i.e. "scroll.header" and "scroll.grid"
 *
 * https://stackoverflow.com/a/44426162
 */
class EventClass {
	constructor() {
		this.functionMap = {};
	}

	addEventListener(event, func, el) {
		func.el = el;
		this.functionMap[event] = func;
		(el || document).addEventListener(event.split('.')[0], this.functionMap[event]);
	}

	removeEventListener(event) {
		(this.functionMap[event].el || document).removeEventListener(event.split('.')[0], this.functionMap[event]);
		delete this.functionMap[event];
	}
}

const Event = new EventClass();

export default Event;
