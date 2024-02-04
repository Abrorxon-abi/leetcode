from typing import List


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        def to_bitmask(s):
            bitmask = 0
            for char in s:
                char_bit = ord(char) - ord('a')
                if (bitmask >> char_bit) & 1:
                    return 0
                bitmask |= 1 << char_bit
            return bitmask

        def backtrack(start, bitmask):
            nonlocal max_length

            max_length = max(max_length, bin(bitmask).count('1'))

            for i in range(start, len(arr)):
                new_bitmask = to_bitmask(arr[i])
                if new_bitmask and not (new_bitmask & bitmask):
                    backtrack(i + 1, bitmask | new_bitmask)

        max_length = 0
        backtrack(0, 0)
        return max_length
