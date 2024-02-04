from typing import List


class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count_map = {}

        for num in arr:
            count_map[num] = count_map.get(num, 0) + 1

        unique_counts = set(count_map.values())

        return len(unique_counts) == len(count_map)
