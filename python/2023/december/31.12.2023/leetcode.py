class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        first_occurrence = {}
        max_distance = -1

        for i, char in enumerate(s):
            if char in first_occurrence:
                distance = i - first_occurrence[char] - 1
                max_distance = max(max_distance, distance)
            else:
                first_occurrence[char] = i

        return max_distance
