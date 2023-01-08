// This is a comment in TypeScript

class Rect {
	// This class was stolen from MDN Docs and ported to TypeScript
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods

	height: number;
	width: number;
	square: boolean;

	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;

		if (height === width) {
			this.square = true;
		} else {
			this.square = false;
		}
	}

	get area() {
		return this.calcArea();
	}

	calcArea() {
		return this.height * this.width;
	}
}

const r = new Rect(5, 10);
let msg = "";

switch (r.calcArea()) {
	case 0:
		msg = "This shouldn't exist.";
		break;
	case 1:
		msg = "A small rectangle.";
		break;
	case 2:
		msg = "A bigger rectangle.";
		break;
	case 10:
		msg = "In awe at the size of this lad.";
		break;
	default:
		msg = "I ran out of examples.";
		break;
}

console.log(msg);
