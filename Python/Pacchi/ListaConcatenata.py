from Nodo import Node


class ListaConcatenata:
	def __init__(self):
		self.head = None
		self.tail = None
		self._length = 0

	def get_length(self):
		return self._length

	def get_at(self, index):
		if index < 0 or index >= self._length:
			return None

		current = self.head
		for _ in range(index):
			current = current.next
		return current.data

	def append(self, value):
		new_node = Node(value)
		if self.head is None:
			self.head = new_node
			self.tail = new_node
		else:
			self.tail.next = new_node
			self.tail = new_node
		self._length += 1

	def prepend(self, value):
		new_node = Node(value)
		new_node.next = self.head
		self.head = new_node
		if self.tail is None:
			self.tail = new_node
		self._length += 1

	def pop_front(self):
		if self.head is None:
			return None

		removed_node = self.head
		self.head = self.head.next
		if self.head is None:
			self.tail = None
		self._length -= 1
		return removed_node.data

	def remove_first_where(self, condition):
		current = self.head
		previous = None

		while current is not None:
			if condition(current.data):
				if previous is None:
					self.head = current.next
				else:
					previous.next = current.next

				if current == self.tail:
					self.tail = previous

				self._length -= 1
				return current.data

			previous = current
			current = current.next

		return None

	def insert_at(self, index, value):
		if index <= 0:
			self.prepend(value)
			return

		if index >= self._length:
			self.append(value)
			return

		previous = self.head
		for _ in range(index - 1):
			previous = previous.next

		new_node = Node(value)
		new_node.next = previous.next
		previous.next = new_node
		self._length += 1

