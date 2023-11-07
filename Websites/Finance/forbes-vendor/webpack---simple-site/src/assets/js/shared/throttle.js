/**
* Prevents functions from firing repeatedly. Will fire each time the threshold is met.
* @param  {Function} fn
* @param  {Number}   threshold
* @param  {Object}   scope
*/
export default function throttle(fn, threshold, scope) {
	let last;
	let deferTimer;
	if (!threshold) {
		threshold = 100;
	}

	return (...args) => {
		const context = scope || this || {};
		const now = Date.now();

		if (last && (now < last + threshold)) {
			clearTimeout(deferTimer);
			const next = threshold + now + 1;
			deferTimer = setTimeout(() => {
				last = now;
				context.deferred = true;
				fn.apply(context, args);
			}, next - last);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}
