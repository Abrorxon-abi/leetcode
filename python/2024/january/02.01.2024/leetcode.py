from typing import List


class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        freq_dict = {}
        for num in nums:
            freq_dict[num] = freq_dict.get(num, 0) + 1

        sorted_nums = sorted(nums, key=lambda x: (-freq_dict[x], x))

        result_matrix = []

        for num in sorted_nums:
            added = False
            for row in result_matrix:
                if num not in row:
                    row.append(num)
                    added = True
                    break
            if not added:
                result_matrix.append([num])

        return result_matrix
