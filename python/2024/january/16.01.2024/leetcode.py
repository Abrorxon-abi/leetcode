import random


class RandomizedSet:

    def __init__(self):
        self.elements = []
        self.element_indices = {}

    def insert(self, val: int) -> bool:
        if val in self.element_indices:
            return False  # Element already exists
        self.elements.append(val)
        self.element_indices[val] = len(self.elements) - 1
        return True

    def remove(self, val: int) -> bool:
        if val not in self.element_indices:
            return False
        index = self.element_indices[val]
        last_element = self.elements[-1]
        self.elements[index] = last_element
        self.element_indices[last_element] = index
        self.elements.pop()
        del self.element_indices[val]
        return True

    def getRandom(self) -> int:
        return random.choice(self.elements)


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
