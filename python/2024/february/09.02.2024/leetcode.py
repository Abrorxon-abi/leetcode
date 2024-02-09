from typing import List


class Solution:
    def largestDivisibleSubset(self, nums: List[int]) -> List[int]:
        if not nums:
            return []

        nums.sort()
        n = len(nums)

        dp = [1] * n
        prev = [-1] * n

        max_len, end_index = 1, 0
        for i in range(1, n):
            for j in range(i - 1, -1, -1):
                if nums[i] % nums[j] == 0 and dp[i] < dp[j] + 1:
                    dp[i] = dp[j] + 1
                    prev[i] = j

            if dp[i] > max_len:
                max_len = dp[i]
                end_index = i

        result = []
        while end_index != -1:
            result.append(nums[end_index])
            end_index = prev[end_index]

        return result[::-1]
