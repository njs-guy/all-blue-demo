class Rectangle:
	# This class was stolen from MDN Docs and ported to Python
	# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#prototype_methods

	def __init__(self, width: int, height: int) -> None:
		self.height = height
		self.width = width

		if (self.width == self.height):
			self.square = True
		else:
			self.square = False
		
		self.area = self.calcArea()
	
	def calcArea(self):
		return self.height * self.width

def wow():
	x = 10
	return x

rect = Rectangle(5, 10)
msg = ""

match rect.calcArea():
	case 0:
		msg = "This shouldn't exist."
	case 1:
		msg = "A small rectangle."
	case 2:
		msg = "A bigger rectangle."
	case 10:
		msg = "In awe at the size of this lad."
	case other:
		msg = "I ran out of examples."

print(msg)
