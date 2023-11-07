// https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/

class Observable {
	// each instance of the Observer class
	// starts with an empty array of things (observers)
	// starts with an empty array of notifications (buffer)
	// that react to a state change
	constructor() {
		this.observers = [];
		this.buffer = [];
		this.buffered = false;
	}

	// add the ability to subscribe to a new object / DOM element
	// essentially, add something to the observers array
	subscribe(f) {
		this.observers.push(f);
	}

	// add the ability to unsubscribe from a particular object
	// essentially, remove something from the observers array
	unsubscribe(f) {
		this.observers = this.observers.filter((subscriber) => subscriber !== f);
	}

	// add the ability to pause outputs from the observable
	pause() {
		this.buffered = true;
	}

	// add the ability to unpause outputs from the observable
	// implements lossless buffering
	unpause() {
		this.buffered = false;
		this.buffer.forEach((data) => this.notify(data));
		this.buffer = [];
	}

	// add the ability to get new buffer and unpause any new observables
	clear() {
		this.buffer = [];
		this.unpause();
	}

	// update all subscribed objects / DOM elements
	// and pass some data to each of them
	notify(data) {
		if (this.buffered) {
			this.buffer.push(data);
			return;
		}
		this.observers.forEach((observer) => {
			try {
				observer(data);
			} catch (e) {
				console.error('Error running observer watcher:', e);
			}
		});
	}
}

export default Observable;
