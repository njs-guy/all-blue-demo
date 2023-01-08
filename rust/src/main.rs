// This class was stolen from MDN Docs and ported to Rust
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods

#[derive(Debug, Clone, Copy)]
struct Rect {
	height: i32,
	width: i32,
}

impl Rect {
	fn is_square(self) -> bool {
		self.width == self.height // returns true or false
	}

	fn calc_area(self) -> i32 {
		self.width * self.height
	}
}

fn main() {
	let rect = Rect {
		height: 5,
		width: 10,
	};

	let msg = match rect.calc_area() {
		0 => "This shouldn't exist.",
		1 => "A small rectangle.",
		2 => "A bigger rectangle.",
		10 => "In awe at the size of this lad.",
		_default => "I ran out of examples.",
	};

	println!("{}", msg);
	println!("Is square? {}", rect.is_square());
}
