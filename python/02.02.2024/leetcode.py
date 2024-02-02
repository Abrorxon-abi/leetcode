from typing import List


class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        result = []
        digits = '123456789'

        for length in range(len(str(low)), len(str(high)) + 1):
            for start in range(0, 10 - length):
                num = int(digits[start:start+length])
                if low <= num <= high:
                    result.append(num)

        return result
