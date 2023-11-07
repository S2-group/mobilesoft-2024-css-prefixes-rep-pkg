/*
	FOR REFERENCE CANVAS DRAWING METHODS
	ctx.save() - save current state of canvas context
	ctx.restore() - restore canvas context to state of last save
	ctx.translate(x, y) - translate the coordinate system by x, y
	ctx.rotate(r) - rotate the coordinate system by r radians
	ctx.beginPath() - starts a new path
	ctx.closePath() - move back to the starting point of the current path
	ctx.stroke() - stroke the shape of the current path
	ctx.fill() - fill the shape of the current path
	ctx.moveTo(x, y) - move position to x,y
	ctx.lineTo(x, y) - draw line from current position to x, y
	ctx.arc(x, y, radius, startAngle, endAngle) - draw arc at x,y
	ctx.strokeStyle - the stroke color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
	ctx.fillSTyle - the fill color ('rgb(x,x,x)' | '#xxxxxx' | 'color')
*/

export default class DataVizCanvas {
	constructor() {
		// animation/timing constants
		this.RANGE_MIN = 0;
		this.RANGE_MAX = Math.PI;
		this.FPS = 30;
		this.INTERVAL = 3000 / this.FPS;
		this.PI = Math.PI;
		this.TOTAL_ITERATIONS = {
			IDLE: 10,
			OVERDRIVE: 1.5,
		};
		this.ANIMATION_AMPLITUDES = {
			IDLE: 80,
			OVERDRIVE: 50,
		};
		this.OVERDRIVE_THRESHOLD = 5000;
		this.ANIMATION_TYPES = {
			IDLE: 'IDLE',
			OVERDRIVE: 'OVERDRIVE',
		};

		this.MIN_USER_COUNT = 0;
		this.MAX_USER_COUNT = 60000;
		this.canvas = null;
		this.lastTime = performance.now();
		this.currentAngle = 0;
		this.nextAngle = 0;
		this.currentPerfectAngle = 0;
		this.idleOffset = 0;
		this.idleDirection = 1;
		this.currentIteration = 0;
		this.startValue = 0;
		this.changeInValue = 0;
		this.totalIterations = this.TOTAL_ITERATIONS.IDLE;
		this.animationAmplitude = this.ANIMATION_AMPLITUDES.IDLE;
	}

	static getNeedle() {
		return document.querySelector('img.data-viz-needle');
	}

	static getArcFill() {
		return document.querySelector('img.data-viz-arc-fill');
	}

	/**
	 * Return value of a number in one arbitrary range mapped to another arbitrary range
	 * credit to xposedbones - https://gist.github.com/xposedbones/75ebaef3c10060a3ee3b246166caab56
	 * class methods that do not use "this" should be static
	 */
	static mapNumberOntoRange(num, inMin, inMax, outMin, outMax) {
		return (((num - inMin) * (outMax - outMin)) / (inMax - inMin)) + outMin;
	}

	/**
	 * Easing function for prettier animation
	 * credit to Kirupa - https://www.kirupa.com/html5/animating_with_easing_functions_in_javascript.htm
	 */
	easeOutCubic() {
		return (this.changeInValue * ((((this.currentIteration / this.totalIterations) - 1) ** 3) + 1)) + this.startValue;
	}

	/**
	 * Rotate both the needle and the arch fill.
	 */
	drawNeedle() {
		const angle = this.currentAngle;

		let degree = Math.floor((angle * 180) / Math.PI);
		degree = degree >= 0 ? degree : 0;
		degree = degree <= 180 ? degree : 180;

		const needleDegree = degree - 90; // we have to offset the angle by -90 to show correctly.
		const arcFillDegree = degree - 180; // we have to offset the angle by -180 to show correctly.

		const needle = DataVizCanvas.getNeedle();
		const arcFill = DataVizCanvas.getArcFill();

		needle.style.transform = `rotate(${needleDegree}deg)`;
		arcFill.style.transform = `rotate(${arcFillDegree}deg)`;
	}

	/**
	 * Calculate consistent tick rate
	 */
	tick() {
		const now = performance.now();
		const delta = now - this.lastTime;

		if (delta > this.INTERVAL) {
			this.lastTime = now - (delta % this.INTERVAL);

			return true;
		}

		return false;
	}

	/**
	 * Call all necessary draw methods for a frame
	 */
	draw() {
		this.drawNeedle();
	}

	/**
	 * Update method calculates the current angle and draws each frame
	 */
	update() {
		if (this.tick()) {
			this.currentIteration++;
			if (this.currentIteration < this.totalIterations) {
				this.currentAngle = this.easeOutCubic();
				this.draw();
			} else {
				this.idleOffset = Math.random() / this.animationAmplitude;
				this.idleDirection *= -1;
				this.currentIteration = 0;
				this.nextAngle = this.currentPerfectAngle + (this.idleOffset * this.idleDirection);
				this.startValue = this.currentAngle;
				this.changeInValue = this.nextAngle - this.currentAngle;
			}
		}

		// for performance only request animation frame if we are not done with an animation
		if (this.currentIteration < this.totalIterations) {
			requestAnimationFrame(this.update.bind(this));
		}
	}

	/**
	 * Sets variables to values needed for the current type of animation for the needle
	 * @param {string} type the type of animation for the needle, 'OVERDRIVE' | 'IDLE'
	 */
	setNeedleAnimation(type) {
		this.animationAmplitude = this.ANIMATION_AMPLITUDES[type];
		this.totalIterations = this.TOTAL_ITERATIONS[type];
	}

	/**
	 * Change target number for gauge to animate to
	 */
	changeNumber(num) {
		const displayNumber = (num > this.MAX_USER_COUNT) ? this.MAX_USER_COUNT : num;

		if (displayNumber >= this.MAX_USER_COUNT - this.OVERDRIVE_THRESHOLD) {
			this.setNeedleAnimation(this.ANIMATION_TYPES.OVERDRIVE);
		} else {
			this.setNeedleAnimation(this.ANIMATION_TYPES.IDLE);
		}
		this.currentPerfectAngle = DataVizCanvas.mapNumberOntoRange(
			displayNumber,
			this.MIN_USER_COUNT,
			this.MAX_USER_COUNT,
			this.RANGE_MIN,
			this.RANGE_MAX,
		);
		this.idleOffset = Math.random() / this.animationAmplitude;
		this.idleDirection = 1;
		this.nextAngle = this.currentPerfectAngle + (this.idleOffset * this.idleDirection);
		this.currentIteration = 0;
		this.startValue = this.currentAngle;
		this.changeInValue = this.nextAngle - this.currentAngle;
		requestAnimationFrame(this.update.bind(this));
	}

	/**
	 * Initialize canvas
	 */
	init() {
		this.changeNumber(this.MIN_USER_COUNT);
	}
}
