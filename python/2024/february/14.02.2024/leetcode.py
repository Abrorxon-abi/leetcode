from typing import List


class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        positive_numbers = [num for num in nums if num > 0]
        negative_numbers = [num for num in nums if num < 0]

        result = []

        for i in range(len(positive_numbers)):
            result.append(positive_numbers[i])
            result.append(negative_numbers[i])

        return result
