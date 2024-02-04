from collections import Counter
from typing import List


class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        char_count = Counter()

        for word in words:
            char_count.update(word)

        total_words = len(words)
        for count in char_count.values():
            if count % total_words != 0:
                return False

        return True
