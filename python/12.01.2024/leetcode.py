class Solution:
    def halvesAreAlike(self, s: str) -> bool:
        vowels = set("aeiouAEIOU")

        def count_vowels(string):
            return sum(1 for char in string if char in vowels)

        length = len(s)
        mid = length // 2
        a = s[:mid]
        b = s[mid:]

        return count_vowels(a) == count_vowels(b)
