class Solution:
    def minSteps(self, s: str, t: str) -> int:
        if len(s) != len(t):
            return -1

        char_count = [0] * 26

        for char in s:
            char_count[ord(char) - ord('a')] += 1

        for char in t:
            char_count[ord(char) - ord('a')] -= 1

        steps = sum(abs(count) for count in char_count) // 2

        return steps
