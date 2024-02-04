from typing import List


class Solution:
    def divideArray(self, nums: List[int], k: int) -> List[List[int]]:
        nums.sort()
        result = []
        i = 0
        while i < len(nums):
            current_array = [nums[i]]
            j = i + 1
            while j < len(nums) and j < i + 3 and nums[j] - nums[i] <= k:
                current_array.append(nums[j])
                j += 1
            if len(current_array) == 3:
                result.append(current_array)
                i = j
            else:
                return []
        return result
