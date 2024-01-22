from typing import List


class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)

        expected_sum = n * (n + 1) // 2
        actual_sum = sum(nums)

        expected_sum_squares = n * (n + 1) * (2 * n + 1) // 6
        actual_sum_squares = sum(x ** 2 for x in nums)

        delta_sum = expected_sum - actual_sum
        delta_sum_squares = expected_sum_squares - actual_sum_squares

        missing_number = (delta_sum + delta_sum_squares // delta_sum) // 2
        duplicate_number = missing_number - delta_sum

        return [duplicate_number, missing_number]
