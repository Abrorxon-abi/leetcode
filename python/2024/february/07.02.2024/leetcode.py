from collections import Counter


class Solution:
    def frequencySort(self, s: str) -> str:
        char_count = Counter(s)

        sorted_chars = sorted(
            char_count.keys(), key=lambda x: char_count[x], reverse=True)

        result = ''.join([char * char_count[char] for char in sorted_chars])

        return result
