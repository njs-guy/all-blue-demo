// This is a comment in JavaScript

class Rectangle {
	// This class was stolen from MDN Docs
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods

	constructor(height, width) {
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

const rect = new Rectangle(5, 10);
let message = "";

switch (rect.calcArea()) {
	case 0:
		message = "This shouldn't exist.";
		break;
	case 1:
		message = "A small rectangle.";
		break;
	case 2:
		message = "A bigger rectangle.";
		break;
	case 10:
		message = "In awe at the size of this lad.";
		break;
	default:
		message = "I ran out of examples.";
		break;
}

console.log(message);
